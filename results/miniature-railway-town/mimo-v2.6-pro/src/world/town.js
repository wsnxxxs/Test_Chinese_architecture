/**
 * 小镇：建筑工厂 + 车站、教堂、铁路附属设施。
 * 所有建筑贴着 heightAt(x,z) 摆放，窗户统一登记到夜景发光表。
 */
import * as THREE from 'three';
import { BUILDINGS, CHURCH, RAIL_PROPS, STATION, PLAZA } from '../config.js';
import { roundedBox, gableRoofGeometry, hipRoofGeometry, flatten } from '../lib/geo.js';
import { makeRoofTexture, makeSignTexture, makePlasterTexture } from '../lib/textures.js';
import { makeRandom, lerp } from '../lib/util.js';
import { registerGlow } from './shared.js';

const WINDOW_W = 0.26;
const WINDOW_H = 0.3;

function createMaterials() {
  const roofTex = makeRoofTexture({ repeat: [1.6, 1.6], rows: 7, cols: 9 });
  const wallTex = makePlasterTexture({ repeat: [1, 1], strength: 15 });

  const mat = {
    wallTex,
    roofTex,
    trim: new THREE.MeshStandardMaterial({ color: 0xf2e6cf, roughness: 0.72 }),
    trimSoft: new THREE.MeshStandardMaterial({ color: 0xe3d2b4, roughness: 0.78 }),
    wood: new THREE.MeshStandardMaterial({ color: 0x6b4526, roughness: 0.82 }),
    woodDark: new THREE.MeshStandardMaterial({ color: 0x4b3018, roughness: 0.82 }),
    stone: new THREE.MeshStandardMaterial({ color: 0xb3a791, roughness: 0.92 }),
    stoneDark: new THREE.MeshStandardMaterial({ color: 0x93866f, roughness: 0.94 }),
    metal: new THREE.MeshStandardMaterial({ color: 0x4d5560, roughness: 0.55, metalness: 0.5 }),
    glass: new THREE.MeshStandardMaterial({
      color: 0x2c3742,
      roughness: 0.22,
      metalness: 0.28,
      emissive: 0xffb867,
      emissiveIntensity: 0,
    }),
    glassWarm: new THREE.MeshStandardMaterial({
      color: 0x3b3a34,
      roughness: 0.25,
      metalness: 0.24,
      emissive: 0xffc987,
      emissiveIntensity: 0,
    }),
    lampHead: new THREE.MeshStandardMaterial({
      color: 0x2b2b2b,
      roughness: 0.5,
      metalness: 0.45,
      emissive: 0xffd9a0,
      emissiveIntensity: 0,
    }),
    dark: new THREE.MeshStandardMaterial({ color: 0x2a2622, roughness: 0.75 }),
  };
  return mat;
}

function addWindow(g, M, x, y, z, rotY, { w = WINDOW_W, h = WINDOW_H, glow = false, sill = true } = {}) {
  const frame = new THREE.Mesh(new THREE.BoxGeometry(w + 0.075, h + 0.075, 0.05), M.trim);
  frame.position.set(x, y, z);
  frame.rotation.y = rotY;
  frame.castShadow = true;
  g.add(frame);

  const glass = new THREE.Mesh(new THREE.BoxGeometry(w, h, 0.028), glow ? M.glassWarm : M.glass);
  glass.position.set(x + Math.sin(rotY) * 0.017, y, z + Math.cos(rotY) * 0.017);
  glass.rotation.y = rotY;
  g.add(glass);

  // 中梃
  const bar = new THREE.Mesh(new THREE.BoxGeometry(0.028, h, 0.035), M.trim);
  bar.position.copy(glass.position);
  bar.rotation.y = rotY;
  g.add(bar);

  if (sill) {
    const sillMesh = new THREE.Mesh(new THREE.BoxGeometry(w + 0.12, 0.038, 0.09), M.trimSoft);
    sillMesh.position.set(x + Math.sin(rotY) * 0.03, y - h / 2 - 0.035, z + Math.cos(rotY) * 0.03);
    sillMesh.rotation.y = rotY;
    sillMesh.castShadow = true;
    g.add(sillMesh);
  }
  return glass;
}

