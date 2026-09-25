/**
 * 全局契约文件（唯一数据源）：所有模块都从这里取调色板 P、布局 L、色调 TONES。
 * 不要在其他文件里硬编码坐标或颜色，需要新值请扩展本文件。
 *
 * 单位约定：1 voxel = 1 world unit ≈ 0.35 m；Y 轴向上；整数体素网格。
 * 中轴 = Z 轴（X=0 为对称轴），南在 +Z 方向，北在 -Z 方向。
 */

/* ------------------------------------------------------------------ 调色板 */
export const P = {
  // 墙体 / 木构
  wallRed: 0xa93b32, // 朱墙
  wallRedDark: 0x8c2f28,
  wallBase: 0x8d8878, // 墙下碱（副碱）
  vermilion: 0xb04a34, // 立柱
  wood: 0x7a5636, // 木色
  woodDark: 0x59402a,
  beamGreen: 0x2f6b5e, // 青绿彩画
  beamBlue: 0x27506e,
  beamTeal: 0x3d8577,
  gold: 0xd9a441,
  goldBright: 0xf0c463,

  // 屋顶
  glazedYellow: 0xd8a02c, // 黄琉璃
  glazedYellowDark: 0xb3801d,
  glazedGreen: 0x2f7355, // 绿琉璃
  glazedGreenDark: 0x245841,
  tileGray: 0x6c7078, // 青瓦
  tileGrayDark: 0x54585f,
  tileLead: 0x4a4f57, // 黛瓦（塔）
  ridge: 0x6f5a34, // 脊（灰褐带金）
  ridgeGold: 0xc79543,
  capRidge: 0x40454d, // 正脊（青石吻）
  tileEnd: 0x8d8f92, // 瓦当/滴水

  // 石作
  stone: 0xb3ac9c,
  stoneDark: 0x8b8578,
  marble: 0xe0dccf,
  marbleLine: 0xc9c4b4,
  cobble: 0xa8a294,
  flagstone: 0xbdb6a4,

  // 地面 / 水 / 植物
  grass: 0x5f8046,
  grassDark: 0x4d6c3b,
  moss: 0x6d8b4f,
  dirt: 0x8a7550,
  sand: 0xb8a67e,
  path: 0xc3bcab,
  pathEdge: 0x9e9787,
  water: 0x3a6b85,
  waterDeep: 0x28516a,
  waterEdge: 0x5d8fa5,
  pine: 0x2f5c40,
  pineDark: 0x24492f,
  cypress: 0x356b4a,
  trunk: 0x4e3826,
  blossom: 0xe0a3b4,
  blossomDeep: 0xc97f95,
  leaf: 0x77934b,

  // 配饰
  lanternRed: 0xc23a2c,
  lanternGlow: 0xffd591,
  silk: 0xe8d7a8,
  bronze: 0x8a6f3e,
  bronzeDark: 0x6b5530,
  iron: 0x44474c,
  snow: 0xeef2f5,
  paper: 0xefe6cf,
  ink: 0x2b2b30,
};

/* ------------------------------------------------------------------ 色调 */
/**
 * 4 套晨昏/夜间预设。lightColor/intensity 使用 three r155+ 物理光照数值。
 * - dir: 主平行光（日/月）
 * - hemi / amb: 天空-地面半球光 + 环境光
 * - fill: 反向补光（弱平行光，勾出暗部层次）
 * - lantern: 灯笼/烛火点光强度（0 表示关闭）
 * - particle: 'petal' 落英 | 'dust' 晨雾微尘 | 'snow'? 未用 | 'firefly' 萤火
 */
