import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { createWorld } from './world.js';
import { createTrain } from './train.js';
import './style.css';

const container = document.querySelector('#scene');
const scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({ antialias:true, powerPreference:'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5));
renderer.setSize(container.clientWidth,container.clientHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.96;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
container.appendChild(renderer.domElement);

const camera = new THREE.OrthographicCamera(-23,23,15,-15,0.1,130);
const initialPosition = new THREE.Vector3(28,30,39);
const initialTarget = new THREE.Vector3(0,0.15,0);
camera.position.copy(initialPosition);
camera.lookAt(initialTarget);

const controls = new OrbitControls(camera,renderer.domElement);
controls.target.copy(initialTarget);
controls.enableDamping = true;
controls.dampingFactor = 0.075;
controls.screenSpacePanning = false;
controls.minZoom = 0.65;
controls.maxZoom = 2.8;
controls.maxPolarAngle = Math.PI * 0.46;
controls.minPolarAngle = Math.PI * 0.16;
controls.enablePan = false;
controls.update();

const world = createWorld(scene);
const train = createTrain(scene);

const playButton = document.querySelector('#play-pause');
const playIcon = document.querySelector('#play-icon');
const playText = document.querySelector('#play-text');
const speedInput = document.querySelector('#speed');
const speedValue = document.querySelector('#speed-value');
const resetButton = document.querySelector('#reset');
const modeButton = document.querySelector('#day-night');
const modeIcon = document.querySelector('#mode-icon');
const modeText = document.querySelector('#mode-text');
const trainStatus = document.querySelector('#train-status');
let night = false;
const setText = (element,value) => { if (element.textContent !== value) element.textContent = value; };

function resize() {
  const width = Math.max(container.clientWidth,1);
  const height = Math.max(container.clientHeight,1);
  const aspect = width / height;
  const viewHeight = Math.max(29.2,45.5 / aspect);
  camera.left = -viewHeight * aspect / 2;
  camera.right = viewHeight * aspect / 2;
  camera.top = viewHeight / 2;
  camera.bottom = -viewHeight / 2;
  camera.updateProjectionMatrix();
  renderer.setSize(width,height);
}

function updateLabels() {
  const paused = !train.state.running;
  setText(playIcon,paused ? '▶' : 'Ⅱ');
  setText(playText,paused ? '运行' : '暂停');
  const playLabel=paused?'运行列车':'暂停列车';
  if (playButton.getAttribute('aria-label')!==playLabel) playButton.setAttribute('aria-label',playLabel);
  setText(trainStatus,paused ? '列车已暂停' : train.state.dwell > 0 ? `柳溪车站停靠 · ${Math.ceil(train.state.dwell)} 秒` : '列车运行中');
  setText(speedValue,`${Number(train.state.speed).toFixed(1)}×`);
  if (speedInput.value!==String(train.state.speed)) speedInput.value=String(train.state.speed);
  setText(modeIcon,night ? '☀' : '☾');
  setText(modeText,night ? '白天' : '夜晚');
  const modeLabel=night?'切换为白天':'切换为夜晚';
  if (modeButton.getAttribute('aria-label')!==modeLabel) modeButton.setAttribute('aria-label',modeLabel);
  if (document.body.classList.contains('night')!==night) document.body.classList.toggle('night',night);
}

playButton.addEventListener('click',() => {
  train.state.running = !train.state.running;
  updateLabels();
});
speedInput.addEventListener('input',() => {
  train.state.speed = Number(speedInput.value);
  updateLabels();
});
resetButton.addEventListener('click',() => {
  train.reset();
  night=false;
  world.setNight(false);
  train.setNight(false);
  renderer.toneMappingExposure=0.96;
  camera.position.copy(initialPosition);
  camera.zoom=1;
  controls.target.copy(initialTarget);
  camera.updateProjectionMatrix();
  controls.update();
  updateLabels();
});
modeButton.addEventListener('click',() => {
  night=!night;
  world.setNight(night);
  train.setNight(night);
  renderer.toneMappingExposure=night?1.15:0.96;
  updateLabels();
});

window.addEventListener('resize',resize);
resize();
updateLabels();

const clock = new THREE.Clock();
let frameTime = 0;
let labelTime = 0;
function animate() {
  requestAnimationFrame(animate);
  frameTime += clock.getDelta();
  if (frameTime < 1 / 30) return;
  const delta = frameTime;
  frameTime = 0;
  train.update(delta);
  controls.update();
  labelTime += delta;
  if (labelTime > 0.18) {
    updateLabels();
    labelTime=0;
  }
  renderer.render(scene,camera);
}
animate();
