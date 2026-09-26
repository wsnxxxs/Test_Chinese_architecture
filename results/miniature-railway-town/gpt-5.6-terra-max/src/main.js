import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import './style.css';

const app = document.querySelector('#app');
const scene = new THREE.Scene();
scene.background = new THREE.Color('#e8b67d');
scene.fog = new THREE.Fog('#e8b67d', 38, 82);

const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.08;
app.prepend(renderer.domElement);

const camera = new THREE.PerspectiveCamera(42, window.innerWidth / window.innerHeight, 0.1, 150);
const initialCameraPosition = new THREE.Vector3(31, 29, 35);
const initialTarget = new THREE.Vector3(0.2, 0.4, 0);
camera.position.copy(initialCameraPosition);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.copy(initialTarget);
controls.enableDamping = true;
controls.dampingFactor = 0.065;
controls.minDistance = 23;
controls.maxDistance = 62;
controls.maxPolarAngle = Math.PI * 0.485;
controls.minPolarAngle = Math.PI * 0.18;
controls.update();

const world = new THREE.Group();
scene.add(world);

const color = (value) => new THREE.Color(value);
const materials = {
  wood: new THREE.MeshStandardMaterial({ color: '#75462c', roughness: 0.57, metalness: 0.03 }),
  woodDark: new THREE.MeshStandardMaterial({ color: '#4b2a1d', roughness: 0.68 }),
  grass: new THREE.MeshStandardMaterial({ color: '#68935d', roughness: 0.94 }),
  soil: new THREE.MeshStandardMaterial({ color: '#5a422b', roughness: 0.95 }),
  gravel: new THREE.MeshStandardMaterial({ color: '#6b645c', roughness: 0.95 }),
  rail: new THREE.MeshStandardMaterial({ color: '#4b5053', roughness: 0.32, metalness: 0.78 }),
  sleeper: new THREE.MeshStandardMaterial({ color: '#3c2920', roughness: 0.84 }),
  road: new THREE.MeshStandardMaterial({ color: '#938370', roughness: 0.96 }),
  sidewalk: new THREE.MeshStandardMaterial({ color: '#c4b399', roughness: 0.93 }),
  water: new THREE.MeshStandardMaterial({ color: '#4c9ab3', roughness: 0.28, metalness: 0.06, emissive: '#164454', emissiveIntensity: 0.12 }),
  riverBank: new THREE.MeshStandardMaterial({ color: '#806a48', roughness: 0.98 }),
  bridge: new THREE.MeshStandardMaterial({ color: '#38464c', roughness: 0.52, metalness: 0.42 }),
  bridgeWood: new THREE.MeshStandardMaterial({ color: '#8a5d3c', roughness: 0.68 }),
};

const windowMaterials = [];
const nightLights = [];
const waterMaterials = [materials.water];

function standardMaterial(value, options = {}) {
  return new THREE.MeshStandardMaterial({ color: value, roughness: 0.72, metalness: 0.02, ...options });
}

function addMesh(parent, geometry, material, position = null, rotation = null) {
  const object = new THREE.Mesh(geometry, material);
  object.castShadow = true;
  object.receiveShadow = true;
  if (position) object.position.copy(position);
  if (rotation) object.rotation.set(rotation.x, rotation.y, rotation.z);
  parent.add(object);
  return object;
}

function createRibbon(points, width, y, material) {
  const positions = [];
  const indices = [];
  const vectors = points.map((point) => new THREE.Vector3(point.x, y, point.z));
  for (let index = 0; index < vectors.length; index += 1) {
    const before = vectors[Math.max(0, index - 1)];
    const after = vectors[Math.min(vectors.length - 1, index + 1)];
    const direction = after.clone().sub(before).setY(0).normalize();
    const normal = new THREE.Vector3(-direction.z, 0, direction.x);
    const left = vectors[index].clone().addScaledVector(normal, width / 2);
    const right = vectors[index].clone().addScaledVector(normal, -width / 2);
    positions.push(left.x, left.y, left.z, right.x, right.y, right.z);
  }
  for (let index = 0; index < vectors.length - 1; index += 1) {
    const start = index * 2;
    indices.push(start, start + 2, start + 1, start + 1, start + 2, start + 3);
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  const ribbon = new THREE.Mesh(geometry, material);
  ribbon.receiveShadow = true;
  return ribbon;
}

function createGableRoof(width, depth, roofHeight, material) {
  const shape = new THREE.Shape();
  shape.moveTo(-width / 2, 0);
  shape.lineTo(width / 2, 0);
  shape.lineTo(0, roofHeight);
  shape.closePath();
  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth,
    bevelEnabled: true,
    bevelThickness: 0.045,
    bevelSize: 0.035,
    bevelSegments: 1,
  });
  geometry.translate(0, 0, -depth / 2);
  return addMesh(new THREE.Group(), geometry, material);
}

