import * as THREE from 'three';
import { Path2, roundedRectPoints, smoothPolyline } from '../util/path.js';
import { smoothstep, wrap, fbm } from '../util/mathx.js';
import { BUILDINGS, ROADS, PLAZAS, GROVES, LAMPS, PROPS, FIGURES, SIGNALS, POLES, HEDGES } from './places.js';

/* ------------------------------------------------------------------ display base */

export const BASE = {
  groundW: 28.0,      // x extent of the display board
  groundD: 21.0,      // z extent
  plinthH: 1.45,      // pedestal thickness
  frameW: 0.90,       // border rail width
  frameH: 0.62,       // border rail height above the ground plate
};
export const HX = BASE.groundW / 2;
export const HZ = BASE.groundD / 2;

export const WATER_Y = -0.34;

/* ------------------------------------------------------------- the running line */

export const TRACK = {
  halfX: 10.2, halfZ: 6.6, radius: 4.4,
  gauge: 0.62,
  ballastTop: 1.16,
  ballastBase: 1.92,
  sleeperLen: 0.98,
  sleeperPitch: 0.30,
  railW: 0.055,
  railH: 0.085,
  railTop: 0.125,      // running surface of the rail head, above deck level
};

export const STATION = {
  x0: -5.20, x1: 2.20,          // platform extent along the south straight
  z: 5.42, halfW: 0.52,         // platform centre / half width (track side at z = 5.94)
  top: 0.16,                    // platform face above deck level
};

const trackPts = roundedRectPoints({ halfX: TRACK.halfX, halfZ: TRACK.halfZ, r: TRACK.radius, cornerSteps: 44 });
export const trackPath = new Path2(trackPts, true, 0.10);
export const TRACK_LEN = trackPath.length;

/** Where the line meets the river: mid-way along the west straight, so the
 *  bridge iron sits on plain track with the embankments starting at its abutments. */
export const RIVER_CROSS = { x: -TRACK.halfX, z: 0.0 };
export const BRIDGE_S = trackPath.distanceTo(RIVER_CROSS.x, RIVER_CROSS.z).s;

export const BRIDGE = {
  deck: 0.74,          // deck top above natural ground
  flatHalf: 2.20,      // level deck either side of the crossing
  ramp: 5.60,          // transition down to natural ground
  structHalf: 2.45,    // abutment centre, just outside the level deck
  spanHalf: 1.15,      // each of the two spans either side of the river pier
  girderH: 0.46,
  deckPlate: 0.15,
  width: 2.10,         // deck width across the track
};

/** Signed arc-length offset of s from the bridge centre, in [-L/2, L/2). */
export function bridgeU(s) {
  return wrap(s - BRIDGE_S + TRACK_LEN / 2, TRACK_LEN) - TRACK_LEN / 2;
}

/** Rail deck elevation along the line: 0 on the plain, rising over the river. */
export function deckY(s) {
  const u = Math.abs(bridgeU(s));
  if (u <= BRIDGE.flatHalf) return BRIDGE.deck;
  if (u >= BRIDGE.flatHalf + BRIDGE.ramp) return 0;
  return BRIDGE.deck * 0.5 * (1 + Math.cos(Math.PI * ((u - BRIDGE.flatHalf) / BRIDGE.ramp)));
}

const UP = new THREE.Vector3(0, 1, 0);

/** 3D position on the rail centreline. */
export function trackAt(s, out = new THREE.Vector3()) {
  const p = trackPath.at(s);
  return out.set(p.x, deckY(s), p.z);
}

/** Right-handed frame (tangent, up, right) shared by the train and the track sweeps. */
export function trackFrame(s) {
  const p = trackPath.at(s);
  const eps = 0.22;
  const slope = (deckY(s + eps) - deckY(s - eps)) / (2 * eps);
  const tan = new THREE.Vector3(p.tx, slope, p.tz).normalize();
  const right = new THREE.Vector3().crossVectors(tan, UP).normalize();
  const up = new THREE.Vector3().crossVectors(right, tan).normalize();
  return { pos: new THREE.Vector3(p.x, deckY(s), p.z), tan, up, right, flat: p };
}

