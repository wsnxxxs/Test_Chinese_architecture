/**
 * 沙盘底座：桌面 → 木质底座（有厚度）→ 木边框 → 内场地形（挖出河道）
 * → 河床 / 水面 / 池塘 / 农田。
 */
import * as THREE from 'three';
import { flatRibbonGeometry, roundedBox, buildMergedMesh, xform, box } from '../lib/mesh.js';
import { riverCenterX, riverHalfWidth } from '../lib/geometry.js';
import { POND, FIELDS } from '../layout.js';
import { signTexture } from '../lib/textures.js';

const FIELD = { xMin: -27.5, xMax: 27.5, zMin: -19.5, zMax: 19.5 };
const GROUND_DEPTH = 1.7;

function bankLine(edgeFn, fromZ, toZ, steps = 90) {
  const pts = [];
  for (let i = 0; i <= steps; i++) {
    const z = fromZ + ((toZ - fromZ) * i) / steps;
    pts.push([edgeFn(z), z]);
  }
  return pts;
}

function shapeFrom(points) {
  const s = new THREE.Shape();
  s.moveTo(points[0][0], points[0][1]);
  for (let i = 1; i < points.length; i++) s.lineTo(points[i][0], points[i][1]);
  s.closePath();
  return s;
}

function groundPiece(points, mats) {
  const geo = new THREE.ExtrudeGeometry(shapeFrom(points), {
    depth: GROUND_DEPTH,
    bevelEnabled: false,
    curveSegments: 4,
  });
  const mesh = new THREE.Mesh(geo, [mats.m.grass, mats.m.dirt]);
  mesh.rotation.x = Math.PI / 2; // shape(x,z) → 世界；挤出方向 → -Y
  mesh.castShadow = false;
  mesh.receiveShadow = true;
  return mesh;
}

