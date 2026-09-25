import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import './style.css';

const canvas = document.querySelector('#scene');
const loading = document.querySelector('#loading');

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0xd69a79, 0.0105);

const camera = new THREE.PerspectiveCamera(42, window.innerWidth / window.innerHeight, 0.1, 180);
camera.position.set(31, 25, 39);

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 0);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.13;

const controls = new OrbitControls(camera, canvas);
controls.target.set(0, 3.1, -1.5);
controls.enableDamping = true;
controls.dampingFactor = 0.055;
controls.minDistance = 16;
controls.maxDistance = 85;
controls.minPolarAngle = 0.42;
controls.maxPolarAngle = Math.PI * 0.48;
controls.autoRotate = true;
controls.autoRotateSpeed = 0.22;
controls.update();

const hemi = new THREE.HemisphereLight(0xffd6c1, 0x385b49, 2.1);
scene.add(hemi);

const sun = new THREE.DirectionalLight(0xffc887, 3.5);
sun.position.set(-26, 38, 21);
sun.castShadow = true;
sun.shadow.mapSize.set(1024, 1024);
sun.shadow.camera.left = -42;
sun.shadow.camera.right = 42;
sun.shadow.camera.top = 42;
sun.shadow.camera.bottom = -42;
sun.shadow.camera.near = 1;
sun.shadow.camera.far = 90;
sun.shadow.bias = -0.00018;
sun.target.position.set(0, 0, -2);
scene.add(sun, sun.target);

const materials = {
  grass: new THREE.MeshStandardMaterial({ color: '#4f7b58', roughness: 0.96 }),
  grassLight: new THREE.MeshStandardMaterial({ color: '#6b925c', roughness: 0.95 }),
  grassDark: new THREE.MeshStandardMaterial({ color: '#3e664c', roughness: 1 }),
  stone: new THREE.MeshStandardMaterial({ color: '#aeb1a0', roughness: 0.94 }),
  stoneLight: new THREE.MeshStandardMaterial({ color: '#d1cdb7', roughness: 0.88 }),
  stoneDark: new THREE.MeshStandardMaterial({ color: '#727b78', roughness: 0.98 }),
  paving: new THREE.MeshStandardMaterial({ color: '#b8ae90', roughness: 0.96 }),
  pavingAlt: new THREE.MeshStandardMaterial({ color: '#8d947f', roughness: 1 }),
  wallRed: new THREE.MeshStandardMaterial({ color: '#a84232', roughness: 0.79 }),
  wallShade: new THREE.MeshStandardMaterial({ color: '#742f2a', roughness: 0.9 }),
  wood: new THREE.MeshStandardMaterial({ color: '#6f3929', roughness: 0.72 }),
  woodDark: new THREE.MeshStandardMaterial({ color: '#3f2926', roughness: 0.82 }),
  roofTeal: new THREE.MeshStandardMaterial({ color: '#1e5d60', roughness: 0.67, metalness: 0.06 }),
  roofBlue: new THREE.MeshStandardMaterial({ color: '#164548', roughness: 0.72, metalness: 0.05 }),
  roofRidge: new THREE.MeshStandardMaterial({ color: '#d79b42', roughness: 0.48, metalness: 0.16 }),
  gold: new THREE.MeshStandardMaterial({ color: '#e6b45a', roughness: 0.44, metalness: 0.18 }),
  paper: new THREE.MeshStandardMaterial({ color: '#f5c76f', emissive: '#b75b28', emissiveIntensity: 0.32, roughness: 0.78 }),
  lantern: new THREE.MeshStandardMaterial({ color: '#c84332', emissive: '#9e2a20', emissiveIntensity: 0.52, roughness: 0.62 }),
  window: new THREE.MeshStandardMaterial({ color: '#293d3d', emissive: '#4c3929', emissiveIntensity: 0.32, roughness: 0.58 }),
  leaf: new THREE.MeshStandardMaterial({ color: '#567d48', roughness: 0.96 }),
  leafLight: new THREE.MeshStandardMaterial({ color: '#7d9a52', roughness: 0.95 }),
  trunk: new THREE.MeshStandardMaterial({ color: '#60402c', roughness: 1 }),
  water: new THREE.MeshStandardMaterial({ color: '#487e87', roughness: 0.24, metalness: 0.14 }),
};

const unitBox = new THREE.BoxGeometry(1, 1, 1);

class VoxelBatcher {
  constructor() {
    this.cells = new Map();
  }

