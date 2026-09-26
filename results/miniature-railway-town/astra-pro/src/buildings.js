import * as THREE from 'three';
import { addMesh, box, cylinder, sphere, beam } from './geometry.js';
import { textTexture } from './materials.js';
import { STATION_PLATFORM } from './layout.js';

export function sign(parent, text, width, height, x, y, z, options = {}) {
  const texture = textTexture(text, options);
  const material = new THREE.MeshStandardMaterial({ map: texture, roughness: .82, emissive: '#ffe9bb', emissiveMap: texture, emissiveIntensity: .025 });
  const mesh = addMesh(parent, new THREE.PlaneGeometry(width,height), material,x,y,z,false);
  return mesh;
}

function windowUnit(parent, m, x, y, z, angle=0, lit=true, w=.37, h=.48) {
  const group=new THREE.Group(); group.position.set(x,y,z); group.rotation.y=angle; parent.add(group);
  box(group,w+.10,h+.10,.065,m.trim);
  box(group,w,h,.077,lit?m.glow:m.window,0,0,.015);
  box(group,.026,h,.085,m.trim,0,0,.023);
  box(group,w,.024,.09,m.trim,0,.02,.025);
  box(group,w+.15,.065,.18,m.stone,0,-h/2-.045,.035);
  return group;
}

/** Gabled houses: plaster volume, timber fascia, individually framed windows. */
export function house(parent, m, { x, z, w=1.8, d=1.7, h=1.8, wall=m.cream, roof=m.roof, rotation=0, shop='', y=.13, dormer=false, chimney=true }) {
  const g=new THREE.Group();g.position.set(x,y,z);g.rotation.y=rotation;parent.add(g);
  box(g,w+.18,.16,d+.18,m.stone,0,.08,0,.025);
  box(g,w,h,d,wall,0,.16+h/2,0,.025);
  box(g,w+.06,.08,d+.06,m.trim,0,.22,0);
  const rise=w*.37;
  const shape=new THREE.Shape([new THREE.Vector2(-w/2,0),new THREE.Vector2(w/2,0),new THREE.Vector2(0,rise)]);
  addMesh(g,new THREE.ExtrudeGeometry(shape,{depth:d,bevelEnabled:false}),wall,0,h+.16,-d/2);
  const half=w/2+.16, slope=Math.hypot(half,rise+.05), angle=Math.atan2(rise+.05,half);
  const left=box(g,slope,.095,d+.35,roof,-half/2,h+.16+rise/2,0,.02);left.rotation.z=angle;
  const right=box(g,slope,.095,d+.35,roof,half/2,h+.16+rise/2,0,.02);right.rotation.z=-angle;
  beam(g,[-half,h+.135,d/2+.18],[0,h+.16+rise+.03,d/2+.18],.075,m.trim);
  beam(g,[0,h+.16+rise+.03,d/2+.18],[half,h+.135,d/2+.18],.075,m.trim);
  const ridge=cylinder(g,.062,.062,d+.40,roof,0,h+.18+rise,0,10);ridge.rotation.x=Math.PI/2;
  // Corner quoins / slender timber details keep the facade legible at a distance.
  for(const side of [-1,1])box(g,.09,h,.075,m.trim,side*(w/2-.045),.16+h/2,d/2+.022);
  const floors=h>1.9?2:1;
  const bottomY=.16+(floors===2?.61:h*.49);
  for(const sx of [-1,1])windowUnit(g,m,sx*w*.29,bottomY,d/2+.045,0,sx>0);
  if(floors===2){
    for(const sx of [-1,1])windowUnit(g,m,sx*w*.29,h-.32,d/2+.045,0,true);
    box(g,w,.065,.06,m.trim,0,h-1.0,d/2+.04);
  }
  for(const side of [-1,1])for(const sz of [-.25,.25])windowUnit(g,m,side*(w/2+.035),bottomY,sz*d,side*Math.PI/2,(side+sz)>0,.34,.45);
  // Rear windows make orbiting the diorama as rewarding as the default view.
  for(const sx of [-1,1])windowUnit(g,m,sx*w*.27,bottomY,-d/2-.04,Math.PI,sx<0,.32,.44);
  box(g,.43,.82,.075,m.timber,0,.57,d/2+.044,.016);
  box(g,.27,.27,.02,m.glow,0,.78,d/2+.091);
  sphere(g,.027,m.brass,.13,.51,d/2+.102);
  box(g,.62,.10,.30,m.stone,0,.12,d/2+.10);
  if(dormer){
    const r=cylinder(g,.15,.15,.07,m.trim,0,h+.38,d/2+.04,24);r.rotation.x=Math.PI/2;
    const b=cylinder(g,.11,.11,.075,m.window,0,h+.38,d/2+.05,24);b.rotation.x=Math.PI/2;
    box(g,.018,.21,.022,m.trim,0,h+.38,d/2+.10);
  }
  if(chimney){
    box(g,.26,.72,.28,m.stoneDark,w*.28,h+rise-.12,-d*.21);
    box(g,.33,.10,.34,m.stone,w*.28,h+rise+.24,-d*.21);
    box(g,.18,.026,.18,m.black,w*.28,h+rise+.297,-d*.21);
  }
  if(shop){
    sign(g,shop,Math.min(w-.25,1.62),.26,0,h*.75,d/2+.104,{font:'600 45px Georgia',background:wall===m.pink?'#77574c':'#344f3f'});
    // Individually alternating fabric strips, scalloped awning edge.
    const awningW=w-.10;
    for(let i=0;i<8;i++){
      const mat=i%2===0?m.trim:(wall===m.pink?m.red:m.trainGreen);
      const a=box(g,awningW/8,.045,.60,mat,-awningW/2+(i+.5)*awningW/8,h*.60,d/2+.26);a.rotation.x=.13;
      box(g,awningW/8,.13,.035,mat,-awningW/2+(i+.5)*awningW/8,h*.60-.08,d/2+.55,.018);
    }
  }
  return g;
}

