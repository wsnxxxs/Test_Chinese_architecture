/**
 * 小工具：可复现随机数、插值、平滑函数。
 */

export function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function makeRandom(seed = 20260926) {
  const next = mulberry32(seed);
  return {
    next,
    range(a, b) {
      return a + (b - a) * next();
    },
    int(a, b) {
      return Math.floor(a + (b - a + 1) * next());
    },
    pick(arr) {
      return arr[Math.floor(next() * arr.length) % arr.length];
    },
    sign() {
      return next() < 0.5 ? -1 : 1;
    },
    /** 以 center 为中心、幅度 amp 的抖动 */
    jitter(center, amp) {
      return center + (next() * 2 - 1) * amp;
    },
  };
}

export const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

export const lerp = (a, b, t) => a + (b - a) * t;

export function smoothstep(edge0, edge1, x) {
  const t = clamp((x - edge0) / (edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
}

export function damp(current, target, lambda, dt) {
  return lerp(current, target, 1 - Math.exp(-lambda * dt));
}

/** 2D 折线上找最近点（返回距离），用于地形开河/道路避让 */
export function distanceToPolyline2D(x, z, points) {
  let best = Infinity;
  for (let i = 0; i < points.length - 1; i++) {
    const ax = points[i][0];
    const az = points[i][1];
    const bx = points[i + 1][0];
    const bz = points[i + 1][1];
    const dx = bx - ax;
    const dz = bz - az;
    const lenSq = dx * dx + dz * dz || 1e-6;
    let t = ((x - ax) * dx + (z - az) * dz) / lenSq;
    t = clamp(t, 0, 1);
    const px = ax + dx * t;
    const pz = az + dz * t;
    const d = Math.hypot(x - px, z - pz);
    if (d < best) best = d;
  }
  return best;
}
