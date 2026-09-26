/**
 * 控制面板：运行/暂停、速度、复位、昼夜切换 + 状态栏 + 快捷键。
 */
export function initUI(handlers) {
  const btnPlay = document.getElementById('btn-play');
  const btnReset = document.getElementById('btn-reset');
  const btnDayNight = document.getElementById('btn-daynight');
  const speedRange = document.getElementById('speed-range');
  const speedValue = document.getElementById('speed-value');
  const status = document.getElementById('hud-status');

  const ui = {
    playing: true,
    speed: 1,
    night: false,
    mode: 'running',
    dwell: 0,
    stationName: '青溪镇站',
  };

  function render() {
    btnPlay.textContent = ui.playing ? '⏸ 暂停' : '▶ 运行';
    btnDayNight.textContent = ui.night ? '☀ 白天' : '🌙 夜晚';
    speedValue.textContent = `${ui.speed.toFixed(2)}×`;
    const runText = ui.mode === 'dwelling' ? `停靠${ui.stationName} ${ui.dwell.toFixed(1)}s` : ui.playing ? '运行中' : '已暂停';
    status.textContent = `${runText} · ${ui.night ? '夜晚' : '白天'} · ${ui.speed.toFixed(2)}×`;
  }

  btnPlay.addEventListener('click', () => {
    ui.playing = !ui.playing;
    handlers.onPlayToggle(ui.playing);
    render();
  });

  btnReset.addEventListener('click', () => {
    ui.playing = true;
    ui.speed = 1;
    ui.night = false;
    ui.mode = 'running';
    speedRange.value = '1';
    handlers.onReset();
    render();
  });

  btnDayNight.addEventListener('click', () => {
    ui.night = !ui.night;
    handlers.onDayNight(ui.night);
    render();
  });

  speedRange.addEventListener('input', () => {
    ui.speed = parseFloat(speedRange.value);
    handlers.onSpeed(ui.speed);
    render();
  });

  window.addEventListener('keydown', (e) => {
    const tag = (e.target && e.target.tagName) || '';
    if (tag === 'INPUT' || tag === 'TEXTAREA') return;
    if (e.code === 'Space') {
      e.preventDefault();
      ui.playing = !ui.playing;
      handlers.onPlayToggle(ui.playing);
    } else if (e.key === 'r' || e.key === 'R') {
      ui.playing = true;
      ui.speed = 1;
      ui.night = false;
      ui.mode = 'running';
      speedRange.value = '1';
      handlers.onReset();
    } else if (e.key === 'n' || e.key === 'N') {
      ui.night = !ui.night;
      handlers.onDayNight(ui.night);
    }
    render();
  });

  render();

  return {
    setMode(mode, dwell) {
      ui.mode = mode;
      ui.dwell = dwell;
      render();
    },
    setPlaying(v) {
      ui.playing = v;
      render();
    },
    setSpeed(v) {
      ui.speed = v;
      speedRange.value = String(v);
      render();
    },
    setNight(v) {
      ui.night = v;
      render();
    },
    render,
  };
}
