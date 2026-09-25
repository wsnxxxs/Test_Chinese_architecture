/**
 * pavilion.js — 碑亭 / 角楼（SPEC §3，A3 负责）
 *
 * 契约假设：
 *  - buildPavilion(w, cfg, {kind})：座次一律取 cfg.cx / cfg.cz（成对建筑由调用方用
 *    ±cfg.ym 传 cx，本函数内部不加任何左右偏置）。若 cfg 未给 cx：kind='stele' 时
 *    按 o.side（'east'→+ym，否则 -ym）取位，'corner' 必须由调用方给 cx/cz。
 *  - 屋顶走 parts.roof(type:'zhuanjian')，台基走 parts.terrace，栏杆走 parts.railing。
 *  - 体素：碑亭 ≈1.6k／角楼 ≈1.1k（各含台基、柱网、攒尖顶、陈设）。
 */
import { P, L } from '../config.js';
import { roof, finial, terrace, stairs, balustrade, columns, dougongRow, beam, beamZ, railing, plaque, cullHidden } from './parts.js';
import { stele as steleProp } from './props.js';

/* --------------------------------------------------------- 共用小件 */

/** 方形屋面上的 4 条向心脊（攒尖顶之外的"十字脊"暗示，只出皮） */
function crossRidge(w, cx, cz, y, half, color) {
  for (let d = -half; d <= half; d++) {
    w.set(cx + d, y, cz, color, { jitter: 0 });
    w.set(cx, y, cz + d, color, { jitter: 0 });
  }
}

/**
 * 一圈 4 角柱 + 4 面明间柱。
 * 奇数截面（3×3）天然居中；偶数截面（2×2）无法关于整数柱位居中，
 * 这里让块体沿"远离亭心"的方向生长 → ±cx 两次调用严格镜像重合。
 */
function postRing(w, cx, cz, y0, y1, half, size, color) {
  const pts = [];
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) pts.push([cx + sx * half, cz + sz * half, sx, sz]);
  for (const s of [-1, 1]) pts.push([cx + s * half, cz, s, 0], [cx, cz + s * half, 0, s]);
  const odd = size % 2 === 1;
  const h = (size - 1) / 2;
  for (const [px, pz, ox, oz] of pts) {
    const ax = ox !== 0 ? ox : (cx >= 0 ? -1 : 1);
    const az = oz !== 0 ? oz : (cz >= 0 ? -1 : 1);
    const x0 = odd ? px - h : (ax > 0 ? px : px - size + 1);
    const z0 = odd ? pz - h : (az > 0 ? pz : pz - size + 1);
    w.fill(x0, y0, z0, x0 + size - 1, y1, z0 + size - 1, color);
  }
  return pts.map((p) => [p[0], p[1]]);
}

/* ================================================== 碑亭 / 角楼 */
/**
 * kind='stele' —— 碑亭：小方台基 + 四角柱（含平柱 8 根）+ 四角攒尖 + 内立石碑
 * kind='corner' —— 角楼：十字脊小楼（简化为台基 + 柱网 + 攒尖 + 宝顶 + 女墙）
 */
