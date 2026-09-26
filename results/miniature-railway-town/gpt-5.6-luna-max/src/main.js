import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import './style.css';

const container = document.querySelector('#scene-container');
const toggleRunButton = document.querySelector('#toggle-run');
const resetButton = document.querySelector('#reset-scene');
const speedControl = document.querySelector('#speed-control');
const speedValue = document.querySelector('#speed-value');
const toggleNightButton = document.querySelector('#toggle-night');
const modeButtonLabel = document.querySelector('#mode-button-label');
const modeName = document.querySelector('#mode-name');
const statusText = document.querySelector('#status-text');
const statusDetail = document.querySelector('#status-detail');
const statusDot = document.querySelector('#status-dot');

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(39, 1, 0.1, 100);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
const controls = new OrbitControls(camera, renderer.domElement);
const clock = new THREE.Clock();

const initialCameraPosition = new THREE.Vector3(16.8, 17.6, 20.2);
const initialTarget = new THREE.Vector3(0, 1.4, 0);
const worldUp = new THREE.Vector3(0, 1, 0);
const forwardAxis = new THREE.Vector3(0, 0, 1);
const tempTangent = new THREE.Vector3();
const tempLateral = new THREE.Vector3();
const glowingMaterials = [];
const nightLights = [];

const state = {
  running: true,
  night: false,
  speed: 1,
  trainDistance: 0.08,
  stationHold: 0,
  stationReady: true,
  stationU: 0,
};

const colors = {
  grass: 0x78925f,
  grassLight: 0xa2ae6b,
  grassDark: 0x536c4b,
  earth: 0x8e6c4e,
  wood: 0x82533b,
  woodDark: 0x4b3127,
  woodLight: 0xb77a4f,
  cream: 0xe8d0a5,
  paper: 0xf4e3c1,
  brick: 0xb5664f,
  red: 0xa6443c,
  teal: 0x4d7f78,
  blue: 0x597694,
  mustard: 0xd19a4e,
  charcoal: 0x34383a,
  brass: 0xc19a58,
  water: 0x4b9aa1,
};

renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.08;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
container.appendChild(renderer.domElement);

controls.enableDamping = true;
controls.dampingFactor = 0.065;
controls.minDistance = 13;
controls.maxDistance = 34;
controls.minPolarAngle = 0.38;
controls.maxPolarAngle = Math.PI / 2.08;
controls.target.copy(initialTarget);
camera.position.copy(initialCameraPosition);
controls.update();

const materials = {
  baseWood: new THREE.MeshStandardMaterial({ color: colors.woodDark, roughness: 0.78 }),
  baseEdge: new THREE.MeshStandardMaterial({ color: colors.wood, roughness: 0.7 }),
  grass: new THREE.MeshStandardMaterial({ color: colors.grass, roughness: 1 }),
  grassLight: new THREE.MeshStandardMaterial({ color: colors.grassLight, roughness: 1, flatShading: true }),
  grassDark: new THREE.MeshStandardMaterial({ color: colors.grassDark, roughness: 1, flatShading: true }),
  earth: new THREE.MeshStandardMaterial({ color: colors.earth, roughness: 1 }),
  road: new THREE.MeshStandardMaterial({ color: 0x806b5b, roughness: 0.95 }),
  roadEdge: new THREE.MeshStandardMaterial({ color: 0xbaa37f, roughness: 1 }),
  water: new THREE.MeshPhysicalMaterial({
    color: colors.water,
    roughness: 0.24,
    metalness: 0.08,
    clearcoat: 0.5,
    clearcoatRoughness: 0.22,
    transparent: true,
    opacity: 0.92,
  }),
  waterHighlight: new THREE.MeshBasicMaterial({ color: 0x9ed2c2, transparent: true, opacity: 0.35 }),
  rail: new THREE.MeshStandardMaterial({ color: 0x343637, roughness: 0.48, metalness: 0.65 }),
  railSide: new THREE.MeshStandardMaterial({ color: 0x7c6b5b, roughness: 1 }),
  sleeper: new THREE.MeshStandardMaterial({ color: 0x5a4030, roughness: 0.95 }),
  bridge: new THREE.MeshStandardMaterial({ color: 0x6f4634, roughness: 0.95 }),
  bridgeDark: new THREE.MeshStandardMaterial({ color: 0x3d2e29, roughness: 0.9 }),
  stone: new THREE.MeshStandardMaterial({ color: 0x83796e, roughness: 1, flatShading: true }),
  white: new THREE.MeshStandardMaterial({ color: colors.paper, roughness: 0.82 }),
  wallCream: new THREE.MeshStandardMaterial({ color: colors.cream, roughness: 0.9 }),
  wallBrick: new THREE.MeshStandardMaterial({ color: colors.brick, roughness: 0.9 }),
  wallTeal: new THREE.MeshStandardMaterial({ color: colors.teal, roughness: 0.87 }),
  wallBlue: new THREE.MeshStandardMaterial({ color: colors.blue, roughness: 0.88 }),
  wallMustard: new THREE.MeshStandardMaterial({ color: colors.mustard, roughness: 0.9 }),
  roofRed: new THREE.MeshStandardMaterial({ color: colors.red, roughness: 0.88, flatShading: true }),
  roofCharcoal: new THREE.MeshStandardMaterial({ color: colors.charcoal, roughness: 0.8, flatShading: true }),
  roofWood: new THREE.MeshStandardMaterial({ color: 0x6a4a3b, roughness: 0.95, flatShading: true }),
  trim: new THREE.MeshStandardMaterial({ color: 0xf1d7a9, roughness: 0.8 }),
  door: new THREE.MeshStandardMaterial({ color: 0x45322e, roughness: 0.84 }),
  darkMetal: new THREE.MeshStandardMaterial({ color: 0x272a2b, roughness: 0.52, metalness: 0.68 }),
  trainRed: new THREE.MeshStandardMaterial({ color: 0x9d3d35, roughness: 0.65, metalness: 0.12 }),
  trainRedDark: new THREE.MeshStandardMaterial({ color: 0x652b2a, roughness: 0.72, metalness: 0.1 }),
  trainCream: new THREE.MeshStandardMaterial({ color: 0xd8b87d, roughness: 0.7 }),
  trainBlue: new THREE.MeshStandardMaterial({ color: 0x476674, roughness: 0.68 }),
  wheel: new THREE.MeshStandardMaterial({ color: 0x252627, roughness: 0.4, metalness: 0.7 }),
  window: new THREE.MeshStandardMaterial({
    color: 0x2e2522,
    emissive: 0xf5a94e,
    emissiveIntensity: 0.16,
    roughness: 0.35,
  }),
  lamp: new THREE.MeshStandardMaterial({
    color: 0xffd17e,
    emissive: 0xffa33c,
    emissiveIntensity: 0.2,
    roughness: 0.28,
  }),
};

