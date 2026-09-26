# 架构、代码地图与本地验证

> 只写实现层事实：代码组织、模块职责、数据流、构建发布与本地验证。产品行为见 `docs/PRODUCT.md`，界面规范见 `docs/DESIGN.md`，收录操作见 `docs/intake-workflow.md`。卡片模型包格式与加载细节见 `docs/preview-loading.md`，沙盘场景处理见 `docs/sandtable.md`，本文只给入口不复述。
>
> 核对基准：2026-09-27，含本轮工程清理与 Kimi K3 Max 键盘作品。

## 技术栈

| 层 | 选型 | 说明 |
| --- | --- | --- |
| 主站 | 原生 ES Module + 手写 CSS，无框架、无打包 | `site/` 原样复制进 `dist/`，模板字符串拼 HTML，hash 路由 |
| 三维 | Three.js（根 devDependency `^0.186`） | 仅卡片小模型、沙盘、模型包生成页使用；构建时从 `node_modules/three` 复制到 `dist/vendor/`，页面用 importmap 引用，不走 CDN |
| 作品 | 各自独立的 npm 工作区 | Vite / React / 原生页面等由原作决定，版本互不统一；主站不改原作代码 |
| 脚本 | Node.js ESM（`.mjs`），仅用内置模块 | 例外：`capture-results.mjs` 依赖 Playwright |
| 预览服务 | `vite preview` | 只用于静态托管 `dist/`，主站不经过 Vite 构建 |
| 发布 | GitHub Actions → `gh-pages` 分支 → GitHub Pages | 见下文流水线 |

运行环境：README 要求 Node.js ≥ 22.13（`DecompressionStream`、`readdirSync({ recursive })` 等），CI 使用 Node 22；根 `package.json` 未声明 `engines`。

## 代码地图

```
gallery.json                 站点标题/描述/仓库地址 + 模型注册表（id、名称、厂商、Logo、官网）
tasks/<task>/
  task.json                  题目元数据：标题、摘要、日期、排序、标签、截图条件、题目能力开关（见下）
  PROMPT.md                  题目提示词原文（构建时内联进 data.json）
  captures/<id>/{first,mobile}.jpg   统一桌面/手机首屏截图（capture-results 生成）
results/
  manifest.json              全部作品的登记表（唯一的作品清单来源）
  <id>/                      建筑题作品（历史布局，manifest 中无 task 字段）
  <task>/<id>/               其他题目作品
site/                        主站源码，构建时整体复制为 dist/ 根
  index.html                 外壳：主题预判脚本、样式、灯箱 DOM、importmap
  app.js                     路由与首页/题目页/在线预览/对比
  result-previews.js         题目页卡片「小模型」渲染器（懒加载）
  preview-model.js           .sbox 模型包读写（readModel / packPreview）
  scene-resources.js         Three.js 资源释放 disposeObject
  sandtable.js (+ -batching / -lod / -voxels)   建筑题三维沙盘与场景导入
  sandtable-bridge.js        注入提取副本的桥接脚本，收集原作 THREE.Scene
  exhibition.js              建筑题原作展厅（多 iframe 画布）
  style.css / sandtable.css / exhibition.css
  assets/brands/             厂商 Logo 与来源记录 README.md
  assets/scenes/<task>/<id>.sbox   预生成卡片模型包（提交入库）
scripts/                     构建、检查、截图、模型包生成（见下）；results.mjs 为共享的作品路径规则
docs/                        长期文档；docs/archive/ 为冻结的轮次记录
.github/workflows/deploy-pages.yml   CI 发布
```

根 `package.json` 通过 `workspaces` 把 `results/*`、`results/<task>/*`（逐题列出）纳入 npm 工作区，依赖由根 `package-lock.json` 统一安装。

## 主站模块结构

`site/app.js` 是唯一入口，启动时 `fetch('data.json')`，之后全部在前端渲染。

