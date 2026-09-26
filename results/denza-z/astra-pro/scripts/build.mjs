import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { standalone } from './bundle.mjs';
import { execFileSync } from 'node:child_process';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dest = path.join(root, 'dist');
// Validate application modules before assembling the static deployment.
for (const file of await fs.readdir(path.join(root, 'src'))) {
  if (file.endsWith('.js')) execFileSync(process.execPath, ['--check', path.join(root, 'src', file)]);
}
await fs.rm(dest, { recursive: true, force: true });
await fs.mkdir(dest, { recursive: true });
for (const item of ['index.html', 'src', 'public', 'LICENSE', 'THIRD_PARTY.md']) await fs.cp(path.join(root, item), path.join(dest, item), { recursive: true });
const {html,bundle}=await standalone(root);
await fs.writeFile(path.join(dest,'standalone.html'),html);
await fs.writeFile(path.join(dest,'app.bundle.js'),bundle);
execFileSync(process.execPath, ['--check', path.join(dest,'app.bundle.js')]);
console.log('✓ JavaScript syntax validated\n✓ Static production site assembled in dist/\n✓ Fully offline standalone.html generated');
