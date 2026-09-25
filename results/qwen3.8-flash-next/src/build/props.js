/**
 * props.js — 陈设道具（SPEC §4，A3 负责）
 *
 * 约定 / 假设（SPEC §0：歧义按最保守解释，只在本文件注释里说明）：
 *  1. 所有 props 以 (x, z, y) 为【基面中心】，只向 +Y 生长；y=0 即落在地面上，
 *     因此同一 props 可复用在任意台基 / 平座 / 游廊地面上（调用方给 y）。
 *  2. VoxelWorld.set/fill/cylY/ell 端点均为闭区间整数格（SPEC §1）。
 *  3. 只用 set/fill/cylY/ell + hollow 选项；单个 props 体素数 40–350，绝不写实心大盒。
 *  4. 发光一律 w.set(...,{glow:true}) 且写在【外表面】（内部发光格会被隐藏面剔除，
 *     等于白花预算）。
 *  5. 随机只来自 hash3(相对坐标 + seed)：同一 seed 形状完全一致 → 东西镜像放置对称。
 *  6. dir：'S' 朝 +Z（南）| 'N' -Z | 'E' +X | 'W' -X。
 */
import { P } from '../config.js';

/* ------------------------------------------------------------ 工具 */

/** 确定性哈希 -> [0,1) */
function h3(a, b, c) {
  let x = (Math.imul(a | 0, 73856093) ^ Math.imul(b | 0, 19349663) ^ Math.imul(c | 0, 83492791)) | 0;
  x ^= x >>> 15; x = Math.imul(x, 2246822519); x ^= x >>> 13;
  x = Math.imul(x ^ (x >>> 16), 668265263); x ^= x >>> 16;
  return (x >>> 0) / 4294967296;
}

/** 菱形盘（|dx|+|dz| <= rr） */
function diskD(w, cx, cz, y, rr, color, opts) {
  for (let dx = -rr; dx <= rr; dx++) {
    const b = rr - Math.abs(dx);
    for (let dz = -b; dz <= b; dz++) w.set(cx + dx, y, cz + dz, color, opts);
  }
}

/** 菱形环（|dx|+|dz| === rr） */
function ringD(w, cx, cz, y, rr, color, opts) {
  for (let dx = -rr; dx <= rr; dx++) {
    const b = rr - Math.abs(dx);
    w.set(cx + dx, y, cz - b, color, opts);
    if (b !== 0) w.set(cx + dx, y, cz + b, color, opts);
  }
}

/** 方形盘 */
function sq(w, cx, cz, y, half, color, opts) {
  w.fill(cx - half, y, cz - half, cx + half, y, cz + half, color, opts);
}

/** 方形环（只出皮，不写实心） */
function ringSq(w, cx, cz, y, half, color, opts) {
  for (let dx = -half; dx <= half; dx++) {
    for (let dz = -half; dz <= half; dz++) {
      if (Math.abs(dx) === half || Math.abs(dz) === half) w.set(cx + dx, y, cz + dz, color, opts);
    }
  }
}

/** 方向基向量：f = 朝外（面阔法线），l = 左右 */
function axes(dir) {
  if (dir === 'N') return { fx: 0, fz: -1, lx: 1, lz: 0 };
  if (dir === 'E') return { fx: 1, fz: 0, lx: 0, lz: 1 };
  if (dir === 'W') return { fx: -1, fz: 0, lx: 0, lz: -1 };
  return { fx: 0, fz: 1, lx: 1, lz: 0 }; // 'S'
}

/* -------------------------------------------------------- 宫灯 */
/**
 * 吊挂宫灯。y = 最底（垂穗）格，共 h+5 格高，向上生长到吊杆顶。
 * 要把吊杆顶贴到梁底：y = beamBottomY - (h + 4)。
 * 中段灯笼纸真的写 glow:true（夜景靠它）。
 */