function makeBuilding(spec, M, rng) {
  const g = new THREE.Group();
  const { w, d, h, wall, roof, floors = 2, kind = 'house', awning = false } = spec;

  const wallMat = new THREE.MeshStandardMaterial({ map: M.wallTex, color: wall, roughness: 0.86 });
  const roofMat = new THREE.MeshStandardMaterial({ map: M.roofTex, color: roof, roughness: 0.72 });

  // 基座
  const base = new THREE.Mesh(roundedBox(w + 0.14, 0.13, d + 0.14, 0.035, 2), M.stoneDark);
  base.position.y = 0.065;
  base.castShadow = true;
  base.receiveShadow = true;
  g.add(base);

  // 墙体
  const body = new THREE.Mesh(roundedBox(w, h, d, 0.05, 3), wallMat);
  body.position.y = h / 2 + 0.11;
  body.castShadow = true;
  body.receiveShadow = true;
  g.add(body);

  const wallTop = h + 0.11;
  const roofH = Math.min(w, d) * 0.46 + 0.14;
  const ridgeAlongZ = d >= w;

  // 屋顶
  const roofGeo = ridgeAlongZ
    ? gableRoofGeometry(w + 0.3, d + 0.3, roofH)
    : flatten(gableRoofGeometry(d + 0.3, w + 0.3, roofH).rotateY(Math.PI / 2));
  const roofMesh = new THREE.Mesh(roofGeo, roofMat);
  roofMesh.position.y = wallTop;
  roofMesh.castShadow = true;
  roofMesh.receiveShadow = true;
  g.add(roofMesh);

  // 檐口板（略低于屋面基线，避免与屋面穿插）
  const fascia = new THREE.Mesh(new THREE.BoxGeometry(w + 0.34, 0.055, d + 0.34), M.trimSoft);
  fascia.position.y = wallTop - 0.058;
  fascia.castShadow = true;
  g.add(fascia);

  // 烟囱
  if (kind !== 'shed') {
    const chim = new THREE.Mesh(new THREE.BoxGeometry(0.21, 0.52, 0.21), wallMat);
    const cx = ridgeAlongZ ? w * 0.24 : 0;
    const cz = ridgeAlongZ ? 0 : d * 0.24;
    chim.position.set(cx, wallTop + roofH * 0.42, cz);
    chim.castShadow = true;
    g.add(chim);
    const cap = new THREE.Mesh(new THREE.BoxGeometry(0.27, 0.06, 0.27), M.stoneDark);
    cap.position.set(cx, wallTop + roofH * 0.42 + 0.28, cz);
    cap.castShadow = true;
    g.add(cap);
  }

  // 窗户
  const floorH = h / floors;
  const colsFront = Math.max(1, Math.round(w / 0.62));
  const colsSide = Math.max(1, Math.round(d / 0.62));
  const glowRatio = 0.42;
  const glowPick = () => rng.next() < glowRatio;

  for (let f = 0; f < floors; f++) {
    const y = 0.11 + floorH * (f + 0.56);
    for (let c = 0; c < colsFront; c++) {
      const x = (c - (colsFront - 1) / 2) * (w / (colsFront + 0.35));
      // 正面（+z）
      if (!(f === 0 && Math.abs(x) < 0.2 && kind !== 'shed')) {
        addWindow(g, M, x, y, d / 2 + 0.012, 0, { glow: glowPick() });
      }
      // 背面（-z）
      addWindow(g, M, -x, y, -d / 2 - 0.012, Math.PI, { glow: glowPick() });
    }
    for (let c = 0; c < colsSide; c++) {
      const z = (c - (colsSide - 1) / 2) * (d / (colsSide + 0.35));
      addWindow(g, M, w / 2 + 0.012, y, z, Math.PI / 2, { glow: glowPick() });
      addWindow(g, M, -w / 2 - 0.012, y, -z, -Math.PI / 2, { glow: glowPick() });
    }
  }

  // 大门（正面）
  const doorY = 0.11;
  const door = new THREE.Mesh(new THREE.BoxGeometry(0.27, 0.44, 0.055), M.woodDark);
  door.position.set(0, doorY + 0.22, d / 2 + 0.02);
  door.castShadow = true;
  g.add(door);
  const lintel = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.055, 0.09), M.trim);
  lintel.position.set(0, doorY + 0.47, d / 2 + 0.035);
  lintel.castShadow = true;
  g.add(lintel);
  const step = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.06, 0.2), M.stone);
  step.position.set(0, doorY + 0.03, d / 2 + 0.12);
  step.castShadow = true;
  step.receiveShadow = true;
  g.add(step);

  // 遮阳棚
  if (awning) {
    const aw = new THREE.Mesh(new THREE.BoxGeometry(w * 0.72, 0.035, 0.34), roofMat);
    aw.position.set(0, 0.11 + floorH * 0.72, d / 2 + 0.17);
    aw.rotation.x = -0.28;
    aw.castShadow = true;
    g.add(aw);
    for (const side of [-1, 1]) {
      const post = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.42, 6), M.wood);
      post.position.set(side * w * 0.3, 0.11 + floorH * 0.44, d / 2 + 0.3);
      post.castShadow = true;
      g.add(post);
    }
  }

  return g;
}

