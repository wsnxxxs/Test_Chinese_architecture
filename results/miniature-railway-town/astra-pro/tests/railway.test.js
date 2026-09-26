import test from 'node:test';
import assert from 'node:assert/strict';
import { TRACK, TRACK_LENGTH, SEGMENT_ENDS, sampleRoute, wrap, distanceToTrack, vehiclePose,
  VEHICLE_OFFSETS, STATION_DISTANCE, START_DISTANCE, BASE_SPEED, DWELL_SECONDS,
  RailwaySimulation, riverCenter, onRiver } from '../src/route.js';
import { BUILDINGS, STATION_PLATFORM, STREETS } from '../src/layout.js';

const near=(actual,expected,tolerance=1e-8)=>assert.ok(Math.abs(actual-expected)<=tolerance,`${actual} is not within ${tolerance} of ${expected}`);
const distance=(a,b)=>Math.hypot(a.x-b.x,a.z-b.z);

function rectangle(pose,halfLength=.88,halfWidth=.49){
  const tx=Math.sin(pose.yaw),tz=Math.cos(pose.yaw),nx=tz,nz=-tx;
  return [-1,1].flatMap(a=>[-1,1].map(b=>({x:pose.x+a*tx*halfLength+b*nx*halfWidth,z:pose.z+a*tz*halfLength+b*nz*halfWidth})));
}
/** Separating-axis test: checks complete roof envelopes, not just centres. */
function separated(a,b,poseA,poseB){
  const axes=[poseA,poseB].flatMap(p=>[{x:Math.sin(p.yaw),z:Math.cos(p.yaw)},{x:Math.cos(p.yaw),z:-Math.sin(p.yaw)}]);
  return axes.some(axis=>{
    const aa=a.map(p=>p.x*axis.x+p.z*axis.z),bb=b.map(p=>p.x*axis.x+p.z*axis.z);
    return Math.max(...aa)<Math.min(...bb)-.005 || Math.max(...bb)<Math.min(...aa)-.005;
  });
}

