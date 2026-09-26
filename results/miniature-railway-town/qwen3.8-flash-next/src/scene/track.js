import * as THREE from 'three';
import {
  TRACK_LEN, trackFrame, bridgeU, deckY, BRIDGE, BRIDGE_S, TRACK,
  STATION, groundHeight, RIVER_CROSS, CROSSING, CROSSING_S,
} from './layout.js';
import { sweepGeometry, box, mergedMesh, mat, gableRoofGeometry } from '../util/geo.js';
import { ballastTexture, stoneTexture, paveTexture, deckPlankTexture } from '../util/textures.js';
import { makeRng } from '../util/mathx.js';

const HALF_GAUGE = TRACK.gauge / 2;

/** Frames sampled at uniform arc length, shared by every sweep on the running line. */
function frames(from, to, step = 0.2) {
  const out = [];
  const n = Math.max(2, Math.round((to - from) / step));
  for (let i = 0; i <= n; i++) {
    const s = from + ((to - from) * i) / n;
    const f = trackFrame(s);
    out.push({
      s,
      px: f.pos.x, py: f.pos.y, pz: f.pos.z,
      rx: f.right.x, ry: f.right.y, rz: f.right.z,
      ux: f.up.x, uy: f.up.y, uz: f.up.z,
    });
  }
  return out;
}

const ballastMat = mat({ map: ballastTexture(), color: 0xcac2b2, roughness: 0.97, metalness: 0 });
const sleeperMat = mat({ color: 0xffffff, roughness: 0.92, metalness: 0 });
const railMat = mat({ color: 0xd6d2c8, roughness: 0.22, metalness: 0.94 });

/**
 * The running line: ballast formation with embankments and cuttings, a closed
 * string of sleepers, two continuous rails, plus the station platform.
 */
export function buildTrack() {
  const group = new THREE.Group();
  group.name = 'track';

  const gap = BRIDGE.structHalf + 0.10;
  const bf = frames(BRIDGE_S + gap, BRIDGE_S + TRACK_LEN - gap, 0.24);
  const ballast = new THREE.Mesh(
    sweepGeometry(bf, (f) => {
      const drop = Math.max(-1.7, Math.min(0.9, groundHeight(f.px, f.pz) - 0.02 - f.py));
      return [
        { r: -TRACK.ballastBase / 2, u: drop },
        { r: -TRACK.ballastTop / 2, u: -0.02 },
        { r: TRACK.ballastTop / 2, u: -0.02 },
        { r: TRACK.ballastBase / 2, u: drop },
      ];
    }, { uvScale: 0.6 }),
    ballastMat
  );
  ballast.castShadow = true;
  ballast.receiveShadow = true;
  ballast.name = 'ballast';
  group.add(ballast);

  // ---- sleepers, one instance per pitch, tinted for a hand-laid feel
  const pitch = TRACK.sleeperPitch;
  const count = Math.floor(TRACK_LEN / pitch);
  const sleepers = new THREE.InstancedMesh(new THREE.BoxGeometry(TRACK.sleeperLen, 0.06, 0.115), sleeperMat, count);
  sleepers.castShadow = true;
  sleepers.receiveShadow = true;
  const m4 = new THREE.Matrix4();
  const quat = new THREE.Quaternion();
  const basis = new THREE.Matrix4();
  const one = new THREE.Vector3(1, 1, 1);
  const rnd = makeRng(4242);
  const tint = new THREE.Color();
  for (let i = 0; i < count; i++) {
    const s = (i + 0.5) * pitch;
    const f = trackFrame(s);
    basis.makeBasis(f.right, f.up, f.tan);
    quat.setFromRotationMatrix(basis);
    m4.compose(f.pos.clone().addScaledVector(f.up, 0.015), quat, one);
    sleepers.setMatrixAt(i, m4);
    const v = 0.62 + rnd() * 0.5;
    tint.setRGB(v * 0.40, v * 0.27, v * 0.18);
    sleepers.setColorAt(i, tint);
  }
  sleepers.instanceMatrix.needsUpdate = true;
  if (sleepers.instanceColor) sleepers.instanceColor.needsUpdate = true;
  group.add(sleepers);

  // ---- rails: continuous strings that carry straight through the bridge span
  const railFrames = frames(0, TRACK_LEN, 0.24);
  for (const side of [-1, 1]) {
    const offset = railFrames.map((f) => {
      const h = -HALF_GAUGE * side;      // right vector points away from centre on a curve
      return {
        ...f,
        px: f.px + f.rx * h, py: f.py + 0.045, pz: f.pz + f.rz * h,
      };
    });
    const rail = new THREE.Mesh(
      sweepGeometry(offset, [
        { r: -0.038, u: 0 }, { r: -0.024, u: 0.08 }, { r: 0.024, u: 0.08 }, { r: 0.038, u: 0 },
      ], { uvScale: 1 }),
      railMat
    );
    rail.castShadow = true;
    rail.name = 'rail';
    group.add(rail);
  }

  // ---- lineside furniture: marker posts and a couple of drainage pipes
  const posts = [];
  for (let i = 0; i < 10; i++) {
    const s = (i / 10) * TRACK_LEN + 1.4;
    if (Math.abs(bridgeU(s)) < BRIDGE.structHalf + 0.6) continue;
    const f = trackFrame(s);
    const p = f.pos.clone().addScaledVector(f.right, 1.06).addScaledVector(f.up, 0.17);
    posts.push(box(0.055, 0.34, 0.055, p.x, p.y, p.z, Math.atan2(f.tan.x, f.tan.z)));
  }
  group.add(mergedMesh(posts, mat({ color: 0xe6e2d8, roughness: 0.82 }), 'markers'));

  group.add(buildPlatform());
  group.add(buildCrossing());
  return { group, materials: { ballastMat, sleeperMat, railMat } };
}

