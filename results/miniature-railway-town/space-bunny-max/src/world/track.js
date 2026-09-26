import * as THREE from 'three';
import { RAIL, GROUND, C, CROSSING_X, WATER } from '../core/config.js';
import { bake, box, cyl, faces, xf, sweep, shade, jitterHex, paint } from '../core/geo.js';
import { gravelDetail, cobbleDetail } from '../core/textures.js';
import { waterSpanAtX } from './terrain.js';

const RAIL_X = -14; // 铁路桥所在的直线段 X

/* 钢轨截面（lat=横向，ver=竖向，起点在轨顶 → +侧向下 → 底向-侧 → -侧向上）*/
const RAIL_PROFILE = [
  [-0.05, 0.155],
  [0.05, 0.155],
  [0.05, 0.1],
  [0.021, 0.076],
  [0.057, 0.046],
  [0.057, 0.0],
  [-0.057, 0.0],
  [-0.057, 0.046],
  [-0.021, 0.076],
  [-0.05, 0.1],
];

/* 道砟梯形截面 */
const BALLAST_PROFILE = [
  [-RAIL.ballastTopHalf, RAIL.ballastTop - RAIL.y],
  [RAIL.ballastTopHalf, RAIL.ballastTop - RAIL.y],
  [RAIL.ballastBotHalf, GROUND - RAIL.y],
  [-RAIL.ballastBotHalf, GROUND - RAIL.y],
];

/** 沿 Y 给几何体刷顶点色（钢轨轨顶亮、轨腰暗） */
function paintByHeight(geo, y0, y1, topHex, botHex) {
  const p = geo.attributes.position;
  const arr = new Float32Array(p.count * 3);
  const a = new THREE.Color(topHex);
  const b = new THREE.Color(botHex);
  const c = new THREE.Color();
  for (let i = 0; i < p.count; i++) {
    const t = Math.max(0, Math.min(1, (p.getY(i) - y0) / (y1 - y0)));
    c.copy(b).lerp(a, t);
    arr[i * 3] = c.r;
    arr[i * 3 + 1] = c.g;
    arr[i * 3 + 2] = c.b;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(arr, 3));
  return geo;
}

export function buildTrack(path, rng) {
  const group = new THREE.Group();
  group.name = 'track';

  const water = waterSpanAtX(RAIL_X);
  const spanZ0 = water.z0;
  const spanZ1 = water.z1;
  const deckZ0 = spanZ0 - 0.85;
  const deckZ1 = spanZ1 + 0.85;
  const sBridge0 = path.nearest(RAIL_X, deckZ0);
  const sBridge1 = path.nearest(RAIL_X, deckZ1);
  const L = path.length;

  /* ── 道砟（跨河段留空，由桥面承托）── */
  const ballastMat = new THREE.MeshStandardMaterial({
    map: gravelDetail(),
    vertexColors: true,
    roughness: 0.98,
  });
  const ballastParts = [];
  const segs = [
    [sBridge1, sBridge0 + L],
    [sBridge0, sBridge0],
  ];
  for (const [a, b] of segs) {
    const frames = path.frames(a, b, 0.55);
    if (frames.length < 2) continue;
    const g = sweep(BALLAST_PROFILE, frames, { cap: true });
    const cnt = g.attributes.position.count;
    const arr = new Float32Array(cnt * 3);
    const c = new THREE.Color();
    for (let i = 0; i < cnt; i++) {
      c.set(C.ballast);
      const k = 0.88 + ((i * 37) % 23) / 92;
      c.multiplyScalar(k);
      arr[i * 3] = c.r;
      arr[i * 3 + 1] = c.g;
      arr[i * 3 + 2] = c.b;
    }
    g.setAttribute('color', new THREE.BufferAttribute(arr, 3));
    ballastParts.push({ geo: g, color: 0xffffff });
  }
  const ballast = new THREE.Mesh(bake(ballastParts), ballastMat);
  ballast.receiveShadow = true;
  ballast.castShadow = true;
  group.add(ballast);

  /* ── 枕木 ── */
  const sleeperGeo = paint(box(RAIL.sleeper.w, RAIL.sleeper.h, RAIL.sleeper.d), 0xffffff);
  const sleeperMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.92 });
  const count = Math.floor(L / RAIL.sleeper.step);
  const sleepers = new THREE.InstancedMesh(sleeperGeo, sleeperMat, count);
  sleepers.castShadow = true;
  sleepers.receiveShadow = true;
  const m4 = new THREE.Matrix4();
  const qq = new THREE.Quaternion();
  const ee = new THREE.Euler();
  const vv = new THREE.Vector3();
  const one = new THREE.Vector3(1, 1, 1);
  const col = new THREE.Color();
  for (let i = 0; i < count; i++) {
    const s = i * RAIL.sleeper.step;
    const f = path.frameAt(s);
    ee.set(0, Math.atan2(f.t.x, f.t.z), 0);
    qq.setFromEuler(ee);
    vv.copy(f.p);
    vv.y = RAIL.y - RAIL.sleeper.h / 2;
    m4.compose(vv, qq, one);
    sleepers.setMatrixAt(i, m4);
    col.set(jitterHex(C.sleeper, rng, 0.16));
    sleepers.setColorAt(i, col);
  }
  sleepers.instanceMatrix.needsUpdate = true;
  if (sleepers.instanceColor) sleepers.instanceColor.needsUpdate = true;
  group.add(sleepers);

  /* ── 钢轨 ── */
  const railMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.36, metalness: 0.62 });
  for (const side of [1, -1]) {
    const frames = path.frames(-0.6, L + 0.6, 0.42, side * RAIL.gauge * 0.5);
    const g = sweep(RAIL_PROFILE, frames);
    paintByHeight(g, RAIL.y - 0.01, RAIL.y + 0.12, C.railHead, C.railWeb);
    const rail = new THREE.Mesh(g, railMat);
    rail.castShadow = true;
    group.add(rail);
  }

  /* ── 铁路跨河桥：钢板梁 + 石砌桥台 ── */
  const bridge = buildRailBridge(spanZ0, spanZ1, rng);
  group.add(bridge);

  /* ── 公路石拱桥 ── */
  const roadBridge = buildRoadBridge(-19.75, rng);
  group.add(roadBridge);

  /* ── 平交道口 ── */
  group.add(buildLevelCrossing(rng));

  return { group, bridge, roadBridge, sBridge0, sBridge1, deckZ0, deckZ1, spanZ0, spanZ1 };
}

