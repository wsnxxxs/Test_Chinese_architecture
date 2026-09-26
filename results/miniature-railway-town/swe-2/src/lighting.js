import * as THREE from 'three';
import { nightRegistry } from './materials.js';

const EVENING = {
  sky: new THREE.Color('#f4cd96'),
  fog: new THREE.Color('#f0c78e'),
  sun: new THREE.Color('#ffb066'),
  sunI: 2.6,
  sunPos: new THREE.Vector3(-36, 15, -14),
  hemiSky: new THREE.Color('#ffd9a8'),
  hemiGround: new THREE.Color('#7a6248'),
  hemiI: 0.62,
  ambI: 0.25,
};

const NIGHT = {
  sky: new THREE.Color('#0e1730'),
  fog: new THREE.Color('#0e1730'),
  sun: new THREE.Color('#7f9fd4'),
  sunI: 0.35,
  sunPos: new THREE.Vector3(24, 30, -20),
  hemiSky: new THREE.Color('#33456b'),
  hemiGround: new THREE.Color('#141a26'),
  hemiI: 0.35,
  ambI: 0.12,
};

export class Lighting {
  constructor(scene) {
    this.scene = scene;

    this.hemi = new THREE.HemisphereLight(EVENING.hemiSky, EVENING.hemiGround, EVENING.hemiI);
    scene.add(this.hemi);

    this.amb = new THREE.AmbientLight('#ffffff', EVENING.ambI);
    scene.add(this.amb);

    this.sun = new THREE.DirectionalLight(EVENING.sun, EVENING.sunI);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(2048, 2048);
    const c = this.sun.shadow.camera;
    c.left = -30; c.right = 30; c.top = 30; c.bottom = -30;
    c.near = 5; c.far = 110;
    this.sun.shadow.bias = -0.0008;
    this.sun.shadow.normalBias = 0.03;
    scene.add(this.sun, this.sun.target);

    scene.fog = new THREE.Fog(EVENING.fog, 80, 190);
    scene.background = EVENING.sky.clone();

    this.t = 0;          // 0 = evening, 1 = night
    this.target = 0;
    this.apply(0);
  }

  update(dt) {
    const d = this.target - this.t;
    if (Math.abs(d) > 1e-4) {
      this.t += Math.sign(d) * Math.min(Math.abs(d), dt * 1.4);
      this.apply(this.t);
    }
  }

  apply(t) {
    const lerp = (a, b) => a + (b - a) * t;
    this.scene.background.copy(EVENING.sky).lerp(NIGHT.sky, t);
    this.scene.fog.color.copy(EVENING.fog).lerp(NIGHT.fog, t);
    this.sun.color.copy(EVENING.sun).lerp(NIGHT.sun, t);
    this.sun.intensity = lerp(EVENING.sunI, NIGHT.sunI);
    this.sun.position.copy(EVENING.sunPos).lerp(NIGHT.sunPos, t);
    this.hemi.color.copy(EVENING.hemiSky).lerp(NIGHT.hemiSky, t);
    this.hemi.groundColor.copy(EVENING.hemiGround).lerp(NIGHT.hemiGround, t);
    this.hemi.intensity = lerp(EVENING.hemiI, NIGHT.hemiI);
    this.amb.intensity = lerp(EVENING.ambI, NIGHT.ambI);
    nightRegistry.apply(t);
    if (this.headlight) this.headlight.intensity = t * 45;
    document.body.classList.toggle('night', t > 0.5);
  }
}
