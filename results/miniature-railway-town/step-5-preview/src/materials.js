/**
 * Shared materials. A tiny theme registry drives the day/night transition for
 * anything that emits light (windows, lanterns, signs, station canopy lamps).
 */
import * as THREE from 'three';
import {
  makeGrassTexture, makeWoodTexture, makeRoadTexture, makeFootpathTexture,
  makeBallastTexture, makeRoofTileTexture, makeWaterTexture, makeWindowTile,
  makeWindowGlowTile,
} from './textures.js';

export class Theme {
  constructor() {
    this.targets = [];
    this.t = 0; // 0 = day, 1 = night
  }
  /** Register an emissive material that fades in at night. */
  add(material, day = 0x1a1a1a, night = 0xffb45c, dayIntensity = 1, nightIntensity = 1.15) {
    const target = {
      material,
      day: new THREE.Color(day),
      night: new THREE.Color(night),
      dayIntensity,
      nightIntensity,
    };
    this.targets.push(target);
    material.emissive.copy(target.day);
    material.emissiveIntensity = target.dayIntensity;
    return target;
  }
  /** Register a point/spot light that fades in at night. */
  addLight(light, day = 0, night = 1.2) {
    this.targets.push({ light, day, night });
    light.intensity = day;
  }
  set(t) {
    this.t = t;
    for (const tg of this.targets) {
      if (tg.light) {
        tg.light.intensity = THREE.MathUtils.lerp(tg.day, tg.night, t);
      } else {
        tg.material.emissive.copy(tg.day).lerp(tg.night, t);
        tg.material.emissiveIntensity = THREE.MathUtils.lerp(tg.dayIntensity, tg.nightIntensity, t);
      }
    }
  }
}

