/**
 * buildings.js — 单体建筑
 *   buildGate      山门（三门洞、庑殿顶）
 *   buildMainHall  主殿（重檐庑殿顶、月台、御路、廊柱）
 *   buildSideHall  东西配殿（歇山纵脊、面朝中轴）
 *   buildRearHall  后殿（歇山顶）
 */

import { C } from './palette.js';
import { SITE } from './layout.js';
import { roof, eaveCorners, mainRidge, dougong, skirt, mixHex } from './roof.js';
import { platform, steps, terrace, hallWalls, doorPanel, colonnade, paintFacade } from './parts.js';

/* =========================================================
   山门
   ========================================================= */

export function buildGate(b) {
  const g = SITE.gate;
  const platH = g.platH;
  const x0 = g.cx - g.hw, x1 = g.cx + g.hw - 1;
  const z0 = g.cz - g.hd, z1 = g.cz + g.hd - 1;

  // 台基与踏道
  platform(b, { cx: g.cx, cz: g.cz, hw: g.platHw, hd: g.platHd, h: platH });
  steps(b, { cx: g.cx, hw: 15, front: g.cz + g.platHd - 1, n: platH, royal: 8 });

  // 墙身
  const y0 = platH, y1 = platH + 12;           // 3 .. 15
  b.shell(x0, x1, y0, y1, z0, z1, C.wallRed, 2);
  b.ringY(x0, x1, z0, z1, y0, C.wallRedDark, 2);
  b.ringY(x0, x1, z0, z1, y1, C.wallRedDark, 1);

  // 三门洞：中间通行，两侧装板门
  const holes = [
    { u0: -4, u1: 3, top: 11, closed: false },
    { u0: -12, u1: -9, top: 9, closed: true },
    { u0: 7, u1: 10, top: 9, closed: true }
  ];
  for (const h of holes) {
    for (let x = h.u0; x <= h.u1; x++) {
      for (let y = y0; y <= h.top; y++) {
        if (y === h.top && (x === h.u0 || x === h.u1)) continue;  // 拱顶收进
        for (let z = z1 - 1; z <= z1; z++) b.del(x, y, z);
        for (let z = z0; z <= z0 + 1; z++) b.del(x, y, z);
      }
    }
    // 石券脸
    for (let y = y0; y <= h.top + 1; y++) {
      for (const z of [z0, z1]) {
        b.set(h.u0 - 1, y, z, C.stone);
        b.set(h.u1 + 1, y, z, C.stone);
      }
    }
    for (const z of [z0, z1]) b.lineX(h.u0 - 1, h.u1 + 1, h.top + 1, z, C.stone);
    if (h.closed) {
      for (const z of [z1 - 1, z1]) {
        doorPanel(b, { axis: 'z', at: z, u0: h.u0, u1: h.u1, y0, y1: h.top });
      }
      for (const z of [z0, z0 + 1]) {
        doorPanel(b, { axis: 'z', at: z, u0: h.u0, u1: h.u1, y0, y1: h.top });
      }
    }
  }

  // 匾额
  b.bx(-6, 5, 13, 14, z1, z1, C.tileGreen);
  b.bx(-5, 4, 13, 14, z1, z1, mixHex(C.tileGreen, 0x000000, 0.42));
  for (const px of [-4, -2, 1, 3]) b.set(px, 13, z1, C.ridgeGold);
  for (const px of [-3, 0, 2]) b.set(px, 14, z1, C.ridgeGold);

  // 檐下斗拱 + 庑殿顶
  dougong(b, { cx: g.cx, cz: g.cz, a: g.hw + 1, d: g.hd + 1, y: y1 + 1 });
  const oy = y1 + 2;
  const rw = g.hw + 5, rd = g.hd + 5;
  const r = roof(b, {
    cx: g.cx, cz: g.cz, hw: rw, hd: rd, y0: oy,
    ridgeAxis: 'x', tile: C.tileGold, shrinks: [2, 1]
  });
  eaveCorners(b, { cx: g.cx, cz: g.cz, a: rw, d: rd, y: oy, len: 3 });
  mainRidge(b, { cx: g.cx, cz: g.cz, y: r.ridgeY, a: r.a, d: r.d, ridgeAxis: 'x' });
  return { top: r.ridgeY + 3 };
}

