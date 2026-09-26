import * as THREE from 'three';
import { decal } from './geometry.js';
import { SPEC, AXLES } from './spec.js';

function softbox(environment,position,size,intensity,target=[0,0,0]){
  const material=new THREE.MeshBasicMaterial({color:new THREE.Color().setRGB(intensity,intensity,intensity),side:THREE.DoubleSide});
  const panel=new THREE.Mesh(new THREE.PlaneGeometry(...size),material);panel.position.set(...position);panel.lookAt(...target);environment.add(panel);
}
export function createEnvironment(renderer){
  const environment=new THREE.Scene();environment.background=new THREE.Color('#343943');
  const room=new THREE.Mesh(new THREE.BoxGeometry(24,15,24),new THREE.MeshBasicMaterial({color:'#51565c',side:THREE.BackSide}));room.position.y=3;environment.add(room);
  softbox(environment,[-2,7,0],[9,1.65],3.8);
  softbox(environment,[0,5.5,4.5],[8,1.0],3.0);
  softbox(environment,[3,3,-6],[7,.65],2.1);
  softbox(environment,[-7,3.5,-1],[3,4],1.7);
  softbox(environment,[5,1.8,4],[4,1],1.5);
  const pmrem=new THREE.PMREMGenerator(renderer);const target=pmrem.fromScene(environment,.03,.1,50);pmrem.dispose();
  environment.traverse(o=>{if(o.isMesh){o.geometry.dispose();o.material.dispose();}});
  return target;
}
function shadowTexture(){const c=document.createElement('canvas');c.width=c.height=256;const ctx=c.getContext('2d'),g=ctx.createRadialGradient(128,128,12,128,128,128);g.addColorStop(0,'rgba(0,0,0,.62)');g.addColorStop(.55,'rgba(0,0,0,.24)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,256,256);return new THREE.CanvasTexture(c);}
export function createStudio(scene){
  const floorMaterial=new THREE.MeshBasicMaterial({color:'#e7eae7',toneMapped:false,fog:false});
  const floor=new THREE.Mesh(new THREE.PlaneGeometry(200,200),floorMaterial);floor.rotation.x=-Math.PI/2;floor.position.y=-.082;floor.receiveShadow=true;scene.add(floor);
  const podiumMaterial=new THREE.MeshStandardMaterial({color:'#aeb9b2',roughness:.69,metalness:.10});
  const podium=new THREE.Mesh(new THREE.CylinderGeometry(3.18,3.18,.08,144),podiumMaterial);podium.position.y=-.04;podium.receiveShadow=true;scene.add(podium);
  const border=new THREE.Mesh(new THREE.TorusGeometry(3.15,.002,6,160),new THREE.MeshBasicMaterial({color:'#9ba5a1',transparent:true,opacity:.50}));border.rotation.x=Math.PI/2;border.position.y=.001;scene.add(border);
  const tickPositions=[];for(let i=0;i<120;i++){const a=i/120*Math.PI*2,r=i%10===0?3.055:3.11;tickPositions.push(Math.sin(a)*r,.002,Math.cos(a)*r,Math.sin(a)*3.145,.002,Math.cos(a)*3.145);}
  const tickG=new THREE.BufferGeometry();tickG.setAttribute('position',new THREE.Float32BufferAttribute(tickPositions,3));const ticks=new THREE.LineSegments(tickG,new THREE.LineBasicMaterial({color:'#8e9995',transparent:true,opacity:.48}));scene.add(ticks);
  const contactMap=shadowTexture();
  const contact=(x,z,w,h,opacity)=>{const p=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({map:contactMap,transparent:true,opacity,depthWrite:false}));p.rotation.x=-Math.PI/2;p.position.set(x,.003,z);p.renderOrder=1;scene.add(p);};
  contact(0,0,5.05,2.60,.63);for(const axle of AXLES)for(const z of [-.85,.85])contact(axle,z,.82,.47,.65);
  const key=new THREE.DirectionalLight('#fff5ea',1.75);key.position.set(-3.5,7,4.5);key.castShadow=true;key.shadow.mapSize.set(2048,2048);Object.assign(key.shadow.camera,{left:-4.3,right:4.3,top:4.3,bottom:-4.3,near:.5,far:19});key.shadow.bias=-.00035;key.shadow.normalBias=.007;key.shadow.radius=4;scene.add(key);
  const fill=new THREE.DirectionalLight('#e5efff',.8);fill.position.set(4,3,-5);scene.add(fill);
  const rim=new THREE.DirectionalLight('#ffffff',.55);rim.position.set(1,5,5);scene.add(rim);
  const ambient=new THREE.HemisphereLight('#e7efff','#a6a496',.65);scene.add(ambient);
  return {floorMaterial,podiumMaterial,key,fill,rim,ambient,ticks,border};
}
export function createDimensions(){
  const group=new THREE.Group();group.name='Dimensions / supplied reference measurements';group.visible=false;
  const material=new THREE.LineBasicMaterial({color:'#52645e',transparent:true,opacity:.80});
  function line(points){const g=new THREE.BufferGeometry().setFromPoints(points.map(p=>new THREE.Vector3(...p)));group.add(new THREE.Line(g,material));}
  function label(text,pos,width=.84){const tex=decal(text,{width:768,height:128,fontSize:48,color:'#283a32',background:'#f0f3ed',weight:600});const m=new THREE.SpriteMaterial({map:tex,depthTest:false,transparent:true});const s=new THREE.Sprite(m);s.position.set(...pos);s.scale.set(width,.14,1);s.renderOrder=20;group.add(s);}
  const L=SPEC.length/2;
  line([[-L,.06,1.37],[L,.06,1.37]]);for(const x of [-L,L]){line([[x,.04,1.04],[x,.04,1.48]]);line([[x-.055,.04,1.425],[x+.055,.04,1.315]]);}label('4 870 mm',[0,.11,1.50],.86);
  line([[AXLES[0],.03,-1.28],[AXLES[1],.03,-1.28]]);for(const x of AXLES)line([[x,.03,-1.10],[x,.03,-1.40]]);label('2 780 mm',[0,.12,-1.43],.86);
  line([[2.70,.03,-.995],[2.70,.03,.995]]);for(const z of [-.995,.995])line([[2.57,.03,z],[2.79,.03,z]]);label('1 990 mm',[2.91,.10,0],.86);
  return group;
}
