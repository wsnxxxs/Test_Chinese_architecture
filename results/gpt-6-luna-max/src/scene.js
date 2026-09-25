import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

const COLORS = {
  earth: 0x78845a,
  grass: [0x829164, 0x89976a, 0x738254, 0x909c70],
  stone: [0xc3b69b, 0xb8aa8e, 0xd0c1a4, 0xa99b80],
  foundation: 0x9e917a,
  red: 0x9f3d32,
  redLight: 0xb64e3b,
  redDark: 0x6e2c27,
  wood: 0x684332,
  woodLight: 0x966343,
  gold: 0xd2a452,
  roof: [0x285764, 0x346d76, 0x28535f, 0x3d747a],
  roofShadow: 0x233f48,
  jade: 0x4d8580,
  glass: 0xa8c9ac,
  paper: 0xe8d5a7,
  lantern: 0xffba63,
};

const mat = (color, extra = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.84, ...extra });
const materials = {
  stone: COLORS.stone.map((c) => mat(c)),
  grass: COLORS.grass.map((c) => mat(c)),
  foundation: mat(COLORS.foundation),
  red: mat(COLORS.red),
  redLight: mat(COLORS.redLight),
  redDark: mat(COLORS.redDark),
  wood: mat(COLORS.wood),
  woodLight: mat(COLORS.woodLight),
  gold: mat(COLORS.gold, { metalness: 0.34, roughness: 0.58 }),
  roof: COLORS.roof.map((c) => mat(c, { roughness: 0.75 })),
  roofShadow: mat(COLORS.roofShadow),
  jade: mat(COLORS.jade),
  glass: mat(COLORS.glass, { roughness: 0.32, metalness: 0.05 }),
  paper: mat(COLORS.paper, { emissive: 0xc87c32, emissiveIntensity: 0.16 }),
  lantern: mat(COLORS.lantern, { emissive: 0xff922e, emissiveIntensity: 1.35 }),
  dark: mat(0x372b26),
  bark: mat(0x63452e),
  pine: [0x385948, 0x466b50, 0x557557].map((c) => mat(c)),
  blossom: [0xd58b8a, 0xe1a1a0, 0xc97f82].map((c) => mat(c)),
};

function box(parent, size, position, material, options = {}) {
  const geometry = new THREE.BoxGeometry(...size);
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.set(...position);
  if (options.rotation) mesh.rotation.set(...options.rotation);
  mesh.castShadow = options.castShadow ?? true;
  mesh.receiveShadow = options.receiveShadow ?? true;
  parent.add(mesh);
  return mesh;
}

function mergeStaticBoxes(scene) {
  scene.updateMatrixWorld(true);
  const batches = new Map();
  const originals = [];
  scene.traverse((object) => {
    if (!object.isMesh || object.isInstancedMesh || object.geometry.type !== 'BoxGeometry' || Array.isArray(object.material)) return;
    const material = object.material;
    if (!batches.has(material)) batches.set(material, { geometries: [], castShadow: false, receiveShadow: false });
    const batch = batches.get(material);
    const geometry = object.geometry.clone();
    geometry.applyMatrix4(object.matrixWorld);
    batch.geometries.push(geometry);
    batch.castShadow ||= object.castShadow;
    batch.receiveShadow ||= object.receiveShadow;
    originals.push(object);
  });
  originals.forEach((object) => {
    object.parent.remove(object);
    object.geometry.dispose();
  });
  for (const [material, batch] of batches) {
    const geometry = mergeGeometries(batch.geometries, false);
    batch.geometries.forEach((part) => part.dispose());
    if (!geometry) continue;
    geometry.computeBoundingBox();
    geometry.computeBoundingSphere();
    const mesh = new THREE.Mesh(geometry, material);
    mesh.castShadow = batch.castShadow;
    mesh.receiveShadow = batch.receiveShadow;
    scene.add(mesh);
  }
}

