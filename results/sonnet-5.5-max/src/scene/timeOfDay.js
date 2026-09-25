// Time-of-day system: keyframed lighting / sky / fog / glow, plus sun & moon placement.
import { Color, Vector3, Matrix4, MathUtils } from 'three';
import { voxelUniforms } from './materials.js';

const c = (hex) => new Color(hex);

// t: 0 = midnight, .25 = sunrise, .5 = noon, .75 = sunset.
// Sun elevation follows 58° * sin(2π(t-.25)).
export const KEYS = [
  { t: 0.0, sun: c('#8fa8e8'), sunI: 0, hemiS: c('#33498f'), hemiG: c('#141a30'), hemiI: 1.3, fill: c('#4a5fa0'), fillI: 0.14,
    zen: c('#050b22'), mid: c('#0f1d44'), hor: c('#1b2f5e'), gnd: c('#0a1226'), glowC: c('#2a3f7a'),
    fog: c('#14224a'), fd: 0.00085, exp: 1.2, glow: 1.0, stars: 1.0, bloom: 0.6, cloud: 0.4, mist: 0.1 },
  { t: 0.2, sun: c('#8fa8e8'), sunI: 0, hemiS: c('#40488e'), hemiG: c('#1d1a30'), hemiI: 1.25, fill: c('#5a5aa0'), fillI: 0.14,
    zen: c('#0e1541'), mid: c('#3b3a7d'), hor: c('#d68a8c'), gnd: c('#1a1a34'), glowC: c('#ff9a70'),
    fog: c('#574f85'), fd: 0.0009, exp: 1.2, glow: 0.95, stars: 0.6, bloom: 0.6, cloud: 0.55, mist: 0.45 },
  { t: 0.235, sun: c('#ffb59a'), sunI: 1.0, hemiS: c('#6b70b4'), hemiG: c('#3b2f3f'), hemiI: 1.05, fill: c('#8a7fb8'), fillI: 0.2,
    zen: c('#2a3a86'), mid: c('#8b6fa8'), hor: c('#ffb08a'), gnd: c('#3a2f45'), glowC: c('#ffa46e'),
    fog: c('#b78a9c'), fd: 0.00098, exp: 1.25, glow: 0.8, stars: 0.2, bloom: 0.55, cloud: 0.8, mist: 0.5 },
  { t: 0.262, sun: c('#ffbb84'), sunI: 3.2, hemiS: c('#93a8de'), hemiG: c('#8a6a58'), hemiI: 0.85, fill: c('#a7b3e0'), fillI: 0.25,
    zen: c('#4f7ccc'), mid: c('#dea0b8'), hor: c('#ffb98f'), gnd: c('#8a6a55'), glowC: c('#ffb878'),
    fog: c('#f0b8a2'), fd: 0.001, exp: 1.2, glow: 0.4, stars: 0.0, bloom: 0.45, cloud: 1.0, mist: 0.38 },
  { t: 0.29, sun: c('#ffd9ae'), sunI: 3.6, hemiS: c('#a2c0ec'), hemiG: c('#88705a'), hemiI: 0.95, fill: c('#b0c4e8'), fillI: 0.28,
    zen: c('#4a88da'), mid: c('#b6b8e0'), hor: c('#f6d2b8'), gnd: c('#8f8571'), glowC: c('#ffe0b0'),
    fog: c('#e2cdc6'), fd: 0.0008, exp: 1.1, glow: 0.15, stars: 0.0, bloom: 0.35, cloud: 1.0, mist: 0.22 },
  { t: 0.36, sun: c('#fff0d8'), sunI: 3.6, hemiS: c('#a8c8f0'), hemiG: c('#8a7a60'), hemiI: 1.0, fill: c('#b8cef0'), fillI: 0.3,
    zen: c('#3f7fd8'), mid: c('#86b6ea'), hor: c('#d5e4ee'), gnd: c('#93967f'), glowC: c('#fff0d0'),
    fog: c('#c9dae6'), fd: 0.0007, exp: 1.05, glow: 0.0, stars: 0.0, bloom: 0.3, cloud: 1.0, mist: 0.12 },
  { t: 0.5, sun: c('#fff6e6'), sunI: 3.8, hemiS: c('#b0d0f5'), hemiG: c('#8f8468'), hemiI: 1.05, fill: c('#c0d4f0'), fillI: 0.3,
    zen: c('#3679d6'), mid: c('#7fb0e8'), hor: c('#cfe2f0'), gnd: c('#9a9d86'), glowC: c('#fff2d8'),
    fog: c('#c6d9e8'), fd: 0.0007, exp: 1.0, glow: 0.0, stars: 0.0, bloom: 0.28, cloud: 1.0, mist: 0 },
  { t: 0.64, sun: c('#ffe6c0'), sunI: 3.6, hemiS: c('#a5c2ea'), hemiG: c('#8a7a5e'), hemiI: 1.0, fill: c('#b8cae8'), fillI: 0.3,
    zen: c('#3d76d0'), mid: c('#86b0e4'), hor: c('#e8dccb'), gnd: c('#958f78'), glowC: c('#ffe0b0'),
    fog: c('#d5d8d6'), fd: 0.00075, exp: 1.05, glow: 0.0, stars: 0.0, bloom: 0.32, cloud: 1.0, mist: 0 },
  { t: 0.69, sun: c('#ffd29a'), sunI: 3.7, hemiS: c('#95acdc'), hemiG: c('#8a6a50'), hemiI: 0.85, fill: c('#a9b4e0'), fillI: 0.24,
    zen: c('#4070c4'), mid: c('#a6b0d6'), hor: c('#ffd9aa'), gnd: c('#8d7a60'), glowC: c('#ffc080'),
    fog: c('#e6c0a8'), fd: 0.00085, exp: 1.2, glow: 0.15, stars: 0.0, bloom: 0.4, cloud: 1.0, mist: 0.08 },
  { t: 0.72, sun: c('#ffb066'), sunI: 3.9, hemiS: c('#7d8fd6'), hemiG: c('#8a5f46'), hemiI: 0.7, fill: c('#9a9ad8'), fillI: 0.18,
    zen: c('#2f57b4'), mid: c('#b58fc0'), hor: c('#ffb070'), gnd: c('#7d6650'), glowC: c('#ffa050'),
    fog: c('#d9a08f'), fd: 0.0009, exp: 1.35, glow: 0.5, stars: 0.0, bloom: 0.5, cloud: 1.0, mist: 0.14 },
  { t: 0.745, sun: c('#ff8446'), sunI: 3.2, hemiS: c('#7278c6'), hemiG: c('#6a4a45'), hemiI: 0.8, fill: c('#8a80c8'), fillI: 0.2,
    zen: c('#2c439a'), mid: c('#9a6aa8'), hor: c('#ff8556'), gnd: c('#5a4550'), glowC: c('#ff7a40'),
    fog: c('#c48490'), fd: 0.00095, exp: 1.35, glow: 0.85, stars: 0.0, bloom: 0.6, cloud: 1.0, mist: 0.2 },
  { t: 0.77, sun: c('#ff7a5a'), sunI: 1.4, hemiS: c('#7580c8'), hemiG: c('#4a3a50'), hemiI: 1.25, fill: c('#7a72b8'), fillI: 0.28,
    zen: c('#1e2c72'), mid: c('#6a4a9c'), hor: c('#f47a72'), gnd: c('#3a2e48'), glowC: c('#ff6a5a'),
    fog: c('#9a6a8e'), fd: 0.001, exp: 1.4, glow: 1.0, stars: 0.3, bloom: 0.7, cloud: 0.9, mist: 0.2 },
  { t: 0.81, sun: c('#7a90d8'), sunI: 0.5, hemiS: c('#4a5aa0'), hemiG: c('#20203a'), hemiI: 1.3, fill: c('#5a6ab0'), fillI: 0.18,
    zen: c('#0a1440'), mid: c('#2a3470'), hor: c('#7a5a86'), gnd: c('#141428'), glowC: c('#5a4a90'),
    fog: c('#2e3262'), fd: 0.001, exp: 1.4, glow: 1.0, stars: 0.8, bloom: 0.65, cloud: 0.6, mist: 0.16 },
  { t: 0.88, sun: c('#8fa8e8'), sunI: 0, hemiS: c('#33498f'), hemiG: c('#141a30'), hemiI: 1.3, fill: c('#4a5fa0'), fillI: 0.14,
    zen: c('#050b22'), mid: c('#0f1d44'), hor: c('#1b2f5e'), gnd: c('#0a1226'), glowC: c('#2a3f7a'),
    fog: c('#14224a'), fd: 0.00085, exp: 1.2, glow: 1.0, stars: 1.0, bloom: 0.6, cloud: 0.4, mist: 0.1 },
  { t: 1.0, sun: c('#8fa8e8'), sunI: 0, hemiS: c('#33498f'), hemiG: c('#141a30'), hemiI: 1.3, fill: c('#4a5fa0'), fillI: 0.14,
    zen: c('#050b22'), mid: c('#0f1d44'), hor: c('#1b2f5e'), gnd: c('#0a1226'), glowC: c('#2a3f7a'),
    fog: c('#14224a'), fd: 0.00085, exp: 1.2, glow: 1.0, stars: 1.0, bloom: 0.6, cloud: 0.4, mist: 0.1 },
];

