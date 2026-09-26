import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import './style.css';

// ============================================================
// 基础：渲染器 / 场景 / 相机 / 控制器
// ============================================================
const app = document.getElementById('app');
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
app.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const DAY_BG = new THREE.Color(0xf2c384);
const NIGHT_BG = new THREE.Color(0x0e1830);
scene.background = DAY_BG.clone();
scene.fog = new THREE.Fog(DAY_BG.clone(), 110, 260);

const camera = new THREE.PerspectiveCamera(33, window.innerWidth / window.innerHeight, 0.1, 600);
const INIT_POS = new THREE.Vector3(40, 42, 44);
const INIT_TGT = new THREE.Vector3(-1, 0, 0);
camera.position.copy(INIT_POS);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.copy(INIT_TGT);
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.maxPolarAngle = Math.PI * 0.46;
controls.minDistance = 16;
controls.maxDistance = 150;
controls.update();

// ============================================================
// 灯光：傍晚暖阳 + 夜晚模式
// ============================================================
const hemi = new THREE.HemisphereLight(0xffe2b0, 0x8a7a58, 0.55);
scene.add(hemi);

const sun = new THREE.DirectionalLight(0xffc187, 1.5);
sun.position.set(-38, 26, 18);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.left = -48;
sun.shadow.camera.right = 48;
sun.shadow.camera.top = 48;
sun.shadow.camera.bottom = -48;
sun.shadow.camera.near = 1;
sun.shadow.camera.far = 140;
sun.shadow.bias = -0.0008;
scene.add(sun);

const fill = new THREE.AmbientLight(0xffe8c8, 0.18);
scene.add(fill);

// 夜间发光材质与点光源登记
const glowMats = [];   // { mat, intensity }
const nightLights = [];// PointLight 列表
function registerGlow(mat, intensity = 1.0) {
  glowMats.push({ mat, intensity });
  return mat;
}

// ============================================================
// 材质工具（手工模型质感：flatShading + 高粗糙度）
// ============================================================
function M(color, opts = {}) {
  return new THREE.MeshStandardMaterial({
    color, roughness: 0.88, metalness: 0.0, flatShading: true, ...opts,
  });
}

// ============================================================
// 底座：木框展示沙盘
// ============================================================
const BASE_W = 68, BASE_D = 48;      // 木底座外轮廓
const GROUND_TOP = 0;                // 草地表面高度
const RIVER_X = 9, RIVER_HALF = 3.6; // 河道带 |x-9| < 3.6
const world = new THREE.Group();
scene.add(world);

{
  const wood = M(0x7a4f2a);
  const woodDark = M(0x5d3a1e);
  // 底座主体
  const plinth = new THREE.Mesh(new THREE.BoxGeometry(BASE_W, 3, BASE_D), wood);
  plinth.position.y = GROUND_TOP - 2.2 - 1.5;
  plinth.receiveShadow = true;
  world.add(plinth);
  // 边框（凸起的木唇）
  const lipH = 1.1, lipW = 1.3;
  const mkLip = (w, d, x, z) => {
    const lip = new THREE.Mesh(new THREE.BoxGeometry(w, lipH, d), woodDark);
    lip.position.set(x, GROUND_TOP + lipH / 2 - 0.35, z);
    lip.castShadow = lip.receiveShadow = true;
    world.add(lip);
  };
  const ix = BASE_W / 2 - lipW / 2, iz = BASE_D / 2 - lipW / 2;
  mkLip(BASE_W, lipW, 0, -iz);
  mkLip(BASE_W, lipW, 0, iz);
  mkLip(lipW, BASE_D - 2 * lipW, -ix, 0);
  mkLip(lipW, BASE_D - 2 * lipW, ix, 0);
}

// 草地（两块，中间让出河道），侧面为泥土
const grassMat = M(0x77a24b);
const dirtMat = M(0x6b4c30);
{
  const mkSlab = (x0, x1) => {
    const w = x1 - x0;
    const mats = [dirtMat, dirtMat, grassMat, dirtMat, dirtMat, dirtMat];
    const slab = new THREE.Mesh(new THREE.BoxGeometry(w, 2.2, BASE_D - 2.6), mats);
    slab.position.set((x0 + x1) / 2, GROUND_TOP - 1.1, 0);
    slab.receiveShadow = true;
    slab.castShadow = true;
    world.add(slab);
  };
  mkSlab(-BASE_W / 2 + 1.3, RIVER_X - RIVER_HALF);
  mkSlab(RIVER_X + RIVER_HALF, BASE_W / 2 - 1.3);
  // 河床
  const bed = new THREE.Mesh(
    new THREE.BoxGeometry(RIVER_HALF * 2 + 0.4, 0.5, BASE_D - 2.6),
    M(0x8a7a52)
  );
  bed.position.set(RIVER_X, -1.65, 0);
  world.add(bed);
}

