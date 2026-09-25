// 无头浏览器截图验证：vite preview 服务 + Edge(SwiftShader) 截图
// 用法: node scripts/shot.mjs [out.png] [posX,posY,posZ] [tgtX,tgtY,tgtZ] [waitMs]
import puppeteer from 'puppeteer-core';

const URL = process.env.SHOT_URL || 'http://127.0.0.1:4173/';
const OUT = process.argv[2] || 'shot.png';
const POS = (process.argv[3] || '76,50,100').split(',').map(Number);
const TGT = (process.argv[4] || '0,8,-4').split(',').map(Number);
const WAIT = Number(process.argv[5] || 7000);

const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  headless: true,
  args: [
    '--no-sandbox',
    '--disable-dev-shm-usage',
    '--enable-unsafe-swiftshader',
    '--use-angle=swiftshader',
    '--window-size=1600,900',
    '--hide-scrollbars',
  ],
  defaultViewport: { width: 1600, height: 900 },
});

const page = await browser.newPage();
page.on('console', (m) => { if (m.type() === 'error') console.log('[console]', m.text()); });
page.on('pageerror', (e) => console.log('[pageerror]', e.message));

await page.goto(URL, { waitUntil: 'networkidle0', timeout: 60000 });
// 等入场动画真正结束（低帧率环境下Intro会被逐帧dt上限拉长，需轮询而非固定等待）
await page.waitForFunction(() => window.__debug && window.__debug.introDone(), { timeout: 60000, polling: 500 });
console.log('POS', JSON.stringify(POS), 'TGT', JSON.stringify(TGT));
const applied = await page.evaluate(([p, t]) => {
  const d = window.__debug;
  if (!d) return 'NO_DEBUG';
  d.controls.autoRotate = false;
  d.camera.position.set(p[0], p[1], p[2]);
  d.controls.target.set(t[0], t[1], t[2]);
  d.controls.update();
  return [d.camera.position.toArray(), d.controls.target.toArray(), d.controls.autoRotate];
}, [POS, TGT]);
console.log('applied:', JSON.stringify(applied));
await new Promise((r) => setTimeout(r, 3000));
const before = await page.evaluate(() => window.__debug.camera.position.toArray());
console.log('before shot:', JSON.stringify(before));
await page.screenshot({ path: OUT });
console.log('saved', OUT, '|', await page.evaluate(() => document.getElementById('stats')?.textContent));

await browser.close();
