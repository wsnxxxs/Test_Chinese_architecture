# 同题异答 · 模型前端效果对比

把同一份提示词交给不同模型，展示它们生成的可运行前端作品。支持在线运行、并排对比、截图对照，以及查看提示词和源码。

**[打开在线画廊](https://wsnxxxs.github.io/same-prompt-gallery/)** · [作品清单](results/manifest.json) · [模型注册表](gallery.json)

<!-- catalog:summary:start -->
截至 2026-09-27，收录 **5 道题目、81 份作品、32 个模型**。同一模型的不同推理档位分别收录为作品，模型数量按模型注册表统计。

| 题目 | 作品数 | 提示词 | 在线题目页 |
| --- | ---: | --- | --- |
| 体素中国古典建筑群 | 36 | [查看提示词](tasks/chinese-architecture/PROMPT.md) | [浏览作品](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture) |
| 桌面微缩铁路小镇 | 26 | [查看提示词](tasks/miniature-railway-town/PROMPT.md) | [浏览作品](https://wsnxxxs.github.io/same-prompt-gallery/#/miniature-railway-town) |
| 机械键盘 · 交互式产品配置器 | 17 | [查看提示词](tasks/mechanical-keyboard/PROMPT.md) | [浏览作品](https://wsnxxxs.github.io/same-prompt-gallery/#/mechanical-keyboard) |
| Boeing 787 · 交互式三维展示 | 1 | [提示词待补充](tasks/boeing-787/PROMPT.md) | [浏览作品](https://wsnxxxs.github.io/same-prompt-gallery/#/boeing-787) |
| 腾势 Z Racing · 交互式三维展示 | 1 | [提示词待补充](tasks/denza-z/PROMPT.md) | [浏览作品](https://wsnxxxs.github.io/same-prompt-gallery/#/denza-z) |
<!-- catalog:summary:end -->

## 目录

- [快速运行](#快速运行)
- [浏览与对比](#浏览与对比)
- [作品目录](#作品目录)
- [截图与收录范围](#截图与收录范围)
- [仓库结构](#仓库结构)
- [添加与更新作品](#添加与更新作品)
- [发布](#发布)

## 快速运行

需要 Node.js ≥ 22.13。在仓库根目录执行：

```bash
npm install
npm run dev
```

打开 [http://localhost:5173](http://localhost:5173)。此命令会先构建全部作品，再启动主站预览服务；修改主站或作品源码后需重新构建。

| 命令 | 用途 |
| --- | --- |
| `npm run build` | 构建全部作品并汇总站点到 `dist/` |
| `npm run preview` | 预览已构建的主站，默认地址为 `http://localhost:4173` |
| `npm run check` | 检查画廊页面和汇总脚本的 JavaScript 语法 |
| `npm run check:intake` | 核对必要文件、元数据、桌面/手机截图、厂商 Logo 与卡片模型包 |
| `npm run intake -- --id=<题目>/<作品>[,...]` | 收录用：构建选中作品、截图、生成卡片模型包并运行收录检查 |
| `npm run readme` | 按作品清单重新生成本文的数量表与作品目录 |
| `npm run capture:results` | 在已运行的预览服务上补齐缺失的桌面和手机首屏截图 |
| `npm run dev:opus` | 单独启动 Opus 建筑作品的开发服务 |

### 单独开发一份作品

安装依赖后，在仓库根目录使用作品 `package.json` 中的包名指定工作区，例如：

```bash
# 铁路小镇 · MiMo V2.6 Pro
npm run dev --workspace=railway-mimo-v2.6-pro
npm run build --workspace=railway-mimo-v2.6-pro

# 机械键盘 · GPT-6 Sol Max
npm run dev --workspace=keyboard-gpt-6-sol-max
npm run build --workspace=keyboard-gpt-6-sol-max
```

也可以进入对应项目目录运行其 npm 命令，具体用法见作品 README。部分静态作品的构建脚本引用仓库内的 `scripts/build-static-result.mjs`，运行时需保留仓库目录结构。单独重建作品后，执行 `node scripts/assemble.mjs` 将更新汇入主站；此命令要求全部作品已有构建产物。

## 浏览与对比

首页按题目浏览，模型索引按厂商查看作品。题目页支持厂商筛选、「作品 / 截图对照 / 提示词」切换，以及按加入时间、厂商或模型名称排序。

作品卡片可切换截图和小模型；选择会保存在本机，小模型支持鼠标轻转，静止时暂停绘制。每份作品都有预生成模型包。加载策略和模型包格式见[卡片模型加载优化](docs/preview-loading.md)。

选中两件作品可并排对比。在线预览支持用方向键或顶栏按钮切换作品；中式建筑题目另有三维沙盘和原作展厅。站点默认跟随系统切换暖白与墨色主题。[品牌标识来源](site/assets/brands/README.md)记录模型标识的来源与下载地址。

### 三维沙盘与原作展厅

这两种展示方式用于中式建筑题目，切换时会保留已选作品。

| 展示方式 | 适合查看 | 展示与操作 |
| --- | --- | --- |
| 三维沙盘（默认入口） | 建筑布局与结构 | 统一相机、展台尺度和光照；支持旋转、平移、缩放、聚焦与俯视；简化原作天空、特效和动画 |
| 原作展厅 | 完整交付效果 | 在可平移、缩放的画布中运行原始页面；进入专注视图后可操作原作相机、光照及其他交互 |

直接进入沙盘时为空，可自行选作品；也可从题目页带入已选作品。选择保存在链接中，刷新后恢复。原作展厅支持搜索和筛选，点击作品进入专注视图，按 Esc 返回；手机端可展开作品侧栏。

沙盘使用专用构建副本；在线预览和原作展厅运行完整原作。沙盘渲染、场景处理与性能细节见[沙盘说明](docs/sandtable.md)。

## 作品目录

各作品保留独立实现与依赖。High、Max、Extra 等表示推理档位。Space-bunny 暂归 MiniMax，厂商身份尚未确认；Doubao Seed Evolving 与 Seed 2.1 Pro 分别收录。

### 体素中国古典建筑群

Grok、Qwen3.8 Max、Seed 2.1 Pro、Gemini 3.7 Flash，以及新增的 Astra Max、Fable Max、GLM Flash Max 和 MiniMax 日期版本以已构建页面交付，仓库保留其静态资源并提供复制构建脚本。

<!-- catalog:chinese-architecture:start -->
36 份作品，涉及 30 个模型。

| 模型 | 作品 | 在线预览 | 源码与说明 |
| --- | --- | --- | --- |
| Grok 4.6 | 体素中式建筑群 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/grok-4.6) | [项目说明](results/grok-4.6/README.md) |
| Qwen3.8 Max 0902 | 体素 · 中国古典建筑群 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/qwen3.8-max-0902) | [项目说明](results/qwen3.8-max-0902/README.md) |
| Qwen3.8 Flash next | 体素古建 · 中轴殿宇 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/qwen3.8-flash-next) | [项目说明](results/qwen3.8-flash-next/README.md) |
| Seed 2.1 Pro | 体素中国古典建筑群 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/seed-2.1-pro) | [项目说明](results/seed-2.1-pro/README.md) |
| Step 5 Preview | 体素 · 中式古典建筑群 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/step-5-preview) | [项目说明](results/step-5-preview/README.md) |
| Claude Opus 5.5 High | 云山古刹 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/opus-5.5-high) | [项目说明](results/opus-5.5-high/README.md) |
| Claude Sonnet 5.5 Max | 云栖古刹 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/sonnet-5.5-max) | [项目说明](results/sonnet-5.5-max/README.md) |
| Claude Sonnet 5.5 High | 体素古寺 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/sonnet-5.5-high) | [项目说明](results/sonnet-5.5-high/README.md) |
| MiMo V2.6 Pro | 体素中华 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/mimo-v2.6-pro) | [项目说明](results/mimo-v2.6-pro/README.md) |
| MiMo V2.6 Flash | 云栖古刹 · 体素中轴 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/mimo-v2.6-flash) | [项目说明](results/mimo-v2.6-flash/README.md) |
| DeepSeek V4.1 Flash | 古城 · 体素中式建筑群 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/deepseek-v4.1-flash) | [项目说明](results/deepseek-v4.1-flash/README.md) |
| GLM 5.3 Flash | 体素古刹 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/glm-5.3-flash) | [项目说明](results/glm-5.3-flash/README.md) |
| GLM 5.3 | 古刹夕照 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/glm-5.3) | [项目说明](results/glm-5.3/README.md) |
| HY3 | 体素中国古典建筑群 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/hy3) | [项目说明](results/hy3/README.md) |
| Kimi K3 | 体素 · 中国古典建筑群 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/kimi-k3) | [项目说明](results/kimi-k3/README.md) |
| Kimi K2.8 Preview | 体素 · 中国古典建筑群 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/kimi-k2.8-preview) | [项目说明](results/kimi-k2.8-preview/README.md) |
| DeepSeek V4 Pro | 体素 · 中国古典建筑群 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/deepseek-v4-pro) | [项目说明](results/deepseek-v4-pro/README.md) |
| MiniMax M3 | 体素中式院落 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/minimax-m3) | [项目说明](results/minimax-m3/README.md) |
| Space-bunny（暂归 MiniMax） | 体素宫城 · Voxel Palace | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/space-bunny) | [项目说明](results/space-bunny/README.md) |
| GPT-6 Sol Max | 云阙宫 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/gpt-6-sol-max) | [项目说明](results/gpt-6-sol-max/README.md) |
| GPT-6 Sol High | 云阙 · 体素古建 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/gpt-6-sol-high) | [项目说明](results/gpt-6-sol-high/README.md) |
| GPT-6 Luna Max | 云岚宫阙 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/gpt-6-luna-max) | [项目说明](results/gpt-6-luna-max/README.md) |
| GPT-5.6 Sol Max | 紫宸宫阙 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/gpt-5.6-sol-max) | [项目说明](results/gpt-5.6-sol-max/README.md) |
| GPT-5.6 Luna Max | 云岚寺 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/gpt-5.6-luna-max) | [项目说明](results/gpt-5.6-luna-max/README.md) |
| GPT-5.6 Terra Max | 云岫古寺 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/gpt-5.6-terra-max) | [项目说明](results/gpt-5.6-terra-max/README.md) |
| GPT-6 Astra High | 方寸之间 · 云栖古寺 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/gpt-6-astra-high) | [项目说明](results/gpt-6-astra-high/README.md) |
| GPT-6 Astra Pro | 云阙 · 方寸山河 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/astra-pro) | [项目说明](results/astra-pro/README.md) |
| Gemini 3.1 Pro | 体素中国古典建筑群 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/gemini-3.1-pro) | [项目说明](results/gemini-3.1-pro/README.md) |
| Gemini 3.8 Flash | 紫禁晨暮 · 中式殿阁体素群 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/gemini-3.8-flash) | [项目说明](results/gemini-3.8-flash/README.md) |
| Gemini 3.7 Flash | 华夏九重天 · 3D 体素中国古典建筑群 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/gemini-3.7-flash) | [项目说明](results/gemini-3.7-flash/README.md) |
| LongCat 2.5 | Voxel 中式古建筑群 · 晨光 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/longcat-2.5) | [项目说明](results/longcat-2.5/README.md) |
| GPT-6 Astra Max | 栖霞古境 · 体素山河 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/gpt-6-astra-max) | [项目说明](results/gpt-6-astra-max/README.md) |
| Claude Fable 5.1 Max | 体素 · 中式古建筑群 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/claude-fable-5.1-max) | [项目说明](results/claude-fable-5.1-max/README.md) |
| DeepSeek V4.1 Flash E0910 Max | 古城 · 体素中式建筑群 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/deepseek-v4.1-flash-e0910) | [项目说明](results/deepseek-v4.1-flash-e0910/README.md) |
| GLM 5.3 Flash Max | 体素古刹 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/glm-5.3-flash-max) | [项目说明](results/glm-5.3-flash-max/README.md) |
| MiniMax M3 · 2026-09-26 版本 | 体素中式院落 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/minimax-m3-20260926) | [项目说明](results/minimax-m3-20260926/README.md) |
<!-- catalog:chinese-architecture:end -->

