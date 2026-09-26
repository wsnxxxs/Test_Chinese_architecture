// 小镇：车站、建筑群（住宅/商铺/镇公所/教堂/工厂/货棚/谷仓）、道路网、
// 跨河公路桥、树木（实例化）、路灯与夜间灯光、喷泉、田园、小道具与人偶
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { mulberry32 } from './util.js';
import { flatRibbon } from './ribbon.js';
import { makeFieldTexture, makeSignTexture, makeClockTexture } from './textures.js';

const rng = mulberry32(20260926);
const GRASS_Y = 0.3;

function mat(color, opts = {}) {
  return new THREE.MeshStandardMaterial({ color, roughness: 0.9, ...opts });
}

// ---------- 共享材质 ----------
const M = {
  walls: [0xf2e3c8, 0xefe8da, 0xc9cfb4, 0xb9c6cf, 0xe9d9a8, 0xe3cbb0].map((c) => mat(c)),
  roofs: [0x5c6670, 0xb3543c, 0x5b473a, 0x6a7059, 0x8a5a4a].map((c) => mat(c)),
  brick: mat(0xa85a42),
  trim: mat(0x7a5c40),
  white: mat(0xf2ede2, { roughness: 0.7 }),
  stone: mat(0x9a938a),
  concrete: mat(0xcfc8bb),
  paving: mat(0xbcb0a0),
  road: mat(0xb3a893, { side: THREE.DoubleSide }),
  door: mat(0x5f4632, { roughness: 0.8 }),
  green: mat(0x2e4238, { roughness: 0.6 }),
  winDark: mat(0x2c3944, { roughness: 0.3, metalness: 0.15 }),
  winLit: mat(0x4a4438, {
    roughness: 0.3,
    metalness: 0.1,
    emissive: 0xffc37a,
    emissiveIntensity: 0,
  }),
};

// ---------- 通用小工具 ----------
function boxMesh(w, h, d, material, x = 0, y = 0, z = 0, cast = true) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material);
  m.position.set(x, y, z);
  m.castShadow = cast;
  m.receiveShadow = true;
  return m;
}
function cylMesh(rt, rb, h, material, x = 0, y = 0, z = 0, seg = 10) {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), material);
  m.position.set(x, y, z);
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

// 合并的窗户条带：list = {x,y,z,ry,w,h,lit}
function addWindows(parent, list) {
  const buckets = { lit: [], dark: [] };
  for (const w of list) {
    const g = new THREE.PlaneGeometry(w.w ?? 0.34, w.h ?? 0.42);
    g.applyMatrix4(new THREE.Matrix4().makeRotationY(w.ry).setPosition(w.x, w.y, w.z));
    buckets[w.lit ? 'lit' : 'dark'].push(g);
  }
  for (const key of ['lit', 'dark']) {
    if (!buckets[key].length) continue;
    const mesh = new THREE.Mesh(mergeGeometries(buckets[key], false), key === 'lit' ? M.winLit : M.winDark);
    parent.add(mesh);
  }
}

// 人字屋顶（屋脊沿 X）：len 含挑檐长度，span 含挑檐宽度
function gableRoofGeo(len, span, h) {
  const v = [];
  const A = [-len / 2, h, 0], B = [len / 2, h, 0];
  const C = [len / 2, 0, span / 2], D = [-len / 2, 0, span / 2];
  const E = [len / 2, 0, -span / 2], F = [-len / 2, 0, -span / 2];
  v.push(...A, ...D, ...C, ...A, ...C, ...B); // 南坡
  v.push(...B, ...E, ...F, ...B, ...F, ...A); // 北坡
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(v, 3));
  geo.computeVertexNormals();
  return geo;
}
// 山墙三角（±x 两端）
function gableEndGeo(w, d, h) {
  const v = [
    w / 2, 0, d / 2, w / 2, 0, -d / 2, w / 2, h, 0,
    -w / 2, 0, -d / 2, -w / 2, 0, d / 2, -w / 2, h, 0,
  ];
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(v, 3));
  geo.computeVertexNormals();
  return geo;
}

function pick(arr) {
  return arr[(rng() * arr.length) | 0];
}

// ---------- 建筑 ----------
function makeHouse({ w = 1.7, d = 2.0, h = 1.5 } = {}) {
  const wall = pick(M.walls);
  const roof = pick(M.roofs);
  const g = new THREE.Group();
  g.add(boxMesh(w, h, d, wall, 0, h / 2, 0));
  const hr = Math.min(w, d) * 0.3 + 0.16;
  const roofMesh = new THREE.Mesh(gableRoofGeo(w + 0.34, d + 0.3, hr), roof);
  roofMesh.position.y = h;
  roofMesh.castShadow = true;
  g.add(roofMesh);
  const gable = new THREE.Mesh(gableEndGeo(w, d, hr), wall);
  gable.position.y = h;
  g.add(gable);
  const chim = boxMesh(0.2, 0.55, 0.2, M.brick, w * 0.24, h + hr * 0.5, -d * 0.12);
  chim.add(boxMesh(0.26, 0.07, 0.26, M.stone, 0, 0.31, 0));
  g.add(chim);
  // 门与台阶（+z 朝街）
  const door = new THREE.Mesh(new THREE.PlaneGeometry(0.4, 0.68), M.door);
  door.position.set(w * 0.22, 0.34, d / 2 + 0.012);
  g.add(door);
  g.add(boxMesh(0.5, 0.09, 0.2, M.stone, w * 0.22, 0.045, d / 2 + 0.1, false));
  addWindows(g, [
    { x: -w * 0.26, y: 0.66, z: d / 2 + 0.012, ry: 0, lit: rng() > 0.45 },
    { x: -w * 0.26, y: 0.66, z: -d / 2 - 0.012, ry: Math.PI, lit: rng() > 0.5 },
    { x: w / 2 + 0.012, y: 0.66, z: -d * 0.22, ry: Math.PI / 2, lit: rng() > 0.45 },
    { x: -w / 2 - 0.012, y: 0.66, z: -d * 0.22, ry: -Math.PI / 2, lit: rng() > 0.5 },
    { x: w / 2 + 0.012, y: 0.66, z: d * 0.22, ry: Math.PI / 2, lit: rng() > 0.5 },
    { x: -w / 2 - 0.012, y: 0.66, z: d * 0.22, ry: -Math.PI / 2, lit: rng() > 0.45 },
  ]);
  return g;
}

