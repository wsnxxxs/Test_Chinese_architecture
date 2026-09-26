import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import './style.css';

const scene = new THREE.Scene();
scene.background = new THREE.Color('#e9e3d5');
const container = document.querySelector('#scene');
const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.42;
container.appendChild(renderer.domElement);

const camera = new THREE.OrthographicCamera();
const initialCamera = new THREE.Vector3(20, 19, 24);
camera.position.copy(initialCamera);
camera.lookAt(0, 0, 0);
const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0, 0);
controls.enableDamping = true;
controls.dampingFactor = 0.075;
controls.enablePan = false;
controls.minPolarAngle = 0.3;
controls.maxPolarAngle = 1.46;
controls.minZoom = 0.75;
controls.maxZoom = 2.5;
controls.zoomSpeed = 0.75;
controls.saveState();

const M = (color, roughness = 0.88, metalness = 0) => new THREE.MeshStandardMaterial({ color, roughness, metalness });
const mat = {
  wood: M('#71503b'), woodEdge: M('#ad7b53'), woodTop: M('#c79c6d'),
  grass: M('#8fae72'), meadow: M('#a1b77c'), moss: M('#76945e'),
  ballast: M('#a59a7e'), tie: M('#5c4938'), steel: M('#aaa9a3', .39, .67),
  stone: M('#d0c3a6'), stoneDark: M('#aaa287'), road: M('#cbbda5'), roadEdge: M('#e6dac4'),
  water: new THREE.MeshStandardMaterial({ color: '#69a3a6', roughness: .33, metalness: .12, transparent: true, opacity: .93 }),
  waterLight: new THREE.MeshBasicMaterial({ color: '#c5e3d4', transparent: true, opacity: .52 }),
  cream: M('#efe1c4'), plaster: M('#f2ddba'), rose: M('#d7a286'), blue: M('#a0b8b0'), ochre: M('#d8b26d'),
  brick: M('#b87d63'), white: M('#f4ead6'), roofRed: M('#9a594a'), roofBlue: M('#617d80'), roofDark: M('#5b6259'), roofOchre: M('#ad815a'),
  trim: M('#f7e9cd'), darkTrim: M('#68715b'), glass: M('#405e68', .34),
  trunk: M('#6a5841'), leaf: M('#567f59'), leafLight: M('#7e9e68'), leafGold: M('#b6a366'),
  lamp: M('#485449'), lampGlass: new THREE.MeshStandardMaterial({ color: '#fff2c0', emissive: '#000000', roughness: .25 }),
  window: new THREE.MeshStandardMaterial({ color: '#6d8584', emissive: '#000000', roughness: .31 }),
  locomotive: M('#2e5145'), wagonRed: M('#ad5c47'), wagonCream: M('#e4cb9d'), black: M('#303936'), brass: M('#c8a963', .33, .6),
};

const world = new THREE.Group();
scene.add(world);
const box = (parent, w, h, d, material, x, y, z, shadow = true) => {
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material);
  mesh.position.set(x, y, z);
  mesh.castShadow = shadow;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
};
const sphere = (parent, r, material, x, y, z, sx = 1, sy = 1, sz = 1) => {
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(r, 9, 7), material);
  mesh.position.set(x, y, z);
  mesh.scale.set(sx, sy, sz);
  mesh.castShadow = true;
  parent.add(mesh);
  return mesh;
};
const cylinder = (parent, rt, rb, h, material, x, y, z, radial = 10) => {
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, radial), material);
  mesh.position.set(x, y, z);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
};

// The oak plinth is deliberately thick enough to read as a physical object.
box(world, 21.3, .72, 15.4, mat.wood, 0, -.58, 0);
box(world, 21.45, .14, 15.55, mat.woodEdge, 0, -.19, 0);
box(world, 21.1, .17, 15.2, mat.woodTop, 0, -.08, 0);
box(world, 20.8, .13, 14.9, mat.grass, 0, .065, 0);
for (const [x, z, w, d] of [[-5.5,-1.1,5.2,3.6],[1.2,1.45,4.7,4.5],[-1.4,-3.5,5.1,1.4],[5.95,1.1,2.1,2.9]]) {
  const p = box(world,w,.014,d,mat.meadow,x,.137,z,false);
  p.rotation.y = .035;
}
for (const z of [-7.64, 7.64]) box(world,21.5,.15,.13,mat.woodEdge,0,-.09,z);
for (const x of [-10.67,10.67]) box(world,.13,.15,15.4,mat.woodEdge,x,-.09,0);
// Small inset brass maker's plate on the front edge.
box(world,2.35,.31,.035,mat.brass,-6.9,-.53,7.711,false);

