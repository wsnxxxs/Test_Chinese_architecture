// 配置界面：色板、开关、摘要、提示与本地状态同步
import { state } from './state.js';
import { CASE_THEMES, CAP_THEMES, SPECS } from './config.js';

const $ = (id) => document.getElementById(id);

const fmtTime = (ts) =>
  ts
    ? new Date(ts).toLocaleTimeString('zh-CN', { hour12: false })
    : '尚未保存';

export function initUI(actions) {
  const canvas = $('scene');
  const caseWrap = $('caseSwatches');
  const capWrap = $('capSwatches');
  const summaryEl = $('summary');
  const saveState = $('saveState');
  const toastEl = $('toast');
  const liveTrack = $('liveTrack');
  const hitCount = $('hitCount');
  const explodeLegend = $('explodeLegend');

  // —— 色板 ——
  const buildSwatches = (container, themes, group, current) => {
    container.innerHTML = '';
    for (const t of themes) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'swatch';
      btn.dataset.id = t.id;
      btn.dataset.group = group;
      btn.setAttribute('aria-pressed', String(t.id === current));
      btn.innerHTML = `<span class="chip" style="background:${t.swatch}"></span><span class="swatch-name">${t.name}</span>`;
      btn.addEventListener('click', () => actions.onConfig({ [group]: t.id }));
      container.appendChild(btn);
    }
  };

  // —— 开关 ——
  const bindSwitch = (el, key, onChange) => {
    el.addEventListener('click', () => {
      const next = el.getAttribute('aria-checked') !== 'true';
      el.setAttribute('aria-checked', String(next));
      onChange(key, next);
    });
  };
  const setSwitch = (el, on) => el.setAttribute('aria-checked', String(on));

  // —— 提示 ——
  let toastTimer = null;
  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.hidden = false;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastEl.classList.remove('show');
      setTimeout(() => (toastEl.hidden = true), 250);
    }, 2200);
  }

  // —— 实时输入轨道 ——
  const chars = [];
  function pushChar(ch) {
    chars.push(ch);
    if (chars.length > 16) chars.shift();
    liveTrack.innerHTML = '';
    for (const c of chars) {
      const s = document.createElement('span');
      s.className = 'live-chip';
      s.textContent = c;
      liveTrack.appendChild(s);
    }
    const last = liveTrack.lastElementChild;
    if (last) last.classList.add('fresh');
  }

  let hits = 0;
  function addHit() {
    hits += 1;
    hitCount.textContent = String(hits);
  }

  // —— 摘要 ——
  function renderSummary(cfg, savedAt) {
    const caseName = CASE_THEMES.find((t) => t.id === cfg.case)?.name ?? '-';
    const capName = CAP_THEMES.find((t) => t.id === cfg.caps)?.name ?? '-';
    const rows = [
      ...SPECS,
      ['外壳配色', caseName],
      ['键帽主题', capName],
      ['结构状态', cfg.exploded ? '已展开（三层）' : '已组装'],
      ['体验模式', cfg.experience ? '开启（A—Z / 空格 / 点按）' : '关闭'],
      ['按键音', cfg.sound ? '开启' : '关闭'],
      ['本地配置', fmtTime(savedAt)],
    ];
    summaryEl.innerHTML = rows
      .map(([k, v]) => `<div class="row"><dt>${k}</dt><dd>${v}</dd></div>`)
      .join('');
    document.querySelector('.combo').textContent = `${caseName} × ${capName}`;
  }

  // —— 状态同步 ——
  state.subscribe((cfg, savedAt) => {
    buildSwatches(caseWrap, CASE_THEMES, 'case', cfg.case);
    buildSwatches(capWrap, CAP_THEMES, 'caps', cfg.caps);
    setSwitch($('swExplode'), cfg.exploded);
    setSwitch($('swExperience'), cfg.experience);
    setSwitch($('swSound'), cfg.sound);
    $('btnExplode').classList.toggle('active', cfg.exploded);
    $('btnExplode').setAttribute('aria-pressed', String(cfg.exploded));
    $('btnExplode').querySelector('.tool-label').textContent = cfg.exploded ? '组装' : '拆解视图';
    $('btnMode').classList.toggle('active', cfg.experience);
    $('btnMode').setAttribute('aria-pressed', String(cfg.experience));
    $('btnSoundTop').classList.toggle('active', cfg.sound);
    $('btnSoundTop').setAttribute('aria-pressed', String(cfg.sound));
    explodeLegend.hidden = !cfg.exploded;
    document.body.classList.toggle('experience-on', cfg.experience);
    saveState.textContent = savedAt ? `已保存到本地 · ${fmtTime(savedAt)}` : '默认配置（未保存）';
    renderSummary(cfg, savedAt);
  });

  // —— 事件绑定 ——
  bindSwitch($('swExplode'), 'exploded', (_k, v) => actions.onConfig({ exploded: v }));
  bindSwitch($('swExperience'), 'experience', (_k, v) => {
    actions.onConfig({ experience: v });
    toast(v ? '体验模式已开启：按下 A—Z 或空格' : '体验模式已关闭');
  });
  bindSwitch($('swSound'), 'sound', (_k, v) => {
    actions.onConfig({ sound: v });
    actions.onSound(v);
  });

  $('btnExplode').addEventListener('click', () => {
    const next = !state.cfg.exploded;
    actions.onConfig({ exploded: next });
    toast(next ? '已展开：键帽 / 定位板 / 底壳' : '已组装');
  });
  $('btnMode').addEventListener('click', () => actions.onConfig({ experience: !state.cfg.experience }));
  $('btnSoundTop').addEventListener('click', () => {
    const next = !state.cfg.sound;
    actions.onConfig({ sound: next });
    actions.onSound(next);
    toast(next ? '按键音已开启' : '按键音已关闭');
  });
  $('btnResetView').addEventListener('click', () => actions.onResetView());
  $('btnSave').addEventListener('click', () => {
    state.set({});
    toast('配置已保存到本地');
  });
  $('btnDefault').addEventListener('click', () => {
    actions.onReset();
    toast('已恢复默认配置（仅清除本页配置）');
  });
  canvas.addEventListener('dblclick', () => actions.onResetView());

  return { toast, pushChar, addHit };
}