function makeShop() {
  const wall = pick(M.walls);
  const g = new THREE.Group();
  const w = 1.9, d = 2.3, h = 2.45;
  g.add(boxMesh(w, h, d, wall, 0, h / 2, 0));
  const hr = 0.42;
  const roofMesh = new THREE.Mesh(gableRoofGeo(d + 0.3, w + 0.34, hr), pick(M.roofs));
  roofMesh.rotation.y = Math.PI / 2; // 屋脊沿 Z（平行于街）
  roofMesh.position.y = h;
  roofMesh.castShadow = true;
  g.add(roofMesh);
  const gable = new THREE.Mesh(gableEndGeo(d, w, hr), wall);
  gable.rotation.y = Math.PI / 2;
  gable.position.y = h;
  g.add(gable);
  // 底层橱窗（夜亮）+ 招牌条 + 门
  addWindows(g, [
    { x: -0.45, y: 0.52, z: d / 2 + 0.012, ry: 0, w: 0.72, h: 0.5, lit: rng() > 0.25 },
    { x: 0.62, y: 0.55, z: d / 2 + 0.012, ry: 0, w: 0.34, h: 0.42, lit: rng() > 0.3 },
    { x: -0.4, y: 1.85, z: d / 2 + 0.012, ry: 0, lit: rng() > 0.4 },
    { x: 0.4, y: 1.85, z: d / 2 + 0.012, ry: 0, lit: rng() > 0.4 },
  ]);
  const door = new THREE.Mesh(new THREE.PlaneGeometry(0.44, 0.78), M.door);
  door.position.set(0.05, 0.39, d / 2 + 0.012);
  g.add(door);
  g.add(boxMesh(1.66, 0.24, 0.06, pick(M.roofs), 0, 1.32, d / 2 + 0.02));
  g.add(boxMesh(1.5, 0.05, 0.55, M.stone, 0.05, 0.025, d / 2 + 0.28, false));
  return g;
}

function makeKiosk() {
  const g = new THREE.Group();
  g.add(boxMesh(1.15, 1.05, 1.15, pick(M.walls), 0, 0.525, 0));
  g.add(boxMesh(1.45, 0.07, 1.45, mat(0xb3543c), 0, 1.1, 0));
  addWindows(g, [
    { x: 0, y: 0.62, z: 0.588, ry: 0, w: 0.72, h: 0.44, lit: true },
    { x: 0.588, y: 0.62, z: 0, ry: Math.PI / 2, w: 0.6, h: 0.44, lit: rng() > 0.5 },
  ]);
  const door = new THREE.Mesh(new THREE.PlaneGeometry(0.36, 0.6), M.door);
  door.position.set(0.36, 0.3, 0.588);
  g.add(door);
  return g;
}

function makeTownHall(clockTex) {
  const g = new THREE.Group();
  const w = 3.4, d = 2.6, h = 2.3;
  g.add(boxMesh(w, h, d, M.walls[0], 0, h / 2, 0));
  const roofMesh = new THREE.Mesh(gableRoofGeo(w + 0.4, d + 0.34, 0.62), M.roofs[0]);
  roofMesh.position.y = h;
  roofMesh.castShadow = true;
  g.add(roofMesh);
  const gable = new THREE.Mesh(gableEndGeo(w, d, 0.62), M.walls[0]);
  gable.position.y = h;
  g.add(gable);
  // 钟塔
  g.add(boxMesh(0.95, 1.5, 0.95, M.walls[1], 0.55, h + 0.75, 0.15));
  const spire = cylMesh(0.06, 0.78, 0.9, M.roofs[0], 0.55, h + 1.5 + 0.45, 0.15, 4);
  spire.rotation.y = Math.PI / 4;
  g.add(spire);
  const clock = new THREE.Mesh(
    new THREE.PlaneGeometry(0.46, 0.46),
    mat(0xf6efdd, { map: clockTex, roughness: 0.5 })
  );
  clock.position.set(0.55, h + 1.12, 0.15 + 0.485);
  g.add(clock);
  // 门廊
  g.add(boxMesh(1.3, 0.1, 0.6, M.roofs[0], 0, 1.32, d / 2 + 0.18));
  for (const dx of [-0.5, 0.5]) g.add(cylMesh(0.07, 0.08, 1.3, M.white, dx, 0.65, d / 2 + 0.38));
  addWindows(g, [
    { x: -1.15, y: 1.5, z: d / 2 + 0.012, ry: 0, w: 0.44, h: 0.6, lit: rng() > 0.4 },
    { x: 1.15, y: 1.5, z: d / 2 + 0.012, ry: 0, w: 0.44, h: 0.6, lit: rng() > 0.4 },
    { x: -w / 2 - 0.012, y: 1.5, z: 0, ry: -Math.PI / 2, w: 0.44, h: 0.6, lit: rng() > 0.4 },
    { x: w / 2 + 0.012, y: 1.5, z: 0, ry: Math.PI / 2, w: 0.44, h: 0.6, lit: rng() > 0.4 },
  ]);
  const door = new THREE.Mesh(new THREE.PlaneGeometry(0.56, 0.92), M.door);
  door.position.set(0, 0.46, d / 2 + 0.012);
  g.add(door);
  return g;
}

