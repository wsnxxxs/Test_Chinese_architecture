/**
 * 建筑组合：把构件库拼成 6 类单体建筑。
 *
 * 所有建筑都在「局部坐标」里定义（正面朝 +Z，中心在原点），
 * 通过 Pen 做 90° 步进的整数旋转，就能复用同一套代码生成东/西配殿。
 */
import { P } from '../core/palette.js';
import { vkey } from '../core/voxel.js';
import * as K from './parts.js';

/** 带 90° 步进旋转的画布代理（整数旋转，不产生错位） */
export class Pen {
  constructor(target, rot = 0) {
    this.t = target;
    this.rot = ((rot % 4) + 4) % 4;
  }

  _p(x, z) {
    switch (this.rot) {
      case 1: return [-z, x];
      case 2: return [-x, -z];
      case 3: return [z, -x];
      default: return [x, z];
    }
  }

  set(x, y, z, c) {
    const a = this._p(x | 0, z | 0);
    this.t.set(a[0], y | 0, a[1], c);
  }

  get(x, y, z) {
    const a = this._p(x | 0, z | 0);
    return this.t.get(a[0], y | 0, a[1]);
  }

  box(x0, y0, z0, x1, y1, z1, c) {
    const ax = Math.min(x0, x1), bx = Math.max(x0, x1);
    const ay = Math.min(y0, y1), by = Math.max(y0, y1);
    const az = Math.min(z0, z1), bz = Math.max(z0, z1);
    for (let x = ax; x <= bx; x++) {
      for (let y = ay; y <= by; y++) {
        for (let z = az; z <= bz; z++) this.set(x, y, z, c);
      }
    }
  }

  carve(x0, y0, z0, x1, y1, z1) {
    const ax = Math.min(x0, x1), bx = Math.max(x0, x1);
    const ay = Math.min(y0, y1), by = Math.max(y0, y1);
    const az = Math.min(z0, z1), bz = Math.max(z0, z1);
    for (let x = ax; x <= bx; x++) {
      for (let y = ay; y <= by; y++) {
        for (let z = az; z <= bz; z++) {
          const a = this._p(x, z);
          this.t.cells.delete(vkey(a[0], y, a[1]));
        }
      }
    }
  }

  pillar(x, z, y0, y1, c, oct = true) {
    for (let y = y0; y <= y1; y++) {
      this.set(x, y, z, c);
      if (oct) {
        this.set(x - 1, y, z, c);
        this.set(x + 1, y, z, c);
        this.set(x, y, z - 1, c);
        this.set(x, y, z + 1, c);
      } else {
        this.box(x - 1, y, z - 1, x + 1, y, z + 1, c);
      }
    }
  }

  toWorld(x, y, z) {
    const a = this._p(x, z);
    return [a[0], y, a[1]];
  }
}

/** 屋顶封装：生成后掏空平闇内部（省体素，内部本就被墙体与屋面遮住） */
function hipRoof(b, o) {
  const r = K.roofHip(b, o);
  if (o.carveCeiling !== false) {
    b.carve(-o.hw + 1, o.y - 1, -o.hd + 1, o.hw - 1, o.y - 1, o.hd - 1);
  }
  return r;
}

function pyramidRoof(b, o) {
  const tip = K.roofPyramid(b, o);
  b.carve(-o.hw + 1, o.y - 1, -o.hd + 1, o.hw - 1, o.y - 1, o.hd - 1);
  return tip;
}

