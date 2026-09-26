import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import './style.css';
import { createWorld } from './scene/world.js';
import { mountUI } from './ui.js';
import { layoutReport, trackFrame } from './scene/layout.js';
import { trainStatus } from './scene/train.js';

const canvas = document.getElementById('scene');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.setSize(window.innerWidth, window.innerHeight, false);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const scene = new THREE.Scene();

/* ------------------------------------------------------------ opening view */

const CAM_AZIMUTH = -0.79;      // about +y; negative puts us off the south-west corner
const CAM_ELEVATION = 0.6;      // radians above the board
const TARGET_HOME = new THREE.Vector3(0.2, 0.35, 0.2);

const camera = new THREE.PerspectiveCamera(26, window.innerWidth / window.innerHeight, 0.8, 320);

/** Points the first frame must contain: the stand's corners plus its tallest props. */
const FRAME_POINTS = (() => {
  const pts = [];
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      pts.push(new THREE.Vector3(sx * 15.3, 0.75, sz * 11.9));
      pts.push(new THREE.Vector3(sx * 15.3, -2.0, sz * 11.9));
    }
  }
  pts.push(new THREE.Vector3(5.3, 5.8, -4.0));
  pts.push(new THREE.Vector3(-4.1, 3.8, 4.55));
  return pts;
})();

const _v = new THREE.Vector3();
const _mvp = new THREE.Matrix4();

function camDir(d) {
  return new THREE.Vector3(
    Math.sin(CAM_AZIMUTH) * Math.cos(CAM_ELEVATION) * d,
    Math.sin(CAM_ELEVATION) * d,
    Math.cos(CAM_AZIMUTH) * Math.cos(CAM_ELEVATION) * d
  );
}

function fitsAll(d) {
  camera.position.copy(camDir(d)).add(TARGET_HOME);
  camera.lookAt(TARGET_HOME);
  camera.updateMatrixWorld(true);
  camera.updateProjectionMatrix();
  _mvp.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
  for (const p of FRAME_POINTS) {
    _v.copy(p).applyMatrix4(_mvp);
    if (Math.abs(_v.x) > 0.97 || Math.abs(_v.y) > 0.97 || _v.z > 1) return false;
  }
  return true;
}

/** Binary-search the camera distance that frames the whole stand at this aspect. */
function homeDistance() {
  let lo = 10, hi = 260;
  for (let i = 0; i < 30; i++) {
    const mid = (lo + hi) / 2;
    if (fitsAll(mid)) hi = mid; else lo = mid;
  }
  return hi;
}

function applyHomeCamera() {
  camera.position.copy(camDir(homeDistance())).add(TARGET_HOME);
  controls.target.copy(TARGET_HOME);
  controls.update();
}

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.copy(TARGET_HOME);
controls.enableDamping = true;
controls.dampingFactor = 0.075;
controls.rotateSpeed = 0.6;
controls.zoomSpeed = 0.85;
controls.panSpeed = 0.55;
controls.screenSpacePanning = false;
controls.minDistance = 10;
controls.maxDistance = 140;
controls.minPolarAngle = 0.14;
controls.maxPolarAngle = 1.38;
controls.update();

/* ------------------------------------------------------------ app state */

let running = true;
let view = 'orbit';
let world = null;
let userAdjustedView = false;

const ui = mountUI({
  onRun: (v) => { running = v; },
  onSpeed: (v) => { if (world) world.train.speedSetting = v; },
  onReset: () => resetAll(),
  onPreset: (name) => world && world.setPreset(name),
  onView: (name) => setView(name),
});

renderer.domElement.addEventListener('pointerdown', () => { userAdjustedView = true; });
renderer.domElement.addEventListener('wheel', () => { userAdjustedView = true; }, { passive: true });

function setView(name) {
  view = name;
  controls.enabled = name === 'orbit';
  camera.fov = name === 'follow' ? 36 : 26;
  camera.updateProjectionMatrix();
  if (name === 'orbit') {
    camera.position.copy(camDir(homeDistance())).add(TARGET_HOME);
    controls.target.copy(TARGET_HOME);
    controls.update();
  }
  ui.setView(name);
}

function resetAll() {
  world.train.reset();
  ui.setSpeed(1);
  world.setPreset('dusk');
  ui.setPreset('dusk');
  setView('orbit');
  userAdjustedView = false;
  running = true;
  ui.setRunning(true);
}

/* ------------------------------------------------------------ boot */

const clock = new THREE.Clock();
let elapsed = 0;
let frameEma = 16;

function boot() {
  ui.setBootStep('生成地形与水面');
  applyHomeCamera();
  requestAnimationFrame(() => {
    try {
      world = createWorld(scene, renderer);
      ui.setBootStep('布置小镇与列车');
      requestAnimationFrame(() => {
        world.train.reset();
        applyHomeCamera();
        render();
        ui.hideBoot();
        if (location.search.includes('debug')) console.log(layoutReport());
        clock.start();
        renderer.setAnimationLoop(loop);
      });
    } catch (err) {
      ui.setBootStep(`构建失败：${err?.message ?? err}`);
      throw err;
    }
  });
}

function loop() {
  const dt = Math.min(0.05, clock.getDelta());
  elapsed += dt;
  const simDt = running ? dt : 0;

  world.update(dt, simDt, elapsed);

  if (view === 'follow') followCamera(dt);
  else {
    controls.target.x = THREE.MathUtils.clamp(controls.target.x, -11, 11);
    controls.target.y = THREE.MathUtils.clamp(controls.target.y, -1, 4.5);
    controls.target.z = THREE.MathUtils.clamp(controls.target.z, -8.5, 8.5);
    controls.update();
  }
  render();
  ui.status(trainStatus(world.train, running));
  frameEma = frameEma * 0.93 + dt * 1000 * 0.07;
}

const _want = new THREE.Vector3();
const _look = new THREE.Vector3();

function followCamera(dt) {
  const train = world.train;
  const f = trackFrame(train.s ?? 0);
  _want.copy(f.pos)
    .addScaledVector(f.tan, -6.0)
    .addScaledVector(f.up, 3.6)
    .addScaledVector(f.right, 2.2);
  // stay above the roofline, or the chase cam ends up inside a building
  _want.y = Math.max(_want.y, 3.5);
  camera.position.lerp(_want, 1 - Math.exp(-2.4 * dt));
  _look.copy(f.pos).addScaledVector(f.up, 0.75);
  camera.lookAt(_look);
}

function render() {
  renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(window.innerWidth, window.innerHeight, false);
  // keep the whole沙盘 in view until the visitor takes over the camera
  if (view === 'orbit' && !userAdjustedView) applyHomeCamera();
});

// trade resolution for framerate rather than dropping frames
setInterval(() => {
  if (frameEma > 27 && renderer.getPixelRatio() > 1.2) renderer.setPixelRatio(1.2);
}, 3000);

boot();

/** handle for the console and the layout self-check */
window.__railway = {
  get world() { return world; },
  get running() { return running; },
  scene, camera, controls, renderer, applyHomeCamera,
};