| 路由 | 渲染函数 | 说明 |
| --- | --- | --- |
| `#/` | `renderHome` | 题目卡片 + 按厂商分组的模型索引 |
| `#/<task>`（可带 `#shots` / `#prompt`） | `renderTask` + `activatePanel` | 作品 / 截图对照 / 提示词三个面板，状态在 `taskState` |
| `#/<task>/<id>`、`#/<task>/<a>/vs/<b>` | `createViewer` | iframe 在线预览与并排对比；同题内切换复用实例，只重载变化的一栏 |
| `#/chinese-architecture/sandtable[/<ids>]` | `sandtable.js` → `createSandtable` | 动态 import |
| `#/chinese-architecture/exhibition[/<ids>]` | `exhibition.js` → `createExhibition` | 动态 import |

- **路由**：`route()` 监听 `hashchange`，每次递增 `routeVersion`，异步加载完成后比对版本丢弃过期结果；离开时销毁 viewer / 沙盘 / 卡片预览并清空 `root.onclick`、`root.onchange`。
- **事件**：页面级交互集中在 `root.onclick` / `root.onchange` 委托，靠 `data-*` 属性分派；灯箱、主题切换是全局单例。
- **持久化**：`localStorage` 键 `theme`、`result-sort`、`preview-mode`、`guide`，读写均包 try/catch。主题在 `index.html` 内联脚本中首帧前决定。
- **卡片小模型**（`result-previews.js`）：只在 `preview-mode=model` 时动态导入。单个共享 `WebGLRenderer` + 正交相机，用 `IntersectionObserver` 决定加载与绘制，静止/面板隐藏/页面不可见时停绘；桌面并发 3、缓存 9，手机（≤640px）并发 2、缓存 6、DPR ≤ 1。有 `previewModel`（`.sbox`）时直接读包；否则回退为隐藏 iframe 打开 `previewLoader?sandtable=1` 现场提取（串行），并按需导入 `sandtable.js`。
- **题目能力开关**：由 `task.json` 声明，经 `data.json` 传给前端，代码中不再按题目 id 判断。

  | 字段 | 取值 | 作用 |
  | --- | --- | --- |
  | `sandtable` | `true` / 省略 | 开启三维沙盘、原作展厅、多件对比与 viewer「沙盘」按钮（`hasExhibition`）；提取副本放在 `dist/_sandtable/<id>/`，否则放 `dist/_scenes/<task>/<id>/` |
  | `sceneProfile` | `"architecture"` / `"railway"` / 省略 | 卡片模型提取与取景规则：`architecture` 为建筑群裁剪远景、加底座、按建筑打包；`railway` 为忽略透明物体、阴影平面与闲置粒子；省略时用通用规则。同时作用于 `result-previews.js` 现场回退和 `preview-baker.js` 预生成 |

  当前仅中式建筑题设 `sandtable: true` + `sceneProfile: "architecture"`，铁路题设 `sceneProfile: "railway"`。

## 脚本职责与数据流

```
gallery.json ─┐
tasks/*/task.json, PROMPT.md, captures/ ─┤
results/manifest.json ─┤                 ┌─> dist/data.json   （主站唯一数据源）
results/**/dist/ (各工作区 build 产物) ─┼─ assemble.mjs ─┼─> dist/results/...  （原作原样副本）
site/ + site/assets/scenes/*.sbox ─┘                 ├─> dist/_scenes|_sandtable/...（可提取副本）
                                                      └─> dist/<task>/_captures/, dist/vendor/
```