新增五份建筑作品来自用户提供的 architecture-gallery.zip，四份重复交付复用原有记录；来源与对应关系见[收录记录](docs/archive/2026-09-26-architecture-gallery-import.md)。

### 桌面微缩铁路小镇

展示闭合铁路、小镇、河流桥梁与列车运行，支持在线运行、并排对比和手机截图预览。

<!-- catalog:miniature-railway-town:start -->
26 份作品，涉及 23 个模型。

| 模型 | 作品 | 在线预览 | 源码与说明 |
| --- | --- | --- | --- |
| GPT-6 Astra Pro | 柳溪铁路镇 · Willowbrook Railway | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/miniature-railway-town/astra-pro) | [项目说明](results/miniature-railway-town/astra-pro/README.md) |
| DeepSeek V4.1 Flash | 桌面微缩铁路小镇 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/miniature-railway-town/deepseek-v4.1-flash) | [项目说明](results/miniature-railway-town/deepseek-v4.1-flash/README.md) |
| Gemini 3.8 Flash | Alpine Junction · 桌面微缩铁路 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/miniature-railway-town/gemini-3.8-flash) | [项目说明](results/miniature-railway-town/gemini-3.8-flash/README.md) |
| GPT-5.6 Luna Max | Evergreen Junction | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/miniature-railway-town/gpt-5.6-luna-max) | [项目说明](results/miniature-railway-town/gpt-5.6-luna-max/README.md) |
| GPT-5.6 Sol Max | 溪谷镇 · 桌面微缩铁路 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/miniature-railway-town/gpt-5.6-sol-max) | [项目说明](results/miniature-railway-town/gpt-5.6-sol-max/README.md) |
| GPT-5.6 Terra Max | 暮光微缩铁路镇 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/miniature-railway-town/gpt-5.6-terra-max) | [项目说明](results/miniature-railway-town/gpt-5.6-terra-max/README.md) |
| GPT-6 Astra High | 松溪镇 · The Little Railway | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/miniature-railway-town/gpt-6-astra-high) | [项目说明](results/miniature-railway-town/gpt-6-astra-high/README.md) |
| GPT-6 Luna Max | 河湾小镇 · 微缩铁路沙盘 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/miniature-railway-town/gpt-6-luna-max) | [项目说明](results/miniature-railway-town/gpt-6-luna-max/README.md) |
| GPT-6 Sol High | 松溪镇 · 桌面微缩铁路 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/miniature-railway-town/gpt-6-sol-high) | [项目说明](results/miniature-railway-town/gpt-6-sol-high/README.md) |
| GPT-6 Sol Max | Willowmere Railway | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/miniature-railway-town/gpt-6-sol-max) | [项目说明](results/miniature-railway-town/gpt-6-sol-max/README.md) |
| HY3 | 微缩铁路小镇 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/miniature-railway-town/hy3) | [项目说明](results/miniature-railway-town/hy3/README.md) |
| LongCat 2.5 | 桌面微缩铁路小镇 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/miniature-railway-town/longcat-2.5) | [项目说明](results/miniature-railway-town/longcat-2.5/README.md) |
| Qwen3.8 Flash next | Meadowbank · 微缩铁路小镇 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/miniature-railway-town/qwen3.8-flash-next) | [项目说明](results/miniature-railway-town/qwen3.8-flash-next/README.md) |
| MiMo V2.6 Flash | 微缩铁路小镇 · Miniature Railway Town | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/miniature-railway-town/mimo-v2.6-flash) | [项目说明](results/miniature-railway-town/mimo-v2.6-flash/README.md) |
| MiMo V2.6 Pro | 青溪镇 · 桌面微缩铁路沙盘 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/miniature-railway-town/mimo-v2.6-pro) | [项目说明](results/miniature-railway-town/mimo-v2.6-pro/README.md) |
| DeepSeek V4.1 Flash Extra | 微缩铁路小镇 · Miniature Railway Town | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/miniature-railway-town/deepseek-v4.1-flash-extra) | [项目说明](results/miniature-railway-town/deepseek-v4.1-flash-extra/README.md) |
| Doubao Seed Evolving | 桌面微缩铁路小镇 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/miniature-railway-town/doubao-seed-evolving) | [项目说明](results/miniature-railway-town/doubao-seed-evolving/README.md) |
| SWE-2 | 溪口站 · 微缩铁路小镇 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/miniature-railway-town/swe-2) | [项目说明](results/miniature-railway-town/swe-2/README.md) |
| Space-bunny Max | 桌面微缩铁路小镇 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/miniature-railway-town/space-bunny-max) | [项目说明](results/miniature-railway-town/space-bunny-max/README.md) |
| MiniMax M3 | 桌面微缩铁路镇 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/miniature-railway-town/minimax-m3) | [项目说明](results/miniature-railway-town/minimax-m3/README.md) |
| DeepSeek V4.1 Flash High | 桌面微缩铁路小镇 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/miniature-railway-town/deepseek-v4.1-flash-high) | [项目说明](results/miniature-railway-town/deepseek-v4.1-flash-high/README.md) |
| Claude Sonnet 5.5 High | 桌面微缩铁路小镇 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/miniature-railway-town/sonnet-5.5-high) | [项目说明](results/miniature-railway-town/sonnet-5.5-high/README.md) |
| Step 5 Preview | Millford · 微缩铁路小镇 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/miniature-railway-town/step-5-preview) | [项目说明](results/miniature-railway-town/step-5-preview/README.md) |
| GLM 5.3 | 枫屿镇 · 桌面微缩铁路小镇 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/miniature-railway-town/glm-5.3) | [项目说明](results/miniature-railway-town/glm-5.3/README.md) |
| DeepSeek V4 Pro High | 桌面微缩铁路小镇 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/miniature-railway-town/deepseek-v4-pro-high) | [项目说明](results/miniature-railway-town/deepseek-v4-pro-high/README.md) |
| Kimi K3 Max | 桌面微缩铁路小镇 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/miniature-railway-town/kimi-k3-max) | [项目说明](results/miniature-railway-town/kimi-k3-max/README.md) |
<!-- catalog:miniature-railway-town:end -->

