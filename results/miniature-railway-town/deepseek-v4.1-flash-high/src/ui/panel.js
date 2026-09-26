/**
 * 控制面板：暂停 / 速度 / 时段 / 复位 / 状态。
 * 面板不持有仿真状态，只呈现 main.js 通过 setXxx 回写的值，并通过 handlers 上报用户操作。
 */
import { CONFIG, TIME_OF_DAY_MODES } from '../config.js';

const MODE_LABELS = { day: '白天', evening: '傍晚', night: '夜晚' };
/** 状态文案 -> 样式类，顺序即匹配优先级 */
const STATUS_CLASSES = [
  ['暂停', 'is-paused'],
  ['停靠', 'is-stopped'],
];

export function createPanel(root, handlers = {}) {
  const host = root || document.body;
  const speedRange = CONFIG.train.speedMultiplier;
  let speedMultiplier = speedRange.default;

  const el = document.createElement('section');
  el.className = 'panel';
  el.innerHTML = `
    <div class="panel__head">
      <span class="panel__title">控 制 台</span>
      <span class="panel__status is-running" data-role="status">运行中</span>
    </div>
    <div class="panel__row">
      <button type="button" class="btn" data-role="pause">暂停</button>
      <button type="button" class="btn" data-role="reset">复位</button>
    </div>
    <div class="panel__field">
      <div class="panel__label"><span>速度倍率</span><span class="panel__value" data-role="speed-value">×1.00</span></div>
      <input class="slider" type="range" data-role="speed" aria-label="列车速度倍率"
        min="${speedRange.min}" max="${speedRange.max}" step="${speedRange.step}" value="${speedRange.default}" />
      <div class="panel__sub" data-role="speed-units">${(CONFIG.train.speed * speedRange.default).toFixed(2)} 单位/秒</div>
    </div>
    <div class="panel__field">
      <div class="panel__label"><span>时段</span></div>
      <div class="segmented" data-role="modes">
        ${TIME_OF_DAY_MODES.map(
          (mode) => `<button type="button" class="btn" data-mode="${mode}">${MODE_LABELS[mode] || mode}</button>`,
        ).join('')}
      </div>
    </div>
  `;
  host.appendChild(el);

  const pauseBtn = el.querySelector('[data-role="pause"]');
  const resetBtn = el.querySelector('[data-role="reset"]');
  const speedSlider = el.querySelector('[data-role="speed"]');
  const speedValue = el.querySelector('[data-role="speed-value"]');
  const speedUnits = el.querySelector('[data-role="speed-units"]');
  const statusEl = el.querySelector('[data-role="status"]');
  const modeBtns = Array.from(el.querySelectorAll('[data-mode]'));

  function paintSlider() {
    const span = speedRange.max - speedRange.min;
    const pct = span > 0 ? ((speedMultiplier - speedRange.min) / span) * 100 : 0;
    speedSlider.style.setProperty('--fill', `${pct.toFixed(2)}%`);
  }

  // 点击后主动失焦：避免空格键既触发全局快捷键又重复激活按钮
  pauseBtn.addEventListener('click', () => {
    pauseBtn.blur();
    if (handlers.onTogglePause) handlers.onTogglePause();
  });

  resetBtn.addEventListener('click', () => {
    resetBtn.blur();
    if (handlers.onReset) handlers.onReset();
  });

  speedSlider.addEventListener('input', () => {
    const value = Number.parseFloat(speedSlider.value);
    if (!Number.isFinite(value)) return;
    if (handlers.onSpeedChange) handlers.onSpeedChange(value);
  });
  speedSlider.addEventListener('change', () => {
    speedSlider.blur();
  });

  for (const btn of modeBtns) {
    btn.addEventListener('click', () => {
      btn.blur();
      const mode = btn.dataset.mode;
      if (handlers.onModeChange) handlers.onModeChange(mode);
    });
  }

  paintSlider();

  return {
    setPaused(paused) {
      const on = Boolean(paused);
      pauseBtn.textContent = on ? '继续' : '暂停';
      pauseBtn.classList.toggle('is-active', on);
      pauseBtn.setAttribute('aria-pressed', on ? 'true' : 'false');
    },

    setSpeed(multiplier, unitsPerSecond) {
      speedMultiplier = multiplier;
      const asText = String(multiplier);
      if (speedSlider.value !== asText) speedSlider.value = asText;
      speedValue.textContent = `×${multiplier.toFixed(2)}`;
      speedUnits.textContent = `${unitsPerSecond.toFixed(2)} 单位/秒`;
      paintSlider();
    },

    setMode(mode) {
      for (const btn of modeBtns) {
        const on = btn.dataset.mode === mode;
        btn.classList.toggle('is-active', on);
        btn.setAttribute('aria-pressed', on ? 'true' : 'false');
      }
    },

    setStatus(text) {
      statusEl.textContent = text;
      let cls = 'is-running';
      for (const [needle, name] of STATUS_CLASSES) {
        if (text.includes(needle)) {
          cls = name;
          break;
        }
      }
      statusEl.classList.remove('is-running', 'is-paused', 'is-stopped');
      statusEl.classList.add(cls);
    },

    getSpeedMultiplier() {
      return speedMultiplier;
    },
  };
}
