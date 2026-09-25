import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import './style.css';

const app = document.querySelector('#app');
const buildingCount = document.querySelector('#building-count');
const voxelCountLabel = document.querySelector('#voxel-count');
const dawnButton = document.querySelector('#dawn-button');
const duskButton = document.querySelector('#dusk-button');
const orbitButton = document.querySelector('#orbit-button');

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x8fa7b8);
scene.fog = new THREE.Fog(0x8fa7b8, 66, 146);

const camera = new THREE.PerspectiveCamera(42, window.innerWidth / window.innerHeight, 0.1, 220);
camera.position.set(34, 36, 60);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.08;
app.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 4.2, 2);
controls.enableDamping = true;
controls.dampingFactor = 0.06;
controls.minDistance = 26;
controls.maxDistance = 92;
controls.maxPolarAngle = Math.PI * 0.485;
controls.minPolarAngle = Math.PI * 0.17;
controls.autoRotateSpeed = 0.22;

const palette = {
  red: new THREE.MeshStandardMaterial({ color: 0x883432, roughness: 0.86 }),
  redDark: new THREE.MeshStandardMaterial({ color: 0x541f25, roughness: 0.9 }),
  redDeep: new THREE.MeshStandardMaterial({ color: 0x3a1a22, roughness: 0.92 }),
  roof: new THREE.MeshStandardMaterial({ color: 0x315775, roughness: 0.72, metalness: 0.08 }),
  roofLight: new THREE.MeshStandardMaterial({ color: 0x4b7790, roughness: 0.7, metalness: 0.08 }),
  roofDark: new THREE.MeshStandardMaterial({ color: 0x1d344f, roughness: 0.82 }),
  wood: new THREE.MeshStandardMaterial({ color: 0x805133, roughness: 0.82 }),
  woodDark: new THREE.MeshStandardMaterial({ color: 0x4a3029, roughness: 0.9 }),
  gold: new THREE.MeshStandardMaterial({ color: 0xd7a94e, roughness: 0.52, metalness: 0.26 }),
  goldBright: new THREE.MeshStandardMaterial({ color: 0xf4ce7a, roughness: 0.45, metalness: 0.22 }),
  stone: new THREE.MeshStandardMaterial({ color: 0x89989c, roughness: 0.95 }),
  stoneLight: new THREE.MeshStandardMaterial({ color: 0xb3b4aa, roughness: 0.95 }),
  stoneDark: new THREE.MeshStandardMaterial({ color: 0x596b73, roughness: 0.97 }),
  path: new THREE.MeshStandardMaterial({ color: 0x7e8582, roughness: 0.96 }),
  pathLight: new THREE.MeshStandardMaterial({ color: 0xa4a49b, roughness: 0.94 }),
  grass: new THREE.MeshStandardMaterial({ color: 0x2e5148, roughness: 1 }),
  grassLight: new THREE.MeshStandardMaterial({ color: 0x3f6650, roughness: 1 }),
  trunk: new THREE.MeshStandardMaterial({ color: 0x533d2d, roughness: 1 }),
  leaf: new THREE.MeshStandardMaterial({ color: 0x264a42, roughness: 1 }),
  leafLight: new THREE.MeshStandardMaterial({ color: 0x4a6a4a, roughness: 1 }),
  lantern: new THREE.MeshStandardMaterial({
    color: 0xffb84b,
    emissive: 0xf07b27,
    emissiveIntensity: 1.2,
    roughness: 0.62,
  }),
  window: new THREE.MeshStandardMaterial({
    color: 0xffd78a,
    emissive: 0xf09b3c,
    emissiveIntensity: 0.65,
    roughness: 0.72,
  }),
};

const lanternGlows = [];
const animatedFireflies = [];
let voxelCount = 0;
let isDusk = false;

function vbox(parent, size, position, material, options = {}) {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(...size), material);
  mesh.position.set(...position);
  mesh.castShadow = options.castShadow ?? true;
  mesh.receiveShadow = options.receiveShadow ?? true;
  mesh.name = options.name || 'voxel';
  parent.add(mesh);
  voxelCount += 1;
  return mesh;
}