// ======================================================================
//  主殿：重檐庑殿顶（黄琉璃）
// ======================================================================
export function mainHall(pen, b, g) {
  const lights = [];
  const hwBody = 31;
  const hdBody = 18;
  const top = K.stonePlatform(pen, {
    cx: 0, cz: 0, hw: 32, hd: 21, h: 7, steps: 5, stepHalf: 10, approach: true, rail: true,
  });
  pen.carve(-hwBody + 1, top - 1, -hdBody + 1, hwBody - 1, top - 1, hdBody - 1);

  const y0 = top;
  const y1 = top + 17;

  // 正面七间
  K.facadeX(pen, {
    x0: -31, x1: 31, z: hdBody, y0, y1,
    bays: [
      { type: 'door', width: 11, height: 12 },
      { type: 'window', width: 7 }, { type: 'window', width: 7 },
      { type: 'door', width: 11, height: 12 },
      { type: 'window', width: 7 }, { type: 'window', width: 7 },
      { type: 'door', width: 11, height: 12 },
    ],
  });
  K.backWall(pen, { x0: -31, x1: 31, z: -hdBody, y0, y1 });
  const sideBays = [
    { type: 'window', width: 8 }, { type: 'window', width: 8 },
    { type: 'window', width: 8 }, { type: 'window', width: 8 },
  ];
  K.facadeZ(pen, { z0: -16, z1: 16, x: -hwBody, y0, y1, bays: sideBays });
  K.facadeZ(pen, { z0: -16, z1: 16, x: hwBody, y0, y1, bays: sideBays });

  // 檐柱 + 副阶柱圈
  K.columnRowX(pen, { from: -30, to: 30, z: hdBody + 1, y0, h: 17, step: 6 });
  K.columnRowX(pen, { from: -36, to: 36, z: -25, y0, h: 17, step: 6 });
  K.columnRowX(pen, { from: -36, to: 36, z: 25, y0, h: 17, step: 6 });
  K.columnRowZ(pen, { from: -24, to: 24, x: -39, y0, h: 17, step: 6 });
  K.columnRowZ(pen, { from: -24, to: 24, x: 39, y0, h: 17, step: 6 });

  // 额枋
  pen.box(-31, y1 - 2, hdBody, 31, y1 - 1, hdBody + 1, P.woodRedDark);
  pen.box(-31, y1 - 2, -hdBody - 1, 31, y1 - 1, -hdBody, P.woodRedDark);

  // 下檐（副阶）
  const yMid = y1 + 1;
  for (const [axis, at, dir, from, to] of [
    ['x', 25, 1, -38, 38], ['x', -25, -1, -38, 38],
    ['z', 39, 1, -23, 23], ['z', -39, -1, -23, 23],
  ]) {
    K.dougong(pen, { axis, at, dir, y: yMid - 5, from, to, spacing: 6 });
  }
  hipRoof(pen, {
    cx: 0, cz: 0, hw: 41, hd: 28, y: yMid, rise: 8, slopeZ: 1.3, slopeX: 1.0,
    tile: P.glazeGold, tileLight: P.glazeGoldLight, tileDark: P.glazeGoldDark,
    flyingSteps: 4, ornament: P.gold,
  });

  // 重檐之间的墙
  const yBand = yMid + 8;
  K.ringBox(pen, -hwBody, yBand, -hdBody, hwBody, yBand + 5, hdBody, 2, P.wallRed);
  K.ringBox(pen, -hwBody, yBand, -hdBody, hwBody, yBand + 5, hdBody, 1, P.glazeGreenDark);

  // 上檐
  const yUp = yBand + 7;
  for (const [axis, at, dir, from, to] of [
    ['x', 19, 1, -30, 30], ['x', -19, -1, -30, 30],
    ['z', 32, 1, -17, 17], ['z', -32, -1, -17, 17],
  ]) {
    K.dougong(pen, { axis, at, dir, y: yUp - 5, from, to, spacing: 6 });
  }
  const r = hipRoof(pen, {
    cx: 0, cz: 0, hw: 36, hd: 23, y: yUp, rise: 16, slopeZ: 1.45, slopeX: 1.0,
    tile: P.glazeGold, tileLight: P.glazeGoldLight, tileDark: P.glazeGoldDark,
    flyingSteps: 5, ornament: P.gold,
  });

  K.plaque(pen, { x0: -17, x1: 17, y: y0 + 11, z: hdBody + 2, height: 5 });

  for (const lx of [-26, -14, 14, 26]) {
    K.lantern(pen, g, lx, yMid - 4, 27);
    lights.push(pen.toWorld(lx, yMid - 3, 27));
  }

  return { top: r.topY, lights, name: 'main-hall' };
}

