/**
 * 青溪镇 · 桌面微缩铁路沙盘
 * 入口：渲染器、相机、场景装配、动画循环、控制面板与验证接口。
 */
import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { CAMERA, TRAIN } from './config.js';
import { buildTerrain } from './world/terrain.js';
import { buildRailway } from './world/railway.js';
import { buildTown } from './world/town.js';
import { buildScenery } from './world/scenery.js';
import { createTrain } from './world/train.js';
import { buildLighting } from './world/lighting.js';
import { mergeStaticGroup } from './lib/merge.js';
import { initUI } from './ui.js';

const container = document.getElementById('stage');
const loading = document.getElementById('loading');
const loadingFill = document.getElementById('loading-fill');

function setProgress(pct) {
  if (loadingFill) loadingFill.style.width = `${pct}%`;
}

setProgress(8);

// ——— 渲染器 ———
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  preserveDrawingBuffer: true,
  powerPreference: 'high-performance',
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.02;
container.appendChild(renderer.domElement);

// ——— 场景与相机 ———
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  CAMERA.fov,
  window.innerWidth / window.innerHeight,
  0.5,
  520,
);
camera.position.set(CAMERA.position[0], CAMERA.position[1], CAMERA.position[2]);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(CAMERA.target[0], CAMERA.target[1], CAMERA.target[2]);
controls.enableDamping = true;
controls.dampingFactor = 0.075;
controls.minDistance = CAMERA.minDistance;
controls.maxDistance = CAMERA.maxDistance;
controls.maxPolarAngle = Math.PI * 0.492;
controls.rotateSpeed = 0.72;
controls.zoomSpeed = 0.85;
controls.panSpeed = 0.6;
controls.update();

setProgress(22);

// ——— 沙盘搭建 ———
const terrain = buildTerrain(scene);
setProgress(42);

const railway = buildRailway(scene);
setProgress(58);

const townGroup = buildTown(scene, terrain.textures, terrain.heightAt).group;
setProgress(68);

const sceneryGroup = buildScenery(scene, terrain.heightAt);
setProgress(78);

// 静态合批：把成百上千个窗框/窗玻璃/道具碎件并成按材质的少量网格
const mergedTown = mergeStaticGroup(townGroup);
const mergedScenery = mergeStaticGroup(sceneryGroup);
setProgress(86);

const train = createTrain(railway, scene);
const lighting = buildLighting(scene, renderer);
setProgress(96);

// ——— 控制面板 ———
const app = {
  playing: true,
  speed: 1,
  night: false,
};

const ui = initUI({
  onPlayToggle(v) {
    app.playing = v;
  },
  onSpeed(v) {
    app.speed = v;
    train.setSpeedScale(v);
  },
  onDayNight(v) {
    app.night = v;
    lighting.setNight(v);
  },
  onReset() {
    app.playing = true;
    app.speed = 1;
    app.night = false;
    train.reset();
    train.setSpeedScale(1);
    lighting.setNightImmediate(false);
    camera.position.set(CAMERA.position[0], CAMERA.position[1], CAMERA.position[2]);
    controls.target.set(CAMERA.target[0], CAMERA.target[1], CAMERA.target[2]);
    controls.update();
  },
});

// ——— 动画循环 ———
const clock = new THREE.Clock();
let fps = 60;
let fpsAcc = 0;
let fpsCount = 0;
let fpsTimer = 0;

function animate() {
  requestAnimationFrame(animate);
  const dt = Math.min(clock.getDelta(), 0.05);

  if (app.playing) {
    train.step(dt);
    ui.setMode(train.state.mode, train.state.dwellRemaining);
  }
  lighting.update(dt);

  // 水面微波流动
  const wn = terrain.waterNormal;
  wn.offset.x += dt * 0.0135;
  wn.offset.y += dt * 0.0072;

  controls.update();
  renderer.render(scene, camera);

  // 帧率统计
  fpsAcc += dt;
  fpsCount += 1;
  fpsTimer += dt;
  if (fpsTimer > 0.5) {
    fps = fpsCount / fpsAcc;
    fpsAcc = 0;
    fpsCount = 0;
    fpsTimer = 0;
  }
}

// 首帧渲染后同步收起加载层，再启动循环
renderer.render(scene, camera);
if (loading) loading.style.display = 'none';
setProgress(100);
animate();

