/**
 * parts.js —— 通用构件库（A2）。所有建筑模块共用；roof() 是全场景唯一屋顶入口。
 *
 * 契约假设（按 SPEC §2 最保守解释）：
 *  - 坐标为整数体素格、Y 向上、世界绝对坐标；1 voxel ≈ 0.35m。
 *  - 只调用 VoxelWorld 的 set/fill/shell/cylY/ell/prism/get。
 *  - tile / color 类参数既可能是数值色，也可能是 P 的键名字符串（如 'glazedYellow'），
 *    内部一律用 c2() 归一化。
 *  - 对称性：成对构件用 mir(v,lo,hi)=lo+hi-v 取镜像，杜绝 1 格偏移。
 *  - 体素预算极紧：墙/台基侧面默认 1–2 格厚（只画可见皮）、屋顶走阶梯壳、
 *    terrace 支持可选 inner（顶面只画可见环带）。
 *  - 部分函数在 SPEC 签名之外支持**可选**扩展键（inner/thick/dir/fitX/fitZ/axis/text/
 *    holes/at/shan/gapBoxes…），不传即退回 SPEC 默认行为。
 *  - doorPanel/windowPanel/plaque 方向约定：(x,z) = 墙面外皮，dir = 该墙朝外的一面；
 *    内部 d>0 向墙身内、d<0 向外挑。
 */
import { P } from '../config.js';

export const ROOF_TYPE = {
  WUDIAN: 'wudian',
  XIESHAN: 'xieshan',
  ZHUANJIAN: 'zhuanjian',
  XUANSHAN: 'xuanshan',
  FLAT: 'flat',
};

/* ----------------------------------------------------------------- helpers */
const rr = Math.round;
function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
/** 数值色 / P 键名 / 缺省 三态归一 */
function c2(v, fb) {
  if (typeof v === 'string') { const k = P[v]; return k === undefined ? fb : k; }
  if (v === undefined || v === null) return fb;
  return v | 0;
}
function shade(hex, k) {
  const r = (hex >> 16) & 255, g = (hex >> 8) & 255, b = hex & 255;
  const f = (v) => clamp(rr(k >= 0 ? v + (255 - v) * k : v * (1 + k)), 0, 255);
  return (f(r) << 16) | (f(g) << 8) | f(b);
}
function hash3(x, y, z) {
  let h = Math.imul(x | 0, 73856093) ^ Math.imul(y | 0, 19349663) ^ Math.imul(z | 0, 83492791);
  h ^= h >>> 13;
  return (h >>> 0) / 4294967296;
}
/** 关于 [lo,hi] 的严格镜像（供各 builder 复用，保证左右对称） */
export function mir(v, lo, hi) { return lo + hi - v; }
/**
 * 八角（|x|≤a、|z|≤a、|x|+|z|≤a√2）**第 a 圈环带**的格子（第一象限，含轴）。
 * 用环带而不是"轮廓线"，否则相邻半径的轮廓线之间会留斜向漏孔（攒尖/塔檐穿帮）。
 */
function octBand(a) {
  const out = [];
  if (a <= 0) return [[0, 0]];
  const bo = (r, x) => Math.min(r, rr(r * Math.SQRT2 - x));   // 八角外边界 z(x)
  for (let x = 0; x <= a; x++) {
    const zo = bo(a, x);
    const zi = x <= a - 1 ? bo(a - 1, x) : -1;
    for (let z = Math.max(0, zi + 1); z <= zo; z++) out.push([x, z]);
  }
  return out;
}
/**
 * 归一化 L 里的建筑盒范围：L 中 x0/x1/z0/z1 可能是**绝对**坐标（gate/tianwang/rearHall），
 * 也可能是相对 cx/cz 的偏移（mainHall.hall/core）。统一按"以 (cx,cz) 为中心的半跨"重算，
 * 两种写法都能落到正确的中轴位置上，且保证左右严格对称。
 */
export function centerBox(o = {}) {
  const cx = rr(o.cx ?? 0), cz = rr(o.cz ?? 0);
  const x0 = o.x0 ?? -10, x1 = o.x1 ?? 10, z0 = o.z0 ?? -10, z1 = o.z1 ?? 10;
  const hx = Math.max(2, rr(Math.abs(x1 - x0) / 2)), hz = Math.max(2, rr(Math.abs(z1 - z0) / 2));
  return { cx, cz, hx, hz, x0: cx - hx, x1: cx + hx, z0: cz - hz, z1: cz + hz };
}
function box2(a, b) { const x = a | 0, y = b | 0; return x <= y ? [x, y] : [y, x]; }

/**
 * **删除"六面全被同批体素包住"的格子**（内部空腔 / 实心柱芯 / 双层墙的内皮）。
 * VoxelWorld 的隐藏面剔除只对"无暴露面"的格子不出几何，但 `count()` 仍计入预算；
 * 这些格子既不产生三角面，也不会改变任何邻格的 AO（被删格的邻位若有一面暴露，
 * 该面的侧向邻格必在更外层），所以删除是**画面零差异**的纯瘦身。
 * 各 builder 末尾调用一次；只检查本 world 的 solid 层（glow 不遮实体面，故保守保留）。
 */
export function cullHidden(w) {
  if (!w || !(w.solid instanceof Map)) return 0;
  const S = w.solid;
  const OFF = 2048, SPAN = 4096;
  const KY = SPAN, KX = SPAN * SPAN;
  let n = 0;
  for (const k of S.keys()) {
    if (S.has(k - KX) && S.has(k + KX) && S.has(k - KY) && S.has(k + KY) && S.has(k - 1) && S.has(k + 1)) {
      S.delete(k);
      if (w._noJitter) w._noJitter.delete(k);
      n++;
    }
  }
  return n;
}

/** 等分对称布点（含两端）：先取点再补镜像，保证严格左右对称 */
function symPos(lo, hi, step) {
  lo = lo | 0; hi = hi | 0;
  const span = hi - lo;
  if (span <= 0) return [lo];
  const n = Math.max(1, rr(span / Math.max(1, step)));
  const set = new Set([lo, hi]);
  for (let i = 1; i < n; i++) {
    const a = lo + rr((span * i) / n);
    set.add(a); set.add(lo + hi - a);
  }
  return [...set].sort((x, y) => x - y);
}
/**
 * 关于 [lo,hi] 中轴的对称相位：p 距中点为 step 整数倍时为 true
 * （用来画分缝/栏板/壁柱等"装饰等分"，避免以 lo 为相位造成左右不对称）
 */
function isRib(p, lo, hi, step) {
  const m = Math.abs(2 * p - lo - hi);
  return ((lo + hi) & 1) === 0 ? m % (2 * step) === 0 : m % (2 * step) === step;
}

/**
 * 局部坐标框架：flip=true 时把"局部 X"映射到"世界 Z"（屋脊沿 Z），
 * 绕 (cx,cz) 做转置，中心与左右对称严格保持。
 */
function frame(w, cx, cz, flip) {
  if (!flip) {
    return {
      set: (x, y, z, c, o) => w.set(x, y, z, c, o),
      box: (x0, y0, z0, x1, y1, z1, c, o) => { if (x0 <= x1 && y0 <= y1 && z0 <= z1) w.fill(x0, y0, z0, x1, y1, z1, c, o); },
      px: (x) => x, pz: (z) => z,
    };
  }
  return {
    set: (x, y, z, c, o) => w.set(cx + (z - cz), y, cz + (x - cx), c, o),
    box: (x0, y0, z0, x1, y1, z1, c, o) => {
      if (x0 > x1 || y0 > y1 || z0 > z1) return;
      const a = cx + (z0 - cz), b = cz + (x0 - cx), d = cx + (z1 - cz), e = cz + (x1 - cx);
      w.fill(Math.min(a, d), y0, Math.min(b, e), Math.max(a, d), y1, Math.max(b, e), c, o);
    },
    px: (x) => x, pz: (z) => z,
  };
}

/* ------------------------------------------------------- 2.1 台基 / 石作 */

/**
 * 石台基：外圈露砌 + 角柱 + 顶面压顶石 + 散水。
 * o = {x0,x1,z0,z1,y0,y1,face=P.stone,cap=P.marble,skirt=2,thick=1,inner,seam,lineStep}
 *   inner = {x0,x1,z0,z1}：顶面该范围内不画（被内层台基/建筑遮住，省体素）
 */
