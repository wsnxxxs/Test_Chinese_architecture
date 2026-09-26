/**
 * 零依赖验收脚本：静态托管 dist/ → 无头 Chrome(真实 GPU) → CDP 读状态/测帧率/截图。
 *
 * 为什么不用内置浏览器：后台标签页会冻结 rAF 与定时器，帧率与截图都不可信。
 * headless=new + --use-angle=d3d11 能拿到真实 GPU 且不锁 vsync。
 *
 * 用法：node scripts/verify.mjs [--dpr 1|2] [--width 1600] [--height 900] [--tag name]
 */
import http from 'node:http';
import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const OUT = path.join(ROOT, 'verify');

const argv = process.argv.slice(2);
const arg = (k, d) => {
  const i = argv.indexOf(`--${k}`);
  return i >= 0 && argv[i + 1] ? argv[i + 1] : d;
};
const WIDTH = Number(arg('width', 1600));
const HEIGHT = Number(arg('height', 900));
const DPR = Number(arg('dpr', 1));
const TAG = arg('tag', `dpr${DPR}`);

const CHROME_CANDIDATES = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
];

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
};

function findChrome() {
  for (const p of CHROME_CANDIDATES) if (fs.existsSync(p)) return p;
  throw new Error('未找到 Chrome / Edge');
}

function serve(dir) {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      const url = decodeURIComponent((req.url || '/').split('?')[0]);
      let file = path.join(dir, url === '/' ? 'index.html' : url);
      if (!file.startsWith(dir)) { res.writeHead(403).end(); return; }
      if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) file = path.join(dir, 'index.html');
      const ext = path.extname(file).toLowerCase();
      res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
      fs.createReadStream(file).pipe(res);
    });
    server.listen(0, '127.0.0.1', () => resolve({ server, port: server.address().port }));
  });
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function getJSON(url, tries = 60) {
  for (let i = 0; i < tries; i++) {
    try {
      const r = await fetch(url);
      if (r.ok) return await r.json();
    } catch { /* 还没起来 */ }
    await sleep(250);
  }
  throw new Error(`CDP 端点无响应：${url}`);
}

class CDP {
  constructor(ws) {
    this.ws = ws;
    this.id = 0;
    this.pending = new Map();
    this.events = [];
    ws.addEventListener('message', (ev) => {
      const msg = JSON.parse(ev.data);
      if (msg.id && this.pending.has(msg.id)) {
        const { resolve, reject } = this.pending.get(msg.id);
        this.pending.delete(msg.id);
        msg.error ? reject(new Error(JSON.stringify(msg.error))) : resolve(msg.result);
      } else if (msg.method) {
        this.events.push(msg);
      }
    });
  }

  send(method, params = {}) {
    const id = ++this.id;
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
      this.ws.send(JSON.stringify({ id, method, params }));
      setTimeout(() => {
        if (this.pending.has(id)) { this.pending.delete(id); reject(new Error(`${method} 超时`)); }
      }, 180000);
    });
  }

  async eval(expression, { awaitPromise = false } = {}) {
    const r = await this.send('Runtime.evaluate', {
      expression, returnByValue: true, awaitPromise,
    });
    if (r.exceptionDetails) throw new Error(r.exceptionDetails.text + ' :: ' + (r.exceptionDetails.exception?.description || ''));
    return r.result.value;
  }
}