function bench(parent,m,x,z,rotation=0,y=.14){
  const g=new THREE.Group();g.position.set(x,y,z);g.rotation.y=rotation;parent.add(g);
  for(let i=0;i<3;i++)box(g,.84,.04,.075,m.timber,0,.34,-.12+i*.09,.012);
  for(let i=0;i<2;i++)box(g,.84,.085,.04,m.timber,0,.47+i*.105,-.16,.01);
  for(const s of [-1,1]){box(g,.045,.34,.26,m.bridge,s*.31,.17,-.015);box(g,.044,.29,.045,m.bridge,s*.31,.46,-.18);}
  return g;
}
export { bench };

export function station(parent,m){
  const g=new THREE.Group();parent.add(g);
  box(g,STATION_PLATFORM.w,.28,STATION_PLATFORM.d,m.paving,STATION_PLATFORM.x,.28,STATION_PLATFORM.z,.055);
  box(g,7.72,.10,.14,m.stone,-2.05,.39,5.535,.015);
  // Platform safety line, paving joints, two shallow approach steps.
  box(g,7.3,.012,.065,m.trainCream,-2.05,.426,5.37);
  for(let x=-5.7;x<1.7;x+=.34)box(g,.013,.006,2.24,m.pavingDark,x,.423,4.28);
  box(g,1.8,.14,.48,m.stone,-2.7,.20,2.95,.025);
  box(g,1.8,.07,.38,m.paving,-2.7,.14,2.59,.02);
  const building=house(g,m,{x:-2.8,z:4.02,w:3.25,d:1.43,h:1.13,y:.42,wall:m.cream,roof:m.roof,chimney:true});
  sign(building,'WILLOWBROOK',2.46,.34,0,1.10,.79,{font:'600 47px Georgia',height:128});
  // Front gable station clock, readable hands rather than an opaque disc.
  const clockY=1.80;
  const rim=cylinder(building,.23,.23,.07,m.brass,0,clockY,.78,32);rim.rotation.x=Math.PI/2;
  const face=cylinder(building,.19,.19,.075,m.trim,0,clockY,.79,32);face.rotation.x=Math.PI/2;
  beam(building,[0,clockY,.835],[0,clockY+.13,.835],.017,m.black);
  beam(building,[0,clockY,.836],[.10,clockY-.065,.836],.019,m.black);
  for(let i=0;i<12;i++){const a=i*Math.PI/6;const mark=box(building,.014,.028,.014,m.black,Math.sin(a)*.162,clockY+Math.cos(a)*.162,.836);mark.rotation.z=-a;}
  // Green metal canopy stays entirely on the inside of the track's clearance.
  box(g,7.15,.10,.79,m.roofDark,-2.02,1.92,5.06,.026);
  box(g,7.18,.12,.08,m.trim,-2.02,1.88,5.47);
  for(const x of [-5.40,-.55,1.35]){
    cylinder(g,.034,.045,1.49,m.bridge,x,1.17,5.29,10);
    beam(g,[x,1.40,5.29],[x-.30,1.86,5.29],.033,m.bridge);
    beam(g,[x,1.40,5.29],[x+.30,1.86,5.29],.033,m.bridge);
  }
  bench(g,m,-4.85,4.98,0,.42);bench(g,m,.65,4.98,0,.42);
  // Small station board and luggage.
  for(const x of [.33,1.33])box(g,.042,1.1,.042,m.bridge,x,.98,3.94);
  sign(g,'柳 溪 站',1.35,.37,.83,1.42,3.97,{font:'600 53px sans-serif'});
  box(g,.30,.30,.36,m.timber,-5.08,.58,4.58,.035);box(g,.23,.24,.29,m.ochre,-4.75,.55,4.60,.03);
  return g;
}