| 脚本 | npm 命令 | 职责 |
| --- | --- | --- |
| `results.mjs` | 被其他脚本导入 | 作品路径规则：`LEGACY_TASK`、`taskIdOf(entry)`、`resultDir(entry)` |
| `check-syntax.mjs` | `check` | 对 `site/`、`scripts/` 下全部 `.js` / `.mjs` 自动执行 `node --check`，新增文件无需登记 |
| `assemble.mjs` | `build` 第二步 | 清空并重建 `dist/`：复制 `site/`、three vendor；逐作品复制 `dist/`、作者截图、统一截图；生成可提取副本；写旧路径跳转页；输出 `data.json`、`.nojekyll` |
| `build-static-result.mjs` | 被只有静态交付的作品 `build` 脚本调用 | 把作品根的 `index.html`、`assets/`、`favicon.svg` 复制到该作品 `dist/` |
| `check-intake.mjs` | `check:intake`（支持 `--task`、`--id`） | 校验模型注册与 Logo 来源、作品登记字段、带时区 `addedAt`、包名唯一、README/封面/双截图、`.sbox` 可解压非空且已压缩、已跟踪文件中无临时产物（含作品目录内的 `package-lock.json`）；`vendorNote` 与 >3 MiB 模型包记为警告 |
| `capture-results.mjs` | `capture:results` | Playwright 按题目 `conditions.viewport` 拍 `first` / `mobile` 首屏，默认只补缺失图，需先起预览服务 |
| `bake-previews.mjs` + `preview-baker.{html,js}` | `bake:previews` | 读 `dist/data.json` 列出缺包作品，起本地服务（默认 5174）；浏览器页逐个 iframe 打开 `previewLoader`，经 `importArchitecture` + `packPreview` 打包后 POST 回写 `site/assets/scenes/` |
| `compact-previews.mjs` | 被 bake 调用，也可单独运行 | 把 v2 模型包量化压缩（位置 16 位、法线/颜色 8 位），v1 导入包不动 |

`assemble.mjs` 关键约定：

- 作品目录（`results.mjs`）：`entry.task` 存在时为 `results/<task>/<id>`，否则为 `results/<id>` 且题目视为 `LEGACY_TASK`（`chinese-architecture`）。`assemble`、`check-intake`、`capture-results` 共用这一规则。
- 模型 id 解析顺序：`task.json` 内同 id 的 `results[].model` → `manifest.modelId` → 作品 `id`；必须在 `gallery.json` 中注册，否则构建失败。
- 标题、摘要、`effort`、`guide` 等同理优先取 `task.json.results[]`（仅建筑题 4 份历史作品使用），其次取 manifest。
- 可提取副本：按题目 `sandtable` 开关复制到 `dist/_sandtable/<id>/` 或 `dist/_scenes/<task>/<id>/`，路径作为 `previewLoader` 写入 `data.json`，沙盘、卡片回退与模型包生成都从这里读取；用正则在构建产物中给 `this.isScene=true` 插入 `window.__galleryCaptureScene?.(this)` 钩子、给 `render` 加短路，并在 `<head>` 注入 `sandtable-bridge.js`。找不到场景即构建失败。`KEEP_CPU_BUFFERS` 列出需要在提取副本中保留 CPU 体素缓冲的作品（当前为 `sonnet-5.5-max`）。`dist/results/` 下的原作副本不做任何修改。
- `captures.first` 先填作者封面（manifest `cover`），存在 `tasks/<task>/captures/<id>/first.jpg` 时被覆盖；前端取 `captures` 第一项作为卡片封面。

## 构建与发布流水线

1. `npm run build` = `npm run build --workspaces`（逐个作品构建到各自 `dist/`）+ `node scripts/assemble.mjs`。全量构建 81 个工作区，耗时主要在这一步。
2. CI（`.github/workflows/deploy-pages.yml`）：推送 `main` 或手动触发 → Node 22 → `npm ci` → `npm run check` → `npm run check:intake` → `npm run build` → 在 `dist/` 内 `git init` 并强推到 `gh-pages`（`concurrency: pages`，新推送取消旧任务）。
3. GitHub Pages 从 `gh-pages` 根目录提供站点，部署在仓库子路径下，因此主站与作品都必须使用相对路径。
4. `.sbox` 模型包和统一截图不在 CI 中生成，必须在本地生成后提交；CI 只校验其存在与格式。

## 运行与验证