// ======================================================================
//  配殿：歇山顶（青瓦），东西两翼共用
// ======================================================================
export function sideHall(pen, b, g, o = {}) {
  const s = o.scale ?? 1;
  const lights = [];
  const hwBody = Math.round(27 * s);
  const hdBody = Math.round(18 * s);
  const bodyH = Math.round(14 * s);
  const top = K.stonePlatform(pen, {
    cx: 0, cz: 0, hw: hwBody + 1, hd: hdBody + 1, h: Math.round(4 * s),
    steps: 3, stepHalf: Math.round(7 * s),
  });
  pen.carve(-hwBody + 1, top - 1, -hdBody + 1, hwBody - 1, top - 1, hdBody - 1);

  const y0 = top;
  const y1 = y0 + bodyH;
  const w = (n) => Math.max(2, Math.round(n * s));

  K.facadeX(pen, {
    x0: -hwBody, x1: hwBody, z: hdBody, y0, y1,
    bays: [
      { type: 'window', width: w(10) }, { type: 'window', width: w(10) },
      { type: 'door', width: w(14), height: Math.round(11 * s) },
      { type: 'window', width: w(10) }, { type: 'window', width: w(10) },
    ],
  });
  K.backWall(pen, { x0: -hwBody, x1: hwBody, z: -hdBody, y0, y1 });
  const sideBays = [
    { type: 'window', width: w(7) }, { type: 'window', width: w(7) },
    { type: 'window', width: w(7) }, { type: 'window', width: w(7) },
  ];
  K.facadeZ(pen, { z0: -w(14), z1: w(14), x: -hwBody, y0, y1, bays: sideBays });
  K.facadeZ(pen, { z0: -w(14), z1: w(14), x: hwBody, y0, y1, bays: sideBays });

  K.columnRowX(pen, { from: -hwBody + 2, to: hwBody - 2, z: hdBody + 1, y0, h: bodyH, step: w(7) });
  pen.box(-hwBody, y1 - 2, hdBody, hwBody, y1 - 1, hdBody + 1, P.woodRedDark);

  const yEave = y1 + 1;
  K.dougong(pen, { axis: 'x', at: hdBody + 2, dir: 1, y: yEave - 5, from: -hwBody, to: hwBody, spacing: w(7) });
  K.dougong(pen, { axis: 'x', at: -hdBody - 2, dir: -1, y: yEave - 5, from: -hwBody, to: hwBody, spacing: w(7) });
  const r = hipRoof(pen, {
    cx: 0, cz: 0, hw: hwBody + 5, hd: hdBody + 5, y: yEave,
    rise: Math.round(16 * s), gableAt: Math.round(9 * s), slopeZ: 1.45, slopeX: 1.0,
    tile: P.tile, tileLight: P.tileLight, tileDark: P.tileDark,
    gableColor: P.glazeGreen, ridgeColor: P.tileDeep, ornament: P.gold, flyingSteps: 4,
  });

  K.plaque(pen, {
    x0: -w(9), x1: w(9), y: y0 + Math.round(9 * s), z: hdBody + 2,
    height: Math.max(3, Math.round(4 * s)),
  });
  if (s > 0.8) {
    for (const lx of [-w(14), w(14)]) {
      K.lantern(pen, g, lx, yEave - 4, hdBody + 4);
      lights.push(pen.toWorld(lx, yEave - 3, hdBody + 4));
    }
  }

  return { top: r.topY, lights, name: 'side-hall' };
}