function addSteps(parent, width, depth, levels = 3, material = palette.stoneLight) {
  vbox(parent, [width + 1.6, 0.55, depth + 1.7], [0, 0.28, 0], palette.stone, { name: '台基' });
  for (let i = 0; i < levels; i += 1) {
    const amount = i * 0.65;
    vbox(parent, [width - amount, 0.34, 1.15], [0, 0.2 + i * 0.28, depth / 2 + 0.78 - i * 0.48], material, { name: '台阶' });
  }
}

function addRoof(parent, options = {}) {
  const width = options.width || 15;
  const depth = options.depth || 9;
  const baseY = options.y || 6;
  const levels = options.levels || 4;
  const material = options.material || palette.roof;
  const accent = options.accent || palette.roofDark;

  for (let i = 0; i < levels; i += 1) {
    const ratio = i / levels;
    const layerWidth = width - i * 1.72;
    const layerDepth = depth - i * 1.05;
    const layerY = baseY + i * 0.43;
    vbox(parent, [layerWidth, 0.43, layerDepth], [0, layerY, 0], i === 0 ? accent : material, { name: '飞檐屋面' });

    const cornerX = layerWidth / 2 + 0.42;
    const cornerZ = layerDepth / 2 + 0.34;
    const cornerY = layerY + 0.18 + ratio * 0.2;
    for (const x of [-cornerX, cornerX]) {
      for (const z of [-cornerZ, cornerZ]) {
        vbox(parent, [1.35, 0.48, 1.15], [x, cornerY, z], material, { name: '翘角' });
        vbox(parent, [0.55, 0.52, 0.55], [x + Math.sign(x) * 0.32, cornerY + 0.28, z + Math.sign(z) * 0.27], accent, { name: '檐角饰件' });
      }
    }
  }

  vbox(parent, [Math.max(width - 4.8, 3), 0.48, 0.72], [0, baseY + levels * 0.43 + 0.06, 0], accent, { name: '正脊' });
  vbox(parent, [1.05, 1.1, 0.96], [0, baseY + levels * 0.43 + 0.82, 0], palette.gold, { name: '脊饰' });
}

function addBeam(parent, width, y, z, material = palette.wood) {
  vbox(parent, [width, 0.48, 0.5], [0, y, z], material, { name: '横梁' });
}

function addWindow(parent, x, y, z, width = 2.2, height = 2.2) {
  vbox(parent, [width, height, 0.16], [x, y, z], palette.redDeep, { name: '窗芯' });
  vbox(parent, [width + 0.22, 0.18, 0.22], [x, y - height / 2, z + 0.1], palette.wood, { name: '窗框' });
  vbox(parent, [width + 0.22, 0.18, 0.22], [x, y + height / 2, z + 0.1], palette.wood, { name: '窗框' });
  vbox(parent, [0.18, height + 0.18, 0.22], [x - width / 2, y, z + 0.1], palette.wood, { name: '窗框' });
  vbox(parent, [0.18, height + 0.18, 0.22], [x + width / 2, y, z + 0.1], palette.wood, { name: '窗框' });
  for (const offset of [-0.31, 0.31]) {
    vbox(parent, [0.11, height - 0.24, 0.25], [x + offset, y, z + 0.16], palette.gold, { name: '窗棂' });
  }
  vbox(parent, [width - 0.2, 0.11, 0.25], [x, y, z + 0.16], palette.gold, { name: '窗棂' });
}

function addSign(parent, text, x, y, z, width = 4.4) {
  const board = vbox(parent, [width, 0.76, 0.24], [x, y, z], palette.gold, { name: '匾额' });
  const canvas = document.createElement('canvas');
  canvas.width = 640;
  canvas.height = 160;
  const context = canvas.getContext('2d');
  context.fillStyle = '#4a1c21';
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.strokeStyle = '#dfad55';
  context.lineWidth = 7;
  context.strokeRect(11, 11, canvas.width - 22, canvas.height - 22);
  context.fillStyle = '#f5d484';
  context.font = 'bold 84px "Microsoft YaHei", serif';
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillText(text, canvas.width / 2, canvas.height / 2 + 3);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(width - 0.34, 0.56),
    new THREE.MeshBasicMaterial({ map: texture, transparent: true }),
  );
  plane.position.set(x, y, z + 0.14);
  parent.add(plane);
  board.userData.label = text;
}

