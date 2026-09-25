/**
 * landscape.js — 地面环境（A4）
 *
 * 两部分：
 *  1) 程序化地面贴图 paintGroundTexture()：CanvasTexture（2048²，无任何外部图片），
 *     承载草地 / 中轴神道与横路环路院落石板铺装 / 放生池水面 / 土路砂石过渡带 / 树影。
 *  2) decorateTerrain(w)：体素只补「高差与边缘」（路牙石、月台、台阶、池岸、花坛、
 *     石灯笼台基、柏树列、远山），避免体素爆炸。
 *
 * ------------------------------------------------------------------ 坐标映射（最终采用）
 * 地面 = PlaneGeometry(g,g) + geo.rotateX(-PI/2)：顶点局部 +X → 世界 +X，局部 +Y → 世界 -Z。
 * PlaneGeometry 的 uv.v 随局部 +Y 增大（v=1 在北边缘）；CanvasTexture 默认 flipY=true，
 * 图像顶行送到 v=1 ⇒ **canvas 第 0 行 = 世界 -Z（北）**，两次翻转正好抵消。所以绘制期公式
 * 就是最终生效公式，成品不再翻转：
 *
 *     px = (x + g/2) * S / g            // x=0 → 中央列 S/2，神道中心线严格压在轴上
 *     py = (z + g/2) * S / g            // canvas 顶 = 北(-Z)，底 = 南(+Z)
 *     整数格线的缝：px = (x + g/2) * S/g - 0.5（半像素补偿，见 cellRectPx）
 *
 * SPEC §5 给的 py=(g/2 - z)/g*S 是 flipY=false 那一侧的约定；本项目用默认 flipY=true，
 * 若照抄会把整张地图南北反向 180°（神道南端的照壁会跑到北端塔院）。已在 README 记录。
 *
 * 自检（集成时在 console 里跑 `import('./src/world/landscape.js').then(m=>m.checkGroundTexture())`）：
 *  - 中轴列：S/2 那一列在 z∈[-146,206] 区间必须一直是石板亮色（神道）；
 *  - 左右镜像：逐像素比对 x 与 -x，超阈值比例应 <0.4%（只有抗锯齿误差）；
 *  - 南北判向：南端（z≈200，照壁前神道）比北端（z≈-200，塔院后草地）更亮，
 *    用来证明没有反向 180°。
 * 另外 paintGroundTexture({mirrorGuide:true}) 会画一根 1 格宽的绿色 x=0 基准线并返回贴图，
 * 供肉眼核对（默认 false，不进正式贴图）。
 *
 * ------------------------------------------------------------------ 水面选型
 * 放生池 = **贴图担当**（深浅径向渐变 + 倒影 + 荷叶 + 水纹），体素只出 1–2 格石岸 +
 * 少量发光荷叶尖。省下的体素让给远山与树木。理由：Plane 在 y=-0.02，池里没有体素
 * 水面也看不到地面以下的东西（岸体素围住即可），而贴图能画出渐变与荷叶，观感更好。
 *
 * 假设（若与 A1/A3 冲突以 SPEC 为准）：
 *  - VoxelWorld 提供 set/fill/cylY/ell/count/stats（SPEC §1）。
 *  - props.stoneLantern(w,{x,z,y,h,glow}) / props.pineTree(w,{x,z,y,h,kind,seed}) /
 *    props.rockery(w,{x,z,y,r,seed})（SPEC §4）——本文件直接 import 使用（签名不符时
 *    safeCall 兜底并告警，绝不让场景黑屏）；树也可由 composition 用 setTreeDecorator 覆盖。
 *  - 地面顶面在世界 y = -0.52：VoxelWorld 的 cube 用 ±0.5 角点，体素 (x,y,z) 以整数坐标为
 *    **中心**（体素层 0 占 y∈[-0.5,0.5]），所以地面放在层 0 底面再下 0.02：既不遮住层 0，
 *    也不会与体素底面共面闪烁。
 */
import * as THREE from 'three';
import { L, P, TONES } from '../config.js';
/* SPEC §4 陈设：地形装饰复用 props（缺文件/签名不符时由 safeCall 兜底并告警） */
import { stoneLantern, pineTree, rockery } from '../build/props.js';

/* ============================================================ 常量 */
const TEX_SIZE = 2048;          // canvas 边长 S
const G = L.groundSize;         // 地面平面边长（世界单位）
const PPUG = TEX_SIZE / G;      // pixels per world grid unit ≈ 2.6947
const GROUND_Y = -0.52;   // A1 体素以整数坐标为中心（角点 ±0.5）⇒ 体素层 0 占 y∈[-0.5,0.5]
/* ---- 体素预算（除建筑外）：paving(含月台/栏板) + trees + 陈设性点缀
       远山已按要求移除：R≈348 的体素山脊在任何机位都读成"草地上的土坡"而不是山，
       天际线交给天空渐变 + 地平雾（landscape 贴图与 FogExp2）承担。 */
const MAX_TREE_VOX = 4300;      // 树木体素预算（≈22–24 株，单株 ≤250）
/* 远山：峰高提到 ~52 后天际才有"环抱"感。采样步长 2200→1100 让列数减半
   （R=292 处切向步长 0.83 格，整圆后仍 ≤1 格，putCol 的补格逻辑不受影响），
   于是同样预算能买到接近两倍的高度，压缩系数回到 ~1.0。 */
const MAX_TERRAIN_VOX = 12000;  // 除建筑外的总预算（铺装/月台/树；远山已移除）
const LANTERN_STRIDE = 1;       // 神道石灯笼：再在 lanternRows() 过滤结果上每 N 对放一盏
                                       // （行位本身已按 keepout 滤掉埋进殿身的 20+ 对）

/**
 * 世界坐标 ↔ 像素。
 * 约定：体素 (x,y,z) 以世界坐标 x/z 为**中心**（占 [x-0.5, x+0.5]）——SPEC 里
 * x0:-46/x1:46、cx=±ym 这类对称写法只有在这种约定下才真正左右对称，A1 的 VoxelWorld 亦按
 * 整数坐标放 cube。于是 L 里的盒范围按「闭区间格号」处理，边界 = 格号 ±0.5。
 *   pxOf(x) = (x + G/2) * PPUG   →  连续世界坐标 → 像素；pxOf(0) = S/2 正中央
 *   格 n 的像素范围 = [pxOf(n-0.5), pxOf(n+0.5)]，格线（缝）在 pxOf(n) - PPUG/2
 */
function pxOf(x) { return (x + G / 2) * PPUG; }
function pyOf(z) { return (z + G / 2) * PPUG; }
function gx(n) { return pxOf(n) - PPUG / 2; }   // 格 n 左/西边界
function gz(n) { return pyOf(n) - PPUG / 2; }   // 格 n 上/北边界

/* ============================================================ 哈希 / 噪声 */
function hash2(x, y) {
  let n = Math.imul(x | 0, 73856093) ^ Math.imul(y | 0, 19349663);
  n ^= n >>> 13; n = Math.imul(n, 1274126177); n ^= n >>> 16;
  return (n >>> 0) / 4294967295;
}
/** 镜像不变哈希：一律用 |x|，保证以 x=0 为轴的严格左右对称 */
function mx(v) { return v < 0 ? -v : v; }
function hsym(x, z, salt) { return hash2(Math.round(mx(x) * 4) + salt, Math.round(z * 4) - salt); }

function vnoise(x, y) {
  const xi = Math.floor(x), yi = Math.floor(y);
  const xf = x - xi, yf = y - yi;
  const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
  const a = hash2(xi, yi), b = hash2(xi + 1, yi), c = hash2(xi, yi + 1), d = hash2(xi + 1, yi + 1);
  return (a + (b - a) * u) * (1 - v) + (c + (d - c) * u) * v;
}
function fbm(x, y, oct) {
  let sum = 0, amp = 1, norm = 0, fx = x, fy = y;
  for (let i = 0; i < oct; i++) {
    sum += amp * vnoise(fx, fy); norm += amp;
    fx *= 2.03; fy *= 1.97; amp *= 0.5;
  }
  return sum / norm;
}
/** 镜像不变 fBm */
/**
 * 镜像不变 fBm：先取 |x| 再加**零**偏移（偏移量必须放在 y 上，否则镜像轴会跑到 x=偏移处，
 * 中轴两侧噪声错开 → 肉眼可见的不对称）。
 */
function fbmSym(x, y, oct) { return fbm(mx(x) * 0.06, y * 0.06 + 31.7, oct); }

/* ============================================================ 颜色工具 */
function hx(hex) { return '#' + hex.toString(16).padStart(6, '0'); }
function rgb(hex) { return [(hex >> 16) & 255, (hex >> 8) & 255, hex & 255]; }
function pack(r, g, b) { return (((r << 8) | g) << 8) | b; }
function mixHex(a, b, k) {
  const A = rgb(a), B = rgb(b);
  const r = Math.round(A[0] + (B[0] - A[0]) * k);
  const g = Math.round(A[1] + (B[1] - A[1]) * k);
  const c = Math.round(A[2] + (B[2] - A[2]) * k);
  return `rgb(${r},${g},${c})`;
}
function shade(hex, mul, alpha) {
  const A = rgb(hex);
  const r = Math.max(0, Math.min(255, Math.round(A[0] * mul)));
  const g = Math.max(0, Math.min(255, Math.round(A[1] * mul)));
  const b = Math.max(0, Math.min(255, Math.round(A[2] * mul)));
  return alpha >= 1 ? `rgb(${r},${g},${b})` : `rgba(${r},${g},${b},${alpha})`;
}
const CSS = {
  grass: hx(P.grass), grassDark: hx(P.grassDark), moss: hx(P.moss),
  dirt: hx(P.dirt), sand: hx(P.sand), path: hx(P.path), pathEdge: hx(P.pathEdge),
  stone: hx(P.stone), stoneDark: hx(P.stoneDark), marble: hx(P.marble),
  marbleLine: hx(P.marbleLine), flagstone: hx(P.flagstone), cobble: hx(P.cobble),
  water: hx(P.water), waterDeep: hx(P.waterDeep), waterEdge: hx(P.waterEdge),
  pine: hx(P.pine), pineDark: hx(P.pineDark), leaf: hx(P.leaf),
  cypress: hx(P.cypress), blossom: hx(P.blossom), ink: hx(P.ink),
};

/* ============================================================ 画布工具 */
/**
 * 一个格号闭区间 [x0..x1] × [z0..z1] 的像素矩形。
 * 体素 (x,_,z) 以世界坐标为中心（A1 的 VoxelWorld 用 ±0.5 角点出片），所以格 n 占
 * [n-0.5, n+0.5] → 像素左边界 = pxOf(n-0.5)。再向外扩 0.5px（两侧对称地扩）避免相邻
 * fillRect 之间露出发丝缝 —— 单边扩会破坏左右对称，故 x 与 w 各让 0.5。
 */
