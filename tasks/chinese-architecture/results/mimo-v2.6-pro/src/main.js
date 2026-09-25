import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { Builder } from './builder.js';
import { C } from './colors.js';
import { buildEnvironment } from './environment.js';
import { buildCompound } from './buildings.js';
import { applyPalette } from './palettes.js';

/* ---------------------------------- 渲染器 ---------------------------------- */
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
document.getElementById('app').appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0xb2836c, 160, 620);

const camera = new THREE.PerspectiveCamera(42, window.innerWidth / window.innerHeight, 1, 2600);
camera.position.set(126, 106, 190);

/* ---------------------------------- 光源（晨昏） ---------------------------------- */
const sun = new THREE.DirectionalLight(0xff9a55, 3.0);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.left = -125;
sun.shadow.camera.right = 125;
sun.shadow.camera.top = 125;
sun.shadow.camera.bottom = -125;
sun.shadow.camera.near = 20;
sun.shadow.camera.far = 520;
sun.shadow.bias = -0.0004;
sun.shadow.normalBias = 0.55;
sun.target.position.set(0, 4, -6);
scene.add(sun, sun.target);

const fill = new THREE.DirectionalLight(0x7285c8, 0.5);
scene.add(fill);
const hemi = new THREE.HemisphereLight(0x8f7fc0, 0x5c4a38, 0.75);
scene.add(hemi);
const amb = new THREE.AmbientLight(0x8c7fb8, 0.38);
scene.add(amb);

// 灯笼点光（暖光晕，无阴影）
const lamps = [];
for (const [x, y, z, base] of [
  [0, 8, 62, 26], [0, 11, -8, 34], [0, 7, 26, 22], [31, 20, 47, 18], [-31, 20, 47, 18],
]) {
  const l = new THREE.PointLight(0xffb070, base, 46, 1.8);
  l.position.set(x, y, z);
  l.userData.base = base;
  lamps.push(l);
  scene.add(l);
}

/* ---------------------------------- 天空 ---------------------------------- */
const skyMat = new THREE.ShaderMaterial({
  uniforms: {
    top: { value: new THREE.Color(0x272a5e) },
    bottom: { value: new THREE.Color(0xe8875a) },
  },
  vertexShader: /* glsl */`
    varying vec3 vDir;
    void main() {
      vDir = normalize(position);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }`,
  fragmentShader: /* glsl */`
    uniform vec3 top;
    uniform vec3 bottom;
    varying vec3 vDir;
    void main() {
      float h = clamp(vDir.y * 4.0 + 0.16, 0.0, 1.0);
      vec3 col = mix(bottom, top, smoothstep(0.0, 0.5, h));
      gl_FragColor = vec4(col, 1.0);
    }`,
  side: THREE.BackSide,
  depthWrite: false,
  fog: false,
});
const sky = new THREE.Mesh(new THREE.SphereGeometry(1200, 32, 20), skyMat);
sky.frustumCulled = false;
scene.add(sky);

/* ---------------------------------- 场景体素 ---------------------------------- */
const matteMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95, metalness: 0.0 });
const tileMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.42, metalness: 0.08 });
const glowMat = new THREE.MeshStandardMaterial({
  vertexColors: true, roughness: 0.55, metalness: 0.0,
  emissive: new THREE.Color(0xff8844), emissiveIntensity: 0.6,
});

const solid = new Builder(matteMat);
const tileB = new Builder(tileMat);
const glow = new Builder(glowMat);

buildEnvironment({ solid, tile: tileB, glow });
buildCompound(solid, tileB, glow);

const meshMasonry = solid.build('masonry');
const meshTiles = tileB.build('tiles');
const meshGlow = glow.build('lanterns');
meshGlow.castShadow = false;
scene.add(meshMasonry, meshTiles, meshGlow);

const voxels = solid.count + tileB.count + glow.count;

/* ---------------------------------- 控制器 ---------------------------------- */
const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 6, -4);
controls.enableDamping = true;
controls.dampingFactor = 0.06;
controls.minDistance = 45;
controls.maxDistance = 460;
controls.maxPolarAngle = Math.PI * 0.49;
controls.autoRotate = true;
controls.autoRotateSpeed = 0.45;
controls.update();

/* ---------------------------------- UI ---------------------------------- */
const env = { renderer, scene, sun, fill, hemi, amb, skyMat, glowMat, lamps };
let currentPal = 'dusk';
applyPalette(currentPal, env);

document.getElementById('paletteBtns').addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-pal]');
  if (!btn) return;
  currentPal = btn.dataset.pal;
  for (const b of document.querySelectorAll('#paletteBtns .btn')) {
    b.classList.toggle('active', b === btn);
  }
  applyPalette(currentPal, env);
});

const rotateBtn = document.getElementById('rotateBtn');
rotateBtn.addEventListener('click', () => {
  controls.autoRotate = !controls.autoRotate;
  rotateBtn.classList.toggle('active', controls.autoRotate);
});

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

/* ---------------------------------- 渲染循环 ---------------------------------- */
const PALETTES_LABEL = { dawn: '晨曦', dusk: '暮色', night: '夜景' };
const statsEl = document.getElementById('stats');
let frames = 0;
let last = performance.now();
let fps = 60;

renderer.setAnimationLoop(() => {
  controls.update();
  renderer.render(scene, camera);

  frames++;
  const now = performance.now();
  if (now - last > 500) {
    fps = (frames * 1000) / (now - last);
    frames = 0;
    last = now;
    const info = renderer.info;
    statsEl.textContent =
      `${fps.toFixed(0)} FPS · ${voxels} voxels · ${info.render.calls} draws · ` +
      `${(info.render.triangles / 1000).toFixed(0)}k tris · ${PALETTES_LABEL[currentPal]}`;
  }
});

console.log(`[voxel] 体素数量 ${voxels}`);

// 便于在控制台检查场景状态（相机 / 渲染器 / 场景）
window.__voxel = { camera, controls, renderer, scene, voxels };
