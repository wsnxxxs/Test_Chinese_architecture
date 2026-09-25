import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { VoxelWorld } from './voxel.js';
import { C } from './palette.js';
import { buildHall, buildGate, buildPagoda, buildTower } from './buildings.js';
import { makeSky, createLights, buildGround, buildPerimeterWall, addDecor } from './scene.js';

const app = document.getElementById('app');

// 渲染器
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.35;
renderer.outputColorSpace = THREE.SRGBColorSpace;
app.appendChild(renderer.domElement);

// 场景与雾
const scene = new THREE.Scene();
scene.fog = new THREE.Fog('#6b4a5a', 90, 320);

// 相机与控制
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.5, 800);
camera.position.set(74, 52, 90);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 7, -2);
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.maxPolarAngle = Math.PI * 0.49;
controls.minDistance = 18;
controls.maxDistance = 240;
controls.autoRotate = true;
controls.autoRotateSpeed = 0.4;
controls.update();

// 天空
scene.add(
  new THREE.Mesh(
    new THREE.SphereGeometry(320, 32, 16),
    new THREE.MeshBasicMaterial({ map: makeSky(), side: THREE.BackSide, depthWrite: false, fog: false })
  )
);

// 灯光
createLights(scene);

// 体素世界
const world = new VoxelWorld(scene);
buildGround(world);
buildPerimeterWall(world);

// —— 建筑群（中轴对称）——
buildGate(world, { cx: 0, cz: 40 }); // 山门
buildHall(world, { // 主殿（庑殿顶·琉璃黄）
  cx: 0, cz: 0, W: 18, D: 12, wallH: 5,
  roof: C.roofGold, roofLt: C.roofGoldLt, roofType: 'hip',
  frontWindows: true, doorHalf: 2,
});
buildHall(world, { // 西配殿（歇山顶·青瓦）
  cx: -26, cz: -3, W: 10, D: 8, wallH: 4,
  roof: C.roofGray, roofLt: C.roofGrayLt, roofType: 'xieshan', rotY: Math.PI / 2,
});
buildHall(world, { // 东配殿（歇山顶·青瓦）
  cx: 26, cz: -3, W: 10, D: 8, wallH: 4,
  roof: C.roofGray, roofLt: C.roofGrayLt, roofType: 'xieshan', rotY: -Math.PI / 2,
});
buildPagoda(world, { cx: -20, cz: -28 }); // 宝塔（琉璃绿）
buildTower(world, { cx: 20, cz: -28 }); // 钟楼（琉璃蓝）

addDecor(world);

world.build();
console.log('体素总数:', world.count());

// 响应式
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// 渲染循环
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();

// UI 按钮
document.getElementById('btn-rotate').addEventListener('click', function () {
  controls.autoRotate = !controls.autoRotate;
  this.textContent = controls.autoRotate ? '自动旋转：开' : '自动旋转：关';
});
document.getElementById('btn-reset').addEventListener('click', () => {
  camera.position.set(74, 52, 90);
  controls.target.set(0, 7, -2);
  controls.update();
});
