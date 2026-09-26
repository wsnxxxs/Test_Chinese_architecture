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
- README 写明模型、档位、来源、运行与构建方式、已知差异、实际验证范围。同步更新主 README 的作品目录与数量。
- 新题目先建提示词与 `task.json`，加入根 `workspaces`；需要三维沙盘/原作展厅时设 `"sandtable": true`，卡片模型沿用建筑或铁路的提取取景规则时设 `"sceneProfile": "architecture"` 或 `"railway"`，其余不填；配置 `first` 为 1440×900、`mobile` 为 390×844，题目 ID、结果 ID、模型 ID 各自保持一致。

## 4. 安装与构建

```bash
npm install
npm run check
npm run build
npm run preview -- --host 127.0.0.1 --port 4173
```

核对作品直接入口 `/results/.../`、画廊详情、截图对照与源码链接。检查资源相对路径，确保 GitHub Pages 的仓库子路径可用；留意运行时外部 CDN 请求、缺失资源和控制台报错。原作需要最小兼容修复时在 README 说明，不为了统一截图而改变作品默认布局、画质或交互。

## 5. 补齐桌面与手机截图

预览服务保持运行，在另一个终端执行：

```bash
# 默认只补缺失图片，使用本机 Chrome
npm run capture:results -- --task=miniature-railway-town --id=astra-pro

# 作品更新后重拍两种首屏
npm run capture:results -- --task=miniature-railway-town --id=astra-pro --force
```

脚本使用全新浏览器上下文、DPR 1、浅色系统主题、默认页面状态，手机模式启用触屏。等待页面加载与字体就绪后再等待 3500 ms，保存为 `tasks/<task>/captures/<id>/first.jpg` 与 `mobile.jpg`；不隐藏 UI、不点击按钮、不使用封面代替首屏。

可使用 `--condition=first` 或 `--condition=mobile`、`--wait=6000`、`--url=http://127.0.0.1:4173/`。慢速场景加长等待并在 README 或 `captureNote` 中注明；URL 可含部署子路径。无 Chrome 时运行 `npx playwright install chromium` 并传 `--browser=chromium`。

每张新图都要目视核对：场景已出现、没有加载遮罩/空白/报错，桌面控件完整，手机界面没有明显截断；作品本身有问题时如实说明。关键交互（例如旋转、昼夜或产品配置）检查一项即可按实际范围记录，不能凭截图宣称功能全通过。脚本失败会以非零状态退出，不能直接跳过失败项。

## 6. 生成并优化卡片小模型

```bash
npm run bake:previews -- --task=miniature-railway-town --id=astra-pro
```

打开终端显示的本地生成页，点击「开始生成」，确认成功且失败数为 0。已有提取模型更新时加 `--force`；导入的九份原始模型包受到保护，`--force` 不覆盖它们，原始包需要随新的交付显式替换。完成后执行：

```bash
node scripts/assemble.mjs
```

模型包保存在 `site/assets/scenes/<task>/<id>.sbox` 并提交。生成流程复用现有远景简化、体素合并、属性量化和小尺寸纹理；不能把完整原作动画和重建工作放到普通卡片加载中。

检查卡片主体、颜色、透明材质、底座、取景范围；特别留意天空/巨型地面/闲置粒子把作品缩得过小。核对桌面鼠标转动、手机滚动及切换题目；静止时停止绘制，离屏模型可回收。单包超过 3 MiB 时检查手机加载与交互，阈值只提示人工检查，不是统一质量评分。预览失败时优先修复提取或模型包，不修改原作降低展示质量。

## 7. 收录检查与提交

```bash
npm run check:intake -- --task=miniature-railway-town --id=astra-pro
npm run check:intake
npm run check
npm run build
git diff --check
```

检查命令核对登记、包名、必要文件、两种截图、Logo 文件与来源记录，以及可解压、非空且已压缩的模型包；也检查已跟踪作品目录中的临时文件。厂商待确认、大模型包以警告提示人工处理。文件检查不能替代构建和目视检查，也不会自动删除文件。

确认新资源都已加入 Git，检查变更范围，清理本次临时产物，用英文简单句提交一条 commit。GitHub Actions 会在发布前运行收录检查；推送或发布按用户授权执行。

### 完成清单

- [ ] 已去重，题目、模型、档位、来源与时间正确
- [ ] 仅保留必要项目资源，许可与署名保留
- [ ] 包名唯一，依赖与构建可复现，静态子路径可用
- [ ] 桌面与手机真实首屏齐全，已逐张目视检查
- [ ] 模型已注册，本地厂商 Logo 与来源记录齐全
- [ ] 卡片模型包已生成、压缩并核对，手机滚动无明显阻塞
- [ ] README、作品数量、目录及实际验证说明已同步
- [ ] 检查与构建通过，临时产物已清理，已提交 Git

## 本次存量核对（2026-09-26）

- 63 份作品已有手机截图和模型包；补齐建筑 26 份、铁路 13 份桌面首屏，共 39 张，逐张目视核对场景和界面；重新拍摄铁路 Astra Pro 手机首屏，核对手机模式截图。
- 31 个模型的本地 Logo 文件与来源记录齐全；Space-bunny 的厂商仍待确认。Sonnet 5.5 Max（4.17 MiB）与 Fable 5.1 Max（5.80 MiB）模型包触发体积提示，保留人工性能复核。
- 63 个工作区完整构建及语法检查通过；收录检查为 0 错误、3 警告。曾缺少的 39 张首屏均被检查命令正确报出。
- 本地 Chrome 检查三道题目的首批卡片及手机尺寸下建筑卡片滚动：模型正常显示，无卡片加载错误、无页面脚本错误、无重新建模 iframe。这是浏览器集成检查，不是实际手机帧率测试或全部作品交互验证。

本地默认生成端口被占用时，可运行 `npm run bake:previews -- --port=5176`；按终端显示的地址打开生成页。
