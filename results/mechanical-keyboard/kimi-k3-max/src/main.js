import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { createKeyboard } from './keyboard.js';
import { CASE_COLORS, KEYCAP_THEMES } from './layout.js';
import './style.css';

const STORAGE_KEY = 'prism68.config.v1';

/* ---------------- 状态与持久化 ---------------- */

const DEFAULT_CONFIG = { caseId: 'obsidian', keycapId: 'fog' };

function loadConfig() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULT_CONFIG };
    const parsed = JSON.parse(raw);
    return {
      caseId: CASE_COLORS.some((c) => c.id === parsed.caseId) ? parsed.caseId : DEFAULT_CONFIG.caseId,
      keycapId: KEYCAP_THEMES.some((t) => t.id === parsed.keycapId) ? parsed.keycapId : DEFAULT_CONFIG.keycapId,
    };
  } catch {
    return { ...DEFAULT_CONFIG };
  }
}

const state = {
  config: loadConfig(),
  explodeTarget: 0,
  explodeProgress: 0,
  typingMode: false,
};

function saveConfig() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.config));
    const el = document.getElementById('save-state');
    el.textContent = '配置已自动保存';
    el.classList.remove('flash');
    void el.offsetWidth;
    el.classList.add('flash');
  } catch {
    /* 隐私模式等场景下静默失败 */
  }
}

/* ---------------- 场景 ---------------- */

const canvas = document.getElementById('scene');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
renderer.outputColorSpace = THREE.SRGBColorSpace;

const scene = new THREE.Scene();
const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
const INITIAL_CAM_POS = new THREE.Vector3(8.3, 7.8, 14.8);
const INITIAL_TARGET = new THREE.Vector3(0, 0.35, 0.1);
camera.position.copy(INITIAL_CAM_POS);

const controls = new OrbitControls(camera, canvas);
controls.target.copy(INITIAL_TARGET);
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.minDistance = 5;
controls.maxDistance = 26;
controls.maxPolarAngle = Math.PI * 0.52;
controls.update();

/* ----- 灯光 ----- */
scene.add(new THREE.HemisphereLight(0xdfe8ff, 0x1a1614, 0.55));

const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
keyLight.position.set(6, 10, 7);
keyLight.castShadow = true;
keyLight.shadow.mapSize.set(2048, 2048);
keyLight.shadow.camera.left = keyLight.shadow.camera.bottom = -10;
keyLight.shadow.camera.right = keyLight.shadow.camera.top = 10;
keyLight.shadow.bias = -0.0004;
keyLight.shadow.radius = 6;
scene.add(keyLight);

const rimLight = new THREE.DirectionalLight(0x8fb4ff, 0.9);
rimLight.position.set(-8, 5, -6);
scene.add(rimLight);

/* ----- 地面阴影 ----- */
const ground = new THREE.Mesh(
  new THREE.PlaneGeometry(60, 60),
  new THREE.ShadowMaterial({ opacity: 0.32 })
);
ground.rotation.x = -Math.PI / 2;
ground.position.y = -0.02;
ground.receiveShadow = true;
scene.add(ground);

/* ----- 键盘 ----- */
const keyboard = createKeyboard();
keyboard.group.rotation.x = 0.07; // 打字倾角：后排抬起
scene.add(keyboard.group);

applyConfigToScene();

function applyConfigToScene() {
  const caseColor = CASE_COLORS.find((c) => c.id === state.config.caseId);
  const theme = KEYCAP_THEMES.find((t) => t.id === state.config.keycapId);
  keyboard.setCaseColor(caseColor.hex);
  keyboard.setKeycapTheme(theme);
}

/* ---------------- 音效（WebAudio 合成按键声） ---------------- */

let audioCtx = null;
function playClick() {
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const t = audioCtx.currentTime;
    // 噪声段落模拟键帽触底
    const dur = 0.05;
    const buffer = audioCtx.createBuffer(1, audioCtx.sampleRate * dur, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / data.length, 2.2);
    }
    const noise = audioCtx.createBufferSource();
    noise.buffer = buffer;
    const filter = audioCtx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 1800 + Math.random() * 900;
    filter.Q.value = 1.1;
    const gain = audioCtx.createGain();
    gain.gain.setValueAtTime(0.22, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + dur);
    noise.connect(filter).connect(gain).connect(audioCtx.destination);
    noise.start(t);
  } catch {
    /* 无音频设备时忽略 */
  }
}

/* ---------------- 试打交互 ---------------- */

const pressedCodes = new Set();

function isTypingTarget(el) {
  if (!el) return false;
  const tag = el.tagName;
  return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || el.isContentEditable;
}

window.addEventListener('keydown', (e) => {
  if (!state.typingMode || isTypingTarget(e.target)) return;
  const code = e.code;
  if (!keyboard.keysByCode.has(code)) return;
  if (/^(Key[A-Z]|Space)$/.test(code) || keyboard.keysByCode.has(code)) e.preventDefault();
  if (pressedCodes.has(code)) return;
  pressedCodes.add(code);
  if (keyboard.setPressed(code, true)) playClick();
});

window.addEventListener('keyup', (e) => {
  if (!pressedCodes.has(e.code)) return;
  pressedCodes.delete(e.code);
  keyboard.setPressed(e.code, false);
});

// 触摸 / 鼠标点击键帽（区分拖拽旋转与点按）
const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
let downPos = null;