function cellRectPx(ctx, x0, x1, z0, z1) {
  return [pxOf(x0) - PPUG / 2 - 0.5, pyOf(z0) - PPUG / 2 - 0.5,
    (x1 - x0 + 1) * PPUG + 1, (z1 - z0 + 1) * PPUG + 1];
}
function fillCells(ctx, color, x0, x1, y0, y1) {
  const [a, b, w, h] = cellRectPx(ctx, x0, x1, y0, y1);
  ctx.fillStyle = color; ctx.fillRect(a, b, w, h);
}
function clipCells(ctx, x0, x1, y0, y1) {
  const [a, b, w, h] = cellRectPx(ctx, x0, x1, y0, y1);
  ctx.beginPath(); ctx.rect(a, b, w, h); ctx.clip();
}
function rrect(ctx, x, y, w, h, r) {
  const rr = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  if (ctx.roundRect) { ctx.roundRect(x, y, w, h, rr); return; }
  ctx.moveTo(x + rr, y); ctx.lineTo(x + w - rr, y); ctx.quadraticCurveTo(x + w, y, x + w, y + rr);
  ctx.lineTo(x + w, y + h - rr); ctx.quadraticCurveTo(x + w, y + h, x + w - rr, y + h);
  ctx.lineTo(x + rr, y + h); ctx.quadraticCurveTo(x, y + h, x, y + h - rr);
  ctx.lineTo(x, y + rr); ctx.quadraticCurveTo(x, y, x + rr, y);
}

/* 径向渐变精灵（用 drawImage 代替逐帧 createRadialGradient，快很多） */
function radialSprite(hex, alpha) {
  const s = 64;
  const c = document.createElement('canvas'); c.width = c.height = s;
  const x = c.getContext('2d');
  const g = x.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
  const [r, gg, b] = rgb(hex);
  g.addColorStop(0, `rgba(${r},${gg},${b},${alpha})`);
  g.addColorStop(0.55, `rgba(${r},${gg},${b},${alpha * 0.5})`);
  g.addColorStop(1, `rgba(${r},${gg},${b},0)`);
  x.fillStyle = g; x.fillRect(0, 0, s, s);
  return c;
}

/* ============================================================ 铺装盒表 */
function pavingBoxes() {
  const boxes = [];
  const a = L.roads.axis;
  boxes.push({ x0: a.x0, x1: a.x1, z0: a.z0, z1: a.z1, kind: 'axis' });
  for (const c of L.roads.cross) {
    const half = (c.w || 8) >> 1;
    boxes.push({ x0: c.x0, x1: c.x1, z0: c.z - half, z1: c.z + half, kind: 'cross' });
  }
  const r = L.roads.ring; const rhalf = (r.w || 7) >> 1;
  boxes.push({ x0: r.x - rhalf, x1: r.x + rhalf, z0: r.z0, z1: r.z1, kind: 'ring' });
  boxes.push({ x0: -r.x - rhalf, x1: -r.x + rhalf, z0: r.z0, z1: r.z1, kind: 'ring' });
  for (const q of L.roads.courts) {
    boxes.push({ x0: Math.min(q.x0, q.x1), x1: Math.max(q.x0, q.x1), z0: Math.min(q.z0, q.z1), z1: Math.max(q.z0, q.z1), kind: 'court' });
  }
  /* 建筑前贴地的青砖墁地（罩住台基/散水轮廓，纯贴图，不出体素） */
  boxes.push({ x0: -78, x1: 78, z0: 58, z1: 100, kind: 'apron' });      // 主殿前月台院
  boxes.push({ x0: -52, x1: 52, z0: -152, z1: -132, kind: 'apron' });   // 塔院
  boxes.push({ x0: -48, x1: 48, z0: 98, z1: 138, kind: 'apron' });      // 天王庭
  boxes.push({ x0: -40, x1: 40, z0: 156, z1: 196, kind: 'apron' });     // 山门庭
  return boxes;
}

/**
 * 点 (x,z) 落在哪种铺装里 → 类型 | null。
 * 一律先把 x 取 |x| 再判断（左右两侧盒写成一份即可），这保证「严格左右对称」：
 * 任何只看 pavingAt() 的绘制分支在 x 与 -x 上必然一致。
 */
/**
 * 点 (x,z) 落在哪种铺装里 → 类型 | null。
 * 一律先把 x 取 |x| 再判断（左右两侧盒写成一份即可），这保证「严格左右对称」：
 * 任何只看 pavingAt() 的绘制分支在 x 与 -x 上必然一致。
 * 注意折叠后的区间：跨越 x=0 的盒（神道 / 横路 / 院落 / 月台罩地）折到 |x| 后是 [0, hi]，
 * 只有单侧盒（环路）才折成 [lo, hi]。旧写法 lo=min(|x0|,|x1|) 会把 -11..11 折成「只剩 ±11
 * 两条线」⇒ 中轴内侧全被判成非铺装。
 */
function pavingAt(x, z, boxes) {
  const ax = mx(x);
  for (const b of boxes) {
    if (b.kind === 'ring') {
      const r = L.roads.ring; const half = (r.w || 7) >> 1;
      if (ax >= r.x - half && ax <= r.x + half && z >= r.z0 && z <= r.z1) return 'ring';
      continue;
    }
    const spans0 = b.x0 <= 0 && b.x1 >= 0;
    const lo = spans0 ? 0 : Math.min(mx(b.x0), mx(b.x1));
    const hi = Math.max(mx(b.x0), mx(b.x1));
    if (ax >= lo - 0.001 && ax <= hi + 0.001 && z >= Math.min(b.z0, b.z1) && z <= Math.max(b.z0, b.z1)) return b.kind;
  }
  return null;
}

/* ============================================================ 1. 草地 */
function paintGrass(ctx, boxes) {
  ctx.fillStyle = CSS.grass;
  ctx.fillRect(0, 0, TEX_SIZE, TEX_SIZE);

  /* 大尺度明暗：格心采样（N 为偶数 ⇒ 格心集合以 x=0 镜像闭合），噪声一律喂 |x| */
  const N = 260;
  const tw = G / N;
  for (let j = 0; j < N; j++) {
    for (let i = 0; i < N; i++) {
      const xc = -G / 2 + (i + 0.5) * tw, zc = -G / 2 + (j + 0.5) * tw;
      const n = fbmSym(xc, zc + 217.3, 4);
      const m = fbm(mx(xc) * 0.011 + 400, zc * 0.011 + 90, 3);
      const k = 0.74 + 0.42 * n * (0.55 + 0.7 * m);
      ctx.fillStyle = shade(P.grass, k, 1);
      ctx.fillRect(pxOf(xc - tw / 2), pyOf(zc - tw / 2), tw * PPUG + 1, tw * PPUG + 1);
    }
  }
  /* 青苔/枯草/干土斑块：只在 |x| 上采样，再镜像画两份（严格左右对称） */
  const mossS = radialSprite(P.moss, 0.5);
  const dryS = radialSprite(P.sand, 0.26);
  const darkS = radialSprite(P.grassDark, 0.5);
  for (let ix = 0; ix <= 150; ix += 3) {
    for (let iz = -150; iz <= 150; iz += 3) {
      if (packingCell(ix, iz, boxes)) continue;
      const r = hsym(ix, iz, 1);
      if (r > 0.34) continue;
      const s = (10 + 34 * hsym(ix + 7, iz + 3, 2)) * PPUG;
      const ox = (hsym(ix, iz + 11, 3) - 0.5) * 2 * PPUG;
      const cyp = pyOf(iz) + (hsym(ix + 5, iz, 4) - 0.5) * 2 * PPUG;
      const spr = r < 0.13 ? mossS : r < 0.22 ? darkS : dryS;
      /* ox 也要镜像：东侧 +ox、西侧 -ox */
      ctx.drawImage(spr, pxOf(ix) + ox - s / 2, cyp - s / 2, s, s);
      ctx.drawImage(spr, pxOf(-ix) - ox - s / 2, cyp - s / 2, s, s);
    }
  }
  /* 草叶点（中央 300×300 精修，外围靠大尺度明暗） */
  ctx.save();
  ctx.globalAlpha = 0.2;
  ctx.lineCap = 'round';
  ctx.lineWidth = Math.max(1, PPUG * 0.34);
  for (let k = 0; k < 13000; k++) {
    const ax = Math.floor(hsym(k, 1, 5) * 151);          // |x| ∈ [0,150]
    const iz = Math.floor(hash2(k * 3 + 1, 7) * 300) - 150;
    if (packingCell(ax, iz, boxes)) continue;
    const n = fbmSym(ax * 0.9, iz * 0.9, 2);
    if (n < 0.36) continue;
    const col = hsym(ax * 2, iz * 2, 6);
    const lean = (col - 0.5) * PPUG * 1.4;
    ctx.strokeStyle = col < 0.4 ? CSS.grassDark : col < 0.7 ? CSS.moss : CSS.leaf;
    for (const sgn of [1, -1]) {
      const cxp = pxOf(ax * sgn), cyp = pyOf(iz);
      ctx.beginPath(); ctx.moveTo(cxp, cyp);
      ctx.lineTo(cxp + lean * sgn, cyp - PPUG * (0.7 + col));
      ctx.stroke();
    }
  }
  ctx.restore();

  /* 落叶点（镜像两份，椭圆角度取反即镜像） */
  for (let k = 0; k < 2600; k++) {
    const ax = Math.round(hsym(k, 21, 7) * 150 * 2) / 2;
    const iz = Math.round((hash2(k * 7 + 3, 17) * 300 - 150) * 2) / 2;
    if (packingCell(ax, iz, boxes)) continue;
    if (pondDepth(ax, iz) > 0) continue;
    const r = hsym(ax + 1, iz + 2, 8);
    const s = (0.9 + 1.6 * r) * PPUG;
    ctx.fillStyle = r < 0.3 ? '#b7803c' : r < 0.55 ? '#8d6a33' : r < 0.8 ? '#c9a04a' : '#94582f';
    ctx.globalAlpha = 0.42 + 0.3 * r;
    for (const sgn of [1, -1]) {
      ctx.save();
      ctx.translate(pxOf(ax * sgn), pyOf(iz));
      ctx.rotate(sgn * r * 6.28);
      ctx.beginPath(); ctx.ellipse(0, 0, s, s * 0.45, 0, 0, 6.28); ctx.fill();
      ctx.restore();
    }
  }
  ctx.globalAlpha = 1;

  /* 土路 / 砂石过渡带：环路外缘 → 远山脚 */
  paintDirtTransition(ctx, boxes);

  /* 建筑投影斑（柔和暗斑，阴影之外再给一点接地感） */
  paintBuildingShadows(ctx);
}

function packingCell(x, z, boxes) {
  /* 铺装/水面/池岸占用 → 返回 true（草地跳过） */
  if (pavingAt(x, z, boxes)) return true;
  const d = pondDepth(x, z);
  if (d >= 0) return true;
  return false;
}

