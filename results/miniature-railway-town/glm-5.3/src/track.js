// 轨道系统：闭合环线曲线（直线段 + 圆弧段）、道砟、轨枕、铁轨、跨河铁路桥、平交道口
import * as THREE from 'three';
import { sampleCurve, sideVectors, sectionRibbon } from './ribbon.js';

export const TRACK = {
  LOOP: { hx: 16, hz: 9.5, r: 5 }, // 环线半宽 / 半深 / 转角半径
  RAIL_TOP: 0.59, // 轨面高度（列车原点）
  GAUGE_HALF: 0.42, // 轨距半宽
};

// XZ 平面圆弧曲线（用于转角）
class ArcXZ extends THREE.Curve {
  constructor(cx, cz, r, a0, a1) {
    super();
    this.cx = cx;
    this.cz = cz;
    this.r = r;
    this.a0 = a0;
    this.a1 = a1;
  }
  getPoint(t, target = new THREE.Vector3()) {
    const a = this.a0 + (this.a1 - this.a0) * t;
    return target.set(this.cx + Math.cos(a) * this.r, 0, this.cz + Math.sin(a) * this.r);
  }
}

/**
 * 闭合环线：从车站（西直段中点，u=0）出发，
 * 经西北角 -> 北直段（跨河桥1） -> 东北角 -> 东直段 -> 东南角
 * -> 南直段（跨河桥2） -> 西南角 -> 回到车站。
 */
export function buildTrackCurve() {
  const { hx, hz, r } = TRACK.LOOP;
  const cx = hx - r;
  const cz = hz - r;
  const path = new THREE.CurvePath();
  const line = (x0, z0, x1, z1) =>
    path.add(new THREE.LineCurve3(new THREE.Vector3(x0, 0, z0), new THREE.Vector3(x1, 0, z1)));
  const arc = (ccx, ccz, a0, a1) => path.add(new ArcXZ(ccx, ccz, r, a0, a1));
  const PI = Math.PI;

  line(-hx, 0, -hx, -cz); // 车站 -> 西北
  arc(-cx, -cz, PI, PI * 1.5); // 西北角
  line(-cx, -hz, cx, -hz); // 北直段（跨河）
  arc(cx, -cz, PI * 1.5, PI * 2); // 东北角
  line(hx, -cz, hx, cz); // 东直段（平交道口）
  arc(cx, cz, 0, PI / 2); // 东南角
  line(cx, hz, -cx, hz); // 南直段（跨河）
  arc(-cx, cz, PI / 2, PI); // 西南角
  line(-hx, cz, -hx, 0); // 回到车站
  return path;
}