function ribbon(points, width, y, material, parent = world, closed = false) {
  const path = new THREE.CatmullRomCurve3(points.map(([x,z]) => new THREE.Vector3(x,y,z)), closed, 'centripetal');
  const count = Math.max(40, Math.ceil(path.getLength() * 11));
  const vertices = [], uvs = [], indices = [];
  for (let i = 0; i <= count; i++) {
    const t = i / count, p = path.getPointAt(t), tangent = path.getTangentAt(t).normalize();
    const nx = -tangent.z, nz = tangent.x;
    vertices.push(p.x + nx * width / 2,y,p.z + nz * width / 2,p.x - nx * width / 2,y,p.z - nz * width / 2);
    uvs.push(0,t * path.getLength(),1,t * path.getLength());
    if (i < count) { const k = i * 2; indices.push(k,k+2,k+1,k+1,k+2,k+3); }
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));
  geo.setAttribute('uv',new THREE.Float32BufferAttribute(uvs,2));
  geo.setIndex(indices); geo.computeVertexNormals();
  const mesh = new THREE.Mesh(geo,material); mesh.receiveShadow = true; parent.add(mesh);
  return path;
}

// The brook runs under both sides of the oval. Its banks and crossing structures
// follow the same line, so the two bridges have a visible reason to exist.
const brook = [[3.75,-7.35],[3.57,-6.1],[3.35,-4.8],[3.6,-3.45],[3.88,-2.1],[3.7,-.65],[3.33,.85],[3.19,2.25],[3.4,3.7],[3.55,5.1],[3.4,7.28]];
ribbon(brook,1.57,.143,M('#adad88'),world);
ribbon(brook,1.28,.155,mat.water,world);
for (let i=0;i<24;i++) {
  const z=-6.7+i*.57, x=3.5+.25*Math.sin(z*1.3);
  const m=box(world,.27+Math.sin(i*5.3)*.09,.004,.018,mat.waterLight,x,.164,z,false);
  m.rotation.y=.23*Math.sin(i*2.1);
}
for (const [x,z] of [[2.58,-2.6],[4.53,.6],[2.65,2.88],[4.31,-4.25]]) {
  for(let k=0;k<3;k++) cylinder(world,.045,.058,.32,M('#91a175'),x+(k-1)*.12,.29,z+.07*k,6);
}

// Roads are below the rail head; stone crossing panels are added where needed.
const roads = [
  [[-2.9,6.85],[-2.86,5.65],[-2.84,4.55],[-2.9,3.05],[-2.93,.95],[-2.9,-2.5]],
  [[-6.45,.95],[-4.95,.86],[-2.93,.95],[-.6,.92],[1.9,.86],[2.78,.72]],
  [[-5.45,-2.75],[-2.9,-2.5],[-.6,-2.52],[1.6,-2.6],[2.73,-2.25]],
  [[.85,3.48],[.8,.95],[.8,-1.05],[.95,-2.52]],
  [[-5.75,2.91],[-4.8,2.89],[-2.9,3.05],[-.45,3.48],[.85,3.48],[2.5,3.03]],
  [[-2.84,5.83],[-4.25,5.93],[-5.5,6.02]],
];
for (const road of roads) { ribbon(road,.7,.157,mat.roadEdge); ribbon(road,.56,.16,mat.road); }
// Miniature curb stones along the market street.
for (let x=-5.5;x<2.45;x+=.38) {
  if(Math.abs(x+2.9)<.5 || Math.abs(x-.8)<.5) continue;
  box(world,.26,.036,.045,mat.stone,x,.179,.47,false);
  box(world,.26,.036,.045,mat.stone,x,.179,1.34,false);
}

