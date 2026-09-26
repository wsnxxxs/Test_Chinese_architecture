/**
 * The railway: ballast, sleepers, rails, the two river bridges, the station
 * platform and the level crossing. Everything is generated from the layout's
 * arc-length parameterised loop, so the track stays a single continuous closed
 * curve and the bridge openings fall exactly where the river crosses it.
 */
import * as THREE from 'three';
import { stripAlongPath, slopedStrip, box } from './geom.js';
import { RIVER_HALF_WIDTH } from './layout.js';

/** Distance between the two running rails (rail centres at ±0.72). */
export const GAUGE = 1.44;
/** Sleeper spacing along the track. */
const SLEEPER_STEP = 0.44;

function mesh(geo, mat, { cast = true, receive = true } = {}) {
  const m = new THREE.Mesh(geo, mat);
  m.castShadow = cast;
  m.receiveShadow = receive;
  return m;
}

/** Cut the given closed ranges out of [0, length) and return what is left. */
function excludeGaps(length, gaps) {
  let ranges = [[0, length]];
  for (const g of gaps) {
    const next = [];
    for (const [a, b] of ranges) {
      if (g.d1 <= a || g.d0 >= b) {
        next.push([a, b]);
        continue;
      }
      if (g.d0 > a) next.push([a, g.d0]);
      if (g.d1 < b) next.push([g.d1, b]);
    }
    ranges = next;
  }
  return ranges;
}

/**
 * One rail: head, web and foot, so it reads as an I-section instead of a slab.
 */
function railGeometry(track, lateral) {
  const parts = [
    { width: 0.125, y0: 0.325, y1: 0.36 },   // head
    { width: 0.05, y0: 0.255, y1: 0.33 },    // web
    { width: 0.13, y0: 0.235, y1: 0.27 },    // foot
  ];
  return parts.map((p) => stripAlongPath(track, 0, track.length, {
    lateral,
    width: p.width,
    y0: p.y0,
    y1: p.y1,
    uvScale: 1,
    caps: false,
  }));
}

/** Timber trestle bridge carrying the rails over a river crossing. */
function railBridge(M, layout, c) {
  const g = new THREE.Group();
  const { track } = layout;
  const span = c.span;
  const d0 = c.dA - span / 2;
  const d1 = c.dA + span / 2;

  // Deck planking, laid along the track across the gap.
  g.add(mesh(stripAlongPath(track, d0, d1, {
    lateral: 0, width: 2.95, y0: -0.06, y1: 0.235, uvScale: 0.35,
  }), M.bridgeWood));

  // Two deck stringers and the trestle legs standing in the water.
  for (const side of [-1, 1]) {
    const lateral = side * 1.32;
    g.add(mesh(stripAlongPath(track, d0, d1, {
      lateral, width: 0.17, y0: -0.3, y1: -0.05, uvScale: 0.6, caps: false,
    }), M.bridgeWood));
    for (const d of [d0 + span * 0.22, d0 + span * 0.78]) {
      const f = track.frame(d, { p: new THREE.Vector3(), t: new THREE.Vector3(), n: new THREE.Vector3() });
      const p = f.p.clone().addScaledVector(f.n, lateral);
      p.y = -0.16;
      g.add(box(0.16, 0.5, 0.16, M.bridgeWood, p.x, -0.16, p.z));
      // Diagonal brace back to the deck.
      const mid = f.p.clone().addScaledVector(f.n, lateral);
      mid.y = -0.06;
      const low = f.p.clone().addScaledVector(f.n, -lateral * 0.55);
      low.y = -0.3;
      const len = mid.distanceTo(low);
      const brace = box(0.08, len, 0.08, M.bridgeWood);
      brace.position.copy(mid).lerp(low, 0.5);
      brace.lookAt(low);
      brace.rotateX(Math.PI / 2);
      g.add(brace);
    }
  }

  // Stone abutments either side, carrying the ends of the deck.
  for (const d of [d0 - 0.42, d1 + 0.42]) {
    const f = track.frame(d, { p: new THREE.Vector3(), t: new THREE.Vector3(), n: new THREE.Vector3() });
    const ang = Math.atan2(f.t.x, f.t.z);
    const pier = box(3.4, 0.55, 0.62, M.stone, f.p.x, 0.02, f.p.z, ang);
    g.add(pier);
    const cap = box(3.55, 0.08, 0.72, M.stoneDark, f.p.x, 0.27, f.p.z, ang);
    g.add(cap);
  }

  // Low timber balustrade along both edges.
  for (const side of [-1, 1]) {
    g.add(mesh(stripAlongPath(track, d0 + 0.1, d1 - 0.1, {
      lateral: side * 1.42, width: 0.12, y0: 0.235, y1: 0.4, uvScale: 0.5, caps: false,
    }), M.bridgeWood));
  }

  // Bridge number boards on the abutments.
  for (const side of [-1, 1]) {
    const f = track.frame(d0 - 0.42, { p: new THREE.Vector3(), t: new THREE.Vector3(), n: new THREE.Vector3() });
    const p = f.p.clone().addScaledVector(f.n, side * 1.62);
    const post = box(0.06, 0.34, 0.06, M.bridgeWood, p.x, 0.42, p.z);
    g.add(post);
    const board = box(0.02, 0.22, 0.42, M.roadLine, p.x, 0.5, p.z, Math.atan2(f.t.x, f.t.z));
    g.add(board);
  }
  return g;
}

