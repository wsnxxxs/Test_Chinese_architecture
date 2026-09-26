/**
 * 入口：渲染器 / 正交相机自适应取景 / 场景装配 / 主循环 / UI 接线 / 复位。
 * 本文件不创建任何灯光、几何或材质，全部来自 scene/* 模块。
 */
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { CONFIG } from './config.js';
import { INITIAL } from './scene/layout.js';
import { setAnisotropy } from './scene/textures.js';
import { createTerrain } from './scene/terrain.js';
import { createTrack } from './scene/track.js';
import { createStation } from './scene/station.js';
import { createBuildings } from './scene/buildings.js';
import { createProps } from './scene/props.js';
import { createTrain } from './scene/train.js';
import { createLighting } from './scene/lighting.js';
import { createPanel } from './ui/panel.js';

/* ------------------------------------------------------------------ *
 * 渲染器
 * ------------------------------------------------------------------ */

const appRoot = document.querySelector('#app');

const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, CONFIG.render.maxPixelRatio));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
appRoot.appendChild(renderer.domElement);

const scene = new THREE.Scene();

/* ------------------------------------------------------------------ *
 * 正交相机 + 自适应取景
 * ------------------------------------------------------------------ */

const CAM_TARGET = new THREE.Vector3().fromArray(CONFIG.camera.target);
const CAM_DIR = new THREE.Vector3().fromArray(CONFIG.camera.direction).normalize();

const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, CONFIG.camera.near, CONFIG.camera.far);

/** 沙盘包围盒（含木质底座与边框），取景只关心这 8 个角点 */
const FIT_BOUNDS = { minX: -22, maxX: 22, minY: -1.5, maxY: 0.6, minZ: -16.5, maxZ: 16.5 };
const FIT_CORNERS = [];
for (const x of [FIT_BOUNDS.minX, FIT_BOUNDS.maxX]) {
  for (const y of [FIT_BOUNDS.minY, FIT_BOUNDS.maxY]) {
    for (const z of [FIT_BOUNDS.minZ, FIT_BOUNDS.maxZ]) FIT_CORNERS.push(new THREE.Vector3(x, y, z));
  }
}

const _right = new THREE.Vector3();
const _up = new THREE.Vector3();
const _proj = new THREE.Vector3();
const _size = new THREE.Vector2();

/**
 * 按当前相机朝向重算正交视锥，使包围盒完整入镜；不动 zoom，因此用户缩放保留。
 * 取景尺寸对“当前朝向”成立：旋转到任意角度都仍然完整可见。
 */
function fitFrustum() {
  camera.updateMatrixWorld(true);
  _right.setFromMatrixColumn(camera.matrixWorld, 0);
  _up.setFromMatrixColumn(camera.matrixWorld, 1);

  let maxRight = 0;
  let maxUp = 0;
  for (const corner of FIT_CORNERS) {
    // 相对 controls.target（相机注视点）求投影半宽/半高，保证居中且对称
    _proj.subVectors(corner, controls.target);
    maxRight = Math.max(maxRight, Math.abs(_proj.dot(_right)));
    maxUp = Math.max(maxUp, Math.abs(_proj.dot(_up)));
  }

  renderer.getSize(_size);
  const aspect = _size.x / Math.max(1, _size.y);
  const halfH = Math.max(maxUp, maxRight / aspect) * CONFIG.camera.fitMargin;
  const halfW = halfH * aspect;

  camera.left = -halfW;
  camera.right = halfW;
  camera.top = halfH;
  camera.bottom = -halfH;
  camera.updateProjectionMatrix();
}

/** 把相机放回确定的初始机位（朝向由 CAM_DIR 决定），再重算视锥。 */
function fitCamera() {
  camera.position.copy(CAM_TARGET).addScaledVector(CAM_DIR, CONFIG.camera.distance);
  controls.target.copy(CAM_TARGET);
  controls.update();
  fitFrustum();
}

/* ------------------------------------------------------------------ *
 * 控制器
 * ------------------------------------------------------------------ */

const controls = new OrbitControls(camera, renderer.domElement);
controls.enablePan = false;
controls.enableDamping = true;
controls.dampingFactor = CONFIG.camera.damping;
controls.rotateSpeed = CONFIG.camera.rotateSpeed;
controls.zoomSpeed = CONFIG.camera.zoomSpeed;
controls.minPolarAngle = THREE.MathUtils.degToRad(CONFIG.camera.minPolarAngleDeg);
controls.maxPolarAngle = THREE.MathUtils.degToRad(CONFIG.camera.maxPolarAngleDeg);
controls.minZoom = CONFIG.camera.zoom.min;
controls.maxZoom = CONFIG.camera.zoom.max;
controls.target.copy(CAM_TARGET);
camera.zoom = CONFIG.camera.zoom.default;
// 旋转/阻尼引起的每次变更都重算视锥：取景永不丢失
controls.addEventListener('change', fitFrustum);