function addWindow(parent, position, width = 0.42, height = 0.56, rotationY = 0) {
  const windowMaterial = new THREE.MeshStandardMaterial({
    color: '#a9d5df',
    roughness: 0.28,
    metalness: 0.1,
    emissive: '#e6a851',
    emissiveIntensity: 0.06,
  });
  windowMaterials.push(windowMaterial);
  const pane = addMesh(parent, new THREE.PlaneGeometry(width, height), windowMaterial, position);
  pane.rotation.y = rotationY;
  pane.castShadow = false;
  const crossMaterial = new THREE.MeshStandardMaterial({ color: '#f4e6c7', roughness: 0.76 });
  const vertical = addMesh(parent, new THREE.BoxGeometry(0.035, height + 0.04, 0.026), crossMaterial, position.clone());
  vertical.rotation.y = rotationY;
  const horizontal = addMesh(parent, new THREE.BoxGeometry(width + 0.04, 0.035, 0.026), crossMaterial, position.clone());
  horizontal.rotation.y = rotationY;
}

function createBuilding({
  position,
  width,
  depth,
  height,
  wallColor,
  roofColor,
  name = 'house',
  flatRoof = false,
  windowRows = 1,
}) {
  const building = new THREE.Group();
  building.name = name;
  building.position.set(position.x, 0.56, position.z);
  const wallMaterial = standardMaterial(wallColor, { roughness: 0.78 });
  const roofMaterial = standardMaterial(roofColor, { roughness: 0.66 });
  const trimMaterial = standardMaterial('#f3e7cf', { roughness: 0.72 });

  addMesh(building, new RoundedBoxGeometry(width, height, depth, 4, 0.1), wallMaterial, new THREE.Vector3(0, height / 2, 0));
  addMesh(building, new THREE.BoxGeometry(width + 0.12, 0.16, depth + 0.12), trimMaterial, new THREE.Vector3(0, 0.2, 0));

  if (flatRoof) {
    addMesh(building, new RoundedBoxGeometry(width + 0.22, 0.25, depth + 0.22, 3, 0.07), roofMaterial, new THREE.Vector3(0, height + 0.08, 0));
    addMesh(building, new THREE.BoxGeometry(width + 0.36, 0.08, 0.12), trimMaterial, new THREE.Vector3(0, height + 0.22, depth / 2 + 0.08));
  } else {
    const roof = createGableRoof(width + 0.35, depth + 0.3, Math.min(1.1, height * 0.4), roofMaterial);
    roof.position.y = height + 0.04;
    building.add(roof);
  }

  const frontZ = depth / 2 + 0.012;
  const rows = Math.max(1, windowRows);
  for (let row = 0; row < rows; row += 1) {
    const windowY = height * (0.47 + row * 0.28);
    if (windowY > height - 0.25) continue;
    addWindow(building, new THREE.Vector3(-width * 0.25, windowY, frontZ), 0.4, 0.5);
    addWindow(building, new THREE.Vector3(width * 0.25, windowY, frontZ), 0.4, 0.5);
  }
  addWindow(building, new THREE.Vector3(width / 2 + 0.012, height * 0.5, -depth * 0.18), 0.38, 0.52, Math.PI / 2);

  const doorMaterial = standardMaterial('#574033', { roughness: 0.72 });
  addMesh(building, new THREE.BoxGeometry(Math.min(0.58, width * 0.26), Math.min(1.05, height * 0.5), 0.06), doorMaterial, new THREE.Vector3(0, Math.min(1.05, height * 0.5) / 2 + 0.18, frontZ + 0.015));
  const knob = addMesh(building, new THREE.SphereGeometry(0.05, 8, 6), standardMaterial('#d6aa58', { metalness: 0.52, roughness: 0.35 }), new THREE.Vector3(0.18, 0.63, frontZ + 0.07));
  knob.castShadow = false;
  world.add(building);
  return building;
}

function makeSignTexture(label) {
  const canvas = document.createElement('canvas');
  canvas.width = 384;
  canvas.height = 104;
  const context = canvas.getContext('2d');
  context.fillStyle = '#28415a';
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.strokeStyle = '#efcf8e';
  context.lineWidth = 8;
  context.strokeRect(8, 8, canvas.width - 16, canvas.height - 16);
  context.fillStyle = '#fff2d1';
  context.font = '700 44px Georgia, serif';
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillText(label, canvas.width / 2, canvas.height / 2 + 2);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
  return texture;
}

