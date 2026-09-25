// 同题异答 — single-page gallery. Routes (hash based, so it works on any static host):
//   #/                        home: every task and every model
//   #/<task>                  task: results, uniform screenshots, facts table, prompt
//   #/<task>/<result>         viewer: the live page in a frame with a guide drawer
//   #/<task>/<a>/vs/<b>       viewer, two results side by side
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const store = {
  get(key) { try { return localStorage.getItem(key); } catch { return null; } },
  set(key, value) { try { localStorage.setItem(key, value); } catch { /* private mode */ } },
};

const root = $('#app');
let DATA;
let MODELS;

const size = (n) => (n >= 1024 * 1024 ? `${(n / 1024 / 1024).toFixed(1)} MB` : `${Math.round(n / 1024)} KB`);
const num = (n) => Number(n).toLocaleString('zh-CN');
const modelOf = (r) => MODELS.get(r.model) ?? { name: r.model, vendor: '' };
const label = (r) => (r.effort ? `${modelOf(r).name} · ${r.effort}` : modelOf(r).name);
// Cover: the first uniform capture (task condition order), else the author's first screenshot.
const cover = (r) => Object.values(r.captures)[0] ?? r.gallery[0]?.src ?? '';
const taskHref = (t) => `#/${t.id}`;
const viewHref = (t, a, b) => `#/${t.id}/${a}${b ? `/vs/${b}` : ''}`;
const ext = (href, text, cls = 'btn') => `<a class="${cls}" href="${esc(href)}" target="_blank" rel="noopener">${text}<span class="ext" aria-hidden="true">↗</span></a>`;

// ---- shell ----------------------------------------------------------------------------
function header(crumbs = []) {
  const trail = crumbs.map((c) => `<span class="sep">/</span>${c.href ? `<a href="${c.href}">${esc(c.text)}</a>` : `<span>${esc(c.text)}</span>`}`).join('');
  return `<header class="topbar"><div class="wrap topbar-in">
    <a class="brand" href="#/"><span class="seal" aria-hidden="true">同</span><span class="brand-text"><b>${esc(DATA.title)}</b><small>${esc(DATA.subtitle)}</small></span></a>
    <nav class="crumbs" aria-label="位置">${trail}</nav>
    ${ext(DATA.repo, 'GitHub', 'topbar-link')}
  </div></header>`;
}
const footer = () => `<footer class="footer"><div class="wrap">
  <p>每个结果都是模型生成的独立前端项目，站点只负责构建、陈列与对照，不改动其代码。</p>
  <p>添加题目或结果：见仓库 <a href="${esc(DATA.repo)}#readme" target="_blank" rel="noopener">README</a>。</p>
</div></footer>`;

function img(src, alt, cls = '') {
  return src
    ? `<img class="${cls}" src="${esc(src)}" alt="${esc(alt)}" loading="lazy" decoding="async" />`
    : `<div class="${cls} img-empty">暂无截图</div>`;
}

