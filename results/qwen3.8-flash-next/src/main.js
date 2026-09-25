/**
 * 主装配与主循环（SPEC §6）。只依赖 three + 本项目模块，无外部资源。
 *
 * 流程：renderer → scene → camera → OrbitControls → createLighting(apply('dawn'))
 *   → import('./world/composition.js').buildWorld()（A4 契约：{ group, world, stats }）
 *   → group 入 scene → createParticles → createHud → 输入/机位缓动/自适应降级 → rAF 循环
 *   → 世界就绪且首帧渲染后 hideLoading()。
 *
 * 集成假设（便于 A2/A3/A4 对齐）：
 * - composition.js 用动态 import：文件缺失/语法错误/运行期抛错都会渲染进 #loading（showFatal），
 *   不白屏、不静默失败；其余部分（天空/光照/粒子/HUD）仍能单独观察。
 * - 接受 buildWorld() 返回 { group, world, stats } 或直接返回 THREE.Group；
 *   world.stats()/count() 存在则用于 HUD 体素数与 20 万预算告警。
 * - 若 composition.js 另导出 refreshTone(key, T)（或 setTone），色调切换时顺带调用，
 *   供 A4 更新地面 tint；没有就跳过（不要求 A4 提供）。
 * - three 0.186 适配：shadowMap.type 用 PCFShadowMap（PCFSoftShadowMap 已被移除并告警）；
 *   时间基准不用已废弃的 THREE.Clock，改 performance.now() 手算 dt（并累计 elapsed）。
 * - 调试句柄：window.__voxel = { scene, renderer, camera, controls, lighting, particles, world, perf }。
 */

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { TONES, TONE_ORDER, VIEWS, DEFAULT_VIEW } from './config.js';
import { createLighting } from './core/lighting.js';
import { createParticles } from './core/particles.js';
import { createHud, hideLoading, showFatal } from './ui/hud.js';

/* ------------------------------------------------------- 常量（本地） */
const MAX_DPR = 1.75;
const IDLE_RESUME = 4.0;        // 秒：无交互后恢复自动环绕
const VIEW_TWEEN = 2.0;         // 秒：机位缓动
const FPS_LOW = 45;
const FPS_BAD = 38;
const DEGRADE_HOLD = 2.0;       // 秒：连续低于阈值才降级
const FPS_WINDOW = 0.5;         // 秒：FPS 采样窗口

const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

/* THREE.Clock 在 0.186 已废弃 → 用 performance.now() 手算 dt 与累计时间（同一时间轴，
   markInteraction / 缓动 / 降级判定都读 elapsedSeconds，切标签页回来不会积累巨大 dt）。 */
const nowMs = () => (typeof performance !== 'undefined' ? performance.now() : Date.now());
let lastFrameMs = nowMs();
let elapsedSeconds = 0;
function stepTime() {
  const t = nowMs();
  const raw = (t - lastFrameMs) / 1000;
  lastFrameMs = t;
  const dt = clamp(raw, 0, 0.1);          // 掉帧/挂起不放大步长
  elapsedSeconds += dt;
  return dt;
}

/* ------------------------------------------------------------ 舞台 */
const stage = document.getElementById('stage') || document.body;

const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, MAX_DPR));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
renderer.shadowMap.enabled = true;
/* 0.186：PCFSoftShadowMap 已被移除（会告警并自动退回 PCFShadowMap）。
   体素场景全是 1 格硬边 + 2048 阴影贴图（≈0.32 unit/texel < 1 voxel），PCF 硬边的
   噪点最低、也最省；VSM 会把体素阶梯阴影糊成一片，故定 PCFShadowMap。 */
renderer.shadowMap.type = THREE.PCFShadowMap;
stage.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  52,
  Math.max(0.4, window.innerWidth / Math.max(1, window.innerHeight)),
  0.8,
  3000,
);
camera.position.set(DEFAULT_VIEW.pos[0], DEFAULT_VIEW.pos[1], DEFAULT_VIEW.pos[2]);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.06;
controls.maxPolarAngle = 1.51;
controls.minDistance = 40;
controls.maxDistance = 900;
controls.target.set(DEFAULT_VIEW.target[0], DEFAULT_VIEW.target[1], DEFAULT_VIEW.target[2]);
controls.autoRotate = true;
controls.autoRotateSpeed = 0.32;
controls.update();

/* --------------------------------------------------------- 子系统 */
const lighting = createLighting(scene, renderer);

let toneKey = 'dawn';
let viewIndex = Math.max(0, VIEWS.indexOf(DEFAULT_VIEW));
let worldRef = null;

/** 供 HUD info() 读取的实时快照（warns = 装配告警条数：必需构件失败 / 超预算） */
const perf = { fps: 0, calls: 0, triangles: 0, voxels: 0, quads: 0, degraded: 0, warns: 0 };

const particles = createParticles(scene);
particles.setMode(TONES[toneKey].particle, TONES[toneKey]);

