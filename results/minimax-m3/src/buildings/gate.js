/**
 * Mountain Gate (山门) - entry gate with single-eaved hip roof (庑殿).
 * Sits on the central axis at the front of the courtyard.
 */
import { COLORS, fill } from '../voxel.js';

export function buildGate(boxes, cx = 0, cz = -28) {
  const baseW = 9, baseD = 4;
  const x0 = cx - baseW / 2 | 0;
  const z0 = cz - baseD / 2 | 0;

  // platform
  fill(boxes, x0, 0, z0, x0 + baseW, 1, z0 + baseD, COLORS.white);
  fill(boxes, x0 + 1, 1, z0 + 1, x0 + baseW - 1, 2, z0 + baseD - 1, COLORS.white);

  // no front stairs - gate is freestanding entry

  // Wall body - lower so gate feels open
  const wallX0 = x0 + 1, wallX1 = x0 + baseW - 1;   // 7 wide
  const wallZ0 = z0, wallZ1 = z0 + baseD;            // 4 deep
  const wallY0 = 2, wallY1 = 5;                       // 3 tall

  // Corner pillars (red)
  for (const [px, pz] of [
    [wallX0, wallZ0], [wallX1 - 1, wallZ0],
    [wallX0, wallZ1 - 1], [wallX1 - 1, wallZ1 - 1],
  ]) {
    fill(boxes, px, wallY0, pz, px + 1, wallY1, pz + 1, COLORS.red);
  }

  // Middle columns on long sides
  for (let x = wallX0 + 3; x < wallX1 - 1; x += 3) {
    fill(boxes, x, wallY0, wallZ0, x + 1, wallY1, wallZ0 + 1, COLORS.red);
    fill(boxes, x, wallY0, wallZ1 - 1, x + 1, wallY1, wallZ1, COLORS.red);
  }

  // Plaque band above columns (signboard area) - dark wood
  fill(boxes, wallX0, wallY1 - 1, wallZ0, wallX1, wallY1, wallZ1, COLORS.dark);

  // solid walls at the bottom of long sides
  for (let x = wallX0 + 1; x < wallX1 - 1; x++) {
    if ([0, 3, 6].includes(x - wallX0)) continue;
    fill(boxes, x, wallY0, wallZ0, x + 1, wallY0 + 1, wallZ0 + 1, COLORS.red);
    fill(boxes, x, wallY0, wallZ1 - 1, x + 1, wallY0 + 1, wallZ1, COLORS.red);
  }

  // Big central archway (door) - 3 wide x 3 tall
  const doorW = 3;
  const d0 = cx - (doorW / 2 | 0);
  fill(boxes, d0, wallY0, wallZ0, d0 + doorW, wallY1 - 1, wallZ0 + 1, COLORS.wood);
  // arch top - red trim
  fill(boxes, d0 - 1, wallY1 - 1, wallZ0, d0 + doorW + 1, wallY1, wallZ0 + 1, COLORS.red);

  // dougong band
  const dougongY = wallY1;
  fill(boxes, wallX0 - 1, dougongY, wallZ0 - 1, wallX1 + 1, dougongY + 1, wallZ1 + 1, COLORS.woodLight);

  // hip roof (庑殿) - 4 sides slope inward. We use stepped approach.
  // Lower step (widest)
  fill(boxes, wallX0 - 2, dougongY + 1, wallZ0 - 2, wallX1 + 2, dougongY + 2, wallZ1 + 2, COLORS.tile);
  // mid step
  fill(boxes, wallX0 - 1, dougongY + 2, wallZ0 - 1, wallX1 + 1, dougongY + 3, wallZ1 + 1, COLORS.tile);
  // top step
  fill(boxes, wallX0, dougongY + 3, wallZ0, wallX1, dougongY + 4, wallZ1, COLORS.tile);

  // Ridge (horizontal, since hip roof has 4 ridges meeting at center)
  const ridgeY = dougongY + 4;
  // central ridge along x (and another along z)
  fill(boxes, wallX0 + 2, ridgeY, wallZ0 + 1, wallX1 - 2, ridgeY + 1, wallZ1 - 1, COLORS.tileRidge);

  // corner upturned ornaments
  for (const [ex, ez] of [
    [wallX0 - 2, wallZ0 - 2], [wallX1 + 1, wallZ0 - 2],
    [wallX0 - 2, wallZ1 + 1], [wallX1 + 1, wallZ1 + 1],
  ]) {
    fill(boxes, ex, dougongY + 2, ez, ex + 1, dougongY + 3, ez + 1, COLORS.tileRidge);
  }

  // lanterns flanking the door
  fill(boxes, d0 - 1, wallY1, wallZ0, d0, wallY1 + 1, wallZ0 + 1, COLORS.lantern);
  fill(boxes, d0 + doorW, wallY1, wallZ0, d0 + doorW + 1, wallY1 + 1, wallZ0 + 1, COLORS.lantern);

  // stone lion (石狮) - one on each side of the gate, abstract block form
  for (const off of [-2, doorW + 1]) {
    const lx = d0 + off;
    const lz = wallZ0 - 1;
    // base
    fill(boxes, lx, 1, lz, lx + 1, 2, lz + 1, COLORS.white);
    // body
    fill(boxes, lx, 2, lz, lx + 1, 3, lz + 1, COLORS.gray);
    // head
    fill(boxes, lx, 3, lz, lx + 1, 4, lz + 1, COLORS.gray);
  }

  return {
    name: 'gate',
    bbox: { x0, z0, x1: x0 + baseW, z1: z0 + baseD },
  };
}