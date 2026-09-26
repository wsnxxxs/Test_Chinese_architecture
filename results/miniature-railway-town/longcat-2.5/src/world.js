import * as THREE from 'three';

// 地面顶面高度（沙盘层顶）
export const GROUND_Y = 1.2;

// 共享自发光材质（由 setTimeOfDay 统一控制）
function makeEmissiveMat(color) {
  return new THREE.MeshStandardMaterial({
    color: 0x111111,
    emissive: new THREE.Color(color),
    emissiveIntensity: 0,
    roughness: 0.6
  });
}

// 河道多边形（shape 坐标：x=世界x，y=世界z）
function riverShape(scale = 1) {
  const s = new THREE.Shape();
  const pts = [
    [-30, -4.5], [-15, -5], [0, -6], [15, -5], [30, -4.5],
    [30, -1.5], [15, -2], [0, -3], [-15, -2], [-30, -1.5]
  ];
  s.moveTo(pts[0][0] * scale, pts[0][1] * scale);
  for (let i = 1; i < pts.length; i++) s.lineTo(pts[i][0] * scale, pts[i][1] * scale);
  s.closePath();
  return s;
}

export function createWorld(scene) {
  // 共享材质
  const mats = {
    window: makeEmissiveMat(0xffcc66),
    carWin: makeEmissiveMat(0xffcc66),
    lamp: makeEmissiveMat(0xffdd88),
    station: makeEmissiveMat(0xffeeaa),
    headlight: makeEmissiveMat(0xffffcc),
    clock: makeEmissiveMat(0xffffcc)
  };

  // 桌面
  const table = new THREE.Mesh(
    new THREE.PlaneGeometry(300, 300),
    new THREE.MeshStandardMaterial({ color: 0x2a2a30, roughness: 0.95 })
  );
  table.rotation.x = -Math.PI / 2;
  table.position.y = -3.01;
  table.receiveShadow = true;
  scene.add(table);

  // 木质底座
  const base = new THREE.Mesh(
    new THREE.BoxGeometry(68, 3, 68),
    new THREE.MeshStandardMaterial({ color: 0x7a4a26, roughness: 0.65 })
  );
  base.position.y = -1.5;
  base.receiveShadow = true;
  base.castShadow = true;
  scene.add(base);

  // 底座顶部装饰边框（四根木条）
  const trimMat = new THREE.MeshStandardMaterial({ color: 0x9a6a3a, roughness: 0.6 });
  const trimGeoH = new THREE.BoxGeometry(61, 0.35, 0.9);
  const trimGeoV = new THREE.BoxGeometry(0.9, 0.35, 61);
  for (const [geo, x, z] of [
    [trimGeoH, 0, -30], [trimGeoH, 0, 30],
    [trimGeoV, -30, 0], [trimGeoV, 30, 0]
  ]) {
    const trim = new THREE.Mesh(geo, trimMat);
    trim.position.set(x, 1.35, z);
    trim.castShadow = true;
    scene.add(trim);
  }

  // 沙盘地面（带河道孔洞）
  const groundShape = new THREE.Shape();
  groundShape.moveTo(-30, -30);
  groundShape.lineTo(30, -30);
  groundShape.lineTo(30, 30);
  groundShape.lineTo(-30, 30);
  groundShape.closePath();
  const river = riverShape(1);
  groundShape.holes.push(river);

  const groundGeo = new THREE.ExtrudeGeometry(groundShape, {
    depth: GROUND_Y, bevelEnabled: false
  });
  groundGeo.rotateX(Math.PI / 2); // 顶面朝上，挤出向下
  const ground = new THREE.Mesh(
    groundGeo,
    new THREE.MeshStandardMaterial({ color: 0x5d8a48, roughness: 1.0 })
  );
  ground.position.y = GROUND_Y;
  ground.receiveShadow = true;
  scene.add(ground);

  // 河床
  const bedGeo = new THREE.ShapeGeometry(riverShape(1));
  bedGeo.rotateX(Math.PI / 2);
  const bed = new THREE.Mesh(
    bedGeo,
    new THREE.MeshStandardMaterial({ color: 0x1c3a52, roughness: 1 })
  );
  bed.position.y = 0.35;
  scene.add(bed);

  // 水面
  const waterGeo = new THREE.ShapeGeometry(riverShape(1));
  waterGeo.rotateX(Math.PI / 2);
  const water = new THREE.Mesh(
    waterGeo,
    new THREE.MeshStandardMaterial({
      color: 0x3a7bd5, roughness: 0.25, metalness: 0.1,
      transparent: true, opacity: 0.82
    })
  );
  water.position.y = 0.75;
  water.receiveShadow = true;
  scene.add(water);

  // 灯光
  const sun = new THREE.DirectionalLight(0xffb27a, 2.2);
  sun.position.set(28, 26, 14);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.camera.left = -38;
  sun.shadow.camera.right = 38;
  sun.shadow.camera.top = 38;
  sun.shadow.camera.bottom = -38;
  sun.shadow.camera.near = 1;
  sun.shadow.camera.far = 120;
  sun.shadow.bias = -0.0008;
  scene.add(sun);

  const hemi = new THREE.HemisphereLight(0x88aacc, 0x554433, 0.55);
  scene.add(hemi);

  scene.fog = new THREE.Fog(0x2e2838, 70, 180);

  // 时段切换
  function setTimeOfDay(mode) {
    if (mode === 'day') {
      sun.color.set(0xfff4e0);
      sun.intensity = 2.8;
      sun.position.set(20, 48, 26);
      hemi.intensity = 0.95;
      scene.background = new THREE.Color(0x9fc5e8);
      scene.fog.color.set(0x9fc5e8);
      mats.window.emissiveIntensity = 0;
      mats.carWin.emissiveIntensity = 0;
      mats.lamp.emissiveIntensity = 0;
      mats.station.emissiveIntensity = 0;
      mats.headlight.emissiveIntensity = 0;
      mats.clock.emissiveIntensity = 0;
    } else if (mode === 'dusk') {
      sun.color.set(0xffb27a);
      sun.intensity = 2.2;
      sun.position.set(28, 26, 14);
      hemi.intensity = 0.55;
      scene.background = new THREE.Color(0x2e2838);
      scene.fog.color.set(0x2e2838);
      mats.window.emissiveIntensity = 0.35;
      mats.carWin.emissiveIntensity = 0.5;
      mats.lamp.emissiveIntensity = 0.85;
      mats.station.emissiveIntensity = 1.0;
      mats.headlight.emissiveIntensity = 1.0;
      mats.clock.emissiveIntensity = 1.0;
    } else {
      sun.color.set(0x8899cc);
      sun.intensity = 0.55;
      sun.position.set(-22, 38, -12);
      hemi.intensity = 0.35;
      scene.background = new THREE.Color(0x0a0e1a);
      scene.fog.color.set(0x0a0e1a);
      mats.window.emissiveIntensity = 0.95;
      mats.carWin.emissiveIntensity = 1.0;
      mats.lamp.emissiveIntensity = 1.0;
      mats.station.emissiveIntensity = 1.0;
      mats.headlight.emissiveIntensity = 1.0;
      mats.clock.emissiveIntensity = 1.0;
    }
  }

  setTimeOfDay('dusk');

  return { mats, setTimeOfDay, sun, hemi, water };
}
