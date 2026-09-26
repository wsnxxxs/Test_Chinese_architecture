import * as THREE from 'three';
import { box, cylinder, sphere, beam, tube, slab, ribbon, flatPath, addMesh } from './geometry.js';
import { TRACK, TRACK_LENGTH, sampleRoute, riverCenter, riverWidth, onRiver, distanceToTrack } from './route.js';
import { randomGenerator, glowTexture } from './materials.js';
import { BUILDINGS, STREETS } from './layout.js';
import { house, station, clockTower, waterTower, bench, car, littlePerson, sign } from './buildings.js';

const random=randomGenerator(1828);
const rand=(a,b)=>a+(b-a)*random();

function roundedCrownGeometry() {
  const geometry=new THREE.IcosahedronGeometry(1,2);
  const position=geometry.getAttribute('position');
  for(let i=0;i<position.count;i++){
    const x=position.getX(i),y=position.getY(i),z=position.getZ(i);
    const scale=1+.047*Math.sin(x*17+y*11+z*23)+.028*Math.cos(z*29-x*13);
    position.setXYZ(i,x*scale,y*scale,z*scale);
  }
  geometry.computeVertexNormals();return geometry;
}
const crownGeometry=roundedCrownGeometry();

export function tree(parent,m,x,z,height=2.2,kind='broad',ground=.13){
  const g=new THREE.Group();g.position.set(x,ground,z);g.rotation.y=rand(0,Math.PI*2);parent.add(g);
  const radius=height*.28;
  cylinder(g,height*.025,height*.052,height*.57,m.bark,0,height*.285,0,10);
  if(kind==='pine'){
    for(let i=0;i<3;i++){
      const h=height*(.63-i*.08),r=radius*(1-i*.22);
      const profile=[new THREE.Vector2(0,0),new THREE.Vector2(r*.76,.02),new THREE.Vector2(r,.09),new THREE.Vector2(r*.64,h*.44),new THREE.Vector2(r*.28,h*.77),new THREE.Vector2(.012,h)];
      const geo=new THREE.LatheGeometry(profile,14);
      addMesh(g,geo,m.pine[i],0,height*(.23+i*.18),0);
    }
  }else{
    const material=m.leaves[Math.floor(random()*m.leaves.length)];
    const lobes=[[-.34,.66,.03,.69],[.31,.71,.07,.73],[.02,.89,-.10,.76],[.09,.70,.32,.65],[-.03,.65,-.31,.62]];
    for(const [lx,ly,lz,scale] of lobes){
      const crown=addMesh(g,crownGeometry,material,lx*height*.56,ly*height,lz*height*.55);
      crown.scale.set(radius*scale*1.45,radius*scale*1.53,radius*scale*1.38);
      crown.rotation.set(rand(-.4,.4),rand(0,6),rand(-.3,.3));
    }
    beam(g,[0,height*.40,0],[-height*.16,height*.70,0],height*.025,m.bark);
    beam(g,[0,height*.45,0],[height*.19,height*.74,height*.035],height*.024,m.bark);
  }
  return g;
}
function bush(parent,m,x,z,size=.36){
  const foliage=addMesh(parent,crownGeometry,m.bush,x,.13+size*.52,z);
  foliage.scale.set(size,size*.72,size*.79);foliage.rotation.y=rand(0,6);
  return foliage;
}
function fence(parent,m,a,b){
  const distance=Math.hypot(b[0]-a[0],b[1]-a[1]);const count=Math.ceil(distance/.28);
  for(let i=0;i<=count;i++){const t=i/count;box(parent,.055,.41,.055,m.trim,a[0]+(b[0]-a[0])*t,.33,a[1]+(b[1]-a[1])*t,.012);}
  for(const y of [.29,.44])beam(parent,[a[0],y,a[1]],[b[0],y,b[1]],.033,m.trim);
}

