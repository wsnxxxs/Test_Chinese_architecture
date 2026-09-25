# 同题异答 · 模型前端效果对比

把同一份提示词交给不同模型，收录它们生成的可运行前端项目，放在一起对照：在线运行、按统一条件自动截图、并排预览、查看源码。

**在线站点：<https://wsnxxxs.github.io/Test_Chinese_architecture/>**

## 站点里有什么

| 页面 | 地址 | 内容 |
| --- | --- | --- |
| 首页 | `#/` | 全部题目（每题的结果缩略图、参与模型）与全部模型（各自参与过的题目） |
| 题目页 | `#/<题目>` | 结果卡片、统一条件下的截图对照（可放大，←/→ 换结果、↑/↓ 换条件）、参数对比表、原始提示词 |
| 在线预览 | `#/<题目>/<结果>` | 全屏运行该结果；顶栏切换同题的其他结果，右侧是该页面的操作指南和快速跳转 |
| 并排对比 | `#/<题目>/<结果A>/vs/<结果B>` | 两个结果左右并排同时运行 |

预览页快捷键：`←/→` 切换结果，`G` 指南，`S` 并排，`F` 全屏，`R` 重新载入。

## 现有题目

| 题目 | 结果 |
| --- | --- |
| [体素中国古典建筑群](tasks/chinese-architecture/PROMPT.md) | Claude Opus 5.5 High「云山古刹」 · Claude Sonnet 5.5 Max「云栖古刹」 · Claude Sonnet 5.5 High「体素古寺」 · MiMo V2.6 Pro「体素中华」 |

## 本地运行

需要 Node.js ≥ 18。

```bash
npm install
npm run build      # 安装并构建每个结果，再生成站点到 dist/
npm run preview    # 打开 http://localhost:4173
npm run site       # 只改了站点或 task.json 时用：跳过结果构建，重新生成站点并预览
npm run check      # 校验数据，并运行各结果自带的 check 脚本
npm run capture    # 为所有结果生成统一截图（需先 build）
```

每个结果都是独立项目，有自己的依赖和锁文件，也可以进入 `tasks/<题目>/results/<结果>/` 单独 `npm install && npm run dev`。

## 仓库结构

```text
gallery.json                       站点标题、仓库地址、模型注册表
tasks/<题目>/
  task.json                        题目信息、截图条件、对比字段、结果列表
  PROMPT.md                        交给模型的原始提示词
  results/<结果>/                  模型生成的完整前端项目（原样保留）
  captures/<结果>/<条件>.jpg       npm run capture 生成的统一截图
site/                              站点前端（单页应用，无依赖）
scripts/build.mjs                  构建结果、统计源码与产物体积、组装 dist/
scripts/capture.mjs                用 Playwright 按统一条件截图
.github/workflows/deploy-pages.yml 推送后自动构建并发布到 gh-pages
```

## 添加一道新题目

1. 新建 `tasks/<题目 id>/`，放入 `PROMPT.md`。id 使用小写字母、数字、点和连字符。
2. 写 `task.json`：

   ```jsonc
   {
     "title": "题目名",
     "summary": "一句话说明要做什么",
     "prompt": "PROMPT.md",
     "date": "2026-10-01",                 // 首页按日期倒序排列
     "tags": ["React", "表单"],
     "conditions": [                       // 统一截图条件，第一个会作为结果封面
       { "id": "first", "label": "桌面首屏", "note": "1440×900，打开后不操作" },
       { "id": "mobile", "label": "手机首屏", "viewport": [390, 844], "mobile": true }
     ],
     "facts": [{ "id": "features", "label": "功能" }],   // 参数表的行；源码行数和构建体积会自动统计
     "factsNote": "数据来源说明",
     "results": []
   }
   ```

3. 按下一节添加结果。

## 添加一个结果

1. 把模型生成的项目放到 `tasks/<题目>/results/<结果 id>/`。要求：`package.json` 有 `build` 脚本，产物输出到 `dist/`，且使用相对路径（Vite 设 `base: './'`），因为站点会把它放在子目录下。
2. 如果是新模型，先在 `gallery.json` 的 `models` 里登记 `id`、`name`、`vendor`。
3. 在 `task.json` 的 `results` 里添加一项：

   ```jsonc
   {
     "id": "opus-5.5-high",
     "model": "claude-opus-5.5",           // gallery.json 中的模型 id
     "effort": "High",                     // 推理档位，可留空
     "title": "作品名",
     "summary": "两三句介绍",
     "facts": { "features": "…" },         // 对应题目的 facts
     "gallery": [{ "src": "docs/a.jpg", "caption": "说明" }],   // 结果目录内的作者截图，可选
     "guide": {                            // 预览页右侧的操作指南，可选
       "sections": [{ "title": "鼠标", "items": [["左键拖动", "旋转"]] }],
       "tips": ["值得一看的地方"],
       "presets": [{ "label": "夜晚", "query": "t=21" }]    // 用页面自带 URL 参数重新载入
     },
     "capture": {                          // 每个截图条件怎么达到，可选
       "query": "q=high",                  // 所有条件都附加的 URL 参数
       "wait": 8000,                       // 载入后等待毫秒数
       "night": { "query": "t=21" },       // 或 { "steps": [{ "click": "#night" }, { "wait": 2000 }] }
       "mobile": false                     // 该结果不参与此条件
     },
     "aliases": []                         // 旧地址，会生成跳转页
   }
   ```

4. 运行 `npm run build && npm run capture <题目> <结果 id>`，然后 `npm run preview` 检查，把截图和代码一起提交。

截图在无 GPU 的无头 Chromium（SwiftShader）中生成，重型 3D 场景的光影与帧率可能不及真实设备。旧地址 `results/<结果>/` 会自动跳转到新位置。