/* ══════════════════ 铁路桥 ══════════════════ */
function buildRailBridge(z0, z1, rng) {
  const g = new THREE.Group();
  g.name = 'rail-bridge';
  const zc = (z0 + z1) / 2;
  const len = z1 - z0 + 1.7; // 桥面总长
  const zA = zc - len / 2;
  const zB = zc + len / 2;
  const deckTop = RAIL.ballastTop; // 0.80
  const deckBot = deckTop - RAIL.deckThick;
  const girderTop = deckTop + 0.02;
  const girderBot = RAIL.girderBottom;
  const gx = 1.4; // 主梁中心横向偏移
  const gT = RAIL.girder;

  const stoneParts = [];
  const ironParts = [];
  const timberParts = [];

  // 桥台（石砌，带斜面翼墙）
  for (const [zz, sgn] of [
    [zA - 0.35, -1],
    [zB + 0.35, 1],
  ]) {
    stoneParts.push({ geo: xf(box(3.5, 1.5, 0.8), RAIL_X, deckBot - 0.35, zz), color: C.stone });
    stoneParts.push({ geo: xf(box(3.7, 0.16, 0.95), RAIL_X, deckTop - 0.16, zz), color: C.stoneDark });
    // 翼墙
    for (const sx of [1, -1]) {
      stoneParts.push({
        geo: xf(box(0.32, 1.0, 1.5), RAIL_X + sx * 1.75, deckBot - 0.25, zz + sgn * 0.95, 0),
        color: shade(C.stone, 0.94),
      });
    }
  }

  // 桥面板
  timberParts.push({ geo: xf(box(gx * 2 - 0.1, RAIL.deckThick, len), RAIL_X, deckTop - RAIL.deckThick / 2, zc), color: 0x4a3d2f });
  // 桥面木枕台（道砟下的垫木）
  timberParts.push({ geo: xf(box(4.2, 0.1, len), RAIL_X, deckTop - RAIL.deckThick - 0.05, zc), color: 0x3a3025 });

  // 主梁（腹板 + 上下翼缘 + 加劲肋）
  for (const s of [1, -1]) {
    const x = RAIL_X + s * gx;
    ironParts.push({ geo: xf(box(gT, girderTop - girderBot, len), x, (girderTop + girderBot) / 2, zc), color: C.girder });
    ironParts.push({ geo: xf(box(gT + 0.1, 0.09, len), x, girderTop - 0.045, zc), color: shade(C.girder, 1.12) });
    ironParts.push({ geo: xf(box(gT + 0.1, 0.09, len), x, girderBot + 0.045, zc), color: shade(C.girder, 1.05) });
    const ribs = Math.max(3, Math.round(len / 0.55));
    for (let i = 1; i < ribs; i++) {
      const z = zA + (len * i) / ribs;
      ironParts.push({ geo: xf(box(gT + 0.05, girderTop - girderBot - 0.2, 0.1), x, (girderTop + girderBot) / 2, z), color: shade(C.girder, 0.9) });
    }
    // 铭牌
    ironParts.push({ geo: xf(box(0.04, 0.2, 0.7), x + s * (gT / 2 + 0.03), deckTop - 0.42, zc + len * 0.22), color: 0xd8c9a8 });
  }
  // 横梁与斜撑
  const beams = Math.max(3, Math.round(len / 0.62));
  for (let i = 0; i <= beams; i++) {
    const z = zA + (len * i) / beams;
    ironParts.push({ geo: xf(box(gx * 2, 0.13, 0.16), RAIL_X, deckBot - 0.07, z), color: shade(C.girder, 0.86) });
  }
  for (let i = 0; i < beams; i++) {
    const z0i = zA + (len * i) / beams;
    const z1i = zA + (len * (i + 1)) / beams;
    const dz = z1i - z0i;
    const ang = Math.atan2(deckBot - 0.14 - (deckBot - 0.07), dz);
    const lenD = Math.hypot(dz, deckBot - 0.07 - (deckBot - 0.14));
    ironParts.push({
      geo: xf(box(0.08, 0.07, lenD), RAIL_X, (deckBot - 0.14 + deckBot - 0.07) / 2, (z0i + z1i) / 2, 0, 1, 1, 1, ang * (i % 2 ? 1 : -1)),
      color: shade(C.girder, 0.8),
    });
  }

  // 桥上人行道栏杆
  for (const s of [1, -1]) {
    const x = RAIL_X + s * (gx - 0.22);
    const postN = Math.max(4, Math.round(len / 0.62));
    for (let i = 0; i <= postN; i++) {
      const z = zA + (len * i) / postN;
      ironParts.push({ geo: xf(box(0.055, 0.36, 0.055), x, deckTop + 0.18, z), color: shade(C.girder, 0.95) });
    }
    ironParts.push({ geo: xf(box(0.05, 0.05, len), x, deckTop + 0.34, zc), color: shade(C.girder, 1.05) });
    ironParts.push({ geo: xf(box(0.04, 0.04, len), x, deckTop + 0.22, zc), color: shade(C.girder, 1.0) });
  }

  const stoneMesh = new THREE.Mesh(bake(stoneParts), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95 }));
  stoneMesh.castShadow = true;
  stoneMesh.receiveShadow = true;
  const ironMesh = new THREE.Mesh(bake(ironParts), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.62, metalness: 0.25 }));
  ironMesh.castShadow = true;
  ironMesh.receiveShadow = true;
  const timberMesh = new THREE.Mesh(bake(timberParts), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9 }));
  timberMesh.castShadow = true;
  timberMesh.receiveShadow = true;
  g.add(stoneMesh, ironMesh, timberMesh);
  void rng;
  return g;
}

