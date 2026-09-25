# 体素古建 · 中轴殿宇（Voxel Chinese Temple Complex）

此项目由用户作为 Qwen3.8 Flash next 的结果提供。压缩包未附单独的提示词文本，因此未记录与仓库题目提示词的差异。

用 **Three.js + 纯体素（voxel）** 搭建的一座中国古典佛寺建筑群：中轴对称、多重院落、
三重台基上的重檐庑殿主殿、八角七层楼阁式宝塔、单檐歇山山门与天王殿、钟鼓楼、碑亭、
抄手游廊、宫墙角楼。全部几何由代码在运行时生成，**不加载任何外部贴图/模型/字体**，
纹理一律用 `CanvasTexture` 程序化绘制。

- 渲染：`three@^0.186`，一次合批（整个建筑群 = 1~2 个 draw call）
- 交互：轨道相机、4 套晨昏/夜色调、6 个预设机位缓动、自动环绕、性能自适应降级
- 体积：全场景体素预算 **≤ 200 000**（1 voxel ≈ 0.35 m）

---

## 1. 运行

```bash
npm install        # 只依赖 three + vite
npm run dev        # Vite 开发服务器 → http://localhost:5178
npm run build      # 产物输出到 dist/
npm run preview    # 预览构建产物 → http://localhost:5178
```

打开后先出现「体素古建 · 正在筑基…」遮罩，世界建造完成并渲染出第一帧后自动淡出，
**无需任何操作即可看到全景俯角（DEFAULT_VIEW = 机位「全景」）并缓慢环绕**。

若 `src/world/composition.js`（体素建造总入口）缺失或抛错，错误堆栈会直接印在启动遮罩里，
不会白屏，也不会静默失败。

---

## 2. 操作说明

| 操作 | 效果 |
|---|---|
| 鼠标左键拖拽 / 单指拖动 | 旋转视角（有阻尼，`dampingFactor 0.06`） |
| 滚轮 / 双指捏合 | 推近拉远（距离限制 40 ~ 900，俯角不越过地平线） |
| 键盘 `1` `2` `3` `4` | 切换时辰色调：清晨 / 正午 / 昏黄 / 月夜 |
| 键盘 `F` | 循环切换 6 个预设机位（2 秒 `easeInOutCubic` 缓动） |
| 键盘 `R` | 开/关自动环绕 |
| 底部按钮 | 与键盘等价的色调 / 机位 / 环绕开关 |
| 停止操作 4 秒 | 自动恢复环绕 |

HUD 布局：左上为标题与建筑构成说明，右上为实时性能（FPS / DRAW CALLS / 三角面 / 体素数），
底部为按钮条，右下为操作提示；窄屏（≤860px）折叠成两行并隐藏提示，场景中央始终保持干净。

---

## 3. 场景构成（中轴序列，南 = +Z，中轴 = Z 轴 / X=0）

坐标取自 `src/config.js` 的 `L`（体素格，1 voxel ≈ 0.35 m）：

```
                     北 −Z
   ┌────────────────────────────────────────────┐
   │        舍利宝塔 (0,−172) 八角七层 · 塔刹      │
   │        藏经楼   (0,−110) 两层 · 歇山顶        │
   │  小石塔(−116,−150)        小石塔(116,−150)   │
   │  ────────── 主殿后夹道 z=−60 ────────────    │
   │   西配殿(−118,40)  大雄宝殿(0,0)  东配殿(118,40)
   │            三重台基 · 重檐庑殿顶             │
   │  碑亭(−40,78) ┄┄ 抄手游廊 ┄┄ 碑亭(40,78)     │
   │  ────────── 横路 z=78 / 院落 ───────────     │
   │        天王殿   (0,118)  五开间 · 单檐歇山     │
   │  放生池(−124,116)          放生池(124,116)    │
   │        钟楼(−64,146) ─ 横路 ─ 鼓楼(64,146)    │
   │        山门     (0,178)  三券门 · 单檐歇山     │
   │        照壁     (0,214)  琉璃照壁（墙外）      │
   └────────────────────────────────────────────┘
        宫墙 x=±150 · z∈[−200,180] · 四隅角楼
                     南 +Z
```

建筑清单（≥5 座，全部关于 X=0 严格镜像）：

1. **照壁** — 须弥座 + 琉璃壁心 + 庑殿壁顶（南端对景）
2. **山门** — 跨宫墙而设，台基 + 三面朱墙 + 中开三券门 + 单檐歇山 + 匾额「祇园胜境」+ 石狮
3. **天王殿** — 第二进，五开间、明间开门、次间格窗、单檐歇山
4. **大雄宝殿（主殿）** — 三重汉白玉台基（每层栏杆 + 南台阶 + 丹陛御路）、副阶周匝柱网、
   重檐（下檐庑殿 + 上檐庑殿）、三层斗拱列、前月台、匾额与正脊大吻