// 水面（轻微波浪动画）
const waterGeo = new THREE.PlaneGeometry(RIVER_HALF * 2 - 0.2, BASE_D - 2.8, 8, 44);
waterGeo.rotateX(-Math.PI / 2);
const waterMat = new THREE.MeshStandardMaterial({
  color: 0x4a86c8, transparent: true, opacity: 0.82,
  roughness: 0.18, metalness: 0.05,
});
const water = new THREE.Mesh(waterGeo, waterMat);
water.position.set(RIVER_X, -0.55, 0);
water.receiveShadow = true;
world.add(water);
const waterBase = waterGeo.attributes.position.array.slice();

// ============================================================
// 闭合铁路曲线
// ============================================================
const trackPts = [
  [-8, -14.5], [8, -13.5], [20, -11], [25.5, -3], [24, 6], [15, 11],
  [8, 12.5], [-6, 13.5], [-16, 11], [-24, 5], [-25.5, -5], [-18, -12],
].map(([x, z]) => new THREE.Vector3(x, 0, z));
const curve = new THREE.CatmullRomCurve3(trackPts, true, 'centripetal');
curve.arcLengthDivisions = 600;
const TRACK_LEN = curve.getLength();

// 道砟（压扁的管体）
{
  const ballastGeo = new THREE.TubeGeometry(curve, 300, 1.05, 10, true);
  const ballast = new THREE.Mesh(ballastGeo, M(0x9a8f80));
  ballast.scale.y = 0.22;
  ballast.receiveShadow = true;
  world.add(ballast);
}

// 轨枕
{
  const step = 0.75;
  const count = Math.floor(TRACK_LEN / step);
  const tieGeo = new THREE.BoxGeometry(1.75, 0.12, 0.55);
  const ties = new THREE.InstancedMesh(tieGeo, M(0x5a3d26), count);
  const m = new THREE.Matrix4(), q = new THREE.Quaternion(), p = new THREE.Vector3();
  const up = new THREE.Vector3(0, 1, 0);
  for (let i = 0; i < count; i++) {
    const u = i / count;
    const pos = curve.getPointAt(u);
    const t = curve.getTangentAt(u);
    q.setFromAxisAngle(up, Math.atan2(t.x, t.z));
    p.set(pos.x, 0.28, pos.z);
    m.compose(p, q, new THREE.Vector3(1, 1, 1));
    ties.setMatrixAt(i, m);
  }
  ties.receiveShadow = true;
  ties.castShadow = true;
  world.add(ties);
}

// 钢轨（沿曲线左右偏移的两根管）
{
  const N = 400;
  const mkRail = (off) => {
    const pts = [];
    for (let i = 0; i < N; i++) {
      const u = i / N;
      const pos = curve.getPointAt(u);
      const t = curve.getTangentAt(u);
      const nx = -t.z, nz = t.x;
      pts.push(new THREE.Vector3(pos.x + nx * off, 0.40, pos.z + nz * off));
    }
    const c = new THREE.CatmullRomCurve3(pts, true);
    const rail = new THREE.Mesh(
      new THREE.TubeGeometry(c, 420, 0.065, 8, true),
      M(0xb9bec4, { roughness: 0.35, metalness: 0.75, flatShading: false })
    );
    rail.castShadow = true;
    world.add(rail);
  };
  mkRail(0.38);
  mkRail(-0.38);
}

// ============================================================
// 铁路桥：找到曲线跨越河道的区间
// ============================================================
function findRiverCrossings() {
  const N = 1200;
  const inside = [];
  for (let i = 0; i < N; i++) {
    const p = curve.getPointAt(i / N);
    inside.push(Math.abs(p.x - RIVER_X) < RIVER_HALF + 0.4);
  }
  const ranges = [];
  let start = -1;
  for (let i = 0; i <= N; i++) {
    const on = i < N ? inside[i] : false;
    if (on && start < 0) start = i;
    if (!on && start >= 0) { ranges.push([start / N, i / N]); start = -1; }
  }
  // 处理跨 0/1 的环绕
  if (ranges.length > 1 && inside[0] && inside[N - 1]) {
    const first = ranges.shift();
    const last = ranges.pop();
    ranges.push([last[0], first[1] + 1]);
  }
  return ranges;
}

