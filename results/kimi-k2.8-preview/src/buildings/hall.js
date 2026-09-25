import { PAL } from '../palette.js';
import { wallX, wallZ, steps, lantern, roof } from '../parts.js';

// 由柱位推导面阔开间，居中一间开门，其余开窗
function bayOpenings(xs, cx, y0, withDoor) {
  const ops = [];
  for (let i = 0; i < xs.length - 1; i++) {
    const m = (xs[i] + xs[i + 1]) / 2;
    if (withDoor && Math.abs(m) < 0.01) {
      ops.push({ x: cx + m - 1, w: 2, y: y0, h: 3, color: PAL.door });
    } else {
      ops.push({ x: cx + m - 1, w: 2, y: y0 + 1, h: 2, color: PAL.window });
    }
  }
  return ops;
}

function paintPillars(W, xs, cx, y0, h, zf, zb) {
  for (const x of xs) {
    for (let y = y0; y < y0 + h; y++) {
      W.add(cx + x, y, zf, PAL.pillar);
      W.add(cx + x, y, zb, PAL.pillar);
    }
  }
}

// 殿宇：主殿（upper=true 重檐庑殿顶）与配殿共用。
// o: { halfW, halfD, platH, colH, xs, upper, tile, dark, ridgeLen }
export function buildHall(W, cx, cz, o) {
  const { halfW, halfD, platH, colH, xs, upper, tile, dark, ridgeLen } = o;
  const w = halfW * 2 + 1, d = halfD * 2 + 1;
  const zf = cz + halfD - 1, zb = cz - halfD + 1;

  // 台基 + 台阶
  W.box(cx - halfW - 2, 0, cz - halfD - 2, w + 4, platH, d + 4, PAL.whiteStone);
  steps(W, cx, platH, cz + halfD + 2, 7);

  // 立柱
  paintPillars(W, xs, cx, platH, colH, zf, zb);

  // 前后檐墙（门窗开在柱间）
  const ops = bayOpenings(xs, cx, platH, true);
  wallX(W, cx - halfW + 1, platH, zf, w - 2, colH, PAL.redWall, ops);
  wallX(W, cx - halfW + 1, platH, zb, w - 2, colH, PAL.redWall, ops);
  paintPillars(W, xs, cx, platH, colH, zf, zb); // 墙覆盖柱位后重新描柱

  // 山墙
  const sideOps = [
    { z: cz - 3, w: 2, y: platH + 1, h: 2, color: PAL.window },
    { z: cz + 1, w: 2, y: platH + 1, h: 2, color: PAL.window },
  ];
  wallZ(W, zb, platH, cx - halfW + 1, d - 2, colH, PAL.redWall, sideOps);
  wallZ(W, zb, platH, cx + halfW - 1, d - 2, colH, PAL.redWall, sideOps);

  // 额枋 + 斗拱 + 匾额 + 灯笼
  const beamY = platH + colH;
  W.box(cx - halfW + 1, beamY, zb, w - 2, 1, d - 2, PAL.wood);
  for (const x of xs) {
    W.add(cx + x, beamY + 1, zf, PAL.gold);
    W.add(cx + x, beamY + 1, zb, PAL.gold);
  }
  W.box(cx - 1, beamY, zf + 1, 3, 1, 1, PAL.gold);
  for (const x of xs) if (Math.abs(x) > 1) lantern(W, cx + x, beamY - 1, zf + 1);

  if (!upper) {
    roof(W, cx, beamY + 2, cz, w + 2, d + 2, tile, { overhang: 1, ridgeLen, dark });
    return;
  }

  // 重檐：下层檐（截平，上层坐于其上）
  roof(W, cx, beamY + 2, cz, w + 6, d + 6, tile, { overhang: 0, ridgeLen, dark, layers: 2 });

  // 上层明间
  const yU = beamY + 4;
  const opsU = bayOpenings(xs, cx, yU, false);
  wallX(W, cx - halfW + 1, yU, zf, w - 2, 2, PAL.redWall, opsU);
  wallX(W, cx - halfW + 1, yU, zb, w - 2, 2, PAL.redWall, opsU);
  wallZ(W, zb, yU, cx - halfW + 1, d - 2, 2, PAL.redWall,
    [{ z: cz - 1, w: 2, y: yU, h: 2, color: PAL.window }]);
  wallZ(W, zb, yU, cx + halfW - 1, d - 2, 2, PAL.redWall,
    [{ z: cz - 1, w: 2, y: yU, h: 2, color: PAL.window }]);
  for (const x of xs) {
    W.add(cx + x, yU, zf, PAL.pillar); W.add(cx + x, yU + 1, zf, PAL.pillar);
    W.add(cx + x, yU, zb, PAL.pillar); W.add(cx + x, yU + 1, zb, PAL.pillar);
  }
  for (const xx of [cx - halfW + 1, cx + halfW - 1]) {
    W.add(xx, yU, zf, PAL.pillar); W.add(xx, yU + 1, zf, PAL.pillar);
    W.add(xx, yU, zb, PAL.pillar); W.add(xx, yU + 1, zb, PAL.pillar);
  }

  const beam2 = yU + 2;
  W.box(cx - halfW + 1, beam2, zb, w - 2, 1, d - 2, PAL.wood);
  for (const x of xs) {
    W.add(cx + x, beam2 + 1, zf, PAL.gold);
    W.add(cx + x, beam2 + 1, zb, PAL.gold);
  }
  W.box(cx - 1, beam2, zf + 1, 3, 1, 1, PAL.gold);
  roof(W, cx, beam2 + 2, cz, w, d, tile, { overhang: 2, ridgeLen, dark });
}