export const TONES = {
  dawn: {
    label: '清晨',
    sky: 0xf6d9b8,
    skyHigh: 0x8fb4cf,
    fog: 0xf0cfae,
    fogDensity: 0.00112,
    ground: 0x7d7361,
    dir: { color: 0xffd9a8, intensity: 3.1, azimuth: 118, elevation: 21, shadow: 2048 },
    fill: { color: 0x9fc0d8, intensity: 0.55, azimuth: -62, elevation: 30 },
    hemi: { sky: 0xcfe3f2, ground: 0x6e5f49, intensity: 0.85 },
    amb: { color: 0xbfd2e0, intensity: 0.28 },
    exposure: 1.06,
    lantern: 0.0,
    particle: 'petal',
    tint: 0xffe6c4,
  },
  noon: {
    label: '正午',
    sky: 0xbcd8ee,
    skyHigh: 0x6fa6d8,
    fog: 0xcfdfe9,
    fogDensity: 0.00082,
    ground: 0x8a8570,
    dir: { color: 0xfff6e2, intensity: 3.5, azimuth: 96, elevation: 62, shadow: 2048 },
    fill: { color: 0xbcd6ea, intensity: 0.4, azimuth: -60, elevation: 25 },
    hemi: { sky: 0xd6e8f7, ground: 0x7d7359, intensity: 0.95 },
    amb: { color: 0xd2e0ea, intensity: 0.3 },
    exposure: 1.0,
    lantern: 0.0,
    particle: 'dust',
    tint: 0xffffff,
  },
  dusk: {
    label: '昏黄',
    sky: 0xef9f63,
    skyHigh: 0x5a4a7a,
    fog: 0xd98a5a,
    fogDensity: 0.00148,
    ground: 0x6b5340,
    dir: { color: 0xff9f52, intensity: 2.6, azimuth: 253, elevation: 8, shadow: 2048 },
    fill: { color: 0x7d6fa8, intensity: 0.7, azimuth: 73, elevation: 26 },
    hemi: { sky: 0x8f7fb5, ground: 0x53412f, intensity: 0.7 },
    amb: { color: 0x7a6f9c, intensity: 0.3 },
    exposure: 1.02,
    lantern: 1.0,
    particle: 'petal',
    tint: 0xffcf9e,
  },
  night: {
    label: '月夜',
    sky: 0x1b2340,
    skyHigh: 0x0a1024,
    fog: 0x161d33,
    fogDensity: 0.00195,
    ground: 0x1f2430,
    dir: { color: 0x9db8e8, intensity: 0.9, azimuth: 300, elevation: 34, shadow: 2048 },
    fill: { color: 0x3d4f78, intensity: 0.25, azimuth: 90, elevation: 20 },
    hemi: { sky: 0x33456e, ground: 0x1b1f28, intensity: 0.45 },
    amb: { color: 0x2d3a5c, intensity: 0.35 },
    exposure: 1.12,
    lantern: 1.6,
    particle: 'firefly',
    tint: 0xa9bcff,
  },
};
export const TONE_ORDER = ['dawn', 'noon', 'dusk', 'night'];

/* ------------------------------------------------------------------ 布局 */
/*
 * 所有建筑均为轴对齐（面阔沿 X）或旋转 90°（面阔沿 Z，由 along:'z' 表示）。
 * 数值都是体素格坐标（整数），y0 为该建筑台基底面（一般为 0）。
 */
