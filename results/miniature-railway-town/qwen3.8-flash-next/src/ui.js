import { PRESETS } from './scene/lighting.js';

const html = String.raw`
<div id="hud" aria-label="沙盘控制台">
  <header class="brand">
    <h1>微缩铁路小镇</h1>
    <p>Meadowbank · 桌面 HO 沙盘</p>
  </header>

  <section class="panel" id="panel">
    <div class="row primary">
      <button id="btn-run" class="btn wide" type="button" aria-pressed="true">
        <span class="ico" data-ico="pause"></span><span class="lbl">暂停</span>
      </button>
      <button id="btn-reset" class="btn" type="button" title="复位视角、列车与速度">
        <span class="ico" data-ico="reset"></span><span class="lbl">复位</span>
      </button>
    </div>

    <div class="row">
      <label class="field">
        <span class="key">速度</span>
        <input id="speed" type="range" min="0.2" max="3" step="0.05" value="1" />
        <output id="speed-out">1.00×</output>
      </label>
    </div>

    <div class="row">
      <span class="key">光线</span>
      <div class="seg" id="light-seg" role="group">
        <button data-preset="day" type="button">白天</button>
        <button data-preset="dusk" type="button" class="on">傍晚</button>
        <button data-preset="night" type="button">夜晚</button>
      </div>
    </div>

    <div class="row">
      <span class="key">机位</span>
      <div class="seg" id="view-seg" role="group">
        <button data-view="orbit" type="button" class="on">环视</button>
        <button data-view="follow" type="button">跟随列车</button>
      </div>
    </div>

    <div class="row status">
      <div class="pill" id="st-state">运行中</div>
      <div class="pill" id="st-next">下一站 0.0 s</div>
      <div class="pill" id="st-lap">圈数 0</div>
    </div>
  </section>

  <footer class="hint">
    <span>拖拽旋转</span><span>滚轮缩放</span><span>右键平移</span><span>空格 运行/暂停</span><span>R 复位</span><span>1/2/3 光线</span>
  </footer>
</div>
<div id="boot"><div class="boot-inner"><strong>正在铺设沙盘…</strong><span id="boot-step">生成地形</span></div></div>
`;

/** Icons drawn with CSS masks keep the panel crisp without image assets. */
const ICONS = {
  pause: 'M6 4h4v16H6zM14 4h4v16h-4z',
  play: 'M7 3l14 9-14 9z',
  reset: 'M12 5V1L7 6l5 5V7a5 5 0 1 1-5 5H5a7 7 0 1 0 7-7z',
};

export function mountUI(handlers) {
  const host = document.createElement('div');
  host.innerHTML = html;
  document.body.appendChild(host);
  const root = host;

  const $ = (sel) => root.querySelector(sel);
  const btnRun = $('#btn-run');
  const btnReset = $('#btn-reset');
  const speed = $('#speed');
  const speedOut = $('#speed-out');
  const lightSeg = $('#light-seg');
  const viewSeg = $('#view-seg');
  const stState = $('#st-state');
  const stNext = $('#st-next');
  const stLap = $('#st-lap');
  const panel = $('#panel');
  const boot = $('#boot');
  const bootStep = $('#boot-step');

  for (const el of root.querySelectorAll('[data-ico]')) {
    el.style.setProperty('--ico', `url("data:image/svg+xml,${svg(ICONS[el.dataset.ico])}")`);
    el.classList.add('has-ico');
  }

  let running = true;
  const setRunning = (v) => {
    running = v;
    btnRun.setAttribute('aria-pressed', String(v));
    btnRun.querySelector('.lbl').textContent = v ? '暂停' : '运行';
    btnRun.querySelector('.ico').style.setProperty('--ico', `url("data:image/svg+xml,${svg(v ? ICONS.pause : ICONS.play)}")`);
    btnRun.classList.toggle('paused', !v);
    handlers.onRun?.(v);
  };

  const paintSpeed = (v) => {
    const pct = ((v - Number(speed.min)) / (Number(speed.max) - Number(speed.min))) * 100;
    speed.style.setProperty('--fill', `${pct}%`);
    speedOut.textContent = `${v.toFixed(2)}×`;
  };

  btnRun.addEventListener('click', () => setRunning(!running));
  btnReset.addEventListener('click', () => handlers.onReset?.());
  speed.addEventListener('input', () => {
    const v = Number(speed.value);
    paintSpeed(v);
    handlers.onSpeed?.(v);
  });
  paintSpeed(Number(speed.value));
  for (const b of lightSeg.querySelectorAll('button')) {
    b.addEventListener('click', () => {
      lightSeg.querySelectorAll('button').forEach((o) => o.classList.toggle('on', o === b));
      handlers.onPreset?.(b.dataset.preset);
    });
  }
  for (const b of viewSeg.querySelectorAll('button')) {
    b.addEventListener('click', () => {
      viewSeg.querySelectorAll('button').forEach((o) => o.classList.toggle('on', o === b));
      handlers.onView?.(b.dataset.view);
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.target instanceof HTMLInputElement) return;
    if (e.code === 'Space') { e.preventDefault(); setRunning(!running); }
    else if (e.key === 'r' || e.key === 'R') handlers.onReset?.();
    else if (e.key === '1') lightSeg.querySelector('[data-preset="day"]').click();
    else if (e.key === '2') lightSeg.querySelector('[data-preset="dusk"]').click();
    else if (e.key === '3') lightSeg.querySelector('[data-preset="night"]').click();
    else if (e.key === 'f' || e.key === 'F') viewSeg.querySelector('[data-view="follow"]').click();
  });

  // collapse the panel on small windows so the沙盘 keeps its full view
  const auto = () => panel.classList.toggle('compact', window.innerWidth < 760);
  auto();
  window.addEventListener('resize', auto);
  panel.addEventListener('dblclick', () => panel.classList.toggle('compact'));

  return {
    setRunning,
    setSpeed(v) {
      speed.value = String(v);
      paintSpeed(v);
    },
    setPreset(name) {
      lightSeg.querySelectorAll('button').forEach((b) => b.classList.toggle('on', b.dataset.preset === name));
    },
    setView(name) {
      viewSeg.querySelectorAll('button').forEach((b) => b.classList.toggle('on', b.dataset.view === name));
    },
    setBootStep(text) { if (bootStep) bootStep.textContent = text; },
    hideBoot() { boot?.classList.add('gone'); },
    status(s) {
      stState.textContent = s.dwelling ? '停站中' : (s.running === false ? '已暂停' : (s.speed > 0.01 ? '运行中' : '已暂停'));
      stState.classList.toggle('dwell', !!s.dwelling);
      stNext.textContent = s.dwelling
        ? `发车倒计时 ${s.dwellLeft.toFixed(1)} s`
        : (Number.isFinite(s.toStation) ? `下一站 ${s.toStation.toFixed(1)} s` : '下一站 —');
      stLap.textContent = `圈数 ${s.laps}`;
    },
    presets: Object.keys(PRESETS),
  };
}

function svg(path) {
  return encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="${path}" fill="%23000"/></svg>`)
    .replace(/%2523/g, '%23');
}
