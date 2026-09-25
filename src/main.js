import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { SX, SZ, GY } from './config.js';
import { generateWorld } from './build/layout.js';
import { paletteArrays } from './voxel/palette.js';
import { buildWorldMeshes, createVoxelMaterial } from './voxel/mesher.js';
import { createSky } from './render/sky.js';
import { createMountains, createOuterGround } from './render/landscape.js';
import { createSample, sampleTime, formatTime, shichen } from './render/timeOfDay.js';

const $ = (id) => document.getElementById(id);
const params = new URLSearchParams(location.search);
const OX = -SX / 2; // 体素 → 世界坐标偏移（中轴置于原点）
const OZ = -SZ / 2;

const state = {
  time: clampTime(parseFloat(params.get('t') ?? '17.6')),
  tween: null,
  flow: params.get('flow') === '1',
  autoRotate: params.get('rotate') !== '0',
  labels: params.get('labels') === '1',
  dirty: true,
  shadowDirty: true,
};
function clampTime(t) {
  return Number.isFinite(t) ? ((t % 24) + 24) % 24 : 17.6;
}

// —— 渲染器 ——
const renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
renderer.shadowMap.autoUpdate = false; // 场景静态：仅在光照变化时重绘阴影
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
renderer.info.autoReset = false;
$('app').appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0x000000, 350, 1600);

const HOME = { pos: new THREE.Vector3(-196, 128, 292), target: new THREE.Vector3(2, 6, 4) };
const vec = (s) => (s ? new THREE.Vector3(...s.split(',').map(Number)) : null);
/** 竖屏时拉远默认机位，保证开场即可看到建筑群全貌 */
function homePos() {
  const k = Math.min(2.3, Math.max(1, Math.pow(1.25 / (innerWidth / innerHeight), 0.85)));
  return HOME.pos.clone().sub(HOME.target).multiplyScalar(k).add(HOME.target);
}
const camera = new THREE.PerspectiveCamera(40, innerWidth / innerHeight, 1, 5000);
camera.position.copy(vec(params.get('cam')) ?? homePos());

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.copy(vec(params.get('look')) ?? HOME.target);
controls.enableDamping = true;
controls.dampingFactor = 0.06;
controls.minDistance = 20;
controls.maxDistance = 720;
controls.maxPolarAngle = Math.PI * 0.485;
controls.autoRotateSpeed = 0.45;
controls.autoRotate = state.autoRotate;
let resumeTimer = 0;
controls.addEventListener('start', () => {
  controls.autoRotate = false;
  clearTimeout(resumeTimer);
});
controls.addEventListener('end', () => {
  clearTimeout(resumeTimer);
  resumeTimer = setTimeout(() => (controls.autoRotate = state.autoRotate), 6000);
});

// —— 光照 ——
const hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 0.6);
const sun = new THREE.DirectionalLight(0xffffff, 2.5);
sun.castShadow = true;
sun.shadow.mapSize.set(4096, 4096);
sun.shadow.bias = -0.00025;
sun.shadow.normalBias = 0.3;
sun.shadow.radius = 2.5;
scene.add(hemi, sun, sun.target);

const sky = createSky();
scene.add(sky.group);
scene.add(createMountains());
scene.add(createOuterGround(SX / 2, SZ / 2, GY));

// 水面（反射天空的环境贴图）
const water = new THREE.Mesh(
  new THREE.PlaneGeometry(78, 24).rotateX(-Math.PI / 2),
  new THREE.MeshStandardMaterial({ color: 0x21505c, roughness: 0.06, metalness: 0.0, transparent: true, opacity: 0.86, envMapIntensity: 1.1 })
);
water.position.set(96 + OX, 2.72, 269 + OZ);
water.receiveShadow = true;
scene.add(water);
const pmrem = new THREE.PMREMGenerator(renderer);
const envScene = new THREE.Scene();
envScene.add(new THREE.Mesh(new THREE.SphereGeometry(100, 32, 16), sky.material));
let envRT = null;
let envTime = -99;
function refreshEnv() {
  const rt = pmrem.fromScene(envScene, 0, 1, 1000);
  water.material.envMap = rt.texture;
  water.material.needsUpdate = true;
  if (envRT) envRT.dispose();
  envRT = rt;
  envTime = state.time;
}

// —— 后期：泛光（灯笼、窗纸、日盘） ——
const rt = new THREE.WebGLRenderTarget(innerWidth, innerHeight, { type: THREE.HalfFloatType, samples: 4 });
const composer = new EffectComposer(renderer, rt);
composer.setPixelRatio(renderer.getPixelRatio());
composer.setSize(innerWidth, innerHeight);
composer.addPass(new RenderPass(scene, camera));
const bloom = new UnrealBloomPass(new THREE.Vector2(innerWidth, innerHeight), 0.5, 0.55, 1.0);
composer.addPass(bloom);
composer.addPass(new OutputPass());