const railPoints = [[-7.46,-3.55],[-6.7,-4.82],[-4.7,-5.23],[-1.8,-5.34],[1.5,-5.33],[4.55,-5.18],[6.56,-4.73],[7.36,-3.34],[7.43,-1],[7.39,1.63],[7.12,3.45],[5.82,4.38],[3.35,4.62],[.35,4.68],[-2.82,4.65],[-5.52,4.39],[-7.12,3.48],[-7.51,1.75],[-7.55,-.85]];
const track = new THREE.CatmullRomCurve3(railPoints.map(([x,z])=>new THREE.Vector3(x,.25,z)),true,'centripetal');
const trackLength = track.getLength();
const trackAt = d => track.getPointAt(((d % trackLength) + trackLength) % trackLength / trackLength);
const tangentAt = d => track.getTangentAt(((d % trackLength) + trackLength) % trackLength / trackLength).normalize();
const railSample = Array.from({length:660},(_,i)=>{ const p=trackAt(i*trackLength/660); return [p.x,p.z]; });
ribbon(railSample,.91,.195,mat.ballast,world,true);
const sleeperGeo = new THREE.BoxGeometry(.13,.075,.92);
const sleeperCount = Math.floor(trackLength/.29);
const sleepers = new THREE.InstancedMesh(sleeperGeo,mat.tie,sleeperCount);
const dummy = new THREE.Object3D();
for(let i=0;i<sleeperCount;i++) {
  const d=i*trackLength/sleeperCount,p=trackAt(d),t=tangentAt(d);
  dummy.position.set(p.x,.245,p.z);
  dummy.rotation.set(0,-Math.atan2(t.z,t.x),0);
  dummy.updateMatrix(); sleepers.setMatrixAt(i,dummy.matrix);
}
sleepers.castShadow=true; sleepers.receiveShadow=true; world.add(sleepers);
for(const side of [-1,1]) {
  const railCurve = new THREE.CatmullRomCurve3(Array.from({length:300},(_,i)=>{
    const d=i*trackLength/300,p=trackAt(d),t=tangentAt(d);
    return new THREE.Vector3(p.x-t.z*side*.305,.338,p.z+t.x*side*.305);
  }),true,'centripetal');
  const rail = new THREE.Mesh(new THREE.TubeGeometry(railCurve,900,.027,5,true),mat.steel);
  rail.castShadow=true; world.add(rail);
}

function bridge(z,x) {
  const bridgeGroup=new THREE.Group(); world.add(bridgeGroup);
  // Sandstone piers flank the water; steel side girders sit outside the train.
  for(const bx of [x-1.11,x+1.11]) {
    box(bridgeGroup,.3,.37,1.22,mat.stone,bx,.21,z);
    box(bridgeGroup,.43,.09,1.34,mat.stoneDark,bx,.42,z);
  }
  for(const bz of [z-.55,z+.55]) {
    box(bridgeGroup,2.5,.08,.095,mat.roofDark,x,.28,bz);
    box(bridgeGroup,2.5,.13,.07,mat.roofDark,x,.54,bz);
    for(let dx=-1.1;dx<=1.1;dx+=.37) box(bridgeGroup,.045,.24,.058,mat.roofDark,x+dx,.41,bz);
  }
  box(bridgeGroup,2.26,.095,.98,mat.stoneDark,x,.17,z);
}
bridge(-5.2,3.52); bridge(4.62,3.43);
// A small road level crossing connects the station to the main street.
for(const dz of [-.62,.62]) box(world,.77,.08,.18,mat.stone,-2.83,.29,4.65+dz);
box(world,.73,.045,.8,mat.stone,-2.83,.29,4.65);
for(const x of [-3.36,-2.31]) {
  cylinder(world,.026,.032,.5,mat.black,x,.43,4.05,6);
  const bar=box(world,.42,.038,.035,mat.white,x+(x< -2.8?.2:-.2),.65,4.05);
  bar.rotation.z=x< -2.8?-.22:.22;
}

function roof(parent,w,d,y,material) {
  const over=.12, rise=.48, W=w/2+over, D=d/2+over;
  const positions=[-W,y,-D, W,y,-D, W,y+rise,0, -W,y+rise,0,
                   -W,y+rise,0, W,y+rise,0, W,y,D, -W,y,D];
  const geo=new THREE.BufferGeometry();
  geo.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));
  geo.setIndex([0,1,2,0,2,3,4,5,6,4,6,7,0,3,4,0,4,7,1,6,5,1,5,2]);
  geo.computeVertexNormals();
  const mesh=new THREE.Mesh(geo,material); mesh.material.side=THREE.DoubleSide; mesh.castShadow=true; mesh.receiveShadow=true; parent.add(mesh);
  box(parent,w+.25,.045,.05,mat.trim,0,y+rise,0);
}
const litWindows=[];
function house({x,z,w=1.25,d=1.0,h=1.05,wall=mat.cream,roofMat=mat.roofRed,front='south',shop=false,chimney=true}) {
  const g=new THREE.Group(); g.position.set(x,.17,z); world.add(g);
  box(g,w,h,d,wall,0,h/2,0);
  box(g,w+.08,.065,d+.08,mat.trim,0,.06,0);
  roof(g,w,d,h,roofMat);
  const sign=front==='south'?1:-1;
  const faceZ=sign*(d/2+.012);
  box(g,.25,.49,.025,mat.darkTrim,0,.255,faceZ);
  box(g,.18,.4,.03,mat.trunk,0,.25,faceZ+sign*.017);
  sphere(g,.018,mat.brass,.065,.24,faceZ+sign*.05);
  const floors=h>1.25?[.55,1.05]:[.65];
  for(const fy of floors) for(const wx of [-w*.3,w*.3]) {
    const win=box(g,.23,.29,.029,mat.window,wx,fy,faceZ+sign*.03,false); litWindows.push(win);
    box(g,.29,.04,.055,mat.trim,wx,fy+.165,faceZ+sign*.05,false);
    box(g,.29,.045,.07,mat.trim,wx,fy-.165,faceZ+sign*.055,false);
    box(g,.025,.3,.039,mat.trim,wx,fy,faceZ+sign*.055,false);
    if(shop) box(g,.05,.35,.04,roofMat,wx+Math.sign(wx)*.18,fy,faceZ+sign*.06,false);
  }
  if(chimney) {
    box(g,.2,.42,.2,wall,w*.25,h+.44,-d*.08);
    box(g,.27,.055,.27,mat.stoneDark,w*.25,h+.67,-d*.08);
  }
  if(shop) {
    const awning=box(g,w*.83,.055,.36,roofMat,0,.89,sign*(d/2+.16)); awning.rotation.x=sign*.16;
    box(g,w*.64,.19,.025,mat.trim,0,.99,sign*(d/2+.025),false);
  }
  return g;
}

