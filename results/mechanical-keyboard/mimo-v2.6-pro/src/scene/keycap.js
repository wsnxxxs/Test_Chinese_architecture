/**
 * 键帽几何与字符图例
 * 键帽 = 倒角方体 + 上沿内收（taper）+ 顶部微凹面（dish），非简单方块
 */
import * as THREE from 'three';

const TAPER_INSET = 0.115; // 顶部每边内收（u）
const DISH = 0.055; // 顶部凹面深度（u）
const RADIUS = 0.082; // 圆角半径（u）
const SMOOTH_SEGMENTS = 6; // 细分段数（偶数保证顶面中心有顶点）
const LEGEND_GAP = 0.012; // 字符贴片相对键帽顶面的间隙（u）

function smoothstep(edge0, edge1, x) {
  const t = Math.min(1, Math.max(0, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

/** 键帽剖面参数（taper / dish 共用，保证图例贴合顶面） */
function capProfile(w, d) {
  const taperX = 1 - TAPER_INSET / (w / 2);
  const taperZ = 1 - TAPER_INSET / (d / 2);
  return {
    taperX,
    taperZ,
    dish: DISH,
    // 宽键（空格 / 回车 / Shift）用柱面凹面，方向沿长轴
    cylindrical: w / d >= 1.6,
    hw: (w / 2) * taperX,
    hd: (d / 2) * taperZ,
  };
}

/** 顶面凹面深度（x/z 为 taper 后的局部坐标） */
function dishOffset(profile, x, z) {
  const nz = z / profile.hd;
  if (profile.cylindrical) {
    return profile.dish * Math.max(0, 1 - nz * nz);
  }
  const nx = x / profile.hw;
  return profile.dish * Math.max(0, 1 - nx * nx) * Math.max(0, 1 - nz * nz);
}

const geoCache = new Map();

/**
 * 保留内部顶点的圆角盒：在细分盒基础上按「内核 + 半径外推」倒角。
 * 与 three 自带 RoundedBoxGeometry 不同，顶面内部顶点不会被推到边缘，
 * 因此后续的顶面凹面（dish）才能正确插值。
 */
function roundedBoxGeometry(width, height, depth, segments, radius) {
  const geo = new THREE.BoxGeometry(width, height, depth, segments, segments, segments);
  const pos = geo.attributes.position;
  const hx = width / 2 - radius;
  const hy = height / 2 - radius;
  const hz = depth / 2 - radius;
  const v = new THREE.Vector3();
  const inner = new THREE.Vector3();
  const dir = new THREE.Vector3();
  for (let i = 0; i < pos.count; i += 1) {
    v.fromBufferAttribute(pos, i);
    inner.set(
      THREE.MathUtils.clamp(v.x, -hx, hx),
      THREE.MathUtils.clamp(v.y, -hy, hy),
      THREE.MathUtils.clamp(v.z, -hz, hz),
    );
    dir.copy(v).sub(inner);
    const len = dir.length();
    if (len > 1e-6) {
      dir.multiplyScalar(radius / len);
    } else {
      dir.set(0, 0, 0);
    }
    pos.setXYZ(i, inner.x + dir.x, inner.y + dir.y, inner.z + dir.z);
  }
  geo.computeVertexNormals();
  return geo;
}

/** 生成键帽几何，y ∈ [0, h]，底部中心为原点 */
export function getKeycapGeometry(w, d, h) {
  const cacheKey = `${w.toFixed(3)}|${d.toFixed(3)}|${h.toFixed(3)}`;
  const cached = geoCache.get(cacheKey);
  if (cached) return cached;

  const profile = capProfile(w, d);
  const geo = roundedBoxGeometry(w, h, d, SMOOTH_SEGMENTS, RADIUS);
  geo.translate(0, h / 2, 0);

  const pos = geo.attributes.position;
  const v = new THREE.Vector3();
  for (let i = 0; i < pos.count; i += 1) {
    v.fromBufferAttribute(pos, i);
    const y0 = v.y;
    // 上沿内收：仅在键帽上半部渐变，保持裙边基本垂直
    const taper = smoothstep(h * 0.42, h * 0.98, y0);
    v.x *= 1 - (1 - profile.taperX) * taper;
    v.z *= 1 - (1 - profile.taperZ) * taper;
    // 顶部凹面：只作用于顶面平台
    const topBlend = smoothstep(h * 0.55, h * 0.95, y0);
    v.y -= dishOffset(profile, v.x, v.z) * topBlend;
    pos.setXYZ(i, v.x, v.y, v.z);
  }
  geo.computeVertexNormals();
  geoCache.set(cacheKey, geo);
  return geo;
}

/**
 * 字符贴片几何：与键帽顶面同高的微凹网格，避免悬浮 / 穿模
 * w0/d0 为贴片尺寸（默认键帽的 55%，落在顶面平台内）
 */
export function getLegendGeometry(w, d, h, w0 = w * 0.55, d0 = d * 0.55) {
  const profile = capProfile(w, d);
  const geo = new THREE.PlaneGeometry(w0, d0, 12, 6);
  geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position;
  const v = new THREE.Vector3();
  for (let i = 0; i < pos.count; i += 1) {
    v.fromBufferAttribute(pos, i);
    pos.setY(i, h + LEGEND_GAP - dishOffset(profile, v.x, v.z));
  }
  geo.computeVertexNormals();
  return geo;
}

const FONT_STACK = 'ui-sans-serif, system-ui, "Segoe UI", "PingFang SC", sans-serif';

export function legendFontSize(text) {
  const len = [...text].length;
  if (len <= 1) return 104;
  if (len === 2) return 84;
  if (len === 3) return 68;
  if (len === 4) return 57;
  return 50;
}

/** 创建可反复重绘的字符纹理（可改字、可改色；画布随键宽拉伸，保证字形不变形） */
export function createLegend(text, color, { weight = 680, tracking = 0, aspect = 1 } = {}) {
  const height = 160;
  const width = Math.max(160, Math.round(160 * Math.max(1, aspect)));
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;

  let currentText = text;
  let currentColor = color;

  function render() {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = currentColor;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    const label = currentText || ' ';
    let size = legendFontSize(label);
    if (tracking && 'letterSpacing' in ctx) ctx.letterSpacing = `${tracking}px`;
    ctx.font = `${weight} ${size}px ${FONT_STACK}`;
    // 长单词按可用宽度收缩，避免溢出键帽
    const maxTextWidth = width * 0.86;
    const measured = ctx.measureText(label).width;
    if (measured > maxTextWidth) {
      size = Math.max(12, Math.floor((size * maxTextWidth) / measured));
      ctx.font = `${weight} ${size}px ${FONT_STACK}`;
    }
    ctx.fillText(label, width / 2, height / 2 + size * 0.05);
    texture.needsUpdate = true;
  }

  render();

  return {
    texture,
    get text() {
      return currentText;
    },
    draw(nextColor) {
      currentColor = nextColor;
      render();
    },
    setText(nextText) {
      currentText = nextText;
      render();
    },
  };
}
