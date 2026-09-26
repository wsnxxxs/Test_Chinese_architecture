/**
 * 小镇主体：建筑工厂（车站/民居/商铺/旅馆/教堂/谷仓/水塔）、
 * 道路与路肩、路灯、车辆、长椅、摊位。
 * 所有建筑在局部坐标下生成后按材质合并，再整体摆位，draw call 可控。
 */
import * as THREE from 'three';
import { BUILDINGS, ROADS, PROPS, PLATFORM } from '../layout.js';
import { flatRibbonGeometry, buildMergedMesh, xform, box, roundedBox } from '../lib/mesh.js';
import { registerSprite } from '../glow.js';

/* ---------------- 通用几何 ---------------- */

/** 双坡屋面（脊线沿 x），底面 y=0，中心在原点 */
function gableRoofGeo(w, d, h) {
  const shape = new THREE.Shape();
  shape.moveTo(-d / 2, 0);
  shape.lineTo(d / 2, 0);
  shape.lineTo(0, h);
  shape.closePath();
  const geo = new THREE.ExtrudeGeometry(shape, { depth: w, bevelEnabled: false });
  geo.rotateY(Math.PI / 2);
  geo.translate(-w / 2, 0, 0);
  return geo;
}

/** 窗：dir 为墙面法线方向（世界轴对齐） */
function addWindow(parts, mats, pos, dir, w = 0.5, h = 0.62) {
  const [dx, dz] = dir;
  const onX = Math.abs(dx) > 0.5;
  const frameGeo = onX ? box(0.07, h + 0.16, w + 0.16) : box(w + 0.16, h + 0.16, 0.07);
  const glassGeo = onX ? box(0.1, h, w) : box(w, h, 0.1);
  parts.push({ geo: xform(frameGeo, { pos: [pos[0] + dx * 0.01, pos[1], pos[2] + dz * 0.01] }), mat: mats.m.trim });
  parts.push({ geo: xform(glassGeo, { pos: [pos[0] + dx * 0.04, pos[1], pos[2] + dz * 0.04] }), mat: mats.m.glass });
  // 窗台
  const sillGeo = onX ? box(0.12, 0.06, w + 0.2) : box(w + 0.2, 0.06, 0.12);
  parts.push({
    geo: xform(sillGeo, { pos: [pos[0] + dx * 0.05, pos[1] - h / 2 - 0.06, pos[2] + dz * 0.05] }),
    mat: mats.m.trim,
  });
}

function addDoor(parts, mats, pos, dir, w = 0.7, h = 1.35) {
  const [dx, dz] = dir;
  const onX = Math.abs(dx) > 0.5;
  const frameGeo = onX ? box(0.08, h + 0.14, w + 0.16) : box(w + 0.16, h + 0.14, 0.08);
  const panelGeo = onX ? box(0.1, h, w) : box(w, h, 0.1);
  parts.push({ geo: xform(frameGeo, { pos: [pos[0] + dx * 0.01, pos[1] + 0.01, pos[2] + dz * 0.01] }), mat: mats.m.trim });
  parts.push({ geo: xform(panelGeo, { pos: [pos[0] + dx * 0.04, pos[1] + 0.01, pos[2] + dz * 0.04] }), mat: mats.m.door });
  // 门槛台阶
  const stepGeo = onX ? box(0.5, 0.08, w + 0.3) : box(w + 0.3, 0.08, 0.5);
  parts.push({ geo: xform(stepGeo, { pos: [pos[0] + dx * 0.24, 0.04, pos[2] + dz * 0.24] }), mat: mats.m.stone });
}

function addChimney(parts, mats, x, z, roofBaseY, h = 0.7) {
  parts.push({ geo: xform(box(0.3, h, 0.3), { pos: [x, roofBaseY + h / 2 - 0.1, z] }), mat: mats.m.dirt });
  parts.push({ geo: xform(box(0.4, 0.1, 0.4), { pos: [x, roofBaseY + h - 0.06, z] }), mat: mats.m.stone });
}

