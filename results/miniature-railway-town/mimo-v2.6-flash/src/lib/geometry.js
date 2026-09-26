/**
 * 纯数学布局工具 —— 不依赖 three.js，可被 Node 直接引入，
 * 用于 scripts/check-layout.mjs 离线校验建筑/树木/道路与轨道、河流的净距。
 * 坐标系：x 向右，z 向“南”，单位为沙盘世界单位。
 */

/** 环形轨道的外接圆角矩形参数 */
export const TRACK_SHAPE = { hx: 22, hz: 15, r: 8 };

/** 沙盘内场（木框以内）的可摆放范围 */
export const PLAYFIELD = { xMin: -27.5, xMax: 27.5, zMin: -19.5, zMax: 19.5 };
/** 散布元素（树/石/灯）的收缩边界 */
export const SCATTER_BOUNDS = { xMin: -26.4, xMax: 26.4, zMin: -18.4, zMax: 18.4 };
/** 建筑外接框的收缩边界 */
export const BUILDING_BOUNDS = { xMin: -26.3, xMax: 26.3, zMin: -18.3, zMax: 18.3 };

/**
 * 生成闭合圆角矩形折线（按行进顺序）：
 * 南边(向西) → 西南角 → 西边(向北) → 西北角 → 北边(向东) → 东北角 → 东边(向南) → 东南角
 * 返回 [[x, z], ...]，首尾不重复。
 */
export function roundedRectPoints(hx = TRACK_SHAPE.hx, hz = TRACK_SHAPE.hz, r = TRACK_SHAPE.r, arcSegs = 28, lineSegs = 24) {
  const cx = hx - r;
  const cz = hz - r;
  const pts = [];
  const line = (x0, z0, x1, z1, n) => {
    for (let i = 0; i < n; i++) {
      const t = i / n;
      pts.push([x0 + (x1 - x0) * t, z0 + (z1 - z0) * t]);
    }
  };
  const arc = (ox, oz, a0, a1, n) => {
    for (let i = 0; i < n; i++) {
      const a = a0 + (a1 - a0) * (i / n);
      pts.push([ox + r * Math.cos(a), oz + r * Math.sin(a)]);
    }
  };
  const D = Math.PI / 180;
  line(cx, hz, -cx, hz, lineSegs);            // 南边，向西
  arc(-cx, cz, 90 * D, 180 * D, arcSegs);     // 西南角
  line(-hx, cz, -hx, -cz, lineSegs);          // 西边，向北
  arc(-cx, -cz, 180 * D, 270 * D, arcSegs);   // 西北角
  line(-cx, -hz, cx, -hz, lineSegs);          // 北边，向东
  arc(cx, -cz, 270 * D, 360 * D, arcSegs);    // 东北角
  line(hx, -cz, hx, cz, lineSegs);            // 东边，向南
  arc(cx, cz, 0, 90 * D, arcSegs);            // 东南角
  return pts;
}

/** 折线的逐点累计弧长（与点数相同，首项 0） */
export function cumulativeLengths(pts) {
  const cum = [0];
  for (let i = 1; i < pts.length; i++) {
    const dx = pts[i][0] - pts[i - 1][0];
    const dz = pts[i][1] - pts[i - 1][1];
    cum.push(cum[i - 1] + Math.hypot(dx, dz));
  }
  return cum;
}

/** 点到线段距离 */
export function distToSegment(px, pz, ax, az, bx, bz) {
  const vx = bx - ax;
  const vz = bz - az;
  const wx = px - ax;
  const wz = pz - az;
  const len2 = vx * vx + vz * vz;
  let t = len2 > 1e-9 ? (wx * vx + wz * vz) / len2 : 0;
  t = t < 0 ? 0 : t > 1 ? 1 : t;
  const cx = ax + vx * t;
  const cz = az + vz * t;
  return Math.hypot(px - cx, pz - cz);
}

/** 点到折线（可闭合）的最短距离 */
export function distToPolyline(px, pz, pts, closed = true) {
  let best = Infinity;
  const n = pts.length;
  const segs = closed ? n : n - 1;
  for (let i = 0; i < segs; i++) {
    const a = pts[i];
    const b = pts[(i + 1) % n];
    const d = distToSegment(px, pz, a[0], a[1], b[0], b[1]);
    if (d < best) best = d;
  }
  return best;
}

/** 轨道中心线净距 */
export function distToTrack(x, z, trackPts) {
  return distToPolyline(x, z, trackPts, true);
}

/** 河流中心线 x = f(z)（分段线性） */
export const RIVER_CTRL = [
  [-22, -9.0],
  [-14, -8.0],
  [-6, -9.6],
  [2, -9.2],
  [10, -7.0],
  [16, -7.6],
  [22, -9.0],
];

export function riverCenterX(z) {
  const c = RIVER_CTRL;
  if (z <= c[0][0]) return c[0][1];
  if (z >= c[c.length - 1][0]) return c[c.length - 1][1];
  for (let i = 0; i < c.length - 1; i++) {
    const [z0, x0] = c[i];
    const [z1, x1] = c[i + 1];
    if (z >= z0 && z <= z1) {
      const t = (z - z0) / (z1 - z0);
      return x0 + (x1 - x0) * t;
    }
  }
  return c[c.length - 1][1];
}

/** 河流半宽（随 z 轻微摆动） */
export function riverHalfWidth(z) {
  return 3.3 + 0.5 * Math.sin(z * 0.25 + 1);
}

/** 点是否落在河道内（pad 为额外外扩） */
export function inRiver(x, z, pad = 0) {
  return Math.abs(x - riverCenterX(z)) < riverHalfWidth(z) + pad;
}

/** 矩形（中心 + 尺寸 + 旋转角）与点的最近距离（内部为 0） */
export function rectDistance(bx, bz, bw, bd, rot, px, pz) {
  const c = Math.cos(-rot);
  const s = Math.sin(-rot);
  const dx = px - bx;
  const dz = pz - bz;
  const lx = dx * c - dz * s;
  const lz = dx * s + dz * c;
  const hxw = bw / 2;
  const hzd = bd / 2;
  const qx = Math.abs(lx) - hxw;
  const qz = Math.abs(lz) - hzd;
  if (qx <= 0 && qz <= 0) return 0;
  return Math.hypot(Math.max(qx, 0), Math.max(qz, 0));
}

/** 矩形四角（世界坐标） */
export function rectCorners(bx, bz, bw, bd, rot) {
  const c = Math.cos(rot);
  const s = Math.sin(rot);
  const hx = bw / 2;
  const hz = bd / 2;
  return [
    [-hx, -hz],
    [hx, -hz],
    [hx, hz],
    [-hx, hz],
  ].map(([lx, lz]) => [bx + lx * c - lz * s, bz + lx * s + lz * c]);
}

/** 可复现随机数（mulberry32） */
export function makeRng(seed) {
  let a = seed >>> 0;
  return function rng() {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
