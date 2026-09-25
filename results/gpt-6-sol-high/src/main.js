import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import './style.css';

const canvas = document.querySelector('#scene');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.38;

const scene = new THREE.Scene();
scene.background = new THREE.Color('#788698');
scene.fog = new THREE.FogExp2('#a69387', 0.0028);

const camera = new THREE.OrthographicCamera(-64, 64, 42, -42, 0.1, 500);
const initialCamera = new THREE.Vector3(83, 84, 110);
const initialTarget = new THREE.Vector3(0, 0, 0);
camera.position.copy(initialCamera);
camera.lookAt(initialTarget);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.copy(initialTarget);
controls.enableDamping = true;
controls.dampingFactor = 0.07;
controls.minPolarAngle = 0.26;
controls.maxPolarAngle = 1.38;
controls.minZoom = 0.65;
controls.maxZoom = 3.4;
controls.enablePan = true;
controls.maxDistance = 260;

const colors = {
  grass: '#78866b', grass2: '#849073', grassDark: '#66775b', earth: '#626a57',
  stone: '#b9b1a0', stoneLight: '#d1c6ae', stoneDark: '#8f8e82', paving: '#a9a99b',
  pavingAlt: '#bab5a5', red: '#9d3b32', redLight: '#b24a37', redDark: '#6f302b',
  wood: '#70483a', woodLight: '#9f6c45', woodDark: '#432e2a',
  blue: '#355c62', blueLight: '#4c7379', blueDark: '#29464f',
  gold: '#d8a24d', goldLight: '#edc678', goldDark: '#a5723d',
  white: '#e2d8bf', window: '#262f32', foliage: '#466c56', foliage2: '#5b7b56',
  foliageLight: '#7d9865', trunk: '#594433', water: '#7e9c98',
};

// One InstancedMesh per color keeps the many small voxel blocks inexpensive to draw.
const batches = new Map();
function block(x, y, z, w, h, d, color) {
  if (!batches.has(color)) batches.set(color, []);
  batches.get(color).push([x, y, z, w, h, d]);
}
function row(x1, x2, y, z, h, d, color) { block((x1 + x2) / 2, y, z, x2 - x1, h, d, color); }
function column(x, z, yBottom, height, width = 0.52, color = colors.red) {
  block(x, yBottom + height / 2, z, width, height, width, color);
  block(x, yBottom + 0.13, z, width + 0.26, 0.26, width + 0.26, colors.stoneDark);
  block(x, yBottom + height - 0.15, z, width + 0.22, 0.3, width + 0.22, colors.goldDark);
}

function platform(cx, cz, w, d, height = 1.1) {
  block(cx, height / 2, cz, w, height, d, colors.stone);
  block(cx, height + 0.15, cz, w + 1.3, 0.3, d + 1.3, colors.stoneLight);
  block(cx, 0.22, cz, w + 2.4, 0.44, d + 2.4, colors.stoneDark);
  // Centered flight of stairs faces the main axis.
  const stepW = Math.min(w * 0.38, 7.2);
  for (let i = 0; i < 4; i++) {
    block(cx, 0.13 + i * 0.3, cz + d / 2 + 1.1 - i * 0.52, stepW, 0.26 + i * 0.56, 0.62, i % 2 ? colors.stoneLight : colors.stone);
  }
  for (const s of [-1, 1]) {
    block(cx + s * (stepW / 2 + 0.28), 0.74, cz + d / 2 + 0.35, 0.28, 1.05, 2.7, colors.stoneDark);
  }
}

