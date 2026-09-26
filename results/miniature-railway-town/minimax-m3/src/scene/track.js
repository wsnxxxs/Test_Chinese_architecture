import * as THREE from 'three';

// ----------------------------------------------------------------------------
// Closed railway track
// Returns:
//   - group     : THREE.Group with all visible track geometry
//   - curve     : THREE.CatmullRomCurve3 (closed) for the train to follow
//   - stationT  : parameter t along the curve where the station platform sits
//   - stationPos: world position of the station
// ----------------------------------------------------------------------------
export function buildTrack() {
  const group = new THREE.Group();
  group.name = 'track';

  // Closed loop, control points at track-bed height (Y = 0.5).
  const cp = [
    new THREE.Vector3(-13.0, 0.5,  0.0),  // 0  W – station approach
    new THREE.Vector3(-12.0, 0.5, -5.5),  // 1  NW
    new THREE.Vector3( -7.5, 0.5, -9.0),  // 2  N-NW
    new THREE.Vector3(  0.0, 0.5, -10.5), // 3  N
    new THREE.Vector3(  7.5, 0.5, -9.0),  // 4  N-NE
    new THREE.Vector3( 12.0, 0.5, -5.5),  // 5  NE
    new THREE.Vector3( 14.0, 0.5, -2.0),  // 6  E-N (approach bridge)
    new THREE.Vector3( 14.5, 0.5,  0.0),  // 7  E – bridge middle (flat-ish)
    new THREE.Vector3( 14.0, 0.5,  2.0),  // 8  E-S (past bridge)
    new THREE.Vector3( 12.0, 0.5,  6.0),  // 9  SE
    new THREE.Vector3(  7.5, 0.5,  9.5),  // 10 S-SE
    new THREE.Vector3(  0.0, 0.5,  10.5), // 11 S
    new THREE.Vector3( -7.5, 0.5,  9.5),  // 12 S-SW
    new THREE.Vector3(-12.0, 0.5,  6.0),  // 13 SW
  ];

  const curve = new THREE.CatmullRomCurve3(cp, true, 'catmullrom', 0.5);
  curve.arcLengthDivisions = 400;

  // ------------------------------------------------------------------
  // Materials
  // ------------------------------------------------------------------
  const tieMat = new THREE.MeshStandardMaterial({
    color: 0x6b4a2c,
    roughness: 0.85,
    metalness: 0.05,
  });
  const railMat = new THREE.MeshStandardMaterial({
    color: 0x9aa1a8,
    roughness: 0.35,
    metalness: 0.85,
  });
  const ballastMat = new THREE.MeshStandardMaterial({
    color: 0x9c8b6b,
    roughness: 0.95,
  });

  // ------------------------------------------------------------------
  // Ballast strip: a thin ribbon hugging the curve (visual bed)
  // ------------------------------------------------------------------
  {
    const ballastSamples = 360;
    const positions = [];
    const indices = [];
    const halfWidth = 0.95;
    for (let i = 0; i <= ballastSamples; i++) {
      const t = i / ballastSamples;
      const p = curve.getPointAt(t);
      const tan = curve.getTangentAt(t).setY(0).normalize();
      const nx = -tan.z;
      const nz =  tan.x;
      positions.push(p.x + nx * halfWidth, 0.48, p.z + nz * halfWidth);
      positions.push(p.x - nx * halfWidth, 0.48, p.z - nz * halfWidth);
    }
    for (let i = 0; i < ballastSamples; i++) {
      const a = i * 2;
      const b = i * 2 + 1;
      const c = (i + 1) * 2;
      const d = (i + 1) * 2 + 1;
      indices.push(a, b, c, b, d, c);
    }
    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geom.setIndex(indices);
    geom.computeVertexNormals();
    const ballast = new THREE.Mesh(geom, ballastMat);
    ballast.receiveShadow = true;
    group.add(ballast);
  }

  // ------------------------------------------------------------------
  // Sleepers (ties) – perpendicular wooden bars every ~0.4 units
  // ------------------------------------------------------------------
  {
    const trackLength = curve.getLength();
    const tieSpacing = 0.32;
    const tieCount = Math.floor(trackLength / tieSpacing);
    const tieGeom = new THREE.BoxGeometry(1.5, 0.07, 0.13);
    for (let i = 0; i < tieCount; i++) {
      const t = i / tieCount;
      const p = curve.getPointAt(t);
      const tan = curve.getTangentAt(t).setY(0).normalize();
      const angle = Math.atan2(tan.x, tan.z);
      const tie = new THREE.Mesh(tieGeom, tieMat);
      tie.position.set(p.x, 0.51, p.z);
      tie.rotation.y = angle;
      tie.castShadow = false;
      tie.receiveShadow = true;
      group.add(tie);
    }
  }

  // ------------------------------------------------------------------
  // Rails – two parallel strips along the curve
  // ------------------------------------------------------------------
  {
    const railSamples = 600;
    const gauge = 0.62; // half distance between the two rails
    const railH = 0.05;
    for (const side of [-1, 1]) {
      const positions = [];
      const indices = [];
      const xOff = side * gauge;
      for (let i = 0; i <= railSamples; i++) {
        const t = i / railSamples;
        const p = curve.getPointAt(t);
        const tan = curve.getTangentAt(t).setY(0).normalize();
        const nx = -tan.z;
        const nz =  tan.x;
        const cx = p.x + nx * xOff;
        const cz = p.z + nz * xOff;
        // top vertex
        positions.push(cx, 0.55 + railH, cz);
        // bottom vertex
        positions.push(cx, 0.55, cz);
      }
      for (let i = 0; i < railSamples; i++) {
        const a = i * 2;
        const b = i * 2 + 1;
        const c = (i + 1) * 2;
        const d = (i + 1) * 2 + 1;
        indices.push(a, b, c, b, d, c);
      }
      const geom = new THREE.BufferGeometry();
      geom.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      geom.setIndex(indices);
      geom.computeVertexNormals();
      const rail = new THREE.Mesh(geom, railMat);
      rail.castShadow = false;
      rail.receiveShadow = true;
      group.add(rail);
    }
  }

  // ------------------------------------------------------------------
  // Station position – settle on t = 0 (start of curve, west side).
  // The platform is rendered separately in town.js.
  // ------------------------------------------------------------------
  const stationT = 0.0;
  const stationPos = curve.getPointAt(stationT).clone();
  // push the station slightly south of the track so the platform is on the
  // outside of the curve, not on the inside
  const stationTan = curve.getTangentAt(stationT).setY(0).normalize();
  // outward direction (to the west / left of curve direction): perpendicular to tangent
  // Track at station goes mostly along +X/-Z to +X/+Z (curving down).
  // We want the station south of the track (z > 0 side). Outward at t=0
  // points roughly to (-1, 0). For station on the inside of the loop
  // (toward town center), use the inward normal.
  const inward = new THREE.Vector3(stationTan.z, 0, -stationTan.x); // perpendicular, "right" of motion
  // At t=0, stationTan ≈ (-0.2, 0, 0.96) (heading up-right).
  // Inward (cross with up) points: (0.96, 0, 0.2), which is +X/+Z. That's east, wrong.
  // Let's just nudge the station by hand: shift south (z+) so platform is on town side.
  stationPos.z += 0.0; // keep at track level for now; platform extends south.

  return { group, curve, stationT, stationPos };
}