fitCamera();

/* ------------------------------------------------------------------ *
 * 场景装配
 * ------------------------------------------------------------------ */

const terrain = createTerrain();
const track = createTrack();
const station = createStation();
const buildings = createBuildings();
const props = createProps();
const train = createTrain();
// lighting 需要 renderer（烘焙环境贴图）与 scene（太阳/半球光/环境光挂在场景上）
const lighting = createLighting({ scene, renderer });

// train.update() 返回的 arc 已是 0..1 弧长占比（train.js 内部按 trackLength 归一化）；
// update(0) 不变更状态，只取一次初始读数
let lastTrainState = train.update(0);

for (const part of [terrain, track, station, buildings, props, train, lighting]) {
  if (part && part.object3D) scene.add(part.object3D);
}

setAnisotropy(renderer.capabilities.getMaxAnisotropy());
lighting.setLightAnchors([...(station.lightAnchors || []), ...(props.lightAnchors || [])]);
lighting.setTimeOfDay(INITIAL.timeOfDay);

/* ------------------------------------------------------------------ *
 * 状态 / UI
 * ------------------------------------------------------------------ */

const state = {
  paused: false,
  speedMultiplier: CONFIG.train.speedMultiplier.default,
  mode: INITIAL.timeOfDay,
};

const panel = createPanel(document.querySelector('#ui'), {
  onTogglePause() {
    setPaused(!state.paused);
  },
  onSpeedChange(multiplier) {
    applySpeed(multiplier);
  },
  onReset() {
    resetAll();
  },
  onModeChange(mode) {
    applyMode(mode);
  },
});

let lastStatusText = '';

function refreshStatus() {
  const text = state.paused ? '已暂停' : train.isStopped() ? '停靠站台' : '运行中';
  if (text !== lastStatusText) {
    lastStatusText = text;
    panel.setStatus(text);
  }
}

function setPaused(paused) {
  state.paused = Boolean(paused);
  panel.setPaused(state.paused);
  refreshStatus();
}

function applySpeed(multiplier) {
  const { min, max } = CONFIG.train.speedMultiplier;
  state.speedMultiplier = THREE.MathUtils.clamp(multiplier, min, max);
  const unitsPerSecond = CONFIG.train.speed * state.speedMultiplier;
  train.setSpeed(unitsPerSecond);
  panel.setSpeed(state.speedMultiplier, unitsPerSecond);
}

function applyMode(mode) {
  state.mode = mode;
  lighting.setTimeOfDay(mode);
  panel.setMode(mode);
}

/** 复位：列车、暂停、速度、昼夜、机位/缩放/注视点全部回到初始确定值。 */
function resetAll() {
  state.paused = false;
  state.speedMultiplier = CONFIG.train.speedMultiplier.default;
  state.mode = INITIAL.timeOfDay;

  train.reset();
  train.setSpeed(CONFIG.train.speed * state.speedMultiplier);
  lighting.setTimeOfDay(state.mode);

  camera.zoom = CONFIG.camera.zoom.default;
  fitCamera(); // 位置、controls.target、视锥一起复原
  timer.reset(); // 丢弃复位瞬间累积的帧间隔，避免第一帧跳变

  panel.setPaused(false);
  panel.setSpeed(state.speedMultiplier, CONFIG.train.speed * state.speedMultiplier);
  panel.setMode(state.mode);
  refreshStatus();
}

/* ------------------------------------------------------------------ *
 * 输入
 * ------------------------------------------------------------------ */

window.addEventListener('keydown', (event) => {
  if (event.repeat || event.altKey || event.ctrlKey || event.metaKey) return;
  if (event.code === 'Space') {
    event.preventDefault(); // 同时阻断聚焦按钮的默认激活，避免双重切换
    setPaused(!state.paused);
  } else if (event.key === 'r' || event.key === 'R') {
    event.preventDefault();
    resetAll();
  }
});

function onResize() {
  const width = Math.max(1, window.innerWidth);
  const height = Math.max(1, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, CONFIG.render.maxPixelRatio));
  renderer.setSize(width, height);
  fitFrustum(); // 只重算视锥：保留用户当前的旋转与缩放
}

window.addEventListener('resize', onResize);

/* ------------------------------------------------------------------ *
 * 主循环
 * ------------------------------------------------------------------ */

