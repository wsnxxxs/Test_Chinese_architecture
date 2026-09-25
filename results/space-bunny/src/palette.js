/**
 * 调色板与通用工具
 * 所有颜色均为 sRGB 十六进制，构建 InstancedMesh 时由 THREE.Color 转成线性空间。
 */

/** 建筑群主色板：中式官式建筑配色（朱墙 / 青瓦 / 木色 / 石作 / 琉璃彩画） */
export const PAL = {
  // 石作
  stone: 0x9aa0a6,
  stoneDark: 0x767c82,
  stoneLight: 0xb9bec2,
  marble: 0xd6d9dc,

  // 墙体 / 立柱
  red: 0xa8342c,
  redDark: 0x7d2620,
  redLight: 0xc04a39,

  // 木构
  wood: 0x6d4530,
  woodDark: 0x452a1e,
  woodLight: 0x8a5c3f,

  // 琉璃瓦 / 青瓦
  tile: 0x55616f,
  tileDark: 0x414b57,
  tileLight: 0x6d7d91,

  // 彩画 / 装饰
  gold: 0xd8a94b,
  goldDark: 0xa87c2e,
  teal: 0x2e6f88,
  tealDark: 0x1f5064,
  tealLight: 0x4d93a8,

  // 植被 / 地被
  grass: 0x6d9048,
  grassDark: 0x54783a,
  grassLight: 0x86a659,
  leaf: 0x4e7d3b,
  leafDark: 0x3a6330,
  leafLight: 0x6d9c4e,
  trunk: 0x5b4130,
  earth: 0x6a5942,

  // 小品
  bronze: 0x5a7160,
  bronzeDark: 0x3e5143,
  paper: 0xe4d3a8,
  flowerPink: 0xe585ac,
  flowerWhite: 0xf1ece0,
  flowerGold: 0xe6bf55,

  // 自发光（灯笼 / 窗纸）
  lantern: 0xd8392a,
  lanternCap: 0x2b2119,
  window: 0xffc978,
  ember: 0xff8a3c
};

/** sRGB 空间明暗调整，amt ∈ [-1, 1]；正数提亮、负数压暗 */
export function shade(hex, amt) {
  const r = (hex >> 16) & 255;
  const g = (hex >> 8) & 255;
  const b = hex & 255;
  const f = (v) => {
    const out = amt >= 0 ? v + (255 - v) * amt : v * (1 + amt);
    return Math.max(0, Math.min(255, Math.round(out)));
  };
  return (f(r) << 16) | (f(g) << 8) | f(b);
}

/** 在基准色上做随机微扰，避免大面积纯色显得死板 */
export function jitter(hex, rng, amount = 0.06) {
  return shade(hex, (rng() * 2 - 1) * amount);
}

/** 确定性随机数（mulberry32），保证每次打开场景完全一致 */
export function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** 数值线性插值 */
export function lerp(a, b, t) {
  return a + (b - a) * t;
}
