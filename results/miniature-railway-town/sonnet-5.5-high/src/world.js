// 沙盘的"数据层"：尺寸常量、闭合铁路曲线、河流、道路，以及各种几何查询函数。
import * as THREE from 'three';

export function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export const BOARD = { w: 40, d: 30 };      // 沙盘可用地表尺寸 (x: -20..20, z: -15..15)
export const FRAME = { width: 1.4, top: 0.42, bottom: -1.7 };
export const WATER_Y = -0.4;
export const BED_Y = -0.62;
export const BANK_W = 0.95;                 // 岸坡宽度

/* ------------------------------ 铁路环线 ------------------------------ */
function loopControlPoints() {
  const hx = 15, hz = 8.5, r = 4.5;
  const pts = [];
  const straight = (x0, z0, x1, z1) => {
    const n = Math.max(1, Math.round(Math.hypot(x1 - x0, z1 - z0) / 2));
    for (let i = 0; i < n; i++) pts.push([x0 + ((x1 - x0) * i) / n, z0 + ((z1 - z0) * i) / n]);
  };
  const arc = (cx, cz, a0, a1) => {
    const n = 10;
    for (let i = 0; i < n; i++) {
      const a = a0 + ((a1 - a0) * i) / n;
      pts.push([cx + r * Math.cos(a), cz + r * Math.sin(a)]);
    }
  };
  // 起点在南侧直线中部，向 +x（东）行驶，逆时针（俯视）
  straight(0, hz, hx - r, hz);
  arc(hx - r, hz - r, Math.PI / 2, 0);
  straight(hx, hz - r, hx, -(hz - r));
  arc(hx - r, -(hz - r), 0, -Math.PI / 2);
  straight(hx - r, -hz, -(hx - r), -hz);
  arc(-(hx - r), -(hz - r), -Math.PI / 2, -Math.PI);
  straight(-hx, -(hz - r), -hx, hz - r);
  arc(-(hx - r), hz - r, Math.PI, Math.PI / 2);
  straight(-(hx - r), hz, 0, hz);

  // 让北侧与东侧略微外鼓，避免"标准跑道"的机械感；南侧（站台）保持笔直
  return pts.map(([x, z]) => {
    if (z < 0) z -= 0.9 * Math.min(1, -z / 8.5) * Math.max(0, 1 - (x / 16) ** 2);
    if (x > 0) x += 0.8 * Math.min(1, x / 15) * Math.max(0, 1 - (z / 9) ** 2);
    return new THREE.Vector3(x, 0, z);
  });
}

const trackCurve = new THREE.CatmullRomCurve3(loopControlPoints(), true, 'centripetal');
trackCurve.arcLengthDivisions = 6000;
const TRACK_N = 2600;
const trackPts = trackCurve.getSpacedPoints(TRACK_N).slice(0, TRACK_N);
const TRACK_L = trackCurve.getLength();

export const track = {
  L: TRACK_L,
  N: TRACK_N,
  pts: trackPts,
  wrap(s) { return ((s % TRACK_L) + TRACK_L) % TRACK_L; },
  at(s, out = new THREE.Vector3()) {
    const f = (this.wrap(s) / TRACK_L) * TRACK_N;
    const i = Math.floor(f), t = f - i;
    return out.lerpVectors(trackPts[i % TRACK_N], trackPts[(i + 1) % TRACK_N], t);
  },
  tangent(s, out = new THREE.Vector3()) {
    const e = 0.06;
    return out.copy(this.at(s + e)).sub(this.at(s - e)).normalize();
  },
  /** 最接近 (x,z) 的弧长参数 */
  nearestS(x, z) {
    let best = 0, bd = Infinity;
    for (let i = 0; i < TRACK_N; i++) {
      const p = trackPts[i];
      const d = (p.x - x) ** 2 + (p.z - z) ** 2;
      if (d < bd) { bd = d; best = i; }
    }
    return (best / TRACK_N) * TRACK_L;
  },
  dist(x, z) {
    let bd = Infinity;
    for (let i = 0; i < TRACK_N; i += 3) {
      const p = trackPts[i];
      const d = (p.x - x) ** 2 + (p.z - z) ** 2;
      if (d < bd) bd = d;
    }
    return Math.sqrt(bd);
  },
};

/* -------------------------------- 河流 -------------------------------- */
const riverCurve = new THREE.CatmullRomCurve3(
  [
    [10.6, -16.5], [9.2, -11.5], [7.2, -6.8], [7.5, -2.2], [9.7, 2.4],
    [8.4, 6.4], [6.9, 10.2], [7.4, 13.5], [8.6, 16.5],
  ].map(([x, z]) => new THREE.Vector3(x, 0, z)),
  false, 'centripetal'
);
const RIVER_N = 220;
const riverPts = riverCurve.getSpacedPoints(RIVER_N);
const riverHalf = riverPts.map((_, i) => 1.22 + 0.2 * Math.sin(i * 0.07 + 1.0) + 0.12 * Math.sin(i * 0.19));
export const river = { pts: riverPts, half: riverHalf, N: RIVER_N };

/** 点到河流中心线的距离及该处河半宽 */
export function riverInfo(x, z) {
  let bd = Infinity, bw = 1.2, bi = 0;
  for (let i = 0; i < RIVER_N; i++) {
    const a = riverPts[i], b = riverPts[i + 1];
    const abx = b.x - a.x, abz = b.z - a.z;
    let t = ((x - a.x) * abx + (z - a.z) * abz) / (abx * abx + abz * abz);
    t = Math.max(0, Math.min(1, t));
    const dx = x - (a.x + abx * t), dz = z - (a.z + abz * t);
    const d = dx * dx + dz * dz;
    if (d < bd) { bd = d; bi = i; bw = riverHalf[i] * (1 - t) + riverHalf[i + 1] * t; }
  }
  return { d: Math.sqrt(bd), w: bw, i: bi };
}

