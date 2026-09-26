/**
 * MATERIALS — 全场共享材质库。
 * Owner: 材质/贴图 agent。所有材质在此创建一次、按名字复用，网格里不再 new。
 *
 * 约定：
 *  - 全部 MeshStandardMaterial（不使用 MeshPhysicalMaterial 的 transmission/clearcoat 等昂贵特性）。
 *  - 颜色全部取自 src/palette.js 的 BASE_COLORS；贴图已烘焙颜色的材质（brick / grass / 窗户 /
 *    招牌 / 遮阳篷）用白色乘子，避免二次着色。
 *  - 所有材质都登记进环境强度注册表，setEnvironmentIntensity() 一次覆盖全部。
 *  - 夜间自发光走注册表，setNightEmissive(k) 在日/夜之间线性插值，可每帧反复调用。
 */

import * as THREE from 'three';
import { BASE_COLORS, mixHex } from '../palette.js';
import { TEX } from './textures.js';

/** TEX —— 透传 textures.js 的贴图表（材质库的 map 都指向这里的唯一实例）。 */
export { TEX };

const C = BASE_COLORS;

/* 中性乘子与常色：仅用于「贴图已烘焙颜色」或把调色板颜色压暗，不代表新颜色。 */
const WHITE = 0xffffff;
const BLACK = 0x000000;

/* ------------------------------------------------------------------ *
 * 注册表
 * ------------------------------------------------------------------ */

/** 环境强度覆盖范围：所有材质（含自发光注册表内的）。 */
const environmental = [];
let envIntensity = 1;

/** 夜间自发光注册表：{ material, dayIntensity, nightIntensity, dayColor, nightColor }。 */
const emissiveRegistry = [];
const tmpColor = new THREE.Color();

/** 创建一个 MeshStandardMaterial 并登记进环境强度表。 */
function mat(params) {
  const m = new THREE.MeshStandardMaterial(params);
  registerEnvironmental(m);
  return m;
}

/**
 * 创建自发光材质：额外登记日/夜强度与颜色，交给 setNightEmissive(k) 插值。
 */
function glowMat(params, spec) {
  const m = mat(params);
  const dayColor = new THREE.Color(spec.dayColor === undefined ? WHITE : spec.dayColor);
  const nightColor = new THREE.Color(spec.nightColor === undefined ? WHITE : spec.nightColor);
  const entry = {
    material: m,
    dayIntensity: spec.dayIntensity === undefined ? 0 : spec.dayIntensity,
    nightIntensity: spec.nightIntensity === undefined ? 0 : spec.nightIntensity,
    dayColor,
    nightColor,
  };
  m.emissive.copy(dayColor);
  m.emissiveIntensity = entry.dayIntensity;
  emissiveRegistry.push(entry);
  return m;
}

/**
 * registerEnvironmental —— 其它模块自建材质后可登记，使其同样受 setEnvironmentIntensity 影响。
 */
export function registerEnvironmental(material) {
  if (!material || environmental.indexOf(material) !== -1) return material;
  material.envMapIntensity = envIntensity;
  environmental.push(material);
  return material;
}

/**
 * setEnvironmentIntensity —— 给所有已登记材质设置 envMapIntensity = v（用 PALETTES[mode].environmentIntensity）。
 */
export function setEnvironmentIntensity(v) {
  envIntensity = Number.isFinite(v) ? v : 1;
  for (let i = 0; i < environmental.length; i++) environmental[i].envMapIntensity = envIntensity;
}

/**
 * setNightEmissive —— k = 0 白天 / 1 夜晚：按注册表在日/夜自发光强度与颜色之间线性插值。
 * 完全幂等（每次都从注册表的基准值重算，不累积状态），可每帧调用。
 */
export function setNightEmissive(k) {
  const t = Math.max(0, Math.min(1, Number.isFinite(k) ? k : 0));
  for (let i = 0; i < emissiveRegistry.length; i++) {
    const e = emissiveRegistry[i];
    tmpColor.copy(e.dayColor).lerp(e.nightColor, t);
    e.material.emissive.copy(tmpColor);
    e.material.emissiveIntensity = e.dayIntensity + (e.nightIntensity - e.dayIntensity) * t;
  }
}

