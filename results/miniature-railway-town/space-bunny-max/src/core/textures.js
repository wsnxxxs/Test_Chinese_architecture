import * as THREE from 'three';

/* 全部贴图都用 Canvas 现场生成，工程零外部素材依赖。 */

/* ── 噪声 ─────────────────────────────────────────────────────────── */
function hash2(x, y, s) {
  let h = Math.imul(x | 0, 374761393) ^ Math.imul(y | 0, 668265263) ^ Math.imul(s | 0, 1013904223);
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
}
const fade = (t) => t * t * (3 - 2 * t);

/** 可平铺的值噪声：period 为整数格数 */
function vnoise(x, y, period, seed) {
  const xi = Math.floor(x);
  const yi = Math.floor(y);
  const xf = x - xi;
  const yf = y - yi;
  const w = (v) => ((v % period) + period) % period;
  const a = hash2(w(xi), w(yi), seed);
  const b = hash2(w(xi + 1), w(yi), seed);
  const c = hash2(w(xi), w(yi + 1), seed);
  const d = hash2(w(xi + 1), w(yi + 1), seed);
  const u = fade(xf);
  const v = fade(yf);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}

function fbm(x, y, period, seed, oct = 4) {
  let sum = 0;
  let amp = 0.5;
  let f = 1;
  let norm = 0;
  for (let i = 0; i < oct; i++) {
    sum += amp * vnoise(x * f, y * f, period * f, seed + i * 17);
    norm += amp;
    amp *= 0.5;
    f *= 2;
  }
  return sum / norm;
}

function makeCanvas(w, h) {
  const cv = document.createElement('canvas');
  cv.width = w;
  cv.height = h;
  return cv;
}

function finish(cv, { repeat = 1, srgb = true, aniso = 8 } = {}) {
  const t = new THREE.CanvasTexture(cv);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(repeat, repeat);
  t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  t.anisotropy = aniso;
  t.needsUpdate = true;
  return t;
}