/** The one road/rail junction, deliberately on plain track. */
export const CROSSING = { x: 0.05, z: -TRACK.halfZ };
export const CROSSING_S = trackPath.distanceTo(CROSSING.x, CROSSING.z).s;

/* ------------------------------------------------------------- water features */

const riverControl = [
  { x: -15.40, z: -5.60 }, { x: -13.80, z: -4.40 }, { x: -12.40, z: -3.10 },
  { x: -11.20, z: -1.60 }, { x: RIVER_CROSS.x, z: RIVER_CROSS.z },
  { x: -9.20, z: 1.00 }, { x: -8.20, z: 1.55 }, { x: -7.20, z: 1.20 },
  { x: -6.40, z: 0.70 }, { x: -5.70, z: 0.35 },
];
export const riverPath = new Path2(smoothPolyline(riverControl, false, 14), false, 0.10);
export const POND = { x: -5.70, z: 0.35, rx: 1.35, rz: 1.15 };

/** How far open water reaches from the river centreline / pond centre at (x, z). */
export function waterDepth(x, z) {
  const dR = riverPath.distanceTo(x, z, 5).dist;
  const channel = 1.06 * Math.exp(-(dR * dR) / 1.52);
  const dP = Math.hypot((x - POND.x) / POND.rx, (z - POND.z) / POND.rz);
  const basin = 0.92 * (1 - smoothstep(0.70, 1.30, dP));
  return channel + basin;
}

/* ------------------------------------------------------------- terrain field */

function bump(x, z, cx, cz, r) {
  const dx = x - cx, dz = z - cz;
  return Math.exp(-(dx * dx + dz * dz) / (r * r));
}

const HILLS = [
  { x: -12.4, z: -8.6, r: 4.6, h: 0.62 },
  { x: -13.6, z: -0.4, r: 3.4, h: 0.34 },
  { x: 12.6, z: -6.4, r: 4.0, h: 0.52 },
  { x: 13.0, z: 4.4, r: 3.8, h: 0.44 },
  { x: -6.6, z: 9.8, r: 3.6, h: 0.40 },
  { x: 4.6, z: 9.9, r: 3.4, h: 0.34 },
  { x: 11.0, z: 9.4, r: 3.0, h: 0.30 },
  { x: -12.8, z: 7.4, r: 3.2, h: 0.30 },
  { x: 8.0, z: -10.2, r: 3.2, h: 0.30 },
];

/** Corridor flattening runs: plain track only, never the bridge or its ramps. */
const corridorRuns = [];
{
  let run = [];
  for (let s = 0; s < TRACK_LEN; s += 0.5) {
    if (deckY(s) < 0.30) {
      const p = trackPath.at(s);
      run.push({ x: p.x, z: p.z });
    } else if (run.length > 2) {
      corridorRuns.push(run); run = [];
    } else run = [];
  }
  if (run.length > 2) corridorRuns.push(run);
  // close the gap across s = 0 by merging the head and tail runs when both are plain track
  if (corridorRuns.length > 1 && deckY(0) < 0.3) {
    const first = corridorRuns.shift(), last = corridorRuns.pop();
    corridorRuns.push(last.concat(first));
  }
}
const corridorPaths = corridorRuns.map((r) => new Path2(r, false, 0.30));

export const roadPaths = ROADS.map((rd) => new Path2(smoothPolyline(rd.pts, false, 10), false, 0.16));

/** Roads with their authored widths, for builders and clearance checks. */
export const roadObjs = ROADS.map((rd, i) => ({ ...rd, path: roadPaths[i] }));

const FLATTEN_CIRCLES = [];
for (const b of BUILDINGS) FLATTEN_CIRCLES.push({ x: b.x, z: b.z, r: 0.60 * Math.max(b.w, b.d) + 0.45, w: 1.25 });
for (const p of PLAZAS) FLATTEN_CIRCLES.push({ x: p.x, z: p.z, r: p.r + 0.45, w: 1.40 });
FLATTEN_CIRCLES.push({ x: CROSSING.x, z: CROSSING.z, r: 2.10, w: 1.80 });   // crossing apron