export function buildBase(mats) {
  const group = new THREE.Group();

  // —— 桌面 ——
  const desk = new THREE.Mesh(new THREE.PlaneGeometry(320, 320), mats.m.desk);
  desk.rotation.x = -Math.PI / 2;
  desk.position.y = -6.05;
  desk.receiveShadow = true;
  group.add(desk);

  // —— 木质底座（厚度 + 倒角） ——
  const slabGeo = roundedBox(62, 4.3, 46, 0.35, 3);
  const slab = new THREE.Mesh(slabGeo, mats.m.wood);
  slab.position.y = -3.85; // y ∈ [-6, -1.7]
  slab.castShadow = true;
  slab.receiveShadow = true;
  group.add(slab);

  // —— 边框（内场 55×39，框宽 3.5，略高于草地） ——
  const frameH = 2.05;
  const frameY = -1.7 + frameH / 2; // [-1.7, 0.35]
  const frameW = 3.5;
  const parts = [
    { geo: roundedBox(62, frameH, frameW, 0.14, 2), pos: [0, frameY, -(23 - frameW / 2)] },
    { geo: roundedBox(62, frameH, frameW, 0.14, 2), pos: [0, frameY, 23 - frameW / 2] },
    { geo: roundedBox(frameW, frameH, 46 - frameW * 2, 0.14, 2), pos: [-(31 - frameW / 2), frameY, 0] },
    { geo: roundedBox(frameW, frameH, 46 - frameW * 2, 0.14, 2), pos: [31 - frameW / 2, frameY, 0] },
  ];
  for (const p of parts) {
    const mesh = new THREE.Mesh(p.geo, mats.m.woodFrame);
    mesh.position.set(p.pos[0], p.pos[1], p.pos[2]);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    group.add(mesh);
  }

  // —— 铭牌（南框上表面） ——
  const plateBase = new THREE.Mesh(new THREE.BoxGeometry(11.5, 0.07, 2.4), mats.m.lampPole);
  plateBase.position.set(0, 0.38, 23 - frameW / 2);
  plateBase.castShadow = true;
  group.add(plateBase);
  const plateTex = signTexture('云岭镇  YUNLING', {
    w: 1024,
    h: 200,
    bg: '#1d2733',
    fg: '#e7c887',
    font: 'bold 92px "Microsoft YaHei", sans-serif',
  });
  const plate = new THREE.Mesh(
    new THREE.PlaneGeometry(11, 2.1),
    new THREE.MeshStandardMaterial({ map: plateTex, roughness: 0.5, metalness: 0.2 })
  );
  plate.rotation.x = -Math.PI / 2;
  plate.position.set(0, 0.42, 23 - frameW / 2);
  group.add(plate);

  // —— 内场地面：以河道为界切成东西两块 ——
  const eastEdge = (z) => riverCenterX(z) + riverHalfWidth(z);
  const westEdge = (z) => riverCenterX(z) - riverHalfWidth(z);

  const eastPoly = [
    [FIELD.xMax, FIELD.zMin],
    [FIELD.xMax, FIELD.zMax],
    ...bankLine(eastEdge, FIELD.zMax, FIELD.zMin),
  ];
  const westPoly = [
    [FIELD.xMin, FIELD.zMin],
    [FIELD.xMin, FIELD.zMax],
    ...bankLine(westEdge, FIELD.zMax, FIELD.zMin),
  ];
  group.add(groundPiece(eastPoly, mats));
  group.add(groundPiece(westPoly, mats));

  // —— 河床与水面（略微外扩，藏进岸壁） ——
  const centerPts = (from, to, steps = 96) => {
    const pts = [];
    for (let i = 0; i <= steps; i++) {
      const z = from + ((to - from) * i) / steps;
      pts.push([riverCenterX(z), z]);
    }
    return pts;
  };
  const riverPts = centerPts(-19.6, 19.6);
  const bed = new THREE.Mesh(
    flatRibbonGeometry(riverPts, 2 * riverHalfWidth(0) + 2.4, -1.68, { closed: false, uScale: 5 }),
    mats.m.riverbed
  );
  // 河宽随 z 变化：用逐段宽度重新生成（此处用中心线 + 恒定略宽即可，宽度差由岸壁遮挡）
  bed.receiveShadow = false;
  group.add(bed);

  const water = new THREE.Mesh(
    flatRibbonGeometry(riverPts, 2 * riverHalfWidth(0) + 1.6, -0.5, { closed: false, uScale: 4 }),
    mats.m.water
  );
  water.name = 'river-water';
  group.add(water);

  // —— 池塘（西侧林间） ——
  const pondBed = new THREE.Mesh(new THREE.CircleGeometry(1, 40), mats.m.riverbed);
  pondBed.scale.set(POND.rx + 0.35, POND.rz + 0.35, 1);
  pondBed.rotation.x = -Math.PI / 2;
  pondBed.position.set(POND.x, 0.012, POND.z);
  group.add(pondBed);

  const pondWater = new THREE.Mesh(new THREE.CircleGeometry(1, 40), mats.m.water);
  pondWater.scale.set(POND.rx, POND.rz, 1);
  pondWater.rotation.x = -Math.PI / 2;
  pondWater.position.set(POND.x, 0.05, POND.z);
  pondWater.name = 'pond-water';
  group.add(pondWater);

  const pondRim = new THREE.Mesh(new THREE.RingGeometry(1, 1.16, 44), mats.m.dirt);
  pondRim.scale.set(POND.rx, POND.rz, 1);
  pondRim.rotation.x = -Math.PI / 2;
  pondRim.position.set(POND.x, 0.02, POND.z);
  pondRim.receiveShadow = true;
  group.add(pondRim);

  // —— 农田（四角环线外） ——
  for (const f of FIELDS) {
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(f.w, f.d), mats.fieldMaterial(f.crop));
    mesh.rotation.x = -Math.PI / 2;
    mesh.rotation.z = -f.rot;
    mesh.position.set(f.x, 0.02, f.z);
    mesh.receiveShadow = true;
    group.add(mesh);
  }

  // 简易围栏：田地四周（自建小栅栏）
  const fenceParts = [];
  for (const f of FIELDS) {
    const hx = f.w / 2 + 0.35;
    const hz = f.d / 2 + 0.35;
    const posts = [];
    const per = [
      [-hx, -hz, hx, -hz],
      [hx, -hz, hx, hz],
      [hx, hz, -hx, hz],
      [-hx, hz, -hx, -hz],
    ];
    for (const [x0, z0, x1, z1] of per) {
      const len = Math.hypot(x1 - x0, z1 - z0);
      const n = Math.max(2, Math.round(len / 1.4));
      for (let i = 0; i <= n; i++) {
        const t = i / n;
        posts.push([x0 + (x1 - x0) * t, z0 + (z1 - z0) * t]);
      }
      // 两道横杆
      const rot = Math.atan2(x1 - x0, z1 - z0);
      const mid = [(x0 + x1) / 2, (z0 + z1) / 2];
      for (const hy of [0.32, 0.6]) {
        fenceParts.push({
          geo: xform(box(0.07, 0.07, len), { pos: [mid[0], hy, mid[1]], rot: [0, rot, 0] }),
          mat: mats.m.door,
        });
      }
    }
    for (const [px, pz] of posts) {
      fenceParts.push({
        geo: xform(box(0.1, 0.72, 0.1), { pos: [px, 0.36, pz] }),
        mat: mats.m.door,
      });
    }
    const fence = buildMergedMesh(fenceParts.splice(0, fenceParts.length), { castShadow: true, receiveShadow: true });
    const holder = new THREE.Group();
    holder.position.set(f.x, 0, f.z);
    holder.rotation.y = f.rot;
    holder.add(fence);
    group.add(holder);
  }

  return { group, waterMeshes: [water, pondWater] };
}
