# Doubao Seed Evolving — 桌面微缩铁路小镇

第二题的独立作品，模型为 **Doubao Seed Evolving**，与 Seed 2.1 Pro 分别收录。题目见[桌面微缩铁路小镇提示词](../../../tasks/miniature-railway-town/PROMPT.md)。

保留原作的 Three.js 场景和交互：木质展示底座、闭合铁路、小镇、河流桥梁、车站以及一节车头和两节车厢。默认傍晚，光照按傍晚、白天、夜晚循环切换。

## 运行

在仓库根目录执行：

```bash
npm install
npm run dev --workspace=railway-doubao-seed-evolving
npm run build --workspace=railway-doubao-seed-evolving
```

## 操作

- 左键拖动旋转、滚轮缩放、右键拖动平移。
- 按钮或空格键暂停和继续，滑块调整车速。
- 光照按钮切换时段，复位按钮恢复初始状态。

`src/main.js` 管理渲染、相机、光照和运行状态；`world.js` 构建沙盘；`track.js`、`train.js` 与 `ribbon.js` 负责轨道、列车和带状几何。`docs/cover.png` 及题目目录中的截图用于画廊展示。

只收录本作品所需源码与运行配置，压缩包中的依赖目录、构建产物和无关页面未导入。
