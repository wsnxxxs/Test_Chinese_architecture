// 字符贴图：键帽字符用离屏 Canvas 绘制，随键帽主题重新生成
import * as THREE from 'three';

const FONT_STACK = '"Segoe UI", "PingFang SC", "Microsoft YaHei", Arial, sans-serif';

function drawLegend(ctx, key, W, H, theme) {
  const isAccent = theme.accent && theme.accentKeys.includes(key.id);
  const mainColor = isAccent ? theme.accentLegend : theme.legend;
  const subColor = isAccent ? theme.accentLegend : theme.sub;
  ctx.clearRect(0, 0, W, H);
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  const dual = key.sub && key.w <= 1.5;
  if (dual) {
    ctx.fillStyle = `#${subColor.toString(16).padStart(6, '0')}`;
    ctx.font = `600 ${Math.round(H * 0.3)}px ${FONT_STACK}`;
    ctx.fillText(key.sub, W / 2, H * 0.3, W * 0.9);
    ctx.fillStyle = `#${mainColor.toString(16).padStart(6, '0')}`;
    ctx.font = `700 ${Math.round(H * 0.46)}px ${FONT_STACK}`;
    ctx.fillText(key.label, W / 2, H * 0.72, W * 0.9);
  } else {
    ctx.fillStyle = `#${mainColor.toString(16).padStart(6, '0')}`;
    const size = key.w >= 1.75 ? H * 0.34 : H * 0.5;
    ctx.font = `${key.label.length > 3 ? 600 : 700} ${Math.round(size)}px ${FONT_STACK}`;
    ctx.fillText(key.label, W / 2, H * 0.54, W * 0.92);
  }
}

export function createLegendTexture(key, planeW, planeD, theme, anisotropy = 1) {
  const H = 150;
  const W = Math.max(32, Math.round((H * planeW) / planeD));
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');
  drawLegend(ctx, key, W, H, theme);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = anisotropy;
  return tex;
}

// 前壳丝印 Logo（文字颜色随外壳主题变化，保证对比度）
export function createBadgeTexture(textColor = '#c9ced6') {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 96;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 512, 96);
  ctx.fillStyle = textColor;
  ctx.font = '700 52px "Segoe UI", Arial, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.letterSpacing = '14px';
  ctx.fillText('AXIA', 256, 50);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
