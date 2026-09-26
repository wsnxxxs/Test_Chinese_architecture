/**
 * 铁路系统：闭合轨道曲线 → 道砟（跨河段断开）/ 双钢轨 / 枕木（实例化）
 * → 两座跨河钢桁梁桥 → 三处平交道口 → 轨旁信号。
 *
 * 关键高度：草地 0 → 道砟顶 0.11 → 枕木顶 0.19 → 轨面 0.31（列车基准面）
 */
import * as THREE from 'three';
import { PolylineLoop } from '../lib/curve.js';
import { TRACK_POINTS } from '../layout.js';
import { riverCenterX, riverHalfWidth } from '../lib/geometry.js';
import { offsetPolyline, sweepGeometry, buildMergedMesh, xform, box, roundedBox } from '../lib/mesh.js';
import { signTexture } from '../lib/textures.js';
import { registerEmissive, registerSprite } from '../glow.js';

export const RAIL_TOP = 0.31;
export const SLEEPER_TOP = 0.19;
export const BALLAST_TOP = 0.11;

const SAMPLES = 720;

/** 找出轨道与河道重叠的弧段（两处跨河） */
function findBridgeRuns(curve, samples) {
  const pts = [];
  for (let i = 0; i < samples; i++) pts.push(curve.getPoint(i / samples));
  const flags = pts.map((p) => Math.abs(p.x - riverCenterX(p.z)) < riverHalfWidth(p.z) + 0.1);

  // 环形找连续段
  const runs = [];
  let start = -1;
  for (let i = 0; i < samples; i++) {
    if (flags[i] && start < 0) start = i;
    if ((!flags[i] || i === samples - 1) && start >= 0) {
      const end = flags[i] && i === samples - 1 ? i : i - 1;
      runs.push([start, end]);
      start = -1;
    }
  }
  // 处理跨 0 点的段
  if (runs.length > 1 && runs[0][0] === 0 && runs[runs.length - 1][1] === samples - 1) {
    const first = runs.shift();
    const last = runs[runs.length - 1];
    runs[runs.length - 1] = [last[0], first[1] + samples];
  }
  return runs.map(([a, b]) => [a % samples, b % samples]);
}