/** The station platform, with coping and tactile edge. */
function buildPlatform(M, layout) {
  const g = new THREE.Group();
  const { track, platform: pl, Y } = layout;
  const side = pl.side;
  const centre = (side * (pl.inner + pl.outer)) / 2;
  const width = pl.outer - pl.inner;

  g.add(mesh(stripAlongPath(track, pl.d0, pl.d1, {
    lateral: centre, width, y0: 0.02, y1: Y.platformTop, uvScale: 0.22, uvV: 2,
  }), M.platform));

  // Coping lip along the track side, and a pale tactile strip behind it.
  g.add(mesh(stripAlongPath(track, pl.d0, pl.d1, {
    lateral: side * (pl.inner + 0.11), width: 0.22, y0: Y.platformTop - 0.02, y1: Y.platformTop + 0.05,
    uvScale: 1,
  }), M.concrete));
  g.add(mesh(stripAlongPath(track, pl.d0, pl.d1, {
    lateral: side * (pl.inner + 0.38), width: 0.3, y0: Y.platformTop, y1: Y.platformTop + 0.012,
    uvScale: 0.3,
  }), M.roadLine));

  // Small end walls so the platform reads as a raised structure.
  for (const d of [pl.d0 - 0.05, pl.d1 + 0.05]) {
    g.add(mesh(stripAlongPath(track, d - 0.05, d + 0.05, {
      lateral: centre, width, y0: 0.02, y1: Y.platformTop, uvScale: 1,
    }), M.stone, { cast: false }));
  }
  return g;
}

/**
 * Road over the rails: timber planks laid between the flangeways at rail height,
 * so the rails run straight through and the road surface steps up onto the deck.
 */