/* =========================================================
   主殿：重檐庑殿顶 + 月台 + 御路
   ========================================================= */

export function buildMainHall(b) {
  const m = SITE.main, t = SITE.terrace;
  const z0 = m.cz - m.hd, z1 = m.cz + m.hd - 1;   // -22 .. -7

  /* --- 月台 --- */
  terrace(b, {
    cx: t.cx, cz: t.cz, hw: t.hw, hd: t.hd, h: t.h,
    gap: [-9, 8]
  });
  // 月台 → 庭院踏道
  steps(b, { cx: t.cx, hw: 14, front: t.cz + t.hd - 1, n: t.h, royal: 8 });
  // 月台 → 台基 一级
  b.bx(-13, 12, 0, t.h, 9, 9, C.stone);
  for (let x = -4; x <= 3; x++) b.set(x, t.h, 9, (x & 1) ? C.stoneLite : C.stoneDark);

  /* --- 台基 --- */
  platform(b, { cx: m.cx, cz: m.cz, hw: m.platHw, hd: m.platHd, h: m.platH });

  /* --- 墙身 --- */
  const y0 = m.platH, y1 = m.platH + 17;          // 5 .. 22
  hallWalls(b, {
    cx: m.cx, cz: m.cz, hw: m.hw, hd: m.hd, y0, y1, t: 2,
    front: 'z+', doorW: 4, doors: 3, doorY: 7, sideDoor: false
  });

  // 匾额
  b.bx(-7, 6, 14, 16, z1, z1, C.tileGreen);
  b.bx(-6, 5, 14, 16, z1, z1, mixHex(C.tileGreen, 0x000000, 0.42));
  for (const px of [-5, -3, -1, 2, 4]) b.set(px, 15, z1, C.ridgeGold);
  for (const px of [-4, -2, 3, 5]) b.set(px, 14, z1, C.ridgeGold);
  for (const px of [-4, 1, 4]) b.set(px, 16, z1, C.ridgeGold);

  /* --- 廊柱 --- */
  colonnade(b, { axis: 'z', at: z1, from: -20, to: 19, y0, y1: y1 - 1, gap: 4, out: 1 });
  colonnade(b, { axis: 'x', at: m.cx - m.hw, from: z0 + 4, to: z1 - 4, y0, y1: y1 - 1, gap: 5, out: -1 });
  colonnade(b, { axis: 'x', at: m.cx + m.hw - 1, from: z0 + 4, to: z1 - 4, y0, y1: y1 - 1, gap: 5, out: 1 });

  /* --- 重檐：下檐 --- */
  dougong(b, { cx: m.cx, cz: m.cz, a: m.hw + 1, d: m.hd + 1, y: 18 });
  skirt(b, { cx: m.cx, cz: m.cz, hw: m.hw, hd: m.hd, y0: 19, layers: 3, out: 2, tile: C.tileGold });
  eaveCorners(b, { cx: m.cx, cz: m.cz, a: m.hw + 4, d: m.hd + 4, y: 19, len: 2 });

  /* --- 重檐：上檐（庑殿顶） --- */
  dougong(b, { cx: m.cx, cz: m.cz, a: m.hw + 1, d: m.hd + 1, y: 23 });
  const oy = 24;
  const rw = m.hw + 6, rd = m.hd + 6;             // 28 / 20
  const r = roof(b, {
    cx: m.cx, cz: m.cz, hw: rw, hd: rd, y0: oy,
    ridgeAxis: 'x', tile: C.tileGold, shrinks: [3, 2, 2, 1]
  });
  eaveCorners(b, { cx: m.cx, cz: m.cz, a: rw, d: rd, y: oy, len: 3 });
  mainRidge(b, { cx: m.cx, cz: m.cz, y: r.ridgeY, a: r.a, d: r.d, ridgeAxis: 'x' });
  return { top: r.ridgeY + 3 };
}

