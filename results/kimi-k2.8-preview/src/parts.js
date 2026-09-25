import { PAL } from './palette.js';

// 沿 X 方向的墙（厚度 1）。openings: [{x, w, y, h, color}]
export function wallX(W, x0, y0, z, w, h, color, openings = []) {
  for (let i = 0; i < w; i++) {
    for (let j = 0; j < h; j++) {
      const gx = x0 + i, gy = y0 + j;
      let c = color;
      for (const o of openings) {
        if (gx >= o.x && gx < o.x + o.w && gy >= o.y && gy < o.y + o.h) { c = o.color; break; }
      }
      W.add(gx, gy, z, c);
    }
  }
}

// 沿 Z 方向的墙（厚度 1）。openings: [{z, w, y, h, color}]
export function wallZ(W, z0, y0, x, d, h, color, openings = []) {
  for (let k = 0; k < d; k++) {
    for (let j = 0; j < h; j++) {
      const gz = z0 + k, gy = y0 + j;
      let c = color;
      for (const o of openings) {
        if (gz >= o.z && gz < o.z + o.w && gy >= o.y && gy < o.y + o.h) { c = o.color; break; }
      }
      W.add(x, gy, gz, c);
    }
  }
}

// 台阶：从 zEdge 起向 +z 逐层下降，顶层高 yTop
export function steps(W, cx, yTop, zEdge, width, color = PAL.whiteStone) {
  const x0 = cx - Math.floor(width / 2);
  for (let s = 0; s < yTop; s++) {
    W.box(x0, 0, zEdge + s, width, yTop - s, 1, color);
  }
}

// 灯笼：顶部金盖挂于梁下，红身 + 金穗
export function lantern(W, x, y, z) {
  W.add(x, y, z, PAL.gold);
  W.add(x, y - 1, z, PAL.lantern);
  W.add(x, y - 2, z, PAL.lantern);
  W.add(x, y - 3, z, PAL.gold);
}

// 中式屋顶。
// ridge=true  → 庑殿/歇山：四坡 + 正脊 + 鸱吻
// ridge=false → 攒尖顶：四坡收尖 + 宝顶
// 檐口外挑 overhang，四角抬高一级模拟飞檐翘角；瓦面用深色点缀出纹理。
export function roof(W, cx, y, cz, w, d, tile, opt = {}) {
  const { overhang = 2, ridge = true, ridgeLen = 5, dark = null, layers = Infinity } = opt;
  const ridgeHalf = ridge ? Math.floor(ridgeLen / 2) : 0;
  let halfW = Math.floor(w / 2) + overhang;
  let halfD = Math.floor(d / 2) + overhang;
  let k = 0, lastW = halfW, lastD = halfD;
  while (halfD >= 0 && k < layers) {
    for (let x = -halfW; x <= halfW; x++) {
      for (let z = -halfD; z <= halfD; z++) {
        const c = dark && ((x * 31 + z * 17 + k * 7) & 3) === 0 ? dark : tile;
        W.add(cx + x, y + k, cz + z, c);
      }
    }
    if (k === 0) {
      W.add(cx - halfW, y + 1, cz - halfD, tile);
      W.add(cx + halfW, y + 1, cz - halfD, tile);
      W.add(cx - halfW, y + 1, cz + halfD, tile);
      W.add(cx + halfW, y + 1, cz + halfD, tile);
    }
    k++;
    lastW = halfW; lastD = halfD;
    halfD--;
    if (halfW > ridgeHalf) halfW--;
  }
  const topY = y + k;
  if (ridge) {
    for (let x = -ridgeHalf; x <= ridgeHalf; x++) W.add(cx + x, topY, cz, PAL.ridge);
    W.add(cx - ridgeHalf, topY + 1, cz, PAL.ridge); // 鸱吻
    W.add(cx + ridgeHalf, topY + 1, cz, PAL.ridge);
    if (k >= layers) {
      // 被截平的檐面（重檐下层）四周加剪边
      for (let x = -lastW; x <= lastW; x++) {
        W.add(cx + x, topY, cz - lastD, dark || tile);
        W.add(cx + x, topY, cz + lastD, dark || tile);
      }
      for (let z = -lastD; z <= lastD; z++) {
        W.add(cx - lastW, topY, cz + z, dark || tile);
        W.add(cx + lastW, topY, cz + z, dark || tile);
      }
    }
  } else {
    W.add(cx, topY, cz, PAL.gold); // 宝顶
    W.add(cx, topY + 1, cz, PAL.gold);
  }
  return topY;
}
