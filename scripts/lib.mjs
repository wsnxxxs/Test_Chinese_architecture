// Loads gallery.json and every tasks/<task>/task.json, and validates them.
// Shared by build.mjs and capture.mjs.
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = fileURLToPath(new URL('..', import.meta.url));
const ID = /^[a-z0-9]+(?:[.-][a-z0-9]+)*$/;
// Keys in a result's "capture" object that are options rather than condition ids.
const CAPTURE_OPTIONS = new Set(['query', 'wait', 'note']);

const readJson = (file) => {
  try {
    return JSON.parse(readFileSync(file, 'utf8'));
  } catch (err) {
    throw new Error(`${file}: ${err.message}`);
  }
};

export function loadGallery() {
  const config = readJson(join(ROOT, 'gallery.json'));
  const errors = [];
  const fail = (where, msg) => errors.push(`${where}: ${msg}`);
  const models = new Map();
  for (const m of config.models ?? []) {
    if (!ID.test(m.id ?? '') || models.has(m.id)) fail('gallery.json', `模型 id 无效或重复：${m.id}`);
    if (!m.name) fail('gallery.json', `模型 ${m.id} 缺少 name`);
    models.set(m.id, m);
  }

  const tasksDir = join(ROOT, 'tasks');
  const tasks = [];
  for (const id of readdirSync(tasksDir).sort()) {
    const dir = join(tasksDir, id);
    const file = join(dir, 'task.json');
    if (!existsSync(file)) continue;
    const where = `tasks/${id}/task.json`;
    if (!ID.test(id)) fail(where, `题目目录名需为小写字母、数字、点和连字符：${id}`);
    const task = { ...readJson(file), id, dir };
    for (const key of ['title', 'summary', 'prompt']) if (!task[key]) fail(where, `缺少 ${key}`);
    const promptFile = join(dir, task.prompt ?? 'PROMPT.md');
    if (existsSync(promptFile)) task.promptText = readFileSync(promptFile, 'utf8').trim();
    else fail(where, `找不到提示词文件 ${task.prompt}`);

    task.conditions ??= [];
    task.facts ??= [];
    const conditionIds = new Set(task.conditions.map((c) => c.id));
    const factIds = new Set(task.facts.map((f) => f.id));
    if (conditionIds.size !== task.conditions.length) fail(where, '截图条件 id 重复');

    const resultIds = new Set();
    for (const r of task.results ?? []) {
      const at = `${where} → ${r.id}`;
      if (!ID.test(r.id ?? '') || resultIds.has(r.id)) fail(at, '结果 id 无效或重复');
      resultIds.add(r.id);
      if (!models.has(r.model)) fail(at, `模型 ${r.model} 未在 gallery.json 中登记`);
      if (!r.title) fail(at, '缺少 title');
      r.dir = join(dir, 'results', r.id);
      const pkg = join(r.dir, 'package.json');
      if (!existsSync(pkg)) fail(at, `缺少 results/${r.id}/package.json`);
      else if (!readJson(pkg).scripts?.build) fail(at, 'package.json 缺少 build 脚本');
      for (const g of r.gallery ?? []) if (!existsSync(join(r.dir, g.src))) fail(at, `找不到截图 ${g.src}`);
      for (const key of Object.keys(r.facts ?? {})) if (!factIds.has(key)) fail(at, `facts.${key} 未在题目 facts 中定义`);
      for (const key of Object.keys(r.capture ?? {})) {
        if (!CAPTURE_OPTIONS.has(key) && !conditionIds.has(key)) fail(at, `capture.${key} 不是已定义的截图条件`);
      }
    }
    task.results ??= [];
    tasks.push(task);
  }

  if (errors.length) throw new Error(`数据校验失败：\n  ${errors.join('\n  ')}`);
  tasks.sort((a, b) => String(b.date ?? '').localeCompare(String(a.date ?? '')) || a.id.localeCompare(b.id));
  return { config, models, tasks };
}

export const captureFile = (task, resultId, conditionId) => join(task.dir, 'captures', resultId, `${conditionId}.jpg`);