export const PRESETS = [
  { id: 'dawn', label: '黎明', t: 0.276 },
  { id: 'noon', label: '午后', t: 0.56 },
  { id: 'golden', label: '夕照', t: 0.715 },
  { id: 'dusk', label: '暮色', t: 0.766 },
  { id: 'night', label: '月夜', t: 0.92 },
];

const MOON_DIR = new Vector3(-0.55, 0.55, 0.62).normalize();
const MOON_COLOR = c('#93aef0');

export function sampleKeys(t) {
  t = ((t % 1) + 1) % 1;
  let i = 0;
  while (i < KEYS.length - 2 && t >= KEYS[i + 1].t) i++;
  const a = KEYS[i];
  const b = KEYS[i + 1];
  const k = MathUtils.clamp((t - a.t) / (b.t - a.t), 0, 1);
  const s = k * k * (3 - 2 * k); // smooth blend between neighbouring keys
  const out = {};
  for (const name of Object.keys(a)) {
    if (name === 't') continue;
    if (a[name] instanceof Color) out[name] = new Color().copy(a[name]).lerp(b[name], s);
    else out[name] = a[name] + (b[name] - a[name]) * s;
  }
  return out;
}

/** World-space direction *towards* the sun for a given time. */
export function sunDirection(t, out = new Vector3()) {
  const theta = 2 * Math.PI * (t - 0.25);
  const s = Math.sin(theta);
  const el = MathUtils.degToRad(58 * s);
  let hx = Math.cos(theta);
  let hz = 0.5 + 0.12 * s;
  const hl = Math.hypot(hx, hz);
  hx /= hl;
  hz /= hl;
  out.set(hx * Math.cos(el), Math.sin(el), hz * Math.cos(el));
  return out;
}