// —— 构建体素世界 ——
const voxelMat = createVoxelMaterial();
const pointLights = [];
const labelEls = [];
let stats = { voxels: 0, faces: 0 };

function setLoader(msg) {
  $('loader-msg').textContent = msg;
}

async function build() {
  const t0 = performance.now();
  const tick = () => new Promise((r) => setTimeout(r, 0));
  setLoader('规划总平面…');
  await tick();
  const world = generateWorld((m) => setLoader(m));
  setLoader('体素网格化（面剔除 + 环境光遮蔽）…');
  await tick();
  const { group, faces } = buildWorldMeshes(world, paletteArrays(), voxelMat);
  group.position.set(OX, 0, OZ);
  group.updateMatrixWorld(true);
  scene.add(group);
  stats = { voxels: world.count(), faces, chunks: group.children.length, ms: Math.round(performance.now() - t0) };

  // 选取分布最均匀的若干灯火作为实时点光源
  const cands = world.lights.map((l) => new THREE.Vector3(l.x + OX, l.y, l.z + OZ));
  const chosen = [];
  if (cands.length) chosen.push(cands[world.lights.findIndex((l) => l.kind === 'ember')] ?? cands[0]);
  while (chosen.length < Math.min(10, cands.length)) {
    let best = null, bd = -1;
    for (const c of cands) {
      const d = Math.min(...chosen.map((s) => s.distanceToSquared(c)));
      if (d > bd) { bd = d; best = c; }
    }
    chosen.push(best);
  }
  for (const p of chosen) {
    const L = new THREE.PointLight(0xffa050, 0, 30, 1.6);
    L.position.copy(p);
    scene.add(L);
    pointLights.push(L);
  }

  // 建筑标注
  for (const lb of world.labels) {
    const el = document.createElement('div');
    el.className = 'label';
    el.innerHTML = `<b>${lb.name}</b>${lb.sub ? `<span>${lb.sub}</span>` : ''}`;
    $('labels').appendChild(el);
    labelEls.push({ el, pos: new THREE.Vector3(lb.x + OX, lb.y, lb.z + OZ) });
  }
  applyTime(true);
  $('loader').classList.add('hide');
  document.body.classList.add('ready');
  window.__sceneReady = true;
}

// —— 时间与光照 ——
const S = createSample();
const fogBase = { near: 300, far: 1350 };
const bbox = new THREE.Box3(new THREE.Vector3(OX, 0, OZ), new THREE.Vector3(-OX, 108, -OZ));
const corners = [];
for (let i = 0; i < 8; i++) {
  corners.push(new THREE.Vector3(i & 1 ? bbox.max.x : bbox.min.x, i & 2 ? bbox.max.y : bbox.min.y, i & 4 ? bbox.max.z : bbox.min.z));
}
const tmp = new THREE.Vector3();

function fitShadowCamera() {
  const cam = sun.shadow.camera;
  sun.target.position.set(0, 0, 0);
  sun.position.copy(S.dir).multiplyScalar(600);
  sun.updateMatrixWorld();
  sun.target.updateMatrixWorld();
  cam.position.copy(sun.position);
  cam.lookAt(sun.target.position);
  cam.updateMatrixWorld();
  let minX = Infinity, minY = Infinity, minZ = Infinity, maxX = -Infinity, maxY = -Infinity, maxZ = -Infinity;
  for (const c of corners) {
    tmp.copy(c).applyMatrix4(cam.matrixWorldInverse);
    minX = Math.min(minX, tmp.x); maxX = Math.max(maxX, tmp.x);
    minY = Math.min(minY, tmp.y); maxY = Math.max(maxY, tmp.y);
    minZ = Math.min(minZ, tmp.z); maxZ = Math.max(maxZ, tmp.z);
  }
  cam.left = minX; cam.right = maxX; cam.bottom = minY; cam.top = maxY;
  cam.near = Math.max(1, -maxZ - 20);
  cam.far = -minZ + 20;
  cam.updateProjectionMatrix();
}

