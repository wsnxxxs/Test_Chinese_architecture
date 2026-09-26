import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { BOARD, FRAME, track, footprints, riverInfo, BANK_W } from './world.js';
import { groundTexture } from './textures.js';
import { buildBase, buildTerrain } from './terrain.js';
import { buildTrack } from './track.js';
import { createCtx } from './buildings.js';
import { buildTown } from './town.js';
import * as SC from './scenery.js';
import { createTrain } from './train.js';
import { createLighting } from './lighting.js';
import { mergeStatic } from './optimize.js';

/* ------------------------------ 渲染器/场景 ------------------------------ */
const canvas = document.getElementById('scene');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(28, window.innerWidth / window.innerHeight, 1, 900);

/* --------------------------------- 搭建 --------------------------------- */
buildBase(scene);
const ctx = createCtx(12);
buildTown(scene, ctx);
SC.buildTrees(scene);
const ground = groundTexture();                      // 依赖建筑占地，需在建筑之后
const terrain = buildTerrain(scene, ground);
SC.buildShore(scene);
const trackSys = buildTrack(scene);
SC.buildCars(scene);
SC.buildSheep(scene, 12.2, -6.4);
SC.buildFence(scene, 10.95, -7.65, 13.45, -5.15);
SC.buildFountain(scene, -5.5, 3.85);
SC.buildBenches(scene, [[-7.4, 4.35, Math.PI], [-3.6, 4.35, Math.PI], [-6.6, 6.9, Math.PI], [-3.4, 6.9, Math.PI]]);
const lampData = SC.buildLamps(scene, [[-7.5, 6.95], [-2.5, 6.95]]);
ctx.finalize(scene);
const mergeInfo = mergeStatic(scene);
console.info('静态网格合并', mergeInfo);

const train = createTrain(scene, { stationX: -5.0, stationZ: 8.5 });

// 站台雨棚下的暖光
const platformLight = new THREE.PointLight(0xffc27a, 0, 6, 1.4);
platformLight.position.set(-5.0, 0.9, 7.2);
platformLight.userData.nightI = 5;
scene.add(platformLight);

const lighting = createLighting(scene, renderer, lampData, [platformLight]);
lighting.onChange((k) => train.setNight(k));

/* ---------------------------------- 相机 ---------------------------------- */
const CAM_DIR = new THREE.Vector3(0.5, 0.64, 0.74).normalize();
const CAM_TARGET = new THREE.Vector3(0, -0.3, 0.3);
const bx = BOARD.w / 2 + FRAME.width, bz = BOARD.d / 2 + FRAME.width;
const corners = [];
for (const x of [-bx, bx]) for (const y of [FRAME.bottom - 0.4, 2.3]) for (const z of [-bz, bz]) corners.push(new THREE.Vector3(x, y, z));

function fitDistance() {
  const v = new THREE.Vector3();
  let lo = 15, hi = 300;
  for (let i = 0; i < 32; i++) {
    const mid = (lo + hi) / 2;
    camera.position.copy(CAM_TARGET).addScaledVector(CAM_DIR, mid);
    camera.lookAt(CAM_TARGET);
    camera.updateMatrixWorld(true);
    camera.updateProjectionMatrix();
    let m = 0;
    for (const c of corners) { v.copy(c).project(camera); m = Math.max(m, Math.abs(v.x) / 0.98, Math.abs(v.y) / 0.93); }
    if (m < 1) hi = mid; else lo = mid;
  }
  return hi;
}

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true; controls.dampingFactor = 0.08;
controls.minDistance = 8; controls.maxDistance = 320;
controls.minPolarAngle = 0.15; controls.maxPolarAngle = 1.47;
controls.screenSpacePanning = true;
controls.rotateSpeed = 0.7;
let userMoved = false;
controls.addEventListener('start', () => { userMoved = true; });

const initial = { pos: new THREE.Vector3(), target: CAM_TARGET.clone() };
function resetCamera() {
  const d = fitDistance();
  initial.pos.copy(CAM_TARGET).addScaledVector(CAM_DIR, d);
  camera.position.copy(initial.pos);
  controls.target.copy(initial.target);
  camera.lookAt(initial.target);
  controls.update();
  userMoved = false;
}
resetCamera();

const tLimit = new THREE.Vector3(BOARD.w / 2, 3, BOARD.d / 2);
controls.addEventListener('change', () => {
  const t = controls.target;
  const cl = new THREE.Vector3(
    THREE.MathUtils.clamp(t.x, -tLimit.x, tLimit.x), THREE.MathUtils.clamp(t.y, -2, tLimit.y), THREE.MathUtils.clamp(t.z, -tLimit.z, tLimit.z)
  );
  const delta = cl.sub(t);
  if (delta.lengthSq() > 0) { t.add(delta); camera.position.add(delta); }
});

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  if (!userMoved) resetCamera();
});

/* ---------------------------------- 界面 ---------------------------------- */
const sim = { running: true, speed: 1 };
const $ = (id) => document.getElementById(id);
const btnRun = $('btn-run'), btnReset = $('btn-reset'), btnNight = $('btn-night');
const speedEl = $('speed'), speedOut = $('speed-out');
const statusText = $('status-text'), statusDot = $('status-dot');

