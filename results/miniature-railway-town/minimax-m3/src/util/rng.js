// Mulberry32: small, fast, seedable PRNG so the sandbox looks the same every reload.
export function createRng(seed = 0x4a55b3) {
  let s = seed >>> 0;
  return function rand() {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function rangeRng(rng, min, max) {
  return min + (max - min) * rng();
}

export function pickRng(rng, arr) {
  return arr[Math.floor(rng() * arr.length)];
}