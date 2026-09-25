import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import './style.css';

const mount = document.querySelector('#scene');
const smallScreen = window.matchMedia('(max-width: 800px)').matches;
const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, smallScreen ? 1.35 : 1.75));
renderer.setSize(mount.clientWidth, mount.clientHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.35;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
mount.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(42, mount.clientWidth / mount.clientHeight, 0.1, 650);
const initialTarget = new THREE.Vector3(0, 6, 0);
const baseCamera = new THREE.Vector3(60, 110, 170);
const compactDistance = 1.85;
let compactView = mount.clientWidth < 600;
const initialCamera = baseCamera.clone().sub(initialTarget)
  .multiplyScalar(compactView ? compactDistance : 1).add(initialTarget);
camera.position.copy(initialCamera);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.copy(initialTarget);
controls.enableDamping = true;
controls.dampingFactor = 0.055;
controls.autoRotate = true;
controls.autoRotateSpeed = 0.12;
controls.minDistance = 75;
controls.maxDistance = 500;
controls.maxPolarAngle = Math.PI * 0.47;
controls.minPolarAngle = 0.31;
controls.enablePan = false;
controls.update();

const palette = {
  earth: '#6e5d4c', earthDark: '#433d3a', grass: '#70806a', grassLight: '#84906d',
  stone: '#afa99a', stoneLight: '#d6ccba', stoneWarm: '#c8b8a1', stoneDark: '#7c817d',
  paver: '#beb9ad', paverWarm: '#d0c3ac', paverDark: '#a39f96',
  red: '#a8493d', redLight: '#c65f49', deepRed: '#713b37',
  wood: '#72463a', woodLight: '#a76c4e', door: '#443939', window: '#2e3c42',
  gold: '#cba35e', goldBright: '#edc77d', ivory: '#e7dac1',
  roofGold: '#c69c4e', roofGoldLight: '#e3b75f', roofGoldDark: '#886846',
  roofTeal: '#478482', roofTealLight: '#6b9c96', roofTealDark: '#2c535b',
  foliage: '#546f59', foliageLight: '#81936a', foliageDark: '#3e5a53',
  foliageGold: '#bb8c50', foliageCopper: '#a56848', trunk: '#615047',
  lantern: '#ffc77a'
};

const materials = Object.fromEntries(Object.entries(palette).map(([name, color]) => {
  const luminous = name === 'lantern';
  const material = new THREE.MeshStandardMaterial({
    color,
    roughness: name.startsWith('roof') ? 0.74 : 0.9,
    metalness: name === 'gold' || name === 'goldBright' ? 0.12 : 0,
    emissive: luminous ? '#ff9b36' : '#000000',
    emissiveIntensity: luminous ? 1.8 : 0
  });
  return [name, material];
}));

class VoxelBatch {
  constructor() { this.blocks = new Map(); this.count = 0; }
  box(material, x, y, z, width, height, depth, rotation = 0) {
    if (!this.blocks.has(material)) this.blocks.set(material, []);
    this.blocks.get(material).push([x, y, z, width, height, depth, rotation]);
    this.count++;
  }
  place(originX, originZ, turn = 0) {
    const cos = Math.cos(turn);
    const sin = Math.sin(turn);
    return (material, x, y, z, width, height, depth, rotation = 0) => {
      this.box(material, originX + x * cos - z * sin, y, originZ + x * sin + z * cos,
        width, height, depth, turn + rotation);
    };
  }
  build() {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const dummy = new THREE.Object3D();
    for (const [name, blocks] of this.blocks) {
      const mesh = new THREE.InstancedMesh(geometry, materials[name], blocks.length);
      mesh.castShadow = !['grass', 'earth', 'earthDark', 'paver', 'paverWarm', 'paverDark'].includes(name);
      mesh.receiveShadow = true;
      mesh.frustumCulled = false;
      blocks.forEach(([x, y, z, w, h, d, rotation], index) => {
        dummy.position.set(x, y, z);
        dummy.rotation.set(0, rotation, 0);
        dummy.scale.set(w, h, d);
        dummy.updateMatrix();
        mesh.setMatrixAt(index, dummy.matrix);
      });
      mesh.instanceMatrix.needsUpdate = true;
      scene.add(mesh);
    }
  }
}

const voxels = new VoxelBatch();
const B = (material, x, y, z, w, h, d, rotation) => voxels.box(material, x, y, z, w, h, d, rotation);
const random = (() => {
  let seed = 20260925;
  return () => { seed = (1664525 * seed + 1013904223) >>> 0; return seed / 4294967296; };
})();

function createSite() {
  B('earthDark', 0, -2.25, 0, 121, 4.5, 141);
  B('earth', 0, -0.42, 0, 119, 0.88, 139);
  B('grass', 0, 0.02, 0, 116.5, 0.17, 136.5);
  B('stoneDark', 0, -0.27, 69.45, 119, 0.35, 0.52);
  B('stoneDark', 0, -0.27, -69.45, 119, 0.35, 0.52);
  B('stoneDark', 59.45, -0.27, 0, 0.52, 0.35, 139);
  B('stoneDark', -59.45, -0.27, 0, 0.52, 0.35, 139);

  // The central courtyard is paved one stone at a time, with a continuous axis.
  B('stoneDark', 0, 0.2, 5, 52, 0.28, 60);
  for (let x = -25; x <= 25; x += 2.55) {
    for (let z = -24; z <= 34; z += 2.55) {
      const shade = random() < 0.18 ? 'paverWarm' : random() < 0.22 ? 'paverDark' : 'paver';
      B(shade, x, 0.39, z, 2.39, 0.13, 2.39);
    }
  }
  B('stoneLight', 0, 0.45, 13, 9.1, 0.11, 90);
  for (let z = -29; z < 64; z += 2.65) {
    B('paverWarm', 0, 0.52, z, 8.65, 0.08, 2.35);
    B('stoneDark', -4.58, 0.47, z, 0.16, 0.13, 2.4);
    B('stoneDark', 4.58, 0.47, z, 0.16, 0.13, 2.4);
  }
  for (const sign of [-1, 1]) {
    B('stoneDark', sign * 31.5, 0.22, 26, 16, 0.27, 5.5);
    B('paverWarm', sign * 31.5, 0.38, 26, 15.3, 0.08, 4.8);
    B('stoneDark', sign * 26.5, 0.22, -6, 8, 0.27, 5.5);
    B('paverWarm', sign * 26.5, 0.38, -6, 7.6, 0.08, 4.8);
  }

  // A square ceremonial motif keeps the axis legible from above.
  B('stoneDark', 0, 0.59, 4, 8.7, 0.08, 8.7);
  B('stoneWarm', 0, 0.65, 4, 7.6, 0.09, 7.6);
  B('gold', 0, 0.71, 4, 5.3, 0.07, 0.28, Math.PI / 4);
  B('gold', 0, 0.71, 4, 5.3, 0.07, 0.28, -Math.PI / 4);
  B('stoneDark', 0, 0.76, 4, 1.35, 0.15, 1.35, Math.PI / 4);

  // Perimeter walls, dressed coping, and regularly spaced wall piers.
  for (const sign of [-1, 1]) {
    B('red', sign * 56, 2.18, 0, 0.9, 4.2, 130);
    B('roofTealDark', sign * 56, 4.45, 0, 2.2, 0.42, 132);
    B('roofTeal', sign * 56, 4.73, 0, 2.55, 0.26, 132);
    for (let z = -63; z <= 63; z += 10.5) {
      B('stone', sign * 56, 0.57, z, 2.1, 1, 2.1);
      B('redLight', sign * 56, 2.9, z, 1.6, 4.4, 1.6);
      B('roofTealDark', sign * 56, 5.18, z, 2.75, 0.37, 2.75);
    }
  }
  B('red', 0, 2.2, -65, 112, 4.2, 0.9);
  B('roofTeal', 0, 4.65, -65, 114, 0.38, 2.5);
  for (const sign of [-1, 1]) {
    B('red', sign * 36, 2.2, 65, 40, 4.2, 0.9);
    B('roofTeal', sign * 36, 4.65, 65, 41, 0.38, 2.5);
    B('redLight', sign * 16.1, 2.65, 65, 1.8, 5.2, 1.8);
    B('roofTealDark', sign * 16.1, 5.4, 65, 3.1, 0.4, 3.1);
  }
}

function framedWindow(b, x, y, z, width, height, sideways = false) {
  if (!sideways) {
    b('window', x, y, z, width, height, 0.18);
    b('woodLight', x, y + height / 2, z + 0.15, width + 0.28, 0.22, 0.22);
    b('woodLight', x, y - height / 2, z + 0.15, width + 0.28, 0.22, 0.22);
    for (const side of [-1, 1]) b('woodLight', x + side * width / 2, y, z + 0.15, 0.2, height, 0.22);
    for (const fraction of [-0.25, 0.25]) b('woodLight', x + width * fraction, y, z + 0.19, 0.13, height, 0.13);
    b('woodLight', x, y, z + 0.2, width, 0.12, 0.12);
  } else {
    b('window', x, y, z, 0.18, height, width);
    for (const fraction of [-0.25, 0.25]) b('woodLight', x + 0.16, y, z + width * fraction, 0.13, height, 0.13);
    b('woodLight', x + 0.16, y, z, 0.13, 0.12, width);
  }
}

function createStairs(b, front, width) {
  const stairWidth = Math.max(5.8, width * 0.28);
  for (let i = 0; i < 6; i++) {
    const top = 0.65 + i * 0.27;
    b(i % 2 ? 'stone' : 'stoneLight', 0, (top + 0.25) / 2, front + 5.15 - i * 0.78,
      stairWidth, top - 0.25, 0.87);
  }
  for (const sign of [-1, 1]) {
    b('stone', sign * (stairWidth / 2 + 0.4), 0.75, front + 3.1, 0.55, 1.1, 5.45);
    b('stoneLight', sign * (stairWidth / 2 + 0.4), 1.35, front + 3.1, 0.7, 0.18, 5.5);
  }
}

function createRoof(b, width, depth, eaveY, height, tile, type = 'hip') {
  const roofWidth = width + 5.2;
  const roofDepth = depth + 5.2;
  const rows = Math.ceil(roofDepth / 2 / 1.15);
  const hipReduction = roofDepth * (type === 'hip' ? 0.71 : 0.26);
  const dark = tile === 'roofGold' ? 'roofGoldDark' : 'roofTealDark';
  const light = tile === 'roofGold' ? 'roofGoldLight' : 'roofTealLight';

  b(dark, 0, eaveY - 0.55, 0, roofWidth, 0.68, roofDepth);
  b('wood', 0, eaveY - 0.97, roofDepth / 2 - 0.4, roofWidth, 0.35, 1.2);
  b('wood', 0, eaveY - 0.97, -roofDepth / 2 + 0.4, roofWidth, 0.35, 1.2);
  for (let row = 0; row <= rows; row++) {
    const t = row / rows;
    const zDistance = roofDepth / 2 * (1 - t);
    const span = roofWidth - hipReduction * t;
    const y = eaveY + height * Math.pow(t, 1.4);
    const tileCount = Math.max(2, Math.floor(span / 1.23));
    for (const sign of row === rows ? [1] : [-1, 1]) {
      b(dark, 0, y - 0.2, sign * zDistance, span + 0.4, 0.45, 1.24);
      for (let col = 0; col < tileCount; col++) {
        const x = (col - (tileCount - 1) / 2) * (span / tileCount);
        const upturn = Math.pow(Math.abs(x) / (span / 2), 8) * Math.pow(1 - t, 3) * 0.75;
        b((row + col) % 5 === 0 ? light : tile, x, y + upturn + 0.12,
          sign * zDistance, span / tileCount - 0.08, 0.36, 1.08);
      }
    }
  }

  const ridgeLength = roofWidth - hipReduction;
  b('gold', 0, eaveY + height + 0.48, 0, ridgeLength + 0.6, 0.72, 1.35);
  b('goldBright', 0, eaveY + height + 0.88, 0, ridgeLength + 0.6, 0.16, 0.52);
  for (let x = -ridgeLength / 2 + 1; x < ridgeLength / 2; x += 2.4) {
    b('goldBright', x, eaveY + height + 1.05, 0, 0.44, 0.26, 0.68);
  }
  for (const xSign of [-1, 1]) {
    for (const zSign of [-1, 1]) {
      for (let i = 0; i < 4; i++) {
        b(i > 1 ? light : 'gold', xSign * (roofWidth / 2 - 0.3 + i * 0.38),
          eaveY + 0.13 + i * 0.33, zSign * (roofDepth / 2 - 0.45 + i * 0.38),
          1.5 - i * 0.13, 0.42, 1.52 - i * 0.13);
      }
      b('goldBright', xSign * (roofWidth / 2 + 1.1), eaveY + 1.72,
        zSign * (roofDepth / 2 + 1.05), 0.45, 0.62, 0.45);
    }
  }
  if (type === 'gable') {
    for (const sign of [-1, 1]) {
      for (let row = 0; row < 4; row++) {
        b('wood', sign * (width / 2 + 0.12), eaveY + 0.33 + row * 0.54, 0,
          0.35, 0.48, depth * 0.73 - row * 1.5);
      }
      b('gold', sign * (ridgeLength / 2 + 0.6), eaveY + height + 0.55, 0, 1.45, 0.8, 1.6);
    }
  }
}

function createHall({ x, z, width, depth, wallHeight, roofHeight, tile, type, turn = 0, columns = 6 }) {
  const b = voxels.place(x, z, turn);
  const floorY = 2.02;
  const front = depth / 2;
  const frontFace = front - 1.03;
  const eaveY = floorY + wallHeight + 0.75;

  b('stoneDark', 0, 0.58, 0, width + 5, 1.16, depth + 5);
  b('stone', 0, 1.4, 0, width + 4.3, 0.52, depth + 4.3);
  b('stoneLight', 0, 1.83, 0, width + 3.4, 0.38, depth + 3.4);
  for (const sign of [-1, 1]) {
    b('stoneDark', 0, 1.34, sign * (depth / 2 + 2.4), width + 5.2, 0.23, 0.24);
    b('stoneDark', sign * (width / 2 + 2.4), 1.34, 0, 0.24, 0.23, depth + 5.2);
  }
  createStairs(b, front, width);

  b('red', 0, floorY + wallHeight / 2, 0, width - 2.35, wallHeight, depth - 2.2);
  b('redLight', 0, floorY + wallHeight - 0.5, frontFace, width - 2.1, 0.72, 0.2);
  b('wood', 0, floorY + wallHeight - 1.18, frontFace + 0.2, width - 2, 0.32, 0.42);
  b('wood', 0, floorY + 0.45, frontFace + 0.2, width - 2, 0.32, 0.42);

  const columnXs = [];
  for (let i = 0; i < columns; i++) columnXs.push(-width / 2 + 2 + i * (width - 4) / (columns - 1));
  for (const cx of columnXs) {
    for (const side of [-1, 1]) {
      const cz = side * (front - 0.28);
      b('stoneLight', cx, floorY + 0.16, cz, 1.5, 0.33, 1.5);
      b('deepRed', cx, floorY + 0.55, cz, 1.18, 0.35, 1.18);
      b('redLight', cx, floorY + wallHeight / 2, cz, 0.94, wallHeight, 0.94);
      b('gold', cx, floorY + wallHeight - 0.35, cz, 1.28, 0.3, 1.28);
      b('wood', cx, eaveY - 0.77, cz, 1.95, 0.34, 1.5);
      b('gold', cx, eaveY - 0.36, cz, 2.8, 0.31, 1.9);
      b('woodLight', cx, eaveY - 0.07, cz, 3.48, 0.27, 2.36);
    }
  }
  for (const sign of [-1, 1]) {
    b('wood', sign * (width / 2 - 0.8), floorY + wallHeight - 1.0, 0, 0.4, 0.35, depth + 0.6);
    for (const zz of [-depth * 0.25, depth * 0.25]) {
      b('redLight', sign * (width / 2 - 0.2), floorY + wallHeight / 2, zz, 0.84, wallHeight, 0.84);
      framedWindow(b, sign * (width / 2 - 1.04), floorY + wallHeight * 0.54, zz,
        Math.min(3, depth * 0.2), Math.min(3.5, wallHeight * 0.48), true);
    }
  }

  const doorWidth = Math.min(5.7, width * 0.3);
  const doorHeight = wallHeight * 0.73;
  b('door', 0, floorY + doorHeight / 2, frontFace + 0.16, doorWidth, doorHeight, 0.24);
  b('wood', 0, floorY + doorHeight + 0.16, frontFace + 0.34, doorWidth + 0.65, 0.34, 0.32);
  for (const sign of [-1, 1]) {
    b('gold', sign * (doorWidth / 2 + 0.15), floorY + doorHeight / 2, frontFace + 0.3, 0.24, doorHeight + 0.33, 0.28);
    b('wood', sign * doorWidth * 0.25, floorY + doorHeight / 2, frontFace + 0.34,
      doorWidth / 2 - 0.14, doorHeight - 0.25, 0.12);
    b('goldBright', sign * 0.65, floorY + doorHeight * 0.45, frontFace + 0.45, 0.24, 0.24, 0.12);
    b('gold', sign * doorWidth * 0.25, floorY + doorHeight * 0.26, frontFace + 0.46, 0.12, 0.48, 0.11);
  }

  for (let i = 0; i < columnXs.length - 1; i++) {
    const midpoint = (columnXs[i] + columnXs[i + 1]) / 2;
    if (Math.abs(midpoint) < doorWidth / 2 + 0.4) continue;
    framedWindow(b, midpoint, floorY + wallHeight * 0.53, frontFace + 0.16,
      Math.min(3.15, (width - 4) / (columns - 1) - 1.35), wallHeight * 0.43);
  }

  // A framed tablet above the doorway makes the entrance read at a distance.
  b('gold', 0, floorY + wallHeight - 1.75, frontFace + 0.43, doorWidth + 1.2, 0.85, 0.22);
  b('door', 0, floorY + wallHeight - 1.75, frontFace + 0.57, doorWidth + 0.75, 0.53, 0.11);
  for (const offset of [-1.1, 0, 1.1]) {
    b('goldBright', offset, floorY + wallHeight - 1.75, frontFace + 0.65, 0.4, 0.2, 0.06);
  }

  createRoof(b, width, depth, eaveY, roofHeight, tile, type);
}

function createPyramidRoof(b, width, eaveY, height) {
  const roofWidth = width + 3.2;
  const layers = 7;
  b('wood', 0, eaveY - 0.72, 0, roofWidth, 0.48, roofWidth);
  for (let layer = 0; layer <= layers; layer++) {
    const t = layer / layers;
    const span = roofWidth * (1 - 0.79 * t);
    const y = eaveY + height * Math.pow(t, 1.17);
    const count = Math.max(2, Math.floor(span / 1.1));
    b('roofTealDark', 0, y - 0.2, 0, span, 0.38, span);
    for (let i = 0; i < count; i++) {
      const p = (i - (count - 1) / 2) * (span / count);
      const size = span / count - 0.06;
      for (const sign of [-1, 1]) {
        b(i % 4 === 0 ? 'roofTealLight' : 'roofTeal', p, y + 0.11,
          sign * (span / 2 - size / 2), size, 0.34, size);
        if (i > 0 && i < count - 1) b(i % 4 === 0 ? 'roofTealLight' : 'roofTeal',
          sign * (span / 2 - size / 2), y + 0.11, p, size, 0.34, size);
      }
    }
  }
  for (const xs of [-1, 1]) for (const zs of [-1, 1]) {
    for (let i = 0; i < 3; i++) {
      b('gold', xs * (roofWidth / 2 + i * 0.32), eaveY + i * 0.31,
        zs * (roofWidth / 2 + i * 0.32), 0.9, 0.35, 0.9);
    }
  }
}

function createTower(x, z) {
  const b = voxels.place(x, z);
  b('stoneDark', 0, 0.7, 0, 17, 1.4, 17);
  b('stoneLight', 0, 1.56, 0, 16, 0.32, 16);
  createStairs(b, 7.2, 14);
  for (let story = 0; story < 3; story++) {
    const width = 13.8 - story * 2.05;
    const baseY = 1.7 + story * 7.1;
    const eaveY = baseY + 4.8;
    b('stone', 0, baseY + 0.17, 0, width + 0.25, 0.42, width + 0.25);
    b('red', 0, baseY + 2.4, 0, width - 1.65, 4.7, width - 1.65);
    for (const xs of [-1, 1]) for (const zs of [-1, 1]) {
      b('redLight', xs * (width / 2 - 0.75), baseY + 2.5, zs * (width / 2 - 0.75), 0.84, 4.75, 0.84);
      b('gold', xs * (width / 2 - 0.75), eaveY - 0.5, zs * (width / 2 - 0.75), 1.35, 0.24, 1.35);
    }
    const face = width / 2 - 0.72;
    framedWindow(b, 0, baseY + 2.72, face + 0.12, width * 0.32, 2.85);
    framedWindow(b, 0, baseY + 2.72, -face - 0.12, width * 0.32, 2.85);
    for (const side of [-1, 1]) {
      b('window', side * (face + 0.12), baseY + 2.72, 0, 0.2, 2.85, width * 0.32);
      b('woodLight', side * (face + 0.25), baseY + 2.72, 0, 0.15, 0.15, width * 0.32);
      b('wood', 0, baseY + 4.16, side * (face + 0.15), width - 1.3, 0.27, 0.3);
    }
    b('gold', 0, eaveY - 0.48, 0, width + 1.6, 0.25, width + 1.6);
    createPyramidRoof(b, width, eaveY, 2.6);
  }
  const spireY = 1.7 + 2 * 7.1 + 4.8 + 2.6;
  b('gold', 0, spireY + 0.7, 0, 1.4, 1.3, 1.4);
  b('goldBright', 0, spireY + 1.67, 0, 0.68, 0.75, 0.68);
  b('goldBright', 0, spireY + 2.16, 0, 0.28, 0.5, 0.28);
}

function createTree(x, z, autumn = false, scale = 1) {
  const b = voxels.place(x, z);
  b('stoneDark', 0, 0.33, 0, 3.35 * scale, 0.52, 3.35 * scale);
  b('stoneLight', 0, 0.61, 0, 2.9 * scale, 0.18, 2.9 * scale);
  b('trunk', 0, 2.5 * scale, 0, 0.75 * scale, 4.2 * scale, 0.75 * scale);
  b('trunk', -0.65 * scale, 4.35 * scale, 0, 1.2 * scale, 0.44 * scale, 0.55 * scale);
  b('trunk', 0.6 * scale, 4.9 * scale, 0.1 * scale, 1.1 * scale, 0.45 * scale, 0.55 * scale);
  const colors = autumn ? ['foliageGold', 'foliageCopper', 'foliageLight'] : ['foliage', 'foliageDark', 'foliageLight'];
  for (let i = 0; i < 18; i++) {
    const angle = i * 2.39996;
    const ring = i < 6 ? 1.2 : i < 13 ? 2.25 : 2.65;
    const y = (i < 6 ? 6.7 : i < 13 ? 6.15 : 5.55) + random() * 0.95;
    const size = (1.65 + random() * 1.15) * scale;
    b(colors[i % colors.length], Math.cos(angle) * ring * scale, y * scale,
      Math.sin(angle) * ring * scale, size, size, size);
  }
  b(colors[0], 0, 8.05 * scale, 0, 2.2 * scale, 1.45 * scale, 2.2 * scale);
}

function createLantern(x, z, height = 5.5) {
  const b = voxels.place(x, z);
  b('stoneDark', 0, 0.45, 0, 1.45, 0.82, 1.45);
  b('wood', 0, height / 2, 0, 0.43, height, 0.43);
  b('gold', 0, height - 0.45, 0, 1.38, 0.22, 1.38);
  b('lantern', 0, height + 0.55, 0, 1.38, 1.65, 1.38);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    b('wood', sx * 0.67, height + 0.56, sz * 0.67, 0.18, 1.78, 0.18);
  }
  b('roofTealDark', 0, height + 1.52, 0, 1.95, 0.34, 1.95);
  b('gold', 0, height + 1.78, 0, 0.62, 0.32, 0.62);
  b('goldBright', 0, height - 0.75, 0, 0.25, 0.64, 0.25);
}

