import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { KeyboardModel } from './keyboard.js';
import { CASES, THEMES, DEFAULTS, loadConfig, saveConfig, clearConfig, findCase, findTheme } from './config.js';
import { initUI } from './ui.js';
import { setSound, thock } from './audio.js';

/* ---------------- 渲染器与场景 ---------------- */

const stage = document.getElementById('stage');

let renderer;
try {
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
} catch (err) {
  stage.innerHTML = '<p class="webgl-fallback">当前浏览器不支持 WebGL，无法渲染 3D 预览。</p>';
  throw err;
}
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.12;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
// 上下文丢失时允许浏览器恢复（three 会自动重建 GPU 资源）
renderer.domElement.addEventListener('webglcontextlost', (e) => e.preventDefault());
stage.appendChild(renderer.domElement);

const scene = new THREE.Scene();
{
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  pmrem.dispose();
}

const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 200);

// 灯光：主光（投影）+ 冷色轮廓光 + 柔和半球补光
const keyLight = new THREE.DirectionalLight(0xffffff, 2.4);
keyLight.position.set(6, 14, 7);
keyLight.castShadow = true;
keyLight.shadow.mapSize.set(2048, 2048);
keyLight.shadow.camera.left = -14;
keyLight.shadow.camera.right = 14;
keyLight.shadow.camera.top = 14;
keyLight.shadow.camera.bottom = -14;
keyLight.shadow.camera.near = 2;
keyLight.shadow.camera.far = 42;
keyLight.shadow.bias = -0.0003;
keyLight.shadow.normalBias = 0.02;
scene.add(keyLight);

const rimLight = new THREE.DirectionalLight(0x8fb0ff, 0.9);
rimLight.position.set(-9, 7, -10);
scene.add(rimLight);

scene.add(new THREE.HemisphereLight(0xdfe8ff, 0x14161a, 0.45));

// 地面：只接影
const ground = new THREE.Mesh(
  new THREE.CircleGeometry(40, 64).rotateX(-Math.PI / 2),
  new THREE.ShadowMaterial({ opacity: 0.28 })
);
ground.receiveShadow = true;
scene.add(ground);

const keyboard = new KeyboardModel(renderer.capabilities.getMaxAnisotropy());
scene.add(keyboard.root);

/* ---------------- 相机与控制 ---------------- */

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.enablePan = false;
controls.minDistance = 7;
controls.maxDistance = 48;
controls.minPolarAngle = 0.05;
controls.maxPolarAngle = 1.5;
controls.target.set(0, 0.9, 0);

/** 按舞台宽高比计算能完整框住键盘的默认机位 */
function defaultPose() {
  const w = stage.clientWidth || 1280;
  const h = stage.clientHeight || 800;
  const aspect = w / h;
  const vFov = (camera.fov * Math.PI) / 180;
  const hFov = 2 * Math.atan(Math.tan(vFov / 2) * aspect);
  let dist = 9.8 / Math.tan(hFov / 2); // 键盘半宽 8.5 + 余量
  dist = Math.max(dist, 14);
  const az = 0.52;
  const el = 0.5;
  const target = new THREE.Vector3(0, 0.9, 0);
  const pos = new THREE.Vector3(
    target.x + dist * Math.sin(az) * Math.cos(el),
    target.y + dist * Math.sin(el),
    target.z + dist * Math.cos(az) * Math.cos(el)
  );
  return { pos, target };
}

// 相机飞行（开场 / 复位视角）
const fly = { active: false, t0: 0, dur: 0, fromPos: new THREE.Vector3(), toPos: new THREE.Vector3(), fromTarget: new THREE.Vector3(), toTarget: new THREE.Vector3() };
function flyTo(pose, dur) {
  fly.active = true;
  fly.t0 = performance.now();
  fly.dur = dur * 1000;
  fly.fromPos.copy(camera.position);
  fly.toPos.copy(pose.pos);
  fly.fromTarget.copy(controls.target);
  fly.toTarget.copy(pose.target);
}
function updateFly() {
  if (!fly.active) return;
  const t = Math.min(1, (performance.now() - fly.t0) / fly.dur);
  const k = 1 - Math.pow(1 - t, 3);
  camera.position.lerpVectors(fly.fromPos, fly.toPos, k);
  controls.target.lerpVectors(fly.fromTarget, fly.toTarget, k);
  if (t >= 1) fly.active = false;
}
let userMoved = false;
controls.addEventListener('start', () => {
  userMoved = true;
  fly.active = false;
});

/* ---------------- 状态与 UI ---------------- */

const state = { ...DEFAULTS, ...loadConfig() };

function persist() {
  saveConfig(state);
  ui.markSaved();
}

