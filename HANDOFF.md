# HANDOFF.md · 当前状态

> 只放当前状态、待办与红线。过程细节进 `docs/archive/` 归档，产品行为在 `docs/PRODUCT.md`，界面规范在 `docs/DESIGN.md`，工作约定见 `AGENTS.md`——本文不复述它们。

## 接手阅读顺序

1. 本文：当前进行到哪、剩余什么、哪些不能碰。
2. `AGENTS.md`：仓库工作约定。
3. 按任务读 `docs/PRODUCT.md`、`docs/ARCHITECTURE.md`、`docs/DESIGN.md`、`docs/intake-workflow.md`。
4. 轮次记录按日期在 `docs/archive/`：最新 `2026-09-27-工程清理-wsnxxxs.md`，其余为 2026-09-26 至 2026-09-27 的收录与文档记录。历史记录里的旧待办、旧口径不可当现状。

## 当前状态（2026-09-27）

- 本轮新增 `HANDOFF.md`、`docs/archive/`、`docs/PRODUCT.md`、`docs/ARCHITECTURE.md`、`docs/DESIGN.md`、`docs/IDEAS.md`，四份历史轮次记录迁入 `docs/archive/` 加日期前缀，同步修正主 README 与 7 份作品 README 的引用。
- `AGENTS.md` 已按新体系重写：合并协作规范；文档地图移入 `AGENTS.md`。
- 项目基线：5 道题目 / 81 份作品 / 32 个模型 / 15 家厂商（2026-09-27 口径，随收录变化）；Node.js ≥ 22.13，`npm install && npm run dev` 本地起画廊。
- 已收录并提交 Kimi K3 Max（Max 档位）的 PRISM-68 机械键盘作品；该轮归档记录尚未补齐。

## 生产运行与同步

- 站点 https://wsnxxxs.github.io/same-prompt-gallery/ ，GitHub Pages 从 `gh-pages` 分支根目录提供。
- `.github/workflows/deploy-pages.yml` 在推送到 `main` 时执行 `npm ci` + `check` + `check:intake` + `build` 并发布 `dist/`；推送与发布按用户授权执行。
- `dist/` 是构建产物，不提交到主分支。

## 真正剩余事项

- `docs/PRODUCT.md` 与 `docs/ARCHITECTURE.md` 已按通读代码补全正文（2026-09-27）；`docs/DESIGN.md` 正文仍待补充。
- 合并文档分支后的工程清理已完成（2026-09-27）：重复/未归档记录归入 `docs/archive/`，删除根 `PROMPT.md`、19 份作品内 `package-lock.json`、未展示的 `facts`/`stats`/`results.json`；`npm run check` 改为 `scripts/check-syntax.mjs` 自动扫描；题目硬编码改为 `task.json` 的 `sandtable`、`sceneProfile` 与 `scripts/results.mjs`。剩余技术备注见 `docs/ARCHITECTURE.md` 末节。
- 收录存量遗留（2026-09-26 核对）：Space-bunny 厂商身份待确认；Sonnet 5.5 Max（4.17 MiB）与 Fable 5.1 Max（5.80 MiB）模型包触发 3 MiB 体积提示，待人工性能复核。

## 红线与遗留

- `results/` 内作品源码与静态交付原样保留；不为统一截图改变作品默认布局、画质或交互。
- 临时产物不入库（`node_modules/`、`dist/`、`output/`、`.playwright-cli/`、日志）；不用无差别 `git clean -fdx`。
- 不经用户明确同意不 commit、不 push。
