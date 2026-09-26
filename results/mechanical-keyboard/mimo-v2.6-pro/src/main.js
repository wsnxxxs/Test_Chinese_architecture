/**
 * LUMEN 68 — 页面装配与交互
 * 3D 舞台由 Three.js 渲染，配置界面为普通 HTML/CSS 控件
 */
import { createStore } from './state.js';
import { createKeyboard } from './scene/keyboard.js';
import { createViewer } from './scene/viewer.js';
import {
  CASE_COLORS,
  KEYCAP_THEMES,
  SWITCH_TYPES,
  findItem,
  DEFAULT_ENGRAVE,
} from './data/themes.js';
import { KEY_COUNT, ROWS, COLS } from './data/layout.js';

const $ = (id) => document.getElementById(id);

// ---------- 状态 ----------
const store = createStore();
const keyboard = createKeyboard();

function hideLoading() {
  $('loading').classList.add('hidden');
}

const viewer = createViewer({
  canvas: $('scene'),
  container: $('canvasWrap'),
  keyboard,
  onFirstFrame: hideLoading,
});

// ---------- 选项卡片 ----------
function optionCard({ id, name, desc, swatch, swatchDuo, feel, selected }) {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'opt';
  btn.dataset.id = id;
  btn.setAttribute('aria-pressed', String(selected));
  const swatchHtml = swatchDuo
    ? `<div class="swatch duo">${swatchDuo
        .map((c) => `<span style="background:${c}"></span>`)
        .join('')}</div>`
    : `<div class="swatch" style="background:${swatch}"></div>`;
  btn.innerHTML = `
    <span class="check" aria-hidden="true">✓</span>
    ${swatchHtml}
    <span class="opt-name">${name}</span>
    ${feel ? `<span class="opt-feel">${feel}</span>` : ''}
    <span class="opt-desc">${desc}</span>
  `;
  return btn;
}

function renderOptions(container, items, currentId, onPick) {
  container.innerHTML = '';
  items.forEach((item) => {
    const btn = optionCard({ ...item, selected: item.id === currentId });
    btn.addEventListener('click', () => onPick(item.id));
    container.appendChild(btn);
  });
}

function syncOptions(container, currentId) {
  container.querySelectorAll('.opt').forEach((el) => {
    el.setAttribute('aria-pressed', String(el.dataset.id === currentId));
  });
}

// ---------- 摘要 ----------
function summaryRow(label, value, sub, extra = '') {
  return `<div class="row"><dt>${label}</dt><dd>${value}${extra}</dd></div>`;
}

function renderSummary(config, saved) {
  const caseItem = findItem(CASE_COLORS, config.caseId);
  const themeItem = findItem(KEYCAP_THEMES, config.themeId);
  const switchItem = findItem(SWITCH_TYPES, config.switchId);
  const stateChip = saved
    ? `<span class="state" data-kind="saved">已保存</span>`
    : `<span class="state">默认配置</span>`;

  $('summary').innerHTML = [
    summaryRow(
      '外壳',
      `<span class="chip-swatch" style="background:${caseItem.color}"></span>${caseItem.name}`,
      caseItem.desc,
    ),
    summaryRow(
      '键帽',
      `<span class="chip-swatch" style="background:${themeItem.alpha}"></span>${themeItem.name}`,
      themeItem.desc,
    ),
    summaryRow(
      '轴体',
      `<span class="chip-swatch" style="background:${switchItem.stem}"></span>${switchItem.name}`,
      switchItem.feel,
    ),
    summaryRow('空格刻字', config.engrave || DEFAULT_ENGRAVE, 'SPACE'),
    summaryRow('配列', `${KEY_COUNT} 键 · ${ROWS} 行`, `${COLS}u × 5u`),
    summaryRow('机身倾角', '6°', 'TYPING ANGLE'),
    summaryRow('配置状态', '', '', stateChip),
  ].join('');
}

// ---------- Toast ----------
let toastTimer = 0;
function toast(message) {
  const el = $('toast');
  el.textContent = message;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2600);
}

// ---------- 视图同步 ----------
function applyAll(config) {
  keyboard.applyCase(findItem(CASE_COLORS, config.caseId));
  keyboard.applyTheme(findItem(KEYCAP_THEMES, config.themeId));
  keyboard.applySwitch(findItem(SWITCH_TYPES, config.switchId));
  keyboard.setEngrave(
    config.engrave || DEFAULT_ENGRAVE,
    findItem(KEYCAP_THEMES, config.themeId).legendOnAccent,
  );
}

function render(config, meta) {
  applyAll(config);
  syncOptions($('caseOptions'), config.caseId);
  syncOptions($('themeOptions'), config.themeId);
  syncOptions($('switchOptions'), config.switchId);
  renderSummary(config, meta.saved);

  const chip = $('saveChip');
  chip.dataset.state = meta.saved ? 'saved' : 'default';
  $('saveChipText').textContent = meta.saved ? '已保存到本地' : '默认配置';

  const typingSwitch = $('btnTypingMode');
  typingSwitch.setAttribute('aria-checked', String(config.typingMode));

  const input = $('engraveInput');
  if (document.activeElement !== input && input.value !== config.engrave) {
    input.value = config.engrave;
  }
}

