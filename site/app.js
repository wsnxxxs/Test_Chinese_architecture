// 同题异答 — single-page gallery. Routes (hash based, so it works on any static host):
//   #/                        home: every task and every model
//   #/<task>                  task: results, screenshots, prompt
//   #/<task>/<result>         viewer: the live page in a frame with a guide drawer
//   #/<task>/<a>/vs/<b>       viewer, two results side by side
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const store = {
  get(key) { try { return localStorage.getItem(key); } catch { return null; } },
  set(key, value) { try { localStorage.setItem(key, value); } catch { /* private mode */ } },
};
const reducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

const root = $('#app');
let DATA;
let MODELS;

const pad = (n) => String(n).padStart(2, '0');
const modelOf = (r) => MODELS.get(r.model) ?? { name: r.model, vendor: '' };
const vendorOf = (r) => modelOf(r).vendor || '其他';
const label = (r) => (r.effort ? `${modelOf(r).name} · ${r.effort}` : modelOf(r).name);
const byName = (a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' });
const sortModes = { added: '加入时间（最新在前）', vendor: '模型厂商（A–Z）', name: '模型名字（A–Z）' };
let resultSort = Object.hasOwn(sortModes, store.get('result-sort')) ? store.get('result-sort') : 'added';
const sortControl = () => `<label class="result-sort">排序<select data-result-sort>${Object.entries(sortModes).map(([value, text]) => `<option value="${value}"${value === resultSort ? ' selected' : ''}>${text}</option>`).join('')}</select></label>`;
function sortedResults(t) {
  return [...t.results].sort((a, b) => {
    if (resultSort === 'vendor') return byName(vendorOf(a), vendorOf(b)) || byName(label(a), label(b));
    if (resultSort === 'name') return byName(label(a), label(b));
    return (Date.parse(b.addedAt) || 0) - (Date.parse(a.addedAt) || 0);
  });
}
function setResultSort(value) {
  resultSort = value;
  store.set('result-sort', value);
}
// Cover: the first uniform capture (task condition order), else the author's first screenshot.
const cover = (r) => Object.values(r.captures)[0] ?? r.gallery[0]?.src ?? '';
const taskHref = (t) => `#/${t.id}`;
const viewHref = (t, a, b) => `#/${t.id}/${a}${b ? `/vs/${b}` : ''}`;
const hasExhibition = (t) => t.id === 'chinese-architecture';
const sandtableHref = (t, ids = []) => `#/${t.id}/sandtable${ids.length ? `/${ids.join(',')}` : ''}`;

// ---- icons & marks --------------------------------------------------------------------
const ICONS = {
  sun: '<circle cx="12" cy="12" r="3.6"/><path d="M12 3v1.8M12 19.2V21M5.64 5.64l1.27 1.27M17.09 17.09l1.27 1.27M3 12h1.8M19.2 12H21M5.64 18.36l1.27-1.27M17.09 6.91l1.27-1.27"/>',
  moon: '<path d="M19.5 14.6A7.5 7.5 0 0 1 9.4 4.5a7.5 7.5 0 1 0 10.1 10.1Z"/>',
  arrow: '<path d="M7.5 16.5 16.5 7.5M9 7.5h7.5V15"/>',
  right: '<path d="M5 12h14M13.5 6.5 19 12l-5.5 5.5"/>',
  prev: '<path d="m14.5 18-6-6 6-6"/>',
  next: '<path d="m9.5 18 6-6-6-6"/>',
  close: '<path d="M17.5 6.5l-11 11M6.5 6.5l11 11"/>',
  guide: '<circle cx="12" cy="12" r="8.5"/><path d="M12 11v5M12 7.9v.01"/>',
  split: '<rect x="3.5" y="5" width="17" height="14" rx="2"/><path d="M12 5v14"/>',
  full: '<path d="M4.5 9V4.5H9M19.5 9V4.5H15M4.5 15v4.5H9M19.5 15v4.5H15"/>',
  plus: '<path d="M12 6v12M6 12h12"/>',
  check: '<path d="m6 12.5 4 4 8-9"/>',
  image: '<rect x="3.5" y="5" width="17" height="14" rx="2"/><circle cx="9" cy="10" r="1.5"/><path d="m20.5 15.5-4.5-4.5-8.5 8"/>',
  code: '<path d="m8.5 8-4 4 4 4M15.5 8l4 4-4 4"/>',
  reload: '<path d="M19.5 12a7.5 7.5 0 1 1-2.2-5.3M19.5 4.5v4.2h-4.2"/>',
};
const icon = (name) => `<svg class="i" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${ICONS[name]}</svg>`;
// Same mark as assets/logo.svg, drawn with theme colours: a solid line (同) over a broken one (异).
const LOGO = '<svg class="logo" viewBox="0 0 32 32" aria-hidden="true"><rect class="logo-bg" width="32" height="32" rx="7"/><rect class="logo-fg" x="7" y="10" width="18" height="4"/><rect class="logo-fg" x="7" y="18" width="7.6" height="4"/><rect class="logo-ac" x="17.4" y="18" width="7.6" height="4"/></svg>';

const ext = (href, text, cls = 'btn') => `<a class="${cls}" href="${esc(href)}" target="_blank" rel="noopener">${text}${icon('arrow')}</a>`;
const brandMark = (m, cls = 'brand-mark') => (m.logo
  ? `<span class="${cls}"><img src="${esc(m.logo)}" alt="" loading="lazy" decoding="async"></span>`
  : `<span class="${cls}" aria-hidden="true">${esc((m.name ?? '?').slice(0, 1))}</span>`);

// ---- theme ----------------------------------------------------------------------------
const THEME_COLOR = { light: '#f5f4f0', dark: '#121211' };
const currentTheme = () => (document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
function syncThemeUi() {
  const dark = currentTheme() === 'dark';
  $('meta[name="theme-color"]')?.setAttribute('content', THEME_COLOR[currentTheme()]);
  $$('[data-theme-toggle]').forEach((b) => {
    b.setAttribute('aria-pressed', String(dark));
    b.title = dark ? '切换到浅色模式' : '切换到深色模式';
  });
}
function setTheme(next) {
  store.set('theme', next);
  const apply = () => { document.documentElement.dataset.theme = next; syncThemeUi(); };
  if (document.startViewTransition && !reducedMotion()) document.startViewTransition(apply);
  else apply();
}
const toggleTheme = () => setTheme(currentTheme() === 'dark' ? 'light' : 'dark');
const themeButton = (cls = 'icon-btn') => `<button class="${cls} theme-toggle" data-theme-toggle aria-label="深色模式" aria-pressed="${currentTheme() === 'dark'}">${icon('moon')}${icon('sun')}</button>`;
// With no saved choice the page keeps following the system setting.
matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (store.get('theme')) return;
  document.documentElement.dataset.theme = e.matches ? 'dark' : 'light';
  syncThemeUi();
});
document.addEventListener('click', (e) => { if (e.target.closest('[data-theme-toggle]')) toggleTheme(); });

