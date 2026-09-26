/**
 * 光照与昼夜：默认是暖色傍晚（低角度阳光 + 投影），
 * 夜晚切换为月光 + 环境补光，同时窗外/路灯/车灯发光。
 * 昼夜之间平滑过渡。
 */
import * as THREE from 'three';
import { makeSkyTexture } from '../lib/textures.js';
import { applyNight } from './shared.js';
import { lerp, clamp } from '../lib/util.js';

const DAY = {
  sunColor: new THREE.Color(0xffd3a2),
  sunIntensity: 3.1,
  moonIntensity: 0,
  hemiSky: new THREE.Color(0xbcd8f2),
  hemiGround: new THREE.Color(0x9c7c52),
  hemiIntensity: 1.55,
  ambientColor: new THREE.Color(0x6b5b48),
  ambientIntensity: 0.34,
  fogColor: new THREE.Color(0xe7c8a2),
  fogNear: 44,
  fogFar: 118,
  exposure: 1.02,
};

const NIGHT = {
  sunColor: new THREE.Color(0x9fb6e2),
  sunIntensity: 0.28,
  moonIntensity: 0.92,
  hemiSky: new THREE.Color(0x2c3e63),
  hemiGround: new THREE.Color(0x22283c),
  hemiIntensity: 0.82,
  ambientColor: new THREE.Color(0x2b3557),
  ambientIntensity: 0.42,
  fogColor: new THREE.Color(0x27334f),
  fogNear: 30,
  fogFar: 96,
  exposure: 1.16,
};

export function buildLighting(scene, renderer) {
  const sun = new THREE.DirectionalLight(DAY.sunColor, DAY.sunIntensity);
  sun.position.set(31, 23, 27);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.camera.near = 1;
  sun.shadow.camera.far = 90;
  const extent = 19;
  sun.shadow.camera.left = -extent;
  sun.shadow.camera.right = extent;
  sun.shadow.camera.top = extent;
  sun.shadow.camera.bottom = -extent;
  sun.shadow.bias = -0.00042;
  sun.shadow.normalBias = 0.022;
  scene.add(sun);
  scene.add(sun.target);

  const moon = new THREE.DirectionalLight(0x93a9d8, 0);
  moon.position.set(-26, 30, -19);
  moon.castShadow = true;
  moon.shadow.mapSize.set(1024, 1024);
  moon.shadow.camera.near = 1;
  moon.shadow.camera.far = 90;
  moon.shadow.camera.left = -extent;
  moon.shadow.camera.right = extent;
  moon.shadow.camera.top = extent;
  moon.shadow.camera.bottom = -extent;
  moon.shadow.bias = -0.0006;
  moon.shadow.normalBias = 0.03;
  scene.add(moon);
  scene.add(moon.target);

  const hemi = new THREE.HemisphereLight(DAY.hemiSky, DAY.hemiGround, DAY.hemiIntensity);
  scene.add(hemi);

  const ambient = new THREE.AmbientLight(DAY.ambientColor, DAY.ambientIntensity);
  scene.add(ambient);

  // 天空穹顶（白天/夜晚两层交叉淡入）
  const skyDay = new THREE.Mesh(
    new THREE.SphereGeometry(210, 40, 22),
    new THREE.MeshBasicMaterial({
      map: makeSkyTexture({ night: false }),
      side: THREE.BackSide,
      fog: false,
      depthWrite: false,
    }),
  );
  skyDay.renderOrder = -12;
  scene.add(skyDay);

  const skyNightMat = new THREE.MeshBasicMaterial({
    map: makeSkyTexture({ night: true }),
    side: THREE.BackSide,
    fog: false,
    depthWrite: false,
    transparent: true,
    opacity: 0,
  });
  const skyNight = new THREE.Mesh(new THREE.SphereGeometry(214, 40, 22), skyNightMat);
  skyNight.renderOrder = -11;
  scene.add(skyNight);

  scene.fog = new THREE.Fog(DAY.fogColor.clone(), DAY.fogNear, DAY.fogFar);
  scene.background = new THREE.Color(0xdcc0a0);

  let mix = 0; // 0 = 白天，1 = 夜晚
  let target = 0;

  function apply(m) {
    sun.color.copy(DAY.sunColor).lerp(NIGHT.sunColor, m);
    sun.intensity = lerp(DAY.sunIntensity, NIGHT.sunIntensity, m);
    moon.intensity = lerp(DAY.moonIntensity, NIGHT.moonIntensity, m);
    // 月光阴影只在夜晚渲染，白天省掉一整遍阴影通道
    moon.castShadow = m > 0.22;
    hemi.color.copy(DAY.hemiSky).lerp(NIGHT.hemiSky, m);
    hemi.groundColor.copy(DAY.hemiGround).lerp(NIGHT.hemiGround, m);
    hemi.intensity = lerp(DAY.hemiIntensity, NIGHT.hemiIntensity, m);
    ambient.color.copy(DAY.ambientColor).lerp(NIGHT.ambientColor, m);
    ambient.intensity = lerp(DAY.ambientIntensity, NIGHT.ambientIntensity, m);
    scene.fog.color.copy(DAY.fogColor).lerp(NIGHT.fogColor, m);
    scene.fog.near = lerp(DAY.fogNear, NIGHT.fogNear, m);
    scene.fog.far = lerp(DAY.fogFar, NIGHT.fogFar, m);
    scene.background.copy(scene.fog.color);
    skyNightMat.opacity = m;
    renderer.toneMappingExposure = lerp(DAY.exposure, NIGHT.exposure, m);
    applyNight(m);
  }

  apply(0);

  return {
    sun,
    moon,
    get mix() {
      return mix;
    },
    setNight(value) {
      target = value ? 1 : 0;
    },
    setNightImmediate(value) {
      target = value ? 1 : 0;
      mix = target;
      apply(mix);
    },
    update(dt) {
      if (Math.abs(target - mix) > 0.001) {
        const speed = 1.6;
        mix = mix + clamp(target - mix, -speed * dt, speed * dt);
        apply(mix);
      }
    },
  };
}
