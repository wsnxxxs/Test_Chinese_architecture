/**
 * The town itself: a house factory plus the landmark buildings (station,
 * church, water tower, silos, mill with its water wheel).
 */
import * as THREE from 'three';
import { worldUVBox, gableRoof, box, plate } from './geom.js';
import { makeSignTexture, makeClockTexture } from './textures.js';
import { riverNearest, RIVER_HALF_WIDTH } from './layout.js';
import { waterWheel, bench, crate, barrel, streetLamp, railSignal, levelCrossingSign, footbridge } from './props.js';

const WALLS = {
  cream: 0xe6d9bd,
  white: 0xeee9dd,
  terracotta: 0xc4714a,
  brick: 0xb0563c,
  slateBlue: 0x6d7f96,
  sage: 0xa8b98d,
  ochre: 0xd8b46a,
  brown: 0x8a6a4a,
  stone: 0xc4bcae,
  green: 0x6f8a6a,
  grey: 0xa9a49b,
};

/** Generic house / shop / shed builder. */
function house(M, o = {}) {
  const g = new THREE.Group();
  const {
    w = 3, d = 2.4, h = 2.2,
    wall = WALLS.cream,
    roof = 'gable',
    roofMat = M.roofSlate,
    roofH = 0.85,
    ridgeAlongX = true,
    plinth = 0.16,
    chimney = true,
    door = false,
    awning = false,
    sign = null,
    downpipe = true,
  } = o;

  const wallMat = M.facade(wall);
  const walls = new THREE.Mesh(worldUVBox(w, h, d, M.facadeUV), wallMat);
  walls.position.y = plinth + h / 2;
  walls.castShadow = true;
  walls.receiveShadow = true;
  g.add(walls);

  const base = new THREE.Mesh(worldUVBox(w + 0.16, plinth, d + 0.16, 0.55), M.stone);
  base.position.y = plinth / 2;
  base.castShadow = true;
  base.receiveShadow = true;
  g.add(base);

  if (roof === 'flat') {
    const r = new THREE.Mesh(worldUVBox(w + 0.3, 0.14, d + 0.3, 0.8), roofMat);
    r.position.y = plinth + h + 0.07;
    r.castShadow = true;
    g.add(r);
    // Parapet
    for (const [pw, pd, px, pz] of [[w + 0.3, 0.12, 0, (d + 0.3) / 2], [w + 0.3, 0.12, 0, -(d + 0.3) / 2]]) {
      const p = new THREE.Mesh(new THREE.BoxGeometry(pw, 0.22, pd), wallMat);
      p.position.set(px, plinth + h + 0.22, pz);
      p.castShadow = true;
      g.add(p);
    }
  } else if (roof === 'gable') {
    const ew = w + 0.36;
    const ed = d + 0.36;
    const geo = ridgeAlongX ? gableRoof(ed, ew, roofH) : gableRoof(ew, ed, roofH);
    const r = new THREE.Mesh(geo, roofMat);
    r.rotation.y = ridgeAlongX ? Math.PI / 2 : 0;
    r.position.y = plinth + h;
    r.castShadow = true;
    r.receiveShadow = true;
    g.add(r);

    if (chimney) {
      const chH = 0.62;
      const chZ = 0.2 * d;
      const chX = 0.24 * w;
      const surface = roofH * (1 - Math.abs(chZ) / (ed / 2));
      const ch = new THREE.Mesh(new THREE.BoxGeometry(0.3, chH, 0.3), M.stoneDark);
      if (ridgeAlongX) ch.position.set(-chZ, surface + chH / 2, chX);
      else ch.position.set(chX, surface + chH / 2, chZ);
      ch.castShadow = true;
      g.add(ch);
      const cap = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.08, 0.4), M.stone);
      cap.position.copy(ch.position).setY(ch.position.y + chH / 2 + 0.04);
      g.add(cap);
    }
  }

  if (door) {
    const doorMat = new THREE.MeshStandardMaterial({ color: 0x4a3524, roughness: 0.8 });
    const dr = new THREE.Mesh(new THREE.BoxGeometry(0.58, 1.06, 0.1), doorMat);
    dr.position.set(0.02, plinth + 0.53, d / 2 + 0.03);
    dr.castShadow = true;
    g.add(dr);
    const lintel = new THREE.Mesh(new THREE.BoxGeometry(0.78, 0.12, 0.12), M.frameDark);
    lintel.position.set(0.02, plinth + 1.12, d / 2 + 0.03);
    g.add(lintel);
    // Step kept flush with the eaves so the measured footprint stays predictable.
    const step = new THREE.Mesh(worldUVBox(0.9, 0.07, 0.36, 0.5), M.stone);
    step.position.set(0.02, 0.035, d / 2);
    g.add(step);
  }

  if (awning) {
    const canopy = new THREE.Mesh(new THREE.BoxGeometry(w * 0.66, 0.09, 0.78), M.roofTile);
    canopy.position.set(0, plinth + h * 0.78, d / 2 + 0.42);
    canopy.rotation.x = -0.22;
    canopy.castShadow = true;
    g.add(canopy);
    for (const sx of [-0.36, 0.36]) {
      const post = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.55, 0.07), M.metalDark);
      post.position.set(sx * w * 0.66, plinth + h * 0.55, d / 2 + 0.76);
      g.add(post);
    }
  }

  if (sign) {
    const tex = makeSignTexture([sign], { bg: '#6d4a2a', fg: '#f4e6c8' });
    const mat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.6 });
    const s = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.52, 0.1), mat);
    s.position.set(0, plinth + h - 0.5, d / 2 + 0.06);
    s.castShadow = true;
    g.add(s);
  }

  if (downpipe) {
    const pipe = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, h + 0.2, 6), M.metalDark);
    pipe.position.set(w / 2 - 0.12, plinth + (h + 0.2) / 2, d / 2 - 0.02);
    g.add(pipe);
  }

  return g;
}