glowingMaterials.push(materials.window, materials.lamp);

const ambient = new THREE.HemisphereLight(0xffe5c8, 0x536359, 0.78);
scene.add(ambient);

const sun = new THREE.DirectionalLight(0xffc484, 3.25);
sun.position.set(-10, 18, 10);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.left = -18;
sun.shadow.camera.right = 18;
sun.shadow.camera.top = 18;
sun.shadow.camera.bottom = -18;
sun.shadow.camera.near = 1;
sun.shadow.camera.far = 50;
sun.shadow.bias = -0.00035;
scene.add(sun);

const fill = new THREE.DirectionalLight(0x9fb9db, 0.45);
fill.position.set(11, 10, -12);
scene.add(fill);

const moon = new THREE.DirectionalLight(0x829bd1, 0);
moon.position.set(-7, 14, -12);
scene.add(moon);

scene.background = new THREE.Color(0xecc18f);
scene.fog = new THREE.Fog(0xecc18f, 30, 47);

function setShadow(mesh, cast = true, receive = true) {
  mesh.castShadow = cast;
  mesh.receiveShadow = receive;
  return mesh;
}

function addBox(parent, size, position, material, options = {}) {
  const mesh = setShadow(new THREE.Mesh(new THREE.BoxGeometry(...size), material), options.cast ?? true, options.receive ?? true);
  mesh.position.set(...position);
  if (options.rotation) mesh.rotation.set(...options.rotation);
  parent.add(mesh);
  return mesh;
}

function addCylinder(parent, radiusTop, radiusBottom, height, position, material, options = {}) {
  const mesh = setShadow(
    new THREE.Mesh(new THREE.CylinderGeometry(radiusTop, radiusBottom, height, options.segments ?? 12), material),
    options.cast ?? true,
    options.receive ?? true,
  );
  mesh.position.set(...position);
  if (options.rotation) mesh.rotation.set(...options.rotation);
  parent.add(mesh);
  return mesh;
}

function addSphere(parent, radius, position, material, options = {}) {
  const mesh = setShadow(
    new THREE.Mesh(new THREE.SphereGeometry(radius, options.widthSegments ?? 12, options.heightSegments ?? 8), material),
    options.cast ?? true,
    options.receive ?? true,
  );
  mesh.position.set(...position);
  if (options.scale) mesh.scale.set(...options.scale);
  parent.add(mesh);
  return mesh;
}

function groundPolygon(points, y, material, parent = scene) {
  const shape = new THREE.Shape();
  points.forEach(([x, z], index) => {
    const shapeX = x;
    const shapeY = -z;
    if (index === 0) shape.moveTo(shapeX, shapeY);
    else shape.lineTo(shapeX, shapeY);
  });
  shape.closePath();
  const geometry = new THREE.ShapeGeometry(shape);
  geometry.rotateX(-Math.PI / 2);
  const mesh = setShadow(new THREE.Mesh(geometry, material), false, true);
  mesh.position.y = y;
  parent.add(mesh);
  return mesh;
}

function makeBeamBetween(start, end, thickness, material, parent = scene) {
  const vector = new THREE.Vector3().subVectors(end, start);
  const length = vector.length();
  const mesh = setShadow(new THREE.Mesh(new THREE.BoxGeometry(thickness, thickness, length), material));
  mesh.position.copy(start).add(end).multiplyScalar(0.5);
  mesh.quaternion.setFromUnitVectors(forwardAxis, vector.normalize());
  parent.add(mesh);
  return mesh;
}