// Images fade in once decoded; `load` does not bubble, so listen in the capture phase.
document.addEventListener('load', (e) => { if (e.target.tagName === 'IMG') e.target.classList.add('is-loaded'); }, true);
document.addEventListener('error', (e) => { if (e.target.tagName === 'IMG') e.target.classList.add('is-loaded', 'is-broken'); }, true);
const settleImages = () => $$('img', root).forEach((im) => { if (im.complete) im.classList.add('is-loaded'); });

// ---- shell ----------------------------------------------------------------------------
function header(crumbs = []) {
  const trail = crumbs.map((c) => `<span class="sep" aria-hidden="true">/</span>${c.href ? `<a href="${c.href}">${esc(c.text)}</a>` : `<span aria-current="page">${esc(c.text)}</span>`}`).join('');
  return `<header class="topbar"><div class="wrap topbar-in">
    <a class="brand" href="#/" aria-label="${esc(DATA.title)} · 首页">${LOGO}<span class="wordmark">${esc(DATA.title)}</span><span class="brand-sub">${esc(DATA.subtitle)}</span></a>
    <nav class="crumbs" aria-label="位置">${trail}</nav>
    <div class="topbar-tools">
      ${ext(DATA.repo, 'GitHub', 'topbar-link')}
      ${themeButton()}
    </div>
  </div></header>`;
}
function galleryStageHeader(t, mode) {
  const current = mode === 'sandtable' ? '三维沙盘' : '原作展厅';
  const modes = [['exhibition', '原作展厅'], ['sandtable', '三维沙盘']];
  return `<header class="topbar sandbar"><div class="wrap topbar-in sandbar-in">
    <a class="brand" href="#/" aria-label="${esc(DATA.title)} · 首页">${LOGO}<span class="wordmark">${esc(DATA.title)}</span></a>
    <a class="sand-task-back" href="${taskHref(t)}" aria-label="返回作品列表">${icon('prev')}</a>
    <nav class="crumbs sand-crumbs" aria-label="位置"><span class="sep" aria-hidden="true">/</span><a href="${taskHref(t)}">${esc(t.title)}</a><span class="sep" aria-hidden="true">/</span><span aria-current="page">${current}</span></nav>
    <nav class="display-modes" aria-label="展示模式">${modes.map(([id, name]) => `<a ${id === mode ? 'aria-current="page"' : 'data-switch-mode'} href="#/${t.id}/${id}">${name}</a>`).join('')}</nav>
    <div class="sandbar-tools"><span class="sand-count">已选择 <b data-count>0</b> 件</span><button class="btn sm" data-action="panel" aria-expanded="true" aria-controls="${mode === 'sandtable' ? 'sand-library' : 'exhibition-library'}">选择模型</button>${themeButton()}</div>
  </div></header>`;
}
const footer = () => `<footer class="footer"><div class="wrap footer-in">
  <p class="footer-brand">${LOGO}<span>${esc(DATA.title)}</span><span class="muted">前端作品档案</span></p>
  <p class="footer-links"><a href="${esc(DATA.repo)}" target="_blank" rel="noopener">项目仓库</a><a href="${esc(DATA.repo)}#readme" target="_blank" rel="noopener">参与贡献</a></p>
</div></footer>`;

function img(src, alt, cls = '', eager = false) {
  return src
    ? `<img class="${cls}" src="${esc(src)}" alt="${esc(alt)}"${eager ? '' : ' loading="lazy"'} decoding="async" />`
    : `<div class="${cls} img-empty">暂无截图</div>`;
}

