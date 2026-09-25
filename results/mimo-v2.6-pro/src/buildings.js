import { C } from './colors.js';
import { mirrorCtx } from './builder.js';
import {
  put, column, wall, facade, plaque, dougong, terrace,
  lantern, stoneLamp, pine, broadTree, stoneLion, wallRun,
} from './decor.js';
import { roof, eaveSkirt, finial } from './roofs.js';

/* ==========================================================================
 * 单体建筑（东侧坐标为准，西侧经 mirrorCtx 镜像生成，保证中轴对称）
 * 世界约定：+z 为南（山门一侧），-z 为北（后殿一侧），+x 为东
 * ========================================================================== */

/** 主殿：重檐庑殿顶 · 黄琉璃瓦 · 五开间 · 三出踏跺 */
export function mainHall(S) {
  const cx = 0, cz = -14, W = 34, D = 22;
  const t = 2.2, y0 = 3.6, y1 = y0 + 9.2;
  const zf = cz + D / 2, zb = cz - D / 2;

  terrace(S, {
    cx, cz, w: 44, d: 36, h: y0,
    stairs: [
      { axis: 'x', dir: 1, u: 0, w: 13, steps: 4, run: 1.5, carve: 3.4 },
      { axis: 'x', dir: 1, u: -16.5, w: 5, steps: 4, run: 1.3 },
      { axis: 'x', dir: 1, u: 16.5, w: 5, steps: 4, run: 1.3 },
      { axis: 'x', dir: -1, u: 0, w: 7, steps: 4, run: 1.3 },
    ],
    railGaps: { front: [[-8, 8], [-21, -12.5], [12.5, 21]], back: [[-4.5, 4.5]] },
  });

  // —— 下层（明间辟门，五开间） ——
  const cols = [-15, -9, -3, 3, 9, 15];
  const bays = [-12, -6, 0, 6, 12];
  facade(S, {
    axis: 'x', u0: -W / 2, u1: W / 2, v: zf, t, y0, y1, face: 1,
    openings: bays.map((b) => ({
      u0: b - 1.8, u1: b + 1.8, y0, y1: y1 - 2.6,
      type: 'door', double: true, studs: b === 0,
    })),
  });
  facade(S, {
    axis: 'x', u0: -W / 2, u1: W / 2, v: zb, t, y0, y1, face: -1,
    openings: [-8, 0, 8].map((b) => ({
      u0: b - 1.8, u1: b + 1.8, y0: y0 + 1.4, y1: y1 - 2.6, type: 'win',
    })),
  });
  for (const sx of [1, -1]) {
    facade(S, {
      axis: 'z', u0: zb, u1: zf, v: sx * (W / 2), t, y0, y1, face: sx,
      openings: [-20, -14, -8].map((b) => ({
        u0: b - 1.8, u1: b + 1.8, y0: y0 + 1.4, y1: y1 - 2.6, type: 'win',
      })),
    });
  }
  for (const u of cols) column(S, 'x', u, zf + 1.6, y0, y1, 2.4);
  for (const u of cols) column(S, 'x', u, zb - 1.6, y0, y1, 2.4);
  plaque(S, { axis: 'x', u: 0, v: zf, t, y: y1 - 2.2, face: 1, w: 7.4, h: 2.1 });
  dougong(S, { axis: 'x', u0: -W / 2, u1: W / 2, v: zf, t, y: y1, face: 1 });
  dougong(S, { axis: 'x', u0: -W / 2, u1: W / 2, v: zb, t, y: y1, face: -1 });
  dougong(S, { axis: 'z', u0: zb, u1: zf, v: W / 2, t, y: y1, face: 1 });
  dougong(S, { axis: 'z', u0: zb, u1: zf, v: -W / 2, t, y: y1, face: -1 });

  // —— 下檐（重檐裙板） ——
  eaveSkirt(S, {
    cx, cz, y: y1 + 2.15,
    wOut: W + 9, dOut: D + 9, wIn: 27.6, dIn: 15.6,
    layers: 3, sh: 1.05, cornerLift: 2.4, c: 5.5, dots: true,
  });

  // —— 上层（檐墙 + 槛窗） ——
  const y2 = y1 + 2.15 + 3.15, y3 = y2 + 5.3;
  const zf2 = cz + 8, zb2 = cz - 8;
  facade(S, {
    axis: 'x', u0: -14, u1: 14, v: zf2, t: 2.0, y0: y2, y1: y3, face: 1,
    openings: [-8, 0, 8].map((b) => ({
      u0: b - 2.2, u1: b + 2.2, y0: y2 + 1.0, y1: y3 - 0.8, type: 'win',
    })),
  });
  facade(S, {
    axis: 'x', u0: -14, u1: 14, v: zb2, t: 2.0, y0: y2, y1: y3, face: -1,
    openings: [-8, 0, 8].map((b) => ({
      u0: b - 2.2, u1: b + 2.2, y0: y2 + 1.0, y1: y3 - 0.8, type: 'win',
    })),
  });
  for (const sx of [1, -1]) {
    facade(S, {
      axis: 'z', u0: zb2, u1: zf2, v: sx * 14, t: 2.0, y0: y2, y1: y3, face: sx,
      openings: [-18, -10].map((b) => ({ u0: b - 1.9, u1: b + 1.9, y0: y2 + 1.0, y1: y3 - 0.8, type: 'win' })),
    });
  }
  for (const u of [-12, -4, 4, 12]) {
    column(S, 'x', u, zf2 + 1.4, y2, y3, 2.2);
    column(S, 'x', u, zb2 - 1.4, y2, y3, 2.2);
  }
  dougong(S, { axis: 'x', u0: -14, u1: 14, v: zf2, t: 2.0, y: y3, face: 1 });
  dougong(S, { axis: 'x', u0: -14, u1: 14, v: zb2, t: 2.0, y: y3, face: -1 });
  dougong(S, { axis: 'z', u0: zb2, u1: zf2, v: 14, t: 2.0, y: y3, face: 1 });
  dougong(S, { axis: 'z', u0: zb2, u1: zf2, v: -14, t: 2.0, y: y3, face: -1 });

  // —— 上檐（重檐庑殿顶） ——
  roof(S, {
    cx, cz, y: y3 + 2.15, w: 28, d: 16, overhang: 3.2, rise: 8,
    style: 'hip', hipRun: 8.5, ridgeAxis: 'x',
    tile: C.tileGold, tileDk: C.tileGoldDk, ridgeC: C.ridgeGold, orn: C.goldHi,
    cornerLift: 2.4, c: 5.5, beasts: true, dots: true,
  });

  // 灯笼 + 台基石狮
  const yh = y1 + 1.6;
  for (const [lx, lz] of [[-18.5, 1.0], [0, 1.0], [18.5, 1.0], [-18.5, -29.0], [18.5, -29.0], [0, -29.0]]) {
    lantern(S, { x: lx, y: yh, z: lz, s: 1.1, cord: 1.2 });
  }
  stoneLion(S, { x: -8.6, z: 2.2, y: y0, s: 0.72 });
  stoneLion(S, { x: 8.6, z: 2.2, y: y0, s: 0.72 });
}