export function terrainBase(x, z) {
  const { d, w } = riverInfo(x, z);
  const q = (d - w) / BANK_W;
  if (q <= 0) return BED_Y;
  if (q >= 1) return 0;
  const s = q * q * (3 - 2 * q);
  return BED_Y * (1 - s);
}

/* -------------------------------- 道路 -------------------------------- */
// 规划：车站广场 -> 站前路 -> 纵向主街 -> 镇中心大街；南侧外环路经道口与镇区相连
export const roads = [
  { id: 'main',    w: 0.82, pts: [[-13.2, 0.8], [13.6, 0.8]] },                       // 镇中心大街(过河桥)
  { id: 'v1',      w: 0.7,  pts: [[-5.5, 3.3], [-5.5, -7.2]] },                      // 站前大道
  { id: 'v2',      w: 0.7,  pts: [[1.5, -7.2], [1.5, 12.3]] },                       // 过道口的南北路
  { id: 'lane',    w: 0.55, pts: [[-13.0, -2.9], [1.5, -2.9]] },                     // 后街
  { id: 'station', w: 0.62, pts: [[-2.6, 3.85], [1.5, 3.85]] },                      // 站前路
  { id: 'outer',   w: 0.82, pts: [[-18.6, 12.3], [18.6, 12.3]] },                    // 南侧外环路(过河桥)
];
export const plazas = [
  { x0: -8.3, z0: 3.15, x1: -2.7, z1: 4.5 },     // 车站广场
  { x0: 11.6, z0: 1.3, x1: 14.4, z1: 3.2 },      // 农场院子
];

export function distToSegment(px, pz, a, b) {
  const abx = b[0] - a[0], abz = b[1] - a[1];
  let t = ((px - a[0]) * abx + (pz - a[1]) * abz) / (abx * abx + abz * abz);
  t = Math.max(0, Math.min(1, t));
  return Math.hypot(px - (a[0] + abx * t), pz - (a[1] + abz * t));
}
export function roadDist(x, z) {
  let best = Infinity;
  for (const r of roads) {
    for (let i = 0; i < r.pts.length - 1; i++) {
      best = Math.min(best, distToSegment(x, z, r.pts[i], r.pts[i + 1]) - r.w / 2);
    }
  }
  for (const p of plazas) {
    const dx = Math.max(p.x0 - x, 0, x - p.x1), dz = Math.max(p.z0 - z, 0, z - p.z1);
    best = Math.min(best, Math.hypot(dx, dz));
  }
  return best;
}

/** 沿一条直线路段寻找与河流相交的区间，返回桥的中心/方向/长度 */
export function roadBridgeSpan(a, b, margin = 0.15) {
  const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
  const dir = new THREE.Vector3(b[0] - a[0], 0, b[1] - a[1]).normalize();
  let t0 = null, t1 = null;
  for (let s = 0; s <= len; s += 0.02) {
    const x = a[0] + dir.x * s, z = a[1] + dir.z * s;
    const { d, w } = riverInfo(x, z);
    if (d - w < BANK_W * 0.75 + margin) { if (t0 === null) t0 = s; t1 = s; }
  }
  if (t0 === null) return null;
  const mid = (t0 + t1) / 2;
  return {
    center: new THREE.Vector3(a[0] + dir.x * mid, 0, a[1] + dir.z * mid),
    dir, length: t1 - t0 + 0.4,
  };
}

/** 铁路上位于河道范围内的弧长区间 */
export function trackBridgeSpans() {
  const spans = [];
  let cur = null;
  for (let s = 0; s < TRACK_L; s += 0.03) {
    const p = track.at(s);
    const { d, w } = riverInfo(p.x, p.z);
    if (d - w < BANK_W * 0.75 + 0.2) { if (!cur) cur = [s, s]; else cur[1] = s; }
    else if (cur) { spans.push(cur); cur = null; }
  }
  if (cur) spans.push(cur);
  return spans;
}

/* 建筑占地登记（用于树木避让与合法性检查） */
export const footprints = [];
export function addFootprint(x, z, hw, hd, tag = '') {
  footprints.push({ x, z, hw, hd, tag });
}
export function footprintDist(x, z) {
  let best = Infinity;
  for (const f of footprints) {
    const dx = Math.max(Math.abs(x - f.x) - f.hw, 0), dz = Math.max(Math.abs(z - f.z) - f.hd, 0);
    best = Math.min(best, Math.hypot(dx, dz));
  }
  return best;
}

/* 农田（画在地面贴图上，同时禁止种树） */
export const fields = [
  { x: -12.8, z: -12.6, w: 6.4, d: 3.4, rot: 0.05, kind: 'wheat' },
  { x: -5.6, z: -12.7, w: 5.6, d: 3.2, rot: -0.04, kind: 'green' },
  { x: 12.2, z: -6.4, w: 2.4, d: 2.4, rot: 0.0, kind: 'wheat', paddock: true },
  { x: 14.2, z: -12.0, w: 3.6, d: 3.4, rot: 0.0, kind: 'furrow' },
  { x: -3.2, z: 14.0, w: 4.0, d: 1.9, rot: 0.02, kind: 'green' },
];
export function fieldDist(x, z) {
  let best = Infinity;
  for (const f of fields) {
    const dx = Math.max(Math.abs(x - f.x) - f.w / 2, 0), dz = Math.max(Math.abs(z - f.z) - f.d / 2, 0);
    best = Math.min(best, Math.hypot(dx, dz));
  }
  return best;
}