function createTree(x, z, scale = 1, variant = 0) {
  const group = new THREE.Group();
  group.position.set(x, 1.2, z);
  group.scale.setScalar(scale);
  const trunkMaterial = variant === 2 ? materials.woodDark : materials.wood;
  addCylinder(group, 0.12, 0.17, 1.35, [0, 0.68, 0], trunkMaterial, { segments: 8 });

  if (variant === 0) {
    addSphere(group, 0.68, [0, 1.47, 0], materials.grassDark, { widthSegments: 9, heightSegments: 6, scale: [1, 1.05, 0.9] });
    addSphere(group, 0.5, [-0.35, 1.82, 0.04], materials.grassLight, { widthSegments: 8, heightSegments: 5, scale: [1, 1.08, 1] });
    addSphere(group, 0.45, [0.38, 1.75, -0.07], materials.grass, { widthSegments: 8, heightSegments: 5 });
  } else if (variant === 1) {
    addSphere(group, 0.56, [0, 1.55, 0], materials.grassDark, { widthSegments: 8, heightSegments: 5, scale: [1.15, 1.35, 1.08] });
    addSphere(group, 0.37, [0, 2.08, 0], materials.grassLight, { widthSegments: 8, heightSegments: 5 });
  } else {
    addCylinder(group, 0.38, 0.54, 0.78, [0, 1.57, 0], materials.grassDark, { segments: 8 });
    addSphere(group, 0.38, [0, 2.02, 0], materials.grassLight, { widthSegments: 8, heightSegments: 5 });
  }

  scene.add(group);
  return group;
}

function createBush(x, z, scale = 1, material = materials.grassDark) {
  const group = new THREE.Group();
  group.position.set(x, 1.2, z);
  group.scale.setScalar(scale);
  addSphere(group, 0.35, [-0.28, 0.28, 0], material, { widthSegments: 8, heightSegments: 5 });
  addSphere(group, 0.42, [0.12, 0.38, -0.02], material, { widthSegments: 8, heightSegments: 5 });
  addSphere(group, 0.3, [0.42, 0.23, 0.07], materials.grassLight, { widthSegments: 8, heightSegments: 5 });
  scene.add(group);
  return group;
}

function createFlowerPatch(x, z, color, scale = 1) {
  const group = new THREE.Group();
  group.position.set(x, 1.2, z);
  group.scale.setScalar(scale);
  const flowerMaterial = new THREE.MeshStandardMaterial({ color, roughness: 0.85, flatShading: true });
  for (let index = 0; index < 7; index += 1) {
    const angle = index * 2.4;
    const radius = 0.18 + (index % 3) * 0.08;
    addCylinder(group, 0.04, 0.045, 0.24, [Math.cos(angle) * radius, 0.12, Math.sin(angle) * radius], materials.grassDark, { segments: 5 });
    addSphere(group, 0.07, [Math.cos(angle) * radius, 0.28, Math.sin(angle) * radius], flowerMaterial, { widthSegments: 6, heightSegments: 4 });
  }
  scene.add(group);
}

function createLamp(x, z, rotation = 0) {
  const group = new THREE.Group();
  group.position.set(x, 1.2, z);
  group.rotation.y = rotation;
  addCylinder(group, 0.045, 0.065, 1.24, [0, 0.62, 0], materials.darkMetal, { segments: 8 });
  addCylinder(group, 0.16, 0.08, 0.08, [0, 1.22, 0], materials.darkMetal, { segments: 8 });
  const bulb = addSphere(group, 0.105, [0, 1.28, 0], materials.lamp, { widthSegments: 10, heightSegments: 6 });
  const pointLight = new THREE.PointLight(0xffb45b, 0, 3.2, 2);
  pointLight.position.set(0, 1.3, 0);
  pointLight.castShadow = false;
  group.add(pointLight);
  nightLights.push({ pointLight, bulb });
  scene.add(group);
  return group;
}

// Display plinth, terrain and the small layered edge details.
addBox(scene, [24, 0.82, 18], [0, 0.41, 0], materials.baseWood, { cast: true });
addBox(scene, [23.2, 0.18, 17.2], [0, 0.87, 0], materials.baseEdge, { cast: false });
addBox(scene, [22.55, 0.42, 16.55], [0, 1.06, 0], materials.grass, { cast: false });
addBox(scene, [23.6, 0.16, 0.24], [0, 0.98, -8.78], materials.woodLight, { cast: false });
addBox(scene, [23.6, 0.16, 0.24], [0, 0.98, 8.78], materials.woodLight, { cast: false });
addBox(scene, [0.24, 0.16, 17.2], [-11.68, 0.98, 0], materials.woodLight, { cast: false });
addBox(scene, [0.24, 0.16, 17.2], [11.68, 0.98, 0], materials.woodLight, { cast: false });

const riverPoints = [
  [-7.5, -8.45],
  [-4.8, -8.45],
  [-1.5, -4.8],
  [1.2, -1.0],
  [4.25, 3.0],
  [8.7, 7.55],
  [8.7, 8.45],
  [6.55, 8.45],
  [2.65, 4.5],
  [-0.5, 0.2],
  [-3.8, -3.7],
  [-7.8, -6.7],
];
const riverBankPoints = riverPoints.map(([x, z], index) => {
  const scale = index < 6 ? 1.08 : 0.93;
  return [x * scale, z * scale];
});
groundPolygon(riverBankPoints, 1.205, new THREE.MeshStandardMaterial({ color: 0xb89a6d, roughness: 1 }));
const river = groundPolygon(riverPoints, 1.225, materials.water);
river.renderOrder = 2;