function createMainHall() {
  const group = new THREE.Group();
  group.name = '主殿 · 云岚殿';
  group.position.set(0, 0, -2);
  scene.add(group);

  addSteps(group, 16.5, 7.8, 4);
  vbox(group, [15.2, 5.35, 7], [0, 3.2, 0], palette.red, { name: '主殿墙体' });
  vbox(group, [15.5, 0.52, 7.2], [0, 0.82, 0], palette.redDark, { name: '墙脚' });

  for (const x of [-6.4, -3.2, 0, 3.2, 6.4]) {
    vbox(group, [0.56, 5.6, 0.56], [x, 3.35, 3.62], palette.wood, { name: '朱柱' });
    vbox(group, [0.76, 0.42, 0.76], [x, 5.84, 3.62], palette.gold, { name: '斗拱' });
  }

  vbox(group, [15.1, 0.45, 0.5], [0, 5.82, 3.64], palette.woodDark, { name: '前檐大梁' });
  vbox(group, [15.3, 0.3, 0.42], [0, 1.55, 3.64], palette.woodDark, { name: '门槛' });
  vbox(group, [5.15, 3.45, 0.18], [0, 2.95, 3.66], palette.redDeep, { name: '殿门' });
  vbox(group, [0.18, 3.2, 0.26], [0, 2.95, 3.83], palette.gold, { name: '门缝' });
  vbox(group, [0.2, 0.2, 0.3], [-1.7, 2.95, 3.88], palette.goldBright, { name: '门环' });
  vbox(group, [0.2, 0.2, 0.3], [1.7, 2.95, 3.88], palette.goldBright, { name: '门环' });
  addWindow(group, -4.45, 3.3, 3.67, 2.6, 2.35);
  addWindow(group, 4.45, 3.3, 3.67, 2.6, 2.35);
  addSign(group, '云 岚 殿', 0, 5.2, 3.9, 4.9);
  addBeam(group, 14.6, 5.35, -3.6, palette.woodDark);
  addRoof(group, { width: 19, depth: 10.3, y: 6.15, levels: 5, material: palette.roof, accent: palette.roofDark });

  // A second ridge makes the main hall read as a formal 歇山顶 from above.
  vbox(group, [9.8, 0.42, 0.54], [0, 8.38, 0], palette.gold, { name: '重脊' });
  for (const x of [-4.25, 4.25]) {
    vbox(group, [0.6, 0.56, 4.8], [x, 6.56, 0], palette.roofDark, { name: '瓦沟' });
  }
}

function createSideHall(x, z, title) {
  const group = new THREE.Group();
  group.name = `${title} · 配殿`;
  group.position.set(x, 0, z);
  scene.add(group);

  addSteps(group, 8.9, 5.7, 3);
  vbox(group, [8.2, 4.2, 5], [0, 2.65, 0], palette.red, { name: '配殿墙体' });
  vbox(group, [8.35, 0.42, 0.5], [0, 4.76, 2.62], palette.woodDark, { name: '配殿前梁' });
  for (const columnX of [-3.25, 0, 3.25]) {
    vbox(group, [0.48, 4.45, 0.48], [columnX, 2.78, 2.62], palette.wood, { name: '配殿朱柱' });
    vbox(group, [0.68, 0.35, 0.68], [columnX, 4.74, 2.65], palette.gold, { name: '配殿斗拱' });
  }
  addWindow(group, -2.1, 2.9, 2.68, 1.65, 1.75);
  addWindow(group, 2.1, 2.9, 2.68, 1.65, 1.75);
  addSign(group, title, 0, 4.13, 2.85, 3.2);
  addRoof(group, { width: 11.2, depth: 7.4, y: 5.08, levels: 4, material: palette.roofLight, accent: palette.roofDark });
}

