(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Ty(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Kf={exports:{}},se={};var Sg;function by(){if(Sg)return se;Sg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),y=Symbol.iterator;function x(L){return L===null||typeof L!="object"?null:(L=y&&L[y]||L["@@iterator"],typeof L=="function"?L:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,M={};function S(L,nt,yt){this.props=L,this.context=nt,this.refs=M,this.updater=yt||b}S.prototype.isReactComponent={},S.prototype.setState=function(L,nt){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,nt,"setState")},S.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function B(){}B.prototype=S.prototype;function O(L,nt,yt){this.props=L,this.context=nt,this.refs=M,this.updater=yt||b}var D=O.prototype=new B;D.constructor=O,R(D,S.prototype),D.isPureReactComponent=!0;var V=Array.isArray;function F(){}var z={H:null,A:null,T:null,S:null},Z=Object.prototype.hasOwnProperty;function w(L,nt,yt){var bt=yt.ref;return{$$typeof:o,type:L,key:nt,ref:bt!==void 0?bt:null,props:yt}}function C(L,nt){return w(L.type,nt,L.props)}function G(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function et(L){var nt={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(yt){return nt[yt]})}var lt=/\/+/g;function ft(L,nt){return typeof L=="object"&&L!==null&&L.key!=null?et(""+L.key):nt.toString(36)}function rt(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(F,F):(L.status="pending",L.then(function(nt){L.status==="pending"&&(L.status="fulfilled",L.value=nt)},function(nt){L.status==="pending"&&(L.status="rejected",L.reason=nt)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function N(L,nt,yt,bt,Nt){var it=typeof L;(it==="undefined"||it==="boolean")&&(L=null);var ct=!1;if(L===null)ct=!0;else switch(it){case"bigint":case"string":case"number":ct=!0;break;case"object":switch(L.$$typeof){case o:case t:ct=!0;break;case g:return ct=L._init,N(ct(L._payload),nt,yt,bt,Nt)}}if(ct)return Nt=Nt(L),ct=bt===""?"."+ft(L,0):bt,V(Nt)?(yt="",ct!=null&&(yt=ct.replace(lt,"$&/")+"/"),N(Nt,nt,yt,"",function(kt){return kt})):Nt!=null&&(G(Nt)&&(Nt=C(Nt,yt+(Nt.key==null||L&&L.key===Nt.key?"":(""+Nt.key).replace(lt,"$&/")+"/")+ct)),nt.push(Nt)),1;ct=0;var wt=bt===""?".":bt+":";if(V(L))for(var It=0;It<L.length;It++)bt=L[It],it=wt+ft(bt,It),ct+=N(bt,nt,yt,it,Nt);else if(It=x(L),typeof It=="function")for(L=It.call(L),It=0;!(bt=L.next()).done;)bt=bt.value,it=wt+ft(bt,It++),ct+=N(bt,nt,yt,it,Nt);else if(it==="object"){if(typeof L.then=="function")return N(rt(L),nt,yt,bt,Nt);throw nt=String(L),Error("Objects are not valid as a React child (found: "+(nt==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":nt)+"). If you meant to render a collection of children, use an array instead.")}return ct}function q(L,nt,yt){if(L==null)return L;var bt=[],Nt=0;return N(L,bt,"","",function(it){return nt.call(yt,it,Nt++)}),bt}function j(L){if(L._status===-1){var nt=L._result;nt=nt(),nt.then(function(yt){(L._status===0||L._status===-1)&&(L._status=1,L._result=yt)},function(yt){(L._status===0||L._status===-1)&&(L._status=2,L._result=yt)}),L._status===-1&&(L._status=0,L._result=nt)}if(L._status===1)return L._result.default;throw L._result}var vt=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var nt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(nt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},xt={map:q,forEach:function(L,nt,yt){q(L,function(){nt.apply(this,arguments)},yt)},count:function(L){var nt=0;return q(L,function(){nt++}),nt},toArray:function(L){return q(L,function(nt){return nt})||[]},only:function(L){if(!G(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return se.Activity=_,se.Children=xt,se.Component=S,se.Fragment=i,se.Profiler=l,se.PureComponent=O,se.StrictMode=s,se.Suspense=m,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,se.__COMPILER_RUNTIME={__proto__:null,c:function(L){return z.H.useMemoCache(L)}},se.cache=function(L){return function(){return L.apply(null,arguments)}},se.cacheSignal=function(){return null},se.cloneElement=function(L,nt,yt){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var bt=R({},L.props),Nt=L.key;if(nt!=null)for(it in nt.key!==void 0&&(Nt=""+nt.key),nt)!Z.call(nt,it)||it==="key"||it==="__self"||it==="__source"||it==="ref"&&nt.ref===void 0||(bt[it]=nt[it]);var it=arguments.length-2;if(it===1)bt.children=yt;else if(1<it){for(var ct=Array(it),wt=0;wt<it;wt++)ct[wt]=arguments[wt+2];bt.children=ct}return w(L.type,Nt,bt)},se.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},se.createElement=function(L,nt,yt){var bt,Nt={},it=null;if(nt!=null)for(bt in nt.key!==void 0&&(it=""+nt.key),nt)Z.call(nt,bt)&&bt!=="key"&&bt!=="__self"&&bt!=="__source"&&(Nt[bt]=nt[bt]);var ct=arguments.length-2;if(ct===1)Nt.children=yt;else if(1<ct){for(var wt=Array(ct),It=0;It<ct;It++)wt[It]=arguments[It+2];Nt.children=wt}if(L&&L.defaultProps)for(bt in ct=L.defaultProps,ct)Nt[bt]===void 0&&(Nt[bt]=ct[bt]);return w(L,it,Nt)},se.createRef=function(){return{current:null}},se.forwardRef=function(L){return{$$typeof:d,render:L}},se.isValidElement=G,se.lazy=function(L){return{$$typeof:g,_payload:{_status:-1,_result:L},_init:j}},se.memo=function(L,nt){return{$$typeof:p,type:L,compare:nt===void 0?null:nt}},se.startTransition=function(L){var nt=z.T,yt={};z.T=yt;try{var bt=L(),Nt=z.S;Nt!==null&&Nt(yt,bt),typeof bt=="object"&&bt!==null&&typeof bt.then=="function"&&bt.then(F,vt)}catch(it){vt(it)}finally{nt!==null&&yt.types!==null&&(nt.types=yt.types),z.T=nt}},se.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},se.use=function(L){return z.H.use(L)},se.useActionState=function(L,nt,yt){return z.H.useActionState(L,nt,yt)},se.useCallback=function(L,nt){return z.H.useCallback(L,nt)},se.useContext=function(L){return z.H.useContext(L)},se.useDebugValue=function(){},se.useDeferredValue=function(L,nt){return z.H.useDeferredValue(L,nt)},se.useEffect=function(L,nt){return z.H.useEffect(L,nt)},se.useEffectEvent=function(L){return z.H.useEffectEvent(L)},se.useId=function(){return z.H.useId()},se.useImperativeHandle=function(L,nt,yt){return z.H.useImperativeHandle(L,nt,yt)},se.useInsertionEffect=function(L,nt){return z.H.useInsertionEffect(L,nt)},se.useLayoutEffect=function(L,nt){return z.H.useLayoutEffect(L,nt)},se.useMemo=function(L,nt){return z.H.useMemo(L,nt)},se.useOptimistic=function(L,nt){return z.H.useOptimistic(L,nt)},se.useReducer=function(L,nt,yt){return z.H.useReducer(L,nt,yt)},se.useRef=function(L){return z.H.useRef(L)},se.useState=function(L){return z.H.useState(L)},se.useSyncExternalStore=function(L,nt,yt){return z.H.useSyncExternalStore(L,nt,yt)},se.useTransition=function(){return z.H.useTransition()},se.version="19.2.6",se}var yg;function Ed(){return yg||(yg=1,Kf.exports=by()),Kf.exports}var _s=Ed();const oe=Ty(_s);var Qf={exports:{}},Uo={},Jf={exports:{}},$f={};var Mg;function Ay(){return Mg||(Mg=1,(function(o){function t(N,q){var j=N.length;N.push(q);t:for(;0<j;){var vt=j-1>>>1,xt=N[vt];if(0<l(xt,q))N[vt]=q,N[j]=xt,j=vt;else break t}}function i(N){return N.length===0?null:N[0]}function s(N){if(N.length===0)return null;var q=N[0],j=N.pop();if(j!==q){N[0]=j;t:for(var vt=0,xt=N.length,L=xt>>>1;vt<L;){var nt=2*(vt+1)-1,yt=N[nt],bt=nt+1,Nt=N[bt];if(0>l(yt,j))bt<xt&&0>l(Nt,yt)?(N[vt]=Nt,N[bt]=j,vt=bt):(N[vt]=yt,N[nt]=j,vt=nt);else if(bt<xt&&0>l(Nt,j))N[vt]=Nt,N[bt]=j,vt=bt;else break t}}return q}function l(N,q){var j=N.sortIndex-q.sortIndex;return j!==0?j:N.id-q.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,_=null,y=3,x=!1,b=!1,R=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function D(N){for(var q=i(p);q!==null;){if(q.callback===null)s(p);else if(q.startTime<=N)s(p),q.sortIndex=q.expirationTime,t(m,q);else break;q=i(p)}}function V(N){if(R=!1,D(N),!b)if(i(m)!==null)b=!0,F||(F=!0,et());else{var q=i(p);q!==null&&rt(V,q.startTime-N)}}var F=!1,z=-1,Z=5,w=-1;function C(){return M?!0:!(o.unstable_now()-w<Z)}function G(){if(M=!1,F){var N=o.unstable_now();w=N;var q=!0;try{t:{b=!1,R&&(R=!1,B(z),z=-1),x=!0;var j=y;try{e:{for(D(N),_=i(m);_!==null&&!(_.expirationTime>N&&C());){var vt=_.callback;if(typeof vt=="function"){_.callback=null,y=_.priorityLevel;var xt=vt(_.expirationTime<=N);if(N=o.unstable_now(),typeof xt=="function"){_.callback=xt,D(N),q=!0;break e}_===i(m)&&s(m),D(N)}else s(m);_=i(m)}if(_!==null)q=!0;else{var L=i(p);L!==null&&rt(V,L.startTime-N),q=!1}}break t}finally{_=null,y=j,x=!1}q=void 0}}finally{q?et():F=!1}}}var et;if(typeof O=="function")et=function(){O(G)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,ft=lt.port2;lt.port1.onmessage=G,et=function(){ft.postMessage(null)}}else et=function(){S(G,0)};function rt(N,q){z=S(function(){N(o.unstable_now())},q)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(N){N.callback=null},o.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<N?Math.floor(1e3/N):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(N){switch(y){case 1:case 2:case 3:var q=3;break;default:q=y}var j=y;y=q;try{return N()}finally{y=j}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(N,q){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var j=y;y=N;try{return q()}finally{y=j}},o.unstable_scheduleCallback=function(N,q,j){var vt=o.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?vt+j:vt):j=vt,N){case 1:var xt=-1;break;case 2:xt=250;break;case 5:xt=1073741823;break;case 4:xt=1e4;break;default:xt=5e3}return xt=j+xt,N={id:g++,callback:q,priorityLevel:N,startTime:j,expirationTime:xt,sortIndex:-1},j>vt?(N.sortIndex=j,t(p,N),i(m)===null&&N===i(p)&&(R?(B(z),z=-1):R=!0,rt(V,j-vt))):(N.sortIndex=xt,t(m,N),b||x||(b=!0,F||(F=!0,et()))),N},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(N){var q=y;return function(){var j=y;y=q;try{return N.apply(this,arguments)}finally{y=j}}}})($f)),$f}var xg;function Ry(){return xg||(xg=1,Jf.exports=Ay()),Jf.exports}var th={exports:{}},Rn={};var Eg;function Cy(){if(Eg)return Rn;Eg=1;var o=Ed();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Rn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},Rn.flushSync=function(m){var p=h.T,g=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=g,s.d.f()}},Rn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Rn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Rn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,x=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:y,fetchPriority:x}):g==="script"&&s.d.X(m,{crossOrigin:_,integrity:y,fetchPriority:x,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Rn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Rn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Rn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Rn.requestFormReset=function(m){s.d.r(m)},Rn.unstable_batchedUpdates=function(m,p){return m(p)},Rn.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},Rn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Rn.version="19.2.6",Rn}var Tg;function wy(){if(Tg)return th.exports;Tg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),th.exports=Cy(),th.exports}var bg;function Dy(){if(bg)return Uo;bg=1;var o=Ry(),t=Ed(),i=wy();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===r)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=f;else{for(var v=!1,T=u.child;T;){if(T===a){v=!0,a=u,r=f;break}if(T===r){v=!0,r=u,a=f;break}T=T.sibling}if(!v){for(T=f.child;T;){if(T===a){v=!0,a=f,r=u;break}if(T===r){v=!0,r=f,a=u;break}T=T.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,y=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),B=Symbol.for("react.consumer"),O=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function et(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var lt=Symbol.for("react.client.reference");function ft(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===lt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case S:return"Profiler";case M:return"StrictMode";case V:return"Suspense";case F:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case O:return e.displayName||"Context";case B:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:ft(e.type)||"Memo";case Z:n=e._payload,e=e._init;try{return ft(e(n))}catch{}}return null}var rt=Array.isArray,N=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j={pending:!1,data:null,method:null,action:null},vt=[],xt=-1;function L(e){return{current:e}}function nt(e){0>xt||(e.current=vt[xt],vt[xt]=null,xt--)}function yt(e,n){xt++,vt[xt]=e.current,e.current=n}var bt=L(null),Nt=L(null),it=L(null),ct=L(null);function wt(e,n){switch(yt(it,n),yt(Nt,e),yt(bt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?V_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=V_(n),e=k_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}nt(bt),yt(bt,e)}function It(){nt(bt),nt(Nt),nt(it)}function kt(e){e.memoizedState!==null&&yt(ct,e);var n=bt.current,a=k_(n,e.type);n!==a&&(yt(Nt,e),yt(bt,a))}function de(e){Nt.current===e&&(nt(bt),nt(Nt)),ct.current===e&&(nt(ct),Ro._currentValue=j)}var an,I;function Ae(e){if(an===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);an=n&&n[1]||"",I=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+an+e+I}var ne=!1;function $t(e,n){if(!e||ne)return"";ne=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(ot){var tt=ot}Reflect.construct(e,[],mt)}else{try{mt.call()}catch(ot){tt=ot}e.call(mt.prototype)}}else{try{throw Error()}catch(ot){tt=ot}(mt=e())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(ot){if(ot&&tt&&typeof ot.stack=="string")return[ot.stack,tt.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),v=f[0],T=f[1];if(v&&T){var P=v.split(`
`),Q=T.split(`
`);for(u=r=0;r<P.length&&!P[r].includes("DetermineComponentFrameRoot");)r++;for(;u<Q.length&&!Q[u].includes("DetermineComponentFrameRoot");)u++;if(r===P.length||u===Q.length)for(r=P.length-1,u=Q.length-1;1<=r&&0<=u&&P[r]!==Q[u];)u--;for(;1<=r&&0<=u;r--,u--)if(P[r]!==Q[u]){if(r!==1||u!==1)do if(r--,u--,0>u||P[r]!==Q[u]){var ht=`
`+P[r].replace(" at new "," at ");return e.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",e.displayName)),ht}while(1<=r&&0<=u);break}}}finally{ne=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ae(a):""}function Xt(e,n){switch(e.tag){case 26:case 27:case 5:return Ae(e.type);case 16:return Ae("Lazy");case 13:return e.child!==n&&n!==null?Ae("Suspense Fallback"):Ae("Suspense");case 19:return Ae("SuspenseList");case 0:case 15:return $t(e.type,!1);case 11:return $t(e.type.render,!1);case 1:return $t(e.type,!0);case 31:return Ae("Activity");default:return""}}function Ge(e){try{var n="",a=null;do n+=Xt(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Vt=Object.prototype.hasOwnProperty,ae=o.unstable_scheduleCallback,Ke=o.unstable_cancelCallback,Ze=o.unstable_shouldYield,U=o.unstable_requestPaint,E=o.unstable_now,J=o.unstable_getCurrentPriorityLevel,dt=o.unstable_ImmediatePriority,St=o.unstable_UserBlockingPriority,ut=o.unstable_NormalPriority,jt=o.unstable_LowPriority,At=o.unstable_IdlePriority,Yt=o.log,qt=o.unstable_setDisableYieldValue,Et=null,Rt=null;function Zt(e){if(typeof Yt=="function"&&qt(e),Rt&&typeof Rt.setStrictMode=="function")try{Rt.setStrictMode(Et,e)}catch{}}var Pt=Math.clz32?Math.clz32:k,Dt=Math.log,re=Math.LN2;function k(e){return e>>>=0,e===0?32:31-(Dt(e)/re|0)|0}var Tt=256,Ct=262144,zt=4194304;function Mt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function _t(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var u=0,f=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var T=r&134217727;return T!==0?(r=T&~f,r!==0?u=Mt(r):(v&=T,v!==0?u=Mt(v):a||(a=T&~e,a!==0&&(u=Mt(a))))):(T=r&~f,T!==0?u=Mt(T):v!==0?u=Mt(v):a||(a=r&~e,a!==0&&(u=Mt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Bt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ie(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ne(){var e=zt;return zt<<=1,(zt&62914560)===0&&(zt=4194304),e}function Ee(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Dn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ni(e,n,a,r,u,f){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,P=e.expirationTimes,Q=e.hiddenUpdates;for(a=v&~a;0<a;){var ht=31-Pt(a),mt=1<<ht;T[ht]=0,P[ht]=-1;var tt=Q[ht];if(tt!==null)for(Q[ht]=null,ht=0;ht<tt.length;ht++){var ot=tt[ht];ot!==null&&(ot.lane&=-536870913)}a&=~mt}r!==0&&Hr(e,r,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(v&~n))}function Hr(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-Pt(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function Ti(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-Pt(a),u=1<<r;u&n|e[r]&n&&(e[r]|=n),a&=~u}}function Cs(e,n){var a=n&-n;return a=(a&42)!==0?1:ws(a),(a&(e.suspendedLanes|n))!==0?0:a}function ws(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ds(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Wa(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:hg(e.type))}function Gr(e,n){var a=q.p;try{return q.p=e,n()}finally{q.p=a}}var Xn=Math.random().toString(36).slice(2),sn="__reactFiber$"+Xn,yn="__reactProps$"+Xn,ca="__reactContainer$"+Xn,Vr="__reactEvents$"+Xn,kc="__reactListeners$"+Xn,Xc="__reactHandles$"+Xn,jo="__reactResources$"+Xn,Ya="__reactMarker$"+Xn;function A(e){delete e[sn],delete e[yn],delete e[Vr],delete e[kc],delete e[Xc]}function X(e){var n=e[sn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[ca]||a[sn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=K_(e);e!==null;){if(a=e[sn])return a;e=K_(e)}return n}e=a,a=e.parentNode}return null}function at(e){if(e=e[sn]||e[ca]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function st(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Y(e){var n=e[jo];return n||(n=e[jo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function gt(e){e[Ya]=!0}var Ut=new Set,Ht={};function Ot(e,n){Kt(e,n),Kt(e+"Capture",n)}function Kt(e,n){for(Ht[e]=n,e=0;e<n.length;e++)Ut.add(n[e])}var ee=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Qt={},pe={};function Ue(e){return Vt.call(pe,e)?!0:Vt.call(Qt,e)?!1:ee.test(e)?pe[e]=!0:(Qt[e]=!0,!1)}function Ve(e,n,a){if(Ue(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Le(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function me(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+r)}}function Gt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Xe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Te(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Mn(e){if(!e._valueTracker){var n=Xe(e)?"checked":"value";e._valueTracker=Te(e,n,""+e[n])}}function zi(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=Xe(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}function gn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var qa=/[\n"\\]/g;function Se(e){return e.replace(qa,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function An(e,n,a,r,u,f,v,T){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Gt(n)):e.value!==""+Gt(n)&&(e.value=""+Gt(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?fn(e,v,Gt(n)):a!=null?fn(e,v,Gt(a)):r!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+Gt(T):e.removeAttribute("name")}function Un(e,n,a,r,u,f,v,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Mn(e);return}a=a!=null?""+Gt(a):"",n=n!=null?""+Gt(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=T?e.checked:!!r,e.defaultChecked=!!r,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),Mn(e)}function fn(e,n,a){n==="number"&&gn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function tn(e,n,a,r){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&r&&(e[a].defaultSelected=!0)}else{for(a=""+Gt(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,r&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Us(e,n,a){if(n!=null&&(n=""+Gt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Gt(a):""}function bi(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(rt(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=Gt(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),Mn(e)}function Ls(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Sv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Fd(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||Sv.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Hd(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&Fd(e,u,r)}else for(var f in n)n.hasOwnProperty(f)&&Fd(e,f,n[f])}function Wc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Mv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Zo(e){return Mv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ii(){}var Yc=null;function qc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ns=null,Os=null;function Gd(e){var n=at(e);if(n&&(e=n.stateNode)){var a=e[yn]||null;t:switch(e=n.stateNode,n.type){case"input":if(An(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Se(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var u=r[yn]||null;if(!u)throw Error(s(90));An(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&zi(r)}break t;case"textarea":Us(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&tn(e,!!a.multiple,n,!1)}}}var jc=!1;function Vd(e,n,a){if(jc)return e(n,a);jc=!0;try{var r=e(n);return r}finally{if(jc=!1,(Ns!==null||Os!==null)&&(zl(),Ns&&(n=Ns,e=Os,Os=Ns=null,Gd(n),e)))for(n=0;n<e.length;n++)Gd(e[n])}}function kr(e,n){var a=e.stateNode;if(a===null)return null;var r=a[yn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Bi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zc=!1;if(Bi)try{var Xr={};Object.defineProperty(Xr,"passive",{get:function(){Zc=!0}}),window.addEventListener("test",Xr,Xr),window.removeEventListener("test",Xr,Xr)}catch{Zc=!1}var ua=null,Kc=null,Ko=null;function kd(){if(Ko)return Ko;var e,n=Kc,a=n.length,r,u="value"in ua?ua.value:ua.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var v=a-e;for(r=1;r<=v&&n[a-r]===u[f-r];r++);return Ko=u.slice(e,1<r?1-r:void 0)}function Qo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Jo(){return!0}function Xd(){return!1}function Pn(e){function n(a,r,u,f,v){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Jo:Xd,this.isPropagationStopped=Xd,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Jo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Jo)},persist:function(){},isPersistent:Jo}),n}var ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$o=Pn(ja),Wr=_({},ja,{view:0,detail:0}),xv=Pn(Wr),Qc,Jc,Yr,tl=_({},Wr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Yr&&(Yr&&e.type==="mousemove"?(Qc=e.screenX-Yr.screenX,Jc=e.screenY-Yr.screenY):Jc=Qc=0,Yr=e),Qc)},movementY:function(e){return"movementY"in e?e.movementY:Jc}}),Wd=Pn(tl),Ev=_({},tl,{dataTransfer:0}),Tv=Pn(Ev),bv=_({},Wr,{relatedTarget:0}),$c=Pn(bv),Av=_({},ja,{animationName:0,elapsedTime:0,pseudoElement:0}),Rv=Pn(Av),Cv=_({},ja,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),wv=Pn(Cv),Dv=_({},ja,{data:0}),Yd=Pn(Dv),Uv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ov(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Nv[e])?!!n[e]:!1}function tu(){return Ov}var Pv=_({},Wr,{key:function(e){if(e.key){var n=Uv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Qo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Lv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tu,charCode:function(e){return e.type==="keypress"?Qo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zv=Pn(Pv),Iv=_({},tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qd=Pn(Iv),Bv=_({},Wr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tu}),Fv=Pn(Bv),Hv=_({},ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gv=Pn(Hv),Vv=_({},tl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),kv=Pn(Vv),Xv=_({},ja,{newState:0,oldState:0}),Wv=Pn(Xv),Yv=[9,13,27,32],eu=Bi&&"CompositionEvent"in window,qr=null;Bi&&"documentMode"in document&&(qr=document.documentMode);var qv=Bi&&"TextEvent"in window&&!qr,jd=Bi&&(!eu||qr&&8<qr&&11>=qr),Zd=" ",Kd=!1;function Qd(e,n){switch(e){case"keyup":return Yv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ps=!1;function jv(e,n){switch(e){case"compositionend":return Jd(n);case"keypress":return n.which!==32?null:(Kd=!0,Zd);case"textInput":return e=n.data,e===Zd&&Kd?null:e;default:return null}}function Zv(e,n){if(Ps)return e==="compositionend"||!eu&&Qd(e,n)?(e=kd(),Ko=Kc=ua=null,Ps=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return jd&&n.locale!=="ko"?null:n.data;default:return null}}var Kv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $d(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Kv[e.type]:n==="textarea"}function tp(e,n,a,r){Ns?Os?Os.push(r):Os=[r]:Ns=r,n=kl(n,"onChange"),0<n.length&&(a=new $o("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var jr=null,Zr=null;function Qv(e){z_(e,0)}function el(e){var n=st(e);if(zi(n))return e}function ep(e,n){if(e==="change")return n}var np=!1;if(Bi){var nu;if(Bi){var iu="oninput"in document;if(!iu){var ip=document.createElement("div");ip.setAttribute("oninput","return;"),iu=typeof ip.oninput=="function"}nu=iu}else nu=!1;np=nu&&(!document.documentMode||9<document.documentMode)}function ap(){jr&&(jr.detachEvent("onpropertychange",sp),Zr=jr=null)}function sp(e){if(e.propertyName==="value"&&el(Zr)){var n=[];tp(n,Zr,e,qc(e)),Vd(Qv,n)}}function Jv(e,n,a){e==="focusin"?(ap(),jr=n,Zr=a,jr.attachEvent("onpropertychange",sp)):e==="focusout"&&ap()}function $v(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return el(Zr)}function tS(e,n){if(e==="click")return el(n)}function eS(e,n){if(e==="input"||e==="change")return el(n)}function nS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Wn=typeof Object.is=="function"?Object.is:nS;function Kr(e,n){if(Wn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!Vt.call(n,u)||!Wn(e[u],n[u]))return!1}return!0}function rp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function op(e,n){var a=rp(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=rp(a)}}function lp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?lp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function cp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=gn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=gn(e.document)}return n}function au(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var iS=Bi&&"documentMode"in document&&11>=document.documentMode,zs=null,su=null,Qr=null,ru=!1;function up(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ru||zs==null||zs!==gn(r)||(r=zs,"selectionStart"in r&&au(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Qr&&Kr(Qr,r)||(Qr=r,r=kl(su,"onSelect"),0<r.length&&(n=new $o("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=zs)))}function Za(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Is={animationend:Za("Animation","AnimationEnd"),animationiteration:Za("Animation","AnimationIteration"),animationstart:Za("Animation","AnimationStart"),transitionrun:Za("Transition","TransitionRun"),transitionstart:Za("Transition","TransitionStart"),transitioncancel:Za("Transition","TransitionCancel"),transitionend:Za("Transition","TransitionEnd")},ou={},fp={};Bi&&(fp=document.createElement("div").style,"AnimationEvent"in window||(delete Is.animationend.animation,delete Is.animationiteration.animation,delete Is.animationstart.animation),"TransitionEvent"in window||delete Is.transitionend.transition);function Ka(e){if(ou[e])return ou[e];if(!Is[e])return e;var n=Is[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in fp)return ou[e]=n[a];return e}var hp=Ka("animationend"),dp=Ka("animationiteration"),pp=Ka("animationstart"),aS=Ka("transitionrun"),sS=Ka("transitionstart"),rS=Ka("transitioncancel"),mp=Ka("transitionend"),_p=new Map,lu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");lu.push("scrollEnd");function pi(e,n){_p.set(e,n),Ot(n,[e])}var nl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ii=[],Bs=0,cu=0;function il(){for(var e=Bs,n=cu=Bs=0;n<e;){var a=ii[n];ii[n++]=null;var r=ii[n];ii[n++]=null;var u=ii[n];ii[n++]=null;var f=ii[n];if(ii[n++]=null,r!==null&&u!==null){var v=r.pending;v===null?u.next=u:(u.next=v.next,v.next=u),r.pending=u}f!==0&&gp(a,u,f)}}function al(e,n,a,r){ii[Bs++]=e,ii[Bs++]=n,ii[Bs++]=a,ii[Bs++]=r,cu|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function uu(e,n,a,r){return al(e,n,a,r),sl(e)}function Qa(e,n){return al(e,null,null,n),sl(e)}function gp(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Pt(a),e=f.hiddenUpdates,r=e[u],r===null?e[u]=[n]:r.push(n),n.lane=a|536870912),f):null}function sl(e){if(50<yo)throw yo=0,yf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Fs={};function oS(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(e,n,a,r){return new oS(e,n,a,r)}function fu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fi(e,n){var a=e.alternate;return a===null?(a=Yn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function vp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function rl(e,n,a,r,u,f){var v=0;if(r=e,typeof e=="function")fu(e)&&(v=1);else if(typeof e=="string")v=hy(e,a,bt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case w:return e=Yn(31,a,n,u),e.elementType=w,e.lanes=f,e;case R:return Ja(a.children,u,f,n);case M:v=8,u|=24;break;case S:return e=Yn(12,a,n,u|2),e.elementType=S,e.lanes=f,e;case V:return e=Yn(13,a,n,u),e.elementType=V,e.lanes=f,e;case F:return e=Yn(19,a,n,u),e.elementType=F,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case O:v=10;break t;case B:v=9;break t;case D:v=11;break t;case z:v=14;break t;case Z:v=16,r=null;break t}v=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=Yn(v,a,n,u),n.elementType=e,n.type=r,n.lanes=f,n}function Ja(e,n,a,r){return e=Yn(7,e,r,n),e.lanes=a,e}function hu(e,n,a){return e=Yn(6,e,null,n),e.lanes=a,e}function Sp(e){var n=Yn(18,null,null,0);return n.stateNode=e,n}function du(e,n,a){return n=Yn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var yp=new WeakMap;function ai(e,n){if(typeof e=="object"&&e!==null){var a=yp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Ge(n)},yp.set(e,n),n)}return{value:e,source:n,stack:Ge(n)}}var Hs=[],Gs=0,ol=null,Jr=0,si=[],ri=0,fa=null,Ai=1,Ri="";function Hi(e,n){Hs[Gs++]=Jr,Hs[Gs++]=ol,ol=e,Jr=n}function Mp(e,n,a){si[ri++]=Ai,si[ri++]=Ri,si[ri++]=fa,fa=e;var r=Ai;e=Ri;var u=32-Pt(r)-1;r&=~(1<<u),a+=1;var f=32-Pt(n)+u;if(30<f){var v=u-u%5;f=(r&(1<<v)-1).toString(32),r>>=v,u-=v,Ai=1<<32-Pt(n)+u|a<<u|r,Ri=f+e}else Ai=1<<f|a<<u|r,Ri=e}function pu(e){e.return!==null&&(Hi(e,1),Mp(e,1,0))}function mu(e){for(;e===ol;)ol=Hs[--Gs],Hs[Gs]=null,Jr=Hs[--Gs],Hs[Gs]=null;for(;e===fa;)fa=si[--ri],si[ri]=null,Ri=si[--ri],si[ri]=null,Ai=si[--ri],si[ri]=null}function xp(e,n){si[ri++]=Ai,si[ri++]=Ri,si[ri++]=fa,Ai=n.id,Ri=n.overflow,fa=e}var xn=null,We=null,xe=!1,ha=null,oi=!1,_u=Error(s(519));function da(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw $r(ai(n,e)),_u}function Ep(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[sn]=e,n[yn]=r,a){case"dialog":ge("cancel",n),ge("close",n);break;case"iframe":case"object":case"embed":ge("load",n);break;case"video":case"audio":for(a=0;a<xo.length;a++)ge(xo[a],n);break;case"source":ge("error",n);break;case"img":case"image":case"link":ge("error",n),ge("load",n);break;case"details":ge("toggle",n);break;case"input":ge("invalid",n),Un(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":ge("invalid",n);break;case"textarea":ge("invalid",n),bi(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||H_(n.textContent,a)?(r.popover!=null&&(ge("beforetoggle",n),ge("toggle",n)),r.onScroll!=null&&ge("scroll",n),r.onScrollEnd!=null&&ge("scrollend",n),r.onClick!=null&&(n.onclick=Ii),n=!0):n=!1,n||da(e,!0)}function Tp(e){for(xn=e.return;xn;)switch(xn.tag){case 5:case 31:case 13:oi=!1;return;case 27:case 3:oi=!0;return;default:xn=xn.return}}function Vs(e){if(e!==xn)return!1;if(!xe)return Tp(e),xe=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Pf(e.type,e.memoizedProps)),a=!a),a&&We&&da(e),Tp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));We=Z_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));We=Z_(e)}else n===27?(n=We,Ra(e.type)?(e=Hf,Hf=null,We=e):We=n):We=xn?ci(e.stateNode.nextSibling):null;return!0}function $a(){We=xn=null,xe=!1}function gu(){var e=ha;return e!==null&&(Fn===null?Fn=e:Fn.push.apply(Fn,e),ha=null),e}function $r(e){ha===null?ha=[e]:ha.push(e)}var vu=L(null),ts=null,Gi=null;function pa(e,n,a){yt(vu,n._currentValue),n._currentValue=a}function Vi(e){e._currentValue=vu.current,nt(vu)}function Su(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function yu(e,n,a,r){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var v=u.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=u;for(var P=0;P<n.length;P++)if(T.context===n[P]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),Su(f.return,a,e),r||(v=null);break t}f=T.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(s(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),Su(v,a,e),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===e){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function ks(e,n,a,r){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var T=u.type;Wn(u.pendingProps.value,v.value)||(e!==null?e.push(T):e=[T])}}else if(u===ct.current){if(v=u.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Ro):e=[Ro])}u=u.return}e!==null&&yu(n,e,a,r),n.flags|=262144}function ll(e){for(e=e.firstContext;e!==null;){if(!Wn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function es(e){ts=e,Gi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function En(e){return bp(ts,e)}function cl(e,n){return ts===null&&es(e),bp(e,n)}function bp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Gi===null){if(e===null)throw Error(s(308));Gi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Gi=Gi.next=n;return a}var lS=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},cS=o.unstable_scheduleCallback,uS=o.unstable_NormalPriority,rn={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Mu(){return{controller:new lS,data:new Map,refCount:0}}function to(e){e.refCount--,e.refCount===0&&cS(uS,function(){e.controller.abort()})}var eo=null,xu=0,Xs=0,Ws=null;function fS(e,n){if(eo===null){var a=eo=[];xu=0,Xs=Af(),Ws={status:"pending",value:void 0,then:function(r){a.push(r)}}}return xu++,n.then(Ap,Ap),n}function Ap(){if(--xu===0&&eo!==null){Ws!==null&&(Ws.status="fulfilled");var e=eo;eo=null,Xs=0,Ws=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function hS(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var Rp=N.S;N.S=function(e,n){u_=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&fS(e,n),Rp!==null&&Rp(e,n)};var ns=L(null);function Eu(){var e=ns.current;return e!==null?e:ke.pooledCache}function ul(e,n){n===null?yt(ns,ns.current):yt(ns,n.pool)}function Cp(){var e=Eu();return e===null?null:{parent:rn._currentValue,pool:e}}var Ys=Error(s(460)),Tu=Error(s(474)),fl=Error(s(542)),hl={then:function(){}};function wp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Dp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Ii,Ii),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Lp(e),e;default:if(typeof n.status=="string")n.then(Ii,Ii);else{if(e=ke,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Lp(e),e}throw as=n,Ys}}function is(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(as=a,Ys):a}}var as=null;function Up(){if(as===null)throw Error(s(459));var e=as;return as=null,e}function Lp(e){if(e===Ys||e===fl)throw Error(s(483))}var qs=null,no=0;function dl(e){var n=no;return no+=1,qs===null&&(qs=[]),Dp(qs,e,n)}function io(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function pl(e,n){throw n.$$typeof===y?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Np(e){function n(W,H){if(e){var K=W.deletions;K===null?(W.deletions=[H],W.flags|=16):K.push(H)}}function a(W,H){if(!e)return null;for(;H!==null;)n(W,H),H=H.sibling;return null}function r(W){for(var H=new Map;W!==null;)W.key!==null?H.set(W.key,W):H.set(W.index,W),W=W.sibling;return H}function u(W,H){return W=Fi(W,H),W.index=0,W.sibling=null,W}function f(W,H,K){return W.index=K,e?(K=W.alternate,K!==null?(K=K.index,K<H?(W.flags|=67108866,H):K):(W.flags|=67108866,H)):(W.flags|=1048576,H)}function v(W){return e&&W.alternate===null&&(W.flags|=67108866),W}function T(W,H,K,pt){return H===null||H.tag!==6?(H=hu(K,W.mode,pt),H.return=W,H):(H=u(H,K),H.return=W,H)}function P(W,H,K,pt){var Jt=K.type;return Jt===R?ht(W,H,K.props.children,pt,K.key):H!==null&&(H.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===Z&&is(Jt)===H.type)?(H=u(H,K.props),io(H,K),H.return=W,H):(H=rl(K.type,K.key,K.props,null,W.mode,pt),io(H,K),H.return=W,H)}function Q(W,H,K,pt){return H===null||H.tag!==4||H.stateNode.containerInfo!==K.containerInfo||H.stateNode.implementation!==K.implementation?(H=du(K,W.mode,pt),H.return=W,H):(H=u(H,K.children||[]),H.return=W,H)}function ht(W,H,K,pt,Jt){return H===null||H.tag!==7?(H=Ja(K,W.mode,pt,Jt),H.return=W,H):(H=u(H,K),H.return=W,H)}function mt(W,H,K){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=hu(""+H,W.mode,K),H.return=W,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case x:return K=rl(H.type,H.key,H.props,null,W.mode,K),io(K,H),K.return=W,K;case b:return H=du(H,W.mode,K),H.return=W,H;case Z:return H=is(H),mt(W,H,K)}if(rt(H)||et(H))return H=Ja(H,W.mode,K,null),H.return=W,H;if(typeof H.then=="function")return mt(W,dl(H),K);if(H.$$typeof===O)return mt(W,cl(W,H),K);pl(W,H)}return null}function tt(W,H,K,pt){var Jt=H!==null?H.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Jt!==null?null:T(W,H,""+K,pt);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case x:return K.key===Jt?P(W,H,K,pt):null;case b:return K.key===Jt?Q(W,H,K,pt):null;case Z:return K=is(K),tt(W,H,K,pt)}if(rt(K)||et(K))return Jt!==null?null:ht(W,H,K,pt,null);if(typeof K.then=="function")return tt(W,H,dl(K),pt);if(K.$$typeof===O)return tt(W,H,cl(W,K),pt);pl(W,K)}return null}function ot(W,H,K,pt,Jt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return W=W.get(K)||null,T(H,W,""+pt,Jt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case x:return W=W.get(pt.key===null?K:pt.key)||null,P(H,W,pt,Jt);case b:return W=W.get(pt.key===null?K:pt.key)||null,Q(H,W,pt,Jt);case Z:return pt=is(pt),ot(W,H,K,pt,Jt)}if(rt(pt)||et(pt))return W=W.get(K)||null,ht(H,W,pt,Jt,null);if(typeof pt.then=="function")return ot(W,H,K,dl(pt),Jt);if(pt.$$typeof===O)return ot(W,H,K,cl(H,pt),Jt);pl(H,pt)}return null}function Ft(W,H,K,pt){for(var Jt=null,Re=null,Wt=H,ue=H=0,Me=null;Wt!==null&&ue<K.length;ue++){Wt.index>ue?(Me=Wt,Wt=null):Me=Wt.sibling;var Ce=tt(W,Wt,K[ue],pt);if(Ce===null){Wt===null&&(Wt=Me);break}e&&Wt&&Ce.alternate===null&&n(W,Wt),H=f(Ce,H,ue),Re===null?Jt=Ce:Re.sibling=Ce,Re=Ce,Wt=Me}if(ue===K.length)return a(W,Wt),xe&&Hi(W,ue),Jt;if(Wt===null){for(;ue<K.length;ue++)Wt=mt(W,K[ue],pt),Wt!==null&&(H=f(Wt,H,ue),Re===null?Jt=Wt:Re.sibling=Wt,Re=Wt);return xe&&Hi(W,ue),Jt}for(Wt=r(Wt);ue<K.length;ue++)Me=ot(Wt,W,ue,K[ue],pt),Me!==null&&(e&&Me.alternate!==null&&Wt.delete(Me.key===null?ue:Me.key),H=f(Me,H,ue),Re===null?Jt=Me:Re.sibling=Me,Re=Me);return e&&Wt.forEach(function(La){return n(W,La)}),xe&&Hi(W,ue),Jt}function te(W,H,K,pt){if(K==null)throw Error(s(151));for(var Jt=null,Re=null,Wt=H,ue=H=0,Me=null,Ce=K.next();Wt!==null&&!Ce.done;ue++,Ce=K.next()){Wt.index>ue?(Me=Wt,Wt=null):Me=Wt.sibling;var La=tt(W,Wt,Ce.value,pt);if(La===null){Wt===null&&(Wt=Me);break}e&&Wt&&La.alternate===null&&n(W,Wt),H=f(La,H,ue),Re===null?Jt=La:Re.sibling=La,Re=La,Wt=Me}if(Ce.done)return a(W,Wt),xe&&Hi(W,ue),Jt;if(Wt===null){for(;!Ce.done;ue++,Ce=K.next())Ce=mt(W,Ce.value,pt),Ce!==null&&(H=f(Ce,H,ue),Re===null?Jt=Ce:Re.sibling=Ce,Re=Ce);return xe&&Hi(W,ue),Jt}for(Wt=r(Wt);!Ce.done;ue++,Ce=K.next())Ce=ot(Wt,W,ue,Ce.value,pt),Ce!==null&&(e&&Ce.alternate!==null&&Wt.delete(Ce.key===null?ue:Ce.key),H=f(Ce,H,ue),Re===null?Jt=Ce:Re.sibling=Ce,Re=Ce);return e&&Wt.forEach(function(Ey){return n(W,Ey)}),xe&&Hi(W,ue),Jt}function Be(W,H,K,pt){if(typeof K=="object"&&K!==null&&K.type===R&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case x:t:{for(var Jt=K.key;H!==null;){if(H.key===Jt){if(Jt=K.type,Jt===R){if(H.tag===7){a(W,H.sibling),pt=u(H,K.props.children),pt.return=W,W=pt;break t}}else if(H.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===Z&&is(Jt)===H.type){a(W,H.sibling),pt=u(H,K.props),io(pt,K),pt.return=W,W=pt;break t}a(W,H);break}else n(W,H);H=H.sibling}K.type===R?(pt=Ja(K.props.children,W.mode,pt,K.key),pt.return=W,W=pt):(pt=rl(K.type,K.key,K.props,null,W.mode,pt),io(pt,K),pt.return=W,W=pt)}return v(W);case b:t:{for(Jt=K.key;H!==null;){if(H.key===Jt)if(H.tag===4&&H.stateNode.containerInfo===K.containerInfo&&H.stateNode.implementation===K.implementation){a(W,H.sibling),pt=u(H,K.children||[]),pt.return=W,W=pt;break t}else{a(W,H);break}else n(W,H);H=H.sibling}pt=du(K,W.mode,pt),pt.return=W,W=pt}return v(W);case Z:return K=is(K),Be(W,H,K,pt)}if(rt(K))return Ft(W,H,K,pt);if(et(K)){if(Jt=et(K),typeof Jt!="function")throw Error(s(150));return K=Jt.call(K),te(W,H,K,pt)}if(typeof K.then=="function")return Be(W,H,dl(K),pt);if(K.$$typeof===O)return Be(W,H,cl(W,K),pt);pl(W,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,H!==null&&H.tag===6?(a(W,H.sibling),pt=u(H,K),pt.return=W,W=pt):(a(W,H),pt=hu(K,W.mode,pt),pt.return=W,W=pt),v(W)):a(W,H)}return function(W,H,K,pt){try{no=0;var Jt=Be(W,H,K,pt);return qs=null,Jt}catch(Wt){if(Wt===Ys||Wt===fl)throw Wt;var Re=Yn(29,Wt,null,W.mode);return Re.lanes=pt,Re.return=W,Re}}}var ss=Np(!0),Op=Np(!1),ma=!1;function bu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Au(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function _a(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ga(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(De&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=sl(e),gp(e,null,a),n}return al(e,r,n,a),sl(e)}function ao(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Ti(e,a)}}function Ru(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Cu=!1;function so(){if(Cu){var e=Ws;if(e!==null)throw e}}function ro(e,n,a,r){Cu=!1;var u=e.updateQueue;ma=!1;var f=u.firstBaseUpdate,v=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var P=T,Q=P.next;P.next=null,v===null?f=Q:v.next=Q,v=P;var ht=e.alternate;ht!==null&&(ht=ht.updateQueue,T=ht.lastBaseUpdate,T!==v&&(T===null?ht.firstBaseUpdate=Q:T.next=Q,ht.lastBaseUpdate=P))}if(f!==null){var mt=u.baseState;v=0,ht=Q=P=null,T=f;do{var tt=T.lane&-536870913,ot=tt!==T.lane;if(ot?(ye&tt)===tt:(r&tt)===tt){tt!==0&&tt===Xs&&(Cu=!0),ht!==null&&(ht=ht.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var Ft=e,te=T;tt=n;var Be=a;switch(te.tag){case 1:if(Ft=te.payload,typeof Ft=="function"){mt=Ft.call(Be,mt,tt);break t}mt=Ft;break t;case 3:Ft.flags=Ft.flags&-65537|128;case 0:if(Ft=te.payload,tt=typeof Ft=="function"?Ft.call(Be,mt,tt):Ft,tt==null)break t;mt=_({},mt,tt);break t;case 2:ma=!0}}tt=T.callback,tt!==null&&(e.flags|=64,ot&&(e.flags|=8192),ot=u.callbacks,ot===null?u.callbacks=[tt]:ot.push(tt))}else ot={lane:tt,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ht===null?(Q=ht=ot,P=mt):ht=ht.next=ot,v|=tt;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;ot=T,T=ot.next,ot.next=null,u.lastBaseUpdate=ot,u.shared.pending=null}}while(!0);ht===null&&(P=mt),u.baseState=P,u.firstBaseUpdate=Q,u.lastBaseUpdate=ht,f===null&&(u.shared.lanes=0),xa|=v,e.lanes=v,e.memoizedState=mt}}function Pp(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function zp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Pp(a[e],n)}var js=L(null),ml=L(0);function Ip(e,n){e=Qi,yt(ml,e),yt(js,n),Qi=e|n.baseLanes}function wu(){yt(ml,Qi),yt(js,js.current)}function Du(){Qi=ml.current,nt(js),nt(ml)}var qn=L(null),li=null;function va(e){var n=e.alternate;yt(en,en.current&1),yt(qn,e),li===null&&(n===null||js.current!==null||n.memoizedState!==null)&&(li=e)}function Uu(e){yt(en,en.current),yt(qn,e),li===null&&(li=e)}function Bp(e){e.tag===22?(yt(en,en.current),yt(qn,e),li===null&&(li=e)):Sa()}function Sa(){yt(en,en.current),yt(qn,qn.current)}function jn(e){nt(qn),li===e&&(li=null),nt(en)}var en=L(0);function _l(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Bf(a)||Ff(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ki=0,le=null,ze=null,on=null,gl=!1,Zs=!1,rs=!1,vl=0,oo=0,Ks=null,dS=0;function Qe(){throw Error(s(321))}function Lu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Wn(e[a],n[a]))return!1;return!0}function Nu(e,n,a,r,u,f){return ki=f,le=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,N.H=e===null||e.memoizedState===null?Mm:ju,rs=!1,f=a(r,u),rs=!1,Zs&&(f=Hp(n,a,r,u)),Fp(e),f}function Fp(e){N.H=uo;var n=ze!==null&&ze.next!==null;if(ki=0,on=ze=le=null,gl=!1,oo=0,Ks=null,n)throw Error(s(300));e===null||ln||(e=e.dependencies,e!==null&&ll(e)&&(ln=!0))}function Hp(e,n,a,r){le=e;var u=0;do{if(Zs&&(Ks=null),oo=0,Zs=!1,25<=u)throw Error(s(301));if(u+=1,on=ze=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}N.H=xm,f=n(a,r)}while(Zs);return f}function pS(){var e=N.H,n=e.useState()[0];return n=typeof n.then=="function"?lo(n):n,e=e.useState()[0],(ze!==null?ze.memoizedState:null)!==e&&(le.flags|=1024),n}function Ou(){var e=vl!==0;return vl=0,e}function Pu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function zu(e){if(gl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}gl=!1}ki=0,on=ze=le=null,Zs=!1,oo=vl=0,Ks=null}function Ln(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?le.memoizedState=on=e:on=on.next=e,on}function nn(){if(ze===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var n=on===null?le.memoizedState:on.next;if(n!==null)on=n,ze=e;else{if(e===null)throw le.alternate===null?Error(s(467)):Error(s(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},on===null?le.memoizedState=on=e:on=on.next=e}return on}function Sl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function lo(e){var n=oo;return oo+=1,Ks===null&&(Ks=[]),e=Dp(Ks,e,n),n=le,(on===null?n.memoizedState:on.next)===null&&(n=n.alternate,N.H=n===null||n.memoizedState===null?Mm:ju),e}function yl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return lo(e);if(e.$$typeof===O)return En(e)}throw Error(s(438,String(e)))}function Iu(e){var n=null,a=le.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=le.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Sl(),le.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=C;return n.index++,a}function Xi(e,n){return typeof n=="function"?n(e):n}function Ml(e){var n=nn();return Bu(n,ze,e)}function Bu(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=e.baseQueue,f=r.pending;if(f!==null){if(u!==null){var v=u.next;u.next=f.next,f.next=v}n.baseQueue=u=f,r.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var T=v=null,P=null,Q=n,ht=!1;do{var mt=Q.lane&-536870913;if(mt!==Q.lane?(ye&mt)===mt:(ki&mt)===mt){var tt=Q.revertLane;if(tt===0)P!==null&&(P=P.next={lane:0,revertLane:0,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),mt===Xs&&(ht=!0);else if((ki&tt)===tt){Q=Q.next,tt===Xs&&(ht=!0);continue}else mt={lane:0,revertLane:Q.revertLane,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},P===null?(T=P=mt,v=f):P=P.next=mt,le.lanes|=tt,xa|=tt;mt=Q.action,rs&&a(f,mt),f=Q.hasEagerState?Q.eagerState:a(f,mt)}else tt={lane:mt,revertLane:Q.revertLane,gesture:Q.gesture,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},P===null?(T=P=tt,v=f):P=P.next=tt,le.lanes|=mt,xa|=mt;Q=Q.next}while(Q!==null&&Q!==n);if(P===null?v=f:P.next=T,!Wn(f,e.memoizedState)&&(ln=!0,ht&&(a=Ws,a!==null)))throw a;e.memoizedState=f,e.baseState=v,e.baseQueue=P,r.lastRenderedState=f}return u===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Fu(e){var n=nn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do f=e(f,v.action),v=v.next;while(v!==u);Wn(f,n.memoizedState)||(ln=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function Gp(e,n,a){var r=le,u=nn(),f=xe;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!Wn((ze||u).memoizedState,a);if(v&&(u.memoizedState=a,ln=!0),u=u.queue,Vu(Xp.bind(null,r,u,e),[e]),u.getSnapshot!==n||v||on!==null&&on.memoizedState.tag&1){if(r.flags|=2048,Qs(9,{destroy:void 0},kp.bind(null,r,u,a,n),null),ke===null)throw Error(s(349));f||(ki&127)!==0||Vp(r,n,a)}return a}function Vp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=le.updateQueue,n===null?(n=Sl(),le.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function kp(e,n,a,r){n.value=a,n.getSnapshot=r,Wp(n)&&Yp(e)}function Xp(e,n,a){return a(function(){Wp(n)&&Yp(e)})}function Wp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Wn(e,a)}catch{return!0}}function Yp(e){var n=Qa(e,2);n!==null&&Hn(n,e,2)}function Hu(e){var n=Ln();if(typeof e=="function"){var a=e;if(e=a(),rs){Zt(!0);try{a()}finally{Zt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:e},n}function qp(e,n,a,r){return e.baseState=a,Bu(e,ze,typeof r=="function"?r:Xi)}function mS(e,n,a,r,u){if(Tl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};N.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,jp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function jp(e,n){var a=n.action,r=n.payload,u=e.state;if(n.isTransition){var f=N.T,v={};N.T=v;try{var T=a(u,r),P=N.S;P!==null&&P(v,T),Zp(e,n,T)}catch(Q){Gu(e,n,Q)}finally{f!==null&&v.types!==null&&(f.types=v.types),N.T=f}}else try{f=a(u,r),Zp(e,n,f)}catch(Q){Gu(e,n,Q)}}function Zp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Kp(e,n,r)},function(r){return Gu(e,n,r)}):Kp(e,n,a)}function Kp(e,n,a){n.status="fulfilled",n.value=a,Qp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,jp(e,a)))}function Gu(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Qp(n),n=n.next;while(n!==r)}e.action=null}function Qp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Jp(e,n){return n}function $p(e,n){if(xe){var a=ke.formState;if(a!==null){t:{var r=le;if(xe){if(We){e:{for(var u=We,f=oi;u.nodeType!==8;){if(!f){u=null;break e}if(u=ci(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){We=ci(u.nextSibling),r=u.data==="F!";break t}}da(r)}r=!1}r&&(n=a[0])}}return a=Ln(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jp,lastRenderedState:n},a.queue=r,a=vm.bind(null,le,r),r.dispatch=a,r=Hu(!1),f=qu.bind(null,le,!1,r.queue),r=Ln(),u={state:n,dispatch:null,action:e,pending:null},r.queue=u,a=mS.bind(null,le,u,f,a),u.dispatch=a,r.memoizedState=e,[n,a,!1]}function tm(e){var n=nn();return em(n,ze,e)}function em(e,n,a){if(n=Bu(e,n,Jp)[0],e=Ml(Xi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=lo(n)}catch(v){throw v===Ys?fl:v}else r=n;n=nn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(le.flags|=2048,Qs(9,{destroy:void 0},_S.bind(null,u,a),null)),[r,f,e]}function _S(e,n){e.action=n}function nm(e){var n=nn(),a=ze;if(a!==null)return em(n,a,e);nn(),n=n.memoizedState,a=nn();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function Qs(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=le.updateQueue,n===null&&(n=Sl(),le.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function im(){return nn().memoizedState}function xl(e,n,a,r){var u=Ln();le.flags|=e,u.memoizedState=Qs(1|n,{destroy:void 0},a,r===void 0?null:r)}function El(e,n,a,r){var u=nn();r=r===void 0?null:r;var f=u.memoizedState.inst;ze!==null&&r!==null&&Lu(r,ze.memoizedState.deps)?u.memoizedState=Qs(n,f,a,r):(le.flags|=e,u.memoizedState=Qs(1|n,f,a,r))}function am(e,n){xl(8390656,8,e,n)}function Vu(e,n){El(2048,8,e,n)}function gS(e){le.flags|=4;var n=le.updateQueue;if(n===null)n=Sl(),le.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function sm(e){var n=nn().memoizedState;return gS({ref:n,nextImpl:e}),function(){if((De&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function rm(e,n){return El(4,2,e,n)}function om(e,n){return El(4,4,e,n)}function lm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function cm(e,n,a){a=a!=null?a.concat([e]):null,El(4,4,lm.bind(null,n,e),a)}function ku(){}function um(e,n){var a=nn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Lu(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function fm(e,n){var a=nn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Lu(n,r[1]))return r[0];if(r=e(),rs){Zt(!0);try{e()}finally{Zt(!1)}}return a.memoizedState=[r,n],r}function Xu(e,n,a){return a===void 0||(ki&1073741824)!==0&&(ye&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=h_(),le.lanes|=e,xa|=e,a)}function hm(e,n,a,r){return Wn(a,n)?a:js.current!==null?(e=Xu(e,a,r),Wn(e,n)||(ln=!0),e):(ki&42)===0||(ki&1073741824)!==0&&(ye&261930)===0?(ln=!0,e.memoizedState=a):(e=h_(),le.lanes|=e,xa|=e,n)}function dm(e,n,a,r,u){var f=q.p;q.p=f!==0&&8>f?f:8;var v=N.T,T={};N.T=T,qu(e,!1,n,a);try{var P=u(),Q=N.S;if(Q!==null&&Q(T,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var ht=hS(P,r);co(e,n,ht,Qn(e))}else co(e,n,r,Qn(e))}catch(mt){co(e,n,{then:function(){},status:"rejected",reason:mt},Qn())}finally{q.p=f,v!==null&&T.types!==null&&(v.types=T.types),N.T=v}}function vS(){}function Wu(e,n,a,r){if(e.tag!==5)throw Error(s(476));var u=pm(e).queue;dm(e,u,n,j,a===null?vS:function(){return mm(e),a(r)})}function pm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:j,baseState:j,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:j},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function mm(e){var n=pm(e);n.next===null&&(n=e.alternate.memoizedState),co(e,n.next.queue,{},Qn())}function Yu(){return En(Ro)}function _m(){return nn().memoizedState}function gm(){return nn().memoizedState}function SS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Qn();e=_a(a);var r=ga(n,e,a);r!==null&&(Hn(r,n,a),ao(r,n,a)),n={cache:Mu()},e.payload=n;return}n=n.return}}function yS(e,n,a){var r=Qn();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Tl(e)?Sm(n,a):(a=uu(e,n,a,r),a!==null&&(Hn(a,e,r),ym(a,n,r)))}function vm(e,n,a){var r=Qn();co(e,n,a,r)}function co(e,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Tl(e))Sm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,T=f(v,a);if(u.hasEagerState=!0,u.eagerState=T,Wn(T,v))return al(e,n,u,0),ke===null&&il(),!1}catch{}if(a=uu(e,n,u,r),a!==null)return Hn(a,e,r),ym(a,n,r),!0}return!1}function qu(e,n,a,r){if(r={lane:2,revertLane:Af(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Tl(e)){if(n)throw Error(s(479))}else n=uu(e,a,r,2),n!==null&&Hn(n,e,2)}function Tl(e){var n=e.alternate;return e===le||n!==null&&n===le}function Sm(e,n){Zs=gl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function ym(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Ti(e,a)}}var uo={readContext:En,use:yl,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe};uo.useEffectEvent=Qe;var Mm={readContext:En,use:yl,useCallback:function(e,n){return Ln().memoizedState=[e,n===void 0?null:n],e},useContext:En,useEffect:am,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,xl(4194308,4,lm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return xl(4194308,4,e,n)},useInsertionEffect:function(e,n){xl(4,2,e,n)},useMemo:function(e,n){var a=Ln();n=n===void 0?null:n;var r=e();if(rs){Zt(!0);try{e()}finally{Zt(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=Ln();if(a!==void 0){var u=a(n);if(rs){Zt(!0);try{a(n)}finally{Zt(!1)}}}else u=n;return r.memoizedState=r.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},r.queue=e,e=e.dispatch=yS.bind(null,le,e),[r.memoizedState,e]},useRef:function(e){var n=Ln();return e={current:e},n.memoizedState=e},useState:function(e){e=Hu(e);var n=e.queue,a=vm.bind(null,le,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:ku,useDeferredValue:function(e,n){var a=Ln();return Xu(a,e,n)},useTransition:function(){var e=Hu(!1);return e=dm.bind(null,le,e.queue,!0,!1),Ln().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=le,u=Ln();if(xe){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),ke===null)throw Error(s(349));(ye&127)!==0||Vp(r,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,am(Xp.bind(null,r,f,e),[e]),r.flags|=2048,Qs(9,{destroy:void 0},kp.bind(null,r,f,a,n),null),a},useId:function(){var e=Ln(),n=ke.identifierPrefix;if(xe){var a=Ri,r=Ai;a=(r&~(1<<32-Pt(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=vl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=dS++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Yu,useFormState:$p,useActionState:$p,useOptimistic:function(e){var n=Ln();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=qu.bind(null,le,!0,a),a.dispatch=n,[e,n]},useMemoCache:Iu,useCacheRefresh:function(){return Ln().memoizedState=SS.bind(null,le)},useEffectEvent:function(e){var n=Ln(),a={impl:e};return n.memoizedState=a,function(){if((De&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},ju={readContext:En,use:yl,useCallback:um,useContext:En,useEffect:Vu,useImperativeHandle:cm,useInsertionEffect:rm,useLayoutEffect:om,useMemo:fm,useReducer:Ml,useRef:im,useState:function(){return Ml(Xi)},useDebugValue:ku,useDeferredValue:function(e,n){var a=nn();return hm(a,ze.memoizedState,e,n)},useTransition:function(){var e=Ml(Xi)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:lo(e),n]},useSyncExternalStore:Gp,useId:_m,useHostTransitionStatus:Yu,useFormState:tm,useActionState:tm,useOptimistic:function(e,n){var a=nn();return qp(a,ze,e,n)},useMemoCache:Iu,useCacheRefresh:gm};ju.useEffectEvent=sm;var xm={readContext:En,use:yl,useCallback:um,useContext:En,useEffect:Vu,useImperativeHandle:cm,useInsertionEffect:rm,useLayoutEffect:om,useMemo:fm,useReducer:Fu,useRef:im,useState:function(){return Fu(Xi)},useDebugValue:ku,useDeferredValue:function(e,n){var a=nn();return ze===null?Xu(a,e,n):hm(a,ze.memoizedState,e,n)},useTransition:function(){var e=Fu(Xi)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:lo(e),n]},useSyncExternalStore:Gp,useId:_m,useHostTransitionStatus:Yu,useFormState:nm,useActionState:nm,useOptimistic:function(e,n){var a=nn();return ze!==null?qp(a,ze,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Iu,useCacheRefresh:gm};xm.useEffectEvent=sm;function Zu(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ku={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=Qn(),u=_a(r);u.payload=n,a!=null&&(u.callback=a),n=ga(e,u,r),n!==null&&(Hn(n,e,r),ao(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=Qn(),u=_a(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ga(e,u,r),n!==null&&(Hn(n,e,r),ao(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Qn(),r=_a(a);r.tag=2,n!=null&&(r.callback=n),n=ga(e,r,a),n!==null&&(Hn(n,e,a),ao(n,e,a))}};function Em(e,n,a,r,u,f,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,v):n.prototype&&n.prototype.isPureReactComponent?!Kr(a,r)||!Kr(u,f):!0}function Tm(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&Ku.enqueueReplaceState(n,n.state,null)}function os(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function bm(e){nl(e)}function Am(e){console.error(e)}function Rm(e){nl(e)}function bl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Cm(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Qu(e,n,a){return a=_a(a),a.tag=3,a.payload={element:null},a.callback=function(){bl(e,n)},a}function wm(e){return e=_a(e),e.tag=3,e}function Dm(e,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;e.payload=function(){return u(f)},e.callback=function(){Cm(n,a,r)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){Cm(n,a,r),typeof u!="function"&&(Ea===null?Ea=new Set([this]):Ea.add(this));var T=r.stack;this.componentDidCatch(r.value,{componentStack:T!==null?T:""})})}function MS(e,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&ks(n,a,u,!0),a=qn.current,a!==null){switch(a.tag){case 31:case 13:return li===null?Il():a.alternate===null&&Je===0&&(Je=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===hl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Ef(e,r,u)),!1;case 22:return a.flags|=65536,r===hl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Ef(e,r,u)),!1}throw Error(s(435,a.tag))}return Ef(e,r,u),Il(),!1}if(xe)return n=qn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==_u&&(e=Error(s(422),{cause:r}),$r(ai(e,a)))):(r!==_u&&(n=Error(s(423),{cause:r}),$r(ai(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,r=ai(r,a),u=Qu(e.stateNode,r,u),Ru(e,u),Je!==4&&(Je=2)),!1;var f=Error(s(520),{cause:r});if(f=ai(f,a),So===null?So=[f]:So.push(f),Je!==4&&(Je=2),n===null)return!0;r=ai(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Qu(a.stateNode,r,e),Ru(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ea===null||!Ea.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=wm(u),Dm(u,e,a,r),Ru(a,u),!1}a=a.return}while(a!==null);return!1}var Ju=Error(s(461)),ln=!1;function Tn(e,n,a,r){n.child=e===null?Op(n,null,a,r):ss(n,e.child,a,r)}function Um(e,n,a,r,u){a=a.render;var f=n.ref;if("ref"in r){var v={};for(var T in r)T!=="ref"&&(v[T]=r[T])}else v=r;return es(n),r=Nu(e,n,a,v,f,u),T=Ou(),e!==null&&!ln?(Pu(e,n,u),Wi(e,n,u)):(xe&&T&&pu(n),n.flags|=1,Tn(e,n,r,u),n.child)}function Lm(e,n,a,r,u){if(e===null){var f=a.type;return typeof f=="function"&&!fu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Nm(e,n,f,r,u)):(e=rl(a.type,null,r,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!of(e,u)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:Kr,a(v,r)&&e.ref===n.ref)return Wi(e,n,u)}return n.flags|=1,e=Fi(f,r),e.ref=n.ref,e.return=n,n.child=e}function Nm(e,n,a,r,u){if(e!==null){var f=e.memoizedProps;if(Kr(f,r)&&e.ref===n.ref)if(ln=!1,n.pendingProps=r=f,of(e,u))(e.flags&131072)!==0&&(ln=!0);else return n.lanes=e.lanes,Wi(e,n,u)}return $u(e,n,a,r,u)}function Om(e,n,a,r){var u=r.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(r=n.child=e.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~f}else r=0,n.child=null;return Pm(e,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&ul(n,f!==null?f.cachePool:null),f!==null?Ip(n,f):wu(),Bp(n);else return r=n.lanes=536870912,Pm(e,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(ul(n,f.cachePool),Ip(n,f),Sa(),n.memoizedState=null):(e!==null&&ul(n,null),wu(),Sa());return Tn(e,n,u,a),n.child}function fo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Pm(e,n,a,r,u){var f=Eu();return f=f===null?null:{parent:rn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&ul(n,null),wu(),Bp(n),e!==null&&ks(e,n,r,!0),n.childLanes=u,null}function Al(e,n){return n=Cl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function zm(e,n,a){return ss(n,e.child,null,a),e=Al(n,n.pendingProps),e.flags|=2,jn(n),n.memoizedState=null,e}function xS(e,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(xe){if(r.mode==="hidden")return e=Al(n,r),n.lanes=536870912,fo(null,e);if(Uu(n),(e=We)?(e=j_(e,oi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:fa!==null?{id:Ai,overflow:Ri}:null,retryLane:536870912,hydrationErrors:null},a=Sp(e),a.return=n,n.child=a,xn=n,We=null)):e=null,e===null)throw da(n);return n.lanes=536870912,null}return Al(n,r)}var f=e.memoizedState;if(f!==null){var v=f.dehydrated;if(Uu(n),u)if(n.flags&256)n.flags&=-257,n=zm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(ln||ks(e,n,a,!1),u=(a&e.childLanes)!==0,ln||u){if(r=ke,r!==null&&(v=Cs(r,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,Qa(e,v),Hn(r,e,v),Ju;Il(),n=zm(e,n,a)}else e=f.treeContext,We=ci(v.nextSibling),xn=n,xe=!0,ha=null,oi=!1,e!==null&&xp(n,e),n=Al(n,r),n.flags|=4096;return n}return e=Fi(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Rl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function $u(e,n,a,r,u){return es(n),a=Nu(e,n,a,r,void 0,u),r=Ou(),e!==null&&!ln?(Pu(e,n,u),Wi(e,n,u)):(xe&&r&&pu(n),n.flags|=1,Tn(e,n,a,u),n.child)}function Im(e,n,a,r,u,f){return es(n),n.updateQueue=null,a=Hp(n,r,a,u),Fp(e),r=Ou(),e!==null&&!ln?(Pu(e,n,f),Wi(e,n,f)):(xe&&r&&pu(n),n.flags|=1,Tn(e,n,a,f),n.child)}function Bm(e,n,a,r,u){if(es(n),n.stateNode===null){var f=Fs,v=a.contextType;typeof v=="object"&&v!==null&&(f=En(v)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Ku,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},bu(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?En(v):Fs,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Zu(n,a,v,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&Ku.enqueueReplaceState(f,f.state,null),ro(n,r,f,u),so(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var T=n.memoizedProps,P=os(a,T);f.props=P;var Q=f.context,ht=a.contextType;v=Fs,typeof ht=="object"&&ht!==null&&(v=En(ht));var mt=a.getDerivedStateFromProps;ht=typeof mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ht||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||Q!==v)&&Tm(n,f,r,v),ma=!1;var tt=n.memoizedState;f.state=tt,ro(n,r,f,u),so(),Q=n.memoizedState,T||tt!==Q||ma?(typeof mt=="function"&&(Zu(n,a,mt,r),Q=n.memoizedState),(P=ma||Em(n,a,P,r,tt,Q,v))?(ht||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=Q),f.props=r,f.state=Q,f.context=v,r=P):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Au(e,n),v=n.memoizedProps,ht=os(a,v),f.props=ht,mt=n.pendingProps,tt=f.context,Q=a.contextType,P=Fs,typeof Q=="object"&&Q!==null&&(P=En(Q)),T=a.getDerivedStateFromProps,(Q=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==mt||tt!==P)&&Tm(n,f,r,P),ma=!1,tt=n.memoizedState,f.state=tt,ro(n,r,f,u),so();var ot=n.memoizedState;v!==mt||tt!==ot||ma||e!==null&&e.dependencies!==null&&ll(e.dependencies)?(typeof T=="function"&&(Zu(n,a,T,r),ot=n.memoizedState),(ht=ma||Em(n,a,ht,r,tt,ot,P)||e!==null&&e.dependencies!==null&&ll(e.dependencies))?(Q||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,ot,P),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,ot,P)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&tt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&tt===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ot),f.props=r,f.state=ot,f.context=P,r=ht):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&tt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&tt===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,Rl(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=ss(n,e.child,null,u),n.child=ss(n,null,a,u)):Tn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=Wi(e,n,u),e}function Fm(e,n,a,r){return $a(),n.flags|=256,Tn(e,n,a,r),n.child}var tf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ef(e){return{baseLanes:e,cachePool:Cp()}}function nf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Kn),e}function Hm(e,n,a){var r=n.pendingProps,u=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=e!==null&&e.memoizedState===null?!1:(en.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(xe){if(u?va(n):Sa(),(e=We)?(e=j_(e,oi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:fa!==null?{id:Ai,overflow:Ri}:null,retryLane:536870912,hydrationErrors:null},a=Sp(e),a.return=n,n.child=a,xn=n,We=null)):e=null,e===null)throw da(n);return Ff(e)?n.lanes=32:n.lanes=536870912,null}var T=r.children;return r=r.fallback,u?(Sa(),u=n.mode,T=Cl({mode:"hidden",children:T},u),r=Ja(r,u,a,null),T.return=n,r.return=n,T.sibling=r,n.child=T,r=n.child,r.memoizedState=ef(a),r.childLanes=nf(e,v,a),n.memoizedState=tf,fo(null,r)):(va(n),af(n,T))}var P=e.memoizedState;if(P!==null&&(T=P.dehydrated,T!==null)){if(f)n.flags&256?(va(n),n.flags&=-257,n=sf(e,n,a)):n.memoizedState!==null?(Sa(),n.child=e.child,n.flags|=128,n=null):(Sa(),T=r.fallback,u=n.mode,r=Cl({mode:"visible",children:r.children},u),T=Ja(T,u,a,null),T.flags|=2,r.return=n,T.return=n,r.sibling=T,n.child=r,ss(n,e.child,null,a),r=n.child,r.memoizedState=ef(a),r.childLanes=nf(e,v,a),n.memoizedState=tf,n=fo(null,r));else if(va(n),Ff(T)){if(v=T.nextSibling&&T.nextSibling.dataset,v)var Q=v.dgst;v=Q,r=Error(s(419)),r.stack="",r.digest=v,$r({value:r,source:null,stack:null}),n=sf(e,n,a)}else if(ln||ks(e,n,a,!1),v=(a&e.childLanes)!==0,ln||v){if(v=ke,v!==null&&(r=Cs(v,a),r!==0&&r!==P.retryLane))throw P.retryLane=r,Qa(e,r),Hn(v,e,r),Ju;Bf(T)||Il(),n=sf(e,n,a)}else Bf(T)?(n.flags|=192,n.child=e.child,n=null):(e=P.treeContext,We=ci(T.nextSibling),xn=n,xe=!0,ha=null,oi=!1,e!==null&&xp(n,e),n=af(n,r.children),n.flags|=4096);return n}return u?(Sa(),T=r.fallback,u=n.mode,P=e.child,Q=P.sibling,r=Fi(P,{mode:"hidden",children:r.children}),r.subtreeFlags=P.subtreeFlags&65011712,Q!==null?T=Fi(Q,T):(T=Ja(T,u,a,null),T.flags|=2),T.return=n,r.return=n,r.sibling=T,n.child=r,fo(null,r),r=n.child,T=e.child.memoizedState,T===null?T=ef(a):(u=T.cachePool,u!==null?(P=rn._currentValue,u=u.parent!==P?{parent:P,pool:P}:u):u=Cp(),T={baseLanes:T.baseLanes|a,cachePool:u}),r.memoizedState=T,r.childLanes=nf(e,v,a),n.memoizedState=tf,fo(e.child,r)):(va(n),a=e.child,e=a.sibling,a=Fi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function af(e,n){return n=Cl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Cl(e,n){return e=Yn(22,e,null,n),e.lanes=0,e}function sf(e,n,a){return ss(n,e.child,null,a),e=af(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Gm(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Su(e.return,n,a)}function rf(e,n,a,r,u,f){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=r,v.tail=a,v.tailMode=u,v.treeForkCount=f)}function Vm(e,n,a){var r=n.pendingProps,u=r.revealOrder,f=r.tail;r=r.children;var v=en.current,T=(v&2)!==0;if(T?(v=v&1|2,n.flags|=128):v&=1,yt(en,v),Tn(e,n,r,a),r=xe?Jr:0,!T&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Gm(e,a,n);else if(e.tag===19)Gm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&_l(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),rf(n,!1,u,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&_l(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}rf(n,!0,a,null,f,r);break;case"together":rf(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function Wi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),xa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(ks(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Fi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Fi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function of(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&ll(e)))}function ES(e,n,a){switch(n.tag){case 3:wt(n,n.stateNode.containerInfo),pa(n,rn,e.memoizedState.cache),$a();break;case 27:case 5:kt(n);break;case 4:wt(n,n.stateNode.containerInfo);break;case 10:pa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Uu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(va(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Hm(e,n,a):(va(n),e=Wi(e,n,a),e!==null?e.sibling:null);va(n);break;case 19:var u=(e.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(ks(e,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return Vm(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),yt(en,en.current),r)break;return null;case 22:return n.lanes=0,Om(e,n,a,n.pendingProps);case 24:pa(n,rn,e.memoizedState.cache)}return Wi(e,n,a)}function km(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)ln=!0;else{if(!of(e,a)&&(n.flags&128)===0)return ln=!1,ES(e,n,a);ln=(e.flags&131072)!==0}else ln=!1,xe&&(n.flags&1048576)!==0&&Mp(n,Jr,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(e=is(n.elementType),n.type=e,typeof e=="function")fu(e)?(r=os(e,r),n.tag=1,n=Bm(null,n,e,r,a)):(n.tag=0,n=$u(null,n,e,r,a));else{if(e!=null){var u=e.$$typeof;if(u===D){n.tag=11,n=Um(null,n,e,r,a);break t}else if(u===z){n.tag=14,n=Lm(null,n,e,r,a);break t}}throw n=ft(e)||e,Error(s(306,n,""))}}return n;case 0:return $u(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=os(r,n.pendingProps),Bm(e,n,r,u,a);case 3:t:{if(wt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;u=f.element,Au(e,n),ro(n,r,null,a);var v=n.memoizedState;if(r=v.cache,pa(n,rn,r),r!==f.cache&&yu(n,[rn],a,!0),so(),r=v.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Fm(e,n,r,a);break t}else if(r!==u){u=ai(Error(s(424)),n),$r(u),n=Fm(e,n,r,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,We=ci(e.firstChild),xn=n,xe=!0,ha=null,oi=!0,a=Op(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if($a(),r===u){n=Wi(e,n,a);break t}Tn(e,n,r,a)}n=n.child}return n;case 26:return Rl(e,n),e===null?(a=tg(n.type,null,n.pendingProps,null))?n.memoizedState=a:xe||(a=n.type,e=n.pendingProps,r=Xl(it.current).createElement(a),r[sn]=n,r[yn]=e,bn(r,a,e),gt(r),n.stateNode=r):n.memoizedState=tg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return kt(n),e===null&&xe&&(r=n.stateNode=Q_(n.type,n.pendingProps,it.current),xn=n,oi=!0,u=We,Ra(n.type)?(Hf=u,We=ci(r.firstChild)):We=u),Tn(e,n,n.pendingProps.children,a),Rl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&xe&&((u=r=We)&&(r=$S(r,n.type,n.pendingProps,oi),r!==null?(n.stateNode=r,xn=n,We=ci(r.firstChild),oi=!1,u=!0):u=!1),u||da(n)),kt(n),u=n.type,f=n.pendingProps,v=e!==null?e.memoizedProps:null,r=f.children,Pf(u,f)?r=null:v!==null&&Pf(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=Nu(e,n,pS,null,null,a),Ro._currentValue=u),Rl(e,n),Tn(e,n,r,a),n.child;case 6:return e===null&&xe&&((e=a=We)&&(a=ty(a,n.pendingProps,oi),a!==null?(n.stateNode=a,xn=n,We=null,e=!0):e=!1),e||da(n)),null;case 13:return Hm(e,n,a);case 4:return wt(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=ss(n,null,r,a):Tn(e,n,r,a),n.child;case 11:return Um(e,n,n.type,n.pendingProps,a);case 7:return Tn(e,n,n.pendingProps,a),n.child;case 8:return Tn(e,n,n.pendingProps.children,a),n.child;case 12:return Tn(e,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,pa(n,n.type,r.value),Tn(e,n,r.children,a),n.child;case 9:return u=n.type._context,r=n.pendingProps.children,es(n),u=En(u),r=r(u),n.flags|=1,Tn(e,n,r,a),n.child;case 14:return Lm(e,n,n.type,n.pendingProps,a);case 15:return Nm(e,n,n.type,n.pendingProps,a);case 19:return Vm(e,n,a);case 31:return xS(e,n,a);case 22:return Om(e,n,a,n.pendingProps);case 24:return es(n),r=En(rn),e===null?(u=Eu(),u===null&&(u=ke,f=Mu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:r,cache:u},bu(n),pa(n,rn,u)):((e.lanes&a)!==0&&(Au(e,n),ro(n,null,null,a),so()),u=e.memoizedState,f=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),pa(n,rn,r)):(r=f.cache,pa(n,rn,r),r!==u.cache&&yu(n,[rn],a,!0))),Tn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Yi(e){e.flags|=4}function lf(e,n,a,r,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(__())e.flags|=8192;else throw as=hl,Tu}else e.flags&=-16777217}function Xm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!sg(n))if(__())e.flags|=8192;else throw as=hl,Tu}function wl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ne():536870912,e.lanes|=n,er|=n)}function ho(e,n){if(!xe)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ye(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&65011712,r|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function TS(e,n,a){var r=n.pendingProps;switch(mu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(n),null;case 1:return Ye(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Vi(rn),It(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Vs(n)?Yi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,gu())),Ye(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(Yi(n),f!==null?(Ye(n),Xm(n,f)):(Ye(n),lf(n,u,null,r,a))):f?f!==e.memoizedState?(Yi(n),Ye(n),Xm(n,f)):(Ye(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&Yi(n),Ye(n),lf(n,u,e,r,a)),null;case 27:if(de(n),a=it.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Yi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ye(n),null}e=bt.current,Vs(n)?Ep(n):(e=Q_(u,r,a),n.stateNode=e,Yi(n))}return Ye(n),null;case 5:if(de(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Yi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ye(n),null}if(f=bt.current,Vs(n))Ep(n);else{var v=Xl(it.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?v.createElement("select",{is:r.is}):v.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?v.createElement(u,{is:r.is}):v.createElement(u)}}f[sn]=n,f[yn]=r;t:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break t;for(;v.sibling===null;){if(v.return===null||v.return===n)break t;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;t:switch(bn(f,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&Yi(n)}}return Ye(n),lf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&Yi(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=it.current,Vs(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,u=xn,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}e[sn]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||H_(e.nodeValue,a)),e||da(n,!0)}else e=Xl(e).createTextNode(r),e[sn]=n,n.stateNode=e}return Ye(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=Vs(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[sn]=n}else $a(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ye(n),e=!1}else a=gu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(jn(n),n):(jn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ye(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Vs(n),r!==null&&r.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[sn]=n}else $a(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ye(n),u=!1}else u=gu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(jn(n),n):(jn(n),null)}return jn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==u&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),wl(n,n.updateQueue),Ye(n),null);case 4:return It(),e===null&&Df(n.stateNode.containerInfo),Ye(n),null;case 10:return Vi(n.type),Ye(n),null;case 19:if(nt(en),r=n.memoizedState,r===null)return Ye(n),null;if(u=(n.flags&128)!==0,f=r.rendering,f===null)if(u)ho(r,!1);else{if(Je!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=_l(e),f!==null){for(n.flags|=128,ho(r,!1),e=f.updateQueue,n.updateQueue=e,wl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)vp(a,e),a=a.sibling;return yt(en,en.current&1|2),xe&&Hi(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&E()>Ol&&(n.flags|=128,u=!0,ho(r,!1),n.lanes=4194304)}else{if(!u)if(e=_l(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,wl(n,e),ho(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!xe)return Ye(n),null}else 2*E()-r.renderingStartTime>Ol&&a!==536870912&&(n.flags|=128,u=!0,ho(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(e=r.last,e!==null?e.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=E(),e.sibling=null,a=en.current,yt(en,u?a&1|2:a&1),xe&&Hi(n,r.treeForkCount),e):(Ye(n),null);case 22:case 23:return jn(n),Du(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Ye(n),n.subtreeFlags&6&&(n.flags|=8192)):Ye(n),a=n.updateQueue,a!==null&&wl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&nt(ns),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Vi(rn),Ye(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function bS(e,n){switch(mu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Vi(rn),It(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return de(n),null;case 31:if(n.memoizedState!==null){if(jn(n),n.alternate===null)throw Error(s(340));$a()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(jn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));$a()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return nt(en),null;case 4:return It(),null;case 10:return Vi(n.type),null;case 22:case 23:return jn(n),Du(),e!==null&&nt(ns),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Vi(rn),null;case 25:return null;default:return null}}function Wm(e,n){switch(mu(n),n.tag){case 3:Vi(rn),It();break;case 26:case 27:case 5:de(n);break;case 4:It();break;case 31:n.memoizedState!==null&&jn(n);break;case 13:jn(n);break;case 19:nt(en);break;case 10:Vi(n.type);break;case 22:case 23:jn(n),Du(),e!==null&&nt(ns);break;case 24:Vi(rn)}}function po(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&e)===e){r=void 0;var f=a.create,v=a.inst;r=f(),v.destroy=r}a=a.next}while(a!==u)}}catch(T){Pe(n,n.return,T)}}function ya(e,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&e)===e){var v=r.inst,T=v.destroy;if(T!==void 0){v.destroy=void 0,u=n;var P=a,Q=T;try{Q()}catch(ht){Pe(u,P,ht)}}}r=r.next}while(r!==f)}}catch(ht){Pe(n,n.return,ht)}}function Ym(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{zp(n,a)}catch(r){Pe(e,e.return,r)}}}function qm(e,n,a){a.props=os(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){Pe(e,n,r)}}function mo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(u){Pe(e,n,u)}}function Ci(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){Pe(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Pe(e,n,u)}else a.current=null}function jm(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){Pe(e,e.return,u)}}function cf(e,n,a){try{var r=e.stateNode;qS(r,e.type,a,n),r[yn]=n}catch(u){Pe(e,e.return,u)}}function Zm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ra(e.type)||e.tag===4}function uf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Zm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ra(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ff(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ii));else if(r!==4&&(r===27&&Ra(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(ff(e,n,a),e=e.sibling;e!==null;)ff(e,n,a),e=e.sibling}function Dl(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(r!==4&&(r===27&&Ra(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Dl(e,n,a),e=e.sibling;e!==null;)Dl(e,n,a),e=e.sibling}function Km(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);bn(n,r,a),n[sn]=e,n[yn]=a}catch(f){Pe(e,e.return,f)}}var qi=!1,cn=!1,hf=!1,Qm=typeof WeakSet=="function"?WeakSet:Set,vn=null;function AS(e,n){if(e=e.containerInfo,Nf=Ql,e=cp(e),au(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var u=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var v=0,T=-1,P=-1,Q=0,ht=0,mt=e,tt=null;e:for(;;){for(var ot;mt!==a||u!==0&&mt.nodeType!==3||(T=v+u),mt!==f||r!==0&&mt.nodeType!==3||(P=v+r),mt.nodeType===3&&(v+=mt.nodeValue.length),(ot=mt.firstChild)!==null;)tt=mt,mt=ot;for(;;){if(mt===e)break e;if(tt===a&&++Q===u&&(T=v),tt===f&&++ht===r&&(P=v),(ot=mt.nextSibling)!==null)break;mt=tt,tt=mt.parentNode}mt=ot}a=T===-1||P===-1?null:{start:T,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Of={focusedElem:e,selectionRange:a},Ql=!1,vn=n;vn!==null;)if(n=vn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,vn=e;else for(;vn!==null;){switch(n=vn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Ft=os(a.type,u);e=r.getSnapshotBeforeUpdate(Ft,f),r.__reactInternalSnapshotBeforeUpdate=e}catch(te){Pe(a,a.return,te)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)If(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":If(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,vn=e;break}vn=n.return}}function Jm(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Zi(e,a),r&4&&po(5,a);break;case 1:if(Zi(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(v){Pe(a,a.return,v)}else{var u=os(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Pe(a,a.return,v)}}r&64&&Ym(a),r&512&&mo(a,a.return);break;case 3:if(Zi(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{zp(e,n)}catch(v){Pe(a,a.return,v)}}break;case 27:n===null&&r&4&&Km(a);case 26:case 5:Zi(e,a),n===null&&r&4&&jm(a),r&512&&mo(a,a.return);break;case 12:Zi(e,a);break;case 31:Zi(e,a),r&4&&e_(e,a);break;case 13:Zi(e,a),r&4&&n_(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=PS.bind(null,a),ey(e,a))));break;case 22:if(r=a.memoizedState!==null||qi,!r){n=n!==null&&n.memoizedState!==null||cn,u=qi;var f=cn;qi=r,(cn=n)&&!f?Ki(e,a,(a.subtreeFlags&8772)!==0):Zi(e,a),qi=u,cn=f}break;case 30:break;default:Zi(e,a)}}function $m(e){var n=e.alternate;n!==null&&(e.alternate=null,$m(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&A(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var je=null,zn=!1;function ji(e,n,a){for(a=a.child;a!==null;)t_(e,n,a),a=a.sibling}function t_(e,n,a){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(Et,a)}catch{}switch(a.tag){case 26:cn||Ci(a,n),ji(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:cn||Ci(a,n);var r=je,u=zn;Ra(a.type)&&(je=a.stateNode,zn=!1),ji(e,n,a),To(a.stateNode),je=r,zn=u;break;case 5:cn||Ci(a,n);case 6:if(r=je,u=zn,je=null,ji(e,n,a),je=r,zn=u,je!==null)if(zn)try{(je.nodeType===9?je.body:je.nodeName==="HTML"?je.ownerDocument.body:je).removeChild(a.stateNode)}catch(f){Pe(a,n,f)}else try{je.removeChild(a.stateNode)}catch(f){Pe(a,n,f)}break;case 18:je!==null&&(zn?(e=je,Y_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),cr(e)):Y_(je,a.stateNode));break;case 4:r=je,u=zn,je=a.stateNode.containerInfo,zn=!0,ji(e,n,a),je=r,zn=u;break;case 0:case 11:case 14:case 15:ya(2,a,n),cn||ya(4,a,n),ji(e,n,a);break;case 1:cn||(Ci(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&qm(a,n,r)),ji(e,n,a);break;case 21:ji(e,n,a);break;case 22:cn=(r=cn)||a.memoizedState!==null,ji(e,n,a),cn=r;break;default:ji(e,n,a)}}function e_(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{cr(e)}catch(a){Pe(n,n.return,a)}}}function n_(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{cr(e)}catch(a){Pe(n,n.return,a)}}function RS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Qm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Qm),n;default:throw Error(s(435,e.tag))}}function Ul(e,n){var a=RS(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=zS.bind(null,e,r);r.then(u,u)}})}function In(e,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r],f=e,v=n,T=v;t:for(;T!==null;){switch(T.tag){case 27:if(Ra(T.type)){je=T.stateNode,zn=!1;break t}break;case 5:je=T.stateNode,zn=!1;break t;case 3:case 4:je=T.stateNode.containerInfo,zn=!0;break t}T=T.return}if(je===null)throw Error(s(160));t_(f,v,u),je=null,zn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)i_(n,e),n=n.sibling}var mi=null;function i_(e,n){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:In(n,e),Bn(e),r&4&&(ya(3,e,e.return),po(3,e),ya(5,e,e.return));break;case 1:In(n,e),Bn(e),r&512&&(cn||a===null||Ci(a,a.return)),r&64&&qi&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var u=mi;if(In(n,e),Bn(e),r&512&&(cn||a===null||Ci(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){t:{r=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(r){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Ya]||f[sn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(r),u.head.insertBefore(f,u.querySelector("head > title"))),bn(f,r,a),f[sn]=e,gt(f),r=f;break t;case"link":var v=ig("link","href",u).get(r+(a.href||""));if(v){for(var T=0;T<v.length;T++)if(f=v[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(T,1);break e}}f=u.createElement(r),bn(f,r,a),u.head.appendChild(f);break;case"meta":if(v=ig("meta","content",u).get(r+(a.content||""))){for(T=0;T<v.length;T++)if(f=v[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(T,1);break e}}f=u.createElement(r),bn(f,r,a),u.head.appendChild(f);break;default:throw Error(s(468,r))}f[sn]=e,gt(f),r=f}e.stateNode=r}else ag(u,e.type,e.stateNode);else e.stateNode=ng(u,r,e.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?ag(u,e.type,e.stateNode):ng(u,r,e.memoizedProps)):r===null&&e.stateNode!==null&&cf(e,e.memoizedProps,a.memoizedProps)}break;case 27:In(n,e),Bn(e),r&512&&(cn||a===null||Ci(a,a.return)),a!==null&&r&4&&cf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(In(n,e),Bn(e),r&512&&(cn||a===null||Ci(a,a.return)),e.flags&32){u=e.stateNode;try{Ls(u,"")}catch(Ft){Pe(e,e.return,Ft)}}r&4&&e.stateNode!=null&&(u=e.memoizedProps,cf(e,u,a!==null?a.memoizedProps:u)),r&1024&&(hf=!0);break;case 6:if(In(n,e),Bn(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(Ft){Pe(e,e.return,Ft)}}break;case 3:if(ql=null,u=mi,mi=Wl(n.containerInfo),In(n,e),mi=u,Bn(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{cr(n.containerInfo)}catch(Ft){Pe(e,e.return,Ft)}hf&&(hf=!1,a_(e));break;case 4:r=mi,mi=Wl(e.stateNode.containerInfo),In(n,e),Bn(e),mi=r;break;case 12:In(n,e),Bn(e);break;case 31:In(n,e),Bn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Ul(e,r)));break;case 13:In(n,e),Bn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Nl=E()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Ul(e,r)));break;case 22:u=e.memoizedState!==null;var P=a!==null&&a.memoizedState!==null,Q=qi,ht=cn;if(qi=Q||u,cn=ht||P,In(n,e),cn=ht,qi=Q,Bn(e),r&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||P||qi||cn||ls(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){P=a=n;try{if(f=P.stateNode,u)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{T=P.stateNode;var mt=P.memoizedProps.style,tt=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;T.style.display=tt==null||typeof tt=="boolean"?"":(""+tt).trim()}}catch(Ft){Pe(P,P.return,Ft)}}}else if(n.tag===6){if(a===null){P=n;try{P.stateNode.nodeValue=u?"":P.memoizedProps}catch(Ft){Pe(P,P.return,Ft)}}}else if(n.tag===18){if(a===null){P=n;try{var ot=P.stateNode;u?q_(ot,!0):q_(P.stateNode,!1)}catch(Ft){Pe(P,P.return,Ft)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Ul(e,a))));break;case 19:In(n,e),Bn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Ul(e,r)));break;case 30:break;case 21:break;default:In(n,e),Bn(e)}}function Bn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(Zm(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=uf(e);Dl(e,f,u);break;case 5:var v=a.stateNode;a.flags&32&&(Ls(v,""),a.flags&=-33);var T=uf(e);Dl(e,T,v);break;case 3:case 4:var P=a.stateNode.containerInfo,Q=uf(e);ff(e,Q,P);break;default:throw Error(s(161))}}catch(ht){Pe(e,e.return,ht)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function a_(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;a_(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Zi(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Jm(e,n.alternate,n),n=n.sibling}function ls(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ya(4,n,n.return),ls(n);break;case 1:Ci(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&qm(n,n.return,a),ls(n);break;case 27:To(n.stateNode);case 26:case 5:Ci(n,n.return),ls(n);break;case 22:n.memoizedState===null&&ls(n);break;case 30:ls(n);break;default:ls(n)}e=e.sibling}}function Ki(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,u=e,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:Ki(u,f,a),po(4,f);break;case 1:if(Ki(u,f,a),r=f,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(Q){Pe(r,r.return,Q)}if(r=f,u=r.updateQueue,u!==null){var T=r.stateNode;try{var P=u.shared.hiddenCallbacks;if(P!==null)for(u.shared.hiddenCallbacks=null,u=0;u<P.length;u++)Pp(P[u],T)}catch(Q){Pe(r,r.return,Q)}}a&&v&64&&Ym(f),mo(f,f.return);break;case 27:Km(f);case 26:case 5:Ki(u,f,a),a&&r===null&&v&4&&jm(f),mo(f,f.return);break;case 12:Ki(u,f,a);break;case 31:Ki(u,f,a),a&&v&4&&e_(u,f);break;case 13:Ki(u,f,a),a&&v&4&&n_(u,f);break;case 22:f.memoizedState===null&&Ki(u,f,a),mo(f,f.return);break;case 30:break;default:Ki(u,f,a)}n=n.sibling}}function df(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&to(a))}function pf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&to(e))}function _i(e,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)s_(e,n,a,r),n=n.sibling}function s_(e,n,a,r){var u=n.flags;switch(n.tag){case 0:case 11:case 15:_i(e,n,a,r),u&2048&&po(9,n);break;case 1:_i(e,n,a,r);break;case 3:_i(e,n,a,r),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&to(e)));break;case 12:if(u&2048){_i(e,n,a,r),e=n.stateNode;try{var f=n.memoizedProps,v=f.id,T=f.onPostCommit;typeof T=="function"&&T(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(P){Pe(n,n.return,P)}}else _i(e,n,a,r);break;case 31:_i(e,n,a,r);break;case 13:_i(e,n,a,r);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?_i(e,n,a,r):_o(e,n):f._visibility&2?_i(e,n,a,r):(f._visibility|=2,Js(e,n,a,r,(n.subtreeFlags&10256)!==0||!1)),u&2048&&df(v,n);break;case 24:_i(e,n,a,r),u&2048&&pf(n.alternate,n);break;default:_i(e,n,a,r)}}function Js(e,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,v=n,T=a,P=r,Q=v.flags;switch(v.tag){case 0:case 11:case 15:Js(f,v,T,P,u),po(8,v);break;case 23:break;case 22:var ht=v.stateNode;v.memoizedState!==null?ht._visibility&2?Js(f,v,T,P,u):_o(f,v):(ht._visibility|=2,Js(f,v,T,P,u)),u&&Q&2048&&df(v.alternate,v);break;case 24:Js(f,v,T,P,u),u&&Q&2048&&pf(v.alternate,v);break;default:Js(f,v,T,P,u)}n=n.sibling}}function _o(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,u=r.flags;switch(r.tag){case 22:_o(a,r),u&2048&&df(r.alternate,r);break;case 24:_o(a,r),u&2048&&pf(r.alternate,r);break;default:_o(a,r)}n=n.sibling}}var go=8192;function $s(e,n,a){if(e.subtreeFlags&go)for(e=e.child;e!==null;)r_(e,n,a),e=e.sibling}function r_(e,n,a){switch(e.tag){case 26:$s(e,n,a),e.flags&go&&e.memoizedState!==null&&dy(a,mi,e.memoizedState,e.memoizedProps);break;case 5:$s(e,n,a);break;case 3:case 4:var r=mi;mi=Wl(e.stateNode.containerInfo),$s(e,n,a),mi=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=go,go=16777216,$s(e,n,a),go=r):$s(e,n,a));break;default:$s(e,n,a)}}function o_(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function vo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];vn=r,c_(r,e)}o_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)l_(e),e=e.sibling}function l_(e){switch(e.tag){case 0:case 11:case 15:vo(e),e.flags&2048&&ya(9,e,e.return);break;case 3:vo(e);break;case 12:vo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Ll(e)):vo(e);break;default:vo(e)}}function Ll(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];vn=r,c_(r,e)}o_(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ya(8,n,n.return),Ll(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ll(n));break;default:Ll(n)}e=e.sibling}}function c_(e,n){for(;vn!==null;){var a=vn;switch(a.tag){case 0:case 11:case 15:ya(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:to(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,vn=r;else t:for(a=e;vn!==null;){r=vn;var u=r.sibling,f=r.return;if($m(r),r===a){vn=null;break t}if(u!==null){u.return=f,vn=u;break t}vn=f}}}var CS={getCacheForType:function(e){var n=En(rn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return En(rn).controller.signal}},wS=typeof WeakMap=="function"?WeakMap:Map,De=0,ke=null,_e=null,ye=0,Oe=0,Zn=null,Ma=!1,tr=!1,mf=!1,Qi=0,Je=0,xa=0,cs=0,_f=0,Kn=0,er=0,So=null,Fn=null,gf=!1,Nl=0,u_=0,Ol=1/0,Pl=null,Ea=null,hn=0,Ta=null,nr=null,Ji=0,vf=0,Sf=null,f_=null,yo=0,yf=null;function Qn(){return(De&2)!==0&&ye!==0?ye&-ye:N.T!==null?Af():Wa()}function h_(){if(Kn===0)if((ye&536870912)===0||xe){var e=Ct;Ct<<=1,(Ct&3932160)===0&&(Ct=262144),Kn=e}else Kn=536870912;return e=qn.current,e!==null&&(e.flags|=32),Kn}function Hn(e,n,a){(e===ke&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)&&(ir(e,0),ba(e,ye,Kn,!1)),Dn(e,a),((De&2)===0||e!==ke)&&(e===ke&&((De&2)===0&&(cs|=a),Je===4&&ba(e,ye,Kn,!1)),wi(e))}function d_(e,n,a){if((De&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Bt(e,n),u=r?LS(e,n):xf(e,n,!0),f=r;do{if(u===0){tr&&!r&&ba(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!DS(a)){u=xf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;t:{var T=e;u=So;var P=T.current.memoizedState.isDehydrated;if(P&&(ir(T,v).flags|=256),v=xf(T,v,!1),v!==2){if(mf&&!P){T.errorRecoveryDisabledLanes|=f,cs|=f,u=4;break t}f=Fn,Fn=u,f!==null&&(Fn===null?Fn=f:Fn.push.apply(Fn,f))}u=v}if(f=!1,u!==2)continue}}if(u===1){ir(e,0),ba(e,n,0,!0);break}t:{switch(r=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:ba(r,n,Kn,!Ma);break t;case 2:Fn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Nl+300-E(),10<u)){if(ba(r,n,Kn,!Ma),_t(r,0,!0)!==0)break t;Ji=n,r.timeoutHandle=X_(p_.bind(null,r,a,Fn,Pl,gf,n,Kn,cs,er,Ma,f,"Throttled",-0,0),u);break t}p_(r,a,Fn,Pl,gf,n,Kn,cs,er,Ma,f,null,-0,0)}}break}while(!0);wi(e)}function p_(e,n,a,r,u,f,v,T,P,Q,ht,mt,tt,ot){if(e.timeoutHandle=-1,mt=n.subtreeFlags,mt&8192||(mt&16785408)===16785408){mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ii},r_(n,f,mt);var Ft=(f&62914560)===f?Nl-E():(f&4194048)===f?u_-E():0;if(Ft=py(mt,Ft),Ft!==null){Ji=f,e.cancelPendingCommit=Ft(x_.bind(null,e,n,f,a,r,u,v,T,P,ht,mt,null,tt,ot)),ba(e,f,v,!Q);return}}x_(e,n,f,a,r,u,v,T,P)}function DS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],f=u.getSnapshot;u=u.value;try{if(!Wn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ba(e,n,a,r){n&=~_f,n&=~cs,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var u=n;0<u;){var f=31-Pt(u),v=1<<f;r[f]=-1,u&=~v}a!==0&&Hr(e,a,n)}function zl(){return(De&6)===0?(Mo(0),!1):!0}function Mf(){if(_e!==null){if(Oe===0)var e=_e.return;else e=_e,Gi=ts=null,zu(e),qs=null,no=0,e=_e;for(;e!==null;)Wm(e.alternate,e),e=e.return;_e=null}}function ir(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,KS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ji=0,Mf(),ke=e,_e=a=Fi(e.current,null),ye=n,Oe=0,Zn=null,Ma=!1,tr=Bt(e,n),mf=!1,er=Kn=_f=cs=xa=Je=0,Fn=So=null,gf=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var u=31-Pt(r),f=1<<u;n|=e[u],r&=~f}return Qi=n,il(),a}function m_(e,n){le=null,N.H=uo,n===Ys||n===fl?(n=Up(),Oe=3):n===Tu?(n=Up(),Oe=4):Oe=n===Ju?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Zn=n,_e===null&&(Je=1,bl(e,ai(n,e.current)))}function __(){var e=qn.current;return e===null?!0:(ye&4194048)===ye?li===null:(ye&62914560)===ye||(ye&536870912)!==0?e===li:!1}function g_(){var e=N.H;return N.H=uo,e===null?uo:e}function v_(){var e=N.A;return N.A=CS,e}function Il(){Je=4,Ma||(ye&4194048)!==ye&&qn.current!==null||(tr=!0),(xa&134217727)===0&&(cs&134217727)===0||ke===null||ba(ke,ye,Kn,!1)}function xf(e,n,a){var r=De;De|=2;var u=g_(),f=v_();(ke!==e||ye!==n)&&(Pl=null,ir(e,n)),n=!1;var v=Je;t:do try{if(Oe!==0&&_e!==null){var T=_e,P=Zn;switch(Oe){case 8:Mf(),v=6;break t;case 3:case 2:case 9:case 6:qn.current===null&&(n=!0);var Q=Oe;if(Oe=0,Zn=null,ar(e,T,P,Q),a&&tr){v=0;break t}break;default:Q=Oe,Oe=0,Zn=null,ar(e,T,P,Q)}}US(),v=Je;break}catch(ht){m_(e,ht)}while(!0);return n&&e.shellSuspendCounter++,Gi=ts=null,De=r,N.H=u,N.A=f,_e===null&&(ke=null,ye=0,il()),v}function US(){for(;_e!==null;)S_(_e)}function LS(e,n){var a=De;De|=2;var r=g_(),u=v_();ke!==e||ye!==n?(Pl=null,Ol=E()+500,ir(e,n)):tr=Bt(e,n);t:do try{if(Oe!==0&&_e!==null){n=_e;var f=Zn;e:switch(Oe){case 1:Oe=0,Zn=null,ar(e,n,f,1);break;case 2:case 9:if(wp(f)){Oe=0,Zn=null,y_(n);break}n=function(){Oe!==2&&Oe!==9||ke!==e||(Oe=7),wi(e)},f.then(n,n);break t;case 3:Oe=7;break t;case 4:Oe=5;break t;case 7:wp(f)?(Oe=0,Zn=null,y_(n)):(Oe=0,Zn=null,ar(e,n,f,7));break;case 5:var v=null;switch(_e.tag){case 26:v=_e.memoizedState;case 5:case 27:var T=_e;if(v?sg(v):T.stateNode.complete){Oe=0,Zn=null;var P=T.sibling;if(P!==null)_e=P;else{var Q=T.return;Q!==null?(_e=Q,Bl(Q)):_e=null}break e}}Oe=0,Zn=null,ar(e,n,f,5);break;case 6:Oe=0,Zn=null,ar(e,n,f,6);break;case 8:Mf(),Je=6;break t;default:throw Error(s(462))}}NS();break}catch(ht){m_(e,ht)}while(!0);return Gi=ts=null,N.H=r,N.A=u,De=a,_e!==null?0:(ke=null,ye=0,il(),Je)}function NS(){for(;_e!==null&&!Ze();)S_(_e)}function S_(e){var n=km(e.alternate,e,Qi);e.memoizedProps=e.pendingProps,n===null?Bl(e):_e=n}function y_(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Im(a,n,n.pendingProps,n.type,void 0,ye);break;case 11:n=Im(a,n,n.pendingProps,n.type.render,n.ref,ye);break;case 5:zu(n);default:Wm(a,n),n=_e=vp(n,Qi),n=km(a,n,Qi)}e.memoizedProps=e.pendingProps,n===null?Bl(e):_e=n}function ar(e,n,a,r){Gi=ts=null,zu(n),qs=null,no=0;var u=n.return;try{if(MS(e,u,n,a,ye)){Je=1,bl(e,ai(a,e.current)),_e=null;return}}catch(f){if(u!==null)throw _e=u,f;Je=1,bl(e,ai(a,e.current)),_e=null;return}n.flags&32768?(xe||r===1?e=!0:tr||(ye&536870912)!==0?e=!1:(Ma=e=!0,(r===2||r===9||r===3||r===6)&&(r=qn.current,r!==null&&r.tag===13&&(r.flags|=16384))),M_(n,e)):Bl(n)}function Bl(e){var n=e;do{if((n.flags&32768)!==0){M_(n,Ma);return}e=n.return;var a=TS(n.alternate,n,Qi);if(a!==null){_e=a;return}if(n=n.sibling,n!==null){_e=n;return}_e=n=e}while(n!==null);Je===0&&(Je=5)}function M_(e,n){do{var a=bS(e.alternate,e);if(a!==null){a.flags&=32767,_e=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){_e=e;return}_e=e=a}while(e!==null);Je=6,_e=null}function x_(e,n,a,r,u,f,v,T,P){e.cancelPendingCommit=null;do Fl();while(hn!==0);if((De&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=cu,ni(e,a,f,v,T,P),e===ke&&(_e=ke=null,ye=0),nr=n,Ta=e,Ji=a,vf=f,Sf=u,f_=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,IS(ut,function(){return R_(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=N.T,N.T=null,u=q.p,q.p=2,v=De,De|=4;try{AS(e,n,a)}finally{De=v,q.p=u,N.T=r}}hn=1,E_(),T_(),b_()}}function E_(){if(hn===1){hn=0;var e=Ta,n=nr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=N.T,N.T=null;var r=q.p;q.p=2;var u=De;De|=4;try{i_(n,e);var f=Of,v=cp(e.containerInfo),T=f.focusedElem,P=f.selectionRange;if(v!==T&&T&&T.ownerDocument&&lp(T.ownerDocument.documentElement,T)){if(P!==null&&au(T)){var Q=P.start,ht=P.end;if(ht===void 0&&(ht=Q),"selectionStart"in T)T.selectionStart=Q,T.selectionEnd=Math.min(ht,T.value.length);else{var mt=T.ownerDocument||document,tt=mt&&mt.defaultView||window;if(tt.getSelection){var ot=tt.getSelection(),Ft=T.textContent.length,te=Math.min(P.start,Ft),Be=P.end===void 0?te:Math.min(P.end,Ft);!ot.extend&&te>Be&&(v=Be,Be=te,te=v);var W=op(T,te),H=op(T,Be);if(W&&H&&(ot.rangeCount!==1||ot.anchorNode!==W.node||ot.anchorOffset!==W.offset||ot.focusNode!==H.node||ot.focusOffset!==H.offset)){var K=mt.createRange();K.setStart(W.node,W.offset),ot.removeAllRanges(),te>Be?(ot.addRange(K),ot.extend(H.node,H.offset)):(K.setEnd(H.node,H.offset),ot.addRange(K))}}}}for(mt=[],ot=T;ot=ot.parentNode;)ot.nodeType===1&&mt.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<mt.length;T++){var pt=mt[T];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}Ql=!!Nf,Of=Nf=null}finally{De=u,q.p=r,N.T=a}}e.current=n,hn=2}}function T_(){if(hn===2){hn=0;var e=Ta,n=nr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=N.T,N.T=null;var r=q.p;q.p=2;var u=De;De|=4;try{Jm(e,n.alternate,n)}finally{De=u,q.p=r,N.T=a}}hn=3}}function b_(){if(hn===4||hn===3){hn=0,U();var e=Ta,n=nr,a=Ji,r=f_;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?hn=5:(hn=0,nr=Ta=null,A_(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ea=null),Ds(a),n=n.stateNode,Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(Et,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=N.T,u=q.p,q.p=2,N.T=null;try{for(var f=e.onRecoverableError,v=0;v<r.length;v++){var T=r[v];f(T.value,{componentStack:T.stack})}}finally{N.T=n,q.p=u}}(Ji&3)!==0&&Fl(),wi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===yf?yo++:(yo=0,yf=e):yo=0,Mo(0)}}function A_(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,to(n)))}function Fl(){return E_(),T_(),b_(),R_()}function R_(){if(hn!==5)return!1;var e=Ta,n=vf;vf=0;var a=Ds(Ji),r=N.T,u=q.p;try{q.p=32>a?32:a,N.T=null,a=Sf,Sf=null;var f=Ta,v=Ji;if(hn=0,nr=Ta=null,Ji=0,(De&6)!==0)throw Error(s(331));var T=De;if(De|=4,l_(f.current),s_(f,f.current,v,a),De=T,Mo(0,!1),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(Et,f)}catch{}return!0}finally{q.p=u,N.T=r,A_(e,n)}}function C_(e,n,a){n=ai(a,n),n=Qu(e.stateNode,n,2),e=ga(e,n,2),e!==null&&(Dn(e,2),wi(e))}function Pe(e,n,a){if(e.tag===3)C_(e,e,a);else for(;n!==null;){if(n.tag===3){C_(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ea===null||!Ea.has(r))){e=ai(a,e),a=wm(2),r=ga(n,a,2),r!==null&&(Dm(a,r,n,e),Dn(r,2),wi(r));break}}n=n.return}}function Ef(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new wS;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(mf=!0,u.add(a),e=OS.bind(null,e,n,a),n.then(e,e))}function OS(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ke===e&&(ye&a)===a&&(Je===4||Je===3&&(ye&62914560)===ye&&300>E()-Nl?(De&2)===0&&ir(e,0):_f|=a,er===ye&&(er=0)),wi(e)}function w_(e,n){n===0&&(n=Ne()),e=Qa(e,n),e!==null&&(Dn(e,n),wi(e))}function PS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),w_(e,a)}function zS(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),w_(e,a)}function IS(e,n){return ae(e,n)}var Hl=null,sr=null,Tf=!1,Gl=!1,bf=!1,Aa=0;function wi(e){e!==sr&&e.next===null&&(sr===null?Hl=sr=e:sr=sr.next=e),Gl=!0,Tf||(Tf=!0,FS())}function Mo(e,n){if(!bf&&Gl){bf=!0;do for(var a=!1,r=Hl;r!==null;){if(e!==0){var u=r.pendingLanes;if(u===0)var f=0;else{var v=r.suspendedLanes,T=r.pingedLanes;f=(1<<31-Pt(42|e)+1)-1,f&=u&~(v&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,N_(r,f))}else f=ye,f=_t(r,r===ke?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Bt(r,f)||(a=!0,N_(r,f));r=r.next}while(a);bf=!1}}function BS(){D_()}function D_(){Gl=Tf=!1;var e=0;Aa!==0&&ZS()&&(e=Aa);for(var n=E(),a=null,r=Hl;r!==null;){var u=r.next,f=U_(r,n);f===0?(r.next=null,a===null?Hl=u:a.next=u,u===null&&(sr=a)):(a=r,(e!==0||(f&3)!==0)&&(Gl=!0)),r=u}hn!==0&&hn!==5||Mo(e),Aa!==0&&(Aa=0)}function U_(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var v=31-Pt(f),T=1<<v,P=u[v];P===-1?((T&a)===0||(T&r)!==0)&&(u[v]=ie(T,n)):P<=n&&(e.expiredLanes|=T),f&=~T}if(n=ke,a=ye,a=_t(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ke(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Bt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&Ke(r),Ds(a)){case 2:case 8:a=St;break;case 32:a=ut;break;case 268435456:a=At;break;default:a=ut}return r=L_.bind(null,e),a=ae(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&Ke(r),e.callbackPriority=2,e.callbackNode=null,2}function L_(e,n){if(hn!==0&&hn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Fl()&&e.callbackNode!==a)return null;var r=ye;return r=_t(e,e===ke?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(d_(e,r,n),U_(e,E()),e.callbackNode!=null&&e.callbackNode===a?L_.bind(null,e):null)}function N_(e,n){if(Fl())return null;d_(e,n,!0)}function FS(){QS(function(){(De&6)!==0?ae(dt,BS):D_()})}function Af(){if(Aa===0){var e=Xs;e===0&&(e=Tt,Tt<<=1,(Tt&261888)===0&&(Tt=256)),Aa=e}return Aa}function O_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Zo(""+e)}function P_(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function HS(e,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var f=O_((u[yn]||null).action),v=r.submitter;v&&(n=(n=v[yn]||null)?O_(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var T=new $o("action","action",null,r,u);e.push({event:T,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Aa!==0){var P=v?P_(u,v):new FormData(u);Wu(a,{pending:!0,data:P,method:u.method,action:f},null,P)}}else typeof f=="function"&&(T.preventDefault(),P=v?P_(u,v):new FormData(u),Wu(a,{pending:!0,data:P,method:u.method,action:f},f,P))},currentTarget:u}]})}}for(var Rf=0;Rf<lu.length;Rf++){var Cf=lu[Rf],GS=Cf.toLowerCase(),VS=Cf[0].toUpperCase()+Cf.slice(1);pi(GS,"on"+VS)}pi(hp,"onAnimationEnd"),pi(dp,"onAnimationIteration"),pi(pp,"onAnimationStart"),pi("dblclick","onDoubleClick"),pi("focusin","onFocus"),pi("focusout","onBlur"),pi(aS,"onTransitionRun"),pi(sS,"onTransitionStart"),pi(rS,"onTransitionCancel"),pi(mp,"onTransitionEnd"),Kt("onMouseEnter",["mouseout","mouseover"]),Kt("onMouseLeave",["mouseout","mouseover"]),Kt("onPointerEnter",["pointerout","pointerover"]),Kt("onPointerLeave",["pointerout","pointerover"]),Ot("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ot("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ot("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ot("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ot("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ot("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xo));function z_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],u=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var v=r.length-1;0<=v;v--){var T=r[v],P=T.instance,Q=T.currentTarget;if(T=T.listener,P!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=Q;try{f(u)}catch(ht){nl(ht)}u.currentTarget=null,f=P}else for(v=0;v<r.length;v++){if(T=r[v],P=T.instance,Q=T.currentTarget,T=T.listener,P!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=Q;try{f(u)}catch(ht){nl(ht)}u.currentTarget=null,f=P}}}}function ge(e,n){var a=n[Vr];a===void 0&&(a=n[Vr]=new Set);var r=e+"__bubble";a.has(r)||(I_(n,e,2,!1),a.add(r))}function wf(e,n,a){var r=0;n&&(r|=4),I_(a,e,r,n)}var Vl="_reactListening"+Math.random().toString(36).slice(2);function Df(e){if(!e[Vl]){e[Vl]=!0,Ut.forEach(function(a){a!=="selectionchange"&&(kS.has(a)||wf(a,!1,e),wf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Vl]||(n[Vl]=!0,wf("selectionchange",!1,n))}}function I_(e,n,a,r){switch(hg(n)){case 2:var u=gy;break;case 8:u=vy;break;default:u=Wf}a=u.bind(null,n,a,e),u=void 0,!Zc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Uf(e,n,a,r,u){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var v=r.tag;if(v===3||v===4){var T=r.stateNode.containerInfo;if(T===u)break;if(v===4)for(v=r.return;v!==null;){var P=v.tag;if((P===3||P===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;T!==null;){if(v=X(T),v===null)return;if(P=v.tag,P===5||P===6||P===26||P===27){r=f=v;continue t}T=T.parentNode}}r=r.return}Vd(function(){var Q=f,ht=qc(a),mt=[];t:{var tt=_p.get(e);if(tt!==void 0){var ot=$o,Ft=e;switch(e){case"keypress":if(Qo(a)===0)break t;case"keydown":case"keyup":ot=zv;break;case"focusin":Ft="focus",ot=$c;break;case"focusout":Ft="blur",ot=$c;break;case"beforeblur":case"afterblur":ot=$c;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=Wd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=Tv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=Fv;break;case hp:case dp:case pp:ot=Rv;break;case mp:ot=Gv;break;case"scroll":case"scrollend":ot=xv;break;case"wheel":ot=kv;break;case"copy":case"cut":case"paste":ot=wv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=qd;break;case"toggle":case"beforetoggle":ot=Wv}var te=(n&4)!==0,Be=!te&&(e==="scroll"||e==="scrollend"),W=te?tt!==null?tt+"Capture":null:tt;te=[];for(var H=Q,K;H!==null;){var pt=H;if(K=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||K===null||W===null||(pt=kr(H,W),pt!=null&&te.push(Eo(H,pt,K))),Be)break;H=H.return}0<te.length&&(tt=new ot(tt,Ft,null,a,ht),mt.push({event:tt,listeners:te}))}}if((n&7)===0){t:{if(tt=e==="mouseover"||e==="pointerover",ot=e==="mouseout"||e==="pointerout",tt&&a!==Yc&&(Ft=a.relatedTarget||a.fromElement)&&(X(Ft)||Ft[ca]))break t;if((ot||tt)&&(tt=ht.window===ht?ht:(tt=ht.ownerDocument)?tt.defaultView||tt.parentWindow:window,ot?(Ft=a.relatedTarget||a.toElement,ot=Q,Ft=Ft?X(Ft):null,Ft!==null&&(Be=c(Ft),te=Ft.tag,Ft!==Be||te!==5&&te!==27&&te!==6)&&(Ft=null)):(ot=null,Ft=Q),ot!==Ft)){if(te=Wd,pt="onMouseLeave",W="onMouseEnter",H="mouse",(e==="pointerout"||e==="pointerover")&&(te=qd,pt="onPointerLeave",W="onPointerEnter",H="pointer"),Be=ot==null?tt:st(ot),K=Ft==null?tt:st(Ft),tt=new te(pt,H+"leave",ot,a,ht),tt.target=Be,tt.relatedTarget=K,pt=null,X(ht)===Q&&(te=new te(W,H+"enter",Ft,a,ht),te.target=K,te.relatedTarget=Be,pt=te),Be=pt,ot&&Ft)e:{for(te=XS,W=ot,H=Ft,K=0,pt=W;pt;pt=te(pt))K++;pt=0;for(var Jt=H;Jt;Jt=te(Jt))pt++;for(;0<K-pt;)W=te(W),K--;for(;0<pt-K;)H=te(H),pt--;for(;K--;){if(W===H||H!==null&&W===H.alternate){te=W;break e}W=te(W),H=te(H)}te=null}else te=null;ot!==null&&B_(mt,tt,ot,te,!1),Ft!==null&&Be!==null&&B_(mt,Be,Ft,te,!0)}}t:{if(tt=Q?st(Q):window,ot=tt.nodeName&&tt.nodeName.toLowerCase(),ot==="select"||ot==="input"&&tt.type==="file")var Re=ep;else if($d(tt))if(np)Re=eS;else{Re=$v;var Wt=Jv}else ot=tt.nodeName,!ot||ot.toLowerCase()!=="input"||tt.type!=="checkbox"&&tt.type!=="radio"?Q&&Wc(Q.elementType)&&(Re=ep):Re=tS;if(Re&&(Re=Re(e,Q))){tp(mt,Re,a,ht);break t}Wt&&Wt(e,tt,Q),e==="focusout"&&Q&&tt.type==="number"&&Q.memoizedProps.value!=null&&fn(tt,"number",tt.value)}switch(Wt=Q?st(Q):window,e){case"focusin":($d(Wt)||Wt.contentEditable==="true")&&(zs=Wt,su=Q,Qr=null);break;case"focusout":Qr=su=zs=null;break;case"mousedown":ru=!0;break;case"contextmenu":case"mouseup":case"dragend":ru=!1,up(mt,a,ht);break;case"selectionchange":if(iS)break;case"keydown":case"keyup":up(mt,a,ht)}var ue;if(eu)t:{switch(e){case"compositionstart":var Me="onCompositionStart";break t;case"compositionend":Me="onCompositionEnd";break t;case"compositionupdate":Me="onCompositionUpdate";break t}Me=void 0}else Ps?Qd(e,a)&&(Me="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Me="onCompositionStart");Me&&(jd&&a.locale!=="ko"&&(Ps||Me!=="onCompositionStart"?Me==="onCompositionEnd"&&Ps&&(ue=kd()):(ua=ht,Kc="value"in ua?ua.value:ua.textContent,Ps=!0)),Wt=kl(Q,Me),0<Wt.length&&(Me=new Yd(Me,e,null,a,ht),mt.push({event:Me,listeners:Wt}),ue?Me.data=ue:(ue=Jd(a),ue!==null&&(Me.data=ue)))),(ue=qv?jv(e,a):Zv(e,a))&&(Me=kl(Q,"onBeforeInput"),0<Me.length&&(Wt=new Yd("onBeforeInput","beforeinput",null,a,ht),mt.push({event:Wt,listeners:Me}),Wt.data=ue)),HS(mt,e,Q,a,ht)}z_(mt,n)})}function Eo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function kl(e,n){for(var a=n+"Capture",r=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=kr(e,a),u!=null&&r.unshift(Eo(e,u,f)),u=kr(e,n),u!=null&&r.push(Eo(e,u,f))),e.tag===3)return r;e=e.return}return[]}function XS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function B_(e,n,a,r,u){for(var f=n._reactName,v=[];a!==null&&a!==r;){var T=a,P=T.alternate,Q=T.stateNode;if(T=T.tag,P!==null&&P===r)break;T!==5&&T!==26&&T!==27||Q===null||(P=Q,u?(Q=kr(a,f),Q!=null&&v.unshift(Eo(a,Q,P))):u||(Q=kr(a,f),Q!=null&&v.push(Eo(a,Q,P)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var WS=/\r\n?/g,YS=/\u0000|\uFFFD/g;function F_(e){return(typeof e=="string"?e:""+e).replace(WS,`
`).replace(YS,"")}function H_(e,n){return n=F_(n),F_(e)===n}function Ie(e,n,a,r,u,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||Ls(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&Ls(e,""+r);break;case"className":Le(e,"class",r);break;case"tabIndex":Le(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Le(e,a,r);break;case"style":Hd(e,r,f);break;case"data":if(n!=="object"){Le(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Zo(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ie(e,n,"name",u.name,u,null),Ie(e,n,"formEncType",u.formEncType,u,null),Ie(e,n,"formMethod",u.formMethod,u,null),Ie(e,n,"formTarget",u.formTarget,u,null)):(Ie(e,n,"encType",u.encType,u,null),Ie(e,n,"method",u.method,u,null),Ie(e,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Zo(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=Ii);break;case"onScroll":r!=null&&ge("scroll",e);break;case"onScrollEnd":r!=null&&ge("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=Zo(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":ge("beforetoggle",e),ge("toggle",e),Ve(e,"popover",r);break;case"xlinkActuate":me(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":me(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":me(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":me(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":me(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":me(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":me(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":me(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":me(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Ve(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=yv.get(a)||a,Ve(e,a,r))}}function Lf(e,n,a,r,u,f){switch(a){case"style":Hd(e,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?Ls(e,r):(typeof r=="number"||typeof r=="bigint")&&Ls(e,""+r);break;case"onScroll":r!=null&&ge("scroll",e);break;case"onScrollEnd":r!=null&&ge("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Ii);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ht.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[yn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof r=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,r,u);break t}a in e?e[a]=r:r===!0?e.setAttribute(a,""):Ve(e,a,r)}}}function bn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",e),ge("load",e);var r=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ie(e,n,f,v,a,null)}}u&&Ie(e,n,"srcSet",a.srcSet,a,null),r&&Ie(e,n,"src",a.src,a,null);return;case"input":ge("invalid",e);var T=f=v=u=null,P=null,Q=null;for(r in a)if(a.hasOwnProperty(r)){var ht=a[r];if(ht!=null)switch(r){case"name":u=ht;break;case"type":v=ht;break;case"checked":P=ht;break;case"defaultChecked":Q=ht;break;case"value":f=ht;break;case"defaultValue":T=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(s(137,n));break;default:Ie(e,n,r,ht,a,null)}}Un(e,f,T,P,Q,v,u,!1);return;case"select":ge("invalid",e),r=v=f=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":f=T;break;case"defaultValue":v=T;break;case"multiple":r=T;default:Ie(e,n,u,T,a,null)}n=f,a=v,e.multiple=!!r,n!=null?tn(e,!!r,n,!1):a!=null&&tn(e,!!r,a,!0);return;case"textarea":ge("invalid",e),f=u=r=null;for(v in a)if(a.hasOwnProperty(v)&&(T=a[v],T!=null))switch(v){case"value":r=T;break;case"defaultValue":u=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Ie(e,n,v,T,a,null)}bi(e,r,u,f);return;case"option":for(P in a)a.hasOwnProperty(P)&&(r=a[P],r!=null)&&(P==="selected"?e.selected=r&&typeof r!="function"&&typeof r!="symbol":Ie(e,n,P,r,a,null));return;case"dialog":ge("beforetoggle",e),ge("toggle",e),ge("cancel",e),ge("close",e);break;case"iframe":case"object":ge("load",e);break;case"video":case"audio":for(r=0;r<xo.length;r++)ge(xo[r],e);break;case"image":ge("error",e),ge("load",e);break;case"details":ge("toggle",e);break;case"embed":case"source":case"link":ge("error",e),ge("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(r=a[Q],r!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ie(e,n,Q,r,a,null)}return;default:if(Wc(n)){for(ht in a)a.hasOwnProperty(ht)&&(r=a[ht],r!==void 0&&Lf(e,n,ht,r,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(r=a[T],r!=null&&Ie(e,n,T,r,a,null))}function qS(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,v=null,T=null,P=null,Q=null,ht=null;for(ot in a){var mt=a[ot];if(a.hasOwnProperty(ot)&&mt!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":P=mt;default:r.hasOwnProperty(ot)||Ie(e,n,ot,null,r,mt)}}for(var tt in r){var ot=r[tt];if(mt=a[tt],r.hasOwnProperty(tt)&&(ot!=null||mt!=null))switch(tt){case"type":f=ot;break;case"name":u=ot;break;case"checked":Q=ot;break;case"defaultChecked":ht=ot;break;case"value":v=ot;break;case"defaultValue":T=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:ot!==mt&&Ie(e,n,tt,ot,r,mt)}}An(e,v,T,P,Q,ht,f,u);return;case"select":ot=v=T=tt=null;for(f in a)if(P=a[f],a.hasOwnProperty(f)&&P!=null)switch(f){case"value":break;case"multiple":ot=P;default:r.hasOwnProperty(f)||Ie(e,n,f,null,r,P)}for(u in r)if(f=r[u],P=a[u],r.hasOwnProperty(u)&&(f!=null||P!=null))switch(u){case"value":tt=f;break;case"defaultValue":T=f;break;case"multiple":v=f;default:f!==P&&Ie(e,n,u,f,r,P)}n=T,a=v,r=ot,tt!=null?tn(e,!!a,tt,!1):!!r!=!!a&&(n!=null?tn(e,!!a,n,!0):tn(e,!!a,a?[]:"",!1));return;case"textarea":ot=tt=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!r.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ie(e,n,T,null,r,u)}for(v in r)if(u=r[v],f=a[v],r.hasOwnProperty(v)&&(u!=null||f!=null))switch(v){case"value":tt=u;break;case"defaultValue":ot=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Ie(e,n,v,u,r,f)}Us(e,tt,ot);return;case"option":for(var Ft in a)tt=a[Ft],a.hasOwnProperty(Ft)&&tt!=null&&!r.hasOwnProperty(Ft)&&(Ft==="selected"?e.selected=!1:Ie(e,n,Ft,null,r,tt));for(P in r)tt=r[P],ot=a[P],r.hasOwnProperty(P)&&tt!==ot&&(tt!=null||ot!=null)&&(P==="selected"?e.selected=tt&&typeof tt!="function"&&typeof tt!="symbol":Ie(e,n,P,tt,r,ot));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)tt=a[te],a.hasOwnProperty(te)&&tt!=null&&!r.hasOwnProperty(te)&&Ie(e,n,te,null,r,tt);for(Q in r)if(tt=r[Q],ot=a[Q],r.hasOwnProperty(Q)&&tt!==ot&&(tt!=null||ot!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(tt!=null)throw Error(s(137,n));break;default:Ie(e,n,Q,tt,r,ot)}return;default:if(Wc(n)){for(var Be in a)tt=a[Be],a.hasOwnProperty(Be)&&tt!==void 0&&!r.hasOwnProperty(Be)&&Lf(e,n,Be,void 0,r,tt);for(ht in r)tt=r[ht],ot=a[ht],!r.hasOwnProperty(ht)||tt===ot||tt===void 0&&ot===void 0||Lf(e,n,ht,tt,r,ot);return}}for(var W in a)tt=a[W],a.hasOwnProperty(W)&&tt!=null&&!r.hasOwnProperty(W)&&Ie(e,n,W,null,r,tt);for(mt in r)tt=r[mt],ot=a[mt],!r.hasOwnProperty(mt)||tt===ot||tt==null&&ot==null||Ie(e,n,mt,tt,r,ot)}function G_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function jS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],f=u.transferSize,v=u.initiatorType,T=u.duration;if(f&&T&&G_(v)){for(v=0,T=u.responseEnd,r+=1;r<a.length;r++){var P=a[r],Q=P.startTime;if(Q>T)break;var ht=P.transferSize,mt=P.initiatorType;ht&&G_(mt)&&(P=P.responseEnd,v+=ht*(P<T?1:(T-Q)/(P-Q)))}if(--r,n+=8*(f+v)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Nf=null,Of=null;function Xl(e){return e.nodeType===9?e:e.ownerDocument}function V_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function k_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Pf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var zf=null;function ZS(){var e=window.event;return e&&e.type==="popstate"?e===zf?!1:(zf=e,!0):(zf=null,!1)}var X_=typeof setTimeout=="function"?setTimeout:void 0,KS=typeof clearTimeout=="function"?clearTimeout:void 0,W_=typeof Promise=="function"?Promise:void 0,QS=typeof queueMicrotask=="function"?queueMicrotask:typeof W_<"u"?function(e){return W_.resolve(null).then(e).catch(JS)}:X_;function JS(e){setTimeout(function(){throw e})}function Ra(e){return e==="head"}function Y_(e,n){var a=n,r=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(u),cr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")To(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,To(a);for(var f=a.firstChild;f;){var v=f.nextSibling,T=f.nodeName;f[Ya]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&To(e.ownerDocument.body);a=u}while(a);cr(n)}function q_(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function If(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":If(a),A(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function $S(e,n,a,r){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Ya])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=ci(e.nextSibling),e===null)break}return null}function ty(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ci(e.nextSibling),e===null))return null;return e}function j_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ci(e.nextSibling),e===null))return null;return e}function Bf(e){return e.data==="$?"||e.data==="$~"}function Ff(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function ey(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function ci(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Hf=null;function Z_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return ci(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function K_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Q_(e,n,a){switch(n=Xl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function To(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);A(e)}var ui=new Map,J_=new Set;function Wl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var $i=q.d;q.d={f:ny,r:iy,D:ay,C:sy,L:ry,m:oy,X:cy,S:ly,M:uy};function ny(){var e=$i.f(),n=zl();return e||n}function iy(e){var n=at(e);n!==null&&n.tag===5&&n.type==="form"?mm(n):$i.r(e)}var rr=typeof document>"u"?null:document;function $_(e,n,a){var r=rr;if(r&&typeof n=="string"&&n){var u=Se(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),J_.has(u)||(J_.add(u),e={rel:e,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),bn(n,"link",e),gt(n),r.head.appendChild(n)))}}function ay(e){$i.D(e),$_("dns-prefetch",e,null)}function sy(e,n){$i.C(e,n),$_("preconnect",e,n)}function ry(e,n,a){$i.L(e,n,a);var r=rr;if(r&&e&&n){var u='link[rel="preload"][as="'+Se(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Se(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Se(a.imageSizes)+'"]')):u+='[href="'+Se(e)+'"]';var f=u;switch(n){case"style":f=or(e);break;case"script":f=lr(e)}ui.has(f)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ui.set(f,e),r.querySelector(u)!==null||n==="style"&&r.querySelector(bo(f))||n==="script"&&r.querySelector(Ao(f))||(n=r.createElement("link"),bn(n,"link",e),gt(n),r.head.appendChild(n)))}}function oy(e,n){$i.m(e,n);var a=rr;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Se(r)+'"][href="'+Se(e)+'"]',f=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=lr(e)}if(!ui.has(f)&&(e=_({rel:"modulepreload",href:e},n),ui.set(f,e),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ao(f)))return}r=a.createElement("link"),bn(r,"link",e),gt(r),a.head.appendChild(r)}}}function ly(e,n,a){$i.S(e,n,a);var r=rr;if(r&&e){var u=Y(r).hoistableStyles,f=or(e);n=n||"default";var v=u.get(f);if(!v){var T={loading:0,preload:null};if(v=r.querySelector(bo(f)))T.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ui.get(f))&&Gf(e,a);var P=v=r.createElement("link");gt(P),bn(P,"link",e),P._p=new Promise(function(Q,ht){P.onload=Q,P.onerror=ht}),P.addEventListener("load",function(){T.loading|=1}),P.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Yl(v,n,r)}v={type:"stylesheet",instance:v,count:1,state:T},u.set(f,v)}}}function cy(e,n){$i.X(e,n);var a=rr;if(a&&e){var r=Y(a).hoistableScripts,u=lr(e),f=r.get(u);f||(f=a.querySelector(Ao(u)),f||(e=_({src:e,async:!0},n),(n=ui.get(u))&&Vf(e,n),f=a.createElement("script"),gt(f),bn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function uy(e,n){$i.M(e,n);var a=rr;if(a&&e){var r=Y(a).hoistableScripts,u=lr(e),f=r.get(u);f||(f=a.querySelector(Ao(u)),f||(e=_({src:e,async:!0,type:"module"},n),(n=ui.get(u))&&Vf(e,n),f=a.createElement("script"),gt(f),bn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function tg(e,n,a,r){var u=(u=it.current)?Wl(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=or(a.href),a=Y(u).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=or(a.href);var f=Y(u).hoistableStyles,v=f.get(e);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,v),(f=u.querySelector(bo(e)))&&!f._p&&(v.instance=f,v.state.loading=5),ui.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ui.set(e,a),f||fy(u,e,a,v.state))),n&&r===null)throw Error(s(528,""));return v}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=lr(a),a=Y(u).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function or(e){return'href="'+Se(e)+'"'}function bo(e){return'link[rel="stylesheet"]['+e+"]"}function eg(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function fy(e,n,a,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),bn(n,"link",a),gt(n),e.head.appendChild(n))}function lr(e){return'[src="'+Se(e)+'"]'}function Ao(e){return"script[async]"+e}function ng(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+Se(a.href)+'"]');if(r)return n.instance=r,gt(r),r;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),gt(r),bn(r,"style",u),Yl(r,a.precedence,e),n.instance=r;case"stylesheet":u=or(a.href);var f=e.querySelector(bo(u));if(f)return n.state.loading|=4,n.instance=f,gt(f),f;r=eg(a),(u=ui.get(u))&&Gf(r,u),f=(e.ownerDocument||e).createElement("link"),gt(f);var v=f;return v._p=new Promise(function(T,P){v.onload=T,v.onerror=P}),bn(f,"link",r),n.state.loading|=4,Yl(f,a.precedence,e),n.instance=f;case"script":return f=lr(a.src),(u=e.querySelector(Ao(f)))?(n.instance=u,gt(u),u):(r=a,(u=ui.get(f))&&(r=_({},a),Vf(r,u)),e=e.ownerDocument||e,u=e.createElement("script"),gt(u),bn(u,"link",r),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Yl(r,a.precedence,e));return n.instance}function Yl(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,f=u,v=0;v<r.length;v++){var T=r[v];if(T.dataset.precedence===n)f=T;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Gf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Vf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var ql=null;function ig(e,n,a){if(ql===null){var r=new Map,u=ql=new Map;u.set(a,r)}else u=ql,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[Ya]||f[sn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=e+v;var T=r.get(v);T?T.push(f):r.set(v,[f])}}return r}function ag(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function hy(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function sg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function dy(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=or(r.href),f=n.querySelector(bo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=jl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,gt(f);return}f=n.ownerDocument||n,r=eg(r),(u=ui.get(u))&&Gf(r,u),f=f.createElement("link"),gt(f);var v=f;v._p=new Promise(function(T,P){v.onload=T,v.onerror=P}),bn(f,"link",r),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=jl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var kf=0;function py(e,n){return e.stylesheets&&e.count===0&&Kl(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&Kl(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&kf===0&&(kf=62500*jS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Kl(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>kf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function jl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Kl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Zl=null;function Kl(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Zl=new Map,n.forEach(my,e),Zl=null,jl.call(e))}function my(e,n){if(!(n.state.loading&4)){var a=Zl.get(e);if(a)var r=a.get(null);else{a=new Map,Zl.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var v=u[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),r=v)}r&&a.set(null,r)}u=n.instance,v=u.getAttribute("data-precedence"),f=a.get(v)||r,f===r&&a.set(null,u),a.set(v,u),this.count++,r=jl.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Ro={$$typeof:O,Provider:null,Consumer:null,_currentValue:j,_currentValue2:j,_threadCount:0};function _y(e,n,a,r,u,f,v,T,P){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ee(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ee(0),this.hiddenUpdates=Ee(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=P,this.incompleteTransitions=new Map}function rg(e,n,a,r,u,f,v,T,P,Q,ht,mt){return e=new _y(e,n,a,v,P,Q,ht,mt,T),n=1,f===!0&&(n|=24),f=Yn(3,null,null,n),e.current=f,f.stateNode=e,n=Mu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},bu(f),e}function og(e){return e?(e=Fs,e):Fs}function lg(e,n,a,r,u,f){u=og(u),r.context===null?r.context=u:r.pendingContext=u,r=_a(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=ga(e,r,n),a!==null&&(Hn(a,e,n),ao(a,e,n))}function cg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Xf(e,n){cg(e,n),(e=e.alternate)&&cg(e,n)}function ug(e){if(e.tag===13||e.tag===31){var n=Qa(e,67108864);n!==null&&Hn(n,e,67108864),Xf(e,67108864)}}function fg(e){if(e.tag===13||e.tag===31){var n=Qn();n=ws(n);var a=Qa(e,n);a!==null&&Hn(a,e,n),Xf(e,n)}}var Ql=!0;function gy(e,n,a,r){var u=N.T;N.T=null;var f=q.p;try{q.p=2,Wf(e,n,a,r)}finally{q.p=f,N.T=u}}function vy(e,n,a,r){var u=N.T;N.T=null;var f=q.p;try{q.p=8,Wf(e,n,a,r)}finally{q.p=f,N.T=u}}function Wf(e,n,a,r){if(Ql){var u=Yf(r);if(u===null)Uf(e,n,r,Jl,a),dg(e,r);else if(yy(u,e,n,a,r))r.stopPropagation();else if(dg(e,r),n&4&&-1<Sy.indexOf(e)){for(;u!==null;){var f=at(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=Mt(f.pendingLanes);if(v!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;v;){var P=1<<31-Pt(v);T.entanglements[1]|=P,v&=~P}wi(f),(De&6)===0&&(Ol=E()+500,Mo(0))}}break;case 31:case 13:T=Qa(f,2),T!==null&&Hn(T,f,2),zl(),Xf(f,2)}if(f=Yf(r),f===null&&Uf(e,n,r,Jl,a),f===u)break;u=f}u!==null&&r.stopPropagation()}else Uf(e,n,r,null,a)}}function Yf(e){return e=qc(e),qf(e)}var Jl=null;function qf(e){if(Jl=null,e=X(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Jl=e,null}function hg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(J()){case dt:return 2;case St:return 8;case ut:case jt:return 32;case At:return 268435456;default:return 32}default:return 32}}var jf=!1,Ca=null,wa=null,Da=null,Co=new Map,wo=new Map,Ua=[],Sy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function dg(e,n){switch(e){case"focusin":case"focusout":Ca=null;break;case"dragenter":case"dragleave":wa=null;break;case"mouseover":case"mouseout":Da=null;break;case"pointerover":case"pointerout":Co.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":wo.delete(n.pointerId)}}function Do(e,n,a,r,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[u]},n!==null&&(n=at(n),n!==null&&ug(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function yy(e,n,a,r,u){switch(n){case"focusin":return Ca=Do(Ca,e,n,a,r,u),!0;case"dragenter":return wa=Do(wa,e,n,a,r,u),!0;case"mouseover":return Da=Do(Da,e,n,a,r,u),!0;case"pointerover":var f=u.pointerId;return Co.set(f,Do(Co.get(f)||null,e,n,a,r,u)),!0;case"gotpointercapture":return f=u.pointerId,wo.set(f,Do(wo.get(f)||null,e,n,a,r,u)),!0}return!1}function pg(e){var n=X(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Gr(e.priority,function(){fg(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Gr(e.priority,function(){fg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $l(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Yf(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);Yc=r,a.target.dispatchEvent(r),Yc=null}else return n=at(a),n!==null&&ug(n),e.blockedOn=a,!1;n.shift()}return!0}function mg(e,n,a){$l(e)&&a.delete(n)}function My(){jf=!1,Ca!==null&&$l(Ca)&&(Ca=null),wa!==null&&$l(wa)&&(wa=null),Da!==null&&$l(Da)&&(Da=null),Co.forEach(mg),wo.forEach(mg)}function tc(e,n){e.blockedOn===n&&(e.blockedOn=null,jf||(jf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,My)))}var ec=null;function _g(e){ec!==e&&(ec=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){ec===e&&(ec=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],u=e[n+2];if(typeof r!="function"){if(qf(r||a)===null)continue;break}var f=at(a);f!==null&&(e.splice(n,3),n-=3,Wu(f,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function cr(e){function n(P){return tc(P,e)}Ca!==null&&tc(Ca,e),wa!==null&&tc(wa,e),Da!==null&&tc(Da,e),Co.forEach(n),wo.forEach(n);for(var a=0;a<Ua.length;a++){var r=Ua[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ua.length&&(a=Ua[0],a.blockedOn===null);)pg(a),a.blockedOn===null&&Ua.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],f=a[r+1],v=u[yn]||null;if(typeof f=="function")v||_g(a);else if(v){var T=null;if(f&&f.hasAttribute("formAction")){if(u=f,v=f[yn]||null)T=v.formAction;else if(qf(u)!==null)continue}else T=v.action;typeof T=="function"?a[r+1]=T:(a.splice(r,3),r-=3),_g(a)}}}function gg(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Zf(e){this._internalRoot=e}nc.prototype.render=Zf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=Qn();lg(a,r,e,n,null,null)},nc.prototype.unmount=Zf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;lg(e.current,2,null,e,null,null),zl(),n[ca]=null}};function nc(e){this._internalRoot=e}nc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Wa();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ua.length&&n!==0&&n<Ua[a].priority;a++);Ua.splice(a,0,e),a===0&&pg(e)}};var vg=t.version;if(vg!=="19.2.6")throw Error(s(527,vg,"19.2.6"));q.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var xy={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ic=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ic.isDisabled&&ic.supportsFiber)try{Et=ic.inject(xy),Rt=ic}catch{}}return Uo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",u=bm,f=Am,v=Rm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=rg(e,1,!1,null,null,a,r,null,u,f,v,gg),e[ca]=n.current,Df(e),new Zf(n)},Uo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,u="",f=bm,v=Am,T=Rm,P=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(P=a.formState)),n=rg(e,1,!0,n,a??null,r,u,P,f,v,T,gg),n.context=og(null),a=n.current,r=Qn(),r=ws(r),u=_a(r),u.callback=null,ga(a,u,r),a=r,n.current.lanes=a,Dn(n,a),wi(n),e[ca]=n.current,Df(e),new nc(n)},Uo.version="19.2.6",Uo}var Ag;function Uy(){if(Ag)return Qf.exports;Ag=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Qf.exports=Dy(),Qf.exports}var Ly=Uy();const Td="180",Rr={ROTATE:0,DOLLY:1,PAN:2},br={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ny=0,Rg=1,Oy=2,I0=1,B0=2,sa=3,ka=0,kn=1,ra=2,Ga=0,Cr=1,Cg=2,wg=3,Dg=4,Py=5,vs=100,zy=101,Iy=102,By=103,Fy=104,Hy=200,Gy=201,Vy=202,ky=203,Nh=204,Oh=205,Xy=206,Wy=207,Yy=208,qy=209,jy=210,Zy=211,Ky=212,Qy=213,Jy=214,Ph=0,zh=1,Ih=2,Dr=3,Bh=4,Fh=5,Hh=6,Gh=7,F0=0,$y=1,tM=2,Va=0,eM=1,nM=2,iM=3,H0=4,aM=5,sM=6,rM=7,G0=300,Ur=301,Lr=302,Vh=303,kh=304,Hc=306,Xh=1e3,ys=1001,Wh=1002,ei=1003,oM=1004,ac=1005,Ui=1006,eh=1007,Ms=1008,Oi=1009,V0=1010,k0=1011,Go=1012,bd=1013,Es=1014,Li=1015,Yo=1016,Ad=1017,Rd=1018,Vo=1020,X0=35902,W0=35899,Y0=1021,q0=1022,xi=1023,ko=1026,Xo=1027,Cd=1028,wd=1029,j0=1030,Dd=1031,Ud=1033,Uc=33776,Lc=33777,Nc=33778,Oc=33779,Yh=35840,qh=35841,jh=35842,Zh=35843,Kh=36196,Qh=37492,Jh=37496,$h=37808,td=37809,ed=37810,nd=37811,id=37812,ad=37813,sd=37814,rd=37815,od=37816,ld=37817,cd=37818,ud=37819,fd=37820,hd=37821,dd=36492,pd=36494,md=36495,_d=36283,gd=36284,vd=36285,Sd=36286,lM=3200,cM=3201,Z0=0,uM=1,Ha="",ti="srgb",Nr="srgb-linear",Ic="linear",Fe="srgb",ur=7680,Ug=519,fM=512,hM=513,dM=514,K0=515,pM=516,mM=517,_M=518,gM=519,Lg=35044,Ng="300 es",Ni=2e3,Bc=2001;class As{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pc=Math.PI/180,yd=180/Math.PI;function qo(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Cn[o&255]+Cn[o>>8&255]+Cn[o>>16&255]+Cn[o>>24&255]+"-"+Cn[t&255]+Cn[t>>8&255]+"-"+Cn[t>>16&15|64]+Cn[t>>24&255]+"-"+Cn[i&63|128]+Cn[i>>8&255]+"-"+Cn[i>>16&255]+Cn[i>>24&255]+Cn[s&255]+Cn[s>>8&255]+Cn[s>>16&255]+Cn[s>>24&255]).toLowerCase()}function ve(o,t,i){return Math.max(t,Math.min(i,o))}function vM(o,t){return(o%t+t)%t}function nh(o,t,i){return(1-i)*o+i*t}function Lo(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Gn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const SM={DEG2RAD:Pc};class ce{constructor(t=0,i=0){ce.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=ve(this.x,t.x,i.x),this.y=ve(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=ve(this.x,t,i),this.y=ve(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ve(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(ve(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ts{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,d){let m=s[l+0],p=s[l+1],g=s[l+2],_=s[l+3];const y=c[h+0],x=c[h+1],b=c[h+2],R=c[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_;return}if(d===1){t[i+0]=y,t[i+1]=x,t[i+2]=b,t[i+3]=R;return}if(_!==R||m!==y||p!==x||g!==b){let M=1-d;const S=m*y+p*x+g*b+_*R,B=S>=0?1:-1,O=1-S*S;if(O>Number.EPSILON){const V=Math.sqrt(O),F=Math.atan2(V,S*B);M=Math.sin(M*F)/V,d=Math.sin(d*F)/V}const D=d*B;if(m=m*M+y*D,p=p*M+x*D,g=g*M+b*D,_=_*M+R*D,M===1-d){const V=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=V,p*=V,g*=V,_*=V}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,s,l,c,h){const d=s[l],m=s[l+1],p=s[l+2],g=s[l+3],_=c[h],y=c[h+1],x=c[h+2],b=c[h+3];return t[i]=d*b+g*_+m*x-p*y,t[i+1]=m*b+g*y+p*_-d*x,t[i+2]=p*b+g*x+d*y-m*_,t[i+3]=g*b-d*_-m*y-p*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),g=d(l/2),_=d(c/2),y=m(s/2),x=m(l/2),b=m(c/2);switch(h){case"XYZ":this._x=y*g*_+p*x*b,this._y=p*x*_-y*g*b,this._z=p*g*b+y*x*_,this._w=p*g*_-y*x*b;break;case"YXZ":this._x=y*g*_+p*x*b,this._y=p*x*_-y*g*b,this._z=p*g*b-y*x*_,this._w=p*g*_+y*x*b;break;case"ZXY":this._x=y*g*_-p*x*b,this._y=p*x*_+y*g*b,this._z=p*g*b+y*x*_,this._w=p*g*_-y*x*b;break;case"ZYX":this._x=y*g*_-p*x*b,this._y=p*x*_+y*g*b,this._z=p*g*b-y*x*_,this._w=p*g*_+y*x*b;break;case"YZX":this._x=y*g*_+p*x*b,this._y=p*x*_+y*g*b,this._z=p*g*b-y*x*_,this._w=p*g*_-y*x*b;break;case"XZY":this._x=y*g*_-p*x*b,this._y=p*x*_-y*g*b,this._z=p*g*b+y*x*_,this._w=p*g*_+y*x*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],_=i[10],y=s+d+_;if(y>0){const x=.5/Math.sqrt(y+1);this._w=.25/x,this._x=(g-m)*x,this._y=(c-p)*x,this._z=(h-l)*x}else if(s>d&&s>_){const x=2*Math.sqrt(1+s-d-_);this._w=(g-m)/x,this._x=.25*x,this._y=(l+h)/x,this._z=(c+p)/x}else if(d>_){const x=2*Math.sqrt(1+d-s-_);this._w=(c-p)/x,this._x=(l+h)/x,this._y=.25*x,this._z=(m+g)/x}else{const x=2*Math.sqrt(1+_-s-d);this._w=(h-l)/x,this._x=(c+p)/x,this._y=(m+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ve(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+h*d+l*p-c*m,this._y=l*g+h*m+c*d-s*p,this._z=c*g+h*p+s*m-l*d,this._w=h*g-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,c=this._z,h=this._w;let d=h*t._w+s*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=s,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const x=1-i;return this._w=x*h+i*this._w,this._x=x*s+i*this._x,this._y=x*l+i*this._y,this._z=x*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),_=Math.sin((1-i)*g)/p,y=Math.sin(i*g)/p;return this._w=h*_+this._w*y,this._x=s*_+this._x*y,this._y=l*_+this._y*y,this._z=c*_+this._z*y,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(t=0,i=0,s=0){$.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Og.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Og.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),g=2*(d*i-c*l),_=2*(c*s-h*i);return this.x=i+m*p+h*_-d*g,this.y=s+m*g+d*p-c*_,this.z=l+m*_+c*g-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=ve(this.x,t.x,i.x),this.y=ve(this.y,t.y,i.y),this.z=ve(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=ve(this.x,t,i),this.y=ve(this.y,t,i),this.z=ve(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ve(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return ih.copy(this).projectOnVector(t),this.sub(ih)}reflect(t){return this.sub(ih.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(ve(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ih=new $,Og=new Ts;class fe{constructor(t,i,s,l,c,h,d,m,p){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p)}set(t,i,s,l,c,h,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=s,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],g=s[4],_=s[7],y=s[2],x=s[5],b=s[8],R=l[0],M=l[3],S=l[6],B=l[1],O=l[4],D=l[7],V=l[2],F=l[5],z=l[8];return c[0]=h*R+d*B+m*V,c[3]=h*M+d*O+m*F,c[6]=h*S+d*D+m*z,c[1]=p*R+g*B+_*V,c[4]=p*M+g*O+_*F,c[7]=p*S+g*D+_*z,c[2]=y*R+x*B+b*V,c[5]=y*M+x*O+b*F,c[8]=y*S+x*D+b*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*h*g-i*d*p-s*c*g+s*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=g*h-d*p,y=d*m-g*c,x=p*c-h*m,b=i*_+s*y+l*x;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/b;return t[0]=_*R,t[1]=(l*p-g*s)*R,t[2]=(d*s-l*h)*R,t[3]=y*R,t[4]=(g*i-l*m)*R,t[5]=(l*c-d*i)*R,t[6]=x*R,t[7]=(s*m-p*i)*R,t[8]=(h*i-s*c)*R,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(ah.makeScale(t,i)),this}rotate(t){return this.premultiply(ah.makeRotation(-t)),this}translate(t,i){return this.premultiply(ah.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ah=new fe;function Q0(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Fc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function yM(){const o=Fc("canvas");return o.style.display="block",o}const Pg={};function Wo(o){o in Pg||(Pg[o]=!0,console.warn(o))}function MM(o,t,i){return new Promise(function(s,l){function c(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const zg=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ig=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xM(){const o={enabled:!0,workingColorSpace:Nr,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Fe&&(l.r=oa(l.r),l.g=oa(l.g),l.b=oa(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Fe&&(l.r=wr(l.r),l.g=wr(l.g),l.b=wr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ha?Ic:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Wo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Wo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Nr]:{primaries:t,whitePoint:s,transfer:Ic,toXYZ:zg,fromXYZ:Ig,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ti},outputColorSpaceConfig:{drawingBufferColorSpace:ti}},[ti]:{primaries:t,whitePoint:s,transfer:Fe,toXYZ:zg,fromXYZ:Ig,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ti}}}),o}const we=xM();function oa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function wr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let fr;class EM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{fr===void 0&&(fr=Fc("canvas")),fr.width=t.width,fr.height=t.height;const l=fr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=fr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Fc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=oa(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(oa(i[s]/255)*255):i[s]=oa(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let TM=0;class Ld{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:TM++}),this.uuid=qo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(sh(l[h].image)):c.push(sh(l[h]))}else c=sh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function sh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?EM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bM=0;const rh=new $;class On extends As{constructor(t=On.DEFAULT_IMAGE,i=On.DEFAULT_MAPPING,s=ys,l=ys,c=Ui,h=Ms,d=xi,m=Oi,p=On.DEFAULT_ANISOTROPY,g=Ha){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bM++}),this.uuid=qo(),this.name="",this.source=new Ld(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(rh).x}get height(){return this.source.getSize(rh).y}get depth(){return this.source.getSize(rh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==G0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xh:t.x=t.x-Math.floor(t.x);break;case ys:t.x=t.x<0?0:1;break;case Wh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xh:t.y=t.y-Math.floor(t.y);break;case ys:t.y=t.y<0?0:1;break;case Wh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=G0;On.DEFAULT_ANISOTROPY=1;class $e{constructor(t=0,i=0,s=0,l=1){$e.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],g=m[4],_=m[8],y=m[1],x=m[5],b=m[9],R=m[2],M=m[6],S=m[10];if(Math.abs(g-y)<.01&&Math.abs(_-R)<.01&&Math.abs(b-M)<.01){if(Math.abs(g+y)<.1&&Math.abs(_+R)<.1&&Math.abs(b+M)<.1&&Math.abs(p+x+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(p+1)/2,D=(x+1)/2,V=(S+1)/2,F=(g+y)/4,z=(_+R)/4,Z=(b+M)/4;return O>D&&O>V?O<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(O),l=F/s,c=z/s):D>V?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=F/l,c=Z/l):V<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(V),s=z/c,l=Z/c),this.set(s,l,c,i),this}let B=Math.sqrt((M-b)*(M-b)+(_-R)*(_-R)+(y-g)*(y-g));return Math.abs(B)<.001&&(B=1),this.x=(M-b)/B,this.y=(_-R)/B,this.z=(y-g)/B,this.w=Math.acos((p+x+S-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=ve(this.x,t.x,i.x),this.y=ve(this.y,t.y,i.y),this.z=ve(this.z,t.z,i.z),this.w=ve(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=ve(this.x,t,i),this.y=ve(this.y,t,i),this.z=ve(this.z,t,i),this.w=ve(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ve(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class AM extends As{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ui,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new $e(0,0,t,i),this.scissorTest=!1,this.viewport=new $e(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new On(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Ui,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Ld(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bs extends AM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class J0 extends On{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=ei,this.minFilter=ei,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class RM extends On{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=ei,this.minFilter=ei,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Rs{constructor(t=new $(1/0,1/0,1/0),i=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(gi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(gi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=gi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,gi):gi.fromBufferAttribute(c,h),gi.applyMatrix4(t.matrixWorld),this.expandByPoint(gi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),sc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),sc.copy(s.boundingBox)),sc.applyMatrix4(t.matrixWorld),this.union(sc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,gi),gi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(No),rc.subVectors(this.max,No),hr.subVectors(t.a,No),dr.subVectors(t.b,No),pr.subVectors(t.c,No),Na.subVectors(dr,hr),Oa.subVectors(pr,dr),us.subVectors(hr,pr);let i=[0,-Na.z,Na.y,0,-Oa.z,Oa.y,0,-us.z,us.y,Na.z,0,-Na.x,Oa.z,0,-Oa.x,us.z,0,-us.x,-Na.y,Na.x,0,-Oa.y,Oa.x,0,-us.y,us.x,0];return!oh(i,hr,dr,pr,rc)||(i=[1,0,0,0,1,0,0,0,1],!oh(i,hr,dr,pr,rc))?!1:(oc.crossVectors(Na,Oa),i=[oc.x,oc.y,oc.z],oh(i,hr,dr,pr,rc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ta[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ta[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ta[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ta[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ta[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ta[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ta[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ta[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ta),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ta=[new $,new $,new $,new $,new $,new $,new $,new $],gi=new $,sc=new Rs,hr=new $,dr=new $,pr=new $,Na=new $,Oa=new $,us=new $,No=new $,rc=new $,oc=new $,fs=new $;function oh(o,t,i,s,l){for(let c=0,h=o.length-3;c<=h;c+=3){fs.fromArray(o,c);const d=l.x*Math.abs(fs.x)+l.y*Math.abs(fs.y)+l.z*Math.abs(fs.z),m=t.dot(fs),p=i.dot(fs),g=s.dot(fs);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const CM=new Rs,Oo=new $,lh=new $;class zr{constructor(t=new $,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):CM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Oo.subVectors(t,this.center);const i=Oo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Oo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(lh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Oo.copy(t.center).add(lh)),this.expandByPoint(Oo.copy(t.center).sub(lh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ea=new $,ch=new $,lc=new $,Pa=new $,uh=new $,cc=new $,fh=new $;class Nd{constructor(t=new $,i=new $(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ea)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ea.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ea.copy(this.origin).addScaledVector(this.direction,i),ea.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){ch.copy(t).add(i).multiplyScalar(.5),lc.copy(i).sub(t).normalize(),Pa.copy(this.origin).sub(ch);const c=t.distanceTo(i)*.5,h=-this.direction.dot(lc),d=Pa.dot(this.direction),m=-Pa.dot(lc),p=Pa.lengthSq(),g=Math.abs(1-h*h);let _,y,x,b;if(g>0)if(_=h*m-d,y=h*d-m,b=c*g,_>=0)if(y>=-b)if(y<=b){const R=1/g;_*=R,y*=R,x=_*(_+h*y+2*d)+y*(h*_+y+2*m)+p}else y=c,_=Math.max(0,-(h*y+d)),x=-_*_+y*(y+2*m)+p;else y=-c,_=Math.max(0,-(h*y+d)),x=-_*_+y*(y+2*m)+p;else y<=-b?(_=Math.max(0,-(-h*c+d)),y=_>0?-c:Math.min(Math.max(-c,-m),c),x=-_*_+y*(y+2*m)+p):y<=b?(_=0,y=Math.min(Math.max(-c,-m),c),x=y*(y+2*m)+p):(_=Math.max(0,-(h*c+d)),y=_>0?c:Math.min(Math.max(-c,-m),c),x=-_*_+y*(y+2*m)+p);else y=h>0?-c:c,_=Math.max(0,-(h*y+d)),x=-_*_+y*(y+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(ch).addScaledVector(lc,y),x}intersectSphere(t,i){ea.subVectors(t.center,this.origin);const s=ea.dot(this.direction),l=ea.dot(ea)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,y=this.origin;return p>=0?(s=(t.min.x-y.x)*p,l=(t.max.x-y.x)*p):(s=(t.max.x-y.x)*p,l=(t.min.x-y.x)*p),g>=0?(c=(t.min.y-y.y)*g,h=(t.max.y-y.y)*g):(c=(t.max.y-y.y)*g,h=(t.min.y-y.y)*g),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),_>=0?(d=(t.min.z-y.z)*_,m=(t.max.z-y.z)*_):(d=(t.max.z-y.z)*_,m=(t.min.z-y.z)*_),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ea)!==null}intersectTriangle(t,i,s,l,c){uh.subVectors(i,t),cc.subVectors(s,t),fh.crossVectors(uh,cc);let h=this.direction.dot(fh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Pa.subVectors(this.origin,t);const m=d*this.direction.dot(cc.crossVectors(Pa,cc));if(m<0)return null;const p=d*this.direction.dot(uh.cross(Pa));if(p<0||m+p>h)return null;const g=-d*Pa.dot(fh);return g<0?null:this.at(g/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qe{constructor(t,i,s,l,c,h,d,m,p,g,_,y,x,b,R,M){qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p,g,_,y,x,b,R,M)}set(t,i,s,l,c,h,d,m,p,g,_,y,x,b,R,M){const S=this.elements;return S[0]=t,S[4]=i,S[8]=s,S[12]=l,S[1]=c,S[5]=h,S[9]=d,S[13]=m,S[2]=p,S[6]=g,S[10]=_,S[14]=y,S[3]=x,S[7]=b,S[11]=R,S[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qe().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/mr.setFromMatrixColumn(t,0).length(),c=1/mr.setFromMatrixColumn(t,1).length(),h=1/mr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const y=h*g,x=h*_,b=d*g,R=d*_;i[0]=m*g,i[4]=-m*_,i[8]=p,i[1]=x+b*p,i[5]=y-R*p,i[9]=-d*m,i[2]=R-y*p,i[6]=b+x*p,i[10]=h*m}else if(t.order==="YXZ"){const y=m*g,x=m*_,b=p*g,R=p*_;i[0]=y+R*d,i[4]=b*d-x,i[8]=h*p,i[1]=h*_,i[5]=h*g,i[9]=-d,i[2]=x*d-b,i[6]=R+y*d,i[10]=h*m}else if(t.order==="ZXY"){const y=m*g,x=m*_,b=p*g,R=p*_;i[0]=y-R*d,i[4]=-h*_,i[8]=b+x*d,i[1]=x+b*d,i[5]=h*g,i[9]=R-y*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const y=h*g,x=h*_,b=d*g,R=d*_;i[0]=m*g,i[4]=b*p-x,i[8]=y*p+R,i[1]=m*_,i[5]=R*p+y,i[9]=x*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const y=h*m,x=h*p,b=d*m,R=d*p;i[0]=m*g,i[4]=R-y*_,i[8]=b*_+x,i[1]=_,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=x*_+b,i[10]=y-R*_}else if(t.order==="XZY"){const y=h*m,x=h*p,b=d*m,R=d*p;i[0]=m*g,i[4]=-_,i[8]=p*g,i[1]=y*_+R,i[5]=h*g,i[9]=x*_-b,i[2]=b*_-x,i[6]=d*g,i[10]=R*_+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wM,t,DM)}lookAt(t,i,s){const l=this.elements;return Jn.subVectors(t,i),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),za.crossVectors(s,Jn),za.lengthSq()===0&&(Math.abs(s.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),za.crossVectors(s,Jn)),za.normalize(),uc.crossVectors(Jn,za),l[0]=za.x,l[4]=uc.x,l[8]=Jn.x,l[1]=za.y,l[5]=uc.y,l[9]=Jn.y,l[2]=za.z,l[6]=uc.z,l[10]=Jn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],g=s[1],_=s[5],y=s[9],x=s[13],b=s[2],R=s[6],M=s[10],S=s[14],B=s[3],O=s[7],D=s[11],V=s[15],F=l[0],z=l[4],Z=l[8],w=l[12],C=l[1],G=l[5],et=l[9],lt=l[13],ft=l[2],rt=l[6],N=l[10],q=l[14],j=l[3],vt=l[7],xt=l[11],L=l[15];return c[0]=h*F+d*C+m*ft+p*j,c[4]=h*z+d*G+m*rt+p*vt,c[8]=h*Z+d*et+m*N+p*xt,c[12]=h*w+d*lt+m*q+p*L,c[1]=g*F+_*C+y*ft+x*j,c[5]=g*z+_*G+y*rt+x*vt,c[9]=g*Z+_*et+y*N+x*xt,c[13]=g*w+_*lt+y*q+x*L,c[2]=b*F+R*C+M*ft+S*j,c[6]=b*z+R*G+M*rt+S*vt,c[10]=b*Z+R*et+M*N+S*xt,c[14]=b*w+R*lt+M*q+S*L,c[3]=B*F+O*C+D*ft+V*j,c[7]=B*z+O*G+D*rt+V*vt,c[11]=B*Z+O*et+D*N+V*xt,c[15]=B*w+O*lt+D*q+V*L,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],g=t[2],_=t[6],y=t[10],x=t[14],b=t[3],R=t[7],M=t[11],S=t[15];return b*(+c*m*_-l*p*_-c*d*y+s*p*y+l*d*x-s*m*x)+R*(+i*m*x-i*p*y+c*h*y-l*h*x+l*p*g-c*m*g)+M*(+i*p*_-i*d*x-c*h*_+s*h*x+c*d*g-s*p*g)+S*(-l*d*g-i*m*_+i*d*y+l*h*_-s*h*y+s*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=t[9],y=t[10],x=t[11],b=t[12],R=t[13],M=t[14],S=t[15],B=_*M*p-R*y*p+R*m*x-d*M*x-_*m*S+d*y*S,O=b*y*p-g*M*p-b*m*x+h*M*x+g*m*S-h*y*S,D=g*R*p-b*_*p+b*d*x-h*R*x-g*d*S+h*_*S,V=b*_*m-g*R*m-b*d*y+h*R*y+g*d*M-h*_*M,F=i*B+s*O+l*D+c*V;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/F;return t[0]=B*z,t[1]=(R*y*c-_*M*c-R*l*x+s*M*x+_*l*S-s*y*S)*z,t[2]=(d*M*c-R*m*c+R*l*p-s*M*p-d*l*S+s*m*S)*z,t[3]=(_*m*c-d*y*c-_*l*p+s*y*p+d*l*x-s*m*x)*z,t[4]=O*z,t[5]=(g*M*c-b*y*c+b*l*x-i*M*x-g*l*S+i*y*S)*z,t[6]=(b*m*c-h*M*c-b*l*p+i*M*p+h*l*S-i*m*S)*z,t[7]=(h*y*c-g*m*c+g*l*p-i*y*p-h*l*x+i*m*x)*z,t[8]=D*z,t[9]=(b*_*c-g*R*c-b*s*x+i*R*x+g*s*S-i*_*S)*z,t[10]=(h*R*c-b*d*c+b*s*p-i*R*p-h*s*S+i*d*S)*z,t[11]=(g*d*c-h*_*c-g*s*p+i*_*p+h*s*x-i*d*x)*z,t[12]=V*z,t[13]=(g*R*l-b*_*l+b*s*y-i*R*y-g*s*M+i*_*M)*z,t[14]=(b*d*l-h*R*l-b*s*m+i*R*m+h*s*M-i*d*M)*z,t[15]=(h*_*l-g*d*l+g*s*m-i*_*m-h*s*y+i*d*y)*z,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,d=t.y,m=t.z,p=c*h,g=c*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+s,g*m-l*h,0,p*m-l*d,g*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,g=h+h,_=d+d,y=c*p,x=c*g,b=c*_,R=h*g,M=h*_,S=d*_,B=m*p,O=m*g,D=m*_,V=s.x,F=s.y,z=s.z;return l[0]=(1-(R+S))*V,l[1]=(x+D)*V,l[2]=(b-O)*V,l[3]=0,l[4]=(x-D)*F,l[5]=(1-(y+S))*F,l[6]=(M+B)*F,l[7]=0,l[8]=(b+O)*z,l[9]=(M-B)*z,l[10]=(1-(y+R))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let c=mr.set(l[0],l[1],l[2]).length();const h=mr.set(l[4],l[5],l[6]).length(),d=mr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],vi.copy(this);const p=1/c,g=1/h,_=1/d;return vi.elements[0]*=p,vi.elements[1]*=p,vi.elements[2]*=p,vi.elements[4]*=g,vi.elements[5]*=g,vi.elements[6]*=g,vi.elements[8]*=_,vi.elements[9]*=_,vi.elements[10]*=_,i.setFromRotationMatrix(vi),s.x=c,s.y=h,s.z=d,this}makePerspective(t,i,s,l,c,h,d=Ni,m=!1){const p=this.elements,g=2*c/(i-t),_=2*c/(s-l),y=(i+t)/(i-t),x=(s+l)/(s-l);let b,R;if(m)b=c/(h-c),R=h*c/(h-c);else if(d===Ni)b=-(h+c)/(h-c),R=-2*h*c/(h-c);else if(d===Bc)b=-h/(h-c),R=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=_,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,h,d=Ni,m=!1){const p=this.elements,g=2/(i-t),_=2/(s-l),y=-(i+t)/(i-t),x=-(s+l)/(s-l);let b,R;if(m)b=1/(h-c),R=h/(h-c);else if(d===Ni)b=-2/(h-c),R=-(h+c)/(h-c);else if(d===Bc)b=-1/(h-c),R=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=y,p[1]=0,p[5]=_,p[9]=0,p[13]=x,p[2]=0,p[6]=0,p[10]=b,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const mr=new $,vi=new qe,wM=new $(0,0,0),DM=new $(1,1,1),za=new $,uc=new $,Jn=new $,Bg=new qe,Fg=new Ts;class Pi{constructor(t=0,i=0,s=0,l=Pi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],_=l[2],y=l[6],x=l[10];switch(i){case"XYZ":this._y=Math.asin(ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,x),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(ve(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-ve(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(y,x),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(ve(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,x));break;case"XZY":this._z=Math.asin(-ve(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return Bg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bg,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Fg.setFromEuler(this),this.setFromQuaternion(Fg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pi.DEFAULT_ORDER="XYZ";class $0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let UM=0;const Hg=new $,_r=new Ts,na=new qe,fc=new $,Po=new $,LM=new $,NM=new Ts,Gg=new $(1,0,0),Vg=new $(0,1,0),kg=new $(0,0,1),Xg={type:"added"},OM={type:"removed"},gr={type:"childadded",child:null},hh={type:"childremoved",child:null};class pn extends As{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:UM++}),this.uuid=qo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pn.DEFAULT_UP.clone();const t=new $,i=new Pi,s=new Ts,l=new $(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new qe},normalMatrix:{value:new fe}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return _r.setFromAxisAngle(t,i),this.quaternion.multiply(_r),this}rotateOnWorldAxis(t,i){return _r.setFromAxisAngle(t,i),this.quaternion.premultiply(_r),this}rotateX(t){return this.rotateOnAxis(Gg,t)}rotateY(t){return this.rotateOnAxis(Vg,t)}rotateZ(t){return this.rotateOnAxis(kg,t)}translateOnAxis(t,i){return Hg.copy(t).applyQuaternion(this.quaternion),this.position.add(Hg.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Gg,t)}translateY(t){return this.translateOnAxis(Vg,t)}translateZ(t){return this.translateOnAxis(kg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(na.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?fc.copy(t):fc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?na.lookAt(Po,fc,this.up):na.lookAt(fc,Po,this.up),this.quaternion.setFromRotationMatrix(na),l&&(na.extractRotation(l.matrixWorld),_r.setFromRotationMatrix(na),this.quaternion.premultiply(_r.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Xg),gr.child=t,this.dispatchEvent(gr),gr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(OM),hh.child=t,this.dispatchEvent(hh),hh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),na.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),na.multiply(t.parent.matrixWorld)),t.applyMatrix4(na),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Xg),gr.child=t,this.dispatchEvent(gr),gr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,t,LM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,NM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),g=h(t.images),_=h(t.shapes),y=h(t.skeletons),x=h(t.animations),b=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),y.length>0&&(s.skeletons=y),x.length>0&&(s.animations=x),b.length>0&&(s.nodes=b)}return s.object=l,s;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}pn.DEFAULT_UP=new $(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Si=new $,ia=new $,dh=new $,aa=new $,vr=new $,Sr=new $,Wg=new $,ph=new $,mh=new $,_h=new $,gh=new $e,vh=new $e,Sh=new $e;class Mi{constructor(t=new $,i=new $,s=new $){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Si.subVectors(t,i),l.cross(Si);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Si.subVectors(l,i),ia.subVectors(s,i),dh.subVectors(t,i);const h=Si.dot(Si),d=Si.dot(ia),m=Si.dot(dh),p=ia.dot(ia),g=ia.dot(dh),_=h*p-d*d;if(_===0)return c.set(0,0,0),null;const y=1/_,x=(p*m-d*g)*y,b=(h*g-d*m)*y;return c.set(1-x-b,b,x)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,aa)===null?!1:aa.x>=0&&aa.y>=0&&aa.x+aa.y<=1}static getInterpolation(t,i,s,l,c,h,d,m){return this.getBarycoord(t,i,s,l,aa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,aa.x),m.addScaledVector(h,aa.y),m.addScaledVector(d,aa.z),m)}static getInterpolatedAttribute(t,i,s,l,c,h){return gh.setScalar(0),vh.setScalar(0),Sh.setScalar(0),gh.fromBufferAttribute(t,i),vh.fromBufferAttribute(t,s),Sh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(gh,c.x),h.addScaledVector(vh,c.y),h.addScaledVector(Sh,c.z),h}static isFrontFacing(t,i,s,l){return Si.subVectors(s,i),ia.subVectors(t,i),Si.cross(ia).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Si.subVectors(this.c,this.b),ia.subVectors(this.a,this.b),Si.cross(ia).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Mi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Mi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Mi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Mi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Mi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,d;vr.subVectors(l,s),Sr.subVectors(c,s),ph.subVectors(t,s);const m=vr.dot(ph),p=Sr.dot(ph);if(m<=0&&p<=0)return i.copy(s);mh.subVectors(t,l);const g=vr.dot(mh),_=Sr.dot(mh);if(g>=0&&_<=g)return i.copy(l);const y=m*_-g*p;if(y<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(s).addScaledVector(vr,h);_h.subVectors(t,c);const x=vr.dot(_h),b=Sr.dot(_h);if(b>=0&&x<=b)return i.copy(c);const R=x*p-m*b;if(R<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(s).addScaledVector(Sr,d);const M=g*b-x*_;if(M<=0&&_-g>=0&&x-b>=0)return Wg.subVectors(c,l),d=(_-g)/(_-g+(x-b)),i.copy(l).addScaledVector(Wg,d);const S=1/(M+R+y);return h=R*S,d=y*S,i.copy(s).addScaledVector(vr,h).addScaledVector(Sr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const tv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ia={h:0,s:0,l:0},hc={h:0,s:0,l:0};function yh(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class be{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ti){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,we.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=we.workingColorSpace){return this.r=t,this.g=i,this.b=s,we.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=we.workingColorSpace){if(t=vM(t,1),i=ve(i,0,1),s=ve(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=yh(h,c,t+1/3),this.g=yh(h,c,t),this.b=yh(h,c,t-1/3)}return we.colorSpaceToWorking(this,l),this}setStyle(t,i=ti){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ti){const s=tv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=oa(t.r),this.g=oa(t.g),this.b=oa(t.b),this}copyLinearToSRGB(t){return this.r=wr(t.r),this.g=wr(t.g),this.b=wr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ti){return we.workingToColorSpace(wn.copy(this),t),Math.round(ve(wn.r*255,0,255))*65536+Math.round(ve(wn.g*255,0,255))*256+Math.round(ve(wn.b*255,0,255))}getHexString(t=ti){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=we.workingColorSpace){we.workingToColorSpace(wn.copy(this),i);const s=wn.r,l=wn.g,c=wn.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const _=h-d;switch(p=g<=.5?_/(h+d):_/(2-h-d),h){case s:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-s)/_+2;break;case c:m=(s-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=we.workingColorSpace){return we.workingToColorSpace(wn.copy(this),i),t.r=wn.r,t.g=wn.g,t.b=wn.b,t}getStyle(t=ti){we.workingToColorSpace(wn.copy(this),t);const i=wn.r,s=wn.g,l=wn.b;return t!==ti?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Ia),this.setHSL(Ia.h+t,Ia.s+i,Ia.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Ia),t.getHSL(hc);const s=nh(Ia.h,hc.h,i),l=nh(Ia.s,hc.s,i),c=nh(Ia.l,hc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new be;be.NAMES=tv;let PM=0;class Ir extends As{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:PM++}),this.uuid=qo(),this.name="",this.type="Material",this.blending=Cr,this.side=ka,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nh,this.blendDst=Oh,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ug,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ur,this.stencilZFail=ur,this.stencilZPass=ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Cr&&(s.blending=this.blending),this.side!==ka&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Nh&&(s.blendSrc=this.blendSrc),this.blendDst!==Oh&&(s.blendDst=this.blendDst),this.blendEquation!==vs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Dr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ug&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ur&&(s.stencilFail=this.stencilFail),this.stencilZFail!==ur&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==ur&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ev extends Ir{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=F0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const un=new $,dc=new ce;let zM=0;class di{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=Lg,this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)dc.fromBufferAttribute(this,i),dc.applyMatrix3(t),this.setXY(i,dc.x,dc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.applyMatrix3(t),this.setXYZ(i,un.x,un.y,un.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.applyMatrix4(t),this.setXYZ(i,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.applyNormalMatrix(t),this.setXYZ(i,un.x,un.y,un.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)un.fromBufferAttribute(this,i),un.transformDirection(t),this.setXYZ(i,un.x,un.y,un.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Lo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Gn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Lo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Lo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Lo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Lo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array),l=Gn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array),l=Gn(l,this.array),c=Gn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Lg&&(t.usage=this.usage),t}}class nv extends di{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class iv extends di{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class xs extends di{constructor(t,i,s){super(new Float32Array(t),i,s)}}let IM=0;const fi=new qe,Mh=new pn,yr=new $,$n=new Rs,zo=new Rs,Sn=new $;class la extends As{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:IM++}),this.uuid=qo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Q0(t)?iv:nv)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new fe().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fi.makeRotationFromQuaternion(t),this.applyMatrix4(fi),this}rotateX(t){return fi.makeRotationX(t),this.applyMatrix4(fi),this}rotateY(t){return fi.makeRotationY(t),this.applyMatrix4(fi),this}rotateZ(t){return fi.makeRotationZ(t),this.applyMatrix4(fi),this}translate(t,i,s){return fi.makeTranslation(t,i,s),this.applyMatrix4(fi),this}scale(t,i,s){return fi.makeScale(t,i,s),this.applyMatrix4(fi),this}lookAt(t){return Mh.lookAt(t),Mh.updateMatrix(),this.applyMatrix4(Mh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yr).negate(),this.translate(yr.x,yr.y,yr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new xs(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rs);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];$n.setFromBufferAttribute(c),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zr);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){const s=this.boundingSphere.center;if($n.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];zo.setFromBufferAttribute(d),this.morphTargetsRelative?(Sn.addVectors($n.min,zo.min),$n.expandByPoint(Sn),Sn.addVectors($n.max,zo.max),$n.expandByPoint(Sn)):($n.expandByPoint(zo.min),$n.expandByPoint(zo.max))}$n.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)Sn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Sn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)Sn.fromBufferAttribute(d,p),m&&(yr.fromBufferAttribute(t,p),Sn.add(yr)),l=Math.max(l,s.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new di(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let Z=0;Z<s.count;Z++)d[Z]=new $,m[Z]=new $;const p=new $,g=new $,_=new $,y=new ce,x=new ce,b=new ce,R=new $,M=new $;function S(Z,w,C){p.fromBufferAttribute(s,Z),g.fromBufferAttribute(s,w),_.fromBufferAttribute(s,C),y.fromBufferAttribute(c,Z),x.fromBufferAttribute(c,w),b.fromBufferAttribute(c,C),g.sub(p),_.sub(p),x.sub(y),b.sub(y);const G=1/(x.x*b.y-b.x*x.y);isFinite(G)&&(R.copy(g).multiplyScalar(b.y).addScaledVector(_,-x.y).multiplyScalar(G),M.copy(_).multiplyScalar(x.x).addScaledVector(g,-b.x).multiplyScalar(G),d[Z].add(R),d[w].add(R),d[C].add(R),m[Z].add(M),m[w].add(M),m[C].add(M))}let B=this.groups;B.length===0&&(B=[{start:0,count:t.count}]);for(let Z=0,w=B.length;Z<w;++Z){const C=B[Z],G=C.start,et=C.count;for(let lt=G,ft=G+et;lt<ft;lt+=3)S(t.getX(lt+0),t.getX(lt+1),t.getX(lt+2))}const O=new $,D=new $,V=new $,F=new $;function z(Z){V.fromBufferAttribute(l,Z),F.copy(V);const w=d[Z];O.copy(w),O.sub(V.multiplyScalar(V.dot(w))).normalize(),D.crossVectors(F,w);const G=D.dot(m[Z])<0?-1:1;h.setXYZW(Z,O.x,O.y,O.z,G)}for(let Z=0,w=B.length;Z<w;++Z){const C=B[Z],G=C.start,et=C.count;for(let lt=G,ft=G+et;lt<ft;lt+=3)z(t.getX(lt+0)),z(t.getX(lt+1)),z(t.getX(lt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new di(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let y=0,x=s.count;y<x;y++)s.setXYZ(y,0,0,0);const l=new $,c=new $,h=new $,d=new $,m=new $,p=new $,g=new $,_=new $;if(t)for(let y=0,x=t.count;y<x;y+=3){const b=t.getX(y+0),R=t.getX(y+1),M=t.getX(y+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,M),g.subVectors(h,c),_.subVectors(l,c),g.cross(_),d.fromBufferAttribute(s,b),m.fromBufferAttribute(s,R),p.fromBufferAttribute(s,M),d.add(g),m.add(g),p.add(g),s.setXYZ(b,d.x,d.y,d.z),s.setXYZ(R,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let y=0,x=i.count;y<x;y+=3)l.fromBufferAttribute(i,y+0),c.fromBufferAttribute(i,y+1),h.fromBufferAttribute(i,y+2),g.subVectors(h,c),_.subVectors(l,c),g.cross(_),s.setXYZ(y+0,g.x,g.y,g.z),s.setXYZ(y+1,g.x,g.y,g.z),s.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Sn.fromBufferAttribute(t,i),Sn.normalize(),t.setXYZ(i,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,_=d.normalized,y=new p.constructor(m.length*g);let x=0,b=0;for(let R=0,M=m.length;R<M;R++){d.isInterleavedBufferAttribute?x=m[R]*d.data.stride+d.offset:x=m[R]*g;for(let S=0;S<g;S++)y[b++]=p[x++]}return new di(y,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new la,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,_=p.length;g<_;g++){const y=p[g],x=t(y,s);m.push(x)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,y=p.length;_<y;_++){const x=p[_];g.push(x.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],_=c[p];for(let y=0,x=_.length;y<x;y++)g.push(_[y].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,g=h.length;p<g;p++){const _=h[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yg=new qe,hs=new Nd,pc=new zr,qg=new $,mc=new $,_c=new $,gc=new $,xh=new $,vc=new $,jg=new $,Sc=new $;class Ei extends pn{constructor(t=new la,i=new ev){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){vc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],_=c[m];g!==0&&(xh.fromBufferAttribute(_,t),h?vc.addScaledVector(xh,g):vc.addScaledVector(xh.sub(i),g))}i.add(vc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),pc.copy(s.boundingSphere),pc.applyMatrix4(c),hs.copy(t.ray).recast(t.near),!(pc.containsPoint(hs.origin)===!1&&(hs.intersectSphere(pc,qg)===null||hs.origin.distanceToSquared(qg)>(t.far-t.near)**2))&&(Yg.copy(c).invert(),hs.copy(t.ray).applyMatrix4(Yg),!(s.boundingBox!==null&&hs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,hs)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,y=c.groups,x=c.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,R=y.length;b<R;b++){const M=y[b],S=h[M.materialIndex],B=Math.max(M.start,x.start),O=Math.min(d.count,Math.min(M.start+M.count,x.start+x.count));for(let D=B,V=O;D<V;D+=3){const F=d.getX(D),z=d.getX(D+1),Z=d.getX(D+2);l=yc(this,S,t,s,p,g,_,F,z,Z),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,x.start),R=Math.min(d.count,x.start+x.count);for(let M=b,S=R;M<S;M+=3){const B=d.getX(M),O=d.getX(M+1),D=d.getX(M+2);l=yc(this,h,t,s,p,g,_,B,O,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,R=y.length;b<R;b++){const M=y[b],S=h[M.materialIndex],B=Math.max(M.start,x.start),O=Math.min(m.count,Math.min(M.start+M.count,x.start+x.count));for(let D=B,V=O;D<V;D+=3){const F=D,z=D+1,Z=D+2;l=yc(this,S,t,s,p,g,_,F,z,Z),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,x.start),R=Math.min(m.count,x.start+x.count);for(let M=b,S=R;M<S;M+=3){const B=M,O=M+1,D=M+2;l=yc(this,h,t,s,p,g,_,B,O,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function BM(o,t,i,s,l,c,h,d){let m;if(t.side===kn?m=s.intersectTriangle(h,c,l,!0,d):m=s.intersectTriangle(l,c,h,t.side===ka,d),m===null)return null;Sc.copy(d),Sc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Sc);return p<i.near||p>i.far?null:{distance:p,point:Sc.clone(),object:o}}function yc(o,t,i,s,l,c,h,d,m,p){o.getVertexPosition(d,mc),o.getVertexPosition(m,_c),o.getVertexPosition(p,gc);const g=BM(o,t,i,s,mc,_c,gc,jg);if(g){const _=new $;Mi.getBarycoord(jg,mc,_c,gc,_),l&&(g.uv=Mi.getInterpolatedAttribute(l,d,m,p,_,new ce)),c&&(g.uv1=Mi.getInterpolatedAttribute(c,d,m,p,_,new ce)),h&&(g.normal=Mi.getInterpolatedAttribute(h,d,m,p,_,new $),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const y={a:d,b:m,c:p,normal:new $,materialIndex:0};Mi.getNormal(mc,_c,gc,y.normal),g.face=y,g.barycoord=_}return g}class Br extends la{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],g=[],_=[];let y=0,x=0;b("z","y","x",-1,-1,s,i,t,h,c,0),b("z","y","x",1,-1,s,i,-t,h,c,1),b("x","z","y",1,1,t,s,i,l,h,2),b("x","z","y",1,-1,t,s,-i,l,h,3),b("x","y","z",1,-1,t,i,s,l,c,4),b("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new xs(p,3)),this.setAttribute("normal",new xs(g,3)),this.setAttribute("uv",new xs(_,2));function b(R,M,S,B,O,D,V,F,z,Z,w){const C=D/z,G=V/Z,et=D/2,lt=V/2,ft=F/2,rt=z+1,N=Z+1;let q=0,j=0;const vt=new $;for(let xt=0;xt<N;xt++){const L=xt*G-lt;for(let nt=0;nt<rt;nt++){const yt=nt*C-et;vt[R]=yt*B,vt[M]=L*O,vt[S]=ft,p.push(vt.x,vt.y,vt.z),vt[R]=0,vt[M]=0,vt[S]=F>0?1:-1,g.push(vt.x,vt.y,vt.z),_.push(nt/z),_.push(1-xt/Z),q+=1}}for(let xt=0;xt<Z;xt++)for(let L=0;L<z;L++){const nt=y+L+rt*xt,yt=y+L+rt*(xt+1),bt=y+(L+1)+rt*(xt+1),Nt=y+(L+1)+rt*xt;m.push(nt,yt,Nt),m.push(yt,bt,Nt),j+=6}d.addGroup(x,j,w),x+=j,y+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Br(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Or(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Nn(o){const t={};for(let i=0;i<o.length;i++){const s=Or(o[i]);for(const l in s)t[l]=s[l]}return t}function FM(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function av(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:we.workingColorSpace}const HM={clone:Or,merge:Nn};var GM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,VM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xa extends Ir{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=GM,this.fragmentShader=VM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Or(t.uniforms),this.uniformsGroups=FM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class sv extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=Ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ba=new $,Zg=new ce,Kg=new ce;class hi extends sv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=yd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Pc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return yd*2*Math.atan(Math.tan(Pc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Ba.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ba.x,Ba.y).multiplyScalar(-t/Ba.z),Ba.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ba.x,Ba.y).multiplyScalar(-t/Ba.z)}getViewSize(t,i){return this.getViewBounds(t,Zg,Kg),i.subVectors(Kg,Zg)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Pc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Mr=-90,xr=1;class kM extends pn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new hi(Mr,xr,t,i);l.layers=this.layers,this.add(l);const c=new hi(Mr,xr,t,i);c.layers=this.layers,this.add(c);const h=new hi(Mr,xr,t,i);h.layers=this.layers,this.add(h);const d=new hi(Mr,xr,t,i);d.layers=this.layers,this.add(d);const m=new hi(Mr,xr,t,i);m.layers=this.layers,this.add(m);const p=new hi(Mr,xr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===Ni)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Bc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,g]=this.children,_=t.getRenderTarget(),y=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const R=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=R,t.setRenderTarget(s,5,l),t.render(i,g),t.setRenderTarget(_,y,x),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class rv extends On{constructor(t=[],i=Ur,s,l,c,h,d,m,p,g){super(t,i,s,l,c,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class XM extends bs{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new rv(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Br(5,5,5),c=new Xa({name:"CubemapFromEquirect",uniforms:Or(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:kn,blending:Ga});c.uniforms.tEquirect.value=i;const h=new Ei(l,c),d=i.minFilter;return i.minFilter===Ms&&(i.minFilter=Ui),new kM(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}class Mc extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const WM={type:"move"};class Eh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const R of t.hand.values()){const M=i.getJointPose(R,s),S=this._getHandJoint(p,R);M!==null&&(S.matrix.fromArray(M.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=M.radius),S.visible=M!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],y=g.position.distanceTo(_.position),x=.02,b=.005;p.inputState.pinching&&y>x+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&y<=x-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(WM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Mc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class Od{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new be(t),this.density=i}clone(){return new Od(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class YM extends pn{constructor(){super(),this.isScene=!0,window.__galleryCaptureScene?.(this),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pi,this.environmentIntensity=1,this.environmentRotation=new Pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class qM extends On{constructor(t=null,i=1,s=1,l,c,h,d,m,p=ei,g=ei,_,y){super(null,h,d,m,p,g,l,c,_,y),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qg extends di{constructor(t,i,s,l=1){super(t,i,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Er=new qe,Jg=new qe,xc=[],$g=new Rs,jM=new qe,Io=new Ei,Bo=new zr;class ZM extends Ei{constructor(t,i,s){super(t,i),this.isInstancedMesh=!0,this.instanceMatrix=new Qg(new Float32Array(s*16),16),this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<s;l++)this.setMatrixAt(l,jM)}computeBoundingBox(){const t=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new Rs),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,Er),$g.copy(t.boundingBox).applyMatrix4(Er),this.boundingBox.union($g)}computeBoundingSphere(){const t=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new zr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,Er),Bo.copy(t.boundingSphere).applyMatrix4(Er),this.boundingSphere.union(Bo)}copy(t,i){return super.copy(t,i),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,i){i.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,i){i.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,i){const s=i.morphTargetInfluences,l=this.morphTexture.source.data.data,c=s.length+1,h=t*c+1;for(let d=0;d<s.length;d++)s[d]=l[h+d]}raycast(t,i){const s=this.matrixWorld,l=this.count;if(Io.geometry=this.geometry,Io.material=this.material,Io.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bo.copy(this.boundingSphere),Bo.applyMatrix4(s),t.ray.intersectsSphere(Bo)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,Er),Jg.multiplyMatrices(s,Er),Io.matrixWorld=Jg,Io.raycast(t,xc);for(let h=0,d=xc.length;h<d;h++){const m=xc[h];m.instanceId=c,m.object=this,i.push(m)}xc.length=0}}setColorAt(t,i){this.instanceColor===null&&(this.instanceColor=new Qg(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,i){i.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,i){const s=i.morphTargetInfluences,l=s.length+1;this.morphTexture===null&&(this.morphTexture=new qM(new Float32Array(l*this.count),l,this.count,Cd,Li));const c=this.morphTexture.source.data.data;let h=0;for(let p=0;p<s.length;p++)h+=s[p];const d=this.geometry.morphTargetsRelative?1:1-h,m=l*t;c[m]=d,c.set(s,m+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Th=new $,KM=new $,QM=new fe;class Fa{constructor(t=new $(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Th.subVectors(s,i).cross(KM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Th),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||QM.getNormalMatrix(t),l=this.coplanarPoint(Th).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ds=new zr,JM=new ce(.5,.5),Ec=new $;class Pd{constructor(t=new Fa,i=new Fa,s=new Fa,l=new Fa,c=new Fa,h=new Fa){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Ni,s=!1){const l=this.planes,c=t.elements,h=c[0],d=c[1],m=c[2],p=c[3],g=c[4],_=c[5],y=c[6],x=c[7],b=c[8],R=c[9],M=c[10],S=c[11],B=c[12],O=c[13],D=c[14],V=c[15];if(l[0].setComponents(p-h,x-g,S-b,V-B).normalize(),l[1].setComponents(p+h,x+g,S+b,V+B).normalize(),l[2].setComponents(p+d,x+_,S+R,V+O).normalize(),l[3].setComponents(p-d,x-_,S-R,V-O).normalize(),s)l[4].setComponents(m,y,M,D).normalize(),l[5].setComponents(p-m,x-y,S-M,V-D).normalize();else if(l[4].setComponents(p-m,x-y,S-M,V-D).normalize(),i===Ni)l[5].setComponents(p+m,x+y,S+M,V+D).normalize();else if(i===Bc)l[5].setComponents(m,y,M,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ds.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ds.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ds)}intersectsSprite(t){ds.center.set(0,0,0);const i=JM.distanceTo(t.center);return ds.radius=.7071067811865476+i,ds.applyMatrix4(t.matrixWorld),this.intersectsSphere(ds)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Ec.x=l.normal.x>0?t.max.x:t.min.x,Ec.y=l.normal.y>0?t.max.y:t.min.y,Ec.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Ec)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ov extends Ir{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const t0=new qe,Md=new Nd,Tc=new zr,bc=new $;class $M extends pn{constructor(t=new la,i=new ov){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Tc.copy(s.boundingSphere),Tc.applyMatrix4(l),Tc.radius+=c,t.ray.intersectsSphere(Tc)===!1)return;t0.copy(l).invert(),Md.copy(t.ray).applyMatrix4(t0);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=s.index,_=s.attributes.position;if(p!==null){const y=Math.max(0,h.start),x=Math.min(p.count,h.start+h.count);for(let b=y,R=x;b<R;b++){const M=p.getX(b);bc.fromBufferAttribute(_,M),e0(bc,M,m,l,t,i,this)}}else{const y=Math.max(0,h.start),x=Math.min(_.count,h.start+h.count);for(let b=y,R=x;b<R;b++)bc.fromBufferAttribute(_,b),e0(bc,b,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function e0(o,t,i,s,l,c,h){const d=Md.distanceSqToPoint(o);if(d<i){const m=new $;Md.closestPointToPoint(o,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:h})}}class lv extends On{constructor(t,i,s=Es,l,c,h,d=ei,m=ei,p,g=ko,_=1){if(g!==ko&&g!==Xo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:t,height:i,depth:_};super(y,l,c,h,d,m,g,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ld(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class cv extends On{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Gc extends la{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,g=m+1,_=t/d,y=i/m,x=[],b=[],R=[],M=[];for(let S=0;S<g;S++){const B=S*y-h;for(let O=0;O<p;O++){const D=O*_-c;b.push(D,-B,0),R.push(0,0,1),M.push(O/d),M.push(1-S/m)}}for(let S=0;S<m;S++)for(let B=0;B<d;B++){const O=B+p*S,D=B+p*(S+1),V=B+1+p*(S+1),F=B+1+p*S;x.push(O,D,F),x.push(D,V,F)}this.setIndex(x),this.setAttribute("position",new xs(b,3)),this.setAttribute("normal",new xs(R,3)),this.setAttribute("uv",new xs(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gc(t.width,t.height,t.widthSegments,t.heightSegments)}}class tx extends Ir{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Z0,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ex extends Ir{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class nx extends Ir{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class uv extends pn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new be(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class ix extends uv{constructor(t,i,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new be(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}}const bh=new qe,n0=new $,i0=new $;class ax{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.mapType=Oi,this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pd,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;n0.setFromMatrixPosition(t.matrixWorld),i.position.copy(n0),i0.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(i0),i.updateMatrixWorld(),bh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(bh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class fv extends sv{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class sx extends ax{constructor(){super(new fv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class a0 extends uv{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.target=new pn,this.shadow=new sx}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class rx extends hi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class ox{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}class s0{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ve(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(ve(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class lx extends As{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function r0(o,t,i,s){const l=cx(s);switch(i){case Y0:return o*t;case Cd:return o*t/l.components*l.byteLength;case wd:return o*t/l.components*l.byteLength;case j0:return o*t*2/l.components*l.byteLength;case Dd:return o*t*2/l.components*l.byteLength;case q0:return o*t*3/l.components*l.byteLength;case xi:return o*t*4/l.components*l.byteLength;case Ud:return o*t*4/l.components*l.byteLength;case Uc:case Lc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Nc:case Oc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case qh:case Zh:return Math.max(o,16)*Math.max(t,8)/4;case Yh:case jh:return Math.max(o,8)*Math.max(t,8)/2;case Kh:case Qh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Jh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case $h:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case td:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case ed:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case nd:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case id:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case ad:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case sd:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case rd:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case od:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case ld:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case cd:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case ud:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case fd:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case hd:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case dd:case pd:case md:return Math.ceil(o/4)*Math.ceil(t/4)*16;case _d:case gd:return Math.ceil(o/4)*Math.ceil(t/4)*8;case vd:case Sd:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function cx(o){switch(o){case Oi:case V0:return{byteLength:1,components:1};case Go:case k0:case Yo:return{byteLength:2,components:1};case Ad:case Rd:return{byteLength:2,components:4};case Es:case bd:case Li:return{byteLength:4,components:1};case X0:case W0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Td}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Td);function hv(){let o=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function ux(o){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,_=p.byteLength,y=o.createBuffer();o.bindBuffer(m,y),o.bufferData(m,p,g),d.onUploadCallback();let x;if(p instanceof Float32Array)x=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)x=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?x=o.HALF_FLOAT:x=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)x=o.SHORT;else if(p instanceof Uint32Array)x=o.UNSIGNED_INT;else if(p instanceof Int32Array)x=o.INT;else if(p instanceof Int8Array)x=o.BYTE;else if(p instanceof Uint8Array)x=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)x=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:x,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function s(d,m,p){const g=m.array,_=m.updateRanges;if(o.bindBuffer(p,d),_.length===0)o.bufferSubData(p,0,g);else{_.sort((x,b)=>x.start-b.start);let y=0;for(let x=1;x<_.length;x++){const b=_[y],R=_[x];R.start<=b.start+b.count+1?b.count=Math.max(b.count,R.start+R.count-b.start):(++y,_[y]=R)}_.length=y+1;for(let x=0,b=_.length;x<b;x++){const R=_[x];o.bufferSubData(p,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(o.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var fx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hx=`#ifdef USE_ALPHAHASH
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
#endif`,dx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,px=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_x=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gx=`#ifdef USE_AOMAP
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
#endif`,vx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sx=`#ifdef USE_BATCHING
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
#endif`,yx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ex=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Tx=`#ifdef USE_IRIDESCENCE
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
#endif`,bx=`#ifdef USE_BUMPMAP
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
#endif`,Ax=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Rx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ux=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Nx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ox=`#define PI 3.141592653589793
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
} // validated`,Px=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zx=`vec3 transformedNormal = objectNormal;
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
#endif`,Ix=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kx=`#ifdef USE_ENVMAP
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
#endif`,Xx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wx=`#ifdef USE_ENVMAP
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
#endif`,Yx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qx=`#ifdef USE_ENVMAP
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
#endif`,jx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jx=`#ifdef USE_GRADIENTMAP
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
}`,$x=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,eE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nE=`uniform bool receiveShadow;
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
#endif`,iE=`#ifdef USE_ENVMAP
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
#endif`,aE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,oE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lE=`PhysicalMaterial material;
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
#endif`,cE=`struct PhysicalMaterial {
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
}`,uE=`
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
#endif`,fE=`#if defined( RE_IndirectDiffuse )
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
#endif`,hE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_E=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,SE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yE=`#if defined( USE_POINTS_UV )
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
#endif`,ME=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,EE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,TE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AE=`#ifdef USE_MORPHTARGETS
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
#endif`,RE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,DE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,NE=`#ifdef USE_NORMALMAP
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
#endif`,OE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,PE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,IE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,BE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,FE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,HE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,GE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,VE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,XE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,WE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,YE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ZE=`float getShadowMask() {
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
}`,KE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QE=`#ifdef USE_SKINNING
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
#endif`,JE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$E=`#ifdef USE_SKINNING
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
#endif`,tT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,aT=`#ifdef USE_TRANSMISSION
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
#endif`,sT=`#ifdef USE_TRANSMISSION
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
#endif`,rT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fT=`uniform sampler2D t2D;
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
}`,hT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,pT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_T=`#include <common>
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
}`,gT=`#if DEPTH_PACKING == 3200
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
}`,vT=`#define DISTANCE
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
}`,ST=`#define DISTANCE
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
}`,yT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,MT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xT=`uniform float scale;
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
}`,ET=`uniform vec3 diffuse;
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
}`,TT=`#include <common>
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
}`,bT=`uniform vec3 diffuse;
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
}`,AT=`#define LAMBERT
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
}`,RT=`#define LAMBERT
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
}`,CT=`#define MATCAP
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
}`,wT=`#define MATCAP
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
}`,DT=`#define NORMAL
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
}`,UT=`#define NORMAL
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
}`,LT=`#define PHONG
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
}`,NT=`#define PHONG
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
}`,OT=`#define STANDARD
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
}`,PT=`#define STANDARD
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
}`,zT=`#define TOON
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
}`,IT=`#define TOON
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
}`,BT=`uniform float size;
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
}`,FT=`uniform vec3 diffuse;
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
}`,HT=`#include <common>
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
}`,GT=`uniform vec3 color;
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
}`,VT=`uniform float rotation;
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
}`,kT=`uniform vec3 diffuse;
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
}`,he={alphahash_fragment:fx,alphahash_pars_fragment:hx,alphamap_fragment:dx,alphamap_pars_fragment:px,alphatest_fragment:mx,alphatest_pars_fragment:_x,aomap_fragment:gx,aomap_pars_fragment:vx,batching_pars_vertex:Sx,batching_vertex:yx,begin_vertex:Mx,beginnormal_vertex:xx,bsdfs:Ex,iridescence_fragment:Tx,bumpmap_pars_fragment:bx,clipping_planes_fragment:Ax,clipping_planes_pars_fragment:Rx,clipping_planes_pars_vertex:Cx,clipping_planes_vertex:wx,color_fragment:Dx,color_pars_fragment:Ux,color_pars_vertex:Lx,color_vertex:Nx,common:Ox,cube_uv_reflection_fragment:Px,defaultnormal_vertex:zx,displacementmap_pars_vertex:Ix,displacementmap_vertex:Bx,emissivemap_fragment:Fx,emissivemap_pars_fragment:Hx,colorspace_fragment:Gx,colorspace_pars_fragment:Vx,envmap_fragment:kx,envmap_common_pars_fragment:Xx,envmap_pars_fragment:Wx,envmap_pars_vertex:Yx,envmap_physical_pars_fragment:iE,envmap_vertex:qx,fog_vertex:jx,fog_pars_vertex:Zx,fog_fragment:Kx,fog_pars_fragment:Qx,gradientmap_pars_fragment:Jx,lightmap_pars_fragment:$x,lights_lambert_fragment:tE,lights_lambert_pars_fragment:eE,lights_pars_begin:nE,lights_toon_fragment:aE,lights_toon_pars_fragment:sE,lights_phong_fragment:rE,lights_phong_pars_fragment:oE,lights_physical_fragment:lE,lights_physical_pars_fragment:cE,lights_fragment_begin:uE,lights_fragment_maps:fE,lights_fragment_end:hE,logdepthbuf_fragment:dE,logdepthbuf_pars_fragment:pE,logdepthbuf_pars_vertex:mE,logdepthbuf_vertex:_E,map_fragment:gE,map_pars_fragment:vE,map_particle_fragment:SE,map_particle_pars_fragment:yE,metalnessmap_fragment:ME,metalnessmap_pars_fragment:xE,morphinstance_vertex:EE,morphcolor_vertex:TE,morphnormal_vertex:bE,morphtarget_pars_vertex:AE,morphtarget_vertex:RE,normal_fragment_begin:CE,normal_fragment_maps:wE,normal_pars_fragment:DE,normal_pars_vertex:UE,normal_vertex:LE,normalmap_pars_fragment:NE,clearcoat_normal_fragment_begin:OE,clearcoat_normal_fragment_maps:PE,clearcoat_pars_fragment:zE,iridescence_pars_fragment:IE,opaque_fragment:BE,packing:FE,premultiplied_alpha_fragment:HE,project_vertex:GE,dithering_fragment:VE,dithering_pars_fragment:kE,roughnessmap_fragment:XE,roughnessmap_pars_fragment:WE,shadowmap_pars_fragment:YE,shadowmap_pars_vertex:qE,shadowmap_vertex:jE,shadowmask_pars_fragment:ZE,skinbase_vertex:KE,skinning_pars_vertex:QE,skinning_vertex:JE,skinnormal_vertex:$E,specularmap_fragment:tT,specularmap_pars_fragment:eT,tonemapping_fragment:nT,tonemapping_pars_fragment:iT,transmission_fragment:aT,transmission_pars_fragment:sT,uv_pars_fragment:rT,uv_pars_vertex:oT,uv_vertex:lT,worldpos_vertex:cT,background_vert:uT,background_frag:fT,backgroundCube_vert:hT,backgroundCube_frag:dT,cube_vert:pT,cube_frag:mT,depth_vert:_T,depth_frag:gT,distanceRGBA_vert:vT,distanceRGBA_frag:ST,equirect_vert:yT,equirect_frag:MT,linedashed_vert:xT,linedashed_frag:ET,meshbasic_vert:TT,meshbasic_frag:bT,meshlambert_vert:AT,meshlambert_frag:RT,meshmatcap_vert:CT,meshmatcap_frag:wT,meshnormal_vert:DT,meshnormal_frag:UT,meshphong_vert:LT,meshphong_frag:NT,meshphysical_vert:OT,meshphysical_frag:PT,meshtoon_vert:zT,meshtoon_frag:IT,points_vert:BT,points_frag:FT,shadow_vert:HT,shadow_frag:GT,sprite_vert:VT,sprite_frag:kT},Lt={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},Di={basic:{uniforms:Nn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:Nn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new be(0)}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:Nn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:Nn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:Nn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new be(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:Nn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:Nn([Lt.points,Lt.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:Nn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:Nn([Lt.common,Lt.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:Nn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:Nn([Lt.sprite,Lt.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distanceRGBA:{uniforms:Nn([Lt.common,Lt.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distanceRGBA_vert,fragmentShader:he.distanceRGBA_frag},shadow:{uniforms:Nn([Lt.lights,Lt.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};Di.physical={uniforms:Nn([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};const Ac={r:0,b:0,g:0},ps=new Pi,XT=new qe;function WT(o,t,i,s,l,c,h){const d=new be(0);let m=c===!0?0:1,p,g,_=null,y=0,x=null;function b(O){let D=O.isScene===!0?O.background:null;return D&&D.isTexture&&(D=(O.backgroundBlurriness>0?i:t).get(D)),D}function R(O){let D=!1;const V=b(O);V===null?S(d,m):V&&V.isColor&&(S(V,1),D=!0);const F=o.xr.getEnvironmentBlendMode();F==="additive"?s.buffers.color.setClear(0,0,0,1,h):F==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(O,D){const V=b(D);V&&(V.isCubeTexture||V.mapping===Hc)?(g===void 0&&(g=new Ei(new Br(1,1,1),new Xa({name:"BackgroundCubeMaterial",uniforms:Or(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(F,z,Z){this.matrixWorld.copyPosition(Z.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),ps.copy(D.backgroundRotation),ps.x*=-1,ps.y*=-1,ps.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),g.material.uniforms.envMap.value=V,g.material.uniforms.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(XT.makeRotationFromEuler(ps)),g.material.toneMapped=we.getTransfer(V.colorSpace)!==Fe,(_!==V||y!==V.version||x!==o.toneMapping)&&(g.material.needsUpdate=!0,_=V,y=V.version,x=o.toneMapping),g.layers.enableAll(),O.unshift(g,g.geometry,g.material,0,0,null)):V&&V.isTexture&&(p===void 0&&(p=new Ei(new Gc(2,2),new Xa({name:"BackgroundMaterial",uniforms:Or(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:ka,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=V,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=we.getTransfer(V.colorSpace)!==Fe,V.matrixAutoUpdate===!0&&V.updateMatrix(),p.material.uniforms.uvTransform.value.copy(V.matrix),(_!==V||y!==V.version||x!==o.toneMapping)&&(p.material.needsUpdate=!0,_=V,y=V.version,x=o.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function S(O,D){O.getRGB(Ac,av(o)),s.buffers.color.setClear(Ac.r,Ac.g,Ac.b,D,h)}function B(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(O,D=1){d.set(O),m=D,S(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(O){m=O,S(d,m)},render:R,addToRenderList:M,dispose:B}}function YT(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=y(null);let c=l,h=!1;function d(C,G,et,lt,ft){let rt=!1;const N=_(lt,et,G);c!==N&&(c=N,p(c.object)),rt=x(C,lt,et,ft),rt&&b(C,lt,et,ft),ft!==null&&t.update(ft,o.ELEMENT_ARRAY_BUFFER),(rt||h)&&(h=!1,D(C,G,et,lt),ft!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(ft).buffer))}function m(){return o.createVertexArray()}function p(C){return o.bindVertexArray(C)}function g(C){return o.deleteVertexArray(C)}function _(C,G,et){const lt=et.wireframe===!0;let ft=s[C.id];ft===void 0&&(ft={},s[C.id]=ft);let rt=ft[G.id];rt===void 0&&(rt={},ft[G.id]=rt);let N=rt[lt];return N===void 0&&(N=y(m()),rt[lt]=N),N}function y(C){const G=[],et=[],lt=[];for(let ft=0;ft<i;ft++)G[ft]=0,et[ft]=0,lt[ft]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:et,attributeDivisors:lt,object:C,attributes:{},index:null}}function x(C,G,et,lt){const ft=c.attributes,rt=G.attributes;let N=0;const q=et.getAttributes();for(const j in q)if(q[j].location>=0){const xt=ft[j];let L=rt[j];if(L===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(L=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(L=C.instanceColor)),xt===void 0||xt.attribute!==L||L&&xt.data!==L.data)return!0;N++}return c.attributesNum!==N||c.index!==lt}function b(C,G,et,lt){const ft={},rt=G.attributes;let N=0;const q=et.getAttributes();for(const j in q)if(q[j].location>=0){let xt=rt[j];xt===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(xt=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(xt=C.instanceColor));const L={};L.attribute=xt,xt&&xt.data&&(L.data=xt.data),ft[j]=L,N++}c.attributes=ft,c.attributesNum=N,c.index=lt}function R(){const C=c.newAttributes;for(let G=0,et=C.length;G<et;G++)C[G]=0}function M(C){S(C,0)}function S(C,G){const et=c.newAttributes,lt=c.enabledAttributes,ft=c.attributeDivisors;et[C]=1,lt[C]===0&&(o.enableVertexAttribArray(C),lt[C]=1),ft[C]!==G&&(o.vertexAttribDivisor(C,G),ft[C]=G)}function B(){const C=c.newAttributes,G=c.enabledAttributes;for(let et=0,lt=G.length;et<lt;et++)G[et]!==C[et]&&(o.disableVertexAttribArray(et),G[et]=0)}function O(C,G,et,lt,ft,rt,N){N===!0?o.vertexAttribIPointer(C,G,et,ft,rt):o.vertexAttribPointer(C,G,et,lt,ft,rt)}function D(C,G,et,lt){R();const ft=lt.attributes,rt=et.getAttributes(),N=G.defaultAttributeValues;for(const q in rt){const j=rt[q];if(j.location>=0){let vt=ft[q];if(vt===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(vt=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(vt=C.instanceColor)),vt!==void 0){const xt=vt.normalized,L=vt.itemSize,nt=t.get(vt);if(nt===void 0)continue;const yt=nt.buffer,bt=nt.type,Nt=nt.bytesPerElement,it=bt===o.INT||bt===o.UNSIGNED_INT||vt.gpuType===bd;if(vt.isInterleavedBufferAttribute){const ct=vt.data,wt=ct.stride,It=vt.offset;if(ct.isInstancedInterleavedBuffer){for(let kt=0;kt<j.locationSize;kt++)S(j.location+kt,ct.meshPerAttribute);C.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let kt=0;kt<j.locationSize;kt++)M(j.location+kt);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let kt=0;kt<j.locationSize;kt++)O(j.location+kt,L/j.locationSize,bt,xt,wt*Nt,(It+L/j.locationSize*kt)*Nt,it)}else{if(vt.isInstancedBufferAttribute){for(let ct=0;ct<j.locationSize;ct++)S(j.location+ct,vt.meshPerAttribute);C.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let ct=0;ct<j.locationSize;ct++)M(j.location+ct);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let ct=0;ct<j.locationSize;ct++)O(j.location+ct,L/j.locationSize,bt,xt,L*Nt,L/j.locationSize*ct*Nt,it)}}else if(N!==void 0){const xt=N[q];if(xt!==void 0)switch(xt.length){case 2:o.vertexAttrib2fv(j.location,xt);break;case 3:o.vertexAttrib3fv(j.location,xt);break;case 4:o.vertexAttrib4fv(j.location,xt);break;default:o.vertexAttrib1fv(j.location,xt)}}}}B()}function V(){Z();for(const C in s){const G=s[C];for(const et in G){const lt=G[et];for(const ft in lt)g(lt[ft].object),delete lt[ft];delete G[et]}delete s[C]}}function F(C){if(s[C.id]===void 0)return;const G=s[C.id];for(const et in G){const lt=G[et];for(const ft in lt)g(lt[ft].object),delete lt[ft];delete G[et]}delete s[C.id]}function z(C){for(const G in s){const et=s[G];if(et[C.id]===void 0)continue;const lt=et[C.id];for(const ft in lt)g(lt[ft].object),delete lt[ft];delete et[C.id]}}function Z(){w(),h=!0,c!==l&&(c=l,p(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Z,resetDefaultState:w,dispose:V,releaseStatesOfGeometry:F,releaseStatesOfProgram:z,initAttributes:R,enableAttribute:M,disableUnusedAttributes:B}}function qT(o,t,i){let s;function l(p){s=p}function c(p,g){o.drawArrays(s,p,g),i.update(g,s,1)}function h(p,g,_){_!==0&&(o.drawArraysInstanced(s,p,g,_),i.update(g,s,_))}function d(p,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,_);let x=0;for(let b=0;b<_;b++)x+=g[b];i.update(x,s,1)}function m(p,g,_,y){if(_===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let b=0;b<p.length;b++)h(p[b],g[b],y[b]);else{x.multiDrawArraysInstancedWEBGL(s,p,0,g,0,y,0,_);let b=0;for(let R=0;R<_;R++)b+=g[R]*y[R];i.update(b,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function jT(o,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(z){return!(z!==xi&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const Z=z===Yo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==Oi&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Li&&!Z)}function m(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),S=o.getParameter(o.MAX_VERTEX_ATTRIBS),B=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),O=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),V=b>0,F=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:y,maxTextures:x,maxVertexTextures:b,maxTextureSize:R,maxCubemapSize:M,maxAttributes:S,maxVertexUniforms:B,maxVaryings:O,maxFragmentUniforms:D,vertexTextures:V,maxSamples:F}}function ZT(o){const t=this;let i=null,s=0,l=!1,c=!1;const h=new Fa,d=new fe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,y){const x=_.length!==0||y||s!==0||l;return l=y,s=_.length,x},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,y){i=g(_,y,0)},this.setState=function(_,y,x){const b=_.clippingPlanes,R=_.clipIntersection,M=_.clipShadows,S=o.get(_);if(!l||b===null||b.length===0||c&&!M)c?g(null):p();else{const B=c?0:s,O=B*4;let D=S.clippingState||null;m.value=D,D=g(b,y,O,x);for(let V=0;V!==O;++V)D[V]=i[V];S.clippingState=D,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=B}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(_,y,x,b){const R=_!==null?_.length:0;let M=null;if(R!==0){if(M=m.value,b!==!0||M===null){const S=x+R*4,B=y.matrixWorldInverse;d.getNormalMatrix(B),(M===null||M.length<S)&&(M=new Float32Array(S));for(let O=0,D=x;O!==R;++O,D+=4)h.copy(_[O]).applyMatrix4(B,d),h.normal.toArray(M,D),M[D+3]=h.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,M}}function KT(o){let t=new WeakMap;function i(h,d){return d===Vh?h.mapping=Ur:d===kh&&(h.mapping=Lr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Vh||d===kh)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new XM(m.height);return p.fromEquirectangularTexture(o,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const Ar=4,o0=[.125,.215,.35,.446,.526,.582],Ss=20,Ah=new fv,l0=new be;let Rh=null,Ch=0,wh=0,Dh=!1;const gs=(1+Math.sqrt(5))/2,Tr=1/gs,c0=[new $(-gs,Tr,0),new $(gs,Tr,0),new $(-Tr,0,gs),new $(Tr,0,gs),new $(0,gs,-Tr),new $(0,gs,Tr),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)],QT=new $;class u0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=QT}=c;Rh=this._renderer.getRenderTarget(),Ch=this._renderer.getActiveCubeFace(),wh=this._renderer.getActiveMipmapLevel(),Dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=d0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=h0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Rh,Ch,wh),this._renderer.xr.enabled=Dh,t.scissorTest=!1,Rc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ur||t.mapping===Lr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Rh=this._renderer.getRenderTarget(),Ch=this._renderer.getActiveCubeFace(),wh=this._renderer.getActiveMipmapLevel(),Dh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Ui,minFilter:Ui,generateMipmaps:!1,type:Yo,format:xi,colorSpace:Nr,depthBuffer:!1},l=f0(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=f0(t,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=JT(c)),this._blurMaterial=$T(c,t,i)}return l}_compileMaterial(t){const i=new Ei(this._lodPlanes[0],t);this._renderer.compile(i,Ah)}_sceneToCubeUV(t,i,s,l,c){const m=new hi(90,1,i,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,y=_.autoClear,x=_.toneMapping;_.getClearColor(l0),_.toneMapping=Va,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null));const R=new ev({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),M=new Ei(new Br,R);let S=!1;const B=t.background;B?B.isColor&&(R.color.copy(B),t.background=null,S=!0):(R.color.copy(l0),S=!0);for(let O=0;O<6;O++){const D=O%3;D===0?(m.up.set(0,p[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[O],c.y,c.z)):D===1?(m.up.set(0,0,p[O]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[O],c.z)):(m.up.set(0,p[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[O]));const V=this._cubeSize;Rc(l,D*V,O>2?V:0,V,V),_.setRenderTarget(l),S&&_.render(M,m),_.render(t,m)}M.geometry.dispose(),M.material.dispose(),_.toneMapping=x,_.autoClear=y,t.background=B}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Ur||t.mapping===Lr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=d0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=h0());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new Ei(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;Rc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Ah)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=c0[(l-c-1)%c0.length];this._blur(t,c-1,c,h,d)}i.autoClear=s}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new Ei(this._lodPlanes[l],p),y=p.uniforms,x=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*x):2*Math.PI/(2*Ss-1),R=c/b,M=isFinite(c)?1+Math.floor(g*R):Ss;M>Ss&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Ss}`);const S=[];let B=0;for(let z=0;z<Ss;++z){const Z=z/R,w=Math.exp(-Z*Z/2);S.push(w),z===0?B+=w:z<M&&(B+=2*w)}for(let z=0;z<S.length;z++)S[z]=S[z]/B;y.envMap.value=t.texture,y.samples.value=M,y.weights.value=S,y.latitudinal.value=h==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:O}=this;y.dTheta.value=b,y.mipInt.value=O-s;const D=this._sizeLods[l],V=3*D*(l>O-Ar?l-O+Ar:0),F=4*(this._cubeSize-D);Rc(i,V,F,3*D,2*D),m.setRenderTarget(i),m.render(_,Ah)}}function JT(o){const t=[],i=[],s=[];let l=o;const c=o-Ar+1+o0.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-Ar?m=o0[h-o+Ar-1]:h===0&&(m=0),s.push(m);const p=1/(d-2),g=-p,_=1+p,y=[g,g,_,g,_,_,g,g,_,_,g,_],x=6,b=6,R=3,M=2,S=1,B=new Float32Array(R*b*x),O=new Float32Array(M*b*x),D=new Float32Array(S*b*x);for(let F=0;F<x;F++){const z=F%3*2/3-1,Z=F>2?0:-1,w=[z,Z,0,z+2/3,Z,0,z+2/3,Z+1,0,z,Z,0,z+2/3,Z+1,0,z,Z+1,0];B.set(w,R*b*F),O.set(y,M*b*F);const C=[F,F,F,F,F,F];D.set(C,S*b*F)}const V=new la;V.setAttribute("position",new di(B,R)),V.setAttribute("uv",new di(O,M)),V.setAttribute("faceIndex",new di(D,S)),t.push(V),l>Ar&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function f0(o,t,i){const s=new bs(o,t,i);return s.texture.mapping=Hc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Rc(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function $T(o,t,i){const s=new Float32Array(Ss),l=new $(0,1,0);return new Xa({name:"SphericalGaussianBlur",defines:{n:Ss,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:zd(),fragmentShader:`

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
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function h0(){return new Xa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zd(),fragmentShader:`

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
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function d0(){return new Xa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ga,depthTest:!1,depthWrite:!1})}function zd(){return`

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
	`}function tb(o){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===Vh||m===kh,g=m===Ur||m===Lr;if(p||g){let _=t.get(d);const y=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return i===null&&(i=new u0(o)),_=p?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{const x=d.image;return p&&x&&x.height>0||g&&x&&l(x)?(i===null&&(i=new u0(o)),_=p?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function eb(o){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Wo("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function nb(o,t,i,s){const l={},c=new WeakMap;function h(_){const y=_.target;y.index!==null&&t.remove(y.index);for(const b in y.attributes)t.remove(y.attributes[b]);y.removeEventListener("dispose",h),delete l[y.id];const x=c.get(y);x&&(t.remove(x),c.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(_,y){return l[y.id]===!0||(y.addEventListener("dispose",h),l[y.id]=!0,i.memory.geometries++),y}function m(_){const y=_.attributes;for(const x in y)t.update(y[x],o.ARRAY_BUFFER)}function p(_){const y=[],x=_.index,b=_.attributes.position;let R=0;if(x!==null){const B=x.array;R=x.version;for(let O=0,D=B.length;O<D;O+=3){const V=B[O+0],F=B[O+1],z=B[O+2];y.push(V,F,F,z,z,V)}}else if(b!==void 0){const B=b.array;R=b.version;for(let O=0,D=B.length/3-1;O<D;O+=3){const V=O+0,F=O+1,z=O+2;y.push(V,F,F,z,z,V)}}else return;const M=new(Q0(y)?iv:nv)(y,1);M.version=R;const S=c.get(_);S&&t.remove(S),c.set(_,M)}function g(_){const y=c.get(_);if(y){const x=_.index;x!==null&&y.version<x.version&&p(_)}else p(_);return c.get(_)}return{get:d,update:m,getWireframeAttribute:g}}function ib(o,t,i){let s;function l(y){s=y}let c,h;function d(y){c=y.type,h=y.bytesPerElement}function m(y,x){o.drawElements(s,x,c,y*h),i.update(x,s,1)}function p(y,x,b){b!==0&&(o.drawElementsInstanced(s,x,c,y*h,b),i.update(x,s,b))}function g(y,x,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,x,0,c,y,0,b);let M=0;for(let S=0;S<b;S++)M+=x[S];i.update(M,s,1)}function _(y,x,b,R){if(b===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let S=0;S<y.length;S++)p(y[S]/h,x[S],R[S]);else{M.multiDrawElementsInstancedWEBGL(s,x,0,c,y,0,R,0,b);let S=0;for(let B=0;B<b;B++)S+=x[B]*R[B];i.update(S,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function ab(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function sb(o,t,i){const s=new WeakMap,l=new $e;function c(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let y=s.get(d);if(y===void 0||y.count!==_){let C=function(){Z.dispose(),s.delete(d),d.removeEventListener("dispose",C)};var x=C;y!==void 0&&y.texture.dispose();const b=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],B=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let D=0;b===!0&&(D=1),R===!0&&(D=2),M===!0&&(D=3);let V=d.attributes.position.count*D,F=1;V>t.maxTextureSize&&(F=Math.ceil(V/t.maxTextureSize),V=t.maxTextureSize);const z=new Float32Array(V*F*4*_),Z=new J0(z,V,F,_);Z.type=Li,Z.needsUpdate=!0;const w=D*4;for(let G=0;G<_;G++){const et=S[G],lt=B[G],ft=O[G],rt=V*F*4*G;for(let N=0;N<et.count;N++){const q=N*w;b===!0&&(l.fromBufferAttribute(et,N),z[rt+q+0]=l.x,z[rt+q+1]=l.y,z[rt+q+2]=l.z,z[rt+q+3]=0),R===!0&&(l.fromBufferAttribute(lt,N),z[rt+q+4]=l.x,z[rt+q+5]=l.y,z[rt+q+6]=l.z,z[rt+q+7]=0),M===!0&&(l.fromBufferAttribute(ft,N),z[rt+q+8]=l.x,z[rt+q+9]=l.y,z[rt+q+10]=l.z,z[rt+q+11]=ft.itemSize===4?l.w:1)}}y={count:_,texture:Z,size:new ce(V,F)},s.set(d,y),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let b=0;for(let M=0;M<p.length;M++)b+=p[M];const R=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",R),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}return{update:c}}function rb(o,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,g=m.geometry,_=t.get(m,g);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return _}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const dv=new On,p0=new lv(1,1),pv=new J0,mv=new RM,_v=new rv,m0=[],_0=[],g0=new Float32Array(16),v0=new Float32Array(9),S0=new Float32Array(4);function Fr(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let c=m0[l];if(c===void 0&&(c=new Float32Array(l),m0[l]=c),t!==0){s.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(c,d)}return c}function mn(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function _n(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function Vc(o,t){let i=_0[t];i===void 0&&(i=new Int32Array(t),_0[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function ob(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function lb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;o.uniform2fv(this.addr,t),_n(i,t)}}function cb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(mn(i,t))return;o.uniform3fv(this.addr,t),_n(i,t)}}function ub(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;o.uniform4fv(this.addr,t),_n(i,t)}}function fb(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(mn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),_n(i,t)}else{if(mn(i,s))return;S0.set(s),o.uniformMatrix2fv(this.addr,!1,S0),_n(i,s)}}function hb(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(mn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),_n(i,t)}else{if(mn(i,s))return;v0.set(s),o.uniformMatrix3fv(this.addr,!1,v0),_n(i,s)}}function db(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(mn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),_n(i,t)}else{if(mn(i,s))return;g0.set(s),o.uniformMatrix4fv(this.addr,!1,g0),_n(i,s)}}function pb(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function mb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;o.uniform2iv(this.addr,t),_n(i,t)}}function _b(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(mn(i,t))return;o.uniform3iv(this.addr,t),_n(i,t)}}function gb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;o.uniform4iv(this.addr,t),_n(i,t)}}function vb(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function Sb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;o.uniform2uiv(this.addr,t),_n(i,t)}}function yb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(mn(i,t))return;o.uniform3uiv(this.addr,t),_n(i,t)}}function Mb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;o.uniform4uiv(this.addr,t),_n(i,t)}}function xb(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(p0.compareFunction=K0,c=p0):c=dv,i.setTexture2D(t||c,l)}function Eb(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||mv,l)}function Tb(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||_v,l)}function bb(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||pv,l)}function Ab(o){switch(o){case 5126:return ob;case 35664:return lb;case 35665:return cb;case 35666:return ub;case 35674:return fb;case 35675:return hb;case 35676:return db;case 5124:case 35670:return pb;case 35667:case 35671:return mb;case 35668:case 35672:return _b;case 35669:case 35673:return gb;case 5125:return vb;case 36294:return Sb;case 36295:return yb;case 36296:return Mb;case 35678:case 36198:case 36298:case 36306:case 35682:return xb;case 35679:case 36299:case 36307:return Eb;case 35680:case 36300:case 36308:case 36293:return Tb;case 36289:case 36303:case 36311:case 36292:return bb}}function Rb(o,t){o.uniform1fv(this.addr,t)}function Cb(o,t){const i=Fr(t,this.size,2);o.uniform2fv(this.addr,i)}function wb(o,t){const i=Fr(t,this.size,3);o.uniform3fv(this.addr,i)}function Db(o,t){const i=Fr(t,this.size,4);o.uniform4fv(this.addr,i)}function Ub(o,t){const i=Fr(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function Lb(o,t){const i=Fr(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function Nb(o,t){const i=Fr(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function Ob(o,t){o.uniform1iv(this.addr,t)}function Pb(o,t){o.uniform2iv(this.addr,t)}function zb(o,t){o.uniform3iv(this.addr,t)}function Ib(o,t){o.uniform4iv(this.addr,t)}function Bb(o,t){o.uniform1uiv(this.addr,t)}function Fb(o,t){o.uniform2uiv(this.addr,t)}function Hb(o,t){o.uniform3uiv(this.addr,t)}function Gb(o,t){o.uniform4uiv(this.addr,t)}function Vb(o,t,i){const s=this.cache,l=t.length,c=Vc(i,l);mn(s,c)||(o.uniform1iv(this.addr,c),_n(s,c));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||dv,c[h])}function kb(o,t,i){const s=this.cache,l=t.length,c=Vc(i,l);mn(s,c)||(o.uniform1iv(this.addr,c),_n(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||mv,c[h])}function Xb(o,t,i){const s=this.cache,l=t.length,c=Vc(i,l);mn(s,c)||(o.uniform1iv(this.addr,c),_n(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||_v,c[h])}function Wb(o,t,i){const s=this.cache,l=t.length,c=Vc(i,l);mn(s,c)||(o.uniform1iv(this.addr,c),_n(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||pv,c[h])}function Yb(o){switch(o){case 5126:return Rb;case 35664:return Cb;case 35665:return wb;case 35666:return Db;case 35674:return Ub;case 35675:return Lb;case 35676:return Nb;case 5124:case 35670:return Ob;case 35667:case 35671:return Pb;case 35668:case 35672:return zb;case 35669:case 35673:return Ib;case 5125:return Bb;case 36294:return Fb;case 36295:return Hb;case 36296:return Gb;case 35678:case 36198:case 36298:case 36306:case 35682:return Vb;case 35679:case 36299:case 36307:return kb;case 35680:case 36300:case 36308:case 36293:return Xb;case 36289:case 36303:case 36311:case 36292:return Wb}}class qb{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=Ab(i.type)}}class jb{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Yb(i.type)}}class Zb{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const Uh=/(\w+)(\])?(\[|\.)?/g;function y0(o,t){o.seq.push(t),o.map[t.id]=t}function Kb(o,t,i){const s=o.name,l=s.length;for(Uh.lastIndex=0;;){const c=Uh.exec(s),h=Uh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){y0(i,p===void 0?new qb(d,o,t):new jb(d,o,t));break}else{let _=i.map[d];_===void 0&&(_=new Zb(d),y0(i,_)),i=_}}}class zc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=t.getActiveUniform(i,l),h=t.getUniformLocation(i,c.name);Kb(c,h,this)}}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function M0(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const Qb=37297;let Jb=0;function $b(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const x0=new fe;function t1(o){we._getMatrix(x0,we.workingColorSpace,o);const t=`mat3( ${x0.elements.map(i=>i.toFixed(4))} )`;switch(we.getTransfer(o)){case Ic:return[t,"LinearTransferOETF"];case Fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function E0(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),c=(o.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+$b(o.getShaderSource(t),d)}else return c}function e1(o,t){const i=t1(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function n1(o,t){let i;switch(t){case eM:i="Linear";break;case nM:i="Reinhard";break;case iM:i="Cineon";break;case H0:i="ACESFilmic";break;case sM:i="AgX";break;case rM:i="Neutral";break;case aM:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Cc=new $;function i1(){we.getLuminanceCoefficients(Cc);const o=Cc.x.toFixed(4),t=Cc.y.toFixed(4),i=Cc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function a1(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ho).join(`
`)}function s1(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function r1(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=o.getActiveAttrib(t,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function Ho(o){return o!==""}function T0(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function b0(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const o1=/^[ \t]*#include +<([\w\d./]+)>/gm;function xd(o){return o.replace(o1,c1)}const l1=new Map;function c1(o,t){let i=he[t];if(i===void 0){const s=l1.get(t);if(s!==void 0)i=he[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return xd(i)}const u1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function A0(o){return o.replace(u1,f1)}function f1(o,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function R0(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function h1(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===I0?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===B0?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===sa&&(t="SHADOWMAP_TYPE_VSM"),t}function d1(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Ur:case Lr:t="ENVMAP_TYPE_CUBE";break;case Hc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function p1(o){let t="ENVMAP_MODE_REFLECTION";return o.envMap&&o.envMapMode===Lr&&(t="ENVMAP_MODE_REFRACTION"),t}function m1(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case F0:t="ENVMAP_BLENDING_MULTIPLY";break;case $y:t="ENVMAP_BLENDING_MIX";break;case tM:t="ENVMAP_BLENDING_ADD";break}return t}function _1(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function g1(o,t,i,s){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=h1(i),p=d1(i),g=p1(i),_=m1(i),y=_1(i),x=a1(i),b=s1(c),R=l.createProgram();let M,S,B=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Ho).join(`
`),M.length>0&&(M+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Ho).join(`
`),S.length>0&&(S+=`
`)):(M=[R0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ho).join(`
`),S=[R0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Va?"#define TONE_MAPPING":"",i.toneMapping!==Va?he.tonemapping_pars_fragment:"",i.toneMapping!==Va?n1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,e1("linearToOutputTexel",i.outputColorSpace),i1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ho).join(`
`)),h=xd(h),h=T0(h,i),h=b0(h,i),d=xd(d),d=T0(d,i),d=b0(d,i),h=A0(h),d=A0(d),i.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,M=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,S=["#define varying in",i.glslVersion===Ng?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Ng?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const O=B+M+h,D=B+S+d,V=M0(l,l.VERTEX_SHADER,O),F=M0(l,l.FRAGMENT_SHADER,D);l.attachShader(R,V),l.attachShader(R,F),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function z(G){if(o.debug.checkShaderErrors){const et=l.getProgramInfoLog(R)||"",lt=l.getShaderInfoLog(V)||"",ft=l.getShaderInfoLog(F)||"",rt=et.trim(),N=lt.trim(),q=ft.trim();let j=!0,vt=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(j=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,R,V,F);else{const xt=E0(l,V,"vertex"),L=E0(l,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+rt+`
`+xt+`
`+L)}else rt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",rt):(N===""||q==="")&&(vt=!1);vt&&(G.diagnostics={runnable:j,programLog:rt,vertexShader:{log:N,prefix:M},fragmentShader:{log:q,prefix:S}})}l.deleteShader(V),l.deleteShader(F),Z=new zc(l,R),w=r1(l,R)}let Z;this.getUniforms=function(){return Z===void 0&&z(this),Z};let w;this.getAttributes=function(){return w===void 0&&z(this),w};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(R,Qb)),C},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Jb++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=V,this.fragmentShader=F,this}let v1=0;class S1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new y1(t),i.set(t,s)),s}}class y1{constructor(t){this.id=v1++,this.code=t,this.usedTimes=0}}function M1(o,t,i,s,l,c,h){const d=new $0,m=new S1,p=new Set,g=[],_=l.logarithmicDepthBuffer,y=l.vertexTextures;let x=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(w){return p.add(w),w===0?"uv":`uv${w}`}function M(w,C,G,et,lt){const ft=et.fog,rt=lt.geometry,N=w.isMeshStandardMaterial?et.environment:null,q=(w.isMeshStandardMaterial?i:t).get(w.envMap||N),j=q&&q.mapping===Hc?q.image.height:null,vt=b[w.type];w.precision!==null&&(x=l.getMaxPrecision(w.precision),x!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",x,"instead."));const xt=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,L=xt!==void 0?xt.length:0;let nt=0;rt.morphAttributes.position!==void 0&&(nt=1),rt.morphAttributes.normal!==void 0&&(nt=2),rt.morphAttributes.color!==void 0&&(nt=3);let yt,bt,Nt,it;if(vt){const Ee=Di[vt];yt=Ee.vertexShader,bt=Ee.fragmentShader}else yt=w.vertexShader,bt=w.fragmentShader,m.update(w),Nt=m.getVertexShaderID(w),it=m.getFragmentShaderID(w);const ct=o.getRenderTarget(),wt=o.state.buffers.depth.getReversed(),It=lt.isInstancedMesh===!0,kt=lt.isBatchedMesh===!0,de=!!w.map,an=!!w.matcap,I=!!q,Ae=!!w.aoMap,ne=!!w.lightMap,$t=!!w.bumpMap,Xt=!!w.normalMap,Ge=!!w.displacementMap,Vt=!!w.emissiveMap,ae=!!w.metalnessMap,Ke=!!w.roughnessMap,Ze=w.anisotropy>0,U=w.clearcoat>0,E=w.dispersion>0,J=w.iridescence>0,dt=w.sheen>0,St=w.transmission>0,ut=Ze&&!!w.anisotropyMap,jt=U&&!!w.clearcoatMap,At=U&&!!w.clearcoatNormalMap,Yt=U&&!!w.clearcoatRoughnessMap,qt=J&&!!w.iridescenceMap,Et=J&&!!w.iridescenceThicknessMap,Rt=dt&&!!w.sheenColorMap,Zt=dt&&!!w.sheenRoughnessMap,Pt=!!w.specularMap,Dt=!!w.specularColorMap,re=!!w.specularIntensityMap,k=St&&!!w.transmissionMap,Tt=St&&!!w.thicknessMap,Ct=!!w.gradientMap,zt=!!w.alphaMap,Mt=w.alphaTest>0,_t=!!w.alphaHash,Bt=!!w.extensions;let ie=Va;w.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(ie=o.toneMapping);const Ne={shaderID:vt,shaderType:w.type,shaderName:w.name,vertexShader:yt,fragmentShader:bt,defines:w.defines,customVertexShaderID:Nt,customFragmentShaderID:it,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:x,batching:kt,batchingColor:kt&&lt._colorsTexture!==null,instancing:It,instancingColor:It&&lt.instanceColor!==null,instancingMorph:It&&lt.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:ct===null?o.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:Nr,alphaToCoverage:!!w.alphaToCoverage,map:de,matcap:an,envMap:I,envMapMode:I&&q.mapping,envMapCubeUVHeight:j,aoMap:Ae,lightMap:ne,bumpMap:$t,normalMap:Xt,displacementMap:y&&Ge,emissiveMap:Vt,normalMapObjectSpace:Xt&&w.normalMapType===uM,normalMapTangentSpace:Xt&&w.normalMapType===Z0,metalnessMap:ae,roughnessMap:Ke,anisotropy:Ze,anisotropyMap:ut,clearcoat:U,clearcoatMap:jt,clearcoatNormalMap:At,clearcoatRoughnessMap:Yt,dispersion:E,iridescence:J,iridescenceMap:qt,iridescenceThicknessMap:Et,sheen:dt,sheenColorMap:Rt,sheenRoughnessMap:Zt,specularMap:Pt,specularColorMap:Dt,specularIntensityMap:re,transmission:St,transmissionMap:k,thicknessMap:Tt,gradientMap:Ct,opaque:w.transparent===!1&&w.blending===Cr&&w.alphaToCoverage===!1,alphaMap:zt,alphaTest:Mt,alphaHash:_t,combine:w.combine,mapUv:de&&R(w.map.channel),aoMapUv:Ae&&R(w.aoMap.channel),lightMapUv:ne&&R(w.lightMap.channel),bumpMapUv:$t&&R(w.bumpMap.channel),normalMapUv:Xt&&R(w.normalMap.channel),displacementMapUv:Ge&&R(w.displacementMap.channel),emissiveMapUv:Vt&&R(w.emissiveMap.channel),metalnessMapUv:ae&&R(w.metalnessMap.channel),roughnessMapUv:Ke&&R(w.roughnessMap.channel),anisotropyMapUv:ut&&R(w.anisotropyMap.channel),clearcoatMapUv:jt&&R(w.clearcoatMap.channel),clearcoatNormalMapUv:At&&R(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Yt&&R(w.clearcoatRoughnessMap.channel),iridescenceMapUv:qt&&R(w.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&R(w.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&R(w.sheenColorMap.channel),sheenRoughnessMapUv:Zt&&R(w.sheenRoughnessMap.channel),specularMapUv:Pt&&R(w.specularMap.channel),specularColorMapUv:Dt&&R(w.specularColorMap.channel),specularIntensityMapUv:re&&R(w.specularIntensityMap.channel),transmissionMapUv:k&&R(w.transmissionMap.channel),thicknessMapUv:Tt&&R(w.thicknessMap.channel),alphaMapUv:zt&&R(w.alphaMap.channel),vertexTangents:!!rt.attributes.tangent&&(Xt||Ze),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,pointsUvs:lt.isPoints===!0&&!!rt.attributes.uv&&(de||zt),fog:!!ft,useFog:w.fog===!0,fogExp2:!!ft&&ft.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:wt,skinning:lt.isSkinnedMesh===!0,morphTargets:rt.morphAttributes.position!==void 0,morphNormals:rt.morphAttributes.normal!==void 0,morphColors:rt.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:nt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&G.length>0,shadowMapType:o.shadowMap.type,toneMapping:ie,decodeVideoTexture:de&&w.map.isVideoTexture===!0&&we.getTransfer(w.map.colorSpace)===Fe,decodeVideoTextureEmissive:Vt&&w.emissiveMap.isVideoTexture===!0&&we.getTransfer(w.emissiveMap.colorSpace)===Fe,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ra,flipSided:w.side===kn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Bt&&w.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&w.extensions.multiDraw===!0||kt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ne.vertexUv1s=p.has(1),Ne.vertexUv2s=p.has(2),Ne.vertexUv3s=p.has(3),p.clear(),Ne}function S(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const G in w.defines)C.push(G),C.push(w.defines[G]);return w.isRawShaderMaterial===!1&&(B(C,w),O(C,w),C.push(o.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function B(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function O(w,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),C.gradientMap&&d.enable(22),w.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),w.push(d.mask)}function D(w){const C=b[w.type];let G;if(C){const et=Di[C];G=HM.clone(et.uniforms)}else G=w.uniforms;return G}function V(w,C){let G;for(let et=0,lt=g.length;et<lt;et++){const ft=g[et];if(ft.cacheKey===C){G=ft,++G.usedTimes;break}}return G===void 0&&(G=new g1(o,C,w,c),g.push(G)),G}function F(w){if(--w.usedTimes===0){const C=g.indexOf(w);g[C]=g[g.length-1],g.pop(),w.destroy()}}function z(w){m.remove(w)}function Z(){m.dispose()}return{getParameters:M,getProgramCacheKey:S,getUniforms:D,acquireProgram:V,releaseProgram:F,releaseShaderCache:z,programs:g,dispose:Z}}function x1(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function c(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function E1(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function C0(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function w0(){const o=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(_,y,x,b,R,M){let S=o[t];return S===void 0?(S={id:_.id,object:_,geometry:y,material:x,groupOrder:b,renderOrder:_.renderOrder,z:R,group:M},o[t]=S):(S.id=_.id,S.object=_,S.geometry=y,S.material=x,S.groupOrder=b,S.renderOrder=_.renderOrder,S.z=R,S.group=M),t++,S}function d(_,y,x,b,R,M){const S=h(_,y,x,b,R,M);x.transmission>0?s.push(S):x.transparent===!0?l.push(S):i.push(S)}function m(_,y,x,b,R,M){const S=h(_,y,x,b,R,M);x.transmission>0?s.unshift(S):x.transparent===!0?l.unshift(S):i.unshift(S)}function p(_,y){i.length>1&&i.sort(_||E1),s.length>1&&s.sort(y||C0),l.length>1&&l.sort(y||C0)}function g(){for(let _=t,y=o.length;_<y;_++){const x=o[_];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:g,sort:p}}function T1(){let o=new WeakMap;function t(s,l){const c=o.get(s);let h;return c===void 0?(h=new w0,o.set(s,[h])):l>=c.length?(h=new w0,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function b1(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new $,color:new be};break;case"SpotLight":i={position:new $,direction:new $,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new $,color:new be,distance:0,decay:0};break;case"HemisphereLight":i={direction:new $,skyColor:new be,groundColor:new be};break;case"RectAreaLight":i={color:new be,position:new $,halfWidth:new $,halfHeight:new $};break}return o[t.id]=i,i}}}function A1(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let R1=0;function C1(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function w1(o){const t=new b1,i=A1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new $);const l=new $,c=new qe,h=new qe;function d(p){let g=0,_=0,y=0;for(let w=0;w<9;w++)s.probe[w].set(0,0,0);let x=0,b=0,R=0,M=0,S=0,B=0,O=0,D=0,V=0,F=0,z=0;p.sort(C1);for(let w=0,C=p.length;w<C;w++){const G=p[w],et=G.color,lt=G.intensity,ft=G.distance,rt=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)g+=et.r*lt,_+=et.g*lt,y+=et.b*lt;else if(G.isLightProbe){for(let N=0;N<9;N++)s.probe[N].addScaledVector(G.sh.coefficients[N],lt);z++}else if(G.isDirectionalLight){const N=t.get(G);if(N.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const q=G.shadow,j=i.get(G);j.shadowIntensity=q.intensity,j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,s.directionalShadow[x]=j,s.directionalShadowMap[x]=rt,s.directionalShadowMatrix[x]=G.shadow.matrix,B++}s.directional[x]=N,x++}else if(G.isSpotLight){const N=t.get(G);N.position.setFromMatrixPosition(G.matrixWorld),N.color.copy(et).multiplyScalar(lt),N.distance=ft,N.coneCos=Math.cos(G.angle),N.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),N.decay=G.decay,s.spot[R]=N;const q=G.shadow;if(G.map&&(s.spotLightMap[V]=G.map,V++,q.updateMatrices(G),G.castShadow&&F++),s.spotLightMatrix[R]=q.matrix,G.castShadow){const j=i.get(G);j.shadowIntensity=q.intensity,j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,s.spotShadow[R]=j,s.spotShadowMap[R]=rt,D++}R++}else if(G.isRectAreaLight){const N=t.get(G);N.color.copy(et).multiplyScalar(lt),N.halfWidth.set(G.width*.5,0,0),N.halfHeight.set(0,G.height*.5,0),s.rectArea[M]=N,M++}else if(G.isPointLight){const N=t.get(G);if(N.color.copy(G.color).multiplyScalar(G.intensity),N.distance=G.distance,N.decay=G.decay,G.castShadow){const q=G.shadow,j=i.get(G);j.shadowIntensity=q.intensity,j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,j.shadowCameraNear=q.camera.near,j.shadowCameraFar=q.camera.far,s.pointShadow[b]=j,s.pointShadowMap[b]=rt,s.pointShadowMatrix[b]=G.shadow.matrix,O++}s.point[b]=N,b++}else if(G.isHemisphereLight){const N=t.get(G);N.skyColor.copy(G.color).multiplyScalar(lt),N.groundColor.copy(G.groundColor).multiplyScalar(lt),s.hemi[S]=N,S++}}M>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Lt.LTC_FLOAT_1,s.rectAreaLTC2=Lt.LTC_FLOAT_2):(s.rectAreaLTC1=Lt.LTC_HALF_1,s.rectAreaLTC2=Lt.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=y;const Z=s.hash;(Z.directionalLength!==x||Z.pointLength!==b||Z.spotLength!==R||Z.rectAreaLength!==M||Z.hemiLength!==S||Z.numDirectionalShadows!==B||Z.numPointShadows!==O||Z.numSpotShadows!==D||Z.numSpotMaps!==V||Z.numLightProbes!==z)&&(s.directional.length=x,s.spot.length=R,s.rectArea.length=M,s.point.length=b,s.hemi.length=S,s.directionalShadow.length=B,s.directionalShadowMap.length=B,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=B,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=D+V-F,s.spotLightMap.length=V,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=z,Z.directionalLength=x,Z.pointLength=b,Z.spotLength=R,Z.rectAreaLength=M,Z.hemiLength=S,Z.numDirectionalShadows=B,Z.numPointShadows=O,Z.numSpotShadows=D,Z.numSpotMaps=V,Z.numLightProbes=z,s.version=R1++)}function m(p,g){let _=0,y=0,x=0,b=0,R=0;const M=g.matrixWorldInverse;for(let S=0,B=p.length;S<B;S++){const O=p[S];if(O.isDirectionalLight){const D=s.directional[_];D.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),_++}else if(O.isSpotLight){const D=s.spot[x];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(M),D.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),x++}else if(O.isRectAreaLight){const D=s.rectArea[b];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(M),h.identity(),c.copy(O.matrixWorld),c.premultiply(M),h.extractRotation(c),D.halfWidth.set(O.width*.5,0,0),D.halfHeight.set(0,O.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),b++}else if(O.isPointLight){const D=s.point[y];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(M),y++}else if(O.isHemisphereLight){const D=s.hemi[R];D.direction.setFromMatrixPosition(O.matrixWorld),D.direction.transformDirection(M),R++}}}return{setup:d,setupView:m,state:s}}function D0(o){const t=new w1(o),i=[],s=[];function l(g){p.camera=g,i.length=0,s.length=0}function c(g){i.push(g)}function h(g){s.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function D1(o){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new D0(o),t.set(l,[d])):c>=h.length?(d=new D0(o),h.push(d)):d=h[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const U1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,L1=`uniform sampler2D shadow_pass;
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
}`;function N1(o,t,i){let s=new Pd;const l=new ce,c=new ce,h=new $e,d=new ex({depthPacking:cM}),m=new nx,p={},g=i.maxTextureSize,_={[ka]:kn,[kn]:ka,[ra]:ra},y=new Xa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:U1,fragmentShader:L1}),x=y.clone();x.defines.HORIZONTAL_PASS=1;const b=new la;b.setAttribute("position",new di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Ei(b,y),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=I0;let S=this.type;this.render=function(F,z,Z){if(window.__galleryCaptureScene)return;if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||F.length===0)return;const w=o.getRenderTarget(),C=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),et=o.state;et.setBlending(Ga),et.buffers.depth.getReversed()===!0?et.buffers.color.setClear(0,0,0,0):et.buffers.color.setClear(1,1,1,1),et.buffers.depth.setTest(!0),et.setScissorTest(!1);const lt=S!==sa&&this.type===sa,ft=S===sa&&this.type!==sa;for(let rt=0,N=F.length;rt<N;rt++){const q=F[rt],j=q.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;l.copy(j.mapSize);const vt=j.getFrameExtents();if(l.multiply(vt),c.copy(j.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/vt.x),l.x=c.x*vt.x,j.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/vt.y),l.y=c.y*vt.y,j.mapSize.y=c.y)),j.map===null||lt===!0||ft===!0){const L=this.type!==sa?{minFilter:ei,magFilter:ei}:{};j.map!==null&&j.map.dispose(),j.map=new bs(l.x,l.y,L),j.map.texture.name=q.name+".shadowMap",j.camera.updateProjectionMatrix()}o.setRenderTarget(j.map),o.clear();const xt=j.getViewportCount();for(let L=0;L<xt;L++){const nt=j.getViewport(L);h.set(c.x*nt.x,c.y*nt.y,c.x*nt.z,c.y*nt.w),et.viewport(h),j.updateMatrices(q,L),s=j.getFrustum(),D(z,Z,j.camera,q,this.type)}j.isPointLightShadow!==!0&&this.type===sa&&B(j,Z),j.needsUpdate=!1}S=this.type,M.needsUpdate=!1,o.setRenderTarget(w,C,G)};function B(F,z){const Z=t.update(R);y.defines.VSM_SAMPLES!==F.blurSamples&&(y.defines.VSM_SAMPLES=F.blurSamples,x.defines.VSM_SAMPLES=F.blurSamples,y.needsUpdate=!0,x.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new bs(l.x,l.y)),y.uniforms.shadow_pass.value=F.map.texture,y.uniforms.resolution.value=F.mapSize,y.uniforms.radius.value=F.radius,o.setRenderTarget(F.mapPass),o.clear(),o.renderBufferDirect(z,null,Z,y,R,null),x.uniforms.shadow_pass.value=F.mapPass.texture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,o.setRenderTarget(F.map),o.clear(),o.renderBufferDirect(z,null,Z,x,R,null)}function O(F,z,Z,w){let C=null;const G=Z.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(G!==void 0)C=G;else if(C=Z.isPointLight===!0?m:d,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const et=C.uuid,lt=z.uuid;let ft=p[et];ft===void 0&&(ft={},p[et]=ft);let rt=ft[lt];rt===void 0&&(rt=C.clone(),ft[lt]=rt,z.addEventListener("dispose",V)),C=rt}if(C.visible=z.visible,C.wireframe=z.wireframe,w===sa?C.side=z.shadowSide!==null?z.shadowSide:z.side:C.side=z.shadowSide!==null?z.shadowSide:_[z.side],C.alphaMap=z.alphaMap,C.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,C.map=z.map,C.clipShadows=z.clipShadows,C.clippingPlanes=z.clippingPlanes,C.clipIntersection=z.clipIntersection,C.displacementMap=z.displacementMap,C.displacementScale=z.displacementScale,C.displacementBias=z.displacementBias,C.wireframeLinewidth=z.wireframeLinewidth,C.linewidth=z.linewidth,Z.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const et=o.properties.get(C);et.light=Z}return C}function D(F,z,Z,w,C){if(F.visible===!1)return;if(F.layers.test(z.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&C===sa)&&(!F.frustumCulled||s.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,F.matrixWorld);const lt=t.update(F),ft=F.material;if(Array.isArray(ft)){const rt=lt.groups;for(let N=0,q=rt.length;N<q;N++){const j=rt[N],vt=ft[j.materialIndex];if(vt&&vt.visible){const xt=O(F,vt,w,C);F.onBeforeShadow(o,F,z,Z,lt,xt,j),o.renderBufferDirect(Z,null,lt,xt,F,j),F.onAfterShadow(o,F,z,Z,lt,xt,j)}}}else if(ft.visible){const rt=O(F,ft,w,C);F.onBeforeShadow(o,F,z,Z,lt,rt,null),o.renderBufferDirect(Z,null,lt,rt,F,null),F.onAfterShadow(o,F,z,Z,lt,rt,null)}}const et=F.children;for(let lt=0,ft=et.length;lt<ft;lt++)D(et[lt],z,Z,w,C)}function V(F){F.target.removeEventListener("dispose",V);for(const Z in p){const w=p[Z],C=F.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}const O1={[Ph]:zh,[Ih]:Hh,[Bh]:Gh,[Dr]:Fh,[zh]:Ph,[Hh]:Ih,[Gh]:Bh,[Fh]:Dr};function P1(o,t){function i(){let k=!1;const Tt=new $e;let Ct=null;const zt=new $e(0,0,0,0);return{setMask:function(Mt){Ct!==Mt&&!k&&(o.colorMask(Mt,Mt,Mt,Mt),Ct=Mt)},setLocked:function(Mt){k=Mt},setClear:function(Mt,_t,Bt,ie,Ne){Ne===!0&&(Mt*=ie,_t*=ie,Bt*=ie),Tt.set(Mt,_t,Bt,ie),zt.equals(Tt)===!1&&(o.clearColor(Mt,_t,Bt,ie),zt.copy(Tt))},reset:function(){k=!1,Ct=null,zt.set(-1,0,0,0)}}}function s(){let k=!1,Tt=!1,Ct=null,zt=null,Mt=null;return{setReversed:function(_t){if(Tt!==_t){const Bt=t.get("EXT_clip_control");_t?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),Tt=_t;const ie=Mt;Mt=null,this.setClear(ie)}},getReversed:function(){return Tt},setTest:function(_t){_t?ct(o.DEPTH_TEST):wt(o.DEPTH_TEST)},setMask:function(_t){Ct!==_t&&!k&&(o.depthMask(_t),Ct=_t)},setFunc:function(_t){if(Tt&&(_t=O1[_t]),zt!==_t){switch(_t){case Ph:o.depthFunc(o.NEVER);break;case zh:o.depthFunc(o.ALWAYS);break;case Ih:o.depthFunc(o.LESS);break;case Dr:o.depthFunc(o.LEQUAL);break;case Bh:o.depthFunc(o.EQUAL);break;case Fh:o.depthFunc(o.GEQUAL);break;case Hh:o.depthFunc(o.GREATER);break;case Gh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}zt=_t}},setLocked:function(_t){k=_t},setClear:function(_t){Mt!==_t&&(Tt&&(_t=1-_t),o.clearDepth(_t),Mt=_t)},reset:function(){k=!1,Ct=null,zt=null,Mt=null,Tt=!1}}}function l(){let k=!1,Tt=null,Ct=null,zt=null,Mt=null,_t=null,Bt=null,ie=null,Ne=null;return{setTest:function(Ee){k||(Ee?ct(o.STENCIL_TEST):wt(o.STENCIL_TEST))},setMask:function(Ee){Tt!==Ee&&!k&&(o.stencilMask(Ee),Tt=Ee)},setFunc:function(Ee,Dn,ni){(Ct!==Ee||zt!==Dn||Mt!==ni)&&(o.stencilFunc(Ee,Dn,ni),Ct=Ee,zt=Dn,Mt=ni)},setOp:function(Ee,Dn,ni){(_t!==Ee||Bt!==Dn||ie!==ni)&&(o.stencilOp(Ee,Dn,ni),_t=Ee,Bt=Dn,ie=ni)},setLocked:function(Ee){k=Ee},setClear:function(Ee){Ne!==Ee&&(o.clearStencil(Ee),Ne=Ee)},reset:function(){k=!1,Tt=null,Ct=null,zt=null,Mt=null,_t=null,Bt=null,ie=null,Ne=null}}}const c=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let g={},_={},y=new WeakMap,x=[],b=null,R=!1,M=null,S=null,B=null,O=null,D=null,V=null,F=null,z=new be(0,0,0),Z=0,w=!1,C=null,G=null,et=null,lt=null,ft=null;const rt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,q=0;const j=o.getParameter(o.VERSION);j.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(j)[1]),N=q>=1):j.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),N=q>=2);let vt=null,xt={};const L=o.getParameter(o.SCISSOR_BOX),nt=o.getParameter(o.VIEWPORT),yt=new $e().fromArray(L),bt=new $e().fromArray(nt);function Nt(k,Tt,Ct,zt){const Mt=new Uint8Array(4),_t=o.createTexture();o.bindTexture(k,_t),o.texParameteri(k,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(k,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Bt=0;Bt<Ct;Bt++)k===o.TEXTURE_3D||k===o.TEXTURE_2D_ARRAY?o.texImage3D(Tt,0,o.RGBA,1,1,zt,0,o.RGBA,o.UNSIGNED_BYTE,Mt):o.texImage2D(Tt+Bt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Mt);return _t}const it={};it[o.TEXTURE_2D]=Nt(o.TEXTURE_2D,o.TEXTURE_2D,1),it[o.TEXTURE_CUBE_MAP]=Nt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[o.TEXTURE_2D_ARRAY]=Nt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),it[o.TEXTURE_3D]=Nt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ct(o.DEPTH_TEST),h.setFunc(Dr),$t(!1),Xt(Rg),ct(o.CULL_FACE),Ae(Ga);function ct(k){g[k]!==!0&&(o.enable(k),g[k]=!0)}function wt(k){g[k]!==!1&&(o.disable(k),g[k]=!1)}function It(k,Tt){return _[k]!==Tt?(o.bindFramebuffer(k,Tt),_[k]=Tt,k===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Tt),k===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Tt),!0):!1}function kt(k,Tt){let Ct=x,zt=!1;if(k){Ct=y.get(Tt),Ct===void 0&&(Ct=[],y.set(Tt,Ct));const Mt=k.textures;if(Ct.length!==Mt.length||Ct[0]!==o.COLOR_ATTACHMENT0){for(let _t=0,Bt=Mt.length;_t<Bt;_t++)Ct[_t]=o.COLOR_ATTACHMENT0+_t;Ct.length=Mt.length,zt=!0}}else Ct[0]!==o.BACK&&(Ct[0]=o.BACK,zt=!0);zt&&o.drawBuffers(Ct)}function de(k){return b!==k?(o.useProgram(k),b=k,!0):!1}const an={[vs]:o.FUNC_ADD,[zy]:o.FUNC_SUBTRACT,[Iy]:o.FUNC_REVERSE_SUBTRACT};an[By]=o.MIN,an[Fy]=o.MAX;const I={[Hy]:o.ZERO,[Gy]:o.ONE,[Vy]:o.SRC_COLOR,[Nh]:o.SRC_ALPHA,[jy]:o.SRC_ALPHA_SATURATE,[Yy]:o.DST_COLOR,[Xy]:o.DST_ALPHA,[ky]:o.ONE_MINUS_SRC_COLOR,[Oh]:o.ONE_MINUS_SRC_ALPHA,[qy]:o.ONE_MINUS_DST_COLOR,[Wy]:o.ONE_MINUS_DST_ALPHA,[Zy]:o.CONSTANT_COLOR,[Ky]:o.ONE_MINUS_CONSTANT_COLOR,[Qy]:o.CONSTANT_ALPHA,[Jy]:o.ONE_MINUS_CONSTANT_ALPHA};function Ae(k,Tt,Ct,zt,Mt,_t,Bt,ie,Ne,Ee){if(k===Ga){R===!0&&(wt(o.BLEND),R=!1);return}if(R===!1&&(ct(o.BLEND),R=!0),k!==Py){if(k!==M||Ee!==w){if((S!==vs||D!==vs)&&(o.blendEquation(o.FUNC_ADD),S=vs,D=vs),Ee)switch(k){case Cr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Cg:o.blendFunc(o.ONE,o.ONE);break;case wg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Dg:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Cr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Cg:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case wg:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Dg:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}B=null,O=null,V=null,F=null,z.set(0,0,0),Z=0,M=k,w=Ee}return}Mt=Mt||Tt,_t=_t||Ct,Bt=Bt||zt,(Tt!==S||Mt!==D)&&(o.blendEquationSeparate(an[Tt],an[Mt]),S=Tt,D=Mt),(Ct!==B||zt!==O||_t!==V||Bt!==F)&&(o.blendFuncSeparate(I[Ct],I[zt],I[_t],I[Bt]),B=Ct,O=zt,V=_t,F=Bt),(ie.equals(z)===!1||Ne!==Z)&&(o.blendColor(ie.r,ie.g,ie.b,Ne),z.copy(ie),Z=Ne),M=k,w=!1}function ne(k,Tt){k.side===ra?wt(o.CULL_FACE):ct(o.CULL_FACE);let Ct=k.side===kn;Tt&&(Ct=!Ct),$t(Ct),k.blending===Cr&&k.transparent===!1?Ae(Ga):Ae(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),h.setFunc(k.depthFunc),h.setTest(k.depthTest),h.setMask(k.depthWrite),c.setMask(k.colorWrite);const zt=k.stencilWrite;d.setTest(zt),zt&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Vt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ct(o.SAMPLE_ALPHA_TO_COVERAGE):wt(o.SAMPLE_ALPHA_TO_COVERAGE)}function $t(k){C!==k&&(k?o.frontFace(o.CW):o.frontFace(o.CCW),C=k)}function Xt(k){k!==Ny?(ct(o.CULL_FACE),k!==G&&(k===Rg?o.cullFace(o.BACK):k===Oy?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):wt(o.CULL_FACE),G=k}function Ge(k){k!==et&&(N&&o.lineWidth(k),et=k)}function Vt(k,Tt,Ct){k?(ct(o.POLYGON_OFFSET_FILL),(lt!==Tt||ft!==Ct)&&(o.polygonOffset(Tt,Ct),lt=Tt,ft=Ct)):wt(o.POLYGON_OFFSET_FILL)}function ae(k){k?ct(o.SCISSOR_TEST):wt(o.SCISSOR_TEST)}function Ke(k){k===void 0&&(k=o.TEXTURE0+rt-1),vt!==k&&(o.activeTexture(k),vt=k)}function Ze(k,Tt,Ct){Ct===void 0&&(vt===null?Ct=o.TEXTURE0+rt-1:Ct=vt);let zt=xt[Ct];zt===void 0&&(zt={type:void 0,texture:void 0},xt[Ct]=zt),(zt.type!==k||zt.texture!==Tt)&&(vt!==Ct&&(o.activeTexture(Ct),vt=Ct),o.bindTexture(k,Tt||it[k]),zt.type=k,zt.texture=Tt)}function U(){const k=xt[vt];k!==void 0&&k.type!==void 0&&(o.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function J(){try{o.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function dt(){try{o.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function St(){try{o.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ut(){try{o.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function jt(){try{o.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function At(){try{o.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Yt(){try{o.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function qt(){try{o.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Et(){try{o.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Rt(k){yt.equals(k)===!1&&(o.scissor(k.x,k.y,k.z,k.w),yt.copy(k))}function Zt(k){bt.equals(k)===!1&&(o.viewport(k.x,k.y,k.z,k.w),bt.copy(k))}function Pt(k,Tt){let Ct=p.get(Tt);Ct===void 0&&(Ct=new WeakMap,p.set(Tt,Ct));let zt=Ct.get(k);zt===void 0&&(zt=o.getUniformBlockIndex(Tt,k.name),Ct.set(k,zt))}function Dt(k,Tt){const zt=p.get(Tt).get(k);m.get(Tt)!==zt&&(o.uniformBlockBinding(Tt,zt,k.__bindingPointIndex),m.set(Tt,zt))}function re(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},vt=null,xt={},_={},y=new WeakMap,x=[],b=null,R=!1,M=null,S=null,B=null,O=null,D=null,V=null,F=null,z=new be(0,0,0),Z=0,w=!1,C=null,G=null,et=null,lt=null,ft=null,yt.set(0,0,o.canvas.width,o.canvas.height),bt.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:ct,disable:wt,bindFramebuffer:It,drawBuffers:kt,useProgram:de,setBlending:Ae,setMaterial:ne,setFlipSided:$t,setCullFace:Xt,setLineWidth:Ge,setPolygonOffset:Vt,setScissorTest:ae,activeTexture:Ke,bindTexture:Ze,unbindTexture:U,compressedTexImage2D:E,compressedTexImage3D:J,texImage2D:qt,texImage3D:Et,updateUBOMapping:Pt,uniformBlockBinding:Dt,texStorage2D:At,texStorage3D:Yt,texSubImage2D:dt,texSubImage3D:St,compressedTexSubImage2D:ut,compressedTexSubImage3D:jt,scissor:Rt,viewport:Zt,reset:re}}function z1(o,t,i,s,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ce,g=new WeakMap;let _;const y=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(U,E){return x?new OffscreenCanvas(U,E):Fc("canvas")}function R(U,E,J){let dt=1;const St=Ze(U);if((St.width>J||St.height>J)&&(dt=J/Math.max(St.width,St.height)),dt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ut=Math.floor(dt*St.width),jt=Math.floor(dt*St.height);_===void 0&&(_=b(ut,jt));const At=E?b(ut,jt):_;return At.width=ut,At.height=jt,At.getContext("2d").drawImage(U,0,0,ut,jt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+St.width+"x"+St.height+") to ("+ut+"x"+jt+")."),At}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+St.width+"x"+St.height+")."),U;return U}function M(U){return U.generateMipmaps}function S(U){o.generateMipmap(U)}function B(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function O(U,E,J,dt,St=!1){if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ut=E;if(E===o.RED&&(J===o.FLOAT&&(ut=o.R32F),J===o.HALF_FLOAT&&(ut=o.R16F),J===o.UNSIGNED_BYTE&&(ut=o.R8)),E===o.RED_INTEGER&&(J===o.UNSIGNED_BYTE&&(ut=o.R8UI),J===o.UNSIGNED_SHORT&&(ut=o.R16UI),J===o.UNSIGNED_INT&&(ut=o.R32UI),J===o.BYTE&&(ut=o.R8I),J===o.SHORT&&(ut=o.R16I),J===o.INT&&(ut=o.R32I)),E===o.RG&&(J===o.FLOAT&&(ut=o.RG32F),J===o.HALF_FLOAT&&(ut=o.RG16F),J===o.UNSIGNED_BYTE&&(ut=o.RG8)),E===o.RG_INTEGER&&(J===o.UNSIGNED_BYTE&&(ut=o.RG8UI),J===o.UNSIGNED_SHORT&&(ut=o.RG16UI),J===o.UNSIGNED_INT&&(ut=o.RG32UI),J===o.BYTE&&(ut=o.RG8I),J===o.SHORT&&(ut=o.RG16I),J===o.INT&&(ut=o.RG32I)),E===o.RGB_INTEGER&&(J===o.UNSIGNED_BYTE&&(ut=o.RGB8UI),J===o.UNSIGNED_SHORT&&(ut=o.RGB16UI),J===o.UNSIGNED_INT&&(ut=o.RGB32UI),J===o.BYTE&&(ut=o.RGB8I),J===o.SHORT&&(ut=o.RGB16I),J===o.INT&&(ut=o.RGB32I)),E===o.RGBA_INTEGER&&(J===o.UNSIGNED_BYTE&&(ut=o.RGBA8UI),J===o.UNSIGNED_SHORT&&(ut=o.RGBA16UI),J===o.UNSIGNED_INT&&(ut=o.RGBA32UI),J===o.BYTE&&(ut=o.RGBA8I),J===o.SHORT&&(ut=o.RGBA16I),J===o.INT&&(ut=o.RGBA32I)),E===o.RGB&&(J===o.UNSIGNED_INT_5_9_9_9_REV&&(ut=o.RGB9_E5),J===o.UNSIGNED_INT_10F_11F_11F_REV&&(ut=o.R11F_G11F_B10F)),E===o.RGBA){const jt=St?Ic:we.getTransfer(dt);J===o.FLOAT&&(ut=o.RGBA32F),J===o.HALF_FLOAT&&(ut=o.RGBA16F),J===o.UNSIGNED_BYTE&&(ut=jt===Fe?o.SRGB8_ALPHA8:o.RGBA8),J===o.UNSIGNED_SHORT_4_4_4_4&&(ut=o.RGBA4),J===o.UNSIGNED_SHORT_5_5_5_1&&(ut=o.RGB5_A1)}return(ut===o.R16F||ut===o.R32F||ut===o.RG16F||ut===o.RG32F||ut===o.RGBA16F||ut===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function D(U,E){let J;return U?E===null||E===Es||E===Vo?J=o.DEPTH24_STENCIL8:E===Li?J=o.DEPTH32F_STENCIL8:E===Go&&(J=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Es||E===Vo?J=o.DEPTH_COMPONENT24:E===Li?J=o.DEPTH_COMPONENT32F:E===Go&&(J=o.DEPTH_COMPONENT16),J}function V(U,E){return M(U)===!0||U.isFramebufferTexture&&U.minFilter!==ei&&U.minFilter!==Ui?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function F(U){const E=U.target;E.removeEventListener("dispose",F),Z(E),E.isVideoTexture&&g.delete(E)}function z(U){const E=U.target;E.removeEventListener("dispose",z),C(E)}function Z(U){const E=s.get(U);if(E.__webglInit===void 0)return;const J=U.source,dt=y.get(J);if(dt){const St=dt[E.__cacheKey];St.usedTimes--,St.usedTimes===0&&w(U),Object.keys(dt).length===0&&y.delete(J)}s.remove(U)}function w(U){const E=s.get(U);o.deleteTexture(E.__webglTexture);const J=U.source,dt=y.get(J);delete dt[E.__cacheKey],h.memory.textures--}function C(U){const E=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(E.__webglFramebuffer[dt]))for(let St=0;St<E.__webglFramebuffer[dt].length;St++)o.deleteFramebuffer(E.__webglFramebuffer[dt][St]);else o.deleteFramebuffer(E.__webglFramebuffer[dt]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[dt])}else{if(Array.isArray(E.__webglFramebuffer))for(let dt=0;dt<E.__webglFramebuffer.length;dt++)o.deleteFramebuffer(E.__webglFramebuffer[dt]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let dt=0;dt<E.__webglColorRenderbuffer.length;dt++)E.__webglColorRenderbuffer[dt]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[dt]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const J=U.textures;for(let dt=0,St=J.length;dt<St;dt++){const ut=s.get(J[dt]);ut.__webglTexture&&(o.deleteTexture(ut.__webglTexture),h.memory.textures--),s.remove(J[dt])}s.remove(U)}let G=0;function et(){G=0}function lt(){const U=G;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),G+=1,U}function ft(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function rt(U,E){const J=s.get(U);if(U.isVideoTexture&&ae(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&J.__version!==U.version){const dt=U.image;if(dt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{it(J,U,E);return}}else U.isExternalTexture&&(J.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,J.__webglTexture,o.TEXTURE0+E)}function N(U,E){const J=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&J.__version!==U.version){it(J,U,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,J.__webglTexture,o.TEXTURE0+E)}function q(U,E){const J=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&J.__version!==U.version){it(J,U,E);return}i.bindTexture(o.TEXTURE_3D,J.__webglTexture,o.TEXTURE0+E)}function j(U,E){const J=s.get(U);if(U.version>0&&J.__version!==U.version){ct(J,U,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,J.__webglTexture,o.TEXTURE0+E)}const vt={[Xh]:o.REPEAT,[ys]:o.CLAMP_TO_EDGE,[Wh]:o.MIRRORED_REPEAT},xt={[ei]:o.NEAREST,[oM]:o.NEAREST_MIPMAP_NEAREST,[ac]:o.NEAREST_MIPMAP_LINEAR,[Ui]:o.LINEAR,[eh]:o.LINEAR_MIPMAP_NEAREST,[Ms]:o.LINEAR_MIPMAP_LINEAR},L={[fM]:o.NEVER,[gM]:o.ALWAYS,[hM]:o.LESS,[K0]:o.LEQUAL,[dM]:o.EQUAL,[_M]:o.GEQUAL,[pM]:o.GREATER,[mM]:o.NOTEQUAL};function nt(U,E){if(E.type===Li&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Ui||E.magFilter===eh||E.magFilter===ac||E.magFilter===Ms||E.minFilter===Ui||E.minFilter===eh||E.minFilter===ac||E.minFilter===Ms)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,vt[E.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,vt[E.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,vt[E.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,xt[E.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,xt[E.minFilter]),E.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,L[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ei||E.minFilter!==ac&&E.minFilter!==Ms||E.type===Li&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const J=t.get("EXT_texture_filter_anisotropic");o.texParameterf(U,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function yt(U,E){let J=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",F));const dt=E.source;let St=y.get(dt);St===void 0&&(St={},y.set(dt,St));const ut=ft(E);if(ut!==U.__cacheKey){St[ut]===void 0&&(St[ut]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,J=!0),St[ut].usedTimes++;const jt=St[U.__cacheKey];jt!==void 0&&(St[U.__cacheKey].usedTimes--,jt.usedTimes===0&&w(E)),U.__cacheKey=ut,U.__webglTexture=St[ut].texture}return J}function bt(U,E,J){return Math.floor(Math.floor(U/J)/E)}function Nt(U,E,J,dt){const ut=U.updateRanges;if(ut.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,J,dt,E.data);else{ut.sort((Et,Rt)=>Et.start-Rt.start);let jt=0;for(let Et=1;Et<ut.length;Et++){const Rt=ut[jt],Zt=ut[Et],Pt=Rt.start+Rt.count,Dt=bt(Zt.start,E.width,4),re=bt(Rt.start,E.width,4);Zt.start<=Pt+1&&Dt===re&&bt(Zt.start+Zt.count-1,E.width,4)===Dt?Rt.count=Math.max(Rt.count,Zt.start+Zt.count-Rt.start):(++jt,ut[jt]=Zt)}ut.length=jt+1;const At=o.getParameter(o.UNPACK_ROW_LENGTH),Yt=o.getParameter(o.UNPACK_SKIP_PIXELS),qt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let Et=0,Rt=ut.length;Et<Rt;Et++){const Zt=ut[Et],Pt=Math.floor(Zt.start/4),Dt=Math.ceil(Zt.count/4),re=Pt%E.width,k=Math.floor(Pt/E.width),Tt=Dt,Ct=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,re),o.pixelStorei(o.UNPACK_SKIP_ROWS,k),i.texSubImage2D(o.TEXTURE_2D,0,re,k,Tt,Ct,J,dt,E.data)}U.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,At),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Yt),o.pixelStorei(o.UNPACK_SKIP_ROWS,qt)}}function it(U,E,J){let dt=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(dt=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(dt=o.TEXTURE_3D);const St=yt(U,E),ut=E.source;i.bindTexture(dt,U.__webglTexture,o.TEXTURE0+J);const jt=s.get(ut);if(ut.version!==jt.__version||St===!0){i.activeTexture(o.TEXTURE0+J);const At=we.getPrimaries(we.workingColorSpace),Yt=E.colorSpace===Ha?null:we.getPrimaries(E.colorSpace),qt=E.colorSpace===Ha||At===Yt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let Et=R(E.image,!1,l.maxTextureSize);Et=Ke(E,Et);const Rt=c.convert(E.format,E.colorSpace),Zt=c.convert(E.type);let Pt=O(E.internalFormat,Rt,Zt,E.colorSpace,E.isVideoTexture);nt(dt,E);let Dt;const re=E.mipmaps,k=E.isVideoTexture!==!0,Tt=jt.__version===void 0||St===!0,Ct=ut.dataReady,zt=V(E,Et);if(E.isDepthTexture)Pt=D(E.format===Xo,E.type),Tt&&(k?i.texStorage2D(o.TEXTURE_2D,1,Pt,Et.width,Et.height):i.texImage2D(o.TEXTURE_2D,0,Pt,Et.width,Et.height,0,Rt,Zt,null));else if(E.isDataTexture)if(re.length>0){k&&Tt&&i.texStorage2D(o.TEXTURE_2D,zt,Pt,re[0].width,re[0].height);for(let Mt=0,_t=re.length;Mt<_t;Mt++)Dt=re[Mt],k?Ct&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Dt.width,Dt.height,Rt,Zt,Dt.data):i.texImage2D(o.TEXTURE_2D,Mt,Pt,Dt.width,Dt.height,0,Rt,Zt,Dt.data);E.generateMipmaps=!1}else k?(Tt&&i.texStorage2D(o.TEXTURE_2D,zt,Pt,Et.width,Et.height),Ct&&Nt(E,Et,Rt,Zt)):i.texImage2D(o.TEXTURE_2D,0,Pt,Et.width,Et.height,0,Rt,Zt,Et.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){k&&Tt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,zt,Pt,re[0].width,re[0].height,Et.depth);for(let Mt=0,_t=re.length;Mt<_t;Mt++)if(Dt=re[Mt],E.format!==xi)if(Rt!==null)if(k){if(Ct)if(E.layerUpdates.size>0){const Bt=r0(Dt.width,Dt.height,E.format,E.type);for(const ie of E.layerUpdates){const Ne=Dt.data.subarray(ie*Bt/Dt.data.BYTES_PER_ELEMENT,(ie+1)*Bt/Dt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,ie,Dt.width,Dt.height,1,Rt,Ne)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Dt.width,Dt.height,Et.depth,Rt,Dt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Mt,Pt,Dt.width,Dt.height,Et.depth,0,Dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Ct&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Dt.width,Dt.height,Et.depth,Rt,Zt,Dt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Mt,Pt,Dt.width,Dt.height,Et.depth,0,Rt,Zt,Dt.data)}else{k&&Tt&&i.texStorage2D(o.TEXTURE_2D,zt,Pt,re[0].width,re[0].height);for(let Mt=0,_t=re.length;Mt<_t;Mt++)Dt=re[Mt],E.format!==xi?Rt!==null?k?Ct&&i.compressedTexSubImage2D(o.TEXTURE_2D,Mt,0,0,Dt.width,Dt.height,Rt,Dt.data):i.compressedTexImage2D(o.TEXTURE_2D,Mt,Pt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Ct&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Dt.width,Dt.height,Rt,Zt,Dt.data):i.texImage2D(o.TEXTURE_2D,Mt,Pt,Dt.width,Dt.height,0,Rt,Zt,Dt.data)}else if(E.isDataArrayTexture)if(k){if(Tt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,zt,Pt,Et.width,Et.height,Et.depth),Ct)if(E.layerUpdates.size>0){const Mt=r0(Et.width,Et.height,E.format,E.type);for(const _t of E.layerUpdates){const Bt=Et.data.subarray(_t*Mt/Et.data.BYTES_PER_ELEMENT,(_t+1)*Mt/Et.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,Et.width,Et.height,1,Rt,Zt,Bt)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,Rt,Zt,Et.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Pt,Et.width,Et.height,Et.depth,0,Rt,Zt,Et.data);else if(E.isData3DTexture)k?(Tt&&i.texStorage3D(o.TEXTURE_3D,zt,Pt,Et.width,Et.height,Et.depth),Ct&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,Rt,Zt,Et.data)):i.texImage3D(o.TEXTURE_3D,0,Pt,Et.width,Et.height,Et.depth,0,Rt,Zt,Et.data);else if(E.isFramebufferTexture){if(Tt)if(k)i.texStorage2D(o.TEXTURE_2D,zt,Pt,Et.width,Et.height);else{let Mt=Et.width,_t=Et.height;for(let Bt=0;Bt<zt;Bt++)i.texImage2D(o.TEXTURE_2D,Bt,Pt,Mt,_t,0,Rt,Zt,null),Mt>>=1,_t>>=1}}else if(re.length>0){if(k&&Tt){const Mt=Ze(re[0]);i.texStorage2D(o.TEXTURE_2D,zt,Pt,Mt.width,Mt.height)}for(let Mt=0,_t=re.length;Mt<_t;Mt++)Dt=re[Mt],k?Ct&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Rt,Zt,Dt):i.texImage2D(o.TEXTURE_2D,Mt,Pt,Rt,Zt,Dt);E.generateMipmaps=!1}else if(k){if(Tt){const Mt=Ze(Et);i.texStorage2D(o.TEXTURE_2D,zt,Pt,Mt.width,Mt.height)}Ct&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Rt,Zt,Et)}else i.texImage2D(o.TEXTURE_2D,0,Pt,Rt,Zt,Et);M(E)&&S(dt),jt.__version=ut.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function ct(U,E,J){if(E.image.length!==6)return;const dt=yt(U,E),St=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+J);const ut=s.get(St);if(St.version!==ut.__version||dt===!0){i.activeTexture(o.TEXTURE0+J);const jt=we.getPrimaries(we.workingColorSpace),At=E.colorSpace===Ha?null:we.getPrimaries(E.colorSpace),Yt=E.colorSpace===Ha||jt===At?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);const qt=E.isCompressedTexture||E.image[0].isCompressedTexture,Et=E.image[0]&&E.image[0].isDataTexture,Rt=[];for(let _t=0;_t<6;_t++)!qt&&!Et?Rt[_t]=R(E.image[_t],!0,l.maxCubemapSize):Rt[_t]=Et?E.image[_t].image:E.image[_t],Rt[_t]=Ke(E,Rt[_t]);const Zt=Rt[0],Pt=c.convert(E.format,E.colorSpace),Dt=c.convert(E.type),re=O(E.internalFormat,Pt,Dt,E.colorSpace),k=E.isVideoTexture!==!0,Tt=ut.__version===void 0||dt===!0,Ct=St.dataReady;let zt=V(E,Zt);nt(o.TEXTURE_CUBE_MAP,E);let Mt;if(qt){k&&Tt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,zt,re,Zt.width,Zt.height);for(let _t=0;_t<6;_t++){Mt=Rt[_t].mipmaps;for(let Bt=0;Bt<Mt.length;Bt++){const ie=Mt[Bt];E.format!==xi?Pt!==null?k?Ct&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Bt,0,0,ie.width,ie.height,Pt,ie.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Bt,re,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Bt,0,0,ie.width,ie.height,Pt,Dt,ie.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Bt,re,ie.width,ie.height,0,Pt,Dt,ie.data)}}}else{if(Mt=E.mipmaps,k&&Tt){Mt.length>0&&zt++;const _t=Ze(Rt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,zt,re,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(Et){k?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Rt[_t].width,Rt[_t].height,Pt,Dt,Rt[_t].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,re,Rt[_t].width,Rt[_t].height,0,Pt,Dt,Rt[_t].data);for(let Bt=0;Bt<Mt.length;Bt++){const Ne=Mt[Bt].image[_t].image;k?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Bt+1,0,0,Ne.width,Ne.height,Pt,Dt,Ne.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Bt+1,re,Ne.width,Ne.height,0,Pt,Dt,Ne.data)}}else{k?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Pt,Dt,Rt[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,re,Pt,Dt,Rt[_t]);for(let Bt=0;Bt<Mt.length;Bt++){const ie=Mt[Bt];k?Ct&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Bt+1,0,0,Pt,Dt,ie.image[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Bt+1,re,Pt,Dt,ie.image[_t])}}}M(E)&&S(o.TEXTURE_CUBE_MAP),ut.__version=St.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function wt(U,E,J,dt,St,ut){const jt=c.convert(J.format,J.colorSpace),At=c.convert(J.type),Yt=O(J.internalFormat,jt,At,J.colorSpace),qt=s.get(E),Et=s.get(J);if(Et.__renderTarget=E,!qt.__hasExternalTextures){const Rt=Math.max(1,E.width>>ut),Zt=Math.max(1,E.height>>ut);St===o.TEXTURE_3D||St===o.TEXTURE_2D_ARRAY?i.texImage3D(St,ut,Yt,Rt,Zt,E.depth,0,jt,At,null):i.texImage2D(St,ut,Yt,Rt,Zt,0,jt,At,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),Vt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,dt,St,Et.__webglTexture,0,Ge(E)):(St===o.TEXTURE_2D||St>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,dt,St,Et.__webglTexture,ut),i.bindFramebuffer(o.FRAMEBUFFER,null)}function It(U,E,J){if(o.bindRenderbuffer(o.RENDERBUFFER,U),E.depthBuffer){const dt=E.depthTexture,St=dt&&dt.isDepthTexture?dt.type:null,ut=D(E.stencilBuffer,St),jt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,At=Ge(E);Vt(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,At,ut,E.width,E.height):J?o.renderbufferStorageMultisample(o.RENDERBUFFER,At,ut,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ut,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,jt,o.RENDERBUFFER,U)}else{const dt=E.textures;for(let St=0;St<dt.length;St++){const ut=dt[St],jt=c.convert(ut.format,ut.colorSpace),At=c.convert(ut.type),Yt=O(ut.internalFormat,jt,At,ut.colorSpace),qt=Ge(E);J&&Vt(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,qt,Yt,E.width,E.height):Vt(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,qt,Yt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Yt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function kt(U,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const dt=s.get(E.depthTexture);dt.__renderTarget=E,(!dt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),rt(E.depthTexture,0);const St=dt.__webglTexture,ut=Ge(E);if(E.depthTexture.format===ko)Vt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,St,0,ut):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,St,0);else if(E.depthTexture.format===Xo)Vt(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,St,0,ut):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,St,0);else throw new Error("Unknown depthTexture format")}function de(U){const E=s.get(U),J=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const dt=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),dt){const St=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,dt.removeEventListener("dispose",St)};dt.addEventListener("dispose",St),E.__depthDisposeCallback=St}E.__boundDepthTexture=dt}if(U.depthTexture&&!E.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");const dt=U.texture.mipmaps;dt&&dt.length>0?kt(E.__webglFramebuffer[0],U):kt(E.__webglFramebuffer,U)}else if(J){E.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[dt]),E.__webglDepthbuffer[dt]===void 0)E.__webglDepthbuffer[dt]=o.createRenderbuffer(),It(E.__webglDepthbuffer[dt],U,!1);else{const St=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=E.__webglDepthbuffer[dt];o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,St,o.RENDERBUFFER,ut)}}else{const dt=U.texture.mipmaps;if(dt&&dt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),It(E.__webglDepthbuffer,U,!1);else{const St=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,St,o.RENDERBUFFER,ut)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function an(U,E,J){const dt=s.get(U);E!==void 0&&wt(dt.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),J!==void 0&&de(U)}function I(U){const E=U.texture,J=s.get(U),dt=s.get(E);U.addEventListener("dispose",z);const St=U.textures,ut=U.isWebGLCubeRenderTarget===!0,jt=St.length>1;if(jt||(dt.__webglTexture===void 0&&(dt.__webglTexture=o.createTexture()),dt.__version=E.version,h.memory.textures++),ut){J.__webglFramebuffer=[];for(let At=0;At<6;At++)if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer[At]=[];for(let Yt=0;Yt<E.mipmaps.length;Yt++)J.__webglFramebuffer[At][Yt]=o.createFramebuffer()}else J.__webglFramebuffer[At]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){J.__webglFramebuffer=[];for(let At=0;At<E.mipmaps.length;At++)J.__webglFramebuffer[At]=o.createFramebuffer()}else J.__webglFramebuffer=o.createFramebuffer();if(jt)for(let At=0,Yt=St.length;At<Yt;At++){const qt=s.get(St[At]);qt.__webglTexture===void 0&&(qt.__webglTexture=o.createTexture(),h.memory.textures++)}if(U.samples>0&&Vt(U)===!1){J.__webglMultisampledFramebuffer=o.createFramebuffer(),J.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let At=0;At<St.length;At++){const Yt=St[At];J.__webglColorRenderbuffer[At]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,J.__webglColorRenderbuffer[At]);const qt=c.convert(Yt.format,Yt.colorSpace),Et=c.convert(Yt.type),Rt=O(Yt.internalFormat,qt,Et,Yt.colorSpace,U.isXRRenderTarget===!0),Zt=Ge(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,Zt,Rt,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+At,o.RENDERBUFFER,J.__webglColorRenderbuffer[At])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(J.__webglDepthRenderbuffer=o.createRenderbuffer(),It(J.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ut){i.bindTexture(o.TEXTURE_CUBE_MAP,dt.__webglTexture),nt(o.TEXTURE_CUBE_MAP,E);for(let At=0;At<6;At++)if(E.mipmaps&&E.mipmaps.length>0)for(let Yt=0;Yt<E.mipmaps.length;Yt++)wt(J.__webglFramebuffer[At][Yt],U,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+At,Yt);else wt(J.__webglFramebuffer[At],U,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+At,0);M(E)&&S(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(jt){for(let At=0,Yt=St.length;At<Yt;At++){const qt=St[At],Et=s.get(qt);let Rt=o.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Rt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Rt,Et.__webglTexture),nt(Rt,qt),wt(J.__webglFramebuffer,U,qt,o.COLOR_ATTACHMENT0+At,Rt,0),M(qt)&&S(Rt)}i.unbindTexture()}else{let At=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(At=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(At,dt.__webglTexture),nt(At,E),E.mipmaps&&E.mipmaps.length>0)for(let Yt=0;Yt<E.mipmaps.length;Yt++)wt(J.__webglFramebuffer[Yt],U,E,o.COLOR_ATTACHMENT0,At,Yt);else wt(J.__webglFramebuffer,U,E,o.COLOR_ATTACHMENT0,At,0);M(E)&&S(At),i.unbindTexture()}U.depthBuffer&&de(U)}function Ae(U){const E=U.textures;for(let J=0,dt=E.length;J<dt;J++){const St=E[J];if(M(St)){const ut=B(U),jt=s.get(St).__webglTexture;i.bindTexture(ut,jt),S(ut),i.unbindTexture()}}}const ne=[],$t=[];function Xt(U){if(U.samples>0){if(Vt(U)===!1){const E=U.textures,J=U.width,dt=U.height;let St=o.COLOR_BUFFER_BIT;const ut=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,jt=s.get(U),At=E.length>1;if(At)for(let qt=0;qt<E.length;qt++)i.bindFramebuffer(o.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,jt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,jt.__webglMultisampledFramebuffer);const Yt=U.texture.mipmaps;Yt&&Yt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,jt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,jt.__webglFramebuffer);for(let qt=0;qt<E.length;qt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(St|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(St|=o.STENCIL_BUFFER_BIT)),At){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,jt.__webglColorRenderbuffer[qt]);const Et=s.get(E[qt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Et,0)}o.blitFramebuffer(0,0,J,dt,0,0,J,dt,St,o.NEAREST),m===!0&&(ne.length=0,$t.length=0,ne.push(o.COLOR_ATTACHMENT0+qt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(ne.push(ut),$t.push(ut),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,$t)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ne))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),At)for(let qt=0;qt<E.length;qt++){i.bindFramebuffer(o.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.RENDERBUFFER,jt.__webglColorRenderbuffer[qt]);const Et=s.get(E[qt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,jt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+qt,o.TEXTURE_2D,Et,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,jt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const E=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function Ge(U){return Math.min(l.maxSamples,U.samples)}function Vt(U){const E=s.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ae(U){const E=h.render.frame;g.get(U)!==E&&(g.set(U,E),U.update())}function Ke(U,E){const J=U.colorSpace,dt=U.format,St=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||J!==Nr&&J!==Ha&&(we.getTransfer(J)===Fe?(dt!==xi||St!==Oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),E}function Ze(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=lt,this.resetTextureUnits=et,this.setTexture2D=rt,this.setTexture2DArray=N,this.setTexture3D=q,this.setTextureCube=j,this.rebindTextures=an,this.setupRenderTarget=I,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=Xt,this.setupDepthRenderbuffer=de,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=Vt}function I1(o,t){function i(s,l=Ha){let c;const h=we.getTransfer(l);if(s===Oi)return o.UNSIGNED_BYTE;if(s===Ad)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Rd)return o.UNSIGNED_SHORT_5_5_5_1;if(s===X0)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===W0)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===V0)return o.BYTE;if(s===k0)return o.SHORT;if(s===Go)return o.UNSIGNED_SHORT;if(s===bd)return o.INT;if(s===Es)return o.UNSIGNED_INT;if(s===Li)return o.FLOAT;if(s===Yo)return o.HALF_FLOAT;if(s===Y0)return o.ALPHA;if(s===q0)return o.RGB;if(s===xi)return o.RGBA;if(s===ko)return o.DEPTH_COMPONENT;if(s===Xo)return o.DEPTH_STENCIL;if(s===Cd)return o.RED;if(s===wd)return o.RED_INTEGER;if(s===j0)return o.RG;if(s===Dd)return o.RG_INTEGER;if(s===Ud)return o.RGBA_INTEGER;if(s===Uc||s===Lc||s===Nc||s===Oc)if(h===Fe)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Uc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Lc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Nc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Oc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Uc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Lc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Nc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Oc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Yh||s===qh||s===jh||s===Zh)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Yh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===qh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===jh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Zh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Kh||s===Qh||s===Jh)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Kh||s===Qh)return h===Fe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Jh)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===$h||s===td||s===ed||s===nd||s===id||s===ad||s===sd||s===rd||s===od||s===ld||s===cd||s===ud||s===fd||s===hd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===$h)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===td)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ed)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===nd)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===id)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ad)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===sd)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===rd)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===od)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ld)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===cd)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ud)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===fd)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===hd)return h===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===dd||s===pd||s===md)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===dd)return h===Fe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===pd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===md)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===_d||s===gd||s===vd||s===Sd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===_d)return c.COMPRESSED_RED_RGTC1_EXT;if(s===gd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===vd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Sd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Vo?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const B1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,F1=`
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

}`;class H1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new cv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Xa({vertexShader:B1,fragmentShader:F1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ei(new Gc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class G1 extends As{constructor(t,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,g=null,_=null,y=null,x=null,b=null;const R=typeof XRWebGLBinding<"u",M=new H1,S={},B=i.getContextAttributes();let O=null,D=null;const V=[],F=[],z=new ce;let Z=null;const w=new hi;w.viewport=new $e;const C=new hi;C.viewport=new $e;const G=[w,C],et=new rx;let lt=null,ft=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let ct=V[it];return ct===void 0&&(ct=new Eh,V[it]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(it){let ct=V[it];return ct===void 0&&(ct=new Eh,V[it]=ct),ct.getGripSpace()},this.getHand=function(it){let ct=V[it];return ct===void 0&&(ct=new Eh,V[it]=ct),ct.getHandSpace()};function rt(it){const ct=F.indexOf(it.inputSource);if(ct===-1)return;const wt=V[ct];wt!==void 0&&(wt.update(it.inputSource,it.frame,p||h),wt.dispatchEvent({type:it.type,data:it.inputSource}))}function N(){l.removeEventListener("select",rt),l.removeEventListener("selectstart",rt),l.removeEventListener("selectend",rt),l.removeEventListener("squeeze",rt),l.removeEventListener("squeezestart",rt),l.removeEventListener("squeezeend",rt),l.removeEventListener("end",N),l.removeEventListener("inputsourceschange",q);for(let it=0;it<V.length;it++){const ct=F[it];ct!==null&&(F[it]=null,V[it].disconnect(ct))}lt=null,ft=null,M.reset();for(const it in S)delete S[it];t.setRenderTarget(O),x=null,y=null,_=null,l=null,D=null,Nt.stop(),s.isPresenting=!1,t.setPixelRatio(Z),t.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){c=it,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){d=it,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(it){p=it},this.getBaseLayer=function(){return y!==null?y:x},this.getBinding=function(){return _===null&&R&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(it){if(l=it,l!==null){if(O=t.getRenderTarget(),l.addEventListener("select",rt),l.addEventListener("selectstart",rt),l.addEventListener("selectend",rt),l.addEventListener("squeeze",rt),l.addEventListener("squeezestart",rt),l.addEventListener("squeezeend",rt),l.addEventListener("end",N),l.addEventListener("inputsourceschange",q),B.xrCompatible!==!0&&await i.makeXRCompatible(),Z=t.getPixelRatio(),t.getSize(z),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,It=null,kt=null;B.depth&&(kt=B.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,wt=B.stencil?Xo:ko,It=B.stencil?Vo:Es);const de={colorFormat:i.RGBA8,depthFormat:kt,scaleFactor:c};_=this.getBinding(),y=_.createProjectionLayer(de),l.updateRenderState({layers:[y]}),t.setPixelRatio(1),t.setSize(y.textureWidth,y.textureHeight,!1),D=new bs(y.textureWidth,y.textureHeight,{format:xi,type:Oi,depthTexture:new lv(y.textureWidth,y.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:B.stencil,colorSpace:t.outputColorSpace,samples:B.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const wt={antialias:B.antialias,alpha:!0,depth:B.depth,stencil:B.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(l,i,wt),l.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),D=new bs(x.framebufferWidth,x.framebufferHeight,{format:xi,type:Oi,colorSpace:t.outputColorSpace,stencilBuffer:B.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),Nt.setContext(l),Nt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function q(it){for(let ct=0;ct<it.removed.length;ct++){const wt=it.removed[ct],It=F.indexOf(wt);It>=0&&(F[It]=null,V[It].disconnect(wt))}for(let ct=0;ct<it.added.length;ct++){const wt=it.added[ct];let It=F.indexOf(wt);if(It===-1){for(let de=0;de<V.length;de++)if(de>=F.length){F.push(wt),It=de;break}else if(F[de]===null){F[de]=wt,It=de;break}if(It===-1)break}const kt=V[It];kt&&kt.connect(wt)}}const j=new $,vt=new $;function xt(it,ct,wt){j.setFromMatrixPosition(ct.matrixWorld),vt.setFromMatrixPosition(wt.matrixWorld);const It=j.distanceTo(vt),kt=ct.projectionMatrix.elements,de=wt.projectionMatrix.elements,an=kt[14]/(kt[10]-1),I=kt[14]/(kt[10]+1),Ae=(kt[9]+1)/kt[5],ne=(kt[9]-1)/kt[5],$t=(kt[8]-1)/kt[0],Xt=(de[8]+1)/de[0],Ge=an*$t,Vt=an*Xt,ae=It/(-$t+Xt),Ke=ae*-$t;if(ct.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(Ke),it.translateZ(ae),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),kt[10]===-1)it.projectionMatrix.copy(ct.projectionMatrix),it.projectionMatrixInverse.copy(ct.projectionMatrixInverse);else{const Ze=an+ae,U=I+ae,E=Ge-Ke,J=Vt+(It-Ke),dt=Ae*I/U*Ze,St=ne*I/U*Ze;it.projectionMatrix.makePerspective(E,J,dt,St,Ze,U),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function L(it,ct){ct===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(ct.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(l===null)return;let ct=it.near,wt=it.far;M.texture!==null&&(M.depthNear>0&&(ct=M.depthNear),M.depthFar>0&&(wt=M.depthFar)),et.near=C.near=w.near=ct,et.far=C.far=w.far=wt,(lt!==et.near||ft!==et.far)&&(l.updateRenderState({depthNear:et.near,depthFar:et.far}),lt=et.near,ft=et.far),et.layers.mask=it.layers.mask|6,w.layers.mask=et.layers.mask&3,C.layers.mask=et.layers.mask&5;const It=it.parent,kt=et.cameras;L(et,It);for(let de=0;de<kt.length;de++)L(kt[de],It);kt.length===2?xt(et,w,C):et.projectionMatrix.copy(w.projectionMatrix),nt(it,et,It)};function nt(it,ct,wt){wt===null?it.matrix.copy(ct.matrixWorld):(it.matrix.copy(wt.matrixWorld),it.matrix.invert(),it.matrix.multiply(ct.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(ct.projectionMatrix),it.projectionMatrixInverse.copy(ct.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=yd*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return et},this.getFoveation=function(){if(!(y===null&&x===null))return m},this.setFoveation=function(it){m=it,y!==null&&(y.fixedFoveation=it),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=it)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(et)},this.getCameraTexture=function(it){return S[it]};let yt=null;function bt(it,ct){if(g=ct.getViewerPose(p||h),b=ct,g!==null){const wt=g.views;x!==null&&(t.setRenderTargetFramebuffer(D,x.framebuffer),t.setRenderTarget(D));let It=!1;wt.length!==et.cameras.length&&(et.cameras.length=0,It=!0);for(let I=0;I<wt.length;I++){const Ae=wt[I];let ne=null;if(x!==null)ne=x.getViewport(Ae);else{const Xt=_.getViewSubImage(y,Ae);ne=Xt.viewport,I===0&&(t.setRenderTargetTextures(D,Xt.colorTexture,Xt.depthStencilTexture),t.setRenderTarget(D))}let $t=G[I];$t===void 0&&($t=new hi,$t.layers.enable(I),$t.viewport=new $e,G[I]=$t),$t.matrix.fromArray(Ae.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(Ae.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(ne.x,ne.y,ne.width,ne.height),I===0&&(et.matrix.copy($t.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale)),It===!0&&et.cameras.push($t)}const kt=l.enabledFeatures;if(kt&&kt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&R){_=s.getBinding();const I=_.getDepthInformation(wt[0]);I&&I.isValid&&I.texture&&M.init(I,l.renderState)}if(kt&&kt.includes("camera-access")&&R){t.state.unbindTexture(),_=s.getBinding();for(let I=0;I<wt.length;I++){const Ae=wt[I].camera;if(Ae){let ne=S[Ae];ne||(ne=new cv,S[Ae]=ne);const $t=_.getCameraImage(Ae);ne.sourceTexture=$t}}}}for(let wt=0;wt<V.length;wt++){const It=F[wt],kt=V[wt];It!==null&&kt!==void 0&&kt.update(It,ct,p||h)}yt&&yt(it,ct),ct.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ct}),b=null}const Nt=new hv;Nt.setAnimationLoop(bt),this.setAnimationLoop=function(it){yt=it},this.dispose=function(){}}}const ms=new Pi,V1=new qe;function k1(o,t){function i(M,S){M.matrixAutoUpdate===!0&&M.updateMatrix(),S.value.copy(M.matrix)}function s(M,S){S.color.getRGB(M.fogColor.value,av(o)),S.isFog?(M.fogNear.value=S.near,M.fogFar.value=S.far):S.isFogExp2&&(M.fogDensity.value=S.density)}function l(M,S,B,O,D){S.isMeshBasicMaterial||S.isMeshLambertMaterial?c(M,S):S.isMeshToonMaterial?(c(M,S),_(M,S)):S.isMeshPhongMaterial?(c(M,S),g(M,S)):S.isMeshStandardMaterial?(c(M,S),y(M,S),S.isMeshPhysicalMaterial&&x(M,S,D)):S.isMeshMatcapMaterial?(c(M,S),b(M,S)):S.isMeshDepthMaterial?c(M,S):S.isMeshDistanceMaterial?(c(M,S),R(M,S)):S.isMeshNormalMaterial?c(M,S):S.isLineBasicMaterial?(h(M,S),S.isLineDashedMaterial&&d(M,S)):S.isPointsMaterial?m(M,S,B,O):S.isSpriteMaterial?p(M,S):S.isShadowMaterial?(M.color.value.copy(S.color),M.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function c(M,S){M.opacity.value=S.opacity,S.color&&M.diffuse.value.copy(S.color),S.emissive&&M.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.bumpMap&&(M.bumpMap.value=S.bumpMap,i(S.bumpMap,M.bumpMapTransform),M.bumpScale.value=S.bumpScale,S.side===kn&&(M.bumpScale.value*=-1)),S.normalMap&&(M.normalMap.value=S.normalMap,i(S.normalMap,M.normalMapTransform),M.normalScale.value.copy(S.normalScale),S.side===kn&&M.normalScale.value.negate()),S.displacementMap&&(M.displacementMap.value=S.displacementMap,i(S.displacementMap,M.displacementMapTransform),M.displacementScale.value=S.displacementScale,M.displacementBias.value=S.displacementBias),S.emissiveMap&&(M.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,M.emissiveMapTransform)),S.specularMap&&(M.specularMap.value=S.specularMap,i(S.specularMap,M.specularMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest);const B=t.get(S),O=B.envMap,D=B.envMapRotation;O&&(M.envMap.value=O,ms.copy(D),ms.x*=-1,ms.y*=-1,ms.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),M.envMapRotation.value.setFromMatrix4(V1.makeRotationFromEuler(ms)),M.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=S.reflectivity,M.ior.value=S.ior,M.refractionRatio.value=S.refractionRatio),S.lightMap&&(M.lightMap.value=S.lightMap,M.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,M.lightMapTransform)),S.aoMap&&(M.aoMap.value=S.aoMap,M.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,M.aoMapTransform))}function h(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform))}function d(M,S){M.dashSize.value=S.dashSize,M.totalSize.value=S.dashSize+S.gapSize,M.scale.value=S.scale}function m(M,S,B,O){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.size.value=S.size*B,M.scale.value=O*.5,S.map&&(M.map.value=S.map,i(S.map,M.uvTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function p(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.rotation.value=S.rotation,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function g(M,S){M.specular.value.copy(S.specular),M.shininess.value=Math.max(S.shininess,1e-4)}function _(M,S){S.gradientMap&&(M.gradientMap.value=S.gradientMap)}function y(M,S){M.metalness.value=S.metalness,S.metalnessMap&&(M.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,M.metalnessMapTransform)),M.roughness.value=S.roughness,S.roughnessMap&&(M.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,M.roughnessMapTransform)),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)}function x(M,S,B){M.ior.value=S.ior,S.sheen>0&&(M.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),M.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(M.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,M.sheenColorMapTransform)),S.sheenRoughnessMap&&(M.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,M.sheenRoughnessMapTransform))),S.clearcoat>0&&(M.clearcoat.value=S.clearcoat,M.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(M.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,M.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(M.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===kn&&M.clearcoatNormalScale.value.negate())),S.dispersion>0&&(M.dispersion.value=S.dispersion),S.iridescence>0&&(M.iridescence.value=S.iridescence,M.iridescenceIOR.value=S.iridescenceIOR,M.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(M.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,M.iridescenceMapTransform)),S.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),S.transmission>0&&(M.transmission.value=S.transmission,M.transmissionSamplerMap.value=B.texture,M.transmissionSamplerSize.value.set(B.width,B.height),S.transmissionMap&&(M.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,M.transmissionMapTransform)),M.thickness.value=S.thickness,S.thicknessMap&&(M.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=S.attenuationDistance,M.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(M.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(M.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=S.specularIntensity,M.specularColor.value.copy(S.specularColor),S.specularColorMap&&(M.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,M.specularColorMapTransform)),S.specularIntensityMap&&(M.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,S){S.matcap&&(M.matcap.value=S.matcap)}function R(M,S){const B=t.get(S).light;M.referencePosition.value.setFromMatrixPosition(B.matrixWorld),M.nearDistance.value=B.shadow.camera.near,M.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function X1(o,t,i,s){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(B,O){const D=O.program;s.uniformBlockBinding(B,D)}function p(B,O){let D=l[B.id];D===void 0&&(b(B),D=g(B),l[B.id]=D,B.addEventListener("dispose",M));const V=O.program;s.updateUBOMapping(B,V);const F=t.render.frame;c[B.id]!==F&&(y(B),c[B.id]=F)}function g(B){const O=_();B.__bindingPointIndex=O;const D=o.createBuffer(),V=B.__size,F=B.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,V,F),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,O,D),D}function _(){for(let B=0;B<d;B++)if(h.indexOf(B)===-1)return h.push(B),B;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(B){const O=l[B.id],D=B.uniforms,V=B.__cache;o.bindBuffer(o.UNIFORM_BUFFER,O);for(let F=0,z=D.length;F<z;F++){const Z=Array.isArray(D[F])?D[F]:[D[F]];for(let w=0,C=Z.length;w<C;w++){const G=Z[w];if(x(G,F,w,V)===!0){const et=G.__offset,lt=Array.isArray(G.value)?G.value:[G.value];let ft=0;for(let rt=0;rt<lt.length;rt++){const N=lt[rt],q=R(N);typeof N=="number"||typeof N=="boolean"?(G.__data[0]=N,o.bufferSubData(o.UNIFORM_BUFFER,et+ft,G.__data)):N.isMatrix3?(G.__data[0]=N.elements[0],G.__data[1]=N.elements[1],G.__data[2]=N.elements[2],G.__data[3]=0,G.__data[4]=N.elements[3],G.__data[5]=N.elements[4],G.__data[6]=N.elements[5],G.__data[7]=0,G.__data[8]=N.elements[6],G.__data[9]=N.elements[7],G.__data[10]=N.elements[8],G.__data[11]=0):(N.toArray(G.__data,ft),ft+=q.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,et,G.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function x(B,O,D,V){const F=B.value,z=O+"_"+D;if(V[z]===void 0)return typeof F=="number"||typeof F=="boolean"?V[z]=F:V[z]=F.clone(),!0;{const Z=V[z];if(typeof F=="number"||typeof F=="boolean"){if(Z!==F)return V[z]=F,!0}else if(Z.equals(F)===!1)return Z.copy(F),!0}return!1}function b(B){const O=B.uniforms;let D=0;const V=16;for(let z=0,Z=O.length;z<Z;z++){const w=Array.isArray(O[z])?O[z]:[O[z]];for(let C=0,G=w.length;C<G;C++){const et=w[C],lt=Array.isArray(et.value)?et.value:[et.value];for(let ft=0,rt=lt.length;ft<rt;ft++){const N=lt[ft],q=R(N),j=D%V,vt=j%q.boundary,xt=j+vt;D+=vt,xt!==0&&V-xt<q.storage&&(D+=V-xt),et.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),et.__offset=D,D+=q.storage}}}const F=D%V;return F>0&&(D+=V-F),B.__size=D,B.__cache={},this}function R(B){const O={boundary:0,storage:0};return typeof B=="number"||typeof B=="boolean"?(O.boundary=4,O.storage=4):B.isVector2?(O.boundary=8,O.storage=8):B.isVector3||B.isColor?(O.boundary=16,O.storage=12):B.isVector4?(O.boundary=16,O.storage=16):B.isMatrix3?(O.boundary=48,O.storage=48):B.isMatrix4?(O.boundary=64,O.storage=64):B.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",B),O}function M(B){const O=B.target;O.removeEventListener("dispose",M);const D=h.indexOf(O.__bindingPointIndex);h.splice(D,1),o.deleteBuffer(l[O.id]),delete l[O.id],delete c[O.id]}function S(){for(const B in l)o.deleteBuffer(l[B]);h=[],l={},c={}}return{bind:m,update:p,dispose:S}}class W1{constructor(t={}){const{canvas:i=yM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:y=!1}=t;this.isWebGLRenderer=!0;let x;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=s.getContextAttributes().alpha}else x=h;const b=new Uint32Array(4),R=new Int32Array(4);let M=null,S=null;const B=[],O=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Va,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let V=!1;this._outputColorSpace=ti;let F=0,z=0,Z=null,w=-1,C=null;const G=new $e,et=new $e;let lt=null;const ft=new be(0);let rt=0,N=i.width,q=i.height,j=1,vt=null,xt=null;const L=new $e(0,0,N,q),nt=new $e(0,0,N,q);let yt=!1;const bt=new Pd;let Nt=!1,it=!1;const ct=new qe,wt=new $,It=new $e,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let de=!1;function an(){return Z===null?j:1}let I=s;function Ae(A,X){return i.getContext(A,X)}try{const A={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Td}`),i.addEventListener("webglcontextlost",Ct,!1),i.addEventListener("webglcontextrestored",zt,!1),i.addEventListener("webglcontextcreationerror",Mt,!1),I===null){const X="webgl2";if(I=Ae(X,A),I===null)throw Ae(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ne,$t,Xt,Ge,Vt,ae,Ke,Ze,U,E,J,dt,St,ut,jt,At,Yt,qt,Et,Rt,Zt,Pt,Dt,re;function k(){ne=new eb(I),ne.init(),Pt=new I1(I,ne),$t=new jT(I,ne,t,Pt),Xt=new P1(I,ne),$t.reversedDepthBuffer&&y&&Xt.buffers.depth.setReversed(!0),Ge=new ab(I),Vt=new x1,ae=new z1(I,ne,Xt,Vt,$t,Pt,Ge),Ke=new KT(D),Ze=new tb(D),U=new ux(I),Dt=new YT(I,U),E=new nb(I,U,Ge,Dt),J=new rb(I,E,U,Ge),Et=new sb(I,$t,ae),At=new ZT(Vt),dt=new M1(D,Ke,Ze,ne,$t,Dt,At),St=new k1(D,Vt),ut=new T1,jt=new D1(ne),qt=new WT(D,Ke,Ze,Xt,J,x,m),Yt=new N1(D,J,$t),re=new X1(I,Ge,$t,Xt),Rt=new qT(I,ne,Ge),Zt=new ib(I,ne,Ge),Ge.programs=dt.programs,D.capabilities=$t,D.extensions=ne,D.properties=Vt,D.renderLists=ut,D.shadowMap=Yt,D.state=Xt,D.info=Ge}k();const Tt=new G1(D,I);this.xr=Tt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const A=ne.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ne.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(A){A!==void 0&&(j=A,this.setSize(N,q,!1))},this.getSize=function(A){return A.set(N,q)},this.setSize=function(A,X,at=!0){if(Tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=A,q=X,i.width=Math.floor(A*j),i.height=Math.floor(X*j),at===!0&&(i.style.width=A+"px",i.style.height=X+"px"),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(N*j,q*j).floor()},this.setDrawingBufferSize=function(A,X,at){N=A,q=X,j=at,i.width=Math.floor(A*at),i.height=Math.floor(X*at),this.setViewport(0,0,A,X)},this.getCurrentViewport=function(A){return A.copy(G)},this.getViewport=function(A){return A.copy(L)},this.setViewport=function(A,X,at,st){A.isVector4?L.set(A.x,A.y,A.z,A.w):L.set(A,X,at,st),Xt.viewport(G.copy(L).multiplyScalar(j).round())},this.getScissor=function(A){return A.copy(nt)},this.setScissor=function(A,X,at,st){A.isVector4?nt.set(A.x,A.y,A.z,A.w):nt.set(A,X,at,st),Xt.scissor(et.copy(nt).multiplyScalar(j).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(A){Xt.setScissorTest(yt=A)},this.setOpaqueSort=function(A){vt=A},this.setTransparentSort=function(A){xt=A},this.getClearColor=function(A){return A.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor(...arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha(...arguments)},this.clear=function(A=!0,X=!0,at=!0){let st=0;if(A){let Y=!1;if(Z!==null){const gt=Z.texture.format;Y=gt===Ud||gt===Dd||gt===wd}if(Y){const gt=Z.texture.type,Ut=gt===Oi||gt===Es||gt===Go||gt===Vo||gt===Ad||gt===Rd,Ht=qt.getClearColor(),Ot=qt.getClearAlpha(),Kt=Ht.r,ee=Ht.g,Qt=Ht.b;Ut?(b[0]=Kt,b[1]=ee,b[2]=Qt,b[3]=Ot,I.clearBufferuiv(I.COLOR,0,b)):(R[0]=Kt,R[1]=ee,R[2]=Qt,R[3]=Ot,I.clearBufferiv(I.COLOR,0,R))}else st|=I.COLOR_BUFFER_BIT}X&&(st|=I.DEPTH_BUFFER_BIT),at&&(st|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ct,!1),i.removeEventListener("webglcontextrestored",zt,!1),i.removeEventListener("webglcontextcreationerror",Mt,!1),qt.dispose(),ut.dispose(),jt.dispose(),Vt.dispose(),Ke.dispose(),Ze.dispose(),J.dispose(),Dt.dispose(),re.dispose(),dt.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",ni),Tt.removeEventListener("sessionend",Hr),Ti.stop()};function Ct(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function zt(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;const A=Ge.autoReset,X=Yt.enabled,at=Yt.autoUpdate,st=Yt.needsUpdate,Y=Yt.type;k(),Ge.autoReset=A,Yt.enabled=X,Yt.autoUpdate=at,Yt.needsUpdate=st,Yt.type=Y}function Mt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function _t(A){const X=A.target;X.removeEventListener("dispose",_t),Bt(X)}function Bt(A){ie(A),Vt.remove(A)}function ie(A){const X=Vt.get(A).programs;X!==void 0&&(X.forEach(function(at){dt.releaseProgram(at)}),A.isShaderMaterial&&dt.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,at,st,Y,gt){X===null&&(X=kt);const Ut=Y.isMesh&&Y.matrixWorld.determinant()<0,Ht=ca(A,X,at,st,Y);Xt.setMaterial(st,Ut);let Ot=at.index,Kt=1;if(st.wireframe===!0){if(Ot=E.getWireframeAttribute(at),Ot===void 0)return;Kt=2}const ee=at.drawRange,Qt=at.attributes.position;let pe=ee.start*Kt,Ue=(ee.start+ee.count)*Kt;gt!==null&&(pe=Math.max(pe,gt.start*Kt),Ue=Math.min(Ue,(gt.start+gt.count)*Kt)),Ot!==null?(pe=Math.max(pe,0),Ue=Math.min(Ue,Ot.count)):Qt!=null&&(pe=Math.max(pe,0),Ue=Math.min(Ue,Qt.count));const Ve=Ue-pe;if(Ve<0||Ve===1/0)return;Dt.setup(Y,st,Ht,at,Ot);let Le,me=Rt;if(Ot!==null&&(Le=U.get(Ot),me=Zt,me.setIndex(Le)),Y.isMesh)st.wireframe===!0?(Xt.setLineWidth(st.wireframeLinewidth*an()),me.setMode(I.LINES)):me.setMode(I.TRIANGLES);else if(Y.isLine){let Gt=st.linewidth;Gt===void 0&&(Gt=1),Xt.setLineWidth(Gt*an()),Y.isLineSegments?me.setMode(I.LINES):Y.isLineLoop?me.setMode(I.LINE_LOOP):me.setMode(I.LINE_STRIP)}else Y.isPoints?me.setMode(I.POINTS):Y.isSprite&&me.setMode(I.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)Wo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),me.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))me.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Gt=Y._multiDrawStarts,Xe=Y._multiDrawCounts,Te=Y._multiDrawCount,Mn=Ot?U.get(Ot).bytesPerElement:1,zi=Vt.get(st).currentProgram.getUniforms();for(let gn=0;gn<Te;gn++)zi.setValue(I,"_gl_DrawID",gn),me.render(Gt[gn]/Mn,Xe[gn])}else if(Y.isInstancedMesh)me.renderInstances(pe,Ve,Y.count);else if(at.isInstancedBufferGeometry){const Gt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,Xe=Math.min(at.instanceCount,Gt);me.renderInstances(pe,Ve,Xe)}else me.render(pe,Ve)};function Ne(A,X,at){A.transparent===!0&&A.side===ra&&A.forceSinglePass===!1?(A.side=kn,A.needsUpdate=!0,Xn(A,X,at),A.side=ka,A.needsUpdate=!0,Xn(A,X,at),A.side=ra):Xn(A,X,at)}this.compile=function(A,X,at=null){at===null&&(at=A),S=jt.get(at),S.init(X),O.push(S),at.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(S.pushLight(Y),Y.castShadow&&S.pushShadow(Y))}),A!==at&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(S.pushLight(Y),Y.castShadow&&S.pushShadow(Y))}),S.setupLights();const st=new Set;return A.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const gt=Y.material;if(gt)if(Array.isArray(gt))for(let Ut=0;Ut<gt.length;Ut++){const Ht=gt[Ut];Ne(Ht,at,Y),st.add(Ht)}else Ne(gt,at,Y),st.add(gt)}),S=O.pop(),st},this.compileAsync=function(A,X,at=null){const st=this.compile(A,X,at);return new Promise(Y=>{function gt(){if(st.forEach(function(Ut){Vt.get(Ut).currentProgram.isReady()&&st.delete(Ut)}),st.size===0){Y(A);return}setTimeout(gt,10)}ne.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let Ee=null;function Dn(A){Ee&&Ee(A)}function ni(){Ti.stop()}function Hr(){Ti.start()}const Ti=new hv;Ti.setAnimationLoop(Dn),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(A){Ee=A,Tt.setAnimationLoop(A),A===null?Ti.stop():Ti.start()},Tt.addEventListener("sessionstart",ni),Tt.addEventListener("sessionend",Hr),this.render=function(A,X){if(window.__galleryCaptureScene)return;if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(X),X=Tt.getCamera()),A.isScene===!0&&A.onBeforeRender(D,A,X,Z),S=jt.get(A,O.length),S.init(X),O.push(S),ct.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),bt.setFromProjectionMatrix(ct,Ni,X.reversedDepth),it=this.localClippingEnabled,Nt=At.init(this.clippingPlanes,it),M=ut.get(A,B.length),M.init(),B.push(M),Tt.enabled===!0&&Tt.isPresenting===!0){const gt=D.xr.getDepthSensingMesh();gt!==null&&Cs(gt,X,-1/0,D.sortObjects)}Cs(A,X,0,D.sortObjects),M.finish(),D.sortObjects===!0&&M.sort(vt,xt),de=Tt.enabled===!1||Tt.isPresenting===!1||Tt.hasDepthSensing()===!1,de&&qt.addToRenderList(M,A),this.info.render.frame++,Nt===!0&&At.beginShadows();const at=S.state.shadowsArray;Yt.render(at,A,X),Nt===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=M.opaque,Y=M.transmissive;if(S.setupLights(),X.isArrayCamera){const gt=X.cameras;if(Y.length>0)for(let Ut=0,Ht=gt.length;Ut<Ht;Ut++){const Ot=gt[Ut];Ds(st,Y,A,Ot)}de&&qt.render(A);for(let Ut=0,Ht=gt.length;Ut<Ht;Ut++){const Ot=gt[Ut];ws(M,A,Ot,Ot.viewport)}}else Y.length>0&&Ds(st,Y,A,X),de&&qt.render(A),ws(M,A,X);Z!==null&&z===0&&(ae.updateMultisampleRenderTarget(Z),ae.updateRenderTargetMipmap(Z)),A.isScene===!0&&A.onAfterRender(D,A,X),Dt.resetDefaultState(),w=-1,C=null,O.pop(),O.length>0?(S=O[O.length-1],Nt===!0&&At.setGlobalState(D.clippingPlanes,S.state.camera)):S=null,B.pop(),B.length>0?M=B[B.length-1]:M=null};function Cs(A,X,at,st){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)at=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)S.pushLight(A),A.castShadow&&S.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||bt.intersectsSprite(A)){st&&It.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ct);const Ut=J.update(A),Ht=A.material;Ht.visible&&M.push(A,Ut,Ht,at,It.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||bt.intersectsObject(A))){const Ut=J.update(A),Ht=A.material;if(st&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),It.copy(A.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),It.copy(Ut.boundingSphere.center)),It.applyMatrix4(A.matrixWorld).applyMatrix4(ct)),Array.isArray(Ht)){const Ot=Ut.groups;for(let Kt=0,ee=Ot.length;Kt<ee;Kt++){const Qt=Ot[Kt],pe=Ht[Qt.materialIndex];pe&&pe.visible&&M.push(A,Ut,pe,at,It.z,Qt)}}else Ht.visible&&M.push(A,Ut,Ht,at,It.z,null)}}const gt=A.children;for(let Ut=0,Ht=gt.length;Ut<Ht;Ut++)Cs(gt[Ut],X,at,st)}function ws(A,X,at,st){const Y=A.opaque,gt=A.transmissive,Ut=A.transparent;S.setupLightsView(at),Nt===!0&&At.setGlobalState(D.clippingPlanes,at),st&&Xt.viewport(G.copy(st)),Y.length>0&&Wa(Y,X,at),gt.length>0&&Wa(gt,X,at),Ut.length>0&&Wa(Ut,X,at),Xt.buffers.depth.setTest(!0),Xt.buffers.depth.setMask(!0),Xt.buffers.color.setMask(!0),Xt.setPolygonOffset(!1)}function Ds(A,X,at,st){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;S.state.transmissionRenderTarget[st.id]===void 0&&(S.state.transmissionRenderTarget[st.id]=new bs(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?Yo:Oi,minFilter:Ms,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:we.workingColorSpace}));const gt=S.state.transmissionRenderTarget[st.id],Ut=st.viewport||G;gt.setSize(Ut.z*D.transmissionResolutionScale,Ut.w*D.transmissionResolutionScale);const Ht=D.getRenderTarget(),Ot=D.getActiveCubeFace(),Kt=D.getActiveMipmapLevel();D.setRenderTarget(gt),D.getClearColor(ft),rt=D.getClearAlpha(),rt<1&&D.setClearColor(16777215,.5),D.clear(),de&&qt.render(at);const ee=D.toneMapping;D.toneMapping=Va;const Qt=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),S.setupLightsView(st),Nt===!0&&At.setGlobalState(D.clippingPlanes,st),Wa(A,at,st),ae.updateMultisampleRenderTarget(gt),ae.updateRenderTargetMipmap(gt),ne.has("WEBGL_multisampled_render_to_texture")===!1){let pe=!1;for(let Ue=0,Ve=X.length;Ue<Ve;Ue++){const Le=X[Ue],me=Le.object,Gt=Le.geometry,Xe=Le.material,Te=Le.group;if(Xe.side===ra&&me.layers.test(st.layers)){const Mn=Xe.side;Xe.side=kn,Xe.needsUpdate=!0,Gr(me,at,st,Gt,Xe,Te),Xe.side=Mn,Xe.needsUpdate=!0,pe=!0}}pe===!0&&(ae.updateMultisampleRenderTarget(gt),ae.updateRenderTargetMipmap(gt))}D.setRenderTarget(Ht,Ot,Kt),D.setClearColor(ft,rt),Qt!==void 0&&(st.viewport=Qt),D.toneMapping=ee}function Wa(A,X,at){const st=X.isScene===!0?X.overrideMaterial:null;for(let Y=0,gt=A.length;Y<gt;Y++){const Ut=A[Y],Ht=Ut.object,Ot=Ut.geometry,Kt=Ut.group;let ee=Ut.material;ee.allowOverride===!0&&st!==null&&(ee=st),Ht.layers.test(at.layers)&&Gr(Ht,X,at,Ot,ee,Kt)}}function Gr(A,X,at,st,Y,gt){A.onBeforeRender(D,X,at,st,Y,gt),A.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(D,X,at,st,A,gt),Y.transparent===!0&&Y.side===ra&&Y.forceSinglePass===!1?(Y.side=kn,Y.needsUpdate=!0,D.renderBufferDirect(at,X,st,Y,A,gt),Y.side=ka,Y.needsUpdate=!0,D.renderBufferDirect(at,X,st,Y,A,gt),Y.side=ra):D.renderBufferDirect(at,X,st,Y,A,gt),A.onAfterRender(D,X,at,st,Y,gt)}function Xn(A,X,at){X.isScene!==!0&&(X=kt);const st=Vt.get(A),Y=S.state.lights,gt=S.state.shadowsArray,Ut=Y.state.version,Ht=dt.getParameters(A,Y.state,gt,X,at),Ot=dt.getProgramCacheKey(Ht);let Kt=st.programs;st.environment=A.isMeshStandardMaterial?X.environment:null,st.fog=X.fog,st.envMap=(A.isMeshStandardMaterial?Ze:Ke).get(A.envMap||st.environment),st.envMapRotation=st.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,Kt===void 0&&(A.addEventListener("dispose",_t),Kt=new Map,st.programs=Kt);let ee=Kt.get(Ot);if(ee!==void 0){if(st.currentProgram===ee&&st.lightsStateVersion===Ut)return yn(A,Ht),ee}else Ht.uniforms=dt.getUniforms(A),A.onBeforeCompile(Ht,D),ee=dt.acquireProgram(Ht,Ot),Kt.set(Ot,ee),st.uniforms=Ht.uniforms;const Qt=st.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Qt.clippingPlanes=At.uniform),yn(A,Ht),st.needsLights=kc(A),st.lightsStateVersion=Ut,st.needsLights&&(Qt.ambientLightColor.value=Y.state.ambient,Qt.lightProbe.value=Y.state.probe,Qt.directionalLights.value=Y.state.directional,Qt.directionalLightShadows.value=Y.state.directionalShadow,Qt.spotLights.value=Y.state.spot,Qt.spotLightShadows.value=Y.state.spotShadow,Qt.rectAreaLights.value=Y.state.rectArea,Qt.ltc_1.value=Y.state.rectAreaLTC1,Qt.ltc_2.value=Y.state.rectAreaLTC2,Qt.pointLights.value=Y.state.point,Qt.pointLightShadows.value=Y.state.pointShadow,Qt.hemisphereLights.value=Y.state.hemi,Qt.directionalShadowMap.value=Y.state.directionalShadowMap,Qt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Qt.spotShadowMap.value=Y.state.spotShadowMap,Qt.spotLightMatrix.value=Y.state.spotLightMatrix,Qt.spotLightMap.value=Y.state.spotLightMap,Qt.pointShadowMap.value=Y.state.pointShadowMap,Qt.pointShadowMatrix.value=Y.state.pointShadowMatrix),st.currentProgram=ee,st.uniformsList=null,ee}function sn(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=zc.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function yn(A,X){const at=Vt.get(A);at.outputColorSpace=X.outputColorSpace,at.batching=X.batching,at.batchingColor=X.batchingColor,at.instancing=X.instancing,at.instancingColor=X.instancingColor,at.instancingMorph=X.instancingMorph,at.skinning=X.skinning,at.morphTargets=X.morphTargets,at.morphNormals=X.morphNormals,at.morphColors=X.morphColors,at.morphTargetsCount=X.morphTargetsCount,at.numClippingPlanes=X.numClippingPlanes,at.numIntersection=X.numClipIntersection,at.vertexAlphas=X.vertexAlphas,at.vertexTangents=X.vertexTangents,at.toneMapping=X.toneMapping}function ca(A,X,at,st,Y){X.isScene!==!0&&(X=kt),ae.resetTextureUnits();const gt=X.fog,Ut=st.isMeshStandardMaterial?X.environment:null,Ht=Z===null?D.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Nr,Ot=(st.isMeshStandardMaterial?Ze:Ke).get(st.envMap||Ut),Kt=st.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,ee=!!at.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Qt=!!at.morphAttributes.position,pe=!!at.morphAttributes.normal,Ue=!!at.morphAttributes.color;let Ve=Va;st.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ve=D.toneMapping);const Le=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,me=Le!==void 0?Le.length:0,Gt=Vt.get(st),Xe=S.state.lights;if(Nt===!0&&(it===!0||A!==C)){const fn=A===C&&st.id===w;At.setState(st,A,fn)}let Te=!1;st.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==Xe.state.version||Gt.outputColorSpace!==Ht||Y.isBatchedMesh&&Gt.batching===!1||!Y.isBatchedMesh&&Gt.batching===!0||Y.isBatchedMesh&&Gt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Gt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Gt.instancing===!1||!Y.isInstancedMesh&&Gt.instancing===!0||Y.isSkinnedMesh&&Gt.skinning===!1||!Y.isSkinnedMesh&&Gt.skinning===!0||Y.isInstancedMesh&&Gt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Gt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Gt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Gt.instancingMorph===!1&&Y.morphTexture!==null||Gt.envMap!==Ot||st.fog===!0&&Gt.fog!==gt||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==At.numPlanes||Gt.numIntersection!==At.numIntersection)||Gt.vertexAlphas!==Kt||Gt.vertexTangents!==ee||Gt.morphTargets!==Qt||Gt.morphNormals!==pe||Gt.morphColors!==Ue||Gt.toneMapping!==Ve||Gt.morphTargetsCount!==me)&&(Te=!0):(Te=!0,Gt.__version=st.version);let Mn=Gt.currentProgram;Te===!0&&(Mn=Xn(st,X,Y));let zi=!1,gn=!1,qa=!1;const Se=Mn.getUniforms(),An=Gt.uniforms;if(Xt.useProgram(Mn.program)&&(zi=!0,gn=!0,qa=!0),st.id!==w&&(w=st.id,gn=!0),zi||C!==A){Xt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Se.setValue(I,"projectionMatrix",A.projectionMatrix),Se.setValue(I,"viewMatrix",A.matrixWorldInverse);const tn=Se.map.cameraPosition;tn!==void 0&&tn.setValue(I,wt.setFromMatrixPosition(A.matrixWorld)),$t.logarithmicDepthBuffer&&Se.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Se.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,gn=!0,qa=!0)}if(Y.isSkinnedMesh){Se.setOptional(I,Y,"bindMatrix"),Se.setOptional(I,Y,"bindMatrixInverse");const fn=Y.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),Se.setValue(I,"boneTexture",fn.boneTexture,ae))}Y.isBatchedMesh&&(Se.setOptional(I,Y,"batchingTexture"),Se.setValue(I,"batchingTexture",Y._matricesTexture,ae),Se.setOptional(I,Y,"batchingIdTexture"),Se.setValue(I,"batchingIdTexture",Y._indirectTexture,ae),Se.setOptional(I,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Se.setValue(I,"batchingColorTexture",Y._colorsTexture,ae));const Un=at.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&Et.update(Y,at,Mn),(gn||Gt.receiveShadow!==Y.receiveShadow)&&(Gt.receiveShadow=Y.receiveShadow,Se.setValue(I,"receiveShadow",Y.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(An.envMap.value=Ot,An.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&X.environment!==null&&(An.envMapIntensity.value=X.environmentIntensity),gn&&(Se.setValue(I,"toneMappingExposure",D.toneMappingExposure),Gt.needsLights&&Vr(An,qa),gt&&st.fog===!0&&St.refreshFogUniforms(An,gt),St.refreshMaterialUniforms(An,st,j,q,S.state.transmissionRenderTarget[A.id]),zc.upload(I,sn(Gt),An,ae)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(zc.upload(I,sn(Gt),An,ae),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Se.setValue(I,"center",Y.center),Se.setValue(I,"modelViewMatrix",Y.modelViewMatrix),Se.setValue(I,"normalMatrix",Y.normalMatrix),Se.setValue(I,"modelMatrix",Y.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const fn=st.uniformsGroups;for(let tn=0,Us=fn.length;tn<Us;tn++){const bi=fn[tn];re.update(bi,Mn),re.bind(bi,Mn)}}return Mn}function Vr(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function kc(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(A,X,at){const st=Vt.get(A);st.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),Vt.get(A.texture).__webglTexture=X,Vt.get(A.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:at,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,X){const at=Vt.get(A);at.__webglFramebuffer=X,at.__useDefaultFramebuffer=X===void 0};const Xc=I.createFramebuffer();this.setRenderTarget=function(A,X=0,at=0){Z=A,F=X,z=at;let st=!0,Y=null,gt=!1,Ut=!1;if(A){const Ot=Vt.get(A);if(Ot.__useDefaultFramebuffer!==void 0)Xt.bindFramebuffer(I.FRAMEBUFFER,null),st=!1;else if(Ot.__webglFramebuffer===void 0)ae.setupRenderTarget(A);else if(Ot.__hasExternalTextures)ae.rebindTextures(A,Vt.get(A.texture).__webglTexture,Vt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Qt=A.depthTexture;if(Ot.__boundDepthTexture!==Qt){if(Qt!==null&&Vt.has(Qt)&&(A.width!==Qt.image.width||A.height!==Qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ae.setupDepthRenderbuffer(A)}}const Kt=A.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(Ut=!0);const ee=Vt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ee[X])?Y=ee[X][at]:Y=ee[X],gt=!0):A.samples>0&&ae.useMultisampledRTT(A)===!1?Y=Vt.get(A).__webglMultisampledFramebuffer:Array.isArray(ee)?Y=ee[at]:Y=ee,G.copy(A.viewport),et.copy(A.scissor),lt=A.scissorTest}else G.copy(L).multiplyScalar(j).floor(),et.copy(nt).multiplyScalar(j).floor(),lt=yt;if(at!==0&&(Y=Xc),Xt.bindFramebuffer(I.FRAMEBUFFER,Y)&&st&&Xt.drawBuffers(A,Y),Xt.viewport(G),Xt.scissor(et),Xt.setScissorTest(lt),gt){const Ot=Vt.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ot.__webglTexture,at)}else if(Ut){const Ot=X;for(let Kt=0;Kt<A.textures.length;Kt++){const ee=Vt.get(A.textures[Kt]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Kt,ee.__webglTexture,at,Ot)}}else if(A!==null&&at!==0){const Ot=Vt.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ot.__webglTexture,at)}w=-1},this.readRenderTargetPixels=function(A,X,at,st,Y,gt,Ut,Ht=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=Vt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ot=Ot[Ut]),Ot){Xt.bindFramebuffer(I.FRAMEBUFFER,Ot);try{const Kt=A.textures[Ht],ee=Kt.format,Qt=Kt.type;if(!$t.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$t.textureTypeReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-st&&at>=0&&at<=A.height-Y&&(A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ht),I.readPixels(X,at,st,Y,Pt.convert(ee),Pt.convert(Qt),gt))}finally{const Kt=Z!==null?Vt.get(Z).__webglFramebuffer:null;Xt.bindFramebuffer(I.FRAMEBUFFER,Kt)}}},this.readRenderTargetPixelsAsync=async function(A,X,at,st,Y,gt,Ut,Ht=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=Vt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ot=Ot[Ut]),Ot)if(X>=0&&X<=A.width-st&&at>=0&&at<=A.height-Y){Xt.bindFramebuffer(I.FRAMEBUFFER,Ot);const Kt=A.textures[Ht],ee=Kt.format,Qt=Kt.type;if(!$t.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$t.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pe=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,pe),I.bufferData(I.PIXEL_PACK_BUFFER,gt.byteLength,I.STREAM_READ),A.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Ht),I.readPixels(X,at,st,Y,Pt.convert(ee),Pt.convert(Qt),0);const Ue=Z!==null?Vt.get(Z).__webglFramebuffer:null;Xt.bindFramebuffer(I.FRAMEBUFFER,Ue);const Ve=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await MM(I,Ve,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,pe),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,gt),I.deleteBuffer(pe),I.deleteSync(Ve),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,X=null,at=0){const st=Math.pow(2,-at),Y=Math.floor(A.image.width*st),gt=Math.floor(A.image.height*st),Ut=X!==null?X.x:0,Ht=X!==null?X.y:0;ae.setTexture2D(A,0),I.copyTexSubImage2D(I.TEXTURE_2D,at,0,0,Ut,Ht,Y,gt),Xt.unbindTexture()};const jo=I.createFramebuffer(),Ya=I.createFramebuffer();this.copyTextureToTexture=function(A,X,at=null,st=null,Y=0,gt=null){gt===null&&(Y!==0?(Wo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),gt=Y,Y=0):gt=0);let Ut,Ht,Ot,Kt,ee,Qt,pe,Ue,Ve;const Le=A.isCompressedTexture?A.mipmaps[gt]:A.image;if(at!==null)Ut=at.max.x-at.min.x,Ht=at.max.y-at.min.y,Ot=at.isBox3?at.max.z-at.min.z:1,Kt=at.min.x,ee=at.min.y,Qt=at.isBox3?at.min.z:0;else{const Un=Math.pow(2,-Y);Ut=Math.floor(Le.width*Un),Ht=Math.floor(Le.height*Un),A.isDataArrayTexture?Ot=Le.depth:A.isData3DTexture?Ot=Math.floor(Le.depth*Un):Ot=1,Kt=0,ee=0,Qt=0}st!==null?(pe=st.x,Ue=st.y,Ve=st.z):(pe=0,Ue=0,Ve=0);const me=Pt.convert(X.format),Gt=Pt.convert(X.type);let Xe;X.isData3DTexture?(ae.setTexture3D(X,0),Xe=I.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(ae.setTexture2DArray(X,0),Xe=I.TEXTURE_2D_ARRAY):(ae.setTexture2D(X,0),Xe=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,X.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,X.unpackAlignment);const Te=I.getParameter(I.UNPACK_ROW_LENGTH),Mn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),zi=I.getParameter(I.UNPACK_SKIP_PIXELS),gn=I.getParameter(I.UNPACK_SKIP_ROWS),qa=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Le.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Le.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Kt),I.pixelStorei(I.UNPACK_SKIP_ROWS,ee),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Qt);const Se=A.isDataArrayTexture||A.isData3DTexture,An=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){const Un=Vt.get(A),fn=Vt.get(X),tn=Vt.get(Un.__renderTarget),Us=Vt.get(fn.__renderTarget);Xt.bindFramebuffer(I.READ_FRAMEBUFFER,tn.__webglFramebuffer),Xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Us.__webglFramebuffer);for(let bi=0;bi<Ot;bi++)Se&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Vt.get(A).__webglTexture,Y,Qt+bi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Vt.get(X).__webglTexture,gt,Ve+bi)),I.blitFramebuffer(Kt,ee,Ut,Ht,pe,Ue,Ut,Ht,I.DEPTH_BUFFER_BIT,I.NEAREST);Xt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(Y!==0||A.isRenderTargetTexture||Vt.has(A)){const Un=Vt.get(A),fn=Vt.get(X);Xt.bindFramebuffer(I.READ_FRAMEBUFFER,jo),Xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ya);for(let tn=0;tn<Ot;tn++)Se?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Un.__webglTexture,Y,Qt+tn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Un.__webglTexture,Y),An?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,fn.__webglTexture,gt,Ve+tn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,fn.__webglTexture,gt),Y!==0?I.blitFramebuffer(Kt,ee,Ut,Ht,pe,Ue,Ut,Ht,I.COLOR_BUFFER_BIT,I.NEAREST):An?I.copyTexSubImage3D(Xe,gt,pe,Ue,Ve+tn,Kt,ee,Ut,Ht):I.copyTexSubImage2D(Xe,gt,pe,Ue,Kt,ee,Ut,Ht);Xt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else An?A.isDataTexture||A.isData3DTexture?I.texSubImage3D(Xe,gt,pe,Ue,Ve,Ut,Ht,Ot,me,Gt,Le.data):X.isCompressedArrayTexture?I.compressedTexSubImage3D(Xe,gt,pe,Ue,Ve,Ut,Ht,Ot,me,Le.data):I.texSubImage3D(Xe,gt,pe,Ue,Ve,Ut,Ht,Ot,me,Gt,Le):A.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,gt,pe,Ue,Ut,Ht,me,Gt,Le.data):A.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,gt,pe,Ue,Le.width,Le.height,me,Le.data):I.texSubImage2D(I.TEXTURE_2D,gt,pe,Ue,Ut,Ht,me,Gt,Le);I.pixelStorei(I.UNPACK_ROW_LENGTH,Te),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Mn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,zi),I.pixelStorei(I.UNPACK_SKIP_ROWS,gn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,qa),gt===0&&X.generateMipmaps&&I.generateMipmap(Xe),Xt.unbindTexture()},this.initRenderTarget=function(A){Vt.get(A).__webglFramebuffer===void 0&&ae.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ae.setTextureCube(A,0):A.isData3DTexture?ae.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ae.setTexture2DArray(A,0):ae.setTexture2D(A,0),Xt.unbindTexture()},this.resetState=function(){F=0,z=0,Z=null,Xt.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=we._getDrawingBufferColorSpace(t),i.unpackColorSpace=we._getUnpackColorSpace()}}const U0={type:"change"},Id={type:"start"},gv={type:"end"},wc=new Nd,L0=new Fa,Y1=Math.cos(70*SM.DEG2RAD),dn=new $,Vn=2*Math.PI,He={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Lh=1e-6;class q1 extends lx{constructor(t,i=null){super(t,i),this.state=He.NONE,this.target=new $,this.cursor=new $,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Rr.ROTATE,MIDDLE:Rr.DOLLY,RIGHT:Rr.PAN},this.touches={ONE:br.ROTATE,TWO:br.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new $,this._lastQuaternion=new Ts,this._lastTargetPosition=new $,this._quat=new Ts().setFromUnitVectors(t.up,new $(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new s0,this._sphericalDelta=new s0,this._scale=1,this._panOffset=new $,this._rotateStart=new ce,this._rotateEnd=new ce,this._rotateDelta=new ce,this._panStart=new ce,this._panEnd=new ce,this._panDelta=new ce,this._dollyStart=new ce,this._dollyEnd=new ce,this._dollyDelta=new ce,this._dollyDirection=new $,this._mouse=new ce,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Z1.bind(this),this._onPointerDown=j1.bind(this),this._onPointerUp=K1.bind(this),this._onContextMenu=iA.bind(this),this._onMouseWheel=$1.bind(this),this._onKeyDown=tA.bind(this),this._onTouchStart=eA.bind(this),this._onTouchMove=nA.bind(this),this._onMouseDown=Q1.bind(this),this._onMouseMove=J1.bind(this),this._interceptControlDown=aA.bind(this),this._interceptControlUp=sA.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(U0),this.update(),this.state=He.NONE}update(t=null){const i=this.object.position;dn.copy(i).sub(this.target),dn.applyQuaternion(this._quat),this._spherical.setFromVector3(dn),this.autoRotate&&this.state===He.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Vn:s>Math.PI&&(s-=Vn),l<-Math.PI?l+=Vn:l>Math.PI&&(l-=Vn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=h!=this._spherical.radius}if(dn.setFromSpherical(this._spherical),dn.applyQuaternion(this._quatInverse),i.copy(this.target).add(dn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=dn.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const d=new $(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new $(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=dn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(wc.origin.copy(this.object.position),wc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(wc.direction))<Y1?this.object.lookAt(this.target):(L0.setFromNormalAndCoplanarPoint(this.object.up,this.target),wc.intersectPlane(L0,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Lh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Lh||this._lastTargetPosition.distanceToSquared(this.target)>Lh?(this.dispatchEvent(U0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Vn/60*this.autoRotateSpeed*t:Vn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){dn.setFromMatrixColumn(i,0),dn.multiplyScalar(-t),this._panOffset.add(dn)}_panUp(t,i){this.screenSpacePanning===!0?dn.setFromMatrixColumn(i,1):(dn.setFromMatrixColumn(i,0),dn.crossVectors(this.object.up,dn)),dn.multiplyScalar(t),this._panOffset.add(dn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;dn.copy(l).sub(this.target);let c=dn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Vn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Vn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Vn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Vn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new ce,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function j1(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function Z1(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function K1(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(gv),this.state=He.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function Q1(o){let t;switch(o.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Rr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=He.DOLLY;break;case Rr.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=He.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=He.ROTATE}break;case Rr.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=He.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=He.PAN}break;default:this.state=He.NONE}this.state!==He.NONE&&this.dispatchEvent(Id)}function J1(o){switch(this.state){case He.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case He.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case He.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function $1(o){this.enabled===!1||this.enableZoom===!1||this.state!==He.NONE||(o.preventDefault(),this.dispatchEvent(Id),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(gv))}function tA(o){this.enabled!==!1&&this._handleKeyDown(o)}function eA(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case br.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=He.TOUCH_ROTATE;break;case br.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=He.TOUCH_PAN;break;default:this.state=He.NONE}break;case 2:switch(this.touches.TWO){case br.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=He.TOUCH_DOLLY_PAN;break;case br.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=He.TOUCH_DOLLY_ROTATE;break;default:this.state=He.NONE}break;default:this.state=He.NONE}this.state!==He.NONE&&this.dispatchEvent(Id)}function nA(o){switch(this._trackPointer(o),this.state){case He.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case He.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case He.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case He.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=He.NONE}}function iA(o){this.enabled!==!1&&o.preventDefault()}function aA(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function sA(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const yi={dawn:{clear:12888201,fog:12888201,hemiSky:16768957,hemiGround:4015929,hemiIntensity:1.55,sun:16761722,sunIntensity:3.4,fill:9680840,fillIntensity:1.25,exposure:1.12},sunset:{clear:7159099,fog:7159099,hemiSky:15768437,hemiGround:2635312,hemiIntensity:1.25,sun:16747084,sunIntensity:4.15,fill:6707084,fillIntensity:1.05,exposure:1.04},moon:{clear:1452859,fog:1452859,hemiSky:9021910,hemiGround:1516061,hemiIntensity:1.28,sun:12113407,sunIntensity:3,fill:6323120,fillIntensity:1.42,exposure:1.08}},rA={grass:{color:5401155,roughness:.98},grassLight:{color:6717522,roughness:.98},stone:{color:12103834,roughness:.92},stoneDark:{color:7829869,roughness:.96},path:{color:13154716,roughness:.9},pathDark:{color:10984583,roughness:.92},red:{color:10432554,roughness:.76},redDark:{color:6824223,roughness:.82},wood:{color:6635563,roughness:.86},woodDark:{color:2957339,roughness:.9},plaster:{color:14074523,roughness:.96},jade:{color:2975327,roughness:.72,metalness:.06},jadeLight:{color:5081205,roughness:.74},gold:{color:14002773,roughness:.58,metalness:.24},window:{color:2050117,roughness:.45,metalness:.08},water:{color:5214868,roughness:.25,metalness:.08,transparent:!0,opacity:.86},leaf:{color:3231544,roughness:.94},leafLight:{color:5074757,roughness:.94},lantern:{color:14895662,emissive:16727064,emissiveIntensity:1.8,roughness:.6}};class oA{constructor(){this.blocks=new Map}add(t,i,s,l,c,h,d,m=0){const p=this.blocks.get(t)??[];p.push({position:new $(i,s,l),scale:new $(c,h,d),rotationY:m}),this.blocks.set(t,p)}local(t,i,s,l,c,h,d,m,p,g=0,_=0){const y=Math.cos(g),x=Math.sin(g);this.add(t,i+l*y-h*x,c,s+l*x+h*y,d,m,p,g+_)}commit(t){const i=new Br(1,1,1),s=new Map,l=new pn;return this.blocks.forEach((c,h)=>{const d=new tx(rA[h]);s.set(h,d);const m=new ZM(i,d,c.length);m.name=`voxel-${h}`,m.castShadow=h!=="water"&&h!=="grass",m.receiveShadow=!0,c.forEach((p,g)=>{l.position.copy(p.position),l.rotation.set(0,p.rotationY,0),l.scale.copy(p.scale),l.updateMatrix(),m.setMatrixAt(g,l.matrix)}),m.instanceMatrix.needsUpdate=!0,m.computeBoundingSphere(),t.add(m)}),{geometry:i,materials:s}}}function Bd(o,t,i,s,l,c,h,d="hip",m=5){if(d==="hip")for(let p=0;p<m;p+=1){const g=p*1.16;o.local(p%2===0?"jade":"jadeLight",t,i,0,c+p*.56,0,s+4.2-g*2,.72,l+4.2-g*2,h)}else{const g=(l+4.2)/9;for(let _=-4;_<=4;_+=1){const y=4-Math.abs(_);o.local(_%2===0?"jade":"jadeLight",t,i,0,c+y*.64,_*g,s+4.2,.76,g+.12,h)}o.local("gold",t,i,0,c+4*.64+.52,0,s+5,.52,.58,h)}for(const p of[-1,1])for(const g of[-1,1])for(let _=0;_<3;_+=1)o.local(_===2?"gold":"jadeLight",t,i,p*(s/2+1.25+_*.48),c+.35+_*.48,g*(l/2+1.25+_*.48),1.25-_*.16,.48,1.25-_*.16,h,Math.PI/4)}function vv(o,t,i,s,l,c){for(let h=0;h<5;h+=1)o.local(h%2?"stoneDark":"stone",t,i,0,.15+h*.27,l/2+3.2-h*.58,s*.42+h*.2,.28,1.3,c)}function Pr(o,t,i,s,l,c,h=0){o.local("gold",t,i,s,c+1.02,l,.62,.22,.62,h),o.local("lantern",t,i,s,c+.54,l,.82,.82,.82,h),o.local("gold",t,i,s,c+.08,l,.54,.18,.54,h),o.local("redDark",t,i,s,c-.25,l,.15,.5,.15,h)}function Fo(o,{x:t,z:i,width:s,depth:l,wallHeight:c,angle:h=0,roof:d="hip",main:m=!1}){const p=m?2.05:1.55,g=p+c+.35;o.local("stoneDark",t,i,0,.38,0,s+4.5,.76,l+4.2,h),o.local("stone",t,i,0,.95,0,s+3.1,.62,l+2.9,h),m&&o.local("stone",t,i,0,1.47,0,s+1.8,.45,l+1.7,h),o.local("plaster",t,i,0,p+c/2,0,s-1.8,c,l-1.7,h),o.local("redDark",t,i,0,p+1.05,l/2-.48,s-2.2,2.1,.7,h);const _=[-s/2+1,-s/6,s/6,s/2-1];for(const b of _)for(const R of[-l/2+.72,l/2-.72])o.local("red",t,i,b,p+c/2,R,.92,c+.8,.92,h),o.local("gold",t,i,b,g-.55,R,1.65,.45,.58,h),o.local("jadeLight",t,i,b,g-.06,R,.55,.55,1.45,h);const y=m?5:3,x=Math.min(2.55,(s-4)/y);for(let b=0;b<y;b+=1){const R=(b-(y-1)/2)*(x+.24);o.local("woodDark",t,i,R,p+2.05,l/2+.02,x,4.1,.36,h),o.local("window",t,i,R,p+3.1,l/2+.24,x-.32,1.4,.16,h);for(const M of[-.28,.28])o.local("gold",t,i,R+M,p+1.36,l/2+.27,.13,.13,.13,h)}o.local("woodDark",t,i,0,g-.95,l/2+.42,m?5.8:3.8,1.25,.38,h);for(let b=-2;b<=2;b+=1)o.local("gold",t,i,b*.65,g-.95,l/2+.66,.28,.56,.12,h);Bd(o,t,i,s,l,g,h,d,m?6:5),vv(o,t,i,s,l,h),Pr(o,t,i,-s*.38,l/2+1.15,p+3.2,h),Pr(o,t,i,s*.38,l/2+1.15,p+3.2,h)}function lA(o,t,i){o.add("stoneDark",t,.4,i,30,.8,11),o.add("stone",t,.98,i,26+2.5,.55,8+1.8),o.add("redDark",t-9.3,1.45+2.6,i,6.2,5.2,8-1.4),o.add("redDark",t+9.3,1.45+2.6,i,6.2,5.2,8-1.4);for(const m of[-12,-6.1,6.1,12])o.add("red",t+m,1.45+6.7/2,i+8/2-.7,1.05,6.7+.7,1.05),o.add("gold",t+m,8.6-.62,i+8/2-.7,1.85,.48,.62);o.add("woodDark",t,1.45+5.15,i+8/2+.15,6.3,1.35,.4);for(let m=-2;m<=2;m+=1)o.add("gold",t+m*.72,1.45+5.15,i+8/2+.4,.32,.64,.12);Bd(o,t,i,26,8,8.6,0,"gable",5),vv(o,t,i,26,8,0),Pr(o,t,i,-5.2,8/2+.9,1.45+3.2),Pr(o,t,i,5.2,8/2+.9,1.45+3.2)}function N0(o,t,i,s=!1){o.add("stoneDark",t,.45,i,12,.9,12),o.add("stone",t,1.02,i,10.7,.5,10.7);for(const[l,c,h,d]of[[0,1.3,8.2,5.7],[1,8.2,6.2,4.3]]){const m=c+d/2;o.add("redDark",t,m,i,h-1.6,d,h-1.6);for(const p of[-1,1])for(const g of[-1,1])o.add("red",t+p*(h/2-.62),m,i+g*(h/2-.62),.78,d+.4,.78),o.add("gold",t+p*(h/2-.62),c+d-.4,i+g*(h/2-.62),1.35,.42,.52);Bd(o,t,i,h,h,c+d,0,"hip",l===0?4:3)}s?(o.add("lantern",t,5,i+4.35,2.8,2.8,.8),o.add("gold",t,5,i+4.78,1.15,1.15,.18)):(o.add("gold",t,5.1,i+4.3,2.25,2.65,.75),o.add("woodDark",t,6.35,i+4.3,3.7,.35,.42))}function cA(o,t,i,s,l){for(let c=0;c<3;c+=1)o.add(c===1?"jadeLight":"jade",t,l+c*.42,i,s+3.4-c*1.5,.58,s+3.4-c*1.5);for(const c of[-1,1])for(const h of[-1,1])o.add("gold",t+c*(s/2+1.9),l+.72,i+h*(s/2+1.9),.7,.7,.7,Math.PI/4)}function O0(o,t,i){o.add("stoneDark",t,.42,i,13.4,.84,13.4),o.add("stone",t,1,i,11.8,.5,11.8);let s=1.25;for(let l=0;l<4;l+=1){const c=7.6-l*1.15,h=3.2;o.add("redDark",t,s+h/2,i,c-1.25,h,c-1.25);for(const d of[-1,1])for(const m of[-1,1])o.add("red",t+d*(c/2-.5),s+h/2,i+m*(c/2-.5),.62,h+.2,.62);o.add("window",t,s+1.75,i+c/2,1.35,1.25,.25),cA(o,t,i,c,s+h),s+=4.35}for(let l=0;l<5;l+=1)o.add("gold",t,s+l*.58,i,1.35-l*.18,.62,1.35-l*.18)}function Dc(o,t,i,s,l){const c=Math.min(t,i),h=Math.max(t,i),d=Math.min(s,l),m=Math.max(s,l);let p=0;for(let g=d;g<=m;g+=2.05){let _=0;for(let y=c;y<=h;y+=2.05)o.add((p+_)%3===0?"pathDark":"path",y,.08,g,1.85,.18,1.85),_+=1;p+=1}}function P0(o,t,i){o.add("stoneDark",t,.03,i,11.8,.45,7.8),o.add("water",t,.3,i,9.8,.18,5.8);for(const s of[-1,1])o.add("stone",t+s*5.45,.47,i,.9,.72,7.6);for(const s of[-1,1])o.add("stone",t,.47,i+s*3.45,10.2,.72,.9);for(const s of[-2.6,0,2.7])o.add("leafLight",t+s,.62,i+(s%2===0?.8:-.7),1,.22,1,Math.PI/4),o.add("gold",t+s,.9,i+(s%2===0?.8:-.7),.32,.4,.32)}function uA(o,t,i,s=1){o.add("stone",t,.25,i,3.2*s,.5,3.2*s),o.add("wood",t,2.5*s,i,.8*s,5*s,.8*s);const l=[[0,5.8,0,"leaf"],[-1.4,5.2,.5,"leafLight"],[1.35,5.3,.3,"leaf"],[-.4,6.7,-.7,"leafLight"],[.7,6.5,.8,"leaf"]];for(const[c,h,d,m]of l)o.add(m,t+c*s,h*s,i+d*s,3.2*s,2.4*s,3.2*s)}function z0(o,t,i,s=!1){const l=s?-1:1;o.add("stoneDark",t,.35,i,2.4,.7,2.4),o.add("stone",t,1.25,i,1.45,1.25,1.35),o.add("stone",t,2.35,i+.05,1.35,1.35,1.35),o.add("stone",t,3.25,i+.28,1.7,1.1,1.65),o.add("stoneDark",t-.38,3.42,i+1.05,.24,.24,.24),o.add("stoneDark",t+.38,3.42,i+1.05,.24,.24,.24),o.add("stone",t+l*1,.95,i+.7,.9,.9,.9)}function fA(o){const t=new oA;t.add("grass",0,-.72,0,108,1.45,108);for(let i=-49;i<=49;i+=4)for(let s=-49;s<=49;s+=4)(s*3+i*5)%11===0&&t.add("grassLight",s,.04,i,2.8,.12,2.8);Dc(t,-4.1,4.1,-12,47),Dc(t,-18,18,2,8),Dc(t,-18,18,-24,-18),Dc(t,-37,37,-42,-36),Fo(t,{x:0,z:-22,width:30,depth:15.5,wallHeight:8.5,main:!0}),Fo(t,{x:-24,z:5,width:14,depth:9,wallHeight:5.5,angle:Math.PI/2,roof:"gable"}),Fo(t,{x:24,z:5,width:14,depth:9,wallHeight:5.5,angle:-Math.PI/2,roof:"gable"}),Fo(t,{x:-24,z:-22,width:14,depth:9,wallHeight:5.5,angle:Math.PI/2,roof:"hip"}),Fo(t,{x:24,z:-22,width:14,depth:9,wallHeight:5.5,angle:-Math.PI/2,roof:"hip"}),lA(t,0,39),N0(t,-22,24,!1),N0(t,22,24,!0),O0(t,-36,-39),O0(t,36,-39),P0(t,-13.5,10.5),P0(t,13.5,10.5),z0(t,-8.2,45,!1),z0(t,8.2,45,!0);for(const[i,s,l]of[[-42,15,1],[42,15,1],[-41,-12,1.15],[41,-12,1.15],[-18,-43,.9],[18,-43,.9]])uA(t,i,s,l);for(const i of[-49.5,49.5]){t.add("redDark",i,1.6,0,1.1,3.2,100);for(let s=-48;s<=48;s+=2.5)t.add("jade",i,3.45,s,1.65,.62,2.25)}t.add("redDark",0,1.6,-49.5,100,3.2,1.1);for(let i=-48;i<=48;i+=2.5)t.add("jade",i,3.45,-49.5,2.25,.62,1.65);t.add("redDark",-34.5,1.6,49.5,31,3.2,1.1),t.add("redDark",34.5,1.6,49.5,31,3.2,1.1);for(const i of[-49,21])for(let s=i;s<=i+28;s+=2.5)t.add("jade",s,3.45,49.5,2.25,.62,1.65);for(const i of[31,18,4,-9])Pr(t,0,0,-5.8,i,2.2),Pr(t,0,0,5.8,i,2.2),t.add("woodDark",-5.8,1.8,i,.34,3.6,.34),t.add("woodDark",5.8,1.8,i,.34,3.6,.34);return t.commit(o)}function hA(o){const i=new Float32Array(660);for(let h=0;h<220;h+=1){const d=h*2.39996,m=18+h%38*1.2;i[h*3]=Math.cos(d)*m,i[h*3+1]=5+h*17%33,i[h*3+2]=Math.sin(d)*m-2}const s=new la;s.setAttribute("position",new di(i,3));const l=new ov({color:16766880,size:.16,transparent:!0,opacity:.52,depthWrite:!1}),c=new $M(s,l);return c.name="sunlit-dust",o.add(c),c}function dA(){const o=_s.useRef(null),t=_s.useRef("dawn"),[i,s]=_s.useState("dawn"),[l,c]=_s.useState(!1);return _s.useEffect(()=>{t.current=i},[i]),_s.useEffect(()=>{const h=o.current;if(!h)return;const d=new YM;d.fog=new Od(yi.dawn.fog,.0042);const m=h.clientWidth<680,p=new hi(m?52:42,h.clientWidth/h.clientHeight,.1,320);p.position.set(...m?[135,105,165]:[77,59,91]),p.lookAt(0,5,-5);const g=new W1({antialias:!0,powerPreference:"high-performance"});g.setSize(h.clientWidth,h.clientHeight),g.setPixelRatio(Math.min(window.devicePixelRatio,1.7)),g.shadowMap.enabled=!0,g.shadowMap.type=B0,g.outputColorSpace=ti,g.toneMapping=H0,g.toneMappingExposure=yi.dawn.exposure,g.setClearColor(yi.dawn.clear),g.domElement.className="palace-canvas",g.domElement.setAttribute("aria-label","可旋转的中国古典体素建筑群三维场景"),h.appendChild(g.domElement);const _=new q1(p,g.domElement);_.target.set(0,5,-5),_.enableDamping=!0,_.dampingFactor=.055,_.minDistance=48,_.maxDistance=270,_.maxPolarAngle=Math.PI*.46,_.minPolarAngle=Math.PI*.18,_.autoRotate=!window.matchMedia("(prefers-reduced-motion: reduce)").matches,_.autoRotateSpeed=.28;let y=0;const x=()=>{_.autoRotate=!1,window.clearTimeout(y)},b=()=>{window.clearTimeout(y),y=window.setTimeout(()=>{_.autoRotate=!window.matchMedia("(prefers-reduced-motion: reduce)").matches},3200)};_.addEventListener("start",x),_.addEventListener("end",b);const R=new ix(yi.dawn.hemiSky,yi.dawn.hemiGround,yi.dawn.hemiIntensity);d.add(R);const M=new a0(yi.dawn.sun,yi.dawn.sunIntensity);M.position.set(-46,72,58),M.castShadow=!0,M.shadow.mapSize.set(2048,2048),M.shadow.camera.left=-72,M.shadow.camera.right=72,M.shadow.camera.top=72,M.shadow.camera.bottom=-72,M.shadow.camera.near=10,M.shadow.camera.far=180,M.shadow.bias=-25e-5,d.add(M);const S=new a0(yi.dawn.fill,yi.dawn.fillIntensity);S.position.set(55,34,-52),d.add(S);const{geometry:B,materials:O}=fA(d),D=hA(d),V=ft=>{const rt=yi[ft];g.setClearColor(rt.clear),g.toneMappingExposure=rt.exposure,d.fog&&d.fog.color.setHex(rt.fog),R.color.setHex(rt.hemiSky),R.groundColor.setHex(rt.hemiGround),R.intensity=rt.hemiIntensity,M.color.setHex(rt.sun),M.intensity=rt.sunIntensity,S.color.setHex(rt.fill),S.intensity=rt.fillIntensity;const N=D.material;N.color.setHex(ft==="moon"?11983359:16766880),N.opacity=ft==="moon"?.28:.52;const q=O.get("lantern");q&&(q.emissiveIntensity=ft==="moon"?4.8:ft==="sunset"?2.8:1.8)};V(t.current);let F=t.current,z=0,Z=!0;const w=new ox,C=()=>{z=window.requestAnimationFrame(C);const ft=w.getElapsedTime();F!==t.current&&(F=t.current,V(F)),D.rotation.y=ft*.004;const rt=O.get("lantern");if(rt){const N=t.current==="moon"?4.8:t.current==="sunset"?2.8:1.8;rt.emissiveIntensity=N+Math.sin(ft*2.2)*.18}_.update(),g.render(d,p),Z&&(Z=!1,window.requestAnimationFrame(()=>c(!0)))};C();let G=m;const et=()=>{const ft=h.clientWidth,rt=h.clientHeight,N=ft<680;p.aspect=ft/rt,p.fov=N?52:42,N!==G&&(G=N,p.position.set(...N?[135,105,165]:[77,59,91]),_.target.set(0,5,-5)),p.updateProjectionMatrix(),g.setSize(ft,rt),g.setPixelRatio(Math.min(window.devicePixelRatio,N?1.35:1.7))},lt=new ResizeObserver(et);return lt.observe(h),()=>{window.cancelAnimationFrame(z),window.clearTimeout(y),lt.disconnect(),_.removeEventListener("start",x),_.removeEventListener("end",b),_.dispose(),B.dispose(),O.forEach(ft=>ft.dispose()),D.geometry.dispose(),D.material.dispose(),g.dispose(),h.removeChild(g.domElement)}},[]),oe.createElement("main",{className:`palace-shell tone-${i}`},oe.createElement("div",{ref:o,className:"scene-mount"}),oe.createElement("header",{className:"palace-header"},oe.createElement("div",{className:"title-lockup"},oe.createElement("div",{className:"seal","aria-hidden":"true"},"宸"),oe.createElement("div",null,oe.createElement("p",{className:"eyebrow"},"VOXEL IMPERIAL COURT"),oe.createElement("h1",null,"紫宸宫阙"))),oe.createElement("div",{className:"tone-picker",role:"group","aria-label":"选择场景光线"},[["dawn","晨曦"],["sunset","暮色"],["moon","月夜"]].map(([h,d])=>oe.createElement("button",{key:h,type:"button",className:i===h?"active":"","aria-pressed":i===h,onClick:()=>s(h)},oe.createElement("span",{"aria-hidden":"true"}),d)))),oe.createElement("aside",{className:"site-map","aria-label":"建筑群组成"},oe.createElement("p",{className:"map-kicker"},"中轴院落"),oe.createElement("div",{className:"axis-line","aria-hidden":"true"},oe.createElement("i",null),oe.createElement("i",null),oe.createElement("i",null),oe.createElement("i",null)),oe.createElement("ol",null,oe.createElement("li",null,oe.createElement("b",null,"01"),oe.createElement("span",null,"山门")),oe.createElement("li",null,oe.createElement("b",null,"02"),oe.createElement("span",null,"钟鼓楼")),oe.createElement("li",null,oe.createElement("b",null,"03"),oe.createElement("span",null,"东西配殿")),oe.createElement("li",null,oe.createElement("b",null,"04"),oe.createElement("span",null,"紫宸正殿")),oe.createElement("li",null,oe.createElement("b",null,"05"),oe.createElement("span",null,"双塔")))),oe.createElement("div",{className:"scene-caption"},oe.createElement("p",null,oe.createElement("span",{"aria-hidden":"true"},"◫")," 拖拽环游 · 滚轮缩放"),oe.createElement("p",{className:"scene-count"},"10 座建筑 · 实例化体素")),oe.createElement("div",{className:`loading-veil ${l?"is-ready":""}`,"aria-hidden":l},oe.createElement("div",{className:"loading-seal"},"宸"),oe.createElement("p",null,"宫阙入画")),oe.createElement("p",{className:"sr-only"},"场景沿中轴对称布置，包含山门、主殿、四座配殿、钟鼓楼与两座宝塔，并设有道路、庭院、池塘、树木、灯笼和石狮。"))}Ly.createRoot(document.getElementById("root")).render(oe.createElement(dA,null));
