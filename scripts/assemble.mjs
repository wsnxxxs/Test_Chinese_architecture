import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { dirname, extname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { gzipSync } from 'node:zlib';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');
const entries = JSON.parse(readFileSync(join(ROOT, 'results', 'manifest.json'), 'utf8'));
const galleryConfig = JSON.parse(readFileSync(join(ROOT, 'gallery.json'), 'utf8'));
const taskConfigs = readdirSync(join(ROOT, 'tasks')).map((id) => ({
  ...JSON.parse(readFileSync(join(ROOT, 'tasks', id, 'task.json'), 'utf8')),
  id,
})).sort((a, b) => a.date.localeCompare(b.date) || (a.order ?? 0) - (b.order ?? 0));
const modelIds = new Set(galleryConfig.models.map((model) => model.id));
const ids = new Set();
const taskIdOf = (entry) => entry.task ?? 'chinese-architecture';
for (const entry of entries) {
  if (!taskConfigs.some((task) => task.id === taskIdOf(entry))) {
    throw new Error(`Unknown task for ${entry.id}: ${taskIdOf(entry)}`);
  }
}

function walk(dir, callback, skipped = new Set()) {
  for (const name of readdirSync(dir)) {
    if (skipped.has(name)) continue;
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path, callback, skipped);
    else callback(path);
  }
}

const sourceExtensions = new Set(['.js', '.mjs', '.cjs', '.ts', '.tsx', '.jsx', '.css', '.html', '.glsl', '.wgsl']);
const imageExtensions = new Set(['.png', '.jpg', '.jpeg', '.webp']);
const sourceSkip = new Set(['node_modules', 'dist', 'docs', 'screenshots', 'public', '.git', '.playwright-cli', 'output']);
const mediaSkip = new Set(['node_modules', 'dist', 'public', '.git', '.playwright-cli', 'output']);

function sourceStats(source) {
  let files = 0;
  let lines = 0;
  walk(source, (path) => {
    if (!sourceExtensions.has(extname(path)) || /\.config\.[a-z]+$/.test(path)) return;
    files++;
    lines += readFileSync(path, 'utf8').split('\n').filter((line) => line.trim()).length;
  }, sourceSkip);
  return { files, lines };
}

function buildStats(built) {
  let bytes = 0;
  let gzip = 0;
  walk(built, (path) => {
    if (!['.js', '.css', '.html'].includes(extname(path))) return;
    const content = readFileSync(path);
    bytes += content.length;
    gzip += gzipSync(content).length;
  });
  return { bytes, gzip };
}

function images(source, cover) {
  const found = [];
  walk(source, (path) => {
    if (imageExtensions.has(extname(path).toLowerCase())) {
      found.push(relative(source, path).split('\\').join('/'));
    }
  }, mediaSkip);
  if (!found.includes(cover)) throw new Error(`Missing cover: ${join(source, cover)}`);
  return [cover, ...found.filter((path) => path !== cover).sort()];
}

rmSync(DIST, { recursive: true, force: true });
cpSync(join(ROOT, 'site'), DIST, { recursive: true });
// Keep the gallery viewer self-contained on static hosts, including subpaths.
mkdirSync(join(DIST, 'vendor'), { recursive: true });
for (const file of ['three.module.js', 'three.core.js']) {
  cpSync(join(ROOT, 'node_modules/three/build', file), join(DIST, 'vendor', file));
}
cpSync(join(ROOT, 'node_modules/three/examples/jsm/controls/OrbitControls.js'), join(DIST, 'vendor/OrbitControls.js'));
cpSync(join(ROOT, 'node_modules/three/examples/jsm/utils/BufferGeometryUtils.js'), join(DIST, 'vendor/BufferGeometryUtils.js'));

function enableSandtable(target) {
  let captures = 0;
  walk(target, (path) => {
    if (!['.js', '.html'].includes(extname(path))) return;
    const source = readFileSync(path, 'utf8');
    let patched = source.replace(/this\.isScene\s*=\s*(?:!0|true)\b/g, (match) => {
      captures++;
      return `${match},window.__galleryCaptureScene?.(this)`;
    });
    // Extraction needs CPU geometry only. Do not render a second full scene,
    // upload its voxel buffers or run shadow passes in the hidden loader.
    patched = patched.replace(/this\.render\s*=\s*function\s*\([^)]*\)\s*\{/g, (match) => `${match}if(window.__galleryCaptureScene)return;`);
    // Sonnet frees CPU voxel buffers after GPU upload. Keep them for this
    // temporary export only; normal standalone previews retain that optimization.
    if (target.endsWith('sonnet-5.5-max')) patched = patched.replace(/this\.array\s*=\s*null/g, '(window.__galleryCaptureScene||(this.array=null))');
    if (patched !== source) writeFileSync(path, patched);
  });
  if (!captures) throw new Error(`No Three.js scene found for sandtable: ${target}`);
  const entry = join(target, 'index.html');
  const bridge = relative(target, join(DIST, 'sandtable-bridge.js')).split('\\').join('/');
  writeFileSync(entry, readFileSync(entry, 'utf8').replace(/<head[^>]*>/i, (head) => `${head}<script src="${bridge}"></script>`));
}

