import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { createTemple, buildings } from './scene.js';

const $ = (id) => document.getElementById(id);
const scene = new THREE.Scene();
scene.background = new THREE.Color('#eeeae1');
scene.fog = new THREE.Fog('#eeeae1', 150, 310);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, preserveDrawingBuffer: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.65));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.shadowMap.autoUpdate = false;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.27;
$('scene').appendChild(renderer.domElement);
renderer.domElement.setAttribute('aria-label', '云栖古寺三维场景，拖动旋转，滚轮缩放');
renderer.domElement.setAttribute('tabindex', '0');

const camera = new THREE.OrthographicCamera(-50, 50, 40, -40, .1, 400);
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = .065;
controls.minPolarAngle = .24;
controls.maxPolarAngle = Math.PI / 2.22;
controls.minZoom = .65;
controls.maxZoom = 3.5;
controls.enablePan = false;
controls.autoRotateSpeed = .42;
controls.rotateSpeed = .55;
controls.zoomSpeed = .65;
const home = new THREE.Vector3(76, 66, 90);
const homeTarget = new THREE.Vector3(0, 1, 0);
camera.position.copy(home);controls.target.copy(homeTarget);

const hemi = new THREE.HemisphereLight('#fff5de', '#718265', 2.5);
scene.add(hemi);
const sun = new THREE.DirectionalLight('#fff0d5', 3.5);
sun.position.set(-45, 70, 30);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
Object.assign(sun.shadow.camera, { left:-55,right:55,top:55,bottom:-55,near:1,far:180 });
sun.shadow.bias = -.00035;
sun.shadow.normalBias = .07;
sun.shadow.radius = 3;
scene.add(sun);
const fill = new THREE.DirectionalLight('#c4e0d7', .6);fill.position.set(35,25,-40);scene.add(fill);
const ground = new THREE.Mesh(new THREE.PlaneGeometry(2000,2000),new THREE.MeshStandardMaterial({color:'#eeeae1',roughness:1}));
ground.rotation.x=-Math.PI/2;ground.position.y=-2.56;ground.receiveShadow=true;scene.add(ground);

const temple = createTemple(scene);
renderer.shadowMap.needsUpdate = true;
let transitioning = null;
let isEvening = false;
let lightTransition = null;
let toastTimeout;

function resize() {
  const width=$('scene').clientWidth, height=$('scene').clientHeight;
  const aspect=width/height;
  const span=width<700 ? 100/aspect : Math.max(90,108/aspect);
  camera.left=-span*aspect/2;camera.right=span*aspect/2;camera.top=span/2;camera.bottom=-span/2;
  // A small lens shift leaves breathing room for the title and toolbar.
  const horizontalShift=width<700 ? 0 : span*aspect*.065;
  camera.left-=horizontalShift;camera.right-=horizontalShift;
  const shift=width<700 ? span*.055 : -span*.035;
  camera.top+=shift;camera.bottom+=shift;
  camera.updateProjectionMatrix();renderer.setSize(width,height);
}
window.addEventListener('resize',resize);resize();

function toast(message) { clearTimeout(toastTimeout);$('toast').textContent=message;$('toast').hidden=false;toastTimeout=setTimeout(()=>$('toast').hidden=true,2500); }
function transitionCamera(position,target,zoom=1) {
  transitioning={from:camera.position.clone(),to:position,fromTarget:controls.target.clone(),toTarget:target,fromZoom:camera.zoom,toZoom:zoom,start:performance.now()};
}
function reset() {
  controls.autoRotate=false;$('auto-rotate').setAttribute('aria-pressed','false');
  transitionCamera(home.clone(),homeTarget.clone());$('view-label').textContent='全景 · 中轴庭院';
}
$('reset').addEventListener('click',reset);
controls.addEventListener('start',()=>{transitioning=null;});
controls.addEventListener('change',()=>document.body.classList.toggle('detail-view',camera.zoom>1.25));
$('auto-rotate').addEventListener('click',()=>{
  controls.autoRotate=!controls.autoRotate;$('auto-rotate').setAttribute('aria-pressed',String(controls.autoRotate));
  toast(controls.autoRotate?'环绕漫游已开启':'环绕漫游已暂停');
});

