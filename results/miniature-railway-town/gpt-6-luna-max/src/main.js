import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import './style.css';

const sceneRoot = document.querySelector('#scene');
const ui = {
  play: document.querySelector('#playButton'),
  playIcon: document.querySelector('#playIcon'),
  reset: document.querySelector('#resetButton'),
  speed: document.querySelector('#speedRange'),
  speedReadout: document.querySelector('#speedReadout'),
  status: document.querySelector('#trainStatus'),
  station: document.querySelector('#stationStatus'),
  theme: document.querySelector('#themeButton'),
  themeIcon: document.querySelector('#themeIcon'),
  themeLabel: document.querySelector('#themeLabel'),
  dragHint: document.querySelector('#dragHint'),
};

const GROUND_Y = 0.31;
const RAIL_Y = 0.545;
const scene = new THREE.Scene();
scene.background = null;

const camera = new THREE.PerspectiveCamera(34, window.innerWidth / window.innerHeight, 0.1, 120);
const initialCamera = new THREE.Vector3(18.8, 19.6, 22.4);
const initialTarget = new THREE.Vector3(0, 0.62, 0);
camera.position.copy(initialCamera);
camera.lookAt(initialTarget);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.35));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 0);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.1;
sceneRoot.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.copy(initialTarget);
controls.enableDamping = true;
controls.dampingFactor = 0.06;
controls.enablePan = false;
controls.minDistance = 17;
controls.maxDistance = 42;
controls.minPolarAngle = 0.28;
controls.maxPolarAngle = 1.28;
controls.rotateSpeed = 0.62;
controls.zoomSpeed = 0.74;
controls.update();

const clock = new THREE.Clock();
const reusable = {};
const lampLights = [];
const decorativeLights = [];
let nightMode = false;
let isRunning = true;
let speedFactor = 1;
let dwellRemaining = 0;
let travelledDistance = 0;
let didInteract = false;

function makeTexture(width, height, draw, repeatX = 1, repeatY = 1) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  draw(ctx, width, height);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(repeatX, repeatY);
  texture.anisotropy = 4;
  return texture;
}

const grassTexture = makeTexture(256, 256, (ctx, w, h) => {
  ctx.fillStyle = '#718453';
  ctx.fillRect(0, 0, w, h);
  for (let i = 0; i < 1800; i++) {
    const x = Math.random() * w;
    const y = Math.random() * h;
    const r = 0.3 + Math.random() * 1.6;
    const tone = Math.random() > 0.52 ? 'rgba(193,190,123,' : 'rgba(35,63,38,';
    ctx.fillStyle = `${tone}${0.04 + Math.random() * 0.16})`;
    ctx.beginPath();
    ctx.ellipse(x, y, r * 1.8, r * 0.7, Math.random(), 0, Math.PI * 2);
    ctx.fill();
  }
}, 5.8, 3.8);

const woodTexture = makeTexture(256, 128, (ctx, w, h) => {
  ctx.fillStyle = '#785238';
  ctx.fillRect(0, 0, w, h);
  for (let y = 4; y < h; y += 8 + Math.random() * 7) {
    ctx.strokeStyle = Math.random() > 0.5 ? 'rgba(226,180,119,.16)' : 'rgba(44,28,18,.16)';
    ctx.lineWidth = 1 + Math.random() * 2;
    ctx.beginPath();
    ctx.moveTo(0, y);
    for (let x = 0; x <= w; x += 16) ctx.lineTo(x, y + Math.sin(x * .04 + y) * 2.2);
    ctx.stroke();
  }
  for (let i = 0; i < 7; i++) {
    const y = Math.random() * h;
    ctx.strokeStyle = 'rgba(39,24,15,.17)';
    ctx.beginPath(); ctx.ellipse(150 + Math.random() * 60, y, 18 + Math.random() * 35, 3, 0, 0, Math.PI * 2); ctx.stroke();
  }
}, 3, 1.3);

const plasterTexture = makeTexture(128, 128, (ctx, w, h) => {
  ctx.fillStyle = '#ead8b7'; ctx.fillRect(0, 0, w, h);
  for (let i = 0; i < 480; i++) {
    ctx.fillStyle = Math.random() > .5 ? 'rgba(255,250,225,.14)' : 'rgba(109,88,57,.08)';
    ctx.fillRect(Math.random() * w, Math.random() * h, 1 + Math.random() * 3, 1 + Math.random() * 2);
  }
});

const roofTexture = makeTexture(128, 128, (ctx, w, h) => {
  ctx.fillStyle = '#765b49'; ctx.fillRect(0, 0, w, h);
  const tileW = 22, tileH = 15;
  for (let row = 0; row < 10; row++) {
    const shift = row % 2 ? -tileW / 2 : 0;
    for (let col = -1; col < 7; col++) {
      const x = col * tileW + shift, y = row * tileH;
      ctx.fillStyle = ['#9b7656', '#86644e', '#a37c59', '#775744'][Math.floor(Math.random() * 4)];
      ctx.beginPath(); ctx.roundRect(x + 1, y + 1, tileW - 2, tileH - 2, [3, 3, 1, 1]); ctx.fill();
      ctx.strokeStyle = 'rgba(44,35,29,.3)'; ctx.lineWidth = 1; ctx.stroke();
      ctx.strokeStyle = 'rgba(230,190,135,.13)'; ctx.beginPath(); ctx.moveTo(x + 4, y + 3); ctx.lineTo(x + tileW - 4, y + 3); ctx.stroke();
    }
  }
});

const roadTexture = makeTexture(128, 128, (ctx, w, h) => {
  ctx.fillStyle = '#a69b82'; ctx.fillRect(0, 0, w, h);
  for (let i = 0; i < 700; i++) {
    const v = Math.random() > .5 ? 'rgba(244,232,203,.2)' : 'rgba(64,57,46,.12)';
    ctx.fillStyle = v; ctx.beginPath(); ctx.arc(Math.random() * w, Math.random() * h, Math.random() * 1.4, 0, Math.PI * 2); ctx.fill();
  }
});

const ballastTexture = makeTexture(128, 128, (ctx, w, h) => {
  ctx.fillStyle = '#867a67'; ctx.fillRect(0, 0, w, h);
  const stones = ['#a89c84', '#6e6659', '#c2b398', '#716b61'];
  for (let i = 0; i < 400; i++) {
    ctx.fillStyle = stones[Math.floor(Math.random() * stones.length)];
    ctx.beginPath(); ctx.ellipse(Math.random() * w, Math.random() * h, 1 + Math.random() * 3, .7 + Math.random() * 1.8, Math.random(), 0, Math.PI * 2); ctx.fill();
  }
});

const waterTexture = makeTexture(256, 128, (ctx, w, h) => {
  ctx.fillStyle = '#467c79'; ctx.fillRect(0, 0, w, h);
  for (let i = 0; i < 95; i++) {
    const x = Math.random() * w, y = Math.random() * h;
    ctx.strokeStyle = Math.random() > .5 ? 'rgba(183,220,201,.33)' : 'rgba(18,55,64,.25)';
    ctx.lineWidth = .5 + Math.random() * 1.3;
    ctx.beginPath(); ctx.moveTo(x, y); ctx.bezierCurveTo(x + 7, y - 3, x + 12, y + 4, x + 24 + Math.random() * 17, y + Math.sin(x) * 2); ctx.stroke();
  }
}, 1.8, 3.5);

