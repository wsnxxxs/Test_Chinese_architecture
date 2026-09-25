import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { VoxelWorld } from './builder.js';
import {
  buildMainHall, buildGate, buildTower, buildSideHall, buildPagoda,
} from './buildings.js';
import { buildSite } from './site.js';
import { createSky, createClouds } from './sky.js';

// —— 渲染器 ——
const app = document.getElementById('app');
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.12;
app.appendChild(renderer.domElement);

// —— 场景 / 相机 ——
const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0xe39a6b, 170, 500);

const camera = new THREE.PerspectiveCamera(42, window.innerWidth / window.innerHeight, 0.5, 1400);
camera.position.set(120, 63, 107);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 11, -13);
controls.enableDamping = true;
controls.dampingFactor = 0.06;
controls.autoRotate = false;         // 入场动画结束后再开启环视
controls.autoRotateSpeed = 0.55;
controls.maxPolarAngle = 1.5;
controls.minDistance = 24;
controls.maxDistance = 320;

// —— 入场推镜：远景缓推向默认视角 ——
const camStart = new THREE.Vector3(196, 108, 176);
const camEnd = camera.position.clone();
let introT = 0;
const INTRO = 3.4;
let introDone = false;
camera.position.copy(camStart);
function endIntro() {
  if (!introDone) {
    introDone = true;
    controls.autoRotate = true;      // 打开页面即自动环视全貌
  }
}
controls.addEventListener('start', () => {
  introDone = true;                  // 用户接管
  controls.autoRotate = false;
});

// —— 光照（黄昏暖阳 + 冷天光补光） ——
const sun = new THREE.DirectionalLight(0xffc290, 2.8);
sun.position.set(-150, 115, 165);   // 西南低角度
sun.target.position.set(0, 0, -8);
scene.add(sun, sun.target);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.left = -115;
sun.shadow.camera.right = 115;
sun.shadow.camera.top = 115;
sun.shadow.camera.bottom = -115;
sun.shadow.camera.near = 150;
sun.shadow.camera.far = 450;
sun.shadow.bias = -0.0004;
sun.shadow.normalBias = 0.6;

scene.add(new THREE.HemisphereLight(0x7c86b8, 0x8a6244, 0.75));
scene.add(new THREE.AmbientLight(0xff9c6e, 0.16));

// 灯笼暖光（无阴影，黄昏点缀）
for (const [x, y, z] of [[0, 6, 40], [10, 7, -14], [-10, 7, -14], [0, 5, -7], [0, 30, -53]]) {
  const p = new THREE.PointLight(0xff9a55, 60, 30, 1.9);
  p.position.set(x, y, z);
  scene.add(p);
}

// —— 体素世界（全部静态体素合入单个 InstancedMesh） ——
const world = new VoxelWorld();
buildSite(world);            // 地面/铺装/院墙/绿化（先铺，建筑覆盖其上）
buildMainHall(world);        // 主殿（重檐庑殿）
buildGate(world);            // 山门（悬山）
buildTower(world, +1, 'bell');  // 钟楼（攒尖）
buildTower(world, -1, 'drum');  // 鼓楼（攒尖）
buildSideHall(world, +1);    // 东配殿（歇山）
buildSideHall(world, -1);    // 西配殿（歇山）
buildPagoda(world);          // 宝塔
const voxelMesh = world.toMesh();
scene.add(voxelMesh);

// —— 天空与流云 ——
createSky(scene, sun);
const clouds = createClouds(scene);

// —— 主循环 ——
const fpsEl = document.getElementById('fps');
let frames = 0;
let t0 = performance.now();
const clock = new THREE.Clock();

renderer.setAnimationLoop(() => {
  const dt = clock.getDelta();
  if (!introDone) {
    introT += dt;
    const t = Math.min(introT / INTRO, 1);
    const e = 1 - Math.pow(1 - t, 3); // easeOutCubic
    camera.position.lerpVectors(camStart, camEnd, e);
    if (t >= 1) endIntro();
  }
  controls.update();
  for (const c of clouds) {
    c.position.x += c.userData.v * dt;
    if (c.position.x > 260) c.position.x = -260;
  }
  renderer.render(scene, camera);

  frames++;
  const now = performance.now();
  if (now - t0 > 500) {
    fpsEl.textContent = `${Math.round((frames * 1000) / (now - t0))} FPS · ${world.count().toLocaleString('en-US')} voxels`;
    frames = 0;
    t0 = now;
  }
});

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// —— 调试钩子：外部按方位角/仰角/距离控制相机 ——
window.__cam = (azimuthDeg, elevationDeg, dist, tx = 0, ty = 9, tz = -12) => {
  controls.autoRotate = false;
  const az = (azimuthDeg * Math.PI) / 180;
  const el = (elevationDeg * Math.PI) / 180;
  controls.target.set(tx, ty, tz);
  camera.position.set(
    tx + dist * Math.cos(el) * Math.sin(az),
    ty + dist * Math.sin(el),
    tz + dist * Math.cos(el) * Math.cos(az)
  );
  controls.update();
};
