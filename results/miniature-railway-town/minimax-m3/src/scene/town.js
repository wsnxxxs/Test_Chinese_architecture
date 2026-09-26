import * as THREE from 'three';
import { createRng, rangeRng, pickRng } from '../util/rng.js';

// ---------------------------------------------------------------------------
// Station: building + platform + awning + clock tower.
// Positioned at the given world location (next to the track).
// Returns group + an emissive material array (for day/night toggle).
// ---------------------------------------------------------------------------
export function buildStation({ position, tangent }) {
  const group = new THREE.Group();
  group.name = 'station';

  // Outward direction (perpendicular to tangent, pointing into the town).
  // tangent ≈ (-0.2, 0, 0.96) at station t=0. The town sits on the +Z (south)
  // side, so we want the building offset toward +Z.
  const inward = new THREE.Vector3(-tangent.z, 0, tangent.x);

  const stationBaseZ = position.z + 1.7; // platform extends south of the track

  // ---------------- Platform (raised concrete strip) ----------------
  const platformMat = new THREE.MeshStandardMaterial({
    color: 0xa9a39a,
    roughness: 0.92,
    metalness: 0.02,
  });
  const platformGeom = new THREE.BoxGeometry(7.0, 0.18, 2.0);
  const platform = new THREE.Mesh(platformGeom, platformMat);
  platform.position.set(position.x - 0.6, 0.36, stationBaseZ);
  platform.castShadow = true;
  platform.receiveShadow = true;
  group.add(platform);

  // Platform edge stripe (yellow safety line)
  const stripeMat = new THREE.MeshStandardMaterial({
    color: 0xe8c659,
    roughness: 0.7,
  });
  const stripe = new THREE.Mesh(
    new THREE.BoxGeometry(6.8, 0.02, 0.1),
    stripeMat
  );
  stripe.position.set(position.x - 0.6, 0.46, stationBaseZ - 0.95);
  stripe.castShadow = false;
  stripe.receiveShadow = true;
  group.add(stripe);

  // ---------------- Main building ----------------
  const wallMat = new THREE.MeshStandardMaterial({
    color: 0xc8a878,
    roughness: 0.85,
  });
  const roofMat = new THREE.MeshStandardMaterial({
    color: 0x6e3326,
    roughness: 0.7,
  });
  const trimMat = new THREE.MeshStandardMaterial({
    color: 0x3d2618,
    roughness: 0.6,
  });

  const buildingGeom = new THREE.BoxGeometry(5.6, 1.6, 1.6);
  const building = new THREE.Mesh(buildingGeom, wallMat);
  building.position.set(position.x - 0.4, 0.9 + 0.18, stationBaseZ - 0.6);
  building.castShadow = true;
  building.receiveShadow = true;
  group.add(building);

  // Roof (gabled: two slanted planes)
  const roofGeom = makeGableRoof(5.6, 2.0, 0.9);
  const roof = new THREE.Mesh(roofGeom, roofMat);
  roof.position.set(position.x - 0.4, 0.9 + 0.18 + 0.8, stationBaseZ - 0.6);
  roof.rotation.y = Math.PI / 2; // gable ridge runs along Z
  roof.castShadow = true;
  group.add(roof);

  // Cornice (trim under roof)
  const cornice = new THREE.Mesh(
    new THREE.BoxGeometry(5.8, 0.1, 1.75),
    trimMat
  );
  cornice.position.set(position.x - 0.4, 0.9 + 0.18 + 0.86, stationBaseZ - 0.6);
  cornice.castShadow = true;
  group.add(cornice);

  // Windows along the platform-facing wall
  const windowMat = new THREE.MeshStandardMaterial({
    color: 0x2a4458,
    roughness: 0.3,
    metalness: 0.3,
    emissive: 0x000000,
  });
  const windowEmissive = []; // for day/night toggle
  for (let i = 0; i < 5; i++) {
    const win = new THREE.Mesh(
      new THREE.BoxGeometry(0.7, 0.5, 0.05),
      windowMat.clone()
    );
    const xOff = (i - 2) * 1.05;
    win.position.set(position.x - 0.4 + xOff, 1.3, stationBaseZ - 0.6 + 0.83);
    win.userData.baseEmissive = 0x223344;
    win.userData.isWindow = true;
    win.userData.isNightLit = true;
    windowEmissive.push(win.material);
    group.add(win);
  }
  // Window trim
  for (let i = 0; i < 5; i++) {
    const xOff = (i - 2) * 1.05;
    const trim = new THREE.Mesh(
      new THREE.BoxGeometry(0.78, 0.06, 0.05),
      trimMat
    );
    trim.position.set(position.x - 0.4 + xOff, 1.62, stationBaseZ - 0.6 + 0.83);
    group.add(trim);
    const trimBottom = new THREE.Mesh(
      new THREE.BoxGeometry(0.78, 0.06, 0.05),
      trimMat
    );
    trimBottom.position.set(position.x - 0.4 + xOff, 0.98, stationBaseZ - 0.6 + 0.83);
    group.add(trimBottom);
  }

  // Door (south-facing end)
  const doorMat = new THREE.MeshStandardMaterial({
    color: 0x3d2618,
    roughness: 0.7,
  });
  const door = new THREE.Mesh(
    new THREE.BoxGeometry(0.6, 1.0, 0.06),
    doorMat
  );
  door.position.set(position.x - 2.95, 0.6 + 0.18, stationBaseZ - 0.6 + 0.8);
  door.castShadow = true;
  group.add(door);

  // ---------------- Awning (small roof over the platform) ----------------
  const awning = new THREE.Mesh(
    new THREE.BoxGeometry(6.4, 0.05, 1.4),
    new THREE.MeshStandardMaterial({ color: 0x6e3326, roughness: 0.7 })
  );
  awning.position.set(position.x - 0.6, 2.55, stationBaseZ - 1.4);
  awning.castShadow = true;
  group.add(awning);
  // Awning supports
  for (const sx of [-2.6, 1.4]) {
    const post = new THREE.Mesh(
      new THREE.CylinderGeometry(0.05, 0.05, 1.3, 8),
      trimMat
    );
    post.position.set(position.x + sx, 1.85, stationBaseZ - 1.8);
    post.castShadow = true;
    group.add(post);
  }

  // ---------------- Clock tower (small) ----------------
  const towerBase = new THREE.Mesh(
    new THREE.BoxGeometry(0.9, 1.2, 0.9),
    wallMat
  );
  towerBase.position.set(position.x + 2.5, 1.7, stationBaseZ - 0.6);
  towerBase.castShadow = true;
  group.add(towerBase);
  const towerTop = new THREE.Mesh(
    new THREE.BoxGeometry(1.0, 0.4, 1.0),
    roofMat
  );
  towerTop.position.set(position.x + 2.5, 2.5, stationBaseZ - 0.6);
  towerTop.castShadow = true;
  group.add(towerTop);
  // Spire
  const spire = new THREE.Mesh(
    new THREE.ConeGeometry(0.15, 0.6, 8),
    trimMat
  );
  spire.position.set(position.x + 2.5, 3.0, stationBaseZ - 0.6);
  spire.castShadow = true;
  group.add(spire);
  // Clock face (emissive so it can glow at night)
  const clockMat = new THREE.MeshStandardMaterial({
    color: 0xeae0c8,
    roughness: 0.4,
    emissive: 0x000000,
  });
  clockMat.userData.baseEmissive = 0xffd28a;
  clockMat.userData.isNightLit = true;
  windowEmissive.push(clockMat);
  const clockFront = new THREE.Mesh(
    new THREE.CircleGeometry(0.25, 16),
    clockMat
  );
  clockFront.position.set(position.x + 2.96, 2.0, stationBaseZ - 0.6);
  clockFront.rotation.y = Math.PI / 2;
  group.add(clockFront);

  // ---------------- Hanging lamps along the platform ----------------
  const lampMats = [];
  for (let i = 0; i < 4; i++) {
    const lampPost = new THREE.Mesh(
      new THREE.CylinderGeometry(0.04, 0.04, 1.6, 6),
      trimMat
    );
    const xOff = (i - 1.5) * 1.5;
    lampPost.position.set(position.x + xOff, 1.9, stationBaseZ - 1.8);
    lampPost.castShadow = true;
    group.add(lampPost);
    const lampHead = makeStreetLampHead({ size: 0.18 });
    lampHead.position.set(position.x + xOff, 2.8, stationBaseZ - 1.8);
    group.add(lampHead);
    lampMats.push(...lampHead.userData.emissiveMaterials);
  }

  // ---------------- Name board ----------------
  const signBg = new THREE.Mesh(
    new THREE.BoxGeometry(2.0, 0.4, 0.05),
    new THREE.MeshStandardMaterial({ color: 0x3d2618, roughness: 0.6 })
  );
  signBg.position.set(position.x - 0.4, 2.4, stationBaseZ - 0.6 + 0.83);
  signBg.castShadow = true;
  group.add(signBg);

  return { group, emissiveMaterials: [...windowEmissive, ...lampMats] };
}

