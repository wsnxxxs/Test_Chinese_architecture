// 中式古建筑色彩体系 + 颜色工具
export const PALETTE = {
  // 墙体 / 木构
  wallRed: 0xb03a2e,      // 红墙
  wallRedDark: 0x8e2a20,  // 立柱 / 门窗框
  beamTeal: 0x1f6f6b,     // 彩绘横梁（青绿）
  beamBlue: 0x274e6d,     // 和玺彩画蓝
  // 琉璃瓦 / 青瓦
  tileGold: 0xd8963c,     // 主殿黄琉璃
  tileGoldRidge: 0xb5772a,
  tileBlue: 0x2f5fb3,     // 碑亭蓝琉璃（祈年殿色系）
  tileBlueRidge: 0x244a8c,
  tileSlate: 0x4e6e6a,     // 青琉璃（配殿/山门）
  tileSlateRidge: 0x3a5650,
  tilePagoda: 0x4a5a52,    // 宝塔青灰瓦
  tilePagodaRidge: 0x37453e,
  // 石 / 铺装
  stone: 0xb5b0a2,
  stoneLight: 0xc7c1b2,
  stoneDark: 0x8f8a7c,
  paving: 0xcfc8b8,
  pavingDark: 0xa89f8d,
  // 门窗 / 装饰
  paper: 0xe9dfc8,        // 窗纸
  doorLeaf: 0x7a1c12,     // 门扇
  woodDark: 0x4a2f1f,     // 棂条 / 深色木
  trunk: 0x6b4a2f,
  gold: 0xd9a83c,
  // 环境
  leaf: 0x3e6b3a,
  leafLight: 0x4a7a44,
  grass: 0x7d9159,
  lion: 0x9a9a92,
  patina: 0x3f7a6a,       // 香炉铜绿
  wallOuter: 0x8f8a7c,    // 围墙
  wallCap: 0x4a5560,
  flowerRed: 0xc0392b,
  flowerGold: 0xd9a83c,
  flowerPink: 0xd77a9a,
  // 自发光（灯笼 / 水面 / 宝顶）
  glowRed: 0xff5a30,
  glowBlue: 0x6fc3ea,
  glowGold: 0xffd76a,
};

// amt: -100 ~ 100，正数变亮、负数变暗
export function shade(hex, amt) {
  const n = typeof hex === 'number' ? hex : parseInt(hex.slice(1), 16);
  let r = (n >> 16) & 255;
  let g = (n >> 8) & 255;
  let b = n & 255;
  const f = amt / 100;
  if (f >= 0) {
    r += (255 - r) * f;
    g += (255 - g) * f;
    b += (255 - b) * f;
  } else {
    r *= 1 + f;
    g *= 1 + f;
    b *= 1 + f;
  }
  return (Math.round(r) << 16) | (Math.round(g) << 8) | Math.round(b);
}

// 按 ±amt 随机抖动颜色，让体素表面更有层次
export function jit(hex, rng, amt = 5) {
  return shade(hex, (rng() * 2 - 1) * amt);
}