// ======================================================================
//  山门：重檐门楼 + 三间贯通门洞
// ======================================================================
export function mountainGate(pen, b, g) {
  const lights = [];
  const hw = 22;
  const hd = 7;
  const top = K.stonePlatform(pen, {
    cx: 0, cz: 0, hw, hd: hd + 1, h: 5, steps: 4, stepHalf: 12, approach: true,
  });
  pen.carve(-hw + 1, top - 1, -hd + 1, hw - 1, top - 1, hd - 1);

  const y0 = top;
  const y1 = y0 + 19;

  // 三间门洞（前后贯通）+ 门砧
  for (const [a, c] of [[-15, -6], [-4, 4], [6, 15]]) {
    K.archOpening(pen, { x0: a, x1: c, z0: -hd - 1, z1: hd + 1, y0, height: 11 });
    pen.box(a, y0, -hd, c, y0, hd, P.marbleShade);
    pen.set(a - 1, y0 + 1, hd, P.stoneLight);
    pen.set(c + 1, y0 + 1, hd, P.stoneLight);
    pen.set(a - 1, y0 + 1, -hd, P.stoneLight);
    pen.set(c + 1, y0 + 1, -hd, P.stoneLight);
  }
  const gateBays = [
    { type: 'solid', width: 7 }, { type: 'open', width: 10 }, { type: 'solid', width: 3 },
    { type: 'open', width: 9 }, { type: 'solid', width: 3 },
    { type: 'open', width: 10 }, { type: 'solid', width: 7 },
  ];
  K.facadeX(pen, { x0: -hw, x1: hw, z: hd, y0, y1, bays: gateBays });
  K.facadeX(pen, { x0: -hw, x1: hw, z: -hd, y0, y1, bays: gateBays });
  K.facadeZ(pen, { z0: -hd, z1: hd, x: -hw, y0, y1, bays: [{ type: 'solid', width: hd * 2 }] });
  K.facadeZ(pen, { z0: -hd, z1: hd, x: hw, y0, y1, bays: [{ type: 'solid', width: hd * 2 }] });

  for (const px of [-16, -5, 5, 16]) K.columnRowX(pen, { from: px, to: px, z: hd + 1, y0, h: 19, step: 1 });
  pen.box(-hw, y1 - 2, hd, hw, y1 - 1, hd + 1, P.woodRedDark);

  // 下檐
  const yMid = y1 + 1;
  K.dougong(pen, { axis: 'x', at: hd + 2, dir: 1, y: yMid - 5, from: -20, to: 20, spacing: 5 });
  K.dougong(pen, { axis: 'x', at: -hd - 2, dir: -1, y: yMid - 5, from: -20, to: 20, spacing: 5 });
  hipRoof(pen, {
    cx: 0, cz: 0, hw: 27, hd: 12, y: yMid, rise: 6, slopeZ: 1.3,
    tile: P.glazeGold, tileLight: P.glazeGoldLight, tileDark: P.glazeGoldDark, flyingSteps: 4,
  });

  // 门楼
  const y2 = yMid + 7;
  K.ringBox(pen, -12, y2, -5, 12, y2 + 7, 5, 2, P.wallRed);
  K.facadeX(pen, {
    x0: -12, x1: 12, z: 5, y0: y2, y1: y2 + 7,
    bays: [
      { type: 'window', width: 5 }, { type: 'door', width: 4, height: 5 },
      { type: 'window', width: 5 }, { type: 'window', width: 5 },
    ],
  });
  K.facadeZ(pen, { z0: -5, z1: 5, x: -12, y0: y2, y1: y2 + 7, bays: [{ type: 'window', width: 4 }, { type: 'window', width: 4 }] });
  K.facadeZ(pen, { z0: -5, z1: 5, x: 12, y0: y2, y1: y2 + 7, bays: [{ type: 'window', width: 4 }, { type: 'window', width: 4 }] });
  K.columnRowX(pen, { from: -11, to: 11, z: 6, y0: y2, h: 7, step: 5 });
  pen.box(-12, y2 + 7, 5, 12, y2 + 8, 5, P.woodRedDark);

  // 上檐
  const yUp = y2 + 9;
  K.dougong(pen, { axis: 'x', at: 6, dir: 1, y: yUp - 5, from: -11, to: 11, spacing: 5 });
  const r = hipRoof(pen, {
    cx: 0, cz: 0, hw: 16, hd: 9, y: yUp, rise: 9, gableAt: 5, slopeZ: 1.45,
    tile: P.glazeGold, tileLight: P.glazeGoldLight, tileDark: P.glazeGoldDark,
    gableColor: P.glazeGreen, flyingSteps: 4,
  });

  K.plaque(pen, { x0: -14, x1: 14, y: y0 + 13, z: hd + 2, height: 4 });
  for (const lx of [-19, -8, 8, 19]) {
    K.lantern(pen, g, lx, yMid - 4, hd + 4);
    lights.push(pen.toWorld(lx, yMid - 3, hd + 4));
  }

  return { top: r.topY, lights, name: 'mountain-gate' };
}

