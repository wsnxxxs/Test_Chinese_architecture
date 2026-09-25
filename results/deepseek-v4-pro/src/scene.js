import * as THREE from 'three';
import { C } from './palette.js';

// 黄昏渐变天空（贴图映射到球体内侧）
export function makeSky() {
  const c = document.createElement('canvas');
  c.width = 2;
  c.height = 512;
  const ctx = c.getContext('2d');
  const g = ctx.createLinearGradient(0, 0, 0, 512);
  g.addColorStop(0.0, '#131a33'); // 天顶深蓝
  g.addColorStop(0.45, '#2c3358');
  g.addColorStop(0.72, '#57455f');
  g.addColorStop(0.88, '#8a5a5e'); // 玫瑰
  g.addColorStop(1.0, '#c47a55'); // 地平线暖橙
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 2, 512);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

export function createLights(scene) {
  const sun = new THREE.DirectionalLight(0xffc284, 3.2);
  sun.position.set(-38, 66, 22);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.camera.left = -70;
  sun.shadow.camera.right = 70;
  sun.shadow.camera.top = 70;
  sun.shadow.camera.bottom = -70;
  sun.shadow.camera.near = 1;
  sun.shadow.camera.far = 220;
  sun.shadow.bias = -0.0004;
  sun.shadow.normalBias = 0.03;
  scene.add(sun);
  scene.add(new THREE.HemisphereLight(0x6a7aa8, 0x33281c, 1.25));
  // 主殿前暖光
  const warm = new THREE.PointLight(0xff9a4d, 30, 60, 1.6);
  warm.position.set(0, 9, 9);
  scene.add(warm);
  return { sun };
}

// 石板区域判定（广场 / 甬道 / 后院）
function isStone(x, z) {
  const ax = Math.abs(x);
  if (z >= 6 && z <= 32 && ax <= 16) return true; // 前院广场
  if (z > 32 && z <= 42 && ax <= 4) return true; // 山门前甬道
  if (z >= -6 && z <= 2 && ax <= 28) return true; // 后院广场
  if (z >= -34 && z < -6 && ax <= 4) return true; // 后甬道
  if (z >= -31 && z <= -27 && ax <= 24) return true; // 后横向连接
  return false;
}

export function buildGround(world) {
  const half = 72;
  for (let x = -half; x <= half; x++) {
    for (let z = -half; z <= half; z++) {
      if (isStone(x, z)) world.add(x, 0, z, C.path, { variation: 0.1 });
      else world.add(x, 0, z, C.grass, { variation: 0.16 });
    }
  }
}

// 围墙
export function buildPerimeterWall(world) {
  const bx = 46, bz = 40, h = 3;
  const gap = (x) => Math.abs(x) <= 8;
  for (let y = 0; y < h; y++) {
    for (let x = -bx; x <= bx; x++) {
      if (!gap(x)) world.add(x, y + 1, bz, C.wallDark);
      world.add(x, y + 1, -bz, C.wallDark);
    }
    for (let z = -bz + 1; z <= bz - 1; z++) {
      world.add(-bx, y + 1, z, C.wallDark);
      world.add(bx, y + 1, z, C.wallDark);
    }
  }
  for (let x = -bx; x <= bx; x++) {
    if (!gap(x)) world.add(x, h + 1, bz, C.roofGray);
    world.add(x, h + 1, -bz, C.roofGray);
  }
  for (let z = -bz + 1; z <= bz - 1; z++) {
    world.add(-bx, h + 1, z, C.roofGray);
    world.add(bx, h + 1, z, C.roofGray);
  }
}

// 石狮 / 石灯 / 灯笼
export function addDecor(world) {
  const lion = (x, z) => {
    world.add(x, 1, z, C.stoneDark);
    world.add(x, 2, z, C.stoneDark);
    world.add(x, 3, z, C.stoneLight);
    world.add(x, 4, z, C.stoneLight);
  };
  const lantern = (x, z) => {
    world.add(x, 1, z, C.stoneDark);
    world.add(x, 2, z, C.lantern, { emissive: true });
    world.add(x, 3, z, C.lanternCore, { emissive: true });
    world.add(x, 4, z, C.lantern, { emissive: true });
  };
  // 主殿前
  lion(-4, 9);
  lion(4, 9);
  lantern(-7, 7);
  lantern(7, 7);
  // 山门前
  lantern(-10, 43);
  lantern(10, 43);
  // 甬道石灯
  lantern(-5, 20);
  lantern(5, 20);
  lantern(-5, 28);
  lantern(5, 28);
}
