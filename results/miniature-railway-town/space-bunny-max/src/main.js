import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import './styles.css';
import { makeRng } from './core/rng.js';
import { CAVITY_X, CAVITY_Z, GROUND } from './core/config.js';
import { buildPath } from './world/path.js';
import { buildTerrain } from './world/terrain.js';
import { buildTrack } from './world/track.js';
import { buildTown } from './world/town.js';
import { buildScatter } from './world/scatter.js';
import { buildTrain } from './world/train.js';
import { buildLighting } from './world/lighting.js';

const rng = makeRng(20260926);

/* ══════════════ 渲染器 ══════════════ */
const canvas = document.getElementById('view');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.NeutralToneMapping;
renderer.toneMappingExposure = 1.0;
renderer.outputColorSpace = THREE.SRGBColorSpace;

const scene = new THREE.Scene();

/* ══════════════ 等距相机 ══════════════ */
const CAM_TARGET = new THREE.Vector3(0, GROUND + 0.4, 0);
const AZ = THREE.MathUtils.degToRad(-34);
const EL = THREE.MathUtils.degToRad(35);
const CAM_DIST = 80;
const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 1, 420);
camera.position.set(
  CAM_TARGET.x + CAM_DIST * Math.cos(EL) * Math.sin(AZ),
  CAM_TARGET.y + CAM_DIST * Math.sin(EL),
  CAM_TARGET.z + CAM_DIST * Math.cos(EL) * Math.cos(AZ)
);
camera.lookAt(CAM_TARGET);

function fitFrustum() {
  const aspect = window.innerWidth / window.innerHeight;
  const hh = Math.max(15.4, 24.6 / aspect);
  camera.top = hh;
  camera.bottom = -hh;
  camera.left = -hh * aspect;
  camera.right = hh * aspect;
  camera.updateProjectionMatrix();
}
fitFrustum();

const controls = new OrbitControls(camera, canvas);
controls.target.copy(CAM_TARGET);
controls.enableDamping = true;
controls.dampingFactor = 0.075;
controls.rotateSpeed = 0.62;
controls.zoomSpeed = 0.85;
controls.panSpeed = 0.6;
controls.screenSpacePanning = false;
controls.minPolarAngle = 0.2;
controls.maxPolarAngle = 1.09;
controls.minZoom = 0.5;
controls.maxZoom = 3.4;
controls.update();
controls.saveState();

/* ══════════════ 场景内容 ══════════════ */
const path = buildPath(2600);
const terrain = buildTerrain(rng);
scene.add(terrain.group);

const town = buildTown(rng);
scene.add(town.group);

const track = buildTrack(path, rng);
scene.add(track.group);

const scatter = buildScatter(rng, path, town.blockers);
scene.add(scatter.group);

const train = buildTrain(path, rng);
scene.add(train.group);

const lighting = buildLighting(scene, renderer);
const lightTargets = {
  glassMat: town.glassMat,
  lampMat: scatter.glowMat,
  spillMat: scatter.spillMat,
  trainGlass: train.glassMat,
  waterMat: terrain.waterMat,
};

/* ══════════════ UI ══════════════ */
const el = {
  run: document.getElementById('btn-run'),
  runIco: document.getElementById('run-ico'),
  runLabel: document.getElementById('run-label'),
  reset: document.getElementById('btn-reset'),
  speed: document.getElementById('speed'),
  speedVal: document.getElementById('speed-val'),
  seg: document.getElementById('seg-time'),
  modeVal: document.getElementById('mode-val'),
  readout: document.getElementById('readout'),
  fps: document.getElementById('stat-fps'),
  loader: document.getElementById('loader'),
};
const MODE_LABEL = { dusk: '傍晚', day: '白天', night: '夜晚' };
let mode = 'dusk';

function syncRun() {
  const r = train.state.running;
  el.runLabel.textContent = r ? '暂停' : '运行';
  el.runIco.textContent = r ? '❚❚' : '▶';
  el.run.classList.toggle('btn--primary', true);
}
function setMode(m, instant = false) {
  mode = m;
  lighting.setMode(m, instant);
  el.modeVal.textContent = MODE_LABEL[m];
  for (const b of el.seg.querySelectorAll('.seg__btn')) b.classList.toggle('is-on', b.dataset.mode === m);
}
el.run.addEventListener('click', () => {
  train.state.running = !train.state.running;
  syncRun();
});
el.speed.addEventListener('input', () => {
  train.state.speed = parseFloat(el.speed.value);
  el.speedVal.textContent = `${train.state.speed.toFixed(2)}×`;
});
el.reset.addEventListener('click', doReset);
for (const b of el.seg.querySelectorAll('.seg__btn')) {
  b.addEventListener('click', () => setMode(b.dataset.mode));
}
window.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
    e.preventDefault();
    train.state.running = !train.state.running;
    syncRun();
  } else if (e.key === 'r' || e.key === 'R') {
    doReset();
  } else if (e.key === 'n' || e.key === 'N') {
    setMode(mode === 'day' ? 'night' : mode === 'night' ? 'day' : 'night');
  }
});

