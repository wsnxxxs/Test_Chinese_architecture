import * as THREE from 'three';
import { mesh, tube, box, makeShape, extrudeShape, decal, surface, V } from './geometry.js';
import { SPEC, AXLES } from './spec.js';

function rimSpoke(group, a, branch, M) {
  const p = (r, theta) => [r * Math.cos(theta), r * Math.sin(theta)];
  const points = branch === 0 ? [p(.052, a - .075), p(.16, a + .055), p(.183, a + .10), p(.171, a + .16), p(.15, a + .13), p(.052, a + .09)] : branch === 1 ? [p(.146, a + .085), p(.277, a + .21), p(.281, a + .24), p(.268, a + .255), p(.15, a + .14)] : [p(.16, a + .08), p(.272, a - .16), p(.284, a - .14), p(.276, a - .10), p(.16, a + .15)];
  const blade = extrudeShape(group, makeShape(points), .012, M.gunmetal, .0028); blade.position.z = .119;
  const edge = points.slice(0, 3).map(([x, y]) => [x, y, .135]); tube(group, edge, .0026, M.aluminium, false, 12);
}
function sidewallMark() {
  const c = document.createElement('canvas'); c.width = c.height = 512; const ctx = c.getContext('2d');
  ctx.translate(256, 256); ctx.fillStyle = '#666a6a'; ctx.font = '600 22px Arial'; ctx.textAlign = 'center';
  const writeArc = (text, angle, radius) => {
    for (let i = 0; i < text.length; i++) { ctx.save(); ctx.rotate(angle + (i - (text.length - 1) / 2) * .067); ctx.fillText(text[i], 0, -radius); ctx.restore(); }
  };
  writeArc('P ZERO', 0, 228); ctx.font = '13px Arial'; writeArc('TRACK COMPOUND', Math.PI, 231);
  const tex = new THREE.CanvasTexture(c); tex.encoding = THREE.sRGBEncoding; return new THREE.MeshStandardMaterial({ map: tex, transparent: true, roughness: .9, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -1 });
}
const torus = (g, radius, thickness, z, mat, segments = 96) => { const m = mesh(g, new THREE.TorusGeometry(radius, thickness, 8, segments), mat); m.position.z = z; return m; };

