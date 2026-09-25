/**
 * main.js — 场景装配、光影、时段/机位预设、交互与渲染循环
 */

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import { VoxelBuilder } from './voxel.js';
import { buildGround, buildPaving, buildWalls, buildScreenWall, buildProps } from './site.js';
import { buildGate, buildMainHall, buildSideHall, buildRearHall } from './buildings.js';
import { buildTower, buildPagoda } from './towers.js';

/* =========================================================
   1. 时段预设（晨 / 午 / 昏）
   ========================================================= */

const PRESETS = {
  dawn: {
    sun: { color: 0xffcf9c, intensity: 3.5, pos: [172, 128, 176] },
    hemi: { sky: 0x9cc0ec, ground: 0x6b5843, intensity: 0.78 },
    fill: { color: 0x9ec0ff, intensity: 0.38, pos: [-140, 70, -150] },
    sky: [[0, '#2f3a4d'], [0.42, '#8d7a72'], [0.48, '#e8b98a'], [0.52, '#ffd9a8'], [0.60, '#8fb4dd'], [0.78, '#4a7fc0'], [1, '#2f5fa8']],
    fog: { color: 0xe6d6bb, near: 380, far: 1250 },
    exposure: 1.02,
    lamps: 0.18
  },
  noon: {
    sun: { color: 0xfff6e6, intensity: 3.6, pos: [90, 215, 130] },
    hemi: { sky: 0xb0d2f2, ground: 0x7a6a50, intensity: 0.72 },
    fill: { color: 0xa8c6ff, intensity: 0.26, pos: [-120, 80, -130] },
    sky: [[0, '#6a7a88'], [0.47, '#d2e2ef'], [0.53, '#a9cbe9'], [1, '#3b78c4']],
    fog: { color: 0xd8e8f6, near: 420, far: 1300 },
    exposure: 0.98,
    lamps: 0.05
  },
  dusk: {
    sun: { color: 0xff9a45, intensity: 3.2, pos: [-196, 74, 112] },
    hemi: { sky: 0x8093c8, ground: 0x4a3a2e, intensity: 0.52 },
    fill: { color: 0x6f8bd8, intensity: 0.34, pos: [150, 60, -120] },
    sky: [[0, '#241d33'], [0.43, '#8a5750'], [0.5, '#ff9a52'], [0.6, '#c9624f'], [0.78, '#4c3f72'], [1, '#1d1b30']],
    fog: { color: 0x7a5a55, near: 230, far: 900 },
    exposure: 1.06,
    lamps: 1.0
  }
};

const VIEWS = {
  panorama: { pos: [82, 88, 134], target: [-6, 15, -14] },
  axis: { pos: [4, 58, 150], target: [0, 20, -26] },
  top: { pos: [6, 296, 26], target: [0, 0, -12] },
  hall: { pos: [58, 44, 58], target: [0, 18, -6] },
  pagoda: { pos: [34, 28, -20], target: [0, 28, -83] }
};

/* URL 参数：?time=dawn|noon|dusk  &view=panorama|axis|top|hall|pagoda  &spin=0  &intro=0 */
const Q = new URLSearchParams(location.search);
const OPT = {
  time: PRESETS[Q.get('time')] ? Q.get('time') : 'dawn',
  view: VIEWS[Q.get('view')] ? Q.get('view') : 'panorama',
  spin: Q.get('spin') !== '0',
  intro: Q.get('intro') !== '0',
  still: Q.get('still') === '1',   // 截图 / 缩略图模式：渲染数帧后停住，不空转
  shot: Q.get('shot') === '1'      // 额外把画布导出为 dataURL（供自动化验收）
};

/* =========================================================
   2. 基础环境
   ========================================================= */

const app = document.getElementById('app');
const loader = document.getElementById('loader');
const loaderMsg = document.getElementById('loader-msg');
const sVox = document.getElementById('s-vox');
const sFps = document.getElementById('s-fps');
const sMs = document.getElementById('s-ms');