/** 屋檐下的木质封檐板 */
function addFascia(parts, mats, w, d, y) {
  parts.push({ geo: xform(box(w + 0.04, 0.1, d + 0.06), { pos: [0, y, 0] }), mat: mats.m.door });
}

/* ---------------- 建筑工厂 ---------------- */

function makeHouse(b, mats, rng) {
  const parts = [];
  const wallMat = mats.wallMaterial(b.wall, 0.05);
  const roofMat = mats.roofMaterial(b.roof);
  const h = 1.75 + rng() * 0.35;
  const hw = b.w / 2;
  const hd = b.d / 2;

  parts.push({ geo: roundedBox(b.w, h, b.d, 0.05, 1), pos: [0, h / 2, 0], mat: wallMat });
  parts.push({ geo: gableRoofGeo(b.w + 0.55, b.d + 0.6, 0.85 + rng() * 0.25), pos: [0, h, 0], mat: roofMat });
  addFascia(parts, mats, b.w, b.d, h - 0.02);

  const face = b.face || 'south';
  const dirs = { south: [0, 1], north: [0, -1], east: [1, 0], west: [-1, 0] };
  const front = dirs[face];
  const back = dirs[{ south: 'north', north: 'south', east: 'west', west: 'east' }[face]];
  const sideL = dirs[{ south: 'west', north: 'east', east: 'north', west: 'south' }[face]];
  const sideR = dirs[{ south: 'east', north: 'west', east: 'south', west: 'north' }[face]];

  const winY = h * 0.62;
  const frontPos = (u) => [front[0] * (Math.abs(front[0]) > 0.5 ? hw : hd) + (front[0] === 0 ? u : 0), winY, front[1] * (Math.abs(front[1]) > 0.5 ? hd : hw) + (front[1] === 0 ? u : 0)];
  const fp0 = frontPos(0);
  // 正门 + 两侧窗
  addDoor(parts, mats, [fp0[0], 0.68, fp0[2]], front, 0.68, 1.3);
  const off = Math.min(b.w, b.d) * 0.28;
  addWindow(parts, mats, frontPos(-off), front, 0.5, 0.6);
  addWindow(parts, mats, frontPos(off), front, 0.5, 0.6);
  // 背面
  const backPos = (u) => [back[0] * (Math.abs(back[0]) > 0.5 ? hw : hd) + (back[0] === 0 ? u : 0), winY, back[1] * (Math.abs(back[1]) > 0.5 ? hd : hw) + (back[1] === 0 ? u : 0)];
  addWindow(parts, mats, backPos(-off * 0.6), back, 0.5, 0.6);
  addWindow(parts, mats, backPos(off * 0.6), back, 0.5, 0.6);
  // 侧墙
  const sidePos = (dir, u) => [
    dir[0] * (Math.abs(dir[0]) > 0.5 ? hw : hd) + (dir[0] === 0 ? u : 0),
    winY,
    dir[1] * (Math.abs(dir[1]) > 0.5 ? hd : hw) + (dir[1] === 0 ? u : 0),
  ];
  addWindow(parts, mats, sidePos(sideL, 0), sideL, 0.46, 0.58);
  addWindow(parts, mats, sidePos(sideR, 0), sideR, 0.46, 0.58);

  addChimney(parts, mats, -b.w * 0.3, 0, h + 0.5, 0.72);
  return parts;
}

