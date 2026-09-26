(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Ya="186",ss={ROTATE:0,DOLLY:1,PAN:2},ns={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ru=0,Fl=1,Cu=2,Ur=1,_h=2,Ts=3,Ti=0,tn=1,pn=2,Jn=0,Cs=1,jo=2,Ol=3,Bl=4,Pu=5,ts=100,Lu=101,Du=102,Iu=103,Nu=104,Uu=200,Fu=201,Ou=202,Bu=203,xh=204,vh=205,zu=206,Hu=207,ku=208,Gu=209,Vu=210,Wu=211,Xu=212,Yu=213,qu=214,ta=0,ea=1,na=2,Fs=3,ia=4,sa=5,ra=6,oa=7,Mh=0,Zu=1,Ku=2,Fn=0,Sh=1,yh=2,Eh=3,bh=4,wh=5,Th=6,qa=7,Ah=300,Ai=301,hs=302,lo=303,co=304,$r=306,Gr=1e3,Zn=1001,aa=1002,Ve=1003,Ju=1004,er=1005,Ze=1006,ho=1007,Ei=1008,an=1009,Rh=1010,Ch=1011,Os=1012,Za=1013,On=1014,Tn=1015,Bn=1016,Ka=1017,Ja=1018,Bs=1020,Ph=35902,Lh=35899,Dh=1021,Ih=1022,An=1023,Qn=1026,bi=1027,$a=1028,Qa=1029,Ri=1030,ja=1031,tl=1033,Fr=33776,Or=33777,Br=33778,zr=33779,la=35840,ca=35841,ha=35842,ua=35843,fa=36196,da=37492,pa=37496,ma=37488,ga=37489,Vr=37490,_a=37491,xa=37808,va=37809,Ma=37810,Sa=37811,ya=37812,Ea=37813,ba=37814,wa=37815,Ta=37816,Aa=37817,Ra=37818,Ca=37819,Pa=37820,La=37821,Da=36492,Ia=36494,Na=36495,Ua=36283,Fa=36284,Wr=36285,Oa=36286,$u=3200,Ba=0,Qu=1,qn="",nn="srgb",Xr="srgb-linear",Yr="linear",pe="srgb",uo=7680,ju=519,tf=512,ef=513,nf=514,el=515,sf=516,rf=517,nl=518,of=519,af=35044,zl="300 es",Un=2e3,zs=2001;function lf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function qr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function cf(){const i=qr("canvas");return i.style.display="block",i}const Hl={};function kl(...i){const t="THREE."+i.shift();console.log(t,...i)}function Nh(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function zt(...i){i=Nh(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function le(...i){i=Nh(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function rs(...i){const t=i.join(" ");t in Hl||(Hl[t]=!0,zt(...i))}function hf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const uf={[ta]:ea,[na]:ra,[ia]:oa,[Fs]:sa,[ea]:ta,[ra]:na,[oa]:ia,[sa]:Fs};class di{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Gl=1234567;const Ps=Math.PI/180,Hs=180/Math.PI;function Di(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xe[i&255]+Xe[i>>8&255]+Xe[i>>16&255]+Xe[i>>24&255]+"-"+Xe[t&255]+Xe[t>>8&255]+"-"+Xe[t>>16&15|64]+Xe[t>>24&255]+"-"+Xe[e&63|128]+Xe[e>>8&255]+"-"+Xe[e>>16&255]+Xe[e>>24&255]+Xe[n&255]+Xe[n>>8&255]+Xe[n>>16&255]+Xe[n>>24&255]).toLowerCase()}function $t(i,t,e){return Math.max(t,Math.min(e,i))}function il(i,t){return(i%t+t)%t}function ff(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function df(i,t,e){return i!==t?(e-i)/(t-i):0}function Ls(i,t,e){return(1-e)*i+e*t}function pf(i,t,e,n){return Ls(i,t,1-Math.exp(-e*n))}function mf(i,t=1){return t-Math.abs(il(i,t*2)-t)}function gf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function _f(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function xf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function vf(i,t){return i+Math.random()*(t-i)}function Mf(i){return i*(.5-Math.random())}function Sf(i){i!==void 0&&(Gl=i);let t=Gl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function yf(i){return i*Ps}function Ef(i){return i*Hs}function bf(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function wf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Tf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Af(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,l*d,l*u,a*c);break;case"YZY":i.set(l*u,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*u,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*f,a*h,a*c);break;default:zt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function es(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function $e(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const os={DEG2RAD:Ps,RAD2DEG:Hs,generateUUID:Di,clamp:$t,euclideanModulo:il,mapLinear:ff,inverseLerp:df,lerp:Ls,damp:pf,pingpong:mf,smoothstep:gf,smootherstep:_f,randInt:xf,randFloat:vf,randFloatSpread:Mf,seededRandom:Sf,degToRad:yf,radToDeg:Ef,isPowerOfTwo:bf,ceilPowerOfTwo:wf,floorPowerOfTwo:Tf,setQuaternionFromProperEuler:Af,normalize:$e,denormalize:es},Sl=class Sl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Sl.prototype.isVector2=!0;let vt=Sl;class mn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(d!==x||l!==u||c!==f||h!==g){let m=l*u+c*f+h*g+d*x;m<0&&(u=-u,f=-f,g=-g,x=-x,m=-m);let p=1-a;if(m<.9995){const S=Math.acos(m),R=Math.sin(S);p=Math.sin(p*S)/R,a=Math.sin(a*S)/R,l=l*p+u*a,c=c*p+f*a,h=h*p+g*a,d=d*p+x*a}else{l=l*p+u*a,c=c*p+f*a,h=h*p+g*a,d=d*p+x*a;const S=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=S,c*=S,h*=S,d*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-a*f,t[e+2]=c*g+h*f+a*u-l*d,t[e+3]=h*g-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),d=a(r/2),u=l(n/2),f=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:zt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($t(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const yl=class yl{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Vl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Vl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return fo.copy(this).projectOnVector(t),this.sub(fo)}reflect(t){return this.sub(fo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos($t(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};yl.prototype.isVector3=!0;let U=yl;const fo=new U,Vl=new mn,El=class El{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],S=s[1],R=s[4],y=s[7],w=s[2],b=s[5],L=s[8];return r[0]=o*x+a*S+l*w,r[3]=o*m+a*R+l*b,r[6]=o*p+a*y+l*L,r[1]=c*x+h*S+d*w,r[4]=c*m+h*R+d*b,r[7]=c*p+h*y+d*L,r[2]=u*x+f*S+g*w,r[5]=u*m+f*R+g*b,r[8]=u*p+f*y+g*L,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,g=e*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=d*x,t[1]=(s*c-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=u*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return rs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(po.makeScale(t,e)),this}rotate(t){return rs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(po.makeRotation(-t)),this}translate(t,e){return rs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(po.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};El.prototype.isMatrix3=!0;let Gt=El;const po=new Gt,Wl=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xl=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rf(){const i={enabled:!0,workingColorSpace:Xr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===pe&&(s.r=$n(s.r),s.g=$n(s.g),s.b=$n(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===pe&&(s.r=as(s.r),s.g=as(s.g),s.b=as(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===qn?Yr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return rs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return rs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Xr]:{primaries:t,whitePoint:n,transfer:Yr,toXYZ:Wl,fromXYZ:Xl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:nn},outputColorSpaceConfig:{drawingBufferColorSpace:nn}},[nn]:{primaries:t,whitePoint:n,transfer:pe,toXYZ:Wl,fromXYZ:Xl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:nn}}}),i}const se=Rf();function $n(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function as(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Fi;class Cf{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Fi===void 0&&(Fi=qr("canvas")),Fi.width=t.width,Fi.height=t.height;const s=Fi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Fi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=qr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=$n(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor($n(e[n]/255)*255):e[n]=$n(e[n]);return{data:e,width:t.width,height:t.height}}else return zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Pf=0;class sl{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Pf++}),this.uuid=Di(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(mo(s[o].image)):r.push(mo(s[o]))}else r=mo(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function mo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Cf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(zt("Texture: Unable to serialize Texture."),{})}let Lf=0;const go=new U;class Ke extends di{constructor(t=Ke.DEFAULT_IMAGE,e=Ke.DEFAULT_MAPPING,n=Zn,s=Zn,r=Ze,o=Ei,a=An,l=an,c=Ke.DEFAULT_ANISOTROPY,h=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=Di(),this.name="",this.source=new sl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(go).x}get height(){return this.source.getSize(go).y}get depth(){return this.source.getSize(go).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){zt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ah)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Gr:t.x=t.x-Math.floor(t.x);break;case Zn:t.x=t.x<0?0:1;break;case aa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Gr:t.y=t.y-Math.floor(t.y);break;case Zn:t.y=t.y<0?0:1;break;case aa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=Ah;Ke.DEFAULT_ANISOTROPY=1;const bl=class bl{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const R=(c+1)/2,y=(f+1)/2,w=(p+1)/2,b=(h+u)/4,L=(d+x)/4,v=(g+m)/4;return R>y&&R>w?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=b/n,r=L/n):y>w?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=b/s,r=v/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=L/r,s=v/r),this.set(n,s,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(d-x)/S,this.z=(u-h)/S,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=$t(this.x,t.x,e.x),this.y=$t(this.y,t.y,e.y),this.z=$t(this.z,t.z,e.z),this.w=$t(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=$t(this.x,t,e),this.y=$t(this.y,t,e),this.z=$t(this.z,t,e),this.w=$t(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar($t(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};bl.prototype.isVector4=!0;let Ae=bl;class Df extends di{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ze,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ae(0,0,t,e),this.scissorTest=!1,this.viewport=new Ae(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:n.depth},r=new Ke(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Ze,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new sl(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rn extends Df{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Uh extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class If extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Jr=class Jr{constructor(t,e,n,s,r,o,a,l,c,h,d,u,f,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,d,u,f,g,x,m)}set(t,e,n,s,r,o,a,l,c,h,d,u,f,g,x,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jr().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,s=1/Oi.setFromMatrixColumn(t,0).length(),r=1/Oi.setFromMatrixColumn(t,1).length(),o=1/Oi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=o*h,f=o*d,g=a*h,x=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-x*c,e[9]=-a*l,e[2]=x-u*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,g=c*h,x=c*d;e[0]=u+x*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=x+u*a,e[10]=o*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,g=c*h,x=c*d;e[0]=u-x*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=x-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const u=o*h,f=o*d,g=a*h,x=a*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+x,e[1]=l*d,e[5]=x*c+u,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const u=o*l,f=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-u*d,e[8]=g*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-x*d}else if(t.order==="XZY"){const u=o*l,f=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+x,e[5]=o*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Nf,t,Uf)}lookAt(t,e,n){const s=this.elements;return rn.subVectors(t,e),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),si.crossVectors(n,rn),si.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),si.crossVectors(n,rn)),si.normalize(),nr.crossVectors(rn,si),s[0]=si.x,s[4]=nr.x,s[8]=rn.x,s[1]=si.y,s[5]=nr.y,s[9]=rn.y,s[2]=si.z,s[6]=nr.z,s[10]=rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],S=n[3],R=n[7],y=n[11],w=n[15],b=s[0],L=s[4],v=s[8],M=s[12],T=s[1],A=s[5],P=s[9],D=s[13],N=s[2],z=s[6],q=s[10],W=s[14],tt=s[3],Y=s[7],j=s[11],it=s[15];return r[0]=o*b+a*T+l*N+c*tt,r[4]=o*L+a*A+l*z+c*Y,r[8]=o*v+a*P+l*q+c*j,r[12]=o*M+a*D+l*W+c*it,r[1]=h*b+d*T+u*N+f*tt,r[5]=h*L+d*A+u*z+f*Y,r[9]=h*v+d*P+u*q+f*j,r[13]=h*M+d*D+u*W+f*it,r[2]=g*b+x*T+m*N+p*tt,r[6]=g*L+x*A+m*z+p*Y,r[10]=g*v+x*P+m*q+p*j,r[14]=g*M+x*D+m*W+p*it,r[3]=S*b+R*T+y*N+w*tt,r[7]=S*L+R*A+y*z+w*Y,r[11]=S*v+R*P+y*q+w*j,r[15]=S*M+R*D+y*W+w*it,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15],S=l*f-c*u,R=a*f-c*d,y=a*u-l*d,w=o*f-c*h,b=o*u-l*h,L=o*d-a*h;return e*(x*S-m*R+p*y)-n*(g*S-m*w+p*b)+s*(g*R-x*w+p*L)-r*(g*y-x*b+m*L)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+s*(r*c-o*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],S=e*a-n*o,R=e*l-s*o,y=e*c-r*o,w=n*l-s*a,b=n*c-r*a,L=s*c-r*l,v=h*x-d*g,M=h*m-u*g,T=h*p-f*g,A=d*m-u*x,P=d*p-f*x,D=u*p-f*m,N=S*D-R*P+y*A+w*T-b*M+L*v;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/N;return t[0]=(a*D-l*P+c*A)*z,t[1]=(s*P-n*D-r*A)*z,t[2]=(x*L-m*b+p*w)*z,t[3]=(u*b-d*L-f*w)*z,t[4]=(l*T-o*D-c*M)*z,t[5]=(e*D-s*T+r*M)*z,t[6]=(m*y-g*L-p*R)*z,t[7]=(h*L-u*y+f*R)*z,t[8]=(o*P-a*T+c*v)*z,t[9]=(n*T-e*P-r*v)*z,t[10]=(g*b-x*y+p*S)*z,t[11]=(d*y-h*b-f*S)*z,t[12]=(a*M-o*A-l*v)*z,t[13]=(e*A-n*M+s*v)*z,t[14]=(x*R-g*w-m*S)*z,t[15]=(h*w-d*R+u*S)*z,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,g=r*d,x=o*h,m=o*d,p=a*d,S=l*c,R=l*h,y=l*d,w=n.x,b=n.y,L=n.z;return s[0]=(1-(x+p))*w,s[1]=(f+y)*w,s[2]=(g-R)*w,s[3]=0,s[4]=(f-y)*b,s[5]=(1-(u+p))*b,s[6]=(m+S)*b,s[7]=0,s[8]=(g+R)*L,s[9]=(m-S)*L,s[10]=(1-(u+x))*L,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Oi.set(s[0],s[1],s[2]).length();const a=Oi.set(s[4],s[5],s[6]).length(),l=Oi.set(s[8],s[9],s[10]).length();r<0&&(o=-o),xn.copy(this);const c=1/o,h=1/a,d=1/l;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=h,xn.elements[5]*=h,xn.elements[6]*=h,xn.elements[8]*=d,xn.elements[9]*=d,xn.elements[10]*=d,e.setFromRotationMatrix(xn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=Un,l=!1){const c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let g,x;if(l)g=r/(o-r),x=o*r/(o-r);else if(a===Un)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===zs)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Un,l=!1){const c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s);let g,x;if(l)g=1/(o-r),x=o/(o-r);else if(a===Un)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===zs)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Jr.prototype.isMatrix4=!0;let he=Jr;const Oi=new U,xn=new he,Nf=new U(0,0,0),Uf=new U(1,1,1),si=new U,nr=new U,rn=new U,Yl=new he,ql=new mn;class gn{constructor(t=0,e=0,n=0,s=gn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin($t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin($t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-$t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Yl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Yl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ql.setFromEuler(this),this.setFromQuaternion(ql,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gn.DEFAULT_ORDER="XYZ";class Fh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ff=0;const Zl=new U,Bi=new mn,Hn=new he,ir=new U,_s=new U,Of=new U,Bf=new mn,Kl=new U(1,0,0),Jl=new U(0,1,0),$l=new U(0,0,1),Ql={type:"added"},zf={type:"removed"},zi={type:"childadded",child:null},_o={type:"childremoved",child:null};class He extends di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=Di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=He.DEFAULT_UP.clone();const t=new U,e=new gn,n=new mn,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new he},normalMatrix:{value:new Gt}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=He.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Bi.setFromAxisAngle(t,e),this.quaternion.multiply(Bi),this}rotateOnWorldAxis(t,e){return Bi.setFromAxisAngle(t,e),this.quaternion.premultiply(Bi),this}rotateX(t){return this.rotateOnAxis(Kl,t)}rotateY(t){return this.rotateOnAxis(Jl,t)}rotateZ(t){return this.rotateOnAxis($l,t)}translateOnAxis(t,e){return Zl.copy(t).applyQuaternion(this.quaternion),this.position.add(Zl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Kl,t)}translateY(t){return this.translateOnAxis(Jl,t)}translateZ(t){return this.translateOnAxis($l,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ir.copy(t):ir.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),_s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(_s,ir,this.up):Hn.lookAt(ir,_s,this.up),this.quaternion.setFromRotationMatrix(Hn),s&&(Hn.extractRotation(s.matrixWorld),Bi.setFromRotationMatrix(Hn),this.quaternion.premultiply(Bi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(le("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ql),zi.child=t,this.dispatchEvent(zi),zi.child=null):le("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(zf),_o.child=t,this.dispatchEvent(_o),_o.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Hn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ql),zi.child=t,this.dispatchEvent(zi),zi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,t,Of),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,Bf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}He.DEFAULT_UP=new U(0,1,0);He.DEFAULT_MATRIX_AUTO_UPDATE=!0;He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class sn extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Hf={type:"move"};class xo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Hf)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new sn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Oh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},sr={h:0,s:0,l:0};function vo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Lt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=nn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=se.workingColorSpace){return this.r=t,this.g=e,this.b=n,se.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=se.workingColorSpace){if(t=il(t,1),e=$t(e,0,1),n=$t(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=vo(o,r,t+1/3),this.g=vo(o,r,t),this.b=vo(o,r,t-1/3)}return se.colorSpaceToWorking(this,s),this}setStyle(t,e=nn){function n(r){r!==void 0&&parseFloat(r)<1&&zt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:zt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=nn){const n=Oh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$n(t.r),this.g=$n(t.g),this.b=$n(t.b),this}copyLinearToSRGB(t){return this.r=as(t.r),this.g=as(t.g),this.b=as(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=nn){return se.workingToColorSpace(Ye.copy(this),t),Math.round($t(Ye.r*255,0,255))*65536+Math.round($t(Ye.g*255,0,255))*256+Math.round($t(Ye.b*255,0,255))}getHexString(t=nn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.workingToColorSpace(Ye.copy(this),e);const n=Ye.r,s=Ye.g,r=Ye.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=se.workingColorSpace){return se.workingToColorSpace(Ye.copy(this),e),t.r=Ye.r,t.g=Ye.g,t.b=Ye.b,t}getStyle(t=nn){se.workingToColorSpace(Ye.copy(this),t);const e=Ye.r,n=Ye.g,s=Ye.b;return t!==nn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ri),this.setHSL(ri.h+t,ri.s+e,ri.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ri),t.getHSL(sr);const n=Ls(ri.h,sr.h,e),s=Ls(ri.s,sr.s,e),r=Ls(ri.l,sr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ye=new Lt;Lt.NAMES=Oh;class rl{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Lt(t),this.near=e,this.far=n}clone(){return new rl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class kf extends He{constructor(){super(),this.isScene=!0,window.__galleryCaptureScene?.(this),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const vn=new U,kn=new U,Mo=new U,Gn=new U,Hi=new U,ki=new U,jl=new U,So=new U,yo=new U,Eo=new U,bo=new Ae,wo=new Ae,To=new Ae;class wn{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),vn.subVectors(t,e),s.cross(vn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){vn.subVectors(s,e),kn.subVectors(n,e),Mo.subVectors(t,e);const o=vn.dot(vn),a=vn.dot(kn),l=vn.dot(Mo),c=kn.dot(kn),h=kn.dot(Mo),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Gn.x),l.addScaledVector(o,Gn.y),l.addScaledVector(a,Gn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return bo.setScalar(0),wo.setScalar(0),To.setScalar(0),bo.fromBufferAttribute(t,e),wo.fromBufferAttribute(t,n),To.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(bo,r.x),o.addScaledVector(wo,r.y),o.addScaledVector(To,r.z),o}static isFrontFacing(t,e,n,s){return vn.subVectors(n,e),kn.subVectors(t,e),vn.cross(kn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),vn.cross(kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return wn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return wn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return wn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return wn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return wn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Hi.subVectors(s,n),ki.subVectors(r,n),So.subVectors(t,n);const l=Hi.dot(So),c=ki.dot(So);if(l<=0&&c<=0)return e.copy(n);yo.subVectors(t,s);const h=Hi.dot(yo),d=ki.dot(yo);if(h>=0&&d<=h)return e.copy(s);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Hi,o);Eo.subVectors(t,r);const f=Hi.dot(Eo),g=ki.dot(Eo);if(g>=0&&f<=g)return e.copy(r);const x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(ki,a);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return jl.subVectors(r,s),a=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(jl,a);const p=1/(m+x+u);return o=x*p,a=u*p,e.copy(n).addScaledVector(Hi,o).addScaledVector(ki,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Ii{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Mn):Mn.fromBufferAttribute(r,o),Mn.applyMatrix4(t.matrixWorld),this.expandByPoint(Mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),rr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),rr.copy(n.boundingBox)),rr.applyMatrix4(t.matrixWorld),this.union(rr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mn),Mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(xs),or.subVectors(this.max,xs),Gi.subVectors(t.a,xs),Vi.subVectors(t.b,xs),Wi.subVectors(t.c,xs),oi.subVectors(Vi,Gi),ai.subVectors(Wi,Vi),mi.subVectors(Gi,Wi);let e=[0,-oi.z,oi.y,0,-ai.z,ai.y,0,-mi.z,mi.y,oi.z,0,-oi.x,ai.z,0,-ai.x,mi.z,0,-mi.x,-oi.y,oi.x,0,-ai.y,ai.x,0,-mi.y,mi.x,0];return!Ao(e,Gi,Vi,Wi,or)||(e=[1,0,0,0,1,0,0,0,1],!Ao(e,Gi,Vi,Wi,or))?!1:(ar.crossVectors(oi,ai),e=[ar.x,ar.y,ar.z],Ao(e,Gi,Vi,Wi,or))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Vn=[new U,new U,new U,new U,new U,new U,new U,new U],Mn=new U,rr=new Ii,Gi=new U,Vi=new U,Wi=new U,oi=new U,ai=new U,mi=new U,xs=new U,or=new U,ar=new U,gi=new U;function Ao(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){gi.fromArray(i,r);const a=s.x*Math.abs(gi.x)+s.y*Math.abs(gi.y)+s.z*Math.abs(gi.z),l=t.dot(gi),c=e.dot(gi),h=n.dot(gi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Ie=new U,lr=new vt;let Gf=0;class be extends di{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=af,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)lr.fromBufferAttribute(this,e),lr.applyMatrix3(t),this.setXY(e,lr.x,lr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=es(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=$e(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=es(e,this.array)),e}setX(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=es(e,this.array)),e}setY(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=es(e,this.array)),e}setZ(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=es(e,this.array)),e}setW(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array),s=$e(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array),s=$e(s,this.array),r=$e(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class Bh extends be{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class zh extends be{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ge extends be{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Vf=new Ii,vs=new U,Ro=new U;class ds{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Vf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;vs.subVectors(t,this.center);const e=vs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(vs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ro.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(vs.copy(t.center).add(Ro)),this.expandByPoint(vs.copy(t.center).sub(Ro))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Wf=0;const cn=new he,Co=new He,Xi=new U,on=new Ii,Ms=new Ii,Be=new U;class Ne extends di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=Di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(lf(t)?zh:Bh)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Gt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return cn.makeRotationFromQuaternion(t),this.applyMatrix4(cn),this}rotateX(t){return cn.makeRotationX(t),this.applyMatrix4(cn),this}rotateY(t){return cn.makeRotationY(t),this.applyMatrix4(cn),this}rotateZ(t){return cn.makeRotationZ(t),this.applyMatrix4(cn),this}translate(t,e,n){return cn.makeTranslation(t,e,n),this.applyMatrix4(cn),this}scale(t,e,n){return cn.makeScale(t,e,n),this.applyMatrix4(cn),this}lookAt(t){return Co.lookAt(t),Co.updateMatrix(),this.applyMatrix4(Co.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xi).negate(),this.translate(Xi.x,Xi.y,Xi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ge(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ii);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];on.setFromBufferAttribute(r),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ds);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(on.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ms.setFromBufferAttribute(a),this.morphTargetsRelative?(Be.addVectors(on.min,Ms.min),on.expandByPoint(Be),Be.addVectors(on.max,Ms.max),on.expandByPoint(Be)):(on.expandByPoint(Ms.min),on.expandByPoint(Ms.max))}on.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Be.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Be));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Be.fromBufferAttribute(a,c),l&&(Xi.fromBufferAttribute(t,c),Be.add(Xi)),s=Math.max(s,n.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new be(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let v=0;v<n.count;v++)a[v]=new U,l[v]=new U;const c=new U,h=new U,d=new U,u=new vt,f=new vt,g=new vt,x=new U,m=new U;function p(v,M,T){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,M),d.fromBufferAttribute(n,T),u.fromBufferAttribute(r,v),f.fromBufferAttribute(r,M),g.fromBufferAttribute(r,T),h.sub(c),d.sub(c),f.sub(u),g.sub(u);const A=1/(f.x*g.y-g.x*f.y);isFinite(A)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(A),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(A),a[v].add(x),a[M].add(x),a[T].add(x),l[v].add(m),l[M].add(m),l[T].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let v=0,M=S.length;v<M;++v){const T=S[v],A=T.start,P=T.count;for(let D=A,N=A+P;D<N;D+=3)p(t.getX(D+0),t.getX(D+1),t.getX(D+2))}const R=new U,y=new U,w=new U,b=new U;function L(v){w.fromBufferAttribute(s,v),b.copy(w);const M=a[v];R.copy(M),R.sub(w.multiplyScalar(w.dot(M))).normalize(),y.crossVectors(b,M);const A=y.dot(l[v])<0?-1:1;o.setXYZW(v,R.x,R.y,R.z,A)}for(let v=0,M=S.length;v<M;++v){const T=S[v],A=T.start,P=T.count;for(let D=A,N=A+P;D<N;D+=3)L(t.getX(D+0)),L(t.getX(D+1)),L(t.getX(D+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const s=new U,r=new U,o=new U,a=new U,l=new U,c=new U,h=new U,d=new U;if(t)for(let u=0,f=t.count;u<f;u+=3){const g=t.getX(u+0),x=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new be(u,h,d)}if(this.index===null)return zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ne,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Po=new U,Xf=new U,Yf=new Gt;class Yn{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Po.subVectors(n,e).cross(Xf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const s=t.delta(Po),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Yf.getNormalMatrix(t),s=this.coplanarPoint(Po).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let qf=0;class ps extends di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=Di(),this.name="",this.type="Material",this.blending=Cs,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xh,this.blendDst=vh,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=Fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ju,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=uo,this.stencilZFail=uo,this.stencilZPass=uo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){zt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Lt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Yn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new vt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new vt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Wn=new U,Lo=new U,cr=new U,hr=new U;class ol{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Wn.copy(this.origin).addScaledVector(this.direction,e),Wn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Lo.copy(t).add(e).multiplyScalar(.5),cr.copy(e).sub(t).normalize(),hr.copy(this.origin).sub(Lo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(cr),a=hr.dot(this.direction),l=-hr.dot(cr),c=hr.lengthSq(),h=Math.abs(1-o*o);let d,u,f,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){const x=1/h;d*=x,u*=x,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Lo).addScaledVector(cr,u),f}intersectSphere(t,e){if(t.radius<0)return null;Wn.subVectors(t.center,this.origin);const n=Wn.dot(this.direction),s=Wn.dot(Wn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Wn)!==null}intersectTriangle(t,e,n,s,r){const o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,g=e.x-o.x,x=e.y-o.y,m=e.z-o.z,p=n.x-o.x,S=n.y-o.y,R=n.z-o.z,y=Math.abs(l),w=Math.abs(c),b=Math.abs(h);let L,v,M,T,A,P,D,N,z,q,W,tt;if(y>=w&&y>=b?(M=l,P=d,z=g,tt=p,l>=0?(L=c,v=h,T=u,A=f,D=x,N=m,q=S,W=R):(L=h,v=c,T=f,A=u,D=m,N=x,q=R,W=S)):w>=b?(M=c,P=u,z=x,tt=S,c>=0?(L=h,v=l,T=f,A=d,D=m,N=g,q=R,W=p):(L=l,v=h,T=d,A=f,D=g,N=m,q=p,W=R)):(M=h,P=f,z=m,tt=R,h>=0?(L=l,v=c,T=d,A=u,D=g,N=x,q=p,W=S):(L=c,v=l,T=u,A=d,D=x,N=g,q=S,W=p)),M===0)return null;const Y=L/M,j=v/M,it=1/M,Rt=T-Y*P,bt=A-j*P,ae=D-Y*z,qt=N-j*z,ne=q-Y*tt,K=W-j*tt,st=ne*qt-K*ae,wt=Rt*K-bt*ne,Ht=ae*bt-qt*Rt;if(s){if(st<0||wt<0||Ht<0)return null}else if((st<0||wt<0||Ht<0)&&(st>0||wt>0||Ht>0))return null;const Et=st+wt+Ht;if(Et===0)return null;const Xt=it*(st*P+wt*z+Ht*tt);return(Et>0?Xt<0:Xt>0)?null:this.at(Xt/Et,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class al extends ps{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=Mh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const tc=new he,_i=new ol,ur=new ds,ec=new U,fr=new U,dr=new U,pr=new U,Do=new U,mr=new U,nc=new U,gr=new U;class Qt extends He{constructor(t=new Ne,e=new al){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){mr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(Do.fromBufferAttribute(d,t),o?mr.addScaledVector(Do,h):mr.addScaledVector(Do.sub(e),h))}e.add(mr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere),ur.applyMatrix4(r),_i.copy(t.ray).recast(t.near),!(ur.containsPoint(_i.origin)===!1&&(_i.intersectSphere(ur,ec)===null||_i.origin.distanceToSquared(ec)>(t.far-t.near)**2))&&(tc.copy(r).invert(),_i.copy(t.ray).applyMatrix4(tc),!(n.boundingBox!==null&&_i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,_i)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){const m=u[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),R=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=S,w=R;y<w;y+=3){const b=a.getX(y),L=a.getX(y+1),v=a.getX(y+2);s=_r(this,p,t,n,c,h,d,b,L,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const S=a.getX(m),R=a.getX(m+1),y=a.getX(m+2);s=_r(this,o,t,n,c,h,d,S,R,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){const m=u[g],p=o[m.materialIndex],S=Math.max(m.start,f.start),R=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=S,w=R;y<w;y+=3){const b=y,L=y+1,v=y+2;s=_r(this,p,t,n,c,h,d,b,L,v),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const S=m,R=m+1,y=m+2;s=_r(this,o,t,n,c,h,d,S,R,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Zf(i,t,e,n,s,r,o,a){let l;if(t.side===tn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Ti,a),l===null)return null;gr.copy(a),gr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(gr);return c<e.near||c>e.far?null:{distance:c,point:gr.clone(),object:i}}function _r(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,fr),i.getVertexPosition(l,dr),i.getVertexPosition(c,pr);const h=Zf(i,t,e,n,fr,dr,pr,nc);if(h){const d=new U;wn.getBarycoord(nc,fr,dr,pr,d),s&&(h.uv=wn.getInterpolatedAttribute(s,a,l,c,d,new vt)),r&&(h.uv1=wn.getInterpolatedAttribute(r,a,l,c,d,new vt)),o&&(h.normal=wn.getInterpolatedAttribute(o,a,l,c,d,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new U,materialIndex:0};wn.getNormal(fr,dr,pr,u.normal),h.face=u,h.barycoord=d}return h}class Hh extends Ke{constructor(t=null,e=1,n=1,s,r,o,a,l,c=Ve,h=Ve,d,u){super(null,o,a,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ic extends be{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Yi=new he,sc=new he,xr=[],rc=new Ii,Kf=new he,Ss=new Qt,ys=new ds;class ll extends Qt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ic(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Kf)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ii),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Yi),rc.copy(t.boundingBox).applyMatrix4(Yi),this.boundingBox.union(rc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ds),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Yi),ys.copy(t.boundingSphere).applyMatrix4(Yi),this.boundingSphere.union(ys)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Ss.geometry=this.geometry,Ss.material=this.material,Ss.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ys.copy(this.boundingSphere),ys.applyMatrix4(n),t.ray.intersectsSphere(ys)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Yi),sc.multiplyMatrices(n,Yi),Ss.matrixWorld=sc,Ss.raycast(t,xr);for(let o=0,a=xr.length;o<a;o++){const l=xr[o];l.instanceId=r,l.object=this,e.push(l)}xr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ic(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Hh(new Float32Array(s*this.count),s,this.count,$a,Tn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const xi=new ds,Jf=new vt(.5,.5),vr=new U;class cl{constructor(t=new Yn,e=new Yn,n=new Yn,s=new Yn,r=new Yn,o=new Yn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Un,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],x=r[9],m=r[10],p=r[11],S=r[12],R=r[13],y=r[14],w=r[15];if(s[0].setComponents(c-o,f-h,p-g,w-S).normalize(),s[1].setComponents(c+o,f+h,p+g,w+S).normalize(),s[2].setComponents(c+a,f+d,p+x,w+R).normalize(),s[3].setComponents(c-a,f-d,p-x,w-R).normalize(),n)s[4].setComponents(l,u,m,y).normalize(),s[5].setComponents(c-l,f-u,p-m,w-y).normalize();else if(s[4].setComponents(c-l,f-u,p-m,w-y).normalize(),e===Un)s[5].setComponents(c+l,f+u,p+m,w+y).normalize();else if(e===zs)s[5].setComponents(l,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(t){xi.center.set(0,0,0);const e=Jf.distanceTo(t.center);return xi.radius=.7071067811865476+e,xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(vr.x=s.normal.x>0?t.max.x:t.min.x,vr.y=s.normal.y>0?t.max.y:t.min.y,vr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(vr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class kh extends ps{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const oc=new he,za=new ol,Mr=new ds,Sr=new U;class $f extends He{constructor(t=new Ne,e=new kh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Mr.copy(n.boundingSphere),Mr.applyMatrix4(s),Mr.radius+=r,t.ray.intersectsSphere(Mr)===!1)return;oc.copy(s).invert(),za.copy(t.ray).applyMatrix4(oc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=u,x=f;g<x;g++){const m=c.getX(g);Sr.fromBufferAttribute(d,m),ac(Sr,m,l,s,t,e,this)}}else{const u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=u,x=f;g<x;g++)Sr.fromBufferAttribute(d,g),ac(Sr,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ac(i,t,e,n,s,r,o){const a=za.distanceSqToPoint(i);if(a<e){const l=new U;za.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Gh extends Ke{constructor(t=[],e=Ai,n,s,r,o,a,l,c,h){super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Qf extends Ke{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ks extends Ke{constructor(t,e,n=On,s,r,o,a=Ve,l=Ve,c,h=Qn,d=1){if(h!==Qn&&h!==bi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:d};super(u,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new sl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class jf extends ks{constructor(t,e=On,n=Ai,s,r,o=Ve,a=Ve,l,c=Qn){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Vh extends Ke{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class ms extends Ne{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ge(c,3)),this.setAttribute("normal",new ge(h,3)),this.setAttribute("uv",new ge(d,2));function g(x,m,p,S,R,y,w,b,L,v,M){const T=y/L,A=w/v,P=y/2,D=w/2,N=b/2,z=L+1,q=v+1;let W=0,tt=0;const Y=new U;for(let j=0;j<q;j++){const it=j*A-D;for(let Rt=0;Rt<z;Rt++){const bt=Rt*T-P;Y[x]=bt*S,Y[m]=it*R,Y[p]=N,c.push(Y.x,Y.y,Y.z),Y[x]=0,Y[m]=0,Y[p]=b>0?1:-1,h.push(Y.x,Y.y,Y.z),d.push(Rt/L),d.push(1-j/v),W+=1}}for(let j=0;j<v;j++)for(let it=0;it<L;it++){const Rt=u+it+z*j,bt=u+it+z*(j+1),ae=u+(it+1)+z*(j+1),qt=u+(it+1)+z*j;l.push(Rt,bt,qt),l.push(bt,ae,qt),tt+=6}a.addGroup(f,tt,M),f+=tt,u+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ms(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Qr extends Ne{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],u=[],f=[];let g=0;const x=[],m=n/2;let p=0;S(),o===!1&&(t>0&&R(!0),e>0&&R(!1)),this.setIndex(h),this.setAttribute("position",new ge(d,3)),this.setAttribute("normal",new ge(u,3)),this.setAttribute("uv",new ge(f,2));function S(){const y=new U,w=new U;let b=0;const L=(e-t)/n;for(let v=0;v<=r;v++){const M=[],T=v/r,A=T*(e-t)+t;for(let P=0;P<=s;P++){const D=P/s,N=D*l+a,z=Math.sin(N),q=Math.cos(N);w.x=A*z,w.y=-T*n+m,w.z=A*q,d.push(w.x,w.y,w.z),y.set(z,L,q).normalize(),u.push(y.x,y.y,y.z),f.push(D,1-T),M.push(g++)}x.push(M)}for(let v=0;v<s;v++)for(let M=0;M<r;M++){const T=x[M][v],A=x[M+1][v],P=x[M+1][v+1],D=x[M][v+1];(t>0||M!==0)&&(h.push(T,A,D),b+=3),(e>0||M!==r-1)&&(h.push(A,P,D),b+=3)}c.addGroup(p,b,0),p+=b}function R(y){const w=g,b=new vt,L=new U;let v=0;const M=y===!0?t:e,T=y===!0?1:-1;for(let P=1;P<=s;P++)d.push(0,m*T,0),u.push(0,T,0),f.push(.5,.5),g++;const A=g;for(let P=0;P<=s;P++){const N=P/s*l+a,z=Math.cos(N),q=Math.sin(N);L.x=M*q,L.y=m*T,L.z=M*z,d.push(L.x,L.y,L.z),u.push(0,T,0),b.x=z*.5+.5,b.y=q*.5*T+.5,f.push(b.x,b.y),g++}for(let P=0;P<s;P++){const D=w+P,N=A+P;y===!0?h.push(N,N+1,D):h.push(N+1,N,D),v+=3}c.addGroup(p,v,y===!0?1:2),p+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qr(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class hl extends Qr{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new hl(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class zn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){zt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new vt:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new U,s=[],r=[],o=[],a=new U,l=new he;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new U)}r[0]=new U,o[0]=new U;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos($t(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos($t(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ul extends zn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new vt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class td extends ul{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function fl(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const lc=new U,cc=new U,Io=new fl,No=new fl,Uo=new fl;class Wh extends zn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new U){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(cc.subVectors(s[0],s[1]).add(s[0]),c=cc);const d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(lc.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=lc),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Io.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,x,m),No.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,x,m),Uo.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Io.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),No.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Uo.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Io.calc(l),No.calc(l),Uo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function hc(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function ed(i,t){const e=1-i;return e*e*t}function nd(i,t){return 2*(1-i)*i*t}function id(i,t){return i*i*t}function Ds(i,t,e,n){return ed(i,t)+nd(i,e)+id(i,n)}function sd(i,t){const e=1-i;return e*e*e*t}function rd(i,t){const e=1-i;return 3*e*e*i*t}function od(i,t){return 3*(1-i)*i*i*t}function ad(i,t){return i*i*i*t}function Is(i,t,e,n,s){return sd(i,t)+rd(i,e)+od(i,n)+ad(i,s)}class Xh extends zn{constructor(t=new vt,e=new vt,n=new vt,s=new vt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new vt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Is(t,s.x,r.x,o.x,a.x),Is(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ld extends zn{constructor(t=new U,e=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new U){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Is(t,s.x,r.x,o.x,a.x),Is(t,s.y,r.y,o.y,a.y),Is(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Yh extends zn{constructor(t=new vt,e=new vt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new vt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new vt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class cd extends zn{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class qh extends zn{constructor(t=new vt,e=new vt,n=new vt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new vt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ds(t,s.x,r.x,o.x),Ds(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hd extends zn{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Ds(t,s.x,r.x,o.x),Ds(t,s.y,r.y,o.y),Ds(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Zh extends zn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new vt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(hc(a,l.x,c.x,h.x,d.x),hc(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new vt().fromArray(s))}return this}}var uc=Object.freeze({__proto__:null,ArcCurve:td,CatmullRomCurve3:Wh,CubicBezierCurve:Xh,CubicBezierCurve3:ld,EllipseCurve:ul,LineCurve:Yh,LineCurve3:cd,QuadraticBezierCurve:qh,QuadraticBezierCurve3:hd,SplineCurve:Zh});class ud extends zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new uc[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new uc[s.type]().fromJSON(s))}return this}}class fc extends ud{constructor(t){super(),this.type="Path",this.currentPoint=new vt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Yh(this.currentPoint.clone(),new vt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new qh(this.currentPoint.clone(),new vt(t,e),new vt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Xh(this.currentPoint.clone(),new vt(t,e),new vt(n,s),new vt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Zh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const c=new ul(t,e,n,s,r,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Kh extends fc{constructor(t){super(t),this.uuid=Di(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new fc().fromJSON(s))}return this}}function fd(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Jh(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=_d(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let h=a,d=l;for(let u=e;u<s;u+=e){const f=i[u],g=i[u+1];f<a&&(a=f),g<l&&(l=g),f>h&&(h=f),g>d&&(d=g)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return Gs(r,o,e,a,l,c,0),o}function Jh(i,t,e,n,s){let r;if(s===Rd(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=dc(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=dc(o/n|0,i[o],i[o+1],r);return r&&us(r,r.next)&&(Ws(r),r=r.next),r}function Ci(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(us(e,e.next)||Re(e.prev,e,e.next)===0)){if(Ws(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Gs(i,t,e,n,s,r,o){if(!i)return;!o&&r&&yd(i,n,s,r);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(r?pd(i,n,s,r):dd(i)){t.push(l.i,i.i,c.i),Ws(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=md(Ci(i),t),Gs(i,t,e,n,s,r,2)):o===2&&gd(i,t,e,n,s,r):Gs(Ci(i),t,e,n,s,r,1);break}}}function dd(i){const t=i.prev,e=i,n=i.next;if(Re(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(s,r,o),d=Math.min(a,l,c),u=Math.max(s,r,o),f=Math.max(a,l,c);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&As(s,a,r,l,o,c,g.x,g.y)&&Re(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function pd(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Re(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,h=s.y,d=r.y,u=o.y,f=Math.min(a,l,c),g=Math.min(h,d,u),x=Math.max(a,l,c),m=Math.max(h,d,u),p=Ha(f,g,t,e,n),S=Ha(x,m,t,e,n);let R=i.prevZ,y=i.nextZ;for(;R&&R.z>=p&&y&&y.z<=S;){if(R.x>=f&&R.x<=x&&R.y>=g&&R.y<=m&&R!==s&&R!==o&&As(a,h,l,d,c,u,R.x,R.y)&&Re(R.prev,R,R.next)>=0||(R=R.prevZ,y.x>=f&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&As(a,h,l,d,c,u,y.x,y.y)&&Re(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;R&&R.z>=p;){if(R.x>=f&&R.x<=x&&R.y>=g&&R.y<=m&&R!==s&&R!==o&&As(a,h,l,d,c,u,R.x,R.y)&&Re(R.prev,R,R.next)>=0)return!1;R=R.prevZ}for(;y&&y.z<=S;){if(y.x>=f&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&As(a,h,l,d,c,u,y.x,y.y)&&Re(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function md(i,t){let e=i;do{const n=e.prev,s=e.next.next;!us(n,s)&&Qh(n,e,e.next,s)&&Vs(n,s)&&Vs(s,n)&&(t.push(n.i,e.i,s.i),Ws(e),Ws(e.next),e=i=s),e=e.next}while(e!==i);return Ci(e)}function gd(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&wd(o,a)){let l=jh(o,a);o=Ci(o,o.next),l=Ci(l,l.next),Gs(o,t,e,n,s,r,0),Gs(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function _d(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Jh(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(bd(c))}s.sort(xd);for(let r=0;r<s.length;r++)e=vd(s[r],e);return e}function xd(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function vd(i,t){const e=Md(i,t);if(!e)return t;const n=jh(e,i);return Ci(n,n.next),Ci(e,e.next)}function Md(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(us(i,e))return e;do{if(us(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&$h(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){const d=Math.abs(s-e.y)/(n-e.x);Vs(e,i)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&Sd(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function Sd(i,t){return Re(i.prev,i,t.prev)<0&&Re(t.next,i,i.next)<0}function yd(i,t,e,n){let s=i;do s.z===0&&(s.z=Ha(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Ed(s)}function Ed(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function Ha(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function bd(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function $h(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function As(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&$h(i,t,e,n,s,r,o,a)}function wd(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Td(i,t)&&(Vs(i,t)&&Vs(t,i)&&Ad(i,t)&&(Re(i.prev,i,t.prev)||Re(i,t.prev,t))||us(i,t)&&Re(i.prev,i,i.next)>0&&Re(t.prev,t,t.next)>0)}function Re(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function us(i,t){return i.x===t.x&&i.y===t.y}function Qh(i,t,e,n){const s=Er(Re(i,t,e)),r=Er(Re(i,t,n)),o=Er(Re(e,n,i)),a=Er(Re(e,n,t));return!!(s!==r&&o!==a||s===0&&yr(i,e,t)||r===0&&yr(i,n,t)||o===0&&yr(e,i,n)||a===0&&yr(e,t,n))}function yr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Er(i){return i>0?1:i<0?-1:0}function Td(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Qh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Vs(i,t){return Re(i.prev,i,i.next)<0?Re(i,t,i.next)>=0&&Re(i,i.prev,t)>=0:Re(i,t,i.prev)<0||Re(i,i.next,t)<0}function Ad(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function jh(i,t){const e=ka(i.i,i.x,i.y),n=ka(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function dc(i,t,e,n){const s=ka(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ws(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ka(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Rd(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Cd{static triangulate(t,e,n=2){return fd(t,e,n)}}class Ns{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Ns.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];pc(t),mc(n,t);let o=t.length;e.forEach(pc);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,mc(n,e[l]);const a=Cd.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function pc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function mc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class jr extends Ne{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,d=t/a,u=e/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){const S=p*u-o;for(let R=0;R<c;R++){const y=R*d-r;g.push(y,-S,0),x.push(0,0,1),m.push(R/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){const R=S+c*p,y=S+c*(p+1),w=S+1+c*(p+1),b=S+1+c*p;f.push(R,y,b),f.push(y,w,b)}this.setIndex(f),this.setAttribute("position",new ge(g,3)),this.setAttribute("normal",new ge(x,3)),this.setAttribute("uv",new ge(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jr(t.width,t.height,t.widthSegments,t.heightSegments)}}class dl extends Ne{constructor(t=new Kh([new vt(0,.5),new vt(-.5,-.5),new vt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ge(s,3)),this.setAttribute("normal",new ge(r,3)),this.setAttribute("uv",new ge(o,2));function c(h){const d=s.length/3,u=h.extractPoints(e);let f=u.shape;const g=u.holes;Ns.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const S=g[m];Ns.isClockWise(S)===!0&&(g[m]=S.reverse())}const x=Ns.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const S=g[m];f=f.concat(S)}for(let m=0,p=f.length;m<p;m++){const S=f[m];s.push(S.x,S.y,0),r.push(0,0,1),o.push(S.x,S.y)}for(let m=0,p=x.length;m<p;m++){const S=x[m],R=S[0]+d,y=S[1]+d,w=S[2]+d;n.push(R,y,w),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Pd(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new dl(n,t.curveSegments)}}function Pd(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class qs extends Ne{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new U,u=new U,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){const S=[],R=p/n,y=o+R*a,w=t*Math.cos(y),b=Math.sqrt(t*t-w*w);let L=0;p===0&&o===0?L=.5/e:p===n&&l===Math.PI&&(L=-.5/e);for(let v=0;v<=e;v++){const M=v/e,T=s+M*r;d.x=-b*Math.cos(T),d.y=w,d.z=b*Math.sin(T),g.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),m.push(M+L,1-R),S.push(c++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){const R=h[p][S+1],y=h[p][S],w=h[p+1][S],b=h[p+1][S+1];(p!==0||o>0)&&f.push(R,y,b),(p!==n-1||l<Math.PI)&&f.push(y,w,b)}this.setIndex(f),this.setAttribute("position",new ge(g,3)),this.setAttribute("normal",new ge(x,3)),this.setAttribute("uv",new ge(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qs(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function fs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];if(gc(s))s.isRenderTargetTexture?(zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(gc(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Qe(i){const t={};for(let e=0;e<i.length;e++){const n=fs(i[e]);for(const s in n)t[s]=n[s]}return t}function gc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Ld(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function tu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}const Dd={clone:fs,merge:Qe};var Id=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cn extends ps{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Id,this.fragmentShader=Nd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=fs(t.uniforms),this.uniformsGroups=Ld(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Lt().setHex(s.value);break;case"v2":this.uniforms[n].value=new vt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new U().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ae().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Gt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new he().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Ud extends Cn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ve extends ps{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ba,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Fd extends ps{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$u,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Od extends ps{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class to extends He{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Bd extends to{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Lt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Fo=new he,_c=new U,xc=new U;class eu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.mapType=an,this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cl,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new Ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;_c.setFromMatrixPosition(t.matrixWorld),e.position.copy(_c),xc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(xc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Fo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Fo,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===zs||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Fo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const br=new U,wr=new mn,Dn=new U;class nu extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=Un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(br,wr,Dn),Dn.x===1&&Dn.y===1&&Dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(br,wr,Dn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(br,wr,Dn),Dn.x===1&&Dn.y===1&&Dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(br,wr,Dn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const li=new U,vc=new vt,Mc=new vt;class un extends nu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Hs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ps*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Hs*2*Math.atan(Math.tan(Ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(li.x,li.y).multiplyScalar(-t/li.z),li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(li.x,li.y).multiplyScalar(-t/li.z)}getViewSize(t,e){return this.getViewBounds(t,vc,Mc),e.subVectors(Mc,vc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ps*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class zd extends eu{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0}}class Hd extends to{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new zd}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class eo extends nu{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class kd extends eu{constructor(){super(new eo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Gd extends to{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.shadow=new kd}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class Vd extends to{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const qi=-90,Zi=1;class Wd extends He{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new un(qi,Zi,t,e);s.layers=this.layers,this.add(s);const r=new un(qi,Zi,t,e);r.layers=this.layers,this.add(r);const o=new un(qi,Zi,t,e);o.layers=this.layers,this.add(o);const a=new un(qi,Zi,t,e);a.layers=this.layers,this.add(a);const l=new un(qi,Zi,t,e);l.layers=this.layers,this.add(l);const c=new un(qi,Zi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Un)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===zs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Xd extends un{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Yd{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,zt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}class Sc{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=$t(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos($t(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const wl=class wl{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};wl.prototype.isMatrix2=!0;let yc=wl;class qd extends di{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Ec(i,t,e,n){const s=Zd(n);switch(e){case Dh:return i*t;case $a:return i*t/s.components*s.byteLength;case Qa:return i*t/s.components*s.byteLength;case Ri:return i*t*2/s.components*s.byteLength;case ja:return i*t*2/s.components*s.byteLength;case Ih:return i*t*3/s.components*s.byteLength;case An:return i*t*4/s.components*s.byteLength;case tl:return i*t*4/s.components*s.byteLength;case Fr:case Or:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Br:case zr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ca:case ua:return Math.max(i,16)*Math.max(t,8)/4;case la:case ha:return Math.max(i,8)*Math.max(t,8)/2;case fa:case da:case ma:case ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case pa:case Vr:case _a:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case va:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ma:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Sa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ya:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ea:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ba:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case wa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ta:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Aa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ra:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ca:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Pa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case La:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Da:case Ia:case Na:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ua:case Fa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Wr:case Oa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Zd(i){switch(i){case an:case Rh:return{byteLength:1,components:1};case Os:case Ch:case Bn:return{byteLength:2,components:1};case Ka:case Ja:return{byteLength:2,components:4};case On:case Za:case Tn:return{byteLength:4,components:1};case Ph:case Lh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ya}}));typeof window<"u"&&(window.__THREE__?zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ya);function iu(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Kd(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],x=d[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const x=d[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Jd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$d=`#ifdef USE_ALPHAHASH
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
#endif`,Qd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ep=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,np=`#ifdef USE_AOMAP
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
#endif`,ip=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sp=`#ifdef USE_BATCHING
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
#endif`,rp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,op=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ap=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cp=`#ifdef USE_IRIDESCENCE
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
#endif`,hp=`#ifdef USE_BUMPMAP
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
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,gp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,_p=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,xp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,vp=`#define PI 3.141592653589793
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
} // validated`,Mp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sp=`vec3 transformedNormal = objectNormal;
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
#endif`,yp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ep=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ap=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rp=`#ifdef USE_ENVMAP
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
#endif`,Cp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Pp=`#ifdef USE_ENVMAP
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
#endif`,Lp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dp=`#ifdef USE_ENVMAP
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
#endif`,Ip=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Np=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Up=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Op=`#ifdef USE_GRADIENTMAP
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
}`,Bp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Gp=`#ifdef USE_ENVMAP
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
#endif`,Vp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qp=`PhysicalMaterial material;
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
#endif`,Zp=`uniform sampler2D dfgLUT;
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
}`,Kp=`
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
#endif`,Jp=`#if defined( RE_IndirectDiffuse )
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
#endif`,$p=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qp=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,jp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,t0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,n0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,i0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,s0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,r0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,o0=`#if defined( USE_POINTS_UV )
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
#endif`,a0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,l0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,c0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,h0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,u0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,f0=`#ifdef USE_MORPHTARGETS
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
#endif`,d0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,m0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,g0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,v0=`#ifdef USE_NORMALMAP
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
#endif`,M0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,S0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,y0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,E0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,b0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,w0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,T0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,A0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,R0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,C0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,P0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,L0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,D0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,I0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,N0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,U0=`float getShadowMask() {
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
}`,F0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,O0=`#ifdef USE_SKINNING
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
#endif`,B0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,z0=`#ifdef USE_SKINNING
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
#endif`,H0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,k0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,G0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,V0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,W0=`#ifdef USE_TRANSMISSION
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
#endif`,X0=`#ifdef USE_TRANSMISSION
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
#endif`,Y0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const J0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$0=`uniform sampler2D t2D;
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
}`,Q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,em=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nm=`#include <common>
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
}`,im=`#if DEPTH_PACKING == 3200
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
}`,sm=`#define DISTANCE
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
}`,rm=`#define DISTANCE
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
}`,om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,am=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lm=`uniform float scale;
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
}`,cm=`uniform vec3 diffuse;
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
}`,hm=`#include <common>
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
}`,um=`uniform vec3 diffuse;
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
}`,fm=`#define LAMBERT
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
}`,dm=`#define LAMBERT
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
}`,pm=`#define MATCAP
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
}`,mm=`#define MATCAP
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
}`,gm=`#define NORMAL
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
}`,_m=`#define NORMAL
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
}`,xm=`#define PHONG
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
}`,vm=`#define PHONG
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
}`,Mm=`#define STANDARD
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
}`,Sm=`#define STANDARD
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
}`,ym=`#define TOON
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
}`,Em=`#define TOON
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
}`,bm=`uniform float size;
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
}`,wm=`uniform vec3 diffuse;
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
}`,Tm=`#include <common>
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
}`,Am=`uniform vec3 color;
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
}`,Rm=`uniform float rotation;
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
}`,Cm=`uniform vec3 diffuse;
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
}`,Jt={alphahash_fragment:Jd,alphahash_pars_fragment:$d,alphamap_fragment:Qd,alphamap_pars_fragment:jd,alphatest_fragment:tp,alphatest_pars_fragment:ep,aomap_fragment:np,aomap_pars_fragment:ip,batching_pars_vertex:sp,batching_vertex:rp,begin_vertex:op,beginnormal_vertex:ap,bsdfs:lp,iridescence_fragment:cp,bumpmap_pars_fragment:hp,clipping_planes_fragment:up,clipping_planes_pars_fragment:fp,clipping_planes_pars_vertex:dp,clipping_planes_vertex:pp,color_fragment:mp,color_pars_fragment:gp,color_pars_vertex:_p,color_vertex:xp,common:vp,cube_uv_reflection_fragment:Mp,defaultnormal_vertex:Sp,displacementmap_pars_vertex:yp,displacementmap_vertex:Ep,emissivemap_fragment:bp,emissivemap_pars_fragment:wp,colorspace_fragment:Tp,colorspace_pars_fragment:Ap,envmap_fragment:Rp,envmap_common_pars_fragment:Cp,envmap_pars_fragment:Pp,envmap_pars_vertex:Lp,envmap_physical_pars_fragment:Gp,envmap_vertex:Dp,fog_vertex:Ip,fog_pars_vertex:Np,fog_fragment:Up,fog_pars_fragment:Fp,gradientmap_pars_fragment:Op,lightmap_pars_fragment:Bp,lights_lambert_fragment:zp,lights_lambert_pars_fragment:Hp,lights_pars_begin:kp,lights_toon_fragment:Vp,lights_toon_pars_fragment:Wp,lights_phong_fragment:Xp,lights_phong_pars_fragment:Yp,lights_physical_fragment:qp,lights_physical_pars_fragment:Zp,lights_fragment_begin:Kp,lights_fragment_maps:Jp,lights_fragment_end:$p,lightprobes_pars_fragment:Qp,logdepthbuf_fragment:jp,logdepthbuf_pars_fragment:t0,logdepthbuf_pars_vertex:e0,logdepthbuf_vertex:n0,map_fragment:i0,map_pars_fragment:s0,map_particle_fragment:r0,map_particle_pars_fragment:o0,metalnessmap_fragment:a0,metalnessmap_pars_fragment:l0,morphinstance_vertex:c0,morphcolor_vertex:h0,morphnormal_vertex:u0,morphtarget_pars_vertex:f0,morphtarget_vertex:d0,normal_fragment_begin:p0,normal_fragment_maps:m0,normal_pars_fragment:g0,normal_pars_vertex:_0,normal_vertex:x0,normalmap_pars_fragment:v0,clearcoat_normal_fragment_begin:M0,clearcoat_normal_fragment_maps:S0,clearcoat_pars_fragment:y0,iridescence_pars_fragment:E0,opaque_fragment:b0,packing:w0,premultiplied_alpha_fragment:T0,project_vertex:A0,dithering_fragment:R0,dithering_pars_fragment:C0,roughnessmap_fragment:P0,roughnessmap_pars_fragment:L0,shadowmap_pars_fragment:D0,shadowmap_pars_vertex:I0,shadowmap_vertex:N0,shadowmask_pars_fragment:U0,skinbase_vertex:F0,skinning_pars_vertex:O0,skinning_vertex:B0,skinnormal_vertex:z0,specularmap_fragment:H0,specularmap_pars_fragment:k0,tonemapping_fragment:G0,tonemapping_pars_fragment:V0,transmission_fragment:W0,transmission_pars_fragment:X0,uv_pars_fragment:Y0,uv_pars_vertex:q0,uv_vertex:Z0,worldpos_vertex:K0,background_vert:J0,background_frag:$0,backgroundCube_vert:Q0,backgroundCube_frag:j0,cube_vert:tm,cube_frag:em,depth_vert:nm,depth_frag:im,distance_vert:sm,distance_frag:rm,equirect_vert:om,equirect_frag:am,linedashed_vert:lm,linedashed_frag:cm,meshbasic_vert:hm,meshbasic_frag:um,meshlambert_vert:fm,meshlambert_frag:dm,meshmatcap_vert:pm,meshmatcap_frag:mm,meshnormal_vert:gm,meshnormal_frag:_m,meshphong_vert:xm,meshphong_frag:vm,meshphysical_vert:Mm,meshphysical_frag:Sm,meshtoon_vert:ym,meshtoon_frag:Em,points_vert:bm,points_frag:wm,shadow_vert:Tm,shadow_frag:Am,sprite_vert:Rm,sprite_frag:Cm},_t={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},Nn={basic:{uniforms:Qe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:Qe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Lt(0)},envMapIntensity:{value:1}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:Qe([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:Qe([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:Qe([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:Qe([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:Qe([_t.points,_t.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:Qe([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:Qe([_t.common,_t.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:Qe([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:Qe([_t.sprite,_t.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distance:{uniforms:Qe([_t.common,_t.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distance_vert,fragmentShader:Jt.distance_frag},shadow:{uniforms:Qe([_t.lights,_t.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};Nn.physical={uniforms:Qe([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};const Tr={r:0,b:0,g:0},Pm=new he,su=new Gt;su.set(-1,0,0,0,1,0,0,0,1);function Lm(i,t,e,n,s,r){const o=new Lt(0);let a=s===!0?0:1,l,c,h=null,d=0,u=null;function f(S){let R=S.isScene===!0?S.background:null;if(R&&R.isTexture){const y=S.backgroundBlurriness>0;R=t.get(R,y)}return R}function g(S){let R=!1;const y=f(S);y===null?m(o,a):y&&y.isColor&&(m(y,1),R=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||R)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(S,R){const y=f(R);y&&(y.isCubeTexture||y.mapping===$r)?(c===void 0&&(c=new Qt(new ms(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:fs(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,b,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Pm.makeRotationFromEuler(R.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(su),c.material.toneMapped=se.getTransfer(y.colorSpace)!==pe,(h!==y||d!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Qt(new jr(2,2),new Cn({name:"BackgroundMaterial",uniforms:fs(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=se.getTransfer(y.colorSpace)!==pe,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,R){S.getRGB(Tr,tu(i)),e.buffers.color.setClear(Tr.r,Tr.g,Tr.b,R,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,R=1){o.set(S),a=R,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,m(o,a)},render:g,addToRenderList:x,dispose:p}}function Dm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,o=!1;function a(A,P,D,N,z){let q=!1;const W=d(A,N,D,P);r!==W&&(r=W,c(r.object)),q=f(A,N,D,z),q&&g(A,N,D,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,y(A,P,D,N),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return i.createVertexArray()}function c(A){return i.bindVertexArray(A)}function h(A){return i.deleteVertexArray(A)}function d(A,P,D,N){const z=N.wireframe===!0;let q=n[P.id];q===void 0&&(q={},n[P.id]=q);const W=A.isInstancedMesh===!0?A.id:0;let tt=q[W];tt===void 0&&(tt={},q[W]=tt);let Y=tt[D.id];Y===void 0&&(Y={},tt[D.id]=Y);let j=Y[z];return j===void 0&&(j=u(l()),Y[z]=j),j}function u(A){const P=[],D=[],N=[];for(let z=0;z<e;z++)P[z]=0,D[z]=0,N[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:D,attributeDivisors:N,object:A,attributes:{},index:null}}function f(A,P,D,N){const z=r.attributes,q=P.attributes;let W=0;const tt=D.getAttributes();for(const Y in tt)if(tt[Y].location>=0){const it=z[Y];let Rt=q[Y];if(Rt===void 0&&(Y==="instanceMatrix"&&A.instanceMatrix&&(Rt=A.instanceMatrix),Y==="instanceColor"&&A.instanceColor&&(Rt=A.instanceColor)),it===void 0||it.attribute!==Rt||Rt&&it.data!==Rt.data)return!0;W++}return r.attributesNum!==W||r.index!==N}function g(A,P,D,N){const z={},q=P.attributes;let W=0;const tt=D.getAttributes();for(const Y in tt)if(tt[Y].location>=0){let it=q[Y];it===void 0&&(Y==="instanceMatrix"&&A.instanceMatrix&&(it=A.instanceMatrix),Y==="instanceColor"&&A.instanceColor&&(it=A.instanceColor));const Rt={};Rt.attribute=it,it&&it.data&&(Rt.data=it.data),z[Y]=Rt,W++}r.attributes=z,r.attributesNum=W,r.index=N}function x(){const A=r.newAttributes;for(let P=0,D=A.length;P<D;P++)A[P]=0}function m(A){p(A,0)}function p(A,P){const D=r.newAttributes,N=r.enabledAttributes,z=r.attributeDivisors;D[A]=1,N[A]===0&&(i.enableVertexAttribArray(A),N[A]=1),z[A]!==P&&(i.vertexAttribDivisor(A,P),z[A]=P)}function S(){const A=r.newAttributes,P=r.enabledAttributes;for(let D=0,N=P.length;D<N;D++)P[D]!==A[D]&&(i.disableVertexAttribArray(D),P[D]=0)}function R(A,P,D,N,z,q,W){W===!0?i.vertexAttribIPointer(A,P,D,z,q):i.vertexAttribPointer(A,P,D,N,z,q)}function y(A,P,D,N){x();const z=N.attributes,q=D.getAttributes(),W=P.defaultAttributeValues;for(const tt in q){const Y=q[tt];if(Y.location>=0){let j=z[tt];if(j===void 0&&(tt==="instanceMatrix"&&A.instanceMatrix&&(j=A.instanceMatrix),tt==="instanceColor"&&A.instanceColor&&(j=A.instanceColor)),j!==void 0){const it=j.normalized,Rt=j.itemSize,bt=t.get(j);if(bt===void 0)continue;const ae=bt.buffer,qt=bt.type,ne=bt.bytesPerElement,K=qt===i.INT||qt===i.UNSIGNED_INT||j.gpuType===Za;if(j.isInterleavedBufferAttribute){const st=j.data,wt=st.stride,Ht=j.offset;if(st.isInstancedInterleavedBuffer){for(let Et=0;Et<Y.locationSize;Et++)p(Y.location+Et,st.meshPerAttribute);A.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Et=0;Et<Y.locationSize;Et++)m(Y.location+Et);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let Et=0;Et<Y.locationSize;Et++)R(Y.location+Et,Rt/Y.locationSize,qt,it,wt*ne,(Ht+Rt/Y.locationSize*Et)*ne,K)}else{if(j.isInstancedBufferAttribute){for(let st=0;st<Y.locationSize;st++)p(Y.location+st,j.meshPerAttribute);A.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let st=0;st<Y.locationSize;st++)m(Y.location+st);i.bindBuffer(i.ARRAY_BUFFER,ae);for(let st=0;st<Y.locationSize;st++)R(Y.location+st,Rt/Y.locationSize,qt,it,Rt*ne,Rt/Y.locationSize*st*ne,K)}}else if(W!==void 0){const it=W[tt];if(it!==void 0)switch(it.length){case 2:i.vertexAttrib2fv(Y.location,it);break;case 3:i.vertexAttrib3fv(Y.location,it);break;case 4:i.vertexAttrib4fv(Y.location,it);break;default:i.vertexAttrib1fv(Y.location,it)}}}}S()}function w(){M();for(const A in n){const P=n[A];for(const D in P){const N=P[D];for(const z in N){const q=N[z];for(const W in q)h(q[W].object),delete q[W];delete N[z]}}delete n[A]}}function b(A){if(n[A.id]===void 0)return;const P=n[A.id];for(const D in P){const N=P[D];for(const z in N){const q=N[z];for(const W in q)h(q[W].object),delete q[W];delete N[z]}}delete n[A.id]}function L(A){for(const P in n){const D=n[P];for(const N in D){const z=D[N];if(z[A.id]===void 0)continue;const q=z[A.id];for(const W in q)h(q[W].object),delete q[W];delete z[A.id]}}}function v(A){for(const P in n){const D=n[P],N=A.isInstancedMesh===!0?A.id:0,z=D[N];if(z!==void 0){for(const q in z){const W=z[q];for(const tt in W)h(W[tt].object),delete W[tt];delete z[q]}delete D[N],Object.keys(D).length===0&&delete n[P]}}}function M(){T(),o=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:M,resetDefaultState:T,dispose:w,releaseStatesOfGeometry:b,releaseStatesOfObject:v,releaseStatesOfProgram:L,initAttributes:x,enableAttribute:m,disableUnusedAttributes:S}}function Im(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Nm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==An&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const v=L===Bn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==an&&L!==Tn&&!v&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(zt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:R,maxFragmentUniforms:y,maxSamples:w,samples:b}}function Um(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Yn,a=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const S=r?0:n,R=S*4;let y=p.clippingState||null;l.value=y,y=h(g,u,R,f);for(let w=0;w!==R;++w)y[w]=e[w];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const p=f+x*4,S=u.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let R=0,y=f;R!==x;++R,y+=4)o.copy(d[R]).applyMatrix4(S,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}const is=4,Fm=6,Om=20,Bm=256,Es=new eo,bc=new Lt;let Oo=null,Bo=0,zo=0,Ho=!1;const zm=new U,vi=new U;class wc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=zm}=r;Oo=this._renderer.getRenderTarget(),Bo=this._renderer.getActiveCubeFace(),zo=this._renderer.getActiveMipmapLevel(),Ho=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ac(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Oo,Bo,zo),this._renderer.xr.enabled=Ho,t.scissorTest=!1,Ki(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ai||t.mapping===hs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Oo=this._renderer.getRenderTarget(),Bo=this._renderer.getActiveCubeFace(),zo=this._renderer.getActiveMipmapLevel(),Ho=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ze,minFilter:Ze,generateMipmaps:!1,type:Bn,format:An,colorSpace:Xr,depthBuffer:!1},s=Tc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tc(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Hm(r)),this._blurMaterial=Gm(r,t,e),this._ggxMaterial=km(r,t,e)}return s}_compileMaterial(t){const e=new Qt(new Ne,t);this._renderer.compile(e,Es)}_sceneToCubeUV(t,e,n,s,r){const l=new un(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(bc),d.toneMapping=Fn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Qt(new ms,new al({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let p=!1;const S=t.background;S?S.isColor&&(m.color.copy(S),t.background=null,p=!0):(m.color.copy(bc),p=!0);for(let R=0;R<6;R++){const y=R%3;y===0?(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[R],r.y,r.z)):y===1?(l.up.set(0,0,c[R]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[R],r.z)):(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[R]));const w=this._cubeSize;Ki(s,y*w,R>2?w:0,w,w),d.setRenderTarget(s),p&&d.render(x,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=S}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ai||t.mapping===hs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ac());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Ki(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Es)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:g}=this,x=this._sizeLods[n],m=3*x*(n>g-is?n-g+is:0),p=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,Ki(r,m,p,3*x,2*x),s.setRenderTarget(r),s.render(a,Es),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Ki(t,m,p,3*x,2*x),s.setRenderTarget(t),s.render(a,Es)}_blur(t,e,n,s){const r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){const o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;const c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;const h=this._sizeLods[s],d=3*h*(s>this._lodMax-is?s-this._lodMax+is:0),u=4*(this._cubeSize-h);Ki(e,d,u,3*h,2*h),o.setRenderTarget(e),o.render(l,Es)}}function Hm(i){const t=[],e=[];let n=i;const s=i-is+1+Fm;for(let r=0;r<s;r++){const o=Math.pow(2,n);t.push(o);const a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,g=new Float32Array(f*u*d),x=new Float32Array(f*u*d);for(let p=0;p<d;p++){const S=p%3*2/3-1,R=p>2?0:-1,y=[S,R,0,S+2/3,R,0,S+2/3,R+1,0,S,R,0,S+2/3,R+1,0,S,R+1,0];g.set(y,f*u*p);for(let w=0;w<u;w++){const b=h[w*2]*2-1,L=h[w*2+1]*2-1;p===0?vi.set(1,L,b):p===1?vi.set(-b,1,-L):p===2?vi.set(-b,L,1):p===3?vi.set(-1,L,-b):p===4?vi.set(-b,-1,L):vi.set(b,L,-1),vi.toArray(x,(p*u+w)*f)}}const m=new Ne;m.setAttribute("position",new be(g,f)),m.setAttribute("outputDirection",new be(x,f)),e.push(new Qt(m,null)),n>is&&n--}return{lodMeshes:e,sizeLods:t}}function Tc(i,t,e){const n=new Rn(i,t,e);return n.texture.mapping=$r,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ki(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function km(i,t,e){return new Cn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Bm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:no(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Gm(i,t,e){return new Cn({name:"SphericalGaussianBlur",defines:{SAMPLES:Om,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:no(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Ac(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:no(),fragmentShader:`

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
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Rc(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:no(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function no(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class ru extends Rn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Gh(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ms(5,5,5),r=new Cn({name:"CubemapFromEquirect",uniforms:fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:Jn});r.uniforms.tEquirect.value=e;const o=new Qt(s,r),a=e.minFilter;return e.minFilter===Ei&&(e.minFilter=Ze),new Wd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}function Vm(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===lo||f===co)if(t.has(u)){const g=t.get(u).texture;return a(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const x=new ru(g.height);return x.fromEquirectangularTexture(i,u),t.set(u,x),u.addEventListener("dispose",c),a(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){const f=u.mapping,g=f===lo||f===co,x=f===Ai||f===hs;if(g||x){let m=e.get(u);const p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new wc(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{const S=u.image;return g&&S&&S.height>0||x&&S&&l(S)?(n===null&&(n=new wc(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===lo?u.mapping=Ai:f===co&&(u.mapping=hs),u}function l(u){let f=0;const g=6;for(let x=0;x<g;x++)u[x]!==void 0&&f++;return f===g}function c(u){const f=u.target;f.removeEventListener("dispose",c);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Wm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&rs("WebGLRenderer: "+n+" extension not supported."),s}}}function Xm(i,t,e,n){const s={},r=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete s[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const f in u)t.update(u[f],i.ARRAY_BUFFER)}function c(d){const u=[],f=d.index,g=d.attributes.position;let x=0;if(g===void 0)return;if(f!==null){const S=f.array;x=f.version;for(let R=0,y=S.length;R<y;R+=3){const w=S[R+0],b=S[R+1],L=S[R+2];u.push(w,b,b,L,L,w)}}else{const S=g.array;x=g.version;for(let R=0,y=S.length/3-1;R<y;R+=3){const w=R+0,b=R+1,L=R+2;u.push(w,b,b,L,L,w)}}const m=new(g.count>=65535?zh:Bh)(u,1);m.version=x;const p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Ym(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*o),e.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*o,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let x=0;for(let m=0;m<f;m++)x+=u[m];e.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function qm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:le("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Zm(i,t,e){const n=new WeakMap,s=new Ae;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let T=function(){v.dispose(),n.delete(a),a.removeEventListener("dispose",T)};var f=T;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],R=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),x===!0&&(y=2),m===!0&&(y=3);let w=a.attributes.position.count*y,b=1;w>t.maxTextureSize&&(b=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const L=new Float32Array(w*b*4*d),v=new Uh(L,w,b,d);v.type=Tn,v.needsUpdate=!0;const M=y*4;for(let A=0;A<d;A++){const P=p[A],D=S[A],N=R[A],z=w*b*4*A;for(let q=0;q<P.count;q++){const W=q*M;g===!0&&(s.fromBufferAttribute(P,q),L[z+W+0]=s.x,L[z+W+1]=s.y,L[z+W+2]=s.z,L[z+W+3]=0),x===!0&&(s.fromBufferAttribute(D,q),L[z+W+4]=s.x,L[z+W+5]=s.y,L[z+W+6]=s.z,L[z+W+7]=0),m===!0&&(s.fromBufferAttribute(N,q),L[z+W+8]=s.x,L[z+W+9]=s.y,L[z+W+10]=s.z,L[z+W+11]=N.itemSize===4?s.w:1)}}u={count:d,texture:v,size:new vt(w,b)},n.set(a,u),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Km(i,t,e,n,s){let r=new WeakMap;function o(c){const h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}const Jm={[Sh]:"LINEAR_TONE_MAPPING",[yh]:"REINHARD_TONE_MAPPING",[Eh]:"CINEON_TONE_MAPPING",[bh]:"ACES_FILMIC_TONE_MAPPING",[Th]:"AGX_TONE_MAPPING",[qa]:"NEUTRAL_TONE_MAPPING",[wh]:"CUSTOM_TONE_MAPPING"};function $m(i,t,e,n,s,r){const o=new Rn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null;const c=new Ne;c.setAttribute("position",new ge([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ge([0,2,0,0,2,0],2));const h=new Ud({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Qt(c,h),u=new eo(-1,1,1,-1,0,1);let f=null,g=null,x=!1,m,p=null,S=[],R=!1;this.setSize=function(y,w){o.setSize(y,w),a!==null&&a.setSize(y,w),l!==null&&l.setSize(y,w);for(let b=0;b<S.length;b++){const L=S[b];L.setSize&&L.setSize(y,w)}},this.setEffects=function(y){S=y,R=S.length>0&&S[0].isRenderPass===!0;const w=o.width,b=o.height;S.length>0&&a===null&&(a=new Rn(w,b,{type:Bn,depthBuffer:!1,stencilBuffer:!1}),l=new Rn(w,b,{type:Bn,depthBuffer:!1,stencilBuffer:!1}));for(let L=0;L<S.length;L++){const v=S[L];v.setSize&&v.setSize(w,b)}},this.begin=function(y,w){if(x||y.toneMapping===Fn&&S.length===0)return!1;if(p=w,w!==null){const b=w.width,L=w.height;(o.width!==b||o.height!==L)&&this.setSize(b,L)}return R===!1&&y.setRenderTarget(o),m=y.toneMapping,y.toneMapping=Fn,!0},this.hasRenderPass=function(){return R},this.end=function(y,w){y.toneMapping=m,x=!0;let b=o,L=a;for(let v=0;v<S.length;v++){const M=S[v];M.enabled!==!1&&(M.render(y,L,b,w),M.needsSwap!==!1&&(b=L,L=L===a?l:a))}if(f!==y.outputColorSpace||g!==y.toneMapping){f=y.outputColorSpace,g=y.toneMapping,h.defines={},se.getTransfer(f)===pe&&(h.defines.SRGB_TRANSFER="");const v=Jm[g];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(p),y.render(d,u),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const ou=new Ke,Ga=new ks(1,1),au=new Uh,lu=new If,cu=new Gh,Cc=[],Pc=[],Lc=new Float32Array(16),Dc=new Float32Array(9),Ic=new Float32Array(4);function gs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Cc[s];if(r===void 0&&(r=new Float32Array(s),Cc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Oe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function io(i,t){let e=Pc[t];e===void 0&&(e=new Int32Array(t),Pc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Qm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function jm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2fv(this.addr,t),Oe(e,t)}}function tg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;i.uniform3fv(this.addr,t),Oe(e,t)}}function eg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4fv(this.addr,t),Oe(e,t)}}function ng(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;Ic.set(n),i.uniformMatrix2fv(this.addr,!1,Ic),Oe(e,n)}}function ig(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;Dc.set(n),i.uniformMatrix3fv(this.addr,!1,Dc),Oe(e,n)}}function sg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;Lc.set(n),i.uniformMatrix4fv(this.addr,!1,Lc),Oe(e,n)}}function rg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function og(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2iv(this.addr,t),Oe(e,t)}}function ag(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3iv(this.addr,t),Oe(e,t)}}function lg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4iv(this.addr,t),Oe(e,t)}}function cg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function hg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2uiv(this.addr,t),Oe(e,t)}}function ug(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3uiv(this.addr,t),Oe(e,t)}}function fg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4uiv(this.addr,t),Oe(e,t)}}function dg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ga.compareFunction=e.isReversedDepthBuffer()?nl:el,r=Ga):r=ou,e.setTexture2D(t||r,s)}function pg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||lu,s)}function mg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||cu,s)}function gg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||au,s)}function _g(i){switch(i){case 5126:return Qm;case 35664:return jm;case 35665:return tg;case 35666:return eg;case 35674:return ng;case 35675:return ig;case 35676:return sg;case 5124:case 35670:return rg;case 35667:case 35671:return og;case 35668:case 35672:return ag;case 35669:case 35673:return lg;case 5125:return cg;case 36294:return hg;case 36295:return ug;case 36296:return fg;case 35678:case 36198:case 36298:case 36306:case 35682:return dg;case 35679:case 36299:case 36307:return pg;case 35680:case 36300:case 36308:case 36293:return mg;case 36289:case 36303:case 36311:case 36292:return gg}}function xg(i,t){i.uniform1fv(this.addr,t)}function vg(i,t){const e=gs(t,this.size,2);i.uniform2fv(this.addr,e)}function Mg(i,t){const e=gs(t,this.size,3);i.uniform3fv(this.addr,e)}function Sg(i,t){const e=gs(t,this.size,4);i.uniform4fv(this.addr,e)}function yg(i,t){const e=gs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Eg(i,t){const e=gs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function bg(i,t){const e=gs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function wg(i,t){i.uniform1iv(this.addr,t)}function Tg(i,t){i.uniform2iv(this.addr,t)}function Ag(i,t){i.uniform3iv(this.addr,t)}function Rg(i,t){i.uniform4iv(this.addr,t)}function Cg(i,t){i.uniform1uiv(this.addr,t)}function Pg(i,t){i.uniform2uiv(this.addr,t)}function Lg(i,t){i.uniform3uiv(this.addr,t)}function Dg(i,t){i.uniform4uiv(this.addr,t)}function Ig(i,t,e){const n=this.cache,s=t.length,r=io(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Ga:o=ou;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Ng(i,t,e){const n=this.cache,s=t.length,r=io(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||lu,r[o])}function Ug(i,t,e){const n=this.cache,s=t.length,r=io(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||cu,r[o])}function Fg(i,t,e){const n=this.cache,s=t.length,r=io(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||au,r[o])}function Og(i){switch(i){case 5126:return xg;case 35664:return vg;case 35665:return Mg;case 35666:return Sg;case 35674:return yg;case 35675:return Eg;case 35676:return bg;case 5124:case 35670:return wg;case 35667:case 35671:return Tg;case 35668:case 35672:return Ag;case 35669:case 35673:return Rg;case 5125:return Cg;case 36294:return Pg;case 36295:return Lg;case 36296:return Dg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ig;case 35679:case 36299:case 36307:return Ng;case 35680:case 36300:case 36308:case 36293:return Ug;case 36289:case 36303:case 36311:case 36292:return Fg}}class Bg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=_g(e.type)}}class zg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Og(e.type)}}class Hg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const ko=/(\w+)(\])?(\[|\.)?/g;function Nc(i,t){i.seq.push(t),i.map[t.id]=t}function kg(i,t,e){const n=i.name,s=n.length;for(ko.lastIndex=0;;){const r=ko.exec(n),o=ko.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Nc(e,c===void 0?new Bg(a,i,t):new zg(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Hg(a),Nc(e,d)),e=d}}}class Hr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);kg(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Uc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Gg=37297;let Vg=0;function Wg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Fc=new Gt;function Xg(i){se._getMatrix(Fc,se.workingColorSpace,i);const t=`mat3( ${Fc.elements.map(e=>e.toFixed(4))} )`;switch(se.getTransfer(i)){case Yr:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return zt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Oc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Wg(i.getShaderSource(t),a)}else return r}function Yg(i,t){const e=Xg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const qg={[Sh]:"Linear",[yh]:"Reinhard",[Eh]:"Cineon",[bh]:"ACESFilmic",[Th]:"AgX",[qa]:"Neutral",[wh]:"Custom"};function Zg(i,t){const e=qg[t];return e===void 0?(zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ar=new U;function Kg(){se.getLuminanceCoefficients(Ar);const i=Ar.x.toFixed(4),t=Ar.y.toFixed(4),e=Ar.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rs).join(`
`)}function $g(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Qg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Rs(i){return i!==""}function Bc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function zc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const jg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Va(i){return i.replace(jg,e_)}const t_=new Map;function e_(i,t){let e=Jt[t];if(e===void 0){const n=t_.get(t);if(n!==void 0)e=Jt[n],zt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Va(e)}const n_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hc(i){return i.replace(n_,i_)}function i_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function kc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const s_={[Ur]:"SHADOWMAP_TYPE_PCF",[Ts]:"SHADOWMAP_TYPE_VSM"};function r_(i){return s_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const o_={[Ai]:"ENVMAP_TYPE_CUBE",[hs]:"ENVMAP_TYPE_CUBE",[$r]:"ENVMAP_TYPE_CUBE_UV"};function a_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":o_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const l_={[hs]:"ENVMAP_MODE_REFRACTION"};function c_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":l_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const h_={[Mh]:"ENVMAP_BLENDING_MULTIPLY",[Zu]:"ENVMAP_BLENDING_MIX",[Ku]:"ENVMAP_BLENDING_ADD"};function u_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":h_[i.combine]||"ENVMAP_BLENDING_NONE"}function f_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function d_(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=r_(e),c=a_(e),h=c_(e),d=u_(e),u=f_(e),f=Jg(e),g=$g(r),x=s.createProgram();let m,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Rs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Rs).join(`
`),p.length>0&&(p+=`
`)):(m=[kc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rs).join(`
`),p=[kc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Fn?"#define TONE_MAPPING":"",e.toneMapping!==Fn?Jt.tonemapping_pars_fragment:"",e.toneMapping!==Fn?Zg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,Yg("linearToOutputTexel",e.outputColorSpace),Kg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Rs).join(`
`)),o=Va(o),o=Bc(o,e),o=zc(o,e),a=Va(a),a=Bc(a,e),a=zc(a,e),o=Hc(o),a=Hc(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===zl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===zl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const R=S+m+o,y=S+p+a,w=Uc(s,s.VERTEX_SHADER,R),b=Uc(s,s.FRAGMENT_SHADER,y);s.attachShader(x,w),s.attachShader(x,b),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function L(A){if(i.debug.checkShaderErrors){const P=s.getProgramInfoLog(x)||"",D=s.getShaderInfoLog(w)||"",N=s.getShaderInfoLog(b)||"",z=P.trim(),q=D.trim(),W=N.trim();let tt=!0,Y=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(tt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,w,b);else{const j=Oc(s,w,"vertex"),it=Oc(s,b,"fragment");le("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+z+`
`+j+`
`+it)}else z!==""?zt("WebGLProgram: Program Info Log:",z):(q===""||W==="")&&(Y=!1);Y&&(A.diagnostics={runnable:tt,programLog:z,vertexShader:{log:q,prefix:m},fragmentShader:{log:W,prefix:p}})}s.deleteShader(w),s.deleteShader(b),v=new Hr(s,x),M=Qg(s,x)}let v;this.getUniforms=function(){return v===void 0&&L(this),v};let M;this.getAttributes=function(){return M===void 0&&L(this),M};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=s.getProgramParameter(x,Gg)),T},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Vg++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=b,this}let p_=0;class m_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new g_(t),e.set(t,n)),n}}class g_{constructor(t){this.id=p_++,this.code=t,this.usedTimes=0}}function __(i){return i===Ri||i===Vr||i===Wr}function x_(i,t,e,n,s,r){const o=new Fh,a=new m_,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer;let u=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function x(v,M,T,A,P,D){const N=A.fog,z=P.geometry,q=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?A.environment:null,W=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,tt=t.get(v.envMap||q,W),Y=tt&&tt.mapping===$r?tt.image.height:null,j=f[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&zt("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));const it=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Rt=it!==void 0?it.length:0;let bt=0;z.morphAttributes.position!==void 0&&(bt=1),z.morphAttributes.normal!==void 0&&(bt=2),z.morphAttributes.color!==void 0&&(bt=3);let ae,qt,ne,K;if(j){const Se=Nn[j];ae=Se.vertexShader,qt=Se.fragmentShader}else{ae=v.vertexShader,qt=v.fragmentShader;const Se=a.getVertexShaderStage(v),ue=a.getFragmentShaderStage(v);a.update(v,Se,ue),ne=Se.id,K=ue.id}const st=i.getRenderTarget(),wt=i.state.buffers.depth.getReversed(),Ht=P.isInstancedMesh===!0,Et=P.isBatchedMesh===!0,Xt=!!v.map,Ce=!!v.matcap,Vt=!!tt,ie=!!v.aoMap,$=!!v.lightMap,lt=!!v.bumpMap&&v.wireframe===!1,ht=!!v.normalMap,Nt=!!v.displacementMap,re=!!v.emissiveMap,Zt=!!v.metalnessMap,ee=!!v.roughnessMap,F=v.anisotropy>0,jt=v.clearcoat>0,Yt=v.dispersion>0,C=v.retroreflectivity>0,_=v.iridescence>0,k=v.sheen>0,X=v.transmission>0,J=F&&!!v.anisotropyMap,at=jt&&!!v.clearcoatMap,ct=jt&&!!v.clearcoatNormalMap,Q=jt&&!!v.clearcoatRoughnessMap,nt=_&&!!v.iridescenceMap,ut=_&&!!v.iridescenceThicknessMap,Ut=k&&!!v.sheenColorMap,gt=k&&!!v.sheenRoughnessMap,ft=!!v.specularMap,Ft=!!v.specularColorMap,Bt=!!v.specularIntensityMap,Wt=X&&!!v.transmissionMap,B=X&&!!v.thicknessMap,dt=!!v.gradientMap,et=!!v.alphaMap,pt=v.alphaTest>0,yt=!!v.alphaHash,rt=!!v.extensions;let Ot=Fn;v.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Ot=i.toneMapping);const Dt={shaderID:j,shaderType:v.type,shaderName:v.name,vertexShader:ae,fragmentShader:qt,defines:v.defines,customVertexShaderID:ne,customFragmentShaderID:K,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:Et,batchingColor:Et&&P._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&P.instanceColor!==null,instancingMorph:Ht&&P.morphTexture!==null,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:se.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Xt,matcap:Ce,envMap:Vt,envMapMode:Vt&&tt.mapping,envMapCubeUVHeight:Y,aoMap:ie,lightMap:$,bumpMap:lt,normalMap:ht,displacementMap:Nt,emissiveMap:re,normalMapObjectSpace:ht&&v.normalMapType===Qu,normalMapTangentSpace:ht&&v.normalMapType===Ba,packedNormalMap:ht&&v.normalMapType===Ba&&__(v.normalMap.format),metalnessMap:Zt,roughnessMap:ee,anisotropy:F,anisotropyMap:J,clearcoat:jt,clearcoatMap:at,clearcoatNormalMap:ct,clearcoatRoughnessMap:Q,dispersion:Yt,retroreflection:C,iridescence:_,iridescenceMap:nt,iridescenceThicknessMap:ut,sheen:k,sheenColorMap:Ut,sheenRoughnessMap:gt,specularMap:ft,specularColorMap:Ft,specularIntensityMap:Bt,transmission:X,transmissionMap:Wt,thicknessMap:B,gradientMap:dt,opaque:v.transparent===!1&&v.blending===Cs&&v.alphaToCoverage===!1,alphaMap:et,alphaTest:pt,alphaHash:yt,combine:v.combine,mapUv:Xt&&g(v.map.channel),aoMapUv:ie&&g(v.aoMap.channel),lightMapUv:$&&g(v.lightMap.channel),bumpMapUv:lt&&g(v.bumpMap.channel),normalMapUv:ht&&g(v.normalMap.channel),displacementMapUv:Nt&&g(v.displacementMap.channel),emissiveMapUv:re&&g(v.emissiveMap.channel),metalnessMapUv:Zt&&g(v.metalnessMap.channel),roughnessMapUv:ee&&g(v.roughnessMap.channel),anisotropyMapUv:J&&g(v.anisotropyMap.channel),clearcoatMapUv:at&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:ct&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:ut&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:gt&&g(v.sheenRoughnessMap.channel),specularMapUv:ft&&g(v.specularMap.channel),specularColorMapUv:Ft&&g(v.specularColorMap.channel),specularIntensityMapUv:Bt&&g(v.specularIntensityMap.channel),transmissionMapUv:Wt&&g(v.transmissionMap.channel),thicknessMapUv:B&&g(v.thicknessMap.channel),alphaMapUv:et&&g(v.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(ht||F),vertexNormals:!!z.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!z.attributes.uv&&(Xt||et),fog:!!N,useFog:v.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||z.attributes.normal===void 0&&ht===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:wt,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Rt,morphTextureStride:bt,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:D.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&T.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ot,decodeVideoTexture:Xt&&v.map.isVideoTexture===!0&&se.getTransfer(v.map.colorSpace)===pe,decodeVideoTextureEmissive:re&&v.emissiveMap.isVideoTexture===!0&&se.getTransfer(v.emissiveMap.colorSpace)===pe,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===pn,flipSided:v.side===tn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:rt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&v.extensions.multiDraw===!0||Et)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Dt.vertexUv1s=l.has(1),Dt.vertexUv2s=l.has(2),Dt.vertexUv3s=l.has(3),l.clear(),Dt}function m(v){const M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(const T in v.defines)M.push(T),M.push(v.defines[T]);return v.isRawShaderMaterial===!1&&(p(M,v),S(M,v),M.push(i.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function p(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numSunLights),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numSunLightShadows),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function S(v,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.retroreflection&&o.enable(24),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),M.packedNormalMap&&o.enable(22),M.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),M.numLightProbeGrids>0&&o.enable(22),M.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function R(v){const M=f[v.type];let T;if(M){const A=Nn[M];T=Dd.clone(A.uniforms)}else T=v.uniforms;return T}function y(v,M){let T=h.get(M);return T!==void 0?++T.usedTimes:(T=new d_(i,M,v,s),c.push(T),h.set(M,T)),T}function w(v){if(--v.usedTimes===0){const M=c.indexOf(v);c[M]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function b(v){a.remove(v)}function L(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:R,acquireProgram:y,releaseProgram:w,releaseShaderCache:b,programs:c,dispose:L}}function v_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function M_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Gc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Vc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,g,x,m,p){let S=i[t];return S===void 0?(S={id:u.id,object:u,geometry:f,material:g,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:m,group:p},i[t]=S):(S.id=u.id,S.object=u,S.geometry=f,S.material=g,S.materialVariant=o(u),S.groupOrder=x,S.renderOrder=u.renderOrder,S.z=m,S.group=p),t++,S}function l(u,f,g,x,m,p,S){S.reversedDepth===!0&&(m=-m);const R=a(u,f,g,x,m,p);g.transmission>0?n.push(R):g.transparent===!0?s.push(R):e.push(R)}function c(u,f,g,x,m,p){const S=a(u,f,g,x,m,p);g.transmission>0?n.unshift(S):g.transparent===!0?s.unshift(S):e.unshift(S)}function h(u,f){e.length>1&&e.sort(u||M_),n.length>1&&n.sort(f||Gc),s.length>1&&s.sort(f||Gc)}function d(){for(let u=t,f=i.length;u<f;u++){const g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function S_(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Vc,i.set(n,[o])):s>=r.length?(o=new Vc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function y_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new U,color:new Lt};break;case"SpotLight":e={position:new U,direction:new U,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":e={color:new Lt,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function E_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let b_=0;function w_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function T_(i){const t=new y_,e=E_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const s=new U,r=new he,o=new he;function a(c){let h=0,d=0,u=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,S=0,R=0,y=0,w=0,b=0,L=0,v=0,M=0,T=0;c.sort(w_);for(let P=0,D=c.length;P<D;P++){const N=c[P],z=N.color,q=N.intensity,W=N.distance;let tt=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Ri?tt=N.shadow.map.texture:tt=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=z.r*q,d+=z.g*q,u+=z.b*q;else if(N.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(N.sh.coefficients[Y],q);T++}else if(N.isSunLight){const Y=t.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const j=N.shadow,it=e.get(N);it.shadowIntensity=j.intensity,it.shadowBias=j.bias,it.shadowNormalBias=j.normalBias,it.shadowRadius=j.radius,it.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[g]=it,n.sunShadowMap[g]=tt;const Rt=j.getViewportCount();for(let bt=0;bt<Rt;bt++)n.sunShadowMatrix[x+bt]=j.getMatrix(bt),n.sunShadowCascade[x+bt]=j._cascadeData[bt];x+=Rt,g++}n.sun[f]=Y,f++}else if(N.isDirectionalLight){const Y=t.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const j=N.shadow,it=e.get(N);it.shadowIntensity=j.intensity,it.shadowBias=j.bias,it.shadowNormalBias=j.normalBias,it.shadowRadius=j.radius,it.shadowMapSize=j.mapSize,n.directionalShadow[m]=it,n.directionalShadowMap[m]=tt,n.directionalShadowMatrix[m]=N.shadow.matrix,w++}n.directional[m]=Y,m++}else if(N.isSpotLight){const Y=t.get(N);Y.position.setFromMatrixPosition(N.matrixWorld),Y.color.copy(z).multiplyScalar(q),Y.distance=W,Y.coneCos=Math.cos(N.angle),Y.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Y.decay=N.decay,n.spot[S]=Y;const j=N.shadow;if(N.map&&(n.spotLightMap[v]=N.map,v++,j.updateMatrices(N),N.castShadow&&M++),n.spotLightMatrix[S]=j.matrix,N.castShadow){const it=e.get(N);it.shadowIntensity=j.intensity,it.shadowBias=j.bias,it.shadowNormalBias=j.normalBias,it.shadowRadius=j.radius,it.shadowMapSize=j.mapSize,n.spotShadow[S]=it,n.spotShadowMap[S]=tt,L++}S++}else if(N.isRectAreaLight){const Y=t.get(N);Y.color.copy(z).multiplyScalar(q),Y.halfWidth.set(N.width*.5,0,0),Y.halfHeight.set(0,N.height*.5,0),n.rectArea[R]=Y,R++}else if(N.isPointLight){const Y=t.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity),Y.distance=N.distance,Y.decay=N.decay,N.castShadow){const j=N.shadow,it=e.get(N);it.shadowIntensity=j.intensity,it.shadowBias=j.bias,it.shadowNormalBias=j.normalBias,it.shadowRadius=j.radius,it.shadowMapSize=j.mapSize,it.shadowCameraNear=j.camera.near,it.shadowCameraFar=j.camera.far,n.pointShadow[p]=it,n.pointShadowMap[p]=tt,n.pointShadowMatrix[p]=N.shadow.matrix,b++}n.point[p]=Y,p++}else if(N.isHemisphereLight){const Y=t.get(N);Y.skyColor.copy(N.color).multiplyScalar(q),Y.groundColor.copy(N.groundColor).multiplyScalar(q),n.hemi[y]=Y,y++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const A=n.hash;(A.sunLength!==f||A.directionalLength!==m||A.pointLength!==p||A.spotLength!==S||A.rectAreaLength!==R||A.hemiLength!==y||A.numSunShadows!==g||A.numDirectionalShadows!==w||A.numPointShadows!==b||A.numSpotShadows!==L||A.numSpotMaps!==v||A.numLightProbes!==T)&&(n.sun.length=f,n.directional.length=m,n.spot.length=S,n.rectArea.length=R,n.point.length=p,n.hemi.length=y,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=L,n.spotShadowMap.length=L,n.spotLightMatrix.length=L+v-M,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=T,A.sunLength=f,A.directionalLength=m,A.pointLength=p,A.spotLength=S,A.rectAreaLength=R,A.hemiLength=y,A.numSunShadows=g,A.numDirectionalShadows=w,A.numPointShadows=b,A.numSpotShadows=L,A.numSpotMaps=v,A.numLightProbes=T,n.version=b_++)}function l(c,h){let d=0,u=0,f=0,g=0,x=0,m=0;const p=h.matrixWorldInverse;for(let S=0,R=c.length;S<R;S++){const y=c[S];if(y.isSunLight){const w=n.sun[d];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(p),d++}else if(y.isDirectionalLight){const w=n.directional[u];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),u++}else if(y.isSpotLight){const w=n.spot[g];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),g++}else if(y.isRectAreaLight){const w=n.rectArea[x];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(p),o.identity(),r.copy(y.matrixWorld),r.premultiply(p),o.extractRotation(r),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),x++}else if(y.isPointLight){const w=n.point[f];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){const w=n.hemi[m];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(p),m++}}}return{setup:a,setupView:l,state:n}}function Wc(i){const t=new T_(i),e=[],n=[],s=[];function r(u){d.camera=u,e.length=0,n.length=0,s.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}const d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function A_(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Wc(i),t.set(s,[a])):r>=o.length?(a=new Wc(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const R_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,C_=`uniform sampler2D shadow_pass;
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
}`,P_=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],L_=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],Xc=new he,bs=new U,Go=new U;function D_(i,t,e){let n=new cl;const s=new vt,r=new vt,o=new Ae,a=new Fd,l=new Od,c={},h=e.maxTextureSize,d={[Ti]:tn,[tn]:Ti,[pn]:pn},u=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:R_,fragmentShader:C_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ne;g.setAttribute("position",new be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Qt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ur;let p=this.type;this.render=function(b,L,v){if(window.__galleryCaptureScene)return;if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===_h&&(zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ur);const M=i.getRenderTarget(),T=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),P=i.state;P.setBlending(Jn),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const D=p!==this.type;D&&L.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(z=>z.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,z=b.length;N<z;N++){const q=b[N],W=q.shadow;if(W===void 0){zt("WebGLShadowMap:",q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const tt=W.getFrameExtents();s.multiply(tt),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/tt.x),s.x=r.x*tt.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/tt.y),s.y=r.y*tt.y,W.mapSize.y=r.y));const Y=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=Y,W.map===null||D===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Ts){if(q.isPointLight){zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Rn(s.x,s.y,{format:Ri,type:Bn,minFilter:Ze,magFilter:Ze,generateMipmaps:!1}),W.map.texture.name=q.name+".shadowMap",W.map.depthTexture=new ks(s.x,s.y,Tn),W.map.depthTexture.name=q.name+".shadowMapDepth",W.map.depthTexture.format=Qn,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Ve,W.map.depthTexture.magFilter=Ve}else q.isPointLight?(W.map=new ru(s.x),W.map.depthTexture=new jf(s.x,On)):(W.map=new Rn(s.x,s.y),W.map.depthTexture=new ks(s.x,s.y,On)),W.map.depthTexture.name=q.name+".shadowMap",W.map.depthTexture.format=Qn,this.type===Ur?(W.map.depthTexture.compareFunction=Y?nl:el,W.map.depthTexture.minFilter=Ze,W.map.depthTexture.magFilter=Ze):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Ve,W.map.depthTexture.magFilter=Ve);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);const j=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();q.isPointLight!==!0&&W.updateMatrices(q,v);for(let it=0;it<j;it++){const Rt=W.getCamera(it);if(q.isPointLight){const bt=W.camera,ae=W.matrix,qt=q.distance||bt.far;qt!==bt.far&&(bt.far=qt,bt.updateProjectionMatrix()),bs.setFromMatrixPosition(q.matrixWorld),bt.position.copy(bs),Go.copy(bt.position),Go.add(P_[it]),bt.up.copy(L_[it]),bt.lookAt(Go),bt.updateMatrixWorld(),ae.makeTranslation(-bs.x,-bs.y,-bs.z),Xc.multiplyMatrices(bt.projectionMatrix,bt.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Xc,bt.coordinateSystem,bt.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,it),i.clear();else{it===0&&(i.setRenderTarget(W.map),i.clear());const bt=W.getViewport(it);o.set(r.x*bt.x,r.y*bt.y,r.x*bt.z,r.y*bt.w),P.viewport(o)}n=W.getFrustum(it),y(L,v,Rt,q,this.type)}W.isPointLightShadow!==!0&&this.type===Ts&&S(W,v),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,T,A)};function S(b,L){const v=t.update(x);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new Rn(s.x,s.y,{format:Ri,type:Bn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(L,null,v,u,x,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(L,null,v,f,x,null)}function R(b,L,v,M){let T=null;const A=v.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(A!==void 0)T=A;else if(T=v.isPointLight===!0?l:a,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const P=T.uuid,D=L.uuid;let N=c[P];N===void 0&&(N={},c[P]=N);let z=N[D];z===void 0&&(z=T.clone(),N[D]=z,L.addEventListener("dispose",w)),T=z}if(T.visible=L.visible,T.wireframe=L.wireframe,M===Ts?T.side=L.shadowSide!==null?L.shadowSide:L.side:T.side=L.shadowSide!==null?L.shadowSide:d[L.side],T.alphaMap=L.alphaMap,T.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,T.map=L.map,T.clipShadows=L.clipShadows,T.clippingPlanes=L.clippingPlanes,T.clipIntersection=L.clipIntersection,T.displacementMap=L.displacementMap,T.displacementScale=L.displacementScale,T.displacementBias=L.displacementBias,T.wireframeLinewidth=L.wireframeLinewidth,T.linewidth=L.linewidth,v.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const P=i.properties.get(T);P.light=v}return T}function y(b,L,v,M,T){if(b.visible===!1)return;if(b.layers.test(L.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&T===Ts)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,b.matrixWorld);const D=t.update(b),N=b.material;if(Array.isArray(N)){const z=D.groups;for(let q=0,W=z.length;q<W;q++){const tt=z[q],Y=N[tt.materialIndex];if(Y&&Y.visible){const j=R(b,Y,M,T);b.onBeforeShadow(i,b,L,v,D,j,tt),i.renderBufferDirect(v,null,D,j,b,tt),b.onAfterShadow(i,b,L,v,D,j,tt)}}}else if(N.visible){const z=R(b,N,M,T);b.onBeforeShadow(i,b,L,v,D,z,null),i.renderBufferDirect(v,null,D,z,b,null),b.onAfterShadow(i,b,L,v,D,z,null)}}const P=b.children;for(let D=0,N=P.length;D<N;D++)y(P[D],L,v,M,T)}function w(b){b.target.removeEventListener("dispose",w);for(const v in c){const M=c[v],T=b.target.uuid;T in M&&(M[T].dispose(),delete M[T])}}}function I_(i,t){function e(){let B=!1;const dt=new Ae;let et=null;const pt=new Ae(0,0,0,0);return{setMask:function(yt){et!==yt&&!B&&(i.colorMask(yt,yt,yt,yt),et=yt)},setLocked:function(yt){B=yt},setClear:function(yt,rt,Ot,Dt,Se){Se===!0&&(yt*=Dt,rt*=Dt,Ot*=Dt),dt.set(yt,rt,Ot,Dt),pt.equals(dt)===!1&&(i.clearColor(yt,rt,Ot,Dt),pt.copy(dt))},reset:function(){B=!1,et=null,pt.set(-1,0,0,0)}}}function n(){let B=!1,dt=!1,et=null,pt=null,yt=null;return{setReversed:function(rt){if(dt!==rt){const Ot=t.get("EXT_clip_control");rt?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT),dt=rt;const Dt=yt;yt=null,this.setClear(Dt)}},getReversed:function(){return dt},setTest:function(rt){rt?st(i.DEPTH_TEST):wt(i.DEPTH_TEST)},setMask:function(rt){et!==rt&&!B&&(i.depthMask(rt),et=rt)},setFunc:function(rt){if(dt&&(rt=uf[rt]),pt!==rt){switch(rt){case ta:i.depthFunc(i.NEVER);break;case ea:i.depthFunc(i.ALWAYS);break;case na:i.depthFunc(i.LESS);break;case Fs:i.depthFunc(i.LEQUAL);break;case ia:i.depthFunc(i.EQUAL);break;case sa:i.depthFunc(i.GEQUAL);break;case ra:i.depthFunc(i.GREATER);break;case oa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pt=rt}},setLocked:function(rt){B=rt},setClear:function(rt){yt!==rt&&(yt=rt,dt&&(rt=1-rt),i.clearDepth(rt))},reset:function(){B=!1,et=null,pt=null,yt=null,dt=!1}}}function s(){let B=!1,dt=null,et=null,pt=null,yt=null,rt=null,Ot=null,Dt=null,Se=null;return{setTest:function(ue){B||(ue?st(i.STENCIL_TEST):wt(i.STENCIL_TEST))},setMask:function(ue){dt!==ue&&!B&&(i.stencilMask(ue),dt=ue)},setFunc:function(ue,_n,Pn){(et!==ue||pt!==_n||yt!==Pn)&&(i.stencilFunc(ue,_n,Pn),et=ue,pt=_n,yt=Pn)},setOp:function(ue,_n,Pn){(rt!==ue||Ot!==_n||Dt!==Pn)&&(i.stencilOp(ue,_n,Pn),rt=ue,Ot=_n,Dt=Pn)},setLocked:function(ue){B=ue},setClear:function(ue){Se!==ue&&(i.clearStencil(ue),Se=ue)},reset:function(){B=!1,dt=null,et=null,pt=null,yt=null,rt=null,Ot=null,Dt=null,Se=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},d={},u={},f=new WeakMap,g=[],x=null,m=!1,p=null,S=null,R=null,y=null,w=null,b=null,L=null,v=new Lt(0,0,0),M=0,T=!1,A=null,P=null,D=null,N=null,z=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,tt=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(tt=parseFloat(/^WebGL (\d)/.exec(Y)[1]),W=tt>=1):Y.indexOf("OpenGL ES")!==-1&&(tt=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),W=tt>=2);let j=null,it={};const Rt=i.getParameter(i.SCISSOR_BOX),bt=i.getParameter(i.VIEWPORT),ae=new Ae().fromArray(Rt),qt=new Ae().fromArray(bt);function ne(B,dt,et,pt){const yt=new Uint8Array(4),rt=i.createTexture();i.bindTexture(B,rt),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ot=0;Ot<et;Ot++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(dt,0,i.RGBA,1,1,pt,0,i.RGBA,i.UNSIGNED_BYTE,yt):i.texImage2D(dt+Ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,yt);return rt}const K={};K[i.TEXTURE_2D]=ne(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=ne(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=ne(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=ne(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),st(i.DEPTH_TEST),o.setFunc(Fs),lt(!1),ht(Fl),st(i.CULL_FACE),ie(Jn);function st(B){h[B]!==!0&&(i.enable(B),h[B]=!0)}function wt(B){h[B]!==!1&&(i.disable(B),h[B]=!1)}function Ht(B,dt){return u[B]!==dt?(i.bindFramebuffer(B,dt),u[B]=dt,B===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=dt),B===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=dt),!0):!1}function Et(B,dt){let et=g,pt=!1;if(B){et=f.get(dt),et===void 0&&(et=[],f.set(dt,et));const yt=B.textures;if(et.length!==yt.length||et[0]!==i.COLOR_ATTACHMENT0){for(let rt=0,Ot=yt.length;rt<Ot;rt++)et[rt]=i.COLOR_ATTACHMENT0+rt;et.length=yt.length,pt=!0}}else et[0]!==i.BACK&&(et[0]=i.BACK,pt=!0);pt&&i.drawBuffers(et)}function Xt(B){return x!==B?(i.useProgram(B),x=B,!0):!1}const Ce={[ts]:i.FUNC_ADD,[Lu]:i.FUNC_SUBTRACT,[Du]:i.FUNC_REVERSE_SUBTRACT};Ce[Iu]=i.MIN,Ce[Nu]=i.MAX;const Vt={[Uu]:i.ZERO,[Fu]:i.ONE,[Ou]:i.SRC_COLOR,[xh]:i.SRC_ALPHA,[Vu]:i.SRC_ALPHA_SATURATE,[ku]:i.DST_COLOR,[zu]:i.DST_ALPHA,[Bu]:i.ONE_MINUS_SRC_COLOR,[vh]:i.ONE_MINUS_SRC_ALPHA,[Gu]:i.ONE_MINUS_DST_COLOR,[Hu]:i.ONE_MINUS_DST_ALPHA,[Wu]:i.CONSTANT_COLOR,[Xu]:i.ONE_MINUS_CONSTANT_COLOR,[Yu]:i.CONSTANT_ALPHA,[qu]:i.ONE_MINUS_CONSTANT_ALPHA};function ie(B,dt,et,pt,yt,rt,Ot,Dt,Se,ue){if(B===Jn){m===!0&&(wt(i.BLEND),m=!1);return}if(m===!1&&(st(i.BLEND),m=!0),B!==Pu){if(B!==p||ue!==T){if((S!==ts||w!==ts)&&(i.blendEquation(i.FUNC_ADD),S=ts,w=ts),ue)switch(B){case Cs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jo:i.blendFunc(i.ONE,i.ONE);break;case Ol:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:le("WebGLState: Invalid blending: ",B);break}else switch(B){case Cs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ol:le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bl:le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:le("WebGLState: Invalid blending: ",B);break}R=null,y=null,b=null,L=null,v.set(0,0,0),M=0,p=B,T=ue}return}yt=yt||dt,rt=rt||et,Ot=Ot||pt,(dt!==S||yt!==w)&&(i.blendEquationSeparate(Ce[dt],Ce[yt]),S=dt,w=yt),(et!==R||pt!==y||rt!==b||Ot!==L)&&(i.blendFuncSeparate(Vt[et],Vt[pt],Vt[rt],Vt[Ot]),R=et,y=pt,b=rt,L=Ot),(Dt.equals(v)===!1||Se!==M)&&(i.blendColor(Dt.r,Dt.g,Dt.b,Se),v.copy(Dt),M=Se),p=B,T=!1}function $(B,dt){B.side===pn?wt(i.CULL_FACE):st(i.CULL_FACE);let et=B.side===tn;dt&&(et=!et),lt(et),B.blending===Cs&&B.transparent===!1?ie(Jn):ie(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);const pt=B.stencilWrite;a.setTest(pt),pt&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),re(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):wt(i.SAMPLE_ALPHA_TO_COVERAGE)}function lt(B){A!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),A=B)}function ht(B){B!==Ru?(st(i.CULL_FACE),B!==P&&(B===Fl?i.cullFace(i.BACK):B===Cu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):wt(i.CULL_FACE),P=B}function Nt(B){B!==D&&(W&&i.lineWidth(B),D=B)}function re(B,dt,et){B?(st(i.POLYGON_OFFSET_FILL),(N!==dt||z!==et)&&(N=dt,z=et,o.getReversed()&&(dt=-dt),i.polygonOffset(dt,et))):wt(i.POLYGON_OFFSET_FILL)}function Zt(B){B?st(i.SCISSOR_TEST):wt(i.SCISSOR_TEST)}function ee(B){B===void 0&&(B=i.TEXTURE0+q-1),j!==B&&(i.activeTexture(B),j=B)}function F(B,dt,et){et===void 0&&(j===null?et=i.TEXTURE0+q-1:et=j);let pt=it[et];pt===void 0&&(pt={type:void 0,texture:void 0},it[et]=pt),(pt.type!==B||pt.texture!==dt)&&(j!==et&&(i.activeTexture(et),j=et),i.bindTexture(B,dt||K[B]),pt.type=B,pt.texture=dt)}function jt(){const B=it[j];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Yt(){try{i.compressedTexImage2D(...arguments)}catch(B){le("WebGLState:",B)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(B){le("WebGLState:",B)}}function _(){try{i.texSubImage2D(...arguments)}catch(B){le("WebGLState:",B)}}function k(){try{i.texSubImage3D(...arguments)}catch(B){le("WebGLState:",B)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(B){le("WebGLState:",B)}}function J(){try{i.compressedTexSubImage3D(...arguments)}catch(B){le("WebGLState:",B)}}function at(){try{i.texStorage2D(...arguments)}catch(B){le("WebGLState:",B)}}function ct(){try{i.texStorage3D(...arguments)}catch(B){le("WebGLState:",B)}}function Q(){try{i.texImage2D(...arguments)}catch(B){le("WebGLState:",B)}}function nt(){try{i.texImage3D(...arguments)}catch(B){le("WebGLState:",B)}}function ut(B){return d[B]!==void 0?d[B]:i.getParameter(B)}function Ut(B,dt){d[B]!==dt&&(i.pixelStorei(B,dt),d[B]=dt)}function gt(B){ae.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),ae.copy(B))}function ft(B){qt.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),qt.copy(B))}function Ft(B,dt){let et=c.get(dt);et===void 0&&(et=new WeakMap,c.set(dt,et));let pt=et.get(B);pt===void 0&&(pt=i.getUniformBlockIndex(dt,B.name),et.set(B,pt))}function Bt(B,dt){const pt=c.get(dt).get(B);l.get(dt)!==pt&&(i.uniformBlockBinding(dt,pt,B.__bindingPointIndex),l.set(dt,pt))}function Wt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},j=null,it={},u={},f=new WeakMap,g=[],x=null,m=!1,p=null,S=null,R=null,y=null,w=null,b=null,L=null,v=new Lt(0,0,0),M=0,T=!1,A=null,P=null,D=null,N=null,z=null,ae.set(0,0,i.canvas.width,i.canvas.height),qt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:st,disable:wt,bindFramebuffer:Ht,drawBuffers:Et,useProgram:Xt,setBlending:ie,setMaterial:$,setFlipSided:lt,setCullFace:ht,setLineWidth:Nt,setPolygonOffset:re,setScissorTest:Zt,activeTexture:ee,bindTexture:F,unbindTexture:jt,compressedTexImage2D:Yt,compressedTexImage3D:C,texImage2D:Q,texImage3D:nt,pixelStorei:Ut,getParameter:ut,updateUBOMapping:Ft,uniformBlockBinding:Bt,texStorage2D:at,texStorage3D:ct,texSubImage2D:_,texSubImage3D:k,compressedTexSubImage2D:X,compressedTexSubImage3D:J,scissor:gt,viewport:ft,reset:Wt}}function N_(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new vt,h=new WeakMap,d=new Set;let u;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,_){return g?new OffscreenCanvas(C,_):qr("canvas")}function m(C,_,k){let X=1;const J=Yt(C);if((J.width>k||J.height>k)&&(X=k/Math.max(J.width,J.height)),X<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const at=Math.floor(X*J.width),ct=Math.floor(X*J.height);u===void 0&&(u=x(at,ct));const Q=_?x(at,ct):u;return Q.width=at,Q.height=ct,Q.getContext("2d").drawImage(C,0,0,at,ct),zt("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+at+"x"+ct+")."),Q}else return"data"in C&&zt("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function p(C){return C.generateMipmaps}function S(C){i.generateMipmap(C)}function R(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(C,_,k,X,J,at=!1){if(C!==null){if(i[C]!==void 0)return i[C];zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ct;X&&(ct=t.get("EXT_texture_norm16"),ct||zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=_;if(_===i.RED&&(k===i.FLOAT&&(Q=i.R32F),k===i.HALF_FLOAT&&(Q=i.R16F),k===i.UNSIGNED_BYTE&&(Q=i.R8),k===i.UNSIGNED_SHORT&&ct&&(Q=ct.R16_EXT),k===i.SHORT&&ct&&(Q=ct.R16_SNORM_EXT)),_===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(Q=i.R8UI),k===i.UNSIGNED_SHORT&&(Q=i.R16UI),k===i.UNSIGNED_INT&&(Q=i.R32UI),k===i.BYTE&&(Q=i.R8I),k===i.SHORT&&(Q=i.R16I),k===i.INT&&(Q=i.R32I)),_===i.RG&&(k===i.FLOAT&&(Q=i.RG32F),k===i.HALF_FLOAT&&(Q=i.RG16F),k===i.UNSIGNED_BYTE&&(Q=i.RG8),k===i.UNSIGNED_SHORT&&ct&&(Q=ct.RG16_EXT),k===i.SHORT&&ct&&(Q=ct.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(Q=i.RG8UI),k===i.UNSIGNED_SHORT&&(Q=i.RG16UI),k===i.UNSIGNED_INT&&(Q=i.RG32UI),k===i.BYTE&&(Q=i.RG8I),k===i.SHORT&&(Q=i.RG16I),k===i.INT&&(Q=i.RG32I)),_===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),k===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),k===i.UNSIGNED_INT&&(Q=i.RGB32UI),k===i.BYTE&&(Q=i.RGB8I),k===i.SHORT&&(Q=i.RGB16I),k===i.INT&&(Q=i.RGB32I)),_===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),k===i.UNSIGNED_INT&&(Q=i.RGBA32UI),k===i.BYTE&&(Q=i.RGBA8I),k===i.SHORT&&(Q=i.RGBA16I),k===i.INT&&(Q=i.RGBA32I)),_===i.RGB&&(k===i.UNSIGNED_SHORT&&ct&&(Q=ct.RGB16_EXT),k===i.SHORT&&ct&&(Q=ct.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),_===i.RGBA){const nt=at?Yr:se.getTransfer(J);k===i.FLOAT&&(Q=i.RGBA32F),k===i.HALF_FLOAT&&(Q=i.RGBA16F),k===i.UNSIGNED_BYTE&&(Q=nt===pe?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&ct&&(Q=ct.RGBA16_EXT),k===i.SHORT&&ct&&(Q=ct.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function w(C,_){let k;return C?_===null||_===On||_===Bs?k=i.DEPTH24_STENCIL8:_===Tn?k=i.DEPTH32F_STENCIL8:_===Os&&(k=i.DEPTH24_STENCIL8,zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===On||_===Bs?k=i.DEPTH_COMPONENT24:_===Tn?k=i.DEPTH_COMPONENT32F:_===Os&&(k=i.DEPTH_COMPONENT16),k}function b(C,_){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ve&&C.minFilter!==Ze?Math.log2(Math.max(_.width,_.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?_.mipmaps.length:1}function L(C){const _=C.target;_.removeEventListener("dispose",L),M(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&d.delete(_)}function v(C){const _=C.target;_.removeEventListener("dispose",v),A(_)}function M(C){const _=n.get(C);if(_.__webglInit===void 0)return;const k=C.source,X=f.get(k);if(X){const J=X[_.__cacheKey];J.usedTimes--,J.usedTimes===0&&T(C),Object.keys(X).length===0&&f.delete(k)}n.remove(C)}function T(C){const _=n.get(C);i.deleteTexture(_.__webglTexture);const k=C.source,X=f.get(k);delete X[_.__cacheKey],o.memory.textures--}function A(C){const _=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(_.__webglFramebuffer[X]))for(let J=0;J<_.__webglFramebuffer[X].length;J++)i.deleteFramebuffer(_.__webglFramebuffer[X][J]);else i.deleteFramebuffer(_.__webglFramebuffer[X]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[X])}else{if(Array.isArray(_.__webglFramebuffer))for(let X=0;X<_.__webglFramebuffer.length;X++)i.deleteFramebuffer(_.__webglFramebuffer[X]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let X=0;X<_.__webglColorRenderbuffer.length;X++)_.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[X]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const k=C.textures;for(let X=0,J=k.length;X<J;X++){const at=n.get(k[X]);at.__webglTexture&&(i.deleteTexture(at.__webglTexture),o.memory.textures--),n.remove(k[X])}n.remove(C)}let P=0;function D(){P=0}function N(){return P}function z(C){P=C}function q(){const C=P;return C>=s.maxTextures&&zt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),P+=1,C}function W(C){const _=[];return _.push(C.wrapS),_.push(C.wrapT),_.push(C.wrapR||0),_.push(C.magFilter),_.push(C.minFilter),_.push(C.anisotropy),_.push(C.internalFormat),_.push(C.format),_.push(C.type),_.push(C.generateMipmaps),_.push(C.premultiplyAlpha),_.push(C.flipY),_.push(C.unpackAlignment),_.push(C.colorSpace),_.join()}function tt(C,_){const k=n.get(C);if(C.isVideoTexture&&F(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&k.__version!==C.version){const X=C.image;if(X===null)zt("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)zt("WebGLRenderer: Texture marked for update but image is incomplete");else{wt(k,C,_);return}}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+_)}function Y(C,_){const k=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){wt(k,C,_);return}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+_)}function j(C,_){const k=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){wt(k,C,_);return}e.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+_)}function it(C,_){const k=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&k.__version!==C.version){Ht(k,C,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+_)}const Rt={[Gr]:i.REPEAT,[Zn]:i.CLAMP_TO_EDGE,[aa]:i.MIRRORED_REPEAT},bt={[Ve]:i.NEAREST,[Ju]:i.NEAREST_MIPMAP_NEAREST,[er]:i.NEAREST_MIPMAP_LINEAR,[Ze]:i.LINEAR,[ho]:i.LINEAR_MIPMAP_NEAREST,[Ei]:i.LINEAR_MIPMAP_LINEAR},ae={[tf]:i.NEVER,[of]:i.ALWAYS,[ef]:i.LESS,[el]:i.LEQUAL,[nf]:i.EQUAL,[nl]:i.GEQUAL,[sf]:i.GREATER,[rf]:i.NOTEQUAL};function qt(C,_){if(_.type===Tn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Ze||_.magFilter===ho||_.magFilter===er||_.magFilter===Ei||_.minFilter===Ze||_.minFilter===ho||_.minFilter===er||_.minFilter===Ei)&&zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,Rt[_.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,Rt[_.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,Rt[_.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,bt[_.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,bt[_.minFilter]),_.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,ae[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ve||_.minFilter!==er&&_.minFilter!==Ei||_.type===Tn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function ne(C,_){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,_.addEventListener("dispose",L));const X=_.source;let J=f.get(X);J===void 0&&(J={},f.set(X,J));const at=W(_);if(at!==C.__cacheKey){J[at]===void 0&&(J[at]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),J[at].usedTimes++;const ct=J[C.__cacheKey];ct!==void 0&&(J[C.__cacheKey].usedTimes--,ct.usedTimes===0&&T(_)),C.__cacheKey=at,C.__webglTexture=J[at].texture}return k}function K(C,_,k){return Math.floor(Math.floor(C/k)/_)}function st(C,_,k,X){const at=C.updateRanges;if(at.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,k,X,_.data);else{at.sort((Ut,gt)=>Ut.start-gt.start);let ct=0;for(let Ut=1;Ut<at.length;Ut++){const gt=at[ct],ft=at[Ut],Ft=gt.start+gt.count,Bt=K(ft.start,_.width,4),Wt=K(gt.start,_.width,4);ft.start<=Ft+1&&Bt===Wt&&K(ft.start+ft.count-1,_.width,4)===Bt?gt.count=Math.max(gt.count,ft.start+ft.count-gt.start):(++ct,at[ct]=ft)}at.length=ct+1;const Q=e.getParameter(i.UNPACK_ROW_LENGTH),nt=e.getParameter(i.UNPACK_SKIP_PIXELS),ut=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Ut=0,gt=at.length;Ut<gt;Ut++){const ft=at[Ut],Ft=Math.floor(ft.start/4),Bt=Math.ceil(ft.count/4),Wt=Ft%_.width,B=Math.floor(Ft/_.width),dt=Bt,et=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Wt),e.pixelStorei(i.UNPACK_SKIP_ROWS,B),e.texSubImage2D(i.TEXTURE_2D,0,Wt,B,dt,et,k,X,_.data)}C.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Q),e.pixelStorei(i.UNPACK_SKIP_PIXELS,nt),e.pixelStorei(i.UNPACK_SKIP_ROWS,ut)}}function wt(C,_,k){let X=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(X=i.TEXTURE_3D);const J=ne(C,_),at=_.source;e.bindTexture(X,C.__webglTexture,i.TEXTURE0+k);const ct=n.get(at);if(at.version!==ct.__version||J===!0){if(e.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const et=se.getPrimaries(se.workingColorSpace),pt=_.colorSpace===qn?null:se.getPrimaries(_.colorSpace),yt=_.colorSpace===qn||et===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let nt=m(_.image,!1,s.maxTextureSize);nt=jt(_,nt);const ut=r.convert(_.format,_.colorSpace),Ut=r.convert(_.type);let gt=y(_.internalFormat,ut,Ut,_.normalized,_.colorSpace,_.isVideoTexture);qt(X,_);let ft;const Ft=_.mipmaps,Bt=_.isVideoTexture!==!0,Wt=ct.__version===void 0||J===!0,B=at.dataReady,dt=b(_,nt);if(_.isDepthTexture)gt=w(_.format===bi,_.type),Wt&&(Bt?e.texStorage2D(i.TEXTURE_2D,1,gt,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,gt,nt.width,nt.height,0,ut,Ut,null));else if(_.isDataTexture)if(Ft.length>0){Bt&&Wt&&e.texStorage2D(i.TEXTURE_2D,dt,gt,Ft[0].width,Ft[0].height);for(let et=0,pt=Ft.length;et<pt;et++)ft=Ft[et],Bt?B&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,ft.width,ft.height,ut,Ut,ft.data):e.texImage2D(i.TEXTURE_2D,et,gt,ft.width,ft.height,0,ut,Ut,ft.data);_.generateMipmaps=!1}else Bt?(Wt&&e.texStorage2D(i.TEXTURE_2D,dt,gt,nt.width,nt.height),B&&st(_,nt,ut,Ut)):e.texImage2D(i.TEXTURE_2D,0,gt,nt.width,nt.height,0,ut,Ut,nt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Bt&&Wt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,gt,Ft[0].width,Ft[0].height,nt.depth);for(let et=0,pt=Ft.length;et<pt;et++)if(ft=Ft[et],_.format!==An)if(ut!==null)if(Bt){if(B)if(_.layerUpdates.size>0){const yt=Ec(ft.width,ft.height,_.format,_.type);for(const rt of _.layerUpdates){const Ot=ft.data.subarray(rt*yt/ft.data.BYTES_PER_ELEMENT,(rt+1)*yt/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,rt,ft.width,ft.height,1,ut,Ot)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,ft.width,ft.height,nt.depth,ut,ft.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,et,gt,ft.width,ft.height,nt.depth,0,ft.data,0,0);else zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?B&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,ft.width,ft.height,nt.depth,ut,Ut,ft.data):e.texImage3D(i.TEXTURE_2D_ARRAY,et,gt,ft.width,ft.height,nt.depth,0,ut,Ut,ft.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Bt&&Wt&&e.texStorage2D(i.TEXTURE_2D,dt,gt,Ft[0].width,Ft[0].height);for(let et=0,pt=Ft.length;et<pt;et++)ft=Ft[et],_.format!==An?ut!==null?Bt?B&&e.compressedTexSubImage2D(i.TEXTURE_2D,et,0,0,ft.width,ft.height,ut,ft.data):e.compressedTexImage2D(i.TEXTURE_2D,et,gt,ft.width,ft.height,0,ft.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?B&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,ft.width,ft.height,ut,Ut,ft.data):e.texImage2D(i.TEXTURE_2D,et,gt,ft.width,ft.height,0,ut,Ut,ft.data)}else if(_.isDataArrayTexture)if(Bt){if(Wt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,gt,nt.width,nt.height,nt.depth),B)if(_.layerUpdates.size>0){const et=Ec(nt.width,nt.height,_.format,_.type);for(const pt of _.layerUpdates){const yt=nt.data.subarray(pt*et/nt.data.BYTES_PER_ELEMENT,(pt+1)*et/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,pt,nt.width,nt.height,1,ut,Ut,yt)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,ut,Ut,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,gt,nt.width,nt.height,nt.depth,0,ut,Ut,nt.data);else if(_.isData3DTexture)Bt?(Wt&&e.texStorage3D(i.TEXTURE_3D,dt,gt,nt.width,nt.height,nt.depth),B&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,ut,Ut,nt.data)):e.texImage3D(i.TEXTURE_3D,0,gt,nt.width,nt.height,nt.depth,0,ut,Ut,nt.data);else if(_.isFramebufferTexture){if(Wt)if(Bt)e.texStorage2D(i.TEXTURE_2D,dt,gt,nt.width,nt.height);else{let et=nt.width,pt=nt.height;for(let yt=0;yt<dt;yt++)e.texImage2D(i.TEXTURE_2D,yt,gt,et,pt,0,ut,Ut,null),et>>=1,pt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){const et=i.canvas;if(et.hasAttribute("layoutsubtree")||et.setAttribute("layoutsubtree","true"),nt.parentNode!==et){et.appendChild(nt),d.add(_),et.onpaint=pt=>{const yt=pt.changedElements;for(const rt of d)yt.includes(rt.image)&&(rt.needsUpdate=!0)},et.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,nt);else{const yt=i.RGBA,rt=i.RGBA,Ot=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,yt,rt,Ot,nt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ft.length>0){if(Bt&&Wt){const et=Yt(Ft[0]);e.texStorage2D(i.TEXTURE_2D,dt,gt,et.width,et.height)}for(let et=0,pt=Ft.length;et<pt;et++)ft=Ft[et],Bt?B&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,ut,Ut,ft):e.texImage2D(i.TEXTURE_2D,et,gt,ut,Ut,ft);_.generateMipmaps=!1}else if(Bt){if(Wt){const et=Yt(nt);e.texStorage2D(i.TEXTURE_2D,dt,gt,et.width,et.height)}B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ut,Ut,nt)}else e.texImage2D(i.TEXTURE_2D,0,gt,ut,Ut,nt);p(_)&&S(X),ct.__version=at.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function Ht(C,_,k){if(_.image.length!==6)return;const X=ne(C,_),J=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+k);const at=n.get(J);if(J.version!==at.__version||X===!0){e.activeTexture(i.TEXTURE0+k);const ct=se.getPrimaries(se.workingColorSpace),Q=_.colorSpace===qn?null:se.getPrimaries(_.colorSpace),nt=_.colorSpace===qn||ct===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);const ut=_.isCompressedTexture||_.image[0].isCompressedTexture,Ut=_.image[0]&&_.image[0].isDataTexture,gt=[];for(let rt=0;rt<6;rt++)!ut&&!Ut?gt[rt]=m(_.image[rt],!0,s.maxCubemapSize):gt[rt]=Ut?_.image[rt].image:_.image[rt],gt[rt]=jt(_,gt[rt]);const ft=gt[0],Ft=r.convert(_.format,_.colorSpace),Bt=r.convert(_.type),Wt=y(_.internalFormat,Ft,Bt,_.normalized,_.colorSpace),B=_.isVideoTexture!==!0,dt=at.__version===void 0||X===!0,et=J.dataReady;let pt=b(_,ft);qt(i.TEXTURE_CUBE_MAP,_);let yt;if(ut){B&&dt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,Wt,ft.width,ft.height);for(let rt=0;rt<6;rt++){yt=gt[rt].mipmaps;for(let Ot=0;Ot<yt.length;Ot++){const Dt=yt[Ot];_.format!==An?Ft!==null?B?et&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ot,0,0,Dt.width,Dt.height,Ft,Dt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ot,Wt,Dt.width,Dt.height,0,Dt.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ot,0,0,Dt.width,Dt.height,Ft,Bt,Dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ot,Wt,Dt.width,Dt.height,0,Ft,Bt,Dt.data)}}}else{if(yt=_.mipmaps,B&&dt){yt.length>0&&pt++;const rt=Yt(gt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,pt,Wt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(Ut){B?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,gt[rt].width,gt[rt].height,Ft,Bt,gt[rt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Wt,gt[rt].width,gt[rt].height,0,Ft,Bt,gt[rt].data);for(let Ot=0;Ot<yt.length;Ot++){const Se=yt[Ot].image[rt].image;B?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ot+1,0,0,Se.width,Se.height,Ft,Bt,Se.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ot+1,Wt,Se.width,Se.height,0,Ft,Bt,Se.data)}}else{B?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Ft,Bt,gt[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Wt,Ft,Bt,gt[rt]);for(let Ot=0;Ot<yt.length;Ot++){const Dt=yt[Ot];B?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ot+1,0,0,Ft,Bt,Dt.image[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ot+1,Wt,Ft,Bt,Dt.image[rt])}}}p(_)&&S(i.TEXTURE_CUBE_MAP),at.__version=J.version,_.onUpdate&&_.onUpdate(_)}C.__version=_.version}function Et(C,_,k,X,J,at){const ct=r.convert(k.format,k.colorSpace),Q=r.convert(k.type),nt=y(k.internalFormat,ct,Q,k.normalized,k.colorSpace),ut=n.get(_),Ut=n.get(k);if(Ut.__renderTarget=_,!ut.__hasExternalTextures){const gt=Math.max(1,_.width>>at),ft=Math.max(1,_.height>>at);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,at,nt,gt,ft,_.depth,0,ct,Q,null):e.texImage2D(J,at,nt,gt,ft,0,ct,Q,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),ee(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,J,Ut.__webglTexture,0,Zt(_)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,J,Ut.__webglTexture,at),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Xt(C,_,k){if(i.bindRenderbuffer(i.RENDERBUFFER,C),_.depthBuffer){const X=_.depthTexture,J=X&&X.isDepthTexture?X.type:null,at=w(_.stencilBuffer,J),ct=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ee(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Zt(_),at,_.width,_.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,Zt(_),at,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,at,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,C)}else{const X=_.textures;for(let J=0;J<X.length;J++){const at=X[J],ct=r.convert(at.format,at.colorSpace),Q=r.convert(at.type),nt=y(at.internalFormat,ct,Q,at.normalized,at.colorSpace);ee(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Zt(_),nt,_.width,_.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,Zt(_),nt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,nt,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ce(C,_,k){const X=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const J=n.get(_.depthTexture);if(J.__renderTarget=_,(!J.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),X){if(J.__webglInit===void 0&&(J.__webglInit=!0,_.depthTexture.addEventListener("dispose",L)),J.__webglTexture===void 0){J.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),qt(i.TEXTURE_CUBE_MAP,_.depthTexture);const ut=r.convert(_.depthTexture.format),Ut=r.convert(_.depthTexture.type);let gt;_.depthTexture.format===Qn?gt=i.DEPTH_COMPONENT24:_.depthTexture.format===bi&&(gt=i.DEPTH24_STENCIL8);for(let ft=0;ft<6;ft++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,gt,_.width,_.height,0,ut,Ut,null)}}else tt(_.depthTexture,0);const at=J.__webglTexture,ct=Zt(_),Q=X?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,nt=_.depthTexture.format===bi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Qn)ee(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,Q,at,0,ct):i.framebufferTexture2D(i.FRAMEBUFFER,nt,Q,at,0);else if(_.depthTexture.format===bi)ee(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,Q,at,0,ct):i.framebufferTexture2D(i.FRAMEBUFFER,nt,Q,at,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Vt(C){const _=n.get(C),k=C.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==C.depthTexture){const X=C.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),X){const J=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,X.removeEventListener("dispose",J)};X.addEventListener("dispose",J),_.__depthDisposeCallback=J}_.__boundDepthTexture=X}if(C.depthTexture&&!_.__autoAllocateDepthBuffer)if(k)for(let X=0;X<6;X++)Ce(_.__webglFramebuffer[X],C,X);else{const X=C.texture.mipmaps;X&&X.length>0?Ce(_.__webglFramebuffer[0],C,0):Ce(_.__webglFramebuffer,C,0)}else if(k){_.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[X]),_.__webglDepthbuffer[X]===void 0)_.__webglDepthbuffer[X]=i.createRenderbuffer(),Xt(_.__webglDepthbuffer[X],C,!1);else{const J=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=_.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,at)}}else{const X=C.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Xt(_.__webglDepthbuffer,C,!1);else{const J=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,at)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ie(C,_,k){const X=n.get(C);_!==void 0&&Et(X.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Vt(C)}function $(C){const _=C.texture,k=n.get(C),X=n.get(_);C.addEventListener("dispose",v);const J=C.textures,at=C.isWebGLCubeRenderTarget===!0,ct=J.length>1;if(ct||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=_.version,o.memory.textures++),at){k.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer[Q]=[];for(let nt=0;nt<_.mipmaps.length;nt++)k.__webglFramebuffer[Q][nt]=i.createFramebuffer()}else k.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer=[];for(let Q=0;Q<_.mipmaps.length;Q++)k.__webglFramebuffer[Q]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(ct)for(let Q=0,nt=J.length;Q<nt;Q++){const ut=n.get(J[Q]);ut.__webglTexture===void 0&&(ut.__webglTexture=i.createTexture(),o.memory.textures++)}if(C.samples>0&&ee(C)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Q=0;Q<J.length;Q++){const nt=J[Q];k.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[Q]);const ut=r.convert(nt.format,nt.colorSpace),Ut=r.convert(nt.type),gt=y(nt.internalFormat,ut,Ut,nt.normalized,nt.colorSpace,C.isXRRenderTarget===!0),ft=Zt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,gt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,k.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Xt(k.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(at){e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),qt(i.TEXTURE_CUBE_MAP,_);for(let Q=0;Q<6;Q++)if(_.mipmaps&&_.mipmaps.length>0)for(let nt=0;nt<_.mipmaps.length;nt++)Et(k.__webglFramebuffer[Q][nt],C,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,nt);else Et(k.__webglFramebuffer[Q],C,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);p(_)&&S(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ct){for(let Q=0,nt=J.length;Q<nt;Q++){const ut=J[Q],Ut=n.get(ut);let gt=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(gt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(gt,Ut.__webglTexture),qt(gt,ut),Et(k.__webglFramebuffer,C,ut,i.COLOR_ATTACHMENT0+Q,gt,0),p(ut)&&S(gt)}e.unbindTexture()}else{let Q=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Q=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Q,X.__webglTexture),qt(Q,_),_.mipmaps&&_.mipmaps.length>0)for(let nt=0;nt<_.mipmaps.length;nt++)Et(k.__webglFramebuffer[nt],C,_,i.COLOR_ATTACHMENT0,Q,nt);else Et(k.__webglFramebuffer,C,_,i.COLOR_ATTACHMENT0,Q,0);p(_)&&S(Q),e.unbindTexture()}C.depthBuffer&&Vt(C)}function lt(C){const _=C.textures;for(let k=0,X=_.length;k<X;k++){const J=_[k];if(p(J)){const at=R(C),ct=n.get(J).__webglTexture;e.bindTexture(at,ct),S(at),e.unbindTexture()}}}const ht=[],Nt=[];function re(C){if(C.samples>0){if(ee(C)===!1){const _=C.textures,k=C.width,X=C.height;let J=i.COLOR_BUFFER_BIT;const at=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=n.get(C),Q=_.length>1;if(Q)for(let ut=0;ut<_.length;ut++)e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer);const nt=C.texture.mipmaps;nt&&nt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let ut=0;ut<_.length;ut++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ct.__webglColorRenderbuffer[ut]);const Ut=n.get(_[ut]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ut,0)}i.blitFramebuffer(0,0,k,X,0,0,k,X,J,i.NEAREST),l===!0&&(ht.length=0,Nt.length=0,ht.push(i.COLOR_ATTACHMENT0+ut),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(ht.push(at),Nt.push(at),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Nt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ht))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let ut=0;ut<_.length;ut++){e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,ct.__webglColorRenderbuffer[ut]);const Ut=n.get(_[ut]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ct.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.TEXTURE_2D,Ut,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){const _=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Zt(C){return Math.min(s.maxSamples,C.samples)}function ee(C){const _=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function F(C){const _=o.render.frame;h.get(C)!==_&&(h.set(C,_),C.update())}function jt(C,_){const k=C.colorSpace,X=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==Xr&&k!==qn&&(se.getTransfer(k)===pe?(X!==An||J!==an)&&zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):le("WebGLTextures: Unsupported texture color space:",k)),_}function Yt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=D,this.getTextureUnits=N,this.setTextureUnits=z,this.setTexture2D=tt,this.setTexture2DArray=Y,this.setTexture3D=j,this.setTextureCube=it,this.rebindTextures=ie,this.setupRenderTarget=$,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=ee,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function U_(i,t){function e(n,s=qn){let r;const o=se.getTransfer(s);if(n===an)return i.UNSIGNED_BYTE;if(n===Ka)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ja)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ph)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Lh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Rh)return i.BYTE;if(n===Ch)return i.SHORT;if(n===Os)return i.UNSIGNED_SHORT;if(n===Za)return i.INT;if(n===On)return i.UNSIGNED_INT;if(n===Tn)return i.FLOAT;if(n===Bn)return i.HALF_FLOAT;if(n===Dh)return i.ALPHA;if(n===Ih)return i.RGB;if(n===An)return i.RGBA;if(n===Qn)return i.DEPTH_COMPONENT;if(n===bi)return i.DEPTH_STENCIL;if(n===$a)return i.RED;if(n===Qa)return i.RED_INTEGER;if(n===Ri)return i.RG;if(n===ja)return i.RG_INTEGER;if(n===tl)return i.RGBA_INTEGER;if(n===Fr||n===Or||n===Br||n===zr)if(o===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Fr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Fr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Or)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===la||n===ca||n===ha||n===ua)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===la)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ca)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ha)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ua)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fa||n===da||n===pa||n===ma||n===ga||n===Vr||n===_a)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===fa||n===da)return o===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===pa)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ma)return r.COMPRESSED_R11_EAC;if(n===ga)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Vr)return r.COMPRESSED_RG11_EAC;if(n===_a)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===xa||n===va||n===Ma||n===Sa||n===ya||n===Ea||n===ba||n===wa||n===Ta||n===Aa||n===Ra||n===Ca||n===Pa||n===La)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===xa)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===va)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ma)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Sa)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ya)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ea)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ba)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wa)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ta)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Aa)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ra)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ca)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Pa)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===La)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Da||n===Ia||n===Na)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Da)return o===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ia)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Na)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ua||n===Fa||n===Wr||n===Oa)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ua)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Fa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Oa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Bs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const F_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,O_=`
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

}`;class B_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Vh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Cn({vertexShader:F_,fragmentShader:O_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Qt(new jr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class z_ extends di{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null;const x=typeof XRWebGLBinding<"u",m=new B_,p={},S=e.getContextAttributes();let R=null,y=null;const w=[],b=[],L=new vt;let v=null,M=null;const T=new un;T.viewport=new Ae;const A=new un;A.viewport=new Ae;const P=[T,A],D=new Xd;let N=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let st=w[K];return st===void 0&&(st=new xo,w[K]=st),st.getTargetRaySpace()},this.getControllerGrip=function(K){let st=w[K];return st===void 0&&(st=new xo,w[K]=st),st.getGripSpace()},this.getHand=function(K){let st=w[K];return st===void 0&&(st=new xo,w[K]=st),st.getHandSpace()};function q(K){const st=b.indexOf(K.inputSource);if(st===-1)return;const wt=w[st];wt!==void 0&&(wt.update(K.inputSource,K.frame,c||o),wt.dispatchEvent({type:K.type,data:K.inputSource}))}function W(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",tt);for(let K=0;K<w.length;K++){const st=b[K];st!==null&&(b[K]=null,w[K].disconnect(st))}N=null,z=null,m.reset();for(const K in p)delete p[K];if(t.setRenderTarget(R),f=null,u=null,d=null,s=null,y=null,ne.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(L.width,L.height,!1),M!==null){const K=M.camera;K.fov=M.fov,K.zoom=M.zoom,K.updateProjectionMatrix(),M=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(R=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",W),s.addEventListener("inputsourceschange",tt),S.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(L),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,Ht=null,Et=null;S.depth&&(Et=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,wt=S.stencil?bi:Qn,Ht=S.stencil?Bs:On);const Xt={colorFormat:e.RGBA8,depthFormat:Et,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Xt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new Rn(u.textureWidth,u.textureHeight,{format:An,type:an,depthTexture:new ks(u.textureWidth,u.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const wt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,wt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Rn(f.framebufferWidth,f.framebufferHeight,{format:An,type:an,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),ne.setContext(s),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function tt(K){for(let st=0;st<K.removed.length;st++){const wt=K.removed[st],Ht=b.indexOf(wt);Ht>=0&&(b[Ht]=null,w[Ht].disconnect(wt))}for(let st=0;st<K.added.length;st++){const wt=K.added[st];let Ht=b.indexOf(wt);if(Ht===-1){for(let Xt=0;Xt<w.length;Xt++)if(Xt>=b.length){b.push(wt),Ht=Xt;break}else if(b[Xt]===null){b[Xt]=wt,Ht=Xt;break}if(Ht===-1)break}const Et=w[Ht];Et&&Et.connect(wt)}}const Y=new U,j=new U;function it(K,st,wt){Y.setFromMatrixPosition(st.matrixWorld),j.setFromMatrixPosition(wt.matrixWorld);const Ht=Y.distanceTo(j),Et=st.projectionMatrix.elements,Xt=wt.projectionMatrix.elements,Ce=Et[14]/(Et[10]-1),Vt=Et[14]/(Et[10]+1),ie=(Et[9]+1)/Et[5],$=(Et[9]-1)/Et[5],lt=(Et[8]-1)/Et[0],ht=(Xt[8]+1)/Xt[0],Nt=Ce*lt,re=Ce*ht,Zt=Ht/(-lt+ht),ee=Zt*-lt;if(st.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ee),K.translateZ(Zt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Et[10]===-1)K.projectionMatrix.copy(st.projectionMatrix),K.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const F=Ce+Zt,jt=Vt+Zt,Yt=Nt-ee,C=re+(Ht-ee),_=ie*Vt/jt*F,k=$*Vt/jt*F;K.projectionMatrix.makePerspective(Yt,C,_,k,F,jt),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Rt(K,st){st===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(st.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let st=K.near,wt=K.far;m.texture!==null&&(m.depthNear>0&&(st=m.depthNear),m.depthFar>0&&(wt=m.depthFar)),D.near=A.near=T.near=st,D.far=A.far=T.far=wt,(N!==D.near||z!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),N=D.near,z=D.far),D.layers.mask=K.layers.mask|6,T.layers.mask=D.layers.mask&-5,A.layers.mask=D.layers.mask&-3;const Ht=K.parent,Et=D.cameras;Rt(D,Ht);for(let Xt=0;Xt<Et.length;Xt++)Rt(Et[Xt],Ht);Et.length===2?it(D,T,A):D.projectionMatrix.copy(T.projectionMatrix),M===null&&K.isPerspectiveCamera&&(M={camera:K,fov:K.fov,zoom:K.zoom}),bt(K,D,Ht)};function bt(K,st,wt){wt===null?K.matrix.copy(st.matrixWorld):(K.matrix.copy(wt.matrixWorld),K.matrix.invert(),K.matrix.multiply(st.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(st.projectionMatrix),K.projectionMatrixInverse.copy(st.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Hs*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(K){return p[K]};let ae=null;function qt(K,st){if(h=st.getViewerPose(c||o),g=st,h!==null){const wt=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Ht=!1;wt.length!==D.cameras.length&&(D.cameras.length=0,Ht=!0);for(let Vt=0;Vt<wt.length;Vt++){const ie=wt[Vt];let $=null;if(f!==null)$=f.getViewport(ie);else{const ht=d.getViewSubImage(u,ie);$=ht.viewport,Vt===0&&(t.setRenderTargetTextures(y,ht.colorTexture,ht.depthStencilTexture),t.setRenderTarget(y))}let lt=P[Vt];lt===void 0&&(lt=new un,lt.layers.enable(Vt),lt.viewport=new Ae,P[Vt]=lt),lt.matrix.fromArray(ie.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(ie.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set($.x,$.y,$.width,$.height),Vt===0&&(D.matrix.copy(lt.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ht===!0&&D.cameras.push(lt)}const Et=s.enabledFeatures;if(Et&&Et.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=n.getBinding();const Vt=d.getDepthInformation(wt[0]);Vt&&Vt.isValid&&Vt.texture&&m.init(Vt,s.renderState)}if(Et&&Et.includes("camera-access")&&x){t.state.unbindTexture(),d=n.getBinding();for(let Vt=0;Vt<wt.length;Vt++){const ie=wt[Vt].camera;if(ie){let $=p[ie];$||($=new Vh,p[ie]=$);const lt=d.getCameraImage(ie);$.sourceTexture=lt}}}}for(let wt=0;wt<w.length;wt++){const Ht=b[wt],Et=w[wt];Ht!==null&&Et!==void 0&&Et.update(Ht,st,c||o)}ae&&ae(K,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),g=null}const ne=new iu;ne.setAnimationLoop(qt),this.setAnimationLoop=function(K){ae=K},this.dispose=function(){}}}const H_=new he,hu=new Gt;hu.set(-1,0,0,0,1,0,0,0,1);function k_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,tu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,R,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,R):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===tn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===tn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=t.get(p),R=S.envMap,y=S.envMapRotation;R&&(m.envMap.value=R,m.envMapRotation.value.setFromMatrix4(H_.makeRotationFromEuler(y)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(hu),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,R){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=R*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function G_(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,w){const b=w.program;n.uniformBlockBinding(y,b)}function c(y,w){let b=s[y.id];b===void 0&&(m(y),b=h(y),s[y.id]=b,y.addEventListener("dispose",S));const L=w.program;n.updateUBOMapping(y,L);const v=t.render.frame;r[y.id]!==v&&(u(y),r[y.id]=v)}function h(y){const w=d();y.__bindingPointIndex=w;const b=i.createBuffer(),L=y.__size,v=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,L,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,b),b}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return le("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const w=s[y.id],b=y.uniforms,L=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let v=0,M=b.length;v<M;v++){const T=b[v];if(Array.isArray(T))for(let A=0,P=T.length;A<P;A++)f(T[A],v,A,L);else f(T,v,0,L)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,w,b,L){if(x(y,w,b,L)===!0){const v=y.__offset,M=y.value;if(Array.isArray(M)){let T=0;for(let A=0;A<M.length;A++){const P=M[A],D=p(P);g(P,y.__data,T),typeof P!="number"&&typeof P!="boolean"&&!P.isMatrix3&&!ArrayBuffer.isView(P)&&(T+=D.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(M,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,y.__data)}}function g(y,w,b){typeof y=="number"||typeof y=="boolean"?w[0]=y:y.isMatrix3?(w[0]=y.elements[0],w[1]=y.elements[1],w[2]=y.elements[2],w[3]=0,w[4]=y.elements[3],w[5]=y.elements[4],w[6]=y.elements[5],w[7]=0,w[8]=y.elements[6],w[9]=y.elements[7],w[10]=y.elements[8],w[11]=0):ArrayBuffer.isView(y)?w.set(new y.constructor(y.buffer,y.byteOffset,w.length)):y.toArray(w,b)}function x(y,w,b,L){const v=y.value,M=w+"_"+b;if(L[M]===void 0)return typeof v=="number"||typeof v=="boolean"?L[M]=v:ArrayBuffer.isView(v)?L[M]=v.slice():L[M]=v.clone(),!0;{const T=L[M];if(typeof v=="number"||typeof v=="boolean"){if(T!==v)return L[M]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(T.equals(v)===!1)return T.copy(v),!0}}return!1}function m(y){const w=y.uniforms;let b=0;const L=16;for(let M=0,T=w.length;M<T;M++){const A=Array.isArray(w[M])?w[M]:[w[M]];for(let P=0,D=A.length;P<D;P++){const N=A[P],z=Array.isArray(N.value)?N.value:[N.value];for(let q=0,W=z.length;q<W;q++){const tt=z[q],Y=p(tt),j=b%L,it=j%Y.boundary,Rt=j+it;b+=it,Rt!==0&&L-Rt<Y.storage&&(b+=L-Rt),N.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=b,b+=Y.storage}}}const v=b%L;return v>0&&(b+=L-v),y.__size=b,y.__cache={},this}function p(y){const w={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(w.boundary=4,w.storage=4):y.isVector2?(w.boundary=8,w.storage=8):y.isVector3||y.isColor?(w.boundary=16,w.storage=12):y.isVector4?(w.boundary=16,w.storage=16):y.isMatrix3?(w.boundary=48,w.storage=48):y.isMatrix4?(w.boundary=64,w.storage=64):y.isTexture?zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(w.boundary=16,w.storage=y.byteLength):zt("WebGLRenderer: Unsupported uniform value type.",y),w}function S(y){const w=y.target;w.removeEventListener("dispose",S);const b=o.indexOf(w.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function R(){for(const y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:R}}const V_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let In=null;function W_(){return In===null&&(In=new Hh(V_,16,16,Ri,Bn),In.name="DFG_LUT",In.minFilter=Ze,In.magFilter=Ze,In.wrapS=Zn,In.wrapT=Zn,In.generateMipmaps=!1,In.needsUpdate=!0),In}class X_{constructor(t={}){const{canvas:e=cf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=an}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;const x=f,m=new Set([tl,ja,Qa]),p=new Set([an,On,Os,Bs,Ka,Ja]),S=new Uint32Array(4),R=new Int32Array(4),y=new U;let w=null,b=null;const L=[],v=[];let M=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let A=!1,P=null,D=null,N=null,z=null;this._outputColorSpace=nn;let q=0,W=0,tt=null,Y=-1,j=null;const it=new Ae,Rt=new Ae;let bt=null;const ae=new Lt(0);let qt=0,ne=e.width,K=e.height,st=1,wt=null,Ht=null;const Et=new Ae(0,0,ne,K),Xt=new Ae(0,0,ne,K);let Ce=!1;const Vt=new cl;let ie=!1,$=!1;const lt=new he,ht=new U,Nt=new Ae,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Zt=!1;function ee(){return tt===null?st:1}let F=n;function jt(E,O){return e.getContext(E,O)}let Yt,C,_,k,X,J,at,ct,Q,nt,ut,Ut,gt,ft,Ft,Bt,Wt,B,dt,et,pt,yt,rt;try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ya}`),e.addEventListener("webglcontextlost",Se,!1),e.addEventListener("webglcontextrestored",ue,!1),e.addEventListener("webglcontextcreationerror",_n,!1),F===null){const O="webgl2";if(F=jt(O,E),F===null)throw jt(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ot()}catch(E){throw e.removeEventListener("webglcontextlost",Se,!1),e.removeEventListener("webglcontextrestored",ue,!1),e.removeEventListener("webglcontextcreationerror",_n,!1),le("WebGLRenderer: "+E.message),E}function Ot(){Yt=new Wm(F),Yt.init(),pt=new U_(F,Yt),C=new Nm(F,Yt,t,pt),_=new I_(F,Yt),C.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),D=F.createFramebuffer(),N=F.createFramebuffer(),z=F.createFramebuffer(),k=new qm(F),X=new v_,J=new N_(F,Yt,_,X,C,pt,k),at=new Vm(T),ct=new Kd(F),yt=new Dm(F,ct),Q=new Xm(F,ct,k,yt),nt=new Km(F,Q,ct,yt,k),B=new Zm(F,C,J),Ft=new Um(X),ut=new x_(T,at,Yt,C,yt,Ft),Ut=new k_(T,X),gt=new S_,ft=new A_(Yt),Wt=new Lm(T,at,_,nt,g,l),Bt=new D_(T,nt,C),rt=new G_(F,k,C,_),dt=new Im(F,Yt,k),et=new Ym(F,Yt,k),k.programs=ut.programs,T.capabilities=C,T.extensions=Yt,T.properties=X,T.renderLists=gt,T.shadowMap=Bt,T.state=_,T.info=k}x!==an&&(M=new $m(x,e.width,e.height,a,s,r));const Dt=new z_(T,F);this.xr=Dt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const E=Yt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Yt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return st},this.setPixelRatio=function(E){E!==void 0&&(st=E,this.setSize(ne,K,!1))},this.getSize=function(E){return E.set(ne,K)},this.setSize=function(E,O,Z=!0){if(Dt.isPresenting){zt("WebGLRenderer: Can't change size while VR device is presenting.");return}ne=E,K=O,e.width=Math.floor(E*st),e.height=Math.floor(O*st),Z===!0&&(e.style.width=E+"px",e.style.height=O+"px"),M!==null&&M.setSize(e.width,e.height),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(ne*st,K*st).floor()},this.setDrawingBufferSize=function(E,O,Z){ne=E,K=O,st=Z,e.width=Math.floor(E*Z),e.height=Math.floor(O*Z),this.setViewport(0,0,E,O)},this.setEffects=function(E){if(x===an){le("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let O=0;O<E.length;O++)if(E[O].isOutputPass===!0){zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(it)},this.getViewport=function(E){return E.copy(Et)},this.setViewport=function(E,O,Z,G){E.isVector4?Et.set(E.x,E.y,E.z,E.w):Et.set(E,O,Z,G),_.viewport(it.copy(Et).multiplyScalar(st).round())},this.getScissor=function(E){return E.copy(Xt)},this.setScissor=function(E,O,Z,G){E.isVector4?Xt.set(E.x,E.y,E.z,E.w):Xt.set(E,O,Z,G),_.scissor(Rt.copy(Xt).multiplyScalar(st).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(E){_.setScissorTest(Ce=E)},this.setOpaqueSort=function(E){wt=E},this.setTransparentSort=function(E){Ht=E},this.getClearColor=function(E){return E.copy(Wt.getClearColor())},this.setClearColor=function(){Wt.setClearColor(...arguments)},this.getClearAlpha=function(){return Wt.getClearAlpha()},this.setClearAlpha=function(){Wt.setClearAlpha(...arguments)},this.clear=function(E=!0,O=!0,Z=!0){let G=0;if(E){let V=!1;if(tt!==null){const St=tt.texture.format;V=m.has(St)}if(V){const St=tt.texture.type,At=p.has(St),Mt=Wt.getClearColor(),Ct=Wt.getClearAlpha(),It=Mt.r,Kt=Mt.g,te=Mt.b;At?(S[0]=It,S[1]=Kt,S[2]=te,S[3]=Ct,F.clearBufferuiv(F.COLOR,0,S)):(R[0]=It,R[1]=Kt,R[2]=te,R[3]=Ct,F.clearBufferiv(F.COLOR,0,R))}else G|=F.COLOR_BUFFER_BIT}O&&(G|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(G|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&F.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),P=E},this.dispose=function(){e.removeEventListener("webglcontextlost",Se,!1),e.removeEventListener("webglcontextrestored",ue,!1),e.removeEventListener("webglcontextcreationerror",_n,!1),Wt.dispose(),gt.dispose(),ft.dispose(),X.dispose(),at.dispose(),nt.dispose(),yt.dispose(),rt.dispose(),ut.dispose(),Dt.dispose(),Dt.removeEventListener("sessionstart",Al),Dt.removeEventListener("sessionend",Rl),pi.stop()};function Se(E){E.preventDefault(),kl("WebGLRenderer: Context Lost."),A=!0}function ue(){kl("WebGLRenderer: Context Restored."),A=!1;const E=k.autoReset,O=Bt.enabled,Z=Bt.autoUpdate,G=Bt.needsUpdate,V=Bt.type;Ot(),k.autoReset=E,Bt.enabled=O,Bt.autoUpdate=Z,Bt.needsUpdate=G,Bt.type=V}function _n(E){le("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Pn(E){const O=E.target;O.removeEventListener("dispose",Pn),Su(O)}function Su(E){yu(E),X.remove(E)}function yu(E){const O=X.get(E).programs;O!==void 0&&(O.forEach(function(Z){ut.releaseProgram(Z)}),E.isShaderMaterial&&ut.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,Z,G,V,St){O===null&&(O=re);const At=V.isMesh&&V.matrixWorld.determinantAffine()<0,Mt=wu(E,O,Z,G,V);_.setMaterial(G,At);let Ct=Z.index,It=1;if(G.wireframe===!0){if(Ct=Q.getWireframeAttribute(Z),Ct===void 0)return;It=2}const Kt=Z.drawRange,te=Z.attributes.position;let Pt=Kt.start*It,fe=(Kt.start+Kt.count)*It;St!==null&&(Pt=Math.max(Pt,St.start*It),fe=Math.min(fe,(St.start+St.count)*It)),Ct!==null?(Pt=Math.max(Pt,0),fe=Math.min(fe,Ct.count)):te!=null&&(Pt=Math.max(Pt,0),fe=Math.min(fe,te.count));const De=fe-Pt;if(De<0||De===1/0)return;yt.setup(V,G,Mt,Z,Ct);let Ee,Me=dt;if(Ct!==null&&(Ee=ct.get(Ct),Me=et,Me.setIndex(Ee)),V.isMesh)G.wireframe===!0?(_.setLineWidth(G.wireframeLinewidth*ee()),Me.setMode(F.LINES)):Me.setMode(F.TRIANGLES);else if(V.isLine){let We=G.linewidth;We===void 0&&(We=1),_.setLineWidth(We*ee()),V.isLineSegments?Me.setMode(F.LINES):V.isLineLoop?Me.setMode(F.LINE_LOOP):Me.setMode(F.LINE_STRIP)}else V.isPoints?Me.setMode(F.POINTS):V.isSprite&&Me.setMode(F.TRIANGLES);if(V.isBatchedMesh)if(Yt.get("WEBGL_multi_draw"))Me.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const We=V._multiDrawStarts,Tt=V._multiDrawCounts,Je=V._multiDrawCount,oe=Ct?ct.get(Ct).bytesPerElement:1,ln=X.get(G).currentProgram.getUniforms();for(let Ln=0;Ln<Je;Ln++)ln.setValue(F,"_gl_DrawID",Ln),Me.render(We[Ln]/oe,Tt[Ln])}else if(V.isInstancedMesh)Me.renderInstances(Pt,De,V.count);else if(Z.isInstancedBufferGeometry){const We=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Tt=Math.min(Z.instanceCount,We);Me.renderInstances(Pt,De,Tt)}else Me.render(Pt,De)};function Tl(E,O,Z,G){P!==null&&E.isNodeMaterial&&P.setObject(G,E),ie===!0&&Ft.setState(E,Z,!1),E.transparent===!0&&E.side===pn&&E.forceSinglePass===!1?(E.side=tn,E.needsUpdate=!0,tr(E,O,G),E.side=Ti,E.needsUpdate=!0,tr(E,O,G),E.side=pn):tr(E,O,G)}this.compile=function(E,O,Z=null){Z===null&&(Z=E),P!==null&&P.renderStart(E,O,Z),b=ft.get(Z),b.init(O),v.push(b),Z.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(b.pushLight(V),V.castShadow&&b.pushShadow(V))}),E!==Z&&E.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(b.pushLight(V),V.castShadow&&b.pushShadow(V))}),b.setupLights(),P!==null&&P.updateLights(b.state.lightsArray),$=this.localClippingEnabled,ie=Ft.init(this.clippingPlanes,$),ie===!0&&Ft.setGlobalState(this.clippingPlanes,O),P!==null&&Bt.render(b.state.shadowsArray,Z,O);const G=new Set;return E.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const St=V.material;if(St)if(Array.isArray(St))for(let At=0;At<St.length;At++){const Mt=St[At];Tl(Mt,Z,O,V),G.add(Mt)}else Tl(St,Z,O,V),G.add(St)}),b=v.pop(),P!==null&&P.renderEnd(),G},this.compileAsync=function(E,O,Z=null){const G=this.compile(E,O,Z);return new Promise(V=>{function St(){if(G.forEach(function(At){const Ct=X.get(At).currentProgram;(Ct===void 0||Ct.isReady())&&G.delete(At)}),G.size===0){V(E);return}setTimeout(St,10)}Yt.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let oo=null;function Eu(E){oo&&oo(E)}function Al(){pi.stop()}function Rl(){pi.start()}const pi=new iu;pi.setAnimationLoop(Eu),typeof self<"u"&&pi.setContext(self),this.setAnimationLoop=function(E){oo=E,Dt.setAnimationLoop(E),E===null?pi.stop():pi.start()},Dt.addEventListener("sessionstart",Al),Dt.addEventListener("sessionend",Rl),this.render=function(E,O){if(window.__galleryCaptureScene)return;if(O!==void 0&&O.isCamera!==!0){le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;P!==null&&P.renderStart(E,O);const Z=Dt.enabled===!0&&Dt.isPresenting===!0,G=M!==null&&(tt===null||Z)&&M.begin(T,tt);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Dt.enabled===!0&&Dt.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(Dt.cameraAutoUpdate===!0&&Dt.updateCamera(O),O=Dt.getCamera()),E.isScene===!0&&E.onBeforeRender(T,E,O,tt),b=ft.get(E,v.length),b.init(O),b.state.textureUnits=J.getTextureUnits(),v.push(b),lt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Vt.setFromProjectionMatrix(lt,Un,O.reversedDepth),$=this.localClippingEnabled,ie=Ft.init(this.clippingPlanes,$),w=gt.get(E,L.length),w.init(),L.push(w),Dt.enabled===!0&&Dt.isPresenting===!0){const At=T.xr.getDepthSensingMesh();At!==null&&ao(At,O,-1/0,T.sortObjects)}ao(E,O,0,T.sortObjects),w.finish(),P!==null&&P.updateLights(b.state.lightsArray),T.sortObjects===!0&&w.sort(wt,Ht),Zt=Dt.enabled===!1||Dt.isPresenting===!1||Dt.hasDepthSensing()===!1,Zt&&Wt.addToRenderList(w,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ie===!0&&Ft.beginShadows();const V=b.state.shadowsArray;if(Bt.render(V,E,O),ie===!0&&Ft.endShadows(),(G&&M.hasRenderPass())===!1){const At=w.opaque,Mt=w.transmissive;if(b.setupLights(),O.isArrayCamera){const Ct=O.cameras;if(Mt.length>0)for(let It=0,Kt=Ct.length;It<Kt;It++){const te=Ct[It];Pl(At,Mt,E,te)}Zt&&Wt.render(E);for(let It=0,Kt=Ct.length;It<Kt;It++){const te=Ct[It];Cl(w,E,te,te.viewport)}}else Mt.length>0&&Pl(At,Mt,E,O),Zt&&Wt.render(E),Cl(w,E,O)}tt!==null&&W===0&&(J.updateMultisampleRenderTarget(tt),J.updateRenderTargetMipmap(tt)),G&&M.end(T),E.isScene===!0&&E.onAfterRender(T,E,O),yt.resetDefaultState(),Y=-1,j=null,v.pop(),v.length>0?(b=v[v.length-1],J.setTextureUnits(b.state.textureUnits),ie===!0&&Ft.setGlobalState(T.clippingPlanes,b.state.camera)):b=null,L.pop(),L.length>0?w=L[L.length-1]:w=null,P!==null&&P.renderEnd()};function ao(E,O,Z,G){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)Z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLightProbeGrid)b.pushLightProbeGrid(E);else if(E.isLight)b.pushLight(E),E.castShadow&&b.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(Vt)){G&&Nt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(lt);const At=nt.update(E),Mt=E.material;Mt.visible&&w.push(E,At,Mt,Z,Nt.z,null,O)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(Vt))){const At=nt.update(E),Mt=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Nt.copy(E.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),Nt.copy(At.boundingSphere.center)),Nt.applyMatrix4(E.matrixWorld).applyMatrix4(lt)),Array.isArray(Mt)){const Ct=At.groups;for(let It=0,Kt=Ct.length;It<Kt;It++){const te=Ct[It],Pt=Mt[te.materialIndex];Pt&&Pt.visible&&w.push(E,At,Pt,Z,Nt.z,te,O)}}else Mt.visible&&w.push(E,At,Mt,Z,Nt.z,null,O)}}const St=E.children;for(let At=0,Mt=St.length;At<Mt;At++)ao(St[At],O,Z,G)}function Cl(E,O,Z,G){const{opaque:V,transmissive:St,transparent:At}=E;b.setupLightsView(Z),ie===!0&&Ft.setGlobalState(T.clippingPlanes,Z),G&&_.viewport(it.copy(G)),V.length>0&&js(V,O,Z),St.length>0&&js(St,O,Z),At.length>0&&js(At,O,Z),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Pl(E,O,Z,G){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[G.id]===void 0){const Pt=Yt.has("EXT_color_buffer_half_float")||Yt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[G.id]=new Rn(1,1,{generateMipmaps:!0,type:Pt?Bn:an,minFilter:Ei,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:se.workingColorSpace})}const St=b.state.transmissionRenderTarget[G.id],At=G.viewport||it;St.setSize(At.z*T.transmissionResolutionScale,At.w*T.transmissionResolutionScale);const Mt=T.getRenderTarget(),Ct=T.getActiveCubeFace(),It=T.getActiveMipmapLevel();T.setRenderTarget(St),T.getClearColor(ae),qt=T.getClearAlpha(),qt<1&&T.setClearColor(16777215,.5),T.clear(),Zt&&Wt.render(Z);const Kt=T.toneMapping;T.toneMapping=Fn;const te=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),b.setupLightsView(G),ie===!0&&Ft.setGlobalState(T.clippingPlanes,G),js(E,Z,G),J.updateMultisampleRenderTarget(St),J.updateRenderTargetMipmap(St),Yt.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let fe=0,De=O.length;fe<De;fe++){const Ee=O[fe],{object:Me,geometry:We,material:Tt,group:Je}=Ee;if(Tt.side===pn&&Me.layers.test(G.layers)){const oe=Tt.side;Tt.side=tn,Tt.needsUpdate=!0,Ll(Me,Z,G,We,Tt,Je),Tt.side=oe,Tt.needsUpdate=!0,Pt=!0}}Pt===!0&&(J.updateMultisampleRenderTarget(St),J.updateRenderTargetMipmap(St))}T.setRenderTarget(Mt,Ct,It),T.setClearColor(ae,qt),te!==void 0&&(G.viewport=te),T.toneMapping=Kt}function js(E,O,Z){const G=O.isScene===!0?O.overrideMaterial:null;for(let V=0,St=E.length;V<St;V++){const At=E[V],{object:Mt,geometry:Ct,group:It}=At;let Kt=At.material;Kt.allowOverride===!0&&G!==null&&(Kt=G),Mt.layers.test(Z.layers)&&Ll(Mt,O,Z,Ct,Kt,It)}}function Ll(E,O,Z,G,V,St){P!==null&&V.isNodeMaterial&&P.setObject(E,V),E.onBeforeRender(T,O,Z,G,V,St),E.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),V.onBeforeRender(T,O,Z,G,E,St),V.transparent===!0&&V.side===pn&&V.forceSinglePass===!1?(V.side=tn,V.needsUpdate=!0,T.renderBufferDirect(Z,O,G,V,E,St),V.side=Ti,V.needsUpdate=!0,T.renderBufferDirect(Z,O,G,V,E,St),V.side=pn):T.renderBufferDirect(Z,O,G,V,E,St),E.onAfterRender(T,O,Z,G,V,St)}function tr(E,O,Z){O.isScene!==!0&&(O=re);const G=X.get(E),V=b.state.lights,St=b.state.shadowsArray,At=V.state.version,Mt=ut.getParameters(E,V.state,St,O,Z,b.state.lightProbeGridArray),Ct=ut.getProgramCacheKey(Mt);let It=G.programs;G.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?O.environment:null,G.fog=O.fog;const Kt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;G.envMap=at.get(E.envMap||G.environment,Kt),G.envMapRotation=G.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,It===void 0&&(E.addEventListener("dispose",Pn),It=new Map,G.programs=It);let te=It.get(Ct);if(te!==void 0){if(G.currentProgram===te&&G.lightsStateVersion===At)return Il(E,Mt),te}else Mt.uniforms=ut.getUniforms(E),P!==null&&E.isNodeMaterial&&P.build(E,Z,Mt),E.onBeforeCompile(Mt,T),te=ut.acquireProgram(Mt,Ct),It.set(Ct,te),G.uniforms=Mt.uniforms;const Pt=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Pt.clippingPlanes=Ft.uniform),Il(E,Mt),G.needsLights=Au(E),G.lightsStateVersion=At,G.needsLights&&(Pt.ambientLightColor.value=V.state.ambient,Pt.lightProbe.value=V.state.probe,Pt.sunLights.value=V.state.sun,Pt.sunLightShadows.value=V.state.sunShadow,Pt.directionalLights.value=V.state.directional,Pt.directionalLightShadows.value=V.state.directionalShadow,Pt.spotLights.value=V.state.spot,Pt.spotLightShadows.value=V.state.spotShadow,Pt.rectAreaLights.value=V.state.rectArea,Pt.ltc_1.value=V.state.rectAreaLTC1,Pt.ltc_2.value=V.state.rectAreaLTC2,Pt.pointLights.value=V.state.point,Pt.pointLightShadows.value=V.state.pointShadow,Pt.hemisphereLights.value=V.state.hemi,Pt.sunShadowMatrix.value=V.state.sunShadowMatrix,Pt.sunShadowCascade.value=V.state.sunShadowCascade,Pt.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Pt.spotLightMatrix.value=V.state.spotLightMatrix,Pt.spotLightMap.value=V.state.spotLightMap,Pt.pointShadowMatrix.value=V.state.pointShadowMatrix),G.lightProbeGrid=b.state.lightProbeGridArray.length>0,G.currentProgram=te,G.uniformsList=null,te}function Dl(E){if(E.uniformsList===null){const O=E.currentProgram.getUniforms();E.uniformsList=Hr.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function Il(E,O){const Z=X.get(E);Z.outputColorSpace=O.outputColorSpace,Z.batching=O.batching,Z.batchingColor=O.batchingColor,Z.instancing=O.instancing,Z.instancingColor=O.instancingColor,Z.instancingMorph=O.instancingMorph,Z.skinning=O.skinning,Z.morphTargets=O.morphTargets,Z.morphNormals=O.morphNormals,Z.morphColors=O.morphColors,Z.morphTargetsCount=O.morphTargetsCount,Z.numClippingPlanes=O.numClippingPlanes,Z.numIntersection=O.numClipIntersection,Z.vertexAlphas=O.vertexAlphas,Z.vertexTangents=O.vertexTangents,Z.toneMapping=O.toneMapping}function bu(E,O){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;y.setFromMatrixPosition(O.matrixWorld);for(let Z=0,G=E.length;Z<G;Z++){const V=E[Z];if(V.texture!==null&&V.boundingBox.containsPoint(y))return V}return null}function wu(E,O,Z,G,V){O.isScene!==!0&&(O=re),J.resetTextureUnits();const St=O.fog,At=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?O.environment:null,Mt=tt===null?T.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:se.workingColorSpace,Ct=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,It=at.get(G.envMap||At,Ct),Kt=G.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,te=!!Z.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Pt=!!Z.morphAttributes.position,fe=!!Z.morphAttributes.normal,De=!!Z.morphAttributes.color;let Ee=Fn;G.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Ee=T.toneMapping);const Me=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,We=Me!==void 0?Me.length:0,Tt=X.get(G),Je=b.state.lights;if(ie===!0&&($===!0||E!==j)){const ye=E===j&&G.id===Y;Ft.setState(G,E,ye)}let oe=!1;G.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==Je.state.version||Tt.outputColorSpace!==Mt||V.isBatchedMesh&&Tt.batching===!1||!V.isBatchedMesh&&Tt.batching===!0||V.isBatchedMesh&&Tt.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&Tt.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&Tt.instancing===!1||!V.isInstancedMesh&&Tt.instancing===!0||V.isSkinnedMesh&&Tt.skinning===!1||!V.isSkinnedMesh&&Tt.skinning===!0||V.isInstancedMesh&&Tt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Tt.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Tt.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Tt.instancingMorph===!1&&V.morphTexture!==null||Tt.envMap!==It||G.fog===!0&&Tt.fog!==St||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==Ft.numPlanes||Tt.numIntersection!==Ft.numIntersection)||Tt.vertexAlphas!==Kt||Tt.vertexTangents!==te||Tt.morphTargets!==Pt||Tt.morphNormals!==fe||Tt.morphColors!==De||Tt.toneMapping!==Ee||Tt.morphTargetsCount!==We||!!Tt.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(oe=!0):(oe=!0,Tt.__version=G.version);let ln=Tt.currentProgram;oe===!0&&(ln=tr(G,O,V),P&&G.isNodeMaterial&&P.onUpdateProgram(G,ln,Tt));let Ln=!1,ei=!1,Ni=!1;const _e=ln.getUniforms(),Pe=Tt.uniforms;if(_.useProgram(ln.program)&&(Ln=!0,ei=!0,Ni=!0),G.id!==Y&&(Y=G.id,ei=!0),Tt.needsLights){const ye=bu(b.state.lightProbeGridArray,V);Tt.lightProbeGrid!==ye&&(Tt.lightProbeGrid=ye,ei=!0)}if(Ln||j!==E){_.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),_e.setValue(F,"projectionMatrix",E.projectionMatrix),_e.setValue(F,"viewMatrix",E.matrixWorldInverse);const ii=_e.map.cameraPosition;ii!==void 0&&ii.setValue(F,ht.setFromMatrixPosition(E.matrixWorld)),C.logarithmicDepthBuffer&&_e.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&_e.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),j!==E&&(j=E,ei=!0,Ni=!0)}if(Tt.needsLights&&(Je.state.sunShadowMap.length>0&&_e.setValue(F,"sunShadowMap",Je.state.sunShadowMap,J),Je.state.directionalShadowMap.length>0&&_e.setValue(F,"directionalShadowMap",Je.state.directionalShadowMap,J),Je.state.spotShadowMap.length>0&&_e.setValue(F,"spotShadowMap",Je.state.spotShadowMap,J),Je.state.pointShadowMap.length>0&&_e.setValue(F,"pointShadowMap",Je.state.pointShadowMap,J)),V.isSkinnedMesh){_e.setOptional(F,V,"bindMatrix"),_e.setOptional(F,V,"bindMatrixInverse");const ye=V.skeleton;ye&&(ye.boneTexture===null&&ye.computeBoneTexture(),_e.setValue(F,"boneTexture",ye.boneTexture,J))}V.isBatchedMesh&&(_e.setOptional(F,V,"batchingTexture"),_e.setValue(F,"batchingTexture",V._matricesTexture,J),_e.setOptional(F,V,"batchingIdTexture"),_e.setValue(F,"batchingIdTexture",V._indirectTexture,J),_e.setOptional(F,V,"batchingColorTexture"),V._colorsTexture!==null&&_e.setValue(F,"batchingColorTexture",V._colorsTexture,J));const ni=Z.morphAttributes;if((ni.position!==void 0||ni.normal!==void 0||ni.color!==void 0)&&B.update(V,Z,ln),(ei||Tt.receiveShadow!==V.receiveShadow)&&(Tt.receiveShadow=V.receiveShadow,_e.setValue(F,"receiveShadow",V.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&O.environment!==null&&(Pe.envMapIntensity.value=O.environmentIntensity),Pe.dfgLUT!==void 0&&(Pe.dfgLUT.value=W_()),ei){if(_e.setValue(F,"toneMappingExposure",T.toneMappingExposure),Tt.needsLights&&Tu(Pe,Ni),St&&G.fog===!0&&Ut.refreshFogUniforms(Pe,St),Ut.refreshMaterialUniforms(Pe,G,st,K,b.state.transmissionRenderTarget[E.id]),Tt.needsLights&&Tt.lightProbeGrid){const ye=Tt.lightProbeGrid;Pe.probesSH.value=ye.texture,Pe.probesMin.value.copy(ye.boundingBox.min),Pe.probesMax.value.copy(ye.boundingBox.max),Pe.probesResolution.value.copy(ye.resolution)}Hr.upload(F,Dl(Tt),Pe,J)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Hr.upload(F,Dl(Tt),Pe,J),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&_e.setValue(F,"center",V.center),_e.setValue(F,"modelViewMatrix",V.modelViewMatrix),_e.setValue(F,"normalMatrix",V.normalMatrix),_e.setValue(F,"modelMatrix",V.matrixWorld),G.uniformsGroups!==void 0){const ye=G.uniformsGroups;for(let ii=0,Ui=ye.length;ii<Ui;ii++){const Ul=ye[ii];rt.update(Ul,ln),rt.bind(Ul,ln)}}return ln}function Tu(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.sunLights.needsUpdate=O,E.sunLightShadows.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function Au(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return tt},this.setRenderTargetTextures=function(E,O,Z){const G=X.get(E);G.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),X.get(E.texture).__webglTexture=O,X.get(E.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:Z,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,O){const Z=X.get(E);Z.__webglFramebuffer=O,Z.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,Z=0){tt=E,q=O,W=Z;let G=null,V=!1,St=!1;if(E){const Mt=X.get(E);if(Mt.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(F.FRAMEBUFFER,Mt.__webglFramebuffer),it.copy(E.viewport),Rt.copy(E.scissor),bt=E.scissorTest,_.viewport(it),_.scissor(Rt),_.setScissorTest(bt),Y=-1;return}else if(Mt.__webglFramebuffer===void 0)J.setupRenderTarget(E);else if(Mt.__hasExternalTextures)J.rebindTextures(E,X.get(E.texture).__webglTexture,X.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Kt=E.depthTexture;if(Mt.__boundDepthTexture!==Kt){if(Kt!==null&&X.has(Kt)&&(E.width!==Kt.image.width||E.height!==Kt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(E)}}const Ct=E.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(St=!0);const It=X.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(It[O])?G=It[O][Z]:G=It[O],V=!0):E.samples>0&&J.useMultisampledRTT(E)===!1?G=X.get(E).__webglMultisampledFramebuffer:Array.isArray(It)?G=It[Z]:G=It,it.copy(E.viewport),Rt.copy(E.scissor),bt=E.scissorTest}else it.copy(Et).multiplyScalar(st).floor(),Rt.copy(Xt).multiplyScalar(st).floor(),bt=Ce;if(Z!==0&&(G=D),_.bindFramebuffer(F.FRAMEBUFFER,G)&&_.drawBuffers(E,G),_.viewport(it),_.scissor(Rt),_.setScissorTest(bt),V){const Mt=X.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+O,Mt.__webglTexture,Z)}else if(St){const Mt=O;for(let Ct=0;Ct<E.textures.length;Ct++){const It=X.get(E.textures[Ct]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Ct,It.__webglTexture,Z,Mt)}}else if(E!==null&&Z!==0){const Mt=X.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Mt.__webglTexture,Z)}Y=-1};function Nl(E){const O=X.get(E);return(O.__readFormat!==E.format||O.__readType!==E.type)&&(O.__readFormat=E.format,O.__readType=E.type,O.__formatReadable=C.textureFormatReadable(E.format),O.__typeReadable=C.textureTypeReadable(E.type)),O}this.readRenderTargetPixels=function(E,O,Z,G,V,St,At,Mt=0){if(!(E&&E.isWebGLRenderTarget)){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=X.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&At!==void 0&&(Ct=Ct[At]),Ct){_.bindFramebuffer(F.FRAMEBUFFER,Ct);try{const It=E.textures[Mt],Kt=It.format,te=It.type;E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Mt);const Pt=Nl(It);if(Pt.__formatReadable===!1){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pt.__typeReadable===!1){le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-G&&Z>=0&&Z<=E.height-V&&F.readPixels(O,Z,G,V,pt.convert(Kt),pt.convert(te),St)}finally{const It=tt!==null?X.get(tt).__webglFramebuffer:null;_.bindFramebuffer(F.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(E,O,Z,G,V,St,At,Mt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=X.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&At!==void 0&&(Ct=Ct[At]),Ct)if(O>=0&&O<=E.width-G&&Z>=0&&Z<=E.height-V){_.bindFramebuffer(F.FRAMEBUFFER,Ct);const It=E.textures[Mt],Kt=It.format,te=It.type;E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Mt);const Pt=Nl(It);if(Pt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const fe=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,fe),F.bufferData(F.PIXEL_PACK_BUFFER,St.byteLength,F.STREAM_READ),F.readPixels(O,Z,G,V,pt.convert(Kt),pt.convert(te),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);const De=tt!==null?X.get(tt).__webglFramebuffer:null;_.bindFramebuffer(F.FRAMEBUFFER,De);const Ee=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await hf(F,Ee,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,fe),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,St),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(fe),F.deleteSync(Ee),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,O=null,Z=0){const G=Math.pow(2,-Z),V=Math.floor(E.image.width*G),St=Math.floor(E.image.height*G),At=O!==null?O.x:0,Mt=O!==null?O.y:0;J.setTexture2D(E,0),F.copyTexSubImage2D(F.TEXTURE_2D,Z,0,0,At,Mt,V,St),_.unbindTexture()},this.copyTextureToTexture=function(E,O,Z=null,G=null,V=0,St=0){let At,Mt,Ct,It,Kt,te,Pt,fe,De;const Ee=E.isCompressedTexture?E.mipmaps[St]:E.image;if(Z!==null)At=Z.max.x-Z.min.x,Mt=Z.max.y-Z.min.y,Ct=Z.isBox3?Z.max.z-Z.min.z:1,It=Z.min.x,Kt=Z.min.y,te=Z.isBox3?Z.min.z:0;else{const Pe=Math.pow(2,-V);At=Math.floor(Ee.width*Pe),Mt=Math.floor(Ee.height*Pe),E.isDataArrayTexture?Ct=Ee.depth:E.isData3DTexture?Ct=Math.floor(Ee.depth*Pe):Ct=1,It=0,Kt=0,te=0}G!==null?(Pt=G.x,fe=G.y,De=G.z):(Pt=0,fe=0,De=0);const Me=pt.convert(O.format),We=pt.convert(O.type);let Tt;O.isData3DTexture?(J.setTexture3D(O,0),Tt=F.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(J.setTexture2DArray(O,0),Tt=F.TEXTURE_2D_ARRAY):(J.setTexture2D(O,0),Tt=F.TEXTURE_2D),_.activeTexture(F.TEXTURE0),_.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,O.flipY),_.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),_.pixelStorei(F.UNPACK_ALIGNMENT,O.unpackAlignment);const Je=_.getParameter(F.UNPACK_ROW_LENGTH),oe=_.getParameter(F.UNPACK_IMAGE_HEIGHT),ln=_.getParameter(F.UNPACK_SKIP_PIXELS),Ln=_.getParameter(F.UNPACK_SKIP_ROWS),ei=_.getParameter(F.UNPACK_SKIP_IMAGES);_.pixelStorei(F.UNPACK_ROW_LENGTH,Ee.width),_.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ee.height),_.pixelStorei(F.UNPACK_SKIP_PIXELS,It),_.pixelStorei(F.UNPACK_SKIP_ROWS,Kt),_.pixelStorei(F.UNPACK_SKIP_IMAGES,te);const Ni=E.isDataArrayTexture||E.isData3DTexture,_e=O.isDataArrayTexture||O.isData3DTexture;if(E.isDepthTexture){const Pe=X.get(E),ni=X.get(O),ye=X.get(Pe.__renderTarget),ii=X.get(ni.__renderTarget);_.bindFramebuffer(F.READ_FRAMEBUFFER,ye.__webglFramebuffer),_.bindFramebuffer(F.DRAW_FRAMEBUFFER,ii.__webglFramebuffer);for(let Ui=0;Ui<Ct;Ui++)Ni&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,X.get(E).__webglTexture,V,te+Ui),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,X.get(O).__webglTexture,St,De+Ui)),F.blitFramebuffer(It,Kt,At,Mt,Pt,fe,At,Mt,F.DEPTH_BUFFER_BIT,F.NEAREST);_.bindFramebuffer(F.READ_FRAMEBUFFER,null),_.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(V!==0||E.isRenderTargetTexture||X.has(E)){const Pe=X.get(E),ni=X.get(O);_.bindFramebuffer(F.READ_FRAMEBUFFER,N),_.bindFramebuffer(F.DRAW_FRAMEBUFFER,z);for(let ye=0;ye<Ct;ye++)Ni?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Pe.__webglTexture,V,te+ye):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Pe.__webglTexture,V),_e?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ni.__webglTexture,St,De+ye):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ni.__webglTexture,St),V!==0?F.blitFramebuffer(It,Kt,At,Mt,Pt,fe,At,Mt,F.COLOR_BUFFER_BIT,F.NEAREST):_e?F.copyTexSubImage3D(Tt,St,Pt,fe,De+ye,It,Kt,At,Mt):F.copyTexSubImage2D(Tt,St,Pt,fe,It,Kt,At,Mt);_.bindFramebuffer(F.READ_FRAMEBUFFER,null),_.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else _e?E.isDataTexture||E.isData3DTexture?F.texSubImage3D(Tt,St,Pt,fe,De,At,Mt,Ct,Me,We,Ee.data):O.isCompressedArrayTexture?F.compressedTexSubImage3D(Tt,St,Pt,fe,De,At,Mt,Ct,Me,Ee.data):F.texSubImage3D(Tt,St,Pt,fe,De,At,Mt,Ct,Me,We,Ee):E.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,St,Pt,fe,At,Mt,Me,We,Ee.data):E.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,St,Pt,fe,Ee.width,Ee.height,Me,Ee.data):F.texSubImage2D(F.TEXTURE_2D,St,Pt,fe,At,Mt,Me,We,Ee);_.pixelStorei(F.UNPACK_ROW_LENGTH,Je),_.pixelStorei(F.UNPACK_IMAGE_HEIGHT,oe),_.pixelStorei(F.UNPACK_SKIP_PIXELS,ln),_.pixelStorei(F.UNPACK_SKIP_ROWS,Ln),_.pixelStorei(F.UNPACK_SKIP_IMAGES,ei),St===0&&O.generateMipmaps&&F.generateMipmap(Tt),_.unbindTexture()},this.initRenderTarget=function(E){X.get(E).__webglFramebuffer===void 0&&J.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?J.setTextureCube(E,0):E.isData3DTexture?J.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?J.setTexture2DArray(E,0):J.setTexture2D(E,0),_.unbindTexture()},this.resetState=function(){q=0,W=0,tt=null,_.reset(),yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=se._getDrawingBufferColorSpace(t),e.unpackColorSpace=se._getUnpackColorSpace()}}const Yc={type:"change"},pl={type:"start"},uu={type:"end"},Rr=new ol,qc=new Yn,Y_=Math.cos(70*os.DEG2RAD),Ue=new U,en=2*Math.PI,me={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Vo=1e-6;class q_ extends qd{constructor(t,e=null){super(t,e),this.state=me.NONE,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ss.ROTATE,MIDDLE:ss.DOLLY,RIGHT:ss.PAN},this.touches={ONE:ns.ROTATE,TWO:ns.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new mn,this._lastTargetPosition=new U,this._quat=new mn().setFromUnitVectors(t.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Sc,this._sphericalDelta=new Sc,this._scale=1,this._panOffset=new U,this._rotateStart=new vt,this._rotateEnd=new vt,this._rotateDelta=new vt,this._panStart=new vt,this._panEnd=new vt,this._panDelta=new vt,this._dollyStart=new vt,this._dollyEnd=new vt,this._dollyDelta=new vt,this._dollyDirection=new U,this._mouse=new vt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=K_.bind(this),this._onPointerDown=Z_.bind(this),this._onPointerUp=J_.bind(this),this._onContextMenu=ix.bind(this),this._onMouseWheel=j_.bind(this),this._onKeyDown=tx.bind(this),this._onTouchStart=ex.bind(this),this._onTouchMove=nx.bind(this),this._onMouseDown=$_.bind(this),this._onMouseMove=Q_.bind(this),this._interceptControlDown=sx.bind(this),this._interceptControlUp=rx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=me.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Yc),this.update(),this.state=me.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Ue.copy(e).sub(this.target),Ue.applyQuaternion(this._quat),this._spherical.setFromVector3(Ue),this.autoRotate&&this.state===me.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=en:n>Math.PI&&(n-=en),s<-Math.PI?s+=en:s>Math.PI&&(s-=en),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ue.setFromSpherical(this._spherical),Ue.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ue),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ue.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new U(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new U(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ue.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Rr.origin.copy(this.object.position),Rr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Rr.direction))<Y_?this.object.lookAt(this.target):(qc.setFromNormalAndCoplanarPoint(this.object.up,this.target),Rr.intersectPlane(qc,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Vo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Vo||this._lastTargetPosition.distanceToSquared(this.target)>Vo?(this.dispatchEvent(Yc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?en/60*this.autoRotateSpeed*t:en/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ue.setFromMatrixColumn(e,0),Ue.multiplyScalar(-t),this._panOffset.add(Ue)}_panUp(t,e){this.screenSpacePanning===!0?Ue.setFromMatrixColumn(e,1):(Ue.setFromMatrixColumn(e,0),Ue.crossVectors(this.object.up,Ue)),Ue.multiplyScalar(t),this._panOffset.add(Ue)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ue.copy(s).sub(this.target);let r=Ue.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(en*this._rotateDelta.x/e.clientHeight),this._rotateUp(en*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-en*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(en*this._rotateDelta.x/e.clientHeight),this._rotateUp(en*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new vt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Z_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function K_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function J_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(uu),this.state=me.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function $_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ss.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=me.DOLLY;break;case ss.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=me.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=me.ROTATE}break;case ss.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=me.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=me.PAN}break;default:this.state=me.NONE}this.state!==me.NONE&&this.dispatchEvent(pl)}function Q_(i){switch(this.state){case me.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case me.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case me.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function j_(i){this.enabled===!1||this.enableZoom===!1||this.state!==me.NONE||(i.preventDefault(),this.dispatchEvent(pl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(uu))}function tx(i){this.enabled!==!1&&this._handleKeyDown(i)}function ex(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ns.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=me.TOUCH_ROTATE;break;case ns.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=me.TOUCH_PAN;break;default:this.state=me.NONE}break;case 2:switch(this.touches.TWO){case ns.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=me.TOUCH_DOLLY_PAN;break;case ns.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=me.TOUCH_DOLLY_ROTATE;break;default:this.state=me.NONE}break;default:this.state=me.NONE}this.state!==me.NONE&&this.dispatchEvent(pl)}function nx(i){switch(this._trackPointer(i),this.state){case me.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case me.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case me.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case me.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=me.NONE}}function ix(i){this.enabled!==!1&&i.preventDefault()}function sx(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function rx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ox(i=20260926){let t=i>>>0;const e=()=>{t=t+1831565813>>>0;let n=t;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296};return{f:e,range:(n,s)=>n+e()*(s-n),int:(n,s)=>Math.floor(n+e()*(s-n+1)),pick:n=>n[Math.floor(e()*n.length)%n.length],sign:()=>e()<.5?-1:1,chance:n=>e()<n,jit:(n,s)=>n+(e()*2-1)*s}}const Te={w:44,d:30,wall:1.1,h:1},bn=Te.w/2-Te.wall,hi=Te.d/2-Te.wall,xt=.7,ui={y:xt-.15,bed:xt-.62,bank:1.25,shrink:.5,sand:1.05},Xn={center:[[-21.7,2.3],[-19.6,2.1],[-17.4,1.6],[-15.4,.9],[-14,.35],[-12.6,.15],[-11.2,.1],[-9.9,.2]],half:[2.15,2.12,2,1.92,1.85,1.8,1.75,1.7]},Sn={cx:-4.6,cz:.55,r:4.4,a0:165,a1:-170,steps:30,wob:.3},xe={y:xt+.22,railH:.155,gauge:1,ballastTop:.8,ballastTopHalf:1.02,ballastBotHalf:1.58,sleeper:{w:1.76,h:.12,d:.27,step:.52},deckThick:.34,girder:.18,girderBottom:.1},qe={cx:2,half:3.5,platformZ0:5.98,platformZ1:7.48,buildingZ0:3.86,buildingZ1:5.86},ax=-3.85,lx=Math.PI/180;function Cr(i,t,e,n,s){const r=[];for(let o=0;o<=s;o++)r.push([i+(e-i)*(o/s),t+(n-t)*(o/s)]);return r}function Pr(i,t,e,n,s,r,o=!0){const a=[];for(let l=o?1:0;l<=(o?r-1:r);l++){const c=(n+(s-n)*(l/r))*lx;a.push([i+Math.cos(c)*e,t+Math.sin(c)*e])}return a}const Ji={x:-14,z0:-6,z1:5.2},$i={z:8.2,x0:-11,x1:9.4},Qi={x:13,z0:4.6,z1:-5.6},ji={z:-8.6,x0:10,x1:-11.4},Wo=3,Xo=3.6,Yo=3,qo=2.6,cx=[...Cr(Ji.x,Ji.z0,Ji.x,Ji.z1,8),...Pr(Ji.x+Wo,$i.z-Wo,Wo,180,90,4),...Cr($i.x0,$i.z,$i.x1,$i.z,8),...Pr(Qi.x-Xo,$i.z-Xo,Xo,90,0,4),...Cr(Qi.x,Qi.z0,Qi.x,Qi.z1,8),...Pr(Qi.x-Yo,ji.z+Yo,Yo,0,-90,4),...Cr(ji.x0,ji.z,ji.x1,ji.z,8).map((i,t,e)=>t>1&&t<e.length-2?[i[0],i[1]+.5]:i),...Pr(Ji.x+qo,ji.z+qo,qo,270,180,4)],mt={trayWood:9068345,trayWoodDark:7030570,trayWoodLight:11041356,grass:7179335,grassAlt:7903567,grassDark:5599290,sand:12626820,mud:6117957,ballast:8090472,sleeper:4864556,railHead:11578530,railWeb:4866104,brick:10250837,stone:10195589,stoneDark:7301728,girder:8012340,brass:11569724,glassDay:2964807,glow:16760937,leaf:[5930298,6587704,5076023,7113794,5536836],pine:[3825986,4352838,3299392],trunk:5981488,foliage:[8227388,9278528,7307062]},hx=[15392712,14732716,13884102,15193023,14075050,13423315,15523784,14732724,14271396,13616816],ux=[9395528,7820106,9071189,7034184,5924464,5136220,10052940,7240308,9198410,6713466,8020816,9067086];function fx(i=2600){const t=new Wh(cx.map(p=>new U(p[0],0,p[1])),!0,"centripetal",.5);t.arcLengthDivisions=6e3;const e=t.getSpacedPoints(i);e.pop();const n=e.map(p=>new U(p.x,xe.y,p.z)),s=n.length,r=t.getLength(),o=r/s,a=p=>(p%s+s)%s,l=new U;function c(p,S=new U){const R=(p%r+r)%r/o,y=Math.floor(R),w=R-y,b=n[a(y)],L=n[a(y+1)];return S.lerpVectors(b,L,w)}const h=new U,d=new U;function u(p){return c(p-.85,h),c(p+.85,d),d.sub(h).normalize()}const f=new U;function g(p){const S=u(p);return f.copy(c(p,l)),{p:f.clone(),t:S.clone(),n:new U(-S.z,0,S.x).normalize()}}function x(p,S){let R=1/0,y=0;for(let w=0;w<s;w++){const b=n[w].x-p,L=n[w].z-S,v=b*b+L*L;v<R&&(R=v,y=w)}return y*o}function m(p,S,R,y=0){const w=[],b=Math.max(2,Math.round((S-p)/R));for(let L=0;L<=b;L++){const v=p+(S-p)*L/b,M=g(v);y!==0&&M.p.addScaledVector(M.n,y),w.push(M)}return w}return{pts:n,n:s,length:r,step:o,pointAt:c,tangentAt:u,frameAt:g,nearest:x,frames:m,wrap:a}}function dx(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new Ne;let c=0;for(let h=0;h<i.length;++h){const d=i[h];let u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const d=[];for(let u=0;u<i.length;++u){const f=i[u].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+h);h+=i[u].attributes.position.count}l.setIndex(d)}for(const h in r){const d=Zc(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in o){const d=o[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){const f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][u]);const g=Zc(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function Zc(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new be(o,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const d=l/e;for(let u=0,f=h.count;u<f;u++)for(let g=0;g<e;g++){const x=h.getComponent(u,g);a.setComponent(u+d,g,x)}}else o.set(h.array,l);l+=h.count*e}return s!==void 0&&(a.gpuType=s),a}const fn=new Lt,Kc=new Lt;function fu(i){return fn.set(i),[fn.r,fn.g,fn.b]}function px(i,t,e){return fn.set(i),Kc.set(t),fn.lerp(Kc,e).getHex()}function ce(i,t){return fn.set(i),fn.setRGB(Math.min(1,fn.r*t),Math.min(1,fn.g*t),Math.min(1,fn.b*t)),fn.getHex()}function Pi(i,t,e=.06){return ce(i,1+(t.f()*2-1)*e)}function H(i,t,e){return new ms(i,t,e)}function kt(i,t,e,n=10){return new Qr(i,t,e,n)}function so(i,t=10,e=7){return new qs(i,t,e)}function Zs(i,t,e=9){return new hl(i,t,e)}const Jc=new he,$c=new mn,Qc=new gn,jc=new U,th=new U(1,1,1);function I(i,t=0,e=0,n=0,s=0,r=1,o=1,a=1,l=0,c=0){return Qc.set(l,s,c),$c.setFromEuler(Qc),jc.set(t,e,n),th.set(r,o,a),Jc.compose(jc,$c,th),i.clone().applyMatrix4(Jc)}const Zo=new U,eh=new U,nh=new U,ih=new U,sh=new U,Lr=new U;function fi(i){const t=[],e=[],n=[];for(const r of i){Zo.fromArray(r[0]),eh.fromArray(r[1]),nh.fromArray(r[2]?r[2]:r[0]),ih.subVectors(eh,Zo),sh.subVectors(nh,Zo),Lr.crossVectors(ih,sh).normalize();for(const o of r)t.push(o[0],o[1],o[2]),e.push(Lr.x,Lr.y,Lr.z),n.push(0,0)}const s=new Ne;return s.setAttribute("position",new ge(t,3)),s.setAttribute("normal",new ge(e,3)),s.setAttribute("uv",new ge(n,2)),s}function mx(i,t,e,n=.16){const s=i/2+n,r=t/2+n;return fi([[[-s,0,r],[s,0,r],[s,e,0],[-s,e,0]],[[s,0,-r],[-s,0,-r],[-s,e,0],[s,e,0]],[[-s,0,r],[-s,0,-r],[-s,e,0]],[[s,0,-r],[s,0,r],[s,e,0]],[[-s,0,r],[s,0,r],[s,0,-r],[-s,0,-r]]])}function gx(i,t,e,n=.14){const s=i/2+n,r=t/2+n,o=Math.max(.06,i*.14);return fi([[[-s,0,r],[s,0,r],[o,e,0],[-o,e,0]],[[s,0,-r],[-s,0,-r],[-o,e,0],[o,e,0]],[[-s,0,r],[-s,e,0],[-o,e,0]],[[s,0,-r],[s,e,0],[o,e,0]],[[-s,0,r],[s,0,r],[s,0,-r],[-s,0,-r]]])}function rh(i,t,e={}){const n=i.length,s=e.y??0,r=e.uvScale??4,o=[],a=[],l=[],c=[],h=[],d=[0];for(let f=0;f<n;f++){const g=i[Math.max(0,f-1)],x=i[Math.min(n-1,f+1)];let m=x[0]-g[0],p=x[1]-g[1];const S=Math.hypot(m,p)||1;h.push([-p/S,m/S]),f>0&&d.push(d[f-1]+Math.hypot(i[f][0]-i[f-1][0],i[f][1]-i[f-1][1]))}for(let f=0;f<n;f++){const g=(Array.isArray(t)?t[f]:t)*.5,x=h[f][0]*g,m=h[f][1]*g;o.push(i[f][0]+x,s,i[f][1]+m),o.push(i[f][0]-x,s,i[f][1]+m),a.push(0,1,0,0,1,0),l.push(d[f]/r,0,d[f]/r,1)}for(let f=0;f<n-1;f++){const g=f*2;c.push(g,g+3,g+1,g,g+2,g+3)}const u=new Ne;return u.setAttribute("position",new ge(o,3)),u.setAttribute("normal",new ge(a,3)),u.setAttribute("uv",new ge(l,2)),u.setIndex(c),u}function oh(i,t,e={}){const n=i.length,s=t.length,r=new U(0,1,0),o=new U,a=[];for(const d of t){const u=[];for(const[f,g]of i)o.copy(d.p).addScaledVector(d.n,f).addScaledVector(r,g),u.push([o.x,o.y,o.z]);a.push(u)}const l=[],c=[];for(let d=0;d<s-1;d++)for(let u=0;u<n;u++){const f=(u+1)%n,g=a[d][u],x=a[d][f],m=a[d+1][f],p=a[d+1][u],S=d*4,R=S+4;l.push(g[0],g[1],g[2],x[0],x[1],x[2],m[0],m[1],m[2]),c.push(S,u,S,u+1,R,u+1),l.push(g[0],g[1],g[2],m[0],m[1],m[2],p[0],p[1],p[2]),c.push(S,u,R,u+1,R,u)}if(e.cap){const d=g=>{let x=0,m=0,p=0;for(const S of g)x+=S[0],m+=S[1],p+=S[2];return[x/g.length,m/g.length,p/g.length]},u=d(a[0]),f=d(a[s-1]);for(let g=0;g<n;g++){const x=(g+1)%n,m=a[0][g],p=a[0][x];l.push(u[0],u[1],u[2],p[0],p[1],p[2],m[0],m[1],m[2]),c.push(0,0,1,0,0,1);const S=a[s-1][g],R=a[s-1][x];l.push(f[0],f[1],f[2],S[0],S[1],S[2],R[0],R[1],R[2]),c.push(0,0,1,0,0,1)}}const h=new Ne;return h.setAttribute("position",new ge(l,3)),h.setAttribute("uv",new ge(c,2)),h.computeVertexNormals(),h}const _x=["position","normal","uv","color"];function de(i){const t=i.filter(n=>n&&n.geo).map(n=>{let s=n.geo.index?n.geo.toNonIndexed():n.geo.clone();n.matrix&&s.applyMatrix4(n.matrix);for(const h of Object.keys(s.attributes))_x.includes(h)||s.deleteAttribute(h);s.attributes.normal||s.computeVertexNormals();const r=s.attributes.position.count;s.attributes.uv||s.setAttribute("uv",new ge(new Float32Array(r*2),2));const o=new Float32Array(r*3),[a,l,c]=fu(n.color??16777215);for(let h=0;h<r;h++)o[h*3]=a,o[h*3+1]=l,o[h*3+2]=c;return s.setAttribute("color",new be(o,3)),s});if(!t.length)return new Ne;const e=t.length===1?t[0]:dx(t,!1);return e.computeBoundingSphere(),e}function xx(i,t=16777215){const e=i.attributes.position.count,n=new Float32Array(e*3),[s,r,o]=fu(t);for(let a=0;a<e;a++)n[a*3]=s,n[a*3+1]=r,n[a*3+2]=o;return i.setAttribute("color",new be(n,3)),i.attributes.uv||i.setAttribute("uv",new ge(new Float32Array(e*2),2)),i}function je(i,t,e){let n=Math.imul(i|0,374761393)^Math.imul(t|0,668265263)^Math.imul(e|0,1013904223);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}const ah=i=>i*i*(3-2*i);function vx(i,t,e,n){const s=Math.floor(i),r=Math.floor(t),o=i-s,a=t-r,l=x=>(x%e+e)%e,c=je(l(s),l(r),n),h=je(l(s+1),l(r),n),d=je(l(s),l(r+1),n),u=je(l(s+1),l(r+1),n),f=ah(o),g=ah(a);return c+(h-c)*f+(d-c)*g+(c-h-d+u)*f*g}function wi(i,t,e,n,s=4){let r=0,o=.5,a=1,l=0;for(let c=0;c<s;c++)r+=o*vx(i*a,t*a,e*a,n+c*17),l+=o,o*=.5,a*=2;return r/l}function Ks(i,t){const e=document.createElement("canvas");return e.width=i,e.height=t,e}function Js(i,{repeat:t=1,srgb:e=!0,aniso:n=8}={}){const s=new Qf(i);return s.wrapS=s.wrapT=Gr,s.repeat.set(t,t),s.colorSpace=e?nn:qn,s.anisotropy=n,s.needsUpdate=!0,s}function du(i,t,e){const n=Ks(i,i),s=n.getContext("2d"),r=s.createImageData(i,i),o=r.data;for(let a=0;a<i;a++)for(let l=0;l<i;l++){const c=Math.max(0,Math.min(1,t(l/i,a/i,l,a)))*255,h=(a*i+l)*4;o[h]=o[h+1]=o[h+2]=c,o[h+3]=255}return s.putImageData(r,0,0),Js(n,e)}function Mx(){const t=Ks(512,512),e=t.getContext("2d"),n=e.createImageData(512,512),s=n.data,r=5;for(let o=0;o<512;o++)for(let a=0;a<512;a++){const l=a/512,c=o/512,h=c*r,d=Math.floor(h),u=h-d,f=wi(l*2.2,(d+u*.9)*3.1,8,11,4)-.5;let x=.86+(Math.sin((u*9+f*5.5+d*3.7)*Math.PI*2)*.5+.5)*.1+(wi(l*26,c*5,32,31,3)-.5)*.1;const m=Math.min(u,1-u);m<.022&&(x*=.42+m/.022*.18),x*=.94+je(d,3,5)*.12;const p=(o*512+a)*4,S=Math.max(0,Math.min(255,x*255));s[p]=s[p+1]=s[p+2]=S,s[p+3]=255}return e.putImageData(n,0,0),Js(t,{repeat:1})}function Sx(){return du(512,(i,t)=>{const e=wi(i*5,t*5,8,3,4),n=wi(i*34,t*34,48,9,2);let s=.8+e*.22+(n-.5)*.16;return wi(i*11,t*11,16,21,2)>.74&&(s-=.1),s},{repeat:1})}function ml(){const t=Ks(256,256),e=t.getContext("2d");e.fillStyle="#b8b8b8",e.fillRect(0,0,256,256);for(let n=0;n<1500;n++){const s=je(n,1,77)*256,r=je(n,2,77)*256,o=1.1+je(n,3,77)*2.6,a=120+je(n,4,77)*130;e.fillStyle=`rgb(${a},${a},${a})`,e.beginPath(),e.ellipse(s,r,o,o*(.6+je(n,5,77)*.5),je(n,6,77)*3.14,0,6.283),e.fill()}return Js(t,{repeat:1})}function pu(){const t=Ks(512,512),e=t.getContext("2d");e.fillStyle="#6d6d6d",e.fillRect(0,0,512,512);const n=22;for(let s=0;s<n;s++)for(let o=0;o<22;o++){const a=je(s,o,3)*6-3,l=je(s,o,4)*6-3,c=(o+.5)*(512/22)+a,h=(s+.5)*(512/n)+l,d=150+je(s,o,5)*90;e.fillStyle=`rgb(${d},${d},${Math.min(255,d+6)})`,e.beginPath(),e.ellipse(c,h,512/22/2.6,512/n/2.5,je(s,o,6)*3.14,0,6.283),e.fill()}return Js(t,{repeat:1})}function yx(){const t=new Float32Array(65536);for(let a=0;a<256;a++)for(let l=0;l<256;l++){const c=l/256,h=a/256;t[a*256+l]=wi(c*6,h*6,8,3,3)*.7+Math.sin((c*9+h*3)*Math.PI*2)*.14+Math.sin((c*2-h*7)*Math.PI*2)*.1}const e=Ks(256,256),n=e.getContext("2d"),s=n.createImageData(256,256),r=s.data,o=(a,l)=>t[(l+256)%256*256+(a+256)%256];for(let a=0;a<256;a++)for(let l=0;l<256;l++){const c=(o(l+1,a)-o(l-1,a))*5.5,h=(o(l,a+1)-o(l,a-1))*5.5,d=Math.hypot(c,h,1),u=(a*256+l)*4;r[u]=(-c/d*.5+.5)*255,r[u+1]=(-h/d*.5+.5)*255,r[u+2]=1/d*.5*255+127,r[u+3]=255}return n.putImageData(s,0,0),Js(e,{repeat:1,srgb:!1})}function Ex(){return du(256,(i,t)=>.72+(Math.sin(t*Math.PI*2*14)*.5+.5)*.26+(wi(i*16,t*16,24,5,2)-.5)*.16,{repeat:1})}const gl=[{w:1.5,kind:"main",pts:[[-4.6,3.02],[-1,3.02],[2,3.02],[5.2,3.02],[8.4,3.02]]},{w:1.3,kind:"main",pts:[[2,3.02],[2.05,1.6],[2.4,.4],[3,-.6],[3.6,-1.5]]},{w:1.2,kind:"lane",pts:[[3.6,-1.5],[2.2,-1.7],[.6,-1.3],[-.6,-.4],[-1.15,.7]]},{w:1.2,kind:"lane",pts:[[3.6,-1.5],[6.2,-1.6],[8.8,-1.2],[10.7,-.3],[11.3,1]]},{w:1.1,kind:"lane",pts:[[3,-.6],[3.7,-3],[5.2,-5],[7.3,-5.7]]},{w:1.1,kind:"lane",pts:[[-1.15,.7],[-1.35,-1.6],[-1.15,-3.7],[-.5,-5.1]]},{w:1,kind:"path",pts:[[-.5,-5.1],[-2.6,-5.3],[-4.8,-5],[-6.8,-4.3],[-8.3,-3.3]]},{w:1,kind:"path",pts:[[-1.15,.7],[-.5,2],[.3,3.02]]},{w:1,kind:"path",pts:[[-11,7.4],[-11.05,5],[-11.15,3.2],[-11,1.4],[-10.7,-.9],[-10.2,-2.9],[-9,-4.7],[-7.4,-5.7]]},{w:1.2,kind:"lane",pts:[[-4.3,3.02],[-4.2,4.6],[-3.95,6.2],[-3.9,7.4]]},{w:1.2,kind:"lane",pts:[[-3.9,7.4],[-3.85,9.6],[-3.95,11.4],[-4.6,12.3]]},{w:1.1,kind:"lane",pts:[[-4.6,12.3],[-1,12.5],[4,12.5],[9,12.2],[14,11.4],[18.4,10.4]]},{w:1,kind:"path",pts:[[-4.6,12.3],[-8.6,12.7],[-13,12.2],[-16.6,10.8],[-19.2,8.4],[-19.7,6],[-19.75,4.9]]},{w:.95,kind:"path",pts:[[-19.8,4.9],[-19.4,6.3],[-18.2,6.8],[-16.9,6.3]]},{w:.9,kind:"path",pts:[[-19.8,0],[-19.9,-1.8],[-19.5,-3.6],[-18.5,-5],[-16.9,-6.2]]},{w:.9,kind:"path",pts:[[14,11.4],[14.6,8],[14.9,4],[15,0],[15.2,-4]]},{w:.9,kind:"path",pts:[[15.2,-4],[13,-5.6],[10.4,-7.4]]}],ci=[{kind:"crop",x0:-8.9,z0:4.6,x1:-4.9,z1:7.5,rot:0},{kind:"crop",x0:9.7,z0:.2,x1:12.3,z1:7.1,rot:0},{kind:"pasture",x0:.4,z0:-8,x1:6.2,z1:-5.3,rot:0},{kind:"pasture",x0:-20.5,z0:-13,x1:-14.4,z1:-8,rot:0},{kind:"crop",x0:14.7,z0:2.6,x1:20.4,z1:8.2,rot:0},{kind:"pasture",x0:14.9,z0:-4.2,x1:20.4,z1:1,rot:0},{kind:"crop",x0:-20.4,z0:-7.2,x1:-15.4,z1:-4.6,rot:0},{kind:"crop",x0:2,z0:-13.2,x1:11,z1:-10.6,rot:0},{kind:"pasture",x0:-13,z0:-13.2,x1:-4,z1:-10.4,rot:0}],bx=[{x0:-1,z0:9.5,x1:8.4,z1:11.6}];function wx(i,t,e,n,s,r){const o=s-e,a=r-n,l=o*o+a*a;let c=l>0?((i-e)*o+(t-n)*a)/l:0;c=c<0?0:c>1?1:c;const h=e+o*c,d=n+a*c;return Math.hypot(i-h,t-d)}function Si(i,t){let e=1/0;for(const n of gl)for(let s=0;s<n.pts.length-1;s++){const r=wx(i,t,n.pts[s][0],n.pts[s][1],n.pts[s+1][0],n.pts[s+1][1])-n.w*.5;r<e&&(e=r)}return e}function Tx(i,t,e,n=0){return i>e.x0-n&&i<e.x1+n&&t>e.z0-n&&t<e.z1+n}function Mi(i,t,e,n=0){for(const s of e)if(Tx(i,t,s,n))return!0;return!1}function mu(i=0){const t=[],e=Xn.center.length,n=[];for(let r=0;r<e;r++){const o=Xn.center[Math.max(0,r-1)],a=Xn.center[Math.min(e-1,r+1)],l=a[0]-o[0],c=a[1]-o[1],h=Math.hypot(l,c)||1;n.push([-c/h,l/h])}for(let r=0;r<e;r++){const o=Xn.half[r]-i;t.push([Xn.center[r][0]+n[r][0]*o,Xn.center[r][1]+n[r][1]*o])}const s=Sn.r-i;for(let r=0;r<=Sn.steps;r++){const o=r/Sn.steps,a=(Sn.a0+(Sn.a1-Sn.a0)*o)*(Math.PI/180),c=r===0||r===Sn.steps?1:1+(Math.sin(r*2.7)*.5+Math.sin(r*1.13+2)*.5)*(Sn.wob/Sn.r);t.push([Sn.cx+Math.cos(a)*s*c,Sn.cz+Math.sin(a)*s*c])}for(let r=e-1;r>=0;r--){const o=Xn.half[r]-i;t.push([Xn.center[r][0]-n[r][0]*o,Xn.center[r][1]-n[r][1]*o])}return t}const dn=mu(0);function En(i,t){let e=!1,n=1/0;for(let s=0,r=dn.length-1;s<dn.length;r=s++){const o=dn[s][0],a=dn[s][1],l=dn[r][0],c=dn[r][1];a>t!=c>t&&i<(l-o)*(t-a)/(c-a)+o&&(e=!e);const h=l-o,d=c-a,u=h*h+d*d;let f=u>0?((i-o)*h+(t-a)*d)/u:0;f=f<0?0:f>1?1:f;const g=Math.hypot(i-(o+h*f),t-(a+d*f));g<n&&(n=g)}return e?-n:n}function gu(i){const t=[];for(let e=0,n=dn.length-1;e<dn.length;n=e++){const s=dn[e][0],r=dn[e][1],o=dn[n][0],a=dn[n][1];if(s===o)continue;const l=(i-s)/(o-s);l>=0&&l<=1&&t.push(r+(a-r)*l)}return t.sort((e,n)=>e-n),{z0:t[0],z1:t[t.length-1]}}function Dr(i,t,e){let n=Math.imul(i|0,374761393)^Math.imul(t|0,668265263)^Math.imul(e|0,1013904223);return n=Math.imul(n^n>>>13,1274126177),((n^n>>>16)>>>0)/4294967296}function Ax(i,t,e){const n=Math.floor(i),s=Math.floor(t),r=i-n,o=t-s,a=r*r*(3-2*r),l=o*o*(3-2*o),c=Dr(n,s,e),h=Dr(n+1,s,e),d=Dr(n,s+1,e),u=Dr(n+1,s+1,e);return c+(h-c)*a+(d-c)*l+(c-h-d+u)*a*l}const Us=(i,t,e,n=3)=>{let s=0,r=.5,o=1,a=0;for(let l=0;l<n;l++)s+=r*Ax(i*o,t*o,e+l*7),a+=r,r*=.5,o*=2;return s/a},Xs=i=>i<0?0:i>1?1:i,Zr=i=>i*i*(3-2*i),yi=(i,t,e)=>{const n=new Lt(i),s=new Lt(t);return n.lerp(s,Xs(e)).getHex()};function lh(i,t,e){if(e>=0)return xt;const n=Zr(Xs(-e/ui.bank));return xt-(xt-ui.bed)*n}function Rx(i,t,e,n){const s=Us(i*.075,t*.075,3,3),r=Us(i*.42,t*.42,9,2);let o=yi(mt.grassDark,mt.grassAlt,s);o=yi(o,mt.grass,.35+r*.5),Us(i*.19,t*.19,21,2)>.68&&(o=yi(o,9079630,.45));let a=o;if(e<ui.sand){const c=Zr(Xs((ui.sand-e)/ui.sand));a=yi(o,mt.sand,c)}if(e<0){const c=Zr(Xs(-e/1.5));a=yi(mt.sand,mt.mud,c*.78)}const l=new Lt(a);n.push(l.r,l.g,l.b)}function ws(i,t,e){const n=i.attributes.uv;for(let s=0;s<n.count;s++)n.setXY(s,n.getX(s)*t,n.getY(s)*e);return n.needsUpdate=!0,i}function Cx(i){const t=new sn;t.name="terrain";const e=Mx(),n=new ve({map:e,vertexColors:!0,roughness:.62,metalness:0}),s=[],r={w:Te.w/2,d:Te.d/2},o=.05;s.push({geo:ws(I(H(Te.w,o,Te.d),0,o/2,0),9,3),color:mt.trayWoodDark});const a=Te.h-o,l=o+a/2;for(const $ of[1,-1])s.push({geo:ws(I(H(Te.w,a,Te.wall),0,l,$*(r.d-Te.wall/2)),10,.42),color:mt.trayWood}),s.push({geo:ws(I(H(Te.wall,a,Te.d-Te.wall*2),$*(r.w-Te.wall/2),l,0),7,.42),color:Pi(mt.trayWood,i,.05)});for(const $ of[1,-1])s.push({geo:ws(I(H(Te.w+.1,.07,Te.wall+.1),0,1.035,$*(r.d-Te.wall/2)),10,.1),color:mt.trayWoodLight}),s.push({geo:ws(I(H(Te.wall+.1,.07,Te.d-Te.wall*2+.1),$*(r.w-Te.wall/2),1.035,0),7,.1),color:mt.trayWoodLight});const c=new Qt(de(s),n);c.castShadow=!0,c.receiveShadow=!0,t.add(c);const h=bn+.4,d=hi+.4,u=214,f=146,g=(u+1)*(f+1),x=new Float32Array(g*3),m=new Float32Array(g*3),p=new Float32Array(g*2),S=new Float32Array(g*3),R=new Uint32Array(u*f*6);let y=0,w=0;for(let $=0;$<=f;$++)for(let lt=0;lt<=u;lt++){const ht=-h+2*h*lt/u,Nt=-d+2*d*$/f,re=En(ht,Nt),Zt=lh(ht,Nt,re);x[y*3]=ht,x[y*3+1]=Zt,x[y*3+2]=Nt,p[y*2]=ht/6,p[y*2+1]=Nt/6;const ee=[];Rx(ht,Nt,re,ee),S[y*3]=ee[0],S[y*3+1]=ee[1],S[y*3+2]=ee[2],y++}for(let $=0;$<=f;$++)for(let lt=0;lt<=u;lt++){const ht=$*(u+1)+lt,Nt=x[ht*3+1]-(lt>0?x[(ht-1)*3+1]:x[ht*3+1]),re=x[ht*3+1]-(lt<u?x[(ht+1)*3+1]:x[ht*3+1]),Zt=x[ht*3+1]-($>0?x[(ht-u-1)*3+1]:x[ht*3+1]),ee=x[ht*3+1]-($<f?x[(ht+u+1)*3+1]:x[ht*3+1]),F=2*h/u,jt=2*d/f,Yt=(Nt-re)/F,C=(Zt-ee)/jt,_=Math.hypot(Yt,1,C);m[ht*3]=Yt/_,m[ht*3+1]=1/_,m[ht*3+2]=C/_}for(let $=0;$<f;$++)for(let lt=0;lt<u;lt++){const ht=$*(u+1)+lt;R[w++]=ht,R[w++]=ht+u+1,R[w++]=ht+1,R[w++]=ht+1,R[w++]=ht+u+1,R[w++]=ht+u+2}const b=new Ne;b.setAttribute("position",new be(x,3)),b.setAttribute("normal",new be(m,3)),b.setAttribute("uv",new be(p,2)),b.setAttribute("color",new be(S,3)),b.setIndex(new be(R,1));const L=Sx(),v=new ve({map:L,vertexColors:!0,roughness:.97,metalness:0}),M=new Qt(b,v);M.receiveShadow=!0,M.name="ground",t.add(M);const T=mu(ui.shrink);let A=0;for(let $=0,lt=T.length-1;$<T.length;lt=$++)A+=T[lt][0]*T[$][1]-T[$][0]*T[lt][1];A<0&&T.reverse();const P=new Kh(T.map($=>new vt($[0],-$[1]))),D=new dl(P);D.rotateX(-Math.PI/2),D.translate(0,ui.y,0);{const $=D.attributes.position.count,lt=new Float32Array($*3);for(let ht=0;ht<$;ht++)lt[ht*3+1]=1;D.setAttribute("normal",new be(lt,3))}{const $=D.attributes.position,lt=new Float32Array($.count*3);for(let Nt=0;Nt<$.count;Nt++){const re=$.getX(Nt),Zt=$.getZ(Nt),ee=En(re,Zt),F=Zr(Xs(-ee/3.2)),jt=new Lt().lerpColors(new Lt(7652022),new Lt(4033430),F);lt[Nt*3]=jt.r,lt[Nt*3+1]=jt.g,lt[Nt*3+2]=jt.b}D.setAttribute("color",new be(lt,3));const ht=new Float32Array($.count*2);for(let Nt=0;Nt<$.count;Nt++)ht[Nt*2]=$.getX(Nt)/4.2,ht[Nt*2+1]=$.getZ(Nt)/4.2;D.setAttribute("uv",new be(ht,2))}const N=yx(),z=new ve({vertexColors:!0,normalMap:N,normalScale:new vt(.34,.34),roughness:.44,metalness:0,transparent:!0,opacity:.9,side:pn}),q=new Qt(D,z);q.receiveShadow=!0,q.name="water",t.add(q);const W=Ex();W.repeat.set(1,1);const tt=[],Y=[];for(const $ of ci){$.x1-$.x0,$.z1-$.z0;const lt=fi([[[$.x0,xt+.022,$.z0],[$.x0,xt+.022,$.z1],[$.x1,xt+.022,$.z1],[$.x1,xt+.022,$.z0]]]),ht=lt.attributes.uv,Nt=lt.attributes.position;for(let Zt=0;Zt<ht.count;Zt++)ht.setXY(Zt,(Nt.getX(Zt)-$.x0)/3.2,(Nt.getZ(Zt)-$.z0)/1.1);const re=$.kind==="crop"?yi(9075269,7174714,Us($.x0,$.z0,5)):yi(7309894,6060604,Us($.x0,$.z0,6));if(tt.push({geo:lt,color:Pi(re,i,.07)}),$.kind==="crop"){const ee=Px(4152364,5139251,i),F=[[[$.x0,$.z0],[$.x1,$.z0]],[[$.x1,$.z0],[$.x1,$.z1]],[[$.x1,$.z1],[$.x0,$.z1]],[[$.x0,$.z1],[$.x0,$.z0]]];for(const[jt,Yt]of F){(jt[0]+Yt[0])/2,(jt[1]+Yt[1])/2;const C=Math.hypot(Yt[0]-jt[0],Yt[1]-jt[1]),_=Math.atan2(Yt[1]-jt[1],Yt[0]-jt[0]),k=Math.max(1,Math.round(C/.9));for(let X=0;X<k;X++){const J=(X+.5)/k,at=jt[0]+(Yt[0]-jt[0])*J,ct=jt[1]+(Yt[1]-jt[1])*J;Y.push({geo:I(H(.94,.42,.5),at,xt+.42/2,ct,_+i.range(-.05,.05)),color:ce(ee,.9+i.f()*.25)})}}}}if(tt.length){const $=new ve({map:W,vertexColors:!0,roughness:.98}),lt=new Qt(de(tt),$);lt.receiveShadow=!0,t.add(lt)}if(Y.length){const $=new Qt(de(Y),new ve({vertexColors:!0,roughness:.95}));$.castShadow=!0,$.receiveShadow=!0,t.add($)}const j=ml(),it=[];for(const $ of bx){const lt=fi([[[$.x0,xt+.02,$.z0],[$.x0,xt+.02,$.z1],[$.x1,xt+.02,$.z1],[$.x1,xt+.02,$.z0]]]),ht=lt.attributes.uv,Nt=lt.attributes.position;for(let re=0;re<ht.count;re++)ht.setXY(re,(Nt.getX(re)-$.x0)/2.4,(Nt.getZ(re)-$.z0)/2.4);it.push({geo:lt,color:9143159})}const Rt=new Qt(de(it),new ve({map:j,vertexColors:!0,roughness:.95}));Rt.receiveShadow=!0,t.add(Rt);const bt=[];for(let $=0;$<3;$++){const lt=$/3*Math.PI,ht=Math.cos(lt)*.09,Nt=Math.sin(lt)*.09,re=fi([[[-ht,0,-Nt],[ht,0,Nt],[ht*.5,.2,Nt*.5]],[[ht*.5,.2,Nt*.5],[-ht,0,-Nt],[-ht*.3,.22,-Nt*.3]]]),Zt=re.attributes.position,ee=new Float32Array(Zt.count*3);for(let F=0;F<Zt.count;F++){const jt=Zt.getY(F)/.22;ee[F*3]=.25+jt*.6,ee[F*3+1]=.34+jt*.55,ee[F*3+2]=.16+jt*.3}re.setAttribute("color",new be(ee,3)),bt.push({geo:re,color:16777215})}const ae=de(bt),qt=new ve({vertexColors:!0,roughness:.9,side:pn}),ne=620,K=new ll(ae,qt,ne);K.castShadow=!1,K.receiveShadow=!0;const st=new he,wt=new mn,Ht=new gn,Et=new U,Xt=new U,Ce=new Lt;let Vt=0,ie=0;for(;Vt<ne&&ie<ne*40;){ie++;const $=i.range(-bn+.6,bn-.6),lt=i.range(-hi+.6,hi-.6),ht=En($,lt);if(ht<1.05||ht>4&&i.f()>.25||Si($,lt)<.55)continue;Ht.set(i.range(-.12,.12),i.f()*6.283,i.range(-.1,.1)),wt.setFromEuler(Ht),Et.set($,lh($,lt,ht)+.01,lt);const Nt=i.range(.6,1.05);Xt.set(Nt,Nt*i.range(.8,1.35),Nt),st.compose(Et,wt,Xt),K.setMatrixAt(Vt,st),Ce.setHSL(.23+i.range(-.03,.04),.3+i.range(-.07,.09),.19+i.range(-.05,.07)),K.setColorAt(Vt,Ce),Vt++}return K.count=Vt,K.instanceMatrix.needsUpdate=!0,K.instanceColor&&(K.instanceColor.needsUpdate=!0),t.add(K),{group:t,waterMat:z,waterNormalTex:N,groundMat:v,trayMat:n}}function Px(i,t,e){return new Lt(i).lerp(new Lt(t),e.f()).getHex()}const hn=-14,Lx=[[-.05,.155],[.05,.155],[.05,.1],[.021,.076],[.057,.046],[.057,0],[-.057,0],[-.057,.046],[-.021,.076],[-.05,.1]],Dx=[[-1.02,xe.ballastTop-xe.y],[xe.ballastTopHalf,xe.ballastTop-xe.y],[xe.ballastBotHalf,xt-xe.y],[-1.58,xt-xe.y]];function Ix(i,t,e,n,s){const r=i.attributes.position,o=new Float32Array(r.count*3),a=new Lt(n),l=new Lt(s),c=new Lt;for(let h=0;h<r.count;h++){const d=Math.max(0,Math.min(1,(r.getY(h)-t)/(e-t)));c.copy(l).lerp(a,d),o[h*3]=c.r,o[h*3+1]=c.g,o[h*3+2]=c.b}return i.setAttribute("color",new be(o,3)),i}function Nx(i,t){const e=new sn;e.name="track";const n=gu(hn),s=n.z0,r=n.z1,o=s-.85,a=r+.85,l=i.nearest(hn,o),c=i.nearest(hn,a),h=i.length,d=new ve({map:ml(),vertexColors:!0,roughness:.98}),u=[],f=[[c,l+h],[l,l]];for(const[P,D]of f){const N=i.frames(P,D,.55);if(N.length<2)continue;const z=oh(Dx,N,{cap:!0}),q=z.attributes.position.count,W=new Float32Array(q*3),tt=new Lt;for(let Y=0;Y<q;Y++){tt.set(mt.ballast);const j=.88+Y*37%23/92;tt.multiplyScalar(j),W[Y*3]=tt.r,W[Y*3+1]=tt.g,W[Y*3+2]=tt.b}z.setAttribute("color",new be(W,3)),u.push({geo:z,color:16777215})}const g=new Qt(de(u),d);g.receiveShadow=!0,g.castShadow=!0,e.add(g);const x=xx(H(xe.sleeper.w,xe.sleeper.h,xe.sleeper.d),16777215),m=new ve({vertexColors:!0,roughness:.92}),p=Math.floor(h/xe.sleeper.step),S=new ll(x,m,p);S.castShadow=!0,S.receiveShadow=!0;const R=new he,y=new mn,w=new gn,b=new U,L=new U(1,1,1),v=new Lt;for(let P=0;P<p;P++){const D=P*xe.sleeper.step,N=i.frameAt(D);w.set(0,Math.atan2(N.t.x,N.t.z),0),y.setFromEuler(w),b.copy(N.p),b.y=xe.y-xe.sleeper.h/2,R.compose(b,y,L),S.setMatrixAt(P,R),v.set(Pi(mt.sleeper,t,.16)),S.setColorAt(P,v)}S.instanceMatrix.needsUpdate=!0,S.instanceColor&&(S.instanceColor.needsUpdate=!0),e.add(S);const M=new ve({vertexColors:!0,roughness:.36,metalness:.62});for(const P of[1,-1]){const D=i.frames(-.6,h+.6,.42,P*xe.gauge*.5),N=oh(Lx,D);Ix(N,xe.y-.01,xe.y+.12,mt.railHead,mt.railWeb);const z=new Qt(N,M);z.castShadow=!0,e.add(z)}const T=Ux(s,r);e.add(T);const A=Fx(-19.75,t);return e.add(A),e.add(Ox()),{group:e,bridge:T,roadBridge:A,sBridge0:l,sBridge1:c,deckZ0:o,deckZ1:a,spanZ0:s,spanZ1:r}}function Ux(i,t,e){const n=new sn;n.name="rail-bridge";const s=(i+t)/2,r=t-i+1.7,o=s-r/2,a=s+r/2,l=xe.ballastTop,c=l-xe.deckThick,h=l+.02,d=xe.girderBottom,u=1.4,f=xe.girder,g=[],x=[],m=[];for(const[w,b]of[[o-.35,-1],[a+.35,1]]){g.push({geo:I(H(3.5,1.5,.8),hn,c-.35,w),color:mt.stone}),g.push({geo:I(H(3.7,.16,.95),hn,l-.16,w),color:mt.stoneDark});for(const L of[1,-1])g.push({geo:I(H(.32,1,1.5),hn+L*1.75,c-.25,w+b*.95,0),color:ce(mt.stone,.94)})}m.push({geo:I(H(u*2-.1,xe.deckThick,r),hn,l-xe.deckThick/2,s),color:4865327}),m.push({geo:I(H(4.2,.1,r),hn,l-xe.deckThick-.05,s),color:3813413});for(const w of[1,-1]){const b=hn+w*u;x.push({geo:I(H(f,h-d,r),b,(h+d)/2,s),color:mt.girder}),x.push({geo:I(H(f+.1,.09,r),b,h-.045,s),color:ce(mt.girder,1.12)}),x.push({geo:I(H(f+.1,.09,r),b,d+.045,s),color:ce(mt.girder,1.05)});const L=Math.max(3,Math.round(r/.55));for(let v=1;v<L;v++){const M=o+r*v/L;x.push({geo:I(H(f+.05,h-d-.2,.1),b,(h+d)/2,M),color:ce(mt.girder,.9)})}x.push({geo:I(H(.04,.2,.7),b+w*(f/2+.03),l-.42,s+r*.22),color:14207400})}const p=Math.max(3,Math.round(r/.62));for(let w=0;w<=p;w++){const b=o+r*w/p;x.push({geo:I(H(u*2,.13,.16),hn,c-.07,b),color:ce(mt.girder,.86)})}for(let w=0;w<p;w++){const b=o+r*w/p,L=o+r*(w+1)/p,v=L-b,M=Math.atan2(c-.14-(c-.07),v),T=Math.hypot(v,c-.07-(c-.14));x.push({geo:I(H(.08,.07,T),hn,(c-.14+c-.07)/2,(b+L)/2,0,1,1,1,M*(w%2?1:-1)),color:ce(mt.girder,.8)})}for(const w of[1,-1]){const b=hn+w*(u-.22),L=Math.max(4,Math.round(r/.62));for(let v=0;v<=L;v++){const M=o+r*v/L;x.push({geo:I(H(.055,.36,.055),b,l+.18,M),color:ce(mt.girder,.95)})}x.push({geo:I(H(.05,.05,r),b,l+.34,s),color:ce(mt.girder,1.05)}),x.push({geo:I(H(.04,.04,r),b,l+.22,s),color:ce(mt.girder,1)})}const S=new Qt(de(g),new ve({vertexColors:!0,roughness:.95}));S.castShadow=!0,S.receiveShadow=!0;const R=new Qt(de(x),new ve({vertexColors:!0,roughness:.62,metalness:.25}));R.castShadow=!0,R.receiveShadow=!0;const y=new Qt(de(m),new ve({vertexColors:!0,roughness:.9}));return y.castShadow=!0,y.receiveShadow=!0,n.add(S,R,y),n}function Fx(i,t){const e=new sn;e.name="road-bridge";const n=gu(i),s=(n.z0+n.z1)/2,r=n.z1-n.z0+.5,o=r/2,a=ui.bed-.18,c=.62-a,h=.52,d=.75,u=.82,f=[],g=[],x=[],m=13;for(let y=0;y<m;y++){const w=-Math.PI/2+Math.PI*y/m,b=-Math.PI/2+Math.PI*(y+1)/m,L=(w+b)/2,v=Math.sin(L)*o,M=a+Math.cos(L)*c,T=Math.atan2(v/o,(M-a)/c),A=M+Math.cos(L)*h*.5,P=v+Math.sin(L)*h*.5,D=Math.PI*o/m+.06;f.push({geo:I(H(u*2+.24,h,D),i,A,s+P,0,1,1,1,-T),color:Pi(ce(mt.stone,.9+t.f()*.2),t,.05)})}for(const y of[1,-1]){const w=s+y*(o+.55);f.push({geo:I(H(u*2+.24,1.5,1.1),i,.3,w),color:mt.stone}),f.push({geo:I(H(u*2+.5,.2,1.5),i,.72,w+y*.25),color:mt.stoneDark})}g.push({geo:I(H(u*2+.24,.16,r+1.9),i,d-.08,s),color:7169109}),x.push({geo:I(H(u*2-.06,.04,r+1.9),i,d+.005,s),color:10129796});for(const y of[1,-1]){const w=i+y*(u+.04);f.push({geo:I(H(.16,.34,r+1.9),w,d+.17,s),color:mt.stoneDark}),f.push({geo:I(H(.22,.07,r+1.9),w,d+.37,s),color:ce(mt.stone,1.05)})}const p=new Qt(de(f),new ve({vertexColors:!0,roughness:.95}));p.castShadow=!0,p.receiveShadow=!0;const S=new Qt(de(g),new ve({vertexColors:!0,roughness:.95}));S.receiveShadow=!0;const R=new Qt(de(x),new ve({map:pu(),vertexColors:!0,roughness:.95}));return R.receiveShadow=!0,e.add(p,S,R),e}function Ox(i){const t=new sn;t.name="level-crossing";const e=8.2,n=ax,s=xe.ballastTop,r=1.15,o=[],a=[];o.push({geo:I(H(r*2+.5,.08,4.9),n,s-.04,e),color:5063220});for(const h of[1,-1]){const d=e+h*2.45,u=e+h*3.5,f=s,g=xt+.04;o.push({geo:fi([[[n-r,f,d],[n+r,f,d],[n+r,g,u],[n-r,g,u]]]),color:5918527})}for(const h of[1,-1])for(const d of[1,-1]){const u=n+d*(r+.45);for(let f=0;f<4;f++){const g=e+h*(2.1+f*.62);o.push({geo:I(H(.1,.72,.1),u,s-.28,g),color:7035719})}}for(const h of[1,-1])for(const d of[1,-1]){const u=n+d*(r+.75),f=e+h*2;a.push({geo:I(kt(.06,.07,1.5,8),u,s+.55,f),color:4869970}),a.push({geo:I(H(.05,.05,.9),u,s+1.22,f,.5),color:15262420}),a.push({geo:I(H(.05,.05,.9),u,s+1.22,f,-.5),color:15262420}),a.push({geo:I(Bx(.07),u,s+1.35,f),color:9055010});const g=1.5,x=h>0?-.95:.95;a.push({geo:I(H(.07,.07,g),u+d*.28,s+.5+g*.42*Math.cos(x),f+g*.42*Math.sin(-x),0,1,1,1,0,0),color:15262420})}const l=new Qt(de(o),new ve({vertexColors:!0,roughness:.92}));l.castShadow=!0,l.receiveShadow=!0;const c=new Qt(de(a),new ve({vertexColors:!0,roughness:.5,metalness:.4}));return c.castShadow=!0,t.add(l,c),t}function Bx(i){return new qs(i,8,6)}const ot=xt;function zx(i,t,e,n,s,r,o,a=!0){const l=t/2+n,c=Math.atan2(e,l),h=Math.hypot(e,l),d=Math.max(3,Math.round(s)),u=h/d,f=[];for(const g of[1,-1])for(let x=0;x<d;x++){const m=(x+.5)*u;f.push({geo:I(H(i+n*2,.055,u*1.28),0,Math.sin(c)*m,g*(l-Math.cos(c)*m),0,1,1,1,g*c),color:Pi(ce(o,.84+x%2*.18+r.f()*.1),r,.05)})}return a&&f.push({geo:I(H(i+n*2,.12,.17),0,e+.04,0),color:ce(o,.78)}),f}function jn(i,t,e){const{x:n=0,z:s=0,ry:r=0,w:o,d:a,h:l,overhang:c=.18,baseY:h=0,color:d,courses:u,hip:f=!1,ridge:g=!0}=e,x=!f&&a>o*1.05,m=x?a:o,p=x?o:a,S=r+(x?Math.PI/2:0),R=f?gx(m,p,l,.004):mx(m,p,l,.004);i.push({geo:I(R,n,h,s,S),color:ce(d,.8)});for(const y of zx(m,p,l,c,u??Math.max(3,p*3.4),t,d,g))i.push({geo:I(y.geo,n,h,s,S),color:y.color})}function ch(i,t,e,n){const{x:s,z:r,dx:o,dz:a,width:l,floors:c,wallH:h,sill:d=.44}=n,u=Math.max(1,Math.round(l/.68)),f=Math.atan2(o,a),g=-a,x=o;for(let m=0;m<c;m++){const p=c===1?d:.36+m*Math.max(.52,(h-.74)/(c-1));for(let S=0;S<u;S++){if(u>2&&e.chance(.1))continue;const R=u===1?0:(S/(u-1)-.5)*(l-.44),y=s+g*R+o*.014,w=r+x*R+a*.014;i.push({geo:I(H(.4,.44,.05),y,p,w,f),color:15853523}),t.push({geo:I(H(.29,.33,.06),y+o*.016,p,w+a*.016,f),color:mt.glassDay})}}}function Hx(i,t,e,n){const{x:s,z:r,w:o,d:a,ry:l,floors:c=1,wallH:h=.95,roofH:d=.62}=n,u=n.wallColor??e.pick(hx),f=n.roofColor??e.pick(ux),g=(y,w)=>i.push({geo:I(y,s,0,r,l),color:w});if(g(I(H(o+.16,.44,a+.16),0,ot-.18,0),mt.stoneDark),g(I(H(o+.05,.1,a+.05),0,ot+.05,0),ce(u,.84)),g(I(H(o,h,a),0,ot+.1+h/2,0),Pi(u,e,.05)),jn(i,e,{x:s,z:r,ry:l,w:o,d:a,h:d,baseY:ot+.1+h,color:f}),n.chimney!==!1){const y=(e.f()-.5)*o*.55;g(I(H(.2,d+.36,.2),y,ot+.1+h+(d+.36)/2-.14,0),mt.brick),g(I(H(.27,.07,.27),y,ot+.1+h+d+.26,0),ce(mt.brick,1.18))}const x=Math.sin(l),m=Math.cos(l),p=Math.cos(l),S=-Math.sin(l);ch(i,t,e,{x:s+x*(a/2),z:r+m*(a/2),dx:x,dz:m,width:o,floors:c,wallH:h+.1}),e.chance(.72)&&ch(i,t,e,{x:s+p*(o/2),z:r+S*(o/2),dx:p,dz:S,width:a,floors:c,wallH:h+.1});const R=(e.f()-.5)*(o-.55);g(I(H(.3,.6,.06),x*(a/2+.015)-m*R,ot+.42,m*(a/2+.015)+x*R,l),px(4863268,7031344,e.f()))}function kx(i,t,e){const n=qe.cx,s=qe.buildingZ0,r=qe.buildingZ1,o=r-s,a=8.6,l=(s+r)/2,c=1.4,h=.86,d=14734006,u=7624266,f=(m,p)=>i.push({geo:m,color:p});f(I(H(a+.2,.42,o+.2),n,ot-.17,l),mt.stoneDark),f(I(H(a,c,o),n,ot+.1+c/2,l),d),f(I(H(a+.08,.12,o+.08),n,ot+.1+c*.62,l),ce(d,.88)),jn(i,e,{x:n,z:l,w:a,d:o,h,overhang:.22,courses:12,baseY:ot+.1+c,color:u});for(const m of[-1,1])f(I(H(.26,1.5,.26),n+m*3,ot+.1+c+.62,l),mt.brick),f(I(H(.34,.09,.34),n+m*3,ot+.1+c+1.38,l),ce(mt.brick,1.2));const g=r,x=r+1.15;f(I(H(a-.6,.07,x-g),n,ot+1.06,(g+x)/2,0,1,1,1,.16),6048316);for(let m=0;m<5;m++){const p=n-(a-1.4)/2+(a-1.4)*m/4;f(I(kt(.05,.06,1,7),p,ot+.55,x-.16),4864556)}f(I(H(qe.half*2,.26,qe.platformZ1-qe.platformZ0),n,ot+.13,(qe.platformZ0+qe.platformZ1)/2),9340276),f(I(H(qe.half*2+.16,.1,qe.platformZ1-qe.platformZ0+.16),n,ot-.02,(qe.platformZ0+qe.platformZ1)/2),mt.stoneDark),f(I(H(qe.half*2-.2,.02,.16),n,ot+.27,qe.platformZ1-.28),13148988);for(const m of[1,-1]){const p=m>0?r+.01:s-.01;for(let S=0;S<7;S++){const R=n-a/2+.75+S*((a-1.5)/6),y=ot+.86;f(I(H(.42,.5,.06),R,y,p,0),15853782),t.push({geo:I(H(.3,.38,.07),R,y,p+m*.02),color:mt.glassDay})}}for(const m of[1,-1]){const p=n+m*(a/2+.01);f(I(H(.06,.9,.5),p,ot+.8,l),15853782),t.push({geo:I(H(.07,.78,.4),p+m*.02,ot+.8,l),color:mt.glassDay})}f(I(H(.5,.85,.08),n-.2,ot+.52,r+.02),4149086),f(I(H(1.5,.22,.05),n,ot+1.2,x-.2),3103306)}function Gx(i,t,e){const h=(f,g)=>i.push({geo:f,color:g});h(I(H(3.6+.2,.45,2.7+.2),2,ot-.18,-1.7),mt.stoneDark),h(I(H(3.6,2.1,2.7),2,ot+.1+2.1/2,-1.7),14668731),h(I(H(3.6+.1,.1,2.7+.1),2,ot+.1+2.1,-1.7),ce(14668731,.86)),jn(i,e,{x:2,z:-1.7,w:3.6,d:2.7,h:.8,overhang:.26,courses:6,baseY:ot+.1+2.1,color:5529692,hip:!0,ridge:!1});const d=1,u=3.1;h(I(H(d+.18,.5,d+.18),2-3.6/2+.5,ot+.1+.25,-1.7),mt.stoneDark),h(I(H(d,u,d),2-3.6/2+.5,ot+.35+u/2,-1.7),14208180),h(I(H(d+.16,.12,d+.16),2-3.6/2+.5,ot+.35+u,-1.7),ce(14208180,.85));for(let f=0;f<4;f++){const g=f/4*Math.PI*2,x=2-3.6/2+.5+Math.sin(g)*(d/2+.02),m=-1.7+Math.cos(g)*(d/2+.02);h(I(H(.44,.44,.05),x,ot+.35+u-.55,m,g),15985366),h(I(H(.05,.05,.05),x+Math.sin(g)*.04,ot+.35+u-.55,m+Math.cos(g)*.04),2763304)}h(I(Zs(d*.78,1.15,4),2-3.6/2+.5,ot+.47+u+.55,-1.7,Math.PI/4),4542537),h(I(kt(.02,.02,.3,5),2-3.6/2+.5,ot+.47+u+1.24,-1.7),3815990);for(const f of[1,-1])for(let g=0;g<2;g++)for(let x=0;x<3;x++){const m=.8999999999999999+x*1.1,p=-1.7+f*(2.7/2+.01);h(I(H(.4,.44,.05),m,ot+.5+g*.85,p),15787730),t.push({geo:I(H(.29,.33,.06),m,ot+.5+g*.85,p+f*.02),color:mt.glassDay})}h(I(H(1.5,.12,.7),2+.8,ot+.95,-1.7+2.7/2+.3,0,1,1,1,-.12),14208180);for(const f of[1,-1])h(I(kt(.06,.07,.95,8),2+.8+f*.6,ot+.47,-1.7+2.7/2+.55),14208180);h(I(H(.5,.9,.08),2+.8,ot+.55,-1.7+2.7/2+.01),4149086);for(let f=0;f<2;f++)h(I(H(1.7-f*.2,.1,.3-f*.06),2+.8,ot+.05+f*.1,-1.7+2.7/2+.62-f*.16),mt.stone)}function Vx(i,t,e){const h=(g,x)=>i.push({geo:g,color:x});h(I(H(5+.2,.45,2.5+.2),9.9,ot-.18,-5.4),mt.stoneDark),h(I(H(5,1.5,2.5),9.9,ot+.1+1.5/2,-5.4),13222828),jn(i,e,{x:9.9,z:-5.4,w:5,d:2.5,h:1.05,overhang:.24,courses:7,baseY:ot+.1+1.5,color:4872789}),h(I(H(5*.62,1.5*.72,2.5+1.3),9.9+.7,ot+.1+1.5*.72/2,-5.4),ce(13222828,.94)),jn(i,e,{x:9.9+.7,z:-5.4,w:5*.62,d:2.5+1.3,h:.6,overhang:.2,courses:5,baseY:ot+.1+1.5*.72,color:ce(4872789,1.08)});const d=1.35,u=3,f=9.9-5/2-.2;h(I(H(d+.2,.5,d+.2),f,ot-.15+.25,-5.4),mt.stoneDark),h(I(H(d,u,d),f,ot+.1+u/2,-5.4),13222828);for(const g of[1,-1])for(let x=0;x<2;x++){const m=-5.4+(x-.5)*.62*g;h(I(H(.34,.8,.06),f,ot+1.5,m),3813926),t.push({geo:I(H(.22,.66,.07),f,ot+1.5,m),color:5925490});const p=f+g*(d/2+.01);h(I(H(.06,.8,.34),p,ot+1.5,-5.4+(x-.5)*.62),3813926),t.push({geo:I(H(.07,.66,.22),p+g*.02,ot+1.5,-5.4+(x-.5)*.62),color:5925490})}h(I(H(d+.2,.14,d+.2),f,ot+.1+u,-5.4),ce(13222828,.86)),h(I(Zs(d*.8,1.5,4),f,ot+.24+u+.72,-5.4,Math.PI/4),4148552),h(I(kt(.02,.02,.34,5),f,ot+.24+u+1.6,-5.4),3092268),h(I(H(.5,.5,.05),f,ot+.1+u-.45,-5.4+d/2+.01),15787730);for(const g of[1,-1])for(let x=0;x<4;x++){const m=8.4+x*1,p=-5.4+g*(2.5/2+.01);h(I(H(.32,.62,.05),m,ot+.72,p),15787730),t.push({geo:I(H(.2,.5,.06),m,ot+.72,p+g*.02),color:4876914})}h(I(H(.6,.95,.08),f+.1,ot+.57,-5.4+2.5/2+.02),4864552);for(const g of[1,-1])h(I(H(6.2,.3,.16),9.9-.6,ot+.15,-5.4+g*1.85),mt.stone)}function Ko(i,t,e,n){const{x:s,z:r,w:o=3.2,d:a=2.4,ry:l=0,wallH:c=1.3,roofH:h=.9,wallC:d=7031349,roofC:u=4868676}=n,f=(x,m)=>i.push({geo:I(x,s,0,r,l),color:m});f(I(H(o+.16,.4,a+.16),0,ot-.16,0),mt.stoneDark),f(I(H(o,c,a),0,ot+.1+c/2,0),d),jn(i,e,{x:s,z:r,ry:l,w:o,d:a,h,overhang:.2,courses:6,baseY:ot+.1+c,color:u});const g=ot+.1+c*.45;f(I(H(o*.5,c*.9,.07),0,g,a/2+.02),5849647),f(I(H(o*.5,.09,.09),0,g,a/2+.06),4141089),f(I(H(.09,c*.9,.09),0,g,a/2+.06),4141089),f(I(H(.42,.42,.05),o*.32,ot+.1+c*.72,a/2+.04),14735037)}function Wx(i,t,e){const l=(c,h)=>i.push({geo:c,color:h});l(I(H(3.4+.16,.4,1.7+.16),3.4,ot-.16,10.6),mt.stoneDark),l(I(H(3.4,1.25,1.7),3.4,ot+.1+1.25/2,10.6),10127984),jn(i,e,{x:3.4,z:10.6,w:3.4,d:1.7,h:.55,overhang:.24,courses:8,baseY:ot+.1+1.25,color:8156262});for(let c=0;c<2;c++){const h=2.4+c*2;l(I(H(.85,.85,.07),h,ot+.52,10.6-1.7/2-.02),6048307)}for(let c=0;c<3;c++){const h=2.2+c*1.2;l(I(H(.34,.36,.05),h,ot+.85,10.6-1.7/2-.01),15721936),t.push({geo:I(H(.24,.26,.06),h,ot+.85,10.6-1.7/2-.03),color:mt.glassDay})}l(I(H(3.4,.06,.8),3.4,ot+.1+1.25+.1,10.6-1.7/2-.35,0,1,1,1,.2),4866104);for(const c of[1,-1])l(I(kt(.04,.05,.95,6),3.4+c*(3.4/2-.3),ot+.55,10.6-1.7/2-.6),4141089)}function Xx(i,t,e){const l=(u,f)=>i.push({geo:u,color:f});l(I(H(2.6+.2,1.9,1.8+.2),-17.7,ot-.2,4.9),mt.stoneDark),l(I(H(2.6,1.5,1.8),-17.7,ot+.1+1.5/2,4.9),13813416),l(I(H(2.6+.06,.1,1.8+.06),-17.7,ot+.1+1.5,4.9),ce(13813416,.85)),jn(i,e,{x:-17.7,z:4.9,w:2.6,d:1.8,h:.7,overhang:.2,courses:5,baseY:ot+.1+1.5,color:5917250});const c=4.9-1.8/2-.42,h=.78,d=ot-.32;l(I(H(.14,.14,1.5),-17.7,d-h,c),4864556);for(const u of[1,-1]){for(let f=0;f<10;f++){const g=f/10*Math.PI*2;l(I(H(.1,.34,.16),-17.7+Math.cos(g)*h,d+Math.sin(g)*h,c+u*.26,0,1,1,1,0,0),ce(4864556,.85+f%2*.2)),l(I(H(.16,.1,.1),-17.7+Math.cos(g)*h,d+Math.sin(g)*h,c+u*.26,0,1,1,1,0,g),3812384)}l(I(kt(h*2,h*2,.05,14),-17.7,d,c+u*.26,0,1,1,1,0,Math.PI/2),5521454)}l(I(kt(.08,.08,.7,8),-17.7,d,c,0,1,1,1,0,Math.PI/2),3812384);for(let u=0;u<2;u++)l(I(H(.32,.4,.05),-17.7-.6+u*1.2,ot+.95,4.9-1.8/2-.01),15721936),t.push({geo:I(H(.22,.3,.06),-17.7-.6+u*1.2,ot+.95,4.9-1.8/2-.03),color:mt.glassDay});l(I(H(.4,.7,.07),-17.7+.9,ot+.45,4.9-1.8/2-.02),4864552);for(let u=0;u<4;u++)l(I(H(.28,.2,.22),-17.7+1.5+u%2*.32,ot+.14+Math.floor(u/2)*.2,4.9-1.2+e.range(-.1,.1),e.range(0,1)),14208434)}function Yx(i,t){const s=(o,a)=>i.push({geo:o,color:a});for(const o of[1,-1])s(I(H(.14,1.9,.14),-1.4+o*.42,ot+1.9/2,2.6),4864556);s(I(H(1.2,.12,.12),-1.4,ot+1.9,2.6),4864556),s(I(H(.12,.12,1.5),-1.4,ot+1.9+.28,2.6+.6,0,1,1,1,-.22),4864556),s(I(H(.1,.5,.1),-1.4,ot+1.9-.02,2.6+1.16),3090980),s(I(H(.3,.24,.3),-1.4,ot+1.9-.62,2.6+1.16),7035460),s(I(H(.04,.04,1.5),-1.4,ot+1.9+.3,2.6+.6,0,1,1,1,.22),3813416)}function qx(i,t){const e=[],n=[];for(const h of gl){const d=xt+(h.kind==="path"?.028:.04),u=h.kind==="main"?9076587:h.kind==="lane"?9404521:10259053,f=rh(h.pts,h.w,{y:d,uvScale:3.2}),g=f.attributes.position.count,x=new Float32Array(g*3),m=new Lt(u);for(let p=0;p<g;p++){const S=.92+p*53%17/100;x[p*3]=m.r*S,x[p*3+1]=m.g*S,x[p*3+2]=m.b*S}f.setAttribute("color",new be(x,3)),e.push({geo:f,color:16777215}),n.push({geo:rh(h.pts,h.w+.7,{y:xt+.012,uvScale:3.2}),color:7305804})}const s=new ve({map:ml(),vertexColors:!0,roughness:.96}),r=new Qt(de(e),s);r.receiveShadow=!0;const o=new Qt(de(n),new ve({vertexColors:!0,roughness:.97}));o.receiveShadow=!0,i.add(o,r);const a=[],l=(h,d,u,f,g)=>{const x=fi([[[h,g,d],[h,g,f],[u,g,f],[u,g,d]]]),m=x.attributes.uv,p=x.attributes.position;for(let S=0;S<m.count;S++)m.setXY(S,p.getX(S)/2.6,p.getZ(S)/2.6);a.push({geo:x,color:10195589})};l(1.7,-3.9,8.6,.6,xt+.045),l(-3,1.9,7.2,3.9,xt+.045),l(-1.9,.4,.6,1.9,xt+.045);const c=new Qt(de(a),new ve({map:pu(),vertexColors:!0,roughness:.95}));c.receiveShadow=!0,i.add(c)}function Zx(i){const t=new sn;t.name="town";const e=[],n=[];kx(e,n,i),Gx(e,n,i),Vx(e,n,i),Wx(e,n,i),Xx(e,n,i),Ko(e,n,i,{x:19,z:7.4,w:3.4,d:2.6,ry:.2,wallC:7031349,roofC:4868676}),Ko(e,n,i,{x:16.6,z:9.8,w:3,d:2.3,ry:-.35,wallC:7820348,roofC:5263434,wallH:1.2}),Ko(e,n,i,{x:-18.2,z:-5.2,w:3,d:2.3,ry:.5,wallC:7031349,roofC:4605503,wallH:1.2});const s=[{x:-1.4,z:1.5,ry:0,w:2,d:1.7,floors:2,wallH:1.35,roofH:.6},{x:.8,z:1.5,ry:0,w:1.9,d:1.7,floors:2,wallH:1.35,roofH:.58},{x:3.1,z:1.55,ry:0,w:2.1,d:1.6,floors:2,wallH:1.3,roofH:.62},{x:5.3,z:1.6,ry:0,w:1.8,d:1.6,floors:1,wallH:1,roofH:.6},{x:7.2,z:1.7,ry:.06,w:2,d:1.7,floors:2,wallH:1.3,roofH:.6},{x:.4,z:.4,ry:Math.PI/2,w:1.9,d:1.6,floors:2,wallH:1.32,roofH:.58},{x:.7,z:-.8,ry:Math.PI/2,w:1.8,d:1.6,floors:2,wallH:1.32,roofH:.6},{x:3.2,z:-3,ry:0,w:2,d:1.7,floors:2,wallH:1.4,roofH:.62},{x:5.3,z:-3,ry:0,w:2,d:1.7,floors:2,wallH:1.4,roofH:.62},{x:7.4,z:-2.9,ry:0,w:2.1,d:1.7,floors:2,wallH:1.45,roofH:.65},{x:9,z:.2,ry:Math.PI/2,w:2,d:1.8,floors:2,wallH:1.35,roofH:.62},{x:8.9,z:-2,ry:Math.PI/2,w:1.9,d:1.7,floors:2,wallH:1.35,roofH:.6},{x:11,z:-.2,ry:Math.PI/2,w:1.8,d:1.6,floors:1,wallH:1,roofH:.58},{x:5,z:-3.6,ry:.7,w:1.7,d:1.5,floors:1,wallH:.98,roofH:.58},{x:6.6,z:-4.5,ry:.85,w:1.7,d:1.5,floors:1,wallH:1,roofH:.6},{x:8,z:-3.9,ry:1.9,w:1.8,d:1.5,floors:1,wallH:1,roofH:.58},{x:-1.6,z:-2.4,ry:1.5,w:1.8,d:1.5,floors:1,wallH:.98,roofH:.58},{x:-2.4,z:-4.2,ry:1.9,w:1.7,d:1.5,floors:1,wallH:1,roofH:.6},{x:-4,z:-4.4,ry:2.3,w:1.8,d:1.5,floors:1,wallH:1,roofH:.58},{x:-6,z:-3.7,ry:2.6,w:1.7,d:1.5,floors:1,wallH:.98,roofH:.56},{x:-12.3,z:5.6,ry:1.57,w:1.8,d:1.5,floors:1,wallH:.98,roofH:.56},{x:-12.4,z:3.8,ry:1.57,w:1.7,d:1.5,floors:1,wallH:.96,roofH:.54},{x:-12.3,z:2,ry:1.57,w:1.7,d:1.4,floors:1,wallH:.95,roofH:.54},{x:-12.2,z:-1.6,ry:1.57,w:1.7,d:1.4,floors:1,wallH:.95,roofH:.52},{x:-11.8,z:-3.4,ry:1.75,w:1.6,d:1.4,floors:1,wallH:.92,roofH:.5},{x:15.2,z:11,ry:-.3,w:2,d:1.7,floors:1,wallH:1.05,roofH:.62},{x:17.2,z:10.4,ry:-.15,w:1.9,d:1.6,floors:1,wallH:1,roofH:.58},{x:19.2,z:9.6,ry:.1,w:1.8,d:1.6,floors:1,wallH:1,roofH:.58},{x:-18.2,z:6.9,ry:.15,w:1.8,d:1.6,floors:1,wallH:1,roofH:.58},{x:-16.4,z:7.6,ry:-.4,w:1.7,d:1.5,floors:1,wallH:.95,roofH:.55},{x:-19,z:-2.6,ry:.9,w:1.8,d:1.6,floors:1,wallH:1,roofH:.58}];for(const h of s)Hx(e,n,i,{x:h.x+i.range(-.06,.06),z:h.z+i.range(-.06,.06),ry:h.ry+i.range(-.04,.04),w:h.w,d:h.d,floors:h.floors,wallH:h.wallH,roofH:h.roofH});for(const[h,d,u,f,g,x]of[[-2.6,3.9,.1,2.2,1.5,1.2],[-.4,4.4,.25,1.9,1.4,1.15]]){e.push({geo:I(H(f,x,g),h,ot+.1+x/2,d,u),color:11049600}),e.push({geo:I(H(f+.14,.4,g+.14),h,ot-.16,d,u),color:mt.stoneDark}),jn(e,i,{x:h,z:d,ry:u,w:f,d:g,h:.55,overhang:.18,courses:5,baseY:ot+.1+x,color:5200472});for(let m=0;m<2;m++){const p=(m-.5)*f*.5;e.push({geo:I(H(.36,.4,.05),h+Math.cos(u)*p,ot+.78,d-Math.sin(u)*p-g/2-.01,u),color:15721936}),n.push({geo:I(H(.26,.3,.06),h+Math.cos(u)*p,ot+.78,d-Math.sin(u)*p-g/2-.03,u),color:mt.glassDay})}}Yx(e);const r=new ve({vertexColors:!0,roughness:.88,metalness:0}),o=new Qt(de(e),r);o.castShadow=!0,o.receiveShadow=!0,t.add(o);const a=new ve({vertexColors:!0,roughness:.22,metalness:.1,emissive:new Lt(mt.glow),emissiveIntensity:0}),l=new Qt(de(n),a);l.castShadow=!1,l.receiveShadow=!1,t.add(l),qx(t);const c=[{x:qe.cx,z:4.9,r:4.9},{x:2,z:-1.7,r:2.5},{x:8.6,z:-5.4,r:3.8},{x:3.4,z:10.6,r:2.5},{x:-17.7,z:4.9,r:2.3},{x:19,z:7.4,r:2.1},{x:16.6,z:9.8,r:2},{x:-18.2,z:-5.2,r:2},{x:-1.4,z:10.3,r:1.3},{x:1.4,z:-4.2,r:1},{x:7.6,z:10.3,r:1},{x:-2.6,z:3.9,r:1.5},{x:-.4,z:4.4,r:1.4},{x:5,z:-1.4,r:1}];for(const h of s)c.push({x:h.x,z:h.z,r:Math.max(h.w,h.d)*.6+.3});return{group:t,glassMat:a,solidMat:r,blockers:c}}function Kx(i){const e=new Map;for(let n=0;n<i.length;n+=.5){const s=i.pointAt(n),r=`${Math.floor(s.x/2)},${Math.floor(s.z/2)}`;e.has(r)||e.set(r,[]),e.get(r).push(s.x,s.z)}return(n,s,r=5)=>{let o=1/0;const a=Math.floor(n/2),l=Math.floor(s/2),c=Math.ceil(r/2);for(let h=-c;h<=c;h++)for(let d=-c;d<=c;d++){const u=e.get(`${a+h},${l+d}`);if(u)for(let f=0;f<u.length;f+=2){const g=Math.hypot(u[f]-n,u[f+1]-s);g<o&&(o=g)}}return o}}function Jx(){const i=[];i.push({geo:kt(.06,.09,.5,6),color:mt.trunk});const t=.34,e=[[.52,.72,0],[.4,.66,.42],[.26,.6,.82]];for(let n=0;n<e.length;n++){const[s,r,o]=e[n];i.push({geo:I(Zs(s,r,8),0,t+o+r/2,0),color:n===1?ce(mt.pine[1],1.05):mt.pine[n%2]})}return de(i)}function $x(i){const t=[];t.push({geo:kt(.07,.1,.62,6),color:mt.trunk});const e=[[0,.86,0,.4],[.2,.72,.12,.3],[-.16,.78,-.14,.28]];for(let n=0;n<e.length;n++){const[s,r,o,a]=e[n];t.push({geo:I(so(a,7,5),s,r,o,i.range(0,3)),color:mt.leaf[n%mt.leaf.length]})}return de(t)}function Qx(){const i=[];return i.push({geo:kt(.05,.08,.7,6),color:mt.trunk}),i.push({geo:I(so(.3,7,6),0,1.15,0,0,1,3,1),color:mt.foliage[1]}),de(i)}function jx(i){const t=[];return t.push({geo:kt(.05,.07,.34,5),color:mt.trunk}),t.push({geo:I(so(.32,7,5),0,.5,0,i.range(0,3),1,.82,1),color:mt.leaf[1]}),de(t)}function hh(i,t,e,n,s,r){n.push({geo:I(kt(.045,.07,1.42,7),i,xt+1.42/2,t),color:3817282}),n.push({geo:I(kt(.1,.13,.09,8),i,xt+.04,t),color:3093559}),n.push({geo:I(H(.07,.07,.34),i,xt+1.42-.04,t+.14,e),color:3817282}),n.push({geo:I(H(.2,.05,.2),i,xt+1.42-.16,t+.3,e),color:3817282}),s.push({geo:I(H(.17,.19,.17),i,xt+1.42-.28,t+.3),color:16773320}),r.push({geo:I(Zs(.3,1.42-.34,10),i,xt+(1.42-.34)/2-.06,t+.3,0,1,1,1,Math.PI),color:16760937})}function tv(i,t,e,n){n.push({geo:I(H(.5,.05,.1),i-.1,xt+.2,t,e),color:7032630}),n.push({geo:I(H(.5,.05,.1),i+.1,xt+.2,t,e),color:7032630}),n.push({geo:I(H(.5,.16,.05),i,xt+.32,t-.12,e,1,1,1,.2),color:7032630});for(const s of[1,-1])n.push({geo:I(H(.06,.2,.06),i+s*.2,xt+.1,t,e),color:4014149})}function uh(i,t,e,n,s,r,o){r.push({geo:I(H(n,n*.8,n*.9),i,t+n*.4,e,s),color:o}),r.push({geo:I(H(n*1.02,.03,n*.92),i,t+n*.8,e,s),color:ce(o,1.15)})}function Jo(i,t,e,n){const s=fi([[[.62,0,0],[-.62,0,0],[-.62,.26,.16],[.62,.26,.16]],[[-.62,0,0],[.62,0,0],[.62,.26,-.16],[-.62,.26,-.16]],[[-.62,.26,.16],[.5,.22,0],[.62,.26,.16],[-.62,.26,.16]],[[-.62,.26,-.16],[.62,.26,-.16],[.5,.22,0],[-.5,.22,0]]]);n.push({geo:I(s,i,0,t,e),color:8215100}),n.push({geo:I(H(.9,.05,.28),i,.2,t,e),color:7032630}),n.push({geo:I(H(.05,.04,.7),i+.3,.24,t,e+.3),color:5916210})}function ev(i,t,e){const n=new sn;n.name="scatter";const s=[],r=[],o=[],a=Kx(t),l=(M,T,A=0)=>{if(Math.abs(M)>bn-.7||Math.abs(T)>hi-.7||En(M,T)<1.15||a(M,T,5)<2.85+A||Si(M,T)<.5+A||Mi(M,T,ci,.35))return!0;for(const P of e)if(Math.hypot(M-P.x,T-P.z)<P.r+A)return!0;return!1},c=[{geo:Jx,list:[],tint:16777215,place:"wood"},{geo:()=>$x(i),list:[],tint:16777215,place:"leaf"},{geo:Qx,list:[],tint:16777215,place:"poplar"},{geo:()=>jx(i),list:[],tint:16777215,place:"orchard"}],h=(M,T,A,P)=>M.push({x:T,z:A,s:P,r:i.range(0,6.283)});for(let M=0;M<130;M++){const T=i.range(-13.5,13.5),A=i.range(-13.5,-9.2);En(T,A)<1.2||a(T,A,5)<3.1||Mi(T,A,ci,.1)||h(c[0].list,T,A,i.range(.75,1.35))}for(let M=0;M<46;M++){const T=i.range(-bn+.8,-14.6),A=i.range(-13.4,13.4);En(T,A)<1.1||a(T,A,5)<2.95||Si(T,A)<.6||Mi(T,A,ci,.1)||h(i.chance(.55)?c[0].list:c[1].list,T,A,i.range(.7,1.2))}for(let M=0;M<64;M++){const T=i.range(14.2,bn-.8),A=i.range(-13.4,13.4);En(T,A)<1.1||a(T,A,5)<2.95||Si(T,A)<.6||Mi(T,A,ci,.1)||h(i.chance(.4)?c[0].list:c[1].list,T,A,i.range(.7,1.25))}for(let M=0;M<30;M++){const T=i.range(-bn+1,bn-1),A=i.range(9.2,hi-.8);En(T,A)<1.1||a(T,A,5)<2.95||Si(T,A)<.6||Mi(T,A,ci,.1)||h(c[1].list,T,A,i.range(.7,1.1))}for(let M=0;M<78;M++){const T=i.range(-13.4,12.4),A=i.range(-8.2,7.6),P=En(T,A);if((P<1.05||P>2.6)&&!(P>2.6&&i.chance(.22))||l(T,A,-.35))continue;const D=P<2.8&&P>1.05?1:i.pick([1,1,2]);h(c[D].list,T,A,i.range(.62,1))}for(let M=0;M<5;M++)for(let T=0;T<6;T++){const A=15.4+T*.85,P=3.4+M*.85;Mi(A,P,ci,-.4)||Si(A,P)<.4||h(c[3].list,A,P,i.range(.85,1.05))}for(let M=0;M<26;M++){const T=i.range(-8.6,.2),A=i.range(4.6,7.4);l(T,A,-.2)||h(c[1].list,T,A,i.range(.7,1))}const d=new ve({vertexColors:!0,roughness:.95,flatShading:!0}),u=new he,f=new mn,g=new gn,x=new U,m=new U,p=new Lt;for(const M of c){if(!M.list.length)continue;const T=new ll(M.geo(),d,M.list.length);T.castShadow=!0,T.receiveShadow=!0,M.list.forEach((A,P)=>{g.set(0,A.r,0),f.setFromEuler(g),x.set(A.x,xt-.04,A.z),m.set(A.s,A.s*i.range(.9,1.25),A.s),u.compose(x,f,m),T.setMatrixAt(P,u);const D=.86+i.f()*.3;p.setRGB(D,D,D*i.range(.94,1.06)),T.setColorAt(P,p)}),T.instanceMatrix.needsUpdate=!0,T.instanceColor&&(T.instanceColor.needsUpdate=!0),n.add(T)}for(const M of gl){if(M.kind==="path")continue;const T=M.w>1.4?4.4:4;for(let A=0;A<M.pts.length-1;A++){const P=M.pts[A],D=M.pts[A+1],N=Math.hypot(D[0]-P[0],D[1]-P[1]),z=Math.max(1,Math.round(N/T));for(let q=0;q<z;q++){const W=(q+.5)/z,tt=P[0]+(D[0]-P[0])*W,Y=P[1]+(D[1]-P[1])*W,j=Math.atan2(D[1]-P[1],D[0]-P[0]),it=M.kind==="main"?[1,-1]:[1];for(const Rt of it){const bt=M.w*.5+.34,ae=tt+Math.sin(j)*0+Math.cos(j+Math.PI/2)*bt*Rt,qt=Y+Math.sin(j+Math.PI/2)*bt*Rt;En(ae,qt)<.6||a(ae,qt,5)<2.6||hh(ae,qt,j+Math.PI/2+(Rt>0?0:Math.PI),s,r,o)}}}}for(const[M,T,A]of[[-1,7,0],[5.2,7,0],[2,4,0],[1.9,-3.6,0],[8.2,-3.6,0],[5,.2,0],[-1.4,1.2,1.2]])hh(M,T,A,s,r,o);const S=.3;for(let M=0;M<t.length;M+=4.6){const T=t.frameAt(M),A=T.p.x*T.n.x+(T.p.z-S)*T.n.z>=0?1:-1,P=T.p.x+T.n.x*A*3.35,D=T.p.z+T.n.z*A*3.35;if(Math.abs(P)>bn-.6||Math.abs(D)>hi-.6||En(P,D)<.9||Si(P,D)<.3||Mi(P,D,ci,.15))continue;let N=!1;for(const q of e)Math.hypot(P-q.x,D-q.z)<q.r+.35&&(N=!0);if(N)continue;const z=Math.atan2(T.t.x,T.t.z);s.push({geo:I(kt(.05,.08,2,6),P,xt+1,D),color:4866104});for(let q=0;q<2;q++){const W=xt+1.55+q*.34;s.push({geo:I(H(.9,.05,.05),P,W,D,z),color:4866104});for(const tt of[1,-1])s.push({geo:I(kt(.045,.045,.09,6),P+Math.cos(z)*tt*.4,W+.08,D-Math.sin(z)*tt*.4),color:7305856})}}{for(const[A,P]of[[-.42,-.42],[.42,-.42],[-.42,.42],[.42,.42]])s.push({geo:I(H(.13,2,.13),7.6+A,xt+1,10.3+P),color:5523002});for(const A of[.6,1.3,1.9])for(let P=0;P<4;P++){const D=P/4*Math.PI*2;s.push({geo:I(H(.07,.07,1.2),7.6+Math.cos(D)*.42,xt+A,10.3+Math.sin(D)*.42,D),color:4865587})}s.push({geo:I(kt(.62,.62,.9,12),7.6,xt+2.45,10.3),color:4872790}),s.push({geo:I(kt(.66,.66,.08,12),7.6,xt+2.94,10.3),color:3753796}),s.push({geo:I(Zs(.68,.34,12),7.6,xt+3.12,10.3),color:3753802});for(let A=0;A<8;A++){const P=A/8*Math.PI*2;s.push({geo:I(kt(.02,.02,.5,4),7.6+Math.cos(P)*.6,xt+2,10.3+Math.sin(P)*.6),color:7035460})}}{s.push({geo:I(H(1.5,.4,1.2),-1.4,xt-.14,10.3),color:mt.stoneDark}),s.push({geo:I(H(1.3,.85,1.05),-1.4,xt+.42,10.3),color:11838600}),s.push({geo:I(H(1.36,.6,1.1),-1.4,xt+1.14,10.3),color:12891283}),s.push({geo:I(H(1.5,.07,1.24),-1.4,xt+1.47,10.3),color:4147780}),fh(s,-1.4,xt+1.5,10.3,1.5,1.24,.3,4147780,i);for(let A=0;A<3;A++){const P=-1.8399999999999999+A*.44;s.push({geo:I(H(.3,.34,.05),P,xt+1.2,10.3-.56),color:15787730}),r.push({geo:I(H(.22,.26,.06),P,xt+1.2,10.3-.58),color:mt.glassDay})}s.push({geo:I(kt(.04,.05,1,6),-1.4+1.2,xt+.5,10.3-.9),color:4014149}),s.push({geo:I(H(.06,.3,.4),-1.4+1.2,xt+1.1,10.3-.9),color:11812911})}{s.push({geo:I(H(1.1,.9,.9),1.4,xt+.45,-4.2),color:9405556}),fh(s,1.4,xt+.9,-4.2,1.1,.9,.34,5525578,i),s.push({geo:I(H(.22,.5,.05),1.4-.2,xt+.3,-4.2-.47),color:4866104});const A=t.frameAt(t.nearest(3,-7));s.push({geo:I(kt(.05,.06,.5,6),A.p.x+A.n.x*2.7,xt+.25,A.p.z+A.n.z*2.7),color:15130831}),s.push({geo:I(H(.3,.22,.05),A.p.x+A.n.x*2.7,xt+.55,A.p.z+A.n.z*2.7),color:10238508})}for(const M of[-.6,1.8,4.2])tv(M,6.35,0,s);for(let M=0;M<5;M++)uh(6.4+M%2*.36,xt,9.9+Math.floor(M/2)*.4,.34,i.range(0,1.2),s,9071430);for(let M=0;M<4;M++)uh(-1.9+M%2*.34,xt,9.85+Math.floor(M/2)*.38,.32,i.range(0,1.4),s,8019774);s.push({geo:I(H(2.2,.55,1.1),6.8,xt+.27,10.9),color:3814446}),s.push({geo:I(H(2.3,.08,1.2),6.8,xt+.58,10.9),color:4866618});{const A=xt+.26;s.push({geo:I(kt(.07,.09,.95,7),4.9,A+.47,6.6),color:4147780}),s.push({geo:I(H(.1,.1,.52),4.9,A+.92,6.6-.2),color:4147780}),s.push({geo:I(kt(.11,.13,.16,8),4.9,A+.9,6.6-.46),color:5529946})}s.push({geo:I(kt(.62,.66,.28,16),5,xt+.14,-1.4),color:mt.stone}),s.push({geo:I(kt(.54,.54,.06,16),5,xt+.26,-1.4),color:4157302}),s.push({geo:I(kt(.12,.16,.72,8),5,xt+.5,-1.4),color:mt.stone}),s.push({geo:I(kt(.2,.2,.1,10),5,xt+.88,-1.4),color:mt.stoneDark}),s.push({geo:I(so(.09,8,6),5,xt+1,-1.4),color:9413284});const R=[11883583,5205834,12753482,5532030];for(let M=0;M<4;M++){const T=3+M*1.4,A=-1.7;for(const[P,D]of[[-.3,-.22],[.3,-.22],[-.3,.22],[.3,.22]])s.push({geo:I(kt(.025,.025,.62,5),T+P,xt+.31,A+D),color:7032630});s.push({geo:I(H(.86,.05,.72),T,xt+.66,A,0,1,1,1,.12),color:R[M%4]}),s.push({geo:I(H(.8,.06,.5),T,xt+.36,A),color:8219218}),s.push({geo:I(H(.8,.22,.04),T,xt+.24,A-.26),color:7032630})}Jo(-1.5,1.15,.5,s),Jo(-.5,2.4,-.3,s),Jo(-3.6,-2.2,1.9,s);for(const M of[[[-8.6,4.2],[-5.2,4.2]],[[-8.6,7.3],[-5,7.3]],[[-13.2,7],[-13.2,2]],[[-10.2,-2.6],[-9,-4.6]],[[.6,-8],[6,-8]]])nv(M[0],M[1],s);const y=new ve({vertexColors:!0,roughness:.9}),w=new Qt(de(s),y);w.castShadow=!0,w.receiveShadow=!0,n.add(w);const b=new ve({vertexColors:!0,roughness:.3,emissive:new Lt(mt.glow),emissiveIntensity:.05});n.add(new Qt(de(r),b));const L=new al({color:16760937,transparent:!0,opacity:0,blending:jo,depthWrite:!1,side:pn}),v=new Qt(de(o),L);return v.renderOrder=2,n.add(v),{group:n,glowMat:b,spillMat:L,glassMeshes:[b]}}function fh(i,t,e,n,s,r,o,a,l){const c=r/2+.14,h=Math.atan2(o,c),d=Math.hypot(o,c),u=3;for(const f of[1,-1])for(let g=0;g<u;g++){const x=(g+.5)*d/u;i.push({geo:I(H(s+.28,.05,d/u*1.3),t,e+Math.sin(h)*x,n+f*(c-Math.cos(h)*x),0,1,1,1,f*h),color:Pi(a,l,.07)})}}function nv(i,t,e,n){const s=Math.hypot(t[0]-i[0],t[1]-i[1]),r=Math.max(2,Math.round(s/.62)),o=Math.atan2(t[1]-i[1],t[0]-i[0]);for(let a=0;a<=r;a++){const l=a/r,c=i[0]+(t[0]-i[0])*l,h=i[1]+(t[1]-i[1])*l;e.push({geo:I(H(.07,.52,.07),c,xt+.24,h,o),color:7034176})}for(const a of[.2,.42])e.push({geo:I(H(s,.05,.04),(i[0]+t[0])/2,xt+a,(i[1]+t[1])/2,o),color:7034176})}const $o=2049593,Ir=1520426,_u=9058860,kr=2236446,iv=3487290,dh=7158320,ph=14273704;function sv(){const i=[],t=[];i.push({geo:I(H(.84,.11,2.92),0,.34,0),color:kr}),i.push({geo:I(H(.9,.05,2.7),0,.4,0),color:ce(kr,1.4)}),i.push({geo:I(kt(.29,.29,1.3,12),0,.73,.28,0,1,1,1,Math.PI/2),color:$o}),i.push({geo:I(kt(.3,.3,.05,12),0,.73,.92,0,1,1,1,Math.PI/2),color:Ir}),i.push({geo:I(H(.7,.4,1),0,1.02,.12),color:$o}),i.push({geo:I(H(.72,.05,1.02),0,1.23,.12),color:Ir}),i.push({geo:I(kt(.1,.115,.3,10),0,1.05,.86),color:kr}),i.push({geo:I(kt(.12,.115,.07,10),0,1.22,.86),color:mt.brass}),i.push({geo:I(kt(.085,.095,.18,8),0,1.1,.12),color:mt.brass}),i.push({geo:I(H(.06,.09,.06),0,1.23,.12),color:mt.brass}),i.push({geo:I(H(.82,.6,.86),0,.72,-.98),color:$o}),i.push({geo:I(H(.88,.06,.96),0,1.05,-.98),color:Ir}),i.push({geo:I(H(.78,.36,.34),0,.6,-1.36),color:Ir}),i.push({geo:I(H(.6,.08,.26),0,.79,-1.36),color:1710618});for(const e of[1,-1]){i.push({geo:I(H(.86,.14,.07),0,.37,e*1.48),color:_u});for(const n of[1,-1])i.push({geo:I(kt(.055,.055,.12,8),n*.26,.37,e*1.55,0,1,1,1,Math.PI/2),color:3815996})}for(const e of[1,-1])i.push({geo:I(H(.06,.03,2.2),e*.44,.42,.1),color:3815996}),i.push({geo:I(kt(.02,.02,.5,5),e*.36,.95,.6,0,1,1,1,Math.PI/2),color:mt.brass});for(const e of[1,-1])t.push({geo:I(H(.5,.3,.06),0,.86,-.98+e*.44),color:10469572});for(const e of[1,-1])t.push({geo:I(H(.06,.3,.4),e*.42,.86,-.98),color:10469572});return{p:i,g:t}}function rv(){const i=[],t=[];i.push({geo:I(H(.88,.72,2.6),0,.66,0),color:dh}),i.push({geo:I(H(.9,.2,2.56),0,.94,0),color:ph}),i.push({geo:I(H(.9,.1,2.58),0,.4,0),color:ce(dh,.85)}),i.push({geo:I(kt(.45,.45,2.5,12),0,1.04,0,0,.98,1,.98,Math.PI/2),color:iv}),i.push({geo:I(kt(.2,.2,.1,10),0,1.46,.6),color:4868684}),i.push({geo:I(kt(.2,.2,.1,10),0,1.46,-.6),color:4868684}),i.push({geo:I(H(.8,.1,2.4),0,.24,0),color:kr});for(const e of[1,-1]){i.push({geo:I(H(.84,.13,.06),0,.4,e*1.32),color:_u});for(const n of[1,-1])i.push({geo:I(kt(.05,.05,.11,8),n*.25,.4,e*1.38,0,1,1,1,Math.PI/2),color:3815996})}for(const e of[1,-1]){i.push({geo:I(H(.34,.5,.05),0,.62,e*1.31),color:4860452});for(const n of[1,-1])i.push({geo:I(H(.16,.03,.1),n*.3,.22,e*1.3),color:3815996})}for(const e of[1,-1])for(let n=0;n<5;n++){const s=-1+n*.5;t.push({geo:I(H(.05,.3,.36),e*.455,.92,s),color:16179888}),i.push({geo:I(H(.05,.36,.42),e*.462,.92,s),color:ce(ph,.88)})}return{p:i,g:t}}function mh(i){const t=[];t.push({geo:I(kt(i,i,.055,14),0,0,0,0,1,1,1,0,Math.PI/2),color:1841689}),t.push({geo:I(kt(i*.99,i*.99,.02,14),0,0,0,0,1,1,1,0,Math.PI/2),color:3025704}),t.push({geo:I(kt(i*.3,i*.3,.09,8),0,0,0,0,1,1,1,0,Math.PI/2),color:4867391});for(let e=0;e<6;e++){const n=e/6*Math.PI;t.push({geo:I(H(.02,i*1.7,.035),0,0,0,0,1,1,1,n),color:2368032})}return de(t)}function ov(i,t){const e=new sn;e.name="train";const n=new ve({vertexColors:!0,roughness:.46,metalness:.18}),s=new ve({vertexColors:!0,roughness:.25,emissive:new Lt(16763256),emissiveIntensity:0}),r=sv(),o=rv(),a={loco:.215,coach:.185},l=mh(a.loco),c=mh(a.coach),h=(P,D,N,z,q,W)=>{const tt=new sn,Y=new Qt(de(P.p),n);if(Y.castShadow=!0,Y.receiveShadow=!0,tt.add(Y),D&&D.g.length){const it=new Qt(de(D.g),s);tt.add(it)}const j=[];for(const it of q)for(const Rt of[1,-1]){const bt=new Qt(N,n);bt.castShadow=!0,bt.position.set(Rt*W,z,it),bt.rotation.y=Math.PI/2,tt.add(bt),j.push(bt)}return{v:tt,wheels:j}},d=h(r,r,l,a.loco,[-.92,0,.92],.42),u=h(o,o,c,a.coach,[-.86,.86],.4),f=h(o,o,c,a.coach,[-.86,.86],.4),g=[];for(const P of[1,-1]){const D=new sn,N=new Qt(de([{geo:I(H(.035,.05,1.95),0,0,0),color:9080722},{geo:I(kt(.045,.045,.05,8),0,0,.92,0,1,1,1,0,Math.PI/2),color:7304312},{geo:I(kt(.045,.045,.05,8),0,0,-.92,0,1,1,1,0,Math.PI/2),color:7304312},{geo:I(kt(.035,.035,.07,8),0,0,0,0,1,1,1,0,Math.PI/2),color:7304312}]),n);N.position.set(P*.47,a.loco,0),N.rotation.y=Math.PI/2,D.add(N),D.position.set(0,a.loco,0),d.v.add(D),g.push(D)}e.add(d.v,u.v,f.v);const x=.36,m=[1.55,1.35,1.35],p=[];{let P=0;for(let D=0;D<m.length;D++)p.push({half:m[D],off:P}),P+=m[D]+x+(m[D+1]??0)}const S=[d,u,f],R=2.35,y=2,w=i.nearest(4,8.2),b={s:i.nearest(8.6,8.2),running:!0,speed:1,phase:"run",dwell:0,armed:!0},L=b.s,v=P=>(P%i.length+i.length)%i.length;function M(){for(let D=0;D<S.length;D++){const N=b.s-p[D].off,z=p[D].half,q=i.pointAt(N),W=i.pointAt(N-z*.62),tt=i.pointAt(N+z*.62),Y=S[D].v;Y.position.set(q.x,q.y+xe.railH,q.z),Y.rotation.set(0,Math.atan2(tt.x-W.x,tt.z-W.z),0);const j=v(N)/a[D===0?"loco":"coach"];for(const it of S[D].wheels)it.rotation.x=j}const P=v(b.s-p[0].off)/a.loco;for(const D of g)D.rotation.x=P}function T(P){if(b.running)if(b.phase==="dwell")b.dwell-=P,b.dwell<=0&&(b.dwell=0,b.phase="run");else{const D=b.s,N=D+R*b.speed*P,z=v(w-D),q=v(N-D);b.armed&&z<=q?(b.s=w,b.phase="dwell",b.dwell=y,b.armed=!1):(b.s=N,!b.armed&&z>3&&(b.armed=!0))}M()}function A(){b.s=L,b.running=!0,b.speed=1,b.phase="run",b.dwell=0,b.armed=!0,M()}return M(),{group:e,state:b,update:T,reset:A,glassMat:s,sStation:w,BASE_SPEED:R,DWELL:y,offsets:p.map(P=>P.off)}}const yn={dusk:{sun:16760454,sunI:4.3,sunPos:[-36,13.5,21],hemiSky:16760969,hemiGnd:5326650,hemiI:1,ambI:.4,amb:11575434,fog:2760474,fogNear:96,fogFar:190,skyTop:2365984,skyMid:3023131,skyBot:1314573,exposure:1.06,stars:0,window:.3,lamp:.5,spill:0,point:4,water:.12},day:{sun:16774370,sunI:5,sunPos:[-26,40,30],hemiSky:13624063,hemiGnd:7305802,hemiI:1.45,ambI:.5,amb:12899556,fog:10467016,fogNear:104,fogFar:200,skyTop:6128812,skyMid:9349309,skyBot:11713988,exposure:.92,stars:0,window:.02,lamp:0,spill:0,point:0,water:0},night:{sun:10335454,sunI:.85,sunPos:[24,30,-26],hemiSky:1911884,hemiGnd:725016,hemiI:.62,ambI:.26,amb:6978204,fog:658968,fogNear:80,fogFar:170,skyTop:263694,skyMid:659488,skyBot:1581624,exposure:1.08,stars:.9,window:1,lamp:1,spill:.13,point:9,water:.72}},av=`
  varying vec3 vDir;
  void main() {
    vDir = normalize(position);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,lv=`
  uniform vec3 top;
  uniform vec3 mid;
  uniform vec3 bot;
  varying vec3 vDir;
  void main() {
    float h = clamp(vDir.y * 0.5 + 0.5, 0.0, 1.0);
    vec3 c = mix(bot, mid, smoothstep(0.0, 0.52, h));
    c = mix(c, top, smoothstep(0.45, 1.0, h));
    gl_FragColor = vec4(c, 1.0);
  }
`;function cv(i,t){const e=new Gd(16777215,2.9);e.castShadow=!0,e.shadow.mapSize.set(2048,2048);const n=e.shadow.camera;n.left=-33,n.right=33,n.top=27,n.bottom=-27,n.near=1,n.far=190,e.shadow.bias=-35e-5,e.shadow.normalBias=.035,e.target.position.set(0,xt,0),i.add(e,e.target);const s=new Bd(16777215,4473924,.6);i.add(s);const r=new Vd(16777215,.26);i.add(r);const o=new qs(250,32,20),a=new Cn({uniforms:{top:{value:new Lt(2569564)},mid:{value:new Lt(9071218)},bot:{value:new Lt(14717781)}},vertexShader:av,fragmentShader:lv,side:tn,depthWrite:!1,fog:!1}),l=new Qt(o,a);l.renderOrder=-10,i.add(l);const c=[];for(let M=0;M<700;M++){const T=Math.random()*2-1,A=Math.random()*Math.PI*2,P=Math.sqrt(1-T*T);c.push(Math.cos(A)*P*232,Math.abs(T)*232+6,Math.sin(A)*P*232)}const h=new Ne;h.setAttribute("position",new ge(c,3));const d=new kh({color:15922431,size:2,sizeAttenuation:!1,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),u=new $f(h,d);i.add(u),i.fog=new rl(2760474,96,190);const f=[{x:2,y:1.5,z:5.6,i:1},{x:5,y:1.6,z:-1.4,i:1},{x:-1.2,y:1.5,z:1.2,i:.8},{x:-3.85,y:1.6,z:9.6,i:.7}].map(M=>{const T=new Hd(16758387,0,8.5,2);return T.position.set(M.x,M.y,M.z),T.userData.k=M.i,i.add(T),T}),g=new Lt,x=new Lt,m={...yn.dusk};let p=yn.dusk,S=yn.dusk,R=1,y=1.1;function w(M){e.color.set(M.sun),e.intensity=M.sunI,e.position.set(M.sunPos[0],M.sunPos[1],M.sunPos[2]),s.color.set(M.hemiSky),s.groundColor.set(M.hemiGnd),s.intensity=M.hemiI,r.color.set(M.amb),r.intensity=M.ambI,i.fog.color.set(M.fog),i.fog.near=M.fogNear,i.fog.far=M.fogFar,a.uniforms.top.value.set(M.skyTop),a.uniforms.mid.value.set(M.skyMid),a.uniforms.bot.value.set(M.skyBot),d.opacity=M.stars,t.toneMappingExposure=M.exposure}const b=(M,T,A)=>(g.set(M),x.set(T),g.lerp(x,A).getHex());function L(M,T){if(R<1){R=Math.min(1,R+M/y);const A=R*R*(3-2*R),P=(N,z)=>N+(z-N)*A,D={sun:b(p.sun,S.sun,A),sunI:P(p.sunI,S.sunI),sunPos:[P(p.sunPos[0],S.sunPos[0]),P(p.sunPos[1],S.sunPos[1]),P(p.sunPos[2],S.sunPos[2])],hemiSky:b(p.hemiSky,S.hemiSky,A),hemiGnd:b(p.hemiGnd,S.hemiGnd,A),hemiI:P(p.hemiI,S.hemiI),amb:b(p.amb,S.amb,A),ambI:P(p.ambI,S.ambI),fog:b(p.fog,S.fog,A),fogNear:P(p.fogNear,S.fogNear),fogFar:P(p.fogFar,S.fogFar),skyTop:b(p.skyTop,S.skyTop,A),skyMid:b(p.skyMid,S.skyMid,A),skyBot:b(p.skyBot,S.skyBot,A),exposure:P(p.exposure,S.exposure),stars:P(p.stars,S.stars),window:P(p.window,S.window),lamp:P(p.lamp,S.lamp),spill:P(p.spill,S.spill),point:P(p.point,S.point),water:P(p.water??0,S.water??0)};w(D),m.window=D.window,m.lamp=D.lamp,m.spill=D.spill,m.point=D.point,m.water=D.water}else m.window=S.window,m.lamp=S.lamp,m.spill=S.spill,m.point=S.point,m.water=S.water;for(const A of f)A.intensity=m.point*A.userData.k;T?.glassMat&&(T.glassMat.emissiveIntensity=m.window),T?.lampMat&&(T.lampMat.emissiveIntensity=.06+m.lamp*1.5),T?.spillMat&&(T.spillMat.opacity=m.spill),T?.trainGlass&&(T.trainGlass.emissiveIntensity=m.window*.9),T?.waterMat&&T.waterMat.color.setScalar(1-.72*(m.water??0))}function v(M,T=!1){return p={...m},S=yn[M]||yn.dusk,m.sun=S.sun,m.hemiSky=S.hemiSky,m.hemiGnd=S.hemiGnd,m.amb=S.amb,m.fog=S.fog,m.skyTop=S.skyTop,m.skyMid=S.skyMid,m.skyBot=S.skyBot,m.sunPos=S.sunPos.slice(),R=T?1:0,T&&(w(S),m.window=S.window,m.lamp=S.lamp,m.spill=S.spill,m.point=S.point,m.water=S.water,m.sunI=S.sunI,m.hemiI=S.hemiI,m.ambI=S.ambI,m.fogNear=S.fogNear,m.fogFar=S.fogFar,m.exposure=S.exposure,m.stars=S.stars),S}return w(yn.dusk),m.window=yn.dusk.window,m.lamp=yn.dusk.lamp,m.spill=yn.dusk.spill,m.point=yn.dusk.point,{sun:e,hemi:s,amb:r,sky:l,stars:u,setMode:v,update:L,MODES:yn,pointLights:f}}const ro=ox(20260926),xu=document.getElementById("view"),ze=new X_({canvas:xu,antialias:!0,powerPreference:"high-performance"});ze.setPixelRatio(Math.min(window.devicePixelRatio,2));ze.setSize(window.innerWidth,window.innerHeight);ze.shadowMap.enabled=!0;ze.shadowMap.type=_h;ze.toneMapping=qa;ze.toneMappingExposure=1;ze.outputColorSpace=nn;const ti=new kf,Kn=new U(0,xt+.4,0),Kr=os.degToRad(-34),ls=os.degToRad(35),cs=80,Ge=new eo(-1,1,1,-1,1,420);Ge.position.set(Kn.x+cs*Math.cos(ls)*Math.sin(Kr),Kn.y+cs*Math.sin(ls),Kn.z+cs*Math.cos(ls)*Math.cos(Kr));Ge.lookAt(Kn);function vu(){const i=window.innerWidth/window.innerHeight,t=Math.max(15.4,24.6/i);Ge.top=t,Ge.bottom=-t,Ge.left=-t*i,Ge.right=t*i,Ge.updateProjectionMatrix()}vu();const we=new q_(Ge,xu);we.target.copy(Kn);we.enableDamping=!0;we.dampingFactor=.075;we.rotateSpeed=.62;we.zoomSpeed=.85;we.panSpeed=.6;we.screenSpacePanning=!1;we.minPolarAngle=.2;we.maxPolarAngle=1.09;we.minZoom=.5;we.maxZoom=3.4;we.update();we.saveState();const Li=fx(2600),_l=Cx(ro);ti.add(_l.group);const xl=Zx(ro);ti.add(xl.group);const hv=Nx(Li,ro);ti.add(hv.group);const Wa=ev(ro,Li,xl.blockers);ti.add(Wa.group);const Le=ov(Li);ti.add(Le.group);const vl=cv(ti,ze),uv={glassMat:xl.glassMat,lampMat:Wa.glowMat,spillMat:Wa.spillMat,trainGlass:Le.glassMat,waterMat:_l.waterMat},ke={run:document.getElementById("btn-run"),runIco:document.getElementById("run-ico"),runLabel:document.getElementById("run-label"),reset:document.getElementById("btn-reset"),speed:document.getElementById("speed"),speedVal:document.getElementById("speed-val"),seg:document.getElementById("seg-time"),modeVal:document.getElementById("mode-val"),readout:document.getElementById("readout"),fps:document.getElementById("stat-fps"),loader:document.getElementById("loader")},fv={dusk:"傍晚",day:"白天",night:"夜晚"};let Ys="dusk";function $s(){const i=Le.state.running;ke.runLabel.textContent=i?"暂停":"运行",ke.runIco.textContent=i?"❚❚":"▶",ke.run.classList.toggle("btn--primary",!0)}function Qs(i,t=!1){Ys=i,vl.setMode(i,t),ke.modeVal.textContent=fv[i];for(const e of ke.seg.querySelectorAll(".seg__btn"))e.classList.toggle("is-on",e.dataset.mode===i)}ke.run.addEventListener("click",()=>{Le.state.running=!Le.state.running,$s()});ke.speed.addEventListener("input",()=>{Le.state.speed=parseFloat(ke.speed.value),ke.speedVal.textContent=`${Le.state.speed.toFixed(2)}×`});ke.reset.addEventListener("click",Ml);for(const i of ke.seg.querySelectorAll(".seg__btn"))i.addEventListener("click",()=>Qs(i.dataset.mode));window.addEventListener("keydown",i=>{i.code==="Space"?(i.preventDefault(),Le.state.running=!Le.state.running,$s()):i.key==="r"||i.key==="R"?Ml():(i.key==="n"||i.key==="N")&&Qs(Ys==="day"?"night":Ys==="night"?"day":"night")});function dv(){Ge.position.set(Kn.x+cs*Math.cos(ls)*Math.sin(Kr),Kn.y+cs*Math.sin(ls),Kn.z+cs*Math.cos(ls)*Math.cos(Kr)),Ge.zoom=1,Ge.updateProjectionMatrix(),we.target.copy(Kn),we.update()}function Ml(){we.reset(),Ge.zoom=1,Ge.updateProjectionMatrix(),Le.reset(),ke.speed.value="1",ke.speedVal.textContent="1.00×",$s(),Qs("dusk")}$s();Qs("dusk",!0);window.addEventListener("resize",()=>{ze.setSize(window.innerWidth,window.innerHeight),vu()});const pv=new Yd;let Qo=0,Nr=0,Xa=0,gh=!0;function Mu(){const i=Math.min(.05,pv.getDelta());Le.update(i),vl.update(i,uv);const t=_l.waterNormalTex;t.offset.x=(t.offset.x+i*.012)%1,t.offset.y=(t.offset.y+i*.007)%1,we.update(),we.target.x=os.clamp(we.target.x,-bn*.5,bn*.5),we.target.z=os.clamp(we.target.z,-hi*.5,hi*.5),we.target.y=os.clamp(we.target.y,0,4),ze.render(ti,Ge),Qo++,Nr+=i,Nr>=.5&&(Xa=Math.round(Qo/Nr),Qo=0,Nr=0,ke.fps.textContent=Xa),mv(),gh&&(gh=!1,setTimeout(()=>ke.loader.classList.add("is-hidden"),120)),requestAnimationFrame(Mu)}function mv(){const i=Le.state,t=Le.BASE_SPEED*i.speed,e=(Li.length/t).toFixed(0),n=i.phase==="dwell"?`<span class="st-hold">停站中 ${i.dwell.toFixed(1)}s</span>`:i.running?'<span class="st-run">运行中</span>':"已暂停";ke.readout.innerHTML=`状态 <b>${n}</b><br />环线长 <b>${Li.length.toFixed(1)}</b> 单位 · 1× 约 <b>${e}</b> 秒/圈`}ze.compile(ti,Ge);Mu();window.__DIORAMA={renderer:ze,scene:ti,camera:Ge,controls:we,train:Le,lighting:vl,path:Li,mode:()=>Ys,fps:()=>Xa,info:()=>({calls:ze.info.render.calls,triangles:ze.info.render.triangles,programs:ze.info.programs.length,dpr:ze.getPixelRatio(),canvas:[ze.domElement.width,ze.domElement.height],trackLength:Li.length,mode:Ys}),locoPos:()=>{const i=Le.group.children[0];return[i.position.x,i.position.y,i.position.z,i.rotation.y]},carPos:()=>Le.group.children.slice(1).map(i=>[i.position.x,i.position.y,i.position.z,i.rotation.y]),consistS:()=>Le.offsets.map(i=>Le.state.s-i),consistYaw:()=>Le.group.children.map(i=>i.rotation.y),setRun:i=>{Le.state.running=i,$s()},setSpeed:i=>{Le.state.speed=i,ke.speed.value=String(i),ke.speedVal.textContent=`${i.toFixed(2)}×`},setMode:i=>Qs(i,!0),reset:Ml,defaultView:dv,project:(i,t,e)=>{const n=new U(i,t,e).project(Ge);return[n.x*.5+.5,-n.y*.5+.5]}};
