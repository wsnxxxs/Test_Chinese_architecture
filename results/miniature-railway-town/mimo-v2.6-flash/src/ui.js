/**
 * 页面控制台：运行/暂停、速度、复位、时段切换与状态显示。
 */
const TIME_ICONS = { dusk: '🌆', day: '☀️', night: '🌙' };

export function initUI(handlers) {
  const btnRun = document.getElementById('btn-run');
  const btnReset = document.getElementById('btn-reset');
  const btnTime = document.getElementById('btn-time');
  const speed = document.getElementById('speed');
  const speedValue = document.getElementById('speed-value');
  const statusTrain = document.getElementById('status-train');
  const statusTime = document.getElementById('status-time');

  let running = true;

  btnRun.addEventListener('click', () => {
    running = !running;
    btnRun.textContent = running ? '⏸ 暂停' : '▶ 运行';
    btnRun.classList.toggle('primary', running);
    handlers.onToggleRun(running);
    if (!running) setStatus('已暂停', 'stopped');
  });

  btnReset.addEventListener('click', () => {
    running = true;
    btnRun.textContent = '⏸ 暂停';
    btnRun.classList.add('primary');
    speed.value = '1';
    speedValue.textContent = '1.00×';
    handlers.onReset();
    setStatus('运行中', '');
  });

  btnTime.addEventListener('click', () => {
    const next = handlers.onCycleTime();
    const label = handlers.getTimeLabel(next);
    btnTime.textContent = `${TIME_ICONS[next]} ${label.label}`;
    statusTime.textContent = `${label.label} ${label.clock}`;
  });

  speed.addEventListener('input', () => {
    const v = parseFloat(speed.value);
    speedValue.textContent = `${v.toFixed(2)}×`;
    handlers.onSpeed(v);
  });

  function setStatus(text, cls) {
    statusTrain.textContent = text;
    statusTrain.className = cls;
  }

  function setRunningUI(isRunning) {
    running = isRunning;
    btnRun.textContent = isRunning ? '⏸ 暂停' : '▶ 运行';
    btnRun.classList.toggle('primary', isRunning);
  }

  return { setStatus, setRunningUI };
}
