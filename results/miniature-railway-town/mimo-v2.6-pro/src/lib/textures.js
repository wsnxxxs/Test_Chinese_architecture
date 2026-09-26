/**
 * 程序化贴图：全部在 Canvas 上生成，项目不依赖任何外部素材。
 * 颜色贴图标记 SRGBColorSpace，法线贴图保持线性。
 */
import * as THREE from 'three';

function makeCanvas(size, h = size) {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = h;
  return canvas;
}

function toTexture(canvas, { repeat = [1, 1], srgb = true, aniso = 8 } = {}) {
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(repeat[0], repeat[1]);
  tex.anisotropy = aniso;
  if (srgb) tex.colorSpace = THREE.SRGBColorSpace;
  tex.needsUpdate = true;
  return tex;
}

function valueNoise(x, y, seed = 1) {
  const s = Math.sin(x * 12.9898 + y * 78.233 + seed * 3.77) * 43758.5453;
  return s - Math.floor(s);
}

function smoothNoise(x, y, seed = 1) {
  const xi = Math.floor(x);
  const yi = Math.floor(y);
  const xf = x - xi;
  const yf = y - yi;
  const u = xf * xf * (3 - 2 * xf);
  const v = yf * yf * (3 - 2 * yf);
  const a = valueNoise(xi, yi, seed);
  const b = valueNoise(xi + 1, yi, seed);
  const c = valueNoise(xi, yi + 1, seed);
  const d = valueNoise(xi + 1, yi + 1, seed);
  return a * (1 - u) * (1 - v) + b * u * (1 - v) + c * (1 - u) * v + d * u * v;
}

function fbm(x, y, octaves = 4, seed = 1) {
  let sum = 0;
  let amp = 0.5;
  let freq = 1;
  let norm = 0;
  for (let i = 0; i < octaves; i++) {
    sum += smoothNoise(x * freq, y * freq, seed + i * 13) * amp;
    norm += amp;
    amp *= 0.5;
    freq *= 2;
  }
  return sum / norm;
}