export function terrace(w, o = {}) {
  const [x0, x1] = box2(o.x0, o.x1);
  const [z0, z1] = box2(o.z0, o.z1);
  const [y0, y1] = box2(o.y0, o.y1 !== undefined ? o.y1 : o.y0 + 5);
  const face = c2(o.face, P.stone), cap = c2(o.cap, P.marble);
  const thick = clamp(o.thick ?? 1, 1, 3);
  const skirt = Math.max(0, o.skirt ?? 2);
  const topY = y1 - 1;
  const seam = c2(o.seam, P.marbleLine);
  const lineStep = o.lineStep ?? 4;
  const h = topY - y0 + 1;

  if (h > 0) {
    w.fill(x0, y0, z0, x1, topY, z0 + thick - 1, face);
    w.fill(x0, y0, z1 - thick + 1, x1, topY, z1, face);
    w.fill(x0, y0, z0, x0 + thick - 1, topY, z1, face);
    w.fill(x1 - thick + 1, y0, z0, x1, topY, z1, face);
    const cc = shade(face, -0.18);                    // 角柱/护角石
    for (const [ax, az] of [[x0, z0], [x1, z0], [x0, z1], [x1, z1]]) {
      const dx = ax === x0 ? 1 : -1, dz = az === z0 ? 1 : -1;
      for (let y = y0; y <= topY; y++) {
        w.set(ax, y, az, cc);
        w.set(ax + dx, y, az, cc);
        w.set(ax, y, az + dz, cc);
      }
    }
    for (let y = y0 + 2; y < topY; y += lineStep) {   // 露砌分缝
      w.fill(x0, y, z0, x1, y, z0, seam);
      w.fill(x0, y, z1, x1, y, z1, seam);
      w.fill(x0, y, z0, x0, y, z1, seam);
      w.fill(x1, y, z0, x1, y, z1, seam);
    }
  }
  if (!o.inner) {
    w.fill(x0, topY, z0, x1, topY, z1, cap);
  } else {
    const [ix0, ix1] = box2(o.inner.x0, o.inner.x1);
    const [jz0, jz1] = box2(o.inner.z0, o.inner.z1);
    if (jz0 > z0) w.fill(x0, topY, z0, x1, topY, jz0 - 1, cap);
    if (jz1 < z1) w.fill(x0, topY, Math.max(z0, jz1 + 1), x1, topY, z1, cap);
    const zz0 = Math.max(z0, jz0), zz1 = Math.min(z1, jz1);
    if (ix0 > x0) w.fill(x0, topY, zz0, ix0 - 1, topY, zz1, cap);
    if (ix1 < x1) w.fill(Math.max(x0, ix1 + 1), topY, zz0, x1, topY, zz1, cap);
  }
  for (const z of [z0, z1]) for (let x = x0; x <= x1; x += lineStep) w.set(x, topY, z, seam);
  for (const x of [x0, x1]) for (let z = z0; z <= z1; z += lineStep) w.set(x, topY, z, seam);

  if (skirt > 0 && y0 <= 1)                            // 散水（左右对称分缝）
  for (let d = 1; d <= skirt; d++) {
    const sc = shade(cap, -0.26);
    for (let x = x0 - d; x <= x1 + d; x++) {
      const tint = isRib(x, x0 - d, x1 + d, lineStep) ? shade(sc, 0.12) : sc;
      w.set(x, y0, z0 - d, tint);
      w.set(x, y0, z1 + d, tint);
    }
    for (let z = z0; z <= z1; z++) {
      const tint = isRib(z, z0, z1, lineStep) ? shade(sc, 0.12) : sc;
      w.set(x0 - d, y0, z, tint);
      w.set(x1 + d, y0, z, tint);
    }
  }
}

/**
 * 台阶：逐层踏跺 + 两侧垂带石 + 中间御路（斜石道 boolu）+ 下踏。
 * o = {dir:'S'|'N'|'E'|'W', at, x0,x1,z0,z1, y0,y1, color=P.marble, boolu=true, booluW=7}
 *   dir:'S' = 自南面上（向 +Z 逐级降低）；at = 台基该边坐标。
 */
export function stairs(w, o = {}) {
  const dir = (o.dir || 'S').toUpperCase();
  const alongX = dir === 'S' || dir === 'N';
  const cw = Math.max(3, rr(o.w ?? 9));                     // SPEC：只给 w 时按中线对称展开
  const midv = rr(o.mid ?? (alongX ? (o.cx ?? 0) : (o.cz ?? 0)));
  const fb = [midv - ((cw - 1) >> 1), midv + (cw >> 1)];
  const [bx0, bx1] = alongX
    ? ((o.x0 !== undefined || o.x1 !== undefined) ? box2(o.x0, o.x1) : fb)
    : ((o.z0 !== undefined || o.z1 !== undefined) ? box2(o.z0, o.z1) : fb);
  const [y0, y1] = box2(o.y0, o.y1);
  const run = y1 - y0;
  if (run <= 0) return;
  const col = c2(o.color, P.marble);
  const line = shade(col, -0.18);
  const dark = shade(col, -0.34);
  const boolu = o.boolu !== false;
  const bw = o.booluW ?? 7;
  const cxB = (bx0 + bx1) >> 1;
  const wide = bx1 - bx0 + 1;
  const half = (boolu && wide > bw + 6) ? (bw - 1) >> 1 : -1;
  const segs = half >= 0 ? [[bx0, cxB - half - 1], [cxB + half + 1, bx1]] : [[bx0, bx1]];
  const edge = alongX ? box2(o.z0, o.z1) : box2(o.x0, o.x1);
  const E = o.at !== undefined ? (o.at | 0)
    : (dir === 'S' ? edge[1] : dir === 'N' ? edge[0] : dir === 'E' ? edge[1] : edge[0]);
  const sgn = (dir === 'S' || dir === 'E') ? 1 : -1;

  const putBox = (a0, a1, y, b0, b1, c) => {
    if (a1 < a0 || b1 < b0) return;
    if (alongX) w.fill(a0, y, b0, a1, y, b1, c === undefined ? col : c);
    else w.fill(b0, y, a0, b1, y, a1, c === undefined ? col : c);
  };
  const putEdge = (a, y, b, c) => {
    if (alongX) w.fill(a, y0, b, a, y, b, c); else w.fill(b, y0, a, b, y, a, c);
  };
  const put1 = (a, y, b, c) => { if (alongX) w.set(a, y, b, c); else w.set(b, y, a, c); };

  for (let i = 0; i < run; i++) {                    // 两侧踏跺 + 垂带石
    const y = y0 + i;
    const b = E + sgn * (run - 1 - i);               // 越低越靠外
    const depth = o.treadDepth ?? 1;
    for (const [s0, s1] of segs) {
      putBox(s0, s1, y, b - (sgn > 0 ? depth - 1 : 0), b + (sgn > 0 ? 0 : depth - 1));
      putBox(s0, s1, y, b, b, line);
    }
    putEdge(bx0, y, b, dark);
    putEdge(bx1, y, b, dark);
  }
  putBox(bx0, bx1, y0, E + sgn * run, E + sgn * run, line);   // 下踏

  if (half >= 0) {                                   // 御路：连续斜石道 + 云纹浮雕
    for (let i = 0; i <= run; i++) {
      const y = y0 + i;
      const b = E + sgn * (run - i);
      const b2 = E + sgn * (run - i - 1);
      putBox(cxB - half, cxB + half, y, Math.min(b, b2), Math.max(b, b2), col);
      const motif = (i % 3 === 1) ? shade(col, -0.16) : shade(col, 0.14);
      const off = (Math.floor(i / 2) % 2) ? 1 : 0;
      for (let k = off; k <= half; k += 2) { put1(cxB + k, y, b, motif); put1(cxB - k, y, b, motif); }
      put1(cxB - half - 1, y, b, dark);
      put1(cxB + half + 1, y, b, dark);
    }
  }
}

/** 单侧栏杆（游廊坐凳栏杆 / 台基一边） */
export function railing(w, o = {}) {
  const dir = (o.dir || 'S').toUpperCase();
  const alongX = dir === 'S' || dir === 'N';
  const [bx0, bx1] = alongX ? box2(o.x0, o.x1) : box2(o.z0, o.z1);
  const edge = alongX ? box2(o.z0, o.z1) : box2(o.x0, o.x1);
  const at = o.at !== undefined ? (o.at | 0)
    : (dir === 'S' ? edge[1] : dir === 'N' ? edge[0] : dir === 'E' ? edge[1] : edge[0]);
  railRun(w, alongX, bx0, bx1, at, c2(o.color, P.marble), o.postStep ?? 7, o.y ?? 0, o.h ?? 4, o.gapBoxes);
}

/**
 * 寻杖栏杆一圈：望柱 + 地栿/寻杖 + 栏板。
 * o = {x0,x1,z0,z1,y,color=P.marble,postStep=5,
 *      gapBoxes（=南面缺口）, gapBoxesN, gapBoxesE, gapBoxesW, gapBoxesZ（=东西通用）}
 */
export function balustrade(w, o = {}) {
  const [x0, x1] = box2(o.x0, o.x1);
  const [z0, z1] = box2(o.z0, o.z1);
  const y = o.y !== undefined ? (o.y | 0) : (o.y1 !== undefined ? o.y1 | 0 : 0);
  const col = c2(o.color, P.marble);
  const step = o.postStep ?? 5;
  const h = o.h ?? 4;
  const mk = (arr) => (arr || []).map(g => box2(g[0], g[1]));
  const gS = mk(o.gapBoxes || o.gapBoxesS);
  const gN = mk(o.gapBoxesN || []);
  const gE = mk(o.gapBoxesE || o.gapBoxesZ);
  const gW = mk(o.gapBoxesW || o.gapBoxesZ);
  railRun(w, true, x0, x1, z1, col, step, y, h, gS);      // S
  railRun(w, true, x0, x1, z0, col, step, y, h, gN);      // N
  railRun(w, false, z0, z1, x1, col, step, y, h, gE);     // E
  railRun(w, false, z0, z1, x0, col, step, y, h, gW);     // W
}