// ======================================================================
//  钟楼 / 鼓楼：二层攒尖顶
// ======================================================================
export function bellDrumTower(pen, b, g, o = {}) {
  const lights = [];
  const kind = o.kind ?? 'bell';
  const hw = 9;
  const hd = 9;
  const top = K.stonePlatform(pen, { cx: 0, cz: 0, hw, hd, h: 4, steps: 3, stepHalf: 6 });
  pen.carve(-hw + 1, top - 1, -hd + 1, hw - 1, top - 1, hd - 1);

  const y0 = top;
  const y1 = y0 + 11;
  K.facadeX(pen, {
    x0: -hw, x1: hw, z: hd, y0, y1,
    bays: [{ type: 'solid', width: 6 }, { type: 'door', width: 6, height: 8 }, { type: 'solid', width: 6 }],
  });
  K.backWall(pen, { x0: -hw, x1: hw, z: -hd, y0, y1 });
  K.facadeZ(pen, { z0: -hd, z1: hd, x: -hw, y0, y1, bays: [{ type: 'window', width: 8 }, { type: 'window', width: 8 }] });
  K.facadeZ(pen, { z0: -hd, z1: hd, x: hw, y0, y1, bays: [{ type: 'window', width: 8 }, { type: 'window', width: 8 }] });
  K.columnRowX(pen, { from: -8, to: 8, z: hd + 1, y0, h: 11, step: 8 });

  // 腰檐
  const yMid = y1 + 1;
  K.dougong(pen, { axis: 'x', at: hd + 1, dir: 1, y: yMid - 5, from: -8, to: 8, spacing: 8 });
  pyramidRoof(pen, { cx: 0, cz: 0, hw: 13, hd: 13, y: yMid, rise: 5, tile: P.tile, tileLight: P.tileLight, flyingSteps: 3 });

  // 二层：平坐 + 四面开敞（内见钟/鼓）
  const y2 = yMid + 7;
  K.ringBox(pen, -hw, y2, -hd, hw, y2, hd, 1, P.marble);
  for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
    K.columnBase(pen, sx * (hw - 1), sz * (hd - 1), y2, 3);
    pen.pillar(sx * (hw - 1), sz * (hd - 1), y2 + 1, y2 + 7, P.woodRed);
  }
  // 槛墙（半高）
  K.ringBox(pen, -hw, y2, -hd, hw, y2 + 2, hd, 1, P.wallRed);
  // 额枋
  pen.box(-hw, y2 + 7, -hd, hw, y2 + 7, hd, P.woodRedDark);

  if (kind === 'bell') {
    pen.box(-2, y2 + 1, -2, 2, y2 + 1, 2, P.woodDark);
    pen.box(-1, y2 + 2, -1, 1, y2 + 5, 1, P.bell);
    pen.box(-2, y2 + 2, 0, 2, y2 + 2, 0, P.woodBrown);
    pen.set(0, y2 + 6, 0, P.gold);
  } else {
    pen.box(-2, y2 + 1, -2, 2, y2 + 1, 2, P.woodDark);
    pen.box(-2, y2 + 2, -2, 2, y2 + 5, 2, P.drum);
    for (let k = -2; k <= 2; k++) {
      if (Math.abs(k) === 2) continue;
      pen.set(k, y2 + 6, 0, P.gold);
      pen.set(0, y2 + 6, k, P.gold);
    }
    pen.box(-3, y2 + 1, -3, 3, y2 + 1, 3, P.woodBrown);
  }

  // 顶檐
  const yUp = y2 + 8;
  for (const [axis, at, dir, from, to] of [
    ['x', hd, 1, -8, 8], ['x', -hd, -1, -8, 8],
    ['z', hw, 1, -8, 8], ['z', -hw, -1, -8, 8],
  ]) {
    K.dougong(pen, { axis, at, dir, y: yUp - 5, from, to, spacing: 8 });
  }
  const tip = pyramidRoof(pen, {
    cx: 0, cz: 0, hw: 13, hd: 13, y: yUp, rise: 11,
    tile: P.tile, tileLight: P.tileLight, flyingSteps: 3,
  });

  K.plaque(pen, { x0: -7, x1: 7, y: y2 + 7, z: hd + 1, height: 3 });
  K.lantern(pen, g, 0, yUp - 4, hd + 3);
  lights.push(pen.toWorld(0, yUp - 3, hd + 3));

  return { top: tip, lights, name: kind === 'bell' ? 'bell-tower' : 'drum-tower' };
}

