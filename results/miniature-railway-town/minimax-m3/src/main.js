import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import { buildBase, buildGrass, buildRiver, buildBridge } from './scene/world.js';
import { buildTrack } from './scene/track.js';
import { buildStation, buildHouses, buildTrees, buildStreetLamps, buildRoads, buildFences } from './scene/town.js';
import { buildTrain, TrainMotion } from './scene/train.js';
import { buildLighting, setNightLights } from './scene/lighting.js';

// ---------------------------------------------------------------------------
// Renderer / scene / camera
// ---------------------------------------------------------------------------
const canvas = document.getElementById('scene-canvas');
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  alpha: false,
  powerPreference: 'high-performance',
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight, false);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xe2a878); // warm sunset default

const camera = new THREE.PerspectiveCamera(
  35,
  window.innerWidth / window.innerHeight,
  0.1,
  200
);
// Isometric-ish start position. The base is centered on the origin in XZ.
const initialCamPos = new THREE.Vector3(24, 20, 24);
const initialTarget = new THREE.Vector3(-2, 0, 0);
camera.position.copy(initialCamPos);
camera.lookAt(initialTarget);

const controls = new OrbitControls(camera, canvas);
controls.target.copy(initialTarget);
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.minDistance = 14;
controls.maxDistance = 55;
controls.minPolarAngle = 0.18;             // can't look straight down
controls.maxPolarAngle = Math.PI * 0.46;  // can't go below horizon
controls.enablePan = false;
controls.rotateSpeed = 0.65;
controls.zoomSpeed = 0.85;

// ---------------------------------------------------------------------------
// Build the world
// ---------------------------------------------------------------------------
const base = buildBase({ size: 30, thickness: 1.4 });
scene.add(base);

const grass = buildGrass({ size: 30, segments: 56 });
scene.add(grass);

const { mesh: river, centerline: riverCenterline } = buildRiver({});
scene.add(river);

const bridge = buildBridge({ centerline: riverCenterline, atT: 0.62, length: 5.2 });
scene.add(bridge.group);

// Track + station
const track = buildTrack();
scene.add(track.group);

const station = buildStation({
  position: track.stationPos,
  tangent: track.curve.getTangentAt(track.stationT),
});
scene.add(station.group);

// Town
const townCenter = new THREE.Vector3(-6.5, 0, 5.5);
const town = buildHouses({ center: townCenter, count: 7 });
scene.add(town.group);

// Roads
const roadPaths = [
  [
    { x: -13, z: 2.0 },
    { x: -10, z: 3.0 },
    { x: -7, z: 4.0 },
    { x: -3, z: 4.8 },
    { x: 1, z: 5.0 },
    { x: 5, z: 5.2 },
  ],
  [
    { x: -7, z: 4.0 },
    { x: -7, z: 7.5 },
    { x: -5, z: 9.0 },
  ],
  [
    { x: 5, z: 5.2 },
    { x: 9, z: 4.0 },
    { x: 11.5, z: 2.5 },
    { x: 13, z: 0 },
  ],
];
const roads = buildRoads({ paths: roadPaths });
scene.add(roads);

// Street lamps along the main road (the east-going avenue from the station)
const lampPositions = [];
for (let i = 0; i < 7; i++) {
  const t = i / 6;
  // main road x from -13 to 5, z slightly south of road centerline
  const x = -13 + t * 18;
  const z = 1.8 + Math.sin(t * Math.PI) * 0.6 + (i % 2 === 0 ? -0.9 : 0.9);
  lampPositions.push({ x, z });
}
const lamps = buildStreetLamps({ positions: lampPositions });
scene.add(lamps.group);

// Fences around the town cluster
const fenceSegs = [
  { a: { x: -10.5, z: 3.0 }, b: { x: -3.0, z: 3.4 } },
  { a: { x: -3.0, z: 3.4 }, b: { x: -3.0, z: 7.0 } },
];
const fences = buildFences({ segments: fenceSegs });
scene.add(fences);

// Trees
const treeAvoidFn = (x, z) => {
  // Don't plant trees on the track, on the river, on roads, on buildings.
  // Track: roughly the perimeter of an oval — sample at 32 points.
  for (let i = 0; i < 32; i++) {
    const t = i / 32;
    const p = track.curve.getPointAt(t);
    if (Math.hypot(p.x - x, p.z - z) < 1.4) return true;
  }
  // Roads: keep ~1.4 units away
  for (const path of roadPaths) {
    for (let i = 0; i < path.length - 1; i++) {
      const a = path[i];
      const b = path[i + 1];
      const dx = b.x - a.x;
      const dz = b.z - a.z;
      const len2 = dx * dx + dz * dz;
      if (len2 < 1e-3) continue;
      let t = ((x - a.x) * dx + (z - a.z) * dz) / len2;
      t = Math.max(0, Math.min(1, t));
      const px = a.x + dx * t;
      const pz = a.z + dz * t;
      if (Math.hypot(px - x, pz - z) < 1.3) return true;
    }
  }
  // Building cells
  for (const pos of housePositions) {
    if (Math.hypot(pos.x - x, pos.z - z) < 1.4) return true;
  }
  return false;
};