/**
 * 配殿 / 厢房：歇山顶，面朝 face 方向（±x），正脊沿 z。
 * 以东侧坐标书写（cx > 0，face = -1 表示向院内/西），西侧镜像生成。
 */
export function sideHall(S, o) {
  const {
    cx, cz, face = -1, dX = 12, dZ = 20, bays = 3,
    tile = C.tileGreen, tileDk = C.tileGreenDk, ridgeC = C.ridgeGreen, orn = C.gold,
    terraceH = 1.6, wallH = 8.6, rise = 5.4, overhang = 2.6, hipRun = 4.2, lanterns = true,
  } = o;
  const t = 1.8, y0 = terraceH, y1 = y0 + wallH;
  const uA = cz - dZ / 2, uB = cz + dZ / 2;
  const xf = cx + face * (dX / 2), xb = cx - face * (dX / 2);

  terrace(S, {
    cx, cz, w: dX + 3.2, d: dZ + 3.2, h: terraceH,
    stairs: [{ axis: 'z', dir: face, u: cz, w: Math.min(8, dZ * 0.42), steps: 2, run: 1.3 }],
    railGaps: terraceH >= 1.6
      ? { [face < 0 ? 'left' : 'right']: [[cz - 4.6, cz + 4.6]] }
      : {},
  });

  // 前檐：明间开门，次间开窗
  const bayW = dZ / bays;
  const colU = [], openU = [];
  for (let k = 0; k <= bays; k++) colU.push(uA + k * bayW);
  for (let k = 0; k < bays; k++) openU.push(uA + (k + 0.5) * bayW);
  facade(S, {
    axis: 'z', u0: uA, u1: uB, v: xf, t, y0, y1, face,
    openings: openU.map((u, k) => (k === Math.floor(bays / 2)
      ? { u0: u - 1.9, u1: u + 1.9, y0, y1: y1 - 2.4, type: 'door', double: true }
      : { u0: u - 1.9, u1: u + 1.9, y0: y0 + 1.3, y1: y1 - 2.4, type: 'win' })),
  });
  // 后檐 + 两山
  facade(S, {
    axis: 'z', u0: uA, u1: uB, v: xb, t, y0, y1, face: -face,
    openings: openU.map((u) => ({ u0: u - 1.7, u1: u + 1.7, y0: y0 + 1.5, y1: y1 - 2.4, type: 'win' })),
  });
  for (const su of [uA, uB]) {
    facade(S, {
      axis: 'x', u0: cx - dX / 2, u1: cx + dX / 2, v: su, t, y0, y1, face: su === uA ? -1 : 1,
      openings: [{ u0: cx - 1.8, u1: cx + 1.8, y0: y0 + 1.5, y1: y1 - 2.4, type: 'win' }],
    });
  }
  for (const u of colU) column(S, 'z', u, xf + face * 1.5, y0, y1, 2.1);

  dougong(S, { axis: 'z', u0: uA, u1: uB, v: xf, t, y: y1, face });
  dougong(S, { axis: 'z', u0: uA, u1: uB, v: xb, t, y: y1, face: -face });
  dougong(S, { axis: 'x', u0: cx - dX / 2, u1: cx + dX / 2, v: uA, t, y: y1, face: -1 });
  dougong(S, { axis: 'x', u0: cx - dX / 2, u1: cx + dX / 2, v: uB, t, y: y1, face: 1 });

  roof(S, {
    cx, cz, y: y1 + 2.15, w: dX, d: dZ, overhang, rise,
    style: 'hipGable', hipRun, ridgeAxis: 'z',
    tile, tileDk, ridgeC, orn, cornerLift: 2, c: 4.5, gableFace: C.tealDk,
  });

  if (lanterns) {
    const ly = y1 + 0.6;
    const lx = cx + face * (dX / 2 + overhang - 0.9);
    lantern(S, { x: lx, y: ly, z: cz - dZ / 2 + 2.4, s: 0.95 });
    lantern(S, { x: lx, y: ly, z: cz + dZ / 2 - 2.4, s: 0.95 });
  }
}

