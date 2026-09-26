/**
 * 晨昏色调 — time-of-day presets (DOM-free, Three.js-free).
 *
 * Each preset drives the sky gradient, sun colour/position, hemisphere fill, fog,
 * tone-mapping exposure and the lantern emission. `lerpPreset` makes the switch between
 * presets a smooth cross-fade instead of a hard cut.
 */

export const PRESETS = {
  morning: {
    label: '晨',
    skyTop: 0x7fa6d8,
    skyBottom: 0xf7d9b0,
    fog: 0xd9cfc0,
    fogNear: 210,
    fogFar: 880,
    sunColor: 0xffd9a8,
    sunIntensity: 2.0,
    sunAzimuth: 108,          // degrees, clockwise from +z (south)
    sunElevation: 17,         // degrees above the horizon
    hemiSky: 0xbfd4ee,
    hemiGround: 0x6b5a44,
    hemiIntensity: 0.85,
    ambient: 0.16,
    exposure: 1.0,
    lantern: 0.28,
    sunDisc: 0xffe6bd,
  },
  noon: {
    label: '午',
    skyTop: 0x4f8fd6,
    skyBottom: 0xc9e2f2,
    fog: 0xc6d8e6,
    fogNear: 260,
    fogFar: 1000,
    sunColor: 0xfff4e0,
    sunIntensity: 2.8,
    sunAzimuth: 186,
    sunElevation: 62,
    hemiSky: 0xd6e8ff,
    hemiGround: 0x7a6b52,
    hemiIntensity: 1.0,
    ambient: 0.2,
    exposure: 0.95,
    lantern: 0.0,
    sunDisc: 0xfffdf2,
  },
  dusk: {
    label: '昏',
    skyTop: 0x2c3f66,
    skyBottom: 0xf0a05a,
    fog: 0x8a6a5a,
    fogNear: 200,
    fogFar: 900,
    sunColor: 0xffb066,
    sunIntensity: 2.1,
    sunAzimuth: 292,
    sunElevation: 11,
    hemiSky: 0x8fa8d0,
    hemiGround: 0x6a4a34,
    hemiIntensity: 0.72,
    ambient: 0.2,
    exposure: 1.08,
    lantern: 0.85,
    sunDisc: 0xffc98a,
  },
  night: {
    label: '夜',
    skyTop: 0x070d1c,
    skyBottom: 0x1d2b46,
    fog: 0x141d31,
    fogNear: 180,
    fogFar: 820,
    sunColor: 0x9fb6e8,
    sunIntensity: 0.42,
    sunAzimuth: 318,
    sunElevation: 38,
    hemiSky: 0x33456b,
    hemiGround: 0x1b1a22,
    hemiIntensity: 0.5,
    ambient: 0.22,
    exposure: 1.25,
    lantern: 1.9,
    sunDisc: 0xdfe9ff,
  },
};

export const PRESET_ORDER = ['morning', 'noon', 'dusk', 'night'];

const hexToRgb = (h) => [((h >> 16) & 255) / 255, ((h >> 8) & 255) / 255, (h & 255) / 255];
const lerp = (a, b, t) => a + (b - a) * t;
const lerpRgb = (a, b, t) => [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)];

/** Interpolate two presets. Colours come back as [r,g,b] in 0..1 sRGB. */
export function lerpPreset(a, b, t) {
  const A = PRESETS[a] || PRESETS.dusk;
  const B = PRESETS[b] || A;
  const k = Math.min(1, Math.max(0, t));
  return {
    label: k < 0.5 ? A.label : B.label,
    skyTop: lerpRgb(hexToRgb(A.skyTop), hexToRgb(B.skyTop), k),
    skyBottom: lerpRgb(hexToRgb(A.skyBottom), hexToRgb(B.skyBottom), k),
    fog: lerpRgb(hexToRgb(A.fog), hexToRgb(B.fog), k),
    fogNear: lerp(A.fogNear, B.fogNear, k),
    fogFar: lerp(A.fogFar, B.fogFar, k),
    sunColor: lerpRgb(hexToRgb(A.sunColor), hexToRgb(B.sunColor), k),
    sunIntensity: lerp(A.sunIntensity, B.sunIntensity, k),
    sunAzimuth: lerp(A.sunAzimuth, B.sunAzimuth, k),
    sunElevation: lerp(A.sunElevation, B.sunElevation, k),
    hemiSky: lerpRgb(hexToRgb(A.hemiSky), hexToRgb(B.hemiSky), k),
    hemiGround: lerpRgb(hexToRgb(A.hemiGround), hexToRgb(B.hemiGround), k),
    hemiIntensity: lerp(A.hemiIntensity, B.hemiIntensity, k),
    ambient: lerp(A.ambient, B.ambient, k),
    exposure: lerp(A.exposure, B.exposure, k),
    lantern: lerp(A.lantern, B.lantern, k),
    sunDisc: lerpRgb(hexToRgb(A.sunDisc), hexToRgb(B.sunDisc), k),
  };
}

/** Unit vector pointing from the site towards the sun. */
export function sunDirection(azimuthDeg, elevationDeg) {
  const az = (azimuthDeg * Math.PI) / 180;
  const el = (elevationDeg * Math.PI) / 180;
  const c = Math.cos(el);
  return [Math.sin(az) * c, Math.sin(el), Math.cos(az) * c];
}