export function makeBase(root,m){
  box(root,25.2,1.13,19.2,m.wood,0,-.77,0,.23);
  box(root,25.25,.11,19.25,m.woodEdge,0,-.27,0,.15);
  box(root,25.16,.10,19.16,m.woodTrim,0,-.18,0,.10);
  for(const x of [-9.1,9.1])for(const z of [-6.3,6.3])cylinder(root,.56,.52,.20,m.woodEdge,x,-1.40,z,20);
  // Grass is two actual raised land masses; the river is a cut-out, not a blue
  // ribbon placed over an intact green plane.
  const left=[[-12.13,-9.13]],right=[];
  for(let i=0;i<=120;i++){
    const z=-9.13+18.26*i/120;
    const center=riverCenter(z),half=riverWidth(z)/2;
    left.push([center-half,z]);right.push([center+half,z]);
  }
  left.push([-12.13,9.13]);
  right.push([12.13,9.13],[12.13,-9.13]);
  slab(root,left,.13,.33,m.grass);slab(root,right,.13,.33,m.grass);
  // Brass maker's plaque is attached to the wood face, not floating above it.
  box(root,4.56,.49,.035,m.brass,-2.8,-.77,9.61,.035);
  sign(root,'WILLOWBROOK',4.33,.36,-2.8,-.77,9.635,{background:'#67513c',color:'#efe1b7',font:'600 58px Georgia',width:1024,height:128});
  for(const x of [-4.95,-.65]){const screw=cylinder(root,.028,.028,.022,m.brass,x,-.77,9.645,10);screw.rotation.x=Math.PI/2;}
}

export function makeRiver(root,m){
  const samples=[];
  for(let i=0;i<=128;i++){
    const z=-9.13+i*18.26/128;
    samples.push({x:riverCenter(z),z,nx:1,nz:0,width:riverWidth(z)});
  }
  const positions=[],indices=[],uv=[];
  samples.forEach((p,i)=>{
    positions.push(p.x-p.width/2,-.12,p.z,p.x+p.width/2,-.12,p.z);uv.push(0,i/16,1,i/16);
    if(i<samples.length-1){const a=i*2;indices.push(a,a+1,a+2,a+1,a+3,a+2);}
  });
  const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));geo.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));geo.setIndex(indices);geo.computeVertexNormals();
  m.water.side=THREE.DoubleSide;
  const water=addMesh(root,geo,m.water,0,0,0,false);water.userData.keepSeparate=true;
  const waterUniform={value:0};
  m.water.onBeforeCompile=shader=>{
    shader.uniforms.uTime=waterUniform;
    shader.vertexShader='uniform float uTime;\n'+shader.vertexShader;
    shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\ntransformed.y += sin(position.z * 5.5 + uTime * 0.8 + position.x * 3.0) * 0.009;');
  };
  m.water.customProgramCacheKey=()=> 'willowbrook-water-1';
  const rippleMat=new THREE.MeshBasicMaterial({color:'#d1ebe0',transparent:true,opacity:.24,depthWrite:false});
  for(let i=0;i<30;i++){
    const z=rand(-8.7,8.7),x=riverCenter(z)+rand(-.52,.52);
    const pts=[];for(let k=0;k<5;k++)pts.push([x+Math.sin(k*.65+i)*.06,-.09,z+k*.07]);
    tube(root,pts,.011,rippleMat,12);
  }
  for(const side of [-1,1]){
    const edge=samples.filter((_,i)=>i%2===0).map(p=>[p.x+side*(p.width/2+.018),.105,p.z]);
    tube(root,edge,.048,m.bank,190);
    for(let i=0;i<65;i++){
      const z=rand(-8.95,8.95);
      if(Math.abs(z-6.15)<.9||Math.abs(z+6.15)<.9||Math.abs(z-1.6)<.95)continue;
      const x=riverCenter(z)+side*(riverWidth(z)/2+rand(.03,.18));
      const stone=sphere(root,rand(.09,.20),random()>.45?m.stone:m.stoneDark,x,.14,z,rand(.8,1.5),rand(.45,.7),rand(.7,1.3));stone.rotation.y=rand(0,6);
      if(i%5===0)bush(root,m,x+side*.20,z,.24);
    }
  }
  return waterUniform;
}

