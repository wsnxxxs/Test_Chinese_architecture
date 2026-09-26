// 小镇总体规划：把建筑按道路网格布置到沙盘上
import * as B from './buildings.js';

export function buildTown(scene, ctx) {
  const R = ctx.rnd;
  const pick = (a) => a[(R() * a.length) | 0];
  const wall = () => pick(B.WALLS), roof = () => pick(B.ROOFS);
  const put = (g, x, z, f = 's', tag = '') => B.place(scene, g, x, z, f, tag);
  const cot = (x, z, f, w = 1.7, d = 1.4, o = {}) => put(B.cottage(ctx, { w, d, wall: wall(), roofC: roof(), ridgeX: R() > 0.35, ...o }), x, z, f);
  const twn = (x, z, f, w = 1.5, d = 1.4, o = {}) => put(B.townhouse(ctx, { w, d, wall: wall(), roofC: roof(), ...o }), x, z, f);

  /* ---- 车站片区 ---- */
  put(B.station(ctx), -5.0, 5.55, 's', 'nogarden');
  put(B.waterTower(), -10.9, 5.7, 's');
  put(B.warehouse(ctx, { w: 1.8, d: 1.3, wall: 0xc9a27d }), -0.4, 5.9, 's');

  /* ---- 镇中心大街北侧 (面向大街) ---- */
  cot(-12.2, -0.95, 's', 1.8, 1.5);
  twn(-10.0, -0.95, 's', 1.5, 1.5);
  put(B.apartment(ctx, { w: 1.8, d: 1.6 }), -7.9, -1.0, 's');
  put(B.shop(ctx, { w: 1.4, d: 1.4, name: '面包房', wall: 0xf0dcb8, roofC: 0xb8543a }), -4.2, -0.95, 's');
  put(B.shop(ctx, { w: 1.3, d: 1.4, name: '花店', wall: 0xd9e3c4, roofC: 0x59766a, awn: ['#d2647f', '#f4ead2'], signBg: '#6b3a55' }), -2.75, -0.95, 's');
  put(B.townHall(ctx), -0.3, -1.3, 's');

  /* ---- 后街（北侧第二排） ---- */
  cot(-12.2, -4.25, 's', 1.8);
  cot(-10.0, -4.25, 's', 1.6);
  cot(-7.6, -4.3, 's', 1.7);
  twn(-3.4, -4.25, 's', 1.4);
  cot(-1.2, -4.3, 's', 1.8);
  put(B.church(ctx), -2.2, -6.9, 's');

  /* ---- 镇中心大街南侧 (面向大街，朝北) ---- */
  cot(-12.2, 2.45, 'n', 1.8);
  cot(-10.0, 2.45, 'n', 1.6);
  put(B.cafe(ctx), -7.7, 2.45, 'n');
  put(B.shop(ctx, { w: 1.4, d: 1.4, name: '书店', wall: 0xa9c1d6, roofC: 0x5d6672, awn: ['#3f5f9a', '#f4ead2'], signBg: '#2e3f63' }), -4.2, 2.45, 'n');
  put(B.shop(ctx, { w: 1.3, d: 1.4, name: '杂货铺', wall: 0xecd08a, roofC: 0x7a4a34, awn: ['#3f8f5a', '#f4ead2'], signBg: '#4a3a24' }), -2.7, 2.45, 'n');
  cot(-0.6, 2.45, 'n', 1.4);
  twn(3.4, 2.45, 'n', 1.5);
  cot(5.5, 2.4, 'n', 1.6);
  cot(3.3, 5.3, 'n', 1.5, 1.3);
  cot(5.3, 5.3, 'n', 1.4, 1.3);

  /* ---- 河东农庄 ---- */
  cot(13.0, -0.95, 's', 1.8, 1.5, { wall: 0xf2eee4, roofC: 0x8e3b32 });
  put(B.windmill(ctx), 11.9, -3.0, 's');
  put(B.barn(ctx), 13.55, 4.2, "n");

  /* ---- 铁路南侧外环路两侧 ---- */
  cot(-12.4, 10.95, 's', 1.8);
  twn(-10.2, 10.95, 's', 1.4);
  cot(-8.1, 10.95, 's', 1.7);
  put(B.warehouse(ctx, { w: 2.0, d: 1.3, wall: 0xb9c1a6, roofC: 0x6b7480 }), -4.6, 10.95, 's');
  cot(-0.9, 10.95, 's', 1.6);
  cot(3.3, 10.9, 's', 1.5);
  cot(11.0, 10.9, 's', 1.6);
  cot(13.4, 10.95, 's', 1.8);
  cot(-12.4, 13.6, 'n', 1.8, 1.3);
  twn(-10.0, 13.6, 'n', 1.4, 1.3);
  put(B.shop(ctx, { w: 1.5, d: 1.3, name: '邮局', wall: 0xe9d9b4, roofC: 0x8e3b32, awn: ['#c43c32', '#f4ead2'], signBg: '#8a2f28' }), -7.7, 13.6, 'n');
  cot(0.5, 13.6, 'n', 1.6, 1.3);
  cot(3.2, 13.6, 'n', 1.6, 1.3);
  cot(11.0, 13.6, 'n', 1.6, 1.3);
  twn(13.1, 13.6, 'n', 1.4, 1.3);
  cot(15.4, 13.6, 'n', 1.6, 1.3);

  /* ---- 北侧田野边的农舍与仓棚 ---- */
  cot(-1.2, -12.4, 's', 1.7);
  cot(1.6, -12.6, 's', 1.6);
  put(B.warehouse(ctx, { w: 1.8, d: 1.3, wall: 0xc9a27d }), 5.0, -12.6, 's');

  /* ---- 东西外侧 ---- */
  cot(-18.0, -3.0, 'e', 1.6);
  cot(-18.0, 3.6, 'e', 1.6);
  cot(18.1, -1.4, 'w', 1.6);
  cot(18.1, 4.4, 'w', 1.6);
}