### 机械键盘 · 交互式产品配置器

各模型独立实现产品展示与配置，提供在线运行、并排对比和桌面、手机截图。

<!-- catalog:mechanical-keyboard:start -->
17 份作品，涉及 14 个模型。

| 模型 | 作品 | 在线预览 | 源码与说明 |
| --- | --- | --- | --- |
| GPT-5.6 Luna Max | Sora Atelier 75 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/mechanical-keyboard/gpt-5.6-luna-max) | [项目说明](results/mechanical-keyboard/gpt-5.6-luna-max/README.md) |
| GPT-5.6 Sol Max | KEPLER 65 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/mechanical-keyboard/gpt-5.6-sol-max) | [项目说明](results/mechanical-keyboard/gpt-5.6-sol-max/README.md) |
| GPT-5.6 Terra Max | AERIS 65 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/mechanical-keyboard/gpt-5.6-terra-max) | [项目说明](results/mechanical-keyboard/gpt-5.6-terra-max/README.md) |
| GPT-6 Astra High | Form 68 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/mechanical-keyboard/gpt-6-astra-high) | [项目说明](results/mechanical-keyboard/gpt-6-astra-high/README.md) |
| GPT-6 Luna Max | FORMA 68 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/mechanical-keyboard/gpt-6-luna-max) | [项目说明](results/mechanical-keyboard/gpt-6-luna-max/README.md) |
| GPT-6 Sol High | ORBIT 68 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/mechanical-keyboard/gpt-6-sol-high) | [项目说明](results/mechanical-keyboard/gpt-6-sol-high/README.md) |
| GPT-6 Sol Max | LOOM 68 · Keyboard Studio | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/mechanical-keyboard/gpt-6-sol-max) | [项目说明](results/mechanical-keyboard/gpt-6-sol-max/README.md) |
| GPT-6 Astra Pro | FORM 68 / 物构 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/mechanical-keyboard/astra-pro) | [项目说明](results/mechanical-keyboard/astra-pro/README.md) |
| LongCat 2.5 | APEX-65 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/mechanical-keyboard/longcat-2.5) | [项目说明](results/mechanical-keyboard/longcat-2.5/README.md) |
| DeepSeek V4.1 Flash | MERIDIAN 65 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/mechanical-keyboard/deepseek-v4.1-flash) | [项目说明](results/mechanical-keyboard/deepseek-v4.1-flash/README.md) |
| GLM 5.3 Flash | AXIS 68 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/mechanical-keyboard/glm-5.3-flash) | [项目说明](results/mechanical-keyboard/glm-5.3-flash/README.md) |
| MiMo V2.6 Flash | ORBIT 65 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/mechanical-keyboard/mimo-v2.6-flash) | [项目说明](results/mechanical-keyboard/mimo-v2.6-flash/README.md) |
| MiMo V2.6 Pro | LUMEN 68 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/mechanical-keyboard/mimo-v2.6-pro) | [项目说明](results/mechanical-keyboard/mimo-v2.6-pro/README.md) |
| Step 5 Preview High | AXIA K65 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/mechanical-keyboard/step-5-preview-high) | [项目说明](results/mechanical-keyboard/step-5-preview-high/README.md) |
| GPT-6 Luna Max · Arena | NOVA 68 键盘工作室 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/mechanical-keyboard/gpt-6-luna-max-arena) | [项目说明](results/mechanical-keyboard/gpt-6-luna-max-arena/README.md) |
| GPT-6 Astra Max · Arena | Forma 68 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/mechanical-keyboard/gpt-6-astra-max-arena) | [项目说明](results/mechanical-keyboard/gpt-6-astra-max-arena/README.md) |
| Kimi K3 Max | PRISM-68 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/mechanical-keyboard/kimi-k3-max) | [项目说明](results/mechanical-keyboard/kimi-k3-max/README.md) |
<!-- catalog:mechanical-keyboard:end -->