// ——— URL 参数（便于分享固定视角，也用于逐张截图验证）———
// 示例：?cam=8.6,4.6,13.2&target=2.6,0.7,4.6&night=1&train=5.57&play=0
(function applyUrlParams() {
  const p = new URLSearchParams(location.search);
  if (p.has('cam')) {
    const v = p.get('cam').split(',').map(Number);
    const t = (p.get('target') || '0,-0.4,0').split(',').map(Number);
    if (v.length === 3 && t.length === 3 && v.every(Number.isFinite) && t.every(Number.isFinite)) {
      camera.position.set(v[0], v[1], v[2]);
      controls.target.set(t[0], t[1], t[2]);
      controls.update();
    }
  }
  if (p.has('train')) {
    const s = parseFloat(p.get('train'));
    if (Number.isFinite(s)) {
      train.state.s = s;
      train.state.mode = 'running';
      train.state.dwellRemaining = 0;
      train.place();
    }
  }
  if (p.has('speed')) {
    const sp = parseFloat(p.get('speed'));
    if (Number.isFinite(sp) && sp > 0) {
      app.speed = sp;
      train.setSpeedScale(sp);
      ui.setSpeed(sp);
    }
  }
  if (p.has('night')) {
    const night = p.get('night') === '1';
    app.night = night;
    lighting.setNightImmediate(night);
    ui.setNight(night);
  }
  if (p.has('play')) {
    app.playing = p.get('play') !== '0';
    ui.setPlaying(app.playing);
  }
  renderer.render(scene, camera);
})();

// ——— 供自动化验证使用的接口 ———
window.__APP = {
  ready: true,
  capture() {
    // 渲染两帧并强制 GPU flush，再把 WebGL 画布拷到 2D 画布后导出：
    // 直接对 WebGL canvas 调 toDataURL 在无头环境会读到过期帧。
    const gl = renderer.getContext();
    renderer.render(scene, camera);
    gl.finish();
    renderer.render(scene, camera);
    gl.finish();
    const src = renderer.domElement;
    const off = document.createElement('canvas');
    off.width = src.width;
    off.height = src.height;
    const ctx = off.getContext('2d');
    ctx.drawImage(src, 0, 0);
    // 把现场状态烧进画面左下角，截图自带身份，便于核对（只影响验证截图）
    const label = `cam=[${camera.position.toArray().map((v) => v.toFixed(1))}] target=[${controls.target
      .toArray()
      .map((v) => v.toFixed(1))}] s=${train.state.s.toFixed(2)} night=${lighting.mix.toFixed(2)}`;
    ctx.font = '13px Consolas, monospace';
    ctx.fillStyle = 'rgba(0,0,0,0.45)';
    ctx.fillRect(0, off.height - 22, Math.min(off.width, ctx.measureText(label).width + 16), 22);
    ctx.fillStyle = 'rgba(255,255,255,0.82)';
    ctx.fillText(label, 8, off.height - 7);
    return off.toDataURL('image/png');
  },
  state() {
    return {
      playing: app.playing,
      speed: app.speed,
      night: app.night,
      nightMix: lighting.mix,
      mode: train.state.mode,
      dwellRemaining: train.state.dwellRemaining,
      s: train.state.s,
      laps: train.state.laps,
      head: train.headPosition().toArray(),
      camera: camera.position.toArray(),
      target: controls.target.toArray(),
      fov: camera.fov,
      stationS: railway.stationS,
      trackLength: railway.length,
      trainLength: 2 * (TRAIN.carLength + TRAIN.carGap) + TRAIN.carLength,
      calls: renderer.info.render.calls,
      triangles: renderer.info.render.triangles,
      contextLost: renderer.getContext().isContextLost(),
      frame: renderer.info.render.frame,
      mergedFrom: mergedTown.sourceCount + mergedScenery.sourceCount,
      mergedTo: mergedTown.meshes.length + mergedScenery.meshes.length,
      fps: Math.round(fps * 10) / 10,
    };
  },
  setPlaying(v) {
    app.playing = !!v;
    ui.setPlaying(app.playing);
  },
  setSpeed(v) {
    app.speed = v;
    train.setSpeedScale(v);
    ui.setSpeed(v);
  },
  setNight(v) {
    app.night = !!v;
    lighting.setNightImmediate(app.night);
    ui.setNight(app.night);
  },
  reset() {
    app.playing = true;
    app.speed = 1;
    app.night = false;
    train.reset();
    train.setSpeedScale(1);
    lighting.setNightImmediate(false);
    camera.position.set(CAMERA.position[0], CAMERA.position[1], CAMERA.position[2]);
    controls.target.set(CAMERA.target[0], CAMERA.target[1], CAMERA.target[2]);
    controls.update();
    ui.setPlaying(true);
    ui.setSpeed(1);
    ui.setNight(false);
    ui.setMode('running', 0);
  },
  setCamera(pos, target) {
    camera.position.set(pos[0], pos[1], pos[2]);
    controls.target.set(target[0], target[1], target[2]);
    controls.update();
    renderer.render(scene, camera);
  },
  setTrainS(s) {
    train.state.s = s;
    train.state.mode = 'running';
    train.state.dwellRemaining = 0;
    train.place();
    renderer.render(scene, camera);
  },
};

// ——— 自适应 ———
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