function makeShop(b, mats, rng) {
  const parts = [];
  const wallMat = mats.wallMaterial(b.wall, 0.05);
  const roofMat = mats.roofMaterial(b.roof);
  const h = 2.05;
  const hw = b.w / 2;
  const hd = b.d / 2;

  parts.push({ geo: roundedBox(b.w, h, b.d, 0.05, 1), pos: [0, h / 2, 0], mat: wallMat });
  parts.push({ geo: gableRoofGeo(b.w + 0.5, b.d + 0.55, 0.8), pos: [0, h, 0], mat: roofMat });
  addFascia(parts, mats, b.w, b.d, h - 0.02);

  const face = b.face || 'south';
  const dirs = { south: [0, 1], north: [0, -1], east: [1, 0], west: [-1, 0] };
  const front = dirs[face];
  const nz = front[1];
  const nx = front[0];
  const wallDist = Math.abs(nx) > 0.5 ? hw : hd;
  const along = Math.abs(nx) > 0.5 ? b.d : b.w;
  const at = (u, y) => [nx * wallDist + (nx === 0 ? u : 0), y, nz * wallDist + (nz === 0 ? u : 0)];

  // 大橱窗 + 门
  addWindow(parts, mats, at(-along * 0.24, 1.05), front, 1.1, 0.85);
  addDoor(parts, mats, at(along * 0.06, 0.68), front, 0.7, 1.32);
  addWindow(parts, mats, at(along * 0.3, 1.05), front, 0.7, 0.85);

  // 遮阳棚（斜面）
  const awningW = Math.abs(nx) > 0.5 ? b.d + 0.2 : b.w + 0.2;
  const awningGeo = Math.abs(nx) > 0.5 ? box(0.9, 0.06, awningW) : box(awningW, 0.06, 0.9);
  const tilt = Math.abs(nx) > 0.5 ? [0, 0, -0.32 * Math.sign(nx || 1)] : [0.32 * Math.sign(nz || 1), 0, 0];
  parts.push({
    geo: xform(awningGeo, {
      pos: [nx * (wallDist + 0.4) + (nx === 0 ? 0 : 0), 1.62, nz * (wallDist + 0.4) + (nz === 0 ? 0 : 0)],
      rot: tilt,
    }),
    mat: mats.m[b.awning || 'redPaint'],
  });

  // 招牌
  const signW = Math.abs(nx) > 0.5 ? 0.1 : 1.9;
  const signGeo = Math.abs(nx) > 0.5 ? box(0.1, 0.42, 1.9) : box(1.9, 0.42, 0.1);
  parts.push({
    geo: xform(signGeo, { pos: [nx * (wallDist + 0.06), 1.86, nz * (wallDist + 0.06)] }),
    mat: mats.m.lampPole,
  });
  void signW;

  addChimney(parts, mats, b.w * 0.28, 0, h + 0.45, 0.62);
  return parts;
}

function makeInn(b, mats) {
  const parts = [];
  const wallMat = mats.wallMaterial(b.wall, 0.04);
  const roofMat = mats.roofMaterial(b.roof);
  const h = 3.1;
  const hw = b.w / 2;
  const hd = b.d / 2;

  parts.push({ geo: roundedBox(b.w, h, b.d, 0.06, 1), pos: [0, h / 2, 0], mat: wallMat });
  parts.push({ geo: gableRoofGeo(b.w + 0.6, b.d + 0.6, 1.0), pos: [0, h, 0], mat: roofMat });
  addFascia(parts, mats, b.w, b.d, h - 0.02);
  // 楼层分隔线
  for (const fy of [1.15, 2.15]) {
    parts.push({ geo: xform(box(b.w + 0.08, 0.08, b.d + 0.08), { pos: [0, fy, 0] }), mat: mats.m.door });
  }

  // 正面（南）：门 + 两层窗
  for (const y of [0.72, 1.7, 2.62]) {
    if (y < 1) {
      addDoor(parts, mats, [0, 0.68, hd], [0, 1], 0.78, 1.35);
      addWindow(parts, mats, [-hw * 0.6, 0.8, hd], [0, 1], 0.6, 0.7);
      addWindow(parts, mats, [hw * 0.6, 0.8, hd], [0, 1], 0.6, 0.7);
    } else {
      for (const x of [-hw * 0.6, 0, hw * 0.6]) {
        addWindow(parts, mats, [x, y + 0.28, hd], [0, 1], 0.55, 0.66);
      }
    }
  }
  // 背面与侧窗
  for (const y of [1.7, 2.62]) {
    for (const x of [-hw * 0.4, hw * 0.4]) addWindow(parts, mats, [x, y + 0.28, -hd], [0, -1], 0.5, 0.6);
  }
  for (const sx of [hw, -hw]) {
    for (const y of [1.7, 2.62]) addWindow(parts, mats, [sx, y + 0.28, -hd * 0.35], [Math.sign(sx), 0], 0.5, 0.6);
    addWindow(parts, mats, [sx, 1.7, hd * 0.4], [Math.sign(sx), 0], 0.5, 0.6);
  }
  // 竖向招牌
  parts.push({ geo: xform(box(0.5, 1.5, 0.1), { pos: [hw - 0.3, 2.2, hd + 0.12] }), mat: mats.m.redPaint });
  addChimney(parts, mats, -b.w * 0.32, b.d * 0.2, h + 0.6, 0.8);
  return parts;
}