const stoneMat = M(0x8d8578);
const steelMat = M(0xa8442f, { roughness: 0.6 });
for (const [u0, u1] of findRiverCrossings()) {
  const p0 = curve.getPointAt(u0 % 1);
  const p1 = curve.getPointAt(u1 % 1);
  const len = p0.distanceTo(p1) + 1.6;
  const cx = (p0.x + p1.x) / 2, cz = (p0.z + p1.z) / 2;
  const yaw = Math.atan2(p1.x - p0.x, p1.z - p0.z);
  const g = new THREE.Group();
  g.position.set(cx, 0, cz);
  g.rotation.y = yaw;
  // 桥面
  const deck = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.5, len), steelMat);
  deck.position.y = -0.22;
  g.add(deck);
  // 侧面板桁（低于车厢地板，不挡列车）
  for (const sx of [-1.25, 1.25]) {
    const girder = new THREE.Mesh(new THREE.BoxGeometry(0.22, 1.0, len), steelMat);
    girder.position.set(sx, -0.55, 0);
    g.add(girder);
    const rail = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.3, len), steelMat);
    rail.position.set(sx, 0.18, 0);
    g.add(rail);
  }
  // 桥墩 + 桥台
  const pier = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.7, 1.6, 8), stoneMat);
  pier.position.y = -1.1;
  g.add(pier);
  for (const sz of [-len / 2 + 0.2, len / 2 - 0.2]) {
    const abut = new THREE.Mesh(new THREE.BoxGeometry(3.2, 1.4, 1.0), stoneMat);
    abut.position.set(0, -0.75, sz);
    g.add(abut);
  }
  g.traverse((o) => { if (o.isMesh) { o.castShadow = o.receiveShadow = true; } });
  world.add(g);
}

// ============================================================
// 道路网：车站—镇中心—公路桥—东岸
// ============================================================
const roadMat = M(0x6e6a63, { roughness: 0.95 });
const roadSegs = []; // {ax,az,bx,bz} 用于树木避让
function addRoad(ax, az, bx, bz, w = 2.4) {
  const dx = bx - ax, dz = bz - az;
  const len = Math.hypot(dx, dz);
  const road = new THREE.Mesh(new THREE.BoxGeometry(w, 0.06, len), roadMat);
  road.position.set((ax + bx) / 2, GROUND_TOP + 0.03, (az + bz) / 2);
  road.rotation.y = Math.atan2(dx, dz);
  road.receiveShadow = true;
  world.add(road);
  roadSegs.push({ ax, az, bx, bz, w });
}
addRoad(-10, -12.5, -10, 12);          // 车站纵向主路
addRoad(-24, 1, -5.4, 1);              // 镇中心横向路（至西岸桥头）
addRoad(-18, -12.2, -18, -2);          // 北侧支路
addRoad(13.4, 1, 25, 1);               // 东岸路
addRoad(21, 1, 21, 9);

// 公路桥（石拱桥造型：桥面 + 矮护栏 + 桥墩）
{
  const g = new THREE.Group();
  const bx = RIVER_X, bz = 1;
  const span = RIVER_HALF * 2 + 1.6;
  const deck = new THREE.Mesh(new THREE.BoxGeometry(span, 0.4, 3.2), stoneMat);
  deck.position.set(bx, -0.1, bz);
  g.add(deck);
  for (const sz of [-1.5, 1.5]) {
    const wall = new THREE.Mesh(new THREE.BoxGeometry(span, 0.45, 0.25), stoneMat);
    wall.position.set(bx, 0.28, bz + sz);
    g.add(wall);
  }
  const pier = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.65, 1.6, 8), stoneMat);
  pier.position.set(bx, -1.1, bz);
  g.add(pier);
  g.traverse((o) => { if (o.isMesh) { o.castShadow = o.receiveShadow = true; } });
  world.add(g);
}

// 镇中心小广场
{
  const plaza = new THREE.Mesh(new THREE.CylinderGeometry(3.4, 3.4, 0.07, 24), M(0xb8a888));
  plaza.position.set(-14.5, GROUND_TOP + 0.035, 4.5);
  plaza.receiveShadow = true;
  world.add(plaza);
  // 喷泉
  const basin = new THREE.Mesh(new THREE.CylinderGeometry(1.1, 1.2, 0.45, 12), stoneMat);
  basin.position.set(-14.5, 0.25, 4.5);
  const jet = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.3, 0.9, 8), M(0x9fc8e8, { roughness: 0.2 }));
  jet.position.set(-14.5, 0.85, 4.5);
  basin.castShadow = jet.castShadow = true;
  world.add(basin, jet);
}