function windowPanel(cx, y, z, w = 2.25, h = 2.45) {
  block(cx, y, z, w, h, 0.1, colors.window);
  block(cx, y + h / 2, z + 0.07, w + 0.16, 0.16, 0.17, colors.woodLight);
  block(cx, y - h / 2, z + 0.07, w + 0.16, 0.16, 0.17, colors.woodLight);
  for (const dx of [-w / 2, -w / 6, w / 6, w / 2]) block(cx + dx, y, z + 0.08, 0.1, h, 0.14, colors.woodLight);
  for (const dy of [-h / 4, 0, h / 4]) block(cx, y + dy, z + 0.08, w, 0.1, 0.14, colors.woodLight);
  block(cx, y + 0.45, z + 0.1, w * 0.47, 0.14, 0.16, colors.goldDark);
}

function dougong(cx, cz, width, depth, y, spacing = 2.25) {
  for (let x = -width / 2 + 0.5; x <= width / 2; x += spacing) {
    for (const dz of [-depth / 2, depth / 2]) {
      block(cx + x, y, cz + dz, 0.42, 0.55, 1.15, colors.woodDark);
      block(cx + x, y + 0.33, cz + dz, 1.06, 0.2, 0.75, colors.goldDark);
      block(cx + x, y + 0.52, cz + dz, 1.32, 0.18, 0.54, colors.woodLight);
    }
  }
  for (let z = -depth / 2 + 1.1; z < depth / 2; z += spacing) {
    for (const dx of [-width / 2, width / 2]) {
      block(cx + dx, y, cz + z, 1.1, 0.48, 0.42, colors.woodDark);
      block(cx + dx, y + 0.34, cz + z, 0.77, 0.2, 1.1, colors.goldDark);
    }
  }
}

function roof(cx, cz, width, depth, baseY, type = 'blue', levels = 5) {
  const tile = type === 'gold' ? [colors.gold, colors.goldDark, colors.goldLight] : [colors.blue, colors.blueDark, colors.blueLight];
  block(cx, baseY - 0.16, cz, width + 1.4, 0.36, depth + 1.4, colors.woodDark);
  for (let layer = 0; layer < levels; layer++) {
    const inset = layer * 0.72;
    const rw = width - inset * 2;
    const rd = depth - inset * 1.58;
    const yy = baseY + layer * 0.58;
    block(cx, yy, cz, rw, 0.4, rd, tile[1]);
    // Alternating glazed tiles follow each roof terrace.
    for (let x = -rw / 2 + 0.4; x < rw / 2; x += 0.82) {
      for (let z = -rd / 2 + 0.4; z < rd / 2; z += 0.9) {
        block(cx + x, yy + 0.25, cz + z, 0.67, 0.12, 0.72, (Math.round(x * 3 + z * 5) % 7 === 0) ? tile[2] : tile[0]);
      }
    }
    // Strong horizontal eave lines make the silhouette read as a Chinese roof.
    for (const s of [-1, 1]) {
      block(cx, yy + 0.1, cz + s * rd / 2, rw + 0.48, 0.23, 0.42, tile[2]);
      block(cx + s * rw / 2, yy + 0.1, cz, 0.42, 0.23, rd + 0.48, tile[2]);
    }
  }
  const topY = baseY + (levels - 1) * 0.58 + 0.4;
  block(cx, topY, cz, width - levels * 1.35, 0.6, 0.72, tile[1]);
  for (let x = -width / 2 + levels * 0.68; x <= width / 2 - levels * 0.68; x += 1.35) {
    block(cx + x, topY + 0.35, cz, 0.36, 0.34, 0.9, tile[2]);
  }
  // Upturned corner stacks and hanging bells.
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    for (let i = 0; i < 4; i++) block(cx + sx * (width / 2 + i * 0.39), baseY + 0.11 + i * 0.34, cz + sz * (depth / 2 + i * 0.36), 0.8, 0.32, 0.8, tile[i % 2]);
    block(cx + sx * (width / 2 + 1.3), baseY - 0.64, cz + sz * (depth / 2 + 1.15), 0.14, 0.85, 0.14, colors.goldDark);
    block(cx + sx * (width / 2 + 1.3), baseY - 1.13, cz + sz * (depth / 2 + 1.15), 0.3, 0.22, 0.3, colors.gold);
  }
}