function createStation() {
  const station = createBuilding({
    position: new THREE.Vector3(-1.3, 0, 6.2),
    width: 4.8,
    depth: 2.45,
    height: 2.55,
    wallColor: '#d6b47c',
    roofColor: '#884d39',
    name: 'Pine Ridge Station',
  });
  const stationTrim = standardMaterial('#f7eed9');
  const awningMaterial = standardMaterial('#425c72', { roughness: 0.58 });
  const signMaterial = new THREE.MeshBasicMaterial({ map: makeSignTexture('PINE RIDGE') });
  const stationZ = 6.2;
  addMesh(world, new RoundedBoxGeometry(6.05, 0.18, 1.12, 3, 0.05), stationTrim, new THREE.Vector3(-1.3, 0.68, 8.05));
  addMesh(world, new THREE.BoxGeometry(5.4, 0.12, 0.72), awningMaterial, new THREE.Vector3(-1.3, 2.52, 7.72));
  [-3.65, -1.3, 1.05].forEach((x) => {
    addMesh(world, new THREE.CylinderGeometry(0.07, 0.08, 1.82, 10), stationTrim, new THREE.Vector3(x, 1.65, 7.85));
  });
  const sign = addMesh(world, new THREE.PlaneGeometry(2.0, 0.54), signMaterial, new THREE.Vector3(-1.3, 2.52, 8.1));
  sign.castShadow = false;
  const clockFace = new THREE.MeshBasicMaterial({ color: '#fff3d5' });
  addMesh(station, new THREE.CircleGeometry(0.29, 20), clockFace, new THREE.Vector3(0, 2.0, 1.24));
  const clockHand = addMesh(station, new THREE.BoxGeometry(0.025, 0.19, 0.02), standardMaterial('#344757'), new THREE.Vector3(0.04, 2.05, 1.26));
  clockHand.rotation.z = -0.55;
  return { station, point: new THREE.Vector3(-1.3, 0, 8.95), stationZ };
}

function createRoad(points, width = 1.05) {
  const sidewalk = createRibbon(points, width + 0.38, 0.595, materials.sidewalk);
  sidewalk.receiveShadow = true;
  world.add(sidewalk);
  const road = createRibbon(points, width, 0.612, materials.road);
  world.add(road);
}

function createRiver() {
  const riverPoints = [
    new THREE.Vector3(16.3, 0, -1.1),
    new THREE.Vector3(14.0, 0, -1.25),
    new THREE.Vector3(11.8, 0, -1.72),
    new THREE.Vector3(9.6, 0, -1.2),
    new THREE.Vector3(8.0, 0, -0.15),
    new THREE.Vector3(6.2, 0, 0.35),
    new THREE.Vector3(4.75, 0, 0.05),
  ];
  world.add(createRibbon(riverPoints, 3.05, 0.59, materials.riverBank));
  const river = createRibbon(riverPoints, 2.22, 0.625, materials.water);
  world.add(river);
  const rippleMaterial = new THREE.MeshBasicMaterial({ color: '#b7e2e5', transparent: true, opacity: 0.48, side: THREE.DoubleSide });
  [
    [10.7, -1.35, 0.56],
    [8.2, -0.4, 0.46],
    [6.1, 0.2, 0.52],
  ].forEach(([x, z, scale]) => {
    const ripple = addMesh(world, new THREE.RingGeometry(scale * 0.55, scale, 20), rippleMaterial, new THREE.Vector3(x, 0.644, z));
    ripple.rotation.x = -Math.PI / 2;
    ripple.castShadow = false;
  });
}

function createBridge() {
  const bridge = new THREE.Group();
  bridge.position.set(14, 0.58, -1.15);
  world.add(bridge);
  addMesh(bridge, new THREE.BoxGeometry(2.25, 0.2, 4.05), materials.bridgeWood, new THREE.Vector3(0, 0.22, 0));
  [-0.92, 0.92].forEach((x) => {
    addMesh(bridge, new THREE.BoxGeometry(0.13, 0.36, 4.32), materials.bridge, new THREE.Vector3(x, 0.38, 0));
    [-1.72, 1.72].forEach((z) => {
      addMesh(bridge, new THREE.BoxGeometry(0.22, 1.05, 0.25), materials.bridge, new THREE.Vector3(x, -0.15, z));
    });
  });
  [-1.55, -0.78, 0, 0.78, 1.55].forEach((z) => {
    addMesh(bridge, new THREE.BoxGeometry(2.05, 0.1, 0.16), materials.bridgeWood, new THREE.Vector3(0, 0.48, z));
  });
  return bridge;
}

function createTree(x, z, scale = 1, variant = 'round') {
  const tree = new THREE.Group();
  tree.position.set(x, 0.58, z);
  tree.rotation.y = (x * 1.73 + z * 0.87) % Math.PI;
  const trunkMaterial = standardMaterial('#6c4930', { roughness: 0.9 });
  const leafMaterials = [
    standardMaterial('#47744b', { roughness: 0.92 }),
    standardMaterial('#5e8954', { roughness: 0.9 }),
    standardMaterial('#3d6946', { roughness: 0.94 }),
  ];
  addMesh(tree, new THREE.CylinderGeometry(0.13 * scale, 0.18 * scale, 1.08 * scale, 8), trunkMaterial, new THREE.Vector3(0, 0.54 * scale, 0));
  if (variant === 'pine') {
    addMesh(tree, new THREE.ConeGeometry(0.72 * scale, 1.45 * scale, 10), leafMaterials[2], new THREE.Vector3(0, 1.25 * scale, 0));
    addMesh(tree, new THREE.ConeGeometry(0.55 * scale, 1.25 * scale, 10), leafMaterials[0], new THREE.Vector3(0, 1.86 * scale, 0));
  } else {
    const crown = addMesh(tree, new THREE.IcosahedronGeometry(0.76 * scale, 1), leafMaterials[Math.abs(Math.floor(x + z)) % leafMaterials.length], new THREE.Vector3(0, 1.32 * scale, 0));
    crown.scale.set(1.05, 1.15, 0.96);
    const sideCrown = addMesh(tree, new THREE.IcosahedronGeometry(0.47 * scale, 1), leafMaterials[(Math.abs(Math.floor(x * 2 - z)) + 1) % leafMaterials.length], new THREE.Vector3(0.36 * scale, 1.25 * scale, 0.13 * scale));
    sideCrown.scale.set(1, 1.08, 1);
  }
  world.add(tree);
  return tree;
}