function createLion(x, z) {
  const b = voxels.place(x, z);
  b('stoneDark', 0, 0.62, 0, 2.45, 1.1, 2.45);
  b('stoneLight', 0, 1.28, 0, 2.2, 0.25, 2.2);
  b('ivory', 0, 2.03, 0.12, 1.55, 1.23, 1.55);
  b('stoneLight', 0, 3.03, 0.47, 1.62, 1.52, 1.52);
  b('ivory', 0, 2.8, 1.32, 1.12, 0.65, 0.55);
  for (const side of [-1, 1]) {
    b('ivory', side * 0.7, 3.7, 0.22, 0.42, 0.5, 0.55);
    b('stoneDark', side * 0.44, 3.22, 1.26, 0.22, 0.22, 0.12);
    b('stoneLight', side * 0.66, 1.6, 0.88, 0.48, 0.65, 0.48);
  }
  b('stoneDark', 0, 2.63, 1.65, 0.32, 0.2, 0.2);
}

function createGardens() {
  for (const sign of [-1, 1]) {
    for (const z of [-49, -30, -9, 13, 50]) createTree(sign * 48.5, z, z === -30 || z === 50, z === -9 ? 0.82 : 1);
    createTree(sign * 20.5, 17, true, 0.75);
    createTree(sign * 22, -23.5, false, 0.65);
    for (const z of [-50, -39, -27, 2, 12, 43, 54]) {
      const bx = sign * 53.1;
      B('foliageDark', bx, 0.85, z, 2.6, 1.5, 2.6);
      B('foliage', bx, 1.45, z, 1.9, 1.0, 1.9);
    }
    for (const z of [-17, 20, 37, 55]) createLantern(sign * 7.3, z, z === 55 ? 6.2 : 5.3);
    createLantern(sign * 24.5, -7, 4.6);
    createLion(sign * 7.7, -18);
    createLion(sign * 8.6, 59);
  }
}

