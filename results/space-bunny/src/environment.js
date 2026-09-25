import * as THREE from 'three';
import { lerp } from './palette.js';

/**
 * 环境：天空、太阳/月亮、三套时辰色调、云、星空、萤火虫、灯光光晕
 */

export const PRESETS = {
  morning: {
    label: '晨',
    sunDir: [0.74, 0.50, 0.45],
    sunColor: 0xffe4bb, sunIntensity: 3.3,
    skyTop: 0x5f9ed6, skyHorizon: 0xffe9cb,
    fog: 0xdde9f3, fogNear: 180, fogFar: 430,
    hemiSky: 0xcfe4ff, hemiGround: 0x7c7a58, hemiIntensity: 0.42,
    exposure: 1.0,
    lantern: 0.42, window: 0.18, halo: 0.0, point: 0,
    fireflies: 0, stars: 0, sunGlow: 0.55, cloud: 0xffffff, cloudOpacity: 0.72
  },
  dusk: {
    label: '暮',
    sunDir: [-0.80, 0.19, 0.56],
    sunColor: 0xff9b57, sunIntensity: 3.5,
    skyTop: 0x33406e, skyHorizon: 0xff9a60,
    fog: 0xdfa87c, fogNear: 150, fogFar: 380,
    hemiSky: 0x93a4d8, hemiGround: 0x6d4a38, hemiIntensity: 0.34,
    exposure: 1.06,
    lantern: 1.6, window: 1.1, halo: 0.32, point: 26,
    fireflies: 0.18, stars: 0.2, sunGlow: 1.0, cloud: 0xffb489, cloudOpacity: 0.8
  },
  night: {
    label: '夜',
    sunDir: [0.36, 0.64, -0.68],
    sunColor: 0x9db8ff, sunIntensity: 0.95,
    skyTop: 0x060c1c, skyHorizon: 0x1e2d50,
    fog: 0x121a30, fogNear: 130, fogFar: 340,
    hemiSky: 0x33487a, hemiGround: 0x1f2530, hemiIntensity: 0.46,
    exposure: 1.26,
    lantern: 3.4, window: 2.8, halo: 0.7, point: 95,
    fireflies: 0.95, stars: 1, sunGlow: 0.3, cloud: 0x2c3a55, cloudOpacity: 0.85
  }
};