export function buildTrack(mats) {
  const group = new THREE.Group();
  const curve = new PolylineLoop(TRACK_POINTS);
  const L = curve.totalLength;

  // —— 采样点与切线 ——
  const pts = [];
  for (let i = 0; i < SAMPLES; i++) {
    const p = curve.getPoint(i / SAMPLES);
    pts.push([p.x, p.z]);
  }

  const runs = findBridgeRuns(curve, SAMPLES);
  const inRun = new Uint8Array(SAMPLES);
  for (const [a, b] of runs) {
    let i = a;
    while (i !== (b + 1) % SAMPLES) {
      inRun[i] = 1;
      i = (i + 1) % SAMPLES;
    }
  }

  // —— 道砟（跨河段断开，桥台处收边） ——
  const ballastProfile = [
    [-1.55, 0.004],
    [1.55, 0.004],
    [1.15, BALLAST_TOP],
    [-1.15, BALLAST_TOP],
  ];
  const segments = [];
  let segStart = -1;
  for (let i = 0; i <= SAMPLES; i++) {
    const idx = i % SAMPLES;
    const blocked = i < SAMPLES && inRun[idx];
    if (!blocked && segStart < 0) segStart = i;
    if ((blocked || i === SAMPLES) && segStart >= 0) {
      const end = i - 1;
      if (end - segStart >= 2) segments.push([segStart, end]);
      segStart = -1;
    }
  }
  // 若第一段与最后一段相接（无桥时），合并
  if (segments.length > 1 && segments[0][0] === 0 && segments[segments.length - 1][1] === SAMPLES - 1) {
    const first = segments.shift();
    const last = segments[segments.length - 1];
    last[1] = first[1] + SAMPLES;
  }

  for (const [s0, s1] of segments) {
    const sub = [];
    for (let i = s0; i <= s1; i++) sub.push(pts[i % SAMPLES]);
    const geo = sweepGeometry(sub, ballastProfile, 0, { closed: false });
    const mesh = new THREE.Mesh(geo, mats.m.gravel);
    mesh.receiveShadow = true;
    group.add(mesh);
  }

  // —— 双钢轨（连续，跨河处由钢桥承托） ——
  const railProfile = [
    [-0.058, 0.185],
    [0.058, 0.185],
    [0.058, 0.215],
    [0.032, 0.235],
    [0.032, 0.31],
    [-0.032, 0.31],
    [-0.032, 0.235],
    [-0.058, 0.215],
  ];
  for (const side of [0.55, -0.55]) {
    const railPts = offsetPolyline(pts, side, true);
    const geo = sweepGeometry(railPts, railProfile, 0, { closed: true });
    const mesh = new THREE.Mesh(geo, mats.m.rail);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);
  }

  // —— 枕木（实例化，桥上不铺） ——
  const sleeperSpacing = 0.72;
  const sleeperCount = Math.floor(L / sleeperSpacing);
  const sleeperGeo = box(1.75, 0.09, 0.3);
  const sleepers = new THREE.InstancedMesh(sleeperGeo, mats.m.sleeper, sleeperCount);
  sleepers.castShadow = true;
  sleepers.receiveShadow = true;
  const dummy = new THREE.Object3D();
  let si = 0;
  for (let k = 0; k < sleeperCount; k++) {
    const t = (k * sleeperSpacing) / L;
    const i = Math.floor(t * SAMPLES) % SAMPLES;
    if (inRun[i]) continue;
    const p = curve.getPoint(t);
    const tan = curve.getTangent(t);
    dummy.position.set(p.x, 0.145, p.z);
    dummy.lookAt(p.x + tan.x, 0.145, p.z + tan.z);
    dummy.updateMatrix();
    sleepers.setMatrixAt(si++, dummy.matrix);
  }
  sleepers.count = si;
  sleepers.instanceMatrix.needsUpdate = true;
  group.add(sleepers);

  // —— 跨河钢桥 ——
  for (const [a, b] of runs) {
    const extend = Math.ceil(1.3 / (L / SAMPLES));
    let i0 = (a - extend + SAMPLES) % SAMPLES;
    let i1 = (b + extend) % SAMPLES;
    const sub = [];
    let i = i0;
    const span = ((i1 - i0 + SAMPLES) % SAMPLES) || SAMPLES;
    for (let k = 0; k <= span; k++) {
      sub.push(pts[(i0 + k) % SAMPLES]);
    }
    const first = sub[0];
    const last = sub[sub.length - 1];
    const dx = last[0] - first[0];
    const dz = last[1] - first[1];
    const len = Math.hypot(dx, dz);
    const yaw = Math.atan2(dx, dz);

    const bridge = new THREE.Group();
    bridge.position.set((first[0] + last[0]) / 2, 0, (first[1] + last[1]) / 2);
    bridge.rotation.y = yaw;

    const parts = [];
    // 桥面
    parts.push({ geo: xform(roundedBox(2.7, 0.15, len, 0.03, 1), { pos: [0, 0.115, 0] }), mat: mats.m.bridgeSteel });
    // 纵梁（两侧，轨面以上，封闭式板梁）
    for (const s of [1.24, -1.24]) {
      parts.push({ geo: xform(box(0.16, 0.62, len), { pos: [s, 0.11, 0] }), mat: mats.m.bridgeSteel });
      // 加劲肋
      const ribs = Math.max(4, Math.round(len / 1.6));
      for (let r = 0; r <= ribs; r++) {
        const z = -len / 2 + (len * r) / ribs;
        parts.push({ geo: xform(box(0.06, 0.6, 0.1), { pos: [s + Math.sign(s) * 0.1, 0.11, z] }), mat: mats.m.bridgeSteel });
      }
      // 上缘杆
      parts.push({ geo: xform(box(0.2, 0.08, len), { pos: [s, 0.44, 0] }), mat: mats.m.bridgeSteel });
    }
    // 端部石质桥台
    for (const s of [1, -1]) {
      parts.push({
        geo: xform(roundedBox(3.4, 0.8, 1.7, 0.06, 1), { pos: [0, -0.2, (s * (len / 2 - 0.55))] }),
        mat: mats.m.stone,
      });
    }
    const mesh = buildMergedMesh(parts, { castShadow: true, receiveShadow: true });
    bridge.add(mesh);
    group.add(bridge);
    void i;
    void i1;
  }

  return { group, curve, length: L, bridgeRuns: runs };
}