  add(material, x, y, z, width = 1, height = 1, depth = 1, rotation = 0) {
    if (!this.cells.has(material)) this.cells.set(material, []);
    this.cells.get(material).push({ x, y, z, width, height, depth, rotation });
  }

  build(target) {
    const matrix = new THREE.Matrix4();
    const position = new THREE.Vector3();
    const scale = new THREE.Vector3();
    const rotation = new THREE.Quaternion();
    const axis = new THREE.Vector3(0, 1, 0);

    for (const [materialName, cells] of this.cells) {
      const mesh = new THREE.InstancedMesh(unitBox, materials[materialName], cells.length);
      mesh.instanceMatrix.setUsage(THREE.StaticDrawUsage);
      mesh.castShadow = materialName !== 'water';
      mesh.receiveShadow = materialName !== 'lantern' && materialName !== 'paper';

      cells.forEach((cell, index) => {
        position.set(cell.x, cell.y, cell.z);
        scale.set(cell.width, cell.height, cell.depth);
        rotation.setFromAxisAngle(axis, cell.rotation);
        matrix.compose(position, rotation, scale);
        mesh.setMatrixAt(index, matrix);
      });

      mesh.instanceMatrix.needsUpdate = true;
      mesh.computeBoundingSphere();
      target.add(mesh);
    }
  }
}

const voxels = new VoxelBatcher();
const box = (...args) => voxels.add(...args);
const lanternLights = [];

