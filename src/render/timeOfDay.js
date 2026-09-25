import * as THREE from 'three';

/*
 * 昼夜关键帧：天空顶色 / 地平线色 / 主光色与强度 / 半球光 / 雾色 / 灯火强度 / 星空。
 * 相邻关键帧在线性色彩空间中平滑插值。
 */
const RAW = [
  { t: 0.0, top: 0x0a1030, hor: 0x1b2748, light: 0x9fb4e6, li: 0.8, hs: 0x3a4c80, hg: 0x1c1c26, hi: 0.7, fog: 0x172238, glow: 1.0, stars: 1 },
  { t: 4.8, top: 0x141c44, hor: 0x3a3a66, light: 0x9f9fd4, li: 0.55, hs: 0x3e4a7e, hg: 0x1e1e2a, hi: 0.65, fog: 0x2e3558, glow: 1.0, stars: 0.8 },
  { t: 5.7, top: 0x2a3a78, hor: 0xc88a8a, light: 0xff9a6a, li: 0.12, hs: 0x6a6a9a, hg: 0x3a2e34, hi: 0.55, fog: 0x9a7c8a, glow: 0.8, stars: 0.2 },
  { t: 6.5, top: 0x4f72b4, hor: 0xf6ad7e, light: 0xffb27a, li: 1.8, hs: 0xa8b4d8, hg: 0x6a5040, hi: 0.65, fog: 0xe2b09a, glow: 0.35, stars: 0 },
  { t: 8.0, top: 0x5d8fd2, hor: 0xf2d2b0, light: 0xffe0bc, li: 2.7, hs: 0xb8cce8, hg: 0x7a6a52, hi: 0.75, fog: 0xdcd0bc, glow: 0.0, stars: 0 },
  { t: 12.0, top: 0x3d7ed8, hor: 0xbfd8ef, light: 0xfff4e4, li: 3.2, hs: 0xc4d8f0, hg: 0x857660, hi: 0.85, fog: 0xc6d9ec, glow: 0.0, stars: 0 },
  { t: 15.5, top: 0x467fcf, hor: 0xdfd6b8, light: 0xffe6c0, li: 3.0, hs: 0xc0d0e8, hg: 0x857056, hi: 0.8, fog: 0xd8d4bc, glow: 0.0, stars: 0 },
  { t: 17.2, top: 0x5670b0, hor: 0xffb57a, light: 0xffb066, li: 2.7, hs: 0xd2aca0, hg: 0x6e5040, hi: 0.75, fog: 0xe8b088, glow: 0.45, stars: 0 },
  { t: 18.2, top: 0x3a3f84, hor: 0xff7e4e, light: 0xff7a45, li: 1.4, hs: 0xa87898, hg: 0x4a3040, hi: 0.55, fog: 0xc87a66, glow: 0.85, stars: 0 },
  { t: 18.9, top: 0x232a64, hor: 0x9a5a78, light: 0xc06a70, li: 0.12, hs: 0x5a4a80, hg: 0x2a2030, hi: 0.5, fog: 0x5a4468, glow: 1.0, stars: 0.3 },
  { t: 20.0, top: 0x0e1438, hor: 0x252c52, light: 0x9fb4e6, li: 0.7, hs: 0x3a4a7c, hg: 0x1c1c26, hi: 0.65, fog: 0x1c2440, glow: 1.0, stars: 1 },
];
const COLOR_KEYS = ['top', 'hor', 'light', 'hs', 'hg', 'fog'];
const NUM_KEYS = ['li', 'hi', 'glow', 'stars'];

const KEYS = [...RAW, { ...RAW[0], t: 24 }].map((k) => {
  const o = { t: k.t };
  for (const c of COLOR_KEYS) o[c] = new THREE.Color(k[c]);
  for (const n of NUM_KEYS) o[n] = k[n];
  return o;
});

export function createSample() {
  const o = { dir: new THREE.Vector3(), body: 'sun' };
  for (const c of COLOR_KEYS) o[c] = new THREE.Color();
  return o;
}

/** 采样时刻 t（0–24 小时）的光照状态 */
export function sampleTime(t, out) {
  t = ((t % 24) + 24) % 24;
  let i = 0;
  while (i < KEYS.length - 2 && KEYS[i + 1].t <= t) i++;
  const a = KEYS[i], b = KEYS[i + 1];
  let f = (t - a.t) / (b.t - a.t);
  f = f * f * (3 - 2 * f);
  for (const c of COLOR_KEYS) out[c].copy(a[c]).lerp(b[c], f);
  for (const n of NUM_KEYS) out[n] = a[n] + (b[n] - a[n]) * f;
  out.body = lightDir(t, out.dir);
  return out;
}

const D2R = Math.PI / 180;
/** 日/月方向：日出于东（+x），正午偏南（+z），日落于西（-x） */
export function lightDir(t, out) {
  if (t >= 5.7 && t <= 18.9) {
    const a = ((t - 12.3) / 6.6) * (Math.PI / 2);
    const E = (3 + 59 * Math.pow(Math.max(0, Math.cos(a)), 1.5)) * D2R;
    const az = a * 0.8;
    out.set(-Math.sin(az) * Math.cos(E), Math.sin(E), Math.cos(az) * Math.cos(E));
    return 'sun';
  }
  const tn = t < 12 ? t + 24 : t;
  const a = ((tn - 24.3) / 5.4) * (Math.PI / 2);
  const E = (18 + 38 * Math.max(0, Math.cos(a))) * D2R;
  const az = a * 0.7;
  out.set(-Math.sin(az) * Math.cos(E), Math.sin(E), Math.cos(az) * Math.cos(E));
  return 'moon';
}

export function formatTime(t) {
  t = ((t % 24) + 24) % 24;
  const h = Math.floor(t);
  const m = Math.floor((t - h) * 60);
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}

/** 十二时辰 */
export function shichen(t) {
  const names = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
  const i = Math.floor((((t + 1) % 24) + 24) % 24 / 2);
  return names[i] + '时';
}
