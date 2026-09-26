/**
 * Entry point: build the site data, start the renderer, wire the HUD.
 */
import { createSceneData } from './scene-data.js';
import { createApp } from './renderer.js';

const container = document.getElementById('app');
const statsEl = document.getElementById('stats');
const loadingEl = document.getElementById('loading');
const buttons = Array.from(document.querySelectorAll('#tod button'));

const t0 = performance.now();
const data = createSceneData();
const app = createApp({ container, data });

let ready = false;
requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    ready = true;
    loadingEl.classList.add('hidden');
  });
});

function setTod(name) {
  if (!app.setTimeOfDay(name)) return;
  for (const b of buttons) b.setAttribute('aria-pressed', String(b.dataset.tod === name));
}

for (const b of buttons) b.addEventListener('click', () => setTod(b.dataset.tod));
window.addEventListener('keydown', (e) => {
  const map = { '1': 'morning', '2': 'noon', '3': 'dusk', '4': 'night' };
  if (map[e.key]) setTod(map[e.key]);
  if (e.key === ' ') {
    e.preventDefault();
    app.controls.autoRotate = !app.controls.autoRotate;
  }
});

function refreshStats() {
  const s = app.getState();
  statsEl.innerHTML =
    `建筑 <b>${data.buildingStats.length}</b> 座 · 体素 <b>${data.voxelCount.toLocaleString('en-US')}</b> · ` +
    `绘制调用 <b>${s.render.calls}</b> · 三角面 <b>${(s.render.triangles / 1000).toFixed(0)}k</b><br />` +
    `时段 <b>${s.timeOfDay}</b> · FPS <b>${s.fps.p50 || '—'}</b>`;
}
refreshStats();
setInterval(refreshStats, 500);

// Verification / debugging handle (used by _verify/verify_scene.py)
window.__scene = {
  app,
  data,
  renderer: app.renderer,
  scene: app.scene,
  camera: app.camera,
  controls: app.controls,
  setTimeOfDay: setTod,
  setView: app.setView,
  getState: app.getState,
  measureFps: app.measureFps,
  captureStats: app.captureStats,
  isReady: () => ready,
  buildMs: data.buildMs,
  startupMs: Math.round(performance.now() - t0),
  voxelCount: data.voxelCount,
  buildingCount: data.buildingStats.length,
  drawCalls: data.drawCalls,
  paletteKeysUsed: data.paletteKeysUsed,
  symmetry: data.symmetry,
  colorSymmetry: data.colorSymmetry,
  archBounds: data.archBounds,
  cameraFit: data.camera,
};