function createLamp(x, z, scale = 1) {
  const lamp = new THREE.Group();
  lamp.position.set(x, 0.6, z);
  const poleMaterial = standardMaterial('#2f3d42', { metalness: 0.56, roughness: 0.42 });
  const glowMaterial = new THREE.MeshStandardMaterial({ color: '#ffe3a0', emissive: '#ffbd5b', emissiveIntensity: 0.08, roughness: 0.35 });
  addMesh(lamp, new THREE.CylinderGeometry(0.055 * scale, 0.08 * scale, 2.05 * scale, 10), poleMaterial, new THREE.Vector3(0, 1.03 * scale, 0));
  addMesh(lamp, new THREE.CylinderGeometry(0.2 * scale, 0.16 * scale, 0.16 * scale, 10), poleMaterial, new THREE.Vector3(0, 2.12 * scale, 0));
  const bulb = addMesh(lamp, new THREE.SphereGeometry(0.12 * scale, 12, 8), glowMaterial, new THREE.Vector3(0, 1.99 * scale, 0));
  bulb.castShadow = false;
  const lampLight = new THREE.PointLight('#ffbd69', 0, 7 * scale, 2);
  lampLight.position.set(0, 1.95 * scale, 0);
  lamp.add(lampLight);
  nightLights.push({ light: lampLight, material: glowMaterial, intensity: 1.25 * scale });
  world.add(lamp);
}

function createBench(x, z, rotation = 0) {
  const bench = new THREE.Group();
  bench.position.set(x, 0.69, z);
  bench.rotation.y = rotation;
  const wood = standardMaterial('#86593c', { roughness: 0.75 });
  const metal = standardMaterial('#2e3b3f', { metalness: 0.5, roughness: 0.46 });
  addMesh(bench, new THREE.BoxGeometry(0.88, 0.1, 0.22), wood, new THREE.Vector3(0, 0.38, 0));
  addMesh(bench, new THREE.BoxGeometry(0.88, 0.28, 0.08), wood, new THREE.Vector3(0, 0.59, 0.1));
  [-0.3, 0.3].forEach((offset) => addMesh(bench, new THREE.BoxGeometry(0.07, 0.4, 0.07), metal, new THREE.Vector3(offset, 0.2, 0)));
  world.add(bench);
}

function createFence(x, z, length, rotation = 0) {
  const fence = new THREE.Group();
  fence.position.set(x, 0.6, z);
  fence.rotation.y = rotation;
  const fenceMaterial = standardMaterial('#e5d3ae', { roughness: 0.86 });
  addMesh(fence, new THREE.BoxGeometry(length, 0.075, 0.06), fenceMaterial, new THREE.Vector3(0, 0.42, 0));
  addMesh(fence, new THREE.BoxGeometry(length, 0.075, 0.06), fenceMaterial, new THREE.Vector3(0, 0.7, 0));
  for (let position = -length / 2; position <= length / 2; position += 0.55) {
    addMesh(fence, new THREE.BoxGeometry(0.075, 0.92, 0.075), fenceMaterial, new THREE.Vector3(position, 0.46, 0));
  }
  world.add(fence);
}

