import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { createWorld } from './world.js';
import { TrainController } from './train.js';
import './style.css';

const sceneHost = document.querySelector('#scene');
const loadingScreen = document.querySelector('#loadingScreen');
const playButton = document.querySelector('#playButton');
const playLabel = document.querySelector('#playLabel');
const speedRange = document.querySelector('#speedRange');
const speedValue = document.querySelector('#speedValue');
const timeButton = document.querySelector('#timeButton');
const timeLabel = document.querySelector('#timeLabel');
const resetButton = document.querySelector('#resetButton');
const stationCard = document.querySelector('.station-card');
const stationStatus = document.querySelector('#stationStatus');
const tripDistance = document.querySelector('#tripDistance');

const scene = new THREE.Scene();
const dayBackground = new THREE.Color(0x586866);
const nightBackground = new THREE.Color(0x101a27);
scene.background = dayBackground.clone();
scene.fog = new THREE.FogExp2(dayBackground.clone(), 0.0125);

const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.08;
sceneHost.appendChild(renderer.domElement);

const camera = new THREE.OrthographicCamera(-22, 22, 16, -16, 0.1, 160);
const INITIAL_CAMERA_POSITION = new THREE.Vector3(25.5, 24, 29.5);
const INITIAL_TARGET = new THREE.Vector3(0, 0.1, -0.35);
camera.position.copy(INITIAL_CAMERA_POSITION);
camera.lookAt(INITIAL_TARGET);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.copy(INITIAL_TARGET);
controls.enableDamping = true;
controls.dampingFactor = 0.075;
controls.minZoom = 0.76;
controls.maxZoom = 2.45;
controls.minPolarAngle = Math.PI * 0.18;
controls.maxPolarAngle = Math.PI * 0.47;
controls.enablePan = false;
controls.rotateSpeed = 0.62;
controls.zoomSpeed = 0.78;
controls.update();

const hemisphere = new THREE.HemisphereLight(0xf8dcaa, 0x394335, 2.05);
scene.add(hemisphere);

const sun = new THREE.DirectionalLight(0xffcf91, 4.25);
sun.position.set(-16, 23, -13);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
sun.shadow.camera.left = -24;
sun.shadow.camera.right = 24;
sun.shadow.camera.top = 21;
sun.shadow.camera.bottom = -21;
sun.shadow.camera.near = 3;
sun.shadow.camera.far = 60;
sun.shadow.bias = -0.00035;
sun.shadow.normalBias = 0.025;
scene.add(sun, sun.target);

const fillLight = new THREE.DirectionalLight(0xbad2d0, 0.55);
fillLight.position.set(16, 11, 17);
scene.add(fillLight);

const moon = new THREE.DirectionalLight(0x9cbcff, 0);
moon.position.set(10, 19, 12);
moon.castShadow = false;
scene.add(moon);

const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(150, 150),
  new THREE.MeshStandardMaterial({ color: 0x202620, roughness: 1 }),
);
floor.rotation.x = -Math.PI / 2;
floor.position.y = -1.26;
floor.receiveShadow = true;
scene.add(floor);

const world = createWorld(scene);
const train = new TrainController(scene, world.trackCurve, world.stationTarget);

let isNight = false;
let nightMix = 0;
let lastUiState = '';

function updateCameraFrustum() {
  const aspect = window.innerWidth / window.innerHeight;
  const frustumHeight = Math.max(31.5, 45 / Math.max(aspect, 0.45));
  camera.left = (-frustumHeight * aspect) / 2;
  camera.right = (frustumHeight * aspect) / 2;
  camera.top = frustumHeight / 2;
  camera.bottom = -frustumHeight / 2;
  camera.updateProjectionMatrix();
}

function updateRangeFill() {
  const minimum = Number(speedRange.min);
  const maximum = Number(speedRange.max);
  const value = Number(speedRange.value);
  const progress = ((value - minimum) / (maximum - minimum)) * 100;
  speedRange.style.setProperty('--range-progress', `${progress}%`);
}

function updatePlayButton() {
  const paused = !train.running;
  playButton.classList.toggle('is-paused', paused);
  playButton.setAttribute('aria-label', paused ? '运行列车' : '暂停列车');
  playLabel.textContent = paused ? '运行' : '暂停';
}

function updateTimeButton() {
  timeButton.classList.toggle('is-night', isNight);
  timeButton.setAttribute('aria-label', isNight ? '切换到白天' : '切换到夜晚');
  timeLabel.textContent = isNight ? '白天' : '夜晚';
}

