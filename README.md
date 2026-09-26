# 同题异答 · 模型前端效果对比

把同一份提示词交给不同模型，展示它们生成的可运行前端作品。支持在线运行、并排对比、截图对照，以及查看提示词和源码。

**[打开在线画廊](https://wsnxxxs.github.io/same-prompt-gallery/)** · [作品清单](results/manifest.json) · [模型注册表](gallery.json)

截至 2026-09-26，收录 **3 道题目、63 份作品、31 个模型**。同一模型的不同推理档位分别收录为作品，模型数量按模型注册表统计。

| 题目 | 作品数 | 提示词 | 在线题目页 |
| --- | ---: | --- | --- |
| 体素中国古典建筑群 | 36 | [查看提示词](tasks/chinese-architecture/PROMPT.md) | [浏览作品](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture) |
| 桌面微缩铁路小镇 | 17 | [查看提示词](tasks/miniature-railway-town/PROMPT.md) | [浏览作品](https://wsnxxxs.github.io/same-prompt-gallery/#/miniature-railway-town) |
| 机械键盘 · 交互式产品配置器 | 10 | [查看提示词](tasks/mechanical-keyboard/PROMPT.md) | [浏览作品](https://wsnxxxs.github.io/same-prompt-gallery/#/mechanical-keyboard) |

## 快速运行

需要 Node.js ≥ 22.13。在仓库根目录执行：

```bash
npm install
npm run dev
```

打开 [http://localhost:5173](http://localhost:5173)。`npm run dev` 会先构建全部作品，再启动主站预览服务；修改主站或作品源码后，需要重新构建才能看到更新。

| 命令 | 用途 |
| --- | --- |
| `npm run build` | 构建全部作品并汇总站点到 `dist/` |
| `npm run preview` | 预览已构建的主站，默认地址为 `http://localhost:4173` |
| `npm run check` | 检查画廊页面和汇总脚本的 JavaScript 语法 |
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

首页按题目浏览，模型索引按厂商列出各模型的作品。题目页可按厂商筛选，并切换「作品」「截图对照」「提示词」；作品默认按加入时间从新到旧排列，也可按厂商或模型名称排序。

作品卡片以对应的真实三维模型预览，鼠标移动可轻微转动模型；静止时暂停绘制。「截图对照」继续显示原有静态截图。

在作品卡片上选中两件作品，点击底部对比栏即可并排查看。在线预览支持使用 ← / → 或顶栏按钮切换作品，操作指南可按需展开。中式建筑题目还支持多件作品的三维沙盘与原作展厅。

站点提供暖白与墨色主题，默认跟随系统，可通过顶栏日月按钮切换并保存选择。[品牌标识来源](site/assets/brands/README.md)记录模型标识的来源与下载地址。

### 三维沙盘与原作展厅

这两种展示方式用于中式建筑题目，顶栏切换时携带已选作品。

| 展示方式 | 适合查看 | 展示与操作 |
| --- | --- | --- |
| 三维沙盘（默认入口） | 建筑布局与结构 | 统一相机、展台尺度和光照；支持旋转、平移、缩放、聚焦与俯视；简化原作天空、特效和动画 |
| 原作展厅 | 完整交付效果 | 在可平移、缩放的画布中运行原始页面；进入专注视图后可操作原作相机、光照及其他交互 |

直接进入沙盘时为空，只加载自行选择的作品；也可在题目页选中多件作品后点击「进入沙盘」。选择记录保存在链接中，刷新后恢复。

原作展厅支持搜索、厂商筛选、加入和移除作品。点击作品或「操作原作」进入专注视图，点击「返回画布」或按 Esc 返回，不重新加载作品。总览中的原作以 1280 × 800 页面视口运行，专注视图适配当前可用视口；手机端通过「选择模型」展开侧栏。

沙盘的场景提取仅作用于 `dist/_sandtable/` 的专用副本。正常在线预览与原作展厅使用原始构建页面，保留渲染器、材质、光照、阴影、后期、动画与界面。切换展示方式会重新加载所选作品；展厅内进出专注视图时保留原作交互状态。多件作品同时运行的帧率受设备与并发负载影响，不作为单个模型性能评分。

<details>
<summary>三维沙盘的渲染与性能处理</summary>

沙盘使用固定统一光照，支持旋转、平移、缩放、聚焦与俯视；选择记录在链接中，刷新后恢复。展示环境包含渐变天空、草地、低多边形远山和疏林，随主站明暗主题调整配色；导入建筑时排除原作在光源旁绘制的太阳球体。为优先保证交互流畅，移除昼夜播放、时间调节和动态阴影；静止时停止重绘，像素密度最高为 1。导入时按材质合并兼容的静态不透明部件，保留几何、顶点颜色、纹理与原有实例化；分批处理，避免一次处理全部部件。界面继续使用主站的控件、明暗主题与手机返回入口。

导入直接复制顶点与实例缓冲，避免将大型几何转换为 JSON；专用载入副本只构建场景，不运行原作的 GPU 渲染与阴影。相同内容的材质先去重再合并绘制，轴对齐、相互接触的不透明体素会剔除内部面，旋转部件和透明材质保留原几何。载入按短时间片让出主线程；拖动持续丢帧时自动降低像素密度，最低为 0.55，高负载下画面会稍软。沙盘关闭多重采样抗锯齿，并把默认画布控制在约 120 万像素以内。

这套优化统一用于全部中式建筑作品。大型、不透明且没有纹理的网格还会生成远景细节层级：按位置与法线边界聚合顶点，平均小范围内的颜色，保留发光和材质附加顶点属性。总览距离足够远时使用简化网格，聚焦近看时恢复完整几何；切换距离随画布像素高度变化，并保留缓冲区间，避免来回切换。透明部件、纹理材质及不适合简化的网格继续使用原几何。控制台会记录各作品的绘制对象、完整网格和远景网格三角形数量。

</details>

## 作品目录

各作品保留独立实现与依赖。High、Max、Extra 等表示推理档位。Space-bunny 暂归 MiniMax，厂商身份尚未确认；Doubao Seed Evolving 与 Seed 2.1 Pro 分别收录。

### 体素中国古典建筑群

36 份作品，涉及 30 个模型。Grok、Qwen3.8 Max、Seed 2.1 Pro、Gemini 3.7 Flash，以及新增的 Astra Max、Fable Max、GLM Flash Max 和 MiniMax 日期版本以已构建页面交付，仓库保留其静态资源并提供复制构建脚本。

| 模型 | 作品 | 在线预览 | 源码与说明 |
| --- | --- | --- | --- |
| GPT-6 Astra Max | 栖霞古境 · 体素山河 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/gpt-6-astra-max) | [项目说明](results/gpt-6-astra-max/README.md) |
| Claude Fable 5.1 Max | 体素 · 中式古建筑群 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/claude-fable-5.1-max) | [项目说明](results/claude-fable-5.1-max/README.md) |
| DeepSeek V4.1 Flash E0910 Max | 古城 · 体素中式建筑群 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/deepseek-v4.1-flash-e0910) | [项目说明](results/deepseek-v4.1-flash-e0910/README.md) |
| GLM 5.3 Flash Max | 体素古刹 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/glm-5.3-flash-max) | [项目说明](results/glm-5.3-flash-max/README.md) |
| MiniMax M3 · 2026-09-26 版本 | 体素中式院落 | [打开作品](https://wsnxxxs.github.io/same-prompt-gallery/#/chinese-architecture/minimax-m3-20260926) | [项目说明](results/minimax-m3-20260926/README.md) |
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

新增五份建筑作品来自用户提供的 architecture-gallery.zip，四份重复交付复用原有记录；来源与对应关系见[收录记录](docs/architecture-gallery-import.md)。

### 桌面微缩铁路小镇

17 份作品，涉及 15 个模型。展示闭合铁路、小镇、河流桥梁与列车运行，支持在线运行、并排对比和手机截图预览。

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

### 机械键盘 · 交互式产品配置器

10 份作品，涉及 9 个模型。各模型独立实现产品展示与配置，提供在线运行、并排对比和桌面、手机截图。

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

## 截图与收录范围

全部 58 份作品均有 390 × 844 手机界面截图。键盘题的 10 份作品均有 1440 × 900 默认首屏截图；建筑题有 5 份、铁路题有 4 份作品提供独立首屏截图，其余首屏使用项目预览图。具体截图条件见各题目的 `task.json` 和页面标注。

截图与构建检查用于展示实际效果、确认画廊集成，不代表提示词中的全部功能或交互均已验证。技术栈来自项目依赖，源码与构建体积由汇总脚本统计。

仓库收录作品核心源码或已交付的静态页面、运行与构建配置、已有许可说明和展示图片；原交付中的测试、验证报告与临时辅助脚本不收录。作品 README 中保留模型、运行方法和已知提示词差异。

## 仓库结构

```text
gallery.json                         站点信息与模型注册表
README.md                            使用说明与完整作品目录
tasks/
  chinese-architecture/              建筑题提示词、元数据与截图
  miniature-railway-town/             铁路题提示词、元数据与截图
  mechanical-keyboard/               键盘题提示词、元数据与截图
results/
  manifest.json                      63 份作品的元数据
  <模型标识>/                         建筑题的 36 个项目
  miniature-railway-town/<模型标识>/   铁路题的 17 个项目
  mechanical-keyboard/<模型标识>/     键盘题的 10 个项目
site/                                画廊、在线预览、对比与展示界面
scripts/
  assemble.mjs                       汇总站点并生成 dist/data.json
  build-static-result.mjs             复制构建静态作品
docs/result-folder-archive.md         本地结果归档核对记录
.github/workflows/deploy-pages.yml    GitHub Pages 发布流程
dist/                                构建产物，不提交到主分支
```

### 本地结果归档

2026-09-26 已核对桌面现有的铁路与键盘结果文件夹，补齐 7 份遗漏作品，覆盖对应题目的全部 27 份已上线结果。两个目录中的 `RESULTS.md` 提供作品索引，`PROMPT.md` 保存题目原文；Terra 键盘项目保留原有 `aeris-65/` 内层结构。归档范围和验证记录见[本地结果归档核对](docs/result-folder-archive.md)。

这些桌面目录属于本地归档，仓库运行与发布使用 `results/` 内的项目。

## 添加作品

1. **放入项目。** 建筑题使用 `results/<结果标识>/`，铁路与键盘题使用 `results/<题目标识>/<结果标识>/`。提供 `package.json`、`build` 脚本和 README；工作区包名必须唯一。结果标识使用小写字母、数字、点和连字符。
2. **登记元数据。** 在 [results/manifest.json](results/manifest.json) 添加 `id`、`model`、`title`、`description`、`cover`、`addedAt`。铁路与键盘作品填写 `task`；未填写时归入建筑题。`cover` 为项目内的相对图片路径，建议放在 `docs/`。`addedAt` 使用带时区的 ISO 8601 时间，例如 `2026-09-26T12:00:00+10:00`；缺少时间的作品排在最后。不同推理档位使用不同结果标识，并填写共同的 `modelId` 与各自的 `effort`。
3. **登记模型。** 新模型加入 [gallery.json](gallery.json)，填写名称、厂商与品牌标识；已有模型复用注册表中的模型 ID。同一模型可以在不同题目下复用结果标识。
4. **补充截图与说明。** 将题目条件对应的截图放在 `tasks/<题目标识>/captures/<结果标识>/<条件标识>.jpg`，如 `first.jpg`、`mobile.jpg`。README 写明模型、推理档位、运行方式、提示词差异及实际验证范围，并更新本文作品目录。
5. **构建核对。** 在仓库根目录运行 `npm install`、`npm run check` 和 `npm run build`，通过 `npm run preview` 检查作品入口与截图。构建结果位于 `dist/results/`，站点数据位于 `dist/data.json`。

添加新题目时，先创建 `tasks/<题目标识>/task.json` 与提示词文件，配置标题、日期、标签、截图条件和事实字段；同日题目可用 `order` 指定先后顺序。在根 `package.json` 的 `workspaces` 中加入 `results/<题目标识>/*`，再按上述步骤收录作品。

## 发布

[GitHub Actions 工作流](.github/workflows/deploy-pages.yml)在推送到 `main` 或手动触发时执行依赖安装、语法检查和完整构建，将 `dist/` 发布到 `gh-pages` 分支。GitHub Pages 需配置为从该分支的根目录提供站点。
