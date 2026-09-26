import * as THREE from 'three';
import { box, cylinder, sphere, beam, addMesh, batchStatic } from './geometry.js';
import { sign } from './buildings.js';
import { TRACK, VEHICLE_OFFSETS, vehiclePose, sampleRoute } from './route.js';

function wheel(parent,m,side,z,radius=.145){
  const g=new THREE.Group();g.position.set(side*.335,radius,z);parent.add(g);
  const tire=cylinder(g,radius,radius,.078,m.black,0,0,0,20);tire.rotation.z=Math.PI/2;
  const inner=cylinder(g,radius*.78,radius*.78,.086,m.engine,side*.012,0,0,20);inner.rotation.z=Math.PI/2;
  const hub=cylinder(g,radius*.26,radius*.26,.101,m.brass,side*.019,0,0,12);hub.rotation.z=Math.PI/2;
  for(let i=0;i<4;i++){
    const spoke=box(g,.012,radius*1.45,.021,m.brass,side*.061,0,0);spoke.rotation.x=i*Math.PI/4;
  }
  g.userData.radius=radius;
  return g;
}
function bogie(parent,m,engine=false){
  const g=new THREE.Group();parent.add(g);
  const wheels=[];
  box(g,.64,.075,engine?.19:.38,m.black,0,.23,0);
  const axles=engine?[0]:[-.13,.13];
  for(const z of axles)for(const side of [-1,1])wheels.push(wheel(g,m,side,z,engine?.183:.14));
  return {group:g,wheels};
}
function locomotive(parent,m){
  const g=new THREE.Group();parent.add(g);
  box(g,.78,.13,1.68,m.engine,0,.36,0,.024);
  box(g,.72,.055,1.62,m.brass,0,.44,0,.015);
  const boiler=cylinder(g,.275,.275,.93,m.black,0,.74,.25,28);boiler.rotation.x=Math.PI/2;
  for(const z of [-.10,.26,.61]){
    const band=new THREE.Mesh(new THREE.TorusGeometry(.277,.022,7,24),m.brass);band.position.set(0,.74,z);g.add(band);
  }
  const nose=cylinder(g,.25,.25,.062,m.railDark,0,.74,.74,28);nose.rotation.x=Math.PI/2;
  sphere(g,.055,m.brass,0,.74,.783,1,1,.4);
  box(g,.79,.69,.60,m.engine,0,.79,-.50,.045);
  box(g,.86,.035,.68,m.brass,0,.52,-.5);
  // Open-looking cab glazing, framed separately on three sides.
  for(const side of [-1,1]){
    box(g,.022,.31,.38,m.trim,side*.403,.92,-.49,.015);
    box(g,.028,.245,.30,m.glow,side*.417,.92,-.49,.01);
    box(g,.034,.25,.03,m.engine,side*.423,.92,-.49);
    const number=sign(g,'07',.23,.14,side*.424,.65,-.52,{font:'600 70px Georgia',background:'#913f31',color:'#edd7a2'});number.rotation.y=side*Math.PI/2;
  }
  box(g,.47,.29,.03,m.glow,0,.91,-.808,.02);
  box(g,.025,.3,.033,m.engine,0,.91,-.829);
  box(g,.95,.14,.78,m.black,0,1.19,-.48,.062);
  cylinder(g,.085,.105,.29,m.black,0,1.07,.50,16);
  cylinder(g,.142,.09,.10,m.black,0,1.24,.50,16);
  cylinder(g,.105,.12,.025,m.railDark,0,1.30,.50,16);
  cylinder(g,.096,.106,.13,m.brass,0,1.04,.01,20);
  sphere(g,.096,m.brass,0,1.10,.01,1,.55,1);
  for(const side of [-1,1]){
    beam(g,[side*.305,.82,-.12],[side*.305,.82,.70],.018,m.brass);
    box(g,.15,.045,.48,m.black,side*.46,.34,-.48);
    box(g,.12,.045,.29,m.black,side*.48,.23,-.5);
    const buffer=cylinder(g,.075,.075,.12,m.black,side*.25,.34,.90,14);buffer.rotation.x=Math.PI/2;
  }
  const lamp=cylinder(g,.11,.11,.105,m.brass,0,.91,.81,20);lamp.rotation.x=Math.PI/2;
  const lightMat=new THREE.MeshStandardMaterial({color:'#ffe6a6',emissive:'#ffd28c',emissiveIntensity:.6,roughness:.32});
  const glass=cylinder(g,.078,.078,.11,lightMat,0,.91,.831,20);glass.rotation.x=Math.PI/2;
  // Slatted pilot, without extending into the adjacent coach envelope.
  for(let i=-3;i<=3;i++)beam(g,[i*.085,.31,.77],[i*.10,.15,.97],.036,m.black);
  return {body:g,lightMat};
}
function coach(parent,m,index){
  const g=new THREE.Group();parent.add(g);
  box(g,.73,.12,1.58,m.black,0,.31,0,.025);
  box(g,.84,.59,1.54,m.trainGreen,0,.645,0,.043);
  box(g,.845,.37,1.535,m.trainCream,0,.762,0,.022);
  box(g,.857,.035,1.55,m.brass,0,.522,0);
  for(const side of [-1,1]){
    for(let i=0;i<5;i++){
      const z=-.55+i*.275;
      box(g,.026,.31,.227,m.trim,side*.43,.764,z,.01);
      box(g,.031,.245,.169,((i+index)%3)?m.glow:m.window,side*.445,.764,z,.009);
      box(g,.038,.247,.017,m.trainCream,side*.452,.764,z);
    }
    const label=sign(g,`W · R   ${index+1}`,1.05,.12,side*.438,.442,0,{width:512,height:128,font:'600 49px Georgia',background:'#355c4d',color:'#e4d29d'});
    label.rotation.y=side*Math.PI/2;
  }
  for(const end of [-1,1]){
    box(g,.33,.44,.045,m.timber,0,.608,end*.793,.01);
    box(g,.24,.23,.055,m.glow,0,.741,end*.8,.01);
    box(g,.66,.035,.15,m.black,0,.25,end*.83);
    for(const side of [-1,1])beam(g,[side*.33,.32,end*.8],[side*.33,.59,end*.8],.02,m.brass);
  }
  box(g,.975,.18,1.76,m.roofDark,0,1.043,0,.085);
  for(const z of [-.43,.43])box(g,.17,.065,.17,m.black,0,1.145,z,.028);
  return g;
}

