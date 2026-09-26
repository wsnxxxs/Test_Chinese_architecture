# 作品收录流程

适用于新作品、新模型、新题目及已有作品更新。按顺序执行；截图与卡片模型包是收录交付的一部分。

## 1. 核对交付与去重

- 确认题目、提示词原文、模型名称、版本、推理档位、交付日期及来源。
- 先查 `results/manifest.json` 和 `gallery.json`，再比对已有源码或静态资源。相同交付复用已有记录；不同版本、推理档位或实际不同的实现分别登记，不能仅凭文件夹名称判断重复。
- 不确定的厂商、版本与提示词差异明确记录，不猜测。来源及大批导入对应关系写入当轮 `docs/archive/` 记录，单份作品情况写入作品 README。

## 2. 整理必要项目文件

| 保留 | 清理 |
| --- | --- |
| 核心源码、入口、实际引用的图片/字体/模型/着色器 | `node_modules/`、构建缓存、`.vite/`、`__pycache__/` |
| `package.json`、构建配置、必要工具脚本 | 原交付的测试、浏览器报告、验证目录、临时脚本 |
| README、LICENSE、第三方许可与素材署名 | 日志、录屏、临时截图、备份副本、ZIP 压缩包 |
| 封面、正式展示截图 | 作品目录内的 `package-lock.json` 等重复锁文件、无法复现的机器绝对路径配置 |
| 仅有已构建页面的交付：`index.html`、`assets/` 等原始静态资源 | 可重新生成的 `dist/`（不要误删静态交付唯一的原始资源） |

先核对代码、构建脚本和元数据引用，再删除不需要的文件。静态交付按现有 `build-static-result.mjs` 复制构建，README 写明没有原始源码。根 `package-lock.json` 统一维护工作区依赖；构建或运行确实需要的脚本必须保留。

本地依赖和 `dist/` 是工作工具，不提交。操作结束后清理本次产生的 `output/`、`.playwright-cli/` 和日志；不能使用无差别的 `git clean -fdx`，不能删除仍被其他进程使用的目录或桌面原始交付。

## 3. 登记作品、模型与品牌

- 建筑项目放 `results/<id>/`，其他题目放 `results/<task>/<id>/`；包名唯一，`build` 脚本可从仓库工作区运行。
- 在 manifest 填写 `id`、`task`（建筑原有布局省略）、`model`、`modelId`（模型与作品 ID 不同时）、`effort`、`title`、`description`、`cover`、带时区的 `addedAt`。注册表中的模型 ID 在不同题目与档位之间复用。
- 新模型核对 `gallery.json` 中的 `name`、`vendor`、`logo`、`brandName`、`brandUrl`。同厂商可复用已有本地 Logo；新厂商从官方页面取标识，在 `site/assets/brands/README.md` 记录来源页面、原始资源 URL 和取得日期。
- 目视检查 Logo 可显示，透明背景在明暗主题下均清楚，品牌链接正确。厂商待确认时保留 `vendorNote`，不能把临时归类说成官方确认。
- 作品 README 写明模型、档位、来源、运行与构建方式、已知差异、实际验证范围。manifest 的 `model` 即主 README 目录中显示的模型名（含档位及 `· Arena`、日期版本等区分）；主 README 的数量与目录表由 `npm run readme` 生成，`npm run intake` 会自动执行，不手改 `catalog` 标记内的内容。新题目需在主 README「作品目录」下加标题、说明文字和一对 `<!-- catalog:<题目>:start -->` / `<!-- catalog:<题目>:end -->` 标记；提示词未随交付提供时在 `task.json` 设 `"promptPending": true`。
- 新题目先建提示词与 `task.json`，加入根 `workspaces`；需要三维沙盘/原作展厅时设 `"sandtable": true`，卡片模型沿用建筑或铁路的提取取景规则时设 `"sceneProfile": "architecture"` 或 `"railway"`，其余不填；配置 `first` 为 1440×900、`mobile` 为 390×844，题目 ID、结果 ID、模型 ID 各自保持一致。

## 4. 一键构建、截图、生成模型包与检查

登记完成后执行 `npm install`（新增工作区时更新根 `package-lock.json`），然后一条命令处理机械步骤：

```bash
# 单份
npm run intake -- --id=miniature-railway-town/astra-pro

# 批量，可跨题目；--task=<题目> 可选中整道题
npm run intake -- --id=mechanical-keyboard/kimi-k3-max,miniature-railway-town/glm-5.3

# 作品更新后重拍截图、重生成模型包
npm run intake -- --id=miniature-railway-town/astra-pro --force
```

`scripts/intake.mjs` 依次执行：只构建选中作品（及本机尚无 `dist/` 的作品）→ 汇总站点 → 自起预览服务并截图 → 无头浏览器生成卡片模型包 → 再次汇总 → 刷新主 README 目录 → 收录检查。默认只补缺失的截图和模型包，可重复运行；任一步失败以非零状态结束并列出失败步骤。可附加 `--wait=6000`、`--condition=first`、`--browser=chromium`、`--port=4174`。单步命令 `capture:results`、`bake:previews`（加 `--auto` 无头运行）、`check:intake` 同样支持上述 `--id` 写法。

