import { C } from '../voxel/palette.js';

/**
 * 中式屋顶体素化。
 * 思路：屋面是一个高度场 h(u,v)。剖面采用“举折”式下凹曲线（檐口平缓、近脊陡峭），
 * 并在翼角处叠加起翘量，形成“飞檐翘角”。每一列从邻列最低高度填充到本列高度，
 * 保证屋面连续无缝；屋身范围内则实心填充至檐下（隐藏面会被网格化剔除）。
 */

export const TILES = {
  yellow: { a: C.tileY1, b: C.tileY2, side: C.tileY3, edge: C.tileY3, ridge: C.ridgeY, orn: C.tileG1, fig: C.tileG2 },
  green: { a: C.tileG1, b: C.tileG2, side: C.tileG3, edge: C.tileG3, ridge: C.ridgeY, orn: C.ridgeY, fig: C.tileY2 },
  grey: { a: C.tileK1, b: C.tileK2, side: C.tileK3, edge: C.tileK3, ridge: C.ridgeK, orn: C.tileK2, fig: C.tileK3 },
};

const NONE = -99999;

/** 举折曲线：t ∈ [0,1]（0 为檐口，1 为屋脊） */
export const curve = (t) => 0.3 * t + 0.7 * t * t;

/** 翼角起翘：越接近转角（dx+dz 越小）抬升越多 */
function lift(dx, dz, U, Rc) {
  const k = 1 - (dx + dz) / Rc;
  return k > 0 ? U * k * k : 0;
}

function baseCell(t, h, d, stripe) {
  return {
    h,
    top: d < 1 ? t.edge : stripe & 1 ? t.a : t.b, // 筒瓦垄条纹 + 檐口瓦当
    side: t.side,
    under: d < 3 ? (stripe & 1 ? C.rafterA : C.rafterB) : C.woodDark, // 檐下彩绘椽子
  };
}

/**
 * 通用屋面填充。evalCell(uc, vc, u, v) 返回单元描述或 null。
 * 单元字段：h, top, side, under, coreBottom, coreColor, gableFrom, gable, gableTrim, extra[]
 */
export function fillRoof(fr, u0, u1, v0, v1, evalCell) {
  const W = u1 - u0;
  const D = v1 - v0;
  const H = new Int32Array(W * D).fill(NONE);
  const cells = new Array(W * D);
  for (let v = v0; v < v1; v++) {
    for (let u = u0; u < u1; u++) {
      const r = evalCell(u + 0.5, v + 0.5, u, v);
      if (!r) continue;
      const i = (v - v0) * W + (u - u0);
      r.H = Math.round(r.h);
      H[i] = r.H;
      cells[i] = r;
    }
  }
  const hAt = (u, v) => (u < u0 || u >= u1 || v < v0 || v >= v1 ? NONE : H[(v - v0) * W + (u - u0)]);

  for (let v = v0; v < v1; v++) {
    for (let u = u0; u < u1; u++) {
      const r = cells[(v - v0) * W + (u - u0)];
      if (!r) continue;
      const top = r.H;
      const isCore = r.coreBottom !== undefined;
      let lo;
      if (isCore) lo = Math.min(r.coreBottom, top);
      else {
        let nmin = Infinity;
        for (let nh of [hAt(u + 1, v), hAt(u - 1, v), hAt(u, v + 1), hAt(u, v - 1)]) {
          if (nh === NONE) nh = top - 2;
          if (nh < nmin) nmin = nh;
        }
        lo = Math.min(top - 1, nmin + 1);
      }
      for (let y = lo; y <= top; y++) {
        let c;
        if (y === top) c = r.top;
        else if (r.gableFrom !== undefined && y > r.gableFrom) c = y >= top - 1 ? r.gableTrim : r.gable;
        else if (isCore) c = r.coreColor ?? r.side;
        else if (y === lo) c = r.under;
        else c = r.side;
        fr.set(u, y, v, c);
      }
      if (r.extra) for (let k = 0; k < r.extra.length; k++) fr.set(u, top + 1 + k, v, r.extra[k]);
    }
  }
  return hAt;
}

/** 翼角尖端：在四角外侧再挑出一个体素 */
function flyingCorners(fr, A, B, hAt, t) {
  for (const su of [-1, 1]) {
    for (const sv of [-1, 1]) {
      const u = su > 0 ? A - 1 : -A;
      const v = sv > 0 ? B - 1 : -B;
      const h = hAt(u, v);
      if (h === NONE) continue;
      fr.set(u + su, h + 1, v + sv, t.ridge);
      fr.set(u + su, h, v + sv, t.edge);
    }
  }
}

function applyCore(r, core, inside) {
  if (core && inside) {
    r.coreBottom = core.bottom;
    r.coreColor = core.color;
  }
}

