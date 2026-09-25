import { C } from './colors.js';

/**
 * 轴向体素放置。
 * axis 'x'：u → 世界 x，v → 世界 z（沿 x 延伸的立面/踏步）
 * axis 'z'：u → 世界 z，v → 世界 x（沿 z 延伸的立面/踏步）
 * y0 / y1 为上下边界（自动取 min）。
 */
export function put(B, axis, u0, u1, v0, v1, y0, y1, col) {
  const ys = Math.min(y0, y1), h = Math.abs(y1 - y0);
  const us = Math.min(u0, u1), ud = Math.abs(u1 - u0);
  const vs = Math.min(v0, v1), vd = Math.abs(v1 - v0);
  if (axis === 'x') B.box(us, ys, vs, ud, h, vd, col);
  else B.box(vs, ys, us, vd, h, ud, col);
}

/* ---------------------------------- 基础构件 ---------------------------------- */

/** 方形木柱（含柱础）。柱顶多伸出 cap 插入上方斗拱/屋面，避免与墙顶共面闪面 */
export function column(S, axis, u, v, y0, y1, size = 2.2, col = C.colRed, base = true, cap = 0.3) {
  put(S.solid, axis, u - size / 2, u + size / 2, v - size / 2, v + size / 2, y0, y1 + cap, col);
  if (base) {
    put(
      S.solid, axis,
      u - size / 2 - 0.4, u + size / 2 + 0.4,
      v - size / 2 - 0.4, v + size / 2 + 0.4,
      y0, y0 + 0.55, C.stoneDk
    );
  }
}

/** 墙体：沿 u 延伸，厚 t，中心面在 v */
export function wall(S, axis, u0, u1, v, t, y0, y1, col = C.wallRed) {
  put(S.solid, axis, u0, u1, v - t / 2, v + t / 2, y0, y1, col);
}

/** 墙面外侧偏移（inset = 向内退入距离） */
const faceOff = (v, t, face, inset) => v + face * (t / 2 - inset);

/* ---------------------------------- 门窗 ---------------------------------- */

/**
 * 门 / 窗填充。
 * 防 Z-fighting 约定：框、棂条、门板沿「墙面法向」分层且深度互不重叠
 * （只允许共面贴合、法向相反），且框与棂条限于洞口 u/y 范围内。
 */
function doorFill(S, o) {
  const { axis, u0, u1, y0, y1, v, t, face, double = true, studs = false } = o;
  // 深度分层（inset 自墙面算起）：门框 0.12–0.42 / 门板 0.42–0.85
  const pOut = faceOff(v, t, face, 0.42);
  const pIn = faceOff(v, t, face, 0.85);
  const fOut = faceOff(v, t, face, 0.12);
  const fIn = faceOff(v, t, face, 0.42);
  const mid = (u0 + u1) / 2;
  const leaves = double ? [[u0, mid - 0.08], [mid + 0.08, u1]] : [[u0, u1]];
  for (const [a, b] of leaves) {
    put(S.solid, axis, a, b, pIn, pOut, y0, y1, C.doorRed);
    if (studs) {
      for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 2; c++) {
          const uu = a + (b - a) * ((c + 0.5) / 2);
          const vv = y0 + (y1 - y0) * ((r + 0.5) / 3);
          put(S.solid, axis, uu - 0.15, uu + 0.15, pOut, pOut + face * 0.13, vv - 0.15, vv + 0.15, C.gold);
        }
      }
    }
  }
  // 门框（限于洞口范围）
  put(S.solid, axis, u0, u0 + 0.22, fIn, fOut, y0, y1, C.woodDk);
  put(S.solid, axis, u1 - 0.22, u1, fIn, fOut, y0, y1, C.woodDk);
  put(S.solid, axis, u0, u1, fIn, fOut, y1 - 0.3, y1, C.woodDk);
}

