/**
 * towers.js — 钟楼 / 鼓楼 / 小院石塔（SPEC §3，A3 负责）
 *
 * 契约假设：
 *  - buildBellDrum(w, cfg = L.towers, {kind:'bell'|'drum'})：座次由 cfg.bell.cx / cfg.drum.cx
 *    决定；东西镜像严格由 cx 符号推出（外部台阶在背离中轴的一面、匾额朝向中轴），
 *    函数内部不加任何偏置。
 *  - 台基必须真穿空（四面券洞），所以用逐格判定写环壁而不是 fill 实心盒；
 *    VoxelWorld 没有"删除体素"的 API，所有洞口都在写入时跳过。
 *  - 横向圆筒（鼓身）用 cylX 局部小助手（VoxelWorld 只有 cylY），只出侧壁 + 两端面。
 *
 * 体素：单座钟/鼓楼 ≈4.2k（台基 2.7k + 亭 1.1k + 钟/鼓 0.15k + 灯笼 4×70），
 *       小石塔 ≈1.0k。
 */
import { P, L } from '../config.js';
import { roof, finial, stairs, columns, dougongRow, beam, beamZ, railing, plaque, cullHidden } from './parts.js';
import { lantern } from './props.js';

const SQ2 = Math.SQRT2;

/* ------------------------------------------------------------ 小工具 */

function inOct(dx, dz, a) {
  const ax = Math.abs(dx) + 0.5, az = Math.abs(dz) + 0.5;
  return ax <= a && az <= a && ax + az <= a * SQ2;
}

/** 该格归属的八角棱面（0=E,1=SE,…，偶数=四正、奇数=四斜）与切向坐标 t */
function faceOf(dx, dz) {
  const k8 = Math.round(Math.atan2(dz, dx) / (Math.PI / 4));
  const th = k8 * (Math.PI / 4);
  return { k: ((k8 % 8) + 8) % 8, t: Math.round(-dx * Math.sin(th) + dz * Math.cos(th)) };
}

/** 方形环（只出皮） */
function sqRing(w, cx, cz, y, half, color) {
  for (let d = -half; d <= half; d++) {
    w.set(cx + d, y, cz - half, color); w.set(cx + d, y, cz + half, color);
    w.set(cx - half, y, cz + d, color); w.set(cx + half, y, cz + d, color);
  }
}

/** 菱形环 */
function ringD(w, cx, cz, y, rr, color, opts) {
  for (let dx = -rr; dx <= rr; dx++) {
    const b = rr - Math.abs(dx);
    w.set(cx + dx, y, cz - b, color, opts);
    if (b !== 0) w.set(cx + dx, y, cz + b, color, opts);
  }
}

/** 横置圆筒（鼓身）：只出侧壁 + 两端面 */
function cylX(w, x0, x1, cy, cz, ry, rz, color, capColor) {
  for (let x = x0; x <= x1; x++) {
    const end = (x === x0 || x === x1);
    for (let a = -ry; a <= ry; a++) {
      for (let b = -rz; b <= rz; b++) {
        const e = Math.sqrt((a * a) / (ry * ry) + (b * b) / (rz * rz));
        if (e > 1.08) continue;
        if (!end && !(e > 0.86)) continue;
        w.set(x, cy + a, cz + b, end ? (capColor || color) : color);
      }
    }
  }
}

