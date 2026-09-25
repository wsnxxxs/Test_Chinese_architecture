import { PAL } from './palette.js';

// 体素树：干 + 团状树冠（顶层去角）
export function buildTree(W, x, z, tall = false) {
  const h = tall ? 5 : 3 + ((x * 7 + z * 13) & 1);
  W.box(x, 0, z, 1, h, 1, PAL.trunk);
  const ly = h - 1;
  for (let dy = 0; dy <= 2; dy++) {
    for (let dx = -2; dx <= 2; dx++) {
      for (let dz = -2; dz <= 2; dz++) {
        if (dy === 2 && Math.abs(dx) === 2 && Math.abs(dz) === 2) continue;
        if (dy === 2 && Math.abs(dx) + Math.abs(dz) > 3) continue;
        const c = ((dx * 3 + dz * 5 + dy * 7) & 3) === 0 ? PAL.leafDark : PAL.leaf;
        W.add(x + dx, ly + dy, z + dz, c);
      }
    }
  }
  W.add(x, ly + 3, z, PAL.leaf);
}

// 石狮（写意）：座 + 身 + 头 + 鬃
export function buildLion(W, cx, cz) {
  W.box(cx, 0, cz, 1, 1, 1, PAL.whiteStone);   // 座
  W.add(cx, 1, cz, PAL.lion);                  // 身
  W.add(cx, 2, cz, PAL.lion);                  // 头
  W.add(cx, 2, cz - 1, PAL.lion);              // 鬃
  W.add(cx, 1, cz - 1, PAL.lion);
  W.add(cx, 3, cz, PAL.lion);                  // 耳/顶
}