/** 后殿：歇山顶 · 青瓦 · 三开间（面朝 +z） */
export function rearHall(S) {
  const cx = 0, cz = -49, W = 24, D = 14, t = 1.9;
  const y0 = 2.2, y1 = y0 + 8.4;
  const zf = cz + D / 2, zb = cz - D / 2;

  terrace(S, {
    cx, cz, w: W + 6, d: D + 7, h: y0,
    stairs: [
      { axis: 'x', dir: 1, u: 0, w: 9, steps: 3, run: 1.35, carve: 2.6 },
      { axis: 'x', dir: 1, u: -13, w: 4, steps: 3, run: 1.2 },
      { axis: 'x', dir: 1, u: 13, w: 4, steps: 3, run: 1.2 },
    ],
    railGaps: { front: [[-5.5, 5.5], [-15.6, -10.4], [10.4, 15.6]] },
  });

  const bays = [-8, 0, 8];
  facade(S, {
    axis: 'x', u0: -W / 2, u1: W / 2, v: zf, t, y0, y1, face: 1,
    openings: bays.map((b) => (b === 0
      ? { u0: b - 1.9, u1: b + 1.9, y0, y1: y1 - 2.4, type: 'door', double: true }
      : { u0: b - 1.9, u1: b + 1.9, y0: y0 + 1.3, y1: y1 - 2.4, type: 'win' })),
  });
  facade(S, {
    axis: 'x', u0: -W / 2, u1: W / 2, v: zb, t, y0, y1, face: -1,
    openings: bays.map((b) => ({ u0: b - 1.7, u1: b + 1.7, y0: y0 + 1.5, y1: y1 - 2.4, type: 'win' })),
  });
  for (const sx of [1, -1]) {
    facade(S, {
      axis: 'z', u0: zb, u1: zf, v: sx * (W / 2), t, y0, y1, face: sx,
      openings: [{ u0: cz - 1.8, u1: cz + 1.8, y0: y0 + 1.5, y1: y1 - 2.4, type: 'win' }],
    });
  }
  for (const u of [-11, -3.7, 3.7, 11]) column(S, 'x', u, zf + 1.5, y0, y1, 2.2);
  plaque(S, { axis: 'x', u: 0, v: zf, t, y: y1 - 2.0, face: 1, w: 5.6, h: 1.7 });

  dougong(S, { axis: 'x', u0: -W / 2, u1: W / 2, v: zf, t, y: y1, face: 1 });
  dougong(S, { axis: 'x', u0: -W / 2, u1: W / 2, v: zb, t, y: y1, face: -1 });
  dougong(S, { axis: 'z', u0: zb, u1: zf, v: W / 2, t, y: y1, face: 1 });
  dougong(S, { axis: 'z', u0: zb, u1: zf, v: -W / 2, t, y: y1, face: -1 });

  roof(S, {
    cx, cz, y: y1 + 2.15, w: W, d: D, overhang: 2.9, rise: 6.2,
    style: 'hipGable', hipRun: 5.5, ridgeAxis: 'x',
    tile: C.tileGray, tileDk: C.tileGrayDk, ridgeC: C.ridgeGray, orn: C.gold,
    cornerLift: 2.1, c: 5, gableFace: C.tealDk,
  });

  lantern(S, { x: -8, y: y1 + 0.5, z: zf + overhangY(D, 2.9) - 1.0, s: 0.95 });
  lantern(S, { x: 8, y: y1 + 0.5, z: zf + overhangY(D, 2.9) - 1.0, s: 0.95 });
}