// ============================================================
// 建筑：坡屋顶 helper + 各类房屋
// ============================================================
function gableRoofGeo(w, h, d) {
  const hw = w / 2, hd = d / 2;
  const v = [];
  const tri = (a, b, c) => v.push(...a, ...b, ...c);
  const A = [-hw, 0, hd], B = [hw, 0, hd], C = [0, h, hd];
  const A2 = [-hw, 0, -hd], B2 = [hw, 0, -hd], C2 = [0, h, -hd];
  tri(A, B, C); tri(B2, A2, C2);
  tri(A2, A, C); tri(A2, C, C2);
  tri(B, B2, C2); tri(B, C2, C);
  tri(A2, B2, B); tri(A2, B, A);
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(v, 3));
  geo.computeVertexNormals();
  return geo;
}

const buildings = []; // {x, z, r} 供植被避让
const wallPalette = [0xf2e4c8, 0xe8c9a0, 0xd9e2e8, 0xf0d5b8, 0xe4d6c8, 0xd8c9b0];
const roofPalette = [0xb0503a, 0x8a4a3a, 0x5a6a7a, 0x7a5a42, 0xa06038];

function makeHouse(w, h, d, opts = {}) {
  const g = new THREE.Group();
  const wall = new THREE.Mesh(
    new THREE.BoxGeometry(w, h, d),
    M(opts.wall ?? wallPalette[(Math.random() * wallPalette.length) | 0])
  );
  wall.position.y = h / 2;
  g.add(wall);
  const roofH = opts.roofH ?? h * 0.55;
  const roof = new THREE.Mesh(
    gableRoofGeo(w * 1.14, roofH, d * 1.14),
    M(opts.roof ?? roofPalette[(Math.random() * roofPalette.length) | 0])
  );
  roof.position.y = h;
  g.add(roof);
  // 门
  const door = new THREE.Mesh(new THREE.BoxGeometry(0.7, 1.1, 0.08), M(0x5a3a22));
  door.position.set(0, 0.55, d / 2 + 0.03);
  g.add(door);
  // 窗（夜里发光）
  const winMat = registerGlow(new THREE.MeshStandardMaterial({
    color: 0x3a4a58, roughness: 0.3,
    emissive: 0xffc26a, emissiveIntensity: 0,
  }), opts.glow ?? 0.9);
  const wins = Math.max(1, Math.floor(w / 1.6));
  for (let i = 0; i < wins; i++) {
    const win = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.65, 0.06), winMat);
    win.position.set((i - (wins - 1) / 2) * 1.4, h * 0.55, d / 2 + 0.04);
    g.add(win);
    const winB = win.clone();
    winB.position.z = -d / 2 - 0.04;
    g.add(winB);
  }
  // 烟囱
  if (opts.chimney !== false) {
    const ch = new THREE.Mesh(new THREE.BoxGeometry(0.4, 1.0, 0.4), M(0x9a6a55));
    ch.position.set(w * 0.28, h + roofH * 0.55, 0);
    g.add(ch);
  }
  g.traverse((o) => { if (o.isMesh) { o.castShadow = o.receiveShadow = true; } });
  return g;
}

function placeBuilding(g, x, z, rotY, r) {
  g.position.set(x, GROUND_TOP, z);
  g.rotation.y = rotY;
  world.add(g);
  buildings.push({ x, z, r });
}

