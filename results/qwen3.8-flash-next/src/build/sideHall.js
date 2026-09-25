/**
 * sideHall.js —— 东西配殿（A2）。面阔沿 Z（cfg.along='z'），开门面向中轴：
 * side=-1（西配殿）门在东面（+X）；side=+1（东配殿）门在西面（-X）。
 * 单檐歇山 + 绿琉璃 + 台基 + 前台阶 + 四周栏杆 + 檐下斗拱 + 匾额。
 *
 * 屋顶 axis:'z' 时 parts.roof 内部绕 (cx,cz) 转置：局部 X（脊向）→ 世界 Z，
 * 所以 spanX = 沿脊（=世界 Z）外轮廓、spanZ = 世界 X 外轮廓。
 * 预算控制：墙/台基侧面 1 格厚，台基顶面用 inner 只画可见环带。
 */
import { L, P } from '../config.js';
import {
  ROOF_TYPE, terrace, stairs, balustrade, columns, beam, beamZ, dougongRow,
  wallPanel, doorPanel, windowPanel, plaque, roof, cornice, cullHidden,
} from './parts.js';

export function buildSideHall(w, cfg = L.sideHall, opts = {}) {
  const side = opts.side === 1 ? 1 : -1;
  const cx = (opts.cx ?? cfg.cx ?? (side < 0 ? -(cfg.ym ?? 118) : (cfg.ym ?? 118))) | 0;
  const cz = (opts.cz ?? cfg.cz ?? 40) | 0;
  const alongZ = (opts.along || cfg.along || 'z') === 'z';   // 面阔沿 Z
  const faceW = cfg.faceW ?? 40;                             // 面阔
  const depth = cfg.depth ?? 25;                             // 进深
  const hf = faceW >> 1;                                     // 沿面阔半跨
  const hd = Math.max(4, (depth - 1) >> 1);                  // 沿进深半跨
  const yT = cfg.terraceH ?? 6;
  const colH = cfg.colH ?? 14;
  const tile = cfg.tile ?? P.glazedGreen;                    // 键名或数值
  const tileDark = (cfg.tile === 'glazedGreen' || tile === P.glazedGreen) ? P.glazedGreenDark : undefined;
  const fs2 = side < 0 ? 1 : -1;                             // 正面朝向（朝中轴）
  const frontDir = alongZ ? (fs2 > 0 ? 'E' : 'W') : (fs2 > 0 ? 'S' : 'N');
  const backDir = alongZ ? (fs2 > 0 ? 'W' : 'E') : (fs2 > 0 ? 'N' : 'S');
  const endDirs = alongZ ? ['N', 'S'] : ['W', 'E'];

  // 柱网 / 墙体包络
  const bx0 = alongZ ? cx - hd : cx - hf, bx1 = alongZ ? cx + hd : cx + hf;
  const bz0 = alongZ ? cz - hf : cz - hd, bz1 = alongZ ? cz + hf : cz + hd;
  const frontAt = alongZ ? cx + fs2 * hd : cz + fs2 * hd;
  const backAt = alongZ ? cx - fs2 * hd : cz - fs2 * hd;

  /* ---------------- 台基 + 栏杆 + 台阶 ---------------- */
  const tx = (alongZ ? hd : hf) + 2, tz = (alongZ ? hf : hd) + 2;
  terrace(w, {
    x0: cx - tx, x1: cx + tx, z0: cz - tz, z1: cz + tz, y0: 0, y1: yT, skirt: 1,
    inner: { x0: bx0, x1: bx1, z0: bz0, z1: bz1 },
  });
  // 台阶只在正面穿过栏杆：按朝向精确开缺口（其余三面栏板封闭）
  const railGaps = {};
  const gapRange = alongZ ? [cz - 6, cz + 6] : [cx - 6, cx + 6];
  if (frontDir === 'E') railGaps.gapBoxesE = [gapRange];
  else if (frontDir === 'W') railGaps.gapBoxesW = [gapRange];
  else if (frontDir === 'S') railGaps.gapBoxes = [gapRange];
  else railGaps.gapBoxesN = [gapRange];
  balustrade(w, {
    x0: cx - tx + 1, x1: cx + tx - 1, z0: cz - tz + 1, z1: cz + tz - 1, y: yT, postStep: 8,
    ...railGaps,
  });
  stairs(w, alongZ
    ? { dir: frontDir, at: frontAt + fs2, z0: cz - 7, z1: cz + 7, y0: 0, y1: yT, boolu: false }
    : { dir: frontDir, at: frontAt + fs2, x0: cx - 7, x1: cx + 7, y0: 0, y1: yT, boolu: false });

  /* ---------------- 柱网 + 额枋 + 斗拱 ---------------- */
  columns(w, {
    x0: bx0, x1: bx1, z0: bz0, z1: bz1, y0: yT, h: colH, size: 3, step: 9,
    xs: alongZ ? [bx0, cx, bx1] : [bx0, cx - 13, cx, cx + 13, bx1],
    zs: alongZ ? [bz0, cz - 13, cz, cz + 13, bz1] : [bz0, cz, bz1],
  });
  const colTop = yT + colH - 1;
  beam(w, { x0: bx0, x1: bx1, y: colTop + 1, z: bz1, size: 2 });
  beam(w, { x0: bx0, x1: bx1, y: colTop + 1, z: bz0, size: 2 });
  beamZ(w, { z0: bz0, z1: bz1, y: colTop + 1, x: bx0, size: 2 });
  beamZ(w, { z0: bz0, z1: bz1, y: colTop + 1, x: bx1, size: 2 });
  const dgY = colTop + 3, eaveY = dgY + 5;
  dougongRow(w, { dir: 'S', x0: bx0, x1: bx1, at: bz1, y: dgY, step: 10, tiers: 1 });
  dougongRow(w, { dir: 'N', x0: bx0, x1: bx1, at: bz0, y: dgY, step: 10, tiers: 1 });
  dougongRow(w, { dir: 'E', z0: bz0, z1: bz1, at: bx1, y: dgY, step: 9, tiers: 1 });
  dougongRow(w, { dir: 'W', z0: bz0, z1: bz1, at: bx0, y: dgY, step: 9, tiers: 1 });
  cornice(w, { x0: bx0 - 4, x1: bx1 + 4, z0: bz0 - 4, z1: bz1 + 4, y: eaveY - 2, out: 2 });

  /* ---------------- 墙 + 门 + 窗 ---------------- */
  const doorH = Math.min(colH - 2, 11);
  const opens = [-13, 0, 13];                                // 三门（明间 + 两次间）
  const holes = opens.map((d) => [d - 4, d + 4, yT, yT + doorH - 1]);
  const wallOpts = { y0: yT, y1: eaveY, thick: 1, x0: bx0, x1: bx1, z0: bz0, z1: bz1 };
  wallPanel(w, { ...wallOpts, dir: frontDir, at: frontAt, holes });
  wallPanel(w, { ...wallOpts, dir: backDir, at: backAt });
  wallPanel(w, { ...wallOpts, dir: endDirs[0], at: alongZ ? bz0 : bx0 });
  wallPanel(w, { ...wallOpts, dir: endDirs[1], at: alongZ ? bz1 : bx1 });
  for (const d of opens) {
    const run = alongZ ? cz + d : cx + d;
    doorPanel(w, {
      x: alongZ ? frontAt : run, z: alongZ ? run : frontAt,
      y0: yT, h: doorH, w: 7, style: d === 0 ? 'board' : 'lattice',
      dir: frontDir, glow: d !== 0, thick: 1,
    });
  }
  // 后檐两窗 + 山面一窗（alongZ 时后檐是 x=backAt 的一整面，窗沿 Z 排开）
  for (const s of [-1, 1]) {
    windowPanel(w, {
      x: alongZ ? backAt : cx + s * 10, z: alongZ ? cz + s * 10 : backAt,
      y0: yT + 4, h: 7, w: 7, style: 'lattice', dir: backDir,
    });
    windowPanel(w, {
      x: alongZ ? cx : cx + s * hd, z: alongZ ? cz + s * hf : cz,
      y0: yT + 4, h: 7, w: 7, style: 'flame', dir: s > 0 ? endDirs[1] : endDirs[0],
    });
  }
  plaque(w, {
    x: alongZ ? frontAt : cx, z: alongZ ? cz : frontAt,
    y: eaveY + 3, w: 13, h: 4, dir: frontDir, text: cfg.name || '配殿',
  });

  /* ---------------- 单檐歇山 ---------------- */
  roof(w, {
    cx, cz, axis: alongZ ? 'z' : 'x',
    spanX: faceW + 12, spanZ: depth + 12,
    baseY: eaveY, height: cfg.roofH ?? 14, type: ROOF_TYPE.XIESHAN,
    tile, tileDark, upturn: 2, beastN: 2,
  });
  cullHidden(w);
}

export default buildSideHall;