const FLATTEN_PATHS = [
  ...corridorPaths.map((p) => ({ path: p, r: 1.55, w: 1.90 })),
  ...roadPaths.map((p, i) => ({ path: p, r: ROADS[i].halfWidth + 0.45, w: 1.05 })),
];

const ORCHARD_PADS = GROVES.filter((gr) => gr.kind === 'orchard')
  .map((gr) => ({ x: gr.x, z: gr.z, r: gr.r * 0.85, w: 1.50 }));

/** Rolling land, carved by the river and pond, flattened under the built works. */
export function groundHeight(x, z) {
  let h = 0;
  for (const b of HILLS) h += b.h * bump(x, z, b.x, b.z, b.r);
  h += 0.14 * (fbm(x * 0.33 + 11, z * 0.33 + 7, 3) - 0.5);
  h += 0.09 * (fbm(x * 1.9 + 3, z * 1.9 + 5, 2) - 0.5);

  let f = 0;
  for (const c of FLATTEN_CIRCLES) {
    const v = 1 - smoothstep(c.r, c.r + c.w, Math.hypot(x - c.x, z - c.z));
    if (v > f) f = v;
  }
  for (const c of ORCHARD_PADS) {
    const v = (1 - smoothstep(c.r, c.r + c.w, Math.hypot(x - c.x, z - c.z))) * 0.65;
    if (v > f) f = v;
  }
  for (const p of FLATTEN_PATHS) {
    const d = p.path.distanceTo(x, z, p.r + p.w).dist;
    const v = 1 - smoothstep(p.r, p.r + p.w, d);
    if (v > f) f = v;
  }
  h *= 1 - f;
  const wd = waterDepth(x, z);
  h -= wd;
  // built works stay dry: pads are lifted a little, watercourses never are
  const target = 0.07 * f;
  return h + Math.max(0, target - h) * smoothstep(0.85, 0.30, wd);
}

export function isWater(x, z) {
  return groundHeight(x, z) < WATER_Y - 0.02;
}

/** Measured half-extents of open water, so bank distance reads as metres of dry
 *  ground beyond the shoreline rather than distance to the centreline. */
const RIVER_HALF = 1.00;
const POND_HALF = 1.10;

/** Signed distance to the shoreline: negative in the channel, positive inland. */
export function waterDistance(x, z) {
  const dR = riverPath.distanceTo(x, z, 6).dist - RIVER_HALF;
  const dP = (Math.hypot((x - POND.x) / POND.rx, (z - POND.z) / POND.rz) - POND_HALF) * 1.25;
  const d = Math.min(dR, dP);
  return isWater(x, z) ? Math.min(d, -0.10) : d;
}

/* ------------------------------------------------- footprint + clearance helpers */

/** Sample points around an oriented building rectangle. */
export function footprintPoints(b, inset = 0) {
  const hw = b.w / 2 - inset, hd = b.d / 2 - inset;
  const c = Math.cos(b.rot || 0), s = Math.sin(b.rot || 0);
  const corners = [[-hw, -hd], [hw, -hd], [hw, hd], [-hw, hd], [0, -hd], [hw, 0], [0, hd], [-hw, 0]];
  return corners.map(([px, pz]) => ({ x: b.x + px * c + pz * s, z: b.z - px * s + pz * c }));
}

/** Clearance from a footprint to the rail centreline; must beat the ballast shoulder. */
export function railClearance(b) {
  let d = Infinity;
  for (const p of footprintPoints(b)) d = Math.min(d, trackPath.distanceTo(p.x, p.z, 8).dist);
  return d - TRACK.ballastTop / 2;
}

/** Distance from a point to the rail centreline. */
export function railDistance(x, z) {
  return trackPath.distanceTo(x, z).dist;
}