class RailCurve extends THREE.Curve {
  constructor(offset=0){super();this.offset=offset;}
  getPoint(t,target=new THREE.Vector3()){
    const p=sampleRoute(t*TRACK_LENGTH);return target.set(p.x+p.nx*this.offset,TRACK.railY-.032,p.z+p.nz*this.offset);
  }
}
export function makeRailway(root,m){
  const steps=720,samples=[];for(let i=0;i<=steps;i++)samples.push(sampleRoute(i/steps*TRACK_LENGTH));
  // A real trapezoidal embankment: the ballast shoulders slope all the way
  // down to the lawn instead of hovering as disconnected flat ribbons.
  const profile=[[-.68,.136],[-.50,.265],[.50,.265],[.68,.136]];
  const bedPositions=[],bedUV=[],bedIndices=[];
  samples.forEach((p,i)=>{
    for(const [offset,height]of profile){bedPositions.push(p.x+p.nx*offset,height,p.z+p.nz*offset);bedUV.push(offset,i*.10);}
    if(i<steps&&!onRiver((p.x+samples[i+1].x)/2,(p.z+samples[i+1].z)/2,.26)){
      for(let j=0;j<3;j++){const a=i*4+j,b=a+4;bedIndices.push(a,a+1,b,a+1,b+1,b);}
    }
  });
  const bedGeometry=new THREE.BufferGeometry();
  bedGeometry.setAttribute('position',new THREE.Float32BufferAttribute(bedPositions,3));
  bedGeometry.setAttribute('uv',new THREE.Float32BufferAttribute(bedUV,2));
  bedGeometry.setIndex(bedIndices);bedGeometry.computeVertexNormals();
  addMesh(root,bedGeometry,m.gravel);
  const sleeperGeo=new THREE.BoxGeometry(1.08,.095,.15);
  const count=Math.ceil(TRACK_LENGTH/.245),sleepers=new THREE.InstancedMesh(sleeperGeo,m.sleeper,count);
  const plates=new THREE.InstancedMesh(new THREE.BoxGeometry(.13,.025,.18),m.railDark,count*2);
  const dummy=new THREE.Object3D();
  for(let i=0;i<count;i++){
    const p=sampleRoute(i/count*TRACK_LENGTH),yaw=Math.atan2(p.tx,p.tz);
    dummy.position.set(p.x,.315,p.z);dummy.rotation.set(0,yaw,0);dummy.scale.set(1,1,1);dummy.updateMatrix();sleepers.setMatrixAt(i,dummy.matrix);
    for(const [j,side] of [-1,1].entries()){
      dummy.position.set(p.x+p.nx*TRACK.gauge/2*side,.372,p.z+p.nz*TRACK.gauge/2*side);dummy.updateMatrix();plates.setMatrixAt(i*2+j,dummy.matrix);
    }
  }
  sleepers.castShadow=true;sleepers.receiveShadow=true;plates.receiveShadow=true;
  sleepers.instanceMatrix.needsUpdate=plates.instanceMatrix.needsUpdate=true;root.add(sleepers,plates);
  for(const side of [-1,1])addMesh(root,new THREE.TubeGeometry(new RailCurve(side*TRACK.gauge/2),960,.035,8,false),m.steel);
  // Individual aggregate along the shoulders, instanced rather than thousands
  // of draw calls. The bridge gap uses the same river function as the banks.
  const stones=[];
  for(let i=0;i<1900;i++){
    const p=sampleRoute(random()*TRACK_LENGTH),n=rand(-.64,.64),x=p.x+p.nx*n,z=p.z+p.nz*n;
    if(onRiver(x,z,.24))continue;
    stones.push({x,z,y:.263,size:rand(.023,.064)});
  }
  const ballast=new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1,0),m.stoneDark,stones.length);
  for(const [i,p]of stones.entries()){dummy.position.set(p.x,p.y,p.z);dummy.scale.set(p.size,p.size*.55,p.size*.8);dummy.rotation.set(random(),random()*6,random());dummy.updateMatrix();ballast.setMatrixAt(i,dummy.matrix);}
  ballast.receiveShadow=true;ballast.instanceMatrix.needsUpdate=true;root.add(ballast);
  railwayBridge(root,m,riverCenter(6.15),6.15,true);
  railwayBridge(root,m,riverCenter(-6.15),-6.15,false);
  // Distance markers and a small semaphore outside the running envelope.
  for(const [distance,label]of [[19,'02'],[47,'03']]){
    const p=sampleRoute(distance);const x=p.x+p.nx*.93,z=p.z+p.nz*.93;
    box(root,.07,.66,.07,m.trim,x,.46,z);sign(root,label,.30,.22,x,.70,z+.042,{font:'600 67px Georgia',background:'#ebe0b7',color:'#465543'});
  }
  const signalX=2.15,signalZ=7.03;
  cylinder(root,.039,.046,1.43,m.black,signalX,.85,signalZ,10);
  box(root,.29,.46,.16,m.black,signalX,1.54,signalZ,.065);
  const signalMat=new THREE.MeshStandardMaterial({color:'#75ab73',emissive:'#63ac65',emissiveIntensity:.8,roughness:.4});
  const light=cylinder(root,.070,.070,.025,signalMat,signalX,1.56,signalZ+.09,16);light.rotation.x=Math.PI/2;
}