function windowFill(S, o) {
  const { axis, u0, u1, y0, y1, v, t, face, lit = true } = o;
  // 深度分层：窗框 0.15–0.45 / 棂条 0.22–0.45（与框同层但平面错开）/ 窗板 0.45–0.9
  const pOut = faceOff(v, t, face, 0.45);
  const pIn = faceOff(v, t, face, 0.9);
  const fOut = faceOff(v, t, face, 0.15);
  const fIn = faceOff(v, t, face, 0.45);
  const lA = faceOff(v, t, face, 0.22);
  put(lit ? S.glow : S.solid, axis, u0, u1, pIn, pOut, y0, y1, lit ? C.glow : C.windowDark);
  for (let i = 1; i < 3; i++) {
    const uu = u0 + (u1 - u0) * (i / 3);
    put(S.solid, axis, uu - 0.09, uu + 0.09, fIn, lA, y0 + 0.26, y1 - 0.26, C.wood);
  }
  const vm = (y0 + y1) / 2;
  put(S.solid, axis, u0 + 0.2, u1 - 0.2, fIn, lA, vm - 0.09, vm + 0.09, C.wood);
  put(S.solid, axis, u0, u0 + 0.2, fIn, fOut, y0, y1, C.woodDk);
  put(S.solid, axis, u1 - 0.2, u1, fIn, fOut, y0, y1, C.woodDk);
  put(S.solid, axis, u0, u1, fIn, fOut, y0, y0 + 0.26, C.woodDk);
  put(S.solid, axis, u0, u1, fIn, fOut, y1 - 0.26, y1, C.woodDk);
}

/**
 * 带开口的立面：开口处门窗退入形成洞口，其余为实墙。
 * openings: [{ u0, u1, y0, y1, type: 'door'|'win', double?, studs?, lit? }]
 */
export function facade(S, o) {
  const { axis, u0, u1, v, t, y0, y1, face = 1, col = C.wallRed, openings = [] } = o;
  const ops = [...openings].sort((a, b) => a.u0 - b.u0);
  let cur = u0;
  for (const op of ops) {
    if (op.u0 > cur + 0.01) wall(S, axis, cur, op.u0, v, t, y0, y1, col);
    const oy0 = op.y0 ?? y0;
    const oy1 = op.y1 ?? y1;
    if (oy0 > y0 + 0.01) wall(S, axis, op.u0, op.u1, v, t, y0, oy0, col);
    if (y1 > oy1 + 0.01) wall(S, axis, op.u0, op.u1, v, t, oy1, y1, col);
    const args = { ...op, axis, v, t, face, y0: oy0, y1: oy1 };
    if (op.type === 'door') doorFill(S, args);
    else windowFill(S, args);
    cur = op.u1;
  }
  if (u1 > cur + 0.01) wall(S, axis, cur, u1, v, t, y0, y1, col);
}

/** 匾额：青底金框 + 抽象金字 */
export function plaque(S, { axis, u, v, t, y, face, w = 6, h = 1.9 }) {
  const vo = v + face * (t / 2);
  put(S.solid, axis, u - w / 2 - 0.22, u + w / 2 + 0.22, vo - face * 0.1, vo + face * 0.22, y - 0.22, y + h + 0.22, C.woodDk);
  put(S.solid, axis, u - w / 2, u + w / 2, vo, vo + face * 0.26, y, y + h, C.teal);
  for (let i = 0; i < 4; i++) {
    const a = u - w / 2 + 0.75 + (i * (w - 2.0)) / 3.4;
    put(S.solid, axis, a, a + 0.5, vo + face * 0.22, vo + face * 0.38, y + 0.34, y + h - 0.34, C.goldHi);
  }
}

/** 斗拱带：两跳出跳 + 散斗，沿墙面外挑 */
export function dougong(S, { axis, u0, u1, v, t = 2, y, face = 1 }) {
  const vo = v + face * (t / 2);
  put(S.solid, axis, u0, u1, vo - face * 0.25, vo + face * 0.7, y, y + 0.62, C.tealDk);
  put(S.solid, axis, u0, u1, vo - face * 0.25, vo + face * 1.2, y + 0.62, y + 1.2, C.wood);
  put(S.solid, axis, u0, u1, vo - face * 0.25, vo + face * 1.66, y + 1.2, y + 1.76, C.teal);
  const n = Math.max(2, Math.round((u1 - u0) / 3.0));
  for (let i = 0; i <= n; i++) {
    const uu = u0 + (u1 - u0) * (i / n);
    put(S.solid, axis, uu - 0.36, uu + 0.36, vo + face * 0.95, vo + face * 1.95, y + 1.76, y + 2.12, i % 2 ? C.gold : C.colRedDk);
  }
}

/* ---------------------------------- 台基·踏跺·栏杆 ---------------------------------- */

/**
 * 踏跺（台阶）：自台基边线 vEdge 向 dir 方向下行，y 为台面高度。
 * axis 为宽度方向轴；rise 自动按步数均分，末步与地面（0.15）齐平。
 */