function railRun(w, alongX, lo, hi, at, col, step, y, h, gaps) {
  if (hi <= lo) return;
  const posts = symPos(lo, hi, step);
  const top = y + h;
  const skip = (p) => (gaps || []).some(g => p >= g[0] - 1 && p <= g[1] + 1);
  const c0 = shade(col, 0.08), c1 = shade(col, -0.14), c2v = shade(col, -0.32);
  for (let i = 0; i < posts.length; i++) {
    const p = posts[i];
    const corner = (i === 0 || i === posts.length - 1);
    if (!corner && skip(p)) continue;
    if (corner) {                                   // 角柱：3 格宽平板（两面相接成方角柱）
      const a0 = Math.max(lo, p - 1), a1 = Math.min(hi, p + 1);
      if (alongX) w.fill(a0, y, at, a1, top, at, col);
      else w.fill(at, y, a0, at, top, a1, col);
      if (alongX) { w.set(p, top + 1, at, c0); w.set(p, top + 2, at, c1); }
      else { w.set(at, top + 1, p, c0); w.set(at, top + 2, p, c1); }
    } else {                                        // 中间望柱：1 格柱身 + 1 格柱头
      if (alongX) { w.fill(p, y, at, p, top, at, col); w.set(p, top + 1, at, c0); }
      else { w.fill(at, y, p, at, top, p, col); w.set(at, top + 1, p, c0); }
    }
  }
  // 地栿 + 寻杖 + 一道栏板（透瓶缺口）—— 每格 3 层，控制体素量
  let cur = null;
  const flush = () => {
    if (!cur) return;
    for (let p = cur[0]; p <= cur[1]; p++) {
      if (skip(p)) continue;
      if (alongX) {
        w.set(p, y, at, col);
        w.set(p, top, at, c0);
        if (!isRib(p, lo, hi, 3)) w.set(p, y + 2, at, c2v);
      } else {
        w.set(at, y, p, col);
        w.set(at, top, p, c0);
        if (!isRib(p, lo, hi, 3)) w.set(at, y + 2, p, c2v);
      }
    }
    cur = null;
  };
  for (let p = lo; p <= hi; p++) { if (skip(p)) flush(); else if (!cur) cur = [p, p]; else cur[1] = p; }
  flush();
}

/** SPEC 标注 optional 的实心坡道 */
export function rampSolid(w, o = {}) {
  const [x0, x1] = box2(o.x0 ?? 0, o.x1 ?? 4);
  const [z0, z1] = box2(o.z0 ?? 0, o.z1 ?? 10);
  const [y0, y1] = box2(o.y0 ?? 0, o.y1 ?? 6);
  const col = c2(o.color, P.stone);
  for (let z = z0; z <= z1; z++) {
    const y = y1 - rr((y1 - y0) * (z - z0) / Math.max(1, z1 - z0));
    w.fill(x0, y0, z, x1, y, z, col);
  }
}

/* ------------------------------------------------------------- 2.2 木构 */

/**
 * 柱网：沿矩形四面布檐柱（含角柱）。
 * o = {x0,x1,z0,z1,y0,h,step=8,size=3,color=P.vermilion,entasis=true,xs,zs,base=P.stone}
 * 断面：**外接 3×3 不变（轮廓/柱径观感不变），但柱身只出"十字"5 格**——
 * 四角格去掉后读作"抹棱/圆柱"，比实心 3×3 更接近实物柱径（7m 柱 ≈0.6m ≈ 1.7 格），
 * 中心格反正六面包围会被 cullHidden 清掉，等于每层省 4 格。
 * size<=2 → 更细的 1×1 小柱（游廊/小亭用），柱础柱头仍留 3×3。
 */
