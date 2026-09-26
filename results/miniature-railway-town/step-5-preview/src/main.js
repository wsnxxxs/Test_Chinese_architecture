/**
 * Millford — a desktop miniature railway town.
 *
 * Boots the sandbox: base, roads, railway, town, vegetation and train, then
 * wires the UI (run/pause, speed, reset, day/night, overview) and runs the
 * animation loop. The whole scene is generated procedurally from src/layout.js,
 * so the loop, river, roads and buildings all agree with each other by
 * construction.
 */
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { createMaterials } from './materials.js';
import { createLayout, makeKeepouts } from './layout.js';
import { buildBase } from './base.js';
import { buildRoads } from './roads.js';
import { buildRailway, buildRoadBridges } from './railway.js';
import { buildTown } from './buildings.js';
import { buildVegetation } from './props.js';
import { buildTrain } from './train.js';

// ---------------------------------------------------------------------------
// Lighting presets for the two ends of the day/night blend.
// ---------------------------------------------------------------------------
const DAY = {
  sky: new THREE.Color(0xf6dfb8),
  sun: new THREE.Color(0xffd7a1),
  sunIntensity: 2.5,
  hemiSky: new THREE.Color(0xcfe2ff),
  hemiGround: new THREE.Color(0x9a8464),
  hemiIntensity: 0.85,
  fill: new THREE.Color(0xffe6c4),
  fillIntensity: 0.35,
  water: new THREE.Color(0x527f9c),
  exposure: 1.0,
};
const NIGHT = {
  sky: new THREE.Color(0x101a2c),
  sun: new THREE.Color(0x8fb0e8),
  sunIntensity: 0.5,
  hemiSky: new THREE.Color(0x2b3d63),
  hemiGround: new THREE.Color(0x11141d),
  hemiIntensity: 0.4,
  fill: new THREE.Color(0x6f86c4),
  fillIntensity: 0.18,
  water: new THREE.Color(0x1d3550),
  exposure: 1.18,
};

const app = document.getElementById('app');
const ui = {
  run: document.getElementById('btn-run'),
  runText: document.getElementById('run-text'),
  reset: document.getElementById('btn-reset'),
  theme: document.getElementById('btn-theme'),
  themeText: document.getElementById('theme-text'),
  view: document.getElementById('btn-view'),
  speed: document.getElementById('speed'),
  speedVal: document.getElementById('speed-val'),
  status: document.getElementById('status'),
  statusText: document.getElementById('status-text'),
  loading: document.getElementById('loading'),
};

// ---------------------------------------------------------------------------
// Renderer, scene, camera
// ---------------------------------------------------------------------------
const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = DAY.exposure;
renderer.outputColorSpace = THREE.SRGBColorSpace;
app.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = DAY.sky.clone();

const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, -100, 200);
camera.position.set(46, 40, 46);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.minZoom = 0.45;
controls.maxZoom = 4;
controls.minPolarAngle = 0.15;
controls.maxPolarAngle = Math.PI * 0.47;
controls.screenSpacePanning = false;

// ---------------------------------------------------------------------------
// Build the world
// ---------------------------------------------------------------------------
const M = createMaterials();
const layout = createLayout();

const base = buildBase(M, layout);
scene.add(base.group);

const roads = buildRoads(M, layout);
scene.add(roads.group);

const railway = buildRailway(M, layout);
scene.add(railway.group);

const roadBridges = buildRoadBridges(M, layout);
scene.add(roadBridges);

const keepout = makeKeepouts(layout, []);
const town = buildTown(M, M.theme, layout, keepout);
scene.add(town.group);

// Trees and bushes only once the building footprints are known.
keepout.buildings = town.rects;
const vegetation = buildVegetation(M, layout, keepout, { trees: 52, bushes: 34 });
scene.add(vegetation.group);

const train = buildTrain(M, M.theme, layout);
scene.add(train.group);