export function lantern(w, o = {}) {
  const x = o.x | 0, z = o.z | 0, y = o.y | 0;
  const r = o.r === undefined ? 2 : (o.r | 0);
  const h = Math.max(3, o.h === undefined ? 4 : (o.h | 0));
  const glow = o.glow !== false;
  const bodyY0 = y + 2;

  for (let i = 0; i < h; i++) {
    const rr = (i === 0 || i === h - 1) ? r : r + 1;   // 鼓腹
    const lit = glow && h >= 4 && i >= 1 && i <= h - 2; // 中段透光
    ringD(w, x, z, bodyY0 + i, rr,
      lit ? P.lanternGlow : P.lanternRed,
      lit ? { glow: true, jitter: 0 } : { jitter: 1 });
  }
  diskD(w, x, z, y + 1, r, P.gold);              // 底盖
  diskD(w, x, z, bodyY0 + h, r, P.goldBright);   // 顶盖
  w.set(x, bodyY0 + h + 1, z, P.woodDark);       // 吊杆
  w.set(x, bodyY0 + h + 2, z, P.woodDark);
  w.set(x, bodyY0 + h + 3, z, P.gold);
  w.set(x, y, z, P.silk);                        // 垂穗
  w.set(x, y - 1, z, P.lanternRed);
}

/* ----------------------------------------------------- 石灯笼 */
export function stoneLantern(w, o = {}) {
  const x = o.x | 0, z = o.z | 0, y = o.y | 0;
  const h = Math.max(5, o.h === undefined ? 7 : (o.h | 0));
  const g = o.glow !== false;
  let yy = y;
  sq(w, x, z, yy++, 2, P.stoneDark);
  sq(w, x, z, yy++, 1, P.stone);
  w.fill(x - 1, yy, z, x + 1, yy, z, P.stone);
  w.fill(x, yy, z - 1, x, yy, z + 1, P.stone);
  yy++;
  for (let i = 0; i < Math.max(1, h - 5); i++) w.set(x, yy++, z, P.marbleLine); // 柱
  sq(w, x, z, yy++, 1, P.marble);                 // 中台
  const ch0 = yy;                                 // 灯室
  for (let i = 0; i < 3; i++) {
    ringSq(w, x, z, ch0 + i, 1, i === 1 ? P.stoneDark : P.stone);
    /* 只有中层开 4 面灯窗（原来三层全开 → 3×3×3 一整块纯色发光体，夜景里就是一坨
       "无细节的黄色方块"；收成一层，灯才有"室 + 窗"的形制） */
    if (g && i === 1) {
      for (const d of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        w.set(x + d[0], ch0 + i, z + d[1], P.lanternGlow, { glow: true, jitter: 0 });
      }
      w.set(x, ch0 + i, z, P.bronzeDark);          // 灯芯座（让窗后有暗底，窗才透亮）
    }
  }
  yy = ch0 + 3;
  sq(w, x, z, yy++, 1, P.marble);                 // 灯室顶
  diskD(w, x, z, yy++, 2, P.stone);               // 笠顶
  ringD(w, x, z, yy++, 1, P.stoneDark);
  w.set(x, yy, z, P.marbleLine);                  // 宝珠
}

