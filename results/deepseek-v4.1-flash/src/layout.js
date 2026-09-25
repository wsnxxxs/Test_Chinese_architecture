/**
 * layout.js — 场地总平面（单一数据源）
 *
 * 中轴：x = 0（对称面）；+z 为南（前方，山门一侧），-z 为北（纵深）。
 * 索引 i 的方块占 [i, i+1]，半宽 hw 对应 x ∈ [cx-hw, cx+hw-1]。
 *
 *  z=+67  山门
 *  z=+50  钟楼/鼓楼（x=±44）
 *  z=+20  东西配殿（x=±40）
 *  z=-8   主殿（中轴核心，体量最大）
 *  z=-56  后殿
 *  z=-84  宝塔（中轴收尾，最高）
 */

export const SITE = {
  ground: { x0: -66, x1: 65, z0: -118, z1: 92 },

  /* 围墙：红墙 + 青瓦压顶 */
  wall: { x0: -56, x1: 55, z0: -100, z1: 72, h: 9, t: 2 },

  /* 山门 */
  gate: { cx: 0, cz: 67, hw: 15, hd: 6, platHw: 19, platHd: 10, platH: 3 },

  /* 钟楼 / 鼓楼 */
  tower: { cx: 44, cz: 50, hw: 6, hd: 6 },

  /* 东西配殿 */
  side: { cx: 40, cz: 20, hw: 8, hd: 16, platHw: 11, platHd: 19 },

  /* 主殿 + 月台 */
  main: { cx: 0, cz: -8, hw: 22, hd: 14, platHw: 26, platHd: 17, platH: 5 },
  terrace: { cx: 0, cz: 15, hw: 20, hd: 6, h: 3 },

  /* 后殿 */
  rear: { cx: 0, cz: -56, hw: 17, hd: 9, platHw: 20, platHd: 12, platH: 3 },

  /* 宝塔 */
  pagoda: { cx: 0, cz: -83, hw: 9, hd: 9 },

  /* 中轴御道 */
  road: { hw: 6, zFront: 62, zBack: 22 }
};