const materials = {
  wood: new THREE.MeshStandardMaterial({ map: woodTexture, roughness: .79, color: 0xffffff }),
  woodDark: new THREE.MeshStandardMaterial({ color: 0x533b29, roughness: .86 }),
  brass: new THREE.MeshStandardMaterial({ color: 0xb29660, metalness: .64, roughness: .36 }),
  grass: new THREE.MeshStandardMaterial({ map: grassTexture, roughness: 1, color: 0xffffff }),
  grassDark: new THREE.MeshStandardMaterial({ color: 0x586b43, roughness: 1 }),
  earth: new THREE.MeshStandardMaterial({ color: 0x806c50, roughness: 1 }),
  road: new THREE.MeshStandardMaterial({ map: roadTexture, color: 0xffffff, roughness: .93 }),
  roadEdge: new THREE.MeshStandardMaterial({ color: 0xc1ae88, roughness: .95 }),
  gravel: new THREE.MeshStandardMaterial({ map: ballastTexture, roughness: .96, color: 0xffffff }),
  sleeper: new THREE.MeshStandardMaterial({ color: 0x564431, roughness: .92 }),
  rail: new THREE.MeshStandardMaterial({ color: 0x5f6866, roughness: .27, metalness: .74 }),
  roof: new THREE.MeshStandardMaterial({ map: roofTexture, color: 0xffffff, roughness: .92 }),
  roofBlue: new THREE.MeshStandardMaterial({ map: roofTexture, color: 0x728081, roughness: .9 }),
  plaster: new THREE.MeshStandardMaterial({ map: plasterTexture, color: 0xe7d8ba, roughness: .98 }),
  stone: new THREE.MeshStandardMaterial({ color: 0x9e9885, roughness: .93 }),
  iron: new THREE.MeshStandardMaterial({ color: 0x4d594b, roughness: .73, metalness: .24 }),
  water: new THREE.MeshStandardMaterial({ map: waterTexture, color: 0xd6ffff, roughness: .3, metalness: .12 }),
  leaf: new THREE.MeshStandardMaterial({ color: 0x61764b, roughness: 1 }),
  leafLight: new THREE.MeshStandardMaterial({ color: 0x7e8b58, roughness: 1 }),
  trunk: new THREE.MeshStandardMaterial({ color: 0x654a31, roughness: 1 }),
  flowerRed: new THREE.MeshStandardMaterial({ color: 0xb86647, roughness: 1 }),
  flowerYellow: new THREE.MeshStandardMaterial({ color: 0xe0bd62, roughness: 1 }),
};

const hemi = new THREE.HemisphereLight(0xffe8c9, 0x53634a, 1.8);
scene.add(hemi);
const sun = new THREE.DirectionalLight(0xffc98d, 3.1);
sun.position.set(-8, 15, 10);
sun.castShadow = true;
sun.shadow.mapSize.set(1024, 1024);
sun.shadow.camera.left = -12;
sun.shadow.camera.right = 12;
sun.shadow.camera.top = 11;
sun.shadow.camera.bottom = -11;
sun.shadow.camera.near = .1;
sun.shadow.camera.far = 40;
sun.shadow.bias = -.00022;
sun.shadow.normalBias = .035;
scene.add(sun);
const fillLight = new THREE.DirectionalLight(0xffefd5, .9);
fillLight.position.set(9, 11, -8);
scene.add(fillLight);

function mesh(geometry, material, parent = scene, { cast = true, receive = true, position, rotation, scale } = {}) {
  const item = new THREE.Mesh(geometry, material);
  if (position) item.position.set(...position);
  if (rotation) item.rotation.set(...rotation);
  if (scale) item.scale.set(...scale);
  item.castShadow = cast;
  item.receiveShadow = receive;
  parent.add(item);
  return item;
}

function box(parent, size, position, material, rotation = [0, 0, 0], cast = true) {
  const geometry = reusable.boxGeometry || (reusable.boxGeometry = new THREE.BoxGeometry(1, 1, 1));
  const item = mesh(geometry, material, parent, { cast, position, rotation });
  item.scale.set(...size);
  return item;
}

function cylinder(parent, radiusTop, radiusBottom, height, position, material, radialSegments = 10, rotation = [0, 0, 0], cast = true) {
  const item = mesh(new THREE.CylinderGeometry(radiusTop, radiusBottom, height, radialSegments), material, parent, { cast, position, rotation });
  return item;
}

function sphere(parent, radius, position, material, scale = [1, 1, 1], cast = true) {
  return mesh(new THREE.SphereGeometry(radius, 9, 7), material, parent, { cast, position, scale });
}