function makeChurch(b, mats) {
  const parts = [];
  const wallMat = mats.wallMaterial(b.wall, 0.03);
  const roofMat = mats.roofMaterial(b.roof, true);
  const hw = b.w / 2;
  const hd = b.d / 2;
  const h = 2.6;

  // 中殿（脊线沿 z）
  parts.push({ geo: roundedBox(b.w, h, b.d, 0.05, 1), pos: [0, h / 2, 0], mat: wallMat });
  const roof = gableRoofGeo(b.d + 0.5, b.w + 0.5, 1.0);
  roof.rotateY(Math.PI / 2);
  parts.push({ geo: roof, pos: [0, h, 0], mat: roofMat });

  // 钟塔（北端）
  const tw = 1.9;
  parts.push({ geo: roundedBox(tw, 4.4, tw, 0.05, 1), pos: [0, 2.2, -hd + tw / 2 - 0.1], mat: wallMat });
  parts.push({
    geo: xform(new THREE.ConeGeometry(1.45, 2.4, 4), { pos: [0, 4.4 + 1.2, -hd + tw / 2 - 0.1], rot: [0, Math.PI / 4, 0] }),
    mat: roofMat,
  });
  // 塔窗
  for (const dir of [[0, -1], [1, 0], [-1, 0]]) {
    const px = dir[0] * (tw / 2);
    const pz = -hd + tw / 2 - 0.1 + dir[1] * (tw / 2);
    addWindow(parts, mats, [px, 3.5, pz], dir, 0.4, 0.9);
  }
  // 十字架
  parts.push({ geo: xform(box(0.08, 0.6, 0.08), { pos: [0, 6.9, -hd + tw / 2 - 0.1] }), mat: mats.m.lampPole });
  parts.push({ geo: xform(box(0.36, 0.08, 0.08), { pos: [0, 7.0, -hd + tw / 2 - 0.1] }), mat: mats.m.lampPole });

  // 侧窗（高瘦拱窗感）
  for (const sx of [hw, -hw]) {
    for (const z of [-hd * 0.3, hd * 0.1, hd * 0.5]) {
      addWindow(parts, mats, [sx, 1.7, z], [Math.sign(sx), 0], 0.36, 1.0);
    }
  }
  // 正门（南）
  addDoor(parts, mats, [0, 0.85, hd], [0, 1], 0.95, 1.7);
  addWindow(parts, mats, [0, 2.0, hd], [0, 1], 0.7, 0.6);
  return parts;
}