export class TimeOfDay {
  /**
   * @param {object} p  { scene, renderer, sun, hemi, fill, sky, bloom, shadowBox: Box3 }
   */
  constructor(p) {
    Object.assign(this, p);
    this.t = 0.715;
    this.auto = false;
    this.speed = 0.012; // day-fractions per second while cycling
    this.listeners = [];
    this._shadowClock = 0;
    this._sunDir = new Vector3();
    this.keyDir = new Vector3(0, 1, 0);
    this.state = null;
    this.sunFade = 1;
    this.moonFade = 0;
  }

  onChange(fn) {
    this.listeners.push(fn);
  }

  set(t, forceShadow = true) {
    this.t = ((t % 1) + 1) % 1;
    this.apply(forceShadow);
  }

  update(dt, elapsed) {
    this.sky.uniforms.uTime.value = elapsed;
    voxelUniforms.uTime.value = elapsed;
    if (this.auto) {
      this.t = (this.t + dt * this.speed) % 1;
      this._shadowClock += dt;
      this.apply(this._shadowClock > 0.12);
      if (this._shadowClock > 0.12) this._shadowClock = 0;
    }
  }

  apply(updateShadow = true) {
    const K = sampleKeys(this.t);
    this.state = K;
    const sunDir = sunDirection(this.t, this._sunDir);
    const elDeg = MathUtils.radToDeg(Math.asin(sunDir.y));

    // sun vs. moon as the shadow-casting key light (both fade through zero at the swap)
    const sunFade = MathUtils.smoothstep(elDeg, -2.5, 3.5);
    const moonFade = MathUtils.smoothstep(-elDeg, 2.5, 14);
    const useSun = elDeg > -2.5;
    const keyDir = useSun ? sunDir : MOON_DIR;
    this.keyDir.copy(keyDir);
    this.sunFade = sunFade;
    this.moonFade = moonFade;

    const { sun, hemi, fill, scene, renderer } = this;
    if (useSun) {
      sun.color.copy(K.sun);
      sun.intensity = K.sunI * sunFade;
    } else {
      sun.color.copy(MOON_COLOR);
      sun.intensity = 1.05 * moonFade;
    }
    this.placeSun(keyDir, updateShadow);

    hemi.color.copy(K.hemiS);
    hemi.groundColor.copy(K.hemiG);
    hemi.intensity = K.hemiI;

    // cool/warm fill from the opposite side, no shadows
    fill.color.copy(K.fill);
    fill.intensity = K.fillI;
    fill.position.set(-keyDir.x * 200, 60, -keyDir.z * 200);

    scene.fog.color.copy(K.fog);
    scene.fog.density = K.fd * 0.6;
    renderer.toneMappingExposure = K.exp;
    voxelUniforms.uGlow.value = K.glow * 2.4;
    voxelUniforms.uMist.value = K.mist;
    voxelUniforms.uFogTint.value.copy(K.mid).lerp(K.zen, 0.45);

    const u = this.sky.uniforms;
    u.uZenith.value.copy(K.zen);
    u.uMid.value.copy(K.mid);
    u.uHorizon.value.copy(K.hor);
    u.uGround.value.copy(K.gnd);
    u.uGlowColor.value.copy(K.glowC);
    u.uSunColor.value.copy(K.sun);
    u.uSunDir.value.copy(sunDir);
    u.uSunVis.value = sunFade;
    u.uMoonDir.value.copy(MOON_DIR);
    u.uMoonVis.value = moonFade;
    u.uStars.value = K.stars;

    if (this.bloom) this.bloom.strength = K.bloom;
    for (const fn of this.listeners) fn(K, this.t, elDeg);
  }