// ---- home -----------------------------------------------------------------------------
function renderHome() {
  const results = DATA.tasks.flatMap((t) => t.results.map((r) => ({ t, r })));
  const taskCards = DATA.tasks.map((t) => {
    const shown = t.results.slice(0, 4);
    return `<article class="task-card">
      <a class="mosaic n${shown.length}" href="${taskHref(t)}" aria-label="查看「${esc(t.title)}」的全部结果">
        ${shown.map((r) => `<figure>${img(cover(r), label(r))}<figcaption>${esc(label(r))}</figcaption></figure>`).join('')}
      </a>
      <div class="task-body">
        <p class="meta">${esc(t.date ?? '')}${t.tags.map((g) => `<span class="tag">${esc(g)}</span>`).join('')}</p>
        <h3><a href="${taskHref(t)}">${esc(t.title)}</a></h3>
        <p class="summary">${esc(t.summary)}</p>
        <p class="task-count">${t.results.length} 个结果 · ${new Set(t.results.map((r) => r.model)).size} 个模型</p>
        <ul class="chips">${t.results.map((r) => `<li><a href="${viewHref(t, r.id)}">${esc(label(r))}</a></li>`).join('')}</ul>
        <div class="actions">
          <a class="btn primary" href="${taskHref(t)}">查看对比</a>
          ${t.results[0] ? `<a class="btn" href="${viewHref(t, t.results[0].id, t.results[1]?.id)}">${t.results[1] ? '并排预览' : '在线预览'}</a>` : ''}
        </div>
      </div>
    </article>`;
  }).join('');

  const modelCards = DATA.models.map((m) => {
    const mine = results.filter(({ r }) => r.model === m.id);
    return `<article class="model-card">
      <header><span class="avatar" aria-hidden="true">${esc(m.name.replace(/^Claude\s+/, '').slice(0, 1))}</span>
        <div><h3>${esc(m.name)}</h3><p>${[m.vendor, `${mine.length} 个结果`].filter(Boolean).map(esc).join(' · ')}</p></div></header>
      ${mine.length ? `<ul>${mine.map(({ t, r }) => `<li><a href="${viewHref(t, r.id)}"><span>${esc(r.title)}</span><small>${esc(t.title)}${r.effort ? ` · ${esc(r.effort)}` : ''}</small></a></li>`).join('')}</ul>` : '<p class="muted">暂无结果</p>'}
    </article>`;
  }).join('');

  root.innerHTML = `${header()}
  <main>
    <section class="hero wrap">
      <p class="eyebrow">Same prompt · Different models</p>
      <h1>同一份提示词，<br />看不同模型交出的前端页面。</h1>
      <p class="lead">${esc(DATA.description)}</p>
      <dl class="stats">
        <div><dt>题目</dt><dd>${DATA.tasks.length}</dd></div>
        <div><dt>模型</dt><dd>${DATA.models.length}</dd></div>
        <div><dt>结果</dt><dd>${results.length}</dd></div>
      </dl>
    </section>
    <section class="block wrap" aria-labelledby="h-tasks">
      <div class="block-head"><h2 id="h-tasks">题目</h2><p>最新的在前。每道题下的结果都可以在线运行、按统一条件截图对照。</p></div>
      <div class="task-list">${taskCards || '<p class="muted">还没有题目。</p>'}</div>
    </section>
    <section class="block wrap" aria-labelledby="h-models">
      <div class="block-head"><h2 id="h-models">模型</h2><p>按模型查看它参与过的全部题目。</p></div>
      <div class="model-grid">${modelCards}</div>
    </section>
  </main>${footer()}`;
  document.title = `${DATA.title} · ${DATA.subtitle}`;
}

// ---- task -----------------------------------------------------------------------------
const taskState = { cond: null };

function shotGrid(t) {
  const cond = t.conditions.find((c) => c.id === taskState.cond) ?? t.conditions[0];
  if (!cond) return '';
  return `<div class="shot-grid${cond.mobile ? ' phones' : ''}">${t.results.map((r, i) => {
    const src = r.captures[cond.id];
    return `<figure class="shot">
      ${src ? `<button class="shot-img" data-shot="${i}" aria-label="放大查看 ${esc(label(r))} · ${esc(cond.label)}">${img(src, `${label(r)} · ${cond.label}`)}</button>` : '<div class="shot-img img-empty">此条件暂无截图</div>'}
      <figcaption><b>${esc(r.title)}</b><span>${esc(label(r))}</span><a href="${viewHref(t, r.id)}">在线预览</a></figcaption>
    </figure>`;
  }).join('')}</div>`;
}