// Station: a low platform, cream masonry building, canopy and name board.
box(world,4.2,.18,.61,mat.stone,-4.49,.27,5.31);
for(let x=-6.3;x<-2.6;x+=.34) box(world,.23,.03,.055,mat.roadEdge,x,.374,5.03,false);
const station=house({x:-4.85,z:6.18,w:2.6,d:1.13,h:1.17,wall:mat.plaster,roofMat:mat.roofBlue,front:'north',chimney:false});
// The station canopy faces the platform (towards negative z).
box(world,3.3,.07,.7,mat.roofDark,-4.76,1.28,5.3);
for(const x of [-6.2,-5.25,-4.3,-3.35]) cylinder(world,.045,.05,.83,mat.darkTrim,x,.81,5.02,7);
box(world,1.25,.27,.045,mat.darkTrim,-4.83,1.3,5.005,false);
const stationSign=document.createElement('canvas'); stationSign.width=512; stationSign.height=120;
const ctx=stationSign.getContext('2d'); ctx.fillStyle='#4d644d'; ctx.fillRect(0,0,512,120);
ctx.fillStyle='#fff6df'; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.font='bold 62px serif'; ctx.fillText('松 溪 镇',256,60);
const signTex=new THREE.CanvasTexture(stationSign); signTex.colorSpace=THREE.SRGBColorSpace;
const signMesh=new THREE.Mesh(new THREE.PlaneGeometry(1.15,.27),new THREE.MeshBasicMaterial({map:signTex,side:THREE.DoubleSide}));
signMesh.position.set(-4.83,1.3,4.978); world.add(signMesh);
for(const x of [-6.18,-3.43]) {
  cylinder(world,.035,.044,.62,mat.darkTrim,x,.62,5.29,8);
  sphere(world,.09,mat.lampGlass,x,.98,5.29);
}
// Station flower tubs and luggage, placed clear of the track.
for(const x of [-6.48,-2.67]) {
  box(world,.32,.2,.23,mat.wood,x,.48,5.45);
  for(let k=0;k<5;k++) sphere(world,.075,k%2?mat.leafGold:mat.leafLight,x+(k-2)*.055,.62,5.45,.85,.65,.85);
}
box(world,.26,.2,.22,mat.roofOchre,-3.62,.48,5.54);
box(world,.2,.15,.25,mat.roofOchre,-3.94,.45,5.62);

