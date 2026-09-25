/**
 * perimeter.js — 外围墙 + 四角角楼 + 照壁（SPEC §3，A3 负责）
 *
 * 契约假设：
 *  - buildPerimeter(w) 不带 cfg，全部数据取 L.wall / L.wall.cornerPavilion。
 *  - 角楼按 §3 表格要求由本文件调 buildPavilion(w, {...cornerPavilion, cx, cz},
 *    {kind:'corner'})（两文件同属 A3，SPEC §3 明确要求这一调用）。
 *  - 预算说明：L.wall.thick=5、h=13，若真按 5 皮实心砌筑，仅围墙就要 8.8 万格，
 *    直接吃穿"全场景 ≤200000"。故墙身按 SPEC §0"墙一律壳而非实心"落成 1 皮墙面
 *    （0.35 m ≈ 实院墙厚度），下碱两皮改做同厚异色 + 每 ~40 格一根挑出 1 皮的墙间柱，
 *    墙顶仍保留出檐 2 的双面青瓦坡檐、墙下保留散水石。总用量 ≈18.5k。
 *  - 南侧按 L.wall.gap 断开给山门，断口两端做 1 段外撇短墙（八字）。
 */
import { L, P } from '../config.js';
import { roof, dougongRow, cullHidden } from './parts.js';
import { buildPavilion } from './pavilion.js';

/* ------------------------------------------------------------ 围墙 */

/** 矩形环（只出四皮，用于须弥座这类被上层压住的石座） */
function ringBox(w, cx, cz, y, hx, hz, color) {
  w.fill(cx - hx, y, cz - hz, cx + hx, y, cz - hz, color);
  w.fill(cx - hx, y, cz + hz, cx + hx, y, cz + hz, color);
  w.fill(cx - hx, y, cz - hz, cx - hx, y, cz + hz, color);
  w.fill(cx + hx, y, cz - hz, cx + hx, y, cz + hz, color);
}

/**
 * 一段直墙。axis = 墙法线所在轴：'z' → 墙面在 z=fixed、沿 x 走线；
 * 'x' → 墙面在 x=fixed、沿 z 走线。outSign = 朝院外的符号。
 */
function wallRun(w, o) {
  const { axis, fixed, p0, p1, outSign } = o;
  const H = o.yTop === undefined ? 8 : o.yTop;             // 墙身顶（不含帽）
  const cell = (p, k) => (axis === 'z' ? [p, fixed + outSign * k] : [fixed + outSign * k, p]);
  const put = (p, k, y, c, opt) => {
    const [x, z] = cell(p, k);
    w.set(x, y, z, c, opt);
  };
  const mid = (p0 + p1) / 2;

  for (let p = p0; p <= p1; p++) {
    // 墙身：1 皮；下碱两格用石色
    for (let y = 1; y <= H; y++) {
      put(p, 0, y, y <= 2 ? P.wallBase : P.wallRed);
    }
    // 墙顶双面青瓦坡（瘦身：一脊 + 两侧各 1 出檐；原 2 出檐的内侧第二层从不改变轮廓）
    put(p, 0, H + 2, P.capRidge, { jitter: 0 });
    put(p, 1, H + 1, P.tileGray);
    put(p, -1, H + 1, P.tileGray);
    // 散水石（外侧一皮）
    put(p, 1, 0, P.stoneDark, { jitter: 0 });
    // 墙间柱（按到中点距离取相位 → 镜像段完全重合）
    const dd = Math.abs(p - mid);
    if (dd > 4 && dd % 40 < 1) {
      for (let y = 1; y <= H + 1; y++) put(p, 1, y, y <= 2 ? P.stone : P.wallRedDark);
      put(p, 1, H + 2, P.marbleLine, { jitter: 0 });
    }
  }
  return p1 - p0 + 1;
}