function defaultView() {
  camera.position.set(
    CAM_TARGET.x + CAM_DIST * Math.cos(EL) * Math.sin(AZ),
    CAM_TARGET.y + CAM_DIST * Math.sin(EL),
    CAM_TARGET.z + CAM_DIST * Math.cos(EL) * Math.cos(AZ)
  );
  camera.zoom = 1;
  camera.updateProjectionMatrix();
  controls.target.copy(CAM_TARGET);
  controls.update();
}

function doReset() {
  controls.reset();
  camera.zoom = 1;
  camera.updateProjectionMatrix();
  train.reset();
  el.speed.value = '1';
  el.speedVal.textContent = '1.00×';
  syncRun();
  setMode('dusk');
}
syncRun();
setMode('dusk', true);

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  fitFrustum();
});

/* ══════════════ 主循环 ══════════════ */
const clock = new THREE.Clock();
let frames = 0;
let fpsT = 0;
let fps = 0;
let firstFrame = true;

function tick() {
  const dt = Math.min(0.05, clock.getDelta());
  train.update(dt);
  lighting.update(dt, lightTargets);
  // 水面波纹缓慢流动
  const nm = terrain.waterNormalTex;
  nm.offset.x = (nm.offset.x + dt * 0.012) % 1;
  nm.offset.y = (nm.offset.y + dt * 0.007) % 1;
  controls.update();
  // 限制平移范围，避免沙盘被推出视野
  controls.target.x = THREE.MathUtils.clamp(controls.target.x, -CAVITY_X * 0.5, CAVITY_X * 0.5);
  controls.target.z = THREE.MathUtils.clamp(controls.target.z, -CAVITY_Z * 0.5, CAVITY_Z * 0.5);
  controls.target.y = THREE.MathUtils.clamp(controls.target.y, 0, 4);

  renderer.render(scene, camera);

  frames++;
  fpsT += dt;
  if (fpsT >= 0.5) {
    fps = Math.round(frames / fpsT);
    frames = 0;
    fpsT = 0;
    el.fps.textContent = fps;
  }
  updateReadout();
  if (firstFrame) {
    firstFrame = false;
    setTimeout(() => el.loader.classList.add('is-hidden'), 120);
  }
  requestAnimationFrame(tick);
}

function updateReadout() {
  const st = train.state;
  const lap = train.BASE_SPEED * st.speed;
  const eta = (path.length / lap).toFixed(0);
  const stTxt =
    st.phase === 'dwell'
      ? `<span class="st-hold">停站中 ${st.dwell.toFixed(1)}s</span>`
      : st.running
        ? '<span class="st-run">运行中</span>'
        : '已暂停';
  el.readout.innerHTML = `状态 <b>${stTxt}</b><br />环线长 <b>${path.length.toFixed(1)}</b> 单位 · 1× 约 <b>${eta}</b> 秒/圈`;
}
renderer.compile(scene, camera);
tick();

/* ══════════════ 供自动化验证使用的钩子 ══════════════ */
window.__DIORAMA = {
  renderer,
  scene,
  camera,
  controls,
  train,
  lighting,
  path,
  mode: () => mode,
  fps: () => fps,
  info: () => ({
    calls: renderer.info.render.calls,
    triangles: renderer.info.render.triangles,
    programs: renderer.info.programs.length,
    dpr: renderer.getPixelRatio(),
    canvas: [renderer.domElement.width, renderer.domElement.height],
    trackLength: path.length,
    mode,
  }),
  locoPos: () => {
    const v = train.group.children[0];
    return [v.position.x, v.position.y, v.position.z, v.rotation.y];
  },
  carPos: () =>
    train.group.children.slice(1).map((v) => [v.position.x, v.position.y, v.position.z, v.rotation.y]),
  consistS: () => train.offsets.map((o) => train.state.s - o),
  consistYaw: () => train.group.children.map((v) => v.rotation.y),
  setRun: (v) => {
    train.state.running = v;
    syncRun();
  },
  setSpeed: (v) => {
    train.state.speed = v;
    el.speed.value = String(v);
    el.speedVal.textContent = `${v.toFixed(2)}×`;
  },
  setMode: (m) => setMode(m, true),
  reset: doReset,
  defaultView,
  project: (x, y, z) => {
    const v = new THREE.Vector3(x, y, z).project(camera);
    return [v.x * 0.5 + 0.5, -v.y * 0.5 + 0.5];
  },
};
