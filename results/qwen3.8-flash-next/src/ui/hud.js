/**
 * HUD：纯 DOM 覆盖层（SPEC §6）。样式在本模块内注入 <style>（模块求值即注入，
 * 这样 #loading 首屏就是成品样式，不必等 createHud）。
 *
 * createHud({ setTone, setView, toggleRotate, info }) -> {
 *   setActiveTone(key), setActiveView(index), setRotate(on), setStats(s), refresh(), dispose()
 * }
 * hideLoading() / showFatal(title, err) —— 供 main.js 在首帧与出错时调用。
 *
 * 约定：
 * - HUD 不写死任何行为，一切通过回调注入；键盘/视角切换等外部改状态后调用 setActive* 同步高亮。
 * - info() 每 250ms 轮询一次：{ fps, calls, triangles, voxels, quads }（缺字段则显示 '—'）。
 * - 布局只占四角与底边，场景中央保持干净；窄屏（≤860px）折叠成两行并隐藏操作提示。
 */

import { TONES, TONE_ORDER, VIEWS } from '../config.js';

const STYLE_ID = 'vt-hud-style';

const CSS = `
:root {
  --vt-gold: #d9a441;
  --vt-gold-soft: rgba(217, 164, 65, .38);
  --vt-gold-line: rgba(217, 164, 65, .18);
  --vt-ink: #ece4d3;
  --vt-dim: rgba(236, 228, 211, .58);
  --vt-glass: rgba(12, 14, 19, .52);
  --vt-glass-2: rgba(16, 19, 25, .72);
}

/* ---- 启动遮罩（index.html 只提供结构与文案，样式在这里） ---- */
#loading {
  position: fixed; inset: 0; z-index: 50;
  display: flex; align-items: center; justify-content: center;
  background: radial-gradient(120% 90% at 50% 40%, #161a22 0%, #0b0d12 70%);
  color: var(--vt-ink);
  transition: opacity .55s ease;
  text-align: center;
}
#loading.vt-gone { opacity: 0; pointer-events: none; }
#loading .lb-inner { padding: 24px 32px; max-width: min(90vw, 620px); }
#loading .lb-title {
  font-size: 26px; letter-spacing: .5em; text-indent: .5em;
  color: var(--vt-gold); font-weight: 600;
}
#loading .lb-sub { margin-top: 12px; font-size: 12.5px; color: var(--vt-dim); letter-spacing: .18em; }
#loading .lb-bar {
  margin: 18px auto 0; width: 210px; height: 1px;
  background: linear-gradient(90deg, transparent, var(--vt-gold-soft), transparent);
  animation: vt-pulse 1.5s ease-in-out infinite;
}
#loading .lb-error {
  margin-top: 16px; padding: 10px 12px; text-align: left;
  font: 11.5px/1.65 ui-monospace, Consolas, monospace;
  color: #ffb9a8; background: rgba(120, 30, 20, .28);
  border: 1px solid rgba(255, 120, 90, .35); border-radius: 6px;
  white-space: pre-wrap; word-break: break-word; max-height: 42vh; overflow: auto;
}
@keyframes vt-pulse { 0%, 100% { opacity: .25 } 50% { opacity: 1 } }

/* ---- HUD ---- */
#hud { position: fixed; inset: 0; z-index: 20; pointer-events: none; color: var(--vt-ink); }
#hud * { pointer-events: auto; }
#hud .vt-panel {
  position: absolute;
  background: var(--vt-glass);
  border: 1px solid var(--vt-gold-line);
  border-radius: 10px;
  backdrop-filter: blur(9px) saturate(1.15);
  -webkit-backdrop-filter: blur(9px) saturate(1.15);
  box-shadow: 0 6px 26px rgba(0, 0, 0, .34);
}

/* 左上 标题 */
#hud .vt-head { top: 14px; left: 14px; padding: 11px 15px 12px; max-width: 46vw; }
#hud .vt-head h1 {
  margin: 0; font-size: 15.5px; font-weight: 600; letter-spacing: .16em;
  color: var(--vt-gold);
}
#hud .vt-head h1::after {
  content: ''; display: block; margin-top: 7px; width: 34px; height: 1px;
  background: var(--vt-gold-soft);
}
#hud .vt-head p {
  margin: 8px 0 0; font-size: 11.5px; line-height: 1.85; color: var(--vt-dim);
  letter-spacing: .04em;
}

/* 右上 性能 */
#hud .vt-perf {
  top: 14px; right: 14px; padding: 10px 13px; min-width: 132px;
  font: 11px/1.75 ui-monospace, Consolas, monospace;
  letter-spacing: .02em;
}
#hud .vt-perf .vt-row { display: flex; justify-content: space-between; gap: 14px; }
#hud .vt-perf .vt-k { color: rgba(236, 228, 211, .45); }
#hud .vt-perf .vt-v { color: var(--vt-gold); font-variant-numeric: tabular-nums; }
#hud .vt-perf .vt-v.warn { color: #f2a25b; }
#hud .vt-perf .vt-v.bad { color: #ef6a55; }

/* 底部 按钮条 */
#hud .vt-bar {
  left: 50%; bottom: 16px; transform: translateX(-50%);
  display: flex; align-items: center; gap: 10px; flex-wrap: wrap;
  justify-content: center; padding: 8px 10px; max-width: min(94vw, 900px);
}
#hud .vt-group {
  display: flex; align-items: center; gap: 4px; padding: 3px;
  border-radius: 8px; background: rgba(8, 10, 14, .42);
  border: 1px solid rgba(255, 255, 255, .045);
}
#hud .vt-cap {
  font-size: 10px; color: rgba(236, 228, 211, .4); letter-spacing: .18em;
  padding: 0 6px 0 4px;
}
#hud .vt-btn {
  appearance: none; border: 1px solid transparent; background: transparent;
  color: rgba(236, 228, 211, .78);
  font: inherit; font-size: 12px; letter-spacing: .1em;
  padding: 6px 11px; border-radius: 6px; cursor: pointer;
  transition: background .18s ease, color .18s ease, border-color .18s ease;
  white-space: nowrap;
}
#hud .vt-btn:hover { background: rgba(217, 164, 65, .12); color: var(--vt-ink); }
#hud .vt-btn:focus-visible { outline: 1px solid var(--vt-gold); outline-offset: 1px; }
#hud .vt-btn.on {
  background: linear-gradient(180deg, rgba(217, 164, 65, .26), rgba(217, 164, 65, .12));
  border-color: var(--vt-gold-soft); color: #ffe9bd;
}
#hud .vt-btn.on::before { content: '· '; color: var(--vt-gold); }
#hud .vt-sep { width: 1px; align-self: stretch; background: var(--vt-gold-line); }

/* 右下 操作提示 */
#hud .vt-hint {
  right: 14px; bottom: 16px; padding: 9px 12px;
  font-size: 11px; line-height: 1.9; color: var(--vt-dim); letter-spacing: .05em;
}
#hud .vt-hint b {
  color: var(--vt-gold); font-weight: 500; font-family: ui-monospace, Consolas, monospace;
  letter-spacing: 0;
}

/* 窄屏：折叠两行，隐藏提示 */
@media (max-width: 860px) {
  #hud .vt-head { max-width: 62vw; padding: 9px 12px 10px; }
  #hud .vt-head h1 { font-size: 13px; letter-spacing: .1em; }
  #hud .vt-head p { display: none; }
  #hud .vt-perf { padding: 7px 9px; min-width: 0; font-size: 10px; }
  #hud .vt-hint { display: none; }
  #hud .vt-bar {
    bottom: 10px; gap: 6px; padding: 7px; max-width: 96vw;
    flex-direction: column; align-items: stretch;
  }
  #hud .vt-group { justify-content: center; flex-wrap: wrap; }
  #hud .vt-sep { display: none; }
  #hud .vt-btn { padding: 6px 9px; font-size: 11.5px; }
}
`;