function seededRandom(seed = 2972) {
  return () => {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function makeInstancedScatter(scene, { count, geometry, palette, makeTransform, seed, castShadow = false }) {
  const random = seededRandom(seed);
  const meshes = palette.map((material) => new THREE.InstancedMesh(geometry, material, count));
  meshes.forEach((mesh) => {
    mesh.count = 0;
    mesh.castShadow = castShadow;
    mesh.receiveShadow = true;
    scene.add(mesh);
  });
  const dummy = new THREE.Object3D();
  for (let i = 0; i < count; i += 1) {
    const record = makeTransform(random, i);
    if (!record) continue;
    const target = meshes[record.palette ?? Math.floor(random() * meshes.length)];
    dummy.position.set(...record.position);
    dummy.rotation.set(...(record.rotation ?? [0, 0, 0]));
    dummy.scale.set(...(record.scale ?? [1, 1, 1]));
    dummy.updateMatrix();
    target.setMatrixAt(target.count, dummy.matrix);
    target.count += 1;
  }
  meshes.forEach((mesh) => {
    mesh.instanceMatrix.needsUpdate = true;
    mesh.computeBoundingSphere();
  });
}

function makePaving(scene) {
  const rand = seededRandom(18472);
  const areas = [
    { x: 0, z: 1, width: 39, depth: 35 },
    { x: 0, z: 27, width: 7.6, depth: 19 },
    { x: 0, z: -24, width: 6.5, depth: 12 },
    { x: -13.3, z: 5, width: 8.5, depth: 12 },
    { x: 13.3, z: 5, width: 8.5, depth: 12 },
  ];
  const geometry = new THREE.BoxGeometry(1.02, 0.16, 0.82);
  const meshes = materials.stone.map((material) => {
    const instance = new THREE.InstancedMesh(material ? geometry : geometry, material, 2400);
    instance.count = 0;
    instance.receiveShadow = true;
    instance.castShadow = false;
    scene.add(instance);
    return instance;
  });
  const dummy = new THREE.Object3D();
  for (const area of areas) {
    const columns = Math.floor(area.width / 1.05);
    const rows = Math.floor(area.depth / 0.86);
    for (let xIndex = 0; xIndex < columns; xIndex += 1) {
      for (let zIndex = 0; zIndex < rows; zIndex += 1) {
        const x = area.x - area.width / 2 + 0.55 + xIndex * 1.05 + (rand() - 0.5) * 0.08;
        const z = area.z - area.depth / 2 + 0.45 + zIndex * 0.86 + (rand() - 0.5) * 0.07;
        const mesh = meshes[Math.floor(rand() * meshes.length)];
        dummy.position.set(x, 0.08, z);
        dummy.rotation.set(0, (rand() - 0.5) * 0.035, 0);
        dummy.scale.set(0.92 + rand() * 0.11, 0.6 + rand() * 0.3, 0.92 + rand() * 0.1);
        dummy.updateMatrix();
        mesh.setMatrixAt(mesh.count, dummy.matrix);
        mesh.count += 1;
      }
    }
  }
  meshes.forEach((mesh) => {
    mesh.instanceMatrix.needsUpdate = true;
    mesh.computeBoundingSphere();
  });
}

function makeMeadow(scene) {
  makeInstancedScatter(scene, {
    count: 1800,
    geometry: new THREE.BoxGeometry(1, 0.17, 1),
    palette: materials.grass,
    seed: 91,
    makeTransform(random) {
      const x = (random() - 0.5) * 59;
      const z = (random() - 0.5) * 71;
      if (Math.abs(x) < 21 && z > -19 && z < 31) return null;
      const size = 0.42 + random() * 0.86;
      return { position: [x, 0.025, z], scale: [size, 0.55 + random() * 0.5, size], rotation: [0, random() * 0.2, 0] };
    },
  });
}

function buildRoof(group, width, depth, baseY, { tiers = 6, rise = 0.42, colorOffset = 0 } = {}) {
  const layerStep = rise / Math.max(1, tiers - 1);
  for (let i = 0; i < tiers; i += 1) {
    const t = i / (tiers - 1);
    const layerWidth = width + 1.8 - t * Math.min(width * 0.54, 8.2);
    const layerDepth = depth + 1.8 - t * Math.min(depth * 0.56, 6.1);
    const layerHeight = i === 0 ? 0.34 : 0.3;
    box(group, [layerWidth, layerHeight, layerDepth], [0, baseY + i * layerStep, 0], materials.roof[(i + colorOffset) % materials.roof.length]);
    if (i === 0) {
      box(group, [layerWidth + 0.12, 0.15, 0.25], [0, baseY + 0.07, layerDepth / 2 - 0.08], materials.roofShadow);
      box(group, [layerWidth + 0.12, 0.15, 0.25], [0, baseY + 0.07, -layerDepth / 2 + 0.08], materials.roofShadow);
    }
  }
  const topY = baseY + rise + 0.17;
  const ridgeWidth = Math.max(2.2, width - 5.3);
  box(group, [ridgeWidth, 0.34, 0.54], [0, topY, 0], materials.roofShadow);
  box(group, [ridgeWidth - 0.3, 0.24, 0.34], [0, topY + 0.22, 0], materials.gold);
  for (const xSign of [-1, 1]) {
    for (const zSign of [-1, 1]) {
      const reach = new THREE.Vector3(xSign * 0.88, 0.62, zSign * 0.78);
      const tip = new THREE.Vector3(xSign * (width / 2 + 0.45), baseY + 0.53, zSign * (depth / 2 + 0.43));
      const start = tip.clone().sub(reach);
      const direction = tip.clone().sub(start).normalize();
      const finial = box(group, [0.5, 0.36, reach.length() + 0.1], start.clone().add(tip).multiplyScalar(0.5).toArray(), materials.roof[1]);
      finial.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), direction);
      const jewel = box(group, [0.42, 0.4, 0.5], tip.toArray(), materials.gold);
      jewel.rotation.y = (xSign * zSign) * Math.PI / 4;
    }
  }
  for (let i = -2; i <= 2; i += 1) {
    box(group, [0.35, 0.26, 0.38], [i * 0.48, topY + 0.3, 0], materials.gold);
  }
}

