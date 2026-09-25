import { PAL } from '../palette.js';
import { wallX, wallZ, steps, lantern, roof } from '../parts.js';

// 山门：面阔五间（柱距 3）、进深一间，前后开门洞成穿堂通道，单檐歇山顶
export function buildGate(W, cx, cz) {
  const halfW = 8, halfD = 4, platH = 1, colH = 4;
  const xs = [-6, -3, 0, 3, 6];
  const zf = cz + halfD - 1, zb = cz - halfD + 1;

  W.box(cx - 10, 0, cz - 6, 21, platH, 13, PAL.whiteStone);
  steps(W, cx, platH, cz + 6, 5);

  for (const x of xs) {
    W.box(cx + x, platH, zf, 1, colH, 1, PAL.pillar);
    W.box(cx + x, platH, zb, 1, colH, 1, PAL.pillar);
  }

  const ops = [
    { x: cx - 1, w: 3, y: platH, h: 3, color: PAL.door },       // 中门洞
    { x: cx - 5, w: 2, y: platH + 1, h: 2, color: PAL.window },
    { x: cx - 2, w: 2, y: platH + 1, h: 2, color: PAL.window },
    { x: cx + 1, w: 2, y: platH + 1, h: 2, color: PAL.window },
    { x: cx + 4, w: 2, y: platH + 1, h: 2, color: PAL.window },
  ];
  wallX(W, cx - 8, platH, zf, 17, colH, PAL.redWall, ops);
  wallX(W, cx - 8, platH, zb, 17, colH, PAL.redWall, ops);
  for (const x of xs) {
    for (let y = platH; y < platH + colH; y++) {
      W.add(cx + x, y, zf, PAL.pillar);
      W.add(cx + x, y, zb, PAL.pillar);
    }
  }

  // 两侧实墙
  wallZ(W, zb, platH, cx - 8, 7, colH, PAL.redWall);
  wallZ(W, zb, platH, cx + 8, 7, colH, PAL.redWall);

  const beamY = platH + colH; // 5
  W.box(cx - 8, beamY, zb, 17, 1, 7, PAL.wood);
  for (const x of xs) {
    W.add(cx + x, beamY + 1, zf, PAL.gold);
    W.add(cx + x, beamY + 1, zb, PAL.gold);
  }
  W.box(cx - 1, beamY - 1, zf + 1, 3, 1, 1, PAL.gold); // 匾额

  for (const x of [-6, -3, 3, 6]) lantern(W, cx + x, beamY - 1, zf + 1);

  roof(W, cx, beamY + 2, cz, 17, 9, PAL.yellowTile, {
    overhang: 2, ridgeLen: 5, dark: PAL.yellowTileDark,
  });
}