// ======================================================================
//  楼阁式塔：七层，逐层收分，绿/黄琉璃相间
// ======================================================================
export function pagoda(b, g) {
  const lights = [];
  const top = K.stonePlatform(b, {
    cx: 0, cz: 0, hw: 16, hd: 16, h: 5, steps: 4, stepHalf: 8, approach: true,
  });
  b.carve(-11, top - 1, -11, 11, top - 1, 11);

  let y = top;
  const halves = [12, 11, 10, 9, 8, 7, 6];
  const last = halves.length - 1;

  for (let i = 0; i <= last; i++) {
    const hw = halves[i];
    const green = i % 2 === 1;
    const tile = green ? P.glazeGreen : P.glazeGold;
    const tileLight = green ? P.glazeGreenLight : P.glazeGoldLight;
    const tileDark = green ? P.glazeGreenDark : P.glazeGoldDark;
    const bodyH = 5;

    K.ringBox(b, -hw, y, -hw, hw, y + bodyH, hw, 2, P.wallRed);
    const doorBays = [];
    for (let k = -hw + 3; k <= hw - 4; k += 4) doorBays.push({ type: 'door', width: 3, height: 4 });
    K.facadeX(b, { x0: -hw, x1: hw, z: hw, y0: y, y1: y + bodyH, bays: doorBays });
    K.facadeX(b, { x0: -hw, x1: hw, z: -hw, y0: y, y1: y + bodyH, bays: doorBays });
    const winBays = [];
    for (let k = -hw + 3; k <= hw - 4; k += 4) winBays.push({ type: 'window', width: 3, height: 3, lift: 1 });
    K.facadeZ(b, { z0: -hw, z1: hw, x: hw, y0: y, y1: y + bodyH, bays: winBays });
    K.facadeZ(b, { z0: -hw, z1: hw, x: -hw, y0: y, y1: y + bodyH, bays: winBays });

    for (const [axis, at, dir] of [
      ['x', hw + 1, 1], ['x', -hw - 1, -1], ['z', hw + 1, 1], ['z', -hw - 1, -1],
    ]) {
      K.dougong(b, { axis, at, dir, y: y + bodyH - 4, from: -hw, to: hw, spacing: 4 });
    }

    // 挑檐 + 攒尖小顶
    const yE = y + bodyH + 1;
    b.box(-hw - 2, yE, -hw - 2, hw + 2, yE, hw + 2, tileDark);
    b.box(-hw - 2, yE - 1, -hw - 2, hw + 2, yE - 1, hw + 2, P.wallRedDark);
    pyramidRoof(b, {
      cx: 0, cz: 0, hw: hw + 3, hd: hw + 3, y: yE + 1, rise: 3,
      tile, tileLight, ridge: tileDark, flyingSteps: 3, finial: P.gold,
    });
    // 中间各层削掉宝顶尖（下一层直接从尖下长出）
    if (i < last) b.carve(-1, yE + 5, -1, 1, yE + 12, 1);

    // 檐角风铃
    for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
      b.set(sx * (hw + 3), yE - 2, sz * (hw + 3), P.gold);
      if (g) g.set(sx * (hw + 3), yE - 2, sz * (hw + 3), P.lantern);
    }

    if (i >= 2 && i % 2 === 0) {
      K.lantern(b, g, 0, yE - 3, hw + 4);
      K.lantern(b, g, 0, yE - 3, -hw - 4);
      lights.push(b.toWorld(0, yE - 2, hw + 4), b.toWorld(0, yE - 2, -hw - 4));
    }

    y = yE + 8;
  }

  // 塔刹
  let f = y;
  b.box(-2, f, -2, 2, f + 1, 2, P.goldDeep);
  b.box(-1, f + 2, -1, 1, f + 4, 1, P.gold);
  b.box(-2, f + 5, -2, 2, f + 5, 2, P.goldDeep);
  b.set(0, f + 6, 0, P.gold);
  b.set(0, f + 7, 0, P.goldDeep);
  b.set(0, f + 8, 0, P.gold);
  if (g) {
    g.set(0, f + 6, 0, P.lantern);
    g.set(0, f + 8, 0, P.lantern);
  }

  return { top: f + 8, lights, name: 'pagoda' };
}