function buildStairs(group, width, frontZ, steps = 5) {
  for (let i = 0; i < steps; i += 1) {
    const y = 0.13 + i * 0.16;
    const z = frontZ + 1.0 + (steps - 1 - i) * 0.48;
    box(group, [width + 0.4 - i * 0.22, 0.24, 1.08], [0, y, z], materials.stone[(i + 1) % materials.stone.length]);
  }
}

function buildHall({ name, x, z, width, depth, columnHeight, roofOffset = 0, stairs = true, secondary = false }) {
  const group = new THREE.Group();
  group.name = name;
  group.position.set(x, 0, z);
  const platformHeight = secondary ? 0.62 : 0.84;
  box(group, [width + 1.55, 0.3, depth + 1.45], [0, 0.12, 0], materials.foundation);
  box(group, [width + 0.85, 0.34, depth + 0.82], [0, 0.42, 0], materials.stone[1]);
  box(group, [width, 0.22, depth], [0, platformHeight - 0.11, 0], materials.redDark);
  box(group, [width + 0.12, 0.13, depth + 0.12], [0, platformHeight + 0.02, 0], materials.stone[2]);

  const wallHeight = columnHeight - 0.45;
  const wallY = platformHeight + 0.18 + wallHeight / 2;
  box(group, [width - 0.66, wallHeight, 0.38], [0, wallY, -depth / 2 + 0.18], materials.redDark);
  box(group, [0.38, wallHeight, depth - 0.72], [-width / 2 + 0.19, wallY, 0], materials.red);
  box(group, [0.38, wallHeight, depth - 0.72], [width / 2 - 0.19, wallY, 0], materials.red);
  box(group, [width - 0.68, wallHeight, 0.4], [0, wallY, depth / 2 - 0.19], materials.red);

  const frontZ = depth / 2 + 0.03;
  const pillarCount = width > 10 ? 7 : 5;
  const pillarInset = width * 0.43;
  for (let i = 0; i < pillarCount; i += 1) {
    const px = -pillarInset + (pillarInset * 2 * i) / (pillarCount - 1);
    for (const pz of [-depth / 2 + 0.1, depth / 2 - 0.08]) {
      box(group, [0.43, columnHeight, 0.43], [px, platformHeight + columnHeight / 2, pz], materials.redLight);
      box(group, [0.64, 0.2, 0.64], [px, platformHeight + 0.16, pz], materials.redDark);
      box(group, [0.62, 0.16, 0.62], [px, platformHeight + columnHeight - 0.02, pz], materials.woodLight);
      const bracketY = platformHeight + columnHeight + 0.19;
      box(group, [0.94, 0.18, 0.28], [px, bracketY, pz], materials.woodLight);
      box(group, [0.3, 0.18, 0.9], [px, bracketY + 0.16, pz], materials.wood);
      box(group, [0.62, 0.18, 0.58], [px, bracketY + 0.31, pz], materials.woodLight);
    }
  }
  for (const px of [-width / 2 + 0.2, width / 2 - 0.2]) {
    for (const pz of [-depth / 4, 0, depth / 4]) {
      box(group, [0.42, columnHeight, 0.42], [px, platformHeight + columnHeight / 2, pz], materials.redLight);
      box(group, [0.75, 0.17, 0.72], [px, platformHeight + columnHeight + 0.16, pz], materials.woodLight);
    }
  }

  const beamY = platformHeight + columnHeight + 0.45;
  box(group, [width + 0.8, 0.52, 0.6], [0, beamY, frontZ - 0.08], materials.redDark);
  box(group, [width + 0.65, 0.5, 0.55], [0, beamY, -depth / 2 + 0.04], materials.redDark);
  box(group, [0.58, 0.48, depth + 0.15], [-width / 2 + 0.08, beamY, 0], materials.redDark);
  box(group, [0.58, 0.48, depth + 0.15], [width / 2 - 0.08, beamY, 0], materials.redDark);

  const doorY = platformHeight + 1.5;
  const doorW = width > 10 ? 1.65 : 1.2;
  for (let i = -1; i <= 1; i += 1) {
    const doorX = i * doorW * 1.08;
    box(group, [doorW, 2.66, 0.14], [doorX, doorY, frontZ + 0.03], materials.wood);
    box(group, [doorW - 0.22, 2.38, 0.1], [doorX, doorY + 0.01, frontZ + 0.12], materials.red);
    for (let j = -1; j <= 1; j += 1) {
      box(group, [0.055, 2.24, 0.055], [doorX + j * doorW * 0.24, doorY, frontZ + 0.19], materials.gold);
    }
    for (const dy of [-0.88, -0.16, 0.62, 1.09]) {
      box(group, [doorW - 0.24, 0.055, 0.055], [doorX, doorY + dy, frontZ + 0.19], materials.gold);
    }
    box(group, [0.11, 0.11, 0.08], [doorX + doorW * 0.31, doorY, frontZ + 0.27], materials.gold);
  }
  for (const signX of [-width * 0.31, width * 0.31]) {
    box(group, [1.35, 1.28, 0.12], [signX, platformHeight + 2.17, frontZ + 0.08], materials.wood);
    box(group, [1.09, 1.01, 0.1], [signX, platformHeight + 2.17, frontZ + 0.16], materials.paper);
    box(group, [0.07, 0.55, 0.04], [signX, platformHeight + 2.17, frontZ + 0.23], materials.redDark);
  }
  if (stairs) buildStairs(group, width * 0.64, depth / 2 + 0.02, width > 10 ? 6 : 4);
  buildRoof(group, width, depth, beamY + 0.33, { tiers: 6, rise: 2.3, colorOffset: roofOffset });
  return group;
}

