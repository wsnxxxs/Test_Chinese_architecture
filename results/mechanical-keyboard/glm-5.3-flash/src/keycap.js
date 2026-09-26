import * as THREE from 'three';

/**
 * 键帽几何与字符纹理。
 * 键帽 = 上小下大的截锥体（带中心凹弧），侧面斜度 + 顶面可贴字符纹理；
 * 顶面材质用 CanvasTexture 绘制，主题切换时按缓存重取。
 */

export const U = 1; // 键距
export const GAP = 0.085; // 键帽间总间隙
export const CAP_H = 0.34; // 键帽高度
const TAPER = 0.09; // 顶面每侧内收
const DISH = 0.02; // 顶面中心凹陷
const PX = 170; // 纹理像素 / 键距

const geoCache = new Map();

/** 按宽度缓存键帽几何（带锥度 + 中心凹弧） */
export function keycapGeometry(units) {
  const key = units.toFixed(3);
  let geo = geoCache.get(key);
  if (geo) return geo;

  const w = units * U - GAP;
  const d = U - GAP;
  geo = new THREE.BoxGeometry(w, CAP_H, d, 2, 1, 2);

  const sx = (w - 2 * TAPER) / w;
  const sz = (d - 2 * TAPER) / d;
  const halfW = w / 2;
  const halfD = d / 2;
  const p = geo.attributes.position;
  for (let i = 0; i < p.count; i++) {
    if (p.getY(i) > 0) {
      const x = p.getX(i) * sx;
      const z = p.getZ(i) * sz;
      p.setX(i, x);
      p.setZ(i, z);
      // 顶面中心凹弧：越靠中心越低
      const fx = 1 - (x / (halfW * sx)) ** 2;
      const fz = 1 - (z / (halfD * sz)) ** 2;
      p.setY(i, p.getY(i) - DISH * fx * fz);
    }
  }
  p.needsUpdate = true;
  geo.computeVertexNormals();
  geoCache.set(key, geo);
  return geo;
}

const FONT_STACK = '"Segoe UI", "Helvetica Neue", Arial, "PingFang SC", "Microsoft YaHei", sans-serif';
const font = (s) => `600 ${s}px ${FONT_STACK}`;

function fitFont(ctx, text, maxW, start) {
  let size = start;
  for (; size > start * 0.38; size -= 2) {
    ctx.font = font(size);
    if (ctx.measureText(text).width <= maxW) break;
  }
  return size;
}

export function capColorOf(theme, role) {
  const c = theme.caps;
  if (role === 'mod') return c.mod;
  if (role === 'accent') return c.accentKey;
  if (role === 'space') return c.space;
  return c.base;
}

function paintLegend(ctx, w, h, theme, role, label, sub) {
  ctx.fillStyle = capColorOf(theme, role);
  ctx.fillRect(0, 0, w, h);

  // 塑料质感：上亮下暗的微妙渐变
  const g = ctx.createLinearGradient(0, 0, 0, h);
  g.addColorStop(0, 'rgba(255,255,255,.13)');
  g.addColorStop(0.45, 'rgba(255,255,255,0)');
  g.addColorStop(1, 'rgba(0,0,0,.16)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = theme.legend;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  const cx = w / 2;

  if (role === 'space') {
    // 空格键印 Logo
    ctx.globalAlpha = 0.55;
    ctx.font = font(h * 0.13);
    ctx.fillText('A X I S · 6 8', cx, h * 0.56);
    ctx.globalAlpha = 1;
    return;
  }

  if (sub) {
    ctx.font = font(h * 0.17);
    ctx.fillText(sub, cx, h * 0.26);
    ctx.font = font(h * 0.34);
    ctx.fillText(label, cx, h * 0.64);
  } else {
    const size = fitFont(ctx, label, w * 0.8, h * 0.4);
    ctx.font = font(size);
    ctx.fillText(label, cx, h * 0.52);
  }
}

/** 生成一块键帽顶面纹理（按主题/键位缓存） */
export function legendTexture(theme, role, label, sub, units, aniso) {
  const canvas = document.createElement('canvas');
  canvas.width = Math.max(72, Math.round(units * PX));
  canvas.height = PX;
  const ctx = canvas.getContext('2d');
  paintLegend(ctx, canvas.width, canvas.height, theme, role, label, sub);

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = aniso;
  return tex;
}

/** 底壳铭牌纹理（主题强调色） */
export function badgeTexture(theme, aniso) {
  const canvas = document.createElement('canvas');
  canvas.width = 640;
  canvas.height = 80;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = theme.accent;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#101214';
  ctx.font = `700 44px ${FONT_STACK}`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('A X I S · 6 8', canvas.width / 2, canvas.height / 2 + 2);

  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = aniso;
  return tex;
}
