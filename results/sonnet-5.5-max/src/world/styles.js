import { M } from '../voxel/palette.js';

/** Roof colour schemes: yellow (imperial) > green > gray/blue. */
export const ROOF = {
  yellow: {
    tileA: M.Y1, tileB: M.Y2, ridge: M.Y3, trim: M.G2,
    face: [M.GREEN_L, M.BLUE_L], rafter: [M.BLUE, M.GREEN],
    gable: M.RED, gableTrim: M.GOLD, ceil: M.WOOD_D, beast: M.GREEN_L, chiwen: M.Y2,
  },
  green: {
    tileA: M.G1, tileB: M.G2, ridge: M.G3, trim: M.Y2,
    face: [M.BLUE_L, M.GREEN_L], rafter: [M.BLUE, M.GREEN],
    gable: M.RED, gableTrim: M.GOLD, ceil: M.WOOD_D, beast: M.Y2, chiwen: M.Y1,
  },
  gray: {
    tileA: M.T1, tileB: M.T2, ridge: M.T3, trim: M.T3,
    face: [M.WOOD, M.RED], rafter: [M.WOOD, M.RED_D],
    gable: M.BRICK, gableTrim: M.BRICK2, ceil: M.WOOD_D, beast: M.T2, chiwen: M.T3,
  },
  blue: {
    tileA: M.B1, tileB: M.B2, ridge: M.B3, trim: M.Y2,
    face: [M.GREEN_L, M.RED_L], rafter: [M.BLUE, M.GREEN],
    gable: M.RED, gableTrim: M.GOLD, ceil: M.WOOD_D, beast: M.Y2, chiwen: M.Y1,
  },
  brown: {
    tileA: M.R1, tileB: M.R2, ridge: M.R3, trim: M.Y3,
    face: [M.WOOD, M.RED], rafter: [M.WOOD, M.RED_D],
    gable: M.RED, gableTrim: M.GOLD_D, ceil: M.WOOD_D, beast: M.Y3, chiwen: M.R3,
  },
};