function buildGate(x, z) {
  const group = new THREE.Group();
  group.name = '朱雀山门';
  group.position.set(x, 0, z);
  box(group, [16.2, 0.4, 7.5], [0, 0.16, 0], materials.foundation);
  box(group, [15.6, 0.38, 7.0], [0, 0.52, 0], materials.stone[1]);
  box(group, [15.0, 0.2, 6.6], [0, 0.82, 0], materials.redDark);
  const h = 4.35;
  for (const px of [-7, -4.5, 4.5, 7]) {
    box(group, [0.56, h, 0.56], [px, 0.99 + h / 2, 2.25], materials.redLight);
    box(group, [0.75, 0.18, 0.75], [px, 1.12, 2.25], materials.redDark);
    box(group, [0.9, 0.2, 0.8], [px, 5.42, 2.25], materials.woodLight);
    box(group, [0.95, 0.18, 0.3], [px, 5.62, 2.25], materials.woodLight);
  }
  for (const px of [-7.1, -4.3, 4.3, 7.1]) {
    box(group, [0.55, h, 0.55], [px, 3.16, -2.15], materials.red);
  }
  for (const sx of [-1, 1]) {
    box(group, [2.45, 3.5, 0.55], [sx * 5.85, 2.73, -0.05], materials.red);
    box(group, [2.6, 0.27, 7.1], [sx * 5.85, 4.55, -0.05], materials.redDark);
  }
  box(group, [15.3, 0.68, 0.78], [0, 5.83, 0.08], materials.redDark);
  box(group, [15.5, 0.28, 0.68], [0, 6.26, 0.08], materials.gold);
  box(group, [3.8, 1.35, 0.28], [0, 5.37, 2.7], materials.wood);
  box(group, [3.42, 0.99, 0.14], [0, 5.37, 2.9], materials.paper);
  for (let i = -1; i <= 1; i += 1) box(group, [0.07, 0.72, 0.06], [i * 1.14, 5.37, 3.0], materials.redDark);
  buildStairs(group, 5.8, 3.15, 5);
  buildRoof(group, 14.5, 6.3, 6.55, { tiers: 6, rise: 1.95, colorOffset: 2 });
  return group;
}