function factsTable(t) {
  const rows = [
    ...t.facts.map((f) => [f.label, t.results.map((r) => esc(r.facts[f.id] ?? '—'))]),
    ['源码', t.results.map((r) => (r.stats.files ? `${num(r.stats.lines)} 行 <small>${r.stats.files} 个文件</small>` : '—'))],
    ['构建产物', t.results.map((r) => (r.stats.bytes ? `${size(r.stats.gzip)} <small>gzip · 原始 ${size(r.stats.bytes)}</small>` : '—'))],
    ['作者截图', t.results.map((r) => (r.gallery.length ? `<button class="link" data-gallery="${esc(r.id)}">${r.gallery.length} 张</button>` : '—'))],
    ['链接', t.results.map((r) => `<a href="${viewHref(t, r.id)}">预览</a> · <a href="${esc(r.source)}" target="_blank" rel="noopener">源码</a>${r.readme ? ` · <a href="${esc(r.readme)}" target="_blank" rel="noopener">说明</a>` : ''}`)],
  ];
  return `<div class="table-wrap" tabindex="0"><table class="facts">
    <thead><tr><th scope="col"><span class="sr">项目</span></th>${t.results.map((r) => `<th scope="col"><b>${esc(r.title)}</b><small>${esc(label(r))}</small></th>`).join('')}</tr></thead>
    <tbody>${rows.map(([name, cells]) => `<tr><th scope="row">${esc(name)}</th>${cells.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody>
  </table></div>`;
}

function renderTask(t) {
  taskState.cond = t.conditions.some((c) => c.id === taskState.cond) ? taskState.cond : t.conditions[0]?.id;
  const [a, b] = t.results;
  const hasCaptures = t.results.some((r) => Object.keys(r.captures).length);
  const captureNotes = t.results.filter((r) => r.captureNote).map((r) => `${esc(r.title)}：${esc(r.captureNote)}`);

  const cards = t.results.map((r) => {
    const m = modelOf(r);
    return `<article class="result">
      <a class="result-media" href="${viewHref(t, r.id)}">${img(cover(r), r.title)}<span class="play"><span aria-hidden="true">▶</span> 在线预览</span></a>
      <div class="result-body">
        <p class="result-model"><b>${esc(m.name)}</b>${r.effort ? `<span class="badge">${esc(r.effort)}</span>` : ''}<span class="vendor">${esc(m.vendor ?? '')}</span></p>
        <h3>${esc(r.title)}</h3>
        <p class="summary">${esc(r.summary)}</p>
        <p class="result-stats">${r.stats.lines ? `<span>${num(r.stats.lines)} 行源码</span>` : ''}${r.stats.gzip ? `<span>${size(r.stats.gzip)} gzip</span>` : ''}${r.gallery.length ? `<span>作者截图 ${r.gallery.length} 张</span>` : ''}</p>
        <div class="actions">
          <a class="btn primary sm" href="${viewHref(t, r.id)}">在线预览</a>
          ${r.gallery.length ? `<button class="btn sm" data-gallery="${esc(r.id)}">作者截图</button>` : ''}
          ${r.scene ? ext(r.scene, '独立页面', 'btn sm ghost') : ''}
          ${ext(r.source, '源码', 'btn sm ghost')}
        </div>
      </div>
    </article>`;
  }).join('');

  root.innerHTML = `${header([{ text: t.title }])}
  <main>
    <section class="task-hero wrap">
      <p class="meta">${esc(t.date ?? '')}${t.tags.map((g) => `<span class="tag">${esc(g)}</span>`).join('')}</p>
      <h1>${esc(t.title)}</h1>
      <p class="lead">${esc(t.summary)}</p>
      <div class="actions">
        ${a ? `<a class="btn primary" href="${viewHref(t, a.id)}"><span aria-hidden="true">▶</span> 在线预览</a>` : ''}
        ${b ? `<a class="btn" href="${viewHref(t, a.id, b.id)}">并排对比</a>` : ''}
        <button class="btn ghost" data-go="prompt">查看提示词</button>
      </div>
    </section>
    <nav class="subnav" aria-label="本页"><div class="wrap subnav-in">
      <button data-go="results">结果<span>${t.results.length}</span></button>
      ${t.conditions.length ? '<button data-go="shots">截图对照</button>' : ''}
      <button data-go="facts">参数</button>
      <button data-go="prompt">提示词</button>
    </div></nav>

    <section id="results" class="block wrap">
      <div class="block-head"><h2>结果</h2><p>点击卡片进入在线预览；预览页右侧有该页面的操作指南。</p></div>
      <div class="result-grid">${cards}</div>
    </section>

    ${t.conditions.length ? `<section id="shots" class="block wrap">
      <div class="block-head"><h2>截图对照</h2><p>由脚本在同一浏览器、同一窗口尺寸下，按相同条件自动截取，未经挑选。</p></div>
      <div class="seg" role="tablist" aria-label="截图条件">${t.conditions.map((c) => `<button role="tab" data-cond="${esc(c.id)}" aria-selected="${c.id === taskState.cond}">${esc(c.label)}</button>`).join('')}</div>
      <p class="cond-note" id="cond-note">${esc(t.conditions.find((c) => c.id === taskState.cond)?.note ?? '')}</p>
      <div id="shot-grid">${hasCaptures ? shotGrid(t) : '<p class="muted">还没有截图。运行 <code>npm run build && npm run capture</code> 生成。</p>'}</div>
      ${captureNotes.length ? `<p class="fine">${captureNotes.join('<br />')}</p>` : ''}
      <p class="fine">截图环境没有 GPU（软件渲染），光影与帧率可能不如实际设备；请以在线预览为准。</p>
    </section>` : ''}

    <section id="facts" class="block wrap">
      <div class="block-head"><h2>参数</h2><p>${esc(t.factsNote)}</p></div>
      ${factsTable(t)}
    </section>

    <section id="prompt" class="block wrap">
      <div class="block-head"><h2>提示词</h2><p>所有结果使用的原始提示词。</p></div>
      <div class="prompt">
        <div class="prompt-bar"><span>${esc(t.promptUrl.split('/').pop())}</span>
          <span class="prompt-tools"><button class="btn sm ghost" data-copy>复制</button>${ext(t.promptUrl, 'GitHub', 'btn sm ghost')}</span></div>
        <pre>${esc(t.prompt)}</pre>
      </div>
    </section>
  </main>${footer()}`;
  document.title = `${t.title} · ${DATA.title}`;

  root.onclick = (e) => {
    const go = e.target.closest('[data-go]');
    if (go) $(`#${go.dataset.go}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    const cond = e.target.closest('[data-cond]');
    if (cond) {
      taskState.cond = cond.dataset.cond;
      $$('[data-cond]').forEach((el) => el.setAttribute('aria-selected', String(el === cond)));
      $('#cond-note').textContent = t.conditions.find((c) => c.id === taskState.cond)?.note ?? '';
      if (hasCaptures) $('#shot-grid').innerHTML = shotGrid(t);
    }
    const shot = e.target.closest('[data-shot]');
    if (shot) openCompareLightbox(t, Number(shot.dataset.shot));
    const gal = e.target.closest('[data-gallery]');
    if (gal) {
      const r = t.results.find((x) => x.id === gal.dataset.gallery);
      lightbox.open(r.gallery.map((g, i) => ({ src: g.src, title: g.caption || r.title, sub: `${r.title} · ${label(r)} · 作者截图 ${i + 1}/${r.gallery.length}` })), 0);
    }
    const copy = e.target.closest('[data-copy]');
    if (copy) {
      navigator.clipboard?.writeText(t.prompt).then(() => {
        copy.textContent = '已复制';
        setTimeout(() => { copy.textContent = '复制'; }, 1500);
      }, () => { copy.textContent = '复制失败'; });
    }
  };
}

