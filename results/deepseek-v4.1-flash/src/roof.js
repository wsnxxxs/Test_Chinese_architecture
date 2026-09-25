/**
 * roof.js — 中式屋顶形制生成器
 *
 * 支持：庑殿顶（hip）、歇山顶（hip + 山花）、攒尖顶（pyramid）、腰檐（skirt）
 * 特点：举折曲线（檐口平缓、脊部陡峭）、飞檐翘角、正脊鸱吻、瓦垄色差
 *
 * 坐标约定见 voxel.js：索引 i 的方块占 [i, i+1]，对称半宽 a 对应 x ∈ [-a, a-1]。
 * 屋顶以 (cx, cz) 为平面中心，hw/hd 为「含出檐」的半宽 / 半深。
 */

import { C } from './palette.js';

/* ---------- 颜色工具 ---------- */

export function mixHex(a, b, t) {
  const ar = (a >> 16) & 255, ag = (a >> 8) & 255, ab = a & 255;
  const br = (b >> 16) & 255, bg = (b >> 8) & 255, bb = b & 255;
  return ((Math.round(ar + (br - ar) * t) << 16) |
          (Math.round(ag + (bg - ag) * t) << 8) |
           Math.round(ab + (bb - ab) * t));
}

/* ---------- 逐层收缩序列（举折） ---------- */

/**
 * 由 start 逐层收缩到 stopAt，返回每层半尺寸。
 * shrinks 为各层收缩量，用完后取最后一个值（例如 [3,2,2,1]）。
 * 收缩量前大后小 → 檐口平缓、近脊陡峭，即「举折」曲线。
 */
function seq(start, stopAt, shrinks) {
  const out = [start];
  let v = start, i = 0;
  while (v > stopAt) {
    v -= shrinks[Math.min(i, shrinks.length - 1)] ?? 1;
    i++;
    if (v < stopAt) v = stopAt;
    out.push(v);
  }
  return out;
}

/* ---------- 单层瓦面 ---------- */

function plate(b, cx, cz, a, d, y, tile, tileAlt, ridge, stripe, first = false) {
  const x0 = cx - a, x1 = cx + a - 1;
  const z0 = cz - d, z1 = cz + d - 1;
  for (let x = x0; x <= x1; x++) {
    const eX = x === x0 || x === x1;
    for (let z = z0; z <= z1; z++) {
      const eZ = z === z0 || z === z1;
      // 只描四条垂脊（角部对角），其余为瓦面；瓦垄按 x 奇偶做明暗
      let col = (stripe && (x & 1)) ? tileAlt : tile;
      if (eX && eZ) col = ridge;
      else if (first && (eX || eZ)) col = tileAlt;   // 檐口一圈略深
      b.set(x, y, z, col);
    }
  }
}

/* ---------- 屋顶主体 ---------- */

/**
 * @param {object} o
 *  cx, cz       平面中心
 *  hw, hd       半宽 / 半深（含出檐）
 *  y0           檐口所在层 y
 *  ridgeAxis    'x' 正脊沿 x（面阔方向）| 'z' 正脊沿 z
 *  tile/tileAlt/ridge  瓦色 / 瓦垄暗色 / 脊线色
 *  shrinks      举折：每层收缩量，默认 [2,1]
 *  gableAt      歇山顶：第 k 层以上转为悬山（null = 庑殿顶）
 *  gableColor   山花色
 * @returns {{top,ridgeY,a,d,layers}} a/d 为顶层脊身半尺寸
 */
export function roof(b, o) {
  const {
    cx = 0, cz, hw, hd, y0,
    ridgeAxis = 'x',
    tile = C.tileGrey, ridge = mixHex(tile, 0x000000, 0.3),
    tileAlt = mixHex(tile, 0x000000, 0.13),
    shrinks = [2, 1], gableAt = null, gableColor = C.wallWhite,
    stripe = true
  } = o;

  const longHalf = ridgeAxis === 'x' ? hw : hd;
  const shortHalf = ridgeAxis === 'x' ? hd : hw;
  const sLong = seq(longHalf, 1, shrinks);
  const sShort = seq(shortHalf, 1, shrinks);
  const L = sShort.length;                    // 层数由短向决定（决定举高）
  const k = gableAt == null ? -1 : Math.min(gableAt, L - 1);

  const ext = (i) => ({
    lo: sLong[Math.min(i, sLong.length - 1)],
    sh: sShort[Math.min(i, sShort.length - 1)]
  });

  for (let i = 0; i < L; i++) {
    const e = ext(i);
    const sh = e.sh;                                     // 短向持续收缩至 1
    const lo = (gableAt != null && i > k) ? sLong[k] : e.lo;  // 歇山：上部纵向不再收缩
    const a = ridgeAxis === 'x' ? lo : sh;
    const d = ridgeAxis === 'x' ? sh : lo;
    const y = y0 + i;
    plate(b, cx, cz, a, d, y, tile, tileAlt, ridge, stripe, i === 0);

    /* 歇山：上部两侧封山花（庑殿顶 gableAt=null，不封） */
    if (gableAt != null && i > k && gableColor != null) {
      if (ridgeAxis === 'x') {
        for (let z = cz - d + 1; z <= cz + d - 2; z++) {
          b.set(cx - a, y, z, gableColor);
          b.set(cx + a - 1, y, z, gableColor);
        }
      } else {
        for (let x = cx - a + 1; x <= cx + a - 2; x++) {
          b.set(x, y, cz - d, gableColor);
          b.set(x, y, cz + d - 1, gableColor);
        }
      }
    }
  }

  const last = ext(L - 1);
  const topY = y0 + L - 1;
  const aTop = ridgeAxis === 'x' ? (k < 0 ? last.lo : sLong[k]) : 1;
  const dTop = ridgeAxis === 'x' ? 1 : (k < 0 ? last.lo : sLong[k]);

  return { top: topY, ridgeY: topY + 1, a: aTop, d: dTop, layers: L, ridgeAxis };
}

