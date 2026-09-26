import * as THREE from 'three';
import { GROUND } from '../core/config.js';

const MODES = {
  dusk: {
    sun: 0xffbe86,
    sunI: 4.3,
    sunPos: [-36, 13.5, 21],
    hemiSky: 0xffc089,
    hemiGnd: 0x51473a,
    hemiI: 1.0,
    ambI: 0.4,
    amb: 0xb0a08a,
    fog: 0x2a1f1a,
    fogNear: 96,
    fogFar: 190,
    skyTop: 0x241a20,
    skyMid: 0x2e211b,
    skyBot: 0x140f0d,
    exposure: 1.06,
    stars: 0,
    window: 0.3,
    lamp: 0.5,
    spill: 0.0,
    point: 4.0,
    water: 0.12,
  },
  day: {
    sun: 0xfff4e2,
    sunI: 5.0,
    sunPos: [-26, 40, 30],
    hemiSky: 0xcfe2ff,
    hemiGnd: 0x6f7a4a,
    hemiI: 1.45,
    ambI: 0.5,
    amb: 0xc4d4e4,
    fog: 0x9fb6c8,
    fogNear: 104,
    fogFar: 200,
    skyTop: 0x5d84ac,
    skyMid: 0x8ea8bd,
    skyBot: 0xb2bdc4,
    exposure: 0.92,
    stars: 0,
    window: 0.02,
    lamp: 0.0,
    spill: 0,
    point: 0,
    water: 0,
  },
  night: {
    sun: 0x9db4de,
    sunI: 0.85,
    sunPos: [24, 30, -26],
    hemiSky: 0x1d2c4c,
    hemiGnd: 0x0b1018,
    hemiI: 0.62,
    ambI: 0.26,
    amb: 0x6a7a9c,
    fog: 0x0a0e18,
    fogNear: 80,
    fogFar: 170,
    skyTop: 0x04060e,
    skyMid: 0x0a1020,
    skyBot: 0x182238,
    exposure: 1.08,
    stars: 0.9,
    window: 1.0,
    lamp: 1.0,
    spill: 0.13,
    point: 9.0,
    water: 0.72,
  },
};

const SKY_VERT = /* glsl */ `
  varying vec3 vDir;
  void main() {
    vDir = normalize(position);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;
const SKY_FRAG = /* glsl */ `
  uniform vec3 top;
  uniform vec3 mid;
  uniform vec3 bot;
  varying vec3 vDir;
  void main() {
    float h = clamp(vDir.y * 0.5 + 0.5, 0.0, 1.0);
    vec3 c = mix(bot, mid, smoothstep(0.0, 0.52, h));
    c = mix(c, top, smoothstep(0.45, 1.0, h));
    gl_FragColor = vec4(c, 1.0);
  }