function archWall(parent,m,span,thickness,z,top=.28){
  const half=span/2,opening=half-.38;
  const shape=new THREE.Shape();shape.moveTo(-half,-.26);shape.lineTo(-half,top);shape.lineTo(half,top);shape.lineTo(half,-.26);shape.lineTo(opening,-.26);
  shape.absellipse(0,-.26,opening,top+.20,0,Math.PI,false);
  shape.lineTo(-half,-.26);
  addMesh(parent,new THREE.ExtrudeGeometry(shape,{depth:thickness,bevelEnabled:false}),m.stone,0,0,z-thickness/2);
}
function railwayBridge(parent,m,x,z,truss=true){
  const g=new THREE.Group();g.position.set(x,0,z);parent.add(g);
  const span=3.25;
  for(const s of [-1,1]){
    box(g,.43,.47,1.38,m.stone,s*(span/2-.16),.05,0,.025);
    box(g,.53,.10,1.48,m.stoneDark,s*(span/2-.16),.265,0);
  }
  box(g,span,.10,1.23,truss?m.bridge:m.stone,0,.26,0);
  if(truss){
    for(const side of [-1,1]){
      const zz=side*.66;
      beam(g,[-span/2,.38,zz],[span/2,.38,zz],.075,m.bridge);
      beam(g,[-span/2,1.18,zz],[span/2,1.18,zz],.075,m.bridge);
      for(let i=0;i<5;i++){
        const xx=-span/2+i*span/4;
        beam(g,[xx,.36,zz],[xx,1.18,zz],.066,m.bridge);
        if(i<4)beam(g,[xx,i%2===0?.38:1.18,zz],[xx+span/4,i%2===0?1.18:.38,zz],.055,m.bridge);
        for(const yy of [.42,1.14])sphere(g,.022,m.brass,xx,yy,zz+side*.045,1,1,.5);
      }
    }
  }else{
    for(const side of [-1,1]){
      archWall(g,m,span,.19,side*.54,.29);
      box(g,span,.25,.14,m.stone,0,.52,side*.70,.017);
      box(g,span+.10,.07,.22,m.stoneDark,0,.68,side*.70,.015);
      for(let i=0;i<9;i++)box(g,.018,.22,.014,m.pavingDark,-span/2+.12+i*.375,.52,side*.777);
    }
  }
}
function roadBridge(parent,m){
  const g=new THREE.Group();g.position.set(riverCenter(1.6),0,1.6);parent.add(g);
  const span=3.2;
  box(g,span,.09,1.39,m.stone,0,.105,0);
  for(const side of [-1,1]){
    archWall(g,m,span,.18,side*.6,.105);
    box(g,span,.26,.16,m.stone,0,.29,side*.73,.026);
    box(g,span+.08,.07,.22,m.trim,0,.43,side*.73,.02);
    for(let i=0;i<9;i++)box(g,.014,.23,.012,m.pavingDark,-span/2+.16+i*.36,.28,side*.815);
  }
}

