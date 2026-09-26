import * as THREE from 'three';
import { GROUND_Y } from './world.js';

// ---------- 工具 ----------

function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// 三棱柱屋顶：ridgeLen=屋脊长，baseW=底边宽，axis='x'|'z'
function gableRoofGeo(ridgeLen, baseW, h, axis = 'x') {
  const shape = new THREE.Shape();
  shape.moveTo(-baseW / 2, 0);
  shape.lineTo(baseW / 2, 0);
  shape.lineTo(0, h);
  shape.closePath();
  const geo = new THREE.ExtrudeGeometry(shape, { depth: ridgeLen, bevelEnabled: false });
  geo.translate(0, 0, -ridgeLen / 2);
  if (axis === 'x') geo.rotateY(Math.PI / 2);
  return geo;
}

const doorMat = new THREE.MeshStandardMaterial({ color: 0x4a3828, roughness: 0.85 });

// ---------- 通用建筑 ----------

function makeBuilding({ w, d, h, wall = 0xd8c8a8, roof = 0xa05038, roofH = 1.2, roofType = 'gableX', winMat, sign }) {
  const g = new THREE.Group();
  const bodyMat = new THREE.MeshStandardMaterial({ color: wall, roughness: 0.85 });
  const roofMat = new THREE.MeshStandardMaterial({ color: roof, roughness: 0.75 });

  const body = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), bodyMat);
  body.position.y = h / 2;
  body.castShadow = true;
  body.receiveShadow = true;
  g.add(body);

  let roofMesh;
  if (roofType === 'gableX') {
    roofMesh = new THREE.Mesh(gableRoofGeo(w, d, roofH, 'x'), roofMat);
  } else if (roofType === 'gableZ') {
    roofMesh = new THREE.Mesh(gableRoofGeo(d, w, roofH, 'z'), roofMat);
  } else if (roofType === 'pyramid') {
    roofMesh = new THREE.Mesh(new THREE.ConeGeometry(Math.hypot(w, d) / 2, roofH, 4), roofMat);
    roofMesh.rotation.y = Math.PI / 4;
  } else {
    roofMesh = new THREE.Mesh(new THREE.BoxGeometry(w + 0.3, 0.15, d + 0.3), roofMat);
  }
  roofMesh.position.y = h;
  roofMesh.castShadow = true;
  g.add(roofMesh);

  // 门（正面 +z）
  const door = new THREE.Mesh(new THREE.BoxGeometry(0.7, 1.3, 0.1), doorMat);
  door.position.set(0, 0.65, d / 2 + 0.03);
  g.add(door);

  // 窗户（正面 + 背面 + 两侧，两层）
  const floors = Math.max(1, Math.round(h / 1.8));
  const winGeoH = new THREE.BoxGeometry(0.35, 0.45, 0.06);
  const winGeoS = new THREE.BoxGeometry(0.06, 0.45, 0.35);
  for (let f = 0; f < floors; f++) {
    const wy = h * (0.3 + 0.45 * (f / Math.max(1, floors - 1)));
    const nF = Math.max(1, Math.floor(w / 1.5));
    for (let i = 0; i < nF; i++) {
      const wx = -w / 2 + ((i + 0.5) * w) / nF;
      const wf = new THREE.Mesh(winGeoH, winMat);
      wf.position.set(wx, wy, d / 2 + 0.03);
      g.add(wf);
      const wb = new THREE.Mesh(winGeoH, winMat);
      wb.position.set(wx, wy, -d / 2 - 0.03);
      g.add(wb);
    }
    const nS = Math.max(1, Math.floor(d / 1.5));
    for (let i = 0; i < nS; i++) {
      const wz = -d / 2 + ((i + 0.5) * d) / nS;
      const wl = new THREE.Mesh(winGeoS, winMat);
      wl.position.set(w / 2 + 0.03, wy, wz);
      g.add(wl);
      const wr = new THREE.Mesh(winGeoS, winMat);
      wr.position.set(-w / 2 - 0.03, wy, wz);
      g.add(wr);
    }
  }

  // 招牌
  if (sign !== undefined) {
    const signMesh = new THREE.Mesh(
      new THREE.BoxGeometry(w * 0.7, 0.45, 0.1),
      new THREE.MeshStandardMaterial({ color: sign, roughness: 0.7 })
    );
    signMesh.position.set(0, h - 0.45, d / 2 + 0.06);
    g.add(signMesh);
  }

  return g;
}

// ---------- 特殊建筑 ----------

