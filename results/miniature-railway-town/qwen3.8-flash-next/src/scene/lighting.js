import * as THREE from 'three';
import { skyTexture } from '../util/textures.js';
import { clamp, lerp, smoothstep } from '../util/mathx.js';

/**
 * Three lighting moods for the same model: high daylight, the default warm evening,
 * and lamplit night. Transitions are interpolated so switching reads as a time of
 * day passing rather than a hard relight.
 */
export const PRESETS = {
  day: {
    label: '白天',
    sun: { color: 0xfff4e2, intensity: 3.1, dir: [0.34, 0.86, 0.38] },
    fill: { color: 0xbcd4ee, intensity: 0.85 },
    hemi: { sky: 0xbcd8f2, ground: 0x8a7d5e, intensity: 1.05 },
    ambient: { color: 0xdfe8f2, intensity: 0.32 },
    bg: ['#8fb6d8', '#c7d9e6', '#e6ddcb'],
    env: ['#8fb6d8', '#c7d9e6', '#e6ddcb'],
    exposure: 1.02,
    night: 0,
    water: 0.14,
  },
  dusk: {
    label: '傍晚',
    sun: { color: 0xffb06a, intensity: 4.2, dir: [-0.58, 0.42, 0.46] },
    fill: { color: 0x7d97bd, intensity: 0.8 },
    hemi: { sky: 0xb6c6e0, ground: 0x7a6244, intensity: 0.98 },
    ambient: { color: 0x55505c, intensity: 0.5 },
    bg: ['#585069', '#93706f', '#e8ab74'],
    env: ['#6a688a', '#a88878', '#f0bc84'],
    exposure: 1.16,
    night: 0.3,
    water: 0.2,
  },
  night: {
    label: '夜晚',
    sun: { color: 0xa8c4ea, intensity: 0.9, dir: [0.42, 0.62, -0.38] },
    fill: { color: 0x35486e, intensity: 0.42 },
    hemi: { sky: 0x35486e, ground: 0x1b1712, intensity: 0.78 },
    ambient: { color: 0x2b3752, intensity: 0.62 },
    bg: ['#101828', '#1d2536', '#3a4050'],
    env: ['#243050', '#2c344a', '#413a26'],
    exposure: 1.3,
    night: 1,
    water: 0.1,
  },
};