function assembleResult(entry, taskConfig) {
  const taskId = taskConfig.id;
  const taskDir = join(ROOT, 'tasks', taskId);
  const key = `${taskId}/${entry.id}`;
  if (!/^[a-z0-9]+(?:[.-][a-z0-9]+)*$/.test(entry.id) || ids.has(key)) {
    throw new Error(`Invalid or duplicate result id: ${entry.id}`);
  }
  ids.add(key);

  const original = taskConfig.results?.find((result) => result.id === entry.id);
  const model = original?.model ?? entry.modelId ?? entry.id;
  if (!modelIds.has(model)) throw new Error(`Unknown model for ${entry.id}: ${model}`);

  const resultPath = entry.task ? `results/${taskId}/${entry.id}` : `results/${entry.id}`;
  const source = join(ROOT, resultPath);
  const built = join(source, 'dist');
  if (!existsSync(built)) throw new Error(`Missing build output: ${built}`);
  const target = join(DIST, resultPath);
  cpSync(built, target, { recursive: true });
  // The original pages remain byte-for-byte intact. Scene extraction runs only
  // in a separate copy used by the optional simplified layout sandtable.
  if (taskId === 'chinese-architecture') {
    const sandtableTarget = join(DIST, '_sandtable', entry.id);
    cpSync(built, sandtableTarget, { recursive: true });
    enableSandtable(sandtableTarget);
  } else {
    const previewTarget = join(DIST, '_scenes', taskId, entry.id);
    cpSync(built, previewTarget, { recursive: true });
    enableSandtable(previewTarget);
  }

  const picturePaths = images(source, entry.cover);
  for (const path of picturePaths) {
    const destination = join(target, path);
    mkdirSync(dirname(destination), { recursive: true });
    cpSync(join(source, path), destination);
  }

  const captures = { first: `${resultPath}/${entry.cover}` };
  for (const condition of taskConfig.conditions) {
    const file = join(taskDir, 'captures', entry.id, `${condition.id}.jpg`);
    if (!existsSync(file)) continue;
    const destination = join(DIST, taskId, '_captures', entry.id, `${condition.id}.jpg`);
    mkdirSync(dirname(destination), { recursive: true });
    cpSync(file, destination);
    captures[condition.id] = `${taskId}/_captures/${entry.id}/${condition.id}.jpg`;
  }

  const alias = join(DIST, taskId, entry.id, 'index.html');
  const redirect = `${relative(dirname(alias), target).split('\\').join('/')}/`;
  mkdirSync(dirname(alias), { recursive: true });
  writeFileSync(alias, `<!doctype html><meta charset="utf-8"><title>已迁移</title>` +
    `<script>location.replace(${JSON.stringify(redirect)} + location.search + location.hash)</script>` +
    `<a href="${redirect}">页面已迁移，点此打开</a>`);

  const packageJson = JSON.parse(readFileSync(join(source, 'package.json'), 'utf8'));
  const dependencies = { ...packageJson.dependencies, ...packageJson.devDependencies };
  const stack = ['Three.js', dependencies.react ? 'React' : null, dependencies.vite ? 'Vite' : '原生页面'].filter(Boolean).join(' · ');
  const repoPath = `${galleryConfig.repo}/tree/${galleryConfig.branch}/${resultPath}`;
  return {
    id: entry.id,
    previewModel: existsSync(join(ROOT, 'site', 'assets', 'scenes', taskId, `${entry.id}.sbox`))
      ? `assets/scenes/${taskId}/${entry.id}.sbox` : null,
    previewLoader: taskId === 'chinese-architecture' ? `_sandtable/${entry.id}/` : `_scenes/${taskId}/${entry.id}/`,
    addedAt: entry.addedAt ?? null,
    model,
    effort: original?.effort ?? entry.effort ?? '',
    title: original?.title ?? entry.title,
    summary: original?.summary ?? entry.description,
    scene: `${resultPath}/`,
    source: repoPath,
    readme: existsSync(join(source, 'README.md')) ? `${galleryConfig.repo}/blob/${galleryConfig.branch}/${resultPath}/README.md` : null,
    facts: original?.facts ?? { stack },
    stats: { ...sourceStats(source), ...buildStats(built) },
    gallery: original
      ? original.gallery.map((item) => ({ src: `${resultPath}/${item.src}`, caption: item.caption }))
      : picturePaths.map((path) => ({ src: `${resultPath}/${path}`, caption: path === entry.cover ? '作品预览' : path.split('/').at(-1) })),
    captures,
    captureNote: original?.capture?.note ?? entry.captureNote ?? '',
    guide: original?.guide ?? entry.guide ?? {},
  };
}

const data = {
  title: galleryConfig.title,
  subtitle: galleryConfig.subtitle,
  description: galleryConfig.description,
  repo: galleryConfig.repo,
  models: galleryConfig.models,
  tasks: taskConfigs.map((taskConfig) => ({
    id: taskConfig.id,
    title: taskConfig.title,
    summary: taskConfig.summary,
    date: taskConfig.date,
    tags: taskConfig.tags,
    prompt: readFileSync(join(ROOT, 'tasks', taskConfig.id, taskConfig.prompt), 'utf8'),
    promptUrl: `${galleryConfig.repo}/blob/${galleryConfig.branch}/tasks/${taskConfig.id}/${taskConfig.prompt}`,
    conditions: taskConfig.conditions.map(({ id, label, note, mobile }) => ({ id, label, note, mobile: !!mobile })),
    facts: taskConfig.facts,
    factsNote: taskConfig.factsNote,
    results: entries.filter((entry) => taskIdOf(entry) === taskConfig.id).map((entry) => assembleResult(entry, taskConfig)),
  })),
};

writeFileSync(join(DIST, 'data.json'), JSON.stringify(data));
writeFileSync(join(DIST, 'results.json'), JSON.stringify(entries, null, 2));
writeFileSync(join(DIST, '.nojekyll'), '');
console.log(`Assembled ${entries.length} result(s) across ${data.tasks.length} task(s) in dist/`);