function applyNightMode(value) {
  isNight = value;
  world.setNight(isNight);
  train.setNight(isNight);
  updateTimeButton();
}

function resetExperience() {
  train.reset();
  speedRange.value = '1';
  speedValue.value = '1.0×';
  speedValue.textContent = '1.0×';
  updateRangeFill();
  applyNightMode(false);
  camera.position.copy(INITIAL_CAMERA_POSITION);
  camera.zoom = 1;
  camera.updateProjectionMatrix();
  controls.target.copy(INITIAL_TARGET);
  controls.update();
  updatePlayButton();
}

playButton.addEventListener('click', () => {
  train.toggleRunning();
  updatePlayButton();
});

speedRange.addEventListener('input', (event) => {
  const speed = Number(event.currentTarget.value);
  train.setSpeed(speed);
  speedValue.value = `${speed.toFixed(1)}×`;
  speedValue.textContent = `${speed.toFixed(1)}×`;
  updateRangeFill();
});

timeButton.addEventListener('click', () => applyNightMode(!isNight));
resetButton.addEventListener('click', resetExperience);

window.addEventListener('keydown', (event) => {
  if (event.code === 'Space' && !event.repeat && !['INPUT', 'BUTTON'].includes(document.activeElement?.tagName)) {
    event.preventDefault();
    train.toggleRunning();
    updatePlayButton();
  }
  if (event.key.toLowerCase() === 'r' && !event.repeat && document.activeElement?.tagName !== 'INPUT') resetExperience();
});

window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  updateCameraFrustum();
});

function updateUi() {
  const state = train.state;
  if (state !== lastUiState || state === 'stopped') {
    stationCard.classList.toggle('is-paused', state === 'paused');
    stationCard.classList.toggle('is-stopped', state === 'stopped');
    if (state === 'paused') stationStatus.textContent = '列车已暂停';
    if (state === 'stopped') stationStatus.textContent = `停靠中 · ${train.dwellRemaining.toFixed(1)} 秒`;
    if (state === 'moving') stationStatus.textContent = '驶向溪谷站';

    if (state === 'paused') {
      world.signalGlow.color.set(0xbd564d);
      world.signalGlow.emissive.set(0xe74c42);
    } else if (state === 'stopped') {
      world.signalGlow.color.set(0xe0ad54);
      world.signalGlow.emissive.set(0xffb23d);
    } else {
      world.signalGlow.color.set(0x63a96d);
      world.signalGlow.emissive.set(0x55d96a);
    }
    lastUiState = state;
  }
  tripDistance.textContent = state === 'stopped' ? '站内' : `${Math.max(1, Math.round(train.distanceToStation * 3.2))} m`;
}

updateCameraFrustum();
updateRangeFill();
updatePlayButton();
updateTimeButton();

const clock = new THREE.Clock();
const mixedBackground = new THREE.Color();
const dayFog = dayBackground.clone();
const nightFog = nightBackground.clone();

function animate() {
  const delta = Math.min(clock.getDelta(), 0.05);
  const elapsed = clock.elapsedTime;

  train.update(delta);
  world.update(elapsed);
  controls.update();
  updateUi();

  const targetNightMix = isNight ? 1 : 0;
  nightMix = THREE.MathUtils.damp(nightMix, targetNightMix, 2.7, delta);
  mixedBackground.copy(dayBackground).lerp(nightBackground, nightMix);
  scene.background.copy(mixedBackground);
  scene.fog.color.copy(dayFog).lerp(nightFog, nightMix);
  hemisphere.intensity = THREE.MathUtils.lerp(2.05, 0.62, nightMix);
  hemisphere.color.copy(colorLerp(0xf8dcaa, 0x7898c2, nightMix));
  sun.intensity = THREE.MathUtils.lerp(4.25, 0.08, nightMix);
  fillLight.intensity = THREE.MathUtils.lerp(0.55, 0.16, nightMix);
  moon.intensity = THREE.MathUtils.lerp(0, 1.35, nightMix);
  renderer.toneMappingExposure = THREE.MathUtils.lerp(1.08, 0.82, nightMix);
  floor.material.color.copy(colorLerp(0x202620, 0x0b1117, nightMix));

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

const lerpColorA = new THREE.Color();
const lerpColorB = new THREE.Color();
function colorLerp(from, to, alpha) {
  lerpColorA.setHex(from);
  lerpColorB.setHex(to);
  return lerpColorA.lerp(lerpColorB, alpha);
}

requestAnimationFrame(() => {
  loadingScreen.classList.add('is-hidden');
});
animate();