function openCompareLightbox(t, index) {
  const items = (condId) => {
    const cond = t.conditions.find((c) => c.id === condId);
    return t.results.filter((r) => r.captures[condId]).map((r) => ({
      id: r.id, src: r.captures[condId], title: `${r.title} · ${cond.label}`, sub: `${label(r)} · ←/→ 换结果，↑/↓ 换条件`,
    }));
  };
  const current = t.results[index];
  const list = items(taskState.cond);
  lightbox.open(list, Math.max(0, list.findIndex((x) => x.id === current.id)), (dir, item) => {
    const withShots = t.conditions.filter((c) => t.results.some((r) => r.captures[c.id]));
    let i = withShots.findIndex((c) => c.id === taskState.cond);
    i = (i + dir + withShots.length) % withShots.length;
    taskState.cond = withShots[i].id;
    $$('[data-cond]').forEach((el) => el.setAttribute('aria-selected', String(el.dataset.cond === taskState.cond)));
    const note = $('#cond-note');
    if (note) note.textContent = withShots[i].note ?? '';
    const grid = $('#shot-grid');
    if (grid) grid.innerHTML = shotGrid(t);
    const next = items(taskState.cond);
    return { items: next, index: Math.max(0, next.findIndex((x) => x.id === item.id)) };
  });
}