function buildPagoda(x, z, mirror = 1) {
  const group = new THREE.Group();
  group.name = mirror < 0 ? '西侧钟楼' : '东侧鼓楼';
  group.position.set(x, 0, z);
  box(group, [8.3, 0.42, 8.3], [0, 0.18, 0], materials.foundation);
  box(group, [7.6, 0.38, 7.6], [0, 0.58, 0], materials.stone[1]);
  const floors = [
    { width: 6.0, height: 2.8, base: 0.78 },
    { width: 4.75, height: 2.35, base: 4.22 },
    { width: 3.55, height: 2.05, base: 7.21 },
  ];
  floors.forEach((floor, index) => {
    const centerY = floor.base + floor.height / 2;
    box(group, [floor.width - 0.16, floor.height, floor.width - 0.16], [0, centerY, 0], index % 2 ? materials.redDark : materials.red);
    box(group, [floor.width + 0.2, 0.23, floor.width + 0.2], [0, floor.base + 0.11, 0], materials.woodLight);
    for (const side of [-1, 1]) {
      const windowY = floor.base + floor.height * 0.62;
      box(group, [floor.width * 0.56, floor.height * 0.39, 0.11], [0, windowY, side * (floor.width / 2 + 0.035)], materials.paper);
      box(group, [0.08, floor.height * 0.42, 0.1], [0, windowY, side * (floor.width / 2 + 0.11)], materials.redDark);
      for (const offset of [-floor.width * 0.28, floor.width * 0.28]) {
        box(group, [0.27, floor.height, 0.27], [offset, centerY, side * (floor.width / 2 - 0.05)], materials.redLight);
      }
      box(group, [floor.width + 0.85, 0.2, 0.48], [0, floor.base + floor.height + 0.08, side * (floor.width / 2 + 0.15)], materials.woodLight);
    }
    for (const side of [-1, 1]) {
      box(group, [0.11, floor.height * 0.38, floor.width * 0.56], [side * (floor.width / 2 + 0.035), floor.base + floor.height * 0.62, 0], materials.paper);
      for (const offset of [-floor.width * 0.28, floor.width * 0.28]) {
        box(group, [0.27, floor.height, 0.27], [side * (floor.width / 2 - 0.05), centerY, offset], materials.redLight);
      }
    }
    buildRoof(group, floor.width, floor.width, floor.base + floor.height + 0.12, { tiers: 4, rise: 1.15, colorOffset: index });
  });
  box(group, [0.58, 0.66, 0.58], [0, 10.0, 0], materials.gold);
  box(group, [0.35, 0.78, 0.35], [0, 10.66, 0], materials.gold);
  box(group, [0.72, 0.16, 0.72], [0, 10.93, 0], materials.gold);
  box(group, [0.16, 0.8, 0.16], [0, 11.4, 0], materials.gold);
  buildStairs(group, 2.5, 3.9, 4);
  return group;
}

function buildPerimeter(scene) {
  for (const side of [-1, 1]) {
    for (let z = -16; z <= 21; z += 2.5) {
      box(scene, [0.42, 1.5, 2.32], [side * 21.4, 0.76, z], materials.red);
      box(scene, [0.64, 0.24, 2.4], [side * 21.4, 1.59, z], materials.roofShadow);
      box(scene, [0.12, 0.35, 0.14], [side * 21.4, 1.77, z - 0.85], materials.gold);
    }
  }
  for (const side of [-1, 1]) {
    for (let z = -17; z <= -14; z += 2.5) box(scene, [2.3, 1.55, 0.42], [side * 17.7, 0.78, -20.5], materials.red);
    for (let x = side * 10.8; Math.abs(x) < 21; x += side * 2.5) {
      box(scene, [2.32, 1.5, 0.42], [x, 0.76, 22.5], materials.red);
      box(scene, [2.4, 0.24, 0.64], [x, 1.58, 22.5], materials.roofShadow);
    }
  }
}

