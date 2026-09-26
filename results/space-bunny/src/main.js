/**
 * 体素宫城 —— 主入口
 *
 * 构建流程刻意做成「一次性同步跑完 + 同步渲染首帧」：
 * 不依赖 rAF / setTimeout 推进，因此在标签页被挂起的环境里也能立刻看到完成态画面。
 */
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { VoxelCanvas, buildVoxelGeometry } from './core/voxel.js';
import { P } from './core/palette.js';
import { buildWorld, SITE } from './world/site.js';
import { SkyRig } from './render/sky.js';
import { PostFX } from './render/post.js';

const t0 = performance.now();

// ---------------------------------------------------------------- 渲染器
const canvas = document.getElementById('scene');
const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: false,
  powerPreference: 'high-performance',
  preserveDrawingBuffer: true, // 便于截图 / 像素级验收
  stencil: false,
});
// 后备缓冲总像素上限：4K / 高分屏下若不收敛，HalfFloat + MSAA 的 RT 会把显存/驱动
// 压力顶到临界点（实测 8.3M 像素时 GPU 进程会卡死，3.7M 正常）。
const MAX_PIXELS = 3.6e6;
function pixelRatioFor(w, h) {
  const target = Math.min(window.devicePixelRatio || 1, 1.75);
  const css = Math.max(1, w * h);
  return Math.max(0.6, Math.min(target, Math.sqrt(MAX_PIXELS / css)));
}
renderer.setPixelRatio(pixelRatioFor(window.innerWidth, window.innerHeight));
renderer.setSize(window.innerWidth, window.innerHeight, false);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.NoToneMapping; // 色调映射放在最终 pass 里做
renderer.setClearColor(0x10141c, 1);

const gl = renderer.getContext();
const dbg = gl.getExtension('WEBGL_debug_renderer_info');
const GPU = dbg ? gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER);

// ---------------------------------------------------------------- 场景
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(43, window.innerWidth / window.innerHeight, 1, 4200);

// 开场机位：东南高位 3/4 视角，一眼交代中轴对称与全部建筑
const HOME = { pos: [234, 215, 185], target: [0, 40, -26] };
camera.position.set(...HOME.pos);

const controls = new OrbitControls(camera, canvas);
controls.target.set(...HOME.target);
controls.enableDamping = true;
controls.dampingFactor = 0.055;
controls.minDistance = 55;
controls.maxDistance = 1100;
controls.maxPolarAngle = Math.PI * 0.492;
controls.minPolarAngle = Math.PI * 0.05;
controls.autoRotate = true;
controls.autoRotateSpeed = 0.3;
controls.screenSpacePanning = false;

// ---------------------------------------------------------------- 世界（同步构建）
const solid = new VoxelCanvas('solid');
const glow = new VoxelCanvas('glow');
const world = buildWorld(solid, glow);

// 窗纸并入发光层：暮色时整片窗牖会亮起来
for (const [k, c] of solid.cells) {
  if (c === P.paper || c === P.paperDim) glow.cells.set(k, c);
}

const tBuild = performance.now();
const solidGeo = buildVoxelGeometry(solid);
const glowGeo = buildVoxelGeometry(glow, { useAO: false });
const tMesh = performance.now();

const matSolid = new THREE.MeshLambertMaterial({ vertexColors: true });
const matGround = new THREE.MeshLambertMaterial({ vertexColors: true });
const matWater = new THREE.MeshLambertMaterial({ vertexColors: true, transparent: true, opacity: 0.9 });
const matGlow = new THREE.MeshBasicMaterial({ vertexColors: true });

const meshSolid = new THREE.Mesh(solidGeo.geometry, matSolid);
meshSolid.castShadow = true;
meshSolid.receiveShadow = true;
meshSolid.frustumCulled = false;
scene.add(meshSolid);

const meshGlow = new THREE.Mesh(glowGeo.geometry, matGlow);
meshGlow.frustumCulled = false;
meshGlow.renderOrder = 1;
scene.add(meshGlow);

const meshFar = new THREE.Mesh(world.ground.geometry, matGround);
meshFar.receiveShadow = true;
meshFar.frustumCulled = false;
scene.add(meshFar);

const meshNear = new THREE.Mesh(world.near.geometry, matGround);
meshNear.receiveShadow = true;
meshNear.frustumCulled = false;
scene.add(meshNear);

const meshWater = new THREE.Mesh(world.water.geometry, matWater);
meshWater.receiveShadow = true;
meshWater.frustumCulled = false;
scene.add(meshWater);

// ---------------------------------------------------------------- 光照 / 后期
const sky = new SkyRig(scene);
sky.setLamps(world.lights);
sky.set('dawn', true);

const post = new PostFX(renderer, scene, camera);
post.setSize(renderer.domElement.width, renderer.domElement.height);
post.exposure = sky.state.exposure;
post.bloom = sky.state.bloom;
matGlow.color.setScalar(0.5 + sky.state.lantern * 3.6);