/** 车站：站台 + 雨棚 + 主楼 + 站牌 */
function makeStation(M, textures) {
  const g = new THREE.Group();
  const P = STATION.platform;
  const B = STATION.building;

  // 站台
  const plat = new THREE.Mesh(roundedBox(P.w, P.h, P.d, 0.035, 2), M.stone);
  plat.position.set(P.x, P.h / 2, P.z);
  plat.castShadow = true;
  plat.receiveShadow = true;
  g.add(plat);

  const edge = new THREE.Mesh(new THREE.BoxGeometry(P.w, 0.045, 0.16), M.trimSoft);
  edge.position.set(P.x, P.h + 0.018, P.z + P.d / 2 - 0.08);
  edge.castShadow = true;
  g.add(edge);

  const stripe = new THREE.Mesh(
    new THREE.BoxGeometry(P.w, 0.012, 0.07),
    new THREE.MeshStandardMaterial({ color: 0xd9c184, roughness: 0.85 }),
  );
  stripe.position.set(P.x, P.h + 0.028, P.z + P.d / 2 - 0.24);
  g.add(stripe);

  // 主楼
  const wallMat = new THREE.MeshStandardMaterial({ map: M.wallTex, color: 0xe6d3ae, roughness: 0.85 });
  const roofMat = new THREE.MeshStandardMaterial({ map: M.roofTex, color: 0x8c4a3a, roughness: 0.72 });
  const body = new THREE.Mesh(roundedBox(B.w, B.h, B.d, 0.055, 3), wallMat);
  body.position.set(B.x, B.h / 2 + 0.1, B.z);
  body.castShadow = true;
  body.receiveShadow = true;
  g.add(body);

  const base = new THREE.Mesh(roundedBox(B.w + 0.16, 0.14, B.d + 0.16, 0.04, 2), M.stoneDark);
  base.position.set(B.x, 0.07, B.z);
  base.castShadow = true;
  base.receiveShadow = true;
  g.add(base);

  const roofH = 0.72;
  const roof = new THREE.Mesh(gableRoofGeometry(B.d + 0.34, B.w + 0.34, roofH).rotateY(Math.PI / 2), roofMat);
  roof.position.set(B.x, B.h + 0.1, B.z);
  roof.castShadow = true;
  roof.receiveShadow = true;
  g.add(roof);

  const fascia = new THREE.Mesh(new THREE.BoxGeometry(B.d + 0.36, 0.06, B.w + 0.36), M.trimSoft);
  fascia.position.set(B.x, B.h + 0.052, B.z);
  fascia.castShadow = true;
  g.add(fascia);

  // 山墙钟面
  const clock = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 0.045, 20), M.trim);
  clock.rotation.x = Math.PI / 2;
  clock.position.set(B.x, B.h + 0.42, B.z + B.d / 2 + 0.12);
  clock.castShadow = true;
  g.add(clock);
  const clockFace = new THREE.Mesh(
    new THREE.CylinderGeometry(0.125, 0.125, 0.02, 20),
    new THREE.MeshStandardMaterial({ color: 0xf7efdd, roughness: 0.6, emissive: 0xffd9a0, emissiveIntensity: 0 }),
  );
  clockFace.rotation.x = Math.PI / 2;
  clockFace.position.set(B.x, B.h + 0.42, B.z + B.d / 2 + 0.148);
  g.add(clockFace);
  registerGlow(clockFace.material, { emissiveNight: 0.85, emissiveDay: 0 });

  // 正立面窗与门
  const frontZ = B.z + B.d / 2 + 0.012;
  for (const dx of [-1.42, -0.78, 0.78, 1.42]) {
    addWindow(g, M, B.x + dx, 0.78, frontZ, 0, { w: 0.3, h: 0.36, glow: dx < 0 });
    addWindow(g, M, B.x + dx, 1.52, frontZ, 0, { w: 0.3, h: 0.3, glow: dx > 0 });
  }
  const door = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.62, 0.07), M.woodDark);
  door.position.set(B.x, 0.42, frontZ + 0.02);
  door.castShadow = true;
  g.add(door);
  const doorTop = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.06, 0.1), M.trim);
  doorTop.position.set(B.x, 0.76, frontZ + 0.04);
  g.add(doorTop);

  // 雨棚
  const canopy = new THREE.Mesh(roundedBox(5.6, 0.075, 1.28, 0.045, 2), roofMat);
  canopy.position.set(P.x, 1.12, P.z - 0.08);
  canopy.castShadow = true;
  canopy.receiveShadow = true;
  g.add(canopy);
  const canopyTrim = new THREE.Mesh(new THREE.BoxGeometry(5.66, 0.11, 0.07), M.trimSoft);
  canopyTrim.position.set(P.x, 1.06, P.z + 0.53);
  canopyTrim.castShadow = true;
  g.add(canopyTrim);
  for (const dx of [-2.5, -0.85, 0.85, 2.5]) {
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, 1.02, 10), M.trimSoft);
    post.position.set(P.x + dx, 0.61, P.z + 0.36);
    post.castShadow = true;
    g.add(post);
    const bracket = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, 0.3), M.trimSoft);
    bracket.position.set(P.x + dx, 1.02, P.z + 0.2);
    bracket.rotation.x = 0.62;
    g.add(bracket);
  }

  // 站牌
  const signTex = makeSignTexture({ text: '青溪镇', sub: 'QINGXI STATION' });
  const signMat = new THREE.MeshStandardMaterial({ map: signTex, roughness: 0.68 });
  const sign = new THREE.Mesh(new THREE.BoxGeometry(1.35, 0.42, 0.055), signMat);
  sign.position.set(P.x - 1.15, 1.28, P.z + 0.42);
  sign.castShadow = true;
  g.add(sign);
  for (const side of [-1, 1]) {
    const leg = new THREE.Mesh(new THREE.CylinderGeometry(0.032, 0.032, 0.5, 8), M.metal);
    leg.position.set(P.x - 1.15 + side * 0.58, 1.02, P.z + 0.42);
    g.add(leg);
  }

  // 站台长椅
  for (const dx of [-1.7, 0.4, 2.1]) {
    const bench = new THREE.Group();
    const seat = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.045, 0.17), M.wood);
    seat.position.y = 0.19;
    const back = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.16, 0.04), M.wood);
    back.position.set(0, 0.3, -0.07);
    bench.add(seat, back);
    for (const s of [-1, 1]) {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.19, 0.15), M.metal);
      leg.position.set(s * 0.26, 0.095, 0);
      bench.add(leg);
    }
    bench.traverse((o) => {
      o.castShadow = true;
      o.receiveShadow = true;
    });
    bench.position.set(P.x + dx, P.h, P.z + 0.12);
    bench.rotation.y = Math.PI;
    g.add(bench);
  }

  return g;
}

