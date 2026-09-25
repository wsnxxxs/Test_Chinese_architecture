import { createRequire } from 'module';
const require = createRequire(
  'C:/Users/Ryan/.workbuddy/binaries/node/versions/22.22.2-3/node_modules/@playwright/cli/node_modules/nohost.js'
);
const { chromium } = require('playwright-core');

const browser = await chromium.launch({ channel: 'msedge', headless: true });
const page = await browser.newPage({ viewport: { width: 1500, height: 940 } });
page.on('console', (m) => console.log('[console]', m.type(), m.text()));
page.on('pageerror', (e) => console.log('[pageerror]', e.message));
await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });
await page.waitForTimeout(6000);
await page.screenshot({ path: 'shot1.png' });
// 再转一个角度拍第二张（停止自动旋转后手动换机位由 autorotate 自然完成，等待即可）
await page.waitForTimeout(9000);
await page.screenshot({ path: 'shot2.png' });
await browser.close();
console.log('done');