/** 平交道口：道口板 + 白线 + 标志牌 */
export function buildCrossings(mats, crossings, roads) {
  const group = new THREE.Group();
  const redMat = new THREE.MeshStandardMaterial({
    color: '#d8402c',
    roughness: 0.4,
    emissive: new THREE.Color('#ff4a2a'),
    emissiveIntensity: 0,
  });
  registerEmissive(redMat, 1.6);

  for (const c of crossings) {
    const road = roads.find((r) => {
      // 道口位于该道路折线上
      for (let i = 1; i < r.points.length; i++) {
        const a = r.points[i - 1];
        const b = r.points[i];
        const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
        for (let k = 0; k <= 40; k++) {
          const t = k / 40;
          const x = a[0] + (b[0] - a[0]) * t;
          const z = a[1] + (b[1] - a[1]) * t;
          if (Math.hypot(x - c.x, z - c.z) < 1.2) return true;
        }
      }
      return false;
    });
    const roadW = road ? road.width : 2.4;
    const trackAlongX = c.axis === 'x';

    const parts = [];
    // 道口板：沿道路方向 3.0，沿轨道方向覆盖道砟宽度
    const panelW = trackAlongX ? roadW : 3.0;
    const panelL = trackAlongX ? 3.0 : roadW;
    parts.push({
      geo: xform(box(panelW, 0.19, panelL), { pos: [0, 0.095, 0] }),
      mat: mats.m.asphalt,
    });
    // 白色边线（沿道路方向）
    const lineOffset = (roadW / 2 - 0.12) * (trackAlongX ? 1 : 0);
    const lineOffsetZ = (roadW / 2 - 0.12) * (trackAlongX ? 0 : 1);
    if (trackAlongX) {
      for (const s of [1, -1]) {
        parts.push({ geo: xform(box(0.14, 0.02, panelL), { pos: [s * lineOffset, 0.19, 0] }), mat: mats.m.whitePaint });
      }
    } else {
      for (const s of [1, -1]) {
        parts.push({ geo: xform(box(panelW, 0.02, 0.14), { pos: [0, 0.19, s * lineOffsetZ] }), mat: mats.m.whitePaint });
      }
    }

    // 标志杆 + 交叉牌
    const poleX = trackAlongX ? roadW / 2 + 0.7 : 2.0;
    const poleZ = trackAlongX ? 2.0 : roadW / 2 + 0.7;
    for (const s of [1, -1]) {
      const px = trackAlongX ? s * poleX : poleX;
      const pz = trackAlongX ? poleZ : s * poleZ;
      parts.push({ geo: xform(box(0.09, 1.7, 0.09), { pos: [px, 0.85, pz] }), mat: mats.m.lampPole });
      const rot = trackAlongX ? 0 : Math.PI / 2;
      parts.push({
        geo: xform(box(1.1, 0.22, 0.05), { pos: [px, 1.5, pz], rot: [0, rot + 0.6, 0] }),
        mat: mats.m.whitePaint,
      });
      parts.push({
        geo: xform(box(1.1, 0.22, 0.05), { pos: [px, 1.5, pz], rot: [0, rot - 0.6, 0] }),
        mat: mats.m.whitePaint,
      });
      // 警示灯
      parts.push({ geo: xform(new THREE.SphereGeometry(0.11, 10, 8), { pos: [px, 1.78, pz] }), mat: redMat });
    }

    const mesh = buildMergedMesh(parts, { castShadow: true, receiveShadow: true });
    const holder = new THREE.Group();
    holder.position.set(c.x, 0, c.z);
    holder.add(mesh);
    group.add(holder);
  }
  return { group, redMat };
}

/** 轨旁色灯信号 */
export function buildSignals(mats, signals) {
  const group = new THREE.Group();
  const headMats = [
    new THREE.MeshStandardMaterial({ color: '#2e7d46', roughness: 0.4, emissive: new THREE.Color('#4cff9a'), emissiveIntensity: 0 }),
    new THREE.MeshStandardMaterial({ color: '#5a2320', roughness: 0.4, emissive: new THREE.Color('#ff5a3a'), emissiveIntensity: 0 }),
  ];
  registerEmissive(headMats[0], 1.4);
  registerEmissive(headMats[1], 0.25); // 运行中亮绿灯，红灯常暗

  for (const s of signals) {
    const parts = [];
    parts.push({ geo: xform(box(0.1, 2.1, 0.1), { pos: [0, 1.05, 0] }), mat: mats.m.lampPole });
    parts.push({ geo: xform(roundedBox(0.4, 1.0, 0.24, 0.05, 1), { pos: [0, 2.1, 0] }), mat: mats.m.lampPole });
    parts.push({ geo: xform(new THREE.SphereGeometry(0.13, 10, 8), { pos: [0, 2.35, 0.13] }), mat: headMats[0] });
    parts.push({ geo: xform(new THREE.SphereGeometry(0.13, 10, 8), { pos: [0, 1.9, 0.13] }), mat: headMats[1] });
    parts.push({ geo: xform(box(0.6, 0.06, 0.3), { pos: [0, 0.03, 0] }), mat: mats.m.stone });
    const mesh = buildMergedMesh(parts, { castShadow: true, receiveShadow: true });
    const holder = new THREE.Group();
    holder.position.set(s.x, 0, s.z);
    holder.rotation.y = s.rot;
    holder.add(mesh);
    group.add(holder);
  }
  return { group };
}

