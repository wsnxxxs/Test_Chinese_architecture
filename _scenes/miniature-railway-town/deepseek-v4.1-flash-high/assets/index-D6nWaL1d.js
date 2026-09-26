(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e,t,n,r,i,a,o,s,c,l={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},u={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},d=1e3,f=1001,p=1002,m=1003,h=1004,g=1005,_=1006,v=1007,y=1008,b=1009,x=1010,S=1011,C=1012,w=1013,T=1014,E=1015,D=1016,O=1017,k=1018,A=1020,j=35902,M=35899,N=1021,P=1022,F=1023,ee=1026,te=1027,ne=1028,re=1029,ie=1030,ae=1031,oe=1033,se=33776,I=33777,ce=33778,le=33779,ue=35840,de=35841,fe=35842,pe=35843,me=36196,he=37492,ge=37496,_e=37488,ve=37489,ye=37490,be=37491,xe=37808,Se=37809,Ce=37810,we=37811,Te=37812,Ee=37813,De=37814,Oe=37815,ke=37816,Ae=37817,je=37818,L=37819,Me=37820,Ne=37821,Pe=36492,R=36494,Fe=36495,Ie=36283,Le=36284,Re=36285,ze=36286,Be=2300,Ve=2301,He=2302,Ue=2303,We=2400,Ge=2401,Ke=2402,qe=3200,Je=`srgb`,Ye=`srgb-linear`,Xe=`linear`,Ze=`srgb`,Qe=7680,$e=35044,et=35048,tt=2e3;function nt(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function rt(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function it(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function at(){let e=it(`canvas`);return e.style.display=`block`,e}var ot={};function st(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function ct(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function z(...e){e=ct(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function B(...e){e=ct(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function lt(...e){let t=e.join(` `);t in ot||(ot[t]=!0,z(...e))}function ut(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var dt={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},ft=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},pt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),mt=1234567,ht=Math.PI/180,gt=180/Math.PI;function _t(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(pt[e&255]+pt[e>>8&255]+pt[e>>16&255]+pt[e>>24&255]+`-`+pt[t&255]+pt[t>>8&255]+`-`+pt[t>>16&15|64]+pt[t>>24&255]+`-`+pt[n&63|128]+pt[n>>8&255]+`-`+pt[n>>16&255]+pt[n>>24&255]+pt[r&255]+pt[r>>8&255]+pt[r>>16&255]+pt[r>>24&255]).toLowerCase()}function vt(e,t,n){return Math.max(t,Math.min(n,e))}function yt(e,t){return(e%t+t)%t}function bt(e,t,n,r,i){return r+(e-t)*(i-r)/(n-t)}function xt(e,t,n){return e===t?0:(n-e)/(t-e)}function St(e,t,n){return(1-n)*e+n*t}function Ct(e,t,n,r){return St(e,t,1-Math.exp(-n*r))}function wt(e,t=1){return t-Math.abs(yt(e,t*2)-t)}function Tt(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function Et(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function Dt(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Ot(e,t){return e+Math.random()*(t-e)}function kt(e){return e*(.5-Math.random())}function At(e){e!==void 0&&(mt=e);let t=mt+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function jt(e){return e*ht}function Mt(e){return e*gt}function Nt(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function Pt(e){return 2**Math.ceil(Math.log(e)/Math.LN2)}function Ft(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function It(e,t,n,r,i){let a=Math.cos,o=Math.sin,s=a(n/2),c=o(n/2),l=a((t+r)/2),u=o((t+r)/2),d=a((t-r)/2),f=o((t-r)/2),p=a((r-t)/2),m=o((r-t)/2);switch(i){case`XYX`:e.set(s*u,c*d,c*f,s*l);break;case`YZY`:e.set(c*f,s*u,c*d,s*l);break;case`ZXZ`:e.set(c*d,c*f,s*u,s*l);break;case`XZX`:e.set(s*u,c*m,c*p,s*l);break;case`YXY`:e.set(c*p,s*u,c*m,s*l);break;case`ZYZ`:e.set(c*m,c*p,s*u,s*l);break;default:z(`MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: `+i)}}function Lt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function Rt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var zt={DEG2RAD:ht,RAD2DEG:gt,generateUUID:_t,clamp:vt,euclideanModulo:yt,mapLinear:bt,inverseLerp:xt,lerp:St,damp:Ct,pingpong:wt,smoothstep:Tt,smootherstep:Et,randInt:Dt,randFloat:Ot,randFloatSpread:kt,seededRandom:At,degToRad:jt,radToDeg:Mt,isPowerOfTwo:Nt,ceilPowerOfTwo:Pt,floorPowerOfTwo:Ft,setQuaternionFromProperEuler:It,normalize:Rt,denormalize:Lt};o=Symbol.iterator;var V=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[o](){yield this.x,yield this.y}};e=V,e.prototype.isVector2=!0;var Bt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:z(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};s=Symbol.iterator;var H=class{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ht.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ht.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Vt.copy(this).projectOnVector(e),this.sub(Vt)}reflect(e){return this.sub(Vt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[s](){yield this.x,yield this.y,yield this.z}};t=H,t.prototype.isVector3=!0;var Vt=new H,Ht=new Bt,Ut=class{constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return lt(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Wt.makeScale(e,t)),this}rotate(e){return lt(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Wt.makeRotation(-e)),this}translate(e,t){return lt(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Wt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};n=Ut,n.prototype.isMatrix3=!0;var Wt=new Ut,Gt=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kt=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qt(){let e={enabled:!0,workingColorSpace:Ye,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=Yt(e.r),e.g=Yt(e.g),e.b=Yt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Xt(e.r),e.g=Xt(e.g),e.b=Xt(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Xe:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return lt(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return lt(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Ye]:{primaries:t,whitePoint:r,transfer:Xe,toXYZ:Gt,fromXYZ:Kt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Je},outputColorSpaceConfig:{drawingBufferColorSpace:Je}},[Je]:{primaries:t,whitePoint:r,transfer:Ze,toXYZ:Gt,fromXYZ:Kt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Je}}}),e}var Jt=qt();function Yt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Xt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Zt,Qt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Zt===void 0&&(Zt=it(`canvas`)),Zt.width=e.width,Zt.height=e.height;let t=Zt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Zt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=it(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Yt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Yt(t[e]/255)*255):t[e]=Yt(t[e]);return{data:t,width:e.width,height:e.height}}return z(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},$t=0,en=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:$t++}),this.uuid=_t(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(tn(r[t].image)):e.push(tn(r[t]))}else e=tn(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function tn(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Qt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(z(`Texture: Unable to serialize Texture.`),{})}var nn=0,rn=new H,an=class e extends ft{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=f,i=f,a=_,o=y,s=F,c=b,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nn++}),this.uuid=_t(),this.name=``,this.source=new en(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new V(0,0),this.repeat=new V(1,1),this.center=new V(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(rn).x}get height(){return this.source.getSize(rn).y}get depth(){return this.source.getSize(rn).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){z(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){z(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case d:e.x-=Math.floor(e.x);break;case f:e.x=e.x<0?0:1;break;case p:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case d:e.y-=Math.floor(e.y);break;case f:e.y=e.y<0?0:1;break;case p:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};an.DEFAULT_IMAGE=null,an.DEFAULT_MAPPING=300,an.DEFAULT_ANISOTROPY=1,c=Symbol.iterator;var on=class{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this.w=vt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this.w=vt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[c](){yield this.x,yield this.y,yield this.z,yield this.w}};r=on,r.prototype.isVector4=!0;var sn=class extends ft{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new on(0,0,e,t),this.scissorTest=!1,this.viewport=new on(0,0,e,t),this.textures=[];let r=new an({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:_,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new en(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},cn=class extends sn{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ln=class extends an{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=m,this.minFilter=m,this.wrapR=f,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},un=class extends an{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=m,this.minFilter=m,this.wrapR=f,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},U=class e{constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/dn.setFromMatrixColumn(e,0).length(),i=1/dn.setFromMatrixColumn(e,1).length(),a=1/dn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pn,e,mn)}lookAt(e,t,n){let r=this.elements;return _n.subVectors(e,t),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),hn.crossVectors(n,_n),hn.lengthSq()===0&&(Math.abs(n.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),hn.crossVectors(n,_n)),hn.normalize(),gn.crossVectors(_n,hn),r[0]=hn.x,r[4]=gn.x,r[8]=_n.x,r[1]=hn.y,r[5]=gn.y,r[9]=_n.y,r[2]=hn.z,r[6]=gn.z,r[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],P=r[7],F=r[11],ee=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*P,i[8]=a*C+o*D+s*j+c*F,i[12]=a*w+o*O+s*M+c*ee,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*P,i[9]=l*C+u*D+d*j+f*F,i[13]=l*w+u*O+d*M+f*ee,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*P,i[10]=p*C+m*D+h*j+g*F,i[14]=p*w+m*O+h*M+g*ee,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*P,i[11]=_*C+v*D+y*j+b*F,i[15]=_*w+v*O+y*M+b*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=dn.set(r[0],r[1],r[2]).length(),o=dn.set(r[4],r[5],r[6]).length(),s=dn.set(r[8],r[9],r[10]).length();i<0&&(a=-a),fn.copy(this);let c=1/a,l=1/o,u=1/s;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=l,fn.elements[5]*=l,fn.elements[6]*=l,fn.elements[8]*=u,fn.elements[9]*=u,fn.elements[10]*=u,t.setFromRotationMatrix(fn),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=tt,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=tt,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};i=U,i.prototype.isMatrix4=!0;var dn=new H,fn=new U,pn=new H(0,0,0),mn=new H(1,1,1),hn=new H,gn=new H,_n=new H,vn=new U,yn=new Bt,bn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-vt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(vt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-vt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(vt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:z(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return vn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yn.setFromEuler(this),this.setFromQuaternion(yn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};bn.DEFAULT_ORDER=`XYZ`;var xn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},Sn=0,Cn=new H,wn=new Bt,Tn=new U,En=new H,Dn=new H,On=new H,kn=new Bt,An=new H(1,0,0),jn=new H(0,1,0),Mn=new H(0,0,1),Nn={type:`added`},Pn={type:`removed`},Fn={type:`childadded`,child:null},In={type:`childremoved`,child:null},Ln=class e extends ft{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sn++}),this.uuid=_t(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new H,n=new bn,r=new Bt,i=new H(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new U},normalMatrix:{value:new Ut}}),this.matrix=new U,this.matrixWorld=new U,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wn.setFromAxisAngle(e,t),this.quaternion.multiply(wn),this}rotateOnWorldAxis(e,t){return wn.setFromAxisAngle(e,t),this.quaternion.premultiply(wn),this}rotateX(e){return this.rotateOnAxis(An,e)}rotateY(e){return this.rotateOnAxis(jn,e)}rotateZ(e){return this.rotateOnAxis(Mn,e)}translateOnAxis(e,t){return Cn.copy(e).applyQuaternion(this.quaternion),this.position.add(Cn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(An,e)}translateY(e){return this.translateOnAxis(jn,e)}translateZ(e){return this.translateOnAxis(Mn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?En.copy(e):En.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Dn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(Dn,En,this.up):Tn.lookAt(En,Dn,this.up),this.quaternion.setFromRotationMatrix(Tn),r&&(Tn.extractRotation(r.matrixWorld),wn.setFromRotationMatrix(Tn),this.quaternion.premultiply(wn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(B(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Nn),Fn.child=e,this.dispatchEvent(Fn),Fn.child=null):B(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pn),In.child=e,this.dispatchEvent(In),In.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Tn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Tn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Nn),Fn.child=e,this.dispatchEvent(Fn),Fn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dn,e,On),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Dn,kn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};Ln.DEFAULT_UP=new H(0,1,0),Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0,Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Rn=class extends Ln{constructor(){super(),this.isGroup=!0,this.type=`Group`}},zn={type:`move`},Bn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Rn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Vn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},Un={h:0,s:0,l:0};function Wn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var W=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Je){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Jt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Jt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Jt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Jt.workingColorSpace){if(e=yt(e,1),t=vt(t,0,1),n=vt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Wn(i,r,e+1/3),this.g=Wn(i,r,e),this.b=Wn(i,r,e-1/3)}return Jt.colorSpaceToWorking(this,r),this}setStyle(e,t=Je){function n(t){t!==void 0&&parseFloat(t)<1&&z(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:z(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);z(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Je){let n=Vn[e.toLowerCase()];return n===void 0?z(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yt(e.r),this.g=Yt(e.g),this.b=Yt(e.b),this}copyLinearToSRGB(e){return this.r=Xt(e.r),this.g=Xt(e.g),this.b=Xt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Je){return Jt.workingToColorSpace(Gn.copy(this),e),Math.round(vt(Gn.r*255,0,255))*65536+Math.round(vt(Gn.g*255,0,255))*256+Math.round(vt(Gn.b*255,0,255))}getHexString(e=Je){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Jt.workingColorSpace){Jt.workingToColorSpace(Gn.copy(this),t);let n=Gn.r,r=Gn.g,i=Gn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Jt.workingColorSpace){return Jt.workingToColorSpace(Gn.copy(this),t),e.r=Gn.r,e.g=Gn.g,e.b=Gn.b,e}getStyle(e=Je){Jt.workingToColorSpace(Gn.copy(this),e);let t=Gn.r,n=Gn.g,r=Gn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Hn),this.setHSL(Hn.h+e,Hn.s+t,Hn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Hn),e.getHSL(Un);let n=St(Hn.h,Un.h,t),r=St(Hn.s,Un.s,t),i=St(Hn.l,Un.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Gn=new W;W.NAMES=Vn;var Kn=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new W(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},qn=class extends Ln{constructor(){super(),this.isScene=!0,window.__galleryCaptureScene?.(this),this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Jn=new H,Yn=new H,Xn=new H,Zn=new H,Qn=new H,$n=new H,er=new H,tr=new H,nr=new H,rr=new H,ir=new on,ar=new on,or=new on,sr=class e{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Jn.subVectors(e,t),r.cross(Jn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Jn.subVectors(r,t),Yn.subVectors(n,t),Xn.subVectors(e,t);let a=Jn.dot(Jn),o=Jn.dot(Yn),s=Jn.dot(Xn),c=Yn.dot(Yn),l=Yn.dot(Xn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Zn)!==null&&Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Zn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Zn.x),s.addScaledVector(a,Zn.y),s.addScaledVector(o,Zn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return ir.setScalar(0),ar.setScalar(0),or.setScalar(0),ir.fromBufferAttribute(e,t),ar.fromBufferAttribute(e,n),or.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ir,i.x),a.addScaledVector(ar,i.y),a.addScaledVector(or,i.z),a}static isFrontFacing(e,t,n,r){return Jn.subVectors(n,t),Yn.subVectors(e,t),Jn.cross(Yn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),Jn.cross(Yn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Qn.subVectors(r,n),$n.subVectors(i,n),tr.subVectors(e,n);let s=Qn.dot(tr),c=$n.dot(tr);if(s<=0&&c<=0)return t.copy(n);nr.subVectors(e,r);let l=Qn.dot(nr),u=$n.dot(nr);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Qn,a);rr.subVectors(e,i);let f=Qn.dot(rr),p=$n.dot(rr);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector($n,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return er.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(er,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Qn,a).addScaledVector($n,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},cr=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ur.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ur.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ur.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,ur):ur.fromBufferAttribute(r,t),ur.applyMatrix4(e.matrixWorld),this.expandByPoint(ur);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),dr.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),dr.copy(e.boundingBox)),dr.applyMatrix4(e.matrixWorld),this.union(dr)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ur),ur.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vr),yr.subVectors(this.max,vr),fr.subVectors(e.a,vr),pr.subVectors(e.b,vr),mr.subVectors(e.c,vr),hr.subVectors(pr,fr),gr.subVectors(mr,pr),_r.subVectors(fr,mr);let t=[0,-hr.z,hr.y,0,-gr.z,gr.y,0,-_r.z,_r.y,hr.z,0,-hr.x,gr.z,0,-gr.x,_r.z,0,-_r.x,-hr.y,hr.x,0,-gr.y,gr.x,0,-_r.y,_r.x,0];return!Sr(t,fr,pr,mr,yr)||(t=[1,0,0,0,1,0,0,0,1],!Sr(t,fr,pr,mr,yr))?!1:(br.crossVectors(hr,gr),t=[br.x,br.y,br.z],Sr(t,fr,pr,mr,yr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ur).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ur).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(lr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),lr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),lr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),lr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),lr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),lr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),lr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),lr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(lr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},lr=[new H,new H,new H,new H,new H,new H,new H,new H],ur=new H,dr=new cr,fr=new H,pr=new H,mr=new H,hr=new H,gr=new H,_r=new H,vr=new H,yr=new H,br=new H,xr=new H;function Sr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){xr.fromArray(e,a);let o=i.x*Math.abs(xr.x)+i.y*Math.abs(xr.y)+i.z*Math.abs(xr.z),s=t.dot(xr),c=n.dot(xr),l=r.dot(xr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Cr=new H,wr=new V,Tr=0,Er=class extends ft{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Tr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=$e,this.updateRanges=[],this.gpuType=E,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)wr.fromBufferAttribute(this,t),wr.applyMatrix3(e),this.setXY(t,wr.x,wr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Cr.fromBufferAttribute(this,t),Cr.applyMatrix3(e),this.setXYZ(t,Cr.x,Cr.y,Cr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Cr.fromBufferAttribute(this,t),Cr.applyMatrix4(e),this.setXYZ(t,Cr.x,Cr.y,Cr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Cr.fromBufferAttribute(this,t),Cr.applyNormalMatrix(e),this.setXYZ(t,Cr.x,Cr.y,Cr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Cr.fromBufferAttribute(this,t),Cr.transformDirection(e),this.setXYZ(t,Cr.x,Cr.y,Cr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Lt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Lt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Lt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Lt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Lt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),r=Rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),r=Rt(r,this.array),i=Rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}},Dr=class extends Er{constructor(e,t,n){super(new Uint16Array(e),t,n)}},Or=class extends Er{constructor(e,t,n){super(new Uint32Array(e),t,n)}},kr=class extends Er{constructor(e,t,n){super(new Float32Array(e),t,n)}},Ar=new cr,jr=new H,Mr=new H,Nr=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Ar.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;jr.subVectors(e,this.center);let t=jr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(jr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(jr.copy(e.center).add(Mr)),this.expandByPoint(jr.copy(e.center).sub(Mr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Pr=0,Fr=new U,Ir=new Ln,Lr=new H,Rr=new cr,zr=new cr,Br=new H,Vr=class e extends ft{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pr++}),this.uuid=_t(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(nt(e)?Or:Dr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new Ut().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Fr.makeRotationFromQuaternion(e),this.applyMatrix4(Fr),this}rotateX(e){return Fr.makeRotationX(e),this.applyMatrix4(Fr),this}rotateY(e){return Fr.makeRotationY(e),this.applyMatrix4(Fr),this}rotateZ(e){return Fr.makeRotationZ(e),this.applyMatrix4(Fr),this}translate(e,t,n){return Fr.makeTranslation(e,t,n),this.applyMatrix4(Fr),this}scale(e,t,n){return Fr.makeScale(e,t,n),this.applyMatrix4(Fr),this}lookAt(e){return Ir.lookAt(e),Ir.updateMatrix(),this.applyMatrix4(Ir.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lr).negate(),this.translate(Lr.x,Lr.y,Lr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new kr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&z(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){B(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Rr.setFromBufferAttribute(n),this.morphTargetsRelative?(Br.addVectors(this.boundingBox.min,Rr.min),this.boundingBox.expandByPoint(Br),Br.addVectors(this.boundingBox.max,Rr.max),this.boundingBox.expandByPoint(Br)):(this.boundingBox.expandByPoint(Rr.min),this.boundingBox.expandByPoint(Rr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&B(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){B(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new H,1/0);return}if(e){let n=this.boundingSphere.center;if(Rr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];zr.setFromBufferAttribute(n),this.morphTargetsRelative?(Br.addVectors(Rr.min,zr.min),Rr.expandByPoint(Br),Br.addVectors(Rr.max,zr.max),Rr.expandByPoint(Br)):(Rr.expandByPoint(zr.min),Rr.expandByPoint(zr.max))}Rr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Br.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Br));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Br.fromBufferAttribute(a,t),o&&(Lr.fromBufferAttribute(e,t),Br.add(Lr)),r=Math.max(r,n.distanceToSquared(Br))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&B(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){B(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Er(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new H,s[e]=new H;let c=new H,l=new H,u=new H,d=new V,f=new V,p=new V,m=new H,h=new H;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new H,y=new H,b=new H,x=new H;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Er(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new H,i=new H,a=new H,o=new H,s=new H,c=new H,l=new H,u=new H;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Br.fromBufferAttribute(e,t),Br.normalize(),e.setXYZ(t,Br.x,Br.y,Br.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Er(a,r,i)}if(this.index===null)return z(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Hr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=$e,this.updateRanges=[],this.version=0,this.uuid=_t()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_t()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=_t()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Ur=new H,Wr=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ur.fromBufferAttribute(this,t),Ur.applyMatrix4(e),this.setXYZ(t,Ur.x,Ur.y,Ur.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ur.fromBufferAttribute(this,t),Ur.applyNormalMatrix(e),this.setXYZ(t,Ur.x,Ur.y,Ur.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ur.fromBufferAttribute(this,t),Ur.transformDirection(e),this.setXYZ(t,Ur.x,Ur.y,Ur.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Lt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Lt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Lt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Lt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Lt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),r=Rt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),r=Rt(r,this.array),i=Rt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){st(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new Er(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){st(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Gr=new H,Kr=new H,qr=new Ut,Jr=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Gr.subVectors(n,t).cross(Kr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Gr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||qr.getNormalMatrix(e),r=this.coplanarPoint(Gr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Yr=0,Xr=class extends ft{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yr++}),this.uuid=_t(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new W(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qe,this.stencilZFail=Qe,this.stencilZPass=Qe,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){z(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){z(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new W().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Jr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new V().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new V().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Zr=class extends Xr{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new W(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Qr,$r=new H,ei=new H,ti=new H,ni=new V,ri=new V,ii=new U,ai=new H,oi=new H,si=new H,ci=new V,li=new V,ui=new V,di=class extends Ln{constructor(e=new Zr){if(super(),this.isSprite=!0,this.type=`Sprite`,Qr===void 0){Qr=new Vr;let e=new Hr(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);Qr.setIndex([0,1,2,0,2,3]),Qr.setAttribute(`position`,new Wr(e,3,0,!1)),Qr.setAttribute(`uv`,new Wr(e,2,3,!1))}this.geometry=Qr,this.material=e,this.center=new V(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&B(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),ei.setFromMatrixScale(this.matrixWorld),ii.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ti.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ei.multiplyScalar(-ti.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;fi(ai.set(-.5,-.5,0),ti,a,ei,r,i),fi(oi.set(.5,-.5,0),ti,a,ei,r,i),fi(si.set(.5,.5,0),ti,a,ei,r,i),ci.set(0,0),li.set(1,0),ui.set(1,1);let o=e.ray.intersectTriangle(ai,oi,si,!1,$r);if(o===null&&(fi(oi.set(-.5,.5,0),ti,a,ei,r,i),li.set(0,1),o=e.ray.intersectTriangle(ai,si,oi,!1,$r),o===null))return;let s=e.ray.origin.distanceTo($r);s<e.near||s>e.far||t.push({distance:s,point:$r.clone(),uv:sr.getInterpolation($r,ai,oi,si,ci,li,ui,new V),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function fi(e,t,n,r,i,a){ni.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?ri.copy(ni):(ri.x=a*ni.x-i*ni.y,ri.y=i*ni.x+a*ni.y),e.copy(t),e.x+=ri.x,e.y+=ri.y,e.applyMatrix4(ii)}var pi=new H,mi=new H,hi=new H,gi=new H,_i=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pi.copy(this.origin).addScaledVector(this.direction,t),pi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){mi.copy(e).add(t).multiplyScalar(.5),hi.copy(t).sub(e).normalize(),gi.copy(this.origin).sub(mi);let i=e.distanceTo(t)*.5,a=-this.direction.dot(hi),o=gi.dot(this.direction),s=-gi.dot(hi),c=gi.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(mi).addScaledVector(hi,d),f}intersectSphere(e,t){if(e.radius<0)return null;pi.subVectors(e.center,this.origin);let n=pi.dot(this.direction),r=pi.dot(pi)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,pi)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,M,N;if(y>=b&&y>=x?(w=s,D=u,A=p,N=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,M=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,M=_)):b>=x?(w=c,D=d,A=m,N=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,M=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,M=v)):(w=l,D=f,A=h,N=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,M=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,M=g)),w===0)return null;let P=S/w,F=C/w,ee=1/w,te=T-P*D,ne=E-F*D,re=O-P*A,ie=k-F*A,ae=j-P*N,oe=M-F*N,se=ae*ie-oe*re,I=te*oe-ne*ae,ce=re*ne-ie*te;if(r){if(se<0||I<0||ce<0)return null}else if((se<0||I<0||ce<0)&&(se>0||I>0||ce>0))return null;let le=se+I+ce;if(le===0)return null;let ue=ee*(se*D+I*A+ce*N);return(le>0?ue<0:ue>0)?null:this.at(ue/le,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},vi=class extends Xr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new W(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},yi=new U,bi=new _i,xi=new Nr,Si=new H,Ci=new H,wi=new H,Ti=new H,Ei=new H,Di=new H,Oi=new H,ki=new H,Ai=class extends Ln{constructor(e=new Vr,t=new vi){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Di.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Ei.fromBufferAttribute(s,e),a?Di.addScaledVector(Ei,r):Di.addScaledVector(Ei.sub(t),r))}t.add(Di)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xi.copy(n.boundingSphere),xi.applyMatrix4(i),bi.copy(e.ray).recast(e.near),!(xi.containsPoint(bi.origin)===!1&&(bi.intersectSphere(xi,Si)===null||bi.origin.distanceToSquared(Si)>(e.far-e.near)**2))&&(yi.copy(i).invert(),bi.copy(e.ray).applyMatrix4(yi),(n.boundingBox===null||bi.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,bi)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Mi(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Mi(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Mi(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Mi(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function ji(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;ki.copy(s),ki.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(ki);return l<n.near||l>n.far?null:{distance:l,point:ki.clone(),object:e}}function Mi(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Ci),e.getVertexPosition(c,wi),e.getVertexPosition(l,Ti);let u=ji(e,t,n,r,Ci,wi,Ti,Oi);if(u){let e=new H;sr.getBarycoord(Oi,Ci,wi,Ti,e),i&&(u.uv=sr.getInterpolatedAttribute(i,s,c,l,e,new V)),a&&(u.uv1=sr.getInterpolatedAttribute(a,s,c,l,e,new V)),o&&(u.normal=sr.getInterpolatedAttribute(o,s,c,l,e,new H),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new H,materialIndex:0};sr.getNormal(Ci,wi,Ti,t.normal),u.face=t,u.barycoord=e}return u}var Ni=class extends an{constructor(e=null,t=1,n=1,r,i,a,o,s,c=m,l=m,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Pi=class extends Er{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Fi=new U,Ii=new U,Li=[],Ri=new cr,zi=new U,Bi=new Ai,Vi=new Nr,Hi=class extends Ai{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Pi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,zi)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new cr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fi),Ri.copy(e.boundingBox).applyMatrix4(Fi),this.boundingBox.union(Ri)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Nr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fi),Vi.copy(e.boundingSphere).applyMatrix4(Fi),this.boundingSphere.union(Vi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Bi.geometry=this.geometry,Bi.material=this.material,Bi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vi.copy(this.boundingSphere),Vi.applyMatrix4(n),e.ray.intersectsSphere(Vi)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Fi),Ii.multiplyMatrices(n,Fi),Bi.matrixWorld=Ii,Bi.raycast(e,Li);for(let e=0,n=Li.length;e<n;e++){let n=Li[e];n.instanceId=i,n.object=this,t.push(n)}Li.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Pi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ni(new Float32Array(r*this.count),r,this.count,ne,E));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ui=new Nr,Wi=new V(.5,.5),Gi=new H,Ki=class{constructor(e=new Jr,t=new Jr,n=new Jr,r=new Jr,i=new Jr,a=new Jr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=tt,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ui)}intersectsSprite(e){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476+Wi.distanceTo(e.center),Ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Gi.x=r.normal.x>0?e.max.x:e.min.x,Gi.y=r.normal.y>0?e.max.y:e.min.y,Gi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Gi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},qi=class extends an{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ji=class extends an{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Yi=class extends an{constructor(e,t,n=T,r,i,a,o=m,s=m,c,l=ee,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new en(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Xi=class extends Yi{constructor(e,t=T,n=301,r,i,a=m,o=m,s,c=ee){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Zi=class extends an{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Qi=class e extends Vr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new kr(c,3)),this.setAttribute(`normal`,new kr(l,3)),this.setAttribute(`uv`,new kr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new H;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},$i=class e extends Vr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new kr(u,3)),this.setAttribute(`normal`,new kr(d,3)),this.setAttribute(`uv`,new kr(f,2));function _(){let a=new H,_=new H,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new V,m=new H,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ea=class e extends $i{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ta=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){z(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new V:new H);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new H,r=[],i=[],a=[],o=new H,s=new U;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new H)}i[0]=new H,a[0]=new H;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(vt(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(vt(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},na=class extends ta{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new V){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ra=class extends na{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function ia(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var aa=new H,oa=new H,sa=new ia,ca=new ia,la=new ia,ua=class extends ta{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new H){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(oa.subVectors(r[0],r[1]).add(r[0]),c=oa);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(aa.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=aa),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),sa.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),ca.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),la.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(sa.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),ca.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),la.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(sa.calc(s),ca.calc(s),la.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new H().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function da(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function fa(e,t){let n=1-e;return n*n*t}function pa(e,t){return 2*(1-e)*e*t}function ma(e,t){return e*e*t}function ha(e,t,n,r){return fa(e,t)+pa(e,n)+ma(e,r)}function ga(e,t){let n=1-e;return n*n*n*t}function _a(e,t){let n=1-e;return 3*n*n*e*t}function va(e,t){return 3*(1-e)*e*e*t}function ya(e,t){return e*e*e*t}function ba(e,t,n,r,i){return ga(e,t)+_a(e,n)+va(e,r)+ya(e,i)}var xa=class extends ta{constructor(e=new V,t=new V,n=new V,r=new V){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new V){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(ba(e,r.x,i.x,a.x,o.x),ba(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Sa=class extends ta{constructor(e=new H,t=new H,n=new H,r=new H){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new H){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(ba(e,r.x,i.x,a.x,o.x),ba(e,r.y,i.y,a.y,o.y),ba(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ca=class extends ta{constructor(e=new V,t=new V){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new V){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new V){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wa=class extends ta{constructor(e=new H,t=new H){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new H){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new H){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ta=class extends ta{constructor(e=new V,t=new V,n=new V){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new V){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(ha(e,r.x,i.x,a.x),ha(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ea=class extends ta{constructor(e=new H,t=new H,n=new H){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new H){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(ha(e,r.x,i.x,a.x),ha(e,r.y,i.y,a.y),ha(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Da=class extends ta{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new V){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(da(o,s.x,c.x,l.x,u.x),da(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new V().fromArray(n))}return this}},Oa=Object.freeze({__proto__:null,ArcCurve:ra,CatmullRomCurve3:ua,CubicBezierCurve:xa,CubicBezierCurve3:Sa,EllipseCurve:na,LineCurve:Ca,LineCurve3:wa,QuadraticBezierCurve:Ta,QuadraticBezierCurve3:Ea,SplineCurve:Da}),ka=class extends ta{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new Oa[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new Oa[n.type]().fromJSON(n))}return this}},Aa=class extends ka{constructor(e){super(),this.type=`Path`,this.currentPoint=new V,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ca(this.currentPoint.clone(),new V(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new Ta(this.currentPoint.clone(),new V(e,t),new V(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new xa(this.currentPoint.clone(),new V(e,t),new V(n,r),new V(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new Da([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new na(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ja=class extends Aa{constructor(e){super(e),this.uuid=_t(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new Aa().fromJSON(n))}return this}};function Ma(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=Na(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=Ba(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return Fa(a,o,n,s,c,l,0),o}function Na(e,t,n,r,i){let a;if(i===uo(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=so(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=so(i/r|0,e[i],e[i+1],a);return a&&$a(a,a.next)&&(co(a),a=a.next),a}function Pa(e,t){if(!e)return e;t||(t=e);let n=e,r;do if(r=!1,!n.steiner&&($a(n,n.next)||Qa(n.prev,n,n.next)===0)){if(co(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function Fa(e,t,n,r,i,a,o){if(!e)return;!o&&a&&Ga(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?La(e,r,i,a):Ia(e)){t.push(c.i,e.i,l.i),co(e),e=l.next,s=l.next;continue}if(e=l,e===s){o?o===1?(e=Ra(Pa(e),t),Fa(e,t,n,r,i,a,2)):o===2&&za(e,t,n,r,i,a):Fa(Pa(e),t,n,r,i,a,1);break}}}function Ia(e){let t=e.prev,n=e,r=e.next;if(Qa(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&Xa(i,s,a,c,o,l,m.x,m.y)&&Qa(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function La(e,t,n,r){let i=e.prev,a=e,o=e.next;if(Qa(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=qa(p,m,t,n,r),v=qa(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Xa(s,u,c,d,l,f,y.x,y.y)&&Qa(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Xa(s,u,c,d,l,f,b.x,b.y)&&Qa(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Xa(s,u,c,d,l,f,y.x,y.y)&&Qa(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Xa(s,u,c,d,l,f,b.x,b.y)&&Qa(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Ra(e,t){let n=e;do{let r=n.prev,i=n.next.next;!$a(r,i)&&eo(r,n,n.next,i)&&io(r,i)&&io(i,r)&&(t.push(r.i,n.i,i.i),co(n),co(n.next),n=e=i),n=n.next}while(n!==e);return Pa(n)}function za(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&Za(o,e)){let s=oo(o,e);o=Pa(o,o.next),s=Pa(s,s.next),Fa(o,t,n,r,i,a,0),Fa(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function Ba(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=Na(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(Ja(o))}i.sort(Va);for(let e=0;e<i.length;e++)n=Ha(i[e],n);return n}function Va(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function Ha(e,t){let n=Ua(e,t);if(!n)return t;let r=oo(n,e);return Pa(r,r.next),Pa(n,n.next)}function Ua(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if($a(e,n))return n;do{if($a(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&Ya(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);io(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&Wa(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function Wa(e,t){return Qa(e.prev,e,t.prev)<0&&Qa(t.next,e,e.next)<0}function Ga(e,t,n,r){let i=e;do i.z===0&&(i.z=qa(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,Ka(i)}function Ka(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function qa(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Ja(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function Ya(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function Xa(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&Ya(e,t,n,r,i,a,o,s)}function Za(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!ro(e,t)&&(io(e,t)&&io(t,e)&&ao(e,t)&&(Qa(e.prev,e,t.prev)||Qa(e,t.prev,t))||$a(e,t)&&Qa(e.prev,e,e.next)>0&&Qa(t.prev,t,t.next)>0)}function Qa(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function $a(e,t){return e.x===t.x&&e.y===t.y}function eo(e,t,n,r){let i=no(Qa(e,t,n)),a=no(Qa(e,t,r)),o=no(Qa(n,r,e)),s=no(Qa(n,r,t));return!!(i!==a&&o!==s||i===0&&to(e,n,t)||a===0&&to(e,r,t)||o===0&&to(n,e,r)||s===0&&to(n,t,r))}function to(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function no(e){return e>0?1:e<0?-1:0}function ro(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&eo(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function io(e,t){return Qa(e.prev,e,e.next)<0?Qa(e,t,e.next)>=0&&Qa(e,e.prev,t)>=0:Qa(e,t,e.prev)<0||Qa(e,e.next,t)<0}function ao(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function oo(e,t){let n=lo(e.i,e.x,e.y),r=lo(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function so(e,t,n,r){let i=lo(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function co(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function lo(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function uo(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var fo=class{static triangulate(e,t,n=2){return Ma(e,t,n)}},po=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];mo(e),ho(n,e);let a=e.length;t.forEach(mo);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,ho(n,t[e]);let o=fo.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function mo(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function ho(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var go=class e extends Vr{constructor(e=new ja([new V(.5,.5),new V(-.5,.5),new V(-.5,-.5),new V(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new kr(r,3)),this.setAttribute(`uv`,new kr(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?_o:t.UVGenerator,g,_=!1,v,y,b,x;if(m){g=m.getSpacedPoints(s),_=!0,l=!1;let e=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(s,e),y=new H,b=new H,x=new H}l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!po.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];po.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,i=e[r],a=i.x-t.x,o=i.y-t.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(t.x),Math.abs(t.y));if(s<=10000000000000001e-36*c*c){e.splice(r,1),n--;continue}t=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function O(e,t,n){return t||B(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let k=C.length;function A(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new V(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new V(r/a,i/a)}let j=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),j[e]=A(D[e],D[n],D[r]);let M=[],N,P=j.concat();for(let e=0,t=E;e<t;e++){let t=w[e];N=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),N[e]=A(t[e],t[r],t[i]);M.push(N),P=P.concat(N)}let F;if(p===0)F=po.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=O(D[t],j[t],a);ae(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];N=M[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=O(n[e],N[e],a);ae(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}F=po.triangulateShape(e,t)}let ee=F.length,te=d+f;for(let e=0;e<k;e++){let t=l?O(C[e],P[e],te):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),ae(x.x,x.y,x.z)):ae(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<k;t++){let n=l?O(C[t],P[t],te):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),ae(x.x,x.y,x.z)):ae(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=O(D[e],j[e],r);ae(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];N=M[e];for(let e=0,i=t.length;e<i;e++){let i=O(t[e],N[e],r);_?ae(i.x,i.y+g[s-1].y,g[s-1].x+n):ae(i.x,i.y,c+n)}}}ne(),re();function ne(){let e=r.length/3;if(l){let e=0,t=k*e;for(let e=0;e<ee;e++){let n=F[e];oe(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=k*e;for(let e=0;e<ee;e++){let n=F[e];oe(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<ee;e++){let t=F[e];oe(t[2],t[1],t[0])}for(let e=0;e<ee;e++){let t=F[e];oe(t[0]+k*s,t[1]+k*s,t[2]+k*s)}}n.addGroup(e,r.length/3-e,0)}function re(){let e=r.length/3,t=0;ie(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];ie(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function ie(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=k*e,a=k*(e+1);se(t+r+n,t+i+n,t+i+a,t+r+a)}}}function ae(e,t,n){a.push(e),a.push(t),a.push(n)}function oe(e,t,i){I(e),I(t),I(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);ce(o[0]),ce(o[1]),ce(o[2])}function se(e,t,i,a){I(e),I(t),I(a),I(t),I(i),I(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);ce(s[0]),ce(s[1]),ce(s[3]),ce(s[1]),ce(s[2]),ce(s[3])}function I(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function ce(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return vo(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Oa[i.type]().fromJSON(i)),new e(r,t.options)}},_o={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new V(a,o),new V(s,c),new V(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new V(o,1-c),new V(l,1-d),new V(f,1-m),new V(h,1-_)]:[new V(s,1-c),new V(u,1-d),new V(p,1-m),new V(g,1-_)]}};function vo(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var yo=class e extends Vr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new kr(p,3)),this.setAttribute(`normal`,new kr(m,3)),this.setAttribute(`uv`,new kr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},bo=class e extends Vr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new H,d=new H,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new kr(p,3)),this.setAttribute(`normal`,new kr(m,3)),this.setAttribute(`uv`,new kr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},xo=class e extends Vr{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new H,f=new H,p=new H;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new kr(c,3)),this.setAttribute(`normal`,new kr(l,3)),this.setAttribute(`uv`,new kr(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function So(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(wo(i))i.isRenderTargetTexture?(z(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(wo(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Co(e){let t={};for(let n=0;n<e.length;n++){let r=So(e[n]);for(let e in r)t[e]=r[e]}return t}function wo(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function To(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Eo(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}var Do={clone:So,merge:Co},Oo=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ko=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ao=class extends Xr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Oo,this.fragmentShader=ko,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=So(e.uniforms),this.uniformsGroups=To(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new W().setHex(r.value);break;case`v2`:this.uniforms[n].value=new V().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new H().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new on().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new Ut().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new U().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},jo=class extends Ao{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Mo=class extends Xr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new W(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new W(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new V(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},No=class extends Xr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=qe,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Po=class extends Xr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Fo(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Io(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Lo=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Ro=class extends Lo{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:We,endingEnd:We}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ge:i=e,o=2*t-n;break;case Ke:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Ge:a=e,s=2*n-t;break;case Ke:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},zo=class extends Lo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Bo=class extends Lo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Vo=class extends Lo{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=Wo(n,t,g,y,r);i[p]=Ho(x,o,_,b,m)}return i}};function Ho(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Uo(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function Wo(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=Ho(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Uo(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Go=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Fo(t,this.TimeBufferType),this.values=Fo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Fo(e.times,Array),values:Fo(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Io(e.settings)&&(n.settings={inTangents:Fo(e.settings.inTangents,Array),outTangents:Fo(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Bo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new zo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ro(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Vo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Be:t=this.InterpolantFactoryMethodDiscrete;break;case Ve:t=this.InterpolantFactoryMethodLinear;break;case He:t=this.InterpolantFactoryMethodSmooth;break;case Ue:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return z(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Be;case this.InterpolantFactoryMethodLinear:return Ve;case this.InterpolantFactoryMethodSmooth:return He;case this.InterpolantFactoryMethodBezier:return Ue}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Io(this.settings)&&(Ko(this.settings.inTangents,e),Ko(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(B(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(B(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){B(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){B(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&rt(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){B(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===He,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Io(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Ko(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Go.prototype.ValueTypeName=``,Go.prototype.TimeBufferType=Float32Array,Go.prototype.ValueBufferType=Float32Array,Go.prototype.DefaultInterpolation=Ve;var qo=class extends Go{constructor(e,t,n){super(e,t,n)}};qo.prototype.ValueTypeName=`bool`,qo.prototype.ValueBufferType=Array,qo.prototype.DefaultInterpolation=Be,qo.prototype.InterpolantFactoryMethodLinear=void 0,qo.prototype.InterpolantFactoryMethodSmooth=void 0;var Jo=class extends Go{constructor(e,t,n,r){super(e,t,n,r)}};Jo.prototype.ValueTypeName=`color`;var Yo=class extends Go{constructor(e,t,n,r){super(e,t,n,r)}};Yo.prototype.ValueTypeName=`number`;var Xo=class extends Lo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Bt.slerpFlat(i,0,a,c-o,a,c,s);return i}},Zo=class extends Go{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Xo(this.times,this.values,this.getValueSize(),e)}};Zo.prototype.ValueTypeName=`quaternion`,Zo.prototype.InterpolantFactoryMethodSmooth=void 0;var Qo=class extends Go{constructor(e,t,n){super(e,t,n)}};Qo.prototype.ValueTypeName=`string`,Qo.prototype.ValueBufferType=Array,Qo.prototype.DefaultInterpolation=Be,Qo.prototype.InterpolantFactoryMethodLinear=void 0,Qo.prototype.InterpolantFactoryMethodSmooth=void 0;var $o=class extends Go{constructor(e,t,n,r){super(e,t,n,r)}};$o.prototype.ValueTypeName=`vector`;var es=class extends Ln{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new W(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ts=class extends es{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.groundColor=new W(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ns=new U,rs=new H,is=new H,as=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new V(512,512),this.mapType=b,this.map=null,this.mapPass=null,this.matrix=new U,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ki,this._frameExtents=new V(1,1),this._viewportCount=1,this._viewports=[new on(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;rs.setFromMatrixPosition(e.matrixWorld),t.position.copy(rs),is.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(is),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){ns.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(ns,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(ns)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},os=new H,ss=new Bt,cs=new H,ls=class extends Ln{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new U,this.projectionMatrix=new U,this.projectionMatrixInverse=new U,this.coordinateSystem=tt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(os,ss,cs),cs.x===1&&cs.y===1&&cs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(os,ss,cs.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(os,ss,cs),cs.x===1&&cs.y===1&&cs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(os,ss,cs.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},us=new H,ds=new V,fs=new V,ps=class extends ls{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=gt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ht*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gt*2*Math.atan(Math.tan(ht*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){us.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(us.x,us.y).multiplyScalar(-e/us.z),us.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(us.x,us.y).multiplyScalar(-e/us.z)}getViewSize(e,t){return this.getViewBounds(e,ds,fs),t.subVectors(fs,ds)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ht*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ms=class extends as{constructor(){super(new ps(90,1,.5,500)),this.isPointLightShadow=!0}},hs=class extends es{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new ms}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},gs=class extends ls{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},_s=class extends as{constructor(){super(new gs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},vs=class extends es{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.target=new Ln,this.shadow=new _s}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},ys=class extends es{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type=`AmbientLight`}},bs=-90,xs=1,Ss=class extends Ln{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new ps(bs,xs,e,t);r.layers=this.layers,this.add(r);let i=new ps(bs,xs,e,t);i.layers=this.layers,this.add(i);let a=new ps(bs,xs,e,t);a.layers=this.layers,this.add(a);let o=new ps(bs,xs,e,t);o.layers=this.layers,this.add(o);let s=new ps(bs,xs,e,t);s.layers=this.layers,this.add(s);let c=new ps(bs,xs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Cs=class extends ps{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},ws=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Ts.bind(this),e.addEventListener(`visibilitychange`,this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener(`visibilitychange`,this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e===void 0?performance.now():e)-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Ts(){this._document.hidden===!1&&this.reset()}var Es=`\\[\\]\\.:\\/`,Ds=RegExp(`[\\[\\]\\.:\\/]`,`g`),Os=`[^\\[\\]\\.:\\/]`,ks=`[^`+Es.replace(`\\.`,``)+`]`,As=`((?:WC+[\\/:])*)`.replace(`WC`,Os),js=`(WCOD+)?`.replace(`WCOD`,ks),Ms=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Os),Ns=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Os),Ps=RegExp(`^`+As+js+Ms+Ns+`$`),Fs=[`material`,`materials`,`bones`,`map`],Is=class{constructor(e,t,n){let r=n||Ls.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ls=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Ds,``)}static parseTrackName(e){let t=Ps.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Fs.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){z(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){B(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){B(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){B(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){B(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){B(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){B(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){B(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;B(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){B(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){B(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ls.Composite=Is,Ls.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Ls.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Ls.prototype.GetterByBindingType=[Ls.prototype._getValue_direct,Ls.prototype._getValue_array,Ls.prototype._getValue_arrayElement,Ls.prototype._getValue_toArray],Ls.prototype.SetterByBindingTypeAndVersioning=[[Ls.prototype._setValue_direct,Ls.prototype._setValue_direct_setNeedsUpdate,Ls.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ls.prototype._setValue_array,Ls.prototype._setValue_array_setNeedsUpdate,Ls.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ls.prototype._setValue_arrayElement,Ls.prototype._setValue_arrayElement_setNeedsUpdate,Ls.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ls.prototype._setValue_fromArray,Ls.prototype._setValue_fromArray_setNeedsUpdate,Ls.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Rs=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){let e=1e-6;return this.phi=vt(this.phi,e,Math.PI-e),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(vt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};a=class{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}},a.prototype.isMatrix2=!0;var zs=class extends ft{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Bs(e,t,n,r){let i=Vs(r);switch(n){case N:return e*t;case ne:return e*t/i.components*i.byteLength;case re:return e*t/i.components*i.byteLength;case ie:return e*t*2/i.components*i.byteLength;case ae:return e*t*2/i.components*i.byteLength;case P:return e*t*3/i.components*i.byteLength;case F:return e*t*4/i.components*i.byteLength;case oe:return e*t*4/i.components*i.byteLength;case se:case I:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ce:case le:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case de:case pe:return Math.max(e,16)*Math.max(t,8)/4;case ue:case fe:return Math.max(e,8)*Math.max(t,8)/2;case me:case he:case _e:case ve:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ge:case ye:case be:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case xe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Se:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Ce:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case we:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Te:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Ee:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case De:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Oe:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case ke:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Ae:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case je:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case L:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Me:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Ne:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Pe:case R:case Fe:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Ie:case Le:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Re:case ze:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Vs(e){switch(e){case b:case x:return{byteLength:1,components:1};case C:case S:case D:return{byteLength:2,components:1};case O:case k:return{byteLength:2,components:4};case T:case w:case E:return{byteLength:4,components:1};case j:case M:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}})),typeof window<`u`&&(window.__THREE__?z(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function Hs(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Us(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Ws={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},G={common:{diffuse:{value:new W(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new V(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new W(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new W(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new W(16777215)},opacity:{value:1},center:{value:new V(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},Gs={basic:{uniforms:Co([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.fog]),vertexShader:Ws.meshbasic_vert,fragmentShader:Ws.meshbasic_frag},lambert:{uniforms:Co([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.fog,G.lights,{emissive:{value:new W(0)},envMapIntensity:{value:1}}]),vertexShader:Ws.meshlambert_vert,fragmentShader:Ws.meshlambert_frag},phong:{uniforms:Co([G.common,G.specularmap,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.fog,G.lights,{emissive:{value:new W(0)},specular:{value:new W(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ws.meshphong_vert,fragmentShader:Ws.meshphong_frag},standard:{uniforms:Co([G.common,G.envmap,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.roughnessmap,G.metalnessmap,G.fog,G.lights,{emissive:{value:new W(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ws.meshphysical_vert,fragmentShader:Ws.meshphysical_frag},toon:{uniforms:Co([G.common,G.aomap,G.lightmap,G.emissivemap,G.bumpmap,G.normalmap,G.displacementmap,G.gradientmap,G.fog,G.lights,{emissive:{value:new W(0)}}]),vertexShader:Ws.meshtoon_vert,fragmentShader:Ws.meshtoon_frag},matcap:{uniforms:Co([G.common,G.bumpmap,G.normalmap,G.displacementmap,G.fog,{matcap:{value:null}}]),vertexShader:Ws.meshmatcap_vert,fragmentShader:Ws.meshmatcap_frag},points:{uniforms:Co([G.points,G.fog]),vertexShader:Ws.points_vert,fragmentShader:Ws.points_frag},dashed:{uniforms:Co([G.common,G.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ws.linedashed_vert,fragmentShader:Ws.linedashed_frag},depth:{uniforms:Co([G.common,G.displacementmap]),vertexShader:Ws.depth_vert,fragmentShader:Ws.depth_frag},normal:{uniforms:Co([G.common,G.bumpmap,G.normalmap,G.displacementmap,{opacity:{value:1}}]),vertexShader:Ws.meshnormal_vert,fragmentShader:Ws.meshnormal_frag},sprite:{uniforms:Co([G.sprite,G.fog]),vertexShader:Ws.sprite_vert,fragmentShader:Ws.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ws.background_vert,fragmentShader:Ws.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:Ws.backgroundCube_vert,fragmentShader:Ws.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ws.cube_vert,fragmentShader:Ws.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ws.equirect_vert,fragmentShader:Ws.equirect_frag},distance:{uniforms:Co([G.common,G.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ws.distance_vert,fragmentShader:Ws.distance_frag},shadow:{uniforms:Co([G.lights,G.fog,{color:{value:new W(0)},opacity:{value:1}}]),vertexShader:Ws.shadow_vert,fragmentShader:Ws.shadow_frag}};Gs.physical={uniforms:Co([Gs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new V(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new W(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new V},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new W(0)},specularColor:{value:new W(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new V},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Ws.meshphysical_vert,fragmentShader:Ws.meshphysical_frag};var Ks={r:0,b:0,g:0},qs=new U,Js=new Ut;Js.set(-1,0,0,0,1,0,0,0,1);function Ys(e,t,n,r,i,a){let o=new W(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new Ai(new Qi(1,1,1),new Ao({name:`BackgroundCubeMaterial`,uniforms:So(Gs.backgroundCube.uniforms),vertexShader:Gs.backgroundCube.vertexShader,fragmentShader:Gs.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(qs.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Js),l.material.toneMapped=Jt.getTransfer(i.colorSpace)!==Ze,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new Ai(new yo(2,2),new Ao({name:`BackgroundMaterial`,uniforms:So(Gs.background.uniforms),vertexShader:Gs.background.vertexShader,fragmentShader:Gs.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Jt.getTransfer(i.colorSpace)!==Ze,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(Ks,Eo(e)),n.buffers.color.setClear(Ks.r,Ks.g,Ks.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Xs(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Zs(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Qs(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(z(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&z(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function $s(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Jr,s=new Ut,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var ec=4,tc=6,nc=20,rc=256,ic=new gs,ac=new W,oc=null,sc=0,cc=0,lc=!1,uc=new H,dc=new H,fc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=uc}=i;oc=this._renderer.getRenderTarget(),sc=this._renderer.getActiveCubeFace(),cc=this._renderer.getActiveMipmapLevel(),lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(oc,sc,cc),this._renderer.xr.enabled=lc,e.scissorTest=!1,hc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),oc=this._renderer.getRenderTarget(),sc=this._renderer.getActiveCubeFace(),cc=this._renderer.getActiveMipmapLevel(),lc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:_,minFilter:_,generateMipmaps:!1,type:D,format:F,colorSpace:Ye,depthBuffer:!1},r=mc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mc(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=pc(r)),this._blurMaterial=_c(r,e,t),this._ggxMaterial=gc(r,e,t)}return r}_compileMaterial(e){let t=new Ai(new Vr,e);this._renderer.compile(t,ic)}_sceneToCubeUV(e,t,n,r,i){let a=new ps(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(ac),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ai(new Qi,new vi({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(ac),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;hc(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=yc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vc());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;hc(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,ic)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-ec?n-d+ec:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,hc(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,ic),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,hc(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,ic)}_blur(e,t,n,r){let i=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,n,a),this._blurPass(i,e,n,n,a)}_blurPass(e,t,n,r,i){let a=this._renderer,o=this._blurMaterial,s=this._lodMeshes[r];s.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-n;let l=this._sizeLods[r];hc(t,3*l*(r>this._lodMax-ec?r-this._lodMax+ec:0),4*(this._cubeSize-l),3*l,2*l),a.setRenderTarget(t),a.render(s,ic)}};function pc(e){let t=[],n=[],r=e,i=e-ec+1+tc;for(let e=0;e<i;e++){let e=2**r;t.push(e);let i=1/(e-2),a=-i,o=1+i,s=[a,a,o,a,o,o,a,a,o,o,a,o],c=new Float32Array(108),l=new Float32Array(108);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];c.set(r,18*e);for(let t=0;t<6;t++){let n=s[t*2]*2-1,r=s[t*2+1]*2-1;e===0?dc.set(1,r,n):e===1?dc.set(-n,1,-r):e===2?dc.set(-n,r,1):e===3?dc.set(-1,r,-n):e===4?dc.set(-n,-1,r):dc.set(n,r,-1),dc.toArray(l,(e*6+t)*3)}}let u=new Vr;u.setAttribute(`position`,new Er(c,3)),u.setAttribute(`outputDirection`,new Er(l,3)),n.push(new Ai(u,null)),r>ec&&r--}return{lodMeshes:n,sizeLods:t}}function mc(e,t,n){let r=new cn(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function hc(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function gc(e,t,n){return new Ao({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:rc,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:bc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function _c(e,t,n){return new Ao({name:`SphericalGaussianBlur`,defines:{SAMPLES:nc,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:bc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function vc(){return new Ao({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function yc(){return new Ao({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function bc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var xc=class extends cn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new qi(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Qi(5,5,5),i=new Ao({name:`CubemapFromEquirect`,uniforms:So(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Ai(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=_),new Ss(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Sc(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new xc(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new fc(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new fc(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Cc(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&lt(`WebGLRenderer: `+e+` extension not supported.`),t}}}function wc(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?Or:Dr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Tc(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Ec(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:B(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Dc(e,t,n){let r=new WeakMap,i=new on;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new ln(h,p,m,u);g.type=E,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new V(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Oc(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var kc={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function Ac(e,t,n,r,i,a){let o=new cn(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=new Vr;l.setAttribute(`position`,new kr([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new kr([0,2,0,0,2,0],2));let u=new jo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Ai(l,u),f=new gs(-1,1,1,-1,0,1),p=null,m=null,h=!1,g,_=null,v=[],y=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<v.length;n++){let r=v[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){v=e,y=v.length>0&&v[0].isRenderPass===!0;let t=o.width,n=o.height;v.length>0&&s===null&&(s=new cn(t,n,{type:D,depthBuffer:!1,stencilBuffer:!1}),c=new cn(t,n,{type:D,depthBuffer:!1,stencilBuffer:!1}));for(let e=0;e<v.length;e++){let r=v[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(h||e.toneMapping===0&&v.length===0)return!1;if(_=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return y===!1&&e.setRenderTarget(o),g=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return y},this.end=function(e,t){e.toneMapping=g,h=!0;let n=o,r=s;for(let i=0;i<v.length;i++){let a=v[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(p!==e.outputColorSpace||m!==e.toneMapping){p=e.outputColorSpace,m=e.toneMapping,u.defines={},Jt.getTransfer(p)===`srgb`&&(u.defines.SRGB_TRANSFER=``);let t=kc[m];t&&(u.defines[t]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(_),e.render(d,f),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var jc=new an,Mc=new Yi(1,1),Nc=new ln,Pc=new un,Fc=new qi,Ic=[],Lc=[],Rc=new Float32Array(16),zc=new Float32Array(9),Bc=new Float32Array(4);function Vc(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Ic[i];if(a===void 0&&(a=new Float32Array(i),Ic[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Hc(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Uc(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function Wc(e,t){let n=Lc[t];n===void 0&&(n=new Int32Array(t),Lc[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Gc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Kc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Hc(n,t))return;e.uniform2fv(this.addr,t),Uc(n,t)}}function qc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Hc(n,t))return;e.uniform3fv(this.addr,t),Uc(n,t)}}function Jc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Hc(n,t))return;e.uniform4fv(this.addr,t),Uc(n,t)}}function Yc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Hc(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Uc(n,t)}else{if(Hc(n,r))return;Bc.set(r),e.uniformMatrix2fv(this.addr,!1,Bc),Uc(n,r)}}function Xc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Hc(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Uc(n,t)}else{if(Hc(n,r))return;zc.set(r),e.uniformMatrix3fv(this.addr,!1,zc),Uc(n,r)}}function Zc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Hc(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Uc(n,t)}else{if(Hc(n,r))return;Rc.set(r),e.uniformMatrix4fv(this.addr,!1,Rc),Uc(n,r)}}function Qc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function $c(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Hc(n,t))return;e.uniform2iv(this.addr,t),Uc(n,t)}}function el(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Hc(n,t))return;e.uniform3iv(this.addr,t),Uc(n,t)}}function tl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Hc(n,t))return;e.uniform4iv(this.addr,t),Uc(n,t)}}function nl(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function rl(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Hc(n,t))return;e.uniform2uiv(this.addr,t),Uc(n,t)}}function il(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Hc(n,t))return;e.uniform3uiv(this.addr,t),Uc(n,t)}}function al(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Hc(n,t))return;e.uniform4uiv(this.addr,t),Uc(n,t)}}function ol(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Mc.compareFunction=n.isReversedDepthBuffer()?518:515,a=Mc):a=jc,n.setTexture2D(t||a,i)}function sl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Pc,i)}function cl(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Fc,i)}function ll(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Nc,i)}function ul(e){switch(e){case 5126:return Gc;case 35664:return Kc;case 35665:return qc;case 35666:return Jc;case 35674:return Yc;case 35675:return Xc;case 35676:return Zc;case 5124:case 35670:return Qc;case 35667:case 35671:return $c;case 35668:case 35672:return el;case 35669:case 35673:return tl;case 5125:return nl;case 36294:return rl;case 36295:return il;case 36296:return al;case 35678:case 36198:case 36298:case 36306:case 35682:return ol;case 35679:case 36299:case 36307:return sl;case 35680:case 36300:case 36308:case 36293:return cl;case 36289:case 36303:case 36311:case 36292:return ll}}function dl(e,t){e.uniform1fv(this.addr,t)}function fl(e,t){let n=Vc(t,this.size,2);e.uniform2fv(this.addr,n)}function pl(e,t){let n=Vc(t,this.size,3);e.uniform3fv(this.addr,n)}function ml(e,t){let n=Vc(t,this.size,4);e.uniform4fv(this.addr,n)}function hl(e,t){let n=Vc(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function gl(e,t){let n=Vc(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function _l(e,t){let n=Vc(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function vl(e,t){e.uniform1iv(this.addr,t)}function yl(e,t){e.uniform2iv(this.addr,t)}function bl(e,t){e.uniform3iv(this.addr,t)}function xl(e,t){e.uniform4iv(this.addr,t)}function Sl(e,t){e.uniform1uiv(this.addr,t)}function Cl(e,t){e.uniform2uiv(this.addr,t)}function wl(e,t){e.uniform3uiv(this.addr,t)}function Tl(e,t){e.uniform4uiv(this.addr,t)}function El(e,t,n){let r=this.cache,i=t.length,a=Wc(n,i);Hc(r,a)||(e.uniform1iv(this.addr,a),Uc(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Mc:jc;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Dl(e,t,n){let r=this.cache,i=t.length,a=Wc(n,i);Hc(r,a)||(e.uniform1iv(this.addr,a),Uc(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Pc,a[e])}function Ol(e,t,n){let r=this.cache,i=t.length,a=Wc(n,i);Hc(r,a)||(e.uniform1iv(this.addr,a),Uc(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Fc,a[e])}function kl(e,t,n){let r=this.cache,i=t.length,a=Wc(n,i);Hc(r,a)||(e.uniform1iv(this.addr,a),Uc(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Nc,a[e])}function Al(e){switch(e){case 5126:return dl;case 35664:return fl;case 35665:return pl;case 35666:return ml;case 35674:return hl;case 35675:return gl;case 35676:return _l;case 5124:case 35670:return vl;case 35667:case 35671:return yl;case 35668:case 35672:return bl;case 35669:case 35673:return xl;case 5125:return Sl;case 36294:return Cl;case 36295:return wl;case 36296:return Tl;case 35678:case 36198:case 36298:case 36306:case 35682:return El;case 35679:case 36299:case 36307:return Dl;case 35680:case 36300:case 36308:case 36293:return Ol;case 36289:case 36303:case 36311:case 36292:return kl}}var jl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ul(t.type)}},Ml=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Al(t.type)}},Nl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Pl=/(\w+)(\])?(\[|\.)?/g;function Fl(e,t){e.seq.push(t),e.map[t.id]=t}function Il(e,t,n){let r=e.name,i=r.length;for(Pl.lastIndex=0;;){let a=Pl.exec(r),o=Pl.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Fl(n,l===void 0?new jl(s,e,t):new Ml(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Nl(s),Fl(n,e)),n=e}}}var Ll=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);Il(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Rl(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var zl=37297,Bl=0;function Vl(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Hl=new Ut;function Ul(e){Jt._getMatrix(Hl,Jt.workingColorSpace,e);let t=`mat3( ${Hl.elements.map(e=>e.toFixed(4))} )`;switch(Jt.getTransfer(e)){case Xe:return[t,`LinearTransferOETF`];case Ze:return[t,`sRGBTransferOETF`];default:return z(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Wl(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Vl(e.getShaderSource(t),r)}return i}function Gl(e,t){let n=Ul(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var Kl={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function ql(e,t){let n=Kl[t];return n===void 0?(z(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Jl=new H;function Yl(){return Jt.getLuminanceCoefficients(Jl),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Jl.x.toFixed(4)}, ${Jl.y.toFixed(4)}, ${Jl.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Xl(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter($l).join(`
`)}function Zl(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Ql(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function $l(e){return e!==``}function eu(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function tu(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var nu=/^[ \t]*#include +<([\w\d./]+)>/gm;function ru(e){return e.replace(nu,au)}var iu=new Map;function au(e,t){let n=Ws[t];if(n===void 0){let e=iu.get(t);if(e!==void 0)n=Ws[e],z(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return ru(n)}var ou=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function su(e){return e.replace(ou,cu)}function cu(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function lu(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var uu={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function du(e){return uu[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var fu={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function pu(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:fu[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var mu={302:`ENVMAP_MODE_REFRACTION`};function hu(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:mu[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var gu={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function _u(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:gu[e.combine]||`ENVMAP_BLENDING_NONE`}function vu(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function yu(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=du(n),l=pu(n),u=hu(n),d=_u(n),f=vu(n),p=Xl(n),m=Zl(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter($l).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter($l).join(`
`),_.length>0&&(_+=`
`)):(g=[lu(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter($l).join(`
`),_=[lu(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Ws.tonemapping_pars_fragment,n.toneMapping===0?``:ql(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Ws.colorspace_pars_fragment,Gl(`linearToOutputTexel`,n.outputColorSpace),Yl(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter($l).join(`
`)),o=ru(o),o=eu(o,n),o=tu(o,n),s=ru(s),s=eu(s,n),s=tu(s,n),o=su(o),s=su(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=Rl(i,i.VERTEX_SHADER,y),S=Rl(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=Wl(i,x,`vertex`),n=Wl(i,S,`fragment`);B(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):z(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new Ll(i,h),T=Ql(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,zl)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Bl++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var bu=0,xu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Su(e),t.set(e,n)),n}},Su=class{constructor(e){this.id=bu++,this.code=e,this.usedTimes=0}};function Cu(e){return e===1030||e===37490||e===36285}function wu(e,t,n,r,i,a){let o=new xn,s=new xu,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&z(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,k,A;if(C){let e=Gs[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),k=e.id,A=t.id}let j=e.getRenderTarget(),M=e.state.buffers.depth.getReversed(),N=h.isInstancedMesh===!0,P=h.isBatchedMesh===!0,F=!!i.map,ee=!!i.matcap,te=!!x,ne=!!i.aoMap,re=!!i.lightMap,ie=!!i.bumpMap&&i.wireframe===!1,ae=!!i.normalMap,oe=!!i.displacementMap,se=!!i.emissiveMap,I=!!i.metalnessMap,ce=!!i.roughnessMap,le=i.anisotropy>0,ue=i.clearcoat>0,de=i.dispersion>0,fe=i.retroreflectivity>0,pe=i.iridescence>0,me=i.sheen>0,he=i.transmission>0,ge=le&&!!i.anisotropyMap,_e=ue&&!!i.clearcoatMap,ve=ue&&!!i.clearcoatNormalMap,ye=ue&&!!i.clearcoatRoughnessMap,be=pe&&!!i.iridescenceMap,xe=pe&&!!i.iridescenceThicknessMap,Se=me&&!!i.sheenColorMap,Ce=me&&!!i.sheenRoughnessMap,we=!!i.specularMap,Te=!!i.specularColorMap,Ee=!!i.specularIntensityMap,De=he&&!!i.transmissionMap,Oe=he&&!!i.thicknessMap,ke=!!i.gradientMap,Ae=!!i.alphaMap,je=i.alphaTest>0,L=!!i.alphaHash,Me=!!i.extensions,Ne=0;i.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ne=e.toneMapping);let Pe={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:k,customFragmentShaderID:A,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:P,batchingColor:P&&h._colorsTexture!==null,instancing:N,instancingColor:N&&h.instanceColor!==null,instancingMorph:N&&h.morphTexture!==null,outputColorSpace:j===null?e.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Jt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:F,matcap:ee,envMap:te,envMapMode:te&&x.mapping,envMapCubeUVHeight:S,aoMap:ne,lightMap:re,bumpMap:ie,normalMap:ae,displacementMap:oe,emissiveMap:se,normalMapObjectSpace:ae&&i.normalMapType===1,normalMapTangentSpace:ae&&i.normalMapType===0,packedNormalMap:ae&&i.normalMapType===0&&Cu(i.normalMap.format),metalnessMap:I,roughnessMap:ce,anisotropy:le,anisotropyMap:ge,clearcoat:ue,clearcoatMap:_e,clearcoatNormalMap:ve,clearcoatRoughnessMap:ye,dispersion:de,retroreflection:fe,iridescence:pe,iridescenceMap:be,iridescenceThicknessMap:xe,sheen:me,sheenColorMap:Se,sheenRoughnessMap:Ce,specularMap:we,specularColorMap:Te,specularIntensityMap:Ee,transmission:he,transmissionMap:De,thicknessMap:Oe,gradientMap:ke,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Ae,alphaTest:je,alphaHash:L,combine:i.combine,mapUv:F&&m(i.map.channel),aoMapUv:ne&&m(i.aoMap.channel),lightMapUv:re&&m(i.lightMap.channel),bumpMapUv:ie&&m(i.bumpMap.channel),normalMapUv:ae&&m(i.normalMap.channel),displacementMapUv:oe&&m(i.displacementMap.channel),emissiveMapUv:se&&m(i.emissiveMap.channel),metalnessMapUv:I&&m(i.metalnessMap.channel),roughnessMapUv:ce&&m(i.roughnessMap.channel),anisotropyMapUv:ge&&m(i.anisotropyMap.channel),clearcoatMapUv:_e&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:ve&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&m(i.sheenRoughnessMap.channel),specularMapUv:we&&m(i.specularMap.channel),specularColorMapUv:Te&&m(i.specularColorMap.channel),specularIntensityMapUv:Ee&&m(i.specularIntensityMap.channel),transmissionMapUv:De&&m(i.transmissionMap.channel),thicknessMapUv:Oe&&m(i.thicknessMap.channel),alphaMapUv:Ae&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(ae||le),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(F||Ae),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&ae===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:M,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ne,decodeVideoTexture:F&&i.map.isVideoTexture===!0&&Jt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:se&&i.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Me&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Me&&i.extensions.multiDraw===!0||P)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Pe.vertexUv1s=c.has(1),Pe.vertexUv2s=c.has(2),Pe.vertexUv3s=c.has(3),c.clear(),Pe}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=Gs[t];n=Do.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new yu(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function Tu(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Eu(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Du(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Ou(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Eu),r.length>1&&r.sort(t||Du),i.length>1&&i.sort(t||Du)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function ku(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Ou,e.set(t,[i])):n>=r.length?(i=new Ou,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Au(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new H,color:new W};break;case`SpotLight`:n={position:new H,direction:new H,color:new W,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new H,color:new W,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new H,skyColor:new W,groundColor:new W};break;case`RectAreaLight`:n={color:new W,position:new H,halfWidth:new H,halfHeight:new H}}return e[t.id]=n,n}}}function ju(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Mu=0;function Nu(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Pu(e){let t=new Au,n=ju(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new H);let i=new H,a=new U,o=new U;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Nu);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=G.LTC_FLOAT_1,r.rectAreaLTC2=G.LTC_FLOAT_2):(r.rectAreaLTC1=G.LTC_HALF_1,r.rectAreaLTC2=G.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=Mu++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Fu(e){let t=new Pu(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function Iu(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Fu(e),t.set(n,[a])):r>=i.length?(a=new Fu(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Lu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ru=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,zu=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],Bu=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],Vu=new U,Hu=new H,Uu=new H;function Wu(e,t,n){let r=new Ki,i=new V,a=new V,o=new on,s=new No,c=new Po,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new Ao({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new V},radius:{value:4}},vertexShader:Lu,fragmentShader:Ru}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let h=new Vr;h.setAttribute(`position`,new Er(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Ai(h,f),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let y=this.type;this.render=function(t,n,s){if(window.__galleryCaptureScene)return;if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||t.length===0)return;this.type===2&&(z(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=y!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){z(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let h=d.getFrameExtents();i.multiply(h),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/h.x),i.x=a.x*h.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/h.y),i.y=a.y*h.y,d.mapSize.y=a.y));let g=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=g,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){z(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new cn(i.x,i.y,{format:ie,type:D,minFilter:_,magFilter:_,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new Yi(i.x,i.y,E),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=ee,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=m,d.map.depthTexture.magFilter=m}else l.isPointLight?(d.map=new xc(i.x),d.map.depthTexture=new Xi(i.x,T)):(d.map=new cn(i.x,i.y),d.map.depthTexture=new Yi(i.x,i.y,T)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=ee,this.type===1?(d.map.depthTexture.compareFunction=g?518:515,d.map.depthTexture.minFilter=_,d.map.depthTexture.magFilter=_):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=m,d.map.depthTexture.magFilter=m);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let v=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);for(let t=0;t<v;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Hu.setFromMatrixPosition(l.matrixWorld),e.position.copy(Hu),Uu.copy(e.position),Uu.add(zu[t]),e.up.copy(Bu[t]),e.lookAt(Uu),e.updateMatrixWorld(),n.makeTranslation(-Hu.x,-Hu.y,-Hu.z),Vu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Vu,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),S(n,s,i,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&b(d,s),d.needsUpdate=!1}y=this.type,v.needsUpdate=!1,e.setRenderTarget(c,l,d)};function b(n,r){let a=t.update(g);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new cn(i.x,i.y,{format:ie,type:D}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,g,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,g,null)}function x(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,C)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function S(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=x(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=x(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)S(c[e],i,a,o,s)}function C(e){e.target.removeEventListener(`dispose`,C);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Gu(e,t){function n(){let t=!1,n=new on,r=null,i=new on(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?I(e.DEPTH_TEST):ce(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=dt[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?I(e.STENCIL_TEST):ce(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new W(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,P=0,F=e.getParameter(e.VERSION);F.indexOf(`WebGL`)===-1?F.indexOf(`OpenGL ES`)!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),N=P>=2):(P=parseFloat(/^WebGL (\d)/.exec(F)[1]),N=P>=1);let ee=null,te={},ne=e.getParameter(e.SCISSOR_BOX),re=e.getParameter(e.VIEWPORT),ie=new on().fromArray(ne),ae=new on().fromArray(re);function oe(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let se={};se[e.TEXTURE_2D]=oe(e.TEXTURE_2D,e.TEXTURE_2D,1),se[e.TEXTURE_CUBE_MAP]=oe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[e.TEXTURE_2D_ARRAY]=oe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),se[e.TEXTURE_3D]=oe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),I(e.DEPTH_TEST),o.setFunc(3),ge(!1),_e(1),I(e.CULL_FACE),me(0);function I(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function ce(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function le(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function ue(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function de(t){return h!==t&&(e.useProgram(t),h=t,!0)}let fe={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};fe[103]=e.MIN,fe[104]=e.MAX;let pe={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function me(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(ce(e.BLEND),g=!1);return}if(g===!1&&(I(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:B(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:B(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:B(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:B(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a=a||n,o=o||r,s=s||i,(n!==v||a!==x)&&(e.blendEquationSeparate(fe[n],fe[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(pe[r],pe[i],pe[o],pe[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function he(t,n){t.side===2?ce(e.CULL_FACE):I(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ge(r),t.blending===1&&t.transparent===!1?me(0):me(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),ye(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?I(e.SAMPLE_ALPHA_TO_COVERAGE):ce(e.SAMPLE_ALPHA_TO_COVERAGE)}function ge(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function _e(t){t===0?ce(e.CULL_FACE):(I(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function ve(t){t!==k&&(N&&e.lineWidth(t),k=t)}function ye(t,n,r){t?(I(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):ce(e.POLYGON_OFFSET_FILL)}function be(t){t?I(e.SCISSOR_TEST):ce(e.SCISSOR_TEST)}function xe(t){t===void 0&&(t=e.TEXTURE0+M-1),ee!==t&&(e.activeTexture(t),ee=t)}function Se(t,n,r){r===void 0&&(r=ee===null?e.TEXTURE0+M-1:ee);let i=te[r];i===void 0&&(i={type:void 0,texture:void 0},te[r]=i),(i.type!==t||i.texture!==n)&&(ee!==r&&(e.activeTexture(r),ee=r),e.bindTexture(t,n||se[t]),i.type=t,i.texture=n)}function Ce(){let t=te[ee];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function we(){try{e.compressedTexImage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Te(){try{e.compressedTexImage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Ee(){try{e.texSubImage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function De(){try{e.texSubImage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Oe(){try{e.compressedTexSubImage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function ke(){try{e.compressedTexSubImage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Ae(){try{e.texStorage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function je(){try{e.texStorage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function L(){try{e.texImage2D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Me(){try{e.texImage3D(...arguments)}catch(e){B(`WebGLState:`,e)}}function Ne(t){return d[t]===void 0?e.getParameter(t):d[t]}function Pe(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function R(t){ie.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ie.copy(t))}function Fe(t){ae.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ae.copy(t))}function Ie(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Le(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Re(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},ee=null,te={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new W(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,ie.set(0,0,e.canvas.width,e.canvas.height),ae.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:I,disable:ce,bindFramebuffer:le,drawBuffers:ue,useProgram:de,setBlending:me,setMaterial:he,setFlipSided:ge,setCullFace:_e,setLineWidth:ve,setPolygonOffset:ye,setScissorTest:be,activeTexture:xe,bindTexture:Se,unbindTexture:Ce,compressedTexImage2D:we,compressedTexImage3D:Te,texImage2D:L,texImage3D:Me,pixelStorei:Pe,getParameter:Ne,updateUBOMapping:Ie,uniformBlockBinding:Le,texStorage2D:Ae,texStorage3D:je,texSubImage2D:Ee,texSubImage3D:De,compressedTexSubImage2D:Oe,compressedTexSubImage3D:ke,scissor:R,viewport:Fe,reset:Re}}function Ku(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new V,u=new WeakMap,b=new Set,x,S=new WeakMap,C=!1;try{C=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function w(e,t){return C?new OffscreenCanvas(e,t):it(`canvas`)}function T(e,t,n){let r=1,i=Ne(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=w(n,a));let o=t?w(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),z(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&z(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function E(e){return e.generateMipmaps}function D(t){e.generateMipmap(t)}function O(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function k(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];z(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||z(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?Xe:Jt.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function A(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,z(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function j(e,t){return E(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function M(e){let t=e.target;t.removeEventListener(`dispose`,M),P(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&b.delete(t)}function N(e){let t=e.target;t.removeEventListener(`dispose`,N),ee(t)}function P(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=S.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&F(e),Object.keys(i).length===0&&S.delete(n)}r.remove(e)}function F(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=S.get(i);delete a[n.__cacheKey],o.memory.textures--}function ee(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let ne=0;function re(){ne=0}function ie(){return ne}function ae(e){ne=e}function oe(){let e=ne;return e>=i.maxTextures&&z(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),ne+=1,e}function se(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function I(t,i){let a=r.get(t);if(t.isVideoTexture&&L(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)z(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)z(`WebGLRenderer: Texture marked for update but image is incomplete`);else{ve(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function ce(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){ve(a,t,i);return}t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function le(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){ve(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function ue(t,i){let a=r.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version){ye(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let de={[d]:e.REPEAT,[f]:e.CLAMP_TO_EDGE,[p]:e.MIRRORED_REPEAT},fe={[m]:e.NEAREST,[h]:e.NEAREST_MIPMAP_NEAREST,[g]:e.NEAREST_MIPMAP_LINEAR,[_]:e.LINEAR,[v]:e.LINEAR_MIPMAP_NEAREST,[y]:e.LINEAR_MIPMAP_LINEAR},pe={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function me(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&z(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,de[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,de[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,de[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,fe[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,fe[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,pe[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function he(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,M));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let s=se(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&F(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function ge(e,t,n){return Math.floor(Math.floor(e/n)/t)}function _e(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=ge(n.start,r.width,4),c=ge(t.start,r.width,4);n.start<=i+1&&a===c&&ge(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function ve(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=he(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let d=r.get(u);if(u.version!==d.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=Jt.getPrimaries(Jt.workingColorSpace),r=o.colorSpace===``?null:Jt.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=T(o.image,!1,i.maxTextureSize);t=Me(o,t);let r=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=k(o.internalFormat,r,f,o.normalized,o.colorSpace,o.isVideoTexture);me(c,o);let m,h=o.mipmaps,g=o.isVideoTexture!==!0,_=d.__version===void 0||l===!0,v=u.dataReady,y=j(o,t);if(o.isDepthTexture)p=A(o.format===te,o.type),_&&(g?n.texStorage2D(e.TEXTURE_2D,1,p,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,p,t.width,t.height,0,r,f,null));else if(o.isDataTexture){if(h.length>0){g&&_&&n.texStorage2D(e.TEXTURE_2D,y,p,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)m=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,f,m.data):n.texImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,r,f,m.data);o.generateMipmaps=!1}else g?(_&&n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height),v&&_e(o,t,r,f)):n.texImage2D(e.TEXTURE_2D,0,p,t.width,t.height,0,r,f,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){g&&_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,p,h[0].width,h[0].height,t.depth);for(let i=0,a=h.length;i<a;i++)if(m=h[i],o.format!==1023){if(r!==null){if(g){if(v){if(o.layerUpdates.size>0){let t=Bs(m.width,m.height,o.format,o.type);for(let a of o.layerUpdates){let o=m.data.subarray(a*t/m.data.BYTES_PER_ELEMENT,(a+1)*t/m.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,m.width,m.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,m.width,m.height,t.depth,r,m.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,p,m.width,m.height,t.depth,0,m.data,0,0)}else z(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,m.width,m.height,t.depth,r,f,m.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,p,m.width,m.height,t.depth,0,r,f,m.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{g&&_&&n.texStorage2D(e.TEXTURE_2D,y,p,h[0].width,h[0].height);for(let t=0,i=h.length;t<i;t++)m=h[t],o.format===1023?g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,f,m.data):n.texImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,r,f,m.data):r===null?z(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,m.width,m.height,r,m.data):n.compressedTexImage2D(e.TEXTURE_2D,t,p,m.width,m.height,0,m.data)}}else if(o.isDataArrayTexture){if(g){if(_&&n.texStorage3D(e.TEXTURE_2D_ARRAY,y,p,t.width,t.height,t.depth),v){if(o.layerUpdates.size>0){let i=Bs(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,f,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,f,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,p,t.width,t.height,t.depth,0,r,f,t.data)}else if(o.isData3DTexture)g?(_&&n.texStorage3D(e.TEXTURE_3D,y,p,t.width,t.height,t.depth),v&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,f,t.data)):n.texImage3D(e.TEXTURE_3D,0,p,t.width,t.height,t.depth,0,r,f,t.data);else if(o.isFramebufferTexture){if(_){if(g)n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<y;t++)n.texImage2D(e.TEXTURE_2D,t,p,i,a,0,r,f,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),b.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=Ne(h[0]);n.texStorage2D(e.TEXTURE_2D,y,p,t.width,t.height)}for(let t=0,i=h.length;t<i;t++)m=h[t],g?v&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,f,m):n.texImage2D(e.TEXTURE_2D,t,p,r,f,m);o.generateMipmaps=!1}else if(g){if(_){let r=Ne(t);n.texStorage2D(e.TEXTURE_2D,y,p,r.width,r.height)}v&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,f,t)}else n.texImage2D(e.TEXTURE_2D,0,p,r,f,t);E(o)&&D(c),d.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ye(t,o,s){if(o.image.length!==6)return;let c=he(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=Jt.getPrimaries(Jt.workingColorSpace),r=o.colorSpace===``?null:Jt.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=T(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=Me(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),_=a.convert(o.type),v=k(o.internalFormat,g,_,o.normalized,o.colorSpace),y=o.isVideoTexture!==!0,b=u.__version===void 0||c===!0,x=l.dataReady,S=j(o,h);me(e.TEXTURE_CUBE_MAP,o);let C;if(f){y&&b&&n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=m[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];o.format===1023?y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?z(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=o.mipmaps,y&&b){C.length>0&&S++;let t=Ne(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(p){y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<C.length;r++){let i=C[r].image[t].image;y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,i.width,i.height,0,g,_,i.data)}}else{y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,m[t]);for(let r=0;r<C.length;r++){let i=C[r];y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,g,_,i.image[t])}}}E(o)&&D(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function be(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=k(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),je(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Ae(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function xe(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=A(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;je(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ae(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ae(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=k(o.internalFormat,c,l,o.normalized,o.colorSpace);je(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ae(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ae(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Se(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,M)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),me(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else I(i.depthTexture,0);let u=l.__webglTexture,d=Ae(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)je(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)je(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Ce(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)Se(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?Se(i.__webglFramebuffer[0],t,0):Se(i.__webglFramebuffer,t,0)}}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),xe(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),xe(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function we(t,n,i){let a=r.get(t);n!==void 0&&be(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&Ce(t)}function Te(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,N);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&je(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=k(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Ae(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),xe(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),me(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)be(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else be(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);E(i)&&D(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),me(c,a),be(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),E(a)&&D(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),me(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)be(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else be(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);E(i)&&D(r),n.unbindTexture()}t.depthBuffer&&Ce(t)}function Ee(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(E(a)){let t=O(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),D(t),n.unbindTexture()}}}let De=[],Oe=[];function ke(t){if(t.samples>0){if(je(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(De.length=0,Oe.length=0,De.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&(De.push(l),Oe.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Oe)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,De))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Ae(e){return Math.min(i.maxSamples,e.samples)}function je(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function L(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function Me(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Jt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&z(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):B(`WebGLTextures: Unsupported texture color space:`,n)),t}function Ne(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=oe,this.resetTextureUnits=re,this.getTextureUnits=ie,this.setTextureUnits=ae,this.setTexture2D=I,this.setTexture2DArray=ce,this.setTexture3D=le,this.setTextureCube=ue,this.rebindTextures=we,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=Ee,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=be,this.useMultisampledRTT=je,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function qu(e,t){function n(n,r=``){let i,a=Jt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Ju=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Yu=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Xu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Zi(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ao({vertexShader:Ju,fragmentShader:Yu,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ai(new yo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Zu=class extends ft{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new Xu,g={},_=t.getContextAttributes(),v=null,y=null,x=[],S=[],C=new V,w=null,E=null,D=new ps;D.viewport=new on;let O=new ps;O.viewport=new on;let k=[D,O],j=new Cs,M=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=x[e];return t===void 0&&(t=new Bn,x[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=x[e];return t===void 0&&(t=new Bn,x[e]=t),t.getGripSpace()},this.getHand=function(e){let t=x[e];return t===void 0&&(t=new Bn,x[e]=t),t.getHandSpace()};function P(e){let t=S.indexOf(e.inputSource);if(t===-1)return;let n=x[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ne(){r.removeEventListener(`select`,P),r.removeEventListener(`selectstart`,P),r.removeEventListener(`selectend`,P),r.removeEventListener(`squeeze`,P),r.removeEventListener(`squeezestart`,P),r.removeEventListener(`squeezeend`,P),r.removeEventListener(`end`,ne),r.removeEventListener(`inputsourceschange`,re);for(let e=0;e<x.length;e++){let t=S[e];t!==null&&(S[e]=null,x[e].disconnect(t))}M=null,N=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,ue.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(C.width,C.height,!1),E!==null){let e=E.camera;e.fov=E.fov,e.zoom=E.zoom,e.updateProjectionMatrix(),E=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&z(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&z(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,P),r.addEventListener(`selectstart`,P),r.addEventListener(`selectend`,P),r.addEventListener(`squeeze`,P),r.addEventListener(`squeezestart`,P),r.addEventListener(`squeezeend`,P),r.addEventListener(`end`,ne),r.addEventListener(`inputsourceschange`,re),_.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(C),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?te:ee,a=_.stencil?A:T);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new cn(d.textureWidth,d.textureHeight,{format:F,type:b,depthTexture:new Yi(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new cn(f.framebufferWidth,f.framebufferHeight,{format:F,type:b,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),ue.setContext(r),ue.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function re(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=S.indexOf(n);r>=0&&(S[r]=null,x[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=S.indexOf(n);if(r===-1){for(let e=0;e<x.length;e++)if(e>=S.length){S.push(n),r=e;break}else if(S[e]===null){S[e]=n,r=e;break}if(r===-1)break}let i=x[r];i&&i.connect(n)}}let ie=new H,ae=new H;function oe(e,t,n){ie.setFromMatrixPosition(t.matrixWorld),ae.setFromMatrixPosition(n.matrixWorld);let r=ie.distanceTo(ae),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function se(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),j.near=O.near=D.near=t,j.far=O.far=D.far=n,(M!==j.near||N!==j.far)&&(r.updateRenderState({depthNear:j.near,depthFar:j.far}),M=j.near,N=j.far),j.layers.mask=e.layers.mask|6,D.layers.mask=j.layers.mask&-5,O.layers.mask=j.layers.mask&-3;let i=e.parent,a=j.cameras;se(j,i);for(let e=0;e<a.length;e++)se(a[e],i);a.length===2?oe(j,D,O):j.projectionMatrix.copy(D.projectionMatrix),E===null&&e.isPerspectiveCamera&&(E={camera:e,fov:e.fov,zoom:e.zoom}),I(e,j,i)};function I(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=gt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(j)},this.getCameraTexture=function(e){return g[e]};let ce=null;function le(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==j.cameras.length&&(j.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=k[n];o===void 0&&(o=new ps,o.layers.enable(n),o.viewport=new on,k[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(j.matrix.copy(o.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),i===!0&&j.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new Zi,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<x.length;e++){let t=S[e],n=x[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ce&&ce(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let ue=new Hs;ue.setAnimationLoop(le),this.setAnimationLoop=function(e){ce=e},this.dispose=function(){}}},Qu=new U,$u=new Ut;$u.set(-1,0,0,0,1,0,0,0,1);function ed(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Eo(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(Qu.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply($u),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function td(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return B(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:ArrayBuffer.isView(i)?i.slice():i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?z(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):z(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var nd=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),rd=null;function id(){return rd===null&&(rd=new Ni(nd,16,16,ie,D),rd.name=`DFG_LUT`,rd.minFilter=_,rd.magFilter=_,rd.wrapS=f,rd.wrapT=f,rd.generateMipmaps=!1,rd.needsUpdate=!0),rd}var ad=class{constructor(e={}){let{canvas:t=at(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=b}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([oe,ae,re]),g=new Set([b,T,C,A,O,k]),_=new Uint32Array(4),v=new Int32Array(4),x=new H,S=null,w=null,E=[],j=[],M=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,P=!1,F=null,ee=null,te=null,ne=null;this._outputColorSpace=Je;let ie=0,se=0,I=null,ce=-1,le=null,ue=new on,de=new on,fe=null,pe=new W(0),me=0,he=t.width,ge=t.height,_e=1,ve=null,ye=null,be=new on(0,0,he,ge),xe=new on(0,0,he,ge),Se=!1,Ce=new Ki,we=!1,Te=!1,Ee=new U,De=new H,Oe=new on,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ae=!1;function je(){return I===null?_e:1}let L=n;function Me(e,n){return t.getContext(e,n)}let Ne,Pe,R,Fe,Ie,Le,Re,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Ye,Xe,Ze,Qe,$e,et,nt;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r186`),t.addEventListener(`webglcontextlost`,ot,!1),t.addEventListener(`webglcontextrestored`,ct,!1),t.addEventListener(`webglcontextcreationerror`,lt,!1),L===null){let t=`webgl2`;if(L=Me(t,e),L===null)throw Me(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}rt()}catch(e){throw t.removeEventListener(`webglcontextlost`,ot,!1),t.removeEventListener(`webglcontextrestored`,ct,!1),t.removeEventListener(`webglcontextcreationerror`,lt,!1),B(`WebGLRenderer: `+e.message),e}function rt(){Ne=new Cc(L),Ne.init(),$e=new qu(L,Ne),Pe=new Qs(L,Ne,e,$e),R=new Gu(L,Ne),Pe.reversedDepthBuffer&&d&&R.buffers.depth.setReversed(!0),ee=L.createFramebuffer(),te=L.createFramebuffer(),ne=L.createFramebuffer(),Fe=new Ec(L),Ie=new Tu,Le=new Ku(L,Ne,R,Ie,Pe,$e,Fe),Re=new Sc(N),ze=new Us(L),et=new Xs(L,ze),Be=new wc(L,ze,Fe,et),Ve=new Oc(L,Be,ze,et,Fe),Xe=new Dc(L,Pe,Le),Ke=new $s(Ie),He=new wu(N,Re,Ne,Pe,et,Ke),Ue=new ed(N,Ie),We=new ku,Ge=new Iu(Ne),Ye=new Ys(N,Re,R,Ve,p,s),qe=new Wu(N,Ve,Pe),nt=new td(L,Fe,Pe,R),Ze=new Zs(L,Ne,Fe),Qe=new Tc(L,Ne,Fe),Fe.programs=He.programs,N.capabilities=Pe,N.extensions=Ne,N.properties=Ie,N.renderLists=We,N.shadowMap=qe,N.state=R,N.info=Fe}m!==1009&&(M=new Ac(m,t.width,t.height,o,r,i));let it=new Zu(N,L);this.xr=it,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let e=Ne.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ne.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(e){e!==void 0&&(_e=e,this.setSize(he,ge,!1))},this.getSize=function(e){return e.set(he,ge)},this.setSize=function(e,n,r=!0){if(it.isPresenting){z(`WebGLRenderer: Can't change size while VR device is presenting.`);return}he=e,ge=n,t.width=Math.floor(e*_e),t.height=Math.floor(n*_e),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),M!==null&&M.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(he*_e,ge*_e).floor()},this.setDrawingBufferSize=function(e,n,r){he=e,ge=n,_e=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009){B(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){z(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}M.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(ue)},this.getViewport=function(e){return e.copy(be)},this.setViewport=function(e,t,n,r){e.isVector4?be.set(e.x,e.y,e.z,e.w):be.set(e,t,n,r),R.viewport(ue.copy(be).multiplyScalar(_e).round())},this.getScissor=function(e){return e.copy(xe)},this.setScissor=function(e,t,n,r){e.isVector4?xe.set(e.x,e.y,e.z,e.w):xe.set(e,t,n,r),R.scissor(de.copy(xe).multiplyScalar(_e).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(e){R.setScissorTest(Se=e)},this.setOpaqueSort=function(e){ve=e},this.setTransparentSort=function(e){ye=e},this.getClearColor=function(e){return e.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor(...arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(I!==null){let t=I.texture.format;e=h.has(t)}if(e){let e=I.texture.type,t=g.has(e),n=Ye.getClearColor(),r=Ye.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,L.clearBufferuiv(L.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,L.clearBufferiv(L.COLOR,0,v))}else r|=L.COLOR_BUFFER_BIT}t&&(r|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&L.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),F=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,ot,!1),t.removeEventListener(`webglcontextrestored`,ct,!1),t.removeEventListener(`webglcontextcreationerror`,lt,!1),Ye.dispose(),We.dispose(),Ge.dispose(),Ie.dispose(),Re.dispose(),Ve.dispose(),et.dispose(),nt.dispose(),He.dispose(),it.dispose(),it.removeEventListener(`sessionstart`,_t),it.removeEventListener(`sessionend`,vt),yt.stop()};function ot(e){e.preventDefault(),st(`WebGLRenderer: Context Lost.`),P=!0}function ct(){st(`WebGLRenderer: Context Restored.`),P=!1;let e=Fe.autoReset,t=qe.enabled,n=qe.autoUpdate,r=qe.needsUpdate,i=qe.type;rt(),Fe.autoReset=e,qe.enabled=t,qe.autoUpdate=n,qe.needsUpdate=r,qe.type=i}function lt(e){B(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function dt(e){let t=e.target;t.removeEventListener(`dispose`,dt),ft(t)}function ft(e){pt(e),Ie.remove(e)}function pt(e){let t=Ie.get(e).programs;t!==void 0&&(t.forEach(function(e){He.releaseProgram(e)}),e.isShaderMaterial&&He.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=ke);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=kt(e,t,n,r,i);R.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Be.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;et.setup(i,r,s,n,c);let h,g=Ze;if(c!==null&&(h=ze.get(c),g=Qe,g.setIndex(h)),i.isMesh)r.wireframe===!0?(R.setLineWidth(r.wireframeLinewidth*je()),g.setMode(L.LINES)):g.setMode(L.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),R.setLineWidth(e*je()),i.isLineSegments?g.setMode(L.LINES):i.isLineLoop?g.setMode(L.LINE_LOOP):g.setMode(L.LINE_STRIP)}else i.isPoints?g.setMode(L.POINTS):i.isSprite&&g.setMode(L.TRIANGLES);if(i.isBatchedMesh){if(Ne.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?ze.get(c).bytesPerElement:1,o=Ie.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(L,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function mt(e,t,n,r){F!==null&&e.isNodeMaterial&&F.setObject(r,e),we===!0&&Ke.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Tt(e,t,r),e.side=0,e.needsUpdate=!0,Tt(e,t,r),e.side=2):Tt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),F!==null&&F.renderStart(e,t,n),w=Ge.get(n),w.init(t),j.push(w),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(w.pushLight(e),e.castShadow&&w.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(w.pushLight(e),e.castShadow&&w.pushShadow(e))}),w.setupLights(),F!==null&&F.updateLights(w.state.lightsArray),Te=this.localClippingEnabled,we=Ke.init(this.clippingPlanes,Te),we===!0&&Ke.setGlobalState(this.clippingPlanes,t),F!==null&&qe.render(w.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];mt(o,n,t,e),r.add(o)}else mt(i,n,t,e),r.add(i)}}),w=j.pop(),F!==null&&F.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){let t=Ie.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Ne.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let ht=null;function gt(e){ht&&ht(e)}function _t(){yt.stop()}function vt(){yt.start()}let yt=new Hs;yt.setAnimationLoop(gt),typeof self<`u`&&yt.setContext(self),this.setAnimationLoop=function(e){ht=e,it.setAnimationLoop(e),e===null?yt.stop():yt.start()},it.addEventListener(`sessionstart`,_t),it.addEventListener(`sessionend`,vt),this.render=function(e,t){if(window.__galleryCaptureScene)return;if(t!==void 0&&t.isCamera!==!0){B(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(P===!0)return;F!==null&&F.renderStart(e,t);let n=it.enabled===!0&&it.isPresenting===!0,r=M!==null&&(I===null||n)&&M.begin(N,I);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(it.cameraAutoUpdate===!0&&it.updateCamera(t),t=it.getCamera()),e.isScene===!0&&e.onBeforeRender(N,e,t,I),w=Ge.get(e,j.length),w.init(t),w.state.textureUnits=Le.getTextureUnits(),j.push(w),Ee.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),Ce.setFromProjectionMatrix(Ee,tt,t.reversedDepth),Te=this.localClippingEnabled,we=Ke.init(this.clippingPlanes,Te),S=We.get(e,E.length),S.init(),E.push(S),it.enabled===!0&&it.isPresenting===!0){let e=N.xr.getDepthSensingMesh();e!==null&&bt(e,t,-1/0,N.sortObjects)}bt(e,t,0,N.sortObjects),S.finish(),F!==null&&F.updateLights(w.state.lightsArray),N.sortObjects===!0&&S.sort(ve,ye),Ae=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,Ae&&Ye.addToRenderList(S,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),we===!0&&Ke.beginShadows();let i=w.state.shadowsArray;if(qe.render(i,e,t),we===!0&&Ke.endShadows(),(r&&M.hasRenderPass())===!1){let n=S.opaque,r=S.transmissive;if(w.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];St(n,r,e,a)}Ae&&Ye.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];xt(S,e,n,n.viewport)}}else r.length>0&&St(n,r,e,t),Ae&&Ye.render(e),xt(S,e,t)}I!==null&&se===0&&(Le.updateMultisampleRenderTarget(I),Le.updateRenderTargetMipmap(I)),r&&M.end(N),e.isScene===!0&&e.onAfterRender(N,e,t),et.resetDefaultState(),ce=-1,le=null,j.pop(),j.length>0?(w=j[j.length-1],Le.setTextureUnits(w.state.textureUnits),we===!0&&Ke.setGlobalState(N.clippingPlanes,w.state.camera)):w=null,E.pop(),S=E.length>0?E[E.length-1]:null,F!==null&&F.renderEnd()};function bt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)w.pushLightProbeGrid(e);else if(e.isLight)w.pushLight(e),e.castShadow&&w.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||e.intersectsFrustum(Ce)){r&&Oe.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Ee);let i=Ve.update(e),a=e.material;a.visible&&S.push(e,i,a,n,Oe.z,null,t)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||e.intersectsFrustum(Ce))){let i=Ve.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Oe.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Oe.copy(e.boundingSphere.center)),Oe.applyMatrix4(e.matrixWorld).applyMatrix4(Ee)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&S.push(e,i,c,n,Oe.z,s,t)}}else a.visible&&S.push(e,i,a,n,Oe.z,null,t)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)bt(i[e],t,n,r)}function xt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;w.setupLightsView(n),we===!0&&Ke.setGlobalState(N.clippingPlanes,n),r&&R.viewport(ue.copy(r)),i.length>0&&Ct(i,t,n),a.length>0&&Ct(a,t,n),o.length>0&&Ct(o,t,n),R.buffers.depth.setTest(!0),R.buffers.depth.setMask(!0),R.buffers.color.setMask(!0),R.setPolygonOffset(!1)}function St(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[r.id]===void 0){let e=Ne.has(`EXT_color_buffer_half_float`)||Ne.has(`EXT_color_buffer_float`);w.state.transmissionRenderTarget[r.id]=new cn(1,1,{generateMipmaps:!0,type:e?D:b,minFilter:y,samples:Math.max(4,Pe.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Jt.workingColorSpace})}let a=w.state.transmissionRenderTarget[r.id],o=r.viewport||ue;a.setSize(o.z*N.transmissionResolutionScale,o.w*N.transmissionResolutionScale);let s=N.getRenderTarget(),c=N.getActiveCubeFace(),l=N.getActiveMipmapLevel();N.setRenderTarget(a),N.getClearColor(pe),me=N.getClearAlpha(),me<1&&N.setClearColor(16777215,.5),N.clear(),Ae&&Ye.render(n);let u=N.toneMapping;N.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),w.setupLightsView(r),we===!0&&Ke.setGlobalState(N.clippingPlanes,r),Ct(e,n,r),Le.updateMultisampleRenderTarget(a),Le.updateRenderTargetMipmap(a),Ne.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,wt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Le.updateMultisampleRenderTarget(a),Le.updateRenderTargetMipmap(a))}N.setRenderTarget(s,c,l),N.setClearColor(pe,me),d!==void 0&&(r.viewport=d),N.toneMapping=u}function Ct(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&wt(o,t,n,s,l,c)}}function wt(e,t,n,r,i,a){F!==null&&i.isNodeMaterial&&F.setObject(e,i),e.onBeforeRender(N,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(N,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,N.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,N.renderBufferDirect(n,t,r,i,e,a),i.side=2):N.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(N,t,n,r,i,a)}function Tt(e,t,n){t.isScene!==!0&&(t=ke);let r=Ie.get(e),i=w.state.lights,a=w.state.shadowsArray,o=i.state.version,s=He.getParameters(e,i.state,a,t,n,w.state.lightProbeGridArray),c=He.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Re.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,dt),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Dt(e,s),d}else s.uniforms=He.getUniforms(e),F!==null&&e.isNodeMaterial&&F.build(e,n,s),e.onBeforeCompile(s,N),d=He.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ke.uniform),Dt(e,s),r.needsLights=jt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=w.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Et(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Ll.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Dt(e,t){let n=Ie.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Ot(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];x.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(x))return n}return null}function kt(e,t,n,r,i){t.isScene!==!0&&(t=ke),Le.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=I===null?N.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Jt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Re.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(h=N.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=Ie.get(r),y=w.state.lights;if(we===!0&&(Te===!0||e!==le)){let t=e===le&&r.id===ce;Ke.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ke.numPlanes||v.numIntersection!==Ke.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=w.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let x=v.currentProgram;b===!0&&(x=Tt(r,t,i),F&&r.isNodeMaterial&&F.onUpdateProgram(r,x,v));let S=!1,C=!1,T=!1,E=x.getUniforms(),D=v.uniforms;if(R.useProgram(x.program)&&(S=!0,C=!0,T=!0),r.id!==ce&&(ce=r.id,C=!0),v.needsLights){let e=Ot(w.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,C=!0)}if(S||le!==e){R.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),E.setValue(L,`projectionMatrix`,e.projectionMatrix),E.setValue(L,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(L,De.setFromMatrixPosition(e.matrixWorld)),Pe.logarithmicDepthBuffer&&E.setValue(L,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(L,`isOrthographic`,e.isOrthographicCamera===!0),le!==e&&(le=e,C=!0,T=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&E.setValue(L,`sunShadowMap`,y.state.sunShadowMap,Le),y.state.directionalShadowMap.length>0&&E.setValue(L,`directionalShadowMap`,y.state.directionalShadowMap,Le),y.state.spotShadowMap.length>0&&E.setValue(L,`spotShadowMap`,y.state.spotShadowMap,Le),y.state.pointShadowMap.length>0&&E.setValue(L,`pointShadowMap`,y.state.pointShadowMap,Le)),i.isSkinnedMesh){E.setOptional(L,i,`bindMatrix`),E.setOptional(L,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(L,`boneTexture`,e.boneTexture,Le))}i.isBatchedMesh&&(E.setOptional(L,i,`batchingTexture`),E.setValue(L,`batchingTexture`,i._matricesTexture,Le),E.setOptional(L,i,`batchingIdTexture`),E.setValue(L,`batchingIdTexture`,i._indirectTexture,Le),E.setOptional(L,i,`batchingColorTexture`),i._colorsTexture!==null&&E.setValue(L,`batchingColorTexture`,i._colorsTexture,Le));let O=n.morphAttributes;if((O.position!==void 0||O.normal!==void 0||O.color!==void 0)&&Xe.update(i,n,x),(C||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,E.setValue(L,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(D.envMapIntensity.value=t.environmentIntensity),D.dfgLUT!==void 0&&(D.dfgLUT.value=id()),C){if(E.setValue(L,`toneMappingExposure`,N.toneMappingExposure),v.needsLights&&At(D,T),a&&r.fog===!0&&Ue.refreshFogUniforms(D,a),Ue.refreshMaterialUniforms(D,r,_e,ge,w.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;D.probesSH.value=e.texture,D.probesMin.value.copy(e.boundingBox.min),D.probesMax.value.copy(e.boundingBox.max),D.probesResolution.value.copy(e.resolution)}Ll.upload(L,Et(v),D,Le)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Ll.upload(L,Et(v),D,Le),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(L,`center`,i.center),E.setValue(L,`modelViewMatrix`,i.modelViewMatrix),E.setValue(L,`normalMatrix`,i.normalMatrix),E.setValue(L,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];nt.update(n,x),nt.bind(n,x)}}return x}function At(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function jt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ie},this.getActiveMipmapLevel=function(){return se},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(e,t,n){let r=Ie.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),Ie.get(e.texture).__webglTexture=t,Ie.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=Ie.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){I=e,ie=t,se=n;let r=null,i=!1,a=!1;if(e){let o=Ie.get(e);if(o.__useDefaultFramebuffer!==void 0){R.bindFramebuffer(L.FRAMEBUFFER,o.__webglFramebuffer),ue.copy(e.viewport),de.copy(e.scissor),fe=e.scissorTest,R.viewport(ue),R.scissor(de),R.setScissorTest(fe),ce=-1;return}if(o.__webglFramebuffer===void 0)Le.setupRenderTarget(e);else if(o.__hasExternalTextures)Le.rebindTextures(e,Ie.get(e.texture).__webglTexture,Ie.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&Ie.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Le.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=Ie.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Le.useMultisampledRTT(e)===!1?Ie.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,ue.copy(e.viewport),de.copy(e.scissor),fe=e.scissorTest}else ue.copy(be).multiplyScalar(_e).floor(),de.copy(xe).multiplyScalar(_e).floor(),fe=Se;if(n!==0&&(r=ee),R.bindFramebuffer(L.FRAMEBUFFER,r)&&R.drawBuffers(e,r),R.viewport(ue),R.scissor(de),R.setScissorTest(fe),i){let r=Ie.get(e.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=Ie.get(e.textures[t]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=Ie.get(e.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,t.__webglTexture,n)}ce=-1};function Mt(e){let t=Ie.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Pe.textureFormatReadable(e.format),t.__typeReadable=Pe.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){B(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=Ie.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){R.bindFramebuffer(L.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+s);let u=Mt(o);if(u.__formatReadable===!1){B(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){B(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&L.readPixels(t,n,r,i,$e.convert(c),$e.convert(l),a)}finally{let e=I===null?null:Ie.get(I).__webglFramebuffer;R.bindFramebuffer(L.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=Ie.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){R.bindFramebuffer(L.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+s);let d=Mt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,f),L.bufferData(L.PIXEL_PACK_BUFFER,a.byteLength,L.STREAM_READ),L.readPixels(t,n,r,i,$e.convert(l),$e.convert(u),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let p=I===null?null:Ie.get(I).__webglFramebuffer;R.bindFramebuffer(L.FRAMEBUFFER,p);let m=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await ut(L,m,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,f),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,a),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(f),L.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Le.setTexture2D(e,0),L.copyTexSubImage2D(L.TEXTURE_2D,n,0,0,o,s,i,a),R.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=$e.convert(t.format),_=$e.convert(t.type),v;t.isData3DTexture?(Le.setTexture3D(t,0),v=L.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Le.setTexture2DArray(t,0),v=L.TEXTURE_2D_ARRAY):(Le.setTexture2D(t,0),v=L.TEXTURE_2D),R.activeTexture(L.TEXTURE0),R.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,t.flipY),R.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),R.pixelStorei(L.UNPACK_ALIGNMENT,t.unpackAlignment);let y=R.getParameter(L.UNPACK_ROW_LENGTH),b=R.getParameter(L.UNPACK_IMAGE_HEIGHT),x=R.getParameter(L.UNPACK_SKIP_PIXELS),S=R.getParameter(L.UNPACK_SKIP_ROWS),C=R.getParameter(L.UNPACK_SKIP_IMAGES);R.pixelStorei(L.UNPACK_ROW_LENGTH,h.width),R.pixelStorei(L.UNPACK_IMAGE_HEIGHT,h.height),R.pixelStorei(L.UNPACK_SKIP_PIXELS,l),R.pixelStorei(L.UNPACK_SKIP_ROWS,u),R.pixelStorei(L.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=Ie.get(e),r=Ie.get(t),h=Ie.get(n.__renderTarget),g=Ie.get(r.__renderTarget);R.bindFramebuffer(L.READ_FRAMEBUFFER,h.__webglFramebuffer),R.bindFramebuffer(L.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ie.get(e).__webglTexture,i,d+n),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ie.get(t).__webglTexture,a,m+n)),L.blitFramebuffer(l,u,o,s,f,p,o,s,L.DEPTH_BUFFER_BIT,L.NEAREST);R.bindFramebuffer(L.READ_FRAMEBUFFER,null),R.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||Ie.has(e)){let n=Ie.get(e),r=Ie.get(t);R.bindFramebuffer(L.READ_FRAMEBUFFER,te),R.bindFramebuffer(L.DRAW_FRAMEBUFFER,ne);for(let e=0;e<c;e++)w?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,n.__webglTexture,i),T?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,r.__webglTexture,a),i===0?T?L.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):L.copyTexSubImage2D(v,a,f,p,l,u,o,s):L.blitFramebuffer(l,u,o,s,f,p,o,s,L.COLOR_BUFFER_BIT,L.NEAREST);R.bindFramebuffer(L.READ_FRAMEBUFFER,null),R.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?L.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?L.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):L.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):L.texSubImage2D(L.TEXTURE_2D,a,f,p,o,s,g,_,h);R.pixelStorei(L.UNPACK_ROW_LENGTH,y),R.pixelStorei(L.UNPACK_IMAGE_HEIGHT,b),R.pixelStorei(L.UNPACK_SKIP_PIXELS,x),R.pixelStorei(L.UNPACK_SKIP_ROWS,S),R.pixelStorei(L.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&L.generateMipmap(v),R.unbindTexture()},this.initRenderTarget=function(e){Ie.get(e).__webglFramebuffer===void 0&&Le.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Le.setTextureCube(e,0):e.isData3DTexture?Le.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Le.setTexture2DArray(e,0):Le.setTexture2D(e,0),R.unbindTexture()},this.resetState=function(){ie=0,se=0,I=null,R.reset(),et.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return tt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Jt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Jt._getUnpackColorSpace()}},od={type:`change`},sd={type:`start`},cd={type:`end`},ld=new _i,ud=new Jr,dd=Math.cos(70*zt.DEG2RAD),fd=new H,pd=2*Math.PI,md={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},hd=1e-6,gd=class extends zs{constructor(e,t=null){super(e,t),this.state=md.NONE,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:`ArrowLeft`,UP:`ArrowUp`,RIGHT:`ArrowRight`,BOTTOM:`ArrowDown`},this.mouseButtons={LEFT:l.ROTATE,MIDDLE:l.DOLLY,RIGHT:l.PAN},this.touches={ONE:u.ROTATE,TWO:u.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle=`auto`,this._domElementKeyEvents=null,this._lastPosition=new H,this._lastQuaternion=new Bt,this._lastTargetPosition=new H,this._quat=new Bt().setFromUnitVectors(e.up,new H(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Rs,this._sphericalDelta=new Rs,this._scale=1,this._panOffset=new H,this._rotateStart=new V,this._rotateEnd=new V,this._rotateDelta=new V,this._panStart=new V,this._panEnd=new V,this._panDelta=new V,this._dollyStart=new V,this._dollyEnd=new V,this._dollyDelta=new V,this._dollyDirection=new H,this._mouse=new V,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=vd.bind(this),this._onPointerDown=_d.bind(this),this._onPointerUp=yd.bind(this),this._onContextMenu=Ed.bind(this),this._onMouseWheel=Sd.bind(this),this._onKeyDown=Cd.bind(this),this._onTouchStart=wd.bind(this),this._onTouchMove=Td.bind(this),this._onMouseDown=bd.bind(this),this._onMouseMove=xd.bind(this),this._interceptControlDown=Dd.bind(this),this._interceptControlUp=Od.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e===`grab`?this.domElement.style.cursor=`grab`:this.domElement.style.cursor=`auto`}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener(`pointerdown`,this._onPointerDown),this.domElement.addEventListener(`pointercancel`,this._onPointerUp),this.domElement.addEventListener(`contextmenu`,this._onContextMenu),this.domElement.addEventListener(`wheel`,this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener(`keydown`,this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction=`none`}disconnect(){this.state=md.NONE,this.domElement.removeEventListener(`pointerdown`,this._onPointerDown),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.domElement.removeEventListener(`pointercancel`,this._onPointerUp),this.domElement.removeEventListener(`wheel`,this._onMouseWheel),this.domElement.removeEventListener(`contextmenu`,this._onContextMenu),this.stopListenToKeyEvents();let e=this.domElement.getRootNode();e.removeEventListener(`keydown`,this._interceptControlDown,{capture:!0}),e.removeEventListener(`keyup`,this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction=``,this.domElement.style.cursor=`auto`}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener(`keydown`,this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(od),this.update(),this.state=md.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;fd.copy(t).sub(this.target),fd.applyQuaternion(this._quat),this._spherical.setFromVector3(fd),this.autoRotate&&this.state===md.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=pd:n>Math.PI&&(n-=pd),r<-Math.PI?r+=pd:r>Math.PI&&(r-=pd),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let i=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let e=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),i=e!=this._spherical.radius}if(fd.setFromSpherical(this._spherical),fd.applyQuaternion(this._quatInverse),t.copy(this.target).add(fd),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let e=null;if(this.object.isPerspectiveCamera){let t=fd.length();e=this._clampDistance(t*this._scale);let n=t-e;this.object.position.addScaledVector(this._dollyDirection,n),this.object.updateMatrixWorld(),i=!!n}else if(this.object.isOrthographicCamera){let t=new H(this._mouse.x,this._mouse.y,0);t.unproject(this.object);let n=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),i=n!==this.object.zoom;let r=new H(this._mouse.x,this._mouse.y,0);r.unproject(this.object),this.object.position.sub(r).add(t),this.object.updateMatrixWorld(),e=fd.length()}else console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.`),this.zoomToCursor=!1;e!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position):(ld.origin.copy(this.object.position),ld.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ld.direction))<dd?this.object.lookAt(this.target):(ud.setFromNormalAndCoplanarPoint(this.object.up,this.target),ld.intersectPlane(ud,this.target))))}else if(this.object.isOrthographicCamera){let e=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),e!==this.object.zoom&&(this.object.updateProjectionMatrix(),i=!0)}return this._scale=1,this._performCursorZoom=!1,i||this._lastPosition.distanceToSquared(this.object.position)>hd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>hd||this._lastTargetPosition.distanceToSquared(this.target)>hd?(this.dispatchEvent(od),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e===null?pd/60/60*this.autoRotateSpeed:pd/60*this.autoRotateSpeed*e}_getZoomScale(e){let t=Math.abs(e*.01);return .95**(this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){fd.setFromMatrixColumn(t,0),fd.multiplyScalar(-e),this._panOffset.add(fd)}_panUp(e,t){this.screenSpacePanning===!0?fd.setFromMatrixColumn(t,1):(fd.setFromMatrixColumn(t,0),fd.crossVectors(this.object.up,fd)),fd.multiplyScalar(e),this._panOffset.add(fd)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let r=this.object.position;fd.copy(r).sub(this.target);let i=fd.length();i*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*i/n.clientHeight,this.object.matrix),this._panUp(2*t*i/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.`),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn(`WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.`),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),r=e-n.left,i=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(i/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(pd*this._rotateDelta.x/t.clientHeight),this._rotateUp(pd*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(pd*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-pd*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(pd*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-pd*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyStart.set(0,i)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(pd*this._rotateDelta.x/t.clientHeight),this._rotateUp(pd*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,i=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,i),this._dollyDelta.set(0,(this._dollyEnd.y/this._dollyStart.y)**+this.zoomSpeed),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new V,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function _d(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.addEventListener(`pointerup`,this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType===`touch`?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grabbing`)))}function vd(e){this.enabled!==!1&&(e.pointerType===`touch`?this._onTouchMove(e):this._onMouseMove(e))}function yd(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener(`pointermove`,this._onPointerMove),this.domElement.ownerDocument.removeEventListener(`pointerup`,this._onPointerUp),this.dispatchEvent(cd),this.state=md.NONE,this._cursorStyle===`grab`&&(this.domElement.style.cursor=`grab`);break;case 1:let t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y})}}function bd(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case l.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=md.DOLLY;break;case l.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=md.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=md.ROTATE}break;case l.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=md.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=md.PAN}break;default:this.state=md.NONE}this.state!==md.NONE&&this.dispatchEvent(sd)}function xd(e){switch(this.state){case md.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case md.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case md.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e)}}function Sd(e){this.enabled!==!1&&this.enableZoom!==!1&&this.state===md.NONE&&(e.preventDefault(),this.dispatchEvent(sd),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(cd))}function Cd(e){this.enabled!==!1&&this._handleKeyDown(e)}function wd(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case u.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=md.TOUCH_ROTATE;break;case u.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=md.TOUCH_PAN;break;default:this.state=md.NONE}break;case 2:switch(this.touches.TWO){case u.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=md.TOUCH_DOLLY_PAN;break;case u.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=md.TOUCH_DOLLY_ROTATE;break;default:this.state=md.NONE}break;default:this.state=md.NONE}this.state!==md.NONE&&this.dispatchEvent(sd)}function Td(e){switch(this._trackPointer(e),this.state){case md.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case md.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case md.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case md.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=md.NONE}}function Ed(e){this.enabled!==!1&&e.preventDefault()}function Dd(e){e.key===`Control`&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}function Od(e){e.key===`Control`&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener(`keyup`,this._interceptControlUp,{passive:!0,capture:!0}))}var kd=[`day`,`evening`,`night`],Ad={train:{startArc01:.055,speed:5.5,speedMultiplier:{min:.25,max:2.5,step:.05,default:1},stationStopSeconds:2,brakeDistance:2.6,departSeconds:1.3,coachCount:2,length:{loco:2.9,coach:2.5},couplerGap:.34},camera:{direction:[1,.95,1],distance:90,near:1,far:400,target:[-2,.35,-.4],fitMargin:1.14,zoom:{min:.42,max:3.2,default:1},damping:.075,rotateSpeed:.7,zoomSpeed:.85,minPolarAngleDeg:8,maxPolarAngleDeg:84},render:{maxPixelRatio:2,shadowMapSize:2048,maxDelta:1/20,fixedStep:1/120,exposure:{day:1,evening:1.06,night:1.22}},timeOfDay:{default:`evening`,transitionSeconds:1.1},nightLights:{maxPointLights:8,activePointLights:8}};function jd(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new Vr,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=Md(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=Md(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function Md(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new Er(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}function Nd(e){let t=e>>>0;return function(){t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Pd(e,t,n){let r=1/0;for(let i=0;i<e.length-1;i++){let a=e[i][0],o=e[i][1],s=e[i+1][0],c=e[i+1][1],l=s-a,u=c-o,d=l*l+u*u,f=d>0?((t-a)*l+(n-o)*u)/d:0;f=f<0?0:f>1?1:f;let p=a+l*f,m=o+u*f,h=Math.hypot(t-p,n-m);h<r&&(r=h)}return r}var Fd={base:{width:44,depth:33,slabTopY:0,slabBottomY:-1.5,terrainInsetY:-.06},rim:{width:1.3,topY:.42,bevel:.16},play:{minX:-20.7,maxX:20.7,minZ:-15.2,maxZ:15.2},nameplate:{text:`RAILWAY TOWN`,x:0,z:16.5,width:11,height:.52}},Id={points:[[3.6,-15.2],[2.8,-10.6],[3.6,-6],[5,-1],[5.6,3.6],[5.2,8],[4.6,10.6],[4,12.6],[4.6,15.2]],waterHalf:1.7,bankHalf:3.1,waterY:-.62,bedY:-1.35};function Ld(e,t){let n=Pd(Id.points,e,t);if(n<=Id.waterHalf)return Id.bedY;if(n>=Id.bankHalf)return 0;let r=(n-Id.waterHalf)/(Id.bankHalf-Id.waterHalf),i=r*r*(3-2*r);return Id.bedY*(1-i)}function Rd(e,t){let n=Pd(Id.points,e,t);return n>=Id.bankHalf?0:1-(n-Id.waterHalf)/(Id.bankHalf-Id.waterHalf)}var zd=[[-8.6,-10.6],[-4,-10.6],[.2,-10.6],[4.2,-10.6],[7.4,-10.6],[11.9,-9.9],[15.1,-6.4],[16.2,-1.6],[15.8,3.4],[13.6,7.6],[9,10.6],[4,10.6],[-.6,10.6],[-5.2,10.6],[-8.6,10.6],[-12.3,9.4],[-15.4,6],[-16.2,1.4],[-15.6,-3.4],[-13.4,-7.6],[-11,-9.9]],Bd={pointsXZ:zd,curveY:.34,gauge:1,rail:{height:.1,width:.075},railTopY:.44,sleeper:{length:1.62,width:.3,height:.075,spacing:.5},ballast:{topHalf:.86,bottomHalf:1.18,topY:.3},clearance:1.35},Vd=null,Hd=0,Ud=null;function Wd(){if(Vd)return Vd;let e=new ua(zd.map(([e,t])=>new H(e,Bd.curveY,t)),!0,`centripetal`,.5);return e.arcLengthDivisions=1400,e.updateArcLengths(),Vd=e,Hd=e.getLength(),e}function Gd(){return Hd||Wd(),Hd}function Kd(){if(Ud)return Ud;let e=Wd(),t=[],n=new H;for(let r=0;r<900;r++)e.getPointAt(r/900,n),t.push([n.x,n.z]);return t.push(t[0]),Ud=t,t}function qd(e,t){return Pd(Kd(),e,t)}function Jd(e,t,n=2400){let r=Wd(),i=0,a=1/0,o=new H;for(let s=0;s<n;s++){let c=s/n;r.getPointAt(c,o);let l=(o.x-e)*(o.x-e)+(o.z-t)*(o.z-t);l<a&&(a=l,i=c)}return i}var Yd={z:-4.2,xFrom:.8,xTo:7.4,deckY:.07,width:2.5,piers:[2.5,4.15,5.8]},Xd=[{id:`truss-north`,kind:`truss`,along:`x`,fixedZ:-10.6,deckFrom:-.5,deckTo:6.1,trussFrom:1,trussTo:4.6,deckY:Bd.curveY,halfWidth:.95},{id:`arch-south`,kind:`arch`,along:`x`,fixedZ:10.6,deckFrom:1.2,deckTo:8,pierXs:[4.6],deckY:Bd.curveY,halfWidth:.95},{id:`beam-crosslane`,kind:`beam`,along:`x`,fixedZ:Yd.z,deckFrom:Yd.xFrom,deckTo:Yd.xTo,deckY:Yd.deckY,halfWidth:Yd.width/2}],Zd=Xd.filter(e=>e.kind!==`beam`).map(e=>{let t=Jd(e.deckFrom,e.fixedZ),n=Jd(e.deckTo,e.fixedZ);return{id:e.id,kind:e.kind,xFrom:e.deckFrom,xTo:e.deckTo,fixedZ:e.fixedZ,deckY:e.deckY,halfWidth:e.halfWidth,uMin:Math.min(t,n),uMax:Math.max(t,n),midU:Jd((e.deckFrom+e.deckTo)/2,e.fixedZ)}}),Qd=[{name:`stationRoad`,kind:`asphalt`,width:2.6,sidewalk:.7,markings:!0,points:[[-13.8,3.4],[-10.5,3.3],[-7,3.1],[-4.4,3],[-1.6,3],[1.4,3.2]]},{name:`mainStreet`,kind:`asphalt`,width:2.8,sidewalk:.7,markings:!1,points:[[-3.6,3.1],[-3.2,1],[-3.4,-1],[-3.4,-2.6],[-3.4,-4.3]]},{name:`crossLane`,kind:`asphalt`,width:2.2,sidewalk:.5,markings:!1,points:[[-13.9,-4.2],[-9.5,-4.3],[-5.5,-4.2],[-2,-4.2],[.8,-4.2]]},{name:`westRing`,kind:`asphalt`,width:2.2,sidewalk:.5,markings:!1,points:[[-13.8,3.4],[-14.2,1.6],[-14.4,-1],[-14.2,-3.3],[-13.9,-4.2]]},{name:`eastLane`,kind:`gravel`,width:2,sidewalk:0,markings:!1,points:[[7.4,-4.2],[10.2,-3.6],[12.4,-2.2],[13,-.4]]},{name:`farmTrack`,kind:`farm`,width:1.5,sidewalk:0,markings:!1,points:[[13,-.4],[12.8,1.6],[11.4,3.6],[9.8,5.6],[8.9,7.6]]},{name:`riverWalk`,kind:`path`,width:1.4,sidewalk:0,markings:!1,points:[[1.4,3],[1,.8],[1.4,-1.2],[.6,-3.6],[-.2,-6],[-1.4,-8.6]]},{name:`greenPath`,kind:`path`,width:1.2,sidewalk:0,markings:!1,points:[[-13.9,-4.6],[-13,-6.6],[-9,-8.6],[-5,-9],[-2.8,-9]]},{name:`southPath`,kind:`path`,width:1.3,sidewalk:0,markings:!1,points:[[-12.6,12.6],[-9,12.4],[-5,12.5],[-1.2,12.6],[2,12.8]]}];function $d(e){return Qd.find(t=>t.name===e)}function ef(e,t,n=0){let r=$d(e);if(!r)return[];let i=r.points,a=[],o=0;for(let e=0;e<i.length-1;e++){let[r,s]=i[e],[c,l]=i[e+1],u=Math.hypot(c-r,l-s);if(u<1e-6)continue;let d=(c-r)/u,f=(l-s)/u,p=-f,m=d,h=o;for(;h<=u;)a.push({x:r+d*h+p*n,z:s+f*h+m*n,angle:Math.atan2(d,f),tx:d,tz:f}),h+=t;o=h-u}return a}var tf=[{id:`piazza`,x:-.65,z:.55,w:3.1,d:2.7,kind:`flagstone`},{id:`forecourt`,x:-4.4,z:4.62,w:14.4,d:1.5,kind:`flagstone`},{id:`goodsApron`,x:-9.6,z:12.3,w:7,d:1.2,kind:`gravel`}];function nf(e,t,n){let r=e.attributes.uv;if(!r)return e;for(let e=0;e<r.count;e++)r.setXY(e,r.getX(e)*t,r.getY(e)*n);return r.needsUpdate=!0,e}function rf(e=`bucket`){let t=new Map;return{add(e,n,r=null){if(!e||!n)return;let i=n.clone();r&&i.applyMatrix4(r);let a=t.get(e);a||(a=[],t.set(e,a)),a.push(i)},build(n={}){let r=new Rn;r.name=n.name||e;let i=n.castShadow!==!1,a=n.receiveShadow!==!1;for(let[e,n]of t){if(!n.length)continue;let o=[`normal`,`uv`,`color`].filter(e=>n.every(t=>t.attributes[e])),s=n.map(e=>{for(let t of Object.keys(e.attributes))t!==`position`&&!o.includes(t)&&e.deleteAttribute(t);return e});s.every(e=>e.index)||(s=s.map(e=>e.index?e.toNonIndexed():e));let c=jd(s,!1);for(let e of s)e.dispose();if(t.set(e,[]),c){let t=new Ai(c,e);t.castShadow=i,t.receiveShadow=a,r.add(t)}else for(let t of n){let n=new Ai(t,e);n.castShadow=i,n.receiveShadow=a,r.add(n)}}return t.clear(),r}}}var af=(e,t,n,r,i,a,o,s,c,l,u=``)=>({id:e,style:t,x:n,z:r,w:i,d:a,rotY:o,floors:s,roof:c,hue:l,note:u}),of=Math.PI,sf=-Math.PI/2,cf=Math.PI/2,lf=[af(`a1`,`shop`,-11.5,-.3,2,3,0,2,`gable`,3,`街边小店，主街西端`),af(`a2`,`shop`,-9,-.3,2.6,3,0,2,`gable`,0,`杂货铺，带遮阳篷`),af(`a3`,`house`,-6.4,-.3,2.4,3,0,2,`hip`,1,`临街住宅`),af(`b1`,`house`,-11.6,-6.7,2.4,2.2,0,2,`gable`,4,`后排住宅`),af(`b2`,`house`,-8.8,-6.7,2.2,2.2,0,1,`gable`,6,`后排小屋`),af(`church`,`church`,-3.4,-7.4,6,3.4,0,2,`spire`,5,`教堂，西端塔楼尖顶`),af(`tavern`,`tavern`,-.7,-2,2.4,1.7,0,2,`gable`,6,`河畔酒馆，门面朝广场`),af(`townhall`,`hall`,-9.8,6.2,3.4,2.6,of,2,`hip`,0,`市政厅，钟塔面朝铁路`),af(`kiosk`,`shed`,-12.6,6.4,1.6,2,of,1,`shed`,3,`站前小亭`),af(`mill`,`mill`,9.6,4.9,2.8,2.6,cf,2,`gable`,5,`水磨坊，西侧临河、水轮入水`),af(`barn`,`barn`,11,.8,3.2,2.6,cf,1,`gable`,4,`谷仓`),af(`silo`,`silo`,13.2,5.8,1.9,1.9,0,1,`dome`,0,`筒仓`),af(`farmhouse`,`house`,12.4,-5.6,3,2.6,0,2,`gable`,2,`农场住宅`),af(`n1`,`barn`,9.2,-13,4.4,2.8,of,1,`gable`,6,`北岸大谷仓`),af(`n2`,`shed`,-3,-13.6,2.6,2.2,of,1,`shed`,3,`农具棚`),af(`n3`,`house`,-7.2,-13.2,3,2.8,of,2,`gable`,0,`农舍`),af(`n4`,`house`,-13,-13,2.8,2.4,of,1,`hip`,4,`村外住宅`),af(`n5`,`house`,-10,-13.5,2.6,2.4,of,2,`gambrel`,2,`村外住宅`),af(`w1`,`house`,-18.7,2,2.4,2.8,cf,2,`gable`,1,`西侧住宅`),af(`w2`,`house`,-18.7,-2.6,2.4,2.8,cf,1,`gable`,5,`西侧农舍`),af(`e1`,`house`,18.7,-2,2.4,2.8,sf,2,`gable`,2,`东侧住宅`),af(`e2`,`house`,18.7,2.6,2.4,2.8,sf,1,`hip`,6,`东侧住宅`),af(`s1`,`house`,-14.6,13.4,3,2.8,of,2,`gable`,0,`铁路南侧住宅`),af(`s2`,`house`,-4.2,13.8,2.8,2.6,of,1,`gable`,4,`铁路南侧住宅`),af(`s3`,`house`,-1,13.6,2.6,2.6,of,2,`gambrel`,3,`铁路南侧住宅`),af(`s4`,`house`,9.6,13.4,2.8,2.6,of,1,`gable`,5,`河南岸住宅`),af(`s5`,`house`,13.6,13.2,3,2.6,of,2,`hip`,1,`东南角住宅`),af(`goods`,`shed`,-7.4,13.6,3.2,2.4,of,1,`shed`,3,`货运仓库`),af(`tower`,`watertower`,-11,13.2,2,2,0,1,`flat`,0,`水塔`)],uf={x:-3,z:10.6,stopArc01:Jd(-3,10.6),platform:{xFrom:-8,xTo:2,zFrom:7.75,zTo:9.55,topY:.55},building:{x:-3,z:6.6,w:7.5,d:2.6,rotY:of},canopy:{xFrom:-7.4,xTo:1.4,zFrom:7.85,zTo:9.45,topY:3.05},nameplate:`石桥镇  SHIQIAO`},df=[{x:-12.6,z:1.5,rotY:0},{x:-9,z:1.5,rotY:0},{x:-5.8,z:1.5,rotY:0},{x:-6,z:4.7,rotY:of},{x:-.4,z:4.7,rotY:of},{x:-2,z:1.4,rotY:cf},{x:-2,z:-1.6,rotY:cf},{x:-2,z:-3.8,rotY:cf},{x:-12.4,z:-2.8,rotY:0},{x:-9.4,z:-2.8,rotY:0},{x:-6.4,z:-2.8,rotY:0},{x:-10.8,z:-5.6,rotY:of},{x:-7.6,z:-5.6,rotY:of},{x:-12.7,z:1.6,rotY:cf},{x:-12.7,z:-1.8,rotY:cf},{x:1.6,z:1.4,rotY:sf},{x:.4,z:-3,rotY:sf},{x:-1.2,z:.6,rotY:0},{x:.6,z:1.9,rotY:0},{x:8.6,z:-5.4,rotY:0},{x:12,z:-1.3,rotY:0},{x:.2,z:-9.3,rotY:0},{x:5.9,z:-9.3,rotY:0},{x:-11,z:12,rotY:of},{x:-3.6,z:12,rotY:of}],ff=(e,t,n,r,i,a,o,s)=>({id:e,x:t,z:n,rx:r,rz:i,count:a,kind:o,seed:s}),pf=[ff(`nw-woods`,-18,-13,3.4,2.6,26,`conifer`,101),ff(`n-belt`,-8,-12.6,6,1.8,18,`mixed`,102),ff(`n-belt-east`,4,-13.2,4.2,1.8,14,`broadleaf`,103),ff(`ne-outside`,17.6,-11,2.4,3,12,`mixed`,104),ff(`e-orchard`,18.8,6.2,1.6,4,16,`orchard`,105),ff(`se-outside`,16.6,13,3,1.6,12,`broadleaf`,106),ff(`sw-outside`,-18,12,2.6,2.4,16,`mixed`,107),ff(`w-outside`,-19,-6,1.6,3.6,12,`conifer`,108),ff(`bank-west`,2.6,6.6,.9,3,10,`willow`,109),ff(`bank-east`,7.9,-6.4,1,2.6,8,`willow`,110),ff(`back-belt`,-9,-9,5,.9,12,`hedgerow`,111),ff(`churchyard`,-3.4,-9.4,2.4,.7,6,`broadleaf`,112),ff(`orchard-east`,11.6,7.4,2.4,1.4,12,`orchard`,113),ff(`ne-inside`,11.5,-6.6,2.6,1.6,10,`mixed`,114),ff(`station-green`,-11.5,6.6,1.6,1.4,6,`broadleaf`,115),ff(`piazza-beds`,.2,2.2,1.4,.9,4,`hedgerow`,116)],mf=lf.map(e=>({minX:e.x-Math.max(e.w,e.d)/2-.3,maxX:e.x+Math.max(e.w,e.d)/2+.3,minZ:e.z-Math.max(e.w,e.d)/2-.3,maxZ:e.z+Math.max(e.w,e.d)/2+.3})),hf=[{minX:uf.platform.xFrom-.6,maxX:uf.platform.xTo+.6,minZ:6,maxZ:11.6},{minX:-2.4,maxX:1.2,minZ:-1,maxZ:2.2},{minX:Yd.xFrom-.6,maxX:Yd.xTo+.6,minZ:Yd.z-1.8,maxZ:Yd.z+1.8}];function gf(e,t,n={}){let r=n.railClear??Bd.clearance,i=n.roadClear??.45,a=n.waterClear??.35,o=n.edgeClear??.5;if(e<Fd.play.minX+o||e>Fd.play.maxX-o||t<Fd.play.minZ+o||t>Fd.play.maxZ-o||qd(e,t)<r)return!1;for(let n of Qd)if(Pd(n.points,e,t)<n.width/2+(n.sidewalk||0)+i)return!1;if(Pd(Id.points,e,t)<Id.bankHalf+a)return!1;for(let n of mf)if(e>n.minX&&e<n.maxX&&t>n.minZ&&t<n.maxZ)return!1;for(let n of hf)if(e>n.minX&&e<n.maxX&&t>n.minZ&&t<n.maxZ)return!1;return!0}var _f={trainArc01:.055,timeOfDay:`evening`},vf={wood:{frame:9133620,frameDark:6898986,top:11962199,rim:10251068,rimTop:12883295,rimEdge:14726524},ground:{grass:8232009,grassDry:10135643,grassDark:5995574,grassShade:4743980,dirt:10254927,sand:12163690,bed:9075292,pebble:10195330,rock:9143416},water:{surface:3107446,shallow:6267040,foam:14216428},road:{asphalt:4934477,gravel:9077106,path:10721929,marking:14275517,sidewalk:11117204,curb:9275520},rail:{ballast:10195332,sleeper:5981744,rail:12764874,railSide:8018501,steel:7041664,steelDark:4936024,truss:9190194,concrete:11710116,stone:10130827,stoneDark:8222830,bridgeDeck:5457466,timber:8082998,timberDark:5914407},wall:{plaster:[15392711,14864302,14272701,13424335,15193001,14205859,13218468],brick:9391932,stone:10130827,timber:8082998,trim:15788507,shop:7162426},roof:{tileA:9259578,tileB:7619642,slate:5791590,slateBrown:7167832,shingle:8215100,metal:6449518},window:{glass:3097168,frame:15920610,warm:16763256,warmDeep:16751429,cool:16773846,mullion:4866104},station:{wall:15128504,trim:9062972,canopy:7162673,canopyGlass:12374744,platform:12432290,platformEdge:11553338,signBoard:2046806,signText:15986662},train:{loco:3095109,locoTrim:10238766,boiler:2041388,smokeBox:9343640,brass:13214247,coachA:4152650,coachB:7027252,coachTrim:15260846,roof:7236195,wheel:2500651,wheelRim:10133670,coupler:3815996},nature:{foliage:[5143610,4156209,7049023,3103276,8232010],foliageDry:10260286,trunk:7031859,trunkDark:5323048,hedge:4154932,flowers:[14210126,12999546,15262424,9071551,14252863],hay:13216094},props:{lampPost:3356733,lampGlass:16767392,lampIron:2566959,fenceWood:11044700,fenceWhite:15328472,crate:9071170,barrel:5981744,signGreen:3103807,awningA:11026479,awningB:3103878,cloth:15130320}},yf={day:{label:`白天`,skyTop:8368872,skyBottom:14675711,skyHorizon:13624567,sunColor:16774368,sunIntensity:3,sunElevationDeg:58,sunAzimuthDeg:128,hemiSky:12572917,hemiGround:7305802,hemiIntensity:.85,ambientColor:16777215,ambientIntensity:.16,environmentIntensity:1,fogColor:14215415,fogNear:150,fogFar:420,emissive:0,lampLightIntensity:0,sunGlow:.15,shadowIntensity:1},evening:{label:`傍晚`,skyTop:2900594,skyBottom:16758903,skyHorizon:16767395,sunColor:16756838,sunIntensity:2.8,sunElevationDeg:22,sunAzimuthDeg:262,hemiSky:9414102,hemiGround:4867122,hemiIntensity:.74,ambientColor:16767408,ambientIntensity:.24,environmentIntensity:.82,fogColor:11569792,fogNear:130,fogFar:380,emissive:.4,lampLightIntensity:.55,sunGlow:1,shadowIntensity:1},night:{label:`夜晚`,skyTop:264212,skyBottom:1583434,skyHorizon:2572383,sunColor:10469631,sunIntensity:.5,sunElevationDeg:46,sunAzimuthDeg:20,hemiSky:2371664,hemiGround:856088,hemiIntensity:.26,ambientColor:10466528,ambientIntensity:.1,environmentIntensity:.3,fogColor:725540,fogNear:110,fogFar:340,emissive:1,lampLightIntensity:1,sunGlow:0,shadowIntensity:.55}};function bf(e,t,n){let r=e>>16&255,i=e>>8&255,a=e&255,o=t>>16&255,s=t>>8&255,c=t&255,l=Math.round(r+(o-r)*n),u=Math.round(i+(s-i)*n),d=Math.round(a+(c-a)*n);return l<<16|u<<8|d}function xf(e){let t=e>>>0||2654435769;return function(){t=t+1831565813>>>0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Sf(e,t,n){let r=Math.imul(e|0,374761393)^Math.imul(t|0,668265263)^Math.imul(n|0,1442695041);return r=Math.imul(r^r>>>13,1274126177),r^=r>>>16,(r>>>0)/4294967296}function Cf(e,t){return(e%t+t)%t}function wf(e){return e<0?0:e>1?1:e}function Tf(e){let t=Math.round(e);return t<0?0:t>255?255:t}function Ef(e){return[e>>16&255,e>>8&255,e&255]}function Df(e,t,n){return Tf(e)<<16|Tf(t)<<8|Tf(n)}function Of(e,t){let n=Ef(e);return Df(n[0]*t,n[1]*t,n[2]*t)}function kf(e){return Df(e*255,e*255,e*255)}function Af(e,t){let n=Ef(e);return t===void 0||t>=1?`rgb(${n[0]},${n[1]},${n[2]})`:`rgba(${n[0]},${n[1]},${n[2]},${wf(t)})`}function jf(e,t){let n=Tf(e*255);return t===void 0||t>=1?`rgb(${n},${n},${n})`:`rgba(${n},${n},${n},${wf(t)})`}function Mf(e,t){let n=Math.max(2,e|0),r=new Float32Array(n*n);for(let e=0;e<r.length;e++)r[e]=t();let i=(e,t)=>r[Cf(t,n)*n+Cf(e,n)];return function(e,t){let r=e*n,a=t*n,o=Math.floor(r),s=Math.floor(a),c=r-o,l=a-s,u=c*c*(3-2*c),d=l*l*(3-2*l),f=i(o,s),p=i(o+1,s),m=i(o,s+1),h=i(o+1,s+1);return(f*(1-u)+p*u)*(1-d)+(m*(1-u)+h*u)*d}}function Nf(e,t,n){let r=[],i=1,a=n,o=0;for(let n=0;n<t;n++)r.push({sample:Mf(a,e),amp:i}),o+=i,a*=2,i*=.5;return function(e,t){let n=0;for(let i=0;i<r.length;i++)n+=r[i].amp*r[i].sample(e,t);return n/o}}function Pf(e){let t=document.createElement(`canvas`);return t.width=e,t.height=e,{canvas:t,ctx:t.getContext(`2d`)}}function Ff(e,t){let{canvas:n,ctx:r}=Pf(e),i=r.createImageData(e,e),a=i.data;for(let n=0;n<e;n++){let r=n/e;for(let i=0;i<e;i++){let o=t(i/e,r,i,n),s=(n*e+i)*4;a[s]=o[0],a[s+1]=o[1],a[s+2]=o[2],a[s+3]=255}}return r.putImageData(i,0,0),{canvas:n,ctx:r}}function If(e,t,n,r){let i=e.getImageData(0,0,t,t),a=i.data;for(let e=0;e<t;e++){let i=e/t;for(let o=0;o<t;o++){let s=1+(n(o/t,i)-.5)*2*r,c=(e*t+o)*4;a[c]=Tf(a[c]*s),a[c+1]=Tf(a[c+1]*s),a[c+2]=Tf(a[c+2]*s)}}e.putImageData(i,0,0)}function Lf(e,t,n,r,i){for(let a=0;a<n.length;a++){let o=n[a],s=[0],c=[0];o.x<r?s.push(t):o.x>t-r&&s.push(-t),o.y<r?c.push(t):o.y>t-r&&c.push(-t);for(let t=0;t<s.length;t++)for(let n=0;n<c.length;n++)e.save(),e.translate(s[t],c[n]),i(e,o),e.restore()}}function Rf(e,t){e.beginPath(),e.moveTo(t[0].x,t[0].y);for(let n=1;n<t.length;n++)e.lineTo(t[n].x,t[n].y);e.closePath()}function zf(e,t,n,r){let i=t-e.x,a=n-e.y,o=Math.hypot(i,a)||1;return{x:e.x+i/o*r,y:e.y+a/o*r}}function Bf(e,t){let n=[],r=0;for(let i=0;i<t;i++){let t=.55+e();n.push(t),r+=t}let i=[],a=0;for(let e=0;e<t;e++)i.push(a/r),a+=n[e];return i.push(1),i}var Vf=[];function Hf(e,t){let n=t.srgb===!0,r=t.repeatX===void 0?1:t.repeatX,i=t.repeatY===void 0?r:t.repeatY,a=new Ji(e);return a.name=t.name||``,a.wrapS=d,a.wrapT=d,a.colorSpace=n?Je:``,a.repeat.set(r,i),a.needsUpdate=!0,Vf.push(a),a}function Uf(){let e=xf(5351363),t=Nf(e,3,3),n=Nf(e,4,16),r=Nf(e,3,2),i=[];for(let t=0;t<4;t++)i.push(.9+e()*.16);let a=[];for(let t=0;t<3;t++)a.push({u:e(),v:e(),r:.018+e()*.02});let{canvas:o,ctx:s}=Ff(256,(e,o)=>{let s=o*256,c=Math.min(3,Math.floor(s/64)),l=(s-c*64)/64,u=.5+.5*Math.sin(Math.PI*2*5*l+2.6*t(e*2,o)),d=n(e*4,o*2),f=i[c]*(.86+.14*u)*(.94+.12*d);f*=.96+.08*r(e,o*.5);for(let t=0;t<a.length;t++){let n=a[t],r=Math.abs(e-n.u),i=Math.abs(o-n.v),s=Math.min(r,1-r)*256,c=Math.min(i,1-i)*256,l=Math.hypot(s,c)/(n.r*256);l<2.4&&(f*=.7+.32*wf((l-.7)/1.7))}return[Tf(f*255),Tf(f*255),Tf(f*255)]});for(let e=0;e<=4;e++){let t=e*64;s.strokeStyle=`rgba(0,0,0,0.38)`,s.lineWidth=1,s.beginPath(),s.moveTo(0,t+.5),s.lineTo(256,t+.5),s.stroke(),s.strokeStyle=`rgba(255,255,255,0.12)`,s.beginPath(),s.moveTo(0,t+2.5),s.lineTo(256,t+2.5),s.stroke()}return o}function Wf(){let e=xf(8143289),t=Nf(e,3,4),n=Nf(e,4,24),r=[];for(let t=0;t<8;t++)r.push(.94+e()*.12);let{canvas:i,ctx:a}=Ff(256,(e,i)=>{let a=i*256,o=Math.min(7,Math.floor(a/32)),s=(a-o*32)/32,c=.5+.5*Math.sin(Math.PI*2*8*s+3.1*t(e*2,i)),l=n(e*6,i*3),u=r[o]*(.93+.07*c)*(.96+.08*l);return[Tf(u*255),Tf(u*255),Tf(u*255)]});for(let e=0;e<=8;e++){let t=e*32;a.strokeStyle=`rgba(0,0,0,0.22)`,a.lineWidth=1,a.beginPath(),a.moveTo(0,t+.5),a.lineTo(256,t+.5),a.stroke()}return i}function Gf(){let e=xf(2798942),t=Nf(e,4,18),n=Nf(e,3,3),r=[];for(let t=0;t<8;t++)r.push(.8+e()*.2);let{canvas:i,ctx:a}=Ff(256,(e,i)=>{let a=e*256,o=Math.min(7,Math.floor(a/32)),s=(a-o*32)/32,c=.5+.5*Math.sin(Math.PI*2*3*s+2.4*t(e*2,i*3)),l=r[o]*(.88+.12*c);return l*=.94+.12*t(e*6,i*5),l*=.96+.08*n(e,i*.5),[Tf(l*255),Tf(l*255),Tf(l*255)]});for(let e=0;e<=8;e++){let t=e*32;a.strokeStyle=`rgba(0,0,0,0.4)`,a.lineWidth=2,a.beginPath(),a.moveTo(t,0),a.lineTo(t,256),a.stroke(),a.strokeStyle=`rgba(255,255,255,0.1)`,a.lineWidth=1,a.beginPath(),a.moveTo(t+2,0),a.lineTo(t+2,256),a.stroke()}let o=[];for(let t=0;t<8;t++)o.push({x:(t+.5)*32,y:256*(.16+e()*.06),r:1.4+e()}),o.push({x:(t+.5)*32,y:256*(.78+e()*.06),r:1.4+e()});return Lf(a,256,o,4,(e,t)=>{e.fillStyle=`rgba(0,0,0,0.35)`,e.beginPath(),e.arc(t.x,t.y,t.r,0,Math.PI*2),e.fill()}),i}function Kf(){let e=xf(3111441),t=Nf(e,4,3),n=Nf(e,4,10),r=Nf(e,3,28),i=vf.ground,{canvas:a,ctx:o}=Ff(512,(e,a)=>{let o=t(e,a),s=n(e*3,a*3),c=r(e*2,a*2),l=bf(i.grass,i.grassDark,wf((o-.36)*1.6));l=bf(l,i.grassShade,wf((s-.64)*2.4)),l=bf(l,i.grassDry,wf((o*.55+s*.45-.68)*2));let u=.9+.2*c,d=Ef(l);return[d[0]*u,d[1]*u,d[2]*u]}),s=[Of(i.grass,1.18),Of(i.grassDark,.86),i.grassDry,i.grassShade],c=[];for(let t=0;t<1500;t++){let t=e()<.16,n=t?5+e()*6:2+e()*3;c.push({x:e()*512,y:e()*512,len:n,tilt:(e()-.5)*1.2,c:s[e()*s.length|0],a:.22+e()*.3,w:t?1.3:.9})}Lf(o,512,c,12,(e,t)=>{e.globalAlpha=t.a,e.strokeStyle=Af(t.c),e.lineWidth=t.w,e.lineCap=`round`,e.beginPath(),e.moveTo(t.x,t.y),e.lineTo(t.x+t.tilt*t.len,t.y-t.len),e.stroke()}),o.globalAlpha=1;let l=[],u=[Of(i.grassShade,.8),Of(i.grassDark,.9)],d=[Of(i.grass,1.25),i.grassDry];for(let t=0;t<1100;t++){let t=e()<.55;l.push({x:e()*512,y:e()*512,r:.6+e()*1.5,c:(t?u:d)[e()*2|0],a:.2+e()*.3})}return Lf(o,512,l,3,(e,t)=>{e.globalAlpha=t.a,e.fillStyle=Af(t.c),e.beginPath(),e.arc(t.x,t.y,t.r,0,Math.PI*2),e.fill()}),o.globalAlpha=1,a}function qf(){let e=xf(6689447),t=Nf(e,4,3),n=Nf(e,3,22),{canvas:r,ctx:i}=Ff(512,(e,r)=>{let i=t(e,r),a=n(e*2,r*2),o=Tf((.88+.14*(i-.5)+.06*(a-.5))*255);return[o,o,o]});If(i,512,n,.1);let a=[];for(let t=0;t<2600;t++){let t=e()<.42;a.push({x:e()*512,y:e()*512,r:.5+e()*1.3,c:kf(t?1:.58),a:.18+e()*.32})}Lf(i,512,a,3,(e,t)=>{e.globalAlpha=t.a,e.fillStyle=Af(t.c),e.fillRect(t.x,t.y,t.r*1.6,t.r*1.6)}),i.globalAlpha=1;let o=[];for(let t=0;t<3;t++)o.push({x:e()*512,y:e()*512,w:46+e()*80,h:24+e()*42,rot:(e()-.5)*.5,c:kf(e()<.5?.74:.97),a:.16+e()*.12});Lf(i,512,o,100,(e,t)=>{e.save(),e.translate(t.x,t.y),e.rotate(t.rot),e.globalAlpha=t.a,e.fillStyle=Af(t.c),e.fillRect(-t.w/2,-t.h/2,t.w,t.h),e.globalAlpha=Math.min(1,t.a+.12),e.strokeStyle=Af(kf(.55)),e.lineWidth=1.4,e.strokeRect(-t.w/2,-t.h/2,t.w,t.h),e.restore()}),i.globalAlpha=1;let s=[];for(let t=0;t<7;t++){let t=[{x:e()*512,y:e()*512}];for(let n=1;n<=4;n++){let r=t[n-1];t.push({x:r.x+(e()-.5)*70,y:r.y+(e()-.5)*70,r:0})}s.push({x:(t[0].x+t[4].x)/2,y:(t[0].y+t[4].y)/2,pts:t})}return Lf(i,512,s,120,(e,t)=>{e.globalAlpha=.3,e.strokeStyle=Af(kf(.5)),e.lineWidth=1.6,e.beginPath(),e.moveTo(t.pts[0].x,t.pts[0].y);for(let n=1;n<t.pts.length;n++)e.lineTo(t.pts[n].x,t.pts[n].y);e.stroke()}),i.globalAlpha=1,r}function Jf(){let e=xf(2047362),t=Nf(e,3,26),n=Nf(e,3,4),{canvas:r,ctx:i}=Ff(512,(e,r)=>{let i=Tf((.82+.16*n(e,r)+.08*(t(e*2,r*2)-.5))*255);return[i,i,i]}),a=[],o=[1,.92,.84,.74,.96];for(let t=0;t<2400;t++)a.push({x:e()*512,y:e()*512,rx:1.2+e()*2.2,ry:1.1+e()*2,rot:e()*Math.PI,c:kf(o[e()*o.length|0]),a:.55+e()*.4});return Lf(i,512,a,5,(e,t)=>{e.save(),e.translate(t.x,t.y),e.rotate(t.rot),e.globalAlpha=t.a,e.fillStyle=Af(t.c),e.beginPath(),e.ellipse(0,0,t.rx,t.ry,0,0,Math.PI*2),e.fill(),e.globalAlpha=t.a*.4,e.strokeStyle=`rgba(0,0,0,0.6)`,e.lineWidth=.8,e.stroke(),e.restore()}),i.globalAlpha=1,If(i,512,t,.07),r}function Yf(){let e=xf(4919824),t=Nf(e,4,20),n=[],r=[],i=[];for(let t=0;t<3;t++){n.push([]),r.push([]),i.push([]);for(let a=0;a<3;a++)n[t].push((e()-.5)*170.66666666666666*.34),r[t].push((e()-.5)*170.66666666666666*.34),i[t].push(.76+e()*.22)}let a=(e,t)=>({x:e/3*512+n[Cf(e,3)][Cf(t,3)],y:t/3*512+r[Cf(e,3)][Cf(t,3)]}),{canvas:o,ctx:s}=Ff(512,(e,n)=>{let r=(.58+.12*t(e*2,n*2))*255;return[r,r,r]});for(let e=-1;e<=3;e++)for(let t=-1;t<=3;t++){let n=[a(t,e),a(t+1,e),a(t+1,e+1),a(t,e+1)],r=(n[0].x+n[1].x+n[2].x+n[3].x)/4,o=(n[0].y+n[1].y+n[2].y+n[3].y)/4,c=n.map(e=>zf(e,r,o,2.6)),l=i[Cf(t,3)][Cf(e,3)];Rf(s,c),s.fillStyle=jf(l),s.fill(),Rf(s,n.map(e=>zf(e,r,o,9))),s.fillStyle=jf(Math.min(1,l*1.06),.65),s.fill(),s.strokeStyle=jf(l*1.08,.4),s.lineWidth=1.2,s.stroke()}If(s,512,t,.08);let c=[];for(let t=0;t<700;t++)c.push({x:e()*512,y:e()*512,r:.5+e()*1.4,c:e()<.5?kf(.55):kf(1),a:.12+e()*.2});return Lf(s,512,c,3,(e,t)=>{e.globalAlpha=t.a,e.fillStyle=Af(t.c),e.beginPath(),e.arc(t.x,t.y,t.r,0,Math.PI*2),e.fill()}),s.globalAlpha=1,o}function Xf(){let e=xf(7146227),t=Nf(e,3,26),{canvas:n,ctx:r}=Ff(512,(e,n)=>{let r=Tf((.66+.1*t(e*2,n*2))*255);return[r,r,r]}),i=[],a=[1,.96,.9,.84,.94];for(let t=0;t<1100;t++){let t=3.2+e()*5.2,n=[],r=5+(e()*3|0);for(let t=0;t<r;t++)n.push(.62+e()*.5);i.push({x:e()*512,y:e()*512,r:t,rot:e()*Math.PI*2,lobes:n,c:kf(a[e()*a.length|0]),a:.9+e()*.1})}return Lf(r,512,i,11,(e,t)=>{let n=t.lobes.length;e.save(),e.translate(t.x,t.y),e.rotate(t.rot),e.globalAlpha=t.a;let r=[];for(let e=0;e<n;e++){let i=e/n*Math.PI*2,a=t.r*t.lobes[e];r.push({x:Math.cos(i)*a,y:Math.sin(i)*a*.85})}Rf(e,r),e.fillStyle=Af(t.c),e.fill(),e.strokeStyle=Af(Of(t.c,.55)),e.lineWidth=1.1,e.stroke(),e.globalAlpha=t.a*.45,e.strokeStyle=jf(1),e.lineWidth=1.4,e.beginPath(),e.arc(0,0,t.r*.78,Math.PI*1.05,Math.PI*1.75),e.stroke(),e.restore()}),r.globalAlpha=1,If(r,512,t,.06),n}function Zf(){let e=xf(3860288),t=vf.window.frame,n=Nf(e,4,22),r=Nf(e,4,5),{canvas:i,ctx:a}=Ff(512,(e,i)=>{let a=n(e*2,i*2),o=1.02-.1*r(e,i)+.05*a,s=Ef(t);return[s[0]*o,s[1]*o,s[2]*o]});If(a,512,n,.045);let o=[],s=Of(vf.props.cloth,.78);for(let t=0;t<6;t++)o.push({x:e()*512,y:e()*512,r:34+e()*90,a:.08+e()*.1});Lf(a,512,o,130,(e,t)=>{let n=e.createRadialGradient(t.x,t.y,0,t.x,t.y,t.r);n.addColorStop(0,Af(s,t.a)),n.addColorStop(.7,Af(s,t.a*.45)),n.addColorStop(1,Af(s,0)),e.fillStyle=n,e.beginPath(),e.arc(t.x,t.y,t.r,0,Math.PI*2),e.fill()});let c=[];for(let t=0;t<5;t++)c.push({x:e()*512,y:e()*512,h:40+e()*120,w:5+e()*14});Lf(a,512,c,160,(e,t)=>{let n=e.createLinearGradient(0,t.y,0,t.y+t.h);n.addColorStop(0,Af(s,.14)),n.addColorStop(1,Af(s,0)),e.fillStyle=n,e.fillRect(t.x-t.w/2,t.y,t.w,t.h)});let l=[];for(let t=0;t<1200;t++)l.push({x:e()*512,y:e()*512,r:.4+e()*1,c:e()<.5?kf(1):kf(.62),a:.06+e()*.12});return Lf(a,512,l,2,(e,t)=>{e.globalAlpha=t.a,e.fillStyle=Af(t.c),e.beginPath(),e.arc(t.x,t.y,t.r,0,Math.PI*2),e.fill()}),a.globalAlpha=1,i}function Qf(){let e=Nf(xf(10365772),3,24),{canvas:t,ctx:n}=Ff(256,(t,n)=>{let r=(.88+.12*e(t*3,n*3))*255;return[r,r,r]});for(let e=-1;e<=8;e++){let t=e*32;for(let r=-1;r<=8;r++){let i=r*32,a=.88+Sf(Cf(r,8),Cf(e,8),91)*.16,o=n.createLinearGradient(i,0,i+32,0);o.addColorStop(0,jf(a*.62)),o.addColorStop(.18,jf(a*.88)),o.addColorStop(.5,jf(a)),o.addColorStop(.82,jf(a*.88)),o.addColorStop(1,jf(a*.62)),n.fillStyle=o,n.fillRect(i,t,32,32),n.strokeStyle=jf(a*1.15,.35),n.lineWidth=1,n.beginPath(),n.moveTo(i+.5,t),n.lineTo(i+.5,t+32),n.stroke()}let r=n.createLinearGradient(0,t,0,t+13.44);r.addColorStop(0,`rgba(0,0,0,0.34)`),r.addColorStop(1,`rgba(0,0,0,0)`),n.fillStyle=r,n.fillRect(0,t,256,13.44),n.fillStyle=jf(.95,.2),n.fillRect(0,t+4.48,256,1.5),n.fillStyle=`rgba(0,0,0,0.16)`,n.fillRect(0,t+32-1.5,256,1.5)}return If(n,256,e,.05),t}function $f(){let e=Nf(xf(1361752),3,24),{canvas:t,ctx:n}=Ff(256,(t,n)=>{let r=(.6+.1*e(t*3,n*3))*255;return[r,r,r]});for(let e=-1;e<=8;e++){let t=e*32,r=Cf(e,8)%2==1?16:0;for(let i=-1;i<=8;i++){let a=i*32+r;n.fillStyle=jf(.74+Sf(Cf(i,8),Cf(e,8),37)*.24),n.fillRect(a+1,t+1,30,30);let o=n.createLinearGradient(0,t,0,t+32);o.addColorStop(0,`rgba(255,255,255,0.12)`),o.addColorStop(.6,`rgba(255,255,255,0)`),o.addColorStop(1,`rgba(0,0,0,0.14)`),n.fillStyle=o,n.fillRect(a+1,t+1,30,30)}}for(let e=-1;e<=8;e++){let t=e*32,r=n.createLinearGradient(0,t,0,t+10.88);r.addColorStop(0,`rgba(0,0,0,0.34)`),r.addColorStop(1,`rgba(0,0,0,0)`),n.fillStyle=r,n.fillRect(0,t,256,10.88)}return If(n,256,e,.06),t}function ep(){let e=xf(6045473),t=Nf(e,4,18),n=[],r=[],i=[];for(let t=0;t<4;t++){n.push((e()-.5)*64*.2);let a=3+(e()*3|0);r.push(Bf(e,a)),i.push([]);for(let n=0;n<=a;n++)i[t].push(e())}let a=e=>e/4*256+n[Cf(e,4)],o=(e,t)=>{let n=r[Cf(e,4)],i=n.length-1;return n[Cf(t,i)]*256+Math.floor(t/i)*256},{canvas:s,ctx:c}=Ff(256,(e,n)=>{let r=(.42+.1*t(e*2,n*2))*255;return[r,r,r]});for(let e=-1;e<=4;e++){let t=Cf(e,4),n=r[t].length-1,s=a(e),l=a(e+1);for(let r=-1;r<=n;r++){let a=Cf(r,n),u=o(e,r),d=o(e,r+1),f=.74+i[t][a]*.24,p=2.6,m=(u+d)/2,h=(s+l)/2,g=e=>(Sf(a,t,e)-.5)*7,_=[{x:u+p+g(1),y:s+p+g(2)},{x:d-p+g(3),y:s+p+g(4)},{x:d-p+g(5),y:l-p+g(6)},{x:u+p+g(7),y:l-p+g(8)}];Rf(c,_),c.fillStyle=jf(f),c.fill(),Rf(c,_.map(e=>zf(e,m,h,4))),c.fillStyle=jf(Math.min(1,f*1.08),.75),c.fill(),c.strokeStyle=jf(f*1.22,.45),c.lineWidth=1,c.stroke(),c.strokeStyle=`rgba(0,0,0,0.35)`,c.lineWidth=1,Rf(c,_),c.stroke()}}return If(c,256,t,.1),s}function tp(){let e=xf(9116749),t=Nf(e,3,20),n=bf(vf.wall.plaster[0],vf.wall.trim,.45),r=[vf.wall.brick,bf(vf.wall.brick,vf.roof.tileA,.35),bf(vf.wall.brick,vf.roof.tileB,.4),Of(vf.wall.brick,.86)],{canvas:i,ctx:a}=Ff(256,(e,r)=>{let i=Ef(n),a=.9+.2*t(e*3,r*3);return[i[0]*a,i[1]*a,i[2]*a]});for(let e=-1;e<=8;e++){let t=e*32,n=Cf(e,8)%2==1?32:0;for(let i=-1;i<=4;i++){let o=i*64+n,s=Cf(i,4),c=Cf(e,8),l=r[Sf(s,c,5)*r.length|0];a.fillStyle=Af(Of(l,.86+Sf(s,c,9)*.24)),a.fillRect(o+1.5,t+1.5,61,29);let u=a.createLinearGradient(0,t,0,t+32);u.addColorStop(0,`rgba(255,255,255,0.1)`),u.addColorStop(.7,`rgba(0,0,0,0)`),u.addColorStop(1,`rgba(0,0,0,0.22)`),a.fillStyle=u,a.fillRect(o+1.5,t+1.5,61,29),a.strokeStyle=`rgba(0,0,0,0.18)`,a.lineWidth=1,a.strokeRect(o+1.5,t+1.5,61,29)}}If(a,256,t,.08);let o=[];for(let t=0;t<500;t++)o.push({x:e()*256,y:e()*256,r:.5+e()*1.2,a:.08+e()*.12});return Lf(a,256,o,3,(e,t)=>{e.globalAlpha=t.a,e.fillStyle=`rgba(0,0,0,1)`,e.beginPath(),e.arc(t.x,t.y,t.r,0,Math.PI*2),e.fill()}),a.globalAlpha=1,i}function np(){let e=xf(2854495),t=Nf(e,3,20),n=Nf(e,2,4),r=[],i=[1,0,1,2,-1,3,-2,1],a=[0,1,1,-1,2,2,3,4],o=[1,.86,.72,.6,.48,.36,.3,.24];for(let t=0;t<i.length;t++)r.push({kx:i[t],ky:a[t],amp:o[t],phase:e()*Math.PI*2,modScale:1+t%3,modPhase:e()});let s=.022,c=.018,l=2/512,{canvas:u}=Ff(512,(e,i)=>{let a=0,o=0;for(let t=0;t<r.length;t++){let s=r[t],c=.62+.38*n((e*s.modScale+s.modPhase)%1,i*s.modScale),l=s.amp*c,u=Math.PI*2*(s.kx*e+s.ky*i)+s.phase;a+=l*s.kx*Math.cos(u),o+=l*s.ky*Math.cos(u)}let u=(t(e*2+l,i*2)-t(e*2-l,i*2))/(2*l),d=(t(e*2,i*2+l)-t(e*2,i*2-l))/(2*l),f=-(a*s*Math.PI*2+u*c),p=-(o*s*Math.PI*2+d*c),m=Math.hypot(f,p,1);return[Tf(f/m*.5*255+128),Tf(p/m*.5*255+128),Tf(1/m*.5*255+128)]});return u}function rp(e,t,n,r){let i=t*.055,a=t-i*2,o=t*.028,s=(a-o*1)/2,c=(a-o*2)/3;for(let t=0;t<3;t++)for(let n=0;n<2;n++){let a=i+n*(s+o),l=i+t*(c+o);r(e,n,t,a,l,s,c)}e.strokeStyle=n.mullion,e.lineWidth=o,e.beginPath();for(let n=1;n<2;n++){let r=i+n*s+(n-.5)*o;e.moveTo(r,i),e.lineTo(r,t-i)}for(let n=1;n<3;n++){let r=i+n*c+(n-.5)*o;e.moveTo(i,r),e.lineTo(t-i,r)}e.stroke(),e.strokeStyle=n.frame,e.lineWidth=i*2,e.strokeRect(0,0,t,t),e.strokeStyle=`rgba(0,0,0,0.35)`,e.lineWidth=2,e.strokeRect(i-1,i-1,a+2,a+2)}function ip(){let e=xf(7361485),t=Nf(e,3,16),{canvas:n,ctx:r}=Pf(256);r.fillStyle=Af(vf.window.frame),r.fillRect(0,0,256,256);let i=[];for(let t=0;t<6;t++)i.push(.72+e()*.5);rp(r,256,{frame:Af(vf.window.frame),mullion:Af(vf.window.mullion)},(e,t,n,a,o,s,c)=>{let l=i[n*2+t],u=Of(vf.window.glass,l),d=r.createLinearGradient(a,o,a+s*.6,o+c);d.addColorStop(0,Af(Of(u,1.9))),d.addColorStop(.35,Af(u)),d.addColorStop(1,Af(Of(u,.7))),r.fillStyle=d,r.fillRect(a,o,s,c),r.save(),r.beginPath(),r.rect(a,o,s,c),r.clip(),r.globalAlpha=.16,r.fillStyle=Af(vf.window.cool),r.beginPath(),r.moveTo(a-s*.2,o+c*.75),r.lineTo(a+s*.55,o-c*.2),r.lineTo(a+s*.95,o-c*.2),r.lineTo(a+s*.2,o+c*.95),r.closePath(),r.fill(),r.globalAlpha=.5,r.strokeStyle=Af(Of(vf.window.glass,.5)),r.lineWidth=2,r.strokeRect(a,o,s,c),r.restore()}),r.globalAlpha=.05;let a=[];for(let t=0;t<400;t++)a.push({x:e()*256,y:e()*256,r:.5+e()*1.2});return Lf(r,256,a,3,(e,n)=>{e.fillStyle=jf(t(n.x/256,n.y/256)>.5?1:.2),e.beginPath(),e.arc(n.x,n.y,n.r,0,Math.PI*2),e.fill()}),r.globalAlpha=1,n}function ap(){let e=xf(1693874),{canvas:t,ctx:n}=Pf(256);n.fillStyle=Af(Of(vf.window.mullion,.22)),n.fillRect(0,0,256,256);let r=[];for(let t=0;t<6;t++)r.push({bright:.45+e()*.55,warm:e(),curtain:e()<.45,bulb:e()<.3});return rp(n,256,{frame:Af(Of(vf.window.mullion,.22)),mullion:Af(Of(vf.window.mullion,.3))},(t,i,a,o,s,c,l)=>{let u=r[a*2+i],d=bf(vf.window.warm,vf.window.cool,u.warm*.35),f=bf(vf.window.warmDeep,vf.window.warm,.4),p=n.createLinearGradient(o,s,o,s+l);if(p.addColorStop(0,Af(Of(d,u.bright))),p.addColorStop(.62,Af(Of(f,u.bright))),p.addColorStop(1,Af(Of(f,u.bright*.55))),n.fillStyle=p,n.fillRect(o,s,c,l),n.save(),n.beginPath(),n.rect(o,s,c,l),n.clip(),u.curtain&&(n.globalAlpha=.42,n.fillStyle=Af(Of(vf.window.mullion,.6)),n.fillRect(o,s,c*.26,l),n.fillRect(o+c*.74,s,c*.26,l),n.globalAlpha=.22,n.fillStyle=Af(vf.props.cloth),n.fillRect(o+c*.24,s,c*.06,l),n.fillRect(o+c*.7,s,c*.06,l)),n.globalAlpha=.5,n.fillStyle=Af(Of(vf.window.mullion,.45)),n.beginPath(),n.ellipse(o+c*.5,s+l*.94,c*(.22+e()*.14),l*.16,0,0,Math.PI*2),n.fill(),u.bulb){n.globalAlpha=.9;let t=o+c*(.3+e()*.4),r=s+l*(.28+e()*.2),i=Math.max(c,l)*.12,a=n.createRadialGradient(t,r,0,t,r,i*3);a.addColorStop(0,Af(Of(vf.window.cool,1))),a.addColorStop(.35,Af(vf.window.warm,.6)),a.addColorStop(1,Af(vf.window.warm,0)),n.fillStyle=a,n.beginPath(),n.arc(t,r,i*3,0,Math.PI*2),n.fill()}n.restore(),n.globalAlpha=1}),t}function op(){let e=Nf(xf(5187496),3,18),t=vf.station.signBoard,n=vf.station.signText,{canvas:r,ctx:i}=Ff(256,(n,r)=>{let i=1.06-.18*r,a=Ef(t),o=.96+.08*e(n*3,r*3);return[a[0]*i*o,a[1]*i*o,a[2]*i*o]});i.globalAlpha=.85,i.strokeStyle=Af(n),i.lineWidth=7,i.strokeRect(11,11,234,234),i.lineWidth=1.6,i.strokeRect(21,21,214,214),i.globalAlpha=1;let a=[{x:36,y:62,w:184,h:30},{x:36,y:108,w:150,h:24},{x:36,y:148,w:176,h:18}];for(let e=0;e<a.length;e++){let t=a[e];i.globalAlpha=.9-e*.08,i.fillStyle=Af(n);let r=t.h/2;i.beginPath(),i.moveTo(t.x+r,t.y),i.lineTo(t.x+t.w-r,t.y),i.arc(t.x+t.w-r,t.y+r,r,-Math.PI/2,Math.PI/2),i.lineTo(t.x+r,t.y+t.h),i.arc(t.x+r,t.y+r,r,Math.PI/2,-Math.PI/2),i.closePath(),i.fill()}return i.globalAlpha=.7,i.fillStyle=Af(n),i.beginPath(),i.arc(64,200,13,0,Math.PI*2),i.fill(),i.globalAlpha=.55,i.fillStyle=Af(t),i.beginPath(),i.arc(64,200,6,0,Math.PI*2),i.fill(),i.globalAlpha=1,If(i,256,e,.06),r}function sp(){let e=xf(6980593),t=Nf(e,4,26),n=vf.props.awningA,r=vf.props.awningB,i=[];for(let t=0;t<8;t++)i.push(.9+e()*.2);let{canvas:a,ctx:o}=Ff(256,(e,a)=>{let o=e*256,s=Math.min(7,Math.floor(o/32)),c=s%2==0?n:r,l=.94+.12*t(e*4,a*4),u=1-.06*Math.max(0,Math.sin(Math.PI*2*2*a)),d=i[s]*l*u,f=Ef(c);return[f[0]*d,f[1]*d,f[2]*d]});for(let e=0;e<=8;e++){let t=e*32;o.strokeStyle=`rgba(0,0,0,0.18)`,o.lineWidth=1.5,o.beginPath(),o.moveTo(t,0),o.lineTo(t,256),o.stroke()}o.globalAlpha=.12,o.fillStyle=`rgba(0,0,0,1)`;for(let e=0;e<256;e+=64)o.fillRect(0,e,256,2);return o.globalAlpha=1,a}var K={woodPlinth:Hf(Uf(),{name:`woodPlinth`,srgb:!0,repeatX:2,repeatY:1}),woodRim:Hf(Wf(),{name:`woodRim`,srgb:!0,repeatX:3,repeatY:1}),grass:Hf(Kf(),{name:`grass`,srgb:!0,repeatX:6,repeatY:6}),asphalt:Hf(qf(),{name:`asphalt`,srgb:!0,repeatX:4,repeatY:4}),gravel:Hf(Jf(),{name:`gravel`,srgb:!0,repeatX:4,repeatY:4}),flagstone:Hf(Yf(),{name:`flagstone`,srgb:!0,repeatX:2,repeatY:2}),ballast:Hf(Xf(),{name:`ballast`,srgb:!0,repeatX:3,repeatY:3}),plaster:Hf(Zf(),{name:`plaster`,srgb:!0,repeatX:4,repeatY:4}),roofTile:Hf(Qf(),{name:`roofTile`,srgb:!0,repeatX:3,repeatY:3}),roofSlate:Hf($f(),{name:`roofSlate`,srgb:!0,repeatX:3,repeatY:3}),stoneWall:Hf(ep(),{name:`stoneWall`,srgb:!0,repeatX:3,repeatY:3}),brick:Hf(tp(),{name:`brick`,srgb:!0,repeatX:3,repeatY:3}),timber:Hf(Gf(),{name:`timber`,srgb:!0,repeatX:2,repeatY:1}),waterNormal:Hf(np(),{name:`waterNormal`,srgb:!1,repeatX:6,repeatY:6}),windowGlass:Hf(ip(),{name:`windowGlass`,srgb:!0,repeatX:1,repeatY:1}),windowLit:Hf(ap(),{name:`windowLit`,srgb:!0,repeatX:1,repeatY:1}),signPlate:Hf(op(),{name:`signPlate`,srgb:!0,repeatX:1,repeatY:1}),awning:Hf(sp(),{name:`awning`,srgb:!0,repeatX:1,repeatY:1})};function cp(e){let t=Math.max(1,Math.min(16,Math.floor(Number(e)||1)));for(let e=0;e<Vf.length;e++)Vf[e].anisotropy=t,Vf[e].needsUpdate=!0}var q=vf,lp=16777215,up=0,dp=[],fp=1,pp=[],mp=new W;function J(e){let t=new Mo(e);return gp(t),t}function hp(e,t){let n=J(e),r=new W(t.dayColor===void 0?lp:t.dayColor),i=new W(t.nightColor===void 0?lp:t.nightColor),a={material:n,dayIntensity:t.dayIntensity===void 0?0:t.dayIntensity,nightIntensity:t.nightIntensity===void 0?0:t.nightIntensity,dayColor:r,nightColor:i};return n.emissive.copy(r),n.emissiveIntensity=a.dayIntensity,pp.push(a),n}function gp(e){return!e||dp.indexOf(e)!==-1?e:(e.envMapIntensity=fp,dp.push(e),e)}function _p(e){fp=Number.isFinite(e)?e:1;for(let e=0;e<dp.length;e++)dp[e].envMapIntensity=fp}function vp(e){let t=Math.max(0,Math.min(1,Number.isFinite(e)?e:0));for(let e=0;e<pp.length;e++){let n=pp[e];mp.copy(n.dayColor).lerp(n.nightColor,t),n.material.emissive.copy(mp),n.material.emissiveIntensity=n.dayIntensity+(n.nightIntensity-n.dayIntensity)*t}}var Y={wood:{frame:J({color:q.wood.frame,map:K.woodPlinth,roughness:.82,metalness:0}),frameDark:J({color:q.wood.frameDark,map:K.woodPlinth,roughness:.84,metalness:0}),top:J({color:q.wood.top,map:K.woodPlinth,roughness:.8,metalness:0}),rim:J({color:q.wood.rim,map:K.woodRim,roughness:.78,metalness:0}),rimTop:J({color:q.wood.rimTop,map:K.woodRim,roughness:.76,metalness:0}),rimEdge:J({color:q.wood.rimEdge,map:K.woodRim,roughness:.74,metalness:0})},ground:{grass:J({color:lp,map:K.grass,roughness:.95,metalness:0}),dirt:J({color:q.ground.dirt,map:K.plaster,roughness:.96,metalness:0}),sand:J({color:q.ground.sand,map:K.gravel,roughness:.94,metalness:0}),bed:J({color:q.ground.bed,map:K.plaster,roughness:.9,metalness:0}),rock:J({color:q.ground.rock,map:K.stoneWall,roughness:.92,metalness:0})},water:{surface:J({color:q.water.surface,normalMap:K.waterNormal,normalScale:new V(.55,.55),roughness:.06,metalness:0,transparent:!0,opacity:.82,depthWrite:!0}),deep:J({color:bf(q.water.surface,up,.45),roughness:.18,metalness:0})},road:{asphalt:J({color:q.road.asphalt,map:K.asphalt,roughness:.92,metalness:0}),gravel:J({color:q.road.gravel,map:K.gravel,roughness:.9,metalness:0}),path:J({color:q.road.path,map:K.gravel,roughness:.93,metalness:0}),marking:J({color:q.road.marking,roughness:.7,metalness:0}),sidewalk:J({color:q.road.sidewalk,map:K.flagstone,roughness:.88,metalness:0}),curb:J({color:q.road.curb,map:K.plaster,roughness:.85,metalness:0})},rail:{ballast:J({color:q.rail.ballast,map:K.ballast,roughness:.9,metalness:0}),sleeper:J({color:q.rail.sleeper,map:K.woodPlinth,roughness:.86,metalness:0}),rail:J({color:q.rail.rail,roughness:.35,metalness:.85}),railSide:J({color:q.rail.railSide,roughness:.55,metalness:.4}),steel:J({color:q.rail.steel,roughness:.5,metalness:.6}),steelDark:J({color:q.rail.steelDark,roughness:.5,metalness:.6}),truss:J({color:q.rail.truss,roughness:.62,metalness:.25}),concrete:J({color:q.rail.concrete,map:K.plaster,roughness:.85,metalness:0}),stone:J({color:q.rail.stone,map:K.stoneWall,roughness:.9,metalness:0}),stoneDark:J({color:q.rail.stoneDark,map:K.stoneWall,roughness:.9,metalness:0}),bridgeDeck:J({color:q.rail.bridgeDeck,map:K.woodPlinth,roughness:.85,metalness:0}),timber:J({color:q.rail.timber,map:K.timber,roughness:.82,metalness:0}),timberDark:J({color:q.rail.timberDark,map:K.timber,roughness:.84,metalness:0})},wall:{plaster:q.wall.plaster.map(e=>J({color:e,map:K.plaster,roughness:.9,metalness:0})),brick:J({color:lp,map:K.brick,roughness:.88,metalness:0}),stone:J({color:q.wall.stone,map:K.stoneWall,roughness:.9,metalness:0}),timber:J({color:q.wall.timber,map:K.timber,roughness:.84,metalness:0}),trim:J({color:q.wall.trim,roughness:.62,metalness:0}),shop:J({color:q.wall.shop,map:K.woodPlinth,roughness:.76,metalness:0})},roof:{tiles:[q.roof.tileA,q.roof.tileB,q.roof.shingle,bf(q.roof.tileA,q.roof.tileB,.5)].map(e=>J({color:e,map:K.roofTile,roughness:.8,metalness:0})),slate:J({color:q.roof.slate,map:K.roofSlate,roughness:.55,metalness:.1}),slateBrown:J({color:q.roof.slateBrown,map:K.roofSlate,roughness:.6,metalness:.08}),shingle:J({color:q.roof.shingle,map:K.roofSlate,roughness:.86,metalness:0}),metal:J({color:q.roof.metal,map:K.roofSlate,roughness:.42,metalness:.55}),ridge:J({color:bf(q.roof.tileA,q.roof.tileB,.3),map:K.roofTile,roughness:.78,metalness:0})},window:{glass:hp({map:K.windowGlass,emissiveMap:K.windowLit,roughness:.1,metalness:.1},{dayIntensity:0,nightIntensity:.35,dayColor:lp,nightColor:lp}),lit:[2.2,1.6,.7,0].map(e=>hp({map:K.windowGlass,emissiveMap:K.windowLit,roughness:.14,metalness:.08},{dayIntensity:0,nightIntensity:e,dayColor:lp,nightColor:lp})),mullion:J({color:q.window.mullion,roughness:.7,metalness:0}),frame:J({color:q.window.frame,roughness:.66,metalness:0})},station:{wall:J({color:q.station.wall,map:K.plaster,roughness:.88,metalness:0}),trim:J({color:q.station.trim,roughness:.6,metalness:0}),canopy:J({color:q.station.canopy,map:K.woodPlinth,roughness:.8,metalness:0}),canopyGlass:J({color:q.station.canopyGlass,roughness:.2,metalness:.05,transparent:!0,opacity:.45}),platform:J({color:q.station.platform,map:K.flagstone,roughness:.9,metalness:0}),platformEdge:J({color:q.station.platformEdge,roughness:.8,metalness:0}),sign:J({color:lp,map:K.signPlate,roughness:.6,metalness:.05}),clockFace:J({color:q.station.signText,roughness:.45,metalness:0}),clockHand:J({color:q.station.signBoard,roughness:.5,metalness:.1}),wood:J({color:q.props.fenceWood,map:K.woodRim,roughness:.78,metalness:0}),lightGlass:hp({color:q.window.cool,roughness:.24,metalness:0},{dayIntensity:.05,nightIntensity:3,dayColor:q.props.lampGlass,nightColor:q.props.lampGlass})},train:{loco:J({color:q.train.loco,roughness:.45,metalness:.35}),locoTrim:J({color:q.train.locoTrim,roughness:.5,metalness:.12}),boiler:J({color:q.train.boiler,roughness:.4,metalness:.5}),smokeBox:J({color:q.train.smokeBox,roughness:.42,metalness:.62}),brass:J({color:q.train.brass,roughness:.28,metalness:.9}),coachA:J({color:q.train.coachA,roughness:.5,metalness:.12}),coachB:J({color:q.train.coachB,roughness:.5,metalness:.12}),coachTrim:J({color:q.train.coachTrim,roughness:.55,metalness:.05}),roof:J({color:q.train.roof,roughness:.6,metalness:.25}),wheel:J({color:q.train.wheel,roughness:.4,metalness:.5}),wheelRim:J({color:q.train.wheelRim,roughness:.3,metalness:.75}),coupler:J({color:q.train.coupler,roughness:.5,metalness:.5}),glass:J({map:K.windowGlass,roughness:.15,metalness:.1}),headlamp:hp({color:q.window.cool,roughness:.25,metalness:.2},{dayIntensity:.05,nightIntensity:2.4,dayColor:q.window.cool,nightColor:q.window.cool}),tailLamp:hp({color:q.station.platformEdge,roughness:.25,metalness:.15},{dayIntensity:.05,nightIntensity:1.6,dayColor:q.station.platformEdge,nightColor:q.props.awningA}),numberPlate:J({color:q.train.brass,roughness:.35,metalness:.7})},nature:{foliage:q.nature.foliage.map(e=>J({color:e,roughness:.82,metalness:0,flatShading:!0})),foliageDry:J({color:q.nature.foliageDry,roughness:.85,metalness:0,flatShading:!0}),trunk:J({color:q.nature.trunk,map:K.plaster,roughness:.9,metalness:0}),trunkDark:J({color:q.nature.trunkDark,map:K.plaster,roughness:.9,metalness:0}),hedge:J({color:q.nature.hedge,map:K.plaster,roughness:.9,metalness:0}),flowers:q.nature.flowers.map(e=>J({color:e,roughness:.75,metalness:0})),hay:J({color:q.nature.hay,map:K.plaster,roughness:.95,metalness:0})},props:{lampPost:J({color:q.props.lampPost,roughness:.5,metalness:.55}),lampGlass:hp({color:q.props.lampGlass,roughness:.25,metalness:0},{dayIntensity:.05,nightIntensity:3,dayColor:q.props.lampGlass,nightColor:q.props.lampGlass}),lampIron:J({color:q.props.lampIron,roughness:.6,metalness:.5}),fenceWood:J({color:q.props.fenceWood,map:K.woodPlinth,roughness:.84,metalness:0}),fenceWhite:J({color:q.props.fenceWhite,roughness:.7,metalness:0}),crate:J({color:q.props.crate,map:K.woodPlinth,roughness:.85,metalness:0}),barrel:J({color:q.props.barrel,map:K.woodPlinth,roughness:.8,metalness:0}),signGreen:J({color:q.props.signGreen,roughness:.68,metalness:.05}),awningA:J({color:lp,map:K.awning,roughness:.86,metalness:0}),awningB:J({color:bf(q.props.cloth,lp,.35),map:K.awning,roughness:.86,metalness:0}),cloth:J({color:q.props.cloth,map:K.plaster,roughness:.9,metalness:0}),metal:J({color:q.rail.steel,roughness:.45,metalness:.65}),planter:J({color:q.props.crate,map:K.plaster,roughness:.85,metalness:0}),notice:J({color:q.props.fenceWhite,map:K.plaster,roughness:.7,metalness:0}),bench:J({color:q.rail.timber,map:K.woodPlinth,roughness:.8,metalness:0})}};Object.defineProperty(Y.train,"lampGlass",{value:J({color:q.window.cool,roughness:.22,metalness:.05}),enumerable:!1,writable:!1,configurable:!1});var yp=Fd.play.minX,bp=Fd.play.maxX,xp=Fd.play.minZ,Sp=Fd.play.maxZ,Cp=bp-yp,wp=Sp-xp,Tp=(yp+bp)/2,Ep=(xp+Sp)/2,Dp=Fd.base.terrainInsetY,Op=2.5,kp=4,Ap=2,jp=208,Mp=152,Np=.02,Pp=.075,Fp=.11,Ip=.12,Lp=.035,Rp=.05,zp=.06,Bp=(e,t,n)=>e<t?t:e>n?n:e;function Vp(e,t,n){let r=Bp((n-e)/(t-e),0,1);return r*r*(3-2*r)}function Hp(e){let t=Nd(e),n=new Float32Array(4096);for(let e=0;e<n.length;e++)n[e]=t();let r=(e,t)=>n[(t%64+64)%64*64+(e%64+64)%64];return function(e,t){let n=Math.floor(e),i=Math.floor(t),a=Vp(0,1,e-n),o=Vp(0,1,t-i),s=r(n,i),c=r(n+1,i),l=r(n,i+1),u=r(n+1,i+1);return(s+(c-s)*a)*(1-o)+(l+(u-l)*a)*o}}function Up(e,t,n,r,i,a,o,s){let c=new yo(n,r);s&&nf(c,n/s,r/s);let l=new U;a&&l.makeRotationX(a),o&&l.multiply(new U().makeRotationY(o)),l.setPosition(i[0],i[1],i[2]),e.add(t,c,l),c.dispose()}function Wp(e){let{width:t,depth:n,slabTopY:r,slabBottomY:i}=Fd.base,a=r-i,o=(r+i)/2,s=Fd.rim.width,c=t/2,l=n/2,u=Math.PI/2,d=(xp+-l)/2,f=(yp+-c)/2;Up(e,Y.wood.top,t,s,[0,r,-d],-u,0,Op),Up(e,Y.wood.top,t,s,[0,r,d],-u,0,Op),Up(e,Y.wood.top,s,wp,[f,r,0],-u,0,Op),Up(e,Y.wood.top,s,wp,[-f,r,0],-u,0,Op),Up(e,Y.wood.frame,t,n,[0,i,0],u,0,Op),Up(e,Y.wood.frame,t,a,[0,o,l],0,0,Op),Up(e,Y.wood.frame,t,a,[0,o,-l],0,Math.PI,Op),Up(e,Y.wood.frame,n,a,[c,o,0],0,u,Op),Up(e,Y.wood.frame,n,a,[-c,o,0],0,-u,Op)}function Gp(){let e=Fd.base.width/2,t=Fd.base.depth/2,n=new ja;n.moveTo(-e,-t),n.lineTo(e,-t),n.lineTo(e,t),n.lineTo(-e,t),n.closePath();let r=new Aa;r.moveTo(yp,xp),r.lineTo(bp,xp),r.lineTo(bp,Sp),r.lineTo(yp,Sp),r.closePath(),n.holes.push(r);let i=new go(n,{depth:Fd.rim.topY-Rp*2,bevelEnabled:!0,bevelThickness:Rp,bevelSize:Rp,bevelSegments:1,curveSegments:1,steps:1});i.rotateX(-Math.PI/2),i.translate(0,Rp,0),nf(i,1/Op,1/Op);let a=new Ai(i,[Y.wood.rimTop,Y.wood.rim]);return a.name=`rim`,a.castShadow=!0,a.receiveShadow=!0,a}function Kp(e){let t=Fd.nameplate,n=t.z+Rp,r=Fd.rim.topY/2,{width:i,height:a}=t,o=new Qi(i,a,zp);o.translate(t.x,r,n+zp/2),e.add(Y.station.sign,o),o.dispose();let s=.06,c=n+zp+.01,l=i/2+s/2,u=a/2+s/2;for(let[n,o,d,f]of[[i+s*2,s,t.x,r+u],[i+s*2,s,t.x,r-u],[s,a+s*2,t.x-l,r],[s,a+s*2,t.x+l,r]]){let t=new Qi(n,o,s);t.translate(d,f,c),e.add(Y.props.metal,t),t.dispose()}}function qp(e){let t=Cp/jp,n=wp/Mp,r=(t,n,r)=>{let i=t.length,a=new Float32Array(i*6),o=new Float32Array(i*4),s=[];for(let e=0;e<i;e++){let{x:n,z:r}=t[e],i=Dp+Ld(n,r);a.set([n,i,r],e*6),a.set([n,0,r],e*6+3),o.set([e,i],e*4),o.set([e,0],e*4+2)}for(let e=0;e<i-1;e++){let t=e*2,n=t+1,r=t+2,i=t+3;s.push(t,r,n,n,r,i)}let c=new Vr;c.setAttribute(`position`,new Er(a,3)),c.setAttribute(`uv`,new Er(o,2)),c.setIndex(s),c.computeVertexNormals(),nf(c,1/r,1/r),e.add(n,c),c.dispose()},i=(e,n)=>{let r=[];for(let i=0;i<=jp;i++){let a=n>0?yp+i*t:bp-i*t;r.push({x:a,z:e})}return r},a=(e,t)=>{let r=[];for(let i=0;i<=Mp;i++){let a=t>0?xp+i*n:Sp-i*n;r.push({x:e,z:a})}return r};r(i(xp,1),Y.rail.stone,Ap),r(i(Sp,-1),Y.rail.stone,Ap),r(a(yp,-1),Y.wood.frame,Op),r(a(bp,1),Y.wood.frame,Op)}function Jp(e){let t=.06,n=[{x:Id.points[0][0],z:Id.points[0][1],inward:1},{x:Id.points[Id.points.length-1][0],z:Id.points[Id.points.length-1][1],inward:-1}];for(let r of n){let n=new Qi(3.4,.7,t);n.translate(r.x,-.7,r.z+r.inward*(t/2)),e.add(Y.rail.stone,n),n.dispose()}}var Yp=(e,t,n)=>Math.max(n,Ld(e,t)+n);function Xp(){let e=new yo(Cp,wp,jp,Mp);e.rotateX(-Math.PI/2),e.translate(Tp,0,Ep),nf(e,Cp/kp,wp/kp);let t=e.attributes.position,n=Hp(2026),r=new Float32Array(t.count*3),i=new W,a=new W(vf.ground.grass),o=new W(vf.ground.grassDry),s=new W(vf.ground.grassDark),c=new W(vf.ground.sand),l=new W(vf.ground.bed),u=new W(vf.ground.pebble),d=new W(0),f=-Id.bedY;for(let e=0;e<t.count;e++){let p=t.getX(e),m=t.getZ(e),h=Ld(p,m);t.setY(e,Dp+h);let g=n(p*.06,m*.06),_=n(p*.22+31.7,m*.22-12.3);i.copy(a).lerp(o,Vp(.35,.85,g)*.75),i.lerp(s,Vp(.45,.95,_)*.5);let v=Math.min(1,Rd(p,m));if(v>.001){let e=Bp(-h/f,0,1);i.lerp(c,v*.85),i.lerp(l,Vp(.05,.55,e));let t=Vp(.62,.8,n(p*.9-5.1,m*.9+7.4))*e;t>0&&i.lerp(u,t*.75),i.lerp(d,.45*e+.08*v)}r[e*3]=i.r,r[e*3+1]=i.g,r[e*3+2]=i.b}e.setAttribute(`color`,new Er(r,3)),e.computeVertexNormals();let p=K.grass.clone();p.repeat.set(1,1),p.offset.set(0,0),p.needsUpdate=!0;let m=new Mo({map:p,vertexColors:!0,roughness:.96,metalness:0});gp(m);let h=new Ai(e,m);return h.name=`grass`,h.castShadow=!1,h.receiveShadow=!0,h}function Zp(e,t){let n=[],r=0;for(let t=0;t<e.length-1;t++){let i=e[t][0],a=e[t][1],o=e[t+1][0],s=e[t+1][1],c=Math.hypot(o-i,s-a);c<1e-6||(n.push({ax:i,az:a,tx:(o-i)/c,tz:(s-a)/c,len:c,s0:r}),r+=c)}let i=Math.max(2,Math.round(r/t)),a=[];for(let e=0;e<=i;e++){let t=e/i*r,o=n[n.length-1];for(let e of n)if(t<=e.s0+e.len){o=e;break}let s=t-o.s0;a.push({x:o.ax+o.tx*s,z:o.az+o.tz*s,s:t})}for(let e=0;e<a.length;e++){let t=a[Math.max(0,e-1)],n=a[Math.min(a.length-1,e+1)],r=n.x-t.x,i=n.z-t.z,o=Math.hypot(r,i)||1;a[e].tx=r/o,a[e].tz=i/o}return{points:a,length:r}}function Qp(){let{points:e,length:t}=Zp(Id.points,.6),n=Id.waterHalf,r=[-n,-n/3,n/3,n],i=e.length,a=new Float32Array(i*r.length*3),o=new Float32Array(i*r.length*2),s=[],c=0,l=0;for(let n=0;n<i;n++){let i=e[n],s=-i.tz,u=i.tx;for(let e=0;e<r.length;e++){let n=r[e];a[c++]=i.x+s*n,a[c++]=Id.waterY,a[c++]=i.z+u*n,o[l++]=e/(r.length-1),o[l++]=i.s/t}}for(let e=0;e<i-1;e++)for(let t=0;t<r.length-1;t++){let n=e*r.length+t,i=n+1,a=n+r.length,o=a+1;s.push(n,i,a,i,o,a)}let u=new Vr;u.setAttribute(`position`,new Er(a,3)),u.setAttribute(`uv`,new Er(o,2)),u.setIndex(s),u.computeVertexNormals();let d=Y.water.surface,f=d.normalMap;f.repeat.set(2,t/2.5),f.needsUpdate=!0;let p=new Ai(u,d);return p.name=`water`,p.castShadow=!1,p.receiveShadow=!1,{object3D:p,update(e){f.offset.y=(f.offset.y-e*.02)%1}}}function $p(e,t,n){let r=n.slice().sort((e,t)=>e.off-t.off),i=r.map(n=>ef(e,t,n.off)),a=Math.min(...i.map(e=>e.length));if(a<2)return null;let o=r.length,s=new Float32Array(a*o*3),c=new Float32Array(a*o*2),l=[],u=0,d=0;for(let e=0;e<a;e++)for(let n=0;n<o;n++){let a=i[n][e],o=r[n].dy;s[u++]=a.x,s[u++]=Yp(a.x,a.z,o),s[u++]=a.z,c[d++]=e*t,c[d++]=r[n].off}for(let e=0;e<a-1;e++)for(let t=0;t<o-1;t++){let n=e*o+t,r=n+1,i=n+o,a=i+1;l.push(n,r,i,r,a,i)}let f=new Vr;return f.setAttribute(`position`,new Er(s,3)),f.setAttribute(`uv`,new Er(c,2)),f.setIndex(l),f.computeVertexNormals(),nf(f,1/Ap,1/Ap),f}function em(e){return e===`asphalt`?Y.road.asphalt:e===`path`?Y.road.path:Y.road.gravel}function tm(e){let t=.7,n=new yo(.09,.55);n.rotateX(-Math.PI/2);let r=new Bt,i=new bn,a=new H,o=new H(1,1,1),s=new U;for(let c of Qd){let l=c.width/2,u=c.sidewalk||0,d=$p(c.name,t,[{off:-l,dy:Np},{off:l,dy:Np}]);if(d&&(e.add(em(c.kind),d),d.dispose()),u>0)for(let n of[1,-1]){let r=-n*l,i=-n*(l+u),a=$p(c.name,t,[{off:r,dy:Pp},{off:i,dy:Pp}]);a&&(e.add(Y.road.sidewalk,a),a.dispose());let o=$p(c.name,t,[{off:i-n*Ip,dy:Dp},{off:i-n*Ip,dy:Fp},{off:i,dy:Fp},{off:i,dy:Pp}]);o&&(e.add(Y.road.curb,o),o.dispose())}if(c.markings)for(let t of ef(c.name,1.4,0))i.set(0,t.angle,0),r.setFromEuler(i),a.set(t.x,Yp(t.x,t.z,Lp),t.z),s.compose(a,r,o),e.add(Y.road.marking,n,s)}n.dispose()}function nm(e){for(let t of tf){let n=new Qi(t.w,.05,t.d);nf(n,t.w/Ap,t.d/Ap),n.translate(t.x,.025,t.z),e.add(t.kind===`gravel`?Y.road.gravel:Y.road.sidewalk,n),n.dispose()}}function rm(){let e=new Rn;e.name=`terrain`;let t=rf(`terrainSolid`),n=rf(`terrainFlat`);Wp(t),Kp(t),qp(t),Jp(t),tm(n),nm(n),e.add(t.build({name:`terrainSolid`,castShadow:!0,receiveShadow:!0})),e.add(n.build({name:`terrainFlat`,castShadow:!1,receiveShadow:!0})),e.add(Gp()),e.add(Xp());let r=Qp();return e.add(r.object3D),{object3D:e,update(e){r.update(e)},lightAnchors:[]}}var im=2.5,am=Bd.ballast.topY,om=Id.bedY-.05,sm=new H(1,1,1),cm=new H,lm=new H,um=new H,dm=new H,fm=new Bt,pm=new bn;function mm(e){let t=0;for(let n=0;n<e.length;n++){let r=e[n],i=e[(n+1)%e.length];t+=r.x*i.y-i.x*r.y}return t*.5}function hm(e,t,n={}){let{samples:r=256,uFrom:i=0,uTo:a=1,closedProfile:o=!1,capStart:s=!1,capEnd:c=!1}=n,l=t.map(e=>Array.isArray(e)?{x:e[0],y:e[1]}:{x:e.x,y:e.y});mm(l)<0&&l.reverse();let u=l.length,d=Math.max(2,Math.round(r)),f=d+1,p=[0];for(let e=1;e<u;e++)p.push(p[e-1]+Math.hypot(l[e].x-l[e-1].x,l[e].y-l[e-1].y));o&&p.push(p[u-1]+Math.hypot(l[0].x-l[u-1].x,l[0].y-l[u-1].y));let m=new Float32Array(f*u*3),h=new Float32Array(f*u*2),g=0;for(let t=0;t<f;t++){let n=((i+(a-i)*(t/d))%1+1)%1;e.getPointAt(n,cm),e.getTangentAt(n,lm),lm.y=0,lm.normalize(),um.set(lm.z,0,-lm.x),t>0&&(g+=cm.distanceTo(dm)),dm.copy(cm);for(let e=0;e<u;e++){let n=t*u+e;m[n*3]=cm.x+um.x*l[e].x,m[n*3+1]=cm.y+l[e].y,m[n*3+2]=cm.z+um.z*l[e].x,h[n*2]=p[e],h[n*2+1]=g}}let _=o?u:u-1,v=[];for(let e=0;e<d;e++)for(let t=0;t<_;t++){let n=(t+1)%u,r=e*u+t,i=e*u+n,a=(e+1)*u+n,o=(e+1)*u+t;v.push(r,i,a,r,a,o)}if(s)for(let e=1;e<u-1;e++)v.push(0,e+1,e);if(c){let e=d*u;for(let t=1;t<u-1;t++)v.push(e,e+t,e+t+1)}let y=new Vr;return y.setAttribute(`position`,new Er(m,3)),y.setAttribute(`uv`,new Er(h,2)),y.setIndex(v),y.computeVertexNormals(),y}function gm(e,t,n,r,i){let a=e.attributes.uv,o=[[r,n],[r,n],[t,r],[t,r],[t,n],[t,n]];for(let e=0;e<6;e++)for(let t=0;t<4;t++){let n=e*4+t;a.setXY(n,a.getX(n)*o[e][0]/i,a.getY(n)*o[e][1]/i)}return a.needsUpdate=!0,e}function _m(e,t,n,r,i,a,o,s,c=0,l=0){let u=new Qi(a,o,s);l>0&&gm(u,a,o,s,l),pm.set(0,c,0);let d=new U().compose(new H(n,r,i),fm.setFromEuler(pm),sm);e.add(t,u,d),u.dispose()}function vm(e,t,n,r,i,a,o,s,c,l=0){let u=i-n,d=a-r,f=Math.hypot(u,d),p=c-s,m=new Qi(o,p,f);l>0&&gm(m,o,p,f,l),pm.set(0,Math.atan2(u,d),0);let h=new U().compose(new H((n+i)/2,s+p/2,(r+a)/2),fm.setFromEuler(pm),sm);e.add(t,m,h),m.dispose()}function ym(e,t,n,r,i,a,o,s,c){let l=i-n,u=a-r,d=new Qi(s,Math.hypot(l,u),c);pm.set(0,0,Math.atan2(-l,u));let f=new U().compose(new H((n+i)/2,(r+a)/2,o),fm.setFromEuler(pm),sm);e.add(t,d,f),d.dispose()}function bm(e,t){let n=t.fixedZ,r=t.halfWidth,i=t.deckTo-t.deckFrom,a=.14,o=am-a,s=Bd.curveY,c=1.45,l=1.4,u=am-.01;for(let i of[t.trussFrom-l/2,t.trussTo+l/2])_m(e,Y.rail.stone,i,(om+u)/2,n,l,u-om,r*2+.3,0,im);_m(e,Y.rail.bridgeDeck,(t.deckFrom+t.deckTo)/2,(am+o)/2,n,i,a,r*2,0,im);for(let r of[-1,1])_m(e,Y.rail.steel,(t.deckFrom+t.deckTo)/2,o-.08,n+r*.62,i,.2,.22);let d=(t.trussTo-t.trussFrom)/4,f=t.trussTo-t.trussFrom;for(let i of[-1,1]){let a=n+i*r;_m(e,Y.rail.truss,(t.trussFrom+t.trussTo)/2,s,a,f,.16,.18),_m(e,Y.rail.truss,(t.trussFrom+t.trussTo)/2,c,a,f,.18,.18);for(let n=0;n<=4;n++)_m(e,Y.rail.truss,t.trussFrom+n*d,(s+c)/2,a,.12,c-s,.14);for(let n=0;n<4;n++){let r=t.trussFrom+n*d,i=r+d;ym(e,Y.rail.truss,r,s,i,c,a,.1,.12),ym(e,Y.rail.truss,r,c,i,s,a,.1,.12)}}for(let i of[1,3])_m(e,Y.rail.truss,t.trussFrom+i*d,c,n,.14,.14,r*2)}function xm(e,t){let n=t.fixedZ,r=1.1,i=t.deckFrom,a=t.deckTo,o=am-1.2,s=am-.3,c=.4,l=new ja;l.moveTo(i,om),l.lineTo(i,am),l.lineTo(a,am),l.lineTo(a,om),l.closePath();for(let e of t.pierXs)l.holes.push(Sm(i+.7,e-c,o,s,om)),l.holes.push(Sm(e+c,a-.7,o,s,om));let u=new go(l,{depth:r*2,bevelEnabled:!1,curveSegments:12});u.translate(0,0,n-r),nf(u,1/im,1/im),e.add(Y.rail.stone,u),u.dispose();for(let t of[-1,1])_m(e,Y.rail.stoneDark,(i+a)/2,am+.215,n+t*1.03,a-i,.45,.14,0,im);for(let[t,r]of[[i,-1],[a,1]])for(let i of[-1,1])vm(e,Y.rail.stone,t,n+i*1,t+r*1.2,n+i*1.4500000000000002,.4,om,am,im)}function Sm(e,t,n,r,i){let a=new Aa,o=(t-e)/2,s=r-n,c=(o*o+s*s)/(2*s),l=(e+t)/2,u=r-c,d=Math.atan2(n-u,e-l),f=Math.atan2(n-u,t-l);a.moveTo(e,i),a.lineTo(e,n);for(let e=1;e<=14;e++){let t=d+(f-d)*(e/14);a.lineTo(l+Math.cos(t)*c,u+Math.sin(t)*c)}return a.lineTo(t,i),a.closePath(),a}function Cm(e,t){let n=t.fixedZ,r=t.halfWidth*2,i=t.deckY,a=.12,o=i-a;_m(e,Y.rail.timber,(t.deckFrom+t.deckTo)/2,(i+o)/2,n,t.deckTo-t.deckFrom,a,r,0,im);for(let i of[t.deckFrom+.7,t.deckTo-.7])_m(e,Y.rail.stone,i,(om+o+.03)/2,n,1.4,o+.03-om,r-.2,0,im);let s=o+.03,c=s-om;for(let t of Yd.piers){_m(e,Y.rail.stone,t,(s+om)/2,n,.52,c,.52,0,im);for(let r of[-1,1])_m(e,Y.rail.stone,t,(s+om)/2,n+r*.26,.36,c,.36,Math.PI/4,im)}let l=Math.max(1,Math.round((t.deckTo-t.deckFrom)/.9));for(let r of[-1,1]){let a=n+r*(t.halfWidth-.08);for(let n=0;n<=l;n++){let r=t.deckFrom+(t.deckTo-t.deckFrom)*n/l;_m(e,Y.rail.timberDark,r,i+.265,a,.09,.55,.09)}_m(e,Y.rail.timberDark,(t.deckFrom+t.deckTo)/2,i+.5,a,t.deckTo-t.deckFrom,.07,.07),_m(e,Y.rail.timberDark,(t.deckFrom+t.deckTo)/2,i+.24,a,t.deckTo-t.deckFrom,.07,.07)}}function wm(){let e=Wd(),t=Gd(),n=rf(`trackSolid`),r=rf(`trackBed`),i=Zd.slice().sort((e,t)=>e.uMin-t.uMin),a=[{x:-Bd.ballast.bottomHalf,y:-Bd.curveY},{x:-Bd.ballast.topHalf,y:Bd.ballast.topY-Bd.curveY},{x:Bd.ballast.topHalf,y:Bd.ballast.topY-Bd.curveY},{x:Bd.ballast.bottomHalf,y:-Bd.curveY}];for(let n=0;n<i.length;n++){let o=i[n].uMax,s=((i[(n+1)%i.length].uMin-o)%1+1)%1,c=hm(e,a,{samples:Math.max(6,Math.round(t*s*4)),uFrom:o,uTo:o+s,closedProfile:!1,capStart:!0,capEnd:!0});nf(c,1/im,1/im),r.add(Y.rail.ballast,c),c.dispose()}let o=Bd.rail.width/2,s=Math.max(64,Math.round(t*6));for(let t of[-1,1]){let n=t*Bd.gauge/2,i=hm(e,[{x:n-o,y:0},{x:n+o,y:0},{x:n+o,y:Bd.rail.height},{x:n-o,y:Bd.rail.height}],{samples:s,closedProfile:!0});nf(i,1/im,1/im),r.add(Y.rail.rail,i),i.dispose()}let c=Math.floor(t/Bd.sleeper.spacing),l=new Hi(new Qi(Bd.sleeper.length,Bd.sleeper.height,Bd.sleeper.width),Y.rail.sleeper,c);l.name=`trackSleepers`;let u=new U,d=Bd.curveY-Bd.sleeper.height/2;for(let t=0;t<c;t++){let n=t/c;e.getPointAt(n,cm),e.getTangentAt(n,lm),lm.y=0,lm.normalize(),pm.set(0,Math.atan2(lm.x,lm.z),0),u.compose(new H(cm.x,d,cm.z),fm.setFromEuler(pm),sm),l.setMatrixAt(t,u)}l.instanceMatrix.needsUpdate=!0,l.castShadow=!0,l.receiveShadow=!0;let f=Xd.find(e=>e.id===`truss-north`),p=Xd.find(e=>e.id===`arch-south`),m=Xd.find(e=>e.id===`beam-crosslane`);bm(n,f),xm(n,p),Cm(n,m);let h=new Rn;return h.name=`track`,h.add(r.build({name:`trackBed`,castShadow:!1,receiveShadow:!0})),h.add(l),h.add(n.build({name:`trackBridges`,castShadow:!0,receiveShadow:!0})),{object3D:h,lightAnchors:[]}}var Tm=new H;function Em(e,t,n,r,i,a){let o=2*Math.PI*i/4,s=Math.max(a-2*i,0),c=Math.PI/4;Tm.copy(t),Tm[r]=0,Tm.normalize();let l=.5*o/(o+s),u=1-Tm.angleTo(e)/c;return Math.sign(Tm[n])===1?u*l:s/(o+s)+l+l*(1-u)}var Dm=class e extends Qi{constructor(e=1,t=1,n=1,r=2,i=.1){let a=r*2+1;if(i=Math.min(e/2,t/2,n/2,i),super(1,1,1,a,a,a),this.type=`RoundedBoxGeometry`,this.parameters={width:e,height:t,depth:n,segments:r,radius:i},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let s=new H,c=new H,l=new H(e,t,n).divideScalar(2).subScalar(i),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,m=new H,h=.5/a;for(let r=0,a=0;r<u.length;r+=3,a+=2)switch(s.fromArray(u,r),c.copy(s),c.x-=Math.sign(c.x)*h,c.y-=Math.sign(c.y)*h,c.z-=Math.sign(c.z)*h,c.normalize(),u[r+0]=l.x*Math.sign(s.x)+c.x*i,u[r+1]=l.y*Math.sign(s.y)+c.y*i,u[r+2]=l.z*Math.sign(s.z)+c.z*i,d[r+0]=c.x,d[r+1]=c.y,d[r+2]=c.z,Math.floor(r/p)){case 0:m.set(1,0,0),f[a+0]=Em(m,c,`z`,`y`,i,n),f[a+1]=1-Em(m,c,`y`,`z`,i,t);break;case 1:m.set(-1,0,0),f[a+0]=1-Em(m,c,`z`,`y`,i,n),f[a+1]=1-Em(m,c,`y`,`z`,i,t);break;case 2:m.set(0,1,0),f[a+0]=1-Em(m,c,`x`,`z`,i,e),f[a+1]=Em(m,c,`z`,`x`,i,n);break;case 3:m.set(0,-1,0),f[a+0]=1-Em(m,c,`x`,`z`,i,e),f[a+1]=1-Em(m,c,`z`,`x`,i,n);break;case 4:m.set(0,0,1),f[a+0]=1-Em(m,c,`x`,`y`,i,e),f[a+1]=1-Em(m,c,`y`,`x`,i,t);break;case 5:m.set(0,0,-1),f[a+0]=Em(m,c,`x`,`y`,i,e),f[a+1]=1-Em(m,c,`y`,`x`,i,t)}}static fromJSON(t){return new e(t.width,t.height,t.depth,t.segments,t.radius)}},X=uf.platform,Om=uf.building,km=uf.canopy,Am=.12,jm=2.6,Mm=2.4,Nm=.95,Pm=.3,Fm=.05,Im=.09,Lm=4,Rm={benchX:[-6.3,-4.2,-1.6],benchZ:8,lampPost:[[-6.3,8.5],[.3,8.5]],planter:[[-7.72,8.82],[1.72,8.05]],bin:[-7.72,8.15],cart:[1.15,8.72],fenceX:1.96,fenceZ:[7.8,8.98],pendantX:[-4.1,-1.9]};function zm(){let e=rf(`stationSolid`),t=rf(`stationGlow`),n=rf(`stationMark`),r=[],i=new bn,a=new Bt,o=new H,s=new H,c=new Qi(1,1,1),l=new $i(.5,.5,1,12);function u(e,t,n,r,c){return i.set(r?r[0]:0,r?r[1]:0,r?r[2]:0),a.setFromEuler(i),o.set(e,t,n),s.set(c?c[0]:1,c?c[1]:1,c?c[2]:1),new U().compose(o,a,s)}function d(e,t,n,r,i,a,o,s,l,d){let f=u(r,i,a,d,[o,s,l]);e.add(t,c,n?n.clone().multiply(f):f)}function f(e,t,n,r,i,a,o,s,c){d(e,t,null,n,r,i,a,o,s,c)}function p(e,t,n,r,i,a,o,s,c){let d=u(r,i,a,c,[o,s,o]);e.add(t,l,n?n.clone().multiply(d):d)}function m(e,t,n,r,i,a,o,s,c){e.add(t,new $i(a,o,s,c||10),u(n,r,i))}function h(e,t,n,r,i,a,o,s,c,l){if(s<a){let e=a;a=s,s=e;let t=o;o=c,c=t}let d=s-a,f=c-o,p=Math.atan2(-f,d),m=new Qi(r,i,Math.hypot(d,f));l&&nf(m,l[0],l[1]),e.add(t,m,u(n,(o+c)/2-i/2*Math.cos(p),(a+s)/2-i/2*Math.sin(p),[p,0,0]))}function g(e,t,n,r){let i=new H().subVectors(n[1],n[0]).cross(new H().subVectors(n[2],n[0])).normalize(),a=new H().subVectors(n[1],n[0]).normalize(),o=new H().crossVectors(i,a).normalize(),s=r||1,c=[],l=[],u=new H;for(let e=1;e<n.length-1;e++){let t=[n[0],n[e],n[e+1]];for(let e of t)c.push(e.x,e.y,e.z),u.subVectors(e,n[0]),l.push(u.dot(a)*s,u.dot(o)*s)}let d=new Vr;d.setAttribute(`position`,new kr(c,3)),d.setAttribute(`uv`,new kr(l,2)),d.computeVertexNormals(),e.add(t,d,null)}function _(e,t,n,r,i){let a=i||6,o=0;for(let i=0;i<=a;i++)for(let s=0;s<=a;s++)o=Math.min(o,Ld(e+(t-e)*i/a,n+(r-n)*s/a));return o}let v=X.xTo-X.xFrom,y=X.zTo-X.zFrom,b=(X.xFrom+X.xTo)/2,x=(X.zFrom+X.zTo)/2,S=Math.min(0,_(X.xFrom,X.xTo,X.zFrom,X.zTo))-.05,C=.03,w=new Dm(v,X.topY-S,y,2,C);nf(w,v/2,y/2),e.add(Y.station.platform,w,u(b,(S+X.topY)/2,x));let T=X.xFrom+C,E=X.xTo-C-T;f(e,Y.station.platformEdge,b,X.topY+.03,X.zTo-C-.2,E,.06,.4),f(n,Y.station.trim,b,X.topY+.008,X.zTo-C-.05,E,.016,.1);for(let[t,r]of[[X.xFrom,X.xFrom+.9],[X.xTo-.9,X.xTo]]){let i=(t+r)/2;for(let a=1;a<=3;a++){let o=X.topY*(1-a/4),s=X.zFrom-a*.3;f(e,Y.rail.stone,i,o/2,s+.15,r-t,o,.3),f(n,Y.station.trim,i,o-.005,s+.05,r-t-.06,.012,.07)}}let D=Om.w,O=Om.z-Om.d/2,k=Math.min(Om.z+Om.d/2,X.zFrom),A=k-O,j=(O+k)/2,M=Om.x,N=Math.min(0,_(M-D/2,M+D/2,O,k)),P=N+Am,F=P+jm,ee=F+Mm;f(e,Y.rail.stone,M,(N+P)/2,j,D+.16,P-N,A+.16);let te=new Qi(D,jm,A);nf(te,D,jm),e.add(Y.station.wall,te,u(M,(P+F)/2,j));let ne=new Qi(D,Mm,A);nf(ne,D,Mm),e.add(Y.station.wall,ne,u(M,(F+ee)/2,j)),f(e,Y.station.trim,M,F,j,D+.1,.08,A+.1);let re=D+Pm*2,ie=A+Pm*2,ae=ee+.1,oe=ae+Nm,se=j-ie/2,I=j+ie/2,ce=M-re/2,le=M+re/2,ue=ce+ie/2,de=le-ie/2;f(e,Y.station.trim,M,ee+.05,j,re,.1,ie),h(e,Y.roof.tiles[0],M,re,.09,se,ae,j,oe,[re,1.8]),h(e,Y.roof.tiles[0],M,re,.09,j,oe,I,ae,[re,1.8]),g(e,Y.roof.tiles[0],[new H(ce,ae,se),new H(ce,ae,I),new H(ue,oe,j)],1),g(e,Y.roof.tiles[0],[new H(le,ae,se),new H(de,oe,j),new H(le,ae,I)],1),f(e,Y.roof.ridge,(ue+de)/2,oe+.03,j,de-ue+.18,.13,.24);let fe=M-1.6,pe=j+.48,me=ae+(I-pe)/(I-j)*Nm;f(e,Y.wall.brick,fe,(ee+me+.33)/2,pe,.44,me+.33-ee,.44),f(e,Y.rail.stone,fe,me+.375,pe,.54,.09,.54),p(e,Y.rail.stoneDark,null,fe-.11,me+.5,pe,.13,.18),p(e,Y.rail.stoneDark,null,fe+.11,me+.5,pe,.13,.18);let he=u(M,0,O,[0,Math.PI,0]),ge=u(M,0,k,[0,0,0]),_e=u(M-D/2,0,j,[0,-Math.PI/2,0]),ve=u(M+D/2,0,j,[0,Math.PI/2,0]),ye=Nd(20260926),be=()=>ye()<.5?Y.window.lit[Math.floor(ye()*4)]:Y.window.glass;function xe(n,r,i,a,o,s){d(t,s,n,r,i,.012,a,o,.03),d(e,Y.window.mullion,n,r,i,.032,.045,o,.035),d(e,Y.window.mullion,n,r,i,.032,a,.045,.035),d(e,Y.window.frame,n,r-a/2-.035,i,.024,.09,o+.14,.055),d(e,Y.window.frame,n,r+a/2+.035,i,.024,.09,o+.14,.055),d(e,Y.window.frame,n,r,i+o/2+.035,.024,a+.16,.09,.055),d(e,Y.window.frame,n,r,i-o/2-.035,.024,a+.16,.09,.055),d(e,Y.station.trim,n,r,i-o/2-.11,.05,a+.34,.07,.2)}for(let e of[-2.2,2.2])xe(he,e,1.55,.95,1.25,be()),xe(he,e,3.85,.95,1.15,be());for(let e of[_e,ve])for(let t of[-.6,.6])xe(e,t,1.55,.8,1.15,be()),xe(e,t,3.85,.8,1.05,be());P+2.2,d(e,Y.wood.frameDark,he,-.34,P+1.1,.035,.66,2.2,.06),d(e,Y.wood.frameDark,he,.34,P+1.1,.035,.66,2.2,.06),d(e,Y.train.brass,he,-.55,P+1.05,.075,.05,.22,.05),d(e,Y.train.brass,he,.55,P+1.05,.075,.05,.22,.05),d(e,Y.station.trim,he,-.74,P+1.16,.05,.13,2.32,.14),d(e,Y.station.trim,he,.74,P+1.16,.05,.13,2.32,.14),d(e,Y.station.trim,he,0,P+2.34,.05,1.62,.16,.14),d(e,Y.station.sign,he,0,P+2.32,.055,2.1,.22,.07),h(e,Y.station.canopy,M,2.2,.07,O-.36,P+2.8,O,P+2.89,[2.2,.36]);for(let t of[-.9,.9])d(e,Y.props.metal,he,t,P+2.62,.11,.07,.28,.24);for(let n of[-1.15,1.15])d(e,Y.props.metal,he,n,2.24,.035,.12,.3,.07),d(e,Y.props.metal,he,n,2.26,.11,.05,.05,.16),d(e,Y.props.metal,he,n,2.2,.17,.26,.04,.26),m(t,Y.station.lightGlass,M-n,2.1,O-.17,.09,.05,.15,10);p(e,Y.station.trim,he,0,4.35,.014,.74,.05,[Math.PI/2,0,0]),p(t,Y.station.clockFace,he,0,4.35,.038,.62,.045,[Math.PI/2,0,0]);let Se=Math.PI/6*(17+40/60),Ce=Math.PI/30*40,we=(t,n,r)=>d(e,Y.station.clockHand,he,Math.sin(n)*t*.5,4.35+Math.cos(n)*t*.5,.075,r,t,.022,[0,0,-n]);we(.22,Se,.05),we(.3,Ce,.035),p(e,Y.station.clockHand,he,0,4.35,.075,.07,.03,[Math.PI/2,0,0]),d(e,Y.wood.frame,ge,0,X.topY+.95,.03,1.1,1.9,.06),d(e,Y.station.trim,ge,-.62,X.topY+1,.045,.12,2.12,.12),d(e,Y.station.trim,ge,.62,X.topY+1,.045,.12,2.12,.12),d(e,Y.station.trim,ge,0,X.topY+1.96,.045,1.34,.14,.12),d(e,Y.station.trim,ge,0,X.topY+.02,.06,1.3,.04,.14),d(e,Y.train.brass,ge,.42,X.topY+.95,.075,.05,.2,.05),d(e,Y.station.sign,ge,0,2.9,.05,2.6,.24,.07);for(let t=1;t<=3;t++){let r=t*.04,i=O-.12*(4-t);f(e,Y.rail.stone,M,r/2,i+.06,1.7,r,.12),f(n,Y.station.trim,M,r-.005,i+.045,1.62,.012,.07)}let Te=km.xTo-km.xFrom,Ee=(km.xFrom+km.xTo)/2,De=km.topY,Oe=De-Im,ke=e=>De-(e-km.zFrom)/(km.zTo-km.zFrom)*Im,Ae=km.zFrom+.3,je=ke(Ae)-Fm;h(e,Y.station.canopy,Ee,Te,Fm,km.zFrom,De,km.zTo,Oe,[Te,km.zTo-km.zFrom]),f(e,Y.station.trim,Ee,Oe-.035,km.zTo-.03,Te-.1,.11,.06);let L=(km.zFrom+km.zTo)/2,Me=L-.1,Ne=L+.14;h(t,Y.station.canopyGlass,Ee,Te-.5,.035,Me,ke(Me)+.022,Ne,ke(Ne)+.022);for(let t of[Me-.035,Ne+.035])f(e,Y.wood.frameDark,Ee,ke(t)+.012,t,Te-.4,.06,.08);let Pe=[];for(let e=0;e<=Lm;e++)Pe.push(km.xFrom+Te/Lm*e);for(let t of Pe)m(e,Y.station.wood,t,(X.topY+je)/2,Ae,.065,.075,je-X.topY,10),p(e,Y.props.metal,null,t,X.topY+.06,Ae,.24,.12),p(e,Y.props.metal,null,t,je-.05,Ae,.2,.1),f(e,Y.props.metal,t,je+.005,Ae,.26,.03,.26);for(let t=0;t<Lm;t++)f(e,Y.props.metal,(Pe[t]+Pe[t+1])/2,X.topY+1.95,Ae,Te/Lm-.16,.08,.07);for(let n of Rm.pendantX)p(e,Y.props.metal,null,n,2.99,Ae,.03,.09),p(e,Y.props.metal,null,n,je-.015,Ae,.3,.03),m(t,Y.station.lightGlass,n,2.97,Ae,.13,.055,.11,12);for(let t of Rm.benchX){f(e,Y.props.bench,t,X.topY+.45,Rm.benchZ,1.2,.07,.42),f(e,Y.props.bench,t,X.topY+.72,Rm.benchZ-.17,1.2,.42,.07,[-.16,0,0]);for(let n of[-.45,.45])f(e,Y.props.metal,t+n,X.topY+.22,Rm.benchZ,.06,.44,.38)}for(let[n,r]of Rm.lampPost)p(e,Y.props.lampPost,null,n,X.topY+.06,r,.24,.12),p(e,Y.props.lampPost,null,n,X.topY+1.05,r,.085,1.86),p(e,Y.props.lampPost,null,n,X.topY+1.98,r,.13,.06),m(t,Y.props.lampGlass,n,2.6,r,.085,.13,.28,8),m(e,Y.props.lampPost,n,2.78,r,.02,.15,.1,8),p(e,Y.props.lampPost,null,n,2.86,r,.06,.08);for(let[n,r]of Rm.planter){f(e,Y.props.planter,n,X.topY+.17,r,.42,.34,.42),f(e,Y.props.planter,n,X.topY+.345,r,.48,.04,.48),f(e,Y.ground.dirt,n,X.topY+.34,r,.36,.03,.36);for(let e=0;e<5;e++){let i=e*2.399,a=.05+.035*e;m(t,Y.nature.flowers[e%3],n+Math.cos(i)*a,X.topY+.42,r+Math.sin(i)*a,.02,.075,.16,6)}}p(e,Y.props.metal,null,Rm.bin[0],X.topY+.25,Rm.bin[1],.32,.5),p(e,Y.rail.steelDark,null,Rm.bin[0],X.topY+.52,Rm.bin[1],.36,.05);{let t=u(Rm.cart[0],0,Rm.cart[1],[0,-.06,0]);d(e,Y.props.metal,t,0,X.topY+.14,0,1,.05,.48),d(e,Y.wood.top,t,0,X.topY+.21,0,1.1,.07,.55);for(let n of[-.42,.42])for(let r of[-.17,.17])p(e,Y.rail.steelDark,t,n,X.topY+.06,r,.1,.05,[Math.PI/2,0,0]);d(e,Y.props.metal,t,-.53,X.topY+.46,0,.05,.5,.05),d(e,Y.props.metal,t,-.53,X.topY+.7,0,.05,.05,.42)}{let[t,n]=Rm.fenceZ,r=n-t,i=(t+n)/2,a=Math.round(r/.17);for(let n of[0,r])f(e,Y.props.fenceWhite,Rm.fenceX,X.topY+.55,t+n,.09,1.1,.09);for(let t of[.28,.95])f(e,Y.props.fenceWhite,Rm.fenceX,X.topY+t,i,.05,.07,r);for(let n=0;n<=a;n++)f(e,Y.props.fenceWhite,Rm.fenceX,X.topY+.55,t+r/a*n,.035,1.1,.05)}let R=(e,t,n,i)=>r.push({position:new H(e,t,n),color:16763256,intensity:5.5,distance:11,decay:2,priority:i});for(let e of Rm.pendantX)R(e,2.97,Ae,9);R(M+1.15,2.1,O-.17,6),R(M-1.15,2.1,O-.17,6);for(let[e,t]of Rm.lampPost)R(e,2.6,t,6);let Fe=new Rn;return Fe.name=`station`,Fe.add(e.build({name:`stationSolid`})),Fe.add(t.build({name:`stationGlow`,castShadow:!1,receiveShadow:!0})),Fe.add(n.build({name:`stationMark`,castShadow:!1,receiveShadow:!0})),{object3D:Fe,lightAnchors:r}}var Bm=.07,Vm=.68,Hm=.17,Um=.5,Wm=1.35,Gm=.08,Km=2.6;function qm(e){let t=2166136261;for(let n=0;n<e.length;n++)t=Math.imul(t^e.charCodeAt(n),16777619)>>>0;return t>>>0}var Jm=(e,t,n)=>e<t?t:e>n?n:e,Ym={box:new Qi(1,1,1),plane:new yo(1,1),cyl8:new $i(1,1,1,8),cyl12:new $i(1,1,1,12),cyl16:new $i(1,1,1,16),halfCyl:new $i(1,1,1,12,1,!0,0,Math.PI),cone8:new ea(1,1,8),cone12:new ea(1,1,12),halfCone:new ea(1,1,12,1,!0,0,Math.PI),dome:new bo(1,12,5,0,Math.PI*2,0,Math.PI/2),ball:new bo(1,8,6),ring:new xo(1,.05,5,16),arch:new xo(1,.05,5,12,Math.PI)};function Xm(e){return e===Fh||e===Y.road.marking||Y.window.lit.indexOf(e)!==-1}function Zm(e,t,n=null){let r=new U,i=new U,a=new Bt,o=new bn,s=new H,c=new H;return{base:t,bucket:e,flat:n,put(l,u,d=0,f=0,p=0,m=1,h=1,g=1,_=0,v=0,y=0){o.set(_,v,y),a.setFromEuler(o),r.compose(s.set(d,f,p),a,c.set(m,h,g)),i.multiplyMatrices(t,r),(n&&Xm(l)?n:e).add(l,u,i)},sub(r=0,i=0,a=0,o=0){let s=new U().makeRotationY(o).setPosition(r,i,a);return Zm(e,new U().multiplyMatrices(t,s),n)}}}function Z(e,t,n,r,i,a,o,s){e.put(t,Ym.box,n,r,i,a,o,s)}function Qm(e,t,n,r,i,a,o,s,c,l,u){e.put(t,Ym.box,n,r,i,a,o,s,c,l,u)}function $m(e,t,n,r,i,a,o,s=12){let c=s>=16?Ym.cyl16:s>=12?Ym.cyl12:Ym.cyl8;e.put(t,c,n,r,i,a,o,a)}function eh(e,t,n,r,i,a,o,s,c=2.4){let l=Math.max(1,Math.round(a/c)),u=Math.max(1,Math.round(s/c)),d=a/l,f=s/u;for(let c=0;c<l;c++)for(let l=0;l<u;l++)Z(e,t,n-a/2+d*(c+.5),r,i-s/2+f*(l+.5),d,o,f)}function th(e,t){let n=[],r=[],i=[],a=new H(t[0],t[1],t[2]),o=new H,s=new H,c=new H,l=new H,u=new H,d=new H,f=(e,t,a,o)=>{n.push(e.x,e.y,e.z),r.push(t,a,o),Math.abs(o)>=Math.abs(t)&&Math.abs(o)>=Math.abs(a)?i.push(e.x/Km,e.y/Km):Math.abs(t)>=Math.abs(a)?i.push(e.z/Km,e.y/Km):i.push(e.x/Km,e.z/Km)};for(let t of e){let e=t[0];for(let n=1;n<t.length-1;n++){if(o.fromArray(e),s.fromArray(t[n]),c.fromArray(t[n+1]),l.subVectors(s,o).cross(d.subVectors(c,o)),l.lengthSq()<1e-12)continue;l.normalize(),u.copy(o).add(s).add(c).multiplyScalar(1/3);let r=d.subVectors(u,a).dot(l)>=0,i=r?1:-1,p=l.x*i,m=l.y*i,h=l.z*i;r?(f(o,p,m,h),f(s,p,m,h),f(c,p,m,h)):(f(o,p,m,h),f(c,p,m,h),f(s,p,m,h))}}let p=new Vr;return p.setAttribute(`position`,new kr(n,3)),p.setAttribute(`normal`,new kr(r,3)),p.setAttribute(`uv`,new kr(i,2)),p}function nh(e,t){let n=new ja;n.moveTo(e[0][0],e[0][1]);for(let t=1;t<e.length;t++)n.lineTo(e[t][0],e[t][1]);n.closePath();let r=new go(n,{depth:t,bevelEnabled:!1,steps:1,curveSegments:1});return r.translate(0,0,-t/2),r}var rh=null;function ih(){if(rh)return rh;let e=Wd(),t=new H,n=[];for(let r=0;r<=240;r++)e.getPointAt(r/240,t),n.push([t.x,t.z]);return rh=n,n}var ah=new H;function oh(e,t,n){return ah.set(t,0,n).applyMatrix4(e),Pd(ih(),ah.x,ah.z)}function sh(e,t,n,r,i){let a=1/0;for(let o=0;o<4;o++){let s=o===0||o===3?-1:1,c=o<2?-1:1,l=[[t+s*r,n+c*i],[t+s*r,n],[t,n+c*i]];for(let[t,n]of l){let r=oh(e,t,n);r<a&&(a=r)}}return a}function ch(e){let t=e.w/2,n=e.d/2,r=new U().makeRotationY(e.rotY);r.setPosition(e.x,0,e.z);let i=1.4300000000000002,a=[[1,0],[-1,0],[0,1],[0,-1],[.7071,.7071],[-.7071,.7071],[.7071,-.7071],[-.7071,-.7071]],o={s:1,cx:0,cz:0,d:sh(r,0,0,t,n)},s=o.d>=i;if(!s)for(let e of[1,.94,.88,.82,.76,.7,.64,.58,.52]){let c=t*e,l=n*e,u=t-c,d=n-l,f=0,p=0,m=sh(r,0,0,c,l),h=Math.max(u,d,.08);for(let e=0;e<26;e++){let e=!1;for(let[t,n]of a){let i=Jm(f+t*h,-u,u),a=Jm(p+n*h,-d,d),o=sh(r,i,a,c,l);if(o>m+1e-4){f=i,p=a,m=o,e=!0;break}}e||(h*=.5)}if(m>o.d&&(o={s:e,cx:f,cz:p,d:m}),m>=i){o={s:e,cx:f,cz:p,d:m},s=!0;break}}return{base:r,plot:e,hw:t*o.s,hd:n*o.s,cx:o.cx,cz:o.cz,scale:o.s,minDist:o.d,ok:s}}function lh(e,t=Um){let{base:n,hw:r,hd:i,cx:a,cz:o}=e,s=t,c=t,l=t,u=t;for(let e=0;e<3;e++){let e=a-r-s,d=a+r+c,f=o-i-l,p=o+i+u,m=[oh(n,e,f)-Wm-Gm,oh(n,d,f)-Wm-Gm,oh(n,d,p)-Wm-Gm,oh(n,e,p)-Wm-Gm],h=[s,c,l,u];for(let[e,n,r]of[[0,0,2],[1,1,2],[2,1,3],[3,0,3]]){let i=Jm(m[e],0,t);h[n]=Math.min(h[n],i),h[r]=Math.min(h[r],i)}s=h[0],c=h[1],l=h[2],u=h[3]}return{left:s,right:c,back:l,front:u}}function uh(e,t,n=Um){let r=n;for(let[n,i]of t){let t=oh(e.base,n,i)-Wm-Gm;t<r&&(r=t)}return Jm(r,0,n)}function dh(e,t,n=.03){let{base:r,hw:i,hd:a,cx:o,cz:s}=t,c=0;for(let e=0;e<4;e++){let t=e===0||e===3?-1:1,n=e<2?-1:1;ah.set(o+t*i,0,s+n*a).applyMatrix4(r),c=Math.min(c,Ld(ah.x,ah.z))}let l=Bm-(c-.35);Z(e,Y.rail.stone,o,Bm-l/2,s,2*i+n*2,l,2*a+n*2)}function fh(e,t,n,r,i,a=0){let o=.055+a,s=Jm(i.front,0,o),c=Jm(i.back,0,o),l=Jm(i.left,0,o),u=Jm(i.right,0,o);s>.012&&Z(e,Y.wall.trim,0,r,n+s/2,2*t+l+u,.06,s),c>.012&&Z(e,Y.wall.trim,0,r,-n-c/2,2*t+l+u,.06,c),l>.012&&Z(e,Y.wall.trim,-t-l/2,r,0,l,.06,2*n+c+s),u>.012&&Z(e,Y.wall.trim,t+u/2,r,0,u,.06,2*n+c+s)}function ph(e,t,n,r,i,a,o=.04,s={}){let c=Jm(o,0,.035),l=.032,u=c>.008;e.put(t,Ym.plane,n,r,Math.min(.006,Math.max(.002,o)),i,a,1);let d=(t,n,r,i)=>{u?Z(e,Y.window.frame,t,n,c/2,r,i,c):e.put(Y.window.frame,Ym.plane,t,n,.006,r,i,1)};d(n-i/2-l/2,r,l,a+l*2),d(n+i/2+l/2,r,l,a+l*2),d(n,r+a/2+l/2,i+l*2,l),d(n,r-a/2-l/2,i+l*2,l),s.mullion&&(u?Z(e,Y.window.mullion,n,r,Math.min(.012,c/2),l*.6,a,.012):e.put(Y.window.mullion,Ym.plane,n,r,.007,l*.6,a,1));let f=Jm(o,0,.09);f>.012&&Z(e,Y.window.frame,n,r-a/2-l-.02,f/2,i+.12,.04,f)}function mh(e,t,n,r,i,a,o=.06,s={}){e.put(Y.window.lit[3],Ym.plane,n,r,.004,i-.04,a-.04,1),Z(e,t,n,r,.022,i,a,.045);let c=Jm(o,0,.07);if(Z(e,Y.wall.trim,n,r+a/2+.035,c/2,i+.12,.07,Math.max(.02,c)),Z(e,Y.wall.trim,n-i/2-.035,r,c/2,.07,a,Math.max(.02,c)),Z(e,Y.wall.trim,n+i/2+.035,r,c/2,.07,a,Math.max(.02,c)),!s.noStep){let t=Jm(o,0,.16);t>.03&&Z(e,Y.rail.stone,n,-.010000000000000009,t/2,i+.16,.07,t);let r=Jm(o-t-.02,0,.15);s.steps>1&&r>.03&&Z(e,Y.rail.stone,n,-.03,t+r/2,i+.26,.07,r)}}function hh(e,t,n,r,i){let a=i-r;Z(e,Y.wall.brick,t,r+a/2,n,.24,a,.24),Z(e,Y.rail.stone,t,i+.025,n,.31,.05,.31),Z(e,Y.rail.steelDark,t,i+.055,n,.12,.05,.12)}function gh(e,t,n,r,i=Y.wall.timber){let a=.055,o=Math.max(1,Math.round((r-n)/Vm));for(let s=0;s<=o;s++)Z(e,i,0,n+(r-n)*s/o,a/2,t*2,a,a*1.2);let s=Math.max(2,Math.round(t*2/.72));for(let o=0;o<=s;o++)Z(e,i,-t+2*t*o/s,(n+r)/2,a/2,a,r-n,a*1.2);let c=(r-n)/o;for(let r of[-1,1])Qm(e,i,r*(t-c*.34),n+c*.5,a/2,a,c*.92,a,0,0,r*.72)}function _h(e,t,n,r,i,a=.4){let o=Math.min(.3,a);Z(e,Y.props.metal,t,n,o/2,.05,.05,o),Z(e,Y.props.metal,t,n-.05,o*.92,.03,.1,.03),Z(e,Y.props.metal,t+.05,n-.11,o*.92,.03,.1,.03),Z(e,Y.props.signGreen,t+.03,n-i/2-.2,o*.9,r,i,.035)}function vh(e,t){let{mat:n,hw:r,hd:i,y:a,eave:o,height:s}=t,c=t.ridge!==`z`,l=t.shape||`gable`,u=c?i:r,d=c?r:i,f=c?o.back:o.left,p=c?o.front:o.right,m=c?o.left:o.back,h=c?o.right:o.front,g=-(u+f),_=u+p,v=(g+_)/2,y;if(l===`shed`)y=[[g,0],[_,s],[_,0]];else if(l===`gambrel`){let e=.72;y=[[g,0],[g*e,s*.44],[v-.14,s],[v+.14,s],[_*e,s*.44],[_,0]]}else y=[[g,0],[v,s],[_,0]];let b=2*d+m+h,x=nh(y,b);return c?(x.translate(0,0,(m-h)/2),e.put(n,x,0,a,0,1,1,1,0,-Math.PI/2,0)):(x.translate(0,0,(h-m)/2),e.put(n,x,0,a,0,1,1,1,0,0,0)),{apex:v,height:s}}function yh(e,t,n,r,i,a,o){let s=-(n+a.left),c=n+a.right,l=-(r+a.back),u=r+a.front,d=Math.max(.4,c-s-.55*Math.min(u-l,c-s)),f=(s+c)/2,p=[f-d/2,o,0],m=[f+d/2,o,0],h=[s,0,l],g=[c,0,l],_=[c,0,u],v=[s,0,u],y=th([[h,g,_,v],[h,g,m,p],[_,v,p,m],[v,h,p],[g,_,m]],[f,o*.25,0]);e.put(t,y,0,i,0)}function bh(e){return Jm(Math.round(e/.82),2,4)}function xh(e,t,n){let r=[];if(e===1)return[0];let i=Math.min(t*2-n*2,(e-1)*.95),a=e>1?i/(e-1):0;for(let t=0;t<e;t++)r.push(-i/2+a*t);return r}function Sh(e){let t=e();return t<.2?0:t<.4?1:t<.55?2:3}function Ch(e,t,n){let{hw:r,hd:i}=t,a=n.floors*Vm,o=Bm+a;eh(e,n.material,0,Bm+a/2,0,r*2,a,i*2),Z(e,Y.rail.stoneDark,0,.115,0,r*2+.05,.09,i*2+.05),fh(e,r,i,o,n.lim,n.corniceExtra||0);let s={front:Math.min(n.overhang,n.lim.front),back:Math.min(n.overhang,n.lim.back),left:Math.min(n.overhang,n.lim.left),right:Math.min(n.overhang,n.lim.right)},c=n.roofHeight,l=n.ridge!==`z`;if(n.roof===`hip`){l?yh(e,n.roofMat,r,i,o,s,c):yh(e.sub(0,0,0,Math.PI/2),n.roofMat,i,r,o,{front:s.left,back:s.right,left:s.back,right:s.front},c);let t=(l?r:i)*2+(l?s.left+s.right:s.back+s.front),a=Math.max(.4,t-.55*Math.min(i*2+s.back+s.front,t));l?Z(e,Y.roof.ridge,0,o+c+.03,0,a,.07,.11):Z(e,Y.roof.ridge,0,o+c+.03,0,.11,.07,a)}else if(vh(e,{mat:n.roofMat,hw:r,hd:i,y:o,eave:s,height:c,ridge:n.ridge,shape:n.roof}),n.roof!==`shed`){let t=(l?r:i)*2;l?Z(e,Y.roof.ridge,0,o+c+.03,0,t,.07,.11):Z(e,Y.roof.ridge,0,o+c+.03,0,.11,.07,t)}return{wallTop:o,H:a}}function wh(e,t,n,r,i){let a=Math.min(Vm*.84,.58);mh(e,Y.wood.frameDark,0,n+a/2,.36,a,r,{steps:2});for(let a of[-1,1]){let o=t-.24-.26,s=Jm(Math.round(o/.6),0,2);if(s<=0)continue;let c=Math.max(0,o-.42);for(let t=0;t<s;t++){let o=s===1?.5:t/(s-1);ph(e,Y.window.lit[Sh(i)],a*(.47+o*c),n+.36,.42,.4,r,{mullion:!0})}}}function Th(e,t,n,r,i,a,o=!1){let s=xh(a===void 0?bh(t*2):a,t,.28);for(let t of s)ph(e,Y.window.lit[Sh(i)],t,n,o?.5:.42,o?.44:.4,r,{mullion:o})}function Eh(e,t,n,r){let{hw:i,hd:a}=t,o=lh(t),s=Math.max(1,n.floors),c=s*Vm,l=Bm+c,u=n.roof===`hip`,d=n.roof===`gambrel`,f=r()<.42?`z`:`x`,p=d?Math.min(1.18,(a*2+o.front+o.back)*.52):u?Math.min(.95,(a*2+o.front+o.back)*.42):Math.min(1,(a*2+o.front+o.back)*.46);Ch(e,t,{material:Y.wall.plaster[n.hue],roofMat:Y.roof.tiles[n.hue%4],roof:u?`hip`:d?`gambrel`:`gable`,roofHeight:p,floors:s,overhang:Hm,lim:o,ridge:f});for(let t of[-1,1])for(let n of[-1,1])Z(e,Y.wall.trim,t*(i-.035),Bm+c/2,n*(a-.035),.075,c,.075);let m=e.sub(0,0,a,0),h=e.sub(0,0,-a,Math.PI),g=e.sub(-i,0,0,-Math.PI/2),_=e.sub(i,0,0,Math.PI/2),v=Math.min(.05,o.front),y=Math.min(.05,o.back),b=Math.min(.05,o.left),x=Math.min(.05,o.right);wh(m,i,Bm,v,r);for(let e=1;e<s;e++)Th(m,i,Bm+e*Vm+.36,v,r);for(let e=0;e<s;e++)Th(h,i,Bm+e*Vm+.36,y,r,a>1.2?3:2);if(a>1.15)for(let e=0;e<s;e++){let t=Bm+e*Vm+.36;ph(g,Y.window.lit[Sh(r)],0,t,.4,.4,b),ph(_,Y.window.lit[Sh(r)],0,t,.4,.4,x)}hh(e,u||f===`x`?(r()<.5?-1:1)*i*.45:0,f===`x`?(r()<.5?-1:1)*a*.35:0,Bm+c*.6,l+p+.22);let S=r(),C=uh(e,[[-i*.6,a+.5],[i*.6,a+.5]]);if(S<.38&&C>.24){let t=Math.min(.42,C);Z(e,Y.rail.stone,0,.10500000000000001,a+t/2,i*1.3,.07,t),Z(e,Y.rail.timber,0,1.25,a+t/2,i*1.3,.06,t);for(let n of[-1,1])Z(e,Y.wall.trim,i*.6*n,.38,a+t-.06,.07,.56,.07);Z(e,Y.rail.timber,0,1.5899999999999999,a+t/2,i*1.3,.5,.04)}else if(S<.66&&s>=2&&o.front>.08){let t=Math.min(.3,o.front);Z(e,Y.rail.timber,0,.72,a+t/2,i*1.5,.06,t),Z(e,Y.wall.trim,0,.95,a+t-.02,i*1.5,.05,.04);for(let n=0;n<=6;n++)Z(e,Y.wall.trim,-i*.75+i*1.5*n/6,.84,a+t-.02,.035,.28,.035)}}function Dh(e,t,n,r){let{hw:i,hd:a}=t,o=lh(t),s=Math.max(2,n.floors),c=s*Vm,l=Bm+c,u=Math.min(1,(a*2+o.front+o.back)*.46);Ch(e,t,{material:Y.wall.plaster[n.hue],roofMat:Y.roof.tiles[n.hue%4],roof:n.roof===`hip`?`hip`:`gable`,roofHeight:u,floors:s,overhang:Hm,lim:o,ridge:`x`});let d=e.sub(0,0,a,0),f=e.sub(0,0,-a,Math.PI),p=Math.min(.05,o.front),m=Math.min(.05,o.back),h=i*2-.6,g=.44,_=.51,v=Math.max(2,Math.round(h/.62)),y=h/v;for(let e=0;e<v;e++){let t=-h/2+y*(e+.5);d.put(e===0?Y.window.lit[1]:Y.window.lit[2],Ym.plane,t,_,.008,y-.07,g,1),Z(d,Y.wall.shop,t-y/2+.02,_,.03,.05,.54,.06)}Z(d,Y.wall.shop,0,.79,.045,h+.14,.12,.09),Z(d,Y.wall.shop,0,_-g/2-.05,.045,h+.14,.1,.09),mh(d,Y.wall.shop,i*.55,.37,.36,.56,p,{steps:1});let b=uh(e,[[-i*.9,a+.5],[i*.9,a+.5]]);if(b>.18){let e=Math.min(.46,b),t=r()<.5?Y.props.awningA:Y.props.awningB;Qm(d,t,0,.63,e/2,i*1.86,.03,e,.3,0,0),Z(d,t,0,.51,e-.02,i*1.86,.1,.04);for(let t of[-1,1])Z(d,Y.props.metal,t*i*.86,.45,e/2,.03,.03,e*1.05)}_h(d,-i*.72,.97,.34,.26,Math.min(.4,uh(e,[[-i*1.1,a+.45]]))),Th(d,i,.75+.36,p,r,3);for(let e=0;e<s;e++)Th(f,i,Bm+e*Vm+.36,m,r,2);if(a>1.15)for(let t=0;t<s;t++){let n=Bm+t*Vm+.36;ph(e.sub(-i,0,0,-Math.PI/2),Y.window.lit[Sh(r)],0,n,.38,.38,Math.min(.04,o.left)),ph(e.sub(i,0,0,Math.PI/2),Y.window.lit[Sh(r)],0,n,.38,.38,Math.min(.04,o.right))}hh(e,i*.5,-a*.3,Bm+c*.6,l+u+.22)}function Oh(e,t,n,r){let{hw:i,hd:a}=t,o=lh(t),s=Math.max(2,n.floors),c=s*Vm,l=Bm+c,u=Math.min(1.05,(a*2+o.front+o.back)*.48);Ch(e,t,{material:Y.wall.plaster[n.hue],roofMat:Y.roof.tiles[1],roof:`gable`,roofHeight:u,floors:s,overhang:.3,lim:o,ridge:`x`,corniceExtra:.02});let d=e.sub(0,0,a,0),f=e.sub(0,0,-a,Math.PI),p=e.sub(-i,0,0,-Math.PI/2),m=e.sub(i,0,0,Math.PI/2),h=Math.min(.06,o.front),g=Math.min(.05,o.back),_=Math.min(.05,o.left),v=Math.min(.05,o.right);mh(d,Y.wood.frameDark,0,.38,.4,.56,h,{steps:3});for(let e of[-1,1])ph(d,Y.window.lit[e<0?0:1],i*.58*e,.41000000000000003,.42,.4,h,{mullion:!0});gh(d,i,.75,l,Y.wall.timber),Th(d,i,1.1099999999999999,h,r,4);for(let e=0;e<s;e++){let t=Bm+e*Vm+.34;ph(f,Y.window.lit[Sh(r)],-i*.45,t,.4,.4,g),ph(f,Y.window.lit[Sh(r)],i*.45,t,.4,.4,g),ph(p,Y.window.lit[Sh(r)],0,t,.4,.4,_),ph(m,Y.window.lit[Sh(r)],0,t,.4,.4,v)}let y=Jm(h,0,.12);if(y>.04)for(let e of xh(4,i,.28))Z(d,Y.props.planter,e,.89,y/2,.42,.1,y),Z(d,Y.nature.flowers[0],e,.95,y/2,.34,.06,y*.8);Z(d,Y.wall.timber,0,.09000000000000001,.02,i*2,.09,.05),_h(d,i*.72,1.31,.46,.34,Math.min(.42,uh(e,[[i*1.2,a+.45]]))),hh(e,-i*.45,a*.28,Bm+c*.6,l+u+.24)}function kh(e,t,n,r){let{hw:i,hd:a}=t,o=lh(t),s=2.67;eh(e,Y.wall.stone,0,1.37,0,i*2,2.6,a*2),Z(e,Y.rail.stoneDark,0,.14,0,i*2+.07,.14,a*2+.07),fh(e,i,a,2.61,o,0);let c=a*2*.5;vh(e,{mat:Y.roof.slate,hw:i,hd:a,y:s,eave:{front:Math.min(.22,o.front),back:Math.min(.22,o.back),left:.2,right:.2},height:c,ridge:`x`,shape:`gable`}),Z(e,Y.roof.ridge,0,s+c+.03,0,i*2+.3,.08,.12);for(let t=0;t<4;t++){let n=-i+.75+(i*2-1.5)*t/3;Z(e,Y.rail.stoneDark,n,.77,a+.14,.3,1.4,.28),Z(e,Y.rail.stone,n,1.6700000000000002,a+.1,.24,.5,.2),Qm(e,Y.rail.stoneDark,n,2.01,a+.1,.24,.28,.2,-.5,0,0)}let l=e.sub(0,0,a,0);for(let e of[-1.6,.28,1.6])Ah(l,Y.window.lit[1],e,1.22,.5,1.05,.05,Y.wall.stone);jh(l,.95,.79,.62,1.44,.1);let u=e.sub(0,0,-a,Math.PI);for(let e of[-1.5,0,1.5])Ah(u,Y.window.lit[2],e,1.57,.44,.8,.02,Y.wall.stone);let d=.95,f=-i+d+.02,p=5.8;Z(e,Y.wall.stone,f,2.9699999999999998,0,d*2,p,d*2),Z(e,Y.rail.stoneDark,f,.16,0,1.98,.18,1.98);for(let t of[-1,1])for(let n of[-1,1])Z(e,Y.rail.stoneDark,f+t*.8899999999999999,2.9699999999999998,n*.8899999999999999,.16,p,.16);Z(e,Y.wall.trim,f,3.67,0,2.02,.1,2.02),fh(e.sub(f,0,0,0),d,d,5.75,{front:.09,back:.09,left:.09,right:.09},.02);for(let t=0;t<4;t++){let n=t*Math.PI/2,r=e.sub(f,0,0,0).sub(0,0,0,n),i=Zm(r.bucket,new U().multiplyMatrices(r.base,new U().makeTranslation(0,0,.97)));i.put(Y.window.lit[1],Ym.cyl12,0,2.9699999999999998,0,.22,.05,.22,Math.PI/2,0,0),Z(i,Y.wall.trim,0,2.9699999999999998,-.01,.58,.06,.04),Z(i,Y.wall.trim,0,2.9699999999999998,-.01,.06,.58,.04),Ah(i,Y.window.lit[3],0,4.5200000000000005,.5,.95,.05,Y.wall.stone);for(let e=0;e<4;e++)Z(i,Y.window.mullion,0,4.2+e*.18,.02,.44,.06,.05)}e.put(Y.roof.slate,Ym.cone8,f,6.970000000000001,0,1.32,2.2,1.32,0,Math.PI/8,0),Z(e,Y.train.brass,f,8.17,0,.05,.34,.05),Z(e,Y.train.brass,f,8.29,0,.22,.05,.05);let m=.85,h=i-.1,g=uh(e,[[h+m+.12,0],[h+m+.12,m],[h+m+.12,-.85]]),_=h-Math.max(0,.75-g);e.put(Y.wall.stone,Ym.halfCyl,_,1.02,0,m,1.9,m),e.put(Y.wall.stone,Ym.halfCyl,_,1.9300000000000002,0,.9099999999999999,.1,.9099999999999999),e.put(Y.roof.slate,Ym.halfCone,_,2.39,0,.95,.84,.95);for(let t of[-.7,0,.7])Ah(e.sub(_+Math.cos(t)*.854,0,Math.sin(t)*.854,Math.PI/2-t),Y.window.lit[1],0,1.1700000000000002,.34,.66,.02,Y.wall.stone)}function Ah(e,t,n,r,i,a,o,s){let c=i/2,l=a-c,u=Jm(o,0,.05);e.put(t,Ym.plane,n,r-(a-l)/2,Math.min(.005,u),i,l,1),e.put(t,Ym.cyl12,n,r+l,Math.min(.005,u),c,.01,c,Math.PI/2,0,0);let d=Math.min(.045,Math.max(.02,u)),f=Math.max(.005,u*.55);Z(e,s,n-i/2-d/2,r-(a-l)/2,f,d,l+c,d),Z(e,s,n+i/2+d/2,r-(a-l)/2,f,d,l+c,d),Z(e,s,n,r-a,f,i+d*2+.08,.08,d),u>.012&&e.put(s,Ym.arch,n,r+l,f*.6,c+d/2,c+d/2,.9)}function jh(e,t,n,r,i,a){let o=r/2,s=i-o,c=Jm(a,0,.16);e.put(Y.window.lit[3],Ym.plane,t,n-(i-s)/2,.004,r,s,1),e.put(Y.wood.frameDark,Ym.plane,t,n-(i-s)/2,.016,r-.08,s-.02,1),e.put(Y.window.lit[3],Ym.cyl12,t,n+s,.004,o,.012,o,Math.PI/2,0,0),c>.03&&e.put(Y.rail.stone,Ym.arch,t,n+s,.025,o+.05,o+.05,c);let l=Jm(a,.04,.16);Z(e,Y.rail.stone,t-r/2-.06,n-(i-s)/2,l/2,.12,s,l),Z(e,Y.rail.stone,t+r/2+.06,n-(i-s)/2,l/2,.12,s,l);let u=Jm(a,0,.16);u>.04&&Z(e,Y.rail.stone,t,.02,u/2,r+.5,.06,u);let d=Jm(a-u-.02,0,.15);d>.04&&Z(e,Y.rail.stone,t,-.04,u+d/2,r+.7,.06,d)}function Mh(e,t,n,r){let{hw:i,hd:a}=t,o=lh(t);Ch(e,t,{material:Y.wall.plaster[0],roofMat:Y.roof.slate,roof:`hip`,roofHeight:.72,floors:2,overhang:.24,lim:o,ridge:`x`,corniceExtra:.03});let s=e.sub(0,0,a,0);Z(s,Y.rail.stone,0,.25,.02,i*2,.36,.08),jh(s,0,.69,.6,1.24,o.front);let c=1.13;for(let e of xh(4,i,.3))ph(s,Y.window.lit[Sh(r)],e,c,.46,.46,o.front,{mullion:!0});let l=e.sub(0,0,-a,Math.PI);Th(l,i,.45,o.back,r,3),Th(l,i,c,o.back,r,3);for(let t=0;t<2;t++){let n=Bm+t*Vm+.38;ph(e.sub(-i,0,0,-Math.PI/2),Y.window.lit[Sh(r)],0,n,.42,.44,Math.min(.05,o.left)),ph(e.sub(i,0,0,Math.PI/2),Y.window.lit[Sh(r)],0,n,.42,.44,Math.min(.05,o.right))}let u=uh(e,[[-i*.85,a+.62],[i*.85,a+.62]]);if(u>.4){let t=Math.min(.62,u);Z(e,Y.rail.stone,0,.12000000000000001,a+t/2,i*1.7,.1,t+.1);let n=xh(4,i*.78,.4);for(let r of n)$m(e,Y.wall.trim,r,.6950000000000001,a+t-.09,.1,1.25,12),Z(e,Y.rail.stone,r,.2,a+t-.09,.26,.08,.26),Z(e,Y.wall.trim,r,1.29,a+t-.09,.24,.08,.24);Z(e,Y.wall.trim,0,1.3900000000000001,a+t/2-.03,i*1.86,.16,t+.14);let r=nh([[-i*.93,0],[0,.3],[i*.93,0]],t+.14);e.put(Y.wall.trim,r,0,1.4700000000000002,a+t/2-.03,1,1,1,0,-Math.PI/2,0),Z(e,Y.roof.slate,0,1.75,a+t/2-.03,i*1.86,.04,t+.2);let o=.4+uh(e,[[-i*.75,a+.4],[i*.75,a+.4]]);for(let n=0;n<3;n++){let r=t+.08+n*.17;if(r+.09>o)break;Z(e,Y.rail.stone,0,.04000000000000001-n*.07,a+r,i*1.5,.08,.18)}}let d=.65;Z(e,Y.wall.plaster[0],0,3.15,-.24,d*2,6.16,d*2);for(let t of[-1,1])for(let n of[-1,1])Z(e,Y.rail.stoneDark,t*.6,3.15,-.24+n*.6,.13,6.16,.13);Z(e,Y.wall.trim,0,6.130000000000001,-.24,1.46,.12,1.46),Z(e,Y.wall.trim,0,2.73,-.24,1.4000000000000001,.08,1.4000000000000001);for(let t=0;t<4;t++){let n=t*Math.PI/2,r=e.sub(0,0,-.24,0).sub(0,0,0,n),i=Zm(r.bucket,new U().multiplyMatrices(r.base,new U().makeTranslation(0,0,.665)));i.put(Y.station.trim,Ym.cyl16,0,5.510000000000001,-.01,.3,.04,.3,Math.PI/2,0,0),i.put(Y.station.clockFace,Ym.cyl16,0,5.510000000000001,0,.26,.05,.26,Math.PI/2,0,0),Qm(i,Y.station.clockHand,0,5.58,.03,.045,.17,.02,0,0,.5),Qm(i,Y.station.clockHand,0,5.510000000000001,.03,.04,.26,.02,0,0,-1.9),i.put(Y.station.clockHand,Ym.cyl8,0,5.510000000000001,.03,.04,.06,.04,Math.PI/2,0,0)}e.put(Y.roof.slate,Ym.dome,0,6.23,-.24,.79,.42,.79),e.put(Y.train.brass,Ym.ball,0,6.670000000000001,-.24,.07,.07,.07),$m(e,Y.props.metal,0,7.010000000000001,-.24,.022,.7,8),Z(e,Y.station.clockHand,0,7.25,-.24,.26,.14,.02)}function Nh(e,t,n,r){let{hw:i,hd:a}=t,o=lh(t),s=1.5,c=Math.min(1.5,(a*2+o.front+o.back)*.58);Ch(e,t,{material:Y.wall.timber,roofMat:Y.roof.shingle,roof:`gable`,roofHeight:c,floors:1,overhang:.24,lim:o,ridge:`x`});let l=e.sub(0,0,a,0),u=e.sub(0,0,-a,Math.PI),d=Math.min(.05,o.back);for(let e=0;e<=8;e++){let t=-i+i*2*e/8;Z(l,Y.rail.timberDark,t,.8200000000000001,.025,.07,s,.05),Z(u,Y.rail.timberDark,t,.8200000000000001,.025,.07,s,.05)}let f=Math.min(1,i*1.2),p=s*.72;for(let e of[-1,1])Z(l,Y.rail.timberDark,e*f/4,.6100000000000001,.035,f/2-.03,p,.07),Qm(l,Y.rail.timber,e*f/4,.6100000000000001,.08,.08,Math.hypot(f/2-.06,p)*.98,.05,0,0,e*Math.atan2(f/2-.06,p));Z(l,Y.rail.timber,0,1.2100000000000002,.04,f+.24,.12,.08);let m=1.57+c*.45;Z(l,Y.window.lit[3],0,m,.03,.56,.5,.04);for(let e=0;e<4;e++)Z(l,Y.window.mullion,0,m-.18+e*.12,.055,.56,.05,.03);Z(l,Y.rail.timberDark,0,m,.06,.08,.56,.03),Z(l,Y.rail.timber,0,m+.42,.2,.12,.12,.42),$m(l,Y.props.metal,0,m+.32,.38,.07,.05,8);let h=uh(e,[[i+.6,-a*.7],[i+.6,a*.9]]);if(h>.3){let t=Math.min(.6,h),n=e.sub(i,0,0,Math.PI/2),r=nh([[-(a*.9),0],[a*.7,.34],[a*.7,0]],t);n.put(Y.roof.metal,r,t/2,.9199999999999999,0,1,1,1,0,0,0);for(let e of[-1,1])Z(n,Y.rail.timber,t-.06,.495,e*a*.75,.08,.85,.08);Z(n,Y.rail.timberDark,t-.04,.17,0,.06,.2,a*1.6)}ph(u,Y.window.lit[Sh(r)],0,.9199999999999999,.4,.36,d)}function Ph(e,t,n,r){let{hw:i,hd:a}=t,o=lh(t),s=Y.roof.metal,c=Math.min(.46,(a*2+o.front+o.back)*.26),l=n.roof===`shed`;Ch(e,t,{material:n.id===`kiosk`?Y.wall.plaster[n.hue]:Y.wall.timber,roofMat:s,roof:l?`shed`:`gable`,roofHeight:l?c:Math.min(.5,(a*2+o.front+o.back)*.3),floors:1,overhang:.16,lim:o,ridge:`x`});let u=e.sub(0,0,a,0),d=Math.min(.05,o.front);n.id===`kiosk`?(ph(u,Y.window.lit[0],0,.53,.62,.34,d,{mullion:!0}),Z(u,Y.rail.timber,0,.33,Math.min(.16,d+.08),.86,.05,Math.min(.24,d+.14)),Z(u,Y.props.notice,-i*.62,.5700000000000001,.02,.2,.26,.02)):(Z(u,Y.rail.timberDark,-i*.35,.41000000000000003,.03,.5,.62,.06),Qm(u,Y.rail.timber,-i*.35,.41000000000000003,.06,.06,.72,.04,0,0,.6),ph(u,Y.window.lit[Sh(r)],i*.45,.49,.36,.3,d)),ph(e.sub(0,0,-a,Math.PI),Y.window.lit[Sh(r)],0,.49,.36,.3,Math.min(.04,o.back))}var Fh=null;function Ih(){return Fh||(Fh=Y.water.surface.clone(),Fh.normalMap=K.waterNormal.clone(),Fh.normalMap.repeat.set(2,1),Fh.normalMap.needsUpdate=!0,gp(Fh)),Fh}function Lh(e,t,n,r){let{hw:i,hd:a}=t,o=lh(t),s=2*Vm,c=1.4300000000000002,l=Math.min(1.05,(a*2+o.front+o.back)*.46);eh(e,Y.wall.stone,0,.75,0,i*2,s,a*2),Z(e,Y.wall.timber,0,1.1400000000000001,0,i*2+.03,.5800000000000001,a*2+.03),Z(e,Y.rail.stoneDark,0,.13,0,i*2+.06,.12,a*2+.06),Z(e,Y.rail.timber,0,.8500000000000001,0,i*2+.06,.07,a*2+.06);let u=e.sub(0,0,a,0),d=e.sub(0,0,-a,Math.PI),f=Math.min(.05,o.front);mh(u,Y.wood.frameDark,-i*.3,.39,.44,.58,f,{steps:2}),ph(u,Y.window.lit[0],i*.45,.47000000000000003,.42,.38,f,{mullion:!0}),Th(u,i,.75+.36,f,r,3);for(let t=0;t<2;t++){let n=Bm+t*Vm+.36;ph(e.sub(-i,0,0,-Math.PI/2),Y.window.lit[Sh(r)],0,n,.4,.38,Math.min(.05,o.left)),ph(e.sub(i,0,0,Math.PI/2),Y.window.lit[Sh(r)],0,n,.4,.38,Math.min(.05,o.right))}ph(d,Y.window.lit[1],0,.47000000000000003,.4,.36,Math.min(.04,o.back)),vh(e,{mat:Y.roof.slateBrown,hw:i,hd:a,y:c,eave:{front:Math.min(.2,o.front),back:Math.min(.2,o.back),left:.18,right:.18},height:l,ridge:`x`,shape:`gable`}),Z(e,Y.roof.ridge,0,c+l+.03,0,i*2+.2,.07,.11),hh(e,i*.55,-a*.4,.8860000000000001,c+l+.2),Z(u,Y.rail.timber,0,1.33,.28,.14,.14,.56),Z(u,Y.rail.timberDark,0,.9300000000000002,.5,.42,.34,.3);let p=-2.05,m=-.35;e.put(Ih(),Ym.plane,.2,-.655,-2.4,3,1,1.5,-Math.PI/2,0,0);for(let t of[-1,1])Z(e,Y.rail.stoneDark,t*1.16,-.62,-1.8699999999999999,.22,1.62,1.12);for(let t of[-.18,.18])e.put(Y.wall.timber,Ym.ring,0,m,p+t,.95,.95,1,0,0,0);for(let t=0;t<8;t++){let n=t*Math.PI/4;e.put(Y.wall.timber,Ym.box,Math.cos(n)*.47,m+Math.sin(n)*.47,p,.05,.98,.05,0,0,n)}for(let t=0;t<12;t++){let n=t*Math.PI/6;e.put(Y.road.marking,Ym.box,Math.cos(n)*.84,m+Math.sin(n)*.84,p,.34,.06,.2,0,0,n)}e.put(Y.rail.steel,Ym.cyl12,0,m,-1.4999999999999998,.055,1.5,.055,Math.PI/2,0,0),e.put(Y.props.metal,Ym.cyl12,0,m,-1.7099999999999997,.12,.16,.12,Math.PI/2,0,0),$m(e,Y.rail.stoneDark,0,-.82,-1.7099999999999997,.15,1.3,8),Z(e,Y.rail.timber,0,-.32999999999999996,-1.5299999999999998,.16,.22,.34),Z(e,Y.rail.timber,0,.27999999999999997,-1.15,.4,.06,1.5);for(let t of[-1,1])Z(e,Y.rail.timber,t*.17,.44,-1.15,.06,.34,1.5);for(let t of[-.3,1])Z(e,Y.rail.timber,0,-.09999999999999998,p+t,.14,.72,.14);Z(e,Y.rail.timber,0,.020000000000000018,-.4299999999999997,.5,.5,.1)}function Rh(e,t,n,r){let{hw:i,hd:a}=t,o=lh(t),s=Jm(Math.min(o.front,o.back,o.left,o.right),.05,.08),c=Math.min(i,a)*.9-s,l=e.base,u=(e,t,n)=>{let r=1/0,i=e+s;for(let e=0;e<12;e++){let a=e*Math.PI/6,o=oh(l,t+Math.cos(a)*i,n+Math.sin(a)*i);o<r&&(r=o)}for(let i of[-1,1]){let a=oh(l,t+i*.16,n+e+s*.5+.03);a<r&&(r=a)}return r},d=c,f=0,p=0,m=u(c+s,0,0);for(let e of[1,.94,.88,.8,.72,.64]){let t=c*e,n=Math.max(0,i-t-s),r=Math.max(0,a-t-s),o=0,l=0,h=u(t+s,0,0),g=Math.max(n,r,.08);for(let e=0;e<20;e++){let e=!1;for(let[i,a]of[[1,0],[-1,0],[0,1],[0,-1],[.7071,.7071],[-.7071,.7071],[.7071,-.7071],[-.7071,-.7071]]){let c=Jm(o+i*g,-n,n),d=Jm(l+a*g,-r,r),f=u(t+s,c,d);if(f>h+1e-4){o=c,l=d,h=f,e=!0;break}}e||(g*=.5)}if(h>m&&(m=h,d=t,f=o,p=l),h>=1.4400000000000002){d=t,f=o,p=l,m=h;break}}$m(e,Y.rail.concrete,f,1.87,p,d,3.6,16),e.put(Y.rail.concrete,Ym.dome,f,3.67,p,d,d*.55,d);for(let t=0;t<4;t++)$m(e,Y.props.metal,f,.52+t*.9,p,d+s*.4,.07,16);$m(e,Y.props.metal,f+d*.4,3.67+d*.42,p,.17,.1,8),$m(e,Y.props.metal,f+d*.4,3.67+d*.42+.16,p,.05,.3,8),e.put(Y.rail.steel,Ym.cyl8,f+d*.4,3.67+d*.42+.33,p,.14,.06,.14);let h=f,g=p+d+s*.5;for(let t of[-1,1])Z(e,Y.props.metal,h+t*.13,1.77,g,.04,3.4,.04);for(let t=0;t<9;t++)Z(e,Y.props.metal,h,.37+t*.4,g,.3,.035,.035);Z(e,Y.props.metal,f-d*.5,.35000000000000003,p+d*.5,.26,.34,.3),$m(e,Y.rail.concrete,f,.010000000000000009,p,d+s,.2,16)}function zh(e,t,n,r){let{hw:i,hd:a}=t,o=Math.min(i,a),s=o*.55,c=Math.min(.85,o*.6),l=Math.min(s+.3,o);Z(e,Y.rail.concrete,0,.19,0,l*2,.26,l*2);for(let t of[-1,1])for(let n of[-1,1])Z(e,Y.rail.concrete,t*s,.12000000000000001,n*s,.4,.42,.4);for(let t of[-1,1])for(let n of[-1,1])e.put(Y.props.metal,Ym.box,t*s*.86,1.52,n*s*.86,.11,2.9,.11,t*-.06,0,n*.06);for(let t of[1.2,2.3]){for(let n of[-1,1])Z(e,Y.props.metal,0,t,n*s*.9,s*1.75,.07,.07);for(let n of[-1,1])Z(e,Y.props.metal,n*s*.9,t,0,.07,.07,s*1.75)}for(let t of[-1,1])Qm(e,Y.props.metal,t*s*.9,2.05,0,.06,2.1,.06,Math.PI/4,0,0),Qm(e,Y.props.metal,0,2.05,t*s*.9,.06,2.1,.06,0,Math.PI/4,0);$m(e,Y.rail.timber,0,3.5999999999999996,0,c,1.4,16);for(let t of[3.1799999999999997,4.02])$m(e,Y.props.metal,0,t,0,c+.03,.08,16);$m(e,Y.props.metal,0,2.84,0,c+.05,.12,16),e.put(Y.roof.metal,Ym.cone12,0,4.54,0,c+.12,.5,c+.12),$m(e,Y.props.metal,0,4.92,0,.03,.34,8),e.put(Y.props.metal,Ym.ball,0,5.12,0,.08,.08,.08),$m(e,Y.props.metal,0+c*.75,1.65,0+c*.75,.05,3.3,8),e.put(Y.props.metal,Ym.cyl8,0+c*.75,.17,0+c*.75,.05,.4,.05,Math.PI/2,0,0);let u=0-c-.08;for(let t of[-1,1])Z(e,Y.props.metal,u,2.05,0+t*.13,.04,4.1,.04);for(let t=0;t<10;t++)Z(e,Y.props.metal,u,.49+t*.42,0,.035,.035,.3);Z(e,Y.props.metal,u,4.3+.1,0,.5,.05,.34)}function Bh(e,t,n){let r=ch(n),i=Zm(e,r.base,t),a=Nd(qm(n.id));n.style!==`silo`&&dh(i,r);let o=i.sub(r.cx,0,r.cz);switch(n.style){case`shop`:Dh(o,r,n,a);break;case`tavern`:Oh(o,r,n,a);break;case`church`:kh(o,r,n,a);break;case`hall`:Mh(o,r,n,a);break;case`barn`:Nh(o,r,n,a);break;case`shed`:Ph(o,r,n,a);break;case`mill`:Lh(o,r,n,a);break;case`silo`:Rh(o,r,n,a);break;case`watertower`:zh(o,r,n,a);break;default:Eh(o,r,n,a)}return r}function Vh(){let e=rf(`buildings`),t=rf(`buildingsFlat`),n=[];for(let r of lf)n.push(Bh(e,t,r));let r=e.build({name:`buildings`});return r.add(t.build({name:`buildingsFlat`,castShadow:!1,receiveShadow:!0})),r.userData.plans=n.map(e=>({id:e.plot.id,style:e.plot.style,scale:+e.scale.toFixed(3),ok:e.ok,minTrack:+e.minDist.toFixed(2)})),{object3D:r,lightAnchors:[]}}var Hh=Math.PI*2;function Uh(e){let t=e.map(e=>e.index?e.toNonIndexed():e.clone()),n=jd(t,!1);for(let e of t)e.dispose();return n}function Wh(e){e.computeBoundingBox();let t=e.boundingBox,n=(t.min.x+t.max.x)/2,r=(t.min.z+t.max.z)/2,i=Math.max(Math.abs(t.min.x-n),Math.abs(t.max.x-n),1e-4),a=Math.max(Math.abs(t.min.z-r),Math.abs(t.max.z-r),1e-4),o=Math.max(t.max.y-t.min.y,1e-4),s=new U().makeTranslation(-n,-t.min.y,-r),c=new U().makeScale(1/Math.max(i,a),1/o,1/Math.max(i,a));return e.applyMatrix4(c.multiply(s)),e.computeBoundingSphere(),e}var Gh=(e,t,n)=>new Qi(e,t,n),Kh=(e,t,n,r=8,i=!1)=>new $i(e,t,n,r,1,i),qh=(e,t,n)=>new U().makeTranslation(e,t,n),Jh=(e,t,n,r=0,i=0)=>new U().compose(new H(e,t,n),new Bt().setFromEuler(new bn(0,r,i)),new H(1,1,1)),Yh=(e,t,n,r)=>new U().compose(new H(e,t,n),new Bt().setFromEuler(new bn(r,0,0)),new H(1,1,1));function Xh(){let e=(e,t,n)=>new ea(e,t,8).translate(0,n+t/2,0),t=(e,t,n,r,i=1)=>new bo(e,8,6).scale(1,i,1).translate(t,n,r),n=Wh(Uh([e(1,.52,0),e(.74,.46,.26),e(.46,.4,.55)])),r=Wh(Uh([t(.45,0,.55,0),t(.35,.34,.42,.1),t(.38,-.3,.48,-.12)])),i=Wh(Uh([t(.42,0,.6,0),t(.32,.36,.44,.08),t(.34,-.32,.48,-.14),t(.3,.06,.86,.02),t(.28,-.12,.36,.32)])),a=Wh(Uh([t(.5,0,.32,0,.62)])),o=[new bo(.62,8,6).scale(1.15,.78,1.15).translate(0,.72,0)],s=Nd(9001);for(let e=0;e<10;e++){let t=e/10*Hh+s()*.25,n=.42+s()*.22,r=.42+s()*.24;o.push(new ea(.055,r,5).rotateX(Math.PI).translate(Math.cos(t)*n,.6-r/2,Math.sin(t)*n))}let c=Wh(Uh(o)),l=Wh(Uh([t(.42,0,.26,0,.8),t(.32,.3,.22,.08,.8),t(.34,-.26,.24,-.1,.8)]));return{trunk:new $i(1,1.3,1,7).translate(0,.5,0),conifer:n,broadleafA:r,broadleafB:i,orchard:a,willow:c,bush:l}}function Zh(){let e=new Rn;e.name=`props`;let t=[],n=rf(`props`),r=rf(`propsFlat`),i=Y.nature.foliage||[],a=Y.nature.flowers||[],o=e=>i.length?i[e%i.length]:Y.nature.hedge,s=e=>a.length?a[e%a.length]:Y.nature.hedge,c=new Mo({color:11544098,roughness:.62,metalness:.05});gp(c);let l=[],u=(e,t,n,r)=>l.push({minX:e-n/2,maxX:e+n/2,minZ:t-r/2,maxZ:t+r/2}),d=(e,t,n=0)=>l.some(r=>e>r.minX-n&&e<r.maxX+n&&t>r.minZ-n&&t<r.maxZ+n),f=new Map,p=(e,t)=>`${Math.floor(e)},${Math.floor(t)}`;function m(e,t){let n=p(e,t),r=f.get(n);r?r.push([e,t]):f.set(n,[[e,t]])}function h(e,t,n){let r=Math.floor(e),i=Math.floor(t);for(let a=-1;a<=1;a++)for(let o=-1;o<=1;o++){let s=f.get(`${r+a},${i+o}`);if(s){for(let[r,i]of s)if(Math.hypot(r-e,i-t)<n)return!0}}return!1}function g(e,t){let n=[];for(let r=0;r<e.length-1;r++){let[i,a]=e[r],[o,s]=e[r+1],c=Math.hypot(o-i,s-a);if(c<1e-6)continue;let l=Math.max(1,Math.round(c/t));for(let e=0;e<l;e++)n.push([i+(o-i)*e/l,a+(s-a)*e/l])}let r=e[e.length-1];return n.push([r[0],r[1]]),n}let _=Xh(),v=new Qi(1,1,1),y=new Qi(1,1,1),b={iron:[Kh(.2,.24,.11,10).translate(0,.055,0),Kh(.13,.19,.1,10).translate(0,.16,0),Kh(.078,.078,.05,8).translate(0,.62,0),Kh(.064,.064,.045,8).translate(0,1.86,0)],post:[Kh(.052,.098,2.2,8).translate(0,1.3,0),Gh(.045,.045,.32).translate(0,2.42,.16),Gh(.045,.14,.045).translate(0,2.34,.3),Kh(.15,.13,.03,4).translate(0,2.45,.3),new ea(.175,.16,4).translate(0,2.54,.3)],glass:[Kh(.108,.128,.22,4).translate(0,2.3,.3)]},x=Uh([Gh(.78,.05,.26).translate(0,.42,0),Gh(.78,.24,.045).translate(0,.6,-.12),Gh(.05,.42,.24).translate(-.33,.21,0),Gh(.05,.42,.24).translate(.33,.21,0),Gh(.05,.05,.22).translate(-.33,.5,.02),Gh(.05,.05,.22).translate(.33,.5,.02)]),S=Uh([Gh(.46,.34,.46).translate(0,.17,0),Gh(.5,.06,.5).translate(0,.36,0)]),C=(()=>{let e=Nd(7717),t=[new bo(.16,7,5).scale(1,.6,1).translate(0,.1,0)];for(let n=0;n<5;n++){let n=e()*Hh,r=e()*.5;t.push(new bo(.1,6,5).translate(Math.cos(n)*r,.2+e()*.24,Math.sin(n)*r))}return Wh(Uh(t))})(),w=Gh(.36,.3,.36).translate(0,.15,0),T=Kh(.145,.135,.38,10).translate(0,.19,0),E=Uh([Kh(.3,.42,.36,9).translate(0,.18,0),new ea(.3,.34,9).translate(0,.53,0)]),D=[[13.8,1],[15.2,6],[19,10],[12.8,-12.4],[-16.2,10.2],[6.4,-13.4],[-17.6,-6.2]],O=(e,t,n,r)=>{for(let i of[-.5,0,.5])for(let a of[-.5,0,.5])if(!gf(e+i*n,t+a*r,{railClear:1.6,roadClear:.6}))return!1;return!0},k=null;for(let e of D)if(O(e[0],e[1],2,1.4)){k=e;break}k&&u(k[0],k[1],2.4,1.8);let A=[[-19.6,-13.9],[-18.1,-13.75],[-16.6,-13.95],[-15.1,-13.8]],j=[[12.8,-13.85],[14.4,-13.7],[16,-13.9],[17.6,-13.75]];for(let[e,t]of A)u(e,t,1.2,1.2);for(let[e,t]of j)u(e,t,.9,.9);let M=[],N=[];function P(e,t){let r=g(e,t.spacing),i=t.posts,a=(e,t,n,r)=>Math.atan2(n-e,r-t),o=null;for(let e=0;e<r.length;e++){let[s,c]=r[e],l=r[Math.max(0,e-1)],d=r[Math.min(r.length-1,e+1)],f=Ld(s,c),p=e===0?a(s,c,d[0],d[1]):a(l[0],l[1],s,c);if(i.push({x:s,y:f,z:c,ry:p}),o){let e=s-o.x,r=c-o.z,i=Math.hypot(e,r);if(i>.06&&i<=t.maxSpan){let a=Math.atan2(e,r);for(let e of t.railYs)n.add(t.railMat,y,new U().compose(new H((s+o.x)/2,(f+o.y)/2+e,(c+o.z)/2),new Bt().setFromEuler(new bn(0,a,0)),new H(t.railT,t.railH,i)));t.keepout&&u((s+o.x)/2,(c+o.z)/2,Math.abs(e)+.36,Math.abs(r)+.36)}o={x:s,y:f,z:c}}else o={x:s,y:f,z:c}}}let F=e=>({spacing:1.5,maxSpan:2,posts:e,keepout:!0,railMat:Y.props.fenceWood,railYs:[.28,.55],railT:.05,railH:.045});(()=>{let e=Wd(),t=Math.max(8,Math.round(Gd()/1.5)),n=new H,r=new H,i=e=>Zd.some(t=>e>t.uMin-.004&&e<t.uMax+.004),a={neg:[],pos:[]};for(let o=0;o<=t;o++){let s=o%t/t;e.getPointAt(s,n),e.getTangentAt(s,r);let c=i(s)||n.z>8.2&&n.x>uf.platform.xFrom-.4&&n.x<uf.platform.xTo+.4,l=n.z<-8.2||n.z>8.2;for(let e of[-1,1]){let t=e<0?`neg`:`pos`;!l||c?a[t].push(null):a[t].push([n.x-r.z*2.3*e,n.z+r.x*2.3*e])}}for(let e of[`neg`,`pos`]){let t=[],n=()=>{let e=t.filter(Boolean);e.length>1&&P(e,F(M)),t=[]};for(let r of a[e])r?t.push(r):n();n()}for(let e of[uf.platform.xFrom-.35,uf.platform.xTo+.35])P([[e,6.5],[e,9.2]],F(M))})();let ee=e=>({spacing:.55,maxSpan:.9,posts:e,keepout:!1,railMat:Y.props.fenceWhite,railYs:[.2,.4],railT:.035,railH:.03}),te=[[-6.85,-9.25],[.05,-9.25],[.05,-5.35],[-6.85,-5.35]];for(let e=0;e<te.length;e++)P([te[e],te[(e+1)%te.length]],ee(N));for(let e of[[[8.85,-2.6],[13.9,-2.6],[13.9,2.95],[12.5,2.95]],[[11.5,2.95],[8.85,2.95]],[[8.85,2.95],[8.85,-2.6]]])P(e,ee(N));let ne=[`conifer`,`broadleaf`,`broadleaf`,`orchard`,`willow`],re={conifer:{h:[3.2,5],trunkRatio:[.24,.32],radius:[.56,.9],trunkR:[.075,.115]},broadleafA:{h:[2.6,4],trunkRatio:[.34,.44],radius:[.66,1.02],trunkR:[.07,.11]},broadleafB:{h:[2.8,4.2],trunkRatio:[.32,.42],radius:[.72,1.08],trunkR:[.07,.11]},orchard:{h:[1.8,2.5],trunkRatio:[.3,.4],radius:[.55,.8],trunkR:[.055,.085]},willow:{h:[3,4.2],trunkRatio:[.28,.36],radius:[.78,1.15],trunkR:[.075,.12]},bush:{h:[.7,1.2],trunkRatio:[0,0],radius:[.42,.74],trunkR:null}},ie={conifer:{geo:_.conifer,mat:o(2)},broadleafA:{geo:_.broadleafA,mat:o(0)},broadleafB:{geo:_.broadleafB,mat:o(0)},orchard:{geo:_.orchard,mat:o(1)},willow:{geo:_.willow,mat:o(3)},bush:{geo:_.bush,mat:Y.nature.hedge}},ae={};for(let e of Object.keys(ie))ae[e]=[];let oe=[],se=(e,t,n)=>t+e*(n-t),I=0;function ce(e,t,n,r){let i=r(),a=r(),o=e;o===`mixed`&&(o=ne[Math.floor(a*ne.length)%ne.length]),o===`broadleaf`&&(o=a<.5?`broadleafA`:`broadleafB`),o===`hedgerow`&&(o=a<.5?`bush`:`broadleafA`);let s=re[o];if(!s||h(t,n,.75)||d(t,n,.4))return!1;let c=r(),l=r(),u=r(),f=Ld(t,n),p=se(i,s.h[0],s.h[1]),g=p*se(l,s.trunkRatio[0],s.trunkRatio[1]),_=p-g,v=se(u,s.radius[0],s.radius[1])*.5*p*.55,y=c*Hh,b=(l-.5)*.18;if(s.trunkR){let e=se(i,s.trunkR[0],s.trunkR[1]);oe.push({x:t,y:f,z:n,ry:y,sx:e,sy:g,sz:e,color:new W(1,1-b*.25,1-b*.35)})}return ae[o].push({x:t,y:f+g,z:n,ry:y,sx:v,sy:_,sz:v,color:new W(1+b*.5,1-Math.abs(b)*.15,1-b*.5)}),m(t,n),I++,!0}for(let e of pf.concat([{seed:301,x:-16.5,z:-9.5,rx:2.6,rz:2.2,count:12,kind:`mixed`},{seed:302,x:-17.5,z:7.5,rx:2.6,rz:3.4,count:14,kind:`conifer`},{seed:303,x:15,z:-12,rx:3,rz:1.6,count:10,kind:`mixed`},{seed:304,x:18.6,z:-6,rx:1.6,rz:3.4,count:10,kind:`broadleaf`},{seed:305,x:17,z:10,rx:2.8,rz:2,count:10,kind:`mixed`},{seed:306,x:-12.4,z:-12.2,rx:2.2,rz:1.4,count:6,kind:`mixed`}])){let t=Nd(e.seed),n=Math.max(1,e.count*30),r=0;for(let i=0;i<n&&r<e.count;i++){let n=t()*2-1,i=t()*2-1;if(n*n+i*i>1)continue;let a=e.x+n*e.rx,o=e.z+i*e.rz;gf(a,o,{railClear:1.6})&&ce(e.kind,a,o,t)&&r++}if(r<e.count){let t=[];for(let n=e.x-e.rx;n<=e.x+e.rx;n+=.5)for(let r=e.z-e.rz;r<=e.z+e.rz;r+=.5){let i=(n-e.x)/e.rx,a=(r-e.z)/e.rz;i*i+a*a>1||gf(n,r,{railClear:1.6})&&t.push([n,r])}let n=Nd((e.seed^2654435769)>>>0);for(let e=t.length-1;e>0;e--){let r=Math.floor(n()*(e+1)),i=t[e];t[e]=t[r],t[r]=i}for(let[i,a]of t){if(r>=e.count)break;ce(e.kind,i,a,n)&&r++}}}let le=0;function ue(e,t,r,i,a,o){let s=Ld(e,t);n.add(Y.nature.hedge,v,new U().compose(new H(e,s+i/2-.06,t),new Bt().setFromEuler(new bn(0,r,0)),new H(a,i,o))),le++}function de(e,t,n,r,i){let a=[];for(let n of t)for(let t of ef(e,.5,n))gf(t.x,t.z,{railClear:1.6,roadClear:.15})&&a.push({x:t.x,z:t.z,yaw:t.angle});let o=[];for(let e of a){if(o.length>=i)break;o.every(t=>Math.hypot(t.x-e.x,t.z-e.z)>=r)&&o.push(e)}let s=Nd(n);for(let e of o)ue(e.x,e.z,e.yaw,.55+s()*.25,.44+s()*.12,r*.95);return o.length}de(`crossLane`,[-2,-2.45,-2.9,-3.35],2101,.95,8),de(`greenPath`,[1,1.35,1.7,2.05,-1,-1.35,-1.7],2102,.9,6),de(`farmTrack`,[1,1.45,1.9,2.35,-1,-1.45,-1.9],2103,.95,16),(()=>{let e={minX:-6.7,maxX:-.1,minZ:-10.7,maxZ:-4.1},t=(t,n)=>Math.max(e.minX-t,t-e.maxX,e.minZ-n,n-e.maxZ),n=[];for(let r=0;r<Hh-1e-6;r+=.035)for(let i of[.55,1.05,1.5]){let a=-3.4+Math.cos(r)*(Math.max(e.maxX-e.minX,e.maxZ-e.minZ)/2+i),o=-7.4+Math.sin(r)*(Math.max(e.maxX-e.minX,e.maxZ-e.minZ)/2+i);t(a,o)<.15||t(a,o)>1.7||gf(a,o,{railClear:1.6,roadClear:.15})&&n.push({x:a,z:o,a:r})}n.sort((e,t)=>e.a-t.a);let r=[];for(let e of n){if(r.length>=8)break;r.every(t=>Math.hypot(t.x-e.x,t.z-e.z)>=1)&&r.push(e)}let i=Nd(2104);for(let e=0;e<r.length;e++){let t=r[e],n=r[(e+1)%r.length],a=Math.atan2(n.x-t.x,n.z-t.z);ue(t.x,t.z,a,.55+i()*.25,.44+i()*.12,.95)}})();let fe=df.map(e=>{let n=Ld(e.x,e.z);return t.push({position:new H(e.x+Math.sin(e.rotY)*.3,n+2.3,e.z+Math.cos(e.rotY)*.3),color:16767392,intensity:6,distance:10,decay:2,priority:4}),{x:e.x,y:n,z:e.z,ry:e.rotY}}),pe=tf.find(e=>e.id===`piazza`)||{x:-.65,z:.55};(()=>{let e=pe.x+.37,t=pe.z,i=qh(e,Ld(e,t),t);n.add(Y.rail.stone,Kh(.4,.44,.3,16,!0).translate(0,.15,0),i.clone()),n.add(Y.rail.stone,Kh(.38,.38,.05,16).translate(0,.025,0),i.clone()),n.add(Y.rail.stone,Kh(.065,.09,.46,10).translate(0,.28,0),i.clone()),n.add(Y.rail.stone,Kh(.21,.07,.06,12).translate(0,.55,0),i.clone()),n.add(Y.rail.stone,Kh(.045,.055,.14,8).translate(0,.65,0),i.clone()),r.add(Y.water.surface,Kh(.37,.37,.02,16).translate(0,.27,0),i.clone()),r.add(Y.water.surface,Kh(.19,.19,.02,12).translate(0,.575,0),i.clone())})();let me=[[-.65,-.45,0],[.55,.55,-Math.PI/2],[-1.95,.55,Math.PI/2],[-.65,1.62,Math.PI],[1.55,2.3,Math.PI/2],[1.65,-1.05,Math.PI/2],[-7.2,4.95,0],[-2.6,4.95,0]].map(([e,t,n])=>({x:e,y:Ld(e,t),z:t,ry:n}));(()=>{let e=qh(-3.6,Ld(-3.6,5.15),5.15);for(let t of[-.28,.28])n.add(Y.wood.frame,Gh(.07,1.25,.07),e.clone().multiply(qh(t,.62,0)));n.add(Y.props.notice,Gh(.7,.5,.05),e.clone().multiply(qh(0,1.05,0))),n.add(Y.wood.frameDark,Gh(.78,.05,.12),e.clone().multiply(qh(0,1.34,.02)))})(),(()=>{let e=Jh(.15,Ld(.15,2.1),2.1,.35);n.add(Y.wood.frame,Kh(.05,.06,1.9,8).translate(0,.95,0),e.clone()),n.add(Y.props.signGreen,Gh(.55,.14,.035),e.clone().multiply(Jh(-.06,1.55,0,.5,0))),n.add(Y.props.signGreen,Gh(.55,.14,.035),e.clone().multiply(Jh(.06,1.28,0,-.55,0)))})();let he=[[-1.95,1.8],[.72,-.45],[-1.95,-.55],[-4.7,5.25],[-9.3,5.25],[1.6,.9]],ge=[],_e=[];he.forEach(([e,t],n)=>{let r=Ld(e,t);ge.push({x:e,y:r,z:t,ry:n*.5});let i=Nd(4300+n);for(let n=0;n<3;n++){let a=i()*Hh,o=i()*.14;_e.push({x:e+Math.cos(a)*o,y:r+.34,z:t+Math.sin(a)*o,ry:i()*Hh,sx:.36+i()*.12,sy:.34+i()*.14,sz:.36+i()*.12,color:new W(1+(i()-.5)*.25,1-(i()-.5)*.12,1-(i()-.5)*.2),mat:s(n)})}}),(()=>{let e=Ld(1.05,-2.2),t=Jh(1.05,e,-2.2,-.15);n.add(Y.wood.frame,Gh(.8,.28,.34),t.clone().multiply(qh(0,.14,0))),n.add(Y.wood.frameDark,Gh(.06,.1,.3),t.clone().multiply(qh(-.34,.05,0))),n.add(Y.wood.frameDark,Gh(.06,.1,.3),t.clone().multiply(qh(.34,.05,0))),r.add(Y.water.surface,Gh(.72,.02,.26),t.clone().multiply(qh(0,.27,0)));let i=Jh(1.35,e,-2.85,-.15);for(let e of[-.55,.55])n.add(Y.props.metal,Kh(.035,.035,1.05,6).translate(0,.52,0),i.clone().multiply(qh(e,0,0)));n.add(Y.props.metal,Gh(1.2,.05,.05),i.clone().multiply(qh(0,1,0)))})(),(()=>{for(let[e,t,i]of[[-10.2,11.9,Math.PI],[8.8,9,0]]){let a=Jh(e,Ld(e,t),t,i);n.add(Y.props.metal,Kh(.16,.2,.18,8).translate(0,.09,0),a.clone()),n.add(Y.rail.steel,Kh(.05,.07,2.1,8).translate(0,1.15,0),a.clone());for(let e of[-.12,.12])n.add(Y.rail.steel,Gh(.025,1.5,.025),a.clone().multiply(qh(e,.85,-.1)));for(let e=0;e<6;e++)n.add(Y.rail.steel,Gh(.26,.02,.02),a.clone().multiply(qh(0,.2+e*.25,-.1)));n.add(c,Gh(.1,.62,.03),a.clone().multiply(Yh(.02,2,.3,.5))),n.add(Y.wall.trim,Gh(.1,.12,.035),a.clone().multiply(Yh(.02,2.06,.13,.5))),n.add(Y.props.metal,Gh(.12,.16,.05),a.clone().multiply(qh(0,1.86,.06))),r.add(Y.props.lampGlass,Gh(.1,.13,.1),a.clone().multiply(qh(.09,1.5,.02)))}})();for(let[e,t]of j){if(!gf(e,t,{railClear:1.3,roadClear:.15,waterClear:.2}))continue;let r=Jh(e,Ld(e,t),t,Math.PI/2);n.add(Y.wood.frame,Kh(.07,.095,2.7,8).translate(0,1.35,0),r.clone());for(let e of[2.5,2.2])n.add(Y.wood.frameDark,Gh(.9,.06,.06),r.clone().multiply(qh(0,e,0)));for(let e of[-.38,.38])n.add(Y.rail.steel,Kh(.03,.035,.1,6).translate(0,2.6,0),r.clone().multiply(qh(e,0,0))),n.add(Y.rail.steel,Kh(.03,.035,.1,6).translate(0,2.3,0),r.clone().multiply(qh(e,0,0)))}let ve=[],ye=[];(()=>{let e=Nd(5201);[[-8.55,12.25],[-8.05,12.2],[-7.72,12.62],[-8.4,12.68]].forEach(([t,n],r)=>{ve.push({x:t,y:Ld(t,n),z:n,ry:(e()-.5)*.9,sx:.9+e()*.3,sy:.9+e()*.3,sz:.9+e()*.3}),r===0&&ve.push({x:t,y:Ld(t,n)+.32,z:n,ry:.4,sx:.8,sy:.8,sz:.8})});for(let[t,n]of[[-6.65,12.3],[-6.22,12.5],[-6.85,12.58],[-6.35,12.15]])ye.push({x:t,y:Ld(t,n),z:n,ry:e()*Hh,sx:1,sy:1,sz:1})})();let be=[];(()=>{let e=Nd(6201);for(let[t,n]of A)gf(t,n,{railClear:1.3,roadClear:.15,waterClear:.2})&&be.push({x:t,y:Ld(t,n),z:n,ry:e()*Hh,sx:1.5+e()*.6,sy:1.5+e()*.5,sz:1.5+e()*.6})})();let xe=0;if(k){let[e,t]=k,n=qh(e,Ld(e,t),t);for(let e=0;e<6;e++){let t=-.7+e*.28;r.add(Y.ground.dirt,Gh(2,.08,.17),n.clone().multiply(qh(0,.04,t))),r.add(Y.nature.hedge,Gh(1.86,.09,.11),n.clone().multiply(qh(0,.12,t))),xe++}}(()=>{let e=8.2,t=2.4,r=qh(e,0,t);for(let e=0;e<5;e++){let t=-1.45+e*.3;n.add(Y.rail.timber,Gh(.3,.055,.7),r.clone().multiply(qh(t,-.16,0)))}for(let e of[-.24,.24])n.add(Y.rail.timberDark,Gh(1.7,.1,.09),r.clone().multiply(qh(-.15,-.24,e)));for(let r of[-1.2,-.35])for(let i of[-.24,.24]){let a=e+r,o=t+i,s=Ld(a,o),c=Math.max(.12,-.01999999999999999-s);n.add(Y.rail.timberDark,Kh(.055,.055,c,6),qh(a,s+c/2,o))}n.add(Y.rail.timberDark,Gh(.5,.2,.7),qh(8.7,-.1,t))})();let Se=[],Ce=new Bt,we=new bn,Te=new H,Ee=new H,De=new U;function Oe(t,n,r,i,a={}){if(!t||!n||!r.length)return null;let o=new Hi(t,n,r.length);o.name=i;for(let e=0;e<r.length;e++){let t=r[e];we.set(0,t.ry||0,0),Ce.setFromEuler(we),Te.set(t.x,t.y,t.z),Ee.set(t.sx??1,t.sy??1,t.sz??1),o.setMatrixAt(e,De.compose(Te,Ce,Ee)),t.color&&o.setColorAt(e,t.color)}return o.instanceMatrix.needsUpdate=!0,o.instanceColor&&(o.instanceColor.needsUpdate=!0),o.castShadow=a.castShadow!==!1,o.receiveShadow=a.receiveShadow!==!1,o.computeBoundingSphere(),e.add(o),Se.push(i),o}Oe(_.trunk,Y.nature.trunk,oe,`tree-trunks`);for(let e of Object.keys(ie))Oe(ie[e].geo,ie[e].mat,ae[e],`trees-${e}`);Oe(x,Y.props.bench,me,`benches`),Oe(S,Y.props.planter,ge,`planters`),Oe(w,Y.props.crate,ve,`crates`),Oe(T,Y.props.barrel,ye,`barrels`),Oe(E,Y.nature.hay,be,`hays`);let ke=new Map;for(let e of _e)ke.has(e.mat)||ke.set(e.mat,[]),ke.get(e.mat).push(e);let Ae=0;for(let[e,t]of ke)Oe(C,e,t,`flowers-${Ae++}`,{castShadow:!1,receiveShadow:!1});Oe(Uh(b.iron),Y.props.lampIron,fe,`lamps-iron`),Oe(Uh(b.post),Y.props.lampPost,fe,`lamps-post`),Oe(Uh(b.glass),Y.props.lampGlass,fe,`lamps-glass`,{castShadow:!1}),Oe(Gh(.09,.7,.09).translate(0,.35,0),Y.props.fenceWood,M,`fence-posts-wood`),Oe(Gh(.06,.55,.06).translate(0,.275,0),Y.props.fenceWhite,N,`fence-posts-white`),e.add(n.build({name:`props-static`,castShadow:!0,receiveShadow:!0})),e.add(r.build({name:`props-flat`,castShadow:!1,receiveShadow:!0}));let je=0;for(let t of e.children)t.isGroup?je+=t.children.filter(e=>e.isMesh).length:t.isMesh&&(je+=1);return e.userData.stats={trees:I,instancedMeshes:Se.length,hedgeSegments:le,bedRows:xe,lightAnchors:t.length,drawCalls:je},{object3D:e,lightAnchors:t}}var Qh=Ad.train.length.loco,$h=Ad.train.length.coach,eg=Ad.train.couplerGap,tg=Qh/2,ng=$h/2,rg=[0,tg+eg+ng,tg+eg+$h+eg+ng],ig=1+Ad.train.coachCount,ag=(rg[0]+rg[ig-1])/2;tg+rg[ig-1]+ng;var og=[1.9,1.6,1.6],sg=.5,cg=.28,lg=[.45,-.07,-.59],ug=.16,dg=[1.06,-1.06],fg=.18,pg=[.75,-.75],mg=.24,hg=.18,gg=lg[0],_g=(lg[0]+lg[lg.length-1])/2,vg=lg[0]-lg[lg.length-1]+hg*2,yg=.48,bg=.52,xg=1.16,Sg=new bn,Cg=new Bt,wg=new H(1,1,1),Tg=new H,Eg=new H,Dg=new H,Og=new U,kg=new U,Ag=new H(1,0,0);function Q(e,t,n,r=0,i=0,a=0){return Sg.set(r,i,a),Cg.setFromEuler(Sg),Tg.set(e,t,n),new U().compose(Tg,Cg,wg)}var $=(e,t,n)=>new Qi(e,t,n),jg=(e,t,n,r=10)=>new $i(e,t,n,r).rotateX(Math.PI/2),Mg=(e,t,n=14)=>new $i(e,e,t,n).rotateZ(Math.PI/2);function Ng(e,t){let n=rf(`rig`);for(let[r,i]of t)n.add(e,r,i||null);let r=n.build({name:`rig`}).children[0];return r?r.geometry:t[0][0]}function Pg(e,t){let n=Math.min(Math.max(e*.34,.05),.1),r=Ng(Y.train.wheelRim,[[Mg(e,n),null]]),i=[[Mg(e*.7,n*.8,12),null]];if(t)for(let t=0;t<3;t++)i.push([$(.03,e*1.44,.03),new U().makeRotationX(t*Math.PI/3)]);return{rim:r,body:Ng(Y.train.wheel,i)}}function Fg(){let e=new Rn;e.name=`机车`;let t=rf(`loco`),n=rf(`loco-detail`);t.add(Y.train.loco,$(.56,.14,2.7),Q(0,.63,0)),t.add(Y.train.loco,$(.15,.04,2.2),Q(.355,.745,0)),t.add(Y.train.loco,$(.15,.04,2.2),Q(-.355,.745,0)),t.add(Y.train.locoTrim,$(.05,.12,2.16),Q(.43,.66,0)),t.add(Y.train.locoTrim,$(.05,.12,2.16),Q(-.43,.66,0));for(let e of[1,-1]){t.add(Y.train.coupler,$(.78,.16,.07),Q(0,.5,e*1.36)),t.add(Y.train.coupler,$(.09,.16,.1),Q(0,.5,e*1.3));for(let n of[.26,-.26])t.add(Y.train.coupler,jg(.085,.085,.06,8),Q(n,.5,e*1.37)),t.add(Y.train.coupler,jg(.06,.06,.09,8),Q(n,.5,e*1.41))}t.add(Y.train.coupler,$(.7,.36,.05),Q(0,.3,1.36,-.4)),t.add(Y.train.coupler,$(.05,.24,.16),Q(.34,.3,1.32,-.4)),t.add(Y.train.coupler,$(.05,.24,.16),Q(-.34,.3,1.32,-.4)),t.add(Y.train.coupler,$(.7,.22,.05),Q(0,.26,-1.36,.4)),t.add(Y.train.boiler,jg(.26,.26,1.25,14),Q(0,.95,.225));for(let e of[.55,.15,-.25])t.add(Y.train.locoTrim,jg(.275,.275,.05,14),Q(0,.95,e));t.add(Y.train.smokeBox,jg(.27,.27,.4,14),Q(0,.95,1.05)),t.add(Y.train.locoTrim,jg(.285,.285,.06,14),Q(0,.95,1.24)),t.add(Y.train.smokeBox,jg(.245,.245,.06,14),Q(0,.95,1.27)),t.add(Y.train.locoTrim,$(.06,.26,.04),Q(.15,1.02,1.29)),t.add(Y.train.locoTrim,$(.06,.26,.04),Q(-.15,1.02,1.29)),t.add(Y.train.locoTrim,$(.04,.2,.03),Q(0,.95,1.31)),t.add(Y.train.smokeBox,jg(.1,.135,.36,12),Q(0,1.4,1)),t.add(Y.train.locoTrim,jg(.155,.155,.055,12),Q(0,1.6,1)),t.add(Y.train.locoTrim,jg(.115,.115,.07,12),Q(0,1.63,1)),t.add(Y.train.locoTrim,new bo(.15,12,6,0,Math.PI*2,0,Math.PI/2),Q(0,1.21,.05)),t.add(Y.train.locoTrim,jg(.1,.1,.16,10),Q(0,1.29,-.4)),t.add(Y.train.locoTrim,new bo(.1,10,5,0,Math.PI*2,0,Math.PI/2),Q(0,1.37,-.4)),n.add(Y.train.brass,jg(.028,.028,.1,8),Q(.06,1.31,-.62)),n.add(Y.train.brass,jg(.028,.028,.1,8),Q(-.06,1.31,-.62)),n.add(Y.train.brass,jg(.035,.035,.17,8),Q(.1,1.32,-.7)),t.add(Y.train.loco,$(.62,.76,.6),Q(0,1.08,-.7)),t.add(Y.train.loco,$(.62,.3,.06),Q(0,.85,-.4)),t.add(Y.train.locoTrim,$(.7,.05,.74),Q(0,1.485,-.7)),t.add(Y.train.locoTrim,$(.22,.05,.22),Q(0,1.51,-.7)),t.add(Y.train.loco,$(.6,.62,.4),Q(0,.98,-1.2)),t.add(Y.train.smokeBox,$(.5,.1,.3),Q(0,1.3,-1.2)),n.add(Y.train.glass,$(.02,.3,.34),Q(.315,1.22,-.7)),n.add(Y.train.glass,$(.02,.3,.34),Q(-.315,1.22,-.7)),n.add(Y.train.glass,$(.16,.26,.02),Q(.14,1.22,-.39)),n.add(Y.train.glass,$(.16,.26,.02),Q(-.14,1.22,-.39)),n.add(Y.train.brass,new $i(.015,.015,.22,6),Q(.32,1,-.44)),n.add(Y.train.brass,new $i(.015,.015,.22,6),Q(-.32,1,-.44)),n.add(Y.train.brass,jg(.017,.017,1.05,6),Q(.265,1.16,.2)),n.add(Y.train.brass,jg(.017,.017,1.05,6),Q(-.265,1.16,.2));for(let e of[.75,-.05])n.add(Y.train.brass,new $i(.014,.014,.26,6),Q(.275,1,e)),n.add(Y.train.brass,new $i(.014,.014,.26,6),Q(-.275,1,e));t.add(Y.train.loco,$(.2,.3,.28),Q(.5,.48,1.3)),t.add(Y.train.loco,$(.2,.3,.28),Q(-.5,.48,1.3)),t.add(Y.train.locoTrim,$(.22,.32,.05),Q(.5,.48,1.42)),t.add(Y.train.locoTrim,$(.22,.32,.05),Q(-.5,.48,1.42));for(let e of[.5,-.5])t.add(Y.train.locoTrim,$(.09,.02,.56),Q(e,.41,.87)),t.add(Y.train.locoTrim,$(.09,.02,.56),Q(e,.55,.87));t.add(Y.train.loco,jg(.09,.09,.15,10),Q(0,1.34,1.16)),t.add(Y.train.locoTrim,$(.06,.14,.06),Q(0,1.27,1.16)),t.add(Y.train.loco,jg(.055,.055,.07,8),Q(0,1.16,-1.4)),n.add(Y.train.headlamp,jg(.075,.075,.03,10),Q(0,1.34,1.245)),n.add(Y.train.tailLamp,jg(.045,.045,.03,8),Q(0,1.16,-1.437)),n.add(Y.train.numberPlate,$(.3,.16,.02),Q(.318,1.02,-.7)),n.add(Y.train.numberPlate,$(.3,.16,.02),Q(-.318,1.02,-.7)),n.add(Y.train.numberPlate,$(.16,.18,.02),Q(0,1.02,1.3)),e.add(t.build({name:`机车主体`})),e.add(n.build({name:`机车小件`,castShadow:!1,receiveShadow:!1}));let r={};r.couplingRod=new Ai(Ng(Y.rail.steel,[[$(.04,.07,vg),Q(.585,0,0)],[$(.04,.07,vg),Q(-.585,0,0)]]),Y.rail.steel),r.mainRod=new Ai(Ng(Y.rail.steel,[[$(.035,.06,bg),Q(.5,0,0)],[$(.035,.06,bg),Q(-.5,0,0)]]),Y.rail.steel),r.pistonRod=new Ai(Ng(Y.rail.steelDark,[[jg(.022,.022,1,8),Q(.5,0,0)],[jg(.022,.022,1,8),Q(-.5,0,0)]]),Y.rail.steelDark),r.crosshead=new Ai(Ng(Y.train.brass,[[$(.1,.16,.13),Q(.5,0,0)],[$(.1,.16,.13),Q(-.5,0,0)]]),Y.train.brass);for(let t of[r.couplingRod,r.mainRod,r.pistonRod,r.crosshead])t.castShadow=!0,t.receiveShadow=!0,e.add(t);let i=[];for(let e of lg)i.push({x:sg,y:cg,z:e,r:cg,kind:`driver`}),i.push({x:-.5,y:cg,z:e,r:cg,kind:`driver`});for(let e of dg)i.push({x:sg,y:ug,z:e,r:ug,kind:`pilot`}),i.push({x:-.5,y:ug,z:e,r:ug,kind:`pilot`});return{group:e,wheelbase:og[0],slots:i,spin:r}}function Ig(e){let t=new Rn;t.name=`客车${e}`;let n=e%2==1?Y.train.coachA:Y.train.coachB,r=rf(`coach`),i=rf(`coach-detail`);r.add(n,$(1.04,.93,2.42),Q(0,1.085,0)),r.add(Y.train.coachTrim,$(1,.1,2.44),Q(0,.57,0)),r.add(Y.train.coachTrim,$(.04,.16,2.3),Q(.51,.5,0)),r.add(Y.train.coachTrim,$(.04,.16,2.3),Q(-.51,.5,0));let a=new $i(.56,.56,2.44,14,1,!1,Math.PI/2,Math.PI);a.rotateX(Math.PI/2),a.scale(1,.55,1),r.add(Y.train.roof,a,Q(0,1.55,0)),r.add(Y.train.coachTrim,$(.34,.04,2.1),Q(0,1.885,0)),r.add(Y.train.coachTrim,$(.2,.09,.2),Q(0,1.93,.62)),r.add(Y.train.coachTrim,$(.2,.09,.2),Q(0,1.93,-.62));let o=[-.72,-.24,.24,.72];for(let e=0;e<o.length;e++){let t=Y.window.lit[e%2];for(let n of[1,-1])r.add(Y.train.coachTrim,$(.025,.5,.52),Q(n*.5125,1.16,o[e])),i.add(t,$(.02,.42,.44),Q(n*.5325,1.16,o[e]))}for(let e of[1,-1]){r.add(Y.train.coachTrim,$(.5,.8,.04),Q(0,1.13,e*1.23)),i.add(Y.train.glass,$(.26,.3,.02),Q(0,1.3,e*1.255)),r.add(Y.train.coachTrim,$(.52,.05,.12),Q(0,.52,e*1.24)),r.add(Y.train.coachTrim,$(.44,.05,.12),Q(0,.3,e*1.235));for(let t of[.24,-.24])r.add(Y.train.coupler,jg(.075,.075,.05,8),Q(t,.62,e*1.22)),r.add(Y.train.coupler,jg(.055,.055,.1,8),Q(t,.62,e*1.25));r.add(Y.train.coupler,$(.07,.12,.12),Q(0,.62,e*1.235)),r.add(Y.train.coupler,$(.05,.22,.05),Q(.22,.5,e*1.24,.3))}for(let e of pg){r.add(Y.train.coachTrim,$(.94,.1,.7),Q(0,.3,e)),r.add(Y.train.coachTrim,$(.52,.1,.22),Q(0,.35,e));for(let t of[1,-1]){r.add(Y.train.coachTrim,$(.06,.2,.8),Q(t*.42,.28,e));for(let n of[e+mg,e-mg])r.add(Y.train.coachTrim,$(.08,.16,.16),Q(t*.4,.18,n))}}t.add(r.build({name:`客车主体`})),t.add(i.build({name:`客车玻璃`,castShadow:!1,receiveShadow:!1}));let s=[];for(let e of pg)for(let t of[e+mg,e-mg])s.push({x:sg,y:fg,z:t,r:fg,kind:`coach`}),s.push({x:-.5,y:fg,z:t,r:fg,kind:`coach`});return{group:t,wheelbase:og[Math.min(e,og.length-1)],slots:s,spin:null}}function Lg(){let e=Wd(),t=Gd(),n=new Rn;n.name=`列车`;let r=[Fg()];for(let e=0;e<Ad.train.coachCount;e++)r.push(Ig(e+1));let i=[],a=new Map;for(let e=0;e<r.length;e++){let t=r[e],o={group:t.group,wheelbase:t.wheelbase,spin:t.spin,arcS:0,world:new U};i.push(o),n.add(t.group);for(let e of t.slots){let t=a.get(e.kind)||[];t.length||a.set(e.kind,t),t.push({car:o,x:e.x,y:e.y,z:e.z,r:e.r})}}let o=[],s={driver:cg,pilot:ug,coach:fg};for(let[e,t]of a){let r=s[e],i=Pg(r,r>=.2),a=[[i.body,Y.train.wheel,`轮盘`],[i.rim,Y.train.wheelRim,`轮缘`]];for(let[r,i,s]of a){let a=new Hi(r,i,t.length);a.frustumCulled=!1,a.castShadow=!0,a.receiveShadow=!0,a.name=`车轮-${e}-${s}`,n.add(a),o.push({mesh:a,slots:t})}}let c=Ad.render.fixedStep,l=Ad.train.brakeDistance,u=Ad.train.brakeDistance*2,d=Ad.train.stationStopSeconds,f=Ad.train.departSeconds,p=uf.stopArc01*t,m=0,h=Ad.train.speed,g=`run`,_=!0,v=0,y=0,b=0,x=e=>{let n=e%t;return n<0?n+t:n},S=e=>{let t=e%1;return t<0?t+1:t},C=()=>x(p-m+ag);function w(n){let r=n.wheelbase/2;e.getPointAt(S((n.arcS+r)/t),Eg),e.getPointAt(S((n.arcS-r)/t),Dg),n.group.position.set((Eg.x+Dg.x)*.5,Bd.railTopY,(Eg.z+Dg.z)*.5),Sg.set(0,Math.atan2(Eg.x-Dg.x,Eg.z-Dg.z),0),n.group.quaternion.setFromEuler(Sg),n.world.compose(n.group.position,n.group.quaternion,wg)}function T(){for(let e of o){let t=e.slots;for(let n=0;n<t.length;n++){let r=t[n];Cg.setFromAxisAngle(Ag,r.car.arcS/r.r),Tg.set(r.x,r.y,r.z),Og.compose(Tg,Cg,wg),kg.multiplyMatrices(r.car.world,Og),e.mesh.setMatrixAt(n,kg)}e.mesh.instanceMatrix.needsUpdate=!0}}function E(e){let t=e.spin;if(!t)return;let n=e.arcS/cg,r=-.18*Math.cos(n),i=-.18*Math.sin(n);t.couplingRod.position.set(0,cg+r,_g+i);let a=cg+r,o=gg+i,s=yg-a,c=o+Math.sqrt(Math.max(bg*bg-s*s,1e-6));t.crosshead.position.set(0,yg,c),t.mainRod.position.set(0,(yg+a)*.5,(c+o)*.5),t.mainRod.rotation.x=Math.atan2(-s,o-c),t.pistonRod.position.set(0,yg,(xg+c)*.5),t.pistonRod.scale.z=Math.max(Math.abs(c-xg),.02)}function D(){for(let e=0;e<i.length;e++)i[e].arcS=m-rg[e],w(i[e]);T(),E(i[0]),b=x(m-ag)/t}function O(){m=x(p+ag),g=`dwell`,v=0,_=!1}function k(e){if(g===`run`){let t=C();m+=h*e;let n=C();n>t?O():_&&n<=l?(g=`braking`,_=!1):!_&&n>u&&(_=!0)}else if(g===`braking`){let t=C(),n=h*Math.sqrt(Math.min(t/l,1));if(!(n*e<t)){O();return}m+=n*e}else if(g===`dwell`)v+=e,v>=d&&(g=`depart`,y=0);else{y+=e;let t=Math.min(y/f,1),n=t*t*(3-2*t);m+=h*n*e,t>=1&&(g=`run`)}}function A(){m=_f.trainArc01*t,g=`run`,v=0,y=0,_=C()>l,D()}A();function j(e){if(e>0){let t=m,n=e;for(;n>1e-9;){let e=n>c?c:n;k(e),n-=e}m!==t&&D()}return{arc:b,stopped:g===`dwell`}}return{object3D:n,update:j,setSpeed(e){h=Number.isFinite(e)?Math.max(0,e):0},getSpeed(){return h},reset:A,isStopped(){return g===`dwell`}}}var Rg=220,zg=70,Bg=200,Vg=46,Hg=new H(-2,0,-.4),Ug=[`sunIntensity`,`sunElevation`,`sunAzimuth`,`hemiIntensity`,`ambientIntensity`,`fogNear`,`fogFar`,`environmentIntensity`,`emissive`,`lampLightIntensity`,`sunGlow`,`shadowIntensity`,`exposure`],Wg=[`sunColor`,`hemiSky`,`hemiGround`,`ambientColor`,`skyTop`,`skyHorizon`,`skyBottom`,`fogColor`];function Gg(e,t){return{sunColor:e.sunColor,sunIntensity:e.sunIntensity,sunElevation:e.sunElevationDeg,sunAzimuth:e.sunAzimuthDeg,hemiSky:e.hemiSky,hemiGround:e.hemiGround,hemiIntensity:e.hemiIntensity,ambientColor:e.ambientColor,ambientIntensity:e.ambientIntensity,skyTop:e.skyTop,skyHorizon:e.skyHorizon,skyBottom:e.skyBottom,fogColor:e.fogColor,fogNear:e.fogNear,fogFar:e.fogFar,environmentIntensity:e.environmentIntensity,emissive:e.emissive,lampLightIntensity:e.lampLightIntensity,sunGlow:e.sunGlow,shadowIntensity:e.shadowIntensity,exposure:Ad.render.exposure[t]??1}}function Kg(){let e={};for(let t=0;t<Ug.length;t++)e[Ug[t]]=0;for(let t=0;t<Wg.length;t++)e[Wg[t]]=0;return e}function qg(e,t){for(let n=0;n<Ug.length;n++)e[Ug[n]]=t[Ug[n]];for(let n=0;n<Wg.length;n++)e[Wg[n]]=t[Wg[n]];return e}function Jg(e,t,n,r){for(let i=0;i<Ug.length;i++){let a=Ug[i];e[a]=t[a]+(n[a]-t[a])*r}for(let i=0;i<Wg.length;i++){let a=Wg[i];e[a]=bf(t[a],n[a],r)}return e}function Yg(e){let t=e%360;return t>180?t-=360:t<-180&&(t+=360),t}var Xg=new H;function Zg(e,t,n){let r=zt.degToRad(e),i=zt.degToRad(t),a=Math.cos(r);return n.set(a*Math.sin(i),Math.sin(r),a*Math.cos(i))}function Qg(e,t,n,r){if(e>=.5){let r=(e-.5)*2;return bf(n,t,r*r*(3-2*r))}let i=(.5-e)*2;return bf(n,r,i*i*(3-2*i))}var $g=new W;function e_(e,t,n,r,i,a){for(let n=0;n<e.length;n++){$g.setHex(Qg((e[n]+1)*.5,r,i,a));let o=n*3;t[o]=$g.r,t[o+1]=$g.g,t[o+2]=$g.b}n.needsUpdate=!0}function t_(e,t,n){let r=new bo(e,t,n),i=r.attributes.position,a=i.count,o=new Float32Array(a);for(let t=0;t<a;t++)o[t]=i.getY(t)/e;let s=new Float32Array(a*3),c=new Er(s,3);return c.setUsage(et),r.setAttribute(`color`,c),{geo:r,heights:o,array:s,attr:c}}function n_(){let e=document.createElement(`canvas`);e.width=128,e.height=128;let t=e.getContext(`2d`),n=t.createRadialGradient(64,64,0,64,64,64);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.18,`rgba(255,255,255,0.72)`),n.addColorStop(.45,`rgba(255,255,255,0.2)`),n.addColorStop(.72,`rgba(255,255,255,0.05)`),n.addColorStop(1,`rgba(255,255,255,0)`),t.fillStyle=n,t.fillRect(0,0,128,128);let r=new Ji(e);return r.colorSpace=Je,r}function r_(e,t){let n=new fc(e),r=new qn,i=t_(40,32,24);e_(i.heights,i.array,i.attr,t.skyTop,t.skyHorizon,t.skyBottom);let a=new vi({vertexColors:!0,side:1,toneMapped:!1});r.add(new Ai(i.geo,a));let o=new yo(14,14),s=new vi({toneMapped:!1});s.color.setHex(t.sunColor).multiplyScalar(7);let c=new Ai(o,s);Zg(t.sunElevationDeg,t.sunAzimuthDeg,Xg),c.position.copy(Xg).multiplyScalar(30),c.lookAt(0,0,0),r.add(c);let l=n.fromScene(r,0,.5,120).texture;return i.geo.dispose(),a.dispose(),o.dispose(),s.dispose(),n.dispose(),r.clear(),l}function i_({scene:e,renderer:t}){let n=new Rn;n.name=`lighting`;let r=new vs(16777215,0);r.castShadow=!0;let i=Ad.render.shadowMapSize;r.shadow.mapSize.set(i,i);let a=r.shadow.camera;a.left=-26,a.right=26,a.top=21,a.bottom=-21,a.near=1,a.far=170,a.updateProjectionMatrix(),r.shadow.bias=-6e-4,r.shadow.normalBias=.02,r.target.position.copy(Hg),e.add(r),e.add(r.target);let o=new ts(16777215,0,0);e.add(o);let s=new ys(16777215,0);e.add(s);let c=t_(Rg,32,24),l=new vi({vertexColors:!0,side:1,fog:!1,depthWrite:!1}),u=new Ai(c.geo,l);u.frustumCulled=!1,u.renderOrder=-1,n.add(u);let d=new Zr({map:n_(),color:16777215,transparent:!0,opacity:0,blending:2,depthWrite:!1,fog:!1}),f=new di(d);f.scale.setScalar(Vg),n.add(f);let p=new Kn(0,1,1e3);e.fog=p,e.background=null;let m=yf[Ad.timeOfDay.default]?Ad.timeOfDay.default:`evening`;e.environment=r_(t,yf[m]);let h=Ad.nightLights.maxPointLights,g=Math.min(h,Ad.nightLights.activePointLights),_=[],v=[],y=m,b=null,x=null,S=1,C=Gg(yf[m],m),w=NaN,T=NaN,E=-1,D=-1,O=-1;function k(n){Zg(n.sunElevation,n.sunAzimuth,Xg),r.position.copy(Hg).addScaledVector(Xg,zg),r.color.setHex(n.sunColor),r.intensity=n.sunIntensity,r.shadow.intensity=n.shadowIntensity,o.color.setHex(n.hemiSky),o.groundColor.setHex(n.hemiGround),o.intensity=n.hemiIntensity,s.color.setHex(n.ambientColor),s.intensity=n.ambientIntensity,p.color.setHex(n.fogColor),p.near=n.fogNear,p.far=n.fogFar,e.environmentIntensity=n.environmentIntensity,n.environmentIntensity!==w&&(w=n.environmentIntensity,_p(n.environmentIntensity)),n.emissive!==T&&(T=n.emissive,vp(n.emissive)),t.toneMappingExposure=n.exposure,(n.skyTop!==E||n.skyHorizon!==D||n.skyBottom!==O)&&(E=n.skyTop,D=n.skyHorizon,O=n.skyBottom,e_(c.heights,c.array,c.attr,n.skyTop,n.skyHorizon,n.skyBottom)),f.position.copy(Hg).addScaledVector(Xg,Bg),d.color.setHex(n.sunColor),d.opacity=n.sunGlow,f.visible=n.sunGlow>.002;for(let e=0;e<_.length;e++){let t=_[e],r=e<g?v[e]*n.lampLightIntensity:0;t.intensity=r,t.visible=r>0}}function A(e){S>=1||b===null||(S=Math.min(1,S+(e>0?e:0)/Ad.timeOfDay.transitionSeconds),S>=1?(S=1,qg(C,x),b=null):Jg(C,b,x,S),k(C))}function j(e){let t=yf[e];t&&(y=e,b===null&&(b=Kg()),qg(b,C),x=Gg(t,e),x.sunAzimuth=b.sunAzimuth+Yg(x.sunAzimuth-b.sunAzimuth),S=0)}function M(t){for(let t=0;t<_.length;t++)e.remove(_[t]),_[t].dispose();_.length=0,v.length=0;let n=(t??[]).slice();n.sort((e,t)=>(t.priority||0)-(e.priority||0)||e.position.distanceToSquared(Hg)-t.position.distanceToSquared(Hg));let r=Math.min(n.length,h);for(let t=0;t<r;t++){let r=n[t],i=new hs(r.color,0,r.distance,r.decay??2);i.position.copy(r.position),i.castShadow=!1,e.add(i),_.push(i),v.push(r.intensity||0)}k(C)}return k(C),{object3D:n,update:A,setTimeOfDay:j,setLightAnchors:M,getMode:()=>y}}var a_={day:`白天`,evening:`傍晚`,night:`夜晚`},o_=[[`暂停`,`is-paused`],[`停靠`,`is-stopped`]];function s_(e,t={}){let n=e||document.body,r=Ad.train.speedMultiplier,i=r.default,a=document.createElement(`section`);a.className=`panel`,a.innerHTML=`
    <div class="panel__head">
      <span class="panel__title">控 制 台</span>
      <span class="panel__status is-running" data-role="status">运行中</span>
    </div>
    <div class="panel__row">
      <button type="button" class="btn" data-role="pause">暂停</button>
      <button type="button" class="btn" data-role="reset">复位</button>
    </div>
    <div class="panel__field">
      <div class="panel__label"><span>速度倍率</span><span class="panel__value" data-role="speed-value">×1.00</span></div>
      <input class="slider" type="range" data-role="speed" aria-label="列车速度倍率"
        min="${r.min}" max="${r.max}" step="${r.step}" value="${r.default}" />
      <div class="panel__sub" data-role="speed-units">${(Ad.train.speed*r.default).toFixed(2)} 单位/秒</div>
    </div>
    <div class="panel__field">
      <div class="panel__label"><span>时段</span></div>
      <div class="segmented" data-role="modes">
        ${kd.map(e=>`<button type="button" class="btn" data-mode="${e}">${a_[e]||e}</button>`).join(``)}
      </div>
    </div>
  `,n.appendChild(a);let o=a.querySelector(`[data-role="pause"]`),s=a.querySelector(`[data-role="reset"]`),c=a.querySelector(`[data-role="speed"]`),l=a.querySelector(`[data-role="speed-value"]`),u=a.querySelector(`[data-role="speed-units"]`),d=a.querySelector(`[data-role="status"]`),f=Array.from(a.querySelectorAll(`[data-mode]`));function p(){let e=r.max-r.min,t=e>0?(i-r.min)/e*100:0;c.style.setProperty(`--fill`,`${t.toFixed(2)}%`)}o.addEventListener(`click`,()=>{o.blur(),t.onTogglePause&&t.onTogglePause()}),s.addEventListener(`click`,()=>{s.blur(),t.onReset&&t.onReset()}),c.addEventListener(`input`,()=>{let e=Number.parseFloat(c.value);Number.isFinite(e)&&t.onSpeedChange&&t.onSpeedChange(e)}),c.addEventListener(`change`,()=>{c.blur()});for(let e of f)e.addEventListener(`click`,()=>{e.blur();let n=e.dataset.mode;t.onModeChange&&t.onModeChange(n)});return p(),{setPaused(e){let t=!!e;o.textContent=t?`继续`:`暂停`,o.classList.toggle(`is-active`,t),o.setAttribute(`aria-pressed`,t?`true`:`false`)},setSpeed(e,t){i=e;let n=String(e);c.value!==n&&(c.value=n),l.textContent=`×${e.toFixed(2)}`,u.textContent=`${t.toFixed(2)} 单位/秒`,p()},setMode(e){for(let t of f){let n=t.dataset.mode===e;t.classList.toggle(`is-active`,n),t.setAttribute(`aria-pressed`,n?`true`:`false`)}},setStatus(e){d.textContent=e;let t=`is-running`;for(let[n,r]of o_)if(e.includes(n)){t=r;break}d.classList.remove(`is-running`,`is-paused`,`is-stopped`),d.classList.add(t)},getSpeedMultiplier(){return i}}}var c_=document.querySelector(`#app`),l_=new ad({antialias:!0,powerPreference:`high-performance`});l_.setPixelRatio(Math.min(window.devicePixelRatio,Ad.render.maxPixelRatio)),l_.setSize(window.innerWidth,window.innerHeight),l_.outputColorSpace=Je,l_.toneMapping=4,l_.shadowMap.enabled=!0,l_.shadowMap.type=1,c_.appendChild(l_.domElement);var u_=new qn,d_=new H().fromArray(Ad.camera.target),f_=new H().fromArray(Ad.camera.direction).normalize(),p_=new gs(-1,1,1,-1,Ad.camera.near,Ad.camera.far),m_={minX:-22,maxX:22,minY:-1.5,maxY:.6,minZ:-16.5,maxZ:16.5},h_=[];for(let e of[m_.minX,m_.maxX])for(let t of[m_.minY,m_.maxY])for(let n of[m_.minZ,m_.maxZ])h_.push(new H(e,t,n));var g_=new H,__=new H,v_=new H,y_=new V;function b_(){p_.updateMatrixWorld(!0),g_.setFromMatrixColumn(p_.matrixWorld,0),__.setFromMatrixColumn(p_.matrixWorld,1);let e=0,t=0;for(let n of h_)v_.subVectors(n,S_.target),e=Math.max(e,Math.abs(v_.dot(g_))),t=Math.max(t,Math.abs(v_.dot(__)));l_.getSize(y_);let n=y_.x/Math.max(1,y_.y),r=Math.max(t,e/n)*Ad.camera.fitMargin,i=r*n;p_.left=-i,p_.right=i,p_.top=r,p_.bottom=-r,p_.updateProjectionMatrix()}function x_(){p_.position.copy(d_).addScaledVector(f_,Ad.camera.distance),S_.target.copy(d_),S_.update(),b_()}var S_=new gd(p_,l_.domElement);S_.enablePan=!1,S_.enableDamping=!0,S_.dampingFactor=Ad.camera.damping,S_.rotateSpeed=Ad.camera.rotateSpeed,S_.zoomSpeed=Ad.camera.zoomSpeed,S_.minPolarAngle=zt.degToRad(Ad.camera.minPolarAngleDeg),S_.maxPolarAngle=zt.degToRad(Ad.camera.maxPolarAngleDeg),S_.minZoom=Ad.camera.zoom.min,S_.maxZoom=Ad.camera.zoom.max,S_.target.copy(d_),p_.zoom=Ad.camera.zoom.default,S_.addEventListener(`change`,b_),x_();var C_=rm(),w_=wm(),T_=zm(),E_=Vh(),D_=Zh(),O_=Lg(),k_=i_({scene:u_,renderer:l_}),A_=O_.update(0);for(let e of[C_,w_,T_,E_,D_,O_,k_])e&&e.object3D&&u_.add(e.object3D);cp(l_.capabilities.getMaxAnisotropy()),k_.setLightAnchors([...T_.lightAnchors||[],...D_.lightAnchors||[]]),k_.setTimeOfDay(_f.timeOfDay);var j_={paused:!1,speedMultiplier:Ad.train.speedMultiplier.default,mode:_f.timeOfDay},M_=s_(document.querySelector(`#ui`),{onTogglePause(){F_(!j_.paused)},onSpeedChange(e){I_(e)},onReset(){R_()},onModeChange(e){L_(e)}}),N_=``;function P_(){let e=j_.paused?`已暂停`:O_.isStopped()?`停靠站台`:`运行中`;e!==N_&&(N_=e,M_.setStatus(e))}function F_(e){j_.paused=!!e,M_.setPaused(j_.paused),P_()}function I_(e){let{min:t,max:n}=Ad.train.speedMultiplier;j_.speedMultiplier=zt.clamp(e,t,n);let r=Ad.train.speed*j_.speedMultiplier;O_.setSpeed(r),M_.setSpeed(j_.speedMultiplier,r)}function L_(e){j_.mode=e,k_.setTimeOfDay(e),M_.setMode(e)}function R_(){j_.paused=!1,j_.speedMultiplier=Ad.train.speedMultiplier.default,j_.mode=_f.timeOfDay,O_.reset(),O_.setSpeed(Ad.train.speed*j_.speedMultiplier),k_.setTimeOfDay(j_.mode),p_.zoom=Ad.camera.zoom.default,x_(),B_.reset(),M_.setPaused(!1),M_.setSpeed(j_.speedMultiplier,Ad.train.speed*j_.speedMultiplier),M_.setMode(j_.mode),P_()}window.addEventListener(`keydown`,e=>{e.repeat||e.altKey||e.ctrlKey||e.metaKey||(e.code===`Space`?(e.preventDefault(),F_(!j_.paused)):(e.key===`r`||e.key===`R`)&&(e.preventDefault(),R_()))});function z_(){let e=Math.max(1,window.innerWidth),t=Math.max(1,window.innerHeight);l_.setPixelRatio(Math.min(window.devicePixelRatio,Ad.render.maxPixelRatio)),l_.setSize(e,t),b_()}window.addEventListener(`resize`,z_);var B_=new ws;B_.connect(document);var V_=0,H_=0,U_=0,W_=document.querySelector(`#loader`),G_=!1;function K_(){!G_&&W_&&(G_=!0,W_.classList.add(`is-hidden`),window.setTimeout(()=>W_.remove(),620))}I_(j_.speedMultiplier),L_(j_.mode),M_.setPaused(j_.paused),P_();function q_(e){requestAnimationFrame(q_),B_.update(e);let t=Math.min(B_.getDelta(),Ad.render.maxDelta);V_+=t,U_=t,j_.paused||(A_=O_.update(t)),k_.update(t,V_),C_.update(t,V_),S_.update(),l_.render(u_,p_),P_(),H_<2&&(H_+=1,H_===2&&K_())}requestAnimationFrame(q_);var J_=1e6;function Y_(e){return e?e.name?`${e.type}:${e.name}`:e.type:`none`}function X_(){let e=[],t=[],n=[],r=[],i=[],a={objects:0,meshes:0,triangles:0,lines:0,points:0},o=(n,r,a,o)=>{let s=n.attributes&&n.attributes.position;if(!s)return;s.count===0&&t.push({path:a,type:r,material:Y_(o)});let c=Math.min(s.array.length,J_);c<s.array.length&&i.push({path:a,type:n.type,checkedComponents:c,totalComponents:s.array.length});let l=0,u=0;for(let e=0;e<c;e++){let t=s.array[e];Number.isNaN(t)?l+=1:Number.isFinite(t)||(u+=1)}(l>0||u>0)&&e.push({path:a,type:n.type,uuid:n.uuid,material:Y_(o),vertexCount:s.count,nanVerts:l,infVerts:u})},s=(e,t)=>{if(a.objects+=1,e.isMesh){a.meshes+=1;let i=Array.isArray(e.material)?e.material:[e.material];for(let a of i)a?a.isMeshBasicMaterial&&r.push({path:t,type:e.type,material:a.type,defaultish:!a.map&&!a.name&&!!a.color&&a.color.getHex()===16777215}):n.push({path:t,type:e.type});let s=e.geometry,c=s&&s.attributes&&s.attributes.position;if(c){let n=e.isInstancedMesh?e.count:1,r=s.index?s.index.count:c.count;a.triangles+=Math.round(r/3*n),o(s,e.type,t,i[0])}}else e.isLine||e.isLineSegments||e.isLineLoop?a.lines+=1:e.isPoints&&(a.points+=1);let i=e.children||[];for(let e=0;e<i.length;e++){let n=i[e],r=n.name||`${n.type}[${e}]`;s(n,t?`${t}/${r}`:r)}};for(let e=0;e<u_.children.length;e++){let t=u_.children[e];s(t,t.name||`${t.type}[${e}]`)}let c=l_.info;return{objects:a.objects,meshes:a.meshes,triangles:a.triangles,lines:a.lines,points:a.points,drawCalls:c.render.calls,trianglesRendered:c.render.triangles,programs:c.programs?c.programs.length:0,textures:c.memory.textures,geometries:c.memory.geometries,nanGeometries:e,emptyMeshes:t,missingMaterials:n,defaultMaterials:r,truncatedGeometries:i,lastUpdate:{dt:U_,elapsed:V_}}}window.__railway={version:`1.0.0`,state:()=>({paused:j_.paused,speedMultiplier:j_.speedMultiplier,speed:O_.getSpeed(),mode:k_.getMode(),trainArc01:A_.arc,trainStopped:A_.stopped}),camera:()=>({position:[p_.position.x,p_.position.y,p_.position.z],zoom:p_.zoom,target:[S_.target.x,S_.target.y,S_.target.z],ortho:[p_.left,p_.right,p_.top,p_.bottom]}),audit:()=>X_()};