const SKY_VERT = /* glsl */ `
  varying vec3 vDir;
  void main() {
    vDir = normalize(position);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const SKY_FRAG = /* glsl */ `
  uniform vec3 uTop;
  uniform vec3 uHorizon;
  uniform vec3 uSunColor;
  uniform vec3 uSunDir;
  uniform float uSunGlow;
  varying vec3 vDir;

  void main() {
    vec3 dir = normalize(vDir);
    float h = clamp(dir.y, 0.0, 1.0);
    vec3 col = mix(uHorizon, uTop, pow(h, 0.55));

    // 太阳/月亮的光晕与本体
    float d = max(dot(dir, normalize(uSunDir)), 0.0);
    col += uSunColor * pow(d, 5.0) * 0.22 * uSunGlow;
    col += uSunColor * pow(d, 260.0) * 1.9 * uSunGlow;

    // 地平线以下压暗
    col = mix(col, uHorizon * 0.72, smoothstep(0.0, -0.22, dir.y));

    gl_FragColor = vec4(col, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;

function radialTexture() {
  const size = 128;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext('2d');
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, 'rgba(255,226,170,1)');
  g.addColorStop(0.25, 'rgba(255,186,110,0.55)');
  g.addColorStop(1, 'rgba(255,160,80,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

export function createEnvironment(scene, renderer, voxelMaterials, halos = []) {
  // ---------------- 天空 ----------------
  const skyUniforms = {
    uTop: { value: new THREE.Color(PRESETS.morning.skyTop) },
    uHorizon: { value: new THREE.Color(PRESETS.morning.skyHorizon) },
    uSunColor: { value: new THREE.Color(PRESETS.morning.sunColor) },
    uSunDir: { value: new THREE.Vector3(...PRESETS.morning.sunDir).normalize() },
    uSunGlow: { value: PRESETS.morning.sunGlow }
  };
  const sky = new THREE.Mesh(
    new THREE.SphereGeometry(500, 32, 20),
    new THREE.ShaderMaterial({
      uniforms: skyUniforms,
      vertexShader: SKY_VERT,
      fragmentShader: SKY_FRAG,
      side: THREE.BackSide,
      depthWrite: false,
      fog: false
    })
  );
  sky.name = 'sky';
  scene.add(sky);

  // ---------------- 光源 ----------------
  const sun = new THREE.DirectionalLight(0xffffff, 2.4);
  sun.castShadow = true;
  sun.shadow.mapSize.set(4096, 4096);
  sun.shadow.camera.left = -74;
  sun.shadow.camera.right = 74;
  sun.shadow.camera.top = 74;
  sun.shadow.camera.bottom = -74;
  sun.shadow.camera.near = 20;
  sun.shadow.camera.far = 420;
  sun.shadow.bias = -0.0012;
  sun.shadow.normalBias = 0.55;
  const sunTarget = new THREE.Object3D();
  sunTarget.position.set(0, 0, 0);
  scene.add(sunTarget);
  sun.target = sunTarget;
  scene.add(sun);

  const hemi = new THREE.HemisphereLight(0xcfe4ff, 0x7c7a58, 0.8);
  scene.add(hemi);

  // 夜间灯火（不投影，仅作氛围补光）
  const pointLights = [
    new THREE.PointLight(0xffb45c, 0, 34, 2),
    new THREE.PointLight(0xffb45c, 0, 34, 2),
    new THREE.PointLight(0xffb45c, 0, 30, 2)
  ];
  pointLights[0].position.set(0, 7, 44);
  pointLights[1].position.set(0, 9, -18);
  pointLights[2].position.set(0, 8, -48);
  pointLights.forEach((p) => scene.add(p));

  // 雾
  scene.fog = new THREE.Fog(PRESETS.morning.fog, 180, 430);

  // ---------------- 云 ----------------
  const cloudGeo = new THREE.BoxGeometry(1, 1, 1);
  const cloudMat = new THREE.MeshBasicMaterial({
    color: 0xffffff, transparent: true, opacity: 0.72, depthWrite: false, fog: false
  });
  const CLOUD_COUNT = 13;
  const clouds = new THREE.InstancedMesh(cloudGeo, cloudMat, CLOUD_COUNT * 4);
  clouds.frustumCulled = false;
  clouds.renderOrder = -1;
  const cloudData = [];
  const cm = new THREE.Matrix4();
  for (let i = 0; i < CLOUD_COUNT; i++) {
    const base = {
      x: -190 + Math.random() * 380,
      y: 88 + Math.random() * 40,
      z: -150 + Math.random() * 300,
      speed: 0.55 + Math.random() * 0.9,
      parts: []
    };
    const n = 3 + Math.floor(Math.random() * 2);
    for (let p = 0; p < n; p++) {
      base.parts.push({
        ox: (Math.random() - 0.5) * 16,
        oy: (Math.random() - 0.5) * 2.4,
        oz: (Math.random() - 0.5) * 10,
        sx: 9 + Math.random() * 11,
        sy: 2.0 + Math.random() * 1.8,
        sz: 7 + Math.random() * 7
      });
    }
    cloudData.push(base);
  }
  scene.add(clouds);
  function updateClouds() {
    let i = 0;
    for (const c of cloudData) {
      if (c.x > 230) c.x = -230;
      for (const p of c.parts) {
        cm.makeScale(p.sx, p.sy, p.sz);
        cm.setPosition(c.x + p.ox, c.y + p.oy, c.z + p.oz);
        clouds.setMatrixAt(i++, cm);
      }
    }
    clouds.instanceMatrix.needsUpdate = true;
  }
  updateClouds();

  // ---------------- 星空 ----------------
  const starCount = 600;
  const starPos = new Float32Array(starCount * 3);
  for (let i = 0; i < starCount; i++) {
    const v = new THREE.Vector3(
      Math.random() * 2 - 1, Math.random() * 2 - 1, Math.random() * 2 - 1
    ).normalize().multiplyScalar(460);
    starPos[i * 3] = v.x;
    starPos[i * 3 + 1] = Math.abs(v.y) * 0.9 + 10;
    starPos[i * 3 + 2] = v.z;
  }
  const starGeo = new THREE.BufferGeometry();
  starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
  const starMat = new THREE.PointsMaterial({
    color: 0xdfe9ff, size: 2, sizeAttenuation: false,
    transparent: true, opacity: 0, depthWrite: false, fog: false
  });
  const stars = new THREE.Points(starGeo, starMat);
  scene.add(stars);

  // ---------------- 萤火虫 ----------------
  const flyCount = 110;
  const flyPos = new Float32Array(flyCount * 3);
  const flyBase = [];
  for (let i = 0; i < flyCount; i++) {
    const x = (Math.random() * 2 - 1) * 40;
    const z = -64 + Math.random() * 110;
    const y = 1 + Math.random() * 6;
    flyBase.push({ x, y, z, p: Math.random() * 6.28, s: 0.4 + Math.random() * 0.7 });
    flyPos[i * 3] = x;
    flyPos[i * 3 + 1] = y;
    flyPos[i * 3 + 2] = z;
  }
  const flyGeo = new THREE.BufferGeometry();
  flyGeo.setAttribute('position', new THREE.BufferAttribute(flyPos, 3));
  const flyMat = new THREE.PointsMaterial({
    color: 0xffd98a, size: 0.75, sizeAttenuation: true,
    transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending
  });
  const fireflies = new THREE.Points(flyGeo, flyMat);
  scene.add(fireflies);

  // ---------------- 灯笼光晕 ----------------
  const haloTex = radialTexture();
  const haloMat = new THREE.SpriteMaterial({
    map: haloTex, color: 0xffb066, transparent: true, opacity: 0,
    blending: THREE.AdditiveBlending, depthWrite: false, fog: false
  });
  const haloSprites = halos.map((h) => {
    const s = new THREE.Sprite(haloMat);
    s.position.set(h.x, h.y, h.z);
    s.scale.setScalar(4.2);
    scene.add(s);
    return s;
  });

  // ---------------- 色调状态机 ----------------
  const from = { ...PRESETS.morning };
  const to = { ...PRESETS.morning };
  const cur = { ...PRESETS.morning };
  const cTop = new THREE.Color();
  const cHorizon = new THREE.Color();
  const cSun = new THREE.Color();
  const cFog = new THREE.Color();
  const cHemiSky = new THREE.Color();
  const cHemiGround = new THREE.Color();
  const cCloud = new THREE.Color();
  const vSunDir = new THREE.Vector3();
  let t = 1;
  let name = 'morning';

  function snapshot(p) {
    return {
      sunDir: p.sunDir.slice(), sunColor: p.sunColor, sunIntensity: p.sunIntensity,
      skyTop: p.skyTop, skyHorizon: p.skyHorizon,
      fog: p.fog, fogNear: p.fogNear, fogFar: p.fogFar,
      hemiSky: p.hemiSky, hemiGround: p.hemiGround, hemiIntensity: p.hemiIntensity,
      exposure: p.exposure, lantern: p.lantern, window: p.window, halo: p.halo, point: p.point,
      fireflies: p.fireflies, stars: p.stars, sunGlow: p.sunGlow,
      cloud: p.cloud, cloudOpacity: p.cloudOpacity
    };
  }

  function setPreset(next, instant = false) {
    if (!PRESETS[next]) return;
    name = next;
    Object.assign(from, snapshot(cur));
    Object.assign(to, snapshot(PRESETS[next]));
    t = instant ? 1 : 0;
    if (instant) apply();
  }

  function apply() {
    cTop.setHex(from.skyTop).lerp(new THREE.Color(to.skyTop), t);
    cHorizon.setHex(from.skyHorizon).lerp(new THREE.Color(to.skyHorizon), t);
    cSun.setHex(from.sunColor).lerp(new THREE.Color(to.sunColor), t);
    cFog.setHex(from.fog).lerp(new THREE.Color(to.fog), t);
    cHemiSky.setHex(from.hemiSky).lerp(new THREE.Color(to.hemiSky), t);
    cHemiGround.setHex(from.hemiGround).lerp(new THREE.Color(to.hemiGround), t);
    cCloud.setHex(from.cloud).lerp(new THREE.Color(to.cloud), t);
    vSunDir.fromArray(from.sunDir).lerp(new THREE.Vector3(...to.sunDir), t).normalize();

    // 天空
    skyUniforms.uTop.value.copy(cTop);
    skyUniforms.uHorizon.value.copy(cHorizon);
    skyUniforms.uSunColor.value.copy(cSun);
    skyUniforms.uSunDir.value.copy(vSunDir);
    skyUniforms.uSunGlow.value = lerp(from.sunGlow, to.sunGlow, t);

    // 主光
    sun.color.copy(cSun);
    sun.intensity = lerp(from.sunIntensity, to.sunIntensity, t);
    const wantShadow = sun.intensity > 1.2;
    if (sun.castShadow !== wantShadow) sun.castShadow = wantShadow;
    sun.position.copy(vSunDir).multiplyScalar(190).add(sunTarget.position);

    // 补光
    hemi.color.copy(cHemiSky);
    hemi.groundColor.copy(cHemiGround);
    hemi.intensity = lerp(from.hemiIntensity, to.hemiIntensity, t);

    // 雾
    scene.fog.color.copy(cFog);
    scene.fog.near = lerp(from.fogNear, to.fogNear, t);
    scene.fog.far = lerp(from.fogFar, to.fogFar, t);

    // 曝光
    renderer.toneMappingExposure = lerp(from.exposure, to.exposure, t);

    // 灯火
    const lanternK = lerp(from.lantern, to.lantern, t);
    const windowK = lerp(from.window, to.window, t);
    voxelMaterials.lantern.color.setScalar(lanternK);
    voxelMaterials.window.color.setScalar(windowK);
    const pointK = lerp(from.point, to.point, t);
    for (const p of pointLights) p.intensity = pointK;
    const haloK = lerp(from.halo, to.halo, t);
    haloMat.opacity = haloK;
    for (const s of haloSprites) s.visible = haloK > 0.015;

    // 云 / 星 / 萤火
    cloudMat.color.copy(cCloud);
    cloudMat.opacity = lerp(from.cloudOpacity, to.cloudOpacity, t);
    starMat.opacity = lerp(from.stars, to.stars, t);
    flyMat.opacity = lerp(from.fireflies, to.fireflies, t);

    // 记录当前值，便于下一次过渡
    cur.skyTop = cTop.getHex();
    cur.skyHorizon = cHorizon.getHex();
    cur.sunColor = cSun.getHex();
    cur.sunDir = vSunDir.toArray();
    cur.sunIntensity = sun.intensity;
    cur.fog = cFog.getHex();
    cur.fogNear = scene.fog.near;
    cur.fogFar = scene.fog.far;
    cur.hemiSky = cHemiSky.getHex();
    cur.hemiGround = cHemiGround.getHex();
    cur.hemiIntensity = hemi.intensity;
    cur.exposure = renderer.toneMappingExposure;
    cur.lantern = lanternK;
    cur.window = windowK;
    cur.halo = haloK;
    cur.point = pointK;
    cur.sunGlow = skyUniforms.uSunGlow.value;
    cur.cloud = cloudMat.color.getHex();
    cur.cloudOpacity = cloudMat.opacity;
    cur.stars = starMat.opacity;
    cur.fireflies = flyMat.opacity;
  }

  let flyTime = 0;
  function update(dt) {
    if (t < 1) {
      t = Math.min(1, t + dt / 1.5);
      apply();
    }
    // 云缓慢漂移
    for (const c of cloudData) c.x += c.speed * dt;
    updateClouds();

    // 萤火虫游动
    if (flyMat.opacity > 0.01) {
      flyTime += dt;
      const arr = flyGeo.attributes.position.array;
      for (let i = 0; i < flyCount; i++) {
        const b = flyBase[i];
        arr[i * 3] = b.x + Math.sin(flyTime * b.s + b.p) * 2.4;
        arr[i * 3 + 1] = b.y + Math.sin(flyTime * b.s * 1.7 + b.p) * 0.8;
        arr[i * 3 + 2] = b.z + Math.cos(flyTime * b.s * 0.8 + b.p) * 2.0;
      }
      flyGeo.attributes.position.needsUpdate = true;
    }
  }

  apply();
  setPreset('morning', true);

  return {
    presets: PRESETS,
    setPreset,
    update,
    get preset() {
      return name;
    },
    sun,
    hemi
  };
}
