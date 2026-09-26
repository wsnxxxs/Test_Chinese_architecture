import { DEFAULT_CONFIG, SHELLS, THEMES, readConfig, saveConfig, clearConfig, normalizeConfig, configEquals, describeConfig, configCode } from './config.js';
import { icon } from './icons.js';
import { KeySound } from './sound.js';

const $ = id => document.getElementById(id);
for (const element of document.querySelectorAll('[data-icon]')) element.innerHTML = icon(element.dataset.icon);

// Access is deferred into read/save's try/catch, including the localStorage getter itself.
const storage = {
  getItem: key => window.localStorage.getItem(key),
  setItem: (key, value) => window.localStorage.setItem(key, value),
  removeItem: key => window.localStorage.removeItem(key),
};
const loaded = readConfig(storage);
const state = {
  config: loaded.config,
  savedConfig: loaded.saved ? { ...loaded.config } : null,
  exploded: false, experience: false, sound: false, typed: '', hitCount: 0,
};
let scene = null, sceneGeneration = 0, toastTimer = 0, indicatorTimer = 0, saveTimer = 0;
const sound = new KeySound();

$('mobile-palette').innerHTML = `<div class="quick-option-group" role="group" aria-label="快捷外壳配色"><span class="quick-option-label">外壳</span>${Object.entries(SHELLS).map(([id, shell]) => `<button type="button" class="quick-swatch" data-quick-shell="${id}" aria-label="外壳：${shell.name}" aria-pressed="false" title="${shell.name}" style="--swatch:${shell.color}"><i></i></button>`).join('')}</div><div class="quick-option-group" role="group" aria-label="快捷键帽主题"><span class="quick-option-label">键帽</span>${Object.entries(THEMES).map(([id, theme]) => `<button type="button" class="quick-swatch quick-theme" data-quick-theme="${id}" aria-label="键帽：${theme.name}" aria-pressed="false" title="${theme.name}" style="--cap1:${theme.alpha};--cap2:${theme.mod};--cap3:${theme.accent}"><i></i></button>`).join('')}</div>`;

function toast(message) {
  clearTimeout(toastTimer);
  $('toast-text').textContent = message;
  $('toast').classList.add('visible');
  toastTimer = window.setTimeout(() => $('toast').classList.remove('visible'), 3700);
}

function renderConfig(preserveName = false) {
  const valid = normalizeConfig(state.config);
  for (const input of document.querySelectorAll('input[name="shell"]')) input.checked = input.value === valid.shell;
  for (const input of document.querySelectorAll('input[name="theme"]')) input.checked = input.value === valid.theme;
  for (const button of document.querySelectorAll('[data-quick-shell]')) button.setAttribute('aria-pressed', String(button.dataset.quickShell === valid.shell));
  for (const button of document.querySelectorAll('[data-quick-theme]')) button.setAttribute('aria-pressed', String(button.dataset.quickTheme === valid.theme));
  $('shell-label').textContent = SHELLS[valid.shell].name;
  $('theme-label').textContent = THEMES[valid.theme].name;
  $('summary-label').textContent = describeConfig(valid);
  $('summary-code').textContent = configCode(valid);
  if (!preserveName) $('config-name').value = state.config.name;
  const dirty = !configEquals(valid, state.savedConfig || DEFAULT_CONFIG);
  $('save-status').className = `save-status${dirty ? ' dirty' : state.savedConfig ? ' stored' : ''}`;
  $('save-status').replaceChildren(Object.assign(document.createElement('i')), document.createTextNode(dirty ? '更改尚未保存' : state.savedConfig ? '已保存至本地' : '默认配置'));
  document.documentElement.dataset.shell = valid.shell;
  document.documentElement.dataset.theme = valid.theme;
  document.documentElement.dataset.saved = String(!dirty && Boolean(state.savedConfig));
}