截图规则：全新浏览器上下文、DPR 1、浅色系统主题、默认页面状态，手机模式启用触屏；等待加载与字体就绪后再等 3500 ms，保存为 `tasks/<task>/captures/<id>/first.jpg` 与 `mobile.jpg`；不隐藏 UI、不点击按钮、不使用封面代替首屏。慢速场景加长等待并在 README 或 `captureNote` 中注明。无 Chrome 时运行 `npx playwright install chromium` 并传 `--browser=chromium`。

模型包保存在 `site/assets/scenes/<task>/<id>.sbox` 并提交；导入的九份原始模型包受到保护，`--force` 不覆盖。生成流程复用现有远景简化、体素合并、属性量化和小尺寸纹理；不能把完整原作动画和重建工作放到普通卡片加载中。

## 5. 人工核对

命令结束时列出本次截图路径。脚本不能替代以下检查：

- 每张新截图目视核对：场景已出现，没有加载遮罩/空白/报错，桌面控件完整，手机界面没有明显截断；作品本身有问题时如实说明。
- `npm run preview` 打开画廊，核对作品直接入口 `/results/.../`、详情、截图对照与源码链接；留意外部 CDN 请求、缺失资源和控制台报错。原作需要最小兼容修复时在 README 说明，不为统一截图改变默认布局、画质或交互。
- 卡片模型：主体、颜色、透明材质、底座、取景范围，特别留意天空/巨型地面/闲置粒子把作品缩得过小；桌面鼠标转动、手机滚动。单包超过 3 MiB 时检查手机加载，阈值只提示人工检查。预览失败时优先修复提取或模型包，不修改原作。
- 每份作品抽查一项关键交互（例如旋转、昼夜或产品配置），按实际范围记录，不能凭截图宣称功能全通过。

## 6. 批量收录与多人并行

一次收录多份时，先把每份的第 1–3 步做完，再对全部作品运行一次 `npm run intake`，比逐份跑完整流程快。

多个 AI 会话并行时，按文件归属分工以避免冲突：

- 可并行（每个会话只动自己作品的文件）：去重核对、整理 `results/<task>/<id>/`、写作品 README，并把拟登记的 manifest 条目与模型注册写在交接说明里。
- 由一个会话串行完成（共享文件）：`results/manifest.json`、`gallery.json`、根 `package.json` 与 `package-lock.json`、`HANDOFF.md` 与归档记录；主 README 目录由 intake 生成，合并冲突时重新运行 `npm run readme` 即可；然后一次运行 `npm run intake` 覆盖全部新作品。

## 7. 收录检查与提交

```bash
npm run check
npm run check:intake
npm run build
git diff --check
```

检查命令核对登记、包名、主 README 目录是否为最新、必要文件、两种截图、Logo 文件与来源记录，以及可解压、非空且已压缩的模型包；也检查已跟踪作品目录中的临时文件。厂商待确认、大模型包以警告提示人工处理。文件检查不能替代构建和目视检查，也不会自动删除文件。

确认新资源都已加入 Git，检查变更范围，清理本次临时产物，用英文简单句提交一条 commit。GitHub Actions 会在发布前运行收录检查；推送或发布按用户授权执行。

### 完成清单

- [ ] 已去重，题目、模型、档位、来源与时间正确
- [ ] 仅保留必要项目资源，许可与署名保留
- [ ] 包名唯一，依赖与构建可复现，静态子路径可用
- [ ] 桌面与手机真实首屏齐全，已逐张目视检查
- [ ] 模型已注册，本地厂商 Logo 与来源记录齐全
- [ ] 卡片模型包已生成、压缩并核对，手机滚动无明显阻塞
- [ ] 作品 README 与实际验证说明已写，主 README 目录已由脚本刷新
- [ ] 检查与构建通过，临时产物已清理，已提交 Git

## 本次存量核对（2026-09-26）

- 63 份作品已有手机截图和模型包；补齐建筑 26 份、铁路 13 份桌面首屏，共 39 张，逐张目视核对场景和界面；重新拍摄铁路 Astra Pro 手机首屏，核对手机模式截图。
- 31 个模型的本地 Logo 文件与来源记录齐全；Space-bunny 的厂商仍待确认。Sonnet 5.5 Max（4.17 MiB）与 Fable 5.1 Max（5.80 MiB）模型包触发体积提示，保留人工性能复核。
- 63 个工作区完整构建及语法检查通过；收录检查为 0 错误、3 警告。曾缺少的 39 张首屏均被检查命令正确报出。
- 本地 Chrome 检查三道题目的首批卡片及手机尺寸下建筑卡片滚动：模型正常显示，无卡片加载错误、无页面脚本错误、无重新建模 iframe。这是浏览器集成检查，不是实际手机帧率测试或全部作品交互验证。
