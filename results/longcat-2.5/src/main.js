import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { VoxelWorld } from './voxel.js';
import { mulberry32 } from './rng.js';
import { buildEnvironment } from './environment.js';
import { buildBuildings } from './arch.js';

/* ---------------- 渲染器 ---------------- */
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.18;
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0xe8b98c, 170, 430);

const camera = new THREE.PerspectiveCamera(
  42,
  window.innerWidth / window.innerHeight,
  0.5,
  1200
);
camera.position.set(76, 52, -122);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 10, 12);
controls.enableDamping = true;
controls.dampingFactor = 0.06;
controls.autoRotate = true;
controls.autoRotateSpeed = 0.5;
controls.maxPolarAngle = Math.PI * 0.495;
controls.minDistance = 25;
controls.maxDistance = 320;

// 交互时暂停自动旋转，静置 5 秒后恢复
let rotTimer = null;
controls.addEventListener('start', () => {
  controls.autoRotate = false;
  if (rotTimer) clearTimeout(rotTimer);
});
controls.addEventListener('end', () => {
  rotTimer = setTimeout(() => { controls.autoRotate = true; }, 5000);
});

/* ---------------- 光照（晨光：低角度暖阳 + 冷色补光） ---------------- */
const sunDir = new THREE.Vector3(88, 44, -42).normalize();

const sun = new THREE.DirectionalLight(0xffc07a, 2.8);
sun.position.set(88, 44, -42);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.left = -85;
sun.shadow.camera.right = 85;
sun.shadow.camera.top = 85;
sun.shadow.camera.bottom = -85;
sun.shadow.camera.near = 20;
sun.shadow.camera.far = 280;
sun.shadow.bias = -0.0004;
sun.shadow.normalBias = 0.8;
sun.target.position.set(0, 0, 15);
scene.add(sun, sun.target);

const fill = new THREE.DirectionalLight(0x8fb0d8, 0.85);
fill.position.set(-60, 40, 60);
scene.add(fill);

scene.add(new THREE.HemisphereLight(0xa8c4e0, 0x8a7a5f, 0.85));
scene.add(new THREE.AmbientLight(0x604838, 0.3));

// 主殿前灯笼暖光
for (const px of [-6, 6]) {
  const glow = new THREE.PointLight(0xff9a4d, 26, 26, 2);
  glow.position.set(px, 7, 21);
  scene.add(glow);
}