/* ---------- 攒尖顶 ---------- */

export function pyramidRoof(b, o) {
  const { cx = 0, cz, hw, y0, tile = C.tileGrey, spike = 4, shrinks = [2, 1] } = o;
  const r = roof(b, { cx, cz, hw, hd: hw, y0, tile, shrinks, ridge: mixHex(tile, 0, 0.32) });
  // 宝顶：束腰 → 宝珠 → 尖
  for (let i = 0; i < spike; i++) {
    const wide = i < spike - 2;
    const w = wide ? 1 : 0;
    b.bx(cx - 1 - w, cx + w, r.ridgeY + i, r.ridgeY + i, cz - 1 - w, cz + w,
      wide ? C.tileGold : C.ridgeGold);
  }
  b.lineY(r.ridgeY + spike, r.ridgeY + spike + 1, cx, cz, C.ridgeGold);
  b.lineY(r.ridgeY + spike, r.ridgeY + spike + 1, cx - 1, cz - 1, C.ridgeGold);
  return { top: r.top, ridgeY: r.ridgeY + spike + 2, a: r.a, d: r.d, layers: r.layers };
}

/* ---------- 腰檐（塔身 / 楼阁每层的短檐） ---------- */

export function skirt(b, o) {
  const {
    cx = 0, cz, hw, hd = null, y0, layers = 3, out = 2,
    tile = C.tileGrey, ridge = mixHex(tile, 0, 0.3), tileAlt = mixHex(tile, 0, 0.13)
  } = o;
  const baseA = hw, baseD = hd == null ? hw : hd;
  for (let i = 0; i < layers; i++) {
    const grow = layers - 1 - i;          // 底层最外挑，逐层收进
    plate(b, cx, cz, baseA + out + grow, baseD + out + grow, y0 + i, tile, tileAlt, ridge, true);
  }
  return { top: y0 + layers - 1 };
}

/* ---------- 飞檐翘角 ---------- */

/**
 * 四角起翘：沿对角线逐层外扩抬高，形成翼角。
 */
export function eaveCorners(b, o) {
  const {
    cx, cz, a, d, y, color = C.tileGold, len = 3, tip = C.ridgeGold, all = true
  } = o;
  const xL = cx - a, xR = cx + a - 1;
  const zL = cz - d, zR = cz + d - 1;
  for (const sx of all ? [-1, 1] : [1]) {
    for (const sz of all ? [-1, 1] : [1]) {
      const cxi = sx > 0 ? xR : xL;
      const czi = sz > 0 ? zR : zL;
      for (let k = 1; k <= len; k++) {
        const yy = y + k;
        b.set(cxi + sx * k, yy, czi + sz * k, color);
        b.set(cxi + sx * (k - 1), yy, czi + sz * k, color);
        b.set(cxi + sx * k, yy, czi + sz * (k - 1), color);
        if (k >= 2) b.set(cxi + sx * k, yy - 1, czi + sz * k, color);
      }
      // 套兽
      b.set(cxi + sx * (len + 1), y + len, czi + sz * (len + 1), tip);
    }
  }
}

/* ---------- 正脊与鸱吻 ---------- */

export function mainRidge(b, o) {
  const {
    cx = 0, cz, y, a, d, ridgeAxis = 'x', color = C.ridgeGold, dark = C.tileGold
  } = o;
  const x0 = cx - a, x1 = cx + a - 1;
  const z0 = cz - d, z1 = cz + d - 1;
  b.bx(x0, x1, y, y, z0, z1, color);

  const ends = ridgeAxis === 'x'
    ? [[x0 - 1, 1, 'x'], [x1 + 1, -1, 'x']]
    : [[z0 - 1, 1, 'z'], [z1 + 1, -1, 'z']];

  for (const [e, dir, ax] of ends) {
    const put = (o1, yy, col) => {
      if (ax === 'x') b.bx(e + o1, e + o1, yy, yy, z0, z1, col);
      else b.bx(x0, x1, yy, yy, e + o1, e + o1, col);
    };
    put(0, y, color);
    put(0, y + 1, color);
    put(dir, y + 1, color);
    put(dir, y + 2, dark);
    put(dir * 2, y + 2, color);
  }
  if (ridgeAxis === 'x') {
    for (let x = x0; x <= x1; x++) if (x & 1) { b.set(x, y, z0, dark); b.set(x, y, z1, dark); }
  } else {
    for (let z = z0; z <= z1; z++) if (z & 1) { b.set(x0, y, z, dark); b.set(x1, y, z, dark); }
  }
}

/* ---------- 斗拱层 ---------- */

export function dougong(b, o) {
  const { cx = 0, cz, a, d, y, thick = 1, red = C.woodRed, green = C.tileGreen } = o;
  const x0 = cx - a, x1 = cx + a - 1;
  const z0 = cz - d, z1 = cz + d - 1;
  for (let y2 = y; y2 < y + thick; y2++) {
    for (let x = x0; x <= x1; x++)
      for (let z = z0; z <= z1; z++) {
        const edge = x < x0 + 1 || x > x1 - 1 || z < z0 + 1 || z > z1 - 1;
        if (edge) b.set(x, y2, z, ((x + z) & 1) === 0 ? red : green);
      }
  }
  b.ringY(x0, x1, z0, z1, y + thick, C.tileGreen, 1);
}
