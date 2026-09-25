# Voxel Chinese Palace · 体素中式院落

Three.js 实现的体素（Minecraft 风格）中国古典建筑群场景。

## 场景内容

中轴对称布局，南北主轴线由南向北依次为：

| 位置 | 建筑 | 形制 |
|------|------|------|
| 最南端 | **山门** | 单檐庑殿 + 石狮 + 匾额 |
| 山门后 | **宝塔**（5 层攒尖） | 每层瓦檐收分，顶端金色塔刹 |
| 中心 | **主殿** | 重檐歇山顶，红墙立柱，斗拱层，前置三联灯笼 |
| 主殿两侧 | **配殿** ×2 | 单檐歇山顶，体量约为主殿 1/2 |
| 山门两侧 | **钟鼓楼** ×2 | 2 层小亭，内悬钟/鼓 |

环境：草坪 + 中央石板御路 + 庭院铺装，夕阳暖色调（DirectionalLight + 半球补光），实时阴影，雾化远景。

## 运行方式

```bash
cd voxel-chinese-palace
npm install
npm run dev
```

启动后浏览器访问 `http://127.0.0.1:5173/` 即可。

构建生产版：

```bash
npm run build
npm run preview
```

## 操作

- 左键拖拽：旋转视角
- 右键拖拽：平移
- 滚轮：缩放
- 首次进入会自动缓慢旋转，鼠标交互后停止

## 技术要点

- 单文件无外部贴图，体素块按颜色 `BufferGeometryUtils.mergeGeometries` 合并，每个颜色一个 draw call，控制总块数在 ~6000 以内
- `MeshLambertMaterial` + `flatShading` 保留方块边缘高光
- `PCFSoftShadowMap`，2048×2048 shadow map，覆盖整个院落
- `ACESFilmicToneMapping` + 渐变天空球（顶深蓝 → 地平线橙 → 地底褐）做黄昏氛围
- OrbitControls 限制俯仰角防止穿地