const rippleMaterial = new THREE.MeshBasicMaterial({ color: 0xc4e1cf, transparent: true, opacity: 0.48 });
[
  [[-3.85, -5.0], 0.72, 0.06],
  [[0.4, 0.1], 0.9, -0.2],
  [[4.45, 4.12], 0.72, 0.18],
  [[7.05, 6.94], 0.58, -0.12],
].forEach(([[x, z], length, rotation]) => {
  const ripple = addBox(scene, [length, 0.012, 0.045], [x, 1.238, z], rippleMaterial, { cast: false, receive: false });
  ripple.rotation.y = rotation;
});

// A dry-stone town square and a connected road network.
groundPolygon([
  [-3.3, 0.2],
  [-1.7, -0.5],
  [0.0, 0.25],
  [-0.6, 2.1],
  [-2.75, 2.0],
], 1.242, materials.roadEdge);

function road(points, width = 0.75) {
  const left = [];
  const right = [];
  points.forEach((point, index) => {
    const current = new THREE.Vector2(...point);
    const previous = new THREE.Vector2(...(points[Math.max(0, index - 1)]));
    const next = new THREE.Vector2(...(points[Math.min(points.length - 1, index + 1)]));
    const direction = next.sub(previous).normalize();
    const normal = new THREE.Vector2(-direction.y, direction.x).multiplyScalar(width / 2);
    left.push([current.x + normal.x, current.y + normal.y]);
    right.unshift([current.x - normal.x, current.y - normal.y]);
  });
  groundPolygon([...left, ...right], 1.25, materials.road);
}

road([[-4.1, 7.45], [-3.85, 5.5], [-2.8, 3.6], [-2.45, 1.25]], 0.72);
road([[-2.45, 1.25], [0.2, 1.22], [2.8, 0.0], [4.25, -1.9]], 0.68);
road([[-2.55, 1.25], [-4.15, -0.8], [-4.0, -2.9]], 0.64);
road([[0.2, 1.22], [1.8, 3.3], [3.9, 4.0]], 0.58);

// Rails: a continuous closed curve with two purposeful crossings over the river.
const trackY = 1.48;
const railControlPoints = [
  new THREE.Vector3(-8.5, trackY, -4.8),
  new THREE.Vector3(-5.5, trackY, -6.65),
  new THREE.Vector3(2.75, trackY, -6.65),
  new THREE.Vector3(7.25, trackY, -4.45),
  new THREE.Vector3(7.25, trackY, 0.25),
  new THREE.Vector3(7.25, trackY, 4.8),
  new THREE.Vector3(4.5, trackY, 6.55),
  new THREE.Vector3(-4.5, trackY, 6.55),
  new THREE.Vector3(-7.9, trackY, 4.3),
  new THREE.Vector3(-8.3, trackY, 0),
];
const railCurve = new THREE.CatmullRomCurve3(railControlPoints, true, 'centripetal', 0.34);
const railLength = railCurve.getLength();

function sampleRailOffset(offset) {
  const samples = 320;
  const points = [];
  for (let index = 0; index <= samples; index += 1) {
    const u = index / samples;
    const point = railCurve.getPointAt(u);
    const tangent = railCurve.getTangentAt(u).normalize();
    const lateral = new THREE.Vector3().crossVectors(worldUp, tangent).normalize();
    points.push(point.add(lateral.multiplyScalar(offset)));
  }
  return points;
}

const ballastCurve = new THREE.CatmullRomCurve3(railCurve.getSpacedPoints(320), true, 'centripetal', 0.34);
const ballast = setShadow(new THREE.Mesh(new THREE.TubeGeometry(ballastCurve, 640, 0.28, 7, true), materials.railSide), false, true);
scene.add(ballast);

[-0.36, 0.36].forEach((offset) => {
  const railPath = new THREE.CatmullRomCurve3(sampleRailOffset(offset), true, 'centripetal', 0.2);
  const rail = setShadow(new THREE.Mesh(new THREE.TubeGeometry(railPath, 640, 0.052, 7, true), materials.rail), true, true);
  scene.add(rail);
});

for (let index = 0; index < 116; index += 1) {
  const u = index / 116;
  const point = railCurve.getPointAt(u);
  const tangent = railCurve.getTangentAt(u).normalize();
  const lateral = new THREE.Vector3().crossVectors(worldUp, tangent).normalize();
  const sleeper = addBox(scene, [1.18, 0.105, 0.22], [point.x, trackY - 0.18, point.z], materials.sleeper, { cast: false });
  sleeper.quaternion.setFromUnitVectors(new THREE.Vector3(1, 0, 0), lateral);
}

