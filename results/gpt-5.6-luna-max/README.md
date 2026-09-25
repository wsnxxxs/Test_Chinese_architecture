# 云岚寺 · Voxel Heritage

一个使用 Three.js + Vite 构建的可运行 3D 体素风格中国古典建筑群场景。

## 运行

```bash
npm install
npm run dev
```

浏览器打开终端输出的本地地址即可进入场景。生产构建：

```bash
npm run build
npm run preview
```

需要 Node.js 20+。

## 场景内容

- 中轴布局：山门、主殿、东西配殿、梵音钟楼、和鸣鼓楼，共 6 座建筑节点。
- 体素构件：红墙、青瓦飞檐、斗拱、朱柱、台阶、门窗、匾额、灯笼与石狮。
- 环境：铺装道路、草地院落、园林矮墙、树木、远山与萤火粒子。
- 光影：可切换晨光 / 暮色，使用阴影贴图、冷暖轮廓光与灯笼点光源。
- 交互：拖拽旋转、滚轮缩放、自动旋转按钮；打开页面即为全景视角。

## 项目结构

```text
.
├─ index.html
├─ package.json
├─ public/
│  └─ favicon.svg
└─ src/
   ├─ main.js       # Three.js 场景、建筑模块、灯光与交互
   └─ style.css     # HUD 与响应式布局
```

## 验证

已在本地执行 `npm install`、`npm run build`，并通过浏览器检查首屏渲染、晨光 / 暮色切换和自动旋转按钮；构建输出位于 `dist/`。