function makeBarn(b, mats) {
  const parts = [];
  const wallMat = mats.wallMaterial(b.wall, 0.05);
  const roofMat = mats.roofMaterial(b.roof, true);
  const h = 2.0;
  const hd = b.d / 2;
  const hw = b.w / 2;
  parts.push({ geo: roundedBox(b.w, h, b.d, 0.05, 1), pos: [0, h / 2, 0], mat: wallMat });
  parts.push({ geo: gableRoofGeo(b.w + 0.7, b.d + 0.7, 1.0), pos: [0, h, 0], mat: roofMat });
  // 大门
  parts.push({ geo: xform(box(2.0, 1.7, 0.1), { pos: [0, 0.85, hd + 0.04] }), mat: mats.m.door });
  parts.push({ geo: xform(box(0.1, 1.8, 0.12), { pos: [0, 0.9, hd + 0.08] }), mat: mats.m.stone });
  // 阁楼口
  parts.push({ geo: xform(box(0.9, 0.7, 0.1), { pos: [0, h + 0.35, hd - 0.4] }), mat: mats.m.door });
  addWindow(parts, mats, [-hw * 0.6, 1.2, hd], [0, 1], 0.45, 0.5);
  addWindow(parts, mats, [hw, 1.3, 0], [1, 0], 0.5, 0.55);
  void hd;
  return parts;
}

function makeWaterTower(b, mats) {
  const parts = [];
  const legMat = mats.m.lampPole;
  const tankMat = mats.wallMaterial(b.wall, 0);
  const r = 1.5;
  const spread = 1.05;
  // 四腿（略微内倾）
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      parts.push({
        geo: xform(box(0.2, 3.0, 0.2), { pos: [sx * spread, 1.5, sz * spread], rot: [-sz * 0.07, 0, -sx * 0.07] }),
        mat: legMat,
      });
    }
  }
  // 横撑
  for (const y of [0.9, 1.9]) {
    parts.push({ geo: xform(box(spread * 2.4, 0.1, 0.1), { pos: [0, y, spread] }), mat: legMat });
    parts.push({ geo: xform(box(spread * 2.4, 0.1, 0.1), { pos: [0, y, -spread] }), mat: legMat });
    parts.push({ geo: xform(box(0.1, 0.1, spread * 2.4), { pos: [spread, y, 0] }), mat: legMat });
    parts.push({ geo: xform(box(0.1, 0.1, spread * 2.4), { pos: [-spread, y, 0] }), mat: legMat });
  }
  // 罐体
  parts.push({ geo: xform(new THREE.CylinderGeometry(r, r * 0.94, 1.9, 20), { pos: [0, 3.75, 0] }), mat: tankMat });
  parts.push({ geo: xform(new THREE.TorusGeometry(r * 0.99, 0.05, 8, 24), { pos: [0, 3.4, 0], rot: [Math.PI / 2, 0, 0] }), mat: legMat });
  parts.push({ geo: xform(new THREE.TorusGeometry(r * 0.99, 0.05, 8, 24), { pos: [0, 4.1, 0], rot: [Math.PI / 2, 0, 0] }), mat: legMat });
  // 锥顶
  parts.push({ geo: xform(new THREE.ConeGeometry(r + 0.18, 0.8, 20), { pos: [0, 5.1, 0] }), mat: mats.m.bridgeSteel });
  // 爬梯
  for (const sx of [-0.28, 0.28]) {
    parts.push({ geo: xform(box(0.06, 4.4, 0.06), { pos: [sx, 2.2, r * 0.86] }), mat: legMat });
  }
  for (let i = 0; i < 10; i++) {
    parts.push({ geo: xform(box(0.56, 0.05, 0.05), { pos: [0, 0.4 + i * 0.42, r * 0.86] }), mat: legMat });
  }
  return parts;
}

