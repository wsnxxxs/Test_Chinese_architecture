/**
 * 光照 / 阴影 / 雾 / 程序化天空 / 夜景点光（SPEC §6）。
 *
 * 导出：createLighting(scene, renderer) -> {
 *   apply(toneKey), current(), update(dt), refreshShadow(),
 *   setShadowQuality(px), setFillEnabled(on), dispose(),
 *   dir, fill, hemi, amb, sky, lanterns
 * }
 *
 * 契约外的实现假设（都写在这里，便于集成时定位）：
 * 1. 坐标约定：1 voxel = 1 world unit；azimuth 以「+Z(南) 为 0°、向 +X(东) 为正」计量，
 *    光源放在该方位上（即光照从该方向射向场景），elevation 是相对水平面的仰角。
 * 2. 阴影相机 ortho 半边长取 330 而不是 SPEC 字面的 300：需要覆盖 x∈[-300,300] z∈[-320,320]
 *    （视体是斜的，投影后需要余量），2048 贴图 → 每 texel ≈ 0.32 unit（<1 voxel），斜射不糊。
 * 3. 太阳距离 780（>场景半径）以保证低仰角（dusk 8°）时塔/远山仍在 near=1/far=1400 之间。
 * 4. 阴影贴图 autoUpdate=false：静态体素场景 + 只有光照变化时才需要重投，
 *    过渡期间逐帧 refreshShadow()，其余帧省掉一次 2048² 的深度渲染（性能预算关键）。
 * 5. 天空不用 scene.background，而是包围场景的 BackSide 大球 + 程序渐变 CanvasTexture：
 *    这样可以随色调 lerp 重绘，并且 material.fog=false 使其不受 FogExp2 吞噬。
 *    穹顶固定在世界原点、半径 1500 > controls.maxDistance(900) + 场景偏移，任何机位都在其内部；
 *    固定而非跟随相机，可保证地平线始终贴在世界 y≈0 处。
 * 6. PointLight 数量 = L.lanternLights.length（9 个，无阴影），强度 = T.lantern * 260，
 *    decay=1.4 / distance=95，T.lantern<=0 时整组 visible=false（零开销）。
 */

import * as THREE from 'three';
import { TONES, L, P } from '../config.js';

const DEG2RAD = Math.PI / 180;
const SUN_DISTANCE = 780;
const SHADOW_HALF = 330;
const SKY_RADIUS = 1500;
const TRANSITION = 0.9;          // 秒，色调过渡时长（SPEC：~0.9s）
const LANTERN_UNIT = 260;        // T.lantern=1 对应的 PointLight 强度

const smoothstep = (t) => t * t * (3 - 2 * t);

/** 方位角/仰角（度）→ 单位方向向量（从场景指向光源） */
function dirFromAngles(azimuthDeg, elevationDeg, out) {
  const az = azimuthDeg * DEG2RAD;
  const el = elevationDeg * DEG2RAD;
  const c = Math.cos(el);
  out.set(Math.sin(az) * c, Math.sin(el), Math.cos(az) * c);
  return out.normalize();
}

/* ------------------------------------------------------------ 天空贴图 */
function makeSkyTexture() {
  const cv = document.createElement('canvas');
  cv.width = 8;
  cv.height = 512;
  const ctx = cv.getContext('2d');
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.minFilter = THREE.LinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.generateMipmaps = false;
  tex.wrapS = THREE.ClampToEdgeWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  return { ctx, tex, w: cv.width, h: cv.height };
}

/** 上 skyHigh → 中 sky → 下雾色（三停渐变，避免色带） */
function paintSky(sky, high, mid, low) {
  const { ctx, w, h } = sky;
  const g = ctx.createLinearGradient(0, 0, 0, h);
  g.addColorStop(0, high.getStyle());
  g.addColorStop(0.42, high.getStyle());
  g.addColorStop(0.63, mid.getStyle());
  g.addColorStop(0.86, mid.getStyle());
  g.addColorStop(1, low.getStyle());
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, w, h);
  sky.tex.needsUpdate = true;
}

/* ------------------------------------------------------------ 色调数值 */
/** 把一个色调表成可 lerp 的扁平结构（颜色一律转成 linear 的 THREE.Color） */
function toneState(key) {
  const T = TONES[key] || TONES[Object.keys(TONES)[0]];
  return {
    key,
    dirColor: new THREE.Color(T.dir.color),
    dirIntensity: T.dir.intensity,
    dirAzimuth: T.dir.azimuth,
    dirElevation: T.dir.elevation,
    dirShadow: T.dir.shadow,
    fillColor: new THREE.Color(T.fill.color),
    fillIntensity: T.fill.intensity,
    fillAzimuth: T.fill.azimuth,
    fillElevation: T.fill.elevation,
    hemiSky: new THREE.Color(T.hemi.sky),
    hemiGround: new THREE.Color(T.hemi.ground),
    hemiIntensity: T.hemi.intensity,
    ambColor: new THREE.Color(T.amb.color),
    ambIntensity: T.amb.intensity,
    fogColor: new THREE.Color(T.fog),
    fogDensity: T.fogDensity,
    skyColor: new THREE.Color(T.sky),
    skyHighColor: new THREE.Color(T.skyHigh),
    exposure: T.exposure,
    lantern: T.lantern,
    particle: T.particle,
    tint: new THREE.Color(T.tint),
  };
}

