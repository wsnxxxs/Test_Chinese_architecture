import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { buildWorld } from './world.js';
import { createTrain } from './train.js';

/* ---------------- 渲染器 / 相机 ---------------- */

const container = document.getElementById('app');
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
container.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(32, window.innerWidth / window.innerHeight, .1, 400);
const INIT_CAM = new THREE.Vector3(35, 30, 38);
const INIT_TGT = new THREE.Vector3(0, .6, 0);
camera.position.copy(INIT_CAM);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.copy(INIT_TGT);
controls.enableDamping = true;
controls.dampingFactor = .08;
controls.minDistance = 16;
controls.maxDistance = 95;
controls.maxPolarAngle = 1.46;
controls.update();

/* ---------------- 世界与列车 ---------------- */

const world = buildWorld(scene);
const track = world.track;
const train = createTrain(scene, track, world.mats);

/* ---------------- 光照预设 ---------------- */

const C = (hex) => new THREE.Color(hex);
const V = (x, y, z) => new THREE.Vector3(x, y, z);

const PRESETS = {
  evening: {
    name: '傍晚',
    bg: C(0xe8b48a), fog: C(0xe8b48a), fogD: .008,
    hemiI: .62, hemiSky: C(0xffe2bd), hemiGround: C(0x73684c),
    sunI: 2.3, sunColor: C(0xff9a44), sunPos: V(52, 18, 26),
    moonI: 0, moonColor: C(0xa9c2ee), moonPos: V(-32, 46, -22),
    winLit: .6, winDark: .03, bulb: .9, lamp: .14, head: .45,
    water: C(0x41708a), grass: C(0xffffff),
  },
  day: {
    name: '白天',
    bg: C(0xbdd7ee), fog: C(0xbdd7ee), fogD: .005,
    hemiI: 1.05, hemiSky: C(0xe3f1ff), hemiGround: C(0x8c9270),
    sunI: 2.8, sunColor: C(0xfff3df), sunPos: V(34, 56, 26),
    moonI: 0, moonColor: C(0xa9c2ee), moonPos: V(-32, 46, -22),
    winLit: 0, winDark: 0, bulb: 0, lamp: 0, head: 0,
    water: C(0x4a809c), grass: C(0xffffff),
  },
  night: {
    name: '夜晚',
    bg: C(0x0e1628), fog: C(0x0e1628), fogD: .012,
    hemiI: .2, hemiSky: C(0x46567a), hemiGround: C(0x242a30),
    sunI: 0, sunColor: C(0xff9a44), sunPos: V(52, 18, 26),
    moonI: .55, moonColor: C(0xb0c8f2), moonPos: V(-32, 50, -24),
    winLit: 1.7, winDark: .05, bulb: 2.4, lamp: 1, head: 1,
    water: C(0x243f56), grass: C(0xb9c4d6),
  },
};

// 当前插值状态（用傍晚初始化）
const lightState = {};
for (const k of Object.keys(PRESETS.evening)) {
  const val = PRESETS.evening[k];
  lightState[k] = val.isColor ? val.clone() : val.isVector3 ? val.clone() : val;
}

const MODE_ORDER = ['evening', 'day', 'night'];
let modeIndex = 0;

/* ---------------- 运行状态 ---------------- */

const BASE_SPEED = 7;      // 基础车速（弧长单位/秒）
const DWELL_TIME = 2;      // 到站停靠秒数

const sim = {
  running: true,
  speed: 1,
  leadS: 0,
  dwell: 0,           // 剩余停靠时间，>0 表示停站
};

train.setLead(sim.leadS);

/* ---------------- UI ---------------- */

const btnPlay = document.getElementById('btnPlay');
const btnMode = document.getElementById('btnMode');
const btnReset = document.getElementById('btnReset');
const speedInput = document.getElementById('speed');
const speedVal = document.getElementById('speedVal');
const stateDot = document.getElementById('stateDot');
const stateText = document.getElementById('stateText');
const timerText = document.getElementById('timerText');
const modeText = document.getElementById('modeText');

function syncPlayButton() {
  btnPlay.textContent = sim.running ? '暂停' : '运行';
}

btnPlay.addEventListener('click', () => {
  sim.running = !sim.running;
  syncPlayButton();
});

