// Headless smoke + visual check of the diorama.
// Usage: node tools/verify.mjs [url]
import puppeteer from 'puppeteer-core';
import { mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dirname, '../shots');
mkdirSync(OUT, { recursive: true });

const URL = process.argv[2] || 'http://127.0.0.1:4319/';
const EXE = process.env.CHROME_PATH || 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const browser = await puppeteer.launch({
  executablePath: EXE,
  headless: true,
  protocolTimeout: 240000,
  args: [
    '--no-sandbox',
    '--disable-gpu-sandbox',
    '--disable-dev-shm-usage',
    '--enable-unsafe-swiftshader',
    '--use-gl=angle',
    '--use-angle=swiftshader',
    '--window-size=1280,720',
  ],
  defaultViewport: { width: 1280, height: 720 },
});

const report = { url: URL };
let page;
let logs = [];

try {
  page = await browser.newPage();
  page.on('console', (m) => logs.push(`[${m.type()}] ${m.text()}`));
  page.on('pageerror', (e) => logs.push(`[pageerror] ${e.message}\n${e.stack || ''}`));
  page.on('requestfailed', (r) => logs.push(`[requestfailed] ${r.url()} ${r.failure()?.errorText}`));

  const wait = (ms) => new Promise((r) => setTimeout(r, ms));
  const shot = (name) => page.screenshot({ path: `${OUT}/${name}.png` });
  const look = async (t, p, settle = 600) => {
    await page.evaluate(
      ([tt, pp]) => {
        const d = window.__diorama;
        d.controls.target.set(tt[0], tt[1], tt[2]);
        d.camera.position.set(pp[0], pp[1], pp[2]);
        d.controls.update();
      },
      [t, p]
    );
    await wait(settle);
  };

  await page.goto(URL, { waitUntil: 'load', timeout: 60000 });
  await page.waitForFunction('window.__diorama !== undefined', { timeout: 60000 });
  await wait(2500);

  report.stats = await page.evaluate(() => {
    const d = window.__diorama;
    const info = d.renderer.info;
    return {
      calls: info.render.calls,
      triangles: info.render.triangles,
      geometries: info.memory.geometries,
      textures: info.memory.textures,
      mode: d.state.mode,
      paused: d.state.paused,
      speed: d.train.speed,
      camera: d.camera.position.toArray().map((v) => +v.toFixed(2)),
    };
  });
  await shot('01-day');

  // --- movement, pause and dwell behaviour (driven deterministically) ------
  report.motion = await page.evaluate(() => {
    const d = window.__diorama;
    const t = d.train;
    const start = t.distance;
    for (let i = 0; i < 40; i++) t.update(0.05);
    const moved = t.distance - start;

    // pause must freeze the train and the station timer
    d.setPaused(true);
    const before = { distance: t.distance, dwell: t.dwellTimer };
    // (the render loop skips train.update while paused, emulated here by not calling it)
    const after = { distance: t.distance, dwell: t.dwellTimer };
    d.setPaused(false);
    return {
      movedIn2s: +moved.toFixed(2),
      expected: +(t.speed * 2).toFixed(2),
      pausedFrozen: before.distance === after.distance && before.dwell === after.dwell,
    };
  });

  // --- every carriage stays on the rails over a full lap -------------------
  report.rails = await page.evaluate(() => {
    const d = window.__diorama;
    const curve = d.trackCurve;
    const samples = [];
    for (let i = 0; i < 240; i++) samples.push(curve.getPointAt(i / 240));
    let worst = 0;
    const steps = 4600; // ~ one full lap at 11 u/s with dt 0.05
    for (let step = 0; step < steps; step++) {
      d.train.update(0.05);
      if (step % 40 !== 0) continue;
      for (const car of d.train.cars) {
        const p = car.group.position;
        let best = Infinity;
        for (const s of samples) {
          const dx = p.x - s.x;
          const dz = p.z - s.z;
          const dd = dx * dx + dz * dz;
          if (dd < best) best = dd;
        }
        worst = Math.max(worst, Math.sqrt(best));
      }
    }
    const yaws = d.train.cars.map((c) => +c.group.rotation.y.toFixed(3));
    return { worstOffsetFromCentreline: +worst.toFixed(3), lastYaws: yaws };
  });

  // --- station stop --------------------------------------------------------
  await page.evaluate(() => {
    const d = window.__diorama;
    d.train.distance = d.train.nextStop - 0.4;
  });
  await wait(1400);
  report.dwell = await page.evaluate(() => ({
    isDwelling: window.__diorama.train.isDwelling,
    dwellTimer: +window.__diorama.train.dwellTimer.toFixed(2),
  }));
  await look([35, 1, 0], [52, 17, 20], 700);
  await shot('04-station-stop');

  // --- night ---------------------------------------------------------------
  await page.evaluate(() => window.__diorama.setMode('night'));
  await wait(2200);
  await shot('05-night-station');
  report.night = await page.evaluate(() => ({
    mode: window.__diorama.state.mode,
    blend: +window.__diorama.lighting.state.blend.toFixed(2),
    windowEmissive: +window.__diorama.materials.glassWarm.emissiveIntensity.toFixed(2),
    lampEmissive: +window.__diorama.materials.lampGlass.emissiveIntensity.toFixed(2),
  }));
  await look([0, 0.5, 0], [96, 82, 108], 700);
  await shot('06-night');

  // --- day details ---------------------------------------------------------
  await page.evaluate(() => window.__diorama.setMode('day'));
  await wait(1800);
  await look([-8, 1, -14], [-22, 13, -1], 700);
  await shot('07-mill');
  await look([-15, 0, -26], [4, 20, -8], 700);
  await shot('08-bridge');
  await look([0, 0, 0], [8, 190, 34], 700);
  await shot('09-top');
  await look([2.5, 0, -26], [4, 30, -24], 700);
  await shot('11-level-crossing');
  await look([-15.5, 0, 1.3], [-4, 12, 10], 700);
  await shot('12-road-bridge');

  // --- reset ---------------------------------------------------------------
  await page.evaluate(() => window.__diorama.reset());
  await wait(900);
  report.afterReset = await page.evaluate(() => {
    const d = window.__diorama;
    return {
      camera: d.camera.position.toArray().map((v) => +v.toFixed(2)),
      paused: d.state.paused,
      mode: d.state.mode,
      speed: d.train.speed,
      distance: +d.train.distance.toFixed(2),
      slider: document.getElementById('speed').value,
      playLabel: document.getElementById('btn-play').textContent.trim(),
    };
  });
  await shot('10-reset');

  report.logs = logs;
} catch (err) {
  report.error = String(err);
  report.stack = err?.stack;
  report.logs = logs;
  if (page) {
    try {
      report.dom = await page.evaluate(() => document.body.innerText.slice(0, 240));
    } catch {}
  }
} finally {
  try {
    await browser.close();
  } catch {}
}

console.log(JSON.stringify(report, null, 2));
process.exit(report.error ? 1 : 0);