export function stairs(S, o) {
  const {
    axis = 'x', dir = 1, vEdge, u = 0, w = 8, steps = 4, run = 1.35,
    y, col = C.stoneDk, cheek = true, cheekCol = C.stone, carve = 0,
  } = o;
  const rise = (y - 0.32) / steps; // 末级踏面高于铺装面（0.15/0.18），避免共面闪面
  for (let k = 0; k < steps; k++) {
    const top = y - (k + 1) * rise;
    const v0 = dir > 0 ? vEdge + k * run : vEdge - (k + 1) * run;
    const v1 = dir > 0 ? vEdge + (k + 1) * run : vEdge - k * run;
    put(S.solid, axis, u - w / 2, u + w / 2, v0, v1, -0.3, top, col);
    if (carve > 0) put(S.solid, axis, u - carve / 2, u + carve / 2, v0 + 0.08, v1 - 0.08, top, top + 0.2, C.stoneGy);
    if (cheek) {
      put(S.solid, axis, u - w / 2 - 1.0, u - w / 2, v0, v1, -0.3, top + 0.55, cheekCol);
      put(S.solid, axis, u + w / 2, u + w / 2 + 1.0, v0, v1, -0.3, top + 0.55, cheekCol);
    }
  }
}

/** 石栏杆：望柱 + 栏板，gaps 为开口区间（沿 u 坐标） */
export function balustrade(S, { axis, u0, u1, v, y, h = 1.5, gaps = [], col = C.stone, colPost = C.stoneDk }) {
  const inGap = (uu) => gaps.some(([a, b]) => uu > a && uu < b);
  const segs = [];
  let cur = u0;
  for (const [a, b] of [...gaps].sort((p, q) => p[0] - q[0])) {
    if (a > cur) segs.push([cur, Math.min(a, u1)]);
    cur = Math.max(cur, b);
  }
  if (cur < u1) segs.push([cur, u1]);
  for (const [a, b] of segs) {
    if (b - a < 0.4) continue;
    put(S.solid, axis, a, b, v - 0.18, v + 0.18, y + h - 0.42, y + h, col);
    put(S.solid, axis, a, b, v - 0.14, v + 0.14, y + 0.18, y + 0.5, col);
  }
  const step = 3.1;
  const n = Math.max(1, Math.round((u1 - u0) / step));
  for (let i = 0; i <= n; i++) {
    const uu = u0 + (u1 - u0) * (i / n);
    if (inGap(uu)) continue;
    put(S.solid, axis, uu - 0.3, uu + 0.3, v - 0.3, v + 0.3, y, y + h + 0.18, colPost);
    put(S.solid, axis, uu - 0.45, uu + 0.45, v - 0.45, v + 0.45, y + h + 0.18, y + h + 0.5, colPost);
  }
}

/**
 * 台基：台身 + 压沿石 + 土衬 + 可选踏跺与栏杆。
 * stairs: [{ axis, dir, u, w, steps, run, carve }]  —— vEdge 由朝向自动取台基边线。
 * railGaps: { front:[], back:[], left:[], right:[] }（沿对应边的 u 坐标）
 */
export function terrace(S, o) {
  const {
    cx, cz, w, d, h, col = C.stone, plinthCol = C.stoneDk, trimCol = C.stoneDk,
    stairs: stairList = [], rail = true, railGaps = {},
  } = o;
  S.solid.box(cx - w / 2 - 0.55, -0.35, cz - d / 2 - 0.55, w + 1.1, h * 0.42 + 0.35, d + 1.1, plinthCol);
  S.solid.box(cx - w / 2, -0.1, cz - d / 2, w, h - 0.35 + 0.1, d, col);
  S.solid.box(cx - w / 2 - 0.32, h - 0.35, cz - d / 2 - 0.32, w + 0.64, 0.35, d + 0.64, trimCol);

  for (const st of stairList) {
    const edge = st.axis === 'x'
      ? cz + (st.dir > 0 ? d / 2 : -d / 2)
      : cx + (st.dir > 0 ? w / 2 : -w / 2);
    stairs(S, { ...st, vEdge: edge, y: h, run: st.run ?? 1.35 });
  }

  if (rail && h >= 1.6) {
    balustrade(S, { axis: 'x', u0: cx - w / 2 + 0.6, u1: cx + w / 2 - 0.6, v: cz + d / 2 - 0.55, y: h, gaps: railGaps.front ?? [] });
    balustrade(S, { axis: 'x', u0: cx - w / 2 + 0.6, u1: cx + w / 2 - 0.6, v: cz - d / 2 + 0.55, y: h, gaps: railGaps.back ?? [] });
    balustrade(S, { axis: 'z', u0: cz - d / 2 + 0.6, u1: cz + d / 2 - 0.6, v: cx - w / 2 + 0.55, y: h, gaps: railGaps.left ?? [] });
    balustrade(S, { axis: 'z', u0: cz - d / 2 + 0.6, u1: cz + d / 2 - 0.6, v: cx + w / 2 - 0.55, y: h, gaps: railGaps.right ?? [] });
  }
}