function makeStation(b, mats) {
  const parts = [];
  const wallMat = mats.wallMaterial(b.wall, 0.02);
  const roofMat = mats.roofMaterial(b.roof);
  const h = 2.35;
  const hw = b.w / 2;
  const hd = b.d / 2;

  parts.push({ geo: roundedBox(b.w, h, b.d, 0.05, 1), pos: [0, h / 2, 0], mat: wallMat });
  parts.push({ geo: gableRoofGeo(b.w + 0.7, b.d + 0.75, 1.05), pos: [0, h, 0], mat: roofMat });
  addFascia(parts, mats, b.w, b.d, h - 0.02);

  // 中央入口凸出（朝道路，+z）
  const bayW = 3.2;
  parts.push({ geo: roundedBox(bayW, h + 0.35, b.d + 0.55, 0.05, 1), pos: [0, (h + 0.35) / 2, 0.2], mat: wallMat });
  const bayRoof = gableRoofGeo(b.d + 0.9, bayW + 0.5, 0.95);
  bayRoof.rotateY(Math.PI / 2);
  parts.push({ geo: bayRoof, pos: [0, h + 0.35, 0.2], mat: roofMat });
  // 山墙圆窗
  parts.push({ geo: xform(new THREE.CylinderGeometry(0.3, 0.3, 0.1, 18), { pos: [0, h + 0.85, hd + 0.5], rot: [Math.PI / 2, 0, 0] }), mat: mats.m.trim });
  parts.push({ geo: xform(new THREE.CylinderGeometry(0.22, 0.22, 0.12, 18), { pos: [0, h + 0.85, hd + 0.53], rot: [Math.PI / 2, 0, 0] }), mat: mats.m.glass });

  // 大门（+z 面向道路）
  addDoor(parts, mats, [0, 0.75, hd + 0.55], [0, 1], 1.1, 1.5);
  addWindow(parts, mats, [-1.3, 1.1, hd + 0.3], [0, 1], 0.8, 0.9);
  addWindow(parts, mats, [1.3, 1.1, hd + 0.3], [0, 1], 0.8, 0.9);

  // 站台侧（-z）连续窗
  for (let i = -2; i <= 2; i++) {
    addWindow(parts, mats, [i * 2.1, 1.3, -hd], [0, -1], 0.75, 0.95);
  }
  // 侧墙
  for (const sx of [hw, -hw]) {
    addWindow(parts, mats, [sx, 1.25, 0], [Math.sign(sx), 0], 0.7, 0.85);
  }
  // 烟囱
  addChimney(parts, mats, -b.w * 0.34, 0, h + 0.6, 0.85);
  addChimney(parts, mats, b.w * 0.34, 0, h + 0.6, 0.85);

  // 屋顶招牌
  parts.push({ geo: xform(box(3.4, 0.5, 0.1), { pos: [0, h + 0.5, hd + 0.35] }), mat: mats.m.lampPole });
  return parts;
}

const FACTORIES = {
  house: makeHouse,
  shop: makeShop,
  inn: makeInn,
  church: makeChurch,
  barn: makeBarn,
  watertower: makeWaterTower,
  station: makeStation,
};

/** 各建筑的临街朝向 */
const FACES = {
  'shop-a': 'north',
  'house-a': 'south',
  'shop-b': 'north',
  inn: 'north',
  'house-b': 'south',
  'house-c': 'south',
  church: 'west',
  'house-d': 'south',
  'house-e': 'south',
  'house-f': 'west',
  pumphouse: 'south',
  'farm-nw': 'south',
  'barn-ne': 'south',
  'cottage-sw': 'north',
  'shed-se': 'north',
};

/* ---------------- 道路 ---------------- */

function buildRoads(mats) {
  const group = new THREE.Group();
  for (const road of ROADS) {
    const shoulder = new THREE.Mesh(
      flatRibbonGeometry(road.points, road.width + 0.75, 0.026, { closed: false, uScale: 4 }),
      mats.m.stone
    );
    shoulder.receiveShadow = true;
    group.add(shoulder);

    const surface = new THREE.Mesh(
      flatRibbonGeometry(road.points, road.width, 0.05, { closed: false, uScale: 3 }),
      mats.m.asphalt
    );
    surface.receiveShadow = true;
    group.add(surface);

    // 中线虚线（较宽的路）
    if (road.width >= 2.6) {
      const dashParts = [];
      let acc = 0;
      let toggle = 0;
      for (let i = 1; i < road.points.length; i++) {
        const a = road.points[i - 1];
        const b = road.points[i];
        const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
        const dir = [(b[0] - a[0]) / len, (b[1] - a[1]) / len];
        let s = toggle ? 1.4 : 0;
        while (s + 1.2 <= len) {
          const x = a[0] + dir[0] * (s + 0.6);
          const z = a[1] + dir[1] * (s + 0.6);
          const yaw = Math.atan2(dir[0], dir[1]);
          dashParts.push({ geo: xform(box(0.14, 0.02, 1.2), { pos: [x, 0.062, z], rot: [0, yaw, 0] }), mat: mats.m.whitePaint });
          s += 2.6;
          toggle ^= 1;
        }
        acc += len;
        void acc;
      }
      if (dashParts.length) {
        const dashes = buildMergedMesh(dashParts, { castShadow: false, receiveShadow: true });
        group.add(dashes);
      }
    }
  }
  return group;
}