function makeGableRoof(width, depth, height) {
  // Two slanted planes forming a gable roof.
  const geom = new THREE.BufferGeometry();
  const w = width / 2;
  const d = depth / 2;
  const h = height;
  // Two triangles meeting at the ridge.
  const verts = new Float32Array([
    // Front face triangle
    -w, 0, -d,
     w, 0, -d,
     0, h, -d,
    // Back face triangle
    -w, 0,  d,
     w, 0,  d,
     0, h,  d,
    // Left slope (rectangle split into two tris)
    -w, 0, -d,
     0, h, -d,
    -w, 0,  d,
    -w, 0,  d,
     0, h, -d,
     0, h,  d,
    // Right slope
     w, 0, -d,
     w, 0,  d,
     0, h, -d,
     0, h, -d,
     w, 0,  d,
     0, h,  d,
  ]);
  geom.setAttribute('position', new THREE.BufferAttribute(verts, 3));
  geom.computeVertexNormals();
  return geom;
}

// ---------------------------------------------------------------------------
// Houses: 6–8 varied buildings clustered around the town center.
// ---------------------------------------------------------------------------
export function buildHouses({ center = new THREE.Vector3(-6, 0, 5), count = 7 } = {}) {
  const rng = createRng(0x8811ce);
  const group = new THREE.Group();
  group.name = 'town-houses';
  const windowEmissive = [];

  const palette = [
    { wall: 0xeae1c8, roof: 0x6c3325, trim: 0x3d2618 },
    { wall: 0xd6b486, roof: 0x4a261a, trim: 0x2a1810 },
    { wall: 0xcbbf9d, roof: 0x5e2a20, trim: 0x3d2618 },
    { wall: 0xefc9a3, roof: 0x5a2e1e, trim: 0x2a1810 },
    { wall: 0xbfa180, roof: 0x4f2818, trim: 0x3d2618 },
    { wall: 0xa9b88c, roof: 0x4a261a, trim: 0x2a1810 }, // a slightly greener house
    { wall: 0xd9c098, roof: 0x5e2e22, trim: 0x3d2618 },
  ];

  const placedPositions = [];
  for (let i = 0; i < count; i++) {
    // Lay houses out roughly along a curving row, going east from the station area.
    const along = -1 + (i + 0.5) / count * 2.2; // [-1, 1.2]
    const baseX = center.x + along * 5.0;
    const baseZ = center.z + (rng() - 0.4) * 2.4 + Math.abs(along) * 0.6;
    placedPositions.push({ x: baseX, z: baseZ });
  }

  // Sort along the row so houses don't visually overlap too aggressively.
  placedPositions.sort((a, b) => a.x - b.x);

  for (let i = 0; i < placedPositions.length; i++) {
    const pos = placedPositions[i];
    const cfg = palette[i % palette.length];
    const w = rangeRng(rng, 1.4, 2.0);
    const h = rangeRng(rng, 1.2, 1.7);
    const d = rangeRng(rng, 1.4, 2.0);
    const yaw = rng() * 0.4 - 0.2;

    const house = new THREE.Group();

    const wallMat = new THREE.MeshStandardMaterial({
      color: cfg.wall,
      roughness: 0.85,
    });
    const wall = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), wallMat);
    wall.position.y = h / 2;
    wall.castShadow = true;
    wall.receiveShadow = true;
    house.add(wall);

    const roofMat = new THREE.MeshStandardMaterial({
      color: cfg.roof,
      roughness: 0.7,
    });
    const roof = new THREE.Mesh(
      makeGableRoof(w + 0.18, d + 0.18, 0.7),
      roofMat
    );
    roof.position.y = h;
    roof.rotation.y = Math.PI / 2;
    roof.castShadow = true;
    house.add(roof);

    const trimMat = new THREE.MeshStandardMaterial({
      color: cfg.trim,
      roughness: 0.6,
    });

    // Front door
    const doorW = 0.35;
    const doorH = 0.75;
    const door = new THREE.Mesh(
      new THREE.BoxGeometry(doorW, doorH, 0.05),
      trimMat
    );
    door.position.set(0, doorH / 2, d / 2 + 0.01);
    house.add(door);

    // Windows (two on the front, maybe two on the side)
    const windowMat = new THREE.MeshStandardMaterial({
      color: 0x2a4458,
      roughness: 0.3,
      metalness: 0.3,
      emissive: 0x000000,
    });
    windowMat.userData.baseEmissive = 0x2a3a4a;
    windowMat.userData.isNightLit = true;
    windowEmissive.push(windowMat);
    const winPositions = [
      { x: -w / 4, y: h * 0.6, z: d / 2 + 0.02 },
      { x: w / 4, y: h * 0.6, z: d / 2 + 0.02 },
    ];
    for (const wp of winPositions) {
      const win = new THREE.Mesh(
        new THREE.BoxGeometry(0.32, 0.32, 0.04),
        windowMat
      );
      win.position.set(wp.x, wp.y, wp.z);
      house.add(win);
      // Window cross frame
      const frameH = new THREE.Mesh(
        new THREE.BoxGeometry(0.04, 0.32, 0.02),
        trimMat
      );
      frameH.position.set(wp.x, wp.y, wp.z + 0.01);
      house.add(frameH);
      const frameV = new THREE.Mesh(
        new THREE.BoxGeometry(0.32, 0.04, 0.02),
        trimMat
      );
      frameV.position.set(wp.x, wp.y, wp.z + 0.01);
      house.add(frameV);
    }
    // Optional side window
    if (rng() > 0.4) {
      const sw = new THREE.Mesh(
        new THREE.BoxGeometry(0.32, 0.32, 0.04),
        windowMat
      );
      sw.position.set(w / 2 + 0.01, h * 0.6, 0);
      sw.rotation.y = Math.PI / 2;
      house.add(sw);
    }

    // Chimney
    if (rng() > 0.3) {
      const chim = new THREE.Mesh(
        new THREE.BoxGeometry(0.22, 0.6, 0.22),
        new THREE.MeshStandardMaterial({ color: 0x7a5240, roughness: 0.85 })
      );
      chim.position.set(w * 0.25, h + 0.55, -d * 0.1);
      chim.castShadow = true;
      house.add(chim);
    }

    house.position.set(pos.x, 0, pos.z);
    house.rotation.y = yaw;
    group.add(house);
  }

  return { group, emissiveMaterials: windowEmissive };
}