function makeRibbonGeometry(curve, width, y, segments = 180, closed = false) {
  const positions = [], uvs = [], indices = [];
  const count = closed ? segments : segments + 1;
  for (let i = 0; i < count; i++) {
    const t = i / segments;
    const p = curve.getPointAt(t);
    const tangent = curve.getTangentAt(t).setY(0).normalize();
    const normal = new THREE.Vector3(tangent.z, 0, -tangent.x);
    positions.push(p.x + normal.x * width / 2, y, p.z + normal.z * width / 2);
    positions.push(p.x - normal.x * width / 2, y, p.z - normal.z * width / 2);
    uvs.push(0, t * 14, 1, t * 14);
    if (i < segments) {
      const a = i * 2, b = a + 1, c = ((i + 1) % count) * 2, d = c + 1;
      indices.push(a, b, c, b, d, c);
    }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  return geo;
}

function ribbon(parent, curve, width, y, material, segments = 180, closed = false) {
  return mesh(makeRibbonGeometry(curve, width, y, segments, closed), material, parent, { cast: false, receive: true });
}

function roundedRectShape(width, height, radius) {
  const s = new THREE.Shape();
  const x = -width / 2, y = -height / 2;
  s.moveTo(x + radius, y);
  s.lineTo(x + width - radius, y); s.quadraticCurveTo(x + width, y, x + width, y + radius);
  s.lineTo(x + width, y + height - radius); s.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  s.lineTo(x + radius, y + height); s.quadraticCurveTo(x, y + height, x, y + height - radius);
  s.lineTo(x, y + radius); s.quadraticCurveTo(x, y, x + radius, y);
  return s;
}

// A rounded, hand-finished walnut plinth anchors the entire model.
mesh(new RoundedBoxGeometry(18, .76, 12, 4, .12), materials.wood, scene, { position: [0, -.085, 0], cast: true });
const edgeLineMaterial = new THREE.MeshStandardMaterial({ color: 0x947447, metalness: .55, roughness: .46 });
for (const z of [-5.99, 5.99]) {
  box(scene, [17.7, .035, .035], [0, -.03, z], edgeLineMaterial, [0, 0, 0], false);
  box(scene, [17.7, .035, .035], [0, -.28, z], materials.woodDark, [0, 0, 0], false);
}
for (const x of [-8.99, 8.99]) {
  box(scene, [.035, .035, 11.7], [x, -.03, 0], edgeLineMaterial, [0, 0, 0], false);
  box(scene, [.035, .035, 11.7], [x, -.28, 0], materials.woodDark, [0, 0, 0], false);
}
for (const x of [-8.55, 8.55]) for (const z of [-5.55, 5.55]) {
  cylinder(scene, .055, .055, .035, [x, .292, z], materials.brass, 12, [Math.PI / 2, 0, 0], false);
}

const terrain = new THREE.Group();
scene.add(terrain);
const ground = mesh(new THREE.PlaneGeometry(17.68, 11.68, 1, 1), materials.grass, terrain, { position: [0, GROUND_Y, 0], rotation: [-Math.PI / 2, 0, 0], cast: false });
ground.receiveShadow = true;
// Low mounds and soft clearings break up the flat tabletop surface.
for (const [x, z, sx, sz, color] of [
  [-6.5, -.1, 1.9, 2.6, 0x71804e], [6.8, -3.8, 1.5, 1.2, 0x677b48], [6.7, 4.55, 1.25, .65, 0x7b8552],
  [-1.2, 5.2, 2.0, .35, 0x73804e], [-1.6, -5.0, 2.4, .35, 0x6c7a4b], [2.6, -5.1, .75, .35, 0x71804e],
]) {
  const mound = mesh(new THREE.SphereGeometry(1, 20, 12), new THREE.MeshStandardMaterial({ color, map: grassTexture, roughness: 1 }), terrain, { position: [x, GROUND_Y + .05, z], scale: [sx, .22, sz], cast: false });
  mound.receiveShadow = true;
}

// Meandering river and grassy banks.
const riverCurve = new THREE.CatmullRomCurve3([
  new THREE.Vector3(4.55, 0, -5.72), new THREE.Vector3(5.35, 0, -4.25), new THREE.Vector3(5.24, 0, -2.75),
  new THREE.Vector3(5.88, 0, -1.2), new THREE.Vector3(5.76, 0, .25), new THREE.Vector3(5.13, 0, 1.85),
  new THREE.Vector3(4.83, 0, 3.42), new THREE.Vector3(5.13, 0, 5.75),
], false, 'centripetal');
ribbon(terrain, riverCurve, 1.42, GROUND_Y + .012, materials.earth, 220);
ribbon(terrain, riverCurve, 1.11, GROUND_Y + .04, materials.water, 220);
const bankMat = new THREE.MeshStandardMaterial({ color: 0x9b9a73, roughness: 1 });
for (const side of [-1, 1]) {
  const bankPoints = [];
  for (let i = 0; i <= 130; i++) {
    const t = i / 130, p = riverCurve.getPointAt(t), tang = riverCurve.getTangentAt(t).setY(0).normalize();
    const n = new THREE.Vector3(tang.z, 0, -tang.x);
    bankPoints.push(new THREE.Vector3(p.x + n.x * side * .61, GROUND_Y + .045, p.z + n.z * side * .61));
  }
  const bankCurve = new THREE.CatmullRomCurve3(bankPoints, false, 'centripetal');
  const shore = mesh(new THREE.TubeGeometry(bankCurve, 180, .035, 5, false), bankMat, terrain, { cast: false });
  shore.receiveShadow = true;
}
const rippleMat = new THREE.MeshStandardMaterial({ color: 0x9cc5ad, transparent: true, opacity: .42, roughness: .34, metalness: .15 });
for (let i = 0; i < 20; i++) {
  const t = .08 + i * .041;
  const p = riverCurve.getPointAt(t), tan = riverCurve.getTangentAt(t).setY(0).normalize();
  const across = new THREE.Vector3(tan.z, 0, -tan.x);
  const start = p.clone().addScaledVector(across, (Math.sin(i * 9) * .22)).addScaledVector(tan, -.10);
  const end = p.clone().addScaledVector(across, (Math.sin(i * 9) * .22) + .12).addScaledVector(tan, .13);
  const ripple = new THREE.CatmullRomCurve3([start.setY(GROUND_Y + .052), end.setY(GROUND_Y + .052)]);
  mesh(new THREE.TubeGeometry(ripple, 4, .009, 4, false), rippleMat, terrain, { cast: false });
}

// Small embankment stones along the stream.
const rockMat = new THREE.MeshStandardMaterial({ color: 0x8a8978, roughness: .94 });
for (let i = 0; i < 52; i++) {
  const t = (i + .25) / 53;
  const p = riverCurve.getPointAt(t), tan = riverCurve.getTangentAt(t).setY(0).normalize();
  const n = new THREE.Vector3(tan.z, 0, -tan.x);
  const side = i % 2 ? 1 : -1;
  const jitter = Math.sin(i * 17.4) * .18;
  const stone = sphere(terrain, .13 + (i % 3) * .025, [p.x + n.x * side * (.74 + jitter), GROUND_Y + .02, p.z + n.z * side * (.74 + jitter)], rockMat, [1.4, .65, .92], false);
  stone.rotation.y = i * .8;
}

// A continuous closed track, with its eastern crossing carried over the river.
const trackCurve = new THREE.CatmullRomCurve3([
  new THREE.Vector3(-7.05, 0, -.82), new THREE.Vector3(-6.7, 0, 2.05), new THREE.Vector3(-5.2, 0, 3.62),
  new THREE.Vector3(-2.55, 0, 4.02), new THREE.Vector3(1.35, 0, 4.0), new THREE.Vector3(4.17, 0, 3.44),
  new THREE.Vector3(5.78, 0, 1.72), new THREE.Vector3(5.9, 0, -.24), new THREE.Vector3(5.36, 0, -2.18),
  new THREE.Vector3(3.66, 0, -3.45), new THREE.Vector3(.25, 0, -3.88), new THREE.Vector3(-3.25, 0, -3.68),
  new THREE.Vector3(-5.68, 0, -2.63),
], true, 'centripetal');
const trackLength = trackCurve.getLength();

function closestDistanceOnTrack(x, z) {
  let best = Infinity, distance = 0, bestDistance = 0;
  const samples = 2400;
  for (let i = 0; i < samples; i++) {
    const p = trackCurve.getPointAt(i / samples);
    const d = (p.x - x) ** 2 + (p.z - z) ** 2;
    if (d < best) { best = d; bestDistance = distance; }
    distance += trackLength / samples;
  }
  return bestDistance;
}

const stationDistance = closestDistanceOnTrack(-3.8, 4.0);
const bridgeDistance = closestDistanceOnTrack(5.84, .56);
const bridgeHalfLength = 1.48;
ribbon(terrain, trackCurve, .91, GROUND_Y + .047, materials.gravel, 520, true);

const railCurves = [];
for (const side of [-.34, .34]) {
  const samples = [];
  for (let i = 0; i < 900; i++) {
    const p = trackCurve.getPointAt(i / 900);
    const tang = trackCurve.getTangentAt(i / 900).setY(0).normalize();
    const n = new THREE.Vector3(tang.z, 0, -tang.x);
    samples.push(p.addScaledVector(n, side).setY(RAIL_Y));
  }
  const railCurve = new THREE.CatmullRomCurve3(samples, true, 'centripetal');
  railCurves.push(railCurve);
  mesh(new THREE.TubeGeometry(railCurve, 1300, .052, 7, true), materials.rail, terrain, { cast: true, receive: true });
}

const sleeperGeo = new THREE.BoxGeometry(1, .105, .19);
for (let distance = 0; distance < trackLength; distance += .255) {
  let delta = Math.abs(distance - bridgeDistance);
  delta = Math.min(delta, trackLength - delta);
  if (delta < bridgeHalfLength + .05) continue;
  const u = distance / trackLength;
  const p = trackCurve.getPointAt(u), tangent = trackCurve.getTangentAt(u).setY(0).normalize();
  const yaw = Math.atan2(tangent.x, tangent.z);
  mesh(sleeperGeo, materials.sleeper, terrain, { position: [p.x, GROUND_Y + .114, p.z], rotation: [0, yaw, 0], cast: false, receive: true });
}

function pointAtDistance(distance) {
  const mod = ((distance % trackLength) + trackLength) % trackLength;
  return trackCurve.getPointAt(mod / trackLength);
}
function tangentAtDistance(distance) {
  const mod = ((distance % trackLength) + trackLength) % trackLength;
  return trackCurve.getTangentAt(mod / trackLength).setY(0).normalize();
}

// Timber deck planks preserve the same gauge while the rails continue without a seam.
const bridgePlankMat = new THREE.MeshStandardMaterial({ color: 0x65513d, roughness: .91 });
for (let d = -bridgeHalfLength; d <= bridgeHalfLength + .01; d += .22) {
  const s = bridgeDistance + d;
  const p = pointAtDistance(s), tangent = tangentAtDistance(s);
  const yaw = Math.atan2(tangent.x, tangent.z);
  const plank = mesh(sleeperGeo, bridgePlankMat, terrain, { position: [p.x, GROUND_Y + .114, p.z], rotation: [0, yaw, 0], cast: false });
  plank.scale.x = 1.38;
}

const bridgeMetal = new THREE.MeshStandardMaterial({ color: 0x56604e, roughness: .68, metalness: .28 });
const bridgeWood = new THREE.MeshStandardMaterial({ color: 0x634d37, roughness: .91 });
function beamBetween(a, b, radius, material, parent = terrain, radial = 7) {
  const direction = new THREE.Vector3().subVectors(b, a);
  const item = mesh(new THREE.CylinderGeometry(radius, radius, direction.length(), radial), material, parent, { position: a.clone().add(b).multiplyScalar(.5).toArray(), cast: true });
  item.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.normalize());
  return item;
}
for (const side of [-.71, .71]) {
  const railSide = [];
  for (let i = 0; i <= 8; i++) {
    const d = -bridgeHalfLength + i * bridgeHalfLength * 2 / 8;
    const p = pointAtDistance(bridgeDistance + d), tangent = tangentAtDistance(bridgeDistance + d);
    const n = new THREE.Vector3(tangent.z, 0, -tangent.x);
    railSide.push(p.addScaledVector(n, side));
  }
  for (let i = 0; i < railSide.length - 1; i++) {
    const a = railSide[i], b = railSide[i + 1];
    beamBetween(a.clone().setY(GROUND_Y + .18), b.clone().setY(GROUND_Y + .18), .045, bridgeMetal);
    beamBetween(a.clone().setY(1.62), b.clone().setY(1.62), .05, bridgeMetal);
    beamBetween(a.clone().setY(GROUND_Y + .18), a.clone().setY(1.62), .038, bridgeMetal);
    if (i % 2 === 0) beamBetween(a.clone().setY(1.58), b.clone().setY(GROUND_Y + .22), .03, bridgeMetal);
    else beamBetween(a.clone().setY(GROUND_Y + .22), b.clone().setY(1.58), .03, bridgeMetal);
  }
}
// A pair of stone piers sit near each bank, leaving the stream open beneath the middle span.
for (const d of [-1.32, 1.32]) {
  const p = pointAtDistance(bridgeDistance + d), tangent = tangentAtDistance(bridgeDistance + d);
  const n = new THREE.Vector3(tangent.z, 0, -tangent.x);
  for (const side of [-.48, .48]) {
    const pier = cylinder(terrain, .2, .27, .59, [p.x + n.x * side, GROUND_Y - .01, p.z + n.z * side], materials.stone, 8, [0, 0, 0], true);
    pier.scale.z = .82;
  }
}
for (const x of [-7.25, -5.0, 0, 5.0, 7.25]) for (const z of [-4.65, 4.65]) {
  // Tiny brass screw caps make the rim read like a finished display case.
  cylinder(terrain, .037, .037, .025, [x, GROUND_Y + .005, z], materials.brass, 10, [Math.PI / 2, 0, 0], false);
}