/* ---------------- 路灯 ---------------- */

function buildLamps(mats, lamps) {
  const group = new THREE.Group();
  for (const l of lamps) {
    const parts = [];
    parts.push({ geo: xform(new THREE.CylinderGeometry(0.16, 0.2, 0.12, 10), { pos: [0, 0.06, 0] }), mat: mats.m.stone });
    parts.push({ geo: xform(box(0.1, 2.5, 0.1), { pos: [0, 1.3, 0] }), mat: mats.m.lampPole });
    parts.push({ geo: xform(box(0.1, 0.1, 0.55), { pos: [0, 2.5, 0.26] }), mat: mats.m.lampPole });
    parts.push({ geo: xform(roundedBox(0.34, 0.1, 0.34, 0.04, 1), { pos: [0, 2.46, 0.5] }), mat: mats.m.lampPole });
    parts.push({ geo: xform(new THREE.SphereGeometry(0.15, 12, 10), { pos: [0, 2.36, 0.5] }), mat: mats.m.bulb });
    const mesh = buildMergedMesh(parts, { castShadow: true, receiveShadow: true });
    const holder = new THREE.Group();
    holder.position.set(l.x, 0, l.z);
    holder.rotation.y = l.rot;
    holder.add(mesh);

    const sprite = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: mats.tex.glow,
        transparent: true,
        opacity: 0,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    );
    sprite.scale.set(3.0, 3.0, 1);
    sprite.position.set(l.x + Math.sin(l.rot) * 0.5, 2.36, l.z + Math.cos(l.rot) * 0.5);
    registerSprite(sprite, 0.95);
    group.add(holder);
    group.add(sprite);
  }
  return group;
}

/* ---------------- 小品：车 / 椅 / 摊 ---------------- */

function buildCar(mats, c) {
  const parts = [];
  const bodyMat = new THREE.MeshStandardMaterial({ color: c.color, roughness: 0.42, metalness: 0.25 });
  parts.push({ geo: xform(roundedBox(3.0, 0.55, 1.5, 0.16, 2), { pos: [0, 0.52, 0] }), mat: bodyMat });
  parts.push({ geo: xform(roundedBox(1.7, 0.5, 1.35, 0.16, 2), { pos: [-0.1, 0.98, 0] }), mat: bodyMat });
  parts.push({ geo: xform(box(0.7, 0.34, 1.38), { pos: [-0.1, 1.0, 0] }), mat: mats.m.glass });
  parts.push({ geo: xform(box(0.5, 0.3, 1.4), { pos: [0.65, 0.95, 0] }), mat: mats.m.glass });
  for (const sx of [1, -1]) {
    for (const sz of [1, -1]) {
      parts.push({
        geo: xform(new THREE.CylinderGeometry(0.3, 0.3, 0.2, 14), {
          pos: [sx * 1.0, 0.3, sz * 0.75],
          rot: [Math.PI / 2, 0, 0],
        }),
        mat: mats.m.lampPole,
      });
    }
  }
  // 车灯
  for (const sz of [1, -1]) {
    parts.push({ geo: xform(new THREE.SphereGeometry(0.11, 10, 8), { pos: [1.5, 0.6, sz * 0.5] }), mat: mats.m.bulb });
  }
  const mesh = buildMergedMesh(parts, { castShadow: true, receiveShadow: true });
  mesh.position.set(c.x, 0, c.z);
  mesh.rotation.y = c.rot;
  return mesh;
}