function seededRandom(seed) {
  let value = seed;
  return () => {
    value |= 0;
    value = (value + 0x6d2b79f5) | 0;
    let t = Math.imul(value ^ (value >>> 15), 1 | value);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function evenlySpaced(width, count) {
  if (count === 1) return [0];
  return Array.from({ length: count }, (_, index) => -width / 2 + 0.8 + index * ((width - 1.6) / (count - 1)));
}

function addPlaque(text, x, y, z, width = 3.2, height = 0.75) {
  const plaqueCanvas = document.createElement('canvas');
  plaqueCanvas.width = 768;
  plaqueCanvas.height = 180;
  const context = plaqueCanvas.getContext('2d');
  context.fillStyle = '#3d2924';
  context.fillRect(0, 0, plaqueCanvas.width, plaqueCanvas.height);
  context.strokeStyle = '#e4b65b';
  context.lineWidth = 14;
  context.strokeRect(12, 12, plaqueCanvas.width - 24, plaqueCanvas.height - 24);
  context.fillStyle = '#ffe3a5';
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.font = '900 92px "Noto Serif SC", "Songti SC", serif';
  context.fillText(text, plaqueCanvas.width / 2, plaqueCanvas.height / 2 + 4);

  const texture = new THREE.CanvasTexture(plaqueCanvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
  const plaque = new THREE.Mesh(
    new THREE.PlaneGeometry(width, height),
    new THREE.MeshBasicMaterial({ map: texture }),
  );
  plaque.position.set(x, y, z);
  scene.add(plaque);
}

function addPlatform(x, z, width, depth) {
  box('stoneDark', x, 0.12, z, width + 1.2, 0.24, depth + 1.2);
  box('stone', x, 0.31, z, width + 0.58, 0.16, depth + 0.58);
  box('stoneLight', x, 0.46, z, width - 0.15, 0.14, depth - 0.15);

  const front = z + depth / 2;
  box('stoneDark', x, 0.12, front + 0.9, width * 0.58, 0.24, 1.06);
  box('stone', x, 0.27, front + 0.56, width * 0.5, 0.14, 0.76);
}

function addFlyingCorners(x, y, z, width, depth, roofMaterial) {
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      const cornerX = x + sx * (width / 2 + 0.24);
      const cornerZ = z + sz * (depth / 2 + 0.24);
      box(roofMaterial, cornerX, y + 0.15, cornerZ, 0.92, 0.28, 0.92);
      box(roofMaterial, x + sx * (width / 2 + 0.72), y + 0.56, z + sz * (depth / 2 + 0.72), 0.44, 0.46, 0.44);
      box('roofRidge', x + sx * (width / 2 + 0.7), y + 0.83, z + sz * (depth / 2 + 0.7), 0.2, 0.22, 0.2);
    }
  }
}

function buildHipRoof(x, y, z, width, depth, levels = 4, primary = 'roofTeal', secondary = 'roofBlue') {
  for (let level = 0; level < levels; level += 1) {
    const layerWidth = Math.max(1.2, width - level * 1.18);
    const layerDepth = Math.max(1.2, depth - level * 1.08);
    const layerY = y + level * 0.42;
    box(level % 2 === 0 ? primary : secondary, x, layerY, z, layerWidth, 0.42, layerDepth);
    box('roofRidge', x, layerY + 0.235, z + layerDepth / 2, layerWidth + 0.06, 0.1, 0.14);
    box('roofRidge', x, layerY + 0.235, z - layerDepth / 2, layerWidth + 0.06, 0.1, 0.14);
    box('roofRidge', x + layerWidth / 2, layerY + 0.235, z, 0.14, 0.1, layerDepth);
    box('roofRidge', x - layerWidth / 2, layerY + 0.235, z, 0.14, 0.1, layerDepth);
  }

  const roofTop = y + levels * 0.42;
  box('roofRidge', x, roofTop, z, Math.max(1.2, width - levels * 1.16), 0.2, 0.35);
  addFlyingCorners(x, y, z, width, depth, primary);
  return roofTop;
}

function buildXieshanRoof(x, y, z, width, depth, levels = 4, primary = 'roofTeal', secondary = 'roofBlue') {
  for (let level = 0; level < levels; level += 1) {
    const layerWidth = Math.max(1.2, width - level * 0.22);
    const layerDepth = Math.max(1.1, depth - level * 1.16);
    const layerY = y + level * 0.42;
    box(level % 2 === 0 ? primary : secondary, x, layerY, z, layerWidth, 0.42, layerDepth);
    box('roofRidge', x, layerY + 0.235, z + layerDepth / 2, layerWidth + 0.08, 0.1, 0.14);
    box('roofRidge', x, layerY + 0.235, z - layerDepth / 2, layerWidth + 0.08, 0.1, 0.14);
  }

  const roofTop = y + levels * 0.42;
  box('roofRidge', x, roofTop, z, Math.max(1.1, width - 0.8), 0.22, 0.42);
  addFlyingCorners(x, y, z, width, depth, primary);
  return roofTop;
}

function addLantern(x, y, z, withLight = true) {
  box('gold', x, y + 0.66, z, 0.12, 0.56, 0.12);
  box('woodDark', x, y + 0.35, z, 0.72, 0.16, 0.72);
  box('lantern', x, y, z, 0.58, 0.65, 0.58);
  box('paper', x, y, z + 0.3, 0.33, 0.4, 0.06);
  box('woodDark', x, y - 0.38, z, 0.56, 0.12, 0.56);
  box('lantern', x, y - 0.66, z, 0.1, 0.48, 0.1);

  if (withLight) {
    const lanternLight = new THREE.PointLight(0xff8a51, 1.15, 7.5, 2);
    lanternLight.position.set(x, y, z + 0.25);
    scene.add(lanternLight);
    lanternLights.push(lanternLight);
  }
}

function buildHall({ name, x, z, width, depth, height, roof = 'hip', columns = 5, plaque = true, lights = true }) {
  const baseY = 0.53;
  const facadeZ = z + depth / 2;
  const columnY = baseY + height / 2;
  const columnXs = evenlySpaced(width, columns).map((offset) => x + offset);

  addPlatform(x, z, width, depth);
  box('wallRed', x, columnY, z, width - 1.1, height, depth - 1.1);
  box('wallShade', x, baseY + 0.3, z, width - 0.84, 0.58, depth - 0.84);

  const doorWidth = Math.min(3.4, width * 0.34);
  box('woodDark', x, baseY + 1.38, facadeZ + 0.05, doorWidth, 2.45, 0.13);
  box('gold', x, baseY + 1.38, facadeZ + 0.13, 0.1, 2.3, 0.08);
  box('gold', x, baseY + 2.5, facadeZ + 0.13, doorWidth - 0.26, 0.1, 0.08);

  columnXs.forEach((columnX) => {
    box('wood', columnX, columnY, facadeZ - 0.24, 0.58, height + 0.25, 0.58);
    box('wood', columnX, columnY, z - depth / 2 + 0.24, 0.58, height + 0.25, 0.58);
    box('gold', columnX, baseY + height - 0.38, facadeZ - 0.18, 0.95, 0.28, 0.62);
    box('woodDark', columnX, baseY + height - 0.03, facadeZ - 0.18, 0.72, 0.22, 0.7);
  });

  box('woodDark', x, baseY + height - 0.06, facadeZ - 0.16, width + 0.36, 0.35, 0.54);
  box('woodDark', x, baseY + height - 0.06, z - depth / 2 + 0.16, width + 0.36, 0.35, 0.54);

  const windowY = baseY + height * 0.55;
  const windowXs = evenlySpaced(width - 1.4, Math.max(2, columns - 1)).map((offset) => x + offset);
  windowXs.forEach((windowX) => {
    if (Math.abs(windowX - x) > doorWidth * 0.58) {
      box('window', windowX, windowY, facadeZ + 0.05, 1.15, 1.08, 0.1);
      box('gold', windowX, windowY, facadeZ + 0.12, 0.08, 1.04, 0.05);
      box('gold', windowX, windowY, facadeZ + 0.12, 1.1, 0.08, 0.05);
    }
  });

  const roofBase = baseY + height + 0.34;
  const roofHeight = roof === 'hip'
    ? buildHipRoof(x, roofBase, z, width + 1.5, depth + 1.45, 5)
    : buildXieshanRoof(x, roofBase, z, width + 1.5, depth + 1.45, 4);

  if (plaque) addPlaque(name, x, baseY + height - 0.98, facadeZ + 0.46, Math.min(3.8, width * 0.42));
  addLantern(x - doorWidth / 2 - 0.66, baseY + height * 0.52, facadeZ + 0.75, lights);
  addLantern(x + doorWidth / 2 + 0.66, baseY + height * 0.52, facadeZ + 0.75, lights);
  return roofHeight;
}

function buildGate() {
  const x = 0;
  const z = 17;
  const width = 11.8;
  const depth = 4.3;
  const baseY = 0.53;
  const facadeZ = z + depth / 2;
  addPlatform(x, z, width, depth);

  const posts = [-5.0, -1.75, 1.75, 5.0];
  posts.forEach((offset) => {
    box('wallRed', x + offset, baseY + 1.95, z, 0.72, 3.9, 0.72);
    box('woodDark', x + offset, baseY + 2.0, facadeZ - 0.3, 0.88, 4.04, 0.35);
    box('gold', x + offset, baseY + 3.58, facadeZ - 0.25, 1.0, 0.26, 0.54);
  });

  box('wallRed', x, baseY + 3.45, z, width - 0.75, 1.12, depth - 0.9);
  box('woodDark', x, baseY + 3.85, facadeZ - 0.3, width + 0.1, 0.4, 0.52);
  box('stone', x, baseY + 0.45, z, width - 0.7, 0.22, depth - 0.62);

  [-3.35, 0, 3.35].forEach((offset) => {
    box('woodDark', x + offset, baseY + 1.65, facadeZ - 0.03, 1.6, 2.0, 0.12);
    box('gold', x + offset, baseY + 1.65, facadeZ + 0.05, 0.08, 1.76, 0.06);
  });

  buildXieshanRoof(x, baseY + 4.22, z, width + 1.45, depth + 1.7, 4);
  addPlaque('云岫山门', x, baseY + 3.35, facadeZ + 0.42, 3.7);
  addLantern(-3.35, baseY + 2.18, facadeZ + 0.78);
  addLantern(3.35, baseY + 2.18, facadeZ + 0.78);
}

function buildPagoda(x, z, title) {
  const baseY = 0.53;
  addPlatform(x, z, 6.2, 6.2);
  let tierBase = baseY;

  for (let tier = 0; tier < 4; tier += 1) {
    const size = 5.45 - tier * 0.78;
    const bodyHeight = 1.72;
    const facadeZ = z + size / 2 - 0.18;
    box('wallRed', x, tierBase + bodyHeight / 2, z, size - 0.72, bodyHeight, size - 0.72);
    box('wallShade', x, tierBase + 0.22, z, size - 0.58, 0.42, size - 0.58);
    box('window', x, tierBase + 0.97, facadeZ + 0.05, Math.max(1.0, size * 0.4), 0.82, 0.1);
    box('gold', x, tierBase + 0.97, facadeZ + 0.12, 0.08, 0.8, 0.04);

    for (const sx of [-1, 1]) {
      for (const sz of [-1, 1]) {
        box('wood', x + sx * (size / 2 - 0.48), tierBase + bodyHeight / 2, z + sz * (size / 2 - 0.48), 0.48, bodyHeight + 0.18, 0.48);
      }
    }

    buildHipRoof(x, tierBase + bodyHeight + 0.14, z, size + 0.82, size + 0.82, 3, tier % 2 === 0 ? 'roofTeal' : 'roofBlue');
    tierBase += 3.18;
  }

  box('gold', x, tierBase - 0.12, z, 0.48, 1.86, 0.48);
  box('roofRidge', x, tierBase + 0.74, z, 1.0, 0.28, 1.0);
  addPlaque(title, x, 2.1, z + 3.13, 2.15, 0.52);
}

function buildPavilion(x, z, title) {
  const baseY = 0.53;
  addPlatform(x, z, 4.3, 4.3);
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      box('wood', x + sx * 1.55, baseY + 1.6, z + sz * 1.55, 0.44, 3.2, 0.44);
      box('gold', x + sx * 1.55, baseY + 2.82, z + sz * 1.55, 0.78, 0.22, 0.68);
    }
  }
  box('woodDark', x, baseY + 3.0, z, 4.2, 0.34, 4.2);
  buildHipRoof(x, baseY + 3.25, z, 5.25, 5.25, 4, 'roofTeal', 'roofBlue');
  box('gold', x, baseY + 5.22, z, 0.34, 0.95, 0.34);
  addPlaque(title, x, baseY + 2.18, z + 1.95, 1.65, 0.42);
}

