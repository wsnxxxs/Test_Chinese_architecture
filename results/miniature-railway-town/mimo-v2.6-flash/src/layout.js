/**
 * 小镇布局数据 —— 纯数据模块，不依赖 three / DOM。
 * 可被 Node 直接引入做净距校验（scripts/check-layout.mjs），
 * 也供 src/world/* 生成几何体时读取。
 */
import {
  TRACK_SHAPE,
  SCATTER_BOUNDS,
  roundedRectPoints,
  distToTrack,
  distToPolyline,
  riverCenterX,
  riverHalfWidth,
  inRiver,
  rectDistance,
  makeRng,
} from './lib/geometry.js';

export { TRACK_SHAPE };

/** 轨道中心线折线（供布局校验复用） */
export const TRACK_POINTS = roundedRectPoints(TRACK_SHAPE.hx, TRACK_SHAPE.hz, TRACK_SHAPE.r);

/* ------------------------------------------------------------------ *
 * 建筑：minTrack 为允许的轨道中心线最小净距（缺省 2.4）
 * 竖向排布（北→南）：
 *   轨道 z=-15 → 站台 -13.7..-12.1 → 车站 -12.1..-9.5 → 站前路 z=-6.9 → 街区
 * ------------------------------------------------------------------ */
export const BUILDINGS = [
  // —— 站前区 ——
  { id: 'station', type: 'station', x: 2.2, z: -10.8, w: 11.5, d: 2.6, rot: 0, minTrack: 2.0, wall: '#f2e6d0', roof: '#8f3f34' },

  // —— 街区 A（主街以西） ——
  { id: 'shop-a', type: 'shop', x: -1.0, z: -3.0, w: 3.6, d: 4.6, rot: -0.02, wall: '#e8d3ad', roof: '#9c5a3c' },
  { id: 'house-a', type: 'house', x: -1.0, z: 2.0, w: 3.6, d: 4.0, rot: 0.015, wall: '#dfd0b6', roof: '#6c7f6a' },

  // —— 街区 B（主街以东） ——
  { id: 'shop-b', type: 'shop', x: 6.5, z: -3.0, w: 3.4, d: 4.6, rot: 0.02, wall: '#e6cfae', roof: '#a8623a' },
  { id: 'inn', type: 'inn', x: 11.6, z: -3.0, w: 5.6, d: 4.4, rot: -0.01, wall: '#f0e2c6', roof: '#7d4a3a' },
  { id: 'house-b', type: 'house', x: 6.8, z: 2.0, w: 4.0, d: 4.0, rot: -0.015, wall: '#e2d4bd', roof: '#5f7a86' },
  { id: 'house-c', type: 'house', x: 11.6, z: 1.8, w: 4.6, d: 4.0, rot: 0.02, wall: '#ded1b8', roof: '#8a6b4a' },

  // —— 教堂（街区东侧，靠近东环线） ——
  { id: 'church', type: 'church', x: 17.1, z: -0.5, w: 4.4, d: 7, rot: 0, wall: '#efe7d6', roof: '#6b6f78' },

  // —— 街区 C（跨街大道以南） ——
  { id: 'house-d', type: 'house', x: -0.8, z: 9.8, w: 3.6, d: 4.4, rot: 0.01, wall: '#e7d9bf', roof: '#8f5f43' },
  { id: 'house-e', type: 'house', x: 7.0, z: 9.8, w: 4.6, d: 4.2, rot: -0.02, wall: '#e0d2b8', roof: '#6d7f6a' },
  { id: 'house-f', type: 'house', x: 15.0, z: 9.6, w: 3.4, d: 4.2, rot: 0.02, wall: '#e9dcc4', roof: '#7a6a8a' },

  // —— 技术构筑物 ——
  { id: 'watertower', type: 'watertower', x: -16.5, z: -4.0, r: 1.6, w: 3.2, d: 3.2, rot: 0, wall: '#b8b2a4', roof: '#5d6b6e' },
  { id: 'pumphouse', type: 'house', x: -17.0, z: -8.6, w: 2.8, d: 2.4, rot: 0.04, wall: '#dccfb4', roof: '#7c5a45' },

  // —— 底座四角（环线以外） ——
  { id: 'farm-nw', type: 'house', x: -24.2, z: -16.5, w: 3.6, d: 3.0, rot: 0.05, wall: '#e5d6ba', roof: '#8a5a3c' },
  { id: 'barn-ne', type: 'barn', x: 24.2, z: -16.3, w: 3.6, d: 3.4, rot: -0.04, wall: '#c9705a', roof: '#7a4a3a' },
  { id: 'cottage-sw', type: 'house', x: -24.3, z: 16.4, w: 3.4, d: 3.0, rot: -0.05, wall: '#e8dac0', roof: '#6a7a8a' },
  { id: 'shed-se', type: 'barn', x: 24.3, z: 16.4, w: 3.4, d: 3.0, rot: 0.04, wall: '#d8c49a', roof: '#77644a' },
];