/** 站台（含雨棚、站牌、站台灯） —— 夜景发光登记 */
export function buildPlatform(mats, platform) {
  const group = new THREE.Group();
  const parts = [];

  // 站台主体
  parts.push({ geo: xform(roundedBox(platform.w, 0.3, platform.d, 0.05, 1), { pos: [0, 0.15, 0] }), mat: mats.m.platform });
  // 安全线
  parts.push({
    geo: xform(box(platform.w - 0.4, 0.02, 0.16), { pos: [0, 0.31, -platform.d / 2 + 0.14] }),
    mat: mats.m.yellowPaint,
  });
  // 台阶（南端）
  parts.push({ geo: xform(box(1.4, 0.16, 0.5), { pos: [platform.w / 2 - 0.4, 0.08, platform.d / 2 + 0.22] }), mat: mats.m.stone });

  // 雨棚：立柱 + 顶板 + 檐口
  const canopyZ = -0.15;
  const postXs = [-platform.w / 2 + 1.4, -platform.w / 6, platform.w / 6, platform.w / 2 - 1.4];
  for (const px of postXs) {
    parts.push({ geo: xform(box(0.12, 1.75, 0.12), { pos: [px, 0.3 + 0.875, canopyZ - 0.35] }), mat: mats.m.lampPole });
  }
  parts.push({
    geo: xform(roundedBox(platform.w - 0.6, 0.1, 1.9, 0.03, 1), { pos: [0, 2.1, canopyZ - 0.2] }),
    mat: mats.m.roofCanopy || mats.m.redPaint,
  });
  parts.push({
    geo: xform(box(platform.w - 0.4, 0.16, 0.08), { pos: [0, 2.0, canopyZ + 0.74] }),
    mat: mats.m.trim,
  });

  const mesh = buildMergedMesh(parts, { castShadow: true, receiveShadow: true });
  const holder = new THREE.Group();
  holder.position.set(platform.x, 0, platform.z);
  holder.add(mesh);

  // 站名牌（雨棚下）
  const nameTex = signTexture('云 岭 镇', { w: 640, h: 176, bg: '#17324a', fg: '#f4e7c8', font: 'bold 104px "Microsoft YaHei", sans-serif' });
  const board = new THREE.Mesh(
    new THREE.PlaneGeometry(3.4, 0.93),
    new THREE.MeshStandardMaterial({ map: nameTex, roughness: 0.6, metalness: 0.1, side: THREE.DoubleSide })
  );
  board.position.set(platform.x - 0.5, 1.62, platform.z - 0.15 + 0.72);
  holder.add(board);

  // 站台灯柱（3 盏，夜里发光）
  const glowTex = mats.tex.glow;
  for (const px of [-platform.w / 2 + 2.2, 0, platform.w / 2 - 2.2]) {
    const lampParts = [];
    lampParts.push({ geo: xform(box(0.1, 2.4, 0.1), { pos: [0, 1.2, 0] }), mat: mats.m.lampPole });
    lampParts.push({ geo: xform(new THREE.SphereGeometry(0.17, 12, 10), { pos: [0, 2.45, 0] }), mat: mats.m.bulb });
    lampParts.push({ geo: xform(roundedBox(0.5, 0.1, 0.5, 0.04, 1), { pos: [0, 2.6, 0] }), mat: mats.m.lampPole });
    const lampMesh = buildMergedMesh(lampParts, { castShadow: true, receiveShadow: false });
    const lamp = new THREE.Group();
    lamp.position.set(px, 0, platform.d / 2 - 0.35);
    lamp.add(lampMesh);
    const sprite = new THREE.Sprite(
      new THREE.SpriteMaterial({ map: glowTex, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false })
    );
    sprite.scale.set(2.6, 2.6, 1);
    sprite.position.set(px, 2.45, platform.d / 2 - 0.35);
    registerSprite(sprite, 0.85);
    holder.add(lamp);
    holder.add(sprite);
  }

  group.add(holder);
  return { group };
}