/* -------------------------------------------------------- 石狮 */
/** 总高（含座）约 9–10 格；座 3 + 身 4 + 头/毛 3 */
export function stoneLion(w, o = {}) {
  const x = o.x | 0, z = o.z | 0, y = o.y | 0;
  const dir = o.dir || 'S';
  const big = (o.size === undefined ? 1 : o.size) >= 1;
  const a = axes(dir);
  const alongX = dir === 'E' || dir === 'W';

  // 须弥座
  w.fill(x - 3, y, z - 3, x + 3, y, z + 3, P.stone);
  w.fill(x - 2, y + 1, z - 2, x + 2, y + 1, z + 2, P.stoneDark);
  w.fill(x - 3, y + 2, z - 3, x + 3, y + 2, z + 3, P.marble);
  const top = y + 3;

  // 身躯（表面椭球，长轴朝 forward）
  const fR = big ? 3 : 2;
  const rx = alongX ? fR : 2, rz = alongX ? 2 : fR;
  w.ell(x + a.fx, top + 2, z + a.fz, rx, 2, rz, P.stone, { hollow: true });
  w.ell(x - a.fx, top + 3, z - a.fz, alongX ? 2 : 1, 2, alongX ? 1 : 2, P.stoneDark, { hollow: true });

  // 头
  const hx = x + a.fx * 3, hz = z + a.fz * 3;
  w.ell(hx, top + 4, hz, 2, 2, 2, P.stone, { hollow: true });
  // 卷毛凸起（头顶一圈）
  for (let i = 0; i < 8; i++) {
    const t = (i / 8) * Math.PI * 2;
    w.set(hx + Math.round(Math.cos(t) * 1.7), top + 6, hz + Math.round(Math.sin(t) * 1.7), P.stoneDark);
  }
  w.set(hx, top + 6, hz, P.stone);
  // 双耳 + 鼻
  w.set(hx + (alongX ? 0 : 1), top + 5, hz + (alongX ? 1 : 0), P.stoneDark);
  w.set(hx - (alongX ? 0 : 1), top + 5, hz - (alongX ? 1 : 0), P.stoneDark);
  w.set(hx + a.fx * 2, top + 4, hz + a.fz * 2, P.ink);
  // 四腿（前腿朝 forward 错开）
  for (const s of [-1, 1]) {
    const lx = s * (alongX ? 0 : 2), lz = s * (alongX ? 2 : 0);
    w.fill(x + lx + a.fx * 2, y + 3, z + lz + a.fz * 2, x + lx + a.fx * 2, top, z + lz + a.fz * 2, P.stoneDark);
    w.fill(x + lx - a.fx * 2, y + 3, z + lz - a.fz * 2, x + lx - a.fx * 2, top, z + lz - a.fz * 2, P.stoneDark);
  }
  // 前胸绣球（居中，保持左右对称）
  const bx = x + a.fx * 5, bz = z + a.fz * 5;
  w.set(bx, top, bz, P.gold);
  w.set(bx + (alongX ? 0 : 1), top, bz + (alongX ? 1 : 0), P.gold);
  w.set(bx - (alongX ? 0 : 1), top, bz - (alongX ? 1 : 0), P.gold);
  w.set(bx, top + 1, bz, P.goldBright);
  // 尾
  w.set(x - a.fx * 4 + a.lx, top + 3, z - a.fz * 4 + a.lz, P.stoneDark);
  w.set(x - a.fx * 5 + a.lx, top + 4, z - a.fz * 5 + a.lz, P.stoneDark);
}

/* ------------------------------------------------------ 香炉 */
export function incenseBurner(w, o = {}) {
  const x = o.x | 0, z = o.z | 0, y = o.y | 0;
  const big = o.big !== false;
  const R = big ? 4 : 3;

  // 方座（简化龟趺）
  w.fill(x - R - 1, y, z - R - 1, x + R + 1, y, z + R + 1, P.stoneDark);
  w.fill(x - R, y + 1, z - R, x + R, y + 1, z + R, P.stone);
  sq(w, x, z, y + 2, R - 1, P.marble);
  let yy = y + 3;

  // 三足
  for (let i = 0; i < 3; i++) {
    const t = -Math.PI / 2 + (i * Math.PI * 2) / 3;
    const lx = x + Math.round(Math.cos(t) * (R - 1)), lz = z + Math.round(Math.sin(t) * (R - 1));
    w.fill(lx, yy, lz, lx, yy + 1, lz, P.bronzeDark);
  }
  // 鼎腹：空心 + 鼓腹 + 弦纹带（一律纯色圆筒会在夜景里读成"一块无细节的黄铁"，故分色 + 起线）
  const b0 = yy + 2, b1 = yy + (big ? 5 : 4);
  for (let i = b0; i <= b1; i++) {
    const t = b1 > b0 ? (i - b0) / (b1 - b0) : 0;
    const bulge = t > 0.2 && t < 0.8 ? 1 : 0;                       // 中段鼓出 1 格
    const band = (i === b0 || i === b1 || (big && (i === b0 + 2 || i === b1 - 2))) ? 1 : 0;
    w.cylY(x, z, i, i, R - 1 + bulge, band ? P.bronzeDark : P.bronze, { hollow: true });
  }
  ringD(w, x, z, b0, R - 1, P.bronzeDark);
  w.cylY(x, z, b1 + 1, b1 + 1, R, P.bronzeDark);       // 口沿（与鼓腹齐平，压住轮廓）
  w.cylY(x, z, b1 + 1, b1 + 1, R - 2, P.ink);          // 膛内
  // 炭光（写在口面外露格上）
  for (let dx = -(R - 2); dx <= R - 2; dx++) {
    for (let dz = -(R - 2); dz <= R - 2; dz++) {
      if (dx * dx + dz * dz <= (R - 2) * (R - 2) && h3(dx + 91, dz + 3, 7) > 0.3) {
        w.set(x + dx, b1 + 1, z + dz, P.lanternGlow, { glow: true, jitter: 0 });
      }
    }
  }
  // 两立耳
  for (const s of [-1, 1]) {
    w.set(x + s * (R - 1), b1 + 2, z, P.bronze);
    w.set(x + s * (R - 1), b1 + 3, z, P.bronze);
  }
  // 香烟（浅灰几格，S 形上升）
  const sTop = b1 + (big ? 11 : 8);
  for (let i = b1 + 4; i <= sTop; i++) {
    const t = (i - b1) / (sTop - b1);
    w.set(x + Math.round(Math.sin(t * 3.4) * (1 + t * 2)), i,
      z + Math.round(Math.cos(t * 2.6) * t * 2), i > sTop - 2 ? P.paper : P.snow, { jitter: 0 });
  }
}