function createTrain() {
  const train = new THREE.Group();
  const locomotive = new THREE.Group();
  const trainWheels = [];
  const blackMetal = standardMaterial('#26373d', { metalness: 0.63, roughness: 0.31 });
  const brass = standardMaterial('#c99b4f', { metalness: 0.63, roughness: 0.28 });
  const locomotiveRed = standardMaterial('#a34736', { roughness: 0.54 });
  const cream = standardMaterial('#f0dcb0', { roughness: 0.65 });

  addMesh(locomotive, new RoundedBoxGeometry(1.18, 0.3, 2.78, 4, 0.06), blackMetal, new THREE.Vector3(0, 0.42, 0));
  const boiler = addMesh(locomotive, new THREE.CylinderGeometry(0.52, 0.52, 1.48, 18), locomotiveRed, new THREE.Vector3(0, 1.12, 0.4));
  boiler.rotation.x = Math.PI / 2;
  addMesh(locomotive, new THREE.CylinderGeometry(0.54, 0.54, 0.14, 18), brass, new THREE.Vector3(0, 1.12, 1.17), new THREE.Euler(Math.PI / 2, 0, 0));
  addMesh(locomotive, new RoundedBoxGeometry(1.18, 1.28, 0.92, 4, 0.06), locomotiveRed, new THREE.Vector3(0, 1.15, -0.72));
  addMesh(locomotive, new RoundedBoxGeometry(1.32, 0.14, 1.04, 3, 0.04), blackMetal, new THREE.Vector3(0, 1.84, -0.72));
  addMesh(locomotive, new THREE.CylinderGeometry(0.13, 0.17, 0.72, 12), blackMetal, new THREE.Vector3(0, 1.86, 0.54));
  addMesh(locomotive, new THREE.CylinderGeometry(0.22, 0.13, 0.16, 12), brass, new THREE.Vector3(0, 2.25, 0.54));
  addMesh(locomotive, new THREE.BoxGeometry(0.66, 0.46, 0.04), cream, new THREE.Vector3(0, 1.36, 1.255));
  addMesh(locomotive, new THREE.SphereGeometry(0.12, 12, 8), new THREE.MeshStandardMaterial({ color: '#ffe8a8', emissive: '#ffb84f', emissiveIntensity: 0.2 }), new THREE.Vector3(0, 1.24, 1.31));

  function addWheel(parent, x, z, radius = 0.38) {
    const wheel = addMesh(parent, new THREE.CylinderGeometry(radius, radius, 0.16, 16), blackMetal, new THREE.Vector3(x, 0.52, z));
    wheel.rotation.z = Math.PI / 2;
    trainWheels.push(wheel);
  }
  [-0.51, 0.51].forEach((x) => [-0.84, 0.58].forEach((z) => addWheel(locomotive, x, z, 0.39)));
  locomotive.userData.wheels = trainWheels;
  train.add(locomotive);

  const buildCarriage = (bodyColor, roofColor) => {
    const carriage = new THREE.Group();
    const body = standardMaterial(bodyColor, { roughness: 0.58 });
    const roof = standardMaterial(roofColor, { roughness: 0.57 });
    const undercarriage = standardMaterial('#29373c', { metalness: 0.46, roughness: 0.4 });
    addMesh(carriage, new RoundedBoxGeometry(1.2, 0.3, 2.75, 4, 0.06), undercarriage, new THREE.Vector3(0, 0.4, 0));
    addMesh(carriage, new RoundedBoxGeometry(1.16, 1.14, 2.38, 4, 0.08), body, new THREE.Vector3(0, 1.08, 0));
    addMesh(carriage, new RoundedBoxGeometry(1.3, 0.16, 2.58, 4, 0.07), roof, new THREE.Vector3(0, 1.73, 0));
    [-0.64, 0, 0.64].forEach((z) => {
      [-0.61, 0.61].forEach((x) => {
        const windowMaterial = new THREE.MeshStandardMaterial({ color: '#a4cedd', emissive: '#e2a852', emissiveIntensity: 0.08, roughness: 0.28 });
        windowMaterials.push(windowMaterial);
        const pane = addMesh(carriage, new THREE.PlaneGeometry(0.43, 0.48), windowMaterial, new THREE.Vector3(x, 1.18, z));
        pane.rotation.y = x < 0 ? -Math.PI / 2 : Math.PI / 2;
        pane.castShadow = false;
      });
    });
    [-0.5, 0.5].forEach((x) => [-0.82, 0.82].forEach((z) => addWheel(carriage, x, z, 0.35)));
    carriage.userData.wheels = trainWheels.slice(-4);
    train.add(carriage);
    return carriage;
  };

  const carriageOne = buildCarriage('#d8b55f', '#3a5969');
  const carriageTwo = buildCarriage('#7b9b92', '#b64f3a');
  world.add(train);
  return { train, cars: [locomotive, carriageOne, carriageTwo] };
}

// The display base is deliberately thick and soft-edged so the town reads as a hand-built object.
const base = new THREE.Group();
world.add(base);
addMesh(base, new RoundedBoxGeometry(34, 1.72, 24, 8, 0.48), materials.wood, new THREE.Vector3(0, -0.38, 0));
addMesh(base, new RoundedBoxGeometry(32.92, 0.58, 22.92, 7, 0.28), materials.grass, new THREE.Vector3(0, 0.2, 0));
addMesh(base, new RoundedBoxGeometry(28.4, 0.11, 0.6, 4, 0.04), standardMaterial('#cba970', { roughness: 0.58 }), new THREE.Vector3(0, -0.15, 12.03));

const plaqueMaterial = new THREE.MeshBasicMaterial({ map: makeSignTexture('PINE RIDGE · 1948') });
const plaque = addMesh(base, new THREE.PlaneGeometry(5.6, 1.12), plaqueMaterial, new THREE.Vector3(0, -0.15, 12.12));
plaque.rotation.x = -0.06;
plaque.castShadow = false;

createRiver();
createRoad([
  new THREE.Vector3(-1.3, 0, 8.0),
  new THREE.Vector3(-1.2, 0, 5.6),
  new THREE.Vector3(0.25, 0, 3.0),
  new THREE.Vector3(0.5, 0, 1.15),
], 1.02);
createRoad([
  new THREE.Vector3(0.5, 0, 1.15),
  new THREE.Vector3(-2.4, 0, 0.15),
  new THREE.Vector3(-5.9, 0, -0.95),
  new THREE.Vector3(-7.2, 0, -3.2),
], 0.94);
createRoad([
  new THREE.Vector3(0.5, 0, 1.15),
  new THREE.Vector3(3.3, 0, 0.6),
  new THREE.Vector3(5.8, 0, -1.1),
  new THREE.Vector3(7.4, 0, -2.25),
], 0.92);
createRoad([
  new THREE.Vector3(0.3, 0, 3.0),
  new THREE.Vector3(3.25, 0, 4.3),
  new THREE.Vector3(5.55, 0, 5.1),
], 0.86);

