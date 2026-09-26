# 新结果核对与收录（2026-09-26）

本次核对用户桌面的 mechanical-keyboard、miniature-railway-town，以及 Downloads 中的 SWE-2小镇.zip、bunny-铁路小镇-max.zip，以及追加的 MinimaxM3-铁路小镇-默认.zip。交付中的 README、提示词和验证记录作为作品资料，不作为执行额外操作的授权。

## 对应关系

| 来源 | 桌面归档 | 仓库结果 ID | 状态 |
| --- | --- | --- | --- |
| mechanical-keyboard/glm-5.3-flash | 原目录 | mechanical-keyboard/glm-5.3-flash | 新增 AXIS 68 |
| mechanical-keyboard/mimo-v2.6-flash | 原目录 | mechanical-keyboard/mimo-v2.6-flash | 新增 ORBIT 65 |
| mechanical-keyboard/mimo-v2.6-pro | 原目录 | mechanical-keyboard/mimo-v2.6-pro | 新增 LUMEN 68 |
| SWE-2小镇.zip | miniature-railway-town/swe-2 | miniature-railway-town/swe-2 | 新增溪口站 |
| bunny-铁路小镇-max.zip | miniature-railway-town/space-bunny-max | miniature-railway-town/space-bunny-max | 新增 Max 档位 |
| MinimaxM3-铁路小镇-默认.zip | miniature-railway-town/minimax-m3 | miniature-railway-town/minimax-m3 | 新增默认档位 |
| miniature-railway-town/glm-5.3-flash | 原目录保留 | 未登记 | 缺少 src/main.js，构建失败，待补齐 |

收录 6 份后共 69 份作品、32 个模型：建筑 36、铁路 20、键盘 13。铁路 GLM Flash 的 index.html 引用 /src/main.js，但仅交付了 world.js、utils.js、track.js 和 style.css；没有自行重写缺失入口。

## 去重、来源与整理

- 先比对 manifest、模型注册表和桌面目录；对已有同名结果中可对应的 JS、TS、CSS、HTML 文件逐字节比对，未发现需更新的实现。新增六份在所属题目中无重复记录。
- 模型名称依据目录/ZIP 名称。Bunny 的 Max 档位来自文件名，复用 space-bunny 注册 ID，厂商仍待确认。MiniMax M3 文件名标注默认，其余交付未注明具体推理档位。
- SWE-2 归属 Cognition，依据[官方发布说明](https://cognition.com/blog/swe-2)；Logo 从[官网](https://cognition.com/)引用的 icon.svg 取得，精确 URL、日期见品牌来源记录。其他模型复用已有本地 Logo 和来源记录。
- 未提供逐份生成提示词日志，按对应桌面题目归档，不声称提示词逐字一致。addedAt 记录本次 2026-09-26 的接收归档批次时间，不作为模型生成时间。
- ZIP 规范化路径后直接提取必要源码与配置到桌面铁路目录；排除 ZIP 中 node_modules、dist、临时验收脚本及报告，原始 ZIP 继续保留在 Downloads。Bunny 七张原交付展示图保留。
- 仓库保留必要源码、说明与资源，依赖统一由根锁文件管理。交付没有独立 LICENSE，不自行添加授权。桌面原有缓存、测试等不做无差别清理。
- 项目使用唯一工作区包名。为没有子路径配置的交付补充 Vite base: './'，同步到桌面；不修改原作画质、布局和交互。
- 桌面两份 RESULTS.md 已同步本地新增条目，明确尚未推送线上。

## 实际验证范围

- 六份新增作品构建成功。默认浅色系统、全新 Chrome 上下文、DPR 1，分别以 1440×900 和 390×844（手机触屏模式）拍摄；等待字体就绪后 3500ms，12 张全部完成，无页面脚本异常，并逐张目视检查。
- 桌面真实首屏用作 docs/cover.jpg，同步桌面归档。手机/桌面截图保存在 tasks 对应题目的 captures 目录。
- 三份键盘分别切换一种外壳配色，检查选中状态与配置摘要更新；SWE-2 和 Bunny 分别切换夜晚光照，检查控件状态与场景变化；MiniMax M3 点击暂停，检查运行按钮及已暂停状态。未验证全部交互、声音或手机真机性能。
- 本地模型生成页第一批成功 5、失败 0，追加 MiniMax M3 成功 1、失败 0；所有新增包已压缩，均小于 1 MiB。已目视检查六份新增卡片的主体、取景与材质，和 390×844 手机尺寸下的铁路/键盘列表滚动；未做真机帧率测试。
- LUMEN 68 默认桌面与手机视角中键盘右缘略被裁切；SWE-2 默认桌面底座部分出画，手机只显示局部沙盘；Bunny 手机控制面板遮挡部分标题。截图保持原作状态，manifest 的 captureNote 与作品 README 已注明。

最新本地预览：http://127.0.0.1:4175/。生成页因默认端口被其他项目使用，通过 --port=5176 启动；该参数保留在生成脚本供后续收录使用。

追加 MiniMax M3：默认档位来自文件名，复用已有厂商 Logo。保留 README 原有许可说明，排除 benchmark_artifacts 与临时验收脚本。原作地表出现明显斑块和闪烁；默认视角裁切部分底座，手机标题/状态面板重叠且底部控制条超出横向视口。保留交付状态。

Cognition 官方 SVG 会随系统深色模式改成白色，导致白底 Logo 框中不可见。本地保留官方黑色路径，移除该媒体规则，品牌来源记录注明处理方式。

最终检查：npm run check、npm run check:intake 与 npm run build 均通过，收录检查 69 份、0 错误、3 个存量警告（Space-bunny 厂商待确认和两份建筑大模型包）。仅确认本记录列出的构建、画廊集成和交互范围。