/** 灰度调制图：白 ≈ 1，用于和顶点色相乘 */
function grayTex(size, fn, opts) {
  const cv = makeCanvas(size, size);
  const ctx = cv.getContext('2d');
  const img = ctx.createImageData(size, size);
  const d = img.data;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const v = Math.max(0, Math.min(1, fn(x / size, y / size, x, y))) * 255;
      const i = (y * size + x) * 4;
      d[i] = d[i + 1] = d[i + 2] = v;
      d[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  return finish(cv, opts);
}

/* ── 木纹（底座托盘）──────────────────────────────────────────────── */
export function woodGrain() {
  const S = 512;
  const cv = makeCanvas(S, S);
  const ctx = cv.getContext('2d');
  const img = ctx.createImageData(S, S);
  const d = img.data;
  const PLANKS = 5; // 沿 V 方向分板
  for (let y = 0; y < S; y++) {
    for (let x = 0; x < S; x++) {
      const u = x / S;
      const v = y / S;
      const pf = v * PLANKS;
      const pi = Math.floor(pf);
      const pin = pf - pi;
      // 板内木纹：沿 U 拉长
      const warp = fbm(u * 2.2, (pi + pin * 0.9) * 3.1, 8, 11, 4) - 0.5;
      const rings = Math.sin((pin * 9 + warp * 5.5 + pi * 3.7) * Math.PI * 2) * 0.5 + 0.5;
      let g = 0.86 + rings * 0.1 + (fbm(u * 26, v * 5, 32, 31, 3) - 0.5) * 0.1;
      // 板缝
      const seam = Math.min(pin, 1 - pin);
      if (seam < 0.022) g *= 0.42 + seam / 0.022 * 0.18;
      // 每块板整体色差
      g *= 0.94 + hash2(pi, 3, 5) * 0.12;
      const i = (y * S + x) * 4;
      const c = Math.max(0, Math.min(255, g * 255));
      d[i] = d[i + 1] = d[i + 2] = c;
      d[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  return finish(cv, { repeat: 1 });
}

/* ── 草地细节 ─────────────────────────────────────────────────────── */
export function grassDetail() {
  return grayTex(
    512,
    (u, v) => {
      const big = fbm(u * 5, v * 5, 8, 3, 4);
      const fine = fbm(u * 34, v * 34, 48, 9, 2);
      let g = 0.80 + big * 0.22 + (fine - 0.5) * 0.16;
      // 零星枯草斑
      if (fbm(u * 11, v * 11, 16, 21, 2) > 0.74) g -= 0.1;
      return g;
    },
    { repeat: 1 }
  );
}

/* ── 道砟碎石 ─────────────────────────────────────────────────────── */
export function gravelDetail() {
  const S = 256;
  const cv = makeCanvas(S, S);
  const ctx = cv.getContext('2d');
  ctx.fillStyle = '#b8b8b8';
  ctx.fillRect(0, 0, S, S);
  for (let i = 0; i < 1500; i++) {
    const x = hash2(i, 1, 77) * S;
    const y = hash2(i, 2, 77) * S;
    const r = 1.1 + hash2(i, 3, 77) * 2.6;
    const g = 120 + hash2(i, 4, 77) * 130;
    ctx.fillStyle = `rgb(${g},${g},${g})`;
    ctx.beginPath();
    ctx.ellipse(x, y, r, r * (0.6 + hash2(i, 5, 77) * 0.5), hash2(i, 6, 77) * 3.14, 0, 6.283);
    ctx.fill();
  }
  return finish(cv, { repeat: 1 });
}

/* ── 鹅卵石广场 ───────────────────────────────────────────────────── */
export function cobbleDetail() {
  const S = 512;
  const cv = makeCanvas(S, S);
  const ctx = cv.getContext('2d');
  ctx.fillStyle = '#6d6d6d';
  ctx.fillRect(0, 0, S, S);
  const rows = 22;
  for (let r = 0; r < rows; r++) {
    const cols = 22;
    for (let c = 0; c < cols; c++) {
      const jx = hash2(r, c, 3) * 6 - 3;
      const jy = hash2(r, c, 4) * 6 - 3;
      const x = (c + 0.5) * (S / cols) + jx;
      const y = (r + 0.5) * (S / rows) + jy;
      const g = 150 + hash2(r, c, 5) * 90;
      ctx.fillStyle = `rgb(${g},${g},${Math.min(255, g + 6)})`;
      ctx.beginPath();
      ctx.ellipse(x, y, S / cols / 2.6, S / rows / 2.5, hash2(r, c, 6) * 3.14, 0, 6.283);
      ctx.fill();
    }
  }
  return finish(cv, { repeat: 1 });
}

/* ── 瓦屋顶 ───────────────────────────────────────────────────────── */
export function tileDetail() {
  const S = 256;
  const cv = makeCanvas(S, S);
  const ctx = cv.getContext('2d');
  const img = ctx.createImageData(S, S);
  const d = img.data;
  const rows = 12;
  for (let y = 0; y < S; y++) {
    for (let x = 0; x < S; x++) {
      const u = x / S;
      const v = y / S;
      const row = Math.floor(v * rows);
      const rf = v * rows - row;
      const off = row % 2 ? 0.5 : 0;
      const cf = (u * rows * 0.5 + off) % 1;
      // 横向瓦垄
      const barrel = Math.sin(cf * Math.PI) * 0.16;
      // 瓦片横向接缝
      const rowEdge = rf < 0.06 ? -0.22 : 0;
      let g = 0.82 + barrel + rowEdge + (fbm(u * 24, v * 24, 32, 13, 2) - 0.5) * 0.12;
      g *= 0.95 + hash2(row, Math.floor(u * rows * 0.5 + off), 9) * 0.1;
      const i = (y * S + x) * 4;
      const c = Math.max(0, Math.min(255, g * 255));
      d[i] = d[i + 1] = d[i + 2] = c;
      d[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  return finish(cv, { repeat: 1 });
}

/* ── 水面法线（波纹）────────────────────────────────────────────── */
export function waterNormal() {
  const S = 256;
  const h = new Float32Array(S * S);
  for (let y = 0; y < S; y++) {
    for (let x = 0; x < S; x++) {
      const u = x / S;
      const v = y / S;
      h[y * S + x] =
        fbm(u * 6, v * 6, 8, 3, 3) * 0.7 +
        Math.sin((u * 9 + v * 3) * Math.PI * 2) * 0.14 +
        Math.sin((u * 2 - v * 7) * Math.PI * 2) * 0.1;
    }
  }
  const cv = makeCanvas(S, S);
  const ctx = cv.getContext('2d');
  const img = ctx.createImageData(S, S);
  const d = img.data;
  const at = (x, y) => h[((y + S) % S) * S + ((x + S) % S)];
  for (let y = 0; y < S; y++) {
    for (let x = 0; x < S; x++) {
      const dx = (at(x + 1, y) - at(x - 1, y)) * 5.5;
      const dy = (at(x, y + 1) - at(x, y - 1)) * 5.5;
      const len = Math.hypot(dx, dy, 1);
      const i = (y * S + x) * 4;
      d[i] = ((-dx / len) * 0.5 + 0.5) * 255;
      d[i + 1] = ((-dy / len) * 0.5 + 0.5) * 255;
      d[i + 2] = (1 / len) * 0.5 * 255 + 127;
      d[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  return finish(cv, { repeat: 1, srgb: false });
}

/* ── 农田垄沟 ─────────────────────────────────────────────────────── */
export function fieldDetail() {
  return grayTex(
    256,
    (u, v) => {
      const rows = Math.sin(v * Math.PI * 2 * 14) * 0.5 + 0.5;
      let g = 0.72 + rows * 0.26 + (fbm(u * 16, v * 16, 24, 5, 2) - 0.5) * 0.16;
      return g;
    },
    { repeat: 1 }
  );
}
