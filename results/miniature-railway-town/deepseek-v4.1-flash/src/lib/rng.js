// Small deterministic PRNG helpers. Every random value in the diorama comes from
// here so the town is identical on every page load (and after a reset).

export function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export class Rng {
  constructor(seed = 1337) {
    this._next = mulberry32(seed);
  }
  next() {
    return this._next();
  }
  range(a, b) {
    return a + (b - a) * this._next();
  }
  int(a, b) {
    return Math.floor(a + (b - a + 1) * this._next() * 0.999999);
  }
  pick(list) {
    return list[Math.min(list.length - 1, Math.floor(this._next() * list.length))];
  }
  chance(p) {
    return this._next() < p;
  }
  sign() {
    return this._next() < 0.5 ? -1 : 1;
  }
  jitter(amount) {
    return (this._next() * 2 - 1) * amount;
  }
}

// Cheap 2D value noise (smooth interpolated hash) - used for terrain relief and
// for procedural canvas textures.
export function makeValueNoise(seed = 7) {
  const rand = mulberry32(seed);
  const size = 256;
  const table = new Float32Array(size * size);
  for (let i = 0; i < table.length; i++) table[i] = rand();
  const at = (x, y) => table[(((y % size) + size) % size) * size + (((x % size) + size) % size)];
  const smooth = (t) => t * t * (3 - 2 * t);
  return function noise2(x, y) {
    const xi = Math.floor(x);
    const yi = Math.floor(y);
    const xf = smooth(x - xi);
    const yf = smooth(y - yi);
    const a = at(xi, yi);
    const b = at(xi + 1, yi);
    const c = at(xi, yi + 1);
    const d = at(xi + 1, yi + 1);
    return (a * (1 - xf) + b * xf) * (1 - yf) + (c * (1 - xf) + d * xf) * yf;
  };
}

export function fbm(noise, x, y, octaves = 4, lacunarity = 2, gain = 0.5) {
  let sum = 0;
  let amp = 1;
  let norm = 0;
  let fx = x;
  let fy = y;
  for (let i = 0; i < octaves; i++) {
    sum += amp * noise(fx, fy);
    norm += amp;
    amp *= gain;
    fx *= lacunarity;
    fy *= lacunarity;
  }
  return sum / norm;
}
