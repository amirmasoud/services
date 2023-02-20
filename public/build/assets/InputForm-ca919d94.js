import{_ as we}from"./_plugin-vue_export-helper-c27b6911.js";import{o as R,c as D,b as x,G as Se,y as q,F as Ee,B as V,s as A,p as _,h as S,m as B,k as T,z as ee,l as k,x as Oe,n as te,t as P,f as xe,a as Te,d as $e,e as je,u as Ce}from"./app-af0d2e3f.js";const Fe={},Le={class:"animate-spin -ml-1 mr-3 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},Ae=x("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),Be=x("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1),ke=[Ae,Be];function Ve(e,t){return R(),D("svg",Le,ke)}const st=we(Fe,[["render",Ve]]);function $(e,t,...r){if(e in t){let a=t[e];return typeof a=="function"?a(...r):a}let n=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(a=>`"${a}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,$),n}var ne=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(ne||{}),y=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(y||{});function re({visible:e=!0,features:t=0,ourProps:r,theirProps:n,...a}){var i;let l=le(n,r),o=Object.assign(a,{props:l});if(e||t&2&&l.static)return I(o);if(t&1){let d=(i=l.unmount)==null||i?0:1;return $(d,{[0](){return null},[1](){return I({...a,props:{...l,hidden:!0,style:{display:"none"}}})}})}return I(o)}function I({props:e,attrs:t,slots:r,slot:n,name:a}){var i,l;let{as:o,...d}=ie(e,["unmount","static"]),s=(i=r.default)==null?void 0:i.call(r,n),c={};if(n){let u=!1,E=[];for(let[p,m]of Object.entries(n))typeof m=="boolean"&&(u=!0),m===!0&&E.push(p);u&&(c["data-headlessui-state"]=E.join(" "))}if(o==="template"){if(s=ae(s??[]),Object.keys(d).length>0||Object.keys(t).length>0){let[u,...E]=s??[];if(!He(u)||E.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${a} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(d).concat(Object.keys(t)).map(f=>f.trim()).filter((f,g,j)=>j.indexOf(f)===g).sort((f,g)=>f.localeCompare(g)).map(f=>`  - ${f}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(f=>`  - ${f}`).join(`
`)].join(`
`));let p=le((l=u.props)!=null?l:{},d),m=Se(u,p);for(let f in p)f.startsWith("on")&&(m.props||(m.props={}),m.props[f]=p[f]);return m}return Array.isArray(s)&&s.length===1?s[0]:s}return q(o,Object.assign({},d,c),{default:()=>s})}function ae(e){return e.flatMap(t=>t.type===Ee?ae(t.children):[t])}function le(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},r={};for(let n of e)for(let a in n)a.startsWith("on")&&typeof n[a]=="function"?(r[a]!=null||(r[a]=[]),r[a].push(n[a])):t[a]=n[a];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(r).map(n=>[n,void 0])));for(let n in r)Object.assign(t,{[n](a,...i){let l=r[n];for(let o of l){if(a instanceof Event&&a.defaultPrevented)return;o(a,...i)}}});return t}function ut(e){let t=Object.assign({},e);for(let r in t)t[r]===void 0&&delete t[r];return t}function ie(e,t=[]){let r=Object.assign({},e);for(let n of t)n in r&&delete r[n];return r}function He(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let Ne=0;function Pe(){return++Ne}function Ie(){return Pe()}function X(e){var t;return e==null||e.value==null?null:(t=e.value.$el)!=null?t:e.value}let oe=Symbol("Context");var v=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(v||{});function Me(){return se()!==null}function se(){return V(oe,null)}function Re(e){A(oe,e)}class De{constructor(){this.current=this.detect(),this.currentId=0}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}}let Ue=new De;function ue(){let e=[],t=[],r={enqueue(n){t.push(n)},addEventListener(n,a,i,l){return n.addEventListener(a,i,l),r.add(()=>n.removeEventListener(a,i,l))},requestAnimationFrame(...n){let a=requestAnimationFrame(...n);r.add(()=>cancelAnimationFrame(a))},nextFrame(...n){r.requestAnimationFrame(()=>{r.requestAnimationFrame(...n)})},setTimeout(...n){let a=setTimeout(...n);r.add(()=>clearTimeout(a))},add(n){e.push(n)},style(n,a,i){let l=n.style.getPropertyValue(a);return Object.assign(n.style,{[a]:i}),this.add(()=>{Object.assign(n.style,{[a]:l})})},dispose(){for(let n of e.splice(0))n()},async workQueue(){for(let n of t.splice(0))await n()}};return r}function qe(e){let t={called:!1};return(...r)=>{if(!t.called)return t.called=!0,e(...r)}}function M(e,...t){e&&t.length>0&&e.classList.add(...t)}function L(e,...t){e&&t.length>0&&e.classList.remove(...t)}var U=(e=>(e.Finished="finished",e.Cancelled="cancelled",e))(U||{});function ze(e,t){let r=ue();if(!e)return r.dispose;let{transitionDuration:n,transitionDelay:a}=getComputedStyle(e),[i,l]=[n,a].map(o=>{let[d=0]=o.split(",").filter(Boolean).map(s=>s.includes("ms")?parseFloat(s):parseFloat(s)*1e3).sort((s,c)=>c-s);return d});return i!==0?r.setTimeout(()=>t("finished"),i+l):t("finished"),r.add(()=>t("cancelled")),r.dispose}function Z(e,t,r,n,a,i){let l=ue(),o=i!==void 0?qe(i):()=>{};return L(e,...a),M(e,...t,...r),l.nextFrame(()=>{L(e,...r),M(e,...n),l.add(ze(e,d=>(L(e,...n,...t),M(e,...a),o(d))))}),l.add(()=>L(e,...t,...r,...n,...a)),l.add(()=>o("cancelled")),l.dispose}function w(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let z=Symbol("TransitionContext");var We=(e=>(e.Visible="visible",e.Hidden="hidden",e))(We||{});function Ke(){return V(z,null)!==null}function Qe(){let e=V(z,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function Ye(){let e=V(W,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let W=Symbol("NestingContext");function H(e){return"children"in e?H(e.children):e.value.filter(({state:t})=>t==="visible").length>0}function de(e){let t=S([]),r=S(!1);T(()=>r.value=!0),ee(()=>r.value=!1);function n(i,l=y.Hidden){let o=t.value.findIndex(({id:d})=>d===i);o!==-1&&($(l,{[y.Unmount](){t.value.splice(o,1)},[y.Hidden](){t.value[o].state="hidden"}}),!H(t)&&r.value&&(e==null||e()))}function a(i){let l=t.value.find(({id:o})=>o===i);return l?l.state!=="visible"&&(l.state="visible"):t.value.push({id:i,state:"visible"}),()=>n(i,y.Unmount)}return{children:t,register:a,unregister:n}}let fe=ne.RenderStrategy,Ge=_({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:r,slots:n,expose:a}){let i=S(0);function l(){i.value|=v.Opening,t("beforeEnter")}function o(){i.value&=~v.Opening,t("afterEnter")}function d(){i.value|=v.Closing,t("beforeLeave")}function s(){i.value&=~v.Closing,t("afterLeave")}if(!Ke()&&Me())return()=>q(ce,{...e,onBeforeEnter:l,onAfterEnter:o,onBeforeLeave:d,onAfterLeave:s},n);let c=S(null),u=S("visible"),E=B(()=>e.unmount?y.Unmount:y.Hidden);a({el:c,$el:c});let{show:p,appear:m}=Qe(),{register:f,unregister:g}=Ye(),j={value:!0},O=Ie(),C={value:!1},K=de(()=>{!C.value&&u.value!=="hidden"&&(u.value="hidden",g(O),s())});T(()=>{let h=f(O);ee(h)}),k(()=>{if(E.value===y.Hidden&&O){if(p&&u.value!=="visible"){u.value="visible";return}$(u.value,{hidden:()=>g(O),visible:()=>f(O)})}});let Q=w(e.enter),Y=w(e.enterFrom),pe=w(e.enterTo),G=w(e.entered),me=w(e.leave),ve=w(e.leaveFrom),he=w(e.leaveTo);T(()=>{k(()=>{if(u.value==="visible"){let h=X(c);if(h instanceof Comment&&h.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function ye(h){let N=j.value&&!m.value,b=X(c);!b||!(b instanceof HTMLElement)||N||(C.value=!0,p.value&&l(),p.value||d(),h(p.value?Z(b,Q,Y,pe,G,F=>{C.value=!1,F===U.Finished&&o()}):Z(b,me,ve,he,G,F=>{C.value=!1,F===U.Finished&&(H(K)||(u.value="hidden",g(O),s()))})))}return T(()=>{Oe([p],(h,N,b)=>{ye(b),j.value=!1},{immediate:!0})}),A(W,K),Re(B(()=>$(u.value,{visible:v.Open,hidden:v.Closed})|i.value)),()=>{let{appear:h,show:N,enter:b,enterFrom:F,enterTo:tt,entered:nt,leave:rt,leaveFrom:at,leaveTo:lt,...J}=e,ge={ref:c},be={...J,...m&&p&&Ue.isServer?{class:te([J.class,...Q,...Y])}:{}};return re({theirProps:be,ourProps:ge,slot:{},slots:n,attrs:r,features:fe,visible:u.value==="visible",name:"TransitionChild"})}}}),Je=Ge,ce=_({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:r,slots:n}){let a=se(),i=B(()=>e.show===null&&a!==null?(a.value&v.Open)===v.Open:e.show);k(()=>{if(![!0,!1].includes(i.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let l=S(i.value?"visible":"hidden"),o=de(()=>{l.value="hidden"}),d=S(!0),s={show:i,appear:B(()=>e.appear||!d.value)};return T(()=>{k(()=>{d.value=!1,i.value?l.value="visible":H(o)||(l.value="hidden")})}),A(W,o),A(z,s),()=>{let c=ie(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),u={unmount:e.unmount};return re({ourProps:{...u,as:"template"},theirProps:{},slot:{},slots:{...n,default:()=>[q(Je,{onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave"),...r,...u,...c},n.default)]},attrs:{},features:fe,visible:l.value==="visible",name:"Transition"})}}});const Xe=["for"],Ze={class:"mt-1"},_e=["id","name","placeholder","type","value"],et=["id"],dt={__name:"InputForm",props:{name:String,label:String,modelValue:String,id:{type:String,default:e=>e.name},type:{type:String,default:"text"},placeholder:{type:String,default:""},form:{type:Object,default(){return{errors:{}}}},hasError:{type:Boolean,default:null},errorMessage:{type:String,default:""},help:{type:String,default:""}},emits:["update:modelValue"],setup(e){return(t,r)=>(R(),D("div",null,[x("label",{for:e.id,class:"block text-sm font-medium text-gray-700"},P(e.label),9,Xe),x("div",Ze,[x("input",{id:e.id,class:te([[e.hasError||e.form.errors[e.name]?"border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500":"border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"],"shadow-sm block w-full sm:text-sm rounded-md text-gray-700"]),name:e.name,placeholder:e.placeholder,type:e.type,value:e.modelValue,onInput:r[0]||(r[0]=n=>t.$emit("update:modelValue",n.target.value)),onKeydown:r[1]||(r[1]=n=>e.form.clearErrors(e.name))},null,42,_e)]),e.help!==""?(R(),D("p",{key:0,id:`${e.name}-description`,class:"mt-2 text-sm text-gray-500"},P(e.help),9,et)):xe("",!0),Te(Ce(ce),{id:`${e.name}-error`,show:e.hasError||!!e.form.errors[e.name],as:"p",class:"mt-2 text-sm text-red-600",enter:"transition-opacity duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transition-opacity duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:$e(()=>[je(P(e.hasError?e.errorMessage:e.form.errors[e.name]),1)]),_:1},8,["id","show"])]))}};export{re as H,ut as K,ne as N,ce as S,ie as T,dt as _,st as a,Re as c,v as l,Ue as n,X as o,se as p,Ie as t,$ as u};