export class MiniatureTrain {
  constructor(scene,m){
    this.root=new THREE.Group();this.root.name='independently-following-train';scene.add(this.root);
    const engine=locomotive(this.root,m);this.engine=engine.body;this.headlightMaterial=engine.lightMat;
    this.units=[engine.body,coach(this.root,m,0),coach(this.root,m,1)];
    this.bogies=this.units.map((_,i)=>[bogie(this.root,m,i===0),bogie(this.root,m,i===0)]);
    this.couplers=[0,1].map(()=>addMesh(this.root,new THREE.CylinderGeometry(.028,.028,1,8),m.black));
    this.headlight=new THREE.SpotLight('#ffd294',0,5,Math.PI/6,.7,1.7);
    this.headlight.position.set(0,.9,.90);this.engine.add(this.headlight);
    this.headlight.target.position.set(0,.2,4.7);this.engine.add(this.headlight.target);
    this.smokeRoot=new THREE.Group();scene.add(this.smokeRoot);this.smoke=[];this.smokeTime=0;this.particleCursor=0;
    const smokeGeo=new THREE.SphereGeometry(1,10,7);
    for(let i=0;i<12;i++){
      const material=new THREE.MeshBasicMaterial({color:'#eee7d9',transparent:true,opacity:0,depthWrite:false});
      const particle=addMesh(this.smokeRoot,smokeGeo,material,0,0,0,false);particle.visible=false;
      this.smoke.push({mesh:particle,born:-100,origin:new THREE.Vector3(),seed:i});
    }
    for (const body of this.units) batchStatic(body, { dynamicRoot: true });
    for (const pair of this.bogies) for (const truck of pair) for (const item of truck.wheels) batchStatic(item, { dynamicRoot: true });
    this.frontAttachment=new THREE.Vector3();this.rearAttachment=new THREE.Vector3();this.axis=new THREE.Vector3(0,1,0);this.direction=new THREE.Vector3();
  }
  reset(){this.smokeTime=0;this.particleCursor=0;for(const p of this.smoke){p.mesh.visible=false;p.born=-100;}}
  update(dt,simulation,nightBlend){
    for(let i=0;i<this.units.length;i++){
      const distance=simulation.distance-VEHICLE_OFFSETS[i];
      const pose=vehiclePose(distance,i===0?.98:1.03);
      const body=this.units[i];body.position.set(pose.x,pose.y,pose.z);body.rotation.y=pose.yaw;
      for(const [j,sample]of [pose.front,pose.rear].entries()){
        const truck=this.bogies[i][j];truck.group.position.set(sample.x,TRACK.railY,sample.z);truck.group.rotation.y=Math.atan2(sample.tx,sample.tz);
        for(const wheel of truck.wheels)wheel.rotation.x=simulation.travelled/wheel.userData.radius;
      }
      body.updateMatrixWorld(true);
    }
    // Physical coupler bars join the independently oriented bodies; their
    // lengths and angles are updated rather than forcing the train rigid.
    for(let i=0;i<2;i++){
      this.frontAttachment.set(0,.30,-.87);this.units[i].localToWorld(this.frontAttachment);
      this.rearAttachment.set(0,.30,.87);this.units[i+1].localToWorld(this.rearAttachment);
      this.direction.subVectors(this.rearAttachment,this.frontAttachment);
      const coupler=this.couplers[i];coupler.position.copy(this.frontAttachment).add(this.rearAttachment).multiplyScalar(.5);
      coupler.scale.set(1,this.direction.length(),1);coupler.quaternion.setFromUnitVectors(this.axis,this.direction.normalize());
    }
    this.headlight.intensity=nightBlend*5;
    this.headlightMaterial.emissiveIntensity=.6+nightBlend*2.6;
    const t=simulation.elapsed;
    if(simulation.running){
      this.smokeTime+=dt;
      if(this.smokeTime>(simulation.dwellRemaining>0?.31:.19)){
        this.smokeTime=0;const particle=this.smoke[this.particleCursor++%this.smoke.length];
        particle.born=t;particle.origin.set(0,1.34,.50);this.engine.localToWorld(particle.origin);particle.mesh.visible=true;
      }
    }
    for(const particle of this.smoke){
      const age=t-particle.born;
      if(age>2.4){particle.mesh.visible=false;continue;}
      const progress=Math.max(0,age)/2.4;
      const size=.05+progress*.25;
      particle.mesh.position.copy(particle.origin);
      particle.mesh.position.y+=age*.54;
      particle.mesh.position.x+=age*.18+Math.sin(age*2+particle.seed)*.027;
      particle.mesh.position.z-=age*.07;
      particle.mesh.scale.set(size,size*1.09,size);
      particle.mesh.material.opacity=(1-progress)*.32;
    }
  }
  inspect(){
    return this.units.map((body,i)=>({position:body.position.toArray(),yaw:body.rotation.y,offset:VEHICLE_OFFSETS[i]}));
  }
}
