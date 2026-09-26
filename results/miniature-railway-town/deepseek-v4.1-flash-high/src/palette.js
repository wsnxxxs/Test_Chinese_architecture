/**
 * PALETTE — surface colours (time independent) and the three lighting moods.
 * Owned by: orchestrator (frozen contract). Consumed by textures.js, materials.js, lighting.js.
 *
 * NOTE: BASE_COLORS holds *albedo* values. PALETTES holds light/sky/fog values per time of day.
 */

export const BASE_COLORS = {
  wood: {
    frame: 0x8b5e34,
    frameDark: 0x69452a,
    top: 0xb68757,
    rim: 0x9c6b3c,
    rimTop: 0xc4955f,
    rimEdge: 0xe0b57c,
  },
  ground: {
    grass: 0x7d9c49,
    grassDry: 0x9aa85b,
    grassDark: 0x5b7c36,
    grassShade: 0x48632c,
    dirt: 0x9c7a4f,
    sand: 0xb99a6a,
    bed: 0x8a7a5c,
    pebble: 0x9b9182,
    rock: 0x8b8478,
  },
  water: {
    surface: 0x2f6a76,
    shallow: 0x5fa0a0,
    foam: 0xd8ecec,
  },
  road: {
    asphalt: 0x4b4b4d,
    gravel: 0x8a8172,
    path: 0xa39a89,
    marking: 0xd9d3bd,
    sidewalk: 0xa9a294,
    curb: 0x8d8880,
  },
  rail: {
    ballast: 0x9b9184,
    sleeper: 0x5b4630,
    rail: 0xc2c6ca,
    railSide: 0x7a5a45,
    steel: 0x6b7280,
    steelDark: 0x4b5158,
    truss: 0x8c3b32,
    concrete: 0xb2aea4,
    stone: 0x9a958b,
    stoneDark: 0x7d786e,
    bridgeDeck: 0x53463a,
    timber: 0x7b5636,
    timberDark: 0x5a3f27,
  },
  wall: {
    plaster: [0xeadfc7, 0xe2cfae, 0xd9c8bd, 0xccd6cf, 0xe7d3a9, 0xd8c3a3, 0xc9b2a4],
    brick: 0x8f4f3c,
    stone: 0x9a958b,
    timber: 0x7b5636,
    trim: 0xf0e9db,
    shop: 0x6d4a3a,
  },
  roof: {
    tileA: 0x8d4a3a,
    tileB: 0x74443a,
    slate: 0x585f66,
    slateBrown: 0x6d5f58,
    shingle: 0x7d5a3c,
    metal: 0x62696e,
  },
  window: {
    glass: 0x2f4250,
    frame: 0xf2ede2,
    warm: 0xffc978,
    warmDeep: 0xff9b45,
    cool: 0xfff2d6,
    mullion: 0x4a4038,
  },
  station: {
    wall: 0xe6d7b8,
    trim: 0x8a4a3c,
    canopy: 0x6d4b31,
    canopyGlass: 0xbcd2d8,
    platform: 0xbdb3a2,
    platformEdge: 0xb04a3a,
    signBoard: 0x1f3b56,
    signText: 0xf3efe6,
  },
  train: {
    loco: 0x2f3a45,
    locoTrim: 0x9c3b2e,
    boiler: 0x1f262c,
    smokeBox: 0x8e9298,
    brass: 0xc9a227,
    coachA: 0x3f5d4a,
    coachB: 0x6b3a34,
    coachTrim: 0xe8dcae,
    roof: 0x6e6a63,
    wheel: 0x26282b,
    wheelRim: 0x9aa0a6,
    coupler: 0x3a3a3c,
  },
  nature: {
    foliage: [0x4e7c3a, 0x3f6b31, 0x6b8f3f, 0x2f5a2c, 0x7d9c4a],
    foliageDry: 0x9c8f3e,
    trunk: 0x6b4c33,
    trunkDark: 0x513928,
    hedge: 0x3f6634,
    flowers: [0xd8d44e, 0xc65b7a, 0xe8e2d8, 0x8a6bbf, 0xd97b3f],
    hay: 0xc9a95e,
  },
  props: {
    lampPost: 0x33383d,
    lampGlass: 0xffd9a0,
    lampIron: 0x272b2f,
    fenceWood: 0xa8875c,
    fenceWhite: 0xe9e4d8,
    crate: 0x8a6a42,
    barrel: 0x5b4630,
    signGreen: 0x2f5c3f,
    awningA: 0xa8402f,
    awningB: 0x2f5c86,
    cloth: 0xe6ded0,
  },
};

