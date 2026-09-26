import * as THREE from 'three';
import {
  grassTexture,
  dirtTexture,
  gravelTexture,
  asphaltTexture,
  woodTexture,
  stoneTexture,
  brickTexture,
  plasterTexture,
  roofTexture,
  thatchTexture,
  waterTexture,
  waterBumpTexture,
  tableTexture,
  glowTexture,
  plaqueTexture,
  setAnisotropy,
} from '../lib/textures.js';
import { COLORS } from './layout.js';

// ---------------------------------------------------------------------------
// Shared material catalogue. Textures are procedural; UVs are generated in
// world units by the geometry helpers, so `repeat` stays at 1 and texel
// density is controlled per part.
// ---------------------------------------------------------------------------

export function createMaterials(renderer) {
  setAnisotropy(renderer.capabilities.getMaxAnisotropy());

  const std = (opts) => new THREE.MeshStandardMaterial(opts);

  const M = {};

  M.terrain = std({ map: grassTexture(), vertexColors: true, roughness: 0.98, metalness: 0 });
  M.earth = std({ map: dirtTexture('#7a6244'), roughness: 1 });
  M.sand = std({ map: dirtTexture('#b09a72'), roughness: 1 });

  M.woodBase = std({ map: woodTexture({ base: COLORS.woodBase, dark: COLORS.woodBaseDark, planks: 5, seed: 3 }), roughness: 0.72 });
  M.woodRim = std({ map: woodTexture({ base: COLORS.woodRim, dark: '#5d3a1e', planks: 2, seed: 9 }), roughness: 0.6 });
  M.woodDark = std({ map: woodTexture({ base: '#5b3d24', dark: '#38220f', planks: 3, seed: 17 }), roughness: 0.75 });
  M.sleeper = std({ map: woodTexture({ base: '#6b5238', dark: '#3d2c1a', planks: 1, seed: 23, grain: 120 }), roughness: 0.92 });
  M.plank = std({ map: woodTexture({ base: '#8b6a45', dark: '#54402a', planks: 2, seed: 29 }), roughness: 0.85 });

  M.ballast = std({ map: gravelTexture(), roughness: 1, color: 0xb9b2a6 });
  M.gravelRoad = std({ map: gravelTexture(), roughness: 1, color: 0xa89c88 });
  M.asphaltRoad = std({ map: asphaltTexture(), roughness: 0.95, color: 0x9a9894 });

  M.rail = std({ color: 0xc4cad0, roughness: 0.36, metalness: 0.48, side: THREE.DoubleSide });
  M.steel = std({ color: 0x8b939a, roughness: 0.5, metalness: 0.45 });
  M.steelDark = std({ color: 0x474d54, roughness: 0.62, metalness: 0.35 });
  M.ironDark = std({ color: 0x3b3f44, roughness: 0.66, metalness: 0.3 });
  M.brass = std({ color: 0xb08b3a, roughness: 0.3, metalness: 1 });
  M.copper = std({ color: 0x8a6a4a, roughness: 0.45, metalness: 0.85 });
  M.plaque = std({ map: plaqueTexture(['MINIATURE RAILWAY TOWN', '1 : 87  ·  桌面沙盘'], {}), roughness: 0.34, metalness: 0.9 });

  M.stone = std({ map: stoneTexture({}), roughness: 0.92 });
  M.stoneWarm = std({ map: stoneTexture({ base: '#a89a84', dark: '#6f6552', seed: 67 }), roughness: 0.92 });
  M.brick = std({ map: brickTexture({}), roughness: 0.9 });
  M.platform = std({ map: stoneTexture({ base: '#b8b2a4', dark: '#8b8578', seed: 73 }), roughness: 0.9 });
  M.concrete = std({ color: 0xa9a49a, roughness: 0.95 });

  M.plaster = COLORS.plaster.map((c, i) => std({ map: plasterTexture(c, 81 + i), roughness: 0.88 }));
  M.roofs = COLORS.roofs.map((c, i) =>
    std({ map: roofTexture(c, { seed: 91 + i, style: i % 2 ? 'slate' : 'tile' }), roughness: 0.82 })
  );
  M.thatch = std({ map: thatchTexture('#b99a5c'), roughness: 0.95 });

  M.timber = std({ map: woodTexture({ base: '#6f4d2e', dark: '#3f2a16', planks: 1, seed: 37 }), roughness: 0.8 });
  M.trim = std({ color: 0xf2ece0, roughness: 0.6 });
  M.trimDark = std({ color: 0x4a3a2c, roughness: 0.65 });

  M.glassDark = std({ color: 0x2b3a44, roughness: 0.18, metalness: 0.5, envMapIntensity: 1.2 });
  M.glassWarm = std({
    color: 0x3a3020,
    emissive: new THREE.Color(0xffb457),
    emissiveIntensity: 0,
    roughness: 0.3,
    metalness: 0.1,
  });
  M.lampGlass = std({
    color: 0x50462f,
    emissive: new THREE.Color(0xffc06a),
    emissiveIntensity: 0,
    roughness: 0.25,
    transparent: true,
    opacity: 0.92,
  });
  M.lampGlow = std({
    color: 0x3a352c,
    emissive: new THREE.Color(0xffd79a),
    emissiveIntensity: 0,
    roughness: 0.4,
  });

  M.foliage = COLORS.foliage.map(
    (c, i) => std({ color: c, roughness: 0.92, flatShading: true, emissive: new THREE.Color(c), emissiveIntensity: 0 })
  );
  M.conifer = COLORS.conifer.map((c) => std({ color: c, roughness: 0.92, flatShading: true }));
  M.trunk = std({ color: 0x5b4433, roughness: 0.95, flatShading: true });
  M.hedge = std({ color: 0x3f6531, roughness: 0.95, flatShading: true });
  M.crop = std({ color: 0xc0a34e, roughness: 0.95 });
  M.cropGreen = std({ color: 0x7d9b48, roughness: 0.95 });

  M.water = std({
    map: waterTexture(),
    bumpMap: waterBumpTexture(),
    bumpScale: 0.22,
    color: 0xffffff,
    roughness: 0.16,
    metalness: 0.2,
    transparent: true,
    opacity: 0.9,
    envMapIntensity: 1.1,
  });
  M.water.map.repeat.set(1, 1);

  M.table = std({ map: tableTexture(), roughness: 0.9 });
  M.glowSprite = new THREE.SpriteMaterial({
    map: glowTexture(),
    color: 0xffce8a,
    transparent: true,
    opacity: 0,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  M.carriages = [
    std({ color: 0x7d3b32, roughness: 0.5, metalness: 0.15 }),
    std({ color: 0x2f4a5c, roughness: 0.5, metalness: 0.15 }),
  ];
  M.locoBody = std({ color: 0x27452f, roughness: 0.45, metalness: 0.3 });
  M.locoBlack = std({ color: 0x24262a, roughness: 0.5, metalness: 0.4 });
  M.trainTrim = std({ color: 0xc9a34a, roughness: 0.35, metalness: 0.85 });

  return M;
}
