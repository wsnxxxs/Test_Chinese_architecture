/**
 * 零依赖验收脚本
 * ------------------------------------------------------------
 * 启动本地静态服务托管 dist/，用系统 Chrome（headless=new + 真实 GPU）
 * 通过 CDP 实测渲染帧率、读取运行时统计、收集控制台报错，并批量截图。
 *
 *   node scripts/verify-fps.mjs
 */
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const SHOTS = path.join(ROOT, 'verify-shots');
const PORT = 5274;
const CDP_PORT = 9333;
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// ---------------- 静态服务 ----------------
function serve() {
  const server = http.createServer((req, res) => {
    const url = new URL(req.url, 'http://x');
    let file = path.join(DIST, decodeURIComponent(url.pathname));
    if (url.pathname === '/' || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
      file = path.join(DIST, 'index.html');
    }
    const body = fs.readFileSync(file);
    res.writeHead(200, { 'Content-Type': MIME[path.extname(file)] || 'application/octet-stream' });
    res.end(body);
  });
  return new Promise((resolve) => server.listen(PORT, '127.0.0.1', () => resolve(server)));
}

// ---------------- CDP 客户端 ----------------
class CDP {
  constructor(ws) {
    this.ws = ws;
    this.id = 0;
    this.pending = new Map();
    this.events = [];
    ws.onmessage = (ev) => {
      const msg = JSON.parse(ev.data);
      if (msg.id && this.pending.has(msg.id)) {
        const { resolve, reject } = this.pending.get(msg.id);
        this.pending.delete(msg.id);
        msg.error ? reject(new Error(msg.error.message)) : resolve(msg.result);
      } else if (msg.method) {
        this.events.push(msg);
      }
    };
  }
  send(method, params = {}) {
    const id = ++this.id;
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
      this.ws.send(JSON.stringify({ id, method, params }));
      setTimeout(() => {
        if (this.pending.has(id)) {
          this.pending.delete(id);
          reject(new Error(`CDP timeout: ${method}`));
        }
      }, 60000);
    });
  }
  async eval(expression, awaitPromise = false) {
    const r = await this.send('Runtime.evaluate', {
      expression, awaitPromise, returnByValue: true
    });
    if (r.exceptionDetails) throw new Error(r.exceptionDetails.text + ' ' + (r.exceptionDetails.exception?.description || ''));
    return r.result.value;
  }
  drain() {
    const list = this.events;
    this.events = [];
    return list;
  }
}

async function connect() {
  for (let i = 0; i < 60; i++) {
    try {
      const list = await (await fetch(`http://127.0.0.1:${CDP_PORT}/json/list`)).json();
      const page = list.find((t) => t.type === 'page');
      if (page?.webSocketDebuggerUrl) {
        const ws = new WebSocket(page.webSocketDebuggerUrl);
        await new Promise((res, rej) => {
          ws.onopen = res;
          ws.onerror = rej;
        });
        return new CDP(ws);
      }
    } catch { /* 等待 Chrome 起来 */ }
    await sleep(250);
  }
  throw new Error('无法连接 Chrome CDP');
}

// ---------------- 主流程 ----------------
const SCENES = [
  { name: '01-overview-morning', view: 'overview', time: 'morning', fps: true },
  { name: '02-overview-dusk', view: 'overview', time: 'dusk' },
  { name: '03-overview-night', view: 'overview', time: 'night', fps: true },
  { name: '04-gate-morning', view: 'gate', time: 'morning' },
  { name: '05-hall-dusk', view: 'hall', time: 'dusk' },
  { name: '06-aerial-morning', view: 'aerial', time: 'morning' }
];

// --quick 只跑第一个场景，便于快速回归；用环境变量 D=4 可指定几何密度
const QUICK = process.argv.includes('--quick');
const DENSITY = process.env.D || '';