/** Station platform, canopy and fixtures. */
export function buildPlatform() {
  const group = new THREE.Group();
  group.name = 'platform';
  const stone = mat({ map: stoneTexture(), color: 0xa8a29a, roughness: 0.92 });
  const top = mat({ map: paveTexture('setts'), color: 0x9b9488, roughness: 0.9 });
  const iron = mat({ color: 0x3d423f, roughness: 0.5, metalness: 0.6 });
  const zinc = mat({ color: 0x9aa09a, roughness: 0.68, metalness: 0.3 });

  const len = STATION.x1 - STATION.x0;
  const cx = (STATION.x0 + STATION.x1) / 2;
  const cz = STATION.z;
  const h = STATION.top;

  const parts = [
    box(len, h, 0.10, cx, h / 2, cz + STATION.halfW - 0.05),
    box(len, h, 0.10, cx, h / 2, cz - STATION.halfW + 0.05),
    box(0.10, h, STATION.halfW * 2, STATION.x0, h / 2, cz),
    box(0.10, h, STATION.halfW * 2, STATION.x1, h / 2, cz),
    box(0.10, h, STATION.halfW * 2, cx + len / 2 - 3.05, h / 2, cz),
  ];
  const wall = mergedMesh(parts, stone, 'platform-face');
  wall.castShadow = true;
  wall.receiveShadow = true;
  group.add(wall);

  const slab = new THREE.Mesh(box(len - 0.02, 0.07, STATION.halfW * 2, cx, h - 0.02, cz), top);
  slab.castShadow = true;
  slab.receiveShadow = true;
  group.add(slab);

  const line = new THREE.Mesh(
    box(len - 0.16, 0.014, 0.10, cx, h + 0.022, cz + STATION.halfW - 0.16),
    mat({ color: 0xd8a72a, roughness: 0.75 })
  );
  group.add(line);

  // canopy: posts, valance, shallow pitched roof over the eastern half
  const cx0 = -1.00, cx1 = 2.05;
  const cl = cx1 - cx0, ccx = (cx0 + cx1) / 2;
  const roof = new THREE.Mesh(gableRoofGeometry(cl, 1.34, 0.19, 0.10), zinc);
  roof.position.set(ccx, h + 0.74, cz + 0.10);
  roof.castShadow = true;
  roof.receiveShadow = true;
  group.add(roof);
  for (const zz of [cz + 0.77, cz - 0.57]) {
    const val = new THREE.Mesh(box(cl + 0.16, 0.12, 0.045, ccx, h + 0.66, zz), mat({ color: 0x2f4a44, roughness: 0.72 }));
    val.castShadow = true;
    group.add(val);
  }
  const canopyParts = [];
  for (let i = 0; i <= 3; i++) {
    const x = cx0 + (cl * i) / 3;
    canopyParts.push(box(0.07, 0.70, 0.07, x, h + 0.35, cz + 0.56));
    canopyParts.push(box(0.055, 0.70, 0.055, x, h + 0.35, cz - 0.42));
    canopyParts.push(box(0.30, 0.05, 0.05, x - 0.16, h + 0.62, cz + 0.56));
  }
  const canopy = mergedMesh(canopyParts, iron, 'canopy-posts');
  canopy.castShadow = true;
  group.add(canopy);

  // understructure so the platform reads as a built slab, not a floating lid
  const fill = new THREE.Mesh(box(len, h - 0.06, STATION.halfW * 2 - 0.14, cx, (h - 0.06) / 2, cz), mat({ color: 0x7c7365, roughness: 0.96 }));
  fill.receiveShadow = true;
  group.add(fill);

  return group;
}