function hall(cx, cz, w, d, opts = {}) {
  const { main = false, goldRoof = false, tall = false } = opts;
  const platformH = main ? 1.8 : 1.1;
  const wallH = tall ? 7.1 : (main ? 6.7 : 5.2);
  platform(cx, cz, w + 2.6, d + 2.1, platformH);
  const floor = platformH + 0.3;
  const wallY = floor + wallH / 2;
  block(cx, wallY, cz, w - 2.3, wallH, d - 1.65, colors.redDark);
  block(cx, floor + wallH - 0.43, cz, w + 0.5, 0.85, d + 0.45, colors.woodDark);
  for (const side of [-1, 1]) {
    block(cx, floor + 0.45, cz + side * (d / 2 - 0.38), w - 1.3, 0.9, 0.35, colors.red);
    block(cx, floor + wallH - 0.95, cz + side * (d / 2 - 0.38), w - 1.3, 0.45, 0.35, colors.woodLight);
  }
  const columns = main ? 6 : (w >= 15 ? 4 : 3);
  for (let i = 0; i <= columns; i++) {
    const x = cx - w / 2 + i * w / columns;
    for (const z of [cz - d / 2, cz + d / 2]) column(x, z, floor, wallH - 0.12, main ? 0.68 : 0.54);
  }
  for (const x of [cx - w / 2, cx + w / 2]) {
    for (let i = 1; i < 3; i++) column(x, cz - d / 2 + i * d / 3, floor, wallH - 0.12, 0.52);
  }
  const frontZ = cz + d / 2 - 0.1;
  const bayW = w / columns;
  for (let i = 0; i < columns; i++) {
    const x = cx - w / 2 + (i + 0.5) * bayW;
    const central = Math.abs(x - cx) < bayW * 1.1;
    if (central) {
      block(x, floor + 2.25, frontZ + 0.1, bayW - 0.28, 3.85, 0.14, colors.woodDark);
      for (const s of [-1, 1]) {
        block(x + s * (bayW - 0.55) / 4, floor + 2.22, frontZ + 0.2, 0.11, 3.5, 0.17, colors.woodLight);
        block(x + s * (bayW - 0.55) / 4, floor + 2.4, frontZ + 0.31, 0.12, 0.12, 0.12, colors.gold);
      }
      block(x, floor + 4.35, frontZ + 0.32, bayW - 0.65, 0.72, 0.25, colors.goldDark);
      block(x, floor + 4.35, frontZ + 0.47, bayW - 1.0, 0.1, 0.12, colors.goldLight);
    } else windowPanel(x, floor + 2.7, frontZ + 0.18, Math.min(bayW - 0.58, 2.4), 2.65);
  }
  dougong(cx, cz, w + 0.2, d + 0.2, floor + wallH - 0.25);
  roof(cx, cz, w + (main ? 5.5 : 4.2), d + 4.3, floor + wallH + 0.38, goldRoof ? 'gold' : 'blue', main ? 7 : 5);
  if (main) {
    // A low secondary roof gives the main hall its double-eave outline.
    roof(cx, cz, w + 7.0, d + 5.4, floor + wallH - 2.15, 'gold', 3);
  }
}

function pagoda(cx, cz) {
  platform(cx, cz, 10, 10, 1.1);
  block(cx, 5.3, cz, 5.3, 8.1, 5.3, colors.redDark);
  for (let level = 0; level < 3; level++) {
    const base = 1.4 + level * 5.1;
    const size = 9.5 - level * 1.3;
    block(cx, base + 1.8, cz, size - 2.2, 3.7, size - 2.2, colors.red);
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) column(cx + sx * (size / 2 - 1.1), cz + sz * (size / 2 - 1.1), base, 3.5, 0.42);
    for (const side of [-1, 1]) {
      windowPanel(cx, base + 2.0, cz + side * (size / 2 - 0.78), 1.35, 1.8);
    }
    dougong(cx, cz, size - 0.9, size - 0.9, base + 3.3, 2.1);
    roof(cx, cz, size + 1.0, size + 1.0, base + 3.86, 'blue', 3);
  }
  block(cx, 18.9, cz, 1.5, 2.2, 1.5, colors.goldDark);
  block(cx, 20.5, cz, 0.5, 1.4, 0.5, colors.goldLight);
  block(cx, 21.35, cz, 0.85, 0.35, 0.85, colors.gold);
}

