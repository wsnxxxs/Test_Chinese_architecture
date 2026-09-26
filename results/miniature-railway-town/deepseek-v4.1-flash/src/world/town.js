import * as THREE from 'three';
import {
  BOARD,
  COLORS,
  WATER,
  trackCurve,
  terrainHeight,
  distanceToTrack,
  distanceToRiver,
  distanceToRoads,
  inwardSign,
  trackInwardNormal,
  yawFromTangent,
  createPlanner,
  MOUNDS,
  PLATFORM,
  PLATFORM_SPAN,
  STATION_U,
  SIDING,
  ROADS,
  MILL,
} from './layout.js';
import { matrixAt, sweepProfile, gableRoofGeometry, curvedRoofGeometry, hipRoofGeometry } from '../lib/geometry.js';
import { Rng } from '../lib/rng.js';

// ---------------------------------------------------------------------------
// The settlement: station, town houses, church, mill, farms, street lamps,
// hedges and trees. Static geometry is merged into a handful of draw calls;
// only the emissive materials and lamp glow sprites stay individual so the
// day / night switch can turn them on.
// ---------------------------------------------------------------------------

const WINDOW_FRAME = new THREE.BoxGeometry(0.98, 1.16, 0.06);
const WINDOW_GLASS = new THREE.BoxGeometry(0.74, 0.96, 0.05);