function buildStoneLion(x, z) {
  box('stoneDark', x, 0.25, z, 1.24, 0.5, 1.12);
  box('stone', x, 0.72, z - 0.06, 0.82, 0.55, 0.92);
  box('stoneLight', x, 1.23, z + 0.14, 0.72, 0.62, 0.62);
  box('stone', x - 0.28, 0.48, z + 0.39, 0.25, 0.4, 0.25);
  box('stone', x + 0.28, 0.48, z + 0.39, 0.25, 0.4, 0.25);
  box('stoneDark', x, 1.18, z + 0.46, 0.18, 0.18, 0.16);
}

function buildTree(x, z, height = 3.8, scale = 1, seed = 1) {
  const random = seededRandom(seed);
  box('trunk', x, height / 2, z, 0.5 * scale, height, 0.5 * scale);
  box('trunk', x + 0.35 * scale, height * 0.55, z - 0.15 * scale, 0.26 * scale, height * 0.5, 0.26 * scale, -0.42);

  const layers = [
    { y: height * 0.75, radius: 1.85 },
    { y: height * 1.04, radius: 1.56 },
    { y: height * 1.3, radius: 1.12 },
  ];

  layers.forEach((layer, layerIndex) => {
    for (let leaf = 0; leaf < 7; leaf += 1) {
      const angle = (Math.PI * 2 * leaf) / 7 + random() * 0.22;
      const radius = layer.radius * scale * (0.6 + random() * 0.42);
      box(
        (leaf + layerIndex) % 3 === 0 ? 'leafLight' : 'leaf',
        x + Math.cos(angle) * radius * 0.54,
        layer.y + (random() - 0.5) * 0.38,
        z + Math.sin(angle) * radius * 0.54,
        (0.94 + random() * 0.36) * scale,
        (0.68 + random() * 0.32) * scale,
        (0.94 + random() * 0.36) * scale,
      );
    }
  });
}

