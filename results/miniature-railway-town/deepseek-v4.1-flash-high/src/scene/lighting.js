/**
 * lighting.js — 太阳/月亮、半球光、天空穹顶、太阳光晕、雾、环境贴图与夜灯。
 *
 * 思路：把每个时段的调色板摊平成一组标量（颜色用 0xRRGGBB 整数保存），
 * 过渡时在「上一生效状态」与「目标状态」之间逐项线性插值并写回同一批对象，
 * 因此切换只改变数值、不重建材质/灯光，也就不会有闪烁或色彩跳变。
 * renderer 的渲染设置（toneMapping 等）由 main.js 负责，本模块只写 toneMappingExposure。
 */
import * as THREE from 'three';
import { CONFIG } from '../config.js';
import { PALETTES, mixHex } from '../palette.js';
import { setNightEmissive, setEnvironmentIntensity } from './materials.js';

/** 天空穹顶半径：远大于沙盘（44×33），又小于相机 far(400)。 */
const SKY_RADIUS = 220;
/** 平行光相对焦点的距离：既覆盖阴影相机 far，又让光线近似平行。 */
const SUN_DISTANCE = 70;
/** 光晕精灵沿太阳方向的放置距离，需落在穹顶内侧。 */
const GLOW_DISTANCE = 200;
const GLOW_SCALE = 46;
/** 太阳/阴影/光晕共同对准的焦点（镇中心，与相机 target 一致）。 */
const FOCUS = new THREE.Vector3(-2, 0, -0.4);

/** 需要线性插值的标量项。 */
const SCALAR_KEYS = [
  'sunIntensity',
  'sunElevation',
  'sunAzimuth',
  'hemiIntensity',
  'ambientIntensity',
  'fogNear',
  'fogFar',
  'environmentIntensity',
  'emissive',
  'lampLightIntensity',
  'sunGlow',
  'shadowIntensity',
  'exposure',
];

/** 需要在 sRGB 空间混合的颜色项。 */
const COLOR_KEYS = [
  'sunColor',
  'hemiSky',
  'hemiGround',
  'ambientColor',
  'skyTop',
  'skyHorizon',
  'skyBottom',
  'fogColor',
];

/** 把调色板摊平成可插值的平面状态。 */
function makeState(palette, mode) {
  return {
    sunColor: palette.sunColor,
    sunIntensity: palette.sunIntensity,
    sunElevation: palette.sunElevationDeg,
    sunAzimuth: palette.sunAzimuthDeg,
    hemiSky: palette.hemiSky,
    hemiGround: palette.hemiGround,
    hemiIntensity: palette.hemiIntensity,
    ambientColor: palette.ambientColor,
    ambientIntensity: palette.ambientIntensity,
    skyTop: palette.skyTop,
    skyHorizon: palette.skyHorizon,
    skyBottom: palette.skyBottom,
    fogColor: palette.fogColor,
    fogNear: palette.fogNear,
    fogFar: palette.fogFar,
    environmentIntensity: palette.environmentIntensity,
    emissive: palette.emissive,
    lampLightIntensity: palette.lampLightIntensity,
    sunGlow: palette.sunGlow,
    shadowIntensity: palette.shadowIntensity,
    exposure: CONFIG.render.exposure[mode] ?? 1,
  };
}

function blankState() {
  const state = {};
  for (let i = 0; i < SCALAR_KEYS.length; i++) state[SCALAR_KEYS[i]] = 0;
  for (let i = 0; i < COLOR_KEYS.length; i++) state[COLOR_KEYS[i]] = 0;
  return state;
}

function copyInto(dst, src) {
  for (let i = 0; i < SCALAR_KEYS.length; i++) dst[SCALAR_KEYS[i]] = src[SCALAR_KEYS[i]];
  for (let i = 0; i < COLOR_KEYS.length; i++) dst[COLOR_KEYS[i]] = src[COLOR_KEYS[i]];
  return dst;
}

function lerpInto(dst, a, b, t) {
  for (let i = 0; i < SCALAR_KEYS.length; i++) {
    const k = SCALAR_KEYS[i];
    dst[k] = a[k] + (b[k] - a[k]) * t;
  }
  for (let i = 0; i < COLOR_KEYS.length; i++) {
    const k = COLOR_KEYS[i];
    dst[k] = mixHex(a[k], b[k], t);
  }
  return dst;
}