/** The station: main hall, end blocks, clock, name board and platform canopy. */
function station(M, theme, layout) {
  const g = new THREE.Group();
  const w = 7.8;
  const d = 2.3;
  const h = 2.4;

  const wallMat = M.facade(WALLS.cream);
  const hall = new THREE.Mesh(worldUVBox(w, h, d, M.facadeUV), wallMat);
  hall.position.y = h / 2 + 0.18;
  hall.castShadow = true;
  hall.receiveShadow = true;
  g.add(hall);
  const base = new THREE.Mesh(worldUVBox(w + 0.2, 0.18, d + 0.2, 0.55), M.stone);
  base.position.y = 0.09;
  g.add(base);

  // End pavilions, a little taller, with their own roofs.
  for (const sx of [-1, 1]) {
    const pav = new THREE.Mesh(worldUVBox(2.1, h + 0.7, d + 0.24, M.facadeUV), M.facade(WALLS.white));
    pav.position.set(sx * (w / 2 - 1.05), (h + 0.7) / 2 + 0.18, 0);
    pav.castShadow = true;
    g.add(pav);
    const r = new THREE.Mesh(gableRoof(d + 0.6, 2.1 + 0.4, 0.7), M.roofSlate);
    r.position.y = h + 0.7 + 0.18;
    r.rotation.y = Math.PI / 2;
    r.castShadow = true;
    g.add(r);
  }

  // Main roof with a ridge running along the building.
  const roof = new THREE.Mesh(gableRoof(d + 0.42, w + 0.4, 1.05), M.roofTile);
  roof.rotation.y = Math.PI / 2;
  roof.position.y = h + 0.18;
  roof.castShadow = true;
  g.add(roof);

  // Clock on the front facade (front = +z, facing the platform).
  const clockTex = makeClockTexture(6, 32);
  const clockMat = new THREE.MeshStandardMaterial({ map: clockTex, roughness: 0.5 });
  const clock = new THREE.Mesh(new THREE.CylinderGeometry(0.46, 0.46, 0.14, 20), clockMat);
  clock.rotation.x = Math.PI / 2;
  clock.position.set(-2.3, h - 0.35, d / 2 + 0.04);
  g.add(clock);
  const clockRing = new THREE.Mesh(new THREE.TorusGeometry(0.48, 0.06, 6, 22), M.frameDark);
  clockRing.position.set(-2.3, h - 0.35, d / 2 + 0.06);
  g.add(clockRing);

  // Name board over the main entrance.
  const signTex = makeSignTexture(['MILLFORD'], { bg: '#7a3a1d', fg: '#f7ead0', sub: 'STATION' });
  const signMat = new THREE.MeshStandardMaterial({ map: signTex, roughness: 0.55, emissive: 0x3a2a18, emissiveIntensity: 0.4 });
  const sign = new THREE.Mesh(new THREE.BoxGeometry(3.3, 0.86, 0.12), signMat);
  sign.position.set(1.5, h - 0.15, d / 2 + 0.08);
  g.add(sign);
  theme.add(signMat, 0x2a1e12, 0xffca7a, 1, 1.5);

  // Doors + steps.
  const doorMat = new THREE.MeshStandardMaterial({ color: 0x4a3524, roughness: 0.8 });
  for (const sx of [1.5, -0.6]) {
    const dr = new THREE.Mesh(new THREE.BoxGeometry(0.7, 1.15, 0.1), doorMat);
    dr.position.set(sx, 0.75, d / 2 + 0.03);
    g.add(dr);
  }
  const step = new THREE.Mesh(worldUVBox(1.8, 0.08, 0.6, 0.6), M.stone);
  step.position.set(1.0, 0.04, d / 2 + 0.34);
  g.add(step);

  // Canopy over the platform (-z locally, i.e. the tracks).
  const canopy = new THREE.Mesh(worldUVBox(w - 0.4, 0.16, 1.7, 0.8), M.roofTin);
  canopy.position.set(0.4, h + 1.05, -(d / 2 + 0.95));
  canopy.castShadow = true;
  g.add(canopy);
  for (let i = 0; i < 5; i++) {
    const px = -2.8 + i * 1.6;
    const post = new THREE.Mesh(new THREE.BoxGeometry(0.13, h + 0.95, 0.13), M.metalDark);
    post.position.set(px, (h + 0.95) / 2, -(d / 2 + 1.7));
    post.castShadow = true;
    g.add(post);
  }
  // Canopy lamps.
  for (const px of [-1.9, 0.5, 2.9]) {
    const lampMat = new THREE.MeshStandardMaterial({ color: 0xf3ead2, roughness: 0.4, emissive: 0xffcf8a });
    const lmp = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 6), lampMat);
    lmp.position.set(px, h + 0.92, -(d / 2 + 1.1));
    g.add(lmp);
    theme.add(lampMat, 0x3a3526, 0xffdca0, 1, 2.4);
  }

  g.position.copy(layout.station.pos);
  g.rotation.y = layout.station.rot;
  return g;
}