// Timer.connect 用 Page Visibility API：页面隐藏时 delta 归零，回来不会瞬移
const timer = new THREE.Timer();
timer.connect(document);

let elapsed = 0;
let framesRendered = 0;
let lastFrameDt = 0; // 最近一帧真实 dt（审计用）

const loaderEl = document.querySelector('#loader');
let loaderHidden = false;

function hideLoader() {
  if (loaderHidden || !loaderEl) return;
  loaderHidden = true;
  loaderEl.classList.add('is-hidden');
  window.setTimeout(() => loaderEl.remove(), 620);
}

// 初始面板同步：倍率、单位速度、时段
applySpeed(state.speedMultiplier);
applyMode(state.mode);
panel.setPaused(state.paused);
refreshStatus();

function frame(timestamp) {
  requestAnimationFrame(frame);

  timer.update(timestamp);
  const dt = Math.min(timer.getDelta(), CONFIG.render.maxDelta);
  elapsed += dt;
  lastFrameDt = dt;

  // 暂停只冻结列车（含到站计时），水与光照继续演化
  if (!state.paused) lastTrainState = train.update(dt);

  lighting.update(dt, elapsed);
  terrain.update(dt, elapsed);
  controls.update();

  renderer.render(scene, camera);
  refreshStatus();

  if (framesRendered < 2) {
    framesRendered += 1;
    if (framesRendered === 2) hideLoader();
  }
}

requestAnimationFrame(frame);

/* ------------------------------------------------------------------ *
 * 只读诊断句柄（自动化验证/排查用，不参与渲染逻辑）
 * ------------------------------------------------------------------ */

/** 单个几何体最多检查的 position 分量数（全场景 position 合计远小于此，仅在异常巨型几何时截断） */
const AUDIT_COMPONENT_LIMIT = 1000000;

function materialLabel(material) {
  if (!material) return 'none';
  return material.name ? `${material.type}:${material.name}` : material.type;
}

/** 遍历场景做只读体检：绘制规模 + NaN/空几何 + 材质缺失/默认回退，不缓存、不改动任何物体 */
function auditScene() {
  const nanGeometries = [];
  const emptyMeshes = [];
  const missingMaterials = [];
  const defaultMaterials = [];
  const truncatedGeometries = [];
  const counts = { objects: 0, meshes: 0, triangles: 0, lines: 0, points: 0 };

  const scanGeometry = (geo, meshType, path, material) => {
    const pos = geo.attributes && geo.attributes.position;
    if (!pos) return;
    if (pos.count === 0) emptyMeshes.push({ path, type: meshType, material: materialLabel(material) });
    const end = Math.min(pos.array.length, AUDIT_COMPONENT_LIMIT);
    if (end < pos.array.length) {
      truncatedGeometries.push({ path, type: geo.type, checkedComponents: end, totalComponents: pos.array.length });
    }
    let nan = 0;
    let inf = 0;
    for (let i = 0; i < end; i++) {
      const v = pos.array[i];
      if (Number.isNaN(v)) nan += 1;
      else if (!Number.isFinite(v)) inf += 1;
    }
    if (nan > 0 || inf > 0) {
      nanGeometries.push({
        path,
        type: geo.type,
        uuid: geo.uuid, // 与 three 控制台警告里的 uuid 对照，便于定位来源
        material: materialLabel(material),
        vertexCount: pos.count,
        nanVerts: nan,
        infVerts: inf,
      });
    }
  };

  const walk = (obj, path) => {
    counts.objects += 1;
    if (obj.isMesh) {
      counts.meshes += 1;
      const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
      for (const m of mats) {
        if (!m) {
          missingMaterials.push({ path, type: obj.type });
        } else if (m.isMeshBasicMaterial) {
          // 引用了不存在的 MAT 键时会静默回退到 three 默认材质（白 Basic）
          defaultMaterials.push({
            path,
            type: obj.type,
            material: m.type,
            defaultish: !m.map && !m.name && !!m.color && m.color.getHex() === 0xffffff,
          });
        }
      }
      const geo = obj.geometry;
      const pos = geo && geo.attributes && geo.attributes.position;
      if (pos) {
        const instanced = obj.isInstancedMesh ? obj.count : 1;
        const verts = geo.index ? geo.index.count : pos.count;
        counts.triangles += Math.round((verts / 3) * instanced);
        scanGeometry(geo, obj.type, path, mats[0]);
      }
    } else if (obj.isLine || obj.isLineSegments || obj.isLineLoop) {
      counts.lines += 1;
    } else if (obj.isPoints) {
      counts.points += 1;
    }
    const children = obj.children || [];
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      const label = child.name || `${child.type}[${i}]`;
      walk(child, path ? `${path}/${label}` : label);
    }
  };

  for (let i = 0; i < scene.children.length; i++) {
    const child = scene.children[i];
    walk(child, child.name || `${child.type}[${i}]`);
  }

  const info = renderer.info;
  return {
    objects: counts.objects,
    meshes: counts.meshes,
    triangles: counts.triangles,
    lines: counts.lines,
    points: counts.points,
    drawCalls: info.render.calls,
    trianglesRendered: info.render.triangles,
    programs: info.programs ? info.programs.length : 0,
    textures: info.memory.textures,
    geometries: info.memory.geometries,
    nanGeometries,
    emptyMeshes,
    missingMaterials,
    defaultMaterials,
    truncatedGeometries,
    lastUpdate: { dt: lastFrameDt, elapsed },
  };
}

