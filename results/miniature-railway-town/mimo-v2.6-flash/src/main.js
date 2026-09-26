/**
 * 微缩铁路小镇 —— 主装配与渲染循环。
 * 打开页面即见完整沙盘与运行中的列车（傍晚暖光默认档）。
 */
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import { makeMaterials } from './materials.js';
import { buildBase } from './world/base.js';
import { buildTrack, buildCrossings, buildSignals, buildPlatform } from './world/track.js';
import { buildTown } from './world/town.js';
import { buildNature } from './world/nature.js';
import { createTrain } from './world/train.js';
import { createLighting } from './lighting.js';
import { initUI } from './ui.js';
import { CROSSINGS, ROADS, SIGNALS, PLATFORM, LAMPS } from './layout.js';

/* ---------------- 渲染器 / 相机 ---------------- */

const canvas = document.getElementById('scene');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.02;
renderer.outputColorSpace = THREE.SRGBColorSpace;

const scene = new THREE.Scene();

/** 初始机位（近似等距，可看到整块沙盘） */
const INITIAL_CAMERA = new THREE.Vector3(38, 38, 42);
const INITIAL_TARGET = new THREE.Vector3(0, 0, 0);

const camera = new THREE.PerspectiveCamera(42, window.innerWidth / window.innerHeight, 0.5, 600);
camera.position.copy(INITIAL_CAMERA);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.minDistance = 22;
controls.maxDistance = 150;
controls.minPolarAngle = 0.15;
controls.maxPolarAngle = 1.45;
controls.target.copy(INITIAL_TARGET);
controls.update();

/* ---------------- 场景装配 ---------------- */

const mats = makeMaterials();
const lighting = createLighting(scene);

const base = buildBase(mats);
scene.add(base.group);

const track = buildTrack(mats);
scene.add(track.group);

scene.add(buildCrossings(mats, CROSSINGS, ROADS).group);
scene.add(buildSignals(mats, SIGNALS).group);
scene.add(buildPlatform(mats, PLATFORM).group);

const town = buildTown(mats, LAMPS);
scene.add(town.group);

const nature = buildNature(mats);
scene.add(nature.group);

const train = createTrain(mats, track.curve);
scene.add(train.group);

/* ---------------- 交互 ---------------- */

const state = {
  running: true,
  speedMul: 1,
};

const ui = initUI({
  onToggleRun: (running) => {
    state.running = running;
  },
  onSpeed: (v) => {
    state.speedMul = v;
    train.state.speedMul = v;
  },
  onReset: () => {
    camera.position.copy(INITIAL_CAMERA);
    controls.target.copy(INITIAL_TARGET);
    controls.update();
    state.running = true;
    state.speedMul = 1;
    train.reset();
    ui.setRunningUI(true);
  },
  onCycleTime: () => lighting.cycle(),
  getTimeLabel: (mode) => ({ label: lighting.presets[mode].label, clock: lighting.presets[mode].clock }),
});

// 初始状态
train.state.speedMul = 1;
ui.setRunningUI(true);
{
  const p = lighting.presets[lighting.mode];
  document.getElementById('btn-time').textContent = `🌆 ${p.label}`;
  document.getElementById('status-time').textContent = `${p.label} ${p.clock}`;
}

/* ---------------- 主循环 ---------------- */

const clock = new THREE.Clock();
let firstFrame = true;
let statusAcc = 0;

function animate() {
  requestAnimationFrame(animate);
  const dt = Math.min(clock.getDelta(), 0.05);

  if (state.running) {
    train.update(dt * state.speedMul);
  }

  const exposure = lighting.update(dt);
  renderer.toneMappingExposure = exposure;

  // 水面微动
  const t = clock.elapsedTime;
  mats.tex.water.offset.y = -t * 0.012;
  mats.tex.water.offset.x = Math.sin(t * 0.18) * 0.01;

  controls.update();
  renderer.render(scene, camera);

  // 状态栏（4Hz 刷新）
  statusAcc += dt;
  if (statusAcc > 0.25) {
    statusAcc = 0;
    const s = train.status();
    if (state.running) ui.setStatus(s.text, s.mode === 'dwell' ? 'stopped' : '');
    const info = renderer.info.render;
    window.__diorama = {
      calls: info.calls,
      triangles: info.triangles,
      mode: lighting.mode,
      running: state.running,
      speed: state.speedMul,
    };
  }

  if (firstFrame) {
    firstFrame = false;
    const loading = document.getElementById('loading');
    loading.classList.add('hidden');
    setTimeout(() => loading.remove(), 700);
  }
}

animate();

/* ---------------- 自适应 ---------------- */

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// 便于自动化验收：暴露必要句柄
window.__scene = { scene, camera, renderer, controls, train, lighting, state, mats, curve: track.curve, THREE };
