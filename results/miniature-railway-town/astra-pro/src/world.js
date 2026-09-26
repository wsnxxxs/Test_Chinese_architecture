import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { makeMaterials } from './materials.js';
import { addMesh, batchStatic, disposeGeometryCache } from './geometry.js';
import { makeBase, makeRiver, makeRailway, makeTown, makeVegetation, makeLamps } from './landscape.js';
import { MiniatureTrain } from './train.js';
import { TRACK_LENGTH, START_DISTANCE, vehiclePose, distanceToTrack } from './route.js';

const DAY_BG = new THREE.Color('#ebe7de');
const NIGHT_BG = new THREE.Color('#1d3039');
const DAY_SUN = new THREE.Color('#ffe1b3');
const NIGHT_SUN = new THREE.Color('#a1bee8');
const DAY_SKY = new THREE.Color('#e6ecdc');
const NIGHT_SKY = new THREE.Color('#a4bacf');
const DAY_GROUND = new THREE.Color('#7b795c');
const NIGHT_GROUND = new THREE.Color('#405570');
const INITIAL_CAMERA = new THREE.Vector3(27,28,34);
const INITIAL_TARGET = new THREE.Vector3(0,.55,0);

export class Diorama {
  constructor(container) {
    this.container=container;
    this.scene=new THREE.Scene();this.scene.background=DAY_BG.clone();
    this.materials=makeMaterials();this.time=0;this.nightTarget=0;this.nightBlend=0;this.contextLost=false;
    this.renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,powerPreference:'high-performance'});
    this.renderer.outputColorSpace=THREE.SRGBColorSpace;
    this.renderer.toneMapping=THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure=1.13;
    this.renderer.shadowMap.enabled=true;this.renderer.shadowMap.type=THREE.PCFSoftShadowMap;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1,window.innerWidth<700?1.4:1.65));
    this.renderer.domElement.setAttribute('aria-label','柳溪铁路镇三维沙盘：拖动旋转，滚轮缩放');
    this.renderer.domElement.setAttribute('tabindex','0');
    container.prepend(this.renderer.domElement);
    this.camera=new THREE.OrthographicCamera(-20,20,15,-15,.1,160);
    this.createControls();
    this.createLighting();
    this.createTableShadow();
    this.land=new THREE.Group();this.land.name='static-handcrafted-town';this.scene.add(this.land);
    makeBase(this.land,this.materials);
    this.waterUniform=makeRiver(this.land,this.materials);
    makeRailway(this.land,this.materials);
    makeTown(this.land,this.materials);
    makeVegetation(this.land,this.materials);
    this.lamps=makeLamps(this.land,this.materials);
    batchStatic(this.land);
    this.train=new MiniatureTrain(this.scene,this.materials);
    this.resizeObserver=new ResizeObserver(()=>this.resize());this.resizeObserver.observe(container);
    this.resize();
    this.onContextLost=(event)=>{event.preventDefault();this.contextLost=true;document.getElementById('error').hidden=false;document.getElementById('error-message').textContent='图形上下文暂时中断，正在等待浏览器恢复。也可重新加载页面。';};
    this.onContextRestored=()=>{this.contextLost=false;this.renderer.shadowMap.needsUpdate=true;document.getElementById('error').hidden=true;};
    this.renderer.domElement.addEventListener('webglcontextlost',this.onContextLost);
    this.renderer.domElement.addEventListener('webglcontextrestored',this.onContextRestored);
  }
  createControls(){
    this.controls?.dispose();
    this.camera.position.copy(INITIAL_CAMERA);this.camera.zoom=1;this.camera.lookAt(INITIAL_TARGET);this.camera.updateMatrixWorld(true);
    this.controls=new OrbitControls(this.camera,this.renderer.domElement);
    this.controls.target.copy(INITIAL_TARGET);
    this.controls.enableDamping=true;this.controls.dampingFactor=.075;
    this.controls.enablePan=false;this.controls.minZoom=.68;this.controls.maxZoom=2.5;
    this.controls.minPolarAngle=.40;this.controls.maxPolarAngle=1.23;
    this.controls.rotateSpeed=.63;this.controls.zoomSpeed=.82;
    this.controls.touches.ONE=THREE.TOUCH.ROTATE;this.controls.touches.TWO=THREE.TOUCH.DOLLY_ROTATE;
    this.controls.update();this.controls.saveState();
  }
  createLighting(){
    this.hemisphere=new THREE.HemisphereLight(DAY_SKY,DAY_GROUND,2.1);this.scene.add(this.hemisphere);
    this.sun=new THREE.DirectionalLight(DAY_SUN,3.65);this.sun.position.set(-12,23,12);this.sun.target.position.set(0,0,0);
    this.sun.castShadow=true;this.sun.shadow.mapSize.set(window.innerWidth<700?1024:2048,window.innerWidth<700?1024:2048);
    Object.assign(this.sun.shadow.camera,{left:-19,right:19,top:18,bottom:-18,near:1,far:64});
    this.sun.shadow.normalBias=.024;this.sun.shadow.bias=-.00013;this.sun.shadow.radius=3;
    this.scene.add(this.sun,this.sun.target);
    this.fill=new THREE.DirectionalLight('#dae6ee',.50);this.fill.position.set(14,12,-15);this.scene.add(this.fill);
  }
  createTableShadow(){
    this.floorMaterial=new THREE.MeshBasicMaterial({color:DAY_BG});
    const floor=addMesh(this.scene,new THREE.PlaneGeometry(220,220),this.floorMaterial,0,-1.52,0,false);floor.rotation.x=-Math.PI/2;
    const shadow=new THREE.Mesh(new THREE.PlaneGeometry(100,100),new THREE.ShadowMaterial({opacity:.22}));
    shadow.rotation.x=-Math.PI/2;shadow.position.y=-1.515;shadow.receiveShadow=true;this.scene.add(shadow);
    this.tableShadowMaterial=shadow.material;
    const c=document.createElement('canvas');c.width=256;c.height=256;const ctx=c.getContext('2d');
    const gradient=ctx.createRadialGradient(128,128,24,128,128,123);gradient.addColorStop(0,'rgba(47,39,20,.33)');gradient.addColorStop(.52,'rgba(47,39,20,.21)');gradient.addColorStop(1,'rgba(47,39,20,0)');ctx.fillStyle=gradient;ctx.fillRect(0,0,256,256);
    const texture=new THREE.CanvasTexture(c);texture.colorSpace=THREE.SRGBColorSpace;
    this.contactMaterial=new THREE.MeshBasicMaterial({map:texture,transparent:true,depthWrite:false,opacity:.63});
    const contact=addMesh(this.scene,new THREE.PlaneGeometry(35,28),this.contactMaterial,0,-1.505,0,false);contact.rotation.x=-Math.PI/2;
  }
  resize(){
    const width=Math.max(1,this.container.clientWidth),height=Math.max(1,this.container.clientHeight);
    this.renderer.setSize(width,height);
    const aspect=width/height;
    // Fit the whole base at the known initial orientation. Ground corners and
    // tallest landmark positions are included; the fit is not a magic distance.
    const fitCamera=new THREE.PerspectiveCamera();fitCamera.position.copy(INITIAL_CAMERA);fitCamera.lookAt(INITIAL_TARGET);fitCamera.updateMatrixWorld(true);
    const points=[];
    for(const x of [-12.75,12.75])for(const z of [-9.75,9.75])for(const y of [-1.5,.2])points.push(new THREE.Vector3(x,y,z));
    for(const p of [[-10.9,3.7,-7.5],[1,3.1,-8.1],[-.05,4.0,-3.75],[-2.8,3.1,4],[9.05,3.4,-.58],[10.75,3.4,-6.9]])points.push(new THREE.Vector3(...p));
    let maxX=0,maxY=0;
    for(const point of points){point.applyMatrix4(fitCamera.matrixWorldInverse);maxX=Math.max(maxX,Math.abs(point.x));maxY=Math.max(maxY,Math.abs(point.y));}
    const halfHeight=Math.max(maxY,maxX/aspect)*1.055;
    this.camera.left=-halfHeight*aspect;this.camera.right=halfHeight*aspect;this.camera.top=halfHeight;this.camera.bottom=-halfHeight;this.camera.updateProjectionMatrix();
  }
  setNight(night){this.nightTarget=night?1:0;}
  reset(){
    // Recreate controls to discard residual damping. Merely copying a camera
    // position can leave inertia from a previous drag and make resets drift.
    this.createControls();this.resize();this.time=0;this.nightBlend=0;this.nightTarget=0;this.train.reset();
  }
  update(dt,simulation){
    this.controls.update(dt);this.time+=dt;
    this.nightBlend=THREE.MathUtils.damp(this.nightBlend,this.nightTarget,3.5,dt);
    if(Math.abs(this.nightBlend-this.nightTarget)<.0002)this.nightBlend=this.nightTarget;
    const n=this.nightBlend;
    this.scene.background.copy(DAY_BG).lerp(NIGHT_BG,n);this.floorMaterial.color.copy(this.scene.background);
    this.sun.color.copy(DAY_SUN).lerp(NIGHT_SUN,n);this.sun.intensity=THREE.MathUtils.lerp(3.65,.82,n);
    this.hemisphere.color.copy(DAY_SKY).lerp(NIGHT_SKY,n);this.hemisphere.groundColor.copy(DAY_GROUND).lerp(NIGHT_GROUND,n);this.hemisphere.intensity=THREE.MathUtils.lerp(2.1,1.35,n);
    this.fill.intensity=THREE.MathUtils.lerp(.5,.76,n);
    this.renderer.toneMappingExposure=THREE.MathUtils.lerp(1.13,.99,n);
    this.materials.glow.emissiveIntensity=THREE.MathUtils.lerp(.035,1.85,n);
    this.materials.lamp.emissiveIntensity=THREE.MathUtils.lerp(.08,3.1,n);
    this.lamps.glowMaterial.opacity=.67*n;this.lamps.poolMaterial.opacity=.33*n;
    for(const {light,power}of this.lamps.lights)light.intensity=power*n;
    this.contactMaterial.opacity=THREE.MathUtils.lerp(.63,.27,n);
    this.tableShadowMaterial.opacity=THREE.MathUtils.lerp(.22,.13,n);
    this.waterUniform.value=this.time;
    this.train.update(dt,simulation,n);
    const compass=document.getElementById('compass-needle');
    if(compass)compass.setAttribute('transform',`rotate(${-this.controls.getAzimuthalAngle()*180/Math.PI} 27 27)`);
  }
  render(){if(!this.contextLost)this.renderer.render(this.scene,this.camera);}
  inspect(){
    return {trackLength:TRACK_LENGTH,carriages:this.train.inspect(),camera:{position:this.camera.position.toArray(),target:this.controls.target.toArray(),zoom:this.camera.zoom},nightBlend:this.nightBlend,drawCalls:this.renderer.info.render.calls,triangles:this.renderer.info.render.triangles,canvas:[this.renderer.domElement.width,this.renderer.domElement.height]};
  }
  dispose(){
    cancelAnimationFrame(this.animationId);this.controls.dispose();this.resizeObserver.disconnect();
    this.renderer.domElement.removeEventListener('webglcontextlost',this.onContextLost);this.renderer.domElement.removeEventListener('webglcontextrestored',this.onContextRestored);
    const geometries=new Set(),materials=new Set(),textures=new Set();
    this.scene.traverse(object=>{
      if(object.geometry)geometries.add(object.geometry);
      for(const material of (Array.isArray(object.material)?object.material:object.material?[object.material]:[]))materials.add(material);
      if(object.shadow?.map)object.shadow.map.dispose();
    });
    for(const material of materials){for(const value of Object.values(material))if(value?.isTexture)textures.add(value);material.dispose();}
    for(const texture of textures)texture.dispose();for(const geometry of geometries)geometry.dispose();
    disposeGeometryCache();this.renderer.dispose();this.renderer.domElement.remove();
  }
}