test('closed track: endpoints and tangents match across the seam',()=>{
  const a=sampleRoute(0),b=sampleRoute(TRACK_LENGTH);
  near(a.x,b.x);near(a.z,b.z);near(a.tx,b.tx);near(a.tz,b.tz);
  const before=sampleRoute(TRACK_LENGTH-1e-6),after=sampleRoute(1e-6);
  assert.ok(distance(before,after)<2.1e-6);
});
test('all eight line/arc joins are position- and tangent-continuous',()=>{
  for(const s of SEGMENT_ENDS){
    const a=sampleRoute(s-1e-5),b=sampleRoute(s+1e-5);
    assert.ok(distance(a,b)<2.1e-5);assert.ok(Math.hypot(a.tx-b.tx,a.tz-b.tz)<1e-5);
  }
});
test('analytic arc-length parameter produces equal travel speed',()=>{
  for(let s=0;s<TRACK_LENGTH;s+=.041){
    const a=sampleRoute(s),b=sampleRoute(s+.001);
    near(distance(a,b),.001,2e-9);near(Math.hypot(a.tx,a.tz),1);near(a.tx*a.nx+a.tz*a.nz,0);
  }
});
test('route wraps negative and multi-lap distances without discontinuities',()=>{
  near(wrap(-.25),TRACK_LENGTH-.25);
  for(const s of [-200,-1,0,13,1000]){const a=sampleRoute(s),b=sampleRoute(s+TRACK_LENGTH*3);near(a.x,b.x);near(a.z,b.z);}
});
test('distance-to-track matches points along both straights and all corners',()=>{
  for(let s=0;s<TRACK_LENGTH;s+=.10){const p=sampleRoute(s);near(distanceToTrack(p.x,p.z),0);near(distanceToTrack(p.x+p.nx*.4,p.z+p.nz*.4),.4);}
});
test('each car and each bogie follows its own distance on the route',()=>{
  const s=16;
  const poses=VEHICLE_OFFSETS.map(offset=>vehiclePose(s-offset));
  assert.equal(poses.length,3);
  assert.ok(Math.abs(poses[0].yaw-poses[2].yaw)>.1,'cars cannot all share one heading on a curve');
  for(const pose of poses){near(distanceToTrack(pose.front.x,pose.front.z),0);near(distanceToTrack(pose.rear.x,pose.rear.z),0);}
});
test('full carriage roof envelopes do not collide anywhere in a complete lap',()=>{
  for(let s=0;s<TRACK_LENGTH;s+=.025){
    const p=VEHICLE_OFFSETS.map((offset,i)=>vehiclePose(s-offset,i===0?.98:1.03));
    for(let i=0;i<2;i++)assert.ok(separated(rectangle(p[i]),rectangle(p[i+1]),p[i],p[i+1]),`roof overlap at ${s}, pair ${i}`);
  }
});
test('car centre spacing stays bounded through curves and the seam',()=>{
  for(let s=0;s<TRACK_LENGTH;s+=.03){
    const poses=VEHICLE_OFFSETS.map(offset=>vehiclePose(s-offset));
    for(let i=0;i<2;i++){const gap=distance(poses[i],poses[i+1]);assert.ok(gap>2.00 && gap<2.11,`bad centre spacing: ${gap}`);}
  }
});
test('first arrival stops exactly at the station for two active seconds',()=>{
  const sim=new RailwaySimulation();const arrival=(STATION_DISTANCE-START_DISTANCE)/BASE_SPEED;
  sim.update(arrival);near(sim.distance,STATION_DISTANCE);near(sim.dwellRemaining,DWELL_SECONDS);assert.equal(sim.stops,1);
  sim.update(1.999);near(sim.distance,STATION_DISTANCE);near(sim.dwellRemaining,.001,1e-7);
  sim.update(.001);near(sim.dwellRemaining,0,1e-7);near(sim.distance,STATION_DISTANCE);
  sim.update(.5);near(sim.distance,STATION_DISTANCE+BASE_SPEED*.5);
});
test('pause freezes both the complete state and a partially consumed station timer',()=>{
  const sim=new RailwaySimulation();sim.update((STATION_DISTANCE-START_DISTANCE)/BASE_SPEED+.6);
  sim.running=false;const state=sim.snapshot();sim.update(800);assert.deepEqual(sim.snapshot(),state);
  sim.running=true;sim.update(1.4);near(sim.dwellRemaining,0);near(sim.distance,STATION_DISTANCE);
});
test('pause in motion does not advance elapsed time, wheels or distance',()=>{
  const sim=new RailwaySimulation();sim.update(.4);sim.running=false;
  const before=sim.snapshot();sim.update(60);assert.deepEqual(sim.snapshot(),before);
});
test('changing speed affects motion, but never shortens the two-second dwell',()=>{
  const sim=new RailwaySimulation();sim.setSpeed(2);sim.update((STATION_DISTANCE-START_DISTANCE)/(BASE_SPEED*2));
  near(sim.dwellRemaining,2);sim.update(1);near(sim.dwellRemaining,1);near(sim.distance,STATION_DISTANCE);
  sim.setSpeed(.25);sim.update(1);near(sim.dwellRemaining,0);sim.update(1);near(sim.distance,STATION_DISTANCE+BASE_SPEED*.25);
});
test('every lap stops once, including a large update crossing several arrivals',()=>{
  const sim=new RailwaySimulation();const first=(STATION_DISTANCE-START_DISTANCE)/BASE_SPEED;
  sim.update(first+2*(DWELL_SECONDS+TRACK_LENGTH/BASE_SPEED));
  assert.equal(sim.stops,3);near(sim.distance,STATION_DISTANCE+2*TRACK_LENGTH,1e-7);near(sim.dwellRemaining,2,1e-7);
});
test('simulation is independent of update subdivision',()=>{
  const a=new RailwaySimulation(),b=new RailwaySimulation();a.update(105);
  for(let i=0;i<6300;i++)b.update(1/60);
  near(a.distance,b.distance,1e-7);near(a.dwellRemaining,b.dwellRemaining,1e-7);assert.equal(a.stops,b.stops);near(a.travelled,b.travelled,1e-7);
});
test('reset restores deterministic position, speed, run state, timers and counters',()=>{
  const sim=new RailwaySimulation();sim.setSpeed(1.75);sim.update(250);sim.running=false;sim.reset();
  assert.deepEqual(sim.snapshot(),new RailwaySimulation().snapshot());
});
test('invalid time and speed values are rejected rather than poisoning transforms',()=>{
  const sim=new RailwaySimulation();assert.throws(()=>sim.update(NaN));assert.throws(()=>sim.update(-1));assert.throws(()=>sim.setSpeed(Infinity));
  sim.setSpeed(100);near(sim.speed,2);sim.setSpeed(-100);near(sim.speed,.25);
});
test('the river crosses the loop exactly twice, at the two designed bridges',()=>{
  let entries=0,previous=onRiver(sampleRoute(0).x,sampleRoute(0).z);
  for(let i=1;i<=5000;i++){
    const p=sampleRoute(i/5000*TRACK_LENGTH),inside=onRiver(p.x,p.z);
    if(inside&&!previous){entries++;assert.ok(Math.abs(Math.abs(p.z)-TRACK.halfZ)<1e-8);}
    previous=inside;
  }
  assert.equal(entries,2);
  for(const z of [-TRACK.halfZ,TRACK.halfZ]){const x=riverCenter(z);near(distanceToTrack(x,z),0);assert.ok(Math.abs(x)+1.625<TRACK.halfX-TRACK.radius+.5);}
});
test('all building/eave footprints stay outside the running clearance',()=>{
  for(const building of BUILDINGS){
    const allowance=building.kind==='tower'?0:.18;
    const hw=building.w/2+allowance,hd=building.d/2+allowance;
    for(let i=0;i<=20;i++)for(const edge of [0,1,2,3]){
      const t=i/20;
      const x=building.x+(edge<2?(t*2-1)*hw:(edge===2?-hw:hw));
      const z=building.z+(edge>=2?(t*2-1)*hd:(edge===0?-hd:hd));
      assert.ok(distanceToTrack(x,z)>.57,`${building.name} violates clearance at ${x},${z}`);
      assert.ok(!onRiver(x,z),`${building.name} overlaps the river`);
    }
  }
});
test('the platform and all three stopped cars share the front station straight',()=>{
  const platform=STATION_PLATFORM;
  near(TRACK.halfZ-(platform.z+platform.d/2),.60);
  for(const offset of VEHICLE_OFFSETS){const p=sampleRoute(STATION_DISTANCE-offset);near(p.z,TRACK.halfZ);assert.ok(p.x-.88>platform.x-platform.w/2);assert.ok(p.x+.98<platform.x+platform.w/2);}
});
test('the road network links station and both banks without a railway crossing',()=>{
  for(const road of STREETS)for(let i=0;i<road.points.length-1;i++){
    const a=road.points[i],b=road.points[i+1];
    for(let j=0;j<=30;j++){const t=j/30,x=a[0]+(b[0]-a[0])*t,z=a[1]+(b[1]-a[1])*t;assert.ok(distanceToTrack(x,z)>road.w/2+.5);}
  }
  assert.ok(STREETS[0].points[0][0]<riverCenter(1.6));assert.ok(STREETS[0].points.at(-1)[0]>riverCenter(1.6));
  assert.ok(STREETS.some(road=>road.points.at(-1)[1]===3.15));
});