| 命令 | 作用 | 何时用 |
| --- | --- | --- |
| `npm install` | 安装根与全部工作区依赖 | 首次或依赖变化 |
| `npm run dev` | 全量构建后 `vite preview`，端口 5173 | 本地浏览整站 |
| `npm run preview -- --host 127.0.0.1 --port 4173` | 仅预览已有 `dist/` | 截图、模型包生成前 |
| `npm run build` | 全量构建 | 收录完成、改动主站或脚本后 |
| `node scripts/assemble.mjs` | 只重新汇总（不重建作品） | 只改了 `site/`、元数据、截图或模型包 |
| `npm run check` | 自动扫描 `site/`、`scripts/` 做语法检查 | 每次改动 |
| `npm run check:intake [-- --task=… --id=…]` | 收录检查 | 每次改动，收录时先单件再全量 |
| `npm run dev --workspace=<包名>` | 单个作品的开发服务（若作品提供） | 调试原作 |

当前基线（2026-09-27）：`npm run check` 通过；`npm run check:intake` 为 81 份、0 错误、3 警告（Space-bunny 厂商待确认、Sonnet 5.5 Max 4.17 MiB、Fable 5.1 Max 5.80 MiB 模型包）。

验证边界：以上命令只覆盖语法、登记和文件存在性，不执行任何浏览器交互；页面行为需在预览服务中目视核对，不能把「构建通过」表述为「交互已验证」。仓库没有自动化 UI 测试。

## 扩充内容操作步骤

完整步骤与完成清单以 `docs/intake-workflow.md` 为准，这里只列各类改动会碰到的文件：

| 改动 | 需要修改 | 需要生成 |
| --- | --- | --- |
| 新作品（已有题目） | `results/<task>/<id>/`、`results/manifest.json`、README 作品目录与数量 | `tasks/<task>/captures/<id>/`、`site/assets/scenes/<task>/<id>.sbox` |
| 新模型 | `gallery.json` `models[]` | 新厂商另加 `site/assets/brands/` Logo 并在其 `README.md` 记来源 |
| 新题目 | `tasks/<task>/{task.json,PROMPT.md}`（按需设 `sandtable`、`sceneProfile`）、根 `package.json` `workspaces` 追加 `results/<task>/*` | 同新作品 |
| 主站功能/样式 | `site/` | 无；`node scripts/assemble.mjs` 后预览 |
| 新增构建脚本 | `scripts/`、`package.json` scripts | — |

## 已知不一致 / 技术备注

2026-09-27 通读代码时记录的问题中，已在同日清理：`docs/` 顶层重复与未归档的轮次记录已删除或迁入 `docs/archive/`；根目录重复的 `PROMPT.md` 已删除；`npm run check` 改为自动扫描；题目硬编码改为 `task.json` 能力开关与 `scripts/results.mjs`；作品目录内 19 份 `package-lock.json` 已删除并由收录检查拦截；未被使用的 `facts`、`factsNote`、`stats` 与 `dist/results.json` 已从配置和构建输出中删除。仍存在的：

- 作品目录两种布局（建筑题 `results/<id>`、其他 `results/<task>/<id>`）仍并存，规则已集中在 `scripts/results.mjs`；迁移目录会改变作品 URL 与 GitHub 源码链接，未做。
- 根 `package.json` `workspaces` 按题目逐条列出，新题目必须手动追加，`check:intake` 不检查这一点（遗漏时表现为构建阶段缺少 `dist/`）。
- `task.json` 的 `results[]`（仅建筑题 4 份历史作品）仍可覆盖 manifest 的标题、摘要、档位、指南与作者截图；其中 `aliases` 字段当前无代码读取。
- `site/sandtable.js` 内含按作品 id 手写的场景范围表（如 `sonnet-5.5-max`），属于逐件取景数据，未迁出。
- `assemble.mjs` 的场景钩子依赖正则匹配 Three.js 构建产物中的 `this.isScene=!0|true` 和 `this.render=function(`，Three.js 版本或压缩方式变化时可能失效：`isScene` 钩子全部失配会使构建报错，`render` 短路失配则不会报错，只会让提取副本多跑一遍渲染。
- 根 `package.json` 未声明 `engines`，Node 版本要求只写在 README。
- `docs/DESIGN.md` 仍只有章节说明，没有正文。