function makeChurch() {
  const g = new THREE.Group();
  g.add(boxMesh(2.0, 1.7, 2.8, M.walls[3], 0, 0.85, -0.6)); // 殿身
  const roofMesh = new THREE.Mesh(gableRoofGeo(3.14, 2.34, 0.72), M.roofs[0]);
  roofMesh.rotation.y = Math.PI / 2;
  roofMesh.position.set(0, 1.7, -0.6);
  roofMesh.castShadow = true;
  g.add(roofMesh);
  g.add(boxMesh(1.25, 2.9, 1.25, M.walls[3], 0, 1.45, 1.55)); // 钟塔
  g.add(cylMesh(0.05, 0.86, 1.35, M.roofs[0], 0, 2.9 + 0.67, 1.55, 4));
  const spire = g.children[g.children.length - 1];
  spire.rotation.y = Math.PI / 4;
  addWindows(g, [
    { x: 1.012, y: 1.05, z: -1.3, ry: Math.PI / 2, w: 0.26, h: 0.62, lit: rng() > 0.3 },
    { x: 1.012, y: 1.05, z: -0.2, ry: Math.PI / 2, w: 0.26, h: 0.62, lit: rng() > 0.3 },
    { x: -1.012, y: 1.05, z: -0.75, ry: -Math.PI / 2, w: 0.26, h: 0.62, lit: rng() > 0.3 },
    { x: 0, y: 2.1, z: 2.18, ry: 0, w: 0.24, h: 0.4, lit: true },
    { x: 0, y: 2.1, z: 0.92, ry: Math.PI, w: 0.24, h: 0.4, lit: false },
  ]);
  const door = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.8), M.door);
  door.position.set(0, 0.4, 1.55 + 0.63);
  g.add(door);
  // 小墓园
  for (const [sx, sz] of [[1.35, -1.1], [1.45, -0.3], [1.3, 0.35]]) {
    const st = boxMesh(0.12, 0.2, 0.045, M.stone, sx, 0.1, sz, false);
    st.rotation.y = (rng() - 0.5) * 0.5;
    g.add(st);
  }
  return g;
}

function makeFactory() {
  const g = new THREE.Group();
  const w = 3.8, d = 2.3, h = 1.9;
  g.add(boxMesh(w, h, d, M.walls[2], 0, h / 2, 0));
  const roofMesh = new THREE.Mesh(gableRoofGeo(w + 0.3, d + 0.3, 0.4), M.roofs[3]);
  roofMesh.position.y = h;
  roofMesh.castShadow = true;
  g.add(roofMesh);
  const gable = new THREE.Mesh(gableEndGeo(w, d, 0.4), M.walls[2]);
  gable.position.y = h;
  g.add(gable);
  // 烟囱
  const chim = cylMesh(0.17, 0.23, 3.3, M.brick, 1.25, h + 1.0, -0.55);
  chim.add(cylMesh(0.22, 0.22, 0.16, M.stone, 0, 1.7, 0, 10));
  g.add(chim);
  // 大门 + 侧窗
  const door = new THREE.Mesh(new THREE.PlaneGeometry(1.0, 1.15), M.door);
  door.position.set(-0.7, 0.58, d / 2 + 0.012);
  g.add(door);
  addWindows(g, [
    { x: 0.9, y: 1.28, z: d / 2 + 0.012, ry: 0, w: 1.2, h: 0.55, lit: rng() > 0.4 },
    { x: w / 2 + 0.012, y: 1.15, z: 0, ry: Math.PI / 2, w: 0.5, h: 0.45, lit: rng() > 0.5 },
    { x: -w / 2 - 0.012, y: 1.15, z: 0, ry: -Math.PI / 2, w: 0.5, h: 0.45, lit: rng() > 0.5 },
  ]);
  g.add(boxMesh(1.3, 0.24, 0.7, M.concrete, -0.7, 0.12, d / 2 + 0.35, false));
  return g;
}

function makeGoodsShed() {
  const g = new THREE.Group();
  const w = 2.6, d = 1.8, h = 1.25;
  g.add(boxMesh(w, h, d, M.roofs[1], 0, h / 2, 0)); // 氧化红铁皮棚
  const roofMesh = new THREE.Mesh(gableRoofGeo(w + 0.26, d + 0.26, 0.42), M.roofs[3]);
  roofMesh.position.y = h;
  roofMesh.castShadow = true;
  g.add(roofMesh);
  const door = new THREE.Mesh(new THREE.PlaneGeometry(1.0, 0.8), M.door);
  door.position.set(0, 0.4, d / 2 + 0.012);
  g.add(door);
  addWindows(g, [
    { x: -w / 2 - 0.012, y: 0.62, z: 0, ry: -Math.PI / 2, w: 0.44, h: 0.34, lit: rng() > 0.6 },
  ]);
  return g;
}

