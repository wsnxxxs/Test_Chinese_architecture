# APEX-65 · 交互式机械键盘配置器

原创紧凑布局（65%）机械键盘的交互式产品展示与配置页面。使用 Three.js 实时渲染 3D 键盘模型，HTML/CSS 原生界面承载配置操作。

## 功能特性

- **完整 3D 键盘模型**：62 枚梯形键帽（含字符）、定位板、PCB、底壳四层结构
- **三种外壳配色 × 三种键帽主题**：任意组合，实时预览
- **拆解/组装动画**：键帽、定位板、底壳三层平滑展开与复原
- **键盘体验模式**：按下 A—Z / 空格 / 方向键，对应键帽下压回弹；触屏可点击键帽
- **视角控制**：拖拽旋转、滚轮缩放、一键复位
- **本地持久化**：配置保存到 localStorage，刷新后自动恢复
- **响应式布局**：桌面端双栏，移动端单栏堆叠

## 技术栈

- [Three.js](https://threejs.org/) r160 — 3D 渲染
- [Vite](https://vitejs.dev/) v5 — 构建工具
- 原生 HTML / CSS / JavaScript — UI 层

## 安装与启动

```bash
# 安装依赖
npm install

# 开发模式（热更新）
npm run dev
# 打开 http://localhost:5173

# 生产构建
npm run build

# 预览构建产物
npm run preview
```

## 项目结构

```
keyboard-showcase/
├── index.html              # 页面入口
├── package.json
├── vite.config.js
├── src/
│   ├── main.js             # 应用入口，事件绑定
│   ├── style.css           # 全局样式
│   ├── keyboard/
│   │   ├── KeyboardScene.js    # Three.js 场景管理（核心）
│   │   ├── KeycapFactory.js    # 键帽网格 + CanvasTexture 字符
│   │   ├── CaseBuilder.js      # 底壳 / 定位板 / PCB 构建
│   │   ├── layout.js           # 62 键布局数据（65% 紧凑）
│   │   └── themes.js           # 配色主题定义
│   └── ui/
│       └── config.js           # 配置面板 UI 逻辑
└── dist/                   # 构建产物（npm run build）
```

## 交互说明

| 操作 | 效果 |
|------|------|
| 鼠标拖拽 | 旋转键盘 |
| 滚轮 | 缩放 |
| 按下 A—Z / 空格 | 对应键帽下压回弹 |
| 点击键帽 | 触屏体验按键效果 |
| 拆解/组装按钮 | 三层结构展开/复原 |
| 外壳配色 / 键帽主题 | 实时切换，配置摘要同步 |
| 恢复默认 | 清除 localStorage 中的配置 |

## 键盘布局

65% 紧凑布局，5 行 × 62 键：
- 数字行（14 键）
- QWERTY 行（13 键）
- ASDF 行（13 键）
- ZXCV 行（12 键）
- 底部行含方向键（10 键）

## 构建验证

- `npm install` — 依赖安装成功
- `npm run build` — Vite 构建通过，产物 521KB（gzip 136KB，含 Three.js）

## 画廊收录

模型：LongCat 2.5。提示词见 [第三题原文](../../../tasks/mechanical-keyboard/PROMPT.md)，未提供额外提示词差异记录。保留核心实现；包名与构建资源路径适配画廊工作区。
