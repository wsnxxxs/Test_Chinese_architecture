/** All geometry and materials are generated locally. No textures or models to load. */
export const PALETTE = Object.freeze({
  stone: ['#c8c0a9', '#bcb49e', '#d4ccb6', '#b0aa97', '#ded4bc'],
  darkStone: ['#808678', '#929481', '#747e73'],
  plaster: ['#dbcab0', '#d0c1a6', '#e4d4b9'],
  red: ['#963f32', '#a34937', '#b2513b', '#89382e'],
  wood: ['#644431', '#75513a', '#8c6042'],
  darkWood: ['#453a2d', '#54432f'],
  gold: ['#bc8945', '#cea256', '#d9ae65', '#af7d3c', '#c4944e'],
  jade: ['#426459', '#4f7060', '#5f7b65', '#3b5b53', '#6b846b'],
  goldEdge: ['#e0b36b', '#d3a15b'],
  jadeEdge: ['#91a385', '#819579'],
  grass: ['#7d8c62', '#8a966c', '#929c70', '#78865e'],
  pine: ['#3c6252', '#50755c', '#608365', '#718b69'],
  autumn: ['#b78243', '#c7964e', '#d5aa60', '#b88d45'],
  blossom: ['#d6a998', '#e0b8a2', '#e9c5ae', '#cb9884'],
  water: ['#62918b', '#739d94', '#5a847e', '#83a99b'],
  bronze: ['#59604d', '#72775a', '#929071'],
  lantern: ['#f6c476', '#ffe0a0'],
});

/** Stable PRNG: screenshot/test results never change between page loads. */
export function randomGenerator(seed = 20260925) {
  let state = seed >>> 0;
  return () => {
    state += 0x6D2B79F5;
    let t = Math.imul(state ^ (state >>> 15), state | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