const overhangY = (d, o) => d / 2 + o;

/** 山门：三门洞 · 歇山顶 · 黄琉璃瓦（墙体贯通成门洞） */
export function mountainGate(S) {
  const cx = 0, cz = 62, W = 36, D = 10, t = 2.4;
  const y0 = 1.2, y1 = y0 + 11.0;
  const zf = cz + D / 2, zb = cz - D / 2;
  const doorY = y0 + 7.4;
  const openings = [
    { u0: -4.3, u1: 4.3, y0, y1: doorY, type: 'door', double: true, studs: true },
    { u0: -12.8, u1: -6.7, y0, y1: doorY - 0.4, type: 'door', double: true, studs: true },
    { u0: 6.7, u1: 12.8, y0, y1: doorY - 0.4, type: 'door', double: true, studs: true },
  ];

  terrace(S, {
    cx, cz, w: W + 4, d: D + 3, h: y0,
    stairs: [
      { axis: 'x', dir: 1, u: 0, w: 11, steps: 1, run: 1.5 },
      { axis: 'x', dir: -1, u: 0, w: 11, steps: 1, run: 1.5 },
      { axis: 'x', dir: 1, u: -9.8, w: 5, steps: 1, run: 1.3 },
      { axis: 'x', dir: 1, u: 9.8, w: 5, steps: 1, run: 1.3 },
    ],
  });

  facade(S, { axis: 'x', u0: -W / 2, u1: W / 2, v: zf, t, y0, y1, face: 1, openings });
  facade(S, {
    axis: 'x', u0: -W / 2, u1: W / 2, v: zb, t, y0, y1, face: -1,
    openings: openings.map(({ studs, ...rest }) => rest),
  });
  for (const sx of [1, -1]) {
    facade(S, {
      axis: 'z', u0: zb, u1: zf, v: sx * (W / 2), t, y0, y1, face: sx,
      openings: [{ u0: cz - 1.5, u1: cz + 1.5, y0: y0 + 2.4, y1: doorY - 0.4, type: 'win' }],
    });
    column(S, 'x', sx * 5.5, zf + 1.6, y0, y1, 2.3);
    column(S, 'x', sx * 14, zf + 1.6, y0, y1, 2.3);
    column(S, 'x', sx * 5.5, zb - 1.6, y0, y1, 2.3);
    column(S, 'x', sx * 14, zb - 1.6, y0, y1, 2.3);
    // 门枕石
    S.solid.box(sx * 4.5 - 0.7, y0, zf + 0.2, 1.4, 1.3, 1.4, C.stoneDk);
    S.solid.box(sx * 4.5 - 0.7, y0, zb - 1.6, 1.4, 1.3, 1.4, C.stoneDk);
  }
  plaque(S, { axis: 'x', u: 0, v: zf, t, y: y1 - 2.4, face: 1, w: 6.4, h: 1.9 });

  dougong(S, { axis: 'x', u0: -W / 2, u1: W / 2, v: zf, t, y: y1, face: 1 });
  dougong(S, { axis: 'x', u0: -W / 2, u1: W / 2, v: zb, t, y: y1, face: -1 });
  dougong(S, { axis: 'z', u0: zb, u1: zf, v: W / 2, t, y: y1, face: 1 });
  dougong(S, { axis: 'z', u0: zb, u1: zf, v: -W / 2, t, y: y1, face: -1 });

  roof(S, {
    cx, cz, y: y1 + 2.15, w: W, d: D, overhang: 3.4, rise: 6.4,
    style: 'hipGable', hipRun: 6.5, ridgeAxis: 'x',
    tile: C.tileGold, tileDk: C.tileGoldDk, ridgeC: C.ridgeGold, orn: C.goldHi,
    cornerLift: 2.4, c: 5.5, beasts: true, dots: true, gableFace: C.tealDk,
  });

  for (const sx of [1, -1]) {
    lantern(S, { x: sx * 15, y: y1 - 0.4, z: zf + 3.0, s: 1.0, cord: 1.3 });
    lantern(S, { x: sx * 15, y: y1 - 0.4, z: zb - 3.0, s: 1.0, cord: 1.3 });
  }
  stoneLion(S, { x: -11.5, z: 70.5, s: 1.15 });
  stoneLion(S, { x: 11.5, z: 70.5, s: 1.15 });
}