/** 教堂（带塔楼与尖顶） */
function makeChurch(M, rng) {
  const g = new THREE.Group();
  const { x, z, rot, w, d, h, tower } = CHURCH;
  const wallMat = new THREE.MeshStandardMaterial({ map: M.wallTex, color: 0xeee0c6, roughness: 0.85 });
  const roofMat = new THREE.MeshStandardMaterial({ map: M.roofTex, color: 0x6b5b6e, roughness: 0.72 });

  const base = new THREE.Mesh(roundedBox(w + 0.16, 0.14, d + 0.16, 0.04, 2), M.stoneDark);
  base.position.y = 0.07;
  g.add(base);

  const nave = new THREE.Mesh(roundedBox(w, h, d, 0.05, 3), wallMat);
  nave.position.y = h / 2 + 0.11;
  g.add(nave);

  const roof = new THREE.Mesh(gableRoofGeometry(w + 0.32, d + 0.2, 0.72), roofMat);
  roof.position.y = h + 0.11;
  g.add(roof);

  // 塔楼
  const tw = 0.92;
  const towerMesh = new THREE.Mesh(roundedBox(tw, tower, tw, 0.05, 3), wallMat);
  towerMesh.position.set(0, tower / 2 + 0.11, d / 2 - 0.12);
  g.add(towerMesh);
  const spire = new THREE.Mesh(flatten(new THREE.ConeGeometry(0.72, 1.15, 4).rotateY(Math.PI / 4)), roofMat);
  spire.position.set(0, tower + 0.66, d / 2 - 0.12);
  g.add(spire);
  const crossV = new THREE.Mesh(new THREE.BoxGeometry(0.045, 0.34, 0.045), M.metal);
  crossV.position.set(0, tower + 1.38, d / 2 - 0.12);
  g.add(crossV);
  const crossH = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.045, 0.045), M.metal);
  crossH.position.set(0, tower + 1.42, d / 2 - 0.12);
  g.add(crossH);

  // 塔楼圆窗
  const rose = new THREE.Mesh(new THREE.CylinderGeometry(0.19, 0.19, 0.04, 18), M.glassWarm);
  rose.rotation.x = Math.PI / 2;
  rose.position.set(0, tower * 0.72, d / 2 + 0.36);
  g.add(rose);

  // 尖拱窗
  for (const side of [-1, 1]) {
    for (let i = 0; i < 3; i++) {
      const zPos = -d / 2 + 0.7 + i * 0.82;
      const win = addWindow(g, M, side * (w / 2 + 0.012), h * 0.62, zPos, (side * Math.PI) / 2, {
        w: 0.22,
        h: 0.5,
        glow: i % 2 === 0,
      });
      win.scale.y = 1.35;
    }
  }

  // 大门
  const door = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.66, 0.07), M.woodDark);
  door.position.set(0, 0.44, d / 2 + 0.26);
  g.add(door);

  g.position.set(x, 0, z);
  g.rotation.y = rot;
  g.traverse((o) => {
    o.castShadow = true;
    o.receiveShadow = true;
  });
  return g;
}

