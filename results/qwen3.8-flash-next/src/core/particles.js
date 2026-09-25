/**
 * 空中粒子：落英 / 晨雾微尘 / 萤火（SPEC §6 尾条）。
 *
 * createParticles(scene) -> { setMode(mode, tone), update(dt, camera), dispose(), object, mode }
 *
 * 假设与非直观约束：
 * - 只有一份 BufferGeometry（1500 点，上限），换模式仅改 drawRange / 材质 / 颜色，绝不重建几何。
 * - 位置存“相对包围盒中心”的局部坐标并做 wrap 循环；中心平滑跟随相机（XZ），
 *   高度 clamp 在一定带内，避免俯视时粒子贴着相机爆开或整组跑到视野外。
 * - 全部 1500 点每帧都参与模拟，drawRange 变小时多余点仍留在盒内，放大时不会闪回旧位置。
 * - 贴图一律程序化 CanvasTexture（不加载外部资源）。
 * - 不投影、不接受阴影：Points 本身不参与 shadow map。
 */

import * as THREE from 'three';
import { P } from '../config.js';

const MAX_POINTS = 1500;
const COLOR_FADE = 0.9;   // 秒，随色调过渡

/** 三种模式的物理/外观参数（世界单位：1 voxel ≈ 0.35 m） */
const MODES = {
  petal: {
    count: 1100,
    box: [300, 150, 320],
    size: 2.6,
    opacity: 0.92,
    additive: false,
    sprite: 'petal',
    fall: [3.5, 9.0],        // 下落速度区间
    sway: [2.0, 6.5],        // 横向摆动幅度
    drift: [0.6, 2.4],       // 常速横向漂移
    spin: 0.9,
    colors: [P.blossom, P.blossomDeep, P.paper, P.silk],
  },
  dust: {
    count: 1500,
    box: [340, 180, 360],
    size: 1.15,
    opacity: 0.4,
    additive: true,
    sprite: 'dot',
    fall: [0.25, 1.1],
    sway: [0.4, 1.6],
    drift: [1.2, 3.4],
    spin: 0.25,
    colors: [P.paper, P.path, P.silk, P.marble],
  },
  firefly: {
    count: 460,
    box: [280, 110, 300],
    size: 3.4,
    opacity: 1.0,
    additive: true,
    sprite: 'glow',
    fall: [-0.6, 0.9],       // 轻微上下浮
    sway: [1.4, 4.2],
    drift: [0.8, 2.2],
    spin: 1.6,
    colors: [P.goldBright, P.lanternGlow, P.gold],
  },
};

/* -------------------------------------------------- 程序化精灵贴图 */
function spriteTexture(kind) {
  const S = 64;
  const cv = document.createElement('canvas');
  cv.width = S;
  cv.height = S;
  const g = cv.getContext('2d');
  g.clearRect(0, 0, S, S);

  if (kind === 'petal') {
    // 带尖端的椭圆花瓣 + 柔化边缘
    g.translate(S / 2, S / 2);
    g.scale(1, 0.62);
    const grd = g.createRadialGradient(0, 0, 1, 0, 0, S * 0.46);
    grd.addColorStop(0, 'rgba(255,255,255,1)');
    grd.addColorStop(0.55, 'rgba(255,255,255,0.92)');
    grd.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = grd;
    g.beginPath();
    g.arc(0, 0, S * 0.46, 0, Math.PI * 2);
    g.fill();
    g.setTransform(1, 0, 0, 1, 0, 0);
  } else {
    const hard = kind === 'glow';
    const grd = g.createRadialGradient(S / 2, S / 2, 1, S / 2, S / 2, S / 2);
    grd.addColorStop(0, 'rgba(255,255,255,1)');
    grd.addColorStop(hard ? 0.18 : 0.4, 'rgba(255,255,255,0.55)');
    grd.addColorStop(hard ? 0.5 : 0.75, 'rgba(255,255,255,0.16)');
    grd.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = grd;
    g.fillRect(0, 0, S, S);
  }

  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.generateMipmaps = true;
  return tex;
}

