import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { buildTown, TRACK_POINTS, RIVER } from './town.js';
import { buildTrack } from './track.js';
import { Train } from './train.js';
import { Lighting } from './lighting.js';

const app = document.getElementById('app');

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(innerWidth, innerHeight);
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
app.appendChild(renderer.domElement);

const scene = new THREE.Scene();

// near-isometric default view
const camera = new THREE.PerspectiveCamera(32, innerWidth / innerHeight, 0.1, 400);
const HOME_POS = new THREE.Vector3(30, 33, 30);
const HOME_TARGET = new THREE.Vector3(0, -0.5, -0.5);
camera.position.copy(HOME_POS);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.copy(HOME_TARGET);
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.minDistance = 18;
controls.maxDistance = 110;
controls.maxPolarAngle = Math.PI * 0.46;
controls.update();

// ---- world ---------------------------------------------------------------
const lighting = new Lighting(scene);
const { path, stationS, startS } = buildTrack(scene, TRACK_POINTS, RIVER);
const { water } = buildTown(scene, path);
const train = new Train(scene, path, startS);
lighting.headlight = train.cars[0].mesh.userData.beam;

// ---- UI -------------------------------------------------------------------
const btnPlay = document.getElementById('btn-play');
const btnDN = document.getElementById('btn-daynight');
const btnReset = document.getElementById('btn-reset');
const speedIn = document.getElementById('speed');
const speedVal = document.getElementById('speed-val');

function setRunning(r) {
  train.running = r;
  btnPlay.textContent = r ? '暂停' : '运行';
  btnPlay.classList.toggle('active', !r);
}
btnPlay.addEventListener('click', () => setRunning(!train.running));

speedIn.addEventListener('input', () => {
  train.speedFactor = parseFloat(speedIn.value);
  speedVal.textContent = `${train.speedFactor.toFixed(2)}×`;
});

let night = false;
btnDN.addEventListener('click', () => {
  night = !night;
  lighting.target = night ? 1 : 0;
  btnDN.textContent = night ? '傍晚' : '夜晚';
  btnDN.classList.toggle('active', night);
});

btnReset.addEventListener('click', () => {
  train.reset();
  train.speedFactor = 1;
  speedIn.value = '1';
  speedVal.textContent = '1.00×';
  setRunning(true);
  camera.position.copy(HOME_POS);
  controls.target.copy(HOME_TARGET);
  controls.update();
});

// ---- loop ------------------------------------------------------------------
const clock = new THREE.Clock();
renderer.setAnimationLoop(() => {
  const dt = Math.min(clock.getDelta(), 0.05);
  const simDt = train.running ? dt : 0;   // pause freezes cars and the dwell timer

  train.update(simDt, stationS);
  lighting.update(dt);
  water.material.map.offset.x += simDt * 0.02;

  controls.update();
  renderer.render(scene, camera);
});

addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});

// debug hook (harmless in production)
window.__dbg = { scene, camera, controls, train, lighting, water, stationS, startS, path };
