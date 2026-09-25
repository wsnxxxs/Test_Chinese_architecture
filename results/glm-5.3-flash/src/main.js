import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { VoxelWorld, mulberry32 } from './world.js';
import { buildScene } from './builders.js';

// ---------- 渲染器 ----------
const app = document.getElementById('app');
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.12;
renderer.outputColorSpace = THREE.SRGBColorSpace;
app.appendChild(renderer.domElement);

// ---------- 场景与雾 ----------
const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0xe0956a, 220, 720);

// ---------- 相机与控制 ----------
const camera = new THREE.PerspectiveCamera(48, window.innerWidth / window.innerHeight, 0.5, 1400);
const CAM_START = new THREE.Vector3(150, 120, 200);
const CAM_HOME = new THREE.Vector3(58, 52, 92);
const TARGET = new THREE.Vector3(0, 6, -4);
camera.position.copy(CAM_START);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.copy(TARGET);
controls.enableDamping = true;
controls.dampingFactor = 0.06;
controls.minDistance = 30;
controls.maxDistance = 320;
controls.maxPolarAngle = 1.5;
controls.autoRotate = false;
controls.autoRotateSpeed = 0.55;
controls.enabled = false; // 开场运镜结束后启用

// ---------- 天空穹顶(晨昏渐变 + 落日余晖) ----------
const SUN_DIR = new THREE.Vector3(-70, 42, 90).normalize();
const sky = new THREE.Mesh(
  new THREE.SphereGeometry(560, 32, 16),
  new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    uniforms: {
      topColor: { value: new THREE.Color(0x1f2a52) },
      midColor: { value: new THREE.Color(0x8a5a8e) },
      horizonColor: { value: new THREE.Color(0xff9a58) },
      sunDir: { value: SUN_DIR },
      sunColor: { value: new THREE.Color(0xffd9a0) }
    },
    vertexShader: /* glsl */ `
      varying vec3 vDir;
      void main() {
        vDir = normalize(position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: /* glsl */ `
      varying vec3 vDir;
      uniform vec3 topColor, midColor, horizonColor, sunDir, sunColor;
      void main() {
        float h = clamp(vDir.y, -0.1, 1.0);
        vec3 col = mix(horizonColor, midColor, smoothstep(0.02, 0.30, h));
        col = mix(col, topColor, smoothstep(0.25, 0.80, h));
        float s = max(dot(normalize(vDir), normalize(sunDir)), 0.0);
        col += sunColor * (pow(s, 220.0) * 1.2 + pow(s, 14.0) * 0.30);
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `
  })
);
scene.add(sky);

// ---------- 光照(黄昏) ----------
const hemi = new THREE.HemisphereLight(0x8a7ab5, 0x5a4636, 1.0);
scene.add(hemi);

const sun = new THREE.DirectionalLight(0xffbe82, 2.6);
sun.position.set(-90, 66, 110);
sun.target.position.set(0, 0, -5);
sun.castShadow = true;
sun.shadow.mapSize.set(4096, 4096);
sun.shadow.camera.left = -90;
sun.shadow.camera.right = 90;
sun.shadow.camera.top = 90;
sun.shadow.camera.bottom = -90;
sun.shadow.camera.near = 20;
sun.shadow.camera.far = 420;
sun.shadow.bias = -0.0002;
sun.shadow.normalBias = 2.5;
scene.add(sun, sun.target);

const fill = new THREE.DirectionalLight(0x7a86c8, 0.5);
fill.position.set(80, 50, -70);
scene.add(fill);

// ---------- 体素世界 ----------
const world = new VoxelWorld();
buildScene(world, mulberry32(20260925));
const voxelGroup = world.buildMeshes({ seed: 77, jitter: 0.05 });
voxelGroup.traverse((o) => {
  o.frustumCulled = false;
});
scene.add(voxelGroup);
console.log('[voxel] stats:', voxelGroup.userData?.stats ?? voxelGroup.children.map((c) => c.count));

// ---------- 体素云 ----------
const cloudsGroup = new THREE.Group();
{
  const rng = mulberry32(42);
  const geo = new THREE.BoxGeometry(2.4, 2.4, 2.4);
  const mat = new THREE.MeshLambertMaterial({ color: 0xffd9c2, emissive: 0x8a4a3a, transparent: true, opacity: 0.95 });
  const layout = [
    [-70, 46, -60], [-20, 52, 30], [40, 48, -95], [75, 44, 25], [10, 56, 110], [-100, 50, 40]
  ];
  for (const [cx0, cy, cz0] of layout) {
    const cells = [];
    const rows = 2 + Math.floor(rng() * 2);
    for (let r = 0; r < rows; r++) {
      const len = 3 + Math.floor(rng() * 4);
      const ox = Math.floor(rng() * 3) - 1;
      for (let i = 0; i < len; i++) cells.push([ox + i - len / 2, r * 0.8, rng() * 2 - 1]);
    }
    const mesh = new THREE.InstancedMesh(geo, mat, cells.length);
    const m = new THREE.Matrix4();
    cells.forEach((c, i) => {
      m.makeTranslation(c[0] * 2.4, c[1] * 2.4, c[2] * 2.4);
      mesh.setMatrixAt(i, m);
    });
    mesh.position.set(cx0, cy, cz0);
    mesh.userData.speed = 0.8 + rng() * 0.8;
    mesh.frustumCulled = false;
    cloudsGroup.add(mesh);
  }
}
scene.add(cloudsGroup);

// ---------- 开场运镜 ----------
const intro = { t: 0, dur: 3.2, active: true };
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

// ---------- 主循环 ----------
const clock = new THREE.Clock();
const fpsEl = document.getElementById('fps');
const hudEl = document.getElementById('hud');
let frames = 0;
let fpsTimer = 0;
let hudTimer = 0;

// 场景静态:阴影贴图只需生成一次(云不投影)
renderer.shadowMap.autoUpdate = false;
renderer.shadowMap.needsUpdate = true;

function animate() {
  requestAnimationFrame(animate);
  const dt = Math.min(clock.getDelta(), 0.1);

  if (intro.active) {
    intro.t += dt;
    const k = easeOutCubic(Math.min(intro.t / intro.dur, 1));
    camera.position.lerpVectors(CAM_START, CAM_HOME, k);
    camera.lookAt(TARGET);
    if (intro.t >= intro.dur) {
      intro.active = false;
      controls.enabled = true;
      controls.autoRotate = true;
    }
  } else {
    controls.update();
  }

  for (const cloud of cloudsGroup.children) {
    cloud.position.x += cloud.userData.speed * dt;
    if (cloud.position.x > 190) cloud.position.x = -190;
  }

  renderer.render(scene, camera);

  // FPS 统计
  frames++;
  fpsTimer += dt;
  if (fpsTimer >= 0.5) {
    fpsEl.textContent = Math.round(frames / fpsTimer) + ' FPS';
    frames = 0;
    fpsTimer = 0;
  }
  hudTimer += dt;
  if (hudTimer > 8) hudEl.classList.add('fade');
}

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// 调试:控制台里可直接调整视角 window.__view(x,y,z, tx,ty,tz)
window.__view = (x, y, z, tx = TARGET.x, ty = TARGET.y, tz = TARGET.z) => {
  intro.active = false;
  controls.enabled = true;
  controls.autoRotate = false;
  camera.position.set(x, y, z);
  controls.target.set(tx, ty, tz);
  controls.update();
};
window.__hook = { renderer, scene, camera, controls };

animate();