/** The single level crossing: timber beam gates, markings and a lamp. */
export function buildCrossing() {
  const group = new THREE.Group();
  group.name = 'level-crossing';
  const f = trackFrame(CROSSING_S);
  group.position.copy(f.pos);
  group.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(f.right, f.up, f.tan));

  const white = mat({ color: 0xe9e5da, roughness: 0.7 });
  const red = mat({ color: 0xa8322a, roughness: 0.68 });
  const iron = mat({ color: 0x35332f, roughness: 0.6, metalness: 0.4 });

  const post = [];
  const stripes = [];
  for (const along of [-1, 1]) {
    for (const side of [-1, 1]) {
      const z = along * 1.35, x = side * 1.18;
      post.push(box(0.10, 0.92, 0.10, x, 0.46, z));
      post.push(box(0.16, 0.06, 0.16, x, 0.03, z));
      stripes.push(box(0.11, 0.10, 0.11, x, 0.80, z));
    }
    // half-barrier across the carriageway
    post.push(box(0.075, 0.075, 1.5, 1.28, 0.74, along * 1.35));
    for (let i = 0; i < 4; i++) stripes.push(box(0.08, 0.08, 0.18, 1.28, 0.74, along * (0.72 + i * 0.36)));
  }
  group.add(mergedMesh(post, white, 'crossing-posts'));
  group.add(mergedMesh(stripes, red, 'crossing-hazard'));

  // crossbuck signs
  for (const along of [-1, 1]) {
    for (const side of [-1, 1]) {
      const g = new THREE.Group();
      const b1 = new THREE.Mesh(box(0.72, 0.11, 0.035, 0, 0, 0), white);
      const b2 = b1.clone();
      b1.rotation.z = 0.42;
      b2.rotation.z = -0.42;
      const pole = new THREE.Mesh(box(0.06, 1.3, 0.06, 0, -0.55, 0), iron);
      g.add(b1, b2, pole);
      g.position.set(side * 0.95, 1.28, along * 1.62);
      g.rotation.y = side > 0 ? 0 : Math.PI;
      group.add(g);
    }
  }
  group.add(mergedMesh([box(2.9, 0.03, 0.16, 0, 0.012, 0)], mat({ color: 0xdad5c8, roughness: 0.85 }), 'crossing-markings'));

  // crossing lamp on the down-side post
  const lamp = new THREE.Group();
  const col = new THREE.Mesh(box(0.07, 1.5, 0.07, 0, 0.75, 0), iron);
  const head = new THREE.Mesh(box(0.16, 0.20, 0.16, 0, 1.56, 0), red);
  const lens = new THREE.Mesh(
    new THREE.SphereGeometry(0.055, 10, 8),
    mat({ color: 0xffb060, emissive: 0xff9a3c, emissiveIntensity: 0, roughness: 0.4 })
  );
  lens.position.set(0, 1.56, 0.09);
  lamp.add(col, head, lens);
  lamp.position.set(1.24, 0, -1.35);
  group.add(lamp);
  group.userData.glow = [lens.material];
  return group;
}

