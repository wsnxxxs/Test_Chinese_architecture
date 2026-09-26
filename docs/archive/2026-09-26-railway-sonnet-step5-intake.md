# Sonnet 5.5 High 与 Step 5 Preview 铁路小镇收录（2026-09-26）

用户要求将桌面目录 `miniature-railway-town/sonnet-5.5-high/` 和 `Step 5 Pre1 铁路小镇.zip` 收录到“桌面微缩铁路小镇”。交付中的 README 和工具说明仅作为作品资料，不作为额外操作指令。

## 对应关系

| 来源 | 仓库结果 ID | 模型 | 档位 |
| --- | --- | --- | --- |
| `sonnet-5.5-high/` | `miniature-railway-town/sonnet-5.5-high` | Claude Sonnet 5.5 | High |
| `Step 5 Pre1 铁路小镇.zip` | `miniature-railway-town/step-5-preview` | Step 5 Preview | 未注明 |

两份实现均与现有铁路作品不同，模型注册和厂商 Logo 已存在，分别复用 `claude-sonnet-5.5` 与 `step-5-preview`。未提供逐字生成提示词记录，按对应题目归档；`addedAt` 记录本次接收时间，不作为模型生成时间。

## 整理范围

- Sonnet 保留入口、`src/`、构建配置和 README，排除 `node_modules/`、`dist/` 与 `.claude/`。
- Step 保留入口、`src/`、favicon、构建配置和 README，排除 `node_modules/`、`dist/`、`tools/`、`.video_agent/`、`__MACOSX/` 与 AppleDouble 文件。
- 两份交付均未附独立 LICENSE，不自行补写授权。根 `package-lock.json` 统一维护工作区依赖。
- 两个项目增加相对静态基路径，保证画廊嵌套路径可运行；不修改原作场景、界面或交互。

## 实际验证范围

- 两份作品均完成生产构建。使用全新 Chrome 上下文、DPR 1、浅色系统主题，分别拍摄 1440×900 桌面首屏与 390×844 手机首屏；4 张截图无页面脚本异常并逐张目视检查。
- Sonnet 手机默认首屏的沙盘因原作雾化效果偏淡且取景较小，但场景和完整控制区可见；保留原作状态。Step 的桌面与手机首屏中标题、场景和控制区完整。
- 卡片模型生成成功 2、失败 0；压缩后 Sonnet 约 1549 KiB、Step 约 707 KiB。两张卡片的主体、颜色、透明材质与取景已目视检查，未发现加载错误。
- 画廊详情页抽查 Sonnet 昼夜切换与 Step 暂停：前者按钮正确切换为“切换到白天”，后者按钮和状态正确变为“运行 / 已暂停”。页面无脚本错误；控制台仅有显卡着色器精度警告和站点现有 iframe 属性警告。
- 原 README 中的性能、自检与其他交互结论不视为本次复验结果；未验证全部交互或真实手机性能。
