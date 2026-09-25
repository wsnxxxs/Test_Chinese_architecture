# 同题异答 · 模型前端效果对比

本站使用原来的“同题异答”前端，展示不同模型针对[同一份任务提示词](tasks/chinese-architecture/PROMPT.md)生成的 Three.js 体素中国古典建筑群。可查看作品、在线运行、并排对比、浏览截图与源码。

**在线站点：<https://wsnxxxs.github.io/Test_Chinese_architecture/>**

## 现有结果

| 模型 | 作品 | 在线场景 | 源码与说明 |
| --- | --- | --- | --- |
| Claude Opus 5.5 High | 云山古刹 | [打开场景](https://wsnxxxs.github.io/Test_Chinese_architecture/#/chinese-architecture/opus-5.5-high) | [项目说明](results/opus-5.5-high/README.md) |
| Claude Sonnet 5.5 Max | 云栖古刹 | [打开场景](https://wsnxxxs.github.io/Test_Chinese_architecture/#/chinese-architecture/sonnet-5.5-max) | [项目说明](results/sonnet-5.5-max/README.md) |
| Claude Sonnet 5.5 High | 体素古寺 | [打开场景](https://wsnxxxs.github.io/Test_Chinese_architecture/#/chinese-architecture/sonnet-5.5-high) | [项目说明](results/sonnet-5.5-high/README.md) |
| MIMO V2.6 Pro | 体素中华 | [打开场景](https://wsnxxxs.github.io/Test_Chinese_architecture/#/chinese-architecture/mimo-v2.6-pro) | [项目说明](results/mimo-v2.6-pro/README.md) |
| DeepSeek V4.1 Flash | 古城 · 体素中式建筑群 | [打开场景](https://wsnxxxs.github.io/Test_Chinese_architecture/#/chinese-architecture/deepseek-v4.1-flash) | [项目说明](results/deepseek-v4.1-flash/README.md) |
| GLM 5.3 Flash | 体素古刹 | [打开场景](https://wsnxxxs.github.io/Test_Chinese_architecture/#/chinese-architecture/glm-5.3-flash) | [项目说明](results/glm-5.3-flash/README.md) |
| GLM 5.3 | 古刹夕照 | [打开场景](https://wsnxxxs.github.io/Test_Chinese_architecture/#/chinese-architecture/glm-5.3) | [项目说明](results/glm-5.3/README.md) |
| HY3 | 体素中国古典建筑群 | [打开场景](https://wsnxxxs.github.io/Test_Chinese_architecture/#/chinese-architecture/hy3) | [项目说明](results/hy3/README.md) |
| Kimi K3 | 体素 · 中式古典建筑群 | [打开场景](https://wsnxxxs.github.io/Test_Chinese_architecture/#/chinese-architecture/kimi-k3) | [项目说明](results/kimi-k3/README.md) |
| Kimi K2.8 Preview | 体素 · 中国古典建筑群 | [打开场景](https://wsnxxxs.github.io/Test_Chinese_architecture/#/chinese-architecture/kimi-k2.8-preview) | [项目说明](results/kimi-k2.8-preview/README.md) |
| DeepSeek V4 Pro | 体素 · 中国古典建筑群 | [打开场景](https://wsnxxxs.github.io/Test_Chinese_architecture/#/chinese-architecture/deepseek-v4-pro) | [项目说明](results/deepseek-v4-pro/README.md) |
| MiniMax M3 | 体素中式院落 | [打开场景](https://wsnxxxs.github.io/Test_Chinese_architecture/#/chinese-architecture/minimax-m3) | [项目说明](results/minimax-m3/README.md) |
| GPT-6 Sol Max | 云阙宫 | [打开场景](https://wsnxxxs.github.io/Test_Chinese_architecture/#/chinese-architecture/gpt-6-sol-max) | [项目说明](results/gpt-6-sol-max/README.md) |
| GPT-6 Sol High | 云阙 · 体素古建 | [打开场景](https://wsnxxxs.github.io/Test_Chinese_architecture/#/chinese-architecture/gpt-6-sol-high) | [项目说明](results/gpt-6-sol-high/README.md) |
| GPT-6 Luna Max | 云岚宫阙 | [打开场景](https://wsnxxxs.github.io/Test_Chinese_architecture/#/chinese-architecture/gpt-6-luna-max) | [项目说明](results/gpt-6-luna-max/README.md) |
| GPT-5.6 Sol Max | 紫宸宫阙 | [打开场景](https://wsnxxxs.github.io/Test_Chinese_architecture/#/chinese-architecture/gpt-5.6-sol-max) | [项目说明](results/gpt-5.6-sol-max/README.md) |
| GPT-5.6 Luna Max | 云岚寺 | [打开场景](https://wsnxxxs.github.io/Test_Chinese_architecture/#/chinese-architecture/gpt-5.6-luna-max) | [项目说明](results/gpt-5.6-luna-max/README.md) |
| GPT-5.6 Terra Max | 云岫古寺 | [打开场景](https://wsnxxxs.github.io/Test_Chinese_architecture/#/chinese-architecture/gpt-5.6-terra-max) | [项目说明](results/gpt-5.6-terra-max/README.md) |
| GPT-6 Astra High | 方寸之间 · 云栖古寺 | [打开场景](https://wsnxxxs.github.io/Test_Chinese_architecture/#/chinese-architecture/gpt-6-astra-high) | [项目说明](results/gpt-6-astra-high/README.md) |

共 19 个结果，17 个模型。各作品保留独立实现；Kimi K3 使用原生静态页面，其余结果通过 Vite 构建。原有 4 个作品保留统一条件截图；新增作品先展示各项目随附的预览图。

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

也可以进入任一 `results/<模型标识>/` 目录，独立运行 `npm install`、`npm run dev` 和 `npm run build`。

## 仓库结构

```text
gallery.json                              站点名称与模型注册表
tasks/chinese-architecture/task.json     题目信息、原有作品的详细数据与截图条件
tasks/chinese-architecture/captures/     原有作品的统一条件截图
results/manifest.json                    19 个结果的简要目录
results/                                  19 个独立前端项目
site/                                     原版“同题异答”前端
scripts/assemble.mjs                     汇总结果并生成 dist/data.json
.github/workflows/                        GitHub Pages 自动发布
```

## 添加模型结果

1. 在 `results/<模型标识>/` 放入完整、可独立运行的前端项目，提供 `package.json` 的 `build` 脚本和项目 README。标识使用小写字母、数字、点和连字符。
2. 在 `results/manifest.json` 添加 `id`、`model`、`title`、`description`、`cover`。`cover` 是项目目录内的相对图片路径，建议放在 `docs/` 下。若模型有单独的推理档位，可另填 `modelId`、`effort`。
3. 在 `gallery.json` 注册新模型，并更新上方表格。运行 `npm install`、`npm run build` 验证。构建会把结果放在 `dist/results/<模型标识>/`，并生成同题异答的数据文件。

各模型结果保留自己的依赖和实现，不需要改成同一种技术结构。提交时请注明模型与推理档位，并将使用的提示词差异写在该结果的 README 中。