const hud = createHud({
  setTone: (key) => setTone(key),
  setView: (i) => goToView(i),
  toggleRotate: (on) => setRotate(!!on),
  info: () => ({
    fps: perf.fps > 0 ? perf.fps : undefined,
    calls: perf.calls,
    triangles: perf.triangles,
    voxels: perf.voxels,
    quads: perf.quads,
    warns: perf.warns,
  }),
});
hud.setActiveTone(toneKey);
hud.setActiveView(viewIndex);

/* -------------------------------------------- 状态：交互 / 机位缓动 */
let lastInteraction = -1e4;     // 负值 → 首帧起即允许环绕
let rotateEnabled = true;

const tween = {
  active: false,
  t: 0,
  fromPos: new THREE.Vector3(),
  toPos: new THREE.Vector3(),
  fromTarget: new THREE.Vector3(),
  toTarget: new THREE.Vector3(),
};

function markInteraction() {
  lastInteraction = elapsedSeconds;
}

/** @param {'dawn'|'noon'|'dusk'|'night'} key */
function setTone(key) {
  if (!TONES[key]) {
    console.warn(`[main] 未知色调 ${key}，可用：${TONE_ORDER.join('/')}`);
    return;
  }
  toneKey = key;
  lighting.apply(key);
  particles.setMode(TONES[key].particle, TONES[key]);
  hud.setActiveTone(key);
  if (toneRefreshHook) {
    try {
      toneRefreshHook(key, TONES[key]);
    } catch (err) {
      console.warn('[main] composition.refreshTone 抛错（不影响渲染）', err);
    }
  }
  markInteraction();
}

/** @param {number} index VIEWS 下标 */
function goToView(index) {
  const v = VIEWS[index];
  if (!v) return;
  viewIndex = index;
  tween.fromPos.copy(camera.position);
  tween.fromTarget.copy(controls.target);
  tween.toPos.set(v.pos[0], v.pos[1], v.pos[2]);
  tween.toTarget.set(v.target[0], v.target[1], v.target[2]);
  tween.t = 0;
  tween.active = true;
  hud.setActiveView(index);
  markInteraction();
}

/** @param {boolean} on */
function setRotate(on) {
  rotateEnabled = !!on;
  hud.setRotate(rotateEnabled);
  markInteraction();
}

/* ------------------------------------------------------------ 事件 */
window.addEventListener('keydown', (ev) => {
  if (ev.ctrlKey || ev.metaKey || ev.altKey) return;
  const k = ev.key;
  if (k >= '1' && k <= '4') {
    const key = TONE_ORDER[Number(k) - 1];
    if (key) setTone(key);
    ev.preventDefault();
  } else if (k === 'f' || k === 'F') {
    goToView((viewIndex + 1) % VIEWS.length);
    ev.preventDefault();
  } else if (k === 'r' || k === 'R') {
    setRotate(!rotateEnabled);
    ev.preventDefault();
  }
  markInteraction();
});

renderer.domElement.addEventListener('pointerdown', () => {
  tween.active = false;         // 用户一上手就让位给手动操作
  markInteraction();
});
renderer.domElement.addEventListener('wheel', () => markInteraction(), { passive: true });
controls.addEventListener('start', () => { tween.active = false; markInteraction(); });

window.addEventListener('resize', () => {
  camera.aspect = Math.max(0.4, window.innerWidth / Math.max(1, window.innerHeight));
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  lighting.refreshShadow();
  markInteraction();
});

/* ------------------------------------------------------ 自适应降级 */
let lowTimer = 0;
let badTimer = 0;
let degradeLevel = 0;

function updateDegradation(dt) {
  if (perf.fps <= 0 || degradeLevel >= 2) return;
  if (lighting.current().blending) return;   // 色调过渡期阴影逐帧重投，不作降级依据
  lowTimer = perf.fps < FPS_LOW ? lowTimer + dt : 0;
  badTimer = perf.fps < FPS_BAD ? badTimer + dt : 0;

  if (degradeLevel === 0 && lowTimer >= DEGRADE_HOLD) {
    degradeLevel = 1;
    lighting.setShadowQuality(1024);
    perf.degraded = degradeLevel;
    console.info('[main] 性能降级 1/2：阴影贴图 → 1024');
  }
  if (degradeLevel === 1 && badTimer >= DEGRADE_HOLD) {
    degradeLevel = 2;
    renderer.setPixelRatio(1);
    lighting.setFillEnabled(false);
    perf.degraded = degradeLevel;
    console.info('[main] 性能降级 2/2：pixelRatio → 1，关闭补光');
  }
}

/* --------------------------------------------------- 世界装配（A4） */
let toneRefreshHook = null;