// 镇中心民居群
placeBuilding(makeHouse(3.4, 2.2, 3.0), -15.5, -5.5, 0.3, 2.4);
placeBuilding(makeHouse(3.0, 2.0, 2.8), -7.2, -6.2, -0.2, 2.2);
placeBuilding(makeHouse(3.6, 2.4, 3.2), -21.5, -3.0, 1.2, 2.5);
placeBuilding(makeHouse(2.8, 1.9, 2.6), -6.8, 6.5, 0.15, 2.1);
placeBuilding(makeHouse(3.2, 2.1, 3.0), -20.5, 7.5, -0.4, 2.3);
placeBuilding(makeHouse(3.0, 2.0, 2.8), -16.5, 9.8, 0.9, 2.2);
// 商店街（带遮阳篷）
{
  const shop = makeHouse(4.6, 2.6, 3.4, { wall: 0xe8d0a8, roof: 0x7a4a3a });
  const awning = new THREE.Mesh(new THREE.BoxGeometry(4.8, 0.12, 1.2), M(0xc8553e));
  awning.position.set(0, 1.7, 2.2);
  awning.rotation.x = 0.25;
  shop.add(awning);
  placeBuilding(shop, -13.5, -1.8, Math.PI, 3.0);
}
placeBuilding(makeHouse(3.8, 2.3, 3.2, { wall: 0xdbe4d0 }), -6.5, -1.5, Math.PI * 0.5, 2.6);
// 教堂（高塔 + 尖顶）
{
  const g = new THREE.Group();
  const nave = new THREE.Mesh(new THREE.BoxGeometry(3.4, 2.6, 5.2), M(0xf0ead8));
  nave.position.y = 1.3;
  const roof = new THREE.Mesh(gableRoofGeo(3.9, 1.5, 5.7), M(0x5a6a7a));
  roof.position.y = 2.6;
  const tower = new THREE.Mesh(new THREE.BoxGeometry(1.6, 4.6, 1.6), M(0xf0ead8));
  tower.position.set(0, 2.3, 3.2);
  const spire = new THREE.Mesh(new THREE.ConeGeometry(1.25, 2.2, 4), M(0x4a5a6a));
  spire.position.set(0, 5.7, 3.2);
  spire.rotation.y = Math.PI / 4;
  g.add(nave, roof, tower, spire);
  g.traverse((o) => { if (o.isMesh) { o.castShadow = o.receiveShadow = true; } });
  placeBuilding(g, -23.5, 1.2, Math.PI / 2, 3.2);
}
// 东岸：农舍 + 谷仓 + 小屋
placeBuilding(makeHouse(3.4, 2.2, 3.0, { wall: 0xf2e8d0 }), 20, -4.5, 0.2, 2.4);
{
  const barn = makeHouse(4.2, 2.8, 5.0, { wall: 0xa8452f, roof: 0x6a6a72, roofH: 1.8, glow: 0.7 });
  placeBuilding(barn, 21.5, 5.5, -Math.PI / 2, 3.4);
}
placeBuilding(makeHouse(2.6, 1.8, 2.4), 16, 7.5, 0.6, 2.0);
// 农田小块
{
  const field = new THREE.Mesh(new THREE.BoxGeometry(6, 0.08, 4), M(0x8f7a3a));
  field.position.set(25, 0.04, -8);
  field.receiveShadow = true;
  world.add(field);
  for (let i = 0; i < 5; i++) {
    const row = new THREE.Mesh(new THREE.BoxGeometry(5.6, 0.16, 0.4), M(0x6f8f3a));
    row.position.set(25, 0.12, -9.4 + i * 0.8);
    world.add(row);
  }
}

// ============================================================
// 车站：站台 + 站房 + 雨棚（位于北侧直轨段）
// ============================================================
let stationU = 0;
{
  // 找曲线上最接近 (-10, -14.3) 的点作为停车位置
  let best = Infinity;
  for (let i = 0; i < 2000; i++) {
    const u = i / 2000;
    const p = curve.getPointAt(u);
    const d = Math.hypot(p.x + 10, p.z + 14.3);
    if (d < best) { best = d; stationU = u; }
  }
  const sp = curve.getPointAt(stationU);
  const st = curve.getTangentAt(stationU);
  // 指向镇中心一侧的法线
  let nx = -st.z, nz = st.x;
  if (nx * (-14 - sp.x) + nz * (0 - sp.z) < 0) { nx = -nx; nz = -nz; }
  const yaw = Math.atan2(st.x, st.z);

  // 站台
  const platform = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.55, 11), stoneMat);
  platform.position.set(sp.x + nx * 2.15, 0.27, sp.z + nz * 2.15);
  platform.rotation.y = yaw;
  platform.castShadow = platform.receiveShadow = true;
  world.add(platform);

  // 站房
  const stGroup = new THREE.Group();
  const hall = new THREE.Mesh(new THREE.BoxGeometry(2.6, 2.2, 5.4), M(0xe8cf9f));
  hall.position.y = 1.65; // 站台上表面 0.55
  const stRoof = new THREE.Mesh(gableRoofGeo(3.0, 1.1, 6.0), M(0x8a4a3a));
  stRoof.position.y = 2.75;
  stGroup.add(hall, stRoof);
  // 雨棚
  const canopy = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.1, 6.4), M(0x6a7a8a));
  canopy.position.set(1.9, 2.3, 0);
  stGroup.add(canopy);
  for (const cz of [-2.6, 2.6]) {
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 1.75, 6), M(0x4a4a52));
    post.position.set(2.6, 1.42, cz);
    stGroup.add(post);
  }
  // 站房窗（夜发光）
  const stWinMat = registerGlow(new THREE.MeshStandardMaterial({
    color: 0x3a4a58, roughness: 0.3, emissive: 0xffc26a, emissiveIntensity: 0,
  }), 1.0);
  for (const wz of [-1.6, 0, 1.6]) {
    const win = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.8, 0.9), stWinMat);
    win.position.set(1.32, 1.7, wz);
    stGroup.add(win);
  }
  // 站牌
  const sign = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.5, 2.2), M(0x2f4a6a));
  sign.position.set(2.35, 2.05, 0);
  stGroup.add(sign);
  stGroup.traverse((o) => { if (o.isMesh) { o.castShadow = o.receiveShadow = true; } });
  stGroup.position.set(sp.x + nx * 4.6, 0.55, sp.z + nz * 4.6);
  // 让站房长边平行轨道、带窗一面朝向站台
  stGroup.rotation.y = yaw + (nx * st.x + nz * st.z > 0 ? 0 : Math.PI);
  world.add(stGroup);
  buildings.push({ x: sp.x + nx * 4.6, z: sp.z + nz * 4.6, r: 3.4 });
}