function makeBarn() {
  const g = new THREE.Group();
  const w = 2.4, d = 3.0, h = 1.45;
  g.add(boxMesh(w, h, d, mat(0xa8402f), 0, h / 2, 0));
  const roofMesh = new THREE.Mesh(gableRoofGeo(w + 0.3, d + 0.3, 0.95), M.roofs[2]);
  roofMesh.position.y = h;
  roofMesh.castShadow = true;
  g.add(roofMesh);
  const gable = new THREE.Mesh(gableEndGeo(w, d, 0.95), mat(0xa8402f));
  gable.position.y = h;
  g.add(gable);
  const door = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 1.0), mat(0x8f3325));
  door.position.set(0, 0.5, d / 2 + 0.012);
  g.add(door);
  for (const rz of [0.72, -0.72]) {
    const trim = new THREE.Mesh(new THREE.BoxGeometry(0.09, 1.0, 0.03), M.white);
    trim.position.set(0, 0.5, d / 2 + 0.02);
    trim.rotation.z = rz;
    g.add(trim);
  }
  return g;
}

// ---------- 车站 ----------
function makeStation(scene, registry) {
  const g = new THREE.Group();
  // 站台
  const platform = boxMesh(1.2, 0.48, 6.4, M.concrete, -14.3, 0.54, 0);
  g.add(platform);
  platform.receiveShadow = true;
  // 雨棚
  const canopy = boxMesh(1.5, 0.08, 7.0, M.green, -14.3, 2.3, 0);
  g.add(canopy);
  for (const z of [-2.6, -0.9, 0.9, 2.6]) {
    g.add(cylMesh(0.045, 0.05, 2.14, M.green, -14.6, 1.07, z, 8));
  }
  // 雨棚下小灯（夜亮）
  const lampMat = new THREE.MeshStandardMaterial({
    color: 0xfff4d8,
    emissive: 0xffd9a0,
    emissiveIntensity: 0,
  });
  registry.emissives.push({ mat: lampMat, day: 0, night: 2.2 });
  for (const z of [-1.8, 1.8]) {
    const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.08, 8, 6), lampMat);
    bulb.position.set(-14.35, 2.18, z);
    g.add(bulb);
  }
  // 站牌（雨棚两面）
  const signTex = makeSignTexture();
  for (const [sx, ry] of [[-15.07, -Math.PI / 2], [-13.53, Math.PI / 2]]) {
    const sign = new THREE.Mesh(
      new THREE.PlaneGeometry(2.9, 0.5),
      new THREE.MeshStandardMaterial({ map: signTex, roughness: 0.6 })
    );
    sign.position.set(sx, 2.42, 0);
    sign.rotation.y = ry;
    g.add(sign);
  }
  // 站房（朝向站台一侧开门）
  const bldg = boxMesh(1.8, 1.9, 5.2, M.walls[0], -12.7, 0.95, 0);
  g.add(bldg);
  const roofMesh = new THREE.Mesh(gableRoofGeo(5.6, 2.2, 0.6), M.roofs[0]);
  roofMesh.rotation.y = Math.PI / 2;
  roofMesh.position.set(-12.7, 1.9, 0);
  roofMesh.castShadow = true;
  g.add(roofMesh);
  addWindows(g, [
    { x: -13.612, y: 1.1, z: -1.5, ry: -Math.PI / 2, w: 0.44, h: 0.5, lit: true },
    { x: -13.612, y: 1.1, z: 1.5, ry: -Math.PI / 2, w: 0.44, h: 0.5, lit: rng() > 0.2 },
    { x: -11.788, y: 1.1, z: 1.5, ry: Math.PI / 2, w: 0.44, h: 0.5, lit: rng() > 0.3 },
  ]);
  for (const [dx, ry] of [[-13.612, -Math.PI / 2], [-11.788, Math.PI / 2]]) {
    const door = new THREE.Mesh(new THREE.PlaneGeometry(0.46, 0.8), M.door);
    door.position.set(dx, 0.4, 0);
    door.rotation.y = ry;
    g.add(door);
  }
  // 水塔
  const tower = new THREE.Group();
  for (const dx of [-0.3, 0.3]) for (const dz of [-0.3, 0.3]) {
    tower.add(boxMesh(0.09, 1.05, 0.09, M.green, dx, 0.525, dz));
  }
  tower.add(cylMesh(0.68, 0.75, 0.9, M.green, 0, 1.5, 0, 14));
  tower.add(cylMesh(0.76, 0.76, 0.1, M.white, 0, 1.42, 0, 14));
  tower.add(cylMesh(0.05, 0.74, 0.5, M.roofs[0], 0, 2.2, 0, 14));
  tower.position.set(-13.5, 0, 6.5);
  g.add(tower);
  // 信号机
  const signal = new THREE.Group();
  signal.add(cylMesh(0.035, 0.045, 1.9, M.green, 0, 0.95, 0, 8));
  signal.add(boxMesh(0.5, 0.07, 0.04, mat(0xc0392b), 0.2, 1.75, 0));
  const sigLampMat = new THREE.MeshStandardMaterial({
    color: 0xff5040,
    emissive: 0xff4030,
    emissiveIntensity: 0.3,
  });
  registry.emissives.push({ mat: sigLampMat, day: 0.3, night: 1.4 });
  const sigLamp = new THREE.Mesh(new THREE.SphereGeometry(0.055, 8, 6), sigLampMat);
  sigLamp.position.set(0.42, 1.75, 0);
  signal.add(sigLamp);
  signal.position.set(-14.85, 0.3, -5.4);
  g.add(signal);
  scene.add(g);
  return g;
}