function paintDirtTransition(ctx, boxes) {
  /* 砂石散水带：以 |x| 计算，再镜像铺到两侧（同一条 alpha 曲线） */
  const r = L.roads.ring; const half = (r.w || 7) >> 1;
  const inner = r.x - half, outer = r.x + half;
  const steps = 26;
  for (let i = 0; i < steps; i++) {
    const t = i / steps;
    const a0 = inner + (outer - inner) * t;
    const a1 = inner + (outer - inner) * (t + 1 / steps);
    const a = Math.min(0.5, 0.34 * (1 - t) * (1 - t) + 0.05);
    ctx.fillStyle = shade(P.sand, 1, a);
    for (const sgn of [1, -1]) {
      const x0 = Math.min(a0, a1) * sgn, x1 = Math.max(a0, a1) * sgn;
      ctx.fillRect(pxOf(x0), pyOf(r.z0), Math.abs(pxOf(x1) - pxOf(x0)) + 1, (r.z1 - r.z0 + 2) * PPUG);
    }
  }
  /* 大范围砂石地衣（围墙外至山体脚，随 |x| 距离增强） */
  for (let iz = -374; iz <= 374; iz += 6) {
    for (let ia = 150; ia <= 374; ia += 6) {
      if (packingCell(ia, iz, boxes)) continue;
      const n = fbm(ia * 0.084, iz * 0.084, 3);
      const fall = Math.max(0, (ia - 160) / 220);
      const a = 0.5 * fall * (0.35 + 0.9 * n);
      if (a < 0.03) continue;
      ctx.fillStyle = shade(ia > 280 ? P.stoneDark : P.dirt, 1, Math.min(0.62, a));
      for (const sgn of [1, -1]) {
        ctx.fillRect(pxOf(ia * sgn), pyOf(iz), 6 * PPUG + 1, 6 * PPUG + 1);
      }
    }
  }
  /* 南北两端同样处理（北端塔院后、南端照壁外） */
  for (let ia = -374; ia <= 374; ia += 6) {
    for (const iz of [330, 348, 366, -330, -348, -366]) {
      if (packingCell(ia, iz, boxes)) continue;
      const n = fbm(mx(ia) * 0.084, Math.abs(iz) * 0.084, 3);
      ctx.fillStyle = shade(P.stoneDark, 1, Math.min(0.5, 0.42 * n + 0.12));
      ctx.fillRect(pxOf(ia), pyOf(iz), 6 * PPUG + 1, 6 * PPUG + 1);
    }
  }
}

/* 建筑轮廓柔和投影（贴图层，配合真实阴影） */
function paintBuildingShadows(ctx) {
  const spots = [
    { x: 0, z: 0, rx: 92, rz: 76, a: 0.34 },        // 主殿
    { x: 0, z: 118, rx: 52, rz: 30, a: 0.26 },      // 天王殿
    { x: 0, z: 178, rx: 48, rz: 30, a: 0.24 },      // 山门
    { x: 0, z: -110, rx: 58, rz: 34, a: 0.26 },     // 藏经楼
    { x: 0, z: -172, rx: 40, rz: 40, a: 0.28 },     // 宝塔
    { x: -118, z: 40, rx: 26, rz: 40, a: 0.22 }, { x: 118, z: 40, rx: 26, rz: 40, a: 0.22 },
    { x: -64, z: 146, rx: 24, rz: 24, a: 0.2 }, { x: 64, z: 146, rx: 24, rz: 24, a: 0.2 },
    { x: -40, z: 78, rx: 16, rz: 16, a: 0.16 }, { x: 40, z: 78, rx: 16, rz: 16, a: 0.16 },
  ];
  const spr = radialSprite(P.ink, 1);
  ctx.save();
  for (const s of spots) {
    ctx.globalAlpha = s.a;
    /* 偏移必须关于 x=0 镜像：用 sign(x) 乘横向偏移，否则左右两侧阴影同向 → 破坏对称 */
    const sg = s.x === 0 ? 0 : Math.sign(s.x);
    const ox = sg * (6 + Math.abs(s.x) * 0.06);
    const oz = -8;
    ctx.drawImage(spr, pxOf(s.x + ox) - s.rx * PPUG, pyOf(s.z + oz) - s.rz * PPUG,
      s.rx * 2 * PPUG, s.rz * 2 * PPUG);
  }
  ctx.restore();
}

/* ============================================================ 2. 铺装 */
function paintPaving(ctx, boxes) {
  for (const b of boxes) {
    switch (b.kind) {
      case 'axis': fillAxisRoad(ctx, b); break;
      case 'cross': fillCrossRoad(ctx, b); break;
      case 'ring': fillRingRoad(ctx, b); break;
      case 'court': fillCourt(ctx, b, false); break;
      default: fillCourt(ctx, b, true); break;
    }
  }
  /* 交叉处补缝，避免接缝错列 */
  for (const c of L.roads.cross) {
    const a = L.roads.axis;
    const half = (c.w || 8) >> 1;
    if (c.x0 < a.x1 && c.x1 > a.x0) {
      stoneSlabs(ctx, a.x0 + 1, a.x1 - 1, c.z - half, c.z + half, 'h', CSS.pathEdge, 0.5);
    }
  }
}

function basePavingFill(ctx, b, base, light) {
  const [a, c, w, h] = cellRectPx(ctx, b.x0, b.x1, b.z0, b.z1);
  ctx.save();
  ctx.beginPath(); ctx.rect(a, c, w, h); ctx.clip();
  ctx.fillStyle = base; ctx.fillRect(a, c, w, h);
  /* 明暗分区：按世界格边界的格心采样（N 为偶数）⇒ 格心集合以 x=0 镜像闭合，
     噪声再喂 |x|，所以铺装内部明暗也是严格左右对称的 */
  const N = 40;
  const wx0 = b.x0 - 0.5, wx1 = b.x1 + 0.5, wz0 = b.z0 - 0.5, wz1 = b.z1 + 0.5;
  const tx = (wx1 - wx0) / N, tz = (wz1 - wz0) / N;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      const xc = wx0 + (i + 0.5) * tx, zc = wz0 + (j + 0.5) * tz;
      const n = fbmSym(xc, zc + 183.3, 3);
      ctx.fillStyle = shade(light, 0.86 + 0.3 * n, 0.42);
      ctx.fillRect(pxOf(xc - tx / 2), pyOf(zc - tz / 2), tx * PPUG + 1, tz * PPUG + 1);
    }
  }
  return () => ctx.restore();
}

/** 石板分格缝：dir='h' 横铺条石（缝为横线）/ 'v' 竖向条石 / 'sq' 方石 */
function stoneSlabs(ctx, x0, x1, z0, z1, dir, lineColor, alpha) {
  ctx.save();
  const [a, b, w, h] = cellRectPx(ctx, x0, x1, z0, z1);
  ctx.beginPath(); ctx.rect(a, b, w, h); ctx.clip();
  ctx.globalAlpha = alpha;
  ctx.strokeStyle = lineColor;
  ctx.lineWidth = Math.max(1, PPUG * 0.16);
  const off = PPUG * 0.5;
  const step = dir === 'sq' ? 4 : dir === 'h' ? 3 : 5;
  if (dir === 'v' || dir === 'sq') {
    /* 从 step 的整数倍开始铺缝：这样缝的格架以 x=0 为对称轴（左右同列） */
    for (let x = Math.ceil(x0 / step) * step; x <= x1; x += step) {
      const xp = pxOf(x);
      ctx.beginPath(); ctx.moveTo(xp, b); ctx.lineTo(xp, b + h); ctx.stroke();
    }
  }
  if (dir === 'h' || dir === 'sq') {
    for (let z = Math.ceil(z0 / step) * step; z <= z1; z += step) {
      const yp = pyOf(z) + (dir === 'h' && (Math.round(z) % 2 ? off : 0));
      ctx.beginPath(); ctx.moveTo(a, yp); ctx.lineTo(a + w, yp); ctx.stroke();
    }
  }
  /* 每 12 格一道伸缩缝（十字丁缝） */
  ctx.globalAlpha = alpha * 1.25;
  ctx.lineWidth = Math.max(1.4, PPUG * 0.3);
  for (let x = Math.ceil(x0 / 12) * 12; x <= x1; x += 12) {
    const xp = pxOf(x); ctx.beginPath(); ctx.moveTo(xp, b); ctx.lineTo(xp, b + h); ctx.stroke();
  }
  for (let z = Math.ceil(z0 / 12) * 12; z <= z1; z += 12) {
    const yp = pyOf(z); ctx.beginPath(); ctx.moveTo(a, yp); ctx.lineTo(a + w, yp); ctx.stroke();
  }
  ctx.restore();
}

/** 路牙 + 内缘阴影 */
function curbShadow(ctx, b, strength) {
  ctx.save();
  const [a, c, w, h] = cellRectPx(ctx, b.x0, b.x1, b.z0, b.z1);
  ctx.beginPath(); ctx.rect(a, c, w, h); ctx.clip();
  const t = PPUG * 1.15;
  const g1 = ctx.createLinearGradient(0, c, 0, c + t);
  g1.addColorStop(0, shade(P.ink, 1, strength)); g1.addColorStop(1, shade(P.ink, 1, 0));
  ctx.fillStyle = g1; ctx.fillRect(a, c, w, t);
  const g2 = ctx.createLinearGradient(0, c + h, 0, c + h - t);
  g2.addColorStop(0, shade(P.ink, 1, strength * 0.85)); g2.addColorStop(1, shade(P.ink, 1, 0));
  ctx.fillStyle = g2; ctx.fillRect(a, c + h - t, w, t);
  const g3 = ctx.createLinearGradient(a, 0, a + t, 0);
  g3.addColorStop(0, shade(P.ink, 1, strength * 0.9)); g3.addColorStop(1, shade(P.ink, 1, 0));
  ctx.fillStyle = g3; ctx.fillRect(a, c, t, h);
  const g4 = ctx.createLinearGradient(a + w, 0, a + w - t, 0);
  g4.addColorStop(0, shade(P.ink, 1, strength * 0.9)); g4.addColorStop(1, shade(P.ink, 1, 0));
  ctx.fillStyle = g4; ctx.fillRect(a + w - t, c, t, h);
  /* 外缘亮面（路牙受光） */
  ctx.strokeStyle = shade(P.marble, 1.06, 0.5);
  ctx.lineWidth = Math.max(1, PPUG * 0.28);
  ctx.strokeRect(a - PPUG * 0.25, c - PPUG * 0.25, w + PPUG * 0.5, h + PPUG * 0.5);
  ctx.restore();
}

function fillAxisRoad(ctx, b) {
  const done = basePavingFill(ctx, b, CSS.flagstone, P.path);
  /* 两侧各 2 格条石、中央御路石区域 */
  stoneSlabs(ctx, b.x0 + 1, b.x1 - 1, b.z0, b.z1, 'h', CSS.pathEdge, 0.62);
  done();
  yulu(ctx, b);
  curbShadow(ctx, b, 0.4);
}