// Quiet village lanes connect the station, central square, and southern cottages.
function makeRoad(points, width = .47) {
  const curve = new THREE.CatmullRomCurve3(points.map(([x, z]) => new THREE.Vector3(x, 0, z)), false, 'centripetal');
  ribbon(terrain, curve, width + .11, GROUND_Y + .022, materials.roadEdge, 120);
  ribbon(terrain, curve, width, GROUND_Y + .03, materials.road, 120);
  return curve;
}
const mainRoad = makeRoad([[-5.12, 3.16], [-5.18, 2.15], [-4.48, 1.43], [-2.65, .92], [-.75, .92], [.9, .52], [2.45, -.15], [3.2, -1.1]], .49);
makeRoad([[-2.0, .97], [-1.66, -.14], [-1.28, -1.15], [-1.05, -2.13], [-.36, -2.73], [1.14, -2.94]], .42);
makeRoad([[.6, .62], [1.15, 1.15], [2.15, 1.42], [3.1, 1.75], [3.7, 2.5]], .39);
makeRoad([[2.38, -.18], [2.36, -1.12], [2.43, -2.1], [3.08, -2.75]], .4);
makeRoad([[-4.48, 1.43], [-3.7, .72], [-3.05, -.02]], .34);

const creamMat = new THREE.MeshStandardMaterial({ map: plasterTexture, color: 0xe8d7b5, roughness: .98 });
const windowMat = new THREE.MeshStandardMaterial({ color: 0x45535a, roughness: .35, metalness: .08, emissive: 0x000000, emissiveIntensity: 0 });
const litWindowMat = new THREE.MeshStandardMaterial({ color: 0x8c7955, roughness: .35, metalness: .04, emissive: 0x000000, emissiveIntensity: 0 });
const trimMat = new THREE.MeshStandardMaterial({ color: 0xf0e4cb, roughness: .88 });
const doorMat = new THREE.MeshStandardMaterial({ color: 0x674b34, roughness: .94 });
const chimneyMat = new THREE.MeshStandardMaterial({ color: 0x8f6550, roughness: .94 });
let windowNumber = 0;

function makeWindow(parent, x, y, z, width = .22, height = .25, facing = 1) {
  box(parent, [width + .09, height + .09, .06], [x, y, z + facing * .018], trimMat, [0, 0, 0], false);
  const paneMaterial = windowNumber++ % 3 === 0 ? litWindowMat : windowMat;
  box(parent, [width, height, .055], [x, y, z + facing * .05], paneMaterial, [0, 0, 0], false);
  box(parent, [.025, height, .012], [x, y, z + facing * .081], trimMat, [0, 0, 0], false);
  box(parent, [width, .022, .014], [x, y, z + facing * .083], trimMat, [0, 0, 0], false);
  box(parent, [width + .12, .035, .065], [x, y - height / 2 - .07, z + facing * .04], materials.woodDark, [0, 0, 0], false);
}