async function main() {
  await fsp.mkdir(OUT, { recursive: true });
  if (!fs.existsSync(path.join(DIST, 'index.html'))) {
    throw new Error('dist/index.html 不存在，请先 npm run build');
  }

  const { server, port } = await serve(DIST);
  const base = `http://localhost:${port}/`;
  console.log(`[serve] ${base}`);

  const dbgPort = 9300 + Math.floor(Math.random() * 400);
  const profile = path.join(os.tmpdir(), `voxel-verify-${process.pid}-${Date.now()}`);
  const chrome = spawn(findChrome(), [
    '--headless=new',
    '--enable-gpu',
    '--use-angle=d3d11',
    '--hide-scrollbars',
    '--mute-audio',
    '--no-first-run',
    '--no-default-browser-check',
    '--disable-extensions',
    '--disable-background-timer-throttling',
    '--disable-backgrounding-occluded-windows',
    '--disable-renderer-backgrounding',
    `--window-size=${WIDTH},${HEIGHT}`,
    `--force-device-scale-factor=${DPR}`,
    `--user-data-dir=${profile}`,
    `--remote-debugging-port=${dbgPort}`,
    'about:blank',
  ], { stdio: ['ignore', 'pipe', 'pipe'] });

  let chromeErr = '';
  chrome.stderr.on('data', (d) => { chromeErr += d.toString(); });

  const report = { tag: TAG, dpr: DPR, viewport: [WIDTH, HEIGHT] };

  try {
    const version = await getJSON(`http://127.0.0.1:${dbgPort}/json/version`);
    report.browser = version.Browser;
    const list = await getJSON(`http://127.0.0.1:${dbgPort}/json/list`);
    const page = list.find((t) => t.type === 'page');
    if (!page) throw new Error('未找到 page target');

    const ws = new WebSocket(page.webSocketDebuggerUrl);
    await new Promise((res, rej) => {
      ws.addEventListener('open', res, { once: true });
      ws.addEventListener('error', rej, { once: true });
    });
    const cdp = new CDP(ws);

    await cdp.send('Page.enable');
    await cdp.send('Runtime.enable');
    await cdp.send('Log.enable');
    await cdp.send('Emulation.setDeviceMetricsOverride', {
      width: WIDTH, height: HEIGHT, deviceScaleFactor: DPR, mobile: false,
    });

    const t0 = Date.now();
    await cdp.send('Page.navigate', { url: base });
    await sleep(400);

    // 等场景就绪（构建是同步的，就绪标志会立刻出现）
    let ready = false;
    for (let i = 0; i < 80; i++) {
      ready = await cdp.eval('!!(window.__VOXEL && window.__VOXEL.ready)').catch(() => false);
      if (ready) break;
      await sleep(250);
    }
    if (!ready) {
      const html = await cdp.eval('document.getElementById("loading") ? document.getElementById("loading").textContent : "no-loading"').catch(() => '?');
      throw new Error(`场景未就绪（加载层内容：${html}）\n${chromeErr.slice(-1200)}`);
    }
    report.readyMs = Date.now() - t0;

    await sleep(2200); // 着色器编译 + 首帧稳定
    report.boot = await cdp.eval('window.__VOXEL.stats()');

    // 预热后连续计时 4 秒
    const FPS_EXPR = `(async () => {
      const next = () => new Promise(r => requestAnimationFrame(r));
      const tw = performance.now();
      while (performance.now() - tw < 1500) await next();
      return await new Promise(res => {
        let n = 0; const t = performance.now();
        const tick = () => { n++;
          if (performance.now() - t < 4000) requestAnimationFrame(tick);
          else res(+(n * 1000 / (performance.now() - t)).toFixed(1));
        };
        requestAnimationFrame(tick);
      });
    })()`;
    report.fps = await cdp.eval(FPS_EXPR, { awaitPromise: true });
    report.stats = await cdp.eval('window.__VOXEL.stats()');
    report.buildings = await cdp.eval('window.__VOXEL.buildings.map(b => ({n: b.name, x: b.x, z: b.z, h: b.top}))');

    // 三个时段各截一张（画布直出，保证与当前帧一致）
    for (const preset of ['dawn', 'noon', 'dusk']) {
      await cdp.eval(`window.__VOXEL.setAutoRotate(false); window.__VOXEL.setPreset('${preset}'); window.__VOXEL.resetView();`);
      await sleep(1500);
      const dataUrl = await cdp.eval('window.__VOXEL.capture()');
      const file = path.join(OUT, `${TAG}-${preset}.png`);
      await fsp.writeFile(file, Buffer.from(dataUrl.split(',')[1], 'base64'));
      report[`shot_${preset}`] = path.relative(ROOT, file);
    }

    // 俯瞰 + 平视两个机位
    await cdp.eval(`window.__VOXEL.setPreset('dawn')`);
    await cdp.eval('window.__VOXEL.setCamera(30, 470, 300, 0, 10, -20)');
    await sleep(1400);
    let d = await cdp.eval('window.__VOXEL.capture()');
    await fsp.writeFile(path.join(OUT, `${TAG}-top.png`), Buffer.from(d.split(',')[1], 'base64'));

    await cdp.eval('window.__VOXEL.setCamera(120, 44, 190, 0, 34, -30)');
    await sleep(1400);
    d = await cdp.eval('window.__VOXEL.capture()');
    await fsp.writeFile(path.join(OUT, `${TAG}-eye.png`), Buffer.from(d.split(',')[1], 'base64'));

    // 整页截图（含 UI 面板）
    const full = await cdp.send('Page.captureScreenshot', { format: 'png' });
    await fsp.writeFile(path.join(OUT, `${TAG}-page.png`), Buffer.from(full.data, 'base64'));
    report.shot_page = path.relative(ROOT, path.join(OUT, `${TAG}-page.png`));

    // 控制台报错
    report.consoleErrors = cdp.events
      .filter((e) => e.method === 'Log.entryAdded' && ['error', 'warning'].includes(e.params.entry.level))
      .map((e) => `${e.params.entry.level}: ${e.params.entry.text}`)
      .slice(0, 20);
    report.exceptions = cdp.events
      .filter((e) => e.method === 'Runtime.exceptionThrown')
      .map((e) => e.params.exceptionDetails.text + ' ' + (e.params.exceptionDetails.exception?.description || ''))
      .slice(0, 10);

    ws.close();
  } finally {
    chrome.kill('SIGKILL');
    server.close();
  }

  await fsp.writeFile(path.join(OUT, `${TAG}-report.json`), JSON.stringify(report, null, 2), 'utf8');
  console.log(JSON.stringify(report, null, 2));
}

main().catch((e) => {
  console.error('\n[verify] 失败：', e.message);
  process.exitCode = 1;
});