/* -------------------------------------------------------- 石碑 */
/** 碑座（赑屃简化）+ 碑身（2 格厚）+ 螭首 + 碑面阴刻。总高约 h+6。 */
export function stele(w, o = {}) {
  const x = o.x | 0, z = o.z | 0, y = o.y | 0;
  const h = Math.max(10, o.h === undefined ? 16 : (o.h | 0));
  const a = axes(o.dir || 'S');
  const alongX = o.dir === 'E' || o.dir === 'W';
  // 局部坐标：u = 沿碑面（面阔），v = 面法线（厚），映射到世界
  const pt = (u, v, yv, color, opts) => {
    if (alongX) w.set(x + v, yv, z + u, color, opts);
    else w.set(x + u, yv, z + v, color, opts);
  };
  const box = (u0, u1, v0, v1, y0, y1, color) => {
    for (let yv = y0; yv <= y1; yv++) {
      for (let u = u0; u <= u1; u++) for (let v = v0; v <= v1; v++) pt(u, v, yv, color);
    }
  };

  // 碑座 / 赑屃（下枋 + 上枋 + 头尾四凸）
  box(-4, 4, -3, 3, y, y, P.stone);
  box(-3, 3, -2, 2, y + 1, y + 2, P.stoneDark);
  box(-1, 1, -1, 1, y + 3, y + 3, P.marble);
  const F = 5;
  pt(0, a.fz === 0 ? 0 : a.fz * F, y + 1, P.marble);          // 屃首
  pt(0, a.fz === 0 ? 0 : -a.fz * F, y + 1, P.stoneDark);      // 尾
  if (alongX) {
    pt(0, a.fx * F, y + 1, P.marble);
    pt(0, -a.fx * F, y + 1, P.stoneDark);
  } else {
    pt(a.lx * F, 0, y + 1, P.stoneDark);
    pt(-a.lx * F, 0, y + 1, P.stoneDark);
  }

  // 碑身
  const b0 = y + 4, b1 = y + h - 2;
  box(-3, 3, 0, 1, b0, b1, P.stoneDark);
  // 螭首额（逐层收进）
  const t0 = b1 + 1;
  box(-4, 4, -2, 3, t0, t0, P.stone);
  box(-3, 3, -1, 2, t0 + 1, t0 + 1, P.stone);
  box(-2, 2, 0, 1, t0 + 2, t0 + 2, P.stoneDark);
  for (let u = -3; u <= 3; u += 2) pt(u, 1, t0 + 3, P.marbleLine);

  // 碑面阴刻（正反两面的"字"阵列，覆写表面格 → 一定可见）
  for (let r = 0; b0 + 3 + r * 2 <= b1 - 2; r++) {
    const yv = b0 + 3 + r * 2;
    for (let c = -2; c <= 2; c += 2) {
      pt(c, 1, yv, P.ink, { jitter: 0 });
      pt(c, -1, yv, P.ink, { jitter: 0 });
    }
  }
}