function makeBuilding({ x, z, width = 1.2, depth = .92, height = .7, wall = 0xe2d1ad, roof = 0x715846, kind = 'house', name }) {
  const group = new THREE.Group();
  group.position.set(x, GROUND_Y, z);
  terrain.add(group);
  const wallMat = new THREE.MeshStandardMaterial({ map: plasterTexture, color: wall, roughness: .98 });
  const roofMat = roof === 0x647278 ? materials.roofBlue : materials.roof;
  box(group, [width + .11, .1, depth + .11], [0, .055, 0], materials.stone, [0, 0, 0], false);
  box(group, [width, height, depth], [0, .12 + height / 2, 0], wallMat, [0, 0, 0], true);
  const rise = kind === 'station' ? .37 : .39;
  for (const front of [-1, 1]) {
    const zf = front * (depth / 2 + .008);
    const geom = new THREE.BufferGeometry();
    const verts = front > 0
      ? [-width / 2, .12 + height, zf, width / 2, .12 + height, zf, 0, .12 + height + rise, zf]
      : [-width / 2, .12 + height, zf, 0, .12 + height + rise, zf, width / 2, .12 + height, zf];
    geom.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
    geom.computeVertexNormals();
    mesh(geom, wallMat, group, { cast: true });
  }
  const eave = .12 + height, roofAngle = Math.atan2(rise, depth / 2 + .06);
  const roofLength = Math.hypot(depth / 2 + .06, rise);
  for (const side of [-1, 1]) {
    const panel = box(group, [width + .19, .085, roofLength], [0, eave + rise / 2, side * depth / 4], roofMat, [side * roofAngle, 0, 0], true);
    panel.material = roofMat;
  }
  cylinder(group, .043, .043, width + .28, [0, eave + rise, 0], materials.woodDark, 8, [0, 0, Math.PI / 2], false);
  const facadeY = .12 + height * .59;
  for (const front of [-1, 1]) {
    const faceZ = front * (depth / 2 + .04);
    const winCount = width > 1.4 ? 3 : 2;
    for (let i = 0; i < winCount; i++) {
      const px = (i - (winCount - 1) / 2) * Math.min(.39, width / (winCount + .5));
      if (i === Math.floor(winCount / 2) && kind !== 'house' && kind !== 'mill' && front < 0) continue;
      makeWindow(group, px, facadeY, faceZ, kind === 'station' ? .23 : .19, kind === 'station' ? .25 : .22, front);
    }
  }
  const doorZ = -depth / 2 - .06;
  if (kind !== 'mill') {
    box(group, [.25, .48, .065], [0, .36, doorZ], doorMat, [0, 0, 0], false);
    sphere(group, .022, [.08, .36, doorZ - .04], materials.brass, [1, 1, .5], false);
    box(group, [.36, .075, .26], [0, .8, doorZ - .075], roofMat, [0, 0, 0], true);
    cylinder(group, .018, .018, .17, [0, .7, doorZ - .17], materials.woodDark, 6, [0, 0, 0], false);
  }
  // A squat brick chimney and a few hand-painted roof seams add a model-maker finish.
  if (kind !== 'mill') {
    box(group, [.19, .52, .19], [width * .28, eave + rise * .55, -depth * .22], chimneyMat, [0, 0, 0], true);
    box(group, [.23, .06, .23], [width * .28, eave + rise * .55 + .28, -depth * .22], chimneyMat, [0, 0, 0], false);
  }
  if (kind === 'church') {
    const towerX = -width * .29, towerZ = -depth * .1;
    box(group, [.42, .88, .42], [towerX, .56, towerZ], wallMat, [0, 0, 0], true);
    for (const front of [-1, 1]) makeWindow(group, towerX, .76, towerZ + front * .23, .10, .31, front);
    const spire = new THREE.ConeGeometry(.34, .72, 5);
    mesh(spire, roofMat, group, { position: [towerX, 1.34, towerZ], rotation: [0, Math.PI / 5, 0], cast: true });
    cylinder(group, .018, .018, .22, [towerX, 1.83, towerZ], materials.brass, 6, [0, 0, 0], false);
    sphere(group, .04, [towerX, 1.96, towerZ], materials.brass, [1, 1, 1], false);
  }
  if (kind === 'station') {
    box(group, [width + .65, .09, .34], [0, .91, -depth / 2 - .1], roofMat, [0, 0, 0], true);
    for (const px of [-width * .38, width * .38]) cylinder(group, .032, .045, .78, [px, .49, -depth / 2 - .11], materials.woodDark, 8, [0, 0, 0], true);
    box(group, [.7, .17, .025], [0, .75, -depth / 2 - .32], materials.wood, [0, 0, 0], false);
  }
  if (kind === 'mill') {
    const wheelX = width / 2 + .08, wheelZ = .04;
    const wheel = cylinder(group, .39, .39, .12, [wheelX, .46, wheelZ], materials.woodDark, 12, [0, 0, Math.PI / 2], true);
    for (let i = 0; i < 10; i++) {
      const a = i * Math.PI * 2 / 10;
      box(group, [.09, .48, .07], [wheelX, .46 + Math.sin(a) * .12, wheelZ + Math.cos(a) * .12], materials.wood, [a, 0, 0], false);
    }
    cylinder(group, .035, .035, .24, [wheelX + .1, .46, wheelZ], materials.brass, 8, [0, 0, Math.PI / 2], false);
    wheel.castShadow = true;
  }
  if (kind === 'greenhouse') {
    box(group, [width + .24, .035, depth + .2], [0, .3, 0], materials.iron, [0, 0, 0], false);
    const glassMat = new THREE.MeshStandardMaterial({ color: 0x9bb5a1, transparent: true, opacity: .4, roughness: .24, metalness: .12 });
    for (const side of [-1, 1]) {
      const pane = box(group, [width + .2, .55, .025], [0, .62, side * (depth / 2 + .085)], glassMat, [0, 0, 0], false);
      pane.castShadow = false;
    }
    for (const px of [-width / 2, 0, width / 2]) cylinder(group, .025, .025, .62, [px, .62, 0], materials.iron, 6, [0, 0, 0], false);
  }
  group.userData.name = name;
  return group;
}

// Compact, varied buildings sit along the lane and face the village square.
makeBuilding({ name: '河湾站', kind: 'station', x: -3.57, z: 2.48, width: 1.55, depth: .96, height: .72, wall: 0xd9c39a, roof: 0x6e5948 });
makeBuilding({ name: '松针旅店', kind: 'inn', x: 1.45, z: 2.18, width: 1.32, depth: 1.05, height: .8, wall: 0xd2b899, roof: 0x705646 });
makeBuilding({ name: '杂货铺', kind: 'shop', x: -.82, z: 2.18, width: 1.1, depth: .88, height: .68, wall: 0xd8c99e, roof: 0x675b4b });
makeBuilding({ name: '面包坊', kind: 'bakery', x: .42, z: -.55, width: 1.22, depth: .94, height: .68, wall: 0xe5c8a2, roof: 0x647278 });
makeBuilding({ name: '圣艾尔莎教堂', kind: 'church', x: -2.76, z: -1.55, width: 1.02, depth: 1.12, height: .82, wall: 0xe7dfc9, roof: 0x696255 });
makeBuilding({ name: '镇公所', kind: 'hall', x: 2.18, z: -1.72, width: 1.45, depth: 1.04, height: .82, wall: 0xd6c5a5, roof: 0x6c5848 });
makeBuilding({ name: '杉林小屋', kind: 'house', x: -4.52, z: .56, width: 1.0, depth: .82, height: .61, wall: 0xd5cba7, roof: 0x795947 });
makeBuilding({ name: '果园农舍', kind: 'house', x: -2.18, z: -3.03, width: 1.16, depth: .88, height: .65, wall: 0xd9c6a1, roof: 0x725447 });
makeBuilding({ name: '小溪 cottage', kind: 'house', x: .48, z: -3.01, width: 1.02, depth: .84, height: .63, wall: 0xe2d3b4, roof: 0x5e685b });
makeBuilding({ name: '玻璃花房', kind: 'greenhouse', x: 3.32, z: 1.13, width: 1.13, depth: .86, height: .62, wall: 0xc7d2b8, roof: 0x697a6d });
makeBuilding({ name: '河湾小学', kind: 'school', x: 3.22, z: -2.55, width: 1.18, depth: .91, height: .69, wall: 0xe3d3ad, roof: 0x6e5547 });
makeBuilding({ name: '石磨坊', kind: 'mill', x: 3.74, z: 3.18, width: 1.15, depth: .9, height: .75, wall: 0xcdb994, roof: 0x6a5644 });

// Platforms, benches, and the short station approach make the stop read clearly.
const platformMat = new THREE.MeshStandardMaterial({ color: 0xb3a58c, roughness: .94 });
box(terrain, [3.22, .13, .63], [-3.76, GROUND_Y + .065, 3.31], platformMat, [0, 0, 0], false);
box(terrain, [3.24, .045, .075], [-3.76, GROUND_Y + .15, 3.0], trimMat, [0, 0, 0], false);
for (const x of [-4.76, -3.78, -2.8]) {
  const bench = new THREE.Group(); terrain.add(bench); bench.position.set(x, GROUND_Y + .14, 3.12);
  box(bench, [.58, .055, .18], [0, .19, 0], materials.wood, [0, 0, 0], false);
  box(bench, [.58, .25, .045], [0, .31, -.08], materials.wood, [0, 0, 0], false);
  for (const bx of [-.22, .22]) box(bench, [.045, .2, .045], [bx, .09, 0], materials.woodDark, [0, 0, 0], false);
}
box(terrain, [.24, .23, .24], [-2.05, GROUND_Y + .12, 3.55], materials.woodDark, [0, 0, 0], false);
const stationSign = new THREE.Group(); terrain.add(stationSign); stationSign.position.set(-2.05, GROUND_Y + .25, 3.55);
box(stationSign, [.58, .26, .055], [0, .47, 0], materials.wood, [0, 0, 0], false);
box(stationSign, [.34, .035, .014], [0, .5, .034], materials.brass, [0, 0, 0], false);
for (const px of [-.22, .22]) cylinder(stationSign, .025, .025, .52, [px, .21, 0], materials.woodDark, 7, [0, 0, 0], false);

