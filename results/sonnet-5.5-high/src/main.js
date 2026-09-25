import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { buildWorld, LIGHT_SPOTS } from './world.js';

const app = document.getElementById('app');
const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
app.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0xffffff, 200, 520);

const camera = new THREE.PerspectiveCamera(38, innerWidth / innerHeight, 1, 2000);
camera.position.set(125, 92, 178);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 6, -12);
controls.enableDamping = true;
controls.maxPolarAngle = Math.PI * 0.48;
controls.minDistance = 30;
controls.maxDistance = 330;
controls.autoRotate = false;
controls.autoRotateSpeed = 0.6;
controls.update();

// ---- world geometry
const world = buildWorld();
const built = world.build();
const solid = new THREE.Mesh(built.solid, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9, metalness: 0 }));
solid.castShadow = solid.receiveShadow = true;
scene.add(solid);
const glowMat = new THREE.MeshBasicMaterial({ vertexColors: true });
const glow = new THREE.Mesh(built.glow, glowMat);
scene.add(glow);
console.log(`voxels: ${built.voxels}, visible faces: ${built.faces}`);

// ---- sky
const skyMat = new THREE.ShaderMaterial({
  side: THREE.BackSide, depthWrite: false, fog: false,
  uniforms: { top: { value: new THREE.Color() }, mid: { value: new THREE.Color() }, bot: { value: new THREE.Color() } },
  vertexShader: 'varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }',
  fragmentShader: `varying vec3 vP; uniform vec3 top; uniform vec3 mid; uniform vec3 bot;
    void main(){ float h = vP.y; vec3 c = h>0.0 ? mix(mid, top, pow(clamp(h*1.4,0.0,1.0),0.7)) : mix(mid, bot, clamp(-h*4.0,0.0,1.0));
    gl_FragColor = vec4(c,1.0); }`,
});
const sky = new THREE.Mesh(new THREE.SphereGeometry(700, 32, 16), skyMat);
scene.add(sky);

// ---- lights
const hemi = new THREE.HemisphereLight(0xffffff, 0x556644, 0.5);
scene.add(hemi);
const sun = new THREE.DirectionalLight(0xffffff, 2);
sun.castShadow = true;
sun.shadow.mapSize.set(4096, 4096);
const sc = sun.shadow.camera;
sc.left = -120; sc.right = 120; sc.top = 120; sc.bottom = -120; sc.near = 10; sc.far = 520;
sun.shadow.bias = -0.0004;
sun.shadow.normalBias = 0.6;
scene.add(sun, sun.target);
sun.target.position.set(0, 0, -15);

const spots = LIGHT_SPOTS.map((p) => {
  const l = new THREE.PointLight(0xff9a4a, 0, 55, 1.6);
  l.position.set(...p);
  scene.add(l);
  return l;
});