function lantern(x, z, y) {
  block(x, y + 0.42, z, 0.11, 0.85, 0.11, colors.goldDark);
  block(x, y - 0.14, z, 0.74, 0.82, 0.74, colors.gold);
  block(x, y - 0.14, z, 0.5, 0.68, 0.78, '#f0bd72');
  block(x, y + 0.32, z, 0.98, 0.16, 0.98, colors.redDark);
  block(x, y - 0.61, z, 0.8, 0.16, 0.8, colors.redDark);
  block(x, y - 1.04, z, 0.12, 0.73, 0.12, colors.red);
}

function lampPost(x, z) {
  block(x, 2.3, z, 0.27, 4.6, 0.27, colors.woodDark);
  block(x, 4.55, z, 2.15, 0.18, 0.2, colors.woodDark);
  lantern(x - 0.75, z, 3.6);
  lantern(x + 0.75, z, 3.6);
}

function tree(x, z, scale = 1, variant = 0) {
  block(x, 1.6 * scale, z, 0.58 * scale, 3.2 * scale, 0.58 * scale, colors.trunk);
  const green = variant ? colors.foliage2 : colors.foliage;
  block(x, 3.6 * scale, z, 3.3 * scale, 2.2 * scale, 3.2 * scale, green);
  block(x - 1.05 * scale, 3.25 * scale, z, 2.0 * scale, 1.6 * scale, 2.65 * scale, colors.foliageLight);
  block(x + 1.05 * scale, 3.35 * scale, z + 0.25 * scale, 1.9 * scale, 1.8 * scale, 2.5 * scale, green);
  block(x, 4.9 * scale, z, 2.4 * scale, 1.1 * scale, 2.3 * scale, colors.foliage2);
  block(x, 5.45 * scale, z, 1.25 * scale, 0.65 * scale, 1.2 * scale, colors.foliageLight);
}

function stoneLion(x, z, facing = 1) {
  block(x, 0.55, z, 1.3, 1.1, 1.4, colors.stoneDark);
  block(x, 1.38, z, 0.9, 0.7, 0.95, colors.stoneLight);
  block(x, 2.02, z + facing * 0.18, 0.8, 0.8, 0.82, colors.stoneLight);
  block(x - 0.3, 2.1, z + facing * 0.51, 0.12, 0.12, 0.12, colors.woodDark);
  block(x + 0.3, 2.1, z + facing * 0.51, 0.12, 0.12, 0.12, colors.woodDark);
}

function path(cx, z1, z2, width) {
  const low = Math.min(z1, z2), high = Math.max(z1, z2);
  block(cx, 0.46, (low + high) / 2, width + 1.8, 0.18, high - low, colors.stoneDark);
  for (let z = low + 0.68; z < high; z += 1.42) {
    for (let x = -width / 2 + 0.64; x < width / 2; x += 1.4) {
      block(cx + x, 0.62, z, 1.25, 0.1, 1.24, ((Math.round(x + z) % 5) === 0) ? colors.pavingAlt : colors.paving);
    }
  }
}
function crossPath(z, x1, x2, width) {
  block((x1 + x2) / 2, 0.46, z, x2 - x1, 0.18, width + 1.8, colors.stoneDark);
  for (let x = x1 + 0.6; x < x2; x += 1.42) {
    for (let dz = -width / 2 + 0.6; dz < width / 2; dz += 1.4) {
      block(x, 0.62, z + dz, 1.24, 0.1, 1.24, ((Math.round(x + dz) % 6) === 0) ? colors.pavingAlt : colors.paving);
    }
  }
}