export function createMaterials() {
  const theme = new Theme();

  const grass = makeGrassTexture();
  const road = makeRoadTexture();
  const footpath = makeFootpathTexture();
  const ballast = makeBallastTexture();
  const water = makeWaterTexture();
  const windowTile = makeWindowTile();
  const windowGlow = makeWindowGlowTile();

  const M = {
    theme,
    grass: new THREE.MeshStandardMaterial({ map: grass, roughness: 0.97, metalness: 0 }),
    soil: new THREE.MeshStandardMaterial({ color: 0x59452f, roughness: 1 }),
    frame: new THREE.MeshStandardMaterial({
      map: makeWoodTexture('#8a5f38', 'rgba(52,30,14,0.55)', { width: 512, height: 512, rings: 34 }),
      color: 0xc7ad86,
      roughness: 0.78,
    }),
    frameDark: new THREE.MeshStandardMaterial({
      map: makeWoodTexture('#4c3521', 'rgba(0,0,0,0.5)', { width: 512, height: 512, rings: 30 }),
      roughness: 0.8,
    }),
    base: new THREE.MeshStandardMaterial({
      map: makeWoodTexture('#5b3d24', 'rgba(0,0,0,0.55)', { width: 512, height: 512, rings: 40 }),
      color: 0x9c7a55,
      roughness: 0.85,
    }),
    road: new THREE.MeshStandardMaterial({ map: road, color: 0xb9b3aa, roughness: 0.92 }),
    roadLine: new THREE.MeshStandardMaterial({ color: 0xe8dfc8, roughness: 0.8 }),
    path: new THREE.MeshStandardMaterial({ map: footpath, color: 0xd9c9a6, roughness: 1 }),
    ballast: new THREE.MeshStandardMaterial({ map: ballast, color: 0xb6ab9d, roughness: 1 }),
    sleeper: new THREE.MeshStandardMaterial({
      map: makeWoodTexture('#4a3524', 'rgba(0,0,0,0.5)', { width: 256, height: 256, rings: 18 }),
      roughness: 0.95,
    }),
    rail: new THREE.MeshStandardMaterial({ color: 0xa8adb4, metalness: 0.9, roughness: 0.32 }),
    railRust: new THREE.MeshStandardMaterial({ color: 0x7d6a58, metalness: 0.5, roughness: 0.7 }),
    bridgeWood: new THREE.MeshStandardMaterial({
      map: makeWoodTexture('#6b4a2c', 'rgba(0,0,0,0.5)', { width: 256, height: 256, rings: 20 }),
      color: 0xa8875c,
      roughness: 0.85,
    }),
    stone: new THREE.MeshStandardMaterial({ color: 0x8f887c, roughness: 0.95 }),
    stoneDark: new THREE.MeshStandardMaterial({ color: 0x6d675f, roughness: 0.98 }),
    concrete: new THREE.MeshStandardMaterial({ color: 0xbdb6a8, roughness: 0.9 }),
    platform: new THREE.MeshStandardMaterial({ color: 0xcfc7b2, roughness: 0.92 }),
    water: new THREE.MeshStandardMaterial({
      map: water,
      color: 0x527f9c,
      transparent: true,
      opacity: 0.82,
      roughness: 0.12,
      metalness: 0.1,
    }),
    riverBed: new THREE.MeshStandardMaterial({ color: 0x39505a, roughness: 1 }),
    foam: new THREE.MeshStandardMaterial({ color: 0xdcd8c6, roughness: 0.85 }),
    leaf: new THREE.MeshStandardMaterial({ color: 0x5f8a3f, roughness: 0.9, flatShading: true }),
    leafDark: new THREE.MeshStandardMaterial({ color: 0x3f6b32, roughness: 0.92, flatShading: true }),
    leafAutumn: new THREE.MeshStandardMaterial({ color: 0x9d7a2e, roughness: 0.92, flatShading: true }),
    trunk: new THREE.MeshStandardMaterial({ color: 0x6b4b30, roughness: 0.95 }),
    metalDark: new THREE.MeshStandardMaterial({ color: 0x2f3339, metalness: 0.55, roughness: 0.5 }),
    brass: new THREE.MeshStandardMaterial({ color: 0xb08a3e, metalness: 0.85, roughness: 0.3 }),
    glass: new THREE.MeshStandardMaterial({ color: 0x2b3542, roughness: 0.15, metalness: 0.3 }),
    roofSlate: new THREE.MeshStandardMaterial({
      map: makeRoofTileTexture('#4c5766', '#3a4450'), roughness: 0.8,
    }),
    roofTile: new THREE.MeshStandardMaterial({
      map: makeRoofTileTexture('#a5502f', '#873d22'), roughness: 0.85,
    }),
    roofGreen: new THREE.MeshStandardMaterial({
      map: makeRoofTileTexture('#3f5a46', '#31473a'), roughness: 0.82,
    }),
    roofTin: new THREE.MeshStandardMaterial({ color: 0x8e9aa2, metalness: 0.7, roughness: 0.4 }),
    hedge: new THREE.MeshStandardMaterial({ color: 0x4b7a38, roughness: 1, flatShading: true }),
    lampGlass: new THREE.MeshStandardMaterial({ color: 0xf3ead2, roughness: 0.4, emissive: 0xffcf8a }),
    lampPost: new THREE.MeshStandardMaterial({ color: 0x30343a, metalness: 0.6, roughness: 0.45 }),
  };
  M.roofSlate.map.repeat.set(1.5, 1.5);
  M.roofTile.map.repeat.set(1.5, 1.5);
  M.roofGreen.map.repeat.set(1.5, 1.5);

  // Window tiles: one window every 1.6 world units on every face.
  M.windowTile = windowTile;
  M.windowGlow = windowGlow;
  M.facade = (color, options = {}) => {
    const mat = new THREE.MeshStandardMaterial({
      map: windowTile,
      emissiveMap: windowGlow,
      color: new THREE.Color(color),
      roughness: options.roughness ?? 0.86,
      metalness: 0,
    });
    mat.userData.roofTint = options.roofTint ?? null;
    theme.add(mat, 0x14161c, 0xffb45c, 1, 1.25);
    return mat;
  };
  M.facadeUV = 1.6;

  theme.add(M.lampGlass, 0x3a3526, 0xffdca0, 1, 2.6);
  return M;
}