// ---------------------------------------------------------------------------
// Lights
// ---------------------------------------------------------------------------
const sun = new THREE.DirectionalLight(DAY.sun.clone(), DAY.sunIntensity);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.bias = -0.0006;
sun.shadow.normalBias = 0.045;
const shadowCam = sun.shadow.camera;
sun.target.position.set(0, 0, 0);
scene.add(sun, sun.target);
const hemi = new THREE.HemisphereLight(DAY.hemiSky.clone(), DAY.hemiGround.clone(), DAY.hemiIntensity);
scene.add(hemi);

const fill = new THREE.DirectionalLight(DAY.fill.clone(), DAY.fillIntensity);
fill.position.set(-30, 22, -18);
scene.add(fill);

// A little warm bounce light on the station square, cheap and it lifts the
// shadow side of the model.
const bounce = new THREE.PointLight(0xffc98a, 0.5, 26, 2);
bounce.position.set(0, 6, -6);
scene.add(bounce);

// ---------------------------------------------------------------------------
// Camera framing
// ---------------------------------------------------------------------------
const worldBox = new THREE.Box3().setFromObject(scene);
const boxCentre = worldBox.getCenter(new THREE.Vector3());
const boxCorners = [
  new THREE.Vector3(worldBox.min.x, worldBox.min.y, worldBox.min.z),
  new THREE.Vector3(worldBox.max.x, worldBox.min.y, worldBox.min.z),
  new THREE.Vector3(worldBox.min.x, worldBox.max.y, worldBox.min.z),
  new THREE.Vector3(worldBox.max.x, worldBox.max.y, worldBox.min.z),
  new THREE.Vector3(worldBox.min.x, worldBox.min.y, worldBox.max.z),
  new THREE.Vector3(worldBox.max.x, worldBox.min.y, worldBox.max.z),
  new THREE.Vector3(worldBox.min.x, worldBox.max.y, worldBox.max.z),
  new THREE.Vector3(worldBox.max.x, worldBox.max.y, worldBox.max.z),
];
const viewRadius = worldBox.getBoundingSphere(new THREE.Sphere()).radius;

// Shadow frustum basis, rebuilt whenever the sun moves.
const shadowRight = new THREE.Vector3();
const shadowUp = new THREE.Vector3();
const shadowDir = new THREE.Vector3();
const WORLD_UP = new THREE.Vector3(0, 1, 0);

/**
 * Orient the shadow frustum on the current sun direction and size it to the
 * model, so the shadows never clip a corner as the sun swings towards night.
 */
function frameShadowCamera() {
  shadowDir.subVectors(sun.target.position, sun.position).normalize();
  shadowRight.crossVectors(shadowDir, WORLD_UP).normalize();
  shadowUp.crossVectors(shadowRight, shadowDir).normalize();
  const o = sun.target.position;
  let hx = 1;
  let hy = 1;
  let reach = 1;
  for (const c of boxCorners) {
    hx = Math.max(hx, Math.abs(c.dot(shadowRight) - o.dot(shadowRight)));
    hy = Math.max(hy, Math.abs(c.dot(shadowUp) - o.dot(shadowUp)));
    reach = Math.max(reach, c.distanceTo(sun.position));
  }
  const dist = sun.position.distanceTo(o);
  shadowCam.left = -hx * 1.06;
  shadowCam.right = hx * 1.06;
  shadowCam.top = hy * 1.06;
  shadowCam.bottom = -hy * 1.06;
  shadowCam.near = Math.max(1, dist - reach);
  shadowCam.far = dist + reach + 4;
  shadowCam.updateProjectionMatrix();
}

/** Near-isometric three-quarter view of the whole sandbox. */
const HOME_DIR = new THREE.Vector3(0.86, 0.72, 1).normalize();
const HOME_POS = boxCentre.clone().addScaledVector(HOME_DIR, viewRadius * 4);