function createBridge(center, orientation = 'x', length = 3.2) {
  const group = new THREE.Group();
  group.position.set(center[0], 0, center[1]);
  const alongX = orientation === 'x';
  const deckSize = alongX ? [length, 0.24, 1.2] : [1.2, 0.24, length];
  addBox(group, deckSize, [0, 1.28, 0], materials.bridge, { cast: true });

  for (let index = 0; index < 11; index += 1) {
    const offset = -length / 2 + 0.15 + index * ((length - 0.3) / 10);
    const plankSize = alongX ? [0.17, 0.11, 1.32] : [1.32, 0.11, 0.17];
    addBox(group, plankSize, alongX ? [offset, 1.435, 0] : [0, 1.435, offset], materials.woodLight, { cast: false });
  }

  const supportLocations = [-length / 2 + 0.44, length / 2 - 0.44];
  supportLocations.forEach((offset) => {
    const supportSize = alongX ? [0.23, 0.78, 0.24] : [0.24, 0.78, 0.23];
    addBox(group, supportSize, alongX ? [offset, 0.88, 0] : [0, 0.88, offset], materials.bridgeDark, { cast: true });
  });

  const postHeight = 1.15;
  const sideOffsets = [-0.5, 0.5];
  sideOffsets.forEach((side) => {
    if (alongX) {
      [-length / 2 + 0.22, length / 2 - 0.22].forEach((offset) => {
        addBox(group, [0.14, postHeight, 0.14], [offset, 1.82, side], materials.bridgeDark, { cast: true });
      });
      makeBeamBetween(new THREE.Vector3(-length / 2 + 0.22, 2.35, side), new THREE.Vector3(length / 2 - 0.22, 2.35, side), 0.13, materials.bridgeDark, group);
      makeBeamBetween(new THREE.Vector3(-length / 2 + 0.25, 1.62, side), new THREE.Vector3(0, 2.32, side), 0.09, materials.bridgeDark, group);
      makeBeamBetween(new THREE.Vector3(0, 2.32, side), new THREE.Vector3(length / 2 - 0.25, 1.62, side), 0.09, materials.bridgeDark, group);
    } else {
      [-length / 2 + 0.22, length / 2 - 0.22].forEach((offset) => {
        addBox(group, [0.14, postHeight, 0.14], [side, 1.82, offset], materials.bridgeDark, { cast: true });
      });
      makeBeamBetween(new THREE.Vector3(side, 2.35, -length / 2 + 0.22), new THREE.Vector3(side, 2.35, length / 2 - 0.22), 0.13, materials.bridgeDark, group);
      makeBeamBetween(new THREE.Vector3(side, 1.62, -length / 2 + 0.25), new THREE.Vector3(side, 2.32, 0), 0.09, materials.bridgeDark, group);
      makeBeamBetween(new THREE.Vector3(side, 2.32, 0), new THREE.Vector3(side, 1.62, length / 2 - 0.25), 0.09, materials.bridgeDark, group);
    }
  });

  scene.add(group);
  return group;
}

createBridge([-5.15, -6.65], 'x', 2.8);
createBridge([7.25, 3.65], 'z', 3.3);

function addWindow(parent, x, y, z, width = 0.34, height = 0.34, rotation = [0, 0, 0]) {
  return addBox(parent, [width, height, 0.045], [x, y, z], materials.window, { rotation, cast: false });
}

function addHouse(position, options = {}) {
  const group = new THREE.Group();
  const width = options.width ?? 1.55;
  const depth = options.depth ?? 1.35;
  const height = options.height ?? 1.3;
  const wallMaterial = options.wall ?? materials.wallCream;
  const roofMaterial = options.roof ?? materials.roofRed;
  group.position.set(position[0], 1.2, position[1]);
  group.rotation.y = options.rotation ?? 0;

  addBox(group, [width, height, depth], [0, height / 2, 0], wallMaterial);
  if (options.roofStyle === 'flat') {
    addBox(group, [width + 0.2, 0.16, depth + 0.2], [0, height + 0.08, 0], roofMaterial);
  } else {
    const roof = setShadow(new THREE.Mesh(new THREE.ConeGeometry(Math.max(width, depth) * 0.72, 0.82, 4), roofMaterial));
    roof.position.set(0, height + 0.48, 0);
    roof.scale.set(width / Math.max(width, depth), 1, depth / Math.max(width, depth));
    roof.rotation.y = Math.PI / 4;
    group.add(roof);
  }

  addBox(group, [0.38, 0.72, 0.045], [0, 0.36, depth / 2 + 0.025], options.door ?? materials.door, { cast: false });
  addWindow(group, -width * 0.27, height * 0.57, depth / 2 + 0.03, 0.34, 0.34);
  addWindow(group, width * 0.27, height * 0.57, depth / 2 + 0.03, 0.34, 0.34);

  if (options.sideWindows !== false) {
    addWindow(group, width / 2 + 0.03, height * 0.56, 0, 0.04, 0.34, [0, Math.PI / 2, 0]);
    addWindow(group, -width / 2 - 0.03, height * 0.56, 0, 0.04, 0.34, [0, Math.PI / 2, 0]);
  }

  if (options.chimney !== false) {
    addBox(group, [0.16, 0.45, 0.16], [width * 0.28, height + 0.7, -depth * 0.18], materials.woodDark);
  }

  if (options.awning) {
    addBox(group, [width * 0.72, 0.08, 0.38], [0, height * 0.86, depth / 2 + 0.18], options.awning, { cast: true });
  }

  scene.add(group);
  return group;
}