// ---- lightbox -------------------------------------------------------------------------
const lightbox = (() => {
  const el = $('#lightbox');
  const image = $('.lb-img', el);
  const caption = $('.lb-caption', el);
  let items = [];
  let index = 0;
  let vertical = null;
  let lastFocus = null;
  const show = () => {
    const it = items[index];
    image.src = it.src;
    image.alt = it.title;
    caption.innerHTML = `<b>${esc(it.title)}</b><span>${esc(it.sub ?? '')}</span>`;
    el.classList.toggle('single', items.length < 2);
  };
  const step = (d) => { index = (index + d + items.length) % items.length; show(); };
  const close = () => {
    el.hidden = true;
    document.body.classList.remove('lb-open');
    lastFocus?.focus();
  };
  el.addEventListener('click', (e) => {
    const act = e.target.closest('[data-lb]')?.dataset.lb;
    if (act === 'prev') step(-1);
    else if (act === 'next') step(1);
    else if (act === 'close' || e.target === el) close();
  });
  document.addEventListener('keydown', (e) => {
    if (el.hidden) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowLeft') step(-1);
    else if (e.key === 'ArrowRight') step(1);
    else if (vertical && (e.key === 'ArrowUp' || e.key === 'ArrowDown')) {
      e.preventDefault();
      ({ items, index } = vertical(e.key === 'ArrowDown' ? 1 : -1, items[index]));
      show();
    } else return;
    e.preventDefault();
  });
  let touchX = null;
  el.addEventListener('touchstart', (e) => { touchX = e.touches[0].clientX; }, { passive: true });
  el.addEventListener('touchend', (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
    touchX = null;
  });
  return {
    open(list, i = 0, onVertical = null) {
      if (!list.length) return;
      items = list;
      index = i;
      vertical = onVertical;
      lastFocus = document.activeElement;
      show();
      el.hidden = false;
      document.body.classList.add('lb-open');
      $('.lb-close', el).focus();
    },
    close,
    get isOpen() { return !el.hidden; },
  };
})();

// ---- viewer ---------------------------------------------------------------------------
// Kept alive across hash changes inside the same task so switching one pane
// does not reload the other.
let viewer = null;
const wide = () => matchMedia('(min-width: 1100px)').matches;