// ============================================================
// 路灯（夜间发光 + 少量点光源）
// ============================================================
const lampHeadMat = registerGlow(new THREE.MeshStandardMaterial({
  color: 0xd8d0b8, roughness: 0.4, emissive: 0xffd98a, emissiveIntensity: 0,
}), 1.6);
function addLamp(x, z, withLight = false) {
  const g = new THREE.Group();
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.09, 2.6, 6), M(0x3a3f45));
  pole.position.y = 1.3;
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.2, 10, 8), lampHeadMat);
  head.position.y = 2.7;
  const cap = new THREE.Mesh(new THREE.ConeGeometry(0.3, 0.25, 8), M(0x3a3f45));
  cap.position.y = 2.92;
  g.add(pole, head, cap);
  if (withLight) {
    const pl = new THREE.PointLight(0xffc98a, 0, 11, 2);
    pl.position.y = 2.6;
    g.add(pl);
    nightLights.push(pl);
  }
  g.position.set(x, GROUND_TOP, z);
  g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  world.add(g);
}
addLamp(-11.8, -12.6, true);  // 站台西
addLamp(-8.2, -12.0, false);  // 站台东
addLamp(-11.6, -6, false);
addLamp(-11.6, 3.5, true);    // 主路
addLamp(-17.5, 2.6, true);    // 广场
addLamp(5.0, -0.8, false);    // 西桥头
addLamp(13.2, 2.6, true);     // 东岸
addLamp(21, -0.8, false);

// ============================================================
// 树木与灌木（避让轨道 / 河流 / 道路 / 建筑）
// ============================================================
const trunkMat = M(0x6a452a);
const leafMats = [M(0x4f7a35), M(0x5f8a3f), M(0x6f9a45), M(0x87a03a)];
function makeTree(scale = 1) {
  const g = new THREE.Group();
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.2, 0.9, 6), trunkMat);
  trunk.position.y = 0.45;
  const leaf = leafMats[(Math.random() * leafMats.length) | 0];
  const c1 = new THREE.Mesh(new THREE.ConeGeometry(0.95, 1.5, 7), leaf);
  c1.position.y = 1.5;
  const c2 = new THREE.Mesh(new THREE.ConeGeometry(0.65, 1.1, 7), leaf);
  c2.position.y = 2.35;
  g.add(trunk, c1, c2);
  g.scale.setScalar(scale * (0.8 + Math.random() * 0.5));
  g.rotation.y = Math.random() * Math.PI * 2;
  g.traverse((o) => { if (o.isMesh) { o.castShadow = o.receiveShadow = true; } });
  return g;
}
{
  // 轨道采样点（用于避让）
  const tp = [];
  for (let i = 0; i < 300; i++) tp.push(curve.getPointAt(i / 300));
  const nearTrack = (x, z) => tp.some((p) => Math.hypot(p.x - x, p.z - z) < 2.5);
  const nearRoad = (x, z) => roadSegs.some(({ ax, az, bx, bz, w }) => {
    const dx = bx - ax, dz = bz - az;
    const t = Math.max(0, Math.min(1, ((x - ax) * dx + (z - az) * dz) / (dx * dx + dz * dz)));
    return Math.hypot(ax + dx * t - x, az + dz * t - z) < w / 2 + 1.2;
  });
  const nearBuilding = (x, z) => buildings.some((b) => Math.hypot(b.x - x, b.z - z) < b.r + 1.2);
  const inRiver = (x) => Math.abs(x - RIVER_X) < RIVER_HALF + 1.0;

  let placed = 0, tries = 0;
  while (placed < 46 && tries < 800) {
    tries++;
    const x = -32 + Math.random() * 64;
    const z = -21.5 + Math.random() * 43;
    if (Math.abs(x) > 32 || Math.abs(z) > 21.5) continue;
    if (inRiver(x) || nearTrack(x, z) || nearRoad(x, z) || nearBuilding(x, z)) continue;
    const tree = makeTree();
    tree.position.set(x, GROUND_TOP, z);
    world.add(tree);
    placed++;
  }
  // 灌木
  for (let i = 0; i < 26; i++) {
    const x = -32 + Math.random() * 64, z = -21.5 + Math.random() * 43;
    if (inRiver(x) || nearTrack(x, z) || nearRoad(x, z) || nearBuilding(x, z)) continue;
    const bush = new THREE.Mesh(
      new THREE.SphereGeometry(0.45 + Math.random() * 0.3, 8, 6),
      leafMats[(Math.random() * leafMats.length) | 0]
    );
    bush.position.set(x, 0.3, z);
    bush.scale.y = 0.7;
    bush.castShadow = true;
    world.add(bush);
  }
}