export function buildPavilion(w, cfg = L.stelePavilion, o = {}) {
  const kind = o.kind === 'corner' ? 'corner' : 'stele';
  const ym = Math.abs(cfg.ym !== undefined ? cfg.ym : (L.stelePavilion.ym || 40));
  /* 座次优先级：o.cx/o.cz（tools/count.mjs 与 composition.js 都用这两个传座次）→ cfg.cx/cz → ±ym。
   * 只看 cfg.cx 会让东西两座碑亭叠在同一处（东碑亭在画面里根本不存在）。 */
  const cx = (o.cx !== undefined ? o.cx : (cfg.cx !== undefined ? cfg.cx : (o.side === 'east' ? ym : -ym))) | 0;
  const cz = (o.cz !== undefined ? o.cz : (cfg.cz !== undefined ? cfg.cz : (L.stelePavilion.cz !== undefined ? L.stelePavilion.cz : 78))) | 0;
  const size = Math.max(9, (cfg.size || (kind === 'corner' ? 13 : 15)) | 0);

  const half = Math.floor(size / 2);              // 台基半宽
  const tH = kind === 'corner' ? 8 : 3;           // 台基高（角楼作城台，与围墙等高）
  const pHalf = Math.max(3, half - 3);            // 柱网半宽
  const colH = kind === 'corner' ? 7 : 12;        // 柱高
  const y0 = tH + 1;                              // 柱脚
  const colTop = y0 + colH;
  const roofH = kind === 'corner' ? 7 : 8;
  const roofBase = colTop + 3;

  /* ---- 1) 台基 + 台阶 + 栏杆 ----
   * 亭子四面开敞，台面（顶板）从任何视角都看得见 → **必须整层实铺**，
   * 不能像殿身台基那样用 inner 挖环带（否则亭心出现"看得穿的坑"）。 */
  terrace(w, { x0: cx - half, x1: cx + half, z0: cz - half, z1: cz + half,
    y0: 0, y1: tH, face: P.stone, cap: P.marble, skirt: 1 });
  stairs(w, { dir: 'S', at: cz + half, x0: cx - 3, x1: cx + 3, y0: 0, y1: tH,
    color: P.marble, boolu: false });
  balustrade(w, { x0: cx - half, x1: cx + half, z0: cz - half, z1: cz + half,
    y: tH, color: P.marble, postStep: 7, gapBoxes: [[cx - 4, cx + 4]] });

  /* ---- 2) 柱网 ---- */
  let postPts = [];
  if (kind === 'stele') {
    columns(w, { x0: cx - pHalf, x1: cx + pHalf, z0: cz - pHalf, z1: cz + pHalf,
      y0: y0, h: colH, step: pHalf * 2, size: 3, color: P.vermilion, entasis: true });
  } else {
    // 角楼：8 根 2×2 檐柱 + 一圈女墙（城台感）
    postPts = postRing(w, cx, cz, y0, colTop, pHalf, 2, P.vermilion);
    for (let d = -half + 1; d <= half - 1; d++) {
      w.set(cx + d, tH + 1, cz - half, P.wallBase);
      w.set(cx + d, tH + 1, cz + half, P.wallBase);
      w.set(cx - half, tH + 1, cz + d, P.wallBase);
      w.set(cx + half, tH + 1, cz + d, P.wallBase);
    }
  }

  /* ---- 3) 额枋 + 檐下斗拱（角楼只做简单坐斗，省体素） ---- */
  beam(w, { x0: cx - pHalf, x1: cx + pHalf, y: colTop - 1, z: cz + pHalf, size: 2, color: P.beamGreen, paint: false });
  beam(w, { x0: cx - pHalf, x1: cx + pHalf, y: colTop - 1, z: cz - pHalf, size: 2, color: P.beamGreen, paint: false });
  beamZ(w, { z0: cz - pHalf, z1: cz + pHalf, y: colTop - 1, x: cx + pHalf, size: 2, color: P.beamGreen, paint: false });
  beamZ(w, { z0: cz - pHalf, z1: cz + pHalf, y: colTop - 1, x: cx - pHalf, size: 2, color: P.beamGreen, paint: false });
  if (kind === 'stele') {
    dougongRow(w, { dir: 'S', at: cz + pHalf, x0: cx - pHalf, x1: cx + pHalf, y: colTop + 1, step: 8, tiers: 1, color: P.beamGreen });
    dougongRow(w, { dir: 'N', at: cz - pHalf, x0: cx - pHalf, x1: cx + pHalf, y: colTop + 1, step: 8, tiers: 1, color: P.beamGreen });
    dougongRow(w, { dir: 'E', at: cx + pHalf, z0: cz - pHalf, z1: cz + pHalf, y: colTop + 1, step: 8, tiers: 1, color: P.beamGreen });
    dougongRow(w, { dir: 'W', at: cx - pHalf, z0: cz - pHalf, z1: cz + pHalf, y: colTop + 1, step: 8, tiers: 1, color: P.beamGreen });
  } else {
    for (const [px, pz] of postPts) {
      const sx = px === cx ? 0 : Math.sign(px - cx), sz = pz === cz ? 0 : Math.sign(pz - cz);
      w.set(px, colTop, pz, P.beamGreen);                       // 坐斗
      w.set(px - sx, colTop, pz - sz, P.gold);                  // 斗耳
      w.set(px - sx, colTop + 1, pz - sz, P.beamBlue);          // 单层拱
    }
  }

  /* ---- 4) 坐凳栏杆（碑亭四面留南口；角楼三面） ---- */
  const ry = kind === 'corner' ? tH + 1 : y0;
  railing(w, { dir: 'N', at: cz - pHalf, x0: cx - pHalf, x1: cx + pHalf, z0: cz - pHalf, z1: cz + pHalf, y: ry, color: P.wood });
  railing(w, { dir: 'E', at: cx + pHalf, x0: cx - pHalf, x1: cx + pHalf, z0: cz - pHalf, z1: cz + pHalf, y: ry, color: P.wood });
  railing(w, { dir: 'W', at: cx - pHalf, x0: cx - pHalf, x1: cx + pHalf, z0: cz - pHalf, z1: cz + pHalf, y: ry, color: P.wood });

  /* ---- 5) 顶：攒尖 + 宝顶（角楼另加十字脊暗示） ---- */
  const span = (half + 3) * 2;
  roof(w, { cx, cz, spanX: span, spanZ: span, baseY: roofBase, height: roofH,
    type: 'zhuanjian', tile: kind === 'corner' ? P.tileGray : P.glazedGreen,
    tileDark: kind === 'corner' ? P.tileGrayDark : P.glazedGreenDark,
    ridge: P.ridge, ridgeGold: P.ridgeGold, octagon: false, upturn: 3,
    tiles: true, chiHorn: true });
  finial(w, { cx, cz, y: roofBase + roofH - 2, h: 5, kind: 'baoding', color: P.gold });
  if (kind === 'corner') crossRidge(w, cx, cz, roofBase + roofH - 1, 2, P.ridgeGold);

  /* ---- 6) 亭内陈设 ---- */
  if (kind === 'stele') {
    // 碑亭：内立石碑（含赑屃座），碑面朝南；总高严格低于檐口，避免穿顶
    steleProp(w, { x: cx, z: cz - 1, y: y0, h: Math.max(9, Math.min(13, roofBase - y0 - 5)), dir: 'S' });
    plaque(w, { x: cx, z: cz + pHalf, y: colTop - 3, w: 5, h: 6, dir: 'S',
      bg: P.beamBlue, border: P.gold });
  } else {
    // 角楼：室内一具灯座（角楼夜灯），四角挂落
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
      w.set(cx + sx * (pHalf - 1), colTop, cz + sz * (pHalf - 1), P.gold, { jitter: 0 });
    }
    w.set(cx, y0 + 1, cz, P.lanternGlow, { glow: true, jitter: 0 });
    w.set(cx, y0 + 2, cz, P.lanternGlow, { glow: true, jitter: 0 });
  }
  cullHidden(w);
  return roofBase + roofH + 5;
}

export default { buildPavilion };