btnMode.addEventListener('click', () => {
  modeIndex = (modeIndex + 1) % MODE_ORDER.length;
  btnMode.textContent = modeIndex === MODE_ORDER.length - 1
    ? '切到傍晚'
    : `切到${PRESETS[MODE_ORDER[modeIndex + 1]].name}`;
});

speedInput.addEventListener('input', () => {
  sim.speed = parseFloat(speedInput.value);
  speedVal.textContent = sim.speed.toFixed(1) + '×';
});

function doReset() {
  sim.running = true;
  sim.speed = 1;
  sim.leadS = 0;
  sim.dwell = 0;
  speedInput.value = 1;
  speedVal.textContent = '1.0×';
  modeIndex = 0;
  btnMode.textContent = '切到白天';
  syncPlayButton();
  camera.position.copy(INIT_CAM);
  controls.target.copy(INIT_TGT);
  controls.update();
  train.resetSpin();
  train.setLead(sim.leadS);
}
btnReset.addEventListener('click', doReset);

window.addEventListener('keydown', (e) => {
  if (e.code === 'Space' && e.target === document.body) {
    e.preventDefault();
    btnPlay.click();
  }
});

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

/* ---------------- 动画循环 ---------------- */

const clock = new THREE.Clock();
const NUMERIC_KEYS = ['fogD', 'hemiI', 'sunI', 'moonI', 'winLit', 'winDark', 'bulb', 'lamp', 'head'];

function animate() {
  requestAnimationFrame(animate);
  const dt = Math.min(clock.getDelta(), .05);

  // 光照平滑过渡
  const target = PRESETS[MODE_ORDER[modeIndex]];
  const a = 1 - Math.exp(-dt * 2.6);
  for (const k of Object.keys(target)) {
    const tv = target[k];
    if (tv.isColor) lightState[k].lerp(tv, a);
    else if (tv.isVector3) lightState[k].lerp(tv, a);
    else {
      const idx = NUMERIC_KEYS.indexOf(k);
      if (idx >= 0) lightState[k] += (tv - lightState[k]) * a;
    }
  }
  world.applyLighting(lightState);
  train.headlight.intensity = lightState.head * 7;
  modeText.textContent = `光照：${target.name}`;

  // 列车运行（暂停时位置与到站计时全部冻结）
  if (sim.running) {
    if (sim.dwell > 0) {
      sim.dwell = Math.max(0, sim.dwell - dt);
      if (sim.dwell === 0) sim.leadS += .001; // 离开触发点
    } else {
      const prev = sim.leadS;
      const nextRaw = prev + BASE_SPEED * sim.speed * dt;
      // 下一个停靠点（未取模的累计弧长）
      let stopTarget = Math.floor(prev / track.length) * track.length + track.stopS;
      if (stopTarget <= prev) stopTarget += track.length;
      if (nextRaw >= stopTarget) {
        sim.leadS = track.stopS;
        sim.dwell = DWELL_TIME;
      } else {
        sim.leadS = nextRaw % track.length;
      }
    }
    train.setLead(sim.leadS);
  }

  // 状态面板
  if (!sim.running) {
    stateDot.className = 'dot paused';
    stateText.textContent = '已暂停';
    timerText.textContent = '计时已暂停';
  } else if (sim.dwell > 0) {
    stateDot.className = 'dot stop';
    stateText.textContent = '停靠车站中';
    timerText.textContent = `再出发 ${sim.dwell.toFixed(1)} s`;
  } else {
    stateDot.className = 'dot';
    stateText.textContent = '运行中';
    let rem = (track.stopS - sim.leadS + track.length) % track.length;
    if (rem < .01) rem = track.length;
    const eta = rem / (BASE_SPEED * sim.speed);
    timerText.textContent = `距到站 ${eta.toFixed(1)} s`;
  }

  controls.update();
  renderer.render(scene, camera);
}

animate();

// 调试/自动化验证钩子（只读暴露内部状态，不影响渲染）
window.__rw = {
  get sim() { return sim; },
  get mode() { return MODE_ORDER[modeIndex]; },
  get cameraPos() { return camera.position.toArray(); },
  get target() { return controls.target.toArray(); },
  track,
  setView(cx, cy, cz, tx = 0, ty = .6, tz = 0) {
    camera.position.set(cx, cy, cz);
    controls.target.set(tx, ty, tz);
    controls.update();
  },
};
