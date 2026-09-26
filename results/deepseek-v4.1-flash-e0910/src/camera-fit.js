/**
 * Camera framing maths (DOM-free, Three.js-free).
 *
 * Used twice: at runtime to place the opening camera so the whole complex is in frame,
 * and in test/verify.mjs to prove that every corner of the architecture bounding box
 * projects inside the frustum for the chosen camera.
 */

const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const norm = (a) => {
  const l = Math.hypot(a[0], a[1], a[2]) || 1;
  return [a[0] / l, a[1] / l, a[2] / l];
};

export function boxCorners({ xMin, yMin, zMin, xMax, yMax, zMax }) {
  const out = [];
  for (const x of [xMin, xMax]) for (const y of [yMin, yMax]) for (const z of [zMin, zMax]) out.push([x, y, z]);
  return out;
}

export function boxCentre(b) {
  return [(b.xMin + b.xMax) / 2, (b.yMin + b.yMax) / 2, (b.zMin + b.zMax) / 2];
}

/**
 * Distance at which a perspective camera looking from `direction` at `target` contains
 * the whole box.
 */
export function fitDistance({ bounds, fovDeg, aspect, direction = [0.85, 0.62, 1], margin = 1.06 }) {
  const target = boxCentre(bounds);
  const fwd = norm(direction);                     // target -> camera
  const up0 = Math.abs(fwd[1]) > 0.98 ? [0, 0, 1] : [0, 1, 0];
  const right = norm(cross(up0, fwd));
  const up = norm(cross(fwd, right));
  const tanY = Math.tan((fovDeg * Math.PI) / 360);
  const tanX = tanY * aspect;

  let d = 0;
  for (const p of boxCorners(bounds)) {
    const v = sub(p, target);
    const along = dot(v, fwd);
    d = Math.max(d, along + Math.abs(dot(v, right)) / tanX);
    d = Math.max(d, along + Math.abs(dot(v, up)) / tanY);
  }
  return { distance: d * margin, target, basis: { fwd, right, up } };
}

/** Full camera placement (position + look-at target) that frames the box. */
export function fitCamera({ bounds, fovDeg = 45, aspect = 16 / 9, direction = [0.85, 0.62, 1], margin = 1.06 }) {
  const { distance, target } = fitDistance({ bounds, fovDeg, aspect, direction, margin });
  const fwd = norm(direction);
  return {
    position: [target[0] + fwd[0] * distance, target[1] + fwd[1] * distance, target[2] + fwd[2] * distance],
    target,
    distance,
  };
}

/**
 * True when every corner of `bounds` lies inside the frustum of a perspective camera.
 * Mirrors the GPU test: depth > near and the projected offsets inside the half-angles.
 */
export function boxInFrustum({ bounds, position, target, fovDeg, aspect, near = 0.1, far = 5000 }) {
  const fwd = norm(sub(target, position));         // camera -> target
  const up0 = Math.abs(fwd[1]) > 0.98 ? [0, 0, 1] : [0, 1, 0];
  const right = norm(cross(fwd, up0));
  const up = norm(cross(right, fwd));
  const tanY = Math.tan((fovDeg * Math.PI) / 360);
  const tanX = tanY * aspect;
  const worst = { x: 0, y: 0, z: 0 };
  let ok = true;
  for (const p of boxCorners(bounds)) {
    const v = sub(p, position);
    const z = dot(v, fwd);
    const x = dot(v, right);
    const y = dot(v, up);
    worst.z = Math.max(worst.z, Math.abs(z / ((near + far) / 2)));
    if (z <= near || z >= far) { ok = false; continue; }
    if (Math.abs(x) > z * tanX) { ok = false; worst.x = Math.max(worst.x, Math.abs(x) / (z * tanX)); }
    if (Math.abs(y) > z * tanY) { ok = false; worst.y = Math.max(worst.y, Math.abs(y) / (z * tanY)); }
  }
  return { visible: ok, worst };
}