/* ------------------------------------------------------------ 主入口 */
export function createParticles(scene) {
  const positions = new Float32Array(MAX_POINTS * 3);
  const colors = new Float32Array(MAX_POINTS * 3);
  const fromColors = new Float32Array(MAX_POINTS * 3);
  const toColors = new Float32Array(MAX_POINTS * 3);
  const vel = new Float32Array(MAX_POINTS * 3);
  const phase = new Float32Array(MAX_POINTS);
  const sway = new Float32Array(MAX_POINTS);
  const jitter = new Float32Array(MAX_POINTS);

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const sprites = {
    petal: spriteTexture('petal'),
    dot: spriteTexture('dot'),
    glow: spriteTexture('glow'),
  };

  const mat = new THREE.PointsMaterial({
    size: MODES.petal.size,
    map: sprites.petal,
    transparent: true,
    depthWrite: false,
    vertexColors: true,
    sizeAttenuation: true,
    toneMapped: false,
    blending: THREE.NormalBlending,
    opacity: MODES.petal.opacity,
  });

  const object = new THREE.Points(geo, mat);
  object.name = 'air-particles';
  object.frustumCulled = false;    // 位置每帧变化且为局部坐标，包围盒不可靠
  object.renderOrder = 2;
  object.position.set(0, 60, 0);
  scene.add(object);

  let mode = 'petal';
  let cfg = MODES[mode];
  let box = cfg.box.slice();
  let elapsed = 0;
  let colorT = 1;
  let disposed = false;

  const rnd = (a, b) => a + Math.random() * (b - a);

  /** 随机洒满包围盒 */
  function scatter() {
    for (let i = 0; i < MAX_POINTS; i++) {
      const o = i * 3;
      positions[o] = rnd(-box[0] / 2, box[0] / 2);
      positions[o + 1] = rnd(-box[1] / 2, box[1] / 2);
      positions[o + 2] = rnd(-box[2] / 2, box[2] / 2);
      phase[i] = Math.random() * Math.PI * 2;
      jitter[i] = Math.random();
    }
    geo.getAttribute('position').needsUpdate = true;
  }

  /** 依模式给速度：下落 + 横向漂移 */
  function retuneVel() {
    for (let i = 0; i < MAX_POINTS; i++) {
      const o = i * 3;
      sway[i] = rnd(cfg.sway[0], cfg.sway[1]);
      vel[o] = rnd(-cfg.drift[0], cfg.drift[0]) * (jitter[i] > 0.5 ? 1 : -1);
      vel[o + 1] = -rnd(cfg.fall[0], cfg.fall[1]);
      vel[o + 2] = rnd(-cfg.drift[1], cfg.drift[1]) * (jitter[i] > 0.33 ? 1 : -1);
    }
  }

  /** 目标颜色 = 调色板基色 × 色调 tint，写进 toColors */
  function retuneColors(tone) {
    const base = new THREE.Color();
    const tint = new THREE.Color((tone && tone.tint) || 0xffffff);
    for (let i = 0; i < MAX_POINTS; i++) {
      const o = i * 3;
      const list = cfg.colors;
      base.setHex(list[i % list.length], THREE.SRGBColorSpace);
      base.lerp(tint, tone ? 0.32 : 0.0);
      // 逐点亮度微差，避免整片同色
      const v = 0.82 + 0.18 * jitter[i];
      toColors[o] = base.r * v;
      toColors[o + 1] = base.g * v;
      toColors[o + 2] = base.b * v;
    }
  }

  /** 换色并开始 ~0.9s 交叉淡化（与光照过渡同节奏） */
  function recolor(tone) {
    fromColors.set(colors);
    retuneColors(tone);
    colorT = 0;
  }

  scatter();
  retuneVel();
  retuneColors(null);
  colors.set(toColors);
  fromColors.set(toColors);
  geo.getAttribute('color').needsUpdate = true;
  geo.setDrawRange(0, cfg.count);

  return {
    object,
    get mode() { return mode; },
    count() { return Math.min(cfg.count, MAX_POINTS); },

    /**
     * @param {'petal'|'dust'|'firefly'} next
     * @param {object} [tone] 当前色调对象（TONES[key]），用于 tint
     */
    setMode(next, tone) {
      const c = MODES[next];
      if (!c) {
        console.warn(`[particles] 未知模式 "${next}"，可用：${Object.keys(MODES).join('/')}`);
        return;
      }
      const boxChanged = c.box[0] !== cfg.box[0] || c.box[1] !== cfg.box[1] || c.box[2] !== cfg.box[2];
      mode = next;
      cfg = c;
      box = c.box.slice();
      if (boxChanged) scatter();
      retuneVel();
      recolor(tone || null);
      mat.size = c.size;
      mat.opacity = c.opacity;
      mat.map = sprites[c.sprite];
      mat.blending = c.additive ? THREE.AdditiveBlending : THREE.NormalBlending;
      mat.needsUpdate = true;
      geo.setDrawRange(0, Math.min(c.count, MAX_POINTS));
    },

    /** 色调切换时只换色不重置运动 */
    setTone(tone) {
      recolor(tone || null);
    },

    /**
     * @param {number} dt 秒
     * @param {THREE.Camera} camera
     */
    update(dt, camera) {
      if (disposed) return;
      const step = Number.isFinite(dt) ? Math.max(0, Math.min(0.05, dt)) : 0;
      elapsed += step;

      // 包围盒中心平滑跟随相机
      if (camera) {
        const cp = camera.position;
        const tx = Math.max(-150, Math.min(150, cp.x * 0.55));
        const tz = Math.max(-190, Math.min(190, cp.z * 0.5));
        const ty = Math.max(24, Math.min(96, cp.y * 0.42));
        const k = 1 - Math.exp(-step * 1.1);
        object.position.x += (tx - object.position.x) * k;
        object.position.y += (ty - object.position.y) * k;
        object.position.z += (tz - object.position.z) * k;
      }

      const hx = box[0] / 2, hy = box[1] / 2, hz = box[2] / 2;
      const spin = cfg.spin;

      // 全量模拟（1500 点，成本可忽略）：drawRange 变大时不会露出陈旧的静止点
      for (let i = 0; i < MAX_POINTS; i++) {
        const o = i * 3;
        const ph = phase[i] + elapsed * spin;
        positions[o] += (vel[o] + Math.sin(ph) * sway[i]) * step;
        positions[o + 1] += vel[o + 1] * step;
        positions[o + 2] += (vel[o + 2] + Math.cos(ph * 0.77) * sway[i] * 0.6) * step;

        if (positions[o] > hx) positions[o] -= box[0]; else if (positions[o] < -hx) positions[o] += box[0];
        if (positions[o + 2] > hz) positions[o + 2] -= box[2]; else if (positions[o + 2] < -hz) positions[o + 2] += box[2];
        if (positions[o + 1] < -hy) {
          positions[o + 1] += box[1];
        } else if (positions[o + 1] > hy) {
          positions[o + 1] -= box[1];
        }
      }
      geo.getAttribute('position').needsUpdate = true;

      if (colorT < 1) {
        colorT = Math.min(1, colorT + step / COLOR_FADE);
        const e = colorT * colorT * (3 - 2 * colorT);
        for (let i = 0; i < colors.length; i++) colors[i] = fromColors[i] + (toColors[i] - fromColors[i]) * e;
        geo.getAttribute('color').needsUpdate = true;
      }
    },

    dispose() {
      disposed = true;
      scene.remove(object);
      geo.dispose();
      mat.dispose();
      for (const k in sprites) sprites[k].dispose();
    },
  };
}