function updateConfig(patch) {
  state.config = { ...state.config, ...patch };
  renderConfig(true);
  if (patch.shell || patch.theme) scene?.setColors(normalizeConfig(state.config));
  clearTimeout(saveTimer); $('save-label').textContent = '保存我的配置'; $('save-config').classList.remove('saved');
}
for (const input of document.querySelectorAll('input[name="shell"], input[name="theme"]')) {
  input.addEventListener('change', event => updateConfig({ [event.target.name]: event.target.value }));
}
for (const button of document.querySelectorAll('[data-quick-shell]')) button.addEventListener('click', () => updateConfig({ shell: button.dataset.quickShell }));
for (const button of document.querySelectorAll('[data-quick-theme]')) button.addEventListener('click', () => updateConfig({ theme: button.dataset.quickTheme }));
$('config-name').addEventListener('input', event => updateConfig({ name: event.target.value.slice(0, 40) }));
$('config-name').addEventListener('blur', () => { state.config = normalizeConfig(state.config); renderConfig(); });
$('config-form').addEventListener('submit', event => { event.preventDefault(); $('save-config').click(); });
$('save-config').addEventListener('click', () => {
  const valid = normalizeConfig(state.config);
  if (saveConfig(storage, valid)) {
    state.config = valid; state.savedConfig = { ...valid }; renderConfig();
    $('save-label').textContent = '配置已保存'; $('save-config').classList.add('saved');
    toast('已保存你的 FORM 68，下次打开继续使用。');
    clearTimeout(saveTimer); saveTimer = window.setTimeout(() => { $('save-label').textContent = '保存我的配置'; $('save-config').classList.remove('saved'); }, 2400);
  } else toast('保存失败：浏览器未允许本地存储，本次预览不受影响。');
});
$('reset-config').addEventListener('click', () => {
  const cleared = clearConfig(storage);
  state.config = { ...DEFAULT_CONFIG }; state.savedConfig = null;
  renderConfig(); scene?.setColors(state.config);
  clearTimeout(saveTimer); $('save-label').textContent = '保存我的配置'; $('save-config').classList.remove('saved');
  toast(cleared ? '已恢复默认配色，仅清除了 FORM 68 的本地配置。' : '预览已恢复默认，但浏览器阻止了清除本地配置。');
});

function updateExperience() {
  $('experience-toggle').setAttribute('aria-checked', String(state.experience));
  $('experience-panel').classList.toggle('enabled', state.experience);
  $('experience-hint').textContent = state.experience ? '按下 A—Z 或空格，也可以直接点击键帽。' : '打开试打，体验每一枚键帽的回响。';
  $('typing-lab').hidden = !state.experience;
  if (!state.experience) $('key-indicator').hidden = true;
}
function renderTyping() {
  $('hit-count').textContent = String(state.hitCount);
  $('typing-output').classList.toggle('has-input', state.typed.length > 0);
  // Typed names/content are always text nodes, never interpolated into HTML.
  const caret = document.createElement('span'); caret.className = 'typing-caret';
  $('typing-output').replaceChildren(document.createTextNode(state.typed || 'FORM FOLLOWS FEELING'), caret);
}
function handlePress(code, label) {
  state.hitCount++;
  if (code.startsWith('Key')) state.typed = (state.typed + code.slice(3)).slice(-48);
  else if (code === 'Space') state.typed = (state.typed + ' ').slice(-48);
  renderTyping();
  $('key-indicator-label').textContent = code === 'Space' ? 'space' : label;
  $('key-indicator').hidden = false;
  clearTimeout(indicatorTimer); indicatorTimer = window.setTimeout(() => { $('key-indicator').hidden = true; }, 1100);
  sound.play(code === 'Space');
}
$('experience-toggle').addEventListener('click', () => {
  state.experience = !state.experience;
  updateExperience(); scene?.setExperience(state.experience);
});
$('clear-typing').addEventListener('click', () => { state.typed = ''; state.hitCount = 0; renderTyping(); scene?.focus(); });
$('sound-toggle').addEventListener('click', async () => {
  const desired = !state.sound;
  const success = await sound.setEnabled(desired);
  state.sound = desired && success;
  $('sound-toggle').setAttribute('aria-pressed', String(state.sound));
  $('sound-toggle').setAttribute('aria-label', state.sound ? '关闭合成键音' : '开启合成键音');
  $('sound-toggle').title = state.sound ? '关闭合成键音' : '开启合成键音';
  $('sound-toggle').innerHTML = icon(state.sound ? 'sound' : 'mute');
  if (!success) toast('此浏览器暂时无法播放键音，按键动画仍可使用。');
  else if (state.sound) { sound.play(); toast('合成键音已开启。'); }
  scene?.focus();
});