// ---------- 道路与公路桥 ----------
function buildRoads(scene, river) {
  const g = new THREE.Group();
  scene.add(g);
  const roads = [
    { pts: [[-11.6, 0.9], [-4.6, 0.9], [-3.0, 2.2], [4.8, 2.2], [10.6, 2.2], [20.6, 2.2]], w: 1.5, y: 0.312 },
    { pts: [[-6.3, -7.6], [-6.3, 7.5]], w: 1.2, y: 0.314 },
    { pts: [[-13.0, 0.7], [-14.85, 0.7]], w: 0.9, y: 0.315 },
    { pts: [[12.6, 3.0], [12.6, -2.4], [11.3, -4.3]], w: 0.7, y: 0.315 },
    { pts: [[18.6, 2.2], [18.6, -11.4], [11.8, -11.9]], w: 1.2, y: 0.316 },
    { pts: [[18.6, 2.2], [18.6, 11.2], [11.0, 11.8]], w: 1.2, y: 0.318 },
  ];
  for (const r of roads) {
    const mesh = new THREE.Mesh(
      flatRibbon(r.pts.map(([x, z]) => ({ x, z })), r.y, r.w / 2),
      M.road
    );
    mesh.receiveShadow = true;
    g.add(mesh);
  }
  // 车站广场与喷泉小广场
  const pad1 = new THREE.Mesh(new THREE.PlaneGeometry(2.8, 3.4), M.paving);
  pad1.rotation.x = -Math.PI / 2;
  pad1.position.set(-10.2, 0.313, 1.1);
  pad1.receiveShadow = true;
  g.add(pad1);
  const pad2 = new THREE.Mesh(new THREE.CircleGeometry(1.35, 24), M.paving);
  pad2.rotation.x = -Math.PI / 2;
  pad2.position.set(-2.2, 0.313, -0.4);
  pad2.receiveShadow = true;
  g.add(pad2);

  // ---- 跨河公路桥 ----
  const bz = 2.2;
  const cx = river.crossXAt(bz);
  const deck = boxMesh(5.6, 0.26, 2.3, mat(0x8a7a68), cx, 0.172, bz);
  g.add(deck);
  for (const dz of [-1.08, 1.08]) {
    g.add(boxMesh(5.6, 0.3, 0.14, mat(0x8a4130), cx, 0.15, bz + dz));
    g.add(boxMesh(5.6, 0.05, 0.06, M.white, cx, 0.72, bz + dz));
    for (let i = -2; i <= 2; i++) {
      g.add(cylMesh(0.03, 0.035, 0.42, M.white, cx + i * 1.3, 0.51, bz + dz, 6));
    }
  }
  for (const dx of [-1.5, 1.5]) {
    g.add(boxMesh(0.55, 0.32, 1.0, M.stone, cx + dx, 0.0, bz));
  }
  return g;
}