// The settlement uses varied footprints, pitched roofs and storefront detail.
house({x:-5.5,z:-1.47,w:1.3,d:1.1,h:1.22,wall:mat.rose,roofMat:mat.roofRed,shop:true});
house({x:-3.98,z:-1.39,w:1.15,d:1.04,h:1.12,wall:mat.ochre,roofMat:mat.roofDark,shop:true});
house({x:-1.55,z:-1.45,w:1.32,d:1.07,h:1.3,wall:mat.cream,roofMat:mat.roofBlue,shop:true});
house({x:.05,z:-1.45,w:1.15,d:1.02,h:1.08,wall:mat.blue,roofMat:mat.roofRed});
house({x:1.89,z:-1.2,w:1.18,d:1.05,h:1.13,wall:mat.plaster,roofMat:mat.roofOchre});
house({x:-5.49,z:2.02,w:1.34,d:1.15,h:1.16,wall:mat.cream,roofMat:mat.roofBlue,front:'north'});
house({x:-4.04,z:2.09,w:1.14,d:1.04,h:1.3,wall:mat.blue,roofMat:mat.roofRed,front:'north'});
house({x:-1.55,z:2.27,w:1.3,d:1.1,h:1.15,wall:mat.rose,roofMat:mat.roofOchre,front:'north'});
house({x:1.75,z:2.18,w:1.52,d:1.2,h:1.42,wall:mat.ochre,roofMat:mat.roofDark,front:'north'});
house({x:-4.81,z:-3.75,w:1.42,d:1.12,h:1.1,wall:mat.cream,roofMat:mat.roofRed});
house({x:-1.74,z:-3.72,w:1.44,d:1.03,h:1.15,wall:mat.plaster,roofMat:mat.roofBlue});
house({x:.16,z:-3.7,w:1.3,d:1.04,h:1.1,wall:mat.rose,roofMat:mat.roofDark});
house({x:2.03,z:-3.73,w:1.1,d:.96,h:1.17,wall:mat.blue,roofMat:mat.roofRed});
// Clock tower marks the central square.
box(world,.9,1.55,.9,mat.plaster,-.45,.96,2.43);
box(world,1.12,.12,1.12,mat.stone,-.45,1.78,2.43);
const towerRoof=new THREE.Mesh(new THREE.ConeGeometry(.78,.69,4),mat.roofBlue);
towerRoof.rotation.y=Math.PI/4; towerRoof.position.set(-.45,2.19,2.43); towerRoof.castShadow=true; world.add(towerRoof);
for(const [dx,dz,rot] of [[0,.457,0],[0,-.457,Math.PI],[.457,0,Math.PI/2],[-.457,0,-Math.PI/2]]) {
  const clock=new THREE.Mesh(new THREE.CircleGeometry(.175,20),mat.white);
  clock.position.set(-.45+dx,1.41,2.43+dz); clock.rotation.y=rot; world.add(clock);
  const hand=box(world,.018,.13,.012,mat.black,-.45+dx,1.42,2.43+dz+(dz>=0?.008:-.008),false); hand.rotation.z=.48;
}
// Mill close to the brook, with its wheel suspended over the bank.
house({x:5.04,z:.8,w:1.45,d:1.36,h:1.27,wall:mat.brick,roofMat:mat.roofDark,front:'south'});
const wheel=new THREE.Group(); wheel.position.set(4.16,.47,.8); world.add(wheel);
const torus=new THREE.Mesh(new THREE.TorusGeometry(.37,.045,7,16),mat.wood); torus.rotation.y=Math.PI/2; wheel.add(torus);
for(let i=0;i<8;i++) { const blade=box(wheel,.62,.04,.09,mat.wood,0,0,0); blade.rotation.x=i*Math.PI/4; }
cylinder(world,.06,.06,.55,mat.wood,4.3,.49,.8,8).rotation.z=Math.PI/2;