/**
 * Exact signed distance to the running line: negative inside the ring. Used to keep
 * village turf apart from the outfield, and to keep scenery clear of the ballast.
 */
export function trackSdf(x, z) {
  const q = [Math.abs(x) - TRACK.halfX + TRACK.radius, Math.abs(z) - TRACK.halfZ + TRACK.radius];
  const outside = Math.hypot(Math.max(q[0], 0), Math.max(q[1], 0));
  const inner = Math.min(Math.max(q[0], q[1]), 0);
  return outside + inner - TRACK.radius;
}

/** Arc length where the locomotive centre stands at the middle of the platform. */
export const STATION_STOP_S = trackPath.distanceTo((STATION.x0 + STATION.x1) / 2, TRACK.halfZ, 4).s;

export function alignToRoad(x, z, searchRadius = 3.0) {
  let best = null, bestD = Infinity;
  for (const p of roadPaths) {
    const q = p.distanceTo(x, z, searchRadius);
    if (q.dist < bestD) { bestD = q.dist; best = { p, s: q.s, dist: q.dist }; }
  }
  if (!best || bestD > searchRadius) return null;
  const a = best.p.at(best.s);
  return { dist: bestD, angle: Math.atan2(a.tx, a.tz), nx: a.nx, nz: a.nz };
}

/* ------------------------------------------------------------- diagnostics */