// ---------- 树木（实例化） ----------
function buildTrees(scene) {
  const round = [
    [11.1, -6.8], [10.9, -4.2], [10.9, -1.0], [13.9, -3.3], [13.8, 4.9], [11.2, 5.8], [11.0, 7.6],
    [5.5, -7.0], [5.8, -4.6], [5.3, 4.9], [5.9, 7.4],
    [9.9, 7.8], [9.8, -7.6],
    [-10.0, -3.2], [-2.0, 5.2], [-9.4, 7.1], [-1.2, 0.2], [3.6, 2.0], [4.6, 6.9],
    [-19.5, -13.0], [-19.3, -10.4], [-19.6, -7.8], [-19.2, -5.2], [-19.5, -2.6], [-19.2, 0.4], [-19.6, 3.0], [-19.3, 5.6], [-19.5, 8.2], [-19.2, 10.8], [-19.6, 13.2],
    [-6.8, -13.4], [-4.2, -10.7], [-13.5, -14.0], [-9.8, -14.2], [6.5, -12.2], [11.6, -12.8],
    [-18.5, 12.4], [-15.2, 11.0], [-11.8, 13.2], [-8.4, 11.8], [-5.0, 13.4], [-1.6, 12.0], [1.8, 11.2], [4.6, 12.8], [3.7, 10.6],
    [20.5, -6.5], [20.8, 9.2], [20.6, 0.0],
  ];
  const pine = [
    [13.6, -7.4], [14.2, 7.0], [10.5, -7.9],
    [-19.4, -9.1], [-19.4, 1.7], [-19.4, 7.0], [-19.4, 12.0],
    [12.9, -13.3], [3.4, -12.6], [17.2, -7.8],
  ];

  const trunkGeo = new THREE.CylinderGeometry(0.09, 0.14, 0.75, 6);
  trunkGeo.translate(0, 0.375, 0);
  const trunkMat = mat(0x6b4a2f);
  const foliageMat = mat(0xffffff, { roughness: 0.95 });

  const all = [
    ...round.map((p) => ({ x: p[0], z: p[1], kind: 0 })),
    ...pine.map((p) => ({ x: p[0], z: p[1], kind: 1 })),
  ];

  const trunks = new THREE.InstancedMesh(trunkGeo, trunkMat, all.length);
  trunks.castShadow = true;
  trunks.receiveShadow = true;

  const blobGeo = new THREE.IcosahedronGeometry(0.62, 1);
  blobGeo.translate(0, 1.05, 0);
  const blob2Geo = new THREE.IcosahedronGeometry(0.4, 1);
  blob2Geo.translate(0.17, 1.55, 0.12);
  const blobA = new THREE.InstancedMesh(blobGeo, foliageMat, round.length);
  const blobB = new THREE.InstancedMesh(blob2Geo, foliageMat, round.length);
  blobA.castShadow = true;
  blobB.castShadow = true;

  const cone1 = new THREE.ConeGeometry(0.55, 0.95, 8);
  cone1.translate(0, 0.95, 0);
  const cone2 = new THREE.ConeGeometry(0.4, 0.8, 8);
  cone2.translate(0, 1.55, 0);
  const cone3 = new THREE.ConeGeometry(0.25, 0.6, 8);
  cone3.translate(0, 2.08, 0);
  const pinesA = new THREE.InstancedMesh(cone1, foliageMat, pine.length);
  const pinesB = new THREE.InstancedMesh(cone2, foliageMat, pine.length);
  const pinesC = new THREE.InstancedMesh(cone3, foliageMat, pine.length);
  for (const pm of [pinesA, pinesB, pinesC]) pm.castShadow = true;

  const m = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const up = new THREE.Vector3(0, 1, 0);
  const scl = new THREE.Vector3();
  const pos = new THREE.Vector3();
  const col = new THREE.Color();

  all.forEach((t, i) => {
    const s = 0.85 + rng() * 0.4;
    pos.set(t.x, GRASS_Y, t.z);
    q.setFromAxisAngle(up, rng() * Math.PI * 2);
    scl.set(s * (0.9 + rng() * 0.25), s * (0.95 + rng() * 0.35), s * (0.9 + rng() * 0.25));
    m.compose(pos, q, scl);
    trunks.setMatrixAt(i, m);
  });
  round.forEach((p, i) => {
    const s = 0.85 + rng() * 0.4;
    pos.set(p[0], GRASS_Y, p[1]);
    q.setFromAxisAngle(up, rng() * Math.PI * 2);
    scl.set(s * (0.9 + rng() * 0.25), s * (0.95 + rng() * 0.35), s * (0.9 + rng() * 0.25));
    m.compose(pos, q, scl);
    blobA.setMatrixAt(i, m);
    m.compose(pos, q, rng() > 0.25 ? scl : scl.clone().multiplyScalar(0.001));
    blobB.setMatrixAt(i, m);
    col.setHSL(0.24 + rng() * 0.08, 0.42 + rng() * 0.16, 0.3 + rng() * 0.12);
    blobA.setColorAt(i, col);
    blobB.setColorAt(i, col);
  });
  pine.forEach((p, i) => {
    const s = 0.85 + rng() * 0.4;
    pos.set(p[0], GRASS_Y, p[1]);
    q.setFromAxisAngle(up, rng() * Math.PI * 2);
    scl.set(s, s * (0.95 + rng() * 0.3), s);
    m.compose(pos, q, scl);
    pinesA.setMatrixAt(i, m);
    pinesB.setMatrixAt(i, m);
    pinesC.setMatrixAt(i, m);
    col.setHSL(0.34 + rng() * 0.05, 0.35 + rng() * 0.12, 0.22 + rng() * 0.08);
    pinesA.setColorAt(i, col);
    pinesB.setColorAt(i, col);
    pinesC.setColorAt(i, col);
  });

  for (const im of [trunks, blobA, blobB, pinesA, pinesB, pinesC]) {
    im.instanceMatrix.needsUpdate = true;
    if (im.instanceColor) im.instanceColor.needsUpdate = true;
    scene.add(im);
  }
  return all.length;
}

// ---------- 灌木与花 ----------
function buildBushesAndFlowers(scene) {
  const bushAnchors = [
    [-9.9, 0.4], [-7.0, 2.0], [-4.0, 4.4], [-2.5, -2.2], [-10.4, 2.9], [-12.0, -2.6],
    [2.9, 3.6], [4.4, -2.4], [-0.5, -6.6], [3.2, -7.9], [-14.2, -8.4], [-13.0, 3.9],
    [12.0, 6.9], [14.1, -5.6], [8.9, -3.5], [6.6, 5.6],
    [16.4, -8.2], [20.3, 3.6], [13.9, 13.0], [-16.0, -12.6], [-2.9, -12.3], [8.0, 12.6],
    [-20.6, -3.4], [10.6, -10.8],
  ];
  const bushGeo = new THREE.IcosahedronGeometry(0.3, 1);
  bushGeo.translate(0, 0.22, 0);
  const bushMat = mat(0xffffff, { roughness: 0.95 });
  const bushes = new THREE.InstancedMesh(bushGeo, bushMat, bushAnchors.length);
  bushes.castShadow = true;
  const m = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const up = new THREE.Vector3(0, 1, 0);
  const col = new THREE.Color();
  bushAnchors.forEach((p, i) => {
    const s = 0.7 + rng() * 0.8;
    m.compose(
      new THREE.Vector3(p[0] + (rng() - 0.5) * 0.3, GRASS_Y, p[1] + (rng() - 0.5) * 0.3),
      q.setFromAxisAngle(up, rng() * Math.PI),
      new THREE.Vector3(s * (0.9 + rng() * 0.4), s * (0.7 + rng() * 0.4), s * (0.9 + rng() * 0.4))
    );
    bushes.setMatrixAt(i, m);
    col.setHSL(0.26 + rng() * 0.09, 0.4 + rng() * 0.2, 0.28 + rng() * 0.1);
    bushes.setColorAt(i, col);
  });
  bushes.instanceMatrix.needsUpdate = true;
  bushes.instanceColor.needsUpdate = true;
  scene.add(bushes);

  // 花：西栅带、喷泉环、公园
  const flowerPts = [];
  for (let z = -12.5; z <= 13; z += 0.85) flowerPts.push([-18.35 + (rng() - 0.5) * 0.4, z + (rng() - 0.5) * 0.3]);
  for (let a = 0; a < Math.PI * 2; a += 0.6) flowerPts.push([-2.2 + Math.cos(a) * 1.05, -0.4 + Math.sin(a) * 1.05]);
  flowerPts.push([12.9, 1.2], [13.3, -1.2], [11.9, -3.4], [-12.1, 2.2], [-12.4, -2.5]);
  const flowerGeo = new THREE.IcosahedronGeometry(0.06, 0);
  const flowerMat = mat(0xffffff, { roughness: 0.8 });
  const flowers = new THREE.InstancedMesh(flowerGeo, flowerMat, flowerPts.length);
  const palette = [0xe4572e, 0xf3d34a, 0xef8fb2, 0xf5f0e6, 0xd97ae4];
  flowerPts.forEach((p, i) => {
    m.compose(
      new THREE.Vector3(p[0], GRASS_Y + 0.06, p[1]),
      q.setFromAxisAngle(up, rng() * Math.PI),
      new THREE.Vector3(1, 0.8 + rng() * 0.6, 1)
    );
    flowers.setMatrixAt(i, m);
    col.setHex(palette[(rng() * palette.length) | 0]);
    flowers.setColorAt(i, col);
  });
  flowers.instanceMatrix.needsUpdate = true;
  flowers.instanceColor.needsUpdate = true;
  scene.add(flowers);
}

