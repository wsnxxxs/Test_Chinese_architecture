/**
 * 全局布局参数 —— 沙盘所有坐标都写死在这里，方便统一调整构图。
 * 坐标约定：X 向右，Z 向前（+Z 朝向观众一侧），Y 向上。单位为「沙盘单位」。
 */

// ── 展示底座（木质沙盘托盘）──────────────────────────────────────────
export const TRAY = { w: 44, d: 30, wall: 1.1, h: 1.0, skirt: 0.16 };
export const CAVITY_X = TRAY.w / 2 - TRAY.wall; // 20.9
export const CAVITY_Z = TRAY.d / 2 - TRAY.wall; // 13.9
export const GROUND = 0.7;                     // 草面高度

// ── 水系 ────────────────────────────────────────────────────────────
export const WATER = {
  y: GROUND - 0.15,          // 水面
  bed: GROUND - 0.62,        // 河床
  bank: 1.25,                // 岸坡水平展开宽度
  shrink: 0.5,              // 水面相对岸线内缩（避免与岸坡 z-fighting）
  sand: 1.05,                // 岸线外侧沙滩宽度
};
export const RIVER = {
  center: [
    [-21.7, 2.3], [-19.6, 2.1], [-17.4, 1.6], [-15.4, 0.9],
    [-14.0, 0.35], [-12.6, 0.15], [-11.2, 0.1], [-9.9, 0.2],
  ],
  half: [2.15, 2.12, 2.0, 1.92, 1.85, 1.8, 1.75, 1.7],
};
export const LAKE = { cx: -4.6, cz: 0.55, r: 4.4, a0: 165, a1: -170, steps: 30, wob: 0.3 };

// ── 轨道 ────────────────────────────────────────────────────────────
export const RAIL = {
  y: GROUND + 0.22,     // 枕木顶面 = 轨底
  railH: 0.155,         // 钢轨高（轨顶 = y + railH）
  gauge: 1.0,           // 轨中心距
  ballastTop: 0.8,      // 道砟顶面高度
  ballastTopHalf: 1.02, // 道砟顶半宽
  ballastBotHalf: 1.58, // 道砟底半宽
  sleeper: { w: 1.76, h: 0.12, d: 0.27, step: 0.52 },
  deckHalf: 1.34,       // 桥面半宽
  deckThick: 0.34,
  girder: 0.18,         // 主梁厚
  girderBottom: 0.1,    // 主梁底高
};

// ── 站场 / 平交道口（位于南侧直线段）────────────────────────────────
export const STATION = {
  cx: 2.0,               // 站台中心 X
  half: 3.5,             // 站台半长 → 7.0
  trackZ: 8.2,           // 南侧直线段轨道中心 Z
  platformZ0: 5.98,      // 站台内边 Z
  platformZ1: 7.48,      // 站台靠轨道边 Z
  buildingZ0: 3.86,
  buildingZ1: 5.86,
  forecourtZ: 3.02,      // 站前道路中心 Z
};
export const CROSSING_X = -3.85;   // 平交道口中心 X
export const ROAD_BRIDGE_X = -18.0; // 公路石拱桥 X

// ── 闭合铁路中线控制点（圆角矩形，四个转角半径不同）──────────────────
const D = Math.PI / 180;

function linePts(ax, az, bx, bz, n) {
  const out = [];
  for (let i = 0; i <= n; i++) out.push([ax + (bx - ax) * (i / n), az + (bz - az) * (i / n)]);
  return out;
}
function arcPts(cx, cz, r, a0, a1, n, skipEnds = true) {
  const out = [];
  for (let i = skipEnds ? 1 : 0; i <= (skipEnds ? n - 1 : n); i++) {
    const a = (a0 + (a1 - a0) * (i / n)) * D;
    out.push([cx + Math.cos(a) * r, cz + Math.sin(a) * r]);
  }
  return out;
}

// 四条直线段 + 四个圆角
const W = { x: -14, z0: -6.0, z1: 5.2 };   // 西侧直线（铁路跨河处）
const S = { z: 8.2, x0: -11.0, x1: 9.4 };  // 南侧直线（站场所在）
const E = { x: 13, z0: 4.6, z1: -5.6 };    // 东侧直线
const N = { z: -8.6, x0: 10.0, x1: -11.4 };// 北侧直线
const R_SW = 3.0, R_SE = 3.6, R_NE = 3.0, R_NW = 2.6;

export const LOOP = [
  ...linePts(W.x, W.z0, W.x, W.z1, 8),                                  // 西 9 点
  ...arcPts(W.x + R_SW, S.z - R_SW, R_SW, 180, 90, 4),                   // 西南弯
  ...linePts(S.x0, S.z, S.x1, S.z, 8),                                  // 南 9 点
  ...arcPts(E.x - R_SE, S.z - R_SE, R_SE, 90, 0, 4),                    // 东南弯
  ...linePts(E.x, E.z0, E.x, E.z1, 8),                                  // 东 9 点
  ...arcPts(E.x - R_NE, N.z + R_NE, R_NE, 0, -90, 4),                   // 东北弯
  ...linePts(N.x0, N.z, N.x1, N.z, 8).map((p, i, a) =>                  // 北 9 点
    (i > 1 && i < a.length - 2 ? [p[0], p[1] + 0.5] : p)),             // 中段外凸
  ...arcPts(W.x + R_NW, N.z + R_NW, R_NW, 270, 180, 4),                 // 西北弯
];

// ── 配色（手绘模型漆感：低饱和、带灰度）──────────────────────────────
export const C = {
  trayWood: 0x8a5f39,
  trayWoodDark: 0x6b472a,
  trayWoodLight: 0xa87a4c,
  grass: 0x6d8c47,
  grassAlt: 0x78994f,
  grassDark: 0x55703a,
  sand: 0xc0ab84,
  mud: 0x5d5a45,
  water: 0x2a6273,
  ballast: 0x7b7368,
  sleeper: 0x4a3a2c,
  railHead: 0xb0aca2,
  railWeb: 0x4a4038,
  brick: 0x9c6a55,
  stone: 0x9b9285,
  stoneDark: 0x6f6a60,
  girder: 0x7a4234,
  metal: 0x3d4045,
  brass: 0xb08a3c,
  road: 0x8c7f6a,
  roadDark: 0x6f6553,
  path: 0x9a8a70,
  glassDay: 0x2d3d47,
  glow: 0xffc069,
  leaf: [0x5a7d3a, 0x648538, 0x4d7437, 0x6c8c42, 0x547c44],
  pine: [0x3a6142, 0x426b46, 0x325840],
  trunk: 0x5b4530,
  foliage: [0x7d8a3c, 0x8d9440, 0x6f7f36],
};

export const WALL_COLORS = [
  0xeadfc8, 0xe0cdac, 0xd3dac6, 0xe7d3bf, 0xd6c4aa, 0xccd2d3, 0xecdfc8, 0xe0cdb4, 0xd9c3a4, 0xcfc6b0,
];
export const ROOF_COLORS = [
  0x8f5d48, 0x77534a, 0x8a6a55, 0x6b5548, 0x5a6670, 0x4e5f5c, 0x99654c, 0x6e7a74, 0x8c5b4a, 0x66707a, 0x7a6350, 0x8a5a4e,
];
export const TIMBER_COLORS = [0x4a3a2c, 0x5b4530, 0x3e3227];