export const L = {
  extent: { x: [-300, 300], z: [-320, 320] },
  groundSize: 760, // 地面平面边长
  gridStep: 1,

  // 铺装（供 landscape 贴图与道路体素边线共用）
  roads: {
    axis: { x0: -11, x1: 11, z0: -146, z1: 206 }, // 中轴神道
    cross: [
      { z: 146, x0: -88, x1: 88, w: 8 }, // 钟鼓楼连线
      { z: 78, x0: -112, x1: 112, w: 8 }, // 碑亭连线
      { z: -60, x0: -130, x1: 130, w: 8 }, // 主殿后夹道
      { z: -140, x0: -60, x1: 60, w: 8 }, // 塔院前
    ],
    ring: { x: 138, z0: -190, z1: 168, w: 7 }, // 两侧环路（±x 对称）
    courts: [
      { x0: -74, x1: 74, z0: 58, z1: 96 }, // 主殿前月台院
      { x0: -50, x1: 50, z0: -134, z1: -150 }, // 塔院前
    ],
  },

  // 照壁
  screen: { cx: 0, cz: 214, halfW: 32, h: 22 },

  // 山门（南，跨围墙）
  gate: {
    cx: 0, cz: 178, x0: -32, x1: 32, z0: 164, z1: 192,
    terraceH: 5, colH: 17, roofType: 'xieshan', ridgeY: 46, name: '祇园胜境',
  },

  // 外围墙
  wall: {
    x: [-150, 150], z: [-200, 180], h: 13, thick: 5,
    gap: { side: 'south', x0: -36, x1: 36 }, // 山门处断开
    cornerPavilion: { inset: 14, size: 13, h: 20 }, // 四角角楼
  },

  // 钟楼 / 鼓楼
  towers: {
    ym: 64, cz: 146, half: 14, terraceH: 8, bodyH: 15, roofH: 15,
    bell: { cx: -64 }, drum: { cx: 64 },
  },

  // 天王殿（第二进）
  tianwang: {
    cx: 0, cz: 118, x0: -36, x1: 36, z0: 104, z1: 132,
    terraceH: 6, colH: 16, roofType: 'xieshan', ridgeY: 44, name: '天王殿',
  },

  // 碑亭（东西各一）
  stelePavilion: { ym: 40, cz: 78, size: 15, h: 24 },

  // 主殿（大雄宝殿）—— 全场景核心，三重台基 + 重檐庑殿
  mainHall: {
    cx: 0, cz: 0,
    terraces: [
      { x: 74, z: 60, y0: 0, y1: 7 },
      { x: 62, z: 50, y0: 7, y1: 14 },
      { x: 50, z: 42, y0: 14, y1: 21 },
    ],
    hall: { x0: -46, x1: 46, z0: -36, z1: 36 }, // 副阶外檐柱网
    core: { x0: -38, x1: 38, z0: -30, z1: 30 }, // 金柱/墙体
    colH: 20, // 檐柱（自台顶 21 起）
    lowerEaveY: 47, // 下檐檐口（斗拱顶）
    upperColH: 17, // 上檐柱
    upperEaveY: 69,
    roof: { spanX: 104, spanZ: 84, h: 27, ridgeLen: 56 }, // 上檐庑殿顶
    tile: 'glazedYellow',
    name: '大雄宝殿',
  },

  // 东西配殿（面阔沿 Z，朝向中轴）
  sideHall: {
    ym: 118, cz: 40, along: 'z', faceW: 40, depth: 25, // faceW 沿 Z
    terraceH: 6, colH: 14, roofH: 14, tile: 'glazedGreen',
  },

  // 后殿 / 藏经楼（两层）
  rearHall: {
    cx: 0, cz: -110, x0: -42, x1: 42, z0: -126, z1: -94,
    terraceH: 8, storyH: 15, roofType: 'xieshan', tile: 'glazedGreen', name: '藏经楼',
  },

  // 宝塔（中轴北端收束，7 层八角）
  pagoda: {
    cx: 0, cz: -172, terraceH: 8, stories: 7,
    baseHalf: 18, // 首层半径（八角内切）
    bodyH: 12, // 每层身
    eaveH: 5, // 每层檐
    taper: 1.9, // 每层收分
    tile: 'tileLead',
    name: '舍利宝塔',
  },

  // 小院石塔 / 经幢（东西对称）
  smallPagoda: { ym: 116, cz: -150, h: 34 },

  // 抄手游廊（axis-aligned 线段，width 沿水平方向）
  corridors: [
    { dir: 'z', cx: -100, z0: 72, z1: 168 },
    { dir: 'z', cx: 100, z0: 72, z1: 168 },
    { dir: 'x', cz: 72, x0: -100, x1: -50 },
    { dir: 'x', cz: 72, x0: 50, x1: 100 },
    { dir: 'z', cx: -100, z0: -92, z1: -60 },
    { dir: 'z', cx: 100, z0: -92, z1: -60 },
    { dir: 'x', cz: -92, x0: -100, x1: -46 },
    { dir: 'x', cz: -92, x0: 46, x1: 100 },
  ],
  corridor: { width: 9, colH: 12, spacing: 7 },

  // 放生池（南院东西对称）
  ponds: [
    { cx: -124, cz: 116, r: 20 },
    { cx: 124, cz: 116, r: 20 },
  ],

  // 树木（|x|, z 成对镜像放置；type: pine 柏 | cypress 塔柏 | blossom 桃樱 | willow 柳）
  trees: {
    pairs: [
      { x: 30, z: 168, t: 'cypress' }, { x: 46, z: 168, t: 'pine' },
      { x: 88, z: 152, t: 'pine' }, { x: 118, z: 152, t: 'cypress' },
      { x: 22, z: 100, t: 'cypress' }, { x: 62, z: 100, t: 'pine' },
      { x: 134, z: 92, t: 'pine' }, { x: 88, z: -8, t: 'cypress' },
      { x: 140, z: -20, t: 'pine' }, { x: 66, z: -70, t: 'pine' },
      { x: 110, z: -110, t: 'cypress' }, { x: 44, z: -196, t: 'pine' },
      { x: 124, z: 100, t: 'blossom' }, { x: 146, z: 130, t: 'blossom' },
      { x: 20, z: -190, t: 'willow' },
    ],
    path: 8,
  },

  // 灯笼挂点（由 builders 自行确定，这里是"必须有灯光"的关键点位，供夜景点光使用）
  lanternLights: [
    { x: 0, y: 22, z: 178 }, // 山门
    { x: -46, y: 20, z: 146 }, { x: 46, y: 20, z: 146 }, // 钟鼓楼
    { x: 0, y: 20, z: 118 }, // 天王殿
    { x: -34, y: 30, z: 40 }, { x: 34, y: 30, z: 40 }, // 主殿前
    { x: -60, y: 26, z: -20 }, { x: 60, y: 26, z: -20 }, // 主殿两侧
    { x: 0, y: 18, z: -110 }, // 后殿
    { x: 0, y: 30, z: -172 }, // 塔下
  ],

};