canvas.addEventListener('pointerdown', (e) => {
  downPos = { x: e.clientX, y: e.clientY };
});

canvas.addEventListener('pointerup', (e) => {
  if (!downPos) return;
  const moved = Math.hypot(e.clientX - downPos.x, e.clientY - downPos.y);
  downPos = null;
  if (moved > 6) return; // 视为拖拽视角
  const rect = canvas.getBoundingClientRect();
  pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
  pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
  raycaster.setFromCamera(pointer, camera);
  const hits = raycaster.intersectObjects(keyboard.layers.keycapsGroup.children, true);
  const hit = hits.find((h) => h.object.userData.key);
  if (hit) {
    const key = hit.object.userData.key;
    key.pressTarget = -0.17;
    playClick();
    setTimeout(() => { key.pressTarget = 0; }, 130);
  }
});

/* ---------------- UI ---------------- */

function buildSwatches(containerId, items, getActiveId, onPick) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  for (const item of items) {
    const btn = document.createElement('button');
    btn.className = 'swatch' + (item.id === getActiveId() ? ' active' : '');
    btn.type = 'button';
    btn.style.setProperty('--c1', item.chip[0]);
    btn.style.setProperty('--c2', item.chip[1]);
    btn.innerHTML = `<span class="chip"></span><span>${item.name}</span>`;
    btn.addEventListener('click', () => onPick(item));
    container.appendChild(btn);
  }
}

function refreshUI() {
  const caseColor = CASE_COLORS.find((c) => c.id === state.config.caseId);
  const theme = KEYCAP_THEMES.find((t) => t.id === state.config.keycapId);
  document.getElementById('case-name').textContent = caseColor.name;
  document.getElementById('keycap-name').textContent = theme.name;
  document.getElementById('sum-case').innerHTML =
    `<i class="mini-dot" style="background:${caseColor.hex}"></i>${caseColor.name}`;
  document.getElementById('sum-keycap').innerHTML =
    `<i class="mini-dot" style="background:${theme.alpha}"></i>${theme.name}`;
  buildSwatches('case-swatches', CASE_COLORS, () => state.config.caseId, (item) => {
    state.config.caseId = item.id;
    keyboard.setCaseColor(item.hex);
    saveConfig();
    refreshUI();
  });
  buildSwatches('keycap-swatches', KEYCAP_THEMES, () => state.config.keycapId, (item) => {
    state.config.keycapId = item.id;
    keyboard.setKeycapTheme(item);
    saveConfig();
    refreshUI();
  });
}

refreshUI();

/* ----- 拆解 / 组装 ----- */
const explodeBtn = document.getElementById('explode-btn');
explodeBtn.addEventListener('click', () => {
  state.explodeTarget = state.explodeTarget === 1 ? 0 : 1;
  explodeBtn.setAttribute('aria-pressed', String(state.explodeTarget === 1));
  explodeBtn.querySelector('.ctl-title').textContent =
    state.explodeTarget === 1 ? '组装复原' : '拆解视图';
});

/* ----- 试打模式 ----- */
const typingBtn = document.getElementById('typing-btn');
const typingBanner = document.getElementById('typing-banner');
typingBtn.addEventListener('click', () => {
  state.typingMode = !state.typingMode;
  typingBtn.setAttribute('aria-pressed', String(state.typingMode));
  typingBanner.hidden = !state.typingMode;
  if (!state.typingMode) {
    for (const code of pressedCodes) keyboard.setPressed(code, false);
    pressedCodes.clear();
  }
});

/* ----- 视角复位（平滑过渡） ----- */
let viewTween = null;
document.getElementById('reset-view-btn').addEventListener('click', () => {
  viewTween = {
    t: 0,
    fromPos: camera.position.clone(),
    fromTarget: controls.target.clone(),
  };
});

/* ----- 恢复默认 ----- */
document.getElementById('reset-config-btn').addEventListener('click', () => {
  try { localStorage.removeItem(STORAGE_KEY); } catch { /* ignore */ }
  state.config = { ...DEFAULT_CONFIG };
  applyConfigToScene();
  refreshUI();
  const el = document.getElementById('save-state');
  el.textContent = '已恢复默认配置';
});

/* ---------------- 尺寸与渲染循环 ---------------- */

function resize() {
  const { clientWidth: w, clientHeight: h } = canvas.parentElement;
  if (canvas.width !== w || canvas.height !== h) {
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
}
window.addEventListener('resize', resize);

const clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);
  resize();
  const dt = Math.min(clock.getDelta(), 0.05);

  // 拆解进度：向目标值平滑逼近，快速反复点击也能回到正确位置
  const speed = 2.4;
  state.explodeProgress += Math.sign(state.explodeTarget - state.explodeProgress) *
    Math.min(Math.abs(state.explodeTarget - state.explodeProgress), dt * speed);
  const p = state.explodeProgress;
  const eased = p * p * (3 - 2 * p); // smoothstep
  keyboard.update(dt, eased);

  // 视角复位补间
  if (viewTween) {
    viewTween.t += dt / 0.7;
    const t = Math.min(viewTween.t, 1);
    const e = 1 - Math.pow(1 - t, 3);
    camera.position.lerpVectors(viewTween.fromPos, INITIAL_CAM_POS, e);
    controls.target.lerpVectors(viewTween.fromTarget, INITIAL_TARGET, e);
    if (t >= 1) viewTween = null;
  }

  controls.update();
  renderer.render(scene, camera);
}

animate();