export function columns(w, o = {}) {
  const [x0, x1] = box2(o.x0, o.x1);
  const [z0, z1] = box2(o.z0, o.z1);
  const y0 = o.y0 | 0;
  const h = Math.max(2, o.h ?? 10);
  const y1 = y0 + h - 1;
  const size = clamp(o.size ?? 3, 1, 5);
  const half = (size - 1) >> 1;
  const thin = size <= 2;
  const col = c2(o.color, P.vermilion);
  const colD = shade(col, -0.22);
  const colL = shade(col, 0.14);
  const colS = shade(col, -0.1);
  const en = o.entasis !== false;
  const bs = en ? (thin ? 1 : half + 1) : 0;               // 柱础外挑格数
  const xs = o.xs || symPos(x0, x1, o.step ?? 8);
  const zs = o.zs || symPos(z0, z1, o.step ?? 8);
  const done = new Set();
  const one = (px, pz) => {
    const key = px + ',' + pz;
    if (done.has(key)) return;
    done.add(key);
    const yy0 = y0 + (en ? 1 : 0);
    if (en) w.fill(px - bs, y0, pz - bs, px + bs, y0, pz + bs, c2(o.base, P.stone));
    if (thin) {
      w.fill(px, yy0, pz, px, y1 - 1, pz, col);
      w.fill(px - 1, y1, pz - 1, px + 1, y1, pz + 1, colD);            // 柱头坐斗
      w.set(px, yy0, pz, colL);
      return;
    }
    w.fill(px, yy0, pz, px, y1 - 1, pz, col);                          // 十字柱身：中芯
    for (const [ax, az] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {       // 四向凸缘（受光面分层）
      const c = ax === 0 ? (az > 0 ? col : colL) : (ax > 0 ? colS : col);
      w.fill(px + ax, yy0, pz + az, px + ax, y1 - 1, pz + az, c);
    }
    w.fill(px - half, y1, pz - half, px + half, y1, pz + half, colD);  // 卷杀/侧脚（柱头 3×3）
  };
  for (const x of xs) { one(x, z0); one(x, z1); }
  for (const z of zs) { one(x0, z); one(x1, z); }
}

/** 额枋（沿 X） */
export function beam(w, o = {}) {
  const [x0, x1] = box2(o.x0, o.x1);
  const y = o.y | 0, z = o.z | 0;
  const size = clamp(o.size ?? 3, 1, 6);
  const half = (size - 1) >> 1;
  const col = c2(o.color, P.beamGreen);
  w.fill(x0, y, z - half, x1, y + size - 1, z + half, col);
  w.fill(x0, y + size - 1, z - half, x1, y + size - 1, z + half, shade(col, 0.16));
  w.fill(x0, y, z - half, x1, y, z + half, shade(col, -0.24));
  if (o.paint !== false) for (let x = x0 + 2; x < x1; x += 6) w.fill(x, y + 1, z + half, x + 1, y + 1, z + half, c2(o.gold, P.gold));
}

/** 额枋（沿 Z） */
export function beamZ(w, o = {}) {
  const [z0, z1] = box2(o.z0, o.z1);
  const y = o.y | 0, x = o.x | 0;
  const size = clamp(o.size ?? 3, 1, 6);
  const half = (size - 1) >> 1;
  const col = c2(o.color, P.beamGreen);
  w.fill(x - half, y, z0, x + half, y + size - 1, z1, col);
  w.fill(x - half, y + size - 1, z0, x + half, y + size - 1, z1, shade(col, 0.16));
  w.fill(x - half, y, z0, x + half, y, z1, shade(col, -0.24));
  if (o.paint !== false) for (let z = z0 + 2; z < z1; z += 6) w.fill(x + half, y + 1, z, x + half, y + 1, z + 1, c2(o.gold, P.gold));
}

/**
 * 一朵斗拱：栌斗 + 逐层出跳横拱 + 斜昂嘴 + 散斗；face 决定出跳方向。
 * （体素预算紧：每跳只用 1 行横拱 + 1 线跳头 + 单格散斗，靠色彩分层读_out_斗拱组）
 * o = {x,z,y,face='S'|'N'|'E'|'W',tiers=2,size=3,color=P.beamGreen,gold=P.gold,blue}
 */
export function dougong(w, o = {}) {
  const x = o.x | 0, z = o.z | 0, y0 = o.y | 0;
  const face = (o.face || 'S').toUpperCase();
  const alongX = face === 'S' || face === 'N';
  const out = (face === 'S' || face === 'E') ? 1 : -1;
  const tiers = clamp(o.tiers ?? 2, 1, 4);
  const size = clamp(o.size ?? 3, 1, 5);
  const sh = (size - 1) >> 1;
  const g = c2(o.color, P.beamGreen);
  const gd = c2(o.gold, P.gold);
  const blue = c2(o.blue, P.beamBlue);
  const set = (a, y, d, c) => { if (alongX) w.set(x + a, y, z + out * d, c); else w.set(x + out * d, y, z + a, c); };
  const row = (a0, a1, y, d, c) => { for (let a = a0; a <= a1; a++) set(a, y, d, c); };
  // 栌斗（2×2 方斗 + 底）
  row(-1, 1, y0, -1, shade(g, -0.15));
  row(-1, 1, y0, 0, g);
  row(-1, 1, y0 + 1, 0, shade(g, 0.12));
  let y = y0 + 2;
  for (let i = 0; i < tiers; i++) {
    const arm = sh + 2 + i * 2;                          // 出跳
    const wid = sh + 1 + i;                              // 横拱半长
    const c = i % 2 ? shade(g, -0.14) : blue;
    for (let d = 0; d <= arm; d++) set(0, y, d, c);      // 跳头（出挑方向，中列）
    row(-wid, wid, y, 0, shade(c, 0.18));                // 横拱
    for (const a of [-wid, wid]) set(a, y, 1, c);
    for (const a of [-wid, 0, wid]) set(a, y + 1, arm, gd);          // 散斗
    set(0, y + 1, arm - 1, gd);
    if (i === 0) {                                       // 斜昂嘴
      set(0, y - 1, arm + 1, shade(c, -0.2));
      set(0, y, arm + 1, shade(c, -0.2));
      set(0, y - 1, arm + 2, gd);
    }
    y += 2;
  }
  for (let d = 0; d <= 1; d++) row(-sh - 1, sh + 1, y - 1, d, shade(g, 0.18));   // 顶帽（替木/撩檐枋）
}

/**
 * 一列斗拱。o = {dir:'S'|'N'|'E'|'W', x0,x1,z0,z1, at?, y, step=6, tiers=2, color, xs}
 */
export function dougongRow(w, o = {}) {
  const dir = (o.dir || 'S').toUpperCase();
  const alongX = dir === 'S' || dir === 'N';
  const [bx0, bx1] = alongX ? box2(o.x0, o.x1) : box2(o.z0, o.z1);
  const edge = alongX ? box2(o.z0, o.z1) : box2(o.x0, o.x1);
  const at = o.at !== undefined ? (o.at | 0)
    : (dir === 'S' ? edge[1] : dir === 'N' ? edge[0] : dir === 'E' ? edge[1] : edge[0]);
  const y = o.y | 0;
  const positions = o.xs || symPos(bx0, bx1, o.step ?? 6);
  for (const p of positions) {
    if (alongX) dougong(w, { x: p, z: at, y, face: dir, tiers: o.tiers, size: o.size, color: o.color, gold: o.gold });
    else dougong(w, { x: at, z: p, y, face: dir, tiers: o.tiers, size: o.size, color: o.color, gold: o.gold });
  }
}

/** 檐椽/飞椽 + 连檐（出檐下表面一圈椽头） */
export function cornice(w, o = {}) {
  const [x0, x1] = box2(o.x0, o.x1);
  const [z0, z1] = box2(o.z0, o.z1);
  const y = o.y | 0;
  const wood = c2(o.color, P.wood);
  const out = o.out ?? 2;
  const dark = shade(wood, -0.24);
  w.fill(x0, y, z1, x1, y + 1, z1, dark);
  w.fill(x0, y, z0, x1, y + 1, z0, dark);
  w.fill(x0, y, z0, x0 + 1, y + 1, z1, dark);
  w.fill(x1 - 1, y, z0, x1, y + 1, z1, dark);
  for (const x of symPos(x0, x1, o.step ?? 3)) {
    w.fill(x, y - 1, z1 + 1, x, y - 1, z1 + out, wood);
    w.fill(x, y - 1, z0 - out, x, y - 1, z0 - 1, wood);
  }
  for (const z of symPos(z0, z1, o.step ?? 3)) {
    w.fill(x0 - out, y - 1, z, x0 - 1, y - 1, z, wood);
    w.fill(x1 + 1, y - 1, z, x1 + out, y - 1, z, wood);
  }
}

/**
 * 一面墙：下碱 + 墙身 + 檐口收口。
 * o = {dir, at, x0,x1,z0,z1, y0, y1|h, thick=3, color=P.wallRed, base=P.wallBase,
 *      baseH=4, holes:[[lo,hi,y0?,y1?]], cap}
 */
export function wallPanel(w, o = {}) {
  const dir = (o.dir || 'S').toUpperCase();
  const alongX = dir === 'S' || dir === 'N';
  const [bx0, bx1] = alongX ? box2(o.x0, o.x1) : box2(o.z0, o.z1);
  const edge = alongX ? box2(o.z0, o.z1) : box2(o.x0, o.x1);
  const at = o.at !== undefined ? (o.at | 0)
    : (dir === 'S' ? edge[1] : dir === 'N' ? edge[0] : dir === 'E' ? edge[1] : edge[0]);
  const y0 = o.y0 | 0;
  const y1 = o.y1 !== undefined ? (o.y1 | 0) : (y0 + (o.h ?? 12) - 1);
  const thick = clamp(o.thick ?? 3, 1, 4);
  const inw = (dir === 'S' || dir === 'E') ? -1 : 1;      // 墙身伸向内侧
  const wall = c2(o.color, P.wallRed);
  const base = c2(o.base, P.wallBase);
  const baseH = o.baseH ?? 4;
  const pil = shade(wall, -0.18);
  const capC = c2(o.cap, P.wallRedDark);
  const holes = (o.holes || [])
    .map(h => [Math.min(h[0], h[1]), Math.max(h[0], h[1]), h[2] === undefined ? -1e9 : h[2], h[3] === undefined ? 1e9 : h[3]])
    .sort((a, b) => a[0] - b[0]);
  const isBase = (y) => y < y0 + baseH;
  const slabRow = (a0, a1, y, c) => {
    if (a1 < a0) return;
    if (alongX) w.fill(a0, y, at, a1, y, at + inw * (thick - 1), c);
    else w.fill(at + inw * (thick - 1), y, a0, at + inw * (thick - 1), y, a1, c);
  };
  const cellColor = (p, y, cur) => {
    if (y >= y1) return capC;
    if (isBase(y)) return cur;
    const rel = p - bx0;
    if (rel === 0 || p === bx1) return shade(wall, -0.3);
    if (isRib(p, bx0, bx1, 11)) return pil;               // 壁柱/檐柱隐现
    return cur;
  };
  for (let y = y0; y <= y1; y++) {
    let cur = isBase(y) ? base : wall;
    if (!isBase(y) && y < y1 && ((y - y0) % 9 === 0)) cur = shade(wall, 0.06);
    let lo = bx0;
    for (const h of holes) {
      if (y < h[2] || y > h[3]) continue;
      if (h[0] > lo) for (let p = lo; p <= Math.min(bx1, h[0] - 1); p++) slabRow(p, p, y, cellColor(p, y, cur));
      if (h[1] + 1 > lo) lo = h[1] + 1;
    }
    for (let p = lo; p <= bx1; p++) slabRow(p, p, y, cellColor(p, y, cur));
  }
  const sy = y1 + 1;                                       // 软檐收口（只出外皮 1 格，内皮由 cullHidden 省掉）
  const capD = thick > 1 ? 1 : 0;
  if (alongX) w.fill(bx0, sy, at, bx1, sy, at + inw * capD, shade(base, 0.12));
  else w.fill(at + inw * capD, sy, bx0, at + inw * capD, sy, bx1, shade(base, 0.12));
}

/**
 * 门：'board' 板门（门钉+铺首）| 'lattice' 格门（格眼+腰华板）| 'arch' 券门（真券+空腔）
 * o = {x,z,y0,h,w=7,color=P.wood,gold=P.gold,style,dir='S'|'N'|'E'|'W',open,glow,thick}
 */
export function doorPanel(w, o = {}) {
  const style = o.style || 'board';
  const y0 = o.y0 | 0;
  const x = o.x | 0, z = o.z | 0;
  const h = Math.max(3, o.h ?? 10);
  const pw = Math.max(3, o.w ?? 7);
  const half = (pw - 1) >> 1;
  const dir = (o.dir || 'S').toUpperCase();
  const alongX = dir === 'S' || dir === 'N';
  const sgn = (dir === 'S' || dir === 'E') ? 1 : -1;
  const wood = c2(o.color, P.wood);
  const woodD = shade(wood, -0.28);
  const woodL = shade(wood, 0.2);
  const gd = c2(o.gold, P.gold);
  const stone = c2(o.frame, P.stone);
  const th = Math.max(2, o.thick ?? 3);
  const at = (a, y, d, c, opts) => { if (alongX) w.set(x + a, y, z - sgn * d, c, opts); else w.set(x - sgn * d, y, z + a, c, opts); };
  const bar = (a0, a1, y, d0, d1, c) => {
    for (let a = a0; a <= a1; a++) for (let d = d0; d <= d1; d++) at(a, y, d, c);
  };
  const cxL = -half, cxR = half;

  if (style === 'arch') {
    // 券门：逐层收分的石券 + 空腔（能看穿）
    const inner = Math.max(1, half - 1);
    const topY = y0 + h - 1;
    const springY = topY - inner;                          // 起拱线
    for (let y = y0; y <= topY; y++) {
      let open = inner;
      if (y > springY) {
        const dy = y - springY;
        open = Math.round(Math.sqrt(Math.max(0, (inner + 0.5) * (inner + 0.5) - dy * dy)) - 0.5);
      }
      for (let a = -half; a <= half; a++) {
        if (Math.abs(a) <= open) continue;                 // 空腔
        let c = y < y0 + 2 ? shade(stone, -0.14) : stone;
        if (y > springY) c = ((a + y) % 2 === 0) ? shade(stone, 0.14) : stone;
        for (let d = 0; d < th; d++) at(a, y, d, d === 0 ? c : shade(c, -0.12));
      }
    }
    for (let a = -half - 1; a <= half + 1; a++) {          // 券脸（外凸拱线）
      const dy = Math.abs(a);
      const yy = springY + Math.round(Math.sqrt(Math.max(0, (half + 1.5) * (half + 1.5) - dy * dy)));
      if (yy <= topY + 1) at(a, Math.max(y0, yy), -1, shade(stone, 0.18));
    }
    for (const a of [cxL - 1, cxR + 1]) {                  // 龙门石
      for (let y = y0 - 1; y <= Math.min(topY + 1, springY); y++) at(a, y, -1, y <= y0 ? gd : shade(stone, 0.08));
    }
    at(0, topY + 1, -1, gd);                               // 券顶 KEY
    bar(cxL, cxR, y0, 0, th - 1, shade(stone, -0.06));     // 门槛
    return;
  }

  const frameC = c2(o.ledger, woodD);
  bar(cxL - 1, cxR + 1, y0 + h - 1, -1, 0, frameC);
  for (const a of [cxL - 1, cxR + 1]) for (let y = y0; y <= y0 + h - 2; y++) at(a, y, -1, frameC);
  for (const a of [-half + 1, half - 1]) at(a, y0 + h - 1, -2, gd);   // 门簪

  const latticeH = style === 'lattice' ? Math.max(2, rr((h - 2) * 0.55)) : 0;
  for (let y = y0; y <= y0 + h - 2; y++) {
    const rel = y - y0;
    const isLat = rel >= h - 2 - latticeH;
    for (let a = cxL; a <= cxR; a++) {
      let c, glow = false;
      if (isLat) {
        const v = (a % 2 === 0);
        const hh = (rel % 3 === 0);
        const cross = ((a + rel) % 5 === 0) || ((a - rel) % 5 === 0);   // 菱花斜棂
        if (v || hh || cross) c = woodL;
        else { c = c2(o.paper, P.paper); glow = !!o.glow; }
      } else {
        const plank = (Math.abs(a) % 3 === 0);
        c = plank ? woodD : wood;
        if (rel === 1 || rel === Math.floor((h - latticeH - 2) / 2)) c = shade(wood, -0.42);
      }
      if (glow) at(a, y, 0, P.lanternGlow, { glow: true, jitter: 0 });
      else at(a, y, 0, c);
      if (!isLat) at(a, y, 1, shade(c, -0.12));
    }
  }
  if (style === 'board') {
    for (let a = cxL + 1; a <= cxR - 1; a += 2) {          // 门钉成列
      for (let y = y0 + 2; y <= y0 + h - 3; y += 3) at(a, y, -1, gd);
    }
    at(-1, y0 + ((h - 2) >> 1), -1, gd);                   // 铺首
    at(1, y0 + ((h - 2) >> 1), -1, gd);
  } else if (o.glow) {
    for (let a = cxL + 1; a <= cxR - 1; a += 2) at(a, y0 + h - 3, 0, P.lanternGlow, { glow: true, jitter: 0 });
  }
  if (o.open) {
    for (let a = cxL + 1; a <= cxR - 1; a++) for (let y = y0; y <= y0 + h - 4; y++) at(a, y, 1, c2(o.ink, P.ink));
  }
}

/**
 * 窗：'lattice' 格窗（菱花/直棂）| 'flame' 壸眼/火焰窗 | 'plain' 板窗
 * o = {x,z,y0,h,w=7,style,frame=P.wood,paper=P.paper,dir,glow}
 */
export function windowPanel(w, o = {}) {
  const style = o.style || 'lattice';
  const x = o.x | 0, z = o.z | 0, y0 = o.y0 | 0;
  const h = Math.max(3, o.h ?? 7);
  const pw = Math.max(3, o.w ?? 7);
  const half = (pw - 1) >> 1;
  const dir = (o.dir || 'S').toUpperCase();
  const alongX = dir === 'S' || dir === 'N';
  const sgn = (dir === 'S' || dir === 'E') ? 1 : -1;
  const fr = c2(o.frame, P.wood);
  const paper = c2(o.paper, P.paper);
  const lat = c2(o.latticeColor, shade(fr, 0.24));
  const at = (a, y, d, c, opts) => { if (alongX) w.set(x + a, y, z - sgn * d, c, opts); else w.set(x - sgn * d, y, z + a, c, opts); };
  const shape = (a, y) => {
    const rel = y - y0;
    if (style === 'flame') {
      const up = h - 1 - rel;
      const need = half - rr(1.1 * Math.max(0, rel - (h - 2) * 0.5)) - (up < 2 ? 1 : 0);
      return Math.abs(a) <= Math.max(0, need);
    }
    return Math.abs(a) <= half && rel >= 0 && rel <= h - 1;
  };
  for (let a = -half - 1; a <= half + 1; a++) {
    if (style === 'flame' && !shape(a, y0 + h - 1)) continue;
    at(a, y0 + h - 1, 0, fr);
    at(a, y0 - 1, 0, shade(fr, -0.22));
    at(a, y0 - 1, 1, shade(fr, -0.22));
  }
  for (let y = y0; y <= y0 + h - 2; y++) {
    for (const a of [-half - 1, half + 1]) if (shape(a, y)) at(a, y, 0, fr);
  }
  for (let y = y0; y <= y0 + h - 2; y++) {
    for (let a = -half; a <= half; a++) {
      if (!shape(a, y)) continue;
      let c, isPaper = false;
      if (style === 'plain') c = ((a + y) % 3 === 0) ? shade(fr, -0.16) : fr;
      else {
        const rib = (a % 2 === 0) || ((y - y0) % (style === 'flame' ? 2 : 3) === 0);
        const diamond = style !== 'flame' && (Math.abs(a) + Math.abs((y - y0) % 4 - 1.5)) % 4 < 1.6;
        isPaper = !(rib || diamond);
        c = isPaper ? paper : lat;
      }
      if (isPaper && o.glow) at(a, y, 0, P.lanternGlow, { glow: true, jitter: 0 });
      else at(a, y, 0, c);
      if (isPaper) at(a, y, 1, shade(paper, -0.32));       // 纸后垫层（景深）
    }
  }
}

/**
 * 匾额：底 + 边框 + 每字抽象笔画（字数由 text 决定，字位中心严格对称）。
 * o = {x,z,y,w,h,dir,bg=P.beamBlue,border=P.gold,text,ink,glow}
 */
export function plaque(w, o = {}) {
  const dir = (o.dir || 'S').toUpperCase();
  const alongX = dir === 'S' || dir === 'N';
  const sgn = (dir === 'S' || dir === 'E') ? 1 : -1;
  const x = o.x | 0, z = o.z | 0, y = o.y | 0;
  const pw = Math.max(4, o.w ?? 10);
  const ph = Math.max(3, o.h ?? 5);
  const half = (pw - 1) >> 1;
  const bg = c2(o.bg, P.beamBlue);
  const bd = c2(o.border, P.gold);
  const at = (a, yy, d, c, opts) => { if (alongX) w.set(x + a, y + yy, z - sgn * d, c, opts); else w.set(x - sgn * d, y + yy, z + a, c, opts); };
  for (let a = -half; a <= half; a++) {
    for (let k = 0; k < ph; k++) {
      const yy = k - ((ph - 1) >> 1);
      const edge = (a === -half || a === half || k === 0 || k === ph - 1);
      at(a, yy, 0, edge ? shade(bd, -0.2) : shade(bg, -0.18));
      at(a, yy, -1, edge ? bd : bg);
    }
  }
  const text = String(o.text === undefined ? '' : o.text).trim() || '匾額';
  const n = text.length;
  const cell = Math.max(2, Math.floor((pw - 2) / n));
  for (let i = 0; i < n; i++) {
    const t = (i - (n - 1) / 2) * cell;
    const c0 = clamp(t < 0 ? -rr(Math.abs(t)) : rr(Math.abs(t)), -half + 1, half - 1);
    const code = text.charCodeAt(i);
    for (let s = 0; s < 3; s++) {
      const hv = Math.floor(hash3(code, s, i) * 1000);
      const row = -((ph - 3) >> 1) + (hv % Math.max(1, ph - 2));
      const horiz = hv % 2 === 0;
      const len = Math.max(1, Math.min(cell - 2, rr(cell * 0.7)));
      for (let t2 = 0; t2 <= len; t2++) {
        const a = horiz ? c0 - (len >> 1) + t2 : c0;
        const yy = horiz ? row : row - (len >> 1) + t2;
        if (Math.abs(a) > half - 1) continue;
        if (yy < -((ph - 1) >> 1) || yy > ((ph - 1) >> 1)) continue;
        at(a, yy, -2, c2(o.ink, P.goldBright));
      }
    }
  }
}

/* ----------------------------------------------------------- 2.3 屋顶 */

/**
 * 全场景唯一屋顶入口（SPEC §2.3）。
 *  wudian   四阿坡：局部 X 收到 ridgeLen/2 停、Z 收到 0 → 一条正脊 + 四条对角垂脊。
 *  xieshan  下半 0~45% 高按四坡（X 收到 spanX*0.15 即停）→ 梯形山花 + 博风 + 悬鱼；
 *           上半改两坡（X 定宽 hxGable + 出山）；四条戗脊 + 走兽队列。
 *  zhuanjian X/Z 同速收到 1 格接宝顶；octagon=true 按八边形轮廓逐层收分成八角锥。
 *  xuanshan 仅两坡（Z 收分、X 定宽）+ 山面出檐 + 博风板。
 *  flat     平顶 + 女墙。
 *  通用：举折 inset=round(t^0.68*maxInset)；檐口反宇下垂 + 四角飞檐翘起 + 角下霸王举鼎；
 *        瓦垄沿坡面每 2 格一道 + 檐口瓦当/滴水；正脊大吻、垂脊/戗脊凸 1 格 + 垂兽/戗兽；
 *        tiers>1 同函数内叠下檐并补平座带 + 斗拱列。
 */
export function roof(w, o = {}) {
  const cx = rr(o.cx ?? 0), cz = rr(o.cz ?? 0);
  const F = frame(w, cx, cz, o.axis === 'z');
  const type = String(o.type || ROOF_TYPE.WUDIAN);
  const tile = c2(o.tile, P.glazedYellow);
  const tileDark = c2(o.tileDark, shade(tile, -0.22));
  const ridgeC = c2(o.ridge, P.ridge);
  const goldC = c2(o.ridgeGold, P.ridgeGold);
  const capC = c2(o.capRidge, P.capRidge);
  const endC = c2(o.tileEnd, P.tileEnd);
  const woodC = c2(o.wood, P.wood);
  const showTiles = o.tiles !== false;
  const horn = o.chiHorn !== false;
  const upturn = clamp(o.upturn ?? 2, 0, 5);
  const height = Math.max(1, rr(o.height ?? 10));
  const baseY = rr(o.baseY ?? 20);
  const oct = !!o.octagon;
  const spanX = Math.max(5, rr(o.spanX ?? 30));
  const spanZ = Math.max(5, rr(o.spanZ ?? 24));
  const ridgeLen = rr(o.ridgeLen !== undefined ? o.ridgeLen : spanX * 0.5);
  const cf = Math.max(3, rr(Math.min(spanX, spanZ) * 0.26));   // 翘角影响半径
  const curve = o.juzhe ?? 0.68;
  const hx0 = Math.max(2, rr((spanX - 1) / 2)), hz0 = Math.max(2, rr((spanZ - 1) / 2));   // 整数半跨，杜绝 .5 坐标

  /* ---- 举折目标半跨（顶层）---- */
  let tgtX, tgtZ, split = -1;
  if (type === ROOF_TYPE.WUDIAN) {
    tgtX = Math.max(0, o.fitX !== undefined ? rr(o.fitX) : rr(ridgeLen / 2));
    tgtZ = o.fitZ !== undefined ? rr(o.fitZ) : 0;
  } else if (type === ROOF_TYPE.XIESHAN) {
    tgtX = Math.max(2, rr(spanX * (o.shanRatio ?? 0.15)));
    tgtZ = o.fitZ !== undefined ? rr(o.fitZ) : 0;
    split = Math.max(1, rr(height * 0.45));
  } else if (type === ROOF_TYPE.ZHUANJIAN) {
    tgtX = tgtZ = o.fitX !== undefined ? rr(o.fitX) : 1;
  } else if (type === ROOF_TYPE.XUANSHAN) {
    tgtX = hx0; tgtZ = 0;
  } else {
    tgtX = hx0 - 1; tgtZ = hz0 - 1;
  }

  /** 檐口反宇（边中略垂）+ 飞檐翘角（角部抬起）：只作用于最外 1–2 层 */
  const lift = (ax, az, hx, hz, lvl) => {
    if (lvl > 1 || upturn === 0) return 0;
    const d = Math.max(hx - ax, 0) + Math.max(hz - az, 0);
    const u = clamp(1 - d / cf, 0, 1);
    let dy = rr(upturn * u * u);
    const tp = 1 - Math.min(ax / Math.max(1, hx), az / Math.max(1, hz));   // 0=角 1=边中
    dy -= Math.round((1 - Math.cos(Math.PI * tp)) * 0.5);
    return dy;
  };

  /**
   * 四面坡的一圈"踏步"：run = 本层沿水平方向要覆盖的格数（坡度陡时 >1，否则壳面会漏孔）。
   * 每向内 1 格同时下降 1 格 → 阶梯壳面。
   */
  function band(face, y, hx, hz, run, lvl) {
    const alongX = face === 'S' || face === 'N';
    const sgn = (face === 'S' || face === 'E') ? 1 : -1;
    const thick = clamp(run, 1, 4);
    for (let d = 0; d < thick; d++) {
      const yy = y - d;
      if (alongX) {
        const zz = cz + sgn * Math.max(0, hz - d);
        for (let x = cx - hx; x <= cx + hx; x++) {
          const ax = Math.abs(x - cx);
          const cell = yy + lift(ax, hz, hx, hz, lvl);
          let c = showTiles && (ax % 2 === 0) ? tileDark : tile;
          if (d === thick - 1 && lvl === 0 && ax % 2 === 1) c = endC;      // 瓦当/滴水
          F.set(x, cell, zz, c);
        }
      } else {
        const xx = cx + sgn * Math.max(0, hx - d);
        for (let z = cz - hz + 1; z <= cz + hz - 1; z++) {
          const az = Math.abs(z - cz);
          const cell = yy + lift(hx, az, hx, hz, lvl);
          let c = showTiles && (az % 2 === 0) ? tileDark : tile;
          if (d === thick - 1 && lvl === 0 && az % 2 === 1) c = endC;
          F.set(xx, cell, z, c);
        }
      }
    }
  }
  /** 八边形环（八角攒尖 / 塔）：run 圈环带，半径与高度同步递减 → 壳面无缝 */
  function octRing(y, aIn, run, lvl) {
    for (let d = 0; d < clamp(run, 1, 4); d++) {
      const a = Math.max(1, aIn - d);
      const y0 = y - d;
      for (const [x, z] of octBand(a)) {
        const cell = y0 + lift(x, z, a, a, lvl);
        const c = showTiles && ((x + z) % 2 === 0) ? tileDark : tile;
        for (const sx of (x === 0 ? [1] : [1, -1])) {
          for (const sz of (z === 0 ? [1] : [1, -1])) F.set(cx + sx * x, cell, cz + sz * z, c);
        }
      }
    }
  }
  function line(p0, p1, c) {
    const n = Math.max(Math.abs(p1[0] - p0[0]), Math.abs(p1[1] - p0[1]), Math.abs(p1[2] - p0[2]), 1);
    // 用"到中轴的绝对偏距"做插值 + 统一取号，保证镜像两条垂脊逐格严格对称
    const ax0 = Math.abs(p0[0] - cx), ax1 = Math.abs(p1[0] - cx);
    const az0 = Math.abs(p0[2] - cz), az1 = Math.abs(p1[2] - cz);
    const sgx = p0[0] >= cx ? 1 : -1, sgz = p0[2] >= cz ? 1 : -1;
    for (let i = 0; i <= n; i++) {
      const t = i / n;
      F.set(cx + sgx * rr(ax0 + (ax1 - ax0) * t), rr(p0[1] + (p1[1] - p0[1]) * t), cz + sgz * rr(az0 + (az1 - az0) * t), c);
    }
  }
  /** 正脊 + 两端大吻 */
  function mainRidge(y, half, wide) {
    const top = y + 1;
    if (wide) F.box(cx - half, top, cz - 1, cx + half, top, cz + 1, ridgeC);
    else F.box(cx - half, top, cz, cx + half, top, cz, ridgeC);
    for (let x = cx - half; x <= cx + half; x += 2) F.set(x, top + 1, cz, goldC);
    if (!horn) return;
    for (const s of [-1, 1]) {
      const ex = cx + s * half;
      F.box(ex - 1, top, cz - 1, ex + 1, top + 2, cz + 1, capC);
      F.set(ex, top + 3, cz, capC);
      F.set(ex - s, top + 2, cz, goldC);
      F.set(ex, top + 1, cz - s, shade(capC, 0.16));
      F.set(ex, top + 1, cz + s, shade(capC, 0.16));
    }
  }
  function beast(p, big) {
    F.set(p[0], p[1] + 1, p[2], goldC);
    F.set(p[0], p[1] + 2, p[2], ridgeC);
    if (big) F.set(p[0], p[1] + 3, p[2], capC);
  }

  /* ---- 一层檐（重檐时下层同样走这里）---- */
  function emit(p) {
    const by = p.baseY;
    const ht = Math.max(1, p.height);
    const hxS = p.hx0, hzS = p.hz0;
    const localHalf = (lvl, a, b) => {
      const t = clamp(lvl / ht, 0, 1);
      return Math.max(0, rr(a - (a - b) * Math.pow(t, curve)));
    };
    const gableFrom = p.gableFrom;
    /* 山花上沿：默认只做到 (ht-gableFrom)*0.72 处（旧行为，其余建筑不变）；
     * 传 shanTopRatio=1 可让山花梯形一直顶到正脊，山面形制更好认。 */
    const shanTop = (gableFrom !== undefined && gableFrom > 0)
      ? Math.min(ht, rr(gableFrom + (ht - gableFrom) * (p.shanTopRatio ?? 0.72))) : ht;
    const chain = [[], [], [], []];
    let pHx = hxS, pHz = hzS, pA = -1;                   // 上一层的半跨（决定本层踏步进深）
    for (let lvl = 0; lvl <= ht; lvl++) {
      const isGable = gableFrom !== undefined && lvl >= gableFrom;
      const hx = Math.max(0, isGable ? p.hxGable : localHalf(lvl, hxS, p.tgtX));
      const hz = localHalf(lvl, hzS, p.tgtZ);
      const y = by + lvl;
      // run：水平要覆盖的格数 = 上层与本层的收进量；檐口 2 格厚防穿帮
      const runZ = lvl === 0 ? 2 : Math.max(1, (pHz - hz) + (lvl < 2 ? 1 : 0));
      const runX = lvl === 0 ? 2 : Math.max(1, (pHx - hx) + (lvl < 2 ? 1 : 0));
      if (p.oct) {
        const aO = Math.max(1, rr(Math.min(hx, hz)));
        octRing(y, aO, lvl === 0 ? 2 : Math.max(1, (pA < 0 ? 1 : pA - aO) + (lvl < 2 ? 1 : 0)), lvl);
        pA = aO;
      } else if (isGable) {
        band('S', y, hx, hz, runZ, lvl);
        band('N', y, hx, hz, runZ, lvl);
        for (const s of [-1, 1]) {                       // 悬山出山椽头
          const xx = cx + s * (hx + 1);
          for (let z = cz - hz; z <= cz + hz; z += 2) F.set(xx, y, z, woodC);
        }
      } else {
        band('S', y, hx, hz, runZ, lvl);
        band('N', y, hx, hz, runZ, lvl);
        band('E', y, hx, hz, runX, lvl);
        band('W', y, hx, hz, runX, lvl);
      }
      pHx = hx; pHz = hz;
      if (p.oct) {
        const a = Math.max(1, rr(Math.min(hx, hz)));
        for (let i = 0; i < 4; i++) {
          const s = i < 2 ? 1 : -1, t = i % 2 ? -1 : 1;
          chain[i].push([cx + s * a, y + lift(a, a, a, a, lvl), cz + t * rr(a * (Math.SQRT2 - 1))]);
        }
      } else if (!isGable) {
        const px = [cx + hx, cx + hx, cx - hx, cx - hx];
        const pz = [cz + hz, cz - hz, cz + hz, cz - hz];
        for (let i = 0; i < 4; i++) chain[i].push([px[i], y + lift(hx, hz, hx, hz, lvl), pz[i]]);
      }
      if (lvl === 0 && p.supports !== false) {           // 霸王举鼎：翘角下支撑
        for (const [sx, sz] of [[1, 1], [1, -1], [-1, 1], [-1, -1]]) {
          const X = cx + sx * hxS, Z = cz + sz * hzS;
          F.set(X, by - 1, Z, shade(woodC, -0.08));
          F.set(X - sx, by - 1, Z, woodC);
          F.set(X, by - 1, Z - sz, woodC);
          if (upturn >= 2) F.set(X, by - 2, Z, shade(woodC, -0.24));
        }
      }
    }
    const topY = by + ht;
    const hxT = gableFrom !== undefined ? p.hxGable : localHalf(ht, hxS, p.tgtX);
    const hzT = localHalf(ht, hzS, p.tgtZ);

    if (p.type === ROOF_TYPE.FLAT) {
      F.box(cx - hxS, by, cz - hzS, cx + hxS, by, cz + hzS, c2(p.capTile, P.stone));
      for (const [X0, X1, Z0, Z1] of [
        [cx - hxS, cx + hxS, cz - hzS, cz - hzS], [cx - hxS, cx + hxS, cz + hzS, cz + hzS],
        [cx - hxS, cx - hxS, cz - hzS, cz + hzS], [cx + hxS, cx + hxS, cz - hzS, cz + hzS]]) {
        F.box(X0, by + 1, Z0, X1, by + 2, Z1, capC);
      }
      return;
    }

    /* 攒尖：向中心汇聚 + 角脊 + 宝顶 */
    if (p.type === ROOF_TYPE.ZHUANJIAN) {
      const a = Math.max(0, hxT);
      F.box(cx - a, topY + 1, cz - a, cx + a, topY + 1, cz + a, ridgeC);
      const rBase = Math.min(hxS, hzS);
      if (p.oct) {
        for (let k = 0; k < 8; k++) {
          const ang = (k * Math.PI) / 4 + (p.rot ? Math.PI / 8 : 0);
          for (let lvl = 0; lvl <= ht; lvl++) {
            const t = clamp(lvl / ht, 0, 1);
            const r = Math.max(0.5, rr(rBase - (rBase - 1) * Math.pow(t, curve)));
            F.set(cx + rr(Math.cos(ang) * r * 0.92), by + lvl + 1, cz + rr(Math.sin(ang) * r * 0.92), k % 2 ? goldC : ridgeC);
          }
        }
      } else {
        for (let lvl = 0; lvl <= ht; lvl++) {
          const hh = Math.max(0, Math.min(localHalf(lvl, hxS, p.tgtX), localHalf(lvl, hzS, p.tgtZ)));
          for (const [sx, sz] of [[1, 1], [1, -1], [-1, 1], [-1, -1]]) {
            F.set(cx + sx * hh, by + lvl + lift(hh, hh, hh, hh, lvl) + 1, cz + sz * hh, goldC);
          }
        }
      }
      if (p.finial !== false) {
        finial(w, { cx, cz, y: topY + 2, h: p.finialH ?? 6, kind: p.kind, color: goldC, glow: p.glow });
      }
      return;
    }

    /* 正脊（wudian / xieshan / xuanshan） */
    const ridgeHalf = Math.max(0, rr(Math.min(hxT, p.ridgeHalf !== undefined ? p.ridgeHalf : hxT)));
    mainRidge(topY, ridgeHalf, spanX > 60);

    /* 垂脊 / 戗脊 / 垂兽 / 戗兽 / 走兽 */
    for (let i = 0; i < 4; i++) {
      const ch = chain[i];
      if (ch.length < 2) continue;
      for (let k = 0; k < ch.length - 1; k++) line(ch[k], [ch[k + 1][0], ch[k + 1][1] + 1, ch[k + 1][2]], ridgeC);
      const last = ch[ch.length - 1];
      if (gableFrom !== undefined) {
        const sgnX = i < 2 ? 1 : -1, sgnZ = i % 2 === 0 ? 1 : -1;
        line(last, [cx + sgnX * hxT, topY + 2, cz + sgnZ * Math.max(0, hzT)], ridgeC);
      } else {
        line(last, [cx + (i < 2 ? ridgeHalf : -ridgeHalf), topY + 2, cz], ridgeC);
      }
      if (!horn) continue;
      beast(ch[Math.floor(ch.length * 0.66)], false);
      beast(ch[0], true);
      if (gableFrom !== undefined && p.beasts !== false) {
        const c0 = ch[0];
        ridgeBeast(w, {
          x: c0[0], z: c0[2], y: c0[1] + 2, n: p.beastN ?? 4,
          dir: i < 2 ? 'N' : 'S', color: goldC,
        });
      }
    }

    /* 歇山：山花（梯形）+ 博风板 + 悬鱼 */
    if (gableFrom !== undefined && gableFrom > 0) {
      const shanX = Math.max(1, rr(hxT));
      const gcol = c2(p.shan, P.beamGreen);
      const gcol2 = c2(p.shanAlt, P.wood);
      for (const s of [-1, 1]) {
        const xx = cx + s * shanX;
        for (let lvl = gableFrom; lvl <= shanTop; lvl++) {
          const hz = localHalf(lvl, hzS, p.tgtZ);
          const y = by + lvl;
          for (let z = cz - hz; z <= cz + hz; z++) {
            const e = Math.abs(Math.abs(z - cz) - hz) < 1.2;
            F.set(xx, y, z, e ? capC : ((z - cz + lvl) % 4 === 0 ? gcol2 : gcol));
          }
        }
        const hzt = localHalf(shanTop, hzS, p.tgtZ);
        F.box(xx, by + shanTop + 1, cz - hzt, xx, by + shanTop + 1, cz + hzt, goldC);
        for (let lvl = gableFrom; lvl <= ht; lvl++) {          // 博风板斜线
          const hz = localHalf(lvl, hzS, p.tgtZ);
          const y = by + lvl;
          for (const s2 of [-1, 1]) {
            F.set(xx, y + 1, cz + s2 * hz, goldC);
            F.set(xx, y + 2, cz + s2 * hz, capC);
          }
        }
        F.box(xx, by + gableFrom, cz - 1, xx, by + gableFrom + 1, cz + 1, gcol2);
        F.set(xx, by + gableFrom + 2, cz, goldC);              // 悬鱼
      }
    }

    /* 悬山：博风板 + 山柱 */
    if (p.type === ROOF_TYPE.XUANSHAN) {
      for (const s of [-1, 1]) {
        const xx = cx + s * rr(hxT);
        for (let lvl = 0; lvl <= ht; lvl++) {
          const hz = localHalf(lvl, hzS, p.tgtZ);
          for (const s2 of [-1, 1]) {
            F.set(xx, by + lvl + 1, cz + s2 * hz, goldC);
            F.set(xx, by + lvl + 2, cz + s2 * hz, capC);
          }
        }
        F.box(xx, topY, cz, xx, topY, cz, capC);
      }
    }
  }

  /* ---- 参数装配 + 重檐 ---- */
  let hxGable = Math.max(1, rr(tgtX));
  if (type === ROOF_TYPE.XUANSHAN) hxGable = Math.max(1, rr(hx0));
  else if (type === ROOF_TYPE.XIESHAN) {
    const t = clamp(split / height, 0, 1);
    hxGable = Math.max(2, rr(hx0 - (hx0 - tgtX) * Math.pow(t, curve))) + (o.chushan ?? 2);
  }
  const mainP = {
    baseY, height, hx0, hz0, tgtX, tgtZ, type, oct,
    gableFrom: type === ROOF_TYPE.XIESHAN ? split : (type === ROOF_TYPE.XUANSHAN ? 0 : undefined),
    hxGable,
    ridgeHalf: type === ROOF_TYPE.WUDIAN ? ridgeLen / 2 : undefined,
    finial: type === ROOF_TYPE.ZHUANJIAN, kind: o.kind, finialH: o.finialH,
    shan: o.shan, shanAlt: o.shanAlt, shanTopRatio: o.shanTopRatio, beasts: o.beasts, beastN: o.beastN,
    rot: o.octRot, glow: o.finialGlow,
  };
  const tiers = clamp(rr(o.tiers ?? 1), 1, 3);
  if (tiers > 1) {
    for (let i = tiers - 1; i >= 1; i--) {
      const ly = baseY - 9 * i;
      const lx = hx0 + 6 * i, lz = hz0 + 6 * i;
      const lh = Math.max(4, rr(height * 0.4));
      emit({
        baseY: ly, height: lh, hx0: lx, hz0: lz,
        tgtX: Math.max(1, lx - 8 * i), tgtZ: Math.max(1, lz - 7 * i),
        type: ROOF_TYPE.WUDIAN, oct: false, gableFrom: undefined,
        hxGable: 1, ridgeHalf: 0, finial: false,
      });
      const wy = ly + lh, wex = Math.max(1, lx - 8 * i), wez = Math.max(1, lz - 7 * i);
      for (const s of [1, -1]) {                          // 平座/暗层带，封住接缝
        for (let x = cx - wex; x <= cx + wex; x++) {
          for (let y = wy; y <= baseY + 1; y++) F.set(x, y, cz + s * wez, s > 0 ? P.beamGreen : P.beamBlue);
        }
        for (let z = cz - wez + 1; z <= cz + wez - 1; z++) {
          for (let y = wy; y <= baseY + 1; y++) F.set(cx + s * wex, y, z, P.beamTeal);
        }
      }
      for (let x = cx - wex + 2; x <= cx + wex - 2; x += 6) {
        dougong(w, { x, z: cz + wez, y: baseY - 2, face: 'S', tiers: 1, color: o.dougongColor });
        dougong(w, { x, z: cz - wez, y: baseY - 2, face: 'N', tiers: 1, color: o.dougongColor });
      }
    }
  }
  emit(mainP);
}

/**
 * 塔檐：单层环形阶梯檐（宝塔每层一次），四/八角翘起。
 * o = {cx,cz,y,rIn,rOut,tile,step=1,octagon=false,upturn=2,ridge}
 */
export function roofRing(w, o = {}) {
  const cx = rr(o.cx ?? 0), cz = rr(o.cz ?? 0);
  const oct = !!o.octagon;
  const tile = c2(o.tile, P.tileLead);
  const tileDark = c2(o.tileDark, shade(tile, -0.2));
  const endC = c2(o.tileEnd, P.tileEnd);
  const upturn = o.upturn ?? 2;
  const rIn = rr(o.rIn ?? 6), rOut = rr(o.rOut ?? 10);
  const y = rr(o.y ?? 10);
  const step = Math.max(1, o.step ?? 1);
  for (let r = rOut; r >= rIn; r -= step) {
    const yy = y - rr((rOut - r) * 0.9);
    const k = (rOut - r) / Math.max(1, rOut - rIn);
    const lift = rr(upturn * (1 - k) * (1 - k));
    const c = (r % 2 === 0) ? tile : tileDark;
    if (oct) {
      // 每 step 都要补满环带，否则斜向留孔
      for (let q = 0; q < step; q++) {
        const r2 = r - q;
        if (r2 < rIn) break;
        const y2 = y - rr((rOut - r2) * 0.9);
        const k2 = (rOut - r2) / Math.max(1, rOut - rIn);
        const lf2 = rr(upturn * (1 - k2) * (1 - k2));
        const c2v = (r2 % 2 === 0) ? tile : tileDark;
        for (const [x, z] of octBand(r2)) {
          for (const sx of (x === 0 ? [1] : [1, -1])) {
            for (const sz of (z === 0 ? [1] : [1, -1])) {
              w.set(cx + sx * x, y2 + lf2, cz + sz * z, (r2 === rOut && (x + z) % 2) ? endC : c2v);
            }
          }
        }
      }
    } else {
      for (let x = -r; x <= r; x++) { w.set(cx + x, yy + lift, cz + r, c); w.set(cx + x, yy + lift, cz - r, c); }
      for (let z = -r + 1; z <= r - 1; z++) { w.set(cx + r, yy + lift, cz + z, c); w.set(cx - r, yy + lift, cz + z, c); }
    }
  }
  if (o.ridge === false) return;
  const rc = c2(o.ridge, P.ridge);
  for (const [sx, sz] of [[1, 1], [1, -1], [-1, 1], [-1, -1]]) {
    for (let r = rOut; r >= rIn; r -= step) {
      const yy = y - rr((rOut - r) * 0.9);
      const k = (rOut - r) / Math.max(1, rOut - rIn);
      const lift = rr(upturn * (1 - k) * (1 - k));
      w.set(cx + sx * (oct ? rr(r * 0.92) : r), yy + lift + 1, cz + sz * (oct ? rr(r * 0.38) : r), rc);
    }
  }
}

/**
 * 塔刹 / 宝顶：覆钵 + 相轮 + 露盘 + 宝珠。
 * o = {cx,cz,y,h,kind='luoxian'|'baoding',color=P.gold,glow}
 */
export function finial(w, o = {}) {
  const cx = rr(o.cx ?? 0), cz = rr(o.cz ?? 0), y = rr(o.y ?? 0);
  const h = Math.max(3, rr(o.h ?? 6));
  const gold = c2(o.color, P.gold);
  const bright = c2(o.bright, P.goldBright);
  const kind = o.kind || 'baoding';
  const gl = o.glow ? { glow: true, jitter: 0 } : undefined;
  w.set(cx, y, cz, shade(gold, -0.22));
  w.ell(cx, y + 1, cz, 2, 1, 2, gold);                    // 覆钵
  let yy = y + 3;
  const n = kind === 'luoxian' ? clamp(rr(h * 0.4), 3, 6) : 3;
  for (let i = 0; i < n; i++) {                           // 相轮
    const r = Math.max(1, 3 - i);
    w.prism(cx, cz, yy, yy, r, 8, Math.PI / 8, i % 2 ? bright : gold);
    if (r > 1) w.set(cx, yy, cz, bright);
    yy += 1;
  }
  w.prism(cx, cz, yy, yy, 3, 8, Math.PI / 8, bright);     // 露盘
  yy += 1;
  w.prism(cx, cz, yy, yy + 1, 1, 4, 0, gold);
  w.set(cx, yy + 2, cz, bright, gl);                      // 宝珠
  w.set(cx, yy + 3, cz, bright, gl);
}

/** 走兽队列：沿 dir 排 n 个小兽（端头略大） */
export function ridgeBeast(w, o = {}) {
  const n = clamp(o.n ?? 5, 1, 6);
  const y = rr(o.y ?? 0);
  const dir = (o.dir || 'S').toUpperCase();
  const alongX = dir === 'S' || dir === 'N';
  const sgn = (dir === 'S' || dir === 'E') ? 1 : -1;
  const col = c2(o.color, P.gold);
  const capc = c2(o.c, P.capRidge);
  const x = rr(o.x ?? 0), z = rr(o.z ?? 0);
  for (let i = 0; i < n; i++) {
    const a = i * 2;
    const X = alongX ? x + sgn * a : x;
    const Z = alongX ? z : z + sgn * a;
    if (i === 0) {
      w.set(X, y, Z, col);
      w.set(X, y + 1, Z, capc);
      w.set(X, y + 2, Z, shade(col, 0.2));
    } else {
      w.set(X, y, Z, i % 2 ? shade(col, -0.22) : col);
    }
  }
}
