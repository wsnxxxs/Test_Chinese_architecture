/**
 * Side Hall (配殿) - smaller, single-eaved hip-and-gable roof (单檐歇山).
 * cx, cz: center position on the ground plane.
 */
import { COLORS, fill } from '../voxel.js';

export function buildSideHall(boxes, cx, cz) {
  const baseW = 10, baseD = 7;
  const x0 = cx - baseW / 2 | 0;
  const z0 = cz - baseD / 2 | 0;

  // Stone platform
  fill(boxes, x0, 0, z0, x0 + baseW, 1, z0 + baseD, COLORS.white);
  fill(boxes, x0 + 1, 1, z0 + 1, x0 + baseW - 1, 2, z0 + baseD - 1, COLORS.white);

  // front stairs (smaller)
  fill(boxes, cx - 2, 0, z0 - 2, cx + 2, 1, z0, COLORS.white);
  fill(boxes, cx - 2, 1, z0 - 1, cx + 2, 2, z0, COLORS.white);

  // Wall body
  const wallX0 = x0 + 1, wallX1 = x0 + baseW - 1;     // 8 wide
  const wallZ0 = z0 + 1, wallZ1 = z0 + baseD - 1;     // 5 deep
  const wallY0 = 2, wallY1 = 5;                        // 3 tall

  // corner & intermediate columns
  const cols = [
    [wallX0, wallZ0], [wallX1 - 1, wallZ0],
    [wallX0, wallZ1 - 1], [wallX1 - 1, wallZ1 - 1],
    [wallX0 + 3, wallZ0], [wallX0 + 5, wallZ0],
    [wallX0 + 3, wallZ1 - 1], [wallX0 + 5, wallZ1 - 1],
  ];
  for (const [cxc, czc] of cols) {
    fill(boxes, cxc, wallY0, czc, cxc + 1, wallY1, czc + 1, COLORS.red);
  }

  // solid walls between columns
  for (let x = wallX0; x < wallX1 - 1; x++) {
    if ([0, 3, 5, 7].includes(x - wallX0)) continue;
    fill(boxes, x, wallY0 + 1, wallZ0, x + 1, wallY1 - 1, wallZ0 + 1, COLORS.red);
    fill(boxes, x, wallY0 + 1, wallZ1 - 1, x + 1, wallY1 - 1, wallZ1, COLORS.red);
  }
  for (let z = wallZ0 + 1; z < wallZ1 - 1; z++) {
    fill(boxes, wallX0, wallY0 + 1, z, wallX0 + 1, wallY1 - 1, z + 1, COLORS.red);
    fill(boxes, wallX1 - 1, wallY0 + 1, z, wallX1, wallY1 - 1, z + 1, COLORS.red);
  }

  // front wall with door
  const dx0 = cx - 1;
  fill(boxes, dx0, wallY0, wallZ0, dx0 + 2, wallY0 + 2, wallZ0 + 1, COLORS.wood);
  fill(boxes, dx0, wallY0 + 2, wallZ0, dx0 + 2, wallY1, wallZ0 + 1, COLORS.red);
  // back wall solid
  fill(boxes, wallX0, wallY0, wallZ1 - 1, wallX1, wallY1, wallZ1, COLORS.red);

  // windows on side walls - dark squares
  for (let x = wallX0 + 1; x < wallX1 - 1; x += 2) {
    if ([0, 3, 5, 7].includes(x - wallX0)) continue;
    fill(boxes, x, wallY0 + 1, wallZ0, x + 1, wallY0 + 2, wallZ0 + 1, COLORS.window);
    fill(boxes, x, wallY0 + 1, wallZ1 - 1, x + 1, wallY0 + 2, wallZ1, COLORS.window);
  }

  // Dougong band
  const dougongY = wallY1;
  fill(boxes, wallX0 - 1, dougongY, wallZ0 - 1, wallX1 + 1, dougongY + 1, wallZ1 + 1, COLORS.woodLight);

  // Single-eave roof - 3 steps
  fill(boxes, wallX0 - 2, dougongY + 1, wallZ0 - 2, wallX1 + 2, dougongY + 2, wallZ1 + 2, COLORS.tile);
  fill(boxes, wallX0 - 1, dougongY + 2, wallZ0 - 1, wallX1 + 1, dougongY + 3, wallZ1 + 1, COLORS.tile);
  fill(boxes, wallX0, dougongY + 3, wallZ0, wallX1, dougongY + 4, wallZ1, COLORS.tile);

  // Ridge
  const ridgeY = dougongY + 4;
  fill(boxes, wallX0 + 1, ridgeY, wallZ0 + 1, wallX1 - 1, ridgeY + 1, wallZ1 - 1, COLORS.tileRidge);

  // corner ornaments
  for (const [ex, ez] of [
    [wallX0 - 2, wallZ0 - 2], [wallX1 + 1, wallZ0 - 2],
    [wallX0 - 2, wallZ1 + 1], [wallX1 + 1, wallZ1 + 1],
  ]) {
    fill(boxes, ex, dougongY + 2, ez, ex + 1, dougongY + 3, ez + 1, COLORS.tileRidge);
  }

  // lantern under front eave
  fill(boxes, cx, dougongY + 1, wallZ0 - 1, cx + 1, dougongY + 2, wallZ0, COLORS.lantern);

  return {
    name: 'sideHall',
    bbox: { x0, z0, x1: x0 + baseW, z1: z0 + baseD },
  };
}