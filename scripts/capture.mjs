// Takes comparable screenshots of every result under each task's "conditions".
// Serves dist/ locally (run `npm run build` first), then writes
// tasks/<task>/captures/<result>/<condition>.jpg — commit those files.
//
//   node scripts/capture.mjs                          all tasks, results and conditions
//   node scripts/capture.mjs <task> [result] [--cond=first,night] [--missing]
//
// A result's "capture" object in task.json controls how each condition is reached:
//   "query": "q=high"                 extra URL query applied to every condition
//   "wait": 8000                      ms to let the page settle after load (default 8000)
//   "<condition>": { "query": "t=6", "steps": [{ "click": "css" }, { "key": "h" }, { "wait": 1000 }] }
//   "<condition>": false              this result cannot show the condition; skip it
// Conditions without an entry are captured on the untouched page.
import { createReadStream, existsSync, mkdirSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { dirname, extname, join, normalize } from 'node:path';
import { ROOT, captureFile, loadGallery } from './lib.mjs';

const args = process.argv.slice(2);
const positional = args.filter((a) => !a.startsWith('--'));
const condFilter = args.find((a) => a.startsWith('--cond='))?.slice(7).split(',');
const onlyMissing = args.includes('--missing');
const [taskFilter, resultFilter] = positional;
const DIST = join(ROOT, 'dist');
const DESKTOP = [1440, 900];

let chromium;
try {
  ({ chromium } = await import('playwright'));
} catch {
  console.error('需要 Playwright：npm install（devDependencies 已包含 playwright），并确保本机有 Chromium（npx playwright install chromium）。');
  process.exit(1);
}
if (!existsSync(join(DIST, 'data.json'))) {
  console.error('dist/ 不存在，请先运行 npm run build');
  process.exit(1);
}

const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.wasm': 'application/wasm', '.woff2': 'font/woff2' };
const server = createServer((req, res) => {
  let path = normalize(decodeURIComponent(new URL(req.url, 'http://x').pathname)).replace(/^([/\\])+/, '');
  let file = join(DIST, path);
  if (!file.startsWith(DIST)) return res.writeHead(403).end();
  if (existsSync(file) && statSync(file).isDirectory()) file = join(file, 'index.html');
  if (!existsSync(file)) return res.writeHead(404).end();
  res.writeHead(200, { 'content-type': MIME[extname(file)] ?? 'application/octet-stream' });
  createReadStream(file).pipe(res);
});
await new Promise((ok) => server.listen(0, '127.0.0.1', ok));
const base = `http://127.0.0.1:${server.address().port}`;

// Headless Chromium has no GPU here; SwiftShader keeps WebGL available.
const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const { tasks } = loadGallery();
let shots = 0;

for (const task of tasks) {
  if (taskFilter && task.id !== taskFilter) continue;
  for (const r of task.results) {
    if (resultFilter && r.id !== resultFilter) continue;
    if (!existsSync(join(DIST, task.id, r.id, 'index.html'))) {
      console.warn(`⚠ ${task.id}/${r.id} 未构建，跳过`);
      continue;
    }
    const opts = r.capture ?? {};
    for (const cond of task.conditions) {
      if (condFilter && !condFilter.includes(cond.id)) continue;
      const spec = opts[cond.id] ?? {};
      if (spec === false) continue;
      const out = captureFile(task, r.id, cond.id);
      if (onlyMissing && existsSync(out)) continue;

      const [width, height] = cond.viewport ?? DESKTOP;
      const context = await browser.newContext({
        viewport: { width, height },
        deviceScaleFactor: cond.mobile ? 2 : 1,
        isMobile: !!cond.mobile,
        hasTouch: !!cond.mobile,
      });
      const page = await context.newPage();
      const errors = [];
      page.on('pageerror', (e) => errors.push(e.message));
      page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));

      const query = [opts.query, spec.query].filter(Boolean).join('&');
      const url = `${base}/${task.id}/${r.id}/${query ? `?${query}` : ''}`;
      const started = Date.now();
      await page.goto(url, { waitUntil: 'load', timeout: 120_000 });
      await page.waitForTimeout(opts.wait ?? 8000);
      for (const step of spec.steps ?? []) {
        if (step.click) await page.click(step.click);
        if (step.key) await page.keyboard.press(step.key);
        if (step.wait) await page.waitForTimeout(step.wait);
      }
      mkdirSync(dirname(out), { recursive: true });
      await page.screenshot({ path: out, type: 'jpeg', quality: 84, timeout: 120_000 });
      await context.close();
      shots++;
      const took = ((Date.now() - started) / 1000).toFixed(1);
      console.log(`✓ ${task.id}/${r.id}/${cond.id}  ${took}s${errors.length ? `  (页面报错 ${errors.length} 条：${errors[0]})` : ''}`);
    }
  }
}

await browser.close();
server.close();
console.log(`\n共截取 ${shots} 张。截图位于 tasks/<题目>/captures/，请一并提交。`);
