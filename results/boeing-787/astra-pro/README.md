# 787–9 Dreamliner · Airframe Studio

GPT-6 Astra Pro 生成的 Boeing 787-9 程序化三维与机构展示。页面使用 Three.js 和原生 HTML/CSS/JavaScript，飞机几何、涂装、环境反射与机构运动均在运行时生成，不含外部模型、图片、字体或 HDR 资源。

## 构建

需要 Node.js 20.19+。在仓库根目录运行：

```bash
npm install
npm run build --workspace=boeing-787-astra-pro
```

构建脚本保留原始单页实现，并把 Three.js 0.170.0、OrbitControls 和对应 MIT 许可证复制到输出目录，避免运行时依赖外部 CDN。

画廊模型提取参数 `sandtable=1` 会隐藏无限地面与停机坪辅助线，把卡片模型转到机头斜前方，对机翼使用双面材质，并省略在卡片尺度下会变成杂线的发动机短边条、襟翼导杆和错位的前起落架支撑杆；正常打开作品时不受影响。

## 操作

- 左键或单指拖动旋转，滚轮或双指缩放，右键拖动平移；支持六个预设视角与双击部位聚焦。
- 可切换停放、起飞、着陆、巡航构型，控制起落架、襟翼、缝翼、扰流板、安定面与双发风扇。
- 可显示部件标注、尺寸测量和航行灯，并切换渲染质量。

## 来源与边界

- 交付来源：用户提供的 `astra pro 787.html`，收录日期为 2026-09-27。
- 模型：GPT-6 Astra Pro；未提供额外推理档位信息。
- 原始生成提示词未随交付提供，题目页如实标记为待补充，不根据作品内容反推原文。
- 页面中的 Boeing 787 与 GEnx 仅为程序化视觉近似，不是 Boeing 官方模型、工业 CAD、飞行模拟或维修培训工具。
- 尺寸资料引用作品内标明的 [Boeing 787 官方页面](https://www.boeing.com/commercial/787)，发动机外观参考 [GE Aerospace GEnx 页面](https://www.geaerospace.com/commercial/aircraft-engines/genx)。

## 实际验证

已执行作品构建、画廊集成构建、桌面与手机首屏截图及卡片模型提取。浏览器核对范围包括默认首屏、手机控制面板、起落架收起和风扇启动；这不代表所有视角、滑杆组合或长时间性能均已验证。