createSite();
createHall({ x: 0, z: -38, width: 40, depth: 24, wallHeight: 10,
  roofHeight: 6.1, tile: 'roofGold', type: 'hip', columns: 8 });
createHall({ x: 0, z: 47, width: 27, depth: 13, wallHeight: 6.8,
  roofHeight: 4, tile: 'roofTeal', type: 'gable', columns: 8 });
createHall({ x: -39, z: -7, width: 20, depth: 16, wallHeight: 6.9,
  roofHeight: 3.9, tile: 'roofTeal', type: 'gable', turn: -Math.PI / 2, columns: 6 });
createHall({ x: 39, z: -7, width: 20, depth: 16, wallHeight: 6.9,
  roofHeight: 3.9, tile: 'roofTeal', type: 'gable', turn: Math.PI / 2, columns: 6 });
createTower(-37, 29);
createTower(37, 29);
createGardens();
voxels.build();

// A few warm windows and lanterns pool light into the courtyard after sunset.
const hemisphere = new THREE.HemisphereLight('#c6d9dc', '#6b5040', 2.1);
scene.add(hemisphere);
const sun = new THREE.DirectionalLight('#ffd3a0', 3.15);
sun.position.set(-54, 100, 78);
sun.castShadow = true;
sun.shadow.mapSize.set(smallScreen ? 1024 : 2048, smallScreen ? 1024 : 2048);
sun.shadow.camera.left = -95;
sun.shadow.camera.right = 95;
sun.shadow.camera.top = 95;
sun.shadow.camera.bottom = -95;
sun.shadow.camera.near = 1;
sun.shadow.camera.far = 240;
sun.shadow.bias = -0.00035;
sun.shadow.normalBias = 0.015;
scene.add(sun);
const courtyardGlow = new THREE.PointLight('#ffb76c', 38, 48, 2);
courtyardGlow.position.set(0, 11, 30);
scene.add(courtyardGlow);
const hallGlow = new THREE.PointLight('#ffbd78', 24, 38, 2);
hallGlow.position.set(0, 10, -23);
scene.add(hallGlow);