function addTownHall(position) {
  const group = new THREE.Group();
  group.position.set(position[0], 1.2, position[1]);
  addBox(group, [2.2, 1.72, 1.55], [0, 0.86, 0], materials.wallCream);
  addBox(group, [2.38, 0.18, 1.72], [0, 1.78, 0], materials.roofCharcoal);
  addCylinder(group, 0.32, 0.24, 0.55, [0, 2.12, 0], materials.roofRed, { segments: 8 });
  addSphere(group, 0.11, [0, 2.45, 0], materials.brass, { widthSegments: 8, heightSegments: 5 });
  addBox(group, [0.42, 0.95, 0.05], [0, 0.48, 0.8], materials.door, { cast: false });
  [-0.65, 0.65].forEach((x) => addWindow(group, x, 1.14, 0.8, 0.38, 0.42));
  [-0.65, 0.65].forEach((x) => addWindow(group, x, 1.14, -0.8, 0.38, 0.42, [0, Math.PI, 0]));
  scene.add(group);
}

function addMill(position) {
  const group = new THREE.Group();
  group.position.set(position[0], 1.2, position[1]);
  addCylinder(group, 0.78, 0.86, 1.85, [0, 0.93, 0], materials.wallBrick, { segments: 12 });
  const roof = setShadow(new THREE.Mesh(new THREE.ConeGeometry(1.03, 0.62, 12), materials.roofCharcoal));
  roof.position.y = 2.15;
  group.add(roof);
  addBox(group, [0.55, 0.64, 0.05], [0, 0.43, 0.85], materials.door, { cast: false });
  addWindow(group, -0.33, 1.15, 0.79, 0.27, 0.32);
  addWindow(group, 0.33, 1.15, 0.79, 0.27, 0.32);
  addBox(group, [0.08, 0.88, 0.06], [0, 1.04, 0.91], materials.cream, { cast: false });
  scene.add(group);
}

// Station, placed beside the front straight so the stopping event reads clearly.
function addStation() {
  const group = new THREE.Group();
  group.position.set(-4.25, 1.2, 7.55);
  addBox(group, [4.0, 1.26, 1.35], [0, 0.63, 0], materials.wallCream);
  const roof = setShadow(new THREE.Mesh(new THREE.ConeGeometry(1.32, 0.8, 4), materials.roofRed));
  roof.position.set(0, 1.62, 0);
  roof.rotation.y = Math.PI / 4;
  roof.scale.set(1.65, 1, 0.62);
  group.add(roof);
  addBox(group, [0.48, 0.74, 0.05], [0, 0.38, 0.7], materials.door, { cast: false });
  [-1.22, -0.42, 0.42, 1.22].forEach((x) => addWindow(group, x, 0.8, 0.7, 0.36, 0.4));
  addBox(group, [1.04, 0.48, 0.06], [0, 1.08, 0.73], materials.trim, { cast: false });

  const clockFace = new THREE.Mesh(new THREE.CircleGeometry(0.27, 20), materials.window);
  clockFace.position.set(0, 1.82, 0.74);
  clockFace.rotation.x = -Math.PI / 2;
  clockFace.rotation.z = Math.PI;
  group.add(clockFace);

  addBox(scene, [5.2, 0.14, 0.9], [-4.25, 1.31, 6.88], materials.paper, { cast: true });
  addBox(scene, [5.0, 0.08, 0.12], [-4.25, 1.42, 6.42], materials.woodDark, { cast: false });
  addBox(scene, [5.0, 0.08, 0.12], [-4.25, 1.42, 7.33], materials.woodDark, { cast: false });

  const stationSign = addBox(group, [1.42, 0.34, 0.07], [0, 1.57, 0.76], materials.woodDark, { cast: false });
  stationSign.material = materials.woodDark;
  const signLight = new THREE.PointLight(0xffb054, 0, 2.8, 2);
  signLight.position.set(0, 1.55, 0.95);
  group.add(signLight);
  nightLights.push({ pointLight: signLight, bulb: null });
  scene.add(group);
}

addStation();
addTownHall([-2.1, 3.0]);
addMill([4.55, 2.1]);
addHouse([-4.85, 1.7], { wall: materials.wallTeal, roof: materials.roofCharcoal, width: 1.5, depth: 1.3, rotation: -0.12 });
addHouse([-3.55, -2.4], { wall: materials.wallMustard, roof: materials.roofWood, width: 1.45, depth: 1.2, rotation: 0.18, awning: materials.roofRed });
addHouse([1.12, 2.35], { wall: materials.wallBlue, roof: materials.roofRed, width: 1.7, depth: 1.45, rotation: 0.26 });
addHouse([2.8, -1.65], { wall: materials.wallCream, roof: materials.roofCharcoal, width: 1.55, depth: 1.3, rotation: -0.25, roofStyle: 'flat' });
addHouse([0.25, -3.45], { wall: materials.wallBrick, roof: materials.roofCharcoal, width: 1.35, depth: 1.25, rotation: 0.35 });
addHouse([-6.35, 2.3], { wall: materials.wallCream, roof: materials.roofRed, width: 1.15, depth: 1.1, height: 1.05, rotation: 0.15 });

