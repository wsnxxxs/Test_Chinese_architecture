/**
 * 光照与时段：傍晚（默认）/ 白天 / 夜晚 三档，之间做平滑过渡。
 * 夜晚降低主光与环境光，同时把 glow（窗户、路灯、光晕、点光源）推到 1，
 * 保证"发光但场景仍可看清"。
 */
import * as THREE from 'three';
import { setGlow } from './glow.js';

const PRESETS = {
  dusk: {
    label: '傍晚',
    clock: '18:40',
    sunColor: '#ffb070',
    sunIntensity: 3.3,
    sunPos: [-54, 26, 30],
    hemiSky: '#ffd9b0',
    hemiGround: '#6f5c44',
    hemiIntensity: 1.25,
    ambColor: '#ffe0c0',
    ambIntensity: 0.35,
    bg: '#e7c69e',
    fog: [140, 360],
    glow: 0.4,
    exposure: 1.02,
  },
  day: {
    label: '白天',
    clock: '12:10',
    sunColor: '#fff4e2',
    sunIntensity: 3.6,
    sunPos: [26, 58, 34],
    hemiSky: '#cfe6ff',
    hemiGround: '#93a377',
    hemiIntensity: 1.35,
    ambColor: '#eef4ff',
    ambIntensity: 0.28,
    bg: '#a9cfe6',
    fog: [180, 460],
    glow: 0,
    exposure: 1.0,
  },
  night: {
    label: '夜晚',
    clock: '21:30',
    sunColor: '#9db6ff',
    sunIntensity: 1.25,
    sunPos: [-34, 46, -26],
    hemiSky: '#42608f',
    hemiGround: '#2a3244',
    hemiIntensity: 0.85,
    ambColor: '#66799f',
    ambIntensity: 0.4,
    bg: '#101a2b',
    fog: [110, 320],
    glow: 1,
    exposure: 1.12,
  },
};

const MODE_ORDER = ['dusk', 'day', 'night'];

export function createLighting(scene) {
  const sun = new THREE.DirectionalLight('#ffb070', 3.3);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  const cam = sun.shadow.camera;
  cam.left = -46;
  cam.right = 46;
  cam.top = 46;
  cam.bottom = -46;
  cam.near = 1;
  cam.far = 240;
  sun.shadow.bias = -0.0007;
  sun.shadow.normalBias = 0.035;
  sun.shadow.radius = 2;
  scene.add(sun);
  scene.add(sun.target);
  sun.target.position.set(0, 0, 0);

  const hemi = new THREE.HemisphereLight('#ffd9b0', '#6f5c44', 1.25);
  scene.add(hemi);

  const amb = new THREE.AmbientLight('#ffe0c0', 0.35);
  scene.add(amb);

  const fog = new THREE.Fog('#e7c69e', 140, 360);
  scene.fog = fog;
  scene.background = new THREE.Color('#e7c69e');

  // 夜景点光源（车站站台 ×2、街口 ×2）
  const pointLights = [];
  for (const p of [
    { pos: [-1.5, 3.0, -12.6], color: '#ffcf9a', distance: 16, max: 26 },
    { pos: [6.0, 3.0, -12.6], color: '#ffcf9a', distance: 16, max: 26 },
    { pos: [3, 3.4, -6.9], color: '#ffd3a0', distance: 15, max: 20 },
    { pos: [11, 3.4, 6], color: '#ffd3a0', distance: 15, max: 20 },
  ]) {
    const l = new THREE.PointLight(p.color, 0, p.distance, 2);
    l.position.set(p.pos[0], p.pos[1], p.pos[2]);
    l.userData.maxIntensity = p.max;
    scene.add(l);
    pointLights.push(l);
  }

  // 当前值（平滑过渡）
  const cur = {
    sunColor: new THREE.Color(PRESETS.dusk.sunColor),
    sunIntensity: PRESETS.dusk.sunIntensity,
    sunPos: new THREE.Vector3(...PRESETS.dusk.sunPos),
    hemiSky: new THREE.Color(PRESETS.dusk.hemiSky),
    hemiGround: new THREE.Color(PRESETS.dusk.hemiGround),
    hemiIntensity: PRESETS.dusk.hemiIntensity,
    ambColor: new THREE.Color(PRESETS.dusk.ambColor),
    ambIntensity: PRESETS.dusk.ambIntensity,
    bg: new THREE.Color(PRESETS.dusk.bg),
    fogNear: PRESETS.dusk.fog[0],
    fogFar: PRESETS.dusk.fog[1],
    glow: PRESETS.dusk.glow,
    exposure: PRESETS.dusk.exposure,
  };

  let mode = 'dusk';
  let target = PRESETS.dusk;
  const targetSunPos = new THREE.Vector3(...PRESETS.dusk.sunPos);

  function setMode(next) {
    mode = next;
    target = PRESETS[next];
    targetSunPos.set(...target.sunPos);
  }

  function cycle() {
    const i = MODE_ORDER.indexOf(mode);
    const next = MODE_ORDER[(i + 1) % MODE_ORDER.length];
    setMode(next);
    return next;
  }

  const tmpColor = new THREE.Color();

  function update(dt) {
    const k = 1 - Math.exp(-4.5 * Math.min(dt, 0.1));
    cur.sunColor.lerp(tmpColor.set(target.sunColor), k);
    cur.sunIntensity += (target.sunIntensity - cur.sunIntensity) * k;
    cur.sunPos.lerp(targetSunPos, k);
    cur.hemiSky.lerp(tmpColor.set(target.hemiSky), k);
    cur.hemiGround.lerp(tmpColor.set(target.hemiGround), k);
    cur.hemiIntensity += (target.hemiIntensity - cur.hemiIntensity) * k;
    cur.ambColor.lerp(tmpColor.set(target.ambColor), k);
    cur.ambIntensity += (target.ambIntensity - cur.ambIntensity) * k;
    cur.bg.lerp(tmpColor.set(target.bg), k);
    cur.fogNear += (target.fog[0] - cur.fogNear) * k;
    cur.fogFar += (target.fog[1] - cur.fogFar) * k;
    cur.glow += (target.glow - cur.glow) * k;
    cur.exposure += (target.exposure - cur.exposure) * k;

    sun.color.copy(cur.sunColor);
    sun.intensity = cur.sunIntensity;
    sun.position.copy(cur.sunPos);
    hemi.color.copy(cur.hemiSky);
    hemi.groundColor.copy(cur.hemiGround);
    hemi.intensity = cur.hemiIntensity;
    amb.color.copy(cur.ambColor);
    amb.intensity = cur.ambIntensity;
    scene.background.copy(cur.bg);
    fog.color.copy(cur.bg);
    fog.near = cur.fogNear;
    fog.far = cur.fogFar;
    setGlow(cur.glow);
    for (const light of pointLights) light.intensity = cur.glow * light.userData.maxIntensity;
    return cur.exposure;
  }

  return { setMode, cycle, update, get mode() { return mode; }, presets: PRESETS, modeOrder: MODE_ORDER };
}
