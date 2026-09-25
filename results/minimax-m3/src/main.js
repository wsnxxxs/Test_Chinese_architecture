/**
 * Voxel Chinese Palace - main entry.
 * Sets up Three.js renderer, scene, camera, OrbitControls, and render loop.
 */
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { createScene } from './scene.js';

const container = document.getElementById('app');
const loadingEl = document.getElementById('loading');
const fpsEl = document.getElementById('fps');
const blocksEl = document.getElementById('blocks');

// ---- Renderer ----
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  powerPreference: 'high-performance',
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
container.appendChild(renderer.domElement);

// ---- Scene & Camera ----
const scene = new THREE.Scene();
// Warm fog blends with sky horizon, pushed far so it doesn't kill the scene
scene.fog = new THREE.Fog(0xd09060, 90, 260);

const camera = new THREE.PerspectiveCamera(
  55,
  window.innerWidth / window.innerHeight,
  0.1,
  2000
);
// Look down the central axis from a 3/4 elevated angle on the south-east side.
// Central axis runs north (z = -30 .. +12) so a +x/+z corner view sees the
// full procession: gate (far) -> pagoda -> main hall (near), with side halls
// flanking the main hall and bell towers flanking the gate.
camera.position.set(46, 36, 40);
camera.lookAt(0, 2, -14);

const stats = createScene(scene);
blocksEl.textContent = stats.blockCount.toLocaleString();

// ---- Controls ----
const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 2, -14);
controls.enableDamping = true;
controls.dampingFactor = 0.06;
controls.minDistance = 14;
controls.maxDistance = 110;
controls.maxPolarAngle = Math.PI * 0.49;   // don't go below ground
controls.minPolarAngle = Math.PI * 0.12;
controls.autoRotate = true;
controls.autoRotateSpeed = 0.35;

// Stop auto-rotate when user interacts
let userInteracted = false;
controls.addEventListener('start', () => {
  userInteracted = true;
  controls.autoRotate = false;
});

// ---- Resize ----
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// ---- FPS meter ----
let frames = 0;
let lastTime = performance.now();
let fpsAcc = 0;
function updateFps(now) {
  frames++;
  fpsAcc += now - lastTime;
  lastTime = now;
  if (fpsAcc >= 500) {
    const fps = (frames * 1000) / fpsAcc;
    fpsEl.textContent = fps.toFixed(0);
    frames = 0;
    fpsAcc = 0;
  }
}

// ---- Hide loading after first render ----
let firstFrame = true;

// ---- Render loop ----
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  updateFps(performance.now());
  renderer.render(scene, camera);
  if (firstFrame) {
    firstFrame = false;
    requestAnimationFrame(() => {
      loadingEl.classList.add('hide');
      setTimeout(() => loadingEl.remove(), 700);
    });
  }
}

animate();