export function layoutReport() {
  const out = [];
  const push = (line) => out.push(line);
  push(`track length ${TRACK_LEN.toFixed(2)} | bridge s=${BRIDGE_S.toFixed(2)} | crossing s=${CROSSING_S.toFixed(2)}`);
  push(`deck at level crossing ${deckY(CROSSING_S).toFixed(3)} (want ~0) | deck at bridge ${deckY(BRIDGE_S).toFixed(2)} | water ${WATER_Y}`);
  push(`corridor flatten runs: ${corridorPaths.length}`);
  {
    const q = trackPath.distanceTo(-1.5, TRACK.halfZ, 4);
    push(`station stop s=${q.s.toFixed(2)} deck ${deckY(q.s).toFixed(3)} | abutments at u=+-${BRIDGE.structHalf} deck ${deckY(BRIDGE_S + BRIDGE.structHalf).toFixed(2)}`);
  }

  for (const b of BUILDINGS) {
    const c = railClearance(b);
    const g = groundHeight(b.x, b.z);
    const tag = c < 0.12 ? '!!' : c < 0.30 ? ' ~' : '  ';
    push(`${tag} rails ${c.toFixed(2).padStart(6)}  ${b.kind.padEnd(11)} (${b.x},${b.z}) ground ${g.toFixed(2)}${g < WATER_Y + 0.06 ? '  !! IN WATER' : ''}`);
  }

  // overlap between footprints
  for (let i = 0; i < BUILDINGS.length; i++) {
    for (let j = i + 1; j < BUILDINGS.length; j++) {
      const a = BUILDINGS[i], b = BUILDINGS[j];
      const need = 0.5 * (Math.min(a.w, a.d) + Math.min(b.w, b.d));
      const d = Math.hypot(a.x - b.x, a.z - b.z);
      if (d < need) push(`!! footprints touch: ${a.kind} & ${b.kind} at ${d.toFixed(2)} < ${need.toFixed(2)}`);
    }
  }

  // point objects: rails, water, carriageway
  const pointIssues = [];
  const checkPoint = (label, x, z, strict, afloat = false) => {
    const rail = railDistance(x, z);
    if (rail < 0.90) pointIssues.push(`${label} inside ballast (rails ${rail.toFixed(2)})`);
    if (!afloat && groundHeight(x, z) < WATER_Y) pointIssues.push(`${label} stands in water`);
    if (strict) {
      for (const r of roadObjs) {
        if (r.halfWidth < 0.7) continue;                                  // gravel/cobble lanes are fine
        if (r.path.distanceTo(x, z, r.halfWidth + 0.15).dist < r.halfWidth + 0.10) {
          pointIssues.push(`${label} on the carriageway of ${r.name}`);
        }
      }
    }
  };
  LAMPS.forEach((l, i) => checkPoint(`lamp#${i}(${l[0]},${l[1]})`, l[0], l[1], true));
  PROPS.forEach((p, i) => checkPoint(`prop#${i} ${p[3]}`, p[0], p[1], p[3] === 'bench' || p[3] === 'boulder', p[3] === 'boat'));
  FIGURES.forEach((p, i) => checkPoint(`figure#${i}`, p[0], p[1], true));
  if (pointIssues.length) push(`point issues:\n  ${[...new Set(pointIssues)].join('\n  ')}`);
  else push('lamps / props / figures clear of rails, water and roadways');

  // signals + poles must be near the running line, props need not
  // signals + poles are snapped to the line by the builder; report the result
  for (const s of SIGNALS) {
    const q = trackPath.distanceTo(s.x, s.z, 3);
    push(`signal ${s.kind.padEnd(10)} snap ${q.dist.toFixed(2)} at s=${q.s.toFixed(2)} deck ${deckY(q.s).toFixed(2)}`);
  }
  for (const [x, z] of POLES) if (railDistance(x, z) > 3.2) push(`!! telegraph pole (${x},${z}) drifts ${railDistance(x, z).toFixed(1)} from the line`);

  // water bodies: scan the board
  let cells = 0, minX = 99, maxX = -99, minZ = 99, maxZ = -99;
  for (let x = -HX; x <= HX; x += 0.2) {
    for (let z = -HZ; z <= HZ; z += 0.2) {
      if (groundHeight(x, z) < WATER_Y) {
        cells++;
        minX = Math.min(minX, x); maxX = Math.max(maxX, x);
        minZ = Math.min(minZ, z); maxZ = Math.max(maxZ, z);
      }
    }
  }
  push(`open water: ${cells} cells of 0.2 grid, bbox x[${minX.toFixed(1)},${maxX.toFixed(1)}] z[${minZ.toFixed(1)},${maxZ.toFixed(1)}]`);
  push(`water under bridge deck at crossing: ${groundHeight(RIVER_CROSS.x, RIVER_CROSS.z).toFixed(2)} (must be < ${WATER_Y})`);
  let pondCover = 0;
  for (let i = 0; i < 24; i++) {
    const a = (i / 24) * Math.PI * 2;
    if (groundHeight(POND.x + Math.cos(a) * POND.rx * 0.8, POND.z + Math.sin(a) * POND.rz * 0.8) < WATER_Y) pondCover++;
  }
  push(`pond centre ring submerged ${pondCover}/24`);

  // road/rail junctions
  const hits = [];
  for (const p of roadPaths) {
    for (let s = 0; s < p.length; s += 0.2) {
      const q = p.at(s);
      const t = trackPath.distanceTo(q.x, q.z, 1.2);
      if (t.dist < 0.3) hits.push({ x: +q.x.toFixed(2), z: +q.z.toFixed(2), deck: +deckY(t.s).toFixed(2) });
    }
  }
  const uniq = [];
  for (const h of hits) if (!uniq.some((u) => Math.hypot(u.x - h.x, u.z - h.z) < 2.5)) uniq.push(h);
  push(`road/rail junctions: ${uniq.map((u) => `(${u.x},${u.z}) deck ${u.deck}`).join('  ') || 'none'}`);

  // hedges and groves vs buildings (trees are rejection sampled, so these are advisory)
  for (const gr of GROVES) {
    for (const b of BUILDINGS) {
      if (Math.hypot(b.x - gr.x, b.z - gr.z) < gr.r * 0.7) push(` ~ grove ${gr.kind} centred inside ${b.kind}`);
    }
  }
  for (const hd of HEDGES) {
    const mx = (hd[0] + hd[2]) / 2, mz = (hd[1] + hd[3]) / 2;
    if (railDistance(mx, mz) < 1.2) push(` !! hedge crosses the ballast at (${mx},${mz})`);
  }
  return out.join('\n');
}

const p_x = (b) => b.x, p_z = (b) => b.z;