/** School: long low block with a bell turret over the entrance. */
function school(M) {
  const g = new THREE.Group();
  const wall = M.facade(WALLS.slateBlue, { roughness: 0.85 });
  const body = new THREE.Mesh(worldUVBox(4.0, 2.2, 2.2, M.facadeUV), wall);
  body.position.y = 0.22 + 2.2 / 2;
  body.castShadow = true;
  body.receiveShadow = true;
  g.add(body);
  const skirt = new THREE.Mesh(worldUVBox(4.2, 0.22, 2.4, 0.6), M.stone);
  skirt.position.y = 0.11;
  skirt.castShadow = true;
  g.add(skirt);
  // Ridge along the block, so the school reads as one long roof.
  const roof = new THREE.Mesh(gableRoof(2.2 + 0.4, 4.0 + 0.4, 0.75), M.roofSlate);
  roof.rotation.y = Math.PI / 2;
  roof.position.y = 2.2 + 0.22;
  roof.castShadow = true;
  roof.receiveShadow = true;
  g.add(roof);
  // Turret over the door.
  const turret = new THREE.Mesh(worldUVBox(1.4, 1.4, 1.6, M.facadeUV), wall);
  turret.position.set(1.2, 2.2 + 0.22 + 0.7, 0.4);
  turret.castShadow = true;
  g.add(turret);
  const cap = new THREE.Mesh(new THREE.ConeGeometry(0.6, 0.7, 4), M.roofTile);
  cap.position.set(1.2, 2.2 + 0.22 + 1.4 + 0.35, 0.4);
  cap.rotation.y = Math.PI / 4;
  cap.castShadow = true;
  g.add(cap);
  const ball = new THREE.Mesh(new THREE.SphereGeometry(0.1, 8, 6), M.brass);
  ball.position.copy(cap.position).setY(cap.position.y + 0.5);
  g.add(ball);
  // Door and windows.
  const door = new THREE.Mesh(new THREE.BoxGeometry(0.66, 1.2, 0.1), M.frameDark);
  door.position.set(1.2, 0.22 + 0.6, 2.2 / 2 + 0.03);
  door.castShadow = true;
  g.add(door);
  for (const sx of [-1.3, -0.45, 0.45, 1.3]) {
    const win = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.62, 0.08), M.glass);
    win.position.set(sx, 0.22 + 1.45, 2.2 / 2 + 0.03);
    g.add(win);
  }
  return g;
}

/** Church: nave with a west tower and spire, laid out to stay shallow. */
function church(M) {
  const g = new THREE.Group();
  const stone = M.facade(WALLS.stone, { roughness: 0.95 });
  const nave = new THREE.Mesh(worldUVBox(3.0, 3.4, 2.9, M.facadeUV), stone);
  nave.position.y = 1.7 + 0.2;
  nave.castShadow = true;
  nave.receiveShadow = true;
  g.add(nave);
  const naveBase = new THREE.Mesh(worldUVBox(3.2, 0.2, 3.1, 0.6), M.stoneDark);
  naveBase.position.y = 0.1;
  g.add(naveBase);
  const naveRoof = new THREE.Mesh(gableRoof(3.0 + 0.25, 2.9 + 0.4, 1.0), M.roofSlate);
  naveRoof.position.y = 3.4 + 0.2;
  naveRoof.castShadow = true;
  g.add(naveRoof);

  // Tower at the west end, with an octagonal spire.
  const tower = new THREE.Mesh(worldUVBox(1.7, 3.6, 1.7, M.facadeUV), stone);
  tower.position.set(0, 1.8 + 0.2, -2.1);
  tower.castShadow = true;
  g.add(tower);
  const towerTrim = new THREE.Mesh(worldUVBox(1.9, 0.16, 1.9, 0.6), M.stoneDark);
  towerTrim.position.set(0, 3.78, -2.1);
  g.add(towerTrim);
  const spire = new THREE.Mesh(new THREE.ConeGeometry(1.0, 2.0, 4), M.roofSlate);
  spire.position.set(0, 3.86 + 1.0, -2.1);
  spire.rotation.y = Math.PI / 4;
  spire.castShadow = true;
  g.add(spire);
  const finial = new THREE.Mesh(new THREE.SphereGeometry(0.1, 8, 6), M.brass);
  finial.position.set(0, 3.86 + 2.0, -2.1);
  g.add(finial);
  // Belfry openings.
  for (const sx of [-0.45, 0.45]) {
    const bell = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.5, 0.1), M.frameDark);
    bell.position.set(sx, 3.1, -2.1 + 0.87);
    g.add(bell);
  }
  // Porch, flush with the tower.
  const porch = new THREE.Mesh(worldUVBox(1.6, 1.3, 0.9, M.facadeUV), stone);
  porch.position.set(0, 0.85, -2.9);
  g.add(porch);
  const porchRoof = new THREE.Mesh(gableRoof(2.0, 1.3, 0.45), M.roofSlate);
  porchRoof.position.set(0, 1.5, -2.9);
  g.add(porchRoof);
  return g;
}

/** Legged water tower. */
function waterTower(M) {
  const g = new THREE.Group();
  const mat = M.facade(0x7d94a8, { roughness: 0.7 });
  for (const [x, z] of [[-0.55, -0.55], [0.55, -0.55], [-0.55, 0.55], [0.55, 0.55]]) {
    const leg = new THREE.Mesh(new THREE.BoxGeometry(0.16, 2.2, 0.16), M.frameDark);
    leg.position.set(x, 1.1, z);
    leg.rotation.z = -x * 0.05;
    leg.castShadow = true;
    g.add(leg);
  }
  const tank = new THREE.Mesh(new THREE.CylinderGeometry(0.92, 0.92, 1.7, 14), mat);
  tank.position.y = 3.1;
  tank.castShadow = true;
  g.add(tank);
  for (const y of [2.35, 3.85]) {
    const band = new THREE.Mesh(new THREE.TorusGeometry(0.93, 0.05, 5, 16), M.metalDark);
    band.rotation.x = Math.PI / 2;
    band.position.y = y;
    g.add(band);
  }
  const roof = new THREE.Mesh(new THREE.ConeGeometry(1.05, 0.85, 14), M.roofTin);
  roof.position.y = 4.45;
  roof.castShadow = true;
  g.add(roof);
  const ladder = new THREE.Mesh(new THREE.BoxGeometry(0.06, 2.6, 0.06), M.metalDark);
  ladder.position.set(0.92, 2.9, 0.35);
  g.add(ladder);
  return g;
}

