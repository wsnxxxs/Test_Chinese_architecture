/**
 * 键帽字符图集：把整套键帽的顶面字符绘制到一张 Canvas 纹理上。
 * 每个主题一张图集（按主题缓存），切换主题只需替换贴图。
 */
import * as THREE from 'three';
import { ACCENT_LEGENDS } from './themes.js';

const accentSet = new Set(ACCENT_LEGENDS);

const COLS = 9;
const ROWS = 8; // 72 格 ≥ 68 键
const CELL = 128;

const FONT =
  '"Segoe UI Variable Text", "Segoe UI", "PingFang SC", "Microsoft YaHei", system-ui, sans-serif';

const cache = new Map(); // themeId -> { texture, cells }

/** 键位索引 → 图集单元格 */
export function cellForIndex(index) {
  const col = index % COLS;
  const row = Math.floor(index / COLS);
  return {
    col,
    row,
    u0: col / COLS,
    u1: (col + 1) / COLS,
    v0: 1 - (row + 1) / ROWS,
    v1: 1 - row / ROWS,
  };
}

function fitText(ctx, text, maxWidth, startSize) {
  let size = startSize;
  ctx.font = `600 ${size}px ${FONT}`;
  while (ctx.measureText(text).width > maxWidth && size > 11) {
    size -= 1;
    ctx.font = `600 ${size}px ${FONT}`;
  }
  return size;
}

function drawLegend(ctx, cx, cy, legend, color, weight) {
  ctx.save();
  ctx.fillStyle = color;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.font = `600 ${CELL}px ${FONT}`;
  if (weight) ctx.font = `${weight} ${CELL}px ${FONT}`;

  if (legend === 'Space') {
    // 空格键：绘制品牌轨道环
    ctx.strokeStyle = color;
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.ellipse(cx, cy, 26, 12, -0.42, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(cx, cy, 7.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
    return;
  }

  // 先按整格估算，再按实际宽度收缩
  let size = legend.length <= 2 ? 58 : 46;
  fitText(ctx, legend, CELL * 0.74, size);
  ctx.fillText(legend, cx, cy + 1);
  ctx.restore();
}

/**
 * 生成主题字符图集
 * @param {object} theme 主题定义
 * @param {Array} keys   buildKeyList() 结果
 */
export function getAtlas(theme, keys) {
  const hit = cache.get(theme.id);
  if (hit) return hit;

  const canvas = document.createElement('canvas');
  canvas.width = COLS * CELL;
  canvas.height = ROWS * CELL;
  const ctx = canvas.getContext('2d');

  keys.forEach((key, index) => {
    const cell = cellForIndex(index);
    const x = cell.col * CELL;
    const y = cell.row * CELL;
    const isAccent = accentSet.has(key.legend);
    const bg = isAccent ? theme.accentColor : theme.baseColor;
    const fg = isAccent ? theme.accentLegend : theme.baseLegend;

    ctx.fillStyle = bg;
    ctx.fillRect(x, y, CELL, CELL);

    // 顶面轻微的内圈高光，模拟键帽凹面
    const grad = ctx.createLinearGradient(x, y, x, y + CELL);
    grad.addColorStop(0, 'rgba(255,255,255,0.05)');
    grad.addColorStop(0.5, 'rgba(255,255,255,0)');
    grad.addColorStop(1, 'rgba(0,0,0,0.05)');
    ctx.fillStyle = grad;
    ctx.fillRect(x, y, CELL, CELL);

    drawLegend(ctx, x + CELL / 2, y + CELL / 2, key.legend, fg, theme.legendWeight);
  });

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = true;
  texture.needsUpdate = true;

  const entry = { texture, cells: keys.map((_, i) => cellForIndex(i)) };
  cache.set(theme.id, entry);
  return entry;
}

/** 仅用于小图标 / 铭牌的独立画布纹理 */
export function makeLabelTexture(text, { width = 512, height = 96, color = '#8b9099' } = {}) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = color;
  ctx.font = `600 ${Math.round(height * 0.5)}px ${FONT}`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.letterSpacing = '10px';
  ctx.fillText(text, width / 2, height / 2 + 2);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  return texture;
}
