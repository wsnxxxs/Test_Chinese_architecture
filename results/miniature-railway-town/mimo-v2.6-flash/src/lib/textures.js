/**
 * 程序化 Canvas 纹理 —— 给沙盘做"手工模型"质感：
 * 木底座、草地、道砟、沥青、水面、灰泥、瓦片、田地、发光光晕、招牌文字。
 */
import * as THREE from 'three';
import { makeRng } from './geometry.js';

function makeCanvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  return { c, ctx: c.getContext('2d') };
}

function toTexture(canvas, { repeat = [1, 1], srgb = true } = {}) {
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(repeat[0], repeat[1]);
  if (srgb) tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

/** 木纹：底色 + 长条纹 + 少量节疤 */
export function woodTexture({ size = 512, base = '#c08b52', dark = '#8e5f30', light = '#d8a668', seed = 5 } = {}) {
  const { c, ctx } = makeCanvas(size, size);
  const rng = makeRng(seed);
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, size, size);
  // 长纤维
  for (let i = 0; i < 260; i++) {
    const y = rng() * size;
    const len = size * (0.3 + rng() * 0.7);
    const x = rng() * size;
    ctx.globalAlpha = 0.05 + rng() * 0.12;
    ctx.strokeStyle = rng() < 0.55 ? dark : light;
    ctx.lineWidth = 0.6 + rng() * 2.4;
    ctx.beginPath();
    ctx.moveTo(x - len, y + (rng() - 0.5) * 6);
    ctx.bezierCurveTo(x - len * 0.4, y + (rng() - 0.5) * 10, x - len * 0.2, y + (rng() - 0.5) * 8, x + rng() * 40, y + (rng() - 0.5) * 5);
    ctx.stroke();
  }
  // 节疤
  for (let i = 0; i < 5; i++) {
    const x = rng() * size;
    const y = rng() * size;
    for (let r = 8; r > 1; r -= 2) {
      ctx.globalAlpha = 0.1;
      ctx.strokeStyle = dark;
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.ellipse(x, y, r * 1.6, r, 0, 0, Math.PI * 2);
      ctx.stroke();
    }
  }
  ctx.globalAlpha = 1;
  return toTexture(c);
}

/** 草地：斑驳绿 + 修剪条纹 */
export function grassTexture({ size = 512, seed = 11 } = {}) {
  const { c, ctx } = makeCanvas(size, size);
  const rng = makeRng(seed);
  ctx.fillStyle = '#7e9c55';
  ctx.fillRect(0, 0, size, size);
  for (let i = 0; i < 5200; i++) {
    const x = rng() * size;
    const y = rng() * size;
    const g = 0.55 + rng() * 0.6;
    ctx.globalAlpha = 0.18 + rng() * 0.3;
    ctx.fillStyle = `rgb(${Math.round(112 * g)}, ${Math.round(150 * g)}, ${Math.round(74 * g)})`;
    ctx.fillRect(x, y, 1.6 + rng() * 2.4, 1.6 + rng() * 3.6);
  }
  // 深色斑块（起伏感）
  for (let i = 0; i < 26; i++) {
    const x = rng() * size;
    const y = rng() * size;
    const r = 24 + rng() * 70;
    const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
    grad.addColorStop(0, 'rgba(70,96,44,0.28)');
    grad.addColorStop(1, 'rgba(70,96,44,0)');
    ctx.globalAlpha = 1;
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }
  // 修剪条纹
  ctx.globalAlpha = 0.06;
  for (let x = 0; x < size; x += 64) {
    ctx.fillStyle = '#d8e6b0';
    ctx.fillRect(x, 0, 32, size);
  }
  ctx.globalAlpha = 1;
  return toTexture(c);
}