// ============================================================
// 列车：车头 + 两节车厢，各自独立沿轨迹取点
// ============================================================
const train = new THREE.Group();
world.add(train);

function addWheels(g, zs, r = 0.3) {
  const wheelMat = M(0x2a2a2e, { roughness: 0.5, metalness: 0.4 });
  for (const z of zs) {
    for (const x of [-0.72, 0.72]) {
      const w = new THREE.Mesh(new THREE.CylinderGeometry(r, r, 0.16, 12), wheelMat);
      w.rotation.z = Math.PI / 2;
      w.position.set(x, r, z);
      w.castShadow = true;
      g.add(w);
    }
  }
}

function makeLoco() {
  const g = new THREE.Group();
  const green = M(0x2f5a3c, { roughness: 0.55 });
  const black = M(0x23262a, { roughness: 0.5 });
  const frame = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.3, 3.6), black);
  frame.position.y = 0.62;
  const boiler = new THREE.Mesh(new THREE.CylinderGeometry(0.52, 0.52, 2.2, 12), green);
  boiler.rotation.x = Math.PI / 2;
  boiler.position.set(0, 1.3, 0.6);
  const cab = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.5, 1.15), green);
  cab.position.set(0, 1.42, -1.15);
  const cabRoof = new THREE.Mesh(new THREE.BoxGeometry(1.66, 0.14, 1.3), black);
  cabRoof.position.set(0, 2.24, -1.15);
  const chimney = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.16, 0.62, 8), black);
  chimney.position.set(0, 2.05, 1.45);
  const dome = new THREE.Mesh(new THREE.SphereGeometry(0.2, 10, 8), M(0xc9a24a, { metalness: 0.6, roughness: 0.35 }));
  dome.position.set(0, 1.88, 0.55);
  // 排障器
  const cow = new THREE.Mesh(gableRoofGeo(1.4, 0.5, 0.7), M(0xa8442f));
  cow.rotation.x = Math.PI / 2;
  cow.position.set(0, 0.5, 1.95);
  // 前灯（夜发光）
  const headMat = registerGlow(new THREE.MeshStandardMaterial({
    color: 0xf8f0d8, roughness: 0.3, emissive: 0xffe9a8, emissiveIntensity: 0,
  }), 2.2);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.14, 10, 8), headMat);
  head.position.set(0, 1.42, 1.72);
  // 驾驶室窗
  const cabWinMat = registerGlow(new THREE.MeshStandardMaterial({
    color: 0x3a4a58, roughness: 0.3, emissive: 0xffc26a, emissiveIntensity: 0,
  }), 0.9);
  for (const wx of [-0.76, 0.76]) {
    const win = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.5, 0.6), cabWinMat);
    win.position.set(wx, 1.62, -1.15);
    g.add(win);
  }
  g.add(frame, boiler, cab, cabRoof, chimney, dome, cow, head);
  addWheels(g, [-1.25, -0.25, 0.85, 1.55], 0.32);
  g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  return g;
}

function makeCar(color) {
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.25, 3.1), M(color, { roughness: 0.6 }));
  body.position.y = 1.32;
  const roof = new THREE.Mesh(new THREE.CylinderGeometry(0.78, 0.78, 3.0, 12, 1, false, 0, Math.PI), M(0x6a6f75, { roughness: 0.5 }));
  roof.rotation.z = Math.PI / 2;
  roof.rotation.y = Math.PI / 2;
  roof.scale.y = 0.55;
  roof.position.y = 1.95;
  const frame = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.24, 3.2), M(0x2a2d31));
  frame.position.y = 0.62;
  const skirt = new THREE.Mesh(new THREE.BoxGeometry(1.52, 0.18, 3.12), M(0xc9a24a, { metalness: 0.4, roughness: 0.4 }));
  skirt.position.y = 0.78;
  // 车窗（夜发光）
  const winMat = registerGlow(new THREE.MeshStandardMaterial({
    color: 0x3a4a58, roughness: 0.3, emissive: 0xffd98a, emissiveIntensity: 0,
  }), 1.2);
  for (const sx of [-0.76, 0.76]) {
    for (const wz of [-0.95, 0, 0.95]) {
      const win = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.5, 0.55), winMat);
      win.position.set(sx, 1.45, wz);
      g.add(win);
    }
  }
  g.add(body, roof, frame, skirt);
  addWheels(g, [-1.05, 1.05], 0.3);
  g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  return g;
}

