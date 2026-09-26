/**
 * Chinese roof generators (DOM-free, Three.js-free).
 *
 * Supported forms:
 *   庑殿顶  hipRoof({ gable: false })     — 四阿顶，五脊，四坡
 *   歇山顶  hipRoof({ gable: true })      — 九脊顶，下部四坡 + 上部山花
 *   攒尖顶  pyramidRoof()                 — 方锥，宝顶收头
 *   重檐    hipRoof({ maxLayers }) x2     — 下层腰檐 + 上层主檐
 *
 * All three share one layer model. Each roof layer is one voxel higher than the layer
 * below it; the layer's *plan* rectangle shrinks by an inset taken from a "举折" profile
 * (shallow near the eave, steep near the ridge). Only the exposed band
 * (rect_i minus rect_{i+1}) is written, so the voxel cost of a roof is proportional to its
 * perimeter rather than its area — this is what keeps the whole complex inside a small
 * voxel budget.
 *
 * 飞檐翘角 is produced by three passes on the lowest layer:
 *   1. the eave band is lifted progressively towards each corner (翘),
 *   2. the corner band cells flare one voxel outward (飞檐),
 *   3. a diagonal spur climbs outwards/upwards from each corner (翼角 / 垂脊).
 */

/** Decreasing inset profile (bottom shallow, top steep) whose entries sum to `total`. */
export function makeProfile(total, layers) {
  if (layers < 1) layers = 1;
  if (total < layers) total = layers;
  const w = [];
  for (let i = 0; i < layers; i++) w.push(layers - i);
  const sum = w.reduce((a, b) => a + b, 0);
  const extra = total - layers;
  const insets = w.map((wi) => 1 + Math.floor((extra * wi) / sum));
  let used = insets.reduce((a, b) => a + b, 0);
  let i = 0;
  while (used < total) { insets[i % layers] += 1; used += 1; i += 1; }
  while (used > total) {
    const j = insets.findIndex((v) => v > 1);
    if (j < 0) break;
    insets[j] -= 1; used -= 1;
  }
  return insets;
}

const clampInt = (v, lo, hi) => Math.max(lo, Math.min(hi, Math.round(v)));

/**
 * @param {import('./voxel.js').VoxelBuilder} b
 * @param {object} o
 *   x0,z0,x1,z1  eave plan rectangle (inclusive, already includes the overhang)
 *   y            height of the lowest roof layer
 *   tileKey      roof tile colour
 *   tileDimKey   alternate tile colour (瓦垄 stripes); optional
 *   edgeKey      eave edge colour (檐口)
 *   ridgeKey     ridge colour (正脊)
 *   underKey     eave underside / 椽子 colour; optional
 *   gable        true => 歇山顶 (vertical 山花 at the two ridge ends)
 *   gableKey     山花 fill colour (defaults to plaster)
 *   maxLayers    truncate the roof after N layers (used for 腰檐 of 重檐顶)
 *   ridgeWidth   ridge width in voxels (default 3)
 *   finial       true => add a 宝顶 at the ridge centre
 *   upturn       false to disable 飞檐翘角 (used for 围墙 / 廊庑)
 */