/** 垂花门：一开间垂莲柱 · 歇山卷棚（前院与主院之间） */
export function sideGate(S) {
  const cx = 0, cz = 28, W = 16, D = 7, t = 2.0;
  const y0 = 0.9, y1 = y0 + 7.5;
  const zf = cz + D / 2, zb = cz - D / 2;

  terrace(S, {
    cx, cz, w: W + 4, d: D + 3.4, h: y0,
    stairs: [
      { axis: 'x', dir: 1, u: 0, w: 7, steps: 1, run: 1.4 },
      { axis: 'x', dir: -1, u: 0, w: 7, steps: 1, run: 1.4 },
    ],
  });

  const openings = [
    { u0: -2.4, u1: 2.4, y0, y1: y0 + 5.7, type: 'door', double: true, studs: true },
    { u0: -6.6, u1: -3.8, y0: y0 + 1.4, y1: y0 + 5.2, type: 'win' },
    { u0: 3.8, u1: 6.6, y0: y0 + 1.4, y1: y0 + 5.2, type: 'win' },
  ];
  facade(S, { axis: 'x', u0: -W / 2, u1: W / 2, v: zf, t, y0, y1, face: 1, openings });
  facade(S, { axis: 'x', u0: -W / 2, u1: W / 2, v: zb, t, y0, y1, face: -1, openings });
  for (const sx of [1, -1]) {
    wall(S, 'z', zb, zf, sx * (W / 2), t, y0, y1, C.wallRed);
  }
  // 前檐四柱 + 垂莲
  for (const u of [-6.4, -3.0, 3.0, 6.4]) {
    column(S, 'x', u, zf + 1.4, y0, y1, 1.9);
    S.solid.box(u - 0.45, y0 + 4.6, zf + 2.0, 0.9, 1.3, 0.9, C.goldHi);
    S.solid.box(u - 0.28, y0 + 4.0, zf + 2.15, 0.56, 0.6, 0.56, C.teal);
  }
  put(S.solid, 'x', -W / 2, W / 2, zf, zf + 2.2, y1, y1 + 0.7, C.wood);

  dougong(S, { axis: 'x', u0: -W / 2, u1: W / 2, v: zf, t, y: y1, face: 1 });
  dougong(S, { axis: 'x', u0: -W / 2, u1: W / 2, v: zb, t, y: y1, face: -1 });
  dougong(S, { axis: 'z', u0: zb, u1: zf, v: W / 2, t, y: y1, face: 1 });
  dougong(S, { axis: 'z', u0: zb, u1: zf, v: -W / 2, t, y: y1, face: -1 });

  roof(S, {
    cx, cz, y: y1 + 2.15, w: W, d: D, overhang: 2.7, rise: 4.6,
    style: 'hipGable', hipRun: 3.8, ridgeAxis: 'x',
    tile: C.tileGold, tileDk: C.tileGoldDk, ridgeC: C.ridgeGold, orn: C.goldHi,
    cornerLift: 2.0, c: 4, gableFace: C.tealDk,
  });

  lantern(S, { x: -5.4, y: y1 - 0.5, z: zf + 2.4, s: 0.85, cord: 0.9 });
  lantern(S, { x: 5.4, y: y1 - 0.5, z: zf + 2.4, s: 0.85, cord: 0.9 });
}