// ---------- 路灯与夜间点光源 ----------
function buildLamps(scene, registry) {
  const lampList = [
    [-11.5, 0.2, GRASS_Y], [-11.6, 2.7, GRASS_Y], [-8.6, 1.8, GRASS_Y], [-5.4, 3.1, GRASS_Y],
    [0.2, 3.1, GRASS_Y], [6.2, 3.05, 0.302], [13.0, 3.1, GRASS_Y], [18.9, 3.1, GRASS_Y],
    [-5.45, -3.2, GRASS_Y], [-5.45, 4.6, GRASS_Y], [17.85, -6.0, GRASS_Y], [17.85, 8.2, GRASS_Y],
    [12.5, -12.4, GRASS_Y],
  ];
  const glassMat = new THREE.MeshStandardMaterial({
    color: 0xfff2cc,
    emissive: 0xffd9a0,
    emissiveIntensity: 0,
  });
  registry.emissives.push({ mat: glassMat, day: 0, night: 2.8 });
  const glowMat = new THREE.MeshBasicMaterial({
    color: 0xffe3a8,
    transparent: true,
    opacity: 0,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  registry.opacities.push({ mat: glowMat, day: 0, night: 0.13 });
  const glowGeo = new THREE.ConeGeometry(0.55, 1.5, 12, 1, true);

  for (const [x, z, y] of lampList) {
    const pole = cylMesh(0.035, 0.05, 1.55, M.green, x, y + 0.775, z, 8);
    scene.add(pole);
    const cap = cylMesh(0.11, 0.05, 0.1, M.green, x, y + 1.66, z, 8);
    scene.add(cap);
    const glass = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.09, 0.2, 8), glassMat);
    glass.position.set(x, y + 1.55, z);
    scene.add(glass);
    const glow = new THREE.Mesh(glowGeo, glowMat);
    glow.position.set(x, y + 0.78, z);
    scene.add(glow);
  }

  // 夜间点光源（车站 / 喷泉 / 东岸 / 公园）
  const spots = [
    { p: [-14.2, 2.4, 0], night: 7, dist: 9 },
    { p: [-2.2, 2.0, -0.4], night: 3.5, dist: 6 },
    { p: [17.8, 2.2, 2.2], night: 4.5, dist: 7 },
    { p: [12.6, 1.8, -2.5], night: 3.5, dist: 6 },
  ];
  for (const s of spots) {
    const light = new THREE.PointLight(0xffc98a, 0, s.dist, 2);
    light.position.set(...s.p);
    scene.add(light);
    registry.lights.push({ light, day: 0, night: s.night });
  }
}