export function createLighting(scene, renderer) {
  const group = new THREE.Group();
  group.name = 'lighting';

  const sun = new THREE.DirectionalLight(0xffffff, 2.8);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.camera.near = 1;
  sun.shadow.camera.far = 90;
  sun.shadow.camera.left = -19;
  sun.shadow.camera.right = 19;
  sun.shadow.camera.top = 16;
  sun.shadow.camera.bottom = -16;
  sun.shadow.bias = -0.0006;
  sun.shadow.normalBias = 0.028;
  sun.shadow.radius = 1.2;
  group.add(sun);
  group.add(sun.target);

  const fill = new THREE.DirectionalLight(0xffffff, 0.5);
  fill.castShadow = false;
  group.add(fill);

  const hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 0.8);
  group.add(hemi);
  const ambient = new THREE.AmbientLight(0xffffff, 0.3);
  group.add(ambient);
  scene.add(group);

  // background gradient
  const bgCanvas = document.createElement('canvas');
  bgCanvas.width = 4;
  bgCanvas.height = 256;
  const bgCtx = bgCanvas.getContext('2d');
  const bgTexture = new THREE.CanvasTexture(bgCanvas);
  bgTexture.colorSpace = THREE.SRGBColorSpace;
  bgTexture.mapping = THREE.EquirectangularReflectionMapping;
  scene.background = bgTexture;

  // IBL per preset so materials and the water keep a believable reflection
  const pmrem = new THREE.PMREMGenerator(renderer);
  pmrem.compileEquirectangularShader();
  const envs = {};
  for (const [name, p] of Object.entries(PRESETS)) {
    const t = skyTexture(p.env[0], p.env[1], p.env[2], name === 'night' ? 60 : 0);
    envs[name] = pmrem.fromEquirectangular(t).texture;
    t.dispose();
  }
  pmrem.dispose();

  const state = {
    from: 'dusk',
    to: 'dusk',
    t: 1,
    current: cloneValues(PRESETS.dusk),
  };
  applyImmediate(PRESETS.dusk);

  function paintBackground(c1, c2, c3) {
    const g = bgCtx.createLinearGradient(0, 0, 0, 256);
    g.addColorStop(0, c1);
    g.addColorStop(0.52, c2);
    g.addColorStop(1, c3);
    bgCtx.fillStyle = g;
    bgCtx.fillRect(0, 0, 4, 256);
    bgTexture.needsUpdate = true;
  }

  function applyValues(v) {
    sun.color.copy(v.sunColor);
    sun.intensity = v.sunIntensity;
    sun.position.copy(v.sunDir);
    fill.color.copy(v.fillColor);
    fill.intensity = v.fillIntensity;
    hemi.color.copy(v.hemiSky);
    hemi.groundColor.copy(v.hemiGround);
    hemi.intensity = v.hemiIntensity;
    ambient.color.copy(v.ambColor);
    ambient.intensity = v.ambIntensity;
    renderer.toneMappingExposure = v.exposure;
    scene.environmentIntensity = 0.55;
    paintBackground(v.bg1, v.bg2, v.bg3);
  }

  function cloneValues(p) {
    return {
      sunColor: new THREE.Color(p.sun.color),
      sunIntensity: p.sun.intensity,
      sunDir: new THREE.Vector3(...p.sun.dir).normalize().multiplyScalar(34),
      fillColor: new THREE.Color(p.fill.color),
      fillIntensity: p.fill.intensity,
      hemiSky: new THREE.Color(p.hemi.sky),
      hemiGround: new THREE.Color(p.hemi.ground),
      hemiIntensity: p.hemi.intensity,
      ambColor: new THREE.Color(p.ambient.color),
      ambIntensity: p.ambient.intensity,
      exposure: p.exposure,
      night: p.night,
      water: p.water,
      bg1: p.bg[0], bg2: p.bg[1], bg3: p.bg[2],
    };
  }

  function applyImmediate(p) {
    applyValues(cloneValues(p));
  }

  /** Blend the two presets' colour channels into the working values. */
  const tmpA = new THREE.Color();
  const tmpB = new THREE.Color();
  const tmpC = new THREE.Color();
  function blend(to, k) {
    const a = state.a, b = cloneValues(PRESETS[to]);
    const v = state.current;
    v.sunColor.copy(a.sunColor).lerp(b.sunColor, k);
    v.sunIntensity = lerp(a.sunIntensity, b.sunIntensity, k);
    v.sunDir.copy(a.sunDir).lerp(b.sunDir, k).normalize().multiplyScalar(34);
    v.fillColor.copy(a.fillColor).lerp(b.fillColor, k);
    v.fillIntensity = lerp(a.fillIntensity, b.fillIntensity, k);
    v.hemiSky.copy(a.hemiSky).lerp(b.hemiSky, k);
    v.hemiGround.copy(a.hemiGround).lerp(b.hemiGround, k);
    v.hemiIntensity = lerp(a.hemiIntensity, b.hemiIntensity, k);
    v.ambColor.copy(a.ambColor).lerp(b.ambColor, k);
    v.ambIntensity = lerp(a.ambIntensity, b.ambIntensity, k);
    v.exposure = lerp(a.exposure, b.exposure, k);
    v.water = lerp(a.water, b.water, k);
    v.night = lerp(a.night, b.night, k);
    v.bg1 = mixHex(a.bg1, b.bg1, k);
    v.bg2 = mixHex(a.bg2, b.bg2, k);
    v.bg3 = mixHex(a.bg3, b.bg3, k);
    applyValues(v);
    return v;
  }

  function mixHex(c1, c2, k) {
    tmpA.set(c1);
    tmpB.set(c2);
    tmpC.copy(tmpA).lerp(tmpB, k);
    return `#${tmpC.getHexString()}`;
  }

  return {
    group,
    sun,
    get nightFactor() { return state.current.night; },
    get transitioning() { return state.t < 1; },
    preset: () => state.to,
    setPreset(name, instant = false) {
      if (!PRESETS[name] || name === state.to) return;
      state.a = cloneValuesRaw(state.current);
      state.from = state.to;
      state.to = name;
      state.t = instant ? 1 : 0;
      scene.environment = envs[name];
      if (instant) blend(name, 1);
    },
    update(dt) {
      if (state.t >= 1) return false;
      state.t = clamp(state.t + dt / 1.35, 0, 1);
      blend(state.to, smootherstep(state.t));
      return true;
    },
    dispose() {
      for (const t of Object.values(envs)) t.dispose();
      bgTexture.dispose();
    },
  };

  function cloneValuesRaw(v) {
    return {
      sunColor: v.sunColor.clone(), sunIntensity: v.sunIntensity, sunDir: v.sunDir.clone(),
      fillColor: v.fillColor.clone(), fillIntensity: v.fillIntensity,
      hemiSky: v.hemiSky.clone(), hemiGround: v.hemiGround.clone(), hemiIntensity: v.hemiIntensity,
      ambColor: v.ambColor.clone(), ambIntensity: v.ambIntensity,
      exposure: v.exposure, night: v.night, water: v.water,
      bg1: v.bg1, bg2: v.bg2, bg3: v.bg3,
    };
  }
}

function smootherstep(t) {
  return t * t * (3 - 2 * t);
}

/**
 * Drives every emissive surface from the current night factor.
 * @param {{nightGlow:Array<{mat:THREE.Material, level:number}>, nightPools:THREE.Material[]}} registry
 */
export function applyNight(registry, night, waterMaterial) {
  const k = smoothstep(0.05, 0.85, night);
  for (const entry of registry.nightGlow) {
    entry.mat.emissiveIntensity = entry.level * k;
  }
  for (const m of registry.nightPools) m.opacity = 0.95 * k;
  if (waterMaterial) {
    waterMaterial.roughness = lerp(0.22, 0.34, k);
    waterMaterial.envMapIntensity = lerp(0.85, 0.5, k);
  }
}