// Town core: station facing the platform, then a compact civic and residential neighborhood.
const stationData = createStation();
createBuilding({ position: new THREE.Vector3(-5.25, 0, 3.25), width: 2.45, depth: 2.25, height: 2.25, wallColor: '#c97c52', roofColor: '#48647a', name: 'bakery' });
createBuilding({ position: new THREE.Vector3(-5.75, 0, -1.95), width: 2.7, depth: 2.35, height: 2.15, wallColor: '#dbc88e', roofColor: '#994d3a', name: 'corner shop' });
createBuilding({ position: new THREE.Vector3(-2.25, 0, -2.35), width: 2.25, depth: 2.0, height: 2.4, wallColor: '#83a4a2', roofColor: '#405568', name: 'blue house' });
createBuilding({ position: new THREE.Vector3(1.9, 0, 3.6), width: 2.8, depth: 2.35, height: 2.8, wallColor: '#e1c28b', roofColor: '#6d4a46', name: 'town hall', flatRoof: true, windowRows: 2 });
createBuilding({ position: new THREE.Vector3(4.65, 0, 2.25), width: 2.25, depth: 2.15, height: 2.35, wallColor: '#d08666', roofColor: '#3d5865', name: 'bookshop' });
createBuilding({ position: new THREE.Vector3(6.6, 0, 4.88), width: 2.55, depth: 2.3, height: 2.15, wallColor: '#c5d0ab', roofColor: '#8c4a38', name: 'garden house' });
createBuilding({ position: new THREE.Vector3(3.25, 0, -3.4), width: 2.35, depth: 2.0, height: 2.12, wallColor: '#c9a46f', roofColor: '#4c6270', name: 'post office' });

// A small watermill gives the river a destination and makes the stream feel intentional.
const mill = createBuilding({ position: new THREE.Vector3(5.6, 0, -0.75), width: 1.7, depth: 1.65, height: 2.05, wallColor: '#b98f63', roofColor: '#5d5e58', name: 'watermill' });
const wheel = new THREE.Group();
wheel.position.set(6.48, 1.18, -0.65);
wheel.rotation.y = Math.PI / 2;
const wheelMaterial = standardMaterial('#8d603a', { roughness: 0.69 });
addMesh(wheel, new THREE.TorusGeometry(0.62, 0.08, 8, 16), wheelMaterial);
for (let spoke = 0; spoke < 6; spoke += 1) {
  const beam = addMesh(wheel, new THREE.BoxGeometry(0.1, 1.06, 0.08), wheelMaterial);
  beam.rotation.z = spoke * Math.PI / 3;
}
world.add(wheel);

createBridge();

// The railway is a single closed spline. Both rails and every sleeper sample the same curve.
const trackY = 0.79;
const trackPoints = [
  new THREE.Vector3(-14, trackY, -2.0),
  new THREE.Vector3(-12.3, trackY, -6.9),
  new THREE.Vector3(-7.2, trackY, -9.15),
  new THREE.Vector3(1.7, trackY, -9.45),
  new THREE.Vector3(7.8, trackY, -8.1),
  new THREE.Vector3(11.8, trackY, -5.8),
  new THREE.Vector3(14.0, trackY, -3.0),
  new THREE.Vector3(14.0, trackY, 2.1),
  new THREE.Vector3(11.0, trackY, 6.1),
  new THREE.Vector3(5.2, trackY, 8.72),
  new THREE.Vector3(-3.8, trackY, 9.05),
  new THREE.Vector3(-10.3, trackY, 7.45),
  new THREE.Vector3(-14.0, trackY, 4.15),
];
const trackCurve = new THREE.CatmullRomCurve3(trackPoints, true, 'catmullrom', 0.22);
const trackLength = trackCurve.getLength();
const railBedPoints = [];
for (let index = 0; index < 280; index += 1) railBedPoints.push(trackCurve.getPointAt(index / 279));
world.add(createRibbon(railBedPoints, 2.08, 0.615, materials.gravel));

function createRail(offset) {
  const railPoints = [];
  for (let index = 0; index < 320; index += 1) {
    const u = index / 320;
    const point = trackCurve.getPointAt(u);
    const tangent = trackCurve.getTangentAt(u).setY(0).normalize();
    const normal = new THREE.Vector3(-tangent.z, 0, tangent.x);
    railPoints.push(point.addScaledVector(normal, offset).setY(trackY + 0.095));
  }
  const railCurve = new THREE.CatmullRomCurve3(railPoints, true, 'catmullrom', 0.1);
  const rail = new THREE.Mesh(new THREE.TubeGeometry(railCurve, 720, 0.075, 8, true), materials.rail);
  rail.castShadow = true;
  rail.receiveShadow = true;
  world.add(rail);
}