function ensureStyle() {
  if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return;
  const s = document.createElement('style');
  s.id = STYLE_ID;
  s.textContent = CSS;
  document.head.appendChild(s);
}

ensureStyle();

/* --------------------------------------------------------- loading */
function loadingEl() {
  return typeof document === 'undefined' ? null : document.getElementById('loading');
}

/** 首帧就绪后淡出关闭启动遮罩 */
export function hideLoading() {
  const el = loadingEl();
  if (!el) return;
  if (el.dataset.vtHidden === '1') return;
  el.dataset.vtHidden = '1';
  el.classList.add('vt-gone');
  window.setTimeout(() => { el.style.display = 'none'; }, 620);
}

/** 把致命错误显示在遮罩里（集成定位用），不要静默失败 */
export function showFatal(title, err) {
  const el = loadingEl();
  const text = err
    ? (err.stack || `${err.name || 'Error'}: ${err.message}`)
    : String(err || '');
  if (!el) {
    console.error(`[hud] ${title}`, err || '');
    return;
  }
  el.classList.remove('vt-gone');
  el.style.display = '';
  el.dataset.vtHidden = '0';
  const inner = el.querySelector('.lb-inner');
  if (!inner) return;
  const sub = inner.querySelector('.lb-sub');
  if (sub) sub.textContent = title;
  let pre = inner.querySelector('.lb-error');
  if (!pre) {
    pre = document.createElement('pre');
    pre.className = 'lb-error';
    inner.appendChild(pre);
  }
  pre.textContent = text;
}

