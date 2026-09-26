# 本地结果归档核对

核对日期：2026-09-26。以线上画廊的 `data.json` 和仓库 `results/manifest.json` 为准，整理用户已有的两个桌面结果目录。

| 题目 | 本地目录 | 已上线作品 | 归档覆盖 |
| --- | --- | --- | --- |
| 桌面微缩铁路小镇 | `C:/Users/Ryan/Desktop/miniature-railway-town/` | 17 | 17 |
| 机械键盘 | `C:/Users/Ryan/Desktop/mechanical-keyboard/` | 10 | 10 |

## 补齐的作品

| 题目 | 模型目录 | 原状态 |
| --- | --- | --- |
| 铁路小镇 | `mimo-v2.6-flash` | 空目录 |
| 铁路小镇 | `mimo-v2.6-pro` | 空目录 |
| 铁路小镇 | `deepseek-v4.1-flash-extra` | 缺少目录 |
| 铁路小镇 | `doubao-seed-evolving` | 缺少目录 |
| 机械键盘 | `astra-pro` | 空目录 |
| 机械键盘 | `longcat-2.5` | 缺少目录 |
| 机械键盘 | `deepseek-v4.1-flash` | 空目录 |

从仓库复制上述作品的已跟踪源码、项目配置、说明与封面。归档版 README 使用本地提示词链接和独立运行命令；两份单文件 DeepSeek 作品附带本地复制构建脚本，消除对画廊仓库外层脚本的依赖。画廊源码与线上页面保持原有内容。

两个题目目录均添加 `PROMPT.md` 和 `RESULTS.md`，后者列出全部已上线作品的项目说明与在线地址。提示词作为作品资料归档。

Terra 的键盘项目继续保留在 `gpt-5.6-terra-max/aeris-65/`，外层新增 README 指向完整项目并说明运行方法。其他已有项目、原始交付和待交付空目录保留。

## 验证

- 线上铁路 17 份、键盘 10 份作品均与仓库清单对应；每份本地项目均有 `package.json`、`README.md` 和 `index.html`。
- 新补齐的 7 份作品分别执行 `npm install` 和 `npm run build`，全部成功，并生成各自的锁文件与构建产物。
- 对新归档的 73 个源码与图片文件进行 SHA-256 核对，与仓库一致；适配后的 README 和运行配置单独保留。
- 此次验证确认归档完整性与独立构建，不包含产品交互测试，也不覆盖原有作品与仓库之间的全部内容差异。

## 本次新增结果归档

本地键盘现有 13 份已收录项目，铁路 20 份。SWE-2、Space-bunny Max 与 MiniMax M3 从 Downloads 的 ZIP 整理到桌面铁路目录，三个新键盘保留原目录；铁路 GLM Flash 缺少入口，保留目录并标为待补齐。新增六份的真实封面和收录说明已同步桌面，RESULTS.md 区分本地新增与已上线作品。详见 [新结果核对记录](new-results-2026-09-26.md)。