/* ------------------------------------------------------------------- the bridge */

/**
 * Two-span rivetted through-truss on stone abutments with a cutwater pier,
 * wing walls and a ballasted deck carried on plate girders.
 */
export function buildBridge() {
  const group = new THREE.Group();
  group.name = 'bridge';
  const b = BRIDGE;
  const f = trackFrame(BRIDGE_S);
  const halfLen = b.structHalf + 0.30;
  const w = b.width / 2;
  const bed = groundHeight(RIVER_CROSS.x, RIVER_CROSS.z);

  const stoneMat = mat({ map: stoneTexture(), color: 0x9c9382, roughness: 0.95, metalness: 0 });
  const ironMat = mat({ color: 0x4d5f56, roughness: 0.44, metalness: 0.66 });
  const deckMat = mat({ map: deckPlankTexture(), color: 0x8d8377, roughness: 0.86, metalness: 0.05 });

  const stone = [];
  const iron = [];
  const deck = [];

  // deck plate: top surface sits where the ballast shoulder would be
  deck.push(box(b.width, b.deckPlate, halfLen * 2, 0, -0.02 - b.deckPlate / 2, 0));
  for (const side of [-1, 1]) {
    iron.push(box(0.11, 0.21, halfLen * 2, side * (w - 0.06), -0.16, 0));
    iron.push(box(0.17, 0.05, halfLen * 2, side * (w - 0.06), -0.06, 0));
    iron.push(box(0.17, 0.05, halfLen * 2, side * (w - 0.06), -0.26, 0));
    for (let i = -5; i <= 5; i++) iron.push(box(0.05, 0.19, 0.05, side * (w - 0.06), -0.16, i * 0.45));
  }

  // through trusses
  for (const side of [-1, 1]) {
    const x = side * (w + 0.03);
    iron.push(box(0.08, 0.08, halfLen * 2, x, 0.05, 0));
    iron.push(box(0.07, 0.10, halfLen * 2, x, b.girderH + 0.08, 0));
    iron.push(box(0.035, 0.035, halfLen * 2, x, b.girderH + 0.26, 0));
    const stations = [];
    for (let i = 0; i <= 6; i++) stations.push(-halfLen + (i * 2 * halfLen) / 6);
    stations.forEach((z, i) => {
      iron.push(box(0.06, b.girderH + 0.06, 0.07, x, 0.05 + (b.girderH + 0.06) / 2, z));
      if (i < stations.length - 1) {
        const z2 = stations[i + 1];
        const dz = z2 - z;
        const rise = i % 2 ? b.girderH : -b.girderH;
        const len = Math.hypot(dz, rise);
        const g = new THREE.BoxGeometry(0.052, 0.052, len);
        g.rotateX(-Math.atan2(rise, dz));
        g.translate(x, 0.05 + b.girderH / 2, (z + z2) / 2);
        iron.push(g);
      }
      if (i > 0 && i < stations.length - 1) {
        iron.push(box(0.14, 0.14, 0.05, x, b.girderH + 0.08, z));
      }
    });
    stone.push(box(0.21, 0.05, halfLen * 2, side * (w + 0.17), 0.0, 0));
  }

  // abutments with wing walls and copings
  for (const side of [-1, 1]) {
    const z = side * (b.structHalf + 0.16);
    const ground = groundHeight(RIVER_CROSS.x - 1.2, RIVER_CROSS.z + z * 0.6);
    const topY = -0.16;
    const hgt = topY - Math.min(ground, -0.05) + 0.1;
    stone.push(box(b.width + 0.66, hgt, 0.78, 0, Math.min(ground, -0.05) + hgt / 2, z));
    stone.push(box(b.width + 0.92, 0.13, 0.94, 0, topY + 0.04, z));
    for (const s2 of [-1, 1]) {
      stone.push(box(0.30, 0.62, 1.05, s2 * (w + 0.42), topY - 0.34, z + side * 0.5, -side * s2 * 0.42));
    }
  }

  // river pier: tapered masonry with cutwater noses and a cap
  {
    const top = -0.24;
    const hgt = top - (bed - 0.22);
    const body = new THREE.CylinderGeometry(0.40, 0.58, hgt, 4, 1);
    body.rotateY(Math.PI / 4);
    body.scale(1.05, 1, 2.1);
    body.translate(0, bed - 0.22 + hgt / 2, 0);
    stone.push(body);
    for (const s2 of [-1, 1]) {
      const nose = new THREE.CylinderGeometry(0.42, 0.42, hgt * 0.86, 3, 1);
      nose.rotateZ(s2 > 0 ? Math.PI / 2 : -Math.PI / 2);
      nose.rotateX(s2 * Math.PI / 2);
      nose.scale(1, 1, 0.85);
      nose.translate(0, bed - 0.22 + hgt * 0.43, s2 * 0.52);
      stone.push(nose);
    }
    stone.push(box(1.10, 0.12, 1.15, 0, top + 0.06, 0));
  }

  const stoneMesh = mergedMesh(stone, stoneMat, 'bridge-stone');
  const ironMesh = mergedMesh(iron, ironMat, 'bridge-iron');
  const deckMesh = mergedMesh(deck, deckMat, 'bridge-deck');
  for (const m of [stoneMesh, ironMesh, deckMesh]) {
    m.castShadow = true;
    m.receiveShadow = true;
    group.add(m);
  }

  group.position.copy(f.pos);
  group.quaternion.setFromRotationMatrix(
    new THREE.Matrix4().makeBasis(f.right, f.up, new THREE.Vector3().crossVectors(f.up, f.right))
  );
  return { group, materials: { stoneMat, ironMat, deckMat } };
}

