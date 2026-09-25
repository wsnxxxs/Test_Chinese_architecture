/**
 * Main Hall (主殿) - largest volume, double-eaved hip-and-gable roof (重檐歇山).
 * Origin (0,0,0) is the ground corner where the hall's foundation starts.
 * The hall is centered at x = cx, z = cz; we use width/depth to define its footprint.
 */
import { COLORS, fill, hollowBox, smallBlock } from '../voxel.js';

export function buildMainHall(boxes, cx = 0, cz = 5) {
  // ---- Stone platform (台基) - 3 tiers of stairs ----
  const baseW = 16, baseD = 11;   // outer platform
  const x0 = cx - baseW / 2 | 0;
  const z0 = cz - baseD / 2 | 0;

  // lower plinth
  fill(boxes, x0, 0, z0, x0 + baseW, 1, z0 + baseD, COLORS.white);
  // mid plinth
  fill(boxes, x0 + 1, 1, z0 + 1, x0 + baseW - 1, 2, z0 + baseD - 1, COLORS.white);
  // upper plinth
  fill(boxes, x0 + 2, 2, z0 + 2, x0 + baseW - 2, 3, z0 + baseD - 2, COLORS.white);

  // front stairs (south side: smallest z) - 3 steps leading up
  const stairsX0 = cx - 3, stairsX1 = cx + 3;
  fill(boxes, stairsX0, 0, z0 - 3, stairsX1, 1, z0, COLORS.white);
  fill(boxes, stairsX0, 1, z0 - 2, stairsX1, 2, z0, COLORS.white);
  fill(boxes, stairsX0, 2, z0 - 1, stairsX1, 3, z0, COLORS.white);

  // ---- Wall body (墙体) ----
  // wall sits on top of upper plinth (y 3..7), with red columns and walls
  const wallX0 = x0 + 2, wallX1 = x0 + baseW - 2;       // 12 wide
  const wallZ0 = z0 + 2, wallZ1 = z0 + baseD - 2;       // 7 deep
  const wallY0 = 3, wallY1 = 7;                          // 4 tall

  // corner columns (red, prominent)
  for (const [cx2, cz2] of [
    [wallX0, wallZ0],
    [wallX1 - 1, wallZ0],
    [wallX0, wallZ1 - 1],
    [wallX1 - 1, wallZ1 - 1],
  ]) {
    fill(boxes, cx2, wallY0, cz2, cx2 + 1, wallY1, cz2 + 1, COLORS.red);
  }
  // intermediate columns on each side (2 per long side)
  for (let x = wallX0 + 3; x < wallX1 - 1; x += 4) {
    fill(boxes, x, wallY0, wallZ0, x + 1, wallY1, wallZ0 + 1, COLORS.red);
    fill(boxes, x, wallY0, wallZ1 - 1, x + 1, wallY1, wallZ1, COLORS.red);
  }
  for (let z = wallZ0 + 3; z < wallZ1 - 1; z += 3) {
    fill(boxes, wallX0, wallY0, z, wallX0 + 1, wallY1, z + 1, COLORS.red);
    fill(boxes, wallX1 - 1, wallY0, z, wallX1, wallY1, z + 1, COLORS.red);
  }

  // back wall (north) - solid
  fill(boxes, wallX0, wallY0, wallZ1 - 1, wallX1, wallY1, wallZ1, COLORS.red);
  // side walls (between columns) - solid red bands
  for (let x = wallX0 + 1; x < wallX1 - 1; x++) {
    if ((x - wallX0) % 4 === 0) continue;
    fill(boxes, x, wallY0 + 1, wallZ0, x + 1, wallY1 - 1, wallZ0 + 1, COLORS.red);
    fill(boxes, x, wallY0 + 1, wallZ1 - 1, x + 1, wallY1 - 1, wallZ1, COLORS.red);
  }
  for (let z = wallZ0 + 1; z < wallZ1 - 1; z++) {
    if ((z - wallZ0) % 3 === 0) continue;
    fill(boxes, wallX0, wallY0 + 1, z, wallX0 + 1, wallY1 - 1, z + 1, COLORS.red);
    fill(boxes, wallX1 - 1, wallY0 + 1, z, wallX1, wallY1 - 1, z + 1, COLORS.red);
  }

  // front (south) wall - 3 doors with red frames
  // Door 1: center
  const doorW = 2;
  const d1x0 = cx - doorW / 2 | 0;
  fill(boxes, d1x0, wallY0, wallZ0, d1x0 + doorW, wallY0 + 3, wallZ0 + 1, COLORS.wood);
  // door frames (red)
  fill(boxes, d1x0, wallY0 + 3, wallZ0, d1x0 + doorW, wallY1, wallZ0 + 1, COLORS.red);
  // side doors
  for (const off of [-4, 4]) {
    const dx0 = cx + off - 1;
    fill(boxes, dx0, wallY0, wallZ0, dx0 + 2, wallY0 + 3, wallZ0 + 1, COLORS.wood);
    fill(boxes, dx0, wallY0 + 3, wallZ0, dx0 + 2, wallY1, wallZ0 + 1, COLORS.red);
  }

  // ---- Dougong bracket band (斗拱层) - between wall top and lower eaves ----
  const dougongY = wallY1;
  fill(boxes, wallX0 - 1, dougongY, wallZ0 - 1, wallX1 + 1, dougongY + 1, wallZ1 + 1, COLORS.woodLight);

  // ---- Lower eave (下檐) - stepped tile roof ----
  // Step 1 (widest overhang)
  fill(boxes, wallX0 - 2, dougongY + 1, wallZ0 - 2, wallX1 + 2, dougongY + 2, wallZ1 + 2, COLORS.tile);
  // Step 2
  fill(boxes, wallX0 - 1, dougongY + 2, wallZ0 - 1, wallX1 + 1, dougongY + 3, wallZ1 + 1, COLORS.tile);
  // Step 3
  fill(boxes, wallX0, dougongY + 3, wallZ0, wallX1, dougongY + 4, wallZ1, COLORS.tile);

  // ---- Upper eave (上檐) - smaller, on top of lower roof ----
  const upperY = dougongY + 4;
  // Step 1
  fill(boxes, wallX0 - 1, upperY, wallZ0 - 1, wallX1 + 1, upperY + 1, wallZ1 + 1, COLORS.tile);
  // Step 2
  fill(boxes, wallX0, upperY + 1, wallZ0, wallX1, upperY + 2, wallZ1, COLORS.tile);

  // ---- Ridge (正脊) along the centerline (z axis) ----
  const ridgeY = upperY + 2;
  fill(boxes, wallX0 + 1, ridgeY, wallZ0 + 2, wallX1 - 1, ridgeY + 1, wallZ1 - 2, COLORS.tileRidge);
  // ridge ornament - gold ends
  fill(boxes, wallX0, ridgeY + 1, wallZ0 + 2, wallX0 + 1, ridgeY + 2, wallZ1 - 2, COLORS.gold);
  fill(boxes, wallX1 - 1, ridgeY + 1, wallZ0 + 2, wallX1, ridgeY + 2, wallZ1 - 2, COLORS.gold);

  // corner upturned eaves (small wing ornaments)
  for (const [ex, ez] of [
    [wallX0 - 2, wallZ0 - 2],
    [wallX1 + 1, wallZ0 - 2],
    [wallX0 - 2, wallZ1 + 1],
    [wallX1 + 1, wallZ1 + 1],
  ]) {
    fill(boxes, ex, dougongY + 2, ez, ex + 1, dougongY + 3, ez + 1, COLORS.tileRidge);
  }

  // hanging lanterns under front eave (3)
  for (const off of [-3, 0, 3]) {
    const lx = cx + off;
    fill(boxes, lx, dougongY + 1, wallZ0 - 1, lx + 1, dougongY + 2, wallZ0, COLORS.gold);
    fill(boxes, lx, dougongY, wallZ0, lx + 1, dougongY + 1, wallZ0 + 1, COLORS.lantern);
  }

  return {
    name: 'mainHall',
    bbox: { x0, z0, x1: x0 + baseW, z1: z0 + baseD },
  };
}