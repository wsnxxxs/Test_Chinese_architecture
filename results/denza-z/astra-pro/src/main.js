import * as THREE from 'three';
import { createVehicle } from './vehicle.js';
import { createEnvironment,createStudio,createDimensions } from './studio.js';
import { OrbitRig } from './orbit.js';
import { SPEC } from './spec.js';

THREE.ColorManagement.legacyMode=false;
const $=s=>document.querySelector(s), viewport=$('#viewport');
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const renderer=new THREE.WebGLRenderer({antialias:true,alpha:true,powerPreference:'high-performance',preserveDrawingBuffer:false});
renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.65));
renderer.outputEncoding=THREE.sRGBEncoding;renderer.physicallyCorrectLights=true;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=.94;
renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;renderer.shadowMap.autoUpdate=false;renderer.shadowMap.needsUpdate=true;
renderer.setClearColor('#e7eae7',0);viewport.prepend(renderer.domElement);renderer.domElement.setAttribute('aria-label','可旋转的 3D 腾势 Z Racing 赛道版');
const scene=new THREE.Scene();window.__galleryCaptureScene?.(scene);scene.fog=new THREE.Fog('#e7eae7',20,48);
const environmentTarget=createEnvironment(renderer);scene.environment=environmentTarget.texture;

const studio=createStudio(scene),{car,materials}=createVehicle();scene.add(car);
const dimensions=createDimensions();scene.add(dimensions);
let dirty=true,lightsOn=true,dark=false,activeView='front34',toastTimer,visible=true;
const rig=new OrbitRig(viewport,()=>{activeView='free';setViewUI('free');$('#auto-orbit').classList.remove('active');$('#auto-orbit').setAttribute('aria-pressed','false');});
rig.view('hero',true);
function resize(){const r=viewport.getBoundingClientRect();renderer.setSize(r.width,r.height);rig.resize(r.width,r.height);dirty=true;}
const observer=new ResizeObserver(resize);observer.observe(viewport);resize();
const viewNames={hero:['PERSPECTIVE / 01','前侧 3/4'],front34:['PERSPECTIVE / 01','前侧 3/4'],front:['ORTHOGRAPHIC / F','正前 · 正交'],side:['ORTHOGRAPHIC / L','正侧 · 正交'],rear34:['PERSPECTIVE / 02','后侧 3/4'],rear:['ORTHOGRAPHIC / R','车尾 · 正交'],free:['FREE ORBIT / 360°','自由视角'],right:['ORTHOGRAPHIC / R','右侧 · 正交'],top:['ORTHOGRAPHIC / T','俯视 · 正交']};
function setViewUI(name){const text=viewNames[name]||viewNames.free;$('#view-code').textContent=text[0];$('#view-label').textContent=text[1];document.querySelectorAll('[data-view]').forEach(b=>{const active=b.dataset.view===name||(name==='hero'&&b.dataset.view==='front34');b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});}
function setView(name,instant=false){activeView=name;rig.view(name,instant||reducedMotion);setViewUI(name);$('#auto-orbit').classList.remove('active');$('#auto-orbit').setAttribute('aria-pressed','false');dirty=true;}
function toast(text){$('#toast').textContent=text;$('#toast').classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('show'),2300);}
function toggle(button,state){button.classList.toggle('active',state);button.setAttribute('aria-pressed',String(state));}
document.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>setView(b.dataset.view)));
$('#reset').addEventListener('click',()=>{setView('hero');toast('已复位至完整车辆视角');});
$('#auto-orbit').addEventListener('click',()=>{rig.autoRotate=!rig.autoRotate;toggle($('#auto-orbit'),rig.autoRotate);if(rig.autoRotate){setViewUI('free');activeView='free';}dirty=true;});
$('#zoom-in').addEventListener('click',()=>rig.zoom(.88));$('#zoom-out').addEventListener('click',()=>rig.zoom(1.14));
$('#dimensions').addEventListener('click',()=>{dimensions.visible=!dimensions.visible;toggle($('#dimensions'),dimensions.visible);dirty=true;toast(dimensions.visible?'尺寸为任务参考值；单位：毫米':'已隐藏参考尺寸');});
$('#car-light').addEventListener('click',()=>{lightsOn=!lightsOn;materials.whiteLED.emissiveIntensity=lightsOn?3:0;materials.redLED.emissiveIntensity=lightsOn?1.7:0;materials.whiteLED.color.set(lightsOn?'#e7f7ff':'#43545d');materials.redLED.color.set(lightsOn?'#b90821':'#4d0612');toggle($('#car-light'),lightsOn);dirty=true;});
$('#studio-light').addEventListener('click',()=>{
  dark=!dark;document.body.classList.toggle('dark',dark);$('#studio-light').setAttribute('aria-pressed',String(dark));$('#studio-light use').setAttribute('href',dark?'#i-moon':'#i-sun');
  studio.floorMaterial.color.set(dark?'#171d24':'#e7eae7');studio.podiumMaterial.color.set(dark?'#252c33':'#aeb9b2');scene.fog.color.set(dark?'#171d24':'#e7eae7');
  studio.key.intensity=dark?.70:.85;studio.fill.intensity=dark?.70:.8;studio.ambient.intensity=dark?.22:.65;studio.rim.intensity=dark?1.4:.55;for(const m of Object.values(materials)) m.envMapIntensity=(m===materials.paint?.85:1)*(dark?.72:1);renderer.toneMappingExposure=dark?.80:.94;
  renderer.shadowMap.needsUpdate=true;dirty=true;toast(dark?'暗调影棚 / NIGHT STUDIO':'明亮影棚 / DAY STUDIO');
});
document.querySelectorAll('[data-paint]').forEach(b=>b.addEventListener('click',()=>{materials.paint.color.set(b.dataset.paint);document.querySelectorAll('[data-paint]').forEach(s=>toggle(s,s===b));$('#paint-name').textContent=b.dataset.name;dirty=true;}));
$('#fullscreen').addEventListener('click',async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else if(document.documentElement.requestFullscreen)await document.documentElement.requestFullscreen();else toast('当前浏览器不支持全屏接口');}catch{toast('浏览器暂未允许全屏');}});
$('#capture').addEventListener('click',()=>{
  renderer.render(scene,rig.camera);renderer.domElement.toBlob(blob=>{if(!blob){toast('无法生成截图');return;}const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=`DENZA-Z-Racing-${activeView}.png`;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);toast('当前视角已保存为 PNG');},'image/png');
});
window.addEventListener('keydown',e=>{if(['INPUT','TEXTAREA','SELECT'].includes(document.activeElement?.tagName)||e.ctrlKey||e.metaKey||e.altKey)return;
  const key=e.key.toLowerCase();if(['1','2','3','4','5'].includes(key))setView(['front','side','front34','rear34','rear'][Number(key)-1]);
  else if(key==='r')$('#reset').click();else if(key==='d')$('#dimensions').click();else if(key==='l')$('#car-light').click();else if(key===' '){e.preventDefault();$('#auto-orbit').click();}else if(key==='+'||key==='=')rig.zoom(.88);else if(key==='-')rig.zoom(1.14);
});
document.addEventListener('visibilitychange',()=>{visible=!document.hidden;if(visible){dirty=true;lastTime=performance.now();}});
renderer.domElement.addEventListener('webglcontextlost',e=>{e.preventDefault();$('#error-panel').hidden=false;$('#error-message').textContent='WebGL 上下文已丢失，请重新加载页面。';$('#runtime-status').textContent='CONTEXT LOST';});
let lastTime=performance.now(),renderedFrames=0;
function frame(time){requestAnimationFrame(frame);const dt=Math.min((time-lastTime)/1000,.06);lastTime=time;if(!visible)return;const moving=rig.update(dt);if(dirty||moving){renderer.render(scene,rig.camera);renderedFrames++;dirty=false;}}
// Compile and render before dismissing the loader: opening the page shows the entire car.
renderer.compile(scene,rig.camera);renderer.render(scene,rig.camera);$('#loader').hidden=true;$('#runtime-status').textContent='WEBGL / LIVE';setViewUI('front34');requestAnimationFrame(frame);
function diagnostics(){const bound=new THREE.Box3().setFromObject(car);let meshes=0,triangles=0,invalid=0;car.traverse(o=>{if(o.isMesh){meshes++;const g=o.geometry;triangles+=(g.index?g.index.count:g.attributes.position.count)/3*(o.isInstancedMesh?o.count:1);for(const n of g.attributes.position.array)if(!Number.isFinite(n))invalid++;}});return {ready:true,threeRevision:THREE.REVISION,spec:SPEC,bounds:{min:bound.min.toArray(),max:bound.max.toArray()},meshes,triangles,invalidVertices:invalid,drawCalls:renderer.info.render.calls,renderedFrames,projection:rig.projection,view:activeView,lightsOn,dark,dimensions:dimensions.visible,pixelRatio:renderer.getPixelRatio()};}
window.__DENZA_STUDIO__={ready:true,scene,car,materials,renderer,rig,setView,diagnostics,render:()=>{renderer.render(scene,rig.camera);dirty=true;}};
window.addEventListener('pagehide',()=>{observer.disconnect();rig.dispose();environmentTarget.dispose();renderer.dispose();},{once:true});
