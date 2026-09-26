# 同题异答 · 模型前端效果对比

“同题异答”展示不同模型针对同一份任务提示词生成的前端作品，目前收录[体素中国古典建筑群](tasks/chinese-architecture/PROMPT.md)与[桌面微缩铁路小镇](tasks/miniature-railway-town/PROMPT.md)两道题目。页面以作品截图为主，支持在线运行、并排对比、浏览截图与源码。

站点采用暖白纸色与墨色两套主题，仅以一抹朱砂色作点缀；默认跟随系统的浅色 / 深色设置，也可用顶栏的日月按钮手动切换，选择会保存在浏览器中。标识由一条完整的横线（同）与一条断开的横线（异）组成，末段为朱砂色，文件为 `site/assets/logo.svg`。

首页按题目浏览，模型索引按厂商分行排列，列出每个模型的作品，可以收起。题目页可按厂商筛选作品，并通过“作品 / 截图对照 / 提示词”切换内容；截图对照提供首屏与手机界面预览。在作品卡片上点“对比”选中两件作品，底部对比栏即可打开并排对比。在线预览时可用 ← / → 或顶栏按钮切换作品，也可打开并排对比，操作指南按需展开。

模型品牌标识保存在 `site/assets/brands/`，来源及下载地址见[标识来源](site/assets/brands/README.md)。新增模型时，可在 `gallery.json` 中复用对应品牌的本地标识。

**在线站点：<https://wsnxxxs.github.io/same-prompt-gallery/>**

## 体素中国古典建筑群

| 模型 | 作品 | 在线场景 | 源码与说明 |
| --- | --- | --- | --- |
| Grok 4.6 | 体素中式建筑群 | [打开场景](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/grok-4.6) | [项目说明](results/grok-4.6/README.md) |
| Qwen3.8 Max 0902 | 体素 · 中国古典建筑群 | [打开场景](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/qwen3.8-max-0902) | [项目说明](results/qwen3.8-max-0902/README.md) |
| Qwen3.8 Flash next | 体素古建 · 中轴殿宇 | [打开场景](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/qwen3.8-flash-next) | [项目说明](results/qwen3.8-flash-next/README.md) |
| Seed 2.1 Pro | 体素中国古典建筑群 | [打开场景](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/seed-2.1-pro) | [项目说明](results/seed-2.1-pro/README.md) |
| Step 5 Preview | 体素 · 中式古典建筑群 | [打开场景](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/step-5-preview) | [项目说明](results/step-5-preview/README.md) |
| Claude Opus 5.5 High | 云山古刹 | [打开场景](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/opus-5.5-high) | [项目说明](results/opus-5.5-high/README.md) |
| Claude Sonnet 5.5 Max | 云栖古刹 | [打开场景](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/sonnet-5.5-max) | [项目说明](results/sonnet-5.5-max/README.md) |
| Claude Sonnet 5.5 High | 体素古寺 | [打开场景](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/sonnet-5.5-high) | [项目说明](results/sonnet-5.5-high/README.md) |
| MIMO V2.6 Pro | 体素中华 | [打开场景](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/mimo-v2.6-pro) | [项目说明](results/mimo-v2.6-pro/README.md) |
| MiMo V2.6 Flash | 云栖古刹 · 体素中轴 | [打开场景](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/mimo-v2.6-flash) | [项目说明](results/mimo-v2.6-flash/README.md) |
| DeepSeek V4.1 Flash | 古城 · 体素中式建筑群 | [打开场景](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/deepseek-v4.1-flash) | [项目说明](results/deepseek-v4.1-flash/README.md) |
| GLM 5.3 Flash | 体素古刹 | [打开场景](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/glm-5.3-flash) | [项目说明](results/glm-5.3-flash/README.md) |
| GLM 5.3 | 古刹夕照 | [打开场景](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/glm-5.3) | [项目说明](results/glm-5.3/README.md) |
| HY3 | 体素中国古典建筑群 | [打开场景](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/hy3) | [项目说明](results/hy3/README.md) |
| Kimi K3 | 体素 · 中国古典建筑群 | [打开场景](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/kimi-k3) | [项目说明](results/kimi-k3/README.md) |
| Kimi K2.8 Preview | 体素 · 中国古典建筑群 | [打开场景](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/kimi-k2.8-preview) | [项目说明](results/kimi-k2.8-preview/README.md) |
| DeepSeek V4 Pro | 体素 · 中国古典建筑群 | [打开场景](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/deepseek-v4-pro) | [项目说明](results/deepseek-v4-pro/README.md) |
| Gemini 3.1 Pro | 体素中国古典建筑群 | [打开场景](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/gemini-3.1-pro) | [项目说明](results/gemini-3.1-pro/README.md) |
| Gemini 3.7 Flash | 华夏九重天 · 3D 体素中国古典建筑群 | [打开场景](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/gemini-3.7-flash) | [项目说明](results/gemini-3.7-flash/README.md) |
| Gemini 3.8 Flash | 紫禁晨暮 · 中式殿阁体素群 | [打开场景](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/gemini-3.8-flash) | [项目说明](results/gemini-3.8-flash/README.md) |
| MiniMax M3 | 体素中式院落 | [打开场景](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/minimax-m3) | [项目说明](results/minimax-m3/README.md) |
| Space-bunny（暂归 MiniMax） | 体素宫城 · Voxel Palace | [打开场景](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/space-bunny) | [项目说明](results/space-bunny/README.md) |
| GPT-6 Sol Max | 云阙宫 | [打开场景](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/gpt-6-sol-max) | [项目说明](results/gpt-6-sol-max/README.md) |
| GPT-6 Sol High | 云阙 · 体素古建 | [打开场景](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/gpt-6-sol-high) | [项目说明](results/gpt-6-sol-high/README.md) |
| GPT-6 Luna Max | 云岚宫阙 | [打开场景](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/gpt-6-luna-max) | [项目说明](results/gpt-6-luna-max/README.md) |
| GPT-5.6 Sol Max | 紫宸宫阙 | [打开场景](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/gpt-5.6-sol-max) | [项目说明](results/gpt-5.6-sol-max/README.md) |
| GPT-5.6 Luna Max | 云岚寺 | [打开场景](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/gpt-5.6-luna-max) | [项目说明](results/gpt-5.6-luna-max/README.md) |
| GPT-5.6 Terra Max | 云岫古寺 | [打开场景](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/gpt-5.6-terra-max) | [项目说明](results/gpt-5.6-terra-max/README.md) |
| GPT-6 Astra High | 方寸之间 · 云栖古寺 | [打开场景](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/gpt-6-astra-high) | [项目说明](results/gpt-6-astra-high/README.md) |
| GPT-6 Astra Pro | 云阙 · 方寸山河 | [打开场景](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/astra-pro) | [项目说明](results/astra-pro/README.md) |