function createViewer(t) {
  const state = { panes: [], queries: [], active: 0, guide: store.get('guide') !== '0' && wide() };
  const byId = (id) => t.results.find((r) => r.id === id);
  document.title = `在线预览 · ${t.title}`;

  root.innerHTML = `<div class="viewer">
    <header class="vbar">
      <a class="vback" href="${taskHref(t)}" title="返回「${esc(t.title)}」"><span aria-hidden="true">‹</span><span class="vback-text">${esc(t.title)}</span></a>
      <div class="vtabs" role="tablist" aria-label="切换结果">${t.results.map((r) => `<button role="tab" data-pick="${esc(r.id)}"><b>${esc(r.title)}</b><small>${esc(label(r))}</small></button>`).join('')}</div>
      <select class="vselect" aria-label="切换结果">${t.results.map((r) => `<option value="${esc(r.id)}">${esc(r.title)} · ${esc(label(r))}</option>`).join('')}</select>
      <div class="vtools">
        <button class="vtool" data-v="guide" aria-pressed="false" title="操作指南（G）"><span aria-hidden="true">?</span><span class="vtool-text">指南</span></button>
        ${t.results.length > 1 ? '<button class="vtool" data-v="split" aria-pressed="false" title="并排对比（S）"><span aria-hidden="true">◫</span><span class="vtool-text">并排</span></button>' : ''}
        <a class="vtool" data-v="open" target="_blank" rel="noopener" title="在新窗口打开独立页面"><span aria-hidden="true">↗</span><span class="vtool-text">新窗口</span></a>
        <button class="vtool" data-v="full" title="全屏（F）"><span aria-hidden="true">⛶</span><span class="vtool-text">全屏</span></button>
      </div>
    </header>
    <div class="vmain">
      <div class="stage"></div>
      <aside class="guide" aria-label="操作指南"></aside>
    </div>
  </div>`;
  document.body.classList.add('is-viewer');
  const el = $('.viewer', root);
  const stage = $('.stage', el);
  const guide = $('.guide', el);

  function paneHtml(i) {
    return `<section class="pane" data-pane="${i}">
      <div class="pane-head">
        <select data-pane-pick="${i}" aria-label="第 ${i + 1} 栏的结果">${t.results.map((r) => `<option value="${esc(r.id)}">${esc(r.title)} · ${esc(label(r))}</option>`).join('')}</select>
        <button class="pane-close" data-close="${i}" title="关闭这一栏" aria-label="关闭这一栏">✕</button>
      </div>
      <div class="pane-body"></div>
    </section>`;
  }

  function load(i) {
    const r = byId(state.panes[i]);
    const pane = $(`[data-pane="${i}"]`, stage);
    const body = $('.pane-body', pane);
    $('select', pane).value = r.id;
    if (!r.scene) {
      body.innerHTML = `<div class="loader static"><b>${esc(r.title)}</b><span>该结果尚未构建，无法在线预览。</span></div>`;
      return;
    }
    const src = r.scene + (state.queries[i] ? `?${state.queries[i]}` : '');
    const bg = cover(r);
    // Replace the whole frame so the previous scene's WebGL context is released.
    body.innerHTML = `<iframe src="${esc(src)}" title="${esc(r.title)} · ${esc(label(r))}" allow="fullscreen; autoplay; clipboard-write" allowfullscreen></iframe>
      <div class="loader"${bg ? ` style="--cover:url('${esc(bg)}')"` : ''}><div class="spinner" aria-hidden="true"></div><b>${esc(r.title)}</b><span>${esc(label(r))} · 正在载入</span></div>`;
    const frame = $('iframe', body);
    const loader = $('.loader', body);
    let done = false;
    const hide = () => {
      if (done) return;
      done = true;
      setTimeout(() => loader.classList.add('gone'), 600);
    };
    frame.addEventListener('load', hide, { once: true });
    setTimeout(hide, 20000);
  }

  function renderGuide() {
    const r = byId(state.panes[state.active]);
    const g = r.guide ?? {};
    const split = state.panes.length > 1;
    guide.innerHTML = `<div class="guide-in">
      <div class="guide-head">
        <div><p class="eyebrow">${split ? `${state.active === 0 ? '左' : '右'}栏 · ` : ''}操作指南</p><h2>${esc(r.title)}</h2><p class="guide-model">${esc(label(r))}</p></div>
        <button class="icon-btn" data-v="guide" aria-label="收起指南">✕</button>
      </div>
      <p class="guide-summary">${esc(r.summary)}</p>
      ${g.presets?.length ? `<div class="guide-block"><h3>快速跳转</h3><p class="fine">以下按钮用该页面自带的 URL 参数重新载入。</p>
        <div class="presets">${g.presets.map((p) => `<button class="chip${state.queries[state.active] === p.query ? ' on' : ''}" data-preset="${esc(p.query)}">${esc(p.label)}</button>`).join('')}
        <button class="chip ghost" data-preset="">默认</button></div></div>` : ''}
      ${(g.sections ?? []).map((s) => `<div class="guide-block"><h3>${esc(s.title)}</h3><dl class="keys">${s.items.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl></div>`).join('')}
      ${g.tips?.length ? `<div class="guide-block"><h3>看点</h3><ul class="tips">${g.tips.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></div>` : ''}
      <div class="guide-block"><h3>本站快捷键</h3><dl class="keys">
        <div><dt>← / →</dt><dd>切换结果</dd></div>
        <div><dt>G · S · F</dt><dd>指南 · 并排 · 全屏</dd></div>
        <div><dt>R</dt><dd>重新载入当前栏</dd></div></dl>
        <p class="fine">点击场景后键盘会交给场景本身；点一下顶栏即可恢复本站快捷键。</p></div>
      <div class="guide-links">
        ${r.scene ? ext(r.scene, '独立页面', 'btn sm') : ''}
        ${ext(r.source, '源码', 'btn sm ghost')}
        ${r.readme ? ext(r.readme, '项目说明', 'btn sm ghost') : ''}
        <a class="btn sm ghost" href="${taskHref(t)}#shots">截图对照</a>
      </div>
    </div>`;
  }

  function sync() {
    const split = state.panes.length > 1;
    el.classList.toggle('split', split);
    el.classList.toggle('guide-open', state.guide);
    $$('.pane', stage).forEach((p, i) => p.classList.toggle('active', split && i === state.active));
    const current = state.panes[state.active];
    $$('[data-pick]', el).forEach((b) => {
      const on = b.dataset.pick === current;
      b.setAttribute('aria-selected', String(on));
      b.classList.toggle('other', split && !on && state.panes.includes(b.dataset.pick));
    });
    $('.vselect', el).value = current;
    $('[data-v="guide"]', el).setAttribute('aria-pressed', String(state.guide));
    $('[data-v="split"]', el)?.setAttribute('aria-pressed', String(split));
    const scene = byId(current).scene;
    const open = $('[data-v="open"]', el);
    if (scene) open.href = scene + (state.queries[state.active] ? `?${state.queries[state.active]}` : '');
    else open.removeAttribute('href');
    renderGuide();
  }

  function navigate(panes, active = state.active) {
    state.active = Math.min(active, panes.length - 1);
    const hash = viewHref(t, panes[0], panes[1]);
    if (location.hash !== hash) history.replaceState(null, '', hash);
    update(panes);
  }

  function update(panes) {
    const before = state.panes;
    if (panes.length !== before.length) {
      stage.innerHTML = panes.map((_, i) => paneHtml(i)).join('');
      state.queries = panes.map((id, i) => (before[i] === id ? state.queries[i] ?? '' : ''));
      state.panes = panes;
      panes.forEach((_, i) => load(i));
    } else {
      panes.forEach((id, i) => {
        if (before[i] === id) return;
        state.panes[i] = id;
        state.queries[i] = '';
        load(i);
      });
    }
    state.active = Math.min(state.active, panes.length - 1);
    sync();
  }

  const cycle = (d) => {
    const ids = t.results.map((r) => r.id);
    const panes = [...state.panes];
    let i = ids.indexOf(panes[state.active]);
    do i = (i + d + ids.length) % ids.length; while (panes.length > 1 && panes.includes(ids[i]) && ids.length > 2);
    panes[state.active] = ids[i];
    navigate(panes);
  };
  const toggleGuide = () => {
    state.guide = !state.guide;
    if (wide()) store.set('guide', state.guide ? '1' : '0');
    sync();
  };
  const toggleSplit = () => {
    if (state.panes.length > 1) return navigate([state.panes[state.active]], 0);
    const other = t.results.find((r) => r.id !== state.panes[0]);
    if (other) navigate([state.panes[0], other.id], 1);
  };
  const reload = () => load(state.active);
  const fullscreen = () => {
    if (document.fullscreenElement) document.exitFullscreen();
    else el.requestFullscreen?.().catch(() => {});
  };

  el.addEventListener('click', (e) => {
    const pick = e.target.closest('[data-pick]');
    if (pick) {
      const panes = [...state.panes];
      const at = panes.indexOf(pick.dataset.pick);
      if (at >= 0) { state.active = at; sync(); return; }
      panes[state.active] = pick.dataset.pick;
      return navigate(panes);
    }
    const v = e.target.closest('[data-v]')?.dataset.v;
    if (v === 'guide') return toggleGuide();
    if (v === 'split') return toggleSplit();
    if (v === 'full') return fullscreen();
    const preset = e.target.closest('[data-preset]');
    if (preset) {
      state.queries[state.active] = preset.dataset.preset;
      load(state.active);
      return sync();
    }
    const close = e.target.closest('[data-close]');
    if (close) {
      const keep = state.panes.filter((_, i) => i !== Number(close.dataset.close));
      return navigate(keep, 0);
    }
    const pane = e.target.closest('[data-pane]');
    if (pane && Number(pane.dataset.pane) !== state.active) {
      state.active = Number(pane.dataset.pane);
      sync();
    }
  });
  el.addEventListener('change', (e) => {
    if (e.target.matches('.vselect')) {
      const panes = [...state.panes];
      panes[state.active] = e.target.value;
      navigate(panes);
    } else if (e.target.matches('[data-pane-pick]')) {
      const i = Number(e.target.dataset.panePick);
      const panes = [...state.panes];
      panes[i] = e.target.value;
      navigate(panes, i);
    }
  });
  // Clicking into a frame does not bubble; focus moving into it marks that pane active.
  window.addEventListener('blur', () => {
    setTimeout(() => {
      const frame = document.activeElement;
      if (frame?.tagName !== 'IFRAME') return;
      const i = Number(frame.closest('[data-pane]')?.dataset.pane);
      if (state.panes.length > 1 && i !== state.active) { state.active = i; sync(); }
    });
  });
  const onKey = (e) => {
    if (lightbox.isOpen || e.metaKey || e.ctrlKey || e.altKey || e.target.matches('input, select, textarea')) return;
    const k = e.key.toLowerCase();
    if (k === 'arrowleft') cycle(-1);
    else if (k === 'arrowright') cycle(1);
    else if (k === 'g') toggleGuide();
    else if (k === 's' && t.results.length > 1) toggleSplit();
    else if (k === 'f') fullscreen();
    else if (k === 'r') reload();
    else if (k === 'escape' && state.guide && !wide()) toggleGuide();
    else return;
    e.preventDefault();
  };
  document.addEventListener('keydown', onKey);

  return {
    task: t,
    update,
    destroy() {
      document.removeEventListener('keydown', onKey);
      document.body.classList.remove('is-viewer');
      if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
    },
  };
}

// ---- router ---------------------------------------------------------------------------
function notFound(msg) {
  root.innerHTML = `${header()}<main class="wrap empty-page"><h1>找不到页面</h1><p>${esc(msg)}</p><a class="btn primary" href="#/">回到首页</a></main>`;
}

function route() {
  const parts = location.hash.replace(/^#\/?/, '').split('#')[0].split('/').filter(Boolean).map(decodeURIComponent);
  const [taskId, a, vs, b] = parts;
  const t = DATA.tasks.find((x) => x.id === taskId);
  const inViewer = t && a;

  if (viewer && (!inViewer || viewer.task !== t)) {
    viewer.destroy();
    viewer = null;
  }
  root.onclick = null;
  lightbox.close();

  if (!taskId) {
    renderHome();
    return scrollTo(0, 0);
  }
  if (!t) return notFound(`没有 id 为「${taskId}」的题目。`);
  if (!inViewer) {
    renderTask(t);
    const anchor = location.hash.split('#')[2];
    if (anchor) requestAnimationFrame(() => $(`#${CSS.escape(anchor)}`)?.scrollIntoView());
    else scrollTo(0, 0);
    return;
  }
  const ids = [a, vs === 'vs' ? b : null].filter(Boolean);
  const valid = ids.filter((id, i) => t.results.some((r) => r.id === id) && ids.indexOf(id) === i);
  if (!valid.length) return notFound(`「${t.title}」下没有 id 为「${a}」的结果。`);
  viewer ??= createViewer(t);
  viewer.update(valid);
}

try {
  const res = await fetch('data.json', { cache: 'no-cache' });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  DATA = await res.json();
  MODELS = new Map(DATA.models.map((m) => [m.id, m]));
  addEventListener('hashchange', route);
  route();
} catch (err) {
  root.innerHTML = `<main class="wrap empty-page"><h1>数据加载失败</h1><p>${esc(err.message)}</p><p>本地查看请先运行 <code>npm run build</code>，再用 <code>npm run preview</code> 打开。</p></main>`;
}