// ---- home -----------------------------------------------------------------------------
function renderHome() {
  const results = DATA.tasks.flatMap((t) => t.results.map((r) => ({ t, r })));
  const vendorCount = new Set(DATA.models.map((m) => m.vendor || '其他')).size;

  const taskCards = DATA.tasks.map((t, ti) => {
    const shown = t.results.filter((r) => cover(r)).slice(0, 5);
    const vendors = new Set(t.results.map(vendorOf)).size;
    const [a, b] = t.results;
    return `<article class="task-card">
      <a class="mosaic n${shown.length}" href="${taskHref(t)}" aria-label="查看「${esc(t.title)}」的全部作品" tabindex="-1">
        ${shown.map((r, i) => `<figure>${img(cover(r), label(r), '', i === 0)}<figcaption>${esc(label(r))}</figcaption></figure>`).join('')}
      </a>
      <div class="task-body">
        <p class="kicker"><span class="num">No.${pad(ti + 1)}</span><span>${esc(t.date ?? '')}</span></p>
        <h3><a href="${taskHref(t)}">${esc(t.title)}</a></h3>
        <p class="summary">${esc(t.summary)}</p>
        <ul class="tags">${t.tags.map((g) => `<li>${esc(g)}</li>`).join('')}</ul>
        <dl class="figures">
          <div><dt>作品</dt><dd>${t.results.length}</dd></div>
          <div><dt>模型</dt><dd>${new Set(t.results.map((r) => r.model)).size}</dd></div>
          <div><dt>厂商</dt><dd>${vendors}</dd></div>
        </dl>
        <div class="actions">
          <a class="btn primary" href="${taskHref(t)}">浏览作品${icon('right')}</a>
          ${hasExhibition(t) ? `<a class="btn" href="${sandtableHref(t)}">${icon('full')}三维沙盘</a>` : b ? `<a class="btn" href="${viewHref(t, a.id, b.id)}">${icon('split')}并排对比</a>` : ''}
        </div>
      </div>
    </article>`;
  }).join('');

  const modelsByVendor = new Map();
  for (const model of DATA.models) {
    const vendor = model.vendor || '其他';
    if (!modelsByVendor.has(vendor)) modelsByVendor.set(vendor, []);
    modelsByVendor.get(vendor).push(model);
  }
  const rows = [...modelsByVendor].sort(([a], [b]) => byName(a, b)).map(([vendor, models]) => {
    const ids = new Set(models.map((m) => m.id));
    const works = results.filter(({ r }) => ids.has(r.model)).length;
    const items = models.map((m) => {
      const mine = results.filter(({ r }) => r.model === m.id);
      const mark = m.logo
        ? `<a class="brand-mark" href="${esc(m.brandUrl)}" target="_blank" rel="noopener" aria-label="${esc(m.brandName)} 官网" title="${esc(m.brandName)} 官网"><img src="${esc(m.logo)}" alt="" loading="lazy" decoding="async"></a>`
        : brandMark(m);
      return `<li class="dir-model">${mark}
        <div class="dir-model-body">
          <h4>${esc(m.name)}${m.vendorNote ? `<span class="note">${esc(m.vendorNote)}</span>` : ''}</h4>
          ${mine.length ? `<ul class="dir-works">${mine.map(({ t, r }) => `<li><a href="${viewHref(t, r.id)}" title="${esc(t.title)}">${esc(r.title)}${r.effort ? `<span class="badge">${esc(r.effort)}</span>` : ''}</a></li>`).join('')}</ul>` : '<p class="muted">暂无作品</p>'}
        </div>
      </li>`;
    }).join('');
    return `<section class="dir-row">
      <header class="dir-vendor"><h3>${esc(vendor)}</h3><p>${models.length} 个模型 · ${works} 件作品</p></header>
      <ul class="dir-models">${items}</ul>
    </section>`;
  }).join('');

  root.innerHTML = `${header()}
  <main class="page">
    <section class="hero wrap">
      <p class="eyebrow"><span class="eyebrow-mark" aria-hidden="true"></span>Same prompt, different answers</p>
      <h1>同题，异答<span class="stop">。</span></h1>
      <div class="hero-foot">
        <p class="lead">${esc(DATA.description)}</p>
        <dl class="stats">
          <div><dt>题目</dt><dd>${pad(DATA.tasks.length)}</dd></div>
          <div><dt>厂商</dt><dd>${pad(vendorCount)}</dd></div>
          <div><dt>模型</dt><dd>${pad(DATA.models.length)}</dd></div>
          <div><dt>作品</dt><dd>${pad(results.length)}</dd></div>
        </dl>
      </div>
    </section>
    <section class="block wrap" aria-labelledby="h-tasks">
      <div class="block-head"><h2 id="h-tasks">题目</h2><p>按发布时间排列 · 每道题都可浏览作品与对照截图</p></div>
      <div class="task-list">${taskCards || '<p class="muted">还没有题目。</p>'}</div>
    </section>
    <section class="block wrap" aria-labelledby="h-models">
      <details class="directory" open>
        <summary class="block-head"><h2 id="h-models">模型索引</h2><p>${modelsByVendor.size} 家厂商 · ${DATA.models.length} 个模型</p><span class="dir-toggle" aria-hidden="true"><span class="when-open">收起</span><span class="when-closed">展开</span>${icon('next')}</span></summary>
        <div class="dir-rows">${rows}</div>
      </details>
    </section>
  </main>${footer()}`;
  document.title = `${DATA.title} · ${DATA.subtitle}`;
}

