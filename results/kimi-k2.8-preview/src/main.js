import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { buildScene } from './layout.js';

// ---------- 渲染器 ----------
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.12;
document.getElementById('app').appendChild(renderer.domElement);

// ---------- 场景：黄昏暖调 ----------
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xf3c185);
scene.fog = new THREE.Fog(0xf3c185, 150, 320);

// ---------- 相机与操控 ----------
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 600);
camera.position.set(58, 38, 86);
const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 7, 4);
controls.enableDamping = true;
controls.dampingFactor = 0.06;
controls.autoRotate = true;
controls.autoRotateSpeed = 0.5;
controls.minDistance = 25;
controls.maxDistance = 200;
controls.maxPolarAngle = 1.46;

// ---------- 光源 ----------
// 暖阳（低角度，拉长阴影）
const sun = new THREE.DirectionalLight(0xffd2a0, 2.4);
sun.position.set(55, 52, 75);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.left = -95;
sun.shadow.camera.right = 95;
sun.shadow.camera.top = 95;
sun.shadow.camera.bottom = -95;
sun.shadow.camera.near = 10;
sun.shadow.camera.far = 280;
sun.shadow.bias = -0.0005;
sun.shadow.normalBias = 0.6;
scene.add(sun);

// 天光
scene.add(new THREE.HemisphereLight(0xffe3bb, 0x55663c, 0.55));
scene.add(new THREE.AmbientLight(0x8a6a50, 0.18));

// ---------- 建景 ----------
const voxelCount = buildScene(scene);
console.log(`[voxel-temple] voxels: ${voxelCount}`);

// ---------- FPS ----------
const fpsEl = document.getElementById('fps');
let frames = 0, lastT = performance.now();

// ---------- 循环 ----------
function tick() {
  requestAnimationFrame(tick);
  controls.update();
  renderer.render(scene, camera);
  frames++;
  const now = performance.now();
  if (now - lastT >= 500) {
    fpsEl.textContent = Math.round((frames * 1000) / (now - lastT)) + ' fps';
    frames = 0;
    lastT = now;
  }
}
tick();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
