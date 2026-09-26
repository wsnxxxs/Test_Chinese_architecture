import { createServer } from 'node:http';
import { existsSync, readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve, join, extname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { gunzipSync } from 'node:zlib';
import { compactModel } from './compact-previews.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const force = process.argv.includes('--force');
const port = Number(process.argv.find(arg => arg.startsWith('--port='))?.slice(7) ?? 5174);
const taskFilter = process.argv.find(arg => arg.startsWith('--task='))?.slice(7);
const idFilter = process.argv.find(arg => arg.startsWith('--id='))?.slice(5);
const data = JSON.parse(readFileSync(join(dist, 'data.json'), 'utf8'));
const jobs = data.tasks.flatMap(task => task.results.map(result => ({ task: task.id, id: result.id, loader: result.previewLoader }))).filter(job => {
  if (taskFilter && job.task !== taskFilter) return false;
  if (idFilter && job.id !== idFilter) return false;
  const path = join(root, 'site/assets/scenes', job.task, `${job.id}.sbox`);
  if (!existsSync(path)) return true;
  if (!force) return false;
  const buffer = gunzipSync(readFileSync(path));
  // The nine archive models are authored exports; keep them intact.
  return JSON.parse(buffer.subarray(4, 4 + buffer.readUInt32LE(0))).version >= 2;
});
const keys = new Set(jobs.map(job => `${job.task}/${job.id}`));
const mime = { '.js': 'text/javascript', '.css': 'text/css', '.html': 'text/html', '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.svg': 'image/svg+xml' };
createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    if (pathname === '/__bake/jobs') {
      response.setHeader('Content-Type', 'application/json'); response.end(JSON.stringify(jobs)); return;
    }
    if (request.method === 'POST' && pathname.startsWith('/__bake/save/')) {
      const key = pathname.slice('/__bake/save/'.length);
      if (!keys.has(key)) { response.writeHead(404); response.end(); return; }
      const chunks = []; for await (const chunk of request) chunks.push(chunk);
      const path = join(root, 'site/assets/scenes', `${key}.sbox`);
      const compact = compactModel(Buffer.concat(chunks));
      mkdirSync(dirname(path), { recursive: true }); writeFileSync(path, compact);
      console.log(`Baked ${key}: ${Math.round(compact.length / 1024)} KiB`);
      response.end('Saved'); return;
    }
    const file = pathname === '/__bake/' ? join(root, 'scripts/preview-baker.html')
      : pathname === '/__bake/app.js' ? join(root, 'scripts/preview-baker.js')
      : resolve(dist, `.${pathname.endsWith('/') ? pathname + 'index.html' : pathname}`);
    if (!file.startsWith(dist + sep) && ![join(root, 'scripts/preview-baker.html'), join(root, 'scripts/preview-baker.js')].includes(file)) { response.writeHead(404); response.end(); return; }
    if (!existsSync(file)) { response.writeHead(404); response.end(); return; }
    response.setHeader('Content-Type', mime[extname(file)] ?? 'application/octet-stream'); response.end(readFileSync(file));
  } catch (error) { response.writeHead(500); response.end(error.message); }
}).listen(port, '127.0.0.1', () => console.log(`Open http://localhost:${port}/__bake/ to bake ${jobs.length} preview models. Run node scripts/assemble.mjs when finished.`));