function fountain(parent,m,x,z){
  cylinder(parent,.83,.92,.12,m.stone,x,.19,z,40);
  cylinder(parent,.72,.76,.20,m.pavingDark,x,.29,z,40);
  cylinder(parent,.64,.64,.06,m.water,x,.382,z,40);
  const rim=new THREE.Mesh(new THREE.TorusGeometry(.707,.06,7,40),m.trim);rim.rotation.x=Math.PI/2;rim.position.set(x,.40,z);parent.add(rim);
  cylinder(parent,.10,.20,.44,m.stone,x,.57,z,16);
  cylinder(parent,.30,.13,.13,m.stone,x,.82,z,24);
  cylinder(parent,.25,.25,.025,m.water,x,.894,z,24);
  sphere(parent,.075,m.brass,x,.96,z);
}

function cafeTable(parent,m,x,z){
  cylinder(parent,.27,.27,.045,m.trim,x,.56,z,20);
  cylinder(parent,.025,.045,.40,m.bridge,x,.34,z,8);
  cylinder(parent,.14,.14,.025,m.bridge,x,.15,z,12);
  for(const side of [-1,1]){
    cylinder(parent,.115,.115,.04,m.timber,x+side*.44,.36,z,12);
    for(const dz of [-.065,.065])box(parent,.035,.20,.035,m.bridge,x+side*.44,.25,z+dz);
    box(parent,.20,.18,.036,m.timber,x+side*.44,.49,z-.095,.016);
  }
  cylinder(parent,.029,.026,.07,m.trim,x+.045,.62,z,10);
}

export function makeTown(root,m){
  // One road network: east/west high street, a loop to the back lane, station
  // approach and a riverside spur. The entire network stays inside the rails.
  for(const {points,w}of STREETS){flatPath(root,points,w+.34,.148,m.paving);flatPath(root,points,w,.158,m.road);}
  // Village green connects the station forecourt and cafe rather than forming
  // isolated islands of unrelated models.
  box(root,3.00,.025,2.3,m.paving,-6.8,.15,3.11,.15);
  flatPath(root,[[-6.8,2.5],[-5.5,2.80],[-3.0,2.80]],.71,.169,m.paving);
  fountain(root,m,-7.07,3.23);bench(root,m,-7.95,3.40,Math.PI/2);bench(root,m,-6.3,4.0,Math.PI);
  box(root,9.70,.025,.64,m.paving,-3.15,.158,.64,.035);
  for(const x of [-7.43,-5.58])cafeTable(root,m,x,.66);
  for(const spec of BUILDINGS){
    if(spec.kind==='house')house(root,m,{...spec,wall:m[spec.wall],roof:m[spec.roof]});
    else if(spec.kind==='clock')clockTower(root,m,spec.x,spec.z);
    else waterTower(root,m,spec.x,spec.z);
  }
  // Barn doors with cross-bracing, a modest rural edge on the other bank.
  box(root,.81,.88,.045,m.timber,7.38,.72,-2.126);
  for(const s of [-1,1])beam(root,[7.38+s*.35,.32,-2.095],[7.38-s*.35,1.13,-2.095],.047,m.trim);
  station(root,m);
  roadBridge(root,m);
  // Short individual front paths connect doors to the same network.
  for(const x of [-6.6,-3.91,-.70])flatPath(root,[[x,-3.23],[x,-2.5]],.37,.162,m.paving);
  fence(root,m,[-7.58,-3.01],[-6.95,-3.01]);fence(root,m,[-6.25,-3.01],[-5.57,-3.01]);
  fence(root,m,[-4.9,-3.12],[-4.24,-3.12]);fence(root,m,[-3.56,-3.12],[-2.83,-3.12]);
  fence(root,m,[6.16,-4.45],[8.68,-4.45]);fence(root,m,[8.68,-4.45],[8.68,-2.00]);
  // A small planted kitchen garden, with visible soil and non-cubic produce.
  box(root,1.19,.025,1.37,m.earth,6.12,.15,-.18,.055);
  for(let row=0;row<4;row++)for(let col=0;col<4;col++)bush(root,m,5.74+col*.25,-.70+row*.32,.11);
  for(const zz of [-.85,.55])beam(root,[5.48,.20,zz],[6.77,.20,zz],.06,m.timber);
  car(root,m,-4.95,1.61,m.paleBlue,Math.PI/2);
  car(root,m,7.32,.12,m.cream,0);
  littlePerson(root,m,-1.02,5.04,m.pink,.42,.6);
  littlePerson(root,m,-3.93,5.10,m.sage,.42,-.3);
  littlePerson(root,m,-2.95,2.65,m.paleBlue,.17,Math.PI);
  littlePerson(root,m,-5.7,1.01,m.ochre,.17,.4);
  littlePerson(root,m,2.73,1.58,m.pink,.17,Math.PI/2);
  littlePerson(root,m,-7.0,4.06,m.cream,.15,1.2);
  // Small planters soften the junction between facades and the street.
  for(const x of [-5.55,-3.10,-.65,1.54]){
    box(root,.28,.25,.33,m.roofBrown,x,.27,.52,.025);
    bush(root,m,x,.52,.24);
    for(let i=0;i<4;i++)sphere(root,.045,m.flowers[i],x+rand(-.11,.11),.50,.52+rand(-.11,.11));
  }
}