function buildLevelCrossing(M, layout) {
  const g = new THREE.Group();
  const c = layout.levelCrossing;
  if (!c) return g;
  const road = layout.roadById['village-road'].track;
  const { Y } = layout;
  const d = c.dA;
  const half = 1.95;
  const deckW = (layout.roadById['village-road'].width || 1.4) + 0.45;

  g.add(mesh(stripAlongPath(road, d - half, d + half, {
    lateral: 0, width: deckW, y0: 0.2, y1: Y.sleeperTop - 0.005, uvScale: 0.3,
  }), M.bridgeWood));

  // White edge markings and a centre line.
  for (const side of [-1, 1]) {
    g.add(mesh(stripAlongPath(road, d - half, d + half, {
      lateral: side * (deckW / 2 - 0.07), width: 0.07, y0: Y.sleeperTop - 0.005, y1: Y.sleeperTop + 0.01,
      uvScale: 1,
    }), M.roadLine));
  }

  // Warning signs on both approach sides.
  const f = road.frame(d, { p: new THREE.Vector3(), t: new THREE.Vector3(), n: new THREE.Vector3() });
  const signAngle = Math.atan2(f.t.x, f.t.z);
  for (const along of [-1, 1]) {
    const spot = road.position(d + along * (half + 0.55), new THREE.Vector3());
    spot.y = 0;
    g.add(box(0.09, 1.15, 0.09, M.lampPost, spot.x, 0.58, spot.z));
    const board = box(0.02, 0.42, 0.42, M.roadLine, spot.x + Math.cos(signAngle) * 0.06, 1.02, spot.z - Math.sin(signAngle) * 0.06, signAngle);
    g.add(board);
    // Crossed-rail chevrons.
    for (let i = 0; i < 2; i++) {
      const bar = box(0.03, 0.06, 0.3, M.stoneDark);
      bar.position.set(board.position.x + 0.02, 1.02 + (i ? 0.11 : -0.05), board.position.z);
      bar.rotation.z = i ? -0.7 : 0.7;
      g.add(bar);
    }
  }
  return g;
}

export function buildRailway(M, layout) {
  const group = new THREE.Group();
  const { track, Y, railCrossings } = layout;

  // --- ballast, interrupted where the bridges take over ---------------------
  const gaps = railCrossings.map((c) => ({ d0: c.dA - c.span / 2 - 0.12, d1: c.dA + c.span / 2 + 0.12 }));
  for (const [d0, d1] of excludeGaps(track.length, gaps)) {
    group.add(mesh(stripAlongPath(track, d0, d1, {
      lateral: 0, width: 3.2, y0: Y.ballastBottom, y1: Y.ballastTop, uvScale: 0.16, uvV: 1.6,
    }), M.ballast));
  }

  // --- sleepers (instanced, continuous over the bridges) -------------------
  const sleeperGeo = new THREE.BoxGeometry(2.45, 0.13, 0.34);
  const count = Math.floor(track.length / SLEEPER_STEP);
  const sleepers = new THREE.InstancedMesh(sleeperGeo, M.sleeper, count);
  sleepers.castShadow = true;
  sleepers.receiveShadow = true;
  const m = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const basis = new THREE.Matrix4();
  const up = new THREE.Vector3(0, 1, 0);
  const f = { p: new THREE.Vector3(), t: new THREE.Vector3(), n: new THREE.Vector3() };
  const pos = new THREE.Vector3();
  const one = new THREE.Vector3(1, 1, 1);
  let si = 0;
  for (let i = 0; i < count; i++) {
    const d = (i * SLEEPER_STEP) % track.length;
    track.frame(d, f);
    basis.makeBasis(f.n, up, f.t);
    q.setFromRotationMatrix(basis);
    pos.copy(f.p);
    pos.y = Y.sleeperTop - 0.065;
    m.compose(pos, q, one);
    sleepers.setMatrixAt(si++, m);
  }
  sleepers.count = si;
  sleepers.instanceMatrix.needsUpdate = true;
  group.add(sleepers);

  // --- rails ---------------------------------------------------------------
  for (const lateral of [-0.72, 0.72]) {
    for (const geo of railGeometry(track, lateral)) {
      group.add(mesh(geo, M.rail, { cast: false }));
    }
  }

  // --- bridges -------------------------------------------------------------
  for (const c of railCrossings) group.add(railBridge(M, layout, c));

  // --- platform + level crossing -------------------------------------------
  group.add(buildPlatform(M, layout));
  group.add(buildLevelCrossing(M, layout));

  // --- roadside vegetation guard: small white distance posts --------------
  const postGeo = new THREE.BoxGeometry(0.09, 0.42, 0.09);
  const postCount = 10;
  const posts = new THREE.InstancedMesh(postGeo, M.concrete, postCount);
  for (let i = 0; i < postCount; i++) {
    const d = (track.length * (i + 0.5)) / postCount;
    track.frame(d, f);
    pos.copy(f.p).addScaledVector(f.n, 1.78);
    pos.y = 0.21;
    m.compose(pos, q.identity(), one);
    posts.setMatrixAt(i, m);
  }
  posts.instanceMatrix.needsUpdate = true;
  group.add(posts);

  return { group, sleepers };
}

