import * as THREE from 'three';
import { makeRibbon } from './ribbon.js';

export const GROUND_Y = 0.6;      // 草皮顶面高度
export const RAIL_Y = GROUND_Y + 0.2;

// 轨道走向控制点（闭合，顺时针行驶；南侧直道为桥梁位置）
const TRACK_CTRL = [
  [-22, -8],
  [-20, -13],
  [-12, -14.2],
  [0, -14],
  [12, -12],
  [20, -6],
  [22, 2],
  [18, 9],
  [8, 13],
  [-4, 13.4],
  [-14, 10.5],
  [-22, 3],
];

export function createTrack(scene, mats) {
  const curve = new THREE.CatmullRomCurve3(
    TRACK_CTRL.map(([x, z]) => new THREE.Vector3(x, RAIL_Y, z)),
    true,
    'centripetal'
  );
  const length = curve.getLength();

  // 弧长参数查找表
  const LUT_N = 1024;
  const lut = [];
  for (let i = 0; i <= LUT_N; i++) {
    const u = i / LUT_N;
    const p = curve.getPointAt(u);
    lut.push({ x: p.x, z: p.z });
  }

  // 在 LUT 中找离给定坐标最近的弧长 s
  const findS = (x, z) => {
    let best = 0;
    let bd = Infinity;
    for (let i = 0; i < LUT_N; i++) {
      const d = (lut[i].x - x) ** 2 + (lut[i].z - z) ** 2;
      if (d < bd) { bd = d; best = i; }
    }
    return (best / LUT_N) * length;
  };

  // 返回弧长 s 处的位置、切向、水平法向
  const tmpP = new THREE.Vector3();
  const tmpT = new THREE.Vector3();
  function frame(s, out = {}) {
    const u = (((s % length) + length) % length) / length;
    curve.getPointAt(u, tmpP);
    curve.getTangentAt(u, tmpT);
    out.x = tmpP.x;
    out.y = tmpP.y;
    out.z = tmpP.z;
    out.tx = tmpT.x;
    out.tz = tmpT.z;
    out.nx = -tmpT.z;
    out.nz = tmpT.x;
    out.yaw = Math.atan2(-tmpT.z, tmpT.x);
    return out;
  }

  // ---- 道砟床 ----
  const ballastSamples = [];
  for (let i = 0; i < LUT_N; i++) ballastSamples.push(new THREE.Vector3(lut[i].x, 0, lut[i].z));
  const ballast = new THREE.Mesh(
    makeRibbon(ballastSamples, { closed: true, width: 2.1, y: GROUND_Y + 0.045, uvScale: 1.2 }),
    mats.ballast
  );
  ballast.receiveShadow = true;
  scene.add(ballast);

  // ---- 枕木（实例化） ----
  const SPACING = 0.55;
  const sleeperCount = Math.floor(length / SPACING);
  const sleeperGeo = new THREE.BoxGeometry(0.18, 0.1, 1.5);
  const sleepers = new THREE.InstancedMesh(sleeperGeo, mats.sleeper, sleeperCount);
  sleepers.castShadow = true;
  sleepers.receiveShadow = true;
  const dummy = new THREE.Object3D();
  const f = frame;
  const fr = {};
  for (let i = 0; i < sleeperCount; i++) {
    f(i * SPACING, fr);
    dummy.position.set(fr.x, GROUND_Y + 0.135, fr.z);
    dummy.rotation.set(0, fr.yaw, 0);
    dummy.updateMatrix();
    sleepers.setMatrixAt(i, dummy.matrix);
  }
  scene.add(sleepers);

  // ---- 两根钢轨（沿偏移曲线生成细管） ----
  const GAUGE = 1.0;
  for (const side of [-1, 1]) {
    const pts = [];
    for (let i = 0; i < 480; i++) {
      f((i / 480) * length, fr);
      pts.push(new THREE.Vector3(fr.x + fr.nx * GAUGE / 2 * side, RAIL_Y, fr.z + fr.nz * GAUGE / 2 * side));
    }
    const railCurve = new THREE.CatmullRomCurve3(pts, true, 'centripetal');
    const rail = new THREE.Mesh(new THREE.TubeGeometry(railCurve, 520, 0.05, 6, true), mats.rail);
    rail.castShadow = true;
    scene.add(rail);
  }

  const stopS = findS(8, 12.6);       // 车站停靠点（北侧直道）
  const bridgeS = findS(-12, -14.2);  // 跨河桥位置（南侧直道）
  const crossingS = findS(13.5, -12); // 道路平交道口

  return {
    curve, length, frame, lut, LUT_N,
    stopS, bridgeS, crossingS,
  };
}
