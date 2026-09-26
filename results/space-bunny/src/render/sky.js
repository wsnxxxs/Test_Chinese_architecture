/**
 * 天空与光照：渐变天幕、低角度太阳、阴影、雾、灯笼点光。
 * 三套预设（晨曦/正午/暮色）之间做 1.4s 插值切换。
 */
import * as THREE from 'three';
import { PRESETS } from '../core/palette.js';

const hex = (n) => `#${n.toString(16).padStart(6, '0')}`;

function gradientTexture(top, mid, horizon) {
  const c = document.createElement('canvas');
  c.width = 4;
  c.height = 256;
  const ctx = c.getContext('2d');
  const g = ctx.createLinearGradient(0, 0, 0, 256);
  g.addColorStop(0, hex(top));
  g.addColorStop(0.52, hex(mid));
  g.addColorStop(1, hex(horizon));
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 4, 256);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.magFilter = THREE.LinearFilter;
  tex.minFilter = THREE.LinearFilter;
  tex.generateMipmaps = false;
  return tex;
}

function discTexture() {
  const S = 128;
  const c = document.createElement('canvas');
  c.width = S;
  c.height = S;
  const ctx = c.getContext('2d');
  const g = ctx.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S / 2);
  g.addColorStop(0, 'rgba(255,255,255,1)');
  g.addColorStop(0.18, 'rgba(255,255,255,0.92)');
  g.addColorStop(0.34, 'rgba(255,255,255,0.34)');
  g.addColorStop(0.62, 'rgba(255,255,255,0.09)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, S, S);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

const KEYS = ['sunEl', 'sunAz', 'sunIntensity', 'hemiIntensity', 'ambientIntensity', 'fogNear', 'fogFar', 'exposure', 'bloom', 'lantern'];
const COLORS = ['sunColor', 'hemiSky', 'hemiGround', 'ambient', 'fog', 'skyTop', 'skyMid', 'skyHorizon', 'sunDisc', 'sunGlow', 'groundTint'];

export class SkyRig {
  constructor(scene) {
    this.scene = scene;

    this.sun = new THREE.DirectionalLight(0xffffff, 2.6);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(2048, 2048);
    const sc = this.sun.shadow.camera;
    sc.left = -200; sc.right = 200; sc.top = 200; sc.bottom = -200;
    sc.near = 80; sc.far = 1300;
    this.sun.shadow.bias = -0.0005;
    this.sun.shadow.normalBias = 0.9;
    this.target = new THREE.Object3D();
    this.target.position.set(0, 20, -12);
    scene.add(this.target);
    this.sun.target = this.target;
    scene.add(this.sun);

    this.hemi = new THREE.HemisphereLight(0xbcd6ff, 0x6d5b42, 0.95);
    scene.add(this.hemi);
    this.amb = new THREE.AmbientLight(0x9fb4d8, 0.28);
    scene.add(this.amb);

    this.fog = new THREE.Fog(0xd9c0a4, 240, 980);
    scene.fog = this.fog;

    this.disc = new THREE.Sprite(new THREE.SpriteMaterial({
      map: discTexture(), transparent: true, depthWrite: false, fog: false,
      blending: THREE.AdditiveBlending,
    }));
    this.disc.scale.set(150, 150, 1);
    this.disc.renderOrder = -1;
    scene.add(this.disc);

    this.lamps = [];
    for (let i = 0; i < 6; i++) {
      const p = new THREE.PointLight(0xff8a3c, 0, 40, 2);
      p.visible = false;
      scene.add(p);
      this.lamps.push(p);
    }

    this.state = {};
    this.goal = {};
    this.blend = 1;
    for (const k of KEYS) this.state[k] = 0;
    for (const k of COLORS) this.state[k] = new THREE.Color(0xffffff);
    this.presetName = 'dawn';
  }

  /** 依据灯笼位置挑选 6 个最具代表性的点光源 */
  setLamps(points) {
    const picked = [];
    const want = ['gate', 'hall', 'pagoda', 'tower-a', 'tower-b', 'rear'];
    // 按 z 排序后均匀取样，保证覆盖南中北
    const sorted = [...points].sort((a, b) => b[2] - a[2]);
    for (let i = 0; i < this.lamps.length; i++) {
      const p = sorted[Math.floor((i * sorted.length) / this.lamps.length)];
      if (!p) continue;
      const l = this.lamps[i];
      l.position.set(p[0] + 1, p[1], p[2] + 1);
      l.visible = true;
      picked.push(want[i] || `lamp-${i}`);
    }
    this.lampNames = picked;
  }

  set(name, instant = false) {
    const p = PRESETS[name] || PRESETS.dawn;
    this.presetName = name;
    for (const k of KEYS) this.goal[k] = p[k];
    for (const k of COLORS) this.goal[k] = new THREE.Color(p[k]);
    this.goal.skyTex = null;
    if (instant) {
      for (const k of KEYS) this.state[k] = p[k];
      for (const k of COLORS) this.state[k].set(p[k]);
      this.blend = 1;
      this._apply();
    } else {
      this.blend = 0;
    }
  }

  update(dt) {
    if (this.blend < 1) {
      this.blend = Math.min(1, this.blend + dt / 1.4);
      const t = this.blend * this.blend * (3 - 2 * this.blend);
      for (const k of KEYS) this.state[k] = this.state[k] + (this.goal[k] - this.state[k]) * t * 0.25;
      for (const k of COLORS) this.state[k].lerp(this.goal[k], t * 0.25);
      this._apply();
    }
    // 灯笼呼吸感
    const pulse = 0.86 + 0.14 * Math.sin(performance.now() * 0.0021);
    for (const l of this.lamps) l.intensity = 130 * this.state.lantern * pulse;
  }

  _apply() {
    const s = this.state;
    const el = (s.sunEl * Math.PI) / 180;
    const az = (s.sunAz * Math.PI) / 180;
    const dir = new THREE.Vector3(
      Math.cos(el) * Math.sin(az),
      Math.sin(el),
      Math.cos(el) * Math.cos(az),
    );
    this.sun.position.copy(dir).multiplyScalar(520).add(this.target.position);
    this.sun.color.copy(s.sunColor);
    this.sun.intensity = s.sunIntensity;

    this.hemi.color.copy(s.hemiSky);
    this.hemi.groundColor.copy(s.hemiGround);
    this.hemi.intensity = s.hemiIntensity;
    this.amb.color.copy(s.ambient);
    this.amb.intensity = s.ambientIntensity;

    this.fog.color.copy(s.fog);
    this.fog.near = s.fogNear;
    this.fog.far = s.fogFar;

    if (!this._texKey || this._texKey !== `${s.skyTop.getHex()}-${s.skyMid.getHex()}-${s.skyHorizon.getHex()}`) {
      if (this._bgTex) this._bgTex.dispose();
      this._bgTex = gradientTexture(s.skyTop.getHex(), s.skyMid.getHex(), s.skyHorizon.getHex());
      this.scene.background = this._bgTex;
      this._texKey = `${s.skyTop.getHex()}-${s.skyMid.getHex()}-${s.skyHorizon.getHex()}`;
    }

    this.disc.position.copy(dir).multiplyScalar(760).add(this.target.position);
    this.disc.material.color.copy(s.sunGlow);
  }
}
