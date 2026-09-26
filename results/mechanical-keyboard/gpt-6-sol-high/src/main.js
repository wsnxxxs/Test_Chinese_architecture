import './style.css';
import '@fontsource-variable/dm-sans';
import '@fontsource-variable/manrope';
import { createKeyboard } from './keyboard.js';

const icons = {
  arrow: '<path d="M7 17 17 7M7 7h10v10"/>',
  reset: '<path d="M3 10a9 9 0 1 1 2 9M3 4v6h6"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  minus: '<path d="M5 12h14"/>',
  layers: '<path d="m12 3 10 5-10 5L2 8l10-5Zm-10 9 10 5 10-5M2 16l10 5 10-5"/>',
  keyboard: '<rect x="2" y="5" width="20" height="14" rx="3"/><path d="M6 9h1m3 0h1m3 0h1m3 0h1M6 12h1m3 0h1m3 0h1m3 0h1M7 16h10"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  save: '<path d="M5 3h12l4 4v14H3V3h2Zm2 0v7h10V3M7 21v-7h10v7"/>',
  sound: '<path d="m11 4-6 5H2v6h3l6 5V4Zm4 4a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14"/>',
};
const icon = (name) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name]}</svg>`;
export const shells = [
  { id: 'mist', name: '雾银', en: 'Mist silver', color: '#c6cac5' },
  { id: 'ink', name: '墨黑', en: 'Ink black', color: '#303735' },
  { id: 'clay', name: '陶土', en: 'Terracotta', color: '#c47b62' },
];
export const themes = [
  { id: 'botanical', name: '植物园', en: 'Botanical', colors: ['#dedfd0', '#799887', '#f16a36'], text: '#34443a' },
  { id: 'moon', name: '月面', en: 'Lunar', colors: ['#ece8df', '#b9bdd0', '#7d86b0'], text: '#424659' },
  { id: 'noir', name: '午夜', en: 'Midnight', colors: ['#454c52', '#788591', '#e5bd73'], text: '#f4efdf' },
];
const STORAGE_KEY = 'orbit68.configuration.v1';
const defaults = { shell: 'mist', theme: 'botanical' };
let state = { ...defaults }, savedState = null, exploded = false, experience = false, sound = false;
try {
  const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (stored && shells.some(s => s.id === stored.shell) && themes.some(t => t.id === stored.theme)) {
    state = { shell: stored.shell, theme: stored.theme }; savedState = { ...state };
  }
} catch { /* The default configuration also works without local storage. */ }

document.querySelector('#app').innerHTML = `
  <header class="header">
    <a class="brand" href="#" aria-label="ORBIT 首页"><span class="brand-mark">o<span></span></span>orbit<span class="brand-dot">®</span></a>
    <nav aria-label="主导航"><a class="active" href="#studio">产品工作室</a><a href="#details">设计细节 ${icon('arrow')}</a></nav>
    <div class="header-note"><span class="status-dot"></span> DESIGNED FOR YOUR EVERYDAY</div>
  </header>
  <main id="studio" class="studio">
    <section class="showcase" aria-labelledby="product-title">
      <div class="hero-copy"><div class="eyebrow"><span class="tiny-line"></span> A LITTLE SPACE. A LOT OF POSSIBILITY.</div><h1 id="product-title">Find your<br>own <em>rhythm.</em></h1><p>小一点的键盘，大一点的创造空间。<br>让每次敲击，都有自己的节奏。</p></div>
      <div class="edition">ORBIT 68<span>THE EVERYDAY SERIES / 001</span></div>
      <div id="viewport" class="viewport" role="img" aria-label="可旋转缩放的 ORBIT 68 三维键盘"><div class="loading">正在构建你的 ORBIT<span></span></div></div>
      <div class="model-label"><span class="status-dot"></span><span id="view-label">BOTANICAL / MIST SILVER</span><span class="label-rule"></span><span>68 KEYS. ALL YOURS.</span></div>
      <div id="layer-labels" class="layer-labels" hidden><span>01 / PBT 键帽</span><span>02 / 铝合金定位板</span><span>03 / 一体式底壳</span></div>
      <div class="stage-bottom"><div class="gesture-hint"><span class="drag-icon">↔</span><span>拖动旋转 <span class="hint-separator">·</span> 滚动缩放</span></div><div class="view-controls"><button id="zoom-out" class="icon-btn" aria-label="缩小">${icon('minus')}</button><button id="zoom-in" class="icon-btn" aria-label="放大">${icon('plus')}</button><span></span><button id="reset-view" class="icon-btn" aria-label="复位视角">${icon('reset')}</button></div></div>
      <div class="feature-strip"><div><strong>68</strong><span>紧凑键位</span></div><div><strong>6°</strong><span>舒适倾角</span></div><div><strong>PBT</strong><span>细腻触感</span></div><div><strong>YOURS</strong><span>自由定义</span></div></div>
    </section>
    <aside class="configurator" aria-labelledby="config-title">
      <div class="config-heading"><div><div class="eyebrow">MAKE IT PERSONAL</div><h2 id="config-title">你的 ORBIT 68</h2></div><span class="step-count">01 — 03</span></div>
      <fieldset class="config-section"><legend><span class="section-num">01</span>外壳配色 <span id="shell-name" class="chosen-name"></span></legend><div class="shell-options">${shells.map(s => `<button class="shell-option" data-shell="${s.id}" aria-label="${s.name}" aria-pressed="false"><span class="swatch" style="--swatch:${s.color}">${icon('check')}</span><span>${s.name}</span></button>`).join('')}</div></fieldset>
      <fieldset class="config-section"><legend><span class="section-num">02</span>键帽主题</legend><div class="theme-options">${themes.map(t => `<button class="theme-option" data-theme="${t.id}" aria-pressed="false"><span class="theme-preview">${t.colors.map((c, i) => `<span style="background:${c};color:${i === 2 ? '#fff' : t.text}">${['A', 'S', 'D'][i]}</span>`).join('')}</span><span class="theme-title">${t.name}<small>${t.en}</small></span><span class="theme-check">${icon('check')}</span></button>`).join('')}</div></fieldset>
      <div class="config-section experience-section"><h3><span class="section-num">03</span>探索与体验</h3><div class="explore-actions"><button id="explode" aria-pressed="false">${icon('layers')}<span>拆解键盘</span><span class="action-symbol">+</span></button><button id="experience" aria-pressed="false">${icon('keyboard')}<span>键盘体验</span><span class="toggle"><i></i></span></button></div><p id="experience-help">打开体验模式，感受每一次敲击。</p><div class="experience-extra" hidden><span id="last-key">按下 A–Z / 空格，或点按键帽</span><button id="sound" class="icon-btn" aria-label="开启按键声音" aria-pressed="false">${icon('sound')}</button></div></div>
      <div class="config-summary"><div class="summary-top"><span>你的专属组合</span><span class="availability"><i></i> READY TO CREATE</span></div><strong id="summary"></strong><div class="summary-detail"><span>ORBIT 68</span><span>PBT 键帽 / 线性轴 / 68 键</span></div></div>
      <button id="save" class="save-button"><span>保存我的配置</span>${icon('arrow')}</button><div class="save-footer"><span id="save-status">仅保存于此设备</span><button id="defaults">恢复默认</button></div>
    </aside>
  </main>
  <section id="details" class="details"><div><div class="eyebrow">LESS, BUT BETTER.</div><h2>留出空间，<br>给真正重要的事。</h2></div><p>完整的字母区、独立方向键与恰到好处的紧凑布局。<br>从带有弧度的键帽，到一体式金属底壳，<br>每个细节都为你的日常而设计。</p><div class="detail-tag">FORM MEETS FEELING ${icon('arrow')}</div></section>
  <footer><span>orbit® — Objects for a thoughtful everyday.</span><span>原创产品概念 / 2026</span></footer>
  <div id="toast" role="status" aria-live="polite"></div>
