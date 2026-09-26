// 共享材质库：所有建筑/道具从这里取材质，昼夜切换时统一调整发光材质
import * as THREE from 'three';
import * as TX from './textures.js';

export const plaster = TX.plasterTextures();
export const roofTex = TX.roofTextures();
export const brickTex = TX.brickTextures();
export const gravelTex = TX.gravelTextures();
export const woodFrameTex = TX.woodTextures('#80603f', 3);
export const woodPlankTex = TX.woodTextures('#a8794a', 9);

const cache = new Map();
function cached(key, make) {
  if (!cache.has(key)) cache.set(key, make());
  return cache.get(key);
}

export const wall = (color) => cached('wall' + color, () => new THREE.MeshStandardMaterial({
  color, map: plaster.map, bumpMap: plaster.bump, bumpScale: 1.2, roughness: 0.92, metalness: 0,
}));
export const roof = (color) => cached('roof' + color, () => new THREE.MeshStandardMaterial({
  color, map: roofTex.map, bumpMap: roofTex.bump, bumpScale: 2.2, roughness: 0.8, metalness: 0.02, side: THREE.DoubleSide,
}));
export const brick = (color = 0xffffff) => cached('brick' + color, () => new THREE.MeshStandardMaterial({
  color, map: brickTex.map, bumpMap: brickTex.bump, bumpScale: 2, roughness: 0.9,
}));
export const wood = (color = 0xffffff) => cached('wood' + color, () => new THREE.MeshStandardMaterial({
  color, map: woodPlankTex.map, bumpMap: woodPlankTex.bump, bumpScale: 0.8, roughness: 0.75,
}));
export const paint = (color, rough = 0.7, metal = 0) => cached(`paint${color}_${rough}_${metal}`, () => new THREE.MeshStandardMaterial({
  color, roughness: rough, metalness: metal,
}));
export const metal = (color = 0x8a8f96, rough = 0.4) => cached(`metal${color}_${rough}`, () => new THREE.MeshStandardMaterial({
  color, roughness: rough, metalness: 0.85,
}));
export const stone = (color = 0xb9b2a4) => cached('stone' + color, () => new THREE.MeshStandardMaterial({
  color, map: brickTex.map, bumpMap: brickTex.bump, bumpScale: 1.5, roughness: 0.95,
}));

/* 会随昼夜变化的发光材质（由 lighting.js 驱动） */
export const glow = {
  windowLit: new THREE.MeshStandardMaterial({
    color: 0x6f8296, emissive: 0xffb347, emissiveIntensity: 0.1, roughness: 0.25, metalness: 0.1,
  }),
  windowDark: new THREE.MeshStandardMaterial({
    color: 0x33485c, roughness: 0.15, metalness: 0.5, emissive: 0x0b1420, emissiveIntensity: 0.4,
  }),
  windowFrame: new THREE.MeshStandardMaterial({ color: 0xf1ebe0, roughness: 0.8 }),
  lamp: new THREE.MeshStandardMaterial({
    color: 0xfff1c9, emissive: 0xffc46a, emissiveIntensity: 0.15, roughness: 0.3,
  }),
  trainWindow: new THREE.MeshStandardMaterial({
    color: 0x3d4f63, emissive: 0xffbf5a, emissiveIntensity: 0.1, roughness: 0.25,
  }),
  headlamp: new THREE.MeshStandardMaterial({
    color: 0xfff6d8, emissive: 0xfff0b0, emissiveIntensity: 0.2, roughness: 0.2,
  }),
  stationSign: null,
};
