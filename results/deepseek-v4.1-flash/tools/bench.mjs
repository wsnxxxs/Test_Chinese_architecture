/**
 * tools/bench.mjs — 用 CDP 连接无头 Chrome，读取页面内置 FPS 计数
 * 用法：node tools/bench.mjs [url] [等多久ms]
 */
import { spawn } from 'node:child_process';
import { mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const URL_ = process.argv[2] || 'http://127.0.0.1:4173/';
const WAIT = Number(process.argv[3] || 9000);
const PORT = 9333;

const udd = mkdtempSync(join(tmpdir(), 'cdp-'));
const args = [
  '--headless=new',
  `--remote-debugging-port=${PORT}`,
  `--user-data-dir=${udd}`,
  '--no-first-run', '--no-default-browser-check', '--disable-extensions',
  '--enable-unsafe-swiftshader',
  '--use-angle=d3d11',
  '--window-size=1600,900',
  '--hide-scrollbars',
  URL_
];

const proc = spawn(CHROME, args, { stdio: 'ignore' });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function findWs() {
  for (let i = 0; i < 40; i++) {
    try {
      const r = await fetch(`http://127.0.0.1:${PORT}/json/list`);
      const list = await r.json();
      const page = list.find((t) => t.type === 'page' && t.webSocketDebuggerUrl);
      if (page) return page.webSocketDebuggerUrl;
    } catch { /* retry */ }
    await sleep(300);
  }
  throw new Error('CDP 未就绪');
}

const EXPR = `(() => {
  const s = window.__scene;
  const r = s && s.renderer;
  const gl = r && r.getContext();
  const dbg = gl && gl.getExtension('WEBGL_debug_renderer_info');
  return JSON.stringify({
    fps: (document.getElementById('s-fps')||{}).textContent,
    vox: (document.getElementById('s-vox')||{}).textContent,
    build: (document.getElementById('s-ms')||{}).textContent,
    calls: r ? r.info.render.calls : -1,
    tris: r ? r.info.render.triangles : -1,
    programs: r ? r.info.programs.length : -1,
    dpr: r ? r.getPixelRatio() : -1,
    size: r ? [r.domElement.width, r.domElement.height] : [],
    shadows: r ? r.shadowMap.enabled : null,
    gpu: dbg ? gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL) : (gl ? gl.getParameter(gl.RENDERER) : '?'),
    heights: s ? s.heights : null
  });
})()`;

try {
  const wsUrl = await findWs();
  const ws = new WebSocket(wsUrl);
  let id = 0;
  const pending = new Map();
  const send = (method, params) =>
    new Promise((res) => { const i = ++id; pending.set(i, res); ws.send(JSON.stringify({ id: i, method, params })); });
  ws.addEventListener('message', (ev) => {
    const m = JSON.parse(ev.data);
    if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); }
  });
  await new Promise((r) => ws.addEventListener('open', r));
  await send('Runtime.enable', {});
  await sleep(WAIT);                       // 让页面跑一段时间，采集平均帧率
  const out = await send('Runtime.evaluate', { expression: EXPR, returnByValue: true });
  console.log(JSON.stringify(JSON.parse(out.result.result.value), null, 2));
  ws.close();
} finally {
  proc.kill();
  setTimeout(() => process.exit(0), 300);
}