`;

const keyboard = createKeyboard(document.querySelector('#viewport'), onKey);
function updateConfig() {
  const shell = shells.find(s => s.id === state.shell), theme = themes.find(t => t.id === state.theme);
  keyboard.setColors(shell, theme);
  document.querySelectorAll('[data-shell]').forEach(b => b.setAttribute('aria-pressed', b.dataset.shell === state.shell));
  document.querySelectorAll('[data-theme]').forEach(b => b.setAttribute('aria-pressed', b.dataset.theme === state.theme));
  document.querySelector('#shell-name').textContent = shell.en;
  document.querySelector('#summary').textContent = `${shell.name}外壳 / ${theme.name}键帽`;
  document.querySelector('#view-label').textContent = `${theme.en.toUpperCase()} / ${shell.en.toUpperCase()}`;
  document.querySelector('#save-status').textContent = savedState && savedState.shell === state.shell && savedState.theme === state.theme ? '配置已保存于此设备' : '仅保存于此设备';
}
document.querySelectorAll('[data-shell]').forEach(b => b.addEventListener('click', () => { state.shell = b.dataset.shell; updateConfig(); }));
document.querySelectorAll('[data-theme]').forEach(b => b.addEventListener('click', () => { state.theme = b.dataset.theme; updateConfig(); }));
document.querySelector('#explode').addEventListener('click', () => {
  exploded = !exploded; keyboard.setExploded(exploded);
  const button = document.querySelector('#explode');
  button.setAttribute('aria-pressed', exploded); button.querySelector('span').textContent = exploded ? '组装键盘' : '拆解键盘';
  button.querySelector('.action-symbol').textContent = exploded ? '−' : '+';
  document.querySelector('#layer-labels').hidden = !exploded;
});
document.querySelector('#experience').addEventListener('click', () => {
  experience = !experience; keyboard.setExperience(experience);
  document.querySelector('#experience').setAttribute('aria-pressed', experience);
  document.querySelector('.experience-extra').hidden = !experience;
  document.querySelector('#experience-help').hidden = experience;
  document.querySelector('#experience-help').textContent = experience ? '体验已开启 · 字母与空格实时响应' : '打开体验模式，感受每一次敲击。';
  if (experience) document.querySelector('#viewport canvas')?.focus({ preventScroll: true });
});
let audioContext;
function onKey(label) {
  document.querySelector('#last-key').textContent = `${label === ' ' ? 'SPACE' : label} · NICE TOUCH.`;
  if (sound) {
    audioContext ??= new (window.AudioContext || window.webkitAudioContext)();
    if (audioContext.state === 'suspended') audioContext.resume();
    const osc = audioContext.createOscillator(), gain = audioContext.createGain(), now = audioContext.currentTime;
    osc.type = 'triangle'; osc.frequency.setValueAtTime(190 + Math.random() * 70, now); osc.frequency.exponentialRampToValueAtTime(70, now + .045);
    gain.gain.setValueAtTime(.06, now); gain.gain.exponentialRampToValueAtTime(.001, now + .065);
    osc.connect(gain); gain.connect(audioContext.destination); osc.start(now); osc.stop(now + .07);
  }
}
document.querySelector('#sound').addEventListener('click', () => {
  sound = !sound; document.querySelector('#sound').setAttribute('aria-pressed', sound);
  document.querySelector('#sound').setAttribute('aria-label', sound ? '关闭按键声音' : '开启按键声音');
});
const isInput = target => target instanceof Element && (target.closest('input, textarea, select, [contenteditable]:not([contenteditable="false"])') || target.isContentEditable);
window.addEventListener('keydown', e => {
  if (!experience || isInput(e.target) || e.ctrlKey || e.metaKey || e.altKey || e.repeat) return;
  if (e.code === 'Space' && e.target instanceof Element && e.target.closest('button, a')) return;
  if (/^Key[A-Z]$/.test(e.code) || e.code === 'Space') { e.preventDefault(); keyboard.press(e.code === 'Space' ? ' ' : e.code.slice(3)); }
});
window.addEventListener('keyup', e => keyboard.release(e.code === 'Space' ? ' ' : e.code.slice(3)));
window.addEventListener('blur', () => keyboard.releaseAll());
document.querySelector('#zoom-in').addEventListener('click', () => keyboard.zoom(.86));
document.querySelector('#zoom-out').addEventListener('click', () => keyboard.zoom(1.16));
document.querySelector('#reset-view').addEventListener('click', () => { keyboard.resetView(); toast('视角已复位'); });
let toastTimer;
function toast(message) { const el = document.querySelector('#toast'); el.textContent = message; el.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove('show'), 2600); }
document.querySelector('#save').addEventListener('click', () => {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); savedState = { ...state }; updateConfig(); toast('已保存。下次见，还是你的 ORBIT。'); }
  catch { toast('浏览器无法保存配置，请允许本地存储后重试。'); }
});
document.querySelector('#defaults').addEventListener('click', () => {
  try { localStorage.removeItem(STORAGE_KEY); savedState = null; state = { ...defaults }; updateConfig(); toast('已恢复默认配色'); }
  catch { toast('无法清除已保存配置，请检查浏览器存储权限。'); }
});
updateConfig();
