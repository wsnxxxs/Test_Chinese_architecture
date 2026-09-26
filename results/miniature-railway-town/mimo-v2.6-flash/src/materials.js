/**
 * 材质工厂：集中管理贴图与共享材质，并登记夜景自发光。
 * 建筑外墙/屋面按栋生成（带轻微色差），其余为共享材质。
 */
import * as THREE from 'three';
import {
  woodTexture,
  grassTexture,
  gravelTexture,
  asphaltTexture,
  waterTexture,
  plasterTexture,
  tileTexture,
  fieldTexture,
  glowSpriteTexture,
  flowerTexture,
} from './lib/textures.js';
import { registerEmissive } from './glow.js';

export function makeMaterials() {
  const tex = {
    wood: woodTexture({ base: '#c08b52', dark: '#8e5f30', light: '#d8a668', seed: 5 }),
    woodDark: woodTexture({ base: '#8a5f37', dark: '#5f3d20', light: '#a87b4c', seed: 9 }),
    woodDesk: woodTexture({ base: '#8f6a48', dark: '#6a4a30', light: '#a8804f', seed: 17 }),
    grass: grassTexture({ seed: 11 }),
    gravel: gravelTexture({ seed: 21 }),
    asphalt: asphaltTexture({ seed: 33 }),
    water: waterTexture({ seed: 44 }),
    plaster: plasterTexture({ seed: 61 }),
    tileRed: tileTexture({ base: '#a4523f', seed: 77 }),
    tileSlate: tileTexture({ base: '#5f6b74', seed: 78 }),
    field: fieldTexture({ crop: '#cbb25a', seed: 91 }),
    glow: glowSpriteTexture(),
    flower: flowerTexture({ seed: 123 }),
  };

  const m = {
    desk: new THREE.MeshStandardMaterial({ map: tex.woodDesk, color: '#e8d0b8', roughness: 0.9, metalness: 0 }),
    wood: new THREE.MeshStandardMaterial({ map: tex.wood, color: '#ffffff', roughness: 0.78, metalness: 0 }),
    woodFrame: new THREE.MeshStandardMaterial({ map: tex.woodDark, color: '#ffffff', roughness: 0.72, metalness: 0 }),
    grass: new THREE.MeshStandardMaterial({ map: tex.grass, color: '#ffffff', roughness: 0.96, metalness: 0 }),
    dirt: new THREE.MeshStandardMaterial({ color: '#8a6a48', roughness: 1, metalness: 0 }),
    riverbed: new THREE.MeshStandardMaterial({ color: '#7a6a52', roughness: 1, metalness: 0 }),
    water: new THREE.MeshStandardMaterial({
      map: tex.water,
      color: '#5fa6c8',
      roughness: 0.14,
      metalness: 0.06,
      transparent: true,
      opacity: 0.86,
    }),
    gravel: new THREE.MeshStandardMaterial({ map: tex.gravel, color: '#ffffff', roughness: 0.98, metalness: 0 }),
    gravelDark: new THREE.MeshStandardMaterial({ map: tex.gravel, color: '#9c968a', roughness: 1, metalness: 0 }),
    asphalt: new THREE.MeshStandardMaterial({ map: tex.asphalt, color: '#ffffff', roughness: 0.95, metalness: 0 }),
    rail: new THREE.MeshStandardMaterial({ color: '#b9bec7', roughness: 0.34, metalness: 0.85 }),
    sleeper: new THREE.MeshStandardMaterial({ color: '#5b4634', roughness: 0.9, metalness: 0 }),
    bridgeSteel: new THREE.MeshStandardMaterial({ color: '#3e4a56', roughness: 0.55, metalness: 0.55 }),
    stone: new THREE.MeshStandardMaterial({ color: '#9a958c', roughness: 0.95, metalness: 0 }),
    whitePaint: new THREE.MeshStandardMaterial({ color: '#f2efe6', roughness: 0.7, metalness: 0 }),
    yellowPaint: new THREE.MeshStandardMaterial({ color: '#e8c34a', roughness: 0.7, metalness: 0 }),
    redPaint: new THREE.MeshStandardMaterial({ color: '#c0402f', roughness: 0.7, metalness: 0 }),
    platform: new THREE.MeshStandardMaterial({ map: tex.gravel, color: '#cfcabf', roughness: 0.92, metalness: 0 }),
    trim: new THREE.MeshStandardMaterial({ color: '#f6f1e4', roughness: 0.75, metalness: 0 }),
    door: new THREE.MeshStandardMaterial({ color: '#6a4a30', roughness: 0.8, metalness: 0 }),
    glass: new THREE.MeshStandardMaterial({
      color: '#2f3d4a',
      roughness: 0.16,
      metalness: 0.25,
      emissive: new THREE.Color('#ffb44d'),
      emissiveIntensity: 0,
    }),
    bulb: new THREE.MeshStandardMaterial({
      color: '#f4e9cf',
      roughness: 0.4,
      emissive: new THREE.Color('#ffd79a'),
      emissiveIntensity: 0,
    }),
    lampPole: new THREE.MeshStandardMaterial({ color: '#33383d', roughness: 0.5, metalness: 0.7 }),
    trunk: new THREE.MeshStandardMaterial({ color: '#6a4d33', roughness: 0.95, metalness: 0 }),
    leafA: new THREE.MeshStandardMaterial({ color: '#4f7a3e', roughness: 0.9, flatShading: true, metalness: 0 }),
    leafB: new THREE.MeshStandardMaterial({ color: '#5f8a45', roughness: 0.9, flatShading: true, metalness: 0 }),
    leafC: new THREE.MeshStandardMaterial({ color: '#6f9a4d', roughness: 0.9, flatShading: true, metalness: 0 }),
    bush: new THREE.MeshStandardMaterial({ color: '#557f42', roughness: 0.95, flatShading: true, metalness: 0 }),
    rock: new THREE.MeshStandardMaterial({ color: '#8e8a82', roughness: 1, flatShading: true, metalness: 0 }),
    field: new THREE.MeshStandardMaterial({ map: tex.field, color: '#ffffff', roughness: 1, metalness: 0 }),
    flower: new THREE.MeshStandardMaterial({
      map: tex.flower,
      transparent: true,
      alphaTest: 0.35,
      roughness: 1,
      metalness: 0,
    }),
  };

  // 贴图平铺
  tex.grass.repeat.set(7, 5);
  tex.grass.wrapS = tex.grass.wrapT = THREE.RepeatWrapping;
  tex.gravel.repeat.set(3, 3);
  tex.asphalt.repeat.set(2, 1);
  tex.wood.repeat.set(3, 2);
  tex.woodDark.repeat.set(6, 1);
  tex.woodDesk.repeat.set(24, 18);
  tex.water.repeat.set(2, 6);
  tex.plaster.repeat.set(2, 2);

  // 夜景自发光登记（max = 夜间强度）
  registerEmissive(m.glass, 1.35);
  registerEmissive(m.bulb, 1.8);

  /** 建筑外墙：灰泥贴图 + 每栋轻微色差 */
  function wallMaterial(color, jitter = 0) {
    const c = new THREE.Color(color);
    if (jitter) {
      const hsl = {};
      c.getHSL(hsl);
      c.setHSL(hsl.h + (Math.random() - 0.5) * 0.02, THREE.MathUtils.clamp(hsl.s * (1 + jitter), 0, 1), THREE.MathUtils.clamp(hsl.l * (1 + (Math.random() - 0.5) * jitter), 0, 1));
    }
    return new THREE.MeshStandardMaterial({ map: tex.plaster, color: c, roughness: 0.9, metalness: 0 });
  }

  function roofMaterial(color, slate = false) {
    const texClone = (slate ? tex.tileSlate : tex.tileRed).clone();
    texClone.needsUpdate = true;
    texClone.wrapS = texClone.wrapT = THREE.RepeatWrapping;
    texClone.repeat.set(3, 2);
    return new THREE.MeshStandardMaterial({ map: texClone, color, roughness: 0.85, metalness: 0 });
  }

  function fieldMaterial(crop) {
    const t = tex.field.clone();
    t.needsUpdate = true;
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.repeat.set(2, 2);
    return new THREE.MeshStandardMaterial({ map: t, color: '#ffffff', roughness: 1, metalness: 0 });
  }

  return { tex, m, wallMaterial, roofMaterial, fieldMaterial };
}
