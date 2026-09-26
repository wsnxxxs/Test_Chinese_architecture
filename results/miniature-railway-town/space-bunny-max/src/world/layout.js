import { CAVITY_X, CAVITY_Z, GROUND } from '../core/config.js';

/**
 * 沙盘「平面规划」数据：道路、田块、田园小路。
 * 建筑与植被摆放都从这份数据取位置，保证镇子是整体规划出来的。
 */

/** 车行道 / 人行道。w=宽度，kind 决定材质 */
export const ROADS = [
  // ── 站前与镇中心（环线内）──
  { w: 1.5, kind: 'main', pts: [[-4.6, 3.02], [-1, 3.02], [2, 3.02], [5.2, 3.02], [8.4, 3.02]] },
  { w: 1.3, kind: 'main', pts: [[2.0, 3.02], [2.05, 1.6], [2.4, 0.4], [3.0, -0.6], [3.6, -1.5]] },
  { w: 1.2, kind: 'lane', pts: [[3.6, -1.5], [2.2, -1.7], [0.6, -1.3], [-0.6, -0.4], [-1.15, 0.7]] },
  { w: 1.2, kind: 'lane', pts: [[3.6, -1.5], [6.2, -1.6], [8.8, -1.2], [10.7, -0.3], [11.3, 1.0]] },
  { w: 1.1, kind: 'lane', pts: [[3.0, -0.6], [3.7, -3.0], [5.2, -5.0], [7.3, -5.7]] },
  { w: 1.1, kind: 'lane', pts: [[-1.15, 0.7], [-1.35, -1.6], [-1.15, -3.7], [-0.5, -5.1]] },
  { w: 1.0, kind: 'path', pts: [[-0.5, -5.1], [-2.6, -5.3], [-4.8, -5.0], [-6.8, -4.3], [-8.3, -3.3]] },
  { w: 1.0, kind: 'path', pts: [[-1.15, 0.7], [-0.5, 2.0], [0.3, 3.02]] },
  // ── 西侧河畔小路（环线内）──
  { w: 1.0, kind: 'path', pts: [[-11.0, 7.4], [-11.05, 5.0], [-11.15, 3.2], [-11.0, 1.4], [-10.7, -0.9], [-10.2, -2.9], [-9.0, -4.7], [-7.4, -5.7]] },
  // ── 平交道口进出 ──
  { w: 1.2, kind: 'lane', pts: [[-4.3, 3.02], [-4.2, 4.6], [-3.95, 6.2], [-3.9, 7.4]] },
  { w: 1.2, kind: 'lane', pts: [[-3.9, 7.4], [-3.85, 9.6], [-3.95, 11.4], [-4.6, 12.3]] },
  // ── 环线外：南侧 → 东侧农田 ──
  { w: 1.1, kind: 'lane', pts: [[-4.6, 12.3], [-1, 12.5], [4, 12.5], [9, 12.2], [14, 11.4], [18.4, 10.4]] },
  // ── 环线外：西侧 → 石拱桥 → 北岸磨坊 / 南岸田 ──
  { w: 1.0, kind: 'path', pts: [[-4.6, 12.3], [-8.6, 12.7], [-13, 12.2], [-16.6, 10.8], [-19.2, 8.4], [-19.7, 6.0], [-19.75, 4.9]] },
  { w: 0.95, kind: 'path', pts: [[-19.8, 4.9], [-19.4, 6.3], [-18.2, 6.8], [-16.9, 6.3]] },
  { w: 0.9, kind: 'path', pts: [[-19.8, 0.0], [-19.9, -1.8], [-19.5, -3.6], [-18.5, -5.0], [-16.9, -6.2]] },
  // ── 东侧支路 ──
  { w: 0.9, kind: 'path', pts: [[14.0, 11.4], [14.6, 8.0], [14.9, 4.0], [15.0, 0.0], [15.2, -4.0]] },
  { w: 0.9, kind: 'path', pts: [[15.2, -4.0], [13.0, -5.6], [10.4, -7.4]] },
];

/** 田块：农田 / 草场 / 场院 */
export const PLOTS = [
  { kind: 'crop', x0: -8.9, z0: 4.6, x1: -4.9, z1: 7.5, rot: 0 },
  { kind: 'crop', x0: 9.7, z0: 0.2, x1: 12.3, z1: 7.1, rot: 0 },
  { kind: 'pasture', x0: 0.4, z0: -8.0, x1: 6.2, z1: -5.3, rot: 0 },
  { kind: 'pasture', x0: -20.5, z0: -13.0, x1: -14.4, z1: -8.0, rot: 0 },
  { kind: 'crop', x0: 14.7, z0: 2.6, x1: 20.4, z1: 8.2, rot: 0 },
  { kind: 'pasture', x0: 14.9, z0: -4.2, x1: 20.4, z1: 1.0, rot: 0 },
  { kind: 'crop', x0: -20.4, z0: -7.2, x1: -15.4, z1: -4.6, rot: 0 },
  { kind: 'crop', x0: 2.0, z0: -13.2, x1: 11.0, z1: -10.6, rot: 0 },
  { kind: 'pasture', x0: -13.0, z0: -13.2, x1: -4.0, z1: -10.4, rot: 0 },
];

/** 站场货场（碎石场坪） */
export const YARDS = [{ x0: -1.0, z0: 9.5, x1: 8.4, z1: 11.6 }];

/* ── 查询工具 ──────────────────────────────────────────────────────── */

function distToSeg(px, pz, ax, az, bx, bz) {
  const dx = bx - ax;
  const dz = bz - az;
  const l2 = dx * dx + dz * dz;
  let t = l2 > 0 ? ((px - ax) * dx + (pz - az) * dz) / l2 : 0;
  t = t < 0 ? 0 : t > 1 ? 1 : t;
  const cx = ax + dx * t;
  const cz = az + dz * t;
  return Math.hypot(px - cx, pz - cz);
}

export function roadDist(x, z) {
  let best = Infinity;
  for (const r of ROADS) {
    for (let i = 0; i < r.pts.length - 1; i++) {
      const d = distToSeg(x, z, r.pts[i][0], r.pts[i][1], r.pts[i + 1][0], r.pts[i + 1][1]) - r.w * 0.5;
      if (d < best) best = d;
    }
  }
  return best;
}

export function inRect(x, z, r, pad = 0) {
  return x > r.x0 - pad && x < r.x1 + pad && z > r.z0 - pad && z < r.z1 + pad;
}

export function inAnyRect(x, z, rects, pad = 0) {
  for (const r of rects) if (inRect(x, z, r, pad)) return true;
  return false;
}

export const inCavity = (x, z, pad = 0) =>
  x > -CAVITY_X - pad && x < CAVITY_X + pad && z > -CAVITY_Z - pad && z < CAVITY_Z + pad;

export const ROAD_Y = GROUND + 0.035;