// Island, walls, paving and the symmetric palace axis.
block(0, -1.28, 0, 154, 2.5, 136, colors.earth);
block(0, -0.07, 0, 151, 0.12, 133, colors.grass);
for (let i = 0; i < 25; i++) {
  const z = -64 + i * 5.3;
  for (const side of [-1, 1]) block(side * (54 + (i % 3) * 5.8), 0.03, z, 4.5, 0.08, 3.4, i % 2 ? colors.grass2 : colors.grassDark);
}
block(0, 0.15, 0, 104, 0.28, 116, colors.stoneDark);
block(0, 0.32, 0, 101.7, 0.16, 113.7, colors.paving);
// Large inner lawns balance the long stone walks.
for (const side of [-1, 1]) {
  block(side * 22.3, 0.42, 12.4, 21, 0.15, 20, colors.grass2);
  block(side * 22.3, 0.39, 12.4, 22, 0.11, 21, colors.stoneDark);
  block(side * 22.3, 0.5, 12.4, 20.8, 0.09, 19.8, colors.grass);
  block(side * 22.3, 0.42, -27.8, 19, 0.14, 14, colors.grassDark);
}
path(0, -58, 58, 7.4);
crossPath(-3.5, -48, 48, 5.0);
crossPath(28, -48, 48, 5.0);
path(-31.5, -36, 39, 4.1);
path(31.5, -36, 39, 4.1);

// Perimeter wall: segmented red masonry, pale capstone and gold rooflets.
for (const side of [-1, 1]) {
  const x = side * 50;
  block(x, 3.4, 0, 1.5, 6.0, 111, colors.redDark);
  block(x, 6.58, 0, 2.2, 0.45, 112, colors.goldDark);
  for (let z = -54; z <= 54; z += 6) {
    block(x, 6.95, z, 2.5, 0.32, 5.4, colors.blue);
    block(x, 3.45, z, 2.0, 6.9, 1.2, colors.red);
    block(x, 0.7, z, 2.65, 1.4, 1.6, colors.stone);
  }
}
for (const z of [-56, 56]) {
  block(0, 3.3, z, 100, 6.0, 1.5, colors.redDark);
  block(0, 6.56, z, 101, 0.43, 2.3, colors.goldDark);
  for (let x = -48; x <= 48; x += 6) {
    if (z === 56 && Math.abs(x) < 16) continue;
    block(x, 6.95, z, 5.3, 0.3, 2.5, colors.blue);
    block(x, 3.4, z, 1.2, 6.8, 2.0, colors.red);
  }
}

// Eight buildings: main hall, four side halls, gate, and two pagodas.
hall(0, -37, 25, 13, { main: true, goldRoof: true });
hall(-25, -9, 15, 10);
hall(25, -9, 15, 10);
hall(-25, 20, 15, 10);
hall(25, 20, 15, 10);
hall(0, 43, 23, 8.2, { tall: true, goldRoof: true });
pagoda(-39, -39);
pagoda(39, -39);

// Axial balustrades, lamps, stone lions, small garden groves.
for (const side of [-1, 1]) {
  for (const z of [-25, -19, -13, 1, 8, 15, 36]) lampPost(side * 7.8, z);
  stoneLion(side * 6.7, 53.4);
  stoneLion(side * 8.4, -25.7);
  for (const [x, z, s] of [[13, 13, 1.15], [18, 8, 0.9], [29, 11, 1.0], [42, 13, 0.86], [42, 38, 1.2], [13, -21, 0.95], [34, -23, 1.0], [44, -10, 1.06], [43, 51, 0.72]]) tree(side * x, z, s, x % 2);
  for (const [x, z] of [[14, 16], [18, 17], [27, 15], [35, 15], [14, -29], [20, -29], [43, 2], [40, 31]]) {
    block(side * x, 0.55, z, 1.4, 0.2, 1.2, colors.foliageLight);
  }
}

