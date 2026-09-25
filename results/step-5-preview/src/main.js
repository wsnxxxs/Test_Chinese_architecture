import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { VoxelBuilder, makeVoxelTexture } from './voxel.js';
import { buildScene, LANTERN_LIGHTS } from './scene.js';

// ============================================================
//  渲染器 / 场景 / 相机
// ============================================================
const app = document.getElementById('app');
const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.06;
app.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.5, 1400);
camera.position.set(112, 86, 148);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 8, -4);
controls.enableDamping = true;
controls.dampingFactor = 0.06;
controls.minDistance = 30;
controls.maxDistance = 320;
controls.maxPolarAngle = Math.PI * 0.495;
controls.autoRotate = true;
controls.autoRotateSpeed = 0.8;
controls.enabled = false; // 入场动画期间锁定

// ============================================================
//  天空（渐变天穹 + 太阳光晕）
// ============================================================
function skyGradient(top, mid, bottom) {
  const canvas = document.createElement('canvas');
  canvas.width = 16; canvas.height = 512;
  const ctx = canvas.getContext('2d');
  const g = ctx.createLinearGradient(0, 0, 0, 512);
  g.addColorStop(0, top);
  g.addColorStop(0.52, mid);
  g.addColorStop(1, bottom);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 16, 512);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function glowTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 256;
  const ctx = canvas.getContext('2d');
  const g = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
  g.addColorStop(0, 'rgba(255,244,214,1)');
  g.addColorStop(0.25, 'rgba(255,214,150,0.55)');
  g.addColorStop(0.6, 'rgba(255,180,110,0.16)');
  g.addColorStop(1, 'rgba(255,170,90,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 256, 256);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

const skyMat = new THREE.MeshBasicMaterial({ side: THREE.BackSide, fog: false, toneMapped: false, depthWrite: false });
const sky = new THREE.Mesh(new THREE.SphereGeometry(620, 32, 20), skyMat);
scene.add(sky);

const glowMat = new THREE.SpriteMaterial({
  map: glowTexture(), blending: THREE.AdditiveBlending, fog: false, toneMapped: false, depthWrite: false, transparent: true,
});
const sunGlow = new THREE.Sprite(glowMat);
sunGlow.scale.setScalar(190);
scene.add(sunGlow);

// ============================================================
//  光照
// ============================================================
const sun = new THREE.DirectionalLight(0xffd2a0, 2.8);
sun.position.set(88, 60, 42);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.left = -100;
sun.shadow.camera.right = 100;
sun.shadow.camera.top = 100;
sun.shadow.camera.bottom = -100;
sun.shadow.camera.near = 20;
sun.shadow.camera.far = 340;
sun.shadow.bias = -0.0004;
sun.shadow.normalBias = 0.6;
sun.target.position.set(0, 0, -2);
scene.add(sun, sun.target);

const hemi = new THREE.HemisphereLight(0x86a8ee, 0x6a5844, 0.85);
scene.add(hemi);

const fill = new THREE.DirectionalLight(0xa8c0ff, 0.5);
fill.position.set(-70, 42, -55);
scene.add(fill);

const lanternLights = LANTERN_LIGHTS.map(([x, y, z]) => {
  const l = new THREE.PointLight(0xff8a3c, 40, 26, 2);
  l.position.set(x, y, z);
  scene.add(l);
  return l;
});

scene.fog = new THREE.Fog(0xe8b98a, 160, 460);

// ============================================================
//  体素世界
// ============================================================
const builder = new VoxelBuilder();
buildScene(builder);
const texture = makeVoxelTexture();
const world = new THREE.Mesh(
  builder.build(),
  new THREE.MeshStandardMaterial({ map: texture, vertexColors: true, roughness: 0.92, metalness: 0.03, dithering: true }),
);
world.castShadow = true;
world.receiveShadow = true;
scene.add(world);

// ============================================================
//  晨 / 昏 预设
// ============================================================
const PRESETS = {
  dusk: {
    label: '🌅 切换晨光',
    sun: { color: 0xffd2a0, pos: [88, 60, 42], intensity: 2.8 },
    hemi: { sky: 0x86a8ee, ground: 0x6a5844, intensity: 0.85 },
    fill: 0.4,
    fog: 0xe8b98a,
    sky: ['#1e3560', '#8f7bb4', '#ffc07a'],
    glow: [400, 62, 168],
    lantern: 40,
  },
  dawn: {
    label: '🌇 切换黄昏',
    sun: { color: 0xfff0dc, pos: [-85, 46, 58], intensity: 2.3 },
    hemi: { sky: 0x9fc0f5, ground: 0x6a5844, intensity: 1.05 },
    fill: 0.7,
    fog: 0xd8e4ee,
    sky: ['#274a80', '#9db9d9', '#ffe9c9'],
    glow: [-420, 78, 232],
    lantern: 12,
  },
};
let tod = 'dusk';

function applyPreset(key) {
  const p = PRESETS[key];
  tod = key;
  sun.color.set(p.sun.color);
  sun.position.set(...p.sun.pos);
  sun.intensity = p.sun.intensity;
  hemi.color.set(p.hemi.sky);
  hemi.groundColor.set(p.hemi.ground);
  hemi.intensity = p.hemi.intensity;
  fill.intensity = p.fill;
  scene.fog.color.set(p.fog);
  skyMat.map = skyGradient(...p.sky);
  skyMat.needsUpdate = true;
  sunGlow.position.set(...p.glow).normalize().multiplyScalar(560);
  lanternLights.forEach((l) => { l.intensity = p.lantern; });
  document.getElementById('tod').textContent = p.label;
}
applyPreset('dusk');

document.getElementById('tod').addEventListener('click', () => {
  applyPreset(tod === 'dusk' ? 'dawn' : 'dusk');
});

// ============================================================
//  入场动画 + 主循环
// ============================================================
const camFrom = new THREE.Vector3(112, 86, 148);
const camTo = new THREE.Vector3(80, 56, 104);
const lookFrom = new THREE.Vector3(0, 20, 12);
const lookTo = new THREE.Vector3(0, 8, -4);
const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const INTRO = 5.0;
let intro = 0;
const clock = new THREE.Clock();

function tick() {
  requestAnimationFrame(tick);
  const dt = Math.min(clock.getDelta(), 0.1);

  if (intro < INTRO) {
    intro += dt;
    const t = easeInOut(Math.min(intro / INTRO, 1));
    camera.position.lerpVectors(camFrom, camTo, t);
    controls.target.lerpVectors(lookFrom, lookTo, t);
    camera.lookAt(controls.target);
    if (intro >= INTRO) controls.enabled = true;
  } else {
    controls.update();
  }
  renderer.render(scene, camera);

  // FPS
  frames++;
  const now = performance.now();
  if (now - lastFpsT > 500) {
    const fps = Math.round((frames * 1000) / (now - lastFpsT));
    statsEl.textContent = `${fps} FPS · ${builder.count.toLocaleString()} 体素块`;
    frames = 0;
    lastFpsT = now;
  }
}

let frames = 0;
let lastFpsT = performance.now();
const statsEl = document.getElementById('stats');
tick();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// 调试/自动化测试钩子
window.__debug = { camera, controls, renderer, scene, builder, introDone: () => intro >= INTRO };