function tree(x,z,scale=1,kind=0) {
  const g=new THREE.Group(); g.position.set(x,.14,z); g.scale.setScalar(scale); world.add(g);
  cylinder(g,.055,.09,.55,mat.trunk,0,.27,0,7);
  if(kind===1) {
    const cone=new THREE.Mesh(new THREE.ConeGeometry(.39,.85,8),mat.leaf);
    cone.position.y=.8; cone.castShadow=true; g.add(cone);
    const cone2=new THREE.Mesh(new THREE.ConeGeometry(.3,.63,8),mat.leafLight);
    cone2.position.y=1.12; cone2.castShadow=true; g.add(cone2);
  } else {
    const leaf=kind===2?mat.leafGold:mat.leaf;
    sphere(g,.36,leaf,-.12,.74,0,1,.9,.87);
    sphere(g,.34,kind===2?mat.leafLight:mat.leafLight,.16,.84,.07,.9,1,.91);
    sphere(g,.28,leaf,.02,1.05,-.08,.9,.8,.9);
  }
}
const treePlaces=[[-8.8,-5.6,1.12,1],[-8.9,-3.5,.9,0],[-8.75,-1.55,1.15,1],[-8.8,.95,.9,2],[-8.7,3.8,1.12,0],[-6.92,5.65,.82,1],[-.7,6.12,.85,0],[1.13,6.22,1.04,1],[5.6,6.12,.9,0],[8.5,4.75,1.0,1],[8.8,2.6,1.15,0],[8.82,-.1,.82,2],[8.6,-2.7,1.1,1],[8.5,-5.3,.92,0],[5.56,-3.05,.74,2],[5.47,-1.32,.75,0],[5.7,2.53,.67,1],[-6.3,-.15,.71,0],[-4.7,.02,.58,2],[-1.12,.03,.5,0],[2.21,.13,.63,2],[-6.42,-2.2,.64,1],[-3.88,-3.62,.55,0],[1.53,3.62,.49,2],[-4.53,3.73,.52,0],[-.86,3.78,.58,1]];
treePlaces.forEach(([x,z,s,k])=>tree(x,z,s,k));
// Orchard in an unused corner of the loop.
for(const x of [-6.16,-5.35,-4.54]) for(const z of [-3.65,-2.82]) {
  if(x < -5.9 && z > -3) continue;
  tree(x,z,.47,2);
}
// Park, formal paths and a tiny fountain.
ribbon([[-.62,.1],[-.62,-.45]],.28,.168,mat.roadEdge);
cylinder(world,.38,.44,.17,mat.stone,-.59,.26,-.46,12);
cylinder(world,.28,.28,.035,mat.water,-.59,.365,-.46,16);
cylinder(world,.075,.075,.31,mat.stone,-.59,.52,-.46,10);
sphere(world,.11,mat.waterLight,-.59,.7,-.46);
for(const [x,z] of [[-1.25,-.45],[.07,-.45],[-1.25,-.91],[.07,-.91]]) {
  box(world,.37,.055,.09,mat.wood,x,.28,z);
  box(world,.045,.28,.09,mat.black,x-.13,.4,z);
  box(world,.045,.28,.09,mat.black,x+.13,.4,z);
}

// Small details provide scale without turning the model into a voxel scene.
let seed=7843; const random=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};
const grassGeo=new THREE.ConeGeometry(.035,.16,4);
for(const [material,count] of [[mat.moss,150],[mat.leafGold,65],[mat.cream,42]]) {
  const mesh=new THREE.InstancedMesh(grassGeo,material,count);
  let placed=0,attempts=0;
  while(placed<count && attempts<4000) {
    attempts++; const x=(random()-.5)*20,z=(random()-.5)*14.3;
    if(Math.abs(x-3.5)<1.14 || (Math.abs(z)<5.75 && Math.abs(x)<7.95)) {
      if(treePlaces.some(([tx,tz])=>Math.hypot(x-tx,z-tz)<.42)) continue;
      if(Math.abs(x-2.85)<.43 || Math.abs(z-.95)<.49 || Math.abs(z+2.55)<.4 || Math.abs(z-3.0)<.38) continue;
      if(Math.abs(z)>4.25 && Math.abs(z)<5.75) continue;
      const nearBuilding=[[-5.5,-1.47],[-3.98,-1.39],[-1.55,-1.45],[.05,-1.45],[1.89,-1.2],[-5.49,2.02],[-4.04,2.09],[-1.55,2.27],[1.75,2.18],[-4.81,-3.75],[-1.74,-3.72],[.16,-3.7],[2.03,-3.73]].some(([bx,bz])=>Math.abs(x-bx)<.95&&Math.abs(z-bz)<.8);
      if(nearBuilding) continue;
    }
    dummy.position.set(x,.205,z); dummy.rotation.set(0,random()*6.28,0); dummy.scale.setScalar(.6+random()*.8); dummy.updateMatrix(); mesh.setMatrixAt(placed++,dummy.matrix);
  }
  mesh.count=placed; world.add(mesh);
}
// Fence sections near the station and pasture.
function fenceLine(x1,z1,x2,z2,n) {
  const dx=(x2-x1)/n,dz=(z2-z1)/n;
  for(let i=0;i<=n;i++) { const x=x1+dx*i,z=z1+dz*i; box(world,.06,.31,.06,mat.white,x,.3,z); }
  const length=Math.hypot(x2-x1,z2-z1),angle=-Math.atan2(z2-z1,x2-x1);
  for(const y of [.26,.37]) { const r=box(world,length,.035,.038,mat.white,(x1+x2)/2,y,(z1+z2)/2); r.rotation.y=angle; }
}
fenceLine(-9.68,5.51,-7.6,5.51,8); fenceLine(-9.68,5.51,-9.68,3.85,6);
fenceLine(6.15,-6.47,8.85,-6.47,10);