/** 鸱吻：立于正脊两端，吻头向内卷 */
function chiwen(fr, ends, t, big) {
  const hgt = big ? 3 : 2;
  for (const e of ends) {
    const y = e.top;
    const dir = e.u < 0 ? 1 : -1;
    for (let k = 1; k <= hgt; k++) fr.set(e.u, y + k, e.v, t.orn);
    fr.set(e.u + dir, y + hgt, e.v, t.orn);
    if (big) fr.set(e.u - dir, y + 1, e.v, t.orn);
  }
}

/** 脊饰：垂脊/戗脊末端的“仙人走兽” */
const hipRidge = (t, d) => (d > 1 && d < 6 && (d | 0) % 2 === 1 ? [t.ridge, t.fig] : [t.ridge]);

/** 庑殿顶（四坡五脊） */
export function roofHip(fr, o) {
  const { A, B, yE, R, t, core } = o;
  const U = o.U ?? B * 0.22;
  const Rc = o.Rc ?? B * 0.85;
  const ends = [];
  const hAt = fillRoof(fr, -A, A, -B, B, (uc, vc, u, v) => {
    const au = Math.abs(uc), av = Math.abs(vc);
    const dx = A - au, dz = B - av;
    const d = Math.min(dx, dz);
    const h = yE + R * curve(Math.min(1, d / B)) + lift(dx, dz, U, Rc);
    const alongU = dz <= dx;
    const r = baseCell(t, h, d, alongU ? u : v);
    applyCore(r, core, core && au < core.A && av < core.B);
    const diag = Math.abs(dx - dz) < 0.01;
    if (av < 1 && dx >= dz - 0.01) {
      // 正脊，两端置鸱吻
      r.extra = [t.ridge, t.ridge];
      if (diag) ends.push({ u, v, top: Math.round(h) + 2 });
    } else if (diag) r.extra = hipRidge(t, d);
    return r;
  });
  chiwen(fr, ends, t, B >= 12);
  flyingCorners(fr, A, B, hAt, t);
  return hAt;
}

/** 歇山顶（九脊顶）：上部为悬山两坡 + 山花，下部为四面坡 */
export function roofXieshan(fr, o) {
  const { A, B, yE, R, t, core } = o;
  const s = o.s ?? Math.round(B * 0.45); // 山花自檐口的收进距离
  const U = o.U ?? B * 0.24;
  const Rc = o.Rc ?? B * 0.85;
  const sideTop = yE + R * curve(Math.min(1, s / B));
  const ends = [];
  const hAt = fillRoof(fr, -A, A, -B, B, (uc, vc, u, v) => {
    const au = Math.abs(uc), av = Math.abs(vc);
    const dx = A - au, dz = B - av;
    const g = yE + R * curve(Math.min(1, dz / B));
    let h;
    let alongU = true;
    let gable = false;
    if (dx >= s) {
      h = g;
      gable = dx < s + 1 && g > sideTop + 1.5;
    } else {
      const sd = yE + R * curve(Math.min(1, dx / B));
      if (g <= sd) h = g;
      else {
        h = sd;
        alongU = false;
      }
    }
    h += lift(dx, dz, U, Rc);
    const r = baseCell(t, h, alongU ? dz : dx, alongU ? u : v);
    applyCore(r, core, core && au < core.A && av < core.B);
    if (gable) {
      r.gableFrom = Math.round(sideTop);
      r.gable = C.gableRed;
      r.gableTrim = C.gold;
      r.top = t.ridge;
      r.extra = [t.ridge];
    }
    if (av < 1 && dx >= s) {
      r.extra = [t.ridge, t.ridge];
      if (dx < s + 1) ends.push({ u, v, top: Math.round(h) + 2 });
    } else if (dx < s && Math.abs(dx - dz) < 0.01) r.extra = hipRidge(t, Math.min(dx, dz));
    return r;
  });
  chiwen(fr, ends, t, B >= 12);
  flyingCorners(fr, A, B, hAt, t);
  return hAt;
}

/** 硬山顶：两坡，山墙与屋面齐平 */
export function roofYingshan(fr, o) {
  const { A, B, yE, R, t, core, wallBottom, bodyHd, wallColor } = o;
  const ends = [];
  const hAt = fillRoof(fr, -A, A, -B, B, (uc, vc, u, v) => {
    const au = Math.abs(uc), av = Math.abs(vc);
    const dx = A - au, dz = B - av;
    const h = yE + R * curve(Math.min(1, dz / B));
    const r = baseCell(t, h, dz, u);
    applyCore(r, core, core && au < core.A && av < core.B);
    if (dx < 1) {
      // 山墙 + 垂脊
      r.top = t.ridge;
      r.extra = [t.ridge];
      if (av < bodyHd + 1) {
        r.coreBottom = wallBottom;
        r.coreColor = wallColor;
        r.gableFrom = wallBottom - 1;
        r.gable = wallColor;
        r.gableTrim = t.side;
      }
    }
    if (av < 1) {
      r.extra = [t.ridge, t.ridge];
      if (dx >= 1 && dx < 2) ends.push({ u, v, top: Math.round(h) + 2 });
    }
    return r;
  });
  chiwen(fr, ends, t, B >= 12);
  return hAt;
}

