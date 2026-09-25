/**
 * 中式屋顶体素生成器（全部轴对齐方块）：
 *  - 翘角飞檐：檐口外挑方块 + 角部两级垫块抬起
 *  - 庑殿顶（四坡）： hipRoof
 *  - 歇山顶（下庑殿 + 上殿山）： gableRoof（两侧露出红色山花）
 *  - 攒尖顶： pyramidRoof（顶置宝顶）
 *  - 楼阁塔檐： pagodaEave
 *
 * 屋面坡度：层高 1、每侧每层收 2 → 坡度约 1:2（≈26°~34°，接近传统举折）。
 */

/** 飞檐翘角：w/d 为底层檐口尺寸，inset 为屋顶每层收分 */
export function upturn(B, mat, x, z, y, w, d, inset = 2) {
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      // 檐角外挑
      B.box(mat, x + sx * (w / 2 + 0.5), y, z + sz * (d / 2 + 0.5), 1, 1, 1);
      // 与上一层衔接的垫块
      B.box(mat, x + sx * (w / 2 - inset / 2), y + 1, z + sz * (d / 2 - inset / 2), inset, 1, inset);
      // 翘起的角部
      B.box(mat, x + sx * (w / 2 + 0.5), y + 1, z + sz * (d / 2 + 0.5), 1, 1, 1);
    }
  }
}

function ridgeCap(B, ridgeMat, x, z, y, topW, topD) {
  B.box(ridgeMat, x, y, z, topW + 1, 0.9, topD + 0.8); // 正脊
  const hy = y + 0.9;
  const hx = (topW + 1) / 2 - 0.6;
  // 鸱吻（脊端鎏金饰件）
  B.box('gold', x - hx, hy, z, 1.2, 1.7, 1.4);
  B.box('gold', x + hx, hy, z, 1.2, 1.7, 1.4);
  B.box(ridgeMat, x - hx, hy + 1.7, z, 0.9, 0.8, 1.1);
  B.box(ridgeMat, x + hx, hy + 1.7, z, 0.9, 0.8, 1.1);
  return hy + 2.5;
}

/**
 * 庑殿顶（四坡）。
 * opts: { mat, ridgeMat, y, w, d, x?, z?, layers?, inset?, upturn?, cap? }
 *  - 省略 layers：自动收至屋脊（inset=2）
 *  - 只给 layers：按 (d-4)/(2*(layers-1)) 均匀收分（用于重檐上层浅坡）
 *  - layers+inset 同时给：用于裙檐等局部（cap:false）
 * 返回屋顶最高点 y。
 */
export function hipRoof(B, opts) {
  const { mat, ridgeMat = 'roofYD', x = 0, z = 0, y, w, d } = opts;
  let inset, L;
  if (opts.inset != null && opts.layers != null) {
    inset = opts.inset; L = opts.layers;
  } else if (opts.layers != null) {
    inset = (d - 4) / (2 * Math.max(1, opts.layers - 1)); L = opts.layers;
  } else {
    inset = 2; L = Math.floor((d - 4) / 4) + 1;
  }
  let topW = w, topD = d, topY = y, n = 0;
  for (let i = 0; i < L; i++) {
    const wi = w - 2 * inset * i, di = d - 2 * inset * i;
    if (wi < 2 || di < 2) break;
    B.box(mat, x, y + i, z, wi, 1, di);
    topW = wi; topD = di; topY = y + i + 1; n++;
  }
  if (opts.upturn !== false) upturn(B, mat, x, z, y, w, d, inset);
  if (opts.cap !== false && n > 0) {
    topY = ridgeCap(B, opts.ridgeMat || ridgeMat, x, z, topY, topW, topD);
  }
  return topY;
}

/**
 * 歇山顶：下部四坡 + 上部两坡（两侧露出红色山花板）。
 * opts: { mat, ridgeMat, panel, y, w, d, x?, z?, inset? }
 */
export function gableRoof(B, opts) {
  const { mat, ridgeMat = 'roofGrD', panel = 'redWall', x = 0, z = 0, y, w, d, inset = 2 } = opts;
  const L = Math.floor((d - 4) / (2 * inset)) + 1;
  const hipL = Math.max(2, Math.round(L * 0.45));
  let wT = w, dT = d, cur = y;
  for (let i = 0; i < hipL; i++) {
    const wi = w - 2 * inset * i, di = d - 2 * inset * i;
    if (wi < 4 || di < 4) break;
    B.box(mat, x, cur, z, wi, 1, di);
    wT = wi; dT = di; cur += 1;
  }
  if (opts.upturn !== false) upturn(B, mat, x, z, y, w, d, inset);
  // 上部：宽度不变、进深收缩 → 形成殿山
  let topW = wT - 2, topD = dT, topY = cur, n = 0;
  for (let j = 0; ; j++) {
    const dj = dT - 2 * inset * j;
    if (dj < 4) break;
    B.box(mat, x, cur + j, z, wT - 2, 1, dj);
    B.box(panel, x - (wT / 2 - 0.5), cur + j, z, 1, 1, dj);
    B.box(panel, x + (wT / 2 - 0.5), cur + j, z, 1, 1, dj);
    topW = wT - 2; topD = dj; topY = cur + j + 1; n++;
  }
  if (opts.cap !== false && n > 0) {
    topY = ridgeCap(B, ridgeMat, x, z, topY, topW, topD);
  }
  return topY;
}

/**
 * 攒尖顶：方形逐层收缩至顶。
 * opts: { mat, y, w, x?, z?, inset?, minSize?, upturn? }
 */
export function pyramidRoof(B, opts) {
  const { mat, x = 0, z = 0, y, w, inset = 2, minSize = 2 } = opts;
  if (opts.upturn !== false) upturn(B, mat, x, z, y, w, w, inset);
  let topY = y, i = 0;
  for (; ; i++) {
    const wi = w - 2 * inset * i;
    if (wi < minSize) break;
    B.box(mat, x, y + i, z, wi, 1, wi);
    topY = y + i + 1;
  }
  return topY;
}

/** 楼阁式塔檐：大挑檐 + 上层檐（双层方檐 + 翘角），返回上一层塔身底面 */
export function pagodaEave(B, opts) {
  const { mat, x = 0, z = 0, y, body } = opts;
  const s1 = body + 2.6, s2 = body + 1.2;
  B.box(mat, x, y, z, s1, 1, s1);
  B.box(mat, x, y + 1, z, s2, 1, s2);
  upturn(B, mat, x, z, y, s1, s1, 1);
  return y + 2;
}
