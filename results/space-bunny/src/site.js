import * as THREE from 'three';
import { PAL, jitter, mulberry32 } from './palette.js';
import {
  mainHall, sideHall, bellDrumTower, mountainGate, pagoda, cornerTower,
  corridor, wallRun, balustrade, lanternPost, stoneLion, censer, huabiao,
  tree, rock, flowerBed
} from './buildings.js';

/**
 * 总平面
 * ------------------------------------------------------------
 * 中轴对称布局（x=0 为中轴，+z 为南/入口方向）
 */

// —— 关键坐标 ——
const WALL_X = 36;
const WALL_S = 42;
const WALL_N = -62;
const GATE = { x: 0, z: 38 };
const MAIN = { x: 0, z: -32 };
const SIDE = { x: 25, z: -2 };
const TOWER = { x: 13, z: 24 };
const PAGODA = { x: 0, z: -54 };
const CORRIDOR_X = 16;
const CORRIDOR_Z = [-22, 8];

/** 铺装区域（用于草地散布避让） */
const PAVE = [
  { x0: -6, x1: 6, z0: -22, z1: 28 },      // 中轴御道
  { x0: -11, x1: 11, z0: 28, z1: 37 },     // 门前广场
  { x0: -18, x1: -8, z0: 19, z1: 29 },     // 钟楼前
  { x0: 8, x1: 18, z0: 19, z1: 29 },       // 鼓楼前
  { x0: -17, x1: 17, z0: -20, z1: -6 },    // 主殿前广场
  { x0: -19, x1: -12, z0: -24, z1: 10 },   // 西廊道
  { x0: 12, x1: 19, z0: -24, z1: 10 },     // 东廊道
  { x0: -12, x1: 12, z0: -62, z1: -46 },   // 塔院
  { x0: -10, x1: 10, z0: 42, z1: 50 },     // 门外御道（过桥）
  { x0: -14, x1: 14, z0: 51, z1: 70 },     // 门前广场
  { x0: -7, x1: 7, z0: 70, z1: 210 }       // 远接官道
];

function insidePave(x, z) {
  for (const r of PAVE) if (x >= r.x0 - 1 && x <= r.x1 + 1 && z >= r.z0 - 1 && z <= r.z1 + 1) return true;
  return false;
}

/** 壕沟范围（草地散布避让用） */
function inMoat(x, z) {
  if (x >= -51 && x <= -39 && z >= -76 && z <= 60) return true;
  if (x >= 39 && x <= 51 && z >= -76 && z <= 60) return true;
  if (z >= -77 && z <= -65 && x >= -51 && x <= 51) return true;
  if (z >= 44 && z <= 56 && x >= -51 && x <= 51) return true;
  return false;
}

/** 石铺地：深色基底 + 2×2 抖动石板 + 边缘石牙；centerX 指定中央御路用亮石 */
function pave(world, r, rng, centerX) {
  world.pad(r.x0, r.z0, r.x1, r.z1, 0.3, 0.3, PAL.stoneDark);
  for (let x = r.x0; x <= r.x1; x += 2) {
    for (let z = r.z0; z <= r.z1; z += 2) {
      const x1 = Math.min(x + 1, r.x1);
      const z1 = Math.min(z + 1, r.z1);
      const isCenter = centerX !== undefined && Math.abs(x - centerX) <= 1;
      world.pad(x, z, x1, z1, 0.46, 0.18,
        isCenter ? jitter(PAL.marble, rng, 0.05) : jitter(PAL.stone, rng, 0.09));
    }
  }
  // 石牙
  world.pad(r.x0 - 1, r.z0 - 1, r.x1 + 1, r.z0 - 1, 0.5, 0.5, PAL.stoneLight);
  world.pad(r.x0 - 1, r.z1 + 1, r.x1 + 1, r.z1 + 1, 0.5, 0.5, PAL.stoneLight);
  world.pad(r.x0 - 1, r.z0, r.x0 - 1, r.z1, 0.5, 0.5, PAL.stoneLight);
  world.pad(r.x1 + 1, r.z0, r.x1 + 1, r.z1, 0.5, 0.5, PAL.stoneLight);
}

/** 对称放置：x≠0 时自动生成左右两份 */
function symmetric(list, fn) {
  for (const [x, z, kind] of list) {
    fn(x, z, kind);
    if (x !== 0) fn(-x, z, kind);
  }
}

