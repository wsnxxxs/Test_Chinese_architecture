// Material palette for the voxel world.  Voxel id 0 is air.
// j = per-voxel brightness jitter, glow = emissive strength, gloss = glaze/metal shininess.
import { Color } from 'three';

const entries = [];
/** name -> id */
export const M = {};

function def(name, hex, o = {}) {
  entries.push({ name, hex, j: o.j ?? 0.045, glow: o.glow ?? 0, gloss: o.gloss ?? 0 });
  M[name] = entries.length; // ids start at 1
}

// ---- stone / ground ------------------------------------------------------
def('MARBLE', '#dedacd', { j: 0.025, gloss: 0.2 });
def('MARBLE2', '#cbc6b8', { j: 0.03, gloss: 0.15 });
def('STONE', '#b3aea0');
def('STONE2', '#9d998c');
def('STONE_D', '#7c786f');
def('STONE_DD', '#5e5b54');
def('PAVE1', '#aaa598', { j: 0.03 });
def('PAVE2', '#a09b8e', { j: 0.03 });
def('PAVE_J', '#7d796d', { j: 0.03 });
def('SLAB1', '#d0cbbc', { j: 0.025 });
def('SLAB2', '#c1bcac', { j: 0.025 });
def('BRICK', '#7e8487');
def('BRICK2', '#70767a');
def('BRICK_D', '#565b5f');
def('GRASS1', '#679a3f', { j: 0.06 });
def('GRASS2', '#76a749', { j: 0.06 });
def('GRASS3', '#5a8b36', { j: 0.06 });
def('GRASS4', '#8fb04d', { j: 0.06 });
def('GRASS_D', '#4a7a30', { j: 0.05 });
def('DIRT', '#8b6a47', { j: 0.05 });
def('DIRT2', '#74563a', { j: 0.05 });
def('SAND', '#cdbd8f', { j: 0.04 });
def('GRAVEL', '#8f8a7e', { j: 0.07 });
def('ROCK', '#807f77', { j: 0.06 });
def('ROCK2', '#6b6c66', { j: 0.06 });
def('ROCK_L', '#9b9c92', { j: 0.05 });
def('MOSS', '#6c8a4a', { j: 0.06 });
def('BED', '#456260', { j: 0.05 });
def('CROP1', '#c8d055', { j: 0.05 });
def('CROP2', '#9cbc46', { j: 0.05 });
def('CROP3', '#e3c95f', { j: 0.05 });
def('SOIL', '#7d5c3b', { j: 0.05 });
def('TAN', '#dbc593', { j: 0.035 });
def('TAN_D', '#bba270', { j: 0.035 });

// ---- painted wood / metal -------------------------------------------------
def('RED', '#b4271f', { j: 0.035, gloss: 0.1 });
def('RED_D', '#8b1c17', { j: 0.03 });
def('RED_L', '#cb3a2b', { j: 0.03 });
def('WOOD', '#6f4a2c');
def('WOOD_D', '#472c1a', { j: 0.03 });
def('WOOD_L', '#a26f40');
def('GOLD', '#ecb62a', { j: 0.02, gloss: 0.75 });
def('GOLD_D', '#b98a1c', { j: 0.02, gloss: 0.6 });
def('GOLD_L', '#f8d465', { j: 0.02, gloss: 0.7 });
def('BLUE', '#2e64aa', { j: 0.03, gloss: 0.25 });
def('BLUE_L', '#4f92d3', { j: 0.03, gloss: 0.25 });
def('BLUE_D', '#1f4479', { j: 0.03 });
def('GREEN', '#1f9074', { j: 0.03, gloss: 0.25 });
def('GREEN_L', '#40b691', { j: 0.03, gloss: 0.25 });
def('GREEN_D', '#166653', { j: 0.03 });
def('CREAM', '#eee3c2', { j: 0.03 });
def('PAPER', '#f3e4b2', { j: 0.02, glow: 0.5 });
def('BLACK', '#242226', { j: 0.03 });
def('WHITE', '#f4f1e9', { j: 0.02 });

// ---- roof tiles (glazed) --------------------------------------------------
def('Y1', '#e9b12b', { j: 0.03, gloss: 0.55 });
def('Y2', '#f4ca47', { j: 0.03, gloss: 0.55 });
def('Y3', '#d7961a', { j: 0.03, gloss: 0.6 });
def('G1', '#1e8b67', { j: 0.03, gloss: 0.55 });
def('G2', '#2aa87b', { j: 0.03, gloss: 0.55 });
def('G3', '#126a4d', { j: 0.03, gloss: 0.6 });
def('T1', '#4d555d', { j: 0.03, gloss: 0.25 });
def('T2', '#5d666f', { j: 0.03, gloss: 0.25 });
def('T3', '#353b41', { j: 0.03, gloss: 0.3 });
def('B1', '#2a60a6', { j: 0.03, gloss: 0.55 });
def('B2', '#3b79c3', { j: 0.03, gloss: 0.55 });
def('B3', '#1f4a87', { j: 0.03, gloss: 0.6 });
def('R1', '#9d3e2b', { j: 0.03, gloss: 0.4 });
def('R2', '#b44e35', { j: 0.03, gloss: 0.4 });
def('R3', '#742c1e', { j: 0.03, gloss: 0.45 });

