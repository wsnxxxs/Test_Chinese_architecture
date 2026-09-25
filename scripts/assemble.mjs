import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const entries = JSON.parse(readFileSync('results/manifest.json', 'utf8'));
const ids = new Set();
rmSync('dist', { recursive: true, force: true });
cpSync('site', 'dist', { recursive: true });

for (const entry of entries) {
  if (!/^[a-z0-9]+(?:[.-][a-z0-9]+)*$/.test(entry.id) || ids.has(entry.id)) {
    throw new Error(`Invalid or duplicate result id: ${entry.id}`);
  }
  ids.add(entry.id);
  const source = join('results', entry.id);
  const built = join(source, 'dist');
  if (!existsSync(built)) throw new Error(`Missing build output: ${built}`);
  const target = join('dist', 'results', entry.id);
  mkdirSync(target, { recursive: true });
  cpSync(built, target, { recursive: true });
  if (existsSync(join(source, 'docs'))) cpSync(join(source, 'docs'), join(target, 'docs'), { recursive: true });
}

writeFileSync(join('dist', 'results.json'), JSON.stringify(entries, null, 2));
console.log(`Assembled ${entries.length} result(s) in dist/`);
