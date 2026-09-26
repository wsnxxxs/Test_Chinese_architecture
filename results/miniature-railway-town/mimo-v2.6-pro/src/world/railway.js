/**
 * 铁路：闭合轨道曲线 + 道砟/枕木/钢轨 + 两座跨河桥 + 附属结构。
 * 曲线按弧长参数化，列车各节车厢按弧长位置独立取姿态。
 */
import * as THREE from 'three';
import { TRACK_POINTS, BRIDGES, STATION } from '../config.js';
import { sampleCurve, buildProfile } from '../lib/geo.js';
import { makeGravelTexture } from '../lib/textures.js';

const RAIL_PROFILE = [
  [-0.034, 0.0],
  [0.034, 0.0],
  [0.034, -0.018],
  [0.013, -0.032],
  [0.013, -0.058],
  [0.032, -0.075],
  [-0.032, -0.075],
  [-0.013, -0.058],
  [-0.013, -0.032],
  [-0.034, -0.018],
];

const BALLAST_PROFILE = [
  [-0.62, -0.175],
  [0.62, -0.175],
  [0.5, -0.105],
  [-0.5, -0.105],
];

function findArcAt(curve, x, z, length) {
  let best = 0;
  let bestD = Infinity;
  const N = 2400;
  for (let i = 0; i < N; i++) {
    const u = i / N;
    const p = curve.getPointAt(u);
    const d = (p.x - x) ** 2 + (p.z - z) ** 2;
    if (d < bestD) {
      bestD = d;
      best = u * length;
    }
  }
  return best;
}

function buildBallast(curve, samples) {
  const tex = makeGravelTexture({ repeat: [1, 1] });
  const geo = buildProfile(samples, BALLAST_PROFILE, { vScale: 0.75 });
  const mat = new THREE.MeshStandardMaterial({ map: tex, color: 0xa79c8d, roughness: 1 });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.receiveShadow = true;
  mesh.castShadow = true;
  return mesh;
}

function buildRails(samples) {
  const group = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial({
    color: 0x76767e,
    roughness: 0.42,
    metalness: 0.62,
  });
  for (const side of [-1, 1]) {
    const profile = RAIL_PROFILE.map(([lat, y]) => [lat + side * 0.31, y]);
    const mesh = new THREE.Mesh(buildProfile(samples, profile, { capEnds: false }), mat);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);
  }
  return group;
}

function buildTies(curve, length) {
  const spacing = 0.335;
  const count = Math.floor(length / spacing);
  const geo = new THREE.BoxGeometry(0.82, 0.055, 0.17);
  const mat = new THREE.MeshStandardMaterial({ color: 0x5c4531, roughness: 0.92 });
  const inst = new THREE.InstancedMesh(geo, mat, count);
  const dummy = new THREE.Object3D();
  for (let i = 0; i < count; i++) {
    const s = (i / count) * length;
    const u = s / length;
    const p = curve.getPointAt(u);
    const t = curve.getTangentAt(u).normalize();
    dummy.position.set(p.x, p.y - 0.1025, p.z);
    dummy.rotation.set(0, Math.atan2(t.x, t.z), 0);
    dummy.updateMatrix();
    inst.setMatrixAt(i, dummy.matrix);
  }
  inst.instanceMatrix.needsUpdate = true;
  inst.castShadow = true;
  inst.receiveShadow = true;
  return inst;
}

/** 石拱桥（桥 A）：两孔分段拱 + 石栏 */
function buildArchBridge(curve, info) {
  const group = new THREE.Group();
  const [cx, cz] = info.center;
  const s = findArcAt(curve, cx, cz, curve.getLength());
  const p = curve.getPointAt(s / curve.getLength());
  const tangent = curve.getTangentAt(s / curve.getLength()).normalize();
  group.position.copy(p);
  group.rotation.y = Math.atan2(tangent.x, tangent.z);

  const L = info.length;
  const stone = new THREE.MeshStandardMaterial({ color: 0xb9ab94, roughness: 0.92 });
  const stoneDark = new THREE.MeshStandardMaterial({ color: 0x9c8d76, roughness: 0.95 });

  // 拱墙（shape: u 沿轨道、v 高度；挤出后旋转到局部坐标）
  const shape = new THREE.Shape();
  shape.moveTo(-L / 2, -0.62);
  shape.lineTo(L / 2, -0.62);
  shape.lineTo(L / 2, -0.22);
  shape.lineTo(-L / 2, -0.22);
  shape.closePath();

  for (const u of [-1.06, 1.06]) {
    const hole = new THREE.Path();
    hole.moveTo(u - 0.56, -0.61);
    hole.lineTo(u + 0.56, -0.61);
    hole.lineTo(u + 0.56, -0.46);
    hole.quadraticCurveTo(u, -0.1, u - 0.56, -0.46);
    hole.lineTo(u - 0.56, -0.61);
    shape.holes.push(hole);
  }

  const wallGeo = new THREE.ExtrudeGeometry(shape, {
    depth: 0.13,
    bevelEnabled: true,
    bevelThickness: 0.012,
    bevelSize: 0.012,
    bevelSegments: 1,
    curveSegments: 14,
  });
  wallGeo.rotateY(Math.PI / 2);

  for (const side of [-1, 1]) {
    const wall = new THREE.Mesh(wallGeo, stone);
    wall.position.x = side * 0.62;
    wall.castShadow = true;
    wall.receiveShadow = true;
    group.add(wall);
  }

  // 桥面
  const deck = new THREE.Mesh(new THREE.BoxGeometry(1.42, 0.09, L), stoneDark);
  deck.position.y = -0.185;
  deck.castShadow = true;
  deck.receiveShadow = true;
  group.add(deck);

  // 石栏
  for (const side of [-1, 1]) {
    const parapet = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.22, L + 0.1), stone);
    parapet.position.set(side * 0.66, -0.06, 0);
    parapet.castShadow = true;
    parapet.receiveShadow = true;
    group.add(parapet);
  }

  // 桥台
  for (const end of [-1, 1]) {
    const abut = new THREE.Mesh(new THREE.BoxGeometry(1.75, 0.66, 0.42), stoneDark);
    abut.position.set(0, -0.42, end * (L / 2 + 0.16));
    abut.castShadow = true;
    abut.receiveShadow = true;
    group.add(abut);
    const wingL = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.5, 0.9), stone);
    wingL.position.set(-0.8, -0.5, end * (L / 2 + 0.52));
    wingL.castShadow = true;
    group.add(wingL);
    const wingR = wingL.clone();
    wingR.position.x = 0.8;
    group.add(wingR);
  }
  return group;
}