function createGate() {
  const group = new THREE.Group();
  group.name = '山门';
  group.position.set(0, 0, 26);
  scene.add(group);

  addSteps(group, 15.8, 4.2, 2, palette.stoneLight);
  vbox(group, [3.4, 4.5, 1.75], [-5.4, 2.75, 0], palette.red, { name: '山门左墙' });
  vbox(group, [3.4, 4.5, 1.75], [5.4, 2.75, 0], palette.red, { name: '山门右墙' });
  vbox(group, [1.3, 5.25, 1.8], [-3.15, 3.15, 0], palette.redDark, { name: '山门门柱' });
  vbox(group, [1.3, 5.25, 1.8], [3.15, 3.15, 0], palette.redDark, { name: '山门门柱' });
  vbox(group, [6.2, 1.7, 1.8], [0, 5.05, 0], palette.red, { name: '山门横墙' });
  vbox(group, [4.8, 3.4, 0.18], [0, 2.2, 0.95], palette.redDeep, { name: '山门门扇' });
  vbox(group, [0.15, 3.1, 0.25], [0, 2.2, 1.1], palette.gold, { name: '门扇中缝' });
  for (const x of [-1.7, 1.7]) {
    vbox(group, [0.2, 0.2, 0.3], [x, 2.2, 1.16], palette.goldBright, { name: '门环' });
  }
  addSign(group, '云 岚 山 门', 0, 5.15, 1.02, 5.3);
  addRoof(group, { width: 17.7, depth: 5.4, y: 6.08, levels: 4, material: palette.roof, accent: palette.roofDark });
}

function createPagoda(x, z, title, kind) {
  const group = new THREE.Group();
  group.name = `${title} · ${kind === 'bell' ? '钟楼' : '鼓楼'}`;
  group.position.set(x, 0, z);
  scene.add(group);

  addSteps(group, 4.3, 4.3, 2);
  const tiers = 4;
  for (let i = 0; i < tiers; i += 1) {
    const y = 1.25 + i * 2.05;
    const body = 3.25 - i * 0.36;
    vbox(group, [body, 1.35, body], [0, y, 0], i % 2 === 0 ? palette.red : palette.redDark, { name: '塔身' });
    vbox(group, [body + 0.55, 0.34, body + 0.55], [0, y + 0.78, 0], palette.woodDark, { name: '塔檐底' });
    vbox(group, [body + 1.45, 0.42, body + 1.45], [0, y + 0.98, 0], palette.roofDark, { name: '塔檐' });
    for (const corner of [-1, 1]) {
      for (const axis of [-1, 1]) {
        const tip = (body + 1.45) / 2 + 0.35;
        vbox(group, [0.8, 0.46, 0.8], [corner * tip, y + 1.15, axis * tip], palette.roof, { name: '塔角翘檐' });
      }
    }
    addWindow(group, 0, y + 0.05, body / 2 + 0.04, Math.min(body * 0.56, 1.2), 0.72);
  }
  vbox(group, [0.66, 1.25, 0.66], [0, 9.95, 0], palette.gold, { name: '塔刹' });
  vbox(group, [0.28, 1.5, 0.28], [0, 11.25, 0], palette.goldBright, { name: '塔尖' });
  addSign(group, title, 0, 1.08, 2.33, 2.6);

  if (kind === 'bell') {
    const bell = new THREE.Mesh(new THREE.CylinderGeometry(0.72, 0.9, 0.92, 8), palette.gold);
    bell.position.set(0, 4.05, 1.9);
    bell.castShadow = true;
    group.add(bell);
    vbox(group, [0.2, 1.1, 0.2], [0, 4.92, 1.9], palette.woodDark, { name: '钟梁' });
  } else {
    const drum = new THREE.Mesh(new THREE.CylinderGeometry(0.72, 0.72, 1.35, 8), palette.gold);
    drum.rotation.z = Math.PI / 2;
    drum.position.set(0, 4.02, 1.9);
    drum.castShadow = true;
    group.add(drum);
    vbox(group, [1.75, 0.18, 0.18], [0, 4.02, 1.9], palette.woodDark, { name: '鼓架' });
  }
}