// ---- time-of-day presets
const P = {
  dawn: {
    sunCol: 0xffc48a, sunI: 2.6, sunDir: [-0.9, 0.42, 0.55], hemiSky: 0xbcd4f0, hemiGnd: 0x7a6a50, hemiI: 0.7,
    top: 0x5f8fd0, mid: 0xffd6b0, bot: 0xd9b89a, fog: 0xf0cfae, exposure: 1.05, glow: 0.9, lamp: 0,
  },
  dusk: {
    sunCol: 0xff9a55, sunI: 2.5, sunDir: [0.95, 0.3, 0.35], hemiSky: 0xb096c8, hemiGnd: 0x7a5a52, hemiI: 0.85,
    top: 0x4a4a9a, mid: 0xffa872, bot: 0xc27a70, fog: 0xd99a84, exposure: 1.1, glow: 1.15, lamp: 0.6,
  },
  night: {
    sunCol: 0x8fa8ff, sunI: 0.75, sunDir: [-0.4, 0.75, -0.5], hemiSky: 0x33427a, hemiGnd: 0x1a1e30, hemiI: 0.55,
    top: 0x060a22, mid: 0x1a2650, bot: 0x0e1430, fog: 0x141c3c, exposure: 1.15, glow: 2.4, lamp: 2.4,
  },
};
const cur = {
  sunCol: new THREE.Color(), sunI: 0, sunDir: new THREE.Vector3(), hemiSky: new THREE.Color(), hemiGnd: new THREE.Color(), hemiI: 0,
  top: new THREE.Color(), mid: new THREE.Color(), bot: new THREE.Color(), fog: new THREE.Color(), exposure: 1, glow: 1, lamp: 0,
};
const tgt = { ...cur };
function setTarget(name) {
  const p = P[name];
  tgt.sunCol = new THREE.Color(p.sunCol); tgt.sunI = p.sunI; tgt.sunDir = new THREE.Vector3(...p.sunDir).normalize();
  tgt.hemiSky = new THREE.Color(p.hemiSky); tgt.hemiGnd = new THREE.Color(p.hemiGnd); tgt.hemiI = p.hemiI;
  tgt.top = new THREE.Color(p.top); tgt.mid = new THREE.Color(p.mid); tgt.bot = new THREE.Color(p.bot);
  tgt.fog = new THREE.Color(p.fog); tgt.exposure = p.exposure; tgt.glow = p.glow; tgt.lamp = p.lamp;
}
function snap() {
  for (const k of Object.keys(cur)) cur[k] = cur[k]?.clone ? tgt[k].clone() : tgt[k];
}
function applyLerp(a) {
  const f = (k) => { cur[k].lerp(tgt[k], a); };
  ['sunCol', 'hemiSky', 'hemiGnd', 'top', 'mid', 'bot', 'fog'].forEach(f);
  cur.sunDir.lerp(tgt.sunDir, a).normalize();
  for (const k of ['sunI', 'hemiI', 'exposure', 'glow', 'lamp']) cur[k] += (tgt[k] - cur[k]) * a;

  sun.color.copy(cur.sunCol); sun.intensity = cur.sunI;
  sun.position.copy(sun.target.position).addScaledVector(cur.sunDir, 260);
  hemi.color.copy(cur.hemiSky); hemi.groundColor.copy(cur.hemiGnd); hemi.intensity = cur.hemiI;
  skyMat.uniforms.top.value.copy(cur.top); skyMat.uniforms.mid.value.copy(cur.mid); skyMat.uniforms.bot.value.copy(cur.bot);
  scene.fog.color.copy(cur.fog);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = cur.exposure;
  glowMat.color.setScalar(cur.glow);
  spots.forEach((l) => { l.intensity = cur.lamp * 60; });
}
setTarget('dawn'); snap(); applyLerp(1);

// ---- UI
const btns = document.querySelectorAll('#btns button');
btns.forEach((b) => b.addEventListener('click', () => {
  const t = b.dataset.t;
  if (t === 'spin') { controls.autoRotate = !controls.autoRotate; b.classList.toggle('on', controls.autoRotate); return; }
  setTarget(t);
  btns.forEach((x) => { if (x.dataset.t !== 'spin') x.classList.toggle('on', x === b); });
}));
addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});

// ---- loop
const stat = document.getElementById('stat');
let last = performance.now(), frames = 0, acc = 0;
function tick(now) {
  const dt = Math.min(0.1, (now - last) / 1000); last = now;
  applyLerp(1 - Math.exp(-dt * 2.5));
  controls.update();
  renderer.render(scene, camera);
  frames++; acc += dt;
  if (acc >= 1) {
    stat.textContent = `${Math.round(frames / acc)} fps · ${built.voxels.toLocaleString()} voxels · ${(built.faces).toLocaleString()} faces`;
    frames = 0; acc = 0;
  }
  requestAnimationFrame(tick);
}
requestAnimationFrame(tick);
window.__ready = true;