function makeStation(mats) {
  const g = new THREE.Group();
  const wallMat = new THREE.MeshStandardMaterial({ color: 0xc8a878, roughness: 0.8 });
  const roofMat = new THREE.MeshStandardMaterial({ color: 0x8a4a3a, roughness: 0.7 });

  const body = new THREE.Mesh(new THREE.BoxGeometry(14, 4, 6), wallMat);
  body.position.y = 2;
  body.castShadow = true;
  body.receiveShadow = true;
  g.add(body);

  const roof = new THREE.Mesh(gableRoofGeo(14, 6, 1.6, 'x'), roofMat);
  roof.position.y = 4;
  roof.castShadow = true;
  g.add(roof);

  // 门（朝北 -z，面向站台）
  const door = new THREE.Mesh(new THREE.BoxGeometry(1.8, 2.4, 0.12), doorMat);
  door.position.set(0, 1.2, -3.04);
  g.add(door);

  // 窗户
  const winGeo = new THREE.BoxGeometry(0.6, 0.7, 0.08);
  for (let i = 0; i < 5; i++) {
    const wx = -5.6 + i * 2.8;
    const wf = new THREE.Mesh(winGeo, mats.window);
    wf.position.set(wx, 2.4, -3.04);
    g.add(wf);
  }

  // 雨棚（站台上）
  const canopy = new THREE.Mesh(new THREE.BoxGeometry(16, 0.18, 3), roofMat);
  canopy.position.set(0, 3.2, -4.5);
  canopy.castShadow = true;
  g.add(canopy);
  const postGeo = new THREE.CylinderGeometry(0.08, 0.08, 3.2, 6);
  for (const [px, pz] of [[-7.4, -5.6], [-7.4, -3.4], [7.4, -5.6], [7.4, -3.4]]) {
    const post = new THREE.Mesh(postGeo, doorMat);
    post.position.set(px, 1.6, pz);
    g.add(post);
  }

  // 站台
  const platform = new THREE.Mesh(
    new THREE.BoxGeometry(16, 0.5, 3),
    new THREE.MeshStandardMaterial({ color: 0x9a948a, roughness: 0.95 })
  );
  platform.position.set(0, 1.45, -5);
  platform.receiveShadow = true;
  g.add(platform);
  // 安全线
  const line = new THREE.Mesh(
    new THREE.BoxGeometry(16, 0.02, 0.3),
    new THREE.MeshStandardMaterial({ color: 0xd8c84a, roughness: 0.8 })
  );
  line.position.set(0, 1.71, -4.1);
  g.add(line);

  // 站牌
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 2.6, 6), doorMat);
  pole.position.set(6, 1.3, -5);
  g.add(pole);
  const board = new THREE.Mesh(
    new THREE.BoxGeometry(1.4, 0.7, 0.08),
    new THREE.MeshStandardMaterial({ color: 0x2a5a8a, roughness: 0.6 })
  );
  board.position.set(6, 2.7, -5);
  g.add(board);

  return g;
}

function makeClockTower(mats) {
  const g = new THREE.Group();
  const stoneMat = new THREE.MeshStandardMaterial({ color: 0xb0a890, roughness: 0.85 });
  const roofMat = new THREE.MeshStandardMaterial({ color: 0x6a4a8a, roughness: 0.7 });

  const tower = new THREE.Mesh(new THREE.BoxGeometry(2.4, 8, 2.4), stoneMat);
  tower.position.y = 4;
  tower.castShadow = true;
  tower.receiveShadow = true;
  g.add(tower);

  const spire = new THREE.Mesh(new THREE.ConeGeometry(1.9, 2.6, 4), roofMat);
  spire.position.y = 9.3;
  spire.rotation.y = Math.PI / 4;
  spire.castShadow = true;
  g.add(spire);

  const clockGeo = new THREE.CircleGeometry(0.55, 16);
  for (let i = 0; i < 4; i++) {
    const a = (i * Math.PI) / 2;
    const face = new THREE.Mesh(clockGeo, mats.clock);
    face.position.set(Math.sin(a) * 1.22, 6.5, Math.cos(a) * 1.22);
    face.lookAt(face.position.x * 2, 6.5, face.position.z * 2);
    g.add(face);
  }
  return g;
}