function pavedRect(x, z, width, depth, offset = 0) {
  const cols = Math.ceil(width / 0.96);
  const rows = Math.ceil(depth / 0.96);
  for (let column = 0; column < cols; column += 1) {
    for (let row = 0; row < rows; row += 1) {
      const tileX = x + (column - (cols - 1) / 2) * 0.96;
      const tileZ = z + (row - (rows - 1) / 2) * 0.96;
      box((column + row + offset) % 4 === 0 ? 'pavingAlt' : 'paving', tileX, 0.05, tileZ, 0.9, 0.1, 0.9);
    }
  }
}

function addPond(x, z) {
  box('stoneDark', x, 0.02, z, 5.4, 0.14, 4.5);
  box('stone', x, 0.11, z, 5.0, 0.08, 4.1);
  box('water', x, 0.17, z, 4.58, 0.08, 3.68);
  [-1.8, 1.8].forEach((offset) => {
    box('leafLight', x + offset, 0.38, z + 1.35, 0.22, 0.6, 0.22);
    box('leaf', x + offset + 0.18, 0.5, z + 1.35, 0.52, 0.18, 0.28);
  });
}

function buildPerimeter() {
  for (let x = -31; x <= 31; x += 2.2) {
    box('stoneDark', x, 0.32, -26.2, 2.04, 0.64, 0.5);
    box('wallShade', x, 1.04, -26.2, 2.0, 0.82, 0.42);
  }
  for (const side of [-1, 1]) {
    for (let z = -23.8; z <= 23.8; z += 2.2) {
      box('stoneDark', side * 31.2, 0.32, z, 0.5, 0.64, 2.04);
      box('wallShade', side * 31.2, 1.04, z, 0.42, 0.82, 2.0);
    }
  }
}