/* --------------------------------------------------------- 树 */
/**
 * 单棵体素数：pine ≈ 190–260、cypress ≈ 200、blossom ≈ 220、willow ≈ 230。
 * 一律用 ell 表面（hollow）堆团，绝不实心球。
 */
export function pineTree(w, o = {}) {
  const x = o.x | 0, z = o.z | 0, y = o.y | 0;
  const h = Math.max(8, o.h === undefined ? 18 : (o.h | 0));
  const kind = o.kind || 'pine';
  const seed = (o.seed === undefined ? 1 : o.seed) | 0;

  const trunkH = Math.round(h * (kind === 'cypress' ? 0.26 : 0.45));
  for (let i = 0; i < trunkH; i++) {
    w.set(x, y + i, z, P.trunk);
    if (h > 15 && i > trunkH * 0.6) w.set(x + (i % 2), y + i, z - (i % 3 === 0 ? 1 : 0), P.trunk);
  }
  const cy0 = y + trunkH;

  if (kind === 'cypress') {
    const levels = Math.max(4, h - trunkH);
    for (let i = 0; i < levels; i++) {
      const t = i / levels;
      const rr = Math.max(0, Math.round((1 - t) * 3.0 + 0.5 * Math.sin(t * 8)));
      const col = h3(seed, i, 3) > 0.55 ? P.cypress : P.pine;
      const yy = y + trunkH + i;
      if (rr <= 0) { w.set(x, yy, z, col); continue; }
      for (let dx = -rr; dx <= rr; dx++) {
        const b = rr - Math.abs(dx);
        w.set(x + dx, yy, z - b, col);
        if (b) w.set(x + dx, yy, z + b, col);
        if (rr <= 1) w.set(x + dx, yy, z, col);
      }
    }
    return;
  }

  if (kind === 'blossom') {
    for (const s of [-1, 1]) {
      w.set(x + s, cy0 - 1, z, P.trunk);
      w.set(x + s * 2, cy0, z - s, P.trunk);
    }
    const n = 4;
    for (let i = 0; i < n; i++) {
      const t = (i / n) * Math.PI * 2 + h3(seed, i, 1) * 0.6;
      const rr = 2 + Math.round(h3(seed, i, 2) * 1.2);
      const cx = x + Math.round(Math.cos(t) * rr);
      const cz = z + Math.round(Math.sin(t) * rr);
      const cyy = cy0 + 2 + Math.round(h3(seed, i, 4) * 3);
      w.ell(cx, cyy, cz, rr + 1, Math.max(1, rr - 1), rr + 1, P.blossom, { hollow: true });
      if (i % 2 === 0) w.ell(cx, cyy + 1, cz, rr - 1, 1, rr - 1, P.blossomDeep, { hollow: true });
    }
    w.ell(x, cy0 + 5, z, 3, 2, 3, P.blossom, { hollow: true });
    return;
  }

  if (kind === 'willow') {
    w.ell(x, cy0 + 3, z, 4, 2, 4, P.leaf, { hollow: true });
    w.ell(x, cy0 + 5, z, 3, 2, 3, P.pine, { hollow: true });
    for (let i = 0; i < 10; i++) {
      const t = (i / 10) * Math.PI * 2;
      const dx = Math.round(Math.cos(t) * 4), dz = Math.round(Math.sin(t) * 4);
      const len = 4 + Math.round(h3(seed, i, 11) * 5);
      for (let k = 0; k < len; k++) {
        w.set(x + dx + (k > len - 2 ? 1 : 0), cy0 + 4 - k, z + dz, k > len - 3 ? P.moss : P.leaf);
      }
    }
    return;
  }

  // pine：层叠伞形圆柏
  const layers = Math.max(3, Math.round((h - trunkH) / 4));
  for (let i = 0; i < layers; i++) {
    const t = layers === 1 ? 0 : i / (layers - 1);
    const rr = Math.round(4.2 - t * 2.2 + h3(seed, i, 5) * 0.9);
    const cyy = cy0 + 1 + Math.round(t * (h - trunkH - 3));
    w.ell(x, cyy, z, rr, Math.max(1, Math.round(rr * 0.45)), rr, i % 2 ? P.pine : P.pineDark, { hollow: true });
    for (let k = 0; k < 4; k++) {
      const t2 = (k / 4) * Math.PI * 2 + i * 0.5 + h3(seed, i, k) * 0.5;
      w.set(x + Math.round(Math.cos(t2) * (rr + 1)), cyy - 1,
        z + Math.round(Math.sin(t2) * (rr + 1)), P.trunk);
    }
  }
  w.ell(x, cy0 + (h - trunkH) + 1, z, 2, 2, 2, P.pine, { hollow: true });
}