/** Timber footbridge over the mill channel. */
export function buildFootbridge(x, z, angle) {
  const g = new THREE.Group();
  const wood = mat({ color: 0x6f4c2c, roughness: 0.9 });
  const planks = mat({ map: deckPlankTexture(), color: 0x8a6a45, roughness: 0.9 });
  const len = 1.9, wid = 0.6;
  const deck = new THREE.Mesh(box(len, 0.07, wid, 0, 0.14, 0), planks);
  deck.castShadow = true;
  deck.receiveShadow = true;
  g.add(deck);
  const rails = [];
  for (const s of [-1, 1]) {
    rails.push(box(len, 0.05, 0.05, 0, 0.42, s * (wid / 2 - 0.03)));
    rails.push(box(0.09, 0.46, 0.06, s * (len / 2 - 0.04), 0.2, 0));
    rails.push(box(0.09, 0.46, 0.06, -s * (len / 2 - 0.04), 0.2, 0));
    for (let i = 0; i < 3; i++) rails.push(box(0.045, 0.28, 0.045, -len / 2 + 0.4 + i * 0.55, 0.28, s * (wid / 2 - 0.03)));
  }
  g.add(mergedMesh(rails, wood, 'footbridge-rails'));
  g.position.set(x, groundHeight(x, z) + 0.03, z);
  g.rotation.y = angle;
  g.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  return g;
}

/** Culvert where the channel passes under the embankment beyond the bridge. */
export function channelAtBridge() {
  const p = RIVER_CROSS;
  return { x: p.x, z: p.z, bed: groundHeight(p.x, p.z), water: -0.34 };
}