/** 钢桁架桥（桥 B）：穿式桁架 + 钢桥面 */
function buildTrussBridge(curve, info) {
  const group = new THREE.Group();
  const [cx, cz] = info.center;
  const length = curve.getLength();
  const s = findArcAt(curve, cx, cz, length);
  const p = curve.getPointAt(s / length);
  const tangent = curve.getTangentAt(s / length).normalize();
  group.position.copy(p);
  group.rotation.y = Math.atan2(tangent.x, tangent.z);

  const L = info.length;
  const steel = new THREE.MeshStandardMaterial({ color: 0x35596b, roughness: 0.52, metalness: 0.55 });
  const steelDark = new THREE.MeshStandardMaterial({ color: 0x27414f, roughness: 0.6, metalness: 0.5 });
  const stone = new THREE.MeshStandardMaterial({ color: 0xa4967f, roughness: 0.95 });

  const add = (geo, mat, x, y, z, rx = 0, ry = 0) => {
    const m = new THREE.Mesh(geo, mat);
    m.position.set(x, y, z);
    m.rotation.set(rx, ry, 0);
    m.castShadow = true;
    m.receiveShadow = true;
    group.add(m);
    return m;
  };

  // 桥面与纵梁
  add(new THREE.BoxGeometry(1.5, 0.09, L), steelDark, 0, -0.19, 0);
  for (const side of [-1, 1]) {
    add(new THREE.BoxGeometry(0.1, 0.16, L), steel, side * 0.66, -0.27, 0);
  }

  // 两侧桁架
  for (const side of [-1, 1]) {
    const x = side * 0.72;
    add(new THREE.BoxGeometry(0.085, 0.085, L), steel, x, -0.16, 0); // 下弦
    add(new THREE.BoxGeometry(0.1, 0.1, L), steel, x, 0.52, 0); // 上弦
    const panels = 4;
    for (let i = 0; i <= panels; i++) {
      const z = -L / 2 + (i / panels) * L;
      add(new THREE.BoxGeometry(0.07, 0.68, 0.07), steel, x, 0.18, z); // 竖杆
      if (i < panels) {
        const zc = z + L / panels / 2;
        const diag = new THREE.BoxGeometry(0.055, 0.86, 0.055);
        const tilt = Math.atan2(L / panels, 0.68) * 0.86;
        add(diag, steel, x, 0.18, zc, (i % 2 === 0 ? 1 : -1) * tilt * 0.62);
      }
    }
  }

  // 上平联
  for (let i = 0; i <= 3; i++) {
    const z = -L / 2 + (i / 3) * L;
    add(new THREE.BoxGeometry(1.5, 0.055, 0.055), steel, 0, 0.52, z);
  }
  for (const side of [-1, 1]) {
    const brace = new THREE.BoxGeometry(1.62, 0.045, 0.045);
    add(brace, steelDark, 0, 0.55, 0, 0, side * 0.36);
  }

  // 桥台
  for (const end of [-1, 1]) {
    const abut = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.72, 0.5), stone);
    abut.position.set(0, -0.46, end * (L / 2 + 0.2));
    abut.castShadow = true;
    abut.receiveShadow = true;
    group.add(abut);
  }
  return group;
}

/** 构建整条铁路 */
export function buildRailway(scene) {
  const points = TRACK_POINTS.map((p) => new THREE.Vector3(p[0], p[1], p[2]));
  const curve = new THREE.CatmullRomCurve3(points, true, 'catmullrom', 0.5);
  curve.arcLengthDivisions = 1600;
  const length = curve.getLength();
  const samples = sampleCurve(curve, 560, { closed: true });

  const group = new THREE.Group();
  group.name = 'railway';
  group.add(buildBallast(curve, samples));
  group.add(buildRails(samples));
  group.add(buildTies(curve, length));
  group.add(buildArchBridge(curve, { ...BRIDGES.A }));
  group.add(buildTrussBridge(curve, { ...BRIDGES.B }));

  scene.add(group);

  return {
    group,
    curve,
    length,
    stationS: findArcAt(curve, STATION.stopX, 5.85, length),
    getPose(s) {
      const u = (((s % length) + length) % length) / length;
      return {
        pos: curve.getPointAt(u),
        tangent: curve.getTangentAt(u).normalize(),
      };
    },
  };
}