export function buildPerimeter(w, cfg = L.wall) {
  const [xW, xE] = cfg.x || [-150, 150];
  const [zN, zS] = cfg.z || [-200, 180];
  const H = Math.max(6, ((cfg.h || 13) | 0) - 6);          // 墙身（其上 2 皮为瓦帽）
  const gap = cfg.gap || { side: 'south', x0: -36, x1: 36 };
  const cp = cfg.cornerPavilion || { inset: 14, size: 13, h: 20 };
  const gi0 = (gap.x0 !== undefined ? gap.x0 : -36) | 0;
  const gi1 = (gap.x1 !== undefined ? gap.x1 : 36) | 0;

  /* ---- 四面（南侧按 gap 断开） ---- */
  if (gap.side === 'south') {
    wallRun(w, { axis: 'z', fixed: zS, p0: xW, p1: gi0 - 1, outSign: 1, yTop: H });
    wallRun(w, { axis: 'z', fixed: zS, p0: gi1 + 1, p1: xE, outSign: 1, yTop: H });
    // 断口外撇短墙（八字）：各自朝"外"生成，保证 ±x 镜像重合
    wallRun(w, { axis: 'x', fixed: gi0 - 1, p0: zS, p1: zS + 5, outSign: -1, yTop: H });
    wallRun(w, { axis: 'x', fixed: gi1 + 1, p0: zS, p1: zS + 5, outSign: 1, yTop: H });
  } else {
    wallRun(w, { axis: 'z', fixed: zS, p0: xW, p1: xE, outSign: 1, yTop: H });
  }
  wallRun(w, { axis: 'z', fixed: zN, p0: xW, p1: xE, outSign: -1, yTop: H });
  wallRun(w, { axis: 'x', fixed: xE, p0: zN, p1: zS, outSign: 1, yTop: H });
  wallRun(w, { axis: 'x', fixed: xW, p0: zN, p1: zS, outSign: -1, yTop: H });

  /* ---- 四角角楼 ---- */
  const ins = (cp.inset || 14) | 0;
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      buildPavilion(w, { size: cp.size, h: cp.h, cx: sx * (Math.abs(xE) - ins), cz: sz > 0 ? zS - ins : zN + ins },
        { kind: 'corner' });
    }
  }
  cullHidden(w);
  return H + 2;
}

/* ------------------------------------------------------------ 照壁 */
/**
 * 抽象"福"字：用笔画集合生成（9×9 网格，row 0 在最下）。
 * 左"礻"+ 右"一 / 口 / 田"，只出凸起的琉璃黄笔画，底为壁心绿釉。
 */
function fuGlyph() {
  const set = new Set();
  const line = (x0, y0, x1, y1) => {
    for (let x = Math.min(x0, x1); x <= Math.max(x0, x1); x++) {
      for (let y = Math.min(y0, y1); y <= Math.max(y0, y1); y++) set.add(x + ',' + y);
    }
  };
  const box = (x0, y0, x1, y1) => { line(x0, y0, x1, y0); line(x0, y1, x1, y1); line(x0, y0, x0, y1); line(x1, y0, x1, y1); };
  line(1, 0, 1, 6); line(0, 6, 3, 6); line(0, 7, 0, 8); line(3, 4, 3, 3);   // 礻
  line(5, 8, 8, 8);                                                        // 一
  box(5, 5, 8, 7);                                                         // 口
  box(5, 0, 8, 4); line(6, 0, 6, 4); line(5, 2, 8, 2);                      // 田
  return [...set].map((s) => s.split(',').map(Number));
}
const FU = fuGlyph();

/**
 * 照壁：须弥座（上下枋 + 束腰）+ 壁身（边框 + 琉璃壁心 + 抽象"福"）
 *       + 庑殿壁顶（parts.roof 扁跨）+ 檐下垫枋/斗拱 + 两侧小柱 + 抱鼓石
 */