  /** Position the sun and fit its orthographic shadow frustum around the scene box. */
  placeSun(dir, updateShadow) {
    const { sun, shadowBox } = this;
    const center = shadowBox.getCenter(new Vector3());
    const dist = 900;
    sun.position.copy(center).addScaledVector(dir, dist);
    sun.target.position.copy(center);
    sun.updateMatrixWorld();
    sun.target.updateMatrixWorld();

    // light view basis
    const view = new Matrix4().lookAt(sun.position, center, new Vector3(0, 1, 0));
    const xAxis = new Vector3().setFromMatrixColumn(view, 0);
    const yAxis = new Vector3().setFromMatrixColumn(view, 1);
    const zAxis = new Vector3().setFromMatrixColumn(view, 2);
    let l = Infinity, r = -Infinity, b = Infinity, tp = -Infinity, n = Infinity, f = -Infinity;
    const { min, max } = shadowBox;
    const v = new Vector3();
    for (let i = 0; i < 8; i++) {
      v.set(i & 1 ? max.x : min.x, i & 2 ? max.y : min.y, i & 4 ? max.z : min.z).sub(sun.position);
      const x = v.dot(xAxis);
      const y = v.dot(yAxis);
      const d = -v.dot(zAxis);
      l = Math.min(l, x); r = Math.max(r, x);
      b = Math.min(b, y); tp = Math.max(tp, y);
      n = Math.min(n, d); f = Math.max(f, d);
    }
    const cam = sun.shadow.camera;
    cam.left = l - 2;
    cam.right = r + 2;
    cam.bottom = b - 2;
    cam.top = tp + 2;
    cam.near = Math.max(1, n - 10);
    cam.far = f + 10;
    cam.updateProjectionMatrix();
    if (updateShadow) this.renderer.shadowMap.needsUpdate = true;
  }
}