export function hipRoof(b, o) {
  const {
    x0, z0, x1, z1, y,
    tileKey, tileDimKey = tileKey, edgeKey = tileKey,
    ridgeKey, underKey = null,
    gable = false, gableKey = 'plaster',
    ridgeWidth = 3, finial = false, upturn = true,
    layersOverride = null,
  } = o;

  const W = x1 - x0 + 1;
  const D = z1 - z0 + 1;
  const alongX = W >= D;                       // ridge runs along the long axis
  const short = alongX ? D : W;                // hip run is driven by the short side
  const maxInset = Math.max(1, Math.floor((short - ridgeWidth) / 2));
  const layers = layersOverride ?? clampInt(maxInset * 0.72, 3, 12);
  const profile = makeProfile(maxInset, layers);
  // 歇山顶: the x (long) inset freezes after this layer, producing vertical 山花 faces.
  const gableFreeze = gable ? Math.max(1, Math.round(layers * 0.42)) : Infinity;

  const rectAt = (i) => {
    let ix = 0, iz = 0;
    for (let k = 0; k < i; k++) {
      const step = profile[k] ?? 0;      // past the last layer the plan stops shrinking
      if (alongX) { iz += step; if (k < gableFreeze) ix += step; }
      else { ix += step; if (k < gableFreeze) iz += step; }
    }
    if (alongX) iz = Math.min(iz, maxInset); else ix = Math.min(ix, maxInset);
    return { x0: x0 + ix, x1: x1 - ix, z0: z0 + iz, z1: z1 - iz };
  };

  const tileAt = (x, z) => (((x + z) % 2) === 0 ? tileKey : tileDimKey);

  // --- layers -------------------------------------------------------------
  let i = 0;
  let cur = rectAt(0);
  const maxIter = layers + 2;
  for (i = 0; i < maxIter; i++) {
    const next = rectAt(i + 1);
    const yi = y + i;
    const converged =
      next.x0 > next.x1 || next.z0 > next.z1 ||
      (next.x0 === cur.x0 && next.x1 === cur.x1 && next.z0 === cur.z0 && next.z1 === cur.z1);

    // exposed band = cur \ next
    for (let x = cur.x0; x <= cur.x1; x++) {
      for (let z = cur.z0; z <= cur.z1; z++) {
        const insideNext = !converged &&
          x >= next.x0 && x <= next.x1 && z >= next.z0 && z <= next.z1;
        if (insideNext) continue;
        const onEdge = x === cur.x0 || x === cur.x1 || z === cur.z0 || z === cur.z1;
        b.set(x, yi, z, i === 0 && onEdge ? edgeKey : tileAt(x, z));
      }
    }
    // 山花: vertical gable face at the two frozen ends (歇山顶)
    if (gable && i >= gableFreeze && i > 0) {
      for (const gx of [cur.x0, cur.x1]) {
        for (let z = cur.z0; z <= cur.z1; z++) b.set(gx, yi, z, gableKey);
      }
    }
    if (converged) break;
    cur = next;
  }

  const topY = y + i;
  const top = rectAt(i);

  // --- eave underside (椽子) ---------------------------------------------
  if (underKey) b.rectRing(y - 1, x0, z0, x1, z1, underKey, 1);

  // --- 飞檐翘角 -----------------------------------------------------------
  if (upturn) addUpturnedEaves(b, { x0, z0, x1, z1, y, key: edgeKey, dimKey: tileDimKey });

  // --- 正脊 + 吻兽 --------------------------------------------------------
  if (ridgeKey && top.x0 <= top.x1 && top.z0 <= top.z1) {
    const ry = topY + 1;
    if (alongX) {
      const zc = Math.round((top.z0 + top.z1) / 2);
      for (let x = top.x0; x <= top.x1; x++) {
        b.set(x, topY, zc, ridgeKey);
        b.set(x, ry, zc, ridgeKey);
      }
      // 吻兽 at both ridge ends
      for (const xe of [top.x0, top.x1]) {
        const dir = xe === top.x0 ? -1 : 1;
        b.set(xe, ry, zc, ridgeKey);
        b.set(xe + dir, ry, zc, ridgeKey);
        b.set(xe, ry + 1, zc, ridgeKey);
        b.set(xe + dir, ry + 1, zc, 'finialGold');
        b.set(xe, ry + 2, zc, ridgeKey);
      }
    } else {
      const xc = Math.round((top.x0 + top.x1) / 2);
      for (let z = top.z0; z <= top.z1; z++) {
        b.set(xc, topY, z, ridgeKey);
        b.set(xc, ry, z, ridgeKey);
      }
      for (const ze of [top.z0, top.z1]) {
        const dir = ze === top.z0 ? -1 : 1;
        b.set(xc, ry, ze, ridgeKey);
        b.set(xc, ry, ze + dir, ridgeKey);
        b.set(xc, ry + 1, ze, ridgeKey);
        b.set(xc, ry + 1, ze + dir, 'finialGold');
        b.set(xc, ry + 2, ze, ridgeKey);
      }
    }
  }

  if (finial) {
    const cx = Math.round((top.x0 + top.x1) / 2);
    const cz = Math.round((top.z0 + top.z1) / 2);
    b.box(cx - 1, topY + 1, cz - 1, cx + 1, topY + 1, cz + 1, 'finialGold');
    b.column(cx, cz, topY + 2, topY + 4, 'finialGold');
    b.box(cx - 1, topY + 3, cz - 1, cx + 1, topY + 3, cz + 1, 'gold');
  }

  return { topY, top, layers, profile, maxInset, ridgeAxis: alongX ? 'x' : 'z' };
}

/**
 * 飞檐翘角: lift the eave band towards the corners, flare it outwards, and climb a
 * diagonal spur out of each corner.
 */
