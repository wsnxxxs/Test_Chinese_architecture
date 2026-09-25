// Global layout constants (grid coordinates).  The temple axis is the voxel column x = XC and runs
// north (small z) -> south (large z). Buildings face south (+z), like real 坐北朝南 compounds.

export const SX = 256;
export const SY = 112;
export const SZ = 400;
export const XC = 128; // axis voxel column

// world = grid + ORIGIN (x is shifted half a voxel so the axis column is centred on x = 0)
export const ORIGIN = { x: -(XC + 0.5), y: 0, z: -190 };

export const toWorld = (gx, gy, gz) => [gx + ORIGIN.x, gy + ORIGIN.y, gz + ORIGIN.z];