export function buildTrack(scene, curve, river) {
  const group = new THREE.Group();
  scene.add(group);
  const length = curve.getLength();

  // ---------- 道砟（梯形截面缎带，闭合） ----------
  const ballastPts = sampleCurve(curve, 320, true);
  const ballastSides = sideVectors(ballastPts, true);
  const ballast = new THREE.Mesh(
    sectionRibbon(
      ballastPts,
      ballastSides,
      [
        { x: -1.05, y: 0.29 },
        { x: -0.72, y: 0.45 },
        { x: 0.72, y: 0.45 },
        { x: 1.05, y: 0.29 },
      ],
      true
    ),
    new THREE.MeshStandardMaterial({ color: 0x9a8f80, roughness: 1, side: THREE.DoubleSide })
  );
  ballast.receiveShadow = true;
  group.add(ballast);

  // ---------- 轨枕（实例化） ----------
  const step = 0.52;
  const nSleepers = Math.floor(length / step);
  const sleeperGeo = new THREE.BoxGeometry(0.72, 0.05, 0.22);
  const sleeperMat = new THREE.MeshStandardMaterial({ color: 0x6b5844, roughness: 1 });
  const sleepers = new THREE.InstancedMesh(sleeperGeo, sleeperMat, nSleepers);
  sleepers.castShadow = true;
  sleepers.receiveShadow = true;
  {
    const m = new THREE.Matrix4();
    const pos = new THREE.Vector3();
    const tan = new THREE.Vector3();
    const quat = new THREE.Quaternion();
    const up = new THREE.Vector3(0, 1, 0);
    for (let i = 0; i < nSleepers; i++) {
      const u = (i * step) / length;
      curve.getPointAt(u, pos);
      curve.getTangentAt(u, tan);
      quat.setFromAxisAngle(up, Math.atan2(tan.x, tan.z));
      m.compose(new THREE.Vector3(pos.x, 0.475, pos.z), quat, new THREE.Vector3(1, 1, 1));
      sleepers.setMatrixAt(i, m);
    }
    sleepers.instanceMatrix.needsUpdate = true;
  }
  group.add(sleepers);

  // ---------- 铁轨（左右两条偏移管） ----------
  const railMat = new THREE.MeshStandardMaterial({
    color: 0x5c6068,
    roughness: 0.4,
    metalness: 0.6,
  });
  for (const off of [-TRACK.GAUGE_HALF, TRACK.GAUGE_HALF]) {
    const pts = ballastPts.map((p, i) =>
      new THREE.Vector3(p.x + ballastSides[i].x * off, 0.545, p.z + ballastSides[i].z * off)
    );
    const railCurve = new THREE.CatmullRomCurve3(pts, true, 'catmullrom', 0.5);
    const rail = new THREE.Mesh(new THREE.TubeGeometry(railCurve, 560, 0.045, 5, true), railMat);
    rail.receiveShadow = true;
    group.add(rail);
  }

  // ---------- 跨河铁路桥（下承式钢板梁桥 ×2） ----------
  const girderMat = new THREE.MeshStandardMaterial({ color: 0x8a4130, roughness: 0.7 });
  const stoneMat = new THREE.MeshStandardMaterial({ color: 0x8f8a80, roughness: 0.95 });
  const railWhiteMat = new THREE.MeshStandardMaterial({ color: 0xd8d3c8, roughness: 0.6 });
  for (const z of [-TRACK.LOOP.hz, TRACK.LOOP.hz]) {
    const cx = river.crossXAt(z);
    const bridge = new THREE.Group();
    // 主梁（轨道两侧）
    for (const dz of [-1.24, 1.24]) {
      const girder = new THREE.Mesh(new THREE.BoxGeometry(7.2, 0.5, 0.18), girderMat);
      girder.position.set(cx, 0.31, z + dz);
      girder.castShadow = true;
      bridge.add(girder);
      const handrail = new THREE.Mesh(new THREE.BoxGeometry(7.2, 0.05, 0.06), railWhiteMat);
      handrail.position.set(cx, 0.6, z + dz);
      bridge.add(handrail);
    }
    // 桥面底板（承托道砟）
    const floor = new THREE.Mesh(new THREE.BoxGeometry(7.2, 0.14, 2.15), stoneMat);
    floor.position.set(cx, 0.22, z);
    floor.castShadow = true;
    bridge.add(floor);
    // 河中桥墩与两岸桥台
    for (const dx of [-1.1, 1.1]) {
      const pier = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.3, 0.9), stoneMat);
      pier.position.set(cx + dx, 0.0, z);
      pier.castShadow = true;
      bridge.add(pier);
    }
    for (const dx of [-3.7, 3.7]) {
      const abut = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.3, 2.4), stoneMat);
      abut.position.set(cx + dx, 0.15, z);
      bridge.add(abut);
    }
    group.add(bridge);
  }

  // ---------- 平交道口（东直段，主街穿过轨道处） ----------
  const crossZ = 2.2;
  const postMat = new THREE.MeshStandardMaterial({ color: 0x3a3f3a, roughness: 0.8 });
  const crossMat = new THREE.MeshStandardMaterial({ color: 0xf2ede2, roughness: 0.6 });
  for (const px of [14.0, 18.0]) {
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.06, 1.4, 8), postMat);
    post.position.set(px, 0.3 + 0.7, crossZ + 1.35);
    post.castShadow = true;
    group.add(post);
    for (const rz of [0.6, -0.6]) {
      const arm = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.08, 0.04), crossMat);
      arm.position.set(px, 1.42, crossZ + 1.35);
      arm.rotation.z = rz;
      group.add(arm);
    }
  }

  return group;
}
