import './style.css';
import { RailwaySimulation } from './route.js';

const $ = (id) => document.getElementById(id);
const simulation = new RailwaySimulation();
let world;
let night = false;
let previous = 0;
let toastTimer;
let uiTimer = 0;
const controls = ['run-button', 'speed', 'day-button', 'night-button', 'reset-button'];
controls.forEach((id) => { $(id).disabled = true; });

function notify(message) {
  $('toast').textContent = message;
  $('toast').classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => $('toast').classList.remove('visible'), 2300);
}
function updateUI() {
  $('run-label').textContent = simulation.running ? '暂停' : '运行';
  $('run-icon').setAttribute('href', simulation.running ? '#i-pause' : '#i-play');
  $('run-button').setAttribute('aria-label', simulation.running ? '暂停列车' : '运行列车');
  $('run-button').setAttribute('aria-pressed', String(!simulation.running));
  $('speed').value = simulation.speed;
  $('speed').style.setProperty('--fill', `${(simulation.speed - 0.25) / 1.75 * 100}%`);
  const speedText = Number.isInteger(simulation.speed * 10) ? simulation.speed.toFixed(1) : simulation.speed.toFixed(2);
  $('speed-value').innerHTML = `${speedText}<span>×</span>`;
  $('status-dot').className = `status-dot ${simulation.phase}`;
  $('journey-label').textContent = simulation.phase === 'paused' ? '柳溪环线 · 已暂停' : simulation.phase === 'station' ? '柳溪站 · 停靠中' : '柳溪环线 · 正在行驶';
  $('journey-detail').textContent = simulation.dwellRemaining > 0 ? `${simulation.running ? '' : '停站计时已暂停 · '}${simulation.dwellRemaining.toFixed(1)} 秒后出发` : simulation.running ? '下一站，柳溪站' : '让好风景多停留一会';
}
function toggleRunning() { simulation.running = !simulation.running; updateUI(); }
function setNight(value) {
  night = value;
  world?.setNight(night);
  document.body.classList.toggle('night', night);
  $('day-button').classList.toggle('active', !night);
  $('night-button').classList.toggle('active', night);
  $('day-button').setAttribute('aria-pressed', String(!night));
  $('night-button').setAttribute('aria-pressed', String(night));
  $('time-caption').textContent = night ? 'AFTER THE SUNSET' : 'GOLDEN HOUR';
  $('light-caption').textContent = night ? '灯火初上 · 小镇未眠' : '日落之前 · 暖阳正好';
  document.querySelector('meta[name="theme-color"]').content = night ? '#1d3039' : '#ebe7de';
}
function reset() {
  simulation.reset();
  world?.reset();
  setNight(false);
  previous = 0;
  updateUI();
  notify('已回到最初的风景');
}
$('run-button').addEventListener('click', toggleRunning);
$('speed').addEventListener('input', (e) => { simulation.setSpeed(Number(e.target.value)); updateUI(); });
$('day-button').addEventListener('click', () => setNight(false));
$('night-button').addEventListener('click', () => setNight(true));
$('reset-button').addEventListener('click', reset);
$('retry-button').addEventListener('click', () => location.reload());
$('about-button').addEventListener('click', () => $('about-dialog').showModal());
$('close-about').addEventListener('click', () => $('about-dialog').close());
$('about-dialog').addEventListener('click', (event) => { if (event.target === $('about-dialog')) { const r = event.target.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) event.target.close(); } });
window.addEventListener('keydown', (event) => {
  if (!world || $('about-dialog').open || /INPUT|TEXTAREA|SELECT|BUTTON/.test(document.activeElement?.tagName || '')) return;
  if (event.code === 'Space') { event.preventDefault(); toggleRunning(); }
  if (event.code === 'KeyR') reset();
  if (event.code === 'KeyN') setNight(!night);
});
document.addEventListener('visibilitychange', () => { previous = 0; });

async function boot() {
  try {
    const { Diorama } = await import('./world.js');
    world = new Diorama($('viewport'));
    updateUI();
    controls.forEach((id) => { $(id).disabled = false; });
    world.update(0, simulation);
    world.render();
    $('loading').style.opacity = '0';
    setTimeout(() => $('loading').remove(), 650);
    function frame(now) {
      const dt = previous ? Math.min((now - previous) / 1000, 0.08) : 0;
      previous = now;
      if (!document.hidden && !world.contextLost) {
        simulation.update(dt);
        world.update(dt, simulation);
        world.render();
        uiTimer += dt;
        if (uiTimer > 0.09) { updateUI(); uiTimer = 0; }
      }
      world.animationId = requestAnimationFrame(frame);
    }
    world.animationId = requestAnimationFrame(frame);
    if (import.meta.env.DEV || new URLSearchParams(location.search).has('debug')) {
      window.__RAILWAY__ = { simulation, world, reset, setNight, snapshot: () => ({ ...simulation.snapshot(), night, ...world.inspect() }) };
    }
    window.addEventListener('pagehide', () => { previous = 0; });
    if (import.meta.hot) import.meta.hot.dispose(() => world.dispose());
  } catch (error) {
    console.error('[Willowbrook]', error);
    $('loading')?.remove();
    $('error').hidden = false;
    $('error-message').textContent = '请使用支持 WebGL 2 的浏览器并开启硬件加速。若尚未安装项目依赖，请先执行 npm install，再运行 npm run dev。';
  }
}
boot();
