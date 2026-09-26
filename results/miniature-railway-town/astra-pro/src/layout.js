/** Shared planning data. World-space dimensions, not a real-world scale claim. */
export const BUILDINGS = Object.freeze([
  { kind:'house', name:'咖啡馆', x:-6.65,z:-.51,w:1.70,d:1.53,h:1.69,wall:'pink',roof:'roofDark',shop:'CAFÉ' },
  { kind:'house', name:'面包店', x:-4.35,z:-.69,w:1.88,d:1.86,h:2.16,wall:'ochre',roof:'roof',shop:'BAKERY',dormer:true },
  { kind:'house', name:'花店', x:-1.85,z:-.62,w:1.77,d:1.67,h:1.84,wall:'sage',roof:'roofDark',shop:'FLEUR' },
  { kind:'house', name:'书店', x:.40,z:-.62,w:1.66,d:1.70,h:2.03,wall:'cream',roof:'roof',shop:'BOOKS',dormer:true },
  { kind:'house', name:'蓝屋', x:-6.60,z:-4.00,w:1.55,d:1.53,h:1.40,wall:'paleBlue',roof:'roof',dormer:true },
  { kind:'house', name:'后巷小屋', x:-3.91,z:-4.05,w:1.74,d:1.46,h:1.40,wall:'cream',roof:'roofBrown',dormer:true },
  { kind:'clock', name:'钟楼', x:-.70,z:-4.03,w:1.8,d:1.8,h:3.8 },
  { kind:'house', name:'谷仓', x:7.38,z:-3.10,w:2.14,d:1.90,h:1.47,wall:'sage',roof:'roofBrown',dormer:true },
  { kind:'house', name:'河畔小屋', x:7.80,z:3.70,w:1.42,d:1.38,h:1.10,wall:'ochre',roof:'roofDark',rotation:Math.PI,chimney:false },
  { kind:'tower', name:'水塔', x:8.60,z:-.10,w:1.54,d:1.54,h:3.33 },
]);
export const STATION_PLATFORM = Object.freeze({x:-2.05,z:4.325,w:7.65,d:2.45,top:.42});
export const STREETS = Object.freeze([
  {points:[[-8.35,1.6],[-4,1.6],[1.8,1.6],[5.5,1.6],[8.45,1.6]],w:1.06},
  {points:[[-8.35,1.6],[-8.38,.3],[-8.25,-1.55],[-7.9,-2.48],[-4.8,-2.5],[-1.4,-2.50],[2.05,-2.35],[2.20,-.2],[2.20,1.6]],w:.68},
  {points:[[-2.7,1.6],[-2.7,2.5],[-2.7,3.15]],w:1.12},
  {points:[[7.30,1.6],[7.30,.2],[7.30,-2.3]],w:.63},
  {points:[[7.85,1.6],[7.85,2.70],[7.85,3.45]],w:.55},
]);
