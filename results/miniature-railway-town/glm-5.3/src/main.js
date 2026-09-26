// 主程序：渲染器 / 相机 / 昼夜灯光 / UI 交互 / 主循环
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import './styles.css';
import { buildBoard } from './board.js';
import { buildTrack, buildTrackCurve } from './track.js';
import { buildTown } from './town.js';
import { TrainController } from './train.js';
import { lerp } from './util.js';

const container = document.getElementById('app');
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.12;
container.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(33, window.innerWidth / window.innerHeight, 0.5, 400);
const INIT_POS = new THREE.Vector3(33, 26, 40);
const INIT_TARGET = new THREE.Vector3(0, 0.4, 0);
camera.position.copy(INIT_POS);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.copy(INIT_TARGET);
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.minDistance = 14;
controls.maxDistance = 120;
controls.maxPolarAngle = Math.PI * 0.46;
controls.update();

// ---------- 灯光（默认：暖色傍晚阳光 + 投影） ----------
const sun = new THREE.DirectionalLight(0xffbe78, 3.2);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.left = -30;
sun.shadow.camera.right = 30;
sun.shadow.camera.top = 25;
sun.shadow.camera.bottom = -25;
sun.shadow.camera.near = 4;
sun.shadow.camera.far = 110;
sun.shadow.bias = -0.0004;
sun.shadow.normalBias = 0.05;
sun.position.set(-30, 22, 16);
scene.add(sun);
scene.add(sun.target);

const hemi = new THREE.HemisphereLight(0xffe6c4, 0x8a9a76, 0.55);
scene.add(hemi);

// ---------- 场景组装 ----------
const registry = { emissives: [], lights: [], opacities: [] };
const { river } = buildBoard(scene);
const curve = buildTrackCurve();
buildTrack(scene, curve, river);
buildTown(scene, river, registry);
const train = new TrainController(curve, scene, registry);

// ---------- 昼夜环境 ----------
const DAY = {
  sunColor: new THREE.Color(0xffbe78),
  sunInt: 3.2,
  sunPos: new THREE.Vector3(-30, 22, 16),
  hemiSky: new THREE.Color(0xffe6c4),
  hemiGround: new THREE.Color(0x8a9a76),
  hemiInt: 0.55,
  exposure: 1.12,
};
const NIGHT = {
  sunColor: new THREE.Color(0x8fa8e8),
  sunInt: 0.7,
  sunPos: new THREE.Vector3(20, 30, -14),
  hemiSky: new THREE.Color(0x2e3b5e),
  hemiGround: new THREE.Color(0x1c2433),
  hemiInt: 0.52,
  exposure: 1.0,
};

const app = { running: true, speedMult: 1, mode: 'day', blend: 0, blendTarget: 0 };

function applyEnv() {
  const n = app.blend;
  sun.color.copy(DAY.sunColor).lerp(NIGHT.sunColor, n);
  sun.intensity = lerp(DAY.sunInt, NIGHT.sunInt, n);
  sun.position.lerpVectors(DAY.sunPos, NIGHT.sunPos, n);
  hemi.color.copy(DAY.hemiSky).lerp(NIGHT.hemiSky, n);
  hemi.groundColor.copy(DAY.hemiGround).lerp(NIGHT.hemiGround, n);
  hemi.intensity = lerp(DAY.hemiInt, NIGHT.hemiInt, n);
  renderer.toneMappingExposure = lerp(DAY.exposure, NIGHT.exposure, n);
  for (const e of registry.emissives) e.mat.emissiveIntensity = lerp(e.day, e.night, n);
  for (const l of registry.lights) l.light.intensity = lerp(l.day, l.night, n);
  for (const o of registry.opacities) o.mat.opacity = lerp(o.day, o.night, n);
  document.body.classList.toggle('night', n > 0.5);
}
applyEnv();