const COLOR_KEYS = ['dirColor', 'fillColor', 'hemiSky', 'hemiGround', 'ambColor', 'fogColor', 'skyColor', 'skyHighColor', 'tint'];
const NUM_KEYS = ['dirIntensity', 'dirAzimuth', 'dirElevation', 'fillIntensity', 'fillAzimuth', 'fillElevation',
  'hemiIntensity', 'ambIntensity', 'fogDensity', 'exposure', 'lantern'];

function copyTone(dst, src) {
  dst.key = src.key;
  dst.dirShadow = src.dirShadow;
  dst.particle = src.particle;
  for (const k of COLOR_KEYS) dst[k].copy(src[k]);
  for (const k of NUM_KEYS) dst[k] = src[k];
  return dst;
}

/** dst = lerp(a, b, t) */
function lerpTone(dst, a, b, t) {
  dst.key = t < 1 ? `${a.key}→${b.key}` : b.key;
  dst.dirShadow = t < 0.5 ? a.dirShadow : b.dirShadow;
  dst.particle = t < 0.5 ? a.particle : b.particle;
  for (const k of COLOR_KEYS) dst[k].copy(a[k]).lerp(b[k], t);
  for (const k of NUM_KEYS) dst[k] = a[k] + (b[k] - a[k]) * t;
  return dst;
}