### Boeing 787 · 交互式三维展示

原始生成提示词未随交付提供，题目页保留待补充说明；作品为程序化视觉近似，不是 Boeing 官方模型、工业 CAD、飞行模拟或维修培训工具。

<!-- catalog:boeing-787:start -->
1 份作品，涉及 1 个模型。

| 模型 | 作品 | 在线预览 | 源码与说明 |
| --- | --- | --- | --- |
| GPT-6 Astra Pro | 787–9 Dreamliner · Airframe Studio | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/boeing-787/astra-pro) | [项目说明](results/boeing-787/astra-pro/README.md) |
<!-- catalog:boeing-787:end -->

### 腾势 Z Racing · 交互式三维展示

原始生成提示词和参考图未随交付提供，题目页保留待补充说明；作品为程序化视觉近似，不是腾势官方模型、工业 CAD 或工程验证模型。

<!-- catalog:denza-z:start -->
1 份作品，涉及 1 个模型。

| 模型 | 作品 | 在线预览 | 源码与说明 |
| --- | --- | --- | --- |
| GPT-6 Astra Pro | DENZA Z · Racing Studio | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/denza-z/astra-pro) | [项目说明](results/denza-z/astra-pro/README.md) |
<!-- catalog:denza-z:end -->

## 截图与收录范围