function applyTime(force = false) {
  sampleTime(state.time, S);
  sky.update(S);
  sun.color.copy(S.light);
  sun.intensity = S.li;
  hemi.color.copy(S.hs);
  hemi.groundColor.copy(S.hg);
  hemi.intensity = S.hi * 1.5;
  scene.fog.color.copy(S.fog);
  const mist = Math.max(0, 1 - Math.abs(state.time - 6.6) / 1.8); // 清晨薄雾
  fogBase.near = 300 - 130 * mist;
  fogBase.far = 1350 - 300 * mist;
  voxelMat.userData.uniforms.uGlow.value = S.glow * 2.4;
  for (const L of pointLights) L.intensity = S.glow * 70;
  bloom.strength = 0.18 + 0.62 * S.glow;
  bloom.threshold = 1.05 - 0.25 * S.glow;
  state.shadowDirty = true;
  if (force || Math.abs(state.time - envTime) > 0.25) refreshEnv();
  $('clock').textContent = formatTime(state.time);
  $('shichen').textContent = shichen(state.time);
  $('slider').value = state.time;
  document.querySelectorAll('[data-t]').forEach((b) => {
    const d = Math.abs(state.time - parseFloat(b.dataset.t));
    b.classList.toggle('active', Math.min(d, 24 - d) < 0.6);
  });
}

// —— UI ——
function goTo(t) {
  const dist = (((t - state.time) % 24) + 24) % 24;
  state.tween = { from: state.time, dist, elapsed: 0, dur: Math.min(3, 0.8 + dist * 0.2) };
}
document.querySelectorAll('[data-t]').forEach((b) => b.addEventListener('click', () => goTo(parseFloat(b.dataset.t))));
$('slider').addEventListener('input', (e) => {
  state.tween = null;
  state.time = parseFloat(e.target.value);
  state.dirty = true;
});
function bindToggle(id, key, onChange) {
  const el = $(id);
  const sync = () => el.classList.toggle('on', state[key]);
  el.addEventListener('click', () => {
    state[key] = !state[key];
    sync();
    onChange?.();
  });
  sync();
}
bindToggle('tg-rotate', 'autoRotate', () => (controls.autoRotate = state.autoRotate));
bindToggle('tg-flow', 'flow');
bindToggle('tg-labels', 'labels', () => $('labels').classList.toggle('show', state.labels));
$('labels').classList.toggle('show', state.labels);
$('tg-reset').addEventListener('click', () => {
  camera.position.copy(homePos());
  controls.target.copy(HOME.target);
});
window.addEventListener('keydown', (e) => {
  if (e.key === 'h' || e.key === 'H') document.body.classList.toggle('hide-ui');
});

addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
  composer.setSize(innerWidth, innerHeight);
});

// —— 主循环 ——
const timer = new THREE.Timer();
let frames = 0, fpsT = 0, shadowTick = 0;
const proj = new THREE.Vector3();

function loop() {
  timer.update();
  const dt = Math.min(timer.getDelta(), 0.1);
  if (state.tween) {
    const tw = state.tween;
    tw.elapsed += dt;
    const k = Math.min(1, tw.elapsed / tw.dur);
    const e = k < 0.5 ? 2 * k * k : 1 - (-2 * k + 2) ** 2 / 2;
    state.time = clampTime(tw.from + tw.dist * e);
    if (k >= 1) state.tween = null;
    state.dirty = true;
  } else if (state.flow) {
    state.time = clampTime(state.time + dt * 0.4);
    state.dirty = true;
  }
  if (state.dirty && window.__sceneReady) {
    applyTime();
    state.dirty = false;
  }
  // 静态场景的阴影贴图只在光照方向变化时重绘；连续变化时每 4 帧重绘一次
  if (state.shadowDirty && (!(state.flow || state.tween) || ++shadowTick % 4 === 0)) {
    fitShadowCamera();
    renderer.shadowMap.needsUpdate = true;
    state.shadowDirty = false;
  }
  controls.update(dt);
  sky.group.position.copy(camera.position);
  // 雾距随观察距离平移：拉远观察时建筑群不被雾吞没
  const extra = Math.max(0, camera.position.distanceTo(controls.target) - 380);
  scene.fog.near = fogBase.near + extra;
  scene.fog.far = fogBase.far + extra;
  renderer.info.reset();
  composer.render();

  if (state.labels) {
    for (const { el, pos } of labelEls) {
      proj.copy(pos).project(camera);
      const vis = proj.z < 1 && Math.abs(proj.x) < 1.1 && Math.abs(proj.y) < 1.1;
      el.style.display = vis ? '' : 'none';
      if (vis) el.style.transform = `translate(-50%,-100%) translate(${((proj.x + 1) / 2) * innerWidth}px, ${((1 - proj.y) / 2) * innerHeight}px)`;
    }
  }

  frames++;
  fpsT += dt;
  if (fpsT >= 0.5) {
    const info = renderer.info.render;
    $('stats').textContent = `${Math.round(frames / fpsT)} FPS · 体素 ${stats.voxels.toLocaleString()} · 可见面 ${stats.faces.toLocaleString()} · 绘制 ${info.calls}`;
    window.__fps = frames / fpsT;
    frames = 0;
    fpsT = 0;
  }
  requestAnimationFrame(loop);
}

build().then(() => {
  timer.update();
  requestAnimationFrame(loop);
});