// ---------- UI ----------
const btnRun = document.getElementById('btnRun');
const btnDay = document.getElementById('btnDay');
const btnReset = document.getElementById('btnReset');
const speedInput = document.getElementById('speed');
const speedVal = document.getElementById('speedVal');
const statusEl = document.getElementById('status');

function refreshRunBtn() {
  btnRun.textContent = app.running ? '暂停' : '继续';
}
function refreshDayBtn() {
  btnDay.textContent = app.mode === 'day' ? '切换夜晚' : '切换白天';
}
function setSpeed(v) {
  app.speedMult = v;
  speedInput.value = v;
  speedVal.textContent = v.toFixed(2) + '×';
}
function setMode(mode) {
  app.mode = mode;
  app.blendTarget = mode === 'night' ? 1 : 0;
  refreshDayBtn();
}

btnRun.addEventListener('click', () => {
  app.running = !app.running;
  refreshRunBtn();
});
btnDay.addEventListener('click', () => {
  setMode(app.mode === 'day' ? 'night' : 'day');
});
btnReset.addEventListener('click', doReset);
speedInput.addEventListener('input', () => {
  setSpeed(parseFloat(speedInput.value));
});

function doReset() {
  camera.position.copy(INIT_POS);
  controls.target.copy(INIT_TARGET);
  controls.update();
  app.running = true;
  refreshRunBtn();
  setSpeed(1);
  setMode('day');
  train.reset();
}

// 对外状态接口（供自动化验收）
window.__app = {
  getState: () => ({
    running: app.running,
    speed: app.speedMult,
    mode: app.mode,
    trainS: +train.s.toFixed(3),
    trainState: train.state,
    dwell: +train.dwell.toFixed(2),
    blend: +app.blend.toFixed(3),
    errors: window.__errs,
  }),
  pause: () => {
    app.running = false;
    refreshRunBtn();
  },
  resume: () => {
    app.running = true;
    refreshRunBtn();
  },
  reset: doReset,
  setSpeed,
  setMode,
  // 同步推进仿真（不渲染），供自动化验收：受 running/speed 约束，与真实循环同一套逻辑
  simulate: (seconds, dt = 1 / 60) => {
    const n = Math.max(1, Math.round(seconds / dt));
    for (let i = 0; i < n; i++) {
      advanceEnv(dt);
      train.update(dt, app.running, app.speedMult);
    }
    return window.__app.getState();
  },
};

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// ---------- 主循环 ----------
const clock = new THREE.Clock();
function advanceEnv(dt) {
  if (Math.abs(app.blend - app.blendTarget) > 0.0015) {
    app.blend += (app.blendTarget - app.blend) * Math.min(1, dt * 2.2);
    if (Math.abs(app.blend - app.blendTarget) < 0.002) app.blend = app.blendTarget;
    applyEnv();
  }
}
function tick() {
  const dt = Math.min(clock.getDelta(), 0.05);
  advanceEnv(dt);
  train.update(dt, app.running, app.speedMult);
  controls.update();
  renderer.render(scene, camera);

  let text;
  if (!app.running) text = '已暂停';
  else if (train.state === 'dwell') text = `停靠车站 ${train.dwell.toFixed(1)}s`;
  else text = '运行中';
  statusEl.textContent = `${text} · ${app.speedMult.toFixed(2)}×`;
}

// 首选 rAF；部分嵌入式浏览器只以极低频率（甚至仅启动瞬间）投递 rAF 帧，
// 统计前 2 秒帧数，不足 40 帧则降级为定时器驱动，保证列车与昼夜过渡持续流畅。
let rafFrames = 0;
let degraded = false;
renderer.setAnimationLoop(() => {
  rafFrames++;
  tick();
});
setTimeout(() => {
  if (!degraded && rafFrames < 40) {
    degraded = true;
    renderer.setAnimationLoop(null);
    setInterval(tick, 1000 / 60);
  }
}, 2000);