const renderer = new THREE.WebGLRenderer({
  antialias: true,
  powerPreference: 'high-performance',
  preserveDrawingBuffer: OPT.still
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
app.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(46, window.innerWidth / window.innerHeight, 1, 2400);
camera.position.set(300, 260, 400);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.055;
controls.rotateSpeed = 0.55;
controls.zoomSpeed = 0.85;
controls.panSpeed = 0.6;
controls.minDistance = 55;
controls.maxDistance = 620;
controls.maxPolarAngle = Math.PI * 0.478;
controls.autoRotate = true;
controls.autoRotateSpeed = 0.26;
controls.target.set(0, 18, -20);

/* ---- 天空 ---- */
const skyCanvas = document.createElement('canvas');
skyCanvas.width = 8; skyCanvas.height = 512;
const skyCtx = skyCanvas.getContext('2d');
const skyTex = new THREE.CanvasTexture(skyCanvas);
skyTex.mapping = THREE.EquirectangularReflectionMapping;
skyTex.colorSpace = THREE.SRGBColorSpace;
scene.background = skyTex;

function paintSky(stops) {
  const g = skyCtx.createLinearGradient(0, skyCanvas.height, 0, 0);
  for (const [p, c] of stops) g.addColorStop(p, c);
  skyCtx.fillStyle = g;
  skyCtx.fillRect(0, 0, skyCanvas.width, skyCanvas.height);
  skyTex.needsUpdate = true;
}

/* ---- 光 ---- */
const hemi = new THREE.HemisphereLight(0xa8c8ee, 0x6f5c44, 0.9);
scene.add(hemi);

const sun = new THREE.DirectionalLight(0xffd0a0, 3.1);
sun.castShadow = true;
sun.shadow.mapSize.set(4096, 4096);
const sc = sun.shadow.camera;
sc.left = -175; sc.right = 175; sc.top = 175; sc.bottom = -175;
sc.near = 1; sc.far = 900;
sun.shadow.bias = -0.0006;
sun.shadow.normalBias = 0.09;
scene.add(sun);
scene.add(sun.target);

const fill = new THREE.DirectionalLight(0x9ec0ff, 0.45);
scene.add(fill);
scene.add(fill.target);

/* ---- 灯笼点光源 ---- */
const LAMP_POS = [
  [0, 13, 74], [0, 22, 0], [-9, 9, 17], [9, 9, 17],
  [0, 11, 40], [0, 24, -72], [-44, 12, 42], [44, 12, 42]
];
const lamps = LAMP_POS.map(([x, y, z]) => {
  const l = new THREE.PointLight(0xffb066, 0, 46, 2);
  l.position.set(x, y, z);
  scene.add(l);
  return l;
});

/* =========================================================
   3. 生成体素世界
   ========================================================= */

const b = new VoxelBuilder();
const heights = {};
let built = null;

/* 分帧执行：rAF 优先，超时兜底（无头 / 后台标签页中 rAF 可能被节流） */
const frame = () => new Promise((resolve) => {
  let done = false;
  const fin = () => { if (!done) { done = true; resolve(); } };
  requestAnimationFrame(() => requestAnimationFrame(fin));
  setTimeout(fin, 50);
});

function fatal(err) {
  const msg = (err && (err.message || err.reason || err)) + '';
  loaderMsg.textContent = '✕ ' + msg;
  loaderMsg.style.color = '#ff7a6b';
  console.error(err);
}
window.addEventListener('error', (e) => fatal(e.error || e.message));
window.addEventListener('unhandledrejection', (e) => fatal(e));

async function stage(label, fn) {
  loaderMsg.textContent = label;
  await frame();
  fn();
}

async function buildWorld() {
  const t0 = performance.now();
  await stage('地形塑造 · terrain', () => buildGround(b));
  await stage('铺装与围墙 · paving', () => { buildPaving(b); buildWalls(b); buildScreenWall(b); });
  await stage('营建主殿 · main hall', () => { heights.main = buildMainHall(b); });
  await stage('营建山门与配殿 · gate & wings', () => {
    heights.gate = buildGate(b);
    heights.west = buildSideHall(b, -1);
    heights.east = buildSideHall(b, 1);
    heights.rear = buildRearHall(b);
  });
  await stage('营建钟鼓楼与宝塔 · towers', () => {
    heights.bell = buildTower(b, -1, 'bell');
    heights.drum = buildTower(b, 1, 'drum');
    heights.pagoda = buildPagoda(b);
  });
  await stage('植树立灯 · planting', () => buildProps(b));
  await stage('体素化与法线烘焙 · meshing', () => {
    built = b.build({ jitter: 0.055, ao: 0.055, aoCap: 0.17 });
    if (built.solid) scene.add(built.solid);
    if (built.glow) scene.add(built.glow);
  });
  const dt = performance.now() - t0;
  sVox.textContent = built.drawn.toLocaleString('en-US');
  sMs.textContent = dt.toFixed(0);
  console.log(
    `[voxel] authored=${built.authored}  culled=${built.hiddenCulled}  drawn=${built.drawn}  build=${dt.toFixed(0)}ms`
  );
}

/* =========================================================
   4. 时段 / 机位
   ========================================================= */

let current = 'dawn';

function applyPreset(name) {
  const p = PRESETS[name];
  current = name;

  sun.color.setHex(p.sun.color);
  sun.intensity = p.sun.intensity;
  sun.position.set(...p.sun.pos);
  sun.target.position.set(0, 8, -20);
  sun.target.updateMatrixWorld();

  hemi.color.setHex(p.hemi.sky);
  hemi.groundColor.setHex(p.hemi.ground);
  hemi.intensity = p.hemi.intensity;

  fill.color.setHex(p.fill.color);
  fill.intensity = p.fill.intensity;
  fill.position.set(...p.fill.pos);
  fill.target.position.set(0, 8, -20);
  fill.target.updateMatrixWorld();

  for (const l of lamps) l.intensity = 70 * p.lamps;

  paintSky(p.sky);
  scene.fog = new THREE.Fog(new THREE.Color(p.fog.color), p.fog.near, p.fog.far);
  renderer.toneMappingExposure = p.exposure;

  renderer.shadowMap.needsUpdate = true;

  document.querySelectorAll('#row-time button').forEach((btn) => {
    btn.classList.toggle('on', btn.dataset.time === name);
  });
}

/* ---- 机位推轨 ---- */

const tween = { active: false, t: 0, dur: 1.35, from: new THREE.Vector3(), to: new THREE.Vector3(), tf: new THREE.Vector3(), tt: new THREE.Vector3() };

function flyTo(view, dur = 1.35) {
  const v = VIEWS[view];
  tween.from.copy(camera.position);
  tween.to.set(...v.pos);
  tween.tf.copy(controls.target);
  tween.tt.set(...v.target);
  tween.t = 0; tween.dur = dur; tween.active = true;
  controls.autoRotate = false;
  document.querySelectorAll('#row-view button').forEach((btn) => {
    btn.classList.toggle('on', btn.dataset.view === view);
  });
}

const easeInOut = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);

/* =========================================================
   5. HUD
   ========================================================= */

document.querySelectorAll('#row-time button').forEach((btn) => {
  btn.addEventListener('click', () => applyPreset(btn.dataset.time));
});
document.querySelectorAll('#row-view button').forEach((btn) => {
  btn.addEventListener('click', () => flyTo(btn.dataset.view));
});
const btnSpin = document.getElementById('btn-spin');
btnSpin.addEventListener('click', () => {
  controls.autoRotate = !controls.autoRotate;
  btnSpin.classList.toggle('on', controls.autoRotate);
});

/* 用户操作时暂停自动旋转，静止 6s 后恢复 */
let idleTimer = null;
controls.addEventListener('start', () => {
  const wasOn = btnSpin.classList.contains('on');
  controls.autoRotate = false;
  clearTimeout(idleTimer);
  idleTimer = setTimeout(() => {
    if (wasOn) { controls.autoRotate = true; }
  }, 6000);
});

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

/* =========================================================
   6. 渲染循环 + 自适应性能
   ========================================================= */

let frames = 0, fpsT = performance.now(), fps = 60, lastFps = 0;
let quality = 2;          // 2=full, 1=降像素比, 0=关阴影
let stillFrames = 0;

function adapt() {
  if (fps >= 34 || quality <= 0) return;
  quality--;
  if (quality === 1) {
    renderer.setPixelRatio(1);
  } else {
    renderer.shadowMap.enabled = false;
    scene.traverse((o) => { if (o.isMesh) o.material.needsUpdate = true; });
  }
  console.log(`[perf] fps=${fps.toFixed(0)} → quality level ${quality}`);
}

function tick() {
  const now = performance.now();
  frames++;
  if (now - fpsT >= 500) {
    fps = (frames * 1000) / (now - fpsT);
    frames = 0; fpsT = now;
    sFps.textContent = fps.toFixed(0);
    if (fps < 34 && Math.abs(fps - lastFps) > 1) { adapt(); lastFps = fps; }
  }

  if (tween.active) {
    tween.t += 1 / 60;
    const k = easeInOut(Math.min(tween.t / tween.dur, 1));
    camera.position.lerpVectors(tween.from, tween.to, k);
    controls.target.lerpVectors(tween.tf, tween.tt, k);
    if (tween.t >= tween.dur) tween.active = false;
  }

  controls.update();
  renderer.render(scene, camera);

  if (OPT.still && ++stillFrames > 4) {
    renderer.setAnimationLoop(null);
    const info = renderer.info.render;
    document.title = `calls=${info.calls} tris=${info.triangles} cam=${camera.position.toArray().map((v) => v | 0).join(',')}`;
    document.body.dataset.diag = document.title;
    document.body.dataset.height = heights.main ? heights.main.top : -1;
    if (OPT.shot) {
      const el = document.createElement('div');
      el.id = 'shot-data';
      el.textContent = renderer.domElement.toDataURL('image/png');
      document.body.appendChild(el);
    }
  }
}

/* =========================================================
   7. 启动
   ========================================================= */

(async function start() {
  await buildWorld();
  applyPreset(OPT.time);

  const v = VIEWS[OPT.view];
  if (OPT.intro) {
    camera.position.set(132, 122, 172);
    controls.target.set(...v.target);
    controls.autoRotate = OPT.spin;
    flyTo(OPT.view, 3.4);
    if (!OPT.spin) { controls.autoRotate = false; btnSpin.classList.remove('on'); }
  } else {
    camera.position.set(...v.pos);
    controls.target.set(...v.target);
    controls.autoRotate = false;
    btnSpin.classList.toggle('on', OPT.spin);
    document.querySelectorAll('#row-view button').forEach((b2) => {
      b2.classList.toggle('on', b2.dataset.view === OPT.view);
    });
  }

  renderer.compile(scene, camera);
  renderer.setAnimationLoop(tick);
  renderer.render(scene, camera);
  renderer.shadowMap.autoUpdate = false;      // 静态场景：阴影贴图只烘一次

  await frame();
  loader.classList.add('hide');

  if (OPT.intro) {
    setTimeout(() => { if (OPT.spin && !tween.active) controls.autoRotate = true; }, 3600);
  } else if (OPT.spin) {
    controls.autoRotate = true;
  }
})();

window.__scene = { scene, camera, renderer, controls, built, heights, applyPreset, flyTo };