function refreshRunButton() {
  btnRun.textContent = sim.running ? '⏸ 暂停' : '▶ 运行';
}
function toggleRun() { sim.running = !sim.running; refreshRunButton(); }
function setSpeed(v) { sim.speed = v; speedOut.textContent = v.toFixed(2).replace(/0$/, '') + '×'; }
function reset() {
  train.reset();
  sim.running = true; refreshRunButton();
  speedEl.value = 1; setSpeed(1);
  resetCamera();
  crossingUpdate(0, true);
}
function refreshNightButton() {
  btnNight.textContent = lighting.night ? '☀ 切换到白天' : '🌙 切换到夜晚';
}
function toggleNight() { lighting.setNight(!lighting.night); refreshNightButton(); }

btnRun.addEventListener('click', toggleRun);
btnReset.addEventListener('click', reset);
btnNight.addEventListener('click', toggleNight);
speedEl.addEventListener('input', () => setSpeed(parseFloat(speedEl.value)));
window.addEventListener('keydown', (e) => {
  if (e.target.tagName === 'INPUT' && e.key !== ' ') return;
  if (e.code === 'Space') { e.preventDefault(); toggleRun(); }
  else if (e.key === 'r' || e.key === 'R') reset();
  else if (e.key === 'n' || e.key === 'N') toggleNight();
});
setSpeed(1); refreshRunButton(); refreshNightButton();

/* --------------------------- 道口：列车接近时放下栏杆 --------------------------- */
function crossingUpdate(dt, force) {
  const L = track.L;
  let front = ((train.headFront() - trackSys.sCross) % L + L) % L;
  if (front > L / 2) front -= L;
  const active = front > -2.6 && front < 6.2;
  trackSys.crossing.update(force ? 10 : dt, active);
}

/* --------------------------------- 主循环 --------------------------------- */
let last = performance.now(), lastStatus = '';
function frame(now) {
  const dt = Math.min((now - last) / 1000, 0.1);
  last = now;
  controls.update();
  train.update(dt, sim.speed, sim.running);
  crossingUpdate(sim.running ? dt : 0, false);
  terrain.update(dt);
  ctx.windmills.forEach((r) => { r.rotation.z -= dt * 0.5 * (sim.running ? 1 : 0.0); });
  lighting.update(dt);

  let text, cls = '';
  if (!sim.running) { text = train.isDwell ? `已暂停 · 停站剩余 ${train.state.dwell.toFixed(1)}s` : '已暂停'; cls = 'paused'; }
  else if (train.isDwell) { text = `停靠车站 · 剩余 ${train.state.dwell.toFixed(1)}s`; cls = 'dwell'; }
  else text = `运行中 · ${(train.state.v * sim.speed).toFixed(1)} 单位/秒`;
  const key = text + cls;
  if (key !== lastStatus) { statusText.textContent = text; statusDot.className = 'dot ' + cls; lastStatus = key; }

  renderer.render(scene, camera);
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
const hideLoading = () => $('loading').classList.add('done');
requestAnimationFrame(() => requestAnimationFrame(hideLoading));
setTimeout(hideLoading, 1200);

/* ------------------------------ 布局自检（开发用） ------------------------------ */
function validate() {
  const issues = [];
  for (const f of footprints) {
    let best = Infinity;
    for (let i = 0; i < track.pts.length; i += 4) {
      const p = track.pts[i];
      const dx = Math.max(Math.abs(p.x - f.x) - f.hw, 0), dz = Math.max(Math.abs(p.z - f.z) - f.hd, 0);
      best = Math.min(best, Math.hypot(dx, dz));
    }
    if (best < 0.7 && f.tag !== 'nogarden') issues.push(`建筑 (${f.x.toFixed(1)},${f.z.toFixed(1)}) 距铁轨仅 ${best.toFixed(2)}`);
    for (const [dx, dz] of [[-1, -1], [1, -1], [1, 1], [-1, 1], [0, 0]]) {
      const r = riverInfo(f.x + dx * f.hw, f.z + dz * f.hd);
      if (r.d - r.w < BANK_W * 0.9) { issues.push(`建筑 (${f.x.toFixed(1)},${f.z.toFixed(1)}) 压到河岸`); break; }
    }
    if (Math.abs(f.x) + f.hw > BOARD.w / 2 - 0.1 || Math.abs(f.z) + f.hd > BOARD.d / 2 - 0.1) issues.push(`建筑 (${f.x.toFixed(1)},${f.z.toFixed(1)}) 超出底座`);
  }
  for (let i = 0; i < footprints.length; i++) for (let j = i + 1; j < footprints.length; j++) {
    const a = footprints[i], b = footprints[j];
    if (Math.abs(a.x - b.x) < a.hw + b.hw - 0.02 && Math.abs(a.z - b.z) < a.hd + b.hd - 0.02) {
      issues.push(`建筑重叠 (${a.x.toFixed(1)},${a.z.toFixed(1)}) ↔ (${b.x.toFixed(1)},${b.z.toFixed(1)})`);
    }
  }
  return issues;
}
window.__town = { scene, camera, controls, renderer, train, sim, lighting, track, trackSys, validate, reset, toggleRun, toggleNight, setSpeed };
const issues = validate();
if (issues.length) console.warn('布局自检：\n' + issues.join('\n'));
else console.info('布局自检通过：建筑与铁轨/河岸/彼此无冲突');