/** 归一到 (-180, 180]，让方位角走最短弧，避免过渡时太阳绕场一周。 */
function wrap180(deg) {
  let d = deg % 360;
  if (d > 180) d -= 360;
  else if (d < -180) d += 360;
  return d;
}

const _dir = new THREE.Vector3();

/** 由高度角/方位角求指向太阳的单位向量：+X 东、+Z 南。 */
function sunDirection(elevationDeg, azimuthDeg, out) {
  const el = THREE.MathUtils.degToRad(elevationDeg);
  const az = THREE.MathUtils.degToRad(azimuthDeg);
  const ce = Math.cos(el);
  return out.set(ce * Math.sin(az), Math.sin(el), ce * Math.cos(az));
}

/** 高度归一值(0 底 / 0.5 地平线 / 1 顶) → 穹顶颜色。 */
function skyColorAt(yn, top, horizon, bottom) {
  if (yn >= 0.5) {
    const t = (yn - 0.5) * 2;
    return mixHex(horizon, top, t * t * (3 - 2 * t));
  }
  const t = (0.5 - yn) * 2;
  return mixHex(horizon, bottom, t * t * (3 - 2 * t));
}

const _skyTemp = new THREE.Color();

/** 只重写颜色属性，不重建几何/材质。 */
function paintSky(heights, array, attr, top, horizon, bottom) {
  for (let i = 0; i < heights.length; i++) {
    // 色彩管理下 setHex 会把 sRGB 转到线性工作空间，顶点色需要线性值
    _skyTemp.setHex(skyColorAt((heights[i] + 1) * 0.5, top, horizon, bottom));
    const o = i * 3;
    array[o] = _skyTemp.r;
    array[o + 1] = _skyTemp.g;
    array[o + 2] = _skyTemp.b;
  }
  attr.needsUpdate = true;
}

/** 采样穹顶顶点高度（-1 底 .. 1 顶）与颜色缓冲。 */
function createSkySurface(radius, segmentsW, segmentsH) {
  const geo = new THREE.SphereGeometry(radius, segmentsW, segmentsH);
  const pos = geo.attributes.position;
  const count = pos.count;
  const heights = new Float32Array(count);
  for (let i = 0; i < count; i++) heights[i] = pos.getY(i) / radius;
  const array = new Float32Array(count * 3);
  const attr = new THREE.BufferAttribute(array, 3);
  attr.setUsage(THREE.DynamicDrawUsage);
  geo.setAttribute('color', attr);
  return { geo, heights, array, attr };
}