/* ------------------------------------------------------------- HUD */
const TONE_LABELS = { dawn: '清晨', noon: '正午', dusk: '昏黄', night: '月夜' };

export function createHud({ setTone, setView, toggleRotate, info } = {}) {
  const root = typeof document === 'undefined' ? null : document.getElementById('hud');
  if (!root) {
    console.warn('[hud] 找不到 #hud，HUD 未挂载');
    return { setActiveTone() {}, setActiveView() {}, setRotate() {}, setStats() {}, refresh() {}, dispose() {} };
  }

  let activeTone = 'dawn';
  let activeView = 0;
  let rotateOn = true;

  const toneBtns = new Map();
  const viewBtns = new Map();
  let rotateBtn = null;

  const el = (tag, cls, text) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined) n.textContent = text;
    return n;
  };

  /* --- 左上：标题 + 建筑构成 --- */
  const head = el('div', 'vt-panel vt-head');
  const h1 = el('h1', null, '体素古建 · 中轴殿宇');
  const p = el('p', null,
    '中轴序列：照壁 → 山门 → 天王殿 → 大雄宝殿（三重台基 · 重檐庑殿）→ 藏经楼 → 舍利宝塔（八角七层）；'
    + '两侧钟鼓楼、东西配殿、碑亭与抄手游廊对称环列，外围宫墙四隅角楼。');
  head.append(h1, p);

  /* --- 右上：性能 --- */
  const perf = el('div', 'vt-panel vt-perf');
  const perfRows = {};
  for (const [k, label] of [['fps', 'FPS'], ['calls', 'DRAW'], ['tris', 'TRIS'], ['voxels', 'VOXEL']]) {
    const row = el('div', 'vt-row');
    const v = el('span', 'vt-v', '—');
    row.append(el('span', 'vt-k', label), v);
    perfRows[k] = v;
    perf.appendChild(row);
  }

  /* --- 底部：色调 / 视角 / 环绕 --- */
  const bar = el('div', 'vt-panel vt-bar');

  const toneGroup = el('div', 'vt-group');
  toneGroup.appendChild(el('span', 'vt-cap', '时辰'));
  for (const key of TONE_ORDER) {
    const label = (TONES[key] && (TONES[key].label || TONE_LABELS[key])) || key;
    const b = el('button', 'vt-btn', label);
    b.type = 'button';
    b.title = `${label} · 快捷键 ${TONE_ORDER.indexOf(key) + 1}`;
    b.setAttribute('aria-pressed', String(key === activeTone));
    b.addEventListener('click', () => {
      setActiveTone(key);
      if (setTone) setTone(key);
      else console.warn('[hud] 未注入 setTone 回调');
    });
    toneBtns.set(key, b);
    toneGroup.appendChild(b);
  }

  const viewGroup = el('div', 'vt-group');
  viewGroup.appendChild(el('span', 'vt-cap', '视角'));
  VIEWS.forEach((v, i) => {
    const b = el('button', 'vt-btn', v.name);
    b.type = 'button';
    b.title = `${v.name} · 第 ${i + 1} 机位`;
    b.setAttribute('aria-pressed', String(i === activeView));
    b.addEventListener('click', () => {
      setActiveView(i);
      if (setView) setView(i);
      else console.warn('[hud] 未注入 setView 回调');
    });
    viewBtns.set(i, b);
    viewGroup.appendChild(b);
  });

  rotateBtn = el('button', 'vt-btn on', '环绕');
  rotateBtn.type = 'button';
  rotateBtn.title = '自动环绕 · 快捷键 R';
  rotateBtn.setAttribute('aria-pressed', 'true');
  rotateBtn.addEventListener('click', () => {
    const next = !rotateOn;
    setRotate(next);
    if (toggleRotate) toggleRotate(next);
    else console.warn('[hud] 未注入 toggleRotate 回调');
  });

  const sep = el('div', 'vt-sep');
  bar.append(toneGroup, sep, viewGroup, rotateBtn);

  /* --- 右下：操作提示 --- */
  const hint = el('div', 'vt-panel vt-hint');
  const lines = [
    ['拖拽', '旋转视角'],
    ['滚轮', '推近拉远'],
    ['1 – 4', '切换时辰'],
    ['F', '循环机位'],
    ['R', '环绕开关'],
  ];
  for (const [k, v] of lines) {
    const row = el('div');
    const b = el('b', null, k);
    row.append(b, document.createTextNode(' ' + v));
    hint.appendChild(row);
  }

  root.append(head, perf, bar, hint);

  /* --- 状态同步 --- */
  function setActiveTone(key) {
    if (!TONES[key]) return;
    activeTone = key;
    for (const [k, b] of toneBtns) {
      const on = k === key;
      b.classList.toggle('on', on);
      b.setAttribute('aria-pressed', String(on));
    }
  }

  function setActiveView(index) {
    const i = Number(index) | 0;
    activeView = i;
    for (const [k, b] of viewBtns) {
      const on = k === i;
      b.classList.toggle('on', on);
      b.setAttribute('aria-pressed', String(on));
    }
  }

  function setRotate(on) {
    rotateOn = !!on;
    if (rotateBtn) {
      rotateBtn.classList.toggle('on', rotateOn);
      rotateBtn.setAttribute('aria-pressed', String(rotateOn));
      rotateBtn.textContent = rotateOn ? '环绕' : '静止';
    }
  }

  const fmt = (n) => {
    if (n === null || n === undefined || !Number.isFinite(n)) return '—';
    if (n >= 1000000) return (n / 1000000).toFixed(2) + 'M';
    if (n >= 10000) return (n / 1000).toFixed(1) + 'k';
    return String(Math.round(n));
  };

  function paint(name, value, text) {
    const node = perfRows[name];
    if (!node) return;
    node.textContent = text;
    node.classList.remove('warn', 'bad');
    if (name === 'fps' && typeof value === 'number') {
      if (value < 30) node.classList.add('bad');
      else if (value < 48) node.classList.add('warn');
    }
  }

  function setStats(s) {
    if (!s) return;
    paint('fps', s.fps, s.fps === undefined ? '—' : s.fps.toFixed(0));
    paint('calls', s.calls, fmt(s.calls));
    paint('tris', s.triangles ?? s.tris, fmt(s.triangles ?? s.tris));
    paint('voxels', s.voxels, fmt(s.voxels));
  }

  let timer = 0;
  function refresh() {
    if (typeof info !== 'function') return;
    try {
      setStats(info());
    } catch (err) {
      console.warn('[hud] info() 抛错', err);
    }
  }

  setActiveTone(activeTone);
  setActiveView(activeView);
  refresh();
  timer = window.setInterval(refresh, 250);

  return {
    setActiveTone,
    setActiveView,
    setRotate,
    setStats,
    refresh,
    get state() { return { activeTone, activeView, rotateOn }; },
    dispose() {
      window.clearInterval(timer);
      root.replaceChildren();
    },
  };
}
