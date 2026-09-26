import '@fontsource-variable/manrope';
import '@fontsource/instrument-serif/400.css';
import '@fontsource/instrument-serif/400-italic.css';
import './style.css';
import { CASES, THEMES, DEFAULT_CONFIG, STORAGE_KEY, readConfiguration } from './config.js';
import { icon, mark } from './icons.js';
import { KeyboardStudio } from './keyboard.js';

const initial = readConfiguration();
let config = initial.config;
let savedConfig = initial.saved ? { ...config } : null;
let exploded = false;
let experience = false;
let soundEnabled = false;
let keyCount = 0;
let studio;
let toastTimer;
let audioContext;
let noiseBuffer;

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <a class="brand" href="#" aria-label="LOOM 首页">${mark}<span>loom<span class="brand-period">.</span></span></a>
    <nav aria-label="主导航"><a href="#studio" class="nav-active">键盘工作室<span></span></a><a href="#details">设计细节</a></nav>
    <span class="header-note"><span class="status-dot"></span> SMALL FORM. BIG FEELING.</span>
  </header>

  <main>
    <section id="studio" class="workspace" aria-label="LOOM 68 产品配置工作室">
      <div class="showcase">
        <div class="product-intro">
          <div>
            <p class="eyebrow"><span class="short-line"></span> EVERYDAY OBJECTS, REIMAGINED.</p>
            <h1>LOOM <em>68</em><span class="edition-dot">®</span></h1>
          </div>
          <div class="intro-copy"><h2>留一点空间，给灵感。</h2><p>紧凑的形态，完整的手感。<br>一把为你的日常而设计的机械键盘。</p></div>
        </div>

        <div class="viewer-shell" id="viewer-shell">
          <div class="viewer-topline"><span><span class="status-dot"></span> 实时 3D 预览</span><span id="preview-combination">MOSS / MATCHA</span></div>
          <div id="keyboard-view" class="keyboard-view"></div>
          <div class="viewer-loading" id="viewer-loading"><span></span>正在准备你的键盘</div>
          <div class="layer-labels" aria-hidden="true">
            <div class="layer-label"><b>01</b><span>雕塑感键帽<small>PBT KEYCAPS</small></span></div>
            <div class="layer-label"><b>02</b><span>开孔定位板<small>ALUMINUM PLATE</small></span></div>
            <div class="layer-label"><b>03</b><span>一体成型底壳<small>CNC ALUMINUM</small></span></div>
          </div>
          <div id="key-tooltip" class="key-tooltip" hidden></div>
          <div class="viewer-bottomline"><span class="view-caption" id="view-caption">完整组装 / ASSEMBLED</span><span class="view-scale">01 — 001</span></div>
        </div>

        <div class="viewer-toolbar">
          <button class="explode-button" id="explode-button" aria-pressed="false">${icon('layers')}<span>拆解键盘</span><span class="button-key">3 层</span></button>
          <span class="gesture-help"><svg width="14" height="18" viewBox="0 0 14 18" fill="none" aria-hidden="true"><rect x="2" y="1" width="10" height="15" rx="5" stroke="currentColor"/><path d="M7 4v3" stroke="currentColor" stroke-linecap="round"/></svg><span>拖动旋转<span class="help-separator">·</span>滚轮缩放</span></span>
          <div class="view-actions" role="group" aria-label="视角操作">
            <button id="zoom-out" aria-label="缩小" title="缩小">${icon('minus')}</button>
            <button id="zoom-in" aria-label="放大" title="放大">${icon('plus')}</button>
            <span class="control-divider"></span>
            <button id="top-view" aria-label="俯视键盘" title="俯视键盘">${icon('top')}</button>
            <button id="reset-view" aria-label="复位视角" title="复位视角">${icon('rotate')}</button>
          </div>
        </div>
        <div class="experience-report" id="experience-report" aria-live="polite"><span class="report-dot"></span><span id="experience-message">好设计，从每一次触碰开始。</span><span id="press-count" hidden>0 次敲击</span></div>

        <div class="product-specs" aria-label="产品特点">
          <div><span class="spec-number">65<span>%</span></span><span class="spec-label">紧凑布局<small>A LITTLE MORE ROOM.</small></span></div>
          <div><span class="spec-number">68</span><span class="spec-label">独立按键<small>EVERY KEY YOU NEED.</small></span></div>
          <div><span class="spec-number">6<span>°</span></span><span class="spec-label">舒适倾角<small>MADE TO FEEL RIGHT.</small></span></div>
        </div>
      </div>

      <aside class="configurator" aria-labelledby="configuration-heading">
        <div class="config-heading"><p class="eyebrow">THE PERSONAL TOUCH <span>01 / 03</span></p><h2 id="configuration-heading">Make it yours.</h2><p>搭配一个，属于你的版本。</p></div>

        <fieldset class="configuration-field case-field">
          <legend><span class="field-number">01</span>外壳配色 <span id="selected-case" class="field-current"></span></legend>
          <div class="case-options">${CASES.map((finish) => `
            <label class="case-option"><input type="radio" name="case" value="${finish.id}" aria-label="${finish.name}外壳" /><span class="case-swatch" style="--swatch:${finish.color}"><span>${icon('check')}</span></span><span class="option-name">${finish.name}</span><span class="option-english">${finish.english}</span></label>`).join('')}
          </div>
        </fieldset>

        <fieldset class="configuration-field theme-field">
          <legend><span class="field-number">02</span>键帽主题 <span class="field-note">PBT / 哑光质感</span></legend>
          <div class="theme-options">${THEMES.map((theme) => `
            <label class="theme-option" style="--sample-alpha:${theme.alpha};--sample-modifier:${theme.modifier};--sample-accent:${theme.accent}"><input type="radio" name="theme" value="${theme.id}" aria-label="${theme.name}键帽" /><span class="theme-sample" aria-hidden="true"><i></i><i></i><i></i></span><span class="option-name">${theme.name}</span><span class="theme-selection">${icon('check')}</span></label>`).join('')}
          </div>
        </fieldset>

        <div class="configuration-field experience-field">
          <div class="field-label"><span class="field-number">03</span>亲手试一试 <span class="field-note">FEEL THE FLOW</span></div>
          <div class="experience-control">
            <button id="experience-toggle" class="experience-toggle" role="switch" aria-checked="false"><span class="experience-icon">${icon('keyboard')}</span><span class="experience-text"><strong>键盘体验</strong><small>按 A–Z / 空格，或点触键帽</small></span><span class="switch-track"><span></span></span></button>
            <button id="sound-toggle" class="sound-toggle" aria-label="开启按键声音" aria-pressed="false" title="开启按键声音" disabled>${icon('mute')}</button>
          </div>
        </div>

        <div class="configuration-summary" aria-live="polite">
          <div class="summary-heading"><span>你的配置</span><span id="save-status" class="save-status">未保存</span></div>
          <div class="summary-product"><span class="summary-mark">L<span>68</span></span><div><strong>LOOM 68</strong><p id="summary-colors"></p></div><span class="summary-count">1 / 9</span></div>
          <label class="configuration-name" for="configuration-name"><span>配置名称<span>可选</span></span><input id="configuration-name" type="text" autocomplete="off" maxlength="32" placeholder="例如：我的灵感桌面" /></label>
        </div>
        <button id="save-configuration" class="save-button"><span>${icon('save')}保存我的配置</span>${icon('arrow')}</button>
        <div class="save-footer"><span>仅保存在这台设备</span><button id="restore-default">恢复默认</button></div>
      </aside>
    </section>

    <section class="design-details" id="details" aria-labelledby="details-heading">
      <div class="details-heading"><div><p class="eyebrow">THOUGHTFUL, DOWN TO THE LAST DETAIL.</p><h2 id="details-heading">小物件，大有讲究。</h2></div><span class="details-note">好的工具，让自己退后，让灵感向前。</span></div>
      <div class="details-grid">
        <article class="detail-card"><div class="detail-visual metal-visual" aria-hidden="true"><div class="metal-piece"><span>l o o m</span></div><span class="detail-tag">CNC / ALUMINUM</span></div><div class="detail-content"><span>01 / FORM</span><h3>触得到的，精致。</h3><p>圆润倒角，一体铝壳。细腻的哑光表面，<br>让你的桌面和指尖都恰到好处。</p></div></article>
        <article class="detail-card"><div class="detail-visual key-visual" aria-hidden="true"><div class="sculpted-key key-one">A</div><div class="sculpted-key key-two">a</div><span class="detail-tag">SCULPTED / PBT</span></div><div class="detail-content"><span>02 / FEEL</span><h3>为指尖，多想一点。</h3><p>微凹键顶，舒适倾角。清晰的字符与<br>独立的方向键，保留熟悉的敲击节奏。</p></div></article>
        <article class="detail-card"><div class="detail-visual structure-visual" aria-hidden="true"><div class="structure-layer layer-top"></div><div class="structure-layer layer-middle"></div><div class="structure-layer layer-bottom"></div><span class="detail-tag">LAYER BY LAYER</span></div><div class="detail-content"><span>03 / CRAFT</span><h3>好手感，内外兼修。</h3><p>键帽、定位板与底壳层层配合。<br>拆开看看，每一层都有它的用意。</p><button id="inspect-structure">探索内部结构 ${icon('arrow')}</button></div></article>
      </div>
    </section>
  </main>
  <footer class="site-footer"><a class="brand" href="#">${mark}<span>loom.</span></a><span>Objects for a slower, better everyday.</span><span>原创概念设计 · LOOM STUDIO © 2026</span></footer>
  <div id="toast" class="toast" role="status" aria-live="polite"><span class="toast-icon">${icon('check')}</span><span id="toast-message"></span><button id="dismiss-toast" aria-label="关闭提示">${icon('close')}</button></div>
