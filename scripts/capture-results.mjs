import { chromium } from 'playwright';
import { existsSync, mkdirSync, readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { resultDir, taskIdOf } from './results.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const arg = name => process.argv.find(value => value.startsWith(`--${name}=`))?.slice(name.length + 3);
const taskFilter = arg('task'), idFilter = arg('id'), conditionFilter = arg('condition');
const force = process.argv.includes('--force');
const base = arg('url') ?? 'http://127.0.0.1:4173/';
const wait = Number(arg('wait') ?? 3500);
const entries = JSON.parse(readFileSync(join(root, 'results/manifest.json'), 'utf8'))
  .filter(entry => (!taskFilter || taskIdOf(entry) === taskFilter) && (!idFilter || entry.id === idFilter));
if (!entries.length) throw new Error('No matching results. Check --task and --id.');
if (conditionFilter && !['first', 'mobile'].includes(conditionFilter)) throw new Error('Use --condition=first or --condition=mobile.');
const browser = await chromium.launch({ channel: arg('browser') ?? 'chrome' });
let saved = 0, failed = 0;
try {
  for (const entry of entries) {
    const taskId = taskIdOf(entry);
    const task = JSON.parse(readFileSync(join(root, 'tasks', taskId, 'task.json'), 'utf8'));
    for (const id of ['first', 'mobile'].filter(id => !conditionFilter || id === conditionFilter)) {
      const output = join(root, 'tasks', taskId, 'captures', entry.id, `${id}.jpg`);
      if (existsSync(output) && !force) continue;
      const condition = task.conditions.find(item => item.id === id);
      const [width, height] = condition?.viewport ?? (id === 'mobile' ? [390, 844] : [1440, 900]);
      // Fresh storage and a real mobile viewport for every capture. Keep default UI.
      const context = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: 1, isMobile: id === 'mobile', hasTouch: id === 'mobile', colorScheme: 'light' });
      const page = await context.newPage(), errors = [];
      page.on('pageerror', error => errors.push(error.message));
      const source = `${resultDir(entry)}/`;
      try {
        const response = await page.goto(new URL(source, base).href, { waitUntil: 'load', timeout: 60000 });
        if (!response?.ok()) throw new Error(`HTTP ${response?.status()}`);
        await page.evaluate(() => document.fonts.ready);
        await page.waitForTimeout(wait);
        if (errors.length) throw new Error(errors.join('; '));
        mkdirSync(dirname(output), { recursive: true });
        await page.screenshot({ path: output, type: 'jpeg', quality: 86, fullPage: false });
        console.log(`Saved ${taskId}/${entry.id}/${id}.jpg (${width}x${height})`); saved++;
      } catch (error) { console.error(`FAILED ${taskId}/${entry.id}/${id}: ${error.message}`); failed++; }
      finally { await context.close(); }
    }
  }
} finally { await browser.close(); }
console.log(`Captures: ${saved} saved, ${failed} failed. Visually review before committing.`);
process.exitCode = failed ? 1 : 0;
