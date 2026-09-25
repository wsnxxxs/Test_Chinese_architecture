import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { MATS, skyTexture } from './materials.js';
import { VoxelBuilder } from './voxel.js';
import { buildGate, buildMainHall, buildSideHall, buildTower, buildPagoda } from './buildings.js';
import { buildEnvironment } from './environment.js';

/* ============================== 渲染器 ============================== */
const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.12;
document.getElementById('app').appendChild(renderer.domElement);

/* ============================== 场景 · 晨昏氛围 ============================== */
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xEBC5A0);
scene.fog = new THREE.Fog(0xEBC5A0, 150, 420);

// 天空穹顶（竖向渐变：顶蓝天 → 地平线暖橙）
const sky = new THREE.Mesh(
  new THREE.SphereGeometry(500, 32, 16),
  new THREE.MeshBasicMaterial({ map: skyTexture(), side: THREE.BackSide, fog: false, depthWrite: false })
);
scene.add(sky);

/* ============================== 相机 · 环绕控制 ============================== */
const camera = new THREE.PerspectiveCamera(48, window.innerWidth / window.innerHeight, 0.5, 1400);
camera.position.set(74, 56, 100);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 9, -6);
controls.enableDamping = true;
controls.dampingFactor = 0.06;
controls.minDistance = 35;
controls.maxDistance = 260;
controls.maxPolarAngle = 1.45;
controls.autoRotate = true;
controls.autoRotateSpeed = 0.35;
controls.addEventListener('start', () => { controls.autoRotate = false; });

// 深链视角（如 #gate / #main / #pagoda），便于定点查看与截图验收
const VIEWS = {
  front:  { pos: [0, 34, 132], target: [0, 8, 2] },
  gate:   { pos: [26, 16, 84], target: [0, 6, 45] },
  main:   { pos: [34, 24, 26], target: [0, 11, -22] },
  side:   { pos: [-64, 28, 22], target: [-16, 7, -8] },
  towers: { pos: [46, 20, 56], target: [0, 6, 25] },
  pagoda: { pos: [36, 38, -8], target: [0, 15, -48] },
  top:    { pos: [0, 175, 46], target: [0, 0, -6] },
};
const viewKey = new URLSearchParams(location.search).get('v') || location.hash.replace('#', '');
if (VIEWS[viewKey]) {
  const v = VIEWS[viewKey];
  camera.position.set(...v.pos);
  controls.target.set(...v.target);
  controls.autoRotate = false;
}

/* ============================== 光照 ============================== */
scene.add(new THREE.HemisphereLight(0xBFD4F0, 0x8A7A5E, 0.55));
scene.add(new THREE.AmbientLight(0x706656, 0.25));

// 西南低位晨光（长影）
const sun = new THREE.DirectionalLight(0xFFD3A0, 3.0);
sun.position.set(-130, 70, 110);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.left = -95;
sun.shadow.camera.right = 95;
sun.shadow.camera.top = 95;
sun.shadow.camera.bottom = -95;
sun.shadow.camera.near = 20;
sun.shadow.camera.far = 420;
sun.shadow.bias = -0.0006;
sun.shadow.normalBias = 0.35;
scene.add(sun);
scene.add(sun.target);
sun.target.position.set(0, 0, -5);

// 太阳圆盘（挂在光线上）
const sunDisc = new THREE.Mesh(
  new THREE.CircleGeometry(22, 32),
  new THREE.MeshBasicMaterial({ color: 0xFFF3D5, fog: false })
);
sunDisc.position.copy(sun.position).normalize().multiplyScalar(430);
sunDisc.lookAt(0, 0, 0);
scene.add(sunDisc);

// 灯笼暖光（无阴影点光源）
const lanternLight1 = new THREE.PointLight(0xFF9A4A, 45, 26, 2);
lanternLight1.position.set(0, 6.5, 44);
scene.add(lanternLight1);
const lanternLight2 = new THREE.PointLight(0xFF9A4A, 55, 30, 2);
lanternLight2.position.set(0, 9, -14);
scene.add(lanternLight2);

/* ============================== 体素总装 ============================== */
const vb = new VoxelBuilder();

let smokeCubes = [];
smokeCubes = buildEnvironment(vb.scope(0, 0, 0), scene);

buildGate(vb.scope(0, 46, 0), scene);                                 // 山门 · 南
buildMainHall(vb.scope(0, -24, 0), scene);                             // 主殿 · 中轴核心
buildSideHall(vb.scope(-26, -8, Math.PI / 2), scene, { text: '文殊殿' }); // 西配殿
buildSideHall(vb.scope(26, -8, -Math.PI / 2), scene, { text: '普贤殿' }); // 东配殿
buildTower(vb.scope(19, 26, -Math.PI / 2), scene, { kind: 'bell' });   // 钟楼（东）
buildTower(vb.scope(-19, 26, Math.PI / 2), scene, { kind: 'drum' });   // 鼓楼（西）
buildPagoda(vb.scope(0, -50, 0), scene);                               // 宝塔 · 北端

const voxelMeshes = vb.finalize(MATS);
for (const m of voxelMeshes) scene.add(m);

/* ============================== 动画循环 · HUD ============================== */
const statsEl = document.getElementById('stats');
const clock = new THREE.Clock();
let frames = 0;
let acc = 0;
let fpsVal = null;
let hudT = 0;

function updateSmoke(t) {
  // 香烟：上升 + 摆动 + 放大 + 淡出
  for (const m of smokeCubes) {
    const p = (t * 0.22 + m.userData.phase) % 1;
    m.position.set(
      Math.sin((t + m.userData.phase * 9) * 1.1) * 0.55,
      4.2 + p * 7.5,
      2 + Math.cos((t + m.userData.phase * 7) * 0.9) * 0.4
    );
    const s = 0.6 + p * 1.9;
    m.scale.set(s, s, s);
    m.material.opacity = 0.42 * (1 - p) * Math.min(1, p * 8);
  }
}

function animate() {
  requestAnimationFrame(animate);
  const dt = clock.getDelta();
  const t = clock.elapsedTime;

  controls.update();

  // 灯笼呼吸
  MATS.lantern.emissiveIntensity = 0.6 + 0.18 * Math.sin(t * 2.1);
  updateSmoke(t);

  renderer.render(scene, camera);

  frames++;
  if (dt < 0.25) acc += dt; // 只统计真实帧间隔（无头/虚拟时钟下不计入）
  if (acc >= 0.5) {
    fpsVal = frames / acc;
    frames = 0;
    acc = 0;
  }
  hudT += dt;
  if (hudT >= 0.5) {
    hudT = 0;
    const info = renderer.info.render;
    const cp = camera.position;
    statsEl.textContent =
      `FPS ${fpsVal != null ? fpsVal.toFixed(0) : '—'} · DrawCalls ${info.calls} · Tris ${(info.triangles / 1000).toFixed(1)}k · 体素 ${vb.count}` +
      ` · C ${cp.x.toFixed(0)},${cp.y.toFixed(0)},${cp.z.toFixed(0)} · K=${viewKey || '-'}`;
  }
}

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();