// Trees frame the town and keep sightlines through the track readable.
[
  [-9.7, -7.4, 1.05, 0], [-7.8, 7.35, 0.9, 1], [-9.55, 5.6, 1.2, 0],
  [9.55, -6.8, 1.02, 1], [9.45, 6.9, 0.92, 0], [6.5, 7.5, 0.82, 2],
  [-6.8, -5.1, 0.72, 1], [5.5, -5.75, 0.86, 0], [5.75, 5.5, 0.72, 1],
  [-1.1, 5.15, 0.72, 0], [-6.8, 4.9, 0.62, 2], [6.1, -0.2, 0.64, 0],
].forEach(([x, z, scale, variant]) => createTree(x, z, scale, variant));

[
  [-5.55, 0.15, 0.85], [-1.05, 3.95, 0.7], [1.8, 0.2, 0.72], [3.62, -3.2, 0.68],
  [-1.5, -3.8, 0.62], [4.8, 4.65, 0.62], [-8.4, 3.0, 0.72],
].forEach(([x, z, scale]) => createBush(x, z, scale));

createFlowerPatch(-1.05, 0.65, 0xd98975, 0.75);
createFlowerPatch(1.95, -0.2, 0xe2c06c, 0.62);
createFlowerPatch(-5.0, 4.1, 0xb681be, 0.65);

[
  [-4.4, 5.45, 0.12], [-2.3, 2.22, -0.32], [0.55, 1.45, 0.74], [2.25, 0.05, -0.3],
  [3.4, -2.68, 0.15], [-3.35, -1.15, 0.25],
].forEach(([x, z, rotation]) => createLamp(x, z, rotation));

// Small stones and handmade ground scatter break up the clean geometry.
[
  [-8.9, -5.8, 0.28], [-8.15, -5.5, 0.2], [8.55, 4.4, 0.24], [8.1, 4.92, 0.18],
  [-7.25, 7.25, 0.2], [5.9, -7.1, 0.22], [4.9, 6.95, 0.16],
].forEach(([x, z, scale]) => addSphere(scene, scale, [x, 1.32, z], materials.stone, { widthSegments: 7, heightSegments: 5, scale: [1.5, 0.55, 1] }));

function createWheel(parent, x, z, radius = 0.24) {
  const wheel = addCylinder(parent, radius, radius, 0.13, [x, 0.18, z], materials.wheel, { segments: 12, rotation: [0, 0, Math.PI / 2] });
  addCylinder(wheel, radius * 0.28, radius * 0.28, 0.145, [0, 0, 0], materials.brass, { segments: 10, rotation: [0, 0, Math.PI / 2] });
  return wheel;
}

function createLocomotive() {
  const group = new THREE.Group();
  addBox(group, [1.12, 0.27, 2.35], [0, 0.39, 0], materials.trainRedDark);
  addBox(group, [0.88, 0.56, 1.44], [0, 0.76, -0.38], materials.trainRed);
  addBox(group, [0.9, 0.9, 0.7], [0, 0.94, -0.91], materials.trainRedDark);
  addBox(group, [0.68, 0.48, 0.045], [0, 1.1, -1.27], materials.window, { cast: false });
  const boiler = addCylinder(group, 0.42, 0.42, 1.22, [0, 0.74, 0.28], materials.trainRed, { segments: 16, rotation: [Math.PI / 2, 0, 0] });
  boiler.castShadow = true;
  addCylinder(group, 0.18, 0.24, 0.48, [0, 1.25, 0.03], materials.darkMetal, { segments: 10 });
  addCylinder(group, 0.25, 0.3, 0.25, [0, 1.22, 0.61], materials.darkMetal, { segments: 10 });
  addCylinder(group, 0.11, 0.15, 0.2, [0, 1.16, 0.86], materials.brass, { segments: 10 });
  addSphere(group, 0.13, [0, 1.05, 1.03], materials.lamp, { widthSegments: 10, heightSegments: 6 });
  addBox(group, [0.88, 0.14, 0.48], [0, 0.51, 1.12], materials.darkMetal);
  addBox(group, [1.18, 0.1, 0.2], [0, 0.26, 1.08], materials.brass);
  [-0.45, 0.45].forEach((x) => {
    createWheel(group, x, -0.72, 0.28);
    createWheel(group, x, 0.53, 0.25);
  });
  return group;
}

function createCarriage(material, stripeMaterial = materials.trainCream) {
  const group = new THREE.Group();
  addBox(group, [1.08, 0.28, 2.08], [0, 0.38, 0], materials.trainBlue);
  addBox(group, [0.96, 0.8, 1.78], [0, 0.83, 0], material);
  const roof = addSphere(group, 1, [0, 1.35, 0], materials.trainCream, { widthSegments: 12, heightSegments: 6, scale: [0.59, 0.16, 1.08] });
  roof.castShadow = true;
  addBox(group, [0.99, 0.1, 1.86], [0, 1.22, 0], stripeMaterial);
  [-0.48, 0.48].forEach((x) => {
    addWindow(group, x, 0.9, 0.91, 0.3, 0.36);
    addWindow(group, x, 0.9, -0.91, 0.3, 0.36, [0, Math.PI, 0]);
    createWheel(group, x, -0.58, 0.24);
    createWheel(group, x, 0.58, 0.24);
  });
  addBox(group, [0.46, 0.62, 0.045], [0, 0.68, 1.03], materials.door, { cast: false });
  return group;
}

