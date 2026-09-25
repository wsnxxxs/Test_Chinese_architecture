/**
 * tianwang.js —— 天王殿（A2，第二进）。五开间：明间板门（大门）、两次间格窗、
 * 两梢间僧窗；单檐歇山 + 台基 + 前后台阶 + 檐下斗拱 + 匾额。
 *
 * 屋顶形制由 cfg.roofType（'xieshan'）决定；ridgeY 用来反推 roof 的 height，
 * 保证总高低于主殿、高于山门。其余约定见 parts.js 顶部。
 */
import { L, P } from '../config.js';
import {
  ROOF_TYPE, centerBox, terrace, stairs, balustrade, columns, beam, beamZ, dougongRow,
  wallPanel, doorPanel, windowPanel, plaque, roof, cornice, cullHidden,
} from './parts.js';

export function buildTianwang(w, cfg = L.tianwang) {
  const B = centerBox({ cx: 0, cz: 118, x0: -36, x1: 36, z0: 104, z1: 132, ...cfg });
  const { cx, cz, x0, x1, z0, z1 } = B;                   // L 里是绝对盒范围，统一按中轴重算
  const yT = cfg.terraceH ?? 6;
  const colH = cfg.colH ?? 16;
  const tile = cfg.tile || P.glazedGreen;
  const tileDark = cfg.tileDark || P.glazedGreenDark;
  const bays = [-36, -22, -7, 7, 22, 36];               // 六柱 = 五开间（严格镜像）

  /* ---------------- 台基 / 栏杆 / 前后台阶 ---------------- */
  terrace(w, {
    x0, x1, z0, z1, y0: 0, y1: yT, skirt: 2,
    inner: { x0: x0 + 2, x1: x1 - 2, z0: z0 + 2, z1: z1 - 2 },
  });
  balustrade(w, {
    x0: x0 + 1, x1: x1 - 1, z0: z0 + 1, z1: z1 - 1, y: yT, postStep: 8,
    gapBoxes: [[cx - 8, cx + 8]],
  });
  stairs(w, { dir: 'S', at: z1 + 1, x0: cx - 8, x1: cx + 8, y0: 0, y1: yT, boolu: false });
  stairs(w, { dir: 'N', at: z0 - 1, x0: cx - 8, x1: cx + 8, y0: 0, y1: yT, boolu: false });
  for (const [ax, az] of [[x0 + 1, z0 + 1], [x1 - 1, z0 + 1], [x0 + 1, z1 - 1], [x1 - 1, z1 - 1]]) {
    w.fill(ax - 1, yT, az - 1, ax + 1, yT + 2, az + 1, P.marble);
    w.set(ax, yT + 3, az, P.gold);
  }

  /* ---------------- 柱网 / 额枋 / 斗拱 ---------------- */
  const xs = bays.map((b) => cx + b);
  columns(w, { x0, x1, z0, z1, y0: yT, h: colH, size: 3, xs, zs: [z0, z1] });
  const colTop = yT + colH - 1;
  beam(w, { x0, x1, y: colTop + 1, z: z1, size: 3 });
  beam(w, { x0, x1, y: colTop + 1, z: z0, size: 3 });
  beamZ(w, { z0, z1, y: colTop + 1, x: x0, size: 3 });
  beamZ(w, { z0, z1, y: colTop + 1, x: x1, size: 3 });
  const dgY = colTop + 4, eaveY = dgY + 5;
  dougongRow(w, { dir: 'S', x0, x1, at: z1, y: dgY, xs: [...xs, cx], step: 9, tiers: 1 });
  dougongRow(w, { dir: 'N', x0, x1, at: z0, y: dgY, step: 9, tiers: 1 });
  dougongRow(w, { dir: 'E', z0, z1, at: x1, y: dgY, step: 8, tiers: 1 });
  dougongRow(w, { dir: 'W', z0, z1, at: x0, y: dgY, step: 8, tiers: 1 });
  cornice(w, { x0: x0 - 4, x1: x1 + 4, z0: z0 - 4, z1: z1 + 4, y: eaveY - 2, out: 2 });

  /* ---------------- 墙体：明间大门、次间格窗、梢间僧窗 ---------------- */
  const doorH = Math.min(colH - 2, 13);
  const holes = [[cx - 7, cx + 7, yT, yT + doorH - 1]];
  // 内侧面被门窗/梁架遮住，按"只画可见皮"取 1 格厚（预算优先，SPEC 的 2–3 厚留给山门券洞）
  wallPanel(w, { dir: 'S', at: z1, x0, x1, z0, z1, y0: yT, y1: eaveY, thick: 1, holes });
  wallPanel(w, { dir: 'N', at: z0, x0, x1, z0, z1, y0: yT, y1: eaveY, thick: 1 });
  wallPanel(w, { dir: 'E', at: x1, x0, x1, z0, z1, y0: yT, y1: eaveY, thick: 1 });
  wallPanel(w, { dir: 'W', at: x0, x0, x1, z0, z1, y0: yT, y1: eaveY, thick: 1 });
  // 明间板门（双扇 + 门钉）
  for (const s of [-1, 1]) {
    doorPanel(w, { x: cx + s * 3, z: z1, y0: yT, h: doorH, w: 6, style: 'board', dir: 'S', thick: 2 });
  }
  // 次间格窗
  for (const s of [-1, 1]) {
    windowPanel(w, { x: cx + s * 15, z: z1, y0: yT + 4, h: 8, w: 9, style: 'lattice', dir: 'S', glow: true });
  }
  // 梢间僧窗（小方窗）
  for (const s of [-1, 1]) {
    windowPanel(w, { x: cx + s * 29, z: z1, y0: yT + 6, h: 5, w: 5, style: 'plain', dir: 'S' });
  }
  // 背面：供奉面开格窗 + 匾
  for (const s of [-1, 1]) {
    windowPanel(w, { x: cx + s * 16, z: z0, y0: yT + 4, h: 9, w: 11, style: 'lattice', dir: 'N' });
  }
  for (const s of [-1, 1]) {
    windowPanel(w, { x: x1, z: cz + s * 7, y0: yT + 5, h: 7, w: 5, style: 'flame', dir: 'E' });
    windowPanel(w, { x: x0, z: cz + s * 7, y0: yT + 5, h: 7, w: 5, style: 'flame', dir: 'W' });
  }
  plaque(w, { x: cx, z: z1, y: eaveY + 4, w: 16, h: 5, dir: 'S', text: cfg.name || '天王殿' });
  plaque(w, { x: cx, z: z0, y: eaveY + 4, w: 16, h: 5, dir: 'N', text: '慈云广被' });

  /* ---------------- 单檐歇山 ---------------- */
  const ridgeY = cfg.ridgeY ?? 44;
  roof(w, {
    cx, cz, spanX: (x1 - x0) + 12, spanZ: (z1 - z0) + 10,
    baseY: eaveY, height: Math.max(10, ridgeY - eaveY),
    type: ROOF_TYPE[(cfg.roofType || 'xieshan').toUpperCase()] || ROOF_TYPE.XIESHAN,
    tile, tileDark, upturn: 2, beastN: 2,
  });
  cullHidden(w);
}

export default buildTianwang;