window.__railway = {
  version: '1.0.0',
  state: () => ({
    paused: state.paused,
    speedMultiplier: state.speedMultiplier,
    speed: train.getSpeed(), // 单位/秒
    mode: lighting.getMode(),
    trainArc01: lastTrainState.arc, // 列车中心弧长占比 0..1（暂停时保持冻结值）
    trainStopped: lastTrainState.stopped,
  }),
  camera: () => ({
    position: [camera.position.x, camera.position.y, camera.position.z],
    zoom: camera.zoom,
    target: [controls.target.x, controls.target.y, controls.target.z],
    ortho: [camera.left, camera.right, camera.top, camera.bottom],
  }),
  audit: () => auditScene(),
};

/* ------------------------------------------------------------------ *
 * 自检备注（临时，交付说明）
 * 1) fitCamera 取景算法：
 *    - 包围盒 8 角点 x ±22 / y -1.5..0.6 / z ±16.5，相对 controls.target 求差；
 *      分别点乘相机基向量 right = matrixWorld 第 0 列、up = 第 1 列，取 max|·| 得
 *      投影半宽 maxRight、投影半高 maxUp；
 *    - halfH = max(maxUp, maxRight / aspect) * CONFIG.camera.fitMargin，halfW = halfH * aspect；
 *    - 写入 camera.left/right/top/bottom（near/far 取 CONFIG.camera）并 updateProjectionMatrix。
 *      只有左右上下与 aspect 相关，于是任意窗口宽高比都完整看到沙盘；
 *    - fitFrustum() 只重算视锥（不动 zoom、不动机位），用于 resize 与 controls 'change'
 *      事件；fitCamera() = 机位复位 + 视锥重算，用于初始化与复位。
 * 2) 初始化调用顺序：
 *    renderer → scene → 相机(正交) → OrbitControls(+target/zoom) → fitCamera()
 *    → createTerrain/createTrack/createStation/createBuildings/createProps/createTrain/createLighting
 *    → scene.add 各 object3D → setAnisotropy(max) → lighting.setLightAnchors(station+props)
 *    → lighting.setTimeOfDay(INITIAL.timeOfDay) → createPanel(#ui, handlers)
 *    → applySpeed/applyMode/panel.setPaused/refreshStatus → requestAnimationFrame(frame)
 *    → 第 2 帧渲染后淡出并移除 #loader。
 * 3) 复位（resetAll）覆盖的状态：
 *    state.paused=false、state.speedMultiplier=speedMultiplier.default、state.mode=INITIAL.timeOfDay
 *    train.reset() + train.setSpeed(speed*倍率)、lighting.setTimeOfDay(INITIAL.timeOfDay)、
 *    camera.zoom=zoom.default、fitCamera()（相机位置/controls.target/正交视锥）、
 *    timer.reset() 丢弃累计 dt，最后回写面板（暂停态、倍率与单位速度、时段、状态文案）。
 * 4) window.__railway.audit()：只读遍历场景，统计 objects/meshes/triangles/lines/points 与
 *    renderer.info 的 drawCalls/programs/textures/geometries，并用 Number.isFinite 全量扫描
 *    position 分量（每几何体上限 100 万分量，超出则该几何体记入 truncatedGeometries）输出
 *    nanGeometries / emptyMeshes / missingMaterials / defaultMaterials / lastUpdate，
 *    不缓存、不修改任何物体；只覆盖场景图可达的对象，临时几何体不在其中。
 * 5) 列车状态：主循环保存 train.update(dt) 的返回值（暂停时不更新，因此 arc 保持冻结），
 *    state().trainArc01 直接取该返回值——train.update() 给出的 arc 已在 train.js 内按
 *    trackLength 归一化到 0..1，无需再除轨道总长。
 * ------------------------------------------------------------------ */
