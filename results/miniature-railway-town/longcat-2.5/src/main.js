import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { createWorld } from './world.js';
import { buildTrack } from './track.js';
import { buildTown } from './town.js';
import { createTrain } from './train.js';
import { initUI } from './ui.js';

const CAM_HOME = new THREE.Vector3(36, 38, 36);
const TARGET_HOME = new THREE.Vector3(0, 0.4, 0);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(35, innerWidth / innerHeight, 0.1, 500);
camera.position.copy(CAM_HOME);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(innerWidth, innerHeight);
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
document.getElementById('app').appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.copy(TARGET_HOME);
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.maxPolarAngle = Math.PI / 2.15;
controls.minDistance = 14;
controls.maxDistance = 130;

// 场景
const world = createWorld(scene);
const track = buildTrack(scene);
const town = buildTown(scene, track.curve, world.mats);
const train = createTrain(scene, track.curve, world.mats);
train.setUStation(track.uStation);
train.reset(track.uStation - 0.06);

// 交互
let timeMode = 'dusk';
const ui = initUI({
  onSpeed(mult) {
    train.setSpeed(mult);
  },
  onReset() {
    train.reset(track.uStation - 0.06);
    train.setSpeed(1);
    camera.position.copy(CAM_HOME);
    controls.target.copy(TARGET_HOME);
  },
  onTime(mode) {
    timeMode = mode;
    world.setTimeOfDay(mode);
  }
});

// 动画循环
const clock = new THREE.Clock();
function animate() {
  requestAnimationFrame(animate);
  const dt = Math.min(clock.getDelta(), 0.05);
  if (ui.running) {
    train.update(dt * ui.speed);
    town.update(dt * ui.speed);
  }
  controls.update();
  renderer.render(scene, camera);
}
animate();

addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});