function makeChurch() {
  const g = new THREE.Group();
  const wallMat = new THREE.MeshStandardMaterial({ color: 0xe0d8c8, roughness: 0.85 });
  const roofMat = new THREE.MeshStandardMaterial({ color: 0x5a4a3a, roughness: 0.75 });

  const body = new THREE.Mesh(new THREE.BoxGeometry(5, 4, 8), wallMat);
  body.position.y = 2;
  body.castShadow = true;
  body.receiveShadow = true;
  g.add(body);

  const roof = new THREE.Mesh(gableRoofGeo(5, 8, 2.2, 'z'), roofMat);
  roof.position.y = 4;
  roof.castShadow = true;
  g.add(roof);

  const tower = new THREE.Mesh(new THREE.BoxGeometry(2, 6, 2), wallMat);
  tower.position.set(0, 3, 3.2);
  tower.castShadow = true;
  g.add(tower);

  const spire = new THREE.Mesh(new THREE.ConeGeometry(1.5, 3.2, 4), roofMat);
  spire.position.set(0, 7.6, 3.2);
  spire.rotation.y = Math.PI / 4;
  spire.castShadow = true;
  g.add(spire);

  const door = new THREE.Mesh(new THREE.BoxGeometry(1.1, 2, 0.1), doorMat);
  door.position.set(0, 1, 4.04);
  g.add(door);
  return g;
}

function makeWaterTower() {
  const g = new THREE.Group();
  const legMat = new THREE.MeshStandardMaterial({ color: 0x6b4a2f, roughness: 0.85 });
  for (const [lx, lz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
    const leg = new THREE.Mesh(new THREE.BoxGeometry(0.25, 4, 0.25), legMat);
    leg.position.set(lx, 2, lz);
    leg.castShadow = true;
    g.add(leg);
  }
  const deck = new THREE.Mesh(new THREE.BoxGeometry(2.8, 0.2, 2.8), legMat);
  deck.position.y = 4;
  g.add(deck);
  const tank = new THREE.Mesh(
    new THREE.CylinderGeometry(1.3, 1.3, 2.2, 12),
    new THREE.MeshStandardMaterial({ color: 0xa05038, roughness: 0.7 })
  );
  tank.position.y = 5.2;
  tank.castShadow = true;
  g.add(tank);
  const cap = new THREE.Mesh(
    new THREE.ConeGeometry(1.4, 1, 12),
    new THREE.MeshStandardMaterial({ color: 0x7a3a2a, roughness: 0.7 })
  );
  cap.position.y = 6.8;
  g.add(cap);
  return g;
}

function makeWindmill() {
  const g = new THREE.Group();
  const towerMat = new THREE.MeshStandardMaterial({ color: 0xd8c8a8, roughness: 0.85 });
  const tower = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 1.4, 5.5, 8), towerMat);
  tower.position.y = 2.75;
  tower.castShadow = true;
  g.add(tower);

  const house = new THREE.Mesh(new THREE.BoxGeometry(1.6, 1.2, 1.6), towerMat);
  house.position.set(0, 5.6, 0.3);
  house.castShadow = true;
  g.add(house);

  const roof = new THREE.Mesh(
    new THREE.ConeGeometry(1.2, 0.9, 4),
    new THREE.MeshStandardMaterial({ color: 0x8a4a3a, roughness: 0.75 })
  );
  roof.position.set(0, 6.65, 0.3);
  roof.rotation.y = Math.PI / 4;
  g.add(roof);

  const blades = new THREE.Group();
  const bladeMat = new THREE.MeshStandardMaterial({ color: 0xe8e0d0, roughness: 0.8 });
  for (let i = 0; i < 4; i++) {
    const blade = new THREE.Mesh(new THREE.BoxGeometry(0.28, 2.6, 0.08), bladeMat);
    blade.position.y = 1.3;
    blade.castShadow = true;
    const holder = new THREE.Group();
    holder.rotation.z = (i * Math.PI) / 2;
    holder.add(blade);
    blades.add(holder);
  }
  blades.position.set(0, 5.6, 1.2);
  g.add(blades);
  g.userData.blades = blades;
  return g;
}

// ---------- 树木 ----------

const trunkMat = new THREE.MeshStandardMaterial({ color: 0x5a4028, roughness: 0.9 });
const pineMat = new THREE.MeshStandardMaterial({ color: 0x2a5a2a, roughness: 0.9 });
const leafMat = new THREE.MeshStandardMaterial({ color: 0x4a7a3a, roughness: 0.9 });

function makeTree(rand) {
  const g = new THREE.Group();
  const trunkH = 0.5 + rand() * 0.4;
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.14, trunkH, 6), trunkMat);
  trunk.position.y = trunkH / 2;
  trunk.castShadow = true;
  g.add(trunk);
  if (rand() < 0.5) {
    const h = 1.6 + rand() * 1.2;
    const cone = new THREE.Mesh(
      new THREE.ConeGeometry(0.55 + rand() * 0.25, h, 7),
      pineMat
    );
    cone.position.y = trunkH + h / 2;
    cone.castShadow = true;
    g.add(cone);
  } else {
    const r = 0.6 + rand() * 0.35;
    const blob = new THREE.Mesh(new THREE.SphereGeometry(r, 8, 6), leafMat);
    blob.position.y = trunkH + r * 0.8;
    blob.castShadow = true;
    g.add(blob);
  }
  return g;
}

