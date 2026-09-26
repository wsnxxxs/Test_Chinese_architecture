import './style.css';
import { createTown } from './scene.js';
import { RailwaySimulation } from './simulation.js';

const $ = id => document.getElementById(id);
const simulation = new RailwaySimulation();
let town;
try {
  town = createTown($('scene'));
  $('loading').remove();
} catch (error) {
  $('loading').textContent = '场景未能启动，请使用支持 WebGL 的浏览器并开启硬件加速。';
  console.error(error);
  throw error;
}
let night = false;
function setNight(value) {
  night = value;
  town.setNight(value);
  document.body.classList.toggle('night', value);
  for (const [id, selected] of [['day', !value], ['night', value]]) { $(id).classList.toggle('selected', selected); $(id).setAttribute('aria-pressed', String(selected)); }
  $('light-caption').innerHTML = value ? '21:00 <span>·</span> 灯火亮起，小镇入梦' : '17:30 <span>·</span> 日落之前的金色时光';
}
function updateControls() {
  $('toggle').setAttribute('aria-label', simulation.running ? '暂停列车' : '运行列车');
  $('toggle').innerHTML = simulation.running ? '<svg viewBox="0 0 20 20"><path d="M6 4v12M14 4v12"/></svg>' : '<svg viewBox="0 0 20 20"><path stroke="none" d="M5 3 17 10 5 17Z"/></svg>';
  $('speed').value = simulation.speed;
  $('speed-value').value = `${simulation.speed.toFixed(2).replace(/0$/, '')}×`;
}
function toggle() { simulation.running = !simulation.running; updateControls(); }
function reset() { simulation.reset(); town.resetCamera(); setNight(false); updateControls(); }
$('toggle').addEventListener('click', toggle);
$('speed').addEventListener('input', event => { simulation.speed = Number(event.target.value); updateControls(); });
$('reset').addEventListener('click', reset);
$('day').addEventListener('click', () => setNight(false));
$('night').addEventListener('click', () => setNight(true));
$('help').addEventListener('click', () => { const open = $('help-panel').hidden; $('help-panel').hidden = !open; $('help').setAttribute('aria-expanded', String(open)); });
document.addEventListener('keydown', event => {
  if (event.target.matches('input,button,a,textarea,select') || event.ctrlKey || event.metaKey || event.altKey || event.repeat) return;
  if (event.code === 'Space') { event.preventDefault(); toggle(); }
  if (event.key.toLowerCase() === 'r') reset();
  if (event.key === 'Escape') { $('help-panel').hidden = true; $('help').setAttribute('aria-expanded', 'false'); }
});
let lastTime = performance.now();
document.addEventListener('visibilitychange', () => { lastTime = performance.now(); });
function frame(time) {
  const delta = Math.min((time - lastTime) / 1000, .08); lastTime = time;
  simulation.update(delta);
  const status = !simulation.running ? '列车已暂停' : simulation.dwell > 0 ? '松溪站 · 停靠中' : '正在环线行驶';
  if ($('status').textContent !== status) $('status').textContent = status;
  const detail = simulation.dwell > 0 ? `距发车 ${simulation.dwell.toFixed(1)} 秒${!simulation.running ? ' · 计时已暂停' : ''}` : '松溪站 · 每圈停留 2 秒';
  if ($('journey-detail').textContent !== detail) $('journey-detail').textContent = detail;
  town.update(simulation, delta);
  requestAnimationFrame(frame);
}
updateControls();
requestAnimationFrame(frame);