/* =========================================================
   东西配殿：歇山顶，纵脊，面朝中轴
   ========================================================= */

export function buildSideHall(b, side) {
  const s = SITE.side;
  const cx = s.cx * side;
  const z0 = s.cz - s.hd, z1 = s.cz + s.hd - 1;
  const x0 = cx - s.hw, x1 = cx + s.hw - 1;

  platform(b, { cx, cz: s.cz, hw: s.platHw, hd: s.platHd, h: 2 });
  // 踏道朝向中轴
  steps(b, { axis: 'x', dir: -side, cz: s.cz, hw: 8, front: side > 0 ? x0 : x1, n: 2, royal: 5 });

  const y0 = 2, y1 = 13;
  hallWalls(b, {
    cx, cz: s.cz, hw: s.hw, hd: s.hd, y0, y1, t: 1,
    front: side > 0 ? 'x-' : 'x+', doorW: 4, doors: 1, doorY: 6, sideDoor: false
  });

  // 朝向中轴一侧的廊柱
  colonnade(b, {
    axis: 'x', at: side > 0 ? x0 : x1, out: -side,
    from: z0 + 3, to: z1 - 3, y0, y1: y1 - 1, gap: 5
  });

  dougong(b, { cx, cz: s.cz, a: s.hw + 1, d: s.hd + 1, y: 14 });
  const oy = 15;
  const rw = s.hw + 4, rd = s.hd + 4;            // 12 / 20
  const r = roof(b, {
    cx, cz: s.cz, hw: rw, hd: rd, y0: oy,
    ridgeAxis: 'z', tile: C.tileGrey, shrinks: [2, 1], gableAt: 2,
    gableColor: C.wallWhite
  });
  eaveCorners(b, { cx, cz: s.cz, a: rw, d: rd, y: oy, len: 3 });
  mainRidge(b, { cx, cz: s.cz, y: r.ridgeY, a: r.a, d: r.d, ridgeAxis: 'z' });
  return { top: r.ridgeY + 3 };
}

/* =========================================================
   后殿：歇山顶
   ========================================================= */

export function buildRearHall(b) {
  const r0 = SITE.rear;
  const z0 = r0.cz - r0.hd, z1 = r0.cz + r0.hd - 1;

  platform(b, { cx: r0.cx, cz: r0.cz, hw: r0.platHw, hd: r0.platHd, h: 3 });
  steps(b, { cx: r0.cx, hw: 12, front: r0.cz + r0.platHd - 1, n: 3, royal: 6 });

  const y0 = 3, y1 = 14;
  hallWalls(b, {
    cx: r0.cx, cz: r0.cz, hw: r0.hw, hd: r0.hd, y0, y1, t: 2,
    front: 'z+', doorW: 4, doors: 1, doorY: 6, sideDoor: false
  });
  colonnade(b, { axis: 'z', at: z1, from: -14, to: 13, y0, y1: y1 - 1, gap: 4, out: 1 });

  dougong(b, { cx: r0.cx, cz: r0.cz, a: r0.hw + 1, d: r0.hd + 1, y: 15 });
  const oy = 16;
  const rw = r0.hw + 4, rd = r0.hd + 4;          // 21 / 13
  const r = roof(b, {
    cx: r0.cx, cz: r0.cz, hw: rw, hd: rd, y0: oy,
    ridgeAxis: 'x', tile: C.tileGrey, shrinks: [3, 2, 1], gableAt: 2,
    gableColor: C.wallWhite
  });
  eaveCorners(b, { cx: r0.cx, cz: r0.cz, a: rw, d: rd, y: oy, len: 3 });
  mainRidge(b, { cx: r0.cx, cz: r0.cz, y: r.ridgeY, a: r.a, d: r.d, ridgeAxis: 'x' });
  return { top: r.ridgeY + 3 };
}
