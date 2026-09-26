import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { gunzipSync } from 'node:zlib';
import { resultDir, resultFilter, taskIdOf } from './results.mjs';
import { renderReadme } from './readme.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const read = path => JSON.parse(readFileSync(join(root, path), 'utf8'));
const entries = read('results/manifest.json');
const models = read('gallery.json').models;
const tasks = new Map(readdirSync(join(root, 'tasks')).map(id => [id, read(`tasks/${id}/task.json`)]));
const matches = resultFilter();
const selected = entries.filter(entry => matches(taskIdOf(entry), entry.id));
const errors = [], warnings = [], keys = new Set(), packages = new Set();
const requireFile = (path, label) => {
  if (!existsSync(join(root, path)) || !statSync(join(root, path)).isFile()) errors.push(`${label}: missing ${path}`);
};
if (!selected.length) errors.push('No matching results. Check --task and --id.');
const modelIds = new Set();
const brands = readFileSync(join(root, 'site/assets/brands/README.md'), 'utf8');
for (const model of models) {
  if (modelIds.has(model.id)) errors.push(`Duplicate model: ${model.id}`);
  modelIds.add(model.id);
  for (const field of ['name', 'vendor', 'logo', 'brandName', 'brandUrl']) {
    if (!model[field]?.trim()) errors.push(`${model.id}: missing ${field}`);
  }
  if (model.logo) {
    requireFile(`site/${model.logo}`, model.id);
    if (!brands.includes(model.logo.split('/').at(-1))) errors.push(`${model.id}: logo source is undocumented`);
  }
  if (model.vendorNote) warnings.push(`${model.id}: ${model.vendorNote}`);
}
for (const entry of entries) {
  const taskId = taskIdOf(entry), key = `${taskId}/${entry.id}`;
  if (keys.has(key)) errors.push(`Duplicate result: ${key}`);
  keys.add(key);
  const source = resultDir(entry);
  if (!existsSync(join(root, source, 'package.json'))) { errors.push(`${key}: missing package.json`); continue; }
  const pkg = read(`${source}/package.json`);
  if (!pkg.name || packages.has(pkg.name)) errors.push(`${key}: missing or duplicate workspace name ${pkg.name}`);
  packages.add(pkg.name);
  if (!selected.includes(entry)) continue;
  const task = tasks.get(taskId);
  if (!task) { errors.push(`${key}: unknown task`); continue; }
  const original = task.results?.find(result => result.id === entry.id);
  if (!modelIds.has(original?.model ?? entry.modelId ?? entry.id)) errors.push(`${key}: unregistered model`);
  if (!/^[a-z0-9]+(?:[.-][a-z0-9]+)*$/.test(entry.id)) errors.push(`${key}: invalid result id`);
  for (const field of ['model', 'title', 'description', 'cover']) {
    if (!entry[field]?.trim()) errors.push(`${key}: missing ${field}`);
  }
  if (!entry.addedAt || !/(?:Z|[+-]\d{2}:\d{2})$/.test(entry.addedAt) || !Number.isFinite(Date.parse(entry.addedAt))) errors.push(`${key}: addedAt must include a timezone`);
  if (!pkg.scripts?.build) errors.push(`${key}: missing build script`);
  requireFile(`${source}/README.md`, key);
  if (entry.cover) requireFile(`${source}/${entry.cover}`, key);
  requireFile(`tasks/${taskId}/${task.prompt}`, key);
  // A cover image is not evidence of the default page or the mobile layout.
  for (const condition of ['first', 'mobile']) {
    if (!task.conditions.some(item => item.id === condition)) errors.push(`${key}: task has no ${condition} condition`);
    requireFile(`tasks/${taskId}/captures/${entry.id}/${condition}.jpg`, key);
  }
  const scene = `site/assets/scenes/${key}.sbox`;
  requireFile(scene, key);
  if (existsSync(join(root, scene))) {
    try {
      const buffer = gunzipSync(readFileSync(join(root, scene)));
      const header = JSON.parse(buffer.subarray(4, 4 + buffer.readUInt32LE(0)));
      if (!header.meshes?.length || !header.geometries?.length) errors.push(`${key}: empty preview model`);
      if (header.version >= 2 && !header.compact) errors.push(`${key}: preview model is not compacted`);
      const bytes = statSync(join(root, scene)).size;
      if (bytes > 3 * 1024 * 1024) warnings.push(`${key}: preview model ${(bytes / 1048576).toFixed(2)} MiB; review loading on mobile`);
    } catch (error) { errors.push(`${key}: unreadable preview model (${error.message})`); }
  }
}
// Inspect tracked files only: local dependencies and build output are working tools.
const tracked = execFileSync('git', ['ls-files'], { cwd: root, encoding: 'utf8' }).trim().split('\n');
const temporary = /(?:^|\/)(?:node_modules|dist|\.cache|\.vite|\.playwright-cli|output|test-results|playwright-report|tests?|verification|__pycache__)(?:\/|$)|(?:\.log|\.tmp|\.bak|\.zip|\.pyc)$|(?:^|\/)playwright\.config\.|^results\/.+\/package-lock\.json$/;
for (const path of tracked) if (path.startsWith('results/') && temporary.test(path)) errors.push(`Unnecessary delivery file: ${path}`);
try {
  if (renderReadme() !== readFileSync(join(root, 'README.md'), 'utf8')) errors.push('README.md catalog is stale; run npm run readme');
} catch (error) { errors.push(error.message); }
for (const warning of warnings) console.warn(`WARN ${warning}`);
for (const error of errors) console.error(`ERROR ${error}`);
console.log(`Intake check: ${selected.length} result(s), ${errors.length} error(s), ${warnings.length} warning(s).`);
process.exitCode = errors.length ? 1 : 0;