/** Three grain silos on a shared base. */
function silos(M) {
  const g = new THREE.Group();
  const base = new THREE.Mesh(worldUVBox(3.2, 0.24, 2.2, 0.6), M.concrete);
  base.position.y = 0.12;
  base.receiveShadow = true;
  g.add(base);
  for (const x of [-1.0, 0, 1.0]) {
    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.52, 0.52, 3.1, 12), M.concrete);
    body.position.set(x, 1.55 + 0.24, 0);
    body.castShadow = true;
    g.add(body);
    for (const y of [0.9, 2.2]) {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.53, 0.04, 5, 14), M.metalDark);
      ring.rotation.x = Math.PI / 2;
      ring.position.set(x, y + 0.24, 0);
      g.add(ring);
    }
    const cap = new THREE.Mesh(new THREE.ConeGeometry(0.56, 0.6, 12), M.roofTin);
    cap.position.set(x, 3.1 + 0.24 + 0.3, 0);
    cap.castShadow = true;
    g.add(cap);
  }
  const gallery = new THREE.Mesh(worldUVBox(3.3, 0.14, 1.0, 0.6), M.metalDark);
  gallery.position.set(0, 2.0, 0.7);
  g.add(gallery);
  return g;
}

/** The mill with its water wheel. Returns the group and the rotating wheel. */
function mill(M, layout) {
  const g = new THREE.Group();
  // Anchor on the river: the mill stands on the near bank with its wheel in the
  // water, so it always sits at a sensible place whatever the river does.
  const near = riverNearest(layout, -9.8, 5.7);
  const across = near.normal;   // points from the river towards the mill
  const ry = Math.atan2(-across.z, across.x);   // local +x -> across
  g.rotation.y = ry;

  const clear = RIVER_HALF_WIDTH;
  const bodyDepth = 2.6;
  g.position.copy(near.point).addScaledVector(across, clear + 0.85 + bodyDepth / 2);

  const body = house(M, {
    w: 4.0, d: bodyDepth, h: 3.0, wall: WALLS.brown, roofMat: M.roofTile, roofH: 1.05,
    ridgeAlongX: true, chimney: true, door: true, downpipe: false,
  });
  body.position.x = -0.5;
  g.add(body);
  const annex = house(M, {
    w: 2.0, d: 1.7, h: 2.2, wall: WALLS.cream, roofMat: M.roofTile, roofH: 0.7,
    ridgeAlongX: true, chimney: false, door: false,
  });
  annex.position.set(-2.6, 0, 1.2);
  g.add(annex);

  // Wheel hangs off the river-facing wall (-x locally), dipping below the water line.
  const wheelRadius = 0.95;
  // The mill stands clear of the water; the wheel hub sits close enough that the
  // lower rim is submerged.
  const hubFromRiver = 1.15;
  const wheel = waterWheel(M, wheelRadius);
  wheel.group.position.set(-(clear + 0.85 + bodyDepth / 2 - hubFromRiver), 0.68, 0);
  g.add(wheel.group);

  // Tail race and sluice back to the bank.
  const race = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.1, 0.5), M.bridgeWood);
  race.position.set(-(clear + 0.4), -0.02, 0.7);
  g.add(race);
  return { group: g, wheel: wheel.wheel, across, ry, anchor: g.position.clone() };
}

/** Clearances, in world units, that buildings must keep from each feature. */
const CLEAR = { track: 2.0, river: 2.34, road: 0.2, terrain: 0.9 };

/**
 * A coarse occupancy grid of the sandbox: cells a building may not cover. Built
 * once from the layout's own curves, which is what makes the placement pass
 * exact rather than eyeballed.
 */
export function buildOccupancy(layout, cell = 0.25) {
  const hx = layout.TERRAIN.w / 2;
  const hz = layout.TERRAIN.d / 2;
  const nx = Math.ceil(layout.TERRAIN.w / cell);
  const nz = Math.ceil(layout.TERRAIN.d / cell);
  const blocked = new Uint8Array(nx * nz);
  const idx = (i, j) => j * nx + i;
  const stamp = (wx, wz, r) => {
    const i0 = Math.max(0, Math.floor((wx - r + hx) / cell));
    const i1 = Math.min(nx - 1, Math.ceil((wx + r + hx) / cell));
    const j0 = Math.max(0, Math.floor((wz - r + hz) / cell));
    const j1 = Math.min(nz - 1, Math.ceil((wz + r + hz) / cell));
    for (let j = j0; j <= j1; j++) {
      for (let i = i0; i <= i1; i++) {
        const cx = -hx + (i + 0.5) * cell;
        const cz = -hz + (j + 0.5) * cell;
        if ((cx - wx) ** 2 + (cz - wz) ** 2 <= r * r) blocked[idx(i, j)] = 1;
      }
    }
  };
  const mark = (pts, r, stride) => {
    for (let i = 0; i < pts.length; i += stride) stamp(pts[i].x, pts[i].z, r);
  };
  mark(layout.track.pts, CLEAR.track, 2);
  mark(layout.river.pts, CLEAR.river, 2);
  for (const road of layout.roads) mark(road.track.pts, road.width / 2 + CLEAR.road, 3);
  for (const path of layout.paths) mark(path.track.pts, path.width / 2 + 0.1, 3);
  // Outside the terrain is blocked too.
  for (let j = 0; j < nz; j++) {
    for (let i = 0; i < nx; i++) {
      const cx = -hx + (i + 0.5) * cell;
      const cz = -hz + (j + 0.5) * cell;
      if (Math.abs(cx) > hx - CLEAR.terrain || Math.abs(cz) > hz - CLEAR.terrain) blocked[idx(i, j)] = 1;
    }
  }
  return { cell, nx, nz, hx, hz, blocked };
}