// ---------------------------------------------------------------------------
// Trees: a mix of conifers and broadleaves scattered in empty spaces.
// `avoidFn(x, z)` returns true to forbid placement.
// ---------------------------------------------------------------------------
export function buildTrees({ count = 32, avoidFn = () => false, riverCenterline = null } = {}) {
  const rng = createRng(0x44ee11);
  const group = new THREE.Group();
  group.name = 'trees';

  let placed = 0;
  let attempts = 0;
  while (placed < count && attempts < count * 12) {
    attempts++;
    const x = rangeRng(rng, -14, 14);
    const z = rangeRng(rng, -14, 14);
    if (avoidFn(x, z)) continue;
    if (riverCenterline) {
      // Keep trees off the river
      const samples = 40;
      let minDist = Infinity;
      for (let i = 0; i <= samples; i++) {
        const t = i / samples;
        const p = riverCenterline.getPointAt(t);
        const d = Math.hypot(p.x - x, p.z - z);
        if (d < minDist) minDist = d;
      }
      if (minDist < 2.2) continue;
    }
    const type = rng() > 0.55 ? 'broad' : 'conifer';
    const tree = makeTree(type, rng);
    tree.position.set(x, 0, z);
    tree.rotation.y = rng() * Math.PI * 2;
    group.add(tree);
    placed++;
  }
  return group;
}

