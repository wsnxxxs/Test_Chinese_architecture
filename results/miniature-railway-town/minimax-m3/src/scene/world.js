import * as THREE from 'three';
import { createRng, rangeRng } from '../util/rng.js';

// ---------------------------------------------------------------------------
// Wooden display base
// ---------------------------------------------------------------------------
export function buildBase({ size = 30, thickness = 1.4 } = {}) {
  const group = new THREE.Group();

  // Side wood: a box that becomes the "frame" plus the inner top surface.
  const sideMat = new THREE.MeshStandardMaterial({
    color: 0x6e4a2a,
    roughness: 0.78,
    metalness: 0.05,
  });

  // Outer base block
  const blockGeom = new THREE.BoxGeometry(size + 0.6, thickness, size + 0.6);
  const block = new THREE.Mesh(blockGeom, sideMat);
  block.position.y = -thickness / 2;
  block.receiveShadow = true;
  block.castShadow = false;
  group.add(block);

  // Top frame: a slightly raised rim along the four edges (so grass sits in a recessed tray)
  const rimMat = new THREE.MeshStandardMaterial({
    color: 0x8a5a32,
    roughness: 0.65,
    metalness: 0.05,
  });

  const rimT = 0.18; // rim thickness
  const rimH = 0.16; // rim height above base top
  const half = size / 2 + 0.3;

  // Long sides (along X)
  const longGeom = new THREE.BoxGeometry(size + 0.6 + rimT * 2, rimH, 0.5);
  for (const z of [-(half + 0.18), half + 0.18 - 0.5]) {
    const m = new THREE.Mesh(longGeom, rimMat);
    m.position.set(0, rimH / 2, z);
    m.castShadow = true;
    m.receiveShadow = true;
    group.add(m);
  }
  // Short sides (along Z) – overlap the long sides at the corners
  const shortGeom = new THREE.BoxGeometry(0.5, rimH, size + 0.6 + rimT * 2);
  for (const x of [-(half + 0.18), half + 0.18 - 0.5]) {
    const m = new THREE.Mesh(shortGeom, rimMat);
    m.position.set(x, rimH / 2, 0);
    m.castShadow = true;
    m.receiveShadow = true;
    group.add(m);
  }

  // Corner studs (decorative)
  const studGeom = new THREE.BoxGeometry(0.45, rimH + 0.04, 0.45);
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      const stud = new THREE.Mesh(studGeom, rimMat);
      stud.position.set(sx * (half - 0.05), (rimH + 0.04) / 2, sz * (half - 0.05));
      stud.castShadow = true;
      stud.receiveShadow = true;
      group.add(stud);
    }
  }

  // Subtle wood grain via emissive noise? Skip – standard material with roughness gives enough variation.

  return group;
}

// ---------------------------------------------------------------------------
// Ground / grass plane (with subtle color variation)
// ---------------------------------------------------------------------------
export function buildGrass({ size = 30, segments = 48 } = {}) {
  const rng = createRng(0x9c33aa);

  // Slightly varied colors for the grass plane
  const geom = new THREE.PlaneGeometry(size, size, segments, segments);
  geom.rotateX(-Math.PI / 2);

  // Add small per-vertex Y variation to break the flat plane feel
  const pos = geom.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const z = pos.getZ(i);
    const d = Math.sqrt(x * x + z * z);
    // keep edges flat so it meets the frame cleanly
    const edgeFalloff = Math.min(1, Math.max(0, (size / 2 - d) / 4));
    const y = (rng() - 0.5) * 0.05 * edgeFalloff;
    pos.setY(i, y);
  }
  geom.computeVertexNormals();

  // Vertex colors for grass variation — keep the base saturated green so the
  // warm sunset light doesn't tip it into brown.
  const colors = new Float32Array(pos.count * 3);
  const baseA = new THREE.Color(0x6fb04a);
  const baseB = new THREE.Color(0x7fc055);
  const baseC = new THREE.Color(0x8fd066);
  const palette = [baseA, baseB, baseC];
  for (let i = 0; i < pos.count; i++) {
    const c = palette[Math.floor(rng() * palette.length)];
    // Subtle jitter only — keep the field reading as "grass" not "muddy"
    const k = 0.92 + rng() * 0.16;
    colors[i * 3 + 0] = Math.min(1, c.r * k);
    colors[i * 3 + 1] = Math.min(1, c.g * k);
    colors[i * 3 + 2] = Math.min(1, c.b * k);
  }
  geom.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const mat = new THREE.MeshStandardMaterial({
    vertexColors: true,
    roughness: 0.95,
    metalness: 0.0,
  });

  const mesh = new THREE.Mesh(geom, mat);
  mesh.position.y = 0.0;
  mesh.receiveShadow = true;
  return mesh;
}