async function main() {
  if (!fs.existsSync(DIST)) {
    console.error('未找到 dist/，请先执行 npm run build');
    process.exit(1);
  }
  fs.mkdirSync(SHOTS, { recursive: true });

  const server = await serve();
  const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'yunlu-chrome-'));
  const chrome = spawn(CHROME, [
    '--headless=new', '--enable-gpu', '--use-angle=d3d11',
    '--window-size=1600,900', '--force-device-scale-factor=1',
    '--hide-scrollbars', '--mute-audio', '--no-first-run', '--no-default-browser-check',
    `--user-data-dir=${profile}`, `--remote-debugging-port=${CDP_PORT}`,
    'about:blank'
  ], { stdio: 'ignore' });

  const cdp = await connect();
  await cdp.send('Page.enable');
  await cdp.send('Runtime.enable');
  await cdp.send('Log.enable');

  const report = [];
  const failures = [];
  for (const scene of (QUICK ? SCENES.slice(0, 1) : SCENES)) {
    // 场景之间先回到空白页，释放上一个场景的 WebGL 资源（大体素数下尤其重要）
    await cdp.send('Page.navigate', { url: 'about:blank' });
    await sleep(300);
    const url = `http://127.0.0.1:${PORT}/?view=${scene.view}&time=${scene.time}&paused=1${DENSITY ? `&d=${DENSITY}` : ''}`;
    await cdp.send('Page.navigate', { url });
    // 等待场景构建完成
    let ready = false;
    for (let i = 0; i < 80; i++) {
      await sleep(250);
      try {
        const v = await cdp.eval('!!(window.__YUNLU__ && window.__YUNLU__.voxels > 0)');
        if (v) { ready = true; break; }
      } catch { /* 页面还在导航 */ }
    }
    await sleep(1600); // 等光照过渡与首帧稳定

    let fps = null;
    if (scene.fps) {
      const v = await cdp.eval(
        `new Promise(res=>{let n=0;const t0=performance.now();function f(){n++;const d=performance.now()-t0;if(d<5000)requestAnimationFrame(f);else res(+(n/(d/1000)).toFixed(1));}requestAnimationFrame(f);})`,
        true
      );
      fps = v;
    }

    const info = await cdp.eval(`(() => { const y = window.__YUNLU__; const gl = y.renderer.getContext(); const dbg = gl.getExtension('WEBGL_debug_renderer_info'); return { voxels: y.voxels, density: y.density, buildMs: y.buildMs, draws: y.drawCalls, tris: y.triangles, preset: y.preset, dpr: y.renderer.getPixelRatio(), size: [y.renderer.domElement.width, y.renderer.domElement.height], gpu: dbg ? gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL) : 'n/a' }; })()`);

    const shot = await cdp.send('Page.captureScreenshot', { format: 'png' });
    fs.writeFileSync(path.join(SHOTS, `${scene.name}.png`), Buffer.from(shot.data, 'base64'));

    const errors = cdp.drain().filter((e) =>
      e.method === 'Runtime.exceptionThrown' ||
      (e.method === 'Runtime.consoleAPICalled' && ['error', 'warning'].includes(e.params.type)) ||
      (e.method === 'Log.entryAdded' && e.params.entry.level === 'error')
    ).map((e) => {
      if (e.method === 'Runtime.exceptionThrown') return e.params.exceptionDetails.text + ' ' + (e.params.exceptionDetails.exception?.description || '');
      if (e.method === 'Log.entryAdded') return e.params.entry.text;
      return e.params.args.map((a) => a.value ?? a.description ?? a.type).join(' ');
    });

    report.push({ ...scene, ready, fps, info, errors });
    console.log(`✓ ${scene.name}  密度=${info.density}  体素=${info.voxels}  构建=${info.buildMs}ms  draw=${info.draws}  三角=${info.tris.toLocaleString('en-US')}  ${fps ? fps + ' FPS' : ''}  报错=${errors.length}`);
    errors.forEach((e) => console.log('   ⚠ ' + e.slice(0, 220)));
    if (!ready || info.voxels === 0 || errors.length) failures.push(scene.name);
  }

  fs.writeFileSync(path.join(SHOTS, 'report.json'), JSON.stringify(report, null, 2));
  console.log('\nGPU:', report[0].info.gpu);
  console.log('截图目录:', SHOTS);
  if (failures.length) {
    console.error('\n验收不通过，以下场景异常:', failures.join(', '));
  }

  chrome.kill();
  server.close();
  await sleep(300);
  const profileKill = spawn('cmd', ['/c', 'rmdir', '/s', '/q', profile], { stdio: 'ignore' });
  profileKill.on('exit', () => process.exit(failures.length ? 1 : 0));
  setTimeout(() => process.exit(failures.length ? 1 : 0), 3000);
}

main().catch((err) => {
  console.error('验收失败:', err);
  process.exit(1);
});