// ---------- 路灯 ----------

function makeLamp(mats) {
  const g = new THREE.Group();
  const poleMat = new THREE.MeshStandardMaterial({ color: 0x3a3a3a, roughness: 0.7 });
  const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.09, 3, 6), poleMat);
  pole.position.y = 1.5;
  pole.castShadow = true;
  g.add(pole);
  const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.16, 8, 8), mats.lamp);
  bulb.position.y = 3.1;
  g.add(bulb);
  const cap = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.25, 6), poleMat);
  cap.position.y = 3.32;
  g.add(cap);
  return g;
}

// ---------- 主构建 ----------

export function buildTown(scene, curve, mats) {
  const town = new THREE.Group();

  // 建筑布局
  const houses = [
    { x: -9, z: 10, w: 4, d: 4, h: 5, wall: 0xd8c8a8, roof: 0xa05038, roofH: 1.4, roofType: 'gableX', rot: 0 },
    { x: 9, z: 10, w: 4, d: 4, h: 4, wall: 0xc8b898, roof: 0x8a4a3a, roofH: 1.2, roofType: 'gableX', rot: 0 },
    { x: -17, z: 10, w: 5, d: 4, h: 4.5, wall: 0xd0c0a0, roof: 0x985038, roofH: 1.3, roofType: 'gableZ', rot: 0 },
    { x: 17, z: 10, w: 5, d: 4, h: 4.5, wall: 0xc8b090, roof: 0x8a4a3a, roofH: 1.3, roofType: 'gableZ', rot: 0 },
    { x: -13, z: 24, w: 4, d: 4, h: 4, wall: 0xd8c8a8, roof: 0xa05038, roofH: 1.2, roofType: 'gableX', rot: Math.PI },
    { x: 13, z: 24, w: 4, d: 4, h: 4, wall: 0xc8b898, roof: 0x8a4a3a, roofH: 1.2, roofType: 'gableX', rot: Math.PI },
    { x: 5, z: 17, w: 4, d: 3, h: 3, wall: 0xd0b890, roof: 0x7a6a5a, roofH: 0.4, roofType: 'flat', rot: Math.PI, sign: 0xa04030 },
    { x: -5, z: 17, w: 4, d: 3, h: 3, wall: 0xc8a878, roof: 0x7a6a5a, roofH: 0.4, roofType: 'flat', rot: Math.PI, sign: 0x3a6a8a },
    { x: -12, z: -13, w: 4, d: 3, h: 3.5, wall: 0xc0b090, roof: 0x7a5a3a, roofH: 1, roofType: 'gableX', rot: Math.PI },
    { x: 14, z: -13, w: 4, d: 3, h: 3.5, wall: 0xd0c0a0, roof: 0x8a4a3a, roofH: 1, roofType: 'gableX', rot: Math.PI }
  ];
  for (const h of houses) {
    const b = makeBuilding({ ...h, winMat: mats.window });
    b.position.set(h.x, GROUND_Y, h.z);
    b.rotation.y = h.rot;
    town.add(b);
  }

  // 码头仓库
  const warehouse = makeBuilding({
    w: 6, d: 3, h: 3, wall: 0xa89068, roof: 0x6a5a4a, roofH: 1, roofType: 'gableX', winMat: mats.window
  });
  warehouse.position.set(0, GROUND_Y, -11.5);
  town.add(warehouse);

  // 特殊建筑
  const station = makeStation(mats);
  station.position.set(0, GROUND_Y, 26.5);
  town.add(station);

  const clockTower = makeClockTower(mats);
  clockTower.position.set(0, GROUND_Y, 9);
  town.add(clockTower);

  const church = makeChurch();
  church.position.set(-15, GROUND_Y, 6);
  town.add(church);

  const waterTower = makeWaterTower();
  waterTower.position.set(-22, GROUND_Y, 10);
  town.add(waterTower);

  const windmill = makeWindmill();
  windmill.position.set(24, GROUND_Y, -17);
  town.add(windmill);

  // 道路
  const roadMat = new THREE.MeshStandardMaterial({ color: 0x9a948a, roughness: 0.95 });
  const roads = [
    [3, 11, 0, 24.5],      // 主路
    [38, 2.4, 0, 14],      // 横向路
    [2, 6, -15, 10],       // 教堂前路
    [36, 2, 0, -1.5],      // 河沿路
    [2, 5, 10, -4],        // 步行桥路
    [12, 1.6, 17, -13]     // 风车小路
  ];
  const roadRects = [];
  for (const [w, l, x, z] of roads) {
    const road = new THREE.Mesh(new THREE.PlaneGeometry(w, l), roadMat);
    road.rotation.x = -Math.PI / 2;
    road.position.set(x, GROUND_Y + 0.01, z);
    road.receiveShadow = true;
    town.add(road);
    roadRects.push({ x, z, hw: w / 2 + 0.5, hl: l / 2 + 0.5 });
  }

  // 步行桥
  {
    const deckMat = new THREE.MeshStandardMaterial({ color: 0xa08458, roughness: 0.85 });
    const deck = new THREE.Mesh(new THREE.BoxGeometry(2, 0.25, 9), deckMat);
    deck.position.set(10, 1.15, -6);
    deck.castShadow = true;
    deck.receiveShadow = true;
    town.add(deck);
    const pierMat = new THREE.MeshStandardMaterial({ color: 0x7a7a7a, roughness: 0.9 });
    for (const pz of [-8, -4]) {
      const pier = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.8, 1.2), pierMat);
      pier.position.set(10, 0.75, pz);
      pier.castShadow = true;
      town.add(pier);
    }
    const barMat = new THREE.MeshStandardMaterial({ color: 0x5a4a3a, roughness: 0.8 });
    for (const bx of [9.2, 10.8]) {
      const bar = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.5, 9), barMat);
      bar.position.set(bx, 1.45, -6);
      town.add(bar);
    }
  }

  // 路灯
  const lampSpots = [
    [2, 21], [-2, 21], [2, 27], [-2, 27],
    [6, 15.5], [-6, 15.5], [14, 15.5], [-14, 15.5],
    [-8, -2.5], [8, -2.5]
  ];
  for (const [x, z] of lampSpots) {
    const lamp = makeLamp(mats);
    lamp.position.set(x, GROUND_Y, z);
    town.add(lamp);
  }

  // 树木（固定种子随机，避开建筑/轨道/河/路）
  const rand = mulberry32(42);
  const trackPts = [];
  const tp = new THREE.Vector3();
  for (let i = 0; i < 400; i++) {
    curve.getPointAt(i / 400, tp);
    trackPts.push(tp.x, tp.z);
  }
  const buildingSpots = [
    { x: -9, z: 10, r: 3.2 }, { x: 9, z: 10, r: 3.2 },
    { x: -17, z: 10, r: 3.4 }, { x: 17, z: 10, r: 3.4 },
    { x: -13, z: 24, r: 3.2 }, { x: 13, z: 24, r: 3.2 },
    { x: 5, z: 17, r: 2.6 }, { x: -5, z: 17, r: 2.6 },
    { x: 0, z: 9, r: 2.2 }, { x: -15, z: 6, r: 3.6 },
    { x: -22, z: 10, r: 2.6 }, { x: 0, z: 26.5, r: 5.5 },
    { x: 24, z: -17, r: 3 }, { x: 0, z: -11.5, r: 3.2 },
    { x: -12, z: -13, r: 2.8 }, { x: 14, z: -13, r: 2.8 }
  ];
  let placed = 0;
  for (let attempt = 0; attempt < 400 && placed < 45; attempt++) {
    const x = (rand() * 2 - 1) * 27;
    const z = (rand() * 2 - 1) * 27;
    if (z > -10 && z < -2) continue; // 河
    let ok = true;
    for (let i = 0; i < trackPts.length; i += 2) {
      const dx = x - trackPts[i], dz = z - trackPts[i + 1];
      if (dx * dx + dz * dz < 9) { ok = false; break; }
    }
    if (!ok) continue;
    for (const b of buildingSpots) {
      const dx = x - b.x, dz = z - b.z;
      if (dx * dx + dz * dz < b.r * b.r) { ok = false; break; }
    }
    if (!ok) continue;
    for (const r of roadRects) {
      if (Math.abs(x - r.x) < r.hw && Math.abs(z - r.z) < r.hl) { ok = false; break; }
    }
    if (!ok) continue;
    const tree = makeTree(rand);
    tree.position.set(x, GROUND_Y, z);
    tree.rotation.y = rand() * Math.PI * 2;
    town.add(tree);
    placed++;
  }

  scene.add(town);

  return {
    update(dt) {
      windmill.userData.blades.rotation.z += dt * 2.2;
    }
  };
}