const ground = new THREE.Mesh(new THREE.PlaneGeometry(2000, 2000),
  new THREE.MeshStandardMaterial({ color: '#26393d', roughness: 1 }));
ground.rotation.x = -Math.PI / 2;
ground.position.y = -4.55;
ground.receiveShadow = true;
scene.add(ground);

const moods = {
  dawn: { sky: '#869b9d', fog: '#879995', sun: '#ffe0af', sunPower: 3.2, hemi: 2.15,
    glow: 8, exposure: 1.37, sunPosition: [-75, 75, -35] },
  dusk: { sky: '#394d55', fog: '#50646a', sun: '#ffd2a1', sunPower: 3.0, hemi: 1.55,
    glow: 36, exposure: 1.35, sunPosition: [-54, 100, 78] },
  night: { sky: '#172a3a', fog: '#253e4c', sun: '#a9c6ed', sunPower: 1.35, hemi: 1.15,
    glow: 76, exposure: 1.2, sunPosition: [55, 80, -60] }
};

function setMood(name) {
  const mood = moods[name];
  scene.background = new THREE.Color(mood.sky);
  scene.fog = new THREE.FogExp2(mood.fog, 0.002);
  sun.color.set(mood.sun);
  sun.intensity = mood.sunPower;
  sun.position.set(...mood.sunPosition);
  hemisphere.intensity = mood.hemi;
  courtyardGlow.intensity = mood.glow;
  hallGlow.intensity = mood.glow * 0.7;
  renderer.toneMappingExposure = mood.exposure;
  document.documentElement.dataset.mood = name;
  document.querySelectorAll('[data-theme]').forEach(button => {
    const active = button.dataset.theme === name;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
}
setMood('dusk');

document.querySelectorAll('[data-theme]').forEach(button => button.addEventListener('click', () => setMood(button.dataset.theme)));
document.querySelector('#reset-view').addEventListener('click', () => {
  camera.position.copy(initialCamera);
  controls.target.copy(initialTarget);
  controls.update();
});
const motionButton = document.querySelector('#toggle-motion');
motionButton.addEventListener('click', () => {
  controls.autoRotate = !controls.autoRotate;
  motionButton.classList.toggle('active', controls.autoRotate);
  motionButton.setAttribute('aria-pressed', String(controls.autoRotate));
  motionButton.setAttribute('title', controls.autoRotate ? '暂停自动旋转' : '开启自动旋转');
  motionButton.setAttribute('aria-label', controls.autoRotate ? '暂停自动旋转' : '开启自动旋转');
  motionButton.querySelector('svg').innerHTML = controls.autoRotate
    ? '<path d="M9 6v12M15 6v12"/>'
    : '<path d="m8 5 11 7-11 7V5Z"/>';
});

function resize() {
  const width = mount.clientWidth;
  const height = mount.clientHeight;
  const nextCompactView = width < 600;
  if (nextCompactView !== compactView) {
    camera.position.sub(controls.target).multiplyScalar(nextCompactView ? compactDistance : 1 / compactDistance).add(controls.target);
    compactView = nextCompactView;
    initialCamera.copy(baseCamera).sub(initialTarget)
      .multiplyScalar(compactView ? compactDistance : 1).add(initialTarget);
  }
  camera.aspect = width / height;
  camera.fov = width < 600 ? 52 : 42;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
}
window.addEventListener('resize', resize);

const compass = document.querySelector('.compass');
const compassLetters = compass.querySelectorAll('span');
let lastCompassUpdate = 0;
renderer.setAnimationLoop((time) => {
  controls.update();
  if (time - lastCompassUpdate > 100) {
    const yaw = Math.atan2(camera.position.x - controls.target.x, camera.position.z - controls.target.z);
    compass.style.transform = `rotate(${yaw}rad)`;
    compassLetters.forEach(letter => { letter.style.transform = `rotate(${-yaw}rad)`; });
    lastCompassUpdate = time;
  }
  renderer.render(scene, camera);
});

console.info(`云阙宫已加载：6 座建筑，${voxels.count.toLocaleString()} 个实例化体素。`);