本题共 30 个结果，28 个模型。各作品保留独立实现；部分作品使用原生静态页面，其余结果通过 Vite 构建。Grok、Qwen3.8 Max、Seed 和 Gemini 3.7 Flash 四份结果只有已构建页面，仓库保留其原始静态资源并提供复制构建脚本。所有作品均提供手机界面截图；原有 4 个作品保留统一首屏截图，其余作品的首屏使用项目预览图。Space-bunny 按用户要求暂归 MiniMax，厂商身份尚未确认。

## 运行

需要 Node.js ≥ 22.13。以下命令在仓库根目录执行：

```bash
npm install
npm run dev       # 构建全部结果并在 http://localhost:5173 打开同题异答
npm run build     # 将站点、模型数据和全部结果构建到 dist/
npm run preview   # 预览已构建的 dist/，默认 http://localhost:4173
npm run check     # 运行 Opus 作品的体素检查
npm run dev:opus  # 单独开发 Opus 场景，默认 http://localhost:5173
```

也可以进入任一 `results/<模型标识>/` 或 `results/miniature-railway-town/<模型标识>/` 目录，独立运行 `npm install`、`npm run dev` 和 `npm run build`。

## 仓库结构

```text
gallery.json                              站点名称与模型注册表
tasks/chinese-architecture/task.json     题目信息、原有作品的详细数据与截图条件
tasks/chinese-architecture/captures/     原有作品的统一条件截图
tasks/miniature-railway-town/            第二道题目的提示词、元数据与手机截图
results/manifest.json                    43 个结果的简要目录
results/                                  第一题的 30 个独立前端项目
results/miniature-railway-town/           第二题的 13 个独立前端项目
site/                                     “同题异答”作品画廊与对比界面
scripts/assemble.mjs                     汇总结果并生成 dist/data.json
.github/workflows/                        GitHub Pages 自动发布
```

## 添加模型结果

1. 在 `results/<模型标识>/` 放入完整、可独立运行的前端项目，提供 `package.json` 的 `build` 脚本和项目 README。标识使用小写字母、数字、点和连字符。
2. 在 `results/manifest.json` 添加 `id`、`model`、`title`、`description`、`cover`、`addedAt`。`cover` 是项目目录内的相对图片路径，建议放在 `docs/` 下。`addedAt` 使用带时区的 ISO 8601 加入时间（如 `2026-09-26T12:00:00+10:00`），用于作品列表和在线预览排序；已有作品依据首次加入 Git 的记录补齐，同一时间保留目录顺序，缺失时间的作品排在最后。若模型有单独的推理档位，可另填 `modelId`、`effort`。
3. 新题目先建立 `tasks/<题目标识>/task.json` 和提示词文件，配置标题、日期、标签、截图条件和事实字段；在根 `package.json` 的 `workspaces` 中添加 `results/<题目标识>/*`。结果放在 `results/<题目标识>/<模型标识>/`，并在清单条目中添加 `task`。同一模型可在不同题目下复用标识；工作区的包名必须唯一。未填写 `task` 的原有条目仍归属于第一题，原场景链接保持可用。
4. 在 `gallery.json` 注册新模型，并更新上方表格。运行 `npm install`、`npm run build` 验证。构建会把结果放在 `dist/results/<模型标识>/` 或 `dist/results/<题目标识>/<模型标识>/`，并生成同题异答的数据文件。

各模型结果保留自己的依赖和实现，不需要改成同一种技术结构。提交时请注明模型与推理档位，并将使用的提示词差异写在该结果的 README 中。