function buildBench(mats, b) {
  const parts = [];
  parts.push({ geo: xform(box(1.5, 0.08, 0.5), { pos: [0, 0.42, 0] }), mat: mats.m.door });
  parts.push({ geo: xform(box(1.5, 0.42, 0.07), { pos: [0, 0.66, -0.24], rot: [-0.12, 0, 0] }), mat: mats.m.door });
  for (const sx of [1, -1]) {
    parts.push({ geo: xform(box(0.1, 0.42, 0.44), { pos: [sx * 0.65, 0.21, 0] }), mat: mats.m.lampPole });
    parts.push({ geo: xform(box(0.08, 0.4, 0.08), { pos: [sx * 0.65, 0.6, -0.22] }), mat: mats.m.lampPole });
  }
  const mesh = buildMergedMesh(parts, { castShadow: true, receiveShadow: true });
  mesh.position.set(b.x, 0, b.z);
  mesh.rotation.y = b.rot;
  return mesh;
}

function buildStall(mats, s) {
  const parts = [];
  const canopyMat = new THREE.MeshStandardMaterial({ color: s.color, roughness: 0.8 });
  for (const sx of [1, -1]) {
    for (const sz of [1, -1]) {
      parts.push({ geo: xform(box(0.08, 2.0, 0.08), { pos: [sx * 0.7, 1.0, sz * 0.5] }), mat: mats.m.lampPole });
    }
  }
  parts.push({ geo: xform(box(1.7, 0.1, 1.3), { pos: [0, 2.05, 0] }), mat: canopyMat });
  parts.push({ geo: xform(box(1.7, 0.1, 0.25), { pos: [0, 1.9, 0.62], rot: [0.5, 0, 0] }), mat: canopyMat });
  parts.push({ geo: xform(box(1.5, 0.08, 0.6), { pos: [0, 0.95, 0.3] }), mat: mats.m.door });
  parts.push({ geo: xform(box(1.4, 0.5, 0.5), { pos: [0, 0.4, 0.35] }), mat: mats.m.stone });
  // 摆货小方块
  const goods = ['#d4684a', '#e0c05a', '#7fae5a'];
  for (let i = 0; i < 4; i++) {
    parts.push({
      geo: xform(box(0.24, 0.18, 0.24), { pos: [-0.5 + i * 0.34, 1.08, 0.3] }),
      mat: new THREE.MeshStandardMaterial({ color: goods[i % 3], roughness: 0.8 }),
    });
  }
  const mesh = buildMergedMesh(parts, { castShadow: true, receiveShadow: true });
  mesh.position.set(s.x, 0, s.z);
  mesh.rotation.y = s.rot;
  return mesh;
}

/* ---------------- 总装 ---------------- */

export function buildTown(mats, lampList) {
  const group = new THREE.Group();

  // 道路
  group.add(buildRoads(mats));

  // 建筑
  let seed = 1337;
  const rng = () => {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return seed / 4294967296;
  };
  for (const b of BUILDINGS) {
    const factory = FACTORIES[b.type] || makeHouse;
    const withFace = { ...b, face: FACES[b.id] || 'south' };
    const parts = factory(withFace, mats, rng);
    const mesh = buildMergedMesh(parts, { castShadow: true, receiveShadow: true });
    mesh.position.set(b.x, 0, b.z);
    mesh.rotation.y = b.rot || 0;
    mesh.name = b.id;
    group.add(mesh);
  }

  // 路灯
  group.add(buildLamps(mats, lampList));

  // 小品
  for (const c of PROPS.cars) group.add(buildCar(mats, c));
  for (const b of PROPS.benches) group.add(buildBench(mats, b));
  for (const s of PROPS.stalls) group.add(buildStall(mats, s));

  return { group };
}

void PLATFORM;
