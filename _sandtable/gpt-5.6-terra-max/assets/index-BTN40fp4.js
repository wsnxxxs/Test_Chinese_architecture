(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const js="180",li={ROTATE:0,DOLLY:1,PAN:2},ai={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},yl=0,xa=1,Tl=2,Ao=1,wo=2,on=3,En=0,we=1,ln=2,Mn=0,ci=1,Ma=2,Sa=3,Ea=4,bl=5,In=100,Al=101,wl=102,Rl=103,Cl=104,Pl=200,Dl=201,Ll=202,Ul=203,as=204,os=205,Il=206,Nl=207,Fl=208,Ol=209,Bl=210,zl=211,Hl=212,Vl=213,Gl=214,ls=0,cs=1,hs=2,ui=3,us=4,ds=5,fs=6,ps=7,Ro=0,kl=1,Wl=2,Sn=0,Xl=1,Yl=2,ql=3,Co=4,Kl=5,Zl=6,jl=7,Po=300,di=301,fi=302,ms=303,_s=304,Sr=306,gs=1e3,Fn=1001,vs=1002,Ne=1003,$l=1004,Gi=1005,Ze=1006,wr=1007,On=1008,Je=1009,Do=1010,Lo=1011,Ci=1012,$s=1013,zn=1014,je=1015,Fi=1016,Js=1017,Qs=1018,Pi=1020,Uo=35902,Io=35899,No=1021,Fo=1022,We=1023,Di=1026,Li=1027,ta=1028,ea=1029,Oo=1030,na=1031,ia=1033,dr=33776,fr=33777,pr=33778,mr=33779,xs=35840,Ms=35841,Ss=35842,Es=35843,ys=36196,Ts=37492,bs=37496,As=37808,ws=37809,Rs=37810,Cs=37811,Ps=37812,Ds=37813,Ls=37814,Us=37815,Is=37816,Ns=37817,Fs=37818,Os=37819,Bs=37820,zs=37821,Hs=36492,Vs=36494,Gs=36495,ks=36283,Ws=36284,Xs=36285,Ys=36286,Jl=3200,Ql=3201,Bo=0,tc=1,xn="",Ae="srgb",pi="srgb-linear",vr="linear",Kt="srgb",Xn=7680,ya=519,ec=512,nc=513,ic=514,zo=515,rc=516,sc=517,ac=518,oc=519,qs=35044,Ta="300 es",$e=2e3,xr=2001;class Vn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_r=Math.PI/180,Ks=180/Math.PI;function Oi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ve[i&255]+ve[i>>8&255]+ve[i>>16&255]+ve[i>>24&255]+"-"+ve[t&255]+ve[t>>8&255]+"-"+ve[t>>16&15|64]+ve[t>>24&255]+"-"+ve[e&63|128]+ve[e>>8&255]+"-"+ve[e>>16&255]+ve[e>>24&255]+ve[n&255]+ve[n>>8&255]+ve[n>>16&255]+ve[n>>24&255]).toLowerCase()}function zt(i,t,e){return Math.max(t,Math.min(e,i))}function lc(i,t){return(i%t+t)%t}function Rr(i,t,e){return(1-e)*i+e*t}function Mi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Te(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const cc={DEG2RAD:_r};class Lt{constructor(t=0,e=0){Lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=zt(this.x,t.x,e.x),this.y=zt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=zt(this.x,t,e),this.y=zt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class yn{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let c=n[r+0],l=n[r+1],u=n[r+2],d=n[r+3];const f=s[a+0],m=s[a+1],v=s[a+2],M=s[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d;return}if(o===1){t[e+0]=f,t[e+1]=m,t[e+2]=v,t[e+3]=M;return}if(d!==M||c!==f||l!==m||u!==v){let p=1-o;const h=c*f+l*m+u*v+d*M,A=h>=0?1:-1,T=1-h*h;if(T>Number.EPSILON){const D=Math.sqrt(T),P=Math.atan2(D,h*A);p=Math.sin(p*P)/D,o=Math.sin(o*P)/D}const y=o*A;if(c=c*p+f*y,l=l*p+m*y,u=u*p+v*y,d=d*p+M*y,p===1-o){const D=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=D,l*=D,u*=D,d*=D}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],u=n[r+3],d=s[a],f=s[a+1],m=s[a+2],v=s[a+3];return t[e]=o*v+u*d+c*m-l*f,t[e+1]=c*v+u*f+l*d-o*m,t[e+2]=l*v+u*m+o*f-c*d,t[e+3]=u*v-o*d-c*f-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(r/2),d=o(s/2),f=c(n/2),m=c(r/2),v=c(s/2);switch(a){case"XYZ":this._x=f*u*d+l*m*v,this._y=l*m*d-f*u*v,this._z=l*u*v+f*m*d,this._w=l*u*d-f*m*v;break;case"YXZ":this._x=f*u*d+l*m*v,this._y=l*m*d-f*u*v,this._z=l*u*v-f*m*d,this._w=l*u*d+f*m*v;break;case"ZXY":this._x=f*u*d-l*m*v,this._y=l*m*d+f*u*v,this._z=l*u*v+f*m*d,this._w=l*u*d-f*m*v;break;case"ZYX":this._x=f*u*d-l*m*v,this._y=l*m*d+f*u*v,this._z=l*u*v-f*m*d,this._w=l*u*d+f*m*v;break;case"YZX":this._x=f*u*d+l*m*v,this._y=l*m*d+f*u*v,this._z=l*u*v-f*m*d,this._w=l*u*d-f*m*v;break;case"XZY":this._x=f*u*d-l*m*v,this._y=l*m*d-f*u*v,this._z=l*u*v+f*m*d,this._w=l*u*d+f*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],d=e[10],f=n+o+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(a-r)*m}else if(n>o&&n>d){const m=2*Math.sqrt(1+n-o-d);this._w=(u-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+l)/m}else if(o>d){const m=2*Math.sqrt(1+o-n-d);this._w=(s-l)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+d-n-o);this._w=(a-r)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(zt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-r*o,this._w=a*u-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),d=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ba.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ba.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*r-o*n),u=2*(o*e-s*r),d=2*(s*n-a*e);return this.x=e+c*l+a*d-o*u,this.y=n+c*u+o*l-s*d,this.z=r+c*d+s*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=zt(this.x,t.x,e.x),this.y=zt(this.y,t.y,e.y),this.z=zt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=zt(this.x,t,e),this.y=zt(this.y,t,e),this.z=zt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Cr.copy(this).projectOnVector(t),this.sub(Cr)}reflect(t){return this.sub(Cr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cr=new I,ba=new yn;class Nt{constructor(t,e,n,r,s,a,o,c,l){Nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,c,l)}set(t,e,n,r,s,a,o,c,l){const u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=e,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],d=n[7],f=n[2],m=n[5],v=n[8],M=r[0],p=r[3],h=r[6],A=r[1],T=r[4],y=r[7],D=r[2],P=r[5],R=r[8];return s[0]=a*M+o*A+c*D,s[3]=a*p+o*T+c*P,s[6]=a*h+o*y+c*R,s[1]=l*M+u*A+d*D,s[4]=l*p+u*T+d*P,s[7]=l*h+u*y+d*R,s[2]=f*M+m*A+v*D,s[5]=f*p+m*T+v*P,s[8]=f*h+m*y+v*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-n*s*u+n*o*c+r*s*l-r*a*c}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],d=u*a-o*l,f=o*c-u*s,m=l*s-a*c,v=e*d+n*f+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/v;return t[0]=d*M,t[1]=(r*l-u*n)*M,t[2]=(o*n-r*a)*M,t[3]=f*M,t[4]=(u*e-r*c)*M,t[5]=(r*s-o*e)*M,t[6]=m*M,t[7]=(n*c-l*e)*M,t[8]=(a*e-n*s)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-r*l,r*c,-r*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Pr.makeScale(t,e)),this}rotate(t){return this.premultiply(Pr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Pr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Pr=new Nt;function Ho(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Mr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function hc(){const i=Mr("canvas");return i.style.display="block",i}const Aa={};function Ui(i){i in Aa||(Aa[i]=!0,console.warn(i))}function uc(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const wa=new Nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ra=new Nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dc(){const i={enabled:!0,workingColorSpace:pi,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Kt&&(r.r=cn(r.r),r.g=cn(r.g),r.b=cn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Kt&&(r.r=hi(r.r),r.g=hi(r.g),r.b=hi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===xn?vr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ui("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ui("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[pi]:{primaries:t,whitePoint:n,transfer:vr,toXYZ:wa,fromXYZ:Ra,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ae},outputColorSpaceConfig:{drawingBufferColorSpace:Ae}},[Ae]:{primaries:t,whitePoint:n,transfer:Kt,toXYZ:wa,fromXYZ:Ra,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ae}}}),i}const Wt=dc();function cn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function hi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Yn;class fc{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Yn===void 0&&(Yn=Mr("canvas")),Yn.width=t.width,Yn.height=t.height;const r=Yn.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=Yn}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Mr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=cn(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(cn(e[n]/255)*255):e[n]=cn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let pc=0;class ra{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pc++}),this.uuid=Oi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Dr(r[a].image)):s.push(Dr(r[a]))}else s=Dr(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Dr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?fc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mc=0;const Lr=new I;class Me extends Vn{constructor(t=Me.DEFAULT_IMAGE,e=Me.DEFAULT_MAPPING,n=Fn,r=Fn,s=Ze,a=On,o=We,c=Je,l=Me.DEFAULT_ANISOTROPY,u=xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mc++}),this.uuid=Oi(),this.name="",this.source=new ra(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Lr).x}get height(){return this.source.getSize(Lr).y}get depth(){return this.source.getSize(Lr).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Po)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case gs:t.x=t.x-Math.floor(t.x);break;case Fn:t.x=t.x<0?0:1;break;case vs:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case gs:t.y=t.y-Math.floor(t.y);break;case Fn:t.y=t.y<0?0:1;break;case vs:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Me.DEFAULT_IMAGE=null;Me.DEFAULT_MAPPING=Po;Me.DEFAULT_ANISOTROPY=1;class jt{constructor(t=0,e=0,n=0,r=1){jt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const c=t.elements,l=c[0],u=c[4],d=c[8],f=c[1],m=c[5],v=c[9],M=c[2],p=c[6],h=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-M)<.01&&Math.abs(v-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+M)<.1&&Math.abs(v+p)<.1&&Math.abs(l+m+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(l+1)/2,y=(m+1)/2,D=(h+1)/2,P=(u+f)/4,R=(d+M)/4,F=(v+p)/4;return T>y&&T>D?T<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(T),r=P/n,s=R/n):y>D?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=P/r,s=F/r):D<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),n=R/s,r=F/s),this.set(n,r,s,e),this}let A=Math.sqrt((p-v)*(p-v)+(d-M)*(d-M)+(f-u)*(f-u));return Math.abs(A)<.001&&(A=1),this.x=(p-v)/A,this.y=(d-M)/A,this.z=(f-u)/A,this.w=Math.acos((l+m+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=zt(this.x,t.x,e.x),this.y=zt(this.y,t.y,e.y),this.z=zt(this.z,t.z,e.z),this.w=zt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=zt(this.x,t,e),this.y=zt(this.y,t,e),this.z=zt(this.z,t,e),this.w=zt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(zt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _c extends Vn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ze,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new jt(0,0,t,e),this.scissorTest=!1,this.viewport=new jt(0,0,t,e);const r={width:t,height:e,depth:n.depth},s=new Me(r);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Ze,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new ra(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hn extends _c{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Vo extends Me{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class gc extends Me{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gn{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(He.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(He.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=He.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,He):He.fromBufferAttribute(s,a),He.applyMatrix4(t.matrixWorld),this.expandByPoint(He);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ki.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ki.copy(n.boundingBox)),ki.applyMatrix4(t.matrixWorld),this.union(ki)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,He),He.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Si),Wi.subVectors(this.max,Si),qn.subVectors(t.a,Si),Kn.subVectors(t.b,Si),Zn.subVectors(t.c,Si),un.subVectors(Kn,qn),dn.subVectors(Zn,Kn),wn.subVectors(qn,Zn);let e=[0,-un.z,un.y,0,-dn.z,dn.y,0,-wn.z,wn.y,un.z,0,-un.x,dn.z,0,-dn.x,wn.z,0,-wn.x,-un.y,un.x,0,-dn.y,dn.x,0,-wn.y,wn.x,0];return!Ur(e,qn,Kn,Zn,Wi)||(e=[1,0,0,0,1,0,0,0,1],!Ur(e,qn,Kn,Zn,Wi))?!1:(Xi.crossVectors(un,dn),e=[Xi.x,Xi.y,Xi.z],Ur(e,qn,Kn,Zn,Wi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,He).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(He).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(en[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),en[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),en[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),en[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),en[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),en[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),en[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),en[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(en),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const en=[new I,new I,new I,new I,new I,new I,new I,new I],He=new I,ki=new Gn,qn=new I,Kn=new I,Zn=new I,un=new I,dn=new I,wn=new I,Si=new I,Wi=new I,Xi=new I,Rn=new I;function Ur(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Rn.fromArray(i,s);const o=r.x*Math.abs(Rn.x)+r.y*Math.abs(Rn.y)+r.z*Math.abs(Rn.z),c=t.dot(Rn),l=e.dot(Rn),u=n.dot(Rn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const vc=new Gn,Ei=new I,Ir=new I;class Bi{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):vc.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ei.subVectors(t,this.center);const e=Ei.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Ei,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ir.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ei.copy(t.center).add(Ir)),this.expandByPoint(Ei.copy(t.center).sub(Ir))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const nn=new I,Nr=new I,Yi=new I,fn=new I,Fr=new I,qi=new I,Or=new I;class Go{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(nn.copy(this.origin).addScaledVector(this.direction,e),nn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Nr.copy(t).add(e).multiplyScalar(.5),Yi.copy(e).sub(t).normalize(),fn.copy(this.origin).sub(Nr);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Yi),o=fn.dot(this.direction),c=-fn.dot(Yi),l=fn.lengthSq(),u=Math.abs(1-a*a);let d,f,m,v;if(u>0)if(d=a*c-o,f=a*o-c,v=s*u,d>=0)if(f>=-v)if(f<=v){const M=1/u;d*=M,f*=M,m=d*(d+a*f+2*o)+f*(a*d+f+2*c)+l}else f=s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+l;else f=-s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+l;else f<=-v?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-c),s),m=-d*d+f*(f+2*c)+l):f<=v?(d=0,f=Math.min(Math.max(-s,-c),s),m=f*(f+2*c)+l):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-c),s),m=-d*d+f*(f+2*c)+l);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Nr).addScaledVector(Yi,f),m}intersectSphere(t,e){nn.subVectors(t.center,this.origin);const n=nn.dot(this.direction),r=nn.dot(nn)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,r=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,r=(t.min.x-f.x)*l),u>=0?(s=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(t.min.z-f.z)*d,c=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,c=(t.min.z-f.z)*d),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,nn)!==null}intersectTriangle(t,e,n,r,s){Fr.subVectors(e,t),qi.subVectors(n,t),Or.crossVectors(Fr,qi);let a=this.direction.dot(Or),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;fn.subVectors(this.origin,t);const c=o*this.direction.dot(qi.crossVectors(fn,qi));if(c<0)return null;const l=o*this.direction.dot(Fr.cross(fn));if(l<0||c+l>a)return null;const u=-o*fn.dot(Or);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class te{constructor(t,e,n,r,s,a,o,c,l,u,d,f,m,v,M,p){te.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,c,l,u,d,f,m,v,M,p)}set(t,e,n,r,s,a,o,c,l,u,d,f,m,v,M,p){const h=this.elements;return h[0]=t,h[4]=e,h[8]=n,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=c,h[2]=l,h[6]=u,h[10]=d,h[14]=f,h[3]=m,h[7]=v,h[11]=M,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new te().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/jn.setFromMatrixColumn(t,0).length(),s=1/jn.setFromMatrixColumn(t,1).length(),a=1/jn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const f=a*u,m=a*d,v=o*u,M=o*d;e[0]=c*u,e[4]=-c*d,e[8]=l,e[1]=m+v*l,e[5]=f-M*l,e[9]=-o*c,e[2]=M-f*l,e[6]=v+m*l,e[10]=a*c}else if(t.order==="YXZ"){const f=c*u,m=c*d,v=l*u,M=l*d;e[0]=f+M*o,e[4]=v*o-m,e[8]=a*l,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=m*o-v,e[6]=M+f*o,e[10]=a*c}else if(t.order==="ZXY"){const f=c*u,m=c*d,v=l*u,M=l*d;e[0]=f-M*o,e[4]=-a*d,e[8]=v+m*o,e[1]=m+v*o,e[5]=a*u,e[9]=M-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const f=a*u,m=a*d,v=o*u,M=o*d;e[0]=c*u,e[4]=v*l-m,e[8]=f*l+M,e[1]=c*d,e[5]=M*l+f,e[9]=m*l-v,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const f=a*c,m=a*l,v=o*c,M=o*l;e[0]=c*u,e[4]=M-f*d,e[8]=v*d+m,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=m*d+v,e[10]=f-M*d}else if(t.order==="XZY"){const f=a*c,m=a*l,v=o*c,M=o*l;e[0]=c*u,e[4]=-d,e[8]=l*u,e[1]=f*d+M,e[5]=a*u,e[9]=m*d-v,e[2]=v*d-m,e[6]=o*u,e[10]=M*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xc,t,Mc)}lookAt(t,e,n){const r=this.elements;return De.subVectors(t,e),De.lengthSq()===0&&(De.z=1),De.normalize(),pn.crossVectors(n,De),pn.lengthSq()===0&&(Math.abs(n.z)===1?De.x+=1e-4:De.z+=1e-4,De.normalize(),pn.crossVectors(n,De)),pn.normalize(),Ki.crossVectors(De,pn),r[0]=pn.x,r[4]=Ki.x,r[8]=De.x,r[1]=pn.y,r[5]=Ki.y,r[9]=De.y,r[2]=pn.z,r[6]=Ki.z,r[10]=De.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],d=n[5],f=n[9],m=n[13],v=n[2],M=n[6],p=n[10],h=n[14],A=n[3],T=n[7],y=n[11],D=n[15],P=r[0],R=r[4],F=r[8],S=r[12],x=r[1],C=r[5],z=r[9],G=r[13],K=r[2],W=r[6],Y=r[10],j=r[14],H=r[3],at=r[7],ht=r[11],yt=r[15];return s[0]=a*P+o*x+c*K+l*H,s[4]=a*R+o*C+c*W+l*at,s[8]=a*F+o*z+c*Y+l*ht,s[12]=a*S+o*G+c*j+l*yt,s[1]=u*P+d*x+f*K+m*H,s[5]=u*R+d*C+f*W+m*at,s[9]=u*F+d*z+f*Y+m*ht,s[13]=u*S+d*G+f*j+m*yt,s[2]=v*P+M*x+p*K+h*H,s[6]=v*R+M*C+p*W+h*at,s[10]=v*F+M*z+p*Y+h*ht,s[14]=v*S+M*G+p*j+h*yt,s[3]=A*P+T*x+y*K+D*H,s[7]=A*R+T*C+y*W+D*at,s[11]=A*F+T*z+y*Y+D*ht,s[15]=A*S+T*G+y*j+D*yt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],d=t[6],f=t[10],m=t[14],v=t[3],M=t[7],p=t[11],h=t[15];return v*(+s*c*d-r*l*d-s*o*f+n*l*f+r*o*m-n*c*m)+M*(+e*c*m-e*l*f+s*a*f-r*a*m+r*l*u-s*c*u)+p*(+e*l*d-e*o*m-s*a*d+n*a*m+s*o*u-n*l*u)+h*(-r*o*u-e*c*d+e*o*f+r*a*d-n*a*f+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],d=t[9],f=t[10],m=t[11],v=t[12],M=t[13],p=t[14],h=t[15],A=d*p*l-M*f*l+M*c*m-o*p*m-d*c*h+o*f*h,T=v*f*l-u*p*l-v*c*m+a*p*m+u*c*h-a*f*h,y=u*M*l-v*d*l+v*o*m-a*M*m-u*o*h+a*d*h,D=v*d*c-u*M*c-v*o*f+a*M*f+u*o*p-a*d*p,P=e*A+n*T+r*y+s*D;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/P;return t[0]=A*R,t[1]=(M*f*s-d*p*s-M*r*m+n*p*m+d*r*h-n*f*h)*R,t[2]=(o*p*s-M*c*s+M*r*l-n*p*l-o*r*h+n*c*h)*R,t[3]=(d*c*s-o*f*s-d*r*l+n*f*l+o*r*m-n*c*m)*R,t[4]=T*R,t[5]=(u*p*s-v*f*s+v*r*m-e*p*m-u*r*h+e*f*h)*R,t[6]=(v*c*s-a*p*s-v*r*l+e*p*l+a*r*h-e*c*h)*R,t[7]=(a*f*s-u*c*s+u*r*l-e*f*l-a*r*m+e*c*m)*R,t[8]=y*R,t[9]=(v*d*s-u*M*s-v*n*m+e*M*m+u*n*h-e*d*h)*R,t[10]=(a*M*s-v*o*s+v*n*l-e*M*l-a*n*h+e*o*h)*R,t[11]=(u*o*s-a*d*s-u*n*l+e*d*l+a*n*m-e*o*m)*R,t[12]=D*R,t[13]=(u*M*r-v*d*r+v*n*f-e*M*f-u*n*p+e*d*p)*R,t[14]=(v*o*r-a*M*r-v*n*c+e*M*c+a*n*p-e*o*p)*R,t[15]=(a*d*r-u*o*r+u*n*c-e*d*c-a*n*f+e*o*f)*R,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,c=t.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+n,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,l=s+s,u=a+a,d=o+o,f=s*l,m=s*u,v=s*d,M=a*u,p=a*d,h=o*d,A=c*l,T=c*u,y=c*d,D=n.x,P=n.y,R=n.z;return r[0]=(1-(M+h))*D,r[1]=(m+y)*D,r[2]=(v-T)*D,r[3]=0,r[4]=(m-y)*P,r[5]=(1-(f+h))*P,r[6]=(p+A)*P,r[7]=0,r[8]=(v+T)*R,r[9]=(p-A)*R,r[10]=(1-(f+M))*R,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=jn.set(r[0],r[1],r[2]).length();const a=jn.set(r[4],r[5],r[6]).length(),o=jn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Ve.copy(this);const l=1/s,u=1/a,d=1/o;return Ve.elements[0]*=l,Ve.elements[1]*=l,Ve.elements[2]*=l,Ve.elements[4]*=u,Ve.elements[5]*=u,Ve.elements[6]*=u,Ve.elements[8]*=d,Ve.elements[9]*=d,Ve.elements[10]*=d,e.setFromRotationMatrix(Ve),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a,o=$e,c=!1){const l=this.elements,u=2*s/(e-t),d=2*s/(n-r),f=(e+t)/(e-t),m=(n+r)/(n-r);let v,M;if(c)v=s/(a-s),M=a*s/(a-s);else if(o===$e)v=-(a+s)/(a-s),M=-2*a*s/(a-s);else if(o===xr)v=-a/(a-s),M=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=$e,c=!1){const l=this.elements,u=2/(e-t),d=2/(n-r),f=-(e+t)/(e-t),m=-(n+r)/(n-r);let v,M;if(c)v=1/(a-s),M=a/(a-s);else if(o===$e)v=-2/(a-s),M=-(a+s)/(a-s);else if(o===xr)v=-1/(a-s),M=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=d,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=v,l[14]=M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const jn=new I,Ve=new te,xc=new I(0,0,0),Mc=new I(1,1,1),pn=new I,Ki=new I,De=new I,Ca=new te,Pa=new yn;class Qe{constructor(t=0,e=0,n=0,r=Qe.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],d=r[2],f=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-zt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(zt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ca.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ca,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Pa.setFromEuler(this),this.setFromQuaternion(Pa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qe.DEFAULT_ORDER="XYZ";class ko{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Sc=0;const Da=new I,$n=new yn,rn=new te,Zi=new I,yi=new I,Ec=new I,yc=new yn,La=new I(1,0,0),Ua=new I(0,1,0),Ia=new I(0,0,1),Na={type:"added"},Tc={type:"removed"},Jn={type:"childadded",child:null},Br={type:"childremoved",child:null};class _e extends Vn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sc++}),this.uuid=Oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_e.DEFAULT_UP.clone();const t=new I,e=new Qe,n=new yn,r=new I(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new te},normalMatrix:{value:new Nt}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=_e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ko,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $n.setFromAxisAngle(t,e),this.quaternion.multiply($n),this}rotateOnWorldAxis(t,e){return $n.setFromAxisAngle(t,e),this.quaternion.premultiply($n),this}rotateX(t){return this.rotateOnAxis(La,t)}rotateY(t){return this.rotateOnAxis(Ua,t)}rotateZ(t){return this.rotateOnAxis(Ia,t)}translateOnAxis(t,e){return Da.copy(t).applyQuaternion(this.quaternion),this.position.add(Da.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(La,t)}translateY(t){return this.translateOnAxis(Ua,t)}translateZ(t){return this.translateOnAxis(Ia,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(rn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Zi.copy(t):Zi.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),yi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rn.lookAt(yi,Zi,this.up):rn.lookAt(Zi,yi,this.up),this.quaternion.setFromRotationMatrix(rn),r&&(rn.extractRotation(r.matrixWorld),$n.setFromRotationMatrix(rn),this.quaternion.premultiply($n.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Na),Jn.child=t,this.dispatchEvent(Jn),Jn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Tc),Br.child=t,this.dispatchEvent(Br),Br.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),rn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),rn.multiply(t.parent.matrixWorld)),t.applyMatrix4(rn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Na),Jn.child=t,this.dispatchEvent(Jn),Jn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yi,t,Ec),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yi,yc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];s(t.shapes,d)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(t.materials,this.material[c]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),d=a(t.shapes),f=a(t.skeletons),m=a(t.animations),v=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),v.length>0&&(n.nodes=v)}return n.object=r,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}_e.DEFAULT_UP=new I(0,1,0);_e.DEFAULT_MATRIX_AUTO_UPDATE=!0;_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ge=new I,sn=new I,zr=new I,an=new I,Qn=new I,ti=new I,Fa=new I,Hr=new I,Vr=new I,Gr=new I,kr=new jt,Wr=new jt,Xr=new jt;class ke{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Ge.subVectors(t,e),r.cross(Ge);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Ge.subVectors(r,e),sn.subVectors(n,e),zr.subVectors(t,e);const a=Ge.dot(Ge),o=Ge.dot(sn),c=Ge.dot(zr),l=sn.dot(sn),u=sn.dot(zr),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,m=(l*c-o*u)*f,v=(a*u-o*c)*f;return s.set(1-m-v,v,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,an)===null?!1:an.x>=0&&an.y>=0&&an.x+an.y<=1}static getInterpolation(t,e,n,r,s,a,o,c){return this.getBarycoord(t,e,n,r,an)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,an.x),c.addScaledVector(a,an.y),c.addScaledVector(o,an.z),c)}static getInterpolatedAttribute(t,e,n,r,s,a){return kr.setScalar(0),Wr.setScalar(0),Xr.setScalar(0),kr.fromBufferAttribute(t,e),Wr.fromBufferAttribute(t,n),Xr.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(kr,s.x),a.addScaledVector(Wr,s.y),a.addScaledVector(Xr,s.z),a}static isFrontFacing(t,e,n,r){return Ge.subVectors(n,e),sn.subVectors(t,e),Ge.cross(sn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ge.subVectors(this.c,this.b),sn.subVectors(this.a,this.b),Ge.cross(sn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ke.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ke.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return ke.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return ke.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ke.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;Qn.subVectors(r,n),ti.subVectors(s,n),Hr.subVectors(t,n);const c=Qn.dot(Hr),l=ti.dot(Hr);if(c<=0&&l<=0)return e.copy(n);Vr.subVectors(t,r);const u=Qn.dot(Vr),d=ti.dot(Vr);if(u>=0&&d<=u)return e.copy(r);const f=c*d-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(Qn,a);Gr.subVectors(t,s);const m=Qn.dot(Gr),v=ti.dot(Gr);if(v>=0&&m<=v)return e.copy(s);const M=m*l-c*v;if(M<=0&&l>=0&&v<=0)return o=l/(l-v),e.copy(n).addScaledVector(ti,o);const p=u*v-m*d;if(p<=0&&d-u>=0&&m-v>=0)return Fa.subVectors(s,r),o=(d-u)/(d-u+(m-v)),e.copy(r).addScaledVector(Fa,o);const h=1/(p+M+f);return a=M*h,o=f*h,e.copy(n).addScaledVector(Qn,a).addScaledVector(ti,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Wo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mn={h:0,s:0,l:0},ji={h:0,s:0,l:0};function Yr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Gt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ae){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Wt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=Wt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Wt.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=Wt.workingColorSpace){if(t=lc(t,1),e=zt(e,0,1),n=zt(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Yr(a,s,t+1/3),this.g=Yr(a,s,t),this.b=Yr(a,s,t-1/3)}return Wt.colorSpaceToWorking(this,r),this}setStyle(t,e=Ae){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ae){const n=Wo[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=cn(t.r),this.g=cn(t.g),this.b=cn(t.b),this}copyLinearToSRGB(t){return this.r=hi(t.r),this.g=hi(t.g),this.b=hi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ae){return Wt.workingToColorSpace(xe.copy(this),t),Math.round(zt(xe.r*255,0,255))*65536+Math.round(zt(xe.g*255,0,255))*256+Math.round(zt(xe.b*255,0,255))}getHexString(t=Ae){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Wt.workingColorSpace){Wt.workingToColorSpace(xe.copy(this),e);const n=xe.r,r=xe.g,s=xe.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=u<=.5?d/(a+o):d/(2-a-o),a){case n:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-n)/d+2;break;case s:c=(n-r)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Wt.workingColorSpace){return Wt.workingToColorSpace(xe.copy(this),e),t.r=xe.r,t.g=xe.g,t.b=xe.b,t}getStyle(t=Ae){Wt.workingToColorSpace(xe.copy(this),t);const e=xe.r,n=xe.g,r=xe.b;return t!==Ae?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(mn),this.setHSL(mn.h+t,mn.s+e,mn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(mn),t.getHSL(ji);const n=Rr(mn.h,ji.h,e),r=Rr(mn.s,ji.s,e),s=Rr(mn.l,ji.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xe=new Gt;Gt.NAMES=Wo;let bc=0;class zi extends Vn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bc++}),this.uuid=Oi(),this.name="",this.type="Material",this.blending=ci,this.side=En,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=as,this.blendDst=os,this.blendEquation=In,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=ui,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ya,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xn,this.stencilZFail=Xn,this.stencilZPass=Xn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ci&&(n.blending=this.blending),this.side!==En&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==as&&(n.blendSrc=this.blendSrc),this.blendDst!==os&&(n.blendDst=this.blendDst),this.blendEquation!==In&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ui&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ya&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class sa extends zi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qe,this.combine=Ro,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const he=new I,$i=new Lt;let Ac=0;class Xe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ac++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=qs,this.updateRanges=[],this.gpuType=je,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)$i.fromBufferAttribute(this,e),$i.applyMatrix3(t),this.setXY(e,$i.x,$i.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.applyMatrix3(t),this.setXYZ(e,he.x,he.y,he.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.applyMatrix4(t),this.setXYZ(e,he.x,he.y,he.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.applyNormalMatrix(t),this.setXYZ(e,he.x,he.y,he.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.transformDirection(t),this.setXYZ(e,he.x,he.y,he.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Mi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Te(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Mi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Mi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Mi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Mi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),r=Te(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),r=Te(r,this.array),s=Te(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==qs&&(t.usage=this.usage),t}}class Xo extends Xe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Yo extends Xe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Bn extends Xe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let wc=0;const ze=new te,qr=new _e,ei=new I,Le=new Gn,Ti=new Gn,me=new I;class kn extends Vn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wc++}),this.uuid=Oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ho(t)?Yo:Xo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Nt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ze.makeRotationFromQuaternion(t),this.applyMatrix4(ze),this}rotateX(t){return ze.makeRotationX(t),this.applyMatrix4(ze),this}rotateY(t){return ze.makeRotationY(t),this.applyMatrix4(ze),this}rotateZ(t){return ze.makeRotationZ(t),this.applyMatrix4(ze),this}translate(t,e,n){return ze.makeTranslation(t,e,n),this.applyMatrix4(ze),this}scale(t,e,n){return ze.makeScale(t,e,n),this.applyMatrix4(ze),this}lookAt(t){return qr.lookAt(t),qr.updateMatrix(),this.applyMatrix4(qr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ei).negate(),this.translate(ei.x,ei.y,ei.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Bn(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Le.setFromBufferAttribute(s),this.morphTargetsRelative?(me.addVectors(this.boundingBox.min,Le.min),this.boundingBox.expandByPoint(me),me.addVectors(this.boundingBox.max,Le.max),this.boundingBox.expandByPoint(me)):(this.boundingBox.expandByPoint(Le.min),this.boundingBox.expandByPoint(Le.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(Le.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Ti.setFromBufferAttribute(o),this.morphTargetsRelative?(me.addVectors(Le.min,Ti.min),Le.expandByPoint(me),me.addVectors(Le.max,Ti.max),Le.expandByPoint(me)):(Le.expandByPoint(Ti.min),Le.expandByPoint(Ti.max))}Le.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)me.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(me));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)me.fromBufferAttribute(o,l),c&&(ei.fromBufferAttribute(t,l),me.add(ei)),r=Math.max(r,n.distanceToSquared(me))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xe(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let F=0;F<n.count;F++)o[F]=new I,c[F]=new I;const l=new I,u=new I,d=new I,f=new Lt,m=new Lt,v=new Lt,M=new I,p=new I;function h(F,S,x){l.fromBufferAttribute(n,F),u.fromBufferAttribute(n,S),d.fromBufferAttribute(n,x),f.fromBufferAttribute(s,F),m.fromBufferAttribute(s,S),v.fromBufferAttribute(s,x),u.sub(l),d.sub(l),m.sub(f),v.sub(f);const C=1/(m.x*v.y-v.x*m.y);isFinite(C)&&(M.copy(u).multiplyScalar(v.y).addScaledVector(d,-m.y).multiplyScalar(C),p.copy(d).multiplyScalar(m.x).addScaledVector(u,-v.x).multiplyScalar(C),o[F].add(M),o[S].add(M),o[x].add(M),c[F].add(p),c[S].add(p),c[x].add(p))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let F=0,S=A.length;F<S;++F){const x=A[F],C=x.start,z=x.count;for(let G=C,K=C+z;G<K;G+=3)h(t.getX(G+0),t.getX(G+1),t.getX(G+2))}const T=new I,y=new I,D=new I,P=new I;function R(F){D.fromBufferAttribute(r,F),P.copy(D);const S=o[F];T.copy(S),T.sub(D.multiplyScalar(D.dot(S))).normalize(),y.crossVectors(P,S);const C=y.dot(c[F])<0?-1:1;a.setXYZW(F,T.x,T.y,T.z,C)}for(let F=0,S=A.length;F<S;++F){const x=A[F],C=x.start,z=x.count;for(let G=C,K=C+z;G<K;G+=3)R(t.getX(G+0)),R(t.getX(G+1)),R(t.getX(G+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const r=new I,s=new I,a=new I,o=new I,c=new I,l=new I,u=new I,d=new I;if(t)for(let f=0,m=t.count;f<m;f+=3){const v=t.getX(f+0),M=t.getX(f+1),p=t.getX(f+2);r.fromBufferAttribute(e,v),s.fromBufferAttribute(e,M),a.fromBufferAttribute(e,p),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,p),o.add(u),c.add(u),l.add(u),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=e.count;f<m;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)me.fromBufferAttribute(t,e),me.normalize(),t.setXYZ(e,me.x,me.y,me.z)}toNonIndexed(){function t(o,c){const l=o.array,u=o.itemSize,d=o.normalized,f=new l.constructor(c.length*u);let m=0,v=0;for(let M=0,p=c.length;M<p;M++){o.isInterleavedBufferAttribute?m=c[M]*o.data.stride+o.offset:m=c[M]*u;for(let h=0;h<u;h++)f[v++]=l[m++]}return new Xe(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new kn,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=t(c,n);e.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,d=l.length;u<d;u++){const f=l[u],m=t(f,n);c.push(m)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){const m=l[d];u.push(m.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(e))}const s=t.morphAttributes;for(const l in s){const u=[],d=s[l];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,u=a.length;l<u;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Oa=new te,Cn=new Go,Ji=new Bi,Ba=new I,Qi=new I,tr=new I,er=new I,Kr=new I,nr=new I,za=new I,ir=new I;class Ie extends _e{constructor(t=new kn,e=new sa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){nr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],d=s[c];u!==0&&(Kr.fromBufferAttribute(d,t),a?nr.addScaledVector(Kr,u):nr.addScaledVector(Kr.sub(e),u))}e.add(nr)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ji.copy(n.boundingSphere),Ji.applyMatrix4(s),Cn.copy(t.ray).recast(t.near),!(Ji.containsPoint(Cn.origin)===!1&&(Cn.intersectSphere(Ji,Ba)===null||Cn.origin.distanceToSquared(Ba)>(t.far-t.near)**2))&&(Oa.copy(s).invert(),Cn.copy(t.ray).applyMatrix4(Oa),!(n.boundingBox!==null&&Cn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Cn)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,M=f.length;v<M;v++){const p=f[v],h=a[p.materialIndex],A=Math.max(p.start,m.start),T=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let y=A,D=T;y<D;y+=3){const P=o.getX(y),R=o.getX(y+1),F=o.getX(y+2);r=rr(this,h,t,n,l,u,d,P,R,F),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const v=Math.max(0,m.start),M=Math.min(o.count,m.start+m.count);for(let p=v,h=M;p<h;p+=3){const A=o.getX(p),T=o.getX(p+1),y=o.getX(p+2);r=rr(this,a,t,n,l,u,d,A,T,y),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,M=f.length;v<M;v++){const p=f[v],h=a[p.materialIndex],A=Math.max(p.start,m.start),T=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let y=A,D=T;y<D;y+=3){const P=y,R=y+1,F=y+2;r=rr(this,h,t,n,l,u,d,P,R,F),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const v=Math.max(0,m.start),M=Math.min(c.count,m.start+m.count);for(let p=v,h=M;p<h;p+=3){const A=p,T=p+1,y=p+2;r=rr(this,a,t,n,l,u,d,A,T,y),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}}}function Rc(i,t,e,n,r,s,a,o){let c;if(t.side===we?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,t.side===En,o),c===null)return null;ir.copy(o),ir.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(ir);return l<e.near||l>e.far?null:{distance:l,point:ir.clone(),object:i}}function rr(i,t,e,n,r,s,a,o,c,l){i.getVertexPosition(o,Qi),i.getVertexPosition(c,tr),i.getVertexPosition(l,er);const u=Rc(i,t,e,n,Qi,tr,er,za);if(u){const d=new I;ke.getBarycoord(za,Qi,tr,er,d),r&&(u.uv=ke.getInterpolatedAttribute(r,o,c,l,d,new Lt)),s&&(u.uv1=ke.getInterpolatedAttribute(s,o,c,l,d,new Lt)),a&&(u.normal=ke.getInterpolatedAttribute(a,o,c,l,d,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new I,materialIndex:0};ke.getNormal(Qi,tr,er,f.normal),u.face=f,u.barycoord=d}return u}class _i extends kn{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],d=[];let f=0,m=0;v("z","y","x",-1,-1,n,e,t,a,s,0),v("z","y","x",1,-1,n,e,-t,a,s,1),v("x","z","y",1,1,t,n,e,r,a,2),v("x","z","y",1,-1,t,n,-e,r,a,3),v("x","y","z",1,-1,t,e,n,r,s,4),v("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Bn(l,3)),this.setAttribute("normal",new Bn(u,3)),this.setAttribute("uv",new Bn(d,2));function v(M,p,h,A,T,y,D,P,R,F,S){const x=y/R,C=D/F,z=y/2,G=D/2,K=P/2,W=R+1,Y=F+1;let j=0,H=0;const at=new I;for(let ht=0;ht<Y;ht++){const yt=ht*C-G;for(let Bt=0;Bt<W;Bt++){const Jt=Bt*x-z;at[M]=Jt*A,at[p]=yt*T,at[h]=K,l.push(at.x,at.y,at.z),at[M]=0,at[p]=0,at[h]=P>0?1:-1,u.push(at.x,at.y,at.z),d.push(Bt/R),d.push(1-ht/F),j+=1}}for(let ht=0;ht<F;ht++)for(let yt=0;yt<R;yt++){const Bt=f+yt+W*ht,Jt=f+yt+W*(ht+1),ne=f+(yt+1)+W*(ht+1),Xt=f+(yt+1)+W*ht;c.push(Bt,Jt,Xt),c.push(Jt,ne,Xt),H+=6}o.addGroup(m,H,S),m+=H,f+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function mi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Ee(i){const t={};for(let e=0;e<i.length;e++){const n=mi(i[e]);for(const r in n)t[r]=n[r]}return t}function Cc(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function qo(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Wt.workingColorSpace}const Pc={clone:mi,merge:Ee};var Dc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tn extends zi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dc,this.fragmentShader=Lc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=mi(t.uniforms),this.uniformsGroups=Cc(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ko extends _e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=$e,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _n=new I,Ha=new Lt,Va=new Lt;class Ue extends Ko{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ks*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(_r*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ks*2*Math.atan(Math.tan(_r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){_n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(_n.x,_n.y).multiplyScalar(-t/_n.z),_n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_n.x,_n.y).multiplyScalar(-t/_n.z)}getViewSize(t,e){return this.getViewBounds(t,Ha,Va),e.subVectors(Va,Ha)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(_r*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,e-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ni=-90,ii=1;class Uc extends _e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ue(ni,ii,t,e);r.layers=this.layers,this.add(r);const s=new Ue(ni,ii,t,e);s.layers=this.layers,this.add(s);const a=new Ue(ni,ii,t,e);a.layers=this.layers,this.add(a);const o=new Ue(ni,ii,t,e);o.layers=this.layers,this.add(o);const c=new Ue(ni,ii,t,e);c.layers=this.layers,this.add(c);const l=new Ue(ni,ii,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,c]=e;for(const l of e)this.remove(l);if(t===$e)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===xr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,c),t.setRenderTarget(n,4,r),t.render(e,l),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,r),t.render(e,u),t.setRenderTarget(d,f,m),t.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Zo extends Me{constructor(t=[],e=di,n,r,s,a,o,c,l,u){super(t,e,n,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ic extends Hn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Zo(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new _i(5,5,5),s=new Tn({name:"CubemapFromEquirect",uniforms:mi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:we,blending:Mn});s.uniforms.tEquirect.value=e;const a=new Ie(r,s),o=e.minFilter;return e.minFilter===On&&(e.minFilter=Ze),new Uc(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}class sr extends _e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Nc={type:"move"};class Zr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const M of t.hand.values()){const p=e.getJointPose(M,n),h=this._getHandJoint(l,M);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,v=.005;l.inputState.pinching&&f>m+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=m-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Nc)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new sr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class aa{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Gt(t),this.density=e}clone(){return new aa(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Fc extends _e{constructor(){super(),this.isScene=!0,window.__galleryCaptureScene?.(this),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qe,this.environmentIntensity=1,this.environmentRotation=new Qe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Oc extends Me{constructor(t=null,e=1,n=1,r,s,a,o,c,l=Ne,u=Ne,d,f){super(null,a,o,c,l,u,r,s,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ga extends Xe{constructor(t,e,n,r=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ri=new te,ka=new te,ar=[],Wa=new Gn,Bc=new te,bi=new Ie,Ai=new Bi;class zc extends Ie{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ga(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Bc)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Gn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ri),Wa.copy(t.boundingBox).applyMatrix4(ri),this.boundingBox.union(Wa)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Bi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ri),Ai.copy(t.boundingSphere).applyMatrix4(ri),this.boundingSphere.union(Ai)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=t*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(t,e){const n=this.matrixWorld,r=this.count;if(bi.geometry=this.geometry,bi.material=this.material,bi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ai.copy(this.boundingSphere),Ai.applyMatrix4(n),t.ray.intersectsSphere(Ai)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ri),ka.multiplyMatrices(n,ri),bi.matrixWorld=ka,bi.raycast(t,ar);for(let a=0,o=ar.length;a<o;a++){const c=ar[a];c.instanceId=s,c.object=this,e.push(c)}ar.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ga(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Oc(new Float32Array(r*this.count),r,this.count,ta,je));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=r*t;s[c]=o,s.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const jr=new I,Hc=new I,Vc=new Nt;class vn{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=jr.subVectors(n,e).cross(Hc.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(jr),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Vc.getNormalMatrix(t),r=this.coplanarPoint(jr).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pn=new Bi,Gc=new Lt(.5,.5),or=new I;class oa{constructor(t=new vn,e=new vn,n=new vn,r=new vn,s=new vn,a=new vn){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=$e,n=!1){const r=this.planes,s=t.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],d=s[5],f=s[6],m=s[7],v=s[8],M=s[9],p=s[10],h=s[11],A=s[12],T=s[13],y=s[14],D=s[15];if(r[0].setComponents(l-a,m-u,h-v,D-A).normalize(),r[1].setComponents(l+a,m+u,h+v,D+A).normalize(),r[2].setComponents(l+o,m+d,h+M,D+T).normalize(),r[3].setComponents(l-o,m-d,h-M,D-T).normalize(),n)r[4].setComponents(c,f,p,y).normalize(),r[5].setComponents(l-c,m-f,h-p,D-y).normalize();else if(r[4].setComponents(l-c,m-f,h-p,D-y).normalize(),e===$e)r[5].setComponents(l+c,m+f,h+p,D+y).normalize();else if(e===xr)r[5].setComponents(c,f,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Pn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Pn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Pn)}intersectsSprite(t){Pn.center.set(0,0,0);const e=Gc.distanceTo(t.center);return Pn.radius=.7071067811865476+e,Pn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Pn)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(or.x=r.normal.x>0?t.max.x:t.min.x,or.y=r.normal.y>0?t.max.y:t.min.y,or.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(or)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class kc extends Me{constructor(t,e,n,r,s,a,o,c,l){super(t,e,n,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class jo extends Me{constructor(t,e,n=zn,r,s,a,o=Ne,c=Ne,l,u=Di,d=1){if(u!==Di&&u!==Li)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:d};super(f,r,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ra(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class $o extends Me{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class gi extends kn{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),c=Math.floor(r),l=o+1,u=c+1,d=t/o,f=e/c,m=[],v=[],M=[],p=[];for(let h=0;h<u;h++){const A=h*f-a;for(let T=0;T<l;T++){const y=T*d-s;v.push(y,-A,0),M.push(0,0,1),p.push(T/o),p.push(1-h/c)}}for(let h=0;h<c;h++)for(let A=0;A<o;A++){const T=A+l*h,y=A+l*(h+1),D=A+1+l*(h+1),P=A+1+l*h;m.push(T,y,P),m.push(y,D,P)}this.setIndex(m),this.setAttribute("position",new Bn(v,3)),this.setAttribute("normal",new Bn(M,3)),this.setAttribute("uv",new Bn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gi(t.width,t.height,t.widthSegments,t.heightSegments)}}class se extends zi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bo,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qe,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Wc extends zi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Xc extends zi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class la extends _e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Yc extends la{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const $r=new te,Xa=new I,Ya=new I;class Jo{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.mapType=Je,this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oa,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Xa.setFromMatrixPosition(t.matrixWorld),e.position.copy(Xa),Ya.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ya),e.updateMatrixWorld(),$r.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix($r,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($r)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const qa=new te,wi=new I,Jr=new I;class qc extends Jo{constructor(){super(new Ue(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Lt(4,2),this._viewportCount=6,this._viewports=[new jt(2,1,1,1),new jt(0,1,1,1),new jt(3,1,1,1),new jt(1,1,1,1),new jt(3,0,1,1),new jt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,r=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),wi.setFromMatrixPosition(t.matrixWorld),n.position.copy(wi),Jr.copy(n.position),Jr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Jr),n.updateMatrixWorld(),r.makeTranslation(-wi.x,-wi.y,-wi.z),qa.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qa,n.coordinateSystem,n.reversedDepth)}}class Qo extends la{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new qc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class tl extends Ko{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,c=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Kc extends Jo{constructor(){super(new tl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zc extends la{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.target=new _e,this.shadow=new Kc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class jc extends Ue{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Ka{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=zt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(zt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class $c extends Vn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Za(i,t,e,n){const r=Jc(n);switch(e){case No:return i*t;case ta:return i*t/r.components*r.byteLength;case ea:return i*t/r.components*r.byteLength;case Oo:return i*t*2/r.components*r.byteLength;case na:return i*t*2/r.components*r.byteLength;case Fo:return i*t*3/r.components*r.byteLength;case We:return i*t*4/r.components*r.byteLength;case ia:return i*t*4/r.components*r.byteLength;case dr:case fr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case pr:case mr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ms:case Es:return Math.max(i,16)*Math.max(t,8)/4;case xs:case Ss:return Math.max(i,8)*Math.max(t,8)/2;case ys:case Ts:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case bs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case As:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ws:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Rs:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Cs:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ps:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ds:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ls:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Us:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Is:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ns:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Fs:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Os:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Bs:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case zs:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Hs:case Vs:case Gs:return Math.ceil(i/4)*Math.ceil(t/4)*16;case ks:case Ws:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Xs:case Ys:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Jc(i){switch(i){case Je:case Do:return{byteLength:1,components:1};case Ci:case Lo:case Fi:return{byteLength:2,components:1};case Js:case Qs:return{byteLength:2,components:4};case zn:case $s:case je:return{byteLength:4,components:1};case Uo:case Io:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:js}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=js);function el(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Qc(i){const t=new WeakMap;function e(o,c){const l=o.array,u=o.usage,d=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,u),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){const u=c.array,d=c.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,u);else{d.sort((m,v)=>m.start-v.start);let f=0;for(let m=1;m<d.length;m++){const v=d[f],M=d[m];M.start<=v.start+v.count+1?v.count=Math.max(v.count,M.start+M.count-v.start):(++f,d[f]=M)}d.length=f+1;for(let m=0,v=d.length;m<v;m++){const M=d[m];i.bufferSubData(l,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var th=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eh=`#ifdef USE_ALPHAHASH
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
#endif`,nh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ih=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ah=`#ifdef USE_AOMAP
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
#endif`,oh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lh=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ch=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fh=`#ifdef USE_IRIDESCENCE
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
#endif`,ph=`#ifdef USE_BUMPMAP
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
#endif`,mh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_h=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Eh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,yh=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Th=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,bh=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ah=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ch=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ph="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Uh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ih=`#ifdef USE_ENVMAP
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
#endif`,Nh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Oh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vh=`#ifdef USE_GRADIENTMAP
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
}`,Gh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xh=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,Yh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,qh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$h=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Jh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Qh=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,tu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,eu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ru=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,su=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,au=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ou=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cu=`#if defined( USE_POINTS_UV )
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
#endif`,hu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,du=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mu=`#ifdef USE_MORPHTARGETS
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
#endif`,_u=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Su=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Eu=`#ifdef USE_NORMALMAP
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
#endif`,yu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Au=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ru=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Cu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Du=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Uu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Iu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Fu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Ou=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Bu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,zu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hu=`#ifdef USE_SKINNING
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
#endif`,Vu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gu=`#ifdef USE_SKINNING
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
#endif`,ku=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qu=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ku=`#ifdef USE_TRANSMISSION
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
#endif`,Zu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ju=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$u=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ju=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,td=`uniform sampler2D t2D;
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
}`,ed=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,id=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sd=`#include <common>
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
}`,ad=`#if DEPTH_PACKING == 3200
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
}`,od=`#define DISTANCE
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
}`,ld=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,cd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ud=`uniform float scale;
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
}`,dd=`uniform vec3 diffuse;
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
}`,fd=`#include <common>
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
}`,pd=`uniform vec3 diffuse;
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
}`,md=`#define LAMBERT
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
}`,_d=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,gd=`#define MATCAP
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
}`,vd=`#define MATCAP
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
}`,xd=`#define NORMAL
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
}`,Md=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Sd=`#define PHONG
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
}`,Ed=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,yd=`#define STANDARD
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
}`,Td=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,bd=`#define TOON
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
}`,Ad=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,wd=`uniform float size;
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
}`,Rd=`uniform vec3 diffuse;
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
}`,Cd=`#include <common>
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
}`,Pd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Dd=`uniform float rotation;
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
}`,Ld=`uniform vec3 diffuse;
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
}`,Ot={alphahash_fragment:th,alphahash_pars_fragment:eh,alphamap_fragment:nh,alphamap_pars_fragment:ih,alphatest_fragment:rh,alphatest_pars_fragment:sh,aomap_fragment:ah,aomap_pars_fragment:oh,batching_pars_vertex:lh,batching_vertex:ch,begin_vertex:hh,beginnormal_vertex:uh,bsdfs:dh,iridescence_fragment:fh,bumpmap_pars_fragment:ph,clipping_planes_fragment:mh,clipping_planes_pars_fragment:_h,clipping_planes_pars_vertex:gh,clipping_planes_vertex:vh,color_fragment:xh,color_pars_fragment:Mh,color_pars_vertex:Sh,color_vertex:Eh,common:yh,cube_uv_reflection_fragment:Th,defaultnormal_vertex:bh,displacementmap_pars_vertex:Ah,displacementmap_vertex:wh,emissivemap_fragment:Rh,emissivemap_pars_fragment:Ch,colorspace_fragment:Ph,colorspace_pars_fragment:Dh,envmap_fragment:Lh,envmap_common_pars_fragment:Uh,envmap_pars_fragment:Ih,envmap_pars_vertex:Nh,envmap_physical_pars_fragment:Yh,envmap_vertex:Fh,fog_vertex:Oh,fog_pars_vertex:Bh,fog_fragment:zh,fog_pars_fragment:Hh,gradientmap_pars_fragment:Vh,lightmap_pars_fragment:Gh,lights_lambert_fragment:kh,lights_lambert_pars_fragment:Wh,lights_pars_begin:Xh,lights_toon_fragment:qh,lights_toon_pars_fragment:Kh,lights_phong_fragment:Zh,lights_phong_pars_fragment:jh,lights_physical_fragment:$h,lights_physical_pars_fragment:Jh,lights_fragment_begin:Qh,lights_fragment_maps:tu,lights_fragment_end:eu,logdepthbuf_fragment:nu,logdepthbuf_pars_fragment:iu,logdepthbuf_pars_vertex:ru,logdepthbuf_vertex:su,map_fragment:au,map_pars_fragment:ou,map_particle_fragment:lu,map_particle_pars_fragment:cu,metalnessmap_fragment:hu,metalnessmap_pars_fragment:uu,morphinstance_vertex:du,morphcolor_vertex:fu,morphnormal_vertex:pu,morphtarget_pars_vertex:mu,morphtarget_vertex:_u,normal_fragment_begin:gu,normal_fragment_maps:vu,normal_pars_fragment:xu,normal_pars_vertex:Mu,normal_vertex:Su,normalmap_pars_fragment:Eu,clearcoat_normal_fragment_begin:yu,clearcoat_normal_fragment_maps:Tu,clearcoat_pars_fragment:bu,iridescence_pars_fragment:Au,opaque_fragment:wu,packing:Ru,premultiplied_alpha_fragment:Cu,project_vertex:Pu,dithering_fragment:Du,dithering_pars_fragment:Lu,roughnessmap_fragment:Uu,roughnessmap_pars_fragment:Iu,shadowmap_pars_fragment:Nu,shadowmap_pars_vertex:Fu,shadowmap_vertex:Ou,shadowmask_pars_fragment:Bu,skinbase_vertex:zu,skinning_pars_vertex:Hu,skinning_vertex:Vu,skinnormal_vertex:Gu,specularmap_fragment:ku,specularmap_pars_fragment:Wu,tonemapping_fragment:Xu,tonemapping_pars_fragment:Yu,transmission_fragment:qu,transmission_pars_fragment:Ku,uv_pars_fragment:Zu,uv_pars_vertex:ju,uv_vertex:$u,worldpos_vertex:Ju,background_vert:Qu,background_frag:td,backgroundCube_vert:ed,backgroundCube_frag:nd,cube_vert:id,cube_frag:rd,depth_vert:sd,depth_frag:ad,distanceRGBA_vert:od,distanceRGBA_frag:ld,equirect_vert:cd,equirect_frag:hd,linedashed_vert:ud,linedashed_frag:dd,meshbasic_vert:fd,meshbasic_frag:pd,meshlambert_vert:md,meshlambert_frag:_d,meshmatcap_vert:gd,meshmatcap_frag:vd,meshnormal_vert:xd,meshnormal_frag:Md,meshphong_vert:Sd,meshphong_frag:Ed,meshphysical_vert:yd,meshphysical_frag:Td,meshtoon_vert:bd,meshtoon_frag:Ad,points_vert:wd,points_frag:Rd,shadow_vert:Cd,shadow_frag:Pd,sprite_vert:Dd,sprite_frag:Ld},st={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},Ke={basic:{uniforms:Ee([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:Ee([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:Ee([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:Ee([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:Ee([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:Ee([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:Ee([st.points,st.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:Ee([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:Ee([st.common,st.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:Ee([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:Ee([st.sprite,st.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:Ee([st.common,st.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:Ee([st.lights,st.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};Ke.physical={uniforms:Ee([Ke.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};const lr={r:0,b:0,g:0},Dn=new Qe,Ud=new te;function Id(i,t,e,n,r,s,a){const o=new Gt(0);let c=s===!0?0:1,l,u,d=null,f=0,m=null;function v(T){let y=T.isScene===!0?T.background:null;return y&&y.isTexture&&(y=(T.backgroundBlurriness>0?e:t).get(y)),y}function M(T){let y=!1;const D=v(T);D===null?h(o,c):D&&D.isColor&&(h(D,1),y=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(T,y){const D=v(y);D&&(D.isCubeTexture||D.mapping===Sr)?(u===void 0&&(u=new Ie(new _i(1,1,1),new Tn({name:"BackgroundCubeMaterial",uniforms:mi(Ke.backgroundCube.uniforms),vertexShader:Ke.backgroundCube.vertexShader,fragmentShader:Ke.backgroundCube.fragmentShader,side:we,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,R,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Dn.copy(y.backgroundRotation),Dn.x*=-1,Dn.y*=-1,Dn.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Dn.y*=-1,Dn.z*=-1),u.material.uniforms.envMap.value=D,u.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ud.makeRotationFromEuler(Dn)),u.material.toneMapped=Wt.getTransfer(D.colorSpace)!==Kt,(d!==D||f!==D.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,d=D,f=D.version,m=i.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):D&&D.isTexture&&(l===void 0&&(l=new Ie(new gi(2,2),new Tn({name:"BackgroundMaterial",uniforms:mi(Ke.background.uniforms),vertexShader:Ke.background.vertexShader,fragmentShader:Ke.background.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=D,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Wt.getTransfer(D.colorSpace)!==Kt,D.matrixAutoUpdate===!0&&D.updateMatrix(),l.material.uniforms.uvTransform.value.copy(D.matrix),(d!==D||f!==D.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,d=D,f=D.version,m=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function h(T,y){T.getRGB(lr,qo(i)),n.buffers.color.setClear(lr.r,lr.g,lr.b,y,a)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,y=1){o.set(T),c=y,h(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,h(o,c)},render:M,addToRenderList:p,dispose:A}}function Nd(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,a=!1;function o(x,C,z,G,K){let W=!1;const Y=d(G,z,C);s!==Y&&(s=Y,l(s.object)),W=m(x,G,z,K),W&&v(x,G,z,K),K!==null&&t.update(K,i.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,y(x,C,z,G),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function c(){return i.createVertexArray()}function l(x){return i.bindVertexArray(x)}function u(x){return i.deleteVertexArray(x)}function d(x,C,z){const G=z.wireframe===!0;let K=n[x.id];K===void 0&&(K={},n[x.id]=K);let W=K[C.id];W===void 0&&(W={},K[C.id]=W);let Y=W[G];return Y===void 0&&(Y=f(c()),W[G]=Y),Y}function f(x){const C=[],z=[],G=[];for(let K=0;K<e;K++)C[K]=0,z[K]=0,G[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:z,attributeDivisors:G,object:x,attributes:{},index:null}}function m(x,C,z,G){const K=s.attributes,W=C.attributes;let Y=0;const j=z.getAttributes();for(const H in j)if(j[H].location>=0){const ht=K[H];let yt=W[H];if(yt===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(yt=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(yt=x.instanceColor)),ht===void 0||ht.attribute!==yt||yt&&ht.data!==yt.data)return!0;Y++}return s.attributesNum!==Y||s.index!==G}function v(x,C,z,G){const K={},W=C.attributes;let Y=0;const j=z.getAttributes();for(const H in j)if(j[H].location>=0){let ht=W[H];ht===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(ht=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(ht=x.instanceColor));const yt={};yt.attribute=ht,ht&&ht.data&&(yt.data=ht.data),K[H]=yt,Y++}s.attributes=K,s.attributesNum=Y,s.index=G}function M(){const x=s.newAttributes;for(let C=0,z=x.length;C<z;C++)x[C]=0}function p(x){h(x,0)}function h(x,C){const z=s.newAttributes,G=s.enabledAttributes,K=s.attributeDivisors;z[x]=1,G[x]===0&&(i.enableVertexAttribArray(x),G[x]=1),K[x]!==C&&(i.vertexAttribDivisor(x,C),K[x]=C)}function A(){const x=s.newAttributes,C=s.enabledAttributes;for(let z=0,G=C.length;z<G;z++)C[z]!==x[z]&&(i.disableVertexAttribArray(z),C[z]=0)}function T(x,C,z,G,K,W,Y){Y===!0?i.vertexAttribIPointer(x,C,z,K,W):i.vertexAttribPointer(x,C,z,G,K,W)}function y(x,C,z,G){M();const K=G.attributes,W=z.getAttributes(),Y=C.defaultAttributeValues;for(const j in W){const H=W[j];if(H.location>=0){let at=K[j];if(at===void 0&&(j==="instanceMatrix"&&x.instanceMatrix&&(at=x.instanceMatrix),j==="instanceColor"&&x.instanceColor&&(at=x.instanceColor)),at!==void 0){const ht=at.normalized,yt=at.itemSize,Bt=t.get(at);if(Bt===void 0)continue;const Jt=Bt.buffer,ne=Bt.type,Xt=Bt.bytesPerElement,X=ne===i.INT||ne===i.UNSIGNED_INT||at.gpuType===$s;if(at.isInterleavedBufferAttribute){const $=at.data,ft=$.stride,Pt=at.offset;if($.isInstancedInterleavedBuffer){for(let Et=0;Et<H.locationSize;Et++)h(H.location+Et,$.meshPerAttribute);x.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Et=0;Et<H.locationSize;Et++)p(H.location+Et);i.bindBuffer(i.ARRAY_BUFFER,Jt);for(let Et=0;Et<H.locationSize;Et++)T(H.location+Et,yt/H.locationSize,ne,ht,ft*Xt,(Pt+yt/H.locationSize*Et)*Xt,X)}else{if(at.isInstancedBufferAttribute){for(let $=0;$<H.locationSize;$++)h(H.location+$,at.meshPerAttribute);x.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let $=0;$<H.locationSize;$++)p(H.location+$);i.bindBuffer(i.ARRAY_BUFFER,Jt);for(let $=0;$<H.locationSize;$++)T(H.location+$,yt/H.locationSize,ne,ht,yt*Xt,yt/H.locationSize*$*Xt,X)}}else if(Y!==void 0){const ht=Y[j];if(ht!==void 0)switch(ht.length){case 2:i.vertexAttrib2fv(H.location,ht);break;case 3:i.vertexAttrib3fv(H.location,ht);break;case 4:i.vertexAttrib4fv(H.location,ht);break;default:i.vertexAttrib1fv(H.location,ht)}}}}A()}function D(){F();for(const x in n){const C=n[x];for(const z in C){const G=C[z];for(const K in G)u(G[K].object),delete G[K];delete C[z]}delete n[x]}}function P(x){if(n[x.id]===void 0)return;const C=n[x.id];for(const z in C){const G=C[z];for(const K in G)u(G[K].object),delete G[K];delete C[z]}delete n[x.id]}function R(x){for(const C in n){const z=n[C];if(z[x.id]===void 0)continue;const G=z[x.id];for(const K in G)u(G[K].object),delete G[K];delete z[x.id]}}function F(){S(),a=!0,s!==r&&(s=r,l(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:F,resetDefaultState:S,dispose:D,releaseStatesOfGeometry:P,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:p,disableUnusedAttributes:A}}function Fd(i,t,e){let n;function r(l){n=l}function s(l,u){i.drawArrays(n,l,u),e.update(u,n,1)}function a(l,u,d){d!==0&&(i.drawArraysInstanced(n,l,u,d),e.update(u,n,d))}function o(l,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,d);let m=0;for(let v=0;v<d;v++)m+=u[v];e.update(m,n,1)}function c(l,u,d,f){if(d===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<l.length;v++)a(l[v],u[v],f[v]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,d);let v=0;for(let M=0;M<d;M++)v+=u[M]*f[M];e.update(v,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Od(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==We&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const F=R===Fi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Je&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==je&&!F)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=v>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:A,maxVaryings:T,maxFragmentUniforms:y,vertexTextures:D,maxSamples:P}}function Bd(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new vn,o=new Nt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||n!==0||r;return r=f,n=d.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){e=u(d,f,0)},this.setState=function(d,f,m){const v=d.clippingPlanes,M=d.clipIntersection,p=d.clipShadows,h=i.get(d);if(!r||v===null||v.length===0||s&&!p)s?u(null):l();else{const A=s?0:n,T=A*4;let y=h.clippingState||null;c.value=y,y=u(v,f,T,m);for(let D=0;D!==T;++D)y[D]=e[D];h.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=A}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,f,m,v){const M=d!==null?d.length:0;let p=null;if(M!==0){if(p=c.value,v!==!0||p===null){const h=m+M*4,A=f.matrixWorldInverse;o.getNormalMatrix(A),(p===null||p.length<h)&&(p=new Float32Array(h));for(let T=0,y=m;T!==M;++T,y+=4)a.copy(d[T]).applyMatrix4(A,o),a.normal.toArray(p,y),p[y+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,p}}function zd(i){let t=new WeakMap;function e(a,o){return o===ms?a.mapping=di:o===_s&&(a.mapping=fi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ms||o===_s)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Ic(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",r),e(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const oi=4,ja=[.125,.215,.35,.446,.526,.582],Nn=20,Qr=new tl,$a=new Gt;let ts=null,es=0,ns=0,is=!1;const Un=(1+Math.sqrt(5))/2,si=1/Un,Ja=[new I(-Un,si,0),new I(Un,si,0),new I(-si,0,Un),new I(si,0,Un),new I(0,Un,-si),new I(0,Un,si),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],Hd=new I;class Qa{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100,s={}){const{size:a=256,position:o=Hd}=s;ts=this._renderer.getRenderTarget(),es=this._renderer.getActiveCubeFace(),ns=this._renderer.getActiveMipmapLevel(),is=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,r,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=no(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ts,es,ns),this._renderer.xr.enabled=is,t.scissorTest=!1,cr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===di||t.mapping===fi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ts=this._renderer.getRenderTarget(),es=this._renderer.getActiveCubeFace(),ns=this._renderer.getActiveMipmapLevel(),is=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ze,minFilter:Ze,generateMipmaps:!1,type:Fi,format:We,colorSpace:pi,depthBuffer:!1},r=to(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=to(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vd(s)),this._blurMaterial=Gd(s,t,e)}return r}_compileMaterial(t){const e=new Ie(this._lodPlanes[0],t);this._renderer.compile(e,Qr)}_sceneToCubeUV(t,e,n,r,s){const c=new Ue(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,m=d.toneMapping;d.getClearColor($a),d.toneMapping=Sn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));const M=new sa({name:"PMREM.Background",side:we,depthWrite:!1,depthTest:!1}),p=new Ie(new _i,M);let h=!1;const A=t.background;A?A.isColor&&(M.color.copy(A),t.background=null,h=!0):(M.color.copy($a),h=!0);for(let T=0;T<6;T++){const y=T%3;y===0?(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[T],s.y,s.z)):y===1?(c.up.set(0,0,l[T]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[T],s.z)):(c.up.set(0,l[T],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[T]));const D=this._cubeSize;cr(r,y*D,T>2?D:0,D,D),d.setRenderTarget(r),h&&d.render(p,c),d.render(t,c)}p.geometry.dispose(),p.material.dispose(),d.toneMapping=m,d.autoClear=f,t.background=A}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===di||t.mapping===fi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=no()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eo());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Ie(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const c=this._cubeSize;cr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Qr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Ja[(r-s-1)%Ja.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Ie(this._lodPlanes[r],l),f=l.uniforms,m=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Nn-1),M=s/v,p=isFinite(s)?1+Math.floor(u*M):Nn;p>Nn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Nn}`);const h=[];let A=0;for(let R=0;R<Nn;++R){const F=R/M,S=Math.exp(-F*F/2);h.push(S),R===0?A+=S:R<p&&(A+=2*S)}for(let R=0;R<h.length;R++)h[R]=h[R]/A;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=h,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:T}=this;f.dTheta.value=v,f.mipInt.value=T-n;const y=this._sizeLods[r],D=3*y*(r>T-oi?r-T+oi:0),P=4*(this._cubeSize-y);cr(e,D,P,3*y,2*y),c.setRenderTarget(e),c.render(d,Qr)}}function Vd(i){const t=[],e=[],n=[];let r=i;const s=i-oi+1+ja.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>i-oi?c=ja[a-i+oi-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,d=1+l,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,v=6,M=3,p=2,h=1,A=new Float32Array(M*v*m),T=new Float32Array(p*v*m),y=new Float32Array(h*v*m);for(let P=0;P<m;P++){const R=P%3*2/3-1,F=P>2?0:-1,S=[R,F,0,R+2/3,F,0,R+2/3,F+1,0,R,F,0,R+2/3,F+1,0,R,F+1,0];A.set(S,M*v*P),T.set(f,p*v*P);const x=[P,P,P,P,P,P];y.set(x,h*v*P)}const D=new kn;D.setAttribute("position",new Xe(A,M)),D.setAttribute("uv",new Xe(T,p)),D.setAttribute("faceIndex",new Xe(y,h)),t.push(D),r>oi&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function to(i,t,e){const n=new Hn(i,t,e);return n.texture.mapping=Sr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function cr(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Gd(i,t,e){const n=new Float32Array(Nn),r=new I(0,1,0);return new Tn({name:"SphericalGaussianBlur",defines:{n:Nn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function eo(){return new Tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ca(),fragmentShader:`

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
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function no(){return new Tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ca(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function ca(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function kd(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===ms||c===_s,u=c===di||c===fi;if(l||u){let d=t.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Qa(i)),d=l?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const m=o.image;return l&&m&&m.height>0||u&&m&&r(m)?(e===null&&(e=new Qa(i)),d=l?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Wd(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Ui("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Xd(i,t,e,n){const r={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const v in f.attributes)t.remove(f.attributes[v]);f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(t.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,e.memory.geometries++),f}function c(d){const f=d.attributes;for(const m in f)t.update(f[m],i.ARRAY_BUFFER)}function l(d){const f=[],m=d.index,v=d.attributes.position;let M=0;if(m!==null){const A=m.array;M=m.version;for(let T=0,y=A.length;T<y;T+=3){const D=A[T+0],P=A[T+1],R=A[T+2];f.push(D,P,P,R,R,D)}}else if(v!==void 0){const A=v.array;M=v.version;for(let T=0,y=A.length/3-1;T<y;T+=3){const D=T+0,P=T+1,R=T+2;f.push(D,P,P,R,R,D)}}else return;const p=new(Ho(f)?Yo:Xo)(f,1);p.version=M;const h=s.get(d);h&&t.remove(h),s.set(d,p)}function u(d){const f=s.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function Yd(i,t,e){let n;function r(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function c(f,m){i.drawElements(n,m,s,f*a),e.update(m,n,1)}function l(f,m,v){v!==0&&(i.drawElementsInstanced(n,m,s,f*a,v),e.update(m,n,v))}function u(f,m,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,f,0,v);let p=0;for(let h=0;h<v;h++)p+=m[h];e.update(p,n,1)}function d(f,m,v,M){if(v===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<f.length;h++)l(f[h]/a,m[h],M[h]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,s,f,0,M,0,v);let h=0;for(let A=0;A<v;A++)h+=m[A]*M[A];e.update(h,n,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function qd(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Kd(i,t,e){const n=new WeakMap,r=new jt;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==d){let x=function(){F.dispose(),n.delete(o),o.removeEventListener("dispose",x)};var m=x;f!==void 0&&f.texture.dispose();const v=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let y=0;v===!0&&(y=1),M===!0&&(y=2),p===!0&&(y=3);let D=o.attributes.position.count*y,P=1;D>t.maxTextureSize&&(P=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const R=new Float32Array(D*P*4*d),F=new Vo(R,D,P,d);F.type=je,F.needsUpdate=!0;const S=y*4;for(let C=0;C<d;C++){const z=h[C],G=A[C],K=T[C],W=D*P*4*C;for(let Y=0;Y<z.count;Y++){const j=Y*S;v===!0&&(r.fromBufferAttribute(z,Y),R[W+j+0]=r.x,R[W+j+1]=r.y,R[W+j+2]=r.z,R[W+j+3]=0),M===!0&&(r.fromBufferAttribute(G,Y),R[W+j+4]=r.x,R[W+j+5]=r.y,R[W+j+6]=r.z,R[W+j+7]=0),p===!0&&(r.fromBufferAttribute(K,Y),R[W+j+8]=r.x,R[W+j+9]=r.y,R[W+j+10]=r.z,R[W+j+11]=K.itemSize===4?r.w:1)}}f={count:d,texture:F,size:new Lt(D,P)},n.set(o,f),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let v=0;for(let p=0;p<l.length;p++)v+=l[p];const M=o.morphTargetsRelative?1:1-v;c.getUniforms().setValue(i,"morphTargetBaseInfluence",M),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function Zd(i,t,e,n){let r=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,d=t.get(c,u);if(r.get(d)!==l&&(t.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return d}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:a}}const nl=new Me,io=new jo(1,1),il=new Vo,rl=new gc,sl=new Zo,ro=[],so=[],ao=new Float32Array(16),oo=new Float32Array(9),lo=new Float32Array(4);function vi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=ro[r];if(s===void 0&&(s=new Float32Array(r),ro[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function de(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function fe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Er(i,t){let e=so[t];e===void 0&&(e=new Int32Array(t),so[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function jd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function $d(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;i.uniform2fv(this.addr,t),fe(e,t)}}function Jd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(de(e,t))return;i.uniform3fv(this.addr,t),fe(e,t)}}function Qd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;i.uniform4fv(this.addr,t),fe(e,t)}}function tf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(de(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),fe(e,t)}else{if(de(e,n))return;lo.set(n),i.uniformMatrix2fv(this.addr,!1,lo),fe(e,n)}}function ef(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(de(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),fe(e,t)}else{if(de(e,n))return;oo.set(n),i.uniformMatrix3fv(this.addr,!1,oo),fe(e,n)}}function nf(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(de(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),fe(e,t)}else{if(de(e,n))return;ao.set(n),i.uniformMatrix4fv(this.addr,!1,ao),fe(e,n)}}function rf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function sf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;i.uniform2iv(this.addr,t),fe(e,t)}}function af(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(de(e,t))return;i.uniform3iv(this.addr,t),fe(e,t)}}function of(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;i.uniform4iv(this.addr,t),fe(e,t)}}function lf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function cf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(de(e,t))return;i.uniform2uiv(this.addr,t),fe(e,t)}}function hf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(de(e,t))return;i.uniform3uiv(this.addr,t),fe(e,t)}}function uf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(de(e,t))return;i.uniform4uiv(this.addr,t),fe(e,t)}}function df(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(io.compareFunction=zo,s=io):s=nl,e.setTexture2D(t||s,r)}function ff(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||rl,r)}function pf(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||sl,r)}function mf(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||il,r)}function _f(i){switch(i){case 5126:return jd;case 35664:return $d;case 35665:return Jd;case 35666:return Qd;case 35674:return tf;case 35675:return ef;case 35676:return nf;case 5124:case 35670:return rf;case 35667:case 35671:return sf;case 35668:case 35672:return af;case 35669:case 35673:return of;case 5125:return lf;case 36294:return cf;case 36295:return hf;case 36296:return uf;case 35678:case 36198:case 36298:case 36306:case 35682:return df;case 35679:case 36299:case 36307:return ff;case 35680:case 36300:case 36308:case 36293:return pf;case 36289:case 36303:case 36311:case 36292:return mf}}function gf(i,t){i.uniform1fv(this.addr,t)}function vf(i,t){const e=vi(t,this.size,2);i.uniform2fv(this.addr,e)}function xf(i,t){const e=vi(t,this.size,3);i.uniform3fv(this.addr,e)}function Mf(i,t){const e=vi(t,this.size,4);i.uniform4fv(this.addr,e)}function Sf(i,t){const e=vi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Ef(i,t){const e=vi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function yf(i,t){const e=vi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Tf(i,t){i.uniform1iv(this.addr,t)}function bf(i,t){i.uniform2iv(this.addr,t)}function Af(i,t){i.uniform3iv(this.addr,t)}function wf(i,t){i.uniform4iv(this.addr,t)}function Rf(i,t){i.uniform1uiv(this.addr,t)}function Cf(i,t){i.uniform2uiv(this.addr,t)}function Pf(i,t){i.uniform3uiv(this.addr,t)}function Df(i,t){i.uniform4uiv(this.addr,t)}function Lf(i,t,e){const n=this.cache,r=t.length,s=Er(e,r);de(n,s)||(i.uniform1iv(this.addr,s),fe(n,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||nl,s[a])}function Uf(i,t,e){const n=this.cache,r=t.length,s=Er(e,r);de(n,s)||(i.uniform1iv(this.addr,s),fe(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||rl,s[a])}function If(i,t,e){const n=this.cache,r=t.length,s=Er(e,r);de(n,s)||(i.uniform1iv(this.addr,s),fe(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||sl,s[a])}function Nf(i,t,e){const n=this.cache,r=t.length,s=Er(e,r);de(n,s)||(i.uniform1iv(this.addr,s),fe(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||il,s[a])}function Ff(i){switch(i){case 5126:return gf;case 35664:return vf;case 35665:return xf;case 35666:return Mf;case 35674:return Sf;case 35675:return Ef;case 35676:return yf;case 5124:case 35670:return Tf;case 35667:case 35671:return bf;case 35668:case 35672:return Af;case 35669:case 35673:return wf;case 5125:return Rf;case 36294:return Cf;case 36295:return Pf;case 36296:return Df;case 35678:case 36198:case 36298:case 36306:case 35682:return Lf;case 35679:case 36299:case 36307:return Uf;case 35680:case 36300:case 36308:case 36293:return If;case 36289:case 36303:case 36311:case 36292:return Nf}}class Of{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=_f(e.type)}}class Bf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ff(e.type)}}class zf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const rs=/(\w+)(\])?(\[|\.)?/g;function co(i,t){i.seq.push(t),i.map[t.id]=t}function Hf(i,t,e){const n=i.name,r=n.length;for(rs.lastIndex=0;;){const s=rs.exec(n),a=rs.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){co(e,l===void 0?new Of(o,i,t):new Bf(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new zf(o),co(e,d)),e=d}}}class gr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);Hf(s,a,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function ho(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Vf=37297;let Gf=0;function kf(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const uo=new Nt;function Wf(i){Wt._getMatrix(uo,Wt.workingColorSpace,i);const t=`mat3( ${uo.elements.map(e=>e.toFixed(4))} )`;switch(Wt.getTransfer(i)){case vr:return[t,"LinearTransferOETF"];case Kt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function fo(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+kf(i.getShaderSource(t),o)}else return s}function Xf(i,t){const e=Wf(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Yf(i,t){let e;switch(t){case Xl:e="Linear";break;case Yl:e="Reinhard";break;case ql:e="Cineon";break;case Co:e="ACESFilmic";break;case Zl:e="AgX";break;case jl:e="Neutral";break;case Kl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const hr=new I;function qf(){Wt.getLuminanceCoefficients(hr);const i=hr.x.toFixed(4),t=hr.y.toFixed(4),e=hr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Kf(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ri).join(`
`)}function Zf(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function jf(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Ri(i){return i!==""}function po(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function mo(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const $f=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zs(i){return i.replace($f,Qf)}const Jf=new Map;function Qf(i,t){let e=Ot[t];if(e===void 0){const n=Jf.get(t);if(n!==void 0)e=Ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Zs(e)}const tp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _o(i){return i.replace(tp,ep)}function ep(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function go(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function np(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ao?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===wo?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===on&&(t="SHADOWMAP_TYPE_VSM"),t}function ip(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case di:case fi:t="ENVMAP_TYPE_CUBE";break;case Sr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function rp(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===fi&&(t="ENVMAP_MODE_REFRACTION"),t}function sp(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ro:t="ENVMAP_BLENDING_MULTIPLY";break;case kl:t="ENVMAP_BLENDING_MIX";break;case Wl:t="ENVMAP_BLENDING_ADD";break}return t}function ap(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function op(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=np(e),l=ip(e),u=rp(e),d=sp(e),f=ap(e),m=Kf(e),v=Zf(s),M=r.createProgram();let p,h,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ri).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ri).join(`
`),h.length>0&&(h+=`
`)):(p=[go(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ri).join(`
`),h=[go(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Sn?"#define TONE_MAPPING":"",e.toneMapping!==Sn?Ot.tonemapping_pars_fragment:"",e.toneMapping!==Sn?Yf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,Xf("linearToOutputTexel",e.outputColorSpace),qf(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ri).join(`
`)),a=Zs(a),a=po(a,e),a=mo(a,e),o=Zs(o),o=po(o,e),o=mo(o,e),a=_o(a),o=_o(o),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",e.glslVersion===Ta?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ta?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const T=A+p+a,y=A+h+o,D=ho(r,r.VERTEX_SHADER,T),P=ho(r,r.FRAGMENT_SHADER,y);r.attachShader(M,D),r.attachShader(M,P),e.index0AttributeName!==void 0?r.bindAttribLocation(M,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function R(C){if(i.debug.checkShaderErrors){const z=r.getProgramInfoLog(M)||"",G=r.getShaderInfoLog(D)||"",K=r.getShaderInfoLog(P)||"",W=z.trim(),Y=G.trim(),j=K.trim();let H=!0,at=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,M,D,P);else{const ht=fo(r,D,"vertex"),yt=fo(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+W+`
`+ht+`
`+yt)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(Y===""||j==="")&&(at=!1);at&&(C.diagnostics={runnable:H,programLog:W,vertexShader:{log:Y,prefix:p},fragmentShader:{log:j,prefix:h}})}r.deleteShader(D),r.deleteShader(P),F=new gr(r,M),S=jf(r,M)}let F;this.getUniforms=function(){return F===void 0&&R(this),F};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(M,Vf)),x},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Gf++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=D,this.fragmentShader=P,this}let lp=0;class cp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new hp(t),e.set(t,n)),n}}class hp{constructor(t){this.id=lp++,this.code=t,this.usedTimes=0}}function up(i,t,e,n,r,s,a){const o=new ko,c=new cp,l=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(S){return l.add(S),S===0?"uv":`uv${S}`}function p(S,x,C,z,G){const K=z.fog,W=G.geometry,Y=S.isMeshStandardMaterial?z.environment:null,j=(S.isMeshStandardMaterial?e:t).get(S.envMap||Y),H=j&&j.mapping===Sr?j.image.height:null,at=v[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const ht=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,yt=ht!==void 0?ht.length:0;let Bt=0;W.morphAttributes.position!==void 0&&(Bt=1),W.morphAttributes.normal!==void 0&&(Bt=2),W.morphAttributes.color!==void 0&&(Bt=3);let Jt,ne,Xt,X;if(at){const Yt=Ke[at];Jt=Yt.vertexShader,ne=Yt.fragmentShader}else Jt=S.vertexShader,ne=S.fragmentShader,c.update(S),Xt=c.getVertexShaderID(S),X=c.getFragmentShaderID(S);const $=i.getRenderTarget(),ft=i.state.buffers.depth.getReversed(),Pt=G.isInstancedMesh===!0,Et=G.isBatchedMesh===!0,Vt=!!S.map,ge=!!S.matcap,b=!!j,ie=!!S.aoMap,Ut=!!S.lightMap,Rt=!!S.bumpMap,_t=!!S.normalMap,re=!!S.displacementMap,gt=!!S.emissiveMap,Ft=!!S.metalnessMap,pe=!!S.roughnessMap,ce=S.anisotropy>0,E=S.clearcoat>0,_=S.dispersion>0,N=S.iridescence>0,k=S.sheen>0,Z=S.transmission>0,V=ce&&!!S.anisotropyMap,St=E&&!!S.clearcoatMap,nt=E&&!!S.clearcoatNormalMap,vt=E&&!!S.clearcoatRoughnessMap,xt=N&&!!S.iridescenceMap,tt=N&&!!S.iridescenceThicknessMap,ct=k&&!!S.sheenColorMap,wt=k&&!!S.sheenRoughnessMap,Mt=!!S.specularMap,ot=!!S.specularColorMap,It=!!S.specularIntensityMap,w=Z&&!!S.transmissionMap,et=Z&&!!S.thicknessMap,it=!!S.gradientMap,dt=!!S.alphaMap,J=S.alphaTest>0,q=!!S.alphaHash,mt=!!S.extensions;let Dt=Sn;S.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Dt=i.toneMapping);const Qt={shaderID:at,shaderType:S.type,shaderName:S.name,vertexShader:Jt,fragmentShader:ne,defines:S.defines,customVertexShaderID:Xt,customFragmentShaderID:X,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:Et,batchingColor:Et&&G._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&G.instanceColor!==null,instancingMorph:Pt&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:pi,alphaToCoverage:!!S.alphaToCoverage,map:Vt,matcap:ge,envMap:b,envMapMode:b&&j.mapping,envMapCubeUVHeight:H,aoMap:ie,lightMap:Ut,bumpMap:Rt,normalMap:_t,displacementMap:f&&re,emissiveMap:gt,normalMapObjectSpace:_t&&S.normalMapType===tc,normalMapTangentSpace:_t&&S.normalMapType===Bo,metalnessMap:Ft,roughnessMap:pe,anisotropy:ce,anisotropyMap:V,clearcoat:E,clearcoatMap:St,clearcoatNormalMap:nt,clearcoatRoughnessMap:vt,dispersion:_,iridescence:N,iridescenceMap:xt,iridescenceThicknessMap:tt,sheen:k,sheenColorMap:ct,sheenRoughnessMap:wt,specularMap:Mt,specularColorMap:ot,specularIntensityMap:It,transmission:Z,transmissionMap:w,thicknessMap:et,gradientMap:it,opaque:S.transparent===!1&&S.blending===ci&&S.alphaToCoverage===!1,alphaMap:dt,alphaTest:J,alphaHash:q,combine:S.combine,mapUv:Vt&&M(S.map.channel),aoMapUv:ie&&M(S.aoMap.channel),lightMapUv:Ut&&M(S.lightMap.channel),bumpMapUv:Rt&&M(S.bumpMap.channel),normalMapUv:_t&&M(S.normalMap.channel),displacementMapUv:re&&M(S.displacementMap.channel),emissiveMapUv:gt&&M(S.emissiveMap.channel),metalnessMapUv:Ft&&M(S.metalnessMap.channel),roughnessMapUv:pe&&M(S.roughnessMap.channel),anisotropyMapUv:V&&M(S.anisotropyMap.channel),clearcoatMapUv:St&&M(S.clearcoatMap.channel),clearcoatNormalMapUv:nt&&M(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&M(S.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&M(S.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&M(S.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&M(S.sheenColorMap.channel),sheenRoughnessMapUv:wt&&M(S.sheenRoughnessMap.channel),specularMapUv:Mt&&M(S.specularMap.channel),specularColorMapUv:ot&&M(S.specularColorMap.channel),specularIntensityMapUv:It&&M(S.specularIntensityMap.channel),transmissionMapUv:w&&M(S.transmissionMap.channel),thicknessMapUv:et&&M(S.thicknessMap.channel),alphaMapUv:dt&&M(S.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(_t||ce),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!W.attributes.uv&&(Vt||dt),fog:!!K,useFog:S.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ft,skinning:G.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:Bt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Dt,decodeVideoTexture:Vt&&S.map.isVideoTexture===!0&&Wt.getTransfer(S.map.colorSpace)===Kt,decodeVideoTextureEmissive:gt&&S.emissiveMap.isVideoTexture===!0&&Wt.getTransfer(S.emissiveMap.colorSpace)===Kt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ln,flipSided:S.side===we,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:mt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(mt&&S.extensions.multiDraw===!0||Et)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Qt.vertexUv1s=l.has(1),Qt.vertexUv2s=l.has(2),Qt.vertexUv3s=l.has(3),l.clear(),Qt}function h(S){const x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(const C in S.defines)x.push(C),x.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(A(x,S),T(x,S),x.push(i.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function A(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function T(S,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),x.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reversedDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),S.push(o.mask)}function y(S){const x=v[S.type];let C;if(x){const z=Ke[x];C=Pc.clone(z.uniforms)}else C=S.uniforms;return C}function D(S,x){let C;for(let z=0,G=u.length;z<G;z++){const K=u[z];if(K.cacheKey===x){C=K,++C.usedTimes;break}}return C===void 0&&(C=new op(i,x,S,s),u.push(C)),C}function P(S){if(--S.usedTimes===0){const x=u.indexOf(S);u[x]=u[u.length-1],u.pop(),S.destroy()}}function R(S){c.remove(S)}function F(){c.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:y,acquireProgram:D,releaseProgram:P,releaseShaderCache:R,programs:u,dispose:F}}function dp(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function fp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function vo(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function xo(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(d,f,m,v,M,p){let h=i[t];return h===void 0?(h={id:d.id,object:d,geometry:f,material:m,groupOrder:v,renderOrder:d.renderOrder,z:M,group:p},i[t]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=m,h.groupOrder=v,h.renderOrder=d.renderOrder,h.z=M,h.group=p),t++,h}function o(d,f,m,v,M,p){const h=a(d,f,m,v,M,p);m.transmission>0?n.push(h):m.transparent===!0?r.push(h):e.push(h)}function c(d,f,m,v,M,p){const h=a(d,f,m,v,M,p);m.transmission>0?n.unshift(h):m.transparent===!0?r.unshift(h):e.unshift(h)}function l(d,f){e.length>1&&e.sort(d||fp),n.length>1&&n.sort(f||vo),r.length>1&&r.sort(f||vo)}function u(){for(let d=t,f=i.length;d<f;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function pp(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new xo,i.set(n,[a])):r>=s.length?(a=new xo,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function mp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Gt};break;case"SpotLight":e={position:new I,direction:new I,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function _p(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let gp=0;function vp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function xp(i){const t=new mp,e=_p(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const r=new I,s=new te,a=new te;function o(l){let u=0,d=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let m=0,v=0,M=0,p=0,h=0,A=0,T=0,y=0,D=0,P=0,R=0;l.sort(vp);for(let S=0,x=l.length;S<x;S++){const C=l[S],z=C.color,G=C.intensity,K=C.distance,W=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=z.r*G,d+=z.g*G,f+=z.b*G;else if(C.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(C.sh.coefficients[Y],G);R++}else if(C.isDirectionalLight){const Y=t.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const j=C.shadow,H=e.get(C);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,n.directionalShadow[m]=H,n.directionalShadowMap[m]=W,n.directionalShadowMatrix[m]=C.shadow.matrix,A++}n.directional[m]=Y,m++}else if(C.isSpotLight){const Y=t.get(C);Y.position.setFromMatrixPosition(C.matrixWorld),Y.color.copy(z).multiplyScalar(G),Y.distance=K,Y.coneCos=Math.cos(C.angle),Y.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),Y.decay=C.decay,n.spot[M]=Y;const j=C.shadow;if(C.map&&(n.spotLightMap[D]=C.map,D++,j.updateMatrices(C),C.castShadow&&P++),n.spotLightMatrix[M]=j.matrix,C.castShadow){const H=e.get(C);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,n.spotShadow[M]=H,n.spotShadowMap[M]=W,y++}M++}else if(C.isRectAreaLight){const Y=t.get(C);Y.color.copy(z).multiplyScalar(G),Y.halfWidth.set(C.width*.5,0,0),Y.halfHeight.set(0,C.height*.5,0),n.rectArea[p]=Y,p++}else if(C.isPointLight){const Y=t.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),Y.distance=C.distance,Y.decay=C.decay,C.castShadow){const j=C.shadow,H=e.get(C);H.shadowIntensity=j.intensity,H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,H.shadowCameraNear=j.camera.near,H.shadowCameraFar=j.camera.far,n.pointShadow[v]=H,n.pointShadowMap[v]=W,n.pointShadowMatrix[v]=C.shadow.matrix,T++}n.point[v]=Y,v++}else if(C.isHemisphereLight){const Y=t.get(C);Y.skyColor.copy(C.color).multiplyScalar(G),Y.groundColor.copy(C.groundColor).multiplyScalar(G),n.hemi[h]=Y,h++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=st.LTC_FLOAT_1,n.rectAreaLTC2=st.LTC_FLOAT_2):(n.rectAreaLTC1=st.LTC_HALF_1,n.rectAreaLTC2=st.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;const F=n.hash;(F.directionalLength!==m||F.pointLength!==v||F.spotLength!==M||F.rectAreaLength!==p||F.hemiLength!==h||F.numDirectionalShadows!==A||F.numPointShadows!==T||F.numSpotShadows!==y||F.numSpotMaps!==D||F.numLightProbes!==R)&&(n.directional.length=m,n.spot.length=M,n.rectArea.length=p,n.point.length=v,n.hemi.length=h,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=y+D-P,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=R,F.directionalLength=m,F.pointLength=v,F.spotLength=M,F.rectAreaLength=p,F.hemiLength=h,F.numDirectionalShadows=A,F.numPointShadows=T,F.numSpotShadows=y,F.numSpotMaps=D,F.numLightProbes=R,n.version=gp++)}function c(l,u){let d=0,f=0,m=0,v=0,M=0;const p=u.matrixWorldInverse;for(let h=0,A=l.length;h<A;h++){const T=l[h];if(T.isDirectionalLight){const y=n.directional[d];y.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),d++}else if(T.isSpotLight){const y=n.spot[m];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(p),m++}else if(T.isRectAreaLight){const y=n.rectArea[v];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(p),a.identity(),s.copy(T.matrixWorld),s.premultiply(p),a.extractRotation(s),y.halfWidth.set(T.width*.5,0,0),y.halfHeight.set(0,T.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),v++}else if(T.isPointLight){const y=n.point[f];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(p),f++}else if(T.isHemisphereLight){const y=n.hemi[M];y.direction.setFromMatrixPosition(T.matrixWorld),y.direction.transformDirection(p),M++}}}return{setup:o,setupView:c,state:n}}function Mo(i){const t=new xp(i),e=[],n=[];function r(u){l.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function c(u){t.setupView(e,u)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function Mp(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Mo(i),t.set(r,[o])):s>=a.length?(o=new Mo(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const Sp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ep=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function yp(i,t,e){let n=new oa;const r=new Lt,s=new Lt,a=new jt,o=new Wc({depthPacking:Ql}),c=new Xc,l={},u=e.maxTextureSize,d={[En]:we,[we]:En,[ln]:ln},f=new Tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:Sp,fragmentShader:Ep}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const v=new kn;v.setAttribute("position",new Xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Ie(v,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ao;let h=this.type;this.render=function(P,R,F){if(window.__galleryCaptureScene)return;if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||P.length===0)return;const S=i.getRenderTarget(),x=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Mn),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const G=h!==on&&this.type===on,K=h===on&&this.type!==on;for(let W=0,Y=P.length;W<Y;W++){const j=P[W],H=j.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const at=H.getFrameExtents();if(r.multiply(at),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/at.x),r.x=s.x*at.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/at.y),r.y=s.y*at.y,H.mapSize.y=s.y)),H.map===null||G===!0||K===!0){const yt=this.type!==on?{minFilter:Ne,magFilter:Ne}:{};H.map!==null&&H.map.dispose(),H.map=new Hn(r.x,r.y,yt),H.map.texture.name=j.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const ht=H.getViewportCount();for(let yt=0;yt<ht;yt++){const Bt=H.getViewport(yt);a.set(s.x*Bt.x,s.y*Bt.y,s.x*Bt.z,s.y*Bt.w),z.viewport(a),H.updateMatrices(j,yt),n=H.getFrustum(),y(R,F,H.camera,j,this.type)}H.isPointLightShadow!==!0&&this.type===on&&A(H,F),H.needsUpdate=!1}h=this.type,p.needsUpdate=!1,i.setRenderTarget(S,x,C)};function A(P,R){const F=t.update(M);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,m.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Hn(r.x,r.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(R,null,F,f,M,null),m.uniforms.shadow_pass.value=P.mapPass.texture,m.uniforms.resolution.value=P.mapSize,m.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(R,null,F,m,M,null)}function T(P,R,F,S){let x=null;const C=F.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(C!==void 0)x=C;else if(x=F.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const z=x.uuid,G=R.uuid;let K=l[z];K===void 0&&(K={},l[z]=K);let W=K[G];W===void 0&&(W=x.clone(),K[G]=W,R.addEventListener("dispose",D)),x=W}if(x.visible=R.visible,x.wireframe=R.wireframe,S===on?x.side=R.shadowSide!==null?R.shadowSide:R.side:x.side=R.shadowSide!==null?R.shadowSide:d[R.side],x.alphaMap=R.alphaMap,x.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,x.map=R.map,x.clipShadows=R.clipShadows,x.clippingPlanes=R.clippingPlanes,x.clipIntersection=R.clipIntersection,x.displacementMap=R.displacementMap,x.displacementScale=R.displacementScale,x.displacementBias=R.displacementBias,x.wireframeLinewidth=R.wireframeLinewidth,x.linewidth=R.linewidth,F.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const z=i.properties.get(x);z.light=F}return x}function y(P,R,F,S,x){if(P.visible===!1)return;if(P.layers.test(R.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&x===on)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,P.matrixWorld);const G=t.update(P),K=P.material;if(Array.isArray(K)){const W=G.groups;for(let Y=0,j=W.length;Y<j;Y++){const H=W[Y],at=K[H.materialIndex];if(at&&at.visible){const ht=T(P,at,S,x);P.onBeforeShadow(i,P,R,F,G,ht,H),i.renderBufferDirect(F,null,G,ht,P,H),P.onAfterShadow(i,P,R,F,G,ht,H)}}}else if(K.visible){const W=T(P,K,S,x);P.onBeforeShadow(i,P,R,F,G,W,null),i.renderBufferDirect(F,null,G,W,P,null),P.onAfterShadow(i,P,R,F,G,W,null)}}const z=P.children;for(let G=0,K=z.length;G<K;G++)y(z[G],R,F,S,x)}function D(P){P.target.removeEventListener("dispose",D);for(const F in l){const S=l[F],x=P.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}const Tp={[ls]:cs,[hs]:fs,[us]:ps,[ui]:ds,[cs]:ls,[fs]:hs,[ps]:us,[ds]:ui};function bp(i,t){function e(){let w=!1;const et=new jt;let it=null;const dt=new jt(0,0,0,0);return{setMask:function(J){it!==J&&!w&&(i.colorMask(J,J,J,J),it=J)},setLocked:function(J){w=J},setClear:function(J,q,mt,Dt,Qt){Qt===!0&&(J*=Dt,q*=Dt,mt*=Dt),et.set(J,q,mt,Dt),dt.equals(et)===!1&&(i.clearColor(J,q,mt,Dt),dt.copy(et))},reset:function(){w=!1,it=null,dt.set(-1,0,0,0)}}}function n(){let w=!1,et=!1,it=null,dt=null,J=null;return{setReversed:function(q){if(et!==q){const mt=t.get("EXT_clip_control");q?mt.clipControlEXT(mt.LOWER_LEFT_EXT,mt.ZERO_TO_ONE_EXT):mt.clipControlEXT(mt.LOWER_LEFT_EXT,mt.NEGATIVE_ONE_TO_ONE_EXT),et=q;const Dt=J;J=null,this.setClear(Dt)}},getReversed:function(){return et},setTest:function(q){q?$(i.DEPTH_TEST):ft(i.DEPTH_TEST)},setMask:function(q){it!==q&&!w&&(i.depthMask(q),it=q)},setFunc:function(q){if(et&&(q=Tp[q]),dt!==q){switch(q){case ls:i.depthFunc(i.NEVER);break;case cs:i.depthFunc(i.ALWAYS);break;case hs:i.depthFunc(i.LESS);break;case ui:i.depthFunc(i.LEQUAL);break;case us:i.depthFunc(i.EQUAL);break;case ds:i.depthFunc(i.GEQUAL);break;case fs:i.depthFunc(i.GREATER);break;case ps:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}dt=q}},setLocked:function(q){w=q},setClear:function(q){J!==q&&(et&&(q=1-q),i.clearDepth(q),J=q)},reset:function(){w=!1,it=null,dt=null,J=null,et=!1}}}function r(){let w=!1,et=null,it=null,dt=null,J=null,q=null,mt=null,Dt=null,Qt=null;return{setTest:function(Yt){w||(Yt?$(i.STENCIL_TEST):ft(i.STENCIL_TEST))},setMask:function(Yt){et!==Yt&&!w&&(i.stencilMask(Yt),et=Yt)},setFunc:function(Yt,tn,qe){(it!==Yt||dt!==tn||J!==qe)&&(i.stencilFunc(Yt,tn,qe),it=Yt,dt=tn,J=qe)},setOp:function(Yt,tn,qe){(q!==Yt||mt!==tn||Dt!==qe)&&(i.stencilOp(Yt,tn,qe),q=Yt,mt=tn,Dt=qe)},setLocked:function(Yt){w=Yt},setClear:function(Yt){Qt!==Yt&&(i.clearStencil(Yt),Qt=Yt)},reset:function(){w=!1,et=null,it=null,dt=null,J=null,q=null,mt=null,Dt=null,Qt=null}}}const s=new e,a=new n,o=new r,c=new WeakMap,l=new WeakMap;let u={},d={},f=new WeakMap,m=[],v=null,M=!1,p=null,h=null,A=null,T=null,y=null,D=null,P=null,R=new Gt(0,0,0),F=0,S=!1,x=null,C=null,z=null,G=null,K=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,j=0;const H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(H)[1]),Y=j>=1):H.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),Y=j>=2);let at=null,ht={};const yt=i.getParameter(i.SCISSOR_BOX),Bt=i.getParameter(i.VIEWPORT),Jt=new jt().fromArray(yt),ne=new jt().fromArray(Bt);function Xt(w,et,it,dt){const J=new Uint8Array(4),q=i.createTexture();i.bindTexture(w,q),i.texParameteri(w,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(w,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let mt=0;mt<it;mt++)w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY?i.texImage3D(et,0,i.RGBA,1,1,dt,0,i.RGBA,i.UNSIGNED_BYTE,J):i.texImage2D(et+mt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,J);return q}const X={};X[i.TEXTURE_2D]=Xt(i.TEXTURE_2D,i.TEXTURE_2D,1),X[i.TEXTURE_CUBE_MAP]=Xt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[i.TEXTURE_2D_ARRAY]=Xt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),X[i.TEXTURE_3D]=Xt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),$(i.DEPTH_TEST),a.setFunc(ui),Rt(!1),_t(xa),$(i.CULL_FACE),ie(Mn);function $(w){u[w]!==!0&&(i.enable(w),u[w]=!0)}function ft(w){u[w]!==!1&&(i.disable(w),u[w]=!1)}function Pt(w,et){return d[w]!==et?(i.bindFramebuffer(w,et),d[w]=et,w===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=et),w===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=et),!0):!1}function Et(w,et){let it=m,dt=!1;if(w){it=f.get(et),it===void 0&&(it=[],f.set(et,it));const J=w.textures;if(it.length!==J.length||it[0]!==i.COLOR_ATTACHMENT0){for(let q=0,mt=J.length;q<mt;q++)it[q]=i.COLOR_ATTACHMENT0+q;it.length=J.length,dt=!0}}else it[0]!==i.BACK&&(it[0]=i.BACK,dt=!0);dt&&i.drawBuffers(it)}function Vt(w){return v!==w?(i.useProgram(w),v=w,!0):!1}const ge={[In]:i.FUNC_ADD,[Al]:i.FUNC_SUBTRACT,[wl]:i.FUNC_REVERSE_SUBTRACT};ge[Rl]=i.MIN,ge[Cl]=i.MAX;const b={[Pl]:i.ZERO,[Dl]:i.ONE,[Ll]:i.SRC_COLOR,[as]:i.SRC_ALPHA,[Bl]:i.SRC_ALPHA_SATURATE,[Fl]:i.DST_COLOR,[Il]:i.DST_ALPHA,[Ul]:i.ONE_MINUS_SRC_COLOR,[os]:i.ONE_MINUS_SRC_ALPHA,[Ol]:i.ONE_MINUS_DST_COLOR,[Nl]:i.ONE_MINUS_DST_ALPHA,[zl]:i.CONSTANT_COLOR,[Hl]:i.ONE_MINUS_CONSTANT_COLOR,[Vl]:i.CONSTANT_ALPHA,[Gl]:i.ONE_MINUS_CONSTANT_ALPHA};function ie(w,et,it,dt,J,q,mt,Dt,Qt,Yt){if(w===Mn){M===!0&&(ft(i.BLEND),M=!1);return}if(M===!1&&($(i.BLEND),M=!0),w!==bl){if(w!==p||Yt!==S){if((h!==In||y!==In)&&(i.blendEquation(i.FUNC_ADD),h=In,y=In),Yt)switch(w){case ci:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ma:i.blendFunc(i.ONE,i.ONE);break;case Sa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ea:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}else switch(w){case ci:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ma:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Sa:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ea:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}A=null,T=null,D=null,P=null,R.set(0,0,0),F=0,p=w,S=Yt}return}J=J||et,q=q||it,mt=mt||dt,(et!==h||J!==y)&&(i.blendEquationSeparate(ge[et],ge[J]),h=et,y=J),(it!==A||dt!==T||q!==D||mt!==P)&&(i.blendFuncSeparate(b[it],b[dt],b[q],b[mt]),A=it,T=dt,D=q,P=mt),(Dt.equals(R)===!1||Qt!==F)&&(i.blendColor(Dt.r,Dt.g,Dt.b,Qt),R.copy(Dt),F=Qt),p=w,S=!1}function Ut(w,et){w.side===ln?ft(i.CULL_FACE):$(i.CULL_FACE);let it=w.side===we;et&&(it=!it),Rt(it),w.blending===ci&&w.transparent===!1?ie(Mn):ie(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),a.setFunc(w.depthFunc),a.setTest(w.depthTest),a.setMask(w.depthWrite),s.setMask(w.colorWrite);const dt=w.stencilWrite;o.setTest(dt),dt&&(o.setMask(w.stencilWriteMask),o.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),o.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),gt(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?$(i.SAMPLE_ALPHA_TO_COVERAGE):ft(i.SAMPLE_ALPHA_TO_COVERAGE)}function Rt(w){x!==w&&(w?i.frontFace(i.CW):i.frontFace(i.CCW),x=w)}function _t(w){w!==yl?($(i.CULL_FACE),w!==C&&(w===xa?i.cullFace(i.BACK):w===Tl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ft(i.CULL_FACE),C=w}function re(w){w!==z&&(Y&&i.lineWidth(w),z=w)}function gt(w,et,it){w?($(i.POLYGON_OFFSET_FILL),(G!==et||K!==it)&&(i.polygonOffset(et,it),G=et,K=it)):ft(i.POLYGON_OFFSET_FILL)}function Ft(w){w?$(i.SCISSOR_TEST):ft(i.SCISSOR_TEST)}function pe(w){w===void 0&&(w=i.TEXTURE0+W-1),at!==w&&(i.activeTexture(w),at=w)}function ce(w,et,it){it===void 0&&(at===null?it=i.TEXTURE0+W-1:it=at);let dt=ht[it];dt===void 0&&(dt={type:void 0,texture:void 0},ht[it]=dt),(dt.type!==w||dt.texture!==et)&&(at!==it&&(i.activeTexture(it),at=it),i.bindTexture(w,et||X[w]),dt.type=w,dt.texture=et)}function E(){const w=ht[at];w!==void 0&&w.type!==void 0&&(i.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function k(){try{i.texSubImage2D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Z(){try{i.texSubImage3D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function V(){try{i.compressedTexSubImage2D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function St(){try{i.compressedTexSubImage3D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function nt(){try{i.texStorage2D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function vt(){try{i.texStorage3D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function xt(){try{i.texImage2D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function tt(){try{i.texImage3D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ct(w){Jt.equals(w)===!1&&(i.scissor(w.x,w.y,w.z,w.w),Jt.copy(w))}function wt(w){ne.equals(w)===!1&&(i.viewport(w.x,w.y,w.z,w.w),ne.copy(w))}function Mt(w,et){let it=l.get(et);it===void 0&&(it=new WeakMap,l.set(et,it));let dt=it.get(w);dt===void 0&&(dt=i.getUniformBlockIndex(et,w.name),it.set(w,dt))}function ot(w,et){const dt=l.get(et).get(w);c.get(et)!==dt&&(i.uniformBlockBinding(et,dt,w.__bindingPointIndex),c.set(et,dt))}function It(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},at=null,ht={},d={},f=new WeakMap,m=[],v=null,M=!1,p=null,h=null,A=null,T=null,y=null,D=null,P=null,R=new Gt(0,0,0),F=0,S=!1,x=null,C=null,z=null,G=null,K=null,Jt.set(0,0,i.canvas.width,i.canvas.height),ne.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:$,disable:ft,bindFramebuffer:Pt,drawBuffers:Et,useProgram:Vt,setBlending:ie,setMaterial:Ut,setFlipSided:Rt,setCullFace:_t,setLineWidth:re,setPolygonOffset:gt,setScissorTest:Ft,activeTexture:pe,bindTexture:ce,unbindTexture:E,compressedTexImage2D:_,compressedTexImage3D:N,texImage2D:xt,texImage3D:tt,updateUBOMapping:Mt,uniformBlockBinding:ot,texStorage2D:nt,texStorage3D:vt,texSubImage2D:k,texSubImage3D:Z,compressedTexSubImage2D:V,compressedTexSubImage3D:St,scissor:ct,viewport:wt,reset:It}}function Ap(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Lt,u=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(E,_){return m?new OffscreenCanvas(E,_):Mr("canvas")}function M(E,_,N){let k=1;const Z=ce(E);if((Z.width>N||Z.height>N)&&(k=N/Math.max(Z.width,Z.height)),k<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const V=Math.floor(k*Z.width),St=Math.floor(k*Z.height);d===void 0&&(d=v(V,St));const nt=_?v(V,St):d;return nt.width=V,nt.height=St,nt.getContext("2d").drawImage(E,0,0,V,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+V+"x"+St+")."),nt}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),E;return E}function p(E){return E.generateMipmaps}function h(E){i.generateMipmap(E)}function A(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(E,_,N,k,Z=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let V=_;if(_===i.RED&&(N===i.FLOAT&&(V=i.R32F),N===i.HALF_FLOAT&&(V=i.R16F),N===i.UNSIGNED_BYTE&&(V=i.R8)),_===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(V=i.R8UI),N===i.UNSIGNED_SHORT&&(V=i.R16UI),N===i.UNSIGNED_INT&&(V=i.R32UI),N===i.BYTE&&(V=i.R8I),N===i.SHORT&&(V=i.R16I),N===i.INT&&(V=i.R32I)),_===i.RG&&(N===i.FLOAT&&(V=i.RG32F),N===i.HALF_FLOAT&&(V=i.RG16F),N===i.UNSIGNED_BYTE&&(V=i.RG8)),_===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(V=i.RG8UI),N===i.UNSIGNED_SHORT&&(V=i.RG16UI),N===i.UNSIGNED_INT&&(V=i.RG32UI),N===i.BYTE&&(V=i.RG8I),N===i.SHORT&&(V=i.RG16I),N===i.INT&&(V=i.RG32I)),_===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(V=i.RGB8UI),N===i.UNSIGNED_SHORT&&(V=i.RGB16UI),N===i.UNSIGNED_INT&&(V=i.RGB32UI),N===i.BYTE&&(V=i.RGB8I),N===i.SHORT&&(V=i.RGB16I),N===i.INT&&(V=i.RGB32I)),_===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(V=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(V=i.RGBA16UI),N===i.UNSIGNED_INT&&(V=i.RGBA32UI),N===i.BYTE&&(V=i.RGBA8I),N===i.SHORT&&(V=i.RGBA16I),N===i.INT&&(V=i.RGBA32I)),_===i.RGB&&(N===i.UNSIGNED_INT_5_9_9_9_REV&&(V=i.RGB9_E5),N===i.UNSIGNED_INT_10F_11F_11F_REV&&(V=i.R11F_G11F_B10F)),_===i.RGBA){const St=Z?vr:Wt.getTransfer(k);N===i.FLOAT&&(V=i.RGBA32F),N===i.HALF_FLOAT&&(V=i.RGBA16F),N===i.UNSIGNED_BYTE&&(V=St===Kt?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(V=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(V=i.RGB5_A1)}return(V===i.R16F||V===i.R32F||V===i.RG16F||V===i.RG32F||V===i.RGBA16F||V===i.RGBA32F)&&t.get("EXT_color_buffer_float"),V}function y(E,_){let N;return E?_===null||_===zn||_===Pi?N=i.DEPTH24_STENCIL8:_===je?N=i.DEPTH32F_STENCIL8:_===Ci&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===zn||_===Pi?N=i.DEPTH_COMPONENT24:_===je?N=i.DEPTH_COMPONENT32F:_===Ci&&(N=i.DEPTH_COMPONENT16),N}function D(E,_){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==Ne&&E.minFilter!==Ze?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function P(E){const _=E.target;_.removeEventListener("dispose",P),F(_),_.isVideoTexture&&u.delete(_)}function R(E){const _=E.target;_.removeEventListener("dispose",R),x(_)}function F(E){const _=n.get(E);if(_.__webglInit===void 0)return;const N=E.source,k=f.get(N);if(k){const Z=k[_.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&S(E),Object.keys(k).length===0&&f.delete(N)}n.remove(E)}function S(E){const _=n.get(E);i.deleteTexture(_.__webglTexture);const N=E.source,k=f.get(N);delete k[_.__cacheKey],a.memory.textures--}function x(E){const _=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(_.__webglFramebuffer[k]))for(let Z=0;Z<_.__webglFramebuffer[k].length;Z++)i.deleteFramebuffer(_.__webglFramebuffer[k][Z]);else i.deleteFramebuffer(_.__webglFramebuffer[k]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[k])}else{if(Array.isArray(_.__webglFramebuffer))for(let k=0;k<_.__webglFramebuffer.length;k++)i.deleteFramebuffer(_.__webglFramebuffer[k]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let k=0;k<_.__webglColorRenderbuffer.length;k++)_.__webglColorRenderbuffer[k]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[k]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const N=E.textures;for(let k=0,Z=N.length;k<Z;k++){const V=n.get(N[k]);V.__webglTexture&&(i.deleteTexture(V.__webglTexture),a.memory.textures--),n.remove(N[k])}n.remove(E)}let C=0;function z(){C=0}function G(){const E=C;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),C+=1,E}function K(E){const _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function W(E,_){const N=n.get(E);if(E.isVideoTexture&&Ft(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&N.__version!==E.version){const k=E.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(N,E,_);return}}else E.isExternalTexture&&(N.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+_)}function Y(E,_){const N=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){X(N,E,_);return}e.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+_)}function j(E,_){const N=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){X(N,E,_);return}e.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+_)}function H(E,_){const N=n.get(E);if(E.version>0&&N.__version!==E.version){$(N,E,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+_)}const at={[gs]:i.REPEAT,[Fn]:i.CLAMP_TO_EDGE,[vs]:i.MIRRORED_REPEAT},ht={[Ne]:i.NEAREST,[$l]:i.NEAREST_MIPMAP_NEAREST,[Gi]:i.NEAREST_MIPMAP_LINEAR,[Ze]:i.LINEAR,[wr]:i.LINEAR_MIPMAP_NEAREST,[On]:i.LINEAR_MIPMAP_LINEAR},yt={[ec]:i.NEVER,[oc]:i.ALWAYS,[nc]:i.LESS,[zo]:i.LEQUAL,[ic]:i.EQUAL,[ac]:i.GEQUAL,[rc]:i.GREATER,[sc]:i.NOTEQUAL};function Bt(E,_){if(_.type===je&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Ze||_.magFilter===wr||_.magFilter===Gi||_.magFilter===On||_.minFilter===Ze||_.minFilter===wr||_.minFilter===Gi||_.minFilter===On)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,at[_.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,at[_.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,at[_.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,ht[_.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,ht[_.minFilter]),_.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,yt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ne||_.minFilter!==Gi&&_.minFilter!==On||_.type===je&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const N=t.get("EXT_texture_filter_anisotropic");i.texParameterf(E,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Jt(E,_){let N=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",P));const k=_.source;let Z=f.get(k);Z===void 0&&(Z={},f.set(k,Z));const V=K(_);if(V!==E.__cacheKey){Z[V]===void 0&&(Z[V]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),Z[V].usedTimes++;const St=Z[E.__cacheKey];St!==void 0&&(Z[E.__cacheKey].usedTimes--,St.usedTimes===0&&S(_)),E.__cacheKey=V,E.__webglTexture=Z[V].texture}return N}function ne(E,_,N){return Math.floor(Math.floor(E/N)/_)}function Xt(E,_,N,k){const V=E.updateRanges;if(V.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,N,k,_.data);else{V.sort((tt,ct)=>tt.start-ct.start);let St=0;for(let tt=1;tt<V.length;tt++){const ct=V[St],wt=V[tt],Mt=ct.start+ct.count,ot=ne(wt.start,_.width,4),It=ne(ct.start,_.width,4);wt.start<=Mt+1&&ot===It&&ne(wt.start+wt.count-1,_.width,4)===ot?ct.count=Math.max(ct.count,wt.start+wt.count-ct.start):(++St,V[St]=wt)}V.length=St+1;const nt=i.getParameter(i.UNPACK_ROW_LENGTH),vt=i.getParameter(i.UNPACK_SKIP_PIXELS),xt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let tt=0,ct=V.length;tt<ct;tt++){const wt=V[tt],Mt=Math.floor(wt.start/4),ot=Math.ceil(wt.count/4),It=Mt%_.width,w=Math.floor(Mt/_.width),et=ot,it=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,It),i.pixelStorei(i.UNPACK_SKIP_ROWS,w),e.texSubImage2D(i.TEXTURE_2D,0,It,w,et,it,N,k,_.data)}E.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,nt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,vt),i.pixelStorei(i.UNPACK_SKIP_ROWS,xt)}}function X(E,_,N){let k=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(k=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(k=i.TEXTURE_3D);const Z=Jt(E,_),V=_.source;e.bindTexture(k,E.__webglTexture,i.TEXTURE0+N);const St=n.get(V);if(V.version!==St.__version||Z===!0){e.activeTexture(i.TEXTURE0+N);const nt=Wt.getPrimaries(Wt.workingColorSpace),vt=_.colorSpace===xn?null:Wt.getPrimaries(_.colorSpace),xt=_.colorSpace===xn||nt===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let tt=M(_.image,!1,r.maxTextureSize);tt=pe(_,tt);const ct=s.convert(_.format,_.colorSpace),wt=s.convert(_.type);let Mt=T(_.internalFormat,ct,wt,_.colorSpace,_.isVideoTexture);Bt(k,_);let ot;const It=_.mipmaps,w=_.isVideoTexture!==!0,et=St.__version===void 0||Z===!0,it=V.dataReady,dt=D(_,tt);if(_.isDepthTexture)Mt=y(_.format===Li,_.type),et&&(w?e.texStorage2D(i.TEXTURE_2D,1,Mt,tt.width,tt.height):e.texImage2D(i.TEXTURE_2D,0,Mt,tt.width,tt.height,0,ct,wt,null));else if(_.isDataTexture)if(It.length>0){w&&et&&e.texStorage2D(i.TEXTURE_2D,dt,Mt,It[0].width,It[0].height);for(let J=0,q=It.length;J<q;J++)ot=It[J],w?it&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,ot.width,ot.height,ct,wt,ot.data):e.texImage2D(i.TEXTURE_2D,J,Mt,ot.width,ot.height,0,ct,wt,ot.data);_.generateMipmaps=!1}else w?(et&&e.texStorage2D(i.TEXTURE_2D,dt,Mt,tt.width,tt.height),it&&Xt(_,tt,ct,wt)):e.texImage2D(i.TEXTURE_2D,0,Mt,tt.width,tt.height,0,ct,wt,tt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){w&&et&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,Mt,It[0].width,It[0].height,tt.depth);for(let J=0,q=It.length;J<q;J++)if(ot=It[J],_.format!==We)if(ct!==null)if(w){if(it)if(_.layerUpdates.size>0){const mt=Za(ot.width,ot.height,_.format,_.type);for(const Dt of _.layerUpdates){const Qt=ot.data.subarray(Dt*mt/ot.data.BYTES_PER_ELEMENT,(Dt+1)*mt/ot.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,Dt,ot.width,ot.height,1,ct,Qt)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,ot.width,ot.height,tt.depth,ct,ot.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,Mt,ot.width,ot.height,tt.depth,0,ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else w?it&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,ot.width,ot.height,tt.depth,ct,wt,ot.data):e.texImage3D(i.TEXTURE_2D_ARRAY,J,Mt,ot.width,ot.height,tt.depth,0,ct,wt,ot.data)}else{w&&et&&e.texStorage2D(i.TEXTURE_2D,dt,Mt,It[0].width,It[0].height);for(let J=0,q=It.length;J<q;J++)ot=It[J],_.format!==We?ct!==null?w?it&&e.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,ot.width,ot.height,ct,ot.data):e.compressedTexImage2D(i.TEXTURE_2D,J,Mt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):w?it&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,ot.width,ot.height,ct,wt,ot.data):e.texImage2D(i.TEXTURE_2D,J,Mt,ot.width,ot.height,0,ct,wt,ot.data)}else if(_.isDataArrayTexture)if(w){if(et&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,Mt,tt.width,tt.height,tt.depth),it)if(_.layerUpdates.size>0){const J=Za(tt.width,tt.height,_.format,_.type);for(const q of _.layerUpdates){const mt=tt.data.subarray(q*J/tt.data.BYTES_PER_ELEMENT,(q+1)*J/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,q,tt.width,tt.height,1,ct,wt,mt)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,ct,wt,tt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Mt,tt.width,tt.height,tt.depth,0,ct,wt,tt.data);else if(_.isData3DTexture)w?(et&&e.texStorage3D(i.TEXTURE_3D,dt,Mt,tt.width,tt.height,tt.depth),it&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,ct,wt,tt.data)):e.texImage3D(i.TEXTURE_3D,0,Mt,tt.width,tt.height,tt.depth,0,ct,wt,tt.data);else if(_.isFramebufferTexture){if(et)if(w)e.texStorage2D(i.TEXTURE_2D,dt,Mt,tt.width,tt.height);else{let J=tt.width,q=tt.height;for(let mt=0;mt<dt;mt++)e.texImage2D(i.TEXTURE_2D,mt,Mt,J,q,0,ct,wt,null),J>>=1,q>>=1}}else if(It.length>0){if(w&&et){const J=ce(It[0]);e.texStorage2D(i.TEXTURE_2D,dt,Mt,J.width,J.height)}for(let J=0,q=It.length;J<q;J++)ot=It[J],w?it&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,ct,wt,ot):e.texImage2D(i.TEXTURE_2D,J,Mt,ct,wt,ot);_.generateMipmaps=!1}else if(w){if(et){const J=ce(tt);e.texStorage2D(i.TEXTURE_2D,dt,Mt,J.width,J.height)}it&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct,wt,tt)}else e.texImage2D(i.TEXTURE_2D,0,Mt,ct,wt,tt);p(_)&&h(k),St.__version=V.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function $(E,_,N){if(_.image.length!==6)return;const k=Jt(E,_),Z=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+N);const V=n.get(Z);if(Z.version!==V.__version||k===!0){e.activeTexture(i.TEXTURE0+N);const St=Wt.getPrimaries(Wt.workingColorSpace),nt=_.colorSpace===xn?null:Wt.getPrimaries(_.colorSpace),vt=_.colorSpace===xn||St===nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const xt=_.isCompressedTexture||_.image[0].isCompressedTexture,tt=_.image[0]&&_.image[0].isDataTexture,ct=[];for(let q=0;q<6;q++)!xt&&!tt?ct[q]=M(_.image[q],!0,r.maxCubemapSize):ct[q]=tt?_.image[q].image:_.image[q],ct[q]=pe(_,ct[q]);const wt=ct[0],Mt=s.convert(_.format,_.colorSpace),ot=s.convert(_.type),It=T(_.internalFormat,Mt,ot,_.colorSpace),w=_.isVideoTexture!==!0,et=V.__version===void 0||k===!0,it=Z.dataReady;let dt=D(_,wt);Bt(i.TEXTURE_CUBE_MAP,_);let J;if(xt){w&&et&&e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,It,wt.width,wt.height);for(let q=0;q<6;q++){J=ct[q].mipmaps;for(let mt=0;mt<J.length;mt++){const Dt=J[mt];_.format!==We?Mt!==null?w?it&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,mt,0,0,Dt.width,Dt.height,Mt,Dt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,mt,It,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):w?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,mt,0,0,Dt.width,Dt.height,Mt,ot,Dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,mt,It,Dt.width,Dt.height,0,Mt,ot,Dt.data)}}}else{if(J=_.mipmaps,w&&et){J.length>0&&dt++;const q=ce(ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,It,q.width,q.height)}for(let q=0;q<6;q++)if(tt){w?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,ct[q].width,ct[q].height,Mt,ot,ct[q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,It,ct[q].width,ct[q].height,0,Mt,ot,ct[q].data);for(let mt=0;mt<J.length;mt++){const Qt=J[mt].image[q].image;w?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,mt+1,0,0,Qt.width,Qt.height,Mt,ot,Qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,mt+1,It,Qt.width,Qt.height,0,Mt,ot,Qt.data)}}else{w?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Mt,ot,ct[q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,It,Mt,ot,ct[q]);for(let mt=0;mt<J.length;mt++){const Dt=J[mt];w?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,mt+1,0,0,Mt,ot,Dt.image[q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+q,mt+1,It,Mt,ot,Dt.image[q])}}}p(_)&&h(i.TEXTURE_CUBE_MAP),V.__version=Z.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function ft(E,_,N,k,Z,V){const St=s.convert(N.format,N.colorSpace),nt=s.convert(N.type),vt=T(N.internalFormat,St,nt,N.colorSpace),xt=n.get(_),tt=n.get(N);if(tt.__renderTarget=_,!xt.__hasExternalTextures){const ct=Math.max(1,_.width>>V),wt=Math.max(1,_.height>>V);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,V,vt,ct,wt,_.depth,0,St,nt,null):e.texImage2D(Z,V,vt,ct,wt,0,St,nt,null)}e.bindFramebuffer(i.FRAMEBUFFER,E),gt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,k,Z,tt.__webglTexture,0,re(_)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,k,Z,tt.__webglTexture,V),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Pt(E,_,N){if(i.bindRenderbuffer(i.RENDERBUFFER,E),_.depthBuffer){const k=_.depthTexture,Z=k&&k.isDepthTexture?k.type:null,V=y(_.stencilBuffer,Z),St=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=re(_);gt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt,V,_.width,_.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,V,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,V,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,St,i.RENDERBUFFER,E)}else{const k=_.textures;for(let Z=0;Z<k.length;Z++){const V=k[Z],St=s.convert(V.format,V.colorSpace),nt=s.convert(V.type),vt=T(V.internalFormat,St,nt,V.colorSpace),xt=re(_);N&&gt(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,xt,vt,_.width,_.height):gt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xt,vt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,vt,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Et(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const k=n.get(_.depthTexture);k.__renderTarget=_,(!k.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),W(_.depthTexture,0);const Z=k.__webglTexture,V=re(_);if(_.depthTexture.format===Di)gt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(_.depthTexture.format===Li)gt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Vt(E){const _=n.get(E),N=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){const k=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),k){const Z=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,k.removeEventListener("dispose",Z)};k.addEventListener("dispose",Z),_.__depthDisposeCallback=Z}_.__boundDepthTexture=k}if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");const k=E.texture.mipmaps;k&&k.length>0?Et(_.__webglFramebuffer[0],E):Et(_.__webglFramebuffer,E)}else if(N){_.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[k]),_.__webglDepthbuffer[k]===void 0)_.__webglDepthbuffer[k]=i.createRenderbuffer(),Pt(_.__webglDepthbuffer[k],E,!1);else{const Z=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=_.__webglDepthbuffer[k];i.bindRenderbuffer(i.RENDERBUFFER,V),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,V)}}else{const k=E.texture.mipmaps;if(k&&k.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Pt(_.__webglDepthbuffer,E,!1);else{const Z=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,V),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,V)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ge(E,_,N){const k=n.get(E);_!==void 0&&ft(k.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Vt(E)}function b(E){const _=E.texture,N=n.get(E),k=n.get(_);E.addEventListener("dispose",R);const Z=E.textures,V=E.isWebGLCubeRenderTarget===!0,St=Z.length>1;if(St||(k.__webglTexture===void 0&&(k.__webglTexture=i.createTexture()),k.__version=_.version,a.memory.textures++),V){N.__webglFramebuffer=[];for(let nt=0;nt<6;nt++)if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer[nt]=[];for(let vt=0;vt<_.mipmaps.length;vt++)N.__webglFramebuffer[nt][vt]=i.createFramebuffer()}else N.__webglFramebuffer[nt]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer=[];for(let nt=0;nt<_.mipmaps.length;nt++)N.__webglFramebuffer[nt]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(St)for(let nt=0,vt=Z.length;nt<vt;nt++){const xt=n.get(Z[nt]);xt.__webglTexture===void 0&&(xt.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&gt(E)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let nt=0;nt<Z.length;nt++){const vt=Z[nt];N.__webglColorRenderbuffer[nt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[nt]);const xt=s.convert(vt.format,vt.colorSpace),tt=s.convert(vt.type),ct=T(vt.internalFormat,xt,tt,vt.colorSpace,E.isXRRenderTarget===!0),wt=re(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,wt,ct,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.RENDERBUFFER,N.__webglColorRenderbuffer[nt])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),Pt(N.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(V){e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture),Bt(i.TEXTURE_CUBE_MAP,_);for(let nt=0;nt<6;nt++)if(_.mipmaps&&_.mipmaps.length>0)for(let vt=0;vt<_.mipmaps.length;vt++)ft(N.__webglFramebuffer[nt][vt],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt);else ft(N.__webglFramebuffer[nt],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0);p(_)&&h(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let nt=0,vt=Z.length;nt<vt;nt++){const xt=Z[nt],tt=n.get(xt);let ct=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ct=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,tt.__webglTexture),Bt(ct,xt),ft(N.__webglFramebuffer,E,xt,i.COLOR_ATTACHMENT0+nt,ct,0),p(xt)&&h(ct)}e.unbindTexture()}else{let nt=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(nt=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(nt,k.__webglTexture),Bt(nt,_),_.mipmaps&&_.mipmaps.length>0)for(let vt=0;vt<_.mipmaps.length;vt++)ft(N.__webglFramebuffer[vt],E,_,i.COLOR_ATTACHMENT0,nt,vt);else ft(N.__webglFramebuffer,E,_,i.COLOR_ATTACHMENT0,nt,0);p(_)&&h(nt),e.unbindTexture()}E.depthBuffer&&Vt(E)}function ie(E){const _=E.textures;for(let N=0,k=_.length;N<k;N++){const Z=_[N];if(p(Z)){const V=A(E),St=n.get(Z).__webglTexture;e.bindTexture(V,St),h(V),e.unbindTexture()}}}const Ut=[],Rt=[];function _t(E){if(E.samples>0){if(gt(E)===!1){const _=E.textures,N=E.width,k=E.height;let Z=i.COLOR_BUFFER_BIT;const V=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=n.get(E),nt=_.length>1;if(nt)for(let xt=0;xt<_.length;xt++)e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer);const vt=E.texture.mipmaps;vt&&vt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let xt=0;xt<_.length;xt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),nt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,St.__webglColorRenderbuffer[xt]);const tt=n.get(_[xt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,tt,0)}i.blitFramebuffer(0,0,N,k,0,0,N,k,Z,i.NEAREST),c===!0&&(Ut.length=0,Rt.length=0,Ut.push(i.COLOR_ATTACHMENT0+xt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Ut.push(V),Rt.push(V),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Rt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ut))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),nt)for(let xt=0;xt<_.length;xt++){e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,St.__webglColorRenderbuffer[xt]);const tt=n.get(_[xt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,tt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){const _=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function re(E){return Math.min(r.maxSamples,E.samples)}function gt(E){const _=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ft(E){const _=a.render.frame;u.get(E)!==_&&(u.set(E,_),E.update())}function pe(E,_){const N=E.colorSpace,k=E.format,Z=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||N!==pi&&N!==xn&&(Wt.getTransfer(N)===Kt?(k!==We||Z!==Je)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),_}function ce(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=G,this.resetTextureUnits=z,this.setTexture2D=W,this.setTexture2DArray=Y,this.setTexture3D=j,this.setTextureCube=H,this.rebindTextures=ge,this.setupRenderTarget=b,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=gt}function wp(i,t){function e(n,r=xn){let s;const a=Wt.getTransfer(r);if(n===Je)return i.UNSIGNED_BYTE;if(n===Js)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Qs)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Uo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Io)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Do)return i.BYTE;if(n===Lo)return i.SHORT;if(n===Ci)return i.UNSIGNED_SHORT;if(n===$s)return i.INT;if(n===zn)return i.UNSIGNED_INT;if(n===je)return i.FLOAT;if(n===Fi)return i.HALF_FLOAT;if(n===No)return i.ALPHA;if(n===Fo)return i.RGB;if(n===We)return i.RGBA;if(n===Di)return i.DEPTH_COMPONENT;if(n===Li)return i.DEPTH_STENCIL;if(n===ta)return i.RED;if(n===ea)return i.RED_INTEGER;if(n===Oo)return i.RG;if(n===na)return i.RG_INTEGER;if(n===ia)return i.RGBA_INTEGER;if(n===dr||n===fr||n===pr||n===mr)if(a===Kt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===dr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===pr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===mr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===dr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===pr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===mr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xs||n===Ms||n===Ss||n===Es)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===xs)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ms)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ss)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Es)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ys||n===Ts||n===bs)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ys||n===Ts)return a===Kt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===bs)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===As||n===ws||n===Rs||n===Cs||n===Ps||n===Ds||n===Ls||n===Us||n===Is||n===Ns||n===Fs||n===Os||n===Bs||n===zs)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===As)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ws)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Rs)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Cs)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ps)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ds)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ls)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Us)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Is)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ns)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fs)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Os)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Bs)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===zs)return a===Kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Hs||n===Vs||n===Gs)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Hs)return a===Kt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vs)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Gs)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ks||n===Ws||n===Xs||n===Ys)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===ks)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ws)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xs)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ys)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Pi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Rp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cp=`
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

}`;class Pp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new $o(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Tn({vertexShader:Rp,fragmentShader:Cp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ie(new gi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Dp extends Vn{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,d=null,f=null,m=null,v=null;const M=typeof XRWebGLBinding<"u",p=new Pp,h={},A=e.getContextAttributes();let T=null,y=null;const D=[],P=[],R=new Lt;let F=null;const S=new Ue;S.viewport=new jt;const x=new Ue;x.viewport=new jt;const C=[S,x],z=new jc;let G=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let $=D[X];return $===void 0&&($=new Zr,D[X]=$),$.getTargetRaySpace()},this.getControllerGrip=function(X){let $=D[X];return $===void 0&&($=new Zr,D[X]=$),$.getGripSpace()},this.getHand=function(X){let $=D[X];return $===void 0&&($=new Zr,D[X]=$),$.getHandSpace()};function W(X){const $=P.indexOf(X.inputSource);if($===-1)return;const ft=D[$];ft!==void 0&&(ft.update(X.inputSource,X.frame,l||a),ft.dispatchEvent({type:X.type,data:X.inputSource}))}function Y(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",j);for(let X=0;X<D.length;X++){const $=P[X];$!==null&&(P[X]=null,D[X].disconnect($))}G=null,K=null,p.reset();for(const X in h)delete h[X];t.setRenderTarget(T),m=null,f=null,d=null,r=null,y=null,Xt.stop(),n.isPresenting=!1,t.setPixelRatio(F),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(r,e)),d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(T=t.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",j),A.xrCompatible!==!0&&await e.makeXRCompatible(),F=t.getPixelRatio(),t.getSize(R),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let ft=null,Pt=null,Et=null;A.depth&&(Et=A.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ft=A.stencil?Li:Di,Pt=A.stencil?Pi:zn);const Vt={colorFormat:e.RGBA8,depthFormat:Et,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(Vt),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new Hn(f.textureWidth,f.textureHeight,{format:We,type:Je,depthTexture:new jo(f.textureWidth,f.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:A.stencil,colorSpace:t.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ft={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,ft),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new Hn(m.framebufferWidth,m.framebufferHeight,{format:We,type:Je,colorSpace:t.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Xt.setContext(r),Xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function j(X){for(let $=0;$<X.removed.length;$++){const ft=X.removed[$],Pt=P.indexOf(ft);Pt>=0&&(P[Pt]=null,D[Pt].disconnect(ft))}for(let $=0;$<X.added.length;$++){const ft=X.added[$];let Pt=P.indexOf(ft);if(Pt===-1){for(let Vt=0;Vt<D.length;Vt++)if(Vt>=P.length){P.push(ft),Pt=Vt;break}else if(P[Vt]===null){P[Vt]=ft,Pt=Vt;break}if(Pt===-1)break}const Et=D[Pt];Et&&Et.connect(ft)}}const H=new I,at=new I;function ht(X,$,ft){H.setFromMatrixPosition($.matrixWorld),at.setFromMatrixPosition(ft.matrixWorld);const Pt=H.distanceTo(at),Et=$.projectionMatrix.elements,Vt=ft.projectionMatrix.elements,ge=Et[14]/(Et[10]-1),b=Et[14]/(Et[10]+1),ie=(Et[9]+1)/Et[5],Ut=(Et[9]-1)/Et[5],Rt=(Et[8]-1)/Et[0],_t=(Vt[8]+1)/Vt[0],re=ge*Rt,gt=ge*_t,Ft=Pt/(-Rt+_t),pe=Ft*-Rt;if($.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(pe),X.translateZ(Ft),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Et[10]===-1)X.projectionMatrix.copy($.projectionMatrix),X.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const ce=ge+Ft,E=b+Ft,_=re-pe,N=gt+(Pt-pe),k=ie*b/E*ce,Z=Ut*b/E*ce;X.projectionMatrix.makePerspective(_,N,k,Z,ce,E),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function yt(X,$){$===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices($.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let $=X.near,ft=X.far;p.texture!==null&&(p.depthNear>0&&($=p.depthNear),p.depthFar>0&&(ft=p.depthFar)),z.near=x.near=S.near=$,z.far=x.far=S.far=ft,(G!==z.near||K!==z.far)&&(r.updateRenderState({depthNear:z.near,depthFar:z.far}),G=z.near,K=z.far),z.layers.mask=X.layers.mask|6,S.layers.mask=z.layers.mask&3,x.layers.mask=z.layers.mask&5;const Pt=X.parent,Et=z.cameras;yt(z,Pt);for(let Vt=0;Vt<Et.length;Vt++)yt(Et[Vt],Pt);Et.length===2?ht(z,S,x):z.projectionMatrix.copy(S.projectionMatrix),Bt(X,z,Pt)};function Bt(X,$,ft){ft===null?X.matrix.copy($.matrixWorld):(X.matrix.copy(ft.matrixWorld),X.matrix.invert(),X.matrix.multiply($.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy($.projectionMatrix),X.projectionMatrixInverse.copy($.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Ks*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(X){c=X,f!==null&&(f.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(z)},this.getCameraTexture=function(X){return h[X]};let Jt=null;function ne(X,$){if(u=$.getViewerPose(l||a),v=$,u!==null){const ft=u.views;m!==null&&(t.setRenderTargetFramebuffer(y,m.framebuffer),t.setRenderTarget(y));let Pt=!1;ft.length!==z.cameras.length&&(z.cameras.length=0,Pt=!0);for(let b=0;b<ft.length;b++){const ie=ft[b];let Ut=null;if(m!==null)Ut=m.getViewport(ie);else{const _t=d.getViewSubImage(f,ie);Ut=_t.viewport,b===0&&(t.setRenderTargetTextures(y,_t.colorTexture,_t.depthStencilTexture),t.setRenderTarget(y))}let Rt=C[b];Rt===void 0&&(Rt=new Ue,Rt.layers.enable(b),Rt.viewport=new jt,C[b]=Rt),Rt.matrix.fromArray(ie.transform.matrix),Rt.matrix.decompose(Rt.position,Rt.quaternion,Rt.scale),Rt.projectionMatrix.fromArray(ie.projectionMatrix),Rt.projectionMatrixInverse.copy(Rt.projectionMatrix).invert(),Rt.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),b===0&&(z.matrix.copy(Rt.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Pt===!0&&z.cameras.push(Rt)}const Et=r.enabledFeatures;if(Et&&Et.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){d=n.getBinding();const b=d.getDepthInformation(ft[0]);b&&b.isValid&&b.texture&&p.init(b,r.renderState)}if(Et&&Et.includes("camera-access")&&M){t.state.unbindTexture(),d=n.getBinding();for(let b=0;b<ft.length;b++){const ie=ft[b].camera;if(ie){let Ut=h[ie];Ut||(Ut=new $o,h[ie]=Ut);const Rt=d.getCameraImage(ie);Ut.sourceTexture=Rt}}}}for(let ft=0;ft<D.length;ft++){const Pt=P[ft],Et=D[ft];Pt!==null&&Et!==void 0&&Et.update(Pt,$,l||a)}Jt&&Jt(X,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),v=null}const Xt=new el;Xt.setAnimationLoop(ne),this.setAnimationLoop=function(X){Jt=X},this.dispose=function(){}}}const Ln=new Qe,Lp=new te;function Up(i,t){function e(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function n(p,h){h.color.getRGB(p.fogColor.value,qo(i)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,A,T,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),d(p,h)):h.isMeshPhongMaterial?(s(p,h),u(p,h)):h.isMeshStandardMaterial?(s(p,h),f(p,h),h.isMeshPhysicalMaterial&&m(p,h,y)):h.isMeshMatcapMaterial?(s(p,h),v(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),M(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(a(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?c(p,h,A,T):h.isSpriteMaterial?l(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,e(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,e(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===we&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,e(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===we&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,e(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,e(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const A=t.get(h),T=A.envMap,y=A.envMapRotation;T&&(p.envMap.value=T,Ln.copy(y),Ln.x*=-1,Ln.y*=-1,Ln.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Ln.y*=-1,Ln.z*=-1),p.envMapRotation.value.setFromMatrix4(Lp.makeRotationFromEuler(Ln)),p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,p.aoMapTransform))}function a(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,e(h.map,p.mapTransform))}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function c(p,h,A,T){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*A,p.scale.value=T*.5,h.map&&(p.map.value=h.map,e(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function l(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,e(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function d(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,A){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===we&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=A.texture,p.transmissionSamplerSize.value.set(A.width,A.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,h){h.matcap&&(p.matcap.value=h.matcap)}function M(p,h){const A=t.get(h).light;p.referencePosition.value.setFromMatrixPosition(A.matrixWorld),p.nearDistance.value=A.shadow.camera.near,p.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Ip(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(A,T){const y=T.program;n.uniformBlockBinding(A,y)}function l(A,T){let y=r[A.id];y===void 0&&(v(A),y=u(A),r[A.id]=y,A.addEventListener("dispose",p));const D=T.program;n.updateUBOMapping(A,D);const P=t.render.frame;s[A.id]!==P&&(f(A),s[A.id]=P)}function u(A){const T=d();A.__bindingPointIndex=T;const y=i.createBuffer(),D=A.__size,P=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,D,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,y),y}function d(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){const T=r[A.id],y=A.uniforms,D=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let P=0,R=y.length;P<R;P++){const F=Array.isArray(y[P])?y[P]:[y[P]];for(let S=0,x=F.length;S<x;S++){const C=F[S];if(m(C,P,S,D)===!0){const z=C.__offset,G=Array.isArray(C.value)?C.value:[C.value];let K=0;for(let W=0;W<G.length;W++){const Y=G[W],j=M(Y);typeof Y=="number"||typeof Y=="boolean"?(C.__data[0]=Y,i.bufferSubData(i.UNIFORM_BUFFER,z+K,C.__data)):Y.isMatrix3?(C.__data[0]=Y.elements[0],C.__data[1]=Y.elements[1],C.__data[2]=Y.elements[2],C.__data[3]=0,C.__data[4]=Y.elements[3],C.__data[5]=Y.elements[4],C.__data[6]=Y.elements[5],C.__data[7]=0,C.__data[8]=Y.elements[6],C.__data[9]=Y.elements[7],C.__data[10]=Y.elements[8],C.__data[11]=0):(Y.toArray(C.__data,K),K+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(A,T,y,D){const P=A.value,R=T+"_"+y;if(D[R]===void 0)return typeof P=="number"||typeof P=="boolean"?D[R]=P:D[R]=P.clone(),!0;{const F=D[R];if(typeof P=="number"||typeof P=="boolean"){if(F!==P)return D[R]=P,!0}else if(F.equals(P)===!1)return F.copy(P),!0}return!1}function v(A){const T=A.uniforms;let y=0;const D=16;for(let R=0,F=T.length;R<F;R++){const S=Array.isArray(T[R])?T[R]:[T[R]];for(let x=0,C=S.length;x<C;x++){const z=S[x],G=Array.isArray(z.value)?z.value:[z.value];for(let K=0,W=G.length;K<W;K++){const Y=G[K],j=M(Y),H=y%D,at=H%j.boundary,ht=H+at;y+=at,ht!==0&&D-ht<j.storage&&(y+=D-ht),z.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=j.storage}}}const P=y%D;return P>0&&(y+=D-P),A.__size=y,A.__cache={},this}function M(A){const T={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(T.boundary=4,T.storage=4):A.isVector2?(T.boundary=8,T.storage=8):A.isVector3||A.isColor?(T.boundary=16,T.storage=12):A.isVector4?(T.boundary=16,T.storage=16):A.isMatrix3?(T.boundary=48,T.storage=48):A.isMatrix4?(T.boundary=64,T.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),T}function p(A){const T=A.target;T.removeEventListener("dispose",p);const y=a.indexOf(T.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function h(){for(const A in r)i.deleteBuffer(r[A]);a=[],r={},s={}}return{bind:c,update:l,dispose:h}}class Np{constructor(t={}){const{canvas:e=hc(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const v=new Uint32Array(4),M=new Int32Array(4);let p=null,h=null;const A=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Sn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let D=!1;this._outputColorSpace=Ae;let P=0,R=0,F=null,S=-1,x=null;const C=new jt,z=new jt;let G=null;const K=new Gt(0);let W=0,Y=e.width,j=e.height,H=1,at=null,ht=null;const yt=new jt(0,0,Y,j),Bt=new jt(0,0,Y,j);let Jt=!1;const ne=new oa;let Xt=!1,X=!1;const $=new te,ft=new I,Pt=new jt,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Vt=!1;function ge(){return F===null?H:1}let b=n;function ie(g,L){return e.getContext(g,L)}try{const g={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${js}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",dt,!1),e.addEventListener("webglcontextcreationerror",J,!1),b===null){const L="webgl2";if(b=ie(L,g),b===null)throw ie(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(g){throw console.error("THREE.WebGLRenderer: "+g.message),g}let Ut,Rt,_t,re,gt,Ft,pe,ce,E,_,N,k,Z,V,St,nt,vt,xt,tt,ct,wt,Mt,ot,It;function w(){Ut=new Wd(b),Ut.init(),Mt=new wp(b,Ut),Rt=new Od(b,Ut,t,Mt),_t=new bp(b,Ut),Rt.reversedDepthBuffer&&f&&_t.buffers.depth.setReversed(!0),re=new qd(b),gt=new dp,Ft=new Ap(b,Ut,_t,gt,Rt,Mt,re),pe=new zd(y),ce=new kd(y),E=new Qc(b),ot=new Nd(b,E),_=new Xd(b,E,re,ot),N=new Zd(b,_,E,re),tt=new Kd(b,Rt,Ft),nt=new Bd(gt),k=new up(y,pe,ce,Ut,Rt,ot,nt),Z=new Up(y,gt),V=new pp,St=new Mp(Ut),xt=new Id(y,pe,ce,_t,N,m,c),vt=new yp(y,N,Rt),It=new Ip(b,re,Rt,_t),ct=new Fd(b,Ut,re),wt=new Yd(b,Ut,re),re.programs=k.programs,y.capabilities=Rt,y.extensions=Ut,y.properties=gt,y.renderLists=V,y.shadowMap=vt,y.state=_t,y.info=re}w();const et=new Dp(y,b);this.xr=et,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const g=Ut.get("WEBGL_lose_context");g&&g.loseContext()},this.forceContextRestore=function(){const g=Ut.get("WEBGL_lose_context");g&&g.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(g){g!==void 0&&(H=g,this.setSize(Y,j,!1))},this.getSize=function(g){return g.set(Y,j)},this.setSize=function(g,L,O=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=g,j=L,e.width=Math.floor(g*H),e.height=Math.floor(L*H),O===!0&&(e.style.width=g+"px",e.style.height=L+"px"),this.setViewport(0,0,g,L)},this.getDrawingBufferSize=function(g){return g.set(Y*H,j*H).floor()},this.setDrawingBufferSize=function(g,L,O){Y=g,j=L,H=O,e.width=Math.floor(g*O),e.height=Math.floor(L*O),this.setViewport(0,0,g,L)},this.getCurrentViewport=function(g){return g.copy(C)},this.getViewport=function(g){return g.copy(yt)},this.setViewport=function(g,L,O,B){g.isVector4?yt.set(g.x,g.y,g.z,g.w):yt.set(g,L,O,B),_t.viewport(C.copy(yt).multiplyScalar(H).round())},this.getScissor=function(g){return g.copy(Bt)},this.setScissor=function(g,L,O,B){g.isVector4?Bt.set(g.x,g.y,g.z,g.w):Bt.set(g,L,O,B),_t.scissor(z.copy(Bt).multiplyScalar(H).round())},this.getScissorTest=function(){return Jt},this.setScissorTest=function(g){_t.setScissorTest(Jt=g)},this.setOpaqueSort=function(g){at=g},this.setTransparentSort=function(g){ht=g},this.getClearColor=function(g){return g.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor(...arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha(...arguments)},this.clear=function(g=!0,L=!0,O=!0){let B=0;if(g){let U=!1;if(F!==null){const Q=F.texture.format;U=Q===ia||Q===na||Q===ea}if(U){const Q=F.texture.type,lt=Q===Je||Q===zn||Q===Ci||Q===Pi||Q===Js||Q===Qs,pt=xt.getClearColor(),ut=xt.getClearAlpha(),At=pt.r,Ct=pt.g,Tt=pt.b;lt?(v[0]=At,v[1]=Ct,v[2]=Tt,v[3]=ut,b.clearBufferuiv(b.COLOR,0,v)):(M[0]=At,M[1]=Ct,M[2]=Tt,M[3]=ut,b.clearBufferiv(b.COLOR,0,M))}else B|=b.COLOR_BUFFER_BIT}L&&(B|=b.DEPTH_BUFFER_BIT),O&&(B|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",dt,!1),e.removeEventListener("webglcontextcreationerror",J,!1),xt.dispose(),V.dispose(),St.dispose(),gt.dispose(),pe.dispose(),ce.dispose(),N.dispose(),ot.dispose(),It.dispose(),k.dispose(),et.dispose(),et.removeEventListener("sessionstart",qe),et.removeEventListener("sessionend",fa),bn.stop()};function it(g){g.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const g=re.autoReset,L=vt.enabled,O=vt.autoUpdate,B=vt.needsUpdate,U=vt.type;w(),re.autoReset=g,vt.enabled=L,vt.autoUpdate=O,vt.needsUpdate=B,vt.type=U}function J(g){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",g.statusMessage)}function q(g){const L=g.target;L.removeEventListener("dispose",q),mt(L)}function mt(g){Dt(g),gt.remove(g)}function Dt(g){const L=gt.get(g).programs;L!==void 0&&(L.forEach(function(O){k.releaseProgram(O)}),g.isShaderMaterial&&k.releaseShaderCache(g))}this.renderBufferDirect=function(g,L,O,B,U,Q){L===null&&(L=Et);const lt=U.isMesh&&U.matrixWorld.determinant()<0,pt=gl(g,L,O,B,U);_t.setMaterial(B,lt);let ut=O.index,At=1;if(B.wireframe===!0){if(ut=_.getWireframeAttribute(O),ut===void 0)return;At=2}const Ct=O.drawRange,Tt=O.attributes.position;let Ht=Ct.start*At,qt=(Ct.start+Ct.count)*At;Q!==null&&(Ht=Math.max(Ht,Q.start*At),qt=Math.min(qt,(Q.start+Q.count)*At)),ut!==null?(Ht=Math.max(Ht,0),qt=Math.min(qt,ut.count)):Tt!=null&&(Ht=Math.max(Ht,0),qt=Math.min(qt,Tt.count));const le=qt-Ht;if(le<0||le===1/0)return;ot.setup(U,B,pt,O,ut);let ee,$t=ct;if(ut!==null&&(ee=E.get(ut),$t=wt,$t.setIndex(ee)),U.isMesh)B.wireframe===!0?(_t.setLineWidth(B.wireframeLinewidth*ge()),$t.setMode(b.LINES)):$t.setMode(b.TRIANGLES);else if(U.isLine){let bt=B.linewidth;bt===void 0&&(bt=1),_t.setLineWidth(bt*ge()),U.isLineSegments?$t.setMode(b.LINES):U.isLineLoop?$t.setMode(b.LINE_LOOP):$t.setMode(b.LINE_STRIP)}else U.isPoints?$t.setMode(b.POINTS):U.isSprite&&$t.setMode(b.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Ui("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),$t.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ut.get("WEBGL_multi_draw"))$t.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const bt=U._multiDrawStarts,ae=U._multiDrawCounts,kt=U._multiDrawCount,Ce=ut?E.get(ut).bytesPerElement:1,Wn=gt.get(B).currentProgram.getUniforms();for(let Pe=0;Pe<kt;Pe++)Wn.setValue(b,"_gl_DrawID",Pe),$t.render(bt[Pe]/Ce,ae[Pe])}else if(U.isInstancedMesh)$t.renderInstances(Ht,le,U.count);else if(O.isInstancedBufferGeometry){const bt=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,ae=Math.min(O.instanceCount,bt);$t.renderInstances(Ht,le,ae)}else $t.render(Ht,le)};function Qt(g,L,O){g.transparent===!0&&g.side===ln&&g.forceSinglePass===!1?(g.side=we,g.needsUpdate=!0,Vi(g,L,O),g.side=En,g.needsUpdate=!0,Vi(g,L,O),g.side=ln):Vi(g,L,O)}this.compile=function(g,L,O=null){O===null&&(O=g),h=St.get(O),h.init(L),T.push(h),O.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(h.pushLight(U),U.castShadow&&h.pushShadow(U))}),g!==O&&g.traverseVisible(function(U){U.isLight&&U.layers.test(L.layers)&&(h.pushLight(U),U.castShadow&&h.pushShadow(U))}),h.setupLights();const B=new Set;return g.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const Q=U.material;if(Q)if(Array.isArray(Q))for(let lt=0;lt<Q.length;lt++){const pt=Q[lt];Qt(pt,O,U),B.add(pt)}else Qt(Q,O,U),B.add(Q)}),h=T.pop(),B},this.compileAsync=function(g,L,O=null){const B=this.compile(g,L,O);return new Promise(U=>{function Q(){if(B.forEach(function(lt){gt.get(lt).currentProgram.isReady()&&B.delete(lt)}),B.size===0){U(g);return}setTimeout(Q,10)}Ut.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Yt=null;function tn(g){Yt&&Yt(g)}function qe(){bn.stop()}function fa(){bn.start()}const bn=new el;bn.setAnimationLoop(tn),typeof self<"u"&&bn.setContext(self),this.setAnimationLoop=function(g){Yt=g,et.setAnimationLoop(g),g===null?bn.stop():bn.start()},et.addEventListener("sessionstart",qe),et.addEventListener("sessionend",fa),this.render=function(g,L){if(window.__galleryCaptureScene)return;if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(L),L=et.getCamera()),g.isScene===!0&&g.onBeforeRender(y,g,L,F),h=St.get(g,T.length),h.init(L),T.push(h),$.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),ne.setFromProjectionMatrix($,$e,L.reversedDepth),X=this.localClippingEnabled,Xt=nt.init(this.clippingPlanes,X),p=V.get(g,A.length),p.init(),A.push(p),et.enabled===!0&&et.isPresenting===!0){const Q=y.xr.getDepthSensingMesh();Q!==null&&br(Q,L,-1/0,y.sortObjects)}br(g,L,0,y.sortObjects),p.finish(),y.sortObjects===!0&&p.sort(at,ht),Vt=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,Vt&&xt.addToRenderList(p,g),this.info.render.frame++,Xt===!0&&nt.beginShadows();const O=h.state.shadowsArray;vt.render(O,g,L),Xt===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=p.opaque,U=p.transmissive;if(h.setupLights(),L.isArrayCamera){const Q=L.cameras;if(U.length>0)for(let lt=0,pt=Q.length;lt<pt;lt++){const ut=Q[lt];ma(B,U,g,ut)}Vt&&xt.render(g);for(let lt=0,pt=Q.length;lt<pt;lt++){const ut=Q[lt];pa(p,g,ut,ut.viewport)}}else U.length>0&&ma(B,U,g,L),Vt&&xt.render(g),pa(p,g,L);F!==null&&R===0&&(Ft.updateMultisampleRenderTarget(F),Ft.updateRenderTargetMipmap(F)),g.isScene===!0&&g.onAfterRender(y,g,L),ot.resetDefaultState(),S=-1,x=null,T.pop(),T.length>0?(h=T[T.length-1],Xt===!0&&nt.setGlobalState(y.clippingPlanes,h.state.camera)):h=null,A.pop(),A.length>0?p=A[A.length-1]:p=null};function br(g,L,O,B){if(g.visible===!1)return;if(g.layers.test(L.layers)){if(g.isGroup)O=g.renderOrder;else if(g.isLOD)g.autoUpdate===!0&&g.update(L);else if(g.isLight)h.pushLight(g),g.castShadow&&h.pushShadow(g);else if(g.isSprite){if(!g.frustumCulled||ne.intersectsSprite(g)){B&&Pt.setFromMatrixPosition(g.matrixWorld).applyMatrix4($);const lt=N.update(g),pt=g.material;pt.visible&&p.push(g,lt,pt,O,Pt.z,null)}}else if((g.isMesh||g.isLine||g.isPoints)&&(!g.frustumCulled||ne.intersectsObject(g))){const lt=N.update(g),pt=g.material;if(B&&(g.boundingSphere!==void 0?(g.boundingSphere===null&&g.computeBoundingSphere(),Pt.copy(g.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Pt.copy(lt.boundingSphere.center)),Pt.applyMatrix4(g.matrixWorld).applyMatrix4($)),Array.isArray(pt)){const ut=lt.groups;for(let At=0,Ct=ut.length;At<Ct;At++){const Tt=ut[At],Ht=pt[Tt.materialIndex];Ht&&Ht.visible&&p.push(g,lt,Ht,O,Pt.z,Tt)}}else pt.visible&&p.push(g,lt,pt,O,Pt.z,null)}}const Q=g.children;for(let lt=0,pt=Q.length;lt<pt;lt++)br(Q[lt],L,O,B)}function pa(g,L,O,B){const U=g.opaque,Q=g.transmissive,lt=g.transparent;h.setupLightsView(O),Xt===!0&&nt.setGlobalState(y.clippingPlanes,O),B&&_t.viewport(C.copy(B)),U.length>0&&Hi(U,L,O),Q.length>0&&Hi(Q,L,O),lt.length>0&&Hi(lt,L,O),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function ma(g,L,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[B.id]===void 0&&(h.state.transmissionRenderTarget[B.id]=new Hn(1,1,{generateMipmaps:!0,type:Ut.has("EXT_color_buffer_half_float")||Ut.has("EXT_color_buffer_float")?Fi:Je,minFilter:On,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Wt.workingColorSpace}));const Q=h.state.transmissionRenderTarget[B.id],lt=B.viewport||C;Q.setSize(lt.z*y.transmissionResolutionScale,lt.w*y.transmissionResolutionScale);const pt=y.getRenderTarget(),ut=y.getActiveCubeFace(),At=y.getActiveMipmapLevel();y.setRenderTarget(Q),y.getClearColor(K),W=y.getClearAlpha(),W<1&&y.setClearColor(16777215,.5),y.clear(),Vt&&xt.render(O);const Ct=y.toneMapping;y.toneMapping=Sn;const Tt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),h.setupLightsView(B),Xt===!0&&nt.setGlobalState(y.clippingPlanes,B),Hi(g,O,B),Ft.updateMultisampleRenderTarget(Q),Ft.updateRenderTargetMipmap(Q),Ut.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let qt=0,le=L.length;qt<le;qt++){const ee=L[qt],$t=ee.object,bt=ee.geometry,ae=ee.material,kt=ee.group;if(ae.side===ln&&$t.layers.test(B.layers)){const Ce=ae.side;ae.side=we,ae.needsUpdate=!0,_a($t,O,B,bt,ae,kt),ae.side=Ce,ae.needsUpdate=!0,Ht=!0}}Ht===!0&&(Ft.updateMultisampleRenderTarget(Q),Ft.updateRenderTargetMipmap(Q))}y.setRenderTarget(pt,ut,At),y.setClearColor(K,W),Tt!==void 0&&(B.viewport=Tt),y.toneMapping=Ct}function Hi(g,L,O){const B=L.isScene===!0?L.overrideMaterial:null;for(let U=0,Q=g.length;U<Q;U++){const lt=g[U],pt=lt.object,ut=lt.geometry,At=lt.group;let Ct=lt.material;Ct.allowOverride===!0&&B!==null&&(Ct=B),pt.layers.test(O.layers)&&_a(pt,L,O,ut,Ct,At)}}function _a(g,L,O,B,U,Q){g.onBeforeRender(y,L,O,B,U,Q),g.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,g.matrixWorld),g.normalMatrix.getNormalMatrix(g.modelViewMatrix),U.onBeforeRender(y,L,O,B,g,Q),U.transparent===!0&&U.side===ln&&U.forceSinglePass===!1?(U.side=we,U.needsUpdate=!0,y.renderBufferDirect(O,L,B,U,g,Q),U.side=En,U.needsUpdate=!0,y.renderBufferDirect(O,L,B,U,g,Q),U.side=ln):y.renderBufferDirect(O,L,B,U,g,Q),g.onAfterRender(y,L,O,B,U,Q)}function Vi(g,L,O){L.isScene!==!0&&(L=Et);const B=gt.get(g),U=h.state.lights,Q=h.state.shadowsArray,lt=U.state.version,pt=k.getParameters(g,U.state,Q,L,O),ut=k.getProgramCacheKey(pt);let At=B.programs;B.environment=g.isMeshStandardMaterial?L.environment:null,B.fog=L.fog,B.envMap=(g.isMeshStandardMaterial?ce:pe).get(g.envMap||B.environment),B.envMapRotation=B.environment!==null&&g.envMap===null?L.environmentRotation:g.envMapRotation,At===void 0&&(g.addEventListener("dispose",q),At=new Map,B.programs=At);let Ct=At.get(ut);if(Ct!==void 0){if(B.currentProgram===Ct&&B.lightsStateVersion===lt)return va(g,pt),Ct}else pt.uniforms=k.getUniforms(g),g.onBeforeCompile(pt,y),Ct=k.acquireProgram(pt,ut),At.set(ut,Ct),B.uniforms=pt.uniforms;const Tt=B.uniforms;return(!g.isShaderMaterial&&!g.isRawShaderMaterial||g.clipping===!0)&&(Tt.clippingPlanes=nt.uniform),va(g,pt),B.needsLights=xl(g),B.lightsStateVersion=lt,B.needsLights&&(Tt.ambientLightColor.value=U.state.ambient,Tt.lightProbe.value=U.state.probe,Tt.directionalLights.value=U.state.directional,Tt.directionalLightShadows.value=U.state.directionalShadow,Tt.spotLights.value=U.state.spot,Tt.spotLightShadows.value=U.state.spotShadow,Tt.rectAreaLights.value=U.state.rectArea,Tt.ltc_1.value=U.state.rectAreaLTC1,Tt.ltc_2.value=U.state.rectAreaLTC2,Tt.pointLights.value=U.state.point,Tt.pointLightShadows.value=U.state.pointShadow,Tt.hemisphereLights.value=U.state.hemi,Tt.directionalShadowMap.value=U.state.directionalShadowMap,Tt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Tt.spotShadowMap.value=U.state.spotShadowMap,Tt.spotLightMatrix.value=U.state.spotLightMatrix,Tt.spotLightMap.value=U.state.spotLightMap,Tt.pointShadowMap.value=U.state.pointShadowMap,Tt.pointShadowMatrix.value=U.state.pointShadowMatrix),B.currentProgram=Ct,B.uniformsList=null,Ct}function ga(g){if(g.uniformsList===null){const L=g.currentProgram.getUniforms();g.uniformsList=gr.seqWithValue(L.seq,g.uniforms)}return g.uniformsList}function va(g,L){const O=gt.get(g);O.outputColorSpace=L.outputColorSpace,O.batching=L.batching,O.batchingColor=L.batchingColor,O.instancing=L.instancing,O.instancingColor=L.instancingColor,O.instancingMorph=L.instancingMorph,O.skinning=L.skinning,O.morphTargets=L.morphTargets,O.morphNormals=L.morphNormals,O.morphColors=L.morphColors,O.morphTargetsCount=L.morphTargetsCount,O.numClippingPlanes=L.numClippingPlanes,O.numIntersection=L.numClipIntersection,O.vertexAlphas=L.vertexAlphas,O.vertexTangents=L.vertexTangents,O.toneMapping=L.toneMapping}function gl(g,L,O,B,U){L.isScene!==!0&&(L=Et),Ft.resetTextureUnits();const Q=L.fog,lt=B.isMeshStandardMaterial?L.environment:null,pt=F===null?y.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:pi,ut=(B.isMeshStandardMaterial?ce:pe).get(B.envMap||lt),At=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Ct=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Tt=!!O.morphAttributes.position,Ht=!!O.morphAttributes.normal,qt=!!O.morphAttributes.color;let le=Sn;B.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(le=y.toneMapping);const ee=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,$t=ee!==void 0?ee.length:0,bt=gt.get(B),ae=h.state.lights;if(Xt===!0&&(X===!0||g!==x)){const Se=g===x&&B.id===S;nt.setState(B,g,Se)}let kt=!1;B.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==ae.state.version||bt.outputColorSpace!==pt||U.isBatchedMesh&&bt.batching===!1||!U.isBatchedMesh&&bt.batching===!0||U.isBatchedMesh&&bt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&bt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&bt.instancing===!1||!U.isInstancedMesh&&bt.instancing===!0||U.isSkinnedMesh&&bt.skinning===!1||!U.isSkinnedMesh&&bt.skinning===!0||U.isInstancedMesh&&bt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&bt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&bt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&bt.instancingMorph===!1&&U.morphTexture!==null||bt.envMap!==ut||B.fog===!0&&bt.fog!==Q||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==nt.numPlanes||bt.numIntersection!==nt.numIntersection)||bt.vertexAlphas!==At||bt.vertexTangents!==Ct||bt.morphTargets!==Tt||bt.morphNormals!==Ht||bt.morphColors!==qt||bt.toneMapping!==le||bt.morphTargetsCount!==$t)&&(kt=!0):(kt=!0,bt.__version=B.version);let Ce=bt.currentProgram;kt===!0&&(Ce=Vi(B,L,U));let Wn=!1,Pe=!1,xi=!1;const oe=Ce.getUniforms(),Oe=bt.uniforms;if(_t.useProgram(Ce.program)&&(Wn=!0,Pe=!0,xi=!0),B.id!==S&&(S=B.id,Pe=!0),Wn||x!==g){_t.buffers.depth.getReversed()&&g.reversedDepth!==!0&&(g._reversedDepth=!0,g.updateProjectionMatrix()),oe.setValue(b,"projectionMatrix",g.projectionMatrix),oe.setValue(b,"viewMatrix",g.matrixWorldInverse);const ye=oe.map.cameraPosition;ye!==void 0&&ye.setValue(b,ft.setFromMatrixPosition(g.matrixWorld)),Rt.logarithmicDepthBuffer&&oe.setValue(b,"logDepthBufFC",2/(Math.log(g.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&oe.setValue(b,"isOrthographic",g.isOrthographicCamera===!0),x!==g&&(x=g,Pe=!0,xi=!0)}if(U.isSkinnedMesh){oe.setOptional(b,U,"bindMatrix"),oe.setOptional(b,U,"bindMatrixInverse");const Se=U.skeleton;Se&&(Se.boneTexture===null&&Se.computeBoneTexture(),oe.setValue(b,"boneTexture",Se.boneTexture,Ft))}U.isBatchedMesh&&(oe.setOptional(b,U,"batchingTexture"),oe.setValue(b,"batchingTexture",U._matricesTexture,Ft),oe.setOptional(b,U,"batchingIdTexture"),oe.setValue(b,"batchingIdTexture",U._indirectTexture,Ft),oe.setOptional(b,U,"batchingColorTexture"),U._colorsTexture!==null&&oe.setValue(b,"batchingColorTexture",U._colorsTexture,Ft));const Be=O.morphAttributes;if((Be.position!==void 0||Be.normal!==void 0||Be.color!==void 0)&&tt.update(U,O,Ce),(Pe||bt.receiveShadow!==U.receiveShadow)&&(bt.receiveShadow=U.receiveShadow,oe.setValue(b,"receiveShadow",U.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Oe.envMap.value=ut,Oe.flipEnvMap.value=ut.isCubeTexture&&ut.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&L.environment!==null&&(Oe.envMapIntensity.value=L.environmentIntensity),Pe&&(oe.setValue(b,"toneMappingExposure",y.toneMappingExposure),bt.needsLights&&vl(Oe,xi),Q&&B.fog===!0&&Z.refreshFogUniforms(Oe,Q),Z.refreshMaterialUniforms(Oe,B,H,j,h.state.transmissionRenderTarget[g.id]),gr.upload(b,ga(bt),Oe,Ft)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(gr.upload(b,ga(bt),Oe,Ft),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&oe.setValue(b,"center",U.center),oe.setValue(b,"modelViewMatrix",U.modelViewMatrix),oe.setValue(b,"normalMatrix",U.normalMatrix),oe.setValue(b,"modelMatrix",U.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Se=B.uniformsGroups;for(let ye=0,Ar=Se.length;ye<Ar;ye++){const An=Se[ye];It.update(An,Ce),It.bind(An,Ce)}}return Ce}function vl(g,L){g.ambientLightColor.needsUpdate=L,g.lightProbe.needsUpdate=L,g.directionalLights.needsUpdate=L,g.directionalLightShadows.needsUpdate=L,g.pointLights.needsUpdate=L,g.pointLightShadows.needsUpdate=L,g.spotLights.needsUpdate=L,g.spotLightShadows.needsUpdate=L,g.rectAreaLights.needsUpdate=L,g.hemisphereLights.needsUpdate=L}function xl(g){return g.isMeshLambertMaterial||g.isMeshToonMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isShadowMaterial||g.isShaderMaterial&&g.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(g,L,O){const B=gt.get(g);B.__autoAllocateDepthBuffer=g.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),gt.get(g.texture).__webglTexture=L,gt.get(g.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:O,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(g,L){const O=gt.get(g);O.__webglFramebuffer=L,O.__useDefaultFramebuffer=L===void 0};const Ml=b.createFramebuffer();this.setRenderTarget=function(g,L=0,O=0){F=g,P=L,R=O;let B=!0,U=null,Q=!1,lt=!1;if(g){const ut=gt.get(g);if(ut.__useDefaultFramebuffer!==void 0)_t.bindFramebuffer(b.FRAMEBUFFER,null),B=!1;else if(ut.__webglFramebuffer===void 0)Ft.setupRenderTarget(g);else if(ut.__hasExternalTextures)Ft.rebindTextures(g,gt.get(g.texture).__webglTexture,gt.get(g.depthTexture).__webglTexture);else if(g.depthBuffer){const Tt=g.depthTexture;if(ut.__boundDepthTexture!==Tt){if(Tt!==null&&gt.has(Tt)&&(g.width!==Tt.image.width||g.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ft.setupDepthRenderbuffer(g)}}const At=g.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(lt=!0);const Ct=gt.get(g).__webglFramebuffer;g.isWebGLCubeRenderTarget?(Array.isArray(Ct[L])?U=Ct[L][O]:U=Ct[L],Q=!0):g.samples>0&&Ft.useMultisampledRTT(g)===!1?U=gt.get(g).__webglMultisampledFramebuffer:Array.isArray(Ct)?U=Ct[O]:U=Ct,C.copy(g.viewport),z.copy(g.scissor),G=g.scissorTest}else C.copy(yt).multiplyScalar(H).floor(),z.copy(Bt).multiplyScalar(H).floor(),G=Jt;if(O!==0&&(U=Ml),_t.bindFramebuffer(b.FRAMEBUFFER,U)&&B&&_t.drawBuffers(g,U),_t.viewport(C),_t.scissor(z),_t.setScissorTest(G),Q){const ut=gt.get(g.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+L,ut.__webglTexture,O)}else if(lt){const ut=L;for(let At=0;At<g.textures.length;At++){const Ct=gt.get(g.textures[At]);b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0+At,Ct.__webglTexture,O,ut)}}else if(g!==null&&O!==0){const ut=gt.get(g.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,ut.__webglTexture,O)}S=-1},this.readRenderTargetPixels=function(g,L,O,B,U,Q,lt,pt=0){if(!(g&&g.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ut=gt.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&lt!==void 0&&(ut=ut[lt]),ut){_t.bindFramebuffer(b.FRAMEBUFFER,ut);try{const At=g.textures[pt],Ct=At.format,Tt=At.type;if(!Rt.textureFormatReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Rt.textureTypeReadable(Tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=g.width-B&&O>=0&&O<=g.height-U&&(g.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+pt),b.readPixels(L,O,B,U,Mt.convert(Ct),Mt.convert(Tt),Q))}finally{const At=F!==null?gt.get(F).__webglFramebuffer:null;_t.bindFramebuffer(b.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(g,L,O,B,U,Q,lt,pt=0){if(!(g&&g.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ut=gt.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&lt!==void 0&&(ut=ut[lt]),ut)if(L>=0&&L<=g.width-B&&O>=0&&O<=g.height-U){_t.bindFramebuffer(b.FRAMEBUFFER,ut);const At=g.textures[pt],Ct=At.format,Tt=At.type;if(!Rt.textureFormatReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Rt.textureTypeReadable(Tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ht=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,Ht),b.bufferData(b.PIXEL_PACK_BUFFER,Q.byteLength,b.STREAM_READ),g.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+pt),b.readPixels(L,O,B,U,Mt.convert(Ct),Mt.convert(Tt),0);const qt=F!==null?gt.get(F).__webglFramebuffer:null;_t.bindFramebuffer(b.FRAMEBUFFER,qt);const le=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await uc(b,le,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,Ht),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,Q),b.deleteBuffer(Ht),b.deleteSync(le),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(g,L=null,O=0){const B=Math.pow(2,-O),U=Math.floor(g.image.width*B),Q=Math.floor(g.image.height*B),lt=L!==null?L.x:0,pt=L!==null?L.y:0;Ft.setTexture2D(g,0),b.copyTexSubImage2D(b.TEXTURE_2D,O,0,0,lt,pt,U,Q),_t.unbindTexture()};const Sl=b.createFramebuffer(),El=b.createFramebuffer();this.copyTextureToTexture=function(g,L,O=null,B=null,U=0,Q=null){Q===null&&(U!==0?(Ui("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=U,U=0):Q=0);let lt,pt,ut,At,Ct,Tt,Ht,qt,le;const ee=g.isCompressedTexture?g.mipmaps[Q]:g.image;if(O!==null)lt=O.max.x-O.min.x,pt=O.max.y-O.min.y,ut=O.isBox3?O.max.z-O.min.z:1,At=O.min.x,Ct=O.min.y,Tt=O.isBox3?O.min.z:0;else{const Be=Math.pow(2,-U);lt=Math.floor(ee.width*Be),pt=Math.floor(ee.height*Be),g.isDataArrayTexture?ut=ee.depth:g.isData3DTexture?ut=Math.floor(ee.depth*Be):ut=1,At=0,Ct=0,Tt=0}B!==null?(Ht=B.x,qt=B.y,le=B.z):(Ht=0,qt=0,le=0);const $t=Mt.convert(L.format),bt=Mt.convert(L.type);let ae;L.isData3DTexture?(Ft.setTexture3D(L,0),ae=b.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(Ft.setTexture2DArray(L,0),ae=b.TEXTURE_2D_ARRAY):(Ft.setTexture2D(L,0),ae=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,L.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,L.unpackAlignment);const kt=b.getParameter(b.UNPACK_ROW_LENGTH),Ce=b.getParameter(b.UNPACK_IMAGE_HEIGHT),Wn=b.getParameter(b.UNPACK_SKIP_PIXELS),Pe=b.getParameter(b.UNPACK_SKIP_ROWS),xi=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,ee.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,ee.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,At),b.pixelStorei(b.UNPACK_SKIP_ROWS,Ct),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Tt);const oe=g.isDataArrayTexture||g.isData3DTexture,Oe=L.isDataArrayTexture||L.isData3DTexture;if(g.isDepthTexture){const Be=gt.get(g),Se=gt.get(L),ye=gt.get(Be.__renderTarget),Ar=gt.get(Se.__renderTarget);_t.bindFramebuffer(b.READ_FRAMEBUFFER,ye.__webglFramebuffer),_t.bindFramebuffer(b.DRAW_FRAMEBUFFER,Ar.__webglFramebuffer);for(let An=0;An<ut;An++)oe&&(b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,gt.get(g).__webglTexture,U,Tt+An),b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,gt.get(L).__webglTexture,Q,le+An)),b.blitFramebuffer(At,Ct,lt,pt,Ht,qt,lt,pt,b.DEPTH_BUFFER_BIT,b.NEAREST);_t.bindFramebuffer(b.READ_FRAMEBUFFER,null),_t.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else if(U!==0||g.isRenderTargetTexture||gt.has(g)){const Be=gt.get(g),Se=gt.get(L);_t.bindFramebuffer(b.READ_FRAMEBUFFER,Sl),_t.bindFramebuffer(b.DRAW_FRAMEBUFFER,El);for(let ye=0;ye<ut;ye++)oe?b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Be.__webglTexture,U,Tt+ye):b.framebufferTexture2D(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Be.__webglTexture,U),Oe?b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Se.__webglTexture,Q,le+ye):b.framebufferTexture2D(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Se.__webglTexture,Q),U!==0?b.blitFramebuffer(At,Ct,lt,pt,Ht,qt,lt,pt,b.COLOR_BUFFER_BIT,b.NEAREST):Oe?b.copyTexSubImage3D(ae,Q,Ht,qt,le+ye,At,Ct,lt,pt):b.copyTexSubImage2D(ae,Q,Ht,qt,At,Ct,lt,pt);_t.bindFramebuffer(b.READ_FRAMEBUFFER,null),_t.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else Oe?g.isDataTexture||g.isData3DTexture?b.texSubImage3D(ae,Q,Ht,qt,le,lt,pt,ut,$t,bt,ee.data):L.isCompressedArrayTexture?b.compressedTexSubImage3D(ae,Q,Ht,qt,le,lt,pt,ut,$t,ee.data):b.texSubImage3D(ae,Q,Ht,qt,le,lt,pt,ut,$t,bt,ee):g.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,Q,Ht,qt,lt,pt,$t,bt,ee.data):g.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,Q,Ht,qt,ee.width,ee.height,$t,ee.data):b.texSubImage2D(b.TEXTURE_2D,Q,Ht,qt,lt,pt,$t,bt,ee);b.pixelStorei(b.UNPACK_ROW_LENGTH,kt),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Ce),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Wn),b.pixelStorei(b.UNPACK_SKIP_ROWS,Pe),b.pixelStorei(b.UNPACK_SKIP_IMAGES,xi),Q===0&&L.generateMipmaps&&b.generateMipmap(ae),_t.unbindTexture()},this.initRenderTarget=function(g){gt.get(g).__webglFramebuffer===void 0&&Ft.setupRenderTarget(g)},this.initTexture=function(g){g.isCubeTexture?Ft.setTextureCube(g,0):g.isData3DTexture?Ft.setTexture3D(g,0):g.isDataArrayTexture||g.isCompressedArrayTexture?Ft.setTexture2DArray(g,0):Ft.setTexture2D(g,0),_t.unbindTexture()},this.resetState=function(){P=0,R=0,F=null,_t.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $e}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Wt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Wt._getUnpackColorSpace()}}const So={type:"change"},ha={type:"start"},al={type:"end"},ur=new Go,Eo=new vn,Fp=Math.cos(70*cc.DEG2RAD),ue=new I,be=2*Math.PI,Zt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ss=1e-6;class Op extends $c{constructor(t,e=null){super(t,e),this.state=Zt.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:li.ROTATE,MIDDLE:li.DOLLY,RIGHT:li.PAN},this.touches={ONE:ai.ROTATE,TWO:ai.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new yn,this._lastTargetPosition=new I,this._quat=new yn().setFromUnitVectors(t.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ka,this._sphericalDelta=new Ka,this._scale=1,this._panOffset=new I,this._rotateStart=new Lt,this._rotateEnd=new Lt,this._rotateDelta=new Lt,this._panStart=new Lt,this._panEnd=new Lt,this._panDelta=new Lt,this._dollyStart=new Lt,this._dollyEnd=new Lt,this._dollyDelta=new Lt,this._dollyDirection=new I,this._mouse=new Lt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=zp.bind(this),this._onPointerDown=Bp.bind(this),this._onPointerUp=Hp.bind(this),this._onContextMenu=qp.bind(this),this._onMouseWheel=kp.bind(this),this._onKeyDown=Wp.bind(this),this._onTouchStart=Xp.bind(this),this._onTouchMove=Yp.bind(this),this._onMouseDown=Vp.bind(this),this._onMouseMove=Gp.bind(this),this._interceptControlDown=Kp.bind(this),this._interceptControlUp=Zp.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(So),this.update(),this.state=Zt.NONE}update(t=null){const e=this.object.position;ue.copy(e).sub(this.target),ue.applyQuaternion(this._quat),this._spherical.setFromVector3(ue),this.autoRotate&&this.state===Zt.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=be:n>Math.PI&&(n-=be),r<-Math.PI?r+=be:r>Math.PI&&(r-=be),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(ue.setFromSpherical(this._spherical),ue.applyQuaternion(this._quatInverse),e.copy(this.target).add(ue),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=ue.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),s=!!c}else if(this.object.isOrthographicCamera){const o=new I(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=c!==this.object.zoom;const l=new I(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=ue.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ur.origin.copy(this.object.position),ur.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ur.direction))<Fp?this.object.lookAt(this.target):(Eo.setFromNormalAndCoplanarPoint(this.object.up,this.target),ur.intersectPlane(Eo,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>ss||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ss||this._lastTargetPosition.distanceToSquared(this.target)>ss?(this.dispatchEvent(So),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?be/60*this.autoRotateSpeed*t:be/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ue.setFromMatrixColumn(e,0),ue.multiplyScalar(-t),this._panOffset.add(ue)}_panUp(t,e){this.screenSpacePanning===!0?ue.setFromMatrixColumn(e,1):(ue.setFromMatrixColumn(e,0),ue.crossVectors(this.object.up,ue)),ue.multiplyScalar(t),this._panOffset.add(ue)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;ue.copy(r).sub(this.target);let s=ue.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=t-n.left,s=e-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(be*this._rotateDelta.x/e.clientHeight),this._rotateUp(be*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(be*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-be*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(be*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-be*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(n,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(be*this._rotateDelta.x/e.clientHeight),this._rotateUp(be*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Lt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Bp(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function zp(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Hp(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(al),this.state=Zt.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function Vp(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case li.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Zt.DOLLY;break;case li.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Zt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Zt.ROTATE}break;case li.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Zt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Zt.PAN}break;default:this.state=Zt.NONE}this.state!==Zt.NONE&&this.dispatchEvent(ha)}function Gp(i){switch(this.state){case Zt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Zt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Zt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function kp(i){this.enabled===!1||this.enableZoom===!1||this.state!==Zt.NONE||(i.preventDefault(),this.dispatchEvent(ha),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(al))}function Wp(i){this.enabled!==!1&&this._handleKeyDown(i)}function Xp(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ai.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Zt.TOUCH_ROTATE;break;case ai.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Zt.TOUCH_PAN;break;default:this.state=Zt.NONE}break;case 2:switch(this.touches.TWO){case ai.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Zt.TOUCH_DOLLY_PAN;break;case ai.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Zt.TOUCH_DOLLY_ROTATE;break;default:this.state=Zt.NONE}break;default:this.state=Zt.NONE}this.state!==Zt.NONE&&this.dispatchEvent(ha)}function Yp(i){switch(this._trackPointer(i),this.state){case Zt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Zt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Zt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Zt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Zt.NONE}}function qp(i){this.enabled!==!1&&i.preventDefault()}function Kp(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Zp(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const ol=document.querySelector("#scene"),jp=document.querySelector("#loading"),hn=new Fc;hn.fog=new aa(14064249,.0105);const Ii=new Ue(42,window.innerWidth/window.innerHeight,.1,180);Ii.position.set(31,25,39);const Re=new Np({canvas:ol,antialias:!0,alpha:!0,powerPreference:"high-performance"});Re.setPixelRatio(Math.min(window.devicePixelRatio,1.5));Re.setSize(window.innerWidth,window.innerHeight);Re.setClearColor(0,0);Re.shadowMap.enabled=!0;Re.shadowMap.type=wo;Re.outputColorSpace=Ae;Re.toneMapping=Co;Re.toneMappingExposure=1.13;const Ye=new Op(Ii,ol);Ye.target.set(0,3.1,-1.5);Ye.enableDamping=!0;Ye.dampingFactor=.055;Ye.minDistance=16;Ye.maxDistance=85;Ye.minPolarAngle=.42;Ye.maxPolarAngle=Math.PI*.48;Ye.autoRotate=!0;Ye.autoRotateSpeed=.22;Ye.update();const $p=new Yc(16766657,3693385,2.1);hn.add($p);const Fe=new Zc(16763015,3.5);Fe.position.set(-26,38,21);Fe.castShadow=!0;Fe.shadow.mapSize.set(1024,1024);Fe.shadow.camera.left=-42;Fe.shadow.camera.right=42;Fe.shadow.camera.top=42;Fe.shadow.camera.bottom=-42;Fe.shadow.camera.near=1;Fe.shadow.camera.far=90;Fe.shadow.bias=-18e-5;Fe.target.position.set(0,0,-2);hn.add(Fe,Fe.target);const Jp={grass:new se({color:"#4f7b58",roughness:.96}),grassLight:new se({color:"#6b925c",roughness:.95}),grassDark:new se({color:"#3e664c",roughness:1}),stone:new se({color:"#aeb1a0",roughness:.94}),stoneLight:new se({color:"#d1cdb7",roughness:.88}),stoneDark:new se({color:"#727b78",roughness:.98}),paving:new se({color:"#b8ae90",roughness:.96}),pavingAlt:new se({color:"#8d947f",roughness:1}),wallRed:new se({color:"#a84232",roughness:.79}),wallShade:new se({color:"#742f2a",roughness:.9}),wood:new se({color:"#6f3929",roughness:.72}),woodDark:new se({color:"#3f2926",roughness:.82}),roofTeal:new se({color:"#1e5d60",roughness:.67,metalness:.06}),roofBlue:new se({color:"#164548",roughness:.72,metalness:.05}),roofRidge:new se({color:"#d79b42",roughness:.48,metalness:.16}),gold:new se({color:"#e6b45a",roughness:.44,metalness:.18}),paper:new se({color:"#f5c76f",emissive:"#b75b28",emissiveIntensity:.32,roughness:.78}),lantern:new se({color:"#c84332",emissive:"#9e2a20",emissiveIntensity:.52,roughness:.62}),window:new se({color:"#293d3d",emissive:"#4c3929",emissiveIntensity:.32,roughness:.58}),leaf:new se({color:"#567d48",roughness:.96}),leafLight:new se({color:"#7d9a52",roughness:.95}),trunk:new se({color:"#60402c",roughness:1}),water:new se({color:"#487e87",roughness:.24,metalness:.14})},Qp=new _i(1,1,1);class tm{constructor(){this.cells=new Map}add(t,e,n,r,s=1,a=1,o=1,c=0){this.cells.has(t)||this.cells.set(t,[]),this.cells.get(t).push({x:e,y:n,z:r,width:s,height:a,depth:o,rotation:c})}build(t){const e=new te,n=new I,r=new I,s=new yn,a=new I(0,1,0);for(const[o,c]of this.cells){const l=new zc(Qp,Jp[o],c.length);l.instanceMatrix.setUsage(qs),l.castShadow=o!=="water",l.receiveShadow=o!=="lantern"&&o!=="paper",c.forEach((u,d)=>{n.set(u.x,u.y,u.z),r.set(u.width,u.height,u.depth),s.setFromAxisAngle(a,u.rotation),e.compose(n,s,r),l.setMatrixAt(d,e)}),l.instanceMatrix.needsUpdate=!0,l.computeBoundingSphere(),t.add(l)}}}const ll=new tm,rt=(...i)=>ll.add(...i),cl=[];function hl(i){let t=i;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function yo(i,t){return t===1?[0]:Array.from({length:t},(e,n)=>-i/2+.8+n*((i-1.6)/(t-1)))}function yr(i,t,e,n,r=3.2,s=.75){const a=document.createElement("canvas");a.width=768,a.height=180;const o=a.getContext("2d");o.fillStyle="#3d2924",o.fillRect(0,0,a.width,a.height),o.strokeStyle="#e4b65b",o.lineWidth=14,o.strokeRect(12,12,a.width-24,a.height-24),o.fillStyle="#ffe3a5",o.textAlign="center",o.textBaseline="middle",o.font='900 92px "Noto Serif SC", "Songti SC", serif',o.fillText(i,a.width/2,a.height/2+4);const c=new kc(a);c.colorSpace=Ae,c.anisotropy=Re.capabilities.getMaxAnisotropy();const l=new Ie(new gi(r,s),new sa({map:c}));l.position.set(t,e,n),hn.add(l)}function Tr(i,t,e,n){rt("stoneDark",i,.12,t,e+1.2,.24,n+1.2),rt("stone",i,.31,t,e+.58,.16,n+.58),rt("stoneLight",i,.46,t,e-.15,.14,n-.15);const r=t+n/2;rt("stoneDark",i,.12,r+.9,e*.58,.24,1.06),rt("stone",i,.27,r+.56,e*.5,.14,.76)}function ul(i,t,e,n,r,s){for(const a of[-1,1])for(const o of[-1,1]){const c=i+a*(n/2+.24),l=e+o*(r/2+.24);rt(s,c,t+.15,l,.92,.28,.92),rt(s,i+a*(n/2+.72),t+.56,e+o*(r/2+.72),.44,.46,.44),rt("roofRidge",i+a*(n/2+.7),t+.83,e+o*(r/2+.7),.2,.22,.2)}}function ua(i,t,e,n,r,s=4,a="roofTeal",o="roofBlue"){for(let l=0;l<s;l+=1){const u=Math.max(1.2,n-l*1.18),d=Math.max(1.2,r-l*1.08),f=t+l*.42;rt(l%2===0?a:o,i,f,e,u,.42,d),rt("roofRidge",i,f+.235,e+d/2,u+.06,.1,.14),rt("roofRidge",i,f+.235,e-d/2,u+.06,.1,.14),rt("roofRidge",i+u/2,f+.235,e,.14,.1,d),rt("roofRidge",i-u/2,f+.235,e,.14,.1,d)}const c=t+s*.42;return rt("roofRidge",i,c,e,Math.max(1.2,n-s*1.16),.2,.35),ul(i,t,e,n,r,a),c}function dl(i,t,e,n,r,s=4,a="roofTeal",o="roofBlue"){for(let l=0;l<s;l+=1){const u=Math.max(1.2,n-l*.22),d=Math.max(1.1,r-l*1.16),f=t+l*.42;rt(l%2===0?a:o,i,f,e,u,.42,d),rt("roofRidge",i,f+.235,e+d/2,u+.08,.1,.14),rt("roofRidge",i,f+.235,e-d/2,u+.08,.1,.14)}const c=t+s*.42;return rt("roofRidge",i,c,e,Math.max(1.1,n-.8),.22,.42),ul(i,t,e,n,r,a),c}function Ni(i,t,e,n=!0){if(rt("gold",i,t+.66,e,.12,.56,.12),rt("woodDark",i,t+.35,e,.72,.16,.72),rt("lantern",i,t,e,.58,.65,.58),rt("paper",i,t,e+.3,.33,.4,.06),rt("woodDark",i,t-.38,e,.56,.12,.56),rt("lantern",i,t-.66,e,.1,.48,.1),n){const r=new Qo(16747089,1.15,7.5,2);r.position.set(i,t,e+.25),hn.add(r),cl.push(r)}}function da({name:i,x:t,z:e,width:n,depth:r,height:s,roof:a="hip",columns:o=5,plaque:c=!0,lights:l=!0}){const d=e+r/2,f=.53+s/2,m=yo(n,o).map(T=>t+T);Tr(t,e,n,r),rt("wallRed",t,f,e,n-1.1,s,r-1.1),rt("wallShade",t,.53+.3,e,n-.84,.58,r-.84);const v=Math.min(3.4,n*.34);rt("woodDark",t,.53+1.38,d+.05,v,2.45,.13),rt("gold",t,.53+1.38,d+.13,.1,2.3,.08),rt("gold",t,.53+2.5,d+.13,v-.26,.1,.08),m.forEach(T=>{rt("wood",T,f,d-.24,.58,s+.25,.58),rt("wood",T,f,e-r/2+.24,.58,s+.25,.58),rt("gold",T,.53+s-.38,d-.18,.95,.28,.62),rt("woodDark",T,.53+s-.03,d-.18,.72,.22,.7)}),rt("woodDark",t,.53+s-.06,d-.16,n+.36,.35,.54),rt("woodDark",t,.53+s-.06,e-r/2+.16,n+.36,.35,.54);const M=.53+s*.55;yo(n-1.4,Math.max(2,o-1)).map(T=>t+T).forEach(T=>{Math.abs(T-t)>v*.58&&(rt("window",T,M,d+.05,1.15,1.08,.1),rt("gold",T,M,d+.12,.08,1.04,.05),rt("gold",T,M,d+.12,1.1,.08,.05))});const h=.53+s+.34,A=a==="hip"?ua(t,h,e,n+1.5,r+1.45,5):dl(t,h,e,n+1.5,r+1.45,4);return c&&yr(i,t,.53+s-.98,d+.46,Math.min(3.8,n*.42)),Ni(t-v/2-.66,.53+s*.52,d+.75,l),Ni(t+v/2+.66,.53+s*.52,d+.75,l),A}function em(){Tr(0,17,11.8,4.3),[-5,-1.75,1.75,5].forEach(o=>{rt("wallRed",0+o,.53+1.95,17,.72,3.9,.72),rt("woodDark",0+o,.53+2,19.15-.3,.88,4.04,.35),rt("gold",0+o,.53+3.58,19.15-.25,1,.26,.54)}),rt("wallRed",0,.53+3.45,17,11.8-.75,1.12,4.3-.9),rt("woodDark",0,.53+3.85,19.15-.3,11.8+.1,.4,.52),rt("stone",0,.53+.45,17,11.8-.7,.22,4.3-.62),[-3.35,0,3.35].forEach(o=>{rt("woodDark",0+o,.53+1.65,19.15-.03,1.6,2,.12),rt("gold",0+o,.53+1.65,19.15+.05,.08,1.76,.06)}),dl(0,.53+4.22,17,11.8+1.45,4.3+1.7,4),yr("云岫山门",0,.53+3.35,19.15+.42,3.7),Ni(-3.35,.53+2.18,19.15+.78),Ni(3.35,.53+2.18,19.15+.78)}function fl(i,t,e){Tr(i,t,6.2,6.2);let r=.53;for(let s=0;s<4;s+=1){const a=5.45-s*.78,o=1.72,c=t+a/2-.18;rt("wallRed",i,r+o/2,t,a-.72,o,a-.72),rt("wallShade",i,r+.22,t,a-.58,.42,a-.58),rt("window",i,r+.97,c+.05,Math.max(1,a*.4),.82,.1),rt("gold",i,r+.97,c+.12,.08,.8,.04);for(const l of[-1,1])for(const u of[-1,1])rt("wood",i+l*(a/2-.48),r+o/2,t+u*(a/2-.48),.48,o+.18,.48);ua(i,r+o+.14,t,a+.82,a+.82,3,s%2===0?"roofTeal":"roofBlue"),r+=3.18}rt("gold",i,r-.12,t,.48,1.86,.48),rt("roofRidge",i,r+.74,t,1,.28,1),yr(e,i,2.1,t+3.13,2.15,.52)}function pl(i,t,e){Tr(i,t,4.3,4.3);for(const r of[-1,1])for(const s of[-1,1])rt("wood",i+r*1.55,.53+1.6,t+s*1.55,.44,3.2,.44),rt("gold",i+r*1.55,.53+2.82,t+s*1.55,.78,.22,.68);rt("woodDark",i,.53+3,t,4.2,.34,4.2),ua(i,.53+3.25,t,5.25,5.25,4,"roofTeal","roofBlue"),rt("gold",i,.53+5.22,t,.34,.95,.34),yr(e,i,.53+2.18,t+1.95,1.65,.42)}function ml(i,t){rt("stoneDark",i,.25,t,1.24,.5,1.12),rt("stone",i,.72,t-.06,.82,.55,.92),rt("stoneLight",i,1.23,t+.14,.72,.62,.62),rt("stone",i-.28,.48,t+.39,.25,.4,.25),rt("stone",i+.28,.48,t+.39,.25,.4,.25),rt("stoneDark",i,1.18,t+.46,.18,.18,.16)}function nm(i,t,e=3.8,n=1,r=1){const s=hl(r);rt("trunk",i,e/2,t,.5*n,e,.5*n),rt("trunk",i+.35*n,e*.55,t-.15*n,.26*n,e*.5,.26*n,-.42),[{y:e*.75,radius:1.85},{y:e*1.04,radius:1.56},{y:e*1.3,radius:1.12}].forEach((o,c)=>{for(let l=0;l<7;l+=1){const u=Math.PI*2*l/7+s()*.22,d=o.radius*n*(.6+s()*.42);rt((l+c)%3===0?"leafLight":"leaf",i+Math.cos(u)*d*.54,o.y+(s()-.5)*.38,t+Math.sin(u)*d*.54,(.94+s()*.36)*n,(.68+s()*.32)*n,(.94+s()*.36)*n)}})}function gn(i,t,e,n,r=0){const s=Math.ceil(e/.96),a=Math.ceil(n/.96);for(let o=0;o<s;o+=1)for(let c=0;c<a;c+=1){const l=i+(o-(s-1)/2)*.96,u=t+(c-(a-1)/2)*.96;rt((o+c+r)%4===0?"pavingAlt":"paving",l,.05,u,.9,.1,.9)}}function To(i,t){rt("stoneDark",i,.02,t,5.4,.14,4.5),rt("stone",i,.11,t,5,.08,4.1),rt("water",i,.17,t,4.58,.08,3.68),[-1.8,1.8].forEach(e=>{rt("leafLight",i+e,.38,t+1.35,.22,.6,.22),rt("leaf",i+e+.18,.5,t+1.35,.52,.18,.28)})}function im(){for(let i=-31;i<=31;i+=2.2)rt("stoneDark",i,.32,-26.2,2.04,.64,.5),rt("wallShade",i,1.04,-26.2,2,.82,.42);for(const i of[-1,1])for(let t=-23.8;t<=23.8;t+=2.2)rt("stoneDark",i*31.2,.32,t,.5,.64,2.04),rt("wallShade",i*31.2,1.04,t,.42,.82,2)}function rm(){const i=new Ie(new gi(90,84),new se({color:"#4b7254",roughness:1}));i.rotation.x=-Math.PI/2,i.position.y=-.19,i.receiveShadow=!0,hn.add(i);const t=hl(19);for(let e=-13;e<=13;e+=1)for(let n=-12;n<=12;n+=1){const r=(e+n)%5===0||t()>.72?"grassLight":"grass";rt(r,e*3,-.1,n*3,2.95,.14,2.95)}gn(0,4,11.4,23.2,1),gn(0,19.2,5,10.2,2),gn(-13,2,7.6,4.2,3),gn(13,2,7.6,4.2,1),gn(-13,-9.4,15.6,3.2,0),gn(13,-9.4,15.6,3.2,2),gn(-21,7.7,3.2,8.6,0),gn(21,7.7,3.2,8.6,1),To(-22.3,.7),To(22.3,.7),im()}rm();da({name:"大雄宝殿",x:0,z:-13,width:17.4,depth:10.2,height:5.45,roof:"hip",columns:7});da({name:"东配殿",x:13,z:2,width:8.2,depth:7.2,height:3.88,roof:"xieshan",columns:4,lights:!1});da({name:"西配殿",x:-13,z:2,width:8.2,depth:7.2,height:3.88,roof:"xieshan",columns:4,lights:!1});em();fl(-21,-13,"钟楼");fl(21,-13,"鼓楼");pl(-21,11.6,"听松亭");pl(21,11.6,"观澜亭");ml(-4.65,20.1);ml(4.65,20.1);const sm=[[-26.4,13.6,4.7,1.1,1],[26.4,13.6,4.7,1.1,2],[-26.7,4.2,4.3,1,3],[26.7,4.2,4.3,1,4],[-25.8,-4.5,4.1,1,5],[25.8,-4.5,4.1,1,6],[-8.3,12,3.6,.8,7],[8.3,12,3.6,.8,8],[-29,-18.5,4.7,1.1,9],[29,-18.5,4.7,1.1,10]];sm.forEach(([i,t,e,n,r])=>nm(i,t,e,n,r));for(const i of[-7.2,-4.8,4.8,7.2])Ni(i,2.55,8.5,!1);ll.build(hn);const _l=new Qo(10473936,1,35,2);_l.position.set(0,12,-5);hn.add(_l);window.addEventListener("resize",()=>{Ii.aspect=window.innerWidth/window.innerHeight,Ii.updateProjectionMatrix(),Re.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),Re.setSize(window.innerWidth,window.innerHeight)});let bo=!1;Re.setAnimationLoop(i=>{const t=i*.001;cl.forEach((e,n)=>{e.intensity=1.02+Math.sin(t*2.1+n*1.7)*.16}),Ye.update(),Re.render(hn,Ii),bo||(Re.shadowMap.autoUpdate=!1,bo=!0)});requestAnimationFrame(()=>{jp.classList.add("ready")});
