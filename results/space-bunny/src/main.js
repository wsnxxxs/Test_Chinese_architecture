import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { VoxelWorld, createVoxelMaterials } from './voxel.js';
import { buildSite } from './site.js';
import { halos } from './buildings.js';
import { createEnvironment } from './environment.js';

/* ============================================================
   云麓宫 · 体素汉风建筑群
   打开即进入场景：自动巡游镜头 + 三套时辰光照
   ============================================================ */

const VIEWS = {
  overview: { pos: [72, 74, 152], target: [0, 14, -16] },
  gate: { pos: [14, 18, 88], target: [0, 15, 34] },
  hall: { pos: [18, 22, 14], target: [0, 17, -30] },
  aerial: { pos: [0, 176, 62], target: [0, 0, -14] }
};

const container = document.getElementById('app');
const loading = document.getElementById('loading');
const statFps = document.getElementById('stat-fps');
const statVoxel = document.getElementById('stat-voxel');
const statDraw = document.getElementById('stat-draw');

// ---------------- 渲染器 ----------------
let renderer;
try {
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    powerPreference: 'high-performance',
    stencil: false
  });
} catch (err) {
  loading.innerHTML = '<div class="loading-inner"><div class="loading-title">无法启动</div><div class="loading-sub">当前浏览器不支持 WebGL，请更换浏览器或开启硬件加速</div></div>';
  throw err;
}
const params = new URLSearchParams(location.search);
const dprCap = parseFloat(params.get('dpr') || '2');
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, dprCap));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
renderer.outputColorSpace = THREE.SRGBColorSpace;
container.appendChild(renderer.domElement);

// ---------------- 场景 / 相机 ----------------
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(46, window.innerWidth / window.innerHeight, 0.5, 1400);

const startView = VIEWS[params.get('view')] ? params.get('view') : 'overview';
camera.position.fromArray(VIEWS[startView].pos);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.fromArray(VIEWS[startView].target);
controls.enableDamping = true;
controls.dampingFactor = 0.055;
controls.minDistance = 14;
controls.maxDistance = 260;
controls.minPolarAngle = 0.12;
controls.maxPolarAngle = Math.PI / 2 - 0.035;
controls.autoRotate = params.get('paused') !== '1';
controls.autoRotateSpeed = 0.42;
controls.update();

// ---------------- 构建世界 ----------------
const world = new VoxelWorld();
const voxelMaterials = createVoxelMaterials();
let env = null;
let voxelCount = 0;

function build() {
  buildSite(world, scene);
  const result = world.build(scene, voxelMaterials);
  voxelCount = result.count;
  statVoxel.textContent = `体素 ${voxelCount.toLocaleString('en-US')}`;
  env = createEnvironment(scene, renderer, voxelMaterials, halos);
  if (params.get('time') && env.presets[params.get('time')]) {
    env.setPreset(params.get('time'), true);
  }
  markActive('time', env.preset);
}

// 让载入页先绘制出来，再执行同步建城
requestAnimationFrame(() => {
  setTimeout(() => {
    try {
      build();
    } catch (err) {
      console.error(err);
      loading.innerHTML = `<div class="loading-inner"><div class="loading-title">构建失败</div><div class="loading-sub">${err.message}</div></div>`;
      return;
    }
    renderer.render(scene, camera);
    loading.classList.add('hidden');
    setTimeout(() => loading.remove(), 900);
    clock.getDelta();
    renderer.setAnimationLoop(tick);
  }, 40);
});

// ---------------- 镜头预设 ----------------
let tween = null;
function gotoView(name) {
  const v = VIEWS[name];
  if (!v) return;
  markActive('view', name);
  tween = {
    t: 0,
    dur: 1.7,
    fromPos: camera.position.clone(),
    toPos: new THREE.Vector3().fromArray(v.pos),
    fromTarget: controls.target.clone(),
    toTarget: new THREE.Vector3().fromArray(v.target)
  };
  controls.autoRotate = false;
  resumeTimer = 0;
}

// ---------------- 界面 ----------------
function markActive(group, value) {
  document.querySelectorAll(`#${group}-row .btn`).forEach((b) => {
    b.classList.toggle('active', b.dataset[group] === value);
  });
}

document.querySelectorAll('#time-row .btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    env?.setPreset(btn.dataset.time);
    markActive('time', btn.dataset.time);
  });
});
document.querySelectorAll('#view-row .btn').forEach((btn) => {
  btn.addEventListener('click', () => gotoView(btn.dataset.view));
});
window.addEventListener('keydown', (e) => {
  const map = { 1: 'morning', 2: 'dusk', 3: 'night' };
  if (map[e.key]) {
    env?.setPreset(map[e.key]);
    markActive('time', map[e.key]);
  }
});
markActive('view', startView);
markActive('time', params.get('time') || 'morning');

// 用户操作后暂停自动巡游，静置 12 秒恢复
let resumeTimer = 0;
let userActive = false;
controls.addEventListener('start', () => {
  userActive = true;
  controls.autoRotate = false;
});
controls.addEventListener('end', () => {
  userActive = false;
  resumeTimer = 0;
});

// ---------------- 主循环 ----------------
const clock = new THREE.Clock();
let frames = 0;
let fpsTimer = 0;
let fps = 0;

function tick() {
  const dt = Math.min(clock.getDelta(), 0.1);

  if (tween) {
    tween.t = Math.min(1, tween.t + dt / tween.dur);
    const e = tween.t < 0.5 ? 2 * tween.t * tween.t : 1 - Math.pow(-2 * tween.t + 2, 2) / 2;
    camera.position.lerpVectors(tween.fromPos, tween.toPos, e);
    controls.target.lerpVectors(tween.fromTarget, tween.toTarget, e);
    if (tween.t >= 1) tween = null;
  } else {
    if (!userActive && !controls.autoRotate) {
      resumeTimer += dt;
      if (resumeTimer > 12 && params.get('paused') !== '1') controls.autoRotate = true;
    }
  }

  controls.update();
  env?.update(dt);
  renderer.render(scene, camera);

  frames++;
  fpsTimer += dt;
  if (fpsTimer >= 0.5) {
    fps = Math.round(frames / fpsTimer);
    statFps.textContent = `${fps} FPS`;
    statDraw.textContent = `Draw ${renderer.info.render.calls}`;
    frames = 0;
    fpsTimer = 0;
  }
}

// ---------------- 自适应 ----------------
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, dprCap));
});

// 便于自动化验收：暴露少量运行时信息
window.__YUNLU__ = {
  get fps() { return fps; },
  get voxels() { return voxelCount; },
  get drawCalls() { return renderer.info.render.calls; },
  get triangles() { return renderer.info.render.triangles; },
  get preset() { return env?.preset; },
  get camera() { return camera; },
  renderer,
  scene
};
