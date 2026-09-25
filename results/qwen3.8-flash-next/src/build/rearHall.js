/**
 * rearHall.js —— 后殿 / 藏经楼（A2）。两层楼阁：下层朱墙 + 明间板门 + 次间窗，
 * 上层带平座（挑台 + 栏杆）与格窗，歇山顶 + 脊饰；总高严格低于主殿。
 *
 * 约定见 parts.js 顶部。层高分区（L.rearHall.storyH 压缩到 13 以守预算）：
 *   台基 0..terraceH → 一层 storyH → 平座楼板 + 栏杆 → 二层 storyH → 额枋/斗拱 → 檐口 → 歇山
 * 平座只画"墙外的可见环带"，楼板 1 格厚，避免整层平面实心。
 */
import { L, P } from '../config.js';
import {
  ROOF_TYPE, terrace, stairs, balustrade, columns, beam, beamZ, dougongRow,
  wallPanel, doorPanel, windowPanel, plaque, roof, cornice, cullHidden,
} from './parts.js';

export function buildRearHall(w, cfg = L.rearHall) {
  const cx = (cfg.cx ?? 0) | 0, cz = (cfg.cz ?? -110) | 0;
  const hw = Math.abs((cfg.x1 ?? 42) - (cfg.x0 ?? -42)) >> 1;               // 半宽 42
  const hd = Math.abs((cfg.z1 ?? -94) - (cfg.z0 ?? -126)) >> 1;             // 半深 16
  const ZX0 = cx - hw, ZX1 = cx + hw, ZZ0 = cz - hd, ZZ1 = cz + hd;
  const yT = cfg.terraceH ?? 8;
  const st = Math.min(cfg.storyH ?? 15, 13);                                // 层高
  const y1 = yT + st;                                                       // 一层顶 = 平座面
  const tile = cfg.tile || P.glazedGreen;
  const tileDark = cfg.tileDark || P.glazedGreenDark;

  /* ---------------- 台基 + 栏杆 + 前后台阶 ---------------- */
  terrace(w, {
    x0: ZX0, x1: ZX1, z0: ZZ0, z1: ZZ1, y0: 0, y1: yT, skirt: 1,
    inner: { x0: ZX0 - 3, x1: ZX1 + 3, z0: ZZ0 - 3, z1: ZZ1 + 3 },
  });
  balustrade(w, {
    x0: ZX0 + 1, x1: ZX1 - 1, z0: ZZ0 + 1, z1: ZZ1 - 1, y: yT, postStep: 8,
    gapBoxes: [[cx - 8, cx + 8]],
  });
  stairs(w, { dir: 'S', at: ZZ1 + 1, x0: cx - 8, x1: cx + 8, y0: 0, y1: yT, boolu: false });
  stairs(w, { dir: 'N', at: ZZ0 - 1, x0: cx - 8, x1: cx + 8, y0: 0, y1: yT, boolu: false });

  /* ---------------- 一层：墙 + 门 + 窗 ---------------- */
  const doorH = Math.min(st - 2, 11);
  const holes = [[cx - 6, cx + 6, yT, yT + doorH - 1]];
  const W1 = { x0: ZX0, x1: ZX1, z0: ZZ0, z1: ZZ1, y0: yT, y1: y1 };
  wallPanel(w, { ...W1, dir: 'S', at: ZZ1, thick: 1, holes });
  wallPanel(w, { ...W1, dir: 'N', at: ZZ0, thick: 1 });
  wallPanel(w, { ...W1, dir: 'E', at: ZX1, thick: 1 });
  wallPanel(w, { ...W1, dir: 'W', at: ZX0, thick: 1 });
  for (const s of [-1, 1]) {
    doorPanel(w, { x: cx + s * 3, z: ZZ1, y0: yT, h: doorH, w: 6, style: 'board', dir: 'S', thick: 2 });
    windowPanel(w, { x: cx + s * 18, z: ZZ1, y0: yT + 4, h: 7, w: 8, style: 'lattice', dir: 'S', glow: true });
    windowPanel(w, { x: cx + s * 32, z: ZZ1, y0: yT + 4, h: 7, w: 6, style: 'plain', dir: 'S' });
    windowPanel(w, { x: cx + s * 20, z: ZZ0, y0: yT + 4, h: 7, w: 9, style: 'lattice', dir: 'N' });
    windowPanel(w, { x: ZX1, z: cz + s * 8, y0: yT + 4, h: 7, w: 6, style: 'lattice', dir: 'E' });
    windowPanel(w, { x: ZX0, z: cz + s * 8, y0: yT + 4, h: 7, w: 6, style: 'lattice', dir: 'W' });
  }

  /* ---------------- 平座（外挑环带楼板 + 挑撑 + 栏杆） ---------------- */
  const px0 = ZX0 - 3, px1 = ZX1 + 3, pz0 = ZZ0 - 3, pz1 = ZZ1 + 3;
  w.fill(px0, y1, pz0, px1, y1, ZZ0 - 1, P.marble);          // 北条带
  w.fill(px0, y1, ZZ1 + 1, px1, y1, pz1, P.marble);          // 南条带
  w.fill(px0, y1, ZZ0, ZX0 - 1, y1, ZZ1, P.marble);          // 西条带
  w.fill(ZX1 + 1, y1, ZZ0, px1, y1, ZZ1, P.marble);          // 东条带
  for (const s of [-1, 1]) {                                  // 挑撑（斗拱式牛腿，贴环带外沿）
    for (let x = ZX0 + 6; x <= ZX1 - 6; x += 12) {
      w.fill(x - 1, y1 - 2, cz + s * (hd + 2), x + 1, y1 - 1, cz + s * (hd + 2), P.wood);
    }
    for (let z = ZZ0 + 4; z <= ZZ1 - 4; z += 8) {
      w.fill(cx + s * (hw + 2), y1 - 2, z - 1, cx + s * (hw + 2), y1 - 1, z + 1, P.wood);
    }
  }
  beam(w, { x0: ZX0, x1: ZX1, y: y1 - 1, z: ZZ1, size: 2 });
  beam(w, { x0: ZX0, x1: ZX1, y: y1 - 1, z: ZZ0, size: 2 });
  beamZ(w, { z0: ZZ0, z1: ZZ1, y: y1 - 1, x: ZX0, size: 2 });
  beamZ(w, { z0: ZZ0, z1: ZZ1, y: y1 - 1, x: ZX1, size: 2 });
  balustrade(w, {
    x0: px0 + 1, x1: px1 - 1, z0: pz0 + 1, z1: pz1 - 1, y: y1 + 1, postStep: 9,
    gapBoxes: [[cx - 6, cx + 6]],
  });

  /* ---------------- 二层：柱 + 墙 + 格窗 + 匾 ---------------- */
  const sy = y1 + 1;                                          // 紧贴一层墙顶，避免平座处漏空缝
  const y2 = sy + st - 1;
  const xs2 = [ZX0, cx - 28, cx - 14, cx + 14, cx + 28, ZX1];
  columns(w, { x0: ZX0, x1: ZX1, z0: ZZ0, z1: ZZ1, y0: sy, h: st, size: 3, xs: xs2, zs: [ZZ0, ZZ1], entasis: false });
  const W2 = { x0: ZX0, x1: ZX1, z0: ZZ0, z1: ZZ1, y0: sy, y1: y2, thick: 1, baseH: 2 };
  wallPanel(w, { ...W2, dir: 'S', at: ZZ1 });
  wallPanel(w, { ...W2, dir: 'N', at: ZZ0 });
  wallPanel(w, { ...W2, dir: 'E', at: ZX1 });
  wallPanel(w, { ...W2, dir: 'W', at: ZX0 });
  for (const s of [-1, 1]) {
    for (const b of [11, 24, 35]) {
      const ww = b === 11 ? 7 : 6;
      windowPanel(w, { x: cx + s * b, z: ZZ1, y0: sy + 3, h: 7, w: ww, style: 'lattice', dir: 'S', glow: b === 11 });
      windowPanel(w, { x: cx + s * b, z: ZZ0, y0: sy + 3, h: 7, w: ww, style: 'lattice', dir: 'N' });
    }
    windowPanel(w, { x: ZX1, z: cz + s * 8, y0: sy + 3, h: 7, w: 6, style: 'flame', dir: 'E' });
    windowPanel(w, { x: ZX0, z: cz + s * 8, y0: sy + 3, h: 7, w: 6, style: 'flame', dir: 'W' });
  }
  plaque(w, { x: cx, z: ZZ1, y: y2 - 3, w: 16, h: 5, dir: 'S', text: cfg.name || '藏经楼' });

  /* ---------------- 檐部 + 歇山顶 ---------------- */
  beam(w, { x0: ZX0, x1: ZX1, y: y2 + 1, z: ZZ1, size: 2 });
  beam(w, { x0: ZX0, x1: ZX1, y: y2 + 1, z: ZZ0, size: 2 });
  beamZ(w, { z0: ZZ0, z1: ZZ1, y: y2 + 1, x: ZX0, size: 2 });
  beamZ(w, { z0: ZZ0, z1: ZZ1, y: y2 + 1, x: ZX1, size: 2 });
  const dgY = y2 + 3, eaveY = dgY + 5;
  dougongRow(w, { dir: 'S', x0: ZX0, x1: ZX1, at: ZZ1, y: dgY, step: 10, tiers: 1 });
  dougongRow(w, { dir: 'N', x0: ZX0, x1: ZX1, at: ZZ0, y: dgY, step: 10, tiers: 1 });
  dougongRow(w, { dir: 'E', z0: ZZ0, z1: ZZ1, at: ZX1, y: dgY, step: 8, tiers: 1 });
  dougongRow(w, { dir: 'W', z0: ZZ0, z1: ZZ1, at: ZX0, y: dgY, step: 8, tiers: 1 });
  cornice(w, { x0: ZX0 - 4, x1: ZX1 + 4, z0: ZZ0 - 4, z1: ZZ1 + 4, y: eaveY - 2, out: 2 });
  roof(w, {
    cx, cz, spanX: (ZX1 - ZX0) + 12, spanZ: (ZZ1 - ZZ0) + 12,
    baseY: eaveY, height: 15,
    type: ROOF_TYPE[(cfg.roofType || 'xieshan').toUpperCase()] || ROOF_TYPE.XIESHAN,
    tile, tileDark, upturn: 2, beastN: 2,
  });
  cullHidden(w);
}

export default buildRearHall;