export function makeVegetation(root,m){
  // Composed groves, not a random scatter: a wooded backdrop, gardens, and a
  // lower open foreground keep the station and moving train visible.
  const trees=[
    [-10.90,-7.45,2.9,'pine'],[-9.92,-8.1,2.35,'pine'],[-8.75,-7.96,2.7,'pine'],[-7.42,-8.08,2.0,'broad'],
    [-5.95,-7.91,2.0,'broad'],[-4.50,-8.15,2.3,'broad'],[-2.84,-7.90,2.05,'broad'],[-1.03,-8.09,2.4,'pine'],
    [1.01,-8.08,2.8,'pine'],[2.34,-7.83,2.15,'pine'],
    [7.64,-7.92,2.5,'pine'],[9.3,-7.45,2.95,'pine'],[10.75,-6.90,2.55,'pine'],[11.07,-4.82,2.15,'broad'],
    [-11.21,-4.72,2.15,'broad'],[-11.3,-2.60,1.85,'broad'],[-11.3,.20,1.9,'broad'],[-11.19,3.09,2.1,'broad'],
    [-10.20,6.42,1.75,'broad'],[-8.96,7.69,1.68,'broad'],[-6.20,7.89,1.44,'broad'],[-1.68,8.18,1.35,'broad'],
    [1.11,7.96,1.25,'broad'],[8.87,7.58,1.85,'broad'],[10.52,6.01,2.05,'broad'],[11.24,3.22,1.8,'broad'],
    [-8.73,-3.68,1.8,'broad'],[-5.18,-4.10,1.24,'broad'],[-2.44,-4.0,1.18,'broad'],
    [2.44,-4.57,1.8,'broad'],[2.98,-.67,1.32,'broad'],[2.53,3.99,1.85,'broad'],
    [-8.38,4.66,1.65,'broad'],
    [6.29,-5.0,1.6,'broad'],[8.92,-3.16,1.38,'broad'],[6.72,3.28,1.7,'broad'],[5.95,4.37,1.45,'broad'],
  ];
  for(const [x,z,h,kind]of trees){
    // The complete canopy clearance is checked, not just trunk positions.
    if(distanceToTrack(x,z)<.60+h*(kind==='pine'?.31:.49) || onRiver(x,z,h*.20))continue;
    tree(root,m,x,z,h,kind);
  }
  // Orchard alongside the farm track.
  for(const [x,z]of [[7.8,-1.21],[8.55,-1.35],[7.8,-.37]]){
    tree(root,m,x,z,1.06,'broad');
    for(let i=0;i<3;i++)sphere(root,.048,m.red,x+rand(-.20,.20),rand(.82,1.01),z+rand(-.20,.20));
  }
  const bushSites=[[-9.1,4.8],[-8.65,5.1],[-7.8,7.5],[-4.8,7.7],[-4.3,7.8],[-3.8,7.7],[.1,7.6],[7.1,7.3],[7.6,7.55],[-10.9,-.7],[-10.85,-1.2],[10.96,1.3],[11.05,1.8],[3.01,-3.65],[3.02,-3.1],[6.2,6.9]];
  for(const [x,z]of bushSites)if(distanceToTrack(x,z)>.9&&!onRiver(x,z,.3))bush(root,m,x,z,rand(.22,.39));
  // Localized flower clumps, instanced by colour and kept away from railheads.
  const clusters=[[-5.0,7.70],[.20,7.50],[7.28,7.15],[-9.1,4.96],[3.08,3.18],[2.90,-4.24]];
  const flowerGeo=new THREE.SphereGeometry(1,6,4),dummy=new THREE.Object3D();
  for(const material of m.flowers){
    const spots=[];
    for(const [x,z]of clusters)for(let i=0;i<9;i++){
      const xx=x+rand(-.55,.55),zz=z+rand(-.25,.25);
      if(distanceToTrack(xx,zz)>.80&&!onRiver(xx,zz,.17))spots.push([xx,zz]);
    }
    const mesh=new THREE.InstancedMesh(flowerGeo,material,spots.length);
    spots.forEach(([x,z],i)=>{dummy.position.set(x,rand(.19,.24),z);dummy.scale.set(.030,.026,.032);dummy.updateMatrix();mesh.setMatrixAt(i,dummy.matrix);});
    mesh.instanceMatrix.needsUpdate=true;root.add(mesh);
  }
}

