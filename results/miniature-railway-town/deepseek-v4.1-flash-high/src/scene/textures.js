/**
 * TEXTURES — 手工质感程序化贴图库（Canvas2D 现场绘制，零外部资源）。
 * Owner: 材质/贴图 agent。
 *
 * 约定（全库统一）：
 *  - 所有随机量来自固定种子的 mulberry32；绝不调用浏览器内置随机数，保证复位确定性。
 *  - 颜色贴图 colorSpace = SRGBColorSpace；法线贴图保持 NoColorSpace。
 *  - wrapS / wrapT 全为 RepeatWrapping，generateMipmaps 保持默认 true。
 *  - 图案全部按环绕坐标（顶点环面 / 整数周期正弦 / 取模撒点）绘制，重复采样无接缝。
 *  - 灰度贴图（woodPlinth / woodRim / plaster / roofTile / roofSlate / stoneWall / timber /
 *    gravel / ballast / asphalt / flagstone）由材质 color 染色；
 *    彩色贴图（grass / brick / windowGlass / windowLit / signPlate / awning）已烘焙
 *    BASE_COLORS 中的颜色，对应材质 color 用白色。
 */

import * as THREE from 'three';
import { BASE_COLORS, mixHex } from '../palette.js';

/* ------------------------------------------------------------------ *
 * 确定性随机
 * ------------------------------------------------------------------ */

/**
 * mulberry32：返回 () => 0..1 的确定性 PRNG（同种子永远同序列，供全项目复用）。
 */
export function makeSeededRandom(seed) {
  let t = (seed >>> 0) || 0x9e3779b9;
  return function random() {
    t = (t + 0x6d2b79f5) >>> 0;
    let x = Math.imul(t ^ (t >>> 15), 1 | t);
    x = (x + Math.imul(x ^ (x >>> 7), 61 | x)) ^ x;
    return ((x ^ (x >>> 14)) >>> 0) / 4294967296;
  };
}

/** 由格点索引直接得到的 0..1 噪声（无状态、按模索引 → 可平铺图案也能稳定抖动）。 */
function hash01(i, j, salt) {
  let h = Math.imul(i | 0, 374761393) ^ Math.imul(j | 0, 668265263) ^ Math.imul(salt | 0, 1442695041);
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  h ^= h >>> 16;
  return (h >>> 0) / 4294967296;
}

/** 非负取模。 */
function modIdx(i, n) {
  return ((i % n) + n) % n;
}

/* ------------------------------------------------------------------ *
 * 数值 / 颜色小工具
 * ------------------------------------------------------------------ */

function clamp01(v) {
  return v < 0 ? 0 : v > 1 ? 1 : v;
}

function clamp255(v) {
  const n = Math.round(v);
  return n < 0 ? 0 : n > 255 ? 255 : n;
}

/** hex -> [r,g,b]（0..255）。 */
function channels(hex) {
  return [(hex >> 16) & 0xff, (hex >> 8) & 0xff, hex & 0xff];
}

/** [r,g,b] -> hex。 */
function channelHex(r, g, b) {
  return (clamp255(r) << 16) | (clamp255(g) << 8) | clamp255(b);
}

/** 亮度系数（f < 1 变暗，f > 1 变亮），用于同色系的深浅变化。 */
function scaleHex(hex, f) {
  const c = channels(hex);
  return channelHex(c[0] * f, c[1] * f, c[2] * f);
}

/** 灰度值（0..1）-> hex，用于可染色贴图。 */
function grayHex(v) {
  return channelHex(v * 255, v * 255, v * 255);
}

/** hex -> css 颜色串。 */
function cssOf(hex, alpha) {
  const c = channels(hex);
  if (alpha === undefined || alpha >= 1) return `rgb(${c[0]},${c[1]},${c[2]})`;
  return `rgba(${c[0]},${c[1]},${c[2]},${clamp01(alpha)})`;
}

/** 灰度值（0..1）-> css 颜色串。 */
function cssGray(v, alpha) {
  const c = clamp255(v * 255);
  if (alpha === undefined || alpha >= 1) return `rgb(${c},${c},${c})`;
  return `rgba(${c},${c},${c},${clamp01(alpha)})`;
}

/** 纯黑/纯白：仅作中性乘子，不代表任何调色板颜色。 */
const BLACK = 0x000000;
const WHITE = 0xffffff;

/* ------------------------------------------------------------------ *
 * 可平铺噪声
 * ------------------------------------------------------------------ */

/**
 * 环绕值噪声：u/v ∈ 0..1，倍数取整数时依然无缝（格点索引按 cells 取模）。
 */
function makeNoise(cells, rnd) {
  const n = Math.max(2, cells | 0);
  const grid = new Float32Array(n * n);
  for (let i = 0; i < grid.length; i++) grid[i] = rnd();
  const at = (ix, iy) => grid[modIdx(iy, n) * n + modIdx(ix, n)];
  return function sample(u, v) {
    const x = u * n;
    const y = v * n;
    const xi = Math.floor(x);
    const yi = Math.floor(y);
    const tx = x - xi;
    const ty = y - yi;
    const sx = tx * tx * (3 - 2 * tx);
    const sy = ty * ty * (3 - 2 * ty);
    const a = at(xi, yi);
    const b = at(xi + 1, yi);
    const c = at(xi, yi + 1);
    const d = at(xi + 1, yi + 1);
    return (a * (1 - sx) + b * sx) * (1 - sy) + (c * (1 - sx) + d * sx) * sy;
  };
}

/**
 * 分形叠加噪声（0..1）；octaves 层、起始 baseCells 个格点，逐层频率翻倍幅度减半。
 */
function makeFbm(rnd, octaves, baseCells) {
  const layers = [];
  let amp = 1;
  let cells = baseCells;
  let total = 0;
  for (let o = 0; o < octaves; o++) {
    layers.push({ sample: makeNoise(cells, rnd), amp });
    total += amp;
    cells *= 2;
    amp *= 0.5;
  }
  return function fbm(u, v) {
    let sum = 0;
    for (let i = 0; i < layers.length; i++) sum += layers[i].amp * layers[i].sample(u, v);
    return sum / total;
  };
}

/* ------------------------------------------------------------------ *
 * 画布工具
 * ------------------------------------------------------------------ */

function makeCanvas(size) {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  return { canvas, ctx: canvas.getContext('2d') };
}

/**
 * 逐像素填充：cb(u, v, x, y) 返回 [r,g,b]（0..255，可为小数）。
 */