/** 御路石：中央 7 格宽带，逐块大石板 + 抽象云纹浮雕 + 双边线 */
function yulu(ctx, b) {
  const half = 3;
  ctx.save();
  clipCells(ctx, -half, half, b.z0 + 2, b.z1 - 2);
  const [a, c, w, h] = cellRectPx(ctx, -half, half, b.z0 + 2, b.z1 - 2);
  ctx.fillStyle = CSS.marble; ctx.fillRect(a, c, w, h);
  /* 每 6 格一块御路石 */
  for (let z = Math.ceil((b.z0 + 2) / 6) * 6; z < b.z1 - 2; z += 6) {
    const yp = pyOf(z);
    ctx.strokeStyle = CSS.marbleLine; ctx.lineWidth = Math.max(1.2, PPUG * 0.26);
    ctx.beginPath(); ctx.moveTo(a, yp); ctx.lineTo(a + w, yp); ctx.stroke();
    /* 浮雕云纹（镜像不变哈希） */
    const r = hsym(0, z, 11);
    ctx.save();
    ctx.globalAlpha = 0.5;
    ctx.strokeStyle = shade(P.stoneDark, 1.0, 1);
    ctx.lineWidth = Math.max(1.1, PPUG * 0.24);
    const cy = yp + 3 * PPUG;
    for (const s of [-1, 1]) {
      ctx.beginPath();
      for (let k = 0; k <= 22; k++) {
        const t = k / 22;
        const xx = a + w / 2 + s * (w * 0.16 + w * 0.24 * t);
        const yy = cy + Math.sin(t * 5.4 + r * 6) * PPUG * 1.1;
        if (k === 0) ctx.moveTo(xx, yy); else ctx.lineTo(xx, yy);
      }
      ctx.stroke();
    }
    ctx.beginPath();
    ctx.arc(a + w / 2, cy, PPUG * 1.5, 0, 6.28);
    ctx.fillStyle = shade(P.gold, 1, 0.35); ctx.fill();
    ctx.stroke();
    ctx.restore();
  }
  /* 御路石双边线 */
  ctx.strokeStyle = CSS.stoneDark; ctx.lineWidth = Math.max(1.2, PPUG * 0.3);
  for (const s of [-1, 1]) {
    const xx = pxOf(s * (half + 0.5));
    ctx.beginPath(); ctx.moveTo(xx, c); ctx.lineTo(xx, c + h); ctx.stroke();
  }
  ctx.restore();
}

function fillCrossRoad(ctx, b) {
  const done = basePavingFill(ctx, b, CSS.cobble, P.path);
  done();
  stoneSlabs(ctx, b.x0 + 1, b.x1 - 1, b.z0, b.z1, 'v', CSS.pathEdge, 0.55);
  curbShadow(ctx, b, 0.3);
}

function fillRingRoad(ctx, b) {
  const done = basePavingFill(ctx, b, shade(P.cobble, 0.96, 1), P.path);
  done();
  stoneSlabs(ctx, b.x0 + 1, b.x1 - 1, b.z0 + 1, b.z1 - 1, 'sq', CSS.pathEdge, 0.48);
  curbShadow(ctx, b, 0.26);
}

function fillCourt(ctx, b, isApron) {
  const done = basePavingFill(ctx, b, isApron ? CSS.stone : CSS.path, isApron ? P.marbleLine : P.path);
  done();
  stoneSlabs(ctx, b.x0 + 1, b.x1 - 1, b.z0 + 1, b.z1 - 1, 'sq', CSS.pathEdge, isApron ? 0.4 : 0.52);
  if (!isApron) {
    /* 院落：中央十字甬路 + 四方石子花街 */
    ctx.save();
    clipCells(ctx, b.x0, b.x1, b.z0, b.z1);
    const cz = (b.z0 + b.z1) / 2, cx = (b.x0 + b.x1) / 2;
    fillCells(ctx, CSS.marble, b.x0 + 2, b.x1 - 2, Math.round(cz) - 1, Math.round(cz) + 1);
    fillCells(ctx, CSS.marble, Math.round(cx) - 1, Math.round(cx) + 1, b.z0 + 2, b.z1 - 2);
    stoneSlabs(ctx, b.x0 + 2, b.x1 - 2, Math.round(cz) - 1, Math.round(cz) + 1, 'h', CSS.marbleLine, 0.5);
    ctx.restore();
  }
  curbShadow(ctx, b, isApron ? 0.2 : 0.3);
}

/* ============================================================ 3. 放生池水面 */
function pondDepth(x, z) {
  const ax = mx(x);
  for (const p of L.ponds) {
    const d = Math.hypot(ax - mx(p.cx), z - p.cz);
    if (d <= p.r) return 1 - (d / p.r) * (d / p.r);      // >0 = 水，中心最深
  }
  return -1;
}

function paintPonds(ctx) {
  for (const p of L.ponds) {
    const R = (p.r + 4) * PPUG;
    const cx = pxOf(p.cx), cy = pyOf(p.cz);
    ctx.save();
    ctx.beginPath(); ctx.arc(cx, cy, R, 0, 6.28); ctx.clip();
    /* 底色：深浅径向渐变（偏心，模拟天光反射在北侧） */
    const sg = Math.sign(p.cx) || 1;   /* 偏心方向随两侧镜像 */
    const g = ctx.createRadialGradient(cx - sg * R * 0.15, cy - R * 0.25, R * 0.05, cx, cy, R);
    g.addColorStop(0, CSS.water);
    g.addColorStop(0.45, mixHex(P.water, P.waterEdge, 0.35));
    g.addColorStop(0.8, CSS.waterDeep);
    g.addColorStop(1, mixHex(P.waterDeep, P.ink, 0.35));
    ctx.fillStyle = g; ctx.fillRect(cx - R, cy - R, R * 2, R * 2);

    /* 天光/云影带 */
    ctx.globalAlpha = 0.2;
    for (let k = 0; k < 16; k++) {
      const t = k / 16;
      ctx.fillStyle = k % 2 ? shade(P.waterEdge, 1.25, 1) : shade(P.ink, 1, 1);
      ctx.beginPath();
      ctx.ellipse(cx, cy - R + t * R * 2, R * (0.9 - 0.5 * Math.abs(0.5 - t) * 2), PPUG * (0.5 + t), 0, 0, 6.28);
      ctx.globalAlpha = 0.06 + 0.05 * Math.abs(Math.sin(k * 1.7));
      ctx.fill();
    }
    ctx.globalAlpha = 1;

    /* 倒影：北岸树（青绿）+ 塔（灰蓝，中轴池对称） */
    const refl = ctx.createLinearGradient(0, cy - R, 0, cy + R * 0.2);
    refl.addColorStop(0, shade(P.pineDark, 1, 0.32));
    refl.addColorStop(1, shade(P.pineDark, 1, 0));
    ctx.fillStyle = refl; ctx.fillRect(cx - R, cy - R, R * 2, R * 1.2);

    /* 波纹：极坐标采样用 |cos|，再在每个池内 ±dx 镜像铺两份
       → 点集 = {±124 ± d}，整体以 x=0 为镜像轴严格对称 */
    ctx.lineCap = 'round';
    ctx.lineWidth = Math.max(1, PPUG * 0.32);
    for (let k = 0; k < 240; k++) {
      const ang = hash2(k * 5 + 2, 31) * 6.283;
      const rr = p.r * (0.12 + 0.88 * hash2(k + 7, 13));
      const len = 0.24 + 0.5 * hash2(k, 3);
      const dx = Math.abs(Math.cos(ang)), dz = Math.sin(ang);
      ctx.strokeStyle = shade(P.waterEdge, 1.35, 0.2 + 0.25 * hash2(k, 9));
      for (const sx of [-1, 1]) {
        const x0 = p.cx + sx * dx * rr, z0 = p.cz + dz * rr;
        const x1 = p.cx + sx * dx * (rr + len), z1 = p.cz + dz * (rr + len);
        ctx.beginPath(); ctx.moveTo(pxOf(x0), pyOf(z0)); ctx.lineTo(pxOf(x1), pyOf(z1)); ctx.stroke();
      }
    }

    /* 荷叶（同样 ±dx 镜像；椭圆角取反即镜像） */
    for (let k = 0; k < 110; k++) {
      const ang = hash2(k * 3 + 1, 41) * 6.283;
      const rr = p.r * (0.15 + 0.8 * Math.sqrt(hash2(k + 11, 7)));
      const dx = Math.abs(Math.cos(ang)) * rr, lz = p.cz + Math.sin(ang) * rr;
      const rad = (0.9 + 1.5 * hash2(k, 23)) * PPUG;
      const rot = hash2(k, 5) * 6.28;
      ctx.fillStyle = shade(P.pine, 1.0 + 0.25 * hash2(k, 2), 0.82);
      for (const sx of [-1, 1]) {
        ctx.save();
        ctx.translate(pxOf(p.cx + sx * dx), pyOf(lz));
        ctx.rotate(sx * rot);
        ctx.beginPath(); ctx.ellipse(0, 0, rad, rad * 0.86, 0, 0.35, 6.28); ctx.fill();
        ctx.strokeStyle = shade(P.pineDark, 1, 0.5); ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(rad * 0.8 * sx, 0); ctx.stroke();
        ctx.restore();
      }
    }
    /* 荷花（少量粉点） */
    for (let k = 0; k < 16; k++) {
      const ang = hash2(k * 7 + 5, 61) * 6.283;
      const rr = p.r * (0.3 + 0.5 * hash2(k, 17));
      const dx = Math.abs(Math.cos(ang)) * rr;
      ctx.fillStyle = shade(P.blossom, 1, 0.85);
      for (const sx of [-1, 1]) {
        ctx.beginPath();
        ctx.arc(pxOf(p.cx + sx * dx), pyOf(p.cz + Math.sin(ang) * rr), PPUG * 0.5, 0, 6.28);
        ctx.fill();
      }
    }

    /* 石岸圈（贴图担当岸线） */
    ctx.restore();
    ctx.save();
    const [ia, ib, iw, ih] = [cx - (p.r + 2.6) * PPUG, cy - (p.r + 2.6) * PPUG, (p.r + 2.6) * 2 * PPUG, (p.r + 2.6) * 2 * PPUG];
    ctx.beginPath();
    ctx.ellipse(cx, cy, (p.r + 2.6) * PPUG, (p.r + 2.6) * PPUG, 0, 0, 6.28);
    ctx.ellipse(cx, cy, (p.r + 0.6) * PPUG, (p.r + 0.6) * PPUG, 0, 0, 6.28);
    ctx.clip('evenodd');
    ctx.fillStyle = CSS.stone; ctx.fillRect(ia, ib, iw, ih);
    for (let a = 0; a < 6.283; a += 6.283 / 44) {
      const r1 = (p.r + 0.6) * PPUG, r2 = (p.r + 2.6) * PPUG;
      ctx.strokeStyle = CSS.pathEdge; ctx.lineWidth = Math.max(1, PPUG * 0.2);
      ctx.beginPath();
      ctx.moveTo(cx + Math.cos(a) * r1, cy + Math.sin(a) * r1);
      ctx.lineTo(cx + Math.cos(a) * r2, cy + Math.sin(a) * r2);
      ctx.stroke();
    }
    ctx.restore();
    /* 岸边阴影 + 水生植物带 */
    ctx.save();
    ctx.lineWidth = PPUG * 1.6;
    ctx.strokeStyle = shade(P.ink, 1, 0.28);
    ctx.beginPath(); ctx.arc(cx, cy, (p.r + 0.4) * PPUG, 0, 6.28); ctx.stroke();
    ctx.lineWidth = PPUG * 1.2;
    ctx.strokeStyle = shade(P.moss, 1, 0.4);
    ctx.beginPath(); ctx.arc(cx, cy, (p.r + 3.2) * PPUG, 0, 6.28); ctx.stroke();
    ctx.restore();
  }
}