const presets={
  morning:{bg:'#eeeae1',sun:'#fff0d5',sky:'#fff5de',ground:'#718265',fill:'#c4e0d7',intensity:3.5,ambient:2.5,exposure:1.27,position:new THREE.Vector3(-45,70,30)},
  evening:{bg:'#e4d5ca',sun:'#ffac68',sky:'#ead5cb',ground:'#767887',fill:'#aab7e3',intensity:3.1,ambient:1.9,exposure:1.20,position:new THREE.Vector3(-55,27,-25)},
};
function setTime(mode) {
  isEvening=mode==='evening';const p=presets[mode];
  $('morning').classList.toggle('selected',!isEvening);$('evening').classList.toggle('selected',isEvening);
  $('morning').setAttribute('aria-pressed',String(!isEvening));$('evening').setAttribute('aria-pressed',String(isEvening));
  document.body.classList.toggle('evening',isEvening);
  $('light-label').textContent=isEvening?'暮色 17:30':'晨光 07:00';
  lightTransition={start:performance.now(),from:{bg:scene.background.clone(),sun:sun.color.clone(),sky:hemi.color.clone(),ground:hemi.groundColor.clone(),fill:fill.color.clone(),intensity:sun.intensity,ambient:hemi.intensity,exposure:renderer.toneMappingExposure,position:sun.position.clone()},to:p};
  temple.glowMaterial.emissiveIntensity=isEvening?1.2:.25;
}
$('morning').addEventListener('click',()=>setTime('morning'));$('evening').addEventListener('click',()=>setTime('evening'));

const groups = [
  {id:'main',title:'大雄宝殿',description:'重檐庑殿 · 丹柱金梁，中轴之心',target:'main'},
  {id:'rear',title:'藏经阁',description:'层阁藏书 · 院落深处的一方清净',target:'rear'},
  {id:'wings',title:'东西配殿',description:'四座禅斋 · 相向而筑，围合成院',target:'east-back'},
  {id:'gate',title:'云栖山门',description:'三间山门 · 由此入境，尘嚣渐远',target:'gate'},
  {id:'towers',title:'钟楼与鼓楼',description:'晨钟暮鼓 · 双层攒尖，分立东西',target:'bell'},
  {id:'pagodas',title:'东西雁塔',description:'五重浮屠 · 层檐叠翠，遥相呼应',target:'east-pagoda'},
];
groups.forEach((group,i)=>{
  const button=document.createElement('button');button.className='building-item';
  button.innerHTML=`<span class="number">0${i+1}</span><span><strong>${group.title}</strong><small>${group.description}</small></span><span class="arrow">↗</span>`;
  button.addEventListener('click',()=>{
    const b=buildings.find(x=>x.id===group.target),target=new THREE.Vector3(b.x,b.height*.3,b.z);
    const dir=b.x>10?new THREE.Vector3(-60,47,76):new THREE.Vector3(65,50,76);
    controls.autoRotate=false;$('auto-rotate').setAttribute('aria-pressed','false');
    transitionCamera(target.clone().add(dir),target,window.innerWidth<700?2.2:1.9);
    $('view-label').textContent=`细观 · ${group.title}`;
    setPanel(false);
  });$('building-list').appendChild(button);
});
function setPanel(open){$('building-panel').hidden=!open;$('catalog').classList.toggle('active',open);$('explore').classList.toggle('active',!open);document.querySelector('.intro').classList.toggle('panel-open',open);$('catalog').setAttribute('aria-expanded',String(open));}
$('catalog').setAttribute('aria-expanded','false');$('catalog').setAttribute('aria-controls','building-panel');
$('catalog').addEventListener('click',()=>setPanel($('building-panel').hidden));
$('close-panel').addEventListener('click',()=>setPanel(false));
$('explore').addEventListener('click',()=>{setPanel(false);reset();});
$('about').addEventListener('click',()=>$('about-dialog').showModal());
$('close-about').addEventListener('click',()=>$('about-dialog').close());
$('return-scene').addEventListener('click',()=>$('about-dialog').close());
$('about-dialog').addEventListener('click',(event)=>{if(event.target===$('about-dialog')){const rect=event.target.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)event.target.close();}});
window.addEventListener('keydown',(event)=>{if(event.key==='Escape')setPanel(false);});
$('capture').addEventListener('click',()=>{
  renderer.render(scene,camera);
  renderer.domElement.toBlob((blob)=>{
    if(!blob){toast('图片生成失败，请重试');return;}
    const url=URL.createObjectURL(blob),link=document.createElement('a');link.href=url;link.download=`云栖古寺-${isEvening?'暮色':'晨光'}.png`;link.click();setTimeout(()=>URL.revokeObjectURL(url),3000);toast('此刻山河，已保存为图片');
  },'image/png');
});