/**
 * Masonry road bridges where a road meets the river: an arch of voussoirs, side
 * walls, a parapet, and stepped approach ramps so the road climbs onto the deck.
 */
export function buildRoadBridges(M, layout) {
  const group = new THREE.Group();
  for (const c of layout.roadCrossings) {
    const road = layout.roadById[c.id].track;
    const g = new THREE.Group();
    const deckY = 0.62;
    const half = c.deck / 2;
    const width = (layout.roadById[c.id].width || 1.3) + 0.5;
    const f = road.frame(c.dA, { p: new THREE.Vector3(), t: new THREE.Vector3(), n: new THREE.Vector3() });
    const ang = Math.atan2(f.t.x, f.t.z);
    const centre = c.point.clone();
    const n = f.n;

    // Deck + parapets. Everything is generated in world space from the road
    // curve, so this group itself stays at the origin.
    g.add(mesh(stripAlongPath(road, c.dA - half, c.dA + half, {
      lateral: 0, width, y0: deckY - 0.16, y1: deckY, uvScale: 0.3,
    }), M.stone));
    for (const side of [-1, 1]) {
      g.add(mesh(stripAlongPath(road, c.dA - half, c.dA + half, {
        lateral: side * (width / 2 - 0.1), width: 0.2, y0: deckY, y1: deckY + 0.2, uvScale: 0.4, caps: false,
      }), M.stone));
      g.add(mesh(stripAlongPath(road, c.dA - half, c.dA + half, {
        lateral: side * (width / 2 - 0.1), width: 0.26, y0: deckY + 0.16, y1: deckY + 0.2, uvScale: 0.4, caps: false,
      }), M.stoneDark));
    }

    // Arch: voussoirs along a shallow half-ellipse under the deck. Local +x of
    // each stone points across the road (along the river), local +z along it.
    const spring = 0.0;
    const rise = deckY - 0.16 - spring;
    const archHalf = RIVER_HALF_WIDTH + 0.35;
    const voussoir = 11;
    for (let i = 0; i <= voussoir; i++) {
      const a = Math.PI * (i / voussoir);
      const ex = Math.cos(a) * archHalf;
      const ey = spring + Math.sin(a) * rise;
      g.add(box(
        0.34, 0.3, 0.3,
        i % 2 ? M.stone : M.stoneDark,
        centre.x + n.x * ex, ey, centre.z + n.z * ex,
        ang,
      ));
    }

    // Abutment / wing walls down to the river bed at both springings.
    for (const side of [-1, 1]) {
      const h = deckY - 0.16 + 0.5;
      g.add(box(
        0.32, h, 1.5, M.stone,
        centre.x + n.x * side * (archHalf + 0.12), -0.5 + h / 2, centre.z + n.z * side * (archHalf + 0.12),
        ang,
      ));
    }

    // Stepped approach ramps down to the road on both banks.
    for (const side of [-1, 1]) {
      g.add(mesh(slopedStrip(road, c.dA + side * half, c.dA + side * (half + 2.1), {
        lateral: 0, width, yA: deckY, yB: 0.02, yBase: -0.05, steps: 6, uvScale: 0.3,
      }), M.stone));
      for (const s2 of [-1, 1]) {
        g.add(mesh(slopedStrip(road, c.dA + side * half, c.dA + side * (half + 2.1), {
          lateral: s2 * (width / 2 - 0.08), width: 0.16, yA: deckY + 0.2, yB: 0.05, yBase: -0.05, steps: 6,
        }), M.stoneDark));
      }
    }

    group.add(g);
  }
  return group;
}