function buildTree(scene, x, z, { blossom = false, scale = 1 } = {}) {
  const group = new THREE.Group();
  group.position.set(x, 0, z);
  const trunkH = 3.1 * scale;
  box(group, [0.54 * scale, trunkH, 0.52 * scale], [0, trunkH / 2, 0], materials.bark);
  box(group, [0.38 * scale, 1.2 * scale, 0.38 * scale], [0.7 * scale, trunkH - 0.15 * scale, -0.18 * scale], materials.bark);
  const palette = blossom ? materials.blossom : materials.pine;
  const blocks = [
    [0, trunkH + 0.4 * scale, 0, 2.2, 1.55, 2.15],
    [-0.7, trunkH + 1.05 * scale, 0.3, 1.65, 1.55, 1.6],
    [0.68, trunkH + 1.1 * scale, -0.2, 1.7, 1.65, 1.7],
    [0, trunkH + 1.58 * scale, 0, 1.55, 1.5, 1.55],
    [-0.12, trunkH + 0.5 * scale, -0.7, 1.4, 1.32, 1.45],
  ];
  blocks.forEach(([bx, by, bz, sx, sy, sz], index) => {
    box(group, [sx * scale, sy * scale, sz * scale], [bx * scale, by, bz * scale], palette[index % palette.length]);
  });
  scene.add(group);
}

function buildLantern(scene, x, z, scale = 1) {
  const group = new THREE.Group();
  group.position.set(x, 0, z);
  box(group, [0.9 * scale, 0.42 * scale, 0.9 * scale], [0, 0.22 * scale, 0], materials.stone[1]);
  box(group, [0.33 * scale, 2.4 * scale, 0.33 * scale], [0, 1.55 * scale, 0], materials.wood);
  box(group, [0.74 * scale, 0.19 * scale, 0.74 * scale], [0, 2.82 * scale, 0], materials.gold);
  box(group, [0.7 * scale, 0.7 * scale, 0.7 * scale], [0, 3.25 * scale, 0], materials.lantern);
  box(group, [1.02 * scale, 0.18 * scale, 1.02 * scale], [0, 3.64 * scale, 0], materials.wood);
  box(group, [0.34 * scale, 0.35 * scale, 0.34 * scale], [0, 3.88 * scale, 0], materials.gold);
  scene.add(group);
}

function buildLion(scene, x, z, mirror = 1) {
  const group = new THREE.Group();
  group.position.set(x, 0, z);
  box(group, [1.8, 0.66, 1.5], [0, 0.36, 0], materials.stone[1]);
  box(group, [1.45, 1.25, 1.08], [0, 1.25, 0.06], materials.stone[2]);
  box(group, [1.3, 0.75, 1.1], [0, 2.14, 0.08], materials.stone[2]);
  box(group, [0.48, 0.46, 0.38], [0, 2.2, 0.67], materials.gold);
  box(group, [0.33, 0.3, 0.15], [-0.32, 2.3, 0.59], materials.dark);
  box(group, [0.33, 0.3, 0.15], [0.32, 2.3, 0.59], materials.dark);
  box(group, [0.34, 0.34, 0.32], [-0.64, 2.58, -0.18], materials.stone[0]);
  box(group, [0.34, 0.34, 0.32], [0.64, 2.58, -0.18], materials.stone[0]);
  box(group, [0.16, 0.16, 0.16], [0.44 * mirror, 2.56, 0.46], materials.redDark);
  scene.add(group);
}

function buildDecor(scene) {
  const trees = [
    [-26, -24, false, 1.15], [-27, -8, true, 1.08], [-26, 9, false, 1.12], [-26, 29, true, 1.18],
    [26, -24, false, 1.15], [27, -8, true, 1.08], [26, 9, false, 1.12], [26, 29, true, 1.18],
    [-22.8, -28, true, 0.86], [22.8, -28, true, 0.86], [-22.8, 32, false, 0.9], [22.8, 32, false, 0.9],
  ];
  trees.forEach(([x, z, blossom, scale]) => buildTree(scene, x, z, { blossom, scale }));
  for (const side of [-1, 1]) {
    buildLion(scene, side * 4.4, 19.6, side);
    for (const z of [15.5, 5.4, -5, -13, -23]) buildLantern(scene, side * (z < -9 ? 8.8 : 9.5), z, z === -23 ? 0.78 : 0.88);
  }
  // A little stone bridge marks the outer threshold before the gate.
  for (let i = -3; i <= 3; i += 1) {
    box(scene, [1.05, 0.25, 0.56], [i * 1.05, 0.16, 31.8], materials.stone[(i + 4) % materials.stone.length]);
  }
}