/* ============================================================ 4. 树影 */
function paintTreeShadows(ctx, boxes) {
  const sp = radialSprite(P.ink, 0.9);
  ctx.save();
  for (const s of L.trees.pairs) {
    for (const tnx of [1, -1]) {
      const tx = s.x * tnx;
      if (pondDepth(tx, s.z) >= 0) continue;
      if (pavingAt(tx, s.z, boxes)) continue;
      const rad = (3.4 + 2.2 * hsym(s.x, s.z, 31)) * PPUG;
      /* 偏移随镜像翻符号：西侧向西南、东侧向东南，图面以 x=0 严格对称
         （真实日照阴影由 A1 的平行光阴影负责，这里只是"接地暗斑"） */
      const ox = -(2.2 + s.x * 0.02) * tnx, oz = -2.6;
      ctx.globalAlpha = s.t === 'willow' ? 0.2 : 0.26;
      ctx.drawImage(sp, pxOf(tx + ox) - rad, pyOf(s.z + oz) - rad, rad * 2, rad * 2);
      if (s.t === 'pine' || s.t === 'cypress') {
        ctx.globalAlpha = 0.16;
        const r2 = rad * 0.62;
        ctx.drawImage(sp, pxOf(tx + ox) - r2, pyOf(s.z + oz - 3) - r2, r2 * 2, r2 * 2);
      }
    }
  }
  /* 围墙内零星灌木影 */
  for (let k = 0; k < 90; k++) {
    const ax = 24 + hash2(k * 3 + 1, 101) * 118;
    const z = -196 + hash2(k + 5, 71) * 388;
    if (pondDepth(ax, z) >= 0 || pavingAt(ax, z, boxes)) continue;
    const rad = (2.2 + 1.8 * hash2(k, 13)) * PPUG;
    ctx.globalAlpha = 0.15;
    for (const tnx of [1, -1]) ctx.drawImage(sp, pxOf(ax * tnx - 2) - rad, pyOf(z - 2) - rad, rad * 2, rad * 2);
  }
  ctx.restore();
}

/* ============================================================ 5. 围墙内统一淡色 + 远山雾带 */
function paintGlobalTints(ctx) {
  /* 院墙内整体略浅（人工墁地感） */
  ctx.save();
  const w = L.wall;
  ctx.beginPath();
  ctx.rect(pxOf(w.x[0] + 4), pyOf(w.z[0] + 4), (w.x[1] - w.x[0] - 8) * PPUG, (w.z[1] - w.z[0] - 8) * PPUG);
  ctx.clip();
  ctx.fillStyle = shade(P.sand, 1, 0.07);
  ctx.fillRect(0, 0, TEX_SIZE, TEX_SIZE);
  ctx.restore();

  /* 天际雾带：地面外缘（远山帘幕之后那圈 40–90 格的草地）压成淡蓝灰雾。
     不加这一层，山脊剪影后面还会露出一条亮草地，读成"山凭空立在草场尽头"。
     用 max(|x|,|z|) 作距离 ⇒ 对 x=0 与 z=0 都对称，不会破坏镜像。 */
  ctx.save();
  const HZ = 6, HZ0 = 282, HZW = 96;
  for (let iz = -G / 2; iz <= G / 2; iz += HZ) {
    for (let ia = 0; ia <= G / 2; ia += HZ) {
      const f = Math.max(ia, Math.abs(iz));
      let a = 0.66 * smooth01((f - HZ0) / HZW);
      if (a < 0.012) continue;
      a *= 0.9 + 0.2 * fbm(ia * 0.05, Math.abs(iz) * 0.05, 2);
      ctx.fillStyle = shade(0xd9e4ec, 1, Math.min(0.72, a));
      for (const s of [1, -1]) ctx.fillRect(pxOf(ia * s), pyOf(iz), HZ * PPUG + 1, HZ * PPUG + 1);
    }
  }
  ctx.restore();

}

/* 对称基准验证线：x=0 一列 1 格宽绿线 + z=0 一横排蓝线（最终会被裁掉/覆盖，仅自检用） */
function drawMirrorAxisGuide(ctx) {
  ctx.save();
  ctx.globalAlpha = 0.5;
  ctx.fillStyle = '#00ff00';
  ctx.fillRect(pxOf(0) - 0.5, 0, PPUG, TEX_SIZE);
  ctx.fillStyle = '#0000ff';
  ctx.fillRect(0, pyOf(0) - 0.5, TEX_SIZE, PPUG);
  ctx.restore();
}
function clearMirrorAxisGuide(ctx) {
  ctx.clearRect(pxOf(0) - 0.5, 0, PPUG, TEX_SIZE);
}

/* ============================================================ 组装 */
function finishTexture(canvas) {
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  tex.wrapS = THREE.ClampToEdgeWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.generateMipmaps = true;
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  tex.magFilter = THREE.LinearFilter;
  tex.needsUpdate = true;
  return tex;
}

let cachedCanvas = null;
let cachedTex = null;

/**
 * 程序化地面贴图。
 * @param {{mirrorGuide?:boolean, quiet?:boolean}} opt
 * @returns {THREE.CanvasTexture}
 */
export function paintGroundTexture(opt = {}) {
  if (cachedTex && !opt.mirrorGuide) return cachedTex;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = TEX_SIZE;
  const ctx = canvas.getContext('2d', { alpha: false });
  ctx.imageSmoothingEnabled = true;

  const boxes = pavingBoxes();
  if (opt.mirrorGuide) drawMirrorAxisGuide(ctx);
  paintGrass(ctx, boxes);
  paintPonds(ctx);
  paintPaving(ctx, boxes);
  paintTreeShadows(ctx, boxes);
  paintGlobalTints(ctx);
  if (opt.mirrorGuide) clearMirrorAxisGuide(ctx);

  /* 不做任何翻转：绘制期公式 px=(x+G/2)*S/G、py=(z+G/2)*S/G 已经是几何正确的映射
     （canvas 顶行 = 世界 -Z 北；three 的 flipY 会把 image 顶行送到 uv.v=1 = 局部 +Y
      = 世界 -Z，两次翻转正好抵消 —— 再翻一次就会南北反向 180°）。 */
  if (!opt.mirrorGuide) { cachedCanvas = canvas; cachedTex = finishTexture(canvas); }
  else return finishTexture(canvas);

  if (!opt.quiet) reportTextureStats();
  return cachedTex;
}

/**
 * 自检（集成时在 console 跑）：
 *   import('./src/world/landscape.js').then(m => m.checkGroundTexture())
 * 三项：① 中轴列必须一路是浅色石板（神道压在 x=0 上）；② 左右镜像逐像素比对；
 * ③ 南北判向（南端神道亮、北端塔院后暗）——用来证明没有反向 180°。
 */
export function checkGroundTexture() {
  const src = cachedCanvas || (paintGroundTexture({ quiet: true }), cachedCanvas);
  if (!src) return null;
  const d = src.getContext('2d').getImageData(0, 0, TEX_SIZE, TEX_SIZE).data;
  const lum = (x, y) => {
    const i = (Math.round(y) * TEX_SIZE + Math.round(x)) * 4;
    return d[i] * 0.3 + d[i + 1] * 0.59 + d[i + 2] * 0.11;
  };
  const centerCol = Math.round(pxOf(0));

  /* ① 中轴：神道 z 范围内，中心列亮度 vs 同行 x=±150 的草地亮度 */
  let axis = 0, grass = 0, n = 0;
  for (let z = L.roads.axis.z0; z <= L.roads.axis.z1; z += 6) {
    const y = pyOf(z);
    axis += lum(centerCol, y); grass += lum(pxOf(150), y); n++;
  }
  /* ② 左右镜像：中心列两侧等距采样 */
  let bad = 0, tot = 0, maxDelta = 0;
  for (let y = 0; y < TEX_SIZE; y += 8) {
    for (let dx = 4; dx < 560; dx += 8) {
      const a = lum(centerCol - dx, y), b = lum(centerCol + dx, y);
      const dd = Math.abs(a - b);
      tot++; if (dd > maxDelta) maxDelta = dd;
      if (dd > 26) bad++;
    }
  }
  /* ③ 南北判向：南端（z=200，神道内）应明显亮于北端（z=-180，塔院后草地+投影斑） */
  const south = lum(centerCol, pyOf(200));
  const north = lum(centerCol, pyOf(-180));

  const res = {
    mapping: 'px=(x+G/2)*S/G, py=(z+G/2)*S/G, 不翻转（canvas 顶行 = 世界 -Z 北）',
    centerColPx: centerCol, expectCol: TEX_SIZE / 2,
    axisMean: +(axis / n).toFixed(1), grassMean: +(grass / n).toFixed(1),
    axisBrighterThanGrass: axis > grass,
    asymSamples: tot, asymBadPixels: bad, asymRatio: +(bad / tot).toFixed(5), maxChannelDelta: +maxDelta.toFixed(1),
    southLum: +south.toFixed(1), northLum: +north.toFixed(1), southIsPavedEnd: south > north,
    pass: axis > grass && bad / tot < 0.004 && south > north && centerCol === TEX_SIZE / 2,
  };
  console.info('[ground] check:', res);
  return res;
}

function reportTextureStats() {
  console.info('[ground] texture %d² px, groundSize=%d, px/unit=%s, canvas 顶行 = 世界 -Z（无翻转）',
    TEX_SIZE, G, PPUG.toFixed(4));
}

