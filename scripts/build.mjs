// Builds every registered result and assembles the static site into dist/.
//
//   node scripts/build.mjs                 install (if needed) + build all results, then assemble
//   node scripts/build.mjs --site-only     reuse existing result builds, only re-assemble the site
//   node scripts/build.mjs --check         validate data and run each result's own "check" script
//   node scripts/build.mjs --only=<task>/<result>   limit building to one result (others reuse old builds)
//   node scripts/build.mjs --install       force a clean `npm ci` in each built result
import { execSync } from 'node:child_process';
import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { dirname, extname, join, relative } from 'node:path';
import { gzipSync } from 'node:zlib';
import { ROOT, captureFile, loadGallery } from './lib.mjs';

const args = process.argv.slice(2);
const flag = (name) => args.includes(`--${name}`);
const only = args.find((a) => a.startsWith('--only='))?.slice(7);
const DIST = join(ROOT, 'dist');

const { config, models, tasks } = loadGallery();
const run = (cmd, cwd) => execSync(cmd, { cwd, stdio: 'inherit' });
const rel = (p) => relative(ROOT, p).split('\\').join('/');

if (flag('check')) {
  for (const task of tasks) {
    for (const r of task.results) {
      if (!JSON.parse(readFileSync(join(r.dir, 'package.json'), 'utf8')).scripts?.check) continue;
      console.log(`\n▶ check ${task.id}/${r.id}`);
      if (!existsSync(join(r.dir, 'node_modules'))) run('npm ci --no-audit --no-fund', r.dir);
      run('npm run check', r.dir);
    }
  }
  console.log(`\n✓ 数据校验通过：${tasks.length} 道题，${tasks.reduce((n, t) => n + t.results.length, 0)} 个结果`);
  process.exit(0);
}

if (!flag('site-only')) {
  for (const task of tasks) {
    for (const r of task.results) {
      if (only && only !== `${task.id}/${r.id}`) continue;
      console.log(`\n▶ build ${task.id}/${r.id}`);
      if (flag('install') || !existsSync(join(r.dir, 'node_modules'))) {
        run(existsSync(join(r.dir, 'package-lock.json')) ? 'npm ci --no-audit --no-fund' : 'npm install --no-audit --no-fund', r.dir);
      }
      run('npm run build', r.dir);
    }
  }
}

// ---- assemble -------------------------------------------------------------------------
rmSync(DIST, { recursive: true, force: true });
cpSync(join(ROOT, 'site'), DIST, { recursive: true });

const SOURCE_EXT = new Set(['.js', '.mjs', '.cjs', '.ts', '.tsx', '.jsx', '.vue', '.svelte', '.css', '.scss', '.less', '.html', '.glsl', '.wgsl']);
const SKIP_DIRS = new Set(['node_modules', 'dist', 'docs', '.git', 'public']);
function walk(dir, fn) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) {
      if (!SKIP_DIRS.has(name)) walk(p, fn);
    } else fn(p);
  }
}
function sourceStats(dir) {
  let files = 0;
  let lines = 0;
  walk(dir, (p) => {
    if (!SOURCE_EXT.has(extname(p)) || /\.config\.[a-z]+$/.test(p)) return;
    files++;
    lines += readFileSync(p, 'utf8').split('\n').filter((l) => l.trim()).length;
  });
  return { files, lines };
}
function buildStats(dir) {
  let bytes = 0;
  let gzip = 0;
  walk(dir, (p) => {
    if (!['.js', '.css', '.html'].includes(extname(p))) return;
    const buf = readFileSync(p);
    bytes += buf.length;
    gzip += gzipSync(buf).length;
  });
  return { bytes, gzip };
}

const repoPath = (p) => `${config.repo}/tree/${config.branch}/${rel(p)}`;
const missing = [];
const data = {
  title: config.title,
  subtitle: config.subtitle,
  description: config.description,
  repo: config.repo,
  models: [...models.values()],
  tasks: tasks.map((task) => ({
    id: task.id,
    title: task.title,
    summary: task.summary,
    date: task.date,
    tags: task.tags ?? [],
    prompt: task.promptText,
    promptUrl: `${config.repo}/blob/${config.branch}/${rel(join(task.dir, task.prompt))}`,
    conditions: task.conditions.map(({ id, label, note, mobile }) => ({ id, label, note, mobile: !!mobile })),
    facts: task.facts,
    factsNote: task.factsNote ?? '',
    results: task.results.map((r) => {
      const built = join(r.dir, 'dist');
      const out = join(DIST, task.id, r.id);
      if (existsSync(built)) cpSync(built, out, { recursive: true });
      else missing.push(`${task.id}/${r.id}`);

      const media = (src) => {
        const target = join(DIST, task.id, '_media', r.id, src);
        mkdirSync(dirname(target), { recursive: true });
        cpSync(join(r.dir, src), target);
        return rel(target).replace(/^dist\//, '');
      };
      const captures = {};
      for (const c of task.conditions) {
        const file = captureFile(task, r.id, c.id);
        if (!existsSync(file)) continue;
        const target = join(DIST, task.id, '_captures', r.id, `${c.id}.jpg`);
        mkdirSync(dirname(target), { recursive: true });
        cpSync(file, target);
        captures[c.id] = rel(target).replace(/^dist\//, '');
      }

      for (const alias of r.aliases ?? []) {
        const page = join(DIST, alias, 'index.html');
        const target = relative(join(DIST, alias), out).split('\\').join('/') + '/';
        mkdirSync(dirname(page), { recursive: true });
        writeFileSync(page, `<!doctype html><meta charset="utf-8"><title>已迁移</title>` +
          `<script>location.replace(${JSON.stringify(target)} + location.search + location.hash)</script>` +
          `<a href="${target}">页面已迁移，点此打开</a>`);
      }

      const readme = ['README.md', 'readme.md'].find((f) => existsSync(join(r.dir, f)));
      return {
        id: r.id,
        model: r.model,
        effort: r.effort ?? '',
        title: r.title,
        summary: r.summary ?? '',
        scene: existsSync(built) ? `${task.id}/${r.id}/` : null,
        source: repoPath(r.dir),
        readme: readme ? `${config.repo}/blob/${config.branch}/${rel(join(r.dir, readme))}` : null,
        facts: r.facts ?? {},
        stats: { ...sourceStats(r.dir), ...(existsSync(built) ? buildStats(built) : {}) },
        gallery: (r.gallery ?? []).map((g) => ({ src: media(g.src), caption: g.caption ?? '' })),
        captures,
        captureNote: r.capture?.note ?? '',
        guide: r.guide ?? {},
      };
    }),
  })),
};

writeFileSync(join(DIST, 'data.json'), JSON.stringify(data));
writeFileSync(join(DIST, '.nojekyll'), '');
if (missing.length) console.warn(`\n⚠ 以下结果尚未构建，站点中将无法在线预览：${missing.join(', ')}`);
console.log(`\n✓ 已生成 dist/：${data.tasks.length} 道题，${data.tasks.reduce((n, t) => n + t.results.length, 0)} 个结果`);
