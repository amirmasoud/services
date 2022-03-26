"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[924],{3758:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(821);const l={components:{Head:r(9038).Fb},props:{title:String}};const o=(0,r(3744).Z)(l,[["render",function(e,t,r,l,o,a){var s=(0,n.resolveComponent)("Head");return(0,n.openBlock)(),(0,n.createBlock)(s,{title:r.title?"".concat(r.title," - ").concat(e.$page.props.app.name):e.$page.props.app.name},{default:(0,n.withCtx)((function(){return[(0,n.renderSlot)(e.$slots,"default")]})),_:3},8,["title"])}]])},9018:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(821),l=r(4444),o=r(2494);const a={props:{type:{type:String,default:"button"},processing:{type:Boolean,default:!1},color:{type:String,default:"indigo"},href:{type:String,default:null}},setup:function(e){return function(t,r){return(0,n.openBlock)(),(0,n.createBlock)((0,n.resolveDynamicComponent)(e.href?"Link":"button"),{type:e.href?null:e.type,disabled:e.href?null:e.processing,href:e.href?e.href:null,class:(0,n.normalizeClass)("inline-flex items-center py-2 px-3 text-sm font-medium leading-4 text-white bg-".concat(e.color,"-600 hover:bg-").concat(e.color,"-700 rounded-md border border-transparent focus:ring-2 focus:ring-").concat(e.color,"-500 focus:ring-offset-2 shadow-sm disabled:opacity-50 disabled:cursor-wait focus:outline-none"))},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)((0,n.unref)(o.Q),{id:"button-spinner",show:e.processing,enter:"transition-opacity duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transition-opacity duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)((0,n.unref)(l.Z),{class:"w-4 h-4"})]})),_:1},8,["show"]),(0,n.renderSlot)(t.$slots,"default")]})),_:3},8,["type","disabled","href","class"])}}}},4232:(e,t,r)=>{r.d(t,{Z:()=>f});var n=r(821),l={class:"border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"},o={class:"flex-1 min-w-0"},a={class:"text-lg font-medium leading-6 text-gray-900 sm:truncate"},s={class:"mt-4 flex sm:mt-0 sm:ml-4"},c={class:"px-4 mt-6 sm:px-6 lg:px-8"},i={class:"text-gray-500 text-xs font-medium uppercase tracking-wide"},d={class:"px-4 mt-6 sm:px-6 lg:px-8"},u={class:"align-middle inline-block min-w-full"};const m={},f=(0,r(3744).Z)(m,[["render",function(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[(0,n.createElementVNode)("div",l,[(0,n.createElementVNode)("div",o,[(0,n.createElementVNode)("h1",a,[(0,n.renderSlot)(e.$slots,"header")])]),(0,n.createElementVNode)("div",s,[(0,n.renderSlot)(e.$slots,"buttons")])]),(0,n.createElementVNode)("div",c,[(0,n.createElementVNode)("h2",i,[(0,n.renderSlot)(e.$slots,"sub-header")]),(0,n.renderSlot)(e.$slots,"sub-header-content")]),(0,n.createElementVNode)("div",d,[(0,n.createElementVNode)("div",u,[(0,n.renderSlot)(e.$slots,"default")])])],64)}]])},4818:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(821),l=r(2494),o=["for"],a={class:"mt-1"},s=["id","name","placeholder","type","value"];const c={props:{name:String,label:String,modelValue:String,id:{type:String,default:function(e){return e.name}},type:{type:String,default:"text"},placeholder:{type:String,default:""},form:{type:Object,default:function(){return{errors:{}}}},hasError:{type:Boolean,default:null},errorMessage:{type:String,default:""}},emits:["update:modelValue"],setup:function(e){return function(t,r){return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[(0,n.createElementVNode)("label",{for:e.id,class:"block text-sm font-medium text-gray-700"},(0,n.toDisplayString)(e.label),9,o),(0,n.createElementVNode)("div",a,[(0,n.createElementVNode)("input",{id:e.id,class:(0,n.normalizeClass)([[e.hasError||e.form.errors[e.name]?"border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500":"focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 "],"block w-full sm:text-sm rounded-md shadow-sm"]),name:e.name,placeholder:e.placeholder,type:e.type,value:e.modelValue,onInput:r[0]||(r[0]=function(e){return t.$emit("update:modelValue",e.target.value)})},null,42,s)]),(0,n.createVNode)((0,n.unref)(l.Q),{id:"".concat(e.name,"-error"),show:e.hasError||!!e.form.errors[e.name],as:"p",class:"mt-2 text-sm text-red-600",enter:"transition-opacity duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transition-opacity duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)((0,n.toDisplayString)(e.hasError?e.errorMessage:e.form.errors[e.name]),1)]})),_:1},8,["id","show"])],64)}}}},4444:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(821),l={class:"animate-spin -ml-1 mr-3 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},o=[(0,n.createElementVNode)("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),(0,n.createElementVNode)("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)];const a={},s=(0,r(3744).Z)(a,[["render",function(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)("svg",l,o)}]])},2924:(e,t,r)=>{r.r(t),r.d(t,{default:()=>$e});var n=r(821),l=r(3758),o=r(4232),a=r(2532),s=r(3724),c=r(3279),i=r.n(c),d=r(9680),u={class:"mb-10 grid grid-cols-1 sm:grid-cols-4 xl:grid-cols-3 gap-0"},m={class:"w-full sm:col-start-2 sm:col-span-2 xl:col-start-2 xl:col-end-3"},f=(0,n.createElementVNode)("label",{class:"block text-sm font-medium text-gray-700",for:"search"},"Search",-1),p={class:"mt-1 relative rounded-md shadow-sm w-full"},g={class:"mb-10 columns-1 sm:columns-2 xl:columns-3 gap-3",role:"list"},h={class:"flex shadow-sm rounded-md"},x={class:"flex-shrink-0 flex items-start justify-center border-t border-l border-gray-200 w-16 text-white text-sm font-medium rounded-tl-md z-10 bg-white p-2"},v=["alt","src"],y={class:"flex-1 flex items-start justify-between border-t border-r border-gray-200 bg-white truncate rounded-tr-md"},V={class:"flex-1 px-4 py-2 text-sm truncate"},b={class:"flex-grow flex flex-col"},w=["innerHTML"],N={class:"flex items-center"},E={class:"text-gray-500"},k=["innerHTML"],C=(0,n.createElementVNode)("hr",null,null,-1),_={class:"grid grid-cols-1 md:grid-cols-2 text-gray-500 bg-white border-r border-b border-l border-gray-200 p-2 rounded-b-md text-sm"},S={class:"col-span-1 md:col-span-2"},B=["innerHTML"],T={class:"md:col-span-1"},j={class:"col-span-1"};const M={props:{records:Object,selectedPlugins:Object},setup:function(e){var t=(0,n.ref)("");return(0,n.watch)(t,i()((function(e){d.Inertia.get(route("slacks.plugins"),{search:t.value},{preserveState:!0,replace:!0,only:["records"]})}),300)),function(r,l){return(0,n.openBlock)(),(0,n.createElementBlock)("div",null,[(0,n.createElementVNode)("div",u,[(0,n.createElementVNode)("div",m,[f,(0,n.createElementVNode)("div",p,[(0,n.withDirectives)((0,n.createElementVNode)("input",{id:"search","onUpdate:modelValue":l[0]||(l[0]=function(e){return t.value=e}),class:"focus:ring-indigo-500 focus:border-indigo-500 block w-full px-4 sm:text-sm border-gray-300 rounded-md",name:"search",placeholder:"search",type:"search"},null,512),[[n.vModelText,t.value]])])])]),(0,n.createElementVNode)("ul",g,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(e.records.plugins,(function(t,l){return(0,n.openBlock)(),(0,n.createElementBlock)("li",{key:l,class:"break-inside-avoid mb-4"},[(0,n.createElementVNode)("div",h,[(0,n.createElementVNode)("div",x,[(0,n.createElementVNode)("img",{alt:"".concat(t.name," icon"),src:t.icons.icon_svg||t.icons.icon_2x||t.icons.icon_1x},null,8,v)]),(0,n.createElementVNode)("div",y,[(0,n.createElementVNode)("div",V,[(0,n.createVNode)((0,n.unref)(a.Mv),{as:"div",class:"flex items-center justify-between mb-2"},{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("span",b,[(0,n.createVNode)((0,n.unref)(a.$A),{as:"span",class:"text-sm font-medium text-gray-900",passive:""},{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("span",{class:"whitespace-pre-line",innerHTML:t.name},null,8,w)]})),_:2},1024),(0,n.createVNode)((0,n.unref)(a.Zm),{as:"span",class:"text-sm text-gray-500"},{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",N,[((0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)([0,1,2,3,4],(function(e){return(0,n.createVNode)((0,n.unref)(s.r7p),{key:e,class:(0,n.normalizeClass)([t.rating>e?"text-yellow-400":"text-gray-200","h-5 w-5 flex-shrink-0"]),"aria-hidden":"true"},null,8,["class"])})),64)),(0,n.createElementVNode)("span",E,"("+(0,n.toDisplayString)(t.num_ratings)+")",1)])]})),_:2},1024)]),(0,n.createVNode)((0,n.unref)(a.rs),{modelValue:e.selectedPlugins[t.slug],"onUpdate:modelValue":[function(r){return e.selectedPlugins[t.slug]=r},function(t){return r.$emit("update:selected-plugins",e.selectedPlugins)}],class:(0,n.normalizeClass)([e.selectedPlugins[t.slug]?"bg-indigo-600":"bg-gray-200","relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"])},{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("span",{class:(0,n.normalizeClass)([e.selectedPlugins[t.slug]?"translate-x-5":"translate-x-0","pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"]),"aria-hidden":"true"},null,2)]})),_:2},1032,["modelValue","onUpdate:modelValue","class"])]})),_:2},1024),(0,n.createElementVNode)("p",{class:"w-full whitespace-pre-wrap",innerHTML:t.short_description},null,8,k)])])]),C,(0,n.createElementVNode)("div",_,[(0,n.createElementVNode)("p",S,[(0,n.createVNode)((0,n.unref)(s.tBG),{class:"w-4 h-4 inline mr-1"}),(0,n.createElementVNode)("span",{innerHTML:t.author},null,8,B)]),(0,n.createElementVNode)("p",T,[(0,n.createVNode)((0,n.unref)(s.Zab),{class:"w-4 h-4 inline mr-1"}),(0,n.createTextVNode)(" "+(0,n.toDisplayString)(t.active_installs),1)]),(0,n.createElementVNode)("p",j,[(0,n.createVNode)((0,n.unref)(s.FjK),{class:"w-4 h-4 inline mr-1"}),(0,n.createTextVNode)(" Tested with "+(0,n.toDisplayString)(t.tested),1)])])])})),128))])])}}};var z=r(6937),Z={class:"mb-10 grid grid-cols-1 sm:grid-cols-4 xl:grid-cols-3 gap-0 max-w-screen-xl"},$={class:"w-full sm:col-start-2 sm:col-span-2 xl:col-start-2 xl:col-end-3"},L=(0,n.createElementVNode)("label",{for:"search",class:"block text-sm font-medium text-gray-700"},"Search",-1),P={class:"mt-1 relative rounded-md shadow-sm w-full"},D=(0,n.createTextVNode)(" Selected Theme "),O={class:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4"},U={class:"flex items-center flex-col"},F=["src"],H={class:"block w-full px-4 pt-2 pb-4"},A=["innerHTML"],I={class:"flex items-center"},K={class:"text-gray-500"};const Q={props:{records:Object,selectedTheme:String},setup:function(e){var t=(0,n.ref)("");return(0,n.watch)(t,i()((function(e){d.Inertia.get(route("slacks.themes"),{search:t.value},{preserveState:!0,replace:!0,only:["records"]})}),300)),function(r,l){return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[(0,n.createElementVNode)("div",Z,[(0,n.createElementVNode)("div",$,[L,(0,n.createElementVNode)("div",P,[(0,n.withDirectives)((0,n.createElementVNode)("input",{id:"search","onUpdate:modelValue":l[0]||(l[0]=function(e){return t.value=e}),type:"search",name:"search",class:"focus:ring-indigo-500 focus:border-indigo-500 block w-full px-4 sm:text-sm border-gray-300 rounded-md",placeholder:"search"},null,512),[[n.vModelText,t.value]])])])]),(0,n.createVNode)((0,n.unref)(z.Ee),{modelValue:e.selectedTheme,"onUpdate:modelValue":[l[1]||(l[1]=function(e){return(0,n.isRef)(selectedTheme)?selectedTheme.value=e:null}),l[2]||(l[2]=function(t){return r.$emit("update:selected-theme",e.selectedTheme)})],class:"mb-10 max-w-screen-xl"},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)((0,n.unref)(z.Nt),{class:"sr-only"},{default:(0,n.withCtx)((function(){return[D]})),_:1}),(0,n.createElementVNode)("div",O,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(e.records.themes,(function(e){return(0,n.openBlock)(),(0,n.createBlock)((0,n.unref)(z.$v),{key:e.slug,as:"template",value:e.slug},{default:(0,n.withCtx)((function(t){var r=t.active,l=t.checked;return[(0,n.createElementVNode)("div",{class:(0,n.normalizeClass)([r?"ring-1 ring-offset-2 ring-indigo-500":"","relative block rounded-lg border border-gray-300 bg-white shadow-sm cursor-pointer hover:border-gray-400 sm:flex sm:justify-between focus:outline-none"])},[(0,n.createElementVNode)("div",U,[(0,n.createElementVNode)("img",{src:e.screenshot_url,class:"rounded-t-lg"},null,8,F),(0,n.createElementVNode)("div",H,[(0,n.createVNode)((0,n.unref)(z.Nt),{as:"p",class:"font-medium text-gray-900"},{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("span",{innerHTML:e.name},null,8,A)]})),_:2},1024),(0,n.createVNode)((0,n.unref)(a.Zm),{as:"span",class:"text-sm text-gray-500"},{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",I,[((0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)([0,1,2,3,4],(function(t){return(0,n.createVNode)((0,n.unref)(s.r7p),{key:t,class:(0,n.normalizeClass)([e.rating>t?"text-yellow-400":"text-gray-200","h-5 w-5 flex-shrink-0"]),"aria-hidden":"true"},null,8,["class"])})),64)),(0,n.createElementVNode)("span",K,"("+(0,n.toDisplayString)(e.num_ratings)+")",1)])]})),_:2},1024)])]),(0,n.createElementVNode)("div",{class:(0,n.normalizeClass)([l?"border-indigo-500":"border-transparent","absolute -inset-px rounded-lg border-2 pointer-events-none"]),"aria-hidden":"true"},null,2)],2)]})),_:2},1032,["value"])})),128))])]})),_:1},8,["modelValue"])],64)}}};var R={class:"justify-center items-center flex"},q={class:"flex-1 mt-6 mb-8"},G={class:"space-y-2 space-x-2"},W=["onClick"];const Y={props:{enteredCommands:String},setup:function(e){var t=[{display:"10 random posts",command:"wp post create --post_type=page --post_title='A random post' --post_status=publish --post_author=1 --post_content='This is a sample post'"},{display:"Generate posts with fetched content.",command:"curl -N https://loripsum.net/api/5 | wp post generate --post_content --count=10"},{display:"Create a new post",command:"wp post create --post_type=post --post_title='A sample post'"},{display:"Create a new page",command:"wp post create --post_type=page --post_title='A sample page'"}];return function(r,l){return(0,n.openBlock)(),(0,n.createElementBlock)("div",R,[(0,n.createElementVNode)("div",q,[(0,n.createElementVNode)("div",G,[((0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(t,(function(t,l){return(0,n.createElementVNode)("span",{key:l,class:"inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-indigo-100 text-indigo-800"},[(0,n.createElementVNode)("button",{type:"button",onClick:(0,n.withModifiers)((function(n){return r.$emit("update:entered-commands",e.enteredCommands+"\n"+t.command)}),["prevent"])},(0,n.toDisplayString)(t.display),9,W)])})),64))]),(0,n.withDirectives)((0,n.createElementVNode)("textarea",{"onUpdate:modelValue":[l[0]||(l[0]=function(e){return(0,n.isRef)(enteredCommands)?enteredCommands.value=e:null}),l[1]||(l[1]=function(t){return r.$emit("update:entered-commands",e.enteredCommands)})],spellcheck:"false","data-gramm":"false","data-gramm_editor":"false","data-enable-grammarly":"false",rows:"3",class:"mt-6 shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"},null,512),[[n.vModelText,e.enteredCommands]])])])}}};var J=r(349),X=r(9018),ee=r(4818),te=r(7751),re=r(2494),ne={"aria-live":"assertive",class:"fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:mt-16"},le={class:"w-full flex flex-col items-center space-y-4 sm:items-end"},oe={class:"p-4"},ae={class:"flex items-start"},se={class:"flex-shrink-0"},ce={class:"ml-3 w-0 flex-1 pt-0.5"},ie={class:"text-sm font-medium text-gray-900"},de={class:"mt-1 text-sm text-gray-500"},ue={class:"ml-4 flex-shrink-0 flex"},me=(0,n.createElementVNode)("span",{class:"sr-only"},"Close",-1);const fe={props:{show:Boolean,title:String,message:String,type:{type:String,default:"error"}},setup:function(e){return function(t,r){return(0,n.openBlock)(),(0,n.createElementBlock)("div",ne,[(0,n.createElementVNode)("div",le,[(0,n.createVNode)((0,n.unref)(re.Q),{show:e.show,class:"max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden",enter:"transform ease-out duration-300 transition","enter-from":"translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2","enter-to":"translate-y-0 opacity-100 sm:translate-x-0",leave:"transition ease-in duration-100","leave-from":"opacity-100","leave-to":"opacity-0"},{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",oe,[(0,n.createElementVNode)("div",ae,[(0,n.createElementVNode)("div",se,["success"===e.type?((0,n.openBlock)(),(0,n.createBlock)((0,n.unref)(te.rE2),{key:0,class:"h-6 w-6 text-green-400","aria-hidden":"true"})):(0,n.createCommentVNode)("",!0),"error"===e.type?((0,n.openBlock)(),(0,n.createBlock)((0,n.unref)(te.$Ow),{key:1,class:"h-6 w-6 text-red-400","aria-hidden":"true"})):(0,n.createCommentVNode)("",!0)]),(0,n.createElementVNode)("div",ce,[(0,n.createElementVNode)("p",ie,(0,n.toDisplayString)(e.title),1),(0,n.createElementVNode)("p",de,(0,n.toDisplayString)(e.message),1)]),(0,n.createElementVNode)("div",ue,[(0,n.createElementVNode)("button",{class:"bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",onClick:r[0]||(r[0]=function(t){return e.show=!1})},[me,(0,n.createVNode)((0,n.unref)(s.b0D),{class:"h-5 w-5","aria-hidden":"true"})])])])])]})),_:1},8,["show"])])])}}};var pe=r(9038);function ge(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,l,o=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(e){s=!0,l=e}finally{try{a||null==r.return||r.return()}finally{if(s)throw l}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return he(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return he(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function he(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var xe=(0,n.createTextVNode)("Install New WordPress Site"),ve=(0,n.createTextVNode)(" Deploy "),ye={class:"max-w-screen-xl"},Ve={class:"col-span-6 sm:col-span-4"},be={class:"col-span-6 sm:col-span-4"},we={class:"col-span-6 sm:col-span-4"},Ne={class:"col-span-6 sm:col-span-4"},Ee=(0,n.createElementVNode)("button",{type:"submit"},"Yeah",-1),ke=(0,n.createTextVNode)(" Selected Stack Type"),Ce={class:"grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 gap-4"},_e={class:"flex items-center flex-col"},Se=["src"],Be={class:"block w-full px-4 pt-2 pb-4"},Te=["innerHTML"],je=(0,n.createTextVNode)(" LOL "),Me=(0,n.createElementVNode)("span",null,"Plugins",-1),ze=(0,n.createElementVNode)("span",null,"Themes",-1),Ze=(0,n.createElementVNode)("span",null,"Advance",-1);const $e={props:{plugins:Object,themes:Object,types:Object},setup:function(e){var t=(0,n.ref)(""),r=(0,n.ref)({}),c=(0,n.ref)(""),i=(0,n.ref)(""),d=(0,pe.cI)({name:null,price:null,properties:{plugins:{},theme:"",commands:{}},type:null}),u=(0,n.ref)(""),m=(0,n.ref)(""),f=(0,n.ref)(!1);(0,n.watch)(r.value,(function(){d.properties.plugins=Object.entries(r.value).filter((function(e){var t=ge(e,2);t[0];return t[1]})).map((function(e){var t=ge(e,2),r=t[0];t[1];return r}))})),(0,n.watch)(c,(function(){d.properties.theme=c.value})),(0,n.watch)(i,(function(){d.properties.commands=i.value}));var p=function(){return""===selectedPlan.value?(u.value="Error",m.value="Please select a plan",void(f.value=!0)):""===t.value?(u.value="Error",m.value="Please select a configuration",void(f.value=!0)):""===c.value?(u.value="Error",m.value="Please select a theme",void(f.value=!0)):void(f.value=!1)};return function(t,g){return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[(0,n.createVNode)((0,n.unref)(l.Z),{title:"New WordPress Site"}),(0,n.createVNode)((0,n.unref)(o.Z),null,{header:(0,n.withCtx)((function(){return[xe]})),buttons:(0,n.withCtx)((function(){return[(0,n.createVNode)((0,n.unref)(X.Z),{color:"green",onClick:(0,n.withModifiers)(p,["prevent"])},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)((0,n.unref)(s.Rdq),{class:"w-4 h-4 mr-2"}),ve]})),_:1},8,["onClick"])]})),default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",ye,[(0,n.createElementVNode)("form",{class:"space-y-4",onSubmit:g[4]||(g[4]=(0,n.withModifiers)((function(e){return(0,n.unref)(d).post(t.$route("dashboard.sites.stacks.store"))}),["prevent"]))},[(0,n.createElementVNode)("div",Ve,[(0,n.createVNode)((0,n.unref)(ee.Z),{modelValue:(0,n.unref)(d).name,"onUpdate:modelValue":g[0]||(g[0]=function(e){return(0,n.unref)(d).name=e}),form:(0,n.unref)(d),label:"Name",name:"name"},null,8,["modelValue","form"])]),(0,n.createElementVNode)("div",be,[(0,n.createVNode)((0,n.unref)(ee.Z),{modelValue:(0,n.unref)(d).price,"onUpdate:modelValue":g[1]||(g[1]=function(e){return(0,n.unref)(d).price=e}),form:(0,n.unref)(d),label:"Price",name:"price"},null,8,["modelValue","form"])]),(0,n.createElementVNode)("div",we,[(0,n.createVNode)((0,n.unref)(ee.Z),{modelValue:(0,n.unref)(d).properties,"onUpdate:modelValue":g[2]||(g[2]=function(e){return(0,n.unref)(d).properties=e}),form:(0,n.unref)(d),label:"Properties",name:"properties"},null,8,["modelValue","form"])]),(0,n.createElementVNode)("div",Ne,[(0,n.createVNode)((0,n.unref)(ee.Z),{modelValue:(0,n.unref)(d).type,"onUpdate:modelValue":g[3]||(g[3]=function(e){return(0,n.unref)(d).type=e}),form:(0,n.unref)(d),label:"Type",name:"type"},null,8,["modelValue","form"])]),Ee],32),(0,n.createVNode)((0,n.unref)(z.Ee),{modelValue:(0,n.unref)(d).type,"onUpdate:modelValue":g[5]||(g[5]=function(e){return(0,n.unref)(d).type=e}),class:"mb-10 max-w-screen-xl"},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)((0,n.unref)(z.Nt),{class:"sr-only"},{default:(0,n.withCtx)((function(){return[ke]})),_:1}),(0,n.createElementVNode)("div",Ce,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(e.types,(function(e){return(0,n.openBlock)(),(0,n.createBlock)((0,n.unref)(z.$v),{key:e.value,value:e.value,as:"template"},{default:(0,n.withCtx)((function(t){var r=t.active,l=t.checked;return[(0,n.createElementVNode)("div",{class:(0,n.normalizeClass)([r?"ring-1 ring-offset-2 ring-indigo-500":"","relative block rounded-lg border border-gray-300 bg-white shadow-sm cursor-pointer hover:border-gray-400 sm:flex sm:justify-between focus:outline-none"])},[(0,n.createElementVNode)("div",_e,[(0,n.createElementVNode)("img",{src:e.icon,class:"rounded-t-lg p-4"},null,8,Se),(0,n.createElementVNode)("div",Be,[(0,n.createVNode)((0,n.unref)(z.Nt),{as:"p",class:"font-medium text-gray-900"},{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("span",{innerHTML:e.label},null,8,Te)]})),_:2},1024),(0,n.createVNode)((0,n.unref)(a.Zm),{as:"span",class:"text-sm text-gray-500"},{default:(0,n.withCtx)((function(){return[je]})),_:1})])]),(0,n.createElementVNode)("div",{class:(0,n.normalizeClass)([l?"border-indigo-500":"border-transparent","absolute -inset-px rounded-lg border-2 pointer-events-none"]),"aria-hidden":"true"},null,2)],2)]})),_:2},1032,["value"])})),128))])]})),_:1},8,["modelValue"]),(0,n.createVNode)((0,n.unref)(J.v0),{as:"div"},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)((0,n.unref)(J.td),{class:"flex flex-col sm:flex-row flex-wrap relative z-0 justify-center space-y-2 sm:space-y-0 space-x-0 sm:space-x-2 mb-4"},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)((0,n.unref)(J.OK),null,{default:(0,n.withCtx)((function(e){var t=e.selected;return[(0,n.createElementVNode)("button",{class:(0,n.normalizeClass)([t?"text-indigo-600 bg-gray-50 border border-indigo-500 hover:bg-gray-100":"text-gray-500 hover:text-gray-700 border border-gray-300 bg-white hover:bg-gray-50","flex items-center justify-center shadow-sm group relative w-full sm:w-32 overflow-hidden p-2 text-sm font-medium text-center focus:z-10 rounded-lg"])},[(0,n.createVNode)((0,n.unref)(s.Mfs),{class:"w-3 h-3 mr-2"}),Me],2)]})),_:1}),(0,n.createVNode)((0,n.unref)(J.OK),null,{default:(0,n.withCtx)((function(e){var t=e.selected;return[(0,n.createElementVNode)("button",{class:(0,n.normalizeClass)([t?"text-indigo-600 bg-gray-50 border border-indigo-500 hover:bg-gray-100":"text-gray-500 hover:text-gray-700 border border-gray-300 bg-white hover:bg-gray-50","flex items-center justify-center shadow-sm group relative w-full sm:w-32 overflow-hidden p-2 text-sm font-medium text-center focus:z-10 rounded-lg"])},[(0,n.createVNode)((0,n.unref)(s.CSq),{class:"w-3 h-3 mr-2"}),ze],2)]})),_:1}),(0,n.createVNode)((0,n.unref)(J.OK),null,{default:(0,n.withCtx)((function(e){var t=e.selected;return[(0,n.createElementVNode)("button",{class:(0,n.normalizeClass)([t?"text-indigo-600 bg-gray-50 border border-indigo-500 hover:bg-gray-100":"text-gray-500 hover:text-gray-700 border border-gray-300 bg-white hover:bg-gray-50","flex items-center justify-center shadow-sm group relative w-full sm:w-32 overflow-hidden p-2 text-sm font-medium text-center focus:z-10 rounded-lg"])},[(0,n.createVNode)((0,n.unref)(s.FxN),{class:"w-3 h-3 mr-2"}),Ze],2)]})),_:1})]})),_:1}),(0,n.createVNode)((0,n.unref)(J.nP),null,{default:(0,n.withCtx)((function(){return[(0,n.createVNode)((0,n.unref)(J.x4),null,{default:(0,n.withCtx)((function(){return[(0,n.createVNode)((0,n.unref)(M),{"selected-plugins":r.value,"onUpdate:selected-plugins":g[6]||(g[6]=function(e){return r.value=e}),records:e.plugins},null,8,["selected-plugins","records"])]})),_:1}),(0,n.createVNode)((0,n.unref)(J.x4),null,{default:(0,n.withCtx)((function(){return[(0,n.createVNode)((0,n.unref)(Q),{"selected-theme":c.value,"onUpdate:selected-theme":g[7]||(g[7]=function(e){return c.value=e}),records:e.themes},null,8,["selected-theme","records"])]})),_:1}),(0,n.createVNode)((0,n.unref)(J.x4),null,{default:(0,n.withCtx)((function(){return[(0,n.createVNode)((0,n.unref)(Y),{"entered-commands":i.value,"onUpdate:entered-commands":g[8]||(g[8]=function(e){return i.value=e})},null,8,["entered-commands"])]})),_:1})]})),_:1})]})),_:1})]),(0,n.createVNode)((0,n.unref)(fe),{message:(0,n.unref)(m),show:(0,n.unref)(f),title:(0,n.unref)(u)},null,8,["message","show","title"])]})),_:1})],64)}}}}}]);