`;

export function buildLighting(scene, renderer) {
  const sun = new THREE.DirectionalLight(0xffffff, 2.9);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  const sc = sun.shadow.camera;
  sc.left = -33;
  sc.right = 33;
  sc.top = 27;
  sc.bottom = -27;
  sc.near = 1;
  sc.far = 190;
  sun.shadow.bias = -0.00035;
  sun.shadow.normalBias = 0.035;
  sun.target.position.set(0, GROUND, 0);
  scene.add(sun, sun.target);

  const hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 0.6);
  scene.add(hemi);
  const amb = new THREE.AmbientLight(0xffffff, 0.26);
  scene.add(amb);

  // 天空渐变穹顶（半径需小于相机 far，避免被远裁剪面切掉）
  const skyGeo = new THREE.SphereGeometry(250, 32, 20);
  const skyMat = new THREE.ShaderMaterial({
    uniforms: {
      top: { value: new THREE.Color(0x27355c) },
      mid: { value: new THREE.Color(0x8a6a72) },
      bot: { value: new THREE.Color(0xe09355) },
    },
    vertexShader: SKY_VERT,
    fragmentShader: SKY_FRAG,
    side: THREE.BackSide,
    depthWrite: false,
    fog: false,
  });
  const sky = new THREE.Mesh(skyGeo, skyMat);
  sky.renderOrder = -10;
  scene.add(sky);

  // 星空
  const starPos = [];
  for (let i = 0; i < 700; i++) {
    const u = Math.random() * 2 - 1;
    const a = Math.random() * Math.PI * 2;
    const r = Math.sqrt(1 - u * u);
    starPos.push(Math.cos(a) * r * 232, Math.abs(u) * 232 + 6, Math.sin(a) * r * 232);
  }
  const starGeo = new THREE.BufferGeometry();
  starGeo.setAttribute('position', new THREE.Float32BufferAttribute(starPos, 3));
  const starMat = new THREE.PointsMaterial({
    color: 0xf2f4ff,
    size: 2.0,
    sizeAttenuation: false,
    transparent: true,
    opacity: 0,
    depthWrite: false,
    fog: false,
  });
  const stars = new THREE.Points(starGeo, starMat);
  scene.add(stars);

  scene.fog = new THREE.Fog(0x2a1f1a, 96, 190);

  // 夜间点光
  const pointLights = [
    { x: 2.0, y: 1.5, z: 5.6, i: 1.0 },
    { x: 5.0, y: 1.6, z: -1.4, i: 1.0 },
    { x: -1.2, y: 1.5, z: 1.2, i: 0.8 },
    { x: -3.85, y: 1.6, z: 9.6, i: 0.7 },
  ].map((p) => {
    const l = new THREE.PointLight(0xffb673, 0, 8.5, 2);
    l.position.set(p.x, p.y, p.z);
    l.userData.k = p.i;
    scene.add(l);
    return l;
  });

  const tmpA = new THREE.Color();
  const tmpB = new THREE.Color();
  const cur = { ...MODES.dusk };
  let from = MODES.dusk;
  let to = MODES.dusk;
  let t = 1;
  let dur = 1.1;

  function apply(m) {
    sun.color.set(m.sun);
    sun.intensity = m.sunI;
    sun.position.set(m.sunPos[0], m.sunPos[1], m.sunPos[2]);
    hemi.color.set(m.hemiSky);
    hemi.groundColor.set(m.hemiGnd);
    hemi.intensity = m.hemiI;
    amb.color.set(m.amb);
    amb.intensity = m.ambI;
    scene.fog.color.set(m.fog);
    scene.fog.near = m.fogNear;
    scene.fog.far = m.fogFar;
    skyMat.uniforms.top.value.set(m.skyTop);
    skyMat.uniforms.mid.value.set(m.skyMid);
    skyMat.uniforms.bot.value.set(m.skyBot);
    starMat.opacity = m.stars;
    renderer.toneMappingExposure = m.exposure;
  }

  const mixHex = (a, b, k) => {
    tmpA.set(a);
    tmpB.set(b);
    return tmpA.lerp(tmpB, k).getHex();
  };

  function update(dt, targets) {
    if (t < 1) {
      t = Math.min(1, t + dt / dur);
      const k = t * t * (3 - 2 * t);
      const L = (a, b) => a + (b - a) * k;
      const m = {
        sun: mixHex(from.sun, to.sun, k),
        sunI: L(from.sunI, to.sunI),
        sunPos: [
          L(from.sunPos[0], to.sunPos[0]),
          L(from.sunPos[1], to.sunPos[1]),
          L(from.sunPos[2], to.sunPos[2]),
        ],
        hemiSky: mixHex(from.hemiSky, to.hemiSky, k),
        hemiGnd: mixHex(from.hemiGnd, to.hemiGnd, k),
        hemiI: L(from.hemiI, to.hemiI),
        amb: mixHex(from.amb, to.amb, k),
        ambI: L(from.ambI, to.ambI),
        fog: mixHex(from.fog, to.fog, k),
        fogNear: L(from.fogNear, to.fogNear),
        fogFar: L(from.fogFar, to.fogFar),
        skyTop: mixHex(from.skyTop, to.skyTop, k),
        skyMid: mixHex(from.skyMid, to.skyMid, k),
        skyBot: mixHex(from.skyBot, to.skyBot, k),
        exposure: L(from.exposure, to.exposure),
        stars: L(from.stars, to.stars),
        window: L(from.window, to.window),
        lamp: L(from.lamp, to.lamp),
        spill: L(from.spill, to.spill),
        point: L(from.point, to.point),
        water: L(from.water ?? 0, to.water ?? 0),
      };
      apply(m);
      cur.window = m.window;
      cur.lamp = m.lamp;
      cur.spill = m.spill;
      cur.point = m.point;
      cur.water = m.water;
    } else {
      cur.window = to.window;
      cur.lamp = to.lamp;
      cur.spill = to.spill;
      cur.point = to.point;
      cur.water = to.water;
    }
    for (const l of pointLights) l.intensity = cur.point * l.userData.k;
    if (targets?.glassMat) targets.glassMat.emissiveIntensity = cur.window;
    if (targets?.lampMat) targets.lampMat.emissiveIntensity = 0.06 + cur.lamp * 1.5;
    if (targets?.spillMat) targets.spillMat.opacity = cur.spill;
    if (targets?.trainGlass) targets.trainGlass.emissiveIntensity = cur.window * 0.9;
    if (targets?.waterMat) targets.waterMat.color.setScalar(1 - 0.72 * (cur.water ?? 0));
  }

  function setMode(mode, instant = false) {
    from = { ...cur };
    to = MODES[mode] || MODES.dusk;
    cur.sun = to.sun;
    cur.hemiSky = to.hemiSky;
    cur.hemiGnd = to.hemiGnd;
    cur.amb = to.amb;
    cur.fog = to.fog;
    cur.skyTop = to.skyTop;
    cur.skyMid = to.skyMid;
    cur.skyBot = to.skyBot;
    cur.sunPos = to.sunPos.slice();
    t = instant ? 1 : 0;
    if (instant) {
      apply(to);
      cur.window = to.window;
      cur.lamp = to.lamp;
      cur.spill = to.spill;
      cur.point = to.point;
      cur.water = to.water;
      cur.sunI = to.sunI;
      cur.hemiI = to.hemiI;
      cur.ambI = to.ambI;
      cur.fogNear = to.fogNear;
      cur.fogFar = to.fogFar;
      cur.exposure = to.exposure;
      cur.stars = to.stars;
    }
    return to;
  }

  apply(MODES.dusk);
  cur.window = MODES.dusk.window;
  cur.lamp = MODES.dusk.lamp;
  cur.spill = MODES.dusk.spill;
  cur.point = MODES.dusk.point;

  return { sun, hemi, amb, sky, stars, setMode, update, MODES, pointLights };
}