// ---------- 喷泉 / 长椅 / 人偶 / 田园 / 杂项 ----------
function buildProps(scene, river) {
  const g = new THREE.Group();
  scene.add(g);

  // 喷泉
  const fx = -2.2, fz = -0.4;
  g.add(cylMesh(0.85, 0.95, 0.32, M.stone, fx, GRASS_Y + 0.16, fz, 18));
  const water = new THREE.Mesh(new THREE.CircleGeometry(0.74, 18), river.waterMat);
  water.rotation.x = -Math.PI / 2;
  water.position.set(fx, GRASS_Y + 0.3, fz);
  g.add(water);
  g.add(cylMesh(0.09, 0.13, 0.5, M.stone, fx, GRASS_Y + 0.5, fz, 10));
  g.add(cylMesh(0.34, 0.42, 0.12, M.stone, fx, GRASS_Y + 0.8, fz, 12));
  const jet = new THREE.Mesh(
    new THREE.ConeGeometry(0.05, 0.4, 8),
    mat(0xbfe0ec, { transparent: true, opacity: 0.7 })
  );
  jet.position.set(fx, GRASS_Y + 1.0, fz);
  g.add(jet);

  // 长椅
  const bench = (x, z, ry) => {
    const b = new THREE.Group();
    b.add(boxMesh(0.56, 0.05, 0.22, M.trim, 0, 0.4, 0));
    b.add(boxMesh(0.56, 0.28, 0.04, M.trim, 0, 0.56, -0.1));
    for (const dx of [-0.22, 0.22]) b.add(boxMesh(0.05, 0.4, 0.18, M.green, dx, 0.2, 0));
    b.position.set(x, GRASS_Y, z);
    b.rotation.y = ry;
    g.add(b);
  };
  bench(-14.35, 1.6, -Math.PI / 2);
  bench(-14.35, -1.9, -Math.PI / 2);
  bench(12.25, -2.6, Math.PI / 2);

  // 人偶（木钉小人）
  const people = [
    [-14.35, 1.1, 0.78], [-14.42, -1.2, 0.78],
    [-10.0, 0.4, GRASS_Y], [-9.7, 1.9, GRASS_Y],
    [-2.2, 0.5, GRASS_Y], [19.2, 3.3, GRASS_Y],
  ];
  const shirts = [0xc0392b, 0x2980b9, 0x27ae60, 0x8e44ad, 0xd35400, 0x16a085];
  people.forEach((p, i) => {
    const body = cylMesh(0.085, 0.105, 0.34, mat(shirts[i % shirts.length]), p[0], p[2] + 0.17, p[1], 8);
    g.add(body);
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.088, 8, 6), mat(0xe8c39e));
    head.position.set(p[0], p[2] + 0.44, p[1]);
    head.castShadow = true;
    g.add(head);
  });

  // 北侧田地 + 草垛 + 栅栏
  const fieldTex = makeFieldTexture();
  const field = new THREE.Mesh(
    new THREE.PlaneGeometry(6.5, 2.7),
    new THREE.MeshStandardMaterial({ map: fieldTex, roughness: 1 })
  );
  field.rotation.x = -Math.PI / 2;
  field.position.set(-0.75, 0.302, -12.75);
  field.receiveShadow = true;
  g.add(field);
  for (const [bx, bz, r] of [[1.2, -12.2, 0.4], [0.2, -13.2, 1.2], [1.9, -13.3, 2.2]]) {
    const bale = cylMesh(0.26, 0.26, 0.42, mat(0xd9bd6e), bx, GRASS_Y + 0.26, bz, 12);
    bale.rotation.z = Math.PI / 2;
    bale.rotation.y = r;
    g.add(bale);
  }
  const fenceRun = (x0, z0, x1, z1) => {
    const dx = x1 - x0, dz = z1 - z0;
    const len = Math.hypot(dx, dz);
    const ry = Math.atan2(dx, dz);
    const n = Math.max(2, Math.round(len / 0.55));
    for (let i = 0; i <= n; i++) {
      g.add(boxMesh(0.045, 0.3, 0.045, M.white, x0 + (dx * i) / n, GRASS_Y + 0.15, z0 + (dz * i) / n, false));
    }
    for (const h of [0.34, 0.5]) {
      const rail = boxMesh(0.04, 0.045, len, M.white, (x0 + x1) / 2, GRASS_Y + h, (z0 + z1) / 2, false);
      rail.rotation.y = ry;
      g.add(rail);
    }
  };
  fenceRun(-4.0, -14.1, 2.5, -14.1);
  fenceRun(2.5, -14.1, 2.5, -11.4);
  fenceRun(2.5, -11.4, -4.0, -11.4);

  // 货棚旁木箱与木桶
  for (const [cx, cz] of [[-12.6, -7.4], [-12.1, -7.0], [-12.9, -6.6]]) {
    g.add(boxMesh(0.3, 0.3, 0.3, M.trim, cx, GRASS_Y + 0.15, cz));
  }
  for (const [bx, bz] of [[-12.35, -6.2], [-12.0, -6.5]]) {
    g.add(cylMesh(0.12, 0.13, 0.28, M.trim, bx, GRASS_Y + 0.14, bz, 10));
  }
  return g;
}

// ---------- 总装 ----------
export function buildTown(scene, river, registry) {
  const clockTex = makeClockTexture();
  makeStation(scene, registry);
  buildRoads(scene, river);
  buildTrees(scene);
  buildBushesAndFlowers(scene);
  buildLamps(scene, registry);
  buildProps(scene, river);

  const place = (mesh, x, z, ry = 0) => {
    mesh.position.set(x, GRASS_Y, z);
    mesh.rotation.y = ry;
    scene.add(mesh);
  };
  // 商铺与凉亭（主街北侧）
  place(makeShop(), -10.4, -0.9);
  place(makeShop(), -8.4, -0.9);
  place(makeKiosk(), -4.9, -0.9);
  // 镇公所（车站广场南侧）
  place(makeTownHall(clockTex), -10.4, 3.7, Math.PI);
  // 住宅
  const houses = [
    [-7.9, 3.3, Math.PI], [-3.5, 3.5, Math.PI],
    [-8.2, -3.1, Math.PI / 2], [-8.2, -5.5, Math.PI / 2], [-8.3, 5.4, Math.PI / 2],
    [-4.4, -3.3, -Math.PI / 2], [-4.4, -5.7, -Math.PI / 2], [-4.5, 4.9, -Math.PI / 2],
    [2.6, -0.7, 0], [0.9, -3.0, 0], [1.3, 5.3, Math.PI],
    [-13.5, -12.3, 0], [-9.8, -12.7, 0],
    [18.9, -3.2, 0], [18.7, 6.4, 0],
  ];
  for (const [x, z, ry] of houses) place(makeHouse(), x, z, ry);
  // 教堂 / 工厂 / 货棚 / 谷仓
  place(makeChurch(), -1.6, -5.0);
  place(makeFactory(), 1.6, -6.6);
  place(makeGoodsShed(), -13.3, -6.0, -Math.PI / 2);
  place(makeBarn(), 11.4, 13.0, Math.PI);

  registry.emissives.push({ mat: M.winLit, day: 0, night: 1.6 });
}