/** 道砟碎石 */
export function gravelTexture({ size = 256, seed = 21 } = {}) {
  const { c, ctx } = makeCanvas(size, size);
  const rng = makeRng(seed);
  ctx.fillStyle = '#8b8579';
  ctx.fillRect(0, 0, size, size);
  for (let i = 0; i < 2600; i++) {
    const x = rng() * size;
    const y = rng() * size;
    const g = 0.6 + rng() * 0.75;
    ctx.globalAlpha = 0.55;
    ctx.fillStyle = `rgb(${Math.round(150 * g)}, ${Math.round(144 * g)}, ${Math.round(132 * g)})`;
    ctx.beginPath();
    ctx.ellipse(x, y, 1.2 + rng() * 2.6, 1 + rng() * 2, rng() * Math.PI, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
  return toTexture(c);
}

/** 沥青 */
export function asphaltTexture({ size = 256, seed = 33 } = {}) {
  const { c, ctx } = makeCanvas(size, size);
  const rng = makeRng(seed);
  ctx.fillStyle = '#4b4b50';
  ctx.fillRect(0, 0, size, size);
  for (let i = 0; i < 4200; i++) {
    const x = rng() * size;
    const y = rng() * size;
    const g = 0.55 + rng() * 0.8;
    ctx.globalAlpha = 0.4;
    ctx.fillStyle = `rgb(${Math.round(96 * g)}, ${Math.round(96 * g)}, ${Math.round(102 * g)})`;
    ctx.fillRect(x, y, 1 + rng() * 2, 1 + rng() * 2);
  }
  ctx.globalAlpha = 1;
  return toTexture(c);
}

/** 水面：柔和波纹（可动画 offset） */
export function waterTexture({ size = 512, seed = 44 } = {}) {
  const { c, ctx } = makeCanvas(size, size);
  const rng = makeRng(seed);
  ctx.fillStyle = '#3d7fa6';
  ctx.fillRect(0, 0, size, size);
  for (let i = 0; i < 130; i++) {
    const y = rng() * size;
    ctx.globalAlpha = 0.06 + rng() * 0.14;
    ctx.strokeStyle = rng() < 0.5 ? '#8fd0e8' : '#2b6a90';
    ctx.lineWidth = 1 + rng() * 4;
    ctx.beginPath();
    let x = -20;
    ctx.moveTo(x, y);
    while (x < size + 20) {
      x += 30 + rng() * 50;
      ctx.quadraticCurveTo(x - 15, y + (rng() - 0.5) * 10, x, y + (rng() - 0.5) * 5);
    }
    ctx.stroke();
  }
  ctx.globalAlpha = 1;
  return toTexture(c);
}

/** 灰泥墙面：细颗粒（用作灰度贴图，颜色由材质给） */
export function plasterTexture({ size = 256, seed = 61 } = {}) {
  const { c, ctx } = makeCanvas(size, size);
  const rng = makeRng(seed);
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, size, size);
  for (let i = 0; i < 5200; i++) {
    const x = rng() * size;
    const y = rng() * size;
    const g = 205 + rng() * 50;
    ctx.globalAlpha = 0.5;
    ctx.fillStyle = `rgb(${g | 0}, ${g | 0}, ${g | 0})`;
    ctx.fillRect(x, y, 1 + rng() * 2, 1 + rng() * 2);
  }
  ctx.globalAlpha = 1;
  return toTexture(c);
}

/** 屋面瓦：横向叠瓦 */
export function tileTexture({ size = 256, base = '#a4523f', seed = 77 } = {}) {
  const { c, ctx } = makeCanvas(size, size);
  const rng = makeRng(seed);
  ctx.fillStyle = base;
  ctx.fillRect(0, 0, size, size);
  const rows = 12;
  const h = size / rows;
  for (let r = 0; r < rows; r++) {
    const y = r * h;
    ctx.globalAlpha = 0.5;
    ctx.strokeStyle = 'rgba(0,0,0,0.35)';
    ctx.lineWidth = 1.6;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(size, y);
    ctx.stroke();
    const cols = 10;
    const w = size / cols;
    const off = r % 2 ? w / 2 : 0;
    for (let i = 0; i < cols; i++) {
      ctx.globalAlpha = 0.22;
      ctx.strokeStyle = 'rgba(0,0,0,0.4)';
      ctx.lineWidth = 1.3;
      ctx.beginPath();
      ctx.moveTo(i * w + off, y);
      ctx.lineTo(i * w + off, y + h);
      ctx.stroke();
      ctx.globalAlpha = 0.16;
      ctx.fillStyle = `rgb(${200 + ((rng() * 40) | 0)}, ${180 + ((rng() * 40) | 0)}, ${160 + ((rng() * 40) | 0)})`;
      ctx.fillRect(i * w + off + 1, y + 1, w - 2, h - 2);
    }
  }
  ctx.globalAlpha = 1;
  return toTexture(c);
}

/** 农田：作物条纹 */
export function fieldTexture({ size = 256, crop = '#cbb25a', seed = 91 } = {}) {
  const { c, ctx } = makeCanvas(size, size);
  const rng = makeRng(seed);
  ctx.fillStyle = '#8a6f45';
  ctx.fillRect(0, 0, size, size);
  ctx.fillStyle = crop;
  ctx.fillRect(6, 6, size - 12, size - 12);
  for (let x = 10; x < size - 8; x += 10) {
    ctx.globalAlpha = 0.5;
    ctx.strokeStyle = 'rgba(90,70,30,0.6)';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(x, 8);
    ctx.lineTo(x, size - 8);
    ctx.stroke();
    ctx.globalAlpha = 0.35;
    ctx.strokeStyle = 'rgba(255,245,200,0.7)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x + 4, 8);
    ctx.lineTo(x + 4, size - 8);
    ctx.stroke();
  }
  for (let i = 0; i < 400; i++) {
    ctx.globalAlpha = 0.2;
    ctx.fillStyle = crop;
    ctx.fillRect(rng() * size, rng() * size, 2, 2);
  }
  ctx.globalAlpha = 1;
  return toTexture(c);
}

/** 发光光晕贴图（夜景灯泡/窗的柔光） */
export function glowSpriteTexture({ size = 128 } = {}) {
  const { c, ctx } = makeCanvas(size, size);
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, 'rgba(255,236,190,1)');
  g.addColorStop(0.28, 'rgba(255,214,140,0.55)');
  g.addColorStop(0.6, 'rgba(255,190,110,0.16)');
  g.addColorStop(1, 'rgba(255,180,90,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/** 招牌文字（站名、店招） */
export function signTexture(text, { w = 512, h = 160, bg = '#20303f', fg = '#f6e9cf', font = 'bold 84px "Microsoft YaHei", sans-serif', border = true } = {}) {
  const { c, ctx } = makeCanvas(w, h);
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, w, h);
  if (border) {
    ctx.strokeStyle = 'rgba(246,233,207,0.75)';
    ctx.lineWidth = 6;
    ctx.strokeRect(9, 9, w - 18, h - 18);
  }
  ctx.fillStyle = fg;
  ctx.font = font;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, w / 2, h / 2 + 2);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}

/** 草地上的杂色小花点缀（透明贴图） */
export function flowerTexture({ size = 256, seed = 123 } = {}) {
  const { c, ctx } = makeCanvas(size, size);
  const rng = makeRng(seed);
  ctx.clearRect(0, 0, size, size);
  const colors = ['#e8d45a', '#e88a5a', '#e8e2d4', '#d4688a'];
  for (let i = 0; i < 60; i++) {
    const x = rng() * size;
    const y = rng() * size;
    ctx.fillStyle = colors[(rng() * colors.length) | 0];
    ctx.globalAlpha = 0.9;
    ctx.beginPath();
    ctx.arc(x, y, 2 + rng() * 2, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