function addLantern(x, z, scale = 1) {
  const group = new THREE.Group();
  group.position.set(x, 0, z);
  group.scale.setScalar(scale);
  scene.add(group);
  vbox(group, [0.28, 2.6, 0.28], [0, 1.3, 0], palette.woodDark, { name: '灯柱' });
  vbox(group, [1.15, 0.2, 1.15], [0, 2.65, 0], palette.gold, { name: '灯檐' });
  vbox(group, [0.86, 0.9, 0.86], [0, 2.18, 0], palette.lantern, { name: '灯笼' });
  vbox(group, [0.56, 0.16, 0.56], [0, 1.68, 0], palette.gold, { name: '灯座' });
  const pointLight = new THREE.PointLight(0xffa64d, 0.48, 7, 2);
  pointLight.position.set(0, 2.3, 0.2);
  group.add(pointLight);
  lanternGlows.push({ material: palette.lantern, light: pointLight, phase: x * 0.13 + z * 0.07 });
}

function addStoneLion(x, z, mirror = 1) {
  const group = new THREE.Group();
  group.position.set(x, 0, z);
  group.scale.x = mirror;
  scene.add(group);
  vbox(group, [1.8, 0.48, 1.6], [0, 0.25, 0], palette.stoneLight, { name: '石狮台座' });
  vbox(group, [1.2, 1.22, 1.1], [0, 1.03, 0], palette.stone, { name: '石狮身' });
  vbox(group, [1.32, 0.9, 1.22], [0, 1.95, 0.1], palette.stoneLight, { name: '石狮头' });
  vbox(group, [0.46, 0.48, 0.48], [-0.58, 1.94, 0.2], palette.stone, { name: '石狮耳' });
  vbox(group, [0.46, 0.48, 0.48], [0.58, 1.94, 0.2], palette.stone, { name: '石狮耳' });
  vbox(group, [0.28, 0.28, 0.18], [-0.3, 1.98, 0.72], palette.stoneDark, { name: '石狮眼' });
  vbox(group, [0.28, 0.28, 0.18], [0.3, 1.98, 0.72], palette.stoneDark, { name: '石狮眼' });
  vbox(group, [0.55, 0.34, 0.25], [0, 1.66, 0.62], palette.stoneDark, { name: '石狮口' });
  for (const legX of [-0.42, 0.42]) {
    vbox(group, [0.42, 0.7, 0.48], [legX, 0.74, 0.35], palette.stoneLight, { name: '石狮腿' });
  }
}

function addTree(x, z, scale = 1, color = palette.leaf) {
  const group = new THREE.Group();
  group.position.set(x, 0, z);
  group.scale.setScalar(scale);
  scene.add(group);
  vbox(group, [0.58, 3.2, 0.58], [0, 1.6, 0], palette.trunk, { name: '树干' });
  vbox(group, [3.4, 1.25, 3.4], [0, 3.25, 0], color, { name: '树冠' });
  vbox(group, [2.65, 1.35, 2.65], [0, 4.25, 0], color, { name: '树冠' });
  vbox(group, [1.7, 1.2, 1.7], [0, 5.22, 0], color, { name: '树冠' });
}

function addPavingArea(x, z, width, depth, tile = 2.4, material = palette.path) {
  const columns = Math.max(1, Math.floor(width / tile));
  const rows = Math.max(1, Math.floor(depth / tile));
  const tileWidth = width / columns - 0.1;
  const tileDepth = depth / rows - 0.1;
  for (let column = 0; column < columns; column += 1) {
    for (let row = 0; row < rows; row += 1) {
      const tileX = x - width / 2 + (column + 0.5) * (width / columns);
      const tileZ = z - depth / 2 + (row + 0.5) * (depth / rows);
      const tileMaterial = (column + row) % 4 === 0 ? palette.pathLight : material;
      vbox(scene, [tileWidth, 0.14, tileDepth], [tileX, -0.07, tileZ], tileMaterial, { name: '铺地砖', castShadow: false });
    }
  }
}

