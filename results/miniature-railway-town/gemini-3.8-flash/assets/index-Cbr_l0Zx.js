var cc=Object.defineProperty;var lc=(i,t,e)=>t in i?cc(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var $=(i,t,e)=>lc(i,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sr="162",Vn={ROTATE:0,DOLLY:1,PAN:2},Wn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},hc=0,Br=1,uc=2,Ma=1,Sa=2,rn=3,Sn=0,Le=1,Ye=2,vn=0,ui=1,zr=2,Gr=3,Hr=4,dc=5,Un=100,fc=101,pc=102,kr=103,Vr=104,mc=200,gc=201,_c=202,vc=203,dr=204,fr=205,xc=206,Mc=207,Sc=208,yc=209,Ec=210,wc=211,Tc=212,bc=213,Ac=214,Rc=0,Cc=1,Pc=2,ps=3,Lc=4,Dc=5,Ic=6,Uc=7,ya=0,Nc=1,Oc=2,xn=0,Fc=1,Bc=2,zc=3,Ea=4,Gc=5,Hc=6,kc=7,wa=300,fi=301,pi=302,pr=303,mr=304,ys=306,gr=1e3,He=1001,_r=1002,Se=1003,Wr=1004,Si=1005,Ce=1006,Cs=1007,On=1008,Mn=1009,Vc=1010,Wc=1011,yr=1012,Ta=1013,gn=1014,qe=1015,Ni=1016,ba=1017,Aa=1018,Fn=1020,Xc=1021,ke=1023,Yc=1024,qc=1025,Bn=1026,mi=1027,Ra=1028,Ca=1029,jc=1030,Pa=1031,La=1033,Ps=33776,Ls=33777,Ds=33778,Is=33779,Xr=35840,Yr=35841,qr=35842,jr=35843,Da=36196,Kr=37492,Zr=37496,Jr=37808,$r=37809,Qr=37810,to=37811,eo=37812,no=37813,io=37814,so=37815,ro=37816,oo=37817,ao=37818,co=37819,lo=37820,ho=37821,Us=36492,uo=36494,fo=36495,Kc=36283,po=36284,mo=36285,go=36286,Zc=3200,Jc=3201,Ia=0,$c=1,mn="",We="srgb",En="srgb-linear",Er="display-p3",Es="display-p3-linear",ms="linear",se="srgb",gs="rec709",_s="p3",Xn=7680,_o=519,Qc=512,tl=513,el=514,Ua=515,nl=516,il=517,sl=518,rl=519,vo=35044,xo="300 es",vr=1035,on=2e3,vs=2001;class Hn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const we=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Mo=1234567;const Ci=Math.PI/180,gi=180/Math.PI;function vi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(we[i&255]+we[i>>8&255]+we[i>>16&255]+we[i>>24&255]+"-"+we[t&255]+we[t>>8&255]+"-"+we[t>>16&15|64]+we[t>>24&255]+"-"+we[e&63|128]+we[e>>8&255]+"-"+we[e>>16&255]+we[e>>24&255]+we[n&255]+we[n>>8&255]+we[n>>16&255]+we[n>>24&255]).toLowerCase()}function xe(i,t,e){return Math.max(t,Math.min(e,i))}function wr(i,t){return(i%t+t)%t}function ol(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function al(i,t,e){return i!==t?(e-i)/(t-i):0}function Pi(i,t,e){return(1-e)*i+e*t}function cl(i,t,e,n){return Pi(i,t,1-Math.exp(-e*n))}function ll(i,t=1){return t-Math.abs(wr(i,t*2)-t)}function hl(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function ul(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function dl(i,t){return i+Math.floor(Math.random()*(t-i+1))}function fl(i,t){return i+Math.random()*(t-i)}function pl(i){return i*(.5-Math.random())}function ml(i){i!==void 0&&(Mo=i);let t=Mo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function gl(i){return i*Ci}function _l(i){return i*gi}function xr(i){return(i&i-1)===0&&i!==0}function vl(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function xs(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function xl(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),h=a((t+n)/2),u=r((t-n)/2),p=a((t-n)/2),m=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,c*u,c*p,o*l);break;case"YZY":i.set(c*p,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*p,o*h,o*l);break;case"XZX":i.set(o*h,c*g,c*m,o*l);break;case"YXY":i.set(c*m,o*h,c*g,o*l);break;case"ZYZ":i.set(c*g,c*m,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ci(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function be(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Li={DEG2RAD:Ci,RAD2DEG:gi,generateUUID:vi,clamp:xe,euclideanModulo:wr,mapLinear:ol,inverseLerp:al,lerp:Pi,damp:cl,pingpong:ll,smoothstep:hl,smootherstep:ul,randInt:dl,randFloat:fl,randFloatSpread:pl,seededRandom:ml,degToRad:gl,radToDeg:_l,isPowerOfTwo:xr,ceilPowerOfTwo:vl,floorPowerOfTwo:xs,setQuaternionFromProperEuler:xl,normalize:be,denormalize:ci};class pt{constructor(t=0,e=0){pt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wt{constructor(t,e,n,s,r,a,o,c,l){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],p=n[2],m=n[5],g=n[8],_=s[0],d=s[3],f=s[6],S=s[1],v=s[4],y=s[7],P=s[2],R=s[5],T=s[8];return r[0]=a*_+o*S+c*P,r[3]=a*d+o*v+c*R,r[6]=a*f+o*y+c*T,r[1]=l*_+h*S+u*P,r[4]=l*d+h*v+u*R,r[7]=l*f+h*y+u*T,r[2]=p*_+m*S+g*P,r[5]=p*d+m*v+g*R,r[8]=p*f+m*y+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=h*a-o*l,p=o*c-h*r,m=l*r-a*c,g=e*u+n*p+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=p*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-o*e)*_,t[6]=m*_,t[7]=(n*c-l*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ns.makeScale(t,e)),this}rotate(t){return this.premultiply(Ns.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ns.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ns=new Wt;function Na(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ms(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ml(){const i=Ms("canvas");return i.style.display="block",i}const So={};function Sl(i){i in So||(So[i]=!0,console.warn(i))}const yo=new Wt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Eo=new Wt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Vi={[En]:{transfer:ms,primaries:gs,toReference:i=>i,fromReference:i=>i},[We]:{transfer:se,primaries:gs,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Es]:{transfer:ms,primaries:_s,toReference:i=>i.applyMatrix3(Eo),fromReference:i=>i.applyMatrix3(yo)},[Er]:{transfer:se,primaries:_s,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Eo),fromReference:i=>i.applyMatrix3(yo).convertLinearToSRGB()}},yl=new Set([En,Es]),Qt={enabled:!0,_workingColorSpace:En,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!yl.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Vi[t].toReference,s=Vi[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Vi[i].primaries},getTransfer:function(i){return i===mn?ms:Vi[i].transfer}};function di(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Os(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Yn;class Oa{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Yn===void 0&&(Yn=Ms("canvas")),Yn.width=t.width,Yn.height=t.height;const n=Yn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Yn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ms("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=di(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(di(e[n]/255)*255):e[n]=di(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let El=0;class Fa{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:El++}),this.uuid=vi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Fs(s[a].image)):r.push(Fs(s[a]))}else r=Fs(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Fs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Oa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wl=0;class Re extends Hn{constructor(t=Re.DEFAULT_IMAGE,e=Re.DEFAULT_MAPPING,n=He,s=He,r=Ce,a=On,o=ke,c=Mn,l=Re.DEFAULT_ANISOTROPY,h=mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wl++}),this.uuid=vi(),this.name="",this.source=new Fa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wa)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case gr:t.x=t.x-Math.floor(t.x);break;case He:t.x=t.x<0?0:1;break;case _r:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case gr:t.y=t.y-Math.floor(t.y);break;case He:t.y=t.y<0?0:1;break;case _r:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}Re.DEFAULT_IMAGE=null;Re.DEFAULT_MAPPING=wa;Re.DEFAULT_ANISOTROPY=1;class ae{constructor(t=0,e=0,n=0,s=1){ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],p=c[1],m=c[5],g=c[9],_=c[2],d=c[6],f=c[10];if(Math.abs(h-p)<.01&&Math.abs(u-_)<.01&&Math.abs(g-d)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+_)<.1&&Math.abs(g+d)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,y=(m+1)/2,P=(f+1)/2,R=(h+p)/4,T=(u+_)/4,I=(g+d)/4;return v>y&&v>P?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=R/n,r=T/n):y>P?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=R/s,r=I/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=T/r,s=I/r),this.set(n,s,r,e),this}let S=Math.sqrt((d-g)*(d-g)+(u-_)*(u-_)+(p-h)*(p-h));return Math.abs(S)<.001&&(S=1),this.x=(d-g)/S,this.y=(u-_)/S,this.z=(p-h)/S,this.w=Math.acos((l+m+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Tl extends Hn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ce,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const r=new Re(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Fa(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zn extends Tl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ba extends Re{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Se,this.minFilter=Se,this.wrapR=He,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bl extends Re{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Se,this.minFilter=Se,this.wrapR=He,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const p=r[a+0],m=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=p,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==p||l!==m||h!==g){let d=1-o;const f=c*p+l*m+h*g+u*_,S=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const P=Math.sqrt(v),R=Math.atan2(P,f*S);d=Math.sin(d*R)/P,o=Math.sin(o*R)/P}const y=o*S;if(c=c*d+p*y,l=l*d+m*y,h=h*d+g*y,u=u*d+_*y,d===1-o){const P=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=P,l*=P,h*=P,u*=P}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],p=r[a+1],m=r[a+2],g=r[a+3];return t[e]=o*g+h*u+c*m-l*p,t[e+1]=c*g+h*p+l*u-o*m,t[e+2]=l*g+h*m+o*p-c*u,t[e+3]=h*g-o*u-c*p-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),p=c(n/2),m=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=p*h*u+l*m*g,this._y=l*m*u-p*h*g,this._z=l*h*g+p*m*u,this._w=l*h*u-p*m*g;break;case"YXZ":this._x=p*h*u+l*m*g,this._y=l*m*u-p*h*g,this._z=l*h*g-p*m*u,this._w=l*h*u+p*m*g;break;case"ZXY":this._x=p*h*u-l*m*g,this._y=l*m*u+p*h*g,this._z=l*h*g+p*m*u,this._w=l*h*u-p*m*g;break;case"ZYX":this._x=p*h*u-l*m*g,this._y=l*m*u+p*h*g,this._z=l*h*g-p*m*u,this._w=l*h*u+p*m*g;break;case"YZX":this._x=p*h*u+l*m*g,this._y=l*m*u+p*h*g,this._z=l*h*g-p*m*u,this._w=l*h*u-p*m*g;break;case"XZY":this._x=p*h*u-l*m*g,this._y=l*m*u-p*h*g,this._z=l*h*g+p*m*u,this._w=l*h*u+p*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],u=e[10],p=n+o+u;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(n>o&&n>u){const m=2*Math.sqrt(1+n-o-u);this._w=(h-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>u){const m=2*Math.sqrt(1+o-n-u);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+u-n-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-e)*h)/l,p=Math.sin(e*h)/l;return this._w=a*u+this._w*p,this._x=n*u+this._x*p,this._y=s*u+this._y*p,this._z=r*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class w{constructor(t=0,e=0,n=0){w.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(wo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(wo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Bs.copy(this).projectOnVector(t),this.sub(Bs)}reflect(t){return this.sub(Bs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bs=new w,wo=new Gn;class kn{constructor(t=new w(1/0,1/0,1/0),e=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Be.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Be.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Be.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Be):Be.fromBufferAttribute(r,a),Be.applyMatrix4(t.matrixWorld),this.expandByPoint(Be);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Wi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wi.copy(n.boundingBox)),Wi.applyMatrix4(t.matrixWorld),this.union(Wi)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Be),Be.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(yi),Xi.subVectors(this.max,yi),qn.subVectors(t.a,yi),jn.subVectors(t.b,yi),Kn.subVectors(t.c,yi),cn.subVectors(jn,qn),ln.subVectors(Kn,jn),An.subVectors(qn,Kn);let e=[0,-cn.z,cn.y,0,-ln.z,ln.y,0,-An.z,An.y,cn.z,0,-cn.x,ln.z,0,-ln.x,An.z,0,-An.x,-cn.y,cn.x,0,-ln.y,ln.x,0,-An.y,An.x,0];return!zs(e,qn,jn,Kn,Xi)||(e=[1,0,0,0,1,0,0,0,1],!zs(e,qn,jn,Kn,Xi))?!1:(Yi.crossVectors(cn,ln),e=[Yi.x,Yi.y,Yi.z],zs(e,qn,jn,Kn,Xi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Be).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Be).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qe[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qe[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qe[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qe[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qe[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qe[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qe[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qe[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qe),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Qe=[new w,new w,new w,new w,new w,new w,new w,new w],Be=new w,Wi=new kn,qn=new w,jn=new w,Kn=new w,cn=new w,ln=new w,An=new w,yi=new w,Xi=new w,Yi=new w,Rn=new w;function zs(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Rn.fromArray(i,r);const o=s.x*Math.abs(Rn.x)+s.y*Math.abs(Rn.y)+s.z*Math.abs(Rn.z),c=t.dot(Rn),l=e.dot(Rn),h=n.dot(Rn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Al=new kn,Ei=new w,Gs=new w;class Fi{constructor(t=new w,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Al.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ei.subVectors(t,this.center);const e=Ei.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ei,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Gs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ei.copy(t.center).add(Gs)),this.expandByPoint(Ei.copy(t.center).sub(Gs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const tn=new w,Hs=new w,qi=new w,hn=new w,ks=new w,ji=new w,Vs=new w;class za{constructor(t=new w,e=new w(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,tn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=tn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(tn.copy(this.origin).addScaledVector(this.direction,e),tn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Hs.copy(t).add(e).multiplyScalar(.5),qi.copy(e).sub(t).normalize(),hn.copy(this.origin).sub(Hs);const r=t.distanceTo(e)*.5,a=-this.direction.dot(qi),o=hn.dot(this.direction),c=-hn.dot(qi),l=hn.lengthSq(),h=Math.abs(1-a*a);let u,p,m,g;if(h>0)if(u=a*c-o,p=a*o-c,g=r*h,u>=0)if(p>=-g)if(p<=g){const _=1/h;u*=_,p*=_,m=u*(u+a*p+2*o)+p*(a*u+p+2*c)+l}else p=r,u=Math.max(0,-(a*p+o)),m=-u*u+p*(p+2*c)+l;else p=-r,u=Math.max(0,-(a*p+o)),m=-u*u+p*(p+2*c)+l;else p<=-g?(u=Math.max(0,-(-a*r+o)),p=u>0?-r:Math.min(Math.max(-r,-c),r),m=-u*u+p*(p+2*c)+l):p<=g?(u=0,p=Math.min(Math.max(-r,-c),r),m=p*(p+2*c)+l):(u=Math.max(0,-(a*r+o)),p=u>0?r:Math.min(Math.max(-r,-c),r),m=-u*u+p*(p+2*c)+l);else p=a>0?-r:r,u=Math.max(0,-(a*p+o)),m=-u*u+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Hs).addScaledVector(qi,p),m}intersectSphere(t,e){tn.subVectors(t.center,this.origin);const n=tn.dot(this.direction),s=tn.dot(tn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return l>=0?(n=(t.min.x-p.x)*l,s=(t.max.x-p.x)*l):(n=(t.max.x-p.x)*l,s=(t.min.x-p.x)*l),h>=0?(r=(t.min.y-p.y)*h,a=(t.max.y-p.y)*h):(r=(t.max.y-p.y)*h,a=(t.min.y-p.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-p.z)*u,c=(t.max.z-p.z)*u):(o=(t.max.z-p.z)*u,c=(t.min.z-p.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,tn)!==null}intersectTriangle(t,e,n,s,r){ks.subVectors(e,t),ji.subVectors(n,t),Vs.crossVectors(ks,ji);let a=this.direction.dot(Vs),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;hn.subVectors(this.origin,t);const c=o*this.direction.dot(ji.crossVectors(hn,ji));if(c<0)return null;const l=o*this.direction.dot(ks.cross(hn));if(l<0||c+l>a)return null;const h=-o*hn.dot(Vs);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class te{constructor(t,e,n,s,r,a,o,c,l,h,u,p,m,g,_,d){te.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,h,u,p,m,g,_,d)}set(t,e,n,s,r,a,o,c,l,h,u,p,m,g,_,d){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=p,f[3]=m,f[7]=g,f[11]=_,f[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new te().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Zn.setFromMatrixColumn(t,0).length(),r=1/Zn.setFromMatrixColumn(t,1).length(),a=1/Zn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const p=a*h,m=a*u,g=o*h,_=o*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=m+g*l,e[5]=p-_*l,e[9]=-o*c,e[2]=_-p*l,e[6]=g+m*l,e[10]=a*c}else if(t.order==="YXZ"){const p=c*h,m=c*u,g=l*h,_=l*u;e[0]=p+_*o,e[4]=g*o-m,e[8]=a*l,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=m*o-g,e[6]=_+p*o,e[10]=a*c}else if(t.order==="ZXY"){const p=c*h,m=c*u,g=l*h,_=l*u;e[0]=p-_*o,e[4]=-a*u,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*h,e[9]=_-p*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const p=a*h,m=a*u,g=o*h,_=o*u;e[0]=c*h,e[4]=g*l-m,e[8]=p*l+_,e[1]=c*u,e[5]=_*l+p,e[9]=m*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const p=a*c,m=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=_-p*u,e[8]=g*u+m,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=m*u+g,e[10]=p-_*u}else if(t.order==="XZY"){const p=a*c,m=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=p*u+_,e[5]=a*h,e[9]=m*u-g,e[2]=g*u-m,e[6]=o*h,e[10]=_*u+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Rl,t,Cl)}lookAt(t,e,n){const s=this.elements;return Ie.subVectors(t,e),Ie.lengthSq()===0&&(Ie.z=1),Ie.normalize(),un.crossVectors(n,Ie),un.lengthSq()===0&&(Math.abs(n.z)===1?Ie.x+=1e-4:Ie.z+=1e-4,Ie.normalize(),un.crossVectors(n,Ie)),un.normalize(),Ki.crossVectors(Ie,un),s[0]=un.x,s[4]=Ki.x,s[8]=Ie.x,s[1]=un.y,s[5]=Ki.y,s[9]=Ie.y,s[2]=un.z,s[6]=Ki.z,s[10]=Ie.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],p=n[9],m=n[13],g=n[2],_=n[6],d=n[10],f=n[14],S=n[3],v=n[7],y=n[11],P=n[15],R=s[0],T=s[4],I=s[8],z=s[12],x=s[1],A=s[5],q=s[9],Q=s[13],D=s[2],Y=s[6],k=s[10],tt=s[14],X=s[3],J=s[7],et=s[11],lt=s[15];return r[0]=a*R+o*x+c*D+l*X,r[4]=a*T+o*A+c*Y+l*J,r[8]=a*I+o*q+c*k+l*et,r[12]=a*z+o*Q+c*tt+l*lt,r[1]=h*R+u*x+p*D+m*X,r[5]=h*T+u*A+p*Y+m*J,r[9]=h*I+u*q+p*k+m*et,r[13]=h*z+u*Q+p*tt+m*lt,r[2]=g*R+_*x+d*D+f*X,r[6]=g*T+_*A+d*Y+f*J,r[10]=g*I+_*q+d*k+f*et,r[14]=g*z+_*Q+d*tt+f*lt,r[3]=S*R+v*x+y*D+P*X,r[7]=S*T+v*A+y*Y+P*J,r[11]=S*I+v*q+y*k+P*et,r[15]=S*z+v*Q+y*tt+P*lt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],u=t[6],p=t[10],m=t[14],g=t[3],_=t[7],d=t[11],f=t[15];return g*(+r*c*u-s*l*u-r*o*p+n*l*p+s*o*m-n*c*m)+_*(+e*c*m-e*l*p+r*a*p-s*a*m+s*l*h-r*c*h)+d*(+e*l*u-e*o*m-r*a*u+n*a*m+r*o*h-n*l*h)+f*(-s*o*h-e*c*u+e*o*p+s*a*u-n*a*p+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],u=t[9],p=t[10],m=t[11],g=t[12],_=t[13],d=t[14],f=t[15],S=u*d*l-_*p*l+_*c*m-o*d*m-u*c*f+o*p*f,v=g*p*l-h*d*l-g*c*m+a*d*m+h*c*f-a*p*f,y=h*_*l-g*u*l+g*o*m-a*_*m-h*o*f+a*u*f,P=g*u*c-h*_*c-g*o*p+a*_*p+h*o*d-a*u*d,R=e*S+n*v+s*y+r*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/R;return t[0]=S*T,t[1]=(_*p*r-u*d*r-_*s*m+n*d*m+u*s*f-n*p*f)*T,t[2]=(o*d*r-_*c*r+_*s*l-n*d*l-o*s*f+n*c*f)*T,t[3]=(u*c*r-o*p*r-u*s*l+n*p*l+o*s*m-n*c*m)*T,t[4]=v*T,t[5]=(h*d*r-g*p*r+g*s*m-e*d*m-h*s*f+e*p*f)*T,t[6]=(g*c*r-a*d*r-g*s*l+e*d*l+a*s*f-e*c*f)*T,t[7]=(a*p*r-h*c*r+h*s*l-e*p*l-a*s*m+e*c*m)*T,t[8]=y*T,t[9]=(g*u*r-h*_*r-g*n*m+e*_*m+h*n*f-e*u*f)*T,t[10]=(a*_*r-g*o*r+g*n*l-e*_*l-a*n*f+e*o*f)*T,t[11]=(h*o*r-a*u*r-h*n*l+e*u*l+a*n*m-e*o*m)*T,t[12]=P*T,t[13]=(h*_*s-g*u*s+g*n*p-e*_*p-h*n*d+e*u*d)*T,t[14]=(g*o*s-a*_*s-g*n*c+e*_*c+a*n*d-e*o*d)*T,t[15]=(a*u*s-h*o*s+h*n*c-e*u*c-a*n*p+e*o*p)*T,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,u=o+o,p=r*l,m=r*h,g=r*u,_=a*h,d=a*u,f=o*u,S=c*l,v=c*h,y=c*u,P=n.x,R=n.y,T=n.z;return s[0]=(1-(_+f))*P,s[1]=(m+y)*P,s[2]=(g-v)*P,s[3]=0,s[4]=(m-y)*R,s[5]=(1-(p+f))*R,s[6]=(d+S)*R,s[7]=0,s[8]=(g+v)*T,s[9]=(d-S)*T,s[10]=(1-(p+_))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Zn.set(s[0],s[1],s[2]).length();const a=Zn.set(s[4],s[5],s[6]).length(),o=Zn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],ze.copy(this);const l=1/r,h=1/a,u=1/o;return ze.elements[0]*=l,ze.elements[1]*=l,ze.elements[2]*=l,ze.elements[4]*=h,ze.elements[5]*=h,ze.elements[6]*=h,ze.elements[8]*=u,ze.elements[9]*=u,ze.elements[10]*=u,e.setFromRotationMatrix(ze),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=on){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),p=(n+s)/(n-s);let m,g;if(o===on)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===vs)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=on){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(a-r),p=(e+t)*l,m=(n+s)*h;let g,_;if(o===on)g=(a+r)*u,_=-2*u;else if(o===vs)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Zn=new w,ze=new te,Rl=new w(0,0,0),Cl=new w(1,1,1),un=new w,Ki=new w,Ie=new w,To=new te,bo=new Gn;class Je{constructor(t=0,e=0,n=0,s=Je.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],p=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(xe(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-xe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(xe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return To.makeRotationFromQuaternion(t),this.setFromRotationMatrix(To,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return bo.setFromEuler(this),this.setFromQuaternion(bo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Je.DEFAULT_ORDER="XYZ";class Ga{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Pl=0;const Ao=new w,Jn=new Gn,en=new te,Zi=new w,wi=new w,Ll=new w,Dl=new Gn,Ro=new w(1,0,0),Co=new w(0,1,0),Po=new w(0,0,1),Il={type:"added"},Ul={type:"removed"},Ws={type:"childadded",child:null},Xs={type:"childremoved",child:null};class de extends Hn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pl++}),this.uuid=vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=de.DEFAULT_UP.clone();const t=new w,e=new Je,n=new Gn,s=new w(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new te},normalMatrix:{value:new Wt}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=de.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=de.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ga,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Jn.setFromAxisAngle(t,e),this.quaternion.multiply(Jn),this}rotateOnWorldAxis(t,e){return Jn.setFromAxisAngle(t,e),this.quaternion.premultiply(Jn),this}rotateX(t){return this.rotateOnAxis(Ro,t)}rotateY(t){return this.rotateOnAxis(Co,t)}rotateZ(t){return this.rotateOnAxis(Po,t)}translateOnAxis(t,e){return Ao.copy(t).applyQuaternion(this.quaternion),this.position.add(Ao.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ro,t)}translateY(t){return this.translateOnAxis(Co,t)}translateZ(t){return this.translateOnAxis(Po,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(en.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Zi.copy(t):Zi.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),wi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?en.lookAt(wi,Zi,this.up):en.lookAt(Zi,wi,this.up),this.quaternion.setFromRotationMatrix(en),s&&(en.extractRotation(s.matrixWorld),Jn.setFromRotationMatrix(en),this.quaternion.premultiply(Jn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Il),Ws.child=t,this.dispatchEvent(Ws),Ws.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ul),Xs.child=t,this.dispatchEvent(Xs),Xs.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),en.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),en.multiply(t.parent.matrixWorld)),t.applyMatrix4(en),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wi,t,Ll),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wi,Dl,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),u=a(t.shapes),p=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}de.DEFAULT_UP=new w(0,1,0);de.DEFAULT_MATRIX_AUTO_UPDATE=!0;de.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ge=new w,nn=new w,Ys=new w,sn=new w,$n=new w,Qn=new w,Lo=new w,qs=new w,js=new w,Ks=new w;class je{constructor(t=new w,e=new w,n=new w){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ge.subVectors(t,e),s.cross(Ge);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ge.subVectors(s,e),nn.subVectors(n,e),Ys.subVectors(t,e);const a=Ge.dot(Ge),o=Ge.dot(nn),c=Ge.dot(Ys),l=nn.dot(nn),h=nn.dot(Ys),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const p=1/u,m=(l*c-o*h)*p,g=(a*h-o*c)*p;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,sn)===null?!1:sn.x>=0&&sn.y>=0&&sn.x+sn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,sn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,sn.x),c.addScaledVector(a,sn.y),c.addScaledVector(o,sn.z),c)}static isFrontFacing(t,e,n,s){return Ge.subVectors(n,e),nn.subVectors(t,e),Ge.cross(nn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ge.subVectors(this.c,this.b),nn.subVectors(this.a,this.b),Ge.cross(nn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return je.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return je.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return je.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return je.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return je.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;$n.subVectors(s,n),Qn.subVectors(r,n),qs.subVectors(t,n);const c=$n.dot(qs),l=Qn.dot(qs);if(c<=0&&l<=0)return e.copy(n);js.subVectors(t,s);const h=$n.dot(js),u=Qn.dot(js);if(h>=0&&u<=h)return e.copy(s);const p=c*u-h*l;if(p<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector($n,a);Ks.subVectors(t,r);const m=$n.dot(Ks),g=Qn.dot(Ks);if(g>=0&&m<=g)return e.copy(r);const _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(Qn,o);const d=h*g-m*u;if(d<=0&&u-h>=0&&m-g>=0)return Lo.subVectors(r,s),o=(u-h)/(u-h+(m-g)),e.copy(s).addScaledVector(Lo,o);const f=1/(d+_+p);return a=_*f,o=p*f,e.copy(n).addScaledVector($n,a).addScaledVector(Qn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ha={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dn={h:0,s:0,l:0},Ji={h:0,s:0,l:0};function Zs(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ft{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=We){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Qt.workingColorSpace){if(t=wr(t,1),e=xe(e,0,1),n=xe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Zs(a,r,t+1/3),this.g=Zs(a,r,t),this.b=Zs(a,r,t-1/3)}return Qt.toWorkingColorSpace(this,s),this}setStyle(t,e=We){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=We){const n=Ha[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=di(t.r),this.g=di(t.g),this.b=di(t.b),this}copyLinearToSRGB(t){return this.r=Os(t.r),this.g=Os(t.g),this.b=Os(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=We){return Qt.fromWorkingColorSpace(Te.copy(this),t),Math.round(xe(Te.r*255,0,255))*65536+Math.round(xe(Te.g*255,0,255))*256+Math.round(xe(Te.b*255,0,255))}getHexString(t=We){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(Te.copy(this),e);const n=Te.r,s=Te.g,r=Te.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(Te.copy(this),e),t.r=Te.r,t.g=Te.g,t.b=Te.b,t}getStyle(t=We){Qt.fromWorkingColorSpace(Te.copy(this),t);const e=Te.r,n=Te.g,s=Te.b;return t!==We?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(dn),this.setHSL(dn.h+t,dn.s+e,dn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(dn),t.getHSL(Ji);const n=Pi(dn.h,Ji.h,e),s=Pi(dn.s,Ji.s,e),r=Pi(dn.l,Ji.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Te=new Ft;Ft.NAMES=Ha;let Nl=0;class Bi extends Hn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nl++}),this.uuid=vi(),this.name="",this.type="Material",this.blending=ui,this.side=Sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dr,this.blendDst=fr,this.blendEquation=Un,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_o,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xn,this.stencilZFail=Xn,this.stencilZPass=Xn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ui&&(n.blending=this.blending),this.side!==Sn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==dr&&(n.blendSrc=this.blendSrc),this.blendDst!==fr&&(n.blendDst=this.blendDst),this.blendEquation!==Un&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ps&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_o&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Tr extends Bi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Je,this.combine=ya,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fe=new w,$i=new pt;class Ve{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=vo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=qe,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return Sl("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)$i.fromBufferAttribute(this,e),$i.applyMatrix3(t),this.setXY(e,$i.x,$i.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ci(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=be(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ci(e,this.array)),e}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ci(e,this.array)),e}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ci(e,this.array)),e}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ci(e,this.array)),e}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),s=be(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),n=be(n,this.array),s=be(s,this.array),r=be(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==vo&&(t.usage=this.usage),t}}class ka extends Ve{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Va extends Ve{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class re extends Ve{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Ol=0;const Fe=new te,Js=new de,ti=new w,Ue=new kn,Ti=new kn,ve=new w;class Ne extends Hn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ol++}),this.uuid=vi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Na(t)?Va:ka)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Wt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Fe.makeRotationFromQuaternion(t),this.applyMatrix4(Fe),this}rotateX(t){return Fe.makeRotationX(t),this.applyMatrix4(Fe),this}rotateY(t){return Fe.makeRotationY(t),this.applyMatrix4(Fe),this}rotateZ(t){return Fe.makeRotationZ(t),this.applyMatrix4(Fe),this}translate(t,e,n){return Fe.makeTranslation(t,e,n),this.applyMatrix4(Fe),this}scale(t,e,n){return Fe.makeScale(t,e,n),this.applyMatrix4(Fe),this}lookAt(t){return Js.lookAt(t),Js.updateMatrix(),this.applyMatrix4(Js.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ti).negate(),this.translate(ti.x,ti.y,ti.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new re(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ue.setFromBufferAttribute(r),this.morphTargetsRelative?(ve.addVectors(this.boundingBox.min,Ue.min),this.boundingBox.expandByPoint(ve),ve.addVectors(this.boundingBox.max,Ue.max),this.boundingBox.expandByPoint(ve)):(this.boundingBox.expandByPoint(Ue.min),this.boundingBox.expandByPoint(Ue.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(t){const n=this.boundingSphere.center;if(Ue.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ti.setFromBufferAttribute(o),this.morphTargetsRelative?(ve.addVectors(Ue.min,Ti.min),Ue.expandByPoint(ve),ve.addVectors(Ue.max,Ti.max),Ue.expandByPoint(ve)):(Ue.expandByPoint(Ti.min),Ue.expandByPoint(Ti.max))}Ue.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)ve.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ve));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)ve.fromBufferAttribute(o,l),c&&(ti.fromBufferAttribute(t,l),ve.add(ti)),s=Math.max(s,n.distanceToSquared(ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ve(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let I=0;I<n.count;I++)o[I]=new w,c[I]=new w;const l=new w,h=new w,u=new w,p=new pt,m=new pt,g=new pt,_=new w,d=new w;function f(I,z,x){l.fromBufferAttribute(n,I),h.fromBufferAttribute(n,z),u.fromBufferAttribute(n,x),p.fromBufferAttribute(r,I),m.fromBufferAttribute(r,z),g.fromBufferAttribute(r,x),h.sub(l),u.sub(l),m.sub(p),g.sub(p);const A=1/(m.x*g.y-g.x*m.y);isFinite(A)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-m.y).multiplyScalar(A),d.copy(u).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(A),o[I].add(_),o[z].add(_),o[x].add(_),c[I].add(d),c[z].add(d),c[x].add(d))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let I=0,z=S.length;I<z;++I){const x=S[I],A=x.start,q=x.count;for(let Q=A,D=A+q;Q<D;Q+=3)f(t.getX(Q+0),t.getX(Q+1),t.getX(Q+2))}const v=new w,y=new w,P=new w,R=new w;function T(I){P.fromBufferAttribute(s,I),R.copy(P);const z=o[I];v.copy(z),v.sub(P.multiplyScalar(P.dot(z))).normalize(),y.crossVectors(R,z);const A=y.dot(c[I])<0?-1:1;a.setXYZW(I,v.x,v.y,v.z,A)}for(let I=0,z=S.length;I<z;++I){const x=S[I],A=x.start,q=x.count;for(let Q=A,D=A+q;Q<D;Q+=3)T(t.getX(Q+0)),T(t.getX(Q+1)),T(t.getX(Q+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ve(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);const s=new w,r=new w,a=new w,o=new w,c=new w,l=new w,h=new w,u=new w;if(t)for(let p=0,m=t.count;p<m;p+=3){const g=t.getX(p+0),_=t.getX(p+1),d=t.getX(p+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,d),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,d),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(d,l.x,l.y,l.z)}else for(let p=0,m=e.count;p<m;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),a.fromBufferAttribute(e,p+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ve.fromBufferAttribute(t,e),ve.normalize(),t.setXYZ(e,ve.x,ve.y,ve.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,u=o.normalized,p=new l.constructor(c.length*h);let m=0,g=0;for(let _=0,d=c.length;_<d;_++){o.isInterleavedBufferAttribute?m=c[_]*o.data.stride+o.offset:m=c[_]*h;for(let f=0;f<h;f++)p[g++]=l[m++]}return new Ve(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ne,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const p=l[h],m=t(p,n);c.push(m)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,p=l.length;u<p;u++){const m=l[u];h.push(m.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let p=0,m=u.length;p<m;p++)h.push(u[p].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Do=new te,Cn=new za,Qi=new Fi,Io=new w,ei=new w,ni=new w,ii=new w,$s=new w,ts=new w,es=new pt,ns=new pt,is=new pt,Uo=new w,No=new w,Oo=new w,ss=new w,rs=new w;class U extends de{constructor(t=new Ne,e=new Tr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){ts.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&($s.fromBufferAttribute(u,t),a?ts.addScaledVector($s,h):ts.addScaledVector($s.sub(e),h))}e.add(ts)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qi.copy(n.boundingSphere),Qi.applyMatrix4(r),Cn.copy(t.ray).recast(t.near),!(Qi.containsPoint(Cn.origin)===!1&&(Cn.intersectSphere(Qi,Io)===null||Cn.origin.distanceToSquared(Io)>(t.far-t.near)**2))&&(Do.copy(r).invert(),Cn.copy(t.ray).applyMatrix4(Do),!(n.boundingBox!==null&&Cn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Cn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,p=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=p.length;g<_;g++){const d=p[g],f=a[d.materialIndex],S=Math.max(d.start,m.start),v=Math.min(o.count,Math.min(d.start+d.count,m.start+m.count));for(let y=S,P=v;y<P;y+=3){const R=o.getX(y),T=o.getX(y+1),I=o.getX(y+2);s=os(this,f,t,n,l,h,u,R,T,I),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let d=g,f=_;d<f;d+=3){const S=o.getX(d),v=o.getX(d+1),y=o.getX(d+2);s=os(this,a,t,n,l,h,u,S,v,y),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=p.length;g<_;g++){const d=p[g],f=a[d.materialIndex],S=Math.max(d.start,m.start),v=Math.min(c.count,Math.min(d.start+d.count,m.start+m.count));for(let y=S,P=v;y<P;y+=3){const R=y,T=y+1,I=y+2;s=os(this,f,t,n,l,h,u,R,T,I),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let d=g,f=_;d<f;d+=3){const S=d,v=d+1,y=d+2;s=os(this,a,t,n,l,h,u,S,v,y),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}}}function Fl(i,t,e,n,s,r,a,o){let c;if(t.side===Le?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Sn,o),c===null)return null;rs.copy(o),rs.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(rs);return l<e.near||l>e.far?null:{distance:l,point:rs.clone(),object:i}}function os(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,ei),i.getVertexPosition(c,ni),i.getVertexPosition(l,ii);const h=Fl(i,t,e,n,ei,ni,ii,ss);if(h){s&&(es.fromBufferAttribute(s,o),ns.fromBufferAttribute(s,c),is.fromBufferAttribute(s,l),h.uv=je.getInterpolation(ss,ei,ni,ii,es,ns,is,new pt)),r&&(es.fromBufferAttribute(r,o),ns.fromBufferAttribute(r,c),is.fromBufferAttribute(r,l),h.uv1=je.getInterpolation(ss,ei,ni,ii,es,ns,is,new pt)),a&&(Uo.fromBufferAttribute(a,o),No.fromBufferAttribute(a,c),Oo.fromBufferAttribute(a,l),h.normal=je.getInterpolation(ss,ei,ni,ii,Uo,No,Oo,new w),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new w,materialIndex:0};je.getNormal(ei,ni,ii,u.normal),h.face=u}return h}class rt extends Ne{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let p=0,m=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new re(l,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(u,2));function g(_,d,f,S,v,y,P,R,T,I,z){const x=y/T,A=P/I,q=y/2,Q=P/2,D=R/2,Y=T+1,k=I+1;let tt=0,X=0;const J=new w;for(let et=0;et<k;et++){const lt=et*A-Q;for(let _t=0;_t<Y;_t++){const It=_t*x-q;J[_]=It*S,J[d]=lt*v,J[f]=D,l.push(J.x,J.y,J.z),J[_]=0,J[d]=0,J[f]=R>0?1:-1,h.push(J.x,J.y,J.z),u.push(_t/T),u.push(1-et/I),tt+=1}}for(let et=0;et<I;et++)for(let lt=0;lt<T;lt++){const _t=p+lt+Y*et,It=p+lt+Y*(et+1),V=p+(lt+1)+Y*(et+1),st=p+(lt+1)+Y*et;c.push(_t,It,st),c.push(It,V,st),X+=6}o.addGroup(m,X,z),m+=X,p+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function _i(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ae(i){const t={};for(let e=0;e<i.length;e++){const n=_i(i[e]);for(const s in n)t[s]=n[s]}return t}function Bl(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Wa(i){return i.getRenderTarget()===null?i.outputColorSpace:Qt.workingColorSpace}const zl={clone:_i,merge:Ae};var Gl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yn extends Bi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gl,this.fragmentShader=Hl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_i(t.uniforms),this.uniformsGroups=Bl(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Xa extends de{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=on}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fn=new w,Fo=new pt,Bo=new pt;class Pe extends Xa{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=gi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ci*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return gi*2*Math.atan(Math.tan(Ci*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){fn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(fn.x,fn.y).multiplyScalar(-t/fn.z),fn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fn.x,fn.y).multiplyScalar(-t/fn.z)}getViewSize(t,e){return this.getViewBounds(t,Fo,Bo),e.subVectors(Bo,Fo)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ci*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const si=-90,ri=1;class kl extends de{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Pe(si,ri,t,e);s.layers=this.layers,this.add(s);const r=new Pe(si,ri,t,e);r.layers=this.layers,this.add(r);const a=new Pe(si,ri,t,e);a.layers=this.layers,this.add(a);const o=new Pe(si,ri,t,e);o.layers=this.layers,this.add(o);const c=new Pe(si,ri,t,e);c.layers=this.layers,this.add(c);const l=new Pe(si,ri,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===on)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===vs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=t.getRenderTarget(),p=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,p,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ya extends Re{constructor(t,e,n,s,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:fi,super(t,e,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Vl extends zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ya(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ce}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new rt(5,5,5),r=new yn({name:"CubemapFromEquirect",uniforms:_i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Le,blending:vn});r.uniforms.tEquirect.value=e;const a=new U(s,r),o=e.minFilter;return e.minFilter===On&&(e.minFilter=Ce),new kl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Qs=new w,Wl=new w,Xl=new Wt;class pn{constructor(t=new w(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Qs.subVectors(n,e).cross(Wl.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Qs),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Xl.getNormalMatrix(t),s=this.coplanarPoint(Qs).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pn=new Fi,as=new w;class br{constructor(t=new pn,e=new pn,n=new pn,s=new pn,r=new pn,a=new pn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=on){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],p=s[7],m=s[8],g=s[9],_=s[10],d=s[11],f=s[12],S=s[13],v=s[14],y=s[15];if(n[0].setComponents(c-r,p-l,d-m,y-f).normalize(),n[1].setComponents(c+r,p+l,d+m,y+f).normalize(),n[2].setComponents(c+a,p+h,d+g,y+S).normalize(),n[3].setComponents(c-a,p-h,d-g,y-S).normalize(),n[4].setComponents(c-o,p-u,d-_,y-v).normalize(),e===on)n[5].setComponents(c+o,p+u,d+_,y+v).normalize();else if(e===vs)n[5].setComponents(o,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Pn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Pn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Pn)}intersectsSprite(t){return Pn.center.set(0,0,0),Pn.radius=.7071067811865476,Pn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Pn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(as.x=s.normal.x>0?t.max.x:t.min.x,as.y=s.normal.y>0?t.max.y:t.min.y,as.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(as)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function qa(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Yl(i,t){const e=t.isWebGL2,n=new WeakMap;function s(l,h){const u=l.array,p=l.usage,m=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,p),l.onUploadCallback();let _;if(u instanceof Float32Array)_=i.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=i.SHORT;else if(u instanceof Uint32Array)_=i.UNSIGNED_INT;else if(u instanceof Int32Array)_=i.INT;else if(u instanceof Int8Array)_=i.BYTE;else if(u instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:m}}function r(l,h,u){const p=h.array,m=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,l),m.count===-1&&g.length===0&&i.bufferSubData(u,0,p),g.length!==0){for(let _=0,d=g.length;_<d;_++){const f=g[_];e?i.bufferSubData(u,f.start*p.BYTES_PER_ELEMENT,p,f.start,f.count):i.bufferSubData(u,f.start*p.BYTES_PER_ELEMENT,p.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}m.count!==-1&&(e?i.bufferSubData(u,m.offset*p.BYTES_PER_ELEMENT,p,m.offset,m.count):i.bufferSubData(u,m.offset*p.BYTES_PER_ELEMENT,p.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const p=n.get(l);(!p||p.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);if(u===void 0)n.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:a,remove:o,update:c}}class Ke extends Ne{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=t/o,p=e/c,m=[],g=[],_=[],d=[];for(let f=0;f<h;f++){const S=f*p-a;for(let v=0;v<l;v++){const y=v*u-r;g.push(y,-S,0),_.push(0,0,1),d.push(v/o),d.push(1-f/c)}}for(let f=0;f<c;f++)for(let S=0;S<o;S++){const v=S+l*f,y=S+l*(f+1),P=S+1+l*(f+1),R=S+1+l*f;m.push(v,y,R),m.push(y,P,R)}this.setIndex(m),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(_,3)),this.setAttribute("uv",new re(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ke(t.width,t.height,t.widthSegments,t.heightSegments)}}var ql=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jl=`#ifdef USE_ALPHAHASH
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
#endif`,Kl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jl=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$l=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ql=`#ifdef USE_AOMAP
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
#endif`,th=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eh=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,nh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ih=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,oh=`#ifdef USE_IRIDESCENCE
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
#endif`,ah=`#ifdef USE_BUMPMAP
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
#endif`,ch=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ph=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,mh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,gh=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,_h=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vh=`vec3 transformedNormal = objectNormal;
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
#endif`,xh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Eh="gl_FragColor = linearToOutputTexel( gl_FragColor );",wh=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Th=`#ifdef USE_ENVMAP
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
#endif`,bh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ah=`#ifdef USE_ENVMAP
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
#endif`,Rh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ch=`#ifdef USE_ENVMAP
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
#endif`,Ph=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ih=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Uh=`#ifdef USE_GRADIENTMAP
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
}`,Nh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Oh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zh=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,Gh=`#ifdef USE_ENVMAP
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
#endif`,Hh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xh=`PhysicalMaterial material;
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
#endif`,Yh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,qh=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,jh=`#if defined( RE_IndirectDiffuse )
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
#endif`,Kh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$h=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Qh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,tu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,iu=`#if defined( USE_POINTS_UV )
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
#endif`,su=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ru=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ou=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,au=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,lu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
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
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,hu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,uu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,du=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gu=`#ifdef USE_NORMALMAP
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
#endif`,_u=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Su=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,Eu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Au=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ru=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Pu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Lu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Du=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Iu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Uu=`#ifdef USE_SKINNING
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
#endif`,Nu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ou=`#ifdef USE_SKINNING
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
#endif`,Fu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gu=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hu=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ku=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Vu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ju=`uniform sampler2D t2D;
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
}`,Ku=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ju=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$u=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qu=`#include <common>
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
}`,td=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,ed=`#define DISTANCE
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
}`,nd=`#define DISTANCE
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
}`,id=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rd=`uniform float scale;
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
}`,od=`uniform vec3 diffuse;
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
}`,ad=`#include <common>
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
}`,cd=`uniform vec3 diffuse;
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
}`,ld=`#define LAMBERT
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
}`,hd=`#define LAMBERT
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
}`,ud=`#define MATCAP
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
}`,dd=`#define MATCAP
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
}`,fd=`#define NORMAL
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
}`,pd=`#define NORMAL
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
}`,md=`#define PHONG
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
}`,gd=`#define PHONG
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
}`,_d=`#define STANDARD
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
}`,vd=`#define STANDARD
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
}`,xd=`#define TOON
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
}`,Md=`#define TOON
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
}`,Sd=`uniform float size;
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
}`,yd=`uniform vec3 diffuse;
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
}`,Ed=`#include <common>
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
}`,wd=`uniform vec3 color;
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
}`,Td=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,bd=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:ql,alphahash_pars_fragment:jl,alphamap_fragment:Kl,alphamap_pars_fragment:Zl,alphatest_fragment:Jl,alphatest_pars_fragment:$l,aomap_fragment:Ql,aomap_pars_fragment:th,batching_pars_vertex:eh,batching_vertex:nh,begin_vertex:ih,beginnormal_vertex:sh,bsdfs:rh,iridescence_fragment:oh,bumpmap_pars_fragment:ah,clipping_planes_fragment:ch,clipping_planes_pars_fragment:lh,clipping_planes_pars_vertex:hh,clipping_planes_vertex:uh,color_fragment:dh,color_pars_fragment:fh,color_pars_vertex:ph,color_vertex:mh,common:gh,cube_uv_reflection_fragment:_h,defaultnormal_vertex:vh,displacementmap_pars_vertex:xh,displacementmap_vertex:Mh,emissivemap_fragment:Sh,emissivemap_pars_fragment:yh,colorspace_fragment:Eh,colorspace_pars_fragment:wh,envmap_fragment:Th,envmap_common_pars_fragment:bh,envmap_pars_fragment:Ah,envmap_pars_vertex:Rh,envmap_physical_pars_fragment:Gh,envmap_vertex:Ch,fog_vertex:Ph,fog_pars_vertex:Lh,fog_fragment:Dh,fog_pars_fragment:Ih,gradientmap_pars_fragment:Uh,lightmap_fragment:Nh,lightmap_pars_fragment:Oh,lights_lambert_fragment:Fh,lights_lambert_pars_fragment:Bh,lights_pars_begin:zh,lights_toon_fragment:Hh,lights_toon_pars_fragment:kh,lights_phong_fragment:Vh,lights_phong_pars_fragment:Wh,lights_physical_fragment:Xh,lights_physical_pars_fragment:Yh,lights_fragment_begin:qh,lights_fragment_maps:jh,lights_fragment_end:Kh,logdepthbuf_fragment:Zh,logdepthbuf_pars_fragment:Jh,logdepthbuf_pars_vertex:$h,logdepthbuf_vertex:Qh,map_fragment:tu,map_pars_fragment:eu,map_particle_fragment:nu,map_particle_pars_fragment:iu,metalnessmap_fragment:su,metalnessmap_pars_fragment:ru,morphinstance_vertex:ou,morphcolor_vertex:au,morphnormal_vertex:cu,morphtarget_pars_vertex:lu,morphtarget_vertex:hu,normal_fragment_begin:uu,normal_fragment_maps:du,normal_pars_fragment:fu,normal_pars_vertex:pu,normal_vertex:mu,normalmap_pars_fragment:gu,clearcoat_normal_fragment_begin:_u,clearcoat_normal_fragment_maps:vu,clearcoat_pars_fragment:xu,iridescence_pars_fragment:Mu,opaque_fragment:Su,packing:yu,premultiplied_alpha_fragment:Eu,project_vertex:wu,dithering_fragment:Tu,dithering_pars_fragment:bu,roughnessmap_fragment:Au,roughnessmap_pars_fragment:Ru,shadowmap_pars_fragment:Cu,shadowmap_pars_vertex:Pu,shadowmap_vertex:Lu,shadowmask_pars_fragment:Du,skinbase_vertex:Iu,skinning_pars_vertex:Uu,skinning_vertex:Nu,skinnormal_vertex:Ou,specularmap_fragment:Fu,specularmap_pars_fragment:Bu,tonemapping_fragment:zu,tonemapping_pars_fragment:Gu,transmission_fragment:Hu,transmission_pars_fragment:ku,uv_pars_fragment:Vu,uv_pars_vertex:Wu,uv_vertex:Xu,worldpos_vertex:Yu,background_vert:qu,background_frag:ju,backgroundCube_vert:Ku,backgroundCube_frag:Zu,cube_vert:Ju,cube_frag:$u,depth_vert:Qu,depth_frag:td,distanceRGBA_vert:ed,distanceRGBA_frag:nd,equirect_vert:id,equirect_frag:sd,linedashed_vert:rd,linedashed_frag:od,meshbasic_vert:ad,meshbasic_frag:cd,meshlambert_vert:ld,meshlambert_frag:hd,meshmatcap_vert:ud,meshmatcap_frag:dd,meshnormal_vert:fd,meshnormal_frag:pd,meshphong_vert:md,meshphong_frag:gd,meshphysical_vert:_d,meshphysical_frag:vd,meshtoon_vert:xd,meshtoon_frag:Md,points_vert:Sd,points_frag:yd,shadow_vert:Ed,shadow_frag:wd,sprite_vert:Td,sprite_frag:bd},ut={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},Xe={basic:{uniforms:Ae([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Ae([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Ae([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Ae([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Ae([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Ae([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Ae([ut.points,ut.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Ae([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Ae([ut.common,ut.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Ae([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Ae([ut.sprite,ut.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:Ae([ut.common,ut.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:Ae([ut.lights,ut.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};Xe.physical={uniforms:Ae([Xe.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const cs={r:0,b:0,g:0},Ln=new Je,Ad=new te;function Rd(i,t,e,n,s,r,a){const o=new Ft(0);let c=r===!0?0:1,l,h,u=null,p=0,m=null;function g(d,f){let S=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?e:t).get(v)),v===null?_(o,c):v&&v.isColor&&(_(v,1),S=!0);const y=i.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===ys)?(h===void 0&&(h=new U(new rt(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:_i(Xe.backgroundCube.uniforms),vertexShader:Xe.backgroundCube.vertexShader,fragmentShader:Xe.backgroundCube.fragmentShader,side:Le,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,R,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ln.copy(f.backgroundRotation),Ln.x*=-1,Ln.y*=-1,Ln.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ln.y*=-1,Ln.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ad.makeRotationFromEuler(Ln)),h.material.toneMapped=Qt.getTransfer(v.colorSpace)!==se,(u!==v||p!==v.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,p=v.version,m=i.toneMapping),h.layers.enableAll(),d.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new U(new Ke(2,2),new yn({name:"BackgroundMaterial",uniforms:_i(Xe.background.uniforms),vertexShader:Xe.background.vertexShader,fragmentShader:Xe.background.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(v.colorSpace)!==se,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||p!==v.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,p=v.version,m=i.toneMapping),l.layers.enableAll(),d.unshift(l,l.geometry,l.material,0,0,null))}function _(d,f){d.getRGB(cs,Wa(i)),n.buffers.color.setClear(cs.r,cs.g,cs.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(d,f=1){o.set(d),c=f,_(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(d){c=d,_(o,c)},render:g}}function Cd(i,t,e,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=d(null);let l=c,h=!1;function u(D,Y,k,tt,X){let J=!1;if(a){const et=_(tt,k,Y);l!==et&&(l=et,m(l.object)),J=f(D,tt,k,X),J&&S(D,tt,k,X)}else{const et=Y.wireframe===!0;(l.geometry!==tt.id||l.program!==k.id||l.wireframe!==et)&&(l.geometry=tt.id,l.program=k.id,l.wireframe=et,J=!0)}X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(J||h)&&(h=!1,I(D,Y,k,tt),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function p(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(D){return n.isWebGL2?i.bindVertexArray(D):r.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?i.deleteVertexArray(D):r.deleteVertexArrayOES(D)}function _(D,Y,k){const tt=k.wireframe===!0;let X=o[D.id];X===void 0&&(X={},o[D.id]=X);let J=X[Y.id];J===void 0&&(J={},X[Y.id]=J);let et=J[tt];return et===void 0&&(et=d(p()),J[tt]=et),et}function d(D){const Y=[],k=[],tt=[];for(let X=0;X<s;X++)Y[X]=0,k[X]=0,tt[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:k,attributeDivisors:tt,object:D,attributes:{},index:null}}function f(D,Y,k,tt){const X=l.attributes,J=Y.attributes;let et=0;const lt=k.getAttributes();for(const _t in lt)if(lt[_t].location>=0){const V=X[_t];let st=J[_t];if(st===void 0&&(_t==="instanceMatrix"&&D.instanceMatrix&&(st=D.instanceMatrix),_t==="instanceColor"&&D.instanceColor&&(st=D.instanceColor)),V===void 0||V.attribute!==st||st&&V.data!==st.data)return!0;et++}return l.attributesNum!==et||l.index!==tt}function S(D,Y,k,tt){const X={},J=Y.attributes;let et=0;const lt=k.getAttributes();for(const _t in lt)if(lt[_t].location>=0){let V=J[_t];V===void 0&&(_t==="instanceMatrix"&&D.instanceMatrix&&(V=D.instanceMatrix),_t==="instanceColor"&&D.instanceColor&&(V=D.instanceColor));const st={};st.attribute=V,V&&V.data&&(st.data=V.data),X[_t]=st,et++}l.attributes=X,l.attributesNum=et,l.index=tt}function v(){const D=l.newAttributes;for(let Y=0,k=D.length;Y<k;Y++)D[Y]=0}function y(D){P(D,0)}function P(D,Y){const k=l.newAttributes,tt=l.enabledAttributes,X=l.attributeDivisors;k[D]=1,tt[D]===0&&(i.enableVertexAttribArray(D),tt[D]=1),X[D]!==Y&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,Y),X[D]=Y)}function R(){const D=l.newAttributes,Y=l.enabledAttributes;for(let k=0,tt=Y.length;k<tt;k++)Y[k]!==D[k]&&(i.disableVertexAttribArray(k),Y[k]=0)}function T(D,Y,k,tt,X,J,et){et===!0?i.vertexAttribIPointer(D,Y,k,X,J):i.vertexAttribPointer(D,Y,k,tt,X,J)}function I(D,Y,k,tt){if(n.isWebGL2===!1&&(D.isInstancedMesh||tt.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const X=tt.attributes,J=k.getAttributes(),et=Y.defaultAttributeValues;for(const lt in J){const _t=J[lt];if(_t.location>=0){let It=X[lt];if(It===void 0&&(lt==="instanceMatrix"&&D.instanceMatrix&&(It=D.instanceMatrix),lt==="instanceColor"&&D.instanceColor&&(It=D.instanceColor)),It!==void 0){const V=It.normalized,st=It.itemSize,gt=e.get(It);if(gt===void 0)continue;const Lt=gt.buffer,wt=gt.type,vt=gt.bytesPerElement,Zt=n.isWebGL2===!0&&(wt===i.INT||wt===i.UNSIGNED_INT||It.gpuType===Ta);if(It.isInterleavedBufferAttribute){const Pt=It.data,O=Pt.stride,pe=It.offset;if(Pt.isInstancedInterleavedBuffer){for(let bt=0;bt<_t.locationSize;bt++)P(_t.location+bt,Pt.meshPerAttribute);D.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=Pt.meshPerAttribute*Pt.count)}else for(let bt=0;bt<_t.locationSize;bt++)y(_t.location+bt);i.bindBuffer(i.ARRAY_BUFFER,Lt);for(let bt=0;bt<_t.locationSize;bt++)T(_t.location+bt,st/_t.locationSize,wt,V,O*vt,(pe+st/_t.locationSize*bt)*vt,Zt)}else{if(It.isInstancedBufferAttribute){for(let Pt=0;Pt<_t.locationSize;Pt++)P(_t.location+Pt,It.meshPerAttribute);D.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=It.meshPerAttribute*It.count)}else for(let Pt=0;Pt<_t.locationSize;Pt++)y(_t.location+Pt);i.bindBuffer(i.ARRAY_BUFFER,Lt);for(let Pt=0;Pt<_t.locationSize;Pt++)T(_t.location+Pt,st/_t.locationSize,wt,V,st*vt,st/_t.locationSize*Pt*vt,Zt)}}else if(et!==void 0){const V=et[lt];if(V!==void 0)switch(V.length){case 2:i.vertexAttrib2fv(_t.location,V);break;case 3:i.vertexAttrib3fv(_t.location,V);break;case 4:i.vertexAttrib4fv(_t.location,V);break;default:i.vertexAttrib1fv(_t.location,V)}}}}R()}function z(){q();for(const D in o){const Y=o[D];for(const k in Y){const tt=Y[k];for(const X in tt)g(tt[X].object),delete tt[X];delete Y[k]}delete o[D]}}function x(D){if(o[D.id]===void 0)return;const Y=o[D.id];for(const k in Y){const tt=Y[k];for(const X in tt)g(tt[X].object),delete tt[X];delete Y[k]}delete o[D.id]}function A(D){for(const Y in o){const k=o[Y];if(k[D.id]===void 0)continue;const tt=k[D.id];for(const X in tt)g(tt[X].object),delete tt[X];delete k[D.id]}}function q(){Q(),h=!0,l!==c&&(l=c,m(l.object))}function Q(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:q,resetDefaultState:Q,dispose:z,releaseStatesOfGeometry:x,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:y,disableUnusedAttributes:R}}function Pd(i,t,e,n){const s=n.isWebGL2;let r;function a(h){r=h}function o(h,u){i.drawArrays(r,h,u),e.update(u,r,1)}function c(h,u,p){if(p===0)return;let m,g;if(s)m=i,g="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,u,p),e.update(u,r,p)}function l(h,u,p){if(p===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<p;g++)this.render(h[g],u[g]);else{m.multiDrawArraysWEBGL(r,h,0,u,0,p);let g=0;for(let _=0;_<p;_++)g+=u[_];e.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function Ld(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),d=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=p>0,y=a||t.has("OES_texture_float"),P=v&&y,R=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:d,maxVaryings:f,maxFragmentUniforms:S,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:P,maxSamples:R}}function Dd(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new pn,o=new Wt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){const m=u.length!==0||p||n!==0||s;return s=p,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,p){e=h(u,p,0)},this.setState=function(u,p,m){const g=u.clippingPlanes,_=u.clipIntersection,d=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!d)r?h(null):l();else{const S=r?0:n,v=S*4;let y=f.clippingState||null;c.value=y,y=h(g,p,v,m);for(let P=0;P!==v;++P)y[P]=e[P];f.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,p,m,g){const _=u!==null?u.length:0;let d=null;if(_!==0){if(d=c.value,g!==!0||d===null){const f=m+_*4,S=p.matrixWorldInverse;o.getNormalMatrix(S),(d===null||d.length<f)&&(d=new Float32Array(f));for(let v=0,y=m;v!==_;++v,y+=4)a.copy(u[v]).applyMatrix4(S,o),a.normal.toArray(d,y),d[y+3]=a.constant}c.value=d,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,d}}function Id(i){let t=new WeakMap;function e(a,o){return o===pr?a.mapping=fi:o===mr&&(a.mapping=pi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===pr||o===mr)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Vl(c.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class ja extends Xa{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const li=4,zo=[.125,.215,.35,.446,.526,.582],Nn=20,tr=new ja,Go=new Ft;let er=null,nr=0,ir=0;const In=(1+Math.sqrt(5))/2,oi=1/In,Ho=[new w(1,1,1),new w(-1,1,1),new w(1,1,-1),new w(-1,1,-1),new w(0,In,oi),new w(0,In,-oi),new w(oi,0,In),new w(-oi,0,In),new w(In,oi,0),new w(-In,oi,0)];class ko{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){er=this._renderer.getRenderTarget(),nr=this._renderer.getActiveCubeFace(),ir=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(er,nr,ir),t.scissorTest=!1,ls(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===fi||t.mapping===pi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),er=this._renderer.getRenderTarget(),nr=this._renderer.getActiveCubeFace(),ir=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ce,minFilter:Ce,generateMipmaps:!1,type:Ni,format:ke,colorSpace:En,depthBuffer:!1},s=Vo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vo(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ud(r)),this._blurMaterial=Nd(r,t,e)}return s}_compileMaterial(t){const e=new U(this._lodPlanes[0],t);this._renderer.compile(e,tr)}_sceneToCubeUV(t,e,n,s){const o=new Pe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(Go),h.toneMapping=xn,h.autoClear=!1;const m=new Tr({name:"PMREM.Background",side:Le,depthWrite:!1,depthTest:!1}),g=new U(new rt,m);let _=!1;const d=t.background;d?d.isColor&&(m.color.copy(d),t.background=null,_=!0):(m.color.copy(Go),_=!0);for(let f=0;f<6;f++){const S=f%3;S===0?(o.up.set(0,c[f],0),o.lookAt(l[f],0,0)):S===1?(o.up.set(0,0,c[f]),o.lookAt(0,l[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,l[f]));const v=this._cubeSize;ls(s,S*v,f>2?v:0,v,v),h.setRenderTarget(s),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=p,h.autoClear=u,t.background=d}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===fi||t.mapping===pi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wo());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new U(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;ls(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,tr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ho[(s-1)%Ho.length];this._blur(t,s-1,s,r,a)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new U(this._lodPlanes[s],l),p=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Nn-1),_=r/g,d=isFinite(r)?1+Math.floor(h*_):Nn;d>Nn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${Nn}`);const f=[];let S=0;for(let T=0;T<Nn;++T){const I=T/_,z=Math.exp(-I*I/2);f.push(z),T===0?S+=z:T<d&&(S+=2*z)}for(let T=0;T<f.length;T++)f[T]=f[T]/S;p.envMap.value=t.texture,p.samples.value=d,p.weights.value=f,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:v}=this;p.dTheta.value=g,p.mipInt.value=v-n;const y=this._sizeLods[s],P=3*y*(s>v-li?s-v+li:0),R=4*(this._cubeSize-y);ls(e,P,R,3*y,2*y),c.setRenderTarget(e),c.render(u,tr)}}function Ud(i){const t=[],e=[],n=[];let s=i;const r=i-li+1+zo.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-li?c=zo[a-i+li-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,p=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,_=3,d=2,f=1,S=new Float32Array(_*g*m),v=new Float32Array(d*g*m),y=new Float32Array(f*g*m);for(let R=0;R<m;R++){const T=R%3*2/3-1,I=R>2?0:-1,z=[T,I,0,T+2/3,I,0,T+2/3,I+1,0,T,I,0,T+2/3,I+1,0,T,I+1,0];S.set(z,_*g*R),v.set(p,d*g*R);const x=[R,R,R,R,R,R];y.set(x,f*g*R)}const P=new Ne;P.setAttribute("position",new Ve(S,_)),P.setAttribute("uv",new Ve(v,d)),P.setAttribute("faceIndex",new Ve(y,f)),t.push(P),s>li&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Vo(i,t,e){const n=new zn(i,t,e);return n.texture.mapping=ys,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ls(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Nd(i,t,e){const n=new Float32Array(Nn),s=new w(0,1,0);return new yn({name:"SphericalGaussianBlur",defines:{n:Nn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ar(),fragmentShader:`

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
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Wo(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ar(),fragmentShader:`

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
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Xo(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ar(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Ar(){return`

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
	`}function Od(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===pr||c===mr,h=c===fi||c===pi;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new ko(i)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{const u=o.image;if(l&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new ko(i));const p=l?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,p),o.addEventListener("dispose",r),p.texture}else return null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Fd(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Bd(i,t,e,n){const s={},r=new WeakMap;function a(u){const p=u.target;p.index!==null&&t.remove(p.index);for(const g in p.attributes)t.remove(p.attributes[g]);for(const g in p.morphAttributes){const _=p.morphAttributes[g];for(let d=0,f=_.length;d<f;d++)t.remove(_[d])}p.removeEventListener("dispose",a),delete s[p.id];const m=r.get(p);m&&(t.remove(m),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function o(u,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,e.memory.geometries++),p}function c(u){const p=u.attributes;for(const g in p)t.update(p[g],i.ARRAY_BUFFER);const m=u.morphAttributes;for(const g in m){const _=m[g];for(let d=0,f=_.length;d<f;d++)t.update(_[d],i.ARRAY_BUFFER)}}function l(u){const p=[],m=u.index,g=u.attributes.position;let _=0;if(m!==null){const S=m.array;_=m.version;for(let v=0,y=S.length;v<y;v+=3){const P=S[v+0],R=S[v+1],T=S[v+2];p.push(P,R,R,T,T,P)}}else if(g!==void 0){const S=g.array;_=g.version;for(let v=0,y=S.length/3-1;v<y;v+=3){const P=v+0,R=v+1,T=v+2;p.push(P,R,R,T,T,P)}}else return;const d=new(Na(p)?Va:ka)(p,1);d.version=_;const f=r.get(u);f&&t.remove(f),r.set(u,d)}function h(u){const p=r.get(u);if(p){const m=u.index;m!==null&&p.version<m.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function zd(i,t,e,n){const s=n.isWebGL2;let r;function a(m){r=m}let o,c;function l(m){o=m.type,c=m.bytesPerElement}function h(m,g){i.drawElements(r,g,o,m*c),e.update(g,r,1)}function u(m,g,_){if(_===0)return;let d,f;if(s)d=i,f="drawElementsInstanced";else if(d=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](r,g,o,m*c,_),e.update(g,r,_)}function p(m,g,_){if(_===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<_;f++)this.render(m[f]/c,g[f]);else{d.multiDrawElementsWEBGL(r,g,0,o,m,0,_);let f=0;for(let S=0;S<_;S++)f+=g[S];e.update(f,r,1)}}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=p}function Gd(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Hd(i,t){return i[0]-t[0]}function kd(i,t){return Math.abs(t[1])-Math.abs(i[1])}function Vd(i,t,e){const n={},s=new Float32Array(8),r=new WeakMap,a=new ae,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,u){const p=l.morphTargetInfluences;if(t.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let d=r.get(h);if(d===void 0||d.count!==_){let Q=function(){A.dispose(),r.delete(h),h.removeEventListener("dispose",Q)};var m=Q;d!==void 0&&d.texture.dispose();const f=h.morphAttributes.position!==void 0,S=h.morphAttributes.normal!==void 0,v=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],P=h.morphAttributes.normal||[],R=h.morphAttributes.color||[];let T=0;f===!0&&(T=1),S===!0&&(T=2),v===!0&&(T=3);let I=h.attributes.position.count*T,z=1;I>t.maxTextureSize&&(z=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const x=new Float32Array(I*z*4*_),A=new Ba(x,I,z,_);A.type=qe,A.needsUpdate=!0;const q=T*4;for(let D=0;D<_;D++){const Y=y[D],k=P[D],tt=R[D],X=I*z*4*D;for(let J=0;J<Y.count;J++){const et=J*q;f===!0&&(a.fromBufferAttribute(Y,J),x[X+et+0]=a.x,x[X+et+1]=a.y,x[X+et+2]=a.z,x[X+et+3]=0),S===!0&&(a.fromBufferAttribute(k,J),x[X+et+4]=a.x,x[X+et+5]=a.y,x[X+et+6]=a.z,x[X+et+7]=0),v===!0&&(a.fromBufferAttribute(tt,J),x[X+et+8]=a.x,x[X+et+9]=a.y,x[X+et+10]=a.z,x[X+et+11]=tt.itemSize===4?a.w:1)}}d={count:_,texture:A,size:new pt(I,z)},r.set(h,d),h.addEventListener("dispose",Q)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)u.getUniforms().setValue(i,"morphTexture",l.morphTexture,e);else{let f=0;for(let v=0;v<p.length;v++)f+=p[v];const S=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(i,"morphTargetBaseInfluence",S),u.getUniforms().setValue(i,"morphTargetInfluences",p)}u.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}else{const g=p===void 0?0:p.length;let _=n[h.id];if(_===void 0||_.length!==g){_=[];for(let y=0;y<g;y++)_[y]=[y,0];n[h.id]=_}for(let y=0;y<g;y++){const P=_[y];P[0]=y,P[1]=p[y]}_.sort(kd);for(let y=0;y<8;y++)y<g&&_[y][1]?(o[y][0]=_[y][0],o[y][1]=_[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(Hd);const d=h.morphAttributes.position,f=h.morphAttributes.normal;let S=0;for(let y=0;y<8;y++){const P=o[y],R=P[0],T=P[1];R!==Number.MAX_SAFE_INTEGER&&T?(d&&h.getAttribute("morphTarget"+y)!==d[R]&&h.setAttribute("morphTarget"+y,d[R]),f&&h.getAttribute("morphNormal"+y)!==f[R]&&h.setAttribute("morphNormal"+y,f[R]),s[y]=T,S+=T):(d&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),f&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),s[y]=0)}const v=h.morphTargetsRelative?1:1-S;u.getUniforms().setValue(i,"morphTargetBaseInfluence",v),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function Wd(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==l&&(p.update(),s.set(p,l))}return u}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class Ka extends Re{constructor(t,e,n,s,r,a,o,c,l,h){if(h=h!==void 0?h:Bn,h!==Bn&&h!==mi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Bn&&(n=gn),n===void 0&&h===mi&&(n=Fn),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Se,this.minFilter=c!==void 0?c:Se,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Za=new Re,Ja=new Ka(1,1);Ja.compareFunction=Ua;const $a=new Ba,Qa=new bl,tc=new Ya,Yo=[],qo=[],jo=new Float32Array(16),Ko=new Float32Array(9),Zo=new Float32Array(4);function xi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Yo[s];if(r===void 0&&(r=new Float32Array(s),Yo[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function me(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ge(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ws(i,t){let e=qo[t];e===void 0&&(e=new Int32Array(t),qo[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Xd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Yd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2fv(this.addr,t),ge(e,t)}}function qd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(me(e,t))return;i.uniform3fv(this.addr,t),ge(e,t)}}function jd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4fv(this.addr,t),ge(e,t)}}function Kd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;Zo.set(n),i.uniformMatrix2fv(this.addr,!1,Zo),ge(e,n)}}function Zd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;Ko.set(n),i.uniformMatrix3fv(this.addr,!1,Ko),ge(e,n)}}function Jd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;jo.set(n),i.uniformMatrix4fv(this.addr,!1,jo),ge(e,n)}}function $d(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Qd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2iv(this.addr,t),ge(e,t)}}function tf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;i.uniform3iv(this.addr,t),ge(e,t)}}function ef(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4iv(this.addr,t),ge(e,t)}}function nf(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function sf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2uiv(this.addr,t),ge(e,t)}}function rf(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;i.uniform3uiv(this.addr,t),ge(e,t)}}function of(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4uiv(this.addr,t),ge(e,t)}}function af(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?Ja:Za;e.setTexture2D(t||r,s)}function cf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Qa,s)}function lf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||tc,s)}function hf(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||$a,s)}function uf(i){switch(i){case 5126:return Xd;case 35664:return Yd;case 35665:return qd;case 35666:return jd;case 35674:return Kd;case 35675:return Zd;case 35676:return Jd;case 5124:case 35670:return $d;case 35667:case 35671:return Qd;case 35668:case 35672:return tf;case 35669:case 35673:return ef;case 5125:return nf;case 36294:return sf;case 36295:return rf;case 36296:return of;case 35678:case 36198:case 36298:case 36306:case 35682:return af;case 35679:case 36299:case 36307:return cf;case 35680:case 36300:case 36308:case 36293:return lf;case 36289:case 36303:case 36311:case 36292:return hf}}function df(i,t){i.uniform1fv(this.addr,t)}function ff(i,t){const e=xi(t,this.size,2);i.uniform2fv(this.addr,e)}function pf(i,t){const e=xi(t,this.size,3);i.uniform3fv(this.addr,e)}function mf(i,t){const e=xi(t,this.size,4);i.uniform4fv(this.addr,e)}function gf(i,t){const e=xi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function _f(i,t){const e=xi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function vf(i,t){const e=xi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function xf(i,t){i.uniform1iv(this.addr,t)}function Mf(i,t){i.uniform2iv(this.addr,t)}function Sf(i,t){i.uniform3iv(this.addr,t)}function yf(i,t){i.uniform4iv(this.addr,t)}function Ef(i,t){i.uniform1uiv(this.addr,t)}function wf(i,t){i.uniform2uiv(this.addr,t)}function Tf(i,t){i.uniform3uiv(this.addr,t)}function bf(i,t){i.uniform4uiv(this.addr,t)}function Af(i,t,e){const n=this.cache,s=t.length,r=ws(e,s);me(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Za,r[a])}function Rf(i,t,e){const n=this.cache,s=t.length,r=ws(e,s);me(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Qa,r[a])}function Cf(i,t,e){const n=this.cache,s=t.length,r=ws(e,s);me(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||tc,r[a])}function Pf(i,t,e){const n=this.cache,s=t.length,r=ws(e,s);me(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||$a,r[a])}function Lf(i){switch(i){case 5126:return df;case 35664:return ff;case 35665:return pf;case 35666:return mf;case 35674:return gf;case 35675:return _f;case 35676:return vf;case 5124:case 35670:return xf;case 35667:case 35671:return Mf;case 35668:case 35672:return Sf;case 35669:case 35673:return yf;case 5125:return Ef;case 36294:return wf;case 36295:return Tf;case 36296:return bf;case 35678:case 36198:case 36298:case 36306:case 35682:return Af;case 35679:case 36299:case 36307:return Rf;case 35680:case 36300:case 36308:case 36293:return Cf;case 36289:case 36303:case 36311:case 36292:return Pf}}class Df{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=uf(e.type)}}class If{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Lf(e.type)}}class Uf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const sr=/(\w+)(\])?(\[|\.)?/g;function Jo(i,t){i.seq.push(t),i.map[t.id]=t}function Nf(i,t,e){const n=i.name,s=n.length;for(sr.lastIndex=0;;){const r=sr.exec(n),a=sr.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Jo(e,l===void 0?new Df(o,i,t):new If(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Uf(o),Jo(e,u)),e=u}}}class fs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Nf(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function $o(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Of=37297;let Ff=0;function Bf(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function zf(i){const t=Qt.getPrimaries(Qt.workingColorSpace),e=Qt.getPrimaries(i);let n;switch(t===e?n="":t===_s&&e===gs?n="LinearDisplayP3ToLinearSRGB":t===gs&&e===_s&&(n="LinearSRGBToLinearDisplayP3"),i){case En:case Es:return[n,"LinearTransferOETF"];case We:case Er:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Qo(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Bf(i.getShaderSource(t),a)}else return s}function Gf(i,t){const e=zf(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Hf(i,t){let e;switch(t){case Fc:e="Linear";break;case Bc:e="Reinhard";break;case zc:e="OptimizedCineon";break;case Ea:e="ACESFilmic";break;case Hc:e="AgX";break;case kc:e="Neutral";break;case Gc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function kf(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(hi).join(`
`)}function Vf(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hi).join(`
`)}function Wf(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Xf(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function hi(i){return i!==""}function ta(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ea(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Yf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mr(i){return i.replace(Yf,jf)}const qf=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function jf(i,t){let e=Vt[t];if(e===void 0){const n=qf.get(t);if(n!==void 0)e=Vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Mr(e)}const Kf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function na(i){return i.replace(Kf,Zf)}function Zf(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ia(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	`;return i.isWebGL2&&(t+=`precision ${i.precision} sampler3D;
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
		`),i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Jf(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ma?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Sa?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===rn&&(t="SHADOWMAP_TYPE_VSM"),t}function $f(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case fi:case pi:t="ENVMAP_TYPE_CUBE";break;case ys:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Qf(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case pi:t="ENVMAP_MODE_REFRACTION";break}return t}function tp(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ya:t="ENVMAP_BLENDING_MULTIPLY";break;case Nc:t="ENVMAP_BLENDING_MIX";break;case Oc:t="ENVMAP_BLENDING_ADD";break}return t}function ep(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function np(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=Jf(e),l=$f(e),h=Qf(e),u=tp(e),p=ep(e),m=e.isWebGL2?"":kf(e),g=Vf(e),_=Wf(r),d=s.createProgram();let f,S,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(hi).join(`
`),f.length>0&&(f+=`
`),S=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(hi).join(`
`),S.length>0&&(S+=`
`)):(f=[ia(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hi).join(`
`),S=[m,ia(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==xn?"#define TONE_MAPPING":"",e.toneMapping!==xn?Vt.tonemapping_pars_fragment:"",e.toneMapping!==xn?Hf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,Gf("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(hi).join(`
`)),a=Mr(a),a=ta(a,e),a=ea(a,e),o=Mr(o),o=ta(o,e),o=ea(o,e),a=na(a),o=na(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,S=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===xo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===xo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const y=v+f+a,P=v+S+o,R=$o(s,s.VERTEX_SHADER,y),T=$o(s,s.FRAGMENT_SHADER,P);s.attachShader(d,R),s.attachShader(d,T),e.index0AttributeName!==void 0?s.bindAttribLocation(d,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(d,0,"position"),s.linkProgram(d);function I(q){if(i.debug.checkShaderErrors){const Q=s.getProgramInfoLog(d).trim(),D=s.getShaderInfoLog(R).trim(),Y=s.getShaderInfoLog(T).trim();let k=!0,tt=!0;if(s.getProgramParameter(d,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,d,R,T);else{const X=Qo(s,R,"vertex"),J=Qo(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(d,s.VALIDATE_STATUS)+`

Material Name: `+q.name+`
Material Type: `+q.type+`

Program Info Log: `+Q+`
`+X+`
`+J)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(D===""||Y==="")&&(tt=!1);tt&&(q.diagnostics={runnable:k,programLog:Q,vertexShader:{log:D,prefix:f},fragmentShader:{log:Y,prefix:S}})}s.deleteShader(R),s.deleteShader(T),z=new fs(s,d),x=Xf(s,d)}let z;this.getUniforms=function(){return z===void 0&&I(this),z};let x;this.getAttributes=function(){return x===void 0&&I(this),x};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(d,Of)),A},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(d),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ff++,this.cacheKey=t,this.usedTimes=1,this.program=d,this.vertexShader=R,this.fragmentShader=T,this}let ip=0;class sp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new rp(t),e.set(t,n)),n}}class rp{constructor(t){this.id=ip++,this.code=t,this.usedTimes=0}}function op(i,t,e,n,s,r,a){const o=new Ga,c=new sp,l=new Set,h=[],u=s.isWebGL2,p=s.logarithmicDepthBuffer,m=s.vertexTextures;let g=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x){return l.add(x),x===0?"uv":`uv${x}`}function f(x,A,q,Q,D){const Y=Q.fog,k=D.geometry,tt=x.isMeshStandardMaterial?Q.environment:null,X=(x.isMeshStandardMaterial?e:t).get(x.envMap||tt),J=X&&X.mapping===ys?X.image.height:null,et=_[x.type];x.precision!==null&&(g=s.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const lt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,_t=lt!==void 0?lt.length:0;let It=0;k.morphAttributes.position!==void 0&&(It=1),k.morphAttributes.normal!==void 0&&(It=2),k.morphAttributes.color!==void 0&&(It=3);let V,st,gt,Lt;if(et){const $t=Xe[et];V=$t.vertexShader,st=$t.fragmentShader}else V=x.vertexShader,st=x.fragmentShader,c.update(x),gt=c.getVertexShaderID(x),Lt=c.getFragmentShaderID(x);const wt=i.getRenderTarget(),vt=D.isInstancedMesh===!0,Zt=D.isBatchedMesh===!0,Pt=!!x.map,O=!!x.matcap,pe=!!X,bt=!!x.aoMap,Bt=!!x.lightMap,At=!!x.bumpMap,jt=!!x.normalMap,zt=!!x.displacementMap,Ht=!!x.emissiveMap,ne=!!x.metalnessMap,b=!!x.roughnessMap,M=x.anisotropy>0,W=x.clearcoat>0,K=x.iridescence>0,ot=x.sheen>0,nt=x.transmission>0,Ut=M&&!!x.anisotropyMap,Rt=W&&!!x.clearcoatMap,ht=W&&!!x.clearcoatNormalMap,dt=W&&!!x.clearcoatRoughnessMap,Nt=K&&!!x.iridescenceMap,ct=K&&!!x.iridescenceThicknessMap,le=ot&&!!x.sheenColorMap,Xt=ot&&!!x.sheenRoughnessMap,Tt=!!x.specularMap,xt=!!x.specularColorMap,yt=!!x.specularIntensityMap,C=nt&&!!x.transmissionMap,Z=nt&&!!x.thicknessMap,Mt=!!x.gradientMap,L=!!x.alphaMap,at=x.alphaTest>0,F=!!x.alphaHash,it=!!x.extensions;let ft=xn;x.toneMapped&&(wt===null||wt.isXRRenderTarget===!0)&&(ft=i.toneMapping);const qt={isWebGL2:u,shaderID:et,shaderType:x.type,shaderName:x.name,vertexShader:V,fragmentShader:st,defines:x.defines,customVertexShaderID:gt,customFragmentShaderID:Lt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:Zt,instancing:vt,instancingColor:vt&&D.instanceColor!==null,instancingMorph:vt&&D.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:wt===null?i.outputColorSpace:wt.isXRRenderTarget===!0?wt.texture.colorSpace:En,alphaToCoverage:!!x.alphaToCoverage,map:Pt,matcap:O,envMap:pe,envMapMode:pe&&X.mapping,envMapCubeUVHeight:J,aoMap:bt,lightMap:Bt,bumpMap:At,normalMap:jt,displacementMap:m&&zt,emissiveMap:Ht,normalMapObjectSpace:jt&&x.normalMapType===$c,normalMapTangentSpace:jt&&x.normalMapType===Ia,metalnessMap:ne,roughnessMap:b,anisotropy:M,anisotropyMap:Ut,clearcoat:W,clearcoatMap:Rt,clearcoatNormalMap:ht,clearcoatRoughnessMap:dt,iridescence:K,iridescenceMap:Nt,iridescenceThicknessMap:ct,sheen:ot,sheenColorMap:le,sheenRoughnessMap:Xt,specularMap:Tt,specularColorMap:xt,specularIntensityMap:yt,transmission:nt,transmissionMap:C,thicknessMap:Z,gradientMap:Mt,opaque:x.transparent===!1&&x.blending===ui&&x.alphaToCoverage===!1,alphaMap:L,alphaTest:at,alphaHash:F,combine:x.combine,mapUv:Pt&&d(x.map.channel),aoMapUv:bt&&d(x.aoMap.channel),lightMapUv:Bt&&d(x.lightMap.channel),bumpMapUv:At&&d(x.bumpMap.channel),normalMapUv:jt&&d(x.normalMap.channel),displacementMapUv:zt&&d(x.displacementMap.channel),emissiveMapUv:Ht&&d(x.emissiveMap.channel),metalnessMapUv:ne&&d(x.metalnessMap.channel),roughnessMapUv:b&&d(x.roughnessMap.channel),anisotropyMapUv:Ut&&d(x.anisotropyMap.channel),clearcoatMapUv:Rt&&d(x.clearcoatMap.channel),clearcoatNormalMapUv:ht&&d(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:dt&&d(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Nt&&d(x.iridescenceMap.channel),iridescenceThicknessMapUv:ct&&d(x.iridescenceThicknessMap.channel),sheenColorMapUv:le&&d(x.sheenColorMap.channel),sheenRoughnessMapUv:Xt&&d(x.sheenRoughnessMap.channel),specularMapUv:Tt&&d(x.specularMap.channel),specularColorMapUv:xt&&d(x.specularColorMap.channel),specularIntensityMapUv:yt&&d(x.specularIntensityMap.channel),transmissionMapUv:C&&d(x.transmissionMap.channel),thicknessMapUv:Z&&d(x.thicknessMap.channel),alphaMapUv:L&&d(x.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(jt||M),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!k.attributes.uv&&(Pt||L),fog:!!Y,useFog:x.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:D.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:It,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&q.length>0,shadowMapType:i.shadowMap.type,toneMapping:ft,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Pt&&x.map.isVideoTexture===!0&&Qt.getTransfer(x.map.colorSpace)===se,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ye,flipSided:x.side===Le,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:it&&x.extensions.derivatives===!0,extensionFragDepth:it&&x.extensions.fragDepth===!0,extensionDrawBuffers:it&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:it&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:it&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:it&&x.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return qt.vertexUv1s=l.has(1),qt.vertexUv2s=l.has(2),qt.vertexUv3s=l.has(3),l.clear(),qt}function S(x){const A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(const q in x.defines)A.push(q),A.push(x.defines[q]);return x.isRawShaderMaterial===!1&&(v(A,x),y(A,x),A.push(i.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function v(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function y(x,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.instancingMorph&&o.enable(4),A.matcap&&o.enable(5),A.envMap&&o.enable(6),A.normalMapObjectSpace&&o.enable(7),A.normalMapTangentSpace&&o.enable(8),A.clearcoat&&o.enable(9),A.iridescence&&o.enable(10),A.alphaTest&&o.enable(11),A.vertexColors&&o.enable(12),A.vertexAlphas&&o.enable(13),A.vertexUv1s&&o.enable(14),A.vertexUv2s&&o.enable(15),A.vertexUv3s&&o.enable(16),A.vertexTangents&&o.enable(17),A.anisotropy&&o.enable(18),A.alphaHash&&o.enable(19),A.batching&&o.enable(20),x.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.alphaToCoverage&&o.enable(20),x.push(o.mask)}function P(x){const A=_[x.type];let q;if(A){const Q=Xe[A];q=zl.clone(Q.uniforms)}else q=x.uniforms;return q}function R(x,A){let q;for(let Q=0,D=h.length;Q<D;Q++){const Y=h[Q];if(Y.cacheKey===A){q=Y,++q.usedTimes;break}}return q===void 0&&(q=new np(i,A,x,r),h.push(q)),q}function T(x){if(--x.usedTimes===0){const A=h.indexOf(x);h[A]=h[h.length-1],h.pop(),x.destroy()}}function I(x){c.remove(x)}function z(){c.dispose()}return{getParameters:f,getProgramCacheKey:S,getUniforms:P,acquireProgram:R,releaseProgram:T,releaseShaderCache:I,programs:h,dispose:z}}function ap(){let i=new WeakMap;function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function e(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function cp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function sa(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ra(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,p,m,g,_,d){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:p,material:m,groupOrder:g,renderOrder:u.renderOrder,z:_,group:d},i[t]=f):(f.id=u.id,f.object=u,f.geometry=p,f.material=m,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=d),t++,f}function o(u,p,m,g,_,d){const f=a(u,p,m,g,_,d);m.transmission>0?n.push(f):m.transparent===!0?s.push(f):e.push(f)}function c(u,p,m,g,_,d){const f=a(u,p,m,g,_,d);m.transmission>0?n.unshift(f):m.transparent===!0?s.unshift(f):e.unshift(f)}function l(u,p){e.length>1&&e.sort(u||cp),n.length>1&&n.sort(p||sa),s.length>1&&s.sort(p||sa)}function h(){for(let u=t,p=i.length;u<p;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function lp(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new ra,i.set(n,[a])):s>=r.length?(a=new ra,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function hp(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new w,color:new Ft};break;case"SpotLight":e={position:new w,direction:new w,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new w,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new w,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":e={color:new Ft,position:new w,halfWidth:new w,halfHeight:new w};break}return i[t.id]=e,e}}}function up(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let dp=0;function fp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function pp(i,t){const e=new hp,n=up(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new w);const r=new w,a=new te,o=new te;function c(h,u){let p=0,m=0,g=0;for(let q=0;q<9;q++)s.probe[q].set(0,0,0);let _=0,d=0,f=0,S=0,v=0,y=0,P=0,R=0,T=0,I=0,z=0;h.sort(fp);const x=u===!0?Math.PI:1;for(let q=0,Q=h.length;q<Q;q++){const D=h[q],Y=D.color,k=D.intensity,tt=D.distance,X=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)p+=Y.r*k*x,m+=Y.g*k*x,g+=Y.b*k*x;else if(D.isLightProbe){for(let J=0;J<9;J++)s.probe[J].addScaledVector(D.sh.coefficients[J],k);z++}else if(D.isDirectionalLight){const J=e.get(D);if(J.color.copy(D.color).multiplyScalar(D.intensity*x),D.castShadow){const et=D.shadow,lt=n.get(D);lt.shadowBias=et.bias,lt.shadowNormalBias=et.normalBias,lt.shadowRadius=et.radius,lt.shadowMapSize=et.mapSize,s.directionalShadow[_]=lt,s.directionalShadowMap[_]=X,s.directionalShadowMatrix[_]=D.shadow.matrix,y++}s.directional[_]=J,_++}else if(D.isSpotLight){const J=e.get(D);J.position.setFromMatrixPosition(D.matrixWorld),J.color.copy(Y).multiplyScalar(k*x),J.distance=tt,J.coneCos=Math.cos(D.angle),J.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),J.decay=D.decay,s.spot[f]=J;const et=D.shadow;if(D.map&&(s.spotLightMap[T]=D.map,T++,et.updateMatrices(D),D.castShadow&&I++),s.spotLightMatrix[f]=et.matrix,D.castShadow){const lt=n.get(D);lt.shadowBias=et.bias,lt.shadowNormalBias=et.normalBias,lt.shadowRadius=et.radius,lt.shadowMapSize=et.mapSize,s.spotShadow[f]=lt,s.spotShadowMap[f]=X,R++}f++}else if(D.isRectAreaLight){const J=e.get(D);J.color.copy(Y).multiplyScalar(k),J.halfWidth.set(D.width*.5,0,0),J.halfHeight.set(0,D.height*.5,0),s.rectArea[S]=J,S++}else if(D.isPointLight){const J=e.get(D);if(J.color.copy(D.color).multiplyScalar(D.intensity*x),J.distance=D.distance,J.decay=D.decay,D.castShadow){const et=D.shadow,lt=n.get(D);lt.shadowBias=et.bias,lt.shadowNormalBias=et.normalBias,lt.shadowRadius=et.radius,lt.shadowMapSize=et.mapSize,lt.shadowCameraNear=et.camera.near,lt.shadowCameraFar=et.camera.far,s.pointShadow[d]=lt,s.pointShadowMap[d]=X,s.pointShadowMatrix[d]=D.shadow.matrix,P++}s.point[d]=J,d++}else if(D.isHemisphereLight){const J=e.get(D);J.skyColor.copy(D.color).multiplyScalar(k*x),J.groundColor.copy(D.groundColor).multiplyScalar(k*x),s.hemi[v]=J,v++}}S>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ut.LTC_FLOAT_1,s.rectAreaLTC2=ut.LTC_FLOAT_2):(s.rectAreaLTC1=ut.LTC_HALF_1,s.rectAreaLTC2=ut.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ut.LTC_FLOAT_1,s.rectAreaLTC2=ut.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ut.LTC_HALF_1,s.rectAreaLTC2=ut.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=p,s.ambient[1]=m,s.ambient[2]=g;const A=s.hash;(A.directionalLength!==_||A.pointLength!==d||A.spotLength!==f||A.rectAreaLength!==S||A.hemiLength!==v||A.numDirectionalShadows!==y||A.numPointShadows!==P||A.numSpotShadows!==R||A.numSpotMaps!==T||A.numLightProbes!==z)&&(s.directional.length=_,s.spot.length=f,s.rectArea.length=S,s.point.length=d,s.hemi.length=v,s.directionalShadow.length=y,s.directionalShadowMap.length=y,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=y,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=R+T-I,s.spotLightMap.length=T,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=z,A.directionalLength=_,A.pointLength=d,A.spotLength=f,A.rectAreaLength=S,A.hemiLength=v,A.numDirectionalShadows=y,A.numPointShadows=P,A.numSpotShadows=R,A.numSpotMaps=T,A.numLightProbes=z,s.version=dp++)}function l(h,u){let p=0,m=0,g=0,_=0,d=0;const f=u.matrixWorldInverse;for(let S=0,v=h.length;S<v;S++){const y=h[S];if(y.isDirectionalLight){const P=s.directional[p];P.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(f),p++}else if(y.isSpotLight){const P=s.spot[g];P.position.setFromMatrixPosition(y.matrixWorld),P.position.applyMatrix4(f),P.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(f),g++}else if(y.isRectAreaLight){const P=s.rectArea[_];P.position.setFromMatrixPosition(y.matrixWorld),P.position.applyMatrix4(f),o.identity(),a.copy(y.matrixWorld),a.premultiply(f),o.extractRotation(a),P.halfWidth.set(y.width*.5,0,0),P.halfHeight.set(0,y.height*.5,0),P.halfWidth.applyMatrix4(o),P.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const P=s.point[m];P.position.setFromMatrixPosition(y.matrixWorld),P.position.applyMatrix4(f),m++}else if(y.isHemisphereLight){const P=s.hemi[d];P.direction.setFromMatrixPosition(y.matrixWorld),P.direction.transformDirection(f),d++}}}return{setup:c,setupView:l,state:s}}function oa(i,t){const e=new pp(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function a(u){n.push(u)}function o(u){s.push(u)}function c(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function mp(i,t){let e=new WeakMap;function n(r,a=0){const o=e.get(r);let c;return o===void 0?(c=new oa(i,t),e.set(r,[c])):a>=o.length?(c=new oa(i,t),o.push(c)):c=o[a],c}function s(){e=new WeakMap}return{get:n,dispose:s}}class gp extends Bi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class _p extends Bi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const vp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xp=`uniform sampler2D shadow_pass;
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
}`;function Mp(i,t,e){let n=new br;const s=new pt,r=new pt,a=new ae,o=new gp({depthPacking:Jc}),c=new _p,l={},h=e.maxTextureSize,u={[Sn]:Le,[Le]:Sn,[Ye]:Ye},p=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:vp,fragmentShader:xp}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const g=new Ne;g.setAttribute("position",new Ve(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new U(g,p),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ma;let f=this.type;this.render=function(R,T,I){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||R.length===0)return;const z=i.getRenderTarget(),x=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),q=i.state;q.setBlending(vn),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const Q=f!==rn&&this.type===rn,D=f===rn&&this.type!==rn;for(let Y=0,k=R.length;Y<k;Y++){const tt=R[Y],X=tt.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const J=X.getFrameExtents();if(s.multiply(J),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/J.x),s.x=r.x*J.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/J.y),s.y=r.y*J.y,X.mapSize.y=r.y)),X.map===null||Q===!0||D===!0){const lt=this.type!==rn?{minFilter:Se,magFilter:Se}:{};X.map!==null&&X.map.dispose(),X.map=new zn(s.x,s.y,lt),X.map.texture.name=tt.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const et=X.getViewportCount();for(let lt=0;lt<et;lt++){const _t=X.getViewport(lt);a.set(r.x*_t.x,r.y*_t.y,r.x*_t.z,r.y*_t.w),q.viewport(a),X.updateMatrices(tt,lt),n=X.getFrustum(),y(T,I,X.camera,tt,this.type)}X.isPointLightShadow!==!0&&this.type===rn&&S(X,I),X.needsUpdate=!1}f=this.type,d.needsUpdate=!1,i.setRenderTarget(z,x,A)};function S(R,T){const I=t.update(_);p.defines.VSM_SAMPLES!==R.blurSamples&&(p.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new zn(s.x,s.y)),p.uniforms.shadow_pass.value=R.map.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(T,null,I,p,_,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(T,null,I,m,_,null)}function v(R,T,I,z){let x=null;const A=I.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(A!==void 0)x=A;else if(x=I.isPointLight===!0?c:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const q=x.uuid,Q=T.uuid;let D=l[q];D===void 0&&(D={},l[q]=D);let Y=D[Q];Y===void 0&&(Y=x.clone(),D[Q]=Y,T.addEventListener("dispose",P)),x=Y}if(x.visible=T.visible,x.wireframe=T.wireframe,z===rn?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:u[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,I.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const q=i.properties.get(x);q.light=I}return x}function y(R,T,I,z,x){if(R.visible===!1)return;if(R.layers.test(T.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&x===rn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,R.matrixWorld);const Q=t.update(R),D=R.material;if(Array.isArray(D)){const Y=Q.groups;for(let k=0,tt=Y.length;k<tt;k++){const X=Y[k],J=D[X.materialIndex];if(J&&J.visible){const et=v(R,J,z,x);R.onBeforeShadow(i,R,T,I,Q,et,X),i.renderBufferDirect(I,null,Q,et,R,X),R.onAfterShadow(i,R,T,I,Q,et,X)}}}else if(D.visible){const Y=v(R,D,z,x);R.onBeforeShadow(i,R,T,I,Q,Y,null),i.renderBufferDirect(I,null,Q,Y,R,null),R.onAfterShadow(i,R,T,I,Q,Y,null)}}const q=R.children;for(let Q=0,D=q.length;Q<D;Q++)y(q[Q],T,I,z,x)}function P(R){R.target.removeEventListener("dispose",P);for(const I in l){const z=l[I],x=R.target.uuid;x in z&&(z[x].dispose(),delete z[x])}}}function Sp(i,t,e){const n=e.isWebGL2;function s(){let L=!1;const at=new ae;let F=null;const it=new ae(0,0,0,0);return{setMask:function(ft){F!==ft&&!L&&(i.colorMask(ft,ft,ft,ft),F=ft)},setLocked:function(ft){L=ft},setClear:function(ft,qt,$t,ee,he){he===!0&&(ft*=ee,qt*=ee,$t*=ee),at.set(ft,qt,$t,ee),it.equals(at)===!1&&(i.clearColor(ft,qt,$t,ee),it.copy(at))},reset:function(){L=!1,F=null,it.set(-1,0,0,0)}}}function r(){let L=!1,at=null,F=null,it=null;return{setTest:function(ft){ft?vt(i.DEPTH_TEST):Zt(i.DEPTH_TEST)},setMask:function(ft){at!==ft&&!L&&(i.depthMask(ft),at=ft)},setFunc:function(ft){if(F!==ft){switch(ft){case Rc:i.depthFunc(i.NEVER);break;case Cc:i.depthFunc(i.ALWAYS);break;case Pc:i.depthFunc(i.LESS);break;case ps:i.depthFunc(i.LEQUAL);break;case Lc:i.depthFunc(i.EQUAL);break;case Dc:i.depthFunc(i.GEQUAL);break;case Ic:i.depthFunc(i.GREATER);break;case Uc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}F=ft}},setLocked:function(ft){L=ft},setClear:function(ft){it!==ft&&(i.clearDepth(ft),it=ft)},reset:function(){L=!1,at=null,F=null,it=null}}}function a(){let L=!1,at=null,F=null,it=null,ft=null,qt=null,$t=null,ee=null,he=null;return{setTest:function(Jt){L||(Jt?vt(i.STENCIL_TEST):Zt(i.STENCIL_TEST))},setMask:function(Jt){at!==Jt&&!L&&(i.stencilMask(Jt),at=Jt)},setFunc:function(Jt,ie,ye){(F!==Jt||it!==ie||ft!==ye)&&(i.stencilFunc(Jt,ie,ye),F=Jt,it=ie,ft=ye)},setOp:function(Jt,ie,ye){(qt!==Jt||$t!==ie||ee!==ye)&&(i.stencilOp(Jt,ie,ye),qt=Jt,$t=ie,ee=ye)},setLocked:function(Jt){L=Jt},setClear:function(Jt){he!==Jt&&(i.clearStencil(Jt),he=Jt)},reset:function(){L=!1,at=null,F=null,it=null,ft=null,qt=null,$t=null,ee=null,he=null}}}const o=new s,c=new r,l=new a,h=new WeakMap,u=new WeakMap;let p={},m={},g=new WeakMap,_=[],d=null,f=!1,S=null,v=null,y=null,P=null,R=null,T=null,I=null,z=new Ft(0,0,0),x=0,A=!1,q=null,Q=null,D=null,Y=null,k=null;const tt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,J=0;const et=i.getParameter(i.VERSION);et.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(et)[1]),X=J>=1):et.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),X=J>=2);let lt=null,_t={};const It=i.getParameter(i.SCISSOR_BOX),V=i.getParameter(i.VIEWPORT),st=new ae().fromArray(It),gt=new ae().fromArray(V);function Lt(L,at,F,it){const ft=new Uint8Array(4),qt=i.createTexture();i.bindTexture(L,qt),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $t=0;$t<F;$t++)n&&(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)?i.texImage3D(at,0,i.RGBA,1,1,it,0,i.RGBA,i.UNSIGNED_BYTE,ft):i.texImage2D(at+$t,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ft);return qt}const wt={};wt[i.TEXTURE_2D]=Lt(i.TEXTURE_2D,i.TEXTURE_2D,1),wt[i.TEXTURE_CUBE_MAP]=Lt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(wt[i.TEXTURE_2D_ARRAY]=Lt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),wt[i.TEXTURE_3D]=Lt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),vt(i.DEPTH_TEST),c.setFunc(ps),zt(!1),Ht(Br),vt(i.CULL_FACE),At(vn);function vt(L){p[L]!==!0&&(i.enable(L),p[L]=!0)}function Zt(L){p[L]!==!1&&(i.disable(L),p[L]=!1)}function Pt(L,at){return m[L]!==at?(i.bindFramebuffer(L,at),m[L]=at,n&&(L===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=at),L===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=at)),!0):!1}function O(L,at){let F=_,it=!1;if(L){F=g.get(at),F===void 0&&(F=[],g.set(at,F));const ft=L.textures;if(F.length!==ft.length||F[0]!==i.COLOR_ATTACHMENT0){for(let qt=0,$t=ft.length;qt<$t;qt++)F[qt]=i.COLOR_ATTACHMENT0+qt;F.length=ft.length,it=!0}}else F[0]!==i.BACK&&(F[0]=i.BACK,it=!0);if(it)if(e.isWebGL2)i.drawBuffers(F);else if(t.has("WEBGL_draw_buffers")===!0)t.get("WEBGL_draw_buffers").drawBuffersWEBGL(F);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function pe(L){return d!==L?(i.useProgram(L),d=L,!0):!1}const bt={[Un]:i.FUNC_ADD,[fc]:i.FUNC_SUBTRACT,[pc]:i.FUNC_REVERSE_SUBTRACT};if(n)bt[kr]=i.MIN,bt[Vr]=i.MAX;else{const L=t.get("EXT_blend_minmax");L!==null&&(bt[kr]=L.MIN_EXT,bt[Vr]=L.MAX_EXT)}const Bt={[mc]:i.ZERO,[gc]:i.ONE,[_c]:i.SRC_COLOR,[dr]:i.SRC_ALPHA,[Ec]:i.SRC_ALPHA_SATURATE,[Sc]:i.DST_COLOR,[xc]:i.DST_ALPHA,[vc]:i.ONE_MINUS_SRC_COLOR,[fr]:i.ONE_MINUS_SRC_ALPHA,[yc]:i.ONE_MINUS_DST_COLOR,[Mc]:i.ONE_MINUS_DST_ALPHA,[wc]:i.CONSTANT_COLOR,[Tc]:i.ONE_MINUS_CONSTANT_COLOR,[bc]:i.CONSTANT_ALPHA,[Ac]:i.ONE_MINUS_CONSTANT_ALPHA};function At(L,at,F,it,ft,qt,$t,ee,he,Jt){if(L===vn){f===!0&&(Zt(i.BLEND),f=!1);return}if(f===!1&&(vt(i.BLEND),f=!0),L!==dc){if(L!==S||Jt!==A){if((v!==Un||R!==Un)&&(i.blendEquation(i.FUNC_ADD),v=Un,R=Un),Jt)switch(L){case ui:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zr:i.blendFunc(i.ONE,i.ONE);break;case Gr:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Hr:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ui:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case zr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Gr:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Hr:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}y=null,P=null,T=null,I=null,z.set(0,0,0),x=0,S=L,A=Jt}return}ft=ft||at,qt=qt||F,$t=$t||it,(at!==v||ft!==R)&&(i.blendEquationSeparate(bt[at],bt[ft]),v=at,R=ft),(F!==y||it!==P||qt!==T||$t!==I)&&(i.blendFuncSeparate(Bt[F],Bt[it],Bt[qt],Bt[$t]),y=F,P=it,T=qt,I=$t),(ee.equals(z)===!1||he!==x)&&(i.blendColor(ee.r,ee.g,ee.b,he),z.copy(ee),x=he),S=L,A=!1}function jt(L,at){L.side===Ye?Zt(i.CULL_FACE):vt(i.CULL_FACE);let F=L.side===Le;at&&(F=!F),zt(F),L.blending===ui&&L.transparent===!1?At(vn):At(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),c.setFunc(L.depthFunc),c.setTest(L.depthTest),c.setMask(L.depthWrite),o.setMask(L.colorWrite);const it=L.stencilWrite;l.setTest(it),it&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),b(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?vt(i.SAMPLE_ALPHA_TO_COVERAGE):Zt(i.SAMPLE_ALPHA_TO_COVERAGE)}function zt(L){q!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),q=L)}function Ht(L){L!==hc?(vt(i.CULL_FACE),L!==Q&&(L===Br?i.cullFace(i.BACK):L===uc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Zt(i.CULL_FACE),Q=L}function ne(L){L!==D&&(X&&i.lineWidth(L),D=L)}function b(L,at,F){L?(vt(i.POLYGON_OFFSET_FILL),(Y!==at||k!==F)&&(i.polygonOffset(at,F),Y=at,k=F)):Zt(i.POLYGON_OFFSET_FILL)}function M(L){L?vt(i.SCISSOR_TEST):Zt(i.SCISSOR_TEST)}function W(L){L===void 0&&(L=i.TEXTURE0+tt-1),lt!==L&&(i.activeTexture(L),lt=L)}function K(L,at,F){F===void 0&&(lt===null?F=i.TEXTURE0+tt-1:F=lt);let it=_t[F];it===void 0&&(it={type:void 0,texture:void 0},_t[F]=it),(it.type!==L||it.texture!==at)&&(lt!==F&&(i.activeTexture(F),lt=F),i.bindTexture(L,at||wt[L]),it.type=L,it.texture=at)}function ot(){const L=_t[lt];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function nt(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ut(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Rt(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ht(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function dt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Nt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ct(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function le(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Xt(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Tt(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xt(L){st.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),st.copy(L))}function yt(L){gt.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),gt.copy(L))}function C(L,at){let F=u.get(at);F===void 0&&(F=new WeakMap,u.set(at,F));let it=F.get(L);it===void 0&&(it=i.getUniformBlockIndex(at,L.name),F.set(L,it))}function Z(L,at){const it=u.get(at).get(L);h.get(at)!==it&&(i.uniformBlockBinding(at,it,L.__bindingPointIndex),h.set(at,it))}function Mt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},lt=null,_t={},m={},g=new WeakMap,_=[],d=null,f=!1,S=null,v=null,y=null,P=null,R=null,T=null,I=null,z=new Ft(0,0,0),x=0,A=!1,q=null,Q=null,D=null,Y=null,k=null,st.set(0,0,i.canvas.width,i.canvas.height),gt.set(0,0,i.canvas.width,i.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:vt,disable:Zt,bindFramebuffer:Pt,drawBuffers:O,useProgram:pe,setBlending:At,setMaterial:jt,setFlipSided:zt,setCullFace:Ht,setLineWidth:ne,setPolygonOffset:b,setScissorTest:M,activeTexture:W,bindTexture:K,unbindTexture:ot,compressedTexImage2D:nt,compressedTexImage3D:Ut,texImage2D:Xt,texImage3D:Tt,updateUBOMapping:C,uniformBlockBinding:Z,texStorage2D:ct,texStorage3D:le,texSubImage2D:Rt,texSubImage3D:ht,compressedTexSubImage2D:dt,compressedTexSubImage3D:Nt,scissor:xt,viewport:yt,reset:Mt}}function yp(i,t,e,n,s,r,a){const o=s.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new pt,u=new WeakMap;let p;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,M){return g?new OffscreenCanvas(b,M):Ms("canvas")}function d(b,M,W,K){let ot=1;const nt=ne(b);if((nt.width>K||nt.height>K)&&(ot=K/Math.max(nt.width,nt.height)),ot<1||M===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Ut=M?xs:Math.floor,Rt=Ut(ot*nt.width),ht=Ut(ot*nt.height);p===void 0&&(p=_(Rt,ht));const dt=W?_(Rt,ht):p;return dt.width=Rt,dt.height=ht,dt.getContext("2d").drawImage(b,0,0,Rt,ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+Rt+"x"+ht+")."),dt}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),b;return b}function f(b){const M=ne(b);return xr(M.width)&&xr(M.height)}function S(b){return o?!1:b.wrapS!==He||b.wrapT!==He||b.minFilter!==Se&&b.minFilter!==Ce}function v(b,M){return b.generateMipmaps&&M&&b.minFilter!==Se&&b.minFilter!==Ce}function y(b){i.generateMipmap(b)}function P(b,M,W,K,ot=!1){if(o===!1)return M;if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let nt=M;if(M===i.RED&&(W===i.FLOAT&&(nt=i.R32F),W===i.HALF_FLOAT&&(nt=i.R16F),W===i.UNSIGNED_BYTE&&(nt=i.R8)),M===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(nt=i.R8UI),W===i.UNSIGNED_SHORT&&(nt=i.R16UI),W===i.UNSIGNED_INT&&(nt=i.R32UI),W===i.BYTE&&(nt=i.R8I),W===i.SHORT&&(nt=i.R16I),W===i.INT&&(nt=i.R32I)),M===i.RG&&(W===i.FLOAT&&(nt=i.RG32F),W===i.HALF_FLOAT&&(nt=i.RG16F),W===i.UNSIGNED_BYTE&&(nt=i.RG8)),M===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(nt=i.RG8UI),W===i.UNSIGNED_SHORT&&(nt=i.RG16UI),W===i.UNSIGNED_INT&&(nt=i.RG32UI),W===i.BYTE&&(nt=i.RG8I),W===i.SHORT&&(nt=i.RG16I),W===i.INT&&(nt=i.RG32I)),M===i.RGBA){const Ut=ot?ms:Qt.getTransfer(K);W===i.FLOAT&&(nt=i.RGBA32F),W===i.HALF_FLOAT&&(nt=i.RGBA16F),W===i.UNSIGNED_BYTE&&(nt=Ut===se?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(nt=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(nt=i.RGB5_A1)}return(nt===i.R16F||nt===i.R32F||nt===i.RG16F||nt===i.RG32F||nt===i.RGBA16F||nt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function R(b,M,W){return v(b,W)===!0||b.isFramebufferTexture&&b.minFilter!==Se&&b.minFilter!==Ce?Math.log2(Math.max(M.width,M.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?M.mipmaps.length:1}function T(b){return b===Se||b===Wr||b===Si?i.NEAREST:i.LINEAR}function I(b){const M=b.target;M.removeEventListener("dispose",I),x(M),M.isVideoTexture&&u.delete(M)}function z(b){const M=b.target;M.removeEventListener("dispose",z),q(M)}function x(b){const M=n.get(b);if(M.__webglInit===void 0)return;const W=b.source,K=m.get(W);if(K){const ot=K[M.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&A(b),Object.keys(K).length===0&&m.delete(W)}n.remove(b)}function A(b){const M=n.get(b);i.deleteTexture(M.__webglTexture);const W=b.source,K=m.get(W);delete K[M.__cacheKey],a.memory.textures--}function q(b){const M=n.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(M.__webglFramebuffer[K]))for(let ot=0;ot<M.__webglFramebuffer[K].length;ot++)i.deleteFramebuffer(M.__webglFramebuffer[K][ot]);else i.deleteFramebuffer(M.__webglFramebuffer[K]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[K])}else{if(Array.isArray(M.__webglFramebuffer))for(let K=0;K<M.__webglFramebuffer.length;K++)i.deleteFramebuffer(M.__webglFramebuffer[K]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let K=0;K<M.__webglColorRenderbuffer.length;K++)M.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[K]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const W=b.textures;for(let K=0,ot=W.length;K<ot;K++){const nt=n.get(W[K]);nt.__webglTexture&&(i.deleteTexture(nt.__webglTexture),a.memory.textures--),n.remove(W[K])}n.remove(b)}let Q=0;function D(){Q=0}function Y(){const b=Q;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),Q+=1,b}function k(b){const M=[];return M.push(b.wrapS),M.push(b.wrapT),M.push(b.wrapR||0),M.push(b.magFilter),M.push(b.minFilter),M.push(b.anisotropy),M.push(b.internalFormat),M.push(b.format),M.push(b.type),M.push(b.generateMipmaps),M.push(b.premultiplyAlpha),M.push(b.flipY),M.push(b.unpackAlignment),M.push(b.colorSpace),M.join()}function tt(b,M){const W=n.get(b);if(b.isVideoTexture&&zt(b),b.isRenderTargetTexture===!1&&b.version>0&&W.__version!==b.version){const K=b.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{gt(W,b,M);return}}e.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+M)}function X(b,M){const W=n.get(b);if(b.version>0&&W.__version!==b.version){gt(W,b,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+M)}function J(b,M){const W=n.get(b);if(b.version>0&&W.__version!==b.version){gt(W,b,M);return}e.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+M)}function et(b,M){const W=n.get(b);if(b.version>0&&W.__version!==b.version){Lt(W,b,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+M)}const lt={[gr]:i.REPEAT,[He]:i.CLAMP_TO_EDGE,[_r]:i.MIRRORED_REPEAT},_t={[Se]:i.NEAREST,[Wr]:i.NEAREST_MIPMAP_NEAREST,[Si]:i.NEAREST_MIPMAP_LINEAR,[Ce]:i.LINEAR,[Cs]:i.LINEAR_MIPMAP_NEAREST,[On]:i.LINEAR_MIPMAP_LINEAR},It={[Qc]:i.NEVER,[rl]:i.ALWAYS,[tl]:i.LESS,[Ua]:i.LEQUAL,[el]:i.EQUAL,[sl]:i.GEQUAL,[nl]:i.GREATER,[il]:i.NOTEQUAL};function V(b,M,W){if(M.type===qe&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Ce||M.magFilter===Cs||M.magFilter===Si||M.magFilter===On||M.minFilter===Ce||M.minFilter===Cs||M.minFilter===Si||M.minFilter===On)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),W?(i.texParameteri(b,i.TEXTURE_WRAP_S,lt[M.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,lt[M.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,lt[M.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,_t[M.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,_t[M.minFilter])):(i.texParameteri(b,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(b,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(M.wrapS!==He||M.wrapT!==He)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(b,i.TEXTURE_MAG_FILTER,T(M.magFilter)),i.texParameteri(b,i.TEXTURE_MIN_FILTER,T(M.minFilter)),M.minFilter!==Se&&M.minFilter!==Ce&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,It[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Se||M.minFilter!==Si&&M.minFilter!==On||M.type===qe&&t.has("OES_texture_float_linear")===!1||o===!1&&M.type===Ni&&t.has("OES_texture_half_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const K=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function st(b,M){let W=!1;b.__webglInit===void 0&&(b.__webglInit=!0,M.addEventListener("dispose",I));const K=M.source;let ot=m.get(K);ot===void 0&&(ot={},m.set(K,ot));const nt=k(M);if(nt!==b.__cacheKey){ot[nt]===void 0&&(ot[nt]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),ot[nt].usedTimes++;const Ut=ot[b.__cacheKey];Ut!==void 0&&(ot[b.__cacheKey].usedTimes--,Ut.usedTimes===0&&A(M)),b.__cacheKey=nt,b.__webglTexture=ot[nt].texture}return W}function gt(b,M,W){let K=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(K=i.TEXTURE_3D);const ot=st(b,M),nt=M.source;e.bindTexture(K,b.__webglTexture,i.TEXTURE0+W);const Ut=n.get(nt);if(nt.version!==Ut.__version||ot===!0){e.activeTexture(i.TEXTURE0+W);const Rt=Qt.getPrimaries(Qt.workingColorSpace),ht=M.colorSpace===mn?null:Qt.getPrimaries(M.colorSpace),dt=M.colorSpace===mn||Rt===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const Nt=S(M)&&f(M.image)===!1;let ct=d(M.image,Nt,!1,s.maxTextureSize);ct=Ht(M,ct);const le=f(ct)||o,Xt=r.convert(M.format,M.colorSpace);let Tt=r.convert(M.type),xt=P(M.internalFormat,Xt,Tt,M.colorSpace,M.isVideoTexture);V(K,M,le);let yt;const C=M.mipmaps,Z=o&&M.isVideoTexture!==!0&&xt!==Da,Mt=Ut.__version===void 0||ot===!0,L=nt.dataReady,at=R(M,ct,le);if(M.isDepthTexture)xt=i.DEPTH_COMPONENT,o?M.type===qe?xt=i.DEPTH_COMPONENT32F:M.type===gn?xt=i.DEPTH_COMPONENT24:M.type===Fn?xt=i.DEPTH24_STENCIL8:xt=i.DEPTH_COMPONENT16:M.type===qe&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Bn&&xt===i.DEPTH_COMPONENT&&M.type!==yr&&M.type!==gn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=gn,Tt=r.convert(M.type)),M.format===mi&&xt===i.DEPTH_COMPONENT&&(xt=i.DEPTH_STENCIL,M.type!==Fn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Fn,Tt=r.convert(M.type))),Mt&&(Z?e.texStorage2D(i.TEXTURE_2D,1,xt,ct.width,ct.height):e.texImage2D(i.TEXTURE_2D,0,xt,ct.width,ct.height,0,Xt,Tt,null));else if(M.isDataTexture)if(C.length>0&&le){Z&&Mt&&e.texStorage2D(i.TEXTURE_2D,at,xt,C[0].width,C[0].height);for(let F=0,it=C.length;F<it;F++)yt=C[F],Z?L&&e.texSubImage2D(i.TEXTURE_2D,F,0,0,yt.width,yt.height,Xt,Tt,yt.data):e.texImage2D(i.TEXTURE_2D,F,xt,yt.width,yt.height,0,Xt,Tt,yt.data);M.generateMipmaps=!1}else Z?(Mt&&e.texStorage2D(i.TEXTURE_2D,at,xt,ct.width,ct.height),L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ct.width,ct.height,Xt,Tt,ct.data)):e.texImage2D(i.TEXTURE_2D,0,xt,ct.width,ct.height,0,Xt,Tt,ct.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Z&&Mt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,xt,C[0].width,C[0].height,ct.depth);for(let F=0,it=C.length;F<it;F++)yt=C[F],M.format!==ke?Xt!==null?Z?L&&e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,F,0,0,0,yt.width,yt.height,ct.depth,Xt,yt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,F,xt,yt.width,yt.height,ct.depth,0,yt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Z?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,F,0,0,0,yt.width,yt.height,ct.depth,Xt,Tt,yt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,F,xt,yt.width,yt.height,ct.depth,0,Xt,Tt,yt.data)}else{Z&&Mt&&e.texStorage2D(i.TEXTURE_2D,at,xt,C[0].width,C[0].height);for(let F=0,it=C.length;F<it;F++)yt=C[F],M.format!==ke?Xt!==null?Z?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,F,0,0,yt.width,yt.height,Xt,yt.data):e.compressedTexImage2D(i.TEXTURE_2D,F,xt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Z?L&&e.texSubImage2D(i.TEXTURE_2D,F,0,0,yt.width,yt.height,Xt,Tt,yt.data):e.texImage2D(i.TEXTURE_2D,F,xt,yt.width,yt.height,0,Xt,Tt,yt.data)}else if(M.isDataArrayTexture)Z?(Mt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,at,xt,ct.width,ct.height,ct.depth),L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,Xt,Tt,ct.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,xt,ct.width,ct.height,ct.depth,0,Xt,Tt,ct.data);else if(M.isData3DTexture)Z?(Mt&&e.texStorage3D(i.TEXTURE_3D,at,xt,ct.width,ct.height,ct.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,Xt,Tt,ct.data)):e.texImage3D(i.TEXTURE_3D,0,xt,ct.width,ct.height,ct.depth,0,Xt,Tt,ct.data);else if(M.isFramebufferTexture){if(Mt)if(Z)e.texStorage2D(i.TEXTURE_2D,at,xt,ct.width,ct.height);else{let F=ct.width,it=ct.height;for(let ft=0;ft<at;ft++)e.texImage2D(i.TEXTURE_2D,ft,xt,F,it,0,Xt,Tt,null),F>>=1,it>>=1}}else if(C.length>0&&le){if(Z&&Mt){const F=ne(C[0]);e.texStorage2D(i.TEXTURE_2D,at,xt,F.width,F.height)}for(let F=0,it=C.length;F<it;F++)yt=C[F],Z?L&&e.texSubImage2D(i.TEXTURE_2D,F,0,0,Xt,Tt,yt):e.texImage2D(i.TEXTURE_2D,F,xt,Xt,Tt,yt);M.generateMipmaps=!1}else if(Z){if(Mt){const F=ne(ct);e.texStorage2D(i.TEXTURE_2D,at,xt,F.width,F.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Xt,Tt,ct)}else e.texImage2D(i.TEXTURE_2D,0,xt,Xt,Tt,ct);v(M,le)&&y(K),Ut.__version=nt.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function Lt(b,M,W){if(M.image.length!==6)return;const K=st(b,M),ot=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+W);const nt=n.get(ot);if(ot.version!==nt.__version||K===!0){e.activeTexture(i.TEXTURE0+W);const Ut=Qt.getPrimaries(Qt.workingColorSpace),Rt=M.colorSpace===mn?null:Qt.getPrimaries(M.colorSpace),ht=M.colorSpace===mn||Ut===Rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);const dt=M.isCompressedTexture||M.image[0].isCompressedTexture,Nt=M.image[0]&&M.image[0].isDataTexture,ct=[];for(let F=0;F<6;F++)!dt&&!Nt?ct[F]=d(M.image[F],!1,!0,s.maxCubemapSize):ct[F]=Nt?M.image[F].image:M.image[F],ct[F]=Ht(M,ct[F]);const le=ct[0],Xt=f(le)||o,Tt=r.convert(M.format,M.colorSpace),xt=r.convert(M.type),yt=P(M.internalFormat,Tt,xt,M.colorSpace),C=o&&M.isVideoTexture!==!0,Z=nt.__version===void 0||K===!0,Mt=ot.dataReady;let L=R(M,le,Xt);V(i.TEXTURE_CUBE_MAP,M,Xt);let at;if(dt){C&&Z&&e.texStorage2D(i.TEXTURE_CUBE_MAP,L,yt,le.width,le.height);for(let F=0;F<6;F++){at=ct[F].mipmaps;for(let it=0;it<at.length;it++){const ft=at[it];M.format!==ke?Tt!==null?C?Mt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,it,0,0,ft.width,ft.height,Tt,ft.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,it,yt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):C?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,it,0,0,ft.width,ft.height,Tt,xt,ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,it,yt,ft.width,ft.height,0,Tt,xt,ft.data)}}}else{if(at=M.mipmaps,C&&Z){at.length>0&&L++;const F=ne(ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,L,yt,F.width,F.height)}for(let F=0;F<6;F++)if(Nt){C?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,ct[F].width,ct[F].height,Tt,xt,ct[F].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,yt,ct[F].width,ct[F].height,0,Tt,xt,ct[F].data);for(let it=0;it<at.length;it++){const qt=at[it].image[F].image;C?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,it+1,0,0,qt.width,qt.height,Tt,xt,qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,it+1,yt,qt.width,qt.height,0,Tt,xt,qt.data)}}else{C?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,Tt,xt,ct[F]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,yt,Tt,xt,ct[F]);for(let it=0;it<at.length;it++){const ft=at[it];C?Mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,it+1,0,0,Tt,xt,ft.image[F]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,it+1,yt,Tt,xt,ft.image[F])}}}v(M,Xt)&&y(i.TEXTURE_CUBE_MAP),nt.__version=ot.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function wt(b,M,W,K,ot,nt){const Ut=r.convert(W.format,W.colorSpace),Rt=r.convert(W.type),ht=P(W.internalFormat,Ut,Rt,W.colorSpace);if(!n.get(M).__hasExternalTextures){const Nt=Math.max(1,M.width>>nt),ct=Math.max(1,M.height>>nt);ot===i.TEXTURE_3D||ot===i.TEXTURE_2D_ARRAY?e.texImage3D(ot,nt,ht,Nt,ct,M.depth,0,Ut,Rt,null):e.texImage2D(ot,nt,ht,Nt,ct,0,Ut,Rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),jt(M)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,ot,n.get(W).__webglTexture,0,At(M)):(ot===i.TEXTURE_2D||ot>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,ot,n.get(W).__webglTexture,nt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function vt(b,M,W){if(i.bindRenderbuffer(i.RENDERBUFFER,b),M.depthBuffer&&!M.stencilBuffer){let K=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(W||jt(M)){const ot=M.depthTexture;ot&&ot.isDepthTexture&&(ot.type===qe?K=i.DEPTH_COMPONENT32F:ot.type===gn&&(K=i.DEPTH_COMPONENT24));const nt=At(M);jt(M)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt,K,M.width,M.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,K,M.width,M.height)}else i.renderbufferStorage(i.RENDERBUFFER,K,M.width,M.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,b)}else if(M.depthBuffer&&M.stencilBuffer){const K=At(M);W&&jt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,K,i.DEPTH24_STENCIL8,M.width,M.height):jt(M)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,K,i.DEPTH24_STENCIL8,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,b)}else{const K=M.textures;for(let ot=0;ot<K.length;ot++){const nt=K[ot],Ut=r.convert(nt.format,nt.colorSpace),Rt=r.convert(nt.type),ht=P(nt.internalFormat,Ut,Rt,nt.colorSpace),dt=At(M);W&&jt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,ht,M.width,M.height):jt(M)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt,ht,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ht,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Zt(b,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),tt(M.depthTexture,0);const K=n.get(M.depthTexture).__webglTexture,ot=At(M);if(M.depthTexture.format===Bn)jt(M)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(M.depthTexture.format===mi)jt(M)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Pt(b){const M=n.get(b),W=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!M.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Zt(M.__webglFramebuffer,b)}else if(W){M.__webglDepthbuffer=[];for(let K=0;K<6;K++)e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[K]),M.__webglDepthbuffer[K]=i.createRenderbuffer(),vt(M.__webglDepthbuffer[K],b,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),vt(M.__webglDepthbuffer,b,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function O(b,M,W){const K=n.get(b);M!==void 0&&wt(K.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&Pt(b)}function pe(b){const M=b.texture,W=n.get(b),K=n.get(M);b.addEventListener("dispose",z);const ot=b.textures,nt=b.isWebGLCubeRenderTarget===!0,Ut=ot.length>1,Rt=f(b)||o;if(Ut||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=M.version,a.memory.textures++),nt){W.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(o&&M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer[ht]=[];for(let dt=0;dt<M.mipmaps.length;dt++)W.__webglFramebuffer[ht][dt]=i.createFramebuffer()}else W.__webglFramebuffer[ht]=i.createFramebuffer()}else{if(o&&M.mipmaps&&M.mipmaps.length>0){W.__webglFramebuffer=[];for(let ht=0;ht<M.mipmaps.length;ht++)W.__webglFramebuffer[ht]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(Ut)if(s.drawBuffers)for(let ht=0,dt=ot.length;ht<dt;ht++){const Nt=n.get(ot[ht]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=i.createTexture(),a.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&b.samples>0&&jt(b)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ht=0;ht<ot.length;ht++){const dt=ot[ht];W.__webglColorRenderbuffer[ht]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[ht]);const Nt=r.convert(dt.format,dt.colorSpace),ct=r.convert(dt.type),le=P(dt.internalFormat,Nt,ct,dt.colorSpace,b.isXRRenderTarget===!0),Xt=At(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Xt,le,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,W.__webglColorRenderbuffer[ht])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),vt(W.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(nt){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),V(i.TEXTURE_CUBE_MAP,M,Rt);for(let ht=0;ht<6;ht++)if(o&&M.mipmaps&&M.mipmaps.length>0)for(let dt=0;dt<M.mipmaps.length;dt++)wt(W.__webglFramebuffer[ht][dt],b,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,dt);else wt(W.__webglFramebuffer[ht],b,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);v(M,Rt)&&y(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ut){for(let ht=0,dt=ot.length;ht<dt;ht++){const Nt=ot[ht],ct=n.get(Nt);e.bindTexture(i.TEXTURE_2D,ct.__webglTexture),V(i.TEXTURE_2D,Nt,Rt),wt(W.__webglFramebuffer,b,Nt,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,0),v(Nt,Rt)&&y(i.TEXTURE_2D)}e.unbindTexture()}else{let ht=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(o?ht=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ht,K.__webglTexture),V(ht,M,Rt),o&&M.mipmaps&&M.mipmaps.length>0)for(let dt=0;dt<M.mipmaps.length;dt++)wt(W.__webglFramebuffer[dt],b,M,i.COLOR_ATTACHMENT0,ht,dt);else wt(W.__webglFramebuffer,b,M,i.COLOR_ATTACHMENT0,ht,0);v(M,Rt)&&y(ht),e.unbindTexture()}b.depthBuffer&&Pt(b)}function bt(b){const M=f(b)||o,W=b.textures;for(let K=0,ot=W.length;K<ot;K++){const nt=W[K];if(v(nt,M)){const Ut=b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Rt=n.get(nt).__webglTexture;e.bindTexture(Ut,Rt),y(Ut),e.unbindTexture()}}}function Bt(b){if(o&&b.samples>0&&jt(b)===!1){const M=b.textures,W=b.width,K=b.height;let ot=i.COLOR_BUFFER_BIT;const nt=[],Ut=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Rt=n.get(b),ht=M.length>1;if(ht)for(let dt=0;dt<M.length;dt++)e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let dt=0;dt<M.length;dt++){nt.push(i.COLOR_ATTACHMENT0+dt),b.depthBuffer&&nt.push(Ut);const Nt=Rt.__ignoreDepthValues!==void 0?Rt.__ignoreDepthValues:!1;if(Nt===!1&&(b.depthBuffer&&(ot|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&(ot|=i.STENCIL_BUFFER_BIT)),ht&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[dt]),Nt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Ut]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Ut])),ht){const ct=n.get(M[dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ct,0)}i.blitFramebuffer(0,0,W,K,0,0,W,K,ot,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,nt)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ht)for(let dt=0;dt<M.length;dt++){e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,Rt.__webglColorRenderbuffer[dt]);const Nt=n.get(M[dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Rt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,Nt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}}function At(b){return Math.min(s.maxSamples,b.samples)}function jt(b){const M=n.get(b);return o&&b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function zt(b){const M=a.render.frame;u.get(b)!==M&&(u.set(b,M),b.update())}function Ht(b,M){const W=b.colorSpace,K=b.format,ot=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===vr||W!==En&&W!==mn&&(Qt.getTransfer(W)===se?o===!1?t.has("EXT_sRGB")===!0&&K===ke?(b.format=vr,b.minFilter=Ce,b.generateMipmaps=!1):M=Oa.sRGBToLinear(M):(K!==ke||ot!==Mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),M}function ne(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(h.width=b.naturalWidth||b.width,h.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(h.width=b.displayWidth,h.height=b.displayHeight):(h.width=b.width,h.height=b.height),h}this.allocateTextureUnit=Y,this.resetTextureUnits=D,this.setTexture2D=tt,this.setTexture2DArray=X,this.setTexture3D=J,this.setTextureCube=et,this.rebindTextures=O,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=jt}function Ep(i,t,e){const n=e.isWebGL2;function s(r,a=mn){let o;const c=Qt.getTransfer(a);if(r===Mn)return i.UNSIGNED_BYTE;if(r===ba)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Aa)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Vc)return i.BYTE;if(r===Wc)return i.SHORT;if(r===yr)return i.UNSIGNED_SHORT;if(r===Ta)return i.INT;if(r===gn)return i.UNSIGNED_INT;if(r===qe)return i.FLOAT;if(r===Ni)return n?i.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Xc)return i.ALPHA;if(r===ke)return i.RGBA;if(r===Yc)return i.LUMINANCE;if(r===qc)return i.LUMINANCE_ALPHA;if(r===Bn)return i.DEPTH_COMPONENT;if(r===mi)return i.DEPTH_STENCIL;if(r===vr)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Ra)return i.RED;if(r===Ca)return i.RED_INTEGER;if(r===jc)return i.RG;if(r===Pa)return i.RG_INTEGER;if(r===La)return i.RGBA_INTEGER;if(r===Ps||r===Ls||r===Ds||r===Is)if(c===se)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Ps)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ls)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ds)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Is)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Ps)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ls)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ds)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Is)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Xr||r===Yr||r===qr||r===jr)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Xr)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Yr)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===qr)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===jr)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Da)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Kr||r===Zr)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Kr)return c===se?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Zr)return c===se?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Jr||r===$r||r===Qr||r===to||r===eo||r===no||r===io||r===so||r===ro||r===oo||r===ao||r===co||r===lo||r===ho)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Jr)return c===se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===$r)return c===se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Qr)return c===se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===to)return c===se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===eo)return c===se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===no)return c===se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===io)return c===se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===so)return c===se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ro)return c===se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===oo)return c===se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===ao)return c===se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===co)return c===se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===lo)return c===se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ho)return c===se?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Us||r===uo||r===fo)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===Us)return c===se?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===uo)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===fo)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Kc||r===po||r===mo||r===go)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===Us)return o.COMPRESSED_RED_RGTC1_EXT;if(r===po)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===mo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===go)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Fn?n?i.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class wp extends Pe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class St extends de{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Tp={type:"move"};class rr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new St,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new St,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new St,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const d=e.getJointPose(_,n),f=this._getHandJoint(l,_);d!==null&&(f.matrix.fromArray(d.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=d.radius),f.visible=d!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],p=h.position.distanceTo(u.position),m=.02,g=.005;l.inputState.pinching&&p>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&p<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Tp)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new St;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const bp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ap=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Rp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Re,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}render(t,e){if(this.texture!==null){if(this.mesh===null){const n=e.cameras[0].viewport,s=new yn({extensions:{fragDepth:!0},vertexShader:bp,fragmentShader:Ap,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new U(new Ke(20,20),s)}t.render(this.mesh,e)}}reset(){this.texture=null,this.mesh=null}}class Cp extends Hn{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,p=null,m=null,g=null;const _=new Rp,d=e.getContextAttributes();let f=null,S=null;const v=[],y=[],P=new pt;let R=null;const T=new Pe;T.layers.enable(1),T.viewport=new ae;const I=new Pe;I.layers.enable(2),I.viewport=new ae;const z=[T,I],x=new wp;x.layers.enable(1),x.layers.enable(2);let A=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let st=v[V];return st===void 0&&(st=new rr,v[V]=st),st.getTargetRaySpace()},this.getControllerGrip=function(V){let st=v[V];return st===void 0&&(st=new rr,v[V]=st),st.getGripSpace()},this.getHand=function(V){let st=v[V];return st===void 0&&(st=new rr,v[V]=st),st.getHandSpace()};function Q(V){const st=y.indexOf(V.inputSource);if(st===-1)return;const gt=v[st];gt!==void 0&&(gt.update(V.inputSource,V.frame,l||a),gt.dispatchEvent({type:V.type,data:V.inputSource}))}function D(){s.removeEventListener("select",Q),s.removeEventListener("selectstart",Q),s.removeEventListener("selectend",Q),s.removeEventListener("squeeze",Q),s.removeEventListener("squeezestart",Q),s.removeEventListener("squeezeend",Q),s.removeEventListener("end",D),s.removeEventListener("inputsourceschange",Y);for(let V=0;V<v.length;V++){const st=y[V];st!==null&&(y[V]=null,v[V].disconnect(st))}A=null,q=null,_.reset(),t.setRenderTarget(f),m=null,p=null,u=null,s=null,S=null,It.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",Q),s.addEventListener("selectstart",Q),s.addEventListener("selectend",Q),s.addEventListener("squeeze",Q),s.addEventListener("squeezestart",Q),s.addEventListener("squeezeend",Q),s.addEventListener("end",D),s.addEventListener("inputsourceschange",Y),d.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(P),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const st={antialias:s.renderState.layers===void 0?d.antialias:!0,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,st),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new zn(m.framebufferWidth,m.framebufferHeight,{format:ke,type:Mn,colorSpace:t.outputColorSpace,stencilBuffer:d.stencil})}else{let st=null,gt=null,Lt=null;d.depth&&(Lt=d.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=d.stencil?mi:Bn,gt=d.stencil?Fn:gn);const wt={colorFormat:e.RGBA8,depthFormat:Lt,scaleFactor:r};u=new XRWebGLBinding(s,e),p=u.createProjectionLayer(wt),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),S=new zn(p.textureWidth,p.textureHeight,{format:ke,type:Mn,depthTexture:new Ka(p.textureWidth,p.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:d.stencil,colorSpace:t.outputColorSpace,samples:d.antialias?4:0});const vt=t.properties.get(S);vt.__ignoreDepthValues=p.ignoreDepthValues}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),It.setContext(s),It.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function Y(V){for(let st=0;st<V.removed.length;st++){const gt=V.removed[st],Lt=y.indexOf(gt);Lt>=0&&(y[Lt]=null,v[Lt].disconnect(gt))}for(let st=0;st<V.added.length;st++){const gt=V.added[st];let Lt=y.indexOf(gt);if(Lt===-1){for(let vt=0;vt<v.length;vt++)if(vt>=y.length){y.push(gt),Lt=vt;break}else if(y[vt]===null){y[vt]=gt,Lt=vt;break}if(Lt===-1)break}const wt=v[Lt];wt&&wt.connect(gt)}}const k=new w,tt=new w;function X(V,st,gt){k.setFromMatrixPosition(st.matrixWorld),tt.setFromMatrixPosition(gt.matrixWorld);const Lt=k.distanceTo(tt),wt=st.projectionMatrix.elements,vt=gt.projectionMatrix.elements,Zt=wt[14]/(wt[10]-1),Pt=wt[14]/(wt[10]+1),O=(wt[9]+1)/wt[5],pe=(wt[9]-1)/wt[5],bt=(wt[8]-1)/wt[0],Bt=(vt[8]+1)/vt[0],At=Zt*bt,jt=Zt*Bt,zt=Lt/(-bt+Bt),Ht=zt*-bt;st.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Ht),V.translateZ(zt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const ne=Zt+zt,b=Pt+zt,M=At-Ht,W=jt+(Lt-Ht),K=O*Pt/b*ne,ot=pe*Pt/b*ne;V.projectionMatrix.makePerspective(M,W,K,ot,ne,b),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function J(V,st){st===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(st.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;_.texture!==null&&(V.near=_.depthNear,V.far=_.depthFar),x.near=I.near=T.near=V.near,x.far=I.far=T.far=V.far,(A!==x.near||q!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),A=x.near,q=x.far,T.near=A,T.far=q,I.near=A,I.far=q,T.updateProjectionMatrix(),I.updateProjectionMatrix(),V.updateProjectionMatrix());const st=V.parent,gt=x.cameras;J(x,st);for(let Lt=0;Lt<gt.length;Lt++)J(gt[Lt],st);gt.length===2?X(x,T,I):x.projectionMatrix.copy(T.projectionMatrix),et(V,x,st)};function et(V,st,gt){gt===null?V.matrix.copy(st.matrixWorld):(V.matrix.copy(gt.matrixWorld),V.matrix.invert(),V.matrix.multiply(st.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(st.projectionMatrix),V.projectionMatrixInverse.copy(st.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=gi*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(p===null&&m===null))return c},this.setFoveation=function(V){c=V,p!==null&&(p.fixedFoveation=V),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=V)},this.hasDepthSensing=function(){return _.texture!==null};let lt=null;function _t(V,st){if(h=st.getViewerPose(l||a),g=st,h!==null){const gt=h.views;m!==null&&(t.setRenderTargetFramebuffer(S,m.framebuffer),t.setRenderTarget(S));let Lt=!1;gt.length!==x.cameras.length&&(x.cameras.length=0,Lt=!0);for(let vt=0;vt<gt.length;vt++){const Zt=gt[vt];let Pt=null;if(m!==null)Pt=m.getViewport(Zt);else{const pe=u.getViewSubImage(p,Zt);Pt=pe.viewport,vt===0&&(t.setRenderTargetTextures(S,pe.colorTexture,p.ignoreDepthValues?void 0:pe.depthStencilTexture),t.setRenderTarget(S))}let O=z[vt];O===void 0&&(O=new Pe,O.layers.enable(vt),O.viewport=new ae,z[vt]=O),O.matrix.fromArray(Zt.transform.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale),O.projectionMatrix.fromArray(Zt.projectionMatrix),O.projectionMatrixInverse.copy(O.projectionMatrix).invert(),O.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),vt===0&&(x.matrix.copy(O.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),Lt===!0&&x.cameras.push(O)}const wt=s.enabledFeatures;if(wt&&wt.includes("depth-sensing")){const vt=u.getDepthInformation(gt[0]);vt&&vt.isValid&&vt.texture&&_.init(t,vt,s.renderState)}}for(let gt=0;gt<v.length;gt++){const Lt=y[gt],wt=v[gt];Lt!==null&&wt!==void 0&&wt.update(Lt,st,l||a)}_.render(t,x),lt&&lt(V,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),g=null}const It=new qa;It.setAnimationLoop(_t),this.setAnimationLoop=function(V){lt=V},this.dispose=function(){}}}const Dn=new Je,Pp=new te;function Lp(i,t){function e(d,f){d.matrixAutoUpdate===!0&&d.updateMatrix(),f.value.copy(d.matrix)}function n(d,f){f.color.getRGB(d.fogColor.value,Wa(i)),f.isFog?(d.fogNear.value=f.near,d.fogFar.value=f.far):f.isFogExp2&&(d.fogDensity.value=f.density)}function s(d,f,S,v,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(d,f):f.isMeshToonMaterial?(r(d,f),u(d,f)):f.isMeshPhongMaterial?(r(d,f),h(d,f)):f.isMeshStandardMaterial?(r(d,f),p(d,f),f.isMeshPhysicalMaterial&&m(d,f,y)):f.isMeshMatcapMaterial?(r(d,f),g(d,f)):f.isMeshDepthMaterial?r(d,f):f.isMeshDistanceMaterial?(r(d,f),_(d,f)):f.isMeshNormalMaterial?r(d,f):f.isLineBasicMaterial?(a(d,f),f.isLineDashedMaterial&&o(d,f)):f.isPointsMaterial?c(d,f,S,v):f.isSpriteMaterial?l(d,f):f.isShadowMaterial?(d.color.value.copy(f.color),d.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(d,f){d.opacity.value=f.opacity,f.color&&d.diffuse.value.copy(f.color),f.emissive&&d.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(d.map.value=f.map,e(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,e(f.alphaMap,d.alphaMapTransform)),f.bumpMap&&(d.bumpMap.value=f.bumpMap,e(f.bumpMap,d.bumpMapTransform),d.bumpScale.value=f.bumpScale,f.side===Le&&(d.bumpScale.value*=-1)),f.normalMap&&(d.normalMap.value=f.normalMap,e(f.normalMap,d.normalMapTransform),d.normalScale.value.copy(f.normalScale),f.side===Le&&d.normalScale.value.negate()),f.displacementMap&&(d.displacementMap.value=f.displacementMap,e(f.displacementMap,d.displacementMapTransform),d.displacementScale.value=f.displacementScale,d.displacementBias.value=f.displacementBias),f.emissiveMap&&(d.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,d.emissiveMapTransform)),f.specularMap&&(d.specularMap.value=f.specularMap,e(f.specularMap,d.specularMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest);const S=t.get(f),v=S.envMap,y=S.envMapRotation;if(v&&(d.envMap.value=v,Dn.copy(y),Dn.x*=-1,Dn.y*=-1,Dn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Dn.y*=-1,Dn.z*=-1),d.envMapRotation.value.setFromMatrix4(Pp.makeRotationFromEuler(Dn)),d.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=f.reflectivity,d.ior.value=f.ior,d.refractionRatio.value=f.refractionRatio),f.lightMap){d.lightMap.value=f.lightMap;const P=i._useLegacyLights===!0?Math.PI:1;d.lightMapIntensity.value=f.lightMapIntensity*P,e(f.lightMap,d.lightMapTransform)}f.aoMap&&(d.aoMap.value=f.aoMap,d.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,d.aoMapTransform))}function a(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,f.map&&(d.map.value=f.map,e(f.map,d.mapTransform))}function o(d,f){d.dashSize.value=f.dashSize,d.totalSize.value=f.dashSize+f.gapSize,d.scale.value=f.scale}function c(d,f,S,v){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.size.value=f.size*S,d.scale.value=v*.5,f.map&&(d.map.value=f.map,e(f.map,d.uvTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,e(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function l(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.rotation.value=f.rotation,f.map&&(d.map.value=f.map,e(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,e(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function h(d,f){d.specular.value.copy(f.specular),d.shininess.value=Math.max(f.shininess,1e-4)}function u(d,f){f.gradientMap&&(d.gradientMap.value=f.gradientMap)}function p(d,f){d.metalness.value=f.metalness,f.metalnessMap&&(d.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,d.metalnessMapTransform)),d.roughness.value=f.roughness,f.roughnessMap&&(d.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,d.roughnessMapTransform)),t.get(f).envMap&&(d.envMapIntensity.value=f.envMapIntensity)}function m(d,f,S){d.ior.value=f.ior,f.sheen>0&&(d.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),d.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(d.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,d.sheenColorMapTransform)),f.sheenRoughnessMap&&(d.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,d.sheenRoughnessMapTransform))),f.clearcoat>0&&(d.clearcoat.value=f.clearcoat,d.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(d.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,d.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(d.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Le&&d.clearcoatNormalScale.value.negate())),f.iridescence>0&&(d.iridescence.value=f.iridescence,d.iridescenceIOR.value=f.iridescenceIOR,d.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(d.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,d.iridescenceMapTransform)),f.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),f.transmission>0&&(d.transmission.value=f.transmission,d.transmissionSamplerMap.value=S.texture,d.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(d.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,d.transmissionMapTransform)),d.thickness.value=f.thickness,f.thicknessMap&&(d.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=f.attenuationDistance,d.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(d.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(d.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=f.specularIntensity,d.specularColor.value.copy(f.specularColor),f.specularColorMap&&(d.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,d.specularColorMapTransform)),f.specularIntensityMap&&(d.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,f){f.matcap&&(d.matcap.value=f.matcap)}function _(d,f){const S=t.get(f).light;d.referencePosition.value.setFromMatrixPosition(S.matrixWorld),d.nearDistance.value=S.shadow.camera.near,d.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Dp(i,t,e,n){let s={},r={},a=[];const o=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(S,v){const y=v.program;n.uniformBlockBinding(S,y)}function l(S,v){let y=s[S.id];y===void 0&&(g(S),y=h(S),s[S.id]=y,S.addEventListener("dispose",d));const P=v.program;n.updateUBOMapping(S,P);const R=t.render.frame;r[S.id]!==R&&(p(S),r[S.id]=R)}function h(S){const v=u();S.__bindingPointIndex=v;const y=i.createBuffer(),P=S.__size,R=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,P,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,y),y}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(S){const v=s[S.id],y=S.uniforms,P=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let R=0,T=y.length;R<T;R++){const I=Array.isArray(y[R])?y[R]:[y[R]];for(let z=0,x=I.length;z<x;z++){const A=I[z];if(m(A,R,z,P)===!0){const q=A.__offset,Q=Array.isArray(A.value)?A.value:[A.value];let D=0;for(let Y=0;Y<Q.length;Y++){const k=Q[Y],tt=_(k);typeof k=="number"||typeof k=="boolean"?(A.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,q+D,A.__data)):k.isMatrix3?(A.__data[0]=k.elements[0],A.__data[1]=k.elements[1],A.__data[2]=k.elements[2],A.__data[3]=0,A.__data[4]=k.elements[3],A.__data[5]=k.elements[4],A.__data[6]=k.elements[5],A.__data[7]=0,A.__data[8]=k.elements[6],A.__data[9]=k.elements[7],A.__data[10]=k.elements[8],A.__data[11]=0):(k.toArray(A.__data,D),D+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,q,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(S,v,y,P){const R=S.value,T=v+"_"+y;if(P[T]===void 0)return typeof R=="number"||typeof R=="boolean"?P[T]=R:P[T]=R.clone(),!0;{const I=P[T];if(typeof R=="number"||typeof R=="boolean"){if(I!==R)return P[T]=R,!0}else if(I.equals(R)===!1)return I.copy(R),!0}return!1}function g(S){const v=S.uniforms;let y=0;const P=16;for(let T=0,I=v.length;T<I;T++){const z=Array.isArray(v[T])?v[T]:[v[T]];for(let x=0,A=z.length;x<A;x++){const q=z[x],Q=Array.isArray(q.value)?q.value:[q.value];for(let D=0,Y=Q.length;D<Y;D++){const k=Q[D],tt=_(k),X=y%P;X!==0&&P-X<tt.boundary&&(y+=P-X),q.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=y,y+=tt.storage}}}const R=y%P;return R>0&&(y+=P-R),S.__size=y,S.__cache={},this}function _(S){const v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function d(S){const v=S.target;v.removeEventListener("dispose",d);const y=a.indexOf(v.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function f(){for(const S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:c,update:l,dispose:f}}class ec{constructor(t={}){const{canvas:e=Ml(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=a;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,d=null;const f=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=We,this._useLegacyLights=!1,this.toneMapping=xn,this.toneMappingExposure=1;const v=this;let y=!1,P=0,R=0,T=null,I=-1,z=null;const x=new ae,A=new ae;let q=null;const Q=new Ft(0);let D=0,Y=e.width,k=e.height,tt=1,X=null,J=null;const et=new ae(0,0,Y,k),lt=new ae(0,0,Y,k);let _t=!1;const It=new br;let V=!1,st=!1,gt=null;const Lt=new te,wt=new pt,vt=new w,Zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Pt(){return T===null?tt:1}let O=n;function pe(E,N){for(let G=0;G<E.length;G++){const H=E[G],B=e.getContext(H,N);if(B!==null)return B}return null}try{const E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Sr}`),e.addEventListener("webglcontextlost",Mt,!1),e.addEventListener("webglcontextrestored",L,!1),e.addEventListener("webglcontextcreationerror",at,!1),O===null){const N=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&N.shift(),O=pe(N,E),O===null)throw pe(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&O instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),O.getShaderPrecisionFormat===void 0&&(O.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let bt,Bt,At,jt,zt,Ht,ne,b,M,W,K,ot,nt,Ut,Rt,ht,dt,Nt,ct,le,Xt,Tt,xt,yt;function C(){bt=new Fd(O),Bt=new Ld(O,bt,t),bt.init(Bt),Tt=new Ep(O,bt,Bt),At=new Sp(O,bt,Bt),jt=new Gd(O),zt=new ap,Ht=new yp(O,bt,At,zt,Bt,Tt,jt),ne=new Id(v),b=new Od(v),M=new Yl(O,Bt),xt=new Cd(O,bt,M,Bt),W=new Bd(O,M,jt,xt),K=new Wd(O,W,M,jt),ct=new Vd(O,Bt,Ht),ht=new Dd(zt),ot=new op(v,ne,b,bt,Bt,xt,ht),nt=new Lp(v,zt),Ut=new lp,Rt=new mp(bt,Bt),Nt=new Rd(v,ne,b,At,K,p,c),dt=new Mp(v,K,Bt),yt=new Dp(O,jt,Bt,At),le=new Pd(O,bt,jt,Bt),Xt=new zd(O,bt,jt,Bt),jt.programs=ot.programs,v.capabilities=Bt,v.extensions=bt,v.properties=zt,v.renderLists=Ut,v.shadowMap=dt,v.state=At,v.info=jt}C();const Z=new Cp(v,O);this.xr=Z,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const E=bt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=bt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(E){E!==void 0&&(tt=E,this.setSize(Y,k,!1))},this.getSize=function(E){return E.set(Y,k)},this.setSize=function(E,N,G=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=E,k=N,e.width=Math.floor(E*tt),e.height=Math.floor(N*tt),G===!0&&(e.style.width=E+"px",e.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(Y*tt,k*tt).floor()},this.setDrawingBufferSize=function(E,N,G){Y=E,k=N,tt=G,e.width=Math.floor(E*G),e.height=Math.floor(N*G),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(x)},this.getViewport=function(E){return E.copy(et)},this.setViewport=function(E,N,G,H){E.isVector4?et.set(E.x,E.y,E.z,E.w):et.set(E,N,G,H),At.viewport(x.copy(et).multiplyScalar(tt).round())},this.getScissor=function(E){return E.copy(lt)},this.setScissor=function(E,N,G,H){E.isVector4?lt.set(E.x,E.y,E.z,E.w):lt.set(E,N,G,H),At.scissor(A.copy(lt).multiplyScalar(tt).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(E){At.setScissorTest(_t=E)},this.setOpaqueSort=function(E){X=E},this.setTransparentSort=function(E){J=E},this.getClearColor=function(E){return E.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor.apply(Nt,arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha.apply(Nt,arguments)},this.clear=function(E=!0,N=!0,G=!0){let H=0;if(E){let B=!1;if(T!==null){const mt=T.texture.format;B=mt===La||mt===Pa||mt===Ca}if(B){const mt=T.texture.type,Et=mt===Mn||mt===gn||mt===yr||mt===Fn||mt===ba||mt===Aa,Ct=Nt.getClearColor(),Dt=Nt.getClearAlpha(),Yt=Ct.r,Ot=Ct.g,Gt=Ct.b;Et?(m[0]=Yt,m[1]=Ot,m[2]=Gt,m[3]=Dt,O.clearBufferuiv(O.COLOR,0,m)):(g[0]=Yt,g[1]=Ot,g[2]=Gt,g[3]=Dt,O.clearBufferiv(O.COLOR,0,g))}else H|=O.COLOR_BUFFER_BIT}N&&(H|=O.DEPTH_BUFFER_BIT),G&&(H|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Mt,!1),e.removeEventListener("webglcontextrestored",L,!1),e.removeEventListener("webglcontextcreationerror",at,!1),Ut.dispose(),Rt.dispose(),zt.dispose(),ne.dispose(),b.dispose(),K.dispose(),xt.dispose(),yt.dispose(),ot.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",he),Z.removeEventListener("sessionend",Jt),gt&&(gt.dispose(),gt=null),ie.stop()};function Mt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const E=jt.autoReset,N=dt.enabled,G=dt.autoUpdate,H=dt.needsUpdate,B=dt.type;C(),jt.autoReset=E,dt.enabled=N,dt.autoUpdate=G,dt.needsUpdate=H,dt.type=B}function at(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function F(E){const N=E.target;N.removeEventListener("dispose",F),it(N)}function it(E){ft(E),zt.remove(E)}function ft(E){const N=zt.get(E).programs;N!==void 0&&(N.forEach(function(G){ot.releaseProgram(G)}),E.isShaderMaterial&&ot.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,G,H,B,mt){N===null&&(N=Zt);const Et=B.isMesh&&B.matrixWorld.determinant()<0,Ct=sc(E,N,G,H,B);At.setMaterial(H,Et);let Dt=G.index,Yt=1;if(H.wireframe===!0){if(Dt=W.getWireframeAttribute(G),Dt===void 0)return;Yt=2}const Ot=G.drawRange,Gt=G.attributes.position;let ue=Ot.start*Yt,De=(Ot.start+Ot.count)*Yt;mt!==null&&(ue=Math.max(ue,mt.start*Yt),De=Math.min(De,(mt.start+mt.count)*Yt)),Dt!==null?(ue=Math.max(ue,0),De=Math.min(De,Dt.count)):Gt!=null&&(ue=Math.max(ue,0),De=Math.min(De,Gt.count));const _e=De-ue;if(_e<0||_e===1/0)return;xt.setup(B,H,Ct,G,Dt);let $e,ce=le;if(Dt!==null&&($e=M.get(Dt),ce=Xt,ce.setIndex($e)),B.isMesh)H.wireframe===!0?(At.setLineWidth(H.wireframeLinewidth*Pt()),ce.setMode(O.LINES)):ce.setMode(O.TRIANGLES);else if(B.isLine){let kt=H.linewidth;kt===void 0&&(kt=1),At.setLineWidth(kt*Pt()),B.isLineSegments?ce.setMode(O.LINES):B.isLineLoop?ce.setMode(O.LINE_LOOP):ce.setMode(O.LINE_STRIP)}else B.isPoints?ce.setMode(O.POINTS):B.isSprite&&ce.setMode(O.TRIANGLES);if(B.isBatchedMesh)ce.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)ce.renderInstances(ue,_e,B.count);else if(G.isInstancedBufferGeometry){const kt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Ts=Math.min(G.instanceCount,kt);ce.renderInstances(ue,_e,Ts)}else ce.render(ue,_e)};function qt(E,N,G){E.transparent===!0&&E.side===Ye&&E.forceSinglePass===!1?(E.side=Le,E.needsUpdate=!0,ki(E,N,G),E.side=Sn,E.needsUpdate=!0,ki(E,N,G),E.side=Ye):ki(E,N,G)}this.compile=function(E,N,G=null){G===null&&(G=E),d=Rt.get(G),d.init(),S.push(d),G.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(d.pushLight(B),B.castShadow&&d.pushShadow(B))}),E!==G&&E.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(d.pushLight(B),B.castShadow&&d.pushShadow(B))}),d.setupLights(v._useLegacyLights);const H=new Set;return E.traverse(function(B){const mt=B.material;if(mt)if(Array.isArray(mt))for(let Et=0;Et<mt.length;Et++){const Ct=mt[Et];qt(Ct,G,B),H.add(Ct)}else qt(mt,G,B),H.add(mt)}),S.pop(),d=null,H},this.compileAsync=function(E,N,G=null){const H=this.compile(E,N,G);return new Promise(B=>{function mt(){if(H.forEach(function(Et){zt.get(Et).currentProgram.isReady()&&H.delete(Et)}),H.size===0){B(E);return}setTimeout(mt,10)}bt.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let $t=null;function ee(E){$t&&$t(E)}function he(){ie.stop()}function Jt(){ie.start()}const ie=new qa;ie.setAnimationLoop(ee),typeof self<"u"&&ie.setContext(self),this.setAnimationLoop=function(E){$t=E,Z.setAnimationLoop(E),E===null?ie.stop():ie.start()},Z.addEventListener("sessionstart",he),Z.addEventListener("sessionend",Jt),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(N),N=Z.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,N,T),d=Rt.get(E,S.length),d.init(),S.push(d),Lt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),It.setFromProjectionMatrix(Lt),st=this.localClippingEnabled,V=ht.init(this.clippingPlanes,st),_=Ut.get(E,f.length),_.init(),f.push(_),ye(E,N,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(X,J),this.info.render.frame++,V===!0&&ht.beginShadows();const G=d.state.shadowsArray;if(dt.render(G,E,N),V===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1)&&Nt.render(_,E),d.setupLights(v._useLegacyLights),N.isArrayCamera){const H=N.cameras;for(let B=0,mt=H.length;B<mt;B++){const Et=H[B];wn(_,E,Et,Et.viewport)}}else wn(_,E,N);T!==null&&(Ht.updateMultisampleRenderTarget(T),Ht.updateRenderTargetMipmap(T)),E.isScene===!0&&E.onAfterRender(v,E,N),xt.resetDefaultState(),I=-1,z=null,S.pop(),S.length>0?d=S[S.length-1]:d=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function ye(E,N,G,H){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)d.pushLight(E),E.castShadow&&d.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||It.intersectsSprite(E)){H&&vt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Lt);const Et=K.update(E),Ct=E.material;Ct.visible&&_.push(E,Et,Ct,G,vt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||It.intersectsObject(E))){const Et=K.update(E),Ct=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),vt.copy(E.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),vt.copy(Et.boundingSphere.center)),vt.applyMatrix4(E.matrixWorld).applyMatrix4(Lt)),Array.isArray(Ct)){const Dt=Et.groups;for(let Yt=0,Ot=Dt.length;Yt<Ot;Yt++){const Gt=Dt[Yt],ue=Ct[Gt.materialIndex];ue&&ue.visible&&_.push(E,Et,ue,G,vt.z,Gt)}}else Ct.visible&&_.push(E,Et,Ct,G,vt.z,null)}}const mt=E.children;for(let Et=0,Ct=mt.length;Et<Ct;Et++)ye(mt[Et],N,G,H)}function wn(E,N,G,H){const B=E.opaque,mt=E.transmissive,Et=E.transparent;d.setupLightsView(G),V===!0&&ht.setGlobalState(v.clippingPlanes,G),mt.length>0&&Gi(B,mt,N,G),H&&At.viewport(x.copy(H)),B.length>0&&Hi(B,N,G),mt.length>0&&Hi(mt,N,G),Et.length>0&&Hi(Et,N,G),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function Gi(E,N,G,H){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;const mt=Bt.isWebGL2;gt===null&&(gt=new zn(1,1,{generateMipmaps:!0,type:bt.has("EXT_color_buffer_half_float")?Ni:Mn,minFilter:On,samples:mt?4:0})),v.getDrawingBufferSize(wt),mt?gt.setSize(wt.x,wt.y):gt.setSize(xs(wt.x),xs(wt.y));const Et=v.getRenderTarget();v.setRenderTarget(gt),v.getClearColor(Q),D=v.getClearAlpha(),D<1&&v.setClearColor(16777215,.5),v.clear();const Ct=v.toneMapping;v.toneMapping=xn,Hi(E,G,H),Ht.updateMultisampleRenderTarget(gt),Ht.updateRenderTargetMipmap(gt);let Dt=!1;for(let Yt=0,Ot=N.length;Yt<Ot;Yt++){const Gt=N[Yt],ue=Gt.object,De=Gt.geometry,_e=Gt.material,$e=Gt.group;if(_e.side===Ye&&ue.layers.test(H.layers)){const ce=_e.side;_e.side=Le,_e.needsUpdate=!0,Ir(ue,G,H,De,_e,$e),_e.side=ce,_e.needsUpdate=!0,Dt=!0}}Dt===!0&&(Ht.updateMultisampleRenderTarget(gt),Ht.updateRenderTargetMipmap(gt)),v.setRenderTarget(Et),v.setClearColor(Q,D),v.toneMapping=Ct}function Hi(E,N,G){const H=N.isScene===!0?N.overrideMaterial:null;for(let B=0,mt=E.length;B<mt;B++){const Et=E[B],Ct=Et.object,Dt=Et.geometry,Yt=H===null?Et.material:H,Ot=Et.group;Ct.layers.test(G.layers)&&Ir(Ct,N,G,Dt,Yt,Ot)}}function Ir(E,N,G,H,B,mt){E.onBeforeRender(v,N,G,H,B,mt),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),B.onBeforeRender(v,N,G,H,E,mt),B.transparent===!0&&B.side===Ye&&B.forceSinglePass===!1?(B.side=Le,B.needsUpdate=!0,v.renderBufferDirect(G,N,H,B,E,mt),B.side=Sn,B.needsUpdate=!0,v.renderBufferDirect(G,N,H,B,E,mt),B.side=Ye):v.renderBufferDirect(G,N,H,B,E,mt),E.onAfterRender(v,N,G,H,B,mt)}function ki(E,N,G){N.isScene!==!0&&(N=Zt);const H=zt.get(E),B=d.state.lights,mt=d.state.shadowsArray,Et=B.state.version,Ct=ot.getParameters(E,B.state,mt,N,G),Dt=ot.getProgramCacheKey(Ct);let Yt=H.programs;H.environment=E.isMeshStandardMaterial?N.environment:null,H.fog=N.fog,H.envMap=(E.isMeshStandardMaterial?b:ne).get(E.envMap||H.environment),H.envMapRotation=H.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,Yt===void 0&&(E.addEventListener("dispose",F),Yt=new Map,H.programs=Yt);let Ot=Yt.get(Dt);if(Ot!==void 0){if(H.currentProgram===Ot&&H.lightsStateVersion===Et)return Nr(E,Ct),Ot}else Ct.uniforms=ot.getUniforms(E),E.onBuild(G,Ct,v),E.onBeforeCompile(Ct,v),Ot=ot.acquireProgram(Ct,Dt),Yt.set(Dt,Ot),H.uniforms=Ct.uniforms;const Gt=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Gt.clippingPlanes=ht.uniform),Nr(E,Ct),H.needsLights=oc(E),H.lightsStateVersion=Et,H.needsLights&&(Gt.ambientLightColor.value=B.state.ambient,Gt.lightProbe.value=B.state.probe,Gt.directionalLights.value=B.state.directional,Gt.directionalLightShadows.value=B.state.directionalShadow,Gt.spotLights.value=B.state.spot,Gt.spotLightShadows.value=B.state.spotShadow,Gt.rectAreaLights.value=B.state.rectArea,Gt.ltc_1.value=B.state.rectAreaLTC1,Gt.ltc_2.value=B.state.rectAreaLTC2,Gt.pointLights.value=B.state.point,Gt.pointLightShadows.value=B.state.pointShadow,Gt.hemisphereLights.value=B.state.hemi,Gt.directionalShadowMap.value=B.state.directionalShadowMap,Gt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Gt.spotShadowMap.value=B.state.spotShadowMap,Gt.spotLightMatrix.value=B.state.spotLightMatrix,Gt.spotLightMap.value=B.state.spotLightMap,Gt.pointShadowMap.value=B.state.pointShadowMap,Gt.pointShadowMatrix.value=B.state.pointShadowMatrix),H.currentProgram=Ot,H.uniformsList=null,Ot}function Ur(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=fs.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function Nr(E,N){const G=zt.get(E);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.instancingMorph=N.instancingMorph,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function sc(E,N,G,H,B){N.isScene!==!0&&(N=Zt),Ht.resetTextureUnits();const mt=N.fog,Et=H.isMeshStandardMaterial?N.environment:null,Ct=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:En,Dt=(H.isMeshStandardMaterial?b:ne).get(H.envMap||Et),Yt=H.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ot=!!G.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Gt=!!G.morphAttributes.position,ue=!!G.morphAttributes.normal,De=!!G.morphAttributes.color;let _e=xn;H.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(_e=v.toneMapping);const $e=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ce=$e!==void 0?$e.length:0,kt=zt.get(H),Ts=d.state.lights;if(V===!0&&(st===!0||E!==z)){const Oe=E===z&&H.id===I;ht.setState(H,E,Oe)}let oe=!1;H.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==Ts.state.version||kt.outputColorSpace!==Ct||B.isBatchedMesh&&kt.batching===!1||!B.isBatchedMesh&&kt.batching===!0||B.isInstancedMesh&&kt.instancing===!1||!B.isInstancedMesh&&kt.instancing===!0||B.isSkinnedMesh&&kt.skinning===!1||!B.isSkinnedMesh&&kt.skinning===!0||B.isInstancedMesh&&kt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&kt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&kt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&kt.instancingMorph===!1&&B.morphTexture!==null||kt.envMap!==Dt||H.fog===!0&&kt.fog!==mt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==ht.numPlanes||kt.numIntersection!==ht.numIntersection)||kt.vertexAlphas!==Yt||kt.vertexTangents!==Ot||kt.morphTargets!==Gt||kt.morphNormals!==ue||kt.morphColors!==De||kt.toneMapping!==_e||Bt.isWebGL2===!0&&kt.morphTargetsCount!==ce)&&(oe=!0):(oe=!0,kt.__version=H.version);let Tn=kt.currentProgram;oe===!0&&(Tn=ki(H,N,B));let Or=!1,Mi=!1,bs=!1;const Ee=Tn.getUniforms(),bn=kt.uniforms;if(At.useProgram(Tn.program)&&(Or=!0,Mi=!0,bs=!0),H.id!==I&&(I=H.id,Mi=!0),Or||z!==E){Ee.setValue(O,"projectionMatrix",E.projectionMatrix),Ee.setValue(O,"viewMatrix",E.matrixWorldInverse);const Oe=Ee.map.cameraPosition;Oe!==void 0&&Oe.setValue(O,vt.setFromMatrixPosition(E.matrixWorld)),Bt.logarithmicDepthBuffer&&Ee.setValue(O,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Ee.setValue(O,"isOrthographic",E.isOrthographicCamera===!0),z!==E&&(z=E,Mi=!0,bs=!0)}if(B.isSkinnedMesh){Ee.setOptional(O,B,"bindMatrix"),Ee.setOptional(O,B,"bindMatrixInverse");const Oe=B.skeleton;Oe&&(Bt.floatVertexTextures?(Oe.boneTexture===null&&Oe.computeBoneTexture(),Ee.setValue(O,"boneTexture",Oe.boneTexture,Ht)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(Ee.setOptional(O,B,"batchingTexture"),Ee.setValue(O,"batchingTexture",B._matricesTexture,Ht));const As=G.morphAttributes;if((As.position!==void 0||As.normal!==void 0||As.color!==void 0&&Bt.isWebGL2===!0)&&ct.update(B,G,Tn),(Mi||kt.receiveShadow!==B.receiveShadow)&&(kt.receiveShadow=B.receiveShadow,Ee.setValue(O,"receiveShadow",B.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(bn.envMap.value=Dt,bn.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),Mi&&(Ee.setValue(O,"toneMappingExposure",v.toneMappingExposure),kt.needsLights&&rc(bn,bs),mt&&H.fog===!0&&nt.refreshFogUniforms(bn,mt),nt.refreshMaterialUniforms(bn,H,tt,k,gt),fs.upload(O,Ur(kt),bn,Ht)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(fs.upload(O,Ur(kt),bn,Ht),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Ee.setValue(O,"center",B.center),Ee.setValue(O,"modelViewMatrix",B.modelViewMatrix),Ee.setValue(O,"normalMatrix",B.normalMatrix),Ee.setValue(O,"modelMatrix",B.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Oe=H.uniformsGroups;for(let Rs=0,ac=Oe.length;Rs<ac;Rs++)if(Bt.isWebGL2){const Fr=Oe[Rs];yt.update(Fr,Tn),yt.bind(Fr,Tn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Tn}function rc(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function oc(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(E,N,G){zt.get(E.texture).__webglTexture=N,zt.get(E.depthTexture).__webglTexture=G;const H=zt.get(E);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=G===void 0,H.__autoAllocateDepthBuffer||bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,N){const G=zt.get(E);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,G=0){T=E,P=N,R=G;let H=!0,B=null,mt=!1,Et=!1;if(E){const Dt=zt.get(E);Dt.__useDefaultFramebuffer!==void 0?(At.bindFramebuffer(O.FRAMEBUFFER,null),H=!1):Dt.__webglFramebuffer===void 0?Ht.setupRenderTarget(E):Dt.__hasExternalTextures&&Ht.rebindTextures(E,zt.get(E.texture).__webglTexture,zt.get(E.depthTexture).__webglTexture);const Yt=E.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(Et=!0);const Ot=zt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ot[N])?B=Ot[N][G]:B=Ot[N],mt=!0):Bt.isWebGL2&&E.samples>0&&Ht.useMultisampledRTT(E)===!1?B=zt.get(E).__webglMultisampledFramebuffer:Array.isArray(Ot)?B=Ot[G]:B=Ot,x.copy(E.viewport),A.copy(E.scissor),q=E.scissorTest}else x.copy(et).multiplyScalar(tt).floor(),A.copy(lt).multiplyScalar(tt).floor(),q=_t;if(At.bindFramebuffer(O.FRAMEBUFFER,B)&&Bt.drawBuffers&&H&&At.drawBuffers(E,B),At.viewport(x),At.scissor(A),At.setScissorTest(q),mt){const Dt=zt.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+N,Dt.__webglTexture,G)}else if(Et){const Dt=zt.get(E.texture),Yt=N||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Dt.__webglTexture,G||0,Yt)}I=-1},this.readRenderTargetPixels=function(E,N,G,H,B,mt,Et){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=zt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Et!==void 0&&(Ct=Ct[Et]),Ct){At.bindFramebuffer(O.FRAMEBUFFER,Ct);try{const Dt=E.texture,Yt=Dt.format,Ot=Dt.type;if(Yt!==ke&&Tt.convert(Yt)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Gt=Ot===Ni&&(bt.has("EXT_color_buffer_half_float")||Bt.isWebGL2&&bt.has("EXT_color_buffer_float"));if(Ot!==Mn&&Tt.convert(Ot)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ot===qe&&(Bt.isWebGL2||bt.has("OES_texture_float")||bt.has("WEBGL_color_buffer_float")))&&!Gt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-H&&G>=0&&G<=E.height-B&&O.readPixels(N,G,H,B,Tt.convert(Yt),Tt.convert(Ot),mt)}finally{const Dt=T!==null?zt.get(T).__webglFramebuffer:null;At.bindFramebuffer(O.FRAMEBUFFER,Dt)}}},this.copyFramebufferToTexture=function(E,N,G=0){const H=Math.pow(2,-G),B=Math.floor(N.image.width*H),mt=Math.floor(N.image.height*H);Ht.setTexture2D(N,0),O.copyTexSubImage2D(O.TEXTURE_2D,G,0,0,E.x,E.y,B,mt),At.unbindTexture()},this.copyTextureToTexture=function(E,N,G,H=0){const B=N.image.width,mt=N.image.height,Et=Tt.convert(G.format),Ct=Tt.convert(G.type);Ht.setTexture2D(G,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,G.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,G.unpackAlignment),N.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,H,E.x,E.y,B,mt,Et,Ct,N.image.data):N.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,H,E.x,E.y,N.mipmaps[0].width,N.mipmaps[0].height,Et,N.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,H,E.x,E.y,Et,Ct,N.image),H===0&&G.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),At.unbindTexture()},this.copyTextureToTexture3D=function(E,N,G,H,B=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const mt=Math.round(E.max.x-E.min.x),Et=Math.round(E.max.y-E.min.y),Ct=E.max.z-E.min.z+1,Dt=Tt.convert(H.format),Yt=Tt.convert(H.type);let Ot;if(H.isData3DTexture)Ht.setTexture3D(H,0),Ot=O.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)Ht.setTexture2DArray(H,0),Ot=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,H.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,H.unpackAlignment);const Gt=O.getParameter(O.UNPACK_ROW_LENGTH),ue=O.getParameter(O.UNPACK_IMAGE_HEIGHT),De=O.getParameter(O.UNPACK_SKIP_PIXELS),_e=O.getParameter(O.UNPACK_SKIP_ROWS),$e=O.getParameter(O.UNPACK_SKIP_IMAGES),ce=G.isCompressedTexture?G.mipmaps[B]:G.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,ce.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ce.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,E.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,E.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,E.min.z),G.isDataTexture||G.isData3DTexture?O.texSubImage3D(Ot,B,N.x,N.y,N.z,mt,Et,Ct,Dt,Yt,ce.data):H.isCompressedArrayTexture?O.compressedTexSubImage3D(Ot,B,N.x,N.y,N.z,mt,Et,Ct,Dt,ce.data):O.texSubImage3D(Ot,B,N.x,N.y,N.z,mt,Et,Ct,Dt,Yt,ce),O.pixelStorei(O.UNPACK_ROW_LENGTH,Gt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ue),O.pixelStorei(O.UNPACK_SKIP_PIXELS,De),O.pixelStorei(O.UNPACK_SKIP_ROWS,_e),O.pixelStorei(O.UNPACK_SKIP_IMAGES,$e),B===0&&H.generateMipmaps&&O.generateMipmap(Ot),At.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?Ht.setTextureCube(E,0):E.isData3DTexture?Ht.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Ht.setTexture2DArray(E,0):Ht.setTexture2D(E,0),At.unbindTexture()},this.resetState=function(){P=0,R=0,T=null,At.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return on}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Er?"display-p3":"srgb",e.unpackColorSpace=Qt.workingColorSpace===Es?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Ip extends ec{}Ip.prototype.isWebGL1Renderer=!0;class Rr{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ft(t),this.density=e}clone(){return new Rr(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Up extends de{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Je,this.environmentRotation=new Je,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Np extends Re{constructor(t=null,e=1,n=1,s,r,a,o,c,l=Se,h=Se,u,p){super(null,a,o,c,l,h,s,r,u,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class aa extends Ve{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ai=new te,ca=new te,hs=[],la=new kn,Op=new te,bi=new U,Ai=new Fi;class Fp extends U{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new aa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Op)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new kn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ai),la.copy(t.boundingBox).applyMatrix4(ai),this.boundingBox.union(la)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ai),Ai.copy(t.boundingSphere).applyMatrix4(ai),this.boundingSphere.union(Ai)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(bi.geometry=this.geometry,bi.material=this.material,bi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ai.copy(this.boundingSphere),Ai.applyMatrix4(n),t.ray.intersectsSphere(Ai)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ai),ca.multiplyMatrices(n,ai),bi.matrixWorld=ca,bi.raycast(t,hs);for(let a=0,o=hs.length;a<o;a++){const c=hs[a];c.instanceId=r,c.object=this,e.push(c)}hs.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new aa(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Np(new Float32Array(s*this.count),s,this.count,Ra,qe));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class an{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);const h=n[s],p=n[s+1]-h,m=(a-h)/p;return(s+m)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new pt:new w);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new w,s=[],r=[],a=[],o=new w,c=new te;for(let m=0;m<=t;m++){const g=m/t;s[m]=this.getTangentAt(g,new w)}r[0]=new w,a[0]=new w;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),p<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(s[m-1],s[m]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(xe(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(c.makeRotationAxis(o,g))}a[m].crossVectors(s[m],r[m])}if(e===!0){let m=Math.acos(xe(r[0].dot(r[t]),-1,1));m/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(m=-m);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],m*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class nc extends an{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new pt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),p=c-this.aX,m=l-this.aY;c=p*h-m*u+this.aX,l=p*u+m*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Bp extends nc{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Cr(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let p=(a-r)/l-(o-r)/(l+h)+(o-a)/h,m=(o-a)/h-(c-a)/(h+u)+(c-o)/u;p*=h,m*=h,s(a,o,p,m)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const us=new w,or=new Cr,ar=new Cr,cr=new Cr;class Ss extends an{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new w){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(us.subVectors(s[0],s[1]).add(s[0]),l=us);const u=s[o%r],p=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(us.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=us),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),m),_=Math.pow(u.distanceToSquared(p),m),d=Math.pow(p.distanceToSquared(h),m);_<1e-4&&(_=1),g<1e-4&&(g=_),d<1e-4&&(d=_),or.initNonuniformCatmullRom(l.x,u.x,p.x,h.x,g,_,d),ar.initNonuniformCatmullRom(l.y,u.y,p.y,h.y,g,_,d),cr.initNonuniformCatmullRom(l.z,u.z,p.z,h.z,g,_,d)}else this.curveType==="catmullrom"&&(or.initCatmullRom(l.x,u.x,p.x,h.x,this.tension),ar.initCatmullRom(l.y,u.y,p.y,h.y,this.tension),cr.initCatmullRom(l.z,u.z,p.z,h.z,this.tension));return n.set(or.calc(c),ar.calc(c),cr.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new w().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ha(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function zp(i,t){const e=1-i;return e*e*t}function Gp(i,t){return 2*(1-i)*i*t}function Hp(i,t){return i*i*t}function Di(i,t,e,n){return zp(i,t)+Gp(i,e)+Hp(i,n)}function kp(i,t){const e=1-i;return e*e*e*t}function Vp(i,t){const e=1-i;return 3*e*e*i*t}function Wp(i,t){return 3*(1-i)*i*i*t}function Xp(i,t){return i*i*i*t}function Ii(i,t,e,n,s){return kp(i,t)+Vp(i,e)+Wp(i,n)+Xp(i,s)}class Yp extends an{constructor(t=new pt,e=new pt,n=new pt,s=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new pt){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ii(t,s.x,r.x,a.x,o.x),Ii(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class qp extends an{constructor(t=new w,e=new w,n=new w,s=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new w){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ii(t,s.x,r.x,a.x,o.x),Ii(t,s.y,r.y,a.y,o.y),Ii(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class jp extends an{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Kp extends an{constructor(t=new w,e=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new w){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new w){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Zp extends an{constructor(t=new pt,e=new pt,n=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new pt){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Di(t,s.x,r.x,a.x),Di(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ic extends an{constructor(t=new w,e=new w,n=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new w){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Di(t,s.x,r.x,a.x),Di(t,s.y,r.y,a.y),Di(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Jp extends an{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(ha(o,c.x,l.x,h.x,u.x),ha(o,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new pt().fromArray(s))}return this}}var $p=Object.freeze({__proto__:null,ArcCurve:Bp,CatmullRomCurve3:Ss,CubicBezierCurve:Yp,CubicBezierCurve3:qp,EllipseCurve:nc,LineCurve:jp,LineCurve3:Kp,QuadraticBezierCurve:Zp,QuadraticBezierCurve3:ic,SplineCurve:Jp});class Pr extends Ne{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new w,h=new pt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,p=3;u<=e;u++,p+=3){const m=n+u/e*s;l.x=t*Math.cos(m),l.y=t*Math.sin(m),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[p]/t+1)/2,h.y=(a[p+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new re(a,3)),this.setAttribute("normal",new re(o,3)),this.setAttribute("uv",new re(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Kt extends Ne{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],p=[],m=[];let g=0;const _=[],d=n/2;let f=0;S(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new re(u,3)),this.setAttribute("normal",new re(p,3)),this.setAttribute("uv",new re(m,2));function S(){const y=new w,P=new w;let R=0;const T=(e-t)/n;for(let I=0;I<=r;I++){const z=[],x=I/r,A=x*(e-t)+t;for(let q=0;q<=s;q++){const Q=q/s,D=Q*c+o,Y=Math.sin(D),k=Math.cos(D);P.x=A*Y,P.y=-x*n+d,P.z=A*k,u.push(P.x,P.y,P.z),y.set(Y,T,k).normalize(),p.push(y.x,y.y,y.z),m.push(Q,1-x),z.push(g++)}_.push(z)}for(let I=0;I<s;I++)for(let z=0;z<r;z++){const x=_[z][I],A=_[z+1][I],q=_[z+1][I+1],Q=_[z][I+1];h.push(x,A,Q),h.push(A,q,Q),R+=6}l.addGroup(f,R,0),f+=R}function v(y){const P=g,R=new pt,T=new w;let I=0;const z=y===!0?t:e,x=y===!0?1:-1;for(let q=1;q<=s;q++)u.push(0,d*x,0),p.push(0,x,0),m.push(.5,.5),g++;const A=g;for(let q=0;q<=s;q++){const D=q/s*c+o,Y=Math.cos(D),k=Math.sin(D);T.x=z*k,T.y=d*x,T.z=z*Y,u.push(T.x,T.y,T.z),p.push(0,x,0),R.x=Y*.5+.5,R.y=k*.5*x+.5,m.push(R.x,R.y),g++}for(let q=0;q<s;q++){const Q=P+q,D=A+q;y===!0?h.push(D,D+1,Q):h.push(D+1,D,Q),I+=3}l.addGroup(f,I,y===!0?1:2),f+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Me extends Kt{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Me(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Lr extends Ne{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new re(r,3)),this.setAttribute("normal",new re(r.slice(),3)),this.setAttribute("uv",new re(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(S){const v=new w,y=new w,P=new w;for(let R=0;R<e.length;R+=3)m(e[R+0],v),m(e[R+1],y),m(e[R+2],P),c(v,y,P,S)}function c(S,v,y,P){const R=P+1,T=[];for(let I=0;I<=R;I++){T[I]=[];const z=S.clone().lerp(y,I/R),x=v.clone().lerp(y,I/R),A=R-I;for(let q=0;q<=A;q++)q===0&&I===R?T[I][q]=z:T[I][q]=z.clone().lerp(x,q/A)}for(let I=0;I<R;I++)for(let z=0;z<2*(R-I)-1;z++){const x=Math.floor(z/2);z%2===0?(p(T[I][x+1]),p(T[I+1][x]),p(T[I][x])):(p(T[I][x+1]),p(T[I+1][x+1]),p(T[I+1][x]))}}function l(S){const v=new w;for(let y=0;y<r.length;y+=3)v.x=r[y+0],v.y=r[y+1],v.z=r[y+2],v.normalize().multiplyScalar(S),r[y+0]=v.x,r[y+1]=v.y,r[y+2]=v.z}function h(){const S=new w;for(let v=0;v<r.length;v+=3){S.x=r[v+0],S.y=r[v+1],S.z=r[v+2];const y=d(S)/2/Math.PI+.5,P=f(S)/Math.PI+.5;a.push(y,1-P)}g(),u()}function u(){for(let S=0;S<a.length;S+=6){const v=a[S+0],y=a[S+2],P=a[S+4],R=Math.max(v,y,P),T=Math.min(v,y,P);R>.9&&T<.1&&(v<.2&&(a[S+0]+=1),y<.2&&(a[S+2]+=1),P<.2&&(a[S+4]+=1))}}function p(S){r.push(S.x,S.y,S.z)}function m(S,v){const y=S*3;v.x=t[y+0],v.y=t[y+1],v.z=t[y+2]}function g(){const S=new w,v=new w,y=new w,P=new w,R=new pt,T=new pt,I=new pt;for(let z=0,x=0;z<r.length;z+=9,x+=6){S.set(r[z+0],r[z+1],r[z+2]),v.set(r[z+3],r[z+4],r[z+5]),y.set(r[z+6],r[z+7],r[z+8]),R.set(a[x+0],a[x+1]),T.set(a[x+2],a[x+3]),I.set(a[x+4],a[x+5]),P.copy(S).add(v).add(y).divideScalar(3);const A=d(P);_(R,x+0,S,A),_(T,x+2,v,A),_(I,x+4,y,A)}}function _(S,v,y,P){P<0&&S.x===1&&(a[v]=S.x-1),y.x===0&&y.z===0&&(a[v]=P/2/Math.PI+.5)}function d(S){return Math.atan2(S.z,-S.x)}function f(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lr(t.vertices,t.indices,t.radius,t.details)}}class _n extends Lr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new _n(t.radius,t.detail)}}class Ze extends Ne{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],u=new w,p=new w,m=[],g=[],_=[],d=[];for(let f=0;f<=n;f++){const S=[],v=f/n;let y=0;f===0&&a===0?y=.5/e:f===n&&c===Math.PI&&(y=-.5/e);for(let P=0;P<=e;P++){const R=P/e;u.x=-t*Math.cos(s+R*r)*Math.sin(a+v*o),u.y=t*Math.cos(a+v*o),u.z=t*Math.sin(s+R*r)*Math.sin(a+v*o),g.push(u.x,u.y,u.z),p.copy(u).normalize(),_.push(p.x,p.y,p.z),d.push(R+y,1-v),S.push(l++)}h.push(S)}for(let f=0;f<n;f++)for(let S=0;S<e;S++){const v=h[f][S+1],y=h[f][S],P=h[f+1][S],R=h[f+1][S+1];(f!==0||a>0)&&m.push(v,y,R),(f!==n-1||c<Math.PI)&&m.push(y,P,R)}this.setIndex(m),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(_,3)),this.setAttribute("uv",new re(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ze(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Oi extends Ne{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],c=[],l=[],h=new w,u=new w,p=new w;for(let m=0;m<=n;m++)for(let g=0;g<=s;g++){const _=g/s*r,d=m/n*Math.PI*2;u.x=(t+e*Math.cos(d))*Math.cos(_),u.y=(t+e*Math.cos(d))*Math.sin(_),u.z=e*Math.sin(d),o.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),p.subVectors(u,h).normalize(),c.push(p.x,p.y,p.z),l.push(g/s),l.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=s;g++){const _=(s+1)*m+g-1,d=(s+1)*(m-1)+g-1,f=(s+1)*(m-1)+g,S=(s+1)*m+g;a.push(_,d,S),a.push(d,f,S)}this.setIndex(a),this.setAttribute("position",new re(o,3)),this.setAttribute("normal",new re(c,3)),this.setAttribute("uv",new re(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oi(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ui extends Ne{constructor(t=new ic(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new w,c=new w,l=new pt;let h=new w;const u=[],p=[],m=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new re(u,3)),this.setAttribute("normal",new re(p,3)),this.setAttribute("uv",new re(m,2));function _(){for(let v=0;v<e;v++)d(v);d(r===!1?e:0),S(),f()}function d(v){h=t.getPointAt(v/e,h);const y=a.normals[v],P=a.binormals[v];for(let R=0;R<=s;R++){const T=R/s*Math.PI*2,I=Math.sin(T),z=-Math.cos(T);c.x=z*y.x+I*P.x,c.y=z*y.y+I*P.y,c.z=z*y.z+I*P.z,c.normalize(),p.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,u.push(o.x,o.y,o.z)}}function f(){for(let v=1;v<=e;v++)for(let y=1;y<=s;y++){const P=(s+1)*(v-1)+(y-1),R=(s+1)*v+(y-1),T=(s+1)*v+y,I=(s+1)*(v-1)+y;g.push(P,R,I),g.push(R,T,I)}}function S(){for(let v=0;v<=e;v++)for(let y=0;y<=s;y++)l.x=v/e,l.y=y/s,m.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Ui(new $p[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class j extends Bi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ia,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Je,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class zi extends de{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ft(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class Qp extends zi{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ft(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const lr=new te,ua=new w,da=new w;class Dr{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new br,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ua.setFromMatrixPosition(t.matrixWorld),e.position.copy(ua),da.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(da),e.updateMatrixWorld(),lr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(lr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class tm extends Dr{constructor(){super(new Pe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=gi*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class em extends zi{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.target=new de,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new tm}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const fa=new te,Ri=new w,hr=new w;class nm extends Dr{constructor(){super(new Pe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pt(4,2),this._viewportCount=6,this._viewports=[new ae(2,1,1,1),new ae(0,1,1,1),new ae(3,1,1,1),new ae(1,1,1,1),new ae(3,0,1,1),new ae(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ri.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ri),hr.copy(n.position),hr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(hr),n.updateMatrixWorld(),s.makeTranslation(-Ri.x,-Ri.y,-Ri.z),fa.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fa)}}class im extends zi{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new nm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class sm extends Dr{constructor(){super(new ja(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rm extends zi{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.target=new de,this.shadow=new sm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class om extends zi{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class am{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=pa(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=pa();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function pa(){return(typeof performance>"u"?Date:performance).now()}class ma{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(xe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sr);const ga={type:"change"},ur={type:"start"},_a={type:"end"},ds=new za,va=new pn,cm=Math.cos(70*Li.DEG2RAD);class lm extends Hn{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new w,this.cursor=new w,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Vn.ROTATE,MIDDLE:Vn.DOLLY,RIGHT:Vn.PAN},this.touches={ONE:Wn.ROTATE,TWO:Wn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",Rt),this._domElementKeyEvents=C},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Rt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(ga),n.update(),r=s.NONE},this.update=function(){const C=new w,Z=new Gn().setFromUnitVectors(t.up,new w(0,1,0)),Mt=Z.clone().invert(),L=new w,at=new Gn,F=new w,it=2*Math.PI;return function(qt=null){const $t=n.object.position;C.copy($t).sub(n.target),C.applyQuaternion(Z),o.setFromVector3(C),n.autoRotate&&r===s.NONE&&q(x(qt)),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let ee=n.minAzimuthAngle,he=n.maxAzimuthAngle;isFinite(ee)&&isFinite(he)&&(ee<-Math.PI?ee+=it:ee>Math.PI&&(ee-=it),he<-Math.PI?he+=it:he>Math.PI&&(he-=it),ee<=he?o.theta=Math.max(ee,Math.min(he,o.theta)):o.theta=o.theta>(ee+he)/2?Math.max(ee,o.theta):Math.min(he,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let Jt=!1;if(n.zoomToCursor&&R||n.object.isOrthographicCamera)o.radius=et(o.radius);else{const ie=o.radius;o.radius=et(o.radius*l),Jt=ie!=o.radius}if(C.setFromSpherical(o),C.applyQuaternion(Mt),$t.copy(n.target).add(C),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0)),n.zoomToCursor&&R){let ie=null;if(n.object.isPerspectiveCamera){const ye=C.length();ie=et(ye*l);const wn=ye-ie;n.object.position.addScaledVector(y,wn),n.object.updateMatrixWorld(),Jt=!!wn}else if(n.object.isOrthographicCamera){const ye=new w(P.x,P.y,0);ye.unproject(n.object);const wn=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),Jt=wn!==n.object.zoom;const Gi=new w(P.x,P.y,0);Gi.unproject(n.object),n.object.position.sub(Gi).add(ye),n.object.updateMatrixWorld(),ie=C.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;ie!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(ie).add(n.object.position):(ds.origin.copy(n.object.position),ds.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(ds.direction))<cm?t.lookAt(n.target):(va.setFromNormalAndCoplanarPoint(n.object.up,n.target),ds.intersectPlane(va,n.target))))}else if(n.object.isOrthographicCamera){const ie=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),ie!==n.object.zoom&&(n.object.updateProjectionMatrix(),Jt=!0)}return l=1,R=!1,Jt||L.distanceToSquared(n.object.position)>a||8*(1-at.dot(n.object.quaternion))>a||F.distanceToSquared(n.target)>a?(n.dispatchEvent(ga),L.copy(n.object.position),at.copy(n.object.quaternion),F.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",Nt),n.domElement.removeEventListener("pointerdown",Ht),n.domElement.removeEventListener("pointercancel",b),n.domElement.removeEventListener("wheel",K),n.domElement.removeEventListener("pointermove",ne),n.domElement.removeEventListener("pointerup",b),n.domElement.getRootNode().removeEventListener("keydown",nt,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Rt),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const a=1e-6,o=new ma,c=new ma;let l=1;const h=new w,u=new pt,p=new pt,m=new pt,g=new pt,_=new pt,d=new pt,f=new pt,S=new pt,v=new pt,y=new w,P=new pt;let R=!1;const T=[],I={};let z=!1;function x(C){return C!==null?2*Math.PI/60*n.autoRotateSpeed*C:2*Math.PI/60/60*n.autoRotateSpeed}function A(C){const Z=Math.abs(C*.01);return Math.pow(.95,n.zoomSpeed*Z)}function q(C){c.theta-=C}function Q(C){c.phi-=C}const D=function(){const C=new w;return function(Mt,L){C.setFromMatrixColumn(L,0),C.multiplyScalar(-Mt),h.add(C)}}(),Y=function(){const C=new w;return function(Mt,L){n.screenSpacePanning===!0?C.setFromMatrixColumn(L,1):(C.setFromMatrixColumn(L,0),C.crossVectors(n.object.up,C)),C.multiplyScalar(Mt),h.add(C)}}(),k=function(){const C=new w;return function(Mt,L){const at=n.domElement;if(n.object.isPerspectiveCamera){const F=n.object.position;C.copy(F).sub(n.target);let it=C.length();it*=Math.tan(n.object.fov/2*Math.PI/180),D(2*Mt*it/at.clientHeight,n.object.matrix),Y(2*L*it/at.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(D(Mt*(n.object.right-n.object.left)/n.object.zoom/at.clientWidth,n.object.matrix),Y(L*(n.object.top-n.object.bottom)/n.object.zoom/at.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function tt(C){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(C){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function J(C,Z){if(!n.zoomToCursor)return;R=!0;const Mt=n.domElement.getBoundingClientRect(),L=C-Mt.left,at=Z-Mt.top,F=Mt.width,it=Mt.height;P.x=L/F*2-1,P.y=-(at/it)*2+1,y.set(P.x,P.y,1).unproject(n.object).sub(n.object.position).normalize()}function et(C){return Math.max(n.minDistance,Math.min(n.maxDistance,C))}function lt(C){u.set(C.clientX,C.clientY)}function _t(C){J(C.clientX,C.clientX),f.set(C.clientX,C.clientY)}function It(C){g.set(C.clientX,C.clientY)}function V(C){p.set(C.clientX,C.clientY),m.subVectors(p,u).multiplyScalar(n.rotateSpeed);const Z=n.domElement;q(2*Math.PI*m.x/Z.clientHeight),Q(2*Math.PI*m.y/Z.clientHeight),u.copy(p),n.update()}function st(C){S.set(C.clientX,C.clientY),v.subVectors(S,f),v.y>0?tt(A(v.y)):v.y<0&&X(A(v.y)),f.copy(S),n.update()}function gt(C){_.set(C.clientX,C.clientY),d.subVectors(_,g).multiplyScalar(n.panSpeed),k(d.x,d.y),g.copy(_),n.update()}function Lt(C){J(C.clientX,C.clientY),C.deltaY<0?X(A(C.deltaY)):C.deltaY>0&&tt(A(C.deltaY)),n.update()}function wt(C){let Z=!1;switch(C.code){case n.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?Q(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(0,n.keyPanSpeed),Z=!0;break;case n.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?Q(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(0,-n.keyPanSpeed),Z=!0;break;case n.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?q(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(n.keyPanSpeed,0),Z=!0;break;case n.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?q(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):k(-n.keyPanSpeed,0),Z=!0;break}Z&&(C.preventDefault(),n.update())}function vt(C){if(T.length===1)u.set(C.pageX,C.pageY);else{const Z=xt(C),Mt=.5*(C.pageX+Z.x),L=.5*(C.pageY+Z.y);u.set(Mt,L)}}function Zt(C){if(T.length===1)g.set(C.pageX,C.pageY);else{const Z=xt(C),Mt=.5*(C.pageX+Z.x),L=.5*(C.pageY+Z.y);g.set(Mt,L)}}function Pt(C){const Z=xt(C),Mt=C.pageX-Z.x,L=C.pageY-Z.y,at=Math.sqrt(Mt*Mt+L*L);f.set(0,at)}function O(C){n.enableZoom&&Pt(C),n.enablePan&&Zt(C)}function pe(C){n.enableZoom&&Pt(C),n.enableRotate&&vt(C)}function bt(C){if(T.length==1)p.set(C.pageX,C.pageY);else{const Mt=xt(C),L=.5*(C.pageX+Mt.x),at=.5*(C.pageY+Mt.y);p.set(L,at)}m.subVectors(p,u).multiplyScalar(n.rotateSpeed);const Z=n.domElement;q(2*Math.PI*m.x/Z.clientHeight),Q(2*Math.PI*m.y/Z.clientHeight),u.copy(p)}function Bt(C){if(T.length===1)_.set(C.pageX,C.pageY);else{const Z=xt(C),Mt=.5*(C.pageX+Z.x),L=.5*(C.pageY+Z.y);_.set(Mt,L)}d.subVectors(_,g).multiplyScalar(n.panSpeed),k(d.x,d.y),g.copy(_)}function At(C){const Z=xt(C),Mt=C.pageX-Z.x,L=C.pageY-Z.y,at=Math.sqrt(Mt*Mt+L*L);S.set(0,at),v.set(0,Math.pow(S.y/f.y,n.zoomSpeed)),tt(v.y),f.copy(S);const F=(C.pageX+Z.x)*.5,it=(C.pageY+Z.y)*.5;J(F,it)}function jt(C){n.enableZoom&&At(C),n.enablePan&&Bt(C)}function zt(C){n.enableZoom&&At(C),n.enableRotate&&bt(C)}function Ht(C){n.enabled!==!1&&(T.length===0&&(n.domElement.setPointerCapture(C.pointerId),n.domElement.addEventListener("pointermove",ne),n.domElement.addEventListener("pointerup",b)),!Xt(C)&&(ct(C),C.pointerType==="touch"?ht(C):M(C)))}function ne(C){n.enabled!==!1&&(C.pointerType==="touch"?dt(C):W(C))}function b(C){switch(le(C),T.length){case 0:n.domElement.releasePointerCapture(C.pointerId),n.domElement.removeEventListener("pointermove",ne),n.domElement.removeEventListener("pointerup",b),n.dispatchEvent(_a),r=s.NONE;break;case 1:const Z=T[0],Mt=I[Z];ht({pointerId:Z,pageX:Mt.x,pageY:Mt.y});break}}function M(C){let Z;switch(C.button){case 0:Z=n.mouseButtons.LEFT;break;case 1:Z=n.mouseButtons.MIDDLE;break;case 2:Z=n.mouseButtons.RIGHT;break;default:Z=-1}switch(Z){case Vn.DOLLY:if(n.enableZoom===!1)return;_t(C),r=s.DOLLY;break;case Vn.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enablePan===!1)return;It(C),r=s.PAN}else{if(n.enableRotate===!1)return;lt(C),r=s.ROTATE}break;case Vn.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enableRotate===!1)return;lt(C),r=s.ROTATE}else{if(n.enablePan===!1)return;It(C),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(ur)}function W(C){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;V(C);break;case s.DOLLY:if(n.enableZoom===!1)return;st(C);break;case s.PAN:if(n.enablePan===!1)return;gt(C);break}}function K(C){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(C.preventDefault(),n.dispatchEvent(ur),Lt(ot(C)),n.dispatchEvent(_a))}function ot(C){const Z=C.deltaMode,Mt={clientX:C.clientX,clientY:C.clientY,deltaY:C.deltaY};switch(Z){case 1:Mt.deltaY*=16;break;case 2:Mt.deltaY*=100;break}return C.ctrlKey&&!z&&(Mt.deltaY*=10),Mt}function nt(C){C.key==="Control"&&(z=!0,n.domElement.getRootNode().addEventListener("keyup",Ut,{passive:!0,capture:!0}))}function Ut(C){C.key==="Control"&&(z=!1,n.domElement.getRootNode().removeEventListener("keyup",Ut,{passive:!0,capture:!0}))}function Rt(C){n.enabled===!1||n.enablePan===!1||wt(C)}function ht(C){switch(Tt(C),T.length){case 1:switch(n.touches.ONE){case Wn.ROTATE:if(n.enableRotate===!1)return;vt(C),r=s.TOUCH_ROTATE;break;case Wn.PAN:if(n.enablePan===!1)return;Zt(C),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case Wn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;O(C),r=s.TOUCH_DOLLY_PAN;break;case Wn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;pe(C),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(ur)}function dt(C){switch(Tt(C),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;bt(C),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;Bt(C),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;jt(C),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;zt(C),n.update();break;default:r=s.NONE}}function Nt(C){n.enabled!==!1&&C.preventDefault()}function ct(C){T.push(C.pointerId)}function le(C){delete I[C.pointerId];for(let Z=0;Z<T.length;Z++)if(T[Z]==C.pointerId){T.splice(Z,1);return}}function Xt(C){for(let Z=0;Z<T.length;Z++)if(T[Z]==C.pointerId)return!0;return!1}function Tt(C){let Z=I[C.pointerId];Z===void 0&&(Z=new pt,I[C.pointerId]=Z),Z.set(C.pageX,C.pageY)}function xt(C){const Z=C.pointerId===T[0]?T[1]:T[0];return I[Z]}n.domElement.addEventListener("contextmenu",Nt),n.domElement.addEventListener("pointerdown",Ht),n.domElement.addEventListener("pointercancel",b),n.domElement.addEventListener("wheel",K,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",nt,{passive:!0,capture:!0}),this.update()}}class hm{constructor(t){$(this,"scene");$(this,"camera");$(this,"renderer");$(this,"controls");$(this,"initialPos",new w(72,58,76));$(this,"initialTarget",new w(0,0,0));$(this,"isCameraTransitioning",!1);$(this,"cameraTransProgress",1);$(this,"cameraTransDuration",1.2);$(this,"startCamPos",new w);$(this,"targetCamPos",new w);$(this,"startCamTarget",new w);$(this,"targetCamTarget",new w);$(this,"isFollowTrain",!1);$(this,"followTargetObj");this.scene=new Up,this.scene.background=new Ft(14075836),this.scene.fog=new Rr(14075836,.0035);const e=window.innerWidth/window.innerHeight;this.camera=new Pe(38,e,.5,300),this.camera.position.copy(this.initialPos),this.renderer=new ec({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.toneMapping=Ea,this.renderer.toneMappingExposure=1.08,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Sa,t.appendChild(this.renderer.domElement),this.controls=new lm(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.target.copy(this.initialTarget),this.controls.minDistance=25,this.controls.maxDistance=190,this.controls.maxPolarAngle=Math.PI/2-.05,window.addEventListener("resize",this.onWindowResize.bind(this))}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}flyTo(t,e,n=1){this.isFollowTrain=!1,this.isCameraTransitioning=!0,this.cameraTransProgress=0,this.cameraTransDuration=n,this.startCamPos.copy(this.camera.position),this.targetCamPos.copy(t),this.startCamTarget.copy(this.controls.target),this.targetCamTarget.copy(e)}resetCamera(){this.flyTo(this.initialPos,this.initialTarget,1)}setFollowTrain(t){this.followTargetObj=t,this.isFollowTrain=!!t}update(t){if(this.isFollowTrain&&this.followTargetObj){const e=new w;this.followTargetObj.getWorldPosition(e);const n=new w(20,16,22),s=e.clone().add(n);this.camera.position.lerp(s,.06),this.controls.target.lerp(e,.08),this.controls.update();return}if(this.isCameraTransitioning){this.cameraTransProgress+=t/this.cameraTransDuration,this.cameraTransProgress>=1&&(this.cameraTransProgress=1,this.isCameraTransitioning=!1);const e=Li.smoothstep(this.cameraTransProgress,0,1);this.camera.position.lerpVectors(this.startCamPos,this.targetCamPos,e),this.controls.target.lerpVectors(this.startCamTarget,this.targetCamTarget,e)}this.controls.update()}render(){this.renderer.render(this.scene,this.camera)}}class um{constructor(){$(this,"group");$(this,"riverMesh");$(this,"windmillBlades");this.group=new St,this.group.name="BaseAndTerrain",this.buildDisplayPlinth(),this.buildTerrainGround(),this.buildRiver(),this.buildNorthwestHillAndTunnel(),this.buildWindmill()}buildDisplayPlinth(){const t=new St,e=102,n=74,s=3.5,r=new j({color:2890254,roughness:.65,metalness:.08}),a=new U(new rt(e,s,n),r);a.position.set(0,-s/2-.2,0),a.receiveShadow=!0,t.add(a);const o=new U(new rt(e+2.5,.8,n+2.5),r);o.position.set(0,-s-.3,0),o.receiveShadow=!0,t.add(o);const c=new U(new rt(e+1.2,.45,n+1.2),r);c.position.set(0,-.22,0),c.receiveShadow=!0,t.add(c);const l=1.6,h=new j({color:5520683,roughness:.95,metalness:0}),u=new U(new rt(e-.1,l,n-.1),h);u.position.set(0,-l/2,0),u.receiveShadow=!0,t.add(u);const p=new j({color:13938487,metalness:.85,roughness:.3}),m=new U(new rt(16,1.4,.15),p);m.position.set(0,-s/2,n/2+.08),m.castShadow=!0,t.add(m);const g=new j({color:1709328,roughness:.4}),_=new U(new rt(14.8,1,.05),g);_.position.set(0,-s/2,n/2+.18),t.add(_),this.group.add(t)}buildTerrainGround(){const t=new St;t.name="TerrainSurface";const e=new j({color:5932875,roughness:.85,metalness:.02,flatShading:!0}),n=new j({color:4747067,roughness:.85,metalness:.02,flatShading:!0}),s=new U(new rt(100,.4,72),e);s.position.set(0,-.2,0),s.receiveShadow=!0,t.add(s);const r=new U(new Kt(14,15,.25,8),n);r.position.set(10,.05,-12),r.receiveShadow=!0,t.add(r);const a=new U(new Kt(16,18,.2,7),e);a.position.set(-10,.05,-6),a.receiveShadow=!0,t.add(a),this.group.add(t)}buildRiver(){const t=new St;t.name="RiverSystem";const e=new j({color:4011308,roughness:.9,metalness:.05}),n=new rt(14,.9,72),s=new U(n,e);s.position.set(35,-.55,0),s.rotation.y=-.06,s.receiveShadow=!0,t.add(s);const r=new j({color:3042162,roughness:.12,metalness:.35,transparent:!0,opacity:.88}),a=new Ke(13.2,72,10,10);this.riverMesh=new U(a,r),this.riverMesh.rotation.x=-Math.PI/2,this.riverMesh.rotation.z=-.06,this.riverMesh.position.set(35,-.32,0),this.riverMesh.receiveShadow=!0,t.add(this.riverMesh);const o=new j({color:9077886,roughness:.8,flatShading:!0}),c=new _n(.35,1);[{x:27.5,z:12},{x:28.2,z:14},{x:27.8,z:5},{x:27.2,z:-8},{x:28,z:-18},{x:41.5,z:2},{x:42,z:-12},{x:41.8,z:18},{x:27.9,z:24}].forEach((_,d)=>{const f=new U(c,o),S=.6+d%3*.4;f.scale.set(S*1.4,S*.6,S),f.position.set(_.x,-.22,_.z),f.rotation.set(d,d*2,0),f.castShadow=!0,f.receiveShadow=!0,t.add(f)});const h=new j({color:4336157,roughness:.85}),u=new St,p=new U(new rt(2.2,.15,4.5),h);p.position.set(0,-.08,0),p.castShadow=!0,p.receiveShadow=!0,u.add(p);for(let _ of[-.9,.9])for(let d of[-1.8,0,1.8]){const f=new U(new Kt(.1,.1,1.2,6),h);f.position.set(_,-.6,d),f.castShadow=!0,u.add(f)}u.position.set(28.2,0,18.5),u.rotation.y=.25,t.add(u);const m=new St,g=new U(new Me(.85,2.8,4),new j({color:9124395,roughness:.6}));g.rotation.x=Math.PI/2,g.rotation.y=Math.PI/4,g.scale.set(1.1,.5,1),g.position.y=-.36,g.castShadow=!0,m.add(g),m.position.set(30.6,0,19.5),m.rotation.y=.5,t.add(m),this.group.add(t)}buildNorthwestHillAndTunnel(){const t=new St;t.name="NorthwestHillAndTunnel";const e=new j({color:5208896,roughness:.9,metalness:0,flatShading:!0}),n=new j({color:4023856,roughness:.9,flatShading:!0}),s=new U(new Kt(15,19,4.2,10),e);s.position.set(-39,2,1),s.scale.set(1.1,1,1.4),s.castShadow=!0,s.receiveShadow=!0,t.add(s);const r=new U(new Kt(8,12,2.5,8),n);r.position.set(-40,4.8,-1),r.scale.set(1,1,1.2),r.castShadow=!0,r.receiveShadow=!0,t.add(r);const a=new j({color:6182479,roughness:.85,metalness:.1,flatShading:!0}),o=new j({color:8143672,roughness:.8}),c=(u,p)=>{const m=new St;m.position.copy(u),m.rotation.y=p;const g=new U(new rt(6.4,4,1.2),a);g.position.y=1.9,g.castShadow=!0,g.receiveShadow=!0,m.add(g),[-3.4,3.4].forEach((v,y)=>{const P=new U(new rt(2,3.2,.8),a);P.position.set(v,1.5,.4),P.rotation.y=y===0?.35:-.35,P.castShadow=!0,P.receiveShadow=!0,m.add(P)});const _=new U(new Oi(1.6,.28,8,14,Math.PI),o);_.position.set(0,1.8,.6),_.castShadow=!0,m.add(_);const d=new U(new rt(.55,.7,.4),a);d.position.set(0,3.5,.65),d.castShadow=!0,m.add(d);const f=new U(new rt(6.8,.35,1.5),a);f.position.set(0,3.95,0),f.castShadow=!0,m.add(f);const S=new U(new Ke(2.8,3.2),new Tr({color:526344}));return S.position.set(0,1.5,-.5),m.add(S),m},l=c(new w(-31.5,0,-14.2),Math.PI*.78);t.add(l);const h=c(new w(-31.2,0,17.2),-Math.PI*.82);t.add(h),this.group.add(t)}buildWindmill(){const t=new St;t.position.set(-40,6,-1);const e=new j({color:14274236,roughness:.8,flatShading:!0}),n=new U(new Kt(1.6,2.4,4.2,8),e);n.position.y=2.1,n.castShadow=!0,n.receiveShadow=!0,t.add(n);const s=new j({color:3821404,roughness:.7,flatShading:!0}),r=new U(new Me(2,2,8),s);r.position.y=5,r.castShadow=!0,t.add(r);const a=new St;a.position.set(0,4.2,1.8);const o=new j({color:5913896,roughness:.7}),c=new j({color:16117468,roughness:.6,side:Ye}),l=new U(new Kt(.35,.35,.4,8),o);l.rotation.x=Math.PI/2,a.add(l);for(let h=0;h<4;h++){const u=new St;u.rotation.z=h*Math.PI/2;const p=new U(new rt(.12,3.8,.12),o);p.position.y=1.9,p.castShadow=!0,u.add(p);const m=new U(new Ke(.85,2.6),c);m.position.set(.48,2.3,.02),m.castShadow=!0,u.add(m),a.add(u)}t.add(a),this.windmillBlades=a,this.group.add(t)}update(t){this.windmillBlades&&(this.windmillBlades.rotation.z+=t*.4)}}class dm{constructor(){$(this,"curve");$(this,"totalLength");$(this,"stationStopU",0);$(this,"bridgeStartU",0);$(this,"bridgeEndU",0);$(this,"tunnelStartU",0);$(this,"tunnelEndU",0);const e=[new w(-14,.38,20),new w(0,.38,20),new w(14,.38,20),new w(26,.38,17),new w(34,.38,8),new w(35,.38,-4),new w(32,.38,-16),new w(18,.38,-24),new w(0,.38,-26),new w(-18,.38,-24),new w(-32,.38,-14),new w(-38,.38,2),new w(-32,.38,17),new w(-24,.38,20)];this.curve=new Ss(e,!0,"centripetal",.5),this.totalLength=this.curve.getLength(),this.stationStopU=this.findClosestU(new w(0,.38,20)),this.bridgeStartU=this.findClosestU(new w(34,.38,8)),this.bridgeEndU=this.findClosestU(new w(32,.38,-16)),this.tunnelStartU=this.findClosestU(new w(-30,.38,-16)),this.tunnelEndU=this.findClosestU(new w(-30,.38,17))}findClosestU(t,e=1e3){let n=0,s=1/0;for(let r=0;r<=e;r++){const a=r/e,c=this.curve.getPointAt(a).distanceTo(t);c<s&&(s=c,n=a)}return n}distanceToU(t){let e=t%this.totalLength;return e<0&&(e+=this.totalLength),e/this.totalLength}getPointAtDistance(t){const e=this.distanceToU(t);return this.curve.getPointAt(e)}getTangentAtDistance(t){const e=this.distanceToU(t);return this.curve.getTangentAt(e).normalize()}}class fm{constructor(t){$(this,"group");$(this,"trackCurve");$(this,"gauge",1.3);this.trackCurve=t,this.group=new St,this.group.name="RailwayTrack",this.buildBallast(),this.buildSleepers(),this.buildRails(),this.buildBridge()}buildBallast(){const t=new j({color:7235683,roughness:.95,metalness:.05,flatShading:!0}),e=new Ui(this.trackCurve.curve,300,1.15,6,!0);e.scale(1,.22,1);const n=new U(e,t);n.position.y=.14,n.receiveShadow=!0,n.castShadow=!0,this.group.add(n)}buildSleepers(){const e=this.trackCurve.totalLength,n=Math.floor(e/.7),s=new rt(2.1,.14,.34),r=new j({color:4862500,roughness:.8,metalness:.1}),a=new Fp(s,r,n);a.castShadow=!0,a.receiveShadow=!0;const o=new de,c=new w(0,1,0);for(let l=0;l<n;l++){const h=l*.7,u=this.trackCurve.distanceToU(h),p=this.trackCurve.curve.getPointAt(u),m=this.trackCurve.curve.getTangentAt(u).normalize(),g=new w().crossVectors(m,c).normalize();o.position.copy(p),o.position.y=.26;const _=new te;_.makeBasis(g,c,m),o.setRotationFromMatrix(_);const d=(l%5-2)*.015;o.rotateY(d),o.updateMatrix(),a.setMatrixAt(l,o.matrix)}a.instanceMatrix.needsUpdate=!0,this.group.add(a)}buildRails(){const e=[],n=[],s=new w(0,1,0),r=this.gauge/2,a=.4;for(let _=0;_<600;_++){const d=_/600,f=this.trackCurve.curve.getPointAt(d),S=this.trackCurve.curve.getTangentAt(d).normalize(),v=new w().crossVectors(S,s).normalize(),y=f.clone().addScaledVector(v,r);y.y=a,e.push(y);const P=f.clone().addScaledVector(v,-r);P.y=a,n.push(P)}const o=new Ss(e,!0,"centripetal",.5),c=new Ss(n,!0,"centripetal",.5),l=.065,h=new Ui(o,400,l,6,!0),u=new Ui(c,400,l,6,!0),p=new j({color:10003368,metalness:.9,roughness:.28,envMapIntensity:1.2}),m=new U(h,p),g=new U(u,p);m.castShadow=!0,g.castShadow=!0,m.receiveShadow=!0,g.receiveShadow=!0,this.group.add(m),this.group.add(g)}buildBridge(){const t=new St;t.name="RailwayBridge";const e=new j({color:7234911,roughness:.9,metalness:.1,flatShading:!0}),n=new U(new rt(4.2,2.2,3.5),e);n.position.set(34.2,-.6,7.8),n.rotation.y=-.15,n.castShadow=!0,n.receiveShadow=!0,t.add(n);const s=new U(new rt(4.2,2.2,3.5),e);s.position.set(32.8,-.6,-14.5),s.rotation.y=.15,s.castShadow=!0,s.receiveShadow=!0,t.add(s),[{x:35.5,z:1.5,rot:-.05},{x:34.6,z:-7.5,rot:.08}].forEach(c=>{const l=new St,h=new U(new Kt(1.6,2,2.4,6),e);h.position.set(0,-.8,0),h.scale.set(1.1,1,1.8),h.castShadow=!0,h.receiveShadow=!0,l.add(h);const u=new U(new rt(2.4,1.8,3),e);u.position.set(0,.4,0),u.castShadow=!0,u.receiveShadow=!0,l.add(u);const p=new U(new rt(2.8,.35,3.4),e);p.position.set(0,1.3,0),p.castShadow=!0,p.receiveShadow=!0,l.add(p),l.position.set(c.x,-.8,c.z),l.rotation.y=c.rot,t.add(l)});const a=new j({color:2245429,metalness:.7,roughness:.35});[{p1:new w(34.2,.3,7.5),p2:new w(35.5,.3,1.5),length:6.2},{p1:new w(35.5,.3,1.5),p2:new w(34.6,.3,-7.5),length:9.1},{p1:new w(34.6,.3,-7.5),p2:new w(32.8,.3,-14.5),length:7.2}].forEach(c=>{const l=new w().addVectors(c.p1,c.p2).multiplyScalar(.5),h=new w().subVectors(c.p2,c.p1),u=h.length(),p=Math.atan2(h.x,h.z),m=new St;m.position.copy(l),m.rotation.y=p;const g=new U(new rt(2.6,.45,u),a);g.position.y=-.12,g.castShadow=!0,g.receiveShadow=!0,m.add(g);const _=2,d=2.4;[-d/2,d/2].forEach(S=>{const v=new U(new rt(.18,.18,u),a);v.position.set(S,_,0),v.castShadow=!0,m.add(v);const y=Math.max(3,Math.floor(u/1.6)),P=u/y;for(let R=0;R<=y;R++){const T=-u/2+R*P,I=new U(new rt(.16,_,.16),a);if(I.position.set(S,_/2,T),I.castShadow=!0,m.add(I),R<y){const z=Math.sqrt(P*P+_*_),x=new U(new rt(.12,z,.12),a);x.position.set(S,_/2,T+P/2),x.rotation.x=Math.atan2(P,_),x.castShadow=!0,m.add(x)}}});const f=4;for(let S=0;S<=f;S++){const v=-u/2+S/f*u,y=new U(new rt(d,.14,.14),a);y.position.set(0,_,v),y.castShadow=!0,m.add(y)}t.add(m)}),this.group.add(t)}}class pm{constructor(t){$(this,"group");$(this,"trackCurve");$(this,"engineGroup");$(this,"carriage1Group");$(this,"carriage2Group");$(this,"wheels",[]);$(this,"headlightMesh");$(this,"headlightSpot");$(this,"carriageWindows",[]);$(this,"offsetEngine",0);$(this,"offsetCarriage1",5);$(this,"offsetCarriage2",9.8);this.trackCurve=t,this.group=new St,this.group.name="MiniatureTrain",this.engineGroup=this.buildLocomotive(),this.carriage1Group=this.buildCarriage(9119006,"Carriage1"),this.carriage2Group=this.buildCarriage(1981023,"Carriage2"),this.group.add(this.engineGroup),this.group.add(this.carriage1Group),this.group.add(this.carriage2Group),this.updatePosition(0)}buildLocomotive(){const t=new St;t.name="LocomotiveEngine";const e=new j({color:1914410,roughness:.35,metalness:.4}),n=new j({color:2039583,roughness:.7,metalness:.8}),s=new j({color:13938487,roughness:.25,metalness:.9}),r=new j({color:1385757,roughness:.5}),a=new U(new rt(1.6,.3,4.4),n);a.position.y=.42,a.castShadow=!0,t.add(a);const o=new j({color:10035746,roughness:.5}),c=new U(new Me(.8,.7,3),o);c.rotation.x=Math.PI/2,c.rotation.y=Math.PI,c.scale.set(1.5,.5,.7),c.position.set(0,.3,2.3),t.add(c);const l=new U(new Kt(.68,.68,2.7,16),e);l.rotation.x=Math.PI/2,l.position.set(0,1.25,.65),l.castShadow=!0,t.add(l);const h=new U(new Ze(.68,16,12,0,Math.PI*2,0,Math.PI/2),n);h.rotation.x=-Math.PI/2,h.position.set(0,1.25,2),h.castShadow=!0,t.add(h),[-.3,.5,1.3].forEach(I=>{const z=new U(new Oi(.69,.03,8,24),s);z.position.set(0,1.25,I),t.add(z)});const u=new U(new Kt(.24,.18,.9,12),n);u.position.set(0,2.15,1.7),u.castShadow=!0,t.add(u);const p=new U(new Oi(.24,.04,8,16),s);p.rotation.x=Math.PI/2,p.position.set(0,2.6,1.7),t.add(p);const m=new U(new Ze(.3,12,12),s);m.position.set(0,1.95,.6),m.scale.set(1,1.3,1),t.add(m);const g=new U(new rt(1.68,1.5,1.5),e);g.position.set(0,1.35,-1.2),g.castShadow=!0,t.add(g);const _=new U(new Kt(.9,.9,1.7,16,1,!1,0,Math.PI),r);_.rotation.z=Math.PI/2,_.rotation.x=Math.PI/2,_.position.set(0,2.1,-1.2),_.castShadow=!0,t.add(_);const d=new j({color:10079487,roughness:.1,metalness:.8});[-.86,.86].forEach(I=>{const z=new U(new rt(.04,.5,.6),d);z.position.set(I,1.5,-1.2),t.add(z)});const f=new U(new rt(1.5,.7,.6),n);f.position.set(0,.8,-1.9),t.add(f);const S=new U(new _n(.35,1),new j({color:1118481,roughness:.9}));S.position.set(0,1.15,-1.9),S.scale.set(1.6,.6,1),t.add(S);const v=new j({color:9117214,roughness:.4,metalness:.6}),y=new j({color:13421772,metalness:.9,roughness:.2});[.8,-.2,-1.2].forEach(I=>{[-.8,.8].forEach(z=>{const x=new U(new Kt(.42,.42,.12,16),v);x.rotation.z=Math.PI/2,x.position.set(z,.42,I),x.castShadow=!0,t.add(x),this.wheels.push(x)})}),[-.88,.88].forEach(I=>{const z=new U(new rt(.06,.08,2.1),y);z.position.set(I,.32,-.2),t.add(z)});const R=new U(new Kt(.24,.2,.4,12),s);R.rotation.x=Math.PI/2,R.position.set(0,1.5,2.15),t.add(R),this.headlightMesh=new U(new Ze(.2,12,8,0,Math.PI*2,0,Math.PI/2),new j({color:16773290,emissive:16765517,emissiveIntensity:1.5,roughness:.1})),this.headlightMesh.rotation.x=-Math.PI/2,this.headlightMesh.position.set(0,1.5,2.35),t.add(this.headlightMesh),this.headlightSpot=new em(16770180,3,24,Math.PI/6,.4,1.2),this.headlightSpot.position.set(0,1.5,2.4);const T=new de;return T.position.set(0,.4,12),t.add(T),this.headlightSpot.target=T,t.add(this.headlightSpot),t}buildCarriage(t,e){const n=new St;n.name=e;const s=3.9,r=1.48,a=1.6,o=new j({color:t,roughness:.4,metalness:.2}),c=new j({color:13160150,roughness:.35,metalness:.5}),l=new j({color:2039583,roughness:.8}),h=new j({color:16117976,roughness:.4}),u=new U(new rt(r,.22,s+.3),l);u.position.y=.42,u.castShadow=!0,n.add(u);const p=new U(new rt(r,a,s),o);p.position.y=1.35,p.castShadow=!0,n.add(p);const m=new U(new rt(r+.04,.14,s+.02),h);m.position.y=1.15,n.add(m);const g=new U(new Kt(.85,.85,s+.15,16,1,!1,0,Math.PI),c);g.rotation.z=Math.PI/2,g.rotation.x=Math.PI/2,g.position.set(0,2.15,0),g.castShadow=!0,n.add(g);const _=new j({color:2241348,roughness:.2,metalness:.7,emissive:0,emissiveIntensity:0}),d=[-1.3,-.65,0,.65,1.3];[-r/2-.02,r/2+.02].forEach(S=>{d.forEach(v=>{const y=new U(new Ke(.48,.55),_.clone());y.position.set(S,1.48,v),y.rotation.y=S>0?Math.PI/2:-Math.PI/2,n.add(y),this.carriageWindows.push(y);const P=new U(new rt(.04,.62,.56),h);P.position.set(S,1.48,v),n.add(P)})}),[-s/2-.1,s/2+.1].forEach(S=>{const v=new U(new rt(.7,1.2,.2),new j({color:1118481,roughness:.9}));v.position.set(0,1.3,S),n.add(v);const y=new U(new rt(.2,.15,.35),l);y.position.set(0,.42,S+(S>0?.15:-.15)),n.add(y)});const f=new j({color:2829099,roughness:.5,metalness:.8});return[-1.2,1.2].forEach(S=>{[-.4,.4].forEach(v=>{[-.75,.75].forEach(y=>{const P=new U(new Kt(.3,.3,.1,14),f);P.rotation.z=Math.PI/2,P.position.set(y,.3,S+v),P.castShadow=!0,n.add(P),this.wheels.push(P)})})}),n}updatePosition(t){const e=new w(0,1,0),n=(s,r,a)=>{const o=t-r,c=o+a,l=o-a,h=this.trackCurve.getPointAtDistance(o),u=this.trackCurve.getPointAtDistance(c),p=this.trackCurve.getPointAtDistance(l);s.position.copy(h);const m=new w().subVectors(u,p).normalize(),g=new w().crossVectors(m,e).normalize(),_=new te;_.makeBasis(g,e,m),s.setRotationFromMatrix(_)};n(this.engineGroup,this.offsetEngine,1.8),n(this.carriage1Group,this.offsetCarriage1,1.6),n(this.carriage2Group,this.offsetCarriage2,1.6)}rotateWheels(t,e){const n=t*e/.4;this.wheels.forEach(s=>{s.rotation.x+=n})}setNightMode(t,e=!1){const n=t?1.8:e?.5:0;this.carriageWindows.forEach(s=>{const r=s.material;r.emissive.setHex(16755243),r.emissiveIntensity=n}),this.headlightMesh&&(this.headlightMesh.material.emissiveIntensity=t?3:e?1.5:.4),this.headlightSpot&&(this.headlightSpot.intensity=t?4.5:e?2.5:.8)}}class mm{constructor(t,e){$(this,"train");$(this,"station");$(this,"baseSpeed",8.5);$(this,"speedMultiplier",1);$(this,"currentSpeed",8.5);$(this,"traveledDistance",0);$(this,"initialDistance",0);$(this,"isPaused",!1);$(this,"state","RUNNING");$(this,"stateBeforePause","RUNNING");$(this,"stationStopDist");$(this,"stopDuration",2);$(this,"stopTimer",0);$(this,"hasStoppedThisLap",!1);$(this,"decelDist",5);$(this,"accelDist",5);$(this,"onStateChange");this.train=t,this.station=e;const n=this.train.trackCurve.totalLength;this.stationStopDist=this.train.trackCurve.stationStopU*n,this.initialDistance=(this.stationStopDist-14+n)%n,this.traveledDistance=this.initialDistance,this.train.updatePosition(this.traveledDistance),this.station.setSignalState(!1)}togglePlayPause(){return this.isPaused?this.resume():this.pause(),!this.isPaused}pause(){this.isPaused||(this.isPaused=!0,this.stateBeforePause=this.state,this.state="PAUSED",this.onStateChange&&this.onStateChange(this.state))}resume(){if(this.isPaused&&(this.isPaused=!1,this.state=this.stateBeforePause,this.onStateChange)){const t=this.state==="STOPPED_AT_STATION"?Math.max(0,this.stopDuration-this.stopTimer):void 0;this.onStateChange(this.state,t)}}setSpeedMultiplier(t){this.speedMultiplier=Math.max(.2,Math.min(3,t))}reset(){this.isPaused=!1,this.speedMultiplier=1,this.traveledDistance=this.initialDistance,this.currentSpeed=this.baseSpeed,this.state="RUNNING",this.stateBeforePause="RUNNING",this.stopTimer=0,this.hasStoppedThisLap=!1,this.train.updatePosition(this.traveledDistance),this.station.setSignalState(!1),this.onStateChange&&this.onStateChange(this.state)}update(t){if(this.isPaused)return;const e=this.train.trackCurve.totalLength,n=this.baseSpeed*this.speedMultiplier,s=(this.traveledDistance%e+e)%e;let r=this.stationStopDist-s;switch(r<-e/2&&(r+=e),r>e/2&&(r-=e),this.state){case"RUNNING":{this.currentSpeed=n,this.station.setSignalState(!1),!this.hasStoppedThisLap&&r>0&&r<=this.decelDist&&(this.state="DECELERATING",this.onStateChange&&this.onStateChange(this.state)),(r<-12||r>15)&&this.hasStoppedThisLap&&(this.hasStoppedThisLap=!1);break}case"DECELERATING":{const a=Math.max(0,r/this.decelDist);this.currentSpeed=n*Math.max(.15,a),(r<=.3||r<0&&r>-2.5)&&(this.currentSpeed=0,this.traveledDistance+=r,this.state="STOPPED_AT_STATION",this.stopTimer=0,this.hasStoppedThisLap=!0,this.station.setSignalState(!0),this.onStateChange&&this.onStateChange(this.state,this.stopDuration));break}case"STOPPED_AT_STATION":{this.currentSpeed=0,this.stopTimer+=t;const a=Math.max(0,this.stopDuration-this.stopTimer);this.onStateChange&&this.onStateChange(this.state,a),this.stopTimer>=this.stopDuration&&(this.state="ACCELERATING",this.station.setSignalState(!1),this.onStateChange&&this.onStateChange(this.state));break}case"ACCELERATING":{const a=-r,o=Math.min(1,Math.max(.15,a/this.accelDist));this.currentSpeed=n*o,a>=this.accelDist&&(this.state="RUNNING",this.onStateChange&&this.onStateChange(this.state));break}}this.currentSpeed>0&&(this.traveledDistance+=this.currentSpeed*t,this.train.updatePosition(this.traveledDistance),this.train.rotateWheels(this.currentSpeed,t))}getStatusText(){if(this.isPaused)return{label:"运行暂停",tag:"PAUSED"};switch(this.state){case"STOPPED_AT_STATION":{const t=Math.max(0,this.stopDuration-this.stopTimer).toFixed(1);return{label:`车站停靠中 · 停留还剩 ${t}s`,tag:"STATION_STOP",countdown:`${t}s`}}case"DECELERATING":return{label:"减速进站中 · 准备停靠",tag:"DECEL"};case"ACCELERATING":return{label:"出站加速中 · 信号绿灯",tag:"ACCEL"};case"RUNNING":default:return{label:"正常巡航中",tag:"RUNNING"}}}}class gm{constructor(){$(this,"group");$(this,"signalLightRed");$(this,"signalLightGreen");$(this,"windowMeshes",[]);$(this,"stationLamps",[]);this.group=new St,this.group.name="RailwayStation",this.buildPlatform(),this.buildMainBuilding(),this.buildPlatformCanopy(),this.buildStationProps(),this.buildSignalPost()}buildPlatform(){const t=new St,e=new j({color:8551800,roughness:.85,metalness:.05}),n=new U(new rt(22,.42,2.2),e);n.position.set(0,.21,18.2),n.castShadow=!0,n.receiveShadow=!0,t.add(n);const s=new j({color:13277739,roughness:.7}),r=new U(new rt(22,.04,.18),s);r.position.set(0,.43,19.2),t.add(r),[-11.6,11.6].forEach((a,o)=>{const c=new U(new rt(1.2,.42,2.2),e);c.position.set(a,.1,18.2),c.rotation.z=o===0?.25:-.25,c.castShadow=!0,c.receiveShadow=!0,t.add(c)}),this.group.add(t)}buildMainBuilding(){const t=new St;t.position.set(-2,0,14.8);const e=new j({color:9650740,roughness:.8}),n=new U(new rt(10.5,3.2,4.4),e);n.position.y=1.6,n.castShadow=!0,n.receiveShadow=!0,t.add(n);const s=new j({color:14735048,roughness:.6}),r=new U(new rt(10.8,.25,4.7),s);r.position.y=3.25,r.castShadow=!0,t.add(r);const a=new j({color:15261649,roughness:.75}),o=new U(new rt(8.2,2.2,4),a);o.position.y=4.4,o.castShadow=!0,o.receiveShadow=!0,t.add(o);const c=new j({color:4014925,roughness:.65}),l=new Me(5.2,2.2,4),h=new U(l,c);h.rotation.y=Math.PI/4,h.scale.set(1.4,1,.9),h.position.set(0,6.2,0),h.castShadow=!0,t.add(h);const u=new j({color:2372157,roughness:.2,metalness:.8,emissive:0,emissiveIntensity:0});[{x:-3.5,y:1.8,z:2.22,w:1.1,h:1.6},{x:-1.5,y:1.8,z:2.22,w:1.1,h:1.6},{x:1.5,y:1.8,z:2.22,w:1.1,h:1.6},{x:3.5,y:1.8,z:2.22,w:1.1,h:1.6},{x:-2,y:4.4,z:2.02,w:.9,h:1.2},{x:2,y:4.4,z:2.02,w:.9,h:1.2},{x:-3,y:1.8,z:-2.22,w:1.1,h:1.6},{x:3,y:1.8,z:-2.22,w:1.1,h:1.6}].forEach(d=>{const f=new U(new Ke(d.w,d.h),u.clone());f.position.set(d.x,d.y,d.z),d.z<0&&(f.rotation.y=Math.PI),t.add(f),this.windowMeshes.push(f);const S=new U(new rt(d.w+.16,d.h+.16,.08),s);S.position.set(d.x,d.y,d.z+(d.z>0?-.02:.02)),t.add(S)});const m=new j({color:4860955,roughness:.7}),g=new U(new rt(1.6,2.4,.15),m);g.position.set(0,1.2,2.22),t.add(g);const _=new U(new rt(.8,1.8,.8),e);_.position.set(3.2,6.4,0),_.castShadow=!0,t.add(_),this.group.add(t)}buildPlatformCanopy(){const t=new St;t.position.set(1.5,0,18.2);const e=new j({color:2045995,metalness:.6,roughness:.4}),n=new j({color:8142640,roughness:.6}),s=4,r=3.6;for(let o=0;o<s;o++){const c=-5.4+o*r,l=new U(new Kt(.08,.1,2.6,8),e);l.position.set(c,1.3,0),l.castShadow=!0,t.add(l);const h=new U(new rt(.08,.08,1.6),e);h.position.set(c,2.5,0),t.add(h)}const a=new U(new rt(s*r+1.2,.1,2.2),n);a.position.set(0,2.65,0),a.rotation.x=.05,a.castShadow=!0,a.receiveShadow=!0,t.add(a);for(let o=0;o<3;o++){const c=-3.6+o*3.6,l=new U(new Ze(.12,8,8),new j({color:16770723,emissive:16763972,emissiveIntensity:.5}));l.position.set(c,2.4,0),t.add(l),this.stationLamps.push(l)}this.group.add(t)}buildStationProps(){const t=new St,e=new j({color:5911582,roughness:.7}),n=new j({color:2236962,metalness:.8});[-4.5,4.5].forEach(g=>{const _=new St;_.position.set(g,.42,17.6);const d=new U(new rt(1.6,.08,.45),e);d.position.y=.28,_.add(d);const f=new U(new rt(1.6,.35,.06),e);f.position.set(0,.5,-.2),_.add(f),[-.7,.7].forEach(S=>{const v=new U(new rt(.06,.28,.4),n);v.position.set(S,.14,0),_.add(v)}),_.castShadow=!0,t.add(_)});const s=new St;s.position.set(9,.42,18.2);const r=new U(new Kt(.06,.06,1.8,8),new j({color:3355443}));r.position.y=.9,r.castShadow=!0,s.add(r);const a=new U(new rt(2.4,.65,.1),new j({color:16117468,roughness:.4}));a.position.y=1.6,a.castShadow=!0,s.add(a);const o=new U(new rt(2.5,.75,.08),new j({color:2045995}));o.position.y=1.6,s.add(o),t.add(s);const c=new St;c.position.set(1.5,2.2,18.2);const l=new U(new Kt(.28,.28,.16,16),new j({color:1710618,metalness:.8}));l.rotation.z=Math.PI/2,c.add(l),t.add(c);const h=new j({color:9127187,roughness:.6}),u=new j({color:3100495,roughness:.6}),p=new U(new rt(.65,.35,.45),h);p.position.set(-6.8,.6,17.6),p.rotation.y=.15,t.add(p);const m=new U(new rt(.55,.3,.38),u);m.position.set(-6.8,.9,17.6),m.rotation.y=-.2,t.add(m),this.group.add(t)}buildSignalPost(){const t=new St;t.position.set(13.5,0,21.6);const e=new U(new Kt(.08,.12,3.2,8),new j({color:2236962,metalness:.8}));e.position.y=1.6,e.castShadow=!0,t.add(e);const n=new U(new rt(.4,.9,.35),new j({color:1118481}));n.position.y=2.7,n.castShadow=!0,t.add(n);const s=new j({color:3342336,emissive:16716049,emissiveIntensity:.1,roughness:.3});this.signalLightRed=new U(new Ze(.12,12,12),s),this.signalLightRed.position.set(0,2.9,.18),t.add(this.signalLightRed);const r=new j({color:13056,emissive:2293555,emissiveIntensity:1.2,roughness:.3});this.signalLightGreen=new U(new Ze(.12,12,12),r),this.signalLightGreen.position.set(0,2.5,.18),t.add(this.signalLightGreen),this.group.add(t)}setSignalState(t){t?(this.signalLightRed.material.emissiveIntensity=2,this.signalLightRed.material.color.setHex(16720418),this.signalLightGreen.material.emissiveIntensity=.05,this.signalLightGreen.material.color.setHex(336389)):(this.signalLightRed.material.emissiveIntensity=.05,this.signalLightRed.material.color.setHex(2229509),this.signalLightGreen.material.emissiveIntensity=2,this.signalLightGreen.material.color.setHex(2293572))}setNightMode(t,e=!1){const n=t?1.8:e?.4:0,s=t?16763972:e?16755251:5592405;this.windowMeshes.forEach(r=>{const a=r.material;a.emissive.setHex(16755234),a.emissiveIntensity=n}),this.stationLamps.forEach(r=>{const a=r.material;a.emissive.setHex(s),a.emissiveIntensity=t?2.2:e?.8:.2})}}class _m{constructor(){$(this,"group");$(this,"windowMeshes",[]);this.group=new St,this.group.name="TownBuildings",this.buildTownHall(),this.buildCommercialStreet(),this.buildResidentialCottages(),this.buildRiversideHut()}createWindow(t,e,n=16777215){const s=new St,r=new j({color:2043453,roughness:.25,metalness:.6,emissive:0,emissiveIntensity:0}),a=new U(new Ke(t,e),r);s.add(a),this.windowMeshes.push(a);const o=new j({color:n,roughness:.7}),c=new U(new rt(t+.12,e+.12,.08),o);return c.position.z=-.02,s.add(c),s}buildTownHall(){const t=new St;t.position.set(-12,0,5);const e=new j({color:15064270,roughness:.85}),n=new j({color:3031123,roughness:.6}),s=new j({color:4030055,roughness:.5,metalness:.4}),r=new U(new rt(9,4.8,6.5),e);r.position.y=2.4,r.castShadow=!0,r.receiveShadow=!0,t.add(r);const a=new U(new Me(5.8,2.8,4),n);a.rotation.y=Math.PI/4,a.scale.set(1.2,1,.9),a.position.y=6.2,a.castShadow=!0,t.add(a);const o=new St;o.position.set(3.2,0,2.2);const c=new U(new rt(3,7.5,3),e);c.position.y=3.75,c.castShadow=!0,o.add(c);const l=new U(new rt(3.2,2.5,3.2),e);l.position.y=8.75,l.castShadow=!0,o.add(l);const h=new j({color:16446696,roughness:.3,emissive:3351057,emissiveIntensity:.2}),u=new j({color:13938487,metalness:.8});[{pos:[0,8.8,1.62],rot:[0,0,0]},{pos:[0,8.8,-1.62],rot:[0,Math.PI,0]},{pos:[1.62,8.8,0],rot:[0,Math.PI/2,0]},{pos:[-1.62,8.8,0],rot:[0,-Math.PI/2,0]}].forEach(d=>{const f=new U(new Kt(.7,.7,.08,16),u);f.rotation.x=Math.PI/2,f.position.set(d.pos[0],d.pos[1],d.pos[2]),f.rotation.y=d.rot[1],o.add(f);const S=new U(new Pr(.62,16),h);S.position.set(d.pos[0],d.pos[1],d.pos[2]+(d.pos[2]>0?.05:d.pos[2]<0?-.05:0)),d.pos[0]!==0&&(S.position.x=d.pos[0]+(d.pos[0]>0?.05:-.05)),S.rotation.y=d.rot[1],o.add(S)});const m=new U(new Me(2.2,4.5,4),s);m.rotation.y=Math.PI/4,m.position.y=12.25,m.castShadow=!0,o.add(m);const g=new U(new Kt(.04,.04,1.2,6),u);g.position.y=15,o.add(g),t.add(o),[-2.6,.2].forEach(d=>{const f=this.createWindow(1,1.5,4473924);f.position.set(d,2,3.27),t.add(f);const S=this.createWindow(1,1.5,4473924);S.position.set(d,3.8,3.27),t.add(S)});const _=new U(new rt(1.8,2.5,.2),new j({color:4005906,roughness:.6}));_.position.set(-1.2,1.25,3.28),t.add(_),this.group.add(t)}buildCommercialStreet(){const t=new St,e=new St;e.position.set(2,0,5);const n=new j({color:15786960,roughness:.75}),s=new U(new rt(6.4,4.2,5.2),n);s.position.y=2.1,s.castShadow=!0,s.receiveShadow=!0,e.add(s);const r=new j({color:8859944,roughness:.65}),a=new U(new Me(4.4,2.2,4),r);a.rotation.y=Math.PI/4,a.scale.set(1.2,1,1),a.position.y=5.3,a.castShadow=!0,e.add(a);const o=new j({color:11349282,roughness:.7}),c=new U(new rt(5.2,.15,1.6),o);c.position.set(0,2.7,3.2),c.rotation.x=.25,c.castShadow=!0,e.add(c);const l=this.createWindow(1.6,1.8,4005906);l.position.set(-1.4,1.4,2.62),e.add(l);const h=this.createWindow(1.6,1.8,4005906);h.position.set(1.4,1.4,2.62),e.add(h);const u=new j({color:2241314,metalness:.5});for(let x of[-1.5,1.5]){const A=new U(new Kt(.45,.45,.6,12),u);A.position.set(x,.3,4.6),A.castShadow=!0,e.add(A);const q=new U(new Kt(.2,.2,.4,8),u);q.position.set(x+.6,.2,4.6),q.castShadow=!0,e.add(q)}t.add(e);const p=new St;p.position.set(11,0,5);const m=new j({color:14205607,roughness:.8}),g=new U(new rt(5.6,3.8,5),m);g.position.y=1.9,g.castShadow=!0,g.receiveShadow=!0,p.add(g);const _=new j({color:3493688,roughness:.7}),d=new U(new Me(3.8,2,4),_);d.rotation.y=Math.PI/4,d.scale.set(1.2,1,1),d.position.y=4.8,d.castShadow=!0,p.add(d);const f=new U(new rt(1.6,.45,.1),new j({color:4860436}));f.position.set(0,3.2,2.6),p.add(f);const S=this.createWindow(1.8,1.6,16777215);S.position.set(1,1.3,2.52),p.add(S);const v=new U(new rt(1.1,2,.15),new j({color:4006676}));v.position.set(-1.3,1,2.52),p.add(v),t.add(p);const y=new St;y.position.set(18,0,5);const P=new j({color:8145212,roughness:.75}),R=new U(new rt(5.2,4,5),P);R.position.y=2,R.castShadow=!0,R.receiveShadow=!0,y.add(R);const T=new j({color:2570054,roughness:.7}),I=new U(new Me(3.6,2.2,4),T);I.rotation.y=Math.PI/4,I.position.y=5.1,I.castShadow=!0,y.add(I);const z=this.createWindow(1.8,1.5,2045995);z.position.set(0,1.5,2.52),y.add(z),t.add(y),this.group.add(t)}buildResidentialCottages(){const t=new St,e=new St;e.position.set(4,0,-8);const n=new U(new rt(7,1.6,5.6),new j({color:7564645,roughness:.9}));n.position.y=.8,n.castShadow=!0,e.add(n);const s=new U(new rt(6.6,2.6,5.2),new j({color:9132598,roughness:.75}));s.position.y=2.9,s.castShadow=!0,e.add(s);const r=new U(new Me(4.8,2.4,4),new j({color:5059353,roughness:.8}));r.rotation.y=Math.PI/4,r.scale.set(1.2,1,.9),r.position.y=5.4,r.castShadow=!0,e.add(r);const a=new U(new rt(5.4,.6,.8),new j({color:4005906,roughness:.8}));a.position.set(0,2.8,2.8),a.castShadow=!0,e.add(a);const o=this.createWindow(1,1.2,16777215);o.position.set(-1.6,3.2,2.62),e.add(o);const c=this.createWindow(1,1.2,16777215);c.position.set(1.6,3.2,2.62),e.add(c);const l=new U(new rt(.7,2,.7),new j({color:9127187,roughness:.8}));l.position.set(2,5.8,-.8),l.castShadow=!0,e.add(l),t.add(e);const h=new St;h.position.set(-6,0,-10);const u=new U(new rt(5.4,3.4,4.8),new j({color:15656924,roughness:.8}));u.position.y=1.7,u.castShadow=!0,h.add(u);const p=new U(new Me(3.8,2,4),new j({color:9650740,roughness:.65}));p.rotation.y=Math.PI/4,p.position.y=4.4,p.castShadow=!0,h.add(p);const m=this.createWindow(1.1,1.2,2236962);m.position.set(0,1.8,2.42),h.add(m);const g=new j({color:16119285,roughness:.7});for(let y=-2.8;y<=2.8;y+=.8){const P=new U(new rt(.08,.65,.04),g);P.position.set(y,.32,3.8),h.add(P)}const _=new U(new rt(5.8,.06,.04),g);_.position.set(0,.45,3.8),h.add(_),t.add(h);const d=new St;d.position.set(15,0,-12);const f=new U(new rt(5,3.2,4.2),new j({color:15260622,roughness:.85}));f.position.y=1.6,f.castShadow=!0,d.add(f);const S=new U(new Me(3.5,2,4),new j({color:4283254,roughness:.7}));S.rotation.y=Math.PI/4,S.position.y=4.2,S.castShadow=!0,d.add(S);const v=this.createWindow(1,1.1,16777215);v.position.set(0,1.7,2.12),d.add(v),t.add(d),this.group.add(t)}buildRiversideHut(){const t=new St;t.position.set(24.5,0,11),t.rotation.y=-.3;const e=new j({color:5519397,roughness:.85}),n=new U(new rt(3.6,2.4,3),e);n.position.y=1.2,n.castShadow=!0,t.add(n);const s=new U(new Me(2.6,1.6,4),new j({color:4014925,roughness:.7}));s.rotation.y=Math.PI/4,s.position.y=3.2,s.castShadow=!0,t.add(s);const r=this.createWindow(.8,.8,16777215);r.position.set(0,1.4,1.52),t.add(r),this.group.add(t)}setNightMode(t,e=!1){const n=t?2:e?.5:0;this.windowMeshes.forEach(s=>{const r=s.material;r.emissive.setHex(16757560),r.emissiveIntensity=n})}}class vm{constructor(){$(this,"group");$(this,"streetLamps",[]);$(this,"fountainWater");this.group=new St,this.group.name="TownDecorations",this.buildRoadNetwork(),this.buildLevelCrossing(),this.buildFountain(),this.buildStreetLamps(),this.buildTreesAndBushes(),this.buildVintageCars()}buildRoadNetwork(){const t=new St,e=new j({color:10261641,roughness:.88,flatShading:!0}),n=new j({color:8153427,roughness:.95,flatShading:!0}),s=new U(new rt(24,.08,7.5),e);s.position.set(1,.04,11.2),s.receiveShadow=!0,t.add(s);const r=new U(new rt(26,.08,4.2),e);r.position.set(4,.04,1.2),r.receiveShadow=!0,t.add(r);const a=new U(new rt(4,.08,18),e);a.position.set(-3.5,.04,4),a.receiveShadow=!0,t.add(a);const o=new U(new rt(16,.08,3.2),e);o.position.set(19,.04,11.2),o.receiveShadow=!0,t.add(o);const c=new U(new rt(18,.06,2.6),n);c.position.set(6,.03,-11),c.rotation.y=.12,c.receiveShadow=!0,t.add(c);const l=new U(new rt(16,.06,2),n);l.position.set(-24,.05,-3),l.rotation.y=-.35,l.receiveShadow=!0,t.add(l),this.group.add(t)}buildLevelCrossing(){const t=new St;t.position.set(24.5,0,18);const e=new j({color:4862496,roughness:.8}),n=new U(new rt(3.6,.36,2.4),e);n.position.set(0,.18,0),n.receiveShadow=!0,t.add(n);const s=new j({color:13183530}),r=new j({color:16316922}),a=new j({color:3355443,metalness:.8});[-1.6,1.6].forEach((o,c)=>{const l=new St;l.position.set(o,0,c===0?-1.8:1.8);const h=new U(new rt(.35,1.2,.35),a);h.position.y=.6,h.castShadow=!0,l.add(h);const u=new U(new rt(.8,.12,.04),r);u.rotation.z=Math.PI/4,u.position.y=1.35,l.add(u);const p=new U(new rt(.8,.12,.04),r);p.rotation.z=-Math.PI/4,p.position.y=1.35,l.add(p);const m=new U(new rt(3.2,.1,.08),s);m.position.set(o>0?-1.5:1.5,.85,0),l.add(m),t.add(l)}),this.group.add(t)}buildFountain(){const t=new St;t.position.set(-3.5,0,11.2);const e=new j({color:9406592,roughness:.8,flatShading:!0}),n=new U(new Kt(2.2,2.4,.65,8),e);n.position.y=.32,n.castShadow=!0,n.receiveShadow=!0,t.add(n);const s=new j({color:3377305,roughness:.1,metalness:.2,transparent:!0,opacity:.85});this.fountainWater=new U(new Kt(1.9,1.9,.1,16),s),this.fountainWater.position.y=.5,t.add(this.fountainWater);const r=new U(new Kt(.35,.45,1.4,8),e);r.position.y=.9,r.castShadow=!0,t.add(r);const a=new U(new Kt(.9,.5,.25,8),e);a.position.y=1.5,a.castShadow=!0,t.add(a);const o=new U(new Ze(.2,8,8),e);o.position.y=1.8,t.add(o),this.group.add(t)}buildStreetLamps(){const t=new St,e=new j({color:2040865,metalness:.8,roughness:.3});[{x:-9.5,z:8.5},{x:3.5,z:8.5},{x:-9.5,z:14.5},{x:7.5,z:14.5},{x:-1,z:2.8},{x:7.5,z:2.8},{x:15,z:2.8},{x:21,z:15}].forEach((s,r)=>{const a=new St;a.position.set(s.x,0,s.z);const o=new U(new Kt(.18,.28,.5,8),e);o.position.y=.25,o.castShadow=!0,a.add(o);const c=new U(new Kt(.06,.08,2.2,8),e);c.position.y=1.4,c.castShadow=!0,a.add(c);const l=new U(new Me(.35,.22,6),e);l.position.y=2.65,a.add(l);const h=new j({color:16770723,emissive:16755234,emissiveIntensity:.2,roughness:.3}),u=new U(new Ze(.14,8,8),h);u.position.y=2.45,a.add(u);let p;r%2===0&&(p=new im(16754740,.6,12,1.8),p.position.set(0,2.4,0),a.add(p)),this.streetLamps.push({mesh:u,light:p}),t.add(a)}),this.group.add(t)}buildTreesAndBushes(){const t=new St,e=[new j({color:4026425,roughness:.85,flatShading:!0}),new j({color:5081671,roughness:.85,flatShading:!0}),new j({color:3037483,roughness:.9,flatShading:!0}),new j({color:6330701,roughness:.8,flatShading:!0})],n=new j({color:5913896,roughness:.9}),s=(u,p,m=1,g=0)=>{const _=new St;_.position.set(u,0,p);const d=new U(new Kt(.2*m,.35*m,1.8*m,7),n);d.position.y=.9*m,d.castShadow=!0,d.receiveShadow=!0,_.add(d);const f=e[g%e.length],S=new St;S.position.y=2.4*m;const v=new U(new _n(1.4*m,1),f);v.castShadow=!0,v.receiveShadow=!0,S.add(v);const y=new U(new _n(.9*m,1),f);y.position.set(.6*m,-.4*m,.4*m),y.castShadow=!0,S.add(y);const P=new U(new _n(1*m,1),f);return P.position.set(-.5*m,.3*m,-.3*m),P.castShadow=!0,S.add(P),_.add(S),_},r=(u,p,m,g=1)=>{const _=new St;_.position.set(u,p,m);const d=new U(new Kt(.18*g,.28*g,1.4*g,6),n);d.position.y=.7*g,d.castShadow=!0,_.add(d);const f=e[2];return[{r:1.6,h:1.8,y:1.8},{r:1.3,h:1.6,y:2.8},{r:.9,h:1.4,y:3.7}].forEach(v=>{const y=new U(new Me(v.r*g,v.h*g,7),f);y.position.y=v.y*g,y.castShadow=!0,y.receiveShadow=!0,_.add(y)}),_};[{x:-30,y:1.2,z:-8,s:1.1},{x:-34,y:2.8,z:-4,s:1.3},{x:-38,y:4.2,z:7,s:1.2},{x:-44,y:3.8,z:-8,s:1.4},{x:-45,y:2.5,z:12,s:1},{x:-28,y:.2,z:-20,s:1.2},{x:-20,y:0,z:-21,s:1}].forEach(u=>{t.add(r(u.x,u.y,u.z,u.s))}),[{x:-16,z:17,s:1.1,m:0},{x:-18,z:12,s:1.3,m:1},{x:-14,z:13,s:.9,m:3},{x:-1,z:-3,s:1.2,m:0},{x:12,z:-3,s:1.1,m:1},{x:1,z:-18,s:1.4,m:2},{x:9,z:-20,s:1.3,m:0},{x:18,z:-21,s:1.2,m:1},{x:24,z:-15,s:1.1,m:3},{x:26,z:3,s:1.2,m:0},{x:27,z:-5,s:1,m:1},{x:28,z:24,s:1.2,m:3},{x:40,z:10,s:1.3,m:0},{x:42,z:-2,s:1.1,m:2},{x:40,z:-18,s:1.2,m:1}].forEach(u=>{t.add(s(u.x,u.z,u.s,u.m))});const c=e[3],l=new _n(.55,1);[{x:-8,z:5},{x:7,z:5},{x:15,z:5},{x:-5,z:15},{x:5,z:15},{x:-1,z:8},{x:23,z:8},{x:27,z:15}].forEach(u=>{const p=new U(l,c);p.position.set(u.x,.3,u.z),p.scale.set(1.2,.8,1.2),p.castShadow=!0,p.receiveShadow=!0,t.add(p)}),this.group.add(t)}buildVintageCars(){const t=new St,e=(r,a,o,c)=>{const l=new St;l.position.set(r,.18,a),l.rotation.y=o;const h=new j({color:c,roughness:.35,metalness:.3}),u=new U(new rt(1.6,.5,3.2),h);u.position.y=.35,u.castShadow=!0,l.add(u);const p=new U(new rt(1.4,.45,1.6),new j({color:2043453,roughness:.2}));p.position.set(0,.75,-.2),p.castShadow=!0,l.add(p);const m=new j({color:13938487,metalness:.9,roughness:.2}),g=new U(new rt(1.5,.12,.12),m);g.position.set(0,.25,1.65),l.add(g);const _=new j({color:2236962,roughness:.8});for(let d of[-.8,.8])for(let f of[-.9,.9]){const S=new U(new Kt(.24,.24,.16,12),_);S.rotation.z=Math.PI/2,S.position.set(d,.24,f),S.castShadow=!0,l.add(S)}return l},n=e(18.5,1.5,.05,2050604);t.add(n);const s=e(14,11.2,Math.PI/2,9119006);t.add(s),this.group.add(t)}setNightMode(t,e=!1){const n=t?2.5:e?.9:.1,s=t?1:e?.35:0;this.streetLamps.forEach(r=>{const a=r.mesh.material;a.emissive.setHex(16755234),a.emissiveIntensity=n,r.light&&(r.light.intensity=s)})}}class xm{constructor(t,e,n,s,r){$(this,"scene");$(this,"mode","DUSK");$(this,"sunLight");$(this,"hemiLight");$(this,"ambientLight");$(this,"station");$(this,"buildings");$(this,"townDeco");$(this,"train");$(this,"isTransitioning",!1);$(this,"transitionProgress",1);$(this,"transitionDuration",.8);$(this,"currentSunColor",new Ft);$(this,"targetSunColor",new Ft);$(this,"currentSunIntensity",2.2);$(this,"targetSunIntensity",2.2);$(this,"currentSunPos",new w);$(this,"targetSunPos",new w);$(this,"currentHemiSky",new Ft);$(this,"targetHemiSky",new Ft);$(this,"currentHemiGround",new Ft);$(this,"targetHemiGround",new Ft);$(this,"currentHemiIntensity",1);$(this,"targetHemiIntensity",1);$(this,"currentBgColor",new Ft);$(this,"targetBgColor",new Ft);this.scene=t,this.station=e,this.buildings=n,this.townDeco=s,this.train=r,this.initLights(),this.setMode("DUSK",!0)}initLights(){this.hemiLight=new Qp(16777215,4473924,1),this.hemiLight.position.set(0,50,0),this.scene.add(this.hemiLight),this.ambientLight=new om(16777215,.3),this.scene.add(this.ambientLight),this.sunLight=new rm(16777215,2.2),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.width=2048,this.sunLight.shadow.mapSize.height=2048,this.sunLight.shadow.camera.near=5,this.sunLight.shadow.camera.far=160;const t=58;this.sunLight.shadow.camera.left=-t,this.sunLight.shadow.camera.right=t,this.sunLight.shadow.camera.top=t,this.sunLight.shadow.camera.bottom=-t,this.sunLight.shadow.bias=-4e-4,this.sunLight.shadow.normalBias=.02,this.scene.add(this.sunLight),this.scene.add(this.sunLight.target),this.sunLight.target.position.set(0,0,0)}setMode(t,e=!1){switch(this.mode=t,t){case"DUSK":this.targetSunColor.setHex(16751175),this.targetSunIntensity=2.4,this.targetSunPos.set(45,30,-35),this.targetHemiSky.setHex(10322088),this.targetHemiGround.setHex(7358514),this.targetHemiIntensity=1,this.targetBgColor.setHex(14075836);break;case"DAY":this.targetSunColor.setHex(16774112),this.targetSunIntensity=2.8,this.targetSunPos.set(30,60,25),this.targetHemiSky.setHex(11917559),this.targetHemiGround.setHex(6324309),this.targetHemiIntensity=1.25,this.targetBgColor.setHex(14477294);break;case"NIGHT":this.targetSunColor.setHex(5601194),this.targetSunIntensity=.95,this.targetSunPos.set(35,45,-25),this.targetHemiSky.setHex(2242136),this.targetHemiGround.setHex(1712686),this.targetHemiIntensity=.85,this.targetBgColor.setHex(1251620);break}const n=t==="NIGHT",s=t==="DUSK";this.station.setNightMode(n,s),this.buildings.setNightMode(n,s),this.townDeco.setNightMode(n,s),this.train.setNightMode(n,s),e?(this.currentSunColor.copy(this.targetSunColor),this.currentSunIntensity=this.targetSunIntensity,this.currentSunPos.copy(this.targetSunPos),this.currentHemiSky.copy(this.targetHemiSky),this.currentHemiGround.copy(this.targetHemiGround),this.currentHemiIntensity=this.targetHemiIntensity,this.currentBgColor.copy(this.targetBgColor),this.applyCurrentLighting(),this.isTransitioning=!1):(this.isTransitioning=!0,this.transitionProgress=0)}applyCurrentLighting(){this.sunLight.color.copy(this.currentSunColor),this.sunLight.intensity=this.currentSunIntensity,this.sunLight.position.copy(this.currentSunPos),this.hemiLight.color.copy(this.currentHemiSky),this.hemiLight.groundColor.copy(this.currentHemiGround),this.hemiLight.intensity=this.currentHemiIntensity,this.scene.background=this.currentBgColor.clone(),this.scene.fog&&this.scene.fog.color.copy(this.currentBgColor)}update(t){if(!this.isTransitioning)return;this.transitionProgress+=t/this.transitionDuration,this.transitionProgress>=1&&(this.transitionProgress=1,this.isTransitioning=!1);const e=Li.smoothstep(this.transitionProgress,0,1);this.currentSunColor.lerpColors(this.currentSunColor,this.targetSunColor,e),this.currentSunIntensity=Li.lerp(this.currentSunIntensity,this.targetSunIntensity,e),this.currentSunPos.lerpVectors(this.currentSunPos,this.targetSunPos,e),this.currentHemiSky.lerpColors(this.currentHemiSky,this.targetHemiSky,e),this.currentHemiGround.lerpColors(this.currentHemiGround,this.targetHemiGround,e),this.currentHemiIntensity=Li.lerp(this.currentHemiIntensity,this.targetHemiIntensity,e),this.currentBgColor.lerpColors(this.currentBgColor,this.targetBgColor,e),this.applyCurrentLighting()}}class Mm{constructor(t,e,n){$(this,"trainController");$(this,"lighting");$(this,"sceneManager");$(this,"playPauseBtn");$(this,"playPauseIcon");$(this,"speedLabel");$(this,"speedSlider");$(this,"speedPresetBtns",[]);$(this,"timeModeBtns",{});$(this,"statusDot");$(this,"statusText");this.trainController=t,this.lighting=e,this.sceneManager=n,this.createUIElements(),this.bindEvents(),this.updateStatus()}createUIElements(){const t=document.createElement("div");t.id="diorama-ui-overlay",t.innerHTML=`
      <!-- 顶部信息栏与状态胶囊 -->
      <header class="ui-header">
        <div class="brand">
          <div class="brand-icon">🚂</div>
          <div class="brand-text">
            <h1 class="brand-title">微缩铁路小镇</h1>
            <span class="brand-sub">ALPINE JUNCTION · 1:87 DIORAMA</span>
          </div>
        </div>

        <div class="status-capsule" id="status-capsule">
          <span class="status-dot" id="status-dot"></span>
          <span class="status-text" id="status-text">正常巡航中</span>
        </div>
      </header>

      <!-- 底部主控悬浮面板 -->
      <footer class="ui-bottom-dock">
        <div class="dock-panel">
          <!-- 核心走停控制与复位 -->
          <div class="dock-section">
            <button class="btn btn-primary" id="btn-play-pause" title="运行 / 暂停 (空格键)">
              <span class="btn-icon" id="play-pause-icon">⏸</span>
              <span class="btn-label" id="play-pause-text">暂停</span>
            </button>
            <button class="btn btn-secondary" id="btn-reset" title="复位视角、列车位置与速度 (R键)">
              <span class="btn-icon">↺</span>
              <span class="btn-label">复位</span>
            </button>
          </div>

          <div class="divider"></div>

          <!-- 速度控制 -->
          <div class="dock-section speed-section">
            <div class="section-title">
              <span>运行速度</span>
              <span class="speed-value" id="speed-value">1.0x</span>
            </div>
            <div class="speed-controls">
              <input type="range" id="speed-slider" min="0.25" max="3.0" step="0.25" value="1.0" class="custom-slider" />
              <div class="btn-group">
                <button class="btn-chip" data-speed="0.5">0.5x</button>
                <button class="btn-chip active" data-speed="1.0">1.0x</button>
                <button class="btn-chip" data-speed="2.0">2.0x</button>
              </div>
            </div>
          </div>

          <div class="divider"></div>

          <!-- 昼夜环境光照 -->
          <div class="dock-section">
            <div class="section-title">光照氛围</div>
            <div class="btn-group">
              <button class="btn-chip active" id="btn-dusk" data-mode="DUSK" title="傍晚暖阳与长投影">
                <span>🌅 傍晚</span>
              </button>
              <button class="btn-chip" id="btn-day" data-mode="DAY" title="清爽明亮白昼">
                <span>☀️ 白天</span>
              </button>
              <button class="btn-chip" id="btn-night" data-mode="NIGHT" title="夜幕与窗户路灯暖光">
                <span>🌙 夜晚</span>
              </button>
            </div>
          </div>

          <div class="divider"></div>

          <!-- 相机视角预设 -->
          <div class="dock-section">
            <div class="section-title">视角观察</div>
            <div class="btn-group">
              <button class="btn-chip active" id="cam-overview">全景沙盘</button>
              <button class="btn-chip" id="cam-station">火车站</button>
              <button class="btn-chip" id="cam-bridge">跨河铁桥</button>
              <button class="btn-chip" id="cam-follow">追踪列车</button>
            </div>
          </div>
        </div>

        <!-- 底部快捷提示 -->
        <div class="dock-tips">
          <span>🖱️ 鼠标左键拖拽旋转 · 滚轮缩放 · 右键平移 · [空格] 暂停/运行 · [R] 复位</span>
        </div>
      </footer>
    `,document.body.appendChild(t),this.playPauseBtn=document.getElementById("btn-play-pause"),this.playPauseIcon=document.getElementById("play-pause-icon"),this.speedLabel=document.getElementById("speed-value"),this.speedSlider=document.getElementById("speed-slider"),this.statusDot=document.getElementById("status-dot"),this.statusText=document.getElementById("status-text"),this.timeModeBtns.DUSK=document.getElementById("btn-dusk"),this.timeModeBtns.DAY=document.getElementById("btn-day"),this.timeModeBtns.NIGHT=document.getElementById("btn-night"),this.speedPresetBtns=Array.from(document.querySelectorAll("[data-speed]"))}bindEvents(){this.playPauseBtn.addEventListener("click",()=>{const a=this.trainController.togglePlayPause();this.updatePlayPauseButton(a),this.updateStatus()});const t=document.getElementById("btn-reset");t==null||t.addEventListener("click",()=>{this.trainController.reset(),this.sceneManager.resetCamera(),this.setSpeed(1),this.updatePlayPauseButton(!0),this.updateStatus(),this.updateActiveCamBtn(document.getElementById("cam-overview"))}),this.speedSlider.addEventListener("input",a=>{const o=parseFloat(a.target.value);this.setSpeed(o,!1)}),this.speedPresetBtns.forEach(a=>{a.addEventListener("click",()=>{const o=parseFloat(a.getAttribute("data-speed")||"1.0");this.setSpeed(o,!0)})}),Object.keys(this.timeModeBtns).forEach(a=>{const o=a,c=this.timeModeBtns[o];c==null||c.addEventListener("click",()=>{this.lighting.setMode(o),Object.values(this.timeModeBtns).forEach(l=>l==null?void 0:l.classList.remove("active")),c.classList.add("active")})});const e=document.getElementById("cam-overview"),n=document.getElementById("cam-station"),s=document.getElementById("cam-bridge"),r=document.getElementById("cam-follow");e==null||e.addEventListener("click",()=>{this.sceneManager.resetCamera(),this.updateActiveCamBtn(e)}),n==null||n.addEventListener("click",()=>{this.sceneManager.flyTo(new w(12,14,38),new w(0,1.2,18),1.2),this.updateActiveCamBtn(n)}),s==null||s.addEventListener("click",()=>{this.sceneManager.flyTo(new w(56,26,8),new w(34,1,-3),1.2),this.updateActiveCamBtn(s)}),r==null||r.addEventListener("click",()=>{this.sceneManager.setFollowTrain(this.trainController.train.engineGroup),this.updateActiveCamBtn(r)}),window.addEventListener("keydown",a=>{var o,c,l;if(a.code==="Space"){a.preventDefault();const h=this.trainController.togglePlayPause();this.updatePlayPauseButton(h),this.updateStatus()}else a.code==="KeyR"?t==null||t.click():a.code==="Digit1"?(o=this.timeModeBtns.DAY)==null||o.click():a.code==="Digit2"?(c=this.timeModeBtns.DUSK)==null||c.click():a.code==="Digit3"&&((l=this.timeModeBtns.NIGHT)==null||l.click())}),this.trainController.onStateChange=(a,o)=>{this.updateStatus()}}updateActiveCamBtn(t){[document.getElementById("cam-overview"),document.getElementById("cam-station"),document.getElementById("cam-bridge"),document.getElementById("cam-follow")].forEach(n=>n==null?void 0:n.classList.remove("active")),t.classList.add("active")}setSpeed(t,e=!0){this.trainController.setSpeedMultiplier(t),this.speedLabel.textContent=`${t.toFixed(2).replace(/\.00$/,".0")}x`,e&&(this.speedSlider.value=t.toString()),this.speedPresetBtns.forEach(n=>{const s=parseFloat(n.getAttribute("data-speed")||"");n.classList.toggle("active",Math.abs(s-t)<.05)})}updatePlayPauseButton(t){const e=document.getElementById("play-pause-text");t?(this.playPauseIcon.textContent="⏸",e&&(e.textContent="暂停"),this.playPauseBtn.classList.remove("paused")):(this.playPauseIcon.textContent="▶",e&&(e.textContent="运行"),this.playPauseBtn.classList.add("paused"))}updateStatus(){const t=this.trainController.getStatusText();switch(this.statusText.textContent=t.label,this.statusDot.className="status-dot",t.tag){case"RUNNING":this.statusDot.classList.add("dot-green");break;case"STATION_STOP":this.statusDot.classList.add("dot-red");break;case"DECEL":this.statusDot.classList.add("dot-yellow");break;case"ACCEL":this.statusDot.classList.add("dot-blue");break;case"PAUSED":this.statusDot.classList.add("dot-gray");break}}}function xa(){const i=document.getElementById("canvas-container");if(!i){console.error("Canvas container element not found!");return}const t=new hm(i),e=t.scene,n=new um;e.add(n.group);const s=new dm,r=new fm(s);e.add(r.group);const a=new gm;e.add(a.group);const o=new _m;e.add(o.group);const c=new vm;e.add(c.group);const l=new pm(s);e.add(l.group);const h=new mm(l,a),u=new xm(e,a,o,c,l),p=new Mm(h,u,t);window.__DIORAMA__={trainController:h,lighting:u,sceneManager:t,uiManager:p};const m=new am;function g(){requestAnimationFrame(g);const _=m.getDelta(),d=Math.min(_,.08);h.update(d),n.update(d),u.update(d),t.update(d),p.updateStatus(),t.render()}g(),console.log("Alpine Miniature Railway Town initialized successfully.")}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",xa):xa();
