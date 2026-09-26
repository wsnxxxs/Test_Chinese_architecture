import { importArchitecture, disposeObject } from '/sandtable.js';
import { packPreview } from '/preview-model.js';

const jobs = await (await fetch('/__bake/jobs')).json();
const status = document.querySelector('#progress'), list = document.querySelector('#results'), start = document.querySelector('#start');
status.textContent = `${jobs.length} 份作品待生成`; let current = null;
window.addEventListener('message', async event => {
  if (!current || current.importing || event.origin !== location.origin || event.source !== current.frame.contentWindow || event.data?.type !== 'gallery-scene-ready') return;
  const job = current; job.importing = true; clearTimeout(job.timeout);
  let imported;
  try {
    imported = await importArchitecture(job.frame.contentWindow.__galleryScenes, job.item.id, { architecture: job.item.task === 'chinese-architecture' });
    const buffer = await packPreview(imported, job.item.task === 'chinese-architecture');
    const response = await fetch(`/__bake/save/${job.item.task}/${job.item.id}`, { method: 'POST', body: buffer });
    if (!response.ok) throw new Error(await response.text());
    job.resolve(Math.round(buffer.byteLength / 1024));
  } catch (error) { job.reject(error); }
  finally { if (imported) disposeObject(imported.group); job.frame.remove(); current = null; }
});
start.addEventListener('click', async () => {
  start.disabled = true; let done = 0, failed = 0;
  for (const item of jobs) {
    const row = document.createElement('li'); row.textContent = `${item.task}/${item.id} · 生成中`; list.append(row);
    status.textContent = `已完成 ${done} / ${jobs.length}，失败 ${failed}`;
    try {
      const size = await new Promise((resolve, reject) => {
        const frame = document.createElement('iframe'); frame.src = `/${item.loader}?sandtable=1`;
        current = { item, frame, resolve, reject, timeout: setTimeout(() => { frame.remove(); current = null; reject(new Error('载入超时')); }, 60000) };
        document.body.append(frame);
      });
      row.textContent = `${item.task}/${item.id} · 完成 · ${size} KiB`; done++;
    } catch (error) { row.textContent = `${item.task}/${item.id} · ${error.message}`; row.className = 'error'; failed++; }
  }
  status.textContent = `生成结束：成功 ${done}，失败 ${failed}`;
});
