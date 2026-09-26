/**
 * Voxel palette — DOM-free and Three.js-free.
 *
 * Every voxel stores a *palette key*. The renderer groups voxels by key and builds one
 * THREE.InstancedMesh per key, so the number of distinct keys is exactly the number of
 * voxel draw calls. `style` tells the renderer which material parameters to use, which
 * keeps material tuning out of the geometry code.
 */

/** style -> { roughness, metalness, transparent?, opacity?, emissive? } */
export const MATERIAL_STYLES = {
  tile: { roughness: 0.34, metalness: 0.28 },      // 琉璃瓦 / 青瓦：釉面反光
  wall: { roughness: 0.86, metalness: 0.0 },       // 红墙 / 抹灰墙
  wood: { roughness: 0.72, metalness: 0.04 },      // 木构件
  stone: { roughness: 0.92, metalness: 0.0 },      // 台基 / 石作
  ground: { roughness: 1.0, metalness: 0.0 },      // 铺装 / 草地
  foliage: { roughness: 0.95, metalness: 0.0 },    // 植被
  metal: { roughness: 0.32, metalness: 0.82 },     // 金饰 / 铜器
  emissive: { roughness: 0.55, metalness: 0.0, emissive: true }, // 灯笼
  water: { roughness: 0.12, metalness: 0.25, transparent: true, opacity: 0.82 },
  cloth: { roughness: 0.88, metalness: 0.0 },      // 幡 / 鼓面
};

/**
 * key -> { hex, style, note }
 * Chinese names are given in the notes so the palette doubles as documentation.
 */
export const PALETTE = {
  // ---- 屋面：琉璃瓦 / 青瓦 -------------------------------------------------
  tileGold: { hex: 0xc98a22, style: 'tile', note: '金色琉璃瓦（主殿、山门）' },
  tileGoldDim: { hex: 0xa9711b, style: 'tile', note: '琉璃瓦暗面 / 檐口' },
  tileGreen: { hex: 0x2f6b4e, style: 'tile', note: '绿琉璃瓦（配殿、钟鼓楼）' },
  tileGreenDim: { hex: 0x24523d, style: 'tile', note: '绿琉璃瓦暗面' },
  tileGrey: { hex: 0x4b5560, style: 'tile', note: '青瓦（廊庑、围墙）' },
  tileGreyDim: { hex: 0x39414a, style: 'tile', note: '青瓦暗面' },
  ridgeGold: { hex: 0xb98420, style: 'tile', note: '正脊 / 吻兽' },
  ridgeGrey: { hex: 0x3b434c, style: 'tile', note: '青瓦正脊' },
  ridgeGreen: { hex: 0x255c44, style: 'tile', note: '绿琉璃正脊' },
  finialGold: { hex: 0xe0b040, style: 'metal', note: '宝顶 / 金饰' },

  // ---- 墙体 ----------------------------------------------------------------
  wallRed: { hex: 0xa02a24, style: 'wall', note: '红墙' },
  wallRedDark: { hex: 0x7c1e1a, style: 'wall', note: '红墙阴影 / 墙裙' },
  plaster: { hex: 0xe7dcc6, style: 'wall', note: '抹灰白墙 / 山花' },
  brick: { hex: 0x8a7a69, style: 'wall', note: '砖砌基座' },

  // ---- 木作 ----------------------------------------------------------------
  wood: { hex: 0x8b5a32, style: 'wood', note: '木构件' },
  woodDark: { hex: 0x5c3a22, style: 'wood', note: '深色木 / 门窗框内' },
  woodLight: { hex: 0xb07a45, style: 'wood', note: '浅色木 / 斗拱' },
  gold: { hex: 0xd8a93a, style: 'metal', note: '贴金装饰' },

  // ---- 石作 ----------------------------------------------------------------
  stone: { hex: 0x9c9789, style: 'stone', note: '台基 / 栏板' },
  stoneDark: { hex: 0x6f6a5f, style: 'stone', note: '台基压边 / 石狮' },
  stoneLight: { hex: 0xc6c0b2, style: 'stone', note: '栏杆 / 御路' },

  // ---- 地面铺装 ------------------------------------------------------------
  paving: { hex: 0xb2ac9e, style: 'ground', note: '庭院铺砖' },
  pavingAlt: { hex: 0x9e9889, style: 'ground', note: '庭院铺砖（交错）' },
  path: { hex: 0xc4beaf, style: 'ground', note: '甬道 / 道路' },
  pathAlt: { hex: 0xb4ae9e, style: 'ground', note: '甬道交错色' },
  kerb: { hex: 0x8d8779, style: 'stone', note: '路牙' },

  // ---- 植被 ----------------------------------------------------------------
  grass: { hex: 0x4e7a3c, style: 'ground', note: '草地' },
  grassAlt: { hex: 0x40682f, style: 'ground', note: '草地暗色' },
  grassDry: { hex: 0x6c8a3e, style: 'ground', note: '草地枯黄' },
  flower: { hex: 0xc8577a, style: 'ground', note: '花丛点缀' },
  foliage: { hex: 0x3e6e3a, style: 'foliage', note: '树冠' },
  foliageDark: { hex: 0x2c5330, style: 'foliage', note: '树冠暗色' },
  trunk: { hex: 0x6b4a2c, style: 'wood', note: '树干' },

  // ---- 水面 ----------------------------------------------------------------
  water: { hex: 0x2e6e8e, style: 'water', note: '放生池水面' },

  // ---- 灯火 / 陈设 ---------------------------------------------------------
  lanternRed: { hex: 0xc62828, style: 'wall', note: '灯笼壳' },
  lanternGlow: { hex: 0xffc163, style: 'emissive', note: '灯笼发光芯' },
  bronze: { hex: 0x6e5a2e, style: 'metal', note: '铜钟 / 香炉' },
  drumRed: { hex: 0x8e2b22, style: 'cloth', note: '鼓面' },
};

/** All palette keys, in a stable order (used for deterministic instance ordering). */
export const PALETTE_KEYS = Object.keys(PALETTE);

/** Keys that count as "circulation" ground for the road-connectivity check. */
export const ROAD_KEYS = new Set(['path', 'pathAlt', 'paving', 'pavingAlt', 'stoneLight']);

export function styleOf(key) {
  const entry = PALETTE[key];
  if (!entry) throw new Error(`Unknown palette key: ${key}`);
  return entry.style;
}

export function hexOf(key) {
  const entry = PALETTE[key];
  if (!entry) throw new Error(`Unknown palette key: ${key}`);
  return entry.hex;
}