/** 钟楼 / 鼓楼：两层方亭 · 攒尖顶（kind: 'bell' | 'drum'） */
export function bellDrumTower(S, { cx, cz = 47, kind = 'bell' }) {
  const W = 12, t = 2.0;
  const y0 = 1.1, y1 = y0 + 8.6;
  const zf = cz + W / 2, zb = cz - W / 2;

  terrace(S, {
    cx, cz, w: W + 3.4, d: W + 3.4, h: y0,
    stairs: [{ axis: 'x', dir: 1, u: 0, w: 6.5, steps: 1, run: 1.4 }],
  });

  facade(S, {
    axis: 'x', u0: cx - W / 2, u1: cx + W / 2, v: zf, t, y0, y1, face: 1,
    openings: [
      { u0: cx - 1.8, u1: cx + 1.8, y0, y1: y0 + 6.2, type: 'door', double: true, studs: true },
      { u0: cx - 5.2, u1: cx - 3.1, y0: y0 + 2.2, y1: y0 + 6.0, type: 'win' },
      { u0: cx + 3.1, u1: cx + 5.2, y0: y0 + 2.2, y1: y0 + 6.0, type: 'win' },
    ],
  });
  facade(S, {
    axis: 'x', u0: cx - W / 2, u1: cx + W / 2, v: zb, t, y0, y1, face: -1,
    openings: [
      { u0: cx - 4.2, u1: cx - 1.6, y0: y0 + 2.2, y1: y0 + 6.0, type: 'win' },
      { u0: cx + 1.6, u1: cx + 4.2, y0: y0 + 2.2, y1: y0 + 6.0, type: 'win' },
    ],
  });
  for (const sx of [1, -1]) {
    facade(S, {
      axis: 'z', u0: zb, u1: zf, v: cx + sx * (W / 2), t, y0, y1, face: sx,
      openings: [{ u0: cz - 2.1, u1: cz + 2.1, y0: y0 + 2.2, y1: y0 + 6.0, type: 'win' }],
    });
    column(S, 'x', cx + sx * 4.4, zf + 1.4, y0, y1, 2.1);
    column(S, 'x', cx + sx * 4.4, zb - 1.4, y0, y1, 2.1);
  }
  dougong(S, { axis: 'x', u0: cx - W / 2, u1: cx + W / 2, v: zf, t, y: y1, face: 1 });
  dougong(S, { axis: 'x', u0: cx - W / 2, u1: cx + W / 2, v: zb, t, y: y1, face: -1 });
  dougong(S, { axis: 'z', u0: zb, u1: zf, v: cx + W / 2, t, y: y1, face: 1 });
  dougong(S, { axis: 'z', u0: zb, u1: zf, v: cx - W / 2, t, y: y1, face: -1 });

  // 平座 + 栏杆
  const yb = y1 + 2.15;
  S.solid.box(cx - 7.3, yb, cz - 7.3, 14.6, 0.7, 14.6, C.wood);
  S.solid.box(cx - 7.6, yb + 0.7, cz - 7.6, 15.2, 0.25, 15.2, C.stoneDk);
  const gap = [[cx - 2.6, cx + 2.6]];
  const railY = yb + 0.95;
  put(S.solid, 'x', cx - 6.9, cx + 6.9, cz + 6.9, cz + 7.3, railY + 0.9, railY + 1.25, C.stone);
  put(S.solid, 'x', cx - 6.9, cx + 6.9, cz - 7.3, cz - 6.9, railY + 0.9, railY + 1.25, C.stone);
  put(S.solid, 'z', cz - 6.9, cz + 6.9, cx + 6.9, cx + 7.3, railY + 0.9, railY + 1.25, C.stone);
  put(S.solid, 'z', cz - 6.9, cz + 6.9, cx - 7.3, cx - 6.9, railY + 0.9, railY + 1.25, C.stone);
  for (let i = -2; i <= 2; i++) {
    const u = cx + i * 3.4;
    if (Math.abs(u - cx) < 2.7) continue;
    S.solid.box(u - 0.28, railY, cz + 6.85, 0.56, 1.3, 0.56, C.stoneDk);
    S.solid.box(u - 0.28, railY, cz - 7.25, 0.56, 1.3, 0.56, C.stoneDk);
    S.solid.box(cx + 6.85, railY, u - 0.28, 0.56, 1.3, 0.56, C.stoneDk);
    S.solid.box(cx - 7.25, railY, u - 0.28, 0.56, 1.3, 0.56, C.stoneDk);
  }

  // 上层敞亭
  const y2 = yb + 0.95, y3 = y2 + 6.4;
  for (const sx of [1, -1]) {
    for (const sz of [1, -1]) column(S, 'x', cx + sx * 4.6, cz + sz * 4.6, y2, y3, 2.0);
  }
  for (const [u0, u1, v, ax] of [
    [cx - 5.8, cx + 5.8, cz + 5.2, 'x'], [cx - 5.8, cx + 5.8, cz - 5.2, 'x'],
  ]) {
    put(S.solid, ax, u0, u1, v - 0.5, v + 0.5, y3 - 1.0, y3, C.wood);
    put(S.solid, ax, u0, u1, v - 0.55, v + 0.55, y3 - 1.6, y3 - 1.0, C.teal);
  }
  for (const sx of [1, -1]) {
    put(S.solid, 'z', cz - 5.8, cz + 5.8, cx + sx * 5.2 - 0.5, cx + sx * 5.2 + 0.5, y3 - 1.0, y3, C.wood);
    put(S.solid, 'z', cz - 5.8, cz + 5.8, cx + sx * 5.2 - 0.55, cx + sx * 5.2 + 0.55, y3 - 1.6, y3 - 1.0, C.teal);
  }

  // 钟 / 鼓
  if (kind === 'bell') {
    S.solid.box(cx - 2.2, y2, cz - 0.35, 0.6, 4.4, 0.7, C.woodDk);
    S.solid.box(cx + 1.6, y2, cz - 0.35, 0.6, 4.4, 0.7, C.woodDk);
    S.solid.box(cx - 2.4, y2 + 4.4, cz - 0.5, 4.8, 0.6, 1.0, C.wood);
    S.solid.box(cx - 1.15, y2 + 0.9, cz - 1.15, 2.3, 2.4, 2.3, C.bronze);
    S.solid.box(cx - 0.85, y2 + 3.3, cz - 0.85, 1.7, 0.9, 1.7, C.bronzeDk);
    S.solid.box(cx - 0.28, y2 + 4.2, cz - 0.28, 0.56, 0.7, 0.56, C.bronzeDk);
    S.solid.box(cx - 1.3, y2 + 0.4, cz - 1.3, 2.6, 0.5, 2.6, C.bronzeDk);
  } else {
    for (const sx of [1, -1]) {
      S.solid.box(cx + sx * 2.3 - 0.3, y2, cz - 0.3, 0.6, 4.3, 0.6, C.woodDk);
    }
    S.solid.box(cx - 2.5, y2 + 4.3, cz - 0.5, 5.0, 0.55, 1.0, C.wood);
    S.solid.box(cx - 1.7, y2 + 1.1, cz - 1.35, 3.4, 2.5, 2.7, C.drum);
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 2; j++) {
        S.solid.box(cx - 1.3 + i * 1.1, y2 + 1.5 + j * 1.1, cz + 1.2, 0.3, 0.3, 0.3, C.gold);
        S.solid.box(cx - 1.3 + i * 1.1, y2 + 1.5 + j * 1.1, cz - 1.5, 0.3, 0.3, 0.3, C.gold);
      }
    }
    S.solid.box(cx - 1.9, y2 + 0.6, cz - 1.5, 3.8, 0.5, 3.0, C.woodDk);
  }

  roof(S, {
    cx, cz, y: y3, w: W + 1.2, d: W + 1.2, overhang: 3.0, rise: 6.2,
    style: 'pyramid', ridgeAxis: 'x',
    tile: C.tileGray, tileDk: C.tileGrayDk, ridgeC: C.ridgeGray, orn: C.goldHi,
    cornerLift: 2.3, c: 4.5, dots: true,
  });

  lantern(S, { x: cx - 3.6, y: y3 - 1.6, z: cz + 5.4, s: 0.9, cord: 0.9 });
  lantern(S, { x: cx + 3.6, y: y3 - 1.6, z: cz + 5.4, s: 0.9, cord: 0.9 });
}