/* ------------------------------------------------------------------ *
 * 道路（折线 + 宽度），跨轨处必须登记在 CROSSINGS
 * ------------------------------------------------------------------ */
export const ROADS = [
  { id: 'forecourt', width: 2.6, points: [[-3, -6.9], [15, -6.9]] },
  { id: 'main-st', width: 2.8, points: [[3, -6.9], [3, 11.2]] },
  { id: 'cross-st', width: 2.4, points: [[-3, 6], [26, 6]] },
  { id: 'south-branch', width: 2.4, points: [[11, 6], [11, 17.8]] },
  { id: 'west-road', width: 2.2, points: [[-26.4, 2], [-13.7, 2]] },
];

/** 平面道口（道路与轨道的合法交汇点） */
export const CROSSINGS = [
  { x: 11, z: 15, axis: 'x' },
  { x: 22, z: 6, axis: 'z' },
  { x: -22, z: 2, axis: 'z' },
];

/* ------------------------------------------------------------------ *
 * 站台与列车停车点
 * ------------------------------------------------------------------ */
export const PLATFORM = { x: 2.2, z: -12.9, w: 13.5, d: 1.6 };
/** 列车停车时机车中心的世界坐标 */
export const STATION_STOP = { x: 2.2, z: -15 };

/* ------------------------------------------------------------------ *
 * 水体 / 田地 / 小品
 * ------------------------------------------------------------------ */
export const POND = { x: -16.4, z: 6.2, rx: 3.1, rz: 2.1 };

export const FIELDS = [
  { x: 24, z: -16.4, w: 5.2, d: 3.6, rot: -0.06, crop: '#cbb25a' },
  { x: -24, z: -16.6, w: 5.0, d: 3.4, rot: 0.05, crop: '#b8c469' },
  { x: -24, z: 16.6, w: 5.0, d: 3.4, rot: -0.04, crop: '#c9a95e' },
];

/** 小品位置（车辆、长椅、摊位） */
export const PROPS = {
  cars: [
    { x: 6.4, z: -7.4, rot: 0, color: '#b6472f' },
    { x: 9.2, z: -7.4, rot: 0, color: '#3f6f8f' },
    { x: 11, z: 17.4, rot: 0, color: '#d8d2c4' },
    { x: -24.2, z: -13.4, rot: 0, color: '#7a8a5a' },
  ],
  benches: [
    { x: 0.2, z: -8.85, rot: 0 },
    { x: 5.0, z: -8.85, rot: 0 },
    { x: -12.6, z: 6.5, rot: -Math.PI / 2 },
  ],
  stalls: [
    { x: 9.6, z: -8.9, rot: 0, color: '#c95a4a' },
    { x: 11.7, z: -8.9, rot: 0, color: '#4a7fc9' },
  ],
};

/* ------------------------------------------------------------------ *
 * 散布元素：树 / 灌木 / 石头 —— 确定性随机 + 拒绝采样
 * ------------------------------------------------------------------ */