// Layered evergreen and orchard trees; foliage is built from smooth low-poly forms.
const trees = new THREE.Group(); terrain.add(trees);
function makeTree(x, z, scale = 1, style = 'fir') {
  const group = new THREE.Group(); trees.add(group); group.position.set(x, GROUND_Y, z); group.scale.setScalar(scale);
  const trunkH = style === 'round' ? .48 : .58;
  cylinder(group, .07, .11, trunkH, [0, trunkH / 2, 0], materials.trunk, 7, [0, 0, 0], false);
  if (style === 'round') {
    for (const [y, r, mat] of [[.62, .35, materials.leaf], [.86, .31, materials.leafLight], [1.08, .25, materials.leaf]]) {
      sphere(group, r, [0, y, 0], mat, [1, 1.12, 1], false);
    }
  } else {
    const layers = style === 'pine' ? 4 : 3;
    for (let i = 0; i < layers; i++) {
      const y = .42 + i * .24;
      const radius = .48 - i * .085;
      const cone = new THREE.ConeGeometry(radius, .65 - i * .03, 7, 2);
      mesh(cone, i % 2 ? materials.leafLight : materials.leaf, group, { position: [0, y + .12, 0], rotation: [0, i * .23, 0], cast: false });
    }
  }
  return group;
}
const treePlan = [
  [-7.8, -4.7, 1.08, 'fir'], [-7.6, -3.55, .85, 'pine'], [-7.75, -.8, .88, 'fir'], [-7.85, 1.25, 1.12, 'pine'], [-7.65, 3.2, .78, 'fir'],
  [-6.4, -4.7, .8, 'round'], [-6.6, 4.75, .86, 'pine'], [-5.85, 5.0, .7, 'round'], [-4.85, 5.0, .8, 'fir'], [-1.6, 5.15, .68, 'round'], [2.1, 5.0, .8, 'pine'], [3.0, 4.92, .7, 'round'],
  [7.6, -4.9, 1, 'pine'], [7.8, -3.65, .78, 'round'], [7.6, 2.4, .82, 'pine'], [7.65, 4.2, 1.0, 'fir'], [6.9, 5.05, .72, 'round'],
  [-6.45, -1.2, .76, 'round'], [-5.9, -1.8, .68, 'fir'], [-5.25, -4.55, .7, 'round'], [4.28, -4.9, .78, 'pine'], [3.9, -4.7, .75, 'round'],
  [-5.3, 1.4, .68, 'round'], [-4.95, -2.15, .64, 'round'], [-3.95, -4.45, .74, 'pine'], [-.75, 3.08, .5, 'round'], [2.75, 2.7, .55, 'round'],
  [-3.65, -.45, .57, 'round'], [-3.75, -2.12, .6, 'pine'], [1.0, -1.85, .5, 'round'], [3.6, -.55, .52, 'round'], [3.9, -3.75, .7, 'pine'],
  [4.05, 4.25, .62, 'round'], [6.65, 3.1, .58, 'pine'], [6.95, -2.45, .57, 'round'],
];
for (const args of treePlan) makeTree(...args);

// A few hedges, flower beds, fence lines and scattered garden plants give the town a human scale.
const hedgeMat = new THREE.MeshStandardMaterial({ color: 0x60724a, roughness: 1 });
function hedge(x, z, length, rotation = 0) {
  const group = new THREE.Group(); terrain.add(group); group.position.set(x, GROUND_Y, z); group.rotation.y = rotation;
  for (let i = 0; i < Math.ceil(length / .24); i++) sphere(group, .19, [-length / 2 + i * .23, .2, 0], hedgeMat, [1.35, .86, .9], false);
}
hedge(-4.4, -.2, 1.05, Math.PI / 2); hedge(.95, 2.85, 1.15); hedge(2.25, -3.45, 1.05); hedge(-.9, -3.8, .85);
for (const [x, z, sx, sz] of [[-1.8, 2.6, .46, .27], [2.2, 2.95, .47, .23], [-3.45, -2.75, .4, .22], [3.38, .26, .34, .2], [1.4, -1.05, .42, .2]]) {
  const bed = mesh(new THREE.CylinderGeometry(1, 1, .055, 16), new THREE.MeshStandardMaterial({ color: 0x60523a, roughness: 1 }), terrain, { position: [x, GROUND_Y + .03, z], scale: [sx, 1, sz], cast: false });
  bed.rotation.y = Math.random() * .4;
  for (let i = 0; i < 9; i++) {
    const px = x + (Math.random() - .5) * sx * 1.6, pz = z + (Math.random() - .5) * sz * 1.5;
    const stem = cylinder(terrain, .009, .012, .13 + Math.random() * .12, [px, GROUND_Y + .12, pz], materials.leaf, 5, [0, 0, 0], false);
    stem.rotation.z = (Math.random() - .5) * .25;
    sphere(terrain, .045, [px, GROUND_Y + .24, pz], Math.random() > .5 ? materials.flowerRed : materials.flowerYellow, [.9, .68, .9], false);
  }
}
const fenceMat = new THREE.MeshStandardMaterial({ color: 0xd0be9c, roughness: .92 });
function fenceLine(a, b, count) {
  const p1 = new THREE.Vector3(a[0], 0, a[1]), p2 = new THREE.Vector3(b[0], 0, b[1]);
  for (let i = 0; i <= count; i++) {
    const p = p1.clone().lerp(p2, i / count);
    box(terrain, [.045, .34, .045], [p.x, GROUND_Y + .17, p.z], fenceMat, [0, 0, 0], false);
  }
  for (const y of [GROUND_Y + .14, GROUND_Y + .27]) {
    const rail = new THREE.Vector3(p1.x, y, p1.z).lerp(new THREE.Vector3(p2.x, y, p2.z), .5);
    const length = p1.distanceTo(p2);
    const angle = Math.atan2(p2.x - p1.x, p2.z - p1.z);
    box(terrain, [.055, .045, length], [rail.x, rail.y, rail.z], fenceMat, [0, angle, 0], false);
  }
}
fenceLine([-2.65, -3.58], [-1.2, -3.58], 6);
fenceLine([2.75, -3.03], [3.58, -3.08], 4);
fenceLine([3.06, 3.75], [4.15, 3.76], 5);

// The mill wheel sits beside the east bank with its lower paddles touching the waterline.
const orchardMat = new THREE.MeshStandardMaterial({ color: 0x779052, roughness: 1 });
for (const [x, z] of [[-5.4, -.1], [-5.05, .18], [-4.75, -.13], [-2.9, -4.4], [-2.35, -4.45], [-1.8, -4.38], [1.5, 4.8], [2.05, 4.6]]) {
  cylinder(terrain, .027, .04, .62, [x, GROUND_Y + .31, z], materials.trunk, 6, [0, 0, 0], false);
  for (let i = 0; i < 5; i++) sphere(terrain, .13, [x + (i - 2) * .095, GROUND_Y + .58 + Math.abs(i - 2) * .025, z + (i % 2) * .06], orchardMat, [1, 1.1, 1], false);
}

