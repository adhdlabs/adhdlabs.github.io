var ju=Object.defineProperty;var $u=(s,e,t)=>e in s?ju(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var Q=(s,e,t)=>($u(s,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}})();class Ju{constructor(e={}){Q(this,"opt");Q(this,"el");this.opt=e,this.el=this.opt.el}init(){}dispose(){this.opt=null,this.el=null}getEl(){return this.el}hasData(e){return this.getEl().getAttribute(e)!=null}getData(e,t){const i=this.getEl().getAttribute(e);return i??t}qs(e){return this.el.querySelector(e)}qsAll(e){return this.el.querySelectorAll(e)}hasClass(e){return this.el.classList.contains(e)}addClass(e){this.el.classList.add(e)}attachClass(e,t){e!=null&&e.classList.add(t)}detachClass(e,t){e!=null&&e.classList.remove(t)}removeClass(e){this.el.classList.remove(e)}getWidth(e){var i;let t=(i=document.defaultView)==null?void 0:i.getComputedStyle(e,null).width;return Number(t==null?void 0:t.replace("px",""))}getHeight(e){var t;if(e==null)return 0;{let i=(t=document.defaultView)==null?void 0:t.getComputedStyle(e,null).height;return Number(i==null?void 0:i.replace("px",""))}}getRect(e){var i;const t=(i=document.defaultView)==null?void 0:i.getComputedStyle(e,null);return t!=null?{width:Number(t.width.replace("px","")),height:Number(t.height.replace("px",""))}:{}}getDataNumber(e){const t=this.getEl().getAttribute(e);return t==null?0:Number(t)}getOffsetTop(e){const t=e.getBoundingClientRect();var i=window.pageYOffset||document.documentElement.scrollTop;return t.top+i}getOffset(e){const t=e.getBoundingClientRect();var i=window.pageYOffset||document.documentElement.scrollTop;return{y:t.top+i,x:t.left}}_call(e,t=null){e!=null&&(t!=null?e(t):e())}}const Do=class{constructor(){Q(this,"cnt",0);Q(this,"_updateList",[]);Q(this,"play",!0);Q(this,"_update",()=>{if(this.play){this.cnt++;for(var e of this._updateList)e!=null&&e();window.requestAnimationFrame(this._update)}});window.requestAnimationFrame(this._update)}static get instance(){return this._instance||(this._instance=new Do),this._instance}add(e){this._updateList.push(e)}remove(e){const t=[];this._updateList.forEach(i=>{i!=e&&t.push(i)}),this._updateList=t}};let Oi=Do;Q(Oi,"_instance");class Ua{constructor(e=0,t=0,i=0,r=0){Q(this,"x",0);Q(this,"y",0);Q(this,"width",0);Q(this,"height",0);this.x=e,this.y=t,this.width=i,this.height=r}}const Lo=class{constructor(){Q(this,"_list",[]);Q(this,"_timer",null);Q(this,"size",new Ua);Q(this,"oldSize",new Ua);Q(this,"_call",()=>{for(var e of this._list)e!=null&&e()});window.addEventListener("resize",()=>{this._eResize()},!1)}static get instance(){return this._instance||(this._instance=new Lo),this._instance}_eResize(){this._setStageSize(),this._timer===null&&(clearInterval(this._timer),this._timer=null),this._timer=setTimeout(()=>{this._call(),this.oldSize.width=this.size.width,this.oldSize.height=this.size.height},300)}_setStageSize(){this.size.width=window.innerWidth,this.size.height=window.innerHeight}add(e){this._list.push(e)}remove(e){const t=[];this._list.forEach(i=>{i!=e&&t.push(i)}),this._list=t}};let Mn=Lo;Q(Mn,"_instance");class Yi{constructor(e=0,t=0){Q(this,"x",0);Q(this,"y",0);this.x=e,this.y=t}set(e=0,t=0){this.x=e,this.y=t}copy(e){this.x=e.x,this.y=e.y}}class vc extends Ju{constructor(t={}){super(t);Q(this,"_updateHandler");Q(this,"_resizeHandler");Q(this,"_c",0);Q(this,"_isEnter",!1);Q(this,"_isOneEnter",!1);Q(this,"_observer");Q(this,"_elPos",new Yi(0,9999));Q(this,"_eRollOverHandler");Q(this,"_eRollOutHandler");(t.isDefEvent==null||t.isDefEvent)&&(this._updateHandler=this._update.bind(this),Oi.instance.add(this._updateHandler),this._resizeHandler=this._resize.bind(this),Mn.instance.add(this._resizeHandler))}init(){super.init()}_setHover(){this._eRollOverHandler=this._eRollOver.bind(this),this._eRollOutHandler=this._eRollOut.bind(this),this.getEl().addEventListener("mouseenter",this._eRollOverHandler),this.getEl().addEventListener("mouseleave",this._eRollOutHandler)}_disposeHover(){this._eRollOverHandler!=null&&(this.getEl().removeEventListener("mouseenter",this._eRollOverHandler),this.getEl().removeEventListener("mouseleave",this._eRollOutHandler),this._eRollOverHandler=null,this._eRollOutHandler=null)}_eRollOver(){}_eRollOut(){}_setObserver(){this._observer=new IntersectionObserver(t=>{t!=null&&t.forEach(i=>{i!=null&&i.intersectionRatio>0?this._eEnter():this._eLeave()})},{root:null}),setTimeout(()=>{if(this._observer!=null&&this._observer!=null){const t=this.getEl();t!=null&&this._observer.observe(t)}},100)}_eEnter(){this._isEnter=!0}_eLeave(){this._isEnter=!1}_disposeObserver(){(this._observer!=null||this._observer!=null)&&(this._observer.unobserve(this.getEl()),this._observer=null)}dispose(){this._updateHandler!=null&&(Oi.instance.remove(this._updateHandler),this._updateHandler=null),this._resizeHandler!=null&&(Mn.instance.remove(this._resizeHandler),this._resizeHandler=null),this._disposeHover(),this._disposeObserver(),super.dispose()}css(t,i){const r=t.style;for(var n in i)r[n]=i[n]}_update(){this._c++}_resize(){}}var Vs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ve={exports:{}};(function(s,e){(function(i,r){s.exports=r()})(Vs,function(){return function(t){var i={};function r(n){if(i[n])return i[n].exports;var o=i[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=i,r.d=function(n,o,a){r.o(n,o)||Object.defineProperty(n,o,{enumerable:!0,get:a})},r.r=function(n){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,o){if(o&1&&(n=r(n)),o&8||o&4&&typeof n=="object"&&n&&n.__esModule)return n;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:n}),o&2&&typeof n!="string")for(var l in n)r.d(a,l,function(u){return n[u]}.bind(null,l));return a},r.n=function(n){var o=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(o,"a",o),o},r.o=function(n,o){return Object.prototype.hasOwnProperty.call(n,o)},r.p="",r(r.s=21)}([function(t,i){var r={};t.exports=r,function(){r._nextId=0,r._seed=0,r._nowStartTime=+new Date,r._warnedOnce={},r._decomp=null,r.extend=function(o,a){var l,u;typeof a=="boolean"?(l=2,u=a):(l=1,u=!0);for(var c=l;c<arguments.length;c++){var p=arguments[c];if(p)for(var h in p)u&&p[h]&&p[h].constructor===Object&&(!o[h]||o[h].constructor===Object)?(o[h]=o[h]||{},r.extend(o[h],u,p[h])):o[h]=p[h]}return o},r.clone=function(o,a){return r.extend({},a,o)},r.keys=function(o){if(Object.keys)return Object.keys(o);var a=[];for(var l in o)a.push(l);return a},r.values=function(o){var a=[];if(Object.keys){for(var l=Object.keys(o),u=0;u<l.length;u++)a.push(o[l[u]]);return a}for(var c in o)a.push(o[c]);return a},r.get=function(o,a,l,u){a=a.split(".").slice(l,u);for(var c=0;c<a.length;c+=1)o=o[a[c]];return o},r.set=function(o,a,l,u,c){var p=a.split(".").slice(u,c);return r.get(o,a,0,-1)[p[p.length-1]]=l,l},r.shuffle=function(o){for(var a=o.length-1;a>0;a--){var l=Math.floor(r.random()*(a+1)),u=o[a];o[a]=o[l],o[l]=u}return o},r.choose=function(o){return o[Math.floor(r.random()*o.length)]},r.isElement=function(o){return typeof HTMLElement<"u"?o instanceof HTMLElement:!!(o&&o.nodeType&&o.nodeName)},r.isArray=function(o){return Object.prototype.toString.call(o)==="[object Array]"},r.isFunction=function(o){return typeof o=="function"},r.isPlainObject=function(o){return typeof o=="object"&&o.constructor===Object},r.isString=function(o){return toString.call(o)==="[object String]"},r.clamp=function(o,a,l){return o<a?a:o>l?l:o},r.sign=function(o){return o<0?-1:1},r.now=function(){if(typeof window<"u"&&window.performance){if(window.performance.now)return window.performance.now();if(window.performance.webkitNow)return window.performance.webkitNow()}return Date.now?Date.now():new Date-r._nowStartTime},r.random=function(o,a){return o=typeof o<"u"?o:0,a=typeof a<"u"?a:1,o+n()*(a-o)};var n=function(){return r._seed=(r._seed*9301+49297)%233280,r._seed/233280};r.colorToNumber=function(o){return o=o.replace("#",""),o.length==3&&(o=o.charAt(0)+o.charAt(0)+o.charAt(1)+o.charAt(1)+o.charAt(2)+o.charAt(2)),parseInt(o,16)},r.logLevel=1,r.log=function(){console&&r.logLevel>0&&r.logLevel<=3&&console.log.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},r.info=function(){console&&r.logLevel>0&&r.logLevel<=2&&console.info.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},r.warn=function(){console&&r.logLevel>0&&r.logLevel<=3&&console.warn.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},r.warnOnce=function(){var o=Array.prototype.slice.call(arguments).join(" ");r._warnedOnce[o]||(r.warn(o),r._warnedOnce[o]=!0)},r.deprecated=function(o,a,l){o[a]=r.chain(function(){r.warnOnce("🔅 deprecated 🔅",l)},o[a])},r.nextId=function(){return r._nextId++},r.indexOf=function(o,a){if(o.indexOf)return o.indexOf(a);for(var l=0;l<o.length;l++)if(o[l]===a)return l;return-1},r.map=function(o,a){if(o.map)return o.map(a);for(var l=[],u=0;u<o.length;u+=1)l.push(a(o[u]));return l},r.topologicalSort=function(o){var a=[],l=[],u=[];for(var c in o)!l[c]&&!u[c]&&r._topologicalSort(c,l,u,o,a);return a},r._topologicalSort=function(o,a,l,u,c){var p=u[o]||[];l[o]=!0;for(var h=0;h<p.length;h+=1){var f=p[h];l[f]||a[f]||r._topologicalSort(f,a,l,u,c)}l[o]=!1,a[o]=!0,c.push(o)},r.chain=function(){for(var o=[],a=0;a<arguments.length;a+=1){var l=arguments[a];l._chained?o.push.apply(o,l._chained):o.push(l)}var u=function(){for(var c,p=new Array(arguments.length),h=0,f=arguments.length;h<f;h++)p[h]=arguments[h];for(h=0;h<o.length;h+=1){var g=o[h].apply(c,p);typeof g<"u"&&(c=g)}return c};return u._chained=o,u},r.chainPathBefore=function(o,a,l){return r.set(o,a,r.chain(l,r.get(o,a)))},r.chainPathAfter=function(o,a,l){return r.set(o,a,r.chain(r.get(o,a),l))},r.setDecomp=function(o){r._decomp=o},r.getDecomp=function(){var o=r._decomp;try{!o&&typeof window<"u"&&(o=window.decomp),!o&&typeof Vs<"u"&&(o=Vs.decomp)}catch{o=null}return o}}()},function(t,i){var r={};t.exports=r,function(){r.create=function(n){var o={min:{x:0,y:0},max:{x:0,y:0}};return n&&r.update(o,n),o},r.update=function(n,o,a){n.min.x=1/0,n.max.x=-1/0,n.min.y=1/0,n.max.y=-1/0;for(var l=0;l<o.length;l++){var u=o[l];u.x>n.max.x&&(n.max.x=u.x),u.x<n.min.x&&(n.min.x=u.x),u.y>n.max.y&&(n.max.y=u.y),u.y<n.min.y&&(n.min.y=u.y)}a&&(a.x>0?n.max.x+=a.x:n.min.x+=a.x,a.y>0?n.max.y+=a.y:n.min.y+=a.y)},r.contains=function(n,o){return o.x>=n.min.x&&o.x<=n.max.x&&o.y>=n.min.y&&o.y<=n.max.y},r.overlaps=function(n,o){return n.min.x<=o.max.x&&n.max.x>=o.min.x&&n.max.y>=o.min.y&&n.min.y<=o.max.y},r.translate=function(n,o){n.min.x+=o.x,n.max.x+=o.x,n.min.y+=o.y,n.max.y+=o.y},r.shift=function(n,o){var a=n.max.x-n.min.x,l=n.max.y-n.min.y;n.min.x=o.x,n.max.x=o.x+a,n.min.y=o.y,n.max.y=o.y+l}}()},function(t,i){var r={};t.exports=r,function(){r.create=function(n,o){return{x:n||0,y:o||0}},r.clone=function(n){return{x:n.x,y:n.y}},r.magnitude=function(n){return Math.sqrt(n.x*n.x+n.y*n.y)},r.magnitudeSquared=function(n){return n.x*n.x+n.y*n.y},r.rotate=function(n,o,a){var l=Math.cos(o),u=Math.sin(o);a||(a={});var c=n.x*l-n.y*u;return a.y=n.x*u+n.y*l,a.x=c,a},r.rotateAbout=function(n,o,a,l){var u=Math.cos(o),c=Math.sin(o);l||(l={});var p=a.x+((n.x-a.x)*u-(n.y-a.y)*c);return l.y=a.y+((n.x-a.x)*c+(n.y-a.y)*u),l.x=p,l},r.normalise=function(n){var o=r.magnitude(n);return o===0?{x:0,y:0}:{x:n.x/o,y:n.y/o}},r.dot=function(n,o){return n.x*o.x+n.y*o.y},r.cross=function(n,o){return n.x*o.y-n.y*o.x},r.cross3=function(n,o,a){return(o.x-n.x)*(a.y-n.y)-(o.y-n.y)*(a.x-n.x)},r.add=function(n,o,a){return a||(a={}),a.x=n.x+o.x,a.y=n.y+o.y,a},r.sub=function(n,o,a){return a||(a={}),a.x=n.x-o.x,a.y=n.y-o.y,a},r.mult=function(n,o){return{x:n.x*o,y:n.y*o}},r.div=function(n,o){return{x:n.x/o,y:n.y/o}},r.perp=function(n,o){return o=o===!0?-1:1,{x:o*-n.y,y:o*n.x}},r.neg=function(n){return{x:-n.x,y:-n.y}},r.angle=function(n,o){return Math.atan2(o.y-n.y,o.x-n.x)},r._temp=[r.create(),r.create(),r.create(),r.create(),r.create(),r.create()]}()},function(t,i,r){var n={};t.exports=n;var o=r(2),a=r(0);(function(){n.create=function(l,u){for(var c=[],p=0;p<l.length;p++){var h=l[p],f={x:h.x,y:h.y,index:p,body:u,isInternal:!1};c.push(f)}return c},n.fromPath=function(l,u){var c=/L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/ig,p=[];return l.replace(c,function(h,f,g){p.push({x:parseFloat(f),y:parseFloat(g)})}),n.create(p,u)},n.centre=function(l){for(var u=n.area(l,!0),c={x:0,y:0},p,h,f,g=0;g<l.length;g++)f=(g+1)%l.length,p=o.cross(l[g],l[f]),h=o.mult(o.add(l[g],l[f]),p),c=o.add(c,h);return o.div(c,6*u)},n.mean=function(l){for(var u={x:0,y:0},c=0;c<l.length;c++)u.x+=l[c].x,u.y+=l[c].y;return o.div(u,l.length)},n.area=function(l,u){for(var c=0,p=l.length-1,h=0;h<l.length;h++)c+=(l[p].x-l[h].x)*(l[p].y+l[h].y),p=h;return u?c/2:Math.abs(c)/2},n.inertia=function(l,u){for(var c=0,p=0,h=l,f,g,d=0;d<h.length;d++)g=(d+1)%h.length,f=Math.abs(o.cross(h[g],h[d])),c+=f*(o.dot(h[g],h[g])+o.dot(h[g],h[d])+o.dot(h[d],h[d])),p+=f;return u/6*(c/p)},n.translate=function(l,u,c){c=typeof c<"u"?c:1;var p=l.length,h=u.x*c,f=u.y*c,g;for(g=0;g<p;g++)l[g].x+=h,l[g].y+=f;return l},n.rotate=function(l,u,c){if(u!==0){var p=Math.cos(u),h=Math.sin(u),f=c.x,g=c.y,d=l.length,m,_,T,E;for(E=0;E<d;E++)m=l[E],_=m.x-f,T=m.y-g,m.x=f+(_*p-T*h),m.y=g+(_*h+T*p);return l}},n.contains=function(l,u){for(var c=u.x,p=u.y,h=l.length,f=l[h-1],g,d=0;d<h;d++){if(g=l[d],(c-f.x)*(g.y-f.y)+(p-f.y)*(f.x-g.x)>0)return!1;f=g}return!0},n.scale=function(l,u,c,p){if(u===1&&c===1)return l;p=p||n.centre(l);for(var h,f,g=0;g<l.length;g++)h=l[g],f=o.sub(h,p),l[g].x=p.x+f.x*u,l[g].y=p.y+f.y*c;return l},n.chamfer=function(l,u,c,p,h){typeof u=="number"?u=[u]:u=u||[8],c=typeof c<"u"?c:-1,p=p||2,h=h||14;for(var f=[],g=0;g<l.length;g++){var d=l[g-1>=0?g-1:l.length-1],m=l[g],_=l[(g+1)%l.length],T=u[g<u.length?g:u.length-1];if(T===0){f.push(m);continue}var E=o.normalise({x:m.y-d.y,y:d.x-m.x}),v=o.normalise({x:_.y-m.y,y:m.x-_.x}),x=Math.sqrt(2*Math.pow(T,2)),S=o.mult(a.clone(E),T),M=o.normalise(o.mult(o.add(E,v),.5)),y=o.sub(m,o.mult(M,x)),w=c;c===-1&&(w=Math.pow(T,.32)*1.75),w=a.clamp(w,p,h),w%2===1&&(w+=1);for(var b=Math.acos(o.dot(E,v)),A=b/w,I=0;I<w;I++)f.push(o.add(o.rotate(S,A*I),y))}return f},n.clockwiseSort=function(l){var u=n.mean(l);return l.sort(function(c,p){return o.angle(u,c)-o.angle(u,p)}),l},n.isConvex=function(l){var u=0,c=l.length,p,h,f,g;if(c<3)return null;for(p=0;p<c;p++)if(h=(p+1)%c,f=(p+2)%c,g=(l[h].x-l[p].x)*(l[f].y-l[h].y),g-=(l[h].y-l[p].y)*(l[f].x-l[h].x),g<0?u|=1:g>0&&(u|=2),u===3)return!1;return u!==0?!0:null},n.hull=function(l){var u=[],c=[],p,h;for(l=l.slice(0),l.sort(function(f,g){var d=f.x-g.x;return d!==0?d:f.y-g.y}),h=0;h<l.length;h+=1){for(p=l[h];c.length>=2&&o.cross3(c[c.length-2],c[c.length-1],p)<=0;)c.pop();c.push(p)}for(h=l.length-1;h>=0;h-=1){for(p=l[h];u.length>=2&&o.cross3(u[u.length-2],u[u.length-1],p)<=0;)u.pop();u.push(p)}return u.pop(),c.pop(),u.concat(c)}})()},function(t,i,r){var n={};t.exports=n;var o=r(0);(function(){n.on=function(a,l,u){for(var c=l.split(" "),p,h=0;h<c.length;h++)p=c[h],a.events=a.events||{},a.events[p]=a.events[p]||[],a.events[p].push(u);return u},n.off=function(a,l,u){if(!l){a.events={};return}typeof l=="function"&&(u=l,l=o.keys(a.events).join(" "));for(var c=l.split(" "),p=0;p<c.length;p++){var h=a.events[c[p]],f=[];if(u&&h)for(var g=0;g<h.length;g++)h[g]!==u&&f.push(h[g]);a.events[c[p]]=f}},n.trigger=function(a,l,u){var c,p,h,f,g=a.events;if(g&&o.keys(g).length>0){u||(u={}),c=l.split(" ");for(var d=0;d<c.length;d++)if(p=c[d],h=g[p],h){f=o.clone(u,!1),f.name=p,f.source=a;for(var m=0;m<h.length;m++)h[m].apply(a,[f])}}}})()},function(t,i,r){var n={};t.exports=n;var o=r(4),a=r(0),l=r(1),u=r(6);(function(){n.create=function(c){return a.extend({id:a.nextId(),type:"composite",parent:null,isModified:!1,bodies:[],constraints:[],composites:[],label:"Composite",plugin:{},cache:{allBodies:null,allConstraints:null,allComposites:null}},c)},n.setModified=function(c,p,h,f){if(c.isModified=p,p&&c.cache&&(c.cache.allBodies=null,c.cache.allConstraints=null,c.cache.allComposites=null),h&&c.parent&&n.setModified(c.parent,p,h,f),f)for(var g=0;g<c.composites.length;g++){var d=c.composites[g];n.setModified(d,p,h,f)}},n.add=function(c,p){var h=[].concat(p);o.trigger(c,"beforeAdd",{object:p});for(var f=0;f<h.length;f++){var g=h[f];switch(g.type){case"body":if(g.parent!==g){a.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");break}n.addBody(c,g);break;case"constraint":n.addConstraint(c,g);break;case"composite":n.addComposite(c,g);break;case"mouseConstraint":n.addConstraint(c,g.constraint);break}}return o.trigger(c,"afterAdd",{object:p}),c},n.remove=function(c,p,h){var f=[].concat(p);o.trigger(c,"beforeRemove",{object:p});for(var g=0;g<f.length;g++){var d=f[g];switch(d.type){case"body":n.removeBody(c,d,h);break;case"constraint":n.removeConstraint(c,d,h);break;case"composite":n.removeComposite(c,d,h);break;case"mouseConstraint":n.removeConstraint(c,d.constraint);break}}return o.trigger(c,"afterRemove",{object:p}),c},n.addComposite=function(c,p){return c.composites.push(p),p.parent=c,n.setModified(c,!0,!0,!1),c},n.removeComposite=function(c,p,h){var f=a.indexOf(c.composites,p);if(f!==-1&&n.removeCompositeAt(c,f),h)for(var g=0;g<c.composites.length;g++)n.removeComposite(c.composites[g],p,!0);return c},n.removeCompositeAt=function(c,p){return c.composites.splice(p,1),n.setModified(c,!0,!0,!1),c},n.addBody=function(c,p){return c.bodies.push(p),n.setModified(c,!0,!0,!1),c},n.removeBody=function(c,p,h){var f=a.indexOf(c.bodies,p);if(f!==-1&&n.removeBodyAt(c,f),h)for(var g=0;g<c.composites.length;g++)n.removeBody(c.composites[g],p,!0);return c},n.removeBodyAt=function(c,p){return c.bodies.splice(p,1),n.setModified(c,!0,!0,!1),c},n.addConstraint=function(c,p){return c.constraints.push(p),n.setModified(c,!0,!0,!1),c},n.removeConstraint=function(c,p,h){var f=a.indexOf(c.constraints,p);if(f!==-1&&n.removeConstraintAt(c,f),h)for(var g=0;g<c.composites.length;g++)n.removeConstraint(c.composites[g],p,!0);return c},n.removeConstraintAt=function(c,p){return c.constraints.splice(p,1),n.setModified(c,!0,!0,!1),c},n.clear=function(c,p,h){if(h)for(var f=0;f<c.composites.length;f++)n.clear(c.composites[f],p,!0);return p?c.bodies=c.bodies.filter(function(g){return g.isStatic}):c.bodies.length=0,c.constraints.length=0,c.composites.length=0,n.setModified(c,!0,!0,!1),c},n.allBodies=function(c){if(c.cache&&c.cache.allBodies)return c.cache.allBodies;for(var p=[].concat(c.bodies),h=0;h<c.composites.length;h++)p=p.concat(n.allBodies(c.composites[h]));return c.cache&&(c.cache.allBodies=p),p},n.allConstraints=function(c){if(c.cache&&c.cache.allConstraints)return c.cache.allConstraints;for(var p=[].concat(c.constraints),h=0;h<c.composites.length;h++)p=p.concat(n.allConstraints(c.composites[h]));return c.cache&&(c.cache.allConstraints=p),p},n.allComposites=function(c){if(c.cache&&c.cache.allComposites)return c.cache.allComposites;for(var p=[].concat(c.composites),h=0;h<c.composites.length;h++)p=p.concat(n.allComposites(c.composites[h]));return c.cache&&(c.cache.allComposites=p),p},n.get=function(c,p,h){var f,g;switch(h){case"body":f=n.allBodies(c);break;case"constraint":f=n.allConstraints(c);break;case"composite":f=n.allComposites(c).concat(c);break}return f?(g=f.filter(function(d){return d.id.toString()===p.toString()}),g.length===0?null:g[0]):null},n.move=function(c,p,h){return n.remove(c,p),n.add(h,p),c},n.rebase=function(c){for(var p=n.allBodies(c).concat(n.allConstraints(c)).concat(n.allComposites(c)),h=0;h<p.length;h++)p[h].id=a.nextId();return c},n.translate=function(c,p,h){for(var f=h?n.allBodies(c):c.bodies,g=0;g<f.length;g++)u.translate(f[g],p);return c},n.rotate=function(c,p,h,f){for(var g=Math.cos(p),d=Math.sin(p),m=f?n.allBodies(c):c.bodies,_=0;_<m.length;_++){var T=m[_],E=T.position.x-h.x,v=T.position.y-h.y;u.setPosition(T,{x:h.x+(E*g-v*d),y:h.y+(E*d+v*g)}),u.rotate(T,p)}return c},n.scale=function(c,p,h,f,g){for(var d=g?n.allBodies(c):c.bodies,m=0;m<d.length;m++){var _=d[m],T=_.position.x-f.x,E=_.position.y-f.y;u.setPosition(_,{x:f.x+T*p,y:f.y+E*h}),u.scale(_,p,h)}return c},n.bounds=function(c){for(var p=n.allBodies(c),h=[],f=0;f<p.length;f+=1){var g=p[f];h.push(g.bounds.min,g.bounds.max)}return l.create(h)}})()},function(t,i,r){var n={};t.exports=n;var o=r(3),a=r(2),l=r(7);r(16);var u=r(0),c=r(1),p=r(11);(function(){n._inertiaScale=4,n._nextCollidingGroupId=1,n._nextNonCollidingGroupId=-1,n._nextCategory=1,n.create=function(f){var g={id:u.nextId(),type:"body",label:"Body",parts:[],plugin:{},angle:0,vertices:o.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),position:{x:0,y:0},force:{x:0,y:0},torque:0,positionImpulse:{x:0,y:0},constraintImpulse:{x:0,y:0,angle:0},totalContacts:0,speed:0,angularSpeed:0,velocity:{x:0,y:0},angularVelocity:0,isSensor:!1,isStatic:!1,isSleeping:!1,motion:0,sleepThreshold:60,density:.001,restitution:0,friction:.1,frictionStatic:.5,frictionAir:.01,collisionFilter:{category:1,mask:4294967295,group:0},slop:.05,timeScale:1,render:{visible:!0,opacity:1,strokeStyle:null,fillStyle:null,lineWidth:null,sprite:{xScale:1,yScale:1,xOffset:0,yOffset:0}},events:null,bounds:null,chamfer:null,circleRadius:0,positionPrev:null,anglePrev:0,parent:null,axes:null,area:0,mass:0,inertia:0,_original:null},d=u.extend(g,f);return h(d,f),d},n.nextGroup=function(f){return f?n._nextNonCollidingGroupId--:n._nextCollidingGroupId++},n.nextCategory=function(){return n._nextCategory=n._nextCategory<<1,n._nextCategory};var h=function(f,g){g=g||{},n.set(f,{bounds:f.bounds||c.create(f.vertices),positionPrev:f.positionPrev||a.clone(f.position),anglePrev:f.anglePrev||f.angle,vertices:f.vertices,parts:f.parts||[f],isStatic:f.isStatic,isSleeping:f.isSleeping,parent:f.parent||f}),o.rotate(f.vertices,f.angle,f.position),p.rotate(f.axes,f.angle),c.update(f.bounds,f.vertices,f.velocity),n.set(f,{axes:g.axes||f.axes,area:g.area||f.area,mass:g.mass||f.mass,inertia:g.inertia||f.inertia});var d=f.isStatic?"#14151f":u.choose(["#f19648","#f5d259","#f55a3c","#063e7b","#ececd1"]),m=f.isStatic?"#555":"#ccc",_=f.isStatic&&f.render.fillStyle===null?1:0;f.render.fillStyle=f.render.fillStyle||d,f.render.strokeStyle=f.render.strokeStyle||m,f.render.lineWidth=f.render.lineWidth||_,f.render.sprite.xOffset+=-(f.bounds.min.x-f.position.x)/(f.bounds.max.x-f.bounds.min.x),f.render.sprite.yOffset+=-(f.bounds.min.y-f.position.y)/(f.bounds.max.y-f.bounds.min.y)};n.set=function(f,g,d){var m;typeof g=="string"&&(m=g,g={},g[m]=d);for(m in g)if(!!Object.prototype.hasOwnProperty.call(g,m))switch(d=g[m],m){case"isStatic":n.setStatic(f,d);break;case"isSleeping":l.set(f,d);break;case"mass":n.setMass(f,d);break;case"density":n.setDensity(f,d);break;case"inertia":n.setInertia(f,d);break;case"vertices":n.setVertices(f,d);break;case"position":n.setPosition(f,d);break;case"angle":n.setAngle(f,d);break;case"velocity":n.setVelocity(f,d);break;case"angularVelocity":n.setAngularVelocity(f,d);break;case"parts":n.setParts(f,d);break;case"centre":n.setCentre(f,d);break;default:f[m]=d}},n.setStatic=function(f,g){for(var d=0;d<f.parts.length;d++){var m=f.parts[d];m.isStatic=g,g?(m._original={restitution:m.restitution,friction:m.friction,mass:m.mass,inertia:m.inertia,density:m.density,inverseMass:m.inverseMass,inverseInertia:m.inverseInertia},m.restitution=0,m.friction=1,m.mass=m.inertia=m.density=1/0,m.inverseMass=m.inverseInertia=0,m.positionPrev.x=m.position.x,m.positionPrev.y=m.position.y,m.anglePrev=m.angle,m.angularVelocity=0,m.speed=0,m.angularSpeed=0,m.motion=0):m._original&&(m.restitution=m._original.restitution,m.friction=m._original.friction,m.mass=m._original.mass,m.inertia=m._original.inertia,m.density=m._original.density,m.inverseMass=m._original.inverseMass,m.inverseInertia=m._original.inverseInertia,m._original=null)}},n.setMass=function(f,g){var d=f.inertia/(f.mass/6);f.inertia=d*(g/6),f.inverseInertia=1/f.inertia,f.mass=g,f.inverseMass=1/f.mass,f.density=f.mass/f.area},n.setDensity=function(f,g){n.setMass(f,g*f.area),f.density=g},n.setInertia=function(f,g){f.inertia=g,f.inverseInertia=1/f.inertia},n.setVertices=function(f,g){g[0].body===f?f.vertices=g:f.vertices=o.create(g,f),f.axes=p.fromVertices(f.vertices),f.area=o.area(f.vertices),n.setMass(f,f.density*f.area);var d=o.centre(f.vertices);o.translate(f.vertices,d,-1),n.setInertia(f,n._inertiaScale*o.inertia(f.vertices,f.mass)),o.translate(f.vertices,f.position),c.update(f.bounds,f.vertices,f.velocity)},n.setParts=function(f,g,d){var m;for(g=g.slice(0),f.parts.length=0,f.parts.push(f),f.parent=f,m=0;m<g.length;m++){var _=g[m];_!==f&&(_.parent=f,f.parts.push(_))}if(f.parts.length!==1){if(d=typeof d<"u"?d:!0,d){var T=[];for(m=0;m<g.length;m++)T=T.concat(g[m].vertices);o.clockwiseSort(T);var E=o.hull(T),v=o.centre(E);n.setVertices(f,E),o.translate(f.vertices,v)}var x=n._totalProperties(f);f.area=x.area,f.parent=f,f.position.x=x.centre.x,f.position.y=x.centre.y,f.positionPrev.x=x.centre.x,f.positionPrev.y=x.centre.y,n.setMass(f,x.mass),n.setInertia(f,x.inertia),n.setPosition(f,x.centre)}},n.setCentre=function(f,g,d){d?(f.positionPrev.x+=g.x,f.positionPrev.y+=g.y,f.position.x+=g.x,f.position.y+=g.y):(f.positionPrev.x=g.x-(f.position.x-f.positionPrev.x),f.positionPrev.y=g.y-(f.position.y-f.positionPrev.y),f.position.x=g.x,f.position.y=g.y)},n.setPosition=function(f,g){var d=a.sub(g,f.position);f.positionPrev.x+=d.x,f.positionPrev.y+=d.y;for(var m=0;m<f.parts.length;m++){var _=f.parts[m];_.position.x+=d.x,_.position.y+=d.y,o.translate(_.vertices,d),c.update(_.bounds,_.vertices,f.velocity)}},n.setAngle=function(f,g){var d=g-f.angle;f.anglePrev+=d;for(var m=0;m<f.parts.length;m++){var _=f.parts[m];_.angle+=d,o.rotate(_.vertices,d,f.position),p.rotate(_.axes,d),c.update(_.bounds,_.vertices,f.velocity),m>0&&a.rotateAbout(_.position,d,f.position,_.position)}},n.setVelocity=function(f,g){f.positionPrev.x=f.position.x-g.x,f.positionPrev.y=f.position.y-g.y,f.velocity.x=g.x,f.velocity.y=g.y,f.speed=a.magnitude(f.velocity)},n.setAngularVelocity=function(f,g){f.anglePrev=f.angle-g,f.angularVelocity=g,f.angularSpeed=Math.abs(f.angularVelocity)},n.translate=function(f,g){n.setPosition(f,a.add(f.position,g))},n.rotate=function(f,g,d){if(!d)n.setAngle(f,f.angle+g);else{var m=Math.cos(g),_=Math.sin(g),T=f.position.x-d.x,E=f.position.y-d.y;n.setPosition(f,{x:d.x+(T*m-E*_),y:d.y+(T*_+E*m)}),n.setAngle(f,f.angle+g)}},n.scale=function(f,g,d,m){var _=0,T=0;m=m||f.position;for(var E=0;E<f.parts.length;E++){var v=f.parts[E];o.scale(v.vertices,g,d,m),v.axes=p.fromVertices(v.vertices),v.area=o.area(v.vertices),n.setMass(v,f.density*v.area),o.translate(v.vertices,{x:-v.position.x,y:-v.position.y}),n.setInertia(v,n._inertiaScale*o.inertia(v.vertices,v.mass)),o.translate(v.vertices,{x:v.position.x,y:v.position.y}),E>0&&(_+=v.area,T+=v.inertia),v.position.x=m.x+(v.position.x-m.x)*g,v.position.y=m.y+(v.position.y-m.y)*d,c.update(v.bounds,v.vertices,f.velocity)}f.parts.length>1&&(f.area=_,f.isStatic||(n.setMass(f,f.density*_),n.setInertia(f,T))),f.circleRadius&&(g===d?f.circleRadius*=g:f.circleRadius=null)},n.update=function(f,g,d,m){var _=Math.pow(g*d*f.timeScale,2),T=1-f.frictionAir*d*f.timeScale,E=f.position.x-f.positionPrev.x,v=f.position.y-f.positionPrev.y;f.velocity.x=E*T*m+f.force.x/f.mass*_,f.velocity.y=v*T*m+f.force.y/f.mass*_,f.positionPrev.x=f.position.x,f.positionPrev.y=f.position.y,f.position.x+=f.velocity.x,f.position.y+=f.velocity.y,f.angularVelocity=(f.angle-f.anglePrev)*T*m+f.torque/f.inertia*_,f.anglePrev=f.angle,f.angle+=f.angularVelocity,f.speed=a.magnitude(f.velocity),f.angularSpeed=Math.abs(f.angularVelocity);for(var x=0;x<f.parts.length;x++){var S=f.parts[x];o.translate(S.vertices,f.velocity),x>0&&(S.position.x+=f.velocity.x,S.position.y+=f.velocity.y),f.angularVelocity!==0&&(o.rotate(S.vertices,f.angularVelocity,f.position),p.rotate(S.axes,f.angularVelocity),x>0&&a.rotateAbout(S.position,f.angularVelocity,f.position,S.position)),c.update(S.bounds,S.vertices,f.velocity)}},n.applyForce=function(f,g,d){f.force.x+=d.x,f.force.y+=d.y;var m={x:g.x-f.position.x,y:g.y-f.position.y};f.torque+=m.x*d.y-m.y*d.x},n._totalProperties=function(f){for(var g={mass:0,area:0,inertia:0,centre:{x:0,y:0}},d=f.parts.length===1?0:1;d<f.parts.length;d++){var m=f.parts[d],_=m.mass!==1/0?m.mass:1;g.mass+=_,g.area+=m.area,g.inertia+=m.inertia,g.centre=a.add(g.centre,a.mult(m.position,_))}return g.centre=a.div(g.centre,g.mass),g}})()},function(t,i,r){var n={};t.exports=n;var o=r(4);(function(){n._motionWakeThreshold=.18,n._motionSleepThreshold=.08,n._minBias=.9,n.update=function(a,l){for(var u=l*l*l,c=0;c<a.length;c++){var p=a[c],h=p.speed*p.speed+p.angularSpeed*p.angularSpeed;if(p.force.x!==0||p.force.y!==0){n.set(p,!1);continue}var f=Math.min(p.motion,h),g=Math.max(p.motion,h);p.motion=n._minBias*f+(1-n._minBias)*g,p.sleepThreshold>0&&p.motion<n._motionSleepThreshold*u?(p.sleepCounter+=1,p.sleepCounter>=p.sleepThreshold&&n.set(p,!0)):p.sleepCounter>0&&(p.sleepCounter-=1)}},n.afterCollisions=function(a,l){for(var u=l*l*l,c=0;c<a.length;c++){var p=a[c];if(!!p.isActive){var h=p.collision,f=h.bodyA.parent,g=h.bodyB.parent;if(!(f.isSleeping&&g.isSleeping||f.isStatic||g.isStatic)&&(f.isSleeping||g.isSleeping)){var d=f.isSleeping&&!f.isStatic?f:g,m=d===f?g:f;!d.isStatic&&m.motion>n._motionWakeThreshold*u&&n.set(d,!1)}}}},n.set=function(a,l){var u=a.isSleeping;l?(a.isSleeping=!0,a.sleepCounter=a.sleepThreshold,a.positionImpulse.x=0,a.positionImpulse.y=0,a.positionPrev.x=a.position.x,a.positionPrev.y=a.position.y,a.anglePrev=a.angle,a.speed=0,a.angularSpeed=0,a.motion=0,u||o.trigger(a,"sleepStart")):(a.isSleeping=!1,a.sleepCounter=0,u&&o.trigger(a,"sleepEnd"))}})()},function(t,i,r){var n={};t.exports=n;var o=r(3),a=r(9);(function(){var l=[],u={overlap:0,axis:null},c={overlap:0,axis:null};n.create=function(p,h){return{pair:null,collided:!1,bodyA:p,bodyB:h,parentA:p.parent,parentB:h.parent,depth:0,normal:{x:0,y:0},tangent:{x:0,y:0},penetration:{x:0,y:0},supports:[]}},n.collides=function(p,h,f){if(n._overlapAxes(u,p.vertices,h.vertices,p.axes),u.overlap<=0||(n._overlapAxes(c,h.vertices,p.vertices,h.axes),c.overlap<=0))return null;var g=f&&f.table[a.id(p,h)],d;g?d=g.collision:(d=n.create(p,h),d.collided=!0,d.bodyA=p.id<h.id?p:h,d.bodyB=p.id<h.id?h:p,d.parentA=d.bodyA.parent,d.parentB=d.bodyB.parent),p=d.bodyA,h=d.bodyB;var m;u.overlap<c.overlap?m=u:m=c;var _=d.normal,T=d.supports,E=m.axis,v=E.x,x=E.y;v*(h.position.x-p.position.x)+x*(h.position.y-p.position.y)<0?(_.x=v,_.y=x):(_.x=-v,_.y=-x),d.tangent.x=-_.y,d.tangent.y=_.x,d.depth=m.overlap,d.penetration.x=_.x*d.depth,d.penetration.y=_.y*d.depth;var S=n._findSupports(p,h,_,1),M=0;if(o.contains(p.vertices,S[0])&&(T[M++]=S[0]),o.contains(p.vertices,S[1])&&(T[M++]=S[1]),M<2){var y=n._findSupports(h,p,_,-1);o.contains(h.vertices,y[0])&&(T[M++]=y[0]),M<2&&o.contains(h.vertices,y[1])&&(T[M++]=y[1])}return M===0&&(T[M++]=S[0]),T.length=M,d},n._overlapAxes=function(p,h,f,g){var d=h.length,m=f.length,_=h[0].x,T=h[0].y,E=f[0].x,v=f[0].y,x=g.length,S=Number.MAX_VALUE,M=0,y,w,b,A,I,L;for(I=0;I<x;I++){var D=g[I],F=D.x,N=D.y,H=_*F+T*N,z=E*F+v*N,X=H,K=z;for(L=1;L<d;L+=1)A=h[L].x*F+h[L].y*N,A>X?X=A:A<H&&(H=A);for(L=1;L<m;L+=1)A=f[L].x*F+f[L].y*N,A>K?K=A:A<z&&(z=A);if(w=X-z,b=K-H,y=w<b?w:b,y<S&&(S=y,M=I,y<=0))break}p.axis=g[M],p.overlap=S},n._projectToAxis=function(p,h,f){for(var g=h[0].x*f.x+h[0].y*f.y,d=g,m=1;m<h.length;m+=1){var _=h[m].x*f.x+h[m].y*f.y;_>d?d=_:_<g&&(g=_)}p.min=g,p.max=d},n._findSupports=function(p,h,f,g){var d=h.vertices,m=d.length,_=p.position.x,T=p.position.y,E=f.x*g,v=f.y*g,x=Number.MAX_VALUE,S,M,y,w,b;for(b=0;b<m;b+=1)M=d[b],w=E*(_-M.x)+v*(T-M.y),w<x&&(x=w,S=M);return y=d[(m+S.index-1)%m],x=E*(_-y.x)+v*(T-y.y),M=d[(S.index+1)%m],E*(_-M.x)+v*(T-M.y)<x?(l[0]=S,l[1]=M,l):(l[0]=S,l[1]=y,l)}})()},function(t,i,r){var n={};t.exports=n;var o=r(17);(function(){n.create=function(a,l){var u=a.bodyA,c=a.bodyB,p={id:n.id(u,c),bodyA:u,bodyB:c,collision:a,contacts:[],activeContacts:[],separation:0,isActive:!0,confirmedActive:!0,isSensor:u.isSensor||c.isSensor,timeCreated:l,timeUpdated:l,inverseMass:0,friction:0,frictionStatic:0,restitution:0,slop:0};return n.update(p,a,l),p},n.update=function(a,l,u){var c=a.contacts,p=l.supports,h=a.activeContacts,f=l.parentA,g=l.parentB,d=f.vertices.length;a.isActive=!0,a.timeUpdated=u,a.collision=l,a.separation=l.depth,a.inverseMass=f.inverseMass+g.inverseMass,a.friction=f.friction<g.friction?f.friction:g.friction,a.frictionStatic=f.frictionStatic>g.frictionStatic?f.frictionStatic:g.frictionStatic,a.restitution=f.restitution>g.restitution?f.restitution:g.restitution,a.slop=f.slop>g.slop?f.slop:g.slop,l.pair=a,h.length=0;for(var m=0;m<p.length;m++){var _=p[m],T=_.body===f?_.index:d+_.index,E=c[T];E?h.push(E):h.push(c[T]=o.create(_))}},n.setActive=function(a,l,u){l?(a.isActive=!0,a.timeUpdated=u):(a.isActive=!1,a.activeContacts.length=0)},n.id=function(a,l){return a.id<l.id?"A"+a.id+"B"+l.id:"A"+l.id+"B"+a.id}})()},function(t,i,r){var n={};t.exports=n;var o=r(3),a=r(2),l=r(7),u=r(1),c=r(11),p=r(0);(function(){n._warming=.4,n._torqueDampen=1,n._minLength=1e-6,n.create=function(h){var f=h;f.bodyA&&!f.pointA&&(f.pointA={x:0,y:0}),f.bodyB&&!f.pointB&&(f.pointB={x:0,y:0});var g=f.bodyA?a.add(f.bodyA.position,f.pointA):f.pointA,d=f.bodyB?a.add(f.bodyB.position,f.pointB):f.pointB,m=a.magnitude(a.sub(g,d));f.length=typeof f.length<"u"?f.length:m,f.id=f.id||p.nextId(),f.label=f.label||"Constraint",f.type="constraint",f.stiffness=f.stiffness||(f.length>0?1:.7),f.damping=f.damping||0,f.angularStiffness=f.angularStiffness||0,f.angleA=f.bodyA?f.bodyA.angle:f.angleA,f.angleB=f.bodyB?f.bodyB.angle:f.angleB,f.plugin={};var _={visible:!0,lineWidth:2,strokeStyle:"#ffffff",type:"line",anchors:!0};return f.length===0&&f.stiffness>.1?(_.type="pin",_.anchors=!1):f.stiffness<.9&&(_.type="spring"),f.render=p.extend(_,f.render),f},n.preSolveAll=function(h){for(var f=0;f<h.length;f+=1){var g=h[f],d=g.constraintImpulse;g.isStatic||d.x===0&&d.y===0&&d.angle===0||(g.position.x+=d.x,g.position.y+=d.y,g.angle+=d.angle)}},n.solveAll=function(h,f){for(var g=0;g<h.length;g+=1){var d=h[g],m=!d.bodyA||d.bodyA&&d.bodyA.isStatic,_=!d.bodyB||d.bodyB&&d.bodyB.isStatic;(m||_)&&n.solve(h[g],f)}for(g=0;g<h.length;g+=1)d=h[g],m=!d.bodyA||d.bodyA&&d.bodyA.isStatic,_=!d.bodyB||d.bodyB&&d.bodyB.isStatic,!m&&!_&&n.solve(h[g],f)},n.solve=function(h,f){var g=h.bodyA,d=h.bodyB,m=h.pointA,_=h.pointB;if(!(!g&&!d)){g&&!g.isStatic&&(a.rotate(m,g.angle-h.angleA,m),h.angleA=g.angle),d&&!d.isStatic&&(a.rotate(_,d.angle-h.angleB,_),h.angleB=d.angle);var T=m,E=_;if(g&&(T=a.add(g.position,m)),d&&(E=a.add(d.position,_)),!(!T||!E)){var v=a.sub(T,E),x=a.magnitude(v);x<n._minLength&&(x=n._minLength);var S=(x-h.length)/x,M=h.stiffness<1?h.stiffness*f:h.stiffness,y=a.mult(v,S*M),w=(g?g.inverseMass:0)+(d?d.inverseMass:0),b=(g?g.inverseInertia:0)+(d?d.inverseInertia:0),A=w+b,I,L,D,F,N;if(h.damping){var H=a.create();D=a.div(v,x),N=a.sub(d&&a.sub(d.position,d.positionPrev)||H,g&&a.sub(g.position,g.positionPrev)||H),F=a.dot(D,N)}g&&!g.isStatic&&(L=g.inverseMass/w,g.constraintImpulse.x-=y.x*L,g.constraintImpulse.y-=y.y*L,g.position.x-=y.x*L,g.position.y-=y.y*L,h.damping&&(g.positionPrev.x-=h.damping*D.x*F*L,g.positionPrev.y-=h.damping*D.y*F*L),I=a.cross(m,y)/A*n._torqueDampen*g.inverseInertia*(1-h.angularStiffness),g.constraintImpulse.angle-=I,g.angle-=I),d&&!d.isStatic&&(L=d.inverseMass/w,d.constraintImpulse.x+=y.x*L,d.constraintImpulse.y+=y.y*L,d.position.x+=y.x*L,d.position.y+=y.y*L,h.damping&&(d.positionPrev.x+=h.damping*D.x*F*L,d.positionPrev.y+=h.damping*D.y*F*L),I=a.cross(_,y)/A*n._torqueDampen*d.inverseInertia*(1-h.angularStiffness),d.constraintImpulse.angle+=I,d.angle+=I)}}},n.postSolveAll=function(h){for(var f=0;f<h.length;f++){var g=h[f],d=g.constraintImpulse;if(!(g.isStatic||d.x===0&&d.y===0&&d.angle===0)){l.set(g,!1);for(var m=0;m<g.parts.length;m++){var _=g.parts[m];o.translate(_.vertices,d),m>0&&(_.position.x+=d.x,_.position.y+=d.y),d.angle!==0&&(o.rotate(_.vertices,d.angle,g.position),c.rotate(_.axes,d.angle),m>0&&a.rotateAbout(_.position,d.angle,g.position,_.position)),u.update(_.bounds,_.vertices,g.velocity)}d.angle*=n._warming,d.x*=n._warming,d.y*=n._warming}}},n.pointAWorld=function(h){return{x:(h.bodyA?h.bodyA.position.x:0)+h.pointA.x,y:(h.bodyA?h.bodyA.position.y:0)+h.pointA.y}},n.pointBWorld=function(h){return{x:(h.bodyB?h.bodyB.position.x:0)+h.pointB.x,y:(h.bodyB?h.bodyB.position.y:0)+h.pointB.y}}})()},function(t,i,r){var n={};t.exports=n;var o=r(2),a=r(0);(function(){n.fromVertices=function(l){for(var u={},c=0;c<l.length;c++){var p=(c+1)%l.length,h=o.normalise({x:l[p].y-l[c].y,y:l[c].x-l[p].x}),f=h.y===0?1/0:h.x/h.y;f=f.toFixed(3).toString(),u[f]=h}return a.values(u)},n.rotate=function(l,u){if(u!==0)for(var c=Math.cos(u),p=Math.sin(u),h=0;h<l.length;h++){var f=l[h],g;g=f.x*c-f.y*p,f.y=f.x*p+f.y*c,f.x=g}}})()},function(t,i,r){var n={};t.exports=n;var o=r(3),a=r(0),l=r(6),u=r(1),c=r(2);(function(){n.rectangle=function(p,h,f,g,d){d=d||{};var m={label:"Rectangle Body",position:{x:p,y:h},vertices:o.fromPath("L 0 0 L "+f+" 0 L "+f+" "+g+" L 0 "+g)};if(d.chamfer){var _=d.chamfer;m.vertices=o.chamfer(m.vertices,_.radius,_.quality,_.qualityMin,_.qualityMax),delete d.chamfer}return l.create(a.extend({},m,d))},n.trapezoid=function(p,h,f,g,d,m){m=m||{},d*=.5;var _=(1-d*2)*f,T=f*d,E=T+_,v=E+T,x;d<.5?x="L 0 0 L "+T+" "+-g+" L "+E+" "+-g+" L "+v+" 0":x="L 0 0 L "+E+" "+-g+" L "+v+" 0";var S={label:"Trapezoid Body",position:{x:p,y:h},vertices:o.fromPath(x)};if(m.chamfer){var M=m.chamfer;S.vertices=o.chamfer(S.vertices,M.radius,M.quality,M.qualityMin,M.qualityMax),delete m.chamfer}return l.create(a.extend({},S,m))},n.circle=function(p,h,f,g,d){g=g||{};var m={label:"Circle Body",circleRadius:f};d=d||25;var _=Math.ceil(Math.max(10,Math.min(d,f)));return _%2===1&&(_+=1),n.polygon(p,h,_,f,a.extend({},m,g))},n.polygon=function(p,h,f,g,d){if(d=d||{},f<3)return n.circle(p,h,g,d);for(var m=2*Math.PI/f,_="",T=m*.5,E=0;E<f;E+=1){var v=T+E*m,x=Math.cos(v)*g,S=Math.sin(v)*g;_+="L "+x.toFixed(3)+" "+S.toFixed(3)+" "}var M={label:"Polygon Body",position:{x:p,y:h},vertices:o.fromPath(_)};if(d.chamfer){var y=d.chamfer;M.vertices=o.chamfer(M.vertices,y.radius,y.quality,y.qualityMin,y.qualityMax),delete d.chamfer}return l.create(a.extend({},M,d))},n.fromVertices=function(p,h,f,g,d,m,_,T){var E=a.getDecomp(),v,x,S,M,y,w,b,A,I,L,D;for(v=Boolean(E&&E.quickDecomp),g=g||{},S=[],d=typeof d<"u"?d:!1,m=typeof m<"u"?m:.01,_=typeof _<"u"?_:10,T=typeof T<"u"?T:.01,a.isArray(f[0])||(f=[f]),L=0;L<f.length;L+=1)if(w=f[L],M=o.isConvex(w),y=!M,y&&!v&&a.warnOnce("Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."),M||!v)M?w=o.clockwiseSort(w):w=o.hull(w),S.push({position:{x:p,y:h},vertices:w});else{var F=w.map(function(U){return[U.x,U.y]});E.makeCCW(F),m!==!1&&E.removeCollinearPoints(F,m),T!==!1&&E.removeDuplicatePoints&&E.removeDuplicatePoints(F,T);var N=E.quickDecomp(F);for(b=0;b<N.length;b++){var H=N[b],z=H.map(function(U){return{x:U[0],y:U[1]}});_>0&&o.area(z)<_||S.push({position:o.centre(z),vertices:z})}}for(b=0;b<S.length;b++)S[b]=l.create(a.extend(S[b],g));if(d){var X=5;for(b=0;b<S.length;b++){var K=S[b];for(A=b+1;A<S.length;A++){var k=S[A];if(u.overlaps(K.bounds,k.bounds)){var V=K.vertices,$=k.vertices;for(I=0;I<K.vertices.length;I++)for(D=0;D<k.vertices.length;D++){var ee=c.magnitudeSquared(c.sub(V[(I+1)%V.length],$[D])),te=c.magnitudeSquared(c.sub(V[I],$[(D+1)%$.length]));ee<X&&te<X&&(V[I].isInternal=!0,$[D].isInternal=!0)}}}}}return S.length>1?(x=l.create(a.extend({parts:S.slice(0)},g)),l.setPosition(x,{x:p,y:h}),x):S[0]}})()},function(t,i,r){var n={};t.exports=n;var o=r(0);(function(){n.create=function(a){var l={};return a||o.log("Mouse.create: element was undefined, defaulting to document.body","warn"),l.element=a||document.body,l.absolute={x:0,y:0},l.position={x:0,y:0},l.mousedownPosition={x:0,y:0},l.mouseupPosition={x:0,y:0},l.offset={x:0,y:0},l.scale={x:1,y:1},l.wheelDelta=0,l.button=-1,l.pixelRatio=parseInt(l.element.getAttribute("data-pixel-ratio"),10)||1,l.sourceEvents={mousemove:null,mousedown:null,mouseup:null,mousewheel:null},l.mousemove=function(u){var c=n._getRelativeMousePosition(u,l.element,l.pixelRatio),p=u.changedTouches;p&&(l.button=0,u.preventDefault()),l.absolute.x=c.x,l.absolute.y=c.y,l.position.x=l.absolute.x*l.scale.x+l.offset.x,l.position.y=l.absolute.y*l.scale.y+l.offset.y,l.sourceEvents.mousemove=u},l.mousedown=function(u){var c=n._getRelativeMousePosition(u,l.element,l.pixelRatio),p=u.changedTouches;p?(l.button=0,u.preventDefault()):l.button=u.button,l.absolute.x=c.x,l.absolute.y=c.y,l.position.x=l.absolute.x*l.scale.x+l.offset.x,l.position.y=l.absolute.y*l.scale.y+l.offset.y,l.mousedownPosition.x=l.position.x,l.mousedownPosition.y=l.position.y,l.sourceEvents.mousedown=u},l.mouseup=function(u){var c=n._getRelativeMousePosition(u,l.element,l.pixelRatio),p=u.changedTouches;p&&u.preventDefault(),l.button=-1,l.absolute.x=c.x,l.absolute.y=c.y,l.position.x=l.absolute.x*l.scale.x+l.offset.x,l.position.y=l.absolute.y*l.scale.y+l.offset.y,l.mouseupPosition.x=l.position.x,l.mouseupPosition.y=l.position.y,l.sourceEvents.mouseup=u},l.mousewheel=function(u){l.wheelDelta=Math.max(-1,Math.min(1,u.wheelDelta||-u.detail)),u.preventDefault()},n.setElement(l,l.element),l},n.setElement=function(a,l){a.element=l,l.addEventListener("mousemove",a.mousemove),l.addEventListener("mousedown",a.mousedown),l.addEventListener("mouseup",a.mouseup),l.addEventListener("mousewheel",a.mousewheel),l.addEventListener("DOMMouseScroll",a.mousewheel),l.addEventListener("touchmove",a.mousemove),l.addEventListener("touchstart",a.mousedown),l.addEventListener("touchend",a.mouseup)},n.clearSourceEvents=function(a){a.sourceEvents.mousemove=null,a.sourceEvents.mousedown=null,a.sourceEvents.mouseup=null,a.sourceEvents.mousewheel=null,a.wheelDelta=0},n.setOffset=function(a,l){a.offset.x=l.x,a.offset.y=l.y,a.position.x=a.absolute.x*a.scale.x+a.offset.x,a.position.y=a.absolute.y*a.scale.y+a.offset.y},n.setScale=function(a,l){a.scale.x=l.x,a.scale.y=l.y,a.position.x=a.absolute.x*a.scale.x+a.offset.x,a.position.y=a.absolute.y*a.scale.y+a.offset.y},n._getRelativeMousePosition=function(a,l,u){var c=l.getBoundingClientRect(),p=document.documentElement||document.body.parentNode||document.body,h=window.pageXOffset!==void 0?window.pageXOffset:p.scrollLeft,f=window.pageYOffset!==void 0?window.pageYOffset:p.scrollTop,g=a.changedTouches,d,m;return g?(d=g[0].pageX-c.left-h,m=g[0].pageY-c.top-f):(d=a.pageX-c.left-h,m=a.pageY-c.top-f),{x:d/(l.clientWidth/(l.width||l.clientWidth)*u),y:m/(l.clientHeight/(l.height||l.clientHeight)*u)}}})()},function(t,i,r){var n={};t.exports=n;var o=r(0),a=r(8);(function(){n.create=function(l){var u={bodies:[],pairs:null};return o.extend(u,l)},n.setBodies=function(l,u){l.bodies=u.slice(0)},n.clear=function(l){l.bodies=[]},n.collisions=function(l){var u=[],c=l.pairs,p=l.bodies,h=p.length,f=n.canCollide,g=a.collides,d,m;for(p.sort(n._compareBoundsX),d=0;d<h;d++){var _=p[d],T=_.bounds,E=_.bounds.max.x,v=_.bounds.max.y,x=_.bounds.min.y,S=_.isStatic||_.isSleeping,M=_.parts.length,y=M===1;for(m=d+1;m<h;m++){var w=p[m],b=w.bounds;if(b.min.x>E)break;if(!(v<b.min.y||x>b.max.y)&&!(S&&(w.isStatic||w.isSleeping))&&!!f(_.collisionFilter,w.collisionFilter)){var A=w.parts.length;if(y&&A===1){var I=g(_,w,c);I&&u.push(I)}else for(var L=M>1?1:0,D=A>1?1:0,F=L;F<M;F++)for(var N=_.parts[F],T=N.bounds,H=D;H<A;H++){var z=w.parts[H],b=z.bounds;if(!(T.min.x>b.max.x||T.max.x<b.min.x||T.max.y<b.min.y||T.min.y>b.max.y)){var I=g(N,z,c);I&&u.push(I)}}}}}return u},n.canCollide=function(l,u){return l.group===u.group&&l.group!==0?l.group>0:(l.mask&u.category)!==0&&(u.mask&l.category)!==0},n._compareBoundsX=function(l,u){return l.bounds.min.x-u.bounds.min.x}})()},function(t,i,r){var n={};t.exports=n;var o=r(0);(function(){n._registry={},n.register=function(a){if(n.isPlugin(a)||o.warn("Plugin.register:",n.toString(a),"does not implement all required fields."),a.name in n._registry){var l=n._registry[a.name],u=n.versionParse(a.version).number,c=n.versionParse(l.version).number;u>c?(o.warn("Plugin.register:",n.toString(l),"was upgraded to",n.toString(a)),n._registry[a.name]=a):u<c?o.warn("Plugin.register:",n.toString(l),"can not be downgraded to",n.toString(a)):a!==l&&o.warn("Plugin.register:",n.toString(a),"is already registered to different plugin object")}else n._registry[a.name]=a;return a},n.resolve=function(a){return n._registry[n.dependencyParse(a).name]},n.toString=function(a){return typeof a=="string"?a:(a.name||"anonymous")+"@"+(a.version||a.range||"0.0.0")},n.isPlugin=function(a){return a&&a.name&&a.version&&a.install},n.isUsed=function(a,l){return a.used.indexOf(l)>-1},n.isFor=function(a,l){var u=a.for&&n.dependencyParse(a.for);return!a.for||l.name===u.name&&n.versionSatisfies(l.version,u.range)},n.use=function(a,l){if(a.uses=(a.uses||[]).concat(l||[]),a.uses.length===0){o.warn("Plugin.use:",n.toString(a),"does not specify any dependencies to install.");return}for(var u=n.dependencies(a),c=o.topologicalSort(u),p=[],h=0;h<c.length;h+=1)if(c[h]!==a.name){var f=n.resolve(c[h]);if(!f){p.push("❌ "+c[h]);continue}n.isUsed(a,f.name)||(n.isFor(f,a)||(o.warn("Plugin.use:",n.toString(f),"is for",f.for,"but installed on",n.toString(a)+"."),f._warned=!0),f.install?f.install(a):(o.warn("Plugin.use:",n.toString(f),"does not specify an install function."),f._warned=!0),f._warned?(p.push("🔶 "+n.toString(f)),delete f._warned):p.push("✅ "+n.toString(f)),a.used.push(f.name))}p.length>0&&o.info(p.join("  "))},n.dependencies=function(a,l){var u=n.dependencyParse(a),c=u.name;if(l=l||{},!(c in l)){a=n.resolve(a)||a,l[c]=o.map(a.uses||[],function(h){n.isPlugin(h)&&n.register(h);var f=n.dependencyParse(h),g=n.resolve(h);return g&&!n.versionSatisfies(g.version,f.range)?(o.warn("Plugin.dependencies:",n.toString(g),"does not satisfy",n.toString(f),"used by",n.toString(u)+"."),g._warned=!0,a._warned=!0):g||(o.warn("Plugin.dependencies:",n.toString(h),"used by",n.toString(u),"could not be resolved."),a._warned=!0),f.name});for(var p=0;p<l[c].length;p+=1)n.dependencies(l[c][p],l);return l}},n.dependencyParse=function(a){if(o.isString(a)){var l=/^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;return l.test(a)||o.warn("Plugin.dependencyParse:",a,"is not a valid dependency string."),{name:a.split("@")[0],range:a.split("@")[1]||"*"}}return{name:a.name,range:a.range||a.version}},n.versionParse=function(a){var l=/^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;l.test(a)||o.warn("Plugin.versionParse:",a,"is not a valid version or range.");var u=l.exec(a),c=Number(u[4]),p=Number(u[5]),h=Number(u[6]);return{isRange:Boolean(u[1]||u[2]),version:u[3],range:a,operator:u[1]||u[2]||"",major:c,minor:p,patch:h,parts:[c,p,h],prerelease:u[7],number:c*1e8+p*1e4+h}},n.versionSatisfies=function(a,l){l=l||"*";var u=n.versionParse(l),c=n.versionParse(a);if(u.isRange){if(u.operator==="*"||a==="*")return!0;if(u.operator===">")return c.number>u.number;if(u.operator===">=")return c.number>=u.number;if(u.operator==="~")return c.major===u.major&&c.minor===u.minor&&c.patch>=u.patch;if(u.operator==="^")return u.major>0?c.major===u.major&&c.number>=u.number:u.minor>0?c.minor===u.minor&&c.patch>=u.patch:c.patch===u.patch}return a===l||a==="*"}})()},function(t,i,r){var n={};t.exports=n;var o=r(0),a=r(5),l=r(1),u=r(4),c=r(2),p=r(13);(function(){var h,f;typeof window<"u"&&(h=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(v){window.setTimeout(function(){v(o.now())},1e3/60)},f=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame),n._goodFps=30,n._goodDelta=1e3/60,n.create=function(v){var x={controller:n,engine:null,element:null,canvas:null,mouse:null,frameRequestId:null,timing:{historySize:60,delta:0,deltaHistory:[],lastTime:0,lastTimestamp:0,lastElapsed:0,timestampElapsed:0,timestampElapsedHistory:[],engineDeltaHistory:[],engineElapsedHistory:[],elapsedHistory:[]},options:{width:800,height:600,pixelRatio:1,background:"#14151f",wireframeBackground:"#14151f",hasBounds:!!v.bounds,enabled:!0,wireframes:!0,showSleeping:!0,showDebug:!1,showStats:!1,showPerformance:!1,showBounds:!1,showVelocity:!1,showCollisions:!1,showSeparations:!1,showAxes:!1,showPositions:!1,showAngleIndicator:!1,showIds:!1,showVertexNumbers:!1,showConvexHulls:!1,showInternalEdges:!1,showMousePosition:!1}},S=o.extend(x,v);return S.canvas&&(S.canvas.width=S.options.width||S.canvas.width,S.canvas.height=S.options.height||S.canvas.height),S.mouse=v.mouse,S.engine=v.engine,S.canvas=S.canvas||m(S.options.width,S.options.height),S.context=S.canvas.getContext("2d"),S.textures={},S.bounds=S.bounds||{min:{x:0,y:0},max:{x:S.canvas.width,y:S.canvas.height}},S.options.showBroadphase=!1,S.options.pixelRatio!==1&&n.setPixelRatio(S,S.options.pixelRatio),o.isElement(S.element)?S.element.appendChild(S.canvas):S.canvas.parentNode||o.log("Render.create: options.element was undefined, render.canvas was created but not appended","warn"),S},n.run=function(v){(function x(S){v.frameRequestId=h(x),g(v,S),n.world(v,S),(v.options.showStats||v.options.showDebug)&&n.stats(v,v.context,S),(v.options.showPerformance||v.options.showDebug)&&n.performance(v,v.context,S)})()},n.stop=function(v){f(v.frameRequestId)},n.setPixelRatio=function(v,x){var S=v.options,M=v.canvas;x==="auto"&&(x=_(M)),S.pixelRatio=x,M.setAttribute("data-pixel-ratio",x),M.width=S.width*x,M.height=S.height*x,M.style.width=S.width+"px",M.style.height=S.height+"px"},n.lookAt=function(v,x,S,M){M=typeof M<"u"?M:!0,x=o.isArray(x)?x:[x],S=S||{x:0,y:0};for(var y={min:{x:1/0,y:1/0},max:{x:-1/0,y:-1/0}},w=0;w<x.length;w+=1){var b=x[w],A=b.bounds?b.bounds.min:b.min||b.position||b,I=b.bounds?b.bounds.max:b.max||b.position||b;A&&I&&(A.x<y.min.x&&(y.min.x=A.x),I.x>y.max.x&&(y.max.x=I.x),A.y<y.min.y&&(y.min.y=A.y),I.y>y.max.y&&(y.max.y=I.y))}var L=y.max.x-y.min.x+2*S.x,D=y.max.y-y.min.y+2*S.y,F=v.canvas.height,N=v.canvas.width,H=N/F,z=L/D,X=1,K=1;z>H?K=z/H:X=H/z,v.options.hasBounds=!0,v.bounds.min.x=y.min.x,v.bounds.max.x=y.min.x+L*X,v.bounds.min.y=y.min.y,v.bounds.max.y=y.min.y+D*K,M&&(v.bounds.min.x+=L*.5-L*X*.5,v.bounds.max.x+=L*.5-L*X*.5,v.bounds.min.y+=D*.5-D*K*.5,v.bounds.max.y+=D*.5-D*K*.5),v.bounds.min.x-=S.x,v.bounds.max.x-=S.x,v.bounds.min.y-=S.y,v.bounds.max.y-=S.y,v.mouse&&(p.setScale(v.mouse,{x:(v.bounds.max.x-v.bounds.min.x)/v.canvas.width,y:(v.bounds.max.y-v.bounds.min.y)/v.canvas.height}),p.setOffset(v.mouse,v.bounds.min))},n.startViewTransform=function(v){var x=v.bounds.max.x-v.bounds.min.x,S=v.bounds.max.y-v.bounds.min.y,M=x/v.options.width,y=S/v.options.height;v.context.setTransform(v.options.pixelRatio/M,0,0,v.options.pixelRatio/y,0,0),v.context.translate(-v.bounds.min.x,-v.bounds.min.y)},n.endViewTransform=function(v){v.context.setTransform(v.options.pixelRatio,0,0,v.options.pixelRatio,0,0)},n.world=function(v,x){var S=o.now(),M=v.engine,y=M.world,w=v.canvas,b=v.context,A=v.options,I=v.timing,L=a.allBodies(y),D=a.allConstraints(y),F=A.wireframes?A.wireframeBackground:A.background,N=[],H=[],z,X={timestamp:M.timing.timestamp};if(u.trigger(v,"beforeRender",X),v.currentBackground!==F&&E(v,F),b.globalCompositeOperation="source-in",b.fillStyle="transparent",b.fillRect(0,0,w.width,w.height),b.globalCompositeOperation="source-over",A.hasBounds){for(z=0;z<L.length;z++){var K=L[z];l.overlaps(K.bounds,v.bounds)&&N.push(K)}for(z=0;z<D.length;z++){var k=D[z],V=k.bodyA,$=k.bodyB,ee=k.pointA,te=k.pointB;V&&(ee=c.add(V.position,k.pointA)),$&&(te=c.add($.position,k.pointB)),!(!ee||!te)&&(l.contains(v.bounds,ee)||l.contains(v.bounds,te))&&H.push(k)}n.startViewTransform(v),v.mouse&&(p.setScale(v.mouse,{x:(v.bounds.max.x-v.bounds.min.x)/v.options.width,y:(v.bounds.max.y-v.bounds.min.y)/v.options.height}),p.setOffset(v.mouse,v.bounds.min))}else H=D,N=L,v.options.pixelRatio!==1&&v.context.setTransform(v.options.pixelRatio,0,0,v.options.pixelRatio,0,0);!A.wireframes||M.enableSleeping&&A.showSleeping?n.bodies(v,N,b):(A.showConvexHulls&&n.bodyConvexHulls(v,N,b),n.bodyWireframes(v,N,b)),A.showBounds&&n.bodyBounds(v,N,b),(A.showAxes||A.showAngleIndicator)&&n.bodyAxes(v,N,b),A.showPositions&&n.bodyPositions(v,N,b),A.showVelocity&&n.bodyVelocity(v,N,b),A.showIds&&n.bodyIds(v,N,b),A.showSeparations&&n.separations(v,M.pairs.list,b),A.showCollisions&&n.collisions(v,M.pairs.list,b),A.showVertexNumbers&&n.vertexNumbers(v,N,b),A.showMousePosition&&n.mousePosition(v,v.mouse,b),n.constraints(H,b),A.hasBounds&&n.endViewTransform(v),u.trigger(v,"afterRender",X),I.lastElapsed=o.now()-S},n.stats=function(v,x,S){for(var M=v.engine,y=M.world,w=a.allBodies(y),b=0,A=55,I=44,L=0,D=0,F=0;F<w.length;F+=1)b+=w[F].parts.length;var N={Part:b,Body:w.length,Cons:a.allConstraints(y).length,Comp:a.allComposites(y).length,Pair:M.pairs.list.length};x.fillStyle="#0e0f19",x.fillRect(L,D,A*5.5,I),x.font="12px Arial",x.textBaseline="top",x.textAlign="right";for(var H in N){var z=N[H];x.fillStyle="#aaa",x.fillText(H,L+A,D+8),x.fillStyle="#eee",x.fillText(z,L+A,D+26),L+=A}},n.performance=function(v,x){var S=v.engine,M=v.timing,y=M.deltaHistory,w=M.elapsedHistory,b=M.timestampElapsedHistory,A=M.engineDeltaHistory,I=M.engineElapsedHistory,L=S.timing.lastDelta,D=d(y),F=d(w),N=d(A),H=d(I),z=d(b),X=z/D||0,K=1e3/D||0,k=4,V=12,$=60,ee=34,te=10,U=69;x.fillStyle="#0e0f19",x.fillRect(0,50,V*4+$*5+22,ee),n.status(x,te,U,$,k,y.length,Math.round(K)+" fps",K/n._goodFps,function(Me){return y[Me]/D-1}),n.status(x,te+V+$,U,$,k,A.length,L.toFixed(2)+" dt",n._goodDelta/L,function(Me){return A[Me]/N-1}),n.status(x,te+(V+$)*2,U,$,k,I.length,H.toFixed(2)+" ut",1-H/n._goodFps,function(Me){return I[Me]/H-1}),n.status(x,te+(V+$)*3,U,$,k,w.length,F.toFixed(2)+" rt",1-F/n._goodFps,function(Me){return w[Me]/F-1}),n.status(x,te+(V+$)*4,U,$,k,b.length,X.toFixed(2)+" x",X*X*X,function(Me){return(b[Me]/y[Me]/X||0)-1})},n.status=function(v,x,S,M,y,w,b,A,I){v.strokeStyle="#888",v.fillStyle="#444",v.lineWidth=1,v.fillRect(x,S+7,M,1),v.beginPath(),v.moveTo(x,S+7-y*o.clamp(.4*I(0),-2,2));for(var L=0;L<M;L+=1)v.lineTo(x+L,S+7-(L<w?y*o.clamp(.4*I(L),-2,2):0));v.stroke(),v.fillStyle="hsl("+o.clamp(25+95*A,0,120)+",100%,60%)",v.fillRect(x,S-7,4,4),v.font="12px Arial",v.textBaseline="middle",v.textAlign="right",v.fillStyle="#eee",v.fillText(b,x+M,S-5)},n.constraints=function(v,x){for(var S=x,M=0;M<v.length;M++){var y=v[M];if(!(!y.render.visible||!y.pointA||!y.pointB)){var w=y.bodyA,b=y.bodyB,A,I;if(w?A=c.add(w.position,y.pointA):A=y.pointA,y.render.type==="pin")S.beginPath(),S.arc(A.x,A.y,3,0,2*Math.PI),S.closePath();else{if(b?I=c.add(b.position,y.pointB):I=y.pointB,S.beginPath(),S.moveTo(A.x,A.y),y.render.type==="spring")for(var L=c.sub(I,A),D=c.perp(c.normalise(L)),F=Math.ceil(o.clamp(y.length/5,12,20)),N,H=1;H<F;H+=1)N=H%2===0?1:-1,S.lineTo(A.x+L.x*(H/F)+D.x*N*4,A.y+L.y*(H/F)+D.y*N*4);S.lineTo(I.x,I.y)}y.render.lineWidth&&(S.lineWidth=y.render.lineWidth,S.strokeStyle=y.render.strokeStyle,S.stroke()),y.render.anchors&&(S.fillStyle=y.render.strokeStyle,S.beginPath(),S.arc(A.x,A.y,3,0,2*Math.PI),S.arc(I.x,I.y,3,0,2*Math.PI),S.closePath(),S.fill())}}},n.bodies=function(v,x,S){var M=S;v.engine;var y=v.options,w=y.showInternalEdges||!y.wireframes,b,A,I,L;for(I=0;I<x.length;I++)if(b=x[I],!!b.render.visible){for(L=b.parts.length>1?1:0;L<b.parts.length;L++)if(A=b.parts[L],!!A.render.visible){if(y.showSleeping&&b.isSleeping?M.globalAlpha=.5*A.render.opacity:A.render.opacity!==1&&(M.globalAlpha=A.render.opacity),A.render.sprite&&A.render.sprite.texture&&!y.wireframes){var D=A.render.sprite,F=T(v,D.texture);M.translate(A.position.x,A.position.y),M.rotate(A.angle),M.drawImage(F,F.width*-D.xOffset*D.xScale,F.height*-D.yOffset*D.yScale,F.width*D.xScale,F.height*D.yScale),M.rotate(-A.angle),M.translate(-A.position.x,-A.position.y)}else{if(A.circleRadius)M.beginPath(),M.arc(A.position.x,A.position.y,A.circleRadius,0,2*Math.PI);else{M.beginPath(),M.moveTo(A.vertices[0].x,A.vertices[0].y);for(var N=1;N<A.vertices.length;N++)!A.vertices[N-1].isInternal||w?M.lineTo(A.vertices[N].x,A.vertices[N].y):M.moveTo(A.vertices[N].x,A.vertices[N].y),A.vertices[N].isInternal&&!w&&M.moveTo(A.vertices[(N+1)%A.vertices.length].x,A.vertices[(N+1)%A.vertices.length].y);M.lineTo(A.vertices[0].x,A.vertices[0].y),M.closePath()}y.wireframes?(M.lineWidth=1,M.strokeStyle="#bbb",M.stroke()):(M.fillStyle=A.render.fillStyle,A.render.lineWidth&&(M.lineWidth=A.render.lineWidth,M.strokeStyle=A.render.strokeStyle,M.stroke()),M.fill())}M.globalAlpha=1}}},n.bodyWireframes=function(v,x,S){var M=S,y=v.options.showInternalEdges,w,b,A,I,L;for(M.beginPath(),A=0;A<x.length;A++)if(w=x[A],!!w.render.visible)for(L=w.parts.length>1?1:0;L<w.parts.length;L++){for(b=w.parts[L],M.moveTo(b.vertices[0].x,b.vertices[0].y),I=1;I<b.vertices.length;I++)!b.vertices[I-1].isInternal||y?M.lineTo(b.vertices[I].x,b.vertices[I].y):M.moveTo(b.vertices[I].x,b.vertices[I].y),b.vertices[I].isInternal&&!y&&M.moveTo(b.vertices[(I+1)%b.vertices.length].x,b.vertices[(I+1)%b.vertices.length].y);M.lineTo(b.vertices[0].x,b.vertices[0].y)}M.lineWidth=1,M.strokeStyle="#bbb",M.stroke()},n.bodyConvexHulls=function(v,x,S){var M=S,y,w,b;for(M.beginPath(),w=0;w<x.length;w++)if(y=x[w],!(!y.render.visible||y.parts.length===1)){for(M.moveTo(y.vertices[0].x,y.vertices[0].y),b=1;b<y.vertices.length;b++)M.lineTo(y.vertices[b].x,y.vertices[b].y);M.lineTo(y.vertices[0].x,y.vertices[0].y)}M.lineWidth=1,M.strokeStyle="rgba(255,255,255,0.2)",M.stroke()},n.vertexNumbers=function(v,x,S){var M=S,y,w,b;for(y=0;y<x.length;y++){var A=x[y].parts;for(b=A.length>1?1:0;b<A.length;b++){var I=A[b];for(w=0;w<I.vertices.length;w++)M.fillStyle="rgba(255,255,255,0.2)",M.fillText(y+"_"+w,I.position.x+(I.vertices[w].x-I.position.x)*.8,I.position.y+(I.vertices[w].y-I.position.y)*.8)}}},n.mousePosition=function(v,x,S){var M=S;M.fillStyle="rgba(255,255,255,0.8)",M.fillText(x.position.x+"  "+x.position.y,x.position.x+5,x.position.y-5)},n.bodyBounds=function(v,x,S){var M=S;v.engine;var y=v.options;M.beginPath();for(var w=0;w<x.length;w++){var b=x[w];if(b.render.visible)for(var A=x[w].parts,I=A.length>1?1:0;I<A.length;I++){var L=A[I];M.rect(L.bounds.min.x,L.bounds.min.y,L.bounds.max.x-L.bounds.min.x,L.bounds.max.y-L.bounds.min.y)}}y.wireframes?M.strokeStyle="rgba(255,255,255,0.08)":M.strokeStyle="rgba(0,0,0,0.1)",M.lineWidth=1,M.stroke()},n.bodyAxes=function(v,x,S){var M=S;v.engine;var y=v.options,w,b,A,I;for(M.beginPath(),b=0;b<x.length;b++){var L=x[b],D=L.parts;if(!!L.render.visible)if(y.showAxes)for(A=D.length>1?1:0;A<D.length;A++)for(w=D[A],I=0;I<w.axes.length;I++){var F=w.axes[I];M.moveTo(w.position.x,w.position.y),M.lineTo(w.position.x+F.x*20,w.position.y+F.y*20)}else for(A=D.length>1?1:0;A<D.length;A++)for(w=D[A],I=0;I<w.axes.length;I++)M.moveTo(w.position.x,w.position.y),M.lineTo((w.vertices[0].x+w.vertices[w.vertices.length-1].x)/2,(w.vertices[0].y+w.vertices[w.vertices.length-1].y)/2)}y.wireframes?(M.strokeStyle="indianred",M.lineWidth=1):(M.strokeStyle="rgba(255, 255, 255, 0.4)",M.globalCompositeOperation="overlay",M.lineWidth=2),M.stroke(),M.globalCompositeOperation="source-over"},n.bodyPositions=function(v,x,S){var M=S;v.engine;var y=v.options,w,b,A,I;for(M.beginPath(),A=0;A<x.length;A++)if(w=x[A],!!w.render.visible)for(I=0;I<w.parts.length;I++)b=w.parts[I],M.arc(b.position.x,b.position.y,3,0,2*Math.PI,!1),M.closePath();for(y.wireframes?M.fillStyle="indianred":M.fillStyle="rgba(0,0,0,0.5)",M.fill(),M.beginPath(),A=0;A<x.length;A++)w=x[A],w.render.visible&&(M.arc(w.positionPrev.x,w.positionPrev.y,2,0,2*Math.PI,!1),M.closePath());M.fillStyle="rgba(255,165,0,0.8)",M.fill()},n.bodyVelocity=function(v,x,S){var M=S;M.beginPath();for(var y=0;y<x.length;y++){var w=x[y];!w.render.visible||(M.moveTo(w.position.x,w.position.y),M.lineTo(w.position.x+(w.position.x-w.positionPrev.x)*2,w.position.y+(w.position.y-w.positionPrev.y)*2))}M.lineWidth=3,M.strokeStyle="cornflowerblue",M.stroke()},n.bodyIds=function(v,x,S){var M=S,y,w;for(y=0;y<x.length;y++)if(!!x[y].render.visible){var b=x[y].parts;for(w=b.length>1?1:0;w<b.length;w++){var A=b[w];M.font="12px Arial",M.fillStyle="rgba(255,255,255,0.5)",M.fillText(A.id,A.position.x+10,A.position.y-10)}}},n.collisions=function(v,x,S){var M=S,y=v.options,w,b,A,I;for(M.beginPath(),A=0;A<x.length;A++)if(w=x[A],!!w.isActive)for(b=w.collision,I=0;I<w.activeContacts.length;I++){var L=w.activeContacts[I],D=L.vertex;M.rect(D.x-1.5,D.y-1.5,3.5,3.5)}for(y.wireframes?M.fillStyle="rgba(255,255,255,0.7)":M.fillStyle="orange",M.fill(),M.beginPath(),A=0;A<x.length;A++)if(w=x[A],!!w.isActive&&(b=w.collision,w.activeContacts.length>0)){var F=w.activeContacts[0].vertex.x,N=w.activeContacts[0].vertex.y;w.activeContacts.length===2&&(F=(w.activeContacts[0].vertex.x+w.activeContacts[1].vertex.x)/2,N=(w.activeContacts[0].vertex.y+w.activeContacts[1].vertex.y)/2),b.bodyB===b.supports[0].body||b.bodyA.isStatic===!0?M.moveTo(F-b.normal.x*8,N-b.normal.y*8):M.moveTo(F+b.normal.x*8,N+b.normal.y*8),M.lineTo(F,N)}y.wireframes?M.strokeStyle="rgba(255,165,0,0.7)":M.strokeStyle="orange",M.lineWidth=1,M.stroke()},n.separations=function(v,x,S){var M=S,y=v.options,w,b,A,I,L;for(M.beginPath(),L=0;L<x.length;L++)if(w=x[L],!!w.isActive){b=w.collision,A=b.bodyA,I=b.bodyB;var D=1;!I.isStatic&&!A.isStatic&&(D=.5),I.isStatic&&(D=0),M.moveTo(I.position.x,I.position.y),M.lineTo(I.position.x-b.penetration.x*D,I.position.y-b.penetration.y*D),D=1,!I.isStatic&&!A.isStatic&&(D=.5),A.isStatic&&(D=0),M.moveTo(A.position.x,A.position.y),M.lineTo(A.position.x+b.penetration.x*D,A.position.y+b.penetration.y*D)}y.wireframes?M.strokeStyle="rgba(255,165,0,0.5)":M.strokeStyle="orange",M.stroke()},n.inspector=function(v,x){v.engine;var S=v.selected,M=v.render,y=M.options,w;if(y.hasBounds){var b=M.bounds.max.x-M.bounds.min.x,A=M.bounds.max.y-M.bounds.min.y,I=b/M.options.width,L=A/M.options.height;x.scale(1/I,1/L),x.translate(-M.bounds.min.x,-M.bounds.min.y)}for(var D=0;D<S.length;D++){var F=S[D].data;switch(x.translate(.5,.5),x.lineWidth=1,x.strokeStyle="rgba(255,165,0,0.9)",x.setLineDash([1,2]),F.type){case"body":w=F.bounds,x.beginPath(),x.rect(Math.floor(w.min.x-3),Math.floor(w.min.y-3),Math.floor(w.max.x-w.min.x+6),Math.floor(w.max.y-w.min.y+6)),x.closePath(),x.stroke();break;case"constraint":var N=F.pointA;F.bodyA&&(N=F.pointB),x.beginPath(),x.arc(N.x,N.y,10,0,2*Math.PI),x.closePath(),x.stroke();break}x.setLineDash([]),x.translate(-.5,-.5)}v.selectStart!==null&&(x.translate(.5,.5),x.lineWidth=1,x.strokeStyle="rgba(255,165,0,0.6)",x.fillStyle="rgba(255,165,0,0.1)",w=v.selectBounds,x.beginPath(),x.rect(Math.floor(w.min.x),Math.floor(w.min.y),Math.floor(w.max.x-w.min.x),Math.floor(w.max.y-w.min.y)),x.closePath(),x.stroke(),x.fill(),x.translate(-.5,-.5)),y.hasBounds&&x.setTransform(1,0,0,1,0,0)};var g=function(v,x){var S=v.engine,M=v.timing,y=M.historySize,w=S.timing.timestamp;M.delta=x-M.lastTime||n._goodDelta,M.lastTime=x,M.timestampElapsed=w-M.lastTimestamp||0,M.lastTimestamp=w,M.deltaHistory.unshift(M.delta),M.deltaHistory.length=Math.min(M.deltaHistory.length,y),M.engineDeltaHistory.unshift(S.timing.lastDelta),M.engineDeltaHistory.length=Math.min(M.engineDeltaHistory.length,y),M.timestampElapsedHistory.unshift(M.timestampElapsed),M.timestampElapsedHistory.length=Math.min(M.timestampElapsedHistory.length,y),M.engineElapsedHistory.unshift(S.timing.lastElapsed),M.engineElapsedHistory.length=Math.min(M.engineElapsedHistory.length,y),M.elapsedHistory.unshift(M.lastElapsed),M.elapsedHistory.length=Math.min(M.elapsedHistory.length,y)},d=function(v){for(var x=0,S=0;S<v.length;S+=1)x+=v[S];return x/v.length||0},m=function(v,x){var S=document.createElement("canvas");return S.width=v,S.height=x,S.oncontextmenu=function(){return!1},S.onselectstart=function(){return!1},S},_=function(v){var x=v.getContext("2d"),S=window.devicePixelRatio||1,M=x.webkitBackingStorePixelRatio||x.mozBackingStorePixelRatio||x.msBackingStorePixelRatio||x.oBackingStorePixelRatio||x.backingStorePixelRatio||1;return S/M},T=function(v,x){var S=v.textures[x];return S||(S=v.textures[x]=new Image,S.src=x,S)},E=function(v,x){var S=x;/(jpg|gif|png)$/.test(x)&&(S="url("+x+")"),v.canvas.style.background=S,v.canvas.style.backgroundSize="contain",v.currentBackground=x}})()},function(t,i){var r={};t.exports=r,function(){r.create=function(n){return{vertex:n,normalImpulse:0,tangentImpulse:0}}}()},function(t,i,r){var n={};t.exports=n;var o=r(7),a=r(19),l=r(14),u=r(20),c=r(4),p=r(5),h=r(10),f=r(0),g=r(6);(function(){n.create=function(d){d=d||{};var m={positionIterations:6,velocityIterations:4,constraintIterations:2,enableSleeping:!1,events:[],plugin:{},gravity:{x:0,y:1,scale:.001},timing:{timestamp:0,timeScale:1,lastDelta:0,lastElapsed:0}},_=f.extend(m,d);return _.world=d.world||p.create({label:"World"}),_.pairs=d.pairs||u.create(),_.detector=d.detector||l.create(),_.grid={buckets:[]},_.world.gravity=_.gravity,_.broadphase=_.grid,_.metrics={},_},n.update=function(d,m,_){var T=f.now();m=m||1e3/60,_=_||1;var E=d.world,v=d.detector,x=d.pairs,S=d.timing,M=S.timestamp,y;S.timestamp+=m*S.timeScale,S.lastDelta=m*S.timeScale;var w={timestamp:S.timestamp};c.trigger(d,"beforeUpdate",w);var b=p.allBodies(E),A=p.allConstraints(E);for(E.isModified&&l.setBodies(v,b),E.isModified&&p.setModified(E,!1,!1,!0),d.enableSleeping&&o.update(b,S.timeScale),n._bodiesApplyGravity(b,d.gravity),n._bodiesUpdate(b,m,S.timeScale,_,E.bounds),h.preSolveAll(b),y=0;y<d.constraintIterations;y++)h.solveAll(A,S.timeScale);h.postSolveAll(b),v.pairs=d.pairs;var I=l.collisions(v);for(u.update(x,I,M),d.enableSleeping&&o.afterCollisions(x.list,S.timeScale),x.collisionStart.length>0&&c.trigger(d,"collisionStart",{pairs:x.collisionStart}),a.preSolvePosition(x.list),y=0;y<d.positionIterations;y++)a.solvePosition(x.list,S.timeScale);for(a.postSolvePosition(b),h.preSolveAll(b),y=0;y<d.constraintIterations;y++)h.solveAll(A,S.timeScale);for(h.postSolveAll(b),a.preSolveVelocity(x.list),y=0;y<d.velocityIterations;y++)a.solveVelocity(x.list,S.timeScale);return x.collisionActive.length>0&&c.trigger(d,"collisionActive",{pairs:x.collisionActive}),x.collisionEnd.length>0&&c.trigger(d,"collisionEnd",{pairs:x.collisionEnd}),n._bodiesClearForces(b),c.trigger(d,"afterUpdate",w),d.timing.lastElapsed=f.now()-T,d},n.merge=function(d,m){if(f.extend(d,m),m.world){d.world=m.world,n.clear(d);for(var _=p.allBodies(d.world),T=0;T<_.length;T++){var E=_[T];o.set(E,!1),E.id=f.nextId()}}},n.clear=function(d){u.clear(d.pairs),l.clear(d.detector)},n._bodiesClearForces=function(d){for(var m=0;m<d.length;m++){var _=d[m];_.force.x=0,_.force.y=0,_.torque=0}},n._bodiesApplyGravity=function(d,m){var _=typeof m.scale<"u"?m.scale:.001;if(!(m.x===0&&m.y===0||_===0))for(var T=0;T<d.length;T++){var E=d[T];E.isStatic||E.isSleeping||(E.force.y+=E.mass*m.y*_,E.force.x+=E.mass*m.x*_)}},n._bodiesUpdate=function(d,m,_,T,E){for(var v=0;v<d.length;v++){var x=d[v];x.isStatic||x.isSleeping||g.update(x,m,_,T)}}})()},function(t,i,r){var n={};t.exports=n;var o=r(3),a=r(1);(function(){n._restingThresh=4,n._restingThreshTangent=6,n._positionDampen=.9,n._positionWarming=.8,n._frictionNormalMultiplier=5,n.preSolvePosition=function(l){var u,c,p,h=l.length;for(u=0;u<h;u++)c=l[u],c.isActive&&(p=c.activeContacts.length,c.collision.parentA.totalContacts+=p,c.collision.parentB.totalContacts+=p)},n.solvePosition=function(l,u){var c,p,h,f,g,d,m,_,T=n._positionDampen,E=l.length;for(c=0;c<E;c++)p=l[c],!(!p.isActive||p.isSensor)&&(h=p.collision,f=h.parentA,g=h.parentB,d=h.normal,p.separation=d.x*(g.positionImpulse.x+h.penetration.x-f.positionImpulse.x)+d.y*(g.positionImpulse.y+h.penetration.y-f.positionImpulse.y));for(c=0;c<E;c++)p=l[c],!(!p.isActive||p.isSensor)&&(h=p.collision,f=h.parentA,g=h.parentB,d=h.normal,_=(p.separation-p.slop)*u,(f.isStatic||g.isStatic)&&(_*=2),f.isStatic||f.isSleeping||(m=T/f.totalContacts,f.positionImpulse.x+=d.x*_*m,f.positionImpulse.y+=d.y*_*m),g.isStatic||g.isSleeping||(m=T/g.totalContacts,g.positionImpulse.x-=d.x*_*m,g.positionImpulse.y-=d.y*_*m))},n.postSolvePosition=function(l){for(var u=n._positionWarming,c=l.length,p=o.translate,h=a.update,f=0;f<c;f++){var g=l[f],d=g.positionImpulse,m=d.x,_=d.y,T=g.velocity;if(g.totalContacts=0,m!==0||_!==0){for(var E=0;E<g.parts.length;E++){var v=g.parts[E];p(v.vertices,d),h(v.bounds,v.vertices,T),v.position.x+=m,v.position.y+=_}g.positionPrev.x+=m,g.positionPrev.y+=_,m*T.x+_*T.y<0?(d.x=0,d.y=0):(d.x*=u,d.y*=u)}}},n.preSolveVelocity=function(l){var u=l.length,c,p;for(c=0;c<u;c++){var h=l[c];if(!(!h.isActive||h.isSensor)){var f=h.activeContacts,g=f.length,d=h.collision,m=d.parentA,_=d.parentB,T=d.normal,E=d.tangent;for(p=0;p<g;p++){var v=f[p],x=v.vertex,S=v.normalImpulse,M=v.tangentImpulse;if(S!==0||M!==0){var y=T.x*S+E.x*M,w=T.y*S+E.y*M;m.isStatic||m.isSleeping||(m.positionPrev.x+=y*m.inverseMass,m.positionPrev.y+=w*m.inverseMass,m.anglePrev+=m.inverseInertia*((x.x-m.position.x)*w-(x.y-m.position.y)*y)),_.isStatic||_.isSleeping||(_.positionPrev.x-=y*_.inverseMass,_.positionPrev.y-=w*_.inverseMass,_.anglePrev-=_.inverseInertia*((x.x-_.position.x)*w-(x.y-_.position.y)*y))}}}}},n.solveVelocity=function(l,u){var c=u*u,p=n._restingThresh*c,h=n._frictionNormalMultiplier,f=n._restingThreshTangent*c,g=Number.MAX_VALUE,d=l.length,m,_,T,E;for(T=0;T<d;T++){var v=l[T];if(!(!v.isActive||v.isSensor)){var x=v.collision,S=x.parentA,M=x.parentB,y=S.velocity,w=M.velocity,b=x.normal.x,A=x.normal.y,I=x.tangent.x,L=x.tangent.y,D=v.activeContacts,F=D.length,N=1/F,H=S.inverseMass+M.inverseMass,z=v.friction*v.frictionStatic*h*c;for(y.x=S.position.x-S.positionPrev.x,y.y=S.position.y-S.positionPrev.y,w.x=M.position.x-M.positionPrev.x,w.y=M.position.y-M.positionPrev.y,S.angularVelocity=S.angle-S.anglePrev,M.angularVelocity=M.angle-M.anglePrev,E=0;E<F;E++){var X=D[E],K=X.vertex,k=K.x-S.position.x,V=K.y-S.position.y,$=K.x-M.position.x,ee=K.y-M.position.y,te=y.x-V*S.angularVelocity,U=y.y+k*S.angularVelocity,Me=w.x-ee*M.angularVelocity,fe=w.y+$*M.angularVelocity,ye=te-Me,ue=U-fe,Re=b*ye+A*ue,ve=I*ye+L*ue,xe=v.separation+Re,nt=Math.min(xe,1);nt=xe<0?0:nt;var lt=nt*z;ve>lt||-ve>lt?(_=ve>0?ve:-ve,m=v.friction*(ve>0?1:-1)*c,m<-_?m=-_:m>_&&(m=_)):(m=ve,_=g);var ct=k*A-V*b,bt=$*A-ee*b,Ye=N/(H+S.inverseInertia*ct*ct+M.inverseInertia*bt*bt),Ie=(1+v.restitution)*Re*Ye;if(m*=Ye,Re*Re>p&&Re<0)X.normalImpulse=0;else{var li=X.normalImpulse;X.normalImpulse+=Ie,X.normalImpulse=Math.min(X.normalImpulse,0),Ie=X.normalImpulse-li}if(ve*ve>f)X.tangentImpulse=0;else{var Ut=X.tangentImpulse;X.tangentImpulse+=m,X.tangentImpulse<-_&&(X.tangentImpulse=-_),X.tangentImpulse>_&&(X.tangentImpulse=_),m=X.tangentImpulse-Ut}var P=b*Ie+I*m,C=A*Ie+L*m;S.isStatic||S.isSleeping||(S.positionPrev.x+=P*S.inverseMass,S.positionPrev.y+=C*S.inverseMass,S.anglePrev+=(k*C-V*P)*S.inverseInertia),M.isStatic||M.isSleeping||(M.positionPrev.x-=P*M.inverseMass,M.positionPrev.y-=C*M.inverseMass,M.anglePrev-=($*C-ee*P)*M.inverseInertia)}}}}})()},function(t,i,r){var n={};t.exports=n;var o=r(9),a=r(0);(function(){n.create=function(l){return a.extend({table:{},list:[],collisionStart:[],collisionActive:[],collisionEnd:[]},l)},n.update=function(l,u,c){var p=l.list,h=p.length,f=l.table,g=u.length,d=l.collisionStart,m=l.collisionEnd,_=l.collisionActive,T,E,v,x;for(d.length=0,m.length=0,_.length=0,x=0;x<h;x++)p[x].confirmedActive=!1;for(x=0;x<g;x++)T=u[x],v=T.pair,v?(v.isActive?_.push(v):d.push(v),o.update(v,T,c),v.confirmedActive=!0):(v=o.create(T,c),f[v.id]=v,d.push(v),p.push(v));var S=[];for(h=p.length,x=0;x<h;x++)v=p[x],v.confirmedActive||(o.setActive(v,!1,c),m.push(v),!v.collision.bodyA.isSleeping&&!v.collision.bodyB.isSleeping&&S.push(x));for(x=0;x<S.length;x++)E=S[x]-x,v=p[E],p.splice(E,1),delete f[v.id]},n.clear=function(l){return l.table={},l.list.length=0,l.collisionStart.length=0,l.collisionActive.length=0,l.collisionEnd.length=0,l}})()},function(t,i,r){var n=t.exports=r(22);n.Axes=r(11),n.Bodies=r(12),n.Body=r(6),n.Bounds=r(1),n.Collision=r(8),n.Common=r(0),n.Composite=r(5),n.Composites=r(23),n.Constraint=r(10),n.Contact=r(17),n.Detector=r(14),n.Engine=r(18),n.Events=r(4),n.Grid=r(24),n.Mouse=r(13),n.MouseConstraint=r(25),n.Pair=r(9),n.Pairs=r(20),n.Plugin=r(15),n.Query=r(26),n.Render=r(16),n.Resolver=r(19),n.Runner=r(27),n.SAT=r(28),n.Sleeping=r(7),n.Svg=r(29),n.Vector=r(2),n.Vertices=r(3),n.World=r(30),n.Engine.run=n.Runner.run,n.Common.deprecated(n.Engine,"run","Engine.run ➤ use Matter.Runner.run(engine) instead")},function(t,i,r){var n={};t.exports=n;var o=r(15),a=r(0);(function(){n.name="matter-js",n.version="0.18.0",n.uses=[],n.used=[],n.use=function(){o.use(n,Array.prototype.slice.call(arguments))},n.before=function(l,u){return l=l.replace(/^Matter./,""),a.chainPathBefore(n,l,u)},n.after=function(l,u){return l=l.replace(/^Matter./,""),a.chainPathAfter(n,l,u)}})()},function(t,i,r){var n={};t.exports=n;var o=r(5),a=r(10),l=r(0),u=r(6),c=r(12),p=l.deprecated;(function(){n.stack=function(h,f,g,d,m,_,T){for(var E=o.create({label:"Stack"}),v=h,x=f,S,M=0,y=0;y<d;y++){for(var w=0,b=0;b<g;b++){var A=T(v,x,b,y,S,M);if(A){var I=A.bounds.max.y-A.bounds.min.y,L=A.bounds.max.x-A.bounds.min.x;I>w&&(w=I),u.translate(A,{x:L*.5,y:I*.5}),v=A.bounds.max.x+m,o.addBody(E,A),S=A,M+=1}else v+=m}x+=w+_,v=h}return E},n.chain=function(h,f,g,d,m,_){for(var T=h.bodies,E=1;E<T.length;E++){var v=T[E-1],x=T[E],S=v.bounds.max.y-v.bounds.min.y,M=v.bounds.max.x-v.bounds.min.x,y=x.bounds.max.y-x.bounds.min.y,w=x.bounds.max.x-x.bounds.min.x,b={bodyA:v,pointA:{x:M*f,y:S*g},bodyB:x,pointB:{x:w*d,y:y*m}},A=l.extend(b,_);o.addConstraint(h,a.create(A))}return h.label+=" Chain",h},n.mesh=function(h,f,g,d,m){var _=h.bodies,T,E,v,x,S;for(T=0;T<g;T++){for(E=1;E<f;E++)v=_[E-1+T*f],x=_[E+T*f],o.addConstraint(h,a.create(l.extend({bodyA:v,bodyB:x},m)));if(T>0)for(E=0;E<f;E++)v=_[E+(T-1)*f],x=_[E+T*f],o.addConstraint(h,a.create(l.extend({bodyA:v,bodyB:x},m))),d&&E>0&&(S=_[E-1+(T-1)*f],o.addConstraint(h,a.create(l.extend({bodyA:S,bodyB:x},m)))),d&&E<f-1&&(S=_[E+1+(T-1)*f],o.addConstraint(h,a.create(l.extend({bodyA:S,bodyB:x},m))))}return h.label+=" Mesh",h},n.pyramid=function(h,f,g,d,m,_,T){return n.stack(h,f,g,d,m,_,function(E,v,x,S,M,y){var w=Math.min(d,Math.ceil(g/2)),b=M?M.bounds.max.x-M.bounds.min.x:0;if(!(S>w)){S=w-S;var A=S,I=g-1-S;if(!(x<A||x>I)){y===1&&u.translate(M,{x:(x+(g%2===1?1:-1))*b,y:0});var L=M?x*b:0;return T(h+L+x*m,v,x,S,M,y)}}})},n.newtonsCradle=function(h,f,g,d,m){for(var _=o.create({label:"Newtons Cradle"}),T=0;T<g;T++){var E=1.9,v=c.circle(h+T*(d*E),f+m,d,{inertia:1/0,restitution:1,friction:0,frictionAir:1e-4,slop:1}),x=a.create({pointA:{x:h+T*(d*E),y:f},bodyB:v});o.addBody(_,v),o.addConstraint(_,x)}return _},p(n,"newtonsCradle","Composites.newtonsCradle ➤ moved to newtonsCradle example"),n.car=function(h,f,g,d,m){var _=u.nextGroup(!0),T=20,E=-g*.5+T,v=g*.5-T,x=0,S=o.create({label:"Car"}),M=c.rectangle(h,f,g,d,{collisionFilter:{group:_},chamfer:{radius:d*.5},density:2e-4}),y=c.circle(h+E,f+x,m,{collisionFilter:{group:_},friction:.8}),w=c.circle(h+v,f+x,m,{collisionFilter:{group:_},friction:.8}),b=a.create({bodyB:M,pointB:{x:E,y:x},bodyA:y,stiffness:1,length:0}),A=a.create({bodyB:M,pointB:{x:v,y:x},bodyA:w,stiffness:1,length:0});return o.addBody(S,M),o.addBody(S,y),o.addBody(S,w),o.addConstraint(S,b),o.addConstraint(S,A),S},p(n,"car","Composites.car ➤ moved to car example"),n.softBody=function(h,f,g,d,m,_,T,E,v,x){v=l.extend({inertia:1/0},v),x=l.extend({stiffness:.2,render:{type:"line",anchors:!1}},x);var S=n.stack(h,f,g,d,m,_,function(M,y){return c.circle(M,y,E,v)});return n.mesh(S,g,d,T,x),S.label="Soft Body",S},p(n,"softBody","Composites.softBody ➤ moved to softBody and cloth examples")})()},function(t,i,r){var n={};t.exports=n;var o=r(9),a=r(0),l=a.deprecated;(function(){n.create=function(u){var c={buckets:{},pairs:{},pairsList:[],bucketWidth:48,bucketHeight:48};return a.extend(c,u)},n.update=function(u,c,p,h){var f,g,d,m=p.world,_=u.buckets,T,E,v=!1;for(f=0;f<c.length;f++){var x=c[f];if(!(x.isSleeping&&!h)&&!(m.bounds&&(x.bounds.max.x<m.bounds.min.x||x.bounds.min.x>m.bounds.max.x||x.bounds.max.y<m.bounds.min.y||x.bounds.min.y>m.bounds.max.y))){var S=n._getRegion(u,x);if(!x.region||S.id!==x.region.id||h){(!x.region||h)&&(x.region=S);var M=n._regionUnion(S,x.region);for(g=M.startCol;g<=M.endCol;g++)for(d=M.startRow;d<=M.endRow;d++){E=n._getBucketId(g,d),T=_[E];var y=g>=S.startCol&&g<=S.endCol&&d>=S.startRow&&d<=S.endRow,w=g>=x.region.startCol&&g<=x.region.endCol&&d>=x.region.startRow&&d<=x.region.endRow;!y&&w&&w&&T&&n._bucketRemoveBody(u,T,x),(x.region===S||y&&!w||h)&&(T||(T=n._createBucket(_,E)),n._bucketAddBody(u,T,x))}x.region=S,v=!0}}}v&&(u.pairsList=n._createActivePairsList(u))},l(n,"update","Grid.update ➤ replaced by Matter.Detector"),n.clear=function(u){u.buckets={},u.pairs={},u.pairsList=[]},l(n,"clear","Grid.clear ➤ replaced by Matter.Detector"),n._regionUnion=function(u,c){var p=Math.min(u.startCol,c.startCol),h=Math.max(u.endCol,c.endCol),f=Math.min(u.startRow,c.startRow),g=Math.max(u.endRow,c.endRow);return n._createRegion(p,h,f,g)},n._getRegion=function(u,c){var p=c.bounds,h=Math.floor(p.min.x/u.bucketWidth),f=Math.floor(p.max.x/u.bucketWidth),g=Math.floor(p.min.y/u.bucketHeight),d=Math.floor(p.max.y/u.bucketHeight);return n._createRegion(h,f,g,d)},n._createRegion=function(u,c,p,h){return{id:u+","+c+","+p+","+h,startCol:u,endCol:c,startRow:p,endRow:h}},n._getBucketId=function(u,c){return"C"+u+"R"+c},n._createBucket=function(u,c){var p=u[c]=[];return p},n._bucketAddBody=function(u,c,p){var h=u.pairs,f=o.id,g=c.length,d;for(d=0;d<g;d++){var m=c[d];if(!(p.id===m.id||p.isStatic&&m.isStatic)){var _=f(p,m),T=h[_];T?T[2]+=1:h[_]=[p,m,1]}}c.push(p)},n._bucketRemoveBody=function(u,c,p){var h=u.pairs,f=o.id,g;c.splice(a.indexOf(c,p),1);var d=c.length;for(g=0;g<d;g++){var m=h[f(p,c[g])];m&&(m[2]-=1)}},n._createActivePairsList=function(u){var c,p=u.pairs,h=a.keys(p),f=h.length,g=[],d;for(d=0;d<f;d++)c=p[h[d]],c[2]>0?g.push(c):delete p[h[d]];return g}})()},function(t,i,r){var n={};t.exports=n;var o=r(3),a=r(7),l=r(13),u=r(4),c=r(14),p=r(10),h=r(5),f=r(0),g=r(1);(function(){n.create=function(d,m){var _=(d?d.mouse:null)||(m?m.mouse:null);_||(d&&d.render&&d.render.canvas?_=l.create(d.render.canvas):m&&m.element?_=l.create(m.element):(_=l.create(),f.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected")));var T=p.create({label:"Mouse Constraint",pointA:_.position,pointB:{x:0,y:0},length:.01,stiffness:.1,angularStiffness:1,render:{strokeStyle:"#90EE90",lineWidth:3}}),E={type:"mouseConstraint",mouse:_,element:null,body:null,constraint:T,collisionFilter:{category:1,mask:4294967295,group:0}},v=f.extend(E,m);return u.on(d,"beforeUpdate",function(){var x=h.allBodies(d.world);n.update(v,x),n._triggerEvents(v)}),v},n.update=function(d,m){var _=d.mouse,T=d.constraint,E=d.body;if(_.button===0){if(T.bodyB)a.set(T.bodyB,!1),T.pointA=_.position;else for(var v=0;v<m.length;v++)if(E=m[v],g.contains(E.bounds,_.position)&&c.canCollide(E.collisionFilter,d.collisionFilter))for(var x=E.parts.length>1?1:0;x<E.parts.length;x++){var S=E.parts[x];if(o.contains(S.vertices,_.position)){T.pointA=_.position,T.bodyB=d.body=E,T.pointB={x:_.position.x-E.position.x,y:_.position.y-E.position.y},T.angleB=E.angle,a.set(E,!1),u.trigger(d,"startdrag",{mouse:_,body:E});break}}}else T.bodyB=d.body=null,T.pointB=null,E&&u.trigger(d,"enddrag",{mouse:_,body:E})},n._triggerEvents=function(d){var m=d.mouse,_=m.sourceEvents;_.mousemove&&u.trigger(d,"mousemove",{mouse:m}),_.mousedown&&u.trigger(d,"mousedown",{mouse:m}),_.mouseup&&u.trigger(d,"mouseup",{mouse:m}),l.clearSourceEvents(m)}})()},function(t,i,r){var n={};t.exports=n;var o=r(2),a=r(8),l=r(1),u=r(12),c=r(3);(function(){n.collides=function(p,h){for(var f=[],g=h.length,d=p.bounds,m=a.collides,_=l.overlaps,T=0;T<g;T++){var E=h[T],v=E.parts.length,x=v===1?0:1;if(_(E.bounds,d))for(var S=x;S<v;S++){var M=E.parts[S];if(_(M.bounds,d)){var y=m(M,p);if(y){f.push(y);break}}}}return f},n.ray=function(p,h,f,g){g=g||1e-100;for(var d=o.angle(h,f),m=o.magnitude(o.sub(h,f)),_=(f.x+h.x)*.5,T=(f.y+h.y)*.5,E=u.rectangle(_,T,m,g,{angle:d}),v=n.collides(E,p),x=0;x<v.length;x+=1){var S=v[x];S.body=S.bodyB=S.bodyA}return v},n.region=function(p,h,f){for(var g=[],d=0;d<p.length;d++){var m=p[d],_=l.overlaps(m.bounds,h);(_&&!f||!_&&f)&&g.push(m)}return g},n.point=function(p,h){for(var f=[],g=0;g<p.length;g++){var d=p[g];if(l.contains(d.bounds,h))for(var m=d.parts.length===1?0:1;m<d.parts.length;m++){var _=d.parts[m];if(l.contains(_.bounds,h)&&c.contains(_.vertices,h)){f.push(d);break}}}return f}})()},function(t,i,r){var n={};t.exports=n;var o=r(4),a=r(18),l=r(0);(function(){var u,c;if(typeof window<"u"&&(u=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame,c=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame),!u){var p;u=function(h){p=setTimeout(function(){h(l.now())},1e3/60)},c=function(){clearTimeout(p)}}n.create=function(h){var f={fps:60,correction:1,deltaSampleSize:60,counterTimestamp:0,frameCounter:0,deltaHistory:[],timePrev:null,timeScalePrev:1,frameRequestId:null,isFixed:!1,enabled:!0},g=l.extend(f,h);return g.delta=g.delta||1e3/g.fps,g.deltaMin=g.deltaMin||1e3/g.fps,g.deltaMax=g.deltaMax||1e3/(g.fps*.5),g.fps=1e3/g.delta,g},n.run=function(h,f){return typeof h.positionIterations<"u"&&(f=h,h=n.create()),function g(d){h.frameRequestId=u(g),d&&h.enabled&&n.tick(h,f,d)}(),h},n.tick=function(h,f,g){var d=f.timing,m=1,_,T={timestamp:d.timestamp};o.trigger(h,"beforeTick",T),h.isFixed?_=h.delta:(_=g-h.timePrev||h.delta,h.timePrev=g,h.deltaHistory.push(_),h.deltaHistory=h.deltaHistory.slice(-h.deltaSampleSize),_=Math.min.apply(null,h.deltaHistory),_=_<h.deltaMin?h.deltaMin:_,_=_>h.deltaMax?h.deltaMax:_,m=_/h.delta,h.delta=_),h.timeScalePrev!==0&&(m*=d.timeScale/h.timeScalePrev),d.timeScale===0&&(m=0),h.timeScalePrev=d.timeScale,h.correction=m,h.frameCounter+=1,g-h.counterTimestamp>=1e3&&(h.fps=h.frameCounter*((g-h.counterTimestamp)/1e3),h.counterTimestamp=g,h.frameCounter=0),o.trigger(h,"tick",T),o.trigger(h,"beforeUpdate",T),a.update(f,_,m),o.trigger(h,"afterUpdate",T),o.trigger(h,"afterTick",T)},n.stop=function(h){c(h.frameRequestId)},n.start=function(h,f){n.run(h,f)}})()},function(t,i,r){var n={};t.exports=n;var o=r(8),a=r(0),l=a.deprecated;(function(){n.collides=function(u,c){return o.collides(u,c)},l(n,"collides","SAT.collides ➤ replaced by Collision.collides")})()},function(t,i,r){var n={};t.exports=n,r(1);var o=r(0);(function(){n.pathToVertices=function(a,l){typeof window<"u"&&!("SVGPathSeg"in window)&&o.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");var u,c,p,h,f,g,d,m,_,T,E=[],v,x,S=0,M=0,y=0;l=l||15;var w=function(A,I,L){var D=L%2===1&&L>1;if(!_||A!=_.x||I!=_.y){_&&D?(v=_.x,x=_.y):(v=0,x=0);var F={x:v+A,y:x+I};(D||!_)&&(_=F),E.push(F),M=v+A,y=x+I}},b=function(A){var I=A.pathSegTypeAsLetter.toUpperCase();if(I!=="Z"){switch(I){case"M":case"L":case"T":case"C":case"S":case"Q":M=A.x,y=A.y;break;case"H":M=A.x;break;case"V":y=A.y;break}w(M,y,A.pathSegType)}};for(n._svgPathToAbsolute(a),p=a.getTotalLength(),g=[],u=0;u<a.pathSegList.numberOfItems;u+=1)g.push(a.pathSegList.getItem(u));for(d=g.concat();S<p;){if(T=a.getPathSegAtLength(S),f=g[T],f!=m){for(;d.length&&d[0]!=f;)b(d.shift());m=f}switch(f.pathSegTypeAsLetter.toUpperCase()){case"C":case"T":case"S":case"Q":case"A":h=a.getPointAtLength(S),w(h.x,h.y,0);break}S+=l}for(u=0,c=d.length;u<c;++u)b(d[u]);return E},n._svgPathToAbsolute=function(a){for(var l,u,c,p,h,f,g=a.pathSegList,d=0,m=0,_=g.numberOfItems,T=0;T<_;++T){var E=g.getItem(T),v=E.pathSegTypeAsLetter;if(/[MLHVCSQTA]/.test(v))"x"in E&&(d=E.x),"y"in E&&(m=E.y);else switch("x1"in E&&(c=d+E.x1),"x2"in E&&(h=d+E.x2),"y1"in E&&(p=m+E.y1),"y2"in E&&(f=m+E.y2),"x"in E&&(d+=E.x),"y"in E&&(m+=E.y),v){case"m":g.replaceItem(a.createSVGPathSegMovetoAbs(d,m),T);break;case"l":g.replaceItem(a.createSVGPathSegLinetoAbs(d,m),T);break;case"h":g.replaceItem(a.createSVGPathSegLinetoHorizontalAbs(d),T);break;case"v":g.replaceItem(a.createSVGPathSegLinetoVerticalAbs(m),T);break;case"c":g.replaceItem(a.createSVGPathSegCurvetoCubicAbs(d,m,c,p,h,f),T);break;case"s":g.replaceItem(a.createSVGPathSegCurvetoCubicSmoothAbs(d,m,h,f),T);break;case"q":g.replaceItem(a.createSVGPathSegCurvetoQuadraticAbs(d,m,c,p),T);break;case"t":g.replaceItem(a.createSVGPathSegCurvetoQuadraticSmoothAbs(d,m),T);break;case"a":g.replaceItem(a.createSVGPathSegArcAbs(d,m,E.r1,E.r2,E.angle,E.largeArcFlag,E.sweepFlag),T);break;case"z":case"Z":d=l,m=u;break}(v=="M"||v=="m")&&(l=d,u=m)}}})()},function(t,i,r){var n={};t.exports=n;var o=r(5);r(0),function(){n.create=o.create,n.add=o.add,n.remove=o.remove,n.clear=o.clear,n.addComposite=o.addComposite,n.addBody=o.addBody,n.addConstraint=o.addConstraint}()}])})})(Ve);var Qu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(s){return typeof s}:function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},ef=window.device,ne={},Na=[];window.device=ne;var Dr=window.document.documentElement,tf=window.navigator.userAgent.toLowerCase(),Go=["googletv","viera","smarttv","internet.tv","netcast","nettv","appletv","boxee","kylo","roku","dlnadoc","pov_tv","hbbtv","ce-html"];ne.macos=function(){return $e("mac")};ne.ios=function(){return ne.iphone()||ne.ipod()||ne.ipad()};ne.iphone=function(){return!ne.windows()&&$e("iphone")};ne.ipod=function(){return $e("ipod")};ne.ipad=function(){var s=navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1;return $e("ipad")||s};ne.android=function(){return!ne.windows()&&$e("android")};ne.androidPhone=function(){return ne.android()&&$e("mobile")};ne.androidTablet=function(){return ne.android()&&!$e("mobile")};ne.blackberry=function(){return $e("blackberry")||$e("bb10")};ne.blackberryPhone=function(){return ne.blackberry()&&!$e("tablet")};ne.blackberryTablet=function(){return ne.blackberry()&&$e("tablet")};ne.windows=function(){return $e("windows")};ne.windowsPhone=function(){return ne.windows()&&$e("phone")};ne.windowsTablet=function(){return ne.windows()&&$e("touch")&&!ne.windowsPhone()};ne.fxos=function(){return($e("(mobile")||$e("(tablet"))&&$e(" rv:")};ne.fxosPhone=function(){return ne.fxos()&&$e("mobile")};ne.fxosTablet=function(){return ne.fxos()&&$e("tablet")};ne.meego=function(){return $e("meego")};ne.cordova=function(){return window.cordova&&location.protocol==="file:"};ne.nodeWebkit=function(){return Qu(window.process)==="object"};ne.mobile=function(){return ne.androidPhone()||ne.iphone()||ne.ipod()||ne.windowsPhone()||ne.blackberryPhone()||ne.fxosPhone()||ne.meego()};ne.tablet=function(){return ne.ipad()||ne.androidTablet()||ne.blackberryTablet()||ne.windowsTablet()||ne.fxosTablet()};ne.desktop=function(){return!ne.tablet()&&!ne.mobile()};ne.television=function(){for(var s=0;s<Go.length;){if($e(Go[s]))return!0;s++}return!1};ne.portrait=function(){return screen.orientation&&Object.prototype.hasOwnProperty.call(window,"onorientationchange")?oo(screen.orientation.type,"portrait"):ne.ios()&&Object.prototype.hasOwnProperty.call(window,"orientation")?Math.abs(window.orientation)!==90:window.innerHeight/window.innerWidth>1};ne.landscape=function(){return screen.orientation&&Object.prototype.hasOwnProperty.call(window,"onorientationchange")?oo(screen.orientation.type,"landscape"):ne.ios()&&Object.prototype.hasOwnProperty.call(window,"orientation")?Math.abs(window.orientation)===90:window.innerHeight/window.innerWidth<1};ne.noConflict=function(){return window.device=ef,this};function oo(s,e){return s.indexOf(e)!==-1}function $e(s){return oo(tf,s)}function xc(s){return Dr.className.match(new RegExp(s,"i"))}function tt(s){var e=null;xc(s)||(e=Dr.className.replace(/^\s+|\s+$/g,""),Dr.className=e+" "+s)}function Ho(s){xc(s)&&(Dr.className=Dr.className.replace(" "+s,""))}ne.ios()?ne.ipad()?tt("ios ipad tablet"):ne.iphone()?tt("ios iphone mobile"):ne.ipod()&&tt("ios ipod mobile"):ne.macos()?tt("macos desktop"):ne.android()?ne.androidTablet()?tt("android tablet"):tt("android mobile"):ne.blackberry()?ne.blackberryTablet()?tt("blackberry tablet"):tt("blackberry mobile"):ne.windows()?ne.windowsTablet()?tt("windows tablet"):ne.windowsPhone()?tt("windows mobile"):tt("windows desktop"):ne.fxos()?ne.fxosTablet()?tt("fxos tablet"):tt("fxos mobile"):ne.meego()?tt("meego mobile"):ne.nodeWebkit()?tt("node-webkit"):ne.television()?tt("television"):ne.desktop()&&tt("desktop");ne.cordova()&&tt("cordova");function gs(){ne.landscape()?(Ho("portrait"),tt("landscape"),Vo("landscape")):(Ho("landscape"),tt("portrait"),Vo("portrait")),yc()}function Vo(s){for(var e=0;e<Na.length;e++)Na[e](s)}ne.onChangeOrientation=function(s){typeof s=="function"&&Na.push(s)};var _s="resize";Object.prototype.hasOwnProperty.call(window,"onorientationchange")&&(_s="orientationchange");window.addEventListener?window.addEventListener(_s,gs,!1):window.attachEvent?window.attachEvent(_s,gs):window[_s]=gs;gs();function lo(s){for(var e=0;e<s.length;e++)if(ne[s[e]]())return s[e];return"unknown"}ne.type=lo(["mobile","tablet","desktop"]);ne.os=lo(["ios","iphone","ipad","ipod","android","blackberry","macos","windows","fxos","meego","television"]);function yc(){ne.orientation=lo(["portrait","landscape"])}yc();const Io=class{constructor(){}static get instance(){return this._instance||(this._instance=new Io),this._instance}random(e,t){return Math.random()*(t-e)+e}random2(e,t){let i=Math.random()*(t-e)+e;return this.hit(2)&&(i*=-1),i}randomInt(e,t){return Math.floor(Math.random()*(t-e+1))+e}hit(e=0){return e<2&&(e=2),this.randomInt(0,e-1)==0}randomArr(e){return e[this.randomInt(0,e.length-1)]}range(e){return this.random(-e,e)}clamp(e,t,i){return Math.min(i,Math.max(e,t))}map(e,t,i,r,n){if(e<=r)return t;if(e>=n)return i;const o=(i-t)/(n-r);return(e-r)*o+t}mix(e,t,i){return e*(1-i)+t*i}radian(e){return e*Math.PI/180}degree(e){return e*180/Math.PI}shuffle(e){let t=e.length;for(;--t;){let i=Math.floor(Math.random()*(t+1));if(t==i)continue;let r=e[t];e[t]=e[i],e[i]=r}}replaceAll(e,t,i){return e.split(t).join(i)}sort(e,t,i=!0){i?e.sort((r,n)=>n[t]-r[t]):e.sort((r,n)=>r[t]-n[t])}distance(e,t,i,r){const n=e-i,o=t-r;return Math.sqrt(n*n+o*o)}numStr(e,t){let i=String(e);if(i.length>=t)return i;const r=t-i.length;let n=0;for(;n<r;)i="0"+i,n++;return i}isIE(){const e=window.navigator.userAgent.toLowerCase();return e.indexOf("msie")!=-1||e.indexOf("trident/7")!=-1||e.indexOf("edge")!=-1}isIE2(){const e=window.navigator.userAgent.toLowerCase();return e.indexOf("msie")!=-1||e.indexOf("trident/7")!=-1}isWin(){return window.navigator.platform.indexOf("Win")!=-1}isChrome(){return window.navigator.userAgent.toLowerCase().indexOf("chrome")!=-1}isFF(){return window.navigator.userAgent.toLowerCase().indexOf("firefox")!=-1}isSafari(){return window.navigator.userAgent.toLowerCase().indexOf("safari")!=-1&&!this.isChrome()}useWebGL(){try{const e=document.createElement("canvas"),t=e.getContext("webgl")||e.getContext("experimental-webgl");return!!(window.WebGLRenderingContext&&t&&t.getShaderPrecisionFormat)}catch{return!1}}getQuery(e){e=e.replace(/[€[]/,"€€€[").replace(/[€]]/,"€€€]");const i=new RegExp("[€€?&]"+e+"=([^&//]*)").exec(window.location.href);return i==null?"":i[1]}isTouchDevice(){return"ontouchstart"in window||navigator!=null&&navigator.maxTouchPoints>0}isPc(){return ne.mobile()==!1}isSp(){return ne.mobile()}isAod(){return ne.android()}isIPhone(){return ne.iphone()}isIPad(){return ne.tablet()}};let Ze=Io;Q(Ze,"_instance");const St=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ws=Math.PI/180,Wo=180/Math.PI;function kr(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(St[s&255]+St[s>>8&255]+St[s>>16&255]+St[s>>24&255]+"-"+St[e&255]+St[e>>8&255]+"-"+St[e>>16&15|64]+St[e>>24&255]+"-"+St[t&63|128]+St[t>>8&255]+"-"+St[t>>16&255]+St[t>>24&255]+St[i&255]+St[i>>8&255]+St[i>>16&255]+St[i>>24&255]).toLowerCase()}function Vt(s,e,t){return Math.max(e,Math.min(t,s))}function nf(s,e){return(s%e+e)%e}function Xs(s,e,t){return(1-t)*s+t*e}function Xo(s){return(s&s-1)===0&&s!==0}function Ba(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Yr(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function zt(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const rf="147",sf=0,qo=1,af=2,Sc=1,of=2,Tr=3,rr=0,ai=1,Ii=2,$i=0,Qn=1,Yo=2,Zo=3,Ko=4,lf=5,Yn=100,cf=101,uf=102,jo=103,$o=104,ff=200,hf=201,df=202,pf=203,Mc=204,Ec=205,mf=206,gf=207,_f=208,vf=209,xf=210,yf=0,Sf=1,Mf=2,za=3,Ef=4,Tf=5,wf=6,bf=7,Tc=0,Af=1,Cf=2,Ui=0,Rf=1,Pf=2,Df=3,Lf=4,If=5,wc=300,sr=301,ar=302,ka=303,Ga=304,Ls=306,Ha=1e3,hi=1001,Va=1002,Pt=1003,Jo=1004,Qo=1005,ei=1006,Ff=1007,Is=1008,Cn=1009,Of=1010,Uf=1011,bc=1012,Nf=1013,xn=1014,yn=1015,Lr=1016,Bf=1017,zf=1018,er=1020,kf=1021,Gf=1022,ii=1023,Hf=1024,Vf=1025,En=1026,or=1027,Wf=1028,Xf=1029,qf=1030,Yf=1031,Zf=1033,qs=33776,Ys=33777,Zs=33778,Ks=33779,el=35840,tl=35841,il=35842,nl=35843,Kf=36196,rl=37492,sl=37496,al=37808,ol=37809,ll=37810,cl=37811,ul=37812,fl=37813,hl=37814,dl=37815,pl=37816,ml=37817,gl=37818,_l=37819,vl=37820,xl=37821,yl=36492,Rn=3e3,We=3001,jf=3200,$f=3201,Jf=0,Qf=1,mi="srgb",Ir="srgb-linear",js=7680,eh=519,Sl=35044,Ml="300 es",Wa=1035;function Tn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function vs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const $s={[mi]:{[Ir]:Tn},[Ir]:{[mi]:vs}},Ct={legacyMode:!0,get workingColorSpace(){return Ir},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.legacyMode||e===t||!e||!t)return s;if($s[e]&&$s[e][t]!==void 0){const i=$s[e][t];return s.r=i(s.r),s.g=i(s.g),s.b=i(s.b),s}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}},Ac={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rt={r:0,g:0,b:0},ci={h:0,s:0,l:0},Zr={h:0,s:0,l:0};function Js(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}function Kr(s,e){return e.r=s.r,e.g=s.g,e.b=s.b,e}class Ue{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ct.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ct.workingColorSpace){if(e=nf(e,1),t=Vt(t,0,1),i=Vt(i,0,1),t===0)this.r=this.g=this.b=i;else{const n=i<=.5?i*(1+t):i+t-i*t,o=2*i-n;this.r=Js(o,n,e+1/3),this.g=Js(o,n,e),this.b=Js(o,n,e-1/3)}return Ct.toWorkingColorSpace(this,r),this}setStyle(e,t=mi){function i(n){n!==void 0&&parseFloat(n)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let n;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(n[1],10))/255,this.g=Math.min(255,parseInt(n[2],10))/255,this.b=Math.min(255,parseInt(n[3],10))/255,Ct.toWorkingColorSpace(this,t),i(n[4]),this;if(n=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(n[1],10))/100,this.g=Math.min(100,parseInt(n[2],10))/100,this.b=Math.min(100,parseInt(n[3],10))/100,Ct.toWorkingColorSpace(this,t),i(n[4]),this;break;case"hsl":case"hsla":if(n=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(n[1])/360,u=parseFloat(n[2])/100,c=parseFloat(n[3])/100;return i(n[4]),this.setHSL(l,u,c,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const n=r[1],o=n.length;if(o===3)return this.r=parseInt(n.charAt(0)+n.charAt(0),16)/255,this.g=parseInt(n.charAt(1)+n.charAt(1),16)/255,this.b=parseInt(n.charAt(2)+n.charAt(2),16)/255,Ct.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(n.charAt(0)+n.charAt(1),16)/255,this.g=parseInt(n.charAt(2)+n.charAt(3),16)/255,this.b=parseInt(n.charAt(4)+n.charAt(5),16)/255,Ct.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=mi){const i=Ac[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Tn(e.r),this.g=Tn(e.g),this.b=Tn(e.b),this}copyLinearToSRGB(e){return this.r=vs(e.r),this.g=vs(e.g),this.b=vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mi){return Ct.fromWorkingColorSpace(Kr(this,rt),e),Vt(rt.r*255,0,255)<<16^Vt(rt.g*255,0,255)<<8^Vt(rt.b*255,0,255)<<0}getHexString(e=mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.fromWorkingColorSpace(Kr(this,rt),t);const i=rt.r,r=rt.g,n=rt.b,o=Math.max(i,r,n),a=Math.min(i,r,n);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const p=o-a;switch(u=c<=.5?p/(o+a):p/(2-o-a),o){case i:l=(r-n)/p+(r<n?6:0);break;case r:l=(n-i)/p+2;break;case n:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=Ct.workingColorSpace){return Ct.fromWorkingColorSpace(Kr(this,rt),t),e.r=rt.r,e.g=rt.g,e.b=rt.b,e}getStyle(e=mi){return Ct.fromWorkingColorSpace(Kr(this,rt),e),e!==mi?`color(${e} ${rt.r} ${rt.g} ${rt.b})`:`rgb(${rt.r*255|0},${rt.g*255|0},${rt.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(ci),ci.h+=e,ci.s+=t,ci.l+=i,this.setHSL(ci.h,ci.s,ci.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ci),e.getHSL(Zr);const i=Xs(ci.h,Zr.h,t),r=Xs(ci.s,Zr.s,t),n=Xs(ci.l,Zr.l,t);return this.setHSL(i,r,n),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ue.NAMES=Ac;const Fo=class{constructor(){Q(this,"FLG_PARAM",location.href.includes("p=yes"));Q(this,"FLG_SHOW_MATTERJS",!1);Q(this,"FLG_STATS",location.href.includes("p=yes"));Q(this,"PATH_IMG","./assets/img/");Q(this,"USE_TOUCH",Ze.instance.isTouchDevice());Q(this,"BREAKPOINT",768);Q(this,"LG_PSD_WIDTH",1600);Q(this,"XS_PSD_WIDTH",750);Q(this,"IS_SIMPLE",Ze.instance.isPc()&&Ze.instance.isSafari());Q(this,"IS_PC",Ze.instance.isPc());Q(this,"IS_SP",Ze.instance.isSp());Q(this,"IS_AND",Ze.instance.isAod());Q(this,"IS_TAB",Ze.instance.isIPad());Q(this,"USE_ROLLOVER",Ze.instance.isPc()&&!Ze.instance.isIPad());Q(this,"BLUR_SCALE",(this.IS_PC,.1));Q(this,"COLOR",[new Ue(16383230),new Ue(15007812),new Ue(15629056),new Ue(16769280),new Ue(41313),new Ue(29622),new Ue(1855393),new Ue(6765459)])}static get instance(){return this._instance||(this._instance=new Fo),this._instance}};let pt=Fo;Q(pt,"_instance");class Kn{constructor(){}}Q(Kn,"LG",0),Q(Kn,"XS",1);const Oo=class{constructor(){Q(this,"_useFullScreen",pt.instance.IS_SP)}static get instance(){return this._instance||(this._instance=new Oo),this._instance}ratio(){return window.devicePixelRatio||1}px(e){return e+"px"}useScreen(){return screen!=null}sw(){return window.innerWidth}sh(){return this._useFullScreen?screen.height:window.innerHeight}screenOffsetY(){return(window.innerHeight-this.sh())*.5}screen(){return window.innerWidth<=pt.instance.BREAKPOINT?Kn.XS:Kn.LG}isXS(){return this.screen()==Kn.XS}isLG(){return this.screen()==Kn.LG}val(e,t){return this.isXS()?e:t}r(e){const t=this.val(pt.instance.XS_PSD_WIDTH,pt.instance.LG_PSD_WIDTH);return e/t*this.sw()}sin1(e){return Math.sin(e)+Math.sin(2*e)}sin2(e){return(Math.sin(e)+Math.sin(2.2*e+5.52)+Math.sin(2.9*e+.93)+Math.sin(4.6*e+8.94))/4}};let Mt=Oo;Q(Mt,"_instance");const Uo=class{constructor(){Q(this,"x",window.innerWidth*.5);Q(this,"y",window.innerHeight*.5);Q(this,"old",new Yi);Q(this,"normal",new Yi);Q(this,"easeNormal",new Yi);Q(this,"start",new Yi);Q(this,"moveDist",new Yi);Q(this,"dist",0);Q(this,"isDown",!1);Q(this,"usePreventDefault",!0);Q(this,"onSwipe");Q(this,"_updateHandler");if(Ze.instance.isTouchDevice()){const e=document.querySelector(".matter")||window;e.addEventListener("touchstart",(t={})=>{this._eTouchStart(t)},{passive:!1}),e.addEventListener("touchend",()=>{this._eTouchEnd()},{passive:!1}),e.addEventListener("touchmove",(t={})=>{this._eTouchMove(t)},{passive:!1})}else window.addEventListener("mousedown",(e={})=>{this._eDown(e)}),window.addEventListener("mouseup",()=>{this._eUp()}),window.addEventListener("mousemove",(e={})=>{this._eMove(e)});this._updateHandler=this._update.bind(this),Oi.instance.add(this._updateHandler)}static get instance(){return this._instance||(this._instance=new Uo),this._instance}_eTouchStart(e={}){this.isDown=!0,this._eTouchMove(e);const t=this._getTouchPoint(e);this.start.x=t.x,this.start.y=t.y}_eTouchEnd(){this.isDown=!1;const e=this.old.x-this.x,t=this.old.y-this.y;(Math.abs(t)>0||Math.abs(e)>0)&&this.onSwipe!=null&&this.onSwipe({move:t}),this.dist=0}_eTouchMove(e={}){const t=this._getTouchPoint(e);this.old.x=this.x,this.old.y=this.y,this.x=t.x,this.y=t.y;const i=this.old.x-this.x,r=this.old.y-this.y;this.dist=Math.sqrt(i*i+r*r),this.usePreventDefault&&e.preventDefault()}_eDown(e={}){this.isDown=!0,this._eMove(e),this.start.x=this.x,this.start.y=this.y}_eUp(){this.isDown=!1}_eMove(e={}){this.old.x=this.x,this.old.y=this.y,this.x=e.clientX,this.y=e.clientY;const t=this.old.x-this.x,i=this.old.y-this.y;this.dist=Math.sqrt(t*t+i*i)}_getTouchPoint(e){const t=new Yi,i=e.touches;return i!=null&&i.length>0&&(t.x=i[0].pageX,t.y=i[0].pageY),t}_update(){this.isDown?(this.moveDist.x=this.start.x-this.x,this.moveDist.y=this.start.y-this.y):(this.moveDist.x+=(0-this.moveDist.x)*.25,this.moveDist.y+=(0-this.moveDist.y)*.25),this.normal.x=Ze.instance.map(this.x,-1,1,0,window.innerWidth),this.normal.y=Ze.instance.map(this.y,-1,1,0,window.innerHeight);const e=.1;this.easeNormal.x+=(this.normal.x-this.easeNormal.x)*e,this.easeNormal.y+=(this.normal.y-this.easeNormal.y)*e}};let _i=Uo;Q(_i,"_instance");class Gr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,n,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],p=i[r+3];const h=n[o+0],f=n[o+1],g=n[o+2],d=n[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=p;return}if(a===1){e[t+0]=h,e[t+1]=f,e[t+2]=g,e[t+3]=d;return}if(p!==d||l!==h||u!==f||c!==g){let m=1-a;const _=l*h+u*f+c*g+p*d,T=_>=0?1:-1,E=1-_*_;if(E>Number.EPSILON){const x=Math.sqrt(E),S=Math.atan2(x,_*T);m=Math.sin(m*S)/x,a=Math.sin(a*S)/x}const v=a*T;if(l=l*m+h*v,u=u*m+f*v,c=c*m+g*v,p=p*m+d*v,m===1-a){const x=1/Math.sqrt(l*l+u*u+c*c+p*p);l*=x,u*=x,c*=x,p*=x}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,r,n,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],p=n[o],h=n[o+1],f=n[o+2],g=n[o+3];return e[t]=a*g+c*p+l*f-u*h,e[t+1]=l*g+c*h+u*p-a*f,e[t+2]=u*g+c*f+a*h-l*p,e[t+3]=c*g-a*p-l*h-u*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,n=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),p=a(n/2),h=l(i/2),f=l(r/2),g=l(n/2);switch(o){case"XYZ":this._x=h*c*p+u*f*g,this._y=u*f*p-h*c*g,this._z=u*c*g+h*f*p,this._w=u*c*p-h*f*g;break;case"YXZ":this._x=h*c*p+u*f*g,this._y=u*f*p-h*c*g,this._z=u*c*g-h*f*p,this._w=u*c*p+h*f*g;break;case"ZXY":this._x=h*c*p-u*f*g,this._y=u*f*p+h*c*g,this._z=u*c*g+h*f*p,this._w=u*c*p-h*f*g;break;case"ZYX":this._x=h*c*p-u*f*g,this._y=u*f*p+h*c*g,this._z=u*c*g-h*f*p,this._w=u*c*p+h*f*g;break;case"YZX":this._x=h*c*p+u*f*g,this._y=u*f*p+h*c*g,this._z=u*c*g-h*f*p,this._w=u*c*p-h*f*g;break;case"XZY":this._x=h*c*p-u*f*g,this._y=u*f*p-h*c*g,this._z=u*c*g+h*f*p,this._w=u*c*p+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],n=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],p=t[10],h=i+a+p;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(c-l)*f,this._y=(n-u)*f,this._z=(o-r)*f}else if(i>a&&i>p){const f=2*Math.sqrt(1+i-a-p);this._w=(c-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(n+u)/f}else if(a>p){const f=2*Math.sqrt(1+a-i-p);this._w=(n-u)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+c)/f}else{const f=2*Math.sqrt(1+p-i-a);this._w=(o-r)/f,this._x=(n+u)/f,this._y=(l+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Vt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,n=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-n*l,this._y=r*c+o*l+n*a-i*u,this._z=n*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-n*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,n=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+n*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=n,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*n+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),p=Math.sin((1-t)*c)/u,h=Math.sin(t*c)/u;return this._w=o*p+this._w*h,this._x=i*p+this._x*h,this._y=r*p+this._y*h,this._z=n*p+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),n=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(n),i*Math.cos(n),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(El.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(El.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6]*r,this.y=n[1]*t+n[4]*i+n[7]*r,this.z=n[2]*t+n[5]*i+n[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,n=e.elements,o=1/(n[3]*t+n[7]*i+n[11]*r+n[15]);return this.x=(n[0]*t+n[4]*i+n[8]*r+n[12])*o,this.y=(n[1]*t+n[5]*i+n[9]*r+n[13])*o,this.z=(n[2]*t+n[6]*i+n[10]*r+n[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,n=e.x,o=e.y,a=e.z,l=e.w,u=l*t+o*r-a*i,c=l*i+a*t-n*r,p=l*r+n*i-o*t,h=-n*t-o*i-a*r;return this.x=u*l+h*-n+c*-a-p*-o,this.y=c*l+h*-o+p*-n-u*-a,this.z=p*l+h*-a+u*-o-c*-n,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,n=e.elements;return this.x=n[0]*t+n[4]*i+n[8]*r,this.y=n[1]*t+n[5]*i+n[9]*r,this.z=n[2]*t+n[6]*i+n[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,n=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-n*a,this.y=n*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Qs.copy(this).projectOnVector(e),this.sub(Qs)}reflect(e){return this.sub(Qs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qs=new W,El=new Gr;class xt{constructor(){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,n,o,a,l,u,c,p,h,f,g,d,m){const _=this.elements;return _[0]=e,_[4]=t,_[8]=i,_[12]=r,_[1]=n,_[5]=o,_[9]=a,_[13]=l,_[2]=u,_[6]=c,_[10]=p,_[14]=h,_[3]=f,_[7]=g,_[11]=d,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ln.setFromMatrixColumn(e,0).length(),n=1/Ln.setFromMatrixColumn(e,1).length(),o=1/Ln.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*n,t[5]=i[5]*n,t[6]=i[6]*n,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,n=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(n),p=Math.sin(n);if(e.order==="XYZ"){const h=o*c,f=o*p,g=a*c,d=a*p;t[0]=l*c,t[4]=-l*p,t[8]=u,t[1]=f+g*u,t[5]=h-d*u,t[9]=-a*l,t[2]=d-h*u,t[6]=g+f*u,t[10]=o*l}else if(e.order==="YXZ"){const h=l*c,f=l*p,g=u*c,d=u*p;t[0]=h+d*a,t[4]=g*a-f,t[8]=o*u,t[1]=o*p,t[5]=o*c,t[9]=-a,t[2]=f*a-g,t[6]=d+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*c,f=l*p,g=u*c,d=u*p;t[0]=h-d*a,t[4]=-o*p,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*c,t[9]=d-h*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*c,f=o*p,g=a*c,d=a*p;t[0]=l*c,t[4]=g*u-f,t[8]=h*u+d,t[1]=l*p,t[5]=d*u+h,t[9]=f*u-g,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,f=o*u,g=a*l,d=a*u;t[0]=l*c,t[4]=d-h*p,t[8]=g*p+f,t[1]=p,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=f*p+g,t[10]=h-d*p}else if(e.order==="XZY"){const h=o*l,f=o*u,g=a*l,d=a*u;t[0]=l*c,t[4]=-p,t[8]=u*c,t[1]=h*p+d,t[5]=o*c,t[9]=f*p-g,t[2]=g*p-f,t[6]=a*c,t[10]=d*p+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(th,e,ih)}lookAt(e,t,i){const r=this.elements;return kt.subVectors(e,t),kt.lengthSq()===0&&(kt.z=1),kt.normalize(),ki.crossVectors(i,kt),ki.lengthSq()===0&&(Math.abs(i.z)===1?kt.x+=1e-4:kt.z+=1e-4,kt.normalize(),ki.crossVectors(i,kt)),ki.normalize(),jr.crossVectors(kt,ki),r[0]=ki.x,r[4]=jr.x,r[8]=kt.x,r[1]=ki.y,r[5]=jr.y,r[9]=kt.y,r[2]=ki.z,r[6]=jr.z,r[10]=kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,n=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],p=i[5],h=i[9],f=i[13],g=i[2],d=i[6],m=i[10],_=i[14],T=i[3],E=i[7],v=i[11],x=i[15],S=r[0],M=r[4],y=r[8],w=r[12],b=r[1],A=r[5],I=r[9],L=r[13],D=r[2],F=r[6],N=r[10],H=r[14],z=r[3],X=r[7],K=r[11],k=r[15];return n[0]=o*S+a*b+l*D+u*z,n[4]=o*M+a*A+l*F+u*X,n[8]=o*y+a*I+l*N+u*K,n[12]=o*w+a*L+l*H+u*k,n[1]=c*S+p*b+h*D+f*z,n[5]=c*M+p*A+h*F+f*X,n[9]=c*y+p*I+h*N+f*K,n[13]=c*w+p*L+h*H+f*k,n[2]=g*S+d*b+m*D+_*z,n[6]=g*M+d*A+m*F+_*X,n[10]=g*y+d*I+m*N+_*K,n[14]=g*w+d*L+m*H+_*k,n[3]=T*S+E*b+v*D+x*z,n[7]=T*M+E*A+v*F+x*X,n[11]=T*y+E*I+v*N+x*K,n[15]=T*w+E*L+v*H+x*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],n=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],p=e[6],h=e[10],f=e[14],g=e[3],d=e[7],m=e[11],_=e[15];return g*(+n*l*p-r*u*p-n*a*h+i*u*h+r*a*f-i*l*f)+d*(+t*l*f-t*u*h+n*o*h-r*o*f+r*u*c-n*l*c)+m*(+t*u*p-t*a*f-n*o*p+i*o*f+n*a*c-i*u*c)+_*(-r*a*c-t*l*p+t*a*h+r*o*p-i*o*h+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],p=e[9],h=e[10],f=e[11],g=e[12],d=e[13],m=e[14],_=e[15],T=p*m*u-d*h*u+d*l*f-a*m*f-p*l*_+a*h*_,E=g*h*u-c*m*u-g*l*f+o*m*f+c*l*_-o*h*_,v=c*d*u-g*p*u+g*a*f-o*d*f-c*a*_+o*p*_,x=g*p*l-c*d*l-g*a*h+o*d*h+c*a*m-o*p*m,S=t*T+i*E+r*v+n*x;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/S;return e[0]=T*M,e[1]=(d*h*n-p*m*n-d*r*f+i*m*f+p*r*_-i*h*_)*M,e[2]=(a*m*n-d*l*n+d*r*u-i*m*u-a*r*_+i*l*_)*M,e[3]=(p*l*n-a*h*n-p*r*u+i*h*u+a*r*f-i*l*f)*M,e[4]=E*M,e[5]=(c*m*n-g*h*n+g*r*f-t*m*f-c*r*_+t*h*_)*M,e[6]=(g*l*n-o*m*n-g*r*u+t*m*u+o*r*_-t*l*_)*M,e[7]=(o*h*n-c*l*n+c*r*u-t*h*u-o*r*f+t*l*f)*M,e[8]=v*M,e[9]=(g*p*n-c*d*n-g*i*f+t*d*f+c*i*_-t*p*_)*M,e[10]=(o*d*n-g*a*n+g*i*u-t*d*u-o*i*_+t*a*_)*M,e[11]=(c*a*n-o*p*n-c*i*u+t*p*u+o*i*f-t*a*f)*M,e[12]=x*M,e[13]=(c*d*r-g*p*r+g*i*h-t*d*h-c*i*m+t*p*m)*M,e[14]=(g*a*r-o*d*r-g*i*l+t*d*l+o*i*m-t*a*m)*M,e[15]=(o*p*r-c*a*r+c*i*l-t*p*l-o*i*h+t*a*h)*M,this}scale(e){const t=this.elements,i=e.x,r=e.y,n=e.z;return t[0]*=i,t[4]*=r,t[8]*=n,t[1]*=i,t[5]*=r,t[9]*=n,t[2]*=i,t[6]*=r,t[10]*=n,t[3]*=i,t[7]*=r,t[11]*=n,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),n=1-i,o=e.x,a=e.y,l=e.z,u=n*o,c=n*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,n*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,n,o){return this.set(1,i,n,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,n=t._x,o=t._y,a=t._z,l=t._w,u=n+n,c=o+o,p=a+a,h=n*u,f=n*c,g=n*p,d=o*c,m=o*p,_=a*p,T=l*u,E=l*c,v=l*p,x=i.x,S=i.y,M=i.z;return r[0]=(1-(d+_))*x,r[1]=(f+v)*x,r[2]=(g-E)*x,r[3]=0,r[4]=(f-v)*S,r[5]=(1-(h+_))*S,r[6]=(m+T)*S,r[7]=0,r[8]=(g+E)*M,r[9]=(m-T)*M,r[10]=(1-(h+d))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let n=Ln.set(r[0],r[1],r[2]).length();const o=Ln.set(r[4],r[5],r[6]).length(),a=Ln.set(r[8],r[9],r[10]).length();this.determinant()<0&&(n=-n),e.x=r[12],e.y=r[13],e.z=r[14],ui.copy(this);const u=1/n,c=1/o,p=1/a;return ui.elements[0]*=u,ui.elements[1]*=u,ui.elements[2]*=u,ui.elements[4]*=c,ui.elements[5]*=c,ui.elements[6]*=c,ui.elements[8]*=p,ui.elements[9]*=p,ui.elements[10]*=p,t.setFromRotationMatrix(ui),i.x=n,i.y=o,i.z=a,this}makePerspective(e,t,i,r,n,o){const a=this.elements,l=2*n/(t-e),u=2*n/(i-r),c=(t+e)/(t-e),p=(i+r)/(i-r),h=-(o+n)/(o-n),f=-2*o*n/(o-n);return a[0]=l,a[4]=0,a[8]=c,a[12]=0,a[1]=0,a[5]=u,a[9]=p,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=f,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,n,o){const a=this.elements,l=1/(t-e),u=1/(i-r),c=1/(o-n),p=(t+e)*l,h=(i+r)*u,f=(o+n)*c;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-p,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*c,a[14]=-f,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ln=new W,ui=new xt,th=new W(0,0,0),ih=new W(1,1,1),ki=new W,jr=new W,kt=new W;class gr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const n=r.indexOf(t);n!==-1&&r.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let n=0,o=r.length;n<o;n++)r[n].call(this,e);e.target=null}}}const Tl=new xt,wl=new Gr;class Hr{constructor(e=0,t=0,i=0,r=Hr.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,n=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],p=r[2],h=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-o,n)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-p,n),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-Vt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-p,n)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,n)):(this._x=Math.atan2(-c,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Tl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wl.setFromEuler(this),this.setFromQuaternion(wl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Hr.DefaultOrder="XYZ";Hr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Cc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}class Xt{constructor(){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,n,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=n,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,n=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],p=i[7],h=i[2],f=i[5],g=i[8],d=r[0],m=r[3],_=r[6],T=r[1],E=r[4],v=r[7],x=r[2],S=r[5],M=r[8];return n[0]=o*d+a*T+l*x,n[3]=o*m+a*E+l*S,n[6]=o*_+a*v+l*M,n[1]=u*d+c*T+p*x,n[4]=u*m+c*E+p*S,n[7]=u*_+c*v+p*M,n[2]=h*d+f*T+g*x,n[5]=h*m+f*E+g*S,n[8]=h*_+f*v+g*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*n*c+i*a*l+r*n*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],p=c*o-a*u,h=a*l-c*n,f=u*n-o*l,g=t*p+i*h+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/g;return e[0]=p*d,e[1]=(r*u-c*i)*d,e[2]=(a*i-r*o)*d,e[3]=h*d,e[4]=(c*t-r*l)*d,e[5]=(r*n-a*t)*d,e[6]=f*d,e[7]=(i*l-u*t)*d,e[8]=(o*t-i*n)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,n,o,a){const l=Math.cos(n),u=Math.sin(n);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ea.makeScale(e,t)),this}rotate(e){return this.premultiply(ea.makeRotation(-e)),this}translate(e,t){return this.premultiply(ea.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ea=new Xt;let nh=0;const bl=new W,In=new Gr,wi=new xt,$r=new W,xr=new W,rh=new W,sh=new Gr,Al=new W(1,0,0),Cl=new W(0,1,0),Rl=new W(0,0,1),ah={type:"added"},Pl={type:"removed"};class Tt extends gr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nh++}),this.uuid=kr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DefaultUp.clone();const e=new W,t=new Hr,i=new Gr,r=new W(1,1,1);function n(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(n),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xt},normalMatrix:{value:new Xt}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=Tt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Tt.DefaultMatrixWorldAutoUpdate,this.layers=new Cc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return In.setFromAxisAngle(e,t),this.quaternion.multiply(In),this}rotateOnWorldAxis(e,t){return In.setFromAxisAngle(e,t),this.quaternion.premultiply(In),this}rotateX(e){return this.rotateOnAxis(Al,e)}rotateY(e){return this.rotateOnAxis(Cl,e)}rotateZ(e){return this.rotateOnAxis(Rl,e)}translateOnAxis(e,t){return bl.copy(e).applyQuaternion(this.quaternion),this.position.add(bl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Al,e)}translateY(e){return this.translateOnAxis(Cl,e)}translateZ(e){return this.translateOnAxis(Rl,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?$r.copy(e):$r.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(xr,$r,this.up):wi.lookAt($r,xr,this.up),this.quaternion.setFromRotationMatrix(wi),r&&(wi.extractRotation(r.matrixWorld),In.setFromRotationMatrix(wi),this.quaternion.premultiply(In.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ah)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pl)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Pl)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(wi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,e,rh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,sh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const n=t[i];(n.matrixWorldAutoUpdate===!0||e===!0)&&n.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let n=0,o=r.length;n<o;n++){const a=r[n];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function n(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=n(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const p=l[u];n(e.shapes,p)}else n(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(n(e.materials,this.material[l]));r.material=a}else r.material=n(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(n(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),p=o(e.shapes),h=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),p.length>0&&(i.shapes=p),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Tt.DefaultUp=new W(0,1,0);Tt.DefaultMatrixAutoUpdate=!0;Tt.DefaultMatrixWorldAutoUpdate=!0;class Rc extends Tt{constructor(){super();Q(this,"_updateHandler");Q(this,"_layoutHandler");Q(this,"_c",0);this._updateHandler=this._update.bind(this),Oi.instance.add(this._updateHandler),this._layoutHandler=this._resize.bind(this),Mn.instance.add(this._layoutHandler)}init(){}dispose(){Oi.instance.remove(this._updateHandler),this._updateHandler=null,Mn.instance.remove(this._layoutHandler),this._layoutHandler=null}_update(){this._c++}_resize(){}_getUni(t){return t.material.uniforms}_setUni(t,i,r){const n=this._getUni(t);n[i].value=r}_call(t){t!=null&&t()}}class oh extends Rc{constructor(){super();Q(this,"engine");Q(this,"render");Q(this,"_runner");Q(this,"lineBodies",[]);Q(this,"mouse");const t=Mt.instance.sw(),i=Mt.instance.sh();this.engine=Ve.exports.Engine.create(),this.engine.gravity.x=0,this.engine.gravity.y=0,this.render=Ve.exports.Render.create({element:document.body,engine:this.engine,options:{width:t,height:i,showAngleIndicator:!1,showCollisions:!1,showVelocity:!1,pixelRatio:pt.instance.FLG_SHOW_MATTERJS?1:.1}}),this.render.canvas.classList.add("l-matter"),pt.instance.FLG_SHOW_MATTERJS||this.render.canvas.classList.add("-hide"),this._makeLine(0),this._makeLine(1),this._makeLine(2),this._makeLine(3);const r=t*Mt.instance.val(.2,.1);this.mouse=Ve.exports.Bodies.circle(0,0,r,{isStatic:!0,render:{visible:pt.instance.FLG_SHOW_MATTERJS}}),Ve.exports.Composite.add(this.engine.world,[this.mouse]),Ve.exports.Body.setPosition(this.mouse,{x:9999,y:9999}),this._runner=Ve.exports.Runner.create(),this.start(),this._resize()}_makeLine(t){const i=Mt.instance.sw(),r=Mt.instance.sh(),n=t==0||t==2,o=.015,a=10,l=.2,u=n?i/a*l:r/a*l,c=Ve.exports.Composites.stack(0,0,a,1,0,0,(_,T)=>Ve.exports.Bodies.circle(_,T,u,{collisionFilter:{group:Ve.exports.Body.nextGroup(!0)},friction:.9,render:{fillStyle:"#060a19",visible:pt.instance.FLG_SHOW_MATTERJS}}));Ve.exports.Composites.chain(c,0,0,0,0,{stiffness:o,length:2,render:{visible:pt.instance.FLG_SHOW_MATTERJS}});const p=i*.5,h=r*.5;let f={x:0,y:0},g={x:0,y:0};t==0&&(f={x:p,y:h},g={x:i-p,y:h}),t==2&&(f={x:p,y:r-h},g={x:i-p,y:r-h}),t==1&&(f={x:i-p,y:h},g={x:i-p,y:r-h}),t==3&&(f={x:p,y:h},g={x:p,y:r-h}),Ve.exports.Composite.add(this.engine.world,[c,Ve.exports.Constraint.create({pointA:f,bodyB:c.bodies[0],pointB:{x:0,y:0},length:1,stiffness:1}),Ve.exports.Constraint.create({pointA:g,bodyB:c.bodies[c.bodies.length-1],pointB:{x:0,y:0},length:1,stiffness:1})]);const d=n?i/a:r/a;this.lineBodies.push([]);const m=this.lineBodies.length-1;c.bodies.forEach((_,T)=>{t==0&&Ve.exports.Body.setPosition(_,{x:d*T,y:0}),t==2&&Ve.exports.Body.setPosition(_,{x:d*T,y:r}),t==1&&Ve.exports.Body.setPosition(_,{x:i,y:d*T}),t==3&&Ve.exports.Body.setPosition(_,{x:0,y:d*T}),this.lineBodies[m].push(_)})}start(){Ve.exports.Render.run(this.render),Ve.exports.Runner.run(this._runner,this.engine)}stop(){Ve.exports.Render.stop(this.render),Ve.exports.Runner.stop(this._runner)}_update(){super._update();let t=_i.instance.x,i=_i.instance.y;this.engine.gravity.y=_i.instance.easeNormal.y,this.engine.gravity.x=_i.instance.easeNormal.x,pt.instance.USE_TOUCH&&_i.instance.isDown==!1&&(t=9999,i=9999),Ve.exports.Body.setPosition(this.mouse,{x:t,y:i})}_resize(){super._resize();const t=Mt.instance.sw(),i=Mt.instance.sh();this.render.canvas.width=t,this.render.canvas.height=i}}class Vr{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,n=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.length;l<u;l+=3){const c=e[l],p=e[l+1],h=e[l+2];c<t&&(t=c),p<i&&(i=p),h<r&&(r=h),c>n&&(n=c),p>o&&(o=p),h>a&&(a=h)}return this.min.set(t,i,r),this.max.set(n,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,n=-1/0,o=-1/0,a=-1/0;for(let l=0,u=e.count;l<u;l++){const c=e.getX(l),p=e.getY(l),h=e.getZ(l);c<t&&(t=c),p<i&&(i=p),h<r&&(r=h),c>n&&(n=c),p>o&&(o=p),h>a&&(a=h)}return this.min.set(t,i,r),this.max.set(n,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const n=i.attributes.position;for(let o=0,a=n.count;o<a;o++)un.fromBufferAttribute(n,o).applyMatrix4(e.matrixWorld),this.expandByPoint(un)}else i.boundingBox===null&&i.computeBoundingBox(),ta.copy(i.boundingBox),ta.applyMatrix4(e.matrixWorld),this.union(ta);const r=e.children;for(let n=0,o=r.length;n<o;n++)this.expandByObject(r[n],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,un),un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yr),Jr.subVectors(this.max,yr),Fn.subVectors(e.a,yr),On.subVectors(e.b,yr),Un.subVectors(e.c,yr),Gi.subVectors(On,Fn),Hi.subVectors(Un,On),fn.subVectors(Fn,Un);let t=[0,-Gi.z,Gi.y,0,-Hi.z,Hi.y,0,-fn.z,fn.y,Gi.z,0,-Gi.x,Hi.z,0,-Hi.x,fn.z,0,-fn.x,-Gi.y,Gi.x,0,-Hi.y,Hi.x,0,-fn.y,fn.x,0];return!ia(t,Fn,On,Un,Jr)||(t=[1,0,0,0,1,0,0,0,1],!ia(t,Fn,On,Un,Jr))?!1:(Qr.crossVectors(Gi,Hi),t=[Qr.x,Qr.y,Qr.z],ia(t,Fn,On,Un,Jr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return un.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(un).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const bi=[new W,new W,new W,new W,new W,new W,new W,new W],un=new W,ta=new Vr,Fn=new W,On=new W,Un=new W,Gi=new W,Hi=new W,fn=new W,yr=new W,Jr=new W,Qr=new W,hn=new W;function ia(s,e,t,i,r){for(let n=0,o=s.length-3;n<=o;n+=3){hn.fromArray(s,n);const a=r.x*Math.abs(hn.x)+r.y*Math.abs(hn.y)+r.z*Math.abs(hn.z),l=e.dot(hn),u=t.dot(hn),c=i.dot(hn);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const lh=new Vr,Sr=new W,na=new W;class co{constructor(e=new W,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):lh.setFromPoints(e).getCenter(i);let r=0;for(let n=0,o=e.length;n<o;n++)r=Math.max(r,i.distanceToSquared(e[n]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Sr.subVectors(e,this.center);const t=Sr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Sr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(na.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Sr.copy(e.center).add(na)),this.expandByPoint(Sr.copy(e.center).sub(na))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ra=new W,ch=new W,uh=new Xt;class mn{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ra.subVectors(i,t).cross(ch.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(ra),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const n=-(e.start.dot(this.normal)+this.constant)/r;return n<0||n>1?null:t.copy(i).multiplyScalar(n).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||uh.getNormalMatrix(e),r=this.coplanarPoint(ra).applyMatrix4(e),n=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(n),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nn=new co,es=new W;class Pc{constructor(e=new mn,t=new mn,i=new mn,r=new mn,n=new mn,o=new mn){this.planes=[e,t,i,r,n,o]}set(e,t,i,r,n,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(n),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],n=i[1],o=i[2],a=i[3],l=i[4],u=i[5],c=i[6],p=i[7],h=i[8],f=i[9],g=i[10],d=i[11],m=i[12],_=i[13],T=i[14],E=i[15];return t[0].setComponents(a-r,p-l,d-h,E-m).normalize(),t[1].setComponents(a+r,p+l,d+h,E+m).normalize(),t[2].setComponents(a+n,p+u,d+f,E+_).normalize(),t[3].setComponents(a-n,p-u,d-f,E-_).normalize(),t[4].setComponents(a-o,p-c,d-g,E-T).normalize(),t[5].setComponents(a+o,p+c,d+g,E+T).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Nn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Nn)}intersectsSprite(e){return Nn.center.set(0,0,0),Nn.radius=.7071067811865476,Nn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let n=0;n<6;n++)if(t[n].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(es.x=r.normal.x>0?e.max.x:e.min.x,es.y=r.normal.y>0?e.max.y:e.min.y,es.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(es)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ze{constructor(e=0,t=0){ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),n=this.x-e.x,o=this.y-e.y;return this.x=n*i-o*r+e.x,this.y=n*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class vt{constructor(e=0,t=0,i=0,r=1){vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,n=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*n,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*n,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*n,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*n,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,n;const l=e.elements,u=l[0],c=l[4],p=l[8],h=l[1],f=l[5],g=l[9],d=l[2],m=l[6],_=l[10];if(Math.abs(c-h)<.01&&Math.abs(p-d)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+h)<.1&&Math.abs(p+d)<.1&&Math.abs(g+m)<.1&&Math.abs(u+f+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(u+1)/2,v=(f+1)/2,x=(_+1)/2,S=(c+h)/4,M=(p+d)/4,y=(g+m)/4;return E>v&&E>x?E<.01?(i=0,r=.707106781,n=.707106781):(i=Math.sqrt(E),r=S/i,n=M/i):v>x?v<.01?(i=.707106781,r=0,n=.707106781):(r=Math.sqrt(v),i=S/r,n=y/r):x<.01?(i=.707106781,r=.707106781,n=0):(n=Math.sqrt(x),i=M/n,r=y/n),this.set(i,r,n,t),this}let T=Math.sqrt((m-g)*(m-g)+(p-d)*(p-d)+(h-c)*(h-c));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(p-d)/T,this.z=(h-c)/T,this.w=Math.acos((u+f+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}function Dc(){let s=null,e=!1,t=null,i=null;function r(n,o){t(n,o),i=s.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=s.requestAnimationFrame(r),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(n){t=n},setContext:function(n){s=n}}}function fh(s,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const p=u.array,h=u.usage,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,p,h),u.onUploadCallback();let g;if(p instanceof Float32Array)g=s.FLOAT;else if(p instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)g=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)g=s.SHORT;else if(p instanceof Uint32Array)g=s.UNSIGNED_INT;else if(p instanceof Int32Array)g=s.INT;else if(p instanceof Int8Array)g=s.BYTE;else if(p instanceof Uint8Array)g=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)g=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:f,type:g,bytesPerElement:p.BYTES_PER_ELEMENT,version:u.version}}function n(u,c,p){const h=c.array,f=c.updateRange;s.bindBuffer(p,u),f.count===-1?s.bufferSubData(p,0,h):(t?s.bufferSubData(p,f.offset*h.BYTES_PER_ELEMENT,h,f.offset,f.count):s.bufferSubData(p,f.offset*h.BYTES_PER_ELEMENT,h.subarray(f.offset,f.offset+f.count)),f.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(s.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const p=i.get(u);p===void 0?i.set(u,r(u,c)):p.version<u.version&&(n(p.buffer,u,c),p.version=u.version)}return{get:o,remove:a,update:l}}const et=new W,ts=new ze;class xi{constructor(e,t,i){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i===!0,this.usage=Sl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,n=this.itemSize;r<n;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ts.fromBufferAttribute(this,t),ts.applyMatrix3(e),this.setXY(t,ts.x,ts.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)et.fromBufferAttribute(this,t),et.applyMatrix3(e),this.setXYZ(t,et.x,et.y,et.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)et.fromBufferAttribute(this,t),et.applyMatrix4(e),this.setXYZ(t,et.x,et.y,et.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)et.fromBufferAttribute(this,t),et.applyNormalMatrix(e),this.setXYZ(t,et.x,et.y,et.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)et.fromBufferAttribute(this,t),et.transformDirection(e),this.setXYZ(t,et.x,et.y,et.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yr(t,this.array)),t}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yr(t,this.array)),t}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yr(t,this.array)),t}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),r=zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,n){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),r=zt(r,this.array),n=zt(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=n,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Sl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Lc extends xi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ic extends xi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class yi extends xi{constructor(e,t,i){super(new Float32Array(e),t,i)}}function Fc(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Es(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}let hh=0;const $t=new xt,sa=new Tt,Bn=new W,Gt=new Vr,Mr=new Vr,dt=new W;class rn extends gr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hh++}),this.uuid=kr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fc(e)?Ic:Lc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const n=new Xt().getNormalMatrix(e);i.applyNormalMatrix(n),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $t.makeRotationFromQuaternion(e),this.applyMatrix4($t),this}rotateX(e){return $t.makeRotationX(e),this.applyMatrix4($t),this}rotateY(e){return $t.makeRotationY(e),this.applyMatrix4($t),this}rotateZ(e){return $t.makeRotationZ(e),this.applyMatrix4($t),this}translate(e,t,i){return $t.makeTranslation(e,t,i),this.applyMatrix4($t),this}scale(e,t,i){return $t.makeScale(e,t,i),this.applyMatrix4($t),this}lookAt(e){return sa.lookAt(e),sa.updateMatrix(),this.applyMatrix4(sa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bn).negate(),this.translate(Bn.x,Bn.y,Bn.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const n=e[i];t.push(n.x,n.y,n.z||0)}return this.setAttribute("position",new yi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const n=t[i];Gt.setFromBufferAttribute(n),this.morphTargetsRelative?(dt.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(dt),dt.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(dt)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new co);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let n=0,o=t.length;n<o;n++){const a=t[n];Mr.setFromBufferAttribute(a),this.morphTargetsRelative?(dt.addVectors(Gt.min,Mr.min),Gt.expandByPoint(dt),dt.addVectors(Gt.max,Mr.max),Gt.expandByPoint(dt)):(Gt.expandByPoint(Mr.min),Gt.expandByPoint(Mr.max))}Gt.getCenter(i);let r=0;for(let n=0,o=e.count;n<o;n++)dt.fromBufferAttribute(e,n),r=Math.max(r,i.distanceToSquared(dt));if(t)for(let n=0,o=t.length;n<o;n++){const a=t[n],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)dt.fromBufferAttribute(a,u),l&&(Bn.fromBufferAttribute(e,u),dt.add(Bn)),r=Math.max(r,i.distanceToSquared(dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,n=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xi(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let b=0;b<a;b++)u[b]=new W,c[b]=new W;const p=new W,h=new W,f=new W,g=new ze,d=new ze,m=new ze,_=new W,T=new W;function E(b,A,I){p.fromArray(r,b*3),h.fromArray(r,A*3),f.fromArray(r,I*3),g.fromArray(o,b*2),d.fromArray(o,A*2),m.fromArray(o,I*2),h.sub(p),f.sub(p),d.sub(g),m.sub(g);const L=1/(d.x*m.y-m.x*d.y);!isFinite(L)||(_.copy(h).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(L),T.copy(f).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(L),u[b].add(_),u[A].add(_),u[I].add(_),c[b].add(T),c[A].add(T),c[I].add(T))}let v=this.groups;v.length===0&&(v=[{start:0,count:i.length}]);for(let b=0,A=v.length;b<A;++b){const I=v[b],L=I.start,D=I.count;for(let F=L,N=L+D;F<N;F+=3)E(i[F+0],i[F+1],i[F+2])}const x=new W,S=new W,M=new W,y=new W;function w(b){M.fromArray(n,b*3),y.copy(M);const A=u[b];x.copy(A),x.sub(M.multiplyScalar(M.dot(A))).normalize(),S.crossVectors(y,A);const L=S.dot(c[b])<0?-1:1;l[b*4]=x.x,l[b*4+1]=x.y,l[b*4+2]=x.z,l[b*4+3]=L}for(let b=0,A=v.length;b<A;++b){const I=v[b],L=I.start,D=I.count;for(let F=L,N=L+D;F<N;F+=3)w(i[F+0]),w(i[F+1]),w(i[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new xi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const r=new W,n=new W,o=new W,a=new W,l=new W,u=new W,c=new W,p=new W;if(e)for(let h=0,f=e.count;h<f;h+=3){const g=e.getX(h+0),d=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),n.fromBufferAttribute(t,d),o.fromBufferAttribute(t,m),c.subVectors(o,n),p.subVectors(r,n),c.cross(p),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,d),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(d,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,f=t.count;h<f;h+=3)r.fromBufferAttribute(t,h+0),n.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),c.subVectors(o,n),p.subVectors(r,n),c.cross(p),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)dt.fromBufferAttribute(e,t),dt.normalize(),e.setXYZ(t,dt.x,dt.y,dt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,p=a.normalized,h=new u.constructor(l.length*c);let f=0,g=0;for(let d=0,m=l.length;d<m;d++){a.isInterleavedBufferAttribute?f=l[d]*a.data.stride+a.offset:f=l[d]*c;for(let _=0;_<c;_++)h[g++]=u[f++]}return new xi(h,c,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new rn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const n=this.morphAttributes;for(const a in n){const l=[],u=n[a];for(let c=0,p=u.length;c<p;c++){const h=u[c],f=e(h,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let n=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let p=0,h=u.length;p<h;p++){const f=u[p];c.push(f.toJSON(e.data))}c.length>0&&(r[l]=c,n=!0)}n&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const n=e.morphAttributes;for(const u in n){const c=[],p=n[u];for(let h=0,f=p.length;h<f;h++)c.push(p[h].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const p=o[u];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wr extends rn{constructor(e=1,t=1,i=1,r=1,n=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:n,depthSegments:o};const a=this;r=Math.floor(r),n=Math.floor(n),o=Math.floor(o);const l=[],u=[],c=[],p=[];let h=0,f=0;g("z","y","x",-1,-1,i,t,e,o,n,0),g("z","y","x",1,-1,i,t,-e,o,n,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,n,4),g("x","y","z",-1,-1,e,t,-i,r,n,5),this.setIndex(l),this.setAttribute("position",new yi(u,3)),this.setAttribute("normal",new yi(c,3)),this.setAttribute("uv",new yi(p,2));function g(d,m,_,T,E,v,x,S,M,y,w){const b=v/M,A=x/y,I=v/2,L=x/2,D=S/2,F=M+1,N=y+1;let H=0,z=0;const X=new W;for(let K=0;K<N;K++){const k=K*A-L;for(let V=0;V<F;V++){const $=V*b-I;X[d]=$*T,X[m]=k*E,X[_]=D,u.push(X.x,X.y,X.z),X[d]=0,X[m]=0,X[_]=S>0?1:-1,c.push(X.x,X.y,X.z),p.push(V/M),p.push(1-K/y),H+=1}}for(let K=0;K<y;K++)for(let k=0;k<M;k++){const V=h+k+F*K,$=h+k+F*(K+1),ee=h+(k+1)+F*(K+1),te=h+(k+1)+F*K;l.push(V,$,te),l.push($,ee,te),z+=6}a.addGroup(f,z,w),f+=z,h+=H}}static fromJSON(e){return new Wr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Xr extends rn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const n=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,p=e/a,h=t/l,f=[],g=[],d=[],m=[];for(let _=0;_<c;_++){const T=_*h-o;for(let E=0;E<u;E++){const v=E*p-n;g.push(v,-T,0),d.push(0,0,1),m.push(E/a),m.push(1-_/l)}}for(let _=0;_<l;_++)for(let T=0;T<a;T++){const E=T+u*_,v=T+u*(_+1),x=T+1+u*(_+1),S=T+1+u*_;f.push(E,v,S),f.push(v,x,S)}this.setIndex(f),this.setAttribute("position",new yi(g,3)),this.setAttribute("normal",new yi(d,3)),this.setAttribute("uv",new yi(m,2))}static fromJSON(e){return new Xr(e.width,e.height,e.widthSegments,e.heightSegments)}}let dh=0;class Fs extends gr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dh++}),this.uuid=kr(),this.name="",this.type="Material",this.blending=Qn,this.side=rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Mc,this.blendDst=Ec,this.blendEquation=Yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=za,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=js,this.stencilZFail=js,this.stencilZPass=js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Qn&&(i.blending=this.blending),this.side!==rr&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function r(n){const o=[];for(const a in n){const l=n[a];delete l.metadata,o.push(l)}return o}if(t){const n=r(e.textures),o=r(e.images);n.length>0&&(i.textures=n),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let n=0;n!==r;++n)i[n]=t[n].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}function lr(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const r=s[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Rt(s){const e={};for(let t=0;t<s.length;t++){const i=lr(s[t]);for(const r in i)e[r]=i[r]}return e}function ph(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Oc(s){return s.getRenderTarget()===null&&s.outputEncoding===We?mi:Ir}const mh={clone:lr,merge:Rt},gh=`
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`,_h=`
void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}
`;class Ni extends Fs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gh,this.fragmentShader=_h,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=lr(e.uniforms),this.uniformsGroups=ph(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}const Ai=new W,aa=new W,is=new W,Vi=new W,oa=new W,ns=new W,la=new W;class vh{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ai.copy(this.direction).multiplyScalar(t).add(this.origin),Ai.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){aa.copy(e).add(t).multiplyScalar(.5),is.copy(t).sub(e).normalize(),Vi.copy(this.origin).sub(aa);const n=e.distanceTo(t)*.5,o=-this.direction.dot(is),a=Vi.dot(this.direction),l=-Vi.dot(is),u=Vi.lengthSq(),c=Math.abs(1-o*o);let p,h,f,g;if(c>0)if(p=o*l-a,h=o*a-l,g=n*c,p>=0)if(h>=-g)if(h<=g){const d=1/c;p*=d,h*=d,f=p*(p+o*h+2*a)+h*(o*p+h+2*l)+u}else h=n,p=Math.max(0,-(o*h+a)),f=-p*p+h*(h+2*l)+u;else h=-n,p=Math.max(0,-(o*h+a)),f=-p*p+h*(h+2*l)+u;else h<=-g?(p=Math.max(0,-(-o*n+a)),h=p>0?-n:Math.min(Math.max(-n,-l),n),f=-p*p+h*(h+2*l)+u):h<=g?(p=0,h=Math.min(Math.max(-n,-l),n),f=h*(h+2*l)+u):(p=Math.max(0,-(o*n+a)),h=p>0?n:Math.min(Math.max(-n,-l),n),f=-p*p+h*(h+2*l)+u);else h=o>0?-n:n,p=Math.max(0,-(o*h+a)),f=-p*p+h*(h+2*l)+u;return i&&i.copy(this.direction).multiplyScalar(p).add(this.origin),r&&r.copy(is).multiplyScalar(h).add(aa),f}intersectSphere(e,t){Ai.subVectors(e.center,this.origin);const i=Ai.dot(this.direction),r=Ai.dot(Ai)-i*i,n=e.radius*e.radius;if(r>n)return null;const o=Math.sqrt(n-r),a=i-o,l=i+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,n,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,p=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(n=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(n=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||n>r||((n>i||isNaN(i))&&(i=n),(o<r||isNaN(r))&&(r=o),p>=0?(a=(e.min.z-h.z)*p,l=(e.max.z-h.z)*p):(a=(e.max.z-h.z)*p,l=(e.min.z-h.z)*p),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ai)!==null}intersectTriangle(e,t,i,r,n){oa.subVectors(t,e),ns.subVectors(i,e),la.crossVectors(oa,ns);let o=this.direction.dot(la),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vi.subVectors(this.origin,e);const l=a*this.direction.dot(ns.crossVectors(Vi,ns));if(l<0)return null;const u=a*this.direction.dot(oa.cross(Vi));if(u<0||l+u>o)return null;const c=-a*Vi.dot(la);return c<0?null:this.at(c/o,n)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}const fi=new W,Ci=new W,ca=new W,Ri=new W,zn=new W,kn=new W,Dl=new W,ua=new W,fa=new W,ha=new W;class Li{constructor(e=new W,t=new W,i=new W){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),fi.subVectors(e,t),r.cross(fi);const n=r.lengthSq();return n>0?r.multiplyScalar(1/Math.sqrt(n)):r.set(0,0,0)}static getBarycoord(e,t,i,r,n){fi.subVectors(r,t),Ci.subVectors(i,t),ca.subVectors(e,t);const o=fi.dot(fi),a=fi.dot(Ci),l=fi.dot(ca),u=Ci.dot(Ci),c=Ci.dot(ca),p=o*u-a*a;if(p===0)return n.set(-2,-1,-1);const h=1/p,f=(u*l-a*c)*h,g=(o*c-a*l)*h;return n.set(1-f-g,g,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ri),Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getUV(e,t,i,r,n,o,a,l){return this.getBarycoord(e,t,i,r,Ri),l.set(0,0),l.addScaledVector(n,Ri.x),l.addScaledVector(o,Ri.y),l.addScaledVector(a,Ri.z),l}static isFrontFacing(e,t,i,r){return fi.subVectors(i,t),Ci.subVectors(e,t),fi.cross(Ci).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fi.subVectors(this.c,this.b),Ci.subVectors(this.a,this.b),fi.cross(Ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Li.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,n){return Li.getUV(e,this.a,this.b,this.c,t,i,r,n)}containsPoint(e){return Li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,n=this.c;let o,a;zn.subVectors(r,i),kn.subVectors(n,i),ua.subVectors(e,i);const l=zn.dot(ua),u=kn.dot(ua);if(l<=0&&u<=0)return t.copy(i);fa.subVectors(e,r);const c=zn.dot(fa),p=kn.dot(fa);if(c>=0&&p<=c)return t.copy(r);const h=l*p-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(zn,o);ha.subVectors(e,n);const f=zn.dot(ha),g=kn.dot(ha);if(g>=0&&f<=g)return t.copy(n);const d=f*u-l*g;if(d<=0&&u>=0&&g<=0)return a=u/(u-g),t.copy(i).addScaledVector(kn,a);const m=c*g-f*p;if(m<=0&&p-c>=0&&f-g>=0)return Dl.subVectors(n,r),a=(p-c)/(p-c+(f-g)),t.copy(r).addScaledVector(Dl,a);const _=1/(m+d+h);return o=d*_,a=h*_,t.copy(i).addScaledVector(zn,o).addScaledVector(kn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class uo extends Fs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Tc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ll=new xt,Gn=new vh,da=new co,Wi=new W,Xi=new W,qi=new W,pa=new W,ma=new W,ga=new W,rs=new W,ss=new W,as=new W,os=new ze,ls=new ze,cs=new ze,_a=new W,us=new W;class di extends Tt{constructor(e=new rn,t=new uo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,o=r.length;n<o;n++){const a=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}raycast(e,t){const i=this.geometry,r=this.material,n=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),da.copy(i.boundingSphere),da.applyMatrix4(n),e.ray.intersectsSphere(da)===!1)||(Ll.copy(n).invert(),Gn.copy(e.ray).applyMatrix4(Ll),i.boundingBox!==null&&Gn.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,l=i.attributes.position,u=i.morphAttributes.position,c=i.morphTargetsRelative,p=i.attributes.uv,h=i.attributes.uv2,f=i.groups,g=i.drawRange;if(a!==null)if(Array.isArray(r))for(let d=0,m=f.length;d<m;d++){const _=f[d],T=r[_.materialIndex],E=Math.max(_.start,g.start),v=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let x=E,S=v;x<S;x+=3){const M=a.getX(x),y=a.getX(x+1),w=a.getX(x+2);o=fs(this,T,e,Gn,l,u,c,p,h,M,y,w),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const d=Math.max(0,g.start),m=Math.min(a.count,g.start+g.count);for(let _=d,T=m;_<T;_+=3){const E=a.getX(_),v=a.getX(_+1),x=a.getX(_+2);o=fs(this,r,e,Gn,l,u,c,p,h,E,v,x),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let d=0,m=f.length;d<m;d++){const _=f[d],T=r[_.materialIndex],E=Math.max(_.start,g.start),v=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let x=E,S=v;x<S;x+=3){const M=x,y=x+1,w=x+2;o=fs(this,T,e,Gn,l,u,c,p,h,M,y,w),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const d=Math.max(0,g.start),m=Math.min(l.count,g.start+g.count);for(let _=d,T=m;_<T;_+=3){const E=_,v=_+1,x=_+2;o=fs(this,r,e,Gn,l,u,c,p,h,E,v,x),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function xh(s,e,t,i,r,n,o,a){let l;if(e.side===ai?l=i.intersectTriangle(o,n,r,!0,a):l=i.intersectTriangle(r,n,o,e.side!==Ii,a),l===null)return null;us.copy(a),us.applyMatrix4(s.matrixWorld);const u=t.ray.origin.distanceTo(us);return u<t.near||u>t.far?null:{distance:u,point:us.clone(),object:s}}function fs(s,e,t,i,r,n,o,a,l,u,c,p){Wi.fromBufferAttribute(r,u),Xi.fromBufferAttribute(r,c),qi.fromBufferAttribute(r,p);const h=s.morphTargetInfluences;if(n&&h){rs.set(0,0,0),ss.set(0,0,0),as.set(0,0,0);for(let g=0,d=n.length;g<d;g++){const m=h[g],_=n[g];m!==0&&(pa.fromBufferAttribute(_,u),ma.fromBufferAttribute(_,c),ga.fromBufferAttribute(_,p),o?(rs.addScaledVector(pa,m),ss.addScaledVector(ma,m),as.addScaledVector(ga,m)):(rs.addScaledVector(pa.sub(Wi),m),ss.addScaledVector(ma.sub(Xi),m),as.addScaledVector(ga.sub(qi),m)))}Wi.add(rs),Xi.add(ss),qi.add(as)}s.isSkinnedMesh&&(s.boneTransform(u,Wi),s.boneTransform(c,Xi),s.boneTransform(p,qi));const f=xh(s,e,t,i,Wi,Xi,qi,_a);if(f){a&&(os.fromBufferAttribute(a,u),ls.fromBufferAttribute(a,c),cs.fromBufferAttribute(a,p),f.uv=Li.getUV(_a,Wi,Xi,qi,os,ls,cs,new ze)),l&&(os.fromBufferAttribute(l,u),ls.fromBufferAttribute(l,c),cs.fromBufferAttribute(l,p),f.uv2=Li.getUV(_a,Wi,Xi,qi,os,ls,cs,new ze));const g={a:u,b:c,c:p,normal:new W,materialIndex:0};Li.getNormal(Wi,Xi,qi,g.normal),f.face=g}return f}const yh=`
#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, vUv ).g;

#endif
`,Sh=`
#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`,Mh=`
#ifdef USE_ALPHATEST

	if ( diffuseColor.a < alphaTest ) discard;

#endif
`,Eh=`
#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif
`,Th=`
#ifdef USE_AOMAP

	// reads channel R, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;

	reflectedLight.indirectDiffuse *= ambientOcclusion;

	#if defined( USE_ENVMAP ) && defined( STANDARD )

		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );

		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );

	#endif

#endif
`,wh=`
#ifdef USE_AOMAP

	uniform sampler2D aoMap;
	uniform float aoMapIntensity;

#endif
`,bh=`
vec3 transformed = vec3( position );
`,Ah=`
vec3 objectNormal = vec3( normal );

#ifdef USE_TANGENT

	vec3 objectTangent = vec3( tangent.xyz );

#endif
`,Ch=`

vec3 BRDF_Lambert( const in vec3 diffuseColor ) {

	return RECIPROCAL_PI * diffuseColor;

} // validated

vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {

	// Original approximation by Christophe Schlick '94
	// float fresnel = pow( 1.0 - dotVH, 5.0 );

	// Optimized variant (presented by Epic at SIGGRAPH '13)
	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );

	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );

} // validated

float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {

	// Original approximation by Christophe Schlick '94
	// float fresnel = pow( 1.0 - dotVH, 5.0 );

	// Optimized variant (presented by Epic at SIGGRAPH '13)
	// https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );

	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );

} // validated

vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );

    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}

// Moving Frostbite to Physically Based Rendering 3.0 - page 12, listing 2
// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {

	float a2 = pow2( alpha );

	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );

	return 0.5 / max( gv + gl, EPSILON );

}

// Microfacet Models for Refraction through Rough Surfaces - equation (33)
// http://graphicrants.blogspot.com/2013/08/specular-brdf-reference.html
// alpha is "roughness squared" in Disney’s reparameterization
float D_GGX( const in float alpha, const in float dotNH ) {

	float a2 = pow2( alpha );

	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0; // avoid alpha = 0 with dotNH = 1

	return RECIPROCAL_PI * a2 / pow2( denom );

}

// GGX Distribution, Schlick Fresnel, GGX_SmithCorrelated Visibility
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {

	float alpha = pow2( roughness ); // UE4's roughness

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

#ifdef USE_IRIDESCENCE

	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {

		float alpha = pow2( roughness ); // UE4's roughness

		vec3 halfDir = normalize( lightDir + viewDir );

		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );

		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );

		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );

		float D = D_GGX( alpha, dotNH );

		return F * ( V * D );

	}

#endif

// Rect Area Light

// Real-Time Polygonal-Light Shading with Linearly Transformed Cosines
// by Eric Heitz, Jonathan Dupuy, Stephen Hill and David Neubelt
// code: https://github.com/selfshadow/ltc_code/

vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;

	float dotNV = saturate( dot( N, V ) );

	// texture parameterized by sqrt( GGX alpha ) and sqrt( 1 - cos( theta ) )
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );

	uv = uv * LUT_SCALE + LUT_BIAS;

	return uv;

}

float LTC_ClippedSphereFormFactor( const in vec3 f ) {

	// Real-Time Area Lighting: a Journey from Research to Production (p.102)
	// An approximation of the form factor of a horizon-clipped rectangle.

	float l = length( f );

	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );

}

vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {

	float x = dot( v1, v2 );

	float y = abs( x );

	// rational polynomial approximation to theta / sin( theta ) / 2PI
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;

	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;

	return cross( v1, v2 ) * theta_sintheta;

}

vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {

	// bail if point is on back side of plane of light
	// assumes ccw winding order of light vertices
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );

	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );

	// construct orthonormal basis around N
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 ); // negated from paper; possibly due to a different handedness of world coordinate system

	// compute transform
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );

	// transform rect
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );

	// project rect onto sphere
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );

	// calculate vector form factor
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );

	// adjust for horizon clipping
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );

/*
	// alternate method of adjusting for horizon clipping (see referece)
	// refactoring required
	float len = length( vectorFormFactor );
	float z = vectorFormFactor.z / len;

	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;

	// tabulated horizon-clipped sphere, apparently...
	vec2 uv = vec2( z * 0.5 + 0.5, len );
	uv = uv * LUT_SCALE + LUT_BIAS;

	float scale = texture2D( ltc_2, uv ).w;

	float result = len * scale;
*/

	return vec3( result );

}

// End Rect Area Light


float G_BlinnPhong_Implicit( /* const in float dotNL, const in float dotNV */ ) {

	// geometry term is (n dot l)(n dot v) / 4(n dot l)(n dot v)
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

	float G = G_BlinnPhong_Implicit( /* dotNL, dotNV */ );

	float D = D_BlinnPhong( shininess, dotNH );

	return F * ( G * D );

} // validated

#if defined( USE_SHEEN )

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs
float D_Charlie( float roughness, float dotNH ) {

	float alpha = pow2( roughness );

	// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF"
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 ); // 2^(-14/2), so sin2h^2 > 0 in fp16

	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );

}

// https://github.com/google/filament/blob/master/shaders/src/brdf.fs
float V_Neubelt( float dotNV, float dotNL ) {

	// Neubelt and Pettineo 2013, "Crafting a Next-gen Material Pipeline for The Order: 1886"
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
`,Rh=`

#ifdef USE_IRIDESCENCE

	// XYZ to linear-sRGB color space
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);

	// Assume air interface for top
	// Note: We don't handle the case fresnel0 == 1
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {

		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );

	}

	// Conversion FO/IOR
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {

		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );

	}

	// ior is a value between 1.0 and 3.0. 1.0 is air interface
	float IorToFresnel0( float transmittedIor, float incidentIor ) {

		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));

	}

	// Fresnel equations for dielectric/dielectric interfaces.
	// Ref: https://belcour.github.io/blog/research/2017/05/01/brdf-thin-film.html
	// Evaluation XYZ sensitivity curves in Fourier space
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

		// Force iridescenceIOR -> outsideIOR when thinFilmThickness -> 0.0
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		// Evaluate the cosTheta on the base layer (Snell law)
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );

		// Handle TIR:
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {

			 return vec3( 1.0 );

		}

		float cosTheta2 = sqrt( cosTheta2Sq );

		// First interface
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;

		// Second interface
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) ); // guard against 1.0
		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;

		// Phase shift
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;

		// Compound terms
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );

		// Reflectance term for m = 0 (DC term amplitude)
		vec3 C0 = R12 + Rs;
		I = C0;

		// Reflectance term for m > 0 (pairs of diracs)
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {

			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;

		}

		// Since out of gamut colors might be produced, negative color values are clamped to 0.
		return max( I, vec3( 0.0 ) );

	}

#endif

`,Ph=`
#ifdef USE_BUMPMAP

	uniform sampler2D bumpMap;
	uniform float bumpScale;

	// Bump Mapping Unparametrized Surfaces on the GPU by Morten S. Mikkelsen
	// https://mmikk.github.io/papers3d/mm_sfgrad_bump.pdf

	// Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)

	vec2 dHdxy_fwd() {

		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );

		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;

		return vec2( dBx, dBy );

	}

	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {

		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm; // normalized

		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );

		float fDet = dot( vSigmaX, R1 ) * faceDirection;

		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );

	}

#endif
`,Dh=`
#if NUM_CLIPPING_PLANES > 0

	vec4 plane;

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
`,Lh=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];

#endif
`,Ih=`
#if NUM_CLIPPING_PLANES > 0

	varying vec3 vClipPosition;

#endif
`,Fh=`
#if NUM_CLIPPING_PLANES > 0

	vClipPosition = - mvPosition.xyz;

#endif
`,Oh=`
#if defined( USE_COLOR_ALPHA )

	diffuseColor *= vColor;

#elif defined( USE_COLOR )

	diffuseColor.rgb *= vColor;

#endif
`,Uh=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR )

	varying vec3 vColor;

#endif
`,Nh=`
#if defined( USE_COLOR_ALPHA )

	varying vec4 vColor;

#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )

	varying vec3 vColor;

#endif
`,Bh=`
#if defined( USE_COLOR_ALPHA )

	vColor = vec4( 1.0 );

#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )

	vColor = vec3( 1.0 );

#endif

#ifdef USE_COLOR

	vColor *= color;

#endif

#ifdef USE_INSTANCING_COLOR

	vColor.xyz *= instanceColor.xyz;

#endif
`,zh=`
#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6

#ifndef saturate
// <tonemapping_pars_fragment> may have defined saturate() already
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )

float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }

// expects values in the range of [0,1]x[0,1], returns values in the [0,1] range.
// do not collapse into a single function per: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
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

struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};

vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

}

vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {

	// dir can be either a direction vector or a normal vector
	// upper-left 3x3 of matrix is assumed to be orthogonal

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

	// assumes rgb is in linear color space with sRGB primaries and D65 white point

	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );

	return dot( weights, rgb );

}

bool isPerspectiveMatrix( mat4 m ) {

	return m[ 2 ][ 3 ] == - 1.0;

}

vec2 equirectUv( in vec3 dir ) {

	// dir is assumed to be unit length

	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;

	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;

	return vec2( u, v );

}
`,kh=`
#ifdef ENVMAP_TYPE_CUBE_UV

	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0

	// These shader functions convert between the UV coordinates of a single face of
	// a cubemap, the 0-5 integer index of a cube face, and the direction vector for
	// sampling a textureCube (not generally normalized ).

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

	// RH coordinate system; PMREM face-indexing convention
	vec2 getUV( vec3 direction, float face ) {

		vec2 uv;

		if ( face == 0.0 ) {

			uv = vec2( direction.z, direction.y ) / abs( direction.x ); // pos x

		} else if ( face == 1.0 ) {

			uv = vec2( - direction.x, - direction.z ) / abs( direction.y ); // pos y

		} else if ( face == 2.0 ) {

			uv = vec2( - direction.x, direction.y ) / abs( direction.z ); // pos z

		} else if ( face == 3.0 ) {

			uv = vec2( - direction.z, direction.y ) / abs( direction.x ); // neg x

		} else if ( face == 4.0 ) {

			uv = vec2( - direction.x, direction.z ) / abs( direction.y ); // neg y

		} else {

			uv = vec2( direction.x, direction.y ) / abs( direction.z ); // neg z

		}

		return 0.5 * ( uv + 1.0 );

	}

	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {

		float face = getFace( direction );

		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );

		mipInt = max( mipInt, cubeUV_minMipLevel );

		float faceSize = exp2( mipInt );

		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;

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

			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb; // disable anisotropic filtering

		#else

			return texture2D( envMap, uv ).rgb;

		#endif

	}

	// These defines must match with PMREMGenerator

	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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

			mip = - 2.0 * log2( 1.16 * roughness ); // 1.16 = 1.79^0.25
		}

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

#endif
`,Gh=`
vec3 transformedNormal = objectNormal;

#ifdef USE_INSTANCING

	// this is in lieu of a per-instance normal-matrix
	// shear transforms in the instance matrix are not supported

	mat3 m = mat3( instanceMatrix );

	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );

	transformedNormal = m * transformedNormal;

#endif

transformedNormal = normalMatrix * transformedNormal;

#ifdef FLIP_SIDED

	transformedNormal = - transformedNormal;

#endif

#ifdef USE_TANGENT

	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;

	#ifdef FLIP_SIDED

		transformedTangent = - transformedTangent;

	#endif

#endif
`,Hh=`
#ifdef USE_DISPLACEMENTMAP

	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;

#endif
`,Vh=`
#ifdef USE_DISPLACEMENTMAP

	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );

#endif
`,Wh=`
#ifdef USE_EMISSIVEMAP

	vec4 emissiveColor = texture2D( emissiveMap, vUv );

	totalEmissiveRadiance *= emissiveColor.rgb;

#endif
`,Xh=`
#ifdef USE_EMISSIVEMAP

	uniform sampler2D emissiveMap;

#endif
`,qh=`
gl_FragColor = linearToOutputTexel( gl_FragColor );
`,Yh=`

vec4 LinearToLinear( in vec4 value ) {
	return value;
}

vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}

`,Zh=`
#ifdef USE_ENVMAP

	#ifdef ENV_WORLDPOS

		vec3 cameraToFrag;

		if ( isOrthographic ) {

			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );

		} else {

			cameraToFrag = normalize( vWorldPosition - cameraPosition );

		}

		// Transforming Normal Vectors with the Inverse Transformation
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

		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );

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

#endif
`,Kh=`
#ifdef USE_ENVMAP

	uniform float envMapIntensity;
	uniform float flipEnvMap;

	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif
`,jh=`
#ifdef USE_ENVMAP

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

#endif
`,$h=`
#ifdef USE_ENVMAP

	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )

		#define ENV_WORLDPOS

	#endif

	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;

	#else

		varying vec3 vReflect;
		uniform float refractionRatio;

	#endif

#endif
`,Jh=`
#ifdef USE_ENVMAP

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

#endif
`,Qh=`
#ifdef USE_FOG

	vFogDepth = - mvPosition.z;

#endif
`,ed=`
#ifdef USE_FOG

	varying float vFogDepth;

#endif
`,td=`
#ifdef USE_FOG

	#ifdef FOG_EXP2

		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );

	#else

		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );

	#endif

	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );

#endif
`,id=`
#ifdef USE_FOG

	uniform vec3 fogColor;
	varying float vFogDepth;

	#ifdef FOG_EXP2

		uniform float fogDensity;

	#else

		uniform float fogNear;
		uniform float fogFar;

	#endif

#endif
`,nd=`

#ifdef USE_GRADIENTMAP

	uniform sampler2D gradientMap;

#endif

vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {

	// dotNL will be from -1.0 to 1.0
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );

	#ifdef USE_GRADIENTMAP

		return vec3( texture2D( gradientMap, coord ).r );

	#else

		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );

	#endif

}
`,rd=`
#ifdef USE_LIGHTMAP

	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;

	reflectedLight.indirectDiffuse += lightMapIrradiance;

#endif
`,sd=`
#ifdef USE_LIGHTMAP

	uniform sampler2D lightMap;
	uniform float lightMapIntensity;

#endif
`,ad=`
LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;
`,od=`
varying vec3 vViewPosition;

struct LambertMaterial {

	vec3 diffuseColor;
	float specularStrength;

};

void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
`,ld=`
uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];

// get the irradiance (radiance convolved with cosine lobe) at the point 'normal' on the unit sphere
// source: https://graphics.stanford.edu/papers/envmap/envmap.pdf
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {

	// normal is assumed to have unit length

	float x = normal.x, y = normal.y, z = normal.z;

	// band 0
	vec3 result = shCoefficients[ 0 ] * 0.886227;

	// band 1
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;

	// band 2
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

	#if defined ( PHYSICALLY_CORRECT_LIGHTS )

		// based upon Frostbite 3 Moving to Physically-based Rendering
		// page 32, equation 26: E[window1]
		// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );

		if ( cutoffDistance > 0.0 ) {

			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );

		}

		return distanceFalloff;

	#else

		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {

			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );

		}

		return 1.0;

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

	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {

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

	// light is an out parameter as having it as a return value caused compiler errors on some devices
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {

		vec3 lVector = pointLight.position - geometry.position;

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

	// light is an out parameter as having it as a return value caused compiler errors on some devices
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {

		vec3 lVector = spotLight.position - geometry.position;

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

	// Pre-computed values of LinearTransformedCosine approximation of BRDF
	// BRDF approximation Texture is 64x64
	uniform sampler2D ltc_1; // RGBA Float
	uniform sampler2D ltc_2; // RGBA Float

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
`,cd=`
#if defined( USE_ENVMAP )

	vec3 getIBLIrradiance( const in vec3 normal ) {

		#if defined( ENVMAP_TYPE_CUBE_UV )

			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );

			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );

			return PI * envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}

	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {

		#if defined( ENVMAP_TYPE_CUBE_UV )

			vec3 reflectVec = reflect( - viewDir, normal );

			// Mixing the reflection with the normal is more accurate and keeps rough objects from gathering light from behind their tangent plane.
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );

			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );

			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );

			return envMapColor.rgb * envMapIntensity;

		#else

			return vec3( 0.0 );

		#endif

	}

#endif
`,ud=`
ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;
`,fd=`
varying vec3 vViewPosition;

struct ToonMaterial {

	vec3 diffuseColor;

};

void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {

	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
`,hd=`
BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;
`,dd=`
varying vec3 vViewPosition;

struct BlinnPhongMaterial {

	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;

};

void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;

}

void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
`,pd=`
PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );

vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );

material.roughness = max( roughnessFactor, 0.0525 );// 0.0525 corresponds to the base mip of a 256 cubemap.
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );

#ifdef IOR

	material.ior = ior;

	#ifdef SPECULAR

		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;

		#ifdef USE_SPECULARINTENSITYMAP

			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;

		#endif

		#ifdef USE_SPECULARCOLORMAP

			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;

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

		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;

	#endif

	#ifdef USE_CLEARCOAT_ROUGHNESSMAP

		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;

	#endif

	material.clearcoat = saturate( material.clearcoat ); // Burley clearcoat model
	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );

#endif

#ifdef USE_IRIDESCENCE

	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;

	#ifdef USE_IRIDESCENCEMAP

		material.iridescence *= texture2D( iridescenceMap, vUv ).r;

	#endif

	#ifdef USE_IRIDESCENCE_THICKNESSMAP

		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;

	#else

		material.iridescenceThickness = iridescenceThicknessMaximum;

	#endif

#endif

#ifdef USE_SHEEN

	material.sheenColor = sheenColor;

	#ifdef USE_SHEENCOLORMAP

		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;

	#endif

	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );

	#ifdef USE_SHEENROUGHNESSMAP

		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;

	#endif

#endif
`,md=`
struct PhysicalMaterial {

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

};

// temporary
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );

// This is a curve-fit approxmation to the "Charlie sheen" BRDF integrated over the hemisphere from 
// Estevez and Kulla 2017, "Production Friendly Microfacet Sheen BRDF". The analysis can be found
// in the Sheen section of https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {

	float dotNV = saturate( dot( normal, viewDir ) );

	float r2 = roughness * roughness;

	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;

	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;

	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );

	return saturate( DG * RECIPROCAL_PI );

}

// Analytical approximation of the DFG LUT, one half of the
// split-sum approximation used in indirect specular lighting.
// via 'environmentBRDF' from "Physically Based Shading on Mobile"
// https://www.unrealengine.com/blog/physically-based-shading-on-mobile
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

// Fdez-Agüera's "Multiple-Scattering Microfacet Model for Real-Time Image Based Lighting"
// Approximates multiscattering in order to preserve energy.
// http://www.jcgt.org/published/0008/01/03/
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

	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619; // 1/21
	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );

	singleScatter += FssEss;
	multiScatter += Fms * Ems;

}

#if NUM_RECT_AREA_LIGHTS > 0

	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;

		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight; // counterclockwise; light shines in local neg z direction
		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
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

		// LTC Fresnel Approximation by Stephen Hill
		// http://blog.selfshadow.com/publications/s2016-advances/s2016_ltc_fresnel.pdf
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );

		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );

		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );

	}

#endif

void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );

	vec3 irradiance = dotNL * directLight.color;

	#ifdef USE_CLEARCOAT

		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );

		vec3 ccIrradiance = dotNLcc * directLight.color;

		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );

	#endif

	#ifdef USE_SHEEN

		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );

	#endif

	#ifdef USE_IRIDESCENCE

		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );

	#else

		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );

	#endif

	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}

void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {

	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

}

void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {

	#ifdef USE_CLEARCOAT

		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );

	#endif

	#ifdef USE_SHEEN

		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );

	#endif

	// Both indirect specular and indirect diffuse light accumulate here

	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;

	#ifdef USE_IRIDESCENCE

		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );

	#else

		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );

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

// ref: https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {

	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );

}
`,gd=`
/**
 * This is a template that can be used to light a material, it uses pluggable
 * RenderEquations (RE)for specific lighting scenarios.
 *
 * Instructions for use:
 * - Ensure that both RE_Direct, RE_IndirectDiffuse and RE_IndirectSpecular are defined
 * - Create a material parameter that is to be passed as the third parameter to your lighting functions.
 *
 * TODO:
 * - Add area light support.
 * - Add sphere light support.
 * - Add diffuse light probe (irradiance cubemap) support.
 */

GeometricContext geometry;

geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

#ifdef USE_CLEARCOAT

	geometry.clearcoatNormal = clearcoatNormal;

#endif

#ifdef USE_IRIDESCENCE

	float dotNVi = saturate( dot( normal, geometry.viewDir ) );

	if ( material.iridescenceThickness == 0.0 ) {

		material.iridescence = 0.0;

	} else {

		material.iridescence = saturate( material.iridescence );

	}

	if ( material.iridescence > 0.0 ) {

		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );

		// Iridescence F0 approximation
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

		getPointLightInfo( pointLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

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

		getSpotLightInfo( spotLight, geometry, directLight );

		// spot lights are ordered [shadows with maps, shadows without maps, maps without shadows, none]
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
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

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

		getDirectionalLightInfo( directionalLight, geometry, directLight );

		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif

		RE_Direct( directLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

	RectAreaLight rectAreaLight;

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );

	}
	#pragma unroll_loop_end

#endif

#if defined( RE_IndirectDiffuse )

	vec3 iblIrradiance = vec3( 0.0 );

	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );

	#if ( NUM_HEMI_LIGHTS > 0 )

		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );

		}
		#pragma unroll_loop_end

	#endif

#endif

#if defined( RE_IndirectSpecular )

	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );

#endif
`,_d=`
#if defined( RE_IndirectDiffuse )

	#ifdef USE_LIGHTMAP

		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;

		irradiance += lightMapIrradiance;

	#endif

	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )

		iblIrradiance += getIBLIrradiance( geometry.normal );

	#endif

#endif

#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )

	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );

	#ifdef USE_CLEARCOAT

		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );

	#endif

#endif
`,vd=`
#if defined( RE_IndirectDiffuse )

	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );

#endif

#if defined( RE_IndirectSpecular )

	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );

#endif
`,xd=`
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )

	// Doing a strict comparison with == 1.0 can cause noise artifacts
	// on some platforms. See issue #17623.
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;

#endif
`,yd=`
#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )

	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;

#endif
`,Sd=`
#ifdef USE_LOGDEPTHBUF

	#ifdef USE_LOGDEPTHBUF_EXT

		varying float vFragDepth;
		varying float vIsPerspective;

	#else

		uniform float logDepthBufFC;

	#endif

#endif
`,Md=`
#ifdef USE_LOGDEPTHBUF

	#ifdef USE_LOGDEPTHBUF_EXT

		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );

	#else

		if ( isPerspectiveMatrix( projectionMatrix ) ) {

			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;

			gl_Position.z *= gl_Position.w;

		}

	#endif

#endif
`,Ed=`
#ifdef USE_MAP

	vec4 sampledDiffuseColor = texture2D( map, vUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// inline sRGB decode (TODO: Remove this code when https://crbug.com/1256340 is solved)

		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );

	#endif

	diffuseColor *= sampledDiffuseColor;

#endif
`,Td=`
#ifdef USE_MAP

	uniform sampler2D map;

#endif
`,wd=`
#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;

#endif

#ifdef USE_MAP

	diffuseColor *= texture2D( map, uv );

#endif

#ifdef USE_ALPHAMAP

	diffuseColor.a *= texture2D( alphaMap, uv ).g;

#endif
`,bd=`
#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

	uniform mat3 uvTransform;

#endif

#ifdef USE_MAP

	uniform sampler2D map;

#endif

#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap;

#endif
`,Ad=`
float metalnessFactor = metalness;

#ifdef USE_METALNESSMAP

	vec4 texelMetalness = texture2D( metalnessMap, vUv );

	// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	metalnessFactor *= texelMetalness.b;

#endif
`,Cd=`
#ifdef USE_METALNESSMAP

	uniform sampler2D metalnessMap;

#endif
`,Rd=`
#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
	vColor *= morphTargetBaseInfluence;

	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {

		#if defined( USE_COLOR_ALPHA )

			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];

		#elif defined( USE_COLOR )

			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];

		#endif

	}

#endif
`,Pd=`
#ifdef USE_MORPHNORMALS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in normal = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
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

#endif
`,Dd=`
#ifdef USE_MORPHTARGETS

	uniform float morphTargetBaseInfluence;

	#ifdef MORPHTARGETS_TEXTURE

		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
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

#endif
`,Ld=`
#ifdef USE_MORPHTARGETS

	// morphTargetBaseInfluence is set based on BufferGeometry.morphTargetsRelative value:
	// When morphTargetsRelative is false, this is set to 1 - sum(influences); this results in position = sum((target - base) * influence)
	// When morphTargetsRelative is true, this is set to 1; as a result, all morph targets are simply added to the base after weighting
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

#endif
`,Id=`
float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;

#ifdef FLAT_SHADED

	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );

#else

	vec3 normal = normalize( vNormal );

	#ifdef DOUBLE_SIDED

		normal = normal * faceDirection;

	#endif

	#ifdef USE_TANGENT

		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );

		#ifdef DOUBLE_SIDED

			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;

		#endif

		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )

			mat3 vTBN = mat3( tangent, bitangent, normal );

		#endif

	#endif

#endif

// non perturbed normal for clearcoat among others

vec3 geometryNormal = normal;

`,Fd=`

#ifdef OBJECTSPACE_NORMALMAP

	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals

	#ifdef FLIP_SIDED

		normal = - normal;

	#endif

	#ifdef DOUBLE_SIDED

		normal = normal * faceDirection;

	#endif

	normal = normalize( normalMatrix * normal );

#elif defined( TANGENTSPACE_NORMALMAP )

	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;

	#ifdef USE_TANGENT

		normal = normalize( vTBN * mapN );

	#else

		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );

	#endif

#elif defined( USE_BUMPMAP )

	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );

#endif
`,Od=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`,Ud=`
#ifndef FLAT_SHADED

	varying vec3 vNormal;

	#ifdef USE_TANGENT

		varying vec3 vTangent;
		varying vec3 vBitangent;

	#endif

#endif
`,Nd=`
#ifndef FLAT_SHADED // normal is computed with derivatives when FLAT_SHADED

	vNormal = normalize( transformedNormal );

	#ifdef USE_TANGENT

		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );

	#endif

#endif
`,Bd=`
#ifdef USE_NORMALMAP

	uniform sampler2D normalMap;
	uniform vec2 normalScale;

#endif

#ifdef OBJECTSPACE_NORMALMAP

	uniform mat3 normalMatrix;

#endif

#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )

	// Normal Mapping Without Precomputed Tangents
	// http://www.thetenthplanet.de/archives/1180

	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {

		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );

		vec3 N = surf_norm; // normalized

		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );

		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;

		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );

		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );

	}

#endif
`,zd=`
#ifdef USE_CLEARCOAT

	vec3 clearcoatNormal = geometryNormal;

#endif
`,kd=`
#ifdef USE_CLEARCOAT_NORMALMAP

	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;

	#ifdef USE_TANGENT

		clearcoatNormal = normalize( vTBN * clearcoatMapN );

	#else

		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );

	#endif

#endif
`,Gd=`

#ifdef USE_CLEARCOATMAP

	uniform sampler2D clearcoatMap;

#endif

#ifdef USE_CLEARCOAT_ROUGHNESSMAP

	uniform sampler2D clearcoatRoughnessMap;

#endif

#ifdef USE_CLEARCOAT_NORMALMAP

	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;

#endif
`,Hd=`

#ifdef USE_IRIDESCENCEMAP

	uniform sampler2D iridescenceMap;

#endif

#ifdef USE_IRIDESCENCE_THICKNESSMAP

	uniform sampler2D iridescenceThicknessMap;

#endif
`,Vd=`
#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif

// https://github.com/mrdoob/three.js/pull/22425
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif

gl_FragColor = vec4( outgoingLight, diffuseColor.a );
`,Wd=`
vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}

vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}

const float PackUpscale = 256. / 255.; // fraction -> 0..1 (including 1)
const float UnpackDownscale = 255. / 256.; // 0..1 -> fraction (excluding 1)

const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );

const float ShiftRight8 = 1. / 256.;

vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8; // tidy overflow
	return r * PackUpscale;
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

// NOTE: viewZ/eyeZ is < 0 when in front of the camera per OpenGL conventions

float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}

// NOTE: https://twitter.com/gonnavis/status/1377183786949959682

float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}
`,Xd=`
#ifdef PREMULTIPLIED_ALPHA

	// Get get normal blending with premultipled, use with CustomBlending, OneFactor, OneMinusSrcAlphaFactor, AddEquation.
	gl_FragColor.rgb *= gl_FragColor.a;

#endif
`,qd=`
vec4 mvPosition = vec4( transformed, 1.0 );

#ifdef USE_INSTANCING

	mvPosition = instanceMatrix * mvPosition;

#endif

mvPosition = modelViewMatrix * mvPosition;

gl_Position = projectionMatrix * mvPosition;
`,Yd=`
#ifdef DITHERING

	gl_FragColor.rgb = dithering( gl_FragColor.rgb );

#endif
`,Zd=`
#ifdef DITHERING

	// based on https://www.shadertoy.com/view/MslGR8
	vec3 dithering( vec3 color ) {
		//Calculate grid position
		float grid_position = rand( gl_FragCoord.xy );

		//Shift the individual colors differently, thus making it even harder to see the dithering pattern
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );

		//modify shift according to grid position.
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );

		//shift the color by dither_shift
		return color + dither_shift_RGB;
	}

#endif
`,Kd=`
float roughnessFactor = roughness;

#ifdef USE_ROUGHNESSMAP

	vec4 texelRoughness = texture2D( roughnessMap, vUv );

	// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture
	roughnessFactor *= texelRoughness.g;

#endif
`,jd=`
#ifdef USE_ROUGHNESSMAP

	uniform sampler2D roughnessMap;

#endif
`,$d=`
#if NUM_SPOT_LIGHT_COORDS > 0

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

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): create uniforms for area light shadows

	#endif
	*/

	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {

		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );

	}

	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {

		return unpackRGBATo2Half( texture2D( shadow, uv ) );

	}

	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){

		float occlusion = 1.0;

		vec2 distribution = texture2DDistribution( shadow, uv );

		float hard_shadow = step( compare , distribution.x ); // Hard Shadow

		if (hard_shadow != 1.0 ) {

			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance ); // Chebeyshevs inequality
			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 ); // 0.3 reduces light bleed
			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );

		}
		return occlusion;

	}

	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {

		float shadow = 1.0;

		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;

		// if ( something && something ) breaks ATI OpenGL shader compiler
		// if ( all( something, something ) ) using this instead

		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );

		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );

		bool frustumTest = all( frustumTestVec );

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

		#else // no percentage-closer filtering:

			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );

		#endif

		}

		return shadow;

	}

	// cubeToUV() maps a 3D direction vector suitable for cube texture mapping to a 2D
	// vector suitable for 2D texture mapping. This code uses the following layout for the
	// 2D texture:
	//
	// xzXZ
	//  y Y
	//
	// Y - Positive y direction
	// y - Negative y direction
	// X - Positive x direction
	// x - Negative x direction
	// Z - Positive z direction
	// z - Negative z direction
	//
	// Source and test bed:
	// https://gist.github.com/tschw/da10c43c467ce8afd0c4

	vec2 cubeToUV( vec3 v, float texelSizeY ) {

		// Number of texels to avoid at the edge of each square

		vec3 absV = abs( v );

		// Intersect unit cube

		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;

		// Apply scale to avoid seams

		// two texels less per square (one texel will do for NEAREST)
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );

		// Unwrap

		// space: -1 ... 1 range for each square
		//
		// #X##		dim    := ( 4 , 2 )
		//  # #		center := ( 1 , 1 )

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

		// Transform to UV space

		// scale := 0.5 / dim
		// translate := ( center + 0.5 ) / dim
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );

	}

	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {

		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );

		// for point lights, the uniform @vShadowCoord is re-purposed to hold
		// the vector from the light to the world-space position of the fragment.
		vec3 lightToPosition = shadowCoord.xyz;

		// dp = normalized distance from light to fragment position
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear ); // need to clamp?
		dp += shadowBias;

		// bd3D = base direction 3D
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

		#else // no percentage-closer filtering

			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );

		#endif

	}

#endif
`,Jd=`

#if NUM_SPOT_LIGHT_COORDS > 0

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

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): uniforms for area light shadows

	#endif
	*/

#endif
`,Qd=`
#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )

	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0

		// Offsetting the position used for querying occlusion along the world normal can be used to reduce shadow acne.
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;

	#endif

	#if NUM_DIR_LIGHT_SHADOWS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {

		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;

	}
	#pragma unroll_loop_end

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

	#endif

	#if NUM_POINT_LIGHT_SHADOWS > 0

	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {

		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;

	}
	#pragma unroll_loop_end

	#endif

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update vAreaShadowCoord with area light info

	#endif
	*/

#endif
`,ep=`
float getShadowMask() {

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

	/*
	#if NUM_RECT_AREA_LIGHTS > 0

		// TODO (abelnation): update shadow for Area light

	#endif
	*/

	#endif

	return shadow;

}
`,tp=`
#ifdef USE_SKINNING

	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );

#endif
`,ip=`
#ifdef USE_SKINNING

	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;

	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;

	mat4 getBoneMatrix( const in float i ) {

		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );

		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );

		y = dy * ( y + 0.5 );

		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );

		mat4 bone = mat4( v1, v2, v3, v4 );

		return bone;

	}

#endif
`,np=`
#ifdef USE_SKINNING

	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );

	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;

	transformed = ( bindMatrixInverse * skinned ).xyz;

#endif
`,rp=`
#ifdef USE_SKINNING

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

#endif
`,sp=`
float specularStrength;

#ifdef USE_SPECULARMAP

	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;

#else

	specularStrength = 1.0;

#endif
`,ap=`
#ifdef USE_SPECULARMAP

	uniform sampler2D specularMap;

#endif
`,op=`
#if defined( TONE_MAPPING )

	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );

#endif
`,lp=`
#ifndef saturate
// <common> may have defined saturate() already
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif

uniform float toneMappingExposure;

// exposure only
vec3 LinearToneMapping( vec3 color ) {

	return toneMappingExposure * color;

}

// source: https://www.cs.utah.edu/docs/techreports/2002/pdf/UUCS-02-001.pdf
vec3 ReinhardToneMapping( vec3 color ) {

	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );

}

// source: http://filmicworlds.com/blog/filmic-tonemapping-operators/
vec3 OptimizedCineonToneMapping( vec3 color ) {

	// optimized filmic operator by Jim Hejl and Richard Burgess-Dawson
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );

}

// source: https://github.com/selfshadow/ltc_code/blob/master/webgl/shaders/ltc/ltc_blit.fs
vec3 RRTAndODTFit( vec3 v ) {

	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;

}

// this implementation of ACES is modified to accommodate a brighter viewing environment.
// the scale factor of 1/0.6 is subjective. see discussion in #19621.

vec3 ACESFilmicToneMapping( vec3 color ) {

	// sRGB => XYZ => D65_2_D60 => AP1 => RRT_SAT
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ), // transposed from source
		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);

	// ODT_SAT => XYZ => D60_2_D65 => sRGB
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ), // transposed from source
		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);

	color *= toneMappingExposure / 0.6;

	color = ACESInputMat * color;

	// Apply RRT and ODT
	color = RRTAndODTFit( color );

	color = ACESOutputMat * color;

	// Clamp to [0, 1]
	return saturate( color );

}

vec3 CustomToneMapping( vec3 color ) { return color; }
`,cp=`
#ifdef USE_TRANSMISSION

	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;

	#ifdef USE_TRANSMISSIONMAP

		material.transmission *= texture2D( transmissionMap, vUv ).r;

	#endif

	#ifdef USE_THICKNESSMAP

		material.thickness *= texture2D( thicknessMap, vUv ).g;

	#endif

	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );

	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );

	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );

	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );

#endif
`,up=`
#ifdef USE_TRANSMISSION

	// Transmission code is based on glTF-Sampler-Viewer
	// https://github.com/KhronosGroup/glTF-Sample-Viewer

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

	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {

		// Direction of refracted light.
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );

		// Compute rotation-independant scaling of the model matrix.
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );

		// The thickness is specified in local space.
		return normalize( refractionVector ) * thickness * modelScale;

	}

	float applyIorToRoughness( const in float roughness, const in float ior ) {

		// Scale roughness with IOR so that an IOR of 1.0 results in no microfacet refraction and
		// an IOR of 1.5 results in the default amount of microfacet refraction.
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );

	}

	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {

		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );

		#ifdef texture2DLodEXT

			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );

		#else

			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );

		#endif

	}

	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {

		if ( isinf( attenuationDistance ) ) {

			// Attenuation distance is +∞, i.e. the transmitted color is not attenuated at all.
			return radiance;

		} else {

			// Compute light attenuation using Beer's law.
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance ); // Beer's law
			return transmittance * radiance;

		}

	}

	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {

		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;

		// Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;

		// Sample framebuffer to get pixel the refracted ray hits.
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );

		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );

		// Get the specular component.
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );

		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );

	}
#endif
`,fp=`
#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )

	varying vec2 vUv;

#endif
`,hp=`
#ifdef USE_UV

	#ifdef UVS_VERTEX_ONLY

		vec2 vUv;

	#else

		varying vec2 vUv;

	#endif

	uniform mat3 uvTransform;

#endif
`,dp=`
#ifdef USE_UV

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

#endif
`,pp=`
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )

	varying vec2 vUv2;

#endif
`,mp=`
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )

	attribute vec2 uv2;
	varying vec2 vUv2;

	uniform mat3 uv2Transform;

#endif
`,gp=`
#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )

	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;

#endif
`,_p=`
#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0

	vec4 worldPosition = vec4( transformed, 1.0 );

	#ifdef USE_INSTANCING

		worldPosition = instanceMatrix * worldPosition;

	#endif

	worldPosition = modelMatrix * worldPosition;

#endif
`,vp=`
varying vec2 vUv;
uniform mat3 uvTransform;

void main() {

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	gl_Position = vec4( position.xy, 1.0, 1.0 );

}
`,xp=`
uniform sampler2D t2D;
uniform float backgroundIntensity;

varying vec2 vUv;

void main() {

	vec4 texColor = texture2D( t2D, vUv );

	#ifdef DECODE_VIDEO_TEXTURE

		// inline sRGB decode (TODO: Remove this code when https://crbug.com/1256340 is solved)

		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );

	#endif

	texColor.rgb *= backgroundIntensity;

	gl_FragColor = texColor;

	#include <tonemapping_fragment>
	#include <encodings_fragment>

}
`,yp=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,Sp=`

#ifdef ENVMAP_TYPE_CUBE

	uniform samplerCube envMap;

#elif defined( ENVMAP_TYPE_CUBE_UV )

	uniform sampler2D envMap;

#endif

uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;

varying vec3 vWorldDirection;

#include <cube_uv_reflection_fragment>

void main() {

	#ifdef ENVMAP_TYPE_CUBE

		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );

	#elif defined( ENVMAP_TYPE_CUBE_UV )

		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );

	#else

		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );

	#endif

	texColor.rgb *= backgroundIntensity;

	gl_FragColor = texColor;

	#include <tonemapping_fragment>
	#include <encodings_fragment>

}
`,Mp=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

	gl_Position.z = gl_Position.w; // set z to camera.far

}
`,Ep=`
uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;

varying vec3 vWorldDirection;

void main() {

	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );

	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;

	#include <tonemapping_fragment>
	#include <encodings_fragment>

}
`,Tp=`
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

// This is used for computing an equivalent of gl_FragCoord.z that is as high precision as possible.
// Some platforms compute gl_FragCoord at a lower precision which makes the manually computed value better for
// depth-based postprocessing effects. Reproduced on iPad with A10 processor / iPadOS 13.3.1.
varying vec2 vHighPrecisionZW;

void main() {

	#include <uv_vertex>

	#include <skinbase_vertex>

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

}
`,wp=`
#if DEPTH_PACKING == 3200

	uniform float opacity;

#endif

#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

varying vec2 vHighPrecisionZW;

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( 1.0 );

	#if DEPTH_PACKING == 3200

		diffuseColor.a = opacity;

	#endif

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>

	#include <logdepthbuf_fragment>

	// Higher precision equivalent of gl_FragCoord.z. This assumes depthRange has been left to its default values.
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;

	#if DEPTH_PACKING == 3200

		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );

	#elif DEPTH_PACKING == 3201

		gl_FragColor = packDepthToRGBA( fragCoordZ );

	#endif

}
`,bp=`
#define DISTANCE

varying vec3 vWorldPosition;

#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

	#include <skinbase_vertex>

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

}
`,Ap=`
#define DISTANCE

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
#include <clipping_planes_pars_fragment>

void main () {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( 1.0 );

	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>

	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist ); // clamp to [ 0, 1 ]

	gl_FragColor = packDepthToRGBA( dist );

}
`,Cp=`
varying vec3 vWorldDirection;

#include <common>

void main() {

	vWorldDirection = transformDirection( position, modelMatrix );

	#include <begin_vertex>
	#include <project_vertex>

}
`,Rp=`
uniform sampler2D tEquirect;

varying vec3 vWorldDirection;

#include <common>

void main() {

	vec3 direction = normalize( vWorldDirection );

	vec2 sampleUV = equirectUv( direction );

	gl_FragColor = texture2D( tEquirect, sampleUV );

	#include <tonemapping_fragment>
	#include <encodings_fragment>

}
`,Pp=`
uniform float scale;
attribute float lineDistance;

varying float vLineDistance;

#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	vLineDistance = scale * lineDistance;

	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>

}
`,Dp=`
uniform vec3 diffuse;
uniform float opacity;

uniform float dashSize;
uniform float totalSize;

varying float vLineDistance;

#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	if ( mod( vLineDistance, totalSize ) > dashSize ) {

		discard;

	}

	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <color_fragment>

	outgoingLight = diffuseColor.rgb; // simple shader

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`,Lp=`
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>

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

}
`,Ip=`
uniform vec3 diffuse;
uniform float opacity;

#ifndef FLAT_SHADED

	varying vec3 vNormal;

#endif

#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>

	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );

	// accumulation (baked indirect lighting only)
	#ifdef USE_LIGHTMAP

		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;

	#else

		reflectedLight.indirectDiffuse += vec3( 1.0 );

	#endif

	// modulation
	#include <aomap_fragment>

	reflectedLight.indirectDiffuse *= diffuseColor.rgb;

	vec3 outgoingLight = reflectedLight.indirectDiffuse;

	#include <envmap_fragment>

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,Fp=`
#define LAMBERT

varying vec3 vViewPosition;

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>

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

}
`,Op=`
#define LAMBERT

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,Up=`
#define MATCAP

varying vec3 vViewPosition;

#include <common>
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
	#include <morphcolor_vertex>
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

}
`,Np=`
#define MATCAP

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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5; // 0.495 to remove artifacts caused by undersized matcap disks

	#ifdef USE_MATCAP

		vec4 matcapColor = texture2D( matcap, uv );

	#else

		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 ); // default if matcap is missing

	#endif

	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,Bp=`
#define NORMAL

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )

	varying vec3 vViewPosition;

#endif

#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <uv_vertex>

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

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )

	vViewPosition = - mvPosition.xyz;

#endif

}
`,zp=`
#define NORMAL

uniform float opacity;

#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )

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

	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>

	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );

	#ifdef OPAQUE

		gl_FragColor.a = 1.0;

	#endif

}
`,kp=`
#define PHONG

varying vec3 vViewPosition;

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>

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

}
`,Gp=`
#define PHONG

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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;

	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,Hp=`
#define STANDARD

varying vec3 vViewPosition;

#ifdef USE_TRANSMISSION

	varying vec3 vWorldPosition;

#endif

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>

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
}
`,Vp=`
#define STANDARD

#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;

#ifdef IOR
	uniform float ior;
#endif

#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;

	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif

	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
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

	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif

	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif

varying vec3 vViewPosition;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;

	#include <transmission_fragment>

	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;

	#ifdef USE_SHEEN

		// Sheen energy compensation approximation calculation can be found at the end of
		// https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );

		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;

	#endif

	#ifdef USE_CLEARCOAT

		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );

		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );

		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;

	#endif

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,Wp=`
#define TOON

varying vec3 vViewPosition;

#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>

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

}
`,Xp=`
#define TOON

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>

	// accumulation
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>

}
`,qp=`
uniform float size;
uniform float scale;

#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

void main() {

	#include <color_vertex>
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

}
`,Yp=`
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>

	outgoingLight = diffuseColor.rgb;

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`,Zp=`
#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>

void main() {

	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>

	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>

	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>

}
`,Kp=`
uniform vec3 color;
uniform float opacity;

#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>

void main() {

	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );

	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>

}
`,jp=`
uniform float rotation;
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

}
`,$p=`
uniform vec3 diffuse;
uniform float opacity;

#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );

	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>

	outgoingLight = diffuseColor.rgb;

	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>

}
`,we={alphamap_fragment:yh,alphamap_pars_fragment:Sh,alphatest_fragment:Mh,alphatest_pars_fragment:Eh,aomap_fragment:Th,aomap_pars_fragment:wh,begin_vertex:bh,beginnormal_vertex:Ah,bsdfs:Ch,iridescence_fragment:Rh,bumpmap_pars_fragment:Ph,clipping_planes_fragment:Dh,clipping_planes_pars_fragment:Lh,clipping_planes_pars_vertex:Ih,clipping_planes_vertex:Fh,color_fragment:Oh,color_pars_fragment:Uh,color_pars_vertex:Nh,color_vertex:Bh,common:zh,cube_uv_reflection_fragment:kh,defaultnormal_vertex:Gh,displacementmap_pars_vertex:Hh,displacementmap_vertex:Vh,emissivemap_fragment:Wh,emissivemap_pars_fragment:Xh,encodings_fragment:qh,encodings_pars_fragment:Yh,envmap_fragment:Zh,envmap_common_pars_fragment:Kh,envmap_pars_fragment:jh,envmap_pars_vertex:$h,envmap_physical_pars_fragment:cd,envmap_vertex:Jh,fog_vertex:Qh,fog_pars_vertex:ed,fog_fragment:td,fog_pars_fragment:id,gradientmap_pars_fragment:nd,lightmap_fragment:rd,lightmap_pars_fragment:sd,lights_lambert_fragment:ad,lights_lambert_pars_fragment:od,lights_pars_begin:ld,lights_toon_fragment:ud,lights_toon_pars_fragment:fd,lights_phong_fragment:hd,lights_phong_pars_fragment:dd,lights_physical_fragment:pd,lights_physical_pars_fragment:md,lights_fragment_begin:gd,lights_fragment_maps:_d,lights_fragment_end:vd,logdepthbuf_fragment:xd,logdepthbuf_pars_fragment:yd,logdepthbuf_pars_vertex:Sd,logdepthbuf_vertex:Md,map_fragment:Ed,map_pars_fragment:Td,map_particle_fragment:wd,map_particle_pars_fragment:bd,metalnessmap_fragment:Ad,metalnessmap_pars_fragment:Cd,morphcolor_vertex:Rd,morphnormal_vertex:Pd,morphtarget_pars_vertex:Dd,morphtarget_vertex:Ld,normal_fragment_begin:Id,normal_fragment_maps:Fd,normal_pars_fragment:Od,normal_pars_vertex:Ud,normal_vertex:Nd,normalmap_pars_fragment:Bd,clearcoat_normal_fragment_begin:zd,clearcoat_normal_fragment_maps:kd,clearcoat_pars_fragment:Gd,iridescence_pars_fragment:Hd,output_fragment:Vd,packing:Wd,premultiplied_alpha_fragment:Xd,project_vertex:qd,dithering_fragment:Yd,dithering_pars_fragment:Zd,roughnessmap_fragment:Kd,roughnessmap_pars_fragment:jd,shadowmap_pars_fragment:$d,shadowmap_pars_vertex:Jd,shadowmap_vertex:Qd,shadowmask_pars_fragment:ep,skinbase_vertex:tp,skinning_pars_vertex:ip,skinning_vertex:np,skinnormal_vertex:rp,specularmap_fragment:sp,specularmap_pars_fragment:ap,tonemapping_fragment:op,tonemapping_pars_fragment:lp,transmission_fragment:cp,transmission_pars_fragment:up,uv_pars_fragment:fp,uv_pars_vertex:hp,uv_vertex:dp,uv2_pars_fragment:pp,uv2_pars_vertex:mp,uv2_vertex:gp,worldpos_vertex:_p,background_vert:vp,background_frag:xp,backgroundCube_vert:yp,backgroundCube_frag:Sp,cube_vert:Mp,cube_frag:Ep,depth_vert:Tp,depth_frag:wp,distanceRGBA_vert:bp,distanceRGBA_frag:Ap,equirect_vert:Cp,equirect_frag:Rp,linedashed_vert:Pp,linedashed_frag:Dp,meshbasic_vert:Lp,meshbasic_frag:Ip,meshlambert_vert:Fp,meshlambert_frag:Op,meshmatcap_vert:Up,meshmatcap_frag:Np,meshnormal_vert:Bp,meshnormal_frag:zp,meshphong_vert:kp,meshphong_frag:Gp,meshphysical_vert:Hp,meshphysical_frag:Vp,meshtoon_vert:Wp,meshtoon_frag:Xp,points_vert:qp,points_frag:Yp,shadow_vert:Zp,shadow_frag:Kp,sprite_vert:jp,sprite_frag:$p},ae={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Xt},uv2Transform:{value:new Xt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Xt}}},gi={basic:{uniforms:Rt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:we.meshbasic_vert,fragmentShader:we.meshbasic_frag},lambert:{uniforms:Rt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ue(0)}}]),vertexShader:we.meshlambert_vert,fragmentShader:we.meshlambert_frag},phong:{uniforms:Rt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:we.meshphong_vert,fragmentShader:we.meshphong_frag},standard:{uniforms:Rt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag},toon:{uniforms:Rt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Ue(0)}}]),vertexShader:we.meshtoon_vert,fragmentShader:we.meshtoon_frag},matcap:{uniforms:Rt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:we.meshmatcap_vert,fragmentShader:we.meshmatcap_frag},points:{uniforms:Rt([ae.points,ae.fog]),vertexShader:we.points_vert,fragmentShader:we.points_frag},dashed:{uniforms:Rt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:we.linedashed_vert,fragmentShader:we.linedashed_frag},depth:{uniforms:Rt([ae.common,ae.displacementmap]),vertexShader:we.depth_vert,fragmentShader:we.depth_frag},normal:{uniforms:Rt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:we.meshnormal_vert,fragmentShader:we.meshnormal_frag},sprite:{uniforms:Rt([ae.sprite,ae.fog]),vertexShader:we.sprite_vert,fragmentShader:we.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:we.background_vert,fragmentShader:we.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:we.backgroundCube_vert,fragmentShader:we.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:we.cube_vert,fragmentShader:we.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:we.equirect_vert,fragmentShader:we.equirect_frag},distanceRGBA:{uniforms:Rt([ae.common,ae.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:we.distanceRGBA_vert,fragmentShader:we.distanceRGBA_frag},shadow:{uniforms:Rt([ae.lights,ae.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:we.shadow_vert,fragmentShader:we.shadow_frag}};gi.physical={uniforms:Rt([gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new ze(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null}}]),vertexShader:we.meshphysical_vert,fragmentShader:we.meshphysical_frag};const hs={r:0,b:0,g:0};function Jp(s,e,t,i,r,n,o){const a=new Ue(0);let l=n===!0?0:1,u,c,p=null,h=0,f=null;function g(m,_){let T=!1,E=_.isScene===!0?_.background:null;E&&E.isTexture&&(E=(_.backgroundBlurriness>0?t:e).get(E));const v=s.xr,x=v.getSession&&v.getSession();x&&x.environmentBlendMode==="additive"&&(E=null),E===null?d(a,l):E&&E.isColor&&(d(E,1),T=!0),(s.autoClear||T)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),E&&(E.isCubeTexture||E.mapping===Ls)?(c===void 0&&(c=new di(new Wr(1,1,1),new Ni({name:"BackgroundCubeMaterial",uniforms:lr(gi.backgroundCube.uniforms),vertexShader:gi.backgroundCube.vertexShader,fragmentShader:gi.backgroundCube.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,M,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=E,c.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,(p!==E||h!==E.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,p=E,h=E.version,f=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(u===void 0&&(u=new di(new Xr(2,2),new Ni({name:"BackgroundMaterial",uniforms:lr(gi.background.uniforms),vertexShader:gi.background.vertexShader,fragmentShader:gi.background.fragmentShader,side:rr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=E,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,E.matrixAutoUpdate===!0&&E.updateMatrix(),u.material.uniforms.uvTransform.value.copy(E.matrix),(p!==E||h!==E.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,p=E,h=E.version,f=s.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function d(m,_){m.getRGB(hs,Oc(s)),i.buffers.color.setClear(hs.r,hs.g,hs.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(m,_=1){a.set(m),l=_,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,d(a,l)},render:g}}function Qp(s,e,t,i){const r=s.getParameter(s.MAX_VERTEX_ATTRIBS),n=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||n!==null,a={},l=m(null);let u=l,c=!1;function p(D,F,N,H,z){let X=!1;if(o){const K=d(H,N,F);u!==K&&(u=K,f(u.object)),X=_(D,H,N,z),X&&T(D,H,N,z)}else{const K=F.wireframe===!0;(u.geometry!==H.id||u.program!==N.id||u.wireframe!==K)&&(u.geometry=H.id,u.program=N.id,u.wireframe=K,X=!0)}z!==null&&t.update(z,s.ELEMENT_ARRAY_BUFFER),(X||c)&&(c=!1,y(D,F,N,H),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function h(){return i.isWebGL2?s.createVertexArray():n.createVertexArrayOES()}function f(D){return i.isWebGL2?s.bindVertexArray(D):n.bindVertexArrayOES(D)}function g(D){return i.isWebGL2?s.deleteVertexArray(D):n.deleteVertexArrayOES(D)}function d(D,F,N){const H=N.wireframe===!0;let z=a[D.id];z===void 0&&(z={},a[D.id]=z);let X=z[F.id];X===void 0&&(X={},z[F.id]=X);let K=X[H];return K===void 0&&(K=m(h()),X[H]=K),K}function m(D){const F=[],N=[],H=[];for(let z=0;z<r;z++)F[z]=0,N[z]=0,H[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:N,attributeDivisors:H,object:D,attributes:{},index:null}}function _(D,F,N,H){const z=u.attributes,X=F.attributes;let K=0;const k=N.getAttributes();for(const V in k)if(k[V].location>=0){const ee=z[V];let te=X[V];if(te===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(te=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(te=D.instanceColor)),ee===void 0||ee.attribute!==te||te&&ee.data!==te.data)return!0;K++}return u.attributesNum!==K||u.index!==H}function T(D,F,N,H){const z={},X=F.attributes;let K=0;const k=N.getAttributes();for(const V in k)if(k[V].location>=0){let ee=X[V];ee===void 0&&(V==="instanceMatrix"&&D.instanceMatrix&&(ee=D.instanceMatrix),V==="instanceColor"&&D.instanceColor&&(ee=D.instanceColor));const te={};te.attribute=ee,ee&&ee.data&&(te.data=ee.data),z[V]=te,K++}u.attributes=z,u.attributesNum=K,u.index=H}function E(){const D=u.newAttributes;for(let F=0,N=D.length;F<N;F++)D[F]=0}function v(D){x(D,0)}function x(D,F){const N=u.newAttributes,H=u.enabledAttributes,z=u.attributeDivisors;N[D]=1,H[D]===0&&(s.enableVertexAttribArray(D),H[D]=1),z[D]!==F&&((i.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,F),z[D]=F)}function S(){const D=u.newAttributes,F=u.enabledAttributes;for(let N=0,H=F.length;N<H;N++)F[N]!==D[N]&&(s.disableVertexAttribArray(N),F[N]=0)}function M(D,F,N,H,z,X){i.isWebGL2===!0&&(N===s.INT||N===s.UNSIGNED_INT)?s.vertexAttribIPointer(D,F,N,z,X):s.vertexAttribPointer(D,F,N,H,z,X)}function y(D,F,N,H){if(i.isWebGL2===!1&&(D.isInstancedMesh||H.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;E();const z=H.attributes,X=N.getAttributes(),K=F.defaultAttributeValues;for(const k in X){const V=X[k];if(V.location>=0){let $=z[k];if($===void 0&&(k==="instanceMatrix"&&D.instanceMatrix&&($=D.instanceMatrix),k==="instanceColor"&&D.instanceColor&&($=D.instanceColor)),$!==void 0){const ee=$.normalized,te=$.itemSize,U=t.get($);if(U===void 0)continue;const Me=U.buffer,fe=U.type,ye=U.bytesPerElement;if($.isInterleavedBufferAttribute){const ue=$.data,Re=ue.stride,ve=$.offset;if(ue.isInstancedInterleavedBuffer){for(let xe=0;xe<V.locationSize;xe++)x(V.location+xe,ue.meshPerAttribute);D.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let xe=0;xe<V.locationSize;xe++)v(V.location+xe);s.bindBuffer(s.ARRAY_BUFFER,Me);for(let xe=0;xe<V.locationSize;xe++)M(V.location+xe,te/V.locationSize,fe,ee,Re*ye,(ve+te/V.locationSize*xe)*ye)}else{if($.isInstancedBufferAttribute){for(let ue=0;ue<V.locationSize;ue++)x(V.location+ue,$.meshPerAttribute);D.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ue=0;ue<V.locationSize;ue++)v(V.location+ue);s.bindBuffer(s.ARRAY_BUFFER,Me);for(let ue=0;ue<V.locationSize;ue++)M(V.location+ue,te/V.locationSize,fe,ee,te*ye,te/V.locationSize*ue*ye)}}else if(K!==void 0){const ee=K[k];if(ee!==void 0)switch(ee.length){case 2:s.vertexAttrib2fv(V.location,ee);break;case 3:s.vertexAttrib3fv(V.location,ee);break;case 4:s.vertexAttrib4fv(V.location,ee);break;default:s.vertexAttrib1fv(V.location,ee)}}}}S()}function w(){I();for(const D in a){const F=a[D];for(const N in F){const H=F[N];for(const z in H)g(H[z].object),delete H[z];delete F[N]}delete a[D]}}function b(D){if(a[D.id]===void 0)return;const F=a[D.id];for(const N in F){const H=F[N];for(const z in H)g(H[z].object),delete H[z];delete F[N]}delete a[D.id]}function A(D){for(const F in a){const N=a[F];if(N[D.id]===void 0)continue;const H=N[D.id];for(const z in H)g(H[z].object),delete H[z];delete N[D.id]}}function I(){L(),c=!0,u!==l&&(u=l,f(u.object))}function L(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:I,resetDefaultState:L,dispose:w,releaseStatesOfGeometry:b,releaseStatesOfProgram:A,initAttributes:E,enableAttribute:v,disableUnusedAttributes:S}}function em(s,e,t,i){const r=i.isWebGL2;let n;function o(u){n=u}function a(u,c){s.drawArrays(n,u,c),t.update(c,n,1)}function l(u,c,p){if(p===0)return;let h,f;if(r)h=s,f="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[f](n,u,c,p),t.update(c,n,p)}this.setMode=o,this.render=a,this.renderInstances=l}function tm(s,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function n(M){if(M==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&s instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=n(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),h=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),d=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),T=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),E=h>0,v=o||e.has("OES_texture_float"),x=E&&v,S=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:n,precision:a,logarithmicDepthBuffer:c,maxTextures:p,maxVertexTextures:h,maxTextureSize:f,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:T,vertexTextures:E,floatFragmentTextures:v,floatVertexTextures:x,maxSamples:S}}function im(s){const e=this;let t=null,i=0,r=!1,n=!1;const o=new mn,a=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h,f){const g=p.length!==0||h||i!==0||r;return r=h,t=c(p,f,0),i=p.length,g},this.beginShadows=function(){n=!0,c(null)},this.endShadows=function(){n=!1,u()},this.setState=function(p,h,f){const g=p.clippingPlanes,d=p.clipIntersection,m=p.clipShadows,_=s.get(p);if(!r||g===null||g.length===0||n&&!m)n?c(null):u();else{const T=n?0:i,E=T*4;let v=_.clippingState||null;l.value=v,v=c(g,h,E,f);for(let x=0;x!==E;++x)v[x]=t[x];_.clippingState=v,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=T}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(p,h,f,g){const d=p!==null?p.length:0;let m=null;if(d!==0){if(m=l.value,g!==!0||m===null){const _=f+d*4,T=h.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<_)&&(m=new Float32Array(_));for(let E=0,v=f;E!==d;++E,v+=4)o.copy(p[E]).applyMatrix4(T,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,m}}let Hn;class Uc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Hn===void 0&&(Hn=Es("canvas")),Hn.width=e.width,Hn.height=e.height;const i=Hn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Hn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Es("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),n=r.data;for(let o=0;o<n.length;o++)n[o]=Tn(n[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Tn(t[i]/255)*255):t[i]=Tn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Nc{constructor(e=null){this.isSource=!0,this.uuid=kr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let n;if(Array.isArray(r)){n=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?n.push(va(r[o].image)):n.push(va(r[o]))}else n=va(r);i.url=n}return t||(e.images[this.uuid]=i),i}}function va(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Uc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nm=0;class qt extends gr{constructor(e=qt.DEFAULT_IMAGE,t=qt.DEFAULT_MAPPING,i=hi,r=hi,n=ei,o=Is,a=ii,l=Cn,u=qt.DEFAULT_ANISOTROPY,c=Rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=kr(),this.name="",this.source=new Nc(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=n,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ha:e.x=e.x-Math.floor(e.x);break;case hi:e.x=e.x<0?0:1;break;case Va:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ha:e.y=e.y-Math.floor(e.y);break;case hi:e.y=e.y<0?0:1;break;case Va:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=wc;qt.DEFAULT_ANISOTROPY=1;class en extends gr{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new qt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:ei,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Nc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bc extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ti extends Bc{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Wo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ws*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wo*2*Math.atan(Math.tan(Ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,n,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=n,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ws*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,n=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;n+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(n+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(n,n+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Vn=-90,Wn=1;class rm extends Tt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new ti(Vn,Wn,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const n=new ti(Vn,Wn,e,t);n.layers=this.layers,n.up.set(0,1,0),n.lookAt(-1,0,0),this.add(n);const o=new ti(Vn,Wn,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new ti(Vn,Wn,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new ti(Vn,Wn,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const u=new ti(Vn,Wn,e,t);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,-1),this.add(u)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,n,o,a,l,u]=this.children,c=e.getRenderTarget(),p=e.toneMapping,h=e.xr.enabled;e.toneMapping=Ui,e.xr.enabled=!1;const f=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,n),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=f,e.setRenderTarget(i,5),e.render(t,u),e.setRenderTarget(c),e.toneMapping=p,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class zc extends qt{constructor(e,t,i,r,n,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:sr,super(e,t,i,r,n,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sm extends en{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new zc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ei}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Wr(5,5,5),n=new Ni({name:"CubemapFromEquirect",uniforms:lr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ai,blending:$i});n.uniforms.tEquirect.value=t;const o=new di(r,n),a=t.minFilter;return t.minFilter===Is&&(t.minFilter=ei),new rm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const n=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(n)}}function am(s){let e=new WeakMap;function t(o,a){return a===ka?o.mapping=sr:a===Ga&&(o.mapping=ar),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===ka||a===Ga)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new sm(l.height/2);return u.fromEquirectangularTexture(s,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function n(){e=new WeakMap}return{get:i,dispose:n}}class kc extends Bc{constructor(e=-1,t=1,i=1,r=-1,n=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=n,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,n,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=n,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let n=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;n+=u*this.view.offsetX,o=n+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(n,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const jn=4,Il=[.125,.215,.35,.446,.526,.582],vn=20,xa=new kc,Fl=new Ue;let ya=null;const gn=(1+Math.sqrt(5))/2,Xn=1/gn,Ol=[new W(1,1,1),new W(-1,1,1),new W(1,1,-1),new W(-1,1,-1),new W(0,gn,Xn),new W(0,gn,-Xn),new W(Xn,0,gn),new W(-Xn,0,gn),new W(gn,Xn,0),new W(-gn,Xn,0)];class Ul{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ya=this._renderer.getRenderTarget(),this._setSize(256);const n=this._allocateTargets();return n.depthBuffer=!0,this._sceneToCubeUV(e,i,r,n),t>0&&this._blur(n,0,0,t),this._applyPMREM(n),this._cleanup(n),n}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ya),e.scissorTest=!1,ds(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===sr||e.mapping===ar?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ya=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ei,minFilter:ei,generateMipmaps:!1,type:Lr,format:ii,encoding:Rn,depthBuffer:!1},r=Nl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nl(e,t,i);const{_lodMax:n}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=om(n)),this._blurMaterial=lm(n,e,t)}return r}_compileMaterial(e){const t=new di(this._lodPlanes[0],e);this._renderer.compile(t,xa)}_sceneToCubeUV(e,t,i,r){const a=new ti(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,p=c.autoClear,h=c.toneMapping;c.getClearColor(Fl),c.toneMapping=Ui,c.autoClear=!1;const f=new uo({name:"PMREM.Background",side:ai,depthWrite:!1,depthTest:!1}),g=new di(new Wr,f);let d=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,d=!0):(f.color.copy(Fl),d=!0);for(let _=0;_<6;_++){const T=_%3;T===0?(a.up.set(0,l[_],0),a.lookAt(u[_],0,0)):T===1?(a.up.set(0,0,l[_]),a.lookAt(0,u[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,u[_]));const E=this._cubeSize;ds(r,T*E,_>2?E:0,E,E),c.setRenderTarget(r),d&&c.render(g,a),c.render(e,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=h,c.autoClear=p,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===sr||e.mapping===ar;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=zl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bl());const n=r?this._cubemapMaterial:this._equirectMaterial,o=new di(this._lodPlanes[0],n),a=n.uniforms;a.envMap.value=e;const l=this._cubeSize;ds(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,xa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const n=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ol[(r-1)%Ol.length];this._blur(e,r-1,r,n,o)}t.autoClear=i}_blur(e,t,i,r,n){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",n),this._halfBlur(o,e,i,i,r,"longitudinal",n)}_halfBlur(e,t,i,r,n,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,p=new di(this._lodPlanes[r],u),h=u.uniforms,f=this._sizeLods[i]-1,g=isFinite(n)?Math.PI/(2*f):2*Math.PI/(2*vn-1),d=n/g,m=isFinite(n)?1+Math.floor(c*d):vn;m>vn&&console.warn(`sigmaRadians, ${n}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vn}`);const _=[];let T=0;for(let M=0;M<vn;++M){const y=M/d,w=Math.exp(-y*y/2);_.push(w),M===0?T+=w:M<m&&(T+=2*w)}for(let M=0;M<_.length;M++)_[M]=_[M]/T;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=_,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:E}=this;h.dTheta.value=g,h.mipInt.value=E-i;const v=this._sizeLods[r],x=3*v*(r>E-jn?r-E+jn:0),S=4*(this._cubeSize-v);ds(t,x,S,3*v,2*v),l.setRenderTarget(t),l.render(p,xa)}}function om(s){const e=[],t=[],i=[];let r=s;const n=s-jn+1+Il.length;for(let o=0;o<n;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>s-jn?l=Il[o-s+jn-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,p=1+u,h=[c,c,p,c,p,p,c,c,p,p,c,p],f=6,g=6,d=3,m=2,_=1,T=new Float32Array(d*g*f),E=new Float32Array(m*g*f),v=new Float32Array(_*g*f);for(let S=0;S<f;S++){const M=S%3*2/3-1,y=S>2?0:-1,w=[M,y,0,M+2/3,y,0,M+2/3,y+1,0,M,y,0,M+2/3,y+1,0,M,y+1,0];T.set(w,d*g*S),E.set(h,m*g*S);const b=[S,S,S,S,S,S];v.set(b,_*g*S)}const x=new rn;x.setAttribute("position",new xi(T,d)),x.setAttribute("uv",new xi(E,m)),x.setAttribute("faceIndex",new xi(v,_)),e.push(x),r>jn&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Nl(s,e,t){const i=new en(s,e,t);return i.texture.mapping=Ls,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ds(s,e,t,i,r){s.viewport.set(e,t,i,r),s.scissor.set(e,t,i,r)}function lm(s,e,t){const i=new Float32Array(vn),r=new W(0,1,0);return new Ni({name:"SphericalGaussianBlur",defines:{n:vn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:fo(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Bl(){return new Ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fo(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function zl(){return new Ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function fo(){return`

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
	`}function cm(s){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===ka||l===Ga,c=l===sr||l===ar;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let p=e.get(a);return t===null&&(t=new Ul(s)),p=u?t.fromEquirectangular(a,p):t.fromCubemap(a,p),e.set(a,p),p.texture}else{if(e.has(a))return e.get(a).texture;{const p=a.image;if(u&&p&&p.height>0||c&&p&&r(p)){t===null&&(t=new Ul(s));const h=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",n),h.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function n(a){const l=a.target;l.removeEventListener("dispose",n);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function um(s){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=s.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function fm(s,e,t,i){const r={},n=new WeakMap;function o(p){const h=p.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];const f=n.get(h);f&&(e.remove(f),n.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(p,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(p){const h=p.attributes;for(const g in h)e.update(h[g],s.ARRAY_BUFFER);const f=p.morphAttributes;for(const g in f){const d=f[g];for(let m=0,_=d.length;m<_;m++)e.update(d[m],s.ARRAY_BUFFER)}}function u(p){const h=[],f=p.index,g=p.attributes.position;let d=0;if(f!==null){const T=f.array;d=f.version;for(let E=0,v=T.length;E<v;E+=3){const x=T[E+0],S=T[E+1],M=T[E+2];h.push(x,S,S,M,M,x)}}else{const T=g.array;d=g.version;for(let E=0,v=T.length/3-1;E<v;E+=3){const x=E+0,S=E+1,M=E+2;h.push(x,S,S,M,M,x)}}const m=new(Fc(h)?Ic:Lc)(h,1);m.version=d;const _=n.get(p);_&&e.remove(_),n.set(p,m)}function c(p){const h=n.get(p);if(h){const f=p.index;f!==null&&h.version<f.version&&u(p)}else u(p);return n.get(p)}return{get:a,update:l,getWireframeAttribute:c}}function hm(s,e,t,i){const r=i.isWebGL2;let n;function o(h){n=h}let a,l;function u(h){a=h.type,l=h.bytesPerElement}function c(h,f){s.drawElements(n,f,a,h*l),t.update(f,n,1)}function p(h,f,g){if(g===0)return;let d,m;if(r)d=s,m="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](n,f,a,h*l,g),t.update(f,n,g)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=p}function dm(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(n,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(n/3);break;case s.LINES:t.lines+=a*(n/2);break;case s.LINE_STRIP:t.lines+=a*(n-1);break;case s.LINE_LOOP:t.lines+=a*n;break;case s.POINTS:t.points+=a*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}class Gc extends qt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}function pm(s,e){return s[0]-e[0]}function mm(s,e){return Math.abs(e[1])-Math.abs(s[1])}function gm(s,e,t){const i={},r=new Float32Array(8),n=new WeakMap,o=new vt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,p,h){const f=u.morphTargetInfluences;if(e.isWebGL2===!0){const d=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,m=d!==void 0?d.length:0;let _=n.get(c);if(_===void 0||_.count!==m){let N=function(){D.dispose(),n.delete(c),c.removeEventListener("dispose",N)};var g=N;_!==void 0&&_.texture.dispose();const v=c.morphAttributes.position!==void 0,x=c.morphAttributes.normal!==void 0,S=c.morphAttributes.color!==void 0,M=c.morphAttributes.position||[],y=c.morphAttributes.normal||[],w=c.morphAttributes.color||[];let b=0;v===!0&&(b=1),x===!0&&(b=2),S===!0&&(b=3);let A=c.attributes.position.count*b,I=1;A>e.maxTextureSize&&(I=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const L=new Float32Array(A*I*4*m),D=new Gc(L,A,I,m);D.type=yn,D.needsUpdate=!0;const F=b*4;for(let H=0;H<m;H++){const z=M[H],X=y[H],K=w[H],k=A*I*4*H;for(let V=0;V<z.count;V++){const $=V*F;v===!0&&(o.fromBufferAttribute(z,V),L[k+$+0]=o.x,L[k+$+1]=o.y,L[k+$+2]=o.z,L[k+$+3]=0),x===!0&&(o.fromBufferAttribute(X,V),L[k+$+4]=o.x,L[k+$+5]=o.y,L[k+$+6]=o.z,L[k+$+7]=0),S===!0&&(o.fromBufferAttribute(K,V),L[k+$+8]=o.x,L[k+$+9]=o.y,L[k+$+10]=o.z,L[k+$+11]=K.itemSize===4?o.w:1)}}_={count:m,texture:D,size:new ze(A,I)},n.set(c,_),c.addEventListener("dispose",N)}let T=0;for(let v=0;v<f.length;v++)T+=f[v];const E=c.morphTargetsRelative?1:1-T;h.getUniforms().setValue(s,"morphTargetBaseInfluence",E),h.getUniforms().setValue(s,"morphTargetInfluences",f),h.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}else{const d=f===void 0?0:f.length;let m=i[c.id];if(m===void 0||m.length!==d){m=[];for(let x=0;x<d;x++)m[x]=[x,0];i[c.id]=m}for(let x=0;x<d;x++){const S=m[x];S[0]=x,S[1]=f[x]}m.sort(mm);for(let x=0;x<8;x++)x<d&&m[x][1]?(a[x][0]=m[x][0],a[x][1]=m[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(pm);const _=c.morphAttributes.position,T=c.morphAttributes.normal;let E=0;for(let x=0;x<8;x++){const S=a[x],M=S[0],y=S[1];M!==Number.MAX_SAFE_INTEGER&&y?(_&&c.getAttribute("morphTarget"+x)!==_[M]&&c.setAttribute("morphTarget"+x,_[M]),T&&c.getAttribute("morphNormal"+x)!==T[M]&&c.setAttribute("morphNormal"+x,T[M]),r[x]=y,E+=y):(_&&c.hasAttribute("morphTarget"+x)===!0&&c.deleteAttribute("morphTarget"+x),T&&c.hasAttribute("morphNormal"+x)===!0&&c.deleteAttribute("morphNormal"+x),r[x]=0)}const v=c.morphTargetsRelative?1:1-E;h.getUniforms().setValue(s,"morphTargetBaseInfluence",v),h.getUniforms().setValue(s,"morphTargetInfluences",r)}}return{update:l}}function _m(s,e,t,i){let r=new WeakMap;function n(l){const u=i.render.frame,c=l.geometry,p=e.get(l,c);return r.get(p)!==u&&(e.update(p),r.set(p,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER)),p}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:n,dispose:o}}class vm extends qt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Hc=new qt,Vc=new Gc,Wc=new vm,Xc=new zc,kl=[],Gl=[],Hl=new Float32Array(16),Vl=new Float32Array(9),Wl=new Float32Array(4);function _r(s,e,t){const i=s[0];if(i<=0||i>0)return s;const r=e*t;let n=kl[r];if(n===void 0&&(n=new Float32Array(r),kl[r]=n),e!==0){i.toArray(n,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(n,a)}return n}function at(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function ot(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function Os(s,e){let t=Gl[e];t===void 0&&(t=new Int32Array(e),Gl[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function xm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function ym(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;s.uniform2fv(this.addr,e),ot(t,e)}}function Sm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(at(t,e))return;s.uniform3fv(this.addr,e),ot(t,e)}}function Mm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;s.uniform4fv(this.addr,e),ot(t,e)}}function Em(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(at(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),ot(t,e)}else{if(at(t,i))return;Wl.set(i),s.uniformMatrix2fv(this.addr,!1,Wl),ot(t,i)}}function Tm(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(at(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),ot(t,e)}else{if(at(t,i))return;Vl.set(i),s.uniformMatrix3fv(this.addr,!1,Vl),ot(t,i)}}function wm(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(at(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),ot(t,e)}else{if(at(t,i))return;Hl.set(i),s.uniformMatrix4fv(this.addr,!1,Hl),ot(t,i)}}function bm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Am(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;s.uniform2iv(this.addr,e),ot(t,e)}}function Cm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(at(t,e))return;s.uniform3iv(this.addr,e),ot(t,e)}}function Rm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;s.uniform4iv(this.addr,e),ot(t,e)}}function Pm(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Dm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(at(t,e))return;s.uniform2uiv(this.addr,e),ot(t,e)}}function Lm(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(at(t,e))return;s.uniform3uiv(this.addr,e),ot(t,e)}}function Im(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(at(t,e))return;s.uniform4uiv(this.addr,e),ot(t,e)}}function Fm(s,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Hc,r)}function Om(s,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Wc,r)}function Um(s,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Xc,r)}function Nm(s,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Vc,r)}function Bm(s){switch(s){case 5126:return xm;case 35664:return ym;case 35665:return Sm;case 35666:return Mm;case 35674:return Em;case 35675:return Tm;case 35676:return wm;case 5124:case 35670:return bm;case 35667:case 35671:return Am;case 35668:case 35672:return Cm;case 35669:case 35673:return Rm;case 5125:return Pm;case 36294:return Dm;case 36295:return Lm;case 36296:return Im;case 35678:case 36198:case 36298:case 36306:case 35682:return Fm;case 35679:case 36299:case 36307:return Om;case 35680:case 36300:case 36308:case 36293:return Um;case 36289:case 36303:case 36311:case 36292:return Nm}}function zm(s,e){s.uniform1fv(this.addr,e)}function km(s,e){const t=_r(e,this.size,2);s.uniform2fv(this.addr,t)}function Gm(s,e){const t=_r(e,this.size,3);s.uniform3fv(this.addr,t)}function Hm(s,e){const t=_r(e,this.size,4);s.uniform4fv(this.addr,t)}function Vm(s,e){const t=_r(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Wm(s,e){const t=_r(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Xm(s,e){const t=_r(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function qm(s,e){s.uniform1iv(this.addr,e)}function Ym(s,e){s.uniform2iv(this.addr,e)}function Zm(s,e){s.uniform3iv(this.addr,e)}function Km(s,e){s.uniform4iv(this.addr,e)}function jm(s,e){s.uniform1uiv(this.addr,e)}function $m(s,e){s.uniform2uiv(this.addr,e)}function Jm(s,e){s.uniform3uiv(this.addr,e)}function Qm(s,e){s.uniform4uiv(this.addr,e)}function eg(s,e,t){const i=this.cache,r=e.length,n=Os(t,r);at(i,n)||(s.uniform1iv(this.addr,n),ot(i,n));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Hc,n[o])}function tg(s,e,t){const i=this.cache,r=e.length,n=Os(t,r);at(i,n)||(s.uniform1iv(this.addr,n),ot(i,n));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Wc,n[o])}function ig(s,e,t){const i=this.cache,r=e.length,n=Os(t,r);at(i,n)||(s.uniform1iv(this.addr,n),ot(i,n));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Xc,n[o])}function ng(s,e,t){const i=this.cache,r=e.length,n=Os(t,r);at(i,n)||(s.uniform1iv(this.addr,n),ot(i,n));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Vc,n[o])}function rg(s){switch(s){case 5126:return zm;case 35664:return km;case 35665:return Gm;case 35666:return Hm;case 35674:return Vm;case 35675:return Wm;case 35676:return Xm;case 5124:case 35670:return qm;case 35667:case 35671:return Ym;case 35668:case 35672:return Zm;case 35669:case 35673:return Km;case 5125:return jm;case 36294:return $m;case 36295:return Jm;case 36296:return Qm;case 35678:case 36198:case 36298:case 36306:case 35682:return eg;case 35679:case 36299:case 36307:return tg;case 35680:case 36300:case 36308:case 36293:return ig;case 36289:case 36303:case 36311:case 36292:return ng}}class sg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Bm(t.type)}}class ag{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=rg(t.type)}}class og{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let n=0,o=r.length;n!==o;++n){const a=r[n];a.setValue(e,t[a.id],i)}}}const Sa=/(\w+)(\])?(\[|\.)?/g;function Xl(s,e){s.seq.push(e),s.map[e.id]=e}function lg(s,e,t){const i=s.name,r=i.length;for(Sa.lastIndex=0;;){const n=Sa.exec(i),o=Sa.lastIndex;let a=n[1];const l=n[2]==="]",u=n[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Xl(t,u===void 0?new sg(a,s,e):new ag(a,s,e));break}else{let p=t.map[a];p===void 0&&(p=new og(a),Xl(t,p)),t=p}}}class xs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const n=e.getActiveUniform(t,r),o=e.getUniformLocation(t,n.name);lg(n,o,this)}}setValue(e,t,i,r){const n=this.map[t];n!==void 0&&n.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let n=0,o=t.length;n!==o;++n){const a=t[n],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,n=e.length;r!==n;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function ql(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}let cg=0;function ug(s,e){const t=s.split(`
`),i=[],r=Math.max(e-6,0),n=Math.min(e+6,t.length);for(let o=r;o<n;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function fg(s){switch(s){case Rn:return["Linear","( value )"];case We:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function Yl(s,e,t){const i=s.getShaderParameter(e,s.COMPILE_STATUS),r=s.getShaderInfoLog(e).trim();if(i&&r==="")return"";const n=/ERROR: 0:(\d+)/.exec(r);if(n){const o=parseInt(n[1]);return t.toUpperCase()+`

`+r+`

`+ug(s.getShaderSource(e),o)}else return r}function hg(s,e){const t=fg(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function dg(s,e){let t;switch(e){case Rf:t="Linear";break;case Pf:t="Reinhard";break;case Df:t="OptimizedCineon";break;case Lf:t="ACESFilmic";break;case If:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function pg(s){return[s.extensionDerivatives||!!s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(wr).join(`
`)}function mg(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function gg(s,e){const t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const n=s.getActiveAttrib(e,r),o=n.name;let a=1;n.type===s.FLOAT_MAT2&&(a=2),n.type===s.FLOAT_MAT3&&(a=3),n.type===s.FLOAT_MAT4&&(a=4),t[o]={type:n.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function wr(s){return s!==""}function Zl(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Kl(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _g=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xa(s){return s.replace(_g,vg)}function vg(s,e){const t=we[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Xa(t)}const xg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jl(s){return s.replace(xg,yg)}function yg(s,e,t,i){let r="";for(let n=parseInt(e);n<parseInt(t);n++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return r}function $l(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Sg(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Sc?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===of?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Tr&&(e="SHADOWMAP_TYPE_VSM"),e}function Mg(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case sr:case ar:e="ENVMAP_TYPE_CUBE";break;case Ls:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Eg(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ar:e="ENVMAP_MODE_REFRACTION";break}return e}function Tg(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Tc:e="ENVMAP_BLENDING_MULTIPLY";break;case Af:e="ENVMAP_BLENDING_MIX";break;case Cf:e="ENVMAP_BLENDING_ADD";break}return e}function wg(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function bg(s,e,t,i){const r=s.getContext(),n=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Sg(t),u=Mg(t),c=Eg(t),p=Tg(t),h=wg(t),f=t.isWebGL2?"":pg(t),g=mg(n),d=r.createProgram();let m,_,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(wr).join(`
`),m.length>0&&(m+=`
`),_=[f,g].filter(wr).join(`
`),_.length>0&&(_+=`
`)):(m=[$l(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wr).join(`
`),_=[f,$l(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ui?"#define TONE_MAPPING":"",t.toneMapping!==Ui?we.tonemapping_pars_fragment:"",t.toneMapping!==Ui?dg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",we.encodings_pars_fragment,hg("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wr).join(`
`)),o=Xa(o),o=Zl(o,t),o=Kl(o,t),a=Xa(a),a=Zl(a,t),a=Kl(a,t),o=jl(o),a=jl(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["#define varying in",t.glslVersion===Ml?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ml?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const E=T+m+o,v=T+_+a,x=ql(r,r.VERTEX_SHADER,E),S=ql(r,r.FRAGMENT_SHADER,v);if(r.attachShader(d,x),r.attachShader(d,S),t.index0AttributeName!==void 0?r.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(d,0,"position"),r.linkProgram(d),s.debug.checkShaderErrors){const w=r.getProgramInfoLog(d).trim(),b=r.getShaderInfoLog(x).trim(),A=r.getShaderInfoLog(S).trim();let I=!0,L=!0;if(r.getProgramParameter(d,r.LINK_STATUS)===!1){I=!1;const D=Yl(r,x,"vertex"),F=Yl(r,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(d,r.VALIDATE_STATUS)+`

Program Info Log: `+w+`
`+D+`
`+F)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(b===""||A==="")&&(L=!1);L&&(this.diagnostics={runnable:I,programLog:w,vertexShader:{log:b,prefix:m},fragmentShader:{log:A,prefix:_}})}r.deleteShader(x),r.deleteShader(S);let M;this.getUniforms=function(){return M===void 0&&(M=new xs(r,d)),M};let y;return this.getAttributes=function(){return y===void 0&&(y=gg(r,d)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(d),this.program=void 0},this.name=t.shaderName,this.id=cg++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=x,this.fragmentShader=S,this}let Ag=0;class Cg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),n=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(n)===!1&&(o.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Rg(e),t.set(e,i)),i}}class Rg{constructor(e){this.id=Ag++,this.code=e,this.usedTimes=0}}function Pg(s,e,t,i,r,n,o){const a=new Cc,l=new Cg,u=[],c=r.isWebGL2,p=r.logarithmicDepthBuffer,h=r.vertexTextures;let f=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(y,w,b,A,I){const L=A.fog,D=I.geometry,F=y.isMeshStandardMaterial?A.environment:null,N=(y.isMeshStandardMaterial?t:e).get(y.envMap||F),H=!!N&&N.mapping===Ls?N.image.height:null,z=g[y.type];y.precision!==null&&(f=r.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const X=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,K=X!==void 0?X.length:0;let k=0;D.morphAttributes.position!==void 0&&(k=1),D.morphAttributes.normal!==void 0&&(k=2),D.morphAttributes.color!==void 0&&(k=3);let V,$,ee,te;if(z){const Re=gi[z];V=Re.vertexShader,$=Re.fragmentShader}else V=y.vertexShader,$=y.fragmentShader,l.update(y),ee=l.getVertexShaderID(y),te=l.getFragmentShaderID(y);const U=s.getRenderTarget(),Me=y.alphaTest>0,fe=y.clearcoat>0,ye=y.iridescence>0;return{isWebGL2:c,shaderID:z,shaderName:y.type,vertexShader:V,fragmentShader:$,defines:y.defines,customVertexShaderID:ee,customFragmentShaderID:te,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,instancing:I.isInstancedMesh===!0,instancingColor:I.isInstancedMesh===!0&&I.instanceColor!==null,supportsVertexTextures:h,outputEncoding:U===null?s.outputEncoding:U.isXRRenderTarget===!0?U.texture.encoding:Rn,map:!!y.map,matcap:!!y.matcap,envMap:!!N,envMapMode:N&&N.mapping,envMapCubeUVHeight:H,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===Qf,tangentSpaceNormalMap:y.normalMapType===Jf,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===We,clearcoat:fe,clearcoatMap:fe&&!!y.clearcoatMap,clearcoatRoughnessMap:fe&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:fe&&!!y.clearcoatNormalMap,iridescence:ye,iridescenceMap:ye&&!!y.iridescenceMap,iridescenceThicknessMap:ye&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===Qn,alphaMap:!!y.alphaMap,alphaTest:Me,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!D.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||y.transmission>0||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||y.sheen>0||!!y.sheenColorMap||!!y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!L,useFog:y.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:p,skinning:I.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:k,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&b.length>0,shadowMapType:s.shadowMap.type,toneMapping:y.toneMapped?s.toneMapping:Ui,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ii,flipSided:y.side===ai,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function m(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const b in y.defines)w.push(b),w.push(y.defines[b]);return y.isRawShaderMaterial===!1&&(_(w,y),T(w,y),w.push(s.outputEncoding)),w.push(y.customProgramCacheKey),w.join()}function _(y,w){y.push(w.precision),y.push(w.outputEncoding),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.combine),y.push(w.vertexUvs),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function T(y,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.map&&a.enable(4),w.matcap&&a.enable(5),w.envMap&&a.enable(6),w.lightMap&&a.enable(7),w.aoMap&&a.enable(8),w.emissiveMap&&a.enable(9),w.bumpMap&&a.enable(10),w.normalMap&&a.enable(11),w.objectSpaceNormalMap&&a.enable(12),w.tangentSpaceNormalMap&&a.enable(13),w.clearcoat&&a.enable(14),w.clearcoatMap&&a.enable(15),w.clearcoatRoughnessMap&&a.enable(16),w.clearcoatNormalMap&&a.enable(17),w.iridescence&&a.enable(18),w.iridescenceMap&&a.enable(19),w.iridescenceThicknessMap&&a.enable(20),w.displacementMap&&a.enable(21),w.specularMap&&a.enable(22),w.roughnessMap&&a.enable(23),w.metalnessMap&&a.enable(24),w.gradientMap&&a.enable(25),w.alphaMap&&a.enable(26),w.alphaTest&&a.enable(27),w.vertexColors&&a.enable(28),w.vertexAlphas&&a.enable(29),w.vertexUvs&&a.enable(30),w.vertexTangents&&a.enable(31),w.uvsVertexOnly&&a.enable(32),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.physicallyCorrectLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.specularIntensityMap&&a.enable(15),w.specularColorMap&&a.enable(16),w.transmission&&a.enable(17),w.transmissionMap&&a.enable(18),w.thicknessMap&&a.enable(19),w.sheen&&a.enable(20),w.sheenColorMap&&a.enable(21),w.sheenRoughnessMap&&a.enable(22),w.decodeVideoTexture&&a.enable(23),w.opaque&&a.enable(24),y.push(a.mask)}function E(y){const w=g[y.type];let b;if(w){const A=gi[w];b=mh.clone(A.uniforms)}else b=y.uniforms;return b}function v(y,w){let b;for(let A=0,I=u.length;A<I;A++){const L=u[A];if(L.cacheKey===w){b=L,++b.usedTimes;break}}return b===void 0&&(b=new bg(s,w,y,n),u.push(b)),b}function x(y){if(--y.usedTimes===0){const w=u.indexOf(y);u[w]=u[u.length-1],u.pop(),y.destroy()}}function S(y){l.remove(y)}function M(){l.dispose()}return{getParameters:d,getProgramCacheKey:m,getUniforms:E,acquireProgram:v,releaseProgram:x,releaseShaderCache:S,programs:u,dispose:M}}function Dg(){let s=new WeakMap;function e(n){let o=s.get(n);return o===void 0&&(o={},s.set(n,o)),o}function t(n){s.delete(n)}function i(n,o,a){s.get(n)[o]=a}function r(){s=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Lg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Jl(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Ql(){const s=[];let e=0;const t=[],i=[],r=[];function n(){e=0,t.length=0,i.length=0,r.length=0}function o(p,h,f,g,d,m){let _=s[e];return _===void 0?(_={id:p.id,object:p,geometry:h,material:f,groupOrder:g,renderOrder:p.renderOrder,z:d,group:m},s[e]=_):(_.id=p.id,_.object=p,_.geometry=h,_.material=f,_.groupOrder=g,_.renderOrder=p.renderOrder,_.z=d,_.group=m),e++,_}function a(p,h,f,g,d,m){const _=o(p,h,f,g,d,m);f.transmission>0?i.push(_):f.transparent===!0?r.push(_):t.push(_)}function l(p,h,f,g,d,m){const _=o(p,h,f,g,d,m);f.transmission>0?i.unshift(_):f.transparent===!0?r.unshift(_):t.unshift(_)}function u(p,h){t.length>1&&t.sort(p||Lg),i.length>1&&i.sort(h||Jl),r.length>1&&r.sort(h||Jl)}function c(){for(let p=e,h=s.length;p<h;p++){const f=s[p];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:n,push:a,unshift:l,finish:c,sort:u}}function Ig(){let s=new WeakMap;function e(i,r){const n=s.get(i);let o;return n===void 0?(o=new Ql,s.set(i,[o])):r>=n.length?(o=new Ql,n.push(o)):o=n[r],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function Fg(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new Ue};break;case"SpotLight":t={position:new W,direction:new W,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new W,halfWidth:new W,halfHeight:new W};break}return s[e.id]=t,t}}}function Og(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Ug=0;function Ng(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Bg(s,e){const t=new Fg,i=Og(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)r.probe.push(new W);const n=new W,o=new xt,a=new xt;function l(c,p){let h=0,f=0,g=0;for(let A=0;A<9;A++)r.probe[A].set(0,0,0);let d=0,m=0,_=0,T=0,E=0,v=0,x=0,S=0,M=0,y=0;c.sort(Ng);const w=p!==!0?Math.PI:1;for(let A=0,I=c.length;A<I;A++){const L=c[A],D=L.color,F=L.intensity,N=L.distance,H=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=D.r*F*w,f+=D.g*F*w,g+=D.b*F*w;else if(L.isLightProbe)for(let z=0;z<9;z++)r.probe[z].addScaledVector(L.sh.coefficients[z],F);else if(L.isDirectionalLight){const z=t.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity*w),L.castShadow){const X=L.shadow,K=i.get(L);K.shadowBias=X.bias,K.shadowNormalBias=X.normalBias,K.shadowRadius=X.radius,K.shadowMapSize=X.mapSize,r.directionalShadow[d]=K,r.directionalShadowMap[d]=H,r.directionalShadowMatrix[d]=L.shadow.matrix,v++}r.directional[d]=z,d++}else if(L.isSpotLight){const z=t.get(L);z.position.setFromMatrixPosition(L.matrixWorld),z.color.copy(D).multiplyScalar(F*w),z.distance=N,z.coneCos=Math.cos(L.angle),z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),z.decay=L.decay,r.spot[_]=z;const X=L.shadow;if(L.map&&(r.spotLightMap[M]=L.map,M++,X.updateMatrices(L),L.castShadow&&y++),r.spotLightMatrix[_]=X.matrix,L.castShadow){const K=i.get(L);K.shadowBias=X.bias,K.shadowNormalBias=X.normalBias,K.shadowRadius=X.radius,K.shadowMapSize=X.mapSize,r.spotShadow[_]=K,r.spotShadowMap[_]=H,S++}_++}else if(L.isRectAreaLight){const z=t.get(L);z.color.copy(D).multiplyScalar(F),z.halfWidth.set(L.width*.5,0,0),z.halfHeight.set(0,L.height*.5,0),r.rectArea[T]=z,T++}else if(L.isPointLight){const z=t.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity*w),z.distance=L.distance,z.decay=L.decay,L.castShadow){const X=L.shadow,K=i.get(L);K.shadowBias=X.bias,K.shadowNormalBias=X.normalBias,K.shadowRadius=X.radius,K.shadowMapSize=X.mapSize,K.shadowCameraNear=X.camera.near,K.shadowCameraFar=X.camera.far,r.pointShadow[m]=K,r.pointShadowMap[m]=H,r.pointShadowMatrix[m]=L.shadow.matrix,x++}r.point[m]=z,m++}else if(L.isHemisphereLight){const z=t.get(L);z.skyColor.copy(L.color).multiplyScalar(F*w),z.groundColor.copy(L.groundColor).multiplyScalar(F*w),r.hemi[E]=z,E++}}T>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_FLOAT_1,r.rectAreaLTC2=ae.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ae.LTC_HALF_1,r.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=f,r.ambient[2]=g;const b=r.hash;(b.directionalLength!==d||b.pointLength!==m||b.spotLength!==_||b.rectAreaLength!==T||b.hemiLength!==E||b.numDirectionalShadows!==v||b.numPointShadows!==x||b.numSpotShadows!==S||b.numSpotMaps!==M)&&(r.directional.length=d,r.spot.length=_,r.rectArea.length=T,r.point.length=m,r.hemi.length=E,r.directionalShadow.length=v,r.directionalShadowMap.length=v,r.pointShadow.length=x,r.pointShadowMap.length=x,r.spotShadow.length=S,r.spotShadowMap.length=S,r.directionalShadowMatrix.length=v,r.pointShadowMatrix.length=x,r.spotLightMatrix.length=S+M-y,r.spotLightMap.length=M,r.numSpotLightShadowsWithMaps=y,b.directionalLength=d,b.pointLength=m,b.spotLength=_,b.rectAreaLength=T,b.hemiLength=E,b.numDirectionalShadows=v,b.numPointShadows=x,b.numSpotShadows=S,b.numSpotMaps=M,r.version=Ug++)}function u(c,p){let h=0,f=0,g=0,d=0,m=0;const _=p.matrixWorldInverse;for(let T=0,E=c.length;T<E;T++){const v=c[T];if(v.isDirectionalLight){const x=r.directional[h];x.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(n),x.direction.transformDirection(_),h++}else if(v.isSpotLight){const x=r.spot[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(_),x.direction.setFromMatrixPosition(v.matrixWorld),n.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(n),x.direction.transformDirection(_),g++}else if(v.isRectAreaLight){const x=r.rectArea[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(_),a.identity(),o.copy(v.matrixWorld),o.premultiply(_),a.extractRotation(o),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),d++}else if(v.isPointLight){const x=r.point[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(_),f++}else if(v.isHemisphereLight){const x=r.hemi[m];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(_),m++}}}return{setup:l,setupView:u,state:r}}function ec(s,e){const t=new Bg(s,e),i=[],r=[];function n(){i.length=0,r.length=0}function o(p){i.push(p)}function a(p){r.push(p)}function l(p){t.setup(i,p)}function u(p){t.setupView(i,p)}return{init:n,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function zg(s,e){let t=new WeakMap;function i(n,o=0){const a=t.get(n);let l;return a===void 0?(l=new ec(s,e),t.set(n,[l])):o>=a.length?(l=new ec(s,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class kg extends Fs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Gg extends Fs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new W,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Hg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}
`,Vg=`
uniform sampler2D shadow_pass;
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

}
`;function Wg(s,e,t){let i=new Pc;const r=new ze,n=new ze,o=new vt,a=new kg({depthPacking:$f}),l=new Gg,u={},c=t.maxTextureSize,p={0:ai,1:rr,2:Ii},h=new Ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:Hg,fragmentShader:Vg}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new rn;g.setAttribute("position",new xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new di(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sc,this.render=function(v,x,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||v.length===0)return;const M=s.getRenderTarget(),y=s.getActiveCubeFace(),w=s.getActiveMipmapLevel(),b=s.state;b.setBlending($i),b.buffers.color.setClear(1,1,1,1),b.buffers.depth.setTest(!0),b.setScissorTest(!1);for(let A=0,I=v.length;A<I;A++){const L=v[A],D=L.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",L,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const F=D.getFrameExtents();if(r.multiply(F),n.copy(D.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(n.x=Math.floor(c/F.x),r.x=n.x*F.x,D.mapSize.x=n.x),r.y>c&&(n.y=Math.floor(c/F.y),r.y=n.y*F.y,D.mapSize.y=n.y)),D.map===null){const H=this.type!==Tr?{minFilter:Pt,magFilter:Pt}:{};D.map=new en(r.x,r.y,H),D.map.texture.name=L.name+".shadowMap",D.camera.updateProjectionMatrix()}s.setRenderTarget(D.map),s.clear();const N=D.getViewportCount();for(let H=0;H<N;H++){const z=D.getViewport(H);o.set(n.x*z.x,n.y*z.y,n.x*z.z,n.y*z.w),b.viewport(o),D.updateMatrices(L,H),i=D.getFrustum(),E(x,S,D.camera,L,this.type)}D.isPointLightShadow!==!0&&this.type===Tr&&_(D,S),D.needsUpdate=!1}m.needsUpdate=!1,s.setRenderTarget(M,y,w)};function _(v,x){const S=e.update(d);h.defines.VSM_SAMPLES!==v.blurSamples&&(h.defines.VSM_SAMPLES=v.blurSamples,f.defines.VSM_SAMPLES=v.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new en(r.x,r.y)),h.uniforms.shadow_pass.value=v.map.texture,h.uniforms.resolution.value=v.mapSize,h.uniforms.radius.value=v.radius,s.setRenderTarget(v.mapPass),s.clear(),s.renderBufferDirect(x,null,S,h,d,null),f.uniforms.shadow_pass.value=v.mapPass.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,s.setRenderTarget(v.map),s.clear(),s.renderBufferDirect(x,null,S,f,d,null)}function T(v,x,S,M,y,w){let b=null;const A=S.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(A!==void 0?b=A:b=S.isPointLight===!0?l:a,s.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0){const I=b.uuid,L=x.uuid;let D=u[I];D===void 0&&(D={},u[I]=D);let F=D[L];F===void 0&&(F=b.clone(),D[L]=F),b=F}return b.visible=x.visible,b.wireframe=x.wireframe,w===Tr?b.side=x.shadowSide!==null?x.shadowSide:x.side:b.side=x.shadowSide!==null?x.shadowSide:p[x.side],b.alphaMap=x.alphaMap,b.alphaTest=x.alphaTest,b.map=x.map,b.clipShadows=x.clipShadows,b.clippingPlanes=x.clippingPlanes,b.clipIntersection=x.clipIntersection,b.displacementMap=x.displacementMap,b.displacementScale=x.displacementScale,b.displacementBias=x.displacementBias,b.wireframeLinewidth=x.wireframeLinewidth,b.linewidth=x.linewidth,S.isPointLight===!0&&b.isMeshDistanceMaterial===!0&&(b.referencePosition.setFromMatrixPosition(S.matrixWorld),b.nearDistance=M,b.farDistance=y),b}function E(v,x,S,M,y){if(v.visible===!1)return;if(v.layers.test(x.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&y===Tr)&&(!v.frustumCulled||i.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,v.matrixWorld);const A=e.update(v),I=v.material;if(Array.isArray(I)){const L=A.groups;for(let D=0,F=L.length;D<F;D++){const N=L[D],H=I[N.materialIndex];if(H&&H.visible){const z=T(v,H,M,S.near,S.far,y);s.renderBufferDirect(S,null,A,z,v,N)}}}else if(I.visible){const L=T(v,I,M,S.near,S.far,y);s.renderBufferDirect(S,null,A,L,v,null)}}const b=v.children;for(let A=0,I=b.length;A<I;A++)E(b[A],x,S,M,y)}}function Xg(s,e,t){const i=t.isWebGL2;function r(){let O=!1;const Z=new vt;let ie=null;const ce=new vt(0,0,0,0);return{setMask:function(de){ie!==de&&!O&&(s.colorMask(de,de,de,de),ie=de)},setLocked:function(de){O=de},setClear:function(de,Ne,ft,yt,an){an===!0&&(de*=yt,Ne*=yt,ft*=yt),Z.set(de,Ne,ft,yt),ce.equals(Z)===!1&&(s.clearColor(de,Ne,ft,yt),ce.copy(Z))},reset:function(){O=!1,ie=null,ce.set(-1,0,0,0)}}}function n(){let O=!1,Z=null,ie=null,ce=null;return{setTest:function(de){de?Me(s.DEPTH_TEST):fe(s.DEPTH_TEST)},setMask:function(de){Z!==de&&!O&&(s.depthMask(de),Z=de)},setFunc:function(de){if(ie!==de){switch(de){case yf:s.depthFunc(s.NEVER);break;case Sf:s.depthFunc(s.ALWAYS);break;case Mf:s.depthFunc(s.LESS);break;case za:s.depthFunc(s.LEQUAL);break;case Ef:s.depthFunc(s.EQUAL);break;case Tf:s.depthFunc(s.GEQUAL);break;case wf:s.depthFunc(s.GREATER);break;case bf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ie=de}},setLocked:function(de){O=de},setClear:function(de){ce!==de&&(s.clearDepth(de),ce=de)},reset:function(){O=!1,Z=null,ie=null,ce=null}}}function o(){let O=!1,Z=null,ie=null,ce=null,de=null,Ne=null,ft=null,yt=null,an=null;return{setTest:function(He){O||(He?Me(s.STENCIL_TEST):fe(s.STENCIL_TEST))},setMask:function(He){Z!==He&&!O&&(s.stencilMask(He),Z=He)},setFunc:function(He,Ei,jt){(ie!==He||ce!==Ei||de!==jt)&&(s.stencilFunc(He,Ei,jt),ie=He,ce=Ei,de=jt)},setOp:function(He,Ei,jt){(Ne!==He||ft!==Ei||yt!==jt)&&(s.stencilOp(He,Ei,jt),Ne=He,ft=Ei,yt=jt)},setLocked:function(He){O=He},setClear:function(He){an!==He&&(s.clearStencil(He),an=He)},reset:function(){O=!1,Z=null,ie=null,ce=null,de=null,Ne=null,ft=null,yt=null,an=null}}}const a=new r,l=new n,u=new o,c=new WeakMap,p=new WeakMap;let h={},f={},g=new WeakMap,d=[],m=null,_=!1,T=null,E=null,v=null,x=null,S=null,M=null,y=null,w=!1,b=null,A=null,I=null,L=null,D=null;const F=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,H=0;const z=s.getParameter(s.VERSION);z.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(z)[1]),N=H>=1):z.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),N=H>=2);let X=null,K={};const k=s.getParameter(s.SCISSOR_BOX),V=s.getParameter(s.VIEWPORT),$=new vt().fromArray(k),ee=new vt().fromArray(V);function te(O,Z,ie){const ce=new Uint8Array(4),de=s.createTexture();s.bindTexture(O,de),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ne=0;Ne<ie;Ne++)s.texImage2D(Z+Ne,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ce);return de}const U={};U[s.TEXTURE_2D]=te(s.TEXTURE_2D,s.TEXTURE_2D,1),U[s.TEXTURE_CUBE_MAP]=te(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Me(s.DEPTH_TEST),l.setFunc(za),ct(!1),bt(qo),Me(s.CULL_FACE),nt($i);function Me(O){h[O]!==!0&&(s.enable(O),h[O]=!0)}function fe(O){h[O]!==!1&&(s.disable(O),h[O]=!1)}function ye(O,Z){return f[O]!==Z?(s.bindFramebuffer(O,Z),f[O]=Z,i&&(O===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=Z),O===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=Z)),!0):!1}function ue(O,Z){let ie=d,ce=!1;if(O)if(ie=g.get(Z),ie===void 0&&(ie=[],g.set(Z,ie)),O.isWebGLMultipleRenderTargets){const de=O.texture;if(ie.length!==de.length||ie[0]!==s.COLOR_ATTACHMENT0){for(let Ne=0,ft=de.length;Ne<ft;Ne++)ie[Ne]=s.COLOR_ATTACHMENT0+Ne;ie.length=de.length,ce=!0}}else ie[0]!==s.COLOR_ATTACHMENT0&&(ie[0]=s.COLOR_ATTACHMENT0,ce=!0);else ie[0]!==s.BACK&&(ie[0]=s.BACK,ce=!0);ce&&(t.isWebGL2?s.drawBuffers(ie):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ie))}function Re(O){return m!==O?(s.useProgram(O),m=O,!0):!1}const ve={[Yn]:s.FUNC_ADD,[cf]:s.FUNC_SUBTRACT,[uf]:s.FUNC_REVERSE_SUBTRACT};if(i)ve[jo]=s.MIN,ve[$o]=s.MAX;else{const O=e.get("EXT_blend_minmax");O!==null&&(ve[jo]=O.MIN_EXT,ve[$o]=O.MAX_EXT)}const xe={[ff]:s.ZERO,[hf]:s.ONE,[df]:s.SRC_COLOR,[Mc]:s.SRC_ALPHA,[xf]:s.SRC_ALPHA_SATURATE,[_f]:s.DST_COLOR,[mf]:s.DST_ALPHA,[pf]:s.ONE_MINUS_SRC_COLOR,[Ec]:s.ONE_MINUS_SRC_ALPHA,[vf]:s.ONE_MINUS_DST_COLOR,[gf]:s.ONE_MINUS_DST_ALPHA};function nt(O,Z,ie,ce,de,Ne,ft,yt){if(O===$i){_===!0&&(fe(s.BLEND),_=!1);return}if(_===!1&&(Me(s.BLEND),_=!0),O!==lf){if(O!==T||yt!==w){if((E!==Yn||S!==Yn)&&(s.blendEquation(s.FUNC_ADD),E=Yn,S=Yn),yt)switch(O){case Qn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Yo:s.blendFunc(s.ONE,s.ONE);break;case Zo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ko:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Qn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Yo:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Zo:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ko:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}v=null,x=null,M=null,y=null,T=O,w=yt}return}de=de||Z,Ne=Ne||ie,ft=ft||ce,(Z!==E||de!==S)&&(s.blendEquationSeparate(ve[Z],ve[de]),E=Z,S=de),(ie!==v||ce!==x||Ne!==M||ft!==y)&&(s.blendFuncSeparate(xe[ie],xe[ce],xe[Ne],xe[ft]),v=ie,x=ce,M=Ne,y=ft),T=O,w=!1}function lt(O,Z){O.side===Ii?fe(s.CULL_FACE):Me(s.CULL_FACE);let ie=O.side===ai;Z&&(ie=!ie),ct(ie),O.blending===Qn&&O.transparent===!1?nt($i):nt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),a.setMask(O.colorWrite);const ce=O.stencilWrite;u.setTest(ce),ce&&(u.setMask(O.stencilWriteMask),u.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),u.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ie(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Me(s.SAMPLE_ALPHA_TO_COVERAGE):fe(s.SAMPLE_ALPHA_TO_COVERAGE)}function ct(O){b!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),b=O)}function bt(O){O!==sf?(Me(s.CULL_FACE),O!==A&&(O===qo?s.cullFace(s.BACK):O===af?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):fe(s.CULL_FACE),A=O}function Ye(O){O!==I&&(N&&s.lineWidth(O),I=O)}function Ie(O,Z,ie){O?(Me(s.POLYGON_OFFSET_FILL),(L!==Z||D!==ie)&&(s.polygonOffset(Z,ie),L=Z,D=ie)):fe(s.POLYGON_OFFSET_FILL)}function li(O){O?Me(s.SCISSOR_TEST):fe(s.SCISSOR_TEST)}function Ut(O){O===void 0&&(O=s.TEXTURE0+F-1),X!==O&&(s.activeTexture(O),X=O)}function P(O,Z,ie){ie===void 0&&(X===null?ie=s.TEXTURE0+F-1:ie=X);let ce=K[ie];ce===void 0&&(ce={type:void 0,texture:void 0},K[ie]=ce),(ce.type!==O||ce.texture!==Z)&&(X!==ie&&(s.activeTexture(ie),X=ie),s.bindTexture(O,Z||U[O]),ce.type=O,ce.texture=Z)}function C(){const O=K[X];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Y(){try{s.compressedTexImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function re(){try{s.compressedTexImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function se(){try{s.texSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function oe(){try{s.texSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ee(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function le(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function J(){try{s.texStorage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ge(){try{s.texStorage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Se(){try{s.texImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function he(){try{s.texImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _e(O){$.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),$.copy(O))}function pe(O){ee.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),ee.copy(O))}function Fe(O,Z){let ie=p.get(Z);ie===void 0&&(ie=new WeakMap,p.set(Z,ie));let ce=ie.get(O);ce===void 0&&(ce=s.getUniformBlockIndex(Z,O.name),ie.set(O,ce))}function Ge(O,Z){const ce=p.get(Z).get(O);c.get(O)!==ce&&(s.uniformBlockBinding(Z,ce,O.__bindingPointIndex),c.set(O,ce))}function ut(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),i===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},X=null,K={},f={},g=new WeakMap,d=[],m=null,_=!1,T=null,E=null,v=null,x=null,S=null,M=null,y=null,w=!1,b=null,A=null,I=null,L=null,D=null,$.set(0,0,s.canvas.width,s.canvas.height),ee.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:Me,disable:fe,bindFramebuffer:ye,drawBuffers:ue,useProgram:Re,setBlending:nt,setMaterial:lt,setFlipSided:ct,setCullFace:bt,setLineWidth:Ye,setPolygonOffset:Ie,setScissorTest:li,activeTexture:Ut,bindTexture:P,unbindTexture:C,compressedTexImage2D:Y,compressedTexImage3D:re,texImage2D:Se,texImage3D:he,updateUBOMapping:Fe,uniformBlockBinding:Ge,texStorage2D:J,texStorage3D:ge,texSubImage2D:se,texSubImage3D:oe,compressedTexSubImage2D:Ee,compressedTexSubImage3D:le,scissor:_e,viewport:pe,reset:ut}}function qg(s,e,t,i,r,n,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,p=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let d;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(P,C){return _?new OffscreenCanvas(P,C):Es("canvas")}function E(P,C,Y,re){let se=1;if((P.width>re||P.height>re)&&(se=re/Math.max(P.width,P.height)),se<1||C===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const oe=C?Ba:Math.floor,Ee=oe(se*P.width),le=oe(se*P.height);d===void 0&&(d=T(Ee,le));const J=Y?T(Ee,le):d;return J.width=Ee,J.height=le,J.getContext("2d").drawImage(P,0,0,Ee,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Ee+"x"+le+")."),J}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function v(P){return Xo(P.width)&&Xo(P.height)}function x(P){return a?!1:P.wrapS!==hi||P.wrapT!==hi||P.minFilter!==Pt&&P.minFilter!==ei}function S(P,C){return P.generateMipmaps&&C&&P.minFilter!==Pt&&P.minFilter!==ei}function M(P){s.generateMipmap(P)}function y(P,C,Y,re,se=!1){if(a===!1)return C;if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let oe=C;return C===s.RED&&(Y===s.FLOAT&&(oe=s.R32F),Y===s.HALF_FLOAT&&(oe=s.R16F),Y===s.UNSIGNED_BYTE&&(oe=s.R8)),C===s.RG&&(Y===s.FLOAT&&(oe=s.RG32F),Y===s.HALF_FLOAT&&(oe=s.RG16F),Y===s.UNSIGNED_BYTE&&(oe=s.RG8)),C===s.RGBA&&(Y===s.FLOAT&&(oe=s.RGBA32F),Y===s.HALF_FLOAT&&(oe=s.RGBA16F),Y===s.UNSIGNED_BYTE&&(oe=re===We&&se===!1?s.SRGB8_ALPHA8:s.RGBA8),Y===s.UNSIGNED_SHORT_4_4_4_4&&(oe=s.RGBA4),Y===s.UNSIGNED_SHORT_5_5_5_1&&(oe=s.RGB5_A1)),(oe===s.R16F||oe===s.R32F||oe===s.RG16F||oe===s.RG32F||oe===s.RGBA16F||oe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function w(P,C,Y){return S(P,Y)===!0||P.isFramebufferTexture&&P.minFilter!==Pt&&P.minFilter!==ei?Math.log2(Math.max(C.width,C.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?C.mipmaps.length:1}function b(P){return P===Pt||P===Jo||P===Qo?s.NEAREST:s.LINEAR}function A(P){const C=P.target;C.removeEventListener("dispose",A),L(C),C.isVideoTexture&&g.delete(C)}function I(P){const C=P.target;C.removeEventListener("dispose",I),F(C)}function L(P){const C=i.get(P);if(C.__webglInit===void 0)return;const Y=P.source,re=m.get(Y);if(re){const se=re[C.__cacheKey];se.usedTimes--,se.usedTimes===0&&D(P),Object.keys(re).length===0&&m.delete(Y)}i.remove(P)}function D(P){const C=i.get(P);s.deleteTexture(C.__webglTexture);const Y=P.source,re=m.get(Y);delete re[C.__cacheKey],o.memory.textures--}function F(P){const C=P.texture,Y=i.get(P),re=i.get(C);if(re.__webglTexture!==void 0&&(s.deleteTexture(re.__webglTexture),o.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let se=0;se<6;se++)s.deleteFramebuffer(Y.__webglFramebuffer[se]),Y.__webglDepthbuffer&&s.deleteRenderbuffer(Y.__webglDepthbuffer[se]);else{if(s.deleteFramebuffer(Y.__webglFramebuffer),Y.__webglDepthbuffer&&s.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let se=0;se<Y.__webglColorRenderbuffer.length;se++)Y.__webglColorRenderbuffer[se]&&s.deleteRenderbuffer(Y.__webglColorRenderbuffer[se]);Y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let se=0,oe=C.length;se<oe;se++){const Ee=i.get(C[se]);Ee.__webglTexture&&(s.deleteTexture(Ee.__webglTexture),o.memory.textures--),i.remove(C[se])}i.remove(C),i.remove(P)}let N=0;function H(){N=0}function z(){const P=N;return P>=l&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l),N+=1,P}function X(P){const C=[];return C.push(P.wrapS),C.push(P.wrapT),C.push(P.wrapR||0),C.push(P.magFilter),C.push(P.minFilter),C.push(P.anisotropy),C.push(P.internalFormat),C.push(P.format),C.push(P.type),C.push(P.generateMipmaps),C.push(P.premultiplyAlpha),C.push(P.flipY),C.push(P.unpackAlignment),C.push(P.encoding),C.join()}function K(P,C){const Y=i.get(P);if(P.isVideoTexture&&li(P),P.isRenderTargetTexture===!1&&P.version>0&&Y.__version!==P.version){const re=P.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(Y,P,C);return}}t.bindTexture(s.TEXTURE_2D,Y.__webglTexture,s.TEXTURE0+C)}function k(P,C){const Y=i.get(P);if(P.version>0&&Y.__version!==P.version){fe(Y,P,C);return}t.bindTexture(s.TEXTURE_2D_ARRAY,Y.__webglTexture,s.TEXTURE0+C)}function V(P,C){const Y=i.get(P);if(P.version>0&&Y.__version!==P.version){fe(Y,P,C);return}t.bindTexture(s.TEXTURE_3D,Y.__webglTexture,s.TEXTURE0+C)}function $(P,C){const Y=i.get(P);if(P.version>0&&Y.__version!==P.version){ye(Y,P,C);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture,s.TEXTURE0+C)}const ee={[Ha]:s.REPEAT,[hi]:s.CLAMP_TO_EDGE,[Va]:s.MIRRORED_REPEAT},te={[Pt]:s.NEAREST,[Jo]:s.NEAREST_MIPMAP_NEAREST,[Qo]:s.NEAREST_MIPMAP_LINEAR,[ei]:s.LINEAR,[Ff]:s.LINEAR_MIPMAP_NEAREST,[Is]:s.LINEAR_MIPMAP_LINEAR};function U(P,C,Y){if(Y?(s.texParameteri(P,s.TEXTURE_WRAP_S,ee[C.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,ee[C.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,ee[C.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,te[C.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,te[C.minFilter])):(s.texParameteri(P,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(P,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(C.wrapS!==hi||C.wrapT!==hi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(P,s.TEXTURE_MAG_FILTER,b(C.magFilter)),s.texParameteri(P,s.TEXTURE_MIN_FILTER,b(C.minFilter)),C.minFilter!==Pt&&C.minFilter!==ei&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(C.type===yn&&e.has("OES_texture_float_linear")===!1||a===!1&&C.type===Lr&&e.has("OES_texture_half_float_linear")===!1)return;(C.anisotropy>1||i.get(C).__currentAnisotropy)&&(s.texParameterf(P,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,r.getMaxAnisotropy())),i.get(C).__currentAnisotropy=C.anisotropy)}}function Me(P,C){let Y=!1;P.__webglInit===void 0&&(P.__webglInit=!0,C.addEventListener("dispose",A));const re=C.source;let se=m.get(re);se===void 0&&(se={},m.set(re,se));const oe=X(C);if(oe!==P.__cacheKey){se[oe]===void 0&&(se[oe]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),se[oe].usedTimes++;const Ee=se[P.__cacheKey];Ee!==void 0&&(se[P.__cacheKey].usedTimes--,Ee.usedTimes===0&&D(C)),P.__cacheKey=oe,P.__webglTexture=se[oe].texture}return Y}function fe(P,C,Y){let re=s.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(re=s.TEXTURE_2D_ARRAY),C.isData3DTexture&&(re=s.TEXTURE_3D);const se=Me(P,C),oe=C.source;t.bindTexture(re,P.__webglTexture,s.TEXTURE0+Y);const Ee=i.get(oe);if(oe.version!==Ee.__version||se===!0){t.activeTexture(s.TEXTURE0+Y),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const le=x(C)&&v(C.image)===!1;let J=E(C.image,le,!1,c);J=Ut(C,J);const ge=v(J)||a,Se=n.convert(C.format,C.encoding);let he=n.convert(C.type),_e=y(C.internalFormat,Se,he,C.encoding,C.isVideoTexture);U(re,C,ge);let pe;const Fe=C.mipmaps,Ge=a&&C.isVideoTexture!==!0,ut=Ee.__version===void 0||se===!0,O=w(C,J,ge);if(C.isDepthTexture)_e=s.DEPTH_COMPONENT,a?C.type===yn?_e=s.DEPTH_COMPONENT32F:C.type===xn?_e=s.DEPTH_COMPONENT24:C.type===er?_e=s.DEPTH24_STENCIL8:_e=s.DEPTH_COMPONENT16:C.type===yn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),C.format===En&&_e===s.DEPTH_COMPONENT&&C.type!==bc&&C.type!==xn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),C.type=xn,he=n.convert(C.type)),C.format===or&&_e===s.DEPTH_COMPONENT&&(_e=s.DEPTH_STENCIL,C.type!==er&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),C.type=er,he=n.convert(C.type))),ut&&(Ge?t.texStorage2D(s.TEXTURE_2D,1,_e,J.width,J.height):t.texImage2D(s.TEXTURE_2D,0,_e,J.width,J.height,0,Se,he,null));else if(C.isDataTexture)if(Fe.length>0&&ge){Ge&&ut&&t.texStorage2D(s.TEXTURE_2D,O,_e,Fe[0].width,Fe[0].height);for(let Z=0,ie=Fe.length;Z<ie;Z++)pe=Fe[Z],Ge?t.texSubImage2D(s.TEXTURE_2D,Z,0,0,pe.width,pe.height,Se,he,pe.data):t.texImage2D(s.TEXTURE_2D,Z,_e,pe.width,pe.height,0,Se,he,pe.data);C.generateMipmaps=!1}else Ge?(ut&&t.texStorage2D(s.TEXTURE_2D,O,_e,J.width,J.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,J.width,J.height,Se,he,J.data)):t.texImage2D(s.TEXTURE_2D,0,_e,J.width,J.height,0,Se,he,J.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Ge&&ut&&t.texStorage3D(s.TEXTURE_2D_ARRAY,O,_e,Fe[0].width,Fe[0].height,J.depth);for(let Z=0,ie=Fe.length;Z<ie;Z++)pe=Fe[Z],C.format!==ii?Se!==null?Ge?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,pe.width,pe.height,J.depth,Se,pe.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Z,_e,pe.width,pe.height,J.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?t.texSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,pe.width,pe.height,J.depth,Se,he,pe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Z,_e,pe.width,pe.height,J.depth,0,Se,he,pe.data)}else{Ge&&ut&&t.texStorage2D(s.TEXTURE_2D,O,_e,Fe[0].width,Fe[0].height);for(let Z=0,ie=Fe.length;Z<ie;Z++)pe=Fe[Z],C.format!==ii?Se!==null?Ge?t.compressedTexSubImage2D(s.TEXTURE_2D,Z,0,0,pe.width,pe.height,Se,pe.data):t.compressedTexImage2D(s.TEXTURE_2D,Z,_e,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?t.texSubImage2D(s.TEXTURE_2D,Z,0,0,pe.width,pe.height,Se,he,pe.data):t.texImage2D(s.TEXTURE_2D,Z,_e,pe.width,pe.height,0,Se,he,pe.data)}else if(C.isDataArrayTexture)Ge?(ut&&t.texStorage3D(s.TEXTURE_2D_ARRAY,O,_e,J.width,J.height,J.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,Se,he,J.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,_e,J.width,J.height,J.depth,0,Se,he,J.data);else if(C.isData3DTexture)Ge?(ut&&t.texStorage3D(s.TEXTURE_3D,O,_e,J.width,J.height,J.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,Se,he,J.data)):t.texImage3D(s.TEXTURE_3D,0,_e,J.width,J.height,J.depth,0,Se,he,J.data);else if(C.isFramebufferTexture){if(ut)if(Ge)t.texStorage2D(s.TEXTURE_2D,O,_e,J.width,J.height);else{let Z=J.width,ie=J.height;for(let ce=0;ce<O;ce++)t.texImage2D(s.TEXTURE_2D,ce,_e,Z,ie,0,Se,he,null),Z>>=1,ie>>=1}}else if(Fe.length>0&&ge){Ge&&ut&&t.texStorage2D(s.TEXTURE_2D,O,_e,Fe[0].width,Fe[0].height);for(let Z=0,ie=Fe.length;Z<ie;Z++)pe=Fe[Z],Ge?t.texSubImage2D(s.TEXTURE_2D,Z,0,0,Se,he,pe):t.texImage2D(s.TEXTURE_2D,Z,_e,Se,he,pe);C.generateMipmaps=!1}else Ge?(ut&&t.texStorage2D(s.TEXTURE_2D,O,_e,J.width,J.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,Se,he,J)):t.texImage2D(s.TEXTURE_2D,0,_e,Se,he,J);S(C,ge)&&M(re),Ee.__version=oe.version,C.onUpdate&&C.onUpdate(C)}P.__version=C.version}function ye(P,C,Y){if(C.image.length!==6)return;const re=Me(P,C),se=C.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+Y);const oe=i.get(se);if(se.version!==oe.__version||re===!0){t.activeTexture(s.TEXTURE0+Y),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,C.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,C.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.NONE);const Ee=C.isCompressedTexture||C.image[0].isCompressedTexture,le=C.image[0]&&C.image[0].isDataTexture,J=[];for(let Z=0;Z<6;Z++)!Ee&&!le?J[Z]=E(C.image[Z],!1,!0,u):J[Z]=le?C.image[Z].image:C.image[Z],J[Z]=Ut(C,J[Z]);const ge=J[0],Se=v(ge)||a,he=n.convert(C.format,C.encoding),_e=n.convert(C.type),pe=y(C.internalFormat,he,_e,C.encoding),Fe=a&&C.isVideoTexture!==!0,Ge=oe.__version===void 0||re===!0;let ut=w(C,ge,Se);U(s.TEXTURE_CUBE_MAP,C,Se);let O;if(Ee){Fe&&Ge&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ut,pe,ge.width,ge.height);for(let Z=0;Z<6;Z++){O=J[Z].mipmaps;for(let ie=0;ie<O.length;ie++){const ce=O[ie];C.format!==ii?he!==null?Fe?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ie,0,0,ce.width,ce.height,he,ce.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ie,pe,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ie,0,0,ce.width,ce.height,he,_e,ce.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ie,pe,ce.width,ce.height,0,he,_e,ce.data)}}}else{O=C.mipmaps,Fe&&Ge&&(O.length>0&&ut++,t.texStorage2D(s.TEXTURE_CUBE_MAP,ut,pe,J[0].width,J[0].height));for(let Z=0;Z<6;Z++)if(le){Fe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,J[Z].width,J[Z].height,he,_e,J[Z].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,pe,J[Z].width,J[Z].height,0,he,_e,J[Z].data);for(let ie=0;ie<O.length;ie++){const de=O[ie].image[Z].image;Fe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ie+1,0,0,de.width,de.height,he,_e,de.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ie+1,pe,de.width,de.height,0,he,_e,de.data)}}else{Fe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,he,_e,J[Z]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,pe,he,_e,J[Z]);for(let ie=0;ie<O.length;ie++){const ce=O[ie];Fe?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ie+1,0,0,he,_e,ce.image[Z]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ie+1,pe,he,_e,ce.image[Z])}}}S(C,Se)&&M(s.TEXTURE_CUBE_MAP),oe.__version=se.version,C.onUpdate&&C.onUpdate(C)}P.__version=C.version}function ue(P,C,Y,re,se){const oe=n.convert(Y.format,Y.encoding),Ee=n.convert(Y.type),le=y(Y.internalFormat,oe,Ee,Y.encoding);i.get(C).__hasExternalTextures||(se===s.TEXTURE_3D||se===s.TEXTURE_2D_ARRAY?t.texImage3D(se,0,le,C.width,C.height,C.depth,0,oe,Ee,null):t.texImage2D(se,0,le,C.width,C.height,0,oe,Ee,null)),t.bindFramebuffer(s.FRAMEBUFFER,P),Ie(C)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,re,se,i.get(Y).__webglTexture,0,Ye(C)):(se===s.TEXTURE_2D||se>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,re,se,i.get(Y).__webglTexture,0),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Re(P,C,Y){if(s.bindRenderbuffer(s.RENDERBUFFER,P),C.depthBuffer&&!C.stencilBuffer){let re=s.DEPTH_COMPONENT16;if(Y||Ie(C)){const se=C.depthTexture;se&&se.isDepthTexture&&(se.type===yn?re=s.DEPTH_COMPONENT32F:se.type===xn&&(re=s.DEPTH_COMPONENT24));const oe=Ye(C);Ie(C)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,oe,re,C.width,C.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,oe,re,C.width,C.height)}else s.renderbufferStorage(s.RENDERBUFFER,re,C.width,C.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,P)}else if(C.depthBuffer&&C.stencilBuffer){const re=Ye(C);Y&&Ie(C)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,re,s.DEPTH24_STENCIL8,C.width,C.height):Ie(C)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,re,s.DEPTH24_STENCIL8,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,P)}else{const re=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let se=0;se<re.length;se++){const oe=re[se],Ee=n.convert(oe.format,oe.encoding),le=n.convert(oe.type),J=y(oe.internalFormat,Ee,le,oe.encoding),ge=Ye(C);Y&&Ie(C)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ge,J,C.width,C.height):Ie(C)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ge,J,C.width,C.height):s.renderbufferStorage(s.RENDERBUFFER,J,C.width,C.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ve(P,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),K(C.depthTexture,0);const re=i.get(C.depthTexture).__webglTexture,se=Ye(C);if(C.depthTexture.format===En)Ie(C)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,re,0,se):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,re,0);else if(C.depthTexture.format===or)Ie(C)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,re,0,se):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function xe(P){const C=i.get(P),Y=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!C.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");ve(C.__webglFramebuffer,P)}else if(Y){C.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer[re]),C.__webglDepthbuffer[re]=s.createRenderbuffer(),Re(C.__webglDepthbuffer[re],P,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer=s.createRenderbuffer(),Re(C.__webglDepthbuffer,P,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function nt(P,C,Y){const re=i.get(P);C!==void 0&&ue(re.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D),Y!==void 0&&xe(P)}function lt(P){const C=P.texture,Y=i.get(P),re=i.get(C);P.addEventListener("dispose",I),P.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=s.createTexture()),re.__version=C.version,o.memory.textures++);const se=P.isWebGLCubeRenderTarget===!0,oe=P.isWebGLMultipleRenderTargets===!0,Ee=v(P)||a;if(se){Y.__webglFramebuffer=[];for(let le=0;le<6;le++)Y.__webglFramebuffer[le]=s.createFramebuffer()}else{if(Y.__webglFramebuffer=s.createFramebuffer(),oe)if(r.drawBuffers){const le=P.texture;for(let J=0,ge=le.length;J<ge;J++){const Se=i.get(le[J]);Se.__webglTexture===void 0&&(Se.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&P.samples>0&&Ie(P)===!1){const le=oe?C:[C];Y.__webglMultisampledFramebuffer=s.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let J=0;J<le.length;J++){const ge=le[J];Y.__webglColorRenderbuffer[J]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Y.__webglColorRenderbuffer[J]);const Se=n.convert(ge.format,ge.encoding),he=n.convert(ge.type),_e=y(ge.internalFormat,Se,he,ge.encoding,P.isXRRenderTarget===!0),pe=Ye(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,pe,_e,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+J,s.RENDERBUFFER,Y.__webglColorRenderbuffer[J])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(Y.__webglDepthRenderbuffer=s.createRenderbuffer(),Re(Y.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(se){t.bindTexture(s.TEXTURE_CUBE_MAP,re.__webglTexture),U(s.TEXTURE_CUBE_MAP,C,Ee);for(let le=0;le<6;le++)ue(Y.__webglFramebuffer[le],P,C,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+le);S(C,Ee)&&M(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){const le=P.texture;for(let J=0,ge=le.length;J<ge;J++){const Se=le[J],he=i.get(Se);t.bindTexture(s.TEXTURE_2D,he.__webglTexture),U(s.TEXTURE_2D,Se,Ee),ue(Y.__webglFramebuffer,P,Se,s.COLOR_ATTACHMENT0+J,s.TEXTURE_2D),S(Se,Ee)&&M(s.TEXTURE_2D)}t.unbindTexture()}else{let le=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(a?le=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(le,re.__webglTexture),U(le,C,Ee),ue(Y.__webglFramebuffer,P,C,s.COLOR_ATTACHMENT0,le),S(C,Ee)&&M(le),t.unbindTexture()}P.depthBuffer&&xe(P)}function ct(P){const C=v(P)||a,Y=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let re=0,se=Y.length;re<se;re++){const oe=Y[re];if(S(oe,C)){const Ee=P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,le=i.get(oe).__webglTexture;t.bindTexture(Ee,le),M(Ee),t.unbindTexture()}}}function bt(P){if(a&&P.samples>0&&Ie(P)===!1){const C=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],Y=P.width,re=P.height;let se=s.COLOR_BUFFER_BIT;const oe=[],Ee=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=i.get(P),J=P.isWebGLMultipleRenderTargets===!0;if(J)for(let ge=0;ge<C.length;ge++)t.bindFramebuffer(s.FRAMEBUFFER,le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let ge=0;ge<C.length;ge++){oe.push(s.COLOR_ATTACHMENT0+ge),P.depthBuffer&&oe.push(Ee);const Se=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(Se===!1&&(P.depthBuffer&&(se|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&(se|=s.STENCIL_BUFFER_BIT)),J&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,le.__webglColorRenderbuffer[ge]),Se===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Ee]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Ee])),J){const he=i.get(C[ge]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,he,0)}s.blitFramebuffer(0,0,Y,re,0,0,Y,re,se,s.NEAREST),f&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,oe)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),J)for(let ge=0;ge<C.length;ge++){t.bindFramebuffer(s.FRAMEBUFFER,le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.RENDERBUFFER,le.__webglColorRenderbuffer[ge]);const Se=i.get(C[ge]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.TEXTURE_2D,Se,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function Ye(P){return Math.min(p,P.samples)}function Ie(P){const C=i.get(P);return a&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function li(P){const C=o.render.frame;g.get(P)!==C&&(g.set(P,C),P.update())}function Ut(P,C){const Y=P.encoding,re=P.format,se=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===Wa||Y!==Rn&&(Y===We?a===!1?e.has("EXT_sRGB")===!0&&re===ii?(P.format=Wa,P.minFilter=ei,P.generateMipmaps=!1):C=Uc.sRGBToLinear(C):(re!==ii||se!==Cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",Y)),C}this.allocateTextureUnit=z,this.resetTextureUnits=H,this.setTexture2D=K,this.setTexture2DArray=k,this.setTexture3D=V,this.setTextureCube=$,this.rebindTextures=nt,this.setupRenderTarget=lt,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=Ie}function Yg(s,e,t){const i=t.isWebGL2;function r(n,o=null){let a;if(n===Cn)return s.UNSIGNED_BYTE;if(n===Bf)return s.UNSIGNED_SHORT_4_4_4_4;if(n===zf)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Of)return s.BYTE;if(n===Uf)return s.SHORT;if(n===bc)return s.UNSIGNED_SHORT;if(n===Nf)return s.INT;if(n===xn)return s.UNSIGNED_INT;if(n===yn)return s.FLOAT;if(n===Lr)return i?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(n===kf)return s.ALPHA;if(n===ii)return s.RGBA;if(n===Hf)return s.LUMINANCE;if(n===Vf)return s.LUMINANCE_ALPHA;if(n===En)return s.DEPTH_COMPONENT;if(n===or)return s.DEPTH_STENCIL;if(n===Gf)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),s.RGBA;if(n===Wa)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(n===Wf)return s.RED;if(n===Xf)return s.RED_INTEGER;if(n===qf)return s.RG;if(n===Yf)return s.RG_INTEGER;if(n===Zf)return s.RGBA_INTEGER;if(n===qs||n===Ys||n===Zs||n===Ks)if(o===We)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===qs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ys)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ks)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===qs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ys)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ks)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===el||n===tl||n===il||n===nl)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===el)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===tl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===il)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===nl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Kf)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===rl||n===sl)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===rl)return o===We?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===sl)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===al||n===ol||n===ll||n===cl||n===ul||n===fl||n===hl||n===dl||n===pl||n===ml||n===gl||n===_l||n===vl||n===xl)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===al)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ol)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ll)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===cl)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ul)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fl)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===hl)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===dl)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===pl)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ml)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===gl)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_l)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===vl)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xl)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===yl)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===yl)return o===We?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return n===er?i?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[n]!==void 0?s[n]:null}return{convert:r}}class Zg extends ti{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ps extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Kg={type:"move"};class Ma{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ps,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ps,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ps,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,n=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const d of e.hand.values()){const m=t.getJointPose(d,i),_=this._getHandJoint(u,d);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=m.radius),_.visible=m!==null}const c=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],h=c.position.distanceTo(p.position),f=.02,g=.005;u.inputState.pinching&&h>f+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=f-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(n=t.getPose(e.gripSpace,i),n!==null&&(l.matrix.fromArray(n.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),n.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(n.linearVelocity)):l.hasLinearVelocity=!1,n.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(n.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&n!==null&&(r=n),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Kg)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=n!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ps;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class jg extends qt{constructor(e,t,i,r,n,o,a,l,u,c){if(c=c!==void 0?c:En,c!==En&&c!==or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===En&&(i=xn),i===void 0&&c===or&&(i=er),super(null,r,n,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Pt,this.minFilter=l!==void 0?l:Pt,this.flipY=!1,this.generateMipmaps=!1}}class $g extends gr{constructor(e,t){super();const i=this;let r=null,n=1,o=null,a="local-floor",l=null,u=null,c=null,p=null,h=null,f=null;const g=t.getContextAttributes();let d=null,m=null;const _=[],T=[],E=new Set,v=new Map,x=new ti;x.layers.enable(1),x.viewport=new vt;const S=new ti;S.layers.enable(2),S.viewport=new vt;const M=[x,S],y=new Zg;y.layers.enable(1),y.layers.enable(2);let w=null,b=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let V=_[k];return V===void 0&&(V=new Ma,_[k]=V),V.getTargetRaySpace()},this.getControllerGrip=function(k){let V=_[k];return V===void 0&&(V=new Ma,_[k]=V),V.getGripSpace()},this.getHand=function(k){let V=_[k];return V===void 0&&(V=new Ma,_[k]=V),V.getHandSpace()};function A(k){const V=T.indexOf(k.inputSource);if(V===-1)return;const $=_[V];$!==void 0&&$.dispatchEvent({type:k.type,data:k.inputSource})}function I(){r.removeEventListener("select",A),r.removeEventListener("selectstart",A),r.removeEventListener("selectend",A),r.removeEventListener("squeeze",A),r.removeEventListener("squeezestart",A),r.removeEventListener("squeezeend",A),r.removeEventListener("end",I),r.removeEventListener("inputsourceschange",L);for(let k=0;k<_.length;k++){const V=T[k];V!==null&&(T[k]=null,_[k].disconnect(V))}w=null,b=null,e.setRenderTarget(d),h=null,p=null,c=null,r=null,m=null,K.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){n=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return p!==null?p:h},this.getBinding=function(){return c},this.getFrame=function(){return f},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",I),r.addEventListener("inputsourceschange",L),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const V={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:n};h=new XRWebGLLayer(r,t,V),r.updateRenderState({baseLayer:h}),m=new en(h.framebufferWidth,h.framebufferHeight,{format:ii,type:Cn,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let V=null,$=null,ee=null;g.depth&&(ee=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,V=g.stencil?or:En,$=g.stencil?er:xn);const te={colorFormat:t.RGBA8,depthFormat:ee,scaleFactor:n};c=new XRWebGLBinding(r,t),p=c.createProjectionLayer(te),r.updateRenderState({layers:[p]}),m=new en(p.textureWidth,p.textureHeight,{format:ii,type:Cn,depthTexture:new jg(p.textureWidth,p.textureHeight,$,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const U=e.properties.get(m);U.__ignoreDepthValues=p.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await r.requestReferenceSpace(a),K.setContext(r),K.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function L(k){for(let V=0;V<k.removed.length;V++){const $=k.removed[V],ee=T.indexOf($);ee>=0&&(T[ee]=null,_[ee].disconnect($))}for(let V=0;V<k.added.length;V++){const $=k.added[V];let ee=T.indexOf($);if(ee===-1){for(let U=0;U<_.length;U++)if(U>=T.length){T.push($),ee=U;break}else if(T[U]===null){T[U]=$,ee=U;break}if(ee===-1)break}const te=_[ee];te&&te.connect($)}}const D=new W,F=new W;function N(k,V,$){D.setFromMatrixPosition(V.matrixWorld),F.setFromMatrixPosition($.matrixWorld);const ee=D.distanceTo(F),te=V.projectionMatrix.elements,U=$.projectionMatrix.elements,Me=te[14]/(te[10]-1),fe=te[14]/(te[10]+1),ye=(te[9]+1)/te[5],ue=(te[9]-1)/te[5],Re=(te[8]-1)/te[0],ve=(U[8]+1)/U[0],xe=Me*Re,nt=Me*ve,lt=ee/(-Re+ve),ct=lt*-Re;V.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(ct),k.translateZ(lt),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const bt=Me+lt,Ye=fe+lt,Ie=xe-ct,li=nt+(ee-ct),Ut=ye*fe/Ye*bt,P=ue*fe/Ye*bt;k.projectionMatrix.makePerspective(Ie,li,Ut,P,bt,Ye)}function H(k,V){V===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(V.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;y.near=S.near=x.near=k.near,y.far=S.far=x.far=k.far,(w!==y.near||b!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),w=y.near,b=y.far);const V=k.parent,$=y.cameras;H(y,V);for(let te=0;te<$.length;te++)H($[te],V);y.matrixWorld.decompose(y.position,y.quaternion,y.scale),k.matrix.copy(y.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale);const ee=k.children;for(let te=0,U=ee.length;te<U;te++)ee[te].updateMatrixWorld(!0);$.length===2?N(y,x,S):y.projectionMatrix.copy(x.projectionMatrix)},this.getCamera=function(){return y},this.getFoveation=function(){if(p!==null)return p.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(k){p!==null&&(p.fixedFoveation=k),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=k)},this.getPlanes=function(){return E};let z=null;function X(k,V){if(u=V.getViewerPose(l||o),f=V,u!==null){const $=u.views;h!==null&&(e.setRenderTargetFramebuffer(m,h.framebuffer),e.setRenderTarget(m));let ee=!1;$.length!==y.cameras.length&&(y.cameras.length=0,ee=!0);for(let te=0;te<$.length;te++){const U=$[te];let Me=null;if(h!==null)Me=h.getViewport(U);else{const ye=c.getViewSubImage(p,U);Me=ye.viewport,te===0&&(e.setRenderTargetTextures(m,ye.colorTexture,p.ignoreDepthValues?void 0:ye.depthStencilTexture),e.setRenderTarget(m))}let fe=M[te];fe===void 0&&(fe=new ti,fe.layers.enable(te),fe.viewport=new vt,M[te]=fe),fe.matrix.fromArray(U.transform.matrix),fe.projectionMatrix.fromArray(U.projectionMatrix),fe.viewport.set(Me.x,Me.y,Me.width,Me.height),te===0&&y.matrix.copy(fe.matrix),ee===!0&&y.cameras.push(fe)}}for(let $=0;$<_.length;$++){const ee=T[$],te=_[$];ee!==null&&te!==void 0&&te.update(ee,V,l||o)}if(z&&z(k,V),V.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:V.detectedPlanes});let $=null;for(const ee of E)V.detectedPlanes.has(ee)||($===null&&($=[]),$.push(ee));if($!==null)for(const ee of $)E.delete(ee),v.delete(ee),i.dispatchEvent({type:"planeremoved",data:ee});for(const ee of V.detectedPlanes)if(!E.has(ee))E.add(ee),v.set(ee,V.lastChangedTime),i.dispatchEvent({type:"planeadded",data:ee});else{const te=v.get(ee);ee.lastChangedTime>te&&(v.set(ee,ee.lastChangedTime),i.dispatchEvent({type:"planechanged",data:ee}))}}f=null}const K=new Dc;K.setAnimationLoop(X),this.setAnimationLoop=function(k){z=k},this.dispose=function(){}}}function Jg(s,e){function t(d,m){m.color.getRGB(d.fogColor.value,Oc(s)),m.isFog?(d.fogNear.value=m.near,d.fogFar.value=m.far):m.isFogExp2&&(d.fogDensity.value=m.density)}function i(d,m,_,T,E){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(d,m):m.isMeshToonMaterial?(r(d,m),c(d,m)):m.isMeshPhongMaterial?(r(d,m),u(d,m)):m.isMeshStandardMaterial?(r(d,m),p(d,m),m.isMeshPhysicalMaterial&&h(d,m,E)):m.isMeshMatcapMaterial?(r(d,m),f(d,m)):m.isMeshDepthMaterial?r(d,m):m.isMeshDistanceMaterial?(r(d,m),g(d,m)):m.isMeshNormalMaterial?r(d,m):m.isLineBasicMaterial?(n(d,m),m.isLineDashedMaterial&&o(d,m)):m.isPointsMaterial?a(d,m,_,T):m.isSpriteMaterial?l(d,m):m.isShadowMaterial?(d.color.value.copy(m.color),d.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(d,m){d.opacity.value=m.opacity,m.color&&d.diffuse.value.copy(m.color),m.emissive&&d.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.bumpMap&&(d.bumpMap.value=m.bumpMap,d.bumpScale.value=m.bumpScale,m.side===ai&&(d.bumpScale.value*=-1)),m.displacementMap&&(d.displacementMap.value=m.displacementMap,d.displacementScale.value=m.displacementScale,d.displacementBias.value=m.displacementBias),m.emissiveMap&&(d.emissiveMap.value=m.emissiveMap),m.normalMap&&(d.normalMap.value=m.normalMap,d.normalScale.value.copy(m.normalScale),m.side===ai&&d.normalScale.value.negate()),m.specularMap&&(d.specularMap.value=m.specularMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);const _=e.get(m).envMap;if(_&&(d.envMap.value=_,d.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=m.reflectivity,d.ior.value=m.ior,d.refractionRatio.value=m.refractionRatio),m.lightMap){d.lightMap.value=m.lightMap;const v=s.physicallyCorrectLights!==!0?Math.PI:1;d.lightMapIntensity.value=m.lightMapIntensity*v}m.aoMap&&(d.aoMap.value=m.aoMap,d.aoMapIntensity.value=m.aoMapIntensity);let T;m.map?T=m.map:m.specularMap?T=m.specularMap:m.displacementMap?T=m.displacementMap:m.normalMap?T=m.normalMap:m.bumpMap?T=m.bumpMap:m.roughnessMap?T=m.roughnessMap:m.metalnessMap?T=m.metalnessMap:m.alphaMap?T=m.alphaMap:m.emissiveMap?T=m.emissiveMap:m.clearcoatMap?T=m.clearcoatMap:m.clearcoatNormalMap?T=m.clearcoatNormalMap:m.clearcoatRoughnessMap?T=m.clearcoatRoughnessMap:m.iridescenceMap?T=m.iridescenceMap:m.iridescenceThicknessMap?T=m.iridescenceThicknessMap:m.specularIntensityMap?T=m.specularIntensityMap:m.specularColorMap?T=m.specularColorMap:m.transmissionMap?T=m.transmissionMap:m.thicknessMap?T=m.thicknessMap:m.sheenColorMap?T=m.sheenColorMap:m.sheenRoughnessMap&&(T=m.sheenRoughnessMap),T!==void 0&&(T.isWebGLRenderTarget&&(T=T.texture),T.matrixAutoUpdate===!0&&T.updateMatrix(),d.uvTransform.value.copy(T.matrix));let E;m.aoMap?E=m.aoMap:m.lightMap&&(E=m.lightMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),d.uv2Transform.value.copy(E.matrix))}function n(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity}function o(d,m){d.dashSize.value=m.dashSize,d.totalSize.value=m.dashSize+m.gapSize,d.scale.value=m.scale}function a(d,m,_,T){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.size.value=m.size*_,d.scale.value=T*.5,m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);let E;m.map?E=m.map:m.alphaMap&&(E=m.alphaMap),E!==void 0&&(E.matrixAutoUpdate===!0&&E.updateMatrix(),d.uvTransform.value.copy(E.matrix))}function l(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.rotation.value=m.rotation,m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);let _;m.map?_=m.map:m.alphaMap&&(_=m.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),d.uvTransform.value.copy(_.matrix))}function u(d,m){d.specular.value.copy(m.specular),d.shininess.value=Math.max(m.shininess,1e-4)}function c(d,m){m.gradientMap&&(d.gradientMap.value=m.gradientMap)}function p(d,m){d.roughness.value=m.roughness,d.metalness.value=m.metalness,m.roughnessMap&&(d.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(d.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(d.envMapIntensity.value=m.envMapIntensity)}function h(d,m,_){d.ior.value=m.ior,m.sheen>0&&(d.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),d.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(d.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(d.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(d.clearcoat.value=m.clearcoat,d.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(d.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),d.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===ai&&d.clearcoatNormalScale.value.negate())),m.iridescence>0&&(d.iridescence.value=m.iridescence,d.iridescenceIOR.value=m.iridescenceIOR,d.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(d.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(d.transmission.value=m.transmission,d.transmissionSamplerMap.value=_.texture,d.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(d.transmissionMap.value=m.transmissionMap),d.thickness.value=m.thickness,m.thicknessMap&&(d.thicknessMap.value=m.thicknessMap),d.attenuationDistance.value=m.attenuationDistance,d.attenuationColor.value.copy(m.attenuationColor)),d.specularIntensity.value=m.specularIntensity,d.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(d.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(d.specularColorMap.value=m.specularColorMap)}function f(d,m){m.matcap&&(d.matcap.value=m.matcap)}function g(d,m){d.referencePosition.value.copy(m.referencePosition),d.nearDistance.value=m.nearDistance,d.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function Qg(s,e,t,i){let r={},n={},o=[];const a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(T,E){const v=E.program;i.uniformBlockBinding(T,v)}function u(T,E){let v=r[T.id];v===void 0&&(g(T),v=c(T),r[T.id]=v,T.addEventListener("dispose",m));const x=E.program;i.updateUBOMapping(T,x);const S=e.render.frame;n[T.id]!==S&&(h(T),n[T.id]=S)}function c(T){const E=p();T.__bindingPointIndex=E;const v=s.createBuffer(),x=T.__size,S=T.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,x,S),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,E,v),v}function p(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){const E=r[T.id],v=T.uniforms,x=T.__cache;s.bindBuffer(s.UNIFORM_BUFFER,E);for(let S=0,M=v.length;S<M;S++){const y=v[S];if(f(y,S,x)===!0){const w=y.value,b=y.__offset;typeof w=="number"?(y.__data[0]=w,s.bufferSubData(s.UNIFORM_BUFFER,b,y.__data)):(y.value.isMatrix3?(y.__data[0]=y.value.elements[0],y.__data[1]=y.value.elements[1],y.__data[2]=y.value.elements[2],y.__data[3]=y.value.elements[0],y.__data[4]=y.value.elements[3],y.__data[5]=y.value.elements[4],y.__data[6]=y.value.elements[5],y.__data[7]=y.value.elements[0],y.__data[8]=y.value.elements[6],y.__data[9]=y.value.elements[7],y.__data[10]=y.value.elements[8],y.__data[11]=y.value.elements[0]):w.toArray(y.__data),s.bufferSubData(s.UNIFORM_BUFFER,b,y.__data))}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(T,E,v){const x=T.value;if(v[E]===void 0)return typeof x=="number"?v[E]=x:v[E]=x.clone(),!0;if(typeof x=="number"){if(v[E]!==x)return v[E]=x,!0}else{const S=v[E];if(S.equals(x)===!1)return S.copy(x),!0}return!1}function g(T){const E=T.uniforms;let v=0;const x=16;let S=0;for(let M=0,y=E.length;M<y;M++){const w=E[M],b=d(w);if(w.__data=new Float32Array(b.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=v,M>0){S=v%x;const A=x-S;S!==0&&A-b.boundary<0&&(v+=x-S,w.__offset=v)}v+=b.storage}return S=v%x,S>0&&(v+=x-S),T.__size=v,T.__cache={},this}function d(T){const E=T.value,v={boundary:0,storage:0};return typeof E=="number"?(v.boundary=4,v.storage=4):E.isVector2?(v.boundary=8,v.storage=8):E.isVector3||E.isColor?(v.boundary=16,v.storage=12):E.isVector4?(v.boundary=16,v.storage=16):E.isMatrix3?(v.boundary=48,v.storage=48):E.isMatrix4?(v.boundary=64,v.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),v}function m(T){const E=T.target;E.removeEventListener("dispose",m);const v=o.indexOf(E.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(r[E.id]),delete r[E.id],delete n[E.id]}function _(){for(const T in r)s.deleteBuffer(r[T]);o=[],r={},n={}}return{bind:l,update:u,dispose:_}}function e_(){const s=Es("canvas");return s.style.display="block",s}function t_(s={}){this.isWebGLRenderer=!0;const e=s.canvas!==void 0?s.canvas:e_(),t=s.context!==void 0?s.context:null,i=s.depth!==void 0?s.depth:!0,r=s.stencil!==void 0?s.stencil:!0,n=s.antialias!==void 0?s.antialias:!1,o=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,a=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,l=s.powerPreference!==void 0?s.powerPreference:"default",u=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let c;t!==null?c=t.getContextAttributes().alpha:c=s.alpha!==void 0?s.alpha:!1;let p=null,h=null;const f=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Rn,this.physicallyCorrectLights=!1,this.toneMapping=Ui,this.toneMappingExposure=1;const d=this;let m=!1,_=0,T=0,E=null,v=-1,x=null;const S=new vt,M=new vt;let y=null,w=e.width,b=e.height,A=1,I=null,L=null;const D=new vt(0,0,w,b),F=new vt(0,0,w,b);let N=!1;const H=new Pc;let z=!1,X=!1,K=null;const k=new xt,V=new ze,$=new W,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function te(){return E===null?A:1}let U=t;function Me(R,G){for(let q=0;q<R.length;q++){const B=R[q],j=e.getContext(B,G);if(j!==null)return j}return null}try{const R={alpha:!0,depth:i,stencil:r,antialias:n,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${rf}`),e.addEventListener("webglcontextlost",_e,!1),e.addEventListener("webglcontextrestored",pe,!1),e.addEventListener("webglcontextcreationerror",Fe,!1),U===null){const G=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&G.shift(),U=Me(G,R),U===null)throw Me(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let fe,ye,ue,Re,ve,xe,nt,lt,ct,bt,Ye,Ie,li,Ut,P,C,Y,re,se,oe,Ee,le,J,ge;function Se(){fe=new um(U),ye=new tm(U,fe,s),fe.init(ye),le=new Yg(U,fe,ye),ue=new Xg(U,fe,ye),Re=new dm(U),ve=new Dg,xe=new qg(U,fe,ue,ve,ye,le,Re),nt=new am(d),lt=new cm(d),ct=new fh(U,ye),J=new Qp(U,fe,ct,ye),bt=new fm(U,ct,Re,J),Ye=new _m(U,bt,ct,Re),se=new gm(U,ye,xe),C=new im(ve),Ie=new Pg(d,nt,lt,fe,ye,J,C),li=new Jg(d,ve),Ut=new Ig,P=new zg(fe,ye),re=new Jp(d,nt,lt,ue,Ye,c,o),Y=new Wg(d,Ye,ye),ge=new Qg(U,Re,ye,ue),oe=new em(U,fe,Re,ye),Ee=new hm(U,fe,Re,ye),Re.programs=Ie.programs,d.capabilities=ye,d.extensions=fe,d.properties=ve,d.renderLists=Ut,d.shadowMap=Y,d.state=ue,d.info=Re}Se();const he=new $g(d,U);this.xr=he,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const R=fe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=fe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return A},this.setPixelRatio=function(R){R!==void 0&&(A=R,this.setSize(w,b,!1))},this.getSize=function(R){return R.set(w,b)},this.setSize=function(R,G,q){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=R,b=G,e.width=Math.floor(R*A),e.height=Math.floor(G*A),q!==!1&&(e.style.width=R+"px",e.style.height=G+"px"),this.setViewport(0,0,R,G)},this.getDrawingBufferSize=function(R){return R.set(w*A,b*A).floor()},this.setDrawingBufferSize=function(R,G,q){w=R,b=G,A=q,e.width=Math.floor(R*q),e.height=Math.floor(G*q),this.setViewport(0,0,R,G)},this.getCurrentViewport=function(R){return R.copy(S)},this.getViewport=function(R){return R.copy(D)},this.setViewport=function(R,G,q,B){R.isVector4?D.set(R.x,R.y,R.z,R.w):D.set(R,G,q,B),ue.viewport(S.copy(D).multiplyScalar(A).floor())},this.getScissor=function(R){return R.copy(F)},this.setScissor=function(R,G,q,B){R.isVector4?F.set(R.x,R.y,R.z,R.w):F.set(R,G,q,B),ue.scissor(M.copy(F).multiplyScalar(A).floor())},this.getScissorTest=function(){return N},this.setScissorTest=function(R){ue.setScissorTest(N=R)},this.setOpaqueSort=function(R){I=R},this.setTransparentSort=function(R){L=R},this.getClearColor=function(R){return R.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor.apply(re,arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha.apply(re,arguments)},this.clear=function(R=!0,G=!0,q=!0){let B=0;R&&(B|=U.COLOR_BUFFER_BIT),G&&(B|=U.DEPTH_BUFFER_BIT),q&&(B|=U.STENCIL_BUFFER_BIT),U.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_e,!1),e.removeEventListener("webglcontextrestored",pe,!1),e.removeEventListener("webglcontextcreationerror",Fe,!1),Ut.dispose(),P.dispose(),ve.dispose(),nt.dispose(),lt.dispose(),Ye.dispose(),J.dispose(),ge.dispose(),Ie.dispose(),he.dispose(),he.removeEventListener("sessionstart",ce),he.removeEventListener("sessionend",de),K&&(K.dispose(),K=null),Ne.stop()};function _e(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const R=Re.autoReset,G=Y.enabled,q=Y.autoUpdate,B=Y.needsUpdate,j=Y.type;Se(),Re.autoReset=R,Y.enabled=G,Y.autoUpdate=q,Y.needsUpdate=B,Y.type=j}function Fe(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ge(R){const G=R.target;G.removeEventListener("dispose",Ge),ut(G)}function ut(R){O(R),ve.remove(R)}function O(R){const G=ve.get(R).programs;G!==void 0&&(G.forEach(function(q){Ie.releaseProgram(q)}),R.isShaderMaterial&&Ie.releaseShaderCache(R))}this.renderBufferDirect=function(R,G,q,B,j,me){G===null&&(G=ee);const Te=j.isMesh&&j.matrixWorld.determinant()<0,be=qu(R,G,q,B,j);ue.setMaterial(B,Te);let Ae=q.index,Oe=1;B.wireframe===!0&&(Ae=bt.getWireframeAttribute(q),Oe=2);const Pe=q.drawRange,De=q.attributes.position;let Je=Pe.start*Oe,Nt=(Pe.start+Pe.count)*Oe;me!==null&&(Je=Math.max(Je,me.start*Oe),Nt=Math.min(Nt,(me.start+me.count)*Oe)),Ae!==null?(Je=Math.max(Je,0),Nt=Math.min(Nt,Ae.count)):De!=null&&(Je=Math.max(Je,0),Nt=Math.min(Nt,De.count));const Ti=Nt-Je;if(Ti<0||Ti===1/0)return;J.setup(j,B,be,q,Ae);let on,Qe=oe;if(Ae!==null&&(on=ct.get(Ae),Qe=Ee,Qe.setIndex(on)),j.isMesh)B.wireframe===!0?(ue.setLineWidth(B.wireframeLinewidth*te()),Qe.setMode(U.LINES)):Qe.setMode(U.TRIANGLES);else if(j.isLine){let Le=B.linewidth;Le===void 0&&(Le=1),ue.setLineWidth(Le*te()),j.isLineSegments?Qe.setMode(U.LINES):j.isLineLoop?Qe.setMode(U.LINE_LOOP):Qe.setMode(U.LINE_STRIP)}else j.isPoints?Qe.setMode(U.POINTS):j.isSprite&&Qe.setMode(U.TRIANGLES);if(j.isInstancedMesh)Qe.renderInstances(Je,Ti,j.count);else if(q.isInstancedBufferGeometry){const Le=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,zs=Math.min(q.instanceCount,Le);Qe.renderInstances(Je,Ti,zs)}else Qe.render(Je,Ti)},this.compile=function(R,G){function q(B,j,me){B.transparent===!0&&B.side===Ii?(B.side=ai,B.needsUpdate=!0,jt(B,j,me),B.side=rr,B.needsUpdate=!0,jt(B,j,me),B.side=Ii):jt(B,j,me)}h=P.get(R),h.init(),g.push(h),R.traverseVisible(function(B){B.isLight&&B.layers.test(G.layers)&&(h.pushLight(B),B.castShadow&&h.pushShadow(B))}),h.setupLights(d.physicallyCorrectLights),R.traverse(function(B){const j=B.material;if(j)if(Array.isArray(j))for(let me=0;me<j.length;me++){const Te=j[me];q(Te,R,B)}else q(j,R,B)}),g.pop(),h=null};let Z=null;function ie(R){Z&&Z(R)}function ce(){Ne.stop()}function de(){Ne.start()}const Ne=new Dc;Ne.setAnimationLoop(ie),typeof self<"u"&&Ne.setContext(self),this.setAnimationLoop=function(R){Z=R,he.setAnimationLoop(R),R===null?Ne.stop():Ne.start()},he.addEventListener("sessionstart",ce),he.addEventListener("sessionend",de),this.render=function(R,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(G),G=he.getCamera()),R.isScene===!0&&R.onBeforeRender(d,R,G,E),h=P.get(R,g.length),h.init(),g.push(h),k.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),H.setFromProjectionMatrix(k),X=this.localClippingEnabled,z=C.init(this.clippingPlanes,X,G),p=Ut.get(R,f.length),p.init(),f.push(p),ft(R,G,0,d.sortObjects),p.finish(),d.sortObjects===!0&&p.sort(I,L),z===!0&&C.beginShadows();const q=h.state.shadowsArray;if(Y.render(q,R,G),z===!0&&C.endShadows(),this.info.autoReset===!0&&this.info.reset(),re.render(p,R),h.setupLights(d.physicallyCorrectLights),G.isArrayCamera){const B=G.cameras;for(let j=0,me=B.length;j<me;j++){const Te=B[j];yt(p,R,Te,Te.viewport)}}else yt(p,R,G);E!==null&&(xe.updateMultisampleRenderTarget(E),xe.updateRenderTargetMipmap(E)),R.isScene===!0&&R.onAfterRender(d,R,G),J.resetDefaultState(),v=-1,x=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,f.pop(),f.length>0?p=f[f.length-1]:p=null};function ft(R,G,q,B){if(R.visible===!1)return;if(R.layers.test(G.layers)){if(R.isGroup)q=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(G);else if(R.isLight)h.pushLight(R),R.castShadow&&h.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||H.intersectsSprite(R)){B&&$.setFromMatrixPosition(R.matrixWorld).applyMatrix4(k);const Te=Ye.update(R),be=R.material;be.visible&&p.push(R,Te,be,q,$.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(R.isSkinnedMesh&&R.skeleton.frame!==Re.render.frame&&(R.skeleton.update(),R.skeleton.frame=Re.render.frame),!R.frustumCulled||H.intersectsObject(R))){B&&$.setFromMatrixPosition(R.matrixWorld).applyMatrix4(k);const Te=Ye.update(R),be=R.material;if(Array.isArray(be)){const Ae=Te.groups;for(let Oe=0,Pe=Ae.length;Oe<Pe;Oe++){const De=Ae[Oe],Je=be[De.materialIndex];Je&&Je.visible&&p.push(R,Te,Je,q,$.z,De)}}else be.visible&&p.push(R,Te,be,q,$.z,null)}}const me=R.children;for(let Te=0,be=me.length;Te<be;Te++)ft(me[Te],G,q,B)}function yt(R,G,q,B){const j=R.opaque,me=R.transmissive,Te=R.transparent;h.setupLightsView(q),me.length>0&&an(j,G,q),B&&ue.viewport(S.copy(B)),j.length>0&&He(j,G,q),me.length>0&&He(me,G,q),Te.length>0&&He(Te,G,q),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function an(R,G,q){const B=ye.isWebGL2;K===null&&(K=new en(1,1,{generateMipmaps:!0,type:fe.has("EXT_color_buffer_half_float")?Lr:Cn,minFilter:Is,samples:B&&n===!0?4:0})),d.getDrawingBufferSize(V),B?K.setSize(V.x,V.y):K.setSize(Ba(V.x),Ba(V.y));const j=d.getRenderTarget();d.setRenderTarget(K),d.clear();const me=d.toneMapping;d.toneMapping=Ui,He(R,G,q),d.toneMapping=me,xe.updateMultisampleRenderTarget(K),xe.updateRenderTargetMipmap(K),d.setRenderTarget(j)}function He(R,G,q){const B=G.isScene===!0?G.overrideMaterial:null;for(let j=0,me=R.length;j<me;j++){const Te=R[j],be=Te.object,Ae=Te.geometry,Oe=B===null?Te.material:B,Pe=Te.group;be.layers.test(q.layers)&&Ei(be,G,q,Ae,Oe,Pe)}}function Ei(R,G,q,B,j,me){R.onBeforeRender(d,G,q,B,j,me),R.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(d,G,q,B,R,me),j.transparent===!0&&j.side===Ii?(j.side=ai,j.needsUpdate=!0,d.renderBufferDirect(q,G,B,j,R,me),j.side=rr,j.needsUpdate=!0,d.renderBufferDirect(q,G,B,j,R,me),j.side=Ii):d.renderBufferDirect(q,G,B,j,R,me),R.onAfterRender(d,G,q,B,j,me)}function jt(R,G,q){G.isScene!==!0&&(G=ee);const B=ve.get(R),j=h.state.lights,me=h.state.shadowsArray,Te=j.state.version,be=Ie.getParameters(R,j.state,me,G,q),Ae=Ie.getProgramCacheKey(be);let Oe=B.programs;B.environment=R.isMeshStandardMaterial?G.environment:null,B.fog=G.fog,B.envMap=(R.isMeshStandardMaterial?lt:nt).get(R.envMap||B.environment),Oe===void 0&&(R.addEventListener("dispose",Ge),Oe=new Map,B.programs=Oe);let Pe=Oe.get(Ae);if(Pe!==void 0){if(B.currentProgram===Pe&&B.lightsStateVersion===Te)return Bo(R,be),Pe}else be.uniforms=Ie.getUniforms(R),R.onBuild(q,be,d),R.onBeforeCompile(be,d),Pe=Ie.acquireProgram(be,Ae),Oe.set(Ae,Pe),B.uniforms=be.uniforms;const De=B.uniforms;(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(De.clippingPlanes=C.uniform),Bo(R,be),B.needsLights=Zu(R),B.lightsStateVersion=Te,B.needsLights&&(De.ambientLightColor.value=j.state.ambient,De.lightProbe.value=j.state.probe,De.directionalLights.value=j.state.directional,De.directionalLightShadows.value=j.state.directionalShadow,De.spotLights.value=j.state.spot,De.spotLightShadows.value=j.state.spotShadow,De.rectAreaLights.value=j.state.rectArea,De.ltc_1.value=j.state.rectAreaLTC1,De.ltc_2.value=j.state.rectAreaLTC2,De.pointLights.value=j.state.point,De.pointLightShadows.value=j.state.pointShadow,De.hemisphereLights.value=j.state.hemi,De.directionalShadowMap.value=j.state.directionalShadowMap,De.directionalShadowMatrix.value=j.state.directionalShadowMatrix,De.spotShadowMap.value=j.state.spotShadowMap,De.spotLightMatrix.value=j.state.spotLightMatrix,De.spotLightMap.value=j.state.spotLightMap,De.pointShadowMap.value=j.state.pointShadowMap,De.pointShadowMatrix.value=j.state.pointShadowMatrix);const Je=Pe.getUniforms(),Nt=xs.seqWithValue(Je.seq,De);return B.currentProgram=Pe,B.uniformsList=Nt,Pe}function Bo(R,G){const q=ve.get(R);q.outputEncoding=G.outputEncoding,q.instancing=G.instancing,q.skinning=G.skinning,q.morphTargets=G.morphTargets,q.morphNormals=G.morphNormals,q.morphColors=G.morphColors,q.morphTargetsCount=G.morphTargetsCount,q.numClippingPlanes=G.numClippingPlanes,q.numIntersection=G.numClipIntersection,q.vertexAlphas=G.vertexAlphas,q.vertexTangents=G.vertexTangents,q.toneMapping=G.toneMapping}function qu(R,G,q,B,j){G.isScene!==!0&&(G=ee),xe.resetTextureUnits();const me=G.fog,Te=B.isMeshStandardMaterial?G.environment:null,be=E===null?d.outputEncoding:E.isXRRenderTarget===!0?E.texture.encoding:Rn,Ae=(B.isMeshStandardMaterial?lt:nt).get(B.envMap||Te),Oe=B.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Pe=!!B.normalMap&&!!q.attributes.tangent,De=!!q.morphAttributes.position,Je=!!q.morphAttributes.normal,Nt=!!q.morphAttributes.color,Ti=B.toneMapped?d.toneMapping:Ui,on=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Qe=on!==void 0?on.length:0,Le=ve.get(B),zs=h.state.lights;if(z===!0&&(X===!0||R!==x)){const Bt=R===x&&B.id===v;C.setState(B,R,Bt)}let ht=!1;B.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==zs.state.version||Le.outputEncoding!==be||j.isInstancedMesh&&Le.instancing===!1||!j.isInstancedMesh&&Le.instancing===!0||j.isSkinnedMesh&&Le.skinning===!1||!j.isSkinnedMesh&&Le.skinning===!0||Le.envMap!==Ae||B.fog===!0&&Le.fog!==me||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==C.numPlanes||Le.numIntersection!==C.numIntersection)||Le.vertexAlphas!==Oe||Le.vertexTangents!==Pe||Le.morphTargets!==De||Le.morphNormals!==Je||Le.morphColors!==Nt||Le.toneMapping!==Ti||ye.isWebGL2===!0&&Le.morphTargetsCount!==Qe)&&(ht=!0):(ht=!0,Le.__version=B.version);let ln=Le.currentProgram;ht===!0&&(ln=jt(B,G,j));let zo=!1,vr=!1,ks=!1;const At=ln.getUniforms(),cn=Le.uniforms;if(ue.useProgram(ln.program)&&(zo=!0,vr=!0,ks=!0),B.id!==v&&(v=B.id,vr=!0),zo||x!==R){if(At.setValue(U,"projectionMatrix",R.projectionMatrix),ye.logarithmicDepthBuffer&&At.setValue(U,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),x!==R&&(x=R,vr=!0,ks=!0),B.isShaderMaterial||B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshStandardMaterial||B.envMap){const Bt=At.map.cameraPosition;Bt!==void 0&&Bt.setValue(U,$.setFromMatrixPosition(R.matrixWorld))}(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&At.setValue(U,"isOrthographic",R.isOrthographicCamera===!0),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial||B.isShadowMaterial||j.isSkinnedMesh)&&At.setValue(U,"viewMatrix",R.matrixWorldInverse)}if(j.isSkinnedMesh){At.setOptional(U,j,"bindMatrix"),At.setOptional(U,j,"bindMatrixInverse");const Bt=j.skeleton;Bt&&(ye.floatVertexTextures?(Bt.boneTexture===null&&Bt.computeBoneTexture(),At.setValue(U,"boneTexture",Bt.boneTexture,xe),At.setValue(U,"boneTextureSize",Bt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Gs=q.morphAttributes;if((Gs.position!==void 0||Gs.normal!==void 0||Gs.color!==void 0&&ye.isWebGL2===!0)&&se.update(j,q,B,ln),(vr||Le.receiveShadow!==j.receiveShadow)&&(Le.receiveShadow=j.receiveShadow,At.setValue(U,"receiveShadow",j.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(cn.envMap.value=Ae,cn.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),vr&&(At.setValue(U,"toneMappingExposure",d.toneMappingExposure),Le.needsLights&&Yu(cn,ks),me&&B.fog===!0&&li.refreshFogUniforms(cn,me),li.refreshMaterialUniforms(cn,B,A,b,K),xs.upload(U,Le.uniformsList,cn,xe)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(xs.upload(U,Le.uniformsList,cn,xe),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&At.setValue(U,"center",j.center),At.setValue(U,"modelViewMatrix",j.modelViewMatrix),At.setValue(U,"normalMatrix",j.normalMatrix),At.setValue(U,"modelMatrix",j.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Bt=B.uniformsGroups;for(let Hs=0,Ku=Bt.length;Hs<Ku;Hs++)if(ye.isWebGL2){const ko=Bt[Hs];ge.update(ko,ln),ge.bind(ko,ln)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ln}function Yu(R,G){R.ambientLightColor.needsUpdate=G,R.lightProbe.needsUpdate=G,R.directionalLights.needsUpdate=G,R.directionalLightShadows.needsUpdate=G,R.pointLights.needsUpdate=G,R.pointLightShadows.needsUpdate=G,R.spotLights.needsUpdate=G,R.spotLightShadows.needsUpdate=G,R.rectAreaLights.needsUpdate=G,R.hemisphereLights.needsUpdate=G}function Zu(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(R,G,q){ve.get(R.texture).__webglTexture=G,ve.get(R.depthTexture).__webglTexture=q;const B=ve.get(R);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=q===void 0,B.__autoAllocateDepthBuffer||fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,G){const q=ve.get(R);q.__webglFramebuffer=G,q.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(R,G=0,q=0){E=R,_=G,T=q;let B=!0,j=null,me=!1,Te=!1;if(R){const Ae=ve.get(R);Ae.__useDefaultFramebuffer!==void 0?(ue.bindFramebuffer(U.FRAMEBUFFER,null),B=!1):Ae.__webglFramebuffer===void 0?xe.setupRenderTarget(R):Ae.__hasExternalTextures&&xe.rebindTextures(R,ve.get(R.texture).__webglTexture,ve.get(R.depthTexture).__webglTexture);const Oe=R.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Te=!0);const Pe=ve.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(j=Pe[G],me=!0):ye.isWebGL2&&R.samples>0&&xe.useMultisampledRTT(R)===!1?j=ve.get(R).__webglMultisampledFramebuffer:j=Pe,S.copy(R.viewport),M.copy(R.scissor),y=R.scissorTest}else S.copy(D).multiplyScalar(A).floor(),M.copy(F).multiplyScalar(A).floor(),y=N;if(ue.bindFramebuffer(U.FRAMEBUFFER,j)&&ye.drawBuffers&&B&&ue.drawBuffers(R,j),ue.viewport(S),ue.scissor(M),ue.setScissorTest(y),me){const Ae=ve.get(R.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ae.__webglTexture,q)}else if(Te){const Ae=ve.get(R.texture),Oe=G||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ae.__webglTexture,q||0,Oe)}v=-1},this.readRenderTargetPixels=function(R,G,q,B,j,me,Te){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=ve.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Te!==void 0&&(be=be[Te]),be){ue.bindFramebuffer(U.FRAMEBUFFER,be);try{const Ae=R.texture,Oe=Ae.format,Pe=Ae.type;if(Oe!==ii&&le.convert(Oe)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=Pe===Lr&&(fe.has("EXT_color_buffer_half_float")||ye.isWebGL2&&fe.has("EXT_color_buffer_float"));if(Pe!==Cn&&le.convert(Pe)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Pe===yn&&(ye.isWebGL2||fe.has("OES_texture_float")||fe.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=R.width-B&&q>=0&&q<=R.height-j&&U.readPixels(G,q,B,j,le.convert(Oe),le.convert(Pe),me)}finally{const Ae=E!==null?ve.get(E).__webglFramebuffer:null;ue.bindFramebuffer(U.FRAMEBUFFER,Ae)}}},this.copyFramebufferToTexture=function(R,G,q=0){const B=Math.pow(2,-q),j=Math.floor(G.image.width*B),me=Math.floor(G.image.height*B);xe.setTexture2D(G,0),U.copyTexSubImage2D(U.TEXTURE_2D,q,0,0,R.x,R.y,j,me),ue.unbindTexture()},this.copyTextureToTexture=function(R,G,q,B=0){const j=G.image.width,me=G.image.height,Te=le.convert(q.format),be=le.convert(q.type);xe.setTexture2D(q,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,q.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,q.unpackAlignment),G.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,B,R.x,R.y,j,me,Te,be,G.image.data):G.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,B,R.x,R.y,G.mipmaps[0].width,G.mipmaps[0].height,Te,G.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,B,R.x,R.y,Te,be,G.image),B===0&&q.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),ue.unbindTexture()},this.copyTextureToTexture3D=function(R,G,q,B,j=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const me=R.max.x-R.min.x+1,Te=R.max.y-R.min.y+1,be=R.max.z-R.min.z+1,Ae=le.convert(B.format),Oe=le.convert(B.type);let Pe;if(B.isData3DTexture)xe.setTexture3D(B,0),Pe=U.TEXTURE_3D;else if(B.isDataArrayTexture)xe.setTexture2DArray(B,0),Pe=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);const De=U.getParameter(U.UNPACK_ROW_LENGTH),Je=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Nt=U.getParameter(U.UNPACK_SKIP_PIXELS),Ti=U.getParameter(U.UNPACK_SKIP_ROWS),on=U.getParameter(U.UNPACK_SKIP_IMAGES),Qe=q.isCompressedTexture?q.mipmaps[0]:q.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,Qe.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Qe.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,R.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,R.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,R.min.z),q.isDataTexture||q.isData3DTexture?U.texSubImage3D(Pe,j,G.x,G.y,G.z,me,Te,be,Ae,Oe,Qe.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Pe,j,G.x,G.y,G.z,me,Te,be,Ae,Qe.data)):U.texSubImage3D(Pe,j,G.x,G.y,G.z,me,Te,be,Ae,Oe,Qe),U.pixelStorei(U.UNPACK_ROW_LENGTH,De),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Je),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Nt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ti),U.pixelStorei(U.UNPACK_SKIP_IMAGES,on),j===0&&B.generateMipmaps&&U.generateMipmap(Pe),ue.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?xe.setTextureCube(R,0):R.isData3DTexture?xe.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?xe.setTexture2DArray(R,0):xe.setTexture2D(R,0),ue.unbindTexture()},this.resetState=function(){_=0,T=0,E=null,ue.reset(),J.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class qc extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class i_ extends vc{constructor(t={}){super(t);Q(this,"cameraPers");Q(this,"cameraOrth");Q(this,"renderer");Q(this,"mainScene");Q(this,"isRender",!0);Q(this,"renderSize",new Ua);t.transparent==null&&(t.transparent=!1);let i={canvas:this.el,antialias:!1,preserveDrawingBuffer:!0,powerPreference:"low-power"};t.transparent&&(i.premultipliedAlpha=!0,i.alpha=!0),this.renderer=new t_(i),this.renderer.autoClear=!0,this.renderer.setClearColor(16777215,1),this.mainScene=new qc,this.cameraPers=this._makePersCamera(),this._updatePersCamera(this.cameraPers,10,10),this.cameraOrth=this._makeOrthCamera(),this._updateOrthCamera(this.cameraOrth,10,10)}init(){super.init()}_makePersCamera(){return new ti(60,1,1e-7,5e4)}_makeOrthCamera(){return new kc(1,1,1,1)}_updatePersCamera(t,i=10,r=10){t.aspect=i/r,t.updateProjectionMatrix(),t.position.z=r/Math.tan(t.fov*Math.PI/360)/2}_updateOrthCamera(t,i=10,r=10){t.left=-i*.5,t.right=i*.5,t.top=r*.5,t.bottom=-r*.5,t.near=-1e4,t.far=1e4,t.updateProjectionMatrix(),t.position.set(0,0,1e3)}_update(){super._update()}_setUni(t,i,r){const n=this._getUni(t);n[i].value=r}_getUni(t){return t.material.uniforms}}class ho extends rn{constructor(e=1,t=8,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const n=[],o=[],a=[],l=[],u=new W,c=new ze;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let p=0,h=3;p<=t;p++,h+=3){const f=i+p/t*r;u.x=e*Math.cos(f),u.y=e*Math.sin(f),o.push(u.x,u.y,u.z),a.push(0,0,1),c.x=(o[h]/e+1)/2,c.y=(o[h+1]/e+1)/2,l.push(c.x,c.y)}for(let p=1;p<=t;p++)n.push(p,p+1,0);this.setIndex(n),this.setAttribute("position",new yi(o,3)),this.setAttribute("normal",new yi(a,3)),this.setAttribute("uv",new yi(l,2))}static fromJSON(e){return new ho(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Yc extends qc{constructor(t=1){super();Q(this,"opt",{});Q(this,"_tgNum",1);Q(this,"_texture",[]);this._tgNum=t;for(let i=0;i<this._tgNum;i++){const r=new en(16,16,{format:ii});this._texture.push(r)}}dispose(){this._texture!=null&&(this._texture.forEach(t=>{t.dispose()}),this._texture.splice(0))}texture(t=0){return this._texture[t].texture}render(t,i,r=0,n=!0){const o=this._texture[r];t.setRenderTarget(o),n&&t.clear(),t.render(this,i),t.setRenderTarget(null)}setSize(t,i,r=1){const n=this._texture.length;for(let o=0;o<n;o++)this._texture[o].setSize(t*r,i*r)}}var n_=`void main(){
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,r_=`uniform sampler2D tDiffuse;
uniform float weight[10];
uniform float ratio;
uniform bool horizontal;
uniform vec2 resolution;

void main(void) {

  vec2 tFrag = 1.0 / resolution;
  vec2 fc;
  vec3 destColor = vec3(0.0);

  if(horizontal){
    fc = vec2(gl_FragCoord.s, gl_FragCoord.t);
    
    
    
    
    
    

    destColor += texture2D(tDiffuse, (fc + vec2(-9.0, 0.0)) * tFrag).rgb * weight[9];
    destColor += texture2D(tDiffuse, (fc + vec2(-8.0, 0.0)) * tFrag).rgb * weight[8];
    destColor += texture2D(tDiffuse, (fc + vec2(-7.0, 0.0)) * tFrag).rgb * weight[7];
    destColor += texture2D(tDiffuse, (fc + vec2(-6.0, 0.0)) * tFrag).rgb * weight[6];
    destColor += texture2D(tDiffuse, (fc + vec2(-5.0, 0.0)) * tFrag).rgb * weight[5];
    destColor += texture2D(tDiffuse, (fc + vec2(-4.0, 0.0)) * tFrag).rgb * weight[4];
    destColor += texture2D(tDiffuse, (fc + vec2(-3.0, 0.0)) * tFrag).rgb * weight[3];
    destColor += texture2D(tDiffuse, (fc + vec2(-2.0, 0.0)) * tFrag).rgb * weight[2];
    destColor += texture2D(tDiffuse, (fc + vec2(-1.0, 0.0)) * tFrag).rgb * weight[1];
    destColor += texture2D(tDiffuse, (fc + vec2( 0.0, 0.0)) * tFrag).rgb * weight[0];
    destColor += texture2D(tDiffuse, (fc + vec2( 1.0, 0.0)) * tFrag).rgb * weight[1];
    destColor += texture2D(tDiffuse, (fc + vec2( 2.0, 0.0)) * tFrag).rgb * weight[2];
    destColor += texture2D(tDiffuse, (fc + vec2( 3.0, 0.0)) * tFrag).rgb * weight[3];
    destColor += texture2D(tDiffuse, (fc + vec2( 4.0, 0.0)) * tFrag).rgb * weight[4];
    destColor += texture2D(tDiffuse, (fc + vec2( 5.0, 0.0)) * tFrag).rgb * weight[5];
    destColor += texture2D(tDiffuse, (fc + vec2( 6.0, 0.0)) * tFrag).rgb * weight[6];
    destColor += texture2D(tDiffuse, (fc + vec2( 7.0, 0.0)) * tFrag).rgb * weight[7];
    destColor += texture2D(tDiffuse, (fc + vec2( 8.0, 0.0)) * tFrag).rgb * weight[8];
    destColor += texture2D(tDiffuse, (fc + vec2( 9.0, 0.0)) * tFrag).rgb * weight[9];

    
    
    
    
    
    
  }else{
    fc = gl_FragCoord.st;

    
    
    
    
    
    

    destColor += texture2D(tDiffuse, (fc + vec2(0.0, -9.0)) * tFrag).rgb * weight[9];
    destColor += texture2D(tDiffuse, (fc + vec2(0.0, -8.0)) * tFrag).rgb * weight[8];
    destColor += texture2D(tDiffuse, (fc + vec2(0.0, -7.0)) * tFrag).rgb * weight[7];
    destColor += texture2D(tDiffuse, (fc + vec2(0.0, -6.0)) * tFrag).rgb * weight[6];
    destColor += texture2D(tDiffuse, (fc + vec2(0.0, -5.0)) * tFrag).rgb * weight[5];
    destColor += texture2D(tDiffuse, (fc + vec2(0.0, -4.0)) * tFrag).rgb * weight[4];
    destColor += texture2D(tDiffuse, (fc + vec2(0.0, -3.0)) * tFrag).rgb * weight[3];
    destColor += texture2D(tDiffuse, (fc + vec2(0.0, -2.0)) * tFrag).rgb * weight[2];
    destColor += texture2D(tDiffuse, (fc + vec2(0.0, -1.0)) * tFrag).rgb * weight[1];
    destColor += texture2D(tDiffuse, (fc + vec2(0.0,  0.0)) * tFrag).rgb * weight[0];
    destColor += texture2D(tDiffuse, (fc + vec2(0.0,  1.0)) * tFrag).rgb * weight[1];
    destColor += texture2D(tDiffuse, (fc + vec2(0.0,  2.0)) * tFrag).rgb * weight[2];
    destColor += texture2D(tDiffuse, (fc + vec2(0.0,  3.0)) * tFrag).rgb * weight[3];
    destColor += texture2D(tDiffuse, (fc + vec2(0.0,  4.0)) * tFrag).rgb * weight[4];
    destColor += texture2D(tDiffuse, (fc + vec2(0.0,  5.0)) * tFrag).rgb * weight[5];
    destColor += texture2D(tDiffuse, (fc + vec2(0.0,  6.0)) * tFrag).rgb * weight[6];
    destColor += texture2D(tDiffuse, (fc + vec2(0.0,  7.0)) * tFrag).rgb * weight[7];
    destColor += texture2D(tDiffuse, (fc + vec2(0.0,  8.0)) * tFrag).rgb * weight[8];
    destColor += texture2D(tDiffuse, (fc + vec2(0.0,  9.0)) * tFrag).rgb * weight[9];

    
    
    
    
    
    
  }

  gl_FragColor = vec4(destColor, 1.0);

}`;class po{constructor(e){this.value=e}clone(){return new po(this.value.clone===void 0?this.value:this.value.clone())}}class s_{constructor(){Q(this,"_capture");Q(this,"_mesh");Q(this,"_num",10);this._capture=new Yc(2),this._mesh=new di(new Xr(1,1),new Ni({vertexShader:n_,fragmentShader:r_,transparent:!0,uniforms:{tDiffuse:{value:null},horizontal:{value:!0},rate:{value:1},weight:new po(new Array(this._num)),resolution:{value:new ze(0,0)}}})),this._capture.add(this._mesh)}getTexture(){return this._capture.texture(1)}render(e,t,i,r,n,o=100){const a=window.devicePixelRatio||1;this._capture.setSize(e,t,a),this._mesh.scale.set(e,t,1);const l=this._mesh.material.uniforms;l.resolution.value.set(e*a,t*a);const u=[],c=l.weight.value.length;let p=0,h=0;for(;p<c;){const f=1+2*p;let g=Math.exp(-.5*(f*f)/o);u.push(g),p>0&&(g*=2),h+=g,p++}for(p=0;p<c;)u[p]/=h,p++;l.weight.value=u,l.tDiffuse.value=i,l.horizontal.value=!0,this._capture.render(r,n,0),l.tDiffuse.value=this._capture.texture(0),l.horizontal.value=!1,this._capture.render(r,n,1)}}var a_=`varying vec2 vUv;

void main(){
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,o_=`uniform sampler2D tDiffuse;
uniform vec3 color;
uniform float time;
uniform float bright;
uniform float alpha;
uniform float contrast;

varying vec2 vUv;

void main(void) {

  vec4 dest = texture2D(tDiffuse, vUv);
  dest.rgb = (dest.rgb - 0.5) / (1.0 - contrast) + 0.5;
  
  dest.rgb = min(vec3(1.0), dest.rgb);
  dest.a *= alpha;

  dest.a *= 1.0 - step(0.1, distance(dest.rgb, vec3(1.0)));

  float t = time * 0.01;
  dest.rgb *= color;

  float kake = 1000.0;
  dest.rgb -= sin(vUv.x * kake) * cos(vUv.y * kake) * 0.2;

  

  

  

  

  gl_FragColor = dest;

}`;class l_ extends Rc{constructor(t={}){super();Q(this,"_mesh");this._mesh=new di(new Xr(1,1),new Ni({vertexShader:a_,fragmentShader:o_,transparent:!0,side:Ii,depthTest:!1,uniforms:{tDiffuse:{value:t.tex},alpha:{value:1},color:{value:Ze.instance.randomArr(pt.instance.COLOR)},time:{value:Ze.instance.randomInt(0,1e3)},bright:{value:0},contrast:{value:1}}})),this.add(this._mesh)}_update(){super._update()}_resize(){super._resize()}}function Pi(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Zc(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}var Yt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},cr={duration:.5,overwrite:!1,delay:0},mo,Lt,it,ni=1e8,Be=1/ni,qa=Math.PI*2,c_=qa/4,u_=0,Kc=Math.sqrt,f_=Math.cos,h_=Math.sin,mt=function(e){return typeof e=="string"},Ke=function(e){return typeof e=="function"},Bi=function(e){return typeof e=="number"},go=function(e){return typeof e>"u"},Mi=function(e){return typeof e=="object"},It=function(e){return e!==!1},jc=function(){return typeof window<"u"},ms=function(e){return Ke(e)||mt(e)},$c=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},wt=Array.isArray,Ya=/(?:-?\.?\d|\.)+/gi,Jc=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,$n=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ea=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Qc=/[+-]=-?[.\d]+/,eu=/[^,'"\[\]\s]+/gi,d_=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Xe,Qt,Za,_o,Zt={},Ts={},tu,iu=function(e){return(Ts=Pn(e,Zt))&&Kt},vo=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ws=function(e,t){return!t&&console.warn(e)},nu=function(e,t){return e&&(Zt[e]=t)&&Ts&&(Ts[e]=t)||Zt},Fr=function(){return 0},p_={suppressEvents:!0,isStart:!0,kill:!1},ys={suppressEvents:!0,kill:!1},m_={suppressEvents:!0},xo={},Ji=[],Ka={},ru,Ht={},Ta={},tc=30,Ss=[],yo="",So=function(e){var t=e[0],i,r;if(Mi(t)||Ke(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=Ss.length;r--&&!Ss[r].targetTest(t););i=Ss[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new bu(e[r],i)))||e.splice(r,1);return e},wn=function(e){return e._gsap||So(ri(e))[0]._gsap},su=function(e,t,i){return(i=e[t])&&Ke(i)?e[t]():go(i)&&e.getAttribute&&e.getAttribute(t)||i},Ft=function(e,t){return(e=e.split(",")).forEach(t)||e},je=function(e){return Math.round(e*1e5)/1e5||0},_t=function(e){return Math.round(e*1e7)/1e7||0},tr=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},g_=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},bs=function(){var e=Ji.length,t=Ji.slice(0),i,r;for(Ka={},Ji.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},au=function(e,t,i,r){Ji.length&&bs(),e.render(t,i,r||Lt&&t<0&&(e._initted||e._startAt)),Ji.length&&bs()},ou=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(eu).length<2?t:mt(e)?e.trim():e},lu=function(e){return e},oi=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},__=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Pn=function(e,t){for(var i in t)e[i]=t[i];return e},ic=function s(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Mi(t[i])?s(e[i]||(e[i]={}),t[i]):t[i]);return e},As=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Cr=function(e){var t=e.parent||Xe,i=e.keyframes?__(wt(e.keyframes)):oi;if(It(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},v_=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},cu=function(e,t,i,r,n){i===void 0&&(i="_first"),r===void 0&&(r="_last");var o=e[r],a;if(n)for(a=t[n];o&&o[n]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Us=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var n=t._prev,o=t._next;n?n._next=o:e[i]===t&&(e[i]=o),o?o._prev=n:e[r]===t&&(e[r]=n),t._next=t._prev=t.parent=null},tn=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},bn=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},x_=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},ja=function(e,t,i,r){return e._startAt&&(Lt?e._startAt.revert(ys):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},y_=function s(e){return!e||e._ts&&s(e.parent)},nc=function(e){return e._repeat?ur(e._tTime,e=e.duration()+e._rDelay)*e:0},ur=function(e,t){var i=Math.floor(e/=t);return e&&i===e?i-1:i},Cs=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ns=function(e){return e._end=_t(e._start+(e._tDur/Math.abs(e._ts||e._rts||Be)||0))},Bs=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=_t(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ns(e),i._dirty||bn(i,e)),e},uu=function(e,t){var i;if((t._time||t._initted&&!t._dur)&&(i=Cs(e.rawTime(),t),(!t._dur||qr(0,t.totalDuration(),i)-t._tTime>Be)&&t.render(i,!0)),bn(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Be}},vi=function(e,t,i,r){return t.parent&&tn(t),t._start=_t((Bi(i)?i:i||e!==Xe?Jt(e,i,t):e._time)+t._delay),t._end=_t(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),cu(e,t,"_first","_last",e._sort?"_start":0),$a(t)||(e._recent=t),r||uu(e,t),e._ts<0&&Bs(e,e._tTime),e},fu=function(e,t){return(Zt.ScrollTrigger||vo("scrollTrigger",t))&&Zt.ScrollTrigger.create(t,e)},hu=function(e,t,i,r,n){if(Eo(e,t,n),!e._initted)return 1;if(!i&&e._pt&&!Lt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&ru!==Wt.frame)return Ji.push(e),e._lazy=[n,r],1},S_=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},$a=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},M_=function(e,t,i,r){var n=e.ratio,o=t<0||!t&&(!e._start&&S_(e)&&!(!e._initted&&$a(e))||(e._ts<0||e._dp._ts<0)&&!$a(e))?0:1,a=e._rDelay,l=0,u,c,p;if(a&&e._repeat&&(l=qr(0,e._tDur,t),c=ur(l,a),e._yoyo&&c&1&&(o=1-o),c!==ur(e._tTime,a)&&(n=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==n||Lt||r||e._zTime===Be||!t&&e._zTime){if(!e._initted&&hu(e,t,r,i,l))return;for(p=e._zTime,e._zTime=t||(i?Be:0),i||(i=t&&!p),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&ja(e,t,i,!0),e._onUpdate&&!i&&si(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&si(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&tn(e,1),!i&&!Lt&&(si(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},E_=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},fr=function(e,t,i,r){var n=e._repeat,o=_t(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=n?n<0?1e10:_t(o*(n+1)+e._rDelay*n):o,a>0&&!r&&Bs(e,e._tTime=e._tDur*a),e.parent&&Ns(e),i||bn(e.parent,e),e},rc=function(e){return e instanceof Dt?bn(e):fr(e,e._dur)},T_={_start:0,endTime:Fr,totalDuration:Fr},Jt=function s(e,t,i){var r=e.labels,n=e._recent||T_,o=e.duration()>=ni?n.endTime(!1):e._dur,a,l,u;return mt(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?n._start:n.endTime(n._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?n:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(wt(i)?i[0]:i).totalDuration()),a>1?s(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},Rr=function(e,t,i){var r=Bi(t[1]),n=(r?2:1)+(e<2?0:1),o=t[n],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=It(l.vars.inherit)&&l.parent;o.immediateRender=It(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[n-1]}return new st(t[0],o,t[n+1])},sn=function(e,t){return e||e===0?t(e):t},qr=function(e,t,i){return i<e?e:i>t?t:i},Et=function(e,t){return!mt(e)||!(t=d_.exec(e))?"":t[1]},w_=function(e,t,i){return sn(i,function(r){return qr(e,t,r)})},Ja=[].slice,du=function(e,t){return e&&Mi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Mi(e[0]))&&!e.nodeType&&e!==Qt},b_=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var n;return mt(r)&&!t||du(r,1)?(n=i).push.apply(n,ri(r)):i.push(r)})||i},ri=function(e,t,i){return it&&!t&&it.selector?it.selector(e):mt(e)&&!i&&(Za||!hr())?Ja.call((t||_o).querySelectorAll(e),0):wt(e)?b_(e,i):du(e)?Ja.call(e,0):e?[e]:[]},Qa=function(e){return e=ri(e)[0]||ws("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return ri(t,i.querySelectorAll?i:i===e?ws("Invalid scope")||_o.createElement("div"):e)}},pu=function(e){return e.sort(function(){return .5-Math.random()})},mu=function(e){if(Ke(e))return e;var t=Mi(e)?e:{each:e},i=An(t.ease),r=t.from||0,n=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,p=r;return mt(r)?c=p={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],p=r[1]),function(h,f,g){var d=(g||t).length,m=o[d],_,T,E,v,x,S,M,y,w;if(!m){if(w=t.grid==="auto"?0:(t.grid||[1,ni])[1],!w){for(M=-ni;M<(M=g[w++].getBoundingClientRect().left)&&w<d;);w--}for(m=o[d]=[],_=l?Math.min(w,d)*c-.5:r%w,T=w===ni?0:l?d*p/w-.5:r/w|0,M=0,y=ni,S=0;S<d;S++)E=S%w-_,v=T-(S/w|0),m[S]=x=u?Math.abs(u==="y"?v:E):Kc(E*E+v*v),x>M&&(M=x),x<y&&(y=x);r==="random"&&pu(m),m.max=M-y,m.min=y,m.v=d=(parseFloat(t.amount)||parseFloat(t.each)*(w>d?d-1:u?u==="y"?d/w:w:Math.max(w,d/w))||0)*(r==="edges"?-1:1),m.b=d<0?n-d:n,m.u=Et(t.amount||t.each)||0,i=i&&d<0?Eu(i):i}return d=(m[h]-m.min)/m.max||0,_t(m.b+(i?i(d):d)*m.v)+m.u}},eo=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=_t(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(Bi(i)?0:Et(i))}},gu=function(e,t){var i=wt(e),r,n;return!i&&Mi(e)&&(r=i=e.radius||ni,e.values?(e=ri(e.values),(n=!Bi(e[0]))&&(r*=r)):e=eo(e.increment)),sn(t,i?Ke(e)?function(o){return n=e(o),Math.abs(n-o)<=r?n:o}:function(o){for(var a=parseFloat(n?o.x:o),l=parseFloat(n?o.y:0),u=ni,c=0,p=e.length,h,f;p--;)n?(h=e[p].x-a,f=e[p].y-l,h=h*h+f*f):h=Math.abs(e[p]-a),h<u&&(u=h,c=p);return c=!r||u<=r?e[c]:o,n||c===o||Bi(o)?c:c+Et(o)}:eo(e))},_u=function(e,t,i,r){return sn(wt(e)?!t:i===!0?!!(i=0):!r,function(){return wt(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},A_=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(n,o){return o(n)},r)}},C_=function(e,t){return function(i){return e(parseFloat(i))+(t||Et(i))}},R_=function(e,t,i){return xu(e,t,0,1,i)},vu=function(e,t,i){return sn(i,function(r){return e[~~t(r)]})},P_=function s(e,t,i){var r=t-e;return wt(e)?vu(e,s(0,e.length),t):sn(i,function(n){return(r+(n-e)%r)%r+e})},D_=function s(e,t,i){var r=t-e,n=r*2;return wt(e)?vu(e,s(0,e.length-1),t):sn(i,function(o){return o=(n+(o-e)%n)%n||0,e+(o>r?n-o:o)})},Or=function(e){for(var t=0,i="",r,n,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",n=e.substr(r+7,o-r-7).match(a?eu:Ya),i+=e.substr(t,r-t)+_u(a?n:+n[0],a?0:+n[1],+n[2]||1e-5),t=o+1;return i+e.substr(t,e.length-t)},xu=function(e,t,i,r,n){var o=t-e,a=r-i;return sn(n,function(l){return i+((l-e)/o*a||0)})},L_=function s(e,t,i,r){var n=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!n){var o=mt(e),a={},l,u,c,p,h;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(wt(e)&&!wt(t)){for(c=[],p=e.length,h=p-2,u=1;u<p;u++)c.push(s(e[u-1],e[u]));p--,n=function(g){g*=p;var d=Math.min(h,~~g);return c[d](g-d)},i=t}else r||(e=Pn(wt(e)?[]:{},e));if(!c){for(l in t)Mo.call(a,e,l,"get",t[l]);n=function(g){return bo(g,a)||(o?e.p:e)}}}return sn(i,n)},sc=function(e,t,i){var r=e.labels,n=ni,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&n>(a=Math.abs(a))&&(l=o,n=a);return l},si=function(e,t,i){var r=e.vars,n=r[t],o=it,a=e._ctx,l,u,c;if(!!n)return l=r[t+"Params"],u=r.callbackScope||e,i&&Ji.length&&bs(),a&&(it=a),c=l?n.apply(u,l):n.call(u),it=o,c},br=function(e){return tn(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Lt),e.progress()<1&&si(e,"onInterrupt"),e},Jn,I_=function(e){e=!e.name&&e.default||e;var t=e.name,i=Ke(e),r=t&&!i&&e.init?function(){this._props=[]}:e,n={init:Fr,render:bo,add:Mo,kill:K_,modifier:Z_,rawVars:0},o={targetTest:0,get:0,getSetter:wo,aliases:{},register:0};if(hr(),e!==r){if(Ht[t])return;oi(r,oi(As(e,n),o)),Pn(r.prototype,Pn(n,As(e,o))),Ht[r.prop=t]=r,e.targetTest&&(Ss.push(r),xo[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}nu(t,r),e.register&&e.register(Kt,r,Ot)},ke=255,Ar={aqua:[0,ke,ke],lime:[0,ke,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ke],navy:[0,0,128],white:[ke,ke,ke],olive:[128,128,0],yellow:[ke,ke,0],orange:[ke,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ke,0,0],pink:[ke,192,203],cyan:[0,ke,ke],transparent:[ke,ke,ke,0]},wa=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*ke+.5|0},yu=function(e,t,i){var r=e?Bi(e)?[e>>16,e>>8&ke,e&ke]:0:Ar.black,n,o,a,l,u,c,p,h,f,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ar[e])r=Ar[e];else if(e.charAt(0)==="#"){if(e.length<6&&(n=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+n+n+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&ke,r&ke,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&ke,e&ke]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(Ya),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,n=c*2-o,r.length>3&&(r[3]*=1),r[0]=wa(l+1/3,n,o),r[1]=wa(l,n,o),r[2]=wa(l-1/3,n,o);else if(~e.indexOf("="))return r=e.match(Jc),i&&r.length<4&&(r[3]=1),r}else r=e.match(Ya)||Ar.transparent;r=r.map(Number)}return t&&!g&&(n=r[0]/ke,o=r[1]/ke,a=r[2]/ke,p=Math.max(n,o,a),h=Math.min(n,o,a),c=(p+h)/2,p===h?l=u=0:(f=p-h,u=c>.5?f/(2-p-h):f/(p+h),l=p===n?(o-a)/f+(o<a?6:0):p===o?(a-n)/f+2:(n-o)/f+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},Su=function(e){var t=[],i=[],r=-1;return e.split(Qi).forEach(function(n){var o=n.match($n)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},ac=function(e,t,i){var r="",n=(e+r).match(Qi),o=t?"hsla(":"rgba(",a=0,l,u,c,p;if(!n)return e;if(n=n.map(function(h){return(h=yu(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(c=Su(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(Qi,"1").split($n),p=u.length-1;a<p;a++)r+=u[a]+(~l.indexOf(a)?n.shift()||o+"0,0,0,0)":(c.length?c:n.length?n:i).shift());if(!u)for(u=e.split(Qi),p=u.length-1;a<p;a++)r+=u[a]+n[a];return r+u[p]},Qi=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ar)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),F_=/hsl[a]?\(/,Mu=function(e){var t=e.join(" "),i;if(Qi.lastIndex=0,Qi.test(t))return i=F_.test(t),e[1]=ac(e[1],i),e[0]=ac(e[0],i,Su(e[1])),!0},Ur,Wt=function(){var s=Date.now,e=500,t=33,i=s(),r=i,n=1e3/240,o=n,a=[],l,u,c,p,h,f,g=function d(m){var _=s()-r,T=m===!0,E,v,x,S;if(_>e&&(i+=_-t),r+=_,x=r-i,E=x-o,(E>0||T)&&(S=++p.frame,h=x-p.time*1e3,p.time=x=x/1e3,o+=E+(E>=n?4:n-E),v=1),T||(l=u(d)),v)for(f=0;f<a.length;f++)a[f](x,h,S,m)};return p={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){tu&&(!Za&&jc()&&(Qt=Za=window,_o=Qt.document||{},Zt.gsap=Kt,(Qt.gsapVersions||(Qt.gsapVersions=[])).push(Kt.version),iu(Ts||Qt.GreenSockGlobals||!Qt.gsap&&Qt||{}),c=Qt.requestAnimationFrame),l&&p.sleep(),u=c||function(m){return setTimeout(m,o-p.time*1e3+1|0)},Ur=1,g(2))},sleep:function(){(c?Qt.cancelAnimationFrame:clearTimeout)(l),Ur=0,u=Fr},lagSmoothing:function(m,_){e=m||1/Be,t=Math.min(_,e,0)},fps:function(m){n=1e3/(m||240),o=p.time*1e3+n},add:function(m,_,T){var E=_?function(v,x,S,M){m(v,x,S,M),p.remove(E)}:m;return p.remove(m),a[T?"unshift":"push"](E),hr(),E},remove:function(m,_){~(_=a.indexOf(m))&&a.splice(_,1)&&f>=_&&f--},_listeners:a},p}(),hr=function(){return!Ur&&Wt.wake()},Ce={},O_=/^[\d.\-M][\d.\-,\s]/,U_=/["']/g,N_=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],n=1,o=i.length,a,l,u;n<o;n++)l=i[n],a=n!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(U_,"").trim():+u,r=l.substr(a+1).trim();return t},B_=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},z_=function(e){var t=(e+"").split("("),i=Ce[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[N_(t[1])]:B_(e).split(",").map(ou)):Ce._CE&&O_.test(e)?Ce._CE("",e):i},Eu=function(e){return function(t){return 1-e(1-t)}},Tu=function s(e,t){for(var i=e._first,r;i;)i instanceof Dt?s(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?s(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},An=function(e,t){return e&&(Ke(e)?e:Ce[e]||z_(e))||t},Dn=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var n={easeIn:t,easeOut:i,easeInOut:r},o;return Ft(e,function(a){Ce[a]=Zt[a]=n,Ce[o=a.toLowerCase()]=i;for(var l in n)Ce[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ce[a+"."+l]=n[l]}),n},wu=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},ba=function s(e,t,i){var r=t>=1?t:1,n=(i||(e?.3:.45))/(t<1?t:1),o=n/qa*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*h_((c-o)*n)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:wu(a);return n=qa/n,l.config=function(u,c){return s(e,u,c)},l},Aa=function s(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(n){return 1-i(1-n)}:wu(i);return r.config=function(n){return s(e,n)},r};Ft("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;Dn(s+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});Ce.Linear.easeNone=Ce.none=Ce.Linear.easeIn;Dn("Elastic",ba("in"),ba("out"),ba());(function(s,e){var t=1/e,i=2*t,r=2.5*t,n=function(a){return a<t?s*a*a:a<i?s*Math.pow(a-1.5/e,2)+.75:a<r?s*(a-=2.25/e)*a+.9375:s*Math.pow(a-2.625/e,2)+.984375};Dn("Bounce",function(o){return 1-n(1-o)},n)})(7.5625,2.75);Dn("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});Dn("Circ",function(s){return-(Kc(1-s*s)-1)});Dn("Sine",function(s){return s===1?1:-f_(s*c_)+1});Dn("Back",Aa("in"),Aa("out"),Aa());Ce.SteppedEase=Ce.steps=Zt.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),n=t?1:0,o=1-Be;return function(a){return((r*qr(0,o,a)|0)+n)*i}}};cr.ease=Ce["quad.out"];Ft("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return yo+=s+","+s+"Params,"});var bu=function(e,t){this.id=u_++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:su,this.set=t?t.getSetter:wo},dr=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,fr(this,+t.duration,1,1),this.data=t.data,it&&(this._ctx=it,it.data.push(this)),Ur||Wt.wake()}var e=s.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,fr(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(hr(),!arguments.length)return this._tTime;var n=this._dp;if(n&&n.smoothChildTiming&&this._ts){for(Bs(this,i),!n._dp||n.parent||uu(n,this);n&&n.parent;)n.parent._time!==n._start+(n._ts>=0?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&vi(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Be||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),au(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+nc(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+nc(this),r):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(i,r){var n=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*n,r):this._repeat?ur(this._tTime,n)+1:1},e.timeScale=function(i){if(!arguments.length)return this._rts===-Be?0:this._rts;if(this._rts===i)return this;var r=this.parent&&this._ts?Cs(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Be?0:this._rts,this.totalTime(qr(-this._delay,this._tDur,r),!0),Ns(this),x_(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(hr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Be&&(this._tTime-=Be)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&vi(r,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(It(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Cs(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=m_);var r=Lt;return Lt=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Lt=r,this},e.globalTime=function(i){for(var r=this,n=arguments.length?i:r.rawTime();r;)n=r._start+n/(r._ts||1),r=r._dp;return!this.parent&&this.vars.immediateRender?-1:n},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,rc(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,rc(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Jt(this,i),It(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,It(r))},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Be:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Be,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,n;return!!(!i||this._ts&&this._initted&&i.isActive()&&(n=i.rawTime(!0))>=r&&n<this.endTime(!0)-Be)},e.eventCallback=function(i,r,n){var o=this.vars;return arguments.length>1?(r?(o[i]=r,n&&(o[i+"Params"]=n),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this;return new Promise(function(n){var o=Ke(i)?i:lu,a=function(){var u=r.then;r.then=null,Ke(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),n(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){br(this)},s}();oi(dr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Be,_prom:0,_ps:!1,_rts:1});var Dt=function(s){Zc(e,s);function e(i,r){var n;return i===void 0&&(i={}),n=s.call(this,i)||this,n.labels={},n.smoothChildTiming=!!i.smoothChildTiming,n.autoRemoveChildren=!!i.autoRemoveChildren,n._sort=It(i.sortChildren),Xe&&vi(i.parent||Xe,Pi(n),r),i.reversed&&n.reverse(),i.paused&&n.paused(!0),i.scrollTrigger&&fu(Pi(n),i.scrollTrigger),n}var t=e.prototype;return t.to=function(r,n,o){return Rr(0,arguments,this),this},t.from=function(r,n,o){return Rr(1,arguments,this),this},t.fromTo=function(r,n,o,a){return Rr(2,arguments,this),this},t.set=function(r,n,o){return n.duration=0,n.parent=this,Cr(n).repeatDelay||(n.repeat=0),n.immediateRender=!!n.immediateRender,new st(r,n,Jt(this,o),1),this},t.call=function(r,n,o){return vi(this,st.delayedCall(0,r,n),o)},t.staggerTo=function(r,n,o,a,l,u,c){return o.duration=n,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new st(r,o,Jt(this,l)),this},t.staggerFrom=function(r,n,o,a,l,u,c){return o.runBackwards=1,Cr(o).immediateRender=It(o.immediateRender),this.staggerTo(r,n,o,a,l,u,c)},t.staggerFromTo=function(r,n,o,a,l,u,c,p){return a.startAt=o,Cr(a).immediateRender=It(a.immediateRender),this.staggerTo(r,n,a,l,u,c,p)},t.render=function(r,n,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:_t(r),p=this._zTime<0!=r<0&&(this._initted||!u),h,f,g,d,m,_,T,E,v,x,S,M;if(this!==Xe&&c>l&&r>=0&&(c=l),c!==this._tTime||o||p){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),h=c,v=this._start,E=this._ts,_=!E,p&&(u||(a=this._zTime),(r||!n)&&(this._zTime=r)),this._repeat){if(S=this._yoyo,m=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,n,o);if(h=_t(c%m),c===l?(d=this._repeat,h=u):(d=~~(c/m),d&&d===c/m&&(h=u,d--),h>u&&(h=u)),x=ur(this._tTime,m),!a&&this._tTime&&x!==d&&(x=d),S&&d&1&&(h=u-h,M=1),d!==x&&!this._lock){var y=S&&x&1,w=y===(S&&d&1);if(d<x&&(y=!y),a=y?0:u,this._lock=1,this.render(a||(M?0:_t(d*m)),n,!u)._lock=0,this._tTime=c,!n&&this.parent&&si(this,"onRepeat"),this.vars.repeatRefresh&&!M&&(this.invalidate()._lock=1),a&&a!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,w&&(this._lock=2,a=y?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!M&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;Tu(this,M)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(T=E_(this,_t(a),_t(h)),T&&(c-=h-(h=T._start))),this._tTime=c,this._time=h,this._act=!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&h&&!n&&(si(this,"onStart"),this._tTime!==c))return this;if(h>=a&&r>=0)for(f=this._first;f;){if(g=f._next,(f._act||h>=f._start)&&f._ts&&T!==f){if(f.parent!==this)return this.render(r,n,o);if(f.render(f._ts>0?(h-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(h-f._start)*f._ts,n,o),h!==this._time||!this._ts&&!_){T=0,g&&(c+=this._zTime=-Be);break}}f=g}else{f=this._last;for(var b=r<0?r:h;f;){if(g=f._prev,(f._act||b<=f._end)&&f._ts&&T!==f){if(f.parent!==this)return this.render(r,n,o);if(f.render(f._ts>0?(b-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(b-f._start)*f._ts,n,o||Lt&&(f._initted||f._startAt)),h!==this._time||!this._ts&&!_){T=0,g&&(c+=this._zTime=b?-Be:Be);break}}f=g}}if(T&&!n&&(this.pause(),T.render(h>=a?0:-Be)._zTime=h>=a?1:-1,this._ts))return this._start=v,Ns(this),this.render(r,n,o);this._onUpdate&&!n&&si(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(v===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&tn(this,1),!n&&!(r<0&&!a)&&(c||a||!l)&&(si(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,n){var o=this;if(Bi(n)||(n=Jt(this,n,r)),!(r instanceof dr)){if(wt(r))return r.forEach(function(a){return o.add(a,n)}),this;if(mt(r))return this.addLabel(r,n);if(Ke(r))r=st.delayedCall(0,r);else return this}return this!==r?vi(this,r,n):this},t.getChildren=function(r,n,o,a){r===void 0&&(r=!0),n===void 0&&(n=!0),o===void 0&&(o=!0),a===void 0&&(a=-ni);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof st?n&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,n,o)))),u=u._next;return l},t.getById=function(r){for(var n=this.getChildren(1,1,1),o=n.length;o--;)if(n[o].vars.id===r)return n[o]},t.remove=function(r){return mt(r)?this.removeLabel(r):Ke(r)?this.killTweensOf(r):(Us(this,r),r===this._recent&&(this._recent=this._last),bn(this))},t.totalTime=function(r,n){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=_t(Wt.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),s.prototype.totalTime.call(this,r,n),this._forcing=0,this):this._tTime},t.addLabel=function(r,n){return this.labels[r]=Jt(this,n),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,n,o){var a=st.delayedCall(0,n||Fr,o);return a.data="isPause",this._hasPause=1,vi(this,a,Jt(this,r))},t.removePause=function(r){var n=this._first;for(r=Jt(this,r);n;)n._start===r&&n.data==="isPause"&&tn(n),n=n._next},t.killTweensOf=function(r,n,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Zi!==a[l]&&a[l].kill(r,n);return this},t.getTweensOf=function(r,n){for(var o=[],a=ri(r),l=this._first,u=Bi(n),c;l;)l instanceof st?g_(l._targets,a)&&(u?(!Zi||l._initted&&l._ts)&&l.globalTime(0)<=n&&l.globalTime(l.totalDuration())>n:!n||l.isActive())&&o.push(l):(c=l.getTweensOf(a,n)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,n){n=n||{};var o=this,a=Jt(o,r),l=n,u=l.startAt,c=l.onStart,p=l.onStartParams,h=l.immediateRender,f,g=st.to(o,oi({ease:n.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:n.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||Be,onStart:function(){if(o.pause(),!f){var m=n.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());g._dur!==m&&fr(g,m,0,1).render(g._time,!0,!0),f=1}c&&c.apply(g,p||[])}},n));return h?g.render(0):g},t.tweenFromTo=function(r,n,o){return this.tweenTo(n,oi({startAt:{time:Jt(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),sc(this,Jt(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),sc(this,Jt(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Be)},t.shiftChildren=function(r,n,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,u;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(n)for(u in l)l[u]>=o&&(l[u]+=r);return bn(this)},t.invalidate=function(r){var n=this._first;for(this._lock=0;n;)n.invalidate(r),n=n._next;return s.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var n=this._first,o;n;)o=n._next,this.remove(n),n=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),bn(this)},t.totalDuration=function(r){var n=0,o=this,a=o._last,l=ni,u,c,p;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(p=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,vi(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(n-=c,(!p&&!o._dp||p&&p.smoothChildTiming)&&(o._start+=c/o._ts,o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>n&&a._ts&&(n=a._end),a=u;fr(o,o===Xe&&o._time>n?o._time:n,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(Xe._ts&&(au(Xe,Cs(r,Xe)),ru=Wt.frame),Wt.frame>=tc){tc+=Yt.autoSleep||120;var n=Xe._first;if((!n||!n._ts)&&Yt.autoSleep&&Wt._listeners.length<2){for(;n&&!n._ts;)n=n._next;n||Wt.sleep()}}},e}(dr);oi(Dt.prototype,{_lock:0,_hasPause:0,_forcing:0});var k_=function(e,t,i,r,n,o,a){var l=new Ot(this._pt,e,t,0,1,Lu,null,n),u=0,c=0,p,h,f,g,d,m,_,T;for(l.b=i,l.e=r,i+="",r+="",(_=~r.indexOf("random("))&&(r=Or(r)),o&&(T=[i,r],o(T,e,t),i=T[0],r=T[1]),h=i.match(Ea)||[];p=Ea.exec(r);)g=p[0],d=r.substring(u,p.index),f?f=(f+1)%5:d.substr(-5)==="rgba("&&(f=1),g!==h[c++]&&(m=parseFloat(h[c-1])||0,l._pt={_next:l._pt,p:d||c===1?d:",",s:m,c:g.charAt(1)==="="?tr(m,g)-m:parseFloat(g)-m,m:f&&f<4?Math.round:0},u=Ea.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(Qc.test(r)||_)&&(l.e=0),this._pt=l,l},Mo=function(e,t,i,r,n,o,a,l,u,c){Ke(r)&&(r=r(n||0,e,o));var p=e[t],h=i!=="get"?i:Ke(p)?u?e[t.indexOf("set")||!Ke(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():p,f=Ke(p)?u?X_:Pu:To,g;if(mt(r)&&(~r.indexOf("random(")&&(r=Or(r)),r.charAt(1)==="="&&(g=tr(h,r)+(Et(h)||0),(g||g===0)&&(r=g))),!c||h!==r||to)return!isNaN(h*r)&&r!==""?(g=new Ot(this._pt,e,t,+h||0,r-(h||0),typeof p=="boolean"?Y_:Du,0,f),u&&(g.fp=u),a&&g.modifier(a,this,e),this._pt=g):(!p&&!(t in e)&&vo(t,r),k_.call(this,e,t,h,r,f,l||Yt.stringFilter,u))},G_=function(e,t,i,r,n){if(Ke(e)&&(e=Pr(e,n,t,i,r)),!Mi(e)||e.style&&e.nodeType||wt(e)||$c(e))return mt(e)?Pr(e,n,t,i,r):e;var o={},a;for(a in e)o[a]=Pr(e[a],n,t,i,r);return o},Au=function(e,t,i,r,n,o){var a,l,u,c;if(Ht[e]&&(a=new Ht[e]).init(n,a.rawVars?t[e]:G_(t[e],r,n,o,i),i,r,o)!==!1&&(i._pt=l=new Ot(i._pt,n,e,0,1,a.render,a,0,a.priority),i!==Jn))for(u=i._ptLookup[i._targets.indexOf(n)],c=a._props.length;c--;)u[a._props[c]]=l;return a},Zi,to,Eo=function s(e,t,i){var r=e.vars,n=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.onUpdateParams,p=r.callbackScope,h=r.runBackwards,f=r.yoyoEase,g=r.keyframes,d=r.autoRevert,m=e._dur,_=e._startAt,T=e._targets,E=e.parent,v=E&&E.data==="nested"?E.vars.targets:T,x=e._overwrite==="auto"&&!mo,S=e.timeline,M,y,w,b,A,I,L,D,F,N,H,z,X;if(S&&(!g||!n)&&(n="none"),e._ease=An(n,cr.ease),e._yEase=f?Eu(An(f===!0?n:f,cr.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!S&&!!r.runBackwards,!S||g&&!r.stagger){if(D=T[0]?wn(T[0]).harness:0,z=D&&r[D.prop],M=As(r,xo),_&&(_._zTime<0&&_.progress(1),t<0&&h&&a&&!d?_.render(-1,!0):_.revert(h&&m?ys:p_),_._lazy=0),o){if(tn(e._startAt=st.set(T,oi({data:"isStart",overwrite:!1,parent:E,immediateRender:!0,lazy:It(l),startAt:null,delay:0,onUpdate:u,onUpdateParams:c,callbackScope:p,stagger:0},o))),e._startAt._dp=0,t<0&&(Lt||!a&&!d)&&e._startAt.revert(ys),a&&m&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(h&&m&&!_){if(t&&(a=!1),w=oi({overwrite:!1,data:"isFromStart",lazy:a&&It(l),immediateRender:a,stagger:0,parent:E},M),z&&(w[D.prop]=z),tn(e._startAt=st.set(T,w)),e._startAt._dp=0,t<0&&(Lt?e._startAt.revert(ys):e._startAt.render(-1,!0)),e._zTime=t,!a)s(e._startAt,Be,Be);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&It(l)||l&&!m,y=0;y<T.length;y++){if(A=T[y],L=A._gsap||So(T)[y]._gsap,e._ptLookup[y]=N={},Ka[L.id]&&Ji.length&&bs(),H=v===T?y:v.indexOf(A),D&&(F=new D).init(A,z||M,e,H,v)!==!1&&(e._pt=b=new Ot(e._pt,A,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(K){N[K]=b}),F.priority&&(I=1)),!D||z)for(w in M)Ht[w]&&(F=Au(w,M,e,H,A,v))?F.priority&&(I=1):N[w]=b=Mo.call(e,A,w,"get",M[w],H,v,0,r.stringFilter);e._op&&e._op[y]&&e.kill(A,e._op[y]),x&&e._pt&&(Zi=e,Xe.killTweensOf(A,N,e.globalTime(t)),X=!e.parent,Zi=0),e._pt&&l&&(Ka[L.id]=1)}I&&Iu(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!X,g&&t<=0&&S.render(ni,!0,!0)},H_=function(e,t,i,r,n,o,a){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,c,p,h;if(!l)for(l=e._ptCache[t]=[],p=e._ptLookup,h=e._targets.length;h--;){if(u=p[h][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return to=1,e.vars[t]="+=0",Eo(e,a),to=0,1;l.push(u)}for(h=l.length;h--;)c=l[h],u=c._pt||c,u.s=(r||r===0)&&!n?r:u.s+(r||0)+o*u.c,u.c=i-u.s,c.e&&(c.e=je(i)+Et(c.e)),c.b&&(c.b=u.s+Et(c.b))},V_=function(e,t){var i=e[0]?wn(e[0]).harness:0,r=i&&i.aliases,n,o,a,l;if(!r)return t;n=Pn({},t);for(o in r)if(o in n)for(l=r[o].split(","),a=l.length;a--;)n[l[a]]=n[o];return n},W_=function(e,t,i,r){var n=t.ease||r||"power1.inOut",o,a;if(wt(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:n})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:n})},Pr=function(e,t,i,r,n){return Ke(e)?e.call(t,i,r,n):mt(e)&&~e.indexOf("random(")?Or(e):e},Cu=yo+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Ru={};Ft(Cu+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Ru[s]=1});var st=function(s){Zc(e,s);function e(i,r,n,o){var a;typeof r=="number"&&(n.duration=r,r=n,n=null),a=s.call(this,o?r:Cr(r))||this;var l=a.vars,u=l.duration,c=l.delay,p=l.immediateRender,h=l.stagger,f=l.overwrite,g=l.keyframes,d=l.defaults,m=l.scrollTrigger,_=l.yoyoEase,T=r.parent||Xe,E=(wt(i)||$c(i)?Bi(i[0]):"length"in r)?[i]:ri(i),v,x,S,M,y,w,b,A;if(a._targets=E.length?So(E):ws("GSAP target "+i+" not found. https://greensock.com",!Yt.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,g||h||ms(u)||ms(c)){if(r=a.vars,v=a.timeline=new Dt({data:"nested",defaults:d||{},targets:T&&T.data==="nested"?T.vars.targets:E}),v.kill(),v.parent=v._dp=Pi(a),v._start=0,h||ms(u)||ms(c)){if(M=E.length,b=h&&mu(h),Mi(h))for(y in h)~Cu.indexOf(y)&&(A||(A={}),A[y]=h[y]);for(x=0;x<M;x++)S=As(r,Ru),S.stagger=0,_&&(S.yoyoEase=_),A&&Pn(S,A),w=E[x],S.duration=+Pr(u,Pi(a),x,w,E),S.delay=(+Pr(c,Pi(a),x,w,E)||0)-a._delay,!h&&M===1&&S.delay&&(a._delay=c=S.delay,a._start+=c,S.delay=0),v.to(w,S,b?b(x,w,E):0),v._ease=Ce.none;v.duration()?u=c=0:a.timeline=0}else if(g){Cr(oi(v.vars.defaults,{ease:"none"})),v._ease=An(g.ease||r.ease||"none");var I=0,L,D,F;if(wt(g))g.forEach(function(N){return v.to(E,N,">")}),v.duration();else{S={};for(y in g)y==="ease"||y==="easeEach"||W_(y,g[y],S,g.easeEach);for(y in S)for(L=S[y].sort(function(N,H){return N.t-H.t}),I=0,x=0;x<L.length;x++)D=L[x],F={ease:D.e,duration:(D.t-(x?L[x-1].t:0))/100*u},F[y]=D.v,v.to(E,F,I),I+=F.duration;v.duration()<u&&v.to({},{duration:u-v.duration()})}}u||a.duration(u=v.duration())}else a.timeline=0;return f===!0&&!mo&&(Zi=Pi(a),Xe.killTweensOf(E),Zi=0),vi(T,Pi(a),n),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(p||!u&&!g&&a._start===_t(T._time)&&It(p)&&y_(Pi(a))&&T.data!=="nested")&&(a._tTime=-Be,a.render(Math.max(0,-c)||0)),m&&fu(Pi(a),m),a}var t=e.prototype;return t.render=function(r,n,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,p=r>l-Be&&!c?l:r<Be?0:r,h,f,g,d,m,_,T,E,v;if(!u)M_(this,r,n,o);else if(p!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c){if(h=p,E=this.timeline,this._repeat){if(d=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(d*100+r,n,o);if(h=_t(p%d),p===l?(g=this._repeat,h=u):(g=~~(p/d),g&&g===p/d&&(h=u,g--),h>u&&(h=u)),_=this._yoyo&&g&1,_&&(v=this._yEase,h=u-h),m=ur(this._tTime,d),h===a&&!o&&this._initted)return this._tTime=p,this;g!==m&&(E&&this._yEase&&Tu(E,_),this.vars.repeatRefresh&&!_&&!this._lock&&(this._lock=o=1,this.render(_t(d*g),!0).invalidate()._lock=0))}if(!this._initted){if(hu(this,c?r:h,o,n,p))return this._tTime=0,this;if(a!==this._time)return this;if(u!==this._dur)return this.render(r,n,o)}if(this._tTime=p,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=T=(v||this._ease)(h/u),this._from&&(this.ratio=T=1-T),h&&!a&&!n&&(si(this,"onStart"),this._tTime!==p))return this;for(f=this._pt;f;)f.r(T,f.d),f=f._next;E&&E.render(r<0?r:!h&&_?-Be:E._dur*E._ease(h/this._dur),n,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!n&&(c&&ja(this,r,n,o),si(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!n&&this.parent&&si(this,"onRepeat"),(p===this._tDur||!p)&&this._tTime===p&&(c&&!this._onUpdate&&ja(this,r,!0,!0),(r||!u)&&(p===this._tDur&&this._ts>0||!p&&this._ts<0)&&tn(this,1),!n&&!(c&&!a)&&(p||a||_)&&(si(this,p===l?"onComplete":"onReverseComplete",!0),this._prom&&!(p<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),s.prototype.invalidate.call(this,r)},t.resetTo=function(r,n,o,a){Ur||Wt.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Eo(this,l),u=this._ease(l/this._dur),H_(this,r,n,o,a,u,l)?this.resetTo(r,n,o,a):(Bs(this,0),this.parent||cu(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,n){if(n===void 0&&(n="all"),!r&&(!n||n==="all"))return this._lazy=this._pt=0,this.parent?br(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,n,Zi&&Zi.vars.overwrite!==!0)._first||br(this),this.parent&&o!==this.timeline.totalDuration()&&fr(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?ri(r):a,u=this._ptLookup,c=this._pt,p,h,f,g,d,m,_;if((!n||n==="all")&&v_(a,l))return n==="all"&&(this._pt=0),br(this);for(p=this._op=this._op||[],n!=="all"&&(mt(n)&&(d={},Ft(n,function(T){return d[T]=1}),n=d),n=V_(a,n)),_=a.length;_--;)if(~l.indexOf(a[_])){h=u[_],n==="all"?(p[_]=n,g=h,f={}):(f=p[_]=p[_]||{},g=n);for(d in g)m=h&&h[d],m&&((!("kill"in m.d)||m.d.kill(d)===!0)&&Us(this,m,"_pt"),delete h[d]),f!=="all"&&(f[d]=1)}return this._initted&&!this._pt&&c&&br(this),this},e.to=function(r,n){return new e(r,n,arguments[2])},e.from=function(r,n){return Rr(1,arguments)},e.delayedCall=function(r,n,o,a){return new e(n,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:n,onReverseComplete:n,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,n,o){return Rr(2,arguments)},e.set=function(r,n){return n.duration=0,n.repeatDelay||(n.repeat=0),new e(r,n)},e.killTweensOf=function(r,n,o){return Xe.killTweensOf(r,n,o)},e}(dr);oi(st.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ft("staggerTo,staggerFrom,staggerFromTo",function(s){st[s]=function(){var e=new Dt,t=Ja.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var To=function(e,t,i){return e[t]=i},Pu=function(e,t,i){return e[t](i)},X_=function(e,t,i,r){return e[t](r.fp,i)},q_=function(e,t,i){return e.setAttribute(t,i)},wo=function(e,t){return Ke(e[t])?Pu:go(e[t])&&e.setAttribute?q_:To},Du=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Y_=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Lu=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},bo=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},Z_=function(e,t,i,r){for(var n=this._pt,o;n;)o=n._next,n.p===r&&n.modifier(e,t,i),n=o},K_=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Us(this,t,"_pt"):t.dep||(i=1),t=r;return!i},j_=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},Iu=function(e){for(var t=e._pt,i,r,n,o;t;){for(i=t._next,r=n;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:n=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=n},Ot=function(){function s(t,i,r,n,o,a,l,u,c){this.t=i,this.s=n,this.c=o,this.p=r,this.r=a||Du,this.d=l||this,this.set=u||To,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(i,r,n){this.mSet=this.mSet||this.set,this.set=j_,this.m=i,this.mt=n,this.tween=r},s}();Ft(yo+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return xo[s]=1});Zt.TweenMax=Zt.TweenLite=st;Zt.TimelineLite=Zt.TimelineMax=Dt;Xe=new Dt({sortChildren:!1,defaults:cr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Yt.stringFilter=Mu;var pr=[],Ms={},$_=[],oc=0,Ca=function(e){return(Ms[e]||$_).map(function(t){return t()})},io=function(){var e=Date.now(),t=[];e-oc>2&&(Ca("matchMediaInit"),pr.forEach(function(i){var r=i.queries,n=i.conditions,o,a,l,u;for(a in r)o=Qt.matchMedia(r[a]).matches,o&&(l=1),o!==n[a]&&(n[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),Ca("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i)}),oc=e,Ca("matchMedia"))},Fu=function(){function s(t,i){this.selector=i&&Qa(i),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=s.prototype;return e.add=function(i,r,n){Ke(i)&&(n=r,r=i,i=Ke);var o=this,a=function(){var u=it,c=o.selector,p;return u&&u!==o&&u.data.push(o),n&&(o.selector=Qa(n)),it=o,p=r.apply(o,arguments),Ke(p)&&o._r.push(p),it=u,o.selector=c,o.isReverted=!1,p};return o.last=a,i===Ke?a(o):i?o[i]=a:a},e.ignore=function(i){var r=it;it=null,i(this),it=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof s?i.push.apply(i,r.getTweens()):r instanceof st&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var n=this;if(i){var o=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}))}),o.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,u){return u.g-l.g||-1}).forEach(function(l){return l.t.revert(i)}),this.data.forEach(function(l){return!(l instanceof dr)&&l.revert&&l.revert(i)}),this._r.forEach(function(l){return l(i,n)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),r){var a=pr.indexOf(this);~a&&pr.splice(a,1)}},e.revert=function(i){this.kill(i||{})},s}(),J_=function(){function s(t){this.contexts=[],this.scope=t}var e=s.prototype;return e.add=function(i,r,n){Mi(i)||(i={matches:i});var o=new Fu(0,n||this.scope),a=o.conditions={},l,u,c;this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=Qt.matchMedia(i[u]),l&&(pr.indexOf(o)<0&&pr.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(io):l.addEventListener("change",io)));return c&&r(o),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},s}(),Rs={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return I_(r)})},timeline:function(e){return new Dt(e)},getTweensOf:function(e,t){return Xe.getTweensOf(e,t)},getProperty:function(e,t,i,r){mt(e)&&(e=ri(e)[0]);var n=wn(e||{}).get,o=i?lu:ou;return i==="native"&&(i=""),e&&(t?o((Ht[t]&&Ht[t].get||n)(e,t,i,r)):function(a,l,u){return o((Ht[a]&&Ht[a].get||n)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=ri(e),e.length>1){var r=e.map(function(c){return Kt.quickSetter(c,t,i)}),n=r.length;return function(c){for(var p=n;p--;)r[p](c)}}e=e[0]||{};var o=Ht[t],a=wn(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var p=new o;Jn._pt=0,p.init(e,i?c+i:c,Jn,0,[e]),p.render(1,p),Jn._pt&&bo(1,Jn)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,n=Kt.to(e,Pn((r={},r[t]="+=0.1",r.paused=!0,r),i||{})),o=function(l,u,c){return n.resetTo(t,l,u,c)};return o.tween=n,o},isTweening:function(e){return Xe.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=An(e.ease,cr.ease)),ic(cr,e||{})},config:function(e){return ic(Yt,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,n=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Ht[a]&&!Zt[a]&&ws(t+" effect requires "+a+" plugin.")}),Ta[t]=function(a,l,u){return i(ri(a),oi(l||{},n),u)},o&&(Dt.prototype[t]=function(a,l,u){return this.add(Ta[t](a,Mi(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){Ce[e]=An(t)},parseEase:function(e,t){return arguments.length?An(e,t):Ce},getById:function(e){return Xe.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Dt(e),r,n;for(i.smoothChildTiming=It(e.smoothChildTiming),Xe.remove(i),i._dp=0,i._time=i._tTime=Xe._time,r=Xe._first;r;)n=r._next,(t||!(!r._dur&&r instanceof st&&r.vars.onComplete===r._targets[0]))&&vi(i,r,r._start-r._delay),r=n;return vi(Xe,i,0),i},context:function(e,t){return e?new Fu(e,t):it},matchMedia:function(e){return new J_(e)},matchMediaRefresh:function(){return pr.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||io()},addEventListener:function(e,t){var i=Ms[e]||(Ms[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Ms[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:P_,wrapYoyo:D_,distribute:mu,random:_u,snap:gu,normalize:R_,getUnit:Et,clamp:w_,splitColor:yu,toArray:ri,selector:Qa,mapRange:xu,pipe:A_,unitize:C_,interpolate:L_,shuffle:pu},install:iu,effects:Ta,ticker:Wt,updateRoot:Dt.updateRoot,plugins:Ht,globalTimeline:Xe,core:{PropTween:Ot,globals:nu,Tween:st,Timeline:Dt,Animation:dr,getCache:wn,_removeLinkedListItem:Us,reverting:function(){return Lt},context:function(e){return e&&it&&(it.data.push(e),e._ctx=it),it},suppressOverwrites:function(e){return mo=e}}};Ft("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Rs[s]=st[s]});Wt.add(Dt.updateRoot);Jn=Rs.to({},{duration:0});var Q_=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},e0=function(e,t){var i=e._targets,r,n,o;for(r in t)for(n=i.length;n--;)o=e._ptLookup[n][r],o&&(o=o.d)&&(o._pt&&(o=Q_(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[n],r))},Ra=function(e,t){return{name:e,rawVars:1,init:function(r,n,o){o._onInit=function(a){var l,u;if(mt(n)&&(l={},Ft(n,function(c){return l[c]=1}),n=l),t){l={};for(u in n)l[u]=t(n[u]);n=l}e0(a,n)}}}},Kt=Rs.registerPlugin({name:"attr",init:function(e,t,i,r,n){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,n,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)Lt?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Ra("roundProps",eo),Ra("modifiers"),Ra("snap",gu))||Rs;st.version=Dt.version=Kt.version="3.11.3";tu=1;jc()&&hr();var lc=Ce.Power0,Pa=Ce.Power1,Da=Ce.Power2,La=Ce.Power3;Ce.Power4;Ce.Linear;Ce.Quad;Ce.Cubic;Ce.Quart;Ce.Quint;Ce.Strong;Ce.Elastic;Ce.Back;Ce.SteppedEase;Ce.Bounce;Ce.Sine;var Ia=Ce.Expo;Ce.Circ;var cc,Ki,ir,Ao,Sn,uc,Co,t0=function(){return typeof window<"u"},zi={},_n=180/Math.PI,nr=Math.PI/180,qn=Math.atan2,fc=1e8,Ro=/([A-Z])/g,i0=/(left|right|width|margin|padding|x)/i,n0=/[\s,\(]\S/,Fi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},no=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},r0=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},s0=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},a0=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Ou=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Uu=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},o0=function(e,t,i){return e.style[t]=i},l0=function(e,t,i){return e.style.setProperty(t,i)},c0=function(e,t,i){return e._gsap[t]=i},u0=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},f0=function(e,t,i,r,n){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(n,o)},h0=function(e,t,i,r,n){var o=e._gsap;o[t]=i,o.renderTransform(n,o)},qe="transform",pi=qe+"Origin",d0=function(e,t){var i=this,r=this.target,n=r.style;if(e in zi){if(this.tfm=this.tfm||{},e!=="transform"&&(e=Fi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=Di(r,o)}):this.tfm[e]=r._gsap.x?r._gsap[e]:Di(r,e)),this.props.indexOf(qe)>=0)return;r._gsap.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(pi,t,"")),e=qe}(n||t)&&this.props.push(e,t,n[e])},Nu=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},p0=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,n,o;for(n=0;n<e.length;n+=3)e[n+1]?t[e[n]]=e[n+2]:e[n+2]?i[e[n]]=e[n+2]:i.removeProperty(e[n].replace(Ro,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),n=Co(),n&&!n.isStart&&!i[qe]&&(Nu(i),r.uncache=1)}},Bu=function(e,t){var i={target:e,props:[],revert:p0,save:d0};return t&&t.split(",").forEach(function(r){return i.save(r)}),i},zu,ro=function(e,t){var i=Ki.createElementNS?Ki.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ki.createElement(e);return i.style?i:Ki.createElement(e)},Si=function s(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Ro,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&s(e,mr(t)||t,1)||""},hc="O,Moz,ms,Ms,Webkit".split(","),mr=function(e,t,i){var r=t||Sn,n=r.style,o=5;if(e in n&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(hc[o]+e in n););return o<0?null:(o===3?"ms":o>=0?hc[o]:"")+e},so=function(){t0()&&window.document&&(cc=window,Ki=cc.document,ir=Ki.documentElement,Sn=ro("div")||{style:{}},ro("div"),qe=mr(qe),pi=qe+"Origin",Sn.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",zu=!!mr("perspective"),Co=Kt.core.reverting,Ao=1)},Fa=function s(e){var t=ro("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,r=this.nextSibling,n=this.style.cssText,o;if(ir.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(o=this._gsapBBox());return i&&(r?i.insertBefore(this,r):i.appendChild(this)),ir.removeChild(t),this.style.cssText=n,o},dc=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},ku=function(e){var t;try{t=e.getBBox()}catch{t=Fa.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Fa||(t=Fa.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+dc(e,["x","cx","x1"])||0,y:+dc(e,["y","cy","y1"])||0,width:0,height:0}:t},Gu=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&ku(e))},Nr=function(e,t){if(t){var i=e.style;t in zi&&t!==pi&&(t=qe),i.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(t.replace(Ro,"-$1").toLowerCase())):i.removeAttribute(t)}},ji=function(e,t,i,r,n,o){var a=new Ot(e._pt,t,i,0,1,o?Uu:Ou);return e._pt=a,a.b=r,a.e=n,e._props.push(i),a},pc={deg:1,rad:1,turn:1},m0={grid:1,flex:1},nn=function s(e,t,i,r){var n=parseFloat(i)||0,o=(i+"").trim().substr((n+"").length)||"px",a=Sn.style,l=i0.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),p=100,h=r==="px",f=r==="%",g,d,m,_;return r===o||!n||pc[r]||pc[o]?n:(o!=="px"&&!h&&(n=s(e,t,i,"px")),_=e.getCTM&&Gu(e),(f||o==="%")&&(zi[t]||~t.indexOf("adius"))?(g=_?e.getBBox()[l?"width":"height"]:e[c],je(f?n/g*p:n/100*g)):(a[l?"width":"height"]=p+(h?o:r),d=~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,_&&(d=(e.ownerSVGElement||{}).parentNode),(!d||d===Ki||!d.appendChild)&&(d=Ki.body),m=d._gsap,m&&f&&m.width&&l&&m.time===Wt.time&&!m.uncache?je(n/m.width*p):((f||o==="%")&&!m0[Si(d,"display")]&&(a.position=Si(e,"position")),d===e&&(a.position="static"),d.appendChild(Sn),g=Sn[c],d.removeChild(Sn),a.position="absolute",l&&f&&(m=wn(d),m.time=Wt.time,m.width=d[c]),je(h?g*n/p:g&&n?p/g*n:0))))},Di=function(e,t,i,r){var n;return Ao||so(),t in Fi&&t!=="transform"&&(t=Fi[t],~t.indexOf(",")&&(t=t.split(",")[0])),zi[t]&&t!=="transform"?(n=zr(e,r),n=t!=="transformOrigin"?n[t]:n.svg?n.origin:Ds(Si(e,pi))+" "+n.zOrigin+"px"):(n=e.style[t],(!n||n==="auto"||r||~(n+"").indexOf("calc("))&&(n=Ps[t]&&Ps[t](e,t,i)||Si(e,t)||su(e,t)||(t==="opacity"?1:0))),i&&!~(n+"").trim().indexOf(" ")?nn(e,t,n,i)+i:n},g0=function(e,t,i,r){if(!i||i==="none"){var n=mr(t,e,1),o=n&&Si(e,n,1);o&&o!==i?(t=n,i=o):t==="borderColor"&&(i=Si(e,"borderTopColor"))}var a=new Ot(this._pt,e.style,t,0,1,Lu),l=0,u=0,c,p,h,f,g,d,m,_,T,E,v,x;if(a.b=i,a.e=r,i+="",r+="",r==="auto"&&(e.style[t]=r,r=Si(e,t)||r,e.style[t]=i),c=[i,r],Mu(c),i=c[0],r=c[1],h=i.match($n)||[],x=r.match($n)||[],x.length){for(;p=$n.exec(r);)m=p[0],T=r.substring(l,p.index),g?g=(g+1)%5:(T.substr(-5)==="rgba("||T.substr(-5)==="hsla(")&&(g=1),m!==(d=h[u++]||"")&&(f=parseFloat(d)||0,v=d.substr((f+"").length),m.charAt(1)==="="&&(m=tr(f,m)+v),_=parseFloat(m),E=m.substr((_+"").length),l=$n.lastIndex-E.length,E||(E=E||Yt.units[t]||v,l===r.length&&(r+=E,a.e+=E)),v!==E&&(f=nn(e,t,d,E)||0),a._pt={_next:a._pt,p:T||u===1?T:",",s:f,c:_-f,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?Uu:Ou;return Qc.test(r)&&(a.e=0),this._pt=a,a},mc={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},_0=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=mc[i]||i,t[1]=mc[r]||r,t.join(" ")},v0=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,n=t.u,o=i._gsap,a,l,u;if(n==="all"||n===!0)r.cssText="",l=1;else for(n=n.split(","),u=n.length;--u>-1;)a=n[u],zi[a]&&(l=1,a=a==="transformOrigin"?pi:qe),Nr(i,a);l&&(Nr(i,qe),o&&(o.svg&&i.removeAttribute("transform"),zr(i,1),o.uncache=1,Nu(r)))}},Ps={clearProps:function(e,t,i,r,n){if(n.data!=="isFromStart"){var o=e._pt=new Ot(e._pt,t,i,0,0,v0);return o.u=r,o.pr=-10,o.tween=n,e._props.push(i),1}}},Br=[1,0,0,1,0,0],Hu={},Vu=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},gc=function(e){var t=Si(e,qe);return Vu(t)?Br:t.substr(7).match(Jc).map(je)},Po=function(e,t){var i=e._gsap||wn(e),r=e.style,n=gc(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,n=[l.a,l.b,l.c,l.d,l.e,l.f],n.join(",")==="1,0,0,1,0,0"?Br:n):(n===Br&&!e.offsetParent&&e!==ir&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(u=1,a=e.nextElementSibling,ir.appendChild(e)),n=gc(e),l?r.display=l:Nr(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):ir.removeChild(e))),t&&n.length>6?[n[0],n[1],n[4],n[5],n[12],n[13]]:n)},ao=function(e,t,i,r,n,o){var a=e._gsap,l=n||Po(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,p=a.xOffset||0,h=a.yOffset||0,f=l[0],g=l[1],d=l[2],m=l[3],_=l[4],T=l[5],E=t.split(" "),v=parseFloat(E[0])||0,x=parseFloat(E[1])||0,S,M,y,w;i?l!==Br&&(M=f*m-g*d)&&(y=v*(m/M)+x*(-d/M)+(d*T-m*_)/M,w=v*(-g/M)+x*(f/M)-(f*T-g*_)/M,v=y,x=w):(S=ku(e),v=S.x+(~E[0].indexOf("%")?v/100*S.width:v),x=S.y+(~(E[1]||E[0]).indexOf("%")?x/100*S.height:x)),r||r!==!1&&a.smooth?(_=v-u,T=x-c,a.xOffset=p+(_*f+T*d)-_,a.yOffset=h+(_*g+T*m)-T):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=x,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[pi]="0px 0px",o&&(ji(o,a,"xOrigin",u,v),ji(o,a,"yOrigin",c,x),ji(o,a,"xOffset",p,a.xOffset),ji(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",v+" "+x)},zr=function(e,t){var i=e._gsap||new bu(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,n=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=Si(e,pi)||"0",c,p,h,f,g,d,m,_,T,E,v,x,S,M,y,w,b,A,I,L,D,F,N,H,z,X,K,k,V,$,ee,te;return c=p=h=d=m=_=T=E=v=0,f=g=1,i.svg=!!(e.getCTM&&Gu(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[qe]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[qe]!=="none"?l[qe]:"")),r.scale=r.rotate=r.translate="none"),M=Po(e,i.svg),i.svg&&(i.uncache?(z=e.getBBox(),u=i.xOrigin-z.x+"px "+(i.yOrigin-z.y)+"px",H=""):H=!t&&e.getAttribute("data-svg-origin"),ao(e,H||u,!!H||i.originIsAbsolute,i.smooth!==!1,M)),x=i.xOrigin||0,S=i.yOrigin||0,M!==Br&&(A=M[0],I=M[1],L=M[2],D=M[3],c=F=M[4],p=N=M[5],M.length===6?(f=Math.sqrt(A*A+I*I),g=Math.sqrt(D*D+L*L),d=A||I?qn(I,A)*_n:0,T=L||D?qn(L,D)*_n+d:0,T&&(g*=Math.abs(Math.cos(T*nr))),i.svg&&(c-=x-(x*A+S*L),p-=S-(x*I+S*D))):(te=M[6],$=M[7],K=M[8],k=M[9],V=M[10],ee=M[11],c=M[12],p=M[13],h=M[14],y=qn(te,V),m=y*_n,y&&(w=Math.cos(-y),b=Math.sin(-y),H=F*w+K*b,z=N*w+k*b,X=te*w+V*b,K=F*-b+K*w,k=N*-b+k*w,V=te*-b+V*w,ee=$*-b+ee*w,F=H,N=z,te=X),y=qn(-L,V),_=y*_n,y&&(w=Math.cos(-y),b=Math.sin(-y),H=A*w-K*b,z=I*w-k*b,X=L*w-V*b,ee=D*b+ee*w,A=H,I=z,L=X),y=qn(I,A),d=y*_n,y&&(w=Math.cos(y),b=Math.sin(y),H=A*w+I*b,z=F*w+N*b,I=I*w-A*b,N=N*w-F*b,A=H,F=z),m&&Math.abs(m)+Math.abs(d)>359.9&&(m=d=0,_=180-_),f=je(Math.sqrt(A*A+I*I+L*L)),g=je(Math.sqrt(N*N+te*te)),y=qn(F,N),T=Math.abs(y)>2e-4?y*_n:0,v=ee?1/(ee<0?-ee:ee):0),i.svg&&(H=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Vu(Si(e,qe)),H&&e.setAttribute("transform",H))),Math.abs(T)>90&&Math.abs(T)<270&&(n?(f*=-1,T+=d<=0?180:-180,d+=d<=0?180:-180):(g*=-1,T+=T<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=p-((i.yPercent=p&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-p)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=h+o,i.scaleX=je(f),i.scaleY=je(g),i.rotation=je(d)+a,i.rotationX=je(m)+a,i.rotationY=je(_)+a,i.skewX=T+a,i.skewY=E+a,i.transformPerspective=v+o,(i.zOrigin=parseFloat(u.split(" ")[2])||0)&&(r[pi]=Ds(u)),i.xOffset=i.yOffset=0,i.force3D=Yt.force3D,i.renderTransform=i.svg?y0:zu?Wu:x0,i.uncache=0,i},Ds=function(e){return(e=e.split(" "))[0]+" "+e[1]},Oa=function(e,t,i){var r=Et(t);return je(parseFloat(t)+parseFloat(nn(e,"x",i+"px",r)))+r},x0=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Wu(e,t)},dn="0deg",Er="0px",pn=") ",Wu=function(e,t){var i=t||this,r=i.xPercent,n=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,p=i.rotationX,h=i.skewX,f=i.skewY,g=i.scaleX,d=i.scaleY,m=i.transformPerspective,_=i.force3D,T=i.target,E=i.zOrigin,v="",x=_==="auto"&&e&&e!==1||_===!0;if(E&&(p!==dn||c!==dn)){var S=parseFloat(c)*nr,M=Math.sin(S),y=Math.cos(S),w;S=parseFloat(p)*nr,w=Math.cos(S),o=Oa(T,o,M*w*-E),a=Oa(T,a,-Math.sin(S)*-E),l=Oa(T,l,y*w*-E+E)}m!==Er&&(v+="perspective("+m+pn),(r||n)&&(v+="translate("+r+"%, "+n+"%) "),(x||o!==Er||a!==Er||l!==Er)&&(v+=l!==Er||x?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+pn),u!==dn&&(v+="rotate("+u+pn),c!==dn&&(v+="rotateY("+c+pn),p!==dn&&(v+="rotateX("+p+pn),(h!==dn||f!==dn)&&(v+="skew("+h+", "+f+pn),(g!==1||d!==1)&&(v+="scale("+g+", "+d+pn),T.style[qe]=v||"translate(0, 0)"},y0=function(e,t){var i=t||this,r=i.xPercent,n=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,p=i.scaleX,h=i.scaleY,f=i.target,g=i.xOrigin,d=i.yOrigin,m=i.xOffset,_=i.yOffset,T=i.forceCSS,E=parseFloat(o),v=parseFloat(a),x,S,M,y,w;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=nr,u*=nr,x=Math.cos(l)*p,S=Math.sin(l)*p,M=Math.sin(l-u)*-h,y=Math.cos(l-u)*h,u&&(c*=nr,w=Math.tan(u-c),w=Math.sqrt(1+w*w),M*=w,y*=w,c&&(w=Math.tan(c),w=Math.sqrt(1+w*w),x*=w,S*=w)),x=je(x),S=je(S),M=je(M),y=je(y)):(x=p,y=h,S=M=0),(E&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(E=nn(f,"x",o,"px"),v=nn(f,"y",a,"px")),(g||d||m||_)&&(E=je(E+g-(g*x+d*M)+m),v=je(v+d-(g*S+d*y)+_)),(r||n)&&(w=f.getBBox(),E=je(E+r/100*w.width),v=je(v+n/100*w.height)),w="matrix("+x+","+S+","+M+","+y+","+E+","+v+")",f.setAttribute("transform",w),T&&(f.style[qe]=w)},S0=function(e,t,i,r,n){var o=360,a=mt(n),l=parseFloat(n)*(a&&~n.indexOf("rad")?_n:1),u=l-r,c=r+u+"deg",p,h;return a&&(p=n.split("_")[1],p==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),p==="cw"&&u<0?u=(u+o*fc)%o-~~(u/o)*o:p==="ccw"&&u>0&&(u=(u-o*fc)%o-~~(u/o)*o)),e._pt=h=new Ot(e._pt,t,i,r,u,r0),h.e=c,h.u="deg",e._props.push(i),h},_c=function(e,t){for(var i in t)e[i]=t[i];return e},M0=function(e,t,i){var r=_c({},i._gsap),n="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,p,h,f,g;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[qe]=t,a=zr(i,1),Nr(i,qe),i.setAttribute("transform",u)):(u=getComputedStyle(i)[qe],o[qe]=t,a=zr(i,1),o[qe]=u);for(l in zi)u=r[l],c=a[l],u!==c&&n.indexOf(l)<0&&(f=Et(u),g=Et(c),p=f!==g?nn(i,l,u,g):parseFloat(u),h=parseFloat(c),e._pt=new Ot(e._pt,a,l,p,h-p,no),e._pt.u=g||0,e._props.push(l));_c(a,r)};Ft("padding,margin,Width,Radius",function(s,e){var t="Top",i="Right",r="Bottom",n="Left",o=(e<3?[t,i,r,n]:[t+n,t+i,r+i,r+n]).map(function(a){return e<2?s+a:"border"+a+s});Ps[e>1?"border"+s:s]=function(a,l,u,c,p){var h,f;if(arguments.length<4)return h=o.map(function(g){return Di(a,g,u)}),f=h.join(" "),f.split(h[0]).length===5?h[0]:f;h=(c+"").split(" "),f={},o.forEach(function(g,d){return f[g]=h[d]=h[d]||h[(d-1)/2|0]}),a.init(l,f,p)}});var Xu={name:"css",register:so,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,n){var o=this._props,a=e.style,l=i.vars.startAt,u,c,p,h,f,g,d,m,_,T,E,v,x,S,M,y;Ao||so(),this.styles=this.styles||Bu(e),y=this.styles.props,this.tween=i;for(d in t)if(d!=="autoRound"&&(c=t[d],!(Ht[d]&&Au(d,t,i,r,e,n)))){if(f=typeof c,g=Ps[d],f==="function"&&(c=c.call(i,r,e,n),f=typeof c),f==="string"&&~c.indexOf("random(")&&(c=Or(c)),g)g(this,e,d,c,i)&&(M=1);else if(d.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(d)+"").trim(),c+="",Qi.lastIndex=0,Qi.test(u)||(m=Et(u),_=Et(c)),_?m!==_&&(u=nn(e,d,u,_)+_):m&&(c+=m),this.add(a,"setProperty",u,c,r,n,0,0,d),o.push(d),y.push(d,0,a[d]);else if(f!=="undefined"){if(l&&d in l?(u=typeof l[d]=="function"?l[d].call(i,r,e,n):l[d],mt(u)&&~u.indexOf("random(")&&(u=Or(u)),Et(u+"")||(u+=Yt.units[d]||Et(Di(e,d))||""),(u+"").charAt(1)==="="&&(u=Di(e,d))):u=Di(e,d),h=parseFloat(u),T=f==="string"&&c.charAt(1)==="="&&c.substr(0,2),T&&(c=c.substr(2)),p=parseFloat(c),d in Fi&&(d==="autoAlpha"&&(h===1&&Di(e,"visibility")==="hidden"&&p&&(h=0),y.push("visibility",0,a.visibility),ji(this,a,"visibility",h?"inherit":"hidden",p?"inherit":"hidden",!p)),d!=="scale"&&d!=="transform"&&(d=Fi[d],~d.indexOf(",")&&(d=d.split(",")[0]))),E=d in zi,E){if(this.styles.save(d),v||(x=e._gsap,x.renderTransform&&!t.parseTransform||zr(e,t.parseTransform),S=t.smoothOrigin!==!1&&x.smooth,v=this._pt=new Ot(this._pt,a,qe,0,1,x.renderTransform,x,0,-1),v.dep=1),d==="scale")this._pt=new Ot(this._pt,x,"scaleY",h,(T?tr(h,T+p):p)-h||0,no),this._pt.u=0,o.push("scaleY",d),d+="X";else if(d==="transformOrigin"){y.push(pi,0,a[pi]),c=_0(c),x.svg?ao(e,c,0,S,0,this):(_=parseFloat(c.split(" ")[2])||0,_!==x.zOrigin&&ji(this,x,"zOrigin",x.zOrigin,_),ji(this,a,d,Ds(u),Ds(c)));continue}else if(d==="svgOrigin"){ao(e,c,1,S,0,this);continue}else if(d in Hu){S0(this,x,d,h,T?tr(h,T+c):c);continue}else if(d==="smoothOrigin"){ji(this,x,"smooth",x.smooth,c);continue}else if(d==="force3D"){x[d]=c;continue}else if(d==="transform"){M0(this,c,e);continue}}else d in a||(d=mr(d)||d);if(E||(p||p===0)&&(h||h===0)&&!n0.test(c)&&d in a)m=(u+"").substr((h+"").length),p||(p=0),_=Et(c)||(d in Yt.units?Yt.units[d]:m),m!==_&&(h=nn(e,d,u,_)),this._pt=new Ot(this._pt,E?x:a,d,h,(T?tr(h,T+p):p)-h,!E&&(_==="px"||d==="zIndex")&&t.autoRound!==!1?a0:no),this._pt.u=_||0,m!==_&&_!=="%"&&(this._pt.b=u,this._pt.r=s0);else if(d in a)g0.call(this,e,d,u,T?T+c:c);else if(d in e)this.add(e,d,u||e[d],T?T+c:c,r,n);else{vo(d,c);continue}E||(d in a?y.push(d,0,a[d]):y.push(d,1,u||e[d])),o.push(d)}}M&&Iu(this)},render:function(e,t){if(t.tween._time||!Co())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Di,aliases:Fi,getSetter:function(e,t,i){var r=Fi[t];return r&&r.indexOf(",")<0&&(t=r),t in zi&&t!==pi&&(e._gsap.x||Di(e,"x"))?i&&uc===i?t==="scale"?u0:c0:(uc=i||{})&&(t==="scale"?f0:h0):e.style&&!go(e.style[t])?o0:~t.indexOf("-")?l0:wo(e,t)},core:{_removeProperty:Nr,_getMatrix:Po}};Kt.utils.checkPrefix=mr;Kt.core.getStyleSaver=Bu;(function(s,e,t,i){var r=Ft(s+","+e+","+t,function(n){zi[n]=1});Ft(e,function(n){Yt.units[n]="deg",Hu[n]=1}),Fi[r[13]]=s+","+e,Ft(i,function(n){var o=n.split(":");Fi[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ft("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Yt.units[s]="px"});Kt.registerPlugin(Xu);var Zn=Kt.registerPlugin(Xu)||Kt;Zn.core.Tween;const No=class{constructor(){}static get instance(){return this._instance||(this._instance=new No),this._instance}a(e,t,i=1,r=0,n=void 0,o=void 0,a=void 0,l=void 0){Zn.killTweensOf(e);let u={},c={};for(var p in t){const h=t[p];h[0]!=null&&h[0]!=null?(u[p]=h[0],c[p]=h[1]):c[p]=h}Zn.set(e,u),n==null&&(n=lc.easeNone),c.ease=n,c.duration=i,c.delay=r,o!=null&&(c.onStart=o),a!=null&&(c.onUpdate=a),l!=null&&(c.onComplete=l),Zn.to(e,c)}set(e,t){Zn.set(e,t)}kill(e){Zn.killTweensOf(e)}};let gt=No;Q(gt,"_instance"),Q(gt,"EaseNone",lc.easeNone),Q(gt,"Power1EaseIn",Pa.easeIn),Q(gt,"Power1EaseOut",Pa.easeOut),Q(gt,"Power1EaseInOut",Pa.easeInOut),Q(gt,"Power2EaseIn",Da.easeIn),Q(gt,"Power2EaseOut",Da.easeOut),Q(gt,"Power2EaseInOut",Da.easeInOut),Q(gt,"Power3EaseIn",La.easeIn),Q(gt,"Power3EaseOut",La.easeOut),Q(gt,"Power3EaseInOut",La.easeInOut),Q(gt,"ExpoEaseIn",Ia.easeIn),Q(gt,"ExpoEaseOut",Ia.easeOut),Q(gt,"ExpoEaseInOut",Ia.easeInOut);class E0 extends i_{constructor(t){super(t);Q(this,"_con");Q(this,"_conDest");Q(this,"_matterjs");Q(this,"_item",[]);Q(this,"_blurCap");Q(this,"_blur",[]);Q(this,"_blurCamera");Q(this,"_dest",[]);Q(this,"_hoverText");Q(this,"_hoverTextPos",new Yi);this._hoverText=document.querySelector(".l-text span"),this._matterjs=t.matterjs,this._con=new Tt,this._conDest=new Tt,this.mainScene.add(this._conDest),this._blurCap=new Yc,this._blurCap.add(this._con),this._blurCamera=this._makeOrthCamera(),this._updateOrthCamera(this._blurCamera,10,10);for(let n=0;n<3;n++){const o=new s_;this._blur.push(o)}const i=new ho(.5,32);this._matterjs.lineBodies.forEach((n,o)=>{this._item.push([]),n.forEach(()=>{const a=new di(i,new uo({color:16777215,transparent:!0,depthTest:!1}));this._con.add(a),this._item[o].push({mesh:a,noise:new W(Ze.instance.random(0,1),Ze.instance.random(0,1),Ze.instance.random(0,1))})})});const r=20;for(let n=0;n<r;n++){const o=new l_({tex:this._blur[this._blur.length-1].getTexture()});this._conDest.add(o),this._dest.push(o)}this._resize()}_update(){super._update(),this._conDest.position.y=Mt.instance.screenOffsetY()*-1;const t=Mt.instance.sw(),i=Mt.instance.sh(),r=this._matterjs.lineBodies[0],n=t/r.length*.15;this._matterjs.lineBodies.forEach((h,f)=>{h.forEach((g,d)=>{let m=g.position.x-t*.5,_=g.position.y*-1+i*.5;const T=this._item[f][d],E=T.mesh;E.position.x=m,E.position.y=_;const v=T.noise,x=n*Mt.instance.val(1.5,1);E.scale.set(x*Ze.instance.mix(2,5,v.x),x*Ze.instance.mix(2,5,v.y),1)})});const o=1;this._conDest.scale.set(o,o,o);const a=_i.instance.easeNormal.x*10,l=_i.instance.easeNormal.y*10,u=100;let c=a*1*u,p=l*1*u;this._hoverTextPos.x+=(c-this._hoverTextPos.x)*.5,this._hoverTextPos.y+=(p-this._hoverTextPos.y)*.5,gt.instance.set(this._hoverText,{x:this._hoverTextPos.x,y:this._hoverTextPos.y}),this._dest.forEach((h,f)=>{h.scale.set(t,i,1),h.position.x=f*a*2,h.position.y=f*l}),this.isNowRenderFrame()&&this._render()}_render(){this.renderer.setClearColor(0,0),this._blurCap.render(this.renderer,this.cameraPers);const t=this.renderSize.width*pt.instance.BLUR_SCALE,i=this.renderSize.height*pt.instance.BLUR_SCALE;this._blur.forEach((r,n)=>{const o=n==0?this._blurCap.texture():this._blur[n-1].getTexture();r.render(t,i,o,this.renderer,this._blurCamera,100)}),this.renderer.setClearColor(16777215,0),this.renderer.render(this.mainScene,this.cameraPers)}isNowRenderFrame(){return this.isRender&&Oi.instance.cnt%2==0}_resize(t=!0){super._resize();const i=Mt.instance.sw(),r=Mt.instance.sh();this.renderSize.width=i,this.renderSize.height=r,this._updatePersCamera(this.cameraPers,i,r);let n=window.devicePixelRatio||1;this._blurCap.setSize(i,r,n),this._updateOrthCamera(this._blurCamera,i*pt.instance.BLUR_SCALE,r*pt.instance.BLUR_SCALE),this.renderer.setPixelRatio(n),this.renderer.setSize(i,r),this.renderer.clear(),t&&this._render()}}class T0 extends vc{constructor(t){super(t);Q(this,"_matterjs");this._matterjs=new oh,new E0({transparent:!0,matterjs:this._matterjs,isBack:!1,el:document.querySelector(".l-main")})}_update(){super._update()}}new T0({el:document.body});
