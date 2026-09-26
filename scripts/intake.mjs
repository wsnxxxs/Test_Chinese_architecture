// One command for the mechanical part of intake: build the selected results
// (plus any without build output), assemble, capture, bake, refresh the README
// catalog and check.
//   npm run intake -- --id=mechanical-keyboard/a,miniature-railway-town/b [--force]
// Other arguments (--wait, --browser, --condition) are passed to the steps.
import { spawn, spawnSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { resultDir, resultFilter, taskIdOf } from './results.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
if (!args.some(arg => arg.startsWith('--id=') || arg.startsWith('--task='))) throw new Error('Select results with --id and/or --task.');
const port = Number(args.find(arg => arg.startsWith('--port='))?.slice(7) ?? 4173);
const entries = JSON.parse(readFileSync(join(root, 'results/manifest.json'), 'utf8'));
const matches = resultFilter();
const selected = entries.filter(entry => matches(taskIdOf(entry), entry.id));
if (!selected.length) throw new Error('No matching results in results/manifest.json.');

const failed = [];
const run = (label, command, commandArgs) => {
  console.log(`\n== ${label}`);
  // Under `npm run`, call npm's own CLI through node; no shell is needed on Windows.
  const npm = command === 'npm' && process.env.npm_execpath;
  const { status } = spawnSync(npm ? process.execPath : command, npm ? [npm, ...commandArgs] : commandArgs, { cwd: root, stdio: 'inherit', shell: command === 'npm' && !npm });
  if (status !== 0) failed.push(label);
  return status === 0;
};

// assemble.mjs needs every result's dist/, so a fresh clone also builds the rest once.
const builds = entries.filter(entry => selected.includes(entry) || !existsSync(join(root, resultDir(entry), 'dist')));
const workspaces = builds.map(entry => `--workspace=${JSON.parse(readFileSync(join(root, resultDir(entry), 'package.json'), 'utf8')).name}`);
if (!run(`Build ${builds.length} result(s)`, 'npm', ['run', 'build', ...workspaces]) || !run('Assemble', 'node', ['scripts/assemble.mjs'])) {
  process.exitCode = 1;
  throw new Error(`Stopped after: ${failed.join(', ')}`);
}

const preview = spawn(process.execPath, ['node_modules/vite/bin/vite.js', 'preview', '--host', '127.0.0.1', '--port', String(port), '--strictPort'], { cwd: root, stdio: 'ignore' });
try {
  const url = `http://127.0.0.1:${port}/`;
  for (let attempt = 0; ; attempt++) {
    if (await fetch(url).then(response => response.ok, () => false)) break;
    if (attempt > 50 || preview.exitCode !== null) throw new Error(`Preview server did not start on port ${port}; pass --port=<free port>.`);
    await new Promise(done => setTimeout(done, 200));
  }
  run('Capture', 'node', ['scripts/capture-results.mjs', ...args, `--url=${url}`]);
} finally { preview.kill(); }

run('Bake preview models', 'node', ['scripts/bake-previews.mjs', ...args, '--auto']);
run('Assemble', 'node', ['scripts/assemble.mjs']);
run('README catalog', 'node', ['scripts/readme.mjs']);
run('Intake check', 'node', ['scripts/check-intake.mjs', ...args]);

console.log('\nStill manual: review each screenshot, spot-check one key interaction per result, check card previews in the gallery.');
for (const entry of selected) console.log(`  tasks/${taskIdOf(entry)}/captures/${entry.id}/{first,mobile}.jpg`);
if (failed.length) { console.error(`\nFailed steps: ${failed.join(', ')}`); process.exitCode = 1; }