/** 木纹（底座、边框） */
export function makeWoodTexture({ size = 512, base = [138, 92, 52], dark = [96, 60, 30], repeat = [1, 1] } = {}) {
  const canvas = makeCanvas(size);
  const ctx = canvas.getContext('2d');
  const img = ctx.createImageData(size, size);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const grain =
        Math.sin((x * 0.055) + fbm(x * 0.012, y * 0.006, 3, 7) * 7.0) * 0.5 + 0.5;
      const rings = Math.pow(grain, 2.2);
      const n = fbm(x * 0.05, y * 0.05, 3, 3) * 0.22;
      const t = Math.min(1, rings * 0.75 + n * 0.5);
      const i = (y * size + x) * 4;
      img.data[i] = base[0] * (1 - t) + dark[0] * t;
      img.data[i + 1] = base[1] * (1 - t) + dark[1] * t;
      img.data[i + 2] = base[2] * (1 - t) + dark[2] * t;
      img.data[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  return toTexture(canvas, { repeat });
}

/** 草地 */
export function makeGrassTexture({ size = 512, repeat = [1, 1], tint = [122, 158, 88], dark = [92, 126, 66] } = {}) {
  const canvas = makeCanvas(size);
  const ctx = canvas.getContext('2d');
  const img = ctx.createImageData(size, size);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const n = fbm(x * 0.035, y * 0.035, 4, 11);
      const m = fbm(x * 0.16, y * 0.16, 3, 23) * 0.45;
      const t = Math.min(1, Math.max(0, n * 0.85 + m * 0.5 - 0.18));
      const i = (y * size + x) * 4;
      img.data[i] = tint[0] * (1 - t) + dark[0] * t;
      img.data[i + 1] = tint[1] * (1 - t) + dark[1] * t;
      img.data[i + 2] = tint[2] * (1 - t) + dark[2] * t;
      img.data[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  // 草叶高光斑点
  ctx.globalAlpha = 0.16;
  for (let i = 0; i < 900; i++) {
    const x = Math.random() * size;
    const y = Math.random() * size;
    ctx.fillStyle = i % 3 === 0 ? '#c8e08a' : '#5c7f42';
    ctx.fillRect(x, y, 1.6, 1.6);
  }
  ctx.globalAlpha = 1;
  return toTexture(canvas, { repeat });
}

/** 泥土 / 耕地 */
export function makeSoilTexture({ size = 256, repeat = [1, 1], base = [148, 112, 78], dark = [112, 82, 56] } = {}) {
  const canvas = makeCanvas(size);
  const ctx = canvas.getContext('2d');
  const img = ctx.createImageData(size, size);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const n = fbm(x * 0.06, y * 0.06, 4, 31);
      const t = Math.min(1, Math.max(0, n * 1.2 - 0.15));
      const i = (y * size + x) * 4;
      img.data[i] = base[0] * (1 - t) + dark[0] * t;
      img.data[i + 1] = base[1] * (1 - t) + dark[1] * t;
      img.data[i + 2] = base[2] * (1 - t) + dark[2] * t;
      img.data[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  return toTexture(canvas, { repeat });
}

/** 砾石（道砟） */
export function makeGravelTexture({ size = 256, repeat = [1, 1] } = {}) {
  const canvas = makeCanvas(size);
  const ctx = canvas.getContext('2d');
  const img = ctx.createImageData(size, size);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const n = fbm(x * 0.19, y * 0.19, 3, 5);
      const speck = valueNoise(Math.floor(x / 3), Math.floor(y / 3), 9) * 0.55;
      const t = Math.min(1, n * 0.75 + speck * 0.5);
      const v = 116 + t * 66;
      const i = (y * size + x) * 4;
      img.data[i] = v;
      img.data[i + 1] = v * 0.98;
      img.data[i + 2] = v * 0.94;
      img.data[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  return toTexture(canvas, { repeat });
}

/** 屋面瓦（灰度，靠材质 color 上色） */
export function makeRoofTexture({ size = 256, repeat = [1, 1], rows = 9, cols = 12 } = {}) {
  const canvas = makeCanvas(size);
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#cfcfcf';
  ctx.fillRect(0, 0, size, size);
  const rh = size / rows;
  const cw = size / cols;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = c * cw + (r % 2 ? cw / 2 : 0);
      const y = r * rh;
      const shade = 200 + ((r * 7 + c * 13) % 26) - 13;
      ctx.fillStyle = `rgb(${shade},${shade},${shade})`;
      ctx.fillRect(x + 1, y + 1, cw - 2, rh - 2);
    }
    ctx.fillStyle = 'rgba(90,90,90,0.55)';
    ctx.fillRect(0, r * rh, size, 1.6);
  }
  ctx.fillStyle = 'rgba(90,90,90,0.4)';
  for (let c = 0; c <= cols; c++) {
    for (let r = 0; r < rows; r++) {
      const x = c * cw + (r % 2 ? cw / 2 : 0);
      ctx.fillRect(x, r * rh, 1.2, rh);
    }
  }
  return toTexture(canvas, { repeat });
}

/** 石墙 / 抹灰（浅噪点） */
export function makePlasterTexture({ size = 256, repeat = [1, 1], strength = 14 } = {}) {
  const canvas = makeCanvas(size);
  const ctx = canvas.getContext('2d');
  const img = ctx.createImageData(size, size);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const n = fbm(x * 0.08, y * 0.08, 4, 17);
      const v = 255 - n * strength * 2;
      const i = (y * size + x) * 4;
      img.data[i] = v;
      img.data[i + 1] = v;
      img.data[i + 2] = v;
      img.data[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  return toTexture(canvas, { repeat });
}

/** 水面法线贴图（正弦干涉波） */
export function makeWaterNormalTexture({ size = 256, repeat = [1, 1], strength = 1.6 } = {}) {
  const canvas = makeCanvas(size);
  const ctx = canvas.getContext('2d');
  const img = ctx.createImageData(size, size);
  const height = (x, y) =>
    Math.sin(x * 0.12 + y * 0.045) * 0.55 +
    Math.sin(x * 0.045 - y * 0.11) * 0.35 +
    Math.sin((x + y) * 0.075) * 0.3 +
    fbm(x * 0.06, y * 0.06, 3, 41) * 0.6;

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const hL = height(x - 1, y);
      const hR = height(x + 1, y);
      const hD = height(x, y - 1);
      const hU = height(x, y + 1);
      let nx = (hL - hR) * strength;
      let nz = (hD - hU) * strength;
      const ny = 1;
      const len = Math.hypot(nx, ny, nz);
      nx /= len;
      nz /= len;
      const nyN = ny / len;
      const i = (y * size + x) * 4;
      img.data[i] = (nx * 0.5 + 0.5) * 255;
      img.data[i + 1] = (nyN * 0.5 + 0.5) * 255;
      img.data[i + 2] = (nz * 0.5 + 0.5) * 255;
      img.data[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  return toTexture(canvas, { repeat, srgb: false, aniso: 4 });
}

/** 径向发光贴图（路灯、车灯辉光） */
export function makeGlowTexture({ size = 128, inner = 'rgba(255,236,196,1)', outer = 'rgba(255,196,120,0)' } = {}) {
  const canvas = makeCanvas(size);
  const ctx = canvas.getContext('2d');
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, inner);
  g.addColorStop(0.28, 'rgba(255,214,158,0.55)');
  g.addColorStop(1, outer);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.needsUpdate = true;
  return tex;
}

/** 道路贴图：沥青 + 中央虚线 + 边线（v 方向为行进方向） */
export function makeRoadTexture({ size = 256, repeat = [1, 1] } = {}) {
  const canvas = makeCanvas(size);
  const ctx = canvas.getContext('2d');
  const img = ctx.createImageData(size, size);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const n = fbm(x * 0.12, y * 0.12, 3, 61);
      const v = 96 + n * 42;
      const i = (y * size + x) * 4;
      img.data[i] = v;
      img.data[i + 1] = v * 0.98;
      img.data[i + 2] = v * 0.95;
      img.data[i + 3] = 255;
    }
  }
  ctx.putImageData(img, 0, 0);
  // 中央虚线
  ctx.fillStyle = 'rgba(238,232,214,0.62)';
  const dash = size / 4;
  for (let k = 0; k < 4; k++) {
    ctx.fillRect(size / 2 - 3, k * dash + dash * 0.18, 6, dash * 0.52);
  }
  // 边线
  ctx.fillStyle = 'rgba(238,232,214,0.34)';
  ctx.fillRect(size * 0.1, 0, 3, size);
  ctx.fillRect(size * 0.9 - 3, 0, 3, size);
  return toTexture(canvas, { repeat });
}

/** 天空渐变（白天/夜晚） */
export function makeSkyTexture({ night = false, w = 64, h = 512 } = {}) {
  const canvas = makeCanvas(w, h);
  const ctx = canvas.getContext('2d');
  const g = ctx.createLinearGradient(0, 0, 0, h);
  if (!night) {
    g.addColorStop(0, '#8fb6dd');
    g.addColorStop(0.42, '#b9cfe2');
    g.addColorStop(0.72, '#e6c9a4');
    g.addColorStop(1, '#f2c293');
  } else {
    g.addColorStop(0, '#0a1428');
    g.addColorStop(0.45, '#152642');
    g.addColorStop(0.78, '#2c3c58');
    g.addColorStop(1, '#4b4a5c');
  }
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, w, h);
  if (night) {
    for (let i = 0; i < 130; i++) {
      const x = Math.random() * w;
      const y = Math.random() * h * 0.62;
      const r = Math.random() * 1.5 + 0.3;
      ctx.globalAlpha = 0.35 + Math.random() * 0.65;
      ctx.fillStyle = '#e8eeff';
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    // 月亮
    ctx.fillStyle = '#f6f1de';
    ctx.beginPath();
    ctx.arc(w * 0.72, h * 0.2, 16, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = 'rgba(21,38,66,1)';
    ctx.beginPath();
    ctx.arc(w * 0.72 - 6, h * 0.2 - 3, 14, 0, Math.PI * 2);
    ctx.fill();
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.needsUpdate = true;
  return tex;
}

/** 站牌文字贴图 */
export function makeSignTexture({ text = '青溪镇', sub = 'QINGXI', w = 512, h = 160, bg = '#1f4f8f', fg = '#f4ead2' } = {}) {
  const canvas = makeCanvas(w, h);
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = fg;
  ctx.lineWidth = 8;
  ctx.strokeRect(12, 12, w - 24, h - 24);
  ctx.fillStyle = fg;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = 'bold 82px "Microsoft YaHei", sans-serif';
  ctx.fillText(text, w / 2, h * 0.42);
  ctx.font = '28px "Segoe UI", sans-serif';
  ctx.globalAlpha = 0.85;
  ctx.fillText(sub, w / 2, h * 0.78);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  tex.needsUpdate = true;
  return tex;
}