// ---- task -----------------------------------------------------------------------------
const taskState = { task: null, cond: null, vendor: '', picks: [] };
let resultPreviews = null;
const panels = ['results', 'shots', 'prompt'];
function activatePanel(name, updateHash = true) {
  const target = panels.includes(name) && $(`[data-panel="${name}"]`) ? name : 'results';
  $$('[data-panel]').forEach((el) => { el.hidden = el.dataset.panel !== target; });
  $$('[data-go]').forEach((el) => el.setAttribute('aria-pressed', String(el.dataset.go === target)));
  resultPreviews?.setPaused(target !== 'results');
  if (updateHash) {
    const base = `#${location.hash.split('#')[1]}`;
    history.replaceState(null, '', target === 'results' ? base : `${base}#${target}`);
  }
}

function shotGrid(t) {
  const cond = t.conditions.find((c) => c.id === taskState.cond) ?? t.conditions[0];
  if (!cond) return '';
  const shots = t.results.filter((r) => r.captures[cond.id]);
  if (!shots.length) return '<p class="muted empty-note">该条件下暂无截图。</p>';
  return `<div class="shot-grid${cond.mobile ? ' phones' : ''}">${shots.map((r) => {
    const src = r.captures[cond.id];
    return `<figure class="shot">
      <button class="shot-img" data-shot="${esc(r.id)}" aria-label="放大查看 ${esc(label(r))} · ${esc(cond.label)}">${img(src, `${label(r)} · ${cond.label}`)}</button>
      <figcaption><b>${esc(r.title)}</b><span>${esc(label(r))}</span><a href="${viewHref(t, r.id)}">在线预览</a></figcaption>
    </figure>`;
  }).join('')}</div>`;
}