/** 宝塔：楼阁式五层 · 灰砖身 · 绿琉璃挑檐 · 相轮宝顶 */
export function pagoda(S, { cx, cz = -49, tiers = 5 }) {
  terrace(S, {
    cx, cz, w: 17, d: 17, h: 1.3,
    stairs: [{ axis: 'x', dir: 1, u: 0, w: 6, steps: 2, run: 1.3 }],
    rail: false,
  });

  let y = 1.3;
  const bodyH = 4.2, pitch = 6.4;
  for (let k = 0; k < tiers; k++) {
    const size = 10.8 - k * 1.25;
    const h = size / 2;
    S.solid.box(cx - h, y, cz - h, size, bodyH, size, C.pagoda);
    for (const sx of [1, -1]) {
      for (const sz of [1, -1]) {
        // 角柱半嵌半露，柱面不得与塔身外壁共面
        S.solid.box(cx + sx * h - 0.5, y, cz + sz * h - 0.5, 1.05, bodyH, 1.05, C.colRedDk);
      }
    }
    // 四面佛龛
    for (const [dx, dz, w, d] of [[0, h - 0.05, 2.6, 0.3], [0, -h - 0.25, 2.6, 0.3], [h - 0.05, 0, 0.3, 2.6], [-h - 0.25, 0, 0.3, 2.6]]) {
      S.solid.box(cx + dx - (w > d ? w / 2 : w / 2), y + 0.7, cz + dz - (d > w ? d / 2 : d / 2), w, 2.7, d, C.windowDark);
    }
    for (const [dx, dz, w, d] of [[0, h + 0.1, 1.2, 0.25], [0, -h - 0.3, 1.2, 0.25], [h + 0.1, 0, 0.25, 1.2], [-h - 0.3, 0, 0.25, 1.2]]) {
      S.glow.box(cx + dx - w / 2, y + 1.1, cz + dz - d / 2, w, 1.8, d, C.glow);
    }
    // 挑檐
    roof(S, {
      cx, cz, y: y + bodyH, w: size, d: size, overhang: 1.9, rise: pitch - bodyH,
      style: 'pyramid', ridgeAxis: 'x',
      tile: C.tileGreen, tileDk: C.tileGreenDk, ridgeC: C.ridgeGreen, orn: C.gold,
      cornerLift: 0.9, c: 3, trim: false, fin: false,
    });
    y += pitch;
  }

  // 刹顶
  const top = 10.8 - (tiers - 1) * 1.25;
  roof(S, {
    cx, cz, y, w: top, d: top, overhang: 1.6, rise: 3.2,
    style: 'pyramid', ridgeAxis: 'x',
    tile: C.tileGreen, tileDk: C.tileGreenDk, ridgeC: C.ridgeGreen, orn: C.goldHi,
    cornerLift: 0.8, c: 3, trim: false, fin: false,
  });
  const map = (a0, a1, b0, b1, y0, y1, col) => S.tile.box(cx + a0, y0, cz + b0, a1 - a0, y1 - y0, b1 - b0, col);
  finial(map, y + 3.0, C.goldHi, 1.35);
}