/** 径向渐变光晕贴图（仅 CanvasTexture，不引入外部资源）。 */
function createGlowTexture() {
  const size = 128;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  const half = size / 2;
  const gradient = ctx.createRadialGradient(half, half, 0, half, half, half);
  gradient.addColorStop(0, 'rgba(255,255,255,1)');
  gradient.addColorStop(0.18, 'rgba(255,255,255,0.72)');
  gradient.addColorStop(0.45, 'rgba(255,255,255,0.2)');
  gradient.addColorStop(0.72, 'rgba(255,255,255,0.05)');
  gradient.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

/**
 * 用临时场景（渐变天空球 + 一块代表太阳的亮面）烘焙一次环境贴图。
 * 只做一次；之后昼夜差异完全靠 environmentIntensity 调节，不重新生成。
 */
function bakeEnvironment(renderer, palette) {
  const pmrem = new THREE.PMREMGenerator(renderer);
  const tempScene = new THREE.Scene();

  const dome = createSkySurface(40, 32, 24);
  paintSky(dome.heights, dome.array, dome.attr, palette.skyTop, palette.skyHorizon, palette.skyBottom);
  // toneMapped:false —— 保住 >1 的 HDR 值，否则会被渲染器色调映射压成 LDR
  const domeMat = new THREE.MeshBasicMaterial({
    vertexColors: true,
    side: THREE.BackSide,
    toneMapped: false,
  });
  tempScene.add(new THREE.Mesh(dome.geo, domeMat));

  const quadGeo = new THREE.PlaneGeometry(14, 14);
  const quadMat = new THREE.MeshBasicMaterial({ toneMapped: false });
  quadMat.color.setHex(palette.sunColor).multiplyScalar(7);
  const quad = new THREE.Mesh(quadGeo, quadMat);
  sunDirection(palette.sunElevationDeg, palette.sunAzimuthDeg, _dir);
  quad.position.copy(_dir).multiplyScalar(30);
  quad.lookAt(0, 0, 0);
  tempScene.add(quad);

  const target = pmrem.fromScene(tempScene, 0, 0.5, 120);
  const texture = target.texture;

  // 临时资源全部释放；返回的 render target 贴图由 PMREMGenerator.dispose 之外的引用持有
  dome.geo.dispose();
  domeMat.dispose();
  quadGeo.dispose();
  quadMat.dispose();
  pmrem.dispose();
  tempScene.clear();
  return texture;
}

export function createLighting({ scene, renderer }) {
  const root = new THREE.Group();
  root.name = 'lighting';

  // --- 太阳/月亮：一盏平行光同时负责日照与投影 ---
  const sun = new THREE.DirectionalLight(0xffffff, 0);
  sun.castShadow = true;
  const shadowSize = CONFIG.render.shadowMapSize;
  sun.shadow.mapSize.set(shadowSize, shadowSize);
  const shadowCam = sun.shadow.camera;
  shadowCam.left = -26;
  shadowCam.right = 26;
  shadowCam.top = 21;
  shadowCam.bottom = -21;
  shadowCam.near = 1;
  shadowCam.far = 170;
  shadowCam.updateProjectionMatrix();
  sun.shadow.bias = -0.0006;
  sun.shadow.normalBias = 0.02;
  sun.target.position.copy(FOCUS);
  scene.add(sun);
  scene.add(sun.target); // target 必须在场景图里才会更新世界矩阵

  // --- 半球光 + 环境光：补天光与地面反光，避免背光面死黑 ---
  const hemi = new THREE.HemisphereLight(0xffffff, 0x000000, 0);
  scene.add(hemi);
  const ambient = new THREE.AmbientLight(0xffffff, 0);
  scene.add(ambient);

  // --- 天空穹顶 ---
  const skySurface = createSkySurface(SKY_RADIUS, 32, 24);
  const skyMat = new THREE.MeshBasicMaterial({
    vertexColors: true,
    side: THREE.BackSide,
    fog: false,
    depthWrite: false,
  });
  const sky = new THREE.Mesh(skySurface.geo, skyMat);
  sky.frustumCulled = false; // 相机始终在穹顶内部，包围盒剔除会误判
  sky.renderOrder = -1;
  root.add(sky);

  // --- 太阳光晕 ---
  const glowMat = new THREE.SpriteMaterial({
    map: createGlowTexture(),
    color: 0xffffff,
    transparent: true,
    opacity: 0,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    fog: false,
  });
  const glow = new THREE.Sprite(glowMat);
  glow.scale.setScalar(GLOW_SCALE);
  root.add(glow);

  // --- 雾：远景由雾色收束，背景交给穹顶 ---
  const fog = new THREE.Fog(0x000000, 1, 1000);
  scene.fog = fog;
  scene.background = null;

  const initialMode = PALETTES[CONFIG.timeOfDay.default] ? CONFIG.timeOfDay.default : 'evening';

  // --- 环境贴图：一次烘焙，长期复用 ---
  scene.environment = bakeEnvironment(renderer, PALETTES[initialMode]);

  // --- 夜灯（路灯/窗户等锚点）---
  const maxLamps = CONFIG.nightLights.maxPointLights;
  const activeLamps = Math.min(maxLamps, CONFIG.nightLights.activePointLights);
  const lampLights = [];
  const lampBase = [];

  let targetMode = initialMode;
  let fromState = null;
  let toState = null;
  let progress = 1;
  const current = makeState(PALETTES[initialMode], initialMode);

  // 记录上一次写入的值，避免每帧重复设置 uniforms / 重写顶点缓冲
  let appliedEnv = NaN;
  let appliedEmissive = NaN;
  let appliedSkyTop = -1;
  let appliedSkyHorizon = -1;
  let appliedSkyBottom = -1;

  function applyState(s) {
    sunDirection(s.sunElevation, s.sunAzimuth, _dir);
    sun.position.copy(FOCUS).addScaledVector(_dir, SUN_DISTANCE);
    sun.color.setHex(s.sunColor);
    sun.intensity = s.sunIntensity;
    sun.shadow.intensity = s.shadowIntensity;

    hemi.color.setHex(s.hemiSky);
    hemi.groundColor.setHex(s.hemiGround);
    hemi.intensity = s.hemiIntensity;

    ambient.color.setHex(s.ambientColor);
    ambient.intensity = s.ambientIntensity;

    fog.color.setHex(s.fogColor);
    fog.near = s.fogNear;
    fog.far = s.fogFar;

    scene.environmentIntensity = s.environmentIntensity;
    if (s.environmentIntensity !== appliedEnv) {
      appliedEnv = s.environmentIntensity;
      setEnvironmentIntensity(s.environmentIntensity);
    }
    if (s.emissive !== appliedEmissive) {
      appliedEmissive = s.emissive;
      setNightEmissive(s.emissive);
    }

    renderer.toneMappingExposure = s.exposure;

    if (
      s.skyTop !== appliedSkyTop ||
      s.skyHorizon !== appliedSkyHorizon ||
      s.skyBottom !== appliedSkyBottom
    ) {
      appliedSkyTop = s.skyTop;
      appliedSkyHorizon = s.skyHorizon;
      appliedSkyBottom = s.skyBottom;
      paintSky(skySurface.heights, skySurface.array, skySurface.attr, s.skyTop, s.skyHorizon, s.skyBottom);
    }

    glow.position.copy(FOCUS).addScaledVector(_dir, GLOW_DISTANCE);
    glowMat.color.setHex(s.sunColor);
    glowMat.opacity = s.sunGlow;
    glow.visible = s.sunGlow > 0.002;

    for (let i = 0; i < lampLights.length; i++) {
      const lamp = lampLights[i];
      const intensity = i < activeLamps ? lampBase[i] * s.lampLightIntensity : 0;
      lamp.intensity = intensity;
      lamp.visible = intensity > 0;
    }
  }

  function update(dt) {
    if (progress >= 1 || fromState === null) return;
    progress = Math.min(1, progress + (dt > 0 ? dt : 0) / CONFIG.timeOfDay.transitionSeconds);
    if (progress >= 1) {
      progress = 1;
      copyInto(current, toState); // 精确落到目标值，反复切换不会残留误差
      fromState = null;
    } else {
      lerpInto(current, fromState, toState, progress);
    }
    applyState(current);
  }

  function setTimeOfDay(mode) {
    const palette = PALETTES[mode];
    if (!palette) return;
    targetMode = mode;
    // 从「当前实际生效值」出发，过渡到一半再切目标也不会跳变、不累积误差
    if (fromState === null) fromState = blankState();
    copyInto(fromState, current);
    toState = makeState(palette, mode);
    // 方位角取最短弧：避免太阳绕场一周
    toState.sunAzimuth = fromState.sunAzimuth + wrap180(toState.sunAzimuth - fromState.sunAzimuth);
    progress = 0;
  }

  function setLightAnchors(anchors) {
    for (let i = 0; i < lampLights.length; i++) {
      scene.remove(lampLights[i]);
      lampLights[i].dispose();
    }
    lampLights.length = 0;
    lampBase.length = 0;

    const list = (anchors ?? []).slice();
    // priority 越大越优先；同级取离镇中心更近者
    list.sort(
      (a, b) =>
        (b.priority || 0) - (a.priority || 0) ||
        a.position.distanceToSquared(FOCUS) - b.position.distanceToSquared(FOCUS)
    );

    const count = Math.min(list.length, maxLamps);
    for (let i = 0; i < count; i++) {
      const anchor = list[i];
      const light = new THREE.PointLight(anchor.color, 0, anchor.distance, anchor.decay ?? 2);
      light.position.copy(anchor.position);
      light.castShadow = false;
      scene.add(light);
      lampLights.push(light);
      lampBase.push(anchor.intensity || 0);
    }
    applyState(current); // 立刻按当前灯强度倍率刷新
  }

  applyState(current);
  return { object3D: root, update, setTimeOfDay, setLightAnchors, getMode: () => targetMode };
}

/* 自检（临时注释）：
 * day     sunColor 0xfff4e0  sunIntensity 3.0   az 128 / el 58  exposure 1.00  lampLightIntensity 0.0   emissive 0.0
 * evening sunColor 0xffb066  sunIntensity 2.55  az 262 / el 15  exposure 1.06  lampLightIntensity 0.55  emissive 0.4
 * night   sunColor 0x9fc0ff  sunIntensity 0.5   az 20  / el 46  exposure 1.22  lampLightIntensity 1.0   emissive 1.0
 * 默认 evening。过渡 1.1s 内逐项线性插值；方位角走最短弧，所以 evening→night 是 262°→380°(≡20°)，不绕场一周。
 */
