import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { createSceneData } from './scene-data.js';
import { roofFootprint } from './layout.js';
import { randomGenerator } from './palette.js';

const THEMES = {
  dawn: { background:'#e7e1d2', floor:'#d5d0bb', sun:'#ffdaa5', sunIntensity:3.35, hemi:'#e0eddf', ground:'#777959', hemiIntensity:1.95, exposure:1.08, light:[-64,91,48], glow:.35, points:4, caption:'卯时 · 晨光初照' },
  sunset: { background:'#d9c1ae', floor:'#bca58e', sun:'#ffad73', sunIntensity:3.45, hemi:'#c8cad9', ground:'#775b51', hemiIntensity:1.75, exposure:1.05, light:[-82,55,10], glow:1.2, points:32, caption:'酉时 · 斜阳入檐' },
  night: { background:'#20313d', floor:'#263b43', sun:'#b7d4ee', sunIntensity:1.6, hemi:'#9cafc4', ground:'#415f59', hemiIntensity:1.85, exposure:.94, light:[-45,94,-48], glow:2.4, points:110, caption:'亥时 · 月落灯明' },
};
const $ = (selector) => document.querySelector(selector);
const ease = (t) => 1 - Math.pow(1-t,3);
const clamp = THREE.MathUtils.clamp;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export async function init() {
  const container = $('#scene');
  const renderer = new THREE.WebGLRenderer({ antialias:true, alpha:false, powerPreference:'high-performance', preserveDrawingBuffer:false });
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = THEMES.dawn.exposure;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.shadowMap.autoUpdate = false;
  renderer.domElement.setAttribute('aria-label','可交互的云阙古寺三维体素场景');
  renderer.domElement.setAttribute('role','img');
  container.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(THEMES.dawn.background);
  scene.fog = new THREE.Fog(THEMES.dawn.background,260,620);
  const camera = new THREE.OrthographicCamera(-100,100,70,-70,.1,800);
  const HOME = { position:new THREE.Vector3(118,136,151), target:new THREE.Vector3(0,3,0), zoom:1 };
  camera.position.copy(HOME.position);
  const controls = new OrbitControls(camera,renderer.domElement);
  controls.target.copy(HOME.target);
  controls.enableDamping = true;
  controls.dampingFactor = .075;
  controls.rotateSpeed = .55;
  controls.zoomSpeed = .85;
  controls.panSpeed = .7;
  controls.minPolarAngle = .12;
  controls.maxPolarAngle = Math.PI * .445;
  controls.minZoom = .65;
  controls.maxZoom = 5;
  controls.autoRotateSpeed = .38;
  controls.screenSpacePanning = false;
  controls.update();

  const hemi = new THREE.HemisphereLight(THEMES.dawn.hemi,THEMES.dawn.ground,THEMES.dawn.hemiIntensity);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight(THEMES.dawn.sun,THEMES.dawn.sunIntensity);
  sun.position.fromArray(THEMES.dawn.light);
  sun.castShadow = true;
  Object.assign(sun.shadow.camera,{left:-86,right:86,top:88,bottom:-88,near:1,far:270});
  sun.shadow.bias = -.00018;
  sun.shadow.normalBias = .13;
  sun.shadow.mapSize.set(2048,2048);
  sun.shadow.camera.updateProjectionMatrix();
  scene.add(sun); scene.add(sun.target);

  const floorMaterial = new THREE.MeshStandardMaterial({color:THEMES.dawn.floor,roughness:1,metalness:0});
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(1500,1500),floorMaterial);
  floor.rotation.x = -Math.PI/2;
  floor.position.y = -3.28;
  floor.receiveShadow = true;
  scene.add(floor);

  // Yield once so loading text paints before synchronous procedural generation.
  await new Promise(resolve => requestAnimationFrame(resolve));
  const data = createSceneData();
  const geometries = new Set(), materials = new Set(), textures = new Set();
  const cube = new THREE.BoxGeometry(1,1,1);
  geometries.add(cube);
  // A subtle per-face value variation preserves voxel readability in ambient light.
  const normals = cube.getAttribute('normal');
  const vertexColors = new Float32Array(normals.count*3);
  for(let i=0;i<normals.count;i++) {
    const nx=normals.getX(i),ny=normals.getY(i),nz=normals.getZ(i);
    const value = ny>.5 ? 1 : ny<-.5 ? .62 : nx>.5 ? .94 : nx<-.5 ? .86 : nz>.5 ? .97 : .89;
    vertexColors.set([value,value,value],i*3);
  }
  cube.setAttribute('color',new THREE.BufferAttribute(vertexColors,3));

  const solidMaterial = new THREE.MeshStandardMaterial({color:0xffffff,roughness:.92,metalness:0,vertexColors:true});
  const groundMaterial = new THREE.MeshStandardMaterial({color:0xffffff,roughness:1,vertexColors:true});
  const waterMaterial = new THREE.MeshStandardMaterial({color:0xffffff,roughness:.3,metalness:.12,vertexColors:true,emissive:'#274d47',emissiveIntensity:.13});
  const glowMaterial = new THREE.MeshStandardMaterial({color:0xffffff,roughness:.8,vertexColors:true,emissive:'#ffc16e',emissiveIntensity:.35});
  const rippleMaterial = new THREE.MeshBasicMaterial({color:0xffffff,vertexColors:true,transparent:true,opacity:.6,depthWrite:false});
  const materialMap = {solid:solidMaterial,ground:groundMaterial,water:waterMaterial,glow:glowMaterial,waterDetail:rippleMaterial};
  Object.values(materialMap).forEach(m=>materials.add(m));
  materials.add(floorMaterial); geometries.add(floor.geometry);

  const transform = new THREE.Object3D();
  const instanceColor = new THREE.Color();
  const pooled = new Map();
  for(const voxel of data.boxes) {
    if(!pooled.has(voxel.group)) pooled.set(voxel.group,[]);
    pooled.get(voxel.group).push(voxel);
  }
  const instanceMeshes=[];
  for(const [group,items] of pooled) {
    const mesh = new THREE.InstancedMesh(cube,materialMap[group],items.length);
    mesh.name=`voxel-${group}`;
    mesh.castShadow=group==='solid';
    mesh.receiveShadow=group!=='glow' && group!=='waterDetail';
    if(group==='waterDetail') mesh.renderOrder=2;
    for(let i=0;i<items.length;i++) {
      const v=items[i];
      transform.position.set(v.x,v.y,v.z);
      transform.rotation.set(0,v.rotation,0);
      transform.scale.set(v.sx,v.sy,v.sz);
      transform.updateMatrix();
      mesh.setMatrixAt(i,transform.matrix);
      mesh.setColorAt(i,instanceColor.set(v.color));
    }
    mesh.instanceMatrix.setUsage(THREE.StaticDrawUsage);
    mesh.instanceMatrix.needsUpdate=true;
    mesh.instanceColor.needsUpdate=true;
    mesh.computeBoundingBox(); mesh.computeBoundingSphere();
    scene.add(mesh); instanceMeshes.push(mesh);
  }
  // Plaques are generated with browser fonts, never a network font dependency.
  for(const plaque of data.plaques) {
    const canvas=document.createElement('canvas'); canvas.width=768;canvas.height=192;
    const ctx=canvas.getContext('2d');
    if(!ctx) continue;
    ctx.fillStyle='#263f39';ctx.fillRect(0,0,768,192);
    ctx.strokeStyle='#d4ae64';ctx.lineWidth=8;ctx.strokeRect(7,7,754,178);
    ctx.lineWidth=2;ctx.strokeRect(20,20,728,152);
    ctx.fillStyle='#efd699';ctx.textAlign='center';ctx.textBaseline='middle';
    ctx.font='600 98px "Songti SC", "Noto Serif CJK SC", "SimSun", serif';
    const chars=[...plaque.text];
    const spacing=Math.min(145,560/chars.length);
    chars.forEach((char,i)=>ctx.fillText(char,384+(i-(chars.length-1)/2)*spacing,102));
    const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;
    texture.anisotropy=Math.min(4,renderer.capabilities.getMaxAnisotropy());
    textures.add(texture);
    const mat=new THREE.MeshStandardMaterial({map:texture,roughness:.88});materials.add(mat);
    const geom=new THREE.PlaneGeometry(plaque.width,plaque.width/4);geometries.add(geom);
    const mesh=new THREE.Mesh(geom,mat);
    mesh.position.set(plaque.x+Math.sin(plaque.rotation)*plaque.localZ,plaque.y,plaque.z+Math.cos(plaque.rotation)*plaque.localZ);
    mesh.rotation.y=plaque.rotation;scene.add(mesh);
  }

  // Only four unshadowed point lights; lantern meshes share one emissive batch.
  const localLights=[];
  for(const position of [[-8,5,-6],[8,5,-6],[0,4,42],[0,3.8,22]]) {
    const light=new THREE.PointLight('#ffb15c',4,27,2);light.position.fromArray(position);scene.add(light);localLights.push(light);
  }
  const R=randomGenerator(924), moteCount=80;
  const motePositions=new Float32Array(moteCount*3);
  const moteBase=new Float32Array(moteCount*3);
  for(let i=0;i<moteCount;i++) moteBase.set([(R()-.5)*85,1+R()*15,(R()-.5)*88],i*3);
  motePositions.set(moteBase);
  const moteGeometry=new THREE.BufferGeometry();moteGeometry.setAttribute('position',new THREE.BufferAttribute(motePositions,3).setUsage(THREE.DynamicDrawUsage));
  const moteMaterial=new THREE.PointsMaterial({color:'#ebd4a0',size:.15,transparent:true,opacity:.5,depthWrite:false,sizeAttenuation:true});
  const motes=new THREE.Points(moteGeometry,moteMaterial);motes.frustumCulled=false;scene.add(motes);
  geometries.add(moteGeometry);materials.add(moteMaterial);
  const smokeCount=24,smokePositions=new Float32Array(smokeCount*3);
  const smokeGeometry=new THREE.BufferGeometry();smokeGeometry.setAttribute('position',new THREE.BufferAttribute(smokePositions,3).setUsage(THREE.DynamicDrawUsage));
  const smokeMaterial=new THREE.PointsMaterial({color:'#d9d7bc',size:.13,transparent:true,opacity:.25,depthWrite:false});
  const smoke=new THREE.Points(smokeGeometry,smokeMaterial);smoke.frustumCulled=false;scene.add(smoke);
  geometries.add(smokeGeometry);materials.add(smokeMaterial);

  const selectionGeometry=new THREE.BufferGeometry();
  const selectionMaterial=new THREE.LineBasicMaterial({color:'#bc9254',transparent:true,opacity:.65});
  const selection=new THREE.LineLoop(selectionGeometry,selectionMaterial);selection.visible=false;scene.add(selection);
  geometries.add(selectionGeometry);materials.add(selectionMaterial);
  const bounds=data.buildings.map(b=>{
    const f=roofFootprint(b);
    return {building:b,box:new THREE.Box3(new THREE.Vector3(b.x-f.w/2,0,b.z-f.d/2),new THREE.Vector3(b.x+f.w/2,b.height,b.z+f.d/2))};
  });
  // Eleven box intersections, not 28k instance intersections, for fast picking.
  const raycaster=new THREE.Raycaster(),pointer=new THREE.Vector2(),intersection=new THREE.Vector3();
  const labels=new Map(),mapElements=new Map();
  const mapGroup=$('#map-buildings');
  for(const b of data.buildings) {
    const label=document.createElement('button');label.className='building-label';
    label.innerHTML=`<b>${b.number}</b><span>${b.name}</span>`;label.setAttribute('aria-label',`走近${b.name}`);
    label.addEventListener('click',()=>focusBuilding(b.id));label.hidden=true;
    $('#labels').appendChild(label);labels.set(b.id,label);
    const footprint=roofFootprint(b);
    const rect=document.createElementNS('http://www.w3.org/2000/svg','rect');
    rect.setAttribute('x',String(72+(b.x-footprint.w/2)*1.14));
    rect.setAttribute('y',String(65+(b.z-footprint.d/2)*1.12));
    rect.setAttribute('width',String(footprint.w*1.14));rect.setAttribute('height',String(footprint.d*1.12));
    rect.setAttribute('class','map-building'+(b.id==='main'?' main-building':''));
    rect.setAttribute('role','button');rect.setAttribute('tabindex','0');rect.setAttribute('aria-label',b.name);
    const title=document.createElementNS('http://www.w3.org/2000/svg','title');title.textContent=b.name;rect.appendChild(title);
    rect.addEventListener('click',()=>focusBuilding(b.id));
    rect.addEventListener('keydown',(e)=>{if(e.key==='Enter'||e.code==='Space'){e.preventDefault();focusBuilding(b.id);}});
    mapGroup.appendChild(rect);mapElements.set(b.id,rect);
  }

  let width=innerWidth,height=innerHeight,dpr=1,quality='auto',theme='dawn';
  let cameraTween=null,themeTween=null,selected=null,showLabels=false,raf=0,lastTime=0,disposed=false;
  let elapsed=0,frames=0,lastFpsTime=0,fps=0,totalFrames=0,adaptiveCooldown=0;
  const frameTimes=[];
  let toastTimer;
  function toast(text) { clearTimeout(toastTimer);$('#toast').textContent=text;$('#toast').classList.add('visible');toastTimer=setTimeout(()=>$('#toast').classList.remove('visible'),2600); }
  function invalidateShadows() {sun.shadow.needsUpdate=true;renderer.shadowMap.needsUpdate=true;}
  function qualitySettings(resizeOnly=false) {
    const maxDpr=quality==='high'?2:quality==='performance'?1:1.5;
    const maxPixels=quality==='high'?3_100_000:quality==='performance'?950_000:1_850_000;
    dpr=Math.max(.65,Math.min(window.devicePixelRatio||1,maxDpr,Math.sqrt(maxPixels/(width*height))));
    renderer.setPixelRatio(dpr);renderer.setSize(width,height,false);
    const shadowSize=(quality==='performance'||width<650)?1024:2048;
    if(sun.shadow.mapSize.x!==shadowSize) {
      sun.shadow.mapSize.set(shadowSize,shadowSize);
      if(sun.shadow.map){sun.shadow.map.dispose();sun.shadow.map=null;}
      invalidateShadows();
    }
    if(!resizeOnly) {$('#quality').textContent={auto:'自动画质',high:'高画质',performance:'流畅优先'}[quality];adaptiveCooldown=performance.now()+5000;}
  }
  function resize() {
    width=container.clientWidth;height=container.clientHeight;
    if(!width||!height) return;
    const aspect=width/height,viewHeight=Math.max(137,160/aspect);
    const shift=width>1000?viewHeight*.12:width>700?viewHeight*.08:0;
    camera.left=-viewHeight*aspect/2-shift;camera.right=viewHeight*aspect/2-shift;
    camera.top=viewHeight/2;camera.bottom=-viewHeight/2;camera.updateProjectionMatrix();
    qualitySettings(true);
  }
  const resizeObserver=new ResizeObserver(resize);resizeObserver.observe(container);resize();
  qualitySettings();invalidateShadows();

  function tour(state=!controls.autoRotate) {controls.autoRotate=state;$('#tour').setAttribute('aria-pressed',String(state));if(state) cameraTween=null;}
  function transitionCamera(target,position,zoom) {
    tour(false);
    cameraTween={start:performance.now(),duration:reduceMotion?0:1150,fromTarget:controls.target.clone(),fromPosition:camera.position.clone(),fromZoom:camera.zoom,toTarget:target,toPosition:position,toZoom:zoom};
  }
  function clearSelection() {
    selected=null;selection.visible=false;
    mapElements.forEach(el=>el.classList.remove('active'));labels.forEach(el=>el.classList.remove('selected'));
    $('#story-counter').textContent='一 / 山门之外';$('#story-title').textContent='一方天地，千年营造。';
    $('#story-description').textContent='循中轴而入，过山门、钟鼓，抵达重檐大殿。十一座殿宇，在松风与晨光里徐徐展开。';
    $('#story-close').hidden=true;$('#explore-main').hidden=false;
  }
  function home() {clearSelection();transitionCamera(HOME.target.clone(),HOME.position.clone(),1);}
  function focusBuilding(id) {
    const building=data.buildings.find(b=>b.id===id);if(!building)return;
    selected=id;
    $('#story-counter').textContent=`${building.number} / ${building.name}`;$('#story-title').textContent=building.title;
    $('#story-description').textContent=building.description;$('#story-close').hidden=false;$('#explore-main').hidden=true;
    mapElements.forEach((el,key)=>el.classList.toggle('active',key===id));labels.forEach((el,key)=>el.classList.toggle('selected',key===id));
    const footprint=roofFootprint(building),w=footprint.w/2+.8,d=footprint.d/2+.8;
    selectionGeometry.setFromPoints([[-w,-d],[w,-d],[w,d],[-w,d]].map(([x,z])=>new THREE.Vector3(building.x+x,.48,building.z+z)));
    selection.visible=true;
    const target=new THREE.Vector3(building.x,Math.max(3,building.height*.27),building.z);
    const offset=camera.position.clone().sub(controls.target);
    const zoom=width<700?2.75:building.kind==='main'?1.9:2.35;
    transitionCamera(target,target.clone().add(offset),zoom);
    if(width<850) toast(`${building.name} · ${building.title}`);
  }
  function setTheme(name,notify=false) {
    if(!(name in THEMES))return;
    theme=name;const dest=THEMES[name];document.body.dataset.theme=name;
    document.querySelectorAll('[data-time]').forEach(button=>{const active=button.dataset.time===name;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));});
    $('#theme-caption').textContent=dest.caption;
    themeTween={start:performance.now(),duration:reduceMotion?0:1400,
      from:{background:scene.background.clone(),floor:floorMaterial.color.clone(),sun:sun.color.clone(),sunIntensity:sun.intensity,hemi:hemi.color.clone(),ground:hemi.groundColor.clone(),hemiIntensity:hemi.intensity,exposure:renderer.toneMappingExposure,glow:glowMaterial.emissiveIntensity,points:localLights[0].intensity},
      to:{...dest,background:new THREE.Color(dest.background),floor:new THREE.Color(dest.floor),sun:new THREE.Color(dest.sun),hemi:new THREE.Color(dest.hemi),ground:new THREE.Color(dest.ground)}};
    // Only the light's color/intensity interpolate. Its fixed position changes once,
    // so orbiting and the subsequent color transition can reuse the cached shadow.
    sun.position.fromArray(dest.light);invalidateShadows();
    if(notify)toast(dest.caption);
  }
  function toggleLabels() {showLabels=!showLabels;$('#toggle-labels').setAttribute('aria-pressed',String(showLabels));$('#labels').setAttribute('aria-hidden',String(!showLabels&&!selected));}
  function cycleQuality() {quality={auto:'high',high:'performance',performance:'auto'}[quality];qualitySettings();toast(`渲染质量：${$('#quality').textContent}`);}
  function capture() {
    renderer.render(scene,camera);
    try { renderer.domElement.toBlob(blob=>{
      if(!blob){toast('画面保存失败，请稍后再试');return;}
      const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;
      a.download=`云阙-${{dawn:'晨曦',sunset:'日暮',night:'月夜'}[theme]}-${new Date().toISOString().replace(/[:.]/g,'-')}.png`;
      a.click();setTimeout(()=>URL.revokeObjectURL(url),10000);toast('已保存当前三维画面');
    },'image/png'); } catch(error) {console.error(error);toast('浏览器未能导出画面');}
  }
  const abort=new AbortController(),listen=(el,event,fn)=>el.addEventListener(event,fn,{signal:abort.signal});
  for(const button of document.querySelectorAll('[data-time]')) listen(button,'click',()=>setTheme(button.dataset.time));
  listen($('#tour'),'click',()=>tour());listen($('#reset'),'click',home);listen($('#toggle-labels'),'click',toggleLabels);
  listen($('#quality'),'click',cycleQuality);listen($('#capture'),'click',capture);listen($('#explore-main'),'click',()=>focusBuilding('main'));
  listen($('#story-close'),'click',clearSelection);
  listen($('#fullscreen'),'click',async()=>{
    try {if(document.fullscreenElement)await document.exitFullscreen();else await $('#app').requestFullscreen();}
    catch{toast('当前浏览器不支持全屏切换');}
  });
  listen(document,'keydown',e=>{
    if($('#help-dialog').open||e.ctrlKey||e.metaKey||e.altKey||/INPUT|TEXTAREA|SELECT/.test(e.target.tagName))return;
    // Space/Enter on focused buttons retain native keyboard activation.
    if(e.code==='Space'&&(e.target.tagName==='BUTTON'||e.target.getAttribute?.('role')==='button'))return;
    if(['1','2','3'].includes(e.key))setTheme(['dawn','sunset','night'][Number(e.key)-1],true);
    else if(e.code==='Space'){e.preventDefault();tour();}
    else if(e.key.toLowerCase()==='h')home();else if(e.key.toLowerCase()==='l')toggleLabels();
    else if(e.key.toLowerCase()==='p')capture();else if(e.key==='Escape')clearSelection();
  });
  let down=null,lastHover=0;
  function hitTest(event) {
    const r=renderer.domElement.getBoundingClientRect();pointer.set((event.clientX-r.left)/r.width*2-1,-(event.clientY-r.top)/r.height*2+1);
    raycaster.setFromCamera(pointer,camera);
    let closest=null,distance=Infinity;
    for(const item of bounds) if(raycaster.ray.intersectBox(item.box,intersection)) {
      const d=intersection.distanceTo(raycaster.ray.origin);if(d<distance){distance=d;closest=item.building;}
    }
    return closest;
  }
  listen(renderer.domElement,'pointerdown',e=>{down={x:e.clientX,y:e.clientY,button:e.button,pointerId:e.pointerId,time:performance.now()};});
  listen(renderer.domElement,'pointerup',e=>{
    if(down&&e.pointerId===down.pointerId&&down.button===0&&Math.hypot(e.clientX-down.x,e.clientY-down.y)<5&&performance.now()-down.time<600){const hit=hitTest(e);if(hit)focusBuilding(hit.id);}
    down=null;
  });
  listen(renderer.domElement,'pointercancel',()=>{down=null;});
  listen(renderer.domElement,'pointermove',e=>{if(down||performance.now()-lastHover<100)return;lastHover=performance.now();renderer.domElement.style.cursor=hitTest(e)?'pointer':'grab';});
  controls.addEventListener('start',()=>{cameraTween=null;if(controls.autoRotate)tour(false);});
  listen(renderer.domElement,'webglcontextlost',e=>{e.preventDefault();cancelAnimationFrame(raf);toast('图形上下文中断，正在等待浏览器恢复');$('#fps').textContent='渲染暂停';});
  listen(renderer.domElement,'webglcontextrestored',()=>{invalidateShadows();lastTime=0;raf=requestAnimationFrame(animate);toast('三维渲染已恢复');});

  const projected=new THREE.Vector3();
  function updateLabels() {
    $('#labels').setAttribute('aria-hidden',String(!showLabels&&!selected));
    for(const b of data.buildings) {
      const label=labels.get(b.id);
      if(!showLabels&&selected!==b.id){label.hidden=true;continue;}
      projected.set(b.x,b.height+.8,b.z).project(camera);
      const x=(projected.x*.5+.5)*width,y=(-projected.y*.5+.5)*height;
      const blockedByIntro=width>850&&x<300&&y<520;
      label.hidden=projected.z<-1||projected.z>1||x<25||x>width-25||y<85||y>height-115||blockedByIntro;
      if(!label.hidden)label.style.transform=`translate(${x.toFixed(1)}px,${y.toFixed(1)}px) translate(-50%,-100%)`;
    }
    const angle=Math.atan2(camera.position.x-controls.target.x,camera.position.z-controls.target.z);
    $('#map-camera').setAttribute('transform',`translate(${72+Math.sin(angle)*60},${65+Math.cos(angle)*62}) rotate(${-THREE.MathUtils.radToDeg(angle)})`);
  }
  function getStats() {
    const sorted=[...frameTimes].sort((a,b)=>a-b),n=sorted.length;
    const context=renderer.getContext(),ext=context.getExtension('WEBGL_debug_renderer_info');
    return {ready:document.body.dataset.state==='ready',threeRevision:THREE.REVISION,buildings:data.stats.buildings,voxels:data.stats.voxels,trees:data.stats.trees,
      instancedBatches:instanceMeshes.length,drawCalls:renderer.info.render.calls,triangles:renderer.info.render.triangles,
      fps:Number(fps.toFixed(1)),frameMsMedian:n?Number(sorted[Math.floor(n*.5)].toFixed(2)):0,frameMsP95:n?Number(sorted[Math.min(n-1,Math.floor(n*.95))].toFixed(2)):0,
      resolution:[renderer.domElement.width,renderer.domElement.height],pixelRatio:Number(dpr.toFixed(2)),quality,theme,autoRotate:controls.autoRotate,labels:showLabels,
      selected,renderer:ext?context.getParameter(ext.UNMASKED_RENDERER_WEBGL):'WebGL 2',totalFrames};
  }
  async function benchmark({seconds=30,rotate=true,rotateSpeed=2}={}) {
    seconds=clamp(Number(seconds)||30,3,60);
    if(document.hidden) return {error:'Keep this page visible while measuring frame cadence.'};
    const wasRotating=controls.autoRotate,previousSpeed=controls.autoRotateSpeed;
    cameraTween=null;controls.autoRotateSpeed=clamp(Number(rotateSpeed)||2,.1,8);tour(rotate);
    const samples=[];let previous=performance.now(),start=previous;
    const restore=()=>{controls.autoRotateSpeed=previousSpeed;tour(wasRotating);};
    return new Promise(resolve=>{
      const sample=(time)=>{
        if(disposed){resolve({error:'Scene disposed'});return;}
        if(document.hidden){restore();resolve({error:'Measurement interrupted: the page became hidden.'});return;}
        samples.push(time-previous);previous=time;
        if(time-start<seconds*1000)requestAnimationFrame(sample);
        else {
          const sorted=samples.slice(1).sort((a,b)=>a-b),total=samples.reduce((a,b)=>a+b,0);
          const result={...getStats(),durationSeconds:(time-start)/1000,frameSamples:samples.length,
            averageFPS:samples.length*1000/total,p95FrameMs:sorted[Math.min(sorted.length-1,Math.floor(sorted.length*.95))],
            benchmarkRotationSpeed:controls.autoRotateSpeed,
            note:'Measured requestAnimationFrame cadence in this browser; hardware and viewport dependent.'};
          restore();resolve(result);
        }
      };requestAnimationFrame(sample);
    });
  }
  window.__YUNQUE__={getStats,benchmark,setTheme,focusBuilding,reset:home,tour,toggleLabels,capture,
    setQuality:value=>{if(['auto','high','performance'].includes(value)){quality=value;qualitySettings();}},
    // A JSON-friendly camera snapshot is useful for reproducing a review view.
    getCamera:()=>({position:camera.position.toArray(),target:controls.target.toArray(),zoom:camera.zoom}),
    dispose:()=>{disposed=true;cancelAnimationFrame(raf);clearTimeout(toastTimer);abort.abort();resizeObserver.disconnect();controls.dispose();
      instanceMeshes.forEach(m=>m.dispose());materials.forEach(m=>m.dispose());textures.forEach(t=>t.dispose());geometries.forEach(g=>g.dispose());
      renderer.dispose();renderer.domElement.remove();labels.forEach(label=>label.remove());mapElements.forEach(el=>el.remove());},
  };

  function animate(now) {
    if(disposed||document.hidden)return;
    const rawDt=lastTime?Math.max(.001,(now-lastTime)/1000):1/60,dt=Math.min(rawDt,.06);lastTime=now;
    elapsed+=dt;totalFrames++;frames++;
    if(totalFrames>45) {frameTimes.push(rawDt*1000);if(frameTimes.length>300)frameTimes.shift();}
    if(cameraTween) {
      const t=cameraTween.duration?clamp((now-cameraTween.start)/cameraTween.duration,0,1):1,k=ease(t);
      camera.position.lerpVectors(cameraTween.fromPosition,cameraTween.toPosition,k);
      controls.target.lerpVectors(cameraTween.fromTarget,cameraTween.toTarget,k);
      camera.zoom=THREE.MathUtils.lerp(cameraTween.fromZoom,cameraTween.toZoom,k);camera.updateProjectionMatrix();
      if(t>=1)cameraTween=null;
    }
    controls.update(dt);
    // Keep pan within the physical diorama, including very tall pagoda focus targets.
    controls.target.x=clamp(controls.target.x,-55,55);controls.target.z=clamp(controls.target.z,-57,57);controls.target.y=clamp(controls.target.y,0,28);
    if(themeTween) {
      const t=themeTween.duration?clamp((now-themeTween.start)/themeTween.duration,0,1):1,k=ease(t),a=themeTween.from,b=themeTween.to;
      scene.background.lerpColors(a.background,b.background,k);scene.fog.color.copy(scene.background);
      floorMaterial.color.lerpColors(a.floor,b.floor,k);sun.color.lerpColors(a.sun,b.sun,k);
      hemi.color.lerpColors(a.hemi,b.hemi,k);hemi.groundColor.lerpColors(a.ground,b.ground,k);
      sun.intensity=THREE.MathUtils.lerp(a.sunIntensity,b.sunIntensity,k);hemi.intensity=THREE.MathUtils.lerp(a.hemiIntensity,b.hemiIntensity,k);
      renderer.toneMappingExposure=THREE.MathUtils.lerp(a.exposure,b.exposure,k);glowMaterial.emissiveIntensity=THREE.MathUtils.lerp(a.glow,b.glow,k);
      localLights.forEach(light=>{light.intensity=THREE.MathUtils.lerp(a.points,b.points,k);});
      if(t>=1)themeTween=null;
    }
    if(!reduceMotion) {
      for(let i=0;i<moteCount;i++) {
        motePositions[i*3]=moteBase[i*3]+Math.sin(elapsed*.14+i)*.6;
        motePositions[i*3+1]=1+(moteBase[i*3+1]+elapsed*.14)%16;
        motePositions[i*3+2]=moteBase[i*3+2]+Math.cos(elapsed*.1+i*.7)*.4;
      }
      moteGeometry.attributes.position.needsUpdate=true;
      for(let i=0;i<smokeCount;i++) {
        const t=(elapsed*.21+i/smokeCount)%1;
        smokePositions[i*3]=Math.sin(t*6+i*.1)*(.03+t*.3);smokePositions[i*3+1]=2.75+t*2.1;smokePositions[i*3+2]=2.2+Math.cos(t*7+i*.2)*t*.2;
      }
      smokeGeometry.attributes.position.needsUpdate=true;
      rippleMaterial.opacity=.53+Math.sin(elapsed*.7)*.09;
    } else {smoke.visible=false;}
    updateLabels();renderer.render(scene,camera);
    if(now-lastFpsTime>1100) {
      if(lastFpsTime)fps=frames*1000/(now-lastFpsTime);
      frames=0;lastFpsTime=now;
      if(fps>0)$('#fps').textContent=`${Math.round(fps)} FPS`;
      const stats=getStats();
      $('#diagnostics').textContent=`Three.js r${THREE.REVISION} · ${data.stats.voxels.toLocaleString()} voxels · ${stats.instancedBatches} instance batches · ${stats.drawCalls} draw calls\n${stats.resolution.join(' × ')} · DPR ${stats.pixelRatio} · ${stats.renderer}`;
      if(quality==='auto'&&now>adaptiveCooldown&&fps>0&&fps<32&&dpr>.66) {
        dpr=Math.max(.65,dpr*.82);renderer.setPixelRatio(dpr);renderer.setSize(width,height,false);adaptiveCooldown=now+4500;
      }
    }
    raf=requestAnimationFrame(animate);
  }
  listen(document,'visibilitychange',()=>{
    cancelAnimationFrame(raf);lastTime=0;lastFpsTime=0;frames=0;
    if(!document.hidden)raf=requestAnimationFrame(animate);
  });
  // Explicit compilation avoids first-orbit shader compilation stalls.
  if(renderer.compileAsync)await renderer.compileAsync(scene,camera);else renderer.compile(scene,camera);
  renderer.render(scene,camera);
  $('#voxel-count').textContent=`${data.stats.voxels.toLocaleString('en-US')} VOXELS`;
  document.body.dataset.state='ready';
  $('#loading-text').textContent='云阙已展开';
  lastTime=0;raf=requestAnimationFrame(animate);
}