function paintPixels(size, cb) {
  const { canvas, ctx } = makeCanvas(size);
  const img = ctx.createImageData(size, size);
  const d = img.data;
  for (let y = 0; y < size; y++) {
    const v = y / size;
    for (let x = 0; x < size; x++) {
      const out = cb(x / size, v, x, y);
      const i = (y * size + x) * 4;
      d[i] = out[0];
      d[i + 1] = out[1];
      d[i + 2] = out[2];
      d[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  return { canvas, ctx };
}

/**
 * 对已有像素做乘法噪声（保持可平铺），strength = ±比例。
 */
function multiplyNoise(ctx, size, sample, strength) {
  const img = ctx.getImageData(0, 0, size, size);
  const d = img.data;
  for (let y = 0; y < size; y++) {
    const v = y / size;
    for (let x = 0; x < size; x++) {
      const f = 1 + (sample(x / size, v) - 0.5) * 2 * strength;
      const i = (y * size + x) * 4;
      d[i] = clamp255(d[i] * f);
      d[i + 1] = clamp255(d[i + 1] * f);
      d[i + 2] = clamp255(d[i + 2] * f);
    }
  }
  ctx.putImageData(img, 0, 0);
}

/**
 * 只为“跨越边界”的图元补画环绕副本（比整体 3×3 重绘快得多，且保证无缝）。
 * items 每项需含 { x, y }；margin 为图元半径上界（px）。
 */
function drawWrapped(ctx, size, items, margin, draw) {
  for (let k = 0; k < items.length; k++) {
    const it = items[k];
    const dxs = [0];
    const dys = [0];
    if (it.x < margin) dxs.push(size);
    else if (it.x > size - margin) dxs.push(-size);
    if (it.y < margin) dys.push(size);
    else if (it.y > size - margin) dys.push(-size);
    for (let a = 0; a < dxs.length; a++) {
      for (let b = 0; b < dys.length; b++) {
        ctx.save();
        ctx.translate(dxs[a], dys[b]);
        draw(ctx, it);
        ctx.restore();
      }
    }
  }
}

/** 多边形路径（顶点数组 [{x,y}]）。 */
function polygonPath(ctx, pts) {
  ctx.beginPath();
  ctx.moveTo(pts[0].x, pts[0].y);
  for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i].x, pts[i].y);
  ctx.closePath();
}

/** 把顶点朝质心收 gap 像素（生成石块之间的灰浆缝）。 */
function insetPoint(pt, cx, cy, gap) {
  const dx = cx - pt.x;
  const dy = cy - pt.y;
  const d = Math.hypot(dx, dy) || 1;
  return { x: pt.x + (dx / d) * gap, y: pt.y + (dy / d) * gap };
}

/** 把 1 随机切成 n 段的累计比例（长度 n+1，首 0 尾 1），用于砖/石层的块宽。 */
function randomSplits(rnd, n) {
  const w = [];
  let total = 0;
  for (let i = 0; i < n; i++) {
    const v = 0.55 + rnd();
    w.push(v);
    total += v;
  }
  const out = [];
  let acc = 0;
  for (let i = 0; i < n; i++) {
    out.push(acc / total);
    acc += w[i];
  }
  out.push(1);
  return out;
}

/* ------------------------------------------------------------------ *
 * 贴图工厂
 * ------------------------------------------------------------------ */

/** 内部登记表：TEX 的全部贴图，setAnisotropy 统一处理。 */
const ALL_TEXTURES = [];

/**
 * 包装成 THREE.CanvasTexture：统一 wrap、colorSpace、repeat 与登记。
 * srgb=true 用于颜色贴图；法线/粗糙度类保持 NoColorSpace。
 */
function canvasTexture(canvas, opts) {
  const srgb = opts.srgb === true;
  const rx = opts.repeatX === undefined ? 1 : opts.repeatX;
  const ry = opts.repeatY === undefined ? rx : opts.repeatY;
  const tex = new THREE.CanvasTexture(canvas);
  tex.name = opts.name || '';
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  tex.repeat.set(rx, ry);
  tex.needsUpdate = true;
  ALL_TEXTURES.push(tex);
  return tex;
}

/* ------------------------------------------------------------------ *
 * 木材
 * ------------------------------------------------------------------ */

/**
 * 木底座侧面：256²，4 块横板 + 年轮细纹 + 板间暗缝（灰度，材质 color 染色）。
 * 建议 repeat ≈ (2,1)。
 */
function makeWoodPlinth() {
  const size = 256;
  const rnd = makeSeededRandom(0x51a7c3);
  const rings = makeFbm(rnd, 3, 3);
  const fibre = makeFbm(rnd, 4, 16);
  const blotch = makeFbm(rnd, 3, 2);
  const planks = 4;
  const plankH = size / planks;
  const tone = [];
  for (let i = 0; i < planks; i++) tone.push(0.9 + rnd() * 0.16);
  const knots = [];
  for (let i = 0; i < 3; i++) knots.push({ u: rnd(), v: rnd(), r: 0.018 + rnd() * 0.02 });

  const { canvas, ctx } = paintPixels(size, (u, v) => {
    const y = v * size;
    const idx = Math.min(planks - 1, Math.floor(y / plankH));
    const vl = (y - idx * plankH) / plankH;
    const ring = 0.5 + 0.5 * Math.sin(Math.PI * 2 * 5 * vl + 2.6 * rings(u * 2, v));
    const fine = fibre(u * 4, v * 2);
    let l = tone[idx] * (0.86 + 0.14 * ring) * (0.94 + 0.12 * fine);
    l *= 0.96 + 0.08 * blotch(u, v * 0.5);
    for (let k = 0; k < knots.length; k++) {
      const kx = knots[k];
      const du = Math.abs(u - kx.u);
      const dv = Math.abs(v - kx.v);
      const dx = Math.min(du, 1 - du) * size;
      const dy = Math.min(dv, 1 - dv) * size;
      const d = Math.hypot(dx, dy) / (kx.r * size);
      if (d < 2.4) l *= 0.7 + 0.32 * clamp01((d - 0.7) / 1.7);
    }
    return [clamp255(l * 255), clamp255(l * 255), clamp255(l * 255)];
  });

  for (let i = 0; i <= planks; i++) {
    const y = i * plankH;
    ctx.strokeStyle = 'rgba(0,0,0,0.38)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, y + 0.5);
    ctx.lineTo(size, y + 0.5);
    ctx.stroke();
    ctx.strokeStyle = 'rgba(255,255,255,0.12)';
    ctx.beginPath();
    ctx.moveTo(0, y + 2.5);
    ctx.lineTo(size, y + 2.5);
    ctx.stroke();
  }
  return canvas;
}

/**
 * 底座边框顶面：256²，8 条细木板 + 更亮更细的木纹（灰度，材质 color 染色）。
 * 建议 repeat ≈ (3,1)。
 */
function makeWoodRim() {
  const size = 256;
  const rnd = makeSeededRandom(0x7c41b9);
  const rings = makeFbm(rnd, 3, 4);
  const fibre = makeFbm(rnd, 4, 24);
  const boards = 8;
  const boardH = size / boards;
  const tone = [];
  for (let i = 0; i < boards; i++) tone.push(0.94 + rnd() * 0.12);

  const { canvas, ctx } = paintPixels(size, (u, v) => {
    const y = v * size;
    const idx = Math.min(boards - 1, Math.floor(y / boardH));
    const vl = (y - idx * boardH) / boardH;
    const ring = 0.5 + 0.5 * Math.sin(Math.PI * 2 * 8 * vl + 3.1 * rings(u * 2, v));
    const fine = fibre(u * 6, v * 3);
    let l = tone[idx] * (0.93 + 0.07 * ring) * (0.96 + 0.08 * fine);
    return [clamp255(l * 255), clamp255(l * 255), clamp255(l * 255)];
  });

  for (let i = 0; i <= boards; i++) {
    const y = i * boardH;
    ctx.strokeStyle = 'rgba(0,0,0,0.22)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, y + 0.5);
    ctx.lineTo(size, y + 0.5);
    ctx.stroke();
  }
  return canvas;
}

/**
 * 木构墙板：256²，8 条竖向窄板 + 板缝 + 钉眼（灰度，材质 color 染色）。repeat ≈ (2,1)。
 */
function makeTimber() {
  const size = 256;
  const rnd = makeSeededRandom(0x2ab55e);
  const grain = makeFbm(rnd, 4, 18);
  const blotch = makeFbm(rnd, 3, 3);
  const boards = 8;
  const boardW = size / boards;
  const tone = [];
  for (let i = 0; i < boards; i++) tone.push(0.8 + rnd() * 0.2);

  const { canvas, ctx } = paintPixels(size, (u, v) => {
    const x = u * size;
    const idx = Math.min(boards - 1, Math.floor(x / boardW));
    const ul = (x - idx * boardW) / boardW;
    const vertical = 0.5 + 0.5 * Math.sin(Math.PI * 2 * 3 * ul + 2.4 * grain(u * 2, v * 3));
    let l = tone[idx] * (0.88 + 0.12 * vertical);
    l *= 0.94 + 0.12 * grain(u * 6, v * 5);
    l *= 0.96 + 0.08 * blotch(u, v * 0.5);
    return [clamp255(l * 255), clamp255(l * 255), clamp255(l * 255)];
  });

  for (let i = 0; i <= boards; i++) {
    const x = i * boardW;
    ctx.strokeStyle = 'rgba(0,0,0,0.4)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, size);
    ctx.stroke();
    ctx.strokeStyle = 'rgba(255,255,255,0.1)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x + 2, 0);
    ctx.lineTo(x + 2, size);
    ctx.stroke();
  }
  const nails = [];
  for (let i = 0; i < boards; i++) {
    nails.push({ x: (i + 0.5) * boardW, y: size * (0.16 + rnd() * 0.06), r: 1.4 + rnd() });
    nails.push({ x: (i + 0.5) * boardW, y: size * (0.78 + rnd() * 0.06), r: 1.4 + rnd() });
  }
  drawWrapped(ctx, size, nails, 4, (c, it) => {
    c.fillStyle = 'rgba(0,0,0,0.35)';
    c.beginPath();
    c.arc(it.x, it.y, it.r, 0, Math.PI * 2);
    c.fill();
  });
  return canvas;
}

/* ------------------------------------------------------------------ *
 * 地面
 * ------------------------------------------------------------------ */

/**
 * 草地俯视：512²，斑驳草皮 + 碎叶点 + 少量枯黄（已烘焙 BASE_COLORS.ground 颜色）。
 * 建议 repeat ≈ (6,6)。
 */
function makeGrass() {
  const size = 512;
  const rnd = makeSeededRandom(0x2f7a11);
  const patch = makeFbm(rnd, 4, 3);
  const mid = makeFbm(rnd, 4, 10);
  const fine = makeFbm(rnd, 3, 28);
  const G = BASE_COLORS.ground;

  const { canvas, ctx } = paintPixels(size, (u, v) => {
    const p = patch(u, v);
    const m = mid(u * 3, v * 3);
    const f = fine(u * 2, v * 2);
    let col = mixHex(G.grass, G.grassDark, clamp01((p - 0.36) * 1.6));
    col = mixHex(col, G.grassShade, clamp01((m - 0.64) * 2.4));
    col = mixHex(col, G.grassDry, clamp01((p * 0.55 + m * 0.45 - 0.68) * 2.0));
    const k = 0.9 + 0.2 * f;
    const c = channels(col);
    return [c[0] * k, c[1] * k, c[2] * k];
  });

  const bladePool = [scaleHex(G.grass, 1.18), scaleHex(G.grassDark, 0.86), G.grassDry, G.grassShade];
  const blades = [];
  for (let i = 0; i < 1500; i++) {
    const long = rnd() < 0.16;
    const len = long ? 5 + rnd() * 6 : 2 + rnd() * 3;
    blades.push({
      x: rnd() * size,
      y: rnd() * size,
      len,
      tilt: (rnd() - 0.5) * 1.2,
      c: bladePool[(rnd() * bladePool.length) | 0],
      a: 0.22 + rnd() * 0.3,
      w: long ? 1.3 : 0.9,
    });
  }
  drawWrapped(ctx, size, blades, 12, (c, it) => {
    c.globalAlpha = it.a;
    c.strokeStyle = cssOf(it.c);
    c.lineWidth = it.w;
    c.lineCap = 'round';
    c.beginPath();
    c.moveTo(it.x, it.y);
    c.lineTo(it.x + it.tilt * it.len, it.y - it.len);
    c.stroke();
  });
  ctx.globalAlpha = 1;

  const flecks = [];
  const darkPool = [scaleHex(G.grassShade, 0.8), scaleHex(G.grassDark, 0.9)];
  const lightPool = [scaleHex(G.grass, 1.25), G.grassDry];
  for (let i = 0; i < 1100; i++) {
    const dark = rnd() < 0.55;
    flecks.push({
      x: rnd() * size,
      y: rnd() * size,
      r: 0.6 + rnd() * 1.5,
      c: (dark ? darkPool : lightPool)[(rnd() * 2) | 0],
      a: 0.2 + rnd() * 0.3,
    });
  }
  drawWrapped(ctx, size, flecks, 3, (c, it) => {
    c.globalAlpha = it.a;
    c.fillStyle = cssOf(it.c);
    c.beginPath();
    c.arc(it.x, it.y, it.r, 0, Math.PI * 2);
    c.fill();
  });
  ctx.globalAlpha = 1;
  return canvas;
}

/**
 * 沥青：512²，深灰底 + 细颗粒 + 修补痕（灰度，材质 color 染色）。repeat ≈ (4,4)。
 */
function makeAsphalt() {
  const size = 512;
  const rnd = makeSeededRandom(0x6612a7);
  const blotch = makeFbm(rnd, 4, 3);
  const grain = makeFbm(rnd, 3, 22);

  // 灰度结构贴图：均值接近白，由材质 color 染成 road.asphalt
  const { canvas, ctx } = paintPixels(size, (u, v) => {
    const p = blotch(u, v);
    const g = grain(u * 2, v * 2);
    const l = 0.88 + 0.14 * (p - 0.5) + 0.06 * (g - 0.5);
    const c = clamp255(l * 255);
    return [c, c, c];
  });
  multiplyNoise(ctx, size, grain, 0.1);

  const specks = [];
  for (let i = 0; i < 2600; i++) {
    const light = rnd() < 0.42;
    specks.push({
      x: rnd() * size,
      y: rnd() * size,
      r: 0.5 + rnd() * 1.3,
      c: grayHex(light ? 1 : 0.58),
      a: 0.18 + rnd() * 0.32,
    });
  }
  drawWrapped(ctx, size, specks, 3, (c, it) => {
    c.globalAlpha = it.a;
    c.fillStyle = cssOf(it.c);
    c.fillRect(it.x, it.y, it.r * 1.6, it.r * 1.6);
  });
  ctx.globalAlpha = 1;

  // 少量修补痕：低对比的块状补丁
  const patches = [];
  for (let i = 0; i < 3; i++) {
    patches.push({
      x: rnd() * size,
      y: rnd() * size,
      w: 46 + rnd() * 80,
      h: 24 + rnd() * 42,
      rot: (rnd() - 0.5) * 0.5,
      c: grayHex(rnd() < 0.5 ? 0.74 : 0.97),
      a: 0.16 + rnd() * 0.12,
    });
  }
  drawWrapped(ctx, size, patches, 100, (c, it) => {
    c.save();
    c.translate(it.x, it.y);
    c.rotate(it.rot);
    c.globalAlpha = it.a;
    c.fillStyle = cssOf(it.c);
    c.fillRect(-it.w / 2, -it.h / 2, it.w, it.h);
    c.globalAlpha = Math.min(1, it.a + 0.12);
    c.strokeStyle = cssOf(grayHex(0.55));
    c.lineWidth = 1.4;
    c.strokeRect(-it.w / 2, -it.h / 2, it.w, it.h);
    c.restore();
  });
  ctx.globalAlpha = 1;

  const cracks = [];
  for (let i = 0; i < 7; i++) {
    const pts = [{ x: rnd() * size, y: rnd() * size }];
    for (let k = 1; k <= 4; k++) {
      const last = pts[k - 1];
      pts.push({ x: last.x + (rnd() - 0.5) * 70, y: last.y + (rnd() - 0.5) * 70, r: 0 });
    }
    cracks.push({ x: (pts[0].x + pts[4].x) / 2, y: (pts[0].y + pts[4].y) / 2, pts });
  }
  drawWrapped(ctx, size, cracks, 120, (c, it) => {
    c.globalAlpha = 0.3;
    c.strokeStyle = cssOf(grayHex(0.5));
    c.lineWidth = 1.6;
    c.beginPath();
    c.moveTo(it.pts[0].x, it.pts[0].y);
    for (let k = 1; k < it.pts.length; k++) c.lineTo(it.pts[k].x, it.pts[k].y);
    c.stroke();
  });
  ctx.globalAlpha = 1;
  return canvas;
}

/**
 * 碎石路：512²，致密灰褐颗粒（灰度结构，材质 color 染色）。repeat ≈ (4,4)。
 */
function makeGravel() {
  const size = 512;
  const rnd = makeSeededRandom(0x1f3d82);
  const grain = makeFbm(rnd, 3, 26);
  const blotch = makeFbm(rnd, 3, 4);

  // 灰度结构贴图：均值接近白，由材质 color 染成 road.gravel / ground.sand
  const { canvas, ctx } = paintPixels(size, (u, v) => {
    const l = 0.82 + 0.16 * blotch(u, v) + 0.08 * (grain(u * 2, v * 2) - 0.5);
    const c = clamp255(l * 255);
    return [c, c, c];
  });

  const stones = [];
  const pool = [1.0, 0.92, 0.84, 0.74, 0.96];
  for (let i = 0; i < 2400; i++) {
    stones.push({
      x: rnd() * size,
      y: rnd() * size,
      rx: 1.2 + rnd() * 2.2,
      ry: 1.1 + rnd() * 2.0,
      rot: rnd() * Math.PI,
      c: grayHex(pool[(rnd() * pool.length) | 0]),
      a: 0.55 + rnd() * 0.4,
    });
  }
  drawWrapped(ctx, size, stones, 5, (c, it) => {
    c.save();
    c.translate(it.x, it.y);
    c.rotate(it.rot);
    c.globalAlpha = it.a;
    c.fillStyle = cssOf(it.c);
    c.beginPath();
    c.ellipse(0, 0, it.rx, it.ry, 0, 0, Math.PI * 2);
    c.fill();
    c.globalAlpha = it.a * 0.4;
    c.strokeStyle = 'rgba(0,0,0,0.6)';
    c.lineWidth = 0.8;
    c.stroke();
    c.restore();
  });
  ctx.globalAlpha = 1;
  multiplyNoise(ctx, size, grain, 0.07);
  return canvas;
}

/**
 * 石板铺装（广场/人行道）：512²，3×3 不规则石板 + 灰浆缝（灰度，材质 color 染色）。
 * repeat ≈ (2,2)。
 */
function makeFlagstone() {
  const size = 512;
  const rnd = makeSeededRandom(0x4b1210);
  const grain = makeFbm(rnd, 4, 20);
  const cellsX = 3;
  const cellsY = 3;
  const cw = size / cellsX;
  const ch = size / cellsY;

  // 环面顶点抖动：按模索引查表 → 左右/上下都天然接得上
  const offX = [];
  const offY = [];
  const tone = [];
  for (let i = 0; i < cellsX; i++) {
    offX.push([]);
    offY.push([]);
    tone.push([]);
    for (let j = 0; j < cellsY; j++) {
      offX[i].push((rnd() - 0.5) * cw * 0.34);
      offY[i].push((rnd() - 0.5) * ch * 0.34);
      tone[i].push(0.76 + rnd() * 0.22);
    }
  }
  const vert = (i, j) => ({
    x: (i / cellsX) * size + offX[modIdx(i, cellsX)][modIdx(j, cellsY)],
    y: (j / cellsY) * size + offY[modIdx(i, cellsX)][modIdx(j, cellsY)],
  });

  const { canvas, ctx } = paintPixels(size, (u, v) => {
    const mortar = 0.58 + 0.12 * grain(u * 2, v * 2);
    const g = mortar * 255;
    return [g, g, g];
  });

  for (let j = -1; j <= cellsY; j++) {
    for (let i = -1; i <= cellsX; i++) {
      const p = [vert(i, j), vert(i + 1, j), vert(i + 1, j + 1), vert(i, j + 1)];
      const cx = (p[0].x + p[1].x + p[2].x + p[3].x) / 4;
      const cy = (p[0].y + p[1].y + p[2].y + p[3].y) / 4;
      const q = p.map((pt) => insetPoint(pt, cx, cy, 2.6));
      const t = tone[modIdx(i, cellsX)][modIdx(j, cellsY)];
      polygonPath(ctx, q);
      ctx.fillStyle = cssGray(t);
      ctx.fill();
      // 内侧磨圆的高光面（手工倒角感）
      const q2 = p.map((pt) => insetPoint(pt, cx, cy, 9));
      polygonPath(ctx, q2);
      ctx.fillStyle = cssGray(Math.min(1, t * 1.06), 0.65);
      ctx.fill();
      ctx.strokeStyle = cssGray(t * 1.08, 0.4);
      ctx.lineWidth = 1.2;
      ctx.stroke();
    }
  }

  multiplyNoise(ctx, size, grain, 0.08);

  const chips = [];
  for (let i = 0; i < 700; i++) {
    chips.push({
      x: rnd() * size,
      y: rnd() * size,
      r: 0.5 + rnd() * 1.4,
      c: rnd() < 0.5 ? grayHex(0.55) : grayHex(1),
      a: 0.12 + rnd() * 0.2,
    });
  }
  drawWrapped(ctx, size, chips, 3, (c, it) => {
    c.globalAlpha = it.a;
    c.fillStyle = cssOf(it.c);
    c.beginPath();
    c.arc(it.x, it.y, it.r, 0, Math.PI * 2);
    c.fill();
  });
  ctx.globalAlpha = 1;
  return canvas;
}

/**
 * 道砟：512²，较大的灰白碎石 + 颗粒间暗缝（灰度，材质 color 染色）。repeat ≈ (3,3)。
 */
function makeBallast() {
  const size = 512;
  const rnd = makeSeededRandom(0x6d0af3);
  const grain = makeFbm(rnd, 3, 26);

  // 灰度结构贴图：颗粒间暗缝压到 0.6 左右，颗粒本身接近白，由材质 color 染色
  const { canvas, ctx } = paintPixels(size, (u, v) => {
    const g = 0.66 + 0.1 * grain(u * 2, v * 2);
    const c = clamp255(g * 255);
    return [c, c, c];
  });

  const stones = [];
  const pool = [1.0, 0.96, 0.9, 0.84, 0.94];
  for (let i = 0; i < 1100; i++) {
    const r = 3.2 + rnd() * 5.2;
    const lobes = [];
    const n = 5 + ((rnd() * 3) | 0);
    for (let k = 0; k < n; k++) lobes.push(0.62 + rnd() * 0.5);
    stones.push({
      x: rnd() * size,
      y: rnd() * size,
      r,
      rot: rnd() * Math.PI * 2,
      lobes,
      c: grayHex(pool[(rnd() * pool.length) | 0]),
      a: 0.9 + rnd() * 0.1,
    });
  }
  drawWrapped(ctx, size, stones, 11, (c, it) => {
    const n = it.lobes.length;
    c.save();
    c.translate(it.x, it.y);
    c.rotate(it.rot);
    c.globalAlpha = it.a;
    const pts = [];
    for (let k = 0; k < n; k++) {
      const a = (k / n) * Math.PI * 2;
      const rr = it.r * it.lobes[k];
      pts.push({ x: Math.cos(a) * rr, y: Math.sin(a) * rr * 0.85 });
    }
    polygonPath(c, pts);
    c.fillStyle = cssOf(it.c);
    c.fill();
    c.strokeStyle = cssOf(scaleHex(it.c, 0.55));
    c.lineWidth = 1.1;
    c.stroke();
    // 左上受光高光
    c.globalAlpha = it.a * 0.45;
    c.strokeStyle = cssGray(1);
    c.lineWidth = 1.4;
    c.beginPath();
    c.arc(0, 0, it.r * 0.78, Math.PI * 1.05, Math.PI * 1.75);
    c.stroke();
    c.restore();
  });
  ctx.globalAlpha = 1;
  multiplyNoise(ctx, size, grain, 0.06);
  return canvas;
}

/**
 * 灰泥墙面：512²，近白浅灰白底 + 极细颗粒 + 水渍污痕（接近灰度，材质 color 染色）。
 * repeat ≈ (4,4)。
 */
function makePlaster() {
  const size = 512;
  const rnd = makeSeededRandom(0x3ae740);
  const base = BASE_COLORS.window.frame;
  const grain = makeFbm(rnd, 4, 22);
  const wash = makeFbm(rnd, 4, 5);

  const { canvas, ctx } = paintPixels(size, (u, v) => {
    const g = grain(u * 2, v * 2);
    const w = wash(u, v);
    const l = 1.02 - 0.1 * w + 0.05 * g;
    const c = channels(base);
    return [c[0] * l, c[1] * l, c[2] * l];
  });
  multiplyNoise(ctx, size, grain, 0.045);

  const stains = [];
  const stainColor = scaleHex(BASE_COLORS.props.cloth, 0.78);
  for (let i = 0; i < 6; i++) {
    stains.push({
      x: rnd() * size,
      y: rnd() * size,
      r: 34 + rnd() * 90,
      a: 0.08 + rnd() * 0.1,
    });
  }
  drawWrapped(ctx, size, stains, 130, (c, it) => {
    const grad = c.createRadialGradient(it.x, it.y, 0, it.x, it.y, it.r);
    grad.addColorStop(0, cssOf(stainColor, it.a));
    grad.addColorStop(0.7, cssOf(stainColor, it.a * 0.45));
    grad.addColorStop(1, cssOf(stainColor, 0));
    c.fillStyle = grad;
    c.beginPath();
    c.arc(it.x, it.y, it.r, 0, Math.PI * 2);
    c.fill();
  });

  const drips = [];
  for (let i = 0; i < 5; i++) {
    drips.push({ x: rnd() * size, y: rnd() * size, h: 40 + rnd() * 120, w: 5 + rnd() * 14 });
  }
  drawWrapped(ctx, size, drips, 160, (c, it) => {
    const grad = c.createLinearGradient(0, it.y, 0, it.y + it.h);
    grad.addColorStop(0, cssOf(stainColor, 0.14));
    grad.addColorStop(1, cssOf(stainColor, 0));
    c.fillStyle = grad;
    c.fillRect(it.x - it.w / 2, it.y, it.w, it.h);
  });

  const specks = [];
  for (let i = 0; i < 1200; i++) {
    specks.push({
      x: rnd() * size,
      y: rnd() * size,
      r: 0.4 + rnd() * 1.0,
      c: rnd() < 0.5 ? grayHex(1) : grayHex(0.62),
      a: 0.06 + rnd() * 0.12,
    });
  }
  drawWrapped(ctx, size, specks, 2, (c, it) => {
    c.globalAlpha = it.a;
    c.fillStyle = cssOf(it.c);
    c.beginPath();
    c.arc(it.x, it.y, it.r, 0, Math.PI * 2);
    c.fill();
  });
  ctx.globalAlpha = 1;
  return canvas;
}

/* ------------------------------------------------------------------ *
 * 屋面
 * ------------------------------------------------------------------ */

/**
 * 屋面瓦：256²，8×8 弧形瓦垄 + 行列阴影线（灰度，材质 color 染色）。repeat ≈ (3,3)。
 */
function makeRoofTile() {
  const size = 256;
  const rnd = makeSeededRandom(0x9e2b4c);
  const grain = makeFbm(rnd, 3, 24);
  const rows = 8;
  const cols = 8;
  const rowH = size / rows;
  const colW = size / cols;

  const { canvas, ctx } = paintPixels(size, (u, v) => {
    const g = (0.88 + 0.12 * grain(u * 3, v * 3)) * 255;
    return [g, g, g];
  });

  for (let j = -1; j <= rows; j++) {
    const y = j * rowH;
    for (let i = -1; i <= cols; i++) {
      const x = i * colW;
      const t = 0.88 + hash01(modIdx(i, cols), modIdx(j, rows), 91) * 0.16;
      // 瓦垄横截面：中间亮、两侧暗（半圆弧）
      const grad = ctx.createLinearGradient(x, 0, x + colW, 0);
      grad.addColorStop(0, cssGray(t * 0.62));
      grad.addColorStop(0.18, cssGray(t * 0.88));
      grad.addColorStop(0.5, cssGray(t));
      grad.addColorStop(0.82, cssGray(t * 0.88));
      grad.addColorStop(1, cssGray(t * 0.62));
      ctx.fillStyle = grad;
      ctx.fillRect(x, y, colW, rowH);
      // 垄缝亮线
      ctx.strokeStyle = cssGray(t * 1.15, 0.35);
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(x + 0.5, y);
      ctx.lineTo(x + 0.5, y + rowH);
      ctx.stroke();
    }
    // 上一排压住下一排：行顶部阴影 + 下方瓦唇高光
    const sg = ctx.createLinearGradient(0, y, 0, y + rowH * 0.42);
    sg.addColorStop(0, 'rgba(0,0,0,0.34)');
    sg.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = sg;
    ctx.fillRect(0, y, size, rowH * 0.42);
    ctx.fillStyle = cssGray(0.95, 0.2);
    ctx.fillRect(0, y + rowH * 0.14, size, 1.5);
    ctx.fillStyle = 'rgba(0,0,0,0.16)';
    ctx.fillRect(0, y + rowH - 1.5, size, 1.5);
  }
  multiplyNoise(ctx, size, grain, 0.05);
  return canvas;
}

/**
 * 石板/木瓦：256²，错缝矩形瓦片（灰度，材质 color 染色）。repeat ≈ (3,3)。
 */
function makeRoofSlate() {
  const size = 256;
  const rnd = makeSeededRandom(0x14c758);
  const grain = makeFbm(rnd, 3, 24);
  const rows = 8;
  const cols = 8;
  const rowH = size / rows;
  const colW = size / cols;

  const { canvas, ctx } = paintPixels(size, (u, v) => {
    const g = (0.6 + 0.1 * grain(u * 3, v * 3)) * 255;
    return [g, g, g];
  });

  for (let j = -1; j <= rows; j++) {
    const y = j * rowH;
    const shift = modIdx(j, rows) % 2 === 1 ? colW / 2 : 0;
    for (let i = -1; i <= cols; i++) {
      const x = i * colW + shift;
      const t = 0.74 + hash01(modIdx(i, cols), modIdx(j, rows), 37) * 0.24;
      ctx.fillStyle = cssGray(t);
      ctx.fillRect(x + 1, y + 1, colW - 2, rowH - 2);
      const g2 = ctx.createLinearGradient(0, y, 0, y + rowH);
      g2.addColorStop(0, 'rgba(255,255,255,0.12)');
      g2.addColorStop(0.6, 'rgba(255,255,255,0)');
      g2.addColorStop(1, 'rgba(0,0,0,0.14)');
      ctx.fillStyle = g2;
      ctx.fillRect(x + 1, y + 1, colW - 2, rowH - 2);
    }
  }
  for (let j = -1; j <= rows; j++) {
    const y = j * rowH;
    const sg = ctx.createLinearGradient(0, y, 0, y + rowH * 0.34);
    sg.addColorStop(0, 'rgba(0,0,0,0.34)');
    sg.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = sg;
    ctx.fillRect(0, y, size, rowH * 0.34);
  }
  multiplyNoise(ctx, size, grain, 0.06);
  return canvas;
}

/* ------------------------------------------------------------------ *
 * 砌体
 * ------------------------------------------------------------------ */

/**
 * 石砌墙：256²，4 层不规则块石 + 灰浆缝（灰度，材质 color 染色）。repeat ≈ (3,3)。
 */
function makeStoneWall() {
  const size = 256;
  const rnd = makeSeededRandom(0x5c3f21);
  const grain = makeFbm(rnd, 4, 18);
  const rows = 4;
  const rowH = size / rows;

  const yOff = [];
  const splits = [];
  const toneSeed = [];
  for (let j = 0; j < rows; j++) {
    yOff.push((rnd() - 0.5) * rowH * 0.2);
    const blocks = 3 + ((rnd() * 3) | 0);
    splits.push(randomSplits(rnd, blocks));
    toneSeed.push([]);
    for (let i = 0; i <= blocks; i++) toneSeed[j].push(rnd());
  }
  const lineY = (j) => (j / rows) * size + yOff[modIdx(j, rows)];
  // 块宽序列每层循环一次（和为 size），索引取模 + 整块偏移 → 无缝
  const lineX = (j, i) => {
    const f = splits[modIdx(j, rows)];
    const count = f.length - 1;
    return f[modIdx(i, count)] * size + Math.floor(i / count) * size;
  };

  const { canvas, ctx } = paintPixels(size, (u, v) => {
    const g = (0.42 + 0.1 * grain(u * 2, v * 2)) * 255;
    return [g, g, g];
  });

  for (let j = -1; j <= rows; j++) {
    const jj = modIdx(j, rows);
    const f = splits[jj];
    const count = f.length - 1;
    const y0 = lineY(j);
    const y1 = lineY(j + 1);
    for (let i = -1; i <= count; i++) {
      const ii = modIdx(i, count);
      const x0 = lineX(j, i);
      const x1 = lineX(j, i + 1);
      const t = 0.74 + toneSeed[jj][ii] * 0.24;
      const gap = 2.6;
      const cx = (x0 + x1) / 2;
      const cy = (y0 + y1) / 2;
      const jit = (s) => (hash01(ii, jj, s) - 0.5) * 7;
      const pts = [
        { x: x0 + gap + jit(1), y: y0 + gap + jit(2) },
        { x: x1 - gap + jit(3), y: y0 + gap + jit(4) },
        { x: x1 - gap + jit(5), y: y1 - gap + jit(6) },
        { x: x0 + gap + jit(7), y: y1 - gap + jit(8) },
      ];
      polygonPath(ctx, pts);
      ctx.fillStyle = cssGray(t);
      ctx.fill();
      const inner = pts.map((pt) => insetPoint(pt, cx, cy, 4));
      polygonPath(ctx, inner);
      ctx.fillStyle = cssGray(Math.min(1, t * 1.08), 0.75);
      ctx.fill();
      ctx.strokeStyle = cssGray(t * 1.22, 0.45);
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.strokeStyle = 'rgba(0,0,0,0.35)';
      ctx.lineWidth = 1;
      polygonPath(ctx, pts);
      ctx.stroke();
    }
  }
  multiplyNoise(ctx, size, grain, 0.1);
  return canvas;
}

/**
 * 砖墙：256²，8 层错缝砖 + 灰浆缝（已烘焙 BASE_COLORS 砖色/灰浆色）。repeat ≈ (3,3)。
 */
function makeBrick() {
  const size = 256;
  const rnd = makeSeededRandom(0x8b1c4d);
  const grain = makeFbm(rnd, 3, 20);
  const rows = 8;
  const cols = 4;
  const rowH = size / rows;
  const colW = size / cols;
  const mortar = mixHex(BASE_COLORS.wall.plaster[0], BASE_COLORS.wall.trim, 0.45);
  const brickPool = [
    BASE_COLORS.wall.brick,
    mixHex(BASE_COLORS.wall.brick, BASE_COLORS.roof.tileA, 0.35),
    mixHex(BASE_COLORS.wall.brick, BASE_COLORS.roof.tileB, 0.4),
    scaleHex(BASE_COLORS.wall.brick, 0.86),
  ];

  const { canvas, ctx } = paintPixels(size, (u, v) => {
    const c = channels(mortar);
    const n = 0.9 + 0.2 * grain(u * 3, v * 3);
    return [c[0] * n, c[1] * n, c[2] * n];
  });

  for (let j = -1; j <= rows; j++) {
    const y = j * rowH;
    const shift = modIdx(j, rows) % 2 === 1 ? colW / 2 : 0;
    for (let i = -1; i <= cols; i++) {
      const x = i * colW + shift;
      const ii = modIdx(i, cols);
      const jj = modIdx(j, rows);
      const t = brickPool[(hash01(ii, jj, 5) * brickPool.length) | 0];
      const shade = 0.86 + hash01(ii, jj, 9) * 0.24;
      const face = scaleHex(t, shade);
      ctx.fillStyle = cssOf(face);
      ctx.fillRect(x + 1.5, y + 1.5, colW - 3, rowH - 3);
      const grad = ctx.createLinearGradient(0, y, 0, y + rowH);
      grad.addColorStop(0, 'rgba(255,255,255,0.1)');
      grad.addColorStop(0.7, 'rgba(0,0,0,0)');
      grad.addColorStop(1, 'rgba(0,0,0,0.22)');
      ctx.fillStyle = grad;
      ctx.fillRect(x + 1.5, y + 1.5, colW - 3, rowH - 3);
      ctx.strokeStyle = 'rgba(0,0,0,0.18)';
      ctx.lineWidth = 1;
      ctx.strokeRect(x + 1.5, y + 1.5, colW - 3, rowH - 3);
    }
  }
  multiplyNoise(ctx, size, grain, 0.08);

  const chips = [];
  for (let i = 0; i < 500; i++) {
    chips.push({ x: rnd() * size, y: rnd() * size, r: 0.5 + rnd() * 1.2, a: 0.08 + rnd() * 0.12 });
  }
  drawWrapped(ctx, size, chips, 3, (c, it) => {
    c.globalAlpha = it.a;
    c.fillStyle = 'rgba(0,0,0,1)';
    c.beginPath();
    c.arc(it.x, it.y, it.r, 0, Math.PI * 2);
    c.fill();
  });
  ctx.globalAlpha = 1;
  return canvas;
}

/* ------------------------------------------------------------------ *
 * 水面法线
 * ------------------------------------------------------------------ */

/**
 * 水面法线贴图：512²，多层整数周期正弦叠加（NoColorSpace），平均法线朝上 (128,128,255)。
 * repeat ≈ (6,6)。
 */
function makeWaterNormal() {
  const size = 512;
  const rnd = makeSeededRandom(0x2b8e5f);
  const ripple = makeFbm(rnd, 3, 20);
  const modulation = makeFbm(rnd, 2, 4);
  // 整数波数 → 严格可平铺；方向尽量不平行，避免可见重复斑块
  const waves = [];
  const kx = [1, 0, 1, 2, -1, 3, -2, 1];
  const ky = [0, 1, 1, -1, 2, 2, 3, 4];
  const amps = [1.0, 0.86, 0.72, 0.6, 0.48, 0.36, 0.3, 0.24];
  for (let k = 0; k < kx.length; k++) {
    waves.push({
      kx: kx[k],
      ky: ky[k],
      amp: amps[k],
      phase: rnd() * Math.PI * 2,
      modScale: 1 + (k % 3),
      modPhase: rnd(),
    });
  }
  const slope = 0.022;
  const rippleSlope = 0.018;
  const step = 2 / size; // 噪声坐标上约 1px 的步长（有限差分）

  const { canvas } = paintPixels(size, (u, v) => {
    let dU = 0;
    let dV = 0;
    for (let k = 0; k < waves.length; k++) {
      const w = waves[k];
      const mod = 0.62 + 0.38 * modulation((u * w.modScale + w.modPhase) % 1, v * w.modScale);
      const a = w.amp * mod;
      const ang = Math.PI * 2 * (w.kx * u + w.ky * v) + w.phase;
      dU += a * w.kx * Math.cos(ang);
      dV += a * w.ky * Math.cos(ang);
    }
    const ru = (ripple(u * 2 + step, v * 2) - ripple(u * 2 - step, v * 2)) / (2 * step);
    const rv = (ripple(u * 2, v * 2 + step) - ripple(u * 2, v * 2 - step)) / (2 * step);
    const nx = -(dU * slope * Math.PI * 2 + ru * rippleSlope);
    const ny = -(dV * slope * Math.PI * 2 + rv * rippleSlope);
    const len = Math.hypot(nx, ny, 1);
    return [
      clamp255((nx / len) * 0.5 * 255 + 128),
      clamp255((ny / len) * 0.5 * 255 + 128),
      clamp255((1 / len) * 0.5 * 255 + 128),
    ];
  });
  return canvas;
}

/* ------------------------------------------------------------------ *
 * 窗户
 * ------------------------------------------------------------------ */

/** 画窗框与窗格：pane(c, col, row, x, y, w, h) 负责单个窗格的内容；colors 为 css 颜色串 { frame, mullion }。 */
function paintWindowGrid(ctx, size, colors, pane) {
  const inset = size * 0.055;
  const inner = size - inset * 2;
  const cols = 2;
  const rows = 3;
  const bar = size * 0.028;
  const paneW = (inner - bar * (cols - 1)) / cols;
  const paneH = (inner - bar * (rows - 1)) / rows;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = inset + c * (paneW + bar);
      const y = inset + r * (paneH + bar);
      pane(ctx, c, r, x, y, paneW, paneH);
    }
  }
  // 深色十字窗格（材质里另有 mullion 材质，这里保证贴图自身可读）
  ctx.strokeStyle = colors.mullion;
  ctx.lineWidth = bar;
  ctx.beginPath();
  for (let c = 1; c < cols; c++) {
    const x = inset + c * paneW + (c - 0.5) * bar;
    ctx.moveTo(x, inset);
    ctx.lineTo(x, size - inset);
  }
  for (let r = 1; r < rows; r++) {
    const y = inset + r * paneH + (r - 0.5) * bar;
    ctx.moveTo(inset, y);
    ctx.lineTo(size - inset, y);
  }
  ctx.stroke();
  // 外框 + 内缘阴影
  ctx.strokeStyle = colors.frame;
  ctx.lineWidth = inset * 2;
  ctx.strokeRect(0, 0, size, size);
  ctx.strokeStyle = 'rgba(0,0,0,0.35)';
  ctx.lineWidth = 2;
  ctx.strokeRect(inset - 1, inset - 1, inner + 2, inner + 2);
}

