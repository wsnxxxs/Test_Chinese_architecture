# 云岫古寺 / Voxel Chinese Temple

一个无需后端的 Three.js 体素风格中国古典建筑群场景。打开后即展示全景，支持鼠标/触控旋转和缩放。

## 运行

```bash
npm install
npm run dev
```

然后打开终端输出的本地地址（通常为 `http://localhost:5173`）。

## 构建

```bash
npm run build
npm run preview
```

## 场景内容

- 中轴上的山门、庭院道路与主殿
- 对称配置的两座配殿、两座多层宝塔，以及两座小亭
- 体素化歇山/庑殿/攒尖式屋面、台基、斗拱、柱列、门窗、匾额、灯笼与石狮
- 晨昏天空、暖色斜阳、阴影、雾气和点亮的灯笼

为了兼顾画面和帧率，重复的体素构件按材质使用 `THREE.InstancedMesh` 批量渲染，并限制渲染分辨率上限。
