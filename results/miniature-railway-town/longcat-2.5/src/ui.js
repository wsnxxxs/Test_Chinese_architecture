export function initUI(handlers) {
  const runningBtn = document.getElementById('btn-run');
  const speedSlider = document.getElementById('speed');
  const speedLabel = document.getElementById('speed-label');
  const resetBtn = document.getElementById('btn-reset');
  const timeBtns = document.querySelectorAll('[data-time]');
  const statusEl = document.getElementById('status');

  const state = { running: true, speed: 1 };

  function updateStatus() {
    statusEl.textContent = state.running
      ? `运行中 · ${state.speed.toFixed(2)}x`
      : '已暂停';
  }

  runningBtn.addEventListener('click', () => {
    state.running = !state.running;
    runningBtn.textContent = state.running ? '暂停' : '运行';
    updateStatus();
  });

  speedSlider.addEventListener('input', () => {
    state.speed = parseFloat(speedSlider.value);
    speedLabel.textContent = state.speed.toFixed(2) + 'x';
    handlers.onSpeed(state.speed);
    updateStatus();
  });

  resetBtn.addEventListener('click', () => {
    state.running = true;
    state.speed = 1;
    speedSlider.value = '1';
    speedLabel.textContent = '1.00x';
    runningBtn.textContent = '暂停';
    handlers.onReset();
    updateStatus();
  });

  for (const btn of timeBtns) {
    btn.addEventListener('click', () => {
      for (const b of timeBtns) b.classList.remove('active');
      btn.classList.add('active');
      handlers.onTime(btn.dataset.time);
    });
  }

  updateStatus();
  return state;
}
