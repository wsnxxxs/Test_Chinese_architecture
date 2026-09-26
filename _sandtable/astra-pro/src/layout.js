/**
 * The master plan is data, not renderer code. +Z is south / the entrance.
 * Pair rotations are exact reflections across x = 0.
 * Width/depth are local body dimensions; roof extents include overhangs.
 */
export const BUILDINGS = Object.freeze([
  { id: 'main', name: '云阙大殿', kind: 'main', x: 0, z: -18, w: 25, d: 15, rotation: 0, height: 17.4,
    roofW: 31, roofD: 21, number: '01', title: '重檐叠翠 · 中轴主殿',
    description: '双重屋檐层层收分，金色瓦垄在晨光中起伏。朱柱、斗拱与白石须弥座，构成院落最庄重的一笔。' },
  { id: 'rear', name: '藏经阁', kind: 'hall', x: 0, z: -42, w: 17, d: 8, rotation: 0, height: 10,
    roofW: 21, roofD: 12, number: '02', title: '庭深有静 · 后殿',
    description: '藏于主殿之后的小院，青瓦与木格窗相映。两侧石径绕过主殿，通向这处安静的院落。' },
  { id: 'west-hall', name: '文华殿', kind: 'side', x: -29, z: -8, w: 19, d: 9, rotation: Math.PI / 2, height: 9.5,
    roofW: 23, roofD: 13, number: '03', title: '西庑听松 · 西配殿',
    description: '配殿面向中庭，与东侧相向而立。重复的柱列与窗棂形成细密节奏，也为中庭留下充足的留白。' },
  { id: 'east-hall', name: '崇礼殿', kind: 'side', x: 29, z: -8, w: 19, d: 9, rotation: -Math.PI / 2, height: 9.5,
    roofW: 23, roofD: 13, number: '04', title: '东庑问礼 · 东配殿',
    description: '对称的殿宇并不争夺视线：较低的檐口、沉静的青绿屋面，共同衬托主殿的开阔与高大。' },
  { id: 'gate', name: '云阙山门', kind: 'gate', x: 0, z: 43, w: 18, d: 8, rotation: 0, height: 9.9,
    roofW: 23, roofD: 13, number: '05', title: '入境之门 · 山门',
    description: '沿白石阶拾级而上，穿过通透的中央门洞。双狮守门，红灯垂檐，寺院的中轴由此展开。' },
  { id: 'bell', name: '钟楼', kind: 'bell', x: -31, z: 13, w: 9, d: 9, rotation: 0, height: 12.5,
    roofW: 13, roofD: 13, number: '06', title: '晨钟 · 西楼',
    description: '双层楼阁内悬着体素铜钟，开敞的上层以栏杆和朱柱围合；青瓦屋面向四角轻轻扬起。' },
  { id: 'drum', name: '鼓楼', kind: 'drum', x: 31, z: 13, w: 9, d: 9, rotation: 0, height: 12.5,
    roofW: 13, roofD: 13, number: '07', title: '暮鼓 · 东楼',
    description: '与钟楼隔庭相望，木架上的鼓身以层叠方块塑成。晨钟暮鼓，把寺院的时间写进建筑。' },
  { id: 'west-pagoda', name: '栖云塔', kind: 'pagoda', x: -36, z: -35, w: 7.2, d: 7.2, rotation: 0, height: 25.3,
    roofW: 11.8, roofD: 11.8, number: '08', title: '层檐入云 · 西塔',
    description: '五层塔身逐层收分，每一层的攒尖式檐口都由离散瓦块构成。小小金色塔刹，点亮天际线。' },
  { id: 'east-pagoda', name: '照月塔', kind: 'pagoda', x: 36, z: -35, w: 7.2, d: 7.2, rotation: 0, height: 25.3,
    roofW: 11.8, roofD: 11.8, number: '09', title: '双塔相望 · 东塔',
    description: '东塔与西塔严格镜像，守住后院两角。层层飞檐与中央主殿形成高低有序的天际轮廓。' },
  { id: 'west-pavilion', name: '听雨亭', kind: 'pavilion', x: -33, z: 32, w: 5.8, d: 5.8, rotation: 0, height: 7.8,
    roofW: 9, roofD: 9, number: '10', title: '临水听雨 · 西亭',
    description: '小亭立于方池之上，曲折的木桥将它与石径相接。荷叶、碎光和倒映般的青绿色水面相伴。' },
  { id: 'east-pavilion', name: '观澜亭', kind: 'pavilion', x: 33, z: 32, w: 5.8, d: 5.8, rotation: 0, height: 7.8,
    roofW: 9, roofD: 9, number: '11', title: '清风观澜 · 东亭',
    description: '与西亭对景的水榭，以四柱托起攒尖顶。没有围墙遮挡，院落、池水与远处飞檐尽收眼底。' },
]);

/** A connected circulation graph; endpoints include bridge and stair landings. */
export const WALK_NODES = {
  entry: [0, 57], gate: [0, 43], front: [0, 32], court: [0, 21], heart: [0, 4], main: [0, -6],
  westFront: [-20, 32], eastFront: [20, 32], westCourt: [-20, 21], eastCourt: [20, 21],
  westHeart: [-20, 4], eastHeart: [20, 4], westHall: [-20, -8], eastHall: [20, -8],
  westTower: [-20, -26], eastTower: [20, -26], westRear: [-20, -34], eastRear: [20, -34],
  back: [0, -34], rear: [0, -35.5], bell: [-31, 21], drum: [31, 21],
  westPagoda: [-36, -26], eastPagoda: [36, -26], westPavilion: [-33, 32], eastPavilion: [33, 32],
};
export const WALK_EDGES = [
  ['entry','gate'], ['gate','front'], ['front','court'], ['court','heart'], ['heart','main'],
  ['front','westFront'], ['front','eastFront'], ['court','westCourt'], ['court','eastCourt'],
  ['heart','westHeart'], ['heart','eastHeart'],
  ['westFront','westCourt'], ['westCourt','westHeart'], ['westHeart','westHall'], ['westHall','westTower'], ['westTower','westRear'],
  ['eastFront','eastCourt'], ['eastCourt','eastHeart'], ['eastHeart','eastHall'], ['eastHall','eastTower'], ['eastTower','eastRear'],
  ['westRear','back'], ['eastRear','back'], ['back','rear'],
  ['westCourt','bell'], ['eastCourt','drum'], ['westTower','westPagoda'], ['eastTower','eastPagoda'],
  ['westFront','westPavilion'], ['eastFront','eastPavilion'],
];

export function roofFootprint(b) {
  const swapped = Math.abs(Math.sin(b.rotation)) > 0.5;
  return { x: b.x, z: b.z, w: swapped ? b.roofD : b.roofW, d: swapped ? b.roofW : b.roofD };
}