/** 铁路水塔 */
function makeWaterTower(M) {
  const g = new THREE.Group();
  const { x, z, rot } = RAIL_PROPS.waterTower;
  const legH = 1.05;
  for (const [dx, dz] of [
    [-0.42, -0.42],
    [0.42, -0.42],
    [-0.42, 0.42],
    [0.42, 0.42],
  ]) {
    const leg = new THREE.Mesh(new THREE.BoxGeometry(0.11, legH, 0.11), M.metal);
    leg.position.set(dx, legH / 2, dz);
    g.add(leg);
  }
  const tank = new THREE.Mesh(new THREE.CylinderGeometry(0.62, 0.58, 0.86, 18), M.woodDark);
  tank.position.y = legH + 0.43;
  g.add(tank);
  for (const yy of [0.2, 0.62]) {
    const band = new THREE.Mesh(new THREE.TorusGeometry(0.615, 0.028, 8, 22), M.metal);
    band.rotation.x = Math.PI / 2;
    band.position.y = legH + yy;
    g.add(band);
  }
  const cap = new THREE.Mesh(flatten(new THREE.ConeGeometry(0.78, 0.36, 14)), M.woodDark);
  cap.position.y = legH + 1.04;
  g.add(cap);
  const spout = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.075, 0.95, 10), M.metal);
  spout.rotation.z = Math.PI / 2.6;
  spout.position.set(0.52, legH + 0.28, 0);
  g.add(spout);
  const ladder = new THREE.Group();
  for (const s of [-1, 1]) {
    const rail = new THREE.Mesh(new THREE.BoxGeometry(0.035, 1.32, 0.035), M.metal);
    rail.position.set(s * 0.12, legH + 0.55, -0.63);
    ladder.add(rail);
  }
  for (let i = 0; i < 7; i++) {
    const rung = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.028, 0.028), M.metal);
    rung.position.set(0, legH + 0.06 + i * 0.19, -0.63);
    ladder.add(rung);
  }
  g.add(ladder);

  g.position.set(x, 0, z);
  g.rotation.y = rot;
  g.traverse((o) => {
    o.castShadow = true;
    o.receiveShadow = true;
  });
  return g;
}

