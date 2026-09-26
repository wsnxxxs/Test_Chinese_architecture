(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kl="186",Ts={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},bs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},tp=0,Fh=1,ep=2,l0=3,c0=0,xr=1,np=2,pr=3,Ji=0,on=1,$n=2,ti=0,vr=1,Cs=2,Bh=3,zh=4,ip=5,h0=6,Ss=100,sp=101,rp=102,op=103,ap=104,lp=200,cp=201,hp=202,up=203,iu=204,su=205,fp=206,dp=207,pp=208,mp=209,gp=210,_p=211,xp=212,vp=213,yp=214,nl=0,il=1,sl=2,Mr=3,rl=4,ol=5,al=6,ll=7,Bo=0,Mp=1,Sp=2,ei=0,$l=1,Jl=2,jl=3,zo=4,Ql=5,tc=6,ec=7,kh="attached",bp="detached",nc=300,pi=301,ji=302,ao=303,lo=304,Lr=306,yo=1e3,En=1001,Mo=1002,Fe=1003,ru=1004,u0=1004,mr=1005,f0=1005,Re=1006,co=1007,d0=1007,fi=1008,p0=1008,dn=1009,ou=1010,au=1011,Sr=1012,ic=1013,kn=1014,mn=1015,an=1016,sc=1017,rc=1018,br=1020,lu=35902,cu=35899,hu=1021,uu=1022,gn=1023,mi=1026,Zi=1027,oc=1028,ko=1029,Qi=1030,ac=1031,m0=1032,lc=1033,ho=33776,uo=33777,fo=33778,po=33779,cl=35840,hl=35841,ul=35842,fl=35843,dl=36196,pl=37492,ml=37496,gl=37488,_l=37489,So=37490,xl=37491,vl=37808,yl=37809,Ml=37810,Sl=37811,bl=37812,wl=37813,El=37814,Tl=37815,Al=37816,Rl=37817,Cl=37818,Pl=37819,Il=37820,Ll=37821,Dl=36492,Nl=36494,Ol=36495,Ul=36283,Fl=36284,bo=36285,Bl=36286,wp=2200,Ep=2201,Tp=2202,wo=2300,zl=2301,qa=2302,Vh=2303,ws=2400,Es=2401,Eo=2402,cc=2500,fu=2501,g0=0,_0=1,x0=2,Ap=3200,v0=3201,y0=3202,M0=3203,Di=0,Rp=1,Ti="",Sn="srgb",To="srgb-linear",Ao="linear",_e="srgb",S0="",b0="rg",w0="ga",E0=0,Za=7680,T0=7681,A0=7682,R0=7683,C0=34055,P0=34056,I0=5386,L0=512,D0=513,N0=514,O0=515,U0=516,F0=517,B0=518,Cp=519,Pp=512,Ip=513,Lp=514,hc=515,Dp=516,Np=517,uc=518,Op=519,fc=35044,z0=35048,k0=35040,V0=35045,G0=35049,H0=35041,W0=35046,X0=35050,Y0=35042,q0="100",Gh="300 es",Dn=2e3,Ps=2001,Z0={COMPUTE:"compute",RENDER:"render"},K0={PERSPECTIVE:"perspective",LINEAR:"linear",FLAT:"flat"},$0={NORMAL:"normal",CENTROID:"centroid",SAMPLE:"sample",FIRST:"first",EITHER:"either"},J0={TEXTURE_COMPARE:"depthTextureCompare"},j0={NONE:0,SHARED:1,FULL:2};function Q0(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}const tg={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function gr(s,t){return new tg[s](t)}function Up(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Ro(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Fp(){const s=Ro("canvas");return s.style.display="block",s}const nf={};let ts=null;function eg(s){ts=s}function ng(){return ts}function Co(...s){const t="THREE."+s.shift();ts?ts("log",t,...s):console.log(t,...s)}function Bp(s){const t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Et(...s){s=Bp(s);const t="THREE."+s.shift();if(ts)ts("warn",t,...s);else{const e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Kt(...s){s=Bp(s);const t="THREE."+s.shift();if(ts)ts("error",t,...s);else{const e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Ii(...s){const t=s.join(" ");t in nf||(nf[t]=!0,Et(...s))}function ig(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const sg={[nl]:il,[sl]:al,[rl]:ll,[Mr]:ol,[il]:nl,[al]:sl,[ll]:rl,[ol]:Mr};class si{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let sf=1234567;const As=Math.PI/180,wr=180/Math.PI;function Nn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nn[s&255]+nn[s>>8&255]+nn[s>>16&255]+nn[s>>24&255]+"-"+nn[t&255]+nn[t>>8&255]+"-"+nn[t>>16&15|64]+nn[t>>24&255]+"-"+nn[e&63|128]+nn[e>>8&255]+"-"+nn[e>>16&255]+nn[e>>24&255]+nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]).toLowerCase()}function ne(s,t,e){return Math.max(t,Math.min(e,s))}function du(s,t){return(s%t+t)%t}function rg(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function og(s,t,e){return s!==t?(e-s)/(t-s):0}function mo(s,t,e){return(1-e)*s+e*t}function ag(s,t,e,n){return mo(s,t,1-Math.exp(-e*n))}function lg(s,t=1){return t-Math.abs(du(s,t*2)-t)}function cg(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function hg(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function ug(s,t){return s+Math.floor(Math.random()*(t-s+1))}function fg(s,t){return s+Math.random()*(t-s)}function dg(s){return s*(.5-Math.random())}function pg(s){s!==void 0&&(sf=s);let t=sf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function mg(s){return s*As}function gg(s){return s*wr}function _g(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function xg(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function vg(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function yg(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),f=r((n-t)/2),p=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*d,l*u,a*c);break;case"YZY":s.set(l*u,a*h,l*d,a*c);break;case"ZXZ":s.set(l*d,l*u,a*h,a*c);break;case"XZX":s.set(a*h,l*p,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*p,a*c);break;case"ZYZ":s.set(l*p,l*f,a*h,a*c);break;default:Et("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function pn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ae(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const fn={DEG2RAD:As,RAD2DEG:wr,generateUUID:Nn,clamp:ne,euclideanModulo:du,mapLinear:rg,inverseLerp:og,lerp:mo,damp:ag,pingpong:lg,smoothstep:cg,smootherstep:hg,randInt:ug,randFloat:fg,randFloatSpread:dg,seededRandom:pg,degToRad:mg,radToDeg:gg,isPowerOfTwo:_g,ceilPowerOfTwo:xg,floorPowerOfTwo:vg,setQuaternionFromProperEuler:yg,normalize:ae,denormalize:pn};class it{static{it.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qe{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=r[o+0],f=r[o+1],p=r[o+2],_=r[o+3];if(d!==_||l!==u||c!==f||h!==p){let m=l*u+c*f+h*p+d*_;m<0&&(u=-u,f=-f,p=-p,_=-_,m=-m);let g=1-a;if(m<.9995){const M=Math.acos(m),S=Math.sin(M);g=Math.sin(g*M)/S,a=Math.sin(a*M)/S,l=l*g+u*a,c=c*g+f*a,h=h*g+p*a,d=d*g+_*a}else{l=l*g+u*a,c=c*g+f*a,h=h*g+p*a,d=d*g+_*a;const M=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=M,c*=M,h*=M,d*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[o],u=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+h*d+l*f-c*u,t[e+1]=l*p+h*u+c*d-a*f,t[e+2]=c*p+h*f+a*u-l*d,t[e+3]=h*p-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(r/2),u=l(n/2),f=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:Et("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ne(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{static{C.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(rf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(rf.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=i+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Yc.copy(this).projectOnVector(t),this.sub(Yc)}reflect(t){return this.sub(Yc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yc=new C,rf=new Qe;class re{static{re.prototype.isMatrix3=!0}constructor(t,e,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],_=i[0],m=i[3],g=i[6],M=i[1],S=i[4],v=i[7],b=i[2],E=i[5],R=i[8];return r[0]=o*_+a*M+l*b,r[3]=o*m+a*S+l*E,r[6]=o*g+a*v+l*R,r[1]=c*_+h*M+d*b,r[4]=c*m+h*S+d*E,r[7]=c*g+h*v+d*R,r[2]=u*_+f*M+p*b,r[5]=u*m+f*S+p*E,r[8]=u*g+f*v+p*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,p=e*d+n*u+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/p;return t[0]=d*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=u*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Ii("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(qc.makeScale(t,e)),this}rotate(t){return Ii("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(qc.makeRotation(-t)),this}translate(t,e){return Ii("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(qc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const qc=new re,of=new re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),af=new re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Mg(){const s={enabled:!0,workingColorSpace:To,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===_e&&(i.r=Li(i.r),i.g=Li(i.g),i.b=Li(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_e&&(i.r=yr(i.r),i.g=yr(i.g),i.b=yr(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ti?Ao:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return Ii("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return Ii("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[To]:{primaries:t,whitePoint:n,transfer:Ao,toXYZ:of,fromXYZ:af,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Sn},outputColorSpaceConfig:{drawingBufferColorSpace:Sn}},[Sn]:{primaries:t,whitePoint:n,transfer:_e,toXYZ:of,fromXYZ:af,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Sn}}}),s}const he=Mg();function Li(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function yr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Hs;class zp{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Hs===void 0&&(Hs=Ro("canvas")),Hs.width=t.width,Hs.height=t.height;const i=Hs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Hs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ro("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Li(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Li(e[n]/255)*255):e[n]=Li(e[n]);return{data:e,width:t.width,height:t.height}}else return Et("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Sg=0;class Ci{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Sg++}),this.uuid=Nn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Zc(i[o].image)):r.push(Zc(i[o]))}else r=Zc(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Zc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?zp.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Et("Texture: Unable to serialize Texture."),{})}class bg extends Ci{constructor(t=null){Ii('Source: "Source" has been renamed to "TextureSource". Please update your code to use "THREE.TextureSource" instead.'),super(t),this.isSource=!0}}let wg=0;const Kc=new C;class Le extends si{constructor(t=Le.DEFAULT_IMAGE,e=Le.DEFAULT_MAPPING,n=En,i=En,r=Re,o=fi,a=gn,l=dn,c=Le.DEFAULT_ANISOTROPY,h=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wg++}),this.uuid=Nn(),this.name="",this.source=new Ci(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Kc).x}get height(){return this.source.getSize(Kc).y}get depth(){return this.source.getSize(Kc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Et(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Et(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case yo:t.x=t.x-Math.floor(t.x);break;case En:t.x=t.x<0?0:1;break;case Mo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case yo:t.y=t.y-Math.floor(t.y);break;case En:t.y=t.y<0?0:1;break;case Mo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Le.DEFAULT_IMAGE=null;Le.DEFAULT_MAPPING=nc;Le.DEFAULT_ANISOTROPY=1;class Me{static{Me.prototype.isVector4=!0}constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,v=(f+1)/2,b=(g+1)/2,E=(h+u)/4,R=(d+_)/4,y=(p+m)/4;return S>v&&S>b?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=E/n,r=R/n):v>b?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=E/i,r=y/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=R/r,i=y/r),this.set(n,i,r,e),this}let M=Math.sqrt((m-p)*(m-p)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-p)/M,this.y=(d-_)/M,this.z=(u-h)/M,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ne(this.x,t.x,e.x),this.y=ne(this.y,t.y,e.y),this.z=ne(this.z,t.z,e.z),this.w=ne(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ne(this.x,t,e),this.y=ne(this.y,t,e),this.z=ne(this.z,t,e),this.w=ne(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ne(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pu extends si{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Re,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e),this.textures=[];const i={width:t,height:e,depth:n.depth},r=new Le(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Re,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new Ci(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class He extends pu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class dc extends Le{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Eg extends He{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new dc(null,t,e,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class pc extends Le{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}class Tg extends He{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new pc(null,t,e,n),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}}class ie{static{ie.prototype.isMatrix4=!0}constructor(t,e,n,i,r,o,a,l,c,h,d,u,f,p,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,d,u,f,p,_,m)}set(t,e,n,i,r,o,a,l,c,h,d,u,f,p,_,m){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=r,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=u,g[3]=f,g[7]=p,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ie().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,i=1/Ws.setFromMatrixColumn(t,0).length(),r=1/Ws.setFromMatrixColumn(t,1).length(),o=1/Ws.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=o*h,f=o*d,p=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+p*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,p=c*h,_=c*d;e[0]=u+_*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=_+u*a,e[10]=o*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,p=c*h,_=c*d;e[0]=u-_*a,e[4]=-o*d,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const u=o*h,f=o*d,p=a*h,_=a*d;e[0]=l*h,e[4]=p*c-f,e[8]=u*c+_,e[1]=l*d,e[5]=_*c+u,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const u=o*l,f=o*c,p=a*l,_=a*c;e[0]=l*h,e[4]=_-u*d,e[8]=p*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+p,e[10]=u-_*d}else if(t.order==="XZY"){const u=o*l,f=o*c,p=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+_,e[5]=o*h,e[9]=f*d-p,e[2]=p*d-f,e[6]=a*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ag,t,Rg)}lookAt(t,e,n){const i=this.elements;return Pn.subVectors(t,e),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),ki.crossVectors(n,Pn),ki.lengthSq()===0&&(Math.abs(n.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),ki.crossVectors(n,Pn)),ki.normalize(),Jo.crossVectors(Pn,ki),i[0]=ki.x,i[4]=Jo.x,i[8]=Pn.x,i[1]=ki.y,i[5]=Jo.y,i[9]=Pn.y,i[2]=ki.z,i[6]=Jo.z,i[10]=Pn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],_=n[6],m=n[10],g=n[14],M=n[3],S=n[7],v=n[11],b=n[15],E=i[0],R=i[4],y=i[8],T=i[12],I=i[1],L=i[5],N=i[9],G=i[13],U=i[2],z=i[6],W=i[10],V=i[14],nt=i[3],B=i[7],X=i[11],$=i[15];return r[0]=o*E+a*I+l*U+c*nt,r[4]=o*R+a*L+l*z+c*B,r[8]=o*y+a*N+l*W+c*X,r[12]=o*T+a*G+l*V+c*$,r[1]=h*E+d*I+u*U+f*nt,r[5]=h*R+d*L+u*z+f*B,r[9]=h*y+d*N+u*W+f*X,r[13]=h*T+d*G+u*V+f*$,r[2]=p*E+_*I+m*U+g*nt,r[6]=p*R+_*L+m*z+g*B,r[10]=p*y+_*N+m*W+g*X,r[14]=p*T+_*G+m*V+g*$,r[3]=M*E+S*I+v*U+b*nt,r[7]=M*R+S*L+v*z+b*B,r[11]=M*y+S*N+v*W+b*X,r[15]=M*T+S*G+v*V+b*$,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],p=t[3],_=t[7],m=t[11],g=t[15],M=l*f-c*u,S=a*f-c*d,v=a*u-l*d,b=o*f-c*h,E=o*u-l*h,R=o*d-a*h;return e*(_*M-m*S+g*v)-n*(p*M-m*b+g*E)+i*(p*S-_*b+g*R)-r*(p*v-_*E+m*R)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],p=t[12],_=t[13],m=t[14],g=t[15],M=e*a-n*o,S=e*l-i*o,v=e*c-r*o,b=n*l-i*a,E=n*c-r*a,R=i*c-r*l,y=h*_-d*p,T=h*m-u*p,I=h*g-f*p,L=d*m-u*_,N=d*g-f*_,G=u*g-f*m,U=M*G-S*N+v*L+b*I-E*T+R*y;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/U;return t[0]=(a*G-l*N+c*L)*z,t[1]=(i*N-n*G-r*L)*z,t[2]=(_*R-m*E+g*b)*z,t[3]=(u*E-d*R-f*b)*z,t[4]=(l*I-o*G-c*T)*z,t[5]=(e*G-i*I+r*T)*z,t[6]=(m*v-p*R-g*S)*z,t[7]=(h*R-u*v+f*S)*z,t[8]=(o*N-a*I+c*y)*z,t[9]=(n*I-e*N-r*y)*z,t[10]=(p*E-_*v+g*M)*z,t[11]=(d*v-h*E-f*M)*z,t[12]=(a*T-o*L-l*y)*z,t[13]=(e*L-n*T+i*y)*z,t[14]=(_*S-p*b-m*M)*z,t[15]=(h*b-d*S+u*M)*z,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,p=r*d,_=o*h,m=o*d,g=a*d,M=l*c,S=l*h,v=l*d,b=n.x,E=n.y,R=n.z;return i[0]=(1-(_+g))*b,i[1]=(f+v)*b,i[2]=(p-S)*b,i[3]=0,i[4]=(f-v)*E,i[5]=(1-(u+g))*E,i[6]=(m+M)*E,i[7]=0,i[8]=(p+S)*R,i[9]=(m-M)*R,i[10]=(1-(u+_))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Ws.set(i[0],i[1],i[2]).length();const a=Ws.set(i[4],i[5],i[6]).length(),l=Ws.set(i[8],i[9],i[10]).length();r<0&&(o=-o),Hn.copy(this);const c=1/o,h=1/a,d=1/l;return Hn.elements[0]*=c,Hn.elements[1]*=c,Hn.elements[2]*=c,Hn.elements[4]*=h,Hn.elements[5]*=h,Hn.elements[6]*=h,Hn.elements[8]*=d,Hn.elements[9]*=d,Hn.elements[10]*=d,e.setFromRotationMatrix(Hn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,r,o,a=Dn,l=!1){const c=this.elements,h=2*r/(e-t),d=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let p,_;if(l)p=r/(o-r),_=o*r/(o-r);else if(a===Dn)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Ps)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Dn,l=!1){const c=this.elements,h=2/(e-t),d=2/(n-i),u=-(e+t)/(e-t),f=-(n+i)/(n-i);let p,_;if(l)p=1/(o-r),_=o/(o-r);else if(a===Dn)p=-2/(o-r),_=-(o+r)/(o-r);else if(a===Ps)p=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ws=new C,Hn=new ie,Ag=new C(0,0,0),Rg=new C(1,1,1),ki=new C,Jo=new C,Pn=new C,lf=new ie,cf=new Qe;class ii{constructor(t=0,e=0,n=0,i=ii.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ne(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ne(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Et("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return lf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(lf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return cf.setFromEuler(this),this.setFromQuaternion(cf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ii.DEFAULT_ORDER="XYZ";class mc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Cg=0;const hf=new C,Xs=new Qe,vi=new ie,jo=new C,kr=new C,Pg=new C,Ig=new Qe,uf=new C(1,0,0),ff=new C(0,1,0),df=new C(0,0,1),pf={type:"added"},Lg={type:"removed"},Ys={type:"childadded",child:null},$c={type:"childremoved",child:null};class ue extends si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cg++}),this.uuid=Nn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ue.DEFAULT_UP.clone();const t=new C,e=new ii,n=new Qe,i=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ie},normalMatrix:{value:new re}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=ue.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Xs.setFromAxisAngle(t,e),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(t,e){return Xs.setFromAxisAngle(t,e),this.quaternion.premultiply(Xs),this}rotateX(t){return this.rotateOnAxis(uf,t)}rotateY(t){return this.rotateOnAxis(ff,t)}rotateZ(t){return this.rotateOnAxis(df,t)}translateOnAxis(t,e){return hf.copy(t).applyQuaternion(this.quaternion),this.position.add(hf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(uf,t)}translateY(t){return this.translateOnAxis(ff,t)}translateZ(t){return this.translateOnAxis(df,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?jo.copy(t):jo.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(kr,jo,this.up):vi.lookAt(jo,kr,this.up),this.quaternion.setFromRotationMatrix(vi),i&&(vi.extractRotation(i.matrixWorld),Xs.setFromRotationMatrix(vi),this.quaternion.premultiply(Xs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Kt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(pf),Ys.child=t,this.dispatchEvent(Ys),Ys.child=null):Kt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Lg),$c.child=t,this.dispatchEvent($c),$c.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),vi.multiply(t.parent.matrixWorld)),t.applyMatrix4(vi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(pf),Ys.child=t,this.dispatchEvent(Ys),Ys.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,t,Pg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,Ig,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}ue.DEFAULT_UP=new C(0,1,0);ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Jn extends ue{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dg={type:"move"};class Ka{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Dg)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Jn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const kp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},Qo={h:0,s:0,l:0};function Jc(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class pt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Sn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=he.workingColorSpace){if(t=du(t,1),e=ne(e,0,1),n=ne(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Jc(o,r,t+1/3),this.g=Jc(o,r,t),this.b=Jc(o,r,t-1/3)}return he.colorSpaceToWorking(this,i),this}setStyle(t,e=Sn){function n(r){r!==void 0&&parseFloat(r)<1&&Et("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Et("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Et("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Sn){const n=kp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Et("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Li(t.r),this.g=Li(t.g),this.b=Li(t.b),this}copyLinearToSRGB(t){return this.r=yr(t.r),this.g=yr(t.g),this.b=yr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Sn){return he.workingToColorSpace(sn.copy(this),t),Math.round(ne(sn.r*255,0,255))*65536+Math.round(ne(sn.g*255,0,255))*256+Math.round(ne(sn.b*255,0,255))}getHexString(t=Sn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.workingToColorSpace(sn.copy(this),e);const n=sn.r,i=sn.g,r=sn.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=he.workingColorSpace){return he.workingToColorSpace(sn.copy(this),e),t.r=sn.r,t.g=sn.g,t.b=sn.b,t}getStyle(t=Sn){he.workingToColorSpace(sn.copy(this),t);const e=sn.r,n=sn.g,i=sn.b;return t!==Sn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Vi),this.setHSL(Vi.h+t,Vi.s+e,Vi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Vi),t.getHSL(Qo);const n=mo(Vi.h,Qo.h,e),i=mo(Vi.s,Qo.s,e),r=mo(Vi.l,Qo.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const sn=new pt;pt.NAMES=kp;class Vo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new pt(t),this.density=e}clone(){return new Vo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class gc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new pt(t),this.near=e,this.far=n}clone(){return new gc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class mu extends ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ii,this.environmentIntensity=1,this.environmentRotation=new ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Wn=new C,yi=new C,jc=new C,Mi=new C,qs=new C,Zs=new C,mf=new C,Qc=new C,th=new C,eh=new C,nh=new Me,ih=new Me,sh=new Me;class wn{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Wn.subVectors(t,e),i.cross(Wn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Wn.subVectors(i,e),yi.subVectors(n,e),jc.subVectors(t,e);const o=Wn.dot(Wn),a=Wn.dot(yi),l=Wn.dot(jc),c=yi.dot(yi),h=yi.dot(jc),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-a*h)*u,p=(o*h-a*l)*u;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,Mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Mi.x),l.addScaledVector(o,Mi.y),l.addScaledVector(a,Mi.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return nh.setScalar(0),ih.setScalar(0),sh.setScalar(0),nh.fromBufferAttribute(t,e),ih.fromBufferAttribute(t,n),sh.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(nh,r.x),o.addScaledVector(ih,r.y),o.addScaledVector(sh,r.z),o}static isFrontFacing(t,e,n,i){return Wn.subVectors(n,e),yi.subVectors(t,e),Wn.cross(yi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Wn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),Wn.cross(yi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return wn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return wn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return wn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return wn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return wn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;qs.subVectors(i,n),Zs.subVectors(r,n),Qc.subVectors(t,n);const l=qs.dot(Qc),c=Zs.dot(Qc);if(l<=0&&c<=0)return e.copy(n);th.subVectors(t,i);const h=qs.dot(th),d=Zs.dot(th);if(h>=0&&d<=h)return e.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(qs,o);eh.subVectors(t,r);const f=qs.dot(eh),p=Zs.dot(eh);if(p>=0&&f<=p)return e.copy(r);const _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(Zs,a);const m=h*p-f*d;if(m<=0&&d-h>=0&&f-p>=0)return mf.subVectors(r,i),a=(d-h)/(d-h+(f-p)),e.copy(i).addScaledVector(mf,a);const g=1/(m+_+u);return o=_*g,a=u*g,e.copy(n).addScaledVector(qs,o).addScaledVector(Zs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class $e{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Xn):Xn.fromBufferAttribute(r,o),Xn.applyMatrix4(t.matrixWorld),this.expandByPoint(Xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ta.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ta.copy(n.boundingBox)),ta.applyMatrix4(t.matrixWorld),this.union(ta)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Xn),Xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vr),ea.subVectors(this.max,Vr),Ks.subVectors(t.a,Vr),$s.subVectors(t.b,Vr),Js.subVectors(t.c,Vr),Gi.subVectors($s,Ks),Hi.subVectors(Js,$s),rs.subVectors(Ks,Js);let e=[0,-Gi.z,Gi.y,0,-Hi.z,Hi.y,0,-rs.z,rs.y,Gi.z,0,-Gi.x,Hi.z,0,-Hi.x,rs.z,0,-rs.x,-Gi.y,Gi.x,0,-Hi.y,Hi.x,0,-rs.y,rs.x,0];return!rh(e,Ks,$s,Js,ea)||(e=[1,0,0,0,1,0,0,0,1],!rh(e,Ks,$s,Js,ea))?!1:(na.crossVectors(Gi,Hi),e=[na.x,na.y,na.z],rh(e,Ks,$s,Js,ea))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Si),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Si=[new C,new C,new C,new C,new C,new C,new C,new C],Xn=new C,ta=new $e,Ks=new C,$s=new C,Js=new C,Gi=new C,Hi=new C,rs=new C,Vr=new C,ea=new C,na=new C,os=new C;function rh(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){os.fromArray(s,r);const a=i.x*Math.abs(os.x)+i.y*Math.abs(os.y)+i.z*Math.abs(os.z),l=t.dot(os),c=e.dot(os),h=n.dot(os);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Ai=Ng();function Ng(){const s=new ArrayBuffer(4),t=new Float32Array(s),e=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function Mn(s){Math.abs(s)>65504&&Et("DataUtils.toHalfFloat(): Value out of range."),s=ne(s,-65504,65504),Ai.floatView[0]=s;const t=Ai.uint32View[0],e=t>>23&511;return Ai.baseTable[e]+((t&8388607)>>Ai.shiftTable[e])}function io(s){const t=s>>10;return Ai.uint32View[0]=Ai.mantissaTable[Ai.offsetTable[t]+(s&1023)]+Ai.exponentTable[t],Ai.floatView[0]}class Og{static toHalfFloat(t){return Mn(t)}static fromHalfFloat(t){return io(t)}}const ze=new C,ia=new it;let Ug=0;class be extends si{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ug++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=fc,this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ia.fromBufferAttribute(this,e),ia.applyMatrix3(t),this.setXY(e,ia.x,ia.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix3(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ae(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=pn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=pn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=pn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=pn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),i=ae(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),i=ae(i,this.array),r=ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class Fg extends be{constructor(t,e,n){super(new Int8Array(t),e,n)}}class Bg extends be{constructor(t,e,n){super(new Uint8Array(t),e,n)}}class zg extends be{constructor(t,e,n){super(new Uint8ClampedArray(t),e,n)}}class kg extends be{constructor(t,e,n){super(new Int16Array(t),e,n)}}class gu extends be{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Vg extends be{constructor(t,e,n){super(new Int32Array(t),e,n)}}class _u extends be{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Gg extends be{constructor(t,e,n){super(new Uint16Array(t),e,n),this.isFloat16BufferAttribute=!0}getX(t){let e=io(this.array[t*this.itemSize]);return this.normalized&&(e=pn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize]=Mn(e),this}getY(t){let e=io(this.array[t*this.itemSize+1]);return this.normalized&&(e=pn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+1]=Mn(e),this}getZ(t){let e=io(this.array[t*this.itemSize+2]);return this.normalized&&(e=pn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+2]=Mn(e),this}getW(t){let e=io(this.array[t*this.itemSize+3]);return this.normalized&&(e=pn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.array[t*this.itemSize+3]=Mn(e),this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array)),this.array[t+0]=Mn(e),this.array[t+1]=Mn(n),this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),i=ae(i,this.array)),this.array[t+0]=Mn(e),this.array[t+1]=Mn(n),this.array[t+2]=Mn(i),this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),i=ae(i,this.array),r=ae(r,this.array)),this.array[t+0]=Mn(e),this.array[t+1]=Mn(n),this.array[t+2]=Mn(i),this.array[t+3]=Mn(r),this}}class yt extends be{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Hg=new $e,Gr=new C,oh=new C;class Je{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Hg.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gr.subVectors(t,this.center);const e=Gr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Gr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(oh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gr.copy(t.center).add(oh)),this.expandByPoint(Gr.copy(t.center).sub(oh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Wg=0;const Un=new ie,ah=new ue,js=new C,In=new $e,Hr=new $e,Ye=new C;class te extends si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wg++}),this.uuid=Nn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Q0(t)?_u:gu)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new re().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Un.makeRotationFromQuaternion(t),this.applyMatrix4(Un),this}rotateX(t){return Un.makeRotationX(t),this.applyMatrix4(Un),this}rotateY(t){return Un.makeRotationY(t),this.applyMatrix4(Un),this}rotateZ(t){return Un.makeRotationZ(t),this.applyMatrix4(Un),this}translate(t,e,n){return Un.makeTranslation(t,e,n),this.applyMatrix4(Un),this}scale(t,e,n){return Un.makeScale(t,e,n),this.applyMatrix4(Un),this}lookAt(t){return ah.lookAt(t),ah.updateMatrix(),this.applyMatrix4(ah.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(js).negate(),this.translate(js.x,js.y,js.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new yt(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Et("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $e);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];In.setFromBufferAttribute(r),this.morphTargetsRelative?(Ye.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(Ye),Ye.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(Ye)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Je);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(In.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Hr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ye.addVectors(In.min,Hr.min),In.expandByPoint(Ye),Ye.addVectors(In.max,Hr.max),In.expandByPoint(Ye)):(In.expandByPoint(Hr.min),In.expandByPoint(Hr.max))}In.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Ye.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ye));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ye.fromBufferAttribute(a,c),l&&(js.fromBufferAttribute(t,c),Ye.add(js)),i=Math.max(i,n.distanceToSquared(Ye))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new be(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let y=0;y<n.count;y++)a[y]=new C,l[y]=new C;const c=new C,h=new C,d=new C,u=new it,f=new it,p=new it,_=new C,m=new C;function g(y,T,I){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,T),d.fromBufferAttribute(n,I),u.fromBufferAttribute(r,y),f.fromBufferAttribute(r,T),p.fromBufferAttribute(r,I),h.sub(c),d.sub(c),f.sub(u),p.sub(u);const L=1/(f.x*p.y-p.x*f.y);isFinite(L)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(L),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(L),a[y].add(_),a[T].add(_),a[I].add(_),l[y].add(m),l[T].add(m),l[I].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let y=0,T=M.length;y<T;++y){const I=M[y],L=I.start,N=I.count;for(let G=L,U=L+N;G<U;G+=3)g(t.getX(G+0),t.getX(G+1),t.getX(G+2))}const S=new C,v=new C,b=new C,E=new C;function R(y){b.fromBufferAttribute(i,y),E.copy(b);const T=a[y];S.copy(T),S.sub(b.multiplyScalar(b.dot(T))).normalize(),v.crossVectors(E,T);const L=v.dot(l[y])<0?-1:1;o.setXYZW(y,S.x,S.y,S.z,L)}for(let y=0,T=M.length;y<T;++y){const I=M[y],L=I.start,N=I.count;for(let G=L,U=L+N;G<U;G+=3)R(t.getX(G+0)),R(t.getX(G+1)),R(t.getX(G+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new C,r=new C,o=new C,a=new C,l=new C,c=new C,h=new C,d=new C;if(t)for(let u=0,f=t.count;u<f;u+=3){const p=t.getX(u+0),_=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ye.fromBufferAttribute(t,e),Ye.normalize(),t.setXYZ(e,Ye.x,Ye.y,Ye.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let f=0,p=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let g=0;g<h;g++)u[p++]=c[f++]}return new be(u,h,d)}if(this.index===null)return Et("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new te,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _c{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=fc,this.updateRanges=[],this.version=0,this.uuid=Nn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Nn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}}const cn=new C;class Is{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)cn.fromBufferAttribute(this,e),cn.applyMatrix4(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)cn.fromBufferAttribute(this,e),cn.applyNormalMatrix(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)cn.fromBufferAttribute(this,e),cn.transformDirection(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=pn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ae(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=pn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=pn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=pn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=pn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),i=ae(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ae(e,this.array),n=ae(n,this.array),i=ae(i,this.array),r=ae(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Co("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new be(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Is(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Co("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const lh=new C,Xg=new C,Yg=new re;class ui{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=lh.subVectors(n,e).cross(Xg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const i=t.delta(lh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Yg.getNormalMatrix(t),i=this.coplanarPoint(lh).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let qg=0;class tn extends si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qg++}),this.uuid=Nn(),this.name="",this.type="Material",this.blending=vr,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=iu,this.blendDst=su,this.blendEquation=Ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=Mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Za,this.stencilZFail=Za,this.stencilZPass=Za,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Et(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Et(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new pt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new ui().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new it().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new it().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class xu extends tn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new pt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Qs;const Wr=new C,tr=new C,er=new C,nr=new it,Xr=new it,Vp=new ie,sa=new C,Yr=new C,ra=new C,gf=new it,ch=new it,_f=new it;class Gp extends ue{constructor(t=new xu){if(super(),this.isSprite=!0,this.type="Sprite",Qs===void 0){Qs=new te;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new _c(e,5);Qs.setIndex([0,1,2,0,2,3]),Qs.setAttribute("position",new Is(n,3,0,!1)),Qs.setAttribute("uv",new Is(n,2,3,!1))}this.geometry=Qs,this.material=t,this.center=new it(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Kt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),tr.setFromMatrixScale(this.matrixWorld),Vp.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),er.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&tr.multiplyScalar(-er.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;oa(sa.set(-.5,-.5,0),er,o,tr,i,r),oa(Yr.set(.5,-.5,0),er,o,tr,i,r),oa(ra.set(.5,.5,0),er,o,tr,i,r),gf.set(0,0),ch.set(1,0),_f.set(1,1);let a=t.ray.intersectTriangle(sa,Yr,ra,!1,Wr);if(a===null&&(oa(Yr.set(-.5,.5,0),er,o,tr,i,r),ch.set(0,1),a=t.ray.intersectTriangle(sa,ra,Yr,!1,Wr),a===null))return;const l=t.ray.origin.distanceTo(Wr);l<t.near||l>t.far||e.push({distance:l,point:Wr.clone(),uv:wn.getInterpolation(Wr,sa,Yr,ra,gf,ch,_f,new it),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function oa(s,t,e,n,i,r){nr.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Xr.x=r*nr.x-i*nr.y,Xr.y=i*nr.x+r*nr.y):Xr.copy(nr),s.copy(t),s.x+=Xr.x,s.y+=Xr.y,s.applyMatrix4(Vp)}const aa=new C,xf=new C;class Hp extends ue{constructor(){super(),this.isLOD=!0,this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}copy(t){super.copy(t,!1);const e=t.levels;for(let n=0,i=e.length;n<i;n++){const r=e[n];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=t.autoUpdate,this}addLevel(t,e=0,n=0){e=Math.abs(e);const i=this.levels;let r;for(r=0;r<i.length&&!(e<i[r].distance);r++);return i.splice(r,0,{distance:e,hysteresis:n,object:t}),this.add(t),this}removeLevel(t){const e=this.levels;for(let n=0;n<e.length;n++)if(e[n].distance===t){const i=e.splice(n,1);return this.remove(i[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(t){const e=this.levels;if(e.length>0){let n,i;for(n=1,i=e.length;n<i;n++){let r=e[n].distance;if(e[n].object.visible&&(r-=r*e[n].hysteresis),t<r)break}return e[n-1].object}return null}raycast(t,e){if(this.levels.length>0){aa.setFromMatrixPosition(this.matrixWorld);const i=t.ray.origin.distanceTo(aa);this.getObjectForDistance(i).raycast(t,e)}}update(t){const e=this.levels;if(e.length>1){aa.setFromMatrixPosition(t.matrixWorld),xf.setFromMatrixPosition(this.matrixWorld);const n=aa.distanceTo(xf)/t.zoom;e[0].object.visible=!0;let i,r;for(i=1,r=e.length;i<r;i++){let o=e[i].distance;if(e[i].object.visible&&(o-=o*e[i].hysteresis),n>=o)e[i-1].object.visible=!1,e[i].object.visible=!0;else break}for(this._currentLevel=i-1;i<r;i++)e[i].object.visible=!1}}toJSON(t){const e=super.toJSON(t);e.object.autoUpdate=this.autoUpdate,e.object.levels=[];const n=this.levels;for(let i=0,r=n.length;i<r;i++){const o=n[i];e.object.levels.push({object:o.object.uuid,distance:o.distance,hysteresis:o.hysteresis})}return e}}const bi=new C,hh=new C,la=new C,ca=new C;class Fs{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,bi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=bi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(bi.copy(this.origin).addScaledVector(this.direction,e),bi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){hh.copy(t).add(e).multiplyScalar(.5),la.copy(e).sub(t).normalize(),ca.copy(this.origin).sub(hh);const r=t.distanceTo(e)*.5,o=-this.direction.dot(la),a=ca.dot(this.direction),l=-ca.dot(la),c=ca.lengthSq(),h=Math.abs(1-o*o);let d,u,f,p;if(h>0)if(d=o*l-a,u=o*a-l,p=r*h,d>=0)if(u>=-p)if(u<=p){const _=1/h;d*=_,u*=_,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(hh).addScaledVector(la,u),f}intersectSphere(t,e){if(t.radius<0)return null;bi.subVectors(t.center,this.origin);const n=bi.dot(this.direction),i=bi.dot(bi)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,bi)!==null}intersectTriangle(t,e,n,i,r){const o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,p=e.x-o.x,_=e.y-o.y,m=e.z-o.z,g=n.x-o.x,M=n.y-o.y,S=n.z-o.z,v=Math.abs(l),b=Math.abs(c),E=Math.abs(h);let R,y,T,I,L,N,G,U,z,W,V,nt;if(v>=b&&v>=E?(T=l,N=d,z=p,nt=g,l>=0?(R=c,y=h,I=u,L=f,G=_,U=m,W=M,V=S):(R=h,y=c,I=f,L=u,G=m,U=_,W=S,V=M)):b>=E?(T=c,N=u,z=_,nt=M,c>=0?(R=h,y=l,I=f,L=d,G=m,U=p,W=S,V=g):(R=l,y=h,I=d,L=f,G=p,U=m,W=g,V=S)):(T=h,N=f,z=m,nt=S,h>=0?(R=l,y=c,I=d,L=u,G=p,U=_,W=g,V=M):(R=c,y=l,I=u,L=d,G=_,U=p,W=M,V=g)),T===0)return null;const B=R/T,X=y/T,$=1/T,gt=I-B*N,mt=L-X*N,zt=G-B*z,Wt=U-X*z,Dt=W-B*nt,J=V-X*nt,et=Dt*Wt-J*zt,ut=gt*J-mt*Dt,xt=zt*mt-Wt*gt;if(i){if(et<0||ut<0||xt<0)return null}else if((et<0||ut<0||xt<0)&&(et>0||ut>0||xt>0))return null;const st=et+ut+xt;if(st===0)return null;const Mt=$*(et*N+ut*z+xt*nt);return(st>0?Mt<0:Mt>0)?null:this.at(Mt/st,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _i extends tn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=Bo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const vf=new ie,as=new Fs,ha=new Je,yf=new C,ua=new C,fa=new C,da=new C,uh=new C,pa=new C,Mf=new C,ma=new C;class Pe extends ue{constructor(t=new te,e=new _i){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){pa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(uh.fromBufferAttribute(d,t),o?pa.addScaledVector(uh,h):pa.addScaledVector(uh.sub(e),h))}e.add(pa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ha.copy(n.boundingSphere),ha.applyMatrix4(r),as.copy(t.ray).recast(t.near),!(ha.containsPoint(as.origin)===!1&&(as.intersectSphere(ha,yf)===null||as.origin.distanceToSquared(yf)>(t.far-t.near)**2))&&(vf.copy(r).invert(),as.copy(t.ray).applyMatrix4(vf),!(n.boundingBox!==null&&as.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,as)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=u.length;p<_;p++){const m=u[p],g=o[m.materialIndex],M=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,b=S;v<b;v+=3){const E=a.getX(v),R=a.getX(v+1),y=a.getX(v+2);i=ga(this,g,t,n,c,h,d,E,R,y),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const p=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){const M=a.getX(m),S=a.getX(m+1),v=a.getX(m+2);i=ga(this,o,t,n,c,h,d,M,S,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=u.length;p<_;p++){const m=u[p],g=o[m.materialIndex],M=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,b=S;v<b;v+=3){const E=v,R=v+1,y=v+2;i=ga(this,g,t,n,c,h,d,E,R,y),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=p,g=_;m<g;m+=3){const M=m,S=m+1,v=m+2;i=ga(this,o,t,n,c,h,d,M,S,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Zg(s,t,e,n,i,r,o,a){let l;if(t.side===on?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Ji,a),l===null)return null;ma.copy(a),ma.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(ma);return c<e.near||c>e.far?null:{distance:c,point:ma.clone(),object:s}}function ga(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,ua),s.getVertexPosition(l,fa),s.getVertexPosition(c,da);const h=Zg(s,t,e,n,ua,fa,da,Mf);if(h){const d=new C;wn.getBarycoord(Mf,ua,fa,da,d),i&&(h.uv=wn.getInterpolatedAttribute(i,a,l,c,d,new it)),r&&(h.uv1=wn.getInterpolatedAttribute(r,a,l,c,d,new it)),o&&(h.normal=wn.getInterpolatedAttribute(o,a,l,c,d,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new C,materialIndex:0};wn.getNormal(ua,fa,da,u.normal),h.face=u,h.barycoord=d}return h}const qr=new Me,Sf=new Me,bf=new Me,Kg=new Me,wf=new ie,_a=new C,fh=new Je,Ef=new ie,dh=new Fs;class Wp extends Pe{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=kh,this.bindMatrix=new ie,this.bindMatrixInverse=new ie,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new $e),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,_a),this.boundingBox.expandByPoint(_a)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Je),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,_a),this.boundingSphere.expandByPoint(_a)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fh.copy(this.boundingSphere),fh.applyMatrix4(i),t.ray.intersectsSphere(fh)!==!1&&(Ef.copy(i).invert(),dh.copy(t.ray).applyMatrix4(Ef),!(this.boundingBox!==null&&dh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,dh)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new Me,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===kh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===bp?this.bindMatrixInverse.copy(this.bindMatrix).invert():Et("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;Sf.fromBufferAttribute(i.attributes.skinIndex,t),bf.fromBufferAttribute(i.attributes.skinWeight,t),e.isVector4?(qr.copy(e),e.set(0,0,0,0)):(qr.set(...e,1),e.set(0,0,0)),qr.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){const o=bf.getComponent(r);if(o!==0){const a=Sf.getComponent(r);wf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(Kg.copy(qr).applyMatrix4(wf),o)}}return e.isVector4&&(e.w=qr.w),e.applyMatrix4(this.bindMatrixInverse)}}class vu extends ue{constructor(){super(),this.isBone=!0,this.type="Bone"}}class zn extends Le{constructor(t=null,e=1,n=1,i,r,o,a,l,c=Fe,h=Fe,d,u){super(null,o,a,l,c,h,i,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Tf=new ie,$g=new ie;class xc{constructor(t=[],e=[]){this.uuid=Nn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){Et("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ie)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new ie;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=t.length;r<o;r++){const a=t[r]?t[r].matrixWorld:$g;Tf.multiplyMatrices(a,e[r]),Tf.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new xc(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new zn(e,t,t,gn,mn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const r=t.bones[n];let o=e[r];o===void 0&&(Et("Skeleton: No bone found with UUID:",r),o=new vu),this.bones.push(o),this.boneInverses.push(new ie().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,r=e.length;i<r;i++){const o=e[i];t.bones.push(o.uuid);const a=n[i];t.boneInverses.push(a.toArray())}return t}}class Er extends be{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ir=new ie,Af=new ie,xa=[],Rf=new $e,Jg=new ie,Zr=new Pe,Kr=new Je;class jn extends Pe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Er(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Jg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new $e),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ir),Rf.copy(t.boundingBox).applyMatrix4(ir),this.boundingBox.union(Rf)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Je),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ir),Kr.copy(t.boundingSphere).applyMatrix4(ir),this.boundingSphere.union(Kr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Zr.geometry=this.geometry,Zr.material=this.material,Zr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Kr.copy(this.boundingSphere),Kr.applyMatrix4(n),t.ray.intersectsSphere(Kr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ir),Af.multiplyMatrices(n,ir),Zr.matrixWorld=Af,Zr.raycast(t,xa);for(let o=0,a=xa.length;o<a;o++){const l=xa[o];l.instanceId=r,l.object=this,e.push(l)}xa.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Er(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new zn(new Float32Array(i*this.count),i,this.count,oc,mn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const ls=new Je,jg=new it(.5,.5),va=new C;class Ls{constructor(t=new ui,e=new ui,n=new ui,i=new ui,r=new ui,o=new ui){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Dn,n=!1){const i=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],_=r[9],m=r[10],g=r[11],M=r[12],S=r[13],v=r[14],b=r[15];if(i[0].setComponents(c-o,f-h,g-p,b-M).normalize(),i[1].setComponents(c+o,f+h,g+p,b+M).normalize(),i[2].setComponents(c+a,f+d,g+_,b+S).normalize(),i[3].setComponents(c-a,f-d,g-_,b-S).normalize(),n)i[4].setComponents(l,u,m,v).normalize(),i[5].setComponents(c-l,f-u,g-m,b-v).normalize();else if(i[4].setComponents(c-l,f-u,g-m,b-v).normalize(),e===Dn)i[5].setComponents(c+l,f+u,g+m,b+v).normalize();else if(e===Ps)i[5].setComponents(l,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ls.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ls.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(t){ls.center.set(0,0,0);const e=jg.distanceTo(t.center);return ls.radius=.7071067811865476+e,ls.applyMatrix4(t.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(va.x=i.normal.x>0?t.max.x:t.min.x,va.y=i.normal.y>0?t.max.y:t.min.y,va.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(va)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Cf=new ie;class vc{constructor(){this.coordinateSystem=Dn,this._frustums=[],this._count=0}setFromArrayCamera(t){const e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){const r=e[i];Cf.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new Ls),n[i].setFromProjectionMatrix(Cf,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}intersectsObject(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){const e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++)e[i]===void 0&&(e[i]=new Ls),e[i].copy(n[i]);return this._count=t._count,this}clone(){return new vc().copy(this)}}function ph(s,t){return s-t}function Qg(s,t){return s.z-t.z}function t_(s,t){return t.z-s.z}class e_{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e,n,i){const r=this.pool,o=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});const a=r[this.index];o.push(a),this.index++,a.start=t,a.count=e,a.z=n,a.index=i}reset(){this.list.length=0,this.index=0}}const vn=new ie,n_=new pt(1,1,1),i_=new Ls,s_=new vc,ya=new $e,cs=new Je,$r=new C,Pf=new C,r_=new C,mh=new e_,rn=new Pe,Ma=[];function o_(s,t,e=0){const n=t.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==t.array.constructor){const i=s.count;for(let r=0;r<i;r++)for(let o=0;o<n;o++)t.setComponent(r+e,o,s.getComponent(r,o))}else t.array.set(s.array,e*n);t.needsUpdate=!0}function hs(s,t){if(s.constructor!==t.constructor){const e=Math.min(s.length,t.length);for(let n=0;n<e;n++)t[n]=s[n]}else{const e=Math.min(s.length,t.length);t.set(new s.constructor(s.buffer,0,e))}}class Xp extends Pe{constructor(t,e,n=e*2,i){super(new te,i),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=t,this._maxVertexCount=e,this._maxIndexCount=n,this._multiDrawCounts=new Int32Array(t),this._multiDrawStarts=new Int32Array(t),this._multiDrawCount=0,this._multiDrawBytesPerElement=1,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}_initMatricesTexture(){let t=Math.sqrt(this._maxInstanceCount*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4),n=new zn(e,t,t,gn,mn);this._matricesTexture=n}_initIndirectTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Uint32Array(t*t),n=new zn(e,t,t,ko,kn);this._indirectTexture=n}_initColorsTexture(){let t=Math.sqrt(this._maxInstanceCount);t=Math.ceil(t);const e=new Float32Array(t*t*4).fill(1),n=new zn(e,t,t,gn,mn);n.colorSpace=he.workingColorSpace,this._colorsTexture=n}_initializeGeometry(t){const e=this.geometry,n=this._maxVertexCount,i=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in t.attributes){const o=t.getAttribute(r),{array:a,itemSize:l,normalized:c}=o,h=new a.constructor(n*l),d=new be(h,l,c);e.setAttribute(r,d)}if(t.getIndex()!==null){const r=n>65535?new Uint32Array(i):new Uint16Array(i);e.setIndex(new be(r,1))}this._geometryInitialized=!0}}_validateGeometry(t){const e=this.geometry;if(!!t.getIndex()!=!!e.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const n in e.attributes){if(!t.hasAttribute(n))throw new Error(`THREE.BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const i=t.getAttribute(n),r=e.getAttribute(n);if(i.itemSize!==r.itemSize||i.normalized!==r.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(t){const e=this._instanceInfo;if(t<0||t>=e.length||e[t].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${t}. Instance is either out of range or has been deleted.`)}validateGeometryId(t){const e=this._geometryInfo;if(t<0||t>=e.length||e[t].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${t}. Geometry is either out of range or has been deleted.`)}setCustomSort(t){return this.customSort=t,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $e);const t=this.boundingBox,e=this._instanceInfo;t.makeEmpty();for(let n=0,i=e.length;n<i;n++){if(e[n].active===!1)continue;const r=e[n].geometryIndex;this.getMatrixAt(n,vn),this.getBoundingBoxAt(r,ya).applyMatrix4(vn),t.union(ya)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Je);const t=this.boundingSphere,e=this._instanceInfo;t.makeEmpty();for(let n=0,i=e.length;n<i;n++){if(e[n].active===!1)continue;const r=e[n].geometryIndex;this.getMatrixAt(n,vn),this.getBoundingSphereAt(r,cs).applyMatrix4(vn),t.union(cs)}}addInstance(t){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const n={visible:!0,active:!0,geometryIndex:t};let i=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(ph),i=this._availableInstanceIds.shift(),this._instanceInfo[i]=n):(i=this._instanceInfo.length,this._instanceInfo.push(n));const r=this._matricesTexture;vn.identity().toArray(r.image.data,i*16),r.needsUpdate=!0;const o=this._colorsTexture;return o&&(n_.toArray(o.image.data,i*4),o.needsUpdate=!0),this._visibilityChanged=!0,i}addGeometry(t,e=-1,n=-1){this._initializeGeometry(t),this._validateGeometry(t);const i={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;i.vertexStart=this._nextVertexStart,i.reservedVertexCount=e===-1?t.getAttribute("position").count:e;const o=t.getIndex();if(o!==null&&(i.indexStart=this._nextIndexStart,i.reservedIndexCount=n===-1?o.count:n),i.indexStart!==-1&&i.indexStart+i.reservedIndexCount>this._maxIndexCount||i.vertexStart+i.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(ph),l=this._availableGeometryIds.shift(),r[l]=i):(l=this._geometryCount,this._geometryCount++,r.push(i)),this.setGeometryAt(l,t),this._nextIndexStart=i.indexStart+i.reservedIndexCount,this._nextVertexStart=i.vertexStart+i.reservedVertexCount,l}setGeometryAt(t,e){if(t>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(e);const n=this.geometry,i=n.getIndex()!==null,r=n.getIndex(),o=e.getIndex(),a=this._geometryInfo[t];if(i&&o.count>a.reservedIndexCount||e.attributes.position.count>a.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const l=a.vertexStart,c=a.reservedVertexCount;a.vertexCount=e.getAttribute("position").count;for(const h in n.attributes){const d=e.getAttribute(h),u=n.getAttribute(h);o_(d,u,l);const f=d.itemSize;for(let p=d.count,_=c;p<_;p++){const m=l+p;for(let g=0;g<f;g++)u.setComponent(m,g,0)}u.needsUpdate=!0,u.addUpdateRange(l*f,c*f)}if(i){const h=a.indexStart,d=a.reservedIndexCount;a.indexCount=e.getIndex().count;for(let u=0;u<o.count;u++)r.setX(h+u,l+o.getX(u));for(let u=o.count,f=d;u<f;u++)r.setX(h+u,l);r.needsUpdate=!0,r.addUpdateRange(h,a.reservedIndexCount)}return a.start=i?a.indexStart:a.vertexStart,a.count=i?a.indexCount:a.vertexCount,a.boundingBox=null,e.boundingBox!==null&&(a.boundingBox=e.boundingBox.clone()),a.boundingSphere=null,e.boundingSphere!==null&&(a.boundingSphere=e.boundingSphere.clone()),this._visibilityChanged=!0,t}deleteGeometry(t){const e=this._geometryInfo;if(t>=e.length||e[t].active===!1)return this;const n=this._instanceInfo;for(let i=0,r=n.length;i<r;i++)n[i].active&&n[i].geometryIndex===t&&this.deleteInstance(i);return e[t].active=!1,this._availableGeometryIds.push(t),this._visibilityChanged=!0,this}deleteInstance(t){return this.validateInstanceId(t),this._instanceInfo[t].active=!1,this._availableInstanceIds.push(t),this._visibilityChanged=!0,this}optimize(){let t=0,e=0;const n=this._geometryInfo,i=n.map((o,a)=>a).sort((o,a)=>n[o].vertexStart-n[a].vertexStart),r=this.geometry;for(let o=0,a=n.length;o<a;o++){const l=i[o],c=n[l];if(c.active!==!1){if(r.index!==null){if(c.indexStart!==e){const{indexStart:h,vertexStart:d,reservedIndexCount:u}=c,f=r.index,p=f.array,_=t-d;for(let m=h;m<h+u;m++)p[m]=p[m]+_;f.array.copyWithin(e,h,h+u),f.addUpdateRange(e,u),f.needsUpdate=!0,c.indexStart=e}e+=c.reservedIndexCount}if(c.vertexStart!==t){const{vertexStart:h,reservedVertexCount:d}=c,u=r.attributes;for(const f in u){const p=u[f],{array:_,itemSize:m}=p;_.copyWithin(t*m,h*m,(h+d)*m),p.addUpdateRange(t*m,d*m),p.needsUpdate=!0}c.vertexStart=t}t+=c.reservedVertexCount,c.start=r.index?c.indexStart:c.vertexStart}}return this._nextIndexStart=e,this._nextVertexStart=t,this._visibilityChanged=!0,this}getBoundingBoxAt(t,e){if(t>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[t];if(i.boundingBox===null){const r=new $e,o=n.index,a=n.attributes.position;for(let l=i.start,c=i.start+i.count;l<c;l++){let h=l;o&&(h=o.getX(h)),r.expandByPoint($r.fromBufferAttribute(a,h))}i.boundingBox=r}return e.copy(i.boundingBox),e}getBoundingSphereAt(t,e){if(t>=this._geometryCount)return null;const n=this.geometry,i=this._geometryInfo[t];if(i.boundingSphere===null){const r=new Je;this.getBoundingBoxAt(t,ya),ya.getCenter(r.center);const o=n.index,a=n.attributes.position;let l=0;for(let c=i.start,h=i.start+i.count;c<h;c++){let d=c;o&&(d=o.getX(d)),$r.fromBufferAttribute(a,d),l=Math.max(l,r.center.distanceToSquared($r))}r.radius=Math.sqrt(l),i.boundingSphere=r}return e.copy(i.boundingSphere),e}setMatrixAt(t,e){this.validateInstanceId(t);const n=this._matricesTexture,i=this._matricesTexture.image.data;return e.toArray(i,t*16),n.needsUpdate=!0,this}getMatrixAt(t,e){return this.validateInstanceId(t),e.fromArray(this._matricesTexture.image.data,t*16)}setColorAt(t,e){return this.validateInstanceId(t),this._colorsTexture===null&&this._initColorsTexture(),e.toArray(this._colorsTexture.image.data,t*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(t,e){return this.validateInstanceId(t),this._colorsTexture===null?e.isVector4?e.set(1,1,1,1):e.setRGB(1,1,1):e.fromArray(this._colorsTexture.image.data,t*4)}setVisibleAt(t,e){return this.validateInstanceId(t),this._instanceInfo[t].visible===e?this:(this._instanceInfo[t].visible=e,this._visibilityChanged=!0,this)}getVisibleAt(t){return this.validateInstanceId(t),this._instanceInfo[t].visible}setGeometryIdAt(t,e){return this.validateInstanceId(t),this.validateGeometryId(e),this._instanceInfo[t].geometryIndex=e,this._visibilityChanged=!0,this}getGeometryIdAt(t){return this.validateInstanceId(t),this._instanceInfo[t].geometryIndex}getGeometryRangeAt(t,e={}){this.validateGeometryId(t);const n=this._geometryInfo[t];return e.vertexStart=n.vertexStart,e.vertexCount=n.vertexCount,e.reservedVertexCount=n.reservedVertexCount,e.indexStart=n.indexStart,e.indexCount=n.indexCount,e.reservedIndexCount=n.reservedIndexCount,e.start=n.start,e.count=n.count,e}setInstanceCount(t){const e=this._availableInstanceIds,n=this._instanceInfo;for(e.sort(ph);e[e.length-1]===n.length-1;)n.pop(),e.pop();if(t<n.length)throw new Error(`THREE.BatchedMesh: Instance ids outside the range ${t} are being used. Cannot shrink instance count.`);const i=new Int32Array(t),r=new Int32Array(t);hs(this._multiDrawCounts,i),hs(this._multiDrawStarts,r),this._multiDrawCounts=i,this._multiDrawStarts=r,this._maxInstanceCount=t;const o=this._indirectTexture,a=this._matricesTexture,l=this._colorsTexture;o.dispose(),this._initIndirectTexture(),hs(o.image.data,this._indirectTexture.image.data),a.dispose(),this._initMatricesTexture(),hs(a.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),hs(l.image.data,this._colorsTexture.image.data))}setGeometrySize(t,e){const n=[...this._geometryInfo].filter(a=>a.active);if(Math.max(...n.map(a=>a.vertexStart+a.reservedVertexCount))>t)throw new Error(`THREE.BatchedMesh: Geometry vertex values are being used outside the range ${e}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...n.map(l=>l.indexStart+l.reservedIndexCount))>e)throw new Error(`THREE.BatchedMesh: Geometry index values are being used outside the range ${e}. Cannot shrink further.`);const r=this.geometry;r.dispose(),this._maxVertexCount=t,this._maxIndexCount=e,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new te,this._initializeGeometry(r));const o=this.geometry;r.index&&hs(r.index.array,o.index.array);for(const a in r.attributes)hs(r.attributes[a].array,o.attributes[a].array)}raycast(t,e){const n=this._instanceInfo,i=this._geometryInfo,r=this.matrixWorld,o=this.geometry;rn.material=this.material,rn.geometry.index=o.index,rn.geometry.attributes=o.attributes,rn.geometry.boundingBox===null&&(rn.geometry.boundingBox=new $e),rn.geometry.boundingSphere===null&&(rn.geometry.boundingSphere=new Je);for(let a=0,l=n.length;a<l;a++){if(!n[a].visible||!n[a].active)continue;const c=n[a].geometryIndex,h=i[c];rn.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(a,rn.matrixWorld).premultiply(r),this.getBoundingBoxAt(c,rn.geometry.boundingBox),this.getBoundingSphereAt(c,rn.geometry.boundingSphere),rn.raycast(t,Ma);for(let d=0,u=Ma.length;d<u;d++){const f=Ma[d];f.object=this,f.batchId=a,e.push(f)}Ma.length=0}rn.material=null,rn.geometry.index=null,rn.geometry.attributes={},rn.geometry.setDrawRange(0,1/0)}copy(t){return super.copy(t),this.geometry=t.geometry.clone(),this.perObjectFrustumCulled=t.perObjectFrustumCulled,this.sortObjects=t.sortObjects,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this._geometryInfo=t._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox!==null?e.boundingBox.clone():null,boundingSphere:e.boundingSphere!==null?e.boundingSphere.clone():null})),this._instanceInfo=t._instanceInfo.map(e=>({...e})),this._availableInstanceIds=t._availableInstanceIds.slice(),this._availableGeometryIds=t._availableGeometryIds.slice(),this._nextIndexStart=t._nextIndexStart,this._nextVertexStart=t._nextVertexStart,this._geometryCount=t._geometryCount,this._maxInstanceCount=t._maxInstanceCount,this._maxVertexCount=t._maxVertexCount,this._maxIndexCount=t._maxIndexCount,this._geometryInitialized=t._geometryInitialized,this._multiDrawCounts=t._multiDrawCounts.slice(),this._multiDrawStarts=t._multiDrawStarts.slice(),this._multiDrawBytesPerElement=t._multiDrawBytesPerElement,this._indirectTexture=t._indirectTexture.clone(),this._indirectTexture.image.data=this._indirectTexture.image.data.slice(),this._matricesTexture=t._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=t._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){super.dispose(),this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null)}onBeforeRender(t,e,n,i,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const o=i.getIndex();let a=o===null?1:o.array.BYTES_PER_ELEMENT,l=1;r.wireframe&&(l=2,a=i.attributes.position.count>65535?4:2);const c=this._instanceInfo,h=this._multiDrawStarts,d=this._multiDrawCounts,u=this._geometryInfo,f=this.perObjectFrustumCulled,p=this._indirectTexture,_=p.image.data,m=n.isArrayCamera?s_:i_;f&&(n.isArrayCamera?m.setFromArrayCamera(n):(vn.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),m.setFromProjectionMatrix(vn,n.coordinateSystem,n.reversedDepth)));let g=0;if(this.sortObjects){vn.copy(this.matrixWorld).invert(),$r.setFromMatrixPosition(n.matrixWorld).applyMatrix4(vn),Pf.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(vn);for(let v=0,b=c.length;v<b;v++)if(c[v].visible&&c[v].active){const E=c[v].geometryIndex;this.getMatrixAt(v,vn),this.getBoundingSphereAt(E,cs).applyMatrix4(vn);let R=!1;if(f&&(R=!m.intersectsSphere(cs)),!R){const y=u[E],T=r_.subVectors(cs.center,$r).dot(Pf);mh.push(y.start,y.count,T,v)}}const M=mh.list,S=this.customSort;S===null?M.sort(r.transparent?t_:Qg):S.call(this,M,n);for(let v=0,b=M.length;v<b;v++){const E=M[v];h[g]=E.start*a*l,d[g]=E.count*l,_[g]=E.index,g++}mh.reset()}else for(let M=0,S=c.length;M<S;M++)if(c[M].visible&&c[M].active){const v=c[M].geometryIndex;let b=!1;if(f&&(this.getMatrixAt(M,vn),this.getBoundingSphereAt(v,cs).applyMatrix4(vn),b=!m.intersectsSphere(cs)),!b){const E=u[v];h[g]=E.start*a*l,d[g]=E.count*l,_[g]=M,g++}}p.needsUpdate=!0,this._multiDrawCount=g,this._multiDrawBytesPerElement=a,this._visibilityChanged=!1}onBeforeShadow(t,e,n,i,r,o){this.onBeforeRender(t,null,i,r,o)}}class xn extends tn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const kl=new C,Vl=new C,If=new ie,Jr=new Fs,Sa=new Je,gh=new C,Lf=new C;class es extends ue{constructor(t=new te,e=new xn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)kl.fromBufferAttribute(e,i-1),Vl.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=kl.distanceTo(Vl);t.setAttribute("lineDistance",new yt(n,1))}else Et("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Sa.copy(n.boundingSphere),Sa.applyMatrix4(i),Sa.radius+=r,t.ray.intersectsSphere(Sa)===!1)return;If.copy(i).invert(),Jr.copy(t.ray).applyMatrix4(If);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let _=f,m=p-1;_<m;_+=c){const g=h.getX(_),M=h.getX(_+1),S=ba(this,t,Jr,l,g,M,_);S&&e.push(S)}if(this.isLineLoop){const _=h.getX(p-1),m=h.getX(f),g=ba(this,t,Jr,l,_,m,p-1);g&&e.push(g)}}else{const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=f,m=p-1;_<m;_+=c){const g=ba(this,t,Jr,l,_,_+1,_);g&&e.push(g)}if(this.isLineLoop){const _=ba(this,t,Jr,l,p-1,f,p-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ba(s,t,e,n,i,r,o){const a=s.geometry.attributes.position;if(kl.fromBufferAttribute(a,i),Vl.fromBufferAttribute(a,r),e.distanceSqToSegment(kl,Vl,gh,Lf)>n)return;gh.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(gh);if(!(c<t.near||c>t.far))return{distance:c,point:Lf.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const Df=new C,Nf=new C;class xi extends es{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Df.fromBufferAttribute(e,i),Nf.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Df.distanceTo(Nf);t.setAttribute("lineDistance",new yt(n,1))}else Et("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Yp extends es{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class yu extends tn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Of=new ie,Hh=new Fs,wa=new Je,Ea=new C;class Bs extends ue{constructor(t=new te,e=new yu){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wa.copy(n.boundingSphere),wa.applyMatrix4(i),wa.radius+=r,t.ray.intersectsSphere(wa)===!1)return;Of.copy(i).invert(),Hh.copy(t.ray).applyMatrix4(Of);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=u,_=f;p<_;p++){const m=c.getX(p);Ea.fromBufferAttribute(d,m),Uf(Ea,m,l,i,t,e,this)}}else{const u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let p=u,_=f;p<_;p++)Ea.fromBufferAttribute(d,p),Uf(Ea,p,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Uf(s,t,e,n,i,r,o){const a=Hh.distanceSqToPoint(s);if(a<e){const l=new C;Hh.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class qp extends Le{constructor(t,e,n,i,r=Re,o=Re,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const h=this;function d(){h.needsUpdate=!0,h._requestVideoFrameCallbackId=t.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in t&&(this._requestVideoFrameCallbackId=t.requestVideoFrameCallback(d))}clone(){return new this.constructor(this.image).copy(this)}update(){const t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class a_ extends qp{constructor(t,e,n,i,r,o,a,l){super({},t,e,n,i,r,o,a,l),this.isVideoFrameTexture=!0}update(){}clone(){return new this.constructor().copy(this)}setFrame(t){this.image=t,this.needsUpdate=!0}}class l_ extends Le{constructor(t,e){super({width:t,height:e}),this.isFramebufferTexture=!0,this.magFilter=Fe,this.minFilter=Fe,this.generateMipmaps=!1,this.needsUpdate=!0}}class yc extends Le{constructor(t,e,n,i,r,o,a,l,c,h,d,u){super(null,o,a,l,c,h,i,r,d,u),this.isCompressedTexture=!0,this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}class c_ extends yc{constructor(t,e,n,i,r,o){super(t,e,n,r,o),this.isCompressedArrayTexture=!0,this.image.depth=i,this.wrapR=En,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class h_ extends yc{constructor(t,e,n){super(void 0,t[0].width,t[0].height,e,n,pi),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=t}}class Go extends Le{constructor(t=[],e=pi,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class u_ extends Le{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class f_ extends Le{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isHTMLTexture=!0,this.generateMipmaps=!1,this.needsUpdate=!0;const h=t?t.parentNode:null;h!==null&&"requestPaint"in h&&(h.onpaint=()=>{this.needsUpdate=!0},h.requestPaint())}dispose(){const t=this.image?this.image.parentNode:null;t!==null&&"onpaint"in t&&(t.onpaint=null),super.dispose()}}class Tr extends Le{constructor(t,e,n=kn,i,r,o,a=Fe,l=Fe,c,h=mi,d=1){if(h!==mi&&h!==Zi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:d};super(u,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ci(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class Zp extends Tr{constructor(t,e=kn,n=pi,i,r,o=Fe,a=Fe,l,c=mi){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Mu extends Le{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class _n extends te{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let u=0,f=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(d,2));function p(_,m,g,M,S,v,b,E,R,y,T){const I=v/R,L=b/y,N=v/2,G=b/2,U=E/2,z=R+1,W=y+1;let V=0,nt=0;const B=new C;for(let X=0;X<W;X++){const $=X*L-G;for(let gt=0;gt<z;gt++){const mt=gt*I-N;B[_]=mt*M,B[m]=$*S,B[g]=U,c.push(B.x,B.y,B.z),B[_]=0,B[m]=0,B[g]=E>0?1:-1,h.push(B.x,B.y,B.z),d.push(gt/R),d.push(1-X/y),V+=1}}for(let X=0;X<y;X++)for(let $=0;$<R;$++){const gt=u+$+z*X,mt=u+$+z*(X+1),zt=u+($+1)+z*(X+1),Wt=u+($+1)+z*X;l.push(gt,mt,Wt),l.push(mt,zt,Wt),nt+=6}a.addGroup(f,nt,T),f+=nt,u+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Mc extends te{constructor(t=1,e=1,n=4,i=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:i,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),r=Math.max(1,Math.floor(r));const o=[],a=[],l=[],c=[],h=e/2,d=Math.PI/2*t,u=e,f=2*d+u,p=n*2+r,_=i+1,m=new C,g=new C;for(let M=0;M<=p;M++){let S=0,v=0,b=0,E=0;if(M<=n){const T=M/n,I=T*Math.PI/2;v=-h-t*Math.cos(I),b=t*Math.sin(I),E=-t*Math.cos(I),S=T*d}else if(M<=n+r){const T=(M-n)/r;v=-h+T*e,b=t,E=0,S=d+T*u}else{const T=(M-n-r)/n,I=T*Math.PI/2;v=h+t*Math.sin(I),b=t*Math.cos(I),E=t*Math.sin(I),S=d+u+T*d}const R=Math.max(0,Math.min(1,S/f));let y=0;M===0?y=.5/i:M===p&&(y=-.5/i);for(let T=0;T<=i;T++){const I=T/i,L=I*Math.PI*2,N=Math.sin(L),G=Math.cos(L);g.x=-b*G,g.y=v,g.z=b*N,a.push(g.x,g.y,g.z),m.set(-b*G,E,b*N),m.normalize(),l.push(m.x,m.y,m.z),c.push(I+y,R)}if(M>0){const T=(M-1)*_;for(let I=0;I<i;I++){const L=T+I,N=T+I+1,G=M*_+I,U=M*_+I+1;o.push(L,N,G),o.push(N,U,G)}}}this.setIndex(o),this.setAttribute("position",new yt(a,3)),this.setAttribute("normal",new yt(l,3)),this.setAttribute("uv",new yt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mc(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class Sc extends te{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new C,h=new it;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const f=n+d/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new yt(o,3)),this.setAttribute("normal",new yt(a,3)),this.setAttribute("uv",new yt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sc(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ho extends te{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],u=[],f=[];let p=0;const _=[],m=n/2;let g=0;M(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new yt(d,3)),this.setAttribute("normal",new yt(u,3)),this.setAttribute("uv",new yt(f,2));function M(){const v=new C,b=new C;let E=0;const R=(e-t)/n;for(let y=0;y<=r;y++){const T=[],I=y/r,L=I*(e-t)+t;for(let N=0;N<=i;N++){const G=N/i,U=G*l+a,z=Math.sin(U),W=Math.cos(U);b.x=L*z,b.y=-I*n+m,b.z=L*W,d.push(b.x,b.y,b.z),v.set(z,R,W).normalize(),u.push(v.x,v.y,v.z),f.push(G,1-I),T.push(p++)}_.push(T)}for(let y=0;y<i;y++)for(let T=0;T<r;T++){const I=_[T][y],L=_[T+1][y],N=_[T+1][y+1],G=_[T][y+1];(t>0||T!==0)&&(h.push(I,L,G),E+=3),(e>0||T!==r-1)&&(h.push(L,N,G),E+=3)}c.addGroup(g,E,0),g+=E}function S(v){const b=p,E=new it,R=new C;let y=0;const T=v===!0?t:e,I=v===!0?1:-1;for(let N=1;N<=i;N++)d.push(0,m*I,0),u.push(0,I,0),f.push(.5,.5),p++;const L=p;for(let N=0;N<=i;N++){const U=N/i*l+a,z=Math.cos(U),W=Math.sin(U);R.x=T*W,R.y=m*I,R.z=T*z,d.push(R.x,R.y,R.z),u.push(0,I,0),E.x=z*.5+.5,E.y=W*.5*I+.5,f.push(E.x,E.y),p++}for(let N=0;N<i;N++){const G=b+N,U=L+N;v===!0?h.push(U,U+1,G):h.push(U+1,U,G),y+=3}c.addGroup(g,y,v===!0?1:2),g+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ho(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Wo extends Ho{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Wo(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ns extends te{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new yt(r,3)),this.setAttribute("normal",new yt(r.slice(),3)),this.setAttribute("uv",new yt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const S=new C,v=new C,b=new C;for(let E=0;E<e.length;E+=3)f(e[E+0],S),f(e[E+1],v),f(e[E+2],b),l(S,v,b,M)}function l(M,S,v,b){const E=b+1,R=[];for(let y=0;y<=E;y++){R[y]=[];const T=M.clone().lerp(v,y/E),I=S.clone().lerp(v,y/E),L=E-y;for(let N=0;N<=L;N++)N===0&&y===E?R[y][N]=T:R[y][N]=T.clone().lerp(I,N/L)}for(let y=0;y<E;y++)for(let T=0;T<2*(E-y)-1;T++){const I=Math.floor(T/2);T%2===0?(u(R[y][I+1]),u(R[y+1][I]),u(R[y][I])):(u(R[y][I+1]),u(R[y+1][I+1]),u(R[y+1][I]))}}function c(M){const S=new C;for(let v=0;v<r.length;v+=3)S.x=r[v+0],S.y=r[v+1],S.z=r[v+2],S.normalize().multiplyScalar(M),r[v+0]=S.x,r[v+1]=S.y,r[v+2]=S.z}function h(){const M=new C;for(let S=0;S<r.length;S+=3){M.x=r[S+0],M.y=r[S+1],M.z=r[S+2];const v=m(M)/2/Math.PI+.5,b=g(M)/Math.PI+.5;o.push(v,1-b)}p(),d()}function d(){for(let M=0;M<o.length;M+=6){const S=o[M+0],v=o[M+2],b=o[M+4],E=Math.max(S,v,b),R=Math.min(S,v,b);E>.9&&R<.1&&(S<.2&&(o[M+0]+=1),v<.2&&(o[M+2]+=1),b<.2&&(o[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function f(M,S){const v=M*3;S.x=t[v+0],S.y=t[v+1],S.z=t[v+2]}function p(){const M=new C,S=new C,v=new C,b=new C,E=new it,R=new it,y=new it;for(let T=0,I=0;T<r.length;T+=9,I+=6){M.set(r[T+0],r[T+1],r[T+2]),S.set(r[T+3],r[T+4],r[T+5]),v.set(r[T+6],r[T+7],r[T+8]),E.set(o[I+0],o[I+1]),R.set(o[I+2],o[I+3]),y.set(o[I+4],o[I+5]),b.copy(M).add(S).add(v).divideScalar(3);const L=m(b);_(E,I+0,M,L),_(R,I+2,S,L),_(y,I+4,v,L)}}function _(M,S,v,b){b<0&&M.x===1&&(o[S]=M.x-1),v.x===0&&v.z===0&&(o[S]=b/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function g(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ns(t.vertices,t.indices,t.radius,t.detail)}}class bc extends ns{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new bc(t.radius,t.detail)}}const Ta=new C,Aa=new C,_h=new C,Ra=new wn;class Kp extends te{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),r=Math.cos(As*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u={},f=[];for(let p=0;p<l;p+=3){o?(c[0]=o.getX(p),c[1]=o.getX(p+1),c[2]=o.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);const{a:_,b:m,c:g}=Ra;if(_.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),g.fromBufferAttribute(a,c[2]),Ra.getNormal(_h),d[0]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,d[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,d[2]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let M=0;M<3;M++){const S=(M+1)%3,v=d[M],b=d[S],E=Ra[h[M]],R=Ra[h[S]],y=`${v}_${b}`,T=`${b}_${v}`;T in u&&u[T]?(_h.dot(u[T].normal)<=r&&(f.push(E.x,E.y,E.z),f.push(R.x,R.y,R.z)),u[T]=null):y in u||(u[y]={index0:c[M],index1:c[S],normal:_h.clone()})}}for(const p in u)if(u[p]){const{index0:_,index1:m}=u[p];Ta.fromBufferAttribute(a,_),Aa.fromBufferAttribute(a,m),f.push(Ta.x,Ta.y,Ta.z),f.push(Aa.x,Aa.y,Aa.z)}this.setAttribute("position",new yt(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class ri{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Et("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],u=n[i+1]-h,f=(o-h)/u;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new it:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new C,i=[],r=[],o=[],a=new C,l=new ie;for(let f=0;f<=t;f++){const p=f/t;i[f]=this.getTangentAt(p,new C)}r[0]=new C,o[0]=new C;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const p=Math.acos(ne(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(ne(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],f*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class wc extends ri{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new it){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class $p extends wc{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Su(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,i(o,a,u,f)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const Ff=new C,Bf=new C,xh=new Su,vh=new Su,yh=new Su;class Jp extends ri{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new C){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(Bf.subVectors(i[0],i[1]).add(i[0]),c=Bf);const d=i[a%r],u=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Ff.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Ff),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);_<1e-4&&(_=1),p<1e-4&&(p=_),m<1e-4&&(m=_),xh.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,_,m),vh.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,_,m),yh.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,_,m)}else this.curveType==="catmullrom"&&(xh.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),vh.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),yh.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(xh.calc(l),vh.calc(l),yh.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new C().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function zf(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function d_(s,t){const e=1-s;return e*e*t}function p_(s,t){return 2*(1-s)*s*t}function m_(s,t){return s*s*t}function go(s,t,e,n){return d_(s,t)+p_(s,e)+m_(s,n)}function g_(s,t){const e=1-s;return e*e*e*t}function __(s,t){const e=1-s;return 3*e*e*s*t}function x_(s,t){return 3*(1-s)*s*s*t}function v_(s,t){return s*s*s*t}function _o(s,t,e,n,i){return g_(s,t)+__(s,e)+x_(s,n)+v_(s,i)}class bu extends ri{constructor(t=new it,e=new it,n=new it,i=new it){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new it){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(_o(t,i.x,r.x,o.x,a.x),_o(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class jp extends ri{constructor(t=new C,e=new C,n=new C,i=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new C){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(_o(t,i.x,r.x,o.x,a.x),_o(t,i.y,r.y,o.y,a.y),_o(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class wu extends ri{constructor(t=new it,e=new it){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new it){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new it){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Qp extends ri{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Eu extends ri{constructor(t=new it,e=new it,n=new it){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new it){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(go(t,i.x,r.x,o.x),go(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Tu extends ri{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(go(t,i.x,r.x,o.x),go(t,i.y,r.y,o.y),go(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Au extends ri{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new it){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(zf(a,l.x,c.x,h.x,d.x),zf(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new it().fromArray(i))}return this}}var Gl=Object.freeze({__proto__:null,ArcCurve:$p,CatmullRomCurve3:Jp,CubicBezierCurve:bu,CubicBezierCurve3:jp,EllipseCurve:wc,LineCurve:wu,LineCurve3:Qp,QuadraticBezierCurve:Eu,QuadraticBezierCurve3:Tu,SplineCurve:Au});class tm extends ri{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Gl[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Gl[i.type]().fromJSON(i))}return this}}class Po extends tm{constructor(t){super(),this.type="Path",this.currentPoint=new it,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new wu(this.currentPoint.clone(),new it(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new Eu(this.currentPoint.clone(),new it(t,e),new it(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new bu(this.currentPoint.clone(),new it(t,e),new it(n,i),new it(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Au(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){const c=new wc(t,e,n,i,r,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Xo extends Po{constructor(t){super(t),this.uuid=Nn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Po().fromJSON(i))}return this}}function y_(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=em(s,0,i,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=E_(s,t,r,e)),s.length>80*e){a=s[0],l=s[1];let h=a,d=l;for(let u=e;u<i;u+=e){const f=s[u],p=s[u+1];f<a&&(a=f),p<l&&(l=p),f>h&&(h=f),p>d&&(d=p)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return Io(r,o,e,a,l,c,0),o}function em(s,t,e,n,i){let r;if(i===U_(s,t,e,n)>0)for(let o=t;o<e;o+=n)r=kf(o/n|0,s[o],s[o+1],r);else for(let o=e-n;o>=t;o-=n)r=kf(o/n|0,s[o],s[o+1],r);return r&&Ar(r,r.next)&&(Do(r),r=r.next),r}function Ds(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Ar(e,e.next)||Ie(e.prev,e,e.next)===0)){if(Do(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Io(s,t,e,n,i,r,o){if(!s)return;!o&&r&&P_(s,n,i,r);let a=s;for(;s.prev!==s.next;){const l=s.prev,c=s.next;if(r?S_(s,n,i,r):M_(s)){t.push(l.i,s.i,c.i),Do(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=b_(Ds(s),t),Io(s,t,e,n,i,r,2)):o===2&&w_(s,t,e,n,i,r):Io(Ds(s),t,e,n,i,r,1);break}}}function M_(s){const t=s.prev,e=s,n=s.next;if(Ie(t,e,n)>=0)return!1;const i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(i,r,o),d=Math.min(a,l,c),u=Math.max(i,r,o),f=Math.max(a,l,c);let p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&so(i,a,r,l,o,c,p.x,p.y)&&Ie(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function S_(s,t,e,n){const i=s.prev,r=s,o=s.next;if(Ie(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,h=i.y,d=r.y,u=o.y,f=Math.min(a,l,c),p=Math.min(h,d,u),_=Math.max(a,l,c),m=Math.max(h,d,u),g=Wh(f,p,t,e,n),M=Wh(_,m,t,e,n);let S=s.prevZ,v=s.nextZ;for(;S&&S.z>=g&&v&&v.z<=M;){if(S.x>=f&&S.x<=_&&S.y>=p&&S.y<=m&&S!==i&&S!==o&&so(a,h,l,d,c,u,S.x,S.y)&&Ie(S.prev,S,S.next)>=0||(S=S.prevZ,v.x>=f&&v.x<=_&&v.y>=p&&v.y<=m&&v!==i&&v!==o&&so(a,h,l,d,c,u,v.x,v.y)&&Ie(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;S&&S.z>=g;){if(S.x>=f&&S.x<=_&&S.y>=p&&S.y<=m&&S!==i&&S!==o&&so(a,h,l,d,c,u,S.x,S.y)&&Ie(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;v&&v.z<=M;){if(v.x>=f&&v.x<=_&&v.y>=p&&v.y<=m&&v!==i&&v!==o&&so(a,h,l,d,c,u,v.x,v.y)&&Ie(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function b_(s,t){let e=s;do{const n=e.prev,i=e.next.next;!Ar(n,i)&&im(n,e,e.next,i)&&Lo(n,i)&&Lo(i,n)&&(t.push(n.i,e.i,i.i),Do(e),Do(e.next),e=s=i),e=e.next}while(e!==s);return Ds(e)}function w_(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&D_(o,a)){let l=sm(o,a);o=Ds(o,o.next),l=Ds(l,l.next),Io(o,t,e,n,i,r,0),Io(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function E_(s,t,e,n){const i=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=em(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(L_(c))}i.sort(T_);for(let r=0;r<i.length;r++)e=A_(i[r],e);return e}function T_(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){const n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function A_(s,t){const e=R_(s,t);if(!e)return t;const n=sm(e,s);return Ds(n,n.next),Ds(e,e.next)}function R_(s,t){let e=t;const n=s.x,i=s.y;let r=-1/0,o;if(Ar(s,e))return e;do{if(Ar(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const d=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&nm(i<c?n:r,i,l,c,i<c?r:n,i,e.x,e.y)){const d=Math.abs(i-e.y)/(n-e.x);Lo(e,s)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&C_(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function C_(s,t){return Ie(s.prev,s,t.prev)<0&&Ie(t.next,s,s.next)<0}function P_(s,t,e,n){let i=s;do i.z===0&&(i.z=Wh(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,I_(i)}function I_(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,e*=2}while(t>1);return s}function Wh(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function L_(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function nm(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function so(s,t,e,n,i,r,o,a){return!(s===o&&t===a)&&nm(s,t,e,n,i,r,o,a)}function D_(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!N_(s,t)&&(Lo(s,t)&&Lo(t,s)&&O_(s,t)&&(Ie(s.prev,s,t.prev)||Ie(s,t.prev,t))||Ar(s,t)&&Ie(s.prev,s,s.next)>0&&Ie(t.prev,t,t.next)>0)}function Ie(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Ar(s,t){return s.x===t.x&&s.y===t.y}function im(s,t,e,n){const i=Pa(Ie(s,t,e)),r=Pa(Ie(s,t,n)),o=Pa(Ie(e,n,s)),a=Pa(Ie(e,n,t));return!!(i!==r&&o!==a||i===0&&Ca(s,e,t)||r===0&&Ca(s,n,t)||o===0&&Ca(e,s,n)||a===0&&Ca(e,t,n))}function Ca(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Pa(s){return s>0?1:s<0?-1:0}function N_(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&im(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Lo(s,t){return Ie(s.prev,s,s.next)<0?Ie(s,t,s.next)>=0&&Ie(s,s.prev,t)>=0:Ie(s,t,s.prev)<0||Ie(s,s.next,t)<0}function O_(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function sm(s,t){const e=Xh(s.i,s.x,s.y),n=Xh(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function kf(s,t,e,n){const i=Xh(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Do(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Xh(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function U_(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class F_{static triangulate(t,e,n=2){return y_(t,e,n)}}class Qn{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return Qn.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];Vf(t),Gf(n,t);let o=t.length;e.forEach(Vf);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,Gf(n,e[l]);const a=F_.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Vf(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Gf(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Ec extends te{constructor(t=new Xo([new it(.5,.5),new it(-.5,.5),new it(-.5,-.5),new it(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new yt(i,3)),this.setAttribute("uv",new yt(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const g=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:B_;let S,v=!1,b,E,R,y;if(g){S=g.getSpacedPoints(h),v=!0,u=!1;const K=g.isCatmullRomCurve3?g.closed:!1;b=g.computeFrenetFrames(h,K),E=new C,R=new C,y=new C}u||(m=0,f=0,p=0,_=0);const T=a.extractPoints(c);let I=T.shape;const L=T.holes;if(!Qn.isClockWise(I)){I=I.reverse();for(let K=0,rt=L.length;K<rt;K++){const dt=L[K];Qn.isClockWise(dt)&&(L[K]=dt.reverse())}}function G(K){const dt=10000000000000001e-36;let ht=K[0];for(let vt=1;vt<=K.length;vt++){const Nt=vt%K.length,Tt=K[Nt],kt=Tt.x-ht.x,$t=Tt.y-ht.y,O=kt*kt+$t*$t,fe=Math.max(Math.abs(Tt.x),Math.abs(Tt.y),Math.abs(ht.x),Math.abs(ht.y)),se=dt*fe*fe;if(O<=se){K.splice(Nt,1),vt--;continue}ht=Tt}}G(I),L.forEach(G);const U=L.length,z=I;for(let K=0;K<U;K++){const rt=L[K];I=I.concat(rt)}function W(K,rt,dt){return rt||Kt("ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(rt,dt)}const V=I.length;function nt(K,rt,dt){let ht,vt,Nt;const Tt=K.x-rt.x,kt=K.y-rt.y,$t=dt.x-K.x,O=dt.y-K.y,fe=Tt*Tt+kt*kt,se=Tt*O-kt*$t;if(Math.abs(se)>Number.EPSILON){const P=Math.sqrt(fe),w=Math.sqrt($t*$t+O*O),D=rt.x-kt/P,F=rt.y+Tt/P,Z=dt.x-O/w,ot=dt.y+$t/w,_t=((Z-D)*O-(ot-F)*$t)/(Tt*O-kt*$t);ht=D+Tt*_t-K.x,vt=F+kt*_t-K.y;const tt=ht*ht+vt*vt;if(tt<=2)return new it(ht,vt);Nt=Math.sqrt(tt/2)}else{let P=!1;Tt>Number.EPSILON?$t>Number.EPSILON&&(P=!0):Tt<-Number.EPSILON?$t<-Number.EPSILON&&(P=!0):Math.sign(kt)===Math.sign(O)&&(P=!0),P?(ht=-kt,vt=Tt,Nt=Math.sqrt(fe)):(ht=Tt,vt=kt,Nt=Math.sqrt(fe/2))}return new it(ht/Nt,vt/Nt)}const B=[];for(let K=0,rt=z.length,dt=rt-1,ht=K+1;K<rt;K++,dt++,ht++)dt===rt&&(dt=0),ht===rt&&(ht=0),B[K]=nt(z[K],z[dt],z[ht]);const X=[];let $,gt=B.concat();for(let K=0,rt=U;K<rt;K++){const dt=L[K];$=[];for(let ht=0,vt=dt.length,Nt=vt-1,Tt=ht+1;ht<vt;ht++,Nt++,Tt++)Nt===vt&&(Nt=0),Tt===vt&&(Tt=0),$[ht]=nt(dt[ht],dt[Nt],dt[Tt]);X.push($),gt=gt.concat($)}let mt;if(m===0)mt=Qn.triangulateShape(z,L);else{const K=[],rt=[];for(let dt=0;dt<m;dt++){const ht=dt/m,vt=f*Math.cos(ht*Math.PI/2),Nt=p*Math.sin(ht*Math.PI/2)+_;for(let Tt=0,kt=z.length;Tt<kt;Tt++){const $t=W(z[Tt],B[Tt],Nt);ut($t.x,$t.y,-vt),ht===0&&K.push($t)}for(let Tt=0,kt=U;Tt<kt;Tt++){const $t=L[Tt];$=X[Tt];const O=[];for(let fe=0,se=$t.length;fe<se;fe++){const P=W($t[fe],$[fe],Nt);ut(P.x,P.y,-vt),ht===0&&O.push(P)}ht===0&&rt.push(O)}}mt=Qn.triangulateShape(K,rt)}const zt=mt.length,Wt=p+_;for(let K=0;K<V;K++){const rt=u?W(I[K],gt[K],Wt):I[K];v?(R.copy(b.normals[0]).multiplyScalar(rt.x),E.copy(b.binormals[0]).multiplyScalar(rt.y),y.copy(S[0]).add(R).add(E),ut(y.x,y.y,y.z)):ut(rt.x,rt.y,0)}for(let K=1;K<=h;K++)for(let rt=0;rt<V;rt++){const dt=u?W(I[rt],gt[rt],Wt):I[rt];v?(R.copy(b.normals[K]).multiplyScalar(dt.x),E.copy(b.binormals[K]).multiplyScalar(dt.y),y.copy(S[K]).add(R).add(E),ut(y.x,y.y,y.z)):ut(dt.x,dt.y,d/h*K)}for(let K=m-1;K>=0;K--){const rt=K/m,dt=f*Math.cos(rt*Math.PI/2),ht=p*Math.sin(rt*Math.PI/2)+_;for(let vt=0,Nt=z.length;vt<Nt;vt++){const Tt=W(z[vt],B[vt],ht);ut(Tt.x,Tt.y,d+dt)}for(let vt=0,Nt=L.length;vt<Nt;vt++){const Tt=L[vt];$=X[vt];for(let kt=0,$t=Tt.length;kt<$t;kt++){const O=W(Tt[kt],$[kt],ht);v?ut(O.x,O.y+S[h-1].y,S[h-1].x+dt):ut(O.x,O.y,d+dt)}}}Dt(),J();function Dt(){const K=i.length/3;if(u){let rt=0,dt=V*rt;for(let ht=0;ht<zt;ht++){const vt=mt[ht];xt(vt[2]+dt,vt[1]+dt,vt[0]+dt)}rt=h+m*2,dt=V*rt;for(let ht=0;ht<zt;ht++){const vt=mt[ht];xt(vt[0]+dt,vt[1]+dt,vt[2]+dt)}}else{for(let rt=0;rt<zt;rt++){const dt=mt[rt];xt(dt[2],dt[1],dt[0])}for(let rt=0;rt<zt;rt++){const dt=mt[rt];xt(dt[0]+V*h,dt[1]+V*h,dt[2]+V*h)}}n.addGroup(K,i.length/3-K,0)}function J(){const K=i.length/3;let rt=0;et(z,rt),rt+=z.length;for(let dt=0,ht=L.length;dt<ht;dt++){const vt=L[dt];et(vt,rt),rt+=vt.length}n.addGroup(K,i.length/3-K,1)}function et(K,rt){let dt=K.length;for(;--dt>=0;){const ht=dt;let vt=dt-1;vt<0&&(vt=K.length-1);for(let Nt=0,Tt=h+m*2;Nt<Tt;Nt++){const kt=V*Nt,$t=V*(Nt+1),O=rt+ht+kt,fe=rt+vt+kt,se=rt+vt+$t,P=rt+ht+$t;st(O,fe,se,P)}}}function ut(K,rt,dt){l.push(K),l.push(rt),l.push(dt)}function xt(K,rt,dt){Mt(K),Mt(rt),Mt(dt);const ht=i.length/3,vt=M.generateTopUV(n,i,ht-3,ht-2,ht-1);qt(vt[0]),qt(vt[1]),qt(vt[2])}function st(K,rt,dt,ht){Mt(K),Mt(rt),Mt(ht),Mt(rt),Mt(dt),Mt(ht);const vt=i.length/3,Nt=M.generateSideWallUV(n,i,vt-6,vt-3,vt-2,vt-1);qt(Nt[0]),qt(Nt[1]),qt(Nt[3]),qt(Nt[1]),qt(Nt[2]),qt(Nt[3])}function Mt(K){i.push(l[K*3+0]),i.push(l[K*3+1]),i.push(l[K*3+2])}function qt(K){r.push(K.x),r.push(K.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return z_(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Gl[i.type]().fromJSON(i)),new Ec(n,t.options)}}const B_={generateTopUV:function(s,t,e,n,i){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new it(r,o),new it(a,l),new it(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[i*3],f=t[i*3+1],p=t[i*3+2],_=t[r*3],m=t[r*3+1],g=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new it(o,1-l),new it(c,1-d),new it(u,1-p),new it(_,1-g)]:[new it(a,1-l),new it(h,1-d),new it(f,1-p),new it(m,1-g)]}};function z_(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Tc extends ns{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Tc(t.radius,t.detail)}}class Ac extends te{constructor(t=[new it(0,-.5),new it(.5,0),new it(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=ne(i,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/e,d=new C,u=new it,f=new C,p=new C,_=new C;let m=0,g=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,g=t[M+1].y-t[M].y,f.x=g*1,f.y=-m,f.z=g*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[M+1].x-t[M].x,g=t[M+1].y-t[M].y,f.x=g*1,f.y=-m,f.z=g*0,p.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(p)}for(let M=0;M<=e;M++){const S=n+M*h*i,v=Math.sin(S),b=Math.cos(S);for(let E=0;E<=t.length-1;E++){d.x=t[E].x*v,d.y=t[E].y,d.z=t[E].x*b,o.push(d.x,d.y,d.z),u.x=M/e,u.y=E/(t.length-1),a.push(u.x,u.y);const R=l[3*E+0]*v,y=l[3*E+1],T=l[3*E+0]*b;c.push(R,y,T)}}for(let M=0;M<e;M++)for(let S=0;S<t.length-1;S++){const v=S+M*t.length,b=v,E=v+t.length,R=v+t.length+1,y=v+1;r.push(b,E,y),r.push(R,y,E)}this.setIndex(r),this.setAttribute("position",new yt(o,3)),this.setAttribute("uv",new yt(a,2)),this.setAttribute("normal",new yt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ac(t.points,t.segments,t.phiStart,t.phiLength)}}class Yo extends ns{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Yo(t.radius,t.detail)}}class Dr extends te{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,u=e/l,f=[],p=[],_=[],m=[];for(let g=0;g<h;g++){const M=g*u-o;for(let S=0;S<c;S++){const v=S*d-r;p.push(v,-M,0),_.push(0,0,1),m.push(S/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let M=0;M<a;M++){const S=M+c*g,v=M+c*(g+1),b=M+1+c*(g+1),E=M+1+c*g;f.push(S,v,E),f.push(v,b,E)}this.setIndex(f),this.setAttribute("position",new yt(p,3)),this.setAttribute("normal",new yt(_,3)),this.setAttribute("uv",new yt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dr(t.width,t.height,t.widthSegments,t.heightSegments)}}class Rc extends te{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let d=t;const u=(e-t)/i,f=new C,p=new it;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const g=r+m/n*o;f.x=d*Math.cos(g),f.y=d*Math.sin(g),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/e+1)/2,p.y=(f.y/e+1)/2,h.push(p.x,p.y)}d+=u}for(let _=0;_<i;_++){const m=_*(n+1);for(let g=0;g<n;g++){const M=g+m,S=M,v=M+n+1,b=M+n+2,E=M+1;a.push(S,v,E),a.push(v,b,E)}}this.setIndex(a),this.setAttribute("position",new yt(l,3)),this.setAttribute("normal",new yt(c,3)),this.setAttribute("uv",new yt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rc(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Cc extends te{constructor(t=new Xo([new it(0,.5),new it(-.5,-.5),new it(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new yt(i,3)),this.setAttribute("normal",new yt(r,3)),this.setAttribute("uv",new yt(o,2));function c(h){const d=i.length/3,u=h.extractPoints(e);let f=u.shape;const p=u.holes;Qn.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,g=p.length;m<g;m++){const M=p[m];Qn.isClockWise(M)===!0&&(p[m]=M.reverse())}const _=Qn.triangulateShape(f,p);for(let m=0,g=p.length;m<g;m++){const M=p[m];f=f.concat(M)}for(let m=0,g=f.length;m<g;m++){const M=f[m];i.push(M.x,M.y,0),r.push(0,0,1),o.push(M.x,M.y)}for(let m=0,g=_.length;m<g;m++){const M=_[m],S=M[0]+d,v=M[1]+d,b=M[2]+d;n.push(S,v,b),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return k_(e,t)}static fromJSON(t,e){const n=[];for(let i=0,r=t.shapes.length;i<r;i++){const o=e[t.shapes[i]];n.push(o)}return new Cc(n,t.curveSegments)}}function k_(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class Nr extends te{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new C,u=new C,f=[],p=[],_=[],m=[];for(let g=0;g<=n;g++){const M=[],S=g/n,v=o+S*a,b=t*Math.cos(v),E=Math.sqrt(t*t-b*b);let R=0;g===0&&o===0?R=.5/e:g===n&&l===Math.PI&&(R=-.5/e);for(let y=0;y<=e;y++){const T=y/e,I=i+T*r;d.x=-E*Math.cos(I),d.y=b,d.z=E*Math.sin(I),p.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),m.push(T+R,1-S),M.push(c++)}h.push(M)}for(let g=0;g<n;g++)for(let M=0;M<e;M++){const S=h[g][M+1],v=h[g][M],b=h[g+1][M],E=h[g+1][M+1];(g!==0||o>0)&&f.push(S,v,E),(g!==n-1||l<Math.PI)&&f.push(v,b,E)}this.setIndex(f),this.setAttribute("position",new yt(p,3)),this.setAttribute("normal",new yt(_,3)),this.setAttribute("uv",new yt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Nr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Pc extends ns{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Pc(t.radius,t.detail)}}class Ic extends te{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);const l=[],c=[],h=[],d=[],u=new C,f=new C,p=new C;for(let _=0;_<=n;_++){const m=o+_/n*a;for(let g=0;g<=i;g++){const M=g/i*r;f.x=(t+e*Math.cos(m))*Math.cos(M),f.y=(t+e*Math.cos(m))*Math.sin(M),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),d.push(g/i),d.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=i;m++){const g=(i+1)*_+m-1,M=(i+1)*(_-1)+m-1,S=(i+1)*(_-1)+m,v=(i+1)*_+m;l.push(g,M,v),l.push(M,S,v)}this.setIndex(l),this.setAttribute("position",new yt(c,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ic(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}class Lc extends te{constructor(t=1,e=.4,n=64,i=8,r=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:r,q:o},n=Math.floor(n),i=Math.floor(i);const a=[],l=[],c=[],h=[],d=new C,u=new C,f=new C,p=new C,_=new C,m=new C,g=new C;for(let S=0;S<=n;++S){const v=S/n*r*Math.PI*2;M(v,r,o,t,f),M(v+.01,r,o,t,p),m.subVectors(p,f),g.addVectors(p,f),_.crossVectors(m,g),g.crossVectors(_,m),_.normalize(),g.normalize();for(let b=0;b<=i;++b){const E=b/i*Math.PI*2,R=-e*Math.cos(E),y=e*Math.sin(E);d.x=f.x+(R*g.x+y*_.x),d.y=f.y+(R*g.y+y*_.y),d.z=f.z+(R*g.z+y*_.z),l.push(d.x,d.y,d.z),u.subVectors(d,f).normalize(),c.push(u.x,u.y,u.z),h.push(S/n),h.push(b/i)}}for(let S=1;S<=n;S++)for(let v=1;v<=i;v++){const b=(i+1)*(S-1)+(v-1),E=(i+1)*S+(v-1),R=(i+1)*S+v,y=(i+1)*(S-1)+v;a.push(b,E,y),a.push(E,R,y)}this.setIndex(a),this.setAttribute("position",new yt(l,3)),this.setAttribute("normal",new yt(c,3)),this.setAttribute("uv",new yt(h,2));function M(S,v,b,E,R){const y=Math.cos(S),T=Math.sin(S),I=b/v*S,L=Math.cos(I);R.x=E*(2+L)*.5*y,R.y=E*(2+L)*T*.5,R.z=E*Math.sin(I)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lc(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class Dc extends te{constructor(t=new Tu(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new C,l=new C,c=new it;let h=new C;const d=[],u=[],f=[],p=[];_(),this.setIndex(p),this.setAttribute("position",new yt(d,3)),this.setAttribute("normal",new yt(u,3)),this.setAttribute("uv",new yt(f,2));function _(){for(let S=0;S<e;S++)m(S);m(r===!1?e:0),M(),g()}function m(S){h=t.getPointAt(S/e,h);const v=o.normals[S],b=o.binormals[S];for(let E=0;E<=i;E++){const R=E/i*Math.PI*2,y=Math.sin(R),T=-Math.cos(R);l.x=T*v.x+y*b.x,l.y=T*v.y+y*b.y,l.z=T*v.z+y*b.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function g(){for(let S=1;S<=e;S++)for(let v=1;v<=i;v++){const b=(i+1)*(S-1)+(v-1),E=(i+1)*S+(v-1),R=(i+1)*S+v,y=(i+1)*(S-1)+v;p.push(b,E,y),p.push(E,R,y)}}function M(){for(let S=0;S<=e;S++)for(let v=0;v<=i;v++)c.x=S/e,c.y=v/i,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Dc(new Gl[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class rm extends te{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],n=new Set,i=new C,r=new C;if(t.index!==null){const o=t.attributes.position,a=t.index;let l=t.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const d=l[c],u=d.start,f=d.count;for(let p=u,_=u+f;p<_;p+=3)for(let m=0;m<3;m++){const g=a.getX(p+m),M=a.getX(p+(m+1)%3);i.fromBufferAttribute(o,g),r.fromBufferAttribute(o,M),Hf(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}}else{const o=t.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const h=3*a+c,d=3*a+(c+1)%3;i.fromBufferAttribute(o,h),r.fromBufferAttribute(o,d),Hf(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new yt(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function Hf(s,t,e){const n=`${s.x},${s.y},${s.z}-${t.x},${t.y},${t.z}`,i=`${t.x},${t.y},${t.z}-${s.x},${s.y},${s.z}`;return e.has(n)===!0||e.has(i)===!0?!1:(e.add(n),e.add(i),!0)}var Wf=Object.freeze({__proto__:null,BoxGeometry:_n,CapsuleGeometry:Mc,CircleGeometry:Sc,ConeGeometry:Wo,CylinderGeometry:Ho,DodecahedronGeometry:bc,EdgesGeometry:Kp,ExtrudeGeometry:Ec,IcosahedronGeometry:Tc,LatheGeometry:Ac,OctahedronGeometry:Yo,PlaneGeometry:Dr,PolyhedronGeometry:ns,RingGeometry:Rc,ShapeGeometry:Cc,SphereGeometry:Nr,TetrahedronGeometry:Pc,TorusGeometry:Ic,TorusKnotGeometry:Lc,TubeGeometry:Dc,WireframeGeometry:rm});class om extends tn{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new pt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}function Rr(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];if(Xf(i))i.isRenderTargetTexture?(Et("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(Xf(i[0])){const r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function hn(s){const t={};for(let e=0;e<s.length;e++){const n=Rr(s[e]);for(const i in n)t[i]=n[i]}return t}function Xf(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function V_(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function am(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}const Ns={clone:Rr,merge:hn};var G_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,H_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ce extends tn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=G_,this.fragmentShader=H_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Rr(t.uniforms),this.uniformsGroups=V_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new pt().setHex(i.value);break;case"v2":this.uniforms[n].value=new it().fromArray(i.value);break;case"v3":this.uniforms[n].value=new C().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Me().fromArray(i.value);break;case"m3":this.uniforms[n].value=new re().fromArray(i.value);break;case"m4":this.uniforms[n].value=new ie().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Nc extends Ce{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class qo extends tn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Di,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class lm extends qo{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new it(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ne(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new pt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new pt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new pt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class cm extends tn{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new pt(16777215),this.specular=new pt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Di,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=Bo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class hm extends tn{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new pt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Di,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}class um extends tn{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Di,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class Rs extends tn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Di,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=Bo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ru extends tn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ap,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Cu extends tn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class fm extends tn{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new pt(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Di,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this.fog=t.fog,this}}class dm extends xn{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}function qn(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function xo(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function pm(s){function t(i,r){return s[i]-s[r]}const e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function Yh(s,t,e){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=e[r]*t;for(let l=0;l!==t;++l)i[o++]=s[a+l]}return i}function mm(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push(...o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=s[i++];while(r!==void 0)}function W_(s,t,e,n,i=30){const r=s.clone();r.name=t;const o=[];for(let l=0;l<r.tracks.length;++l){const c=r.tracks[l],h=c.getValueSize(),d=[],u=[];for(let f=0;f<c.times.length;++f){const p=c.times[f]*i;if(!(p<e||p>=n)){d.push(c.times[f]);for(let _=0;_<h;++_)u.push(c.values[f*h+_])}}d.length!==0&&(c.times=qn(d,c.times.constructor),c.values=qn(u,c.values.constructor),o.push(c))}r.tracks=o;let a=1/0;for(let l=0;l<r.tracks.length;++l)a>r.tracks[l].times[0]&&(a=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*a);return r.resetDuration(),r}function X_(s,t=0,e=s,n=30){n<=0&&(n=30);const i=e.tracks.length,r=t/n;for(let o=0;o<i;++o){const a=e.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;const c=s.tracks.find(function(g){return g.name===a.name&&g.ValueTypeName===l});if(c===void 0)continue;let h=0;const d=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=d/3);let u=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=f/3);const p=a.times.length-1;let _;if(r<=a.times[0]){const g=h,M=d-h;_=a.values.slice(g,M)}else if(r>=a.times[p]){const g=p*d+h,M=g+d-h;_=a.values.slice(g,M)}else{const g=a.createInterpolant(),M=h,S=d-h;g.evaluate(r),_=g.resultBuffer.slice(M,S)}l==="quaternion"&&new Qe().fromArray(_).normalize().conjugate().toArray(_);const m=c.times.length;for(let g=0;g<m;++g){const M=g*f+u;if(l==="quaternion")Qe.multiplyQuaternionsFlat(c.values,M,_,0,c.values,M);else{const S=f-u*2;for(let v=0;v<S;++v)c.values[M+v]-=_[v]}}}return s.blendMode=fu,s}class Y_{static convertArray(t,e){return qn(t,e)}static isTypedArray(t){return Up(t)}static hasTangents(t){return xo(t)}static getKeyframeOrder(t){return pm(t)}static sortedArray(t,e,n){return Yh(t,e,n)}static flattenJSON(t,e,n,i){mm(t,e,n,i)}static subclip(t,e,n,i,r=30){return W_(t,e,n,i,r)}static makeClipAdditive(t,e=0,n=t,i=30){return X_(t,e,n,i)}}class Or{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{let o;n:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break e}o=e.length;break n}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break e}o=n,n=0;break n}break t}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class gm extends Or{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ws,endingEnd:ws}}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Es:r=t,a=2*e-n;break;case Eo:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Es:o=t,l=2*n-e;break;case Eo:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}const c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-e)/(i-e),_=p*p,m=_*p,g=-u*m+2*u*_-u*p,M=(1+u)*m+(-1.5-2*u)*_+(-.5+u)*p+1,S=(-1-f)*m+(1.5+f)*_+.5*p,v=f*m-f*_;for(let b=0;b!==a;++b)r[b]=g*o[h+b]+M*o[c+b]+S*o[l+b]+v*o[d+b];return r}}class Pu extends Or{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}}class _m extends Or{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class xm extends Or{interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){const p=(n-e)/(i-e),_=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*_+o[l+m]*p;return r}const u=a*2,f=t-1;for(let p=0;p!==a;++p){const _=o[c+p],m=o[l+p],g=f*u+p*2,M=d[g],S=d[g+1],v=t*u+p*2,b=h[v],E=h[v+1],R=Z_(n,e,M,b,i);r[p]=vm(R,_,S,E,m)}return r}}function vm(s,t,e,n,i){const r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function q_(s,t,e,n,i){const r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function Z_(s,t,e,n,i){let r=(s-t)/(i-t);for(let o=0;o<8;o++){const a=vm(r,t,e,n,i)-s;if(Math.abs(a)<1e-10)break;const l=q_(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}class Vn{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=qn(e,this.TimeBufferType),this.values=qn(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:qn(t.times,Array),values:qn(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),xo(t.settings)&&(n.settings={inTangents:qn(t.settings.inTangents,Array),outTangents:qn(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new _m(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Pu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new gm(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){const e=new xm(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case wo:e=this.InterpolantFactoryMethodDiscrete;break;case zl:e=this.InterpolantFactoryMethodLinear;break;case qa:e=this.InterpolantFactoryMethodSmooth;break;case Vh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Et("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return wo;case this.InterpolantFactoryMethodLinear:return zl;case this.InterpolantFactoryMethodSmooth:return qa;case this.InterpolantFactoryMethodBezier:return Vh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;xo(this.settings)&&(Yf(this.settings.inTangents,t),Yf(this.settings.outTangents,t))}return this}trim(t,e){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(Kt("KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(Kt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){Kt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Kt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&Up(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){Kt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===qa,r=t.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{const d=a*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){const _=e[d+p];if(_!==e[u+p]||_!==e[f+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];const d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,xo(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}}function Yf(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}Vn.prototype.ValueTypeName="";Vn.prototype.TimeBufferType=Float32Array;Vn.prototype.ValueBufferType=Float32Array;Vn.prototype.DefaultInterpolation=zl;class zs extends Vn{constructor(t,e,n){super(t,e,n)}}zs.prototype.ValueTypeName="bool";zs.prototype.ValueBufferType=Array;zs.prototype.DefaultInterpolation=wo;zs.prototype.InterpolantFactoryMethodLinear=void 0;zs.prototype.InterpolantFactoryMethodSmooth=void 0;class Iu extends Vn{constructor(t,e,n,i){super(t,e,n,i)}}Iu.prototype.ValueTypeName="color";class Oc extends Vn{constructor(t,e,n,i){super(t,e,n,i)}}Oc.prototype.ValueTypeName="number";class ym extends Or{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e);let c=t*a;for(let h=c+a;c!==h;c+=4)Qe.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Uc extends Vn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new ym(this.times,this.values,this.getValueSize(),t)}}Uc.prototype.ValueTypeName="quaternion";Uc.prototype.InterpolantFactoryMethodSmooth=void 0;class ks extends Vn{constructor(t,e,n){super(t,e,n)}}ks.prototype.ValueTypeName="string";ks.prototype.ValueBufferType=Array;ks.prototype.DefaultInterpolation=wo;ks.prototype.InterpolantFactoryMethodLinear=void 0;ks.prototype.InterpolantFactoryMethodSmooth=void 0;class Lu extends Vn{constructor(t,e,n,i){super(t,e,n,i)}}Lu.prototype.ValueTypeName="vector";class No{constructor(t="",e=-1,n=[],i=cc){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Nn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push($_(n[o]).scale(i));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r.userData=JSON.parse(t.userData||"{}"),r}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let r=0,o=n.length;r!==o;++r)e.push(Vn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const r=e.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=pm(l);l=Yh(l,1,h),c=Yh(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Oc(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){const c=t[a],h=c.name.match(r);if(h&&h.length>1){const d=h[1];let u=i[d];u||(i[d]=u=[]),u.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());const e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}}function K_(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Oc;case"vector":case"vector2":case"vector3":case"vector4":return Lu;case"color":return Iu;case"quaternion":return Uc;case"bool":case"boolean":return zs;case"string":return ks}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function $_(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=K_(s.type);if(s.times===void 0){const n=[],i=[];mm(s.keys,n,i,"value"),s.times=n,s.values=i}let e;return t.parse!==void 0?e=t.parse(s):e=new t(s.name,s.times,s.values,s.interpolation),xo(s.settings)&&(e.settings={inTangents:qn(s.settings.inTangents,Float32Array),outTangents:qn(s.settings.outTangents,Float32Array)}),e}const di={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(qf(s)||(this.files[s]=t))},get:function(s){if(this.enabled!==!1&&!qf(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function qf(s){try{const t=s.slice(s.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class Du{constructor(t,e,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Mm=new Du;class Rn{constructor(t){this.manager=t!==void 0?t:Mm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Rn.DEFAULT_MATERIAL_NAME="__DEFAULT";const wi={};class J_ extends Error{constructor(t,e){super(t),this.response=e}}class Ni extends Rn{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=di.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if(wi[t]!==void 0){wi[t].push({onLoad:e,onProgress:n,onError:i});return}wi[t]=[],wi[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Et("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=wi[t],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,p=f!==0;let _=0;const m=new ReadableStream({start(g){M();function M(){d.read().then(({done:S,value:v})=>{if(S)g.close();else{_+=v.byteLength;const b=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:f});for(let E=0,R=h.length;E<R;E++){const y=h[E];y.onProgress&&y.onProgress(b)}g.enqueue(v),M()}},S=>{g.error(S)})}}});return new Response(m)}else throw new J_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{di.add(`file:${t}`,c);const h=wi[t];delete wi[t];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=wi[t];if(h===void 0)throw this.manager.itemError(t),c;delete wi[t];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class j_ extends Rn{constructor(t){super(t)}load(t,e,n,i){const r=this,o=new Ni(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{e(r.parse(JSON.parse(a)))}catch(l){i?i(l):Kt(l),r.manager.itemError(t)}},n,i)}parse(t){const e=[];for(let n=0;n<t.length;n++){const i=No.parse(t[n]);e.push(i)}return e}}class Q_ extends Rn{constructor(t){super(t)}load(t,e,n,i){const r=this,o=[],a=new yc,l=new Ni(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(r.withCredentials);let c=0;function h(d){l.load(t[d],function(u){const f=r.parse(u,!0);o[d]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},c+=1,c===6&&(f.mipmapCount===1&&(a.minFilter=Re),a.image=o,a.format=f.format,a.needsUpdate=!0,e&&e(a))},n,i)}if(Array.isArray(t))for(let d=0,u=t.length;d<u;++d)h(d);else l.load(t,function(d){const u=r.parse(d,!0);if(u.isCubemap){const f=u.mipmaps.length/u.mipmapCount;for(let p=0;p<f;p++){o[p]={mipmaps:[]};for(let _=0;_<u.mipmapCount;_++)o[p].mipmaps.push(u.mipmaps[p*u.mipmapCount+_]),o[p].format=u.format,o[p].width=u.width,o[p].height=u.height}a.image=o}else a.image.width=u.width,a.image.height=u.height,a.mipmaps=u.mipmaps;u.mipmapCount===1&&(a.minFilter=Re),a.format=u.format,a.needsUpdate=!0,e&&e(a)},n,i);return a}}const sr=new WeakMap;class Oo extends Rn{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=di.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let d=sr.get(o);d===void 0&&(d=[],sr.set(o,d)),d.push({onLoad:e,onError:i})}return o}const a=Ro("img");function l(){h(),e&&e(this);const d=sr.get(this)||[];for(let u=0;u<d.length;u++){const f=d[u];f.onLoad&&f.onLoad(this)}sr.delete(this),r.manager.itemEnd(t)}function c(d){h(),i&&i(d),di.remove(`image:${t}`);const u=sr.get(this)||[];for(let f=0;f<u.length;f++){const p=u[f];p.onError&&p.onError(d)}sr.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),di.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}}class tx extends Rn{constructor(t){super(t)}load(t,e,n,i){const r=new Go;r.colorSpace=Sn;const o=new Oo(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(t[c],function(h){r.images[c]=h,a++,a===6&&(r.needsUpdate=!0,e&&e(r))},void 0,i)}for(let c=0;c<t.length;++c)l(c);return r}}class ex extends Rn{constructor(t){super(t)}load(t,e,n,i){const r=this,o=new zn,a=new Ni(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(t,function(l){let c;try{c=r.parse(l)}catch(h){i!==void 0?i(h):Kt(h);return}r._applyTexData(o,c),e&&e(o,c)},n,i),o}createDataTexture(t){const e=new zn;return this._applyTexData(e,this.parse(t)),e}_applyTexData(t,e){e.image!==void 0?t.image=e.image:e.data!==void 0&&(t.image.width=e.width,t.image.height=e.height,t.image.data=e.data),t.wrapS=e.wrapS!==void 0?e.wrapS:En,t.wrapT=e.wrapT!==void 0?e.wrapT:En,t.magFilter=e.magFilter!==void 0?e.magFilter:Re,t.minFilter=e.minFilter!==void 0?e.minFilter:Re,t.anisotropy=e.anisotropy!==void 0?e.anisotropy:1,e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.mipmaps!==void 0&&(t.mipmaps=e.mipmaps,t.minFilter=fi),e.mipmapCount===1&&(t.minFilter=Re),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),t.needsUpdate=!0}}class nx extends Rn{constructor(t){super(t)}load(t,e,n,i){const r=new Le,o=new Oo(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class is extends ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new pt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Nu extends is{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ue.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Mh=new ie,Zf=new C,Kf=new C;class Fc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.mapType=dn,this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ls,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Zf.setFromMatrixPosition(t.matrixWorld),e.position.copy(Zf),Kf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Kf),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){Mh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Mh,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===Ps||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Mh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ia=new C,La=new Qe,li=new C;class Bc extends ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=Dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ia,La,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ia,La,li.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ia,La,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ia,La,li.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Wi=new C,$f=new it,Jf=new it;class Ke extends Bc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=wr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(As*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return wr*2*Math.atan(Math.tan(As*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Wi.x,Wi.y).multiplyScalar(-t/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wi.x,Wi.y).multiplyScalar(-t/Wi.z)}getViewSize(t,e){return this.getViewBounds(t,$f,Jf),e.subVectors(Jf,$f)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(As*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class ix extends Fc{constructor(){super(new Ke(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,n=wr*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){const t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}}class Sm extends is{constructor(t,e,n=0,i=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ue.DEFAULT_UP),this.updateMatrix(),this.target=new ue,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new ix}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class sx extends Fc{constructor(){super(new Ke(90,1,.5,500)),this.isPointLightShadow=!0}}class bm extends is{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new sx}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Ur extends Bc{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class rx extends Fc{constructor(){super(new Ur(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hl extends is{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ue.DEFAULT_UP),this.updateMatrix(),this.target=new ue,this.shadow=new rx}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class wm extends is{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Em extends is{constructor(t,e,n=10,i=10){super(t,e),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){const e=super.toJSON(t);return e.object.width=this.width,e.object.height=this.height,e}}class Ou{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new C)}set(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,e){const n=t.x,i=t.y,r=t.z,o=this.coefficients;return e.copy(o[0]).multiplyScalar(.282095),e.addScaledVector(o[1],.488603*i),e.addScaledVector(o[2],.488603*r),e.addScaledVector(o[3],.488603*n),e.addScaledVector(o[4],1.092548*(n*i)),e.addScaledVector(o[5],1.092548*(i*r)),e.addScaledVector(o[6],.315392*(3*r*r-1)),e.addScaledVector(o[7],1.092548*(n*r)),e.addScaledVector(o[8],.546274*(n*n-i*i)),e}getIrradianceAt(t,e){const n=t.x,i=t.y,r=t.z,o=this.coefficients;return e.copy(o[0]).multiplyScalar(.886227),e.addScaledVector(o[1],2*.511664*i),e.addScaledVector(o[2],2*.511664*r),e.addScaledVector(o[3],2*.511664*n),e.addScaledVector(o[4],2*.429043*n*i),e.addScaledVector(o[5],2*.429043*i*r),e.addScaledVector(o[6],.743125*r*r-.247708),e.addScaledVector(o[7],2*.429043*n*r),e.addScaledVector(o[8],.429043*(n*n-i*i)),e}add(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this}addScaledSH(t,e){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(t.coefficients[n],e);return this}scale(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this}lerp(t,e){for(let n=0;n<9;n++)this.coefficients[n].lerp(t.coefficients[n],e);return this}equals(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(t,e+i*3);return this}toArray(t=[],e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(t,e+i*3);return t}static getBasisAt(t,e){const n=t.x,i=t.y,r=t.z;e[0]=.282095,e[1]=.488603*i,e[2]=.488603*r,e[3]=.488603*n,e[4]=1.092548*n*i,e[5]=1.092548*i*r,e[6]=.315392*(3*r*r-1),e[7]=1.092548*n*r,e[8]=.546274*(n*n-i*i)}}class Tm extends is{constructor(t=new Ou,e=1){super(void 0,e),this.isLightProbe=!0,this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}toJSON(t){const e=super.toJSON(t);return e.object.sh=this.sh.toArray(),e}}const jf={};class zc extends Rn{constructor(t){super(t),this.textures={}}load(t,e,n,i){const r=this,o=new Ni(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(t,function(a){try{e(r.parse(JSON.parse(a)))}catch(l){i?i(l):Kt(l),r.manager.itemError(t)}},n,i)}parse(t){const e=this.createMaterialFromType(t.type);return e.fromJSON(t,this.textures),e}setTextures(t){return this.textures=t,this}createMaterialFromType(t){return zc.createMaterialFromType(t)}static createMaterialFromType(t){const n={ShadowMaterial:om,SpriteMaterial:xu,RawShaderMaterial:Nc,ShaderMaterial:Ce,PointsMaterial:yu,MeshPhysicalMaterial:lm,MeshStandardMaterial:qo,MeshPhongMaterial:cm,MeshToonMaterial:hm,MeshNormalMaterial:um,MeshLambertMaterial:Rs,MeshDepthMaterial:Ru,MeshDistanceMaterial:Cu,MeshBasicMaterial:_i,MeshMatcapMaterial:fm,LineDashedMaterial:dm,LineBasicMaterial:xn,Material:tn,...jf}[t];let i;return n===void 0?(Ii(`MaterialLoader: Unknown material type "${t}". Use .registerMaterial() before starting the deserialization process.`),i=new tn):i=new n,i}static registerMaterial(t,e){jf[t]=e}}class qh{static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class Am extends te{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class Rm extends Rn{constructor(t){super(t)}load(t,e,n,i){const r=this,o=new Ni(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(t,function(a){try{e(r.parse(JSON.parse(a)))}catch(l){i?i(l):Kt(l),r.manager.itemError(t)}},n,i)}parse(t){const e={},n={};function i(f,p){if(e[p]!==void 0)return e[p];const m=f.interleavedBuffers[p],g=r(f,m.buffer),M=gr(m.type,g),S=new _c(M,m.stride);return S.uuid=m.uuid,m.usage!==void 0&&S.setUsage(m.usage),e[p]=S,S}function r(f,p){if(n[p]!==void 0)return n[p];const m=f.arrayBuffers[p],g=new Uint32Array(m).buffer;return n[p]=g,g}const o=t.isInstancedBufferGeometry?new Am:new te,a=t.data.index;if(a!==void 0){const f=gr(a.type,a.array);o.setIndex(new be(f,1))}const l=t.data.attributes;for(const f in l){const p=l[f];let _;if(p.isInterleavedBufferAttribute){const m=i(t.data,p.data);_=new Is(m,p.itemSize,p.offset,p.normalized)}else{const m=gr(p.type,p.array),g=p.isInstancedBufferAttribute?Er:be;_=new g(m,p.itemSize,p.normalized)}p.name!==void 0&&(_.name=p.name),p.usage!==void 0&&_.setUsage(p.usage),p.gpuType!==void 0&&(_.gpuType=p.gpuType),o.setAttribute(f,_)}const c=t.data.morphAttributes;if(c)for(const f in c){const p=c[f],_=[];for(let m=0,g=p.length;m<g;m++){const M=p[m];let S;if(M.isInterleavedBufferAttribute){const v=i(t.data,M.data);S=new Is(v,M.itemSize,M.offset,M.normalized)}else{const v=gr(M.type,M.array);S=new be(v,M.itemSize,M.normalized)}M.name!==void 0&&(S.name=M.name),M.usage!==void 0&&S.setUsage(M.usage),M.gpuType!==void 0&&(S.gpuType=M.gpuType),_.push(S)}o.morphAttributes[f]=_}t.data.morphTargetsRelative&&(o.morphTargetsRelative=!0);const d=t.data.groups||t.data.drawcalls||t.data.offsets;if(d!==void 0)for(let f=0,p=d.length;f!==p;++f){const _=d[f];o.addGroup(_.start,_.count,_.materialIndex)}const u=t.data.boundingSphere;return u!==void 0&&(o.boundingSphere=new Je().fromJSON(u)),t.name&&(o.name=t.name),t.userData&&(o.userData=t.userData),o}}const Sh={};class ox extends Rn{constructor(t){super(t)}load(t,e,n,i){const r=this,o=this.path===""?qh.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||o;const a=new Ni(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(t,function(l){let c=null;try{c=JSON.parse(l)}catch(d){i!==void 0&&i(d),Kt("ObjectLoader: Can't parse "+t+".",d.message);return}const h=c.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){i!==void 0&&i(new Error("THREE.ObjectLoader: Can't load "+t)),Kt("ObjectLoader: Can't load "+t);return}r.parse(c,e)},n,i)}async loadAsync(t,e){const n=this,i=this.path===""?qh.extractUrlBase(t):this.path;this.resourcePath=this.resourcePath||i;const r=new Ni(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);const o=await r.loadAsync(t,e);let a;try{a=JSON.parse(o)}catch(c){throw new Error("THREE.ObjectLoader: Can't parse "+t+". "+c.message)}const l=a.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+t);return await n.parseAsync(a)}parse(t,e){const n=this.parseAnimations(t.animations),i=this.parseShapes(t.shapes),r=this.parseGeometries(t.geometries,i),o=this.parseImages(t.images,function(){e!==void 0&&e(c)}),a=this.parseTextures(t.textures,o),l=this.parseMaterials(t.materials,a),c=this.parseObject(t.object,r,l,a,n),h=this.parseSkeletons(t.skeletons,c);if(this.bindSkeletons(c,h),this.bindLightTargets(c),e!==void 0){let d=!1;for(const u in o)if(o[u].data instanceof HTMLImageElement){d=!0;break}d===!1&&e(c)}return c}async parseAsync(t){const e=this.parseAnimations(t.animations),n=this.parseShapes(t.shapes),i=this.parseGeometries(t.geometries,n),r=await this.parseImagesAsync(t.images),o=this.parseTextures(t.textures,r),a=this.parseMaterials(t.materials,o),l=this.parseObject(t.object,i,a,o,e),c=this.parseSkeletons(t.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}static registerGeometry(t,e){Sh[t]=e}parseShapes(t){const e={};if(t!==void 0)for(let n=0,i=t.length;n<i;n++){const r=new Xo().fromJSON(t[n]);e[r.uuid]=r}return e}parseSkeletons(t,e){const n={},i={};if(e.traverse(function(r){r.isBone&&(i[r.uuid]=r)}),t!==void 0)for(let r=0,o=t.length;r<o;r++){const a=new xc().fromJSON(t[r],i);n[a.uuid]=a}return n}parseGeometries(t,e){const n={};if(t!==void 0){const i=new Rm;for(let r=0,o=t.length;r<o;r++){let a;const l=t[r];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":a=i.parse(l);break;default:l.type in Wf?a=Wf[l.type].fromJSON(l,e):l.type in Sh?a=Sh[l.type].fromJSON(l,e):Et(`ObjectLoader: Unknown geometry type "${l.type}". Use .registerGeometry() before starting the deserialization process.`)}a.uuid=l.uuid,l.name!==void 0&&(a.name=l.name),l.userData!==void 0&&(a.userData=l.userData),n[l.uuid]=a}}return n}parseMaterials(t,e){const n={},i={};if(t!==void 0){const r=new zc;r.setTextures(e);for(let o=0,a=t.length;o<a;o++){const l=t[o];n[l.uuid]===void 0&&(n[l.uuid]=r.parse(l)),i[l.uuid]=n[l.uuid]}}return i}parseAnimations(t){const e={};if(t!==void 0)for(let n=0;n<t.length;n++){const i=t[n],r=No.parse(i);e[r.uuid]=r}return e}parseImages(t,e){const n=this,i={};let r;function o(l){return l=n.manager.resolveURL(l),n.manager.itemStart(l),r.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function a(l){if(typeof l=="string"){const c=l,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return o(h)}else return l.data?{data:gr(l.type,l.data),width:l.width,height:l.height}:null}if(t!==void 0&&t.length>0){const l=new Du(e);r=new Oo(l),r.setCrossOrigin(this.crossOrigin);for(let c=0,h=t.length;c<h;c++){const d=t[c],u=d.url;if(Array.isArray(u)){const f=[];for(let p=0,_=u.length;p<_;p++){const m=u[p],g=a(m);g!==null&&(g instanceof HTMLImageElement?f.push(g):f.push(new zn(g.data,g.width,g.height)))}i[d.uuid]=new Ci(f)}else{const f=a(d.url);i[d.uuid]=new Ci(f)}}}return i}async parseImagesAsync(t){const e=this,n={};let i;async function r(o){if(typeof o=="string"){const a=o,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(a)?a:e.resourcePath+a;return await i.loadAsync(l)}else return o.data?{data:gr(o.type,o.data),width:o.width,height:o.height}:null}if(t!==void 0&&t.length>0){i=new Oo(this.manager),i.setCrossOrigin(this.crossOrigin);for(let o=0,a=t.length;o<a;o++){const l=t[o],c=l.url;if(Array.isArray(c)){const h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d],p=await r(f);p!==null&&(p instanceof HTMLImageElement?h.push(p):h.push(new zn(p.data,p.width,p.height)))}n[l.uuid]=new Ci(h)}else{const h=await r(l.url);n[l.uuid]=new Ci(h)}}}return n}parseTextures(t,e){function n(r,o){return typeof r=="number"?r:(Et("ObjectLoader.parseTexture: Constant should be in numeric form.",r),o[r])}const i={};if(t!==void 0)for(let r=0,o=t.length;r<o;r++){const a=t[r];a.image===void 0&&Et('ObjectLoader: No "image" specified for',a.uuid),e[a.image]===void 0&&Et("ObjectLoader: Undefined image",a.image);const l=e[a.image],c=l.data;let h;Array.isArray(c)?(h=new Go,c.length===6&&(h.needsUpdate=!0)):(c&&c.data?h=new zn:h=new Le,c&&(h.needsUpdate=!0)),h.source=l,h.uuid=a.uuid,a.name!==void 0&&(h.name=a.name),a.mapping!==void 0&&(h.mapping=n(a.mapping,ax)),a.channel!==void 0&&(h.channel=a.channel),a.offset!==void 0&&h.offset.fromArray(a.offset),a.repeat!==void 0&&h.repeat.fromArray(a.repeat),a.center!==void 0&&h.center.fromArray(a.center),a.rotation!==void 0&&(h.rotation=a.rotation),a.wrap!==void 0&&(h.wrapS=n(a.wrap[0],Qf),h.wrapT=n(a.wrap[1],Qf)),a.format!==void 0&&(h.format=a.format),a.internalFormat!==void 0&&(h.internalFormat=a.internalFormat),a.type!==void 0&&(h.type=a.type),a.colorSpace!==void 0&&(h.colorSpace=a.colorSpace),a.minFilter!==void 0&&(h.minFilter=n(a.minFilter,td)),a.magFilter!==void 0&&(h.magFilter=n(a.magFilter,td)),a.anisotropy!==void 0&&(h.anisotropy=a.anisotropy),a.flipY!==void 0&&(h.flipY=a.flipY),a.generateMipmaps!==void 0&&(h.generateMipmaps=a.generateMipmaps),a.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=a.premultiplyAlpha),a.unpackAlignment!==void 0&&(h.unpackAlignment=a.unpackAlignment),a.compareFunction!==void 0&&(h.compareFunction=a.compareFunction),a.normalized!==void 0&&(h.normalized=a.normalized),a.userData!==void 0&&(h.userData=a.userData),i[a.uuid]=h}return i}parseObject(t,e,n,i,r){let o;function a(u){return e[u]===void 0&&Et("ObjectLoader: Undefined geometry",u),e[u]}function l(u){if(u!==void 0){if(Array.isArray(u)){const f=[];for(let p=0,_=u.length;p<_;p++){const m=u[p];n[m]===void 0&&Et("ObjectLoader: Undefined material",m),f.push(n[m])}return f}return n[u]===void 0&&Et("ObjectLoader: Undefined material",u),n[u]}}function c(u){return i[u]===void 0&&Et("ObjectLoader: Undefined texture",u),i[u]}let h,d;switch(t.type){case"Scene":o=new mu,t.background!==void 0&&(Number.isInteger(t.background)?o.background=new pt(t.background):o.background=c(t.background)),t.environment!==void 0&&(o.environment=c(t.environment)),t.fog!==void 0&&(t.fog.type==="Fog"?o.fog=new gc(t.fog.color,t.fog.near,t.fog.far):t.fog.type==="FogExp2"&&(o.fog=new Vo(t.fog.color,t.fog.density)),t.fog.name!==""&&(o.fog.name=t.fog.name)),t.backgroundBlurriness!==void 0&&(o.backgroundBlurriness=t.backgroundBlurriness),t.backgroundIntensity!==void 0&&(o.backgroundIntensity=t.backgroundIntensity),t.backgroundRotation!==void 0&&o.backgroundRotation.fromArray(t.backgroundRotation),t.environmentIntensity!==void 0&&(o.environmentIntensity=t.environmentIntensity),t.environmentRotation!==void 0&&o.environmentRotation.fromArray(t.environmentRotation);break;case"PerspectiveCamera":o=new Ke(t.fov,t.aspect,t.near,t.far),t.focus!==void 0&&(o.focus=t.focus),t.zoom!==void 0&&(o.zoom=t.zoom),t.filmGauge!==void 0&&(o.filmGauge=t.filmGauge),t.filmOffset!==void 0&&(o.filmOffset=t.filmOffset),t.view!==void 0&&(o.view=Object.assign({},t.view));break;case"OrthographicCamera":o=new Ur(t.left,t.right,t.top,t.bottom,t.near,t.far),t.zoom!==void 0&&(o.zoom=t.zoom),t.view!==void 0&&(o.view=Object.assign({},t.view));break;case"AmbientLight":o=new wm(t.color,t.intensity);break;case"DirectionalLight":o=new Hl(t.color,t.intensity),o.target=t.target||"";break;case"PointLight":o=new bm(t.color,t.intensity,t.distance,t.decay);break;case"RectAreaLight":o=new Em(t.color,t.intensity,t.width,t.height);break;case"SpotLight":o=new Sm(t.color,t.intensity,t.distance,t.angle,t.penumbra,t.decay),o.target=t.target||"";break;case"HemisphereLight":o=new Nu(t.color,t.groundColor,t.intensity);break;case"LightProbe":const u=new Ou().fromArray(t.sh);o=new Tm(u,t.intensity);break;case"SkinnedMesh":h=a(t.geometry),d=l(t.material),o=new Wp(h,d),t.bindMode!==void 0&&(o.bindMode=t.bindMode),t.bindMatrix!==void 0&&o.bindMatrix.fromArray(t.bindMatrix),t.skeleton!==void 0&&(o.skeleton=t.skeleton);break;case"Mesh":h=a(t.geometry),d=l(t.material),o=new Pe(h,d);break;case"InstancedMesh":h=a(t.geometry),d=l(t.material);const f=t.count,p=t.instanceMatrix,_=t.instanceColor;o=new jn(h,d,f),o.instanceMatrix=new Er(new Float32Array(p.array),16),_!==void 0&&(o.instanceColor=new Er(new Float32Array(_.array),_.itemSize));break;case"BatchedMesh":h=a(t.geometry),d=l(t.material),o=new Xp(t.maxInstanceCount,t.maxVertexCount,t.maxIndexCount,d),o.geometry=h,o.perObjectFrustumCulled=t.perObjectFrustumCulled,o.sortObjects=t.sortObjects,o._drawRanges=t.drawRanges,o._reservedRanges=t.reservedRanges,o._geometryInfo=t.geometryInfo.map(m=>{let g=null,M=null;return m.boundingBox!==void 0&&(g=new $e().fromJSON(m.boundingBox)),m.boundingSphere!==void 0&&(M=new Je().fromJSON(m.boundingSphere)),{...m,boundingBox:g,boundingSphere:M}}),o._instanceInfo=t.instanceInfo,o._availableInstanceIds=t._availableInstanceIds,o._availableGeometryIds=t._availableGeometryIds,o._nextIndexStart=t.nextIndexStart,o._nextVertexStart=t.nextVertexStart,o._geometryCount=t.geometryCount,o._maxInstanceCount=t.maxInstanceCount,o._maxVertexCount=t.maxVertexCount,o._maxIndexCount=t.maxIndexCount,o._geometryInitialized=t.geometryInitialized,o._matricesTexture=c(t.matricesTexture.uuid),o._indirectTexture=c(t.indirectTexture.uuid),t.colorsTexture!==void 0&&(o._colorsTexture=c(t.colorsTexture.uuid)),t.boundingSphere!==void 0&&(o.boundingSphere=new Je().fromJSON(t.boundingSphere)),t.boundingBox!==void 0&&(o.boundingBox=new $e().fromJSON(t.boundingBox));break;case"LOD":o=new Hp;break;case"Line":o=new es(a(t.geometry),l(t.material));break;case"LineLoop":o=new Yp(a(t.geometry),l(t.material));break;case"LineSegments":o=new xi(a(t.geometry),l(t.material));break;case"PointCloud":case"Points":o=new Bs(a(t.geometry),l(t.material));break;case"Sprite":o=new Gp(l(t.material));break;case"Group":o=new Jn;break;case"Bone":o=new vu;break;default:o=new ue}if(o.uuid=t.uuid,t.name!==void 0&&(o.name=t.name),t.matrix!==void 0?(o.matrix.fromArray(t.matrix),t.matrixAutoUpdate!==void 0&&(o.matrixAutoUpdate=t.matrixAutoUpdate),o.matrixAutoUpdate&&o.matrix.decompose(o.position,o.quaternion,o.scale)):(t.position!==void 0&&o.position.fromArray(t.position),t.rotation!==void 0&&o.rotation.fromArray(t.rotation),t.quaternion!==void 0&&o.quaternion.fromArray(t.quaternion),t.scale!==void 0&&o.scale.fromArray(t.scale)),t.up!==void 0&&o.up.fromArray(t.up),t.pivot!==void 0&&(o.pivot=new C().fromArray(t.pivot)),t.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),t.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=t.morphTargetInfluences.slice()),t.castShadow!==void 0&&(o.castShadow=t.castShadow),t.receiveShadow!==void 0&&(o.receiveShadow=t.receiveShadow),t.shadow&&(t.shadow.intensity!==void 0&&(o.shadow.intensity=t.shadow.intensity),t.shadow.bias!==void 0&&(o.shadow.bias=t.shadow.bias),t.shadow.normalBias!==void 0&&(o.shadow.normalBias=t.shadow.normalBias),t.shadow.radius!==void 0&&(o.shadow.radius=t.shadow.radius),t.shadow.blurSamples!==void 0&&(o.shadow.blurSamples=t.shadow.blurSamples),t.shadow.focus!==void 0&&(o.shadow.focus=t.shadow.focus),t.shadow.aspect!==void 0&&(o.shadow.aspect=t.shadow.aspect),t.shadow.mapSize!==void 0&&o.shadow.mapSize.fromArray(t.shadow.mapSize),t.shadow.camera!==void 0&&(o.shadow.camera=this.parseObject(t.shadow.camera))),t.visible!==void 0&&(o.visible=t.visible),t.frustumCulled!==void 0&&(o.frustumCulled=t.frustumCulled),t.renderOrder!==void 0&&(o.renderOrder=t.renderOrder),t.static!==void 0&&(o.static=t.static),t.userData!==void 0&&(o.userData=t.userData),t.layers!==void 0&&(o.layers.mask=t.layers),t.children!==void 0){const u=t.children;for(let f=0;f<u.length;f++)o.add(this.parseObject(u[f],e,n,i,r))}if(t.animations!==void 0){const u=t.animations;for(let f=0;f<u.length;f++){const p=u[f];o.animations.push(r[p])}}if(t.type==="LOD"){t.autoUpdate!==void 0&&(o.autoUpdate=t.autoUpdate);const u=t.levels;for(let f=0;f<u.length;f++){const p=u[f],_=o.getObjectByProperty("uuid",p.object);_!==void 0&&o.addLevel(_,p.distance,p.hysteresis)}}return o}bindSkeletons(t,e){Object.keys(e).length!==0&&t.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const i=e[n.skeleton];i===void 0?Et("ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(i,n.bindMatrix)}})}bindLightTargets(t){t.traverse(function(e){if(e.isDirectionalLight||e.isSpotLight){const n=e.target,i=t.getObjectByProperty("uuid",n);i!==void 0?e.target=i:e.target=new ue}})}}const ax={UVMapping:nc,CubeReflectionMapping:pi,CubeRefractionMapping:ji,EquirectangularReflectionMapping:ao,EquirectangularRefractionMapping:lo,CubeUVReflectionMapping:Lr},Qf={RepeatWrapping:yo,ClampToEdgeWrapping:En,MirroredRepeatWrapping:Mo},td={NearestFilter:Fe,NearestMipmapNearestFilter:ru,NearestMipmapLinearFilter:mr,LinearFilter:Re,LinearMipmapNearestFilter:co,LinearMipmapLinearFilter:fi},bh=new WeakMap;class lx extends Rn{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Et("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Et("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=di.get(`image-bitmap:${t}`);if(o!==void 0){if(r.manager.itemStart(t),o.then){o.then(c=>{bh.has(o)===!0?(i&&i(bh.get(o)),r.manager.itemError(t),r.manager.itemEnd(t)):(e&&e(c),r.manager.itemEnd(t))});return}setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);return}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(t,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(c){return di.add(`image-bitmap:${t}`,c),e&&e(c),r.manager.itemEnd(t),c}).catch(function(c){i&&i(c),bh.set(l,c),di.remove(`image-bitmap:${t}`),r.manager.itemError(t),r.manager.itemEnd(t)});di.add(`image-bitmap:${t}`,l),r.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}let Da;class Uu{static getContext(){return Da===void 0&&(Da=new(window.AudioContext||window.webkitAudioContext)),Da}static setContext(t){Da=t}}class cx extends Rn{constructor(t){super(t)}load(t,e,n,i){const r=this,o=new Ni(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(l){try{const c=l.slice(0),h=Uu.getContext(),d=t+"#decode";r.manager.itemStart(d),h.decodeAudioData(c,function(u){e(u),r.manager.itemEnd(d)}).catch(function(u){a(u),r.manager.itemEnd(d)})}catch(c){a(c)}},n,i);function a(l){i?i(l):Kt(l),r.manager.itemError(t)}}}const ed=new ie,nd=new ie,us=new ie;class hx{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Ke,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Ke,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(t){const e=this._cache;if(e.focus!==t.focus||e.fov!==t.fov||e.aspect!==t.aspect*this.aspect||e.near!==t.near||e.far!==t.far||e.zoom!==t.zoom||e.eyeSep!==this.eyeSep){e.focus=t.focus,e.fov=t.fov,e.aspect=t.aspect*this.aspect,e.near=t.near,e.far=t.far,e.zoom=t.zoom,e.eyeSep=this.eyeSep,us.copy(t.projectionMatrix);const i=e.eyeSep/2,r=i*e.near/e.focus,o=e.near*Math.tan(As*e.fov*.5)/e.zoom;let a,l;nd.elements[12]=-i,ed.elements[12]=i,a=-o*e.aspect+r,l=o*e.aspect+r,us.elements[0]=2*e.near/(l-a),us.elements[8]=(l+a)/(l-a),this.cameraL.projectionMatrix.copy(us),a=-o*e.aspect-r,l=o*e.aspect-r,us.elements[0]=2*e.near/(l-a),us.elements[8]=(l+a)/(l-a),this.cameraR.projectionMatrix.copy(us)}this.cameraL.matrix.copy(t.matrixWorld).multiply(nd),this.cameraL.matrixWorldNeedsUpdate=!0,this.cameraR.matrix.copy(t.matrixWorld).multiply(ed),this.cameraR.matrixWorldNeedsUpdate=!0}}const rr=-90,or=1;class Cm extends ue{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ke(rr,or,t,e);i.layers=this.layers,this.add(i);const r=new Ke(rr,or,t,e);r.layers=this.layers,this.add(r);const o=new Ke(rr,or,t,e);o.layers=this.layers,this.add(o);const a=new Ke(rr,or,t,e);a.layers=this.layers,this.add(a);const l=new Ke(rr,or,t,e);l.layers=this.layers,this.add(l);const c=new Ke(rr,or,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Dn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ps)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Pm extends Ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Fu{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=ux.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function ux(){this._document.hidden===!1&&this.reset()}const fs=new C,wh=new Qe,fx=new C,ds=new C,ps=new C;class dx extends ue{constructor(){super(),this.type="AudioListener",this.context=Uu.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._timer=new Fu}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t),this._timer.update();const e=this.context.listener;if(this.timeDelta=this._timer.getDelta(),this.matrixWorld.decompose(fs,wh,fx),ds.set(0,0,-1).applyQuaternion(wh),ps.set(0,1,0).applyQuaternion(wh),e.positionX){const n=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(fs.x,n),e.positionY.linearRampToValueAtTime(fs.y,n),e.positionZ.linearRampToValueAtTime(fs.z,n),e.forwardX.linearRampToValueAtTime(ds.x,n),e.forwardY.linearRampToValueAtTime(ds.y,n),e.forwardZ.linearRampToValueAtTime(ds.z,n),e.upX.linearRampToValueAtTime(ps.x,n),e.upY.linearRampToValueAtTime(ps.y,n),e.upZ.linearRampToValueAtTime(ps.z,n)}else e.setPosition(fs.x,fs.y,fs.z),e.setOrientation(ds.x,ds.y,ds.z,ps.x,ps.y,ps.z)}}class Im extends ue{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){Et("Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){Et("Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){Et("Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(t=0){if(this.hasPlaybackControl===!1){Et("Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+t),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){return this.detune=t,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){Et("Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(Et("Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){Et("Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}copy(t,e){return super.copy(t,e),t.sourceType!=="buffer"?(Et("Audio: Audio source type cannot be copied."),this):(this.autoplay=t.autoplay,this.buffer=t.buffer,this.detune=t.detune,this.loop=t.loop,this.loopStart=t.loopStart,this.loopEnd=t.loopEnd,this.offset=t.offset,this.duration=t.duration,this.playbackRate=t.playbackRate,this.hasPlaybackControl=t.hasPlaybackControl,this.sourceType=t.sourceType,this.filters=t.filters.slice(),this)}clone(t){return new this.constructor(this.listener).copy(this,t)}}const ms=new C,id=new Qe,px=new C,gs=new C;class mx extends Im{constructor(t){super(t),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){return super.connect(),this.panner.connect(this.gain),this}disconnect(){return super.disconnect(),this.panner.disconnect(this.gain),this}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(t){return this.panner.refDistance=t,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(t){return this.panner.rolloffFactor=t,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(t){return this.panner.distanceModel=t,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(t){return this.panner.maxDistance=t,this}setDirectionalCone(t,e,n){return this.panner.coneInnerAngle=t,this.panner.coneOuterAngle=e,this.panner.coneOuterGain=n,this}updateMatrixWorld(t){if(super.updateMatrixWorld(t),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(ms,id,px),gs.set(0,0,1).applyQuaternion(id);const e=this.panner;if(e.positionX){const n=this.context.currentTime+this.listener.timeDelta;e.positionX.linearRampToValueAtTime(ms.x,n),e.positionY.linearRampToValueAtTime(ms.y,n),e.positionZ.linearRampToValueAtTime(ms.z,n),e.orientationX.linearRampToValueAtTime(gs.x,n),e.orientationY.linearRampToValueAtTime(gs.y,n),e.orientationZ.linearRampToValueAtTime(gs.z,n)}else e.setPosition(ms.x,ms.y,ms.z),e.setOrientation(gs.x,gs.y,gs.z)}}class gx{constructor(t,e=2048){this.analyser=t.context.createAnalyser(),this.analyser.fftSize=e,this.data=new Uint8Array(this.analyser.frequencyBinCount),t.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let t=0;const e=this.getFrequencyData();for(let n=0;n<e.length;n++)t+=e[n];return t/e.length}}class Lm{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,r,o;switch(e){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,i=this.valueSize,r=t*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=e}else{o+=e;const a=e/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=e*this._origIndex;this._mixBufferRegion(n,i,l,1-r,e)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(n[l]!==n[l+e]){a.setValue(n,i);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,o=i;r!==o;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)t[e+o]=t[n+o]}_slerp(t,e,n,i){Qe.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,r){const o=this._workIndex*r;Qe.multiplyQuaternionsFlat(t,o,t,e,t,n),Qe.slerpFlat(t,e,t,e,t,o,i)}_lerp(t,e,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const l=e+a;t[l]=t[l]*o+t[n+a]*i}}_lerpAdditive(t,e,n,i,r){for(let o=0;o!==r;++o){const a=e+o;t[a]=t[a]+t[n+o]*i}}}const Bu="\\[\\]\\.:\\/",_x=new RegExp("["+Bu+"]","g"),zu="[^"+Bu+"]",xx="[^"+Bu.replace("\\.","")+"]",vx=/((?:WC+[\/:])*)/.source.replace("WC",zu),yx=/(WCOD+)?/.source.replace("WCOD",xx),Mx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zu),Sx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zu),bx=new RegExp("^"+vx+yx+Mx+Sx+"$"),wx=["material","materials","bones","map"];class Ex{constructor(t,e,n){const i=n||me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class me{constructor(t,e,n){this.path=e,this.parsedPath=n||me.parseTrackName(e),this.node=me.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new me.Composite(t,e,n):new me(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(_x,"")}static parseTrackName(t){const e=bx.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);wx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===e||a.uuid===e)return a;const l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=me.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Et("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Kt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Kt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Kt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Kt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Kt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const o=t[i];if(o===void 0){const c=e.nodeName;Kt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}me.Composite=Ex;me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};me.prototype.GetterByBindingType=[me.prototype._getValue_direct,me.prototype._getValue_array,me.prototype._getValue_arrayElement,me.prototype._getValue_toArray];me.prototype.SetterByBindingTypeAndVersioning=[[me.prototype._setValue_direct,me.prototype._setValue_direct_setNeedsUpdate,me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[me.prototype._setValue_array,me.prototype._setValue_array_setNeedsUpdate,me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[me.prototype._setValue_arrayElement,me.prototype._setValue_arrayElement_setNeedsUpdate,me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[me.prototype._setValue_fromArray,me.prototype._setValue_fromArray_setNeedsUpdate,me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Tx{constructor(){this.isAnimationObjectGroup=!0,this.uuid=Nn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const t={};this._indicesByUUID=t;for(let n=0,i=arguments.length;n!==i;++n)t[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const e=this;this.stats={objects:{get total(){return e._objects.length},get inUse(){return this.total-e.nCachedObjects_}},get bindingsPerObject(){return e._bindings.length}}}add(){const t=this._objects,e=this._indicesByUUID,n=this._paths,i=this._parsedPaths,r=this._bindings,o=r.length;let a,l=t.length,c=this.nCachedObjects_;for(let h=0,d=arguments.length;h!==d;++h){const u=arguments[h],f=u.uuid;let p=e[f];if(p===void 0){p=l++,e[f]=p,t.push(u);for(let _=0,m=o;_!==m;++_)r[_].push(new me(u,n[_],i[_]))}else if(p<c){a=t[p];const _=--c,m=t[_];e[m.uuid]=p,t[p]=m,e[f]=_,t[_]=u;for(let g=0,M=o;g!==M;++g){const S=r[g],v=S[_];let b=S[p];S[p]=v,b===void 0&&(b=new me(u,n[g],i[g])),S[_]=b}}else t[p]!==a&&Kt("AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){const t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_;for(let o=0,a=arguments.length;o!==a;++o){const l=arguments[o],c=l.uuid,h=e[c];if(h!==void 0&&h>=r){const d=r++,u=t[d];e[u.uuid]=h,t[h]=u,e[c]=d,t[d]=l;for(let f=0,p=i;f!==p;++f){const _=n[f],m=_[d],g=_[h];_[h]=m,_[d]=g}}}this.nCachedObjects_=r}uncache(){const t=this._objects,e=this._indicesByUUID,n=this._bindings,i=n.length;let r=this.nCachedObjects_,o=t.length;for(let a=0,l=arguments.length;a!==l;++a){const c=arguments[a],h=c.uuid,d=e[h];if(d!==void 0)if(delete e[h],d<r){const u=--r,f=t[u],p=--o,_=t[p];d!==u&&(e[f.uuid]=d),t[d]=f,u!==p&&(e[_.uuid]=u),t[u]=_,t.pop();for(let m=0,g=i;m!==g;++m){const M=n[m],S=M[u],v=M[p];M[d]=S,M[u]=v,M.pop()}}else{const u=--o,f=t[u];d!==u&&(e[f.uuid]=d),t[d]=f,t.pop();for(let p=0,_=i;p!==_;++p){const m=n[p];m[d]=m[u],m.pop()}}}this.nCachedObjects_=r}subscribe_(t,e){const n=this._bindingsIndicesByPath;let i=n[t];const r=this._bindings;if(i!==void 0)return r[i];const o=this._paths,a=this._parsedPaths,l=this._objects,c=l.length,h=this.nCachedObjects_,d=new Array(c);i=r.length,n[t]=i,o.push(t),a.push(e),r.push(d);for(let u=h,f=l.length;u!==f;++u){const p=l[u];d[u]=new me(p,t,e)}return d}unsubscribe_(t){const e=this._bindingsIndicesByPath,n=e[t];if(n!==void 0){const i=this._paths,r=this._parsedPaths,o=this._bindings,a=o.length-1,l=o[a],c=i[a];e[c]=n,o[n]=l,o.pop(),r[n]=r[a],r.pop(),i[n]=i[a],i.pop()}}}class Dm{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;const r=e.tracks,o=r.length,a=new Array(o),l={endingStart:ws,endingEnd:ws};for(let c=0;c!==o;++c){const h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Ep,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n=!1){if(t.fadeOut(e),this.fadeIn(e),n===!0){const i=this._clip.duration,r=t._clip.duration,o=r/i,a=i/r;t._restoreTimeScale=t.timeScale,this._restoreTimeScale=this.timeScale,t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n=!1){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=t/o,c[1]=e/o,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}const r=this._startTime;if(r!==null){const l=(t-r)*n;l<0||n===0?e=0:(this._startTime=null,e=n*l)}e*=this._updateTimeScale(t);const o=this._updateTime(e),a=this._updateWeight(t);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case fu:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case cc:default:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(e===0?this.paused=!0:(this._restoreTimeScale!==null&&(e=this._restoreTimeScale),this.timeScale=e),this.stopWarping())}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let i=this.time+t,r=this._loopCount;const o=n===Tp;if(t===0)return r===-1?i:o&&(r&1)===1?e-i:i;if(n===wp){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=e||i<0){const a=Math.floor(i/e);i-=e*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){const c=t<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this._loopCount=r,this.time=i;if(o&&(r&1)===1)return e-i}return i}_setEndings(t,e,n){const i=this._interpolantSettings;n?(i.endingStart=Es,i.endingEnd=Es):(t?i.endingStart=this.zeroSlopeAtStart?Es:ws:i.endingStart=Eo,e?i.endingEnd=this.zeroSlopeAtEnd?Es:ws:i.endingEnd=Eo)}_scheduleFading(t,e,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=e,a[1]=r+t,l[1]=n,this}}const Ax=new Float32Array(1);class Rx extends si{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,o=t._propertyBindings,a=t._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let d=0;d!==r;++d){const u=i[d],f=u.name;let p=h[f];if(p!==void 0)++p.referenceCount,o[d]=p;else{if(p=o[d],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue}const _=e&&e._propertyBindings[d].binding.parsedPath;p=new Lm(me.create(n,f,_),u.ValueTypeName,u.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,f),o[d]=p}a[d].resultBuffer=p.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const i=this._actions,r=this._actionsByClip;let o=r[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=o;else{const a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=i.length,i.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],h=t._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),t._byClipCacheIndex=null;const d=a.actionByRoot,u=(t._localRoot||this._root).uuid;delete d[u],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[e];o===void 0&&(o={},i[e]=o),o[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new Pu(new Float32Array(2),new Float32Array(2),1,Ax),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){const i=e||this._root,r=i.uuid;let o=typeof t=="string"?No.findByName(i,t):t;const a=o!==null?o.uuid:t,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=cc),l!==void 0){const d=l.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const h=new Dm(this,o,e,n);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(t,e){const n=e||this._root,i=n.uuid,r=typeof t=="string"?No.findByName(n,t):t,o=r?r.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),o=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(i,t,r,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const h=c._cacheIndex,d=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=h,e[h]=d,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[e];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class Cx extends pu{constructor(t=1,e=1,n=1,i={}){super(t,e,i),this.isRenderTarget3D=!0,this.depth=n;for(let r=0;r<this.textures.length;r++){const o=new pc(null,t,e,n);o.isRenderTargetTexture=!0,o.renderTarget=this,this.textures[r]=o}this._setTextureOptions(i)}}class ku{constructor(t){this.value=t}clone(){return new ku(this.value.clone===void 0?this.value:this.value.clone())}}let Px=0;class Ix extends si{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:Px++}),this.name="",this.usage=fc,this.uniforms=[]}add(t){return this.uniforms.push(t),this}remove(t){const e=this.uniforms.indexOf(t);return e!==-1&&this.uniforms.splice(e,1),this}setName(t){return this.name=t,this}setUsage(t){return this.usage=t,this}dispose(){this.dispatchEvent({type:"dispose"})}copy(t){this.name=t.name,this.usage=t.usage;const e=t.uniforms;this.uniforms.length=0;for(let n=0,i=e.length;n<i;n++){const r=Array.isArray(e[n])?e[n]:[e[n]];for(let o=0;o<r.length;o++)this.uniforms.push(r[o].clone())}return this}clone(){return new this.constructor().copy(this)}}class Lx extends _c{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}class Dx{constructor(t,e,n,i,r,o=!1){this.isGLBufferAttribute=!0,this.name="",this.buffer=t,this.type=e,this.itemSize=n,this.elementSize=i,this.count=r,this.normalized=o,this.version=0}set needsUpdate(t){t===!0&&this.version++}setBuffer(t){return this.buffer=t,this}setType(t,e){return this.type=t,this.elementSize=e,this}setItemSize(t){return this.itemSize=t,this}setCount(t){return this.count=t,this}}const sd=new ie;class Nx{constructor(t,e,n=0,i=1/0){this.ray=new Fs(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new mc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Kt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return sd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(sd),this}intersectObject(t,e=!0,n=[]){return Zh(t,this,n,e),n.sort(rd),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Zh(t[i],this,n,e);return n.sort(rd),n}}function rd(s,t){return s.distance-t.distance}function Zh(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)Zh(r[o],t,e,!0)}}class Ox{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Et("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}class Kh{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ne(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ne(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Ux{constructor(t=1,e=0,n=0){this.radius=t,this.theta=e,this.y=n}set(t,e,n){return this.radius=t,this.theta=e,this.y=n,this}copy(t){return this.radius=t.radius,this.theta=t.theta,this.y=t.y,this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+n*n),this.theta=Math.atan2(t,n),this.y=e,this}clone(){return new this.constructor().copy(this)}}class Vu{static{Vu.prototype.isMatrix2=!0}constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}}const od=new it;class Nm{constructor(t=new it(1/0,1/0),e=new it(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=od.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,od).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ad=new C,Na=new C,ar=new C,lr=new C,Eh=new C,Fx=new C,Bx=new C;class zx{constructor(t=new C,e=new C){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){ad.subVectors(t,this.start),Na.subVectors(this.end,this.start);const n=Na.dot(Na);if(n===0)return 0;let r=Na.dot(ad)/n;return e&&(r=ne(r,0,1)),r}closestPointToPoint(t,e,n){const i=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(t,e=Fx,n=Bx){const i=10000000000000001e-32;let r,o;const a=this.start,l=t.start,c=this.end,h=t.end;ar.subVectors(c,a),lr.subVectors(h,l),Eh.subVectors(a,l);const d=ar.dot(ar),u=lr.dot(lr),f=lr.dot(Eh);if(d<=i&&u<=i)return e.copy(a),n.copy(l),e.sub(n),e.dot(e);if(d<=i)r=0,o=f/u,o=ne(o,0,1);else{const p=ar.dot(Eh);if(u<=i)o=0,r=ne(-p/d,0,1);else{const _=ar.dot(lr),m=d*u-_*_;m!==0?r=ne((_*f-p*u)/m,0,1):r=0,o=(_*r+f)/u,o<0?(o=0,r=ne(-p/d,0,1)):o>1&&(o=1,r=ne((_-p)/d,0,1))}}return e.copy(a).addScaledVector(ar,r),n.copy(l).addScaledVector(lr,o),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const ld=new C;class kx extends ue{constructor(t,e){super(),this.light=t,this.matrixAutoUpdate=!1,this.color=e,this.type="SpotLightHelper";const n=new te,i=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let o=0,a=1,l=32;o<l;o++,a++){const c=o/l*Math.PI*2,h=a/l*Math.PI*2;i.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}n.setAttribute("position",new yt(i,3));const r=new xn({fog:!1,toneMapped:!1});this.cone=new xi(n,r),this.add(this.cone),this.update()}dispose(){super.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorldNeedsUpdate=!0;const t=this.light.distance?this.light.distance:1e3,e=t*Math.tan(this.light.angle);this.cone.scale.set(e,e,t),ld.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(ld),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const Xi=new C,Oa=new ie,Th=new ie;class Vx extends xi{constructor(t){const e=Om(t),n=new te,i=[],r=[];for(let c=0;c<e.length;c++){const h=e[c];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(0,0,0),r.push(0,0,0))}n.setAttribute("position",new yt(i,3)),n.setAttribute("color",new yt(r,3));const o=new xn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,o),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1;const a=new pt(255),l=new pt(65280);this.setColors(a,l)}updateMatrixWorld(t){const e=this.bones,n=this.geometry,i=n.getAttribute("position");Th.copy(this.root.matrixWorld).invert();for(let r=0,o=0;r<e.length;r++){const a=e[r];a.parent&&a.parent.isBone&&(Oa.multiplyMatrices(Th,a.matrixWorld),Xi.setFromMatrixPosition(Oa),i.setXYZ(o,Xi.x,Xi.y,Xi.z),Oa.multiplyMatrices(Th,a.parent.matrixWorld),Xi.setFromMatrixPosition(Oa),i.setXYZ(o+1,Xi.x,Xi.y,Xi.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}setColors(t,e){const i=this.geometry.getAttribute("color");for(let r=0;r<i.count;r+=2)i.setXYZ(r,t.r,t.g,t.b),i.setXYZ(r+1,e.r,e.g,e.b);return i.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}function Om(s){const t=[];s.isBone===!0&&t.push(s);for(let e=0;e<s.children.length;e++)t.push(...Om(s.children[e]));return t}class Gx extends Pe{constructor(t,e,n){const i=new Nr(e,4,2),r=new _i({wireframe:!0,fog:!1,toneMapped:!1});super(i,r),this.light=t,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const Hx=new C,cd=new pt,hd=new pt;class Wx extends ue{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const i=new Yo(e);i.rotateY(Math.PI*.5),this.material=new _i({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const r=i.getAttribute("position"),o=new Float32Array(r.count*3);i.setAttribute("color",new be(o,3)),this.add(new Pe(i,this.material)),this.update()}dispose(){super.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const t=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const e=t.geometry.getAttribute("color");cd.copy(this.light.color),hd.copy(this.light.groundColor);for(let n=0,i=e.count;n<i;n++){const r=n<i/2?cd:hd;e.setXYZ(n,r.r,r.g,r.b)}e.needsUpdate=!0}this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),t.lookAt(Hx.setFromMatrixPosition(this.light.matrixWorld).negate())}}class Xx extends xi{constructor(t=10,e=10,n=4473924,i=8947848){n=new pt(n),i=new pt(i);const r=e/2,o=t/e,a=t/2,l=[],c=[];for(let u=0,f=0,p=-a;u<=e;u++,p+=o){l.push(-a,0,p,a,0,p),l.push(p,0,-a,p,0,a);const _=u===r?n:i;_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3}const h=new te;h.setAttribute("position",new yt(l,3)),h.setAttribute("color",new yt(c,3));const d=new xn({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class Yx extends xi{constructor(t=10,e=16,n=8,i=64,r=4473924,o=8947848){r=new pt(r),o=new pt(o);const a=[],l=[];if(e>1)for(let d=0;d<e;d++){const u=d/e*(Math.PI*2),f=Math.sin(u)*t,p=Math.cos(u)*t;a.push(0,0,0),a.push(f,0,p);const _=d&1?r:o;l.push(_.r,_.g,_.b),l.push(_.r,_.g,_.b)}for(let d=0;d<n;d++){const u=d&1?r:o,f=t-t/n*d;for(let p=0;p<i;p++){let _=p/i*(Math.PI*2),m=Math.sin(_)*f,g=Math.cos(_)*f;a.push(m,0,g),l.push(u.r,u.g,u.b),_=(p+1)/i*(Math.PI*2),m=Math.sin(_)*f,g=Math.cos(_)*f,a.push(m,0,g),l.push(u.r,u.g,u.b)}}const c=new te;c.setAttribute("position",new yt(a,3)),c.setAttribute("color",new yt(l,3));const h=new xn({vertexColors:!0,toneMapped:!1});super(c,h),this.type="PolarGridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}const ud=new C,Ua=new C,fd=new C;class qx extends ue{constructor(t,e,n){super(),this.light=t,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",e===void 0&&(e=1);let i=new te;i.setAttribute("position",new yt([-e,e,0,e,e,0,e,-e,0,-e,-e,0,-e,e,0],3));const r=new xn({fog:!1,toneMapped:!1});this.lightPlane=new es(i,r),this.add(this.lightPlane),i=new te,i.setAttribute("position",new yt([0,0,0,0,0,1],3)),this.targetLine=new es(i,r),this.add(this.targetLine),this.update()}dispose(){super.dispose(),this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.matrixWorldNeedsUpdate=!0,this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),ud.setFromMatrixPosition(this.light.matrixWorld),Ua.setFromMatrixPosition(this.light.target.matrixWorld),fd.subVectors(Ua,ud),this.lightPlane.lookAt(Ua),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Ua),this.targetLine.scale.z=fd.length()}}const Fa=new C,De=new Bc;class Zx extends xi{constructor(t){const e=new te,n=new xn({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],r=[],o={};a("n1","n2"),a("n2","n4"),a("n4","n3"),a("n3","n1"),a("f1","f2"),a("f2","f4"),a("f4","f3"),a("f3","f1"),a("n1","f1"),a("n2","f2"),a("n3","f3"),a("n4","f4"),a("p","n1"),a("p","n2"),a("p","n3"),a("p","n4"),a("u1","u2"),a("u2","u3"),a("u3","u1"),a("c","t"),a("p","c"),a("cn1","cn2"),a("cn3","cn4"),a("cf1","cf2"),a("cf3","cf4");function a(p,_){l(p),l(_)}function l(p){i.push(0,0,0),r.push(0,0,0),o[p]===void 0&&(o[p]=[]),o[p].push(i.length/3-1)}e.setAttribute("position",new yt(i,3)),e.setAttribute("color",new yt(r,3)),super(e,n),this.type="CameraHelper",this.camera=t,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();const c=new pt(16755200),h=new pt(16711680),d=new pt(43775),u=new pt(16777215),f=new pt(3355443);this.setColors(c,h,d,u,f)}setColors(t,e,n,i,r){const a=this.geometry.getAttribute("color");return a.setXYZ(0,t.r,t.g,t.b),a.setXYZ(1,t.r,t.g,t.b),a.setXYZ(2,t.r,t.g,t.b),a.setXYZ(3,t.r,t.g,t.b),a.setXYZ(4,t.r,t.g,t.b),a.setXYZ(5,t.r,t.g,t.b),a.setXYZ(6,t.r,t.g,t.b),a.setXYZ(7,t.r,t.g,t.b),a.setXYZ(8,t.r,t.g,t.b),a.setXYZ(9,t.r,t.g,t.b),a.setXYZ(10,t.r,t.g,t.b),a.setXYZ(11,t.r,t.g,t.b),a.setXYZ(12,t.r,t.g,t.b),a.setXYZ(13,t.r,t.g,t.b),a.setXYZ(14,t.r,t.g,t.b),a.setXYZ(15,t.r,t.g,t.b),a.setXYZ(16,t.r,t.g,t.b),a.setXYZ(17,t.r,t.g,t.b),a.setXYZ(18,t.r,t.g,t.b),a.setXYZ(19,t.r,t.g,t.b),a.setXYZ(20,t.r,t.g,t.b),a.setXYZ(21,t.r,t.g,t.b),a.setXYZ(22,t.r,t.g,t.b),a.setXYZ(23,t.r,t.g,t.b),a.setXYZ(24,e.r,e.g,e.b),a.setXYZ(25,e.r,e.g,e.b),a.setXYZ(26,e.r,e.g,e.b),a.setXYZ(27,e.r,e.g,e.b),a.setXYZ(28,e.r,e.g,e.b),a.setXYZ(29,e.r,e.g,e.b),a.setXYZ(30,e.r,e.g,e.b),a.setXYZ(31,e.r,e.g,e.b),a.setXYZ(32,n.r,n.g,n.b),a.setXYZ(33,n.r,n.g,n.b),a.setXYZ(34,n.r,n.g,n.b),a.setXYZ(35,n.r,n.g,n.b),a.setXYZ(36,n.r,n.g,n.b),a.setXYZ(37,n.r,n.g,n.b),a.setXYZ(38,i.r,i.g,i.b),a.setXYZ(39,i.r,i.g,i.b),a.setXYZ(40,r.r,r.g,r.b),a.setXYZ(41,r.r,r.g,r.b),a.setXYZ(42,r.r,r.g,r.b),a.setXYZ(43,r.r,r.g,r.b),a.setXYZ(44,r.r,r.g,r.b),a.setXYZ(45,r.r,r.g,r.b),a.setXYZ(46,r.r,r.g,r.b),a.setXYZ(47,r.r,r.g,r.b),a.setXYZ(48,r.r,r.g,r.b),a.setXYZ(49,r.r,r.g,r.b),a.needsUpdate=!0,this}update(){const t=this.geometry,e=this.pointMap,n=1,i=1;let r,o;if(De.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),this.camera.reversedDepth===!0)r=1,o=0;else if(this.camera.coordinateSystem===Dn)r=-1,o=1;else if(this.camera.coordinateSystem===Ps)r=0,o=1;else throw new Error("THREE.CameraHelper.update(): Invalid coordinate system: "+this.camera.coordinateSystem);Oe("c",e,t,De,0,0,r),Oe("t",e,t,De,0,0,o),Oe("n1",e,t,De,-n,-i,r),Oe("n2",e,t,De,n,-i,r),Oe("n3",e,t,De,-n,i,r),Oe("n4",e,t,De,n,i,r),Oe("f1",e,t,De,-n,-i,o),Oe("f2",e,t,De,n,-i,o),Oe("f3",e,t,De,-n,i,o),Oe("f4",e,t,De,n,i,o),Oe("u1",e,t,De,n*.7,i*1.1,r),Oe("u2",e,t,De,-n*.7,i*1.1,r),Oe("u3",e,t,De,0,i*2,r),Oe("cf1",e,t,De,-n,0,o),Oe("cf2",e,t,De,n,0,o),Oe("cf3",e,t,De,0,-i,o),Oe("cf4",e,t,De,0,i,o),Oe("cn1",e,t,De,-n,0,r),Oe("cn2",e,t,De,n,0,r),Oe("cn3",e,t,De,0,-i,r),Oe("cn4",e,t,De,0,i,r),t.getAttribute("position").needsUpdate=!0}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}function Oe(s,t,e,n,i,r,o){Fa.set(i,r,o).unproject(n);const a=t[s];if(a!==void 0){const l=e.getAttribute("position");for(let c=0,h=a.length;c<h;c++)l.setXYZ(a[c],Fa.x,Fa.y,Fa.z)}}const Ba=new $e;class Kx extends xi{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=new Float32Array(24),r=new te;r.setIndex(new be(n,1)),r.setAttribute("position",new be(i,3)),super(r,new xn({color:e,toneMapped:!1})),this.object=t,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(){if(this.object!==void 0&&Ba.setFromObject(this.object),Ba.isEmpty())return;const t=Ba.min,e=Ba.max,n=this.geometry.attributes.position,i=n.array;i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=t.x,i[4]=e.y,i[5]=e.z,i[6]=t.x,i[7]=t.y,i[8]=e.z,i[9]=e.x,i[10]=t.y,i[11]=e.z,i[12]=e.x,i[13]=e.y,i[14]=t.z,i[15]=t.x,i[16]=e.y,i[17]=t.z,i[18]=t.x,i[19]=t.y,i[20]=t.z,i[21]=e.x,i[22]=t.y,i[23]=t.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(t){return this.object=t,this.update(),this}copy(t,e){return super.copy(t,e),this.object=t.object,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class $x extends xi{constructor(t,e=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new te;r.setIndex(new be(n,1)),r.setAttribute("position",new yt(i,3)),super(r,new xn({color:e,toneMapped:!1})),this.box=t,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(t){const e=this.box;e.isEmpty()||(e.getCenter(this.position),e.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(t))}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class Jx extends es{constructor(t,e=1,n=16776960){const i=n,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],o=new te;o.setAttribute("position",new yt(r,3)),o.computeBoundingSphere(),super(o,new xn({color:i,toneMapped:!1})),this.type="PlaneHelper",this.plane=t,this.size=e;const a=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new te;l.setAttribute("position",new yt(a,3)),l.computeBoundingSphere(),this.add(new Pe(l,new _i({color:i,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(t){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(t)}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const dd=new C;let za,Ah;class jx extends ue{constructor(t=new C(0,0,1),e=new C(0,0,0),n=1,i=16776960,r=n*.2,o=r*.2){super(),this.type="ArrowHelper",za===void 0&&(za=new te,za.setAttribute("position",new yt([0,0,0,0,1,0],3)),Ah=new Wo(.5,1,5,1),Ah.translate(0,-.5,0)),this.position.copy(e),this.line=new es(za,new xn({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Pe(Ah,new _i({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,r,o)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{dd.set(t.z,0,-t.x).normalize();const e=Math.acos(t.y);this.quaternion.setFromAxisAngle(dd,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){super.dispose(),this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class Qx extends xi{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new te;i.setAttribute("position",new yt(e,3)),i.setAttribute("color",new yt(n,3));const r=new xn({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(t,e,n){const i=new pt,r=this.geometry.attributes.color.array;return i.set(t),i.toArray(r,0),i.toArray(r,3),i.set(e),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}class tv{constructor(){this.type="ShapePath",this.color=new pt,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(t,e){return this.currentPath=new Po,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,r,o){return this.currentPath.bezierCurveTo(t,e,n,i,r,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(){function t(l,c){let h=!1;const d=c.length;for(let u=0,f=d-1;u<d;f=u++){const p=c[u],_=c[f];p.y>l.y!=_.y>l.y&&l.x<(_.x-p.x)*(l.y-p.y)/(_.y-p.y)+p.x&&(h=!h)}return h}function e(l,c){const h=c.getCenter(new it);if(t(h,l))return h;const d=h.y,u=[],f=l.length;for(let p=0;p<f;p++){const _=l[p],m=l[(p+1)%f];if(_.y>d!=m.y>d){const g=_.x+(d-_.y)*(m.x-_.x)/(m.y-_.y);u.push(g)}}return u.length>1&&(u.sort((p,_)=>p-_),h.x=(u[0]+u[1])/2),h}let n=this.userData.style&&this.userData.style.fillRule||"nonzero";n!=="nonzero"&&n!=="evenodd"&&(Et('Fill-rule "'+n+'" is not supported, falling back to "nonzero".'),n="nonzero");const i=n==="nonzero"?(l=>l!==0):(l=>(l&1)!==0),r=[];for(const l of this.subPaths){const c=l.getPoints();if(c.length<3)continue;const h=Qn.area(c);if(h===0)continue;const d=new Nm;for(let u=0;u<c.length;u++)d.expandByPoint(c[u]);r.push({subPath:l,points:c,boundingBox:d,interiorPoint:e(c,d),absArea:Math.abs(h),winding:h<0?-1:1,container:null,exclude:!1,role:null})}r.sort((l,c)=>c.absArea-l.absArea);for(let l=0;l<r.length;l++){const c=r[l];let h=0;for(let d=l-1;d>=0;d--){const u=r[d];if(u.boundingBox.containsBox(c.boundingBox)&&t(c.interiorPoint,u.points)){c.container=u.exclude?u.container:u,h=u.winding,c.winding+=h;break}}i(c.winding)===i(h)&&(c.exclude=!0)}for(const l of r)l.exclude||(l.role=l.container===null||l.container.role==="hole"?"outer":"hole");const o=[],a=new Map;for(const l of r){if(l.exclude||l.role!=="outer")continue;const c=new Xo;c.curves=l.subPath.curves,o.push(c),a.set(l,c)}for(const l of r){if(l.exclude||l.role!=="hole")continue;const c=a.get(l.container);if(!c)continue;const h=new Po;h.curves=l.subPath.curves,c.holes.push(h)}return o}}class Um extends si{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function ev(s,t){const e=s.image&&s.image.width?s.image.width/s.image.height:1;return e>t?(s.repeat.x=1,s.repeat.y=e/t,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2):(s.repeat.x=t/e,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0),s}function nv(s,t){const e=s.image&&s.image.width?s.image.width/s.image.height:1;return e>t?(s.repeat.x=t/e,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0):(s.repeat.x=1,s.repeat.y=e/t,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2),s}function iv(s){return s.repeat.x=1,s.repeat.y=1,s.offset.x=0,s.offset.y=0,s}function $h(s,t,e,n){const i=sv(n);switch(e){case hu:return s*t;case oc:return s*t/i.components*i.byteLength;case ko:return s*t/i.components*i.byteLength;case Qi:return s*t*2/i.components*i.byteLength;case ac:return s*t*2/i.components*i.byteLength;case uu:return s*t*3/i.components*i.byteLength;case gn:return s*t*4/i.components*i.byteLength;case lc:return s*t*4/i.components*i.byteLength;case ho:case uo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case fo:case po:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case hl:case fl:return Math.max(s,16)*Math.max(t,8)/4;case cl:case ul:return Math.max(s,8)*Math.max(t,8)/2;case dl:case pl:case gl:case _l:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ml:case So:case xl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case vl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case yl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Ml:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Sl:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case bl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case wl:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case El:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Tl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Al:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Rl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Cl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Pl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Il:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Ll:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Dl:case Nl:case Ol:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Ul:case Fl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case bo:case Bl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function sv(s){switch(s){case dn:case ou:return{byteLength:1,components:1};case Sr:case au:case an:return{byteLength:2,components:1};case sc:case rc:return{byteLength:2,components:4};case kn:case ic:case mn:return{byteLength:4,components:1};case lu:case cu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}class rv{static contain(t,e){return ev(t,e)}static cover(t,e){return nv(t,e)}static fill(t){return iv(t)}static getByteLength(t,e,n,i){return $h(t,e,n,i)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kl}}));typeof window<"u"&&(window.__THREE__?Et("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kl);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Fm(){let s=null,t=!1,e=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function ov(s){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){const p=d[u],_=d[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){const _=d[f];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var av=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lv=`#ifdef USE_ALPHAHASH
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
#endif`,cv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dv=`#ifdef USE_AOMAP
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
#endif`,pv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mv=`#ifdef USE_BATCHING
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
#endif`,gv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_v=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yv=`#ifdef USE_IRIDESCENCE
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
#endif`,Mv=`#ifdef USE_BUMPMAP
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
#endif`,Sv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ev=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Av=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Rv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Cv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Pv=`#define PI 3.141592653589793
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
} // validated`,Iv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Lv=`vec3 transformedNormal = objectNormal;
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
#endif`,Dv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ov=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Uv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zv=`#ifdef USE_ENVMAP
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
#endif`,kv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Vv=`#ifdef USE_ENVMAP
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
#endif`,Gv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hv=`#ifdef USE_ENVMAP
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
#endif`,Wv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zv=`#ifdef USE_GRADIENTMAP
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
}`,Kv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$v=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Qv=`#ifdef USE_ENVMAP
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
#endif`,ty=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ey=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ny=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sy=`PhysicalMaterial material;
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
#endif`,ry=`uniform sampler2D dfgLUT;
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
}`,oy=`
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
#endif`,ay=`#if defined( RE_IndirectDiffuse )
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
#endif`,ly=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cy=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,hy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,py=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,my=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_y=`#if defined( USE_POINTS_UV )
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
#endif`,xy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,My=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,by=`#ifdef USE_MORPHTARGETS
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
#endif`,wy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ey=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ty=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ay=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ry=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Py=`#ifdef USE_NORMALMAP
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
#endif`,Iy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ly=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ny=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Oy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Uy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,By=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ky=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Yy=`float getShadowMask() {
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
}`,qy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zy=`#ifdef USE_SKINNING
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
#endif`,Ky=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$y=`#ifdef USE_SKINNING
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
#endif`,Jy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,eM=`#ifdef USE_TRANSMISSION
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
#endif`,nM=`#ifdef USE_TRANSMISSION
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
#endif`,iM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const aM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lM=`uniform sampler2D t2D;
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
}`,cM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,uM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dM=`#include <common>
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
}`,pM=`#if DEPTH_PACKING == 3200
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
}`,mM=`#define DISTANCE
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
}`,gM=`#define DISTANCE
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
}`,_M=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vM=`uniform float scale;
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
}`,yM=`uniform vec3 diffuse;
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
}`,MM=`#include <common>
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
}`,SM=`uniform vec3 diffuse;
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
}`,bM=`#define LAMBERT
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
}`,wM=`#define LAMBERT
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
}`,EM=`#define MATCAP
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
}`,TM=`#define MATCAP
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
}`,AM=`#define NORMAL
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
}`,RM=`#define NORMAL
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
}`,CM=`#define PHONG
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
}`,PM=`#define PHONG
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
}`,IM=`#define STANDARD
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
}`,LM=`#define STANDARD
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
}`,DM=`#define TOON
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
}`,NM=`#define TOON
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
}`,OM=`uniform float size;
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
}`,UM=`uniform vec3 diffuse;
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
}`,FM=`#include <common>
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
}`,BM=`uniform vec3 color;
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
}`,zM=`uniform float rotation;
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
}`,kM=`uniform vec3 diffuse;
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
}`,le={alphahash_fragment:av,alphahash_pars_fragment:lv,alphamap_fragment:cv,alphamap_pars_fragment:hv,alphatest_fragment:uv,alphatest_pars_fragment:fv,aomap_fragment:dv,aomap_pars_fragment:pv,batching_pars_vertex:mv,batching_vertex:gv,begin_vertex:_v,beginnormal_vertex:xv,bsdfs:vv,iridescence_fragment:yv,bumpmap_pars_fragment:Mv,clipping_planes_fragment:Sv,clipping_planes_pars_fragment:bv,clipping_planes_pars_vertex:wv,clipping_planes_vertex:Ev,color_fragment:Tv,color_pars_fragment:Av,color_pars_vertex:Rv,color_vertex:Cv,common:Pv,cube_uv_reflection_fragment:Iv,defaultnormal_vertex:Lv,displacementmap_pars_vertex:Dv,displacementmap_vertex:Nv,emissivemap_fragment:Ov,emissivemap_pars_fragment:Uv,colorspace_fragment:Fv,colorspace_pars_fragment:Bv,envmap_fragment:zv,envmap_common_pars_fragment:kv,envmap_pars_fragment:Vv,envmap_pars_vertex:Gv,envmap_physical_pars_fragment:Qv,envmap_vertex:Hv,fog_vertex:Wv,fog_pars_vertex:Xv,fog_fragment:Yv,fog_pars_fragment:qv,gradientmap_pars_fragment:Zv,lightmap_pars_fragment:Kv,lights_lambert_fragment:$v,lights_lambert_pars_fragment:Jv,lights_pars_begin:jv,lights_toon_fragment:ty,lights_toon_pars_fragment:ey,lights_phong_fragment:ny,lights_phong_pars_fragment:iy,lights_physical_fragment:sy,lights_physical_pars_fragment:ry,lights_fragment_begin:oy,lights_fragment_maps:ay,lights_fragment_end:ly,lightprobes_pars_fragment:cy,logdepthbuf_fragment:hy,logdepthbuf_pars_fragment:uy,logdepthbuf_pars_vertex:fy,logdepthbuf_vertex:dy,map_fragment:py,map_pars_fragment:my,map_particle_fragment:gy,map_particle_pars_fragment:_y,metalnessmap_fragment:xy,metalnessmap_pars_fragment:vy,morphinstance_vertex:yy,morphcolor_vertex:My,morphnormal_vertex:Sy,morphtarget_pars_vertex:by,morphtarget_vertex:wy,normal_fragment_begin:Ey,normal_fragment_maps:Ty,normal_pars_fragment:Ay,normal_pars_vertex:Ry,normal_vertex:Cy,normalmap_pars_fragment:Py,clearcoat_normal_fragment_begin:Iy,clearcoat_normal_fragment_maps:Ly,clearcoat_pars_fragment:Dy,iridescence_pars_fragment:Ny,opaque_fragment:Oy,packing:Uy,premultiplied_alpha_fragment:Fy,project_vertex:By,dithering_fragment:zy,dithering_pars_fragment:ky,roughnessmap_fragment:Vy,roughnessmap_pars_fragment:Gy,shadowmap_pars_fragment:Hy,shadowmap_pars_vertex:Wy,shadowmap_vertex:Xy,shadowmask_pars_fragment:Yy,skinbase_vertex:qy,skinning_pars_vertex:Zy,skinning_vertex:Ky,skinnormal_vertex:$y,specularmap_fragment:Jy,specularmap_pars_fragment:jy,tonemapping_fragment:Qy,tonemapping_pars_fragment:tM,transmission_fragment:eM,transmission_pars_fragment:nM,uv_pars_fragment:iM,uv_pars_vertex:sM,uv_vertex:rM,worldpos_vertex:oM,background_vert:aM,background_frag:lM,backgroundCube_vert:cM,backgroundCube_frag:hM,cube_vert:uM,cube_frag:fM,depth_vert:dM,depth_frag:pM,distance_vert:mM,distance_frag:gM,equirect_vert:_M,equirect_frag:xM,linedashed_vert:vM,linedashed_frag:yM,meshbasic_vert:MM,meshbasic_frag:SM,meshlambert_vert:bM,meshlambert_frag:wM,meshmatcap_vert:EM,meshmatcap_frag:TM,meshnormal_vert:AM,meshnormal_frag:RM,meshphong_vert:CM,meshphong_frag:PM,meshphysical_vert:IM,meshphysical_frag:LM,meshtoon_vert:DM,meshtoon_frag:NM,points_vert:OM,points_frag:UM,shadow_vert:FM,shadow_frag:BM,sprite_vert:zM,sprite_frag:kM},Ct={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},envMapRotation:{value:new re},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},Zn={basic:{uniforms:hn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:hn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new pt(0)},envMapIntensity:{value:1}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:hn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:hn([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:hn([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new pt(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:hn([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:hn([Ct.points,Ct.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:hn([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:hn([Ct.common,Ct.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:hn([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:hn([Ct.sprite,Ct.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new re}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distance:{uniforms:hn([Ct.common,Ct.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distance_vert,fragmentShader:le.distance_frag},shadow:{uniforms:hn([Ct.lights,Ct.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};Zn.physical={uniforms:hn([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};const ka={r:0,b:0,g:0},VM=new ie,Bm=new re;Bm.set(-1,0,0,0,1,0,0,0,1);function GM(s,t,e,n,i,r){const o=new pt(0);let a=i===!0?0:1,l,c,h=null,d=0,u=null;function f(M){let S=M.isScene===!0?M.background:null;if(S&&S.isTexture){const v=M.backgroundBlurriness>0;S=t.get(S,v)}return S}function p(M){let S=!1;const v=f(M);v===null?m(o,a):v&&v.isColor&&(m(v,1),S=!0);const b=s.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(M,S){const v=f(S);v&&(v.isCubeTexture||v.mapping===Lr)?(c===void 0&&(c=new Pe(new _n(1,1,1),new Ce({name:"BackgroundCubeMaterial",uniforms:Rr(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(VM.makeRotationFromEuler(S.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Bm),c.material.toneMapped=he.getTransfer(v.colorSpace)!==_e,(h!==v||d!==v.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Pe(new Dr(2,2),new Ce({name:"BackgroundMaterial",uniforms:Rr(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=he.getTransfer(v.colorSpace)!==_e,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,S){M.getRGB(ka,am(s)),e.buffers.color.setClear(ka.r,ka.g,ka.b,S,r)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,S=1){o.set(M),a=S,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:p,addToRenderList:_,dispose:g}}function HM(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,o=!1;function a(L,N,G,U,z){let W=!1;const V=d(L,U,G,N);r!==V&&(r=V,c(r.object)),W=f(L,U,G,z),W&&p(L,U,G,z),z!==null&&t.update(z,s.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,v(L,N,G,U),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return s.createVertexArray()}function c(L){return s.bindVertexArray(L)}function h(L){return s.deleteVertexArray(L)}function d(L,N,G,U){const z=U.wireframe===!0;let W=n[N.id];W===void 0&&(W={},n[N.id]=W);const V=L.isInstancedMesh===!0?L.id:0;let nt=W[V];nt===void 0&&(nt={},W[V]=nt);let B=nt[G.id];B===void 0&&(B={},nt[G.id]=B);let X=B[z];return X===void 0&&(X=u(l()),B[z]=X),X}function u(L){const N=[],G=[],U=[];for(let z=0;z<e;z++)N[z]=0,G[z]=0,U[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:G,attributeDivisors:U,object:L,attributes:{},index:null}}function f(L,N,G,U){const z=r.attributes,W=N.attributes;let V=0;const nt=G.getAttributes();for(const B in nt)if(nt[B].location>=0){const $=z[B];let gt=W[B];if(gt===void 0&&(B==="instanceMatrix"&&L.instanceMatrix&&(gt=L.instanceMatrix),B==="instanceColor"&&L.instanceColor&&(gt=L.instanceColor)),$===void 0||$.attribute!==gt||gt&&$.data!==gt.data)return!0;V++}return r.attributesNum!==V||r.index!==U}function p(L,N,G,U){const z={},W=N.attributes;let V=0;const nt=G.getAttributes();for(const B in nt)if(nt[B].location>=0){let $=W[B];$===void 0&&(B==="instanceMatrix"&&L.instanceMatrix&&($=L.instanceMatrix),B==="instanceColor"&&L.instanceColor&&($=L.instanceColor));const gt={};gt.attribute=$,$&&$.data&&(gt.data=$.data),z[B]=gt,V++}r.attributes=z,r.attributesNum=V,r.index=U}function _(){const L=r.newAttributes;for(let N=0,G=L.length;N<G;N++)L[N]=0}function m(L){g(L,0)}function g(L,N){const G=r.newAttributes,U=r.enabledAttributes,z=r.attributeDivisors;G[L]=1,U[L]===0&&(s.enableVertexAttribArray(L),U[L]=1),z[L]!==N&&(s.vertexAttribDivisor(L,N),z[L]=N)}function M(){const L=r.newAttributes,N=r.enabledAttributes;for(let G=0,U=N.length;G<U;G++)N[G]!==L[G]&&(s.disableVertexAttribArray(G),N[G]=0)}function S(L,N,G,U,z,W,V){V===!0?s.vertexAttribIPointer(L,N,G,z,W):s.vertexAttribPointer(L,N,G,U,z,W)}function v(L,N,G,U){_();const z=U.attributes,W=G.getAttributes(),V=N.defaultAttributeValues;for(const nt in W){const B=W[nt];if(B.location>=0){let X=z[nt];if(X===void 0&&(nt==="instanceMatrix"&&L.instanceMatrix&&(X=L.instanceMatrix),nt==="instanceColor"&&L.instanceColor&&(X=L.instanceColor)),X!==void 0){const $=X.normalized,gt=X.itemSize,mt=t.get(X);if(mt===void 0)continue;const zt=mt.buffer,Wt=mt.type,Dt=mt.bytesPerElement,J=Wt===s.INT||Wt===s.UNSIGNED_INT||X.gpuType===ic;if(X.isInterleavedBufferAttribute){const et=X.data,ut=et.stride,xt=X.offset;if(et.isInstancedInterleavedBuffer){for(let st=0;st<B.locationSize;st++)g(B.location+st,et.meshPerAttribute);L.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let st=0;st<B.locationSize;st++)m(B.location+st);s.bindBuffer(s.ARRAY_BUFFER,zt);for(let st=0;st<B.locationSize;st++)S(B.location+st,gt/B.locationSize,Wt,$,ut*Dt,(xt+gt/B.locationSize*st)*Dt,J)}else{if(X.isInstancedBufferAttribute){for(let et=0;et<B.locationSize;et++)g(B.location+et,X.meshPerAttribute);L.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let et=0;et<B.locationSize;et++)m(B.location+et);s.bindBuffer(s.ARRAY_BUFFER,zt);for(let et=0;et<B.locationSize;et++)S(B.location+et,gt/B.locationSize,Wt,$,gt*Dt,gt/B.locationSize*et*Dt,J)}}else if(V!==void 0){const $=V[nt];if($!==void 0)switch($.length){case 2:s.vertexAttrib2fv(B.location,$);break;case 3:s.vertexAttrib3fv(B.location,$);break;case 4:s.vertexAttrib4fv(B.location,$);break;default:s.vertexAttrib1fv(B.location,$)}}}}M()}function b(){T();for(const L in n){const N=n[L];for(const G in N){const U=N[G];for(const z in U){const W=U[z];for(const V in W)h(W[V].object),delete W[V];delete U[z]}}delete n[L]}}function E(L){if(n[L.id]===void 0)return;const N=n[L.id];for(const G in N){const U=N[G];for(const z in U){const W=U[z];for(const V in W)h(W[V].object),delete W[V];delete U[z]}}delete n[L.id]}function R(L){for(const N in n){const G=n[N];for(const U in G){const z=G[U];if(z[L.id]===void 0)continue;const W=z[L.id];for(const V in W)h(W[V].object),delete W[V];delete z[L.id]}}}function y(L){for(const N in n){const G=n[N],U=L.isInstancedMesh===!0?L.id:0,z=G[U];if(z!==void 0){for(const W in z){const V=z[W];for(const nt in V)h(V[nt].object),delete V[nt];delete z[W]}delete G[U],Object.keys(G).length===0&&delete n[N]}}}function T(){I(),o=!0,r!==i&&(r=i,c(r.object))}function I(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:T,resetDefaultState:I,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfObject:y,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function WM(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function XM(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(R){return!(R!==gn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const y=R===an&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==dn&&R!==mn&&!y&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Et("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Et("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=s.getParameter(s.MAX_SAMPLES),E=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:M,maxVaryings:S,maxFragmentUniforms:v,maxSamples:b,samples:E}}function YM(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new ui,a=new re,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const p=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,g=s.get(d);if(!i||p===null||p.length===0||r&&!m)r?h(null):c();else{const M=r?0:n,S=M*4;let v=g.clippingState||null;l.value=v,v=h(p,u,S,f);for(let b=0;b!==S;++b)v[b]=e[b];g.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,p){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,p!==!0||m===null){const g=f+_*4,M=u.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<g)&&(m=new Float32Array(g));for(let S=0,v=f;S!==_;++S,v+=4)o.copy(d[S]).applyMatrix4(M,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}const _r=4,qM=6,ZM=20,KM=256,jr=new Ur,pd=new pt;let Rh=null,Ch=0,Ph=0,Ih=!1;const $M=new C,_s=new C;class Jh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){const{size:o=256,position:a=$M}=r;Rh=this._renderer.getRenderTarget(),Ch=this._renderer.getActiveCubeFace(),Ph=this._renderer.getActiveMipmapLevel(),Ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_d(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Rh,Ch,Ph),this._renderer.xr.enabled=Ih,t.scissorTest=!1,cr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===pi||t.mapping===ji?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Rh=this._renderer.getRenderTarget(),Ch=this._renderer.getActiveCubeFace(),Ph=this._renderer.getActiveMipmapLevel(),Ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Re,minFilter:Re,generateMipmaps:!1,type:an,format:gn,colorSpace:To,depthBuffer:!1},i=md(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=md(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=JM(r)),this._blurMaterial=QM(r,t,e),this._ggxMaterial=jM(r,t,e)}return i}_compileMaterial(t){const e=new Pe(new te,t);this._renderer.compile(e,jr)}_sceneToCubeUV(t,e,n,i,r){const l=new Ke(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(pd),d.toneMapping=ei,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pe(new _n,new _i({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let g=!1;const M=t.background;M?M.isColor&&(m.color.copy(M),t.background=null,g=!0):(m.color.copy(pd),g=!0);for(let S=0;S<6;S++){const v=S%3;v===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[S],r.y,r.z)):v===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[S]));const b=this._cubeSize;cr(i,v*b,S>2?b:0,b,b),d.setRenderTarget(i),g&&d.render(_,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=M}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===pi||t.mapping===ji;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=_d()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gd());const r=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;cr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,jr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const i=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:p}=this,_=this._sizeLods[n],m=3*_*(n>p-_r?n-p+_r:0),g=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=p-e,cr(r,m,g,3*_,2*_),i.setRenderTarget(r),i.render(a,jr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,cr(t,m,g,3*_,2*_),i.setRenderTarget(t),i.render(a,jr)}_blur(t,e,n,i){const r=this._pingPongRenderTarget,o=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,i,r){const o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[i];l.material=a;const c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;const h=this._sizeLods[i],d=3*h*(i>this._lodMax-_r?i-this._lodMax+_r:0),u=4*(this._cubeSize-h);cr(e,d,u,3*h,2*h),o.setRenderTarget(e),o.render(l,jr)}}function JM(s){const t=[],e=[];let n=s;const i=s-_r+1+qM;for(let r=0;r<i;r++){const o=Math.pow(2,n);t.push(o);const a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,p=new Float32Array(f*u*d),_=new Float32Array(f*u*d);for(let g=0;g<d;g++){const M=g%3*2/3-1,S=g>2?0:-1,v=[M,S,0,M+2/3,S,0,M+2/3,S+1,0,M,S,0,M+2/3,S+1,0,M,S+1,0];p.set(v,f*u*g);for(let b=0;b<u;b++){const E=h[b*2]*2-1,R=h[b*2+1]*2-1;g===0?_s.set(1,R,E):g===1?_s.set(-E,1,-R):g===2?_s.set(-E,R,1):g===3?_s.set(-1,R,-E):g===4?_s.set(-E,-1,R):_s.set(E,R,-1),_s.toArray(_,(g*u+b)*f)}}const m=new te;m.setAttribute("position",new be(p,f)),m.setAttribute("outputDirection",new be(_,f)),e.push(new Pe(m,null)),n>_r&&n--}return{lodMeshes:e,sizeLods:t}}function md(s,t,e){const n=new He(s,t,e);return n.texture.mapping=Lr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function cr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function jM(s,t,e){return new Ce({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:KM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:kc(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function QM(s,t,e){return new Ce({name:"SphericalGaussianBlur",defines:{SAMPLES:ZM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:kc(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function gd(){return new Ce({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kc(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function _d(){return new Ce({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function kc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Gu extends He{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Go(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new _n(5,5,5),r=new Ce({name:"CubemapFromEquirect",uniforms:Rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:ti});r.uniforms.tEquirect.value=e;const o=new Pe(i,r),a=e.minFilter;return e.minFilter===fi&&(e.minFilter=Re),new Cm(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}function t1(s){let t=new WeakMap,e=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===ao||f===lo)if(t.has(u)){const p=t.get(u).texture;return a(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const _=new Gu(p.height);return _.fromEquirectangularTexture(s,u),t.set(u,_),u.addEventListener("dispose",c),a(_.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){const f=u.mapping,p=f===ao||f===lo,_=f===pi||f===ji;if(p||_){let m=e.get(u);const g=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new Jh(s)),m=p?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{const M=u.image;return p&&M&&M.height>0||_&&M&&l(M)?(n===null&&(n=new Jh(s)),m=p?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===ao?u.mapping=pi:f===lo&&(u.mapping=ji),u}function l(u){let f=0;const p=6;for(let _=0;_<p;_++)u[_]!==void 0&&f++;return f===p}function c(u){const f=u.target;f.removeEventListener("dispose",c);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function e1(s){const t={};function e(n){if(t[n]!==void 0)return t[n];const i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Ii("WebGLRenderer: "+n+" extension not supported."),i}}}function n1(s,t,e,n){const i={},r=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const p in u.attributes)t.remove(u.attributes[p]);u.removeEventListener("dispose",o),delete i[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const f in u)t.update(u[f],s.ARRAY_BUFFER)}function c(d){const u=[],f=d.index,p=d.attributes.position;let _=0;if(p===void 0)return;if(f!==null){const M=f.array;_=f.version;for(let S=0,v=M.length;S<v;S+=3){const b=M[S+0],E=M[S+1],R=M[S+2];u.push(b,E,E,R,R,b)}}else{const M=p.array;_=p.version;for(let S=0,v=M.length/3-1;S<v;S+=3){const b=S+0,E=S+1,R=S+2;u.push(b,E,E,R,R,b)}}const m=new(p.count>=65535?_u:gu)(u,1);m.version=_;const g=r.get(d);g&&t.remove(g),r.set(d,m)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function i1(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){s.drawElements(n,u,r,d*o),e.update(u,n,1)}function c(d,u,f){f!==0&&(s.drawElementsInstanced(n,u,r,d*o,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let _=0;for(let m=0;m<f;m++)_+=u[m];e.update(_,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function s1(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:Kt("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function r1(s,t,e){const n=new WeakMap,i=new Me;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let I=function(){y.dispose(),n.delete(a),a.removeEventListener("dispose",I)};var f=I;u!==void 0&&u.texture.dispose();const p=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let v=0;p===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let b=a.attributes.position.count*v,E=1;b>t.maxTextureSize&&(E=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const R=new Float32Array(b*E*4*d),y=new dc(R,b,E,d);y.type=mn,y.needsUpdate=!0;const T=v*4;for(let L=0;L<d;L++){const N=g[L],G=M[L],U=S[L],z=b*E*4*L;for(let W=0;W<N.count;W++){const V=W*T;p===!0&&(i.fromBufferAttribute(N,W),R[z+V+0]=i.x,R[z+V+1]=i.y,R[z+V+2]=i.z,R[z+V+3]=0),_===!0&&(i.fromBufferAttribute(G,W),R[z+V+4]=i.x,R[z+V+5]=i.y,R[z+V+6]=i.z,R[z+V+7]=0),m===!0&&(i.fromBufferAttribute(U,W),R[z+V+8]=i.x,R[z+V+9]=i.y,R[z+V+10]=i.z,R[z+V+11]=U.itemSize===4?i.w:1)}}u={count:d,texture:y,size:new it(b,E)},n.set(a,u),a.addEventListener("dispose",I)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let p=0;for(let m=0;m<c.length;m++)p+=c[m];const _=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function o1(s,t,e,n,i){let r=new WeakMap;function o(c){const h=i.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}const a1={[$l]:"LINEAR_TONE_MAPPING",[Jl]:"REINHARD_TONE_MAPPING",[jl]:"CINEON_TONE_MAPPING",[zo]:"ACES_FILMIC_TONE_MAPPING",[tc]:"AGX_TONE_MAPPING",[ec]:"NEUTRAL_TONE_MAPPING",[Ql]:"CUSTOM_TONE_MAPPING"};function l1(s,t,e,n,i,r){const o=new He(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null;const c=new te;c.setAttribute("position",new yt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new yt([0,2,0,0,2,0],2));const h=new Nc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Pe(c,h),u=new Ur(-1,1,1,-1,0,1);let f=null,p=null,_=!1,m,g=null,M=[],S=!1;this.setSize=function(v,b){o.setSize(v,b),a!==null&&a.setSize(v,b),l!==null&&l.setSize(v,b);for(let E=0;E<M.length;E++){const R=M[E];R.setSize&&R.setSize(v,b)}},this.setEffects=function(v){M=v,S=M.length>0&&M[0].isRenderPass===!0;const b=o.width,E=o.height;M.length>0&&a===null&&(a=new He(b,E,{type:an,depthBuffer:!1,stencilBuffer:!1}),l=new He(b,E,{type:an,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<M.length;R++){const y=M[R];y.setSize&&y.setSize(b,E)}},this.begin=function(v,b){if(_||v.toneMapping===ei&&M.length===0)return!1;if(g=b,b!==null){const E=b.width,R=b.height;(o.width!==E||o.height!==R)&&this.setSize(E,R)}return S===!1&&v.setRenderTarget(o),m=v.toneMapping,v.toneMapping=ei,!0},this.hasRenderPass=function(){return S},this.end=function(v,b){v.toneMapping=m,_=!0;let E=o,R=a;for(let y=0;y<M.length;y++){const T=M[y];T.enabled!==!1&&(T.render(v,R,E,b),T.needsSwap!==!1&&(E=R,R=R===a?l:a))}if(f!==v.outputColorSpace||p!==v.toneMapping){f=v.outputColorSpace,p=v.toneMapping,h.defines={},he.getTransfer(f)===_e&&(h.defines.SRGB_TRANSFER="");const y=a1[p];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,v.setRenderTarget(g),v.render(d,u),g=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const zm=new Le,jh=new Tr(1,1),km=new dc,Vm=new pc,Gm=new Go,xd=[],vd=[],yd=new Float32Array(16),Md=new Float32Array(9),Sd=new Float32Array(4);function Fr(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=xd[i];if(r===void 0&&(r=new Float32Array(i),xd[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function We(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Xe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Vc(s,t){let e=vd[t];e===void 0&&(e=new Int32Array(t),vd[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function c1(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function h1(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;s.uniform2fv(this.addr,t),Xe(e,t)}}function u1(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(We(e,t))return;s.uniform3fv(this.addr,t),Xe(e,t)}}function f1(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;s.uniform4fv(this.addr,t),Xe(e,t)}}function d1(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;Sd.set(n),s.uniformMatrix2fv(this.addr,!1,Sd),Xe(e,n)}}function p1(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;Md.set(n),s.uniformMatrix3fv(this.addr,!1,Md),Xe(e,n)}}function m1(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;yd.set(n),s.uniformMatrix4fv(this.addr,!1,yd),Xe(e,n)}}function g1(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function _1(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;s.uniform2iv(this.addr,t),Xe(e,t)}}function x1(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;s.uniform3iv(this.addr,t),Xe(e,t)}}function v1(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;s.uniform4iv(this.addr,t),Xe(e,t)}}function y1(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function M1(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;s.uniform2uiv(this.addr,t),Xe(e,t)}}function S1(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;s.uniform3uiv(this.addr,t),Xe(e,t)}}function b1(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;s.uniform4uiv(this.addr,t),Xe(e,t)}}function w1(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(jh.compareFunction=e.isReversedDepthBuffer()?uc:hc,r=jh):r=zm,e.setTexture2D(t||r,i)}function E1(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Vm,i)}function T1(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Gm,i)}function A1(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||km,i)}function R1(s){switch(s){case 5126:return c1;case 35664:return h1;case 35665:return u1;case 35666:return f1;case 35674:return d1;case 35675:return p1;case 35676:return m1;case 5124:case 35670:return g1;case 35667:case 35671:return _1;case 35668:case 35672:return x1;case 35669:case 35673:return v1;case 5125:return y1;case 36294:return M1;case 36295:return S1;case 36296:return b1;case 35678:case 36198:case 36298:case 36306:case 35682:return w1;case 35679:case 36299:case 36307:return E1;case 35680:case 36300:case 36308:case 36293:return T1;case 36289:case 36303:case 36311:case 36292:return A1}}function C1(s,t){s.uniform1fv(this.addr,t)}function P1(s,t){const e=Fr(t,this.size,2);s.uniform2fv(this.addr,e)}function I1(s,t){const e=Fr(t,this.size,3);s.uniform3fv(this.addr,e)}function L1(s,t){const e=Fr(t,this.size,4);s.uniform4fv(this.addr,e)}function D1(s,t){const e=Fr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function N1(s,t){const e=Fr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function O1(s,t){const e=Fr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function U1(s,t){s.uniform1iv(this.addr,t)}function F1(s,t){s.uniform2iv(this.addr,t)}function B1(s,t){s.uniform3iv(this.addr,t)}function z1(s,t){s.uniform4iv(this.addr,t)}function k1(s,t){s.uniform1uiv(this.addr,t)}function V1(s,t){s.uniform2uiv(this.addr,t)}function G1(s,t){s.uniform3uiv(this.addr,t)}function H1(s,t){s.uniform4uiv(this.addr,t)}function W1(s,t,e){const n=this.cache,i=t.length,r=Vc(e,i);We(n,r)||(s.uniform1iv(this.addr,r),Xe(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=jh:o=zm;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,r[a])}function X1(s,t,e){const n=this.cache,i=t.length,r=Vc(e,i);We(n,r)||(s.uniform1iv(this.addr,r),Xe(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Vm,r[o])}function Y1(s,t,e){const n=this.cache,i=t.length,r=Vc(e,i);We(n,r)||(s.uniform1iv(this.addr,r),Xe(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Gm,r[o])}function q1(s,t,e){const n=this.cache,i=t.length,r=Vc(e,i);We(n,r)||(s.uniform1iv(this.addr,r),Xe(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||km,r[o])}function Z1(s){switch(s){case 5126:return C1;case 35664:return P1;case 35665:return I1;case 35666:return L1;case 35674:return D1;case 35675:return N1;case 35676:return O1;case 5124:case 35670:return U1;case 35667:case 35671:return F1;case 35668:case 35672:return B1;case 35669:case 35673:return z1;case 5125:return k1;case 36294:return V1;case 36295:return G1;case 36296:return H1;case 35678:case 36198:case 36298:case 36306:case 35682:return W1;case 35679:case 36299:case 36307:return X1;case 35680:case 36300:case 36308:case 36293:return Y1;case 36289:case 36303:case 36311:case 36292:return q1}}class K1{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=R1(e.type)}}class $1{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Z1(e.type)}}class J1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const Lh=/(\w+)(\])?(\[|\.)?/g;function bd(s,t){s.seq.push(t),s.map[t.id]=t}function j1(s,t,e){const n=s.name,i=n.length;for(Lh.lastIndex=0;;){const r=Lh.exec(n),o=Lh.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){bd(e,c===void 0?new K1(a,s,t):new $1(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new J1(a),bd(e,d)),e=d}}}class $a{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);j1(a,l,this)}const i=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function wd(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Q1=37297;let tS=0;function eS(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Ed=new re;function nS(s){he._getMatrix(Ed,he.workingColorSpace,s);const t=`mat3( ${Ed.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(s)){case Ao:return[t,"LinearTransferOETF"];case _e:return[t,"sRGBTransferOETF"];default:return Et("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Td(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+eS(s.getShaderSource(t),a)}else return r}function iS(s,t){const e=nS(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const sS={[$l]:"Linear",[Jl]:"Reinhard",[jl]:"Cineon",[zo]:"ACESFilmic",[tc]:"AgX",[ec]:"Neutral",[Ql]:"Custom"};function rS(s,t){const e=sS[t];return e===void 0?(Et("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Va=new C;function oS(){he.getLuminanceCoefficients(Va);const s=Va.x.toFixed(4),t=Va.y.toFixed(4),e=Va.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function aS(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ro).join(`
`)}function lS(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function cS(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function ro(s){return s!==""}function Ad(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Rd(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const hS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qh(s){return s.replace(hS,fS)}const uS=new Map;function fS(s,t){let e=le[t];if(e===void 0){const n=uS.get(t);if(n!==void 0)e=le[n],Et('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Qh(e)}const dS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cd(s){return s.replace(dS,pS)}function pS(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Pd(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const mS={[xr]:"SHADOWMAP_TYPE_PCF",[pr]:"SHADOWMAP_TYPE_VSM"};function gS(s){return mS[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const _S={[pi]:"ENVMAP_TYPE_CUBE",[ji]:"ENVMAP_TYPE_CUBE",[Lr]:"ENVMAP_TYPE_CUBE_UV"};function xS(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":_S[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const vS={[ji]:"ENVMAP_MODE_REFRACTION"};function yS(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":vS[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const MS={[Bo]:"ENVMAP_BLENDING_MULTIPLY",[Mp]:"ENVMAP_BLENDING_MIX",[Sp]:"ENVMAP_BLENDING_ADD"};function SS(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":MS[s.combine]||"ENVMAP_BLENDING_NONE"}function bS(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function wS(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=gS(e),c=xS(e),h=yS(e),d=SS(e),u=bS(e),f=aS(e),p=lS(r),_=i.createProgram();let m,g,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ro).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ro).join(`
`),g.length>0&&(g+=`
`)):(m=[Pd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ro).join(`
`),g=[Pd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ei?"#define TONE_MAPPING":"",e.toneMapping!==ei?le.tonemapping_pars_fragment:"",e.toneMapping!==ei?rS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,iS("linearToOutputTexel",e.outputColorSpace),oS(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ro).join(`
`)),o=Qh(o),o=Ad(o,e),o=Rd(o,e),a=Qh(a),a=Ad(a,e),a=Rd(a,e),o=Cd(o),a=Cd(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===Gh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Gh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const S=M+m+o,v=M+g+a,b=wd(i,i.VERTEX_SHADER,S),E=wd(i,i.FRAGMENT_SHADER,v);i.attachShader(_,b),i.attachShader(_,E),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function R(L){if(s.debug.checkShaderErrors){const N=i.getProgramInfoLog(_)||"",G=i.getShaderInfoLog(b)||"",U=i.getShaderInfoLog(E)||"",z=N.trim(),W=G.trim(),V=U.trim();let nt=!0,B=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(nt=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,b,E);else{const X=Td(i,b,"vertex"),$=Td(i,E,"fragment");Kt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+z+`
`+X+`
`+$)}else z!==""?Et("WebGLProgram: Program Info Log:",z):(W===""||V==="")&&(B=!1);B&&(L.diagnostics={runnable:nt,programLog:z,vertexShader:{log:W,prefix:m},fragmentShader:{log:V,prefix:g}})}i.deleteShader(b),i.deleteShader(E),y=new $a(i,_),T=cS(i,_)}let y;this.getUniforms=function(){return y===void 0&&R(this),y};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=i.getProgramParameter(_,Q1)),I},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=tS++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=E,this}let ES=0;class TS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new AS(t),e.set(t,n)),n}}class AS{constructor(t){this.id=ES++,this.code=t,this.usedTimes=0}}function RS(s){return s===Qi||s===So||s===bo}function CS(s,t,e,n,i,r){const o=new mc,a=new TS,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer;let u=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return l.add(y),y===0?"uv":`uv${y}`}function _(y,T,I,L,N,G){const U=L.fog,z=N.geometry,W=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?L.environment:null,V=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,nt=t.get(y.envMap||W,V),B=nt&&nt.mapping===Lr?nt.image.height:null,X=f[y.type];y.precision!==null&&(u=n.getMaxPrecision(y.precision),u!==y.precision&&Et("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));const $=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,gt=$!==void 0?$.length:0;let mt=0;z.morphAttributes.position!==void 0&&(mt=1),z.morphAttributes.normal!==void 0&&(mt=2),z.morphAttributes.color!==void 0&&(mt=3);let zt,Wt,Dt,J;if(X){const Ee=Zn[X];zt=Ee.vertexShader,Wt=Ee.fragmentShader}else{zt=y.vertexShader,Wt=y.fragmentShader;const Ee=a.getVertexShaderStage(y),xe=a.getFragmentShaderStage(y);a.update(y,Ee,xe),Dt=Ee.id,J=xe.id}const et=s.getRenderTarget(),ut=s.state.buffers.depth.getReversed(),xt=N.isInstancedMesh===!0,st=N.isBatchedMesh===!0,Mt=!!y.map,qt=!!y.matcap,K=!!nt,rt=!!y.aoMap,dt=!!y.lightMap,ht=!!y.bumpMap&&y.wireframe===!1,vt=!!y.normalMap,Nt=!!y.displacementMap,Tt=!!y.emissiveMap,kt=!!y.metalnessMap,$t=!!y.roughnessMap,O=y.anisotropy>0,fe=y.clearcoat>0,se=y.dispersion>0,P=y.retroreflectivity>0,w=y.iridescence>0,D=y.sheen>0,F=y.transmission>0,Z=O&&!!y.anisotropyMap,ot=fe&&!!y.clearcoatMap,_t=fe&&!!y.clearcoatNormalMap,tt=fe&&!!y.clearcoatRoughnessMap,lt=w&&!!y.iridescenceMap,St=w&&!!y.iridescenceThicknessMap,Vt=D&&!!y.sheenColorMap,bt=D&&!!y.sheenRoughnessMap,wt=!!y.specularMap,Xt=!!y.specularColorMap,ee=!!y.specularIntensityMap,oe=F&&!!y.transmissionMap,H=F&&!!y.thicknessMap,At=!!y.gradientMap,at=!!y.alphaMap,Rt=y.alphaTest>0,Lt=!!y.alphaHash,ft=!!y.extensions;let Jt=ei;y.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Jt=s.toneMapping);const Yt={shaderID:X,shaderType:y.type,shaderName:y.name,vertexShader:zt,fragmentShader:Wt,defines:y.defines,customVertexShaderID:Dt,customFragmentShaderID:J,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:st,batchingColor:st&&N._colorsTexture!==null,instancing:xt,instancingColor:xt&&N.instanceColor!==null,instancingMorph:xt&&N.morphTexture!==null,outputColorSpace:et===null?s.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:he.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Mt,matcap:qt,envMap:K,envMapMode:K&&nt.mapping,envMapCubeUVHeight:B,aoMap:rt,lightMap:dt,bumpMap:ht,normalMap:vt,displacementMap:Nt,emissiveMap:Tt,normalMapObjectSpace:vt&&y.normalMapType===Rp,normalMapTangentSpace:vt&&y.normalMapType===Di,packedNormalMap:vt&&y.normalMapType===Di&&RS(y.normalMap.format),metalnessMap:kt,roughnessMap:$t,anisotropy:O,anisotropyMap:Z,clearcoat:fe,clearcoatMap:ot,clearcoatNormalMap:_t,clearcoatRoughnessMap:tt,dispersion:se,retroreflection:P,iridescence:w,iridescenceMap:lt,iridescenceThicknessMap:St,sheen:D,sheenColorMap:Vt,sheenRoughnessMap:bt,specularMap:wt,specularColorMap:Xt,specularIntensityMap:ee,transmission:F,transmissionMap:oe,thicknessMap:H,gradientMap:At,opaque:y.transparent===!1&&y.blending===vr&&y.alphaToCoverage===!1,alphaMap:at,alphaTest:Rt,alphaHash:Lt,combine:y.combine,mapUv:Mt&&p(y.map.channel),aoMapUv:rt&&p(y.aoMap.channel),lightMapUv:dt&&p(y.lightMap.channel),bumpMapUv:ht&&p(y.bumpMap.channel),normalMapUv:vt&&p(y.normalMap.channel),displacementMapUv:Nt&&p(y.displacementMap.channel),emissiveMapUv:Tt&&p(y.emissiveMap.channel),metalnessMapUv:kt&&p(y.metalnessMap.channel),roughnessMapUv:$t&&p(y.roughnessMap.channel),anisotropyMapUv:Z&&p(y.anisotropyMap.channel),clearcoatMapUv:ot&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:_t&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:lt&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:St&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:bt&&p(y.sheenRoughnessMap.channel),specularMapUv:wt&&p(y.specularMap.channel),specularColorMapUv:Xt&&p(y.specularColorMap.channel),specularIntensityMapUv:ee&&p(y.specularIntensityMap.channel),transmissionMapUv:oe&&p(y.transmissionMap.channel),thicknessMapUv:H&&p(y.thicknessMap.channel),alphaMapUv:at&&p(y.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(vt||O),vertexNormals:!!z.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!z.attributes.uv&&(Mt||at),fog:!!U,useFog:y.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||z.attributes.normal===void 0&&vt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ut,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:mt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:Jt,decodeVideoTexture:Mt&&y.map.isVideoTexture===!0&&he.getTransfer(y.map.colorSpace)===_e,decodeVideoTextureEmissive:Tt&&y.emissiveMap.isVideoTexture===!0&&he.getTransfer(y.emissiveMap.colorSpace)===_e,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===$n,flipSided:y.side===on,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ft&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ft&&y.extensions.multiDraw===!0||st)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Yt.vertexUv1s=l.has(1),Yt.vertexUv2s=l.has(2),Yt.vertexUv3s=l.has(3),l.clear(),Yt}function m(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const I in y.defines)T.push(I),T.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(g(T,y),M(T,y),T.push(s.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function g(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numSunLights),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numSunLightShadows),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function M(y,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function S(y){const T=f[y.type];let I;if(T){const L=Zn[T];I=Ns.clone(L.uniforms)}else I=y.uniforms;return I}function v(y,T){let I=h.get(T);return I!==void 0?++I.usedTimes:(I=new wS(s,T,y,i),c.push(I),h.set(T,I)),I}function b(y){if(--y.usedTimes===0){const T=c.indexOf(y);c[T]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function E(y){a.remove(y)}function R(){a.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:S,acquireProgram:v,releaseProgram:b,releaseShaderCache:E,programs:c,dispose:R}}function PS(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function IS(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Id(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ld(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,p,_,m,g){let M=s[t];return M===void 0?(M={id:u.id,object:u,geometry:f,material:p,materialVariant:o(u),groupOrder:_,renderOrder:u.renderOrder,z:m,group:g},s[t]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=p,M.materialVariant=o(u),M.groupOrder=_,M.renderOrder=u.renderOrder,M.z=m,M.group=g),t++,M}function l(u,f,p,_,m,g,M){M.reversedDepth===!0&&(m=-m);const S=a(u,f,p,_,m,g);p.transmission>0?n.push(S):p.transparent===!0?i.push(S):e.push(S)}function c(u,f,p,_,m,g){const M=a(u,f,p,_,m,g);p.transmission>0?n.unshift(M):p.transparent===!0?i.unshift(M):e.unshift(M)}function h(u,f){e.length>1&&e.sort(u||IS),n.length>1&&n.sort(f||Id),i.length>1&&i.sort(f||Id)}function d(){for(let u=t,f=s.length;u<f;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:d,sort:h}}function LS(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new Ld,s.set(n,[o])):i>=r.length?(o=new Ld,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function DS(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new C,color:new pt};break;case"SpotLight":e={position:new C,direction:new C,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":e={color:new pt,position:new C,halfWidth:new C,halfHeight:new C};break}return s[t.id]=e,e}}}function NS(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let OS=0;function US(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function FS(s){const t=new DS,e=NS(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);const i=new C,r=new ie,o=new ie;function a(c){let h=0,d=0,u=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let f=0,p=0,_=0,m=0,g=0,M=0,S=0,v=0,b=0,E=0,R=0,y=0,T=0,I=0;c.sort(US);for(let N=0,G=c.length;N<G;N++){const U=c[N],z=U.color,W=U.intensity,V=U.distance;let nt=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Qi?nt=U.shadow.map.texture:nt=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)h+=z.r*W,d+=z.g*W,u+=z.b*W;else if(U.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(U.sh.coefficients[B],W);I++}else if(U.isSunLight){const B=t.get(U);if(B.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const X=U.shadow,$=e.get(U);$.shadowIntensity=X.intensity,$.shadowBias=X.bias,$.shadowNormalBias=X.normalBias,$.shadowRadius=X.radius,$.shadowMapSize.copy(X.mapSize).multiply(X.getFrameExtents()),n.sunShadow[p]=$,n.sunShadowMap[p]=nt;const gt=X.getViewportCount();for(let mt=0;mt<gt;mt++)n.sunShadowMatrix[_+mt]=X.getMatrix(mt),n.sunShadowCascade[_+mt]=X._cascadeData[mt];_+=gt,p++}n.sun[f]=B,f++}else if(U.isDirectionalLight){const B=t.get(U);if(B.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const X=U.shadow,$=e.get(U);$.shadowIntensity=X.intensity,$.shadowBias=X.bias,$.shadowNormalBias=X.normalBias,$.shadowRadius=X.radius,$.shadowMapSize=X.mapSize,n.directionalShadow[m]=$,n.directionalShadowMap[m]=nt,n.directionalShadowMatrix[m]=U.shadow.matrix,b++}n.directional[m]=B,m++}else if(U.isSpotLight){const B=t.get(U);B.position.setFromMatrixPosition(U.matrixWorld),B.color.copy(z).multiplyScalar(W),B.distance=V,B.coneCos=Math.cos(U.angle),B.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),B.decay=U.decay,n.spot[M]=B;const X=U.shadow;if(U.map&&(n.spotLightMap[y]=U.map,y++,X.updateMatrices(U),U.castShadow&&T++),n.spotLightMatrix[M]=X.matrix,U.castShadow){const $=e.get(U);$.shadowIntensity=X.intensity,$.shadowBias=X.bias,$.shadowNormalBias=X.normalBias,$.shadowRadius=X.radius,$.shadowMapSize=X.mapSize,n.spotShadow[M]=$,n.spotShadowMap[M]=nt,R++}M++}else if(U.isRectAreaLight){const B=t.get(U);B.color.copy(z).multiplyScalar(W),B.halfWidth.set(U.width*.5,0,0),B.halfHeight.set(0,U.height*.5,0),n.rectArea[S]=B,S++}else if(U.isPointLight){const B=t.get(U);if(B.color.copy(U.color).multiplyScalar(U.intensity),B.distance=U.distance,B.decay=U.decay,U.castShadow){const X=U.shadow,$=e.get(U);$.shadowIntensity=X.intensity,$.shadowBias=X.bias,$.shadowNormalBias=X.normalBias,$.shadowRadius=X.radius,$.shadowMapSize=X.mapSize,$.shadowCameraNear=X.camera.near,$.shadowCameraFar=X.camera.far,n.pointShadow[g]=$,n.pointShadowMap[g]=nt,n.pointShadowMatrix[g]=U.shadow.matrix,E++}n.point[g]=B,g++}else if(U.isHemisphereLight){const B=t.get(U);B.skyColor.copy(U.color).multiplyScalar(W),B.groundColor.copy(U.groundColor).multiplyScalar(W),n.hemi[v]=B,v++}}S>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ct.LTC_FLOAT_1,n.rectAreaLTC2=Ct.LTC_FLOAT_2):(n.rectAreaLTC1=Ct.LTC_HALF_1,n.rectAreaLTC2=Ct.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const L=n.hash;(L.sunLength!==f||L.directionalLength!==m||L.pointLength!==g||L.spotLength!==M||L.rectAreaLength!==S||L.hemiLength!==v||L.numSunShadows!==p||L.numDirectionalShadows!==b||L.numPointShadows!==E||L.numSpotShadows!==R||L.numSpotMaps!==y||L.numLightProbes!==I)&&(n.sun.length=f,n.directional.length=m,n.spot.length=M,n.rectArea.length=S,n.point.length=g,n.hemi.length=v,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+y-T,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=I,L.sunLength=f,L.directionalLength=m,L.pointLength=g,L.spotLength=M,L.rectAreaLength=S,L.hemiLength=v,L.numSunShadows=p,L.numDirectionalShadows=b,L.numPointShadows=E,L.numSpotShadows=R,L.numSpotMaps=y,L.numLightProbes=I,n.version=OS++)}function l(c,h){let d=0,u=0,f=0,p=0,_=0,m=0;const g=h.matrixWorldInverse;for(let M=0,S=c.length;M<S;M++){const v=c[M];if(v.isSunLight){const b=n.sun[d];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(g),d++}else if(v.isDirectionalLight){const b=n.directional[u];b.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(g),u++}else if(v.isSpotLight){const b=n.spot[p];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(g),p++}else if(v.isRectAreaLight){const b=n.rectArea[_];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),o.identity(),r.copy(v.matrixWorld),r.premultiply(g),o.extractRotation(r),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){const b=n.point[f];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){const b=n.hemi[m];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function Dd(s){const t=new FS(s),e=[],n=[],i=[];function r(u){d.camera=u,e.length=0,n.length=0,i.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function l(u){i.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}const d={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function BS(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new Dd(s),t.set(i,[a])):r>=o.length?(a=new Dd(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const zS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kS=`uniform sampler2D shadow_pass;
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
}`,VS=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],GS=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],Nd=new ie,Qr=new C,Dh=new C;function HS(s,t,e){let n=new Ls;const i=new it,r=new it,o=new Me,a=new Ru,l=new Cu,c={},h=e.maxTextureSize,d={[Ji]:on,[on]:Ji,[$n]:$n},u=new Ce({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:zS,fragmentShader:kS}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const p=new te;p.setAttribute("position",new be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Pe(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xr;let g=this.type;this.render=function(E,R,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===np&&(Et("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=xr);const T=s.getRenderTarget(),I=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),N=s.state;N.setBlending(ti),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const G=g!==this.type;G&&R.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(z=>z.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,z=E.length;U<z;U++){const W=E[U],V=W.shadow;if(V===void 0){Et("WebGLShadowMap:",W,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const nt=V.getFrameExtents();i.multiply(nt),r.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/nt.x),i.x=r.x*nt.x,V.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/nt.y),i.y=r.y*nt.y,V.mapSize.y=r.y));const B=s.state.buffers.depth.getReversed();if(V.camera._reversedDepth=B,V.map===null||G===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===pr){if(W.isPointLight){Et("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new He(i.x,i.y,{format:Qi,type:an,minFilter:Re,magFilter:Re,generateMipmaps:!1}),V.map.texture.name=W.name+".shadowMap",V.map.depthTexture=new Tr(i.x,i.y,mn),V.map.depthTexture.name=W.name+".shadowMapDepth",V.map.depthTexture.format=mi,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Fe,V.map.depthTexture.magFilter=Fe}else W.isPointLight?(V.map=new Gu(i.x),V.map.depthTexture=new Zp(i.x,kn)):(V.map=new He(i.x,i.y),V.map.depthTexture=new Tr(i.x,i.y,kn)),V.map.depthTexture.name=W.name+".shadowMap",V.map.depthTexture.format=mi,this.type===xr?(V.map.depthTexture.compareFunction=B?uc:hc,V.map.depthTexture.minFilter=Re,V.map.depthTexture.magFilter=Re):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Fe,V.map.depthTexture.magFilter=Fe);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==i.x||V.map.height!==i.y)&&V.map.setSize(i.x,i.y);const X=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();W.isPointLight!==!0&&V.updateMatrices(W,y);for(let $=0;$<X;$++){const gt=V.getCamera($);if(W.isPointLight){const mt=V.camera,zt=V.matrix,Wt=W.distance||mt.far;Wt!==mt.far&&(mt.far=Wt,mt.updateProjectionMatrix()),Qr.setFromMatrixPosition(W.matrixWorld),mt.position.copy(Qr),Dh.copy(mt.position),Dh.add(VS[$]),mt.up.copy(GS[$]),mt.lookAt(Dh),mt.updateMatrixWorld(),zt.makeTranslation(-Qr.x,-Qr.y,-Qr.z),Nd.multiplyMatrices(mt.projectionMatrix,mt.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Nd,mt.coordinateSystem,mt.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)s.setRenderTarget(V.map,$),s.clear();else{$===0&&(s.setRenderTarget(V.map),s.clear());const mt=V.getViewport($);o.set(r.x*mt.x,r.y*mt.y,r.x*mt.z,r.y*mt.w),N.viewport(o)}n=V.getFrustum($),v(R,y,gt,W,this.type)}V.isPointLightShadow!==!0&&this.type===pr&&M(V,y),V.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(T,I,L)};function M(E,R){const y=t.update(_);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new He(i.x,i.y,{format:Qi,type:an}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(R,null,y,u,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(R,null,y,f,_,null)}function S(E,R,y,T){let I=null;const L=y.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)I=L;else if(I=y.isPointLight===!0?l:a,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const N=I.uuid,G=R.uuid;let U=c[N];U===void 0&&(U={},c[N]=U);let z=U[G];z===void 0&&(z=I.clone(),U[G]=z,R.addEventListener("dispose",b)),I=z}if(I.visible=R.visible,I.wireframe=R.wireframe,T===pr?I.side=R.shadowSide!==null?R.shadowSide:R.side:I.side=R.shadowSide!==null?R.shadowSide:d[R.side],I.alphaMap=R.alphaMap,I.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,I.map=R.map,I.clipShadows=R.clipShadows,I.clippingPlanes=R.clippingPlanes,I.clipIntersection=R.clipIntersection,I.displacementMap=R.displacementMap,I.displacementScale=R.displacementScale,I.displacementBias=R.displacementBias,I.wireframeLinewidth=R.wireframeLinewidth,I.linewidth=R.linewidth,y.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const N=s.properties.get(I);N.light=y}return I}function v(E,R,y,T,I){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&I===pr)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,E.matrixWorld);const G=t.update(E),U=E.material;if(Array.isArray(U)){const z=G.groups;for(let W=0,V=z.length;W<V;W++){const nt=z[W],B=U[nt.materialIndex];if(B&&B.visible){const X=S(E,B,T,I);E.onBeforeShadow(s,E,R,y,G,X,nt),s.renderBufferDirect(y,null,G,X,E,nt),E.onAfterShadow(s,E,R,y,G,X,nt)}}}else if(U.visible){const z=S(E,U,T,I);E.onBeforeShadow(s,E,R,y,G,z,null),s.renderBufferDirect(y,null,G,z,E,null),E.onAfterShadow(s,E,R,y,G,z,null)}}const N=E.children;for(let G=0,U=N.length;G<U;G++)v(N[G],R,y,T,I)}function b(E){E.target.removeEventListener("dispose",b);for(const y in c){const T=c[y],I=E.target.uuid;I in T&&(T[I].dispose(),delete T[I])}}}function WS(s,t){function e(){let H=!1;const At=new Me;let at=null;const Rt=new Me(0,0,0,0);return{setMask:function(Lt){at!==Lt&&!H&&(s.colorMask(Lt,Lt,Lt,Lt),at=Lt)},setLocked:function(Lt){H=Lt},setClear:function(Lt,ft,Jt,Yt,Ee){Ee===!0&&(Lt*=Yt,ft*=Yt,Jt*=Yt),At.set(Lt,ft,Jt,Yt),Rt.equals(At)===!1&&(s.clearColor(Lt,ft,Jt,Yt),Rt.copy(At))},reset:function(){H=!1,at=null,Rt.set(-1,0,0,0)}}}function n(){let H=!1,At=!1,at=null,Rt=null,Lt=null;return{setReversed:function(ft){if(At!==ft){const Jt=t.get("EXT_clip_control");ft?Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.ZERO_TO_ONE_EXT):Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.NEGATIVE_ONE_TO_ONE_EXT),At=ft;const Yt=Lt;Lt=null,this.setClear(Yt)}},getReversed:function(){return At},setTest:function(ft){ft?et(s.DEPTH_TEST):ut(s.DEPTH_TEST)},setMask:function(ft){at!==ft&&!H&&(s.depthMask(ft),at=ft)},setFunc:function(ft){if(At&&(ft=sg[ft]),Rt!==ft){switch(ft){case nl:s.depthFunc(s.NEVER);break;case il:s.depthFunc(s.ALWAYS);break;case sl:s.depthFunc(s.LESS);break;case Mr:s.depthFunc(s.LEQUAL);break;case rl:s.depthFunc(s.EQUAL);break;case ol:s.depthFunc(s.GEQUAL);break;case al:s.depthFunc(s.GREATER);break;case ll:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Rt=ft}},setLocked:function(ft){H=ft},setClear:function(ft){Lt!==ft&&(Lt=ft,At&&(ft=1-ft),s.clearDepth(ft))},reset:function(){H=!1,at=null,Rt=null,Lt=null,At=!1}}}function i(){let H=!1,At=null,at=null,Rt=null,Lt=null,ft=null,Jt=null,Yt=null,Ee=null;return{setTest:function(xe){H||(xe?et(s.STENCIL_TEST):ut(s.STENCIL_TEST))},setMask:function(xe){At!==xe&&!H&&(s.stencilMask(xe),At=xe)},setFunc:function(xe,Gn,oi){(at!==xe||Rt!==Gn||Lt!==oi)&&(s.stencilFunc(xe,Gn,oi),at=xe,Rt=Gn,Lt=oi)},setOp:function(xe,Gn,oi){(ft!==xe||Jt!==Gn||Yt!==oi)&&(s.stencilOp(xe,Gn,oi),ft=xe,Jt=Gn,Yt=oi)},setLocked:function(xe){H=xe},setClear:function(xe){Ee!==xe&&(s.clearStencil(xe),Ee=xe)},reset:function(){H=!1,At=null,at=null,Rt=null,Lt=null,ft=null,Jt=null,Yt=null,Ee=null}}}const r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},d={},u={},f=new WeakMap,p=[],_=null,m=!1,g=null,M=null,S=null,v=null,b=null,E=null,R=null,y=new pt(0,0,0),T=0,I=!1,L=null,N=null,G=null,U=null,z=null;const W=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,nt=0;const B=s.getParameter(s.VERSION);B.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(B)[1]),V=nt>=1):B.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),V=nt>=2);let X=null,$={};const gt=s.getParameter(s.SCISSOR_BOX),mt=s.getParameter(s.VIEWPORT),zt=new Me().fromArray(gt),Wt=new Me().fromArray(mt);function Dt(H,At,at,Rt){const Lt=new Uint8Array(4),ft=s.createTexture();s.bindTexture(H,ft),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Jt=0;Jt<at;Jt++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(At,0,s.RGBA,1,1,Rt,0,s.RGBA,s.UNSIGNED_BYTE,Lt):s.texImage2D(At+Jt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Lt);return ft}const J={};J[s.TEXTURE_2D]=Dt(s.TEXTURE_2D,s.TEXTURE_2D,1),J[s.TEXTURE_CUBE_MAP]=Dt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[s.TEXTURE_2D_ARRAY]=Dt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),J[s.TEXTURE_3D]=Dt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),et(s.DEPTH_TEST),o.setFunc(Mr),ht(!1),vt(Fh),et(s.CULL_FACE),rt(ti);function et(H){h[H]!==!0&&(s.enable(H),h[H]=!0)}function ut(H){h[H]!==!1&&(s.disable(H),h[H]=!1)}function xt(H,At){return u[H]!==At?(s.bindFramebuffer(H,At),u[H]=At,H===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=At),H===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=At),!0):!1}function st(H,At){let at=p,Rt=!1;if(H){at=f.get(At),at===void 0&&(at=[],f.set(At,at));const Lt=H.textures;if(at.length!==Lt.length||at[0]!==s.COLOR_ATTACHMENT0){for(let ft=0,Jt=Lt.length;ft<Jt;ft++)at[ft]=s.COLOR_ATTACHMENT0+ft;at.length=Lt.length,Rt=!0}}else at[0]!==s.BACK&&(at[0]=s.BACK,Rt=!0);Rt&&s.drawBuffers(at)}function Mt(H){return _!==H?(s.useProgram(H),_=H,!0):!1}const qt={[Ss]:s.FUNC_ADD,[sp]:s.FUNC_SUBTRACT,[rp]:s.FUNC_REVERSE_SUBTRACT};qt[op]=s.MIN,qt[ap]=s.MAX;const K={[lp]:s.ZERO,[cp]:s.ONE,[hp]:s.SRC_COLOR,[iu]:s.SRC_ALPHA,[gp]:s.SRC_ALPHA_SATURATE,[pp]:s.DST_COLOR,[fp]:s.DST_ALPHA,[up]:s.ONE_MINUS_SRC_COLOR,[su]:s.ONE_MINUS_SRC_ALPHA,[mp]:s.ONE_MINUS_DST_COLOR,[dp]:s.ONE_MINUS_DST_ALPHA,[_p]:s.CONSTANT_COLOR,[xp]:s.ONE_MINUS_CONSTANT_COLOR,[vp]:s.CONSTANT_ALPHA,[yp]:s.ONE_MINUS_CONSTANT_ALPHA};function rt(H,At,at,Rt,Lt,ft,Jt,Yt,Ee,xe){if(H===ti){m===!0&&(ut(s.BLEND),m=!1);return}if(m===!1&&(et(s.BLEND),m=!0),H!==ip){if(H!==g||xe!==I){if((M!==Ss||b!==Ss)&&(s.blendEquation(s.FUNC_ADD),M=Ss,b=Ss),xe)switch(H){case vr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Cs:s.blendFunc(s.ONE,s.ONE);break;case Bh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case zh:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Kt("WebGLState: Invalid blending: ",H);break}else switch(H){case vr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Cs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Bh:Kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zh:Kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Kt("WebGLState: Invalid blending: ",H);break}S=null,v=null,E=null,R=null,y.set(0,0,0),T=0,g=H,I=xe}return}Lt=Lt||At,ft=ft||at,Jt=Jt||Rt,(At!==M||Lt!==b)&&(s.blendEquationSeparate(qt[At],qt[Lt]),M=At,b=Lt),(at!==S||Rt!==v||ft!==E||Jt!==R)&&(s.blendFuncSeparate(K[at],K[Rt],K[ft],K[Jt]),S=at,v=Rt,E=ft,R=Jt),(Yt.equals(y)===!1||Ee!==T)&&(s.blendColor(Yt.r,Yt.g,Yt.b,Ee),y.copy(Yt),T=Ee),g=H,I=!1}function dt(H,At){H.side===$n?ut(s.CULL_FACE):et(s.CULL_FACE);let at=H.side===on;At&&(at=!at),ht(at),H.blending===vr&&H.transparent===!1?rt(ti):rt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);const Rt=H.stencilWrite;a.setTest(Rt),Rt&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Tt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?et(s.SAMPLE_ALPHA_TO_COVERAGE):ut(s.SAMPLE_ALPHA_TO_COVERAGE)}function ht(H){L!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),L=H)}function vt(H){H!==tp?(et(s.CULL_FACE),H!==N&&(H===Fh?s.cullFace(s.BACK):H===ep?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ut(s.CULL_FACE),N=H}function Nt(H){H!==G&&(V&&s.lineWidth(H),G=H)}function Tt(H,At,at){H?(et(s.POLYGON_OFFSET_FILL),(U!==At||z!==at)&&(U=At,z=at,o.getReversed()&&(At=-At),s.polygonOffset(At,at))):ut(s.POLYGON_OFFSET_FILL)}function kt(H){H?et(s.SCISSOR_TEST):ut(s.SCISSOR_TEST)}function $t(H){H===void 0&&(H=s.TEXTURE0+W-1),X!==H&&(s.activeTexture(H),X=H)}function O(H,At,at){at===void 0&&(X===null?at=s.TEXTURE0+W-1:at=X);let Rt=$[at];Rt===void 0&&(Rt={type:void 0,texture:void 0},$[at]=Rt),(Rt.type!==H||Rt.texture!==At)&&(X!==at&&(s.activeTexture(at),X=at),s.bindTexture(H,At||J[H]),Rt.type=H,Rt.texture=At)}function fe(){const H=$[X];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function se(){try{s.compressedTexImage2D(...arguments)}catch(H){Kt("WebGLState:",H)}}function P(){try{s.compressedTexImage3D(...arguments)}catch(H){Kt("WebGLState:",H)}}function w(){try{s.texSubImage2D(...arguments)}catch(H){Kt("WebGLState:",H)}}function D(){try{s.texSubImage3D(...arguments)}catch(H){Kt("WebGLState:",H)}}function F(){try{s.compressedTexSubImage2D(...arguments)}catch(H){Kt("WebGLState:",H)}}function Z(){try{s.compressedTexSubImage3D(...arguments)}catch(H){Kt("WebGLState:",H)}}function ot(){try{s.texStorage2D(...arguments)}catch(H){Kt("WebGLState:",H)}}function _t(){try{s.texStorage3D(...arguments)}catch(H){Kt("WebGLState:",H)}}function tt(){try{s.texImage2D(...arguments)}catch(H){Kt("WebGLState:",H)}}function lt(){try{s.texImage3D(...arguments)}catch(H){Kt("WebGLState:",H)}}function St(H){return d[H]!==void 0?d[H]:s.getParameter(H)}function Vt(H,At){d[H]!==At&&(s.pixelStorei(H,At),d[H]=At)}function bt(H){zt.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),zt.copy(H))}function wt(H){Wt.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),Wt.copy(H))}function Xt(H,At){let at=c.get(At);at===void 0&&(at=new WeakMap,c.set(At,at));let Rt=at.get(H);Rt===void 0&&(Rt=s.getUniformBlockIndex(At,H.name),at.set(H,Rt))}function ee(H,At){const Rt=c.get(At).get(H);l.get(At)!==Rt&&(s.uniformBlockBinding(At,Rt,H.__bindingPointIndex),l.set(At,Rt))}function oe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},X=null,$={},u={},f=new WeakMap,p=[],_=null,m=!1,g=null,M=null,S=null,v=null,b=null,E=null,R=null,y=new pt(0,0,0),T=0,I=!1,L=null,N=null,G=null,U=null,z=null,zt.set(0,0,s.canvas.width,s.canvas.height),Wt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:et,disable:ut,bindFramebuffer:xt,drawBuffers:st,useProgram:Mt,setBlending:rt,setMaterial:dt,setFlipSided:ht,setCullFace:vt,setLineWidth:Nt,setPolygonOffset:Tt,setScissorTest:kt,activeTexture:$t,bindTexture:O,unbindTexture:fe,compressedTexImage2D:se,compressedTexImage3D:P,texImage2D:tt,texImage3D:lt,pixelStorei:Vt,getParameter:St,updateUBOMapping:Xt,uniformBlockBinding:ee,texStorage2D:ot,texStorage3D:_t,texSubImage2D:w,texSubImage3D:D,compressedTexSubImage2D:F,compressedTexSubImage3D:Z,scissor:bt,viewport:wt,reset:oe}}function XS(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,h=new WeakMap,d=new Set;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,w){return p?new OffscreenCanvas(P,w):Ro("canvas")}function m(P,w,D){let F=1;const Z=se(P);if((Z.width>D||Z.height>D)&&(F=D/Math.max(Z.width,Z.height)),F<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ot=Math.floor(F*Z.width),_t=Math.floor(F*Z.height);u===void 0&&(u=_(ot,_t));const tt=w?_(ot,_t):u;return tt.width=ot,tt.height=_t,tt.getContext("2d").drawImage(P,0,0,ot,_t),Et("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+ot+"x"+_t+")."),tt}else return"data"in P&&Et("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),P;return P}function g(P){return P.generateMipmaps}function M(P){s.generateMipmap(P)}function S(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function v(P,w,D,F,Z,ot=!1){if(P!==null){if(s[P]!==void 0)return s[P];Et("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let _t;F&&(_t=t.get("EXT_texture_norm16"),_t||Et("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let tt=w;if(w===s.RED&&(D===s.FLOAT&&(tt=s.R32F),D===s.HALF_FLOAT&&(tt=s.R16F),D===s.UNSIGNED_BYTE&&(tt=s.R8),D===s.UNSIGNED_SHORT&&_t&&(tt=_t.R16_EXT),D===s.SHORT&&_t&&(tt=_t.R16_SNORM_EXT)),w===s.RED_INTEGER&&(D===s.UNSIGNED_BYTE&&(tt=s.R8UI),D===s.UNSIGNED_SHORT&&(tt=s.R16UI),D===s.UNSIGNED_INT&&(tt=s.R32UI),D===s.BYTE&&(tt=s.R8I),D===s.SHORT&&(tt=s.R16I),D===s.INT&&(tt=s.R32I)),w===s.RG&&(D===s.FLOAT&&(tt=s.RG32F),D===s.HALF_FLOAT&&(tt=s.RG16F),D===s.UNSIGNED_BYTE&&(tt=s.RG8),D===s.UNSIGNED_SHORT&&_t&&(tt=_t.RG16_EXT),D===s.SHORT&&_t&&(tt=_t.RG16_SNORM_EXT)),w===s.RG_INTEGER&&(D===s.UNSIGNED_BYTE&&(tt=s.RG8UI),D===s.UNSIGNED_SHORT&&(tt=s.RG16UI),D===s.UNSIGNED_INT&&(tt=s.RG32UI),D===s.BYTE&&(tt=s.RG8I),D===s.SHORT&&(tt=s.RG16I),D===s.INT&&(tt=s.RG32I)),w===s.RGB_INTEGER&&(D===s.UNSIGNED_BYTE&&(tt=s.RGB8UI),D===s.UNSIGNED_SHORT&&(tt=s.RGB16UI),D===s.UNSIGNED_INT&&(tt=s.RGB32UI),D===s.BYTE&&(tt=s.RGB8I),D===s.SHORT&&(tt=s.RGB16I),D===s.INT&&(tt=s.RGB32I)),w===s.RGBA_INTEGER&&(D===s.UNSIGNED_BYTE&&(tt=s.RGBA8UI),D===s.UNSIGNED_SHORT&&(tt=s.RGBA16UI),D===s.UNSIGNED_INT&&(tt=s.RGBA32UI),D===s.BYTE&&(tt=s.RGBA8I),D===s.SHORT&&(tt=s.RGBA16I),D===s.INT&&(tt=s.RGBA32I)),w===s.RGB&&(D===s.UNSIGNED_SHORT&&_t&&(tt=_t.RGB16_EXT),D===s.SHORT&&_t&&(tt=_t.RGB16_SNORM_EXT),D===s.UNSIGNED_INT_5_9_9_9_REV&&(tt=s.RGB9_E5),D===s.UNSIGNED_INT_10F_11F_11F_REV&&(tt=s.R11F_G11F_B10F)),w===s.RGBA){const lt=ot?Ao:he.getTransfer(Z);D===s.FLOAT&&(tt=s.RGBA32F),D===s.HALF_FLOAT&&(tt=s.RGBA16F),D===s.UNSIGNED_BYTE&&(tt=lt===_e?s.SRGB8_ALPHA8:s.RGBA8),D===s.UNSIGNED_SHORT&&_t&&(tt=_t.RGBA16_EXT),D===s.SHORT&&_t&&(tt=_t.RGBA16_SNORM_EXT),D===s.UNSIGNED_SHORT_4_4_4_4&&(tt=s.RGBA4),D===s.UNSIGNED_SHORT_5_5_5_1&&(tt=s.RGB5_A1)}return(tt===s.R16F||tt===s.R32F||tt===s.RG16F||tt===s.RG32F||tt===s.RGBA16F||tt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function b(P,w){let D;return P?w===null||w===kn||w===br?D=s.DEPTH24_STENCIL8:w===mn?D=s.DEPTH32F_STENCIL8:w===Sr&&(D=s.DEPTH24_STENCIL8,Et("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===kn||w===br?D=s.DEPTH_COMPONENT24:w===mn?D=s.DEPTH_COMPONENT32F:w===Sr&&(D=s.DEPTH_COMPONENT16),D}function E(P,w){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==Fe&&P.minFilter!==Re?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function R(P){const w=P.target;w.removeEventListener("dispose",R),T(w),w.isVideoTexture&&h.delete(w),w.isHTMLTexture&&d.delete(w)}function y(P){const w=P.target;w.removeEventListener("dispose",y),L(w)}function T(P){const w=n.get(P);if(w.__webglInit===void 0)return;const D=P.source,F=f.get(D);if(F){const Z=F[w.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&I(P),Object.keys(F).length===0&&f.delete(D)}n.remove(P)}function I(P){const w=n.get(P);s.deleteTexture(w.__webglTexture);const D=P.source,F=f.get(D);delete F[w.__cacheKey],o.memory.textures--}function L(P){const w=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(w.__webglFramebuffer[F]))for(let Z=0;Z<w.__webglFramebuffer[F].length;Z++)s.deleteFramebuffer(w.__webglFramebuffer[F][Z]);else s.deleteFramebuffer(w.__webglFramebuffer[F]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[F])}else{if(Array.isArray(w.__webglFramebuffer))for(let F=0;F<w.__webglFramebuffer.length;F++)s.deleteFramebuffer(w.__webglFramebuffer[F]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let F=0;F<w.__webglColorRenderbuffer.length;F++)w.__webglColorRenderbuffer[F]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[F]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const D=P.textures;for(let F=0,Z=D.length;F<Z;F++){const ot=n.get(D[F]);ot.__webglTexture&&(s.deleteTexture(ot.__webglTexture),o.memory.textures--),n.remove(D[F])}n.remove(P)}let N=0;function G(){N=0}function U(){return N}function z(P){N=P}function W(){const P=N;return P>=i.maxTextures&&Et("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+i.maxTextures),N+=1,P}function V(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function nt(P,w){const D=n.get(P);if(P.isVideoTexture&&O(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&D.__version!==P.version){const F=P.image;if(F===null)Et("WebGLRenderer: Texture marked for update but no image data found.");else if(F.complete===!1)Et("WebGLRenderer: Texture marked for update but image is incomplete");else{ut(D,P,w);return}}else P.isExternalTexture&&(D.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,D.__webglTexture,s.TEXTURE0+w)}function B(P,w){const D=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&D.__version!==P.version){ut(D,P,w);return}else P.isExternalTexture&&(D.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,D.__webglTexture,s.TEXTURE0+w)}function X(P,w){const D=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&D.__version!==P.version){ut(D,P,w);return}e.bindTexture(s.TEXTURE_3D,D.__webglTexture,s.TEXTURE0+w)}function $(P,w){const D=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&D.__version!==P.version){xt(D,P,w);return}e.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+w)}const gt={[yo]:s.REPEAT,[En]:s.CLAMP_TO_EDGE,[Mo]:s.MIRRORED_REPEAT},mt={[Fe]:s.NEAREST,[ru]:s.NEAREST_MIPMAP_NEAREST,[mr]:s.NEAREST_MIPMAP_LINEAR,[Re]:s.LINEAR,[co]:s.LINEAR_MIPMAP_NEAREST,[fi]:s.LINEAR_MIPMAP_LINEAR},zt={[Pp]:s.NEVER,[Op]:s.ALWAYS,[Ip]:s.LESS,[hc]:s.LEQUAL,[Lp]:s.EQUAL,[uc]:s.GEQUAL,[Dp]:s.GREATER,[Np]:s.NOTEQUAL};function Wt(P,w){if(w.type===mn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Re||w.magFilter===co||w.magFilter===mr||w.magFilter===fi||w.minFilter===Re||w.minFilter===co||w.minFilter===mr||w.minFilter===fi)&&Et("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,gt[w.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,gt[w.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,gt[w.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,mt[w.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,mt[w.minFilter]),w.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,zt[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Fe||w.minFilter!==mr&&w.minFilter!==fi||w.type===mn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){const D=t.get("EXT_texture_filter_anisotropic");s.texParameterf(P,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Dt(P,w){let D=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",R));const F=w.source;let Z=f.get(F);Z===void 0&&(Z={},f.set(F,Z));const ot=V(w);if(ot!==P.__cacheKey){Z[ot]===void 0&&(Z[ot]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,D=!0),Z[ot].usedTimes++;const _t=Z[P.__cacheKey];_t!==void 0&&(Z[P.__cacheKey].usedTimes--,_t.usedTimes===0&&I(w)),P.__cacheKey=ot,P.__webglTexture=Z[ot].texture}return D}function J(P,w,D){return Math.floor(Math.floor(P/D)/w)}function et(P,w,D,F){const ot=P.updateRanges;if(ot.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,D,F,w.data);else{ot.sort((Vt,bt)=>Vt.start-bt.start);let _t=0;for(let Vt=1;Vt<ot.length;Vt++){const bt=ot[_t],wt=ot[Vt],Xt=bt.start+bt.count,ee=J(wt.start,w.width,4),oe=J(bt.start,w.width,4);wt.start<=Xt+1&&ee===oe&&J(wt.start+wt.count-1,w.width,4)===ee?bt.count=Math.max(bt.count,wt.start+wt.count-bt.start):(++_t,ot[_t]=wt)}ot.length=_t+1;const tt=e.getParameter(s.UNPACK_ROW_LENGTH),lt=e.getParameter(s.UNPACK_SKIP_PIXELS),St=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let Vt=0,bt=ot.length;Vt<bt;Vt++){const wt=ot[Vt],Xt=Math.floor(wt.start/4),ee=Math.ceil(wt.count/4),oe=Xt%w.width,H=Math.floor(Xt/w.width),At=ee,at=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,oe),e.pixelStorei(s.UNPACK_SKIP_ROWS,H),e.texSubImage2D(s.TEXTURE_2D,0,oe,H,At,at,D,F,w.data)}P.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,tt),e.pixelStorei(s.UNPACK_SKIP_PIXELS,lt),e.pixelStorei(s.UNPACK_SKIP_ROWS,St)}}function ut(P,w,D){let F=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(F=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(F=s.TEXTURE_3D);const Z=Dt(P,w),ot=w.source;e.bindTexture(F,P.__webglTexture,s.TEXTURE0+D);const _t=n.get(ot);if(ot.version!==_t.__version||Z===!0){if(e.activeTexture(s.TEXTURE0+D),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const at=he.getPrimaries(he.workingColorSpace),Rt=w.colorSpace===Ti?null:he.getPrimaries(w.colorSpace),Lt=w.colorSpace===Ti||at===Rt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt)}e.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment);let lt=m(w.image,!1,i.maxTextureSize);lt=fe(w,lt);const St=r.convert(w.format,w.colorSpace),Vt=r.convert(w.type);let bt=v(w.internalFormat,St,Vt,w.normalized,w.colorSpace,w.isVideoTexture);Wt(F,w);let wt;const Xt=w.mipmaps,ee=w.isVideoTexture!==!0,oe=_t.__version===void 0||Z===!0,H=ot.dataReady,At=E(w,lt);if(w.isDepthTexture)bt=b(w.format===Zi,w.type),oe&&(ee?e.texStorage2D(s.TEXTURE_2D,1,bt,lt.width,lt.height):e.texImage2D(s.TEXTURE_2D,0,bt,lt.width,lt.height,0,St,Vt,null));else if(w.isDataTexture)if(Xt.length>0){ee&&oe&&e.texStorage2D(s.TEXTURE_2D,At,bt,Xt[0].width,Xt[0].height);for(let at=0,Rt=Xt.length;at<Rt;at++)wt=Xt[at],ee?H&&e.texSubImage2D(s.TEXTURE_2D,at,0,0,wt.width,wt.height,St,Vt,wt.data):e.texImage2D(s.TEXTURE_2D,at,bt,wt.width,wt.height,0,St,Vt,wt.data);w.generateMipmaps=!1}else ee?(oe&&e.texStorage2D(s.TEXTURE_2D,At,bt,lt.width,lt.height),H&&et(w,lt,St,Vt)):e.texImage2D(s.TEXTURE_2D,0,bt,lt.width,lt.height,0,St,Vt,lt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ee&&oe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,At,bt,Xt[0].width,Xt[0].height,lt.depth);for(let at=0,Rt=Xt.length;at<Rt;at++)if(wt=Xt[at],w.format!==gn)if(St!==null)if(ee){if(H)if(w.layerUpdates.size>0){const Lt=$h(wt.width,wt.height,w.format,w.type);for(const ft of w.layerUpdates){const Jt=wt.data.subarray(ft*Lt/wt.data.BYTES_PER_ELEMENT,(ft+1)*Lt/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,at,0,0,ft,wt.width,wt.height,1,St,Jt)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,at,0,0,0,wt.width,wt.height,lt.depth,St,wt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,at,bt,wt.width,wt.height,lt.depth,0,wt.data,0,0);else Et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ee?H&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,at,0,0,0,wt.width,wt.height,lt.depth,St,Vt,wt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,at,bt,wt.width,wt.height,lt.depth,0,St,Vt,wt.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{ee&&oe&&e.texStorage2D(s.TEXTURE_2D,At,bt,Xt[0].width,Xt[0].height);for(let at=0,Rt=Xt.length;at<Rt;at++)wt=Xt[at],w.format!==gn?St!==null?ee?H&&e.compressedTexSubImage2D(s.TEXTURE_2D,at,0,0,wt.width,wt.height,St,wt.data):e.compressedTexImage2D(s.TEXTURE_2D,at,bt,wt.width,wt.height,0,wt.data):Et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?H&&e.texSubImage2D(s.TEXTURE_2D,at,0,0,wt.width,wt.height,St,Vt,wt.data):e.texImage2D(s.TEXTURE_2D,at,bt,wt.width,wt.height,0,St,Vt,wt.data)}else if(w.isDataArrayTexture)if(ee){if(oe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,At,bt,lt.width,lt.height,lt.depth),H)if(w.layerUpdates.size>0){const at=$h(lt.width,lt.height,w.format,w.type);for(const Rt of w.layerUpdates){const Lt=lt.data.subarray(Rt*at/lt.data.BYTES_PER_ELEMENT,(Rt+1)*at/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Rt,lt.width,lt.height,1,St,Vt,Lt)}w.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,St,Vt,lt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,bt,lt.width,lt.height,lt.depth,0,St,Vt,lt.data);else if(w.isData3DTexture)ee?(oe&&e.texStorage3D(s.TEXTURE_3D,At,bt,lt.width,lt.height,lt.depth),H&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,St,Vt,lt.data)):e.texImage3D(s.TEXTURE_3D,0,bt,lt.width,lt.height,lt.depth,0,St,Vt,lt.data);else if(w.isFramebufferTexture){if(oe)if(ee)e.texStorage2D(s.TEXTURE_2D,At,bt,lt.width,lt.height);else{let at=lt.width,Rt=lt.height;for(let Lt=0;Lt<At;Lt++)e.texImage2D(s.TEXTURE_2D,Lt,bt,at,Rt,0,St,Vt,null),at>>=1,Rt>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in s){const at=s.canvas;if(at.hasAttribute("layoutsubtree")||at.setAttribute("layoutsubtree","true"),lt.parentNode!==at){at.appendChild(lt),d.add(w),at.onpaint=Rt=>{const Lt=Rt.changedElements;for(const ft of d)Lt.includes(ft.image)&&(ft.needsUpdate=!0)},at.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,lt);else{const Lt=s.RGBA,ft=s.RGBA,Jt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Lt,ft,Jt,lt)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Xt.length>0){if(ee&&oe){const at=se(Xt[0]);e.texStorage2D(s.TEXTURE_2D,At,bt,at.width,at.height)}for(let at=0,Rt=Xt.length;at<Rt;at++)wt=Xt[at],ee?H&&e.texSubImage2D(s.TEXTURE_2D,at,0,0,St,Vt,wt):e.texImage2D(s.TEXTURE_2D,at,bt,St,Vt,wt);w.generateMipmaps=!1}else if(ee){if(oe){const at=se(lt);e.texStorage2D(s.TEXTURE_2D,At,bt,at.width,at.height)}H&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,St,Vt,lt)}else e.texImage2D(s.TEXTURE_2D,0,bt,St,Vt,lt);g(w)&&M(F),_t.__version=ot.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function xt(P,w,D){if(w.image.length!==6)return;const F=Dt(P,w),Z=w.source;e.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+D);const ot=n.get(Z);if(Z.version!==ot.__version||F===!0){e.activeTexture(s.TEXTURE0+D);const _t=he.getPrimaries(he.workingColorSpace),tt=w.colorSpace===Ti?null:he.getPrimaries(w.colorSpace),lt=w.colorSpace===Ti||_t===tt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);const St=w.isCompressedTexture||w.image[0].isCompressedTexture,Vt=w.image[0]&&w.image[0].isDataTexture,bt=[];for(let ft=0;ft<6;ft++)!St&&!Vt?bt[ft]=m(w.image[ft],!0,i.maxCubemapSize):bt[ft]=Vt?w.image[ft].image:w.image[ft],bt[ft]=fe(w,bt[ft]);const wt=bt[0],Xt=r.convert(w.format,w.colorSpace),ee=r.convert(w.type),oe=v(w.internalFormat,Xt,ee,w.normalized,w.colorSpace),H=w.isVideoTexture!==!0,At=ot.__version===void 0||F===!0,at=Z.dataReady;let Rt=E(w,wt);Wt(s.TEXTURE_CUBE_MAP,w);let Lt;if(St){H&&At&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Rt,oe,wt.width,wt.height);for(let ft=0;ft<6;ft++){Lt=bt[ft].mipmaps;for(let Jt=0;Jt<Lt.length;Jt++){const Yt=Lt[Jt];w.format!==gn?Xt!==null?H?at&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Jt,0,0,Yt.width,Yt.height,Xt,Yt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Jt,oe,Yt.width,Yt.height,0,Yt.data):Et("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?at&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Jt,0,0,Yt.width,Yt.height,Xt,ee,Yt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Jt,oe,Yt.width,Yt.height,0,Xt,ee,Yt.data)}}}else{if(Lt=w.mipmaps,H&&At){Lt.length>0&&Rt++;const ft=se(bt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Rt,oe,ft.width,ft.height)}for(let ft=0;ft<6;ft++)if(Vt){H?at&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,bt[ft].width,bt[ft].height,Xt,ee,bt[ft].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,oe,bt[ft].width,bt[ft].height,0,Xt,ee,bt[ft].data);for(let Jt=0;Jt<Lt.length;Jt++){const Ee=Lt[Jt].image[ft].image;H?at&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Jt+1,0,0,Ee.width,Ee.height,Xt,ee,Ee.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Jt+1,oe,Ee.width,Ee.height,0,Xt,ee,Ee.data)}}else{H?at&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Xt,ee,bt[ft]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,oe,Xt,ee,bt[ft]);for(let Jt=0;Jt<Lt.length;Jt++){const Yt=Lt[Jt];H?at&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Jt+1,0,0,Xt,ee,Yt.image[ft]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Jt+1,oe,Xt,ee,Yt.image[ft])}}}g(w)&&M(s.TEXTURE_CUBE_MAP),ot.__version=Z.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function st(P,w,D,F,Z,ot){const _t=r.convert(D.format,D.colorSpace),tt=r.convert(D.type),lt=v(D.internalFormat,_t,tt,D.normalized,D.colorSpace),St=n.get(w),Vt=n.get(D);if(Vt.__renderTarget=w,!St.__hasExternalTextures){const bt=Math.max(1,w.width>>ot),wt=Math.max(1,w.height>>ot);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?e.texImage3D(Z,ot,lt,bt,wt,w.depth,0,_t,tt,null):e.texImage2D(Z,ot,lt,bt,wt,0,_t,tt,null)}e.bindFramebuffer(s.FRAMEBUFFER,P),$t(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,F,Z,Vt.__webglTexture,0,kt(w)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,F,Z,Vt.__webglTexture,ot),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Mt(P,w,D){if(s.bindRenderbuffer(s.RENDERBUFFER,P),w.depthBuffer){const F=w.depthTexture,Z=F&&F.isDepthTexture?F.type:null,ot=b(w.stencilBuffer,Z),_t=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;$t(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,kt(w),ot,w.width,w.height):D?s.renderbufferStorageMultisample(s.RENDERBUFFER,kt(w),ot,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,ot,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,_t,s.RENDERBUFFER,P)}else{const F=w.textures;for(let Z=0;Z<F.length;Z++){const ot=F[Z],_t=r.convert(ot.format,ot.colorSpace),tt=r.convert(ot.type),lt=v(ot.internalFormat,_t,tt,ot.normalized,ot.colorSpace);$t(w)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,kt(w),lt,w.width,w.height):D?s.renderbufferStorageMultisample(s.RENDERBUFFER,kt(w),lt,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,lt,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function qt(P,w,D){const F=w.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Z=n.get(w.depthTexture);if(Z.__renderTarget=w,(!Z.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),F){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,w.depthTexture.addEventListener("dispose",R)),Z.__webglTexture===void 0){Z.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),Wt(s.TEXTURE_CUBE_MAP,w.depthTexture);const St=r.convert(w.depthTexture.format),Vt=r.convert(w.depthTexture.type);let bt;w.depthTexture.format===mi?bt=s.DEPTH_COMPONENT24:w.depthTexture.format===Zi&&(bt=s.DEPTH24_STENCIL8);for(let wt=0;wt<6;wt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,bt,w.width,w.height,0,St,Vt,null)}}else nt(w.depthTexture,0);const ot=Z.__webglTexture,_t=kt(w),tt=F?s.TEXTURE_CUBE_MAP_POSITIVE_X+D:s.TEXTURE_2D,lt=w.depthTexture.format===Zi?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(w.depthTexture.format===mi)$t(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,lt,tt,ot,0,_t):s.framebufferTexture2D(s.FRAMEBUFFER,lt,tt,ot,0);else if(w.depthTexture.format===Zi)$t(w)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,lt,tt,ot,0,_t):s.framebufferTexture2D(s.FRAMEBUFFER,lt,tt,ot,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function K(P){const w=n.get(P),D=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){const F=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),F){const Z=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,F.removeEventListener("dispose",Z)};F.addEventListener("dispose",Z),w.__depthDisposeCallback=Z}w.__boundDepthTexture=F}if(P.depthTexture&&!w.__autoAllocateDepthBuffer)if(D)for(let F=0;F<6;F++)qt(w.__webglFramebuffer[F],P,F);else{const F=P.texture.mipmaps;F&&F.length>0?qt(w.__webglFramebuffer[0],P,0):qt(w.__webglFramebuffer,P,0)}else if(D){w.__webglDepthbuffer=[];for(let F=0;F<6;F++)if(e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[F]),w.__webglDepthbuffer[F]===void 0)w.__webglDepthbuffer[F]=s.createRenderbuffer(),Mt(w.__webglDepthbuffer[F],P,!1);else{const Z=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=w.__webglDepthbuffer[F];s.bindRenderbuffer(s.RENDERBUFFER,ot),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,ot)}}else{const F=P.texture.mipmaps;if(F&&F.length>0?e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),Mt(w.__webglDepthbuffer,P,!1);else{const Z=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ot),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,ot)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function rt(P,w,D){const F=n.get(P);w!==void 0&&st(F.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),D!==void 0&&K(P)}function dt(P){const w=P.texture,D=n.get(P),F=n.get(w);P.addEventListener("dispose",y);const Z=P.textures,ot=P.isWebGLCubeRenderTarget===!0,_t=Z.length>1;if(_t||(F.__webglTexture===void 0&&(F.__webglTexture=s.createTexture()),F.__version=w.version,o.memory.textures++),ot){D.__webglFramebuffer=[];for(let tt=0;tt<6;tt++)if(w.mipmaps&&w.mipmaps.length>0){D.__webglFramebuffer[tt]=[];for(let lt=0;lt<w.mipmaps.length;lt++)D.__webglFramebuffer[tt][lt]=s.createFramebuffer()}else D.__webglFramebuffer[tt]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){D.__webglFramebuffer=[];for(let tt=0;tt<w.mipmaps.length;tt++)D.__webglFramebuffer[tt]=s.createFramebuffer()}else D.__webglFramebuffer=s.createFramebuffer();if(_t)for(let tt=0,lt=Z.length;tt<lt;tt++){const St=n.get(Z[tt]);St.__webglTexture===void 0&&(St.__webglTexture=s.createTexture(),o.memory.textures++)}if(P.samples>0&&$t(P)===!1){D.__webglMultisampledFramebuffer=s.createFramebuffer(),D.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let tt=0;tt<Z.length;tt++){const lt=Z[tt];D.__webglColorRenderbuffer[tt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,D.__webglColorRenderbuffer[tt]);const St=r.convert(lt.format,lt.colorSpace),Vt=r.convert(lt.type),bt=v(lt.internalFormat,St,Vt,lt.normalized,lt.colorSpace,P.isXRRenderTarget===!0),wt=kt(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,wt,bt,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+tt,s.RENDERBUFFER,D.__webglColorRenderbuffer[tt])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(D.__webglDepthRenderbuffer=s.createRenderbuffer(),Mt(D.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ot){e.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture),Wt(s.TEXTURE_CUBE_MAP,w);for(let tt=0;tt<6;tt++)if(w.mipmaps&&w.mipmaps.length>0)for(let lt=0;lt<w.mipmaps.length;lt++)st(D.__webglFramebuffer[tt][lt],P,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,lt);else st(D.__webglFramebuffer[tt],P,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0);g(w)&&M(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_t){for(let tt=0,lt=Z.length;tt<lt;tt++){const St=Z[tt],Vt=n.get(St);let bt=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(bt=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(bt,Vt.__webglTexture),Wt(bt,St),st(D.__webglFramebuffer,P,St,s.COLOR_ATTACHMENT0+tt,bt,0),g(St)&&M(bt)}e.unbindTexture()}else{let tt=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(tt=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(tt,F.__webglTexture),Wt(tt,w),w.mipmaps&&w.mipmaps.length>0)for(let lt=0;lt<w.mipmaps.length;lt++)st(D.__webglFramebuffer[lt],P,w,s.COLOR_ATTACHMENT0,tt,lt);else st(D.__webglFramebuffer,P,w,s.COLOR_ATTACHMENT0,tt,0);g(w)&&M(tt),e.unbindTexture()}P.depthBuffer&&K(P)}function ht(P){const w=P.textures;for(let D=0,F=w.length;D<F;D++){const Z=w[D];if(g(Z)){const ot=S(P),_t=n.get(Z).__webglTexture;e.bindTexture(ot,_t),M(ot),e.unbindTexture()}}}const vt=[],Nt=[];function Tt(P){if(P.samples>0){if($t(P)===!1){const w=P.textures,D=P.width,F=P.height;let Z=s.COLOR_BUFFER_BIT;const ot=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_t=n.get(P),tt=w.length>1;if(tt)for(let St=0;St<w.length;St++)e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer);const lt=P.texture.mipmaps;lt&&lt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,_t.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let St=0;St<w.length;St++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),tt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,_t.__webglColorRenderbuffer[St]);const Vt=n.get(w[St]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Vt,0)}s.blitFramebuffer(0,0,D,F,0,0,D,F,Z,s.NEAREST),l===!0&&(vt.length=0,Nt.length=0,vt.push(s.COLOR_ATTACHMENT0+St),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(vt.push(ot),Nt.push(ot),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Nt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,vt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),tt)for(let St=0;St<w.length;St++){e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.RENDERBUFFER,_t.__webglColorRenderbuffer[St]);const Vt=n.get(w[St]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,_t.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+St,s.TEXTURE_2D,Vt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){const w=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function kt(P){return Math.min(i.maxSamples,P.samples)}function $t(P){const w=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function O(P){const w=o.render.frame;h.get(P)!==w&&(h.set(P,w),P.update())}function fe(P,w){const D=P.colorSpace,F=P.format,Z=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||D!==To&&D!==Ti&&(he.getTransfer(D)===_e?(F!==gn||Z!==dn)&&Et("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Kt("WebGLTextures: Unsupported texture color space:",D)),w}function se(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=G,this.getTextureUnits=U,this.setTextureUnits=z,this.setTexture2D=nt,this.setTexture2DArray=B,this.setTexture3D=X,this.setTextureCube=$,this.rebindTextures=rt,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=K,this.setupFrameBufferTexture=st,this.useMultisampledRTT=$t,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Hm(s,t){function e(n,i=Ti){let r;const o=he.getTransfer(i);if(n===dn)return s.UNSIGNED_BYTE;if(n===sc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===rc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===lu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===cu)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===ou)return s.BYTE;if(n===au)return s.SHORT;if(n===Sr)return s.UNSIGNED_SHORT;if(n===ic)return s.INT;if(n===kn)return s.UNSIGNED_INT;if(n===mn)return s.FLOAT;if(n===an)return s.HALF_FLOAT;if(n===hu)return s.ALPHA;if(n===uu)return s.RGB;if(n===gn)return s.RGBA;if(n===mi)return s.DEPTH_COMPONENT;if(n===Zi)return s.DEPTH_STENCIL;if(n===oc)return s.RED;if(n===ko)return s.RED_INTEGER;if(n===Qi)return s.RG;if(n===ac)return s.RG_INTEGER;if(n===lc)return s.RGBA_INTEGER;if(n===ho||n===uo||n===fo||n===po)if(o===_e)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ho)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ho)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===uo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===po)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===cl||n===hl||n===ul||n===fl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===cl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===hl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ul)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===dl||n===pl||n===ml||n===gl||n===_l||n===So||n===xl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===dl||n===pl)return o===_e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ml)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===gl)return r.COMPRESSED_R11_EAC;if(n===_l)return r.COMPRESSED_SIGNED_R11_EAC;if(n===So)return r.COMPRESSED_RG11_EAC;if(n===xl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===vl||n===yl||n===Ml||n===Sl||n===bl||n===wl||n===El||n===Tl||n===Al||n===Rl||n===Cl||n===Pl||n===Il||n===Ll)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===vl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===yl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ml)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Sl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===bl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===wl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===El)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Tl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Al)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Rl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Cl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Pl)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Il)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ll)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Dl||n===Nl||n===Ol)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Dl)return o===_e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Nl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ol)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ul||n===Fl||n===bo||n===Bl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ul)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Fl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===bo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Bl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===br?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const YS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qS=`
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

}`;class ZS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Mu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ce({vertexShader:YS,fragmentShader:qS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Pe(new Dr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class KS extends si{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null;const _=typeof XRWebGLBinding<"u",m=new ZS,g={},M=e.getContextAttributes();let S=null,v=null;const b=[],E=[],R=new it;let y=null,T=null;const I=new Ke;I.viewport=new Me;const L=new Ke;L.viewport=new Me;const N=[I,L],G=new Pm;let U=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let et=b[J];return et===void 0&&(et=new Ka,b[J]=et),et.getTargetRaySpace()},this.getControllerGrip=function(J){let et=b[J];return et===void 0&&(et=new Ka,b[J]=et),et.getGripSpace()},this.getHand=function(J){let et=b[J];return et===void 0&&(et=new Ka,b[J]=et),et.getHandSpace()};function W(J){const et=E.indexOf(J.inputSource);if(et===-1)return;const ut=b[et];ut!==void 0&&(ut.update(J.inputSource,J.frame,c||o),ut.dispatchEvent({type:J.type,data:J.inputSource}))}function V(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",nt);for(let J=0;J<b.length;J++){const et=E[J];et!==null&&(E[J]=null,b[J].disconnect(et))}U=null,z=null,m.reset();for(const J in g)delete g[J];if(t.setRenderTarget(S),f=null,u=null,d=null,i=null,v=null,Dt.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(R.width,R.height,!1),T!==null){const J=T.camera;J.fov=T.fov,J.zoom=T.zoom,J.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&Et("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&Et("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(S=t.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",V),i.addEventListener("inputsourceschange",nt),M.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ut=null,xt=null,st=null;M.depth&&(st=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ut=M.stencil?Zi:mi,xt=M.stencil?br:kn);const Mt={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Mt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new He(u.textureWidth,u.textureHeight,{format:gn,type:dn,depthTexture:new Tr(u.textureWidth,u.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const ut={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,ut),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new He(f.framebufferWidth,f.framebufferHeight,{format:gn,type:dn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Dt.setContext(i),Dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function nt(J){for(let et=0;et<J.removed.length;et++){const ut=J.removed[et],xt=E.indexOf(ut);xt>=0&&(E[xt]=null,b[xt].disconnect(ut))}for(let et=0;et<J.added.length;et++){const ut=J.added[et];let xt=E.indexOf(ut);if(xt===-1){for(let Mt=0;Mt<b.length;Mt++)if(Mt>=E.length){E.push(ut),xt=Mt;break}else if(E[Mt]===null){E[Mt]=ut,xt=Mt;break}if(xt===-1)break}const st=b[xt];st&&st.connect(ut)}}const B=new C,X=new C;function $(J,et,ut){B.setFromMatrixPosition(et.matrixWorld),X.setFromMatrixPosition(ut.matrixWorld);const xt=B.distanceTo(X),st=et.projectionMatrix.elements,Mt=ut.projectionMatrix.elements,qt=st[14]/(st[10]-1),K=st[14]/(st[10]+1),rt=(st[9]+1)/st[5],dt=(st[9]-1)/st[5],ht=(st[8]-1)/st[0],vt=(Mt[8]+1)/Mt[0],Nt=qt*ht,Tt=qt*vt,kt=xt/(-ht+vt),$t=kt*-ht;if(et.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX($t),J.translateZ(kt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),st[10]===-1)J.projectionMatrix.copy(et.projectionMatrix),J.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const O=qt+kt,fe=K+kt,se=Nt-$t,P=Tt+(xt-$t),w=rt*K/fe*O,D=dt*K/fe*O;J.projectionMatrix.makePerspective(se,P,w,D,O,fe),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function gt(J,et){et===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(et.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let et=J.near,ut=J.far;m.texture!==null&&(m.depthNear>0&&(et=m.depthNear),m.depthFar>0&&(ut=m.depthFar)),G.near=L.near=I.near=et,G.far=L.far=I.far=ut,(U!==G.near||z!==G.far)&&(i.updateRenderState({depthNear:G.near,depthFar:G.far}),U=G.near,z=G.far),G.layers.mask=J.layers.mask|6,I.layers.mask=G.layers.mask&-5,L.layers.mask=G.layers.mask&-3;const xt=J.parent,st=G.cameras;gt(G,xt);for(let Mt=0;Mt<st.length;Mt++)gt(st[Mt],xt);st.length===2?$(G,I,L):G.projectionMatrix.copy(I.projectionMatrix),T===null&&J.isPerspectiveCamera&&(T={camera:J,fov:J.fov,zoom:J.zoom}),mt(J,G,xt)};function mt(J,et,ut){ut===null?J.matrix.copy(et.matrixWorld):(J.matrix.copy(ut.matrixWorld),J.matrix.invert(),J.matrix.multiply(et.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(et.projectionMatrix),J.projectionMatrixInverse.copy(et.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=wr*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function(J){return g[J]};let zt=null;function Wt(J,et){if(h=et.getViewerPose(c||o),p=et,h!==null){const ut=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let xt=!1;ut.length!==G.cameras.length&&(G.cameras.length=0,xt=!0);for(let K=0;K<ut.length;K++){const rt=ut[K];let dt=null;if(f!==null)dt=f.getViewport(rt);else{const vt=d.getViewSubImage(u,rt);dt=vt.viewport,K===0&&(t.setRenderTargetTextures(v,vt.colorTexture,vt.depthStencilTexture),t.setRenderTarget(v))}let ht=N[K];ht===void 0&&(ht=new Ke,ht.layers.enable(K),ht.viewport=new Me,N[K]=ht),ht.matrix.fromArray(rt.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(rt.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(dt.x,dt.y,dt.width,dt.height),K===0&&(G.matrix.copy(ht.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),xt===!0&&G.cameras.push(ht)}const st=i.enabledFeatures;if(st&&st.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();const K=d.getDepthInformation(ut[0]);K&&K.isValid&&K.texture&&m.init(K,i.renderState)}if(st&&st.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let K=0;K<ut.length;K++){const rt=ut[K].camera;if(rt){let dt=g[rt];dt||(dt=new Mu,g[rt]=dt);const ht=d.getCameraImage(rt);dt.sourceTexture=ht}}}}for(let ut=0;ut<b.length;ut++){const xt=E[ut],st=b[ut];xt!==null&&st!==void 0&&st.update(xt,et,c||o)}zt&&zt(J,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),p=null}const Dt=new Fm;Dt.setAnimationLoop(Wt),this.setAnimationLoop=function(J){zt=J},this.dispose=function(){}}}const $S=new ie,Wm=new re;Wm.set(-1,0,0,0,1,0,0,0,1);function JS(s,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,am(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,M,S,v){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(m,g):g.isMeshLambertMaterial?(r(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(m,g),d(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(m,g),u(m,g),g.isMeshPhysicalMaterial&&f(m,g,v)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),_(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,M,S):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===on&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===on&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const M=t.get(g),S=M.envMap,v=M.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4($S.makeRotationFromEuler(v)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Wm),m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,M,S){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*M,m.scale.value=S*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function u(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function f(m,g,M){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===on&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.retroreflectivity>0&&(m.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){const M=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function jS(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,b){const E=b.program;n.uniformBlockBinding(v,E)}function c(v,b){let E=i[v.id];E===void 0&&(m(v),E=h(v),i[v.id]=E,v.addEventListener("dispose",M));const R=b.program;n.updateUBOMapping(v,R);const y=t.render.frame;r[v.id]!==y&&(u(v),r[v.id]=y)}function h(v){const b=d();v.__bindingPointIndex=b;const E=s.createBuffer(),R=v.__size,y=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,E),s.bufferData(s.UNIFORM_BUFFER,R,y),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,E),E}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return Kt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const b=i[v.id],E=v.uniforms,R=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let y=0,T=E.length;y<T;y++){const I=E[y];if(Array.isArray(I))for(let L=0,N=I.length;L<N;L++)f(I[L],y,L,R);else f(I,y,0,R)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(v,b,E,R){if(_(v,b,E,R)===!0){const y=v.__offset,T=v.value;if(Array.isArray(T)){let I=0;for(let L=0;L<T.length;L++){const N=T[L],G=g(N);p(N,v.__data,I),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(I+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(T,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,y,v.__data)}}function p(v,b,E){typeof v=="number"||typeof v=="boolean"?b[0]=v:v.isMatrix3?(b[0]=v.elements[0],b[1]=v.elements[1],b[2]=v.elements[2],b[3]=0,b[4]=v.elements[3],b[5]=v.elements[4],b[6]=v.elements[5],b[7]=0,b[8]=v.elements[6],b[9]=v.elements[7],b[10]=v.elements[8],b[11]=0):ArrayBuffer.isView(v)?b.set(new v.constructor(v.buffer,v.byteOffset,b.length)):v.toArray(b,E)}function _(v,b,E,R){const y=v.value,T=b+"_"+E;if(R[T]===void 0)return typeof y=="number"||typeof y=="boolean"?R[T]=y:ArrayBuffer.isView(y)?R[T]=y.slice():R[T]=y.clone(),!0;{const I=R[T];if(typeof y=="number"||typeof y=="boolean"){if(I!==y)return R[T]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(I.equals(y)===!1)return I.copy(y),!0}}return!1}function m(v){const b=v.uniforms;let E=0;const R=16;for(let T=0,I=b.length;T<I;T++){const L=Array.isArray(b[T])?b[T]:[b[T]];for(let N=0,G=L.length;N<G;N++){const U=L[N],z=Array.isArray(U.value)?U.value:[U.value];for(let W=0,V=z.length;W<V;W++){const nt=z[W],B=g(nt),X=E%R,$=X%B.boundary,gt=X+$;E+=$,gt!==0&&R-gt<B.storage&&(E+=R-gt),U.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=E,E+=B.storage}}}const y=E%R;return y>0&&(E+=R-y),v.__size=E,v.__cache={},this}function g(v){const b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?Et("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(b.boundary=16,b.storage=v.byteLength):Et("WebGLRenderer: Unsupported uniform value type.",v),b}function M(v){const b=v.target;b.removeEventListener("dispose",M);const E=o.indexOf(b.__bindingPointIndex);o.splice(E,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function S(){for(const v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:l,update:c,dispose:S}}const QS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ci=null;function tb(){return ci===null&&(ci=new zn(QS,16,16,Qi,an),ci.name="DFG_LUT",ci.minFilter=Re,ci.magFilter=Re,ci.wrapS=En,ci.wrapT=En,ci.generateMipmaps=!1,ci.needsUpdate=!0),ci}class Xm{constructor(t={}){const{canvas:e=Fp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=dn}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const _=f,m=new Set([lc,ac,ko]),g=new Set([dn,kn,Sr,br,sc,rc]),M=new Uint32Array(4),S=new Int32Array(4),v=new C;let b=null,E=null;const R=[],y=[];let T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const I=this;let L=!1,N=null,G=null,U=null,z=null;this._outputColorSpace=Sn;let W=0,V=0,nt=null,B=-1,X=null;const $=new Me,gt=new Me;let mt=null;const zt=new pt(0);let Wt=0,Dt=e.width,J=e.height,et=1,ut=null,xt=null;const st=new Me(0,0,Dt,J),Mt=new Me(0,0,Dt,J);let qt=!1;const K=new Ls;let rt=!1,dt=!1;const ht=new ie,vt=new C,Nt=new Me,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let kt=!1;function $t(){return nt===null?et:1}let O=n;function fe(A,k){return e.getContext(A,k)}let se,P,w,D,F,Z,ot,_t,tt,lt,St,Vt,bt,wt,Xt,ee,oe,H,At,at,Rt,Lt,ft;try{const A={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Kl}`),e.addEventListener("webglcontextlost",Ee,!1),e.addEventListener("webglcontextrestored",xe,!1),e.addEventListener("webglcontextcreationerror",Gn,!1),O===null){const k="webgl2";if(O=fe(k,A),O===null)throw fe(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Jt()}catch(A){throw e.removeEventListener("webglcontextlost",Ee,!1),e.removeEventListener("webglcontextrestored",xe,!1),e.removeEventListener("webglcontextcreationerror",Gn,!1),Kt("WebGLRenderer: "+A.message),A}function Jt(){se=new e1(O),se.init(),Rt=new Hm(O,se),P=new XM(O,se,t,Rt),w=new WS(O,se),P.reversedDepthBuffer&&u&&w.buffers.depth.setReversed(!0),G=O.createFramebuffer(),U=O.createFramebuffer(),z=O.createFramebuffer(),D=new s1(O),F=new PS,Z=new XS(O,se,w,F,P,Rt,D),ot=new t1(I),_t=new ov(O),Lt=new HM(O,_t),tt=new n1(O,_t,D,Lt),lt=new o1(O,tt,_t,Lt,D),H=new r1(O,P,Z),Xt=new YM(F),St=new CS(I,ot,se,P,Lt,Xt),Vt=new JS(I,F),bt=new LS,wt=new BS(se),oe=new GM(I,ot,w,lt,p,l),ee=new HS(I,lt,P),ft=new jS(O,D,P,w),At=new WM(O,se,D),at=new i1(O,se,D),D.programs=St.programs,I.capabilities=P,I.extensions=se,I.properties=F,I.renderLists=bt,I.shadowMap=ee,I.state=w,I.info=D}_!==dn&&(T=new l1(_,e.width,e.height,a,i,r));const Yt=new KS(I,O);this.xr=Yt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const A=se.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=se.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(A){A!==void 0&&(et=A,this.setSize(Dt,J,!1))},this.getSize=function(A){return A.set(Dt,J)},this.setSize=function(A,k,Q=!0){if(Yt.isPresenting){Et("WebGLRenderer: Can't change size while VR device is presenting.");return}Dt=A,J=k,e.width=Math.floor(A*et),e.height=Math.floor(k*et),Q===!0&&(e.style.width=A+"px",e.style.height=k+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(Dt*et,J*et).floor()},this.setDrawingBufferSize=function(A,k,Q){Dt=A,J=k,et=Q,e.width=Math.floor(A*Q),e.height=Math.floor(k*Q),this.setViewport(0,0,A,k)},this.setEffects=function(A){if(_===dn){Kt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let k=0;k<A.length;k++)if(A[k].isOutputPass===!0){Et("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy($)},this.getViewport=function(A){return A.copy(st)},this.setViewport=function(A,k,Q,Y){A.isVector4?st.set(A.x,A.y,A.z,A.w):st.set(A,k,Q,Y),w.viewport($.copy(st).multiplyScalar(et).round())},this.getScissor=function(A){return A.copy(Mt)},this.setScissor=function(A,k,Q,Y){A.isVector4?Mt.set(A.x,A.y,A.z,A.w):Mt.set(A,k,Q,Y),w.scissor(gt.copy(Mt).multiplyScalar(et).round())},this.getScissorTest=function(){return qt},this.setScissorTest=function(A){w.setScissorTest(qt=A)},this.setOpaqueSort=function(A){ut=A},this.setTransparentSort=function(A){xt=A},this.getClearColor=function(A){return A.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor(...arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha(...arguments)},this.clear=function(A=!0,k=!0,Q=!0){let Y=0;if(A){let q=!1;if(nt!==null){const It=nt.texture.format;q=m.has(It)}if(q){const It=nt.texture.type,Bt=g.has(It),Pt=oe.getClearColor(),Gt=oe.getClearAlpha(),Zt=Pt.r,ce=Pt.g,de=Pt.b;Bt?(M[0]=Zt,M[1]=ce,M[2]=de,M[3]=Gt,O.clearBufferuiv(O.COLOR,0,M)):(S[0]=Zt,S[1]=ce,S[2]=de,S[3]=Gt,O.clearBufferiv(O.COLOR,0,S))}else Y|=O.COLOR_BUFFER_BIT}k&&(Y|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(Y|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&O.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),N=A},this.dispose=function(){e.removeEventListener("webglcontextlost",Ee,!1),e.removeEventListener("webglcontextrestored",xe,!1),e.removeEventListener("webglcontextcreationerror",Gn,!1),oe.dispose(),bt.dispose(),wt.dispose(),F.dispose(),ot.dispose(),lt.dispose(),Lt.dispose(),ft.dispose(),St.dispose(),Yt.dispose(),Yt.removeEventListener("sessionstart",qu),Yt.removeEventListener("sessionend",Zu),ss.stop()};function Ee(A){A.preventDefault(),Co("WebGLRenderer: Context Lost."),L=!0}function xe(){Co("WebGLRenderer: Context Restored."),L=!1;const A=D.autoReset,k=ee.enabled,Q=ee.autoUpdate,Y=ee.needsUpdate,q=ee.type;Jt(),D.autoReset=A,ee.enabled=k,ee.autoUpdate=Q,ee.needsUpdate=Y,ee.type=q}function Gn(A){Kt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function oi(A){const k=A.target;k.removeEventListener("dispose",oi),e0(k)}function e0(A){n0(A),F.remove(A)}function n0(A){const k=F.get(A).programs;k!==void 0&&(k.forEach(function(Q){St.releaseProgram(Q)}),A.isShaderMaterial&&St.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,Q,Y,q,It){k===null&&(k=Tt);const Bt=q.isMesh&&q.matrixWorld.determinantAffine()<0,Pt=r0(A,k,Q,Y,q);w.setMaterial(Y,Bt);let Gt=Q.index,Zt=1;if(Y.wireframe===!0){if(Gt=tt.getWireframeAttribute(Q),Gt===void 0)return;Zt=2}const ce=Q.drawRange,de=Q.attributes.position;let Ht=ce.start*Zt,ve=(ce.start+ce.count)*Zt;It!==null&&(Ht=Math.max(Ht,It.start*Zt),ve=Math.min(ve,(It.start+It.count)*Zt)),Gt!==null?(Ht=Math.max(Ht,0),ve=Math.min(ve,Gt.count)):de!=null&&(Ht=Math.max(Ht,0),ve=Math.min(ve,de.count));const Be=ve-Ht;if(Be<0||Be===1/0)return;Lt.setup(q,Y,Pt,Q,Gt);let Ae,we=At;if(Gt!==null&&(Ae=_t.get(Gt),we=at,we.setIndex(Ae)),q.isMesh)Y.wireframe===!0?(w.setLineWidth(Y.wireframeLinewidth*$t()),we.setMode(O.LINES)):we.setMode(O.TRIANGLES);else if(q.isLine){let en=Y.linewidth;en===void 0&&(en=1),w.setLineWidth(en*$t()),q.isLineSegments?we.setMode(O.LINES):q.isLineLoop?we.setMode(O.LINE_LOOP):we.setMode(O.LINE_STRIP)}else q.isPoints?we.setMode(O.POINTS):q.isSprite&&we.setMode(O.TRIANGLES);if(q.isBatchedMesh)if(se.get("WEBGL_multi_draw"))we.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const en=q._multiDrawStarts,Ft=q._multiDrawCounts,ln=q._multiDrawCount,pe=Gt?_t.get(Gt).bytesPerElement:1,On=F.get(Y).currentProgram.getUniforms();for(let ai=0;ai<ln;ai++)On.setValue(O,"_gl_DrawID",ai),we.render(en[ai]/pe,Ft[ai])}else if(q.isInstancedMesh)we.renderInstances(Ht,Be,q.count);else if(Q.isInstancedBufferGeometry){const en=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Ft=Math.min(Q.instanceCount,en);we.renderInstances(Ht,Be,Ft)}else we.render(Ht,Be)};function Yu(A,k,Q,Y){N!==null&&A.isNodeMaterial&&N.setObject(Y,A),rt===!0&&Xt.setState(A,Q,!1),A.transparent===!0&&A.side===$n&&A.forceSinglePass===!1?(A.side=on,A.needsUpdate=!0,$o(A,k,Y),A.side=Ji,A.needsUpdate=!0,$o(A,k,Y),A.side=$n):$o(A,k,Y)}this.compile=function(A,k,Q=null){Q===null&&(Q=A),N!==null&&N.renderStart(A,k,Q),E=wt.get(Q),E.init(k),y.push(E),Q.traverseVisible(function(q){q.isLight&&q.layers.test(k.layers)&&(E.pushLight(q),q.castShadow&&E.pushShadow(q))}),A!==Q&&A.traverseVisible(function(q){q.isLight&&q.layers.test(k.layers)&&(E.pushLight(q),q.castShadow&&E.pushShadow(q))}),E.setupLights(),N!==null&&N.updateLights(E.state.lightsArray),dt=this.localClippingEnabled,rt=Xt.init(this.clippingPlanes,dt),rt===!0&&Xt.setGlobalState(this.clippingPlanes,k),N!==null&&ee.render(E.state.shadowsArray,Q,k);const Y=new Set;return A.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const It=q.material;if(It)if(Array.isArray(It))for(let Bt=0;Bt<It.length;Bt++){const Pt=It[Bt];Yu(Pt,Q,k,q),Y.add(Pt)}else Yu(It,Q,k,q),Y.add(It)}),E=y.pop(),N!==null&&N.renderEnd(),Y},this.compileAsync=function(A,k,Q=null){const Y=this.compile(A,k,Q);return new Promise(q=>{function It(){if(Y.forEach(function(Bt){const Gt=F.get(Bt).currentProgram;(Gt===void 0||Gt.isReady())&&Y.delete(Bt)}),Y.size===0){q(A);return}setTimeout(It,10)}se.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let Wc=null;function i0(A){Wc&&Wc(A)}function qu(){ss.stop()}function Zu(){ss.start()}const ss=new Fm;ss.setAnimationLoop(i0),typeof self<"u"&&ss.setContext(self),this.setAnimationLoop=function(A){Wc=A,Yt.setAnimationLoop(A),A===null?ss.stop():ss.start()},Yt.addEventListener("sessionstart",qu),Yt.addEventListener("sessionend",Zu),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){Kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;N!==null&&N.renderStart(A,k);const Q=Yt.enabled===!0&&Yt.isPresenting===!0,Y=T!==null&&(nt===null||Q)&&T.begin(I,nt);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Yt.enabled===!0&&Yt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Yt.cameraAutoUpdate===!0&&Yt.updateCamera(k),k=Yt.getCamera()),A.isScene===!0&&A.onBeforeRender(I,A,k,nt),E=wt.get(A,y.length),E.init(k),E.state.textureUnits=Z.getTextureUnits(),y.push(E),ht.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),K.setFromProjectionMatrix(ht,Dn,k.reversedDepth),dt=this.localClippingEnabled,rt=Xt.init(this.clippingPlanes,dt),b=bt.get(A,R.length),b.init(),R.push(b),Yt.enabled===!0&&Yt.isPresenting===!0){const Bt=I.xr.getDepthSensingMesh();Bt!==null&&Xc(Bt,k,-1/0,I.sortObjects)}Xc(A,k,0,I.sortObjects),b.finish(),N!==null&&N.updateLights(E.state.lightsArray),I.sortObjects===!0&&b.sort(ut,xt),kt=Yt.enabled===!1||Yt.isPresenting===!1||Yt.hasDepthSensing()===!1,kt&&oe.addToRenderList(b,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),rt===!0&&Xt.beginShadows();const q=E.state.shadowsArray;if(ee.render(q,A,k),rt===!0&&Xt.endShadows(),(Y&&T.hasRenderPass())===!1){const Bt=b.opaque,Pt=b.transmissive;if(E.setupLights(),k.isArrayCamera){const Gt=k.cameras;if(Pt.length>0)for(let Zt=0,ce=Gt.length;Zt<ce;Zt++){const de=Gt[Zt];$u(Bt,Pt,A,de)}kt&&oe.render(A);for(let Zt=0,ce=Gt.length;Zt<ce;Zt++){const de=Gt[Zt];Ku(b,A,de,de.viewport)}}else Pt.length>0&&$u(Bt,Pt,A,k),kt&&oe.render(A),Ku(b,A,k)}nt!==null&&V===0&&(Z.updateMultisampleRenderTarget(nt),Z.updateRenderTargetMipmap(nt)),Y&&T.end(I),A.isScene===!0&&A.onAfterRender(I,A,k),Lt.resetDefaultState(),B=-1,X=null,y.pop(),y.length>0?(E=y[y.length-1],Z.setTextureUnits(E.state.textureUnits),rt===!0&&Xt.setGlobalState(I.clippingPlanes,E.state.camera)):E=null,R.pop(),R.length>0?b=R[R.length-1]:b=null,N!==null&&N.renderEnd()};function Xc(A,k,Q,Y){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)Q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLightProbeGrid)E.pushLightProbeGrid(A);else if(A.isLight)E.pushLight(A),A.castShadow&&E.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(K)){Y&&Nt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ht);const Bt=lt.update(A),Pt=A.material;Pt.visible&&b.push(A,Bt,Pt,Q,Nt.z,null,k)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(K))){const Bt=lt.update(A),Pt=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Nt.copy(A.boundingSphere.center)):(Bt.boundingSphere===null&&Bt.computeBoundingSphere(),Nt.copy(Bt.boundingSphere.center)),Nt.applyMatrix4(A.matrixWorld).applyMatrix4(ht)),Array.isArray(Pt)){const Gt=Bt.groups;for(let Zt=0,ce=Gt.length;Zt<ce;Zt++){const de=Gt[Zt],Ht=Pt[de.materialIndex];Ht&&Ht.visible&&b.push(A,Bt,Ht,Q,Nt.z,de,k)}}else Pt.visible&&b.push(A,Bt,Pt,Q,Nt.z,null,k)}}const It=A.children;for(let Bt=0,Pt=It.length;Bt<Pt;Bt++)Xc(It[Bt],k,Q,Y)}function Ku(A,k,Q,Y){const{opaque:q,transmissive:It,transparent:Bt}=A;E.setupLightsView(Q),rt===!0&&Xt.setGlobalState(I.clippingPlanes,Q),Y&&w.viewport($.copy(Y)),q.length>0&&Ko(q,k,Q),It.length>0&&Ko(It,k,Q),Bt.length>0&&Ko(Bt,k,Q),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function $u(A,k,Q,Y){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[Y.id]===void 0){const Ht=se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[Y.id]=new He(1,1,{generateMipmaps:!0,type:Ht?an:dn,minFilter:fi,samples:Math.max(4,P.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:he.workingColorSpace})}const It=E.state.transmissionRenderTarget[Y.id],Bt=Y.viewport||$;It.setSize(Bt.z*I.transmissionResolutionScale,Bt.w*I.transmissionResolutionScale);const Pt=I.getRenderTarget(),Gt=I.getActiveCubeFace(),Zt=I.getActiveMipmapLevel();I.setRenderTarget(It),I.getClearColor(zt),Wt=I.getClearAlpha(),Wt<1&&I.setClearColor(16777215,.5),I.clear(),kt&&oe.render(Q);const ce=I.toneMapping;I.toneMapping=ei;const de=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),E.setupLightsView(Y),rt===!0&&Xt.setGlobalState(I.clippingPlanes,Y),Ko(A,Q,Y),Z.updateMultisampleRenderTarget(It),Z.updateRenderTargetMipmap(It),se.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let ve=0,Be=k.length;ve<Be;ve++){const Ae=k[ve],{object:we,geometry:en,material:Ft,group:ln}=Ae;if(Ft.side===$n&&we.layers.test(Y.layers)){const pe=Ft.side;Ft.side=on,Ft.needsUpdate=!0,Ju(we,Q,Y,en,Ft,ln),Ft.side=pe,Ft.needsUpdate=!0,Ht=!0}}Ht===!0&&(Z.updateMultisampleRenderTarget(It),Z.updateRenderTargetMipmap(It))}I.setRenderTarget(Pt,Gt,Zt),I.setClearColor(zt,Wt),de!==void 0&&(Y.viewport=de),I.toneMapping=ce}function Ko(A,k,Q){const Y=k.isScene===!0?k.overrideMaterial:null;for(let q=0,It=A.length;q<It;q++){const Bt=A[q],{object:Pt,geometry:Gt,group:Zt}=Bt;let ce=Bt.material;ce.allowOverride===!0&&Y!==null&&(ce=Y),Pt.layers.test(Q.layers)&&Ju(Pt,k,Q,Gt,ce,Zt)}}function Ju(A,k,Q,Y,q,It){N!==null&&q.isNodeMaterial&&N.setObject(A,q),A.onBeforeRender(I,k,Q,Y,q,It),A.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),q.onBeforeRender(I,k,Q,Y,A,It),q.transparent===!0&&q.side===$n&&q.forceSinglePass===!1?(q.side=on,q.needsUpdate=!0,I.renderBufferDirect(Q,k,Y,q,A,It),q.side=Ji,q.needsUpdate=!0,I.renderBufferDirect(Q,k,Y,q,A,It),q.side=$n):I.renderBufferDirect(Q,k,Y,q,A,It),A.onAfterRender(I,k,Q,Y,q,It)}function $o(A,k,Q){k.isScene!==!0&&(k=Tt);const Y=F.get(A),q=E.state.lights,It=E.state.shadowsArray,Bt=q.state.version,Pt=St.getParameters(A,q.state,It,k,Q,E.state.lightProbeGridArray),Gt=St.getProgramCacheKey(Pt);let Zt=Y.programs;Y.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?k.environment:null,Y.fog=k.fog;const ce=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;Y.envMap=ot.get(A.envMap||Y.environment,ce),Y.envMapRotation=Y.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,Zt===void 0&&(A.addEventListener("dispose",oi),Zt=new Map,Y.programs=Zt);let de=Zt.get(Gt);if(de!==void 0){if(Y.currentProgram===de&&Y.lightsStateVersion===Bt)return Qu(A,Pt),de}else Pt.uniforms=St.getUniforms(A),N!==null&&A.isNodeMaterial&&N.build(A,Q,Pt),A.onBeforeCompile(Pt,I),de=St.acquireProgram(Pt,Gt),Zt.set(Gt,de),Y.uniforms=Pt.uniforms;const Ht=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ht.clippingPlanes=Xt.uniform),Qu(A,Pt),Y.needsLights=a0(A),Y.lightsStateVersion=Bt,Y.needsLights&&(Ht.ambientLightColor.value=q.state.ambient,Ht.lightProbe.value=q.state.probe,Ht.sunLights.value=q.state.sun,Ht.sunLightShadows.value=q.state.sunShadow,Ht.directionalLights.value=q.state.directional,Ht.directionalLightShadows.value=q.state.directionalShadow,Ht.spotLights.value=q.state.spot,Ht.spotLightShadows.value=q.state.spotShadow,Ht.rectAreaLights.value=q.state.rectArea,Ht.ltc_1.value=q.state.rectAreaLTC1,Ht.ltc_2.value=q.state.rectAreaLTC2,Ht.pointLights.value=q.state.point,Ht.pointLightShadows.value=q.state.pointShadow,Ht.hemisphereLights.value=q.state.hemi,Ht.sunShadowMatrix.value=q.state.sunShadowMatrix,Ht.sunShadowCascade.value=q.state.sunShadowCascade,Ht.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ht.spotLightMatrix.value=q.state.spotLightMatrix,Ht.spotLightMap.value=q.state.spotLightMap,Ht.pointShadowMatrix.value=q.state.pointShadowMatrix),Y.lightProbeGrid=E.state.lightProbeGridArray.length>0,Y.currentProgram=de,Y.uniformsList=null,de}function ju(A){if(A.uniformsList===null){const k=A.currentProgram.getUniforms();A.uniformsList=$a.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function Qu(A,k){const Q=F.get(A);Q.outputColorSpace=k.outputColorSpace,Q.batching=k.batching,Q.batchingColor=k.batchingColor,Q.instancing=k.instancing,Q.instancingColor=k.instancingColor,Q.instancingMorph=k.instancingMorph,Q.skinning=k.skinning,Q.morphTargets=k.morphTargets,Q.morphNormals=k.morphNormals,Q.morphColors=k.morphColors,Q.morphTargetsCount=k.morphTargetsCount,Q.numClippingPlanes=k.numClippingPlanes,Q.numIntersection=k.numClipIntersection,Q.vertexAlphas=k.vertexAlphas,Q.vertexTangents=k.vertexTangents,Q.toneMapping=k.toneMapping}function s0(A,k){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;v.setFromMatrixPosition(k.matrixWorld);for(let Q=0,Y=A.length;Q<Y;Q++){const q=A[Q];if(q.texture!==null&&q.boundingBox.containsPoint(v))return q}return null}function r0(A,k,Q,Y,q){k.isScene!==!0&&(k=Tt),Z.resetTextureUnits();const It=k.fog,Bt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?k.environment:null,Pt=nt===null?I.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:he.workingColorSpace,Gt=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Zt=ot.get(Y.envMap||Bt,Gt),ce=Y.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,de=!!Q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ht=!!Q.morphAttributes.position,ve=!!Q.morphAttributes.normal,Be=!!Q.morphAttributes.color;let Ae=ei;Y.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Ae=I.toneMapping);const we=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,en=we!==void 0?we.length:0,Ft=F.get(Y),ln=E.state.lights;if(rt===!0&&(dt===!0||A!==X)){const Te=A===X&&Y.id===B;Xt.setState(Y,A,Te)}let pe=!1;Y.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==ln.state.version||Ft.outputColorSpace!==Pt||q.isBatchedMesh&&Ft.batching===!1||!q.isBatchedMesh&&Ft.batching===!0||q.isBatchedMesh&&Ft.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&Ft.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&Ft.instancing===!1||!q.isInstancedMesh&&Ft.instancing===!0||q.isSkinnedMesh&&Ft.skinning===!1||!q.isSkinnedMesh&&Ft.skinning===!0||q.isInstancedMesh&&Ft.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ft.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ft.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ft.instancingMorph===!1&&q.morphTexture!==null||Ft.envMap!==Zt||Y.fog===!0&&Ft.fog!==It||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==Xt.numPlanes||Ft.numIntersection!==Xt.numIntersection)||Ft.vertexAlphas!==ce||Ft.vertexTangents!==de||Ft.morphTargets!==Ht||Ft.morphNormals!==ve||Ft.morphColors!==Be||Ft.toneMapping!==Ae||Ft.morphTargetsCount!==en||!!Ft.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(pe=!0):(pe=!0,Ft.__version=Y.version);let On=Ft.currentProgram;pe===!0&&(On=$o(Y,k,q),N&&Y.isNodeMaterial&&N.onUpdateProgram(Y,On,Ft));let ai=!1,Fi=!1,Vs=!1;const Se=On.getUniforms(),Ne=Ft.uniforms;if(w.useProgram(On.program)&&(ai=!0,Fi=!0,Vs=!0),Y.id!==B&&(B=Y.id,Fi=!0),Ft.needsLights){const Te=s0(E.state.lightProbeGridArray,q);Ft.lightProbeGrid!==Te&&(Ft.lightProbeGrid=Te,Fi=!0)}if(ai||X!==A){w.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Se.setValue(O,"projectionMatrix",A.projectionMatrix),Se.setValue(O,"viewMatrix",A.matrixWorldInverse);const zi=Se.map.cameraPosition;zi!==void 0&&zi.setValue(O,vt.setFromMatrixPosition(A.matrixWorld)),P.logarithmicDepthBuffer&&Se.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Se.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),X!==A&&(X=A,Fi=!0,Vs=!0)}if(Ft.needsLights&&(ln.state.sunShadowMap.length>0&&Se.setValue(O,"sunShadowMap",ln.state.sunShadowMap,Z),ln.state.directionalShadowMap.length>0&&Se.setValue(O,"directionalShadowMap",ln.state.directionalShadowMap,Z),ln.state.spotShadowMap.length>0&&Se.setValue(O,"spotShadowMap",ln.state.spotShadowMap,Z),ln.state.pointShadowMap.length>0&&Se.setValue(O,"pointShadowMap",ln.state.pointShadowMap,Z)),q.isSkinnedMesh){Se.setOptional(O,q,"bindMatrix"),Se.setOptional(O,q,"bindMatrixInverse");const Te=q.skeleton;Te&&(Te.boneTexture===null&&Te.computeBoneTexture(),Se.setValue(O,"boneTexture",Te.boneTexture,Z))}q.isBatchedMesh&&(Se.setOptional(O,q,"batchingTexture"),Se.setValue(O,"batchingTexture",q._matricesTexture,Z),Se.setOptional(O,q,"batchingIdTexture"),Se.setValue(O,"batchingIdTexture",q._indirectTexture,Z),Se.setOptional(O,q,"batchingColorTexture"),q._colorsTexture!==null&&Se.setValue(O,"batchingColorTexture",q._colorsTexture,Z));const Bi=Q.morphAttributes;if((Bi.position!==void 0||Bi.normal!==void 0||Bi.color!==void 0)&&H.update(q,Q,On),(Fi||Ft.receiveShadow!==q.receiveShadow)&&(Ft.receiveShadow=q.receiveShadow,Se.setValue(O,"receiveShadow",q.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&k.environment!==null&&(Ne.envMapIntensity.value=k.environmentIntensity),Ne.dfgLUT!==void 0&&(Ne.dfgLUT.value=tb()),Fi){if(Se.setValue(O,"toneMappingExposure",I.toneMappingExposure),Ft.needsLights&&o0(Ne,Vs),It&&Y.fog===!0&&Vt.refreshFogUniforms(Ne,It),Vt.refreshMaterialUniforms(Ne,Y,et,J,E.state.transmissionRenderTarget[A.id]),Ft.needsLights&&Ft.lightProbeGrid){const Te=Ft.lightProbeGrid;Ne.probesSH.value=Te.texture,Ne.probesMin.value.copy(Te.boundingBox.min),Ne.probesMax.value.copy(Te.boundingBox.max),Ne.probesResolution.value.copy(Te.resolution)}$a.upload(O,ju(Ft),Ne,Z)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&($a.upload(O,ju(Ft),Ne,Z),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Se.setValue(O,"center",q.center),Se.setValue(O,"modelViewMatrix",q.modelViewMatrix),Se.setValue(O,"normalMatrix",q.normalMatrix),Se.setValue(O,"modelMatrix",q.matrixWorld),Y.uniformsGroups!==void 0){const Te=Y.uniformsGroups;for(let zi=0,Gs=Te.length;zi<Gs;zi++){const ef=Te[zi];ft.update(ef,On),ft.bind(ef,On)}}return On}function o0(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.sunLights.needsUpdate=k,A.sunLightShadows.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function a0(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(A,k,Q){const Y=F.get(A);Y.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),F.get(A.texture).__webglTexture=k,F.get(A.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:Q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,k){const Q=F.get(A);Q.__webglFramebuffer=k,Q.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,Q=0){nt=A,W=k,V=Q;let Y=null,q=!1,It=!1;if(A){const Pt=F.get(A);if(Pt.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(O.FRAMEBUFFER,Pt.__webglFramebuffer),$.copy(A.viewport),gt.copy(A.scissor),mt=A.scissorTest,w.viewport($),w.scissor(gt),w.setScissorTest(mt),B=-1;return}else if(Pt.__webglFramebuffer===void 0)Z.setupRenderTarget(A);else if(Pt.__hasExternalTextures)Z.rebindTextures(A,F.get(A.texture).__webglTexture,F.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ce=A.depthTexture;if(Pt.__boundDepthTexture!==ce){if(ce!==null&&F.has(ce)&&(A.width!==ce.image.width||A.height!==ce.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(A)}}const Gt=A.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(It=!0);const Zt=F.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Zt[k])?Y=Zt[k][Q]:Y=Zt[k],q=!0):A.samples>0&&Z.useMultisampledRTT(A)===!1?Y=F.get(A).__webglMultisampledFramebuffer:Array.isArray(Zt)?Y=Zt[Q]:Y=Zt,$.copy(A.viewport),gt.copy(A.scissor),mt=A.scissorTest}else $.copy(st).multiplyScalar(et).floor(),gt.copy(Mt).multiplyScalar(et).floor(),mt=qt;if(Q!==0&&(Y=G),w.bindFramebuffer(O.FRAMEBUFFER,Y)&&w.drawBuffers(A,Y),w.viewport($),w.scissor(gt),w.setScissorTest(mt),q){const Pt=F.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+k,Pt.__webglTexture,Q)}else if(It){const Pt=k;for(let Gt=0;Gt<A.textures.length;Gt++){const Zt=F.get(A.textures[Gt]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Gt,Zt.__webglTexture,Q,Pt)}}else if(A!==null&&Q!==0){const Pt=F.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Pt.__webglTexture,Q)}B=-1};function tf(A){const k=F.get(A);return(k.__readFormat!==A.format||k.__readType!==A.type)&&(k.__readFormat=A.format,k.__readType=A.type,k.__formatReadable=P.textureFormatReadable(A.format),k.__typeReadable=P.textureTypeReadable(A.type)),k}this.readRenderTargetPixels=function(A,k,Q,Y,q,It,Bt,Pt=0){if(!(A&&A.isWebGLRenderTarget)){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=F.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Bt!==void 0&&(Gt=Gt[Bt]),Gt){w.bindFramebuffer(O.FRAMEBUFFER,Gt);try{const Zt=A.textures[Pt],ce=Zt.format,de=Zt.type;A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Pt);const Ht=tf(Zt);if(Ht.__formatReadable===!1){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ht.__typeReadable===!1){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-Y&&Q>=0&&Q<=A.height-q&&O.readPixels(k,Q,Y,q,Rt.convert(ce),Rt.convert(de),It)}finally{const Zt=nt!==null?F.get(nt).__webglFramebuffer:null;w.bindFramebuffer(O.FRAMEBUFFER,Zt)}}},this.readRenderTargetPixelsAsync=async function(A,k,Q,Y,q,It,Bt,Pt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Gt=F.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Bt!==void 0&&(Gt=Gt[Bt]),Gt)if(k>=0&&k<=A.width-Y&&Q>=0&&Q<=A.height-q){w.bindFramebuffer(O.FRAMEBUFFER,Gt);const Zt=A.textures[Pt],ce=Zt.format,de=Zt.type;A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Pt);const Ht=tf(Zt);if(Ht.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ht.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ve=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ve),O.bufferData(O.PIXEL_PACK_BUFFER,It.byteLength,O.STREAM_READ),O.readPixels(k,Q,Y,q,Rt.convert(ce),Rt.convert(de),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);const Be=nt!==null?F.get(nt).__webglFramebuffer:null;w.bindFramebuffer(O.FRAMEBUFFER,Be);const Ae=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await ig(O,Ae,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ve),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,It),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(ve),O.deleteSync(Ae),It}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,k=null,Q=0){const Y=Math.pow(2,-Q),q=Math.floor(A.image.width*Y),It=Math.floor(A.image.height*Y),Bt=k!==null?k.x:0,Pt=k!==null?k.y:0;Z.setTexture2D(A,0),O.copyTexSubImage2D(O.TEXTURE_2D,Q,0,0,Bt,Pt,q,It),w.unbindTexture()},this.copyTextureToTexture=function(A,k,Q=null,Y=null,q=0,It=0){let Bt,Pt,Gt,Zt,ce,de,Ht,ve,Be;const Ae=A.isCompressedTexture?A.mipmaps[It]:A.image;if(Q!==null)Bt=Q.max.x-Q.min.x,Pt=Q.max.y-Q.min.y,Gt=Q.isBox3?Q.max.z-Q.min.z:1,Zt=Q.min.x,ce=Q.min.y,de=Q.isBox3?Q.min.z:0;else{const Ne=Math.pow(2,-q);Bt=Math.floor(Ae.width*Ne),Pt=Math.floor(Ae.height*Ne),A.isDataArrayTexture?Gt=Ae.depth:A.isData3DTexture?Gt=Math.floor(Ae.depth*Ne):Gt=1,Zt=0,ce=0,de=0}Y!==null?(Ht=Y.x,ve=Y.y,Be=Y.z):(Ht=0,ve=0,Be=0);const we=Rt.convert(k.format),en=Rt.convert(k.type);let Ft;k.isData3DTexture?(Z.setTexture3D(k,0),Ft=O.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(Z.setTexture2DArray(k,0),Ft=O.TEXTURE_2D_ARRAY):(Z.setTexture2D(k,0),Ft=O.TEXTURE_2D),w.activeTexture(O.TEXTURE0),w.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,k.flipY),w.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),w.pixelStorei(O.UNPACK_ALIGNMENT,k.unpackAlignment);const ln=w.getParameter(O.UNPACK_ROW_LENGTH),pe=w.getParameter(O.UNPACK_IMAGE_HEIGHT),On=w.getParameter(O.UNPACK_SKIP_PIXELS),ai=w.getParameter(O.UNPACK_SKIP_ROWS),Fi=w.getParameter(O.UNPACK_SKIP_IMAGES);w.pixelStorei(O.UNPACK_ROW_LENGTH,Ae.width),w.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ae.height),w.pixelStorei(O.UNPACK_SKIP_PIXELS,Zt),w.pixelStorei(O.UNPACK_SKIP_ROWS,ce),w.pixelStorei(O.UNPACK_SKIP_IMAGES,de);const Vs=A.isDataArrayTexture||A.isData3DTexture,Se=k.isDataArrayTexture||k.isData3DTexture;if(A.isDepthTexture){const Ne=F.get(A),Bi=F.get(k),Te=F.get(Ne.__renderTarget),zi=F.get(Bi.__renderTarget);w.bindFramebuffer(O.READ_FRAMEBUFFER,Te.__webglFramebuffer),w.bindFramebuffer(O.DRAW_FRAMEBUFFER,zi.__webglFramebuffer);for(let Gs=0;Gs<Gt;Gs++)Vs&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,F.get(A).__webglTexture,q,de+Gs),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,F.get(k).__webglTexture,It,Be+Gs)),O.blitFramebuffer(Zt,ce,Bt,Pt,Ht,ve,Bt,Pt,O.DEPTH_BUFFER_BIT,O.NEAREST);w.bindFramebuffer(O.READ_FRAMEBUFFER,null),w.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(q!==0||A.isRenderTargetTexture||F.has(A)){const Ne=F.get(A),Bi=F.get(k);w.bindFramebuffer(O.READ_FRAMEBUFFER,U),w.bindFramebuffer(O.DRAW_FRAMEBUFFER,z);for(let Te=0;Te<Gt;Te++)Vs?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ne.__webglTexture,q,de+Te):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ne.__webglTexture,q),Se?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Bi.__webglTexture,It,Be+Te):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Bi.__webglTexture,It),q!==0?O.blitFramebuffer(Zt,ce,Bt,Pt,Ht,ve,Bt,Pt,O.COLOR_BUFFER_BIT,O.NEAREST):Se?O.copyTexSubImage3D(Ft,It,Ht,ve,Be+Te,Zt,ce,Bt,Pt):O.copyTexSubImage2D(Ft,It,Ht,ve,Zt,ce,Bt,Pt);w.bindFramebuffer(O.READ_FRAMEBUFFER,null),w.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Se?A.isDataTexture||A.isData3DTexture?O.texSubImage3D(Ft,It,Ht,ve,Be,Bt,Pt,Gt,we,en,Ae.data):k.isCompressedArrayTexture?O.compressedTexSubImage3D(Ft,It,Ht,ve,Be,Bt,Pt,Gt,we,Ae.data):O.texSubImage3D(Ft,It,Ht,ve,Be,Bt,Pt,Gt,we,en,Ae):A.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,It,Ht,ve,Bt,Pt,we,en,Ae.data):A.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,It,Ht,ve,Ae.width,Ae.height,we,Ae.data):O.texSubImage2D(O.TEXTURE_2D,It,Ht,ve,Bt,Pt,we,en,Ae);w.pixelStorei(O.UNPACK_ROW_LENGTH,ln),w.pixelStorei(O.UNPACK_IMAGE_HEIGHT,pe),w.pixelStorei(O.UNPACK_SKIP_PIXELS,On),w.pixelStorei(O.UNPACK_SKIP_ROWS,ai),w.pixelStorei(O.UNPACK_SKIP_IMAGES,Fi),It===0&&k.generateMipmaps&&O.generateMipmap(Ft),w.unbindTexture()},this.initRenderTarget=function(A){F.get(A).__webglFramebuffer===void 0&&Z.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Z.setTextureCube(A,0):A.isData3DTexture?Z.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Z.setTexture2DArray(A,0):Z.setTexture2D(A,0),w.unbindTexture()},this.resetState=function(){W=0,V=0,nt=null,w.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}}const eb=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:zo,AddEquation:Ss,AddOperation:Sp,AdditiveAnimationBlendMode:fu,AdditiveBlending:Cs,AgXToneMapping:tc,AlphaFormat:hu,AlwaysCompare:Op,AlwaysDepth:il,AlwaysStencilFunc:Cp,AmbientLight:wm,AnimationAction:Dm,AnimationClip:No,AnimationLoader:j_,AnimationMixer:Rx,AnimationObjectGroup:Tx,AnimationUtils:Y_,ArcCurve:$p,ArrayCamera:Pm,ArrowHelper:jx,AttachedBindMode:kh,Audio:Im,AudioAnalyser:gx,AudioContext:Uu,AudioListener:dx,AudioLoader:cx,AxesHelper:Qx,BackSide:on,BasicDepthPacking:Ap,BasicShadowMap:c0,BatchedMesh:Xp,BezierInterpolant:xm,Bone:vu,BooleanKeyframeTrack:zs,Box2:Nm,Box3:$e,Box3Helper:$x,BoxGeometry:_n,BoxHelper:Kx,BufferAttribute:be,BufferGeometry:te,BufferGeometryLoader:Rm,ByteType:ou,Cache:di,Camera:Bc,CameraHelper:Zx,CanvasTexture:u_,CapsuleGeometry:Mc,CatmullRomCurve3:Jp,CineonToneMapping:jl,CircleGeometry:Sc,ClampToEdgeWrapping:En,Clock:Ox,Color:pt,ColorKeyframeTrack:Iu,ColorManagement:he,Compatibility:J0,CompressedArrayTexture:c_,CompressedCubeTexture:h_,CompressedTexture:yc,CompressedTextureLoader:Q_,ConeGeometry:Wo,ConstantAlphaFactor:vp,ConstantColorFactor:_p,Controls:Um,CubeCamera:Cm,CubeDepthTexture:Zp,CubeReflectionMapping:pi,CubeRefractionMapping:ji,CubeTexture:Go,CubeTextureLoader:tx,CubeUVReflectionMapping:Lr,CubicBezierCurve:bu,CubicBezierCurve3:jp,CubicInterpolant:gm,CullFaceBack:Fh,CullFaceFront:ep,CullFaceFrontBack:l0,CullFaceNone:tp,Curve:ri,CurvePath:tm,CustomBlending:ip,CustomToneMapping:Ql,CylinderGeometry:Ho,Cylindrical:Ux,Data3DTexture:pc,DataArrayTexture:dc,DataTexture:zn,DataTextureLoader:ex,DataUtils:Og,DecrementStencilOp:R0,DecrementWrapStencilOp:P0,DefaultLoadingManager:Mm,DepthFormat:mi,DepthStencilFormat:Zi,DepthTexture:Tr,DetachedBindMode:bp,DirectionalLight:Hl,DirectionalLightHelper:qx,DiscreteInterpolant:_m,DodecahedronGeometry:bc,DoubleSide:$n,DstAlphaFactor:fp,DstColorFactor:pp,DynamicCopyUsage:X0,DynamicDrawUsage:z0,DynamicReadUsage:G0,EdgesGeometry:Kp,EllipseCurve:wc,EqualCompare:Lp,EqualDepth:rl,EqualStencilFunc:N0,EquirectangularReflectionMapping:ao,EquirectangularRefractionMapping:lo,Euler:ii,EventDispatcher:si,ExternalTexture:Mu,ExtrudeGeometry:Ec,FileLoader:Ni,Float16BufferAttribute:Gg,Float32BufferAttribute:yt,FloatType:mn,Fog:gc,FogExp2:Vo,FramebufferTexture:l_,FrontSide:Ji,Frustum:Ls,FrustumArray:vc,GLBufferAttribute:Dx,GLSL1:q0,GLSL3:Gh,GreaterCompare:Dp,GreaterDepth:al,GreaterEqualCompare:uc,GreaterEqualDepth:ol,GreaterEqualStencilFunc:B0,GreaterStencilFunc:U0,GridHelper:Xx,Group:Jn,HTMLTexture:f_,HalfFloatType:an,HemisphereLight:Nu,HemisphereLightHelper:Wx,IcosahedronGeometry:Tc,ImageBitmapLoader:lx,ImageLoader:Oo,ImageUtils:zp,IncrementStencilOp:A0,IncrementWrapStencilOp:C0,InstancedBufferAttribute:Er,InstancedBufferGeometry:Am,InstancedInterleavedBuffer:Lx,InstancedMesh:jn,Int16BufferAttribute:kg,Int32BufferAttribute:Vg,Int8BufferAttribute:Fg,IntType:ic,InterleavedBuffer:_c,InterleavedBufferAttribute:Is,Interpolant:Or,InterpolateBezier:Vh,InterpolateDiscrete:wo,InterpolateLinear:zl,InterpolateSmooth:qa,InterpolationSamplingMode:$0,InterpolationSamplingType:K0,InvertStencilOp:I0,KeepStencilOp:Za,KeyframeTrack:Vn,LOD:Hp,LatheGeometry:Ac,Layers:mc,LessCompare:Ip,LessDepth:sl,LessEqualCompare:hc,LessEqualDepth:Mr,LessEqualStencilFunc:O0,LessStencilFunc:D0,Light:is,LightProbe:Tm,LightShadow:Fc,Line:es,Line3:zx,LineBasicMaterial:xn,LineCurve:wu,LineCurve3:Qp,LineDashedMaterial:dm,LineLoop:Yp,LineSegments:xi,LinearFilter:Re,LinearInterpolant:Pu,LinearMipMapLinearFilter:p0,LinearMipMapNearestFilter:d0,LinearMipmapLinearFilter:fi,LinearMipmapNearestFilter:co,LinearSRGBColorSpace:To,LinearToneMapping:$l,LinearTransfer:Ao,Loader:Rn,LoaderUtils:qh,LoadingManager:Du,LoopOnce:wp,LoopPingPong:Tp,LoopRepeat:Ep,MOUSE:Ts,Material:tn,MaterialBlending:h0,MaterialLoader:zc,MathUtils:fn,Matrix2:Vu,Matrix3:re,Matrix4:ie,MaxEquation:ap,Mesh:Pe,MeshBasicMaterial:_i,MeshDepthMaterial:Ru,MeshDistanceMaterial:Cu,MeshLambertMaterial:Rs,MeshMatcapMaterial:fm,MeshNormalMaterial:um,MeshPhongMaterial:cm,MeshPhysicalMaterial:lm,MeshStandardMaterial:qo,MeshToonMaterial:hm,MinEquation:op,MirroredRepeatWrapping:Mo,MixOperation:Mp,MultiplyBlending:zh,MultiplyOperation:Bo,NearestFilter:Fe,NearestMipMapLinearFilter:f0,NearestMipMapNearestFilter:u0,NearestMipmapLinearFilter:mr,NearestMipmapNearestFilter:ru,NeutralToneMapping:ec,NeverCompare:Pp,NeverDepth:nl,NeverStencilFunc:L0,NoBlending:ti,NoColorSpace:Ti,NoNormalPacking:S0,NoToneMapping:ei,NormalAnimationBlendMode:cc,NormalBlending:vr,NormalGAPacking:w0,NormalRGPacking:b0,NotEqualCompare:Np,NotEqualDepth:ll,NotEqualStencilFunc:F0,NumberKeyframeTrack:Oc,Object3D:ue,ObjectLoader:ox,ObjectSpaceNormalMap:Rp,OctahedronGeometry:Yo,OneFactor:cp,OneMinusConstantAlphaFactor:yp,OneMinusConstantColorFactor:xp,OneMinusDstAlphaFactor:dp,OneMinusDstColorFactor:mp,OneMinusSrcAlphaFactor:su,OneMinusSrcColorFactor:up,OrthographicCamera:Ur,PCFShadowMap:xr,PCFSoftShadowMap:np,PMREMGenerator:Jh,Path:Po,PerspectiveCamera:Ke,Plane:ui,PlaneGeometry:Dr,PlaneHelper:Jx,PointLight:bm,PointLightHelper:Gx,Points:Bs,PointsMaterial:yu,PolarGridHelper:Yx,PolyhedronGeometry:ns,PositionalAudio:mx,PropertyBinding:me,PropertyMixer:Lm,QuadraticBezierCurve:Eu,QuadraticBezierCurve3:Tu,Quaternion:Qe,QuaternionKeyframeTrack:Uc,QuaternionLinearInterpolant:ym,R11_EAC_Format:gl,RED_GREEN_RGTC2_Format:bo,RED_RGTC1_Format:Ul,REVISION:Kl,RG11_EAC_Format:So,RGBADepthPacking:v0,RGBAFormat:gn,RGBAIntegerFormat:lc,RGBA_ASTC_10x10_Format:Pl,RGBA_ASTC_10x5_Format:Al,RGBA_ASTC_10x6_Format:Rl,RGBA_ASTC_10x8_Format:Cl,RGBA_ASTC_12x10_Format:Il,RGBA_ASTC_12x12_Format:Ll,RGBA_ASTC_4x4_Format:vl,RGBA_ASTC_5x4_Format:yl,RGBA_ASTC_5x5_Format:Ml,RGBA_ASTC_6x5_Format:Sl,RGBA_ASTC_6x6_Format:bl,RGBA_ASTC_8x5_Format:wl,RGBA_ASTC_8x6_Format:El,RGBA_ASTC_8x8_Format:Tl,RGBA_BPTC_Format:Dl,RGBA_ETC2_EAC_Format:ml,RGBA_PVRTC_2BPPV1_Format:fl,RGBA_PVRTC_4BPPV1_Format:ul,RGBA_S3TC_DXT1_Format:uo,RGBA_S3TC_DXT3_Format:fo,RGBA_S3TC_DXT5_Format:po,RGBDepthPacking:y0,RGBFormat:uu,RGBIntegerFormat:m0,RGB_BPTC_SIGNED_Format:Nl,RGB_BPTC_UNSIGNED_Format:Ol,RGB_ETC1_Format:dl,RGB_ETC2_Format:pl,RGB_PVRTC_2BPPV1_Format:hl,RGB_PVRTC_4BPPV1_Format:cl,RGB_S3TC_DXT1_Format:ho,RGDepthPacking:M0,RGFormat:Qi,RGIntegerFormat:ac,RawShaderMaterial:Nc,Ray:Fs,Raycaster:Nx,RectAreaLight:Em,RedFormat:oc,RedIntegerFormat:ko,ReinhardToneMapping:Jl,RenderObjectRefreshType:j0,RenderTarget:pu,RenderTarget3D:Cx,RepeatWrapping:yo,ReplaceStencilOp:T0,ReverseSubtractEquation:rp,RingGeometry:Rc,SIGNED_R11_EAC_Format:_l,SIGNED_RED_GREEN_RGTC2_Format:Bl,SIGNED_RED_RGTC1_Format:Fl,SIGNED_RG11_EAC_Format:xl,SRGBColorSpace:Sn,SRGBTransfer:_e,Scene:mu,ShaderChunk:le,ShaderLib:Zn,ShaderMaterial:Ce,ShadowMaterial:om,Shape:Xo,ShapeGeometry:Cc,ShapePath:tv,ShapeUtils:Qn,ShortType:au,Skeleton:xc,SkeletonHelper:Vx,SkinnedMesh:Wp,Source:bg,Sphere:Je,SphereGeometry:Nr,Spherical:Kh,SphericalHarmonics3:Ou,SplineCurve:Au,SpotLight:Sm,SpotLightHelper:kx,Sprite:Gp,SpriteMaterial:xu,SrcAlphaFactor:iu,SrcAlphaSaturateFactor:gp,SrcColorFactor:hp,StaticCopyUsage:W0,StaticDrawUsage:fc,StaticReadUsage:V0,StereoCamera:hx,StreamCopyUsage:Y0,StreamDrawUsage:k0,StreamReadUsage:H0,StringKeyframeTrack:ks,SubtractEquation:sp,SubtractiveBlending:Bh,TOUCH:bs,TangentSpaceNormalMap:Di,TetrahedronGeometry:Pc,Texture:Le,TextureLoader:nx,TextureSource:Ci,TextureUtils:rv,Timer:Fu,TimestampQuery:Z0,TorusGeometry:Ic,TorusKnotGeometry:Lc,Triangle:wn,TriangleFanDrawMode:x0,TriangleStripDrawMode:_0,TrianglesDrawMode:g0,TubeGeometry:Dc,UVMapping:nc,Uint16BufferAttribute:gu,Uint32BufferAttribute:_u,Uint8BufferAttribute:Bg,Uint8ClampedBufferAttribute:zg,Uniform:ku,UniformsGroup:Ix,UniformsLib:Ct,UniformsUtils:Ns,UnsignedByteType:dn,UnsignedInt101111Type:cu,UnsignedInt248Type:br,UnsignedInt5999Type:lu,UnsignedIntType:kn,UnsignedShort4444Type:sc,UnsignedShort5551Type:rc,UnsignedShortType:Sr,VSMShadowMap:pr,Vector2:it,Vector3:C,Vector4:Me,VectorKeyframeTrack:Lu,VideoFrameTexture:a_,VideoTexture:qp,WebGL3DRenderTarget:Tg,WebGLArrayRenderTarget:Eg,WebGLCoordinateSystem:Dn,WebGLCubeRenderTarget:Gu,WebGLRenderTarget:He,WebGLRenderer:Xm,WebGLUtils:Hm,WebGPUCoordinateSystem:Ps,WebXRController:Ka,WireframeGeometry:rm,WrapAroundEnding:Eo,ZeroCurvatureEnding:ws,ZeroFactor:lp,ZeroSlopeEnding:Es,ZeroStencilOp:E0,createCanvasElement:Fp,error:Kt,getConsoleFunction:ng,log:Co,setConsoleFunction:eg,warn:Et,warnOnce:Ii},Symbol.toStringTag,{value:"Module"})),Od={type:"change"},Hu={type:"start"},Ym={type:"end"},Ga=new Fs,Ud=new ui,nb=Math.cos(70*fn.DEG2RAD),ke=new C,yn=2*Math.PI,ye={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Nh=1e-6;class ib extends Um{constructor(t,e=null){super(t,e),this.state=ye.NONE,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ts.ROTATE,MIDDLE:Ts.DOLLY,RIGHT:Ts.PAN},this.touches={ONE:bs.ROTATE,TWO:bs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new Qe,this._lastTargetPosition=new C,this._quat=new Qe().setFromUnitVectors(t.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Kh,this._sphericalDelta=new Kh,this._scale=1,this._panOffset=new C,this._rotateStart=new it,this._rotateEnd=new it,this._rotateDelta=new it,this._panStart=new it,this._panEnd=new it,this._panDelta=new it,this._dollyStart=new it,this._dollyEnd=new it,this._dollyDelta=new it,this._dollyDirection=new C,this._mouse=new it,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=rb.bind(this),this._onPointerDown=sb.bind(this),this._onPointerUp=ob.bind(this),this._onContextMenu=db.bind(this),this._onMouseWheel=cb.bind(this),this._onKeyDown=hb.bind(this),this._onTouchStart=ub.bind(this),this._onTouchMove=fb.bind(this),this._onMouseDown=ab.bind(this),this._onMouseMove=lb.bind(this),this._interceptControlDown=pb.bind(this),this._interceptControlUp=mb.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=ye.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Od),this.update(),this.state=ye.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;ke.copy(e).sub(this.target),ke.applyQuaternion(this._quat),this._spherical.setFromVector3(ke),this.autoRotate&&this.state===ye.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=yn:n>Math.PI&&(n-=yn),i<-Math.PI?i+=yn:i>Math.PI&&(i-=yn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(ke.setFromSpherical(this._spherical),ke.applyQuaternion(this._quatInverse),e.copy(this.target).add(ke),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=ke.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new C(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new C(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=ke.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Ga.origin.copy(this.object.position),Ga.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ga.direction))<nb?this.object.lookAt(this.target):(Ud.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ga.intersectPlane(Ud,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Nh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Nh||this._lastTargetPosition.distanceToSquared(this.target)>Nh?(this.dispatchEvent(Od),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?yn/60*this.autoRotateSpeed*t:yn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ke.setFromMatrixColumn(e,0),ke.multiplyScalar(-t),this._panOffset.add(ke)}_panUp(t,e){this.screenSpacePanning===!0?ke.setFromMatrixColumn(e,1):(ke.setFromMatrixColumn(e,0),ke.crossVectors(this.object.up,ke)),ke.multiplyScalar(t),this._panOffset.add(ke)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;ke.copy(i).sub(this.target);let r=ke.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(yn*this._rotateDelta.x/e.clientHeight),this._rotateUp(yn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(yn*this._rotateDelta.x/e.clientHeight),this._rotateUp(yn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new it,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function sb(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function rb(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function ob(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ym),this.state=ye.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function ab(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ts.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=ye.DOLLY;break;case Ts.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ye.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ye.ROTATE}break;case Ts.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ye.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ye.PAN}break;default:this.state=ye.NONE}this.state!==ye.NONE&&this.dispatchEvent(Hu)}function lb(s){switch(this.state){case ye.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case ye.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case ye.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function cb(s){this.enabled===!1||this.enableZoom===!1||this.state!==ye.NONE||(s.preventDefault(),this.dispatchEvent(Hu),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Ym))}function hb(s){this.enabled!==!1&&this._handleKeyDown(s)}function ub(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case bs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=ye.TOUCH_ROTATE;break;case bs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=ye.TOUCH_PAN;break;default:this.state=ye.NONE}break;case 2:switch(this.touches.TWO){case bs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=ye.TOUCH_DOLLY_PAN;break;case bs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=ye.TOUCH_DOLLY_ROTATE;break;default:this.state=ye.NONE}break;default:this.state=ye.NONE}this.state!==ye.NONE&&this.dispatchEvent(Hu)}function fb(s){switch(this._trackPointer(s),this.state){case ye.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case ye.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case ye.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case ye.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=ye.NONE}}function db(s){this.enabled!==!1&&s.preventDefault()}function pb(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function mb(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Ja={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Br{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const gb=new Ur(-1,1,1,-1,0,1);class _b extends te{constructor(){super(),this.setAttribute("position",new yt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new yt([0,2,0,0,2,0],2))}}const xb=new _b;class Wu{constructor(t){this._mesh=new Pe(xb,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,gb)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class vb extends Br{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Ce?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ns.clone(t.uniforms),this.material=new Ce({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Wu(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Fd extends Br{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class yb extends Br{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Mb{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new it);this._width=n.width,this._height=n.height,e=new He(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:an}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new vb(Ja),this.copyPass.material.blending=ti,this.timer=new Fu}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Fd!==void 0&&(o instanceof Fd?n=!0:o instanceof yb&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new it);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Sb extends Br{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new pt}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}}const bb={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new pt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Cr extends Br{constructor(t,e=1,n,i){super(),this.strength=e,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new it(t.x,t.y):new it(256,256),this.clearColor=new pt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new He(r,o,{type:an,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new He(r,o,{type:an,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const u=new He(r,o,{type:an,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),o=Math.round(o/2)}const a=bb;this.highPassUniforms=Ns.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ce({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new it(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ns.clone(Ja.uniforms),this.blendMaterial=new Ce({uniforms:this.copyUniforms,vertexShader:Ja.vertexShader,fragmentShader:Ja.fragmentShader,premultipliedAlpha:!0,blending:Cs,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new pt,this._oldClearAlpha=1,this._basic=new _i,this._fsQuad=new Wu(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new it(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Cr.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Cr.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){const e=[],n=t/3;for(let o=0;o<t;o++)e.push(.39894*Math.exp(-.5*o*o/(n*n))/n);const i=[],r=[];for(let o=1;o<t;o+=2){const a=e[o],l=o+1<t?e[o+1]:0,c=a+l;i.push((o*a+(o+1)*l)/c),r.push(c)}return new Ce({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new it(.5,.5)},direction:{value:new it(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:i},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new Ce({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}Cr.BlurDirectionX=new it(1,0);Cr.BlurDirectionY=new it(0,1);const Ha={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class wb extends Br{constructor(){super(),this.isOutputPass=!0,this.uniforms=Ns.clone(Ha.uniforms),this.material=new Nc({name:Ha.name,uniforms:this.uniforms,vertexShader:Ha.vertexShader,fragmentShader:Ha.fragmentShader}),this._fsQuad=new Wu(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},he.getTransfer(this._outputColorSpace)===_e&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===$l?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Jl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===jl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===zo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===tc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ec?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ql&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class qm{constructor(t,e,n){this.sx=t,this.sy=e,this.sz=n,this.data=new Uint8Array(t*e*n)}inside(t,e,n){return t>=0&&t<this.sx&&e>=0&&e<this.sy&&n>=0&&n<this.sz}index(t,e,n){return t+this.sx*(n+this.sz*e)}get(t,e,n){return t<0||t>=this.sx||e<0||e>=this.sy||n<0||n>=this.sz?0:this.data[t+this.sx*(n+this.sz*e)]}set(t,e,n,i){i!=null&&(t<0||t>=this.sx||e<0||e>=this.sy||n<0||n>=this.sz||(this.data[t+this.sx*(n+this.sz*e)]=i))}box(t,e,n,i,r,o,a){if(a==null)return;t>i&&([t,i]=[i,t]),e>r&&([e,r]=[r,e]),n>o&&([n,o]=[o,n]),t=Math.max(t,0),e=Math.max(e,0),n=Math.max(n,0),i=Math.min(i,this.sx-1),r=Math.min(r,this.sy-1),o=Math.min(o,this.sz-1);const{sx:l,sz:c,data:h}=this;for(let d=e;d<=r;d++)for(let u=n;u<=o;u++){const f=l*(u+c*d);for(let p=t;p<=i;p++)h[f+p]=a}}top(t,e){for(let n=this.sy-1;n>=0;n--)if(this.data[t+this.sx*(e+this.sz*n)])return n;return-1}countSolid(){let t=0;const e=this.data;for(let n=0;n<e.length;n++)e[n]&&t++;return t}}const hi={S:[1,0,0,1],E:[0,1,-1,0],N:[-1,0,0,-1],W:[0,-1,1,0]};class qe{constructor(t,e=0,n=0,i=0,r=hi.S){this.grid=t,this.ox=e,this.oy=n,this.oz=i,this.a=r[0],this.b=r[1],this.c=r[2],this.d=r[3]}child(t=0,e=0,n=0,i="S"){const r=hi[i],{a:o,b:a,c:l,d:c}=this;return new qe(this.grid,this.ox+o*t+a*n,this.oy+e,this.oz+l*t+c*n,[o*r[0]+a*r[2],o*r[1]+a*r[3],l*r[0]+c*r[2],l*r[1]+c*r[3]])}wx(t,e){return this.ox+this.a*t+this.b*e}wz(t,e){return this.oz+this.c*t+this.d*e}pos(t,e,n){return[this.wx(t,n),this.oy+e,this.wz(t,n)]}set(t,e,n,i){this.grid.set(this.ox+this.a*t+this.b*n,this.oy+e,this.oz+this.c*t+this.d*n,i)}get(t,e,n){return this.grid.get(this.ox+this.a*t+this.b*n,this.oy+e,this.oz+this.c*t+this.d*n)}box(t,e,n,i,r,o,a){const l=this.ox+this.a*t+this.b*n,c=this.oz+this.c*t+this.d*n,h=this.ox+this.a*i+this.b*o,d=this.oz+this.c*i+this.d*o;this.grid.box(l,this.oy+e,c,h,this.oy+r,d,a)}boxFn(t,e,n,i,r,o,a){t>i&&([t,i]=[i,t]),e>r&&([e,r]=[r,e]),n>o&&([n,o]=[o,n]);for(let l=e;l<=r;l++)for(let c=n;c<=o;c++)for(let h=t;h<=i;h++)this.set(h,l,c,a(h,l,c))}cyl(t,e,n,i,r,o){const a=(n+.35)*(n+.35),l=Math.ceil(n+1);for(let c=-l;c<=l;c++)for(let h=-l;h<=l;h++)if(h*h+c*c<=a)for(let d=i;d<=r;d++)this.set(t+h,d,e+c,o)}ball(t,e,n,i,r,o,a,l){const c=Math.ceil(i),h=Math.ceil(r),d=Math.ceil(o);for(let u=-h;u<=h;u++)for(let f=-d;f<=d;f++)for(let p=-c;p<=c;p++){const _=p*p/(i*i+.01)+u*u/(r*r+.01)+f*f/(o*o+.01);if(_<=1){const m=l?l(t+p,e+u,n+f,_):a;this.set(t+p,e+u,n+f,m===void 0?a:m)}}}model(t,e,n,i,r){const o=i.length;let a=0,l=0;for(const d of i){l=Math.max(l,d.length);for(const u of d)a=Math.max(a,u.length)}const c=Math.floor((a-1)/2),h=Math.floor((l-1)/2);for(let d=0;d<o;d++){const u=i[d];for(let f=0;f<u.length;f++){const p=u[f];for(let _=0;_<p.length;_++){const m=p[_];if(m==="."||m===" ")continue;const g=r[m];g!==void 0&&this.set(t+_-c,e+d,n+f-h,g)}}}}}const Uo=[],x={};function ct(s,t,e={}){Uo.push({name:s,hex:t,j:e.j??.045,glow:e.glow??0,gloss:e.gloss??0}),x[s]=Uo.length}ct("MARBLE","#dedacd",{j:.025,gloss:.2});ct("MARBLE2","#cbc6b8",{j:.03,gloss:.15});ct("STONE","#b3aea0");ct("STONE2","#9d998c");ct("STONE_D","#7c786f");ct("STONE_DD","#5e5b54");ct("PAVE1","#aaa598",{j:.03});ct("PAVE2","#a09b8e",{j:.03});ct("PAVE_J","#7d796d",{j:.03});ct("SLAB1","#d0cbbc",{j:.025});ct("SLAB2","#c1bcac",{j:.025});ct("BRICK","#7e8487");ct("BRICK2","#70767a");ct("BRICK_D","#565b5f");ct("GRASS1","#679a3f",{j:.06});ct("GRASS2","#76a749",{j:.06});ct("GRASS3","#5a8b36",{j:.06});ct("GRASS4","#8fb04d",{j:.06});ct("GRASS_D","#4a7a30",{j:.05});ct("DIRT","#8b6a47",{j:.05});ct("DIRT2","#74563a",{j:.05});ct("SAND","#cdbd8f",{j:.04});ct("GRAVEL","#8f8a7e",{j:.07});ct("ROCK","#807f77",{j:.06});ct("ROCK2","#6b6c66",{j:.06});ct("ROCK_L","#9b9c92",{j:.05});ct("MOSS","#6c8a4a",{j:.06});ct("BED","#456260",{j:.05});ct("CROP1","#c8d055",{j:.05});ct("CROP2","#9cbc46",{j:.05});ct("CROP3","#e3c95f",{j:.05});ct("SOIL","#7d5c3b",{j:.05});ct("TAN","#dbc593",{j:.035});ct("TAN_D","#bba270",{j:.035});ct("RED","#b4271f",{j:.035,gloss:.1});ct("RED_D","#8b1c17",{j:.03});ct("RED_L","#cb3a2b",{j:.03});ct("WOOD","#6f4a2c");ct("WOOD_D","#472c1a",{j:.03});ct("WOOD_L","#a26f40");ct("GOLD","#ecb62a",{j:.02,gloss:.75});ct("GOLD_D","#b98a1c",{j:.02,gloss:.6});ct("GOLD_L","#f8d465",{j:.02,gloss:.7});ct("BLUE","#2e64aa",{j:.03,gloss:.25});ct("BLUE_L","#4f92d3",{j:.03,gloss:.25});ct("BLUE_D","#1f4479",{j:.03});ct("GREEN","#1f9074",{j:.03,gloss:.25});ct("GREEN_L","#40b691",{j:.03,gloss:.25});ct("GREEN_D","#166653",{j:.03});ct("CREAM","#eee3c2",{j:.03});ct("PAPER","#f3e4b2",{j:.02,glow:.5});ct("BLACK","#242226",{j:.03});ct("WHITE","#f4f1e9",{j:.02});ct("Y1","#e9b12b",{j:.03,gloss:.55});ct("Y2","#f4ca47",{j:.03,gloss:.55});ct("Y3","#d7961a",{j:.03,gloss:.6});ct("G1","#1e8b67",{j:.03,gloss:.55});ct("G2","#2aa87b",{j:.03,gloss:.55});ct("G3","#126a4d",{j:.03,gloss:.6});ct("T1","#4d555d",{j:.03,gloss:.25});ct("T2","#5d666f",{j:.03,gloss:.25});ct("T3","#353b41",{j:.03,gloss:.3});ct("B1","#2a60a6",{j:.03,gloss:.55});ct("B2","#3b79c3",{j:.03,gloss:.55});ct("B3","#1f4a87",{j:.03,gloss:.6});ct("R1","#9d3e2b",{j:.03,gloss:.4});ct("R2","#b44e35",{j:.03,gloss:.4});ct("R3","#742c1e",{j:.03,gloss:.45});ct("LAMP","#e5301f",{j:.02,glow:1});ct("LAMP_Y","#f5b93c",{j:.02,glow:1});ct("FLAME","#ffb63c",{j:0,glow:1.4});ct("WINDOW","#ffd78a",{j:.02,glow:.8});ct("EMBER","#ff7a2a",{j:.05,glow:1.2});ct("BRONZE","#8a6b3b",{j:.05,gloss:.6});ct("BRONZE_D","#5d4826",{j:.05,gloss:.5});ct("PATINA","#4f7b5f",{j:.05,gloss:.4});ct("BUDDHA","#f2c232",{j:.02,glow:.3,gloss:.8});ct("LION","#bdb8aa",{j:.04});ct("PINE1","#2c6a37",{j:.07});ct("PINE2","#3c7e44",{j:.07});ct("PINE3","#245a30",{j:.07});ct("CYP1","#2a5b3c",{j:.07});ct("CYP2","#346a49",{j:.07});ct("GINK1","#efba2c",{j:.06});ct("GINK2","#f7d24c",{j:.06});ct("GINK3","#dca020",{j:.06});ct("MAPLE1","#d94a2a",{j:.06});ct("MAPLE2","#e8713b",{j:.06});ct("MAPLE3","#b93822",{j:.06});ct("BLOOM1","#f6b5c7",{j:.05});ct("BLOOM2","#fad3de",{j:.05});ct("BLOOM3","#ee94b1",{j:.05});ct("WILLOW1","#8fbb52",{j:.06});ct("WILLOW2","#a6cd64",{j:.06});ct("BAMBOO1","#5aa24b",{j:.06});ct("BAMBOO2","#7bb95f",{j:.06});ct("BAMBOO_S","#93b45a",{j:.05});ct("LEAF1","#4d903b",{j:.07});ct("LEAF2","#60a544",{j:.07});ct("TRUNK","#5e4432",{j:.05});ct("TRUNK2","#4a3628",{j:.05});ct("TRUNK_L","#7b5c44",{j:.05});ct("F_PINK","#ea6f9a",{j:.03});ct("F_WHITE","#f6f2ea",{j:.03});ct("F_YELLOW","#f3d43c",{j:.03});ct("F_PURPLE","#9c70d1",{j:.03});ct("F_RED","#de3b3b",{j:.03});ct("LOTUS","#48994f",{j:.05});ct("LOTUS_P","#f590b2",{j:.03});ct("SKIN","#e9be92",{j:.02});ct("ROBE_O","#dc7b2d",{j:.03});ct("ROBE_G","#8f9196",{j:.03});ct("ROBE_R","#a83333",{j:.03});ct("ROBE_B","#3c608f",{j:.03});ct("HAIR","#2a2320",{j:.02});if(Uo.length>255)throw new Error("palette overflow");const hr=Uo.length+1,bn={r:new Float32Array(hr),g:new Float32Array(hr),b:new Float32Array(hr),j:new Float32Array(hr),glow:new Float32Array(hr),gloss:new Float32Array(hr),names:["AIR"]};{const s=new pt;Uo.forEach((t,e)=>{s.set(t.hex),bn.r[e+1]=s.r,bn.g[e+1]=s.g,bn.b[e+1]=s.b,bn.j[e+1]=t.j,bn.glow[e+1]=t.glow,bn.gloss[e+1]=t.gloss,bn.names.push(t.name)})}function Cn(s){let t=s>>>0;return function(){t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Ue(s,t,e,n=0){let i=Math.imul(s|0,374761393)+Math.imul(t|0,668265263)+Math.imul(e|0,1442695041)+Math.imul(n|0,1274126177);return i=Math.imul(i^i>>>13,1274126177),i^=i>>>16,(i>>>0)/4294967296}function Tn(s,t,e=0){return Ue(s,0,t,e)}function gi(s,t,e=0){const n=Math.floor(s),i=Math.floor(t),r=s-n,o=t-i,a=r*r*(3-2*r),l=o*o*(3-2*o),c=Tn(n,i,e),h=Tn(n+1,i,e),d=Tn(n,i+1,e),u=Tn(n+1,i+1,e);return c+(h-c)*a+(d-c)*l+(c-h-d+u)*a*l}function Wl(s,t,e=0,n=4){let i=.5,r=1,o=0,a=0;for(let l=0;l<n;l++)o+=i*gi(s*r,t*r,e+l*101),a+=i,i*=.5,r*=2;return o/a}const Xl=(s,t,e)=>s<t?t:s>e?e:s,Bd=(s,t,e)=>s+(t-s)*e,An=(s,t,e)=>{const n=Xl((e-s)/(t-s),0,1);return n*n*(3-2*n)},Ve=256,Zm=112,Ze=400,Ut=128,ge={x:-128.5,y:0,z:-190},Fn={x0:ge.x,x1:ge.x+Ve,z0:ge.z,z1:ge.z+Ze};function Eb(s,t){const e=s+.5,n=t-ge.z,i=14*An(110,0,n),r=6*An(74,128,Math.abs(e)),o=Wl(e*.035+40,n*.035+17,3,3)*3.6+gi(e*.12,n*.12,9)*1.1;return 7+i+r+o}function Tb(s,t){const e=Math.max(Math.abs(s)-150,0),n=Math.max(-190-t,0),i=Math.max(t-260,0),r=Math.hypot(e,n+i),o=An(-260,-760,t),a=An(260,900,Math.abs(s))*.7,l=An(420,1100,t)*.34,c=Math.max(o,a,l),h=1-Math.abs(2*Wl(s*.0034+11,t*.0048-7,5,4)-1),d=Math.pow(h,2),u=Wl(s*.02,t*.02,13,3),f=An(300,1100,r);return c*f*(14+330*d+24*u)}function Km(s,t){return Eb(s,t)+Tb(s,t)}function Ab(s,t,e,n=e){const i=Math.floor(s/e)*e+e/2,r=Math.floor(t/e)*e+e/2;return Math.max(n,Math.round(Km(i,r)/n)*n)}function zd(s,t){return gi(s*.011+3,t*.011-9,41)>.6?1:gi(s*.017-5,t*.017+2,43)>.64?2:0}function Rb(s,t,e,n,i,r=0){const o=Ue(Math.floor(e/4),i,Math.floor(n/4),31),a=gi(e*.008,n*.008,19);if(s<26){if(r===1)return o>.66?x.PINE2:o>.3?x.PINE1:x.CYP1;if(r===2){const l=Ue(Math.floor(e/26),0,Math.floor(n/26),5),c=l<.34?x.CROP1:l<.67?x.CROP2:x.CROP3;return Math.floor(e/4)%3===0?x.SOIL:c}return o>.7?x.GRASS2:o>.35?x.GRASS1:x.GRASS3}return s<120?o>.7?x.PINE2:o>.32?x.PINE1:x.PINE3:s<220?t>2&&o>.55+a*.25?o>.8?x.ROCK_L:x.ROCK:o>.7?x.PINE1:o>.35?x.CYP1:x.PINE3:o>.86?x.PINE3:o>.55?x.ROCK_L:o>.2?x.ROCK:x.ROCK2}function kd(s,t,e,n,i,r,o,a){const l=new qm(i,a,r),c=new Int16Array(i*r);for(let h=0;h<r;h++)for(let d=0;d<i;d++){const u=e+(d+.5)*s,f=n+(h+.5)*s;if(o&&u>o.x0&&u<o.x1&&f>o.z0&&f<o.z1)continue;const p=Km(u,f);let _=Math.max(1,Math.round(p/t));p<24&&zd(u,f)===1&&(_+=1),c[d+h*i]=Math.min(_,a)}for(let h=0;h<r;h++)for(let d=0;d<i;d++){const u=c[d+h*i];if(!u)continue;const f=e+(d+.5)*s,p=n+(h+.5)*s;let _=0;for(const[m,g]of[[1,0],[-1,0],[0,1],[0,-1]]){const M=Xl(d+m,0,i-1),S=Xl(h+g,0,r-1);_=Math.max(_,Math.abs(c[M+S*i]-u))}for(let m=0;m<u;m++){const g=u-1-m,M=zd(f,p),S=g<7?Rb((m+1)*t,_,f,p,m,M):x.ROCK2;l.set(d,m,h,S)}}return{grid:l,scale:[s,t,s],offset:[e/s,0,n/s]}}const tu={cs:4,vs:3,margin:176},Cb={cs:16,vs:5};function Pb(){const{cs:s,vs:t,margin:e}=tu,n={x0:Fn.x0-e,z0:Fn.z0-e,nx:(Ve+2*e)/s,nz:(Ze+2*e)/s},i=kd(s,t,n.x0,n.z0,n.nx,n.nz,{x0:Fn.x0,x1:Fn.x1,z0:Fn.z0,z1:Fn.z1},90),{cs:r,vs:o}=Cb,a=n.nx*s,l=n.nz*s,c=68,h=90,d=38,u=n.x0-r*c,f=n.z0-r*h,p=Math.round((a+2*r*c)/r),_=Math.round((l+r*(h+d))/r),m=kd(r,o,u,f,p,_,{x0:n.x0,x1:n.x0+a,z0:n.z0,z1:n.z0+l},80);return[i,m]}const ur=14,$m=8,jt={T0:8,T1:10,T2:13,T3:16,T4:19},Qt={wallN:26,t4t3:89,t3t2:158,t2t1:236,wallS:306},Ln=84,Ki={pondZ:368,pondRx:74,pondRz:15},Ot={GRASS:0,PAVE:1,SLAB:2,GRAVEL:3,COPING:4,DRIP:5,BED:6,SAND:7,ROCK:8,DIRT:9,PLAZA:10,FLOOR:11,FIELD1:12,FIELD2:13,FIELD3:14};function Ib(s){return s<=Qt.t4t3?jt.T4:s<=Qt.t3t2?jt.T3:s<=Qt.t2t1?jt.T2:s<=Qt.wallS?jt.T1:jt.T0}function Lb(s){return jt.T4-3*An(Qt.t4t3-9,Qt.t4t3+9,s)-3*An(Qt.t3t2-9,Qt.t3t2+9,s)-3*An(Qt.t2t1-9,Qt.t2t1+9,s)-2*An(Qt.wallS-9,Qt.wallS+9,s)}function Db(s,t){const e=14*An(110,0,t),n=6*An(74,128,Math.abs(s)),i=Wl(s*.035+40,t*.035+17,3,3)*3.6+gi(s*.12,t*.12,9)*1.1;return $m-1+e+n+i}function ja(s,t){const e=s/Ki.pondRx,n=(t-Ki.pondZ)/Ki.pondRz,i=1+.06*Math.sin(s*.19+1.3)+.05*Math.sin(s*.41+t*.3);return Math.pow(Math.abs(e),2.6)+Math.pow(Math.abs(n),2.2)<i}function Nb(s,t){const e=Math.max(Math.abs(s)-Ln,0),n=Math.max(Qt.wallN-t,0,t-Qt.wallS);return Math.hypot(e,n)}function Ob(){const s=new Int16Array(Ve*Ze),t=new Uint8Array(Ve*Ze),e=new Uint8Array(Ve*Ze),n=(i,r)=>i+r*Ve;for(let i=0;i<Ze;i++)for(let r=0;r<Ve;r++){const o=r-Ut,a=n(r,i),l=Db(o,i),c=Nb(o,i);let h;if(c===0)h=Ib(i),e[a]=1;else{const u=Xl(i,Qt.wallN,Qt.wallS+30),f=Lb(u),p=An(0,26,c);h=Bd(f,l,p),e[a]=0}const d=Math.min(r,Ve-1-r,i,Ze-1-i);if(d<ur){const u=r<ur?Fn.x0-2:r>Ve-1-ur?Fn.x1+2:r+Fn.x0+.5,f=i<ur?Fn.z0-2:i>Ze-1-ur?Fn.z1+2:i+Fn.z0+.5;h=Bd(h,Ab(u,f,tu.cs,tu.vs),An(ur,0,d))}s[a]=Math.round(h),t[a]=Ot.GRASS}for(let i=0;i<Ze;i++)for(let r=0;r<Ve;r++){const o=r-Ut,a=n(r,i);ja(o,i)&&(s[a]=5,t[a]=Ot.BED,e[a]=1)}for(let i=1;i<Ze-1;i++)for(let r=1;r<Ve-1;r++){const o=n(r,i);if(t[o]===Ot.BED)continue;let a=!1;for(let l=-1;l<=1&&!a;l++)for(let c=-1;c<=1;c++)t[n(r+c,i+l)]===Ot.BED&&(a=!0);a&&(s[o]=$m,t[o]=Ot.COPING,e[o]=1)}return{H:s,SURF:t,SIDE:e,idx:n}}function Ub(s){const{SURF:t,idx:e}=s,n=(o,a,l,c,h,d={})=>{for(let u=Math.max(0,Math.min(a,c));u<=Math.min(Ze-1,Math.max(a,c));u++)for(let f=Math.max(0,Math.min(o,l));f<=Math.min(Ve-1,Math.max(o,l));f++)d.only!==void 0&&t[e(f,u)]!==d.only||d.skip!==void 0&&t[e(f,u)]===d.skip||(t[e(f,u)]=h)};return{rect:n,rectU:(o,a,l,c,h,d={})=>{n(Ut+o,l,Ut+a,c,h,d),d.mirror!==!1&&n(Ut-a,l,Ut-o,c,h,d)},disc:(o,a,l,c)=>{for(let h=-l;h<=l;h++)for(let d=-l;d<=l;d++)d*d+h*h<=l*l&&(t[e(Ut+o+d,a+h)]=c)}}}function Fb(s,t,e,n){const i=t-Ut;switch(s){case Ot.GRASS:{const r=gi(t*.23,e*.23,5)*.75+Ue(t,n,e,3)*.25;return r<.34?x.GRASS3:r<.62?x.GRASS1:r<.86?x.GRASS2:x.GRASS4}case Ot.PAVE:return t%8===0||e%8===0?x.PAVE_J:((t>>2)+(e>>2)&1)===0?x.PAVE1:x.PAVE2;case Ot.PLAZA:return t%6===0||e%6===0?x.PAVE_J:(t/6|0)+(e/6|0)&1?x.SLAB2:x.SLAB1;case Ot.SLAB:{const r=Math.abs(i);return r<=1?e%6===0?x.SLAB2:x.SLAB1:r===2?x.PAVE_J:r>=5?x.STONE2:e%4===0?x.STONE_D:e>>2&1?x.STONE:x.STONE2}case Ot.GRAVEL:return Ue(t,0,e,8)>.72?x.GRAVEL:Ue(t,1,e,8)>.5?x.STONE2:x.PAVE2;case Ot.COPING:return(t+e&1)===0?x.STONE:x.MARBLE2;case Ot.DRIP:return Ue(t,2,e,9)>.5?x.STONE_D:x.GRAVEL;case Ot.BED:return Ue(t,n,e,4)>.7?x.SAND:x.BED;case Ot.SAND:return x.SAND;case Ot.ROCK:return Ue(t,n,e,5)>.5?x.ROCK:x.ROCK_L;case Ot.DIRT:return Ue(t,n,e,6)>.6?x.DIRT2:x.DIRT;case Ot.FLOOR:return x.STONE2;case Ot.FIELD1:case Ot.FIELD2:case Ot.FIELD3:{if(((t>>4)+(e>>4)&1?t:e)%3===0)return x.SOIL;const o=s===Ot.FIELD1?x.CROP1:s===Ot.FIELD2?x.CROP2:x.CROP3;return Ue(t,n,e,12)>.8?x.GRASS4:o}default:return x.GRASS1}}function Bb(s,t){const{H:e,SURF:n,SIDE:i,idx:r}=t,{data:o,sx:a,sz:l}=s;for(let c=0;c<Ze;c++)for(let h=0;h<Ve;h++){const d=r(h,c),u=e[d],f=n[d],p=i[d];for(let _=0;_<u;_++){const m=u-1-_;let g;m===0?g=Fb(f,h,c,_):m<=3?p?g=(h+c+m&1)===0?x.STONE:x.STONE2:g=f===Ot.GRASS&&m===1?Tn(h,c,2)>.5?x.DIRT:x.GRASS3:Ue(h,_,c,6)>.5?x.DIRT:x.DIRT2:g=p?x.STONE_D:_<3?x.ROCK2:x.DIRT2,o[h+a*(c+l*_)]=g}if(f===Ot.GRASS&&u<zb){const _=Tn(h,c,88);_<.017?o[h+a*(c+l*u)]=Vd[Math.floor(Tn(h,c,89)*Vd.length)]:_<.06&&(o[h+a*(c+l*u)]=Tn(h,c,90)>.5?x.GRASS_D:x.GRASS3)}}}const Vd=[x.F_PINK,x.F_WHITE,x.F_YELLOW,x.F_PURPLE,x.F_WHITE,x.F_YELLOW],zb=100;function Pr(s,t,e,n,i,r,o,a,l,c=.28){s.ball(t,e,n,i,r,o,a[0],(h,d,u,f)=>{const p=Ue(h,d,u,l);if(f>.6&&p<c*(f-.4)*3)return null;const _=(d-(e-r))/(2*r+.001);let m=_>.62?2:_>.3?1:0;const g=Ue(h*3,d*5,u*7,l+9);return g>.82?m=Math.min(2,m+1):g<.14&&(m=Math.max(0,m-1)),a[m]})}function Qa(s,t,e,n,i=1,r=14){const o=Cn(i*7919+13),a=[x.PINE3,x.PINE1,x.PINE2];let l=t,c=n;s.box(t-1,e,n-1,t+1,e,n+1,x.TRUNK2);for(let d=0;d<r;d++)d===Math.floor(r*.4)&&(l+=o()<.5?-1:1),d===Math.floor(r*.7)&&(c+=o()<.5?-1:1),s.set(l,e+d,c,d%5===3?x.TRUNK2:x.TRUNK),d<r*.45&&s.set(l+1,e+d,c,x.TRUNK);const h=3+(r>12?1:0);for(let d=0;d<h;d++){const u=e+r-2-d*3.4,f=3+(h-d)*1.5+o()*1.2,p=(o()-.5)*5+(d%2?2:-2),_=(o()-.5)*5,m=Math.round(l+p),g=Math.round(c+_);Pr(s,m,Math.round(u),g,f,1.9,f*.85,a,i+d*31,.34);const M=Math.max(Math.abs(m-l),Math.abs(g-c));for(let S=0;S<M;S++){const v=Math.round(l+(m-l)*S/M),b=Math.round(c+(g-c)*S/M);s.set(v,Math.round(u)-1,b,x.TRUNK2)}}Pr(s,l,e+r+1,c,2.4,1.6,2.4,a,i+77,.2)}function eu(s,t,e,n,i=1,r=16){const o=[x.CYP1,x.CYP2,x.PINE2];s.box(t,e,n,t,e+2,n,x.TRUNK2);for(let a=2;a<=r;a++){const l=a/r,c=Math.max(.5,3.1*Math.pow(1-l,.7)+(a<4,0)),h=Math.ceil(c);for(let d=-h;d<=h;d++)for(let u=-h;u<=h;u++){const f=Math.hypot(u,d);if(f>c+.2)continue;const p=Ue(t+u,e+a,n+d,i);if(f>c-.9&&p<.28)continue;const _=p>.75?o[2]:p<.3?o[0]:o[1];s.set(t+u,e+a,n+d,_)}}}function Ri(s,t,e,n,i="ginkgo",r=1,o=9,a=6){const l={ginkgo:[x.GINK3,x.GINK1,x.GINK2],maple:[x.MAPLE3,x.MAPLE1,x.MAPLE2],blossom:[x.BLOOM3,x.BLOOM1,x.BLOOM2],oak:[x.LEAF1,x.LEAF2,x.GRASS4],willow:[x.WILLOW1,x.WILLOW2,x.WILLOW2]}[i],c=Cn(r*313+5);s.box(t-1,e,n-1,t,e,n,x.TRUNK2),s.box(t,e,n,t,e+o,n,x.TRUNK),s.box(t-1,e+1,n-1,t-1,e+Math.floor(o*.6),n-1,x.TRUNK),Pr(s,t,e+o+Math.round(a*.35),n,a,a*.78,a,l,r,.3);for(let h=0;h<3;h++){const d=c()*Math.PI*2,u=Math.round(t+Math.cos(d)*a*.75),f=Math.round(n+Math.sin(d)*a*.75);Pr(s,u,e+o-1+Math.round(c()*3),f,a*.55,a*.5,a*.55,l,r+h*5,.3)}}function kb(s,t,e,n,i=1,r=8){const o=Cn(i*101+3);s.box(t,e,n,t,e+r,n,x.TRUNK),s.box(t+1,e,n,t+1,e+3,n,x.TRUNK2),Pr(s,t,e+r+1,n,5,3,5,[x.WILLOW1,x.WILLOW1,x.WILLOW2],i,.25);for(let a=0;a<26;a++){const l=a/26*Math.PI*2,c=4+o()*2.4,h=Math.round(t+Math.cos(l)*c),d=Math.round(n+Math.sin(l)*c),u=4+Math.floor(o()*6);for(let f=0;f<u;f++)o()<.12||s.set(h,e+r-1-f,d,f>u-3?x.WILLOW2:x.WILLOW1)}}function dr(s,t,e,n,i=1,r=7,o=2.6){const a=Cn(i*57+11);for(let l=0;l<r;l++){const c=a()*Math.PI*2,h=a()*o,d=Math.round(t+Math.cos(c)*h),u=Math.round(n+Math.sin(c)*h),f=11+Math.floor(a()*8);let p=d,_=u;for(let m=0;m<f;m++)if(m>6&&a()<.09&&(p+=a()<.5?-1:1),s.set(p,e+m,_,m%4===3?x.BAMBOO_S:x.BAMBOO2),m>f*.55&&(m&1)===0){const g=a()<.5?1:-1;a()<.7&&s.set(p+g,e+m,_,a()<.5?x.BAMBOO1:x.BAMBOO2),a()<.7&&s.set(p,e+m,_+g,a()<.5?x.BAMBOO1:x.BAMBOO2),a()<.3&&s.set(p+g*2,e+m-1,_,x.BAMBOO1)}s.set(p,e+f,_,x.BAMBOO2),s.set(p+1,e+f-1,_,x.BAMBOO1),s.set(p-1,e+f-1,_,x.BAMBOO1),s.set(p,e+f-1,_+1,x.BAMBOO1),s.set(p,e+f-1,_-1,x.BAMBOO1)}}function xs(s,t,e,n,i=2.5,r=1.7,o=[x.LEAF1,x.LEAF2,x.GRASS4],a=1){Pr(s,t,e+Math.floor(r)-1,n,i,r,i,o,a,.2)}function Oh(s,t,e,n,i,r,o=1,a=.35){const l=[x.F_PINK,x.F_WHITE,x.F_YELLOW,x.F_PURPLE,x.F_RED];for(let c=e;c<=i;c++)for(let h=t;h<=n;h++){const d=Ue(h,0,c,o);d<a?s.set(h,r,c,l[Math.floor(Ue(h,1,c,o+1)*l.length)]):d<a+.25&&s.set(h,r,c,x.LEAF1)}}const Vb=[[".BBB.","BBBBB","BBBBB",".BBB.",".B.B.",".B.Bo","....."],["..B..",".BBB.",".BBB.",".BBB.",".B.B.",".B.B.","....."],[".....","..B..",".BBB.",".BBB.",".BBB.",".....","....."],[".....",".....","..B..",".BBB.","MMMMM",".MMM.","....."],[".....",".....","..M..",".MMM.","MMMMM",".BBB.","..R.."],[".....",".....",".....","..M..",".MMM.",".KBK.","....."],[".....",".....",".....",".....",".E.E.",".MBM.","....."]];function Yl(s,t,e,n,i="S",r={}){const o=s.child(t,e,n,i),a=r.body??x.LION,l=r.mane??x.STONE,c=r.base??x.STONE2;o.box(-2,0,-3,2,0,3,x.STONE_D),o.box(-2,1,-3,2,1,3,c),o.model(0,2,0,Vb,{B:a,M:l,E:l,K:x.BLACK,R:x.RED_D,o:r.ball??x.GREEN})}function nu(s,t,e,n,i=!0){const r=s.child(t,e,n);if(i){r.box(-4,0,-4,4,0,4,x.STONE),r.box(-3,1,-3,3,1,3,x.MARBLE2),r.box(-3,2,-3,3,2,3,x.MARBLE);for(const[o,a]of[[-2,-2],[2,-2],[-2,2],[2,2]])r.box(o,3,a,o,4,a,x.BRONZE_D);r.box(-2,5,-2,2,7,2,x.BRONZE),r.box(-3,8,-3,3,8,3,x.BRONZE_D),r.box(-2,8,-2,2,8,2,x.EMBER);for(const o of[-3,3])r.box(o,9,-1,o,10,-1,x.BRONZE_D),r.box(o,9,1,o,10,1,x.BRONZE_D),r.box(o,11,-1,o,11,1,x.BRONZE_D);for(let o=-1;o<=1;o++)r.set(o*2,6,3,x.GOLD_D),r.set(o*2,6,-3,x.GOLD_D);return[t,e+9,n]}return r.box(-2,0,-2,2,0,2,x.STONE),r.box(-1,1,-1,1,1,1,x.MARBLE2),r.box(-1,2,-1,1,3,1,x.BRONZE),r.box(-2,4,-2,2,4,2,x.BRONZE_D),r.box(-1,4,-1,1,4,1,x.EMBER),[t,e+5,n]}function to(s,t,e,n){const i=s.child(t,e,n);i.box(-1,0,-1,1,0,1,x.STONE_D),i.box(0,1,0,0,3,0,x.STONE),i.box(-1,4,-1,1,4,1,x.STONE2),i.box(-1,5,-1,1,6,1,x.STONE);for(const[r,o]of[[0,1],[0,-1],[1,0],[-1,0]])i.box(r,5,o,r,6,o,x.WINDOW);i.box(0,5,0,0,6,0,x.FLAME),i.box(-2,7,-2,2,7,2,x.STONE_D),i.box(-1,8,-1,1,8,1,x.STONE2),i.set(0,9,0,x.STONE),i.set(0,10,0,x.GOLD)}function Gb(s,t,e,n){const i=s.child(t,e,n);i.cyl(0,0,2,0,1,x.BRONZE),i.cyl(0,0,1,2,4,x.BRONZE),i.cyl(0,0,2,0,0,x.BRONZE_D),i.set(0,5,0,x.BRONZE_D),i.set(0,6,0,x.WOOD_D),i.set(0,7,0,x.WOOD_D),i.set(2,1,0,x.GOLD_D),i.set(-2,1,0,x.GOLD_D)}function Hb(s,t,e,n){const i=s.child(t,e,n);i.box(-3,0,-2,3,0,-2,x.WOOD_D),i.box(-3,0,2,3,0,2,x.WOOD_D),i.box(-3,1,-2,-3,2,-2,x.WOOD_D),i.box(3,1,-2,3,2,-2,x.WOOD_D),i.box(-3,1,2,-3,2,2,x.WOOD_D),i.box(3,1,2,3,2,2,x.WOOD_D);for(let r=-2;r<=2;r++){const o=r===0?2.6:Math.abs(r)===1?2.4:2;for(let a=-3;a<=3;a++)for(let l=-3;l<=3;l++)if(a*a+l*l<=o*o){const c=Math.abs(r)===2?x.CREAM:r===0?x.RED_L:x.RED;i.set(r,4+a,l,c)}}for(const r of[-2,2])i.set(r,4,0,x.GOLD);for(let r=-2;r<=2;r+=2)i.set(r,7,0,x.GOLD_D),i.set(r,1,0,x.GOLD_D)}function Wb(s,t,e,n,i={}){const r=s.child(t,e,n),o=i.gold??x.BUDDHA;r.cyl(0,0,4,0,0,x.RED_D),r.cyl(0,0,4,1,1,x.GOLD_D),r.cyl(0,0,3,2,2,x.GOLD);for(let a=0;a<8;a++){const l=a*Math.PI/4;r.set(Math.round(Math.cos(l)*4),1,Math.round(Math.sin(l)*4),x.GOLD_L)}r.box(-3,3,-2,3,4,2,o),r.box(-2,3,3,2,3,3,o),r.box(-2,5,-1,2,8,1,o),r.box(-3,5,-1,-3,7,0,o),r.box(3,5,-1,3,7,0,o),r.box(-1,4,2,1,4,2,x.SKIN),r.box(-1,9,-1,1,11,1,x.SKIN),r.set(-1,10,2,x.SKIN),r.set(0,10,2,x.SKIN),r.set(1,10,2,x.SKIN),r.set(-1,10,2,x.BLACK),r.set(1,10,2,x.BLACK),r.box(-1,12,-1,1,12,1,x.BLUE_D),r.set(0,13,0,x.BLUE_D),r.set(0,14,0,o);for(let a=6;a<=15;a++)for(let l=-5;l<=5;l++){const c=Math.hypot(l,a-10.5);c<=5.2&&c>=4?r.set(l,a,-3,x.GOLD_L):c<4&&c>=3&&r.set(l,a,-3,x.GOLD_D)}}function Xb(s,t,e,n,i="S"){const r=s.child(t,e,n,i);r.box(-3,0,-4,3,1,4,x.BRICK_D),r.box(-2,2,-3,2,2,3,x.STONE_D),r.box(3,0,3,3,1,5,x.BRICK_D),r.set(3,1,5,x.BRICK),r.box(-2,3,-1,2,10,0,x.STONE2),r.box(-1,11,-1,1,11,0,x.STONE2),r.box(-1,12,-1,1,12,0,x.STONE),r.set(0,13,-1,x.STONE);for(let o=0;o<6;o++)r.set(-1,4+o,1,(o+1&1)===0?x.STONE_D:x.STONE2),r.set(1,4+o,1,(o&1)===0?x.STONE_D:x.STONE2)}function tl(s,t,e,n,i,r,o,a=1){const c=Cn(a*977)()*50;s.ball(t,e+Math.floor(r),n,i,r,o,x.ROCK,(h,d,u,f)=>{const p=Ue(Math.floor((h+c)/1.6),Math.floor(d/1.6),Math.floor(u/1.6),a);if(f>.55&&p>.72||f<.35&&p>.82)return 0;const _=Ue(h,d,u,a+3);return _>.8?x.ROCK_L:_<.2?x.ROCK2:x.ROCK})}function Yb(s){const{rect:t,rectU:e,disc:n}=s,i=(r,o,a,l)=>{e(r,o,a,l,Ot.GRASS),e(r,o,a,a,Ot.COPING),e(r,o,l,l,Ot.COPING),e(r,r,a,l,Ot.COPING),e(o,o,a,l,Ot.COPING)};e(0,82,Qt.t2t1+1,Qt.wallS-1,Ot.PAVE),e(79,82,Qt.t2t1+1,Qt.wallS-1,Ot.GRASS),i(9,30,268,301),i(66,77,248,299),t(Ut+4,273,Ut+38,277,Ot.GRAVEL),t(Ut-38,273,Ut-4,277,Ot.GRAVEL),e(0,82,Qt.t3t2+1,Qt.t2t1,Ot.PAVE),i(10,36,163,174),i(10,36,181,207),i(10,36,215,232),t(Ut+4,176,Ut+48,180,Ot.GRAVEL),t(Ut-48,176,Ut-4,180,Ot.GRAVEL),t(Ut+4,208,Ut+48,212,Ot.GRAVEL),t(Ut-48,208,Ut-4,212,Ot.GRAVEL),n(0,196,8,Ot.PAVE),e(0,42,Qt.t4t3+1,Qt.t3t2,Ot.PAVE),i(54,80,100,146),e(46,50,Qt.t4t3+3,Qt.t3t2-2,Ot.GRAVEL),e(50,58,120,124,Ot.GRAVEL),e(0,48,58,Qt.t4t3,Ot.PAVE),n(-58,70,16,Ot.PAVE),n(58,70,16,Ot.PAVE),t(Ut+34,68,Ut+46,72,Ot.GRAVEL),t(Ut-46,68,Ut-34,72,Ot.GRAVEL),i(56,80,34,52),e(4,36,40,44,Ot.GRAVEL),e(0,4,Qt.wallN+1,Qt.t4t3,Ot.SLAB,{mirror:!1}),e(-4,4,Qt.t4t3+1,Qt.wallS,Ot.SLAB,{mirror:!1}),e(-4,4,Qt.wallN+1,Qt.t4t3,Ot.SLAB,{mirror:!1}),e(0,44,Qt.wallS+1,349,Ot.PLAZA),e(-4,4,350,Ze-1,Ot.SLAB,{mirror:!1,skip:Ot.BED}),e(96,102,12,334,Ot.GRAVEL),t(Ut-102,12,Ut+102,18,Ot.GRAVEL),e(44,96,328,334,Ot.GRAVEL);for(const r of[-1,1])for(let o=60;o<116;o+=14)for(let a=336;a<392;a+=16){if(Math.abs(o+6)<12)continue;const l=Tn(o*3+r,a,9),c=l<.34?Ot.FIELD1:l<.67?Ot.FIELD2:Ot.FIELD3;if(a>348&&o<80)continue;const h=r>0?o:-o-11;t(Ut+h,a,Ut+h+11,a+12,c)}e(80,84,336,392,Ot.GRAVEL)}function qb(s,t){const{H:e,idx:n}=t,i=(o,a)=>e[n(Ut+o,a)],r=(o,a)=>{a(o,1),a(-o,-1)};r(19,(o,a)=>{Ri(s,Ut+o,i(o,282),282,"ginkgo",11+a,10,7),xs(s,Ut+o+(a>0?6:-6),i(o,296),296,2.5,1.8,void 0,5+a),xs(s,Ut+o-(a>0?6:-6),i(o,296),296,2.5,1.8,void 0,7+a),xs(s,Ut+o,i(o,296),296,2.5,1.8,void 0,3+a)});for(let o=250;o<=296;o+=8)r(72,(a,l)=>eu(s,Ut+a,i(a,o),o,o*7+l,15+(o/8&1)*2));r(72,(o,a)=>dr(s,Ut+o+a*4,i(o,262),262,3+a,6));for(const o of[170,194,222])r(22,(a,l)=>Qa(s,Ut+a,i(a,o),o,o+l*3,14));for(const o of[168,190,228])r(30,(a,l)=>xs(s,Ut+a,i(a,o),o,2.2,1.6,[x.LEAF1,x.LEAF2,x.GRASS4],o));r(14,(o,a)=>Oh(s,Ut+o-3,164,Ut+o+3,173,i(o,168),3,.4)),r(23,(o,a)=>Oh(s,Ut+o-4,183,Ut+o+4,186,i(o,185),5,.5)),r(23,(o,a)=>Oh(s,Ut+o-4,216,Ut+o+4,220,i(o,218),7,.5)),r(66,(o,a)=>{Qa(s,Ut+o-a*2,i(o,101),101,21+a,15),Qa(s,Ut+o+a*6,i(o,149),149,25+a,13),dr(s,Ut+o-a*9,i(o,96),96,31+a,9,3),dr(s,Ut+o+a*12,i(o,98),98,33+a,8,3),dr(s,Ut+o+a*12,i(o,146),146,35+a,7,3),tl(s,Ut+o-a*10,i(o,141),141,3,5,3,4+a),tl(s,Ut+o-a*6,i(o,105),105,2,3,2,6+a),xs(s,Ut+o+a*11,i(o,137),137,2.5,1.6,[x.BLOOM1,x.BLOOM2,x.BLOOM3],4+a),xs(s,Ut+o-a*10,i(o,112),112,2.2,1.5,[x.BLOOM1,x.BLOOM2,x.BLOOM3],8+a)}),r(30,(o,a)=>{eu(s,Ut+o,i(o,34),34,41+a,17),Ri(s,Ut+o,i(o,78),78,"blossom",53+a,7,5)}),r(68,(o,a)=>{dr(s,Ut+o,i(o,42),42,61+a,9,3.5),Ri(s,Ut+o-a*6,i(o,46),46,"maple",63+a,8,5),tl(s,Ut+o-a*2,i(o,30),30,3,5,3,9+a)}),r(52,(o,a)=>{Ri(s,Ut+o,i(o,30),30,"maple",71+a,8,5)});for(const o of[-58,-46,46,58])xs(s,Ut+o,i(o,302),302,2.6,1.7,void 0,o)}function Zb(s,t){const{H:e,SURF:n,idx:i}=t,r=Cn(2024);let o=0;const a=["blossom","maple"],l=["ginkgo","oak","maple"];for(let c=26,h=0;c<328;c+=14,h++)for(const d of[-1,1])for(const u of[-1,1]){const f=Ut+d*(99+u*8),p=c+(u>0?7:0);if(n[i(f,p)]!==Ot.GRASS)continue;const _=u<0?a:l,m=_[(h+(d>0?1:0))%_.length];Ri(s,f,e[i(f,p)],p,m,f*7+p,6+(h&1),u<0?4:5.5),o++}for(let c=4;c<Ze-4;c+=7)for(let h=4;h<Ve-4;h+=7){const d=h+Math.floor((r()-.5)*6),u=c+Math.floor((r()-.5)*6),f=d-Ut;if(Math.abs(f)<Ln+20&&u>Qt.wallN-20&&u<Qt.wallS+12||u>=300&&Math.abs(f)<78||Math.abs(Math.abs(f)-99)<15||u<22&&Math.abs(f)<112||u>=330&&Math.abs(f)>56&&Math.abs(f)<118||ja(f,u)||ja(f,u+5)||ja(f,u-5))continue;const p=i(d,u);if(n[p]!==Ot.GRASS)continue;let _=!1;for(const[v,b]of[[4,0],[-4,0],[0,4],[0,-4]])n[i(d+v,u+b)]!==Ot.GRASS&&(_=!0);if(_)continue;const m=gi(d*.022+5,u*.022+9,21);if(m<.4||r()>.55+(m-.4))continue;const g=e[p],M=r(),S=d*131+u;M<.32?Qa(s,d,g,u,S,11+Math.floor(r()*5)):M<.5?eu(s,d,g,u,S,13+Math.floor(r()*6)):M<.68?Ri(s,d,g,u,"oak",S,7+Math.floor(r()*3),5+r()*2):M<.78?Ri(s,d,g,u,"maple",S,7,5):M<.86?Ri(s,d,g,u,"ginkgo",S,8,6):M<.93?Ri(s,d,g,u,"blossom",S,6,4.5):dr(s,d,g,u,S,7,3),o++}for(let c=0;c<14;c++){const h=-70+c*10.5+(Tn(c,3,5)-.5)*3,d=Ki.pondZ+(c&1?20:-21)+Math.round((Tn(c,4,5)-.5)*3),u=Math.round(Ut+h);Math.abs(h)<26||n[i(u,d)]===Ot.GRASS&&kb(s,u,e[i(u,d)],d,90+c,8)}for(const c of[-62,-47,47,62]){const h=Ki.pondZ-20;tl(s,Ut+c,e[i(Ut+c,h)],h,3,5,3,Math.abs(c))}return o}const eo=-32768;function $i(s,t,e={}){const n=e.x??1/0,i=e.z??1/0;return[{nx:1,nz:0,c:s,limit:n},{nx:-1,nz:0,c:s,limit:n},{nx:0,nz:1,c:t,limit:i},{nx:0,nz:-1,c:t,limit:i}]}function Kb(s){return[{nx:0,nz:1,c:s,limit:1/0},{nx:0,nz:-1,c:s,limit:1/0}]}function Jm(s){const t=Math.SQRT1_2,e=[];for(const[n,i]of[[1,0],[-1,0],[0,1],[0,-1],[t,t],[-t,t],[t,-t],[-t,-t]])e.push({nx:n,nz:i,c:s,limit:1/0});return e}function vo(s){const t=s/Math.cos(Math.PI/8),e=[];for(let n=0;n<8;n++){const i=Math.PI/8+n*Math.PI/4;e.push([t*Math.cos(i),t*Math.sin(i)])}return e}function Ir(s,t){return[[s,t],[-s,t],[s,-t],[-s,-t]]}function $b(s,t){const e=s.p??1.55,n=s.curl??[2,3];let i=s.y0+s.H*Math.pow(Math.min(t,s.rhoMax)/s.rhoMax,e);return n[0]>0&&t<n[1]&&(i+=n[0]*(1-t/n[1])**2),i}function Oi(s,t){const{A:e,B:n,edges:i,y0:r,H:o,rhoMax:a}=t,l=t.p??1.55,c=t.thick??2,h=t.curl??[2,3],d=t.lift??{L:0,T:10},u=t.verts??[],f=t.innerRho??1/0,p=t.wallRho??1/0,_=t.plateRho??p-2.5,m=t.ceilY??r,g=t.ridgeH??1,M=t.hipW??.75,S=t.colors,v=2*e+1,b=2*n+1,E=new Int16Array(v*b).fill(eo),R=new Float32Array(v*b),y=new Uint8Array(v*b),T=new Uint8Array(v*b),I=new Uint8Array(v*b),L=(B,X)=>B+e+(X+n)*v;for(let B=-n;B<=n;B++)for(let X=-e;X<=e;X++){let $=1/0,gt=1/0,mt=-1,zt=!1,Wt=!1;for(let qt=0;qt<i.length;qt++){const K=i[qt];let rt=K.c-(K.nx*X+K.nz*B);if(rt<-1e-6){zt=!0;break}rt>K.limit&&(rt<=K.limit+1&&(Wt=!0),rt=1/0),rt<$?(gt=$,$=rt,mt=qt):rt<gt&&(gt=rt)}if(zt||!isFinite($))continue;const Dt=$;if(Dt>f+1e-6||t.skip&&t.skip(X,B))continue;const J=Math.min(Dt,a);let et=r+o*Math.pow(J/a,l);if(h[0]>0&&Dt<h[1]){const qt=1-Dt/h[1];et+=h[0]*qt*qt}if(d.L>0){let qt=0;for(let K=0;K<u.length;K++){const rt=X-u[K][0],dt=B-u[K][1],ht=Math.hypot(rt,dt);if(ht<d.T){const vt=1-ht/d.T,Nt=d.L*vt*vt;Nt>qt&&(qt=Nt)}}et+=qt}let ut=Math.round(et);const xt=L(X,B);let st=1;Dt>=a-.01?st=2:isFinite(gt)&&gt-$<=M&&Dt>=1.5&&(st=3),st>1&&(ut+=g),E[xt]=ut,R[xt]=Dt,y[xt]=st;const Mt=i[mt];T[xt]=Mt.nx!==0&&Mt.nz!==0?2:Mt.nx!==0?1:0,I[xt]=Wt&&Dt>=0||t.endGable&&Math.abs(X)===e?1:0}const N=(B,X)=>B<-e||B>e||X<-n||X>n?eo:E[L(B,X)],G=(B,X,$)=>($===0?B:$===1?X:Math.abs(B)-Math.abs(X))&1,U=new Set(t.beasts?[3,5,7,9,11]:[]);let z=1/0,W=-1/0,V=0,nt=null;for(let B=-n;B<=n;B++)for(let X=-e;X<=e;X++){const $=L(X,B),gt=E[$];if(gt===eo)continue;const mt=R[$],zt=y[$],Wt=mt>=p-.01;let Dt=Wt?Math.min(m,gt):gt-c+1;!Wt&&mt>=_&&(Dt=Math.min(Math.max(Dt,m),gt));const J=[N(X+1,B),N(X-1,B),N(X,B+1),N(X,B-1)];for(let xt=0;xt<4;xt++)J[xt]!==eo&&J[xt]+1<Dt&&(Dt=J[xt]+1);const et=T[$],ut=G(X,B,et);for(let xt=Dt;xt<=gt;xt++){let st;const Mt=xt===gt;if(Mt&&zt>1&&g>0)st=S.ridge;else if(Mt||zt>1&&xt===gt-1&&g>0)st=mt<.5?S.trim:ut?S.tileB:S.tileA,Mt&&I[$]&&t.gableAt!==void 0&&(st=S.gableTrim??st);else{let qt=!1,K=!1;for(let rt=0;rt<4;rt++)J[rt]===eo?(K=!0,qt=!0):J[rt]<xt&&(qt=!0);xt===Dt&&!Wt?st=S.rafter[ut]:K&&mt<1.5?st=S.face[ut]:qt&&I[$]&&S.gable!==void 0?st=(B&3)===0?S.gableTrim??S.gable:S.gable:xt===Dt?st=S.ceil??S.rafter[0]:st=ut?S.tileB:S.tileA}s.set(X,xt,B,st)}zt===2&&(B===0&&(X<z&&(z=X),X>W&&(W=X)),V=Math.max(V,gt),X===0&&B===0&&(nt=gt)),zt===3&&U.has(Math.round(mt))&&S.beast!==void 0&&s.set(X,gt+1,B,S.beast)}if(t.chiwen&&isFinite(z)&&W>z){const B=S.chiwen??S.ridge;for(const X of[1,-1]){const $=X===1?W:z,gt=N($,0);for(const[mt,zt,Wt]of Jb)for(let Dt=-Wt;Dt<=Wt;Dt++)s.set($+X*mt,gt+zt,Dt,B);s.set($+X*1,gt+3,0,t.chiwenEye??S.gableTrim??B)}}if(t.finial&&nt!==null){const B=N(0,0),X=t.finial.layers??jb;for(let $=0;$<X.length;$++){const[gt,mt]=X[$];gt===0?s.set(0,B+1+$,0,mt):gt===1?s.box(-1,B+1+$,-1,1,B+1+$,1,mt):s.cyl(0,0,gt,B+1+$,B+1+$,mt)}}return{top:E,topAt:N,ridgeTop:V,ridgeMinX:z,ridgeMaxX:W}}const Jb=[[-1,1,1],[0,1,1],[1,1,1],[-1,2,1],[0,2,1],[1,2,1],[0,3,1],[1,3,1],[0,4,0],[1,4,0],[-1,5,0],[0,5,0],[-1,6,0]],jb=[[1,x.GOLD_D],[0,x.GOLD],[1,x.GOLD],[1,x.GOLD_L],[0,x.GOLD],[0,x.GOLD],[0,x.GOLD_L]],Ui={yellow:{tileA:x.Y1,tileB:x.Y2,ridge:x.Y3,trim:x.G2,face:[x.GREEN_L,x.BLUE_L],rafter:[x.BLUE,x.GREEN],gable:x.RED,gableTrim:x.GOLD,ceil:x.WOOD_D,beast:x.GREEN_L,chiwen:x.Y2},green:{tileA:x.G1,tileB:x.G2,ridge:x.G3,trim:x.Y2,face:[x.BLUE_L,x.GREEN_L],rafter:[x.BLUE,x.GREEN],gable:x.RED,gableTrim:x.GOLD,ceil:x.WOOD_D,beast:x.Y2,chiwen:x.Y1},gray:{tileA:x.T1,tileB:x.T2,ridge:x.T3,trim:x.T3,face:[x.WOOD,x.RED],rafter:[x.WOOD,x.RED_D],gable:x.BRICK,gableTrim:x.BRICK2,ceil:x.WOOD_D,beast:x.T2,chiwen:x.T3},blue:{tileA:x.B1,tileB:x.B2,ridge:x.B3,trim:x.Y2,face:[x.GREEN_L,x.RED_L],rafter:[x.BLUE,x.GREEN],gable:x.RED,gableTrim:x.GOLD,ceil:x.WOOD_D,beast:x.Y2,chiwen:x.Y1},brown:{tileA:x.R1,tileB:x.R2,ridge:x.R3,trim:x.Y3,face:[x.WOOD,x.RED],rafter:[x.WOOD,x.RED_D],gable:x.RED,gableTrim:x.GOLD_D,ceil:x.WOOD_D,beast:x.Y3,chiwen:x.R3}};function Gc(s,t,e,n,i,r,o,a={}){const l=a.cap??x.MARBLE,c=a.body??x.MARBLE2,h=a.base??x.STONE2,d=a.band??x.STONE;for(let u=0;u<o;u++){const f=u===o-1?l:u===0?h:c;s.box(t,r+u,n,e,r+u,i,f)}if(o>=3&&!a.plain)for(let u=1;u<o-1;u++){for(let f=t;f<=e;f++)for(const p of[n,i])(f>>1&1)===0&&s.set(f,r+u,p,d);for(let f=n;f<=i;f++)for(const p of[t,e])(f>>1&1)===0&&s.set(p,r+u,f,d)}}function ni(s,t,e,n,i,r,o={}){const a=o.dir??1,l=o.run??2,c=o.tread??x.MARBLE,h=o.riser??x.MARBLE2,d=o.ribbon??!0;for(let u=1;u<=r-1;u++){const f=n+a*((r-1-u)*l+1),p=n+a*((r-u)*l);if(u>1&&s.box(t,i,f,e,i+u-2,p,h),s.box(t,i+u-1,f,e,i+u-1,p,c),o.ramp){const[_,m]=o.ramp;u>1&&s.box(_,i,f,m,i+u-2,p,x.STONE),s.box(_,i+u-1,f,m,i+u-1,p,x.SLAB1);for(let g=Math.min(f,p);g<=Math.max(f,p);g++)(g+u&1)===0&&s.set(Math.floor((_+m)/2),i+u-1,g,x.SLAB2)}}if(d){for(let u=1;u<=r-1;u++){const f=n+a*((r-1-u)*l+1),p=n+a*((r-u)*l);for(const _ of[t-1,e+1])s.box(_,i,f,_,i+u,p,x.MARBLE)}for(const u of[t-1,e+1])s.box(u,i,n,u,i+r-1,n,x.MARBLE)}}function Ge(s,t,e,n,i,r={}){const o=r.every??4,a=r.mat??x.MARBLE,l=r.cap??x.MARBLE2;for(let c=t;c<=e;c++)(c-t)%o===0||c===e?(s.box(c,i,n,c,i+2,n,a),s.set(c,i+3,n,l)):(s.set(c,i,n,a),s.set(c,i+2,n,a),(c-t)%2===0&&s.set(c,i+1,n,a))}function Bn(s,t,e,n,i,r={}){const o=r.every??4,a=r.mat??x.MARBLE,l=r.cap??x.MARBLE2;for(let c=e;c<=n;c++)(c-e)%o===0||c===n?(s.box(t,i,c,t,i+2,c,a),s.set(t,i+3,c,l)):(s.set(t,i,c,a),s.set(t,i+2,c,a),(c-e)%2===0&&s.set(t,i+1,c,a))}function ql(s,t,e,n,i,r={}){const o=r.color??x.RED;for(let a=t;a<=e;a++)s.set(a,i,n,o),(a-t)%2===0&&s.set(a,i+1,n,o),s.set(a,i+2,n,x.RED_D)}function Zl(s,t,e,n,i,r={}){const o=r.color??x.RED;for(let a=e;a<=n;a++)s.set(t,i,a,o),(a-e)%2===0&&s.set(t,i+1,a,o),s.set(t,i+2,a,x.RED_D)}function je(s,t,e,n,i,r={}){s.set(t,n,e,r.base??x.STONE),s.box(t,n+1,e,t,n+i-1,e,r.color??x.RED)}function Qb(s,t,e,n,i,r){r(s,t,e,i,"S"),r(s.child(0,0,0,"N"),-e,-t,-n,"N"),r(s.child(0,0,0,"E"),-i,-n,e,"E"),r(s.child(0,0,0,"W"),n,i,-t,"W")}function tw(s,t,e,n,i,r,o={}){const a=o.beam??[x.BLUE,x.GREEN],l=o.set1??x.BLUE_L,c=o.set2??x.GREEN_L,h=o.tip??x.GOLD,d=o.ext??2;for(let f=t;f<=e;f++){let p=!1;for(const _ of r)Math.abs(f-_)<=1&&(p=!0);s.set(f,i,n,p?a[1]:a[0])}if(o.beamTrim??!0)for(let f=t;f<=e;f++)(f-t&3)===2&&s.set(f,i,n+1,x.GOLD_D);const u=new Set;for(const f of r)u.add(f);for(let f=0;f<r.length-1;f++){const p=r[f],m=r[f+1]-p;m>=5&&u.add(p+Math.round(m/2)),m>=11&&(u.delete(p+Math.round(m/2)),u.add(p+Math.round(m/3)),u.add(p+Math.round(2*m/3)))}for(let f=t;f<=e;f++)s.set(f,i+1,n,x.GREEN);for(let f=t;f<=e;f++)s.set(f,i+2,n,x.BLUE),d>=1&&s.set(f,i+2,n+1,x.RED_D);for(const f of u){const p=r.includes(f),_=1;for(let m=f-_;m<=f+_;m++)m<t||m>e||(s.set(m,i+1,n+1,m===f?l:c),d>=2&&s.set(m,i+2,n+2,m===f?c:l));d>=2&&s.set(f,i+2,n+2,h)}for(const f of[r[0],r[r.length-1]])d>=2&&(s.set(f,i+1,n+2,l),s.set(f,i+2,n+3,h))}function Fo(s,t,e,n,i,r,o,a,l={}){Qb(s,t,e,n,i,(c,h,d,u,f)=>{const p=f==="S"||f==="N"?f==="S"?o:o.map(_=>-_).reverse():f==="E"?a.map(_=>-_).reverse():a;tw(c,h,d,u,r,p,l)});for(const[c,h]of[[t,n],[e,n],[t,i],[e,i]])s.set(c,r,h,x.GREEN),s.set(c,r+1,h,x.GREEN),s.set(c,r+2,h,x.BLUE)}function un(s,t,e){const n=Math.abs(s),i=Math.abs(t);return n<=e&&i<=e&&n+i<=e*Math.SQRT2+.5}function Yn(s,t,e,n,i,r){const o=Math.ceil(t);for(let a=-o;a<=o;a++)for(let l=-o;l<=o;l++)if(un(l,a,t))for(let c=e;c<=n;c++){const h=i;s.set(l,c,a,h)}}function ew(s,t=1){const e=[],n=Math.ceil(s);for(let i=-n;i<=n;i++)for(let r=-n;r<=n;r++)un(r,i,s)&&!un(r,i,s-t)&&e.push([r,i]);return e}const Hc=(s,t)=>s%3===0||t%3===0?x.WOOD:x.PAPER;function jm(s,t,e,n,i){return t===0?i.plinth??x.STONE_D:t===n-1?i.top??x.RED_D:i.wall??x.RED}function nw(s,t,e,n){if(s===0||s===e-1||t===n-1)return x.RED_D;if(e>=4&&s===Math.floor((e-1)/2)||e>=5&&e%2===0&&s===Math.floor((e-1)/2)+1)return x.WOOD_D;const i=Math.max(2,Math.floor(n*.4));return t<i?t===1&&s%3===1?x.GOLD:x.RED:t===i?x.RED_D:Hc(s,t)}function iw(s,t,e,n){return s===0||s===e-1||t===n-1?x.RED_D:e>=4&&s===Math.floor(e/2)?x.WOOD_D:s%2===1&&t%2===1&&t<n-2?x.GOLD:x.RED}function sw(s,t,e,n,i){const r=i.sill??3;return t===0?i.plinth??x.STONE_D:t===n-1?i.top??x.RED_D:t<r?i.wall??x.RED:s===0||s===e-1||t===r||t===n-2?x.WOOD_D:Hc(s,t)}function rw(s,t,e,n){return t===n-1||s===0||s===e-1?x.RED_D:t<2?t===0?x.STONE_D:x.RED:t===2||t===n-2?x.WOOD_D:Hc(s,t)}function ow(s,t,e,n,i){return i.wall??x.RED}function aw(s,t,e,n){return t===0||t===n-1?x.RED_D:s===0||s===e-1?x.RED:Hc(s,t)}function lw(s,t,e,n,i){return t===0?x.STONE_D:t===n-1?x.BRICK_D:(s+(t&1)*2&3)===0?x.BRICK2:x.BRICK}function cw(s,t){return(s+(t&1)&1)===0?x.STONE:x.STONE2}const hw={wall:jm,plain:ow,band:aw,door:nw,stud:iw,window:sw,lattice:rw,brick:lw,stone:cw};function Wa(s,t,e,n,i,r,o={}){const a=o.th??1;for(let l=0;l<t.length-1;l++){const c=r[l]??"wall";if(c==="open"||c==="none")continue;const h=t[l]+1,d=t[l+1]-1;if(d<h)continue;const u=hw[c]??jm,f=d-h+1,p=i-n+1;for(let _=h;_<=d;_++)for(let m=n;m<=i;m++){const g=u(_-h,m-n,f,p,o);if(g!==void 0)for(let M=0;M<a;M++)s.set(_,m,e-M,g)}}}function Os(s,t,e,n,i=!0){i?(s.set(t,e,n,x.GOLD_D),s.box(t,e+1,n,t,e+1,n,x.LAMP),s.box(t-1,e+2,n,t+1,e+2,n,x.LAMP),s.box(t,e+2,n-1,t,e+2,n+1,x.LAMP),s.box(t-1,e+3,n-1,t+1,e+3,n+1,x.LAMP),s.box(t-1,e+4,n,t+1,e+4,n,x.LAMP),s.box(t,e+4,n-1,t,e+4,n+1,x.LAMP),s.set(t,e+5,n,x.GOLD),s.set(t,e+6,n,x.WOOD_D)):(s.set(t,e,n,x.GOLD_D),s.set(t,e+1,n,x.LAMP),s.set(t,e+2,n,x.LAMP),s.set(t,e+3,n,x.GOLD))}function Zo(s,t,e,n){s.set(t,e,n,x.GOLD),s.set(t,e+1,n,x.GOLD_D)}function el(s,t,e,n,i,r,o,a,l,c,h,d,u={}){Wa(s,t,o,c,h,d.front,u);const f=s.child(0,0,0,"N");Wa(f,t.map(v=>-v).reverse(),-(r+a),c,h,d.back.slice().reverse(),u);const p=e.filter(v=>v<=o);p[p.length-1]<o&&p.push(o);const _=p.length-1,m=d.right.slice(0,_),g=d.left.slice(0,_);for(;m.length<_;)m.push("wall");for(;g.length<_;)g.push("wall");const M=s.child(0,0,0,"E");Wa(M,p.map(v=>-v).reverse(),i-l,c,h,m.slice().reverse(),u);const S=s.child(0,0,0,"W");Wa(S,p,-(n+l),c,h,g,u)}function Xu(s,t){const e=t.xs,n=t.zs,i=e[0],r=e[e.length-1],o=n[0],a=n[n.length-1],l=t.plat??0,c={s:3,b:3,f:4,...t.margin??{}},h=t.colH??9,d=t.frontInset??0,u=l;l>0&&(Gc(s,i-c.s,r+c.s,o-c.b,a+c.f,0,l,t.platStyle),s.box(i-c.s+1,l-1,o-c.b+1,r+c.s-1,l-1,a+c.f-1,t.apron??x.MARBLE),s.box(i,l-1,o,r,l-1,a,t.floor??x.STONE2));const f={color:t.colColor??x.RED};for(const V of e)je(s,V,o,u,h,f),je(s,V,a,u,h,f);for(const V of n)je(s,i,V,u,h,f),je(s,r,V,u,h,f);if(t.inner)for(const V of e)for(const nt of n)je(s,V,nt,u,h,f);const p=u,_=u+h-1,m=t.wallOpt??{},g={front:t.front??[],back:t.back??[],left:t.left??[],right:t.right??[]},S=a-(d||1);el(s,e,n,i,r,o,S,1,1,p,_,g,m);const v=u+h;Fo(s,i,r,o,a,v,e,n,t.brackets);const b=v+3,E=t.roof,R=E.ov??6,y=0,T=o+a>>1,I=s.child(y,0,T),L=r+(E.type==="hard"?0:E.type==="gable"?E.ovx??2:R),N=(a-o)/2+R,G=Ui[E.scheme??"green"],U=E.rise??Math.round(N*.75);let z;E.type==="xieshan"?z=$i(L,N,{x:R+(E.gable??3)}):E.type==="hip"?z=$i(L,N):z=Kb(N);const W=Oi(I,{A:L,B:N,edges:z,verts:Ir(L,N),y0:b-1,H:U,rhoMax:N,p:E.p??1.55,curl:E.curl??[2,3],lift:E.lift??{L:E.type==="hard"?0:3,T:11},thick:E.thick??2,ceilY:b,wallRho:R,plateRho:R-2.5,gableAt:E.type==="xieshan"||E.type==="gable"||E.type==="hard"?!0:void 0,endGable:E.type==="gable"||E.type==="hard",beasts:E.beasts??!0,chiwen:E.chiwen??!0,hipW:E.hipW??.75,colors:E.type==="hard"?{...G,gable:x.BRICK,gableTrim:x.BRICK2}:G});if(t.lanterns){const V=u+h-6;for(let nt=0;nt<e.length-1;nt++){const B=Math.round((e[nt]+e[nt+1])/2);Os(s,B,V,a+1,!0)}}if(t.bells??!0)for(const[V,nt]of[[1,1],[-1,1],[1,-1],[-1,-1]]){const B=W.topAt(V*L,nt*N);B>-3e4&&Zo(I,V*L,B-3,nt*N)}return{x0:i,x1:r,z0:o,z1:a,yF:u,yBeam:v,ceilY:b,roofTop:W.ridgeTop,A:L,B:N,cz:T,roofInfo:W}}const Yi=(s,t)=>Array.from({length:t},()=>s);function Qm(s,t){const{xsO:e,zsO:n,xsI:i,zsI:r}=t,o=e[0],a=e[e.length-1],l=n[0],c=n[n.length-1],h=i[0],d=i[i.length-1],u=r[0],f=r[r.length-1];let p=0;for(const st of t.tiers)Gc(s,o-st.mx,a+st.mx,l-st.mzB,c+st.mzF,p,st.h,t.platStyle),p+=st.h;const _=t.tiers[t.tiers.length-1];s.box(o-_.mx+1,p-1,l-_.mzB+1,a+_.mx-1,p-1,c+_.mzF-1,x.MARBLE),s.box(o,p-1,l,a,p-1,c,t.floorOuter??x.STONE2),s.box(h,p-1,u,d,p-1,f,t.floor??x.STONE_D);const m=t.colH1,g=p+m,M=g+3,S=t.skirt,v=a+S.ov,b=c+S.ov,E=v-d,R=b-f,y=Math.max(E,R),T={y0:M-1,H:S.rise,rhoMax:y+1.5,p:S.p??1.5,curl:S.curl??[2,3]},L=Math.round($b(T,y))+1,N=L+t.upperH,G=N+1,U=G+3,z={color:t.colColor??x.RED};for(const st of e)je(s,st,l,p,m,z),je(s,st,c,p,m,z);for(const st of n)je(s,o,st,p,m,z),je(s,a,st,p,m,z);const W=U-p;for(const st of i)for(const Mt of r)je(s,st,Mt,p,st===h||st===d||Mt===u||Mt===f?N-p+1:W,z);const V=i.length-1,nt=r.length-1,B=t.lower;el(s,i,r,h,d,u,f-1,1,1,p,p+m-1,B,t.wallOpt);const X={front:Yi("plain",V),back:Yi("plain",V),left:Yi("plain",nt),right:Yi("plain",nt)};el(s,i,r,h,d,u,f-1,1,1,p+m,L,X,t.wallOpt);const $={front:Yi(t.upperKind??"band",V),back:Yi(t.upperKind??"band",V),left:Yi(t.upperKind??"band",nt),right:Yi(t.upperKind??"band",nt)};el(s,i,r,h,d,u,f-1,1,1,L+1,N,$,t.wallOpt),Fo(s,o,a,l,c,g,e,n,t.brackets),Fo(s,h,d,u,f,G,i,r,t.brackets);const gt=Ui[S.scheme],mt=Oi(s,{A:v,B:b,edges:$i(v,b),verts:Ir(v,b),y0:T.y0,H:T.H,rhoMax:T.rhoMax,p:T.p,curl:T.curl,lift:{L:S.L??3,T:S.T??11},thick:2,ceilY:M,skip:(st,Mt)=>Math.abs(st)<=d&&Math.abs(Mt)<=f,beasts:!0,hipW:.75,colors:gt}),zt=t.upper,Wt=d+zt.ov,Dt=f+zt.ov;let J;zt.type==="xieshan"?J=$i(Wt,Dt,{x:zt.ov+(zt.gable??3)}):J=$i(Wt,Dt);const et=Ui[zt.scheme],ut=Oi(s,{A:Wt,B:Dt,edges:J,verts:Ir(Wt,Dt),y0:U-1,H:zt.rise,rhoMax:Dt,p:zt.p??1.6,curl:zt.curl??[2,3],lift:{L:zt.L??4,T:zt.T??13},thick:2,ceilY:U,wallRho:zt.ov,plateRho:zt.ov-2.5,gableAt:zt.type==="xieshan"?!0:void 0,beasts:!0,chiwen:!0,hipW:zt.hipW??1.1,ridgeH:zt.ridgeH??2,colors:et});for(const[st,Mt,qt,K,rt]of[[1,1,mt,v,b],[-1,1,mt,v,b],[1,-1,mt,v,b],[-1,-1,mt,v,b],[1,1,ut,Wt,Dt],[-1,1,ut,Wt,Dt],[1,-1,ut,Wt,Dt],[-1,-1,ut,Wt,Dt]]){const dt=qt.topAt(st*K,Mt*rt);dt>-3e4&&Zo(s,st*K,dt-3,Mt*rt)}if(t.lanterns){const st=p+m-6;for(let Mt=0;Mt<e.length-1;Mt++)Os(s,Math.round((e[Mt]+e[Mt+1])/2),st,c+1,!0);for(const Mt of[o,a])for(let qt=0;qt<n.length-1;qt++){const K=Math.round((n[qt]+n[qt+1])/2);Os(s,Mt+(Mt>0?1:-1),st,K,!0)}}const xt={yF:p,yB1:g,ceilY1:M,ySkirtTop:L,yU1:N,yB2:G,ceilY2:U,x0O:o,x1O:a,z0O:l,z1O:c,x0I:h,x1I:d,z0I:u,z1I:f,roofTop:ut.ridgeTop,A1:v,B1:b,A2:Wt,B2:Dt};return t.interior&&t.interior(s,xt),xt}function Us(s,t,e,n,i,r,o=4,a=3){const l=t-Math.floor(i/2);s.box(l,e,n,l+i-1,e+r-1,n,x.GOLD_D),s.box(l+1,e+1,n,l+i-2,e+r-2,n,x.BLUE_D);const c=Math.floor((i-2)/o);for(let h=0;h<o;h++)for(let d=0;d<r-2;d++)for(let u=0;u<c-1;u++){const f=Ue(h,u+d*7,d,a);(u===1&&d>0||d===1&&f>.25||f>.62||d===r-4&&u!==0)&&s.set(l+1+h*c+u+0,e+1+d,n,x.GOLD_L)}}function uw(s){const t={censers:[],lamps:[]},e=Qm(s,{xsO:[-26,-19,-12,-5,5,12,19,26],zsO:[-16,-8,0,8,16],xsI:[-19,-12,-5,5,12,19],zsI:[-8,0,8],tiers:[{h:3,mx:6,mzB:6,mzF:6},{h:3,mx:3,mzB:3,mzF:3}],colH1:10,upperH:6,lower:{front:["window","door","open","door","window"],back:["wall","wall","wall","wall","wall"],left:["wall","wall"],right:["wall","wall"]},skirt:{scheme:"yellow",ov:6,rise:7,L:4,T:12},upper:{type:"hip",scheme:"yellow",ov:9,rise:16,L:5,T:14},lanterns:!0,interior(r,o){const a=o.yF;Wb(r,0,a,-4),r.box(-4,a,1,4,a+1,2,x.RED_D),r.box(-4,a+2,1,4,a+2,2,x.GOLD_D);for(const l of[-7,7])r.box(l,a,2,l,a+3,2,x.WOOD_D),r.set(l,a+4,2,x.FLAME);for(const l of[-12,12])r.set(l,o.ceilY2-1,0,x.WOOD_D),r.set(l,o.ceilY2-2,0,x.LAMP),r.set(l,o.ceilY2-3,0,x.LAMP)}});e.yF,Us(s,0,e.ySkirtTop+2,e.z1I-1,15,5,4,11),Gc(s,-20,20,23,34,0,3),s.box(-19,2,24,19,2,33,x.MARBLE),s.box(-19,2,24,19,2,33,x.SLAB2),s.box(-19,2,24,19,2,24,x.MARBLE);for(let r=24;r<=33;r++)for(let o=-19;o<=19;o++)(o>>2)+(r>>2)&1&&s.set(o,2,r,x.SLAB1);ni(s,-6,6,19,3,3,{run:2,ramp:[-1,1]}),ni(s,-6,6,34,0,3,{run:2,ramp:[-1,1]}),Ge(s,-20,-8,34,3),Ge(s,8,20,34,3),Bn(s,-20,23,34,3),Bn(s,20,23,34,3),Ge(s,-29,-8,19,6),Ge(s,8,29,19,6),Bn(s,-29,-19,19,6),Bn(s,29,-19,19,6),Ge(s,-29,29,-19,6),Ge(s,-32,-21,22,3),Ge(s,21,32,22,3),Bn(s,-32,-22,22,3),Bn(s,32,-22,22,3),Ge(s,-32,32,-22,3),Yl(s,-10,3,30,"S",{body:x.BRONZE,mane:x.BRONZE_D,base:x.MARBLE2,ball:x.GOLD}),Yl(s,10,3,30,"S",{body:x.BRONZE,mane:x.BRONZE_D,base:x.MARBLE2,ball:x.GOLD});const n=nu(s,-15,3,28,!0),i=nu(s,15,3,28,!0);return t.censers.push(s.pos(...n),s.pos(...i)),{info:e,anchors:t,front:34,frontStairsEnd:38,halfW:33,halfD:22}}function fw(s){const n=Xu(s,{xs:[-15,-6,6,15],zs:[-8,0,8],plat:2,margin:{s:4,b:3,f:4},colH:10,front:["wall","open","wall"],back:["wall","open","wall"],left:["wall","wall"],right:["wall","wall"],roof:{type:"xieshan",scheme:"green",ov:6,rise:12,gable:3},inner:!0,lanterns:!0,wallOpt:{wall:x.RED}}),i=n.yF;for(const r of[-5,5])for(let o=i;o<i+8;o++)for(let a=-2;a<=2;a++){const l=a===-2||a===2||o===i+7,c=!l&&(a+2&1)===1&&(o-i&1)===1;s.set(r,o,a,l?x.RED_D:c?x.GOLD:x.RED)}return Us(s,0,i+7,n.z1-1,9,3,2,5),Us(s.child(0,0,0,"N"),0,i+7,-n.z0-1,9,3,2,6),ni(s,-5,5,n.z1+4,0,2,{run:3,ramp:[-1,1]}),Yl(s,-10,0,n.z1+9,"S",{body:x.LION}),Yl(s,10,0,n.z1+9,"S",{body:x.LION}),{info:n}}function dw(s){const n=Xu(s,{xs:[-21,-13,-5,5,13,21],zs:[-7,0,7],plat:3,margin:{s:3,b:3,f:4},colH:10,front:["window","door","open","door","window"],back:["window","door","open","door","window"],left:["wall","wall"],right:["wall","wall"],roof:{type:"xieshan",scheme:"green",ov:6,rise:13,gable:3},inner:!0,lanterns:!0});Us(s,0,n.yF+7,n.z1-1,9,3,2,9),Us(s.child(0,0,0,"N"),0,n.yF+7,-n.z0-1,9,3,2,10),ni(s,-6,6,n.z1+4,0,3,{run:2,ramp:[-1,1]}),Ge(s,-24,-8,n.z1+4,3),Ge(s,8,24,n.z1+4,3),Bn(s,-24,n.z0-3,n.z1+4,3),Bn(s,24,n.z0-3,n.z1+4,3),Ge(s,-24,24,n.z0-3,3);const i=n.yF;return s.box(-3,i,-1,3,i+1,2,x.RED_D),s.box(-2,i+2,0,2,i+4,1,x.BUDDHA),s.box(-1,i+5,0,1,i+6,1,x.SKIN),{info:n}}function Gd(s,t={}){const e=t.roofType??"gable",n=Xu(s,{xs:[-9,-3,3,9],zs:[-4,4],plat:2,margin:{s:2,b:2,f:3},colH:8,front:["window","door","window"],back:["wall","wall","wall"],left:["wall"],right:["wall"],roof:{type:e,scheme:t.scheme??"gray",ov:4,ovx:2,rise:t.rise??8,gable:2,lift:{L:e==="hard"?0:2,T:8}},lanterns:!1,inner:!1,brackets:{ext:1}}),i=n.yF+2;for(const r of[-6,0,6])Os(s,r,i,n.z1+1,!1);return ni(s,-2,2,n.z1+3,0,2,{run:2}),{info:n}}function Hd(s,t="bell"){const e={};for(let f=0;f<6;f++)for(let p=-11;p<=11;p++)for(let _=-11;_<=11;_++){if(!(Math.abs(_)===11||Math.abs(p)===11)&&f>0)continue;let g;f===0?g=x.STONE_D:g=(_+(f&1)*2+p&3)===0?x.BRICK2:x.BRICK,s.set(_,f,p,g)}s.box(-10,0,-10,10,5,10,x.BRICK),s.box(-12,6,-12,12,6,12,x.MARBLE2),s.box(-12,7,-12,12,7,12,x.MARBLE);for(let f=-12;f<=12;f++){for(let p=1;p<=5;p++){const _=p<=3||p===4?2:1;for(let m=-_;m<=_;m++)s.set(m,p,f,0)}s.set(-3,1,f,x.STONE),s.set(3,1,f,x.STONE)}for(const f of[-11,11]){for(let p=1;p<=5;p++){const _=p<=4?3:2;s.set(-_,p,f,x.MARBLE),s.set(_,p,f,x.MARBLE)}s.set(-2,5,f,x.MARBLE),s.set(2,5,f,x.MARBLE)}const r=8;Ge(s,-11,11,-11,r),Ge(s,-11,11,11,r),Bn(s,-11,-11,11,r),Bn(s,11,-11,11,r);const o=[-9,-3,3,9],a=[-9,-3,3,9],l=9;for(const f of o)je(s,f,-9,r,l),je(s,f,9,r,l);for(const f of a)je(s,-9,f,r,l),je(s,9,f,r,l);for(let f=0;f<3;f++){const p=o[f]+1,_=o[f+1]-1;ql(s,p,_,9,r+1),ql(s,p,_,-9,r+1),Zl(s,9,p,_,r+1),Zl(s,-9,p,_,r+1)}const c=r+l;Fo(s,-9,9,-9,9,c,o,a);const h=c+3,d=6,u=9+d;Oi(s,{A:u,B:u,edges:$i(u,u,{x:d+3}),verts:Ir(u,u),y0:h-1,H:12,rhoMax:u,p:1.55,curl:[2,3],lift:{L:3,T:11},thick:2,ceilY:h,wallRho:d,plateRho:d-2.5,gableAt:!0,beasts:!0,chiwen:!0,colors:Ui.green});for(const[f,p]of[[1,1],[-1,1],[1,-1],[-1,-1]])Zo(s,f*u,h-1+1,p*u);t==="bell"?(s.box(-9,c-1,0,9,c-1,0,x.WOOD_D),Gb(s,0,r+2,0),e.bell=s.pos(0,r+6,0)):(Hb(s,0,r,0),e.drum=s.pos(0,r+4,0));for(const[f,p]of[[1,1],[-1,1],[1,-1],[-1,-1]])Os(s,f*10,c-6,p*10,!0);return{anchors:e,top:h+12}}function t0(s,t={}){const e=t.half??4,n=t.colH??8,i=t.ov??5,r=t.plat??2,o=e+i;Gc(s,-e-2,e+2,-e-2,e+2,0,r),s.box(-e-1,r-1,-e-1,e+1,r-1,e+1,x.MARBLE);const a=[-e,e];for(const d of a)for(const u of a)je(s,d,u,r,n);(t.rails??!0)&&(ql(s,-e+1,e-1,-e,r+1),Zl(s,-e,-e+1,e-1,r+1),Zl(s,e,-e+1,e-1,r+1),(t.openFront??!1)||ql(s,-e+1,e-1,e,r+1));const l=r+n;Fo(s,-e,e,-e,e,l,a,a);const c=l+3,h=Oi(s,{A:o,B:o,edges:$i(o,o),verts:Ir(o,o),y0:c-1,H:t.rise??9,rhoMax:o,p:1.5,curl:[2,3],lift:{L:t.lift??3,T:9},thick:2,ceilY:c,wallRho:i,plateRho:i-2.5,beasts:!0,hipW:.8,colors:Ui[t.scheme??"green"],finial:{layers:void 0}});for(const[d,u]of[[1,1],[-1,1],[1,-1],[-1,-1]]){const f=h.topAt(d*o,u*o);f>-3e4&&Zo(s,d*o,f-3,u*o)}return{top:c+(t.rise??9)+9}}function pw(s,t={}){const e=t.r??7,n=t.colH??8,i=t.ov??4,r=2,o=e+i;Yn(s,e+3,0,0,x.STONE_D),Yn(s,e+3,1,1,x.MARBLE),Yn(s,e+1,1,1,x.SLAB1);const a=vo(e).map(([f,p])=>[Math.round(f),Math.round(p)]);for(const[f,p]of a)je(s,f,p,r,n);const l=ew(e,1);for(const[f,p]of l)p>0&&Math.abs(f)<=2||(s.set(f,r,p,x.RED),(f+p&1)===0&&s.set(f,r+1,p,x.RED),s.set(f,r+2,p,x.RED_D));const c=r+n;for(const[f,p]of l)s.set(f,c,p,(f+p&3)<2?x.BLUE:x.GREEN),s.set(f,c+1,p,x.GREEN),s.set(f,c+2,p,x.BLUE_D);const h=c+3,d=Ui[t.scheme??"green"],u=Oi(s,{A:o,B:o,edges:Jm(o),verts:vo(o),y0:h-1,H:t.rise??9,rhoMax:o,p:1.5,curl:[2,3],lift:{L:3,T:8},thick:2,ceilY:h,wallRho:i,plateRho:i-2.5,hipW:.9,ridgeH:1,colors:d,finial:{layers:void 0}});for(const[f,p]of vo(o)){const _=Math.round(f),m=Math.round(p),g=u.topAt(_,m);g>-3e4&&Zo(s,_,g-3,m)}return{top:h+(t.rise??9)+10}}function mw(s,t={}){const e=t0(s,{half:4,colH:8,ov:4,plat:2,rise:8,scheme:t.scheme??"gray",rails:!1});return Xb(s,0,2,0,"S"),e}function gw(s){const t=Qm(s,{xsO:[-21,-13,-5,5,13,21],zsO:[-12,-4,4,12],xsI:[-13,-5,5,13],zsI:[-4,4],tiers:[{h:3,mx:5,mzB:5,mzF:5},{h:2,mx:3,mzB:3,mzF:3}],colH1:9,upperH:5,lower:{front:["window","door","window"],back:["wall","wall","wall"],left:["wall"],right:["wall"]},skirt:{scheme:"green",ov:5,rise:6,L:3,T:10},upper:{type:"xieshan",scheme:"green",ov:8,rise:12,gable:4,L:4,T:12,ridgeH:1,hipW:.75},lanterns:!0,interior(e,n){const i=n.yF;for(let r=-11;r<=11;r++)Math.abs(r)<2||(e.box(r,i,-3,r,i+6,-3,(r+20&1)===0?x.WOOD_D:x.WOOD),e.set(r,i+1,-2,x.GOLD_D),e.set(r,i+3,-2,x.BLUE),e.set(r,i+5,-2,x.RED_L))}});return Us(s,0,t.ySkirtTop+2,t.z1I-1,11,4,3,21),ni(s,-6,6,t.z1O+5,0,3,{run:2,ramp:[-1,1]}),Ge(s,-26,-8,t.z1O+5,3),Ge(s,8,26,t.z1O+5,3),Bn(s,-26,t.z0O-5,t.z1O+5,3),Bn(s,26,t.z0O-5,t.z1O+5,3),Ge(s,-26,26,t.z0O-5,3),{info:t}}function _w(s,t={}){const e=Ui[t.scheme??"brown"],n=t.tiers??7,i=t.radii??[8,8,7,7,6,6,5],r=t.bands??[7,6,6,5,5,5,5],o=4,a=t.body??x.TAN,l=i[0]+6;Yn(s,l,0,0,x.STONE_D),Yn(s,l,1,1,x.MARBLE2),Yn(s,l,2,2,x.MARBLE),Yn(s,l-2,3,3,x.MARBLE2),Yn(s,l-2,4,4,x.MARBLE),Yn(s,l-3,4,4,x.SLAB1);for(let u=-l;u<=l;u++)for(let f=-l;f<=l;f++)un(f,u,l)&&!un(f,u,l-1)&&(f+u>>1&1)===0&&s.set(f,1,u,x.STONE);ni(s,-2,2,l,0,3,{run:2,ribbon:!0});for(const u of["N","E","W"])ni(s.child(0,0,0,u),-2,2,l,0,3,{run:2,ribbon:!0});const c=l-3;for(let u=-c;u<=c;u++)for(let f=-c;f<=c;f++){if(!un(f,u,c)||un(f,u,c-1)||Math.abs(f)<=2||Math.abs(u)<=2)continue;const p=(f+u&3)===0;s.set(f,5,u,x.MARBLE),p?s.box(f,6,u,f,7,u,x.MARBLE):s.set(f,7,u,x.MARBLE2)}let h=5;const d={lamps:[]};for(let u=0;u<n;u++){const f=i[u],p=u<n-1?i[u+1]:-1,_=r[u],m=h+_-1;Yn(s,f,h,m,a);for(let y=h;y<=m;y++)for(let T=-f;T<=f;T++)for(let I=-f;I<=f;I++)if(un(I,T,f)&&!un(I,T,f-1)){const L=y===h?x.TAN_D:y===m?x.RED_D:(I+T+(y&1)*2&3)===0?x.TAN_D:a;s.set(I,y,T,L)}for(const[y,T]of vo(f)){const I=Math.round(y),L=Math.round(T);let N=I,G=L;un(N,G,f)||(N-=Math.sign(N),G-=Math.sign(G));for(let U=h+1;U<m;U++)s.set(N,U,G,x.RED)}const g=Math.min(m-1,h+4);for(const[y,T,I]of[[f,0,"z"],[-f,0,"z"],[0,f,"x"],[0,-f,"x"]])for(let L=-1;L<=1;L++){const N=I==="z"?y:L,G=I==="z"?L:T;for(let U=h+1;U<=g;U++){const z=U===g;s.set(N,U,G,z?x.RED_D:u===0?x.BLACK:x.WINDOW)}}for(const y of[-1,1])for(const T of[-1,1])for(let I=1;I<=f;I++)for(let L=1;L<=f;L++)if(!(Math.abs(I-L)>1||!un(I,L,f)||un(I,L,f-1)))for(let N=h+2;N<=Math.min(m-2,h+3);N++)s.set(y*I,N,T*L,x.WINDOW);for(let y=-f;y<=f;y++)for(let T=-f;T<=f;T++)un(T,y,f)&&!un(T,y,f-1)&&s.set(T,m,y,T+y&1?x.BLUE:x.GREEN);const M=f+o,S=m-1;let v=o;p>0&&(v=M-p);const b=u===n-1,E={A:M,B:M,edges:Jm(M),verts:vo(M),y0:S,H:b?8:4.5,rhoMax:b?M:v+1.2,p:1.4,curl:[1.6,2.5],lift:{L:2.4,T:6},thick:2,ceilY:m+1,wallRho:b?o:1/0,plateRho:b?o-2:1/0,skip:p>0?(y,T)=>un(y,T,p):void 0,beasts:!1,hipW:.9,ridgeH:1,colors:e,finial:b?{layers:Wd}:void 0},R=Oi(s,E);if(b)d.top=R.ridgeTop+Wd.length;else{const y=Math.round(S+E.H*Math.pow(Math.min(v,E.rhoMax)/E.rhoMax,E.p));Yn(s,p,m+1,y,a),h=y,d.lamps.push(s.pos(0,m-2,f))}}return{anchors:d,height:h+22}}const Wd=[[2,x.GOLD_D],[1,x.GOLD],[1,x.GOLD_L],[0,x.GOLD],[1,x.GOLD],[0,x.GOLD_L],[1,x.GOLD],[0,x.GOLD_L],[1,x.GOLD_D],[0,x.GOLD],[1,x.GOLD_L],[0,x.GOLD],[0,x.GOLD_L],[0,x.GOLD],[0,x.GOLD_L],[0,x.GOLD]];function Xd(s,t,e,n,i,r){const o=r.red??5,a=n+1+o;for(let l=Math.min(i,n);l<=a;l++){let c;l<=n?c=x.STONE_D:l===n+1?c=x.STONE:l===a?c=x.RED_D:c=x.RED,s.set(t,l,e,c)}}function Yd(s,t,e,n,i,r,o){const a=n+2+(i.red??5);for(let l=-r;l<=r;l++){const c=o==="z"?t+l:t,h=o==="z"?e:e+l,d=Math.abs(l)===r;s.set(c,a,h,d?x.T3:(t+e&1)===0?x.T1:x.T2)}for(let l=-0;l<=r-2;l++){const c=o==="z"?t+l:t,h=o==="z"?e:e+l;s.set(c,a+1,h,Math.abs(l)===r-2?x.T2:x.T3)}}function vs(s,t,e){const{H:n,idx:i}=t,r=1;if(e.axis==="z"){const o=Ut+e.u;for(let a=e.z0;a<=e.z1;a++){const l=e.base??n[i(o,a)];for(let c=-r;c<=r;c++)Xd(s,o+c,a,l,n[i(o+c,a)],e);Yd(s,o,a,l,e,2,"z")}}else{const o=e.z;for(let a=e.u0;a<=e.u1;a++){const l=Ut+a,c=e.base??n[i(l,o)];for(let h=-r;h<=r;h++)Xd(s,l,o+h,c,n[i(l,o+h)],e);Yd(s,l,o,c,e,2,"x")}}}function xw(s,t,e,n,i=3.6){const r=n+i-.4,o=Math.ceil(i+2);for(let a=-3;a<=3;a++)for(let l=-o;l<=o;l++)for(let c=-o;c<=o;c++){const h=Math.hypot(c,l-(r-Math.round(r))),d=Math.round(r)+l;d<n||(h<=i?s.set(t+c,d,e+a,0):h<=i+1.25&&Math.abs(a)<=2&&s.set(t+c,d,e+a,x.MARBLE))}for(let a=-3;a<=3;a++)for(let l=-Math.floor(i);l<=Math.floor(i);l++)s.set(t+l,n-1,e+a,x.SLAB1)}function vw(s,t,e={}){s.box(-t,-1,-5,t,-1,6,x.STONE2);for(let h=-t;h<=t;h++)(h&3)===0&&s.box(h,-1,-5,h,-1,6,x.STONE_D);const o=[];for(let h=-t;h<=t;h+=6)o.push(h);o[o.length-1]!==t&&o.push(t);for(const h of o)je(s,h,4,0,5,{base:x.STONE});for(let h=-t;h<=t;h++)s.set(h,5,4,x.BLUE),s.set(h,5,5,x.RED_D),(h+60)%3===0&&s.set(h,5,5,x.GOLD);for(const h of o)s.set(h,5,5,x.GREEN),s.set(h,6,5,x.GREEN);const a=s.child(0,0,1),l=t+2,c=6;Oi(a,{A:l,B:c,edges:[{nx:0,nz:1,c,limit:1/0},{nx:0,nz:-1,c,limit:-1},{nx:1,nz:0,c:l,limit:-1},{nx:-1,nz:0,c:l,limit:-1}],verts:[],y0:6,H:3.2,rhoMax:11,p:1.5,curl:[1,2],lift:{L:0,T:6},thick:2,ceilY:6,wallRho:4,plateRho:2,ridgeH:1,hipW:0,colors:{...Ui.gray,trim:x.T2}});for(let h=0;h<o.length;h+=2)Os(s,o[h],1,6,!1)}function qd(s,t){for(let i=0;i<=t;i++)for(let r=-5;r<=5;r++)for(let o=-5;o<=5;o++){const a=Math.abs(o)===5||Math.abs(r)===5;s.set(o,i,r,i===0?x.STONE_D:i===t?x.MARBLE:a&&(o+r+i&3)===0?x.BRICK2:x.BRICK)}const n=s.child(0,t+1,0);t0(n,{half:3,colH:7,ov:4,plat:1,rise:8,scheme:"green",rails:!0})}function yw(s){const t=[-16,-8,8,16],e=14,n=11;t.forEach((o,a)=>{const l=Math.abs(o)===8?e:n;s.box(o-2,0,-2,o+2,1,2,x.MARBLE2),s.box(o-2,1,-2,o+2,1,2,x.MARBLE),s.box(o-1,2,-1,o+1,2+l,1,x.RED),s.box(o-1,2+l+1,-1,o+1,2+l+1,1,x.GOLD_D),s.box(o,2,-4,o,5,-4,x.RED_D),s.box(o,2,-3,o,2,-3,x.RED_D)});const i=(o,a,l,c)=>{for(let h=o;h<=a;h++)for(let d=l;d<l+c;d++)for(let u=-1;u<=1;u++){const f=d===l+c-1?x.BLUE_D:(h+d&3)===0?x.GOLD:d===l?x.GREEN:x.BLUE;s.set(h,d,u,f)}};i(-8,8,2+e-4,4),i(-17,17,2+n-3,3),i(-17,-9,2+n-7,2),i(9,17,2+n-7,2);for(const o of[-16,-8,0,8,16]){const a=o===0||Math.abs(o)===8?2+e+2:2+n+2;s.box(o-1,a,-2,o+1,a,2,x.GREEN),s.box(o-1,a+1,-2,o+1,a+1,2,x.BLUE)}Us(s,0,2+e-5,2,13,5,4,41);const r=(o,a,l,c,h)=>{const d=s.child(o,0,0);Oi(d,{A:l,B:c,edges:$i(l,c),verts:Ir(l,c),y0:a,H:h,rhoMax:c,p:1.5,curl:[1.5,2.5],lift:{L:2,T:6},thick:2,ceilY:a+1,wallRho:2.5,plateRho:0,beasts:!1,chiwen:!1,hipW:.8,colors:Ui.green})};r(0,2+e+4,12,5,5),r(-12,2+n+4,7,5,4),r(12,2+n+4,7,5,4);for(const o of[-12,0,12])Os(s,o,2+n-12,2,!0)}function Mw(s,t,e,n,i,r,o){const l=d=>8+Math.round(i*(1-(d/n)**2)),c=n*.62,h=i-1;for(let d=-n;d<=n;d++){const u=e+d,f=l(d);for(let p=-4;p<=4;p++){const _=t+p;for(let m=o-1;m<=f;m++){const g=m-r+.5;if((d/c)**2+(g/h)**2<=1&&m>=o&&m<f-1){s.set(_,m,u,0);continue}let S=x.STONE;m===f?S=Math.abs(p)<=1?x.SLAB1:Math.abs(p)===4?x.MARBLE:x.SLAB2:m===f-1?S=(d+p&1)===0?x.STONE2:x.STONE:S=(d+m&1)===0?x.STONE2:x.STONE_D,s.set(_,m,u,S)}}for(const p of[-4,4]){const _=t+p,m=(d+n)%4===0;s.set(_,f+1,u,x.MARBLE),s.set(_,f+3,u,x.MARBLE),(d&1)===0&&s.set(_,f+2,u,x.MARBLE),m&&(s.set(_,f+2,u,x.MARBLE),s.set(_,f+4,u,x.MARBLE2))}}}function Sw(){const s=performance.now(),t=new qm(Ve,Zm,Ze),e=Ob(),n=Ub(e);Yb(n),Bb(t,e);const i=new qe(t,0,0,0),r={labels:[],censers:[],bells:[],drums:[]},o=Ut,a=(b,E,R,y,T,I,L)=>r.labels.push({name:b,sub:E,rank:R,pos:[y+.5,T,I],fy:L}),l=gw(new qe(t,o,jt.T4,46));a("藏经阁","重檐歇山顶",2,o,jt.T4+l.info.roofTop+8,46,jt.T4+22);for(const b of[-1,1]){const E=_w(new qe(t,o+b*58,jt.T4,70),{scheme:"brown"});a(b<0?"西塔":"东塔","七层八角楼阁式塔",2,o+b*58,jt.T4+E.height+4,70,jt.T4+34)}const c=uw(new qe(t,o,jt.T3,112));for(const b of c.anchors.censers)r.censers.push(b);a("大雄宝殿","主殿 · 重檐庑殿顶",1,o,jt.T3+c.info.roofTop+8,112,jt.T3+30);const h={E178:["伽蓝殿","东配殿 · 歇山顶"],E210:["观音殿","东配殿 · 悬山顶"],W178:["祖师殿","西配殿 · 歇山顶"],W210:["药师殿","西配殿 · 悬山顶"]};for(const[b,E,R]of[["E",hi.W,1],["W",hi.E,-1]])for(const y of[178,210]){const T=y===178,I=Gd(new qe(t,o+R*56,jt.T2,y,E),{roofType:T?"xieshan":"gable",scheme:T?"green":"gray",rise:T?9:8}),[L,N]=h[b+y];a(L,N,3,o+R*56,jt.T2+I.info.roofTop+6,y)}const d=dw(new qe(t,o,jt.T1,247));a("天王殿","歇山顶",2,o,jt.T1+d.info.roofTop+7,247);const u=Hd(new qe(t,o+50,jt.T1,275,hi.W),"bell"),f=Hd(new qe(t,o-50,jt.T1,275,hi.E),"drum");u.anchors.bell&&r.bells.push(u.anchors.bell),f.anchors.drum&&r.drums.push(f.anchors.drum),a("钟楼","歇山顶",2,o+50,jt.T1+u.top+3,275),a("鼓楼","歇山顶",2,o-50,jt.T1+f.top+3,275);for(const b of[-1,1]){const E=mw(new qe(t,o+b*36,jt.T1,252));a("碑亭","攒尖顶",3,o+b*36,jt.T1+E.top+2,252);const R=Gd(new qe(t,o+b*68,jt.T3,122,b>0?hi.W:hi.E),{roofType:"hard",scheme:"gray",rise:8});a(b<0?"西禅堂":"东禅堂","硬山顶",3,o+b*68,jt.T3+R.info.roofTop+6,122);const y=pw(new qe(t,o+b*44,jt.T4,42),{r:7,scheme:"green"});a("八角亭","攒尖顶",3,o+b*44,jt.T4+y.top+2,42)}const p=fw(new qe(t,o,jt.T0,306));a("山门","歇山顶",2,o,jt.T0+p.info.roofTop+8,306),yw(new qe(t,o,jt.T0,332)),a("牌坊","三间四柱",3,o,jt.T0+32,332),Mw(t,o,Ki.pondZ,22,7,7,5),a("放生池","石拱桥",3,o,jt.T0+16,Ki.pondZ),bw(t,e),vs(t,e,{axis:"x",z:Qt.wallN,u0:-Ln-1,u1:Ln+1}),vs(t,e,{axis:"z",u:-Ln,z0:Qt.wallN-1,z1:Qt.wallS+1}),vs(t,e,{axis:"z",u:Ln,z0:Qt.wallN-1,z1:Qt.wallS+1}),vs(t,e,{axis:"x",z:Qt.wallS,u0:-Ln-1,u1:-20}),vs(t,e,{axis:"x",z:Qt.wallS,u0:20,u1:Ln+1});const _=Qt.t2t1+2;vs(t,e,{axis:"x",z:_,u0:-Ln+1,u1:-25,base:jt.T2,red:6}),vs(t,e,{axis:"x",z:_,u0:25,u1:Ln-1,base:jt.T2,red:6});for(const b of[-1,1])xw(t,o+b*54,_,jt.T2,3.6),ni(i,o+b*54-2,o+b*54+2,_+1,jt.T1,3,{dir:1,run:2});for(const b of[-1,1])vw(new qe(t,o+b*78,jt.T2,197,b>0?hi.W:hi.E),36);for(const b of[-1,1])qd(new qe(t,o+b*Ln,jt.T4,Qt.wallN),8),qd(new qe(t,o+b*Ln,jt.T1,Qt.wallS),8),a("角楼","攒尖顶",3,o+b*Ln,jt.T4+30,Qt.wallN);Ge(i,o-83,o-13,Qt.t3t2,jt.T3),Ge(i,o+13,o+83,Qt.t3t2,jt.T3),ni(i,o-12,o+12,Qt.t3t2,jt.T2,3,{dir:1,run:2,ramp:[o-2,o+2]});for(const[b,E]of[[-83,-51],[-41,-35],[35,41],[51,83]])Ge(i,o+b,o+E,Qt.t4t3,jt.T4);for(const b of[-1,1])ni(i,o+b*46-3,o+b*46+3,Qt.t4t3,jt.T3,3,{dir:1,run:2});const m=nu(i,o,jt.T2,196,!0);r.censers.push(m);for(const b of[-1,1]){for(const E of[270,292])to(i,o+b*8,jt.T1,E);for(const E of[184,208,226])to(i,o+b*8,jt.T2,E);to(i,o+b*8,jt.T4,64),to(i,o+b*8,jt.T0,322),to(i,o+b*8,jt.T0,344)}qb(i,e);const M=(typeof location<"u"?new URLSearchParams(location.search):new URLSearchParams).get("notrees")?0:Zb(i,e),S=ww(t),v=performance.now();return console.log(`[world] built in ${(v-s).toFixed(0)}ms, solid=${(t.countSolid()/1e6).toFixed(2)}M, outside trees=${M}, glow=${S.length}`),{grid:t,maps:e,anchors:r,glow:S}}function bw(s,t){const{SURF:e,idx:n}=t;for(let i=0;i<Ze;i++)for(let r=0;r<Ve;r++){if(e[n(r,i)]!==Ot.BED||Math.abs(r-Ut)<9)continue;let o=!1;for(const[c,h]of[[2,0],[-2,0],[0,2],[0,-2]])e[n(r+c,i+h)]!==Ot.BED&&(o=!0);if(o)continue;const a=Tn(r>>1,i>>1,71);Tn(r>>4,i>>4,5)<.42&&a<.5&&(s.set(r,6,i,x.LOTUS),Tn(r,i,72)<.16&&s.set(r,7,i,x.LOTUS_P))}}function ww(s){const{data:t,sx:e,sy:n,sz:i}=s,r=new Map,o=e*i;for(let l=6;l<n;l++)for(let c=0;c<i;c++){const h=e*c+o*l;for(let d=0;d<e;d++){const u=t[h+d];if(u===0||bn.glow[u]<.6)continue;const p=((d>>2)*1024+(c>>2))*64+(l>>2);let _=r.get(p);_||(_={x:0,y:0,z:0,n:0,kind:u===x.WINDOW?1:u===x.FLAME||u===x.EMBER?2:0},r.set(p,_)),_.x+=d+.5,_.y+=l+.5,_.z+=c+.5,_.n++}}const a=[];for(const l of r.values())l.n>=2&&a.push([l.x/l.n,l.y/l.n,l.z/l.n,Math.min(1,l.n/6),l.kind]);return a}function Zd(){this.array=null}const Ew=[{n:[1,0,0],u:[0,1,0],v:[0,0,1]},{n:[-1,0,0],u:[0,0,1],v:[0,1,0]},{n:[0,1,0],u:[0,0,1],v:[1,0,0]},{n:[0,-1,0],u:[1,0,0],v:[0,0,1]},{n:[0,0,1],u:[1,0,0],v:[0,1,0]},{n:[0,0,-1],u:[0,1,0],v:[1,0,0]}],Xa=[[0,0],[1,0],[1,1],[0,1]];function Kd(s,t={}){const e=t.chunk??32,n=Array.isArray(t.scale)?t.scale:[t.scale??1,t.scale??1,t.scale??1],i=t.offset??[0,0,0],r=t.aoMin??.55,o=t.skipBottom??!0,a=t.seed??7,{sx:l,sy:c,sz:h,data:d}=s,u=[r,r+(1-r)*.38,r+(1-r)*.72,1],f=(m,g,M)=>m>=0&&m<l&&g>=0&&g<c&&M>=0&&M<h&&d[m+l*(M+h*g)]!==0?1:0,p=[],_=[0,0,0,0];for(let m=0;m<c;m+=e)for(let g=0;g<h;g+=e)for(let M=0;M<l;M+=e){const S=Math.min(M+e,l),v=Math.min(m+e,c),b=Math.min(g+e,h);let E=0;for(let W=m;W<v;W++)for(let V=g;V<b;V++){const nt=l*(V+h*W);for(let B=M;B<S;B++)d[nt+B]!==0&&(f(B+1,W,V)||E++,f(B-1,W,V)||E++,f(B,W+1,V)||E++,!f(B,W-1,V)&&!(o&&W===0)&&E++,f(B,W,V+1)||E++,f(B,W,V-1)||E++)}if(E===0)continue;const R=new Float32Array(E*12),y=new Float32Array(E*12),T=new Float32Array(E*12),I=new Float32Array(E*8),L=new Uint32Array(E*6);let N=0;for(let W=m;W<v;W++)for(let V=g;V<b;V++){const nt=l*(V+h*W);for(let B=M;B<S;B++){const X=d[nt+B];if(X===0)continue;const $=1+bn.j[X]*(Ue(B,W,V,a)*2-1),gt=bn.r[X]*$,mt=bn.g[X]*$,zt=bn.b[X]*$,Wt=bn.glow[X],Dt=bn.gloss[X];for(let J=0;J<6;J++){const et=Ew[J],ut=et.n,xt=et.u,st=et.v;if(f(B+ut[0],W+ut[1],V+ut[2])||o&&J===3&&W===0)continue;const Mt=B+ut[0],qt=W+ut[1],K=V+ut[2];for(let kt=0;kt<4;kt++){const $t=Xa[kt][0]?1:-1,O=Xa[kt][1]?1:-1,fe=f(Mt+$t*xt[0],qt+$t*xt[1],K+$t*xt[2]),se=f(Mt+O*st[0],qt+O*st[1],K+O*st[2]),P=f(Mt+$t*xt[0]+O*st[0],qt+$t*xt[1]+O*st[1],K+$t*xt[2]+O*st[2]);_[kt]=fe&&se?0:3-(fe+se+P)}const rt=B+(ut[0]>0?1:0),dt=W+(ut[1]>0?1:0),ht=V+(ut[2]>0?1:0),vt=N*12;for(let kt=0;kt<4;kt++){const $t=Xa[kt][0],O=Xa[kt][1],fe=rt+$t*xt[0]+O*st[0],se=dt+$t*xt[1]+O*st[1],P=ht+$t*xt[2]+O*st[2],w=vt+kt*3;R[w]=(fe+i[0])*n[0],R[w+1]=(se+i[1])*n[1],R[w+2]=(P+i[2])*n[2],y[w]=ut[0],y[w+1]=ut[1],y[w+2]=ut[2];const D=u[_[kt]];T[w]=gt*D,T[w+1]=mt*D,T[w+2]=zt*D;const F=N*8+kt*2;I[F]=Wt,I[F+1]=Dt}const Nt=N*4,Tt=N*6;_[0]+_[2]>_[1]+_[3]?(L[Tt]=Nt,L[Tt+1]=Nt+1,L[Tt+2]=Nt+2,L[Tt+3]=Nt,L[Tt+4]=Nt+2,L[Tt+5]=Nt+3):(L[Tt]=Nt+1,L[Tt+1]=Nt+2,L[Tt+2]=Nt+3,L[Tt+3]=Nt+1,L[Tt+4]=Nt+3,L[Tt+5]=Nt),N++}}}const G=new te;G.setAttribute("position",new yt(R,3)),G.setAttribute("normal",new yt(y,3)),G.setAttribute("color",new yt(T,3)),G.setAttribute("aMat",new yt(I,2)),G.setIndex(new be(L,1));for(const W of["position","normal","color","aMat"])G.getAttribute(W).onUpload(Zd);G.index.onUpload(Zd);const U=new C((M+i[0])*n[0],(m+i[1])*n[1],(g+i[2])*n[2]),z=new C((S+i[0])*n[0],(v+i[1])*n[1],(b+i[2])*n[2]);G.boundingBox=new $e(U,z),G.boundingSphere=new Je().setFromPoints([U,z]),p.push({geometry:G,faces:E})}return p}const Pi={uGlow:{value:0},uTime:{value:0},uFogTint:{value:new pt("#8f86b8")},uMist:{value:0}};function $d(s={}){const t=new qo({vertexColors:!0,roughness:s.roughness??.9,metalness:0,envMapIntensity:.6}),e=s.fogBoost??1,n=s.fogTint??0;return t.onBeforeCompile=i=>{i.uniforms.uGlow=Pi.uGlow,i.uniforms.uTime=Pi.uTime,i.uniforms.uFogBoost={value:e},i.uniforms.uFogTint=Pi.uFogTint,i.uniforms.uFogTintAmt={value:n},i.uniforms.uMist=Pi.uMist,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aMat;
varying vec2 vMat;
varying float vWorldY;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vMat = aMat;
vWorldY = (modelMatrix * vec4(transformed, 1.0)).y;`),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
        varying vec2 vMat;
        varying float vWorldY;
        uniform float uGlow;
        uniform float uTime;
        uniform float uFogBoost;
        uniform vec3 uFogTint;
        uniform float uFogTintAmt;
        uniform float uMist;`).replace("#include <fog_fragment>",`#ifdef USE_FOG
          #ifdef FOG_EXP2
            float fogFactor = 1.0 - exp( - fogDensity * fogDensity * uFogBoost * vFogDepth * vFogDepth );
          #else
            float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
          #endif
          // ground mist: thick near the pond / courtyards, thinning quickly with height
          float mistF = uMist * exp( - max( vWorldY - 8.0, 0.0 ) * 0.055 ) * ( 1.0 - exp( - vFogDepth * 0.0065 ) );
          fogFactor = 1.0 - ( 1.0 - fogFactor ) * ( 1.0 - mistF );
          vec3 fogCol = mix( fogColor, uFogTint, uFogTintAmt );
          gl_FragColor.rgb = mix( gl_FragColor.rgb, fogCol, fogFactor );
        #endif`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
        roughnessFactor = mix(roughnessFactor, 0.28, vMat.y);`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        totalEmissiveRadiance += diffuseColor.rgb * vMat.x * uGlow;`)},t.customProgramCacheKey=()=>"voxel-mat-v2",t}const Tw=`
varying vec3 vDir;
void main() {
  vDir = normalize(position);
  vec4 p = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * p;
}
`,Aw=`
precision highp float;
uniform vec3 uZenith;
uniform vec3 uMid;
uniform vec3 uHorizon;
uniform vec3 uGround;
uniform vec3 uGlowColor;
uniform vec3 uSunColor;
uniform vec3 uSunDir;
uniform float uSunVis;
uniform vec3 uMoonDir;
uniform float uMoonVis;
uniform float uStars;
uniform float uTime;
varying vec3 vDir;

float hash13(vec3 p) {
  p = fract(p * 0.1031);
  p += dot(p, p.zyx + 31.32);
  return fract((p.x + p.y) * p.z);
}

void main() {
  vec3 d = normalize(vDir);
  float h = d.y;

  vec3 col = uHorizon;
  col = mix(col, uMid, smoothstep(0.0, 0.30, h));
  col = mix(col, uZenith, smoothstep(0.16, 0.85, h));
  col = mix(col, uGround, smoothstep(0.0, -0.12, h));

  // warm glow hugging the horizon on the sun side, plus wide halo around the sun
  float c = dot(d, uSunDir);
  float sunSide = pow(max(c * 0.5 + 0.5, 0.0), 3.0);
  float hz = exp(-abs(h) * 5.5);
  col += uGlowColor * hz * sunSide * 0.85 * uSunVis;
  col += uGlowColor * (pow(max(c, 0.0), 6.0) * 0.32 + pow(max(c, 0.0), 40.0) * 0.55) * uSunVis;

  // sun disc
  float disc = smoothstep(0.99930, 0.99965, c);
  col = mix(col, uSunColor * 7.0, disc * uSunVis * step(-0.02, h));

  // moon
  float mc = dot(d, uMoonDir);
  float moon = smoothstep(0.99920, 0.99945, mc);
  col += vec3(0.55, 0.65, 0.9) * (pow(max(mc, 0.0), 24.0) * 0.18) * uMoonVis;
  col = mix(col, vec3(1.7, 1.75, 1.9), moon * uMoonVis);

  // stars
  if (uStars > 0.01 && h > 0.0) {
    vec3 p = d * 150.0;
    vec3 ip = floor(p);
    vec3 f = fract(p) - 0.5;
    float r = hash13(ip);
    float s = step(0.965, r) * smoothstep(0.42, 0.06, length(f));
    float tw = 0.6 + 0.4 * sin(uTime * 2.3 + r * 60.0);
    float big = step(0.995, r) * 1.6 + 1.0; // a few brighter stars
    col += vec3(0.9, 0.95, 1.15) * s * tw * big * uStars * smoothstep(0.0, 0.22, h);
  }

  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;function Rw(){const s={uZenith:{value:new pt("#3679d6")},uMid:{value:new pt("#7fb0e8")},uHorizon:{value:new pt("#cfe2f0")},uGround:{value:new pt("#9a9d86")},uGlowColor:{value:new pt("#ffc080")},uSunColor:{value:new pt("#fff0d0")},uSunDir:{value:new C(0,1,0)},uSunVis:{value:1},uMoonDir:{value:new C(0,1,0)},uMoonVis:{value:0},uStars:{value:0},uTime:{value:0}},t=new Ce({uniforms:s,vertexShader:Tw,fragmentShader:Aw,side:on,depthWrite:!1,depthTest:!1,fog:!1}),e=new Pe(new Nr(1,48,32),t);return e.scale.setScalar(900),e.renderOrder=-1e3,e.frustumCulled=!1,e.name="sky",{mesh:e,uniforms:s}}const j=s=>new pt(s),Ya=[{t:0,sun:j("#8fa8e8"),sunI:0,hemiS:j("#33498f"),hemiG:j("#141a30"),hemiI:1.3,fill:j("#4a5fa0"),fillI:.14,zen:j("#050b22"),mid:j("#0f1d44"),hor:j("#1b2f5e"),gnd:j("#0a1226"),glowC:j("#2a3f7a"),fog:j("#14224a"),fd:85e-5,exp:1.2,glow:1,stars:1,bloom:.6,cloud:.4,mist:.1},{t:.2,sun:j("#8fa8e8"),sunI:0,hemiS:j("#40488e"),hemiG:j("#1d1a30"),hemiI:1.25,fill:j("#5a5aa0"),fillI:.14,zen:j("#0e1541"),mid:j("#3b3a7d"),hor:j("#d68a8c"),gnd:j("#1a1a34"),glowC:j("#ff9a70"),fog:j("#574f85"),fd:9e-4,exp:1.2,glow:.95,stars:.6,bloom:.6,cloud:.55,mist:.45},{t:.235,sun:j("#ffb59a"),sunI:1,hemiS:j("#6b70b4"),hemiG:j("#3b2f3f"),hemiI:1.05,fill:j("#8a7fb8"),fillI:.2,zen:j("#2a3a86"),mid:j("#8b6fa8"),hor:j("#ffb08a"),gnd:j("#3a2f45"),glowC:j("#ffa46e"),fog:j("#b78a9c"),fd:98e-5,exp:1.25,glow:.8,stars:.2,bloom:.55,cloud:.8,mist:.5},{t:.262,sun:j("#ffbb84"),sunI:3.2,hemiS:j("#93a8de"),hemiG:j("#8a6a58"),hemiI:.85,fill:j("#a7b3e0"),fillI:.25,zen:j("#4f7ccc"),mid:j("#dea0b8"),hor:j("#ffb98f"),gnd:j("#8a6a55"),glowC:j("#ffb878"),fog:j("#f0b8a2"),fd:.001,exp:1.2,glow:.4,stars:0,bloom:.45,cloud:1,mist:.38},{t:.29,sun:j("#ffd9ae"),sunI:3.6,hemiS:j("#a2c0ec"),hemiG:j("#88705a"),hemiI:.95,fill:j("#b0c4e8"),fillI:.28,zen:j("#4a88da"),mid:j("#b6b8e0"),hor:j("#f6d2b8"),gnd:j("#8f8571"),glowC:j("#ffe0b0"),fog:j("#e2cdc6"),fd:8e-4,exp:1.1,glow:.15,stars:0,bloom:.35,cloud:1,mist:.22},{t:.36,sun:j("#fff0d8"),sunI:3.6,hemiS:j("#a8c8f0"),hemiG:j("#8a7a60"),hemiI:1,fill:j("#b8cef0"),fillI:.3,zen:j("#3f7fd8"),mid:j("#86b6ea"),hor:j("#d5e4ee"),gnd:j("#93967f"),glowC:j("#fff0d0"),fog:j("#c9dae6"),fd:7e-4,exp:1.05,glow:0,stars:0,bloom:.3,cloud:1,mist:.12},{t:.5,sun:j("#fff6e6"),sunI:3.8,hemiS:j("#b0d0f5"),hemiG:j("#8f8468"),hemiI:1.05,fill:j("#c0d4f0"),fillI:.3,zen:j("#3679d6"),mid:j("#7fb0e8"),hor:j("#cfe2f0"),gnd:j("#9a9d86"),glowC:j("#fff2d8"),fog:j("#c6d9e8"),fd:7e-4,exp:1,glow:0,stars:0,bloom:.28,cloud:1,mist:0},{t:.64,sun:j("#ffe6c0"),sunI:3.6,hemiS:j("#a5c2ea"),hemiG:j("#8a7a5e"),hemiI:1,fill:j("#b8cae8"),fillI:.3,zen:j("#3d76d0"),mid:j("#86b0e4"),hor:j("#e8dccb"),gnd:j("#958f78"),glowC:j("#ffe0b0"),fog:j("#d5d8d6"),fd:75e-5,exp:1.05,glow:0,stars:0,bloom:.32,cloud:1,mist:0},{t:.69,sun:j("#ffd29a"),sunI:3.7,hemiS:j("#95acdc"),hemiG:j("#8a6a50"),hemiI:.85,fill:j("#a9b4e0"),fillI:.24,zen:j("#4070c4"),mid:j("#a6b0d6"),hor:j("#ffd9aa"),gnd:j("#8d7a60"),glowC:j("#ffc080"),fog:j("#e6c0a8"),fd:85e-5,exp:1.2,glow:.15,stars:0,bloom:.4,cloud:1,mist:.08},{t:.72,sun:j("#ffb066"),sunI:3.9,hemiS:j("#7d8fd6"),hemiG:j("#8a5f46"),hemiI:.7,fill:j("#9a9ad8"),fillI:.18,zen:j("#2f57b4"),mid:j("#b58fc0"),hor:j("#ffb070"),gnd:j("#7d6650"),glowC:j("#ffa050"),fog:j("#d9a08f"),fd:9e-4,exp:1.35,glow:.5,stars:0,bloom:.5,cloud:1,mist:.14},{t:.745,sun:j("#ff8446"),sunI:3.2,hemiS:j("#7278c6"),hemiG:j("#6a4a45"),hemiI:.8,fill:j("#8a80c8"),fillI:.2,zen:j("#2c439a"),mid:j("#9a6aa8"),hor:j("#ff8556"),gnd:j("#5a4550"),glowC:j("#ff7a40"),fog:j("#c48490"),fd:95e-5,exp:1.35,glow:.85,stars:0,bloom:.6,cloud:1,mist:.2},{t:.77,sun:j("#ff7a5a"),sunI:1.4,hemiS:j("#7580c8"),hemiG:j("#4a3a50"),hemiI:1.25,fill:j("#7a72b8"),fillI:.28,zen:j("#1e2c72"),mid:j("#6a4a9c"),hor:j("#f47a72"),gnd:j("#3a2e48"),glowC:j("#ff6a5a"),fog:j("#9a6a8e"),fd:.001,exp:1.4,glow:1,stars:.3,bloom:.7,cloud:.9,mist:.2},{t:.81,sun:j("#7a90d8"),sunI:.5,hemiS:j("#4a5aa0"),hemiG:j("#20203a"),hemiI:1.3,fill:j("#5a6ab0"),fillI:.18,zen:j("#0a1440"),mid:j("#2a3470"),hor:j("#7a5a86"),gnd:j("#141428"),glowC:j("#5a4a90"),fog:j("#2e3262"),fd:.001,exp:1.4,glow:1,stars:.8,bloom:.65,cloud:.6,mist:.16},{t:.88,sun:j("#8fa8e8"),sunI:0,hemiS:j("#33498f"),hemiG:j("#141a30"),hemiI:1.3,fill:j("#4a5fa0"),fillI:.14,zen:j("#050b22"),mid:j("#0f1d44"),hor:j("#1b2f5e"),gnd:j("#0a1226"),glowC:j("#2a3f7a"),fog:j("#14224a"),fd:85e-5,exp:1.2,glow:1,stars:1,bloom:.6,cloud:.4,mist:.1},{t:1,sun:j("#8fa8e8"),sunI:0,hemiS:j("#33498f"),hemiG:j("#141a30"),hemiI:1.3,fill:j("#4a5fa0"),fillI:.14,zen:j("#050b22"),mid:j("#0f1d44"),hor:j("#1b2f5e"),gnd:j("#0a1226"),glowC:j("#2a3f7a"),fog:j("#14224a"),fd:85e-5,exp:1.2,glow:1,stars:1,bloom:.6,cloud:.4,mist:.1}],Jd=[{id:"dawn",label:"黎明",t:.276},{id:"noon",label:"午后",t:.56},{id:"golden",label:"夕照",t:.715},{id:"dusk",label:"暮色",t:.766},{id:"night",label:"月夜",t:.92}],jd=new C(-.55,.55,.62).normalize(),Cw=j("#93aef0");function Pw(s){s=(s%1+1)%1;let t=0;for(;t<Ya.length-2&&s>=Ya[t+1].t;)t++;const e=Ya[t],n=Ya[t+1],i=fn.clamp((s-e.t)/(n.t-e.t),0,1),r=i*i*(3-2*i),o={};for(const a of Object.keys(e))a!=="t"&&(e[a]instanceof pt?o[a]=new pt().copy(e[a]).lerp(n[a],r):o[a]=e[a]+(n[a]-e[a])*r);return o}function Iw(s,t=new C){const e=2*Math.PI*(s-.25),n=Math.sin(e),i=fn.degToRad(58*n);let r=Math.cos(e),o=.5+.12*n;const a=Math.hypot(r,o);return r/=a,o/=a,t.set(r*Math.cos(i),Math.sin(i),o*Math.cos(i)),t}class Lw{constructor(t){Object.assign(this,t),this.t=.715,this.auto=!1,this.speed=.012,this.listeners=[],this._shadowClock=0,this._sunDir=new C,this.keyDir=new C(0,1,0),this.state=null,this.sunFade=1,this.moonFade=0}onChange(t){this.listeners.push(t)}set(t,e=!0){this.t=(t%1+1)%1,this.apply(e)}update(t,e){this.sky.uniforms.uTime.value=e,Pi.uTime.value=e,this.auto&&(this.t=(this.t+t*this.speed)%1,this._shadowClock+=t,this.apply(this._shadowClock>.12),this._shadowClock>.12&&(this._shadowClock=0))}apply(t=!0){const e=Pw(this.t);this.state=e;const n=Iw(this.t,this._sunDir),i=fn.radToDeg(Math.asin(n.y)),r=fn.smoothstep(i,-2.5,3.5),o=fn.smoothstep(-i,2.5,14),a=i>-2.5,l=a?n:jd;this.keyDir.copy(l),this.sunFade=r,this.moonFade=o;const{sun:c,hemi:h,fill:d,scene:u,renderer:f}=this;a?(c.color.copy(e.sun),c.intensity=e.sunI*r):(c.color.copy(Cw),c.intensity=1.05*o),this.placeSun(l,t),h.color.copy(e.hemiS),h.groundColor.copy(e.hemiG),h.intensity=e.hemiI,d.color.copy(e.fill),d.intensity=e.fillI,d.position.set(-l.x*200,60,-l.z*200),u.fog.color.copy(e.fog),u.fog.density=e.fd*.6,f.toneMappingExposure=e.exp,Pi.uGlow.value=e.glow*2.4,Pi.uMist.value=e.mist,Pi.uFogTint.value.copy(e.mid).lerp(e.zen,.45);const p=this.sky.uniforms;p.uZenith.value.copy(e.zen),p.uMid.value.copy(e.mid),p.uHorizon.value.copy(e.hor),p.uGround.value.copy(e.gnd),p.uGlowColor.value.copy(e.glowC),p.uSunColor.value.copy(e.sun),p.uSunDir.value.copy(n),p.uSunVis.value=r,p.uMoonDir.value.copy(jd),p.uMoonVis.value=o,p.uStars.value=e.stars,this.bloom&&(this.bloom.strength=e.bloom);for(const _ of this.listeners)_(e,this.t,i)}placeSun(t,e){const{sun:n,shadowBox:i}=this,r=i.getCenter(new C);n.position.copy(r).addScaledVector(t,900),n.target.position.copy(r),n.updateMatrixWorld(),n.target.updateMatrixWorld();const a=new ie().lookAt(n.position,r,new C(0,1,0)),l=new C().setFromMatrixColumn(a,0),c=new C().setFromMatrixColumn(a,1),h=new C().setFromMatrixColumn(a,2);let d=1/0,u=-1/0,f=1/0,p=-1/0,_=1/0,m=-1/0;const{min:g,max:M}=i,S=new C;for(let b=0;b<8;b++){S.set(b&1?M.x:g.x,b&2?M.y:g.y,b&4?M.z:g.z).sub(n.position);const E=S.dot(l),R=S.dot(c),y=-S.dot(h);d=Math.min(d,E),u=Math.max(u,E),f=Math.min(f,R),p=Math.max(p,R),_=Math.min(_,y),m=Math.max(m,y)}const v=n.shadow.camera;v.left=d-2,v.right=u+2,v.bottom=f-2,v.top=p+2,v.near=Math.max(1,_-10),v.far=m+10,v.updateProjectionMatrix(),e&&(this.renderer.shadowMap.needsUpdate=!0)}}const oo=6.9,Dw=`
varying vec3 vWorld;
#include <fog_pars_vertex>
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  vec4 mvPosition = viewMatrix * wp;
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}
`,Nw=`
uniform float uTime;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec3 uSkyTop;
uniform vec3 uSkyMid;
uniform vec3 uSkyHor;
uniform vec3 uDeep;
uniform vec3 uShallow;
uniform float uLight;
uniform float uSunPower;
varying vec3 vWorld;
#include <fog_pars_fragment>

float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

vec3 skyAt(vec3 d) {
  float h = clamp(d.y, 0.0, 1.0);
  vec3 c = mix(uSkyHor, uSkyMid, smoothstep(0.0, 0.32, h));
  c = mix(c, uSkyTop, smoothstep(0.16, 0.85, h));
  float sd = max(dot(d, uSunDir), 0.0);
  c += uSunColor * (pow(sd, 6.0) * 0.25 + pow(sd, 60.0) * 0.6) * uSunPower;
  return c;
}

void main() {
  // voxel-cell quantised ripples
  vec2 cell = floor(vWorld.xz * 0.5) * 2.0 + 1.0;
  float t = uTime;
  float dx = 0.0;
  float dz = 0.0;
  dx += cos(cell.x * 0.21 + cell.y * 0.13 + t * 0.9) * 0.05;
  dz += cos(cell.y * 0.27 - cell.x * 0.09 + t * 0.7) * 0.05;
  dx += cos(cell.x * 0.61 - cell.y * 0.37 + t * 1.6) * 0.03;
  dz += cos(cell.y * 0.53 + cell.x * 0.41 - t * 1.3) * 0.03;
  float sparkle = hash21(cell + floor(t * 1.5));
  vec3 n = normalize(vec3(-dx, 1.0, -dz));
  vec3 V = normalize(cameraPosition - vWorld);
  float ndv = max(dot(n, V), 0.0);
  float fres = 0.04 + 0.96 * pow(1.0 - ndv, 4.0);
  vec3 R = reflect(-V, n);
  R.y = abs(R.y);
  vec3 refl = skyAt(R);
  vec3 body = mix(uDeep, uShallow, 0.35 + 0.35 * sin(cell.x * 0.11 + cell.y * 0.07 + t * 0.2)) * uLight;
  vec3 col = mix(body, refl, clamp(fres * 1.15, 0.0, 1.0));
  // sun glitter on individual cells
  float g = pow(max(dot(R, uSunDir), 0.0), 90.0);
  col += uSunColor * g * (0.5 + 2.5 * step(0.62, sparkle)) * uSunPower;
  col += vec3(0.6) * step(0.985, sparkle) * 0.25 * uLight;
  float alpha = clamp(0.8 + fres * 0.2, 0.0, 1.0);
  gl_FragColor = vec4(col, alpha);
  #include <fog_fragment>
}
`;function Ow(s){const{SURF:t,idx:e}=s,n=[],i=[];let r=0;for(let d=0;d<Ze;d++){let u=0;for(;u<Ve;){if(t[e(u,d)]!==Ot.BED){u++;continue}const f=u;for(;u<Ve&&t[e(u,d)]===Ot.BED;)u++;const p=f+ge.x,_=u+ge.x,m=d+ge.z,g=d+1+ge.z;n.push(p,oo,m,p,oo,g,_,oo,g,_,oo,m),i.push(r,r+1,r+2,r,r+2,r+3),r+=4}}const o=new te;o.setAttribute("position",new yt(n,3)),o.setIndex(i);const a=Ns.merge([Ct.fog,{uTime:{value:0},uSunDir:{value:new C(0,1,0)},uSunColor:{value:new pt("#ffcc99")},uSkyTop:{value:new pt("#3c62b8")},uSkyMid:{value:new pt("#9a8fc0")},uSkyHor:{value:new pt("#ffb87c")},uDeep:{value:new pt("#1d4d55")},uShallow:{value:new pt("#2f7a72")},uLight:{value:1},uSunPower:{value:1}}]),l=new Ce({uniforms:a,vertexShader:Dw,fragmentShader:Nw,transparent:!0,depthWrite:!1,fog:!0,side:$n}),c=new Pe(o,l);return c.renderOrder=2,c.name="water",c.frustumCulled=!1,{mesh:c,uniforms:a,update:(d,u,f,p,_)=>{const m=a;m.uTime.value=_,m.uSunDir.value.copy(u),m.uSunColor.value.copy(d.sun),m.uSkyTop.value.copy(d.zen),m.uSkyMid.value.copy(d.mid),m.uSkyHor.value.copy(d.hor),m.uLight.value=.22+.78*Math.min(1,f+.35*(d.hemiI>0?1:0)*(1-p*.5)),m.uSunPower.value=Math.max(f,p*.35)}}}function Uw(s=9){const t=new _n(1,.9,3),e=new _i({color:16777215}),n=new jn(t,e,s),i=[16742954,16117990,16734762,16760906,16117990],r=new pt,o=[];for(let c=0;c<s;c++)r.setHex(i[c%i.length]),n.setColorAt(c,r),o.push({cx:(Math.random()-.5)*100,cz:Ki.pondZ+ge.z+(Math.random()-.5)*6,rx:8+Math.random()*18,rz:3+Math.random()*5,sp:.12+Math.random()*.14,ph:Math.random()*6.28,y:oo-.9-Math.random()*.5});const a=new ue,l=c=>{for(let h=0;h<o.length;h++){const d=o[h],u=d.ph+c*d.sp,f=d.cx+Math.cos(u)*d.rx,p=d.cz+Math.sin(u)*d.rz,_=-Math.sin(u)*d.rx,m=Math.cos(u)*d.rz;a.position.set(f,d.y,p),a.rotation.set(0,Math.atan2(_,m),0),a.updateMatrix(),n.setMatrixAt(h,a.matrix)}n.instanceMatrix.needsUpdate=!0};return l(0),n.frustumCulled=!1,{mesh:n,update:l}}function Fw(){const s=Cn(77),t=[],e=34;for(let c=0;c<e;c++){let h=0,d=0;do{const S=s()*Math.PI*2,v=700+s()*1100;h=Math.cos(S)*v*1.3,d=Math.sin(S)*v-380}while(Math.hypot(h,d+20)<760);const u=260+s()*190,f=24+s()*10,p=f*.72,_=.7+s()*.9,m=[],g=3+Math.floor(s()*4);for(let S=0;S<g;S++){const v=g===1?0:S/(g-1)-.5;m.push({x:v*190*_+(s()-.5)*30,y:(1-Math.abs(v)*1.6)*16*_+s()*10,z:(s()-.5)*60*_,rx:(46+s()*34)*_,ry:(18+s()*16)*_,rz:(30+s()*30)*_})}const M=c*13;for(let S=-2;S<=5;S++)for(let v=-6;v<=6;v++)for(let b=-10;b<=10;b++){const E=b*f,R=S*p,y=v*f;if(R<-10)continue;const T=gi(b*.55+M,v*.55+S*2.7,7);let I=!1;for(const L of m)if(((E-L.x)/L.rx)**2+((R-L.y)/L.ry)**2+((y-L.z)/L.rz)**2+(T-.5)*.55<1){I=!0;break}if(I){const L=(gi(b+M,v+40,3)-.5)*f*.3;t.push({x:h+E+L,y:u+R,z:d+y-L,w:f*1.02,h:p*1.02,d:f*1.02})}}}const n=new _n(1,1,1),i=new qo({color:16777215,roughness:1,metalness:0,fog:!0});i.onBeforeCompile=c=>{c.fragmentShader=c.fragmentShader.replace("#include <opaque_fragment>",`{
        float fadeC = smoothstep(200.0, 620.0, length(vViewPosition));
        float ign = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715))));
        if (ign > fadeC) discard;
      }
      #include <opaque_fragment>`)},i.customProgramCacheKey=()=>"cloud-dither-v1";const r=new jn(n,i,t.length),o=new ue;t.forEach((c,h)=>{o.position.set(c.x,c.y,c.z),o.scale.set(c.w,c.h,c.d),o.updateMatrix(),r.setMatrixAt(h,o.matrix)}),r.frustumCulled=!1,r.castShadow=!1,r.receiveShadow=!1,r.name="clouds";const a=new pt;return{mesh:r,update:(c,h)=>{r.position.x+=c*5,r.position.x>1800&&(r.position.x-=3600),h&&(a.set(16777215).multiplyScalar(.3+.7*h.cloud),i.color.copy(a))},count:t.length}}function Bw(s=14,t={x:0,y:110,z:-100}){const e=Cn(9),n=new Jn,i=new _n(1.1,1.1,3.2),r=new _n(.7,.7,1),o=new _n(3.6,.28,1.7),a=new Rs({color:15986662}),l=new Rs({color:2828336}),c=new jn(i,a,s),h=new jn(r,l,s),d=new jn(o,a,s),u=new jn(o,a,s);for(const g of[c,h,d,u])g.frustumCulled=!1,n.add(g);const f=[];for(let g=0;g<s;g++)f.push({r:70+e()*90,a:e()*Math.PI*2,w:(.06+e()*.05)*(e()<.5?1:-1)*.7,y:t.y+(e()-.5)*50,flap:6+e()*3,ph:e()*6.28,cx:t.x+(e()-.5)*40,cz:t.z+(e()-.5)*60,bob:e()*6.28});const p=new ue,_=new ue,m=g=>{for(let M=0;M<f.length;M++){const S=f[M],v=S.a+g*S.w,b=S.cx+Math.cos(v)*S.r,E=S.cz+Math.sin(v)*S.r*.8,R=S.y+Math.sin(g*.4+S.bob)*4,y=S.w>0?1:-1,T=Math.atan2(-Math.sin(v)*y,Math.cos(v)*.8*y),I=Math.sin(g*S.flap+S.ph),L=-y*.25;_.position.set(b,R,E),_.rotation.set(0,T,L),_.updateMatrix();const N=(G,U,z,W,V=0,nt=1)=>{p.position.set(U,z,W),p.rotation.set(0,0,V),p.scale.set(nt,1,1),p.updateMatrix(),p.matrix.premultiply(_.matrix),G.setMatrixAt(M,p.matrix)};N(c,0,0,0),N(h,0,.4,2),N(d,-2.3,.2+I*.4,0,I*.55),N(u,2.3,.2+I*.4,0,-I*.55)}for(const M of[c,h,d,u])M.instanceMatrix.needsUpdate=!0};return m(0),{group:n,update:m}}const zr={value:800};function zw(s,t=34){const e=Cn(5),n=[],i=[];for(const l of s)for(let c=0;c<t;c++)n.push(l[0],l[1],l[2]),i.push(e(),e(),e(),e());const r=new te;r.setAttribute("position",new yt(n,3)),r.setAttribute("aSeed",new yt(i,4));const o=new Ce({uniforms:{uTime:{value:0},uScale:zr,uColor:{value:new pt("#d9d4cc")}},vertexShader:`
      attribute vec4 aSeed;
      uniform float uTime;
      uniform float uScale;
      varying float vAlpha;
      void main() {
        float life = 8.0;
        float t = fract(uTime / life + aSeed.w);
        float age = t * life;
        vec3 p = position;
        p.y += age * 3.0;
        p.x += sin(age * 0.9 + aSeed.x * 40.0) * (0.5 + age * 0.3) + age * 0.7;
        p.z += cos(age * 0.7 + aSeed.y * 30.0) * (0.4 + age * 0.22);
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        float size = mix(1.3, 5.0, t);
        gl_PointSize = clamp(size * uScale / -mv.z, 1.0, 70.0);
        // fade with age, and dissolve when the camera is right inside a puff
        vAlpha = smoothstep(0.0, 0.07, t) * (1.0 - smoothstep(0.45, 1.0, t)) * 0.32 * smoothstep(10.0, 48.0, -mv.z);
      }
    `,fragmentShader:`
      uniform vec3 uColor;
      varying float vAlpha;
      void main() { gl_FragColor = vec4(uColor, vAlpha); }
    `,transparent:!0,depthWrite:!1}),a=new Bs(r,o);return a.frustumCulled=!1,a.renderOrder=3,{points:a,material:o}}function kw(s,t=420){const e=Cn(31),n=[],i=[],r=["#f8b6c8","#fbd5df","#f6f0e4","#efba2c","#e8713b","#f4a7b9"].map(d=>new pt(d)),o=[];for(let d=0;d<t;d++){o.push(0,0,0),n.push(e(),e(),e(),e());const u=r[Math.floor(e()*r.length)];i.push(u.r,u.g,u.b)}const a=new te;a.setAttribute("position",new yt(o,3)),a.setAttribute("aSeed",new yt(n,4)),a.setAttribute("color",new yt(i,3));const l=new Ce({uniforms:{uTime:{value:0},uScale:zr,uBox:{value:new C(s.size.x,s.size.y,s.size.z)},uCenter:{value:new C(s.center.x,s.center.y,s.center.z)},uLight:{value:1}},vertexShader:`
      attribute vec4 aSeed;
      attribute vec3 color;
      uniform float uTime;
      uniform float uScale;
      uniform vec3 uBox;
      uniform vec3 uCenter;
      varying vec3 vColor;
      varying float vAlpha;
      void main() {
        float fall = fract(aSeed.w + uTime * (0.012 + aSeed.z * 0.01));
        vec3 p = uCenter + (aSeed.xyz - 0.5) * uBox;
        p.y = uCenter.y + uBox.y * 0.5 - fall * uBox.y;
        float ph = aSeed.x * 60.0;
        p.x += sin(uTime * 0.7 + ph) * 6.0 + uTime * 0.0;
        p.z += cos(uTime * 0.5 + ph * 1.3) * 6.0;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = clamp((0.45 + aSeed.y * 0.5) * uScale / -mv.z, 1.2, 14.0);
        vColor = color;
        vAlpha = smoothstep(0.0, 0.05, fall) * (1.0 - smoothstep(0.93, 1.0, fall));
      }
    `,fragmentShader:`
      uniform float uLight;
      varying vec3 vColor;
      varying float vAlpha;
      void main() { gl_FragColor = vec4(vColor * uLight, vAlpha); }
    `,transparent:!0,depthWrite:!1}),c=new Bs(a,l);return c.frustumCulled=!1,c.renderOrder=3,{points:c,material:l,setCount:d=>{a.setDrawRange(0,Math.max(0,d)),c.visible=d>0}}}function Vw(s=46,t={cx:0,cz:-120,sx:300,sz:340,y0:40,h:240}){const e=Cn(88),n=[],i=[];for(let l=0;l<s;l++)n.push(0,0,0),i.push(e(),e(),e(),e());const r=new te;r.setAttribute("position",new yt(n,3)),r.setAttribute("aSeed",new yt(i,4));const o=new Ce({uniforms:{uTime:{value:0},uScale:zr,uStrength:{value:0},uBox:{value:new C(t.sx,t.h,t.sz)},uOrigin:{value:new C(t.cx,t.y0,t.cz)}},vertexShader:`
      attribute vec4 aSeed;
      uniform float uTime;
      uniform float uScale;
      uniform vec3 uBox;
      uniform vec3 uOrigin;
      varying float vLife;
      varying float vTw;
      void main() {
        float rise = fract(aSeed.w + uTime * (0.012 + aSeed.z * 0.008));
        vec3 p = uOrigin + vec3((aSeed.x - 0.5) * uBox.x, rise * uBox.y, (aSeed.y - 0.5) * uBox.z);
        p.x += sin(uTime * 0.25 + aSeed.x * 40.0) * 7.0 + rise * 40.0;
        p.z += cos(uTime * 0.21 + aSeed.y * 33.0) * 6.0;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = clamp((5.0 + aSeed.z * 4.0) * uScale / -mv.z, 2.0, 60.0);
        vLife = smoothstep(0.0, 0.06, rise) * (1.0 - smoothstep(0.86, 1.0, rise));
        vTw = 0.85 + 0.15 * sin(uTime * 3.0 + aSeed.x * 60.0);
      }
    `,fragmentShader:`
      uniform float uStrength;
      varying float vLife;
      varying float vTw;
      void main() {
        vec2 d = gl_PointCoord - 0.5;
        float r = length(d) * 2.0;
        float halo = pow(clamp(1.0 - r, 0.0, 1.0), 2.4);
        float core = step(max(abs(d.x), abs(d.y)), 0.16);
        vec3 col = vec3(1.0, 0.55, 0.2) * halo * 1.3 + vec3(1.0, 0.85, 0.5) * core * 1.6;
        gl_FragColor = vec4(col * uStrength * vLife * vTw, 1.0);
      }
    `,transparent:!0,depthWrite:!1,blending:Cs}),a=new Bs(r,o);return a.frustumCulled=!1,a.renderOrder=4,{points:a,material:o}}function Gw(s=90,t={cx:0,cz:150,sx:260,sz:90,y0:8,h:16}){const e=Cn(64),n=[],i=[];for(let l=0;l<s;l++)n.push(0,0,0),i.push(e(),e(),e(),e());const r=new te;r.setAttribute("position",new yt(n,3)),r.setAttribute("aSeed",new yt(i,4));const o=new Ce({uniforms:{uTime:{value:0},uScale:zr,uStrength:{value:0},uBox:{value:new C(t.sx,t.h,t.sz)},uOrigin:{value:new C(t.cx,t.y0,t.cz)}},vertexShader:`
      attribute vec4 aSeed;
      uniform float uTime;
      uniform float uScale;
      uniform vec3 uBox;
      uniform vec3 uOrigin;
      varying float vBlink;
      void main() {
        float t = uTime * (0.25 + aSeed.w * 0.3);
        vec3 p = uOrigin + vec3((aSeed.x - 0.5) * uBox.x, aSeed.z * uBox.y, (aSeed.y - 0.5) * uBox.z);
        p.x += sin(t * 1.3 + aSeed.x * 50.0) * 7.0 + sin(t * 0.7 + aSeed.y * 20.0) * 5.0;
        p.z += cos(t * 1.1 + aSeed.y * 50.0) * 7.0;
        p.y += sin(t * 1.9 + aSeed.z * 30.0) * 2.2;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = clamp(2.2 * uScale / -mv.z, 1.5, 18.0);
        vBlink = smoothstep(0.15, 0.95, 0.5 + 0.5 * sin(uTime * (1.4 + aSeed.w) + aSeed.x * 90.0));
      }
    `,fragmentShader:`
      uniform float uStrength;
      varying float vBlink;
      void main() {
        vec2 d = gl_PointCoord - 0.5;
        float r = length(d) * 2.0;
        float a = pow(clamp(1.0 - r, 0.0, 1.0), 2.0);
        gl_FragColor = vec4(vec3(0.75, 1.0, 0.35) * a * vBlink * uStrength, 1.0);
      }
    `,transparent:!0,depthWrite:!1,blending:Cs}),a=new Bs(r,o);return a.frustumCulled=!1,a.renderOrder=4,{points:a,material:o}}function Hw(s){const t=[],e=[],n=[],i=[],r=Cn(19),o=new pt("#ff5a2a"),a=new pt("#ffcc77"),l=new pt("#ffa440");for(const[u,f,p,_,m]of s){t.push(u,f,p);const g=m===1?a:m===2?l:o;e.push(g.r,g.g,g.b),n.push(m===1?5.5:m===2?6:8.5+_*2),i.push(r()*100)}const c=new te;c.setAttribute("position",new yt(t,3)),c.setAttribute("color",new yt(e,3)),c.setAttribute("aSize",new yt(n,1)),c.setAttribute("aPh",new yt(i,1));const h=new Ce({uniforms:{uTime:{value:0},uScale:zr,uStrength:{value:0}},vertexShader:`
      attribute vec3 color;
      attribute float aSize;
      attribute float aPh;
      uniform float uScale;
      uniform float uTime;
      varying vec3 vColor;
      varying float vFlick;
      void main() {
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = clamp(aSize * uScale / -mv.z, 2.0, 120.0);
        vColor = color;
        vFlick = 0.9 + 0.1 * sin(uTime * 7.0 + aPh) * sin(uTime * 3.1 + aPh * 1.7);
      }
    `,fragmentShader:`
      uniform float uStrength;
      varying vec3 vColor;
      varying float vFlick;
      void main() {
        vec2 d = gl_PointCoord - 0.5;
        float r = length(d) * 2.0;
        float a = pow(clamp(1.0 - r, 0.0, 1.0), 2.2);
        gl_FragColor = vec4(vColor * a * uStrength * vFlick, 1.0);
      }
    `,transparent:!0,depthWrite:!1,blending:Cs}),d=new Bs(c,h);return d.frustumCulled=!1,d.renderOrder=4,{points:d,material:h}}function Ww(s,t,e,n){for(let i=Math.min(n+3,s.sy-1);i>=0;i--)if(s.get(t,i,e))return i+1;return 0}function Xw(s,t){const e=[];let n=null;for(let i=0;i<t.length-1;i++){const[r,o]=t[i],[a,l]=t[i+1],c=Math.max(1,Math.round(Math.hypot(a-r,l-o)));for(let h=0;h<c;h++){const d=r+(a-r)*h/c,u=o+(l-o)*h/c,f=Math.round(Ut+d),p=Math.round(u);n===null&&(n=s.top(f,p)+1);const _=Ww(s,f,p,n);n=_,e.push([f+.5+ge.x,_,p+.5+ge.z])}}return e}const Uh=(s,t,e,n=36)=>{const i=[];for(let r=0;r<=n;r++){const o=r/n*Math.PI*2;i.push([s+Math.cos(o)*e,t+Math.sin(o)*e])}return i};function Yw(s,t=30){const e=[[[0,398],[0,350],[0,316],[0,290],[0,250],[0,236],[0,214],[9,205],[9,187],[0,179],[0,160],[0,150],[0,136],[0,126]],[[40,276],[5,276],[5,292]],[[-40,276],[-5,276],[-5,292]],[[46,178],[6,178],[6,210],[46,210]],[[-46,178],[-6,178],[-6,210],[-46,210]],Uh(0,196,11.5),[[46,100],[46,92],[46,84],[30,78],[8,74],[8,64]],[[-46,100],[-46,92],[-46,84],[-30,78],[-8,74],[-8,64]],Uh(58,70,12.5),Uh(-58,70,12.5),[[-40,332],[40,332]],[[100,24],[100,322]],[[-100,24],[-100,322]],[[48,96],[48,150]],[[-48,96],[-48,150]]].map(S=>Xw(s,S)),n=[4,1,1,2,2,3,1,1,2,2,2,1,1,1,1],i=Cn(123),r=new Jn,o=new _n(1.5,3.4,1.1);o.translate(0,1.7,0);const a=new _n(1.15,1.15,1.15);a.translate(0,4,0);const l=new _n(1.6,.35,1.6);l.translate(0,4.75,0);const c=new jn(o,new Rs({color:16777215}),t),h=new jn(a,new Rs({color:15318674}),t),d=new jn(l,new Rs({color:2761504}),t),u=["#dc7b2d","#dc7b2d","#8f9196","#8f9196","#a83333","#3c608f","#e8d8b0","#4a7f5a","#7a4f8a","#c9a24a"].map(S=>new pt(S)),f=new pt,p=[],_=n.reduce((S,v)=>S+v,0);for(let S=0;S<t;S++){let v=i()*_,b=0;for(;v>n[b];)v-=n[b++];const E=e[b];f.copy(u[Math.floor(i()*u.length)]),c.setColorAt(S,f),p.push({route:E,s:i()*E.length,dir:i()<.5?1:-1,speed:2.2+i()*1.6,wait:0,hat:i()<.35,off:(i()-.5)*1.2})}for(const S of[c,h,d])S.frustumCulled=!1,r.add(S);const m=new ue,g=S=>{for(let v=0;v<p.length;v++){const b=p[v],E=b.route.length;b.wait>0?b.wait-=S:(b.s+=b.dir*b.speed*S,(b.s>=E-1.01||b.s<=.01)&&(b.dir=-b.dir,b.s=Math.min(Math.max(b.s,.02),E-1.02),b.wait=1.5+Math.random()*4));const R=Math.floor(b.s),y=b.s-R,T=b.route[R],I=b.route[Math.min(R+1,E-1)],L=T[0]+(I[0]-T[0])*y,N=T[2]+(I[2]-T[2])*y,G=T[1]+(I[1]-T[1])*y,U=b.wait>0?0:Math.abs(Math.sin(b.s*1.3+v))*.28,z=(I[0]-T[0])*b.dir,W=(I[2]-T[2])*b.dir,V=Math.atan2(z,W);m.position.set(L+b.off*Math.cos(V),G+U,N-b.off*Math.sin(V)),m.rotation.set(0,V,0),m.scale.set(1,1,1),m.updateMatrix(),c.setMatrixAt(v,m.matrix),h.setMatrixAt(v,m.matrix),b.hat||(m.scale.set(0,0,0),m.updateMatrix()),d.setMatrixAt(v,m.matrix)}for(const v of[c,h,d])v.instanceMatrix.needsUpdate=!0};return g(0),{group:r,update:g,setCount:S=>{S=Math.max(0,Math.min(p.length,S)),c.count=h.count=d.count=S,r.visible=S>0},count:p.length}}function qw(s,t,e){const n=t.map(a=>{const l=document.createElement("div");l.className=`label rank-${a.rank}`,l.innerHTML=`<div class="tag" title="点击飞向 ${a.name}"><i></i>${a.name}<small>${a.sub}</small></div><div class="stem"></div>`,s.appendChild(l);const c=a.rank===1?19:a.rank===2?15:13,h={focus:new C(a.pos[0]+ge.x,a.fy!==void 0?a.fy+ge.y:a.pos[1]+ge.y-(a.rank===1?26:a.rank===2?17:10),a.pos[2]+ge.z),dist:a.rank===1?170:a.rank===2?120:85,name:a.name};return l.querySelector(".tag").addEventListener("click",d=>{d.stopPropagation(),e&&e(h)}),{el:l,rank:a.rank,pos:new C(a.pos[0]+ge.x,a.pos[1]+ge.y,a.pos[2]+ge.z),w:a.name.length*c+a.sub.length*7.4+40,h:a.rank===1?34:28,shown:!0,op:1,pick:h}}),i=new C,r=[];return{update:(a,l,c,h)=>{if(!h)return;r.length=0;const d=[];for(const u of n){i.copy(u.pos).project(a);const f=a.position.distanceTo(u.pos),p=u.rank===1?1800:u.rank===2?1100:520,_=i.z>1||i.z<-1,m=(i.x*.5+.5)*l,g=(-i.y*.5+.5)*c,M=!_&&m>-20&&m<l+20&&g>30&&g<c+30&&f<p;d.push({it:u,x:m,y:g,dist:f,maxD:p,inView:M})}d.sort((u,f)=>u.it.rank-f.it.rank||u.dist-f.dist);for(const u of d){const{it:f}=u;let p=u.inView;if(p){const m={x0:u.x-f.w/2,x1:u.x+f.w/2,y0:u.y-f.h-14,y1:u.y};for(const g of r)if(m.x0<g.x1+4&&m.x1>g.x0-4&&m.y0<g.y1+2&&m.y1>g.y0-2){p=!1;break}p&&r.push(m)}const _=p?f.rank===1?1:Math.min(1,Math.max(.45,1.5-u.dist/u.maxD)):0;if(f.op+=(_-f.op)*.25,f.op<.02&&!p){f.shown&&(f.el.style.opacity="0",f.el.style.visibility="hidden",f.shown=!1);continue}f.shown||(f.el.style.visibility="visible"),f.shown=!0,f.el.style.opacity=f.op.toFixed(2),f.el.style.transform=`translate(${u.x.toFixed(1)}px, ${u.y.toFixed(1)}px) translate(-50%, -100%)`}},items:n}}const Qd={overview:{label:"全景",pos:[-206,102,318],target:[0,26,-22]},axis:{label:"中轴",pos:[0,48,330],target:[0,32,-70]},hall:{label:"主殿",pos:[-122,62,34],target:[0,32,-82]},gate:{label:"山门",pos:[-78,32,236],target:[0,20,116]},pagoda:{label:"宝塔",pos:[-160,90,-28],target:[-58,52,-122]},top:{label:"俯瞰",pos:[0,620,30],target:[0,0,-14]},overviewPortrait:{label:"全景",pos:[-70,470,380],target:[0,8,-34]}},Zw=["overview","axis","hall","gate","pagoda","top"],Ei=s=>document.getElementById(s),Kw=s=>{const t=Math.round(s*24*60)%1440,e=Math.floor(t/60),n=t%60;return`${String(e).padStart(2,"0")}:${String(n).padStart(2,"0")}`};function $w(s){const{tod:t,controls:e}=s,n=Ei("time-slider"),i=Ei("time-presets"),r=new Map;for(const m of Jd){const g=document.createElement("button");g.className="btn",g.textContent=m.label,g.dataset.t=String(m.t),g.addEventListener("click",()=>{s.tweenTime(m.t)}),i.appendChild(g),r.set(m.id,g)}const o=()=>{const m=t.t;n.value=String(Math.round(m*1e3)),Ei("clock").textContent=Kw(m);let g=null,M=1;for(const S of Jd){const v=Math.min(Math.abs(S.t-m),1-Math.abs(S.t-m));v<M&&(M=v,g=S.id)}for(const[S,v]of r)v.classList.toggle("on",M<.028&&S===g)};s.syncTime=o,n.addEventListener("input",()=>{s.cancelTimeTween(),t.auto=!1,Ei("btn-cycle").classList.remove("on"),t.set(parseInt(n.value,10)/1e3),o()}),o();const a=(m,g)=>{const M=Ei(m);return M.addEventListener("click",()=>g(M)),M},l=m=>{document.body.classList.toggle("no-labels",!m),Ei("btn-labels").classList.toggle("on",m),s.labelsOn=m};a("btn-labels",()=>l(!s.labelsOn)),l(!0);const c=m=>{e.autoRotate=m,Ei("btn-rotate").classList.toggle("on",m)};a("btn-rotate",()=>c(!e.autoRotate));const h=m=>{t.auto=m,Ei("btn-cycle").classList.toggle("on",m),m&&s.cancelTimeTween()};a("btn-cycle",()=>h(!t.auto));const d=["auto","high","medium","low","lite"],u={auto:"自动",high:"高",medium:"中",low:"低",lite:"极简"},f=m=>{s.setQuality(m),Ei("btn-quality").textContent=`画质·${u[m]}`};a("btn-quality",()=>f(d[(d.indexOf(s.qualityMode)+1)%d.length])),a("btn-shot",()=>s.screenshot());const p=[...document.querySelectorAll("[data-view]")],_=m=>p.forEach(g=>g.classList.toggle("on",g.dataset.view===m));s.onViewChange=_;for(const m of p)m.addEventListener("click",()=>s.goView(m.dataset.view));return s.params.get("hud")==="0"&&document.body.classList.add("no-hud"),s.params.get("labels")==="0"&&l(!1),window.addEventListener("keydown",m=>{if(m.target&&/input|textarea/i.test(m.target.tagName))return;const g=m.key.toLowerCase();g>="1"&&g<="6"?s.goView(Zw[parseInt(g,10)-1]):g==="l"?l(!s.labelsOn):g==="c"?h(!t.auto):g==="r"?c(!e.autoRotate):g==="h"?document.body.classList.toggle("no-hud"):g==="p"?s.screenshot():g==="q"&&f(d[(d.indexOf(s.qualityMode)+1)%d.length])}),{setLabels:l,setRotate:c,setCycle:h,setQuality:f,syncTime:o}}const Kn=s=>document.getElementById(s),ys=new URLSearchParams(location.search),no=()=>new Promise(s=>{let t=!1;const e=()=>{t||(t=!0,s())};requestAnimationFrame(e),setTimeout(e,100)});function fr(s,t){const e=Kn("loading-bar");e&&(e.style.width=`${Math.round(s*100)}%`),t&&Kn("loading-text")&&(Kn("loading-text").textContent=t)}const qi={high:{label:"高",shadow:4096,prMax:2,maxPixels:52e5,samples:4,bloom:!0,shadows:!0,far2:!0,clouds:!0,people:34,petals:420},medium:{label:"中",shadow:2048,prMax:1.5,maxPixels:32e5,samples:4,bloom:!0,shadows:!0,far2:!0,clouds:!0,people:24,petals:260},low:{label:"低",shadow:1024,prMax:1,maxPixels:21e5,samples:0,bloom:!1,shadows:!0,far2:!0,clouds:!1,people:12,petals:100},lite:{label:"极简",shadow:1024,prMax:.75,maxPixels:13e5,samples:0,bloom:!1,shadows:!0,far2:!1,clouds:!1,people:0,petals:0}},Ms=["high","medium","low","lite"];async function Jw(){fr(.04,"正在搭建场景…"),await no();const s=new Xm({antialias:!1,powerPreference:"high-performance",stencil:!1});s.shadowMap.enabled=!0,s.shadowMap.type=xr,s.shadowMap.autoUpdate=!1,s.info.autoReset=!1,s.toneMapping=zo,s.toneMappingExposure=1,Kn("app").appendChild(s.domElement);const t=new mu;t.fog=new Vo(13621468,8e-4);const e=new Ke(32,window.innerWidth/window.innerHeight,2,6e3),n=new ib(e,s.domElement);n.enableDamping=!0,n.dampingFactor=.075,n.maxPolarAngle=Math.PI*.492,n.minDistance=14,n.maxDistance=1250,n.zoomToCursor=!0,n.autoRotateSpeed=.45,n.screenSpacePanning=!1;const i=new Nu(11587829,9405544,1);t.add(i);const r=new Hl(16773336,3);r.castShadow=!0,r.shadow.bias=-4e-4,r.shadow.normalBias=.35,r.shadow.radius=1.7,t.add(r,r.target);const o=new Hl(12111600,.3);t.add(o);const a=Rw();t.add(a.mesh);const l={THREE:eb,renderer:s,scene:t,camera:e,controls:n,sun:r,params:ys,LEVELS:qi};let c="";try{const D=s.getContext(),F=D.getExtension("WEBGL_debug_renderer_info");c=F?String(D.getParameter(F.UNMASKED_RENDERER_WEBGL)):""}catch{c=""}l.gpuName=c;const h=s.getContext(),d=!!(h.getExtension("EXT_color_buffer_float")||h.getExtension("EXT_color_buffer_half_float"));l.hdrTargets=d;const u=/swiftshader|llvmpipe|softpipe|software|basic render/i.test(c),f=ys.get("q");l.qualityMode=f&&qi[f]?f:"auto";const p=window.matchMedia&&window.matchMedia("(pointer: coarse)").matches,_=()=>u?"lite":p?"medium":"high";l.level=l.qualityMode==="auto"?_():l.qualityMode;const m=Math.min(window.devicePixelRatio||1,2);let g=Math.min(m,qi[l.level].prMax),M=null,S=null;function v(){const D=qi[l.level],F=window.innerWidth,Z=window.innerHeight;if(M){for(const tt of M.passes)tt.dispose?.();M.dispose()}const ot=Math.max(.5,Math.min(g,Math.sqrt(D.maxPixels/(F*Z))));l.pr=ot,s.setPixelRatio(ot),s.setSize(F,Z);const _t=new He(Math.floor(F*ot),Math.floor(Z*ot),{type:d?an:dn,samples:D.samples});M=new Mb(s,_t),M.setPixelRatio(ot),M.setSize(F,Z),M.addPass(new Sb(t,e)),S=new Cr(new it(F,Z),.4,.55,1.05),S.enabled=D.bloom&&d&&ot>=.75,M.addPass(S),M.addPass(new wb),l.tod&&(l.tod.bloom=S),zr.value=Z*ot/(2*Math.tan(fn.degToRad(e.fov/2))),l.composer=M}function b(){const D=qi[l.level].shadow;r.shadow.mapSize.set(D,D),r.shadow.map&&(r.shadow.map.dispose(),r.shadow.map=null),s.shadowMap.needsUpdate=!0}b(),v();function E(){const D=qi[l.level];if(g=Math.min(m,D.prMax),r.castShadow=D.shadows,s.shadowMap.enabled=D.shadows,b(),v(),l.optional){const F=l.optional;F.far2.visible=D.far2,F.clouds.visible=D.clouds&&!ys.get("noclouds"),F.people.setCount(D.people),F.petals.setCount(D.petals),F.birds.visible=D.people>0||D.clouds;for(const Z of F.night)Z.visible=D.people>0}l.tod&&l.tod.apply(!0)}l.screenshot=()=>{M.render(),s.domElement.toBlob(D=>{if(!D)return;const F=document.createElement("a");F.href=URL.createObjectURL(D),F.download=`voxel-temple-${Date.now()}.png`,F.click(),setTimeout(()=>URL.revokeObjectURL(F.href),4e3)},"image/png")},l.setQuality=D=>{l.qualityMode=D,l.level=D==="auto"?_():D,E()},fr(.12,"堆叠体素…"),await no();const R=performance.now(),y=Sw(),T=performance.now();fr(.5,"生成网格与环境光遮蔽…"),await no();const I=$d(),L=Kd(y.grid,{chunk:32,scale:1,offset:[ge.x,ge.y,ge.z],aoMin:.5}),N=new Jn;let G=0;for(const D of L){const F=new Pe(D.geometry,I);F.castShadow=!0,F.receiveShadow=!0,N.add(F),G+=D.faces}t.add(N);const U=performance.now();fr(.72,"远山叠翠…"),await no();const z=new Jn,W=new Jn,V=$d({fogBoost:1.6,fogTint:.6});let nt=0,B=0;for(const D of Pb()){const F=Kd(D.grid,{chunk:32,scale:D.scale,offset:D.offset,aoMin:B===0?.86:.9});for(const Z of F){const ot=new Pe(Z.geometry,B===0?I:V);ot.castShadow=!1,ot.receiveShadow=!1,(B===0?z:W).add(ot),nt+=Z.faces}B++}ys.get("nofar")||t.add(z,W);const X=performance.now();console.log(`[voxel] world ${(T-R).toFixed(0)}ms, mesh ${(U-T).toFixed(0)}ms (${G} faces), far ${(X-U).toFixed(0)}ms (${nt} faces)`),fr(.86,"点缀水色云影…"),await no();const $=Ow(y.maps);t.add($.mesh);const gt=Uw(10);t.add(gt.mesh);const mt=Fw();t.add(mt.mesh);const zt=Bw(15,{x:0,y:112,z:-95});t.add(zt.group);const Wt=D=>[D[0]+.5+ge.x,D[1]+ge.y,D[2]+.5+ge.z],Dt=y.anchors.censers.map(Wt),J=zw(Dt,34);t.add(J.points);const et=kw({size:{x:230,y:90,z:330},center:{x:0,y:48,z:-20}},420);t.add(et.points);const ut=Hw(y.glow.map(D=>[D[0]+ge.x,D[1]+ge.y,D[2]+ge.z,D[3],D[4]]));t.add(ut.points);const xt=Yw(y.grid,34);t.add(xt.group);const st=Vw(46);t.add(st.points);const Mt=Gw(90);t.add(Mt.points),l.optional={far2:W,clouds:mt.mesh,people:xt,petals:et,birds:zt.group,night:[st.points,Mt.points]};const qt=new $e(new C(ge.x,0,ge.z),new C(ge.x+Ve,Zm,ge.z+Ze)),K=new Lw({scene:t,renderer:s,sun:r,hemi:i,fill:o,sky:a,bloom:S,shadowBox:qt});l.tod=K;const rt=new pt;K.onChange(D=>{$.update(D,K.keyDir,K.sunFade,K.moonFade,l.elapsed??0),rt.copy(D.hemiS).lerp(new pt(1,1,1),.55).multiplyScalar(.55+.5*Math.min(1,K.sunFade+.2)),J.material.uniforms.uColor.value.copy(rt),et.material.uniforms.uLight.value=.16+.84*Math.min(1,K.sunFade+.1),ut.material.uniforms.uStrength.value=D.glow*.85;const F=fn.clamp((D.stars-.2)*1.4,0,1);st.material.uniforms.uStrength.value=F,Mt.material.uniforms.uStrength.value=F*.9,mt.update(0,D),l.syncTime?.()}),K.set(parseFloat(ys.get("t")??"0.715")),E();const dt=qw(Kn("labels"),y.anchors.labels,D=>l.flyTo(D.focus,D.dist));l.labelsOn=!0;let ht=null;const vt=D=>D<.5?4*D*D*D:1-Math.pow(-2*D+2,3)/2;function Nt(D){const F=window.innerWidth/window.innerHeight,Z=D==="overview"&&F<.95?Qd.overviewPortrait:Qd[D],ot=new C(...Z.target),_t=new C(...Z.pos);let tt=1;return D==="overview"&&F<.95?tt=fn.clamp(.95/Math.max(F,.4),1,1.5):F<1.5&&(tt=Math.min(1.9,1.6/Math.max(F,.5)*.85+.05)),_t.sub(ot).multiplyScalar(Math.max(1,tt)).add(ot),{pos:_t,target:ot}}l.goView=(D,F=!1)=>{const{pos:Z,target:ot}=Nt(D);if(l.onViewChange?.(D),l.view=D,F){e.position.copy(Z),n.target.copy(ot),n.update();return}ht={t:0,dur:1.9,p0:e.position.clone(),t0:n.target.clone(),p1:Z,t1:ot}},l.flyTo=(D,F)=>{const Z=e.position.clone().sub(D);Z.y=0,Z.lengthSq()<1&&Z.set(-.45,0,1),Z.normalize();const ot=fn.degToRad(24),_t=D.clone().addScaledVector(Z,Math.cos(ot)*F);_t.y=D.y+Math.sin(ot)*F,l.onViewChange?.(null),l.view=null,ht={t:0,dur:1.7,p0:e.position.clone(),t0:n.target.clone(),p1:_t,t1:D.clone()}},n.addEventListener("start",()=>{ht=null,l.onViewChange?.(null)});let Tt=null;l.tweenTime=D=>{K.auto=!1,Kn("btn-cycle")?.classList.remove("on");let F=D-K.t;F>.5&&(F-=1),F<-.5&&(F+=1),Tt={from:K.t,d:F,t:0,dur:1.4}},l.cancelTimeTween=()=>{Tt=null};function kt(){const D=window.innerWidth,F=window.innerHeight;e.aspect=D/F,e.updateProjectionMatrix(),v(),l.view&&!ht&&l.goView(l.view,!0)}let $t=0;window.addEventListener("resize",()=>{clearTimeout($t),$t=setTimeout(kt,120)}),$w(l);const O=Kn("btn-quality");O&&(O.textContent=`画质·${{auto:"自动",high:"高",medium:"中",low:"低",lite:"极简"}[l.qualityMode]}`),l.goView(ys.get("view")??"overview",!0);const fe=new C(0,30,-20),se=parseFloat(ys.get("slow")||"0")||0,P={last:performance.now(),acc:0,frames:0,slow:0,fast:0,born:performance.now()};l.elapsed=0;let w="";s.setAnimationLoop(()=>{const D=performance.now(),F=Math.min((D-P.last)/1e3,.1);if(P.last=D,l.elapsed+=F,ht){ht.t+=F/ht.dur;const ot=vt(Math.min(1,ht.t));e.position.lerpVectors(ht.p0,ht.p1,ot),n.target.lerpVectors(ht.t0,ht.t1,ot),ht.t>=1&&(ht=null)}if(Tt){Tt.t+=F/Tt.dur;const ot=vt(Math.min(1,Tt.t));K.set(Tt.from+Tt.d*ot,!0),Tt.t>=1&&(Tt=null)}n.update(),n.target.x=fn.clamp(n.target.x,-420,420),n.target.z=fn.clamp(n.target.z,-520,420),n.target.y=fn.clamp(n.target.y,0,160),K.update(F,l.elapsed);const Z=e.position.distanceTo(fe);if(t.fog.density=(K.state?K.state.fd:8e-4)*.6*fn.clamp(460/Z,.3,1),Pi.uGlow.value=(K.state?K.state.glow*2.4:0)*(1+.035*Math.sin(l.elapsed*8.3)+.025*Math.sin(l.elapsed*3.7+1.3)),$.uniforms.uTime.value=l.elapsed,gt.update(l.elapsed),mt.update(F,null),zt.update(l.elapsed),xt.update(F),J.material.uniforms.uTime.value=l.elapsed,et.material.uniforms.uTime.value=l.elapsed,ut.material.uniforms.uTime.value=l.elapsed,st.material.uniforms.uTime.value=l.elapsed,Mt.material.uniforms.uTime.value=l.elapsed,a.mesh.position.copy(e.position),dt.update(e,window.innerWidth,window.innerHeight,l.labelsOn),s.info.reset(),M.render(),se>0){const ot=performance.now();for(;performance.now()-ot<se;);}if(P.acc+=F,P.frames++,P.acc>=.6){const ot=P.frames/P.acc;P.acc=0,P.frames=0;const tt=s.info.render.triangles;w=`FPS ${ot.toFixed(0)} · ${(tt/1e3).toFixed(0)}k 三角面 · ${qi[l.level].label} · ${l.pr.toFixed(2)}×`,Kn("stats").textContent=w,l.fps=ot;const lt=D-P.born>4500&&document.visibilityState==="visible";if(l.qualityMode==="auto"&&lt){const St=qi[l.level];if(ot<32){if(P.slow++,P.fast=0,P.slow>=2){P.slow=0;const Vt=Math.min(g,l.pr);Vt>.62?(g=Math.max(.62,Vt*.84),v()):Ms.indexOf(l.level)<Ms.length-1&&(l.level=Ms[Ms.indexOf(l.level)+1],P.lockUntil=D+45e3,E())}}else if(ot>58){P.fast++,P.slow=0;const Vt=Math.sqrt(St.maxPixels/(window.innerWidth*window.innerHeight)),bt=Math.min(m,St.prMax,Vt);if(P.fast>=8&&l.pr<bt-.01)g=Math.min(bt,l.pr*1.06),v(),P.fast=0;else if(P.fast>=14&&l.pr>=bt-.01&&D>(P.lockUntil??0)){const wt=Ms.indexOf(_()),Xt=Ms.indexOf(l.level);Xt>wt&&(l.level=Ms[Xt-1],P.lockUntil=D+3e4,P.fast=0,E())}}else P.slow=0,P.fast=0}}}),Object.assign(l,{world:y,water:$,koi:gt,clouds:mt,birds:zt,people:xt,smoke:J,petals:et,glow:ut,labels:dt,faces:G,farFaces:nt,chunks:L}),window.app=l,fr(1,""),Kn("loading").classList.add("done"),l.bootMs=performance.now(),console.log(`[boot] ready in ${l.bootMs.toFixed(0)}ms | GPU: ${l.gpuName||"n/a"} | level: ${l.level} | visible faces: ${G+nt} (${G} detail + ${nt} far)`)}Jw().catch(s=>{console.error(s);const t=Kn("fatal");t.style.display="flex";const e=s&&s.message?s.message:String(s);t.innerHTML="";const n=document.createElement("div");n.textContent="加载失败："+e;const i=document.createElement("div");i.style.opacity="0.7",i.style.marginTop="10px",i.textContent=/webgl/i.test(e)?"请使用支持 WebGL2 的现代浏览器，并确认已开启硬件加速。":"请刷新页面重试，或查看浏览器控制台。",t.append(n,i),Kn("loading")?.classList.add("done")});