/** Fit the orthographic frustum to the whole model for the current aspect. */
function fitFrustum(pad = 1.05) {
  const aspect = window.innerWidth / window.innerHeight;
  camera.updateMatrixWorld();
  const inv = new THREE.Matrix4().copy(camera.matrixWorld).invert();
  let mx = 0;
  let my = 0;
  for (const c of boxCorners) {
    const v = c.clone().applyMatrix4(inv);
    mx = Math.max(mx, Math.abs(v.x));
    my = Math.max(my, Math.abs(v.y));
  }
  const half = Math.max(my * pad, (mx * pad) / Math.max(0.35, aspect));
  camera.top = half;
  camera.bottom = -half;
  camera.left = -half * aspect;
  camera.right = half * aspect;
  camera.near = 0.1;
  camera.far = viewRadius * 12;
  camera.updateProjectionMatrix();
}

function goHome(animate = true) {
  if (animate) {
    camera.position.copy(HOME_POS);
    controls.target.copy(boxCentre);
    fitFrustum();
    controls.update();
  } else {
    camera.position.copy(HOME_POS);
    controls.target.copy(boxCentre);
    fitFrustum();
    controls.update();
  }
}
camera.position.copy(HOME_POS);
controls.target.copy(boxCentre);
fitFrustum();
controls.update();

// ---------------------------------------------------------------------------
// Day / night
// ---------------------------------------------------------------------------
let themeT = 0;
let themeTarget = 0;
const themeCol = new THREE.Color();

function applyTheme(t) {
  M.theme.set(t);
  scene.background.copy(themeCol.copy(DAY.sky).lerp(NIGHT.sky, t));
  scene.fog = null;
  sun.color.copy(themeCol.copy(DAY.sun).lerp(NIGHT.sun, t));
  sun.intensity = THREE.MathUtils.lerp(DAY.sunIntensity, NIGHT.sunIntensity, t);
  sun.position.copy(
    new THREE.Vector3(24, 26, 14).lerp(new THREE.Vector3(-16, 30, 20), t).add(boxCentre),
  );
  frameShadowCamera();
  fill.color.copy(themeCol.copy(DAY.fill).lerp(NIGHT.fill, t));
  fill.intensity = THREE.MathUtils.lerp(DAY.fillIntensity, NIGHT.fillIntensity, t);
  hemi.color.copy(themeCol.copy(DAY.hemiSky).lerp(NIGHT.hemiSky, t));
  hemi.groundColor.copy(themeCol.copy(DAY.hemiGround).lerp(NIGHT.hemiGround, t));
  hemi.intensity = THREE.MathUtils.lerp(DAY.hemiIntensity, NIGHT.hemiIntensity, t);
  bounce.intensity = THREE.MathUtils.lerp(0.5, 1.1, t);
  if (base.water) base.water.material.color.copy(themeCol.copy(DAY.water).lerp(NIGHT.water, t));
  renderer.toneMappingExposure = THREE.MathUtils.lerp(DAY.exposure, NIGHT.exposure, t);
}
applyTheme(0);

function setThemeToggle(night) {
  themeTarget = night ? 1 : 0;
  ui.theme.dataset.on = night ? 'true' : 'false';
  ui.theme.querySelector('.ico').textContent = night ? '☀' : '☾';
  ui.themeText.textContent = night ? '白天' : '夜晚';
}

// ---------------------------------------------------------------------------
// UI state
// ---------------------------------------------------------------------------
let running = true;
const SPEED_MIN = 0.25;
const SPEED_MAX = 3;

function syncSpeedLabel() {
  const v = Number(ui.speed.value);
  ui.speedVal.textContent = `${v.toFixed(2)}×`;
  ui.speed.style.setProperty('--fill', `${((v - SPEED_MIN) / (SPEED_MAX - SPEED_MIN)) * 100}%`);
}