全部作品均有独立的 1440 × 900 桌面默认首屏和 390 × 844 手机界面截图。具体截图条件见各题目的 `task.json` 和页面标注。

截图与构建检查用于展示实际效果、确认画廊集成，不代表提示词中的全部功能或交互均已验证。

仓库收录作品核心源码或已交付的静态页面、运行与构建配置、已有许可说明和展示图片；原交付中的测试、验证报告与临时辅助脚本不收录。作品 README 中保留模型、运行方法和已知提示词差异。

## 仓库结构

```text
gallery.json                         站点信息与模型注册表
README.md                            使用说明与完整作品目录
HANDOFF.md                          当前状态与文档地图
tasks/
  chinese-architecture/              建筑题提示词、元数据与截图
  miniature-railway-town/             铁路题提示词、元数据与截图
  mechanical-keyboard/               键盘题提示词、元数据与截图
  boeing-787/                         Boeing 787 题目说明、元数据与截图
  denza-z/                            腾势 Z Racing 题目说明、元数据与截图
results/
  manifest.json                      全部作品的元数据
  <模型标识>/                         建筑题项目
  miniature-railway-town/<模型标识>/   铁路题项目
  mechanical-keyboard/<模型标识>/     键盘题项目
  boeing-787/<模型标识>/              Boeing 787 题目项目
  denza-z/<模型标识>/                 腾势 Z Racing 题目项目
site/                                画廊、在线预览、对比与展示界面
scripts/
  assemble.mjs                       汇总站点并生成 dist/data.json
  build-static-result.mjs             复制构建静态作品
  check-syntax.mjs / check-intake.mjs 语法检查 / 收录检查
  intake.mjs                         收录一键流程（构建、截图、模型包、检查）
  readme.mjs                         生成本文的数量表与作品目录
  capture-results.mjs                统一截图
  bake-previews.mjs                  卡片模型包生成
docs/
  intake-workflow.md                 作品收录流程
  preview-loading.md                 卡片模型生成与加载说明
  sandtable.md                       中式建筑沙盘说明
  ARCHITECTURE.md                    架构、代码地图与本地验证
  PRODUCT.md / DESIGN.md / IDEAS.md  产品行为 / 界面规范 / 想法库
  archive/                           按日期归档的轮次记录（含模板 _TEMPLATE.md）
.github/workflows/deploy-pages.yml    GitHub Pages 发布流程
dist/                                构建产物，不提交到主分支
```