/** Per-mode lighting / sky / fog / emissive settings. */
export const PALETTES = {
  day: {
    label: '白天',
    skyTop: 0x7fb2e8,
    skyBottom: 0xdfeeff,
    skyHorizon: 0xcfe4f7,
    sunColor: 0xfff4e0,
    sunIntensity: 3.0,
    sunElevationDeg: 58,
    sunAzimuthDeg: 128,
    hemiSky: 0xbfd8f5,
    hemiGround: 0x6f7a4a,
    hemiIntensity: 0.85,
    ambientColor: 0xffffff,
    ambientIntensity: 0.16,
    environmentIntensity: 1.0,
    fogColor: 0xd8e8f7,
    fogNear: 150,
    fogFar: 420,
    /** 0 = windows/lamps dark, 1 = full night glow */
    emissive: 0.0,
    /** multiplier for the point lights standing in for lamp posts */
    lampLightIntensity: 0.0,
    /** strength of the fake sun glow sprite */
    sunGlow: 0.15,
    shadowIntensity: 1.0,
  },

  evening: {
    label: '傍晚',
    skyTop: 0x2c4272,
    skyBottom: 0xffb877,
    skyHorizon: 0xffd9a3,
    sunColor: 0xffb066,
    sunIntensity: 2.8,
    sunElevationDeg: 22,
    sunAzimuthDeg: 262,
    hemiSky: 0x8fa5d6,
    hemiGround: 0x4a4432,
    hemiIntensity: 0.74,
    ambientColor: 0xffd9b0,
    ambientIntensity: 0.24,
    environmentIntensity: 0.82,
    fogColor: 0xb08a80,
    fogNear: 130,
    fogFar: 380,
    emissive: 0.4,
    lampLightIntensity: 0.55,
    sunGlow: 1.0,
    shadowIntensity: 1.0,
  },

  night: {
    label: '夜晚',
    skyTop: 0x040814,
    skyBottom: 0x18294a,
    skyHorizon: 0x27405f,
    sunColor: 0x9fc0ff,
    sunIntensity: 0.5,
    sunElevationDeg: 46,
    sunAzimuthDeg: 20,
    hemiSky: 0x243050,
    hemiGround: 0x0d1018,
    hemiIntensity: 0.26,
    ambientColor: 0x9fb4e0,
    ambientIntensity: 0.1,
    environmentIntensity: 0.3,
    fogColor: 0x0b1224,
    fogNear: 110,
    fogFar: 340,
    emissive: 1.0,
    lampLightIntensity: 1.0,
    sunGlow: 0.0,
    shadowIntensity: 0.55,
  },
};

/** Colour helpers used by several modules. */
export function mixHex(a, b, t) {
  const ar = (a >> 16) & 0xff;
  const ag = (a >> 8) & 0xff;
  const ab = a & 0xff;
  const br = (b >> 16) & 0xff;
  const bg = (b >> 8) & 0xff;
  const bb = b & 0xff;
  const r = Math.round(ar + (br - ar) * t);
  const g = Math.round(ag + (bg - ag) * t);
  const bl = Math.round(ab + (bb - ab) * t);
  return (r << 16) | (g << 8) | bl;
}

export default PALETTES;
