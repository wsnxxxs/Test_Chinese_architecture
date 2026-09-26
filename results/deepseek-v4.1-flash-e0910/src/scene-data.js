/**
 * Scene data assembly: runs the layout, groups voxels by palette key and computes the
 * statistics that both the renderer and the verification script consume.
 */
import { buildSite, SITE, ROADS, WALL } from './layout.js';
import { PALETTE_KEYS } from './palette.js';
import { fitCamera } from './camera-fit.js';

export function createSceneData() {
  const t0 = Date.now();
  const { builder, buildings, roads, stats } = buildSite();
  const groups = builder.byKey();
  const bounds = builder.bounds();

  // Framing box: ignore the flat ground plane so the camera frames the architecture,
  // not the margin of grass around it.
  let aMinX = Infinity, aMaxX = -Infinity, aMinY = Infinity, aMaxY = -Infinity, aMinZ = Infinity, aMaxZ = -Infinity;
  for (const c of builder.cells.values()) {
    if (c.y < 2) continue;
    if (c.x < aMinX) aMinX = c.x; if (c.x > aMaxX) aMaxX = c.x;
    if (c.y < aMinY) aMinY = c.y; if (c.y > aMaxY) aMaxY = c.y;
    if (c.z < aMinZ) aMinZ = c.z; if (c.z > aMaxZ) aMaxZ = c.z;
  }
  const archBounds = { xMin: aMinX, xMax: aMaxX, yMin: aMinY, yMax: aMaxY, zMin: aMinZ, zMax: aMaxZ };

  const symmetry = builder.symmetryReport();
  const colorSymmetry = builder.colorSymmetryReport();

  const voxelCount = builder.size;
  const keyCounts = {};
  for (const [k, g] of groups) keyCounts[k] = g.count;

  const buildingStats = buildings.map((b) => ({
    id: b.id, name: b.name, category: b.category, roof: b.roof,
    cx: b.cx, cz: b.cz, height: b.height, footprint: b.footprint,
  }));

  const data = {
    builder,
    groups,
    bounds,
    archBounds,
    buildings,
    buildingStats,
    roads,
    site: SITE,
    wall: WALL,
    roadRects: ROADS,
    voxelCount,
    keyCounts,
    /** one InstancedMesh per palette key => one draw call per key */
    drawCalls: groups.size,
    triangles: voxelCount * 12,
    paletteKeysUsed: [...groups.keys()].sort(),
    unusedPaletteKeys: PALETTE_KEYS.filter((k) => !groups.has(k)),
    symmetry,
    colorSymmetry,
    buildMs: Date.now() - t0,
    tufts: stats.tufts,
  };

  // Opening camera: frames the whole complex from the south-east. The elevation is kept
  // low (~15 deg) so the horizon and a band of sky stay in frame behind the complex.
  data.camera = fitCamera({
    bounds: archBounds,
    fovDeg: 45,
    aspect: 16 / 9,
    direction: [0.95, 0.36, 1.0],
    margin: 1.02,
  });
  data.cameraAspect = 16 / 9;

  return data;
}