// ---------------------------------------------------------------------------
// River: a band that meanders diagonally across the base, crossing the track.
// Exposes the centerline so the bridge module can attach to the correct spot.
// ---------------------------------------------------------------------------
export function buildRiver({
  width = 2.6,
  start = new THREE.Vector3(-13, 0, -8),
  end = new THREE.Vector3(13, 0, 11),
  mid = [new THREE.Vector3(-7, 0, -4.5), new THREE.Vector3(0, 0, -0.5), new THREE.Vector3(7, 0, 3.5)],
} = {}) {
  const points = [start, ...mid, end];
  const centerline3 = new THREE.CatmullRomCurve3(points, false, 'catmullrom', 0.4);
  const samples = 80;

  // Build a closed 2D Shape by walking the centerline at +/- width/2 along the perpendicular
  const shape = new THREE.Shape();
  const fwd = [];
  const bwd = [];
  for (let i = 0; i <= samples; i++) {
    const t = i / samples;
    const p = centerline3.getPointAt(t);
    const tan = centerline3.getTangentAt(t).setY(0).normalize();
    // 2D perpendicular: ( -tan.z, tan.x ) in (x, z) plane
    const nx = -tan.z;
    const nz = tan.x;
    fwd.push(new THREE.Vector2(p.x + nx * width / 2, p.z + nz * width / 2));
    bwd.push(new THREE.Vector2(p.x - nx * width / 2, p.z - nz * width / 2));
  }
  shape.moveTo(fwd[0].x, fwd[0].y);
  for (let i = 1; i < fwd.length; i++) shape.lineTo(fwd[i].x, fwd[i].y);
  for (let i = 0; i < bwd.length; i++) shape.lineTo(bwd[i].x, bwd[i].y);
  shape.closePath();

  const geom = new THREE.ShapeGeometry(shape, 24);
  geom.rotateX(-Math.PI / 2);

  // Per-vertex color so the river isn't one flat color
  const pos = geom.attributes.position;
  const colors = new Float32Array(pos.count * 3);
  const cBase = new THREE.Color(0x3b7aa1);
  const cDeep = new THREE.Color(0x2a5a7d);
  const cShine = new THREE.Color(0x6ea6c8);
  const rng = createRng(0x77ab3c);
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const z = pos.getZ(i);
    const y = pos.getY(i);
    const lateral = (rng() - 0.5);
    const mix = lateral * 0.6;
    const c = mix > 0
      ? cBase.clone().lerp(cShine, mix)
      : cBase.clone().lerp(cDeep, -mix);
    colors[i * 3 + 0] = c.r;
    colors[i * 3 + 1] = c.g;
    colors[i * 3 + 2] = c.b;
  }
  geom.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const mat = new THREE.MeshStandardMaterial({
    vertexColors: true,
    roughness: 0.32,
    metalness: 0.05,
    transparent: false,
  });
  const mesh = new THREE.Mesh(geom, mat);
  mesh.position.y = 0.015; // sit just above grass
  mesh.receiveShadow = true;
  mesh.name = 'river';

  return { mesh, centerline: centerline3 };
}