const TRACK_MIN = 2.45;

function buildingGap(x, z) {
  let d = Infinity;
  for (const b of BUILDINGS) {
    d = Math.min(d, rectDistance(b.x, b.z, b.w, b.d, b.rot || 0, x, z));
  }
  return d;
}

function roadGap(x, z) {
  let d = Infinity;
  for (const r of ROADS) {
    d = Math.min(d, distToPolyline(x, z, r.points, false) - r.width / 2);
  }
  return d;
}

function pondGap(x, z) {
  const nx = (x - POND.x) / (POND.rx + 0.6);
  const nz = (z - POND.z) / (POND.rz + 0.6);
  return Math.hypot(nx, nz) - 1;
}

function fieldGap(x, z) {
  let d = Infinity;
  for (const f of FIELDS) {
    d = Math.min(d, rectDistance(f.x, f.z, f.w, f.d, f.rot, x, z));
  }
  return d;
}

function scatterValid(x, z, opts) {
  const { minTrack, riverPad, minBuilding, minRoad } = opts;
  if (x < SCATTER_BOUNDS.xMin || x > SCATTER_BOUNDS.xMax) return false;
  if (z < SCATTER_BOUNDS.zMin || z > SCATTER_BOUNDS.zMax) return false;
  if (distToTrack(x, z, TRACK_POINTS) < minTrack) return false;
  if (inRiver(x, z, riverPad)) return false;
  if (buildingGap(x, z) < minBuilding) return false;
  if (roadGap(x, z) < minRoad) return false;
  if (pondGap(x, z) < 0) return false;
  if (fieldGap(x, z) < 0.4) return false;
  return true;
}

function scatter({ count, seed, minDist, opts, attempts = 5000 }) {
  const rng = makeRng(seed);
  const out = [];
  for (let i = 0; i < attempts && out.length < count; i++) {
    const x = SCATTER_BOUNDS.xMin + rng() * (SCATTER_BOUNDS.xMax - SCATTER_BOUNDS.xMin);
    const z = SCATTER_BOUNDS.zMin + rng() * (SCATTER_BOUNDS.zMax - SCATTER_BOUNDS.zMin);
    if (!scatterValid(x, z, opts)) continue;
    let ok = true;
    for (const p of out) {
      if (Math.hypot(p[0] - x, p[1] - z) < minDist) {
        ok = false;
        break;
      }
    }
    if (ok) out.push([x, z, rng()]);
  }
  return out;
}

/** 树：避开轨道、河道、建筑、道路、水塘、田地 */
export const TREES = scatter({
  count: 118,
  seed: 20260926,
  minDist: 1.75,
  opts: { minTrack: TRACK_MIN, riverPad: 1.0, minBuilding: 1.0, minRoad: 1.1 },
});

/** 河岸树：贴水更近一批 */
export const RIVERSIDE_TREES = (() => {
  const rng = makeRng(77123);
  const out = [];
  let tries = 0;
  while (out.length < 14 && tries < 20000) {
    tries++;
    const z = -18 + rng() * 36;
    const side = rng() < 0.5 ? -1 : 1;
    const x = riverCenterX(z) + side * (riverHalfWidth(z) + 0.9 + rng() * 2.6);
    if (!scatterValid(x, z, { minTrack: 2.3, riverPad: 0.15, minBuilding: 0.8, minRoad: 0.9 })) continue;
    let ok = true;
    for (const p of TREES.concat(out)) {
      if (Math.hypot(p[0] - x, p[1] - z) < 1.7) {
        ok = false;
        break;
      }
    }
    if (ok) out.push([x, z, rng()]);
  }
  return out;
})();

/** 灌木 */
export const BUSHES = scatter({
  count: 90,
  seed: 4242,
  minDist: 1.15,
  opts: { minTrack: 1.9, riverPad: 0.6, minBuilding: 0.7, minRoad: 0.9 },
});