/** 粮仓 */
function makeSilo(M) {
  const g = new THREE.Group();
  const { x, z } = RAIL_PROPS.silo;
  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.66, 0.7, 1.72, 20), M.stone);
  body.position.y = 0.86;
  g.add(body);
  const cap = new THREE.Mesh(flatten(new THREE.ConeGeometry(0.82, 0.5, 18)), M.woodDark);
  cap.position.y = 1.97;
  g.add(cap);
  const band1 = new THREE.Mesh(new THREE.TorusGeometry(0.68, 0.03, 8, 22), M.metal);
  band1.rotation.x = Math.PI / 2;
  band1.position.y = 1.42;
  g.add(band1);
  const door = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.52, 0.06), M.woodDark);
  door.position.set(0, 0.3, 0.7);
  g.add(door);
  g.position.set(x, 0, z);
  g.traverse((o) => {
    o.castShadow = true;
    o.receiveShadow = true;
  });
  return g;
}

/** 货运仓库 */
function makeGoodsShed(M) {
  const g = new THREE.Group();
  const { x, z, rot, w, d, h } = RAIL_PROPS.goodsShed;
  const wallMat = new THREE.MeshStandardMaterial({ map: M.wallTex, color: 0xb8886a, roughness: 0.88 });
  const roofMat = new THREE.MeshStandardMaterial({ map: M.roofTex, color: 0x7a5c48, roughness: 0.74 });

  const body = new THREE.Mesh(roundedBox(w, h, d, 0.05, 3), wallMat);
  body.position.y = h / 2 + 0.1;
  g.add(body);
  const roof = new THREE.Mesh(gableRoofGeometry(w + 0.28, d + 0.28, 0.52), roofMat);
  roof.position.y = h + 0.1;
  g.add(roof);
  const door = new THREE.Mesh(new THREE.BoxGeometry(0.86, 0.66, 0.06), M.woodDark);
  door.position.set(0, 0.44, d / 2 + 0.02);
  g.add(door);
  const dock = new THREE.Mesh(roundedBox(w * 0.9, 0.16, 0.62, 0.035, 2), M.stoneDark);
  dock.position.set(0, 0.08, d / 2 + 0.32);
  g.add(dock);

  g.position.set(x, 0, z);
  g.rotation.y = rot;
  g.traverse((o) => {
    o.castShadow = true;
    o.receiveShadow = true;
  });
  return g;
}

/** 广场中央的喷泉与花坛 */
function makePlazaFountain(M) {
  const g = new THREE.Group();
  const basin = new THREE.Mesh(new THREE.CylinderGeometry(0.58, 0.62, 0.2, 20), M.stone);
  basin.position.y = 0.14;
  g.add(basin);
  const water = new THREE.Mesh(
    new THREE.CylinderGeometry(0.5, 0.5, 0.03, 20),
    new THREE.MeshStandardMaterial({ color: 0x3f7fa0, roughness: 0.16, metalness: 0.1 }),
  );
  water.position.y = 0.245;
  g.add(water);
  const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.11, 0.42, 12), M.stone);
  stem.position.y = 0.44;
  g.add(stem);
  const bowl = new THREE.Mesh(new THREE.CylinderGeometry(0.26, 0.16, 0.1, 14), M.stone);
  bowl.position.y = 0.66;
  g.add(bowl);
  const finial = new THREE.Mesh(new THREE.SphereGeometry(0.09, 12, 10), M.stoneDark);
  finial.position.y = 0.76;
  g.add(finial);
  g.position.set(PLAZA.x, heightSafe(PLAZA.x, PLAZA.z), PLAZA.z);
  g.traverse((o) => {
    o.castShadow = true;
    o.receiveShadow = true;
  });
  return g;
}

let heightSafe = () => 0;

export function buildTown(scene, textures, heightAt) {
  heightSafe = heightAt;
  const M = createMaterials();
  const rng = makeRandom(770315);
  const group = new THREE.Group();
  group.name = 'town';

  group.add(makeStation(M, textures));
  group.add(makeChurch(M, rng));
  group.add(makeWaterTower(M));
  group.add(makeSilo(M));
  group.add(makeGoodsShed(M));
  group.add(makePlazaFountain(M));

  for (const spec of BUILDINGS) {
    const b = makeBuilding(spec, M, rng);
    b.position.set(spec.x, heightAt(spec.x, spec.z), spec.z);
    b.rotation.y = spec.rot;
    group.add(b);
  }

  scene.add(group);
  return { group, materials: M };
}