/**
 * 窗玻璃底色（白天）：256²，冷调玻璃 + 深色窗格 + 6 个窗格（已烘焙颜色）。repeat (1,1)。
 */
function makeWindowGlass() {
  const size = 256;
  const rnd = makeSeededRandom(0x7053cd);
  const grain = makeFbm(rnd, 3, 16);
  const { canvas, ctx } = makeCanvas(size);

  ctx.fillStyle = cssOf(BASE_COLORS.window.frame);
  ctx.fillRect(0, 0, size, size);

  const paneTone = [];
  for (let i = 0; i < 6; i++) paneTone.push(0.72 + rnd() * 0.5);

  paintWindowGrid(ctx, size, { frame: cssOf(BASE_COLORS.window.frame), mullion: cssOf(BASE_COLORS.window.mullion) }, (c, col, row, x, y, w, h) => {
    const t = paneTone[row * 2 + col];
    const glass = scaleHex(BASE_COLORS.window.glass, t);
    const grad = ctx.createLinearGradient(x, y, x + w * 0.6, y + h);
    grad.addColorStop(0, cssOf(scaleHex(glass, 1.9)));
    grad.addColorStop(0.35, cssOf(glass));
    grad.addColorStop(1, cssOf(scaleHex(glass, 0.7)));
    ctx.fillStyle = grad;
    ctx.fillRect(x, y, w, h);
    // 斜向天光反射
    ctx.save();
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.clip();
    ctx.globalAlpha = 0.16;
    ctx.fillStyle = cssOf(BASE_COLORS.window.cool);
    ctx.beginPath();
    ctx.moveTo(x - w * 0.2, y + h * 0.75);
    ctx.lineTo(x + w * 0.55, y - h * 0.2);
    ctx.lineTo(x + w * 0.95, y - h * 0.2);
    ctx.lineTo(x + w * 0.2, y + h * 0.95);
    ctx.closePath();
    ctx.fill();
    ctx.globalAlpha = 0.5;
    ctx.strokeStyle = cssOf(scaleHex(BASE_COLORS.window.glass, 0.5));
    ctx.lineWidth = 2;
    ctx.strokeRect(x, y, w, h);
    ctx.restore();
  });

  ctx.globalAlpha = 0.05;
  const items = [];
  for (let i = 0; i < 400; i++) items.push({ x: rnd() * size, y: rnd() * size, r: 0.5 + rnd() * 1.2 });
  drawWrapped(ctx, size, items, 3, (c, it) => {
    c.fillStyle = cssGray(grain(it.x / size, it.y / size) > 0.5 ? 1 : 0.2);
    c.beginPath();
    c.arc(it.x, it.y, it.r, 0, Math.PI * 2);
    c.fill();
  });
  ctx.globalAlpha = 1;
  return canvas;
}