function createGround() {
  vbox(scene, [92, 0.3, 86], [0, -0.3, 2], palette.grass, { name: '草地基底', castShadow: false });
  vbox(scene, [77, 0.12, 67], [0, -0.13, 4], palette.grassLight, { name: '院落草地', castShadow: false });
  addPavingArea(0, 5, 7.6, 51, 2.5, palette.path);
  addPavingArea(0, 20.5, 46, 11, 2.7, palette.path);
  addPavingArea(0, 3.8, 38, 4.8, 2.7, palette.path);
  addPavingArea(-13.7, 0, 7.2, 15, 2.3, palette.path);
  addPavingArea(13.7, 0, 7.2, 15, 2.3, palette.path);
  addPavingArea(0, -13, 31, 4.8, 2.4, palette.path);

  // Low garden borders keep the large courtyard from reading as a flat plane.
  for (const x of [-27, -22, 22, 27]) {
    for (const z of [-20, -11, 8, 16]) {
      vbox(scene, [3.2, 0.18, 1.6], [x, 0.08, z], palette.stoneDark, { name: '园林矮墙' });
    }
  }
}

function createDistantHills() {
  const hillMaterial = new THREE.MeshStandardMaterial({ color: 0x37575d, roughness: 1 });
  for (let i = 0; i < 8; i += 1) {
    const x = -48 + i * 13;
    const height = 9 + (i % 3) * 3;
    vbox(scene, [20, height, 8], [x, height / 2 - 0.2, -42 - (i % 2) * 3], hillMaterial, { name: '远山', castShadow: false });
  }
  for (const x of [-36, -31, 30, 36]) {
    addTree(x, -26 + Math.abs(x) * 0.06, 1.3, palette.leafLight);
  }
}