export function buildSite(world, scene) {
  const rng = mulberry32(31415926);

  // ================= 地形 =================
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(900, 900),
    new THREE.MeshStandardMaterial({ color: PAL.grass, roughness: 1 })
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -0.02;
  ground.receiveShadow = true;
  ground.name = 'ground';
  scene.add(ground);

  // 草地色块（打破大色块）
  for (let i = 0; i < 26; i++) {
    const a = rng() * Math.PI * 2;
    const r = 46 + rng() * 150;
    const x = Math.cos(a) * r;
    const z = Math.sin(a) * r * 1.15 - 8;
    const w = 16 + rng() * 40;
    const d = 16 + rng() * 40;
    world.box(x, 0.01, z, w, 0.06, d, jitter(rng() > 0.5 ? PAL.grassDark : PAL.grassLight, rng, 0.08));
  }

  // 远山：由多个错落体量叠出不规则山脊线
  const hillTones = [0x5d7a72, 0x53707a, 0x67877a, 0x4e6a72, 0x6b8a80];
  for (let ring = 0; ring < 2; ring++) {
    const count = 15 + ring * 9;
    for (let i = 0; i < count; i++) {
      const a = (i / count) * Math.PI * 2 + (rng() - 0.5) * 0.32;
      const r = 148 + ring * 72 + rng() * 48;
      const x = Math.cos(a) * r;
      const z = Math.sin(a) * r * 1.05 - 10;
      const c = hillTones[Math.floor(rng() * hillTones.length)];
      const baseW = 22 + rng() * 22;
      const peak = 6.5 + rng() * 7.5;
      world.box(x, -0.5, z, baseW * 1.22, 1.0, baseW * 1.04, jitter(c, rng, 0.05));
      const n = 4 + Math.floor(rng() * 2);
      for (let k = 0; k < n; k++) {
        const f = k / n;
        const w = baseW * (1 - f * 0.7) * (0.68 + rng() * 0.5);
        const h = peak * (0.4 + rng() * 0.32);
        const ox = (rng() - 0.5) * baseW * 0.44 * (1 - f * 0.7);
        const oz = (rng() - 0.5) * baseW * 0.44 * (1 - f * 0.7);
        world.box(x + ox, f * peak * 0.66 + h / 2 - 0.6, z + oz,
          w, h, w * (0.78 + rng() * 0.42), jitter(c, rng, 0.07));
      }
    }
  }

  // ================= 铺装与道路 =================
  for (const r of PAVE) {
    const onAxis = r.x0 <= 0 && r.x1 >= 0 && (r.x1 - r.x0) <= 30;
    pave(world, r, rng, onAxis ? 0 : undefined);
  }
  world.pad(-5, -25, 5, -22, 0.46, 0.18, jitter(PAL.stone, rng, 0.05));

  // ================= 建筑群 =================
  mainHall(world, MAIN.x, MAIN.z);
  sideHall(world, SIDE.x, SIDE.z, -1, rng);
  sideHall(world, -SIDE.x, SIDE.z, 1, rng);
  bellDrumTower(world, -TOWER.x, TOWER.z, 'bell', rng);
  bellDrumTower(world, TOWER.x, TOWER.z, 'drum', rng);
  mountainGate(world, GATE.x, GATE.z, rng);
  pagoda(world, PAGODA.x, PAGODA.z, rng);
  corridor(world, CORRIDOR_X, CORRIDOR_Z[0], CORRIDOR_Z[1]);
  corridor(world, -CORRIDOR_X, CORRIDOR_Z[0], CORRIDOR_Z[1]);

  for (const [cx, cz] of [
    [-WALL_X, WALL_S], [WALL_X, WALL_S],
    [-WALL_X, WALL_N], [WALL_X, WALL_N]
  ]) cornerTower(world, cx, cz, rng);

  // ================= 宫墙 =================
  wallRun(world, { axis: 'x', fixed: WALL_S, from: -WALL_X, to: -10 });
  wallRun(world, { axis: 'x', fixed: WALL_S, from: 10, to: WALL_X });
  wallRun(world, { axis: 'x', fixed: WALL_N, from: -WALL_X, to: WALL_X });
  wallRun(world, { axis: 'z', fixed: -WALL_X, from: WALL_N, to: WALL_S });
  wallRun(world, { axis: 'z', fixed: WALL_X, from: WALL_N, to: WALL_S });

  // ================= 护城河与桥 =================
  const bankMat = new THREE.MeshStandardMaterial({ color: PAL.stone, roughness: 0.96 });
  const waterMats = [0x4e93b5, 0x3f7fa4, 0x5aa1c2].map((c) => new THREE.MeshStandardMaterial({
    color: c, roughness: 0.22, metalness: 0.0, emissive: 0x14384a, emissiveIntensity: 0.5
  }));
  const moatSeg = (cx, cz, w, d) => {
    const bank = new THREE.Mesh(new THREE.BoxGeometry(w + 1.8, 0.6, d + 1.8), bankMat);
    bank.position.set(cx, 0.08, cz);
    bank.receiveShadow = true;
    scene.add(bank);
    const alongZ = d >= w;
    const len = alongZ ? d : w;
    const n = Math.max(2, Math.round(len / 26));
    for (let i = 0; i < n; i++) {
      const off = -len / 2 + (len / n) * (i + 0.5);
      const segLen = len / n;
      const m = alongZ
        ? new THREE.Mesh(new THREE.BoxGeometry(w, 0.5, segLen - 0.15), waterMats[i % 3])
        : new THREE.Mesh(new THREE.BoxGeometry(segLen - 0.15, 0.5, d), waterMats[i % 3]);
      m.position.set(alongZ ? cx : cx + off, 0.2, alongZ ? cz + off : cz);
      scene.add(m);
    }
  };
  moatSeg(-45, -8, 10, 132);
  moatSeg(45, -8, 10, 132);
  moatSeg(0, -71, 100, 10);
  moatSeg(-27.5, 50, 45, 10);
  moatSeg(27.5, 50, 45, 10);

  // 石桥
  world.pad(-5, 41, 5, 49, 0.62, 0.7, PAL.stoneLight);
  world.pad(-5, 41, 5, 49, 0.7, 0.12, jitter(PAL.stone, rng, 0.06));
  world.pad(-6, 49, 6, 51, 0.54, 0.5, PAL.stoneLight);
  balustrade(world, { axis: 'z', fixed: -6, from: 42, to: 48, y: 0 });
  balustrade(world, { axis: 'z', fixed: 6, from: 42, to: 48, y: 0 });

  // ================= 小品 =================
  stoneLion(world, -11, -20, 1, rng);
  stoneLion(world, 11, -20, 1, rng);
  censer(world, -5, -24);
  censer(world, 5, -24);
  huabiao(world, -7, 44);
  huabiao(world, 7, 44);

  // 道路灯杆
  symmetric([[-7, -16], [-7, -8], [-7, 0], [-7, 8], [-7, 16], [-7, 24], [-9, 33]],
    (x, z) => lanternPost(world, x, z, 0, 4));

  // 花坛
  symmetric([[15, -16], [15, -10], [9, 30], [10, 22]],
    (x, z) => flowerBed(world, x - 1, z, x + 1, z, rng));

  // ================= 绿化 =================
  const outer = [];
  for (const z of [40, 27, 13, -1, -15, -29, -43, -55]) {
    outer.push([56 + rng() * 3, z + (rng() - 0.5) * 5, rng() > 0.45 ? 'broad' : 'pine', 0.85 + rng() * 0.55]);
  }
  symmetric(outer, (x, z, kind, s) => tree(world, x, z, rng, kind, s));
  for (const z of [34, 17, 0, -17, -34, -50]) {
    symmetric([[58 + rng() * 2.5, z + (rng() - 0.5) * 6, 'pine', 0.8 + rng() * 0.55]],
      (x, zz, kind, s) => tree(world, x, zz, rng, kind, s));
  }
  for (const z of [18, 2, -14, -30]) {
    symmetric([[38.5, z + (rng() - 0.5) * 3, 'shrub', 0.9 + rng() * 0.5]],
      (x, zz, kind, s) => tree(world, x, zz, rng, kind, s));
  }
  // 官道两侧行道树
  for (const z of [76, 84, 92, 100, 108, 117, 127, 138]) {
    symmetric([[9.6 + rng() * 1.8, z + (rng() - 0.5) * 4, rng() > 0.45 ? 'broad' : 'pine', 0.75 + rng() * 0.7]],
      (x, zz, kind, s) => tree(world, x, zz, rng, kind, s));
  }
  for (const z of [80, 90, 99, 110, 122, 134]) {
    symmetric([[15 + rng() * 2, z + (rng() - 0.5) * 6, 'shrub', 0.85 + rng() * 0.6]],
      (x, zz, kind, s) => tree(world, x, zz, rng, kind, s));
  }
  symmetric([[6.2, 55], [6.6, 84], [6.3, 100], [6.7, 140], [6.4, 168]],
    (x, z) => lanternPost(world, x, z, 0, 4));
  symmetric([
    [12, 106, 'broad', 1.15], [16, 112, 'pine', 1.05], [10, 116, 'shrub', 1.3],
    [14, 120, 'broad', 1.0], [11, 124, 'pine', 1.2], [15, 128, 'broad', 1.1]
  ], (x, z, kind, s) => tree(world, x, z, rng, kind, s));

  // 院内树
  symmetric([
    [27, 33, 'broad', 1.05], [31, -20, 'pine', 1.0], [30, 8, 'broad', 0.9],
    [21, -25, 'pine', 1.1], [24, 30, 'broad', 1.0], [20, 18, 'pine', 0.85],
    [-24, 12, 'broad', 0.95], [26, 16, 'shrub', 1.0]
  ], (x, z, kind, s) => tree(world, x, z, rng, kind, s));
  for (const x of [-24, -13, 0, 13, 24]) {
    tree(world, x + (rng() - 0.5) * 5, -86, rng, 'broad', 0.9 + rng() * 0.4);
  }

  // 太湖石
  symmetric([
    [20, 30, 'r'], [20, -22, 'r'], [-20, 12, 'r'], [12, 26, 'r'],
    [30, -4, 'r'], [-13, -22, 'r'], [8, -64, 'r']
  ], (x, z) => rock(world, x, z, rng));

  // 宫城之外的郊野：田块 + 树丛
  const fieldTones = [0xa9a45c, 0x8f9a4a, 0xb5ac66, 0x7d8f46, 0xc0b26a];
  for (let i = 0; i < 22; i++) {
    const a = rng() * Math.PI * 2;
    const r = 74 + rng() * 100;
    const x = Math.cos(a) * r;
    const z = Math.sin(a) * r * 1.1 - 10;
    if (inMoat(x, z)) continue;
    const w = 18 + rng() * 36;
    const d = 14 + rng() * 30;
    world.box(x, 0.02, z, w, 0.1, d,
      jitter(fieldTones[Math.floor(rng() * fieldTones.length)], rng, 0.1));
  }
  const groves = [
    [-68, 46, 8], [68, 46, 8], [-70, -18, 7], [70, -18, 7],
    [-54, -70, 6], [54, -70, 6], [0, -84, 7], [-20, 92, 6], [20, 92, 6]
  ];
  for (const [gx, gz, n] of groves) {
    for (let k = 0; k < n; k++) {
      const a = rng() * Math.PI * 2;
      const rr = rng() * 12;
      const x = gx + Math.cos(a) * rr;
      const z = gz + Math.sin(a) * rr;
      if (inMoat(x, z) || insidePave(Math.round(x), Math.round(z))) continue;
      tree(world, x, z, rng, rng() > 0.5 ? 'broad' : 'pine', 0.85 + rng() * 0.6);
    }
  }
  for (let i = 0; i < 8; i++) {
    const a = rng() * Math.PI * 2;
    const r = 110 + rng() * 70;
    const x = Math.cos(a) * r;
    const z = Math.sin(a) * r * 1.05 - 10;
    if (inMoat(x, z)) continue;
    tree(world, x, z, rng, rng() > 0.5 ? 'broad' : 'pine', 0.8 + rng() * 0.5);
  }

  // 裸土斑块
  for (let i = 0; i < 14; i++) {
    const x = (rng() * 2 - 1) * 68;
    const z = -76 + rng() * 168;
    if (insidePave(Math.round(x), Math.round(z)) || inMoat(x, z)) continue;
    const w = 4 + rng() * 9;
    world.box(x, 0.012, z, w, 0.05, w * (0.6 + rng() * 0.5), jitter(PAL.earth, rng, 0.14));
  }
  // 草丛散布
  for (let i = 0; i < 1200; i++) {
    const x = Math.round((rng() * 2 - 1) * 70);
    const z = Math.round(rng() * 180 - 82);
    if (insidePave(x, z) || inMoat(x, z)) continue;
    const t = rng();
    const h = t > 0.93 ? 0.9 + rng() * 0.7 : t > 0.7 ? 0.5 + rng() * 0.35 : 0.25 + rng() * 0.3;
    const w = 0.45 + rng() * 0.6;
    world.box(x + 0.5, h / 2, z + 0.5, w, h, w, jitter(t > 0.5 ? PAL.grassLight : PAL.grassDark, rng, 0.13));
  }
  // 零星野花
  for (let i = 0; i < 170; i++) {
    const x = Math.round((rng() * 2 - 1) * 56);
    const z = Math.round(rng() * 132 - 68);
    if (insidePave(x, z) || inMoat(x, z)) continue;
    const cols = [PAL.flowerWhite, PAL.flowerGold, PAL.flowerPink];
    world.box(x + 0.5, 0.35, z + 0.5, 0.35, 0.4, 0.35, cols[Math.floor(rng() * 3)]);
  }

  return { PAVE, WALL_X, WALL_S, WALL_N, MAIN, GATE, PAGODA };
}
