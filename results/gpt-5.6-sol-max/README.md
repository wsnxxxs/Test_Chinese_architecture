# 紫宸宫阙 · 3D 体素古建群

原作品基于 Three.js、React 与 Vite/Vinext。此仓库保留其场景组件与样式，并使用独立 Vite 页面构建，以便作为静态作品发布。页面打开后自动展示全景，也可拖拽旋转、滚轮缩放，并切换晨曦、暮色、月夜三种光照。

## 场景内容

- 10 座中轴对称建筑：主殿、4 座配殿、山门、钟鼓楼、双塔
- 体素化歇山/庑殿/攒尖屋顶、飞檐、斗拱、立柱、台阶和门窗
- 灯笼、石狮、庭院道路、池塘、树木、院墙与草地
- 实例化立方体批量渲染、响应式镜头、实时阴影与薄雾氛围

## 本地运行

需要 Node.js 22.13 或更高版本。

```bash
npm install
npm run dev
```

浏览器打开终端显示的地址，默认是 <http://localhost:5173>。

## 构建

```bash
npm run build
```

构建产物生成在 `dist/`。如需本地预览生产构建：

```bash
npm run preview
```

## 主要文件

- `src/voxel-palace.tsx`：Three.js 场景、体素建筑生成器、镜头与交互
- `src/style.css`：界面、响应式布局与晨昏氛围
- `src/main.tsx`：页面入口
- `public/favicon.svg`：站点图标