/* ============================================================== 主入口 */
export function createLighting(scene, renderer) {
  if (!scene) throw new Error('createLighting(scene, renderer): scene 缺失');

  const A = toneState('dawn');   // 过渡起点
  const B = toneState('dawn');   // 过渡终点
  const cur = toneState('dawn'); // 当前生效值
  let mix = 1;                   // 过渡进度 0→1

  const tmpDir = new THREE.Vector3();
  const tmpColor = new THREE.Color();

  /* --- 主平行光（日/月）：唯一投影光源 --- */
  const dir = new THREE.DirectionalLight(cur.dirColor, cur.dirIntensity);
  dir.castShadow = true;
  dir.shadow.mapSize.set(cur.dirShadow, cur.dirShadow);
  const cam = dir.shadow.camera;
  cam.left = -SHADOW_HALF;
  cam.right = SHADOW_HALF;
  cam.top = SHADOW_HALF;
  cam.bottom = -SHADOW_HALF;
  cam.near = 1;
  cam.far = 1400;
  cam.updateProjectionMatrix();
  dir.shadow.bias = -0.0004;
  dir.shadow.normalBias = 0.8;
  dir.shadow.autoUpdate = false;
  dir.target.position.set(0, 20, -20);
  scene.add(dir.target);
  scene.add(dir);

  /* --- 半球光 + 环境光 --- */
  const hemi = new THREE.HemisphereLight(cur.hemiSky, cur.hemiGround, cur.hemiIntensity);
  hemi.position.set(0, 200, 0);
  scene.add(hemi);
  const amb = new THREE.AmbientLight(cur.ambColor, cur.ambIntensity);
  scene.add(amb);

  /* --- 反向补光（不投影，只勾暗部层次） --- */
  const fill = new THREE.DirectionalLight(cur.fillColor, cur.fillIntensity);
  fill.castShadow = false;
  fill.target.position.set(0, 20, -20);
  scene.add(fill.target);
  scene.add(fill);

  /* --- 雾 --- */
  const fog = new THREE.FogExp2(cur.fogColor, cur.fogDensity);
  const prevFog = scene.fog;
  scene.fog = fog;

  /* --- 程序化渐变天空 --- */
  const skyTex = makeSkyTexture();
  const skyGeo = new THREE.SphereGeometry(SKY_RADIUS, 24, 16);
  const skyMat = new THREE.MeshBasicMaterial({
    map: skyTex.tex,
    side: THREE.BackSide,
    depthWrite: false,
    fog: false,
  });
  const sky = new THREE.Mesh(skyGeo, skyMat);
  sky.name = 'sky';
  sky.renderOrder = -1;
  sky.frustumCulled = false;
  scene.add(sky);

  /* --- 夜景点光（灯笼位） --- */
  const lanternColor = new THREE.Color(P.lanternGlow);
  const lanterns = L.lanternLights.map((p, i) => {
    const l = new THREE.PointLight(lanternColor, 0, 95, 1.4);
    l.position.set(p.x, p.y, p.z);
    l.name = `lantern-light-${i}`;
    l.visible = false;
    scene.add(l);
    return l;
  });

  let elapsed = 0;
  let disposed = false;
  let fillOn = true;

  /** 把 cur 写到所有实际对象上 */
  function applyToScene() {
    dir.color.copy(cur.dirColor);
    dir.intensity = cur.dirIntensity;
    dirFromAngles(cur.dirAzimuth, cur.dirElevation, tmpDir);
    dir.position.copy(tmpDir).multiplyScalar(SUN_DISTANCE).add(dir.target.position);

    fill.color.copy(cur.fillColor);
    fill.intensity = fillOn ? cur.fillIntensity : 0;
    dirFromAngles(cur.fillAzimuth, cur.fillElevation, tmpDir);
    fill.position.copy(tmpDir).multiplyScalar(SUN_DISTANCE * 0.6).add(fill.target.position);

    hemi.color.copy(cur.hemiSky);
    hemi.groundColor.copy(cur.hemiGround);
    hemi.intensity = cur.hemiIntensity;

    amb.color.copy(cur.ambColor);
    amb.intensity = cur.ambIntensity;

    fog.color.copy(cur.fogColor);
    fog.density = cur.fogDensity;

    if (renderer) renderer.toneMappingExposure = cur.exposure;

    paintSky(
      skyTex,
      tmpColor.copy(cur.skyHighColor),
      cur.skyColor,
      cur.fogColor,
    );

    const li = cur.lantern;
    const on = li > 0.001;
    for (let i = 0; i < lanterns.length; i++) {
      const l = lanterns[i];
      l.visible = on;
      if (on) {
        // 极轻的火焰呼吸：确定性好、避免完全静态
        const fl = 1 + 0.05 * Math.sin(elapsed * 1.7 + i * 1.31) + 0.03 * Math.sin(elapsed * 4.3 + i * 0.77);
        l.intensity = li * LANTERN_UNIT * fl;
      }
    }
  }

  /* 首帧初始化：cur/A/B 同为 dawn，直接落一次场景 */
  applyToScene();
  dir.shadow.needsUpdate = true;

  return {
    /**
     * 切到某个色调：不重建对象，TRANSITION 秒内 lerp 完成。
     * @param {'dawn'|'noon'|'dusk'|'night'} toneKey
     */
    apply(toneKey) {
      const next = TONES[toneKey];
      if (!next) {
        console.warn(`[lighting] 未知色调 "${toneKey}"，可用：${Object.keys(TONES).join('/')}`);
        return cur.particle;
      }
      copyTone(A, cur);           // 从当前实际值继续，中途切换也不跳变
      B.key = toneKey;
      const s = toneState(toneKey);
      copyTone(B, s);
      mix = 0;
      dir.shadow.needsUpdate = true;
      return cur.particle;
    },

    /** 当前状态（HUD / 主循环用） */
    current() {
      return {
        key: B.key,
        from: A.key,
        blending: mix < 1,
        t: mix,
        tone: TONES[B.key] || TONES[cur.key],
        particle: cur.particle,
        lantern: cur.lantern,
        exposure: cur.exposure,
      };
    },

    /**
     * 主循环驱动。
     * @param {number} dt 秒
     */
    update(dt) {
      if (disposed) return;
      const step = Number.isFinite(dt) ? Math.min(Math.max(dt, 0), 0.25) : 0;
      elapsed += step;

      if (mix < 1) {
        mix = Math.min(1, mix + step / TRANSITION);
        lerpTone(cur, A, B, smoothstep(mix));
        applyToScene();
        dir.shadow.needsUpdate = true;   // 太阳在动 → 阴影必须逐帧重投
      } else if (cur.lantern > 0.001) {
        // 仅灯笼呼吸，不重绘天空/不重投阴影
        const li = cur.lantern * LANTERN_UNIT;
        for (let i = 0; i < lanterns.length; i++) {
          const l = lanterns[i];
          l.visible = true;
          l.intensity = li * (1 + 0.05 * Math.sin(elapsed * 1.7 + i * 1.31) + 0.03 * Math.sin(elapsed * 4.3 + i * 0.77));
        }
      }
    },

    /** 手动要求重投一次阴影（合成变更、resize 后调用） */
    refreshShadow() {
      dir.shadow.needsUpdate = true;
    },

    /** 自适应降级：阴影贴图分辨率（1024 / 2048 / 512） */
    setShadowQuality(px) {
      const n = Math.max(256, Math.min(4096, Math.round(px) || 1024));
      if (dir.shadow.mapSize.x === n) return;
      dir.shadow.mapSize.set(n, n);
      if (dir.shadow.map) {
        dir.shadow.map.dispose();
        dir.shadow.map = null;
      }
      dir.shadow.needsUpdate = true;
    },

    /** 低端机：关掉补光（少一个光源，视觉损失很小） */
    setFillEnabled(on) {
      fillOn = !!on;
      fill.visible = fillOn;
      fill.intensity = fillOn ? cur.fillIntensity : 0;
    },

    shadowQuality() { return dir.shadow.mapSize.x; },

    dispose() {
      disposed = true;
      scene.remove(dir, dir.target, fill, fill.target, hemi, amb, sky, ...lanterns);
      skyGeo.dispose();
      skyMat.dispose();
      skyTex.tex.dispose();
      if (dir.shadow.map) { dir.shadow.map.dispose(); dir.shadow.map = null; }
      scene.fog = prevFog || null;
    },

    dir, fill, hemi, amb, sky, lanterns,
  };
}
