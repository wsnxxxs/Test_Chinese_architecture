/**
 * towers.js — 钟楼 / 鼓楼 / 宝塔
 */

import { C } from './palette.js';
import { SITE } from './layout.js';
import { pyramidRoof, skirt, eaveCorners, dougong, mixHex } from './roof.js';
import { platform, steps, hallWalls, doorPanel, windowPanel, colonnade } from './parts.js';
import { hangLantern } from './props.js';

/* =========================================================
   钟楼 / 鼓楼：二层楼阁 + 攒尖顶
   ========================================================= */

export function buildTower(b, side, kind = 'bell') {
  const T = SITE.tower;
  const cx = T.cx * side;
  const cz = T.cz;
  const inner = side > 0 ? 'x-' : 'x+';
  const tile = C.tileGrey;

  /* 台基 + 踏道（朝中轴） */
  platform(b, { cx, cz, hw: 10, hd: 10, h: 2 });
  steps(b, {
    axis: 'x', dir: -side, cz, hw: 6,
    front: side > 0 ? cx - 10 : cx + 9, n: 2, royal: 4
  });

  /* 一层 */
  hallWalls(b, {
    cx, cz, hw: 7, hd: 7, y0: 2, y1: 11, t: 1,
    front: inner, doorW: 3, doors: 1, doorY: 5, sideDoor: true, win: false
  });
  // 一层柱
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      b.lineY(2, 11, cx + sx * 7, cz + sz * 7, C.woodRed);
    }
  }

  /* 腰檐 */
  const skirtHw = 7;
  skirt(b, { cx, cz, hw: skirtHw, hd: skirtHw, y0: 12, layers: 3, out: 1, tile });
  eaveCorners(b, { cx, cz, a: skirtHw + 3, d: skirtHw + 3, y: 12, len: 2 });

  /* 二层 */
  hallWalls(b, {
    cx, cz, hw: 5, hd: 5, y0: 15, y1: 22, t: 1,
    front: inner, doorW: 3, doors: 1, doorY: 4, sideDoor: true
  });
  colonnade(b, { axis: 'x', at: side > 0 ? cx - 5 : cx + 4, out: -side, from: cz - 4, to: cz + 3, y0: 15, y1: 21, gap: 3 });

  /* 攒尖顶 */
  dougong(b, { cx, cz, a: 6, d: 6, y: 23 });
  const oy = 24;
  const r = pyramidRoof(b, { cx, cz, hw: 8, y0: oy, tile, spike: 3, shrinks: [2, 1] });
  eaveCorners(b, { cx, cz, a: 8, d: 8, y: oy, len: 2, color: C.tileGrey });

  /* 腰檐四角挂灯 */
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      hangLantern(b, { x: cx + sx * 10, y: 12, z: cz + sz * 10, cord: 1 });
    }
  }

  // 钟 / 鼓（透过门洞可见）
  const drumC = kind === 'bell' ? C.bronze : C.wallRed;
  b.bx(cx - 2, cx + 1, 4, 6, cz - 2, cz + 1, drumC);
  b.set(cx - 2, 7, cz - 2, C.woodDark);
  b.set(cx + 1, 7, cz + 1, C.woodDark);

  return { top: r.ridgeY + 2 };
}

/* =========================================================
   宝塔：五层密檐式，绿琉璃瓦
   ========================================================= */

export function buildPagoda(b) {
  const P = SITE.pagoda;
  const cx = P.cx, cz = P.cz;
  const tile = C.tileGreen;
  const tiers = 5;

  /* 基座 */
  platform(b, { cx, cz, hw: 12, hd: 12, h: 3 });
  steps(b, { cx, hw: 7, front: cz + 11, n: 3, royal: 5 });
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      b.lineY(0, 2, cx + sx * 13, cz + sz * 13, C.stoneDark);
    }
  }

  let y = 3;
  for (let t = 0; t < tiers; t++) {
    const hw = 8 - t;
    const x0 = cx - hw, x1 = cx + hw - 1;
    const z0 = cz - hw, z1 = cz + hw - 1;

    /* 塔身 */
    b.shell(x0, x1, y, y + 3, z0, z1, C.wallRed, 1);
    b.ringY(x0, x1, z0, z1, y, C.wallRedDark, 1);
    b.ringY(x0, x1, z0, z1, y + 3, C.woodRed, 1);

    /* 四面门窗 */
    doorPanel(b, { axis: 'z', at: z1, u0: cx - 2, u1: cx + 1, y0: y, y1: y + 3, gold: t === 0 });
    windowPanel(b, { axis: 'z', at: z0, u0: cx - 2, u1: cx + 1, y0: y + 1, y1: y + 3 });
    windowPanel(b, { axis: 'x', at: x0, u0: cz - 2, u1: cz + 1, y0: y + 1, y1: y + 3 });
    windowPanel(b, { axis: 'x', at: x1, u0: cz - 2, u1: cz + 1, y0: y + 1, y1: y + 3 });

    /* 密檐 */
    skirt(b, { cx, cz, hw, hd: hw, y0: y + 4, layers: 2, out: 1, tile });
    eaveCorners(b, { cx, cz, a: hw + 2, d: hw + 2, y: y + 4, len: 2, color: mixHex(tile, C.tileGold, 0.35) });

    /* 檐角挂灯（隔层布置，避免过于喧闹） */
    if (t % 2 === 0) {
      for (const sx of [-1, 1]) {
        for (const sz of [-1, 1]) {
          hangLantern(b, { x: cx + sx * (hw + 2), y: y + 4, z: cz + sz * (hw + 2), cord: 1 });
        }
      }
    }
    y += 6;
  }

  /* 攒尖顶 + 宝顶 */
  const oy = y;
  const r = pyramidRoof(b, { cx, cz, hw: 7, y0: oy, tile, spike: 4, shrinks: [2, 1] });
  eaveCorners(b, { cx, cz, a: 7, d: 7, y: oy, len: 2, color: mixHex(tile, C.tileGold, 0.35) });

  return { top: r.ridgeY + 2 };
}