function createWheel(M, width, labelMaterial) {
  const wheel = new THREE.Group(); wheel.name = 'Performance wheel / tyre, rotor, Y-spokes, caliper';
  const w = width / 2;
  // Closed radial cross-section, revolved about local Z. Tyre radius is exactly .370.
  const profile = [[.288,-w*.95],[.313,-w],[.346,-w*.97],[.365,-w*.76],[.370,-w*.55],[.370,w*.55],[.365,w*.76],[.346,w*.97],[.313,w],[.288,w*.95]];
  const tyre = surface((u, v) => {
    const k = v * (profile.length - 1), n = Math.min(profile.length - 2, Math.floor(k)), t = k - n;
    const r = THREE.MathUtils.lerp(profile[n][0], profile[n + 1][0], t), z = THREE.MathUtils.lerp(profile[n][1], profile[n + 1][1], t), a = u * Math.PI * 2;
    return [r * Math.cos(a), r * Math.sin(a), z];
  }, 96, 36);
  mesh(wheel, tyre, M.rubber, 'Tread / 740 mm diameter');
  for (const z of [-w * .985, w * .985]) {
    const side = mesh(wheel, new THREE.RingGeometry(.287, .346, 96, 4), M.sidewall); side.position.z = z; if (z < 0) side.rotation.y = Math.PI;
    torus(wheel, .303, .0018, z + .001, M.sidewall);
    torus(wheel, .347, .0013, z + .001, M.sidewall);
  }
  const label = mesh(wheel, new THREE.RingGeometry(.312, .359, 96), labelMaterial); label.position.z = w + .0015;
  // The entire rim assembly follows the outer face when rear tyre width changes.
  const rim = new THREE.Group(); rim.position.z = w - .127; wheel.add(rim);
  const barrel = mesh(rim, new THREE.CylinderGeometry(.284, .284, width - .02, 96, 1, true), M.gunmetal); barrel.rotation.x = Math.PI / 2;
  torus(rim, .283, .007, .125, M.aluminium); torus(rim, .273, .0028, .12, M.gunmetal);
  torus(rim, .283, .006, -.105, M.gunmetal);
  const rotor = mesh(rim, new THREE.RingGeometry(.072, .244, 96), M.brake); rotor.position.z = .069;
  const backing = mesh(rim, new THREE.CylinderGeometry(.243, .243, .018, 80), M.brake); backing.rotation.x = Math.PI / 2; backing.position.z = .058;
  for (const r of [.122, .159, .199, .236]) torus(rim, r, .00075, .0705, M.gunmetal, 80);
  const holeGeo = new THREE.CircleGeometry(.0033, 7);
  const holes = new THREE.InstancedMesh(holeGeo, M.black, 100); const mat = new THREE.Matrix4(); let id = 0;
  for (let ring = 0; ring < 4; ring++) for (let i = 0; i < 25; i++) { const a = i / 25 * Math.PI * 2 + ring * .075, r = .135 + .029 * ring; mat.makeTranslation(Math.cos(a) * r, Math.sin(a) * r, .072); holes.setMatrixAt(id++, mat); } rim.add(holes);
  // Six-piston style curved brake caliper behind (not on top of) the spokes.
  const caliperShape = new THREE.Shape();
  caliperShape.moveTo(.175, -.115); caliperShape.quadraticCurveTo(.237, -.108, .244, -.045); caliperShape.lineTo(.244, .085); caliperShape.quadraticCurveTo(.22, .145, .171, .141); caliperShape.lineTo(.151, .095); caliperShape.lineTo(.151, -.068); caliperShape.closePath();
  const caliper = extrudeShape(rim, caliperShape, .062, M.yellow, .009); caliper.position.z = .042;
  const cMat = new THREE.MeshStandardMaterial({ map: decal('DENZA', { color: '#252a2e', fontSize: 65, weight: 700 }), transparent: true, roughness: .8 });
  const text = mesh(rim, new THREE.PlaneGeometry(.117, .028), cMat); text.position.set(.206, .02, .115); text.rotation.z = Math.PI / 2;
  for (let i = 0; i < 10; i++) for (let branch = 0; branch < 3; branch++) rimSpoke(rim, i / 10 * Math.PI * 2, branch, M);
  const hub = mesh(rim, new THREE.CylinderGeometry(.052, .058, .027, 40), M.gunmetal); hub.rotation.x = Math.PI / 2; hub.position.z = .126;
  torus(rim, .034, .003, .143, M.aluminium, 36);
  const cap = mesh(rim, new THREE.CircleGeometry(.029, 40), M.black); cap.position.z = .145;
  // Abstract teardrop mark, drawn as geometry rather than an external logo image.
  const emblem = makeShape([[0,.021],[-.008,.006],[-.012,-.008],[-.004,-.016],[.004,-.016],[.012,-.008],[.008,.006]]);
  const badge = mesh(rim, new THREE.ShapeGeometry(emblem, 12), M.aluminium); badge.position.z = .146;
  for (let i = 0; i < 5; i++) { const a = i * Math.PI * .4; const bolt = mesh(rim, new THREE.CylinderGeometry(.004, .004, .006, 6), M.aluminium); bolt.rotation.x = Math.PI / 2; bolt.position.set(Math.cos(a) * .043, Math.sin(a) * .043, .143); }
  const valve = box(rim, [.009,.017,.01], [.10,.242,.115], M.black); valve.rotation.z = -.4;
  return wheel;
}
export function addWheels(car, M) {
  const labels = sidewallMark(), wheels = [];
  for (let axle = 0; axle < 2; axle++) for (const sign of [-1, 1]) {
    const width = axle ? SPEC.rearTyreWidth : SPEC.frontTyreWidth;
    const w = createWheel(M, width, labels);
    w.position.set(AXLES[axle], SPEC.wheelRadius, sign * (axle ? SPEC.rearTrack : SPEC.frontTrack) / 2);
    if (sign < 0) w.rotation.y = Math.PI;
    car.add(w); wheels.push(w);
  }
  return wheels;
}
