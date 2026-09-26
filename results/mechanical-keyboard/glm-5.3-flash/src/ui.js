import { CASES, THEMES } from './config.js';

/**
 * 配置界面：生成外壳/键帽选择器，绑定开关与 HUD 按钮，
 * sync(state) 让 UI 与 3D 预览、配置摘要保持一致。
 */

const $ = (sel) => document.querySelector(sel);

export function initUI(state, handlers) {
  // --- 外壳色卡 ---
  const caseWrap = $('#caseSwatches');
  for (const c of CASES) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'swatch';
    btn.dataset.id = c.id;
    btn.setAttribute('role', 'radio');
    btn.innerHTML = `<span class="dot" style="background:${c.swatch}"></span><span class="name">${c.name}</span>`;
    btn.addEventListener('click', () => {
      handlers.onCase(c.id);
      btn.blur(); // 防止空格键误触按钮
    });
    caseWrap.appendChild(btn);
  }

  // --- 键帽主题卡 ---
  const themeWrap = $('#themeSwatches');
  for (const t of THEMES) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'swatch';
    btn.dataset.id = t.id;
    btn.setAttribute('role', 'radio');
    btn.innerHTML = `
      <span class="palette">
        <i style="background:${t.caps.base}"></i>
        <i style="background:${t.caps.mod}"></i>
        <i style="background:${t.caps.accentKey}"></i>
      </span>
      <span class="name">${t.name}</span>`;
    btn.addEventListener('click', () => {
      handlers.onTheme(t.id);
      btn.blur();
    });
    themeWrap.appendChild(btn);
  }

  // --- 开关 ---
  $('#explodeToggle').addEventListener('change', (e) => {
    handlers.onExplode(e.target.checked);
    e.target.blur();
  });
  $('#experienceToggle').addEventListener('change', (e) => {
    handlers.onExperience(e.target.checked);
    e.target.blur();
  });
  $('#soundToggle').addEventListener('click', (e) => {
    handlers.onSound();
    e.currentTarget.blur();
  });
  $('#resetView').addEventListener('click', (e) => {
    handlers.onResetView();
    e.currentTarget.blur();
  });
  $('#resetDefaults').addEventListener('click', (e) => {
    handlers.onResetDefaults();
    e.currentTarget.blur();
  });

  // --- 状态同步 ---
  function sync(state) {
    const theme = THEMES.find((t) => t.id === state.themeId) ?? THEMES[0];
    document.documentElement.style.setProperty('--accent', theme.accent);

    for (const btn of caseWrap.querySelectorAll('.swatch')) {
      btn.classList.toggle('selected', btn.dataset.id === state.caseId);
      btn.setAttribute('aria-checked', String(btn.dataset.id === state.caseId));
    }
    for (const btn of themeWrap.querySelectorAll('.swatch')) {
      btn.classList.toggle('selected', btn.dataset.id === state.themeId);
      btn.setAttribute('aria-checked', String(btn.dataset.id === state.themeId));
    }

    $('#explodeToggle').checked = state.exploded;
    $('#experienceToggle').checked = state.experience;

    const soundBtn = $('#soundToggle');
    soundBtn.textContent = state.sound ? '🔊 按键音' : '🔇 按键音';
    soundBtn.setAttribute('aria-pressed', String(state.sound));

    $('#sumCase').textContent = (CASES.find((c) => c.id === state.caseId) ?? CASES[0]).name;
    $('#sumTheme').textContent = theme.name;
    $('#sumStruct').textContent = state.exploded ? '拆解视图 · Gasket' : '整机 · Gasket 消音';
  }

  function markSaved() {
    const el = $('#savedAt');
    const time = new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
    el.textContent = `配置已本地保存 · ${time}`;
  }

  return { sync, markSaved };
}
