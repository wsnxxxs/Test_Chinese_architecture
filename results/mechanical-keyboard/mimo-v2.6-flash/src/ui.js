/**
 * HTML 控件绑定：配色/主题选择、拆解、体验模式、摘要同步、保存与恢复。
 */
import { KEY_COUNT } from './keyboard/layout.js';
import { SHELLS, THEMES, getShell, getTheme } from './keyboard/themes.js';
import { setSoundEnabled, playSound } from './audio.js';

const $ = (sel) => document.querySelector(sel);

export function initUI({ store, stage }) {
  setSoundEnabled(store.getState().sound);

  /* ── 元素 ── */
  const els = {
    shellName: $('#summary-shell-name'),
    themeName: $('#summary-theme-name'),
    headline: $('#summary-headline'),
    sumShell: $('#sum-shell'),
    sumTheme: $('#sum-theme'),
    sumStructure: $('#sum-structure'),
    sumTyping: $('#sum-typing'),
    sumKeys: $('#sum-keys'),
    explodeBtn: $('#btn-explode'),
    explodeLabel: $('#explode-label'),
    explodeDesc: $('#explode-desc'),
    typingBtn: $('#btn-typing'),
    typingLabel: $('#typing-label'),
    typingDesc: $('#typing-desc'),
    soundBtn: $('#btn-sound'),
    resetBtn: $('#btn-reset-view'),
    saveBtn: $('#btn-save'),
    restoreBtn: $('#btn-restore'),
    saveHint: $('#save-hint'),
    toast: $('#toast'),
    hintMain: document.querySelector('.hint-main'),
    hintAlt: document.querySelector('.hint-alt'),
    status: $('#viewport-status'),
    statusText: $('#status-text'),
    footNote: $('#foot-note'),
    chipKeyCount: $('#chip-key-count'),
  };

  els.sumKeys.textContent = `${KEY_COUNT} 键 · 65% 配列`;
  els.chipKeyCount.textContent = String(KEY_COUNT);

  /* ── 摘要与选中态同步 ── */
  function render() {
    const state = store.getState();
    const shell = getShell(state.shell);
    const theme = getTheme(state.theme);

    els.shellName.textContent = shell.name;
    els.themeName.textContent = theme.name;
    els.headline.textContent = `ORBIT 65 · ${shell.name} × ${theme.name}`;
    els.sumShell.textContent = `${shell.name} / ${shell.en}`;
    els.sumTheme.textContent = `${theme.name} / ${theme.en}`;

    document.querySelectorAll('[data-shell]').forEach((btn) => {
      btn.setAttribute('aria-checked', String(btn.dataset.shell === state.shell));
    });
    document.querySelectorAll('[data-theme]').forEach((btn) => {
      btn.setAttribute('aria-checked', String(btn.dataset.theme === state.theme));
    });

    els.soundBtn.setAttribute('aria-pressed', String(state.sound));
    els.soundBtn.textContent = state.sound ? '音效 · 开' : '音效 · 关';
  }

  function renderMode() {
    const exploded = stage.isExploded();
    const typing = stage.isTypingMode();

    els.explodeBtn.setAttribute('aria-pressed', String(exploded));
    els.explodeLabel.textContent = exploded ? '组装复原' : '拆解视图';
    els.explodeDesc.textContent = exploded
      ? '点击让三层结构平滑合拢'
      : '键帽 / 定位板 / 底壳 三层展开';
    els.sumStructure.textContent = exploded ? '拆解视图（三层展开）' : '组装完成';

    els.typingBtn.setAttribute('aria-pressed', String(typing));
    els.typingLabel.textContent = typing ? '退出体验模式' : '键盘体验模式';
    els.typingDesc.textContent = typing
      ? '按下 A—Z / 空格，键帽真实下压回弹'
      : '开启后敲击 A—Z / 空格体验键程';
    els.sumTyping.textContent = typing ? '已启用' : '未启用';

    els.hintMain.hidden = typing;
    els.hintAlt.hidden = !typing;
    els.status.hidden = !typing;
    els.statusText.textContent = '体验模式 · 敲击任意键试试';
    els.footNote.textContent = typing
      ? '体验模式已开启：实体键盘 A—Z / 空格，触屏点击键帽均可触发'
      : '拖拽空白处旋转视角，滚轮拉近观察键帽细节';
  }

  let toastTimer = 0;
  function toast(message) {
    els.toast.textContent = message;
    els.toast.hidden = false;
    void els.toast.offsetWidth; // 强制回流，保证过渡动画播放
    els.toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      els.toast.classList.remove('show');
      setTimeout(() => {
        els.toast.hidden = true;
      }, 240);
    }, 2200);
  }

  function stamp() {
    const d = new Date();
    const p = (n) => String(n).padStart(2, '0');
    return `${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`;
  }

  /* ── 配色 / 主题 ── */
  document.querySelectorAll('[data-shell]').forEach((btn) => {
    btn.addEventListener('click', () => {
      store.setShell(btn.dataset.shell);
      playSound('click', 0.7);
    });
  });
  document.querySelectorAll('[data-theme]').forEach((btn) => {
    btn.addEventListener('click', () => {
      store.setTheme(btn.dataset.theme);
      playSound('click', 0.7);
    });
  });

  /* ── 拆解 / 组装 ── */
  els.explodeBtn.addEventListener('click', () => {
    stage.setExploded(!stage.isExploded());
    renderMode();
  });

  /* ── 体验模式 ── */
  els.typingBtn.addEventListener('click', () => {
    stage.setTypingMode(!stage.isTypingMode());
    renderMode();
  });

  /* ── 音效开关 ── */
  els.soundBtn.addEventListener('click', () => {
    const next = !store.getState().sound;
    store.setSound(next);
    setSoundEnabled(next);
    if (next) playSound('press', 1);
  });

  /* ── 视角 ── */
  els.resetBtn.addEventListener('click', () => {
    stage.resetView();
    playSound('click', 0.6);
  });

  /* ── 保存 / 恢复 ── */
  els.saveBtn.addEventListener('click', () => {
    if (store.save()) {
      els.saveHint.textContent = `已保存到本机浏览器 · ${stamp()}，刷新后自动恢复。`;
      els.saveHint.classList.add('ok');
      toast('配置已保存到本地 ✓');
      playSound('click', 0.8);
    } else {
      els.saveHint.textContent = '保存失败：浏览器禁用了本地存储。';
      els.saveHint.classList.remove('ok');
      toast('保存失败，请检查浏览器存储权限');
    }
  });

  els.restoreBtn.addEventListener('click', () => {
    store.restoreDefaults();
    toast('已恢复默认配置（仅清除本页保存的数据）');
    els.saveHint.textContent = '已恢复默认配置，本页保存的数据已清除。';
    els.saveHint.classList.remove('ok');
    playSound('click', 0.7);
  });

  /* ── 状态订阅：配置变化 → 3D 预览 + 摘要 ── */
  store.subscribe((state) => {
    stage.setShell(state.shell);
    stage.setTheme(state.theme);
    setSoundEnabled(state.sound);
    render();
  });

  // 初始渲染：应用已保存（或默认）的配置
  const initial = store.getState();
  stage.setShell(initial.shell);
  stage.setTheme(initial.theme);
  render();
  renderMode();

  if (store.wasRestored()) {
    els.saveHint.textContent = '已从本地恢复上次保存的配置。';
    els.saveHint.classList.add('ok');
  }
}