const vehicles = [makeLoco(), makeCar(0xb0503a), makeCar(0xc98a3a)];
for (const v of vehicles) train.add(v);
const CAR_GAP = 3.7; // 相邻车厢中心间距（沿弧长）

function placeTrain(s) {
  for (let i = 0; i < vehicles.length; i++) {
    let u = ((s - i * CAR_GAP) / TRACK_LEN) % 1;
    if (u < 0) u += 1;
    const pos = curve.getPointAt(u);
    const t = curve.getTangentAt(u);
    const v = vehicles[i];
    v.position.set(pos.x, 0.47, pos.z);
    v.rotation.y = Math.atan2(t.x, t.z);
  }
}

// ============================================================
// 白天 / 夜晚
// ============================================================
let isNight = false;
function applyMode() {
  const n = isNight;
  scene.background.copy(n ? NIGHT_BG : DAY_BG);
  scene.fog.color.copy(n ? NIGHT_BG : DAY_BG);
  sun.intensity = n ? 0.22 : 1.5;
  sun.color.set(n ? 0x8fa8d8 : 0xffc187);
  hemi.intensity = n ? 0.32 : 0.55;
  hemi.color.set(n ? 0x33456a : 0xffe2b0);
  hemi.groundColor.set(n ? 0x1a2030 : 0x8a7a58);
  fill.intensity = n ? 0.1 : 0.18;
  waterMat.color.set(n ? 0x1c3350 : 0x4a86c8);
  for (const { mat, intensity } of glowMats) mat.emissiveIntensity = n ? intensity : 0;
  for (const pl of nightLights) pl.intensity = n ? 9 : 0;
  renderer.toneMappingExposure = n ? 0.95 : 1.05;
}

// ============================================================
// 运行状态 / UI
// ============================================================
const BASE_SPEED = 4.2;      // 单位 / 秒
const DWELL_TIME = 2.0;      // 到站停留秒数
const stationS = stationU * TRACK_LEN;
let running = true;
let speedFactor = 1;
let trainS = 0;              // 车头所在弧长
let dwell = 0;               // 剩余停站时间

const btnRun = document.getElementById('btnRun');
const btnReset = document.getElementById('btnReset');
const btnMode = document.getElementById('btnMode');
const speedInput = document.getElementById('speed');
const speedVal = document.getElementById('speedVal');

function setRunning(v) {
  running = v;
  btnRun.textContent = running ? '暂停' : '运行';
}
btnRun.addEventListener('click', () => setRunning(!running));
btnMode.addEventListener('click', () => {
  isNight = !isNight;
  btnMode.textContent = isNight ? '白天' : '夜晚';
  applyMode();
});
speedInput.addEventListener('input', () => {
  speedFactor = parseFloat(speedInput.value);
  speedVal.textContent = speedFactor.toFixed(2) + '×';
});
btnReset.addEventListener('click', () => {
  camera.position.copy(INIT_POS);
  controls.target.copy(INIT_TGT);
  controls.update();
  trainS = 0;
  dwell = 0;
  speedFactor = 1;
  speedInput.value = '1';
  speedVal.textContent = '1.00×';
  setRunning(true);
  placeTrain(trainS);
});

// ============================================================
// 动画循环
// ============================================================
const clock = new THREE.Clock();
function animate() {
  requestAnimationFrame(animate);
  const dt = Math.min(clock.getDelta(), 0.05);

  if (running) {
    if (dwell > 0) {
      dwell -= dt; // 到站停留中（暂停时此计时同样冻结）
    } else {
      const prev = trainS;
      trainS += BASE_SPEED * speedFactor * dt;
      if (trainS >= TRACK_LEN) trainS -= TRACK_LEN;
      // 检测是否越过车站停车点（含环绕）
      const crossed = prev <= trainS
        ? (prev < stationS && trainS >= stationS)
        : (stationS > prev || stationS <= trainS);
      if (crossed) {
        trainS = stationS;
        dwell = DWELL_TIME;
      }
    }
    placeTrain(trainS);
  }

  // 水面微波
  const t = clock.elapsedTime;
  const posAttr = waterGeo.attributes.position;
  for (let i = 0; i < posAttr.count; i++) {
    const x = waterBase[i * 3], z = waterBase[i * 3 + 2];
    posAttr.array[i * 3 + 1] = Math.sin(x * 1.8 + t * 1.6) * 0.04 + Math.cos(z * 0.9 + t * 1.1) * 0.04;
  }
  posAttr.needsUpdate = true;

  controls.update();
  renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

applyMode();
placeTrain(trainS);
animate();
