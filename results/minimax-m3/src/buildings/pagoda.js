/**
 * Pagoda (宝塔) - 5-story hexagonal-pyramid roof tower.
 * Each story shrinks slightly with stacked tile roofs between floors.
 */
import { COLORS, fill } from '../voxel.js';

export function buildPagoda(boxes, cx = 0, cz = -14) {
  // Stone base
  const baseW = 7;
  const x0 = cx - (baseW / 2 | 0);
  const z0 = cz - (baseW / 2 | 0);
  fill(boxes, x0, 0, z0, x0 + baseW, 1, z0 + baseW, COLORS.white);
  fill(boxes, x0 + 1, 1, z0 + 1, x0 + baseW - 1, 2, z0 + baseW - 1, COLORS.white);

  // 5 stories: each story = wall (2 tall) + tile roof (1 tall) + slight overhang
  // walls shrink each level
  const stories = [
    { wall: 5, off: 0 },   // story 1: outer = baseW (7x7), wall 5 wide
    { wall: 4, off: 0 },   // story 2
    { wall: 3, off: 0 },   // story 3
    { wall: 3, off: 0 },   // story 4 - keep same as story 3 for stability
    { wall: 2, off: 0 },   // story 5
  ];

  let curY = 2;  // start above plinth
  let curOff = 0;
  for (let s = 0; s < stories.length; s++) {
    const w = stories[s].wall;
    const ox = cx - (w / 2 | 0);
    const oz = cz - (w / 2 | 0);

    // wall body - 2 tall
    // corner pillars
    fill(boxes, ox, curY, oz, ox + w, curY + 1, oz + w, COLORS.red);       // floor band
    for (const [px, pz] of [
      [ox, oz], [ox + w - 1, oz],
      [ox, oz + w - 1], [ox + w - 1, oz + w - 1],
    ]) {
      fill(boxes, px, curY + 1, pz, px + 1, curY + 2, pz + 1, COLORS.red);
    }
    // central column
    fill(boxes, cx, curY + 1, cz, cx + 1, curY + 2, cz + 1, COLORS.wood);
    // side wall fill
    for (let i = 1; i < w - 1; i++) {
      fill(boxes, ox + i, curY + 1, oz, ox + i + 1, curY + 2, oz + 1, COLORS.red);
      fill(boxes, ox + i, curY + 1, oz + w - 1, ox + i + 1, curY + 2, oz + w, COLORS.red);
      fill(boxes, ox, curY + 1, oz + i, ox + 1, curY + 2, oz + i + 1, COLORS.red);
      fill(boxes, ox + w - 1, curY + 1, oz + i, ox + w, curY + 2, oz + i + 1, COLORS.red);
    }

    // door on south face
    if (w >= 2) {
      const doorX = cx - (Math.min(w - 1, 1) / 2 | 0);
      fill(boxes, doorX, curY + 1, oz, doorX + Math.min(w - 1, 1) + 1, curY + 2, oz + 1, COLORS.wood);
    }

    curY += 2;

    // Tile roof - slight overhang (1 block)
    const roofW = w + 2;
    const rx0 = cx - (roofW / 2 | 0);
    const rz0 = cz - (roofW / 2 | 0);
    fill(boxes, rx0, curY, rz0, rx0 + roofW, curY + 1, rz0 + roofW, COLORS.tile);

    // corner upturned ornaments on roof
    for (const [ex, ez] of [
      [rx0, rz0], [rx0 + roofW - 1, rz0],
      [rx0, rz0 + roofW - 1], [rx0 + roofW - 1, rz0 + roofW - 1],
    ]) {
      fill(boxes, ex, curY + 1, ez, ex + 1, curY + 2, ez + 1, COLORS.tileRidge);
    }

    curY += 1;
  }

  // Spire (塔刹) - golden finial
  const spireBaseY = curY;
  fill(boxes, cx, spireBaseY, cz, cx + 1, spireBaseY + 1, cz + 1, COLORS.gold);
  // vertical spire
  fill(boxes, cx, spireBaseY + 1, cz, cx + 1, spireBaseY + 3, cz + 1, COLORS.gold);
  // tiny top
  fill(boxes, cx, spireBaseY + 3, cz, cx + 1, spireBaseY + 4, cz + 1, COLORS.tileRidge);

  return {
    name: 'pagoda',
    bbox: { x0, z0, x1: x0 + baseW, z1: z0 + baseW },
  };
}