createRail(-0.62);
createRail(0.62);
for (let distance = 0; distance < trackLength; distance += 0.47) {
  const point = trackCurve.getPointAt(distance / trackLength);
  const tangent = trackCurve.getTangentAt(distance / trackLength).setY(0).normalize();
  const sleeper = addMesh(world, new THREE.BoxGeometry(1.85, 0.15, 0.25), materials.sleeper, new THREE.Vector3(point.x, trackY - 0.01, point.z));
  sleeper.rotation.y = Math.atan2(tangent.x, tangent.z);
}

// The station target is derived from the same curve that drives the train, avoiding any invisible snap point.
function closestDistanceOnTrack(target) {
  let closestDistance = 0;
  let closestSquaredDistance = Infinity;
  const samples = 1600;
  for (let index = 0; index < samples; index += 1) {
    const point = trackCurve.getPointAt(index / samples);
    const squaredDistance = point.distanceToSquared(target);
    if (squaredDistance < closestSquaredDistance) {
      closestSquaredDistance = squaredDistance;
      closestDistance = trackLength * index / samples;
    }
  }
  return closestDistance;
}

const stationDistance = closestDistanceOnTrack(stationData.point);

// Planting is denser at the rim and is intentionally varied to retain a hand-assembled silhouette.
const trees = [
  [-12.2, -3.7, 1.16, 'pine'], [-11.0, -1.6, 0.9, 'round'], [-12.4, 0.5, 1.1, 'pine'],
  [-11.6, 2.7, 0.98, 'round'], [-9.7, 5.7, 1.24, 'pine'], [-7.2, 7.0, 0.86, 'round'],
  [-4.8, 7.45, 1.0, 'pine'], [0.8, 7.1, 0.9, 'round'], [3.7, 7.1, 1.08, 'pine'],
  [8.2, 7.1, 1.18, 'round'], [10.6, 5.5, 1.05, 'pine'], [11.9, 3.75, 0.82, 'round'],
  [11.4, -4.45, 1.12, 'pine'], [8.9, -6.35, 1.06, 'round'], [5.7, -7.0, 1.22, 'pine'],
  [0.4, -7.35, 1.0, 'round'], [-3.4, -7.12, 1.14, 'pine'], [-8.2, -6.95, 1.04, 'round'],
  [-9.6, -4.55, 0.8, 'pine'], [-8.25, 1.25, 0.8, 'round'], [-7.85, 4.7, 0.68, 'round'],
  [0.0, 5.2, 0.72, 'round'], [3.95, 5.8, 0.7, 'round'], [8.1, 3.1, 0.76, 'round'],
  [8.1, 0.9, 0.72, 'pine'], [7.78, -3.75, 0.72, 'round'], [1.25, -4.65, 0.74, 'round'],
];
trees.forEach(([x, z, scale, variant]) => createTree(x, z, scale, variant));

createFence(8.45, 0.52, 3.0, 0.12);
createFence(5.45, 0.58, 2.15, -0.18);
createFence(-6.95, 4.45, 2.2, Math.PI / 2);
createBench(-0.15, 5.1, -0.25);
createBench(2.9, 1.25, 0.1);
createBench(-4.0, 0.65, 0.32);
[
  [-1.3, 7.28, 1.0], [-3.9, 5.2, 0.82], [0.7, 4.6, 0.82], [1.2, 1.55, 0.92],
  [-3.1, 0.2, 0.82], [-6.8, -1.25, 0.82], [3.95, 0.35, 0.82], [6.0, -1.45, 0.8],
].forEach(([x, z, scale]) => createLamp(x, z, scale));

const trainData = createTrain();
const trainState = {
  running: true,
  speedMultiplier: 1,
  leadDistance: stationDistance - trackLength * 0.265,
  nextStationDistance: stationDistance,
  stopRemaining: 0,
};
const initialLeadDistance = trainState.leadDistance;
const trainOffsets = [0, 3.72, 7.44];
while (trainState.nextStationDistance <= trainState.leadDistance) trainState.nextStationDistance += trackLength;

function placeTrainCar(car, distance) {
  const normalized = THREE.MathUtils.euclideanModulo(distance, trackLength) / trackLength;
  const point = trackCurve.getPointAt(normalized);
  const tangent = trackCurve.getTangentAt(normalized).setY(0).normalize();
  car.position.set(point.x, trackY + 0.06, point.z);
  car.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), tangent);
}

function updateTrainPositions() {
  trainData.cars.forEach((car, index) => placeTrainCar(car, trainState.leadDistance - trainOffsets[index]));
}

function updateTrain(delta) {
  if (!trainState.running) return;
  if (trainState.stopRemaining > 0) {
    const wasStopping = trainState.stopRemaining > 0;
    trainState.stopRemaining = Math.max(0, trainState.stopRemaining - delta);
    if (wasStopping && trainState.stopRemaining === 0) updateControls();
    return;
  }
  const travel = 2.9 * trainState.speedMultiplier * delta;
  const distanceToStation = trainState.nextStationDistance - trainState.leadDistance;
  if (distanceToStation <= travel) {
    trainState.leadDistance = trainState.nextStationDistance;
    trainState.nextStationDistance += trackLength;
    trainState.stopRemaining = 2;
    updateControls();
  } else {
    trainState.leadDistance += travel;
  }
  trainData.cars.forEach((car) => {
    car.userData.wheels?.forEach((wheel) => {
      wheel.rotateX(travel / 0.37);
    });
  });
  updateTrainPositions();
}

