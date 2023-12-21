import{R as N,r as g}from"./index-4g5l5LRQ.js";const ne={prefix:String(Math.round(Math.random()*1e10)),current:0},Te=N.createContext(ne),Qe=N.createContext(!1);let _e=!!(typeof window<"u"&&window.document&&window.document.createElement),ue=new WeakMap;function er(e=!1){let r=g.useContext(Te),t=g.useRef(null);if(t.current===null&&!e){var n,o;let i=(o=N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)===null||o===void 0||(n=o.ReactCurrentOwner)===null||n===void 0?void 0:n.current;if(i){let a=ue.get(i);a==null?ue.set(i,{id:r.current,state:i.memoizedState}):i.memoizedState!==a.state&&(r.current=a.id,ue.delete(i))}t.current=++r.current}return t.current}function rr(e){let r=g.useContext(Te);r===ne&&!_e&&console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");let t=er(!!e),n=`react-aria${r.prefix}`;return e||`${n}-${t}`}function tr(e){let r=N.useId(),[t]=g.useState(lr()),n=t?"react-aria":`react-aria${ne.prefix}`;return e||`${n}-${r}`}const nr=typeof N.useId=="function"?tr:rr;function or(){return!1}function ar(){return!0}function ir(e){return()=>{}}function lr(){return typeof N.useSyncExternalStore=="function"?N.useSyncExternalStore(ir,or,ar):g.useContext(Qe)}function bt(e,r,t){let[n,o]=g.useState(e||r),i=g.useRef(e!==void 0),a=e!==void 0;g.useEffect(()=>{let c=i.current;c!==a&&console.warn(`WARN: A component changed from ${c?"controlled":"uncontrolled"} to ${a?"controlled":"uncontrolled"}.`),i.current=a},[a]);let l=a?e:n,s=g.useCallback((c,...u)=>{let b=($,...x)=>{t&&(Object.is(l,$)||t($,...x)),a||(l=$)};typeof c=="function"?(console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"),o((x,...S)=>{let z=c(a?l:x,...S);return b(z,...u),a?x:z})):(a||o(c),b(c,...u))},[a,l,t]);return[l,s]}function vt(e,r=-1/0,t=1/0){return Math.min(Math.max(e,r),t)}function je(e){var r,t,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(t=je(e[r]))&&(n&&(n+=" "),n+=t);else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function Ee(){for(var e,r,t=0,n="";t<arguments.length;)(e=arguments[t++])&&(r=je(e))&&(n&&(n+=" "),n+=r);return n}const H=typeof document<"u"?N.useLayoutEffect:()=>{};function oe(e){const r=g.useRef(null);return H(()=>{r.current=e},[e]),g.useCallback((...t)=>{const n=r.current;return n(...t)},[])}function sr(e){let[r,t]=g.useState(e),n=g.useRef(null),o=oe(()=>{let a=n.current.next();if(a.done){n.current=null;return}r===a.value?o():t(a.value)});H(()=>{n.current&&o()});let i=oe(a=>{n.current=a(r),o()});return[r,i]}let dr=!!(typeof window<"u"&&window.document&&window.document.createElement),ae=new Map;function We(e){let[r,t]=g.useState(e),n=g.useRef(null),o=nr(r),i=g.useCallback(a=>{n.current=a},[]);return dr&&ae.set(o,i),H(()=>{let a=o;return()=>{ae.delete(a)}},[o]),g.useEffect(()=>{let a=n.current;a&&(n.current=null,t(a))}),o}function cr(e,r){if(e===r)return e;let t=ae.get(e);if(t)return t(r),r;let n=ae.get(r);return n?(n(e),e):r}function gt(e=[]){let r=We(),[t,n]=sr(r),o=g.useCallback(()=>{n(function*(){yield r,yield document.getElementById(r)?r:void 0})},[r,n]);return H(o,[r,o,...e]),t}function ur(...e){return(...r)=>{for(let t of e)typeof t=="function"&&t(...r)}}const fr=e=>{var r;return(r=e==null?void 0:e.ownerDocument)!==null&&r!==void 0?r:document},mt=e=>e&&"window"in e&&e.window===e?e:fr(e).defaultView||window;function yt(...e){let r={...e[0]};for(let t=1;t<e.length;t++){let n=e[t];for(let o in n){let i=r[o],a=n[o];typeof i=="function"&&typeof a=="function"&&o[0]==="o"&&o[1]==="n"&&o.charCodeAt(2)>=65&&o.charCodeAt(2)<=90?r[o]=ur(i,a):(o==="className"||o==="UNSAFE_className")&&typeof i=="string"&&typeof a=="string"?r[o]=Ee(i,a):o==="id"&&i&&a?r.id=cr(i,a):r[o]=a!==void 0?a:i}}return r}function ht(...e){return e.length===1?e[0]:r=>{for(let t of e)typeof t=="function"?t(r):t!=null&&(t.current=r)}}const pr=new Set(["id"]),br=new Set(["aria-label","aria-labelledby","aria-describedby","aria-details"]),vr=new Set(["href","target","rel","download","ping","referrerPolicy"]),gr=/^(data-.*)$/;function wt(e,r={}){let{labelable:t,isLink:n,propNames:o}=r,i={};for(const a in e)Object.prototype.hasOwnProperty.call(e,a)&&(pr.has(a)||t&&br.has(a)||n&&vr.has(a)||o!=null&&o.has(a)||gr.test(a))&&(i[a]=e[a]);return i}function mr(e){if(yr())e.focus({preventScroll:!0});else{let r=hr(e);e.focus(),wr(r)}}let ee=null;function yr(){if(ee==null){ee=!1;try{var e=document.createElement("div");e.focus({get preventScroll(){return ee=!0,!0}})}catch{}}return ee}function hr(e){for(var r=e.parentNode,t=[],n=document.scrollingElement||document.documentElement;r instanceof HTMLElement&&r!==n;)(r.offsetHeight<r.scrollHeight||r.offsetWidth<r.scrollWidth)&&t.push({element:r,scrollTop:r.scrollTop,scrollLeft:r.scrollLeft}),r=r.parentNode;return n instanceof HTMLElement&&t.push({element:n,scrollTop:n.scrollTop,scrollLeft:n.scrollLeft}),t}function wr(e){for(let{element:r,scrollTop:t,scrollLeft:n}of e)r.scrollTop=t,r.scrollLeft=n}function ce(e){var r;return typeof window>"u"||window.navigator==null?!1:((r=window.navigator.userAgentData)===null||r===void 0?void 0:r.brands.some(t=>e.test(t.brand)))||e.test(window.navigator.userAgent)}function $e(e){var r;return typeof window<"u"&&window.navigator!=null?e.test(((r=window.navigator.userAgentData)===null||r===void 0?void 0:r.platform)||window.navigator.platform):!1}function ie(){return $e(/^Mac/i)}function $r(){return $e(/^iPhone/i)}function Ne(){return $e(/^iPad/i)||ie()&&navigator.maxTouchPoints>1}function xr(){return $r()||Ne()}function $t(){return ie()||xr()}function Cr(){return ce(/AppleWebKit/i)&&!Ar()}function Ar(){return ce(/Chrome/i)}function Oe(){return ce(/Android/i)}function Sr(){return ce(/Firefox/i)}const kr=g.createContext({isNative:!0,open:zr});function xt(){return g.useContext(kr)}function le(e,r,t=!0){var n,o;let{metaKey:i,ctrlKey:a,altKey:l,shiftKey:s}=r;Sr()&&(!((o=window.event)===null||o===void 0||(n=o.type)===null||n===void 0)&&n.startsWith("key"))&&e.target==="_blank"&&(ie()?i=!0:a=!0);let c=Cr()&&ie()&&!Ne()?new KeyboardEvent("keydown",{keyIdentifier:"Enter",metaKey:i,ctrlKey:a,altKey:l,shiftKey:s}):new MouseEvent("click",{metaKey:i,ctrlKey:a,altKey:l,shiftKey:s,bubbles:!0,cancelable:!0});le.isOpening=t,mr(e),e.dispatchEvent(c),le.isOpening=!1}le.isOpening=!1;function Mr(e,r){if(e instanceof HTMLAnchorElement)r(e);else if(e.hasAttribute("data-href")){let t=document.createElement("a");t.href=e.getAttribute("data-href"),e.hasAttribute("data-target")&&(t.target=e.getAttribute("data-target")),e.hasAttribute("data-rel")&&(t.rel=e.getAttribute("data-rel")),e.hasAttribute("data-download")&&(t.download=e.getAttribute("data-download")),e.hasAttribute("data-ping")&&(t.ping=e.getAttribute("data-ping")),e.hasAttribute("data-referrer-policy")&&(t.referrerPolicy=e.getAttribute("data-referrer-policy")),e.appendChild(t),r(t),e.removeChild(t)}}function zr(e,r){Mr(e,t=>le(t,r))}let K=new Map,ve=new Set;function Ae(){if(typeof window>"u")return;let e=t=>{let n=K.get(t.target);n||(n=new Set,K.set(t.target,n),t.target.addEventListener("transitioncancel",r)),n.add(t.propertyName)},r=t=>{let n=K.get(t.target);if(n&&(n.delete(t.propertyName),n.size===0&&(t.target.removeEventListener("transitioncancel",r),K.delete(t.target)),K.size===0)){for(let o of ve)o();ve.clear()}};document.body.addEventListener("transitionrun",e),document.body.addEventListener("transitionend",r)}typeof document<"u"&&(document.readyState!=="loading"?Ae():document.addEventListener("DOMContentLoaded",Ae));function Ct(e){requestAnimationFrame(()=>{K.size===0?e():ve.add(e)})}function At(){let e=g.useRef(new Map),r=g.useCallback((o,i,a,l)=>{let s=l!=null&&l.once?(...c)=>{e.current.delete(a),a(...c)}:a;e.current.set(a,{type:i,eventTarget:o,fn:s,options:l}),o.addEventListener(i,a,l)},[]),t=g.useCallback((o,i,a,l)=>{var s;let c=((s=e.current.get(a))===null||s===void 0?void 0:s.fn)||a;o.removeEventListener(i,c,l),e.current.delete(a)},[]),n=g.useCallback(()=>{e.current.forEach((o,i)=>{t(o.eventTarget,o.type,i,o.options)})},[t]);return g.useEffect(()=>n,[n]),{addGlobalListener:r,removeGlobalListener:t,removeAllGlobalListeners:n}}function St(e,r){let{id:t,"aria-label":n,"aria-labelledby":o}=e;return t=We(t),o&&n?o=[...new Set([t,...o.trim().split(/\s+/)])].join(" "):o&&(o=o.trim().split(/\s+/).join(" ")),!n&&!o&&r&&(n=r),{id:t,"aria-label":n,"aria-labelledby":o}}function Pr(){return typeof window.ResizeObserver<"u"}function kt(e){const{ref:r,onResize:t}=e;g.useEffect(()=>{let n=r==null?void 0:r.current;if(n)if(Pr()){const o=new window.ResizeObserver(i=>{i.length&&t()});return o.observe(n),()=>{n&&o.unobserve(n)}}else return window.addEventListener("resize",t,!1),()=>{window.removeEventListener("resize",t,!1)}},[t,r])}function Mt(e,r){H(()=>{if(e&&e.ref&&r)return e.ref.current=r.current,()=>{e.ref.current=null}})}function Se(e){for(ke(e)&&(e=e.parentElement);e&&!ke(e);)e=e.parentElement;return e||document.scrollingElement||document.documentElement}function ke(e){let r=window.getComputedStyle(e);return/(auto|scroll)/.test(r.overflow+r.overflowX+r.overflowY)}let Ir=0;const fe=new Map;function zt(e){let[r,t]=g.useState(void 0);return H(()=>{if(!e)return;let n=fe.get(e);if(n)t(n.element.id);else{let o=`react-aria-description-${Ir++}`;t(o);let i=document.createElement("div");i.id=o,i.style.display="none",i.textContent=e,document.body.appendChild(i),n={refCount:0,element:i},fe.set(e,n)}return n.refCount++,()=>{--n.refCount===0&&(n.element.remove(),fe.delete(e))}},[e]),{"aria-describedby":e?r:void 0}}function Pt(e,r,t,n){let o=oe(t),i=t==null;g.useEffect(()=>{if(i)return;let a=e.current;return a.addEventListener(r,o,n),()=>{a.removeEventListener(r,o,n)}},[e,r,n,i,o])}function Gr(e,r){let t=Me(e,r,"left"),n=Me(e,r,"top"),o=r.offsetWidth,i=r.offsetHeight,a=e.scrollLeft,l=e.scrollTop,{borderTopWidth:s,borderLeftWidth:c}=getComputedStyle(e),u=e.scrollLeft+parseInt(c,10),b=e.scrollTop+parseInt(s,10),$=u+e.clientWidth,x=b+e.clientHeight;t<=a?a=t-parseInt(c,10):t+o>$&&(a+=t+o-$),n<=b?l=n-parseInt(s,10):n+i>x&&(l+=n+i-x),e.scrollLeft=a,e.scrollTop=l}function Me(e,r,t){const n=t==="left"?"offsetLeft":"offsetTop";let o=0;for(;r.offsetParent&&(o+=r[n],r.offsetParent!==e);){if(r.offsetParent.contains(e)){o-=e[n];break}r=r.offsetParent}return o}function It(e,r){if(document.contains(e)){let a=document.scrollingElement||document.documentElement;if(window.getComputedStyle(a).overflow==="hidden"){let s=Se(e);for(;e&&s&&e!==a&&s!==a;)Gr(s,e),e=s,s=Se(e)}else{var t;let{left:s,top:c}=e.getBoundingClientRect();e==null||(t=e.scrollIntoView)===null||t===void 0||t.call(e,{block:"nearest"});let{left:u,top:b}=e.getBoundingClientRect();if(Math.abs(s-u)>1||Math.abs(c-b)>1){var n,o,i;r==null||(o=r.containingElement)===null||o===void 0||(n=o.scrollIntoView)===null||n===void 0||n.call(o,{block:"center",inline:"center"}),(i=e.scrollIntoView)===null||i===void 0||i.call(e,{block:"nearest"})}}}}function Gt(e){return e.mozInputSource===0&&e.isTrusted?!0:Oe()&&e.pointerType?e.type==="click"&&e.buttons===1:e.detail===0&&!e.pointerType}function Lt(e){return!Oe()&&e.width===0&&e.height===0||e.width===1&&e.height===1&&e.pressure===0&&e.detail===0&&e.pointerType==="mouse"}function Rt(e,r,t){let n=g.useRef(r),o=oe(()=>{t&&t(n.current)});g.useEffect(()=>{var i;let a=e==null||(i=e.current)===null||i===void 0?void 0:i.form;return a==null||a.addEventListener("reset",o),()=>{a==null||a.removeEventListener("reset",o)}},[e,o])}function Tt(e){return g.forwardRef(e)}var jt=(e,r,t=!0)=>{if(!r)return[e,{}];const n=r.reduce((o,i)=>i in e?{...o,[i]:e[i]}:o,{});return t?[Object.keys(e).filter(i=>!r.includes(i)).reduce((i,a)=>({...i,[a]:e[a]}),{}),n]:[e,n]},Et=Ee,Lr=["0","xs","sm","md","lg","xl","2xl","3xl","4xl","5xl","6xl","7xl","8xl","9xl","1","2","3","3.5","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","20","24","28","32","36","40","44","48","52","56","60","64","72","80","96"],pe=Lr.map(e=>`unit-${e}`),ze=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,I=e=>!e||typeof e!="object"||Object.keys(e).length===0,Rr=(e,r)=>JSON.stringify(e)===JSON.stringify(r);function Ve(e,r){e.forEach(function(t){Array.isArray(t)?Ve(t,r):r.push(t)})}function Ke(e){let r=[];return Ve(e,r),r}var Tr=(...e)=>Ke(e).filter(Boolean),He=(e,r)=>{let t={},n=Object.keys(e),o=Object.keys(r);for(let i of n)if(o.includes(i)){let a=e[i],l=r[i];typeof a=="object"&&typeof l=="object"?t[i]=He(a,l):t[i]=l+" "+a}else t[i]=e[i];for(let i of o)n.includes(i)||(t[i]=r[i]);return t},Pe=e=>!e||typeof e!="string"?e:e.replace(/\s+/g," ").trim();function jr(){for(var e=0,r,t,n="";e<arguments.length;)(r=arguments[e++])&&(t=Be(r))&&(n&&(n+=" "),n+=t);return n}function Be(e){if(typeof e=="string")return e;for(var r,t="",n=0;n<e.length;n++)e[n]&&(r=Be(e[n]))&&(t&&(t+=" "),t+=r);return t}var xe="-";function Er(e){var r=Nr(e),t=e.conflictingClassGroups,n=e.conflictingClassGroupModifiers,o=n===void 0?{}:n;function i(l){var s=l.split(xe);return s[0]===""&&s.length!==1&&s.shift(),Fe(s,r)||Wr(l)}function a(l,s){var c=t[l]||[];return s&&o[l]?[].concat(c,o[l]):c}return{getClassGroupId:i,getConflictingClassGroupIds:a}}function Fe(e,r){var a;if(e.length===0)return r.classGroupId;var t=e[0],n=r.nextPart.get(t),o=n?Fe(e.slice(1),n):void 0;if(o)return o;if(r.validators.length!==0){var i=e.join(xe);return(a=r.validators.find(function(l){var s=l.validator;return s(i)}))==null?void 0:a.classGroupId}}var Ie=/^\[(.+)\]$/;function Wr(e){if(Ie.test(e)){var r=Ie.exec(e)[1],t=r==null?void 0:r.substring(0,r.indexOf(":"));if(t)return"arbitrary.."+t}}function Nr(e){var r=e.theme,t=e.prefix,n={nextPart:new Map,validators:[]},o=Vr(Object.entries(e.classGroups),t);return o.forEach(function(i){var a=i[0],l=i[1];ge(l,n,a,r)}),n}function ge(e,r,t,n){e.forEach(function(o){if(typeof o=="string"){var i=o===""?r:Ge(r,o);i.classGroupId=t;return}if(typeof o=="function"){if(Or(o)){ge(o(n),r,t,n);return}r.validators.push({validator:o,classGroupId:t});return}Object.entries(o).forEach(function(a){var l=a[0],s=a[1];ge(s,Ge(r,l),t,n)})})}function Ge(e,r){var t=e;return r.split(xe).forEach(function(n){t.nextPart.has(n)||t.nextPart.set(n,{nextPart:new Map,validators:[]}),t=t.nextPart.get(n)}),t}function Or(e){return e.isThemeGetter}function Vr(e,r){return r?e.map(function(t){var n=t[0],o=t[1],i=o.map(function(a){return typeof a=="string"?r+a:typeof a=="object"?Object.fromEntries(Object.entries(a).map(function(l){var s=l[0],c=l[1];return[r+s,c]})):a});return[n,i]}):e}function Kr(e){if(e<1)return{get:function(){},set:function(){}};var r=0,t=new Map,n=new Map;function o(i,a){t.set(i,a),r++,r>e&&(r=0,n=t,t=new Map)}return{get:function(a){var l=t.get(a);if(l!==void 0)return l;if((l=n.get(a))!==void 0)return o(a,l),l},set:function(a,l){t.has(a)?t.set(a,l):o(a,l)}}}var qe="!";function Hr(e){var r=e.separator||":",t=r.length===1,n=r[0],o=r.length;return function(a){for(var l=[],s=0,c=0,u,b=0;b<a.length;b++){var $=a[b];if(s===0){if($===n&&(t||a.slice(b,b+o)===r)){l.push(a.slice(c,b)),c=b+o;continue}if($==="/"){u=b;continue}}$==="["?s++:$==="]"&&s--}var x=l.length===0?a:a.substring(c),S=x.startsWith(qe),z=S?x.substring(1):x,w=u&&u>c?u-c:void 0;return{modifiers:l,hasImportantModifier:S,baseClassName:z,maybePostfixModifierPosition:w}}}function Br(e){if(e.length<=1)return e;var r=[],t=[];return e.forEach(function(n){var o=n[0]==="[";o?(r.push.apply(r,t.sort().concat([n])),t=[]):t.push(n)}),r.push.apply(r,t.sort()),r}function Fr(e){return{cache:Kr(e.cacheSize),splitModifiers:Hr(e),...Er(e)}}var qr=/\s+/;function Ur(e,r){var t=r.splitModifiers,n=r.getClassGroupId,o=r.getConflictingClassGroupIds,i=new Set;return e.trim().split(qr).map(function(a){var l=t(a),s=l.modifiers,c=l.hasImportantModifier,u=l.baseClassName,b=l.maybePostfixModifierPosition,$=n(b?u.substring(0,b):u),x=!!b;if(!$){if(!b)return{isTailwindClass:!1,originalClassName:a};if($=n(u),!$)return{isTailwindClass:!1,originalClassName:a};x=!1}var S=Br(s).join(":"),z=c?S+qe:S;return{isTailwindClass:!0,modifierId:z,classGroupId:$,originalClassName:a,hasPostfixModifier:x}}).reverse().filter(function(a){if(!a.isTailwindClass)return!0;var l=a.modifierId,s=a.classGroupId,c=a.hasPostfixModifier,u=l+s;return i.has(u)?!1:(i.add(u),o(s,c).forEach(function(b){return i.add(l+b)}),!0)}).reverse().map(function(a){return a.originalClassName}).join(" ")}function me(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];var n,o,i,a=l;function l(c){var u=r[0],b=r.slice(1),$=b.reduce(function(x,S){return S(x)},u());return n=Fr($),o=n.cache.get,i=n.cache.set,a=s,s(c)}function s(c){var u=o(c);if(u)return u;var b=Ur(c,n);return i(c,b),b}return function(){return a(jr.apply(null,arguments))}}function A(e){var r=function(n){return n[e]||[]};return r.isThemeGetter=!0,r}var Ue=/^\[(?:([a-z-]+):)?(.+)\]$/i,Jr=/^\d+\/\d+$/,Xr=new Set(["px","full","screen"]),Zr=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Yr=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Dr=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function R(e){return O(e)||Xr.has(e)||Jr.test(e)||ye(e)}function ye(e){return V(e,"length",nt)}function Qr(e){return V(e,"size",Je)}function _r(e){return V(e,"position",Je)}function et(e){return V(e,"url",ot)}function re(e){return V(e,"number",O)}function O(e){return!Number.isNaN(Number(e))}function rt(e){return e.endsWith("%")&&O(e.slice(0,-1))}function Y(e){return Le(e)||V(e,"number",Le)}function v(e){return Ue.test(e)}function D(){return!0}function W(e){return Zr.test(e)}function tt(e){return V(e,"",at)}function V(e,r,t){var n=Ue.exec(e);return n?n[1]?n[1]===r:t(n[2]):!1}function nt(e){return Yr.test(e)}function Je(){return!1}function ot(e){return e.startsWith("url(")}function Le(e){return Number.isInteger(Number(e))}function at(e){return Dr.test(e)}function he(){var e=A("colors"),r=A("spacing"),t=A("blur"),n=A("brightness"),o=A("borderColor"),i=A("borderRadius"),a=A("borderSpacing"),l=A("borderWidth"),s=A("contrast"),c=A("grayscale"),u=A("hueRotate"),b=A("invert"),$=A("gap"),x=A("gradientColorStops"),S=A("gradientColorStopPositions"),z=A("inset"),w=A("margin"),T=A("opacity"),L=A("padding"),_=A("saturate"),B=A("scale"),F=A("sepia"),q=A("skew"),U=A("space"),J=A("translate"),X=function(){return["auto","contain","none"]},Z=function(){return["auto","hidden","clip","visible","scroll"]},f=function(){return["auto",v,r]},d=function(){return[v,r]},p=function(){return["",R]},m=function(){return["auto",O,v]},y=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},h=function(){return["solid","dashed","dotted","double","none"]},C=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},k=function(){return["start","end","center","between","around","evenly","stretch"]},M=function(){return["","0",v]},j=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]},G=function(){return[O,re]},E=function(){return[O,v]};return{cacheSize:500,theme:{colors:[D],spacing:[R],blur:["none","",W,v],brightness:G(),borderColor:[e],borderRadius:["none","","full",W,v],borderSpacing:d(),borderWidth:p(),contrast:G(),grayscale:M(),hueRotate:E(),invert:M(),gap:d(),gradientColorStops:[e],gradientColorStopPositions:[rt,ye],inset:f(),margin:f(),opacity:G(),padding:d(),saturate:G(),scale:G(),sepia:M(),skew:E(),space:d(),translate:d()},classGroups:{aspect:[{aspect:["auto","square","video",v]}],container:["container"],columns:[{columns:[W]}],"break-after":[{"break-after":j()}],"break-before":[{"break-before":j()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(y(),[v])}],overflow:[{overflow:Z()}],"overflow-x":[{"overflow-x":Z()}],"overflow-y":[{"overflow-y":Z()}],overscroll:[{overscroll:X()}],"overscroll-x":[{"overscroll-x":X()}],"overscroll-y":[{"overscroll-y":X()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[z]}],"inset-x":[{"inset-x":[z]}],"inset-y":[{"inset-y":[z]}],start:[{start:[z]}],end:[{end:[z]}],top:[{top:[z]}],right:[{right:[z]}],bottom:[{bottom:[z]}],left:[{left:[z]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Y]}],basis:[{basis:f()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",v]}],grow:[{grow:M()}],shrink:[{shrink:M()}],order:[{order:["first","last","none",Y]}],"grid-cols":[{"grid-cols":[D]}],"col-start-end":[{col:["auto",{span:["full",Y]},v]}],"col-start":[{"col-start":m()}],"col-end":[{"col-end":m()}],"grid-rows":[{"grid-rows":[D]}],"row-start-end":[{row:["auto",{span:[Y]},v]}],"row-start":[{"row-start":m()}],"row-end":[{"row-end":m()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",v]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",v]}],gap:[{gap:[$]}],"gap-x":[{"gap-x":[$]}],"gap-y":[{"gap-y":[$]}],"justify-content":[{justify:["normal"].concat(k())}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal"].concat(k(),["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(k(),["baseline"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[L]}],px:[{px:[L]}],py:[{py:[L]}],ps:[{ps:[L]}],pe:[{pe:[L]}],pt:[{pt:[L]}],pr:[{pr:[L]}],pb:[{pb:[L]}],pl:[{pl:[L]}],m:[{m:[w]}],mx:[{mx:[w]}],my:[{my:[w]}],ms:[{ms:[w]}],me:[{me:[w]}],mt:[{mt:[w]}],mr:[{mr:[w]}],mb:[{mb:[w]}],ml:[{ml:[w]}],"space-x":[{"space-x":[U]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[U]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",v,r]}],"min-w":[{"min-w":["min","max","fit",v,R]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[W]},W,v]}],h:[{h:[v,r,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",v,R]}],"max-h":[{"max-h":[v,r,"min","max","fit"]}],"font-size":[{text:["base",W,ye]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",re]}],"font-family":[{font:[D]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",v]}],"line-clamp":[{"line-clamp":["none",O,re]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",v,R]}],"list-image":[{"list-image":["none",v]}],"list-style-type":[{list:["none","disc","decimal",v]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[T]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[T]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(h(),["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",R]}],"underline-offset":[{"underline-offset":["auto",v,R]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:d()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",v]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",v]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[T]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(y(),[_r])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Qr]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},et]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[S]}],"gradient-via-pos":[{via:[S]}],"gradient-to-pos":[{to:[S]}],"gradient-from":[{from:[x]}],"gradient-via":[{via:[x]}],"gradient-to":[{to:[x]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[T]}],"border-style":[{border:[].concat(h(),["hidden"])}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[T]}],"divide-style":[{divide:h()}],"border-color":[{border:[o]}],"border-color-x":[{"border-x":[o]}],"border-color-y":[{"border-y":[o]}],"border-color-t":[{"border-t":[o]}],"border-color-r":[{"border-r":[o]}],"border-color-b":[{"border-b":[o]}],"border-color-l":[{"border-l":[o]}],"divide-color":[{divide:[o]}],"outline-style":[{outline:[""].concat(h())}],"outline-offset":[{"outline-offset":[v,R]}],"outline-w":[{outline:[R]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:p()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[T]}],"ring-offset-w":[{"ring-offset":[R]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",W,tt]}],"shadow-color":[{shadow:[D]}],opacity:[{opacity:[T]}],"mix-blend":[{"mix-blend":C()}],"bg-blend":[{"bg-blend":C()}],filter:[{filter:["","none"]}],blur:[{blur:[t]}],brightness:[{brightness:[n]}],contrast:[{contrast:[s]}],"drop-shadow":[{"drop-shadow":["","none",W,v]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[b]}],saturate:[{saturate:[_]}],sepia:[{sepia:[F]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[t]}],"backdrop-brightness":[{"backdrop-brightness":[n]}],"backdrop-contrast":[{"backdrop-contrast":[s]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[b]}],"backdrop-opacity":[{"backdrop-opacity":[T]}],"backdrop-saturate":[{"backdrop-saturate":[_]}],"backdrop-sepia":[{"backdrop-sepia":[F]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[a]}],"border-spacing-x":[{"border-spacing-x":[a]}],"border-spacing-y":[{"border-spacing-y":[a]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",v]}],duration:[{duration:E()}],ease:[{ease:["linear","in","out","in-out",v]}],delay:[{delay:E()}],animate:[{animate:["none","spin","ping","pulse","bounce",v]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[B]}],"scale-x":[{"scale-x":[B]}],"scale-y":[{"scale-y":[B]}],rotate:[{rotate:[Y,v]}],"translate-x":[{"translate-x":[J]}],"translate-y":[{"translate-y":[J]}],"skew-x":[{"skew-x":[q]}],"skew-y":[{"skew-y":[q]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",v]}],accent:[{accent:["auto",e]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",v]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":d()}],"scroll-mx":[{"scroll-mx":d()}],"scroll-my":[{"scroll-my":d()}],"scroll-ms":[{"scroll-ms":d()}],"scroll-me":[{"scroll-me":d()}],"scroll-mt":[{"scroll-mt":d()}],"scroll-mr":[{"scroll-mr":d()}],"scroll-mb":[{"scroll-mb":d()}],"scroll-ml":[{"scroll-ml":d()}],"scroll-p":[{"scroll-p":d()}],"scroll-px":[{"scroll-px":d()}],"scroll-py":[{"scroll-py":d()}],"scroll-ps":[{"scroll-ps":d()}],"scroll-pe":[{"scroll-pe":d()}],"scroll-pt":[{"scroll-pt":d()}],"scroll-pr":[{"scroll-pr":d()}],"scroll-pb":[{"scroll-pb":d()}],"scroll-pl":[{"scroll-pl":d()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",v]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[R,re]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}function it(e,r){for(var t in r)Xe(e,t,r[t]);return e}var lt=Object.prototype.hasOwnProperty,st=new Set(["string","number","boolean"]);function Xe(e,r,t){if(!lt.call(e,r)||st.has(typeof t)||t===null){e[r]=t;return}if(Array.isArray(t)&&Array.isArray(e[r])){e[r]=e[r].concat(t);return}if(typeof t=="object"&&typeof e[r]=="object"){if(e[r]===null){e[r]=t;return}for(var n in t)Xe(e[r],n,t[n])}}function dt(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];return typeof e=="function"?me.apply(void 0,[he,e].concat(t)):me.apply(void 0,[function(){return it(he(),e)}].concat(t))}var ct=me(he),ut={twMerge:!0,twMergeConfig:{},responsiveVariants:!1},Ze=e=>e||void 0,se=(...e)=>Ze(Ke(e).filter(Boolean).join(" ")),be=null,de={},we=!1,Q=(...e)=>r=>r.twMerge?((!be||we)&&(we=!1,be=I(de)?ct:dt(de)),Ze(be(se(e)))):se(e),Re=(e,r)=>{for(let t in r)e.hasOwnProperty(t)?e[t]=se(e[t],r[t]):e[t]=r[t];return e},ft=(e,r)=>{let{extend:t=null,slots:n={},variants:o={},compoundVariants:i=[],compoundSlots:a=[],defaultVariants:l={}}=e,s={...ut,...r},c=t!=null&&t.base?se(t.base,e==null?void 0:e.base):e==null?void 0:e.base,u=t!=null&&t.variants&&!I(t.variants)?He(o,t.variants):o,b=t!=null&&t.defaultVariants&&!I(t.defaultVariants)?{...t.defaultVariants,...l}:l;!I(s.twMergeConfig)&&!Rr(s.twMergeConfig,de)&&(we=!0,de=s.twMergeConfig);let $=I(n)?{}:{base:e==null?void 0:e.base,...n},x=I(t==null?void 0:t.slots)?$:Re({...t==null?void 0:t.slots},I($)?{base:e==null?void 0:e.base}:$),S=w=>{if(I(u)&&I(n)&&I(t==null?void 0:t.slots))return Q(c,w==null?void 0:w.class,w==null?void 0:w.className)(s);if(i&&!Array.isArray(i))throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof i}`);if(a&&!Array.isArray(a))throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof a}`);let T=(f,d,p=[],m)=>{let y=p;if(typeof d=="string")y=y.concat(Pe(d).split(" ").map(h=>`${f}:${h}`));else if(Array.isArray(d))y=y.concat(d.reduce((h,C)=>h.concat(`${f}:${C}`),[]));else if(typeof d=="object"&&typeof m=="string"){for(let h in d)if(d.hasOwnProperty(h)&&h===m){let C=d[h];if(C&&typeof C=="string"){let k=Pe(C);y[m]?y[m]=y[m].concat(k.split(" ").map(M=>`${f}:${M}`)):y[m]=k.split(" ").map(M=>`${f}:${M}`)}else Array.isArray(C)&&C.length>0&&(y[m]=C.reduce((k,M)=>k.concat(`${f}:${M}`),[]))}}return y},L=(f,d=u,p=null,m=null)=>{var y;let h=d[f];if(!h||I(h))return null;let C=(y=m==null?void 0:m[f])!=null?y:w==null?void 0:w[f];if(C===null)return null;let k=ze(C),M=Array.isArray(s.responsiveVariants)&&s.responsiveVariants.length>0||s.responsiveVariants===!0,j=b==null?void 0:b[f],G=[];if(typeof k=="object"&&M)for(let[P,Ce]of Object.entries(k)){let De=h[Ce];if(P==="initial"){j=Ce;continue}Array.isArray(s.responsiveVariants)&&!s.responsiveVariants.includes(P)||(G=T(P,De,G,p))}let E=h[k]||h[ze(j)];return typeof G=="object"&&typeof p=="string"&&G[p]?Re(G,E):G.length>0?(G.push(E),G):E},_=()=>u?Object.keys(u).map(f=>L(f,u)):null,B=(f,d)=>{if(!u||typeof u!="object")return null;let p=new Array;for(let m in u){let y=L(m,u,f,d),h=f==="base"&&typeof y=="string"?y:y&&y[f];h&&(p[p.length]=h)}return p},F={};for(let f in w)w[f]!==void 0&&(F[f]=w[f]);let q=(f,d)=>{var p;let m=typeof(w==null?void 0:w[f])=="object"?{[f]:(p=w[f])==null?void 0:p.initial}:{};return{...b,...F,...m,...d}},U=(f=[],d)=>{let p=[];for(let{class:m,className:y,...h}of f){let C=!0;for(let[k,M]of Object.entries(h)){let j=q(k,d);if(Array.isArray(M)){if(!M.includes(j[k])){C=!1;break}}else if(j[k]!==M){C=!1;break}}C&&(m&&p.push(m),y&&p.push(y))}return p},J=f=>{let d=U(i,f),p=U(t==null?void 0:t.compoundVariants,f);return Tr(p,d)},X=f=>{let d=J(f);if(!Array.isArray(d))return d;let p={};for(let m of d)if(typeof m=="string"&&(p.base=Q(p.base,m)(s)),typeof m=="object")for(let[y,h]of Object.entries(m))p[y]=Q(p[y],h)(s);return p},Z=f=>{if(a.length<1)return null;let d={};for(let{slots:p=[],class:m,className:y,...h}of a){if(!I(h)){let C=!0;for(let k of Object.keys(h)){let M=q(k,f)[k];if(M===void 0||(Array.isArray(h[k])?!h[k].includes(M):h[k]!==M)){C=!1;break}}if(!C)continue}for(let C of p)d[C]=d[C]||[],d[C].push([m,y])}return d};if(!I(n)||!I(t==null?void 0:t.slots)){let f={};if(typeof x=="object"&&!I(x))for(let d of Object.keys(x))f[d]=p=>{var m,y;return Q(x[d],B(d,p),((m=X(p))!=null?m:[])[d],((y=Z(p))!=null?y:[])[d],p==null?void 0:p.class,p==null?void 0:p.className)(s)};return f}return Q(c,_(),J(),w==null?void 0:w.class,w==null?void 0:w.className)(s)},z=()=>{if(!(!u||typeof u!="object"))return Object.keys(u)};return S.variantKeys=z(),S.extend=t,S.base=c,S.slots=x,S.variants=u,S.defaultVariants=b,S.compoundSlots=a,S.compoundVariants=i,S},te=["small","medium","large"],Wt=(e,r)=>{var t,n,o;return ft(e,{...r,twMerge:(t=r==null?void 0:r.twMerge)!=null?t:!0,twMergeConfig:{...r==null?void 0:r.twMergeConfig,theme:{...(n=r==null?void 0:r.twMergeConfig)==null?void 0:n.theme,opacity:["disabled"],spacing:["divider","unit",...pe],borderWidth:te,borderRadius:te},classGroups:{...(o=r==null?void 0:r.twMergeConfig)==null?void 0:o.classGroups,shadow:[{shadow:te}],"font-size":[{text:["tiny",...te]}],"bg-image":["bg-stripe-gradient"],"min-w":[{"min-w":["unit",...pe]}],"min-h":[{"min-h":["unit",...pe]}]}}})};function Ye(e){var r,t,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(t=Ye(e[r]))&&(n&&(n+=" "),n+=t);else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function Nt(...e){for(var r=0,t,n,o="";r<e.length;)(t=e[r++])&&(n=Ye(t))&&(o&&(o+=" "),o+=n);return o}var Ot=!1,Vt=e=>e?"true":void 0;function Kt(e){const r=g.useRef(null);return g.useImperativeHandle(e,()=>r.current),r}export{We as $,le as A,vt as B,fr as C,zt as D,ht as E,ke as F,xt as G,Pt as H,Gr as I,It as J,$t as K,Cr as L,kt as M,Ot as _,St as a,gt as b,yt as c,bt as d,wt as e,Rt as f,mt as g,Nt as h,Vt as i,ur as j,H as k,oe as l,jt as m,lr as n,Tt as o,Et as p,xr as q,Ct as r,At as s,Wt as t,Kt as u,Lt as v,mr as w,Gt as x,Mt as y,ie as z};