const trainParts = [
  { mesh: createLocomotive(), offset: 0 },
  { mesh: createCarriage(materials.trainCream, materials.trainRed), offset: 2.18 },
  { mesh: createCarriage(materials.trainRed, materials.trainCream), offset: 4.32 },
];
trainParts.forEach(({ mesh }) => scene.add(mesh));

function findNearestU(curve, target) {
  let closestU = 0;
  let closestDistance = Infinity;
  for (let index = 0; index <= 800; index += 1) {
    const u = index / 800;
    const distance = curve.getPointAt(u).distanceToSquared(target);
    if (distance < closestDistance) {
      closestDistance = distance;
      closestU = u;
    }
  }
  return closestU;
}

state.stationU = findNearestU(railCurve, new THREE.Vector3(-4.25, trackY, 6.55));
state.trainDistance = (state.stationU - 0.16 + 1) % 1;

function wrap01(value) {
  return (value % 1 + 1) % 1;
}

function passedStation(start, end, target) {
  if (start <= end) return target > start && target <= end;
  return target > start || target <= end;
}

function forwardDistance(start, end) {
  return wrap01(end - start);
}

function updateTrain() {
  trainParts.forEach(({ mesh, offset }) => {
    const u = wrap01(state.trainDistance - offset / railLength);
    const point = railCurve.getPointAt(u);
    const tangent = railCurve.getTangentAt(u).normalize();
    mesh.position.copy(point);
    mesh.quaternion.setFromUnitVectors(forwardAxis, tangent);
  });
}

function setNightMode(night) {
  state.night = night;
  const skyColor = night ? 0x182336 : 0xecc18f;
  scene.background.set(skyColor);
  scene.fog.color.set(skyColor);
  ambient.intensity = night ? 0.28 : 0.78;
  sun.intensity = night ? 0.2 : 3.25;
  fill.intensity = night ? 0.17 : 0.45;
  moon.intensity = night ? 0.75 : 0;
  renderer.toneMappingExposure = night ? 1.22 : 1.08;
  glowingMaterials.forEach((material) => {
    material.emissiveIntensity = night ? (material === materials.window ? 2.0 : 2.7) : (material === materials.window ? 0.16 : 0.2);
  });
  nightLights.forEach(({ pointLight, bulb }) => {
    pointLight.intensity = night ? 1.45 : 0;
    if (bulb) bulb.material.emissiveIntensity = night ? 3.2 : 0.2;
  });
  modeName.textContent = night ? '蓝调夜晚' : '暖色傍晚';
  modeButtonLabel.textContent = night ? '切换白天' : '切换夜晚';
  toggleNightButton.setAttribute('aria-pressed', String(night));
  toggleNightButton.querySelector('.mode-icon').textContent = night ? '☾' : '☼';
}

function updateStatus() {
  const isHolding = state.stationHold > 0;
  if (!state.running) {
    statusText.textContent = '列车已暂停';
    statusDetail.textContent = isHolding ? '站台停靠中' : '等待继续';
    toggleRunButton.textContent = '继续运行';
    statusDot.classList.add('is-paused');
  } else if (isHolding) {
    statusText.textContent = '列车到站';
    statusDetail.textContent = `停留 ${state.stationHold.toFixed(1)}s`;
    toggleRunButton.textContent = '暂停列车';
    statusDot.classList.remove('is-paused');
  } else {
    statusText.textContent = '列车运行中';
    statusDetail.textContent = '环线巡游';
    toggleRunButton.textContent = '暂停列车';
    statusDot.classList.remove('is-paused');
  }
  speedValue.textContent = `${state.speed.toFixed(1)}×`;
}

toggleRunButton.addEventListener('click', () => {
  state.running = !state.running;
  updateStatus();
});

speedControl.addEventListener('input', (event) => {
  state.speed = Number(event.target.value);
  updateStatus();
});

toggleNightButton.addEventListener('click', () => setNightMode(!state.night));

resetButton.addEventListener('click', () => {
  state.running = true;
  state.speed = 1;
  state.stationHold = 0;
  state.stationReady = true;
  state.trainDistance = wrap01(state.stationU - 0.16);
  speedControl.value = '1';
  camera.position.copy(initialCameraPosition);
  controls.target.copy(initialTarget);
  controls.update();
  setNightMode(false);
  updateTrain();
  updateStatus();
});

function animate() {
  requestAnimationFrame(animate);
  const delta = Math.min(clock.getDelta(), 0.05);

  if (state.running) {
    if (state.stationHold > 0) {
      state.stationHold = Math.max(0, state.stationHold - delta);
    } else {
      const previous = state.trainDistance;
      const next = wrap01(previous + (0.045 * state.speed * delta));
      if (state.stationReady && passedStation(previous, next, state.stationU)) {
        state.trainDistance = state.stationU;
        state.stationHold = 2;
        state.stationReady = false;
      } else {
        state.trainDistance = next;
        if (!state.stationReady && forwardDistance(state.stationU, state.trainDistance) > 0.08) {
          state.stationReady = true;
        }
      }
    }
  }

  updateTrain();
  updateStatus();
  controls.update();
  renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

setNightMode(false);
updateTrain();
updateStatus();
animate();