export function clockTower(parent,m,x,z){
  const g=house(parent,m,{x,z,w:1.8,d:1.8,h:1.4,wall:m.cream,roof:m.roofDark,chimney:false});
  box(g,.77,2.45,.8,m.cream,.64,1.41,.28,.018);
  box(g,.84,.12,.87,m.trim,.64,2.54,.28);
  box(g,.81,.40,.84,m.cream,.64,2.80,.28);
  for(const rotation of [0,Math.PI/2,Math.PI,Math.PI*1.5]){
    const face=new THREE.Group();face.position.set(.64,2.80,.28);face.rotation.y=rotation;g.add(face);
    const c=cylinder(face,.157,.157,.035,m.trim,0,0,.432,24);c.rotation.x=Math.PI/2;
    const rim=new THREE.Mesh(new THREE.TorusGeometry(.166,.018,5,24),m.brass);rim.position.z=.45;face.add(rim);
    box(face,.014,.13,.02,m.black,0,.037,.46);beam(face,[0,0,.463],[.095,-.034,.463],.013,m.black);
  }
  cylinder(g,0,.68,.70,m.roofDark,.64,3.37,.28,4).rotation.y=Math.PI/4;
  sphere(g,.058,m.brass,.64,3.77,.28);
  return g;
}

export function waterTower(parent,m,x,z){
  const g=new THREE.Group();g.position.set(x,.13,z);parent.add(g);
  for(const a of [-1,1])for(const b of [-1,1]){
    const sx=a*.45,sz=b*.45;
    box(g,.22,.15,.22,m.stone,sx,.075,sz);
    beam(g,[sx,.14,sz],[sx*.82,1.80,sz*.82],.08,m.timber);
  }
  for(const side of [-1,1]){
    beam(g,[-.44,.40,side*.43],[.39,1.56,side*.39],.05,m.timber);
    beam(g,[.44,.40,side*.43],[-.39,1.56,side*.39],.05,m.timber);
    beam(g,[side*.43,.40,-.44],[side*.39,1.56,.39],.05,m.timber);
  }
  cylinder(g,.70,.70,.12,m.timber,0,1.82,0,32);
  cylinder(g,.64,.65,.92,m.ochre,0,2.32,0,32);
  for(let i=0;i<24;i++){const a=i*Math.PI/12;beam(g,[Math.cos(a)*.65,1.89,Math.sin(a)*.65],[Math.cos(a)*.64,2.77,Math.sin(a)*.64],.013,m.timber);}
  for(const y of [1.95,2.66])cylinder(g,.655,.655,.06,m.bridge,0,y,0,32);
  cylinder(g,0,.77,.37,m.roofDark,0,2.96,0,32);
  // Ladder, kept on the village-facing side.
  for(const sx of [-.16,.16])beam(g,[sx,.12,.70],[sx,2.76,.70],.025,m.bridge);
  for(let y=.26;y<2.75;y+=.19)beam(g,[-.16,y,.70],[.16,y,.70],.022,m.bridge);
  return g;
}

export function littlePerson(parent,m,x,z,color=m.paleBlue,y=.13,rotation=0){
  const g=new THREE.Group();g.position.set(x,y,z);g.rotation.y=rotation;parent.add(g);
  for(const s of [-1,1])cylinder(g,.022,.026,.18,m.black,s*.04,.1,0,7);
  cylinder(g,.075,.061,.19,color,0,.28,0,10);
  sphere(g,.061,m.trainCream,0,.44,0);
  beam(g,[-.065,.33,0],[-.10,.20,.02],.027,color);beam(g,[.065,.33,0],[.10,.20,.01],.027,color);
  return g;
}

export function car(parent,m,x,z,color=m.sage,rotation=0){
  const g=new THREE.Group();g.position.set(x,.14,z);g.rotation.y=rotation;parent.add(g);
  box(g,.55,.22,1.02,color,0,.23,0,.075);
  box(g,.48,.27,.57,color,0,.43,-.06,.07);
  box(g,.40,.15,.027,m.window,0,.46,.23,.025);
  box(g,.40,.14,.027,m.window,0,.45,-.355,.025);
  for(const side of [-1,1]){
    box(g,.02,.15,.42,m.window,side*.249,.46,-.065,.02);
    for(const zz of [-.32,.33]){const wheel=cylinder(g,.11,.11,.07,m.black,side*.28,.145,zz,12);wheel.rotation.z=Math.PI/2;}
    box(g,.09,.06,.027,m.lamp,side*.18,.28,.521);
  }
  return g;
}
