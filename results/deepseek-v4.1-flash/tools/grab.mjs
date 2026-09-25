/**
 * tools/grab.mjs — 无头渲染 + 画布抓帧（异步 spawn，避免 Windows 上 spawnSync EBUSY）
 * 用法：node tools/grab.mjs <url> <输出png> [w] [h]
 */
import { spawn } from 'node:child_process';
import { writeFileSync } from 'node:fs';

const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const url = process.argv[2];
const out = process.argv[3] || 'grab.png';
const W = process.argv[4] || '1280';
const H = process.argv[5] || '720';

if (!url) { console.error('usage: node tools/grab.mjs <url> <out.png> [w] [h]'); process.exit(1); }

const args = [
  '--headless=new', '--disable-gpu', '--enable-unsafe-swiftshader',
  '--hide-scrollbars', '--no-first-run', '--no-default-browser-check',
  '--disable-extensions', '--disable-features=Translate',
  `--window-size=${W},${H}`, '--virtual-time-budget=120000', '--dump-dom', url
];

const t0 = Date.now();
const proc = spawn(CHROME, args, { stdio: ['ignore', 'pipe', 'ignore'] });
let dom = '';
proc.stdout.setEncoding('utf8');
proc.stdout.on('data', (d) => { dom += d; });

proc.on('close', () => {
  const diag = /data-diag="([^"]*)"/.exec(dom);
  const m = /id="shot-data">([^<]{1000,})</.exec(dom);
  if (!m) {
    console.error('未取到画布数据。diag =', diag ? diag[1] : '(none)', ' dom=', dom.length, 'bytes');
    process.exit(2);
  }
  const b64 = m[1].replace(/^data:image\/png;base64,/, '').replace(/\s+/g, '');
  const buf = Buffer.from(b64, 'base64');
  writeFileSync(out, buf);
  console.log(`${diag ? diag[1] : ''}`);
  console.log(`saved ${out} (${(buf.length / 1024).toFixed(0)} KB) in ${((Date.now() - t0) / 1000).toFixed(1)}s`);
});