function renderTask(t) {
  if (taskState.task !== t.id) Object.assign(taskState, { task: t.id, vendor: '', picks: [] });
  taskState.cond = t.conditions.some((c) => c.id === taskState.cond) ? taskState.cond : t.conditions[0]?.id;
  const vendorCounts = new Map();
  for (const r of t.results) vendorCounts.set(vendorOf(r), (vendorCounts.get(vendorOf(r)) ?? 0) + 1);
  const vendors = [...vendorCounts.keys()].sort(byName);
  if (!vendors.includes(taskState.vendor)) taskState.vendor = '';
  taskState.picks = taskState.picks.filter((id) => t.results.some((r) => r.id === id));
  const hasCaptures = t.results.some((r) => Object.keys(r.captures).length);
  const captureNotes = t.results.filter((r) => r.captureNote).map((r) => `${esc(r.title)}：${esc(r.captureNote)}`);

  const cards = sortedResults(t).map((r) => {
    const m = modelOf(r);
    return `<article class="result" data-vendor="${esc(vendorOf(r))}" data-id="${esc(r.id)}">
      <div class="result-media">
        <a href="${viewHref(t, r.id)}" aria-label="在线预览：${esc(r.title)}，${esc(label(r))}">${img(cover(r), r.title)}<span class="play">${icon('arrow')}在线预览</span></a>
        ${t.results.length > 1 ? `<button class="pick" data-pick="${esc(r.id)}" aria-pressed="false" aria-label="加入对比：${esc(r.title)}"><span class="pick-box">${icon('plus')}${icon('check')}</span><span class="pick-text">对比</span></button>` : ''}
      </div>
      <div class="result-body">
        <p class="result-model">${brandMark(m, 'brand-mark sm')}<b>${esc(m.name)}</b>${r.effort ? `<span class="badge">${esc(r.effort)}</span>` : ''}</p>
        <h3><a href="${viewHref(t, r.id)}">${esc(r.title)}</a></h3>
        <p class="summary">${esc(r.summary)}</p>
        <div class="result-foot">
          ${r.gallery.length ? `<button class="text-action" data-gallery="${esc(r.id)}">${icon('image')}截图 ${r.gallery.length}</button>` : ''}
          ${ext(r.source, `${icon('code')}源码`, 'text-action')}
        </div>
      </div>
    </article>`;
  }).join('');

  root.innerHTML = `${header([{ text: t.title }])}
  <main class="page">
    <section class="task-hero wrap">
      <p class="kicker"><span class="num">No.${pad(DATA.tasks.indexOf(t) + 1)}</span><span>${esc(t.date ?? '')}</span></p>
      <h1>${esc(t.title)}</h1>
      <p class="lead">${esc(t.summary)}</p>
      <div class="task-hero-foot">
        <ul class="tags">${t.tags.map((g) => `<li>${esc(g)}</li>`).join('')}</ul>
        <p class="task-count">${t.results.length} 件作品 · ${new Set(t.results.map((r) => r.model)).size} 个模型 · ${vendors.length} 家厂商</p>
      </div>
    </section>
    <nav class="subnav" aria-label="本页"><div class="wrap subnav-in">
      <button data-go="results" aria-pressed="true">作品<span class="count">${t.results.length}</span></button>
      ${t.conditions.length ? '<button data-go="shots" aria-pressed="false">截图对照</button>' : ''}
      <button data-go="prompt" aria-pressed="false">提示词</button>
      ${hasExhibition(t) ? `<a class="sand-entry" href="${sandtableHref(t)}">${icon('full')}三维沙盘 <span>自由摆放 · 统一视角</span>${icon('arrow')}</a>` : ''}
    </div></nav>

    <section id="results" data-panel="results" class="block wrap">
      <div class="block-head"><h2 id="filter-heading">全部作品</h2><p id="filter-count">${t.results.length} 件作品</p>
        ${sortControl()}
        ${t.results.length > 1 ? `<p class="block-hint">${hasExhibition(t) ? '选中作品加入三维沙盘，或选两件并排对比' : '选中两件作品即可并排对比'}</p>` : ''}</div>
      <div class="chips" role="group" aria-label="按模型厂商筛选">
        <button class="chip" data-vendor="" aria-pressed="true">全部<span>${t.results.length}</span></button>
        ${vendors.map((v) => `<button class="chip" data-vendor="${esc(v)}" aria-pressed="false">${esc(v)}<span>${vendorCounts.get(v)}</span></button>`).join('')}
      </div>
      <div class="result-grid">${cards}</div>
      <p class="muted filter-empty" hidden>该厂商暂无作品。</p>
    </section>

    ${t.conditions.length ? `<section id="shots" data-panel="shots" class="block wrap" hidden>
      <div class="block-head"><h2>截图对照</h2><p>切换拍摄条件；点开大图后，←/→ 换作品，↑/↓ 换条件。</p></div>
      <div class="seg" role="group" aria-label="截图条件">${t.conditions.map((c) => `<button data-cond="${esc(c.id)}" aria-pressed="${c.id === taskState.cond}">${esc(c.label)}</button>`).join('')}</div>
      <p class="cond-note" id="cond-note">${esc(t.conditions.find((c) => c.id === taskState.cond)?.note ?? '')}</p>
      <div id="shot-grid">${hasCaptures ? shotGrid(t) : '<p class="muted">暂无截图。</p>'}</div>
      ${captureNotes.length ? `<p class="fine">${captureNotes.join('<br />')}</p>` : ''}
      <p class="fine">自动截图可能使用软件渲染；实际光影与帧率请以在线预览为准。</p>
    </section>` : ''}

    <section id="prompt" data-panel="prompt" class="block wrap" hidden>
      <div class="block-head"><h2>提示词</h2><p>所有作品使用的原始提示词。</p></div>
      <div class="prompt">
        <div class="prompt-bar"><span>${esc(t.promptUrl.split('/').pop())}</span>
          <span class="prompt-tools"><button class="btn sm ghost" data-copy>复制</button>${ext(t.promptUrl, 'GitHub', 'btn sm ghost')}</span></div>
        <pre>${esc(t.prompt)}</pre>
      </div>
    </section>
  </main>${footer()}
  <div class="tray" role="region" aria-label="对比栏" hidden></div>`;
  document.title = `${t.title} · ${DATA.title}`;
  filterResults(t);
  syncPicks(t);

  root.onchange = (e) => {
    if (!e.target.matches('[data-result-sort]')) return;
    setResultSort(e.target.value);
    const cards = new Map($$('.result').map((el) => [el.dataset.id, el]));
    $('.result-grid').append(...sortedResults(t).map((r) => cards.get(r.id)));
    resultPreviews?.refresh();
  };
  root.onclick = (e) => {
    const go = e.target.closest('[data-go]');
    if (go) {
      activatePanel(go.dataset.go);
      const nav = $('.subnav');
      if (nav && scrollY > nav.offsetTop) scrollTo({ top: nav.offsetTop - $('.topbar').offsetHeight + 1 });
    }
    const chip = e.target.closest('[data-vendor]');
    if (chip && chip.matches('.chip')) { taskState.vendor = chip.dataset.vendor; filterResults(t); }
    const pick = e.target.closest('[data-pick], [data-unpick]');
    if (pick) togglePick(t, pick.dataset.pick ?? pick.dataset.unpick);
    if (e.target.closest('[data-clear-picks]')) { taskState.picks = []; syncPicks(t); }
    const cond = e.target.closest('[data-cond]');
    if (cond) {
      taskState.cond = cond.dataset.cond;
      $$('[data-cond]').forEach((el) => el.setAttribute('aria-pressed', String(el === cond)));
      $('#cond-note').textContent = t.conditions.find((c) => c.id === taskState.cond)?.note ?? '';
      if (hasCaptures) { $('#shot-grid').innerHTML = shotGrid(t); settleImages(); }
    }
    const shot = e.target.closest('[data-shot]');
    if (shot) openCompareLightbox(t, shot.dataset.shot);
    const gal = e.target.closest('[data-gallery]');
    if (gal) {
      const r = t.results.find((x) => x.id === gal.dataset.gallery);
      lightbox.open(r.gallery.map((g) => ({ src: g.src, title: g.caption || r.title, sub: `${r.title} · ${label(r)} · 作者截图` })), 0);
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

function filterResults(t) {
  const shown = t.results.filter((r) => !taskState.vendor || vendorOf(r) === taskState.vendor);
  $$('.result').forEach((el) => { el.hidden = Boolean(taskState.vendor && el.dataset.vendor !== taskState.vendor); });
  $$('.chip[data-vendor]').forEach((el) => el.setAttribute('aria-pressed', String(el.dataset.vendor === taskState.vendor)));
  $('#filter-heading').textContent = taskState.vendor || '全部作品';
  $('#filter-count').textContent = `${shown.length} 件作品`;
  $('.filter-empty').hidden = shown.length > 0;
  resultPreviews?.refresh();
}

// Architecture supports a multi-result exhibition; other tasks keep two panes.
function togglePick(t, id) {
  const picks = taskState.picks;
  if (picks.includes(id)) taskState.picks = picks.filter((x) => x !== id);
  else taskState.picks = hasExhibition(t) ? [...picks, id] : [...picks, id].slice(-2);
  syncPicks(t);
}

function syncPicks(t) {
  const picks = taskState.picks;
  $$('[data-pick]').forEach((el) => {
    const on = picks.includes(el.dataset.pick);
    el.setAttribute('aria-pressed', String(on));
    el.closest('.result')?.classList.toggle('picked', on);
    $('.pick-text', el).textContent = on ? `已选 ${picks.indexOf(el.dataset.pick) + 1}` : '对比';
  });
  const tray = $('.tray');
  if (!tray) return;
  tray.hidden = !picks.length;
  document.body.classList.toggle('has-tray', picks.length > 0);
  if (!picks.length) return;
  const chosen = picks.map((id) => t.results.find((r) => r.id === id));
  const slot = (r, i) => (r
    ? `<li class="slot"><span class="slot-thumb">${img(cover(r), '', '', true)}</span><span class="slot-text"><b>${esc(r.title)}</b><small>${esc(label(r))}</small></span><button class="slot-x" data-unpick="${esc(r.id)}" aria-label="移出对比：${esc(r.title)}">${icon('close')}</button></li>`
    : `<li class="slot empty"><span class="slot-thumb">${pad(i + 1)}</span><span class="slot-text"><b>再选一件</b><small>点击作品上的「对比」</small></span></li>`);
  tray.innerHTML = `<ol class="slots">${slot(chosen[0], 0)}<li class="vs" aria-hidden="true">${chosen.length > 2 ? `+${chosen.length - 1}` : 'vs'}</li>${chosen.length <= 2 ? slot(chosen[1], 1) : `<li class="slot"><span class="slot-text"><b>共 ${chosen.length} 件作品</b><small>在同一画布上查看原作</small></span></li>`}</ol>
    <div class="tray-actions">
      <button class="icon-btn" data-clear-picks aria-label="清空对比" title="清空">${icon('close')}</button>
      ${chosen.length === 2 ? `<a class="btn${hasExhibition(t) ? '' : ' primary'}" href="${viewHref(t, chosen[0].id, chosen[1].id)}">并排对比${icon('right')}</a>` : ''}
      ${hasExhibition(t) ? `<a class="btn primary" href="${sandtableHref(t, picks)}">进入沙盘${icon('right')}</a>` : chosen.length < 2 ? `<span class="btn primary is-disabled" aria-disabled="true">并排对比${icon('right')}</span>` : ''}
    </div>`;
  settleImages();
}

function openCompareLightbox(t, resultId) {
  const items = (condId) => {
    const cond = t.conditions.find((c) => c.id === condId);
    return t.results.filter((r) => r.captures[condId]).map((r) => ({
      id: r.id, src: r.captures[condId], title: `${r.title} · ${cond.label}`, sub: `${label(r)} · ←/→ 换作品，↑/↓ 换条件`,
    }));
  };
  const current = t.results.find((r) => r.id === resultId);
  const list = items(taskState.cond);
  lightbox.open(list, Math.max(0, list.findIndex((x) => x.id === current.id)), (dir, item) => {
    const withShots = t.conditions.filter((c) => t.results.some((r) => r.captures[c.id]));
    let i = withShots.findIndex((c) => c.id === taskState.cond);
    i = (i + dir + withShots.length) % withShots.length;
    taskState.cond = withShots[i].id;
    $$('[data-cond]').forEach((el) => el.setAttribute('aria-pressed', String(el.dataset.cond === taskState.cond)));
    const note = $('#cond-note');
    if (note) note.textContent = withShots[i].note ?? '';
    const grid = $('#shot-grid');
    if (grid) { grid.innerHTML = shotGrid(t); settleImages(); }
    const next = items(taskState.cond);
    return { items: next, index: Math.max(0, next.findIndex((x) => x.id === item.id)) };
  });
}

// ---- lightbox -------------------------------------------------------------------------
const lightbox = (() => {
  const el = $('#lightbox');
  const image = $('.lb-img', el);
  const caption = $('.lb-caption', el);
  const count = $('.lb-count', el);
  $('.lb-close', el).innerHTML = icon('close');
  $('.lb-prev', el).innerHTML = icon('prev');
  $('.lb-next', el).innerHTML = icon('next');
  let items = [];
  let index = 0;
  let vertical = null;
  let lastFocus = null;
  const show = () => {
    const it = items[index];
    image.classList.remove('is-loaded');
    image.src = it.src;
    image.alt = it.title;
    if (image.complete) image.classList.add('is-loaded');
    caption.innerHTML = `<b>${esc(it.title)}</b><span>${esc(it.sub ?? '')}</span>`;
    count.textContent = items.length > 1 ? `${index + 1} / ${items.length}` : '';
    el.classList.toggle('single', items.length < 2);
  };
  const step = (d) => { index = (index + d + items.length) % items.length; show(); };
  const close = () => {
    if (el.hidden) return;
    el.hidden = true;
    document.body.classList.remove('lb-open');
    resultPreviews?.setPaused(Boolean($('#results')?.hidden));
    lastFocus?.focus();
  };
  el.addEventListener('click', (e) => {
    const act = e.target.closest('[data-lb]')?.dataset.lb;
    if (act === 'prev') step(-1);
    else if (act === 'next') step(1);
    else if (act === 'close' || e.target === el || e.target.matches('.lb-figure')) close();
  });
  document.addEventListener('keydown', (e) => {
    if (el.hidden) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowLeft') step(-1);
    else if (e.key === 'ArrowRight') step(1);
    else if (vertical && (e.key === 'ArrowUp' || e.key === 'ArrowDown')) {
      ({ items, index } = vertical(e.key === 'ArrowDown' ? 1 : -1, items[index]));
      show();
    } else if (e.key === 'Tab') {
      // Keep focus inside the dialog.
      const focusable = $$('button:not([hidden])', el).filter((b) => b.offsetParent);
      const i = focusable.indexOf(document.activeElement);
      const next = focusable[(i + (e.shiftKey ? -1 : 1) + focusable.length) % focusable.length];
      next?.focus();
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
      resultPreviews?.setPaused(true);
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
  const state = { panes: [], queries: [], active: 0, guide: store.get('guide') === '1' && wide() };
  const byId = (id) => t.results.find((r) => r.id === id);
  const options = () => sortedResults(t).map((r) => `<option value="${esc(r.id)}">${esc(r.title)} · ${esc(label(r))}</option>`).join('');
  const many = t.results.length > 1;
  document.title = `在线预览 · ${t.title}`;

  root.innerHTML = `<div class="viewer">
    <header class="vbar">
      <a class="vback" href="${taskHref(t)}" title="返回「${esc(t.title)}」">${icon('prev')}<span class="vback-text">${esc(t.title)}</span></a>
      <div class="vnav">
        ${many ? `<button class="vtool icon-only" data-v="prev" aria-label="上一件作品" title="上一件（←）">${icon('prev')}</button>` : ''}
        <span class="vselect-wrap"><span class="vmark" aria-hidden="true"></span><select class="vselect" aria-label="选择预览作品">${options()}</select></span>
        ${many ? `<button class="vtool icon-only" data-v="next" aria-label="下一件作品" title="下一件（→）">${icon('next')}</button>` : ''}
      </div>
      <span class="split-context">并排对比 · 点击一栏以选中</span>
      <div class="vtools">
        ${hasExhibition(t) ? `<button class="vtool" data-v="exhibition" title="将当前作品加入三维沙盘">${icon('full')}<span class="vtool-text">沙盘</span></button>` : ''}
        <button class="vtool" data-v="guide" aria-label="操作指南" aria-pressed="false" title="操作指南（G）">${icon('guide')}<span class="vtool-text">指南</span></button>
        ${many ? `<button class="vtool" data-v="split" aria-label="并排对比" aria-pressed="false" title="并排对比（S）">${icon('split')}<span class="vtool-text">并排</span></button>` : ''}
        <a class="vtool" data-v="open" aria-label="在新窗口打开独立页面" target="_blank" rel="noopener" title="在新窗口打开独立页面">${icon('arrow')}<span class="vtool-text">新窗口</span></a>
        <button class="vtool" data-v="full" aria-label="全屏" title="全屏（F）">${icon('full')}<span class="vtool-text">全屏</span></button>
        <span class="vdivider" aria-hidden="true"></span>
        ${themeButton('vtool icon-only')}
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
        <span class="pane-tag">${i === 0 ? 'A' : 'B'}</span>
        <select data-pane-pick="${i}" aria-label="${i === 0 ? '左' : '右'}栏的作品">${options()}</select>
        <button class="pane-close" data-close="${i}" title="关闭这一栏" aria-label="关闭这一栏">${icon('close')}</button>
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
      body.innerHTML = `<div class="loader static"><b>${esc(r.title)}</b><span>该作品尚未构建，无法在线预览。</span></div>`;
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
      setTimeout(() => loader.classList.add('gone'), 500);
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
        <div><p class="eyebrow">${split ? `${state.active === 0 ? 'A 栏' : 'B 栏'} · ` : ''}操作指南</p><h2>${esc(r.title)}</h2><p class="guide-model">${esc(label(r))}</p></div>
        <button class="icon-btn" data-v="guide" aria-label="收起指南">${icon('close')}</button>
      </div>
      <p class="guide-summary">${esc(r.summary)}</p>
      ${g.presets?.length ? `<div class="guide-block"><h3>快速跳转</h3>
        <div class="presets">${g.presets.map((p) => `<button class="chip${state.queries[state.active] === p.query ? ' on' : ''}" data-preset="${esc(p.query)}">${esc(p.label)}</button>`).join('')}
        <button class="chip ghost" data-preset="">默认</button></div></div>` : ''}
      ${(g.sections ?? []).map((s) => `<div class="guide-block"><h3>${esc(s.title)}</h3><dl class="keys">${s.items.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl></div>`).join('')}
      ${g.tips?.length ? `<div class="guide-block"><h3>看点</h3><ul class="tips">${g.tips.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></div>` : ''}
      <div class="guide-block"><h3>本站快捷键</h3><dl class="keys">
        <div><dt>← / →</dt><dd>切换作品</dd></div>
        <div><dt>G · S · F</dt><dd>指南 · 并排 · 全屏</dd></div>
        <div><dt>R</dt><dd>重新载入当前栏</dd></div></dl>
        <p class="fine">点击场景后键盘会交给场景本身；点一下顶栏即可恢复本站快捷键。</p></div>
      <div class="guide-links">
        ${ext(r.source, '源码', 'btn sm')}
        ${r.readme ? ext(r.readme, '项目说明', 'btn sm') : ''}
        <a class="btn sm" href="${taskHref(t)}#shots">截图对照</a>
      </div>
    </div>`;
  }

  function sync() {
    const split = state.panes.length > 1;
    el.classList.toggle('split', split);
    el.classList.toggle('guide-open', state.guide);
    $$('.pane', stage).forEach((p, i) => p.classList.toggle('active', split && i === state.active));
    const current = byId(state.panes[state.active]);
    $('.vselect', el).value = current.id;
    const m = modelOf(current);
    $('.vmark', el).innerHTML = m.logo ? `<img src="${esc(m.logo)}" alt="">` : '';
    $('[data-v="guide"]', el).setAttribute('aria-pressed', String(state.guide));
    $('[data-v="split"]', el)?.setAttribute('aria-pressed', String(split));
    const open = $('[data-v="open"]', el);
    if (current.scene) open.href = current.scene + (state.queries[state.active] ? `?${state.queries[state.active]}` : '');
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
    const ids = sortedResults(t).map((r) => r.id);
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
    const other = sortedResults(t).find((r) => r.id !== state.panes[0]);
    if (other) navigate([state.panes[0], other.id], 1);
  };
  const reload = () => load(state.active);
  const fullscreen = () => {
    if (document.fullscreenElement) document.exitFullscreen();
    else el.requestFullscreen?.().catch(() => {});
  };

  el.addEventListener('click', (e) => {
    const v = e.target.closest('[data-v]')?.dataset.v;
    if (v === 'exhibition') { location.hash = sandtableHref(t, state.panes); return; }
    if (v === 'guide') return toggleGuide();
    if (v === 'split') return toggleSplit();
    if (v === 'full') return fullscreen();
    if (v === 'prev') return cycle(-1);
    if (v === 'next') return cycle(1);
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
  const onBlur = () => {
    setTimeout(() => {
      const frame = document.activeElement;
      if (frame?.tagName !== 'IFRAME') return;
      const i = Number(frame.closest('[data-pane]')?.dataset.pane);
      if (state.panes.length > 1 && i !== state.active) { state.active = i; sync(); }
    });
  };
  window.addEventListener('blur', onBlur);
  const onKey = (e) => {
    if (lightbox.isOpen || e.metaKey || e.ctrlKey || e.altKey || e.target.matches('input, select, textarea')) return;
    const k = e.key.toLowerCase();
    if (k === 'arrowleft') cycle(-1);
    else if (k === 'arrowright') cycle(1);
    else if (k === 'g') toggleGuide();
    else if (k === 's' && many) toggleSplit();
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
      window.removeEventListener('blur', onBlur);
      document.body.classList.remove('is-viewer');
      if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
    },
  };
}

// ---- router ---------------------------------------------------------------------------
function notFound(msg) {
  root.innerHTML = `${header()}<main class="page wrap empty-page"><p class="kicker"><span class="num">404</span></p><h1>找不到页面</h1><p>${esc(msg)}</p><a class="btn primary" href="#/">回到首页${icon('right')}</a></main>`;
}

let exhibition = null;
let routeVersion = 0;
async function route() {
  const version = ++routeVersion;
  const parts = location.hash.replace(/^#\/?/, '').split('#')[0].split('/').filter(Boolean).map(decodeURIComponent);
  const [taskId, a, vs, b] = parts;
  const t = DATA.tasks.find((x) => x.id === taskId);
  const inExhibition = t && hasExhibition(t) && (a === 'exhibition' || a === 'sandtable');
  const inViewer = t && a && !inExhibition;
  exhibition?.destroy();
  exhibition = null;
  resultPreviews?.destroy();
  resultPreviews = null;

  if (viewer && (!inViewer || viewer.task !== t)) {
    viewer.destroy();
    viewer = null;
  }
  root.onclick = null;
  root.onchange = null;
  lightbox.close();
  if (!(t && !inViewer)) document.body.classList.remove('has-tray');

  if (!taskId) renderHome();
  else if (!t) notFound(`没有 id 为「${taskId}」的题目。`);
  else if (inExhibition) {
    document.body.classList.remove('has-tray');
    root.innerHTML = '<main class="empty-page wrap"><p>正在打开预览…</p></main>';
    try {
      const create = a === 'sandtable'
        ? (await import('./sandtable.js')).createSandtable
        : (await import('./exhibition.js')).createExhibition;
      if (version !== routeVersion) return;
      exhibition = create(root, t, { label, vendorOf, cover, header: galleryStageHeader(t, a), initial: (vs ?? '').split(',').filter((id) => t.results.some((r) => r.id === id)) });
    } catch (error) {
      if (version !== routeVersion) return;
      root.innerHTML = `<main class="empty-page wrap"><h1>展厅加载失败</h1><p>${esc(error.message)}</p><a class="btn" href="${taskHref(t)}">返回作品</a></main>`;
    }
  } else if (!inViewer) {
    renderTask(t);
    activatePanel(location.hash.split('#')[2], false);
    try {
      const { createResultPreviews } = await import('./result-previews.js');
      if (version !== routeVersion) return;
      resultPreviews = createResultPreviews(root, t);
      resultPreviews.setPaused($('#results').hidden);
    } catch (error) {
      console.error('Model previews unavailable:', error);
    }
  } else {
    const ids = [a, vs === 'vs' ? b : null].filter(Boolean);
    const valid = ids.filter((id, i) => t.results.some((r) => r.id === id) && ids.indexOf(id) === i);
    if (!valid.length) {
      viewer?.destroy();
      viewer = null;
      notFound(`「${t.title}」下没有 id 为「${a}」的作品。`);
    }
    else {
      viewer ??= createViewer(t);
      viewer.update(valid);
    }
  }
  syncThemeUi();
  settleImages();
  if (!viewer) scrollTo(0, 0);
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
