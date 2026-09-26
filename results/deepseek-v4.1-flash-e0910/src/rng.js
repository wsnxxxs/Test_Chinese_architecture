/**
 * Tiny deterministic PRNG helpers (DOM-free, Three.js-free).
 *
 * Every randomised decoration in the scene is driven by an explicit integer seed so
 * that mirrored halves of the site (x and -x) generate *identical* geometry, which is
 * what makes the programmatic axial-symmetry check in test/verify.mjs exact rather
 * than approximate.
 */

/** mulberry32: fast, deterministic, 32-bit seeded PRNG. */
export function mulberry32(seed) {
  let a = seed >>> 0;
  return function next() {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Stable hash of a coordinate triple -> [0,1).
 * `symHash` deliberately hashes |x| so that (x, y, z) and (-x, y, z) get the same
 * value; this is used for ground texture jitter so the site stays mirror-perfect.
 */
export function symHash(x, y, z) {
  let h = Math.imul(Math.abs(x) | 0, 0x27d4eb2d) ^ Math.imul(y | 0, 0x165667b1) ^ Math.imul(z | 0, 0x9e3779b1);
  h = Math.imul(h ^ (h >>> 15), 0x85ebca6b);
  h = Math.imul(h ^ (h >>> 13), 0xc2b2ae35);
  return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
}

/** Deterministic pick from a list using a coordinate hash. */
export function pickHash(list, x, y, z) {
  const v = symHash(x, y, z);
  return list[Math.min(list.length - 1, Math.floor(v * list.length))];
}