// Extra trees around the raised precinct soften its rectangular silhouette.
for (let i = 0; i < 10; i++) {
  const z = -51 + i * 11;
  tree(-60 - (i % 2) * 4, z, 0.92 + (i % 3) * 0.12, i % 2);
  tree(60 + (i % 2) * 4, z, 0.92 + (i % 3) * 0.12, i % 2);
}
for (let i = 0; i < 9; i++) {
  const x = 9 + i * 7;
  tree(x, 64 + (i % 2) * 3, 0.7 + (i % 3) * 0.09, i % 2);
  tree(-x, 64 + (i % 2) * 3, 0.7 + (i % 3) * 0.09, i % 2);
}

const unitBox = new THREE.BoxGeometry(1, 1, 1);
const dummy = new THREE.Object3D();
for (const [color, blocks] of batches) {
  const material = new THREE.MeshStandardMaterial({ color, roughness: 0.88, metalness: 0.02 });
  const mesh = new THREE.InstancedMesh(unitBox, material, blocks.length);
  mesh.castShadow = ![colors.grass, colors.grass2, colors.grassDark, colors.paving, colors.pavingAlt].includes(color);
  mesh.receiveShadow = true;
  mesh.frustumCulled = false;
  blocks.forEach(([x, y, z, w, h, d], i) => {
    dummy.position.set(x, y, z);
    dummy.scale.set(w, h, d);
    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
  });
  mesh.instanceMatrix.needsUpdate = true;
  scene.add(mesh);
}

const ground = new THREE.Mesh(new THREE.PlaneGeometry(2000, 2000), new THREE.MeshStandardMaterial({ color: '#687b69', roughness: 1 }));
ground.rotation.x = -Math.PI / 2;
ground.position.y = -2.55;
ground.receiveShadow = true;
scene.add(ground);

const hemi = new THREE.HemisphereLight('#c6d5e4', '#7e6553', 2.0);
scene.add(hemi);
const sun = new THREE.DirectionalLight('#ffd4a0', 3.4);
sun.position.set(-60, 100, 65);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.left = -102;
sun.shadow.camera.right = 102;
sun.shadow.camera.top = 102;
sun.shadow.camera.bottom = -102;
sun.shadow.camera.near = 1;
sun.shadow.camera.far = 280;
sun.shadow.bias = -0.0004;
sun.shadow.normalBias = 0.03;
scene.add(sun);
const fill = new THREE.DirectionalLight('#7894a8', 1.2);
fill.position.set(45, 45, -55);
scene.add(fill);

function resize() {
  const width = window.innerWidth, height = window.innerHeight;
  renderer.setSize(width, height);
  const aspect = width / height;
  const narrow = aspect < 0.7;
  initialCamera.set(narrow ? 38 : 83, narrow ? 95 : 84, narrow ? 145 : 110);
  camera.position.copy(initialCamera);
  controls.target.copy(initialTarget);
  const viewHeight = Math.max(124, (narrow ? 192 : 215) / aspect);
  camera.left = -viewHeight * aspect / 2;
  camera.right = viewHeight * aspect / 2;
  camera.top = viewHeight / 2;
  camera.bottom = -viewHeight / 2;
  camera.updateProjectionMatrix();
  controls.update();
}
window.addEventListener('resize', resize);
resize();

document.querySelector('#reset-view').addEventListener('click', () => {
  camera.position.copy(initialCamera);
  camera.zoom = 1;
  camera.updateProjectionMatrix();
  controls.target.copy(initialTarget);
  controls.update();
});

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();
requestAnimationFrame(() => document.querySelector('#loading').classList.add('done'));