// The avoidFn needs the actual house positions; pull them from the group
const housePositions = [];
town.group.traverse((obj) => {
  if (obj.isGroup && obj !== town.group && obj.children.length > 0) {
    housePositions.push({ x: obj.position.x, z: obj.position.z });
  }
});

// Trees scattered in remaining space
const trees = buildTrees({ count: 28, avoidFn: treeAvoidFn, riverCenterline });
scene.add(trees);

// Train
const train = buildTrain();
scene.add(train.group);

const motion = new TrainMotion({
  curve: track.curve,
  cars: train.cars,
  stationT: track.stationT,
  startT: track.stationT + 0.07,
  speed: 1.0,
});

// Lighting
const lighting = buildLighting();
scene.add(lighting.group);

const allEmissive = [
  ...station.emissiveMaterials,
  ...town.emissiveMaterials,
  ...lamps.emissiveMaterials,
  ...train.emissiveMaterials,
];

// ---------------------------------------------------------------------------
// State and UI
// ---------------------------------------------------------------------------
const state = {
  isPlaying: true,
  timeOfDay: 'sunset',
  speed: 1.0,
};

// Apply default state (sunset) immediately, including night-light strength.
function applyPreset(name) {
  const r = lighting.apply(name);
  if (r && r.bgColor !== undefined) scene.background.setHex(r.bgColor);
  scene.fog = r.fog;
  setNightLights(allEmissive, r.emissiveStrength);
  state.timeOfDay = name;
}
applyPreset('sunset');

const ui = {
  btnPlay: document.getElementById('btn-play'),
  btnReset: document.getElementById('btn-reset'),
  speed: document.getElementById('speed'),
  speedVal: document.getElementById('speed-val'),
  daynight: document.getElementById('daynight'),
  daynightLabel: document.getElementById('daynight-label'),
  hudState: document.getElementById('hud-state'),
  hudSpeed: document.getElementById('hud-speed'),
  hudTime: document.getElementById('hud-time'),
  hudDwell: document.getElementById('hud-dwell'),
};

function refreshHud() {
  ui.hudState.textContent = state.isPlaying ? '运行中' : '已暂停';
  ui.hudSpeed.textContent = state.speed.toFixed(2) + '×';
  ui.hudTime.textContent = ({ sunset: '傍晚', day: '白天', night: '夜晚' })[state.timeOfDay] || state.timeOfDay;
  if (motion.isAtStation()) {
    ui.hudDwell.textContent = motion.getDwellRemaining().toFixed(1) + 's';
  } else {
    ui.hudDwell.textContent = '—';
  }
}

ui.btnPlay.addEventListener('click', () => {
  state.isPlaying = !state.isPlaying;
  motion.setPlaying(state.isPlaying);
  ui.btnPlay.textContent = state.isPlaying ? '暂停' : '运行';
  refreshHud();
});

ui.btnReset.addEventListener('click', () => {
  motion.reset({ startT: track.stationT + 0.07 });
  state.speed = 1.0;
  state.isPlaying = true;
  motion.setPlaying(true);
  motion.setSpeed(state.speed);
  ui.speed.value = '1';
  ui.speedVal.textContent = '1.00×';
  ui.btnPlay.textContent = '暂停';
  camera.position.copy(initialCamPos);
  controls.target.copy(initialTarget);
  controls.update();
  refreshHud();
});

ui.speed.addEventListener('input', (e) => {
  state.speed = parseFloat(e.target.value);
  motion.setSpeed(state.speed);
  ui.speedVal.textContent = state.speed.toFixed(2) + '×';
  refreshHud();
});

let dayNightIdx = 0; // 0 = sunset (default), 1 = day, 2 = night, then loop
const dayNightOrder = ['sunset', 'day', 'night'];
ui.daynight.addEventListener('click', () => {
  dayNightIdx = (dayNightIdx + 1) % dayNightOrder.length;
  applyPreset(dayNightOrder[dayNightIdx]);
  ui.daynight.classList.toggle('night', dayNightOrder[dayNightIdx] === 'night');
  refreshHud();
});

window.addEventListener('resize', () => {
  const w = window.innerWidth;
  const h = window.innerHeight;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h, false);
});

// ---------------------------------------------------------------------------
// Main loop
// ---------------------------------------------------------------------------
const clock = new THREE.Clock();

function frame() {
  const dt = Math.min(clock.getDelta(), 0.05); // clamp big stalls

  motion.update(dt);
  controls.update();
  renderer.render(scene, camera);
  // Refresh dwell text at ~10 Hz to avoid layout thrash.
  if (performance.now() - lastHudRefresh > 100) {
    refreshHud();
    lastHudRefresh = performance.now();
  }
  requestAnimationFrame(frame);
}

let lastHudRefresh = 0;
refreshHud();
requestAnimationFrame(frame);

// Expose a tiny debug surface (useful for the CDP smoke check, not user-facing).
window.__sandbox = {
  scene, camera, renderer, motion, state, applyPreset,
};