// Street lamps have warm glass bulbs and independent pools of light for the night scene.
const lampMetal = new THREE.MeshStandardMaterial({ color: 0x485044, roughness: .48, metalness: .35 });
const bulbMat = new THREE.MeshStandardMaterial({ color: 0xf8dcaa, emissive: 0x3a2005, emissiveIntensity: .12, roughness: .22 });
function makeLamp(x, z, height = 1.2) {
  const group = new THREE.Group(); terrain.add(group); group.position.set(x, GROUND_Y, z);
  cylinder(group, .07, .1, .09, [0, .045, 0], lampMetal, 8, [0, 0, 0], false);
  cylinder(group, .025, .034, height - .15, [0, (height - .15) / 2 + .08, 0], lampMetal, 7, [0, 0, 0], true);
  box(group, [.25, .035, .08], [0, height - .1, 0], lampMetal, [0, 0, 0], false);
  sphere(group, .09, [.1, height - .19, 0], bulbMat, [1.05, 1.2, 1], false);
  const lamp = new THREE.PointLight(0xffc67b, .0, 3.8, 2);
  lamp.position.set(x + .1, GROUND_Y + height - .17, z);
  scene.add(lamp); lampLights.push(lamp);
}
for (const [x, z, h] of [[-4.9, 2.95, 1.22], [-4.92, 1.93, 1.16], [-2.65, .82, 1.18], [-.35, .58, 1.22], [1.55, .05, 1.2], [2.68, -1.15, 1.2], [1.02, -2.6, 1.12], [-1.55, -1.45, 1.15], [3.75, 2.07, 1.1]]) makeLamp(x, z, h);

// A paper-map style village square with a dry fountain and small brass rim.
const squareMat = new THREE.MeshStandardMaterial({ color: 0xb9aa8f, roughness: .95 });
const fountainStone = new THREE.MeshStandardMaterial({ color: 0xaaa491, roughness: .84 });
const plaza = mesh(new THREE.CylinderGeometry(1, 1, .035, 28), squareMat, terrain, { position: [-.16, GROUND_Y + .025, .12], scale: [1.2, 1, .75], cast: false });
plaza.rotation.y = -.16;
cylinder(terrain, .39, .45, .19, [-.16, GROUND_Y + .13, .12], fountainStone, 12, [0, 0, 0], false);
cylinder(terrain, .33, .39, .055, [-.16, GROUND_Y + .25, .12], materials.brass, 12, [0, 0, 0], false);
cylinder(terrain, .09, .11, .36, [-.16, GROUND_Y + .4, .12], fountainStone, 8, [0, 0, 0], false);
sphere(terrain, .12, [-.16, GROUND_Y + .61, .12], fountainStone, [1.1, .8, 1.1], false);

// The locomotive, coaches and their wheels are independent scene objects.
const train = new THREE.Group();
scene.add(train);
const locomotives = [];
const trainWindowMat = new THREE.MeshStandardMaterial({ color: 0xf0c97e, roughness: .28, emissive: 0x000000, emissiveIntensity: 0 });
const engineGreen = new THREE.MeshStandardMaterial({ color: 0x355747, roughness: .57, metalness: .23 });
const engineGreenLight = new THREE.MeshStandardMaterial({ color: 0x627052, roughness: .58, metalness: .18 });
const engineBlack = new THREE.MeshStandardMaterial({ color: 0x302f2c, roughness: .42, metalness: .36 });
const redLine = new THREE.MeshStandardMaterial({ color: 0x983f31, roughness: .54 });
const brassTrain = new THREE.MeshStandardMaterial({ color: 0xd0a952, roughness: .3, metalness: .68 });
const wheelMat = new THREE.MeshStandardMaterial({ color: 0x302f2a, roughness: .48, metalness: .3 });
const trainLampMat = new THREE.MeshStandardMaterial({ color: 0xffe8aa, emissive: 0x261500, emissiveIntensity: .5, roughness: .25 });

function makeEngine() {
  const group = new THREE.Group();
  // Local +Z is the direction of travel. The pivot remains at the axle midpoint.
  box(group, [.6, .19, 1.34], [0, .3, -.02], engineBlack, [0, 0, 0], true);
  box(group, [.76, .1, 1.1], [0, .41, -.02], redLine, [0, 0, 0], true);
  box(group, [.53, .23, .69], [0, .78, -.31], engineGreen, [0, 0, 0], true);
  box(group, [.54, .48, .49], [0, .82, -.48], engineGreenLight, [0, 0, 0], true);
  box(group, [.39, .37, .03], [0, .86, -.225], engineBlack, [0, 0, 0], false);
  box(group, [.08, .39, .035], [-.19, .86, -.2], brassTrain, [0, 0, 0], false);
  box(group, [.08, .39, .035], [.19, .86, -.2], brassTrain, [0, 0, 0], false);
  cylinder(group, .245, .245, .82, [0, .72, .16], engineGreen, 14, [Math.PI / 2, 0, 0], true);
  cylinder(group, .21, .23, .15, [0, .72, .54], engineGreenLight, 14, [Math.PI / 2, 0, 0], true);
  cylinder(group, .075, .105, .37, [0, 1.005, .29], engineBlack, 9, [0, 0, 0], true);
  cylinder(group, .13, .13, .065, [0, 1.19, .29], engineBlack, 10, [0, 0, 0], false);
  cylinder(group, .05, .05, .32, [0, .54, -.59], engineBlack, 9, [0, 0, 0], true);
  sphere(group, .105, [0, .92, .57], trainLampMat, [1, .9, .7], false);
  const cow = new THREE.Group(); group.add(cow); cow.position.set(0, .27, .68);
  const cowGeo = new THREE.BufferGeometry();
  cowGeo.setAttribute('position', new THREE.Float32BufferAttribute([-.34, 0, 0, .34, 0, 0, 0, .25, -.1, -.34, 0, 0, 0, .25, -.1, .34, 0, 0], 3));
  cowGeo.computeVertexNormals(); mesh(cowGeo, engineBlack, cow, { cast: true });
  for (const side of [-1, 1]) {
    for (const z of [-.46, .02, .48]) {
      const wheel = cylinder(group, .165, .165, .08, [side * .37, .16, z], wheelMat, 12, [0, 0, Math.PI / 2], true);
      cylinder(group, .047, .047, .09, [side * .416, .16, z], brassTrain, 10, [0, 0, Math.PI / 2], false);
      wheel.userData.rollingWheel = true;
    }
  }
  for (const side of [-1, 1]) {
    box(group, [.025, .04, 1.2], [side * .391, .48, -.02], brassTrain, [0, 0, 0], false);
    box(group, [.3, .035, .035], [side * .31, .35, -.13], engineGreenLight, [0, 0, 0], false);
  }
  const headlight = new THREE.PointLight(0xffbd60, .0, 4, 2);
  headlight.position.set(0, .94, .67); group.add(headlight); decorativeLights.push(headlight);
  return group;
}