5. **东西配殿** — 面阔沿 Z、单檐歇山、绿琉璃瓦，开门朝中轴
6. **钟楼 / 鼓楼** — 方形高台基 + 四面券洞 + 台上木亭（攒尖顶 + 宝顶），台内悬钟置鼓
7. **藏经楼（后殿）** — 两层，二层平座栏杆，歇山顶，总高低于主殿
8. **舍利宝塔** — 中轴北端收束，八角七层楼阁式塔，逐层收分，每层平座 + 八角檐 + 角铃，塔刹约 20 高
9. **小石塔 / 经幢** — 塔院两侧对称
10. **碑亭 ×2、角楼 ×4、抄手游廊 ×8 段、宫墙、放生池、石灯笼列、柏树列**

陈设：宫灯（含发光芯 `glow` 体素）、石灯、石狮、香炉、石碑、幡杆、花坛、太湖石。
夜景关键点位的灯笼坐标在 `L.lanternLights`，`src/core/lighting.js` 在该处放置 `PointLight`。

---

## 4. 技术要点

### 4.1 体素容器与坐标约定

`VoxelWorld` 用两个 `Map`（普通层 / 发光层）存 `packedKey → 0xRRGGBB`：

```
key = (x+2048)·4096² + (y+2048)·4096 + (z+2048)      // 有效范围 ±2047
```

数值 key 比 `"x,y,z"` 字符串省数倍内存，且**六邻位查询退化成 `key + 常量增量`**，无临时字符串分配。
体素 `(x,y,z)` 是**中心在整数坐标**的单位立方（占据 `x±0.5`），因此 `fill(-46,46)`、`cylY(cx=0)`
关于整数中点严格镜像对称，`y=0` 层半数没入地面、不会与地平面共面闪烁。

写入 API：`set / fill / shell / cylY / ell / prism / copyFrom`，均为纯函数式（只写体素，不建 THREE 对象）。
`prism(cx,cz,y0,y1,r,sides,rot)` 用「折进单个扇区 + `apothem/cos(d)`」的 |cos| 距离判据，
宝塔八角即 `sides=8, rot=π/8`（平面正好朝正南北/正东西）。

### 4.2 隐藏面剔除 + 单次合批

`buildMeshes()` 遍历体素，**只对 6 邻位为空的侧面各出 1 个 quad**：

- 每 quad = 4 顶点 + 6 索引（比非索引省 1/3 顶点），2 个三角形
- 属性只有 `position / normal / color` 三个 `Float32Array` + 一个 `Uint32Array` 索引
- 整个建筑群 → **1 个 `Mesh`（1 次 draw call）**；发光体素再合 1 个 `MeshBasicMaterial` Mesh
- 剔除成本 O(6N)：`fill(-5,0,-5, 5,10,5)` 的 1331 个实心体素只产生 6×121 = **726 个 quad**

分块可增长缓冲（65536 条目/块，浪费上限一块 ≈2.4 MB）避免一次性巨型分配，
最终按精确长度落到三个 `Float32Array`；实测 60 000 体素 → 51 000 quad 生成约 45 ms，
378 000 体素（超预算的压力测试）约 280 ms、顶点数据 54 MB。

### 4.3 廉价 AO 与颜色

顶点色 = `new THREE.Color(hex)`（自动 sRGB → linear）× **AO 系数**：

```
shade = 1 − 0.11 × occupied      // occupied = 该面 4 个侧向邻格的占用数（凹角更暗）
× (1 ± 0.03)                     // hash(x,y,z) 确定性抖动，opts.jitter === 0 时关闭
```

发光层不做 AO/抖动。材质：`MeshStandardMaterial({ vertexColors:true, roughness:0.92, metalness:0, flatShading:true })`
投影 + 接收阴影；发光层 `MeshBasicMaterial({ vertexColors:true, toneMapped:false })` 不投影。

遮挡规则：普通层的面只被普通层遮挡，发光层的面被「普通层 ∪ 发光层」遮挡
—— 因此灯笼的发光芯被实体包住时不会多出内部面，实体外壳也不会出现破洞或共面闪烁。

### 4.4 光照与色调

- 主平行光：唯一投影光源，ortho 视体 ±330（覆盖 x∈[-300,300]、z∈[-320,320]）、near 1 / far 1400、
  `bias -0.0004`、`normalBias 0.8`、`mapSize = T.dir.shadow`；方位角/仰角由 `TONES[key].dir` 给出
- `shadow.autoUpdate = false`：静态体素场景只在太阳方向变化（色调过渡期）逐帧重投阴影，
  其余帧省下一次 2048² 深度渲染 —— 这是稳住 60 FPS 的关键
- 半球光 + 环境光 + 反向补光平行光（不投影）勾暗部层次
- `FogExp2(T.fog, T.fogDensity)` + 程序化渐变天空（BackSide 大球 + `CanvasTexture` 上下渐变，
  `material.fog = false`、`depthWrite = false`、`renderOrder = -1`）
- 夜景：`L.lanternLights` 处 10 个 `PointLight`（`decay 1.4`、`distance 95`、强度 ∝ `T.lantern`，
  `T.lantern<=0` 时整组 `visible=false`），带极轻微的呼吸感