/**
 * Exact ground rectangle of a placed object: the size of its own local box, its
 * rotation, and the world centre of that box. Measuring the world AABB alone is
 * not enough — a rotated footprint would be squared up and over-reported.
 */
export function footRect(obj) {
  obj.updateMatrixWorld(true);
  const local = new THREE.Box3();
  const v = new THREE.Vector3();
  const toLocal = new THREE.Matrix4().copy(obj.matrixWorld).invert();
  let any = false;
  obj.traverse((o) => {
    if (!o.isMesh || !o.geometry) return;
    if (!o.geometry.boundingBox) o.geometry.computeBoundingBox();
    const m = new THREE.Matrix4().multiplyMatrices(toLocal, o.matrixWorld);
    const bb = o.geometry.boundingBox;
    for (const x of [bb.min.x, bb.max.x]) {
      for (const y of [bb.min.y, bb.max.y]) {
        for (const z of [bb.min.z, bb.max.z]) {
          v.set(x, y, z).applyMatrix4(m);
          local.expandByPoint(v);
          any = true;
        }
      }
    }
  });
  if (!any || local.isEmpty()) return null;
  const e = obj.matrixWorld.elements;
  const mid = new THREE.Vector3(
    (local.min.x + local.max.x) / 2, 0, (local.min.z + local.max.z) / 2,
  );
  return {
    cx: e[0] * mid.x + e[4] * mid.y + e[8] * mid.z + e[12],
    cz: e[2] * mid.x + e[6] * mid.y + e[10] * mid.z + e[14],
    w: Math.max(0.3, local.max.x - local.min.x),
    d: Math.max(0.3, local.max.z - local.min.z),
    ry: obj.rotation.y,
  };
}

/** Separating-axis test between two oriented rectangles on the ground plane. */
export function rectsOverlap(a, b) {
  return boxesOverlap(a.cx, a.cz, a.w, a.d, a.ry || 0, b.cx, b.cz, b.w, b.d, b.ry || 0);
}