const glowLights=[];
function streetLamp(x,z,lit=true) {
  cylinder(world,.025,.04,.93,mat.lamp,x,.61,z,7);
  cylinder(world,.16,.11,.045,mat.lamp,x,1.1,z,8);
  const globe=sphere(world,.105,mat.lampGlass,x,1.02,z,1,.8,1);
  cylinder(world,.08,.14,.075,mat.lamp,x,1.17,z,8);
  if(lit) { const light=new THREE.PointLight('#ffd99b',0,3.1,2); light.position.set(x,1.05,z); scene.add(light); glowLights.push(light); }
  return globe;
}
for(const [x,z,lit] of [[-6.15,.4,true],[-4.55,.4,false],[-1.5,.4,true],[1.86,.4,false],[-5.35,3.34,false],[-1.38,3.67,true],[1.78,3.55,false],[-6.64,5.69,true],[-3.05,5.82,true],[5.42,.35,true],[6.56,-2.1,false]]) streetLamp(x,z,lit);

// A few warm flower beds and shrubs reinforce the handmade garden texture.
for(const [x,z] of [[-8.1,5.9],[-8.05,5.35],[-.58,3.6],[2.25,3.33],[6.07,3.37],[7.96,-5.9]]) {
  for(let i=0;i<6;i++) {
    const a=i*2.4,xx=x+Math.cos(a)*.18,zz=z+Math.sin(a)*.13;
    sphere(world,.085,i%3===0?mat.leafGold:mat.leafLight,xx,.24,zz,.9,.55,.8);
    sphere(world,.024,i%2?mat.rose:mat.cream,xx,.3,zz);
  }
}

// Steam engine and two carriages each sample their own arc-length position.
function wheels(g,length) {
  for(const x of [-length*.32,length*.32]) for(const z of [-.31,.31]) {
    const wheel=new THREE.Mesh(new THREE.CylinderGeometry(.13,.13,.06,12),mat.black);
    wheel.rotation.x=Math.PI/2; wheel.position.set(x,-.07,z); wheel.castShadow=true; g.add(wheel);
    const cap=new THREE.Mesh(new THREE.CylinderGeometry(.055,.055,.065,10),mat.brass);
    cap.rotation.x=Math.PI/2; cap.position.set(x,-.07,z*1.08); g.add(cap);
  }
}
function carriage(color,length=1.35) {
  const g=new THREE.Group(); world.add(g);
  box(g,length,.39,.61,mat.black,0,.13,0);
  box(g,length*.91,.56,.57,color,0,.55,0);
  box(g,length*.98,.11,.65,mat.roofDark,0,.9,0);
  box(g,.06,.32,.62,mat.brass,-length*.37,.47,0);
  box(g,.06,.32,.62,mat.brass,length*.37,.47,0);
  for(const side of [-1,1]) for(const x of [-.37,0,.37]) {
    box(g,.22,.25,.017,mat.window,x,.61,side*.294,false);
    box(g,.025,.29,.025,mat.trim,x+.13,.61,side*.306,false);
  }
  wheels(g,length);
  return g;
}
function engine() {
  const g=new THREE.Group(); world.add(g);
  box(g,1.43,.26,.65,mat.black,0,.1,0);
  box(g,.5,.7,.59,mat.locomotive,-.36,.57,0);
  box(g,.61,.1,.66,mat.roofDark,-.36,.96,0);
  const boiler=cylinder(g,.26,.26,.89,mat.locomotive,.28,.55,0,12); boiler.rotation.z=Math.PI/2;
  const band=cylinder(g,.272,.272,.06,mat.brass,.58,.55,0,12); band.rotation.z=Math.PI/2;
  cylinder(g,.105,.13,.38,mat.black,.5,.94,0,10);
  cylinder(g,.17,.13,.085,mat.brass,.5,1.14,0,10);
  sphere(g,.105,mat.lampGlass,.79,.58,0);
  for(const side of [-1,1]) box(g,.27,.31,.024,mat.window,-.37,.67,side*.31,false);
  box(g,.22,.18,.45,mat.black,.75,.17,0);
  wheels(g,1.43);
  return g;
}
const cars=[engine(),carriage(mat.wagonRed),carriage(mat.wagonCream)];
const carSpacing=[0,1.75,3.46];
const stationTarget=new THREE.Vector2(-5.43,4.4);
function nearestDistance(target) {
  let best=0,score=Infinity;
  for(let i=0;i<1500;i++) { const d=i*trackLength/1500,p=trackAt(d),s=(p.x-target.x)**2+(p.z-target.y)**2; if(s<score){score=s;best=d;} }
  return best;
}
const stationDistance=nearestDistance(stationTarget);
const initialDistance=nearestDistance(new THREE.Vector2(-.8,-5.35));
let progress=initialDistance, nextStop=stationDistance<=initialDistance?stationDistance+trackLength:stationDistance;
let stopTimer=0, running=true, speed=1, night=false;
function placeTrain() {
  cars.forEach((car,i)=>{
    const d=progress-carSpacing[i],p=trackAt(d),t=tangentAt(d);
    car.position.set(p.x,.38,p.z);
    car.rotation.y=-Math.atan2(t.z,t.x);
  });
}
placeTrain();