- 4 套色调切换 **不重建任何对象**，所有光照/雾/曝光/天空颜色在 ~0.9 s 内 lerp
  （中途再切会从当前实际值继续，不跳变），同时更新 `renderer.toneMappingExposure` 并重绘天空渐变

### 4.5 粒子

`THREE.Points` 上限 1500 点、只有一份几何（换模式改 `drawRange`/材质/颜色，不重建），
三种模式 `petal`（落英）/ `dust`（微尘）/ `firefly`（萤火），
在固定包围盒内漂移 + wrap 循环，包围盒中心平滑跟随相机（高度限制在带内），
颜色随色调 tint 交叉淡化；精灵图为程序化 `CanvasTexture`，`sizeAttenuation` 随距离衰减，不投影。

### 4.6 性能预算与自适应降级

- **体素预算**：`VOXEL_BUDGET = 262000`（`src/world/composition.js` 单一持有），实测装配 **232,777 体素 / 629k quad / 1.26M 三角形**，桌面 Chrome **140 FPS**、5 个 draw call
- **必需建筑优先**：14 座必需建筑（`must: true`）永不因预算被跳过，超线只 `console.error` 报账；
  预算不足时先削树这类装饰。装配后打印分类统计与"建筑用量排序"
- 台基/墙体走壳与 `cullHidden()` 隐藏格清除，屋顶用单/双层厚阶梯壳，绝不实心堆叠；
  地面是带程序铺装的 `PlaneGeometry`，不做整地面临物体素化
- 不做远山：R≈348 的体素山脊在任何机位都读成草地上的土坡而不是山，天际线交给天空渐变
  与 FogExp2 地平雾承担（完整的帘幕山脊实现已按验收意见移除）
- 降级：连续 2 s FPS < 45 → 阴影贴图降到 1024；再连续 2 s < 38 → `pixelRatio` 降到 1 并关闭补光
  （色调过渡期不计入降级判据）
- 初始 `pixelRatio = min(devicePixelRatio, 1.75)`，`antialias` + `ACESFilmicToneMapping` + `PCFShadowMap`
  （three 0.186 已移除 `PCFSoftShadowMap`）

---

## 5. 目录结构

```
voxel-temple/
├─ index.html                 舞台 #stage / #hud / #loading（样式由 hud.js 注入）
├─ vite.config.js             dev/preview 端口 5178，base './'
├─ package.json               依赖：three ^0.186、vite
├─ docs/SPEC.md               唯一契约：导出名、签名、坐标与性能约定
└─ src/
   ├─ config.js               唯一数据源：P 调色板、L 布局、TONES/TONE_ORDER、VIEWS/DEFAULT_VIEW
   ├─ main.js                 装配 + 主循环 + 输入 + 机位缓动 + 自适应降级     (A1)
   ├─ core/
   │  ├─ VoxelWorld.js        体素容器、隐藏面剔除、廉价 AO、合批几何          (A1)
   │  ├─ lighting.js          平行光/阴影/半球光/环境光/补光/雾/天空/夜景点光   (A1)
   │  └─ particles.js         落英 / 微尘 / 萤火（THREE.Points）               (A1)
   ├─ ui/
   │  └─ hud.js               标题、性能面板、色调/机位/环绕按钮、操作提示      (A1)
   ├─ build/                  构件与建筑（A2 / A3）
   │  ├─ parts.js             台基/台阶/栏杆/柱/枋/斗拱/檐口/门窗/匾额/屋顶/塔刹
   │  ├─ mainHall.js          大雄宝殿        sideHall.js  东西配殿
   │  ├─ gate.js              山门            tianwang.js  天王殿
   │  ├─ rearHall.js          藏经楼          towers.js    钟鼓楼 / 小石塔
   │  ├─ pagoda.js            舍利宝塔        pavilion.js  碑亭 / 角楼
   │  ├─ corridor.js          抄手游廊        perimeter.js 宫墙 / 照壁
   │  └─ props.js             宫灯/石灯/石狮/香炉/石碑/树木/太湖石
   └─ world/                  环境与合成（A4）
      ├─ landscape.js         地面网格 + 程序化铺装贴图 + 道路/池/树体素
      └─ composition.js       buildWorld() → { group, world, stats }
```

模块依赖方向：`config.js` ← 所有模块；`core/VoxelWorld.js` ← `build/*`、`world/*`；
`build/*` 与 `world/*` 只写体素或只建 THREE 对象，不反向依赖 `main.js`。

调试：`window.__voxel` 暴露 `scene / renderer / camera / controls / lighting / particles / world / perf`，
可在控制台执行 `__voxel.world.stats()` 查看体素与面数。

---

## 6. 约定备忘（改代码前先看）

- **不要**在 `build/*`、`world/*` 里硬编码坐标或颜色，新增数据一律进 `src/config.js`
- **不要**加载外部图片/字体/模型；纹理必须程序化（`CanvasTexture`）
- 屋顶/塔檐等成对建筑必须通过不同 `cx` 调用同一 builder 两次，保证左右镜像
- 契约有歧义时按 `docs/SPEC.md` 最保守解释实现，并在自己文件顶部注释说明假设