/** 石头：集中在河岸与边界 */
export const ROCKS = scatter({
  count: 34,
  seed: 9099,
  minDist: 1.4,
  opts: { minTrack: 2.1, riverPad: 0.15, minBuilding: 0.8, minRoad: 0.9 },
});

/** 芦苇：贴河岸两侧 */
export const REEDS = (() => {
  const rng = makeRng(515151);
  const out = [];
  for (let z = -18.4; z <= 18.4; z += 1.1) {
    for (const side of [-1, 1]) {
      if (rng() < 0.45) continue;
      const x = riverCenterX(z) + side * (riverHalfWidth(z) + 0.12 + rng() * 0.5);
      if (distToTrack(x, z, TRACK_POINTS) < 2.7) continue;
      if (buildingGap(x, z) < 0.8) continue;
      if (roadGap(x, z) < 0.8) continue;
      const nx = (x - POND.x) / (POND.rx + 0.6);
      const nz = (z - POND.z) / (POND.rz + 0.6);
      if (Math.hypot(nx, nz) < 1.2) continue;
      out.push([x, z, rng()]);
    }
  }
  return out;
})();

/* ------------------------------------------------------------------ *
 * 路灯：沿道路两侧等距布设，自动避让轨道 / 河道 / 建筑
 * ------------------------------------------------------------------ */
function polylineLen(pts) {
  let L = 0;
  for (let i = 1; i < pts.length; i++) L += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]);
  return L;
}

function pointAt(pts, s) {
  let acc = 0;
  for (let i = 1; i < pts.length; i++) {
    const seg = Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]);
    if (acc + seg >= s) {
      const t = (s - acc) / seg;
      return [pts[i - 1][0] + (pts[i][0] - pts[i - 1][0]) * t, pts[i - 1][1] + (pts[i][1] - pts[i - 1][1]) * t];
    }
    acc += seg;
  }
  return pts[pts.length - 1].slice();
}

function tangentAt(pts, s) {
  let acc = 0;
  for (let i = 1; i < pts.length; i++) {
    const seg = Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]);
    if (acc + seg >= s || i === pts.length - 1) {
      const dx = pts[i][0] - pts[i - 1][0];
      const dz = pts[i][1] - pts[i - 1][1];
      const l = Math.hypot(dx, dz) || 1;
      return [dx / l, dz / l];
    }
    acc += seg;
  }
  return [1, 0];
}

export const LAMPS = (() => {
  const out = [];
  let flip = 0;
  for (const road of ROADS) {
    const spacing = 5.4;
    const pts = road.points;
    const total = polylineLen(pts);
    for (let s = 1.6; s <= total - 0.7; s += spacing) {
      const p = pointAt(pts, s);
      const t = tangentAt(pts, s);
      const off = road.width / 2 + 0.55;
      // 优先落在偏好的一侧，另一侧空间足够时也可；两侧都被建筑挡住则放弃
      const sides = [flip % 2 === 0 ? 1 : -1, flip % 2 === 0 ? -1 : 1];
      let placed = null;
      for (const side of sides) {
        const x = p[0] - t[1] * off * side;
        const z = p[1] + t[0] * off * side;
        if (distToTrack(x, z, TRACK_POINTS) < 2.0) continue;
        if (inRiver(x, z, 0.3)) continue;
        if (pondGap(x, z) < 0) continue;
        if (buildingGap(x, z) < 0.6) continue;
        placed = { x, z };
        break;
      }
      if (placed) {
        out.push({ x: placed.x, z: placed.z, rot: Math.atan2(t[0], t[1]) });
        flip++;
      }
    }
  }
  return out;
})();

/* ------------------------------------------------------------------ *
 * 轨旁信号
 * ------------------------------------------------------------------ */
export const SIGNALS = [
  { x: -6, z: -13.6, rot: 0 },
  { x: 16.5, z: 13.4, rot: Math.PI },
];

/* 供校验脚本使用 */
export const SCATTER_MIN = { track: TRACK_MIN };