/* ------------------------------------------------------------------ 视角 */
/*
 * 机位算法（0.186 相机 52° 竖直 FOV，aspect≈1.6）：
 *   要在目标深度框住高度 H 的构件，需 dist ≳ (H/2)/tan26° ≈ 1.03·H；台基与屋顶同时入画
 *   就按"檐口到台基底"的全高算，再留 15% 余量。仰角取 18–25°：既能看见台基顶面与台阶，
 *   又保留屋檐的侧影。因此单座殿宇一律 200 上下，不再压到 80–130（会把屋檐顶满画面）。
 *   pos/target 全为整数格坐标；DEFAULT_VIEW 仍是全景俯角，首帧即可看全貌。
 */
export const VIEWS = [
  { key: '1', name: '全景', pos: [262, 208, 318], target: [0, 34, -6] },
  // 山门：台基+三券门+歇山顶全高约 50，退到 102 并抬高 16°，越过照壁看到门前石狮与台阶
  { key: '2', name: '山门', pos: [0, 52, 274], target: [0, 24, 176] },
  // 主殿：三重台基(±76×±62, 高 21) + 重檐庑殿(脊 y≈108) → 距离 227 / 仰角 20.7°，
  // 台基四角与正脊全部入画（旧的 [8,52,132] 只到 82 距离，屋檐顶满画面）
  { key: '3', name: '主殿', pos: [64, 120, 206], target: [0, 41, 4] },
  // 宝塔：140 高的八角七层，从主殿东南上空斜取 199 距离，塔刹与塔基同框
  { key: '4', name: '宝塔', pos: [120, 150, -40], target: [0, 62, -172] },
  // 俯瞰：俯视角 65°。旧值 [10,330,40] 在 16:9 下竖向 NDC 达 ±1.61（整个建筑群出框），
  // 抬到 470 / 退到 z=200 才把 z∈[-200,214] 的纵深与 140 高的塔刹一起框进余量内。
  { key: '5', name: '俯瞰', pos: [0, 515, 220], target: [0, 0, -20] },
  // 配殿：面阔沿 Z（40×25 + 台基），退到 111 / 19° 才容得下台基与两坡歇山
  { key: '6', name: '配殿', pos: [-196, 58, 108], target: [-116, 22, 40] },
];

export const DEFAULT_VIEW = VIEWS[0];
