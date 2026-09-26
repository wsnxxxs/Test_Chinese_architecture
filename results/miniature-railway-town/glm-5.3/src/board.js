// 展示底座：实木底板 + 边框 + 铭牌；地形：草地（被河流分为东西两块）、河床、水面
import * as THREE from 'three';
import { makeWoodTexture, makeGrassTexture, makePlaqueTexture } from './textures.js';
import { flatRibbon } from './ribbon.js';

export const BOARD = {
  SLAB_HX: 23.7, // 木底板半宽
  SLAB_HZ: 15.9, // 木底板半深
  GRASS_HX: 22.2, // 草地半宽
  GRASS_HZ: 14.4, // 草地半深
  GRASS_TOP: 0.3, // 草地表面高度
  RIVER_HW: 2.0, // 河流半宽
  WATER_Y: 0.1, // 水面高度
};

// 河流中线控制点（世界坐标 x,z），南北贯穿沙盘
const RIVER_CTRL = [
  [9.8, -16],
  [8.7, -9.5],
  [8.0, -3],
  [7.6, 3],
  [6.6, 9.5],
  [5.9, 16],
];

export function buildBoard(scene) {
  const board = new THREE.Group();
  scene.add(board);

  // ---------- 河流中线与两岸采样 ----------
  const center = new THREE.CatmullRomCurve3(
    RIVER_CTRL.map(([x, z]) => new THREE.Vector3(x, 0, z)),
    false,
    'catmullrom',
    0.5
  );
  const N = 96;
  const cpts = [];
  for (let i = 0; i <= N; i++) {
    cpts.push(center.getPointAt(i / N, new THREE.Vector3()));
  }
  // 每个采样点的东侧法线
  const eastNormal = cpts.map((p, i) => {
    const a = cpts[Math.max(0, i - 1)];
    const b = cpts[Math.min(N, i + 1)];
    const dx = b.x - a.x;
    const dz = b.z - a.z;
    const len = Math.hypot(dx, dz) || 1;
    let nx = dz / len;
    let nz = -dx / len;
    if (nx < 0) {
      nx = -nx;
      nz = -nz;
    } // 统一指向东侧
    return new THREE.Vector2(nx, nz);
  });
  const bankEast = cpts.map((p, i) => ({
    x: p.x + eastNormal[i].x * BOARD.RIVER_HW,
    z: p.z + eastNormal[i].y,
  }));
  const bankWest = cpts.map((p, i) => ({
    x: p.x - eastNormal[i].x * BOARD.RIVER_HW,
    z: p.z - eastNormal[i].y,
  }));

  // 给定 z 求河流中线 x（轨道桥定位用）
  const crossXAt = (z) => {
    for (let i = 0; i < N; i++) {
      if (cpts[i].z <= z && cpts[i + 1].z >= z) {
        const t = (z - cpts[i].z) / (cpts[i + 1].z - cpts[i].z || 1);
        return cpts[i].x + (cpts[i + 1].x - cpts[i].x) * t;
      }
    }
    return cpts[N].x;
  };

  // ---------- 木底板与边框 ----------
  const woodTex = makeWoodTexture({ base: '#8a5a34' });
  const woodDarkTex = makeWoodTexture({ base: '#6e4527', dark: '#54331b', light: '#7d5330' });
  const woodMat = new THREE.MeshStandardMaterial({ map: woodTex, roughness: 0.85 });
  const woodDarkMat = new THREE.MeshStandardMaterial({ map: woodDarkTex, roughness: 0.9 });

  const slab = new THREE.Mesh(
    new THREE.BoxGeometry(BOARD.SLAB_HX * 2, 1.5, BOARD.SLAB_HZ * 2),
    woodMat
  );
  slab.position.y = -0.75;
  slab.receiveShadow = true;
  board.add(slab);

  // 抬高的木质边框（展柜式）
  const frameH = 0.7;
  const frameMat = woodDarkMat;
  const mkFrame = (w, d, x, z) => {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, frameH, d), frameMat);
    m.position.set(x, frameH / 2, z);
    m.castShadow = true;
    m.receiveShadow = true;
    board.add(m);
  };
  mkFrame(BOARD.SLAB_HX * 2, 1.0, 0, -(BOARD.SLAB_HZ - 0.5));
  mkFrame(BOARD.SLAB_HX * 2, 1.0, 0, BOARD.SLAB_HZ - 0.5);
  mkFrame(1.0, BOARD.SLAB_HZ * 2 - 2, -(BOARD.SLAB_HX - 0.5), 0);
  mkFrame(1.0, BOARD.SLAB_HZ * 2 - 2, BOARD.SLAB_HX - 0.5, 0);

  // 正面黄铜铭牌
  const plaque = new THREE.Mesh(
    new THREE.PlaneGeometry(4.6, 0.56),
    new THREE.MeshStandardMaterial({ map: makePlaqueTexture(), roughness: 0.5, metalness: 0.35 })
  );
  plaque.position.set(0, 0.34, BOARD.SLAB_HZ + 0.005);
  board.add(plaque);

  // ---------- 草地（东西两块，中间让出河道） ----------
  const grassTex = makeGrassTexture();
  const grassMat = new THREE.MeshStandardMaterial({
    map: grassTex,
    roughness: 1,
    side: THREE.DoubleSide,
  });
  const earthMat = new THREE.MeshStandardMaterial({
    color: 0x8a6f4d,
    roughness: 1,
    side: THREE.DoubleSide,
  });

  const toShape = (outline) => {
    const s = new THREE.Shape();
    outline.forEach((p, i) => (i === 0 ? s.moveTo(p.x, p.z) : s.lineTo(p.x, p.z)));
    s.closePath();
    return s;
  };
  // z 区间内的河岸点（保持由北到南顺序）
  const bankBetween = (bank, z0, z1) => bank.filter((p) => p.z >= z0 && p.z <= z1);
  const clampEnds = (list, bank, zTarget) => {
    // 若端点未恰好落在草地边线上，用中线插值补一个端点
    const first = list[0];
    if (Math.abs(first.z - zTarget) > 0.05) list.unshift({ x: crossXAt(zTarget) + (bank === 'east' ? BOARD.RIVER_HW : -BOARD.RIVER_HW), z: zTarget });
    return list;
  };

  const zN = -BOARD.GRASS_HZ;
  const zS = BOARD.GRASS_HZ;
  // 西岸（北→南）属于西块草地
  let westBankPts = bankBetween(bankWest, zN, zS);
  westBankPts = clampEnds(westBankPts, 'west', zN);
  let southPt = { x: crossXAt(zS) - BOARD.RIVER_HW, z: zS };
  westBankPts = [...westBankPts, southPt];
  const westOutline = [
    { x: -BOARD.GRASS_HX, z: zN },
    { x: westBankPts[0].x, z: zN },
    ...westBankPts,
    { x: -BOARD.GRASS_HX, z: zS },
  ];
  // 东岸（南→北）属于东块草地
  let eastBankPts = bankBetween(bankEast, zN, zS).reverse();
  eastBankPts.unshift({ x: crossXAt(zS) + BOARD.RIVER_HW, z: zS });
  const eastOutline = [
    { x: eastBankPts[eastBankPts.length - 1].x, z: zN },
    { x: BOARD.GRASS_HX, z: zN },
    { x: BOARD.GRASS_HX, z: zS },
    { x: eastBankPts[0].x, z: zS },
    ...eastBankPts,
  ];

  for (const outline of [westOutline, eastOutline]) {
    const geo = new THREE.ExtrudeGeometry(toShape(outline), { depth: BOARD.GRASS_TOP, bevelEnabled: false });
    geo.rotateX(Math.PI / 2);
    geo.translate(0, BOARD.GRASS_TOP, 0);
    const mesh = new THREE.Mesh(geo, [grassMat, earthMat]);
    mesh.receiveShadow = true;
    board.add(mesh);
  }

  // ---------- 河床与水面 ----------
  const bedPts = cpts.map((p) => ({ x: p.x, z: p.z }));
  const bed = new THREE.Mesh(
    flatRibbon(bedPts, 0.02, BOARD.RIVER_HW + 0.5),
    new THREE.MeshStandardMaterial({ color: 0x4a5c46, roughness: 1, side: THREE.DoubleSide })
  );
  bed.receiveShadow = true;
  board.add(bed);

  const waterMat = new THREE.MeshStandardMaterial({
    color: 0x4d8fb4,
    roughness: 0.18,
    metalness: 0.05,
    transparent: true,
    opacity: 0.9,
    side: THREE.DoubleSide,
  });
  const water = new THREE.Mesh(flatRibbon(bedPts, BOARD.WATER_Y, BOARD.RIVER_HW), waterMat);
  water.receiveShadow = true;
  board.add(water);

  return {
    group: board,
    river: {
      center,
      cpts,
      bankWest,
      bankEast,
      crossXAt,
      halfWidth: BOARD.RIVER_HW,
      waterMat,
    },
  };
}
