# 云阙 · 体素古建

一个纯前端的 Three.js 体素风格中式宫苑。包含中轴主殿、四座配殿、山门与双塔，以及围墙、石阶、斗拱、琉璃瓦、灯笼、庭院道路和园林植被。

## 运行

需要 Node.js 20.19+。

```bash
npm install
npm run dev
```

在浏览器打开 Vite 输出的本地地址（默认 `http://localhost:5173`）。

生产构建：

```bash
npm run build
npm run preview
```

鼠标拖动旋转、滚轮缩放，点击“全景视角”返回初始机位。页面打开即可看到建筑群全貌。体素方块按材质合并为少量 `InstancedMesh`，并限制像素比与阴影贴图大小，以保持交互流畅。
