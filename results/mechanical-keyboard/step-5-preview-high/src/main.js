// 入口：场景装配、输入交互（键盘 / 指针）、状态与界面连接
import * as THREE from 'three';
import { createScene } from './scene.js';
import { buildKeyboard } from './keyboard.js';
import { initUI } from './ui.js';
import { state } from './state.js';
import { audio } from './audio.js';
import { CASE_THEMES, CAP_THEMES } from './config.js';

window.addEventListener('error', (e) => {
  const el = document.getElementById('fatal');
  if (el) {
    el.hidden = false;
    el.textContent = `页面出错：${e.message}`;
  }
});

// —— 场景与模型 ——
const canvas = document.getElementById('scene');
let sceneApi;
try {
  sceneApi = createScene(canvas);
} catch (err) {
  document.getElementById('fatal').hidden = false;
  document.getElementById('fatal').textContent = `WebGL 初始化失败：${err.message}`;
  throw err;
}

const kb = buildKeyboard();
sceneApi.scene.add(kb.group);
sceneApi.setHomeFrom(kb.group);
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  sceneApi.playIntro();
}

const ui = initUI({
  onConfig: (patch) => state.set(patch),
  onReset: () => state.reset(),
  onResetView: () => sceneApi.resetView(),
  onSound: (v) => {
    audio.enabled = v;
  },
});

// 主题 / 声音 跟随本地配置（订阅会立即用当前配置执行一次）
state.subscribe((cfg) => {
  kb.setCaseTheme(CASE_THEMES.find((t) => t.id === cfg.case) ?? CASE_THEMES[0]);
  kb.setCapTheme(CAP_THEMES.find((t) => t.id === cfg.caps) ?? CAP_THEMES[0]);
  audio.enabled = cfg.sound;
});

// —— 按键与指针交互 ——
const raycaster = new THREE.Raycaster();
const pointerNDC = new THREE.Vector2();
let hoverId = null;

function pickCap(ev) {
  const rect = canvas.getBoundingClientRect();
  pointerNDC.x = ((ev.clientX - rect.left) / rect.width) * 2 - 1;
  pointerNDC.y = -((ev.clientY - rect.top) / rect.height) * 2 + 1;
  raycaster.setFromCamera(pointerNDC, sceneApi.camera);
  const hits = raycaster.intersectObjects(kb.capMeshes, false);
  if (!hits.length) return null;
  const classIndex = kb.capMeshes.indexOf(hits[0].object);
  return kb.caps.find((c) => c.ci === classIndex && c.inst === hits[0].instanceId) ?? null;
}

function pressCap(id) {
  if (!kb.press(id, true)) return;
  audio.down();
  ui.pushChar(id === 'space' ? '␣' : id.length === 1 ? id.toUpperCase() : id);
  ui.addHit();
}

function releaseCap(id) {
  if (!kb.press(id, false)) return;
  audio.up();
}

function tapCap(id) {
  if (!kb.press(id, true)) return;
  audio.down();
  ui.pushChar(id === 'space' ? '␣' : id.length === 1 ? id.toUpperCase() : id);
  ui.addHit();
  window.setTimeout(() => {
    kb.press(id, false);
    audio.up();
  }, 150);
}

// 物理键盘：仅在体验模式下接管，且焦点在输入控件时完全放行
function codeToId(code) {
  if (code === 'Space') return 'space';
  if (/^Key[A-Z]$/.test(code)) return code.slice(3).toLowerCase();
  return null;
}
window.addEventListener('keydown', (e) => {
  if (!state.cfg.experience || e.repeat) return;
  const t = e.target;
  if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT' || t.isContentEditable)) return;
  const id = codeToId(e.code);
  if (!id) return;
  if (e.code === 'Space') e.preventDefault();
  pressCap(id);
});
window.addEventListener('keyup', (e) => {
  if (!state.cfg.experience) return;
  const id = codeToId(e.code);
  if (id) releaseCap(id);
});
window.addEventListener('blur', () => kb.releaseAll());

// 指针：拖拽由 OrbitControls 处理，位移小于阈值的抬起视为“点按”
let downAt = null;
let downCap = null;
canvas.addEventListener('pointerdown', (e) => {
  downAt = { x: e.clientX, y: e.clientY };
  downCap = pickCap(e);
});
canvas.addEventListener('pointerup', (e) => {
  if (downAt && Math.hypot(e.clientX - downAt.x, e.clientY - downAt.y) < 6) {
    const cap = pickCap(e) ?? downCap;
    if (cap) tapCap(cap.id);
  }
  downAt = null;
  downCap = null;
});
canvas.addEventListener('pointerleave', () => {
  hoverId = null;
  canvas.style.cursor = 'grab';
});
canvas.addEventListener('pointermove', (e) => {
  const cap = pickCap(e);
  hoverId = cap ? cap.id : null;
  canvas.style.cursor = cap ? 'pointer' : 'grab';
});

// —— 主循环 ——
sceneApi.onFrame = (dt) => {
  kb.update(dt, { explode: state.cfg.exploded, hoverId });
};

// 调试钩子
window.__app = { THREE, sceneApi, kb, state };
