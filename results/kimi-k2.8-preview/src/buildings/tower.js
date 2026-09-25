import { PAL } from '../palette.js';
import { wallX, wallZ, steps, roof } from '../parts.js';

// 钟楼 / 鼓楼：方形平坐，四角立柱，攒尖顶。
// bell=true 时二层正中悬挂铜钟。
export function buildTower(W, cx, cz, opt) {
  const { tile, dark, bell } = opt;
  const halfW = 4, platH = 1, colH = 5;
  const zf = cz + halfW, zb = cz - halfW;

  W.box(cx - 5, 0, cz - 5, 11, platH, 11, PAL.whiteStone);
  steps(W, cx, platH, cz + 5, 3);

  // 四角柱 + 四边中柱
  for (const x of [-halfW, 0, halfW]) {
    for (const z of [zb, zf]) {
      if (Math.abs(x) === halfW || z === zf) {
        W.box(cx + x, platH, z, 1, colH, 1, PAL.pillar);
      }
    }
  }
  for (const z of [zb + 3]) {
    W.box(cx - halfW, platH, z, 1, colH, 1, PAL.pillar);
    W.box(cx + halfW, platH, z, 1, colH, 1, PAL.pillar);
  }

  // 底层墙：前后门洞 + 窗，侧面窗
  const opsF = [
    { x: cx - 1, w: 3, y: platH, h: 3, color: PAL.door },
    { x: cx - 3, w: 2, y: platH + 1, h: 2, color: PAL.window },
    { x: cx + 2, w: 2, y: platH + 1, h: 2, color: PAL.window },
  ];
  wallX(W, cx - 4, platH, zf, 9, colH, PAL.redWall, opsF);
  wallX(W, cx - 4, platH, zb, 9, colH, PAL.redWall, opsF);
  const opsS = [{ z: cz - 1, w: 2, y: platH + 1, h: 2, color: PAL.window }];
  wallZ(W, zb, platH, cx - halfW, 9, colH, PAL.redWall, opsS);
  wallZ(W, zb, platH, cx + halfW, 9, colH, PAL.redWall, opsS);

  // 平坐层：环梁 + 腰檐
  const beamY = platH + colH; // 6
  W.box(cx - 4, beamY, zb, 9, 1, 1, PAL.wood);
  W.box(cx - 4, beamY, zf, 9, 1, 1, PAL.wood);
  W.box(cx - 4, beamY, zb + 1, 1, 1, 7, PAL.wood);
  W.box(cx + 4, beamY, zb + 1, 1, 1, 7, PAL.wood);
  roof(W, cx, beamY + 1, cz, 11, 11, tile, { overhang: 1, ridge: false, dark, layers: 1 });

  // 上层：四面开窗的阁身
  const yU = beamY + 2; // 8
  const opsU = [{ x: cx - 1, w: 2, y: yU, h: 2, color: PAL.window }];
  wallX(W, cx - 4, yU, zf, 9, 2, PAL.redWall, opsU);
  wallX(W, cx - 4, yU, zb, 9, 2, PAL.redWall, opsU);
  const opsUZ = [{ z: cz - 1, w: 2, y: yU, h: 2, color: PAL.window }];
  wallZ(W, zb, yU, cx - halfW, 9, 2, PAL.redWall, opsUZ);
  wallZ(W, zb, yU, cx + halfW, 9, 2, PAL.redWall, opsUZ);
  for (const x of [-halfW, halfW]) for (const z of [zb, zf]) {
    W.add(cx + x, yU, z, PAL.pillar);
    W.add(cx + x, yU + 1, z, PAL.pillar);
  }

  // 顶层梁架 + 斗拱 + 攒尖顶
  const beam2 = yU + 2; // 10
  W.box(cx - 4, beam2, zb, 9, 1, 1, PAL.wood);
  W.box(cx - 4, beam2, zf, 9, 1, 1, PAL.wood);
  W.box(cx - 4, beam2, zb + 1, 1, 1, 7, PAL.wood);
  W.box(cx + 4, beam2, zb + 1, 1, 1, 7, PAL.wood);
  if (bell) {
    W.box(cx, beam2, cz - 1, 1, 1, 3, PAL.wood);
    W.box(cx, yU, cz, 1, 2, 1, PAL.bronze); // 铜钟
  }
  for (const x of [-halfW, -2, 2, halfW]) {
    W.add(cx + x, beam2 + 1, zf, PAL.gold);
    W.add(cx + x, beam2 + 1, zb, PAL.gold);
  }
  roof(W, cx, beam2 + 2, cz, 9, 9, tile, { overhang: 2, ridge: false, dark });
}