/* ---------------------------------- 小品 ---------------------------------- */

/** 红灯笼（自 (x, y, z) 中心向下悬垂） */
export function lantern(S, { x, y, z, s = 1, cord = 1.1 }) {
  const w = 1.05 * s;
  S.solid.box(x - 0.06 * s, y + w * 0.6, z - 0.06 * s, 0.12 * s, cord, 0.12 * s, C.woodDk);
  S.glow.box(x - w / 2, y - w * 0.62, z - w / 2, w, w * 1.25, w, C.lantern);
  S.tile.box(x - w * 0.58, y + w * 0.5, z - w * 0.58, w * 1.16, 0.2 * s, w * 1.16, C.gold);
  S.tile.box(x - w * 0.58, y - w * 0.68, z - w * 0.58, w * 1.16, 0.2 * s, w * 1.16, C.gold);
  S.solid.box(x - 0.12 * s, y - w * 1.15, z - 0.12 * s, 0.24 * s, 0.5 * s, 0.24 * s, C.goldHi);
}

/** 石灯幢 */
export function stoneLamp(S, { x, z, y = 0 }) {
  S.solid.box(x - 0.95, y, z - 0.95, 1.9, 0.45, 1.9, C.stoneDk);
  S.solid.box(x - 0.38, y + 0.45, z - 0.38, 0.76, 2.0, 0.76, C.stone);
  S.glow.box(x - 0.6, y + 2.45, z - 0.6, 1.2, 1.1, 1.2, C.glow);
  S.solid.box(x - 0.68, y + 2.2, z - 0.68, 0.2, 1.15, 0.2, C.stoneDk);
  S.tile.box(x - 1.0, y + 3.55, z - 1.0, 2.0, 0.42, 2.0, C.tileGrayDk);
  S.tile.box(x - 0.6, y + 3.97, z - 0.6, 1.2, 0.34, 1.2, C.tileGrayDk);
  S.solid.box(x - 0.2, y + 4.31, z - 0.2, 0.4, 0.4, 0.4, C.stone);
}

/** 松树（分层伞盖） */
export function pine(S, { x, z, y = 0, h = 10, tone = 0 }) {
  const trunk = h * 0.5;
  S.solid.box(x - 0.7, y, z - 0.7, 1.4, trunk, 1.4, C.wood);
  const sizes = [5.4, 4.4, 3.4, 2.3];
  for (let i = 0; i < 4; i++) {
    const s = sizes[i] * (0.85 + (h / 12) * 0.2);
    const yy = y + trunk - 0.6 + i * (h * 0.135);
    const ox = (i % 2 ? 0.35 : -0.3) * (tone ? -1 : 1);
    const oz = (i % 2 ? -0.25 : 0.3) * (tone ? -1 : 1);
    S.solid.box(x + ox - s / 2, yy, z + oz - s / 2, s, 1.35, s, (i + tone) % 2 ? C.pineHi : C.pine);
  }
}

/** 阔叶树（方块树冠） */
export function broadTree(S, { x, z, y = 0, h = 9, tone = 0 }) {
  S.solid.box(x - 0.65, y, z - 0.65, 1.3, h * 0.55, 1.3, C.wood);
  const c = [[0, 0, 0, 4.6], [1.6, 1.1, 0.6, 3.2], [-1.5, 1.0, -0.8, 3.0], [0.2, 2.3, -0.2, 2.6]];
  for (let i = 0; i < c.length; i++) {
    const [ox, oy, oz, s] = c[i];
    const sgn = tone ? -1 : 1;
    S.solid.box(
      x + ox * sgn - s / 2, y + h * 0.5 + oy, z + oz * sgn - s / 2,
      s, s * 0.72, s, i % 2 ? C.grassHi : C.grassDk
    );
  }
}