function makeTree(type, rng) {
  const g = new THREE.Group();
  const trunkMat = new THREE.MeshStandardMaterial({
    color: 0x5a3a22,
    roughness: 0.9,
  });
  const trunkH = type === 'broad' ? 0.8 : 0.5;
  const trunk = new THREE.Mesh(
    new THREE.CylinderGeometry(0.07, 0.1, trunkH, 6),
    trunkMat
  );
  trunk.position.y = trunkH / 2;
  trunk.castShadow = true;
  g.add(trunk);

  if (type === 'broad') {
    // Spherical canopy made of stacked icospheres for a more organic feel.
    const leafMat = new THREE.MeshStandardMaterial({
      color: pickRng(rng, [0x5c8c3a, 0x6ea53a, 0x4f7a32, 0x80a64a, 0x6a8a40]),
      roughness: 0.85,
    });
    const r = rangeRng(rng, 0.4, 0.7);
    const main = new THREE.Mesh(new THREE.IcosahedronGeometry(r, 1), leafMat);
    main.position.y = trunkH + r * 0.7;
    main.castShadow = true;
    g.add(main);
    if (rng() > 0.4) {
      const r2 = r * 0.6;
      const top = new THREE.Mesh(new THREE.IcosahedronGeometry(r2, 1), leafMat);
      top.position.y = trunkH + r * 1.3;
      top.castShadow = true;
      g.add(top);
    }
  } else {
    // Conifer: stacked cones
    const needleMat = new THREE.MeshStandardMaterial({
      color: pickRng(rng, [0x355d2a, 0x456e36, 0x2f5a26, 0x4a7236]),
      roughness: 0.9,
    });
    const layers = 3;
    const baseR = rangeRng(rng, 0.35, 0.55);
    for (let i = 0; i < layers; i++) {
      const r = baseR * (1 - i * 0.22);
      const cone = new THREE.Mesh(
        new THREE.ConeGeometry(r, 0.6, 8),
        needleMat
      );
      cone.position.y = trunkH + i * 0.35 + 0.3;
      cone.castShadow = true;
      g.add(cone);
    }
  }
  return g;
}

