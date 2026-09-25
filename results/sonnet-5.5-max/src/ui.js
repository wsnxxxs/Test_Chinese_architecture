// HUD wiring: time-of-day presets, camera views, toggles, stats, keyboard shortcuts.
import { PRESETS } from './scene/timeOfDay.js';
import { VIEWS, VIEW_ORDER } from './scene/views.js';

const $ = (id) => document.getElementById(id);

const clockText = (t) => {
  const mins = Math.round(t * 24 * 60) % (24 * 60);
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
};

export function setupUI(app) {
  const { tod, controls } = app;
  const slider = $('time-slider');
  const presetsEl = $('time-presets');
  const presetBtns = new Map();

  // ---- time presets ------------------------------------------------------------------
  for (const p of PRESETS) {
    const b = document.createElement('button');
    b.className = 'btn';
    b.textContent = p.label;
    b.dataset.t = String(p.t);
    b.addEventListener('click', () => {
      app.tweenTime(p.t);
    });
    presetsEl.appendChild(b);
    presetBtns.set(p.id, b);
  }

  const syncTime = () => {
    const t = tod.t;
    slider.value = String(Math.round(t * 1000));
    $('clock').textContent = clockText(t);
    let best = null;
    let bestD = 1;
    for (const p of PRESETS) {
      const d = Math.min(Math.abs(p.t - t), 1 - Math.abs(p.t - t));
      if (d < bestD) {
        bestD = d;
        best = p.id;
      }
    }
    for (const [id, b] of presetBtns) b.classList.toggle('on', bestD < 0.028 && id === best);
  };
  app.syncTime = syncTime;
  slider.addEventListener('input', () => {
    app.cancelTimeTween();
    tod.auto = false;
    $('btn-cycle').classList.remove('on');
    tod.set(parseInt(slider.value, 10) / 1000);
    syncTime();
  });
  syncTime();

  // ---- toggles ---------------------------------------------------------------------------
  const toggle = (id, fn) => {
    const el = $(id);
    el.addEventListener('click', () => fn(el));
    return el;
  };
  const setLabels = (on) => {
    document.body.classList.toggle('no-labels', !on);
    $('btn-labels').classList.toggle('on', on);
    app.labelsOn = on;
  };
  toggle('btn-labels', () => setLabels(!app.labelsOn));
  setLabels(true);

  const setRotate = (on) => {
    controls.autoRotate = on;
    $('btn-rotate').classList.toggle('on', on);
  };
  toggle('btn-rotate', () => setRotate(!controls.autoRotate));

  const setCycle = (on) => {
    tod.auto = on;
    $('btn-cycle').classList.toggle('on', on);
    if (on) app.cancelTimeTween();
  };
  toggle('btn-cycle', () => setCycle(!tod.auto));

  const qOrder = ['auto', 'high', 'medium', 'low', 'lite'];
  const qLabel = { auto: '自动', high: '高', medium: '中', low: '低', lite: '极简' };
  const setQuality = (m) => {
    app.setQuality(m);
    $('btn-quality').textContent = `画质·${qLabel[m]}`;
  };
  toggle('btn-quality', () => setQuality(qOrder[(qOrder.indexOf(app.qualityMode) + 1) % qOrder.length]));

  toggle('btn-shot', () => app.screenshot());

  // ---- views -------------------------------------------------------------------------------
  const viewBtns = [...document.querySelectorAll('[data-view]')];
  const setViewBtn = (name) => viewBtns.forEach((b) => b.classList.toggle('on', b.dataset.view === name));
  app.onViewChange = setViewBtn;
  for (const b of viewBtns) b.addEventListener('click', () => app.goView(b.dataset.view));

  if (app.params.get('hud') === '0') document.body.classList.add('no-hud');
  if (app.params.get('labels') === '0') setLabels(false);

  // ---- keyboard ------------------------------------------------------------------------------
  window.addEventListener('keydown', (e) => {
    if (e.target && /input|textarea/i.test(e.target.tagName)) return;
    const k = e.key.toLowerCase();
    if (k >= '1' && k <= '6') app.goView(VIEW_ORDER[parseInt(k, 10) - 1]);
    else if (k === 'l') setLabels(!app.labelsOn);
    else if (k === 'c') setCycle(!tod.auto);
    else if (k === 'r') setRotate(!controls.autoRotate);
    else if (k === 'h') document.body.classList.toggle('no-hud');
    else if (k === 'p') app.screenshot();
    else if (k === 'q') setQuality(qOrder[(qOrder.indexOf(app.qualityMode) + 1) % qOrder.length]);
  });

  return { setLabels, setRotate, setCycle, setQuality, syncTime };
}

export { VIEWS };