function setRunning(next) {
  running = next;
  train.controller.paused = !running;
  ui.run.querySelector('.ico').textContent = running ? '❚❚' : '▶';
  ui.runText.textContent = running ? '暂停' : '运行';
  ui.run.classList.toggle('primary', running);
  ui.status.classList.toggle('paused', !running);
}

function resetAll() {
  setRunning(true);
  ui.speed.value = '1';
  syncSpeedLabel();
  train.controller.speedScale = 1;
  train.controller.reset();
  train.place();
  goHome(true);
  updateStatus();
}

function updateStatus() {
  ui.status.classList.remove('paused', 'stopping');
  if (!running) {
    ui.status.classList.add('paused');
    ui.statusText.textContent = '已暂停';
    return;
  }
  const s = train.controller.state;
  if (s === 'dwelling') ui.statusText.textContent = '车站停靠中';
  else if (s === 'braking') {
    ui.status.classList.add('stopping');
    ui.statusText.textContent = '减速进站';
  } else ui.statusText.textContent = '运行中';
}

ui.run.addEventListener('click', () => setRunning(!running));
ui.reset.addEventListener('click', resetAll);
ui.view.addEventListener('click', () => goHome(true));
ui.theme.addEventListener('click', () => setThemeToggle(themeTarget < 0.5));
ui.speed.addEventListener('input', () => {
  const v = Number(ui.speed.value);
  train.controller.speedScale = v;
  syncSpeedLabel();
});
window.addEventListener('keydown', (e) => {
  if (e.code === 'Space') { e.preventDefault(); setRunning(!running); }
  else if (e.key === 'r' || e.key === 'R') resetAll();
  else if (e.key === 'n' || e.key === 'N') setThemeToggle(themeTarget < 0.5);
  else if (e.key === 'v' || e.key === 'V') goHome(true);
});
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  fitFrustum();
});

syncSpeedLabel();
setRunning(true);
train.place();

// ---------------------------------------------------------------------------
// Animation loop
// ---------------------------------------------------------------------------
const clock = new THREE.Clock();
let wheelSpin = 0;
let frames = 0;
let statusTimer = 0;

function tick() {
  const dt = Math.min(clock.getDelta(), 0.05);

  if (running) {
    train.update(dt);
    // The mill wheel turns slowly whatever the train is doing.
    wheelSpin += dt * (train.controller.v > 0.01 ? 0.5 : 0.12);
    if (town.millWheel) town.millWheel.rotation.x = wheelSpin;
  }

  // Smooth the day/night blend.
  if (Math.abs(themeT - themeTarget) > 0.001) {
    themeT += (themeTarget - themeT) * Math.min(1, dt * 2.2);
    applyTheme(themeT);
  }

  controls.update();
  renderer.render(scene, camera);

  frames++;
  statusTimer += dt;
  if (statusTimer > 0.2) {
    statusTimer = 0;
    updateStatus();
  }

  if (frames === 2) {
    ui.loading.classList.add('hide');
    setTimeout(() => ui.loading.remove(), 700);
  }
  requestAnimationFrame(tick);
}
tick();

// ---------------------------------------------------------------------------
// Debug / test handle
// ---------------------------------------------------------------------------
window.__railway = {
  THREE,
  scene,
  renderer,
  camera,
  controls,
  layout,
  M,
  base,
  roads,
  railway,
  roadBridges,
  town,
  vegetation,
  train,
  fitFrustum,
  goHome,
  applyTheme,
  setThemeToggle,
  setRunning,
  resetAll,
  get state() {
    return {
      frames,
      running,
      themeT,
      themeTarget,
      trainD: train.controller.d,
      trainV: train.controller.v,
      trainState: train.controller.state,
      speedScale: train.controller.speedScale,
      units: train.units.map((u) => ({
        kind: u.kind,
        offset: u.offset,
        pos: u.mesh.position.toArray(),
        yaw: u.mesh.rotation.y,
      })),
    };
  },
  issues: town.issues,
  renderOnce() {
    renderer.render(scene, camera);
  },
};