function makeSky(scene) {
  const skyCanvas = document.createElement('canvas');
  skyCanvas.width = 2;
  skyCanvas.height = 512;
  const ctx = skyCanvas.getContext('2d');
  const gradient = ctx.createLinearGradient(0, 0, 0, 512);
  gradient.addColorStop(0, '#687985');
  gradient.addColorStop(0.28, '#a9a69a');
  gradient.addColorStop(0.63, '#e4b18d');
  gradient.addColorStop(1, '#f0c995');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 2, 512);
  const texture = new THREE.CanvasTexture(skyCanvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  const sky = new THREE.Mesh(new THREE.SphereGeometry(170, 24, 16), new THREE.MeshBasicMaterial({ map: texture, side: THREE.BackSide, depthWrite: false }));
  sky.renderOrder = -1;
  scene.add(sky);
}

export function createSanctuary(mount) {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xe5b38e);
  scene.fog = new THREE.Fog(0xdcb08f, 76, 160);
  makeSky(scene);

  const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 240);
  camera.position.set(47, 51, 68);
  const initialCamera = camera.position.clone();
  const lookTarget = new THREE.Vector3(0, 1.5, -1.5);
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.65));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.12;
  renderer.domElement.className = 'sanctuary-canvas';
  mount.appendChild(renderer.domElement);

  scene.add(new THREE.HemisphereLight(0xc6d7dd, 0x6b583f, 2.15));
  const sun = new THREE.DirectionalLight(0xffd1a0, 3.2);
  sun.position.set(-36, 49, 24);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.camera.left = -48;
  sun.shadow.camera.right = 48;
  sun.shadow.camera.top = 54;
  sun.shadow.camera.bottom = -54;
  sun.shadow.bias = -0.00012;
  sun.shadow.normalBias = 0.025;
  scene.add(sun);
  const fill = new THREE.DirectionalLight(0x94bac1, 0.8);
  fill.position.set(30, 20, -34);
  scene.add(fill);

  const land = new THREE.Mesh(new THREE.BoxGeometry(64, 0.72, 78), mat(0x5e6449));
  land.position.set(0, -0.42, 0);
  land.receiveShadow = true;
  scene.add(land);
  box(scene, [63.4, 0.16, 77.4], [0, -0.04, 0], materials.grass[0], { castShadow: false });
  makeMeadow(scene);
  makePaving(scene);

  // Main procession: rear shrine, imperial hall, paired courts, towers, and front gate.
  scene.add(buildHall({ name: '后寝静堂', x: 0, z: -29, width: 10.5, depth: 7.2, columnHeight: 3.55, roofOffset: 1, secondary: true }));
  scene.add(buildHall({ name: '太和正殿', x: 0, z: -15.3, width: 14.2, depth: 10.2, columnHeight: 4.85 }));
  scene.add(buildHall({ name: '西配殿', x: -13.3, z: -0.2, width: 9.3, depth: 7.4, columnHeight: 3.65, roofOffset: 1, secondary: true }));
  scene.add(buildHall({ name: '东配殿', x: 13.3, z: -0.2, width: 9.3, depth: 7.4, columnHeight: 3.65, roofOffset: 1, secondary: true }));
  scene.add(buildPagoda(-13.3, 10.8, -1));
  scene.add(buildPagoda(13.3, 10.8, 1));
  scene.add(buildGate(0, 23.4));
  buildPerimeter(scene);
  buildDecor(scene);
  mergeStaticBoxes(scene);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.copy(lookTarget);
  controls.enableDamping = true;
  controls.dampingFactor = 0.055;
  controls.minDistance = 39;
  controls.maxDistance = 105;
  controls.minPolarAngle = 0.18;
  controls.maxPolarAngle = Math.PI * 0.49;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.28;
  controls.enablePan = false;
  controls.update();

  const clock = new THREE.Clock();
  function animate() {
    requestAnimationFrame(animate);
    controls.update(clock.getDelta());
    renderer.render(scene, camera);
  }
  animate();

  function resize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    camera.aspect = width / height;
    camera.fov = width < 760 ? 43 : 36;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, width < 760 ? 1.3 : 1.65));
  }
  window.addEventListener('resize', resize);

  function resetView() {
    camera.position.copy(initialCamera);
    controls.target.copy(lookTarget);
    controls.update();
  }

  return { controls, renderer, resetView };
}
