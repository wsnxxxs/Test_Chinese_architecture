// 灯光与昼夜：傍晚暖阳（默认）⇄ 夜晚。所有参数按 t∈[0,1] 平滑插值。
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { glow } from './materials.js';

const C = (h) => new THREE.Color(h);
const DAY = {
  sun: C(0xffb066), sunI: 3.6, sunPos: new THREE.Vector3(-32, 22, 20),
  hemiSky: C(0xffd6a8), hemiGround: C(0x7d5c3c), hemiI: 0.95,
  env: 0.5, exposure: 1.05, bg: C(0xdcae80),
};
const NIGHT = {
  sun: C(0x8ea4ff), sunI: 0.75, sunPos: new THREE.Vector3(24, 30, -14),
  hemiSky: C(0x3a4c86), hemiGround: C(0x1a2036), hemiI: 1.05,
  env: 0.22, exposure: 1.2, bg: C(0x0c1330),
};

export function createLighting(scene, renderer, lampData, extraLights = []) {
  const pm = new THREE.PMREMGenerator(renderer);
  scene.environment = pm.fromScene(new RoomEnvironment(), 0.04).texture;
  pm.dispose();

  const sun = new THREE.DirectionalLight(0xffb066, 3.6);
  sun.castShadow = true;
  sun.shadow.mapSize.set(4096, 4096);
  const sc = sun.shadow.camera;
  sc.left = -30; sc.right = 30; sc.top = 26; sc.bottom = -26; sc.near = 5; sc.far = 140;
  sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.035; sun.shadow.radius = 3;
  scene.add(sun, sun.target);

  const hemi = new THREE.HemisphereLight(0xffd6a8, 0x7d5c3c, 0.95);
  scene.add(hemi);

  scene.background = DAY.bg.clone();
  scene.fog = new THREE.Fog(DAY.bg.clone(), 95, 300);

  let t = 0, target = 0;
  const tmpC = new THREE.Color(), tmpV = new THREE.Vector3();
  const listeners = [];

  function apply() {
    const k = t * t * (3 - 2 * t);
    sun.color.copy(DAY.sun).lerp(NIGHT.sun, k);
    sun.intensity = THREE.MathUtils.lerp(DAY.sunI, NIGHT.sunI, k);
    tmpV.copy(DAY.sunPos).lerp(NIGHT.sunPos, k).normalize().multiplyScalar(80);
    sun.position.copy(tmpV);
    hemi.color.copy(DAY.hemiSky).lerp(NIGHT.hemiSky, k);
    hemi.groundColor.copy(DAY.hemiGround).lerp(NIGHT.hemiGround, k);
    hemi.intensity = THREE.MathUtils.lerp(DAY.hemiI, NIGHT.hemiI, k);
    scene.environmentIntensity = THREE.MathUtils.lerp(DAY.env, NIGHT.env, k);
    renderer.toneMappingExposure = THREE.MathUtils.lerp(DAY.exposure, NIGHT.exposure, k);
    tmpC.copy(DAY.bg).lerp(NIGHT.bg, k);
    scene.background.copy(tmpC); scene.fog.color.copy(tmpC);

    // 发光体：夜晚点亮部分窗户、路灯、车站与列车
    glow.windowLit.emissiveIntensity = THREE.MathUtils.lerp(0.08, 2.4, k);
    glow.windowLit.color.copy(C(0x6f8296)).lerp(C(0xffe2a0), k);
    glow.trainWindow.color.copy(C(0x3d4f63)).lerp(C(0xffe2a0), k);
    glow.windowDark.emissiveIntensity = THREE.MathUtils.lerp(0.4, 0.05, k);
    glow.lamp.emissiveIntensity = THREE.MathUtils.lerp(0.12, 3.2, k);
    glow.trainWindow.emissiveIntensity = THREE.MathUtils.lerp(0.1, 1.8, k);
    glow.headlamp.emissiveIntensity = THREE.MathUtils.lerp(0.25, 4, k);
    for (const h of lampData.halos) h.material.opacity = k * 0.8;
    for (const l of lampData.lights) l.intensity = k * 2.2;
    for (const l of extraLights) l.intensity = k * l.userData.nightI;
    document.body.classList.toggle('night', target === 1);
    listeners.forEach((f) => f(k));
  }
  apply();

  return {
    sun, hemi,
    get night() { return target === 1; },
    setNight(v) { target = v ? 1 : 0; document.body.classList.toggle('night', v); },
    onChange(f) { listeners.push(f); },
    update(dt) {
      if (Math.abs(t - target) < 0.001) { if (t !== target) { t = target; apply(); } return; }
      t += Math.sign(target - t) * Math.min(Math.abs(target - t), dt * 1.4);
      apply();
    },
    jump(v) { target = v ? 1 : 0; t = target; apply(); },
  };
}