async function composeWorld() {
  let mod;
  try {
    mod = await import('./world/composition.js');
  } catch (err) {
    console.error(err);
    showFatal('无法加载 src/world/composition.js（A4 未完成或存在语法错误）', err);
    return false;
  }
  const build = typeof mod.buildWorld === 'function' ? mod.buildWorld : mod.default?.buildWorld;
  if (typeof build !== 'function') {
    showFatal('src/world/composition.js 未导出 buildWorld()', new Error(`实际导出：${Object.keys(mod).join(', ') || '(无)'}`));
    return false;
  }

  let built;
  try {
    built = build();
  } catch (err) {
    console.error(err);
    showFatal('buildWorld() 抛出异常（体素建造阶段）', err);
    return false;
  }

  const group = built && built.group ? built.group : built;
  if (!group || !group.isObject3D) {
    showFatal('buildWorld() 返回值既不是 { group }，也不是 THREE.Object3D',
      new Error(`实际返回：${Object.prototype.toString.call(built)}`));
    return false;
  }
  scene.add(group);

  worldRef = built && built.world ? built.world : null;
  let stats = built && built.stats ? built.stats : null;
  if (typeof stats === 'function') stats = stats.call(built.world || built);
  if (!stats && worldRef && typeof worldRef.stats === 'function') stats = worldRef.stats();
  perf.voxels = (stats && stats.voxels) || (worldRef ? worldRef.count() : 0);
  perf.quads = (stats && stats.quads) || 0;
  perf.triangles = (stats && stats.triangles) || perf.triangles;
  const budget = (stats && stats.budget) || perf.voxels;   // 预算由 composition 单一持有

  if (!perf.voxels) {
    console.warn('[main] buildWorld() 未提供 world/stats，HUD 体素数为 0');
  } else if (perf.voxels > budget) {
    console.error('[voxel] 超预算 %d 格：%d / %d（必需建筑优先装配，故这里只报账，请从最大建筑与地形瘦身）',
      perf.voxels - budget, perf.voxels, budget);
  }
  /* 装配告警计数（必需构件失败 + 超预算）随 info() 进 HUD；hud.js 目前只画 4 行，
     所以同时打一条 console.error 保证人眼可见。 */
  perf.warns = (stats && stats.warns) || 0;
  const mustPlaced = stats && stats.mustCount ? `${stats.mustPlaced}/${stats.mustCount}` : '';
  if (stats && stats.glowMissing !== undefined && stats.glowMissing > 0) {
    console.error('[voxel] 夜景点位仍缺发光灯体 %d/%d（PointLight 亮了但没有灯）',
      stats.glowMissing, (stats.glowPoints || []).length);
    perf.warns++;
  }
  console.info(`[voxel] total voxels = ${perf.voxels} · quads = ${perf.quads} · dropped = ${(stats && stats.dropped) || 0}`
    + ` · 必需建筑 ${mustPlaced || '?'}`);

  if (typeof mod.refreshTone === 'function') toneRefreshHook = mod.refreshTone;
  else if (typeof mod.setTone === 'function') toneRefreshHook = mod.setTone;

  lighting.refreshShadow();
  return true;
}

/* --------------------------------------------------------- 主循环 */
let worldReady = false;
let firstFrameDone = false;
let fpsFrames = 0;
let fpsAccum = 0;

function tick() {
  requestAnimationFrame(tick);
  const dt = stepTime();          // performance.now() 手算（THREE.Clock 已废弃）
  const now = elapsedSeconds;

  if (tween.active) {
    tween.t = clamp(tween.t + dt / VIEW_TWEEN, 0, 1);
    const e = easeInOutCubic(tween.t);
    camera.position.lerpVectors(tween.fromPos, tween.toPos, e);
    controls.target.lerpVectors(tween.fromTarget, tween.toTarget, e);
    if (tween.t >= 1) tween.active = false;
  }

  controls.autoRotate = rotateEnabled && !tween.active && (now - lastInteraction) > IDLE_RESUME;
  controls.update(dt);

  lighting.update(dt);
  particles.update(dt, camera);

  renderer.render(scene, camera);

  fpsFrames++;
  fpsAccum += dt;
  if (fpsAccum >= FPS_WINDOW) {
    perf.fps = fpsFrames / fpsAccum;
    perf.calls = renderer.info.render.calls;
    perf.triangles = renderer.info.render.triangles;
    fpsFrames = 0;
    fpsAccum = 0;
    updateDegradation(FPS_WINDOW);
  }

  if (!firstFrameDone) {
    firstFrameDone = true;
    if (worldReady) hideLoading();
  }
}

(async function boot() {
  try {
    worldReady = await composeWorld();
  } catch (err) {
    console.error(err);
    showFatal('启动流程出现未预期异常', err);
    worldReady = false;
  }
  if (firstFrameDone && worldReady) hideLoading();
  hud.refresh();
})();

tick();

/* ------------------------------------------------------- 调试句柄 */
window.__voxel = {
  THREE, renderer, scene, camera, controls, lighting, particles, hud, perf,
  get world() { return worldRef; },
  setTone, goToView, setRotate,
  views: VIEWS, tones: TONE_ORDER,
};