/* ------------------------------------------------------------------ *
 * MAT
 * ------------------------------------------------------------------ */

/**
 * MAT —— 全场共享材质（唯一实例）。键名与 BASE_COLORS 的分组一一对应。
 */
export const MAT = {
  /* 木质底座：底板 / 边框（木纹贴图为灰度，由 color 染色） */
  wood: {
    frame: mat({ color: C.wood.frame, map: TEX.woodPlinth, roughness: 0.82, metalness: 0 }),
    frameDark: mat({ color: C.wood.frameDark, map: TEX.woodPlinth, roughness: 0.84, metalness: 0 }),
    top: mat({ color: C.wood.top, map: TEX.woodPlinth, roughness: 0.8, metalness: 0 }),
    rim: mat({ color: C.wood.rim, map: TEX.woodRim, roughness: 0.78, metalness: 0 }),
    rimTop: mat({ color: C.wood.rimTop, map: TEX.woodRim, roughness: 0.76, metalness: 0 }),
    rimEdge: mat({ color: C.wood.rimEdge, map: TEX.woodRim, roughness: 0.74, metalness: 0 }),
  },

  /* 地面：草地（贴图已烘焙颜色）/ 泥土 / 沙 / 河床 / 岩石 */
  ground: {
    grass: mat({ color: WHITE, map: TEX.grass, roughness: 0.95, metalness: 0 }),
    dirt: mat({ color: C.ground.dirt, map: TEX.plaster, roughness: 0.96, metalness: 0 }),
    sand: mat({ color: C.ground.sand, map: TEX.gravel, roughness: 0.94, metalness: 0 }),
    bed: mat({ color: C.ground.bed, map: TEX.plaster, roughness: 0.9, metalness: 0 }),
    rock: mat({ color: C.ground.rock, map: TEX.stoneWall, roughness: 0.92, metalness: 0 }),
  },

  /* 水面：表层用多层正弦法线（可平铺）+ 低粗糙度半透明；深层为压暗的不透明水体 */
  water: {
    surface: mat({
      color: C.water.surface,
      normalMap: TEX.waterNormal,
      normalScale: new THREE.Vector2(0.55, 0.55),
      roughness: 0.06,
      metalness: 0,
      transparent: true,
      opacity: 0.82,
      depthWrite: true,
    }),
    deep: mat({ color: mixHex(C.water.surface, BLACK, 0.45), roughness: 0.18, metalness: 0 }),
  },

  /* 道路：沥青 / 碎石 / 步道 / 标线 / 人行道 / 路缘 */
  road: {
    asphalt: mat({ color: C.road.asphalt, map: TEX.asphalt, roughness: 0.92, metalness: 0 }),
    gravel: mat({ color: C.road.gravel, map: TEX.gravel, roughness: 0.9, metalness: 0 }),
    path: mat({ color: C.road.path, map: TEX.gravel, roughness: 0.93, metalness: 0 }),
    marking: mat({ color: C.road.marking, roughness: 0.7, metalness: 0 }),
    sidewalk: mat({ color: C.road.sidewalk, map: TEX.flagstone, roughness: 0.88, metalness: 0 }),
    curb: mat({ color: C.road.curb, map: TEX.plaster, roughness: 0.85, metalness: 0 }),
  },

  /* 铁路：道砟 / 枕木 / 钢轨（金属感）/ 桥梁与站台附属 */
  rail: {
    ballast: mat({ color: C.rail.ballast, map: TEX.ballast, roughness: 0.9, metalness: 0 }),
    sleeper: mat({ color: C.rail.sleeper, map: TEX.woodPlinth, roughness: 0.86, metalness: 0 }),
    rail: mat({ color: C.rail.rail, roughness: 0.35, metalness: 0.85 }),
    railSide: mat({ color: C.rail.railSide, roughness: 0.55, metalness: 0.4 }),
    steel: mat({ color: C.rail.steel, roughness: 0.5, metalness: 0.6 }),
    steelDark: mat({ color: C.rail.steelDark, roughness: 0.5, metalness: 0.6 }),
    truss: mat({ color: C.rail.truss, roughness: 0.62, metalness: 0.25 }),
    concrete: mat({ color: C.rail.concrete, map: TEX.plaster, roughness: 0.85, metalness: 0 }),
    stone: mat({ color: C.rail.stone, map: TEX.stoneWall, roughness: 0.9, metalness: 0 }),
    stoneDark: mat({ color: C.rail.stoneDark, map: TEX.stoneWall, roughness: 0.9, metalness: 0 }),
    bridgeDeck: mat({ color: C.rail.bridgeDeck, map: TEX.woodPlinth, roughness: 0.85, metalness: 0 }),
    timber: mat({ color: C.rail.timber, map: TEX.timber, roughness: 0.82, metalness: 0 }),
    timberDark: mat({ color: C.rail.timberDark, map: TEX.timber, roughness: 0.84, metalness: 0 }),
  },

  /* 墙体：7 种灰泥（索引对应 BASE_COLORS.wall.plaster）/ 砖 / 石 / 木构 / 线脚 / 店铺门脸 */
  wall: {
    plaster: C.wall.plaster.map((hex) => mat({ color: hex, map: TEX.plaster, roughness: 0.9, metalness: 0 })),
    brick: mat({ color: WHITE, map: TEX.brick, roughness: 0.88, metalness: 0 }),
    stone: mat({ color: C.wall.stone, map: TEX.stoneWall, roughness: 0.9, metalness: 0 }),
    timber: mat({ color: C.wall.timber, map: TEX.timber, roughness: 0.84, metalness: 0 }),
    trim: mat({ color: C.wall.trim, roughness: 0.62, metalness: 0 }),
    shop: mat({ color: C.wall.shop, map: TEX.woodPlinth, roughness: 0.76, metalness: 0 }),
  },

  /* 屋面：4 种瓦色 / 石板 / 褐石板 / 木瓦 / 金属屋面 / 屋脊 */
  roof: {
    tiles: [C.roof.tileA, C.roof.tileB, C.roof.shingle, mixHex(C.roof.tileA, C.roof.tileB, 0.5)].map((hex) =>
      mat({ color: hex, map: TEX.roofTile, roughness: 0.8, metalness: 0 }),
    ),
    slate: mat({ color: C.roof.slate, map: TEX.roofSlate, roughness: 0.55, metalness: 0.1 }),
    slateBrown: mat({ color: C.roof.slateBrown, map: TEX.roofSlate, roughness: 0.6, metalness: 0.08 }),
    shingle: mat({ color: C.roof.shingle, map: TEX.roofSlate, roughness: 0.86, metalness: 0 }),
    metal: mat({ color: C.roof.metal, map: TEX.roofSlate, roughness: 0.42, metalness: 0.55 }),
    ridge: mat({ color: mixHex(C.roof.tileA, C.roof.tileB, 0.3), map: TEX.roofTile, roughness: 0.78, metalness: 0 }),
  },

  /* 窗户：普通玻璃 + 4 档夜间亮窗（warm / cool / dim / dark）+ 格条 / 外框 */
  window: {
    glass: glowMat(
      { map: TEX.windowGlass, emissiveMap: TEX.windowLit, roughness: 0.1, metalness: 0.1 },
      { dayIntensity: 0, nightIntensity: 0.35, dayColor: WHITE, nightColor: WHITE },
    ),
    lit: [2.2, 1.6, 0.7, 0].map((night) =>
      glowMat(
        { map: TEX.windowGlass, emissiveMap: TEX.windowLit, roughness: 0.14, metalness: 0.08 },
        { dayIntensity: 0, nightIntensity: night, dayColor: WHITE, nightColor: WHITE },
      ),
    ),
    mullion: mat({ color: C.window.mullion, roughness: 0.7, metalness: 0 }),
    frame: mat({ color: C.window.frame, roughness: 0.66, metalness: 0 }),
  },

  /* 车站：站房 / 线脚 / 雨棚 / 棚玻璃 / 站台 / 站台边 / 站牌 / 钟面 / 钟针 / 木作 / 棚灯玻璃 */
  station: {
    wall: mat({ color: C.station.wall, map: TEX.plaster, roughness: 0.88, metalness: 0 }),
    trim: mat({ color: C.station.trim, roughness: 0.6, metalness: 0 }),
    canopy: mat({ color: C.station.canopy, map: TEX.woodPlinth, roughness: 0.8, metalness: 0 }),
    canopyGlass: mat({
      color: C.station.canopyGlass,
      roughness: 0.2,
      metalness: 0.05,
      transparent: true,
      opacity: 0.45,
    }),
    platform: mat({ color: C.station.platform, map: TEX.flagstone, roughness: 0.9, metalness: 0 }),
    platformEdge: mat({ color: C.station.platformEdge, roughness: 0.8, metalness: 0 }),
    sign: mat({ color: WHITE, map: TEX.signPlate, roughness: 0.6, metalness: 0.05 }),
    clockFace: mat({ color: C.station.signText, roughness: 0.45, metalness: 0 }),
    clockHand: mat({ color: C.station.signBoard, roughness: 0.5, metalness: 0.1 }),
    wood: mat({ color: C.props.fenceWood, map: TEX.woodRim, roughness: 0.78, metalness: 0 }),
    lightGlass: glowMat(
      { color: C.window.cool, roughness: 0.24, metalness: 0 },
      { dayIntensity: 0.05, nightIntensity: 3.0, dayColor: C.props.lampGlass, nightColor: C.props.lampGlass },
    ),
  },

  /* 火车：机车 / 锅炉 / 黄铜 / 客车 / 车轮 / 车钩 / 车窗 / 前后灯 / 号牌 */
  train: {
    loco: mat({ color: C.train.loco, roughness: 0.45, metalness: 0.35 }),
    locoTrim: mat({ color: C.train.locoTrim, roughness: 0.5, metalness: 0.12 }),
    boiler: mat({ color: C.train.boiler, roughness: 0.4, metalness: 0.5 }),
    smokeBox: mat({ color: C.train.smokeBox, roughness: 0.42, metalness: 0.62 }),
    brass: mat({ color: C.train.brass, roughness: 0.28, metalness: 0.9 }),
    coachA: mat({ color: C.train.coachA, roughness: 0.5, metalness: 0.12 }),
    coachB: mat({ color: C.train.coachB, roughness: 0.5, metalness: 0.12 }),
    coachTrim: mat({ color: C.train.coachTrim, roughness: 0.55, metalness: 0.05 }),
    roof: mat({ color: C.train.roof, roughness: 0.6, metalness: 0.25 }),
    wheel: mat({ color: C.train.wheel, roughness: 0.4, metalness: 0.5 }),
    wheelRim: mat({ color: C.train.wheelRim, roughness: 0.3, metalness: 0.75 }),
    coupler: mat({ color: C.train.coupler, roughness: 0.5, metalness: 0.5 }),
    glass: mat({ map: TEX.windowGlass, roughness: 0.15, metalness: 0.1 }),
    headlamp: glowMat(
      { color: C.window.cool, roughness: 0.25, metalness: 0.2 },
      { dayIntensity: 0.05, nightIntensity: 2.4, dayColor: C.window.cool, nightColor: C.window.cool },
    ),
    tailLamp: glowMat(
      { color: C.station.platformEdge, roughness: 0.25, metalness: 0.15 },
      {
        dayIntensity: 0.05,
        nightIntensity: 1.6,
        dayColor: C.station.platformEdge,
        nightColor: C.props.awningA,
      },
    ),
    numberPlate: mat({ color: C.train.brass, roughness: 0.35, metalness: 0.7 }),
  },

  /* 自然：5 种树冠（flatShading 出低多边形体积感）/ 枯叶 / 树干 / 绿篱 / 5 种花 / 干草 */
  nature: {
    foliage: C.nature.foliage.map((hex) =>
      mat({ color: hex, roughness: 0.82, metalness: 0, flatShading: true }),
    ),
    foliageDry: mat({ color: C.nature.foliageDry, roughness: 0.85, metalness: 0, flatShading: true }),
    trunk: mat({ color: C.nature.trunk, map: TEX.plaster, roughness: 0.9, metalness: 0 }),
    trunkDark: mat({ color: C.nature.trunkDark, map: TEX.plaster, roughness: 0.9, metalness: 0 }),
    hedge: mat({ color: C.nature.hedge, map: TEX.plaster, roughness: 0.9, metalness: 0 }),
    flowers: C.nature.flowers.map((hex) => mat({ color: hex, roughness: 0.75, metalness: 0 })),
    hay: mat({ color: C.nature.hay, map: TEX.plaster, roughness: 0.95, metalness: 0 }),
  },

  /* 道具：路灯 / 灯罩 / 铸铁 / 木栅栏 / 白栅栏 / 木箱 / 木桶 / 绿牌 / 两种遮阳篷 / 布 / 金属 / 花箱 / 告示 / 长椅 */
  props: {
    lampPost: mat({ color: C.props.lampPost, roughness: 0.5, metalness: 0.55 }),
    lampGlass: glowMat(
      { color: C.props.lampGlass, roughness: 0.25, metalness: 0 },
      { dayIntensity: 0.05, nightIntensity: 3.0, dayColor: C.props.lampGlass, nightColor: C.props.lampGlass },
    ),
    lampIron: mat({ color: C.props.lampIron, roughness: 0.6, metalness: 0.5 }),
    fenceWood: mat({ color: C.props.fenceWood, map: TEX.woodPlinth, roughness: 0.84, metalness: 0 }),
    fenceWhite: mat({ color: C.props.fenceWhite, roughness: 0.7, metalness: 0 }),
    crate: mat({ color: C.props.crate, map: TEX.woodPlinth, roughness: 0.85, metalness: 0 }),
    barrel: mat({ color: C.props.barrel, map: TEX.woodPlinth, roughness: 0.8, metalness: 0 }),
    signGreen: mat({ color: C.props.signGreen, roughness: 0.68, metalness: 0.05 }),
    /* 遮阳篷：都使用已烘焙双色条纹的 TEX.awning；A 为本色，B 用略去饱和的布色（褪色/背光一侧）*/
    awningA: mat({ color: WHITE, map: TEX.awning, roughness: 0.86, metalness: 0 }),
    awningB: mat({
      color: mixHex(C.props.cloth, WHITE, 0.35),
      map: TEX.awning,
      roughness: 0.86,
      metalness: 0,
    }),
    cloth: mat({ color: C.props.cloth, map: TEX.plaster, roughness: 0.9, metalness: 0 }),
    metal: mat({ color: C.rail.steel, roughness: 0.45, metalness: 0.65 }),
    planter: mat({ color: C.props.crate, map: TEX.plaster, roughness: 0.85, metalness: 0 }),
    notice: mat({ color: C.props.fenceWhite, map: TEX.plaster, roughness: 0.7, metalness: 0 }),
    bench: mat({ color: C.rail.timber, map: TEX.woodPlinth, roughness: 0.8, metalness: 0 }),
  },
};

/**
 * 机车的白玻璃灯罩：日/夜均不发光，仅作玻璃。
 * 契约的 MAT.train 键清单里没有它，但品质要求中提到了该键；用不可枚举属性挂上，
 * 既保证 Object.keys(MAT.train) 与契约完全一致，也不会让引用它的模块崩。
 */
Object.defineProperty(MAT.train, 'lampGlass', {
  value: mat({ color: C.window.cool, roughness: 0.22, metalness: 0.05 }),
  enumerable: false,
  writable: false,
  configurable: false,
});
