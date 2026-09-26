import * as THREE from 'three';

/** Pointer orbit rig. Damped spherical interpolation, touch pinch and true orthographic inspection. */
export class OrbitRig {
  constructor(element, onInteract = () => {}) {
    this.element=element;this.perspective=new THREE.PerspectiveCamera(32,1,.04,90);this.orthographic=new THREE.OrthographicCamera(-4,4,3,-3,.04,90);
    this.projection='perspective';this.target=new THREE.Vector3(0,.66,0);this.state={theta:-.92,phi:1.46,distance:7.1};this.goal={...this.state};this.autoRotate=false;this.width=1;this.height=1;
    this.pointers=new Map();this.pinch=0;this.dirty=true;this.onInteract=onInteract;this.handlers=[];
    this.bind('pointerdown',e=>{this.autoRotate=false;onInteract();element.setPointerCapture(e.pointerId);this.pointers.set(e.pointerId,[e.clientX,e.clientY]);this.pinch=this.pinchDistance();element.classList.add('is-dragging');});
    this.bind('pointermove',e=>{if(!this.pointers.has(e.pointerId))return;const old=this.pointers.get(e.pointerId);this.pointers.set(e.pointerId,[e.clientX,e.clientY]);
      if(this.pointers.size===1){this.goal.theta-=(e.clientX-old[0])*.006;this.goal.phi-= (e.clientY-old[1])*.004;this.goal.phi=THREE.MathUtils.clamp(this.goal.phi,.23,1.535);}
      else{const next=this.pinchDistance();if(this.pinch>0)this.zoom(this.pinch/next);this.pinch=next;}this.dirty=true;});
    const up=e=>{this.pointers.delete(e.pointerId);if(!this.pointers.size)element.classList.remove('is-dragging');this.pinch=this.pinchDistance();};
    this.bind('pointerup',up);this.bind('pointercancel',up);this.bind('lostpointercapture',up);
    this.bind('wheel',e=>{e.preventDefault();onInteract();this.zoom(Math.exp(THREE.MathUtils.clamp(e.deltaY,-120,120)*.0015));},{passive:false});
    this.bind('contextmenu',e=>e.preventDefault());this.update(1,true);
  }
  bind(name,handler,options){this.element.addEventListener(name,handler,options);this.handlers.push([name,handler,options]);}
  pinchDistance(){const p=[...this.pointers.values()];return p.length>1?Math.hypot(p[0][0]-p[1][0],p[0][1]-p[1][1]):0;}
  zoom(factor){this.goal.distance=THREE.MathUtils.clamp(this.goal.distance*factor,3.5,13.0);this.dirty=true;}
  get camera(){return this.projection==='orthographic'?this.orthographic:this.perspective;}
  resize(width,height){this.width=width;this.height=height;this.perspective.aspect=width/height;this.perspective.updateProjectionMatrix();this.dirty=true;this.update(0,true);}
  view(name,instant=false){
    const views={hero:[-.92,1.46,6.5,'perspective'],front:[-Math.PI/2,Math.PI/2,5.1,'orthographic'],side:[0,Math.PI/2,7.1,'orthographic'],front34:[-.87,1.46,6.5,'perspective'],rear34:[.86,1.43,6.5,'perspective'],rear:[Math.PI/2,Math.PI/2,5.1,'orthographic'],right:[Math.PI,Math.PI/2,7.1,'orthographic'],top:[-.0001,.025,8.0,'orthographic']};
    const preset=views[name]||views.hero;let theta=preset[0];while(theta-this.state.theta>Math.PI)theta-=Math.PI*2;while(theta-this.state.theta<-Math.PI)theta+=Math.PI*2;
    this.goal={theta,phi:preset[1],distance:preset[2]};this.projection=preset[3];this.autoRotate=false;if(instant)this.state={...this.goal};this.dirty=true;
  }
  update(dt,force=false){
    if(this.autoRotate){this.goal.theta+=dt*.16;this.goal.phi=1.43;this.projection='perspective';this.dirty=true;}
    const delta=Math.abs(this.goal.theta-this.state.theta)+Math.abs(this.goal.phi-this.state.phi)+Math.abs(this.goal.distance-this.state.distance);
    if(!this.dirty&&!force&&delta<.00008)return false;
    const t=force?1:1-Math.exp(-dt*9);for(const key of ['theta','phi','distance'])this.state[key]=THREE.MathUtils.lerp(this.state[key],this.goal[key],t);
    const aspect=this.width/this.height,scale=aspect<1.5?1.5/aspect:1;
    const {theta,phi,distance}=this.state;const r=distance*scale;
    const pos=new THREE.Vector3(r*Math.sin(phi)*Math.sin(theta),r*Math.cos(phi),r*Math.sin(phi)*Math.cos(theta)).add(this.target);
    for(const cam of [this.perspective,this.orthographic]){cam.position.copy(pos);cam.lookAt(this.target);}
    const halfH=Math.max(1.33,2.78/aspect)*(distance/7.1);this.orthographic.left=-halfH*aspect;this.orthographic.right=halfH*aspect;this.orthographic.top=halfH;this.orthographic.bottom=-halfH;this.orthographic.updateProjectionMatrix();
    this.dirty=false;return true;
  }
  dispose(){this.handlers.forEach(([n,h,o])=>this.element.removeEventListener(n,h,o));}
}