function addUpturnedEaves(b, { x0, z0, x1, z1, y, key, dimKey }) {
  const W = x1 - x0 + 1;
  const D = z1 - z0 + 1;
  const tipLen = clampInt(Math.min(W, D) * 0.28, 2, 6);

  // 1 + 2: rise and flare along the four eave edges
  for (let x = x0; x <= x1; x++) {
    for (const [ze, oz] of [[z0, -1], [z1, 1]]) {
      const d = Math.min(x - x0, x1 - x);                 // distance to nearest corner
      if (d >= tipLen) continue;
      const lift = Math.min(3, tipLen - d);
      for (let h = 1; h <= lift; h++) b.set(x, y + h, ze, ((x + ze) % 2 === 0 ? key : dimKey));
      if (d <= tipLen - 2) {
        for (let h = 1; h <= lift; h++) b.set(x, y + h, ze + oz, ((x + ze) % 2 === 0 ? key : dimKey));
      }
    }
  }
  for (let z = z0; z <= z1; z++) {
    for (const [xe, ox] of [[x0, -1], [x1, 1]]) {
      const d = Math.min(z - z0, z1 - z);
      if (d >= tipLen) continue;
      const lift = Math.min(3, tipLen - d);
      for (let h = 1; h <= lift; h++) b.set(xe, y + h, z, ((xe + z) % 2 === 0 ? key : dimKey));
      if (d <= tipLen - 2) {
        for (let h = 1; h <= lift; h++) b.set(xe + ox, y + h, z, ((xe + z) % 2 === 0 ? key : dimKey));
      }
    }
  }

  // 3: diagonal 翼角 spurs
  const spur = clampInt(Math.min(W, D) * 0.22, 2, 5);
  for (const [cx, sx] of [[x0, -1], [x1, 1]]) {
    for (const [cz, sz] of [[z0, -1], [z1, 1]]) {
      for (let i = 1; i <= spur; i++) {
        const lift = 1 + Math.floor(i / 2);
        b.set(cx + sx * i, y + lift, cz + sz * i, key);
        if (i <= 2) {
          b.set(cx + sx * i, y + lift, cz + sz * (i - 1), key);
          b.set(cx + sx * (i - 1), y + lift, cz + sz * i, key);
        }
      }
    }
  }
}

/**
 * 攒尖顶 — square/polygonal pyramid converging to a point, finished with a 宝顶.
 */
export function pyramidRoof(b, o) {
  const {
    x0, z0, x1, z1, y,
    tileKey, tileDimKey = tileKey, edgeKey = tileKey, ridgeKey = null,
    finialKey = 'finialGold', upturn = true, layersOverride = null,
  } = o;

  const W = x1 - x0 + 1;
  const D = z1 - z0 + 1;
  const maxInset = Math.max(1, Math.floor((Math.min(W, D) - 1) / 2));
  const layers = layersOverride ?? clampInt(maxInset * 0.78, 3, 12);
  const profile = makeProfile(maxInset, layers);
  const tileAt = (x, z) => (((x + z) % 2) === 0 ? tileKey : tileDimKey);

  let ix = 0, iz = 0;
  let topY = y;
  for (let i = 0; i <= layers; i++) {
    const r = { x0: x0 + ix, x1: x1 - ix, z0: z0 + iz, z1: z1 - iz };
    if (r.x0 > r.x1 || r.z0 > r.z1) break;
    const yi = y + i;
    topY = yi;
    const converged = r.x0 === r.x1 && r.z0 === r.z1;
    for (let x = r.x0; x <= r.x1; x++) {
      for (let z = r.z0; z <= r.z1; z++) {
        const onEdge = x === r.x0 || x === r.x1 || z === r.z0 || z === r.z1;
        b.set(x, yi, z, i === 0 && onEdge ? edgeKey : tileAt(x, z));
      }
    }
    if (converged) break;
    const step = profile[Math.min(i, profile.length - 1)];
    ix += step; iz += step;
  }

  if (upturn) addUpturnedEaves(b, { x0, z0, x1, z1, y, key: edgeKey, dimKey: tileDimKey });

  // 宝顶
  const cx = Math.round((x0 + x1) / 2);
  const cz = Math.round((z0 + z1) / 2);
  b.box(cx - 1, topY + 1, cz - 1, cx + 1, topY + 1, cz + 1, finialKey);
  b.column(cx, cz, topY + 2, topY + 5, finialKey);
  b.box(cx - 1, topY + 4, cz - 1, cx + 1, topY + 4, cz + 1, 'gold');
  if (ridgeKey) b.box(cx - 1, topY + 6, cz - 1, cx + 1, topY + 6, cz + 1, ridgeKey);

  return { topY: topY + 6, layers };
}

/**
 * 重檐 — a lower "腰檐" skirt that wraps the building below the main roof.
 * Because only the exposed band of each layer is written, a truncated hip roof
 * naturally leaves the middle open for the storey wall to pass through.
 */
export function skirtRoof(b, o) {
  return hipRoof(b, { ...o, maxLayers: undefined, layersOverride: o.layersOverride ?? 3, finial: false });
}