// ---------------------------------------------------------------- 统计
const stats = {
  fps: 0,
  voxels: solid.size + glow.size,
  quads: solidGeo.quads + glowGeo.quads + world.ground.quads + world.near.quads + world.water.quads,
  calls: 0,
  triangles: 0,
  gpu: GPU,
  dpr: renderer.getPixelRatio(),
  buildMs: tBuild - t0,
  meshMs: tMesh - tBuild,
  totalMs: performance.now() - t0,
};
const el = {
  fps: document.getElementById('s-fps'),
  voxel: document.getElementById('s-voxel'),
  face: document.getElementById('s-face'),
  call: document.getElementById('s-call'),
  gpu: document.getElementById('s-gpu'),
  size: document.getElementById('s-size'),
  boot: document.getElementById('s-boot'),
  loading: document.getElementById('loading'),
  preset: document.getElementById('preset-name'),
};

function paintStats() {
  el.fps.textContent = stats.fps.toFixed(0);
  el.voxel.textContent = stats.voxels.toLocaleString('en-US');
  el.face.textContent = (stats.quads / 1000).toFixed(1) + 'k';
  el.call.textContent = `${stats.calls} / ${(stats.triangles / 1000).toFixed(0)}k△`;
  el.gpu.textContent = stats.gpu;
  el.size.textContent = `${renderer.domElement.width}×${renderer.domElement.height} @${stats.dpr}x`;
  el.boot.textContent = `${Math.round(stats.totalMs)} ms`;
}

// ---------------------------------------------------------------- UI
let resumeAt = 0;
controls.addEventListener('start', () => { controls.autoRotate = false; syncRotateBtn(); });
controls.addEventListener('end', () => { resumeAt = performance.now() + 7000; });

function syncRotateBtn() {
  const btn = document.getElementById('btn-rotate');
  btn.classList.toggle('on', controls.autoRotate);
  btn.textContent = controls.autoRotate ? '自动巡航：开' : '自动巡航：关';
}

function setPreset(name) {
  sky.set(name, false);
  el.preset.textContent = { dawn: '晨曦', noon: '正午', dusk: '暮色' }[name] || name;
  for (const b of document.querySelectorAll('[data-preset]')) {
    b.classList.toggle('on', b.dataset.preset === name);
  }
}

document.querySelectorAll('[data-preset]').forEach((btn) => {
  btn.addEventListener('click', () => setPreset(btn.dataset.preset));
});
document.getElementById('btn-rotate').addEventListener('click', () => {
  controls.autoRotate = !controls.autoRotate;
  resumeAt = 0;
  syncRotateBtn();
});
document.getElementById('btn-reset').addEventListener('click', () => {
  camera.position.set(...HOME.pos);
  controls.target.set(...HOME.target);
  controls.autoRotate = true;
  controls.update();
  syncRotateBtn();
});

// ---------------------------------------------------------------- 首帧（同步）
sky.update(0);
post.render();
paintStats();
el.loading.style.display = 'none';   // 同步隐藏，确保首帧就是完成态

// ---------------------------------------------------------------- 主循环
let frames = 0;
let last = performance.now();
let lastStats = performance.now();

function loop() {
  requestAnimationFrame(loop);
  const now = performance.now();
  const dt = Math.min(0.1, (now - last) / 1000);
  last = now;

  if (!controls.autoRotate && resumeAt && now > resumeAt) {
    controls.autoRotate = true;
    resumeAt = 0;
    syncRotateBtn();
  }

  sky.update(dt);
  post.exposure = sky.state.exposure;
  post.bloom = sky.state.bloom;
  matGlow.color.setScalar(0.5 + sky.state.lantern * 3.6);

  controls.update();
  post.render();

  frames++;
  if (now - lastStats > 480) {
    stats.fps = (frames * 1000) / (now - lastStats);
    stats.calls = post.info.calls;
    stats.triangles = post.info.triangles;
    frames = 0;
    lastStats = now;
    paintStats();
  }
}
requestAnimationFrame(loop);

// ---------------------------------------------------------------- 尺寸
function onResize() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setPixelRatio(pixelRatioFor(w, h));
  renderer.setSize(w, h, false);
  post.setSize(renderer.domElement.width, renderer.domElement.height);
  stats.dpr = renderer.getPixelRatio();
}
window.addEventListener('resize', onResize);

// ---------------------------------------------------------------- 验收接口
window.__VOXEL = {
  ready: true,
  site: SITE,
  buildings: world.buildings,
  home: HOME,
  stats: () => ({
    ...stats,
    fps: Number(stats.fps.toFixed(1)),
    width: renderer.domElement.width,
    height: renderer.domElement.height,
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight,
    camera: camera.position.toArray().map((v) => Number(v.toFixed(2))),
    target: controls.target.toArray().map((v) => Number(v.toFixed(2))),
    preset: sky.presetName,
    autoRotate: controls.autoRotate,
    post: post.enabled,
    glow: Number(matGlow.color.r.toFixed(2)),
  }),
  setPreset: (n) => { setPreset(n); sky.set(n, true); },
  setAutoRotate: (v) => { controls.autoRotate = !!v; resumeAt = 0; syncRotateBtn(); },
  setPost: (v) => { post.enabled = !!v; },
  setCamera: (px, py, pz, tx, ty, tz) => {
    camera.position.set(px, py, pz);
    controls.target.set(tx, ty, tz);
    controls.update();
  },
  resetView: () => {
    camera.position.set(...HOME.pos);
    controls.target.set(...HOME.target);
    controls.update();
  },
  capture: () => renderer.domElement.toDataURL('image/png'),
};

syncRotateBtn();
el.preset.textContent = '晨曦';
