/**
 * 调色板：所有颜色以 sRGB hex 书写，three 的 ColorManagement 会自动转到线性工作空间。
 * 最终画面经过 ACES 色调映射，因此这里比「所见即所得」略提高饱和与明度。
 */
export const P = {
  // 琉璃瓦
  glazeGold: 0xecae26,
  glazeGoldLight: 0xfbd357,
  glazeGoldDark: 0xa87810,
  glazeGreen: 0x5d9a4e,
  glazeGreenLight: 0x86c06c,
  glazeGreenDark: 0x3a6a33,

  // 青瓦
  tile: 0x78756d,
  tileLight: 0x9a968c,
  tileDark: 0x504d47,
  tileDeep: 0x3a3833,

  // 墙体
  wallRed: 0xb23a2e,
  wallRedDark: 0x8b2a22,
  wallRedLight: 0xca5040,
  wallCream: 0xe9dfc6,

  // 木构
  woodRed: 0xac4430,
  woodRedDark: 0x7f2f22,
  woodBrown: 0x6d4329,
  woodDark: 0x3c2318,
  woodLight: 0x94613a,

  // 门窗
  lattice: 0x35211a,
  paper: 0xf2d99c,
  paperDim: 0xc9ad74,

  // 石作
  marble: 0xdedacb,
  marbleShade: 0xbab6a7,
  stone: 0xa59f93,
  stoneDark: 0x8a8479,
  stoneLight: 0xbcb6a9,

  // 地面
  pave: 0x9e988d,
  paveAlt: 0x8d8880,
  paveLight: 0xaea89b,
  court: 0xa9a397,
  courtWarm: 0xb4ab98,
  grass: 0x627f42,
  grassAlt: 0x698547,
  grassDark: 0x566f3a,
  grassDry: 0x6f7f45,

  // 水
  water: 0x2f7484,
  waterDeep: 0x1a4657,
  waterFoam: 0x93c8cc,

  // 远景（越远越冷、越灰，形成空气透视）
  hillNear: 0x39543a,
  hillMid: 0x415a4c,
  hillFar: 0x516878,
  peak: 0x6f8695,

  // 植被
  pine: 0x2e5235,
  pineLight: 0x3e6c42,
  leaf: 0x5d8b3b,
  leafLight: 0x77a34a,
  leafDark: 0x447030,
  trunk: 0x563620,

  // 点缀
  gold: 0xe6c163,
  goldDeep: 0xb8913a,
  lantern: 0xe2492a,
  lanternCap: 0x8a6a22,
  bell: 0xa8853c,
  drum: 0xb23a2c,
  cloud: 0xf4f6fa,
  soil: 0x6b5a44,
};

/** 昼夜预设：晨昏为主，正午作对照 */
export const PRESETS = {
  dawn: {
    label: '晨曦',
    sunEl: 12, sunAz: 72,
    sunColor: 0xffd2a0, sunIntensity: 2.75,
    hemiSky: 0xc9dcf5, hemiGround: 0x6f6047, hemiIntensity: 0.72,
    ambient: 0xa8b6cc, ambientIntensity: 0.42,
    fog: 0xd3bda6, fogNear: 400, fogFar: 1650,
    skyTop: 0x4e86c6, skyMid: 0xc7b096, skyHorizon: 0xf8d5a4,
    sunDisc: 0xffe0ae, sunGlow: 0xffc98a,
    exposure: 1.04, bloom: 0.5, lantern: 0.5,
  },
  noon: {
    label: '正午',
    sunEl: 56, sunAz: 22,
    sunColor: 0xfff5df, sunIntensity: 2.55,
    hemiSky: 0xd2e6fb, hemiGround: 0x807757, hemiIntensity: 0.95,
    ambient: 0xbfd4ee, ambientIntensity: 0.24,
    fog: 0xc0d3e6, fogNear: 500, fogFar: 1900,
    skyTop: 0x3d7cc2, skyMid: 0x8fbde0, skyHorizon: 0xd3e5f0,
    sunDisc: 0xfff8e4, sunGlow: 0xfff0c8,
    exposure: 0.98, bloom: 0.3, lantern: 0.0,
  },
  dusk: {
    label: '暮色',
    sunEl: 7, sunAz: -76,
    sunColor: 0xff9a58, sunIntensity: 2.4,
    hemiSky: 0x5a6f9e, hemiGround: 0x403343, hemiIntensity: 0.72,
    ambient: 0x76749e, ambientIntensity: 0.46,
    fog: 0x5e4a68, fogNear: 320, fogFar: 1500,
    skyTop: 0x1f2757, skyMid: 0x69477e, skyHorizon: 0xed8054,
    sunDisc: 0xffb070, sunGlow: 0xff8a4a,
    exposure: 1.18, bloom: 0.75, lantern: 1.0,
  },
};