function buildGround() {
  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(90, 84),
    new THREE.MeshStandardMaterial({ color: '#4b7254', roughness: 1 }),
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -0.19;
  ground.receiveShadow = true;
  scene.add(ground);

  const random = seededRandom(19);
  for (let gx = -13; gx <= 13; gx += 1) {
    for (let gz = -12; gz <= 12; gz += 1) {
      const color = (gx + gz) % 5 === 0 || random() > 0.72 ? 'grassLight' : 'grass';
      box(color, gx * 3, -0.1, gz * 3, 2.95, 0.14, 2.95);
    }
  }

  pavedRect(0, 4.0, 11.4, 23.2, 1);
  pavedRect(0, 19.2, 5.0, 10.2, 2);
  pavedRect(-13, 2.0, 7.6, 4.2, 3);
  pavedRect(13, 2.0, 7.6, 4.2, 1);
  pavedRect(-13, -9.4, 15.6, 3.2, 0);
  pavedRect(13, -9.4, 15.6, 3.2, 2);
  pavedRect(-21, 7.7, 3.2, 8.6, 0);
  pavedRect(21, 7.7, 3.2, 8.6, 1);
  addPond(-22.3, 0.7);
  addPond(22.3, 0.7);
  buildPerimeter();
}

buildGround();

buildHall({
  name: '大雄宝殿',
  x: 0,
  z: -13,
  width: 17.4,
  depth: 10.2,
  height: 5.45,
  roof: 'hip',
  columns: 7,
});

buildHall({
  name: '东配殿',
  x: 13,
  z: 2,
  width: 8.2,
  depth: 7.2,
  height: 3.88,
  roof: 'xieshan',
  columns: 4,
  lights: false,
});

buildHall({
  name: '西配殿',
  x: -13,
  z: 2,
  width: 8.2,
  depth: 7.2,
  height: 3.88,
  roof: 'xieshan',
  columns: 4,
  lights: false,
});

buildGate();
buildPagoda(-21, -13, '钟楼');
buildPagoda(21, -13, '鼓楼');
buildPavilion(-21, 11.6, '听松亭');
buildPavilion(21, 11.6, '观澜亭');

buildStoneLion(-4.65, 20.1);
buildStoneLion(4.65, 20.1);

const treeData = [
  [-26.4, 13.6, 4.7, 1.1, 1], [26.4, 13.6, 4.7, 1.1, 2],
  [-26.7, 4.2, 4.3, 1.0, 3], [26.7, 4.2, 4.3, 1.0, 4],
  [-25.8, -4.5, 4.1, 1.0, 5], [25.8, -4.5, 4.1, 1.0, 6],
  [-8.3, 12.0, 3.6, 0.8, 7], [8.3, 12.0, 3.6, 0.8, 8],
  [-29.0, -18.5, 4.7, 1.1, 9], [29.0, -18.5, 4.7, 1.1, 10],
];
treeData.forEach(([x, z, height, scale, seed]) => buildTree(x, z, height, scale, seed));

for (const x of [-7.2, -4.8, 4.8, 7.2]) {
  addLantern(x, 2.55, 8.5, false);
}

voxels.build(scene);

const fillLight = new THREE.PointLight(0x9fd1d0, 1.0, 35, 2);
fillLight.position.set(0, 12, -5);
scene.add(fillLight);

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.setSize(window.innerWidth, window.innerHeight);
});

let shadowMapFrozen = false;

renderer.setAnimationLoop((time) => {
  const seconds = time * 0.001;
  lanternLights.forEach((light, index) => {
    light.intensity = 1.02 + Math.sin(seconds * 2.1 + index * 1.7) * 0.16;
  });
  controls.update();
  renderer.render(scene, camera);
  if (!shadowMapFrozen) {
    renderer.shadowMap.autoUpdate = false;
    shadowMapFrozen = true;
  }
});

requestAnimationFrame(() => {
  loading.classList.add('ready');
});
