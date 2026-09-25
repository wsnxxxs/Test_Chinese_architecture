// ============================================================================
// main.js — 场景装配、渲染与交互
// ============================================================================
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { buildAll, COLORS, lanterns } from './builders.js';

// --- 场景 ---
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x223047); // 黄昏蓝调天空
scene.fog = new THREE.Fog(0x223047, 75, 170); // 远景雾气，增强氛围纵深

// --- 相机（开场即俯瞰全貌）---
const camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.1,
  500
);
camera.position.set(0, 32, 72);

// --- 渲染器 ---
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
document.body.appendChild(renderer.domElement);

// --- 控制器（自动巡览 + 可接管）---
const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 6, 0);
controls.enableDamping = true;
controls.dampingFactor = 0.06;
controls.autoRotate = true;
controls.autoRotateSpeed = 0.5;
controls.maxPolarAngle = Math.PI * 0.49; // 不允许翻到地面以下
controls.minDistance = 22;
controls.maxDistance = 150;

// --- 光照（黄昏方向光 + 半球补光 + 环境）---
const hemi = new THREE.HemisphereLight(0x9fb4d6, 0x3a2a1a, 0.55);
scene.add(hemi);

const sun = new THREE.DirectionalLight(0xffd2a1, 1.7); // 暖色斜阳
sun.position.set(48, 62, 38);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.near = 1;
sun.shadow.camera.far = 240;
const S = 72;
sun.shadow.camera.left = -S;
sun.shadow.camera.right = S;
sun.shadow.camera.top = S;
sun.shadow.camera.bottom = -S;
sun.shadow.bias = -0.0005;
scene.add(sun);

scene.add(new THREE.AmbientLight(0x404a66, 0.3));

// --- 地面（草地）---
const ground = new THREE.Mesh(
  new THREE.PlaneGeometry(220, 220),
  new THREE.MeshLambertMaterial({ color: 0x4f7a3a })
);
ground.rotation.x = -Math.PI / 2;
ground.position.y = 0;
ground.receiveShadow = true;
scene.add(ground);

// --- 体素建筑：按颜色分组用 InstancedMesh 渲染（极少 draw call，性能友好）---
const { voxels } = buildAll();
const boxGeo = new THREE.BoxGeometry(0.98, 0.98, 0.98); // 轻微缝隙 → 体素拼接感

let totalVoxels = 0;
for (const [colorKey, list] of Object.entries(voxels)) {
  const mat = new THREE.MeshLambertMaterial({ color: parseInt(colorKey, 10) });
  const mesh = new THREE.InstancedMesh(boxGeo, mat, list.length);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  const m = new THREE.Matrix4();
  for (let i = 0; i < list.length; i++) {
    const [x, y, z] = list[i];
    m.makeTranslation(x, y + 0.5, z);
    mesh.setMatrixAt(i, m);
  }
  mesh.instanceMatrix.needsUpdate = true;
  scene.add(mesh);
  totalVoxels += list.length;
}
console.log(`[voxel-temple] 体素总数: ${totalVoxels}, 颜色分组: ${Object.keys(voxels).length}`);

// --- 灯笼（发光体 + 有限数量暖色点光，控制开销）---
const lanternMat = new THREE.MeshStandardMaterial({
  color: COLORS.lantern,
  emissive: COLORS.lantern,
  emissiveIntensity: 1.6,
});
const lanternGeo = new THREE.SphereGeometry(0.7, 12, 12);
for (const [x, y, z] of lanterns) {
  const sph = new THREE.Mesh(lanternGeo, lanternMat);
  sph.position.set(x, y + 0.5, z);
  scene.add(sph);
}
// 仅取前 4 个挂点放置点光源，兼顾氛围与帧率
for (const [x, y, z] of lanterns.slice(0, 4)) {
  const pl = new THREE.PointLight(0xff7a3a, 28, 32, 2);
  pl.position.set(x, y + 1.2, z);
  scene.add(pl);
}

// --- 渲染循环 ---
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();

// --- 自适应窗口 ---
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