/* ==================================================== 钟楼 / 鼓楼 */
export function buildBellDrum(w, cfg = L.towers, o = {}) {
  const kind = o.kind === 'drum' ? 'drum' : 'bell';
  const cx = (kind === 'drum' ? (cfg.drum && cfg.drum.cx) || 64 : (cfg.bell && cfg.bell.cx) || -64) | 0;
  const cz = (cfg.cz || 146) | 0;
  const half = Math.max(8, (cfg.half || 14) | 0);
  const TH = Math.max(5, (cfg.terraceH || 8) | 0);
  const bodyH = Math.max(9, (cfg.bodyH || 15) | 0);
  const roofH = Math.max(8, (cfg.roofH || 15) | 0);
  const outSign = cx < 0 ? -1 : 1;        // 背离中轴的一侧
  const inSign = -outSign;                 // 朝向中轴的一侧
  const thick = 2;                         // 台基壁厚（券洞侧壁露 2 格厚度即可读出拱券）

  /* ---------- 1) 高台基 + 四面真券洞 ---------- */
  const inner = half - thick;              // 空心内界
  const archHalf = Math.max(3, Math.round(half * 0.3));
  const archSpring = Math.max(2, TH - 4);   // 直壁段高度（自 y=1 起）
  sqRing(w, cx, cz, 0, half + 1, P.stoneDark);           // 台脚 / 散水
  for (let y = 1; y <= TH - 1; y++) {
    const ly = y - 1;
    for (let dx = -half; dx <= half; dx++) {
      for (let dz = -half; dz <= half; dz++) {
        const adx = Math.abs(dx), adz = Math.abs(dz);
        if (Math.max(adx, adz) < inner) continue;         // 空心
        // 券洞：南北面沿 x 开口、东西面沿 z 开口
        let open = false;
        if (adz >= inner && adx <= archHalf) {
          open = ly <= archSpring ? true : adx <= archHalf - (ly - archSpring);
        } else if (adx >= inner && adz <= archHalf) {
          open = ly <= archSpring ? true : adz <= archHalf - (ly - archSpring);
        }
        if (open) {
          // 券脸：发券石（只在最外一皮画）
          if (Math.max(adx, adz) === half && ly === archSpring + 1) {
            w.set(cx + dx, y, cz + dz, P.marbleLine, { jitter: 0 });
          }
          continue;
        }
        const base = y <= 2;
        w.set(cx + dx, y, cz + dz, base ? P.wallBase : (ly > TH - 4 ? P.wallRed : P.stone));
      }
    }
  }
  // 台顶压顶石（一层）+ 上层皮（只出环带：中央空心部分的底面在密封台体内，看不见）
  w.fill(cx - half, TH, cz - half, cx + half, TH, cz + half, P.marble);
  for (let dx = -half; dx <= half; dx++) {
    for (let dz = -half; dz <= half; dz++) {
      if (Math.max(Math.abs(dx), Math.abs(dz)) < inner) continue;
      w.set(cx + dx, TH - 1, cz + dz, P.stoneDark, { jitter: 0 });
    }
  }
  // 台顶女墙（短，勾出轮廓 + 遮挡内部空洞）
  sqRing(w, cx, cz, TH + 1, half, P.stone);
  for (let d = -half; d <= half; d += 4) {
    w.set(cx + d, TH + 2, cz + half, P.marbleLine);
    w.set(cx + d, TH + 2, cz - half, P.marbleLine);
    w.set(cx + half, TH + 2, cz + d, P.marbleLine);
    w.set(cx - half, TH + 2, cz + d, P.marbleLine);
  }

  /* ---------- 2) 侧面台阶：外侧面一对对称直跑，中央券洞保持可见（parts.stairs 带垂带石） ---------- */
  const stairDir = outSign < 0 ? 'W' : 'E';
  const atX = cx + outSign * (half + 1);
  const sw = Math.max(3, archHalf + 2);
  for (const [s0, s1] of [[cz - sw - 3, cz - sw], [cz + sw, cz + sw + 3]]) {
    stairs(w, { dir: stairDir, at: atX, z0: s0, z1: s1, y0: 0, y1: TH, color: P.marble, boolu: false });
  }

  /* ---------- 3) 台上木亭 ---------- */
  const P0 = TH + 1;                        // 亭柱脚标高（坐在压顶石上）
  const pHalf = Math.max(6, half - 6);      // 柱网半宽
  const colTop = P0 + bodyH - 1;
  columns(w, {
    x0: cx - pHalf, x1: cx + pHalf, z0: cz - pHalf, z1: cz + pHalf,
    y0: P0, h: bodyH - 1, step: Math.max(pHalf * 2, 1), size: 3, color: P.vermilion, entasis: true,
  });
  // 额枋（四向一圈；paint:false 以保证左右镜像完全重合）
  beam(w, { x0: cx - pHalf, x1: cx + pHalf, y: colTop - 1, z: cz + pHalf, size: 2, color: P.beamGreen, paint: false });
  beam(w, { x0: cx - pHalf, x1: cx + pHalf, y: colTop - 1, z: cz - pHalf, size: 2, color: P.beamGreen, paint: false });
  beamZ(w, { z0: cz - pHalf, z1: cz + pHalf, y: colTop - 1, x: cx + pHalf, size: 2, color: P.beamGreen, paint: false });
  beamZ(w, { z0: cz - pHalf, z1: cz + pHalf, y: colTop - 1, x: cx - pHalf, size: 2, color: P.beamGreen, paint: false });
  // 坐凳栏杆：三面向内敞开，外侧面（有台阶）留空
  railing(w, { dir: 'S', at: cz + pHalf, x0: cx - pHalf, x1: cx + pHalf, z0: cz - pHalf, z1: cz + pHalf, y: P0, color: P.wood });
  railing(w, { dir: 'N', at: cz - pHalf, x0: cx - pHalf, x1: cx + pHalf, z0: cz - pHalf, z1: cz + pHalf, y: P0, color: P.wood });
  railing(w, { dir: inSign > 0 ? 'E' : 'W', at: cx + inSign * pHalf,
    x0: cx - pHalf, x1: cx + pHalf, z0: cz - pHalf, z1: cz + pHalf, y: P0, color: P.wood });
  // 檐下斗拱（一层出跳即可，省体素）
  const dy = colTop + 1;
  dougongRow(w, { dir: 'S', at: cz + pHalf, x0: cx - pHalf, x1: cx + pHalf, y: dy, step: 7, tiers: 1, color: P.beamGreen });
  dougongRow(w, { dir: 'N', at: cz - pHalf, x0: cx - pHalf, x1: cx + pHalf, y: dy, step: 7, tiers: 1, color: P.beamGreen });
  dougongRow(w, { dir: 'E', at: cx + pHalf, z0: cz - pHalf, z1: cz + pHalf, y: dy, step: 7, tiers: 1, color: P.beamGreen });
  dougongRow(w, { dir: 'W', at: cx - pHalf, z0: cz - pHalf, z1: cz + pHalf, y: dy, step: 7, tiers: 1, color: P.beamGreen });

  // 四角攒尖顶 + 宝顶
  const roofBase = dy + 3;
  const rH = Math.min(roofH, 12);
  const span = (pHalf + 5) * 2;
  roof(w, { cx, cz, spanX: span, spanZ: span, baseY: roofBase, height: rH,
    type: 'zhuanjian', tile: P.tileGray, tileDark: P.tileGrayDark, ridge: P.ridge,
    ridgeGold: P.ridgeGold, octagon: false, upturn: 3, tiles: true, chiHorn: true });
  finial(w, { cx, cz, y: roofBase + rH - 2, h: 6, kind: 'baoding', color: P.gold });

  /* ---------- 4) 亭内钟 / 鼓 ---------- */
  const floorY = P0;
  if (kind === 'bell') {
    // 悬钟：木架 + 下摆外侈钟体 + 蒲牢钮
    for (const s of [-1, 1]) {
      w.fill(cx + s * 4, floorY, cz - 1, cx + s * 4, floorY + 3, cz + 1, P.woodDark);
      w.set(cx + s * 4, floorY + 4, cz, P.woodDark);
    }
    w.fill(cx - 5, floorY + 4, cz - 1, cx + 5, floorY + 5, cz + 1, P.wood);
    const mouth = floorY + 7;
    for (let i = 0; i < 7; i++) {
      const rr = i < 2 ? 3 : (i < 5 ? 2 : 1);
      ringD(w, cx, cz, mouth + i, rr, i === 0 ? P.bronzeDark : P.bronze);
    }
    ringD(w, cx, cz, mouth, 2, P.ink, { jitter: 0 });     // 钟口（暗）
    w.set(cx, mouth + 7, cz, P.gold);                     // 蒲牢钮
    w.set(cx, mouth + 8, cz, P.goldBright);
    w.set(cx - 1, mouth + 8, cz, P.gold);
    w.set(cx + 1, mouth + 8, cz, P.gold);
    // 钟身文字带（暗色一圈）
    for (let dx = -3; dx <= 3; dx++) {
      const b = 3 - Math.abs(dx);
      for (const dz of [-b, b]) if (dz !== 0) w.set(cx + dx, mouth + 3, cz + dz, P.bronzeDark, { jitter: 0 });
    }
  } else {
    // 大鼓：横置红鼓身 + 金钉圈 + 鼓架
    const cy = floorY + 5;
    for (const s of [-1, 1]) {
      w.fill(cx + s * 4, floorY, cz - 2, cx + s * 4, floorY + 2, cz + 2, P.woodDark);
      w.fill(cx + s * 3, floorY + 2, cz - 2, cx + s * 3, floorY + 2, cz + 2, P.wood);
    }
    w.fill(cx - 4, floorY + 3, cz, cx + 4, floorY + 3, cz, P.woodDark);
    cylX(w, cx - 3, cx + 3, cy, cz, 3, 3, P.wallRed, P.wallRedDark);
    for (const s of [-1, 1]) {                            // 两端金鼓钉圈
      for (let a = -3; a <= 3; a++) {
        for (let b = -3; b <= 3; b++) {
          const e = Math.sqrt(a * a + b * b);
          if (e > 2.6 && e < 3.4) w.set(cx + s * 3, cy + a, cz + b, P.gold, { jitter: 0 });
        }
      }
      ringD(w, cx + s * 3, cz, cy, 1, P.goldBright, { jitter: 0 });
    }
    for (const d of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {  // 音窗
      w.set(cx + d[0] * 2, cy + 3, cz + d[1] * 2, P.woodDark);
    }
  }

  /* ---------- 5) 檐角灯笼 + 匾额 ---------- */
  const lampY = roofBase - 9;
  for (const sx of [-1, 1]) {                      // 檐角挂 lantern（4 只，攒尖四角下方）
    for (const sz of [-1, 1]) {
      lantern(w, { x: cx + sx * (pHalf + 3), y: lampY, z: cz + sz * (pHalf + 3), r: 2, h: 4, glow: true });
    }
  }
  // 匾额：南向（香道第一眼）+ 朝向中轴一面
  plaque(w, { x: cx, z: cz + pHalf, y: colTop - 4, w: 6, h: 7, dir: 'S',
    bg: P.beamBlue, border: P.gold, text: kind === 'bell' ? '钟楼' : '鼓楼' });
  plaque(w, { x: cx + inSign * pHalf, z: cz, y: colTop - 4, w: 6, h: 7,
    dir: inSign > 0 ? 'E' : 'W', bg: P.beamBlue, border: P.gold, text: cfg.name || '' });
  cullHidden(w);
  return roofBase + rH + 6;
}

/* ==================================================== 小院小石塔 */
/**
 * 5 层八角小石塔 / 经幢：石色为主，逐层交错龛门，顶部露盘 + 宝珠。
 * side：'east' → +cfg.ym，其余（'west'/缺省按 cx 符号）→ -cfg.ym。
 */
export function buildSmallPagoda(w, cfg = L.smallPagoda, o = {}) {
  const ym = Math.abs(cfg.ym || 116);
  let cx = o.cx !== undefined ? (o.cx | 0) : (o.side === 'east' ? ym : -ym);
  const cz = (cfg.cz !== undefined ? cfg.cz : -150) | 0;
  const H = cfg.h || 34;
  const tiers = 5;
  const baseA = 5.4;                                       // 首层内切半径
  const taper = (baseA - 2.6) / tiers;
  const bodyH = Math.max(3, Math.round((H - 6 - 3) / tiers) - 2);
  const capH = 2;

  // 须弥座 + 塔基
  w.fill(cx - 5, 0, cz - 5, cx + 5, 0, cz + 5, P.stoneDark);
  w.fill(cx - 4, 1, cz - 4, cx + 4, 2, cz + 4, P.stone);
  sqRing(w, cx, cz, 3, 4, P.marbleLine);
  // 龛座小门（南）
  w.fill(cx - 1, 1, cz + 4, cx + 1, 3, cz + 4, P.ink);

  let y = 4;
  for (let i = 0; i < tiers; i++) {
    const a = Math.max(2.4, baseA - taper * i);
    const H0 = i === tiers - 1 ? bodyH + 1 : bodyH;
    const R = Math.ceil(a);
    const lo = Math.max(1, Math.round(H0 * 0.3)), hi = H0 - 1;
    // 石身（1 格厚壳）+ 逐层交错的龛窗（偶层四正、奇层四斜）
    for (let lv = 0; lv <= H0; lv++) {
      for (let dx = -R; dx <= R; dx++) {
        for (let dz = -R; dz <= R; dz++) {
          if (!(inOct(dx, dz, a) && !inOct(dx, dz, a - 1))) continue;
          const { k, t } = faceOf(dx, dz);
          const want = (i % 2 === 0) ? (k % 2 === 0) : (k % 2 === 1);
          if (want && Math.abs(t) <= 1 && lv >= lo && lv <= hi) {
            w.set(cx + dx, y + lv, cz + dz, lv === lo ? P.marbleLine : P.ink, { jitter: 0 });
            continue;
          }
          w.set(cx + dx, y + lv, cz + dz, lv === 0 || lv === H0 ? P.marbleLine : P.stone);
        }
      }
    }
    y += H0;
    // 石檐（两层收分环）
    ringOct(w, cx, cz, y + 1, a + 1.6, a - 0.4, P.stoneDark);
    ringOct(w, cx, cz, y + capH, a + 0.8, a - 0.6, P.stone);
    y += capH + 1;
  }
  // 露盘 + 宝珠
  const R = 2.6;
  ringOct(w, cx, cz, y, R + 1.4, R - 1.2, P.marbleLine);
  w.cylY(cx, cz, y + 1, y + 2, 2, P.stone, { hollow: true });
  ringD(w, cx, cz, y + 3, 1, P.gold);
  w.set(cx, y + 4, cz, P.goldBright);
  w.set(cx, y + 5, cz, P.marbleLine);
  return y + 5;
}

/** 八角水平环（石塔檐用） */
function ringOct(w, cx, cz, y, aOut, aIn, color) {
  const R = Math.ceil(aOut);
  for (let dx = -R; dx <= R; dx++) {
    for (let dz = -R; dz <= R; dz++) {
      if (inOct(dx, dz, aOut) && !inOct(dx, dz, aIn)) w.set(cx + dx, y, cz + dz, color);
    }
  }
}

export default { buildBellDrum, buildSmallPagoda };