// ---------- 初始选项 ----------
renderOptions(
  $('caseOptions'),
  CASE_COLORS.map((c) => ({ ...c, swatch: c.color })),
  store.config.caseId,
  (id) => store.set({ caseId: id }),
);

renderOptions(
  $('themeOptions'),
  KEYCAP_THEMES.map((t) => ({
    ...t,
    swatchDuo: [t.alpha, t.mod, t.accent],
  })),
  store.config.themeId,
  (id) => store.set({ themeId: id }),
);

renderOptions(
  $('switchOptions'),
  SWITCH_TYPES.map((s) => ({ ...s, swatch: s.stem })),
  store.config.switchId,
  (id) => store.set({ switchId: id }),
);

store.subscribe(render);

// ---------- 保存 / 恢复 ----------
$('btnSave').addEventListener('click', () => {
  store.save();
  toast('配置已保存到本地，刷新后自动恢复');
});

$('btnResetDefaults').addEventListener('click', () => {
  keyboard.setExplode(false);
  syncExplodeButton(false);
  viewer.resetView(true);
  viewer.setAutoRotate(false);
  syncRotateButton(false);
  store.reset();
  toast('已恢复默认配置（仅清除了本页面的配置）');
});

// ---------- 拆解 / 组装 ----------
function syncExplodeButton(exploded) {
  const btn = $('btnExplode');
  btn.setAttribute('aria-pressed', String(exploded));
  $('btnExplodeText').textContent = exploded ? '组装复原' : '拆解视图';
  btn.querySelector('.btn-icon').textContent = exploded ? '▣' : '◫';
}

$('btnExplode').addEventListener('click', () => {
  syncExplodeButton(keyboard.toggleExplode());
});

// ---------- 视角 ----------
function syncRotateButton(on) {
  $('btnAutoRotate').setAttribute('aria-pressed', String(on));
}

$('btnAutoRotate').addEventListener('click', () => {
  const next = !viewer.autoRotate;
  viewer.setAutoRotate(next);
  syncRotateButton(next);
});

$('btnResetView').addEventListener('click', () => {
  viewer.resetView(true);
  viewer.setAutoRotate(false);
  syncRotateButton(false);
});

// ---------- 体验模式 ----------
$('btnTypingMode').addEventListener('click', () => {
  const next = !store.config.typingMode;
  store.set({ typingMode: next });
  if (!next) keyboard.releaseAll();
  toast(next ? '体验模式已开启：按下 A–Z 或空格试试' : '体验模式已关闭');
});

// ---------- 空格刻字 ----------
$('engraveInput').addEventListener('input', (event) => {
  const value = event.target.value.slice(0, 10);
  const theme = findItem(KEYCAP_THEMES, store.config.themeId);
  keyboard.setEngrave(value || DEFAULT_ENGRAVE, theme.legendOnAccent);
  store.set({ engrave: value || DEFAULT_ENGRAVE });
});

// ---------- 实体键盘 ----------
const TYPING_CODES = new Set([
  'Space',
  'ArrowUp',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((c) => `Key${c}`),
]);

/** 文本输入类控件：不得劫持任何按键 */
function isTextEntry(el) {
  if (!el || el === document.body) return false;
  if (el.isContentEditable) return true;
  const tag = el.tagName;
  return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT';
}

/** 按钮 / 链接：Space、Enter、方向键属于其正常操作 */
function isActivatable(el) {
  if (!el) return false;
  const tag = el.tagName;
  return (
    tag === 'BUTTON' ||
    tag === 'A' ||
    el.getAttribute('role') === 'switch' ||
    el.getAttribute('role') === 'button'
  );
}

window.addEventListener('keydown', (event) => {
  if (!store.config.typingMode) return;
  const el = document.activeElement;
  if (isTextEntry(el)) return; // 输入框内正常输入，绝不劫持
  if (event.metaKey || event.ctrlKey || event.altKey) return;

  const { code } = event;
  if (!TYPING_CODES.has(code)) return;

  // 按钮 / 链接获得焦点时，保留 Space / Enter / 方向键的原生行为
  if (
    isActivatable(el) &&
    (code === 'Space' || code === 'Enter' || code.startsWith('Arrow'))
  ) {
    return;
  }
  if (event.repeat) return;

  keyboard.press(code, true);
  if (code === 'Space') event.preventDefault();
});

window.addEventListener('keyup', (event) => {
  keyboard.press(event.code, false);
});

window.addEventListener('blur', () => keyboard.releaseAll());
document.addEventListener('visibilitychange', () => {
  if (document.hidden) keyboard.releaseAll();
});

// ---------- 首屏 ----------
keyboard.setEngrave(
  store.config.engrave || DEFAULT_ENGRAVE,
  findItem(KEYCAP_THEMES, store.config.themeId).legendOnAccent,
);
syncExplodeButton(false);
// 首帧渲染后隐藏加载层；兜底超时防止极端情况下遮罩常驻
setTimeout(hideLoading, 2500);