### 本地结果归档

2026-09-26 已核对桌面现有的铁路与键盘结果文件夹，补齐 7 份遗漏作品，覆盖对应题目的全部 27 份已上线结果。两个目录中的 `RESULTS.md` 提供作品索引，`PROMPT.md` 保存题目原文；Terra 键盘项目保留原有 `aeris-65/` 内层结构。归档范围和验证记录见[本地结果归档核对](docs/archive/2026-09-26-result-folder-archive.md)。

这些桌面目录属于本地归档，仓库运行与发布使用 `results/` 内的项目。

## 添加与更新作品

新作品、模型、题目及已有作品更新的收录步骤和完成清单见[作品收录流程](docs/intake-workflow.md)。该流程包括项目文件清理、模型和厂商登记、桌面与手机真实首屏截图、卡片模型包生成，以及收录检查。

本文开头的数量表和「作品目录」中的表格由 `npm run readme` 按 `results/manifest.json` 生成（`npm run intake` 会自动执行），只改 `catalog` 标记之外的说明文字。常规检查命令：

```bash
npm run check:intake
npm run check
npm run build
```

截图与卡片模型包由 `npm run intake` 生成；命令和格式说明见[卡片模型加载优化](docs/preview-loading.md)。

## 发布

[GitHub Actions 工作流](.github/workflows/deploy-pages.yml)在推送到 `main` 或手动触发时执行依赖安装、语法检查、收录检查和完整构建，并将 `dist/` 发布到 `gh-pages` 分支。GitHub Pages 从该分支的根目录提供站点。