`;

const $ = (selector) => document.querySelector(selector);
const layerLabels = [...document.querySelectorAll('.layer-label')];

function showToast(message, error = false) {
  clearTimeout(toastTimer);
  $('#toast-message').textContent = message;
  $('#toast').classList.toggle('toast-error', error);
  $('#toast').classList.add('is-visible');
  toastTimer = setTimeout(() => $('#toast').classList.remove('is-visible'), 4200);
}

function updateInterface() {
  const finish = CASES.find((item) => item.id === config.case);
  const theme = THEMES.find((item) => item.id === config.theme);
  document.querySelectorAll('input[name="case"]').forEach((input) => { input.checked = input.value === config.case; });
  document.querySelectorAll('input[name="theme"]').forEach((input) => { input.checked = input.value === config.theme; });
  $('#selected-case').textContent = `${finish.name} / ${finish.english}`;
  $('#preview-combination').textContent = `${finish.english} / ${theme.english}`;
  $('#summary-colors').textContent = `${finish.name}外壳 · ${theme.name}键帽`;
  $('.summary-count').textContent = `${CASES.indexOf(finish) * 3 + THEMES.indexOf(theme) + 1} / 9`;
  $('.summary-mark').style.setProperty('--summary-color', finish.color);
  const saved = savedConfig && JSON.stringify(savedConfig) === JSON.stringify(config);
  $('#save-status').textContent = saved ? '已保存至本地' : '未保存';
  $('#save-status').classList.toggle('is-saved', Boolean(saved));
  $('#save-configuration').classList.toggle('is-saved', Boolean(saved));
  if ($('#configuration-name').value !== config.name) $('#configuration-name').value = config.name;
}

function updateConfiguration(change) {
  config = { ...config, ...change };
  updateInterface();
  studio?.configure(config);
}

function setExploded(value) {
  if (!studio) return;
  exploded = value;
  studio.setExploded(value);
  $('#explode-button').setAttribute('aria-pressed', String(value));
  $('#explode-button > span:first-of-type').textContent = value ? '组装键盘' : '拆解键盘';
  $('#viewer-shell').classList.toggle('is-exploded', value);
  $('#view-caption').textContent = value ? '层层有用心 / EXPLODED' : '完整组装 / ASSEMBLED';
}

function makeClickSound() {
  if (!soundEnabled || !experience) return;
  audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
  if (audioContext.state === 'suspended') audioContext.resume();
  if (!noiseBuffer) {
    noiseBuffer = audioContext.createBuffer(1, Math.floor(audioContext.sampleRate * 0.04), audioContext.sampleRate);
    const channel = noiseBuffer.getChannelData(0);
    for (let i = 0; i < channel.length; i++) channel[i] = (Math.random() * 2 - 1) * (1 - i / channel.length) ** 3;
  }
  const now = audioContext.currentTime;
  const click = audioContext.createBufferSource();
  click.buffer = noiseBuffer;
  const filter = audioContext.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.value = 2100;
  filter.Q.value = 0.8;
  const gain = audioContext.createGain();
  gain.gain.setValueAtTime(0.25, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
  click.connect(filter).connect(gain).connect(audioContext.destination);
  click.start(now);
  const thock = audioContext.createOscillator();
  const thockGain = audioContext.createGain();
  thock.frequency.setValueAtTime(185, now);
  thock.frequency.exponentialRampToValueAtTime(65, now + 0.035);
  thockGain.gain.setValueAtTime(0.09, now);
  thockGain.gain.exponentialRampToValueAtTime(0.001, now + 0.045);
  thock.connect(thockGain).connect(audioContext.destination);
  thock.start(now);
  thock.stop(now + 0.05);
}

function onPress(key) {
  keyCount++;
  $('#experience-message').textContent = `${key.code === 'Space' ? 'SPACE' : key.label.toUpperCase()}  ·  每一下，都恰如其分。`;
  $('#press-count').textContent = `${keyCount} 次敲击`;
  makeClickSound();
}

updateInterface();

try {
  studio = new KeyboardStudio($('#keyboard-view'), {
    onPress,
    onHover: (hover) => {
      const tooltip = $('#key-tooltip');
      tooltip.hidden = !hover;
      if (!hover) return;
      const rect = $('#viewer-shell').getBoundingClientRect();
      tooltip.textContent = `${hover.key.code === 'Space' ? 'SPACE' : hover.key.label.toUpperCase()} · 点击试敲`;
      tooltip.style.left = `${Math.min(hover.x - rect.left + 12, rect.width - 115)}px`;
      tooltip.style.top = `${hover.y - rect.top - 34}px`;
    },
    onLayers: (points) => points.forEach((point, index) => {
      layerLabels[index].style.left = `${Math.min(point.x + 2, 82)}%`;
      layerLabels[index].style.top = `${Math.max(9, Math.min(point.y, 87))}%`;
    }),
  });
  studio.configure(config, true);
  $('#viewer-loading').remove();
} catch (error) {
  console.error('The keyboard preview could not start:', error);
  $('#viewer-loading').innerHTML = `${icon('info')}<strong>3D 预览暂时不可用</strong><p>请使用支持 WebGL 的浏览器，并开启硬件加速。<br>你仍然可以搭配和保存配置。</p>`;
  $('#viewer-loading').classList.add('viewer-error');
  for (const selector of ['#explode-button', '#experience-toggle', '#zoom-in', '#zoom-out', '#reset-view', '#top-view', '#inspect-structure']) $(selector).disabled = true;
}

document.querySelectorAll('input[name="case"], input[name="theme"]').forEach((input) => {
  input.addEventListener('change', () => updateConfiguration({ [input.name]: input.value }));
});
$('#configuration-name').addEventListener('input', (event) => updateConfiguration({ name: event.target.value }));
$('#explode-button').addEventListener('click', () => setExploded(!exploded));
$('#zoom-in').addEventListener('click', () => studio?.zoom(1));
$('#zoom-out').addEventListener('click', () => studio?.zoom(-1));
$('#reset-view').addEventListener('click', () => studio?.resetView());
$('#top-view').addEventListener('click', () => studio?.resetView(true));

$('#experience-toggle').addEventListener('click', (event) => {
  experience = !experience;
  studio?.setExperience(experience);
  $('#experience-toggle').setAttribute('aria-checked', String(experience));
  $('#viewer-shell').classList.toggle('is-experiencing', experience);
  $('#experience-report').classList.toggle('is-active', experience);
  $('#sound-toggle').disabled = !experience;
  $('#press-count').hidden = !experience;
  $('#experience-message').textContent = experience ? '试着按下 A–Z / 空格，或直接点触键帽。' : '好设计，从每一次触碰开始。';
  // A pointer activation leaves Space free to play the keyboard immediately.
  if (event.detail > 0) event.currentTarget.blur();
  if (experience) showToast('体验已开启。按 A–Z / 空格，或点击键帽。');
});

$('#sound-toggle').addEventListener('click', () => {
  soundEnabled = !soundEnabled;
  $('#sound-toggle').setAttribute('aria-pressed', String(soundEnabled));
  $('#sound-toggle').setAttribute('aria-label', soundEnabled ? '关闭按键声音' : '开启按键声音');
  $('#sound-toggle').title = soundEnabled ? '关闭按键声音' : '开启按键声音';
  $('#sound-toggle').innerHTML = icon(soundEnabled ? 'sound' : 'mute');
  if (soundEnabled) makeClickSound();
});

function isEditing(event) {
  return event.composedPath().some((element) => element instanceof HTMLElement && (element.isContentEditable || element.matches('input, textarea, select, [role="textbox"]')));
}

function keydown(event) {
  if (!experience || event.repeat || event.isComposing || isEditing(event) || event.ctrlKey || event.metaKey || event.altKey) return;
  if (!/^(Key[A-Z]|Space|Arrow(Up|Down|Left|Right))$/.test(event.code)) return;
  if (event.code === 'Space' && event.target instanceof HTMLElement && event.target.closest('button, a, [role="switch"]')) return;
  event.preventDefault();
  studio?.press(event.code);
}
function keyup(event) { studio?.release(event.code); }
function blur() { studio?.releaseAll(); }
window.addEventListener('keydown', keydown);
window.addEventListener('keyup', keyup);
window.addEventListener('blur', blur);

$('#save-configuration').addEventListener('click', () => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
    savedConfig = { ...config };
    updateInterface();
    showToast('已保存你的配置，下次打开就能继续。');
  } catch {
    showToast('浏览器未允许本地保存，请检查存储设置。', true);
  }
});

$('#restore-default').addEventListener('click', () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
    savedConfig = null;
    config = { ...DEFAULT_CONFIG };
    updateInterface();
    studio?.configure(config);
    setExploded(false);
    studio?.resetView();
    showToast('已恢复苔绿 × 抹茶拿铁，并清除本页保存的配置。');
  } catch {
    showToast('浏览器未允许清除本地配置，请检查存储设置。', true);
  }
});

$('#inspect-structure').addEventListener('click', () => {
  setExploded(true);
  studio?.resetView();
  $('#viewer-shell').scrollIntoView({ behavior: 'smooth', block: 'center' });
});
$('#dismiss-toast').addEventListener('click', () => $('#toast').classList.remove('is-visible'));

if (import.meta.hot) {
  import.meta.hot.dispose(() => {
    studio?.dispose();
    clearTimeout(toastTimer);
    audioContext?.close();
    window.removeEventListener('keydown', keydown);
    window.removeEventListener('keyup', keyup);
    window.removeEventListener('blur', blur);
  });
}