function makeCoach(index) {
  const group = new THREE.Group();
  const bodyMaterial = new THREE.MeshStandardMaterial({ color: index ? 0x8b4936 : 0x8e4a35, roughness: .72 });
  const panelMaterial = new THREE.MeshStandardMaterial({ color: 0xa15b3f, roughness: .72 });
  box(group, [.7, .17, 1.23], [0, .31, 0], engineBlack, [0, 0, 0], true);
  box(group, [.77, .08, 1.29], [0, .42, 0], brassTrain, [0, 0, 0], true);
  box(group, [.72, .57, 1.19], [0, .75, 0], bodyMaterial, [0, 0, 0], true);
  box(group, [.74, .12, 1.25], [0, 1.075, 0], panelMaterial, [0, 0, 0], true);
  const roof = mesh(new THREE.CapsuleGeometry(.29, .68, 3, 8), engineBlack, group, { position: [0, 1.17, 0], rotation: [Math.PI / 2, 0, 0], cast: true });
  roof.scale.set(1, .83, 1);
  for (const side of [-1, 1]) {
    for (const z of [-.38, .0, .38]) {
      box(group, [.045, .27, .23], [side * .375, .82, z], brassTrain, [0, 0, 0], false);
      box(group, [.036, .2, .17], [side * .401, .825, z], trainWindowMat, [0, 0, 0], false);
    }
    for (const z of [-.45, .45]) {
      cylinder(group, .145, .145, .08, [side * .37, .16, z], wheelMat, 12, [0, 0, Math.PI / 2], true);
      cylinder(group, .042, .042, .09, [side * .416, .16, z], brassTrain, 9, [0, 0, Math.PI / 2], false);
    }
    box(group, [.023, .028, 1.06], [side * .39, .49, 0], brassTrain, [0, 0, 0], false);
  }
  const endWindow = new THREE.MeshStandardMaterial({ color: 0x554d41, roughness: .4, emissive: 0x000000, emissiveIntensity: 0 });
  for (const z of [-1, 1]) box(group, [.2, .18, .03], [0, .81, z * .605], endWindow, [0, 0, 0], false);
  return group;
}
const engine = makeEngine(); train.add(engine); locomotives.push(engine);
const coachOne = makeCoach(0), coachTwo = makeCoach(1);
train.add(coachOne, coachTwo); locomotives.push(coachOne, coachTwo);
const trainSpacing = 1.46;

function modDistance(value, length) { return ((value % length) + length) % length; }

function placeTrain() {
  for (let i = 0; i < locomotives.length; i++) {
    const distance = travelledDistance - i * trainSpacing;
    const u = modDistance(distance, trackLength) / trackLength;
    const p = trackCurve.getPointAt(u);
    const tangent = trackCurve.getTangentAt(u).setY(0).normalize();
    locomotives[i].position.set(p.x, RAIL_Y, p.z);
    locomotives[i].rotation.y = Math.atan2(tangent.x, tangent.z);
  }
}

function updateNightMode() {
  document.body.classList.toggle('night', nightMode);
  hemi.intensity = nightMode ? .75 : 1.8;
  hemi.color.set(nightMode ? 0x8494bd : 0xffe8c9);
  hemi.groundColor.set(nightMode ? 0x263440 : 0x53634a);
  sun.intensity = nightMode ? .5 : 3.1;
  sun.color.set(nightMode ? 0x96a5d3 : 0xffc98d);
  fillLight.intensity = nightMode ? .22 : .9;
  renderer.toneMappingExposure = nightMode ? .92 : 1.1;
  litWindowMat.emissive.set(nightMode ? 0xffb95f : 0x000000);
  litWindowMat.emissiveIntensity = nightMode ? 1.6 : 0;
  trainWindowMat.emissive.set(nightMode ? 0xffbb64 : 0x000000);
  trainWindowMat.emissiveIntensity = nightMode ? 1.2 : 0;
  for (const light of lampLights) light.intensity = nightMode ? 3.2 : 0;
  for (const light of decorativeLights) light.intensity = nightMode ? 1.7 : .14;
  bulbMat.emissive.set(nightMode ? 0xffaf50 : 0x3a2005);
  bulbMat.emissiveIntensity = nightMode ? 1.8 : .12;
  trainLampMat.emissive.set(nightMode ? 0xffc267 : 0x261500);
  trainLampMat.emissiveIntensity = nightMode ? 2.3 : .5;
  ui.themeIcon.textContent = nightMode ? '☼' : '☾';
  ui.themeLabel.textContent = nightMode ? '切换白昼' : '点亮夜景';
  ui.theme.setAttribute('aria-label', nightMode ? '切换白昼' : '切换夜景');
}

function updateTrainStatus() {
  if (!isRunning) {
    ui.status.textContent = '列车已暂停';
    ui.station.textContent = dwellRemaining > 0 ? '站内停靠' : '河湾站';
    return;
  }
  if (dwellRemaining > 0) {
    ui.status.textContent = `河湾站停靠 ${dwellRemaining.toFixed(1)}s`;
    ui.station.textContent = '列车停靠中';
  } else {
    ui.status.textContent = '环线行驶中';
    ui.station.textContent = '河湾站';
  }
}

function updatePlayButton() {
  ui.playIcon.innerHTML = isRunning ? '<path d="M8 5v14M16 5v14"/>' : '<path d="m8 5 11 7-11 7z"/>';
  ui.play.setAttribute('aria-label', isRunning ? '暂停列车' : '运行列车');
  updateTrainStatus();
}

ui.play.addEventListener('click', () => {
  isRunning = !isRunning;
  updatePlayButton();
});
ui.speed.addEventListener('input', () => {
  speedFactor = Number(ui.speed.value);
  ui.speedReadout.textContent = speedFactor.toFixed(1);
  const percent = (speedFactor - Number(ui.speed.min)) / (Number(ui.speed.max) - Number(ui.speed.min)) * 100;
  ui.speed.style.background = `linear-gradient(90deg, #a68a59 0%, #a68a59 ${percent}%, #d8d1c4 ${percent}%, #d8d1c4 100%)`;
});
ui.theme.addEventListener('click', () => { nightMode = !nightMode; updateNightMode(); });
ui.reset.addEventListener('click', () => {
  camera.position.copy(initialCamera);
  controls.target.copy(initialTarget);
  controls.update();
  speedFactor = 1;
  ui.speed.value = '1';
  ui.speed.dispatchEvent(new Event('input'));
  travelledDistance = stationDistance - 2.25;
  dwellRemaining = 0;
  isRunning = true;
  nightMode = false;
  updateNightMode();
  updatePlayButton();
  placeTrain();
});

controls.addEventListener('start', () => {
  didInteract = true;
  ui.dragHint.classList.add('hidden');
});
ui.dragHint.addEventListener('transitionend', () => {
  if (didInteract) ui.dragHint.style.visibility = 'hidden';
});

travelledDistance = stationDistance - 2.25;
placeTrain();
updateNightMode();
updatePlayButton();
ui.speed.dispatchEvent(new Event('input'));

function resize() {
  const width = window.innerWidth, height = window.innerHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.35));
}
window.addEventListener('resize', resize);

let renderElapsed = 0;
renderer.setAnimationLoop(() => {
  renderElapsed += clock.getDelta();
  if (renderElapsed < 1 / 40) return;
  const delta = Math.min(renderElapsed, .06);
  renderElapsed = 0;
  controls.update();
  if (isRunning) {
    if (dwellRemaining > 0) {
      dwellRemaining = Math.max(0, dwellRemaining - delta);
    } else {
      const advance = delta * 1.22 * speedFactor;
      const current = modDistance(travelledDistance, trackLength);
      let untilStation = modDistance(stationDistance - current, trackLength);
      if (untilStation < .001) untilStation = trackLength;
      if (advance >= untilStation) {
        travelledDistance += untilStation;
        dwellRemaining = 2;
      } else {
        travelledDistance += advance;
      }
    }
    placeTrain();
  }
  updateTrainStatus();
  renderer.render(scene, camera);
});

window.addEventListener('keydown', (event) => {
  if (event.code === 'Space' && !['INPUT', 'BUTTON'].includes(document.activeElement?.tagName)) {
    event.preventDefault(); isRunning = !isRunning; updatePlayButton();
  }
  if (event.key.toLowerCase() === 'n') { nightMode = !nightMode; updateNightMode(); }
});
