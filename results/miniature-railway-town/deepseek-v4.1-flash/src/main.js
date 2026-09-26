import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GeometryBatcher } from './lib/geometry.js';
import { createMaterials } from './world/materials.js';
import { buildBoard } from './world/board.js';
import { buildTerrain } from './world/terrain.js';
import { buildRailway } from './world/railway.js';
import { buildRoads } from './world/roads.js';
import { buildTown } from './world/town.js';
import { createLighting } from './world/lighting.js';
import { Train } from './world/train.js';
import { TRACK_LENGTH, trackCurve } from './world/layout.js';

// ---------------------------------------------------------------------------
// Boot: build the diorama, wire the control panel and drive the animation.
// ---------------------------------------------------------------------------

const HOME = {
  azimuth: 40, // degrees, measured from +Z towards +X
  elevation: 34,
  distance: 172,
  target: new THREE.Vector3(0, 0.8, 0),
};

const DEFAULT_SPEED = 11;

const canvas = document.getElementById('scene');
const loading = document.getElementById('loading');

const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  powerPreference: 'high-performance',
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.setSize(window.innerWidth, window.innerHeight, false);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.02;

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 2400);
applyHomeView();

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.075;
controls.target.copy(HOME.target);
controls.minDistance = 38;
controls.maxDistance = 430;
controls.minPolarAngle = THREE.MathUtils.degToRad(8);
controls.maxPolarAngle = THREE.MathUtils.degToRad(84);
controls.zoomSpeed = 0.85;
controls.rotateSpeed = 0.75;
controls.panSpeed = 0.7;
controls.update();

function applyHomeView() {
  const az = THREE.MathUtils.degToRad(HOME.azimuth);
  const el = THREE.MathUtils.degToRad(HOME.elevation);
  camera.position.set(
    HOME.target.x + HOME.distance * Math.cos(el) * Math.sin(az),
    HOME.target.y + HOME.distance * Math.sin(el),
    HOME.target.z + HOME.distance * Math.cos(el) * Math.cos(az)
  );
  camera.lookAt(HOME.target);
}

// --- world -----------------------------------------------------------------

const materials = createMaterials(renderer);
const batcher = new GeometryBatcher();

buildBoard(scene, materials, batcher);
const terrain = buildTerrain(scene, materials);
const railway = buildRailway(scene, materials, batcher);
const roadNet = buildRoads(scene, materials, batcher);
const town = buildTown(scene, materials, batcher);

const train = new Train(materials, scene);
const lighting = createLighting(scene, renderer, materials, town.lamps);

console.info(
  `[diorama] triangles ${Math.round(batcher.triangles).toLocaleString()} · ` +
    `rail bridges ${railway.spans.length} · level crossings ${roadNet.crossings.length} · ` +
    `road bridges ${roadNet.bridges.length} · lamps ${town.lamps.length}`
);

// --- state -----------------------------------------------------------------

const state = {
  paused: false,
  speed: DEFAULT_SPEED,
  mode: 'day',
};

train.speed = state.speed;

const ui = {
  play: document.getElementById('btn-play'),
  reset: document.getElementById('btn-reset'),
  time: document.getElementById('btn-time'),
  speed: document.getElementById('speed'),
  speedVal: document.getElementById('speed-val'),
  status: document.getElementById('status-train'),
  note: document.getElementById('status-note'),
};

function refreshUi() {
  ui.play.textContent = state.paused ? '▶ 运行' : '⏸ 暂停';
  ui.time.textContent = state.mode === 'night' ? '☀️ 切换到白天' : '🌙 切换到夜晚';
  ui.speedVal.textContent = state.speed.toFixed(1);
}

function setPaused(paused) {
  state.paused = paused;
  refreshUi();
}

function setMode(mode) {
  state.mode = mode;
  lighting.setMode(mode);
  refreshUi();
}

function reset() {
  state.paused = false;
  state.speed = DEFAULT_SPEED;
  ui.speed.value = String(DEFAULT_SPEED);
  train.reset(DEFAULT_SPEED);
  applyHomeView();
  controls.target.copy(HOME.target);
  controls.update();
  refreshUi();
}

ui.play.addEventListener('click', () => setPaused(!state.paused));
ui.reset.addEventListener('click', reset);
ui.time.addEventListener('click', () => setMode(state.mode === 'night' ? 'day' : 'night'));
ui.speed.addEventListener('input', () => {
  state.speed = Number(ui.speed.value);
  train.speed = state.speed;
  refreshUi();
});

window.addEventListener('keydown', (event) => {
  if (event.target instanceof HTMLInputElement) return;
  if (event.code === 'Space') {
    event.preventDefault();
    setPaused(!state.paused);
  } else if (event.code === 'KeyR') {
    reset();
  } else if (event.code === 'KeyN') {
    setMode(state.mode === 'night' ? 'day' : 'night');
  }
});

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight, false);
});

// --- loop ------------------------------------------------------------------

const clock = new THREE.Clock();
let waterOffset = 0;
let statusTimer = 0;
let firstFrame = true;

function animate() {
  const dt = Math.min(clock.getDelta(), 0.05);

  lighting.update(dt);

  if (!state.paused) {
    train.update(dt);
    waterOffset += dt * 0.035;
    materials.water.map.offset.set(waterOffset * 0.35, waterOffset);
    materials.water.bumpMap.offset.set(-waterOffset * 0.5, waterOffset * 1.4);
    if (town.mill) town.mill.spin.rotation.x -= dt * 0.95;
  }

  controls.update();
  renderer.render(scene, camera);

  statusTimer -= dt;
  if (statusTimer <= 0) {
    statusTimer = 0.2;
    const cls = state.paused ? 'paused' : train.isDwelling ? 'dwell' : 'running';
    const label = state.paused ? '已暂停' : train.isDwelling ? '到站停靠' : '运行中';
    if (ui.status.textContent !== label) {
      ui.status.textContent = label;
      ui.status.className = `pill ${cls}`;
    }
    ui.note.textContent = state.paused ? '计时与车厢一并暂停' : '车厢各自沿轨道行驶';
  }

  if (firstFrame) {
    firstFrame = false;
    if (loading) {
      loading.classList.add('hidden');
      setTimeout(() => loading.remove(), 700);
    }
  }

  requestAnimationFrame(animate);
}

refreshUi();
requestAnimationFrame(animate);

// expose a tiny handle for debugging / automated checks
window.__diorama = {
  scene,
  camera,
  renderer,
  train,
  state,
  lighting,
  controls,
  materials,
  trackCurve,
  trackLength: TRACK_LENGTH,
  setMode,
  setPaused,
  reset,
};