const hemi=new THREE.HemisphereLight('#fff6e3','#78906e',2.35); scene.add(hemi);
const sun=new THREE.DirectionalLight('#ffe4b9',3.05);
sun.position.set(-7,15,8); sun.castShadow=true;
sun.shadow.mapSize.set(2048,2048);
sun.shadow.camera.left=-14; sun.shadow.camera.right=14; sun.shadow.camera.top=12; sun.shadow.camera.bottom=-12;
sun.shadow.camera.near=.1; sun.shadow.camera.far=42;
sun.shadow.bias=-.00045; sun.shadow.normalBias=.025;
scene.add(sun);
const fill=new THREE.DirectionalLight('#c8ddcb',.6); fill.position.set(9,7,-8); scene.add(fill);

function setNight(value) {
  night=value; document.body.classList.toggle('night',night);
  document.querySelector('#day-button').classList.toggle('active',!night);
  document.querySelector('#night-button').classList.toggle('active',night);
  scene.background.set(night?'#3c4b59':'#e9e3d5');
  hemi.intensity=night?1.25:2.35;
  hemi.color.set(night?'#b9c9e8':'#fff6e3');
  sun.intensity=night?.34:3.05;
  sun.color.set(night?'#9eb3d0':'#ffe4b9');
  fill.intensity=night?1.15:.6;
  renderer.toneMappingExposure=night?1.35:1.42;
  mat.window.emissive.set(night?'#ffc973':'#000000'); mat.window.emissiveIntensity=night?.58:0;
  mat.lampGlass.emissive.set(night?'#ffd083':'#000000'); mat.lampGlass.emissiveIntensity=night?1.8:0;
  glowLights.forEach(light=>light.intensity=night?2.8:0);
}
function statusText() {
  const status=document.querySelector('.status');
  status.classList.toggle('paused',!running);
  document.querySelector('#status-text').textContent=!running?'列车已暂停':stopTimer>0?'列车停靠车站':'列车运行中';
  document.querySelector('#play-icon').textContent=running?'Ⅱ':'▶';
  document.querySelector('#play-label').textContent=running?'暂停':'运行';
  document.querySelector('#play-button').setAttribute('aria-label',running?'暂停列车':'运行列车');
}
document.querySelector('#play-button').addEventListener('click',()=>{running=!running;statusText();});
document.querySelector('#reset-button').addEventListener('click',()=>{
  progress=initialDistance; nextStop=stationDistance<=initialDistance?stationDistance+trackLength:stationDistance;
  stopTimer=0; running=true; speed=1;
  document.querySelector('#speed').value='1'; document.querySelector('#speed-value').textContent='1.0×';
  controls.reset();
  setNight(false); placeTrain(); statusText();
});
document.querySelector('#speed').addEventListener('input',event=>{
  speed=Number(event.target.value); document.querySelector('#speed-value').textContent=`${speed.toFixed(1)}×`;
});
document.querySelector('#day-button').addEventListener('click',()=>setNight(false));
document.querySelector('#night-button').addEventListener('click',()=>setNight(true));

function resize() {
  const w=container.clientWidth,h=container.clientHeight,aspect=w/h;
  // Fixed horizontal framing keeps the full plinth visible on narrow screens.
  const halfW=aspect<1.1?14.4:aspect<1.5?13.8:13.1;
  camera.left=-halfW; camera.right=halfW; camera.top=halfW/aspect; camera.bottom=-halfW/aspect;
  camera.updateProjectionMatrix(); renderer.setSize(w,h);
}
window.addEventListener('resize',resize); resize(); setNight(false); statusText();
let previous=performance.now();
function animate(now) {
  requestAnimationFrame(animate);
  const dt=Math.min((now-previous)/1000,.08); previous=now;
  if(running) {
    if(stopTimer>0) {
      stopTimer=Math.max(0,stopTimer-dt);
      if(stopTimer===0) statusText();
    } else {
      progress+=dt*2.15*speed;
      if(progress>=nextStop) {
        progress=nextStop; stopTimer=2; nextStop+=trackLength; statusText();
      }
    }
    placeTrain();
  }
  wheel.rotation.x-=dt*.45*(running?1:0);
  controls.update(); renderer.render(scene,camera);
}
requestAnimationFrame(animate);