/**
 * 亮窗（夜间 emissiveMap）：256²，暖光渐变窗格 + 窗框剪影 + 窗帘/室内暗示（烘焙颜色）。
 * repeat (1,1)。
 */
function makeWindowLit() {
  const size = 256;
  const rnd = makeSeededRandom(0x19d8b2);
  const { canvas, ctx } = makeCanvas(size);

  // 窗框区域接近黑色，保证作为自发光贴图时只有窗格发亮
  ctx.fillStyle = cssOf(scaleHex(BASE_COLORS.window.mullion, 0.22));
  ctx.fillRect(0, 0, size, size);

  const paneInfo = [];
  for (let i = 0; i < 6; i++) {
    paneInfo.push({ bright: 0.45 + rnd() * 0.55, warm: rnd(), curtain: rnd() < 0.45, bulb: rnd() < 0.3 });
  }

  paintWindowGrid(ctx, size, { frame: cssOf(scaleHex(BASE_COLORS.window.mullion, 0.22)), mullion: cssOf(scaleHex(BASE_COLORS.window.mullion, 0.3)) }, (c, col, row, x, y, w, h) => {
    const info = paneInfo[row * 2 + col];
    const top = mixHex(BASE_COLORS.window.warm, BASE_COLORS.window.cool, info.warm * 0.35);
    const bottom = mixHex(BASE_COLORS.window.warmDeep, BASE_COLORS.window.warm, 0.4);
    const grad = ctx.createLinearGradient(x, y, x, y + h);
    grad.addColorStop(0, cssOf(scaleHex(top, info.bright)));
    grad.addColorStop(0.62, cssOf(scaleHex(bottom, info.bright)));
    grad.addColorStop(1, cssOf(scaleHex(bottom, info.bright * 0.55)));
    ctx.fillStyle = grad;
    ctx.fillRect(x, y, w, h);
    ctx.save();
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.clip();
    if (info.curtain) {
      ctx.globalAlpha = 0.42;
      ctx.fillStyle = cssOf(scaleHex(BASE_COLORS.window.mullion, 0.6));
      ctx.fillRect(x, y, w * 0.26, h);
      ctx.fillRect(x + w * 0.74, y, w * 0.26, h);
      ctx.globalAlpha = 0.22;
      ctx.fillStyle = cssOf(BASE_COLORS.props.cloth);
      ctx.fillRect(x + w * 0.24, y, w * 0.06, h);
      ctx.fillRect(x + w * 0.7, y, w * 0.06, h);
    }
    // 室内家具剪影
    ctx.globalAlpha = 0.5;
    ctx.fillStyle = cssOf(scaleHex(BASE_COLORS.window.mullion, 0.45));
    ctx.beginPath();
    ctx.ellipse(x + w * 0.5, y + h * 0.94, w * (0.22 + rnd() * 0.14), h * 0.16, 0, 0, Math.PI * 2);
    ctx.fill();
    // 灯泡/灯罩亮点
    if (info.bulb) {
      ctx.globalAlpha = 0.9;
      const bx = x + w * (0.3 + rnd() * 0.4);
      const by = y + h * (0.28 + rnd() * 0.2);
      const br = Math.max(w, h) * 0.12;
      const bg = ctx.createRadialGradient(bx, by, 0, bx, by, br * 3);
      bg.addColorStop(0, cssOf(scaleHex(BASE_COLORS.window.cool, 1)));
      bg.addColorStop(0.35, cssOf(BASE_COLORS.window.warm, 0.6));
      bg.addColorStop(1, cssOf(BASE_COLORS.window.warm, 0));
      ctx.fillStyle = bg;
      ctx.beginPath();
      ctx.arc(bx, by, br * 3, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
    ctx.globalAlpha = 1;
  });
  return canvas;
}

/* ------------------------------------------------------------------ *
 * 招牌与遮阳篷
 * ------------------------------------------------------------------ */

/**
 * 站牌/店招底板：256²，深蓝底 + 浅色边框 + 横向文字占位条纹（已烘焙颜色）。repeat (1,1)。
 */
function makeSignPlate() {
  const size = 256;
  const rnd = makeSeededRandom(0x4f27a8);
  const grain = makeFbm(rnd, 3, 18);
  const board = BASE_COLORS.station.signBoard;
  const ink = BASE_COLORS.station.signText;

  const { canvas, ctx } = paintPixels(size, (u, v) => {
    const grad = 1.06 - 0.18 * v;
    const c = channels(board);
    const n = 0.96 + 0.08 * grain(u * 3, v * 3);
    return [c[0] * grad * n, c[1] * grad * n, c[2] * grad * n];
  });

  ctx.globalAlpha = 0.85;
  ctx.strokeStyle = cssOf(ink);
  ctx.lineWidth = 7;
  ctx.strokeRect(11, 11, size - 22, size - 22);
  ctx.lineWidth = 1.6;
  ctx.strokeRect(21, 21, size - 42, size - 42);
  ctx.globalAlpha = 1;

  // 横向“文字”占位条纹
  const stripes = [
    { x: 36, y: 62, w: 184, h: 30 },
    { x: 36, y: 108, w: 150, h: 24 },
    { x: 36, y: 148, w: 176, h: 18 },
  ];
  for (let i = 0; i < stripes.length; i++) {
    const s = stripes[i];
    ctx.globalAlpha = 0.9 - i * 0.08;
    ctx.fillStyle = cssOf(ink);
    const r = s.h / 2;
    ctx.beginPath();
    ctx.moveTo(s.x + r, s.y);
    ctx.lineTo(s.x + s.w - r, s.y);
    ctx.arc(s.x + s.w - r, s.y + r, r, -Math.PI / 2, Math.PI / 2);
    ctx.lineTo(s.x + r, s.y + s.h);
    ctx.arc(s.x + r, s.y + r, r, Math.PI / 2, -Math.PI / 2);
    ctx.closePath();
    ctx.fill();
  }
  // 小圆徽记
  ctx.globalAlpha = 0.7;
  ctx.fillStyle = cssOf(ink);
  ctx.beginPath();
  ctx.arc(64, 200, 13, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 0.55;
  ctx.fillStyle = cssOf(board);
  ctx.beginPath();
  ctx.arc(64, 200, 6, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 1;

  multiplyNoise(ctx, size, grain, 0.06);
  return canvas;
}

/**
 * 遮阳篷条纹布：256²，两种颜色相间的竖条纹 + 布纹噪声（已烘焙颜色）。repeat ≈ (1,1)。
 */
function makeAwning() {
  const size = 256;
  const rnd = makeSeededRandom(0x6a83f1);
  const grain = makeFbm(rnd, 4, 26);
  const A = BASE_COLORS.props.awningA;
  const B = BASE_COLORS.props.awningB;
  const stripes = 8;
  const stripeW = size / stripes;
  const tone = [];
  for (let i = 0; i < stripes; i++) tone.push(0.9 + rnd() * 0.2);

  const { canvas, ctx } = paintPixels(size, (u, v) => {
    const x = u * size;
    const idx = Math.min(stripes - 1, Math.floor(x / stripeW));
    const base = idx % 2 === 0 ? A : B;
    const weave = 0.94 + 0.12 * grain(u * 4, v * 4);
    const fold = 1 - 0.06 * Math.max(0, Math.sin(Math.PI * 2 * 2 * v));
    const l = tone[idx] * weave * fold;
    const c = channels(base);
    return [c[0] * l, c[1] * l, c[2] * l];
  });

  for (let i = 0; i <= stripes; i++) {
    const x = i * stripeW;
    ctx.strokeStyle = 'rgba(0,0,0,0.18)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, size);
    ctx.stroke();
  }
  // 布面横向褶皱的柔和明暗
  ctx.globalAlpha = 0.12;
  ctx.fillStyle = 'rgba(0,0,0,1)';
  for (let y = 0; y < size; y += stripeW * 2) {
    ctx.fillRect(0, y, size, 2);
  }
  ctx.globalAlpha = 1;
  return canvas;
}

/* ------------------------------------------------------------------ *
 * 导出表
 * ------------------------------------------------------------------ */

/**
 * TEX —— 全部程序化贴图（唯一实例，供材质库与场景模块共享）。
 */
export const TEX = {
  woodPlinth: canvasTexture(makeWoodPlinth(), { name: 'woodPlinth', srgb: true, repeatX: 2, repeatY: 1 }),
  woodRim: canvasTexture(makeWoodRim(), { name: 'woodRim', srgb: true, repeatX: 3, repeatY: 1 }),
  grass: canvasTexture(makeGrass(), { name: 'grass', srgb: true, repeatX: 6, repeatY: 6 }),
  asphalt: canvasTexture(makeAsphalt(), { name: 'asphalt', srgb: true, repeatX: 4, repeatY: 4 }),
  gravel: canvasTexture(makeGravel(), { name: 'gravel', srgb: true, repeatX: 4, repeatY: 4 }),
  flagstone: canvasTexture(makeFlagstone(), { name: 'flagstone', srgb: true, repeatX: 2, repeatY: 2 }),
  ballast: canvasTexture(makeBallast(), { name: 'ballast', srgb: true, repeatX: 3, repeatY: 3 }),
  plaster: canvasTexture(makePlaster(), { name: 'plaster', srgb: true, repeatX: 4, repeatY: 4 }),
  roofTile: canvasTexture(makeRoofTile(), { name: 'roofTile', srgb: true, repeatX: 3, repeatY: 3 }),
  roofSlate: canvasTexture(makeRoofSlate(), { name: 'roofSlate', srgb: true, repeatX: 3, repeatY: 3 }),
  stoneWall: canvasTexture(makeStoneWall(), { name: 'stoneWall', srgb: true, repeatX: 3, repeatY: 3 }),
  brick: canvasTexture(makeBrick(), { name: 'brick', srgb: true, repeatX: 3, repeatY: 3 }),
  timber: canvasTexture(makeTimber(), { name: 'timber', srgb: true, repeatX: 2, repeatY: 1 }),
  waterNormal: canvasTexture(makeWaterNormal(), { name: 'waterNormal', srgb: false, repeatX: 6, repeatY: 6 }),
  windowGlass: canvasTexture(makeWindowGlass(), { name: 'windowGlass', srgb: true, repeatX: 1, repeatY: 1 }),
  windowLit: canvasTexture(makeWindowLit(), { name: 'windowLit', srgb: true, repeatX: 1, repeatY: 1 }),
  signPlate: canvasTexture(makeSignPlate(), { name: 'signPlate', srgb: true, repeatX: 1, repeatY: 1 }),
  awning: canvasTexture(makeAwning(), { name: 'awning', srgb: true, repeatX: 1, repeatY: 1 }),
};

/**
 * setAnisotropy —— 把各向异性过滤值统一应用到全部 TEX 贴图并标记 needsUpdate。
 * 传入渲染器的 renderer.capabilities.getMaxAnisotropy() 即可（1..16 之间取整）。
 */
export function setAnisotropy(v) {
  const value = Math.max(1, Math.min(16, Math.floor(Number(v) || 1)));
  for (let i = 0; i < ALL_TEXTURES.length; i++) {
    ALL_TEXTURES[i].anisotropy = value;
    ALL_TEXTURES[i].needsUpdate = true;
  }
}