/** 石狮（面朝 +z） */
export function stoneLion(S, { x, z, y = 0, s = 1 }) {
  const B = S.solid;
  const bx = (dx, yy, dz, w, h, d, col) => B.box(x + dx * s, y + yy * s, z + dz * s, w * s, h * s, d * s, col);
  // 基座
  bx(-2.1, 0, -1.7, 4.2, 0.5, 3.4, C.stoneDk);
  bx(-1.8, 0.5, -1.5, 3.6, 1.5, 3.0, C.stone);
  bx(-2.0, 2.0, -1.65, 4.0, 0.35, 3.3, C.stoneDk);
  // 身躯
  bx(-1.25, 2.35, -1.05, 2.5, 1.6, 1.9, C.lion);
  bx(-1.0, 2.35, 0.45, 2.0, 2.2, 1.5, C.lion);
  bx(-0.9, 2.35, 1.3, 0.7, 1.5, 0.8, C.lionDk);
  bx(0.2, 2.35, 1.3, 0.7, 1.5, 0.8, C.lionDk);
  bx(-1.0, 2.35, 1.7, 0.9, 0.55, 0.9, C.lionDk);
  bx(0.1, 2.35, 1.7, 0.9, 0.55, 0.9, C.lionDk);
  // 头部
  bx(-1.05, 4.35, 0.4, 2.1, 1.7, 1.8, C.lion);
  bx(-0.6, 4.5, 1.95, 1.2, 0.8, 0.6, C.lionDk);
  bx(-0.85, 5.85, 0.55, 1.7, 0.4, 1.3, C.lionDk);
  bx(-1.2, 5.6, 0.15, 0.5, 0.5, 0.5, C.lionDk);
  bx(0.7, 5.6, 0.15, 0.5, 0.5, 0.5, C.lionDk);
  // 鬃毛卷
  bx(-1.35, 4.1, -0.1, 0.5, 0.5, 0.5, C.lionDk);
  bx(0.85, 4.1, -0.1, 0.5, 0.5, 0.5, C.lionDk);
  bx(-1.3, 3.55, 0.3, 0.45, 0.45, 0.45, C.lionDk);
  bx(0.85, 3.55, 0.3, 0.45, 0.45, 0.45, C.lionDk);
  // 尾 + 绣球
  bx(0.7, 3.5, -1.35, 0.5, 1.1, 0.5, C.lionDk);
  bx(0.6, 4.5, -1.15, 0.5, 0.5, 0.8, C.lionDk);
  bx(-1.45, 2.35, 1.45, 0.95, 0.95, 0.95, C.stoneDk);
}

/** 院墙（含灰瓦帽、墙柱）；gaps 为开口区间（沿 u 坐标） */
export function wallRun(S, { axis, u0, u1, v, t = 2.4, h = 7.2, gaps = [] }) {
  const segs = [];
  let cur = u0;
  for (const [a, b] of [...gaps].sort((p, q) => p[0] - q[0])) {
    if (a > cur) segs.push([cur, a]);
    cur = Math.max(cur, b);
  }
  if (cur < u1) segs.push([cur, u1]);
  for (const [a, b] of segs) {
    if (b - a < 0.3) continue;
    put(S.solid, axis, a, b, v - t / 2, v + t / 2, -0.3, 1.0, C.stoneDk);
    put(S.solid, axis, a, b, v - t / 2, v + t / 2, 1.0, h - 0.9, C.wallRed);
    put(S.tile, axis, a, b, v - t / 2 - 0.4, v + t / 2 + 0.4, h - 0.9, h - 0.3, C.tileGray);
    put(S.tile, axis, a, b, v - t / 2 - 0.05, v + t / 2 + 0.05, h - 0.3, h + 0.35, C.tileGrayDk);
    const n = Math.max(1, Math.round((b - a) / 9));
    for (let i = 0; i <= n; i++) {
      const uu = a + (b - a) * (i / n);
      if (i === 0 && a > u0 + 0.1) continue;
      if (i === n && b < u1 - 0.1) continue;
      put(S.solid, axis, uu - 1.2, uu + 1.2, v - t / 2 - 0.2, v + t / 2 + 0.2, -0.3, h - 0.9, C.wallRedDk);
      put(S.tile, axis, uu - 1.4, uu + 1.4, v - t / 2 - 0.45, v + t / 2 + 0.45, h - 0.3, h + 0.7, C.tileGray);
      put(S.tile, axis, uu - 1.0, uu + 1.0, v - t / 2 - 0.1, v + t / 2 + 0.1, h + 0.7, h + 1.15, C.tileGrayDk);
    }
  }
}
