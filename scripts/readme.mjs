// Generates the counts and catalog tables in README.md from the manifest, so
// intake never edits them by hand. Only text between the markers is replaced:
//   <!-- catalog:summary:start --> ... <!-- catalog:summary:end -->
//   <!-- catalog:<task>:start -->  ... <!-- catalog:<task>:end -->
// `node scripts/readme.mjs` rewrites README.md; check-intake reports a stale one.
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { resultDir, taskIdOf } from './results.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const read = path => JSON.parse(readFileSync(join(root, path), 'utf8'));

export function renderReadme(text = readFileSync(join(root, 'README.md'), 'utf8')) {
  const entries = read('results/manifest.json'), gallery = read('gallery.json');
  const tasks = readdirSync(join(root, 'tasks')).map(id => ({ ...read(`tasks/${id}/task.json`), id }))
    .sort((a, b) => a.date.localeCompare(b.date) || (a.order ?? 0) - (b.order ?? 0));
  const [, owner, repo] = gallery.repo.match(/github\.com\/([^/]+)\/([^/]+)/);
  const site = `https://${owner}.github.io/${repo}/`;
  const resultsOf = task => entries.filter(entry => taskIdOf(entry) === task.id);
  const modelOf = (task, entry) => task.results?.find(result => result.id === entry.id)?.model ?? entry.modelId ?? entry.id;
  const newline = text.includes('\r\n') ? '\r\n' : '\n';
  const latest = entries.map(entry => entry.addedAt.slice(0, 10)).sort().at(-1);

  const blocks = {
    summary: [
      `截至 ${latest}，收录 **${tasks.length} 道题目、${entries.length} 份作品、${gallery.models.length} 个模型**。同一模型的不同推理档位分别收录为作品，模型数量按模型注册表统计。`,
      '',
      '| 题目 | 作品数 | 提示词 | 在线题目页 |',
      '| --- | ---: | --- | --- |',
      ...tasks.map(task => `| ${task.title} | ${resultsOf(task).length} | [${task.promptPending ? '提示词待补充' : '查看提示词'}](tasks/${task.id}/${task.prompt}) | [浏览作品](${site}#/${task.id}) |`),
    ],
  };
  for (const task of tasks) {
    const results = resultsOf(task), models = new Set(results.map(entry => modelOf(task, entry)));
    blocks[task.id] = [
      `${results.length} 份作品，涉及 ${models.size} 个模型。`,
      '',
      '| 模型 | 作品 | 在线预览 | 源码与说明 |',
      '| --- | --- | --- | --- |',
      ...results.map(entry => {
        const title = task.results?.find(result => result.id === entry.id)?.title ?? entry.title;
        return `| ${entry.model} | ${title} | [打开作品](${site}#/${task.id}/${entry.id}) | [项目说明](${resultDir(entry)}/README.md) |`;
      }),
    ];
  }
  for (const [name, lines] of Object.entries(blocks)) {
    const pattern = new RegExp(`(<!-- catalog:${name}:start -->\\r?\\n)[\\s\\S]*?(\\r?\\n<!-- catalog:${name}:end -->)`);
    if (!pattern.test(text)) throw new Error(`README.md has no catalog:${name} block; add its start/end markers.`);
    text = text.replace(pattern, (_, start, end) => `${start}${lines.join(newline)}${end}`);
  }
  return text;
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  writeFileSync(join(root, 'README.md'), renderReadme());
  console.log('README.md catalog updated.');
}
