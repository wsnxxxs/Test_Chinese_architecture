/**
 * palette.js — 中式古建配色板
 * 全部为 sRGB hex，交给 THREE.Color 自动转入线性工作空间。
 */

export const C = {
  /* ---- 墙体 ---- */
  wallRed:      0xa83a24,   // 红墙
  wallRedDark:  0x8a2d1c,   // 红墙暗部 / 墙裙
  wallRedLight: 0xbd4a2e,
  wallWhite:    0xdcd6c8,   // 山花 / 白粉墙
  wallGrey:     0x6d6a63,   // 青砖

  /* ---- 木构 ---- */
  wood:         0x8a5a30,   // 木本色
  woodDark:     0x5e3a1e,   // 门窗棂
  woodRed:      0x9c2f1c,   // 朱红柱
  woodRedDark:  0x78241a,

  /* ---- 琉璃瓦 / 青瓦 ---- */
  tileGold:     0xe0a92c,   // 琉璃黄
  tileGoldLite: 0xf0c94a,
  tileGoldDark: 0xb8841d,
  tileGreen:    0x2f6d5e,   // 琉璃绿
  tileGreenDark:0x245647,
  tileGrey:     0x5b6a78,   // 青瓦
  tileGreyDark: 0x3c4650,
  ridgeGold:    0xf2cf62,   // 正脊 / 宝顶
  ridgeGrey:    0x6f7b86,

  /* ---- 石作 ---- */
  stone:        0xbdb6a6,   // 台基
  stoneLite:    0xd6cfc0,   // 栏杆 / 御路
  stoneDark:    0x8f8879,   // 须弥座束腰
  pave:         0xa79f8e,   // 铺装
  paveAlt:      0x968e7e,
  road:         0xb8b0a0,   // 御道
  roadLite:     0xcfc7b6,

  /* ---- 环境 ---- */
  grass:        0x5c8a45,
  grassDark:    0x4b7339,
  grassLite:    0x6d9c52,
  soil:         0x7a6748,
  trunk:        0x5b4029,
  leaf:         0x3f7a45,
  leafDark:     0x316038,
  leafLite:     0x50934f,

  /* ---- 杂项 ---- */
  lantern:      0xe8452f,   // 灯笼
  lanternLite:  0xf96a30,   // 灯笼发光
  bronze:       0x7f7a4a,   // 香炉 / 铜件
  dark:         0x241a14       // 门窗洞
};