// ======================================================================
//  廊：两侧开敞的连接廊道
// ======================================================================
export function corridor(pen) {
  const hw = 5;
  const hd = 26;
  const top = K.stonePlatform(pen, { cx: 0, cz: 0, hw, hd, h: 2, steps: 0 });
  const y0 = top;
  const y1 = y0 + 8;

  for (const z of [-hd + 1, hd - 1]) {
    K.columnRowX(pen, { from: -hw + 1, to: hw - 1, z, y0, h: y1 - y0, step: 4, color: P.woodRed });
    pen.box(-hw, y0, z - 1, hw, y0, z + 1, P.woodBrown);        // 坐凳
    pen.box(-hw, y0 + 3, z - 1, hw, y0 + 3, z + 1, P.woodRedDark); // 楣子
    pen.box(-hw, y0 + 1, z - 1, hw, y0 + 1, z + 1, P.lattice);   // 棂窗
  }
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      K.facadeZ(pen, {
        z0: sz > 0 ? hd - 1 : -hd, z1: sz > 0 ? hd : -hd + 1,
        x: sx * hw, y0, y1, bays: [{ type: 'solid', width: 1 }],
      });
    }
  }
  pen.box(-hw, y1 - 2, -hd, -hw, y1 - 1, hd, P.woodRedDark);
  pen.box(hw, y1 - 2, -hd, hw, y1 - 1, hd, P.woodRedDark);

  K.dougong(pen, { axis: 'x', at: hd - 1, dir: 1, y: y1 - 4, from: -hw, to: hw, spacing: 4 });
  K.dougong(pen, { axis: 'x', at: -hd + 1, dir: -1, y: y1 - 4, from: -hw, to: hw, spacing: 4 });
  return {
    top: K.roofGable(pen, {
      cx: 0, cz: 0, hw: hw + 2, hd, y: y1 + 1, rise: 8, slope: 1.4,
      tile: P.tile, tileLight: P.tileLight, ridge: P.tileDark,
    }),
    lights: [],
    name: 'corridor',
  };
}