export function makeLamps(root,m){
  const sprites=[],lights=[],pools=[];
  const glowMap=glowTexture();
  const glowMaterial=new THREE.SpriteMaterial({map:glowMap,transparent:true,opacity:0,depthWrite:false,blending:THREE.AdditiveBlending});
  const poolMaterial=new THREE.MeshBasicMaterial({map:glowMap,transparent:true,opacity:0,depthWrite:false,blending:THREE.AdditiveBlending});
  const sites=[[-8.3,2.25],[-5.5,2.23],[-.5,2.25],[2.15,2.28],[6.70,2.38],[8.43,.62],[-7.82,-2.07],[-2.24,-2.08],[1.65,3.21]];
  for(const [i,[x,z]]of sites.entries()){
    cylinder(root,.083,.10,.10,m.bridge,x,.18,z,12);
    cylinder(root,.027,.042,1.49,m.bridge,x,.93,z,10);
    tube(root,[[x,1.61,z],[x,1.79,z],[x,1.82,z+.12],[x,1.72,z+.26]],.025,m.bridge,16);
    cylinder(root,.17,.11,.09,m.bridge,x,1.69,z+.26,12);
    box(root,.115,.16,.115,m.lamp,x,1.57,z+.26,.02);
    cylinder(root,.086,.12,.045,m.bridge,x,1.46,z+.26,12);
    const sprite=new THREE.Sprite(glowMaterial);sprite.position.set(x,1.58,z+.26);sprite.scale.set(.78,.78,1);root.add(sprite);sprites.push(sprite);
    const pool=addMesh(root,new THREE.PlaneGeometry(2.1,2.1),poolMaterial,x,.177,z+.26,false);pool.rotation.x=-Math.PI/2;pool.userData.keepSeparate=true;pools.push(pool);
    if([0,2,4,6].includes(i)){
      const light=new THREE.PointLight('#ffcb82',0,4.4,2);light.position.set(x,1.37,z+.26);root.add(light);lights.push({light,power:3.0});
    }
  }
  for(const x of [-4.6,-1.0]){
    box(root,.15,.05,.14,m.lamp,x,1.83,5.03,.02);
    const light=new THREE.PointLight('#ffcc80',0,4.2,2);light.position.set(x,1.69,5.03);root.add(light);lights.push({light,power:3.8});
    const sprite=new THREE.Sprite(glowMaterial);sprite.position.copy(light.position);sprite.scale.set(.7,.7,1);root.add(sprite);sprites.push(sprite);
  }
  return {glowMaterial,poolMaterial,lights};
}