export function buildTown(scene, M, batcher) {
  const planner = createPlanner();
  const rng = new Rng(20240517);
  const lamps = [];
  const group = new THREE.Group();
  group.name = 'town';

  const place = (base, geo, local, mat, opts) => batcher.add(geo, base.clone().multiply(matrixAt(local)), mat, opts);

  // --- helpers -------------------------------------------------------------

  function addWindows(base, { width, depth, floors, floorHeight, baseY, litRatio, rng: r, columns, sillMat = M.trim }) {
    const cols = columns ?? Math.max(1, Math.round(width / 1.8));
    for (let f = 0; f < floors; f++) {
      const y = baseY + f * floorHeight + floorHeight * 0.56;
      for (let c = 0; c < cols; c++) {
        const lx = cols === 1 ? 0 : -width / 2 + (width / cols) * (c + 0.5);
        for (const s of [1, -1]) {
          const lit = r.next() < litRatio;
          const glass = lit ? M.glassWarm : M.glassDark;
          place(base, WINDOW_FRAME, { pos: [lx, y, s * (depth / 2 + 0.02)] }, sillMat, { density: 1, project: false });
          place(base, WINDOW_GLASS, { pos: [lx, y, s * (depth / 2 + 0.045)] }, glass, {
            density: 1,
            project: false,
            cast: false,
          });
        }
      }
      const sideCols = Math.max(1, Math.round(depth / 1.8));
      for (let c = 0; c < sideCols; c++) {
        const lz = sideCols === 1 ? 0 : -depth / 2 + (depth / sideCols) * (c + 0.5);
        for (const s of [1, -1]) {
          const lit = r.next() < litRatio;
          const glass = lit ? M.glassWarm : M.glassDark;
          place(
            base,
            WINDOW_FRAME,
            { pos: [s * (width / 2 + 0.02), y, lz], rotY: Math.PI / 2 },
            sillMat,
            { density: 1, project: false }
          );
          place(
            base,
            WINDOW_GLASS,
            { pos: [s * (width / 2 + 0.045), y, lz], rotY: Math.PI / 2 },
            glass,
            { density: 1, project: false, cast: false }
          );
        }
      }
    }
  }

  function addHouse(spec) {
    const {
      x,
      z,
      yaw = 0,
      width = 5.4,
      depth = 4.8,
      floors = 2,
      floorHeight = 1.85,
      roof = 'gable',
      roofRise = 1.9,
      overhang = 0.45,
      roofAlongX = false,
      wall = M.plaster[0],
      roofMat = M.roofs[0],
      chimney = true,
      dormer = false,
      litRatio = 0.5,
      doorSide = 0,
      bay = false,
      plinth = M.stone,
    } = spec;
    const base = matrixAt({ pos: [x, terrainHeight(x, z), z], rotY: yaw });
    const H = floors * floorHeight;
    const y0 = 0.24;

    place(base, new THREE.BoxGeometry(width + 0.5, 0.5, depth + 0.5), { pos: [0, 0.12, 0] }, plinth, { density: 0.5 });
    place(base, new THREE.BoxGeometry(width, H, depth), { pos: [0, y0 + H / 2, 0] }, wall, { density: 0.55 });
    // corner boards give the volume a hand built look
    for (const sx of [-1, 1]) {
      for (const sz of [-1, 1]) {
        place(
          base,
          new THREE.BoxGeometry(0.22, H + 0.06, 0.22),
          { pos: [(sx * width) / 2, y0 + H / 2, (sz * depth) / 2] },
          M.trimDark,
          { density: 1 }
        );
      }
    }

    const roofY = y0 + H;
    if (roof === 'gable') {
      const g = gableRoofGeometry(width + overhang * 2, depth + overhang * 2, roofRise);
      place(
        base,
        g,
        { pos: [0, roofY, 0], rotY: roofAlongX ? Math.PI / 2 : 0 },
        roofMat,
        { density: 0.75 }
      );
      place(
        base,
        new THREE.BoxGeometry(width + overhang * 2 + 0.1, 0.14, 0.3),
        { pos: [0, roofY + 0.02, (depth + overhang * 2) / 2], rotY: roofAlongX ? Math.PI / 2 : 0 },
        M.trimDark,
        { density: 1 }
      );
    } else if (roof === 'hip') {
      const g = hipRoofGeometry(width + overhang * 2, depth + overhang * 2, roofRise, roofAlongX ? 0.42 : 0.1);
      place(base, g, { pos: [0, roofY, 0], rotY: roofAlongX ? 0 : Math.PI / 2 }, roofMat, { density: 0.75 });
    } else {
      place(base, new THREE.BoxGeometry(width + overhang * 2, 0.22, depth + overhang * 2), { pos: [0, roofY + 0.11, 0] }, roofMat, {
        density: 0.8,
      });
      for (const s of [-1, 1]) {
        place(
          base,
          new THREE.BoxGeometry(width + overhang * 2, 0.4, 0.18),
          { pos: [0, roofY + 0.36, (s * (depth + overhang * 2)) / 2] },
          M.stone,
          { density: 0.9 }
        );
        place(
          base,
          new THREE.BoxGeometry(0.18, 0.4, depth + overhang * 2),
          { pos: [(s * (width + overhang * 2)) / 2, roofY + 0.36, 0] },
          M.stone,
          { density: 0.9 }
        );
      }
    }

    if (chimney) {
      const cx = width * (rng.chance(0.5) ? 0.28 : -0.28);
      place(base, new THREE.BoxGeometry(0.72, 1.5, 0.72), { pos: [cx, roofY + roofRise * 0.55, 0] }, M.brick, { density: 1.1 });
      place(base, new THREE.BoxGeometry(0.86, 0.16, 0.86), { pos: [cx, roofY + roofRise * 0.55 + 0.8, 0] }, M.stone, {
        density: 1.4,
      });
      for (const s of [-1, 1]) {
        place(
          base,
          new THREE.CylinderGeometry(0.09, 0.09, 0.3, 8),
          { pos: [cx + s * 0.2, roofY + roofRise * 0.55 + 0.95, 0] },
          M.ironDark,
          { density: 1.6, project: false }
        );
      }
    }

    if (dormer) {
      const dx = 0;
      const roofSlopeY = roofY + roofRise * 0.34;
      place(base, new THREE.BoxGeometry(1.5, 1.1, 1.3), { pos: [dx, roofSlopeY + 0.2, depth * 0.18] }, wall, { density: 0.8 });
      const g = gableRoofGeometry(1.8, 1.5, 0.6);
      place(base, g, { pos: [dx, roofSlopeY + 0.75, depth * 0.18] }, roofMat, { density: 1 });
      place(base, WINDOW_GLASS, { pos: [dx, roofSlopeY + 0.3, depth * 0.18 + 0.68] }, M.glassDark, {
        density: 1,
        project: false,
        cast: false,
      });
    }

    addWindows(base, {
      width,
      depth,
      floors,
      floorHeight,
      baseY: y0,
      litRatio,
      rng,
      columns: Math.max(1, Math.round(width / 1.9)),
    });

    // front door (local +Z), optionally offset to one side
    const dx = doorSide * (width / 4);
    place(base, new THREE.BoxGeometry(1.05, 2.0, 0.12), { pos: [dx, y0 + 1.0, depth / 2 + 0.03] }, M.trimDark, { density: 1.2 });
    place(base, new THREE.BoxGeometry(0.85, 1.85, 0.1), { pos: [dx, y0 + 0.95, depth / 2 + 0.07] }, M.timber, { density: 1.4 });
    place(base, new THREE.BoxGeometry(1.6, 0.16, 0.7), { pos: [dx, y0 + 2.15, depth / 2 + 0.3] }, roofMat, { density: 1.2 });
    place(base, new THREE.BoxGeometry(1.1, 0.14, 0.5), { pos: [dx, y0 + 0.08, depth / 2 + 0.2] }, M.stone, { density: 1.4 });

    if (bay) {
      place(base, new THREE.BoxGeometry(1.6, 1.3, 0.7), { pos: [-width / 3, y0 + 0.85, depth / 2 + 0.2] }, wall, { density: 1 });
      place(base, WINDOW_GLASS, { pos: [-width / 3, y0 + 0.9, depth / 2 + 0.56] }, M.glassDark, {
        density: 1,
        project: false,
        cast: false,
      });
      place(base, new THREE.BoxGeometry(1.9, 0.12, 0.95), { pos: [-width / 3, y0 + 1.5, depth / 2 + 0.28] }, roofMat, { density: 1.2 });
    }

    planner.reserve(x, z, Math.max(width, depth) * 0.6);
    return base;
  }

  // --- street lamps --------------------------------------------------------

  function addLamp(x, z, { height = 2.9, light = false, y = 0 } = {}) {
    const base = matrixAt({ pos: [x, terrainHeight(x, z) + y, z] });
    place(base, new THREE.CylinderGeometry(0.22, 0.3, 0.3, 10), { pos: [0, 0.15, 0] }, M.ironDark, {
      density: 1,
      project: false,
    });
    place(base, new THREE.CylinderGeometry(0.075, 0.1, height, 10), { pos: [0, height / 2 + 0.25, 0] }, M.ironDark, {
      density: 1,
      project: false,
    });
    place(base, new THREE.SphereGeometry(0.2, 12, 10), { pos: [0, height + 0.3, 0] }, M.lampGlass, {
      density: 1,
      project: false,
      cast: false,
    });
    place(base, new THREE.ConeGeometry(0.26, 0.28, 10), { pos: [0, height + 0.58, 0] }, M.ironDark, {
      density: 1,
      project: false,
    });
    lamps.push({ position: new THREE.Vector3(x, terrainHeight(x, z) + y + height + 0.3, z), light });
  }

  /** Lamps along a road, offset to one side so they line the kerb. */
  function addLampsAlongRoad(road, { from = 0.1, to = 0.9, count = 5, offset = 3.2, height = 2.9, lightEvery = 0 }) {
    for (let i = 0; i < count; i++) {
      const u = from + ((i + 0.5) / count) * (to - from);
      const p = road.curve.getPointAt(u);
      const t = road.curve.getTangentAt(u);
      const len = Math.hypot(t.z, -t.x) || 1;
      addLamp(p.x + (t.z / len) * offset, p.z - (t.x / len) * offset, {
        height,
        light: lightEvery > 0 && i % lightEvery === 0,
      });
    }
  }

  // --- trees ---------------------------------------------------------------

  function addTree(x, z, scale = 1, kind = null) {
    const y = terrainHeight(x, z);
    const yaw = rng.range(0, Math.PI * 2);
    const s = scale * rng.range(0.85, 1.25);
    const type = kind || (rng.next() < 0.34 ? 'conifer' : 'broadleaf');
    const trunkH = (type === 'conifer' ? 1.0 : 1.5) * s;
    batcher.add(
      new THREE.CylinderGeometry(0.09 * s, 0.16 * s, trunkH, 6),
      matrixAt({ pos: [x, y + trunkH / 2, z], rotY: yaw }),
      M.trunk,
      { density: 0.8, project: false }
    );
    if (type === 'conifer') {
      const mat = M.conifer[rng.int(0, M.conifer.length - 1)];
      for (let i = 0; i < 3; i++) {
        const r = (1.35 - i * 0.3) * s;
        const h = (1.7 - i * 0.28) * s;
        const yy = y + trunkH * 0.7 + i * 0.8 * s + h / 2;
        batcher.add(
          new THREE.ConeGeometry(r, h, 7),
          matrixAt({ pos: [x, yy, z], rotY: yaw + i * 0.5 }),
          mat,
          { density: 0.7, project: false }
        );
      }
    } else {
      const mat = M.foliage[rng.int(0, M.foliage.length - 1)];
      const blobs = rng.int(2, 4);
      for (let i = 0; i < blobs; i++) {
        const r = rng.range(0.8, 1.2) * s;
        const dx = rng.jitter(0.6) * s;
        const dz = rng.jitter(0.6) * s;
        const yy = y + trunkH + rng.range(0.35, 1.05) * s;
        batcher.add(
          new THREE.IcosahedronGeometry(r, 0),
          matrixAt({ pos: [x + dx, yy, z + dz], rotY: rng.range(0, 6.28), scale: [1, rng.range(0.82, 1.1), 1] }),
          mat,
          { density: 0.6, project: false }
        );
      }
    }
  }

  function addBush(x, z, scale = 1) {
    const y = terrainHeight(x, z);
    const mat = M.foliage[rng.int(0, M.foliage.length - 1)];
    const r = rng.range(0.45, 0.75) * scale;
    batcher.add(
      new THREE.IcosahedronGeometry(r, 0),
      matrixAt({ pos: [x, y + r * 0.6, z], rotY: rng.range(0, 6.28), scale: [1, 0.75, 1] }),
      mat,
      { density: 0.6, project: false }
    );
  }

  function addHedge(x1, z1, x2, z2, height = 0.95, width = 0.7) {
    const len = Math.hypot(x2 - x1, z2 - z1);
    if (len < 0.4) return;
    const yaw = Math.atan2(-(z2 - z1), x2 - x1);
    const cx = (x1 + x2) / 2;
    const cz = (z1 + z2) / 2;
    const y = (terrainHeight(x1, z1) + terrainHeight(x2, z2)) / 2;
    const geo = new THREE.BoxGeometry(len, height, width);
    boxJitter(geo, 0.06);
    batcher.add(geo, matrixAt({ pos: [cx, y + height / 2, cz], rotY: yaw }), M.hedge, { density: 1.1, project: false });
  }

  function boxJitter(geo, amount) {
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      pos.setX(i, pos.getX(i) + rng.jitter(amount));
      pos.setY(i, pos.getY(i) + rng.jitter(amount));
      pos.setZ(i, pos.getZ(i) + rng.jitter(amount));
    }
    geo.computeVertexNormals();
  }

  function addFence(x1, z1, x2, z2, height = 0.85) {
    const len = Math.hypot(x2 - x1, z2 - z1);
    if (len < 0.6) return;
    const yaw = Math.atan2(-(z2 - z1), x2 - x1);
    const cx = (x1 + x2) / 2;
    const cz = (z1 + z2) / 2;
    const y = (terrainHeight(x1, z1) + terrainHeight(x2, z2)) / 2;
    const base = matrixAt({ pos: [cx, y, cz], rotY: yaw });
    const posts = Math.max(2, Math.round(len / 1.4));
    for (let i = 0; i <= posts; i++) {
      const lx = -len / 2 + (len * i) / posts;
      place(base, new THREE.BoxGeometry(0.1, height, 0.1), { pos: [lx, height / 2, 0] }, M.timber, { density: 1.4 });
    }
    for (const hy of [height * 0.45, height * 0.85]) {
      place(base, new THREE.BoxGeometry(len, 0.09, 0.06), { pos: [0, hy, 0] }, M.timber, { density: 1.2 });
    }
  }

  // --- landmark buildings --------------------------------------------------

  function addChurch(x, z, yaw) {
    const base = matrixAt({ pos: [x, terrainHeight(x, z), z], rotY: yaw });
    const W = 9.5;
    const D = 15;
    const H = 6.4;
    place(base, new THREE.BoxGeometry(W + 0.9, 0.7, D + 0.9), { pos: [0, 0.35, 0] }, M.stone, { density: 0.5 });
    place(base, new THREE.BoxGeometry(W, H, D), { pos: [0, 0.7 + H / 2, 0] }, M.stoneWarm, { density: 0.4 });
    // buttresses
    for (const s of [-1, 1]) {
      for (let i = -2; i <= 2; i++) {
        place(
          base,
          new THREE.BoxGeometry(0.7, H * 0.8, 0.9),
          { pos: [s * (W / 2 + 0.3), 0.7 + H * 0.4, i * 3.2] },
          M.stone,
          { density: 0.6 }
        );
      }
    }
    // nave roof
    const roof = gableRoofGeometry(W + 1.0, D + 0.8, 2.4);
    place(base, roof, { pos: [0, 0.7 + H, 0] }, M.roofs[2], { density: 0.7 });
    // tower + spire
    const towerH = 11.5;
    place(base, new THREE.BoxGeometry(4.2, towerH, 4.2), { pos: [0, 0.7 + towerH / 2, D / 2 + 0.2] }, M.stone, {
      density: 0.45,
    });
    for (const s of [-1, 1]) {
      place(
        base,
        new THREE.BoxGeometry(0.5, towerH * 0.9, 0.5),
        { pos: [s * 2.35, 0.7 + towerH * 0.45, D / 2 + 0.2 + s * 0.1] },
        M.stoneWarm,
        { density: 0.7 }
      );
    }
    // louvred bell opening
    for (const s of [-1, 1]) {
      place(base, new THREE.BoxGeometry(1.5, 2.0, 0.2), { pos: [s * 0.9, 0.7 + towerH - 1.6, D / 2 + 2.4] }, M.timber, {
        density: 1,
      });
    }
    const spire = new THREE.ConeGeometry(3.05, 6.2, 8);
    place(base, spire, { pos: [0, 0.7 + towerH + 3.1, D / 2 + 0.2] }, M.roofs[2], { density: 0.7 });
    place(base, new THREE.CylinderGeometry(0.06, 0.06, 1.1, 6), { pos: [0, 0.7 + towerH + 6.7, D / 2 + 0.2] }, M.brass, {
      density: 1,
      project: false,
    });
    place(base, new THREE.BoxGeometry(0.5, 0.12, 0.12), { pos: [0, 0.7 + towerH + 7.1, D / 2 + 0.2] }, M.brass, {
      density: 2,
      project: false,
    });
    // west door and windows
    place(base, new THREE.BoxGeometry(2.2, 3.2, 0.3), { pos: [0, 2.3, D / 2 + 2.35] }, M.timber, { density: 1 });
    place(base, new THREE.BoxGeometry(2.6, 0.4, 0.5), { pos: [0, 4.05, D / 2 + 2.5] }, M.stone, { density: 1.2 });
    for (let i = -2; i <= 2; i++) {
      for (const s of [-1, 1]) {
        place(
          base,
          new THREE.BoxGeometry(0.16, 2.6, 1.1),
          { pos: [s * (W / 2 + 0.06), 4.2, i * 3.2], rotY: Math.PI / 2 },
          M.glassWarm,
          { density: 1, project: false, cast: false }
        );
        place(
          base,
          new THREE.BoxGeometry(0.2, 0.34, 1.5),
          { pos: [s * (W / 2 + 0.05), 2.7, i * 3.2], rotY: Math.PI / 2 },
          M.stone,
          { density: 1, project: false }
        );
      }
    }
    planner.reserve(x, z, 9);
  }

  function addTownHall(x, z, yaw) {
    const base = matrixAt({ pos: [x, terrainHeight(x, z), z], rotY: yaw });
    const W = 13;
    const D = 8.5;
    const H = 6.2;
    place(base, new THREE.BoxGeometry(W + 0.8, 0.6, D + 0.8), { pos: [0, 0.3, 0] }, M.stone, { density: 0.5 });
    place(base, new THREE.BoxGeometry(W, H, D), { pos: [0, 0.6 + H / 2, 0] }, M.plaster[5], { density: 0.5 });
    place(base, new THREE.BoxGeometry(W + 0.3, 0.4, D + 0.3), { pos: [0, 0.6 + H - 0.2, 0] }, M.trim, { density: 0.8 });
    place(base, new THREE.BoxGeometry(W + 0.3, 0.35, D + 0.3), { pos: [0, 0.9, 0] }, M.trim, { density: 0.9 });
    const roof = hipRoofGeometry(W + 1.0, D + 1.0, 2.3, 0.55);
    place(base, roof, { pos: [0, 0.6 + H, 0] }, M.roofs[3], { density: 0.75 });
    // portico
    for (const s of [-1, 1]) {
      place(base, new THREE.CylinderGeometry(0.3, 0.34, 3.4, 12), { pos: [s * 1.9, 2.3, D / 2 + 1.0] }, M.stone, {
        density: 0.7,
        project: false,
      });
    }
    place(base, new THREE.BoxGeometry(5.0, 0.5, 2.4), { pos: [0, 4.2, D / 2 + 0.9] }, M.stone, { density: 0.7 });
    place(base, new THREE.BoxGeometry(5.6, 0.8, 3.0), { pos: [0, 4.7, D / 2 + 0.7] }, M.roofs[3], { density: 0.9 });
    for (let i = 0; i < 3; i++) {
      place(base, new THREE.BoxGeometry(0.5, 3.4, 0.5), { pos: [0, 2.3 + (i % 2), 5.4 - i * 0.9] }, M.stone, { density: 0.8 });
    }
    // steps
    for (let i = 0; i < 3; i++) {
      place(base, new THREE.BoxGeometry(5.4, 0.22, 0.9), { pos: [0, 0.11 + i * 0.22, D / 2 + 1.6 - i * 0.85] }, M.stone, {
        density: 1,
      });
    }
    // clock tower
    const towerH = 9.0;
    place(base, new THREE.BoxGeometry(3.6, towerH, 3.6), { pos: [0, 0.6 + towerH / 2, -D / 2 + 0.4] }, M.plaster[5], {
      density: 0.5,
    });
    place(base, new THREE.BoxGeometry(4.1, 0.4, 4.1), { pos: [0, 0.6 + towerH, -D / 2 + 0.4] }, M.trim, { density: 0.9 });
    const clock = new THREE.CircleGeometry(0.85, 20);
    for (let i = 0; i < 4; i++) {
      const m = base
        .clone()
        .multiply(matrixAt({ pos: [0, 0.6 + towerH - 1.4, -D / 2 + 0.4], rotY: (i * Math.PI) / 2 }))
        .multiply(matrixAt({ pos: [0, 0, 1.83] }));
      batcher.add(clock, m, M.trim, { density: 0.5, project: false, cast: false });
    }
    const cap = hipRoofGeometry(4.6, 4.6, 1.9, 0.01);
    place(base, cap, { pos: [0, 0.6 + towerH + 0.2, -D / 2 + 0.4] }, M.roofs[3], { density: 0.8 });
    place(base, new THREE.CylinderGeometry(0.07, 0.07, 1.4, 6), { pos: [0, 0.6 + towerH + 3.1, -D / 2 + 0.4] }, M.brass, {
      density: 1,
      project: false,
    });

    addWindows(base, { width: W, depth: D, floors: 3, floorHeight: 1.9, baseY: 0.6, litRatio: 0.7, rng, columns: 4 });
    place(base, new THREE.BoxGeometry(2.0, 3.0, 0.2), { pos: [0, 2.1, D / 2 + 0.05] }, M.timber, { density: 1 });
    planner.reserve(x, z, 10);
  }

  function addStationBuilding() {
    const p = trackCurve.getPointAt(STATION_U);
    const inward = trackInwardNormal(STATION_U);
    const yaw = yawFromTangent(STATION_U);
    const cx = p.x + inward.x * 11.5;
    const cz = p.z + inward.z * 11.5;
    const base = matrixAt({ pos: [cx, terrainHeight(cx, cz), cz], rotY: yaw });
    const W = 17; // along the track (local X)
    const D = 7.5;
    const H = 5.2;
    place(base, new THREE.BoxGeometry(W + 0.8, 0.55, D + 0.8), { pos: [0, 0.27, 0] }, M.stone, { density: 0.5 });
    place(base, new THREE.BoxGeometry(W, H, D), { pos: [0, 0.55 + H / 2, 0] }, M.plaster[2], { density: 0.5 });
    place(base, new THREE.BoxGeometry(W + 0.4, 0.45, D + 0.4), { pos: [0, 0.55 + H - 0.2, 0] }, M.trim, { density: 0.8 });
    place(base, new THREE.BoxGeometry(W + 0.4, 0.4, D + 0.4), { pos: [0, 0.85, 0] }, M.trim, { density: 0.9 });
    const roof = hipRoofGeometry(W + 1.2, D + 1.2, 2.0, 0.62);
    place(base, roof, { pos: [0, 0.55 + H, 0] }, M.roofs[1], { density: 0.75 });
    // clock + chimney
    place(base, new THREE.BoxGeometry(1.0, 1.6, 1.0), { pos: [-W / 2 + 1.5, 0.55 + H + 1.5, 0] }, M.brick, { density: 1 });
    for (const s of [-1, 1]) {
      place(
        base,
        new THREE.BoxGeometry(0.9, 1.7, 0.22),
        { pos: [s * 3.6, 0.55 + H - 1.0, -D / 2 - 0.05] },
        M.timber,
        { density: 1, project: false }
      );
    }
    addWindows(base, { width: W, depth: D, floors: 2, floorHeight: 2.2, baseY: 0.55, litRatio: 0.75, rng, columns: 5 });

    // platform side entrance canopy facing the platform (local -Z)
    const canopyY = 3.3;
    place(base, new THREE.BoxGeometry(W - 2.5, 0.14, 2.1), { pos: [0, canopyY, -D / 2 - 0.95] }, M.roofs[1], {
      density: 1.1,
    });
    place(base, new THREE.BoxGeometry(W - 2.4, 0.2, 0.16), { pos: [0, canopyY - 0.06, -D / 2 - 1.95] }, M.trim, {
      density: 1.2,
    });
    for (let i = -2; i <= 2; i++) {
      place(
        base,
        new THREE.CylinderGeometry(0.075, 0.09, canopyY, 8),
        { pos: [i * 3.2, canopyY / 2, -D / 2 - 1.85] },
        M.ironDark,
        { density: 1, project: false }
      );
      place(
        base,
        new THREE.BoxGeometry(0.14, 0.14, 2.0),
        { pos: [i * 3.2, canopyY - 0.14, -D / 2 - 0.95] },
        M.ironDark,
        { density: 1 }
      );
    }
    for (const s of [-1, 1]) {
      place(base, new THREE.BoxGeometry(1.1, 2.3, 0.14), { pos: [s * (W / 2 - 0.9), 1.75, -D / 2 - 0.03] }, M.timber, {
        density: 1.2,
      });
    }
    planner.reserve(cx, cz, 11);
    return { cx, cz, yaw, base };
  }

  function addGoodsShed(x, z, yaw) {
    const base = matrixAt({ pos: [x, terrainHeight(x, z), z], rotY: yaw });
    const W = 11;
    const D = 6.5;
    const H = 4.1;
    place(base, new THREE.BoxGeometry(W + 0.6, 0.5, D + 0.6), { pos: [0, 0.25, 0] }, M.stone, { density: 0.5 });
    place(base, new THREE.BoxGeometry(W, H, D), { pos: [0, 0.5 + H / 2, 0] }, M.brick, { density: 0.6 });
    const roof = gableRoofGeometry(W + 0.8, D + 1.4, 1.7);
    place(base, roof, { pos: [0, 0.5 + H, 0] }, M.roofs[2], { density: 0.8 });
    for (const s of [-1, 1]) {
      place(
        base,
        new THREE.BoxGeometry(2.6, 3.0, 0.2),
        { pos: [s * 3.0, 1.9, -D / 2 - 0.06] },
        M.timber,
        { density: 1.1 }
      );
      place(
        base,
        new THREE.BoxGeometry(0.3, 3.0, 0.2),
        { pos: [s * 3.0 + s * 1.25, 1.9, -D / 2 - 0.07] },
        M.trim,
        { density: 1.4 }
      );
    }
    place(base, new THREE.BoxGeometry(2.4, 0.2, 1.2), { pos: [0, 3.3, -D / 2 - 0.6] }, M.timber, { density: 1 });
    planner.reserve(x, z, 8);
  }

  function addWaterTower(x, z) {
    const y = terrainHeight(x, z);
    const base = matrixAt({ pos: [x, y, z] });
    place(base, new THREE.CylinderGeometry(1.5, 1.7, 0.4, 14), { pos: [0, 0.2, 0] }, M.stone, { density: 0.7, project: false });
    for (let i = 0; i < 4; i++) {
      const a = (i / 4) * Math.PI * 2 + Math.PI / 4;
      place(
        base,
        new THREE.CylinderGeometry(0.13, 0.16, 6.4, 8),
        { pos: [Math.cos(a) * 1.05, 3.4, Math.sin(a) * 1.05] },
        M.steel,
        { density: 0.9, project: false }
      );
    }
    for (const yy of [2.2, 4.6]) {
      for (let i = 0; i < 4; i++) {
        const a = (i / 4) * Math.PI * 2 + Math.PI / 4;
        const a2 = ((i + 1) / 4) * Math.PI * 2 + Math.PI / 4;
        const x1 = Math.cos(a) * 1.05;
        const z1 = Math.sin(a) * 1.05;
        const x2 = Math.cos(a2) * 1.05;
        const z2 = Math.sin(a2) * 1.05;
        const len = Math.hypot(x2 - x1, z2 - z1);
        place(
          base,
          new THREE.BoxGeometry(len, 0.1, 0.1),
          { pos: [(x1 + x2) / 2, yy, (z1 + z2) / 2], rotY: Math.atan2(-(z2 - z1), x2 - x1) },
          M.steel,
          { density: 1.2 }
        );
      }
    }
    const tank = new THREE.CylinderGeometry(2.0, 2.0, 2.6, 16);
    place(base, tank, { pos: [0, 7.0, 0] }, M.timber, { density: 0.7, project: false });
    place(base, new THREE.CylinderGeometry(2.15, 2.15, 0.2, 16), { pos: [0, 8.3, 0] }, M.steelDark, {
      density: 0.9,
      project: false,
    });
    place(base, new THREE.CylinderGeometry(0.5, 0.5, 2.7, 12), { pos: [0, 7.0, 0] }, M.ironDark, {
      density: 0.9,
      project: false,
    });
    planner.reserve(x, z, 4);
  }

  function addMill(x, z, yaw) {
    const base = matrixAt({ pos: [x, terrainHeight(x, z), z], rotY: yaw });
    const W = 8;
    const D = 7;
    const H = 5.8;
    place(base, new THREE.BoxGeometry(W + 0.7, 0.5, D + 0.7), { pos: [0, 0.25, 0] }, M.stone, { density: 0.5 });
    place(base, new THREE.BoxGeometry(W, H, D), { pos: [0, 0.5 + H / 2, 0] }, M.plaster[3], { density: 0.5 });
    const roof = gableRoofGeometry(W + 0.9, D + 1.2, 2.2);
    place(base, roof, { pos: [0, 0.5 + H, 0] }, M.thatch, { density: 0.7 });
    place(base, new THREE.BoxGeometry(0.9, 1.7, 0.9), { pos: [W * 0.3, 0.5 + H + 1.1, 0] }, M.brick, { density: 1 });
    // launder carrying water to the wheel
    place(base, new THREE.BoxGeometry(3.4, 0.42, 1.4), { pos: [-W / 2 - 1.7, 2.5, 0] }, M.timber, { density: 1 });
    for (const s of [-1, 1]) {
      place(
        base,
        new THREE.BoxGeometry(0.16, 2.5, 0.16),
        { pos: [-W / 2 - 2.6, 1.25, s * 0.6] },
        M.timber,
        { density: 1.2 }
      );
    }
    addWindows(base, { width: W, depth: D, floors: 2, floorHeight: 2.4, baseY: 0.5, litRatio: 0.6, rng, columns: 3 });

    // water wheel: sits over the channel, axle across the flow, and turns
    const wheelLocalX = -W / 2 - 2.1;
    const cos = Math.cos(yaw);
    const sin = Math.sin(yaw);
    const pivot = new THREE.Group();
    pivot.position.set(
      x + wheelLocalX * cos,
      terrainHeight(x, z) + 0.1,
      z - wheelLocalX * sin
    );
    pivot.rotation.y = yaw;
    const spin = new THREE.Group();
    pivot.add(spin);

    const rim = new THREE.Mesh(new THREE.TorusGeometry(1.9, 0.2, 8, 22), M.timber);
    rim.geometry.rotateY(Math.PI / 2);
    rim.castShadow = true;
    spin.add(rim);
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 1.3, 10), M.timber);
    hub.geometry.rotateZ(Math.PI / 2);
    hub.castShadow = true;
    spin.add(hub);
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2;
      const spoke = new THREE.Mesh(new THREE.BoxGeometry(0.16, 3.6, 0.16), M.timber);
      spoke.rotation.x = a;
      spoke.castShadow = true;
      spin.add(spoke);
      const paddle = new THREE.Mesh(new THREE.BoxGeometry(1.15, 0.7, 0.1), M.timber);
      paddle.position.set(0, Math.cos(a) * 1.85, Math.sin(a) * 1.85);
      paddle.rotation.x = a;
      paddle.castShadow = true;
      spin.add(paddle);
    }
    group.add(pivot);
    planner.reserve(x, z, 9);
    return { pivot, spin };
  }

  function addBarn(x, z, yaw) {
    const base = matrixAt({ pos: [x, terrainHeight(x, z), z], rotY: yaw });
    const W = 10;
    const D = 6.5;
    const H = 4.4;
    place(base, new THREE.BoxGeometry(W + 0.5, 0.4, D + 0.5), { pos: [0, 0.2, 0] }, M.stone, { density: 0.5 });
    place(base, new THREE.BoxGeometry(W, H, D), { pos: [0, 0.4 + H / 2, 0] }, M.timber, { density: 0.6 });
    const roof = gableRoofGeometry(W + 1.0, D + 1.6, 2.4);
    place(base, roof, { pos: [0, 0.4 + H, 0] }, M.thatch, { density: 0.7 });
    for (const s of [-1, 1]) {
      place(base, new THREE.BoxGeometry(3.0, 3.2, 0.2), { pos: [s * 2.6, 2.0, -D / 2 - 0.07] }, M.woodDark, { density: 1 });
    }
    place(base, new THREE.BoxGeometry(1.6, 0.3, 1.0), { pos: [0, 4.0, -D / 2 - 0.5] }, M.timber, { density: 1.2 });
    planner.reserve(x, z, 7);
  }

  function addWarehouse(x, z, yaw) {
    addHouse({
      x,
      z,
      yaw,
      width: 9,
      depth: 7,
      floors: 1,
      floorHeight: 4.4,
      roof: 'flat',
      roofRise: 0,
      overhang: 0.3,
      wall: M.brick,
      roofMat: M.roofs[2],
      chimney: false,
      litRatio: 0.45,
    });
  }

  // --- props ---------------------------------------------------------------

  function addBench(x, z, yaw, y = 0) {
    const base = matrixAt({ pos: [x, terrainHeight(x, z) + y, z], rotY: yaw });
    for (const s of [-1, 1]) {
      place(base, new THREE.BoxGeometry(0.14, 0.42, 0.6), { pos: [s * 0.7, 0.21, 0] }, M.ironDark, { density: 1.2 });
    }
    place(base, new THREE.BoxGeometry(1.9, 0.12, 0.6), { pos: [0, 0.45, 0] }, M.timber, { density: 1.2 });
    place(base, new THREE.BoxGeometry(1.9, 0.5, 0.1), { pos: [0, 0.78, -0.28] }, M.timber, { density: 1.2 });
  }

  function addBarrel(x, z) {
    const y = terrainHeight(x, z);
    const base = matrixAt({ pos: [x, y, z], rotY: rng.range(0, 6.28) });
    place(base, new THREE.CylinderGeometry(0.34, 0.3, 0.8, 12), { pos: [0, 0.4, 0] }, M.timber, { density: 1.3, project: false });
    for (const yy of [0.2, 0.6]) {
      place(base, new THREE.CylinderGeometry(0.36, 0.36, 0.1, 12), { pos: [0, yy, 0] }, M.ironDark, {
        density: 1.6,
        project: false,
      });
    }
  }

  function addCrate(x, z, s = 1) {
    const y = terrainHeight(x, z);
    const base = matrixAt({ pos: [x, y, z], rotY: rng.range(0, 6.28) });
    place(base, new THREE.BoxGeometry(0.9 * s, 0.75 * s, 0.9 * s), { pos: [0, 0.38 * s, 0] }, M.timber, { density: 1.4 });
  }

  function addHaystack(x, z) {
    const y = terrainHeight(x, z);
    const base = matrixAt({ pos: [x, y, z], rotY: rng.range(0, 6.28) });
    place(base, new THREE.CylinderGeometry(0.9, 1.1, 1.4, 10), { pos: [0, 0.7, 0] }, M.thatch, {
      density: 1.1,
      project: false,
    });
    place(base, new THREE.ConeGeometry(1.15, 0.9, 10), { pos: [0, 1.8, 0] }, M.thatch, { density: 1.1, project: false });
  }

  function addFountain(x, z) {
    const y = terrainHeight(x, z);
    const base = matrixAt({ pos: [x, y, z] });
    place(base, new THREE.CylinderGeometry(2.2, 2.4, 0.7, 20), { pos: [0, 0.35, 0] }, M.stone, { density: 0.8, project: false });
    place(base, new THREE.CylinderGeometry(1.9, 1.9, 0.2, 20), { pos: [0, 0.62, 0] }, M.water, { density: 0.6, project: false });
    place(base, new THREE.CylinderGeometry(0.45, 0.6, 1.3, 12), { pos: [0, 1.2, 0] }, M.stoneWarm, { density: 1, project: false });
    place(base, new THREE.CylinderGeometry(0.9, 0.2, 0.5, 14), { pos: [0, 2.05, 0] }, M.stoneWarm, { density: 1, project: false });
    place(base, new THREE.SphereGeometry(0.28, 12, 10), { pos: [0, 2.45, 0] }, M.stone, { density: 1.4, project: false });
    planner.reserve(x, z, 3);
  }

  function addWell(x, z) {
    const y = terrainHeight(x, z);
    const base = matrixAt({ pos: [x, y, z] });
    place(base, new THREE.CylinderGeometry(0.85, 0.9, 0.9, 14), { pos: [0, 0.45, 0] }, M.stone, { density: 0.9, project: false });
    for (const s of [-1, 1]) {
      place(base, new THREE.BoxGeometry(0.14, 2.0, 0.14), { pos: [s * 0.7, 1.4, 0] }, M.timber, { density: 1.2 });
    }
    const roof = gableRoofGeometry(2.4, 2.0, 0.8);
    roof.rotateY(Math.PI / 2);
    batcher.add(roof, base.clone().multiply(matrixAt({ pos: [0, 2.5, 0] })), M.thatch, { density: 1 });
    planner.reserve(x, z, 2);
  }

  function addSignpost(x, z, yaw) {
    const base = matrixAt({ pos: [x, terrainHeight(x, z), z], rotY: yaw });
    place(base, new THREE.CylinderGeometry(0.07, 0.09, 2.4, 8), { pos: [0, 1.2, 0] }, M.timber, { density: 1.6, project: false });
    place(base, new THREE.BoxGeometry(0.1, 0.34, 1.4), { pos: [0, 2.3, 0.5] }, M.trim, { density: 1.6 });
    place(base, new THREE.BoxGeometry(0.1, 0.34, 1.1), { pos: [0, 1.8, -0.4] }, M.trim, { density: 1.6 });
  }

  function addWagon(x, z, yaw) {
    const base = matrixAt({ pos: [x, terrainHeight(x, z), z], rotY: yaw });
    place(base, new THREE.BoxGeometry(5.4, 1.5, 2.0), { pos: [0, 1.85, 0] }, M.timber, { density: 0.9 });
    place(base, new THREE.BoxGeometry(5.6, 0.22, 2.1), { pos: [0, 1.1, 0] }, M.woodDark, { density: 1.1 });
    for (const ax of [-1.9, 1.9]) {
      for (const s of [-1, 1]) {
        const w = new THREE.CylinderGeometry(0.3, 0.3, 0.16, 14);
        w.rotateX(Math.PI / 2);
        place(base, w, { pos: [ax, 0.72, s * 0.82] }, M.ironDark, { density: 1.2, project: false });
      }
    }
  }

  function addPlatform() {
    const s = inwardSign(STATION_U);
    const profile = [
      [s * PLATFORM.innerOffset, 0.0],
      [s * PLATFORM.innerOffset, PLATFORM.height],
      [s * PLATFORM.outerOffset, PLATFORM.height],
      [s * PLATFORM.outerOffset, 0.0],
    ];
    const geo = sweepProfile(trackCurve, {
      profile,
      uStart: PLATFORM_SPAN.u0,
      uEnd: PLATFORM_SPAN.u1,
      samples: 90,
      uDensity: 0.22,
      vDensity: 0.4,
    });
    batcher.add(geo, null, M.platform, { density: 0.42, project: false });
    // coping stones and end caps
    const coping = profile.map(([o, h]) => [o, h + (h > 0.5 ? 0.12 : 0)]);
    const copingGeo = sweepProfile(trackCurve, {
      profile: coping,
      uStart: PLATFORM_SPAN.u0,
      uEnd: PLATFORM_SPAN.u1,
      samples: 90,
      uDensity: 0.3,
      vDensity: 0.5,
    });
    batcher.add(copingGeo, null, M.platform, { density: 0.5, project: false });
    for (const u of [PLATFORM_SPAN.u0, PLATFORM_SPAN.u1]) {
      const p = trackCurve.getPointAt(u);
      const n = trackInwardNormal(u);
      const mid = (PLATFORM.innerOffset + PLATFORM.outerOffset) / 2;
      place(
        matrixAt({ pos: [p.x + n.x * mid, 0, p.z + n.z * mid], rotY: yawFromTangent(u) }),
        new THREE.BoxGeometry(0.5, PLATFORM.height, PLATFORM.outerOffset - PLATFORM.innerOffset),
        { pos: [0, PLATFORM.height / 2, 0] },
        M.platform,
        { density: 0.6 }
      );
    }
  }

  // =========================================================================
  // Compose the settlement
  // =========================================================================

  const north = ROADS.find((r) => r.id === 'north');
  const main = ROADS.find((r) => r.id === 'main');
  const south = ROADS.find((r) => r.id === 'south');
  const yard = ROADS.find((r) => r.id === 'yard');

  addPlatform();

  // --- station quarter -----------------------------------------------------
  addStationBuilding();
  const sidingEndP = SIDING.curve.getPointAt(1);
  const sidingInward = trackInwardNormal(SIDING.uEnd);
  addGoodsShed(
    sidingEndP.x + sidingInward.x * 6.5,
    sidingEndP.z + sidingInward.z * 6.5,
    yawFromTangent(SIDING.uEnd)
  );
  addWaterTower(27.0, -10.5);
  // goods depot beside the yard road, and a permanent way hut by the crossing
  addWarehouse(20.5, 22.5, 0.45);
  addWarehouse(-2.5, -30.0, Math.PI + 0.06);

  // station forecourt + lamps + benches
  addLamp(27.5, -5.6, { light: true });
  addLamp(27.5, 5.2, { light: true });
  addLamp(23.5, -0.4, { light: false });
  for (let i = -2; i <= 2; i++) {
    const u = STATION_U + i * 0.021;
    const p = trackCurve.getPointAt(u);
    const n = trackInwardNormal(u);
    addLamp(p.x + n.x * 5.7, p.z + n.z * 5.7, { height: 2.5, light: i === 0 || i === 2, y: PLATFORM.height });
    if (i % 2 === 0) addBench(p.x + n.x * 4.6, p.z + n.z * 4.6, yawFromTangent(u) + Math.PI / 2, PLATFORM.height);
  }

  // --- town centre ---------------------------------------------------------
  addTownHall(15.5, 12.5, Math.PI + 0.03);
  addChurch(19.5, -14.0, 0.02);

  // shop row on the north side of the high street
  const shopRow = [
    [2.5, 9.4],
    [8.6, 9.9],
    [14.6, 10.2],
  ];
  shopRow.forEach(([x, z], i) => {
    addHouse({
      x,
      z,
      yaw: Math.PI - 0.03,
      width: 5.6,
      depth: 5.0,
      floors: i === 1 ? 3 : 2,
      floorHeight: 1.9,
      roof: 'gable',
      roofAlongX: true,
      roofRise: 1.8,
      wall: M.plaster[(i * 2 + 1) % M.plaster.length],
      roofMat: M.roofs[i % M.roofs.length],
      litRatio: 0.75,
      bay: i === 0,
      dormer: i === 1,
    });
    // shop front
    const base = matrixAt({ pos: [x, terrainHeight(x, z), z], rotY: Math.PI - 0.03 });
    place(base, new THREE.BoxGeometry(4.6, 0.25, 1.6), { pos: [0, 2.6, 2.9] }, M.trim, { density: 1.2 });
    for (let k = -1; k <= 1; k++) {
      place(base, new THREE.CylinderGeometry(0.06, 0.06, 2.6, 6), { pos: [k * 2.2, 1.3, 3.5] }, M.ironDark, {
        density: 1.6,
        project: false,
      });
    }
    place(base, WINDOW_GLASS, { pos: [0, 1.6, 2.6] }, M.glassWarm, { density: 1, project: false, cast: false });
  });

  // inn on the south side of the street
  addHouse({
    x: 22.5,
    z: 3.0,
    yaw: 0.02,
    width: 8.5,
    depth: 6.2,
    floors: 2,
    floorHeight: 2.1,
    roof: 'gable',
    roofAlongX: true,
    wall: M.plaster[4],
    roofMat: M.roofs[0],
    litRatio: 0.8,
    bay: true,
  });

  addFountain(11.0, 6.6);
  addLampsAlongRoad(main, { from: 0.08, to: 0.95, count: 7, offset: -3.4, height: 3.0, lightEvery: 2 });
  addLamp(11.0, 8.8, { light: true });
  addLamp(15.5, 9.2, { light: true });
  addLamp(24.5, 6.4, { light: true });
  addSignpost(26.5, 1.5, 0.6);

  // --- riverside: mill on the east bank, farm on the west bank ------------
  const mill = addMill(MILL.x, MILL.z, MILL.yaw);
  addLamp(0.2, -18.4, { height: 2.6, light: true });
  addBarn(-32.0, 8.0, 0.5);
  addHaystack(-29.0, 6.0);
  addHaystack(-30.5, 8.8);
  addHaystack(-27.5, 9.5);
  addWell(-34.5, 3.0);
  addFence(-36.0, 11.0, -36.0, 17.0);
  addFence(-36.0, 17.0, -30.0, 17.0);

  // farm cottages on the west bank
  addHouse({
    x: -35.5,
    z: -6.5,
    yaw: -0.4,
    width: 6.2,
    depth: 5.2,
    floors: 2,
    floorHeight: 1.9,
    roof: 'gable',
    roofAlongX: true,
    wall: M.plaster[1],
    roofMat: M.roofs[4],
    litRatio: 0.5,
    dormer: true,
  });
  addHouse({
    x: -36.5,
    z: 0.5,
    yaw: 0.25,
    width: 5.4,
    depth: 4.8,
    floors: 1,
    floorHeight: 2.1,
    roof: 'hip',
    wall: M.plaster[7],
    roofMat: M.roofs[0],
    litRatio: 0.55,
  });

  // crop fields on the flat land behind the mill
  for (let i = 0; i < 7; i++) {
    const fx = -41 + i * 1.5;
    const rows = 5;
    for (let k = 0; k < rows; k++) {
      const fz = -18 + k * 2.0;
      if (distanceToTrack(fx, fz) < 6.5) continue;
      batcher.add(
        new THREE.BoxGeometry(1.1, 0.34, 1.75),
        matrixAt({ pos: [fx, terrainHeight(fx, fz) + 0.15, fz] }),
        k % 2 ? M.crop : M.cropGreen,
        { density: 0.9 }
      );
    }
  }

  // mill lane / farm lane on the west bank
  addLamp(-25.5, 1.0, { height: 2.6, light: true });

  // --- residential streets (sampled along the lanes) ----------------------
  function scatterHousesAlong(road, opts) {
    const { side, from = 0.08, to = 0.94, gap = 10.5, offset = 7.2, jitter = 1.2, floors = 2, lit = 0.5 } = opts;
    const count = Math.max(1, Math.floor(((to - from) * road.length) / gap));
    let placedCount = 0;
    for (let i = 0; i < count; i++) {
      const u = from + ((i + 0.5) / count) * (to - from);
      const p = road.curve.getPointAt(u);
      const t = road.curve.getTangentAt(u);
      const len = Math.hypot(t.z, -t.x) || 1;
      const px = t.z / len;
      const pz = -t.x / len;
      const off = offset + rng.jitter(jitter);
      const x = p.x + px * off * side;
      const z = p.z + pz * off * side;
      if (!planner.isFree(x, z, 4.2)) continue;
      const yaw = Math.atan2(-px * side, -pz * side) + rng.jitter(0.05);
      addHouse({
        x,
        z,
        yaw,
        width: rng.range(4.6, 6.6),
        depth: rng.range(4.2, 5.6),
        floors: rng.next() < 0.25 ? 1 : floors,
        floorHeight: 1.85,
        roof: rng.chance(0.7) ? 'gable' : 'hip',
        roofAlongX: rng.chance(0.5),
        roofRise: rng.range(1.6, 2.3),
        wall: M.plaster[rng.int(0, M.plaster.length - 1)],
        roofMat: M.roofs[rng.int(0, M.roofs.length - 1)],
        litRatio: lit,
        dormer: rng.chance(0.22),
        doorSide: rng.chance(0.5) ? 0 : rng.sign(),
        chimney: rng.chance(0.9),
      });
      placedCount++;
    }
    return placedCount;
  }

  scatterHousesAlong(north, { side: 1, from: 0.2, to: 0.95, gap: 11, offset: 6.8, lit: 0.55 });
  scatterHousesAlong(north, { side: -1, from: 0.3, to: 0.95, gap: 13, offset: 7.4, lit: 0.5 });
  scatterHousesAlong(main, { side: 1, from: 0.08, to: 0.42, gap: 9.5, offset: 6.6, lit: 0.6, floors: 2 });
  scatterHousesAlong(main, { side: -1, from: 0.5, to: 0.95, gap: 12, offset: 7.6, lit: 0.45 });
  scatterHousesAlong(south, { side: 1, from: 0.1, to: 0.45, gap: 12, offset: 7.0, lit: 0.5 });
  scatterHousesAlong(south, { side: -1, from: 0.45, to: 0.8, gap: 13, offset: 7.2, lit: 0.5 });
  scatterHousesAlong(yard, { side: 1, from: 0.15, to: 0.9, gap: 12, offset: 6.4, lit: 0.55 });
  scatterHousesAlong(yard, { side: -1, from: 0.2, to: 0.7, gap: 14, offset: 6.8, lit: 0.5 });

  // --- north hamlet outside the loop --------------------------------------
  for (let i = 0; i < 5; i++) {
    const x = -6 + i * 4.6 + rng.jitter(0.6);
    const z = -29.5 + rng.jitter(1.6) + (i % 2) * 1.6;
    if (!planner.isFree(x, z, 4)) continue;
    addHouse({
      x,
      z,
      yaw: Math.PI + rng.jitter(0.2),
      width: rng.range(4.4, 5.6),
      depth: 4.4,
      floors: rng.chance(0.5) ? 1 : 2,
      floorHeight: 1.8,
      roof: 'gable',
      roofAlongX: true,
      wall: M.plaster[rng.int(0, M.plaster.length - 1)],
      roofMat: M.roofs[rng.int(0, M.roofs.length - 1)],
      litRatio: 0.45,
    });
  }

  // --- south strip: small farm outside the loop ---------------------------
  addBarn(6.0, 29.5, Math.PI + 0.1);
  addFence(-2.0, 30.5, 12.0, 30.5);
  addHaystack(9.0, 31.0);

  // --- vegetation ----------------------------------------------------------
  function scatterTrees(count, filter, kind = null) {
    let placed = 0;
    let tries = 0;
    while (placed < count && tries < count * 30) {
      tries++;
      const x = rng.range(BOARD.minX + 2, BOARD.maxX - 2);
      const z = rng.range(BOARD.minZ + 2, BOARD.maxZ - 2);
      const dTrack = distanceToTrack(x, z);
      const dRiver = distanceToRiver(x, z);
      const dRoad = distanceToRoads(x, z);
      if (dTrack < 5.6) continue;
      if (dRiver < 5.4) continue;
      if (dRoad < 2.6) continue;
      if (!filter(x, z, dTrack, dRiver, dRoad)) continue;
      if (!planner.isFree(x, z, 1.7)) continue;
      addTree(x, z, rng.range(0.85, 1.35), kind);
      planner.reserve(x, z, 1.6);
      placed++;
    }
    return placed;
  }

  // riverbank trees
  scatterTrees(64, (x, z, dT, dR) => dR < 14);
  // woodland in the north west corner outside the loop
  scatterTrees(34, (x, z) => x < -26 && z < -24, 'conifer');
  // south strip
  scatterTrees(38, (x, z) => z > 25.0);
  // west bank and the empty corners
  scatterTrees(26, (x, z) => x < -22 && z > 0);
  // general scatter in the countryside between buildings
  scatterTrees(52, () => true);
  // orchard on the western mound
  for (let i = 0; i < 4; i++) {
    for (let k = 0; k < 4; k++) {
      const x = -33 + i * 2.6;
      const z = 10 + k * 2.6;
      if (distanceToRoads(x, z) < 2.4) continue;
      addTree(x, z, 0.8, 'broadleaf');
    }
  }

  for (let i = 0; i < 40; i++) {
    const x = rng.range(BOARD.minX + 2, BOARD.maxX - 2);
    const z = rng.range(BOARD.minZ + 2, BOARD.maxZ - 2);
    if (distanceToTrack(x, z) < 5 || distanceToRiver(x, z) < 5.4 || distanceToRoads(x, z) < 2.4) continue;
    if (!planner.isFree(x, z, 1.0)) continue;
    addBush(x, z);
    planner.reserve(x, z, 0.9);
  }

  // hedges around a few gardens and the churchyard
  addHedge(15.0, -8.0, 24.5, -8.0);
  addHedge(15.0, -8.0, 15.0, -20.0);
  addHedge(-6.5, -19.0, -1.0, -19.0);
  addHedge(28.0, 16.5, 34.0, 16.5);

  // --- goods yard clutter --------------------------------------------------
  const sidingEnd = SIDING.curve.getPointAt(1);
  addWagon(sidingEnd.x - 5.5, sidingEnd.z + 1.6, yawFromTangent(SIDING.uEnd));
  addCrate(sidingEnd.x - 3.0, sidingEnd.z + 4.2, 1.1);
  addCrate(sidingEnd.x - 2.0, sidingEnd.z + 5.0, 0.9);
  addBarrel(sidingEnd.x - 4.4, sidingEnd.z + 5.2);
  addBarrel(sidingEnd.x - 5.2, sidingEnd.z + 4.4);
  addLamp(sidingEnd.x - 1.5, sidingEnd.z + 6.5, { height: 2.6, light: true });

  // --- level crossing keeper's cottage ------------------------------------
  addHouse({
    x: 6.5,
    z: -27.5,
    yaw: Math.PI - 0.5,
    width: 5.0,
    depth: 4.4,
    floors: 2,
    floorHeight: 1.75,
    roof: 'gable',
    roofAlongX: true,
    wall: M.plaster[6],
    roofMat: M.roofs[4],
    litRatio: 0.6,
    chimney: true,
  });

  batcher.build(group);
  scene.add(group);
  return { group, lamps, planner, mill };
}