/* ---------------- 天空（晨昏渐变 + 日光晕） ---------------- */
const sky = new THREE.Mesh(
  new THREE.SphereGeometry(480, 32, 16),
  new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    fog: false,
    uniforms: { sunDir: { value: sunDir } },
    vertexShader: /* glsl */ `
      varying vec3 vDir;
      void main() {
        vDir = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: /* glsl */ `
      varying vec3 vDir;
      uniform vec3 sunDir;
      void main() {
        vec3 d = normalize(vDir);
        float h = clamp(d.y, 0.0, 1.0);
        vec3 zen = vec3(0.42, 0.60, 0.80);   // 晨空蓝
        vec3 hor = vec3(0.99, 0.72, 0.46);   // 地平线暖橙
        vec3 col = mix(hor, zen, pow(h, 0.5));
        col = mix(col, hor * 0.9, smoothstep(0.0, -0.15, d.y));
        float s = max(dot(d, sunDir), 0.0);
        col += vec3(1.0, 0.72, 0.42) * pow(s, 120.0) * 1.2;  // 日轮
        col += vec3(1.0, 0.62, 0.34) * pow(s, 6.0) * 0.28;   // 晨晖
        gl_FragColor = vec4(col, 1.0);
      }
    `,
  })
);
sky.renderOrder = -1;
scene.add(sky);

/* ---------------- 地面（草地） ---------------- */
function makeGrassTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#7d9159';
  ctx.fillRect(0, 0, 128, 128);
  const rng = mulberry32(42);
  for (let i = 0; i < 900; i++) {
    const g = 110 + Math.floor(rng() * 60);
    ctx.fillStyle = `rgba(${g * 0.55},${g},${g * 0.45},0.5)`;
    ctx.fillRect(Math.floor(rng() * 128), Math.floor(rng() * 128), 2, 2);
  }
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(48, 48);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
const ground = new THREE.Mesh(
  new THREE.PlaneGeometry(700, 700),
  new THREE.MeshStandardMaterial({ map: makeGrassTexture(), roughness: 1 })
);
ground.rotation.x = -Math.PI / 2;
ground.position.set(0, -0.5, 10);
ground.receiveShadow = true;
scene.add(ground);

/* ---------------- 体素建筑群 ---------------- */
const V = new VoxelWorld();
buildEnvironment(V);
buildBuildings(V);
V.build(scene);

/* ---------------- 云（缓慢漂移的体素云） ---------------- */
const clouds = [];
{
  const mat = new THREE.MeshStandardMaterial({
    color: 0xf7f3ea,
    roughness: 1,
    emissive: 0xfff2dd,
    emissiveIntensity: 0.18,
  });
  const rng = mulberry32(7);
  for (let i = 0; i < 6; i++) {
    const n = 4 + Math.floor(rng() * 3);
    const im = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), mat, n);
    const m = new THREE.Matrix4();
    let bx = 0;
    for (let j = 0; j < n; j++) {
      const w = 3 + Math.floor(rng() * 4);
      const d = 2 + Math.floor(rng() * 2);
      m.makeScale(w, 1, d);
      m.setPosition(bx + w / 2, (rng() - 0.5) * 0.6, (rng() - 0.5) * 2);
      im.setMatrixAt(j, m);
      bx += w * 0.7;
    }
    im.instanceMatrix.needsUpdate = true;
    const holder = new THREE.Group();
    holder.add(im);
    holder.position.set((rng() - 0.5) * 220, 42 + rng() * 14, -60 + rng() * 140);
    holder.userData.speed = 0.6 + rng() * 0.8;
    scene.add(holder);
    clouds.push(holder);
  }
}

/* ---------------- 晨尘微粒（体素小方块，InstancedMesh 单 draw call） ---------------- */
let particles, particleData;
{
  const N = 280;
  const geo = new THREE.BoxGeometry(0.28, 0.28, 0.28);
  const mat = new THREE.MeshBasicMaterial({ color: 0xffd9a0, transparent: true, opacity: 0.7 });
  particles = new THREE.InstancedMesh(geo, mat, N);
  particles.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  const rng = mulberry32(99);
  particleData = [];
  for (let i = 0; i < N; i++) {
    particleData.push({
      x: (rng() - 0.5) * 120,
      y: 2 + rng() * 24,
      z: -50 + rng() * 120,
    });
  }
  scene.add(particles);
}
const particleMatrix = new THREE.Matrix4();

/* ---------------- HUD / 帧率 ---------------- */
const statsEl = document.getElementById('stats');
let frames = 0;
let lastStat = performance.now();
let fps = 0;

window.addEventListener('keydown', (e) => {
  if (e.key === 'h' || e.key === 'H') {
    const hud = document.getElementById('hud');
    hud.style.display = hud.style.display === 'none' ? '' : 'none';
  }
});

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

/* ---------------- 主循环 ---------------- */
// 调试钩子：便于从控制台/自动化精确控制相机
window.__voxel = { camera, controls, renderer, scene };

const clock = new THREE.Clock();
function animate() {
  requestAnimationFrame(animate);
  const dt = Math.min(clock.getDelta(), 0.1);

  for (const c of clouds) {
    c.position.x += c.userData.speed * dt;
    if (c.position.x > 170) c.position.x = -170;
  }
  for (let i = 0; i < particleData.length; i++) {
    const p = particleData[i];
    p.y += dt * 0.5;
    if (p.y > 30) p.y = 2;
    p.x += dt * 0.35;
    if (p.x > 65) p.x = -65;
    particleMatrix.makeTranslation(p.x, p.y, p.z);
    particles.setMatrixAt(i, particleMatrix);
  }
  particles.instanceMatrix.needsUpdate = true;

  controls.update();
  renderer.render(scene, camera);

  frames++;
  const now = performance.now();
  if (now - lastStat >= 500) {
    fps = Math.round((frames * 1000) / (now - lastStat));
    frames = 0;
    lastStat = now;
    statsEl.textContent =
      `FPS ${fps} · 体素 ${V.count().toLocaleString()} · 建筑 10 栋`;
  }
}
animate();
