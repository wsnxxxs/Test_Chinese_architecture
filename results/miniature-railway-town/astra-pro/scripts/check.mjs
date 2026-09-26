import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';

const root = resolve(import.meta.dirname, '..');
const configResult = spawnSync(process.execPath, ['--check', join(root, 'vite.config.js')], { encoding: 'utf8' });
if (configResult.status !== 0) { console.error(configResult.stderr); process.exit(1); }
let count = 1;
for (const directory of ['src', 'scripts', 'tests']) {
  for (const file of readdirSync(join(root, directory))) {
    if (!/\.(m?js)$/.test(file)) continue;
    const path = join(root, directory, file);
    const result = spawnSync(process.execPath, ['--check', path], { encoding: 'utf8' });
    if (result.status !== 0) { console.error(result.stderr); process.exit(1); }
    for (const match of readFileSync(path, 'utf8').matchAll(/(?:from\s*|import\s*\()\s*['"](\.[^'"]+)['"]/g)) {
      if (!existsSync(resolve(dirname(path), match[1]))) throw new Error(`Missing local module ${match[1]} from ${path}`);
    }
    count += 1;
  }
}
console.log(`Syntax and relative import paths checked: ${count} JavaScript modules.`);
console.log('This is not a bundler, WebGL render, or browser functional test.');