/* ══════════════════ 公路石拱桥 ══════════════════ */
function buildRoadBridge(x, rng) {
  const g = new THREE.Group();
  g.name = 'road-bridge';
  const water = waterSpanAtX(x);
  const zc = (water.z0 + water.z1) / 2;
  const clear = (water.z1 - water.z0) + 0.5; // 净跨
  const a = clear / 2;
  const springY = WATER.bed - 0.18;
  const crownY = 0.62;
  const rise = crownY - springY;
  const ring = 0.52;
  const deckTop = 0.75;
  const halfW = 0.82;

  const stone = [];
  const deck = [];
  const cob = [];

  // 拱券
  const N = 13;
  for (let i = 0; i < N; i++) {
    const t0 = -Math.PI / 2 + (Math.PI * i) / N;
    const t1 = -Math.PI / 2 + (Math.PI * (i + 1)) / N;
    const tm = (t0 + t1) / 2;
    const zi = Math.sin(tm) * a;
    const yi = springY + Math.cos(tm) * rise;
    const nAng = Math.atan2(zi / a, (yi - springY) / rise);
    const yc = yi + Math.cos(tm) * ring * 0.5;
    const zc2 = zi + Math.sin(tm) * ring * 0.5;
    const segLen = (Math.PI * a) / N + 0.06;
    stone.push({
      geo: xf(box(halfW * 2 + 0.24, ring, segLen), x, yc, zc + zc2, 0, 1, 1, 1, -nAng),
      color: jitterHex(shade(C.stone, 0.9 + rng.f() * 0.2), rng, 0.05),
    });
  }
  // 拱上墙 + 桥台
  for (const s of [1, -1]) {
    const zz = zc + s * (a + 0.55);
    stone.push({ geo: xf(box(halfW * 2 + 0.24, 1.5, 1.1), x, 0.3, zz), color: C.stone });
    stone.push({ geo: xf(box(halfW * 2 + 0.5, 0.2, 1.5), x, 0.72, zz + s * 0.25), color: C.stoneDark });
  }
  // 桥面板
  deck.push({ geo: xf(box(halfW * 2 + 0.24, 0.16, clear + 1.9), x, deckTop - 0.08, zc), color: 0x6d6455 });
  // 桥面石板
  cob.push({ geo: xf(box(halfW * 2 - 0.06, 0.04, clear + 1.9), x, deckTop + 0.005, zc), color: 0x9a9184 });
  // 栏杆
  for (const s of [1, -1]) {
    const px = x + s * (halfW + 0.04);
    stone.push({ geo: xf(box(0.16, 0.34, clear + 1.9), px, deckTop + 0.17, zc), color: C.stoneDark });
    stone.push({ geo: xf(box(0.22, 0.07, clear + 1.9), px, deckTop + 0.37, zc), color: shade(C.stone, 1.05) });
  }

  const m1 = new THREE.Mesh(bake(stone), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95 }));
  m1.castShadow = true;
  m1.receiveShadow = true;
  const m2 = new THREE.Mesh(bake(deck), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95 }));
  m2.receiveShadow = true;
  const m3 = new THREE.Mesh(
    bake(cob),
    new THREE.MeshStandardMaterial({ map: cobbleDetail(), vertexColors: true, roughness: 0.95 })
  );
  m3.receiveShadow = true;
  g.add(m1, m2, m3);
  return g;
}