// ---------------------------------------------------------------------------
// Street lamps along the main road.
// ---------------------------------------------------------------------------
export function buildStreetLamps({ positions = [] } = {}) {
  const group = new THREE.Group();
  group.name = 'lamps';
  const emissiveMats = [];
  for (const p of positions) {
    const lamp = makeStreetLampPost();
    lamp.position.set(p.x, 0, p.z);
    lamp.rotation.y = p.yaw || 0;
    emissiveMats.push(...lamp.userData.emissiveMaterials);
    group.add(lamp);
  }
  return { group, emissiveMaterials: emissiveMats };
}

function makeStreetLampHead({ size = 0.18 } = {}) {
  const g = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial({
    color: 0xffe4a8,
    emissive: 0x000000,
    roughness: 0.4,
    transparent: true,
    opacity: 0.95,
  });
  mat.userData.baseEmissive = 0xffb15c;
  mat.userData.isNightLit = true;
  const orb = new THREE.Mesh(new THREE.SphereGeometry(size, 12, 8), mat);
  g.add(orb);
  // small cap above
  const capMat = new THREE.MeshStandardMaterial({
    color: 0x3d2618,
    roughness: 0.6,
  });
  const cap = new THREE.Mesh(
    new THREE.ConeGeometry(size * 1.1, size * 0.7, 8),
    capMat
  );
  cap.position.y = size * 1.0;
  cap.rotation.x = Math.PI; // point down
  g.add(cap);
  g.userData.emissiveMaterials = [mat];
  return g;
}

