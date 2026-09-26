# FORM 68 / 物构

GPT-6 Astra Pro 生成的原创 68 键机械键盘展示与配置工作室。使用 Three.js、原生 HTML/CSS/JavaScript 和 Vite，无需后端或外部模型。

## 安装与运行

需要 Node.js 20.19+ 或 22.12+。

```bash
npm install
npm run dev
npm run build
npm run preview
```

## 使用

- 拖动旋转、滚轮或双指缩放，也可用立体、俯视和复位按钮调整视角。
- 外壳和键帽各有三种选择，组合与配置摘要同步更新。
- 点击拆解键盘或组装键盘，展开和复原键帽、定位板、底壳。
- 开启试打后，按 A—Z、空格或点击三维键帽体验；支持可选合成键音。
- 为配置命名并保存，刷新后恢复已保存方案；恢复默认仅删除本页面的配置。

## 文件

`src/` 保存模型、动画、配置、声音与界面代码；`public/favicon.svg` 为作品图标；`vite.config.js` 使用相对资源路径，适合子目录部署。

## 画廊收录

模型：GPT-6 Astra Pro。提示词见 [第三题原文](../../../tasks/mechanical-keyboard/PROMPT.md)，未提供额外提示词差异记录。保留核心实现、安装启动说明和展示截图；不收录原交付的测试、验证日志与临时文件。