export function buildScreen(w, cfg = L.screen) {
  const cx = (cfg.cx || 0) | 0, cz = cfg.cz | 0;
  const halfW = Math.max(8, (cfg.halfW || 32) | 0);
  const H = Math.max(12, (cfg.h || 22) | 0);
  const th = 2;                                            // 壁身厚（2 皮）
  const dZ = 3;                                            // 须弥座半进深

  /* ---- 1) 须弥座：下枋 / 束腰 / 上枋（只出可见皮 + 顶面一整层实铺） ---- */
  w.fill(cx - halfW - 1, 0, cz - dZ - 1, cx + halfW + 1, 0, cz + dZ + 1, P.stoneDark);  // 底板
  ringBox(w, cx, cz, 1, halfW + 1, dZ + 1, P.stoneDark);                                 // 下枋
  ringBox(w, cx, cz, 2, halfW, dZ, P.stone);                                             // 束腰（收进）
  ringBox(w, cx, cz, 3, halfW + 1, dZ + 1, P.marbleLine);                                // 上枋
  w.fill(cx - halfW - 1, 4, cz - dZ - 1, cx + halfW + 1, 4, cz + dZ + 1, P.marbleLine);  // 上枋顶（壁身落脚）
  for (const s of [-1, 1]) {                                     // 束腰鼓镜 / 力神
    w.set(cx + s * 8, 2, cz + dZ + 1, P.marble, { jitter: 0 });
    w.set(cx + s * 8, 2, cz - dZ - 1, P.marble, { jitter: 0 });
  }

  /* ---- 2) 壁身（th=2 皮：两面装饰直接画在壁的内外皮上，不再向外多铺一层） ---- */
  const b0 = 5, b1 = H - 1;
  w.fill(cx - halfW, b0, cz - (th - 1), cx + halfW, b1, cz, P.wallRed);
  const frameIn = 4;
  const ox = cx - 4, oy = Math.round((b0 + b1) / 2) - 4;
  for (const face of [1, -1]) {
    const fz = face > 0 ? cz : cz - 1;                 // 壁身外表面所在皮
    for (let dx = -halfW; dx <= halfW; dx++) {
      for (let y = b0; y <= b1; y++) {
        if (Math.abs(dx) > halfW - frameIn || y <= b0 + 1 || y >= b1 - 1) {
          w.set(cx + dx, y, fz, P.beamBlue, { jitter: 1 });                  // 边框
        } else if (Math.abs(dx) === halfW - frameIn || y === b0 + 2 || y === b1 - 2) {
          w.set(cx + dx, y, fz, P.gold, { jitter: 0 });                      // 壁心金线
        } else {
          w.set(cx + dx, y, fz, P.glazedGreen, { jitter: 1 });               // 琉璃壁心
        }
      }
    }
    // "福"字凸出 1 皮（背面左右镜像 → 两面都正读）；先压阴影再立笔画
    const gz = face > 0 ? cz + 1 : cz - 2;
    const shadow = [];
    for (const [c, r] of FU) {
      const col = face > 0 ? c : 8 - c;
      shadow.push([ox + col, oy + r]);
      w.set(ox + col - 1, oy + r - 1, gz, P.glazedGreenDark, { jitter: 0 });
    }
    for (const [px, py] of shadow) w.set(px, py, gz, P.glazedYellow, { jitter: 0 });
    // 两侧海水纹（按 |dx| 生成 → 关于中轴严格对称）
    for (let dx = -(halfW - frameIn - 1); dx <= halfW - frameIn - 1; dx++) {
      if (Math.abs(dx) < 8) continue;
      const a = Math.abs(dx);
      const ph = (a >> 1) % 3;
      for (let k = 0; k < 2; k++) {
        const yy = oy + 2 + ph + k * 4;
        w.set(cx + dx, yy, fz, k ? P.marbleLine : P.glazedGreenDark, { jitter: 0 });
        if ((a % 5) === 0) w.set(cx + dx, yy + 1, fz, P.gold, { jitter: 0 });
      }
    }
  }

  /* ---- 3) 檐下：垫板枋 + 斗拱 ---- */
  for (const fz of [cz - 2, cz + 1]) {
    for (let dx = -halfW - 1; dx <= halfW + 1; dx++) {
      w.set(cx + dx, b1 + 1, fz, P.beamGreen, { jitter: 0 });
      if ((dx & 7) === 0) w.set(cx + dx, b1 + 2, fz, P.gold, { jitter: 0 });
    }
  }
  dougongRow(w, { dir: 'S', at: cz + 1, x0: cx - halfW, x1: cx + halfW, y: b1 + 2, step: 16, tiers: 1, color: P.beamGreen });
  dougongRow(w, { dir: 'N', at: cz - 1, x0: cx - halfW, x1: cx + halfW, y: b1 + 2, step: 16, tiers: 1, color: P.beamGreen });

  /* ---- 4) 庑殿壁顶（扁跨） ---- */
  const roofBase = b1 + 3;
  roof(w, { cx, cz, spanX: (halfW + 4) * 2, spanZ: (dZ + 5) * 2, baseY: roofBase,
    height: Math.max(6, Math.round(H * 0.34)), type: 'wudian',
    tile: P.tileGray, tileDark: P.tileGrayDark, ridge: P.capRidge, ridgeGold: P.ridgeGold,
    upturn: 2, ridgeLen: Math.round(halfW * 1.5), tiles: true, chiHorn: true });
  // 脊刹
  w.set(cx, roofBase + Math.max(6, Math.round(H * 0.34)) + 1, cz, P.goldBright, { jitter: 0 });

  /* ---- 5) 两侧小柱 + 抱鼓石 ---- */
  for (const s of [-1, 1]) {
    const px = cx + s * (halfW + 3);
    w.fill(px - 1, 0, cz - 2, px + 1, 1, cz + 2, P.stoneDark);
    for (let y = 2; y <= b1 + 4; y++) w.set(px, y, cz, y >= b1 + 3 ? P.vermilion : P.stone);   // 石柱身 1×1 + 柱头
    w.fill(px - 2, b1 + 5, cz - 2, px + 2, b1 + 6, cz + 2, P.marbleLine);    // 柱头板
    w.set(px, b1 + 7, cz, P.gold, { jitter: 0 });                            // 蹲兽（简化）
    // 抱鼓石
    w.fill(px - s * 3, 1, cz - 1, px - s * 3, 3, cz + 1, P.marble);
    w.set(px - s * 3, 4, cz, P.marbleLine, { jitter: 0 });
  }
  cullHidden(w);
  return roofBase + 8;
}

export default { buildPerimeter, buildScreen };