const ui = initUI(state, {
  onCase(id) {
    state.caseId = id;
    keyboard.applyCase(findCase(id));
    persist();
    ui.sync(state);
  },
  onTheme(id) {
    state.themeId = id;
    keyboard.applyTheme(findTheme(id));
    persist();
    ui.sync(state);
  },
  onExplode(v) {
    state.exploded = v;
    keyboard.setExploded(v);
    persist();
    ui.sync(state);
  },
  onExperience(v) {
    state.experience = v;
    persist();
    ui.sync(state);
  },
  onSound() {
    state.sound = !state.sound;
    setSound(state.sound);
    persist();
    ui.sync(state);
  },
  onResetView() {
    flyTo(defaultPose(), 0.9);
  },
  onResetDefaults() {
    clearConfig();
    Object.assign(state, DEFAULTS);
    setSound(state.sound);
    keyboard.applyCase(findCase(state.caseId));
    keyboard.applyTheme(findTheme(state.themeId));
    keyboard.setExploded(state.exploded);
    ui.sync(state);
    document.getElementById('savedAt').textContent = '已恢复默认 · 未保存任何自定义配置';
  },
});

// 初始应用配置
setSound(state.sound);
keyboard.applyCase(findCase(state.caseId));
keyboard.applyTheme(findTheme(state.themeId));
keyboard.startFromExploded(); // 开场：从拆解态平滑组装
keyboard.setExploded(state.exploded);
ui.sync(state);

/* ---------------- 交互：物理键盘 ---------------- */

const TYPING_SELECTOR = 'input, textarea, select, [contenteditable=""], [contenteditable="true"]';

window.addEventListener('keydown', (e) => {
  if (!state.experience) return;
  const el = e.target;
  if (el && el.closest && el.closest(TYPING_SELECTOR)) return; // 输入控件获焦时不打扰打字
  if (!keyboard.pressByCode(e.code)) return;
  if (!e.repeat) thock();
});
window.addEventListener('keyup', (e) => keyboard.releaseByCode(e.code));
window.addEventListener('blur', () => keyboard.releaseAll());

/* ---------------- 交互：指针（悬停 / 点键帽试轴） ---------------- */

const ndc = new THREE.Vector2();
let hoverPointer = null;
let downInfo = null;

function pick(clientX, clientY) {
  const rect = renderer.domElement.getBoundingClientRect();
  ndc.set(((clientX - rect.left) / rect.width) * 2 - 1, -((clientY - rect.top) / rect.height) * 2 + 1);
  return keyboard.raycast(ndc, camera);
}

renderer.domElement.addEventListener('pointermove', (e) => {
  hoverPointer = { x: e.clientX, y: e.clientY };
});
renderer.domElement.addEventListener('pointerleave', () => {
  hoverPointer = null;
  keyboard.setHover(null);
  renderer.domElement.style.cursor = '';
});
renderer.domElement.addEventListener('pointerdown', (e) => {
  fly.active = false;
  userMoved = true;
  const key = pick(e.clientX, e.clientY);
  if (key) {
    keyboard.pressKey(key);
    thock();
    downInfo = { key };
  }
});
window.addEventListener('pointerup', () => {
  if (downInfo) {
    keyboard.releaseKey(downInfo.key);
    downInfo = null;
  }
});
window.addEventListener('pointercancel', () => {
  if (downInfo) {
    keyboard.releaseKey(downInfo.key);
    downInfo = null;
  }
});

function updateHover() {
  if (!hoverPointer) return;
  const key = pick(hoverPointer.x, hoverPointer.y);
  keyboard.setHover(key);
  renderer.domElement.style.cursor = key ? 'pointer' : '';
}

/* ---------------- 自适应尺寸 ---------------- */

function resize() {
  const w = stage.clientWidth;
  const h = stage.clientHeight;
  if (!w || !h) return;
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
  if (!userMoved) {
    const pose = defaultPose();
    camera.position.copy(pose.pos);
    controls.target.copy(pose.target);
  }
}
new ResizeObserver(resize).observe(stage);
resize();

/* ---------------- 开场动画 ---------------- */

{
  const pose = defaultPose();
  const start = pose.pos
    .clone()
    .sub(pose.target)
    .applyAxisAngle(new THREE.Vector3(0, 1, 0), 0.55)
    .multiplyScalar(1.22)
    .add(pose.target);
  camera.position.copy(start);
  controls.target.copy(pose.target);
  flyTo(pose, 1.6);
}

/* ---------------- 渲染循环 ---------------- */

const clock = new THREE.Clock();
function tick() {
  requestAnimationFrame(tick);
  const dt = Math.min(clock.getDelta(), 0.05);
  controls.update();
  keyboard.update(dt);
  updateHover();
  updateFly();
  renderer.render(scene, camera);
}
tick();

// 调试句柄：控制台 / 自动化测试可用来检查模型状态
window.__axis68 = keyboard;
