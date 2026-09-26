import * as THREE from 'three';
import { GROUND_Y } from './world.js';

export const TRACK_Y = 1.4; // 轨面高度

// 闭合轨道曲线（XZ 平面，跨河段在 z=-6）
export function createTrackCurve() {
  const pts = [
    [-10, -6], [10, -6], [22, -6], [28, 2], [28, 14],
    [18, 20], [-18, 20], [-28, 14], [-28, 2], [-22, -6]
  ].map(([x, z]) => new THREE.Vector3(x, TRACK_Y, z));
  return new THREE.CatmullRomCurve3(pts, true, 'centripetal', 0.5);
}

export function buildTrack(scene) {
  const curve = createTrackCurve();
  const len = curve.getLength();

  // 车站中心对应的曲线参数（轨道 z=20 直线段中点 x=0）
  let uStation = 0;
  let best = Infinity;
  for (let i = 0; i < 2000; i++) {
    const u = i / 2000;
    const p = curve.getPointAt(u);
    const d = p.x * p.x + (p.z - 20) * (p.z - 20);
    if (d < best) { best = d; uStation = u; }
  }

  // 轨枕（InstancedMesh）
  const tieGeo = new THREE.BoxGeometry(1.9, 0.12, 0.28);
  const tieMat = new THREE.MeshStandardMaterial({ color: 0x6b4a2f, roughness: 0.9 });
  const nTies = Math.floor(len / 0.85);
  const ties = new THREE.InstancedMesh(tieGeo, tieMat, nTies);
  const m4 = new THREE.Matrix4();
  const up = new THREE.Vector3(0, 1, 0);
  const tan = new THREE.Vector3();
  const nor = new THREE.Vector3();
  const xAxis = new THREE.Vector3();
  const zAxis = new THREE.Vector3();
  for (let i = 0; i < nTies; i++) {
    const u = i / nTies;
    const p = curve.getPointAt(u);
    curve.getTangentAt(u, tan);
    nor.set(tan.z, 0, -tan.x).normalize();
    xAxis.copy(nor);
    zAxis.copy(tan);
    m4.makeBasis(xAxis, up, zAxis);
    m4.setPosition(p.x, GROUND_Y + 0.06, p.z);
    ties.setMatrixAt(i, m4);
  }
  ties.receiveShadow = true;
  scene.add(ties);

  // 钢轨（两条，沿法线偏移）
  const railMat = new THREE.MeshStandardMaterial({ color: 0x8a8a8a, roughness: 0.35, metalness: 0.65 });
  for (const off of [-0.7, 0.7]) {
    const pts = [];
    const p = new THREE.Vector3();
    for (let i = 0; i < 240; i++) {
      const u = i / 240;
      curve.getPointAt(u, p);
      curve.getTangentAt(u, tan);
      nor.set(tan.z, 0, -tan.x).normalize();
      pts.push(new THREE.Vector3(p.x + nor.x * off, GROUND_Y + 0.16, p.z + nor.z * off));
    }
    const railCurve = new THREE.CatmullRomCurve3(pts, true);
    const railGeo = new THREE.TubeGeometry(railCurve, 240, 0.05, 8, true);
    const rail = new THREE.Mesh(railGeo, railMat);
    rail.castShadow = true;
    scene.add(rail);
  }

  // 跨河铁路桥（桥面与地面齐平 y=1.2，轨道从上方穿过）
  const bridge = new THREE.Group();
  const deckMat = new THREE.MeshStandardMaterial({ color: 0x7d7d7d, roughness: 0.85 });
  const deck = new THREE.Mesh(new THREE.BoxGeometry(24, 0.3, 2.6), deckMat);
  deck.position.set(0, 1.05, -6);
  deck.castShadow = true;
  deck.receiveShadow = true;
  bridge.add(deck);

  const pierMat = new THREE.MeshStandardMaterial({ color: 0x6e6e6e, roughness: 0.95 });
  for (const px of [-6, 6]) {
    const pier = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.95, 1.4), pierMat);
    pier.position.set(px, 0.78, -6);
    pier.castShadow = true;
    pier.receiveShadow = true;
    bridge.add(pier);
  }

  const barMat = new THREE.MeshStandardMaterial({ color: 0x4c4c4c, roughness: 0.7 });
  for (const bz of [-7.25, -4.75]) {
    const bar = new THREE.Mesh(new THREE.BoxGeometry(24, 0.09, 0.09), barMat);
    bar.position.set(0, 1.5, bz);
    bar.castShadow = true;
    bridge.add(bar);
    for (const bx of [-11, -5.5, 0, 5.5, 11]) {
      const post = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.35, 0.09), barMat);
      post.position.set(bx, 1.32, bz);
      bridge.add(post);
    }
  }
  scene.add(bridge);

  return { curve, uStation, len };
}