const ambient = new THREE.HemisphereLight('#ffefcf', '#526650', 2.25);
scene.add(ambient);
const sun = new THREE.DirectionalLight('#ffd39a', 3.65);
sun.position.set(19, 28, 12);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.near = 1;
sun.shadow.camera.far = 70;
sun.shadow.camera.left = -28;
sun.shadow.camera.right = 28;
sun.shadow.camera.top = 28;
sun.shadow.camera.bottom = -28;
sun.shadow.bias = -0.00045;
scene.add(sun);
const moon = new THREE.DirectionalLight('#91b5ff', 0.03);
moon.position.set(-18, 26, -12);
scene.add(moon);

const moonOrbMaterial = new THREE.MeshBasicMaterial({ color: '#f3e3bd', transparent: true, opacity: 0 });
const moonOrb = new THREE.Mesh(new THREE.SphereGeometry(2.15, 24, 16), moonOrbMaterial);
moonOrb.position.set(-27, 24, -33);
scene.add(moonOrb);

let isNight = false;
function updateEnvironment() {
  document.body.classList.toggle('night', isNight);
  scene.background.set(isNight ? '#14223a' : '#e8b67d');
  scene.fog.color.set(isNight ? '#14223a' : '#e8b67d');
  scene.fog.near = isNight ? 32 : 38;
  scene.fog.far = isNight ? 76 : 82;
  ambient.color.set(isNight ? '#8ca8dd' : '#ffefcf');
  ambient.groundColor.set(isNight ? '#1b2d39' : '#526650');
  ambient.intensity = isNight ? 1.1 : 2.25;
  sun.intensity = isNight ? 0.34 : 3.65;
  moon.intensity = isNight ? 1.45 : 0.03;
  moonOrbMaterial.opacity = isNight ? 0.92 : 0;
  renderer.toneMappingExposure = isNight ? 0.92 : 1.08;
  windowMaterials.forEach((material) => { material.emissiveIntensity = isNight ? 1.65 : 0.06; });
  nightLights.forEach(({ light, material, intensity }) => {
    light.intensity = isNight ? intensity : 0;
    material.emissiveIntensity = isNight ? 2.1 : 0.08;
  });
  waterMaterials.forEach((material) => {
    material.color.set(isNight ? '#356782' : '#4c9ab3');
    material.emissive.set(isNight ? '#173c59' : '#164454');
    material.emissiveIntensity = isNight ? 0.48 : 0.12;
  });
  document.querySelector('#toggle-time').textContent = isNight ? '切换至白天' : '切换至夜晚';
}

const toggleTrain = document.querySelector('#toggle-train');
const resetScene = document.querySelector('#reset-scene');
const speedSlider = document.querySelector('#speed-slider');
const speedValue = document.querySelector('#speed-value');
const trainStatus = document.querySelector('#train-status');
const toggleTime = document.querySelector('#toggle-time');

function updateControls() {
  toggleTrain.textContent = trainState.running ? '暂停列车' : '继续运行';
  speedValue.textContent = `${trainState.speedMultiplier.toFixed(1)}×`;
  if (!trainState.running) {
    trainStatus.textContent = '已暂停';
  } else if (trainState.stopRemaining > 0) {
    trainStatus.textContent = '车站停靠中';
  } else {
    trainStatus.textContent = '运行中';
  }
}

toggleTrain.addEventListener('click', () => {
  trainState.running = !trainState.running;
  updateControls();
});

speedSlider.addEventListener('input', () => {
  trainState.speedMultiplier = Number(speedSlider.value);
  updateControls();
});

resetScene.addEventListener('click', () => {
  trainState.running = true;
  trainState.speedMultiplier = 1;
  trainState.leadDistance = initialLeadDistance;
  trainState.nextStationDistance = stationDistance;
  trainState.stopRemaining = 0;
  while (trainState.nextStationDistance <= trainState.leadDistance) trainState.nextStationDistance += trackLength;
  speedSlider.value = '1';
  camera.position.copy(initialCameraPosition);
  controls.target.copy(initialTarget);
  controls.update();
  updateTrainPositions();
  updateControls();
});

toggleTime.addEventListener('click', () => {
  isNight = !isNight;
  updateEnvironment();
});

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

updateTrainPositions();
updateEnvironment();
updateControls();

const clock = new THREE.Clock();
let waterTime = 0;
function animate() {
  const delta = Math.min(clock.getDelta(), 0.05);
  waterTime += delta;
  // A restrained shimmer keeps the stream from reading as a flat painted stripe.
  materials.water.emissiveIntensity = (isNight ? 0.48 : 0.12) + Math.sin(waterTime * 1.4) * 0.035;
  updateTrain(delta);
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

animate();