/* ----------------------------------------------------- 太湖石 */
export function rockery(w, o = {}) {
  const x = o.x | 0, z = o.z | 0, y = o.y | 0;
  const r = Math.max(2, o.r === undefined ? 5 : (o.r | 0));
  const seed = (o.seed === undefined ? 3 : o.seed) | 0;
  const rx = r, rz = Math.max(2, Math.round(r * 0.85)), ry = Math.max(2, Math.round(r * 1.2));
  const cy = y + Math.round(ry * 0.5);

  const occ = (dx, dy, dz) => {
    const nx = dx / rx, ny = dy / ry, nz = dz / rz;
    const n = Math.sqrt(nx * nx + ny * ny + nz * nz);
    const noise = 0.30 * (h3(seed + dx * 13, dy * 7 + seed, dz * 29) - 0.5)
      + 0.20 * (h3(seed * 3 + dx * 5, dy * 11, dz * 17 + seed) - 0.5);
    if (n + noise >= 1) return false;
    if (n > 0.35 && h3(dx + seed * 31, dy * 3 + 17, dz + seed * 7) < 0.22) return false; // 孔
    return true;
  };

  for (let dy = -ry; dy <= ry; dy++) {
    for (let dx = -rx; dx <= rx; dx++) {
      for (let dz = -rz; dz <= rz; dz++) {
        if (!occ(dx, dy, dz)) continue;
        if (occ(dx + 1, dy, dz) && occ(dx - 1, dy, dz) && occ(dx, dy + 1, dz)
          && occ(dx, dy - 1, dz) && occ(dx, dy, dz + 1) && occ(dx, dy, dz - 1)) continue;
        if (cy + dy < y) continue;
        const t = h3(dx + 5, dy + 11, dz + 3);
        w.set(x + dx, cy + dy, z + dz,
          dy > ry * 0.6 ? P.marbleLine : (t > 0.68 ? P.stone : t > 0.34 ? P.stoneDark : P.iron));
      }
    }
  }
  for (let i = 0; i < 5; i++) {
    const t = (i / 5) * Math.PI * 2;
    w.set(x + Math.round(Math.cos(t) * (rx - 1)), y, z + Math.round(Math.sin(t) * (rz - 1)), P.stoneDark);
  }
}

/* -------------------------------------------------------- 幡杆 */
export function banner(w, o = {}) {
  const x = o.x | 0, z = o.z | 0, y = o.y === undefined ? 0 : (o.y | 0);
  const a = axes(o.dir || 'S');
  const h = Math.max(8, o.h === undefined ? 15 : (o.h | 0));
  w.fill(x - 1, y, z - 1, x + 1, y, z + 1, P.stoneDark);
  w.fill(x - 1, y + 1, z - 1, x + 1, y + 1, z + 1, P.stone);
  for (let i = y + 2; i <= y + h; i++) w.set(x, i, z, P.wood);
  w.set(x, y + h + 1, z, P.goldBright);
  const ty = y + h - 2;
  w.fill(x - 3, ty, z, x + 3, ty, z, P.woodDark);
  for (const s of [-1, 1]) {
    for (let k = 0; k < 6; k++) {
      w.set(x + s * 3, ty - 1 - k, z + a.fz * (h3(s + 1, k, 5) > 0.6 ? 1 : 0),
        k > 3 ? P.silk : P.lanternRed);
    }
  }
}

export default { lantern, stoneLantern, stoneLion, incenseBurner, stele, pineTree, rockery, banner };
