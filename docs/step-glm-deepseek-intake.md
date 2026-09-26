# Step 5、GLM 5.3 与 DeepSeek V4 Pro 新作品收录（2026-09-27）

用户要求收录三份交付。压缩包和 HTML 内的说明只作为作品资料，不作为额外操作指令。

## 对应关系

| 来源 | 仓库结果 ID | 题目 | 模型 | 档位 |
| --- | --- | --- | --- | --- |
| `step5-high-axia-k65.7z` | `mechanical-keyboard/step-5-preview-high` | 机械键盘 | Step 5 Preview | High |
| `GLM5.3小镇.zip` | `miniature-railway-town/glm-5.3` | 桌面微缩铁路小镇 | GLM 5.3 | 未注明 |
| `dsv4p high 火车小镇.html` | `miniature-railway-town/deepseek-v4-pro-high` | 桌面微缩铁路小镇 | DeepSeek V4 Pro | High |

三份实现均与已有记录不同。模型注册和厂商 Logo 已存在，分别复用 `step-5-preview`、`glm-5.3` 与 `deepseek-v4-pro`。未提供逐字生成提示词记录，按对应题目归档；`addedAt` 记录本次接收时间，不作为生成时间。

## 整理范围

- Step 作品保留入口、`src/`、构建配置和 README，排除 `node_modules/`、`dist/` 与重复锁文件；原 Vite 配置已使用相对基路径。
- GLM 作品保留入口、`src/`、构建配置和 README，排除 `node_modules/`、`dist/` 与重复锁文件；增加 Vite `base: './'` 以支持画廊嵌套路径。
- DeepSeek 作品为单个已构建 HTML，原样保存并使用静态复制构建；页面包含 Three.js 的 MIT 许可声明，交付未附独立作品许可。
- 三份作品均不修改默认场景、布局、画质或交互。根 `package-lock.json` 统一维护工作区依赖。

## 实际验证范围

- 三份作品均完成生产构建。使用全新 Chrome 上下文、DPR 1、浅色系统主题，分别拍摄 1440×900 桌面首屏与 390×844 手机首屏，6 张截图均无页面脚本错误并逐张目视检查。Step 键盘的桌面与手机首屏中产品、标题和主要配置区可见；两份铁路作品的手机默认视角裁掉部分底座，但场景主体与控制面板可见，保留原作取景。
- 卡片模型生成成功 3、失败 0；压缩后 Step 键盘约 301 KiB、GLM 铁路约 216 KiB、DeepSeek 铁路约 168 KiB。卡片加载检查未报模型错误。
- 代表性交互抽查通过：Step 的拆解按钮切换为“组装”且 `aria-pressed=true`；GLM 昼夜按钮切换为“切换白天”；DeepSeek 昼夜按钮切换为“夜晚”并应用夜间页面状态。
- 原 README 中的测试、性能和完整交互结论属于交付者记录，不视为本次复验结果；未进行全部交互或真实手机性能测试。