/* ══════════════════ 平交道口 ══════════════════ */
function buildLevelCrossing(rng) {
  const g = new THREE.Group();
  g.name = 'level-crossing';
  const trackZ = 8.2;
  const x = CROSSING_X;
  const deckTop = RAIL.ballastTop;
  const rw = 1.15; // 道路半宽
  const timber = [];
  const iron = [];

  // 道口铺板（枕木之间填木板）
  timber.push({ geo: xf(box(rw * 2 + 0.5, 0.08, 4.9), x, deckTop - 0.04, trackZ), color: 0x4d4234 });
  // 路面引道
  for (const s of [1, -1]) {
    const z0 = trackZ + s * 2.45;
    const z1 = trackZ + s * 3.5;
    const y0 = deckTop;
    const y1 = GROUND + 0.04;
    timber.push({
      geo: faces([
        [
          [x - rw, y0, z0],
          [x + rw, y0, z0],
          [x + rw, y1, z1],
          [x - rw, y1, z1],
        ],
      ]),
      color: 0x5a4f3f,
    });
  }
  // 护栏木栅
  for (const s of [1, -1]) {
    for (const sx of [1, -1]) {
      const px = x + sx * (rw + 0.45);
      for (let i = 0; i < 4; i++) {
        const z = trackZ + s * (2.1 + i * 0.62);
        timber.push({ geo: xf(box(0.1, 0.72, 0.1), px, deckTop - 0.28, z), color: 0x6b5b47 });
      }
    }
  }
  // 信号杆 + 交叉板 + 抬起的道口栏
  for (const s of [1, -1]) {
    for (const sx of [1, -1]) {
      const px = x + sx * (rw + 0.75);
      const pz = trackZ + s * 2.0;
      iron.push({ geo: xf(cyl(0.06, 0.07, 1.5, 8), px, deckTop + 0.55, pz), color: 0x4a4f52 });
      // 交叉板
      iron.push({ geo: xf(box(0.05, 0.05, 0.9), px, deckTop + 1.22, pz, 0.5), color: 0xe8e2d4 });
      iron.push({ geo: xf(box(0.05, 0.05, 0.9), px, deckTop + 1.22, pz, -0.5), color: 0xe8e2d4 });
      // 红灯
      iron.push({ geo: xf(sphereGeo(0.07), px, deckTop + 1.35, pz), color: 0x8a2b22 });
      // 抬起的道口栏（60°）
      const armLen = 1.5;
      const ang = s > 0 ? -0.95 : 0.95;
      iron.push({
        geo: xf(box(0.07, 0.07, armLen), px + sx * 0.28, deckTop + 0.5 + armLen * 0.42 * Math.cos(ang), pz + armLen * 0.42 * Math.sin(-ang), 0, 1, 1, 1, 0, 0),
        color: 0xe8e2d4,
      });
    }
  }

  const t = new THREE.Mesh(bake(timber), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.92 }));
  t.castShadow = true;
  t.receiveShadow = true;
  const i2 = new THREE.Mesh(bake(iron), new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.5, metalness: 0.4 }));
  i2.castShadow = true;
  g.add(t, i2);
  void rng;
  return g;
}

function sphereGeo(r) {
  return new THREE.SphereGeometry(r, 8, 6);
}
