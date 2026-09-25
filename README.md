# 中国古典建筑群 · 多模型作品集

这个仓库收录不同模型针对[同一份任务提示词](PROMPT.md)生成的 Three.js 体素中国古典建筑群。每个结果都是独立项目，根目录提供作品索引和统一部署。

**在线作品目录：<https://wsnxxxs.github.io/Test_Chinese_architecture/>**

## 现有结果

| 模型 | 作品 | 在线场景 | 源码与说明 |
| --- | --- | --- | --- |
| Claude Opus 5.5 High | 云山古刹 | [打开场景](https://wsnxxxs.github.io/Test_Chinese_architecture/results/opus-5.5-high/) | [项目说明](results/opus-5.5-high/README.md) |

Opus 作品有 12 座建筑，包含中轴布局、程序化体素屋顶、庭院道路、昼夜光照与相机环游。具体构成、控制方式、原始运行记录见其独立说明。在线链接会在本仓库下一次 GitHub Pages 发布后生效。

## 运行

需要 Node.js ≥ 18。以下命令在仓库根目录执行：

```bash
npm install
npm run dev       # 构建全部结果并在 http://localhost:5173 打开作品目录
npm run build     # 将作品目录和全部结果构建到 dist/
npm run preview   # 预览已构建的 dist/，默认 http://localhost:4173
npm run check     # 运行当前 Opus 作品的体素检查
npm run dev:opus  # 单独开发 Opus 场景，默认 http://localhost:5173
```

也可以进入 `results/opus-5.5-high/`，独立运行 `npm install`、`npm run dev` 和 `npm run build`。

## 仓库结构

```text
PROMPT.md                  共用任务提示词
results/manifest.json      作品目录元数据
results/opus-5.5-high/     Opus 5.5 High 原作品（独立 Vite 项目）
site/                     作品目录静态页面
scripts/assemble.mjs      将各结果汇总到 dist/
.github/workflows/         GitHub Pages 自动发布
```

## 添加模型结果

1. 在 `results/<模型标识>/` 放入完整、可独立运行的前端项目，提供 `package.json` 的 `build` 脚本和项目 README。标识使用小写字母、数字、点和连字符。
2. 在 `results/manifest.json` 添加 `id`、`model`、`title`、`description`、`cover`。`cover` 是项目目录内的相对图片路径，建议放在 `docs/` 下。
3. 更新根目录上方的结果表格，然后运行 `npm install`、`npm run build` 验证。构建会自动把登记的每个结果放在 `dist/results/<模型标识>/`。

各模型结果保留自己的依赖和实现，不需要改成同一种技术结构。提交时请注明模型与推理档位，并将使用的提示词差异写在该结果的 README 中。