$('explode-toggle').addEventListener('click', () => {
  state.exploded = !state.exploded;
  $('explode-toggle').setAttribute('aria-pressed', String(state.exploded));
  $('explode-label').textContent = state.exploded ? '组装键盘' : '拆解键盘';
  $('view-state').textContent = state.exploded ? 'EXPLODED / 拆解视图' : 'ASSEMBLED / 组装视图';
  $('layer-legend').hidden = !state.exploded;
  scene?.setExploded(state.exploded);
});
$('zoom-in').addEventListener('click', () => scene?.zoom(1));
$('zoom-out').addEventListener('click', () => scene?.zoom(-1));
$('reset-view').addEventListener('click', () => { scene?.resetView(); toast('视角已复位，配色与拆解状态保持不变。'); });
$('view-perspective').addEventListener('click', () => scene?.setView('perspective'));
$('view-top').addEventListener('click', () => scene?.setView('top'));
function handleView({ preset, zoom }) {
  $('zoom-value').textContent = `${zoom}%`;
  for (const name of ['perspective', 'top']) {
    const active = preset === name;
    $(`view-${name}`).classList.toggle('selected', active);
    $(`view-${name}`).setAttribute('aria-pressed', String(active));
  }
}

const guide = $('guide-dialog');
for (const button of document.querySelectorAll('[data-open-guide]')) button.addEventListener('click', () => { scene?.releaseAll(); guide.showModal(); });
for (const id of ['close-guide', 'guide-done']) $(id).addEventListener('click', () => guide.close());
guide.addEventListener('click', event => {
  const rect = guide.getBoundingClientRect();
  if (event.target === guide && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) guide.close();
});

const sceneControlIds = ['experience-toggle', 'explode-toggle', 'zoom-in', 'zoom-out', 'reset-view', 'view-perspective', 'view-top'];
function setSceneControlsEnabled(enabled) {
  for (const id of sceneControlIds) $(id).disabled = !enabled;
  for (const button of document.querySelectorAll('[data-feature]')) button.disabled = !enabled;
}
for (const button of document.querySelectorAll('[data-feature]')) button.addEventListener('click', () => {
  $('viewer').scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'center' });
  if (button.dataset.feature === 'layout') scene?.setView('top');
  else if (button.dataset.feature === 'typing' && !state.experience) $('experience-toggle').click();
  else if (button.dataset.feature === 'anatomy' && !state.exploded) $('explode-toggle').click();
});
function showSceneError(message) {
  state.experience = false; updateExperience(); scene?.setExperience(false);
  $('scene-loading').hidden = true; $('scene-error').hidden = false;
  $('viewer').setAttribute('aria-busy', 'false');
  $('scene-error-message').textContent = message;
  setSceneControlsEnabled(false);
}
async function initializeScene() {
  const generation = ++sceneGeneration;
  scene?.dispose(); scene = null;
  $('scene-error').hidden = true; $('scene-loading').hidden = false;
  $('viewer').setAttribute('aria-busy', 'true'); setSceneControlsEnabled(false);
  try {
    const { createKeyboardScene } = await import('./keyboard-scene.js');
    if (generation !== sceneGeneration) return;
    scene = createKeyboardScene($('scene-container'), {
      config: normalizeConfig(state.config),
      onReady() {
        if (generation !== sceneGeneration) return;
        $('scene-loading').hidden = true; $('viewer').setAttribute('aria-busy', 'false');
        setSceneControlsEnabled(true);
      },
      onError: showSceneError,
      onPress: handlePress, onViewChange: handleView,
      isDialogOpen: () => guide.open,
    });
    scene.setExploded(state.exploded);
    if (state.experience) scene.setExperience(true);
  } catch (error) {
    console.error('[FORM 68] 3D initialization failed:', error);
    showSceneError('3D 预览未能启动。请检查 WebGL 2 / 硬件加速以及应用资源是否完整，然后重新加载预览。配色与保存仍可使用。');
  }
}
$('retry-scene').addEventListener('click', initializeScene);
renderConfig(); updateExperience(); renderTyping();
if (loaded.error === 'unavailable') toast('无法读取本地配置，已载入默认配色。');
if (loaded.error === 'invalid') toast('已保存的数据格式无效，已安全载入默认配置。');
initializeScene();

// Explicit opt-in, read-only inspection surface for the included browser tests.
if (new URLSearchParams(location.search).has('test')) {
  Object.defineProperty(window, '__FORM68__', { value: Object.freeze({
    inspect: () => scene?.inspect() ?? null,
    config: () => ({ ...normalizeConfig(state.config) }),
    projectKey: code => scene?.projectKey(code) ?? null,
  }) });
}
window.addEventListener('pagehide', event => {
  scene?.releaseAll();
  // bfcache restores the live page; do not destroy its renderer when it is persisted.
  if (!event.persisted) { scene?.dispose(); sound.dispose(); }
});