/* ============================================================ 地面网格 */
export function createGround(T = TONES.noon) {
  const tex = paintGroundTexture();
  const geo = new THREE.PlaneGeometry(G, G, 48, 48);
  geo.rotateX(-Math.PI / 2);
  const mat = new THREE.MeshStandardMaterial({
    map: tex, color: new THREE.Color(0xffffff), roughness: 1, metalness: 0,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.name = 'ground';
  mesh.receiveShadow = true;
  mesh.castShadow = false;
  mesh.position.y = GROUND_Y;   // 地面压在体素层 0 的底面下 0.02：不遮挡 y=0，也不共面闪烁
  mesh.userData.tone = null;
  refreshGroundTone(mesh, T);
  return mesh;
}

/**
 * 切色调：不重建贴图，只 Color tint + 适当 offset/repeat 微调。
 * 注意：three r186 的 Texture 没有 `.color`（只有 Material.color 会乘贴图），
 * 所以 T.tint 落在 material.color 上；若以后版本提供 map.color 则一并乘 tint（向下兼容写法）。
 */
export function refreshGroundTone(mesh, T) {
  if (!mesh || !mesh.material) return;
  const tone = (typeof T === 'string' ? TONES[T] : T) || TONES.noon;   // 也接受色调键名
  const m = mesh.material;
  const tint = new THREE.Color(tone.tint !== undefined ? tone.tint : 0xffffff);
  const groundCol = new THREE.Color(tone.ground !== undefined ? tone.ground : 0x8a8570);
  if (!m.userData) m.userData = {};
  /* 材料色 = 白 → 依 tone.ground 偏色 → 再混入 tone.tint（夜景偏蓝灰、清晨偏暖） */
  const mix = new THREE.Color(0xffffff).lerp(groundCol, 0.3).lerp(tint, 0.22);
  m.color.copy(mix);
  m.roughness = 1;
  m.metalness = 0;
  if (m.map) {
    if (m.map.color && m.map.color.isColor) m.map.color.copy(tint);
    /* 夜景轻微收放 UV + 偏移，让石板花纹与白天不完全相同（不重画 2048² 贴图） */
    const k = tone === TONES.night ? 1.004 : 1;
    m.map.repeat.set(k, k);
    m.map.offset.set((1 - k) * 0.5 + (tone === TONES.dusk ? 0.0006 : 0), (1 - k) * 0.5);
    m.map.needsUpdate = true;
  }
  m.needsUpdate = true;
  mesh.userData.tone = tone;
}

/* ============================================================ 体素：统计器 */
function counter(w) {
  const start = w.count();
  return { start, delta: () => w.count() - start };
}

/** props/A3 未就绪或签名不符时的兜底调用：只警告一次，不让整个场景挂掉 */
let warned = 0;
function safeCall(fn) {
  try {
    if (typeof fn !== 'function') return false;
    fn();
    return true;
  } catch (err) {
    if (warned < 4) {
      warned++;
      console.warn('[terrain] props decorator unavailable:', err && err.message);
    }
    return false;
  }
}

/* ============================================================ 体素：工具 */
function boxFrom(x0, z0, x1, z1) { return { x0: Math.min(x0, x1), z0: Math.min(z0, z1), x1: Math.max(x0, x1), z1: Math.max(z0, z1) }; }

/**
 * 建筑占位盒（含台基外沿一点余量），供地形装饰避让。
 * 只用于「不要种树/不要放陈设」的判定，不写体素。composition.js 亦复用。
 */
export function buildingKeepouts() {
  const b = [];
  const m = L.mainHall;
  for (const t of m.terraces) b.push(boxFrom(-t.x - 2, -t.z - 2, t.x + 2, t.z + 2));
  b.push(boxFrom(m.hall.x0 - 6, m.hall.z0 - 6, m.hall.x1 + 6, m.hall.z1 + 6));
  for (const key of ['gate', 'tianwang', 'rearHall']) {
    const o = L[key];
    b.push(boxFrom(o.x0 - 6, o.z0 - 5, o.x1 + 6, o.z1 + 5));
  }
  for (const s of [-1, 1]) {
    const sh = L.sideHall;
    const halfDepth = sh.faceW / 2 + 6;   // along:'z' → faceW 沿 Z
    const halfWidth = sh.depth / 2 + 5;
    b.push(boxFrom(s * sh.ym - halfWidth, sh.cz - halfDepth, s * sh.ym + halfWidth, sh.cz + halfDepth));
    const tw = L.towers.half + 6;
    b.push(boxFrom(s * L.towers.ym - tw, L.towers.cz - tw, s * L.towers.ym + tw, L.towers.cz + tw));
    b.push(boxFrom(s * L.stelePavilion.ym - 13, L.stelePavilion.cz - 13, s * L.stelePavilion.ym + 13, L.stelePavilion.cz + 13));
    b.push(boxFrom(s * L.smallPagoda.ym - 12, L.smallPagoda.cz - 12, s * L.smallPagoda.ym + 12, L.smallPagoda.cz + 12));
  }
  const pg = L.pagoda.baseHalf + 16;
  b.push(boxFrom(-pg, L.pagoda.cz - pg, pg, L.pagoda.cz + pg));
  for (const c of L.corridors) {
    const hw = (L.corridor.width / 2) + 2;
    if (c.dir === 'z') b.push(boxFrom(c.cx - hw, c.z0, c.cx + hw, c.z1));
    else b.push(boxFrom(c.x0, c.cz - hw, c.x1, c.cz + hw));
  }
  b.push(boxFrom(-L.screen.halfW - 4, L.screen.cz - 6, L.screen.halfW + 4, L.screen.cz + 6));
  return b;
}
const KEEPOUTS = buildingKeepouts();

function inKeepout(x, z, pad = 0) {
  for (const k of KEEPOUTS) {
    if (x >= k.x0 - pad && x <= k.x1 + pad && z >= k.z0 - pad && z <= k.z1 + pad) return true;
  }
  return false;
}
export { inKeepout };

/* ============================================================ 体素：神道 */
/**
 * 御路石在贴图里已经画得很足（大理石 + 云纹），体素只补「反光的石带 + 路牙」：
 *  - 山门庭～主殿前月台院（z∈[56,206]，观众主要看的一段）出中轴 3 格石带；
 *  - 其余段只出 x=0 一格，保证俯视时中轴仍有一条亮线；
 *  - 两侧路牙收成 1 格高连续石线（原 2 格高 = 1300 格，现 ≈706 格）。
 * 路牙格号 = ±(axis.x1+1) = ±12，正好贴在贴图路牙（格 11 外沿 11.5）之外一格 ⇒ 对齐。
 */
function buildSpiritWay(w) {
  const a = L.roads.axis;
  let n = 0;
  for (let z = a.z0; z <= a.z1; z++) {
    const wide = z >= 56 && z <= 140 ? 1 : 0;           // 半宽（1 → 3 格；0 → 1 格）
    for (let x = -wide; x <= wide; x++) {
      const seam = ((z % 7) + 7) % 7 === 0;
      const col = seam ? P.marbleLine : x !== 0 && hsym(x, z, 83) > 0.5 ? P.marble : P.flagstone;
      w.set(x, 0, z, col, { jitter: 0.25 }); n++;
    }
  }
  for (const s of [-1, 1]) {
    for (let z = a.z0; z <= a.z1; z++) {
      if (z > 172 && z < 200) continue;                 // 山门洞前留空
      if ((z & 1) === 1 && z > -140 && z < 168) continue; // 院内段改界石式（贴图路牙已画亮边）
      const gx = s * (a.x1 + 1);
      w.set(gx, 0, z, ((z % 6) === 0) ? P.marbleLine : P.stoneDark, { jitter: 0.4 });
      n++;
    }
  }
  return n;
}

/* ============================================================ 体素：横路 / 环路 / 院落路牙（克制） */
function buildRoadEdges(w) {
  const a = L.roads.axis;
  let n = 0;
  const push = (x, y, z, c) => { w.set(x, y, z, c, { jitter: 0.4 }); n++; };

  /* 横路：只在紧邻神道两侧的短段出 1 格高路牙（全边双格要 672 格，现 336 格） */
  for (const c of L.roads.cross) {
    const half = (c.w || 8) >> 1;
    for (const zEdge of [c.z - half, c.z + half]) {
      for (let x = a.x1 + 2; x <= a.x1 + 13; x += 2) {
        for (const s of [-1, 1]) push(s * x, 0, zEdge, (x % 6 === 0) ? P.marbleLine : P.cobble);
      }
      /* 环路与横路交接处的界石 */
      const r = L.roads.ring, rhalf = (r.w || 7) >> 1;
      if (c.z >= r.z0 && c.z <= r.z1) {
        for (const s of [-1, 1]) push(s * (r.x + rhalf + 1), 0, zEdge, P.stoneDark);
      }
    }
  }
  /* 环路：内侧隔 3 格一段虚线式界石（外侧走草地/砂石过渡，贴图担当） */
  const r = L.roads.ring, rhalf = (r.w || 7) >> 1;
  for (let z = r.z0; z <= r.z1; z += 3) {
    for (const s of [-1, 1]) {
      push(s * (r.x - rhalf - 1), 0, z, ((z - r.z0) % 18 === 0) ? P.marbleLine : P.cobble);
    }
  }
  /* 院落/月台院：四角 1×1 界石柱（原 3×3×3 实心 = 108 格/院） */
  for (const q of L.roads.courts) {
    const b = boxFrom(q.x0, q.z0, q.x1, q.z1);
    for (const cx of [b.x0, b.x1]) {
      for (const cz of [b.z0, b.z1]) {
        w.set(cx, 0, cz, P.stone, { jitter: 0.4 });
        w.set(cx, 1, cz, P.marbleLine, { jitter: 0.3 });
        n += 2;
      }
    }
  }
  return n;
}

/* ============================================================ 体素：月台 + 栏板 + 台阶 */
/**
 * 抬月台（地面以上的小高差平台）。
 * 省体素策略：只有「顶面一层 + 四周侧壁」出片，内部留空（隐藏面剔除会自动处理，
 * 顶面单层的底面虽出片但可见度为零，代价远小于实心 fill）。
 * @param {WWorld} w
 * @param {Array<{x0,x1,z0,z1}>} boxes 一组对称盒（调用方保证 x 镜像成对）
 */
function raisedPodium(w, boxes, h, opts = {}) {
  let n = 0;
  for (const b of boxes) {
    for (let x = b.x0; x <= b.x1; x++) {
      for (let z = b.z0; z <= b.z1; z++) {
        const edge = (x === b.x0 || x === b.x1 || z === b.z0 || z === b.z1);
        const seam = (x % 5 === 0 || z % 5 === 0);
        if (!edge) {
          /* 顶面（含分格缝） */
          w.set(x, h - 1, z, seam ? (opts.line || P.marbleLine) : (opts.cap || P.marble), { jitter: 0.3 });
          n++;
          continue;
        }
        for (let y = 0; y < h; y++) {
          const top = y === h - 1;
          let c = top ? (opts.line || P.marbleLine) : (hsym(x, z + y, 101) > 0.5 ? P.stone : P.stoneDark);
          w.set(x, y, z, c, { jitter: 0.35 }); n++;
        }
      }
    }
  }
  return n;
}

/** 低矮栏板（望柱 + 栏板 + 莲头），axis:'x'|'z'，gaps 为沿轴缺口区间 */
function lowBalustrade(w, axis, at, from, to, y, gaps = []) {
  let n = 0;
  const blocked = (v) => gaps.some(([g0, g1]) => v >= g0 && v <= g1);
  for (let v = from; v <= to; v++) {
    if (blocked(v)) continue;
    const x = axis === 'x' ? v : at;
    const z = axis === 'x' ? at : v;
    const post = (v % 6 === 0) || v === from || v === to;
    const h = post ? 3 : 2;
    for (let yy = 0; yy < h; yy++) {
      w.set(x, y + yy, z, post ? (yy === h - 1 ? P.marble : P.stone) : P.marbleLine, { jitter: 0.3 }); n++;
    }
    if (post) { w.set(x, y + h, z, P.gold, { jitter: 0.2 }); n++; }
  }
  return n;
}

/** 台阶：从 (zStart) 起沿 dirZ 逐级下降；boolu = 中间 3 格御路（仅中轴用） */
function steps(w, { x0, x1, zStart, dirZ, topY, stepsN, color = P.marble, boolu = false }) {
  let n = 0;
  for (let i = 0; i < stepsN; i++) {
    const y = topY - 1 - i;
    if (y < 0) break;
    const z = zStart + dirZ * i;
    for (let x = x0; x <= x1; x++) {
      w.set(x, y, z, i === 0 ? color : (hsym(x, z, 111) > 0.5 ? color : P.marbleLine), { jitter: 0.25 }); n++;
      if (y > 0) { w.set(x, y - 1, z, P.stone, { jitter: 0.3 }); n++; }
    }
  }
  if (boolu) {
    for (let i = 0; i < stepsN; i++) {
      const z = zStart + dirZ * i;
      for (let x = -1; x <= 1; x++) {
        const y = Math.max(0, topY - 1 - i);
        w.set(x, y, z, P.marble, { jitter: 0.15 }); n++;
      }
    }
  }
  return n;
}

/** 台阶（沿 X 方向下降，用于月台侧向落地） */
function stepsX(w, { z0, z1, xStart, dirX, topY, stepsN, color = P.marble }) {
  let n = 0;
  for (let i = 0; i < stepsN; i++) {
    const y = topY - 1 - i;
    if (y < 0) break;
    const x = xStart + dirX * i;
    for (let z = z0; z <= z1; z++) {
      w.set(x, y, z, i === 0 ? color : (hsym(x, z, 113) > 0.5 ? color : P.marbleLine), { jitter: 0.25 }); n++;
      if (y > 0) { w.set(x, y - 1, z, P.stone, { jitter: 0.3 }); n++; }
    }
  }
  return n;
}

/* ============================================================ 体素：放生池石岸（水面靠贴图） */
/**
 * 镜像不变的四舍五入：Math.round(-2.5) = -2 而 -Math.round(2.5) = -3 —— 直接用 Math.round(±cx + v)
 * 会让东/西两圈的取整各偏半格 ⇒ 左右两池的石岸不再互为镜像（实测 464 格无镜像对应）。
 */
function rnd(v) { return v < 0 ? -Math.round(-v) : Math.round(v); }

/**
 * 池心 1 格深的石岸（外圈 + 内圈各 1 格，每 45° 一块 2 格高的压顶角石），
 * 水面由贴图担当（见文件头选型说明）。原「外 1 + 内 2」两圈 = 896 格，现 ≈640 格。
 * 只对 |cx| 那一侧采样、再 ±x 成对落格 ⇒ 两池严格镜像；Map 去重避免重复计数。
 */
function pondShore(w) {
  let n = 0;
  /* 只按 |cx| 那一池生成，另一池靠 ±x 成对落格 ⇒ 严格镜像 + 省一半采样 */
  for (const p of L.ponds) {
    if (p.cx < 0) continue;
    const R = p.r, pcx = mx(p.cx);
    const cells = new Map();
    const put = (x, z, h) => {
      const key = x + ',' + z;
      if (!cells.has(key) || cells.get(key) < h) cells.set(key, h);
    };
    for (let a = 0; a < 360; a += 1.6) {
      const rad = (a * Math.PI) / 180;
      for (const rr of [R + 2.6, R + 1.6]) {
        put(rnd(pcx + Math.cos(rad) * rr), rnd(p.cz + Math.sin(rad) * rr), 1);
      }
    }
    /* 压顶角石：每 45° 一块 2 格高（8 块/池） */
    for (let a = 0; a < 360; a += 45) {
      const rad = (a * Math.PI) / 180;
      put(rnd(pcx + Math.cos(rad) * (R + 2.1)), rnd(p.cz + Math.sin(rad) * (R + 2.1)), 2);
    }
    for (const [key, h] of cells) {
      const [xs, zs] = key.split(',');
      const x = +xs, z = +zs;
      for (let y = 0; y < h; y++) {
        const col = y === h - 1 ? (hsym(x, z, 121) > 0.5 ? P.stone : P.cobble) : P.stoneDark;
        w.set(x, y, z, col, { jitter: 0.45 });
        if (x !== 0) w.set(-x, y, z, col, { jitter: 0.45 });
        n += (x === 0 ? 1 : 2);
      }
    }
    /* 池心 5 朵发光荷叶（夜景点缀，两池四瓣严格镜像） */
    for (let k = 0; k < 5; k++) {
      const ang = hash2(k + 3, 17) * 6.28;
      const rr = R * (0.3 + 0.4 * hash2(k, 5));
      for (const s of [-1, 1]) {
        const x = rnd(pcx + s * Math.cos(ang) * rr * 0.9);
        const z = rnd(p.cz + Math.sin(ang) * rr);
        for (const sg of [1, -1]) {
          w.set(sg * x, 1, z, P.waterEdge, { jitter: 0 });
          w.set(sg * x, 2, z, P.lanternGlow, { glow: true, jitter: 0 });
          n += 2;
        }
      }
    }
  }
  return n;
}

/* ============================================================ 体素：花坛 */
/**
 * 只按 |x| 生成、再 ±x 成对同色落格 ⇒ 严格左右镜像。
 * （旧写法 Math.round(b.x ∓ b.w/2) 对 ±x 各偏半格 ⇒ 东西两畦错开 1 格；
 *   泥面与草地齐平，原「草底 + 泥面」两层 → 现 1 层 + 花头，6 畦 726 格 → 3 组 480 格。）
 */
function flowerBeds(w) {
  const beds = [
    { x: 52, z: 108, w: 9, d: 5 }, { x: 44, z: 162, w: 7, d: 5 }, { x: 58, z: -120, w: 9, d: 5 },
  ];
  let n = 0;
  for (const b of beds) {
    const x0 = rnd(mx(b.x) - b.w / 2), x1 = rnd(mx(b.x) + b.w / 2);
    const z0 = rnd(b.z - b.d / 2), z1 = rnd(b.z + b.d / 2);
    for (let x = x0; x <= x1; x++) {
      for (let z = z0; z <= z1; z++) {
        const edge = (x === x0 || x === x1 || z === z0 || z === z1);
        const r = hsym(x + 3, z + 1, 133);
        const cap = edge ? P.marbleLine
          : r > 0.62 ? (r < 0.72 ? P.blossom : r < 0.82 ? P.goldBright : r < 0.92 ? P.lanternRed : P.paper)
            : P.dirt;
        const sole = edge ? P.stone : P.grassDark;
        for (const sgn of [1, -1]) {
          const xx = x * sgn;
          w.set(xx, 0, z, sole, { jitter: 0.5 });
          w.set(xx, 1, z, cap, { jitter: 0.3 });
          n += 2;
        }
      }
    }
  }
  return n;
}

/* ============================================================ 体素：石灯笼台基 + 列位 */
/**
 * 神道石灯笼列位（供 composition.js 复用，保证与地形台基一致）。
 * 每 ~18 格一对，立在神道两侧路牙外 3 格。
 * **必须按 keepout 过滤**：|x|=15 这条线会从山门、天王殿、主殿三重台基、藏经楼底下穿过，
 * 旧版不过滤 ⇒ 34 盏里有 20 多盏埋进建筑体素（白花 2.2k 格，且夜景点灯位置错误）。
 * 过滤后剩开敞庭院里的 4 对（z=142 / 88 / 70 / -74）。
 */
export function lanternRows() {
  const a = L.roads.axis;
  const out = [];
  for (let z = 196; z >= a.z0 + 10; z -= 18) {
    if (z > 168) continue;                     // 山门以内
    if (inKeepout(a.x1 + 4, z, 1)) continue;   // 落在殿身/台基/山门范围内 ⇒ 不立灯
    for (const s of [-1, 1]) out.push({ x: s * (a.x1 + 4), z, y: 3, h: 6, pair: z });
  }
  return out;
}

function lanternPedestals(w, glow) {
  let n = 0;
  /* lanternRows() 是「东、西」交替的平表 ⇒ 必须按 z 成对取样，否则抽到奇/偶索引会只剩一侧 */
  const zs = [];
  for (const p of lanternRows()) if (zs[zs.length - 1] !== p.z) zs.push(p.z);
  for (let i = 0; i < zs.length; i += LANTERN_STRIDE) {          // 每 N 对一盏（成对仍严格对称）
    const z = zs[i];
    for (const p of lanternRows()) {
      if (p.z !== z) continue;
      w.fill(p.x - 1, 0, p.z - 1, p.x + 1, 1, p.z + 1, P.stone, { jitter: 0.4 });
      w.set(p.x, 2, p.z, P.marble, { jitter: 0.2 });
      n += 13;
      /* 灯体走 props.stoneLantern（SPEC §4）；props 未就绪时由发光芯兜底 */
      const before = w.count();
      if (typeof stoneLantern === 'function') {
        safeCall(() => stoneLantern(w, { x: p.x, z: p.z, y: p.y, h: p.h, glow: glow !== false }));
      }
      if (w.count() === before && glow !== false) {
        w.set(p.x, 6, p.z, P.lanternGlow, { glow: true, jitter: 0 });
      }
      n += w.count() - before;
    }
  }
  return n;
}

/* ============================================================ 体素：树木（默认实现 + hook） */
function simpleTree(w, { x, z, y = 0, kind = 'pine', seed = 1 }) {
  let n = 0;
  const r = (k, s) => hash2(Math.round(mx(x) * 3 + k), Math.round(z * 3 + s));
  const trunkC = P.trunk, dark = P.pineDark;
  const leaf = kind === 'blossom' ? P.blossom : kind === 'willow' ? P.leaf : kind === 'cypress' ? P.cypress : P.pine;
  const H = kind === 'cypress' ? 15 : kind === 'blossom' ? 11 : kind === 'willow' ? 12 : 14;
  for (let yy = 0; yy < 4; yy++) { w.set(x, y + yy, z, trunkC, { jitter: 0.4 }); n++; }
  if (kind === 'cypress') {
    for (let yy = 3; yy <= H; yy++) {
      const rad = Math.max(0, 2.6 - (yy / H) * 2.2);
      for (let dx = -3; dx <= 3; dx++) for (let dz = -3; dz <= 3; dz++) {
        if (dx * dx + dz * dz > rad * rad + 0.6) continue;
        w.set(x + dx, y + yy, z + dz, (dx + dz + yy) % 3 === 0 ? dark : leaf, { jitter: 0.5 }); n++;
      }
    }
    return n;
  }
  const layers = kind === 'pine' ? 4 : 3;
  for (let li = 0; li < layers; li++) {
    const yy = y + 4 + Math.round((li * (H - 5)) / layers);
    const rad = (kind === 'willow' ? 4.6 : 4.2) - li * (kind === 'pine' ? 0.9 : 1.1);
    for (let dx = -5; dx <= 5; dx++) for (let dz = -5; dz <= 5; dz++) {
      const d = Math.hypot(dx, dz);
      if (d > rad + r(dx, dz) * 0.9) continue;
      const col = d > rad - 0.8 ? dark : (r(dx + 1, dz + 2) > 0.72 ? shade2(leaf) : leaf);
      w.set(x + dx, yy, z + dz, col, { jitter: 0.55 }); n++;
    }
    if (kind === 'willow') {
      for (let a = 0; a < 6; a++) {
        const ang = (a / 6) * 6.28 + r(a, 1) * 0.7;
        const bx = Math.round(x + Math.cos(ang) * rad), bz = Math.round(z + Math.sin(ang) * rad);
        for (let k = 0; k < 4; k++) { w.set(bx, yy - k, bz, P.leaf, { jitter: 0.5 }); n++; }
      }
    }
  }
  void seed;
  return n;
}
function shade2(hex) { const [r, g, b] = rgb(hex); return ((Math.min(255, r + 26) << 16) | (Math.min(255, g + 26) << 8) | Math.min(255, b + 26)); }

let treeDecorator = null;
/** 集成时注入 props.pineTree，替换内置简化树 */
export function setTreeDecorator(fn) { treeDecorator = (typeof fn === 'function') ? fn : null; }

function treeHeight(kind) {
  return kind === 'cypress' ? 20 : kind === 'blossom' ? 13 : kind === 'willow' ? 15 : 17;
}

function plantTrees(w, cap) {
  let n = 0, cnt = 0, skipped = 0;
  const a = L.roads.axis, rg = L.roads.ring;
  const rHalf = ((rg.w || 7) >> 1) + 3;
  const blocked = (x, z) => {
    if (pondDepth(x, z) >= 0) return true;                                     // 池内
    if (Math.abs(x) <= a.x1 + 3 && z >= a.z0 - 3 && z <= 210) return true;      // 神道
    if (Math.abs(Math.abs(x) - rg.x) <= rHalf && z >= rg.z0 - 3 && z <= rg.z1 + 3) return true; // 环路
    for (const c of L.roads.cross) {
      const half = ((c.w || 8) >> 1) + 2;
      if (z >= c.z - half && z <= c.z + half && x >= c.x0 && x <= c.x1) return true;
    }
    if (inKeepout(x, z, 7)) return true;                                        // 建筑/台基（冠幅 ≈6，含枝条）
    if (Math.abs(x) > G / 2 - 8 || Math.abs(z) > G / 2 - 8) return true;        // 地面边缘
    return false;
  };
  const one = (x, z, kind, seed) => {
    if (blocked(x, z)) { skipped++; return 0; }
    const before = w.count();
    const args = { x, z, y: 0, h: treeHeight(kind), kind, seed };
    let drew = false;
    const fn = treeDecorator || pineTree;                       // 默认走 SPEC §4 props.pineTree
    if (fn) drew = safeCall(() => fn(w, args));
    if (!drew) simpleTree(w, args);
    n += w.count() - before; cnt++;
    return w.count() - before;
  };
  /**
   * 镜像对**原子**放置：预算判定只看一次。
   * （旧写法 place(+x) / place(-x) 各自判 cap ⇒ cap 恰好在两株之间用尽时只剩东侧一棵，
   *   破坏严格左右对称。）
   */
  const placePair = (x, z, kind, seed) => {
    const ax = mx(x);
    if (n + 160 > (cap || MAX_TREE_VOX)) { skipped += 2; return; }   // 留一对的余量，成对才不被腰斩
    if (blocked(ax, z) && blocked(-ax, z)) { skipped += 2; return; }
    one(ax, z, kind, seed);
    one(-ax, z, kind, seed);
  };
  /* 1) L.trees.pairs 镜像对 */
  for (const s of L.trees.pairs) placePair(s.x, s.z, s.t || 'pine', 1);
  /* 2) 神道柏树列（石灯笼列再外 13 格，前后错开 9 格） */
  for (const p of lanternRows()) {
    if (p.x < 0) continue;                                   // 只取东侧，西侧由镜像补齐
    placePair(p.x + 13, p.z + 9, 'cypress', 2);
  }
  /* 3) 围墙内侧零星树（|x|,z 镜像） */
  for (let k = 0; k < 26; k++) {
    const ax = 26 + Math.floor(hash2(k * 3 + 1, 211) * 96);
    const z = -190 + Math.floor(hash2(k + 7, 97) * 34);
    const z2 = k % 3 === 0 ? 96 + Math.floor(hash2(k, 31) * 60) : z;
    const kind = k % 5 === 0 ? 'blossom' : k % 3 === 0 ? 'cypress' : 'pine';
    placePair(ax, z2, kind, k + 3);
  }
  /* 4) 环路外侧林带（围墙外，远景点缀；也是山脚与草地之间的树线） */
  for (let k = 0; k < 18; k++) {
    const ax = 158 + Math.floor(hash2(k * 5 + 3, 131) * 30);
    const z = -180 + Math.floor(hash2(k + 11, 53) * 330);
    placePair(ax, z, k % 4 === 0 ? 'willow' : 'pine', k + 40);
  }
  return { voxels: n, trees: cnt, skipped };
}

/* ============================================================ 体素：远山（连续「帘幕山脊」） */
function smooth01(t) { const x = Math.min(1, Math.max(0, t)); return x * x * (3 - 2 * x); }


/* ============================================================ 主入口 */
/**
 * 地面体素装饰（高差与边缘）。
 * @param {import('../core/VoxelWorld.js').VoxelWorld} w
 * @param {boolean} glow 是否放置发光点缀（夜景）
 * @returns {{counts:Object, total:number, budget:Object}}
 */
export function decorateTerrain(w, glow = true, budget = MAX_TERRAIN_VOX) {
  const c0 = counter(w);
  /* budget：建筑已经吃掉多少之后还剩多少给地形。按比例收缩两类可伸缩用量（树/远山），
     其余（御路/路牙/月台/池岸）是形制必需，不缩。 */
  const k = Math.max(0.3, Math.min(1, budget / MAX_TERRAIN_VOX));
  const treeCap = Math.round(MAX_TREE_VOX * k);
  const counts = {};

  counts.pondShore = pondShore(w);
  counts.spiritWay = buildSpiritWay(w);
  counts.roadEdges = buildRoadEdges(w);

  /* ---- 主殿前月台：神道两侧对称的抬升大理石平座（h=3，顶面占用 y∈{0,1,2}）
          尺寸按「必须托住 A3 陈设」取最小：composition.js 把 stele 放在 (±24,84,y=3)、
          incenseBurner 放在 (0,80,y=3) ⇒ 两侧耳座覆盖 x∈[20,40]∧z∈[76,86]，
          中座（御路顶）覆盖 x∈[-8,8]∧z∈[74,86]，否则陈设悬空。顶面是面积下限，省不掉。 */
  const lobes = [boxFrom(20, 78, 40, 86), boxFrom(-40, 78, -20, 86)];
  const center = [boxFrom(-7, 76, 7, 86)];
  counts.podiumFront = raisedPodium(w, lobes, 3, { cap: P.marble, line: P.marbleLine })
    + raisedPodium(w, center, 3, { cap: P.marble, line: P.marbleLine });
  let bs = 0;
  for (const s of [-1, 1]) {
    const i = 20 * s, o = 40 * s;
    bs += lowBalustrade(w, 'x', 86, Math.min(i, o), Math.max(i, o), 3, []);   // 南沿
    bs += lowBalustrade(w, 'x', 78, Math.min(i, o), Math.max(i, o), 3, []);   // 北沿
    bs += lowBalustrade(w, 'z', o, 80, 84, 3, []);                            // 外沿
    bs += lowBalustrade(w, 'z', i, 80, 84, 3, [[80, 84]]);                    // 内沿（全留踏道口）
    bs += stepsX(w, { z0: 80, z1: 84, xStart: i - s, dirX: s, topY: 3, stepsN: 3 });
    bs += steps(w, { x0: 30 * s - 1, x1: 30 * s + 1, zStart: 87, dirZ: 1, topY: 3, stepsN: 3 });
  }
  /* 中座南踏道（御路上月台）+ 两侧短栏 */
  bs += steps(w, { x0: -3, x1: 3, zStart: 87, dirZ: 1, topY: 3, stepsN: 3 });
  for (const s of [-1, 1]) bs += lowBalustrade(w, 'z', s * 9, 76, 85, 3, [[80, 84]]);
  counts.podiumFrontBalustrade = bs;

  /* ---- 塔院月台：宝塔台基前（横路之南），h=4；同样按陈设点位取最小：
          stoneLantern@(±21,-131,y=4)、stele@(±28,-124,y=4) ⇒ x∈[18,38]∧z∈[-132,-122] */
  const plobes = [boxFrom(18, -134, 32, -127), boxFrom(-32, -134, -18, -127)];
  counts.podiumPagoda = raisedPodium(w, plobes, 4, { cap: P.flagstone, line: P.marbleLine });
  let pb = 0;
  for (const s of [-1, 1]) {
    const i = 18 * s, o = 32 * s;
    pb += lowBalustrade(w, 'x', -127, Math.min(i, o), Math.max(i, o), 4, []);
    /* 北沿 -132 不立栏：A3 的 stoneLantern@(±21,-131,y=4) 正好压在这一行上 */
    pb += lowBalustrade(w, 'z', o, -132, -128, 4, []);
    pb += lowBalustrade(w, 'z', i, -132, -128, 4, [[-132, -128]]);
    pb += stepsX(w, { z0: -132, z1: -128, xStart: i - s, dirX: s, topY: 4, stepsN: 4 });
  }
  counts.podiumPagodaBalustrade = pb;

  counts.flowerBeds = flowerBeds(w);
  counts.lanternPedestals = lanternPedestals(w, glow);
  counts.rockery = shoreRockery(w);

  const trees = plantTrees(w, treeCap);
  counts.trees = trees.voxels;
  const treeCount = trees.trees;


  const total = c0.delta();
  counts.groundTotal = total;
  counts.paving = counts.spiritWay + counts.roadEdges + counts.podiumFront
    + counts.podiumFrontBalustrade + counts.podiumPagoda + counts.podiumPagodaBalustrade;
  const budgetInfo = { asked: budget, MAX_TERRAIN_VOX, treeCap, scale: +k.toFixed(2) };
  console.info('[terrain] voxels by category: %o', counts);
  console.info('[terrain] paving=%d | trees=%d 株 / %d 格', counts.paving, treeCount, counts.trees);
  console.info('[terrain] ground total = %d / asked %d (scale %s: treeCap %d) skipped %d',
    total, budget, k.toFixed(2), treeCap, trees.skipped || 0);
  if (typeof w === 'object' && w) {
    w.terrainStats = counts;              // 供 composition.js 汇总进 stats
    w.treeCount = treeCount;
  }
  return { counts, total, trees: treeCount, budget: budgetInfo };
}

/**
 * 太湖石：放生池南岸两组（严格左右镜像）。
 * props.rockery 的噪声是「局部 dx」的函数 ⇒ 左右各调一次只会得到平移而非镜像；
 * VoxelWorld 的顶点抖动又按世界 x 取 hash（非镜像不变量）。
 * 处理：把东堆画进一个只记录 set() 的桩，再把格阵按 x→-x 成对写入真实世界，并 jitter:0 关掉抖动，
 * 于是 ±x 两侧的形状与颜色完全镜像（代价：石堆只出一堆的形状，正好也是想要的对称）。
 */
function shoreRockery(w) {
  const spots = [{ x: 104, z: 128, r: 4 }];     // 只声明东堆（|x|），西堆由镜像生成
  const before = w.count();
  for (const s of spots) {
    const cells = [];
    const rec = { set(x, y, z, color) { cells.push([Math.round(x), Math.round(y), Math.round(z), color]); return true; } };
    const drew = safeCall(() => rockery(rec, { x: s.x, z: s.z, y: 0, r: s.r, seed: 3 }));
    if (drew && cells.length) {
      for (const [x, y, z, c] of cells) {
        if (x < 0) continue;                    // 只镜像写，避免自交
        w.set(x, y, z, c, { jitter: 0 });
        w.set(-x, y, z, c, { jitter: 0 });
      }
      continue;
    }
    /* props 缺省时的自削版：同样只铺 |x| 再镜像 */
    for (let k = 0; k < 9; k++) {
      const a = (k / 9) * 6.283;
      const rr = s.r * (0.35 + 0.6 * hsym(s.x, s.z + k, 191));
      const h = 1 + Math.round(2.5 * hsym(s.x + k, s.z, 193));
      for (let y = 0; y < h; y++) {
        const cx = rnd(s.x + Math.cos(a) * rr), cz = rnd(s.z + Math.sin(a) * rr);
        const c = hsym(s.x, s.z + y * 3 + k, 197) > 0.5 ? P.stone : P.stoneDark;
        w.set(cx, y, cz, c, { jitter: 0 });
        w.set(-cx, y, cz, c, { jitter: 0 });
      }
    }
  }
  return w.count() - before;
}

export const GROUND_Y_OFFSET = GROUND_Y;
export const TERRAIN_BUDGET = { MAX_TERRAIN_VOX, MAX_TREE_VOX, TEX_SIZE, PPUG };