// ---------------------------------------------------------------------------
// Bridge over the river at the track crossing point.
// Returns the bridge group + the (centerline parameter t) where it sits, so
// the track module can mark a sleeper "on the bridge".
// ---------------------------------------------------------------------------
export function buildBridge({ centerline, atT = 0.55, length = 5.2, width = 2.6 } = {}) {
  const group = new THREE.Group();

  const p = centerline.getPointAt(atT);
  const tan = centerline.getTangentAt(atT).setY(0).normalize();

  // Orient the bridge so its long axis is perpendicular to the river flow.
  // River tangent at this point = flow direction. Bridge direction = perpendicular.
  const flow = new THREE.Vector3(tan.x, 0, tan.z);
  const across = new THREE.Vector3(-flow.z, 0, flow.x).normalize();
  const angle = Math.atan2(across.x, across.z);

  // Deck
  const deckGeom = new THREE.BoxGeometry(width + 0.6, 0.18, length);
  const deckMat = new THREE.MeshStandardMaterial({
    color: 0x6b4a2c,
    roughness: 0.78,
    metalness: 0.05,
  });
  const deck = new THREE.Mesh(deckGeom, deckMat);
  deck.position.set(p.x, 0.55, p.z);
  deck.rotation.y = angle;
  deck.castShadow = true;
  deck.receiveShadow = true;
  group.add(deck);

  // Planks on top of deck (visual detail)
  const plankMat = new THREE.MeshStandardMaterial({
    color: 0x8a6238,
    roughness: 0.75,
  });
  const plankCount = 8;
  for (let i = 0; i < plankCount; i++) {
    const u = (i + 0.5) / plankCount - 0.5;
    const plank = new THREE.Mesh(
      new THREE.BoxGeometry(width + 0.55, 0.04, 0.18),
      plankMat
    );
    plank.position.set(p.x + across.x * u * length, 0.65, p.z + across.z * u * length);
    plank.rotation.y = angle;
    plank.castShadow = true;
    plank.receiveShadow = true;
    group.add(plank);
  }

  // Railings along both sides of the bridge
  const railMat = new THREE.MeshStandardMaterial({
    color: 0x5a3a20,
    roughness: 0.75,
  });
  for (const side of [-1, 1]) {
    const railBase = new THREE.Mesh(
      new THREE.BoxGeometry(0.12, 0.06, length - 0.1),
      railMat
    );
    railBase.position.set(
      p.x + flow.x * side * (width / 2 + 0.25),
      0.78,
      p.z + flow.z * side * (width / 2 + 0.25)
    );
    railBase.rotation.y = angle;
    railBase.castShadow = true;
    group.add(railBase);

    const railTop = new THREE.Mesh(
      new THREE.BoxGeometry(0.1, 0.05, length - 0.1),
      railMat
    );
    railTop.position.set(
      p.x + flow.x * side * (width / 2 + 0.25),
      1.02,
      p.z + flow.z * side * (width / 2 + 0.25)
    );
    railTop.rotation.y = angle;
    railTop.castShadow = true;
    group.add(railTop);

    // Posts every 1.2 units
    const postCount = Math.max(2, Math.floor((length - 0.2) / 1.2));
    for (let i = 0; i < postCount; i++) {
      const u = (i + 0.5) / postCount - 0.5;
      const post = new THREE.Mesh(
        new THREE.BoxGeometry(0.1, 0.32, 0.1),
        railMat
      );
      post.position.set(
        p.x + flow.x * side * (width / 2 + 0.25) + across.x * u * (length - 0.1),
        0.86,
        p.z + flow.z * side * (width / 2 + 0.25) + across.z * u * (length - 0.1)
      );
      post.rotation.y = angle;
      post.castShadow = true;
      group.add(post);
    }
  }

  // Stone abutments on both ends of the bridge
  const stoneMat = new THREE.MeshStandardMaterial({
    color: 0x9a8e7c,
    roughness: 0.92,
    metalness: 0.0,
  });
  for (const side of [-1, 1]) {
    const abut = new THREE.Mesh(
      new THREE.BoxGeometry(width + 1.0, 0.55, 0.7),
      stoneMat
    );
    abut.position.set(
      p.x + across.x * side * (length / 2 + 0.1),
      0.18,
      p.z + across.z * side * (length / 2 + 0.1)
    );
    abut.rotation.y = angle;
    abut.castShadow = true;
    abut.receiveShadow = true;
    group.add(abut);
  }

  return { group, atT, center: p };
}