/** 香炉（主院中轴） */
export function incenseBurner(S, { x, z }) {
  S.solid.box(x - 1.6, 0, z - 1.6, 3.2, 0.5, 3.2, C.stoneDk);
  S.solid.box(x - 1.15, 0.5, z - 1.15, 2.3, 1.7, 2.3, C.bronze);
  S.solid.box(x - 1.45, 2.2, z - 1.45, 2.9, 0.45, 2.9, C.bronzeDk);
  S.solid.box(x - 0.75, 2.65, z - 0.75, 1.5, 0.8, 1.5, C.bronzeDk);
  S.solid.box(x - 0.22, 3.45, z - 0.22, 0.44, 0.7, 0.44, C.bronze);
  for (const sx of [1, -1]) {
    S.solid.box(x + sx * 1.25 - 0.22, 0, z - 0.22, 0.44, 1.0, 0.44, C.bronzeDk);
    S.solid.box(x - 0.22, 0, z + sx * 1.25 - 0.22, 0.44, 1.0, 0.44, C.bronzeDk);
  }
}

/* ==========================================================================
 * 建筑群总装（中轴对称）
 * ========================================================================== */

export function buildCompound(S, T, G) {
  const E = { solid: S, tile: T, glow: G };
  const W = mirrorCtx(E);

  // —— 院墙（南墙留山门豁口 x∈[-18,18]） ——
  wallRun(E, { axis: 'x', u0: -54, u1: 54, v: 62, gaps: [[-18, 18]] });
  wallRun(E, { axis: 'x', u0: -54, u1: 54, v: -62 });
  wallRun(E, { axis: 'z', u0: -62, u1: 62, v: 54 });
  wallRun(E, { axis: 'z', u0: -62, u1: 62, v: -54 });

  // —— 中轴建筑 ——
  mountainGate(E);
  sideGate(E);
  mainHall(E);
  rearHall(E);

  // —— 钟东鼓西 ——
  bellDrumTower(E, { cx: 31, cz: 47, kind: 'bell' });
  bellDrumTower(W, { cx: 31, cz: 47, kind: 'drum' });

  // —— 东西厢房（主院前） ——
  sideHall(E, { cx: 36, cz: 12, face: -1, dX: 12, dZ: 20, bays: 3, terraceH: 1.6, wallH: 8.6, rise: 5.4, hipRun: 4.2 });
  sideHall(W, { cx: 36, cz: 12, face: -1, dX: 12, dZ: 20, bays: 3, terraceH: 1.6, wallH: 8.6, rise: 5.4, hipRun: 4.2 });

  // —— 东西配殿（主殿两侧） ——
  sideHall(E, {
    cx: 35, cz: -14, face: -1, dX: 12, dZ: 22, bays: 5,
    tile: C.tileGreen, tileDk: C.tileGreenDk, ridgeC: C.ridgeGreen,
    terraceH: 2.0, wallH: 9.2, rise: 5.8, hipRun: 4.6, overhang: 2.8,
  });
  sideHall(W, {
    cx: 35, cz: -14, face: -1, dX: 12, dZ: 22, bays: 5,
    tile: C.tileGreen, tileDk: C.tileGreenDk, ridgeC: C.ridgeGreen,
    terraceH: 2.0, wallH: 9.2, rise: 5.8, hipRun: 4.6, overhang: 2.8,
  });

  // —— 双塔 ——
  pagoda(E, { cx: 36, cz: -49 });
  pagoda(W, { cx: 36, cz: -49 });

  // —— 小品 ——
  incenseBurner(E, { x: 0, z: 14 });
  for (const sz of [38, 14, -36]) {
    stoneLamp(E, { x: -8.8, z: sz });
    stoneLamp(E, { x: 8.8, z: sz });
  }

  // 树木（成对布置，保持对称）
  const pines = [[48, 44], [48, 30], [48, -2], [48, -30], [22, -50], [9, -36]];
  for (const [x, z] of pines) {
    pine(E, { x, z, h: 10.5, tone: 0 });
    pine(W, { x, z, h: 10.5, tone: 0 });
  }
  const pines2 = [[44, 16], [44, -16], [20, 40]];
  for (const [x, z] of pines2) {
    pine(E, { x, z, h: 8.6, tone: 1 });
    pine(W, { x, z, h: 8.6, tone: 1 });
  }
  for (const [x, z] of [[50, 8], [50, -42], [30, 26]]) {
    broadTree(E, { x, z, h: 9.5, tone: 0 });
    broadTree(W, { x, z, h: 9.5, tone: 0 });
  }
}