let last=performance.now(), frames=0, fpsStart=last;
const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const mixed=new THREE.Color();
function animate(now) {
  const dt=Math.min((now-last)/1000,.1);last=now;
  if(transitioning){
    const t=reduceMotion?1:Math.min((now-transitioning.start)/1150,1),ease=1-Math.pow(1-t,3);
    camera.position.lerpVectors(transitioning.from,transitioning.to,ease);controls.target.lerpVectors(transitioning.fromTarget,transitioning.toTarget,ease);
    camera.zoom=THREE.MathUtils.lerp(transitioning.fromZoom,transitioning.toZoom,ease);camera.updateProjectionMatrix();
    if(t===1)transitioning=null;
  }
  if(lightTransition){
    const t=reduceMotion?1:Math.min((now-lightTransition.start)/1000,1),{from,to}=lightTransition;
    scene.background.copy(from.bg).lerp(mixed.set(to.bg),t);scene.fog.color.copy(scene.background);ground.material.color.copy(scene.background);
    sun.color.copy(from.sun).lerp(mixed.set(to.sun),t);hemi.color.copy(from.sky).lerp(mixed.set(to.sky),t);hemi.groundColor.copy(from.ground).lerp(mixed.set(to.ground),t);fill.color.copy(from.fill).lerp(mixed.set(to.fill),t);
    sun.intensity=THREE.MathUtils.lerp(from.intensity,to.intensity,t);hemi.intensity=THREE.MathUtils.lerp(from.ambient,to.ambient,t);renderer.toneMappingExposure=THREE.MathUtils.lerp(from.exposure,to.exposure,t);sun.position.lerpVectors(from.position,to.position,t);
    renderer.shadowMap.needsUpdate=true;if(t===1)lightTransition=null;
  }
  controls.update(dt);renderer.render(scene,camera);
  $('compass-needle').style.transform=`rotate(${-controls.getAzimuthalAngle()*180/Math.PI}deg)`;
  frames++;
  if(now-fpsStart>1000){
    const fps=Math.round(frames*1000/(now-fpsStart));$('performance').textContent=`${fps} FPS`;
    $('performance').title=`${temple.count.toLocaleString()} 个体素 · ${renderer.info.render.calls} 次绘制`;
    // Cap the pixel load on slower devices without changing scene geometry.
    if(fps<30&&frames>8&&renderer.getPixelRatio()>1){renderer.setPixelRatio(Math.max(1,renderer.getPixelRatio()-.2));}
    frames=0;fpsStart=now;
  }
}
renderer.setAnimationLoop(animate);
document.addEventListener('visibilitychange',()=>{renderer.setAnimationLoop(document.hidden?null:animate);last=performance.now();frames=0;fpsStart=last;});
requestAnimationFrame(()=>{$('loading').classList.add('done');setTimeout(()=>$('loading').hidden=true,550);});
renderer.domElement.addEventListener('webglcontextlost',(event)=>{event.preventDefault();toast('图形连接中断，请刷新页面恢复场景');});