// ---- light emitters -------------------------------------------------------
def('LAMP', '#e5301f', { j: 0.02, glow: 1.0 });
def('LAMP_Y', '#f5b93c', { j: 0.02, glow: 1.0 });
def('FLAME', '#ffb63c', { j: 0.0, glow: 1.4 });
def('WINDOW', '#ffd78a', { j: 0.02, glow: 0.8 });
def('EMBER', '#ff7a2a', { j: 0.05, glow: 1.2 });

// ---- bronze / statues -----------------------------------------------------
def('BRONZE', '#8a6b3b', { j: 0.05, gloss: 0.6 });
def('BRONZE_D', '#5d4826', { j: 0.05, gloss: 0.5 });
def('PATINA', '#4f7b5f', { j: 0.05, gloss: 0.4 });
def('BUDDHA', '#f2c232', { j: 0.02, glow: 0.3, gloss: 0.8 });
def('LION', '#bdb8aa', { j: 0.04 });

// ---- foliage --------------------------------------------------------------
def('PINE1', '#2c6a37', { j: 0.07 });
def('PINE2', '#3c7e44', { j: 0.07 });
def('PINE3', '#245a30', { j: 0.07 });
def('CYP1', '#2a5b3c', { j: 0.07 });
def('CYP2', '#346a49', { j: 0.07 });
def('GINK1', '#efba2c', { j: 0.06 });
def('GINK2', '#f7d24c', { j: 0.06 });
def('GINK3', '#dca020', { j: 0.06 });
def('MAPLE1', '#d94a2a', { j: 0.06 });
def('MAPLE2', '#e8713b', { j: 0.06 });
def('MAPLE3', '#b93822', { j: 0.06 });
def('BLOOM1', '#f6b5c7', { j: 0.05 });
def('BLOOM2', '#fad3de', { j: 0.05 });
def('BLOOM3', '#ee94b1', { j: 0.05 });
def('WILLOW1', '#8fbb52', { j: 0.06 });
def('WILLOW2', '#a6cd64', { j: 0.06 });
def('BAMBOO1', '#5aa24b', { j: 0.06 });
def('BAMBOO2', '#7bb95f', { j: 0.06 });
def('BAMBOO_S', '#93b45a', { j: 0.05 });
def('LEAF1', '#4d903b', { j: 0.07 });
def('LEAF2', '#60a544', { j: 0.07 });
def('TRUNK', '#5e4432', { j: 0.05 });
def('TRUNK2', '#4a3628', { j: 0.05 });
def('TRUNK_L', '#7b5c44', { j: 0.05 });

// ---- flowers / lotus / people ---------------------------------------------
def('F_PINK', '#ea6f9a', { j: 0.03 });
def('F_WHITE', '#f6f2ea', { j: 0.03 });
def('F_YELLOW', '#f3d43c', { j: 0.03 });
def('F_PURPLE', '#9c70d1', { j: 0.03 });
def('F_RED', '#de3b3b', { j: 0.03 });
def('LOTUS', '#48994f', { j: 0.05 });
def('LOTUS_P', '#f590b2', { j: 0.03 });
def('SKIN', '#e9be92', { j: 0.02 });
def('ROBE_O', '#dc7b2d', { j: 0.03 });
def('ROBE_G', '#8f9196', { j: 0.03 });
def('ROBE_R', '#a83333', { j: 0.03 });
def('ROBE_B', '#3c608f', { j: 0.03 });
def('HAIR', '#2a2320', { j: 0.02 });

if (entries.length > 255) throw new Error('palette overflow');

const n = entries.length + 1;
export const PAL = {
  r: new Float32Array(n),
  g: new Float32Array(n),
  b: new Float32Array(n),
  j: new Float32Array(n),
  glow: new Float32Array(n),
  gloss: new Float32Array(n),
  names: ['AIR'],
};

{
  const c = new Color();
  entries.forEach((e, i) => {
    c.set(e.hex); // sRGB hex -> linear working space
    PAL.r[i + 1] = c.r;
    PAL.g[i + 1] = c.g;
    PAL.b[i + 1] = c.b;
    PAL.j[i + 1] = e.j;
    PAL.glow[i + 1] = e.glow;
    PAL.gloss[i + 1] = e.gloss;
    PAL.names.push(e.name);
  });
}