function createFireflies() {
  const positions = [];
  for (let i = 0; i < 34; i += 1) {
    const angle = i * 2.399;
    const radius = 18 + (i % 5) * 2.4;
    positions.push(
      Math.cos(angle) * radius,
      1.6 + (i % 7) * 0.58,
      Math.sin(angle) * radius - 1,
    );
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  const material = new THREE.PointsMaterial({ color: 0xffd992, size: 0.22, transparent: true, opacity: 0.75, sizeAttenuation: true });
  const points = new THREE.Points(geometry, material);
  points.name = '萤火';
  scene.add(points);
  for (let i = 0; i < positions.length / 3; i += 1) {
    animatedFireflies.push({ index: i, baseY: positions[i * 3 + 1], phase: i * 0.71 });
  }
  return points;
}

function createLighting() {
  const hemisphere = new THREE.HemisphereLight(0xb9d0db, 0x26333a, 2.15);
  hemisphere.name = '天空漫反射';
  scene.add(hemisphere);

  const sun = new THREE.DirectionalLight(0xffd3a0, 4.2);
  sun.name = '晨昏主光';
  sun.position.set(-31, 44, 30);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.camera.left = -58;
  sun.shadow.camera.right = 58;
  sun.shadow.camera.top = 58;
  sun.shadow.camera.bottom = -58;
  sun.shadow.camera.near = 1;
  sun.shadow.camera.far = 150;
  sun.shadow.bias = -0.00035;
  scene.add(sun);

  const rim = new THREE.DirectionalLight(0x7099c2, 0.82);
  rim.name = '冷色轮廓光';
  rim.position.set(35, 24, -38);
  scene.add(rim);

  const fill = new THREE.AmbientLight(0x394a5b, 0.42);
  fill.name = '建筑暗部补光';
  scene.add(fill);

  return { hemisphere, sun, rim, fill };
}

function setLighting(mode) {
  isDusk = mode === 'dusk';
  const colors = isDusk
    ? { background: 0x303b52, fog: 0x303b52, sky: 0x7886b0, ground: 0x1d2533, sun: 0xff9b66, sunIntensity: 3.25, rim: 0x6576bb, rimIntensity: 1.1, exposure: 1.0 }
    : { background: 0x8fa7b8, fog: 0x8fa7b8, sky: 0xc1d5dc, ground: 0x2b3b3c, sun: 0xffd3a0, sunIntensity: 4.2, rim: 0x7099c2, rimIntensity: 0.82, exposure: 1.08 };

  scene.background.setHex(colors.background);
  scene.fog.color.setHex(colors.fog);
  lighting.hemisphere.color.setHex(colors.sky);
  lighting.hemisphere.groundColor.setHex(colors.ground);
  lighting.sun.color.setHex(colors.sun);
  lighting.sun.intensity = colors.sunIntensity;
  lighting.rim.color.setHex(colors.rim);
  lighting.rim.intensity = colors.rimIntensity;
  renderer.toneMappingExposure = colors.exposure;

  for (const glow of lanternGlows) {
    glow.material.emissiveIntensity = isDusk ? 1.9 : 0.95;
    glow.light.intensity = isDusk ? 0.86 : 0.38;
  }
  dawnButton.classList.toggle('active', !isDusk);
  duskButton.classList.toggle('active', isDusk);
}

createGround();
createDistantHills();
createMainHall();
createSideHall(-17, 1, '清音');
createSideHall(17, 1, '听雨');
createGate();
createPagoda(-13, -14, '梵音', 'bell');
createPagoda(13, -14, '和鸣', 'drum');

for (const [x, z, scale] of [
  [-9.8, 21.5, 0.92],
  [9.8, 21.5, 0.92],
  [-25, 23, 0.82],
  [25, 23, 0.82],
  [-25, 8, 0.72],
  [25, 8, 0.72],
  [-25, -9, 0.76],
  [25, -9, 0.76],
]) {
  addLantern(x, z, scale);
}

addStoneLion(-8.2, 28.2, 1);
addStoneLion(8.2, 28.2, -1);

for (const [x, z, scale, color] of [
  [-28, 27, 1.05, palette.leaf],
  [28, 27, 1.05, palette.leaf],
  [-28, 1, 0.92, palette.leafLight],
  [28, 1, 0.92, palette.leafLight],
  [-28, -17, 1.08, palette.leaf],
  [28, -17, 1.08, palette.leaf],
]) {
  addTree(x, z, scale, color);
}

const fireflies = createFireflies();
const lighting = createLighting();
setLighting('dawn');

buildingCount.textContent = '06';
voxelCountLabel.textContent = String(voxelCount).padStart(3, '0');

dawnButton.addEventListener('click', () => setLighting('dawn'));
duskButton.addEventListener('click', () => setLighting('dusk'));
orbitButton.addEventListener('click', () => {
  controls.autoRotate = !controls.autoRotate;
  orbitButton.classList.toggle('active', controls.autoRotate);
  orbitButton.setAttribute('aria-pressed', String(controls.autoRotate));
});

const clock = new THREE.Clock();
function animate() {
  requestAnimationFrame(animate);
  const elapsed = clock.getElapsedTime();
  for (const glow of lanternGlows) {
    const pulse = 0.92 + Math.sin(elapsed * 2.2 + glow.phase) * 0.1;
    glow.light.intensity *= 0.985;
    const targetIntensity = (isDusk ? 0.86 : 0.38) * pulse;
    glow.light.intensity += (targetIntensity - glow.light.intensity) * 0.06;
    glow.material.emissiveIntensity = (isDusk ? 1.9 : 0.95) * pulse;
  }

  const position = fireflies.geometry.attributes.position;
  for (const firefly of animatedFireflies) {
    position.setY(firefly.index, firefly.baseY + Math.sin(elapsed * 0.75 + firefly.phase) * 0.32);
  }
  position.needsUpdate = true;
  fireflies.material.opacity = (isDusk ? 0.9 : 0.55) + Math.sin(elapsed * 1.4) * 0.08;

  controls.update();
  renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();