function makeStreetLampPost() {
  const g = new THREE.Group();
  const baseMat = new THREE.MeshStandardMaterial({
    color: 0x2a1810,
    roughness: 0.7,
  });
  const base = new THREE.Mesh(
    new THREE.CylinderGeometry(0.12, 0.16, 0.2, 8),
    baseMat
  );
  base.position.y = 0.1;
  base.castShadow = true;
  g.add(base);
  const post = new THREE.Mesh(
    new THREE.CylinderGeometry(0.05, 0.05, 1.4, 8),
    baseMat
  );
  post.position.y = 0.9;
  post.castShadow = true;
  g.add(post);
  // Arm
  const arm = new THREE.Mesh(
    new THREE.CylinderGeometry(0.03, 0.03, 0.3, 8),
    baseMat
  );
  arm.position.set(0.13, 1.55, 0);
  arm.rotation.z = Math.PI / 2;
  arm.castShadow = true;
  g.add(arm);
  const head = makeStreetLampHead({ size: 0.14 });
  head.position.set(0.27, 1.55, 0);
  g.add(head);
  g.userData.emissiveMaterials = head.userData.emissiveMaterials;
  return g;
}

// ---------------------------------------------------------------------------
// Roads: dark gray strips running along designated paths.
// Built from extruded rectangles between segments.
// ---------------------------------------------------------------------------
export function buildRoads({ paths = [] } = {}) {
  const group = new THREE.Group();
  group.name = 'roads';
  const mat = new THREE.MeshStandardMaterial({
    color: 0x3a3a40,
    roughness: 0.92,
    metalness: 0.0,
  });
  const edgeMat = new THREE.MeshStandardMaterial({
    color: 0x9a8e7c,
    roughness: 0.9,
  });
  const width = 1.6;
  for (const path of paths) {
    for (let i = 0; i < path.length - 1; i++) {
      const a = path[i];
      const b = path[i + 1];
      const dx = b.x - a.x;
      const dz = b.z - a.z;
      const len = Math.hypot(dx, dz);
      const cx = (a.x + b.x) / 2;
      const cz = (a.z + b.z) / 2;
      const angle = Math.atan2(dx, dz);
      const seg = new THREE.Mesh(
        new THREE.PlaneGeometry(width, len),
        mat
      );
      seg.rotation.x = -Math.PI / 2;
      seg.rotation.z = -angle;
      seg.position.set(cx, 0.012, cz);
      seg.receiveShadow = true;
      group.add(seg);

      // Edge dirt strips (slightly wider, darker) for definition
      for (const side of [-1, 1]) {
        const edge = new THREE.Mesh(
          new THREE.PlaneGeometry(0.08, len),
          edgeMat
        );
        edge.rotation.x = -Math.PI / 2;
        edge.rotation.z = -angle;
        edge.position.set(
          cx + Math.cos(angle) * (width / 2 + 0.04) * -side,
          0.013,
          cz + Math.sin(angle) * (width / 2 + 0.04) * -side
        );
        edge.receiveShadow = true;
        group.add(edge);
      }
    }
  }
  return group;
}

// ---------------------------------------------------------------------------
// Pickets / fences around the town
// ---------------------------------------------------------------------------
export function buildFences({ segments = [] } = {}) {
  const group = new THREE.Group();
  group.name = 'fences';
  const mat = new THREE.MeshStandardMaterial({
    color: 0xefe1c5,
    roughness: 0.7,
  });
  for (const seg of segments) {
    const { a, b } = seg;
    const dx = b.x - a.x;
    const dz = b.z - a.z;
    const len = Math.hypot(dx, dz);
    const cx = (a.x + b.x) / 2;
    const cz = (a.z + b.z) / 2;
    const angle = Math.atan2(dx, dz);

    const postCount = Math.max(2, Math.floor(len / 0.4));
    // Bottom rail
    const rail = new THREE.Mesh(
      new THREE.BoxGeometry(0.06, 0.06, len),
      mat
    );
    rail.position.set(cx, 0.18, cz);
    rail.rotation.y = angle;
    rail.castShadow = true;
    rail.receiveShadow = true;
    group.add(rail);
    const rail2 = rail.clone();
    rail2.position.y = 0.42;
    group.add(rail2);
    // Pickets
    for (let i = 0; i < postCount; i++) {
      const u = (i + 0.5) / postCount - 0.5;
      const post = new THREE.Mesh(
        new THREE.BoxGeometry(0.08, 0.55, 0.04),
        mat
      );
      post.position.set(
        cx + Math.sin(angle) * u * len,
        0.28,
        cz + Math.cos(angle) * u * len
      );
      post.rotation.y = angle;
      post.castShadow = true;
      group.add(post);
    }
  }
  return group;
}