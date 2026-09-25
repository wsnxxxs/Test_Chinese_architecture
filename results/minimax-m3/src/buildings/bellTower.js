/**
 * Bell & Drum Tower (钟鼓楼) - small 2-story pavilions on either side of the gate.
 * Slightly smaller than the pagoda, with a single roof and a bell/drum block visible.
 */
import { COLORS, fill } from '../voxel.js';

export function buildBellTower(boxes, cx, cz) {
  const baseW = 4;
  const x0 = cx - (baseW / 2 | 0);
  const z0 = cz - (baseW / 2 | 0);

  // platform
  fill(boxes, x0, 0, z0, x0 + baseW, 1, z0 + baseW, COLORS.white);

  // lower wall - 2 tall
  const w = baseW;
  const ox = x0;
  const oz = z0;
  fill(boxes, ox, 1, oz, ox + w, 2, oz + w, COLORS.red);
  // openings on all 4 sides
  fill(boxes, cx - 1, 1, oz, cx, 2, oz + 1, COLORS.window);   // south
  fill(boxes, cx, 1, oz, cx + 1, 2, oz + 1, COLORS.window);
  fill(boxes, cx - 1, 1, oz + w - 1, cx, 2, oz + w, COLORS.window);
  fill(boxes, cx, 1, oz + w - 1, cx + 1, 2, oz + w, COLORS.window);
  fill(boxes, ox, 1, cz, ox + 1, 2, cz + 1, COLORS.window);
  fill(boxes, ox + w - 1, 1, cz, ox + w, 2, cz + 1, COLORS.window);

  // upper story with bell/drum block
  fill(boxes, ox, 2, oz, ox + w, 3, oz + w, COLORS.red);
  // bell/drum - dark object hanging inside
  fill(boxes, cx, 2, cz, cx + 1, 3, cz + 1, COLORS.gold);

  // single tile roof with overhang
  const roofW = w + 2;
  const rx0 = cx - (roofW / 2 | 0);
  const rz0 = cz - (roofW / 2 | 0);
  fill(boxes, rx0, 3, rz0, rx0 + roofW, 4, rz0 + roofW, COLORS.tile);
  // corner ornaments
  for (const [ex, ez] of [
    [rx0, rz0], [rx0 + roofW - 1, rz0],
    [rx0, rz0 + roofW - 1], [rx0 + roofW - 1, rz0 + roofW - 1],
  ]) {
    fill(boxes, ex, 4, ez, ex + 1, 5, ez + 1, COLORS.tileRidge);
  }

  // small finial
  fill(boxes, cx, 5, cz, cx + 1, 6, cz + 1, COLORS.gold);

  return {
    name: 'bellTower',
    bbox: { x0, z0, x1: x0 + baseW, z1: z0 + baseW },
  };
}