/** Is an axis-aligned footprint free of obstacles (and of the other buildings)? */
function footprintFree(x, z, w, d, grid, settled, ry = 0) {
  const { cell, nx, nz, hx, hz, blocked } = grid;
  const cellFree = (px, pz) => {
    const i = Math.floor((px + hx) / cell);
    const j = Math.floor((pz + hz) / cell);
    if (i < 0 || j < 0 || i >= nx || j >= nz) return false;
    return !blocked[j * nx + i];
  };
  if (Math.abs(ry) > 1e-4) {
    // Rotated footprint: probe the corners, edge midpoints and centre.
    const c = Math.cos(ry);
    const s = Math.sin(ry);
    for (const [lx, lz] of [[0, 0], [1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [-1, -1], [1, -1], [-1, 1]]) {
      const px = x + (lx * w * c - lz * d * s) / 2;
      const pz = z + (lx * w * s + lz * d * c) / 2;
      if (!cellFree(px, pz)) return false;
    }
  } else {
    const i0 = Math.max(0, Math.floor((x - w / 2 + hx) / cell));
    const i1 = Math.min(nx - 1, Math.ceil((x + w / 2 + hx) / cell));
    const j0 = Math.max(0, Math.floor((z - d / 2 + hz) / cell));
    const j1 = Math.min(nz - 1, Math.ceil((z + d / 2 + hz) / cell));
    if (i1 < i0 || j1 < j0) return false;
    for (let j = j0; j <= j1; j++) {
      for (let i = i0; i <= i1; i++) {
        if (blocked[j * nx + i]) return false;
      }
    }
  }
  for (const o of settled) {
    if (boxesOverlap(x, z, w, d, ry, o.x, o.z, o.w, o.d, o.ry || 0)) return false;
  }
  return true;
}

/** Separating-axis test between two oriented rectangles on the ground plane. */
function boxesOverlap(ax, az, aw, ad, ar, bx, bz, bw, bd, br) {
  const c = Math.cos(ar);
  const s = Math.sin(ar);
  const cb = Math.cos(br);
  const sb = Math.sin(br);
  const cornersOf = (ox, oz, ow, od, oo, oos) => {
    const oc = Math.cos(oo);
    const os = Math.sin(oo);
    return [[-1, -1], [1, -1], [1, 1], [-1, 1]].map(([lx, lz]) => [
      ox + (lx * ow * oc - lz * od * os) / 2,
      oz + (lx * ow * os + lz * od * oc) / 2,
    ]);
  };
  // Each rectangle is only tested against the other's own two axes; along its
  // own axis its half extent is simply half that side.
  const separates = (ux, uz, half, rx, rz, pts) => {
    let lo = Infinity;
    let hi = -Infinity;
    for (const [px, pz] of pts) {
      const p = (px - rx) * ux + (pz - rz) * uz;
      lo = Math.min(lo, p);
      hi = Math.max(hi, p);
    }
    return lo > half - 0.05 || hi < -half + 0.05;
  };
  const bPts = cornersOf(bx, bz, bw, bd, br, sb);
  if (separates(c, s, aw / 2, ax, az, bPts)) return false;
  if (separates(-s, c, ad / 2, ax, az, bPts)) return false;
  const aPts = cornersOf(ax, az, aw, ad, ar, s);
  if (separates(cb, sb, bw / 2, bx, bz, aPts)) return false;
  if (separates(-sb, cb, bd / 2, bx, bz, aPts)) return false;
  return true;
}

/**
 * Shortest translation that frees a footprint. Every candidate in a window is
 * tested, so the winner is by construction the smallest available move and a
 * building never teleports across the sandbox for want of a near neighbour.
 */
function shiftToFree(box, grid, settled, maxR = 4.5) {
  if (footprintFree(box.x, box.z, box.w, box.d, grid, settled, box.ry || 0)) return [box.x, box.z];
  let bestD = Infinity;
  let best = null;
  for (let dz = -maxR; dz <= maxR + 1e-6; dz += 0.25) {
    for (let dx = -maxR; dx <= maxR + 1e-6; dx += 0.25) {
      const d2 = dx * dx + dz * dz;
      if (d2 >= bestD) continue;
      if (!footprintFree(box.x + dx, box.z + dz, box.w, box.d, grid, settled, box.ry || 0)) continue;
      bestD = d2;
      best = [dx, dz];
    }
  }
  return best ? [box.x + best[0], box.z + best[1]] : [box.x, box.z];
}

export function buildTown(M, theme, layout, keepout) {
  const group = new THREE.Group();
  group.name = 'town';
  const rects = [];
  // Everything placed gets measured after building so the resolver can nudge
  // anything that ended up touching the rails, the water or a road.
  const placed = [];

  const place = (obj, x, z, ry = 0, a = 3, b = 3, name = '') => {
    // place(obj, x, z, ry, name) is allowed; footprints are re-measured anyway.
    if (typeof a === 'string') {
      name = a;
      a = 3;
      b = 3;
    }
    obj.position.set(x, 0, z);
    obj.rotation.y = ry;
    group.add(obj);
    rects.push({ x, z, w: a, d: b, ry });
    placed.push({ obj, x, z, w: a, d: b, ry, name, cx: x, cz: z });
    return obj;
  };

  // ---- landmarks -------------------------------------------------------
  const stationGroup = station(M, theme, layout);
  const sp = layout.station.pos;
  group.add(stationGroup);
  rects.push({ x: sp.x, z: sp.z, w: 8.0, d: 2.5, ry: layout.station.rot });
  // The station occupies its plot, so houses settle around it. Its footprint is
  // the hall itself (the platform canopy is allowed to reach over the rails).
  placed.push({
    obj: stationGroup, x: sp.x, z: sp.z, w: 8.4, d: 2.9, ry: layout.station.rot,
    name: 'station', cx: sp.x, cz: sp.z, fixed: true,
  });

  // Forecourt between the station front and Station Street, east of the hall
  // where Village Road climbs to the level crossing.
  const plaza = new THREE.Mesh(worldUVBox(2.2, 0.03, 1.0, 1.15), M.path);
  plaza.position.set(6.5, 0.013, -12.5);
  plaza.receiveShadow = true;
  group.add(plaza);
  rects.push({ x: 6.5, z: -12.5, w: 2.2, d: 1.0 });

  // ---- Station Street row ---------------------------------------------
  // The row sits in the band between the street's kerb and the platform, so
  // every depth here is chosen from that measured band (see tools/rects.mjs).
  place(house(M, { w: 3.2, d: 1.6, h: 2.4, wall: WALLS.cream, roofMat: M.roofTile, roofH: 0.95, door: true, sign: 'THE SWAN' }), -16.9, -11.9, 0, 'The Swan hotel');
  place(house(M, { w: 2.6, d: 1.6, h: 2.1, wall: WALLS.terracotta, roofMat: M.roofGreen, roofH: 0.8, door: true }), -13.4, -11.9, 0, 'cottage A');
  place(school(M), -9.2, -12.05, 0, 'school');
  place(house(M, { w: 3.0, d: 1.6, h: 2.2, wall: WALLS.brick, roofMat: M.roofSlate, roofH: 0.9, door: true, sign: 'POST' }), 8.1, -11.9, 0, 'post office');
  place(house(M, { w: 2.8, d: 1.6, h: 2.2, wall: WALLS.brick, roofMat: M.roofSlate, roofH: 0.9, door: true }), 12.4, -11.6, 0, 'cottage B');
  place(house(M, { w: 2.6, d: 1.6, h: 2.1, wall: WALLS.sage, roofMat: M.roofGreen, roofH: 0.8, door: true }), 16.0, -11.4, 0, 'cottage D');
  place(house(M, { w: 2.8, d: 1.6, h: 2.2, wall: WALLS.ochre, roofMat: M.roofTile, roofH: 0.85, door: true }), 19.05, -11.4, 0, 'cottage E');

  // ---- south-east corner (below the street) ----------------------------
  place(house(M, { w: 2.6, d: 1.6, h: 2.0, wall: WALLS.slateBlue, roofMat: M.roofGreen, roofH: 0.8, door: true }), 10.1, -16.45, 0, 'cottage F');
  place(house(M, { w: 2.6, d: 1.6, h: 2.0, wall: WALLS.grey, roofMat: M.roofTin, roofH: 0.55, door: true, roof: 'gable' }), 13.2, -16.2, 0, 'workshop A');
  place(house(M, { w: 2.6, d: 1.6, h: 2.0, wall: WALLS.white, roofMat: M.roofTin, roofH: 0.55, door: true, roof: 'gable' }), 17.0, -16.2, 0, 'workshop B');
  place(house(M, { w: 2.6, d: 1.6, h: 2.0, wall: WALLS.stone, roofMat: M.roofTin, roofH: 0.55, door: true, roof: 'gable' }), 20.05, -16.2, 0, 'workshop C');

  // ---- town square park (inside the loop) ------------------------------
  const fountain = new THREE.Group();
  const basin = new THREE.Mesh(new THREE.CylinderGeometry(1.0, 1.06, 0.34, 8), M.stone);
  basin.position.y = 0.17;
  const pool = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 0.9, 0.05, 12), M.water);
  pool.position.y = 0.33;
  const column = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.2, 0.8, 8), M.stone);
  column.position.y = 0.76;
  const bowl = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.15, 0.13, 8), M.stone);
  bowl.position.y = 1.2;
  const jet = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.02, 0.45, 6), M.water);
  jet.position.y = 1.48;
  fountain.add(basin, pool, column, bowl, jet);
  fountain.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  place(fountain, 3.4, -4.0, 0, 'fountain');
  rects.push({ x: 3.4, z: -4.0, w: 2.2, d: 2.2 });

  // ---- village inside the loop -----------------------------------------
  place(house(M, { w: 2.8, d: 1.8, h: 2.3, wall: WALLS.ochre, roofMat: M.roofTile, roofH: 0.95, door: true }), -4.3, -4.75, 0, 'village house A');
  place(house(M, { w: 2.4, d: 1.7, h: 2.1, wall: WALLS.sage, roofMat: M.roofGreen, roofH: 0.85, door: true }), 9.3, -3.3, 0, 'village house B');

  // ---- west district (along West Street) -------------------------------
  // West Street keeps its own kerb, so the plots run z = -0.8 .. 17.2.
  place(house(M, { w: 2.6, d: 1.6, h: 2.1, wall: WALLS.white, roofMat: M.roofTile, roofH: 0.85, door: true }), -20.4, 1.5, 0, 'west house A');
  place(house(M, { w: 2.8, d: 1.6, h: 2.2, wall: WALLS.terracotta, roofMat: M.roofSlate, roofH: 0.85, door: true }), -20.4, 3.9, 0, 'west house B');
  // The village church stands on West Street, between the mill and the town.
  place(church(M), -20.0, 10.0, 0, 'church');
  place(house(M, { w: 2.8, d: 1.6, h: 2.2, wall: WALLS.cream, roofMat: M.roofTile, roofH: 0.9, door: true }), -20.4, 14.4, 0, 'west house D');

  // ---- upper village, north of the river bend --------------------------
  place(house(M, { w: 2.8, d: 2.0, h: 2.2, wall: WALLS.white, roofMat: M.roofSlate, roofH: 0.85, door: true }), -13.8, 9.25, 0, 'upper house A');
  place(house(M, { w: 2.6, d: 1.9, h: 2.0, wall: WALLS.terracotta, roofMat: M.roofTile, roofH: 0.8, door: true }), -10.2, 9.5, 0, 'upper house B');

  // ---- north bank row (above the promenade) ----------------------------
  const northColors = [WALLS.cream, WALLS.sage, WALLS.ochre, WALLS.white, WALLS.terracotta, WALLS.slateBlue, WALLS.brick];
  const northRoofs = [M.roofTile, M.roofGreen, M.roofSlate, M.roofTile, M.roofGreen, M.roofSlate, M.roofTile];
  [-17.0, -12.5, -8.0, -3.5, 1.0, 6.0, 11.0, 16.0].forEach((x, i) => {
    place(house(M, {
      w: 2.4, d: 1.8, h: 2.0 + (i % 3) * 0.1,
      wall: northColors[i % northColors.length], roofMat: northRoofs[i % northRoofs.length],
      roofH: 0.75 + (i % 2) * 0.08, door: true, chimney: i % 2 === 0,
    }), x, 16.0, 0, `north house ${String.fromCharCode(65 + i)}`);
  });

  // ---- east district (between the railway and East Road) ---------------
  // The strip is x 16..20.5, z -12.75..5.5 after the road kerb and the river bank.
  place(waterTower(M), 17.6, -9.35, 0, 'water tower');
  place(silos(M), 17.8, -7.15, 0, 'silos');
  place(house(M, { w: 2.6, d: 1.6, h: 2.3, wall: WALLS.grey, roofMat: M.roofTin, roofH: 0.5, door: true, roof: 'gable' }), 17.9, -2.8, 0, 'east house A');
  place(house(M, { w: 2.6, d: 1.6, h: 2.1, wall: WALLS.stone, roofMat: M.roofTin, roofH: 0.5, door: true, roof: 'gable' }), 17.9, -0.7, 0, 'east house B');
  place(house(M, { w: 2.6, d: 1.6, h: 2.0, wall: WALLS.white, roofMat: M.roofTile, roofH: 0.8, door: true }), 17.9, 1.8, 0, 'east house C');

  // ---- mill quarter ----------------------------------------------------
  const millObj = mill(M, layout);
  group.add(millObj.group);
  rects.push({
    x: millObj.anchor.x, z: millObj.anchor.z,
    w: 5.0, d: 3.2, ry: millObj.ry,
  });
  placed.push({ obj: millObj.group, x: millObj.anchor.x, z: millObj.anchor.z, w: 4.4, d: 3.0, name: 'mill' });
  // The mill's wheel is meant to dip into the river, so it is never nudged.

  // ---- small props -----------------------------------------------------
  const props = new THREE.Group();
  const addProp = (o, x, z, ry = 0, name = 'prop') => {
    o.position.set(x, 0, z);
    o.rotation.y = ry;
    props.add(o);
    placed.push({ obj: o, x, z, w: 0.6, d: 0.6, name });
    return o;
  };
  // Benches around the fountain, inside the square's own clearings.
  addProp(bench(M), 1.8, -4.6, Math.PI / 2, 'bench');
  addProp(bench(M), 4.65, -5.25, -Math.PI / 2, 'bench');
  addProp(bench(M), 3.4, -5.7, 0, 'bench');
  // Two more on the promenade, by the footbridge steps.
  addProp(bench(M), -11.8, 11.7, 0, 'bench');
  addProp(bench(M), -10.0, 12.2, 0, 'bench');
  // Goods yard on the forecourt, beside Village Road.
  addProp(crate(M, 0.55), 6.0, -12.9, 0.2, 'crate');
  addProp(barrel(M), 6.0, -12.2, 0, 'barrel');

  // ---- street furniture ------------------------------------------------
  // Lamps stand on the pavement that is left after each kerb: a lamp is 0.4
  // across and 0.7 along its pole arm, so a strip only half a unit deep needs
  // the post turned a quarter turn. Only the main ones carry a real point
  // light — the glass itself is themed and glows everywhere at night.
  const lampSpots = [
    // [x, z, ry, lit]
    [-17.25, -13.3, 0, true], [-13.35, -13.3, 0, true],
    [-14.75, 15.85, Math.PI / 2, true], [-5.75, 15.85, Math.PI / 2, false], [3.1, 15.85, Math.PI / 2, true],
    [13.5, 15.85, Math.PI / 2, true], [19.6, 15.85, Math.PI / 2, false],
    [-8.6, 12.05, Math.PI / 2, true], [-7.0, 12.05, Math.PI / 2, false], [-5.2, 12.3, Math.PI / 2, true],
    [-2.5, -1.2, Math.PI / 2, true], [6.0, 4.85, Math.PI / 2, false], [-15.5, 0.85, Math.PI / 2, true],
    [4.95, -4.0, 0, true],
    [19.4, -9.0, Math.PI / 2, true], [19.65, -5.6, Math.PI / 2, false], [19.65, -2.6, Math.PI / 2, true],
    [16.15, 1.95, Math.PI / 2, false], [21.0, -11.9, Math.PI / 2, false],
  ];
  for (const [x, z, ry, lit] of lampSpots) {
    const lamp = streetLamp(M, theme, { light: lit });
    lamp.position.set(x, 0, z);
    lamp.rotation.y = ry;
    group.add(lamp);
    placed.push({ obj: lamp, x, z, w: 0.4, d: 0.7, ry, name: 'lamp' });
  }
  // Railway signals + crossing warning sign. These belong beside the tracks, so
  // they are not part of the occupied set.
  const sig = railSignal(M, theme);
  sig.position.set(7.8, -9.6);
  sig.rotation.y = -0.5;
  group.add(sig);
  for (const sx of [-1, 1]) {
    const cs = levelCrossingSign(M);
    cs.position.set(5.7 + sx * 1.1, -8.6 + sx * 0.9);
    cs.rotation.y = Math.PI * 0.25 * sx;
    group.add(cs);
  }

  // ---- footbridge across the river, linking the promenade to the village --
  const footX = 2.0;
  const footNear = riverNearest(layout, footX, 12.7);
  const footAcross = footNear.normal;
  const fb = footbridge(M, RIVER_HALF_WIDTH * 2 + 1.3, 1.15);
  fb.position.copy(footNear.point);
  fb.rotation.y = Math.atan2(-footAcross.z, footAcross.x);
  group.add(fb);
  rects.push({ x: fb.position.x, z: fb.position.z, w: 1.6, d: 4.4, ry: fb.rotation.y });
  // The footbridge spans the river by design.

  // ---- placement resolver ------------------------------------------------
  // Buildings are placed at hand-picked coordinates; this pass measures each
  // footprint, then moves anything that touches the rails, the water, a road or
  // an already-settled building the shortest distance that clears it.
  const issues = [];
  const grid = buildOccupancy(layout);
  const fixedRects = new Map();
  for (const p of placed) {
    if (p.fixed) fixedRects.set(p.obj, { cx: p.x, cz: p.z, w: p.w, d: p.d, ry: p.ry || 0 });
  }
  const measure = (p) => {
    if (p.fixed) return; // landmark: keep the declared footprint
    const r = footRect(p.obj);
    if (!r) return;
    p.w = r.w;
    p.d = r.d;
    p.cx = r.cx;
    p.cz = r.cz;
  };
  const settled = [];
  const order = placed.slice().sort((a, b) => b.w * b.d - a.w * a.d);
  for (const p of order) {
    measure(p);
    const probe = { x: p.cx, z: p.cz, w: p.w, d: p.d, ry: p.ry || 0 };
    const [nx, nz] = shiftToFree(probe, grid, settled);
    const dx = nx - probe.x;
    const dz = nz - probe.z;
    if (Math.abs(dx) > 0.02 || Math.abs(dz) > 0.02) {
      p.obj.position.set(p.obj.position.x + dx, 0, p.obj.position.z + dz);
      p.cx = nx;
      p.cz = nz;
      issues.push(`${p.name || 'building'} moved ${dx >= 0 ? '+' : ''}${dx.toFixed(2)},${dz >= 0 ? '+' : ''}${dz.toFixed(2)}`);
    }
    settled.push({ x: p.cx, z: p.cz, w: p.w, d: p.d, ry: p.ry || 0 });
  }
  for (const p of placed) {
    p.x = p.cx;
    p.z = p.cz;
  }

  // Keep the footprint list used by the tree scatter in sync with the result.
  rects.length = 0;
  for (const p of placed) rects.push({ x: p.x, z: p.z, w: p.w, d: p.d });

  return { group, rects, millWheel: millObj.wheel, issues, placements: placed };
}

export { WALLS };
