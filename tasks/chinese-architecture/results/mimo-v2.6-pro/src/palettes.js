/**
 * 三套光照氛围：晨曦（默认可切）/ 暮色（默认）/ 夜景
 * 太阳为唯一带阴影的主光源，另配冷色补光 + 半球光 + 环境光。
 */
export const PALETTES = {
  dawn: {
    label: '晨曦',
    sun: { color: 0xffd2a0, intensity: 2.5, pos: [115, 62, 75] },
    fill: { color: 0x93b2ea, intensity: 0.55, pos: [-85, 42, -65] },
    hemi: { sky: 0xbcd6f2, ground: 0x6a5a44, intensity: 0.9 },
    amb: { color: 0x9db2d8, intensity: 0.42 },
    skyTop: 0x35558f,
    skyBottom: 0xf2cba6,
    fog: { color: 0xd8c1a4, near: 180, far: 660 },
    glow: 0.25,
    lamps: 0.35,
    exposure: 1.02,
  },
  dusk: {
    label: '暮色',
    sun: { color: 0xff9a55, intensity: 3.0, pos: [-125, 44, 85] },
    fill: { color: 0x7285c8, intensity: 0.5, pos: [85, 52, -75] },
    hemi: { sky: 0x8f7fc0, ground: 0x5c4a38, intensity: 0.75 },
    amb: { color: 0x8c7fb8, intensity: 0.38 },
    skyTop: 0x272a5e,
    skyBottom: 0xe8875a,
    fog: { color: 0xb2836c, near: 160, far: 620 },
    glow: 0.6,
    lamps: 0.85,
    exposure: 1.06,
  },
  night: {
    label: '夜景',
    sun: { color: 0x96abd8, intensity: 0.6, pos: [-55, 95, -45] },
    fill: { color: 0x36406c, intensity: 0.28, pos: [75, 35, 65] },
    hemi: { sky: 0x2c3a6a, ground: 0x1c1a22, intensity: 0.5 },
    amb: { color: 0x2a3050, intensity: 0.32 },
    skyTop: 0x060918,
    skyBottom: 0x1b2344,
    fog: { color: 0x12172c, near: 130, far: 540 },
    glow: 1.6,
    lamps: 1.9,
    exposure: 1.18,
  },
};

export function applyPalette(key, env) {
  const p = PALETTES[key] ?? PALETTES.dusk;
  const { sun, fill, hemi, amb } = env;
  sun.color.setHex(p.sun.color);
  sun.intensity = p.sun.intensity;
  sun.position.set(...p.sun.pos);
  fill.color.setHex(p.fill.color);
  fill.intensity = p.fill.intensity;
  fill.position.set(...p.fill.pos);
  hemi.color.setHex(p.hemi.sky);
  hemi.groundColor.setHex(p.hemi.ground);
  hemi.intensity = p.hemi.intensity;
  amb.color.setHex(p.amb.color);
  amb.intensity = p.amb.intensity;
  env.skyMat.uniforms.top.value.setHex(p.skyTop);
  env.skyMat.uniforms.bottom.value.setHex(p.skyBottom);
  env.scene.fog.color.setHex(p.fog.color);
  env.scene.fog.near = p.fog.near;
  env.scene.fog.far = p.fog.far;
  env.glowMat.emissiveIntensity = p.glow;
  for (const l of env.lamps) l.intensity = p.lamps * l.userData.base;
  env.renderer.toneMappingExposure = p.exposure;
}