/** 四角攒尖顶 + 宝顶 */
export function roofPyramid(fr, o) {
  const { A, yE, R, t, core } = o;
  const U = o.U ?? A * 0.25;
  const Rc = o.Rc ?? A * 0.9;
  const hAt = fillRoof(fr, -A, A, -A, A, (uc, vc, u, v) => {
    const au = Math.abs(uc), av = Math.abs(vc);
    const dx = A - au, dz = A - av;
    const d = Math.min(dx, dz);
    const h = yE + R * curve(Math.min(1, d / A)) + lift(dx, dz, U, Rc);
    const r = baseCell(t, h, d, dz <= dx ? u : v);
    applyCore(r, core, core && au < core.A && av < core.A);
    if (Math.abs(dx - dz) < 0.01 && d < A - 1) r.extra = hipRidge(t, d);
    return r;
  });
  const top = hAt(0, 0);
  for (let v = -2; v < 2; v++) {
    for (let u = -2; u < 2; u++) {
      const inner = u >= -1 && u < 1 && v >= -1 && v < 1;
      const corner = (u === -2 || u === 1) && (v === -2 || v === 1);
      if (inner) {
        fr.set(u, top + 1, v, t.ridge);
        fr.set(u, top + 3, v, C.gold);
        fr.set(u, top + 4, v, C.goldBright);
      }
      if (!corner) fr.set(u, top + 2, v, C.gold);
    }
  }
  flyingCorners(fr, A, A, hAt, t);
  return hAt;
}

/** 重檐下檐：环形四坡檐，内圈留给上层屋身 */
export function roofSkirt(fr, o) {
  const { A, B, Ai, Bi, yE, R, t, core } = o;
  const W = Math.min(A - Ai, B - Bi);
  const U = o.U ?? W * 0.3;
  const Rc = o.Rc ?? W * 0.9;
  const hAt = fillRoof(fr, -A, A, -B, B, (uc, vc, u, v) => {
    const au = Math.abs(uc), av = Math.abs(vc);
    if (au < Ai && av < Bi) return null;
    const dx = A - au, dz = B - av;
    const d = Math.min(dx, dz);
    const h = yE + R * curve(Math.min(1, d / W)) + lift(dx, dz, U, Rc);
    const r = baseCell(t, h, d, dz <= dx ? u : v);
    applyCore(r, core, core && au < core.A && av < core.B);
    if (au < Ai + 1 && av < Bi + 1) r.extra = [t.ridge]; // 围脊
    else if (Math.abs(dx - dz) < 0.01) r.extra = hipRidge(t, d);
    return r;
  });
  flyingCorners(fr, A, B, hAt, t);
  return hAt;
}

/** 八角形（塔檐 / 八角攒尖） */
export function octInfo(uc, vc) {
  const ax = Math.abs(uc), az = Math.abs(vc), ad = (ax + az) * Math.SQRT1_2;
  let m1, m2, face;
  if (ax >= az && ax >= ad) { m1 = ax; m2 = Math.max(az, ad); face = 0; }
  else if (az >= ax && az >= ad) { m1 = az; m2 = Math.max(ax, ad); face = 1; }
  else { m1 = ad; m2 = Math.max(ax, az); face = 2; }
  return { m1, m2, face };
}

export function roofOct(fr, o) {
  const { a, yE, R, t, core } = o;
  const ai = o.ai ?? 0;
  const W = o.W ?? a - ai;
  const U = o.U ?? 2;
  const n = Math.ceil(a) + 1;
  const hAt = fillRoof(fr, -n, n, -n, n, (uc, vc, u, v) => {
    const { m1, m2, face } = octInfo(uc, vc);
    if (m1 > a) return null;
    if (ai > 0 && m1 < ai) return null;
    const d = a - m1;
    const vert = Math.max(0, 1 - (m1 - m2) / 2.2);
    const fall = Math.max(0, 1 - d / (W * 0.8));
    const h = yE + R * curve(Math.min(1, d / W)) + U * vert * vert * fall * fall;
    const stripe = face === 0 ? v : face === 1 ? u : u + v;
    const r = baseCell(t, h, d, stripe);
    applyCore(r, core, core && m1 < core.a);
    if (ai > 0 && m1 < ai + 1) r.extra = [t.ridge];
    else if (m1 - m2 < 0.36 && d < W - 0.8) r.extra = [t.ridge];
    return r;
  });
  return hAt;
}
