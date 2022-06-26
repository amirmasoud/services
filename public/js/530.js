"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[530],{3758:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(821);const l={components:{Head:r(9038).Fb},props:{title:String}};const o=(0,r(3744).Z)(l,[["render",function(e,t,r,l,o,a){var s=(0,n.resolveComponent)("Head");return(0,n.openBlock)(),(0,n.createBlock)(s,{title:r.title?"".concat(r.title," - ").concat(e.$page.props.app.name):e.$page.props.app.name},{default:(0,n.withCtx)((function(){return[(0,n.renderSlot)(e.$slots,"default")]})),_:3},8,["title"])}]])},9018:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(821),l=r(4444),o=r(2600);const a={props:{type:{type:String,default:"button"},processing:{type:Boolean,default:!1},href:{type:String,default:null}},setup:function(e){return function(t,r){return(0,n.openBlock)(),(0,n.createBlock)((0,n.resolveDynamicComponent)(e.href?"Link":"button"),{disabled:t.disabled||e.href?null:e.processing,href:e.href?e.href:null,type:e.href?null:e.type,class:"inline-flex items-center py-2 px-3 text-sm font-medium leading-4 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md border border-transparent focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-sm disabled:opacity-50 disabled:cursor-wait focus:outline-none"},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)((0,n.unref)(o.Q),{id:"button-spinner",show:e.processing,enter:"transition-opacity duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transition-opacity duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)((0,n.unref)(l.Z),{class:"w-4 h-4"})]})),_:1},8,["show"]),(0,n.renderSlot)(t.$slots,"default")]})),_:3},8,["disabled","href","type"])}}}},7105:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(821),l={class:"border-b border-gray-200 px-4 py-4 flex items-center justify-between sm:px-6 lg:px-8 max-w-screen-lg"},o={class:"flex-1 min-w-0"},a={class:"text-lg font-medium leading-6 text-gray-900 sm:truncate"},s={class:"flex-shrink-0 sm:mt-0 sm:ml-4"},c={class:"px-4 mt-6 sm:px-6 lg:px-8 max-w-screen-lg"},d={class:"text-gray-500 text-xs font-medium uppercase tracking-wide"},i={class:"px-4 my-6 sm:px-6 lg:px-8 max-w-screen-lg"},u={class:"align-middle"};const m={props:{name:String,label:String,modelValue:String,id:{type:String,default:function(e){return e.name}},type:{type:String,default:"text"},placeholder:{type:String,default:""},form:{type:Object,default:function(){return{errors:{}}}},hasError:{type:Boolean,default:null},errorMessage:{type:String,default:""},help:{type:String,default:""}},emits:["update:modelValue"],setup:function(e){return function(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[(0,n.createElementVNode)("div",l,[(0,n.createElementVNode)("div",o,[(0,n.createElementVNode)("h1",a,[(0,n.renderSlot)(e.$slots,"header")])]),(0,n.createElementVNode)("div",s,[(0,n.renderSlot)(e.$slots,"buttons")])]),(0,n.createElementVNode)("div",c,[(0,n.createElementVNode)("h2",d,[(0,n.renderSlot)(e.$slots,"sub-header")]),(0,n.renderSlot)(e.$slots,"sub-header-content")]),(0,n.createElementVNode)("div",i,[(0,n.createElementVNode)("div",u,[(0,n.renderSlot)(e.$slots,"default")])])],64)}}}},4818:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(821),l=r(2600),o=["for"],a={class:"mt-1"},s=["id","name","placeholder","type","value"],c=["id"];const d={props:{name:String,label:String,modelValue:String,id:{type:String,default:function(e){return e.name}},type:{type:String,default:"text"},placeholder:{type:String,default:""},form:{type:Object,default:function(){return{errors:{}}}},hasError:{type:Boolean,default:null},errorMessage:{type:String,default:""},help:{type:String,default:""}},emits:["update:modelValue"],setup:function(e){return function(t,r){return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[(0,n.createElementVNode)("label",{for:e.id,class:"block text-sm font-semibold font-medium text-gray-700"},(0,n.toDisplayString)(e.label),9,o),(0,n.createElementVNode)("div",a,[(0,n.createElementVNode)("input",{id:e.id,class:(0,n.normalizeClass)([[e.hasError||e.form.errors[e.name]?"border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500":"focus:ring-indigo-500 focus:border-indigo-500 border-gray-300"],"block w-full sm:text-sm rounded-md shadow-sm"]),name:e.name,placeholder:e.placeholder,type:e.type,value:e.modelValue,onInput:r[0]||(r[0]=function(e){return t.$emit("update:modelValue",e.target.value)})},null,42,s)]),""!==e.help?((0,n.openBlock)(),(0,n.createElementBlock)("p",{key:0,id:"".concat(e.name,"-description"),class:"mt-2 text-sm text-gray-500"},(0,n.toDisplayString)(e.help),9,c)):(0,n.createCommentVNode)("",!0),(0,n.createVNode)((0,n.unref)(l.Q),{id:"".concat(e.name,"-error"),show:e.hasError||!!e.form.errors[e.name],as:"p",class:"mt-2 text-sm text-red-600",enter:"transition-opacity duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transition-opacity duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)((0,n.toDisplayString)(e.hasError?e.errorMessage:e.form.errors[e.name]),1)]})),_:1},8,["id","show"])],64)}}}},4444:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(821),l={class:"animate-spin -ml-1 mr-3 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},o=[(0,n.createElementVNode)("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),(0,n.createElementVNode)("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)];const a={},s=(0,r(3744).Z)(a,[["render",function(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)("svg",l,o)}]])},21:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(821),l={class:"justify-center items-center flex"},o={class:"flex-1 mt-6 mb-8"},a={class:"space-y-2 space-x-2"},s=["onClick"];const c={props:{enteredCommands:String},setup:function(e){var t=[{display:"10 random posts",command:"wp post create --post_type=page --post_title='A random post' --post_status=publish --post_author=1 --post_content='This is a sample post'"},{display:"Generate posts with fetched content.",command:"curl -N https://loripsum.net/api/5 | wp post generate --post_content --count=10"},{display:"Create a new post",command:"wp post create --post_type=post --post_title='A sample post'"},{display:"Create a new page",command:"wp post create --post_type=page --post_title='A sample page'"}];return function(r,c){return(0,n.openBlock)(),(0,n.createElementBlock)("div",l,[(0,n.createElementVNode)("div",o,[(0,n.createElementVNode)("div",a,[((0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(t,(function(t,l){return(0,n.createElementVNode)("span",{key:l,class:"inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-indigo-100 text-indigo-800"},[(0,n.createElementVNode)("button",{type:"button",onClick:(0,n.withModifiers)((function(n){return r.$emit("update:entered-commands",e.enteredCommands+"\n"+t.command)}),["prevent"])},(0,n.toDisplayString)(t.display),9,s)])})),64))]),(0,n.withDirectives)((0,n.createElementVNode)("textarea",{"onUpdate:modelValue":[c[0]||(c[0]=function(e){return(0,n.isRef)(enteredCommands)?enteredCommands.value=e:null}),c[1]||(c[1]=function(t){return r.$emit("update:entered-commands",e.enteredCommands)})],spellcheck:"false","data-gramm":"false","data-gramm_editor":"false","data-enable-grammarly":"false",rows:"3",class:"mt-6 shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"},null,512),[[n.vModelText,e.enteredCommands]])])])}}}},8250:(e,t,r)=>{r.d(t,{Z:()=>M});var n=r(821),l=r(7925),o=r(8541),a=r(8905),s=r(6902),c=r(7066),d=r(3279),i=r.n(d),u=r(9680),m={class:"mb-10 grid grid-cols-1 sm:grid-cols-4 xl:grid-cols-3 gap-0"},f={class:"w-full sm:col-start-2 sm:col-span-2 xl:col-start-2 xl:col-end-3"},p=(0,n.createElementVNode)("label",{class:"block text-sm font-medium text-gray-700",for:"search"},"Search",-1),g={class:"mt-1 relative rounded-md shadow-sm w-full"},h={class:"mb-10 columns-1 sm:columns-2 xl:columns-3 gap-3",role:"list"},x={class:"flex shadow-sm rounded-md"},y={class:"flex-shrink-0 flex items-start justify-center border-t border-l border-gray-200 w-16 text-white text-sm font-medium rounded-tl-md z-10 bg-white p-2"},b=["alt","src"],V={class:"flex-1 flex items-start justify-between border-t border-r border-gray-200 bg-white truncate rounded-tr-md"},v={class:"flex-1 px-4 py-2 text-sm truncate"},w={class:"flex-grow flex flex-col"},N=["innerHTML"],E={class:"flex items-center"},k={class:"text-gray-500"},C=["innerHTML"],S=(0,n.createElementVNode)("hr",null,null,-1),_={class:"grid grid-cols-1 md:grid-cols-2 text-gray-500 bg-white border-r border-b border-l border-gray-200 p-2 rounded-b-md text-sm"},B={class:"col-span-1 md:col-span-2"},Z=["innerHTML"],T={class:"md:col-span-1"},j={class:"col-span-1"};const M={props:{records:Object,selectedPlugins:Object},setup:function(e){var t=(0,n.ref)("");return(0,n.watch)(t,i()((function(e){u.Inertia.get(route("slacks.plugins"),{search:t.value},{preserveState:!0,replace:!0,only:["records"]})}),300)),function(r,d){return(0,n.openBlock)(),(0,n.createElementBlock)("div",null,[(0,n.createElementVNode)("div",m,[(0,n.createElementVNode)("div",f,[p,(0,n.createElementVNode)("div",g,[(0,n.withDirectives)((0,n.createElementVNode)("input",{id:"search","onUpdate:modelValue":d[0]||(d[0]=function(e){return t.value=e}),class:"focus:ring-indigo-500 focus:border-indigo-500 block w-full px-4 sm:text-sm border-gray-300 rounded-md",name:"search",placeholder:"search",type:"search"},null,512),[[n.vModelText,t.value]])])])]),(0,n.createElementVNode)("ul",h,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(e.records.plugins,(function(t,d){return(0,n.openBlock)(),(0,n.createElementBlock)("li",{key:d,class:"break-inside-avoid mb-4"},[(0,n.createElementVNode)("div",x,[(0,n.createElementVNode)("div",y,[(0,n.createElementVNode)("img",{alt:"".concat(t.name," icon"),src:t.icons.icon_svg||t.icons.icon_2x||t.icons.icon_1x},null,8,b)]),(0,n.createElementVNode)("div",V,[(0,n.createElementVNode)("div",v,[(0,n.createVNode)((0,n.unref)(l.Mv),{as:"div",class:"flex items-center justify-between mb-2"},{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("span",w,[(0,n.createVNode)((0,n.unref)(l.$A),{as:"span",class:"text-sm font-medium text-gray-900",passive:""},{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("span",{class:"whitespace-pre-line",innerHTML:t.name},null,8,N)]})),_:2},1024),(0,n.createVNode)((0,n.unref)(l.Zm),{as:"span",class:"text-sm text-gray-500"},{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",E,[((0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)([0,1,2,3,4],(function(e){return(0,n.createVNode)((0,n.unref)(o.Z),{key:e,class:(0,n.normalizeClass)([t.rating>e?"text-yellow-400":"text-gray-200","h-5 w-5 flex-shrink-0"]),"aria-hidden":"true"},null,8,["class"])})),64)),(0,n.createElementVNode)("span",k,"("+(0,n.toDisplayString)(t.num_ratings)+")",1)])]})),_:2},1024)]),(0,n.createVNode)((0,n.unref)(l.rs),{modelValue:e.selectedPlugins[t.slug],"onUpdate:modelValue":[function(r){return e.selectedPlugins[t.slug]=r},function(t){return r.$emit("update:selected-plugins",e.selectedPlugins)}],class:(0,n.normalizeClass)([e.selectedPlugins[t.slug]?"bg-indigo-600":"bg-gray-200","relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"])},{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("span",{class:(0,n.normalizeClass)([e.selectedPlugins[t.slug]?"translate-x-5":"translate-x-0","pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"]),"aria-hidden":"true"},null,2)]})),_:2},1032,["modelValue","onUpdate:modelValue","class"])]})),_:2},1024),(0,n.createElementVNode)("p",{class:"w-full whitespace-pre-wrap",innerHTML:t.short_description},null,8,C)])])]),S,(0,n.createElementVNode)("div",_,[(0,n.createElementVNode)("p",B,[(0,n.createVNode)((0,n.unref)(a.Z),{class:"w-4 h-4 inline mr-1"}),(0,n.createElementVNode)("span",{innerHTML:t.author},null,8,Z)]),(0,n.createElementVNode)("p",T,[(0,n.createVNode)((0,n.unref)(s.Z),{class:"w-4 h-4 inline mr-1"}),(0,n.createTextVNode)(" "+(0,n.toDisplayString)(t.active_installs),1)]),(0,n.createElementVNode)("p",j,[(0,n.createVNode)((0,n.unref)(c.Z),{class:"w-4 h-4 inline mr-1"}),(0,n.createTextVNode)(" Tested with "+(0,n.toDisplayString)(t.tested),1)])])])})),128))])])}}}},3671:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(821),l=r(1520),o=r(7925),a=r(3279),s=r.n(a),c=r(9680),d=r(8541),i={class:"mb-10 grid grid-cols-1 sm:grid-cols-4 xl:grid-cols-3 gap-0 max-w-screen-xl"},u={class:"w-full sm:col-start-2 sm:col-span-2 xl:col-start-2 xl:col-end-3"},m=(0,n.createElementVNode)("label",{class:"block text-sm font-medium text-gray-700",for:"search"},"Search",-1),f={class:"mt-1 relative rounded-md shadow-sm w-full"},p=(0,n.createTextVNode)(" Selected Theme"),g={class:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4"},h={class:"flex items-center flex-col"},x=["src"],y={class:"block w-full px-4 pt-2 pb-4"},b=["innerHTML"],V={class:"flex items-center"},v={class:"text-gray-500"};const w={props:{records:Object,selectedTheme:String},setup:function(e){var t=e,r=(0,n.ref)(""),a=(0,n.ref)(t.selectedTheme);return(0,n.watch)(r,s()((function(e){c.Inertia.get(route("dashboard.sites.stacks.create"),{search:r.value},{preserveState:!0,replace:!0,only:["themes"]})}),300)),function(t,s){return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[(0,n.createElementVNode)("div",i,[(0,n.createElementVNode)("div",u,[m,(0,n.createElementVNode)("div",f,[(0,n.withDirectives)((0,n.createElementVNode)("input",{id:"search","onUpdate:modelValue":s[0]||(s[0]=function(e){return r.value=e}),class:"focus:ring-indigo-500 focus:border-indigo-500 block w-full px-4 sm:text-sm border-gray-300 rounded-md",name:"search",placeholder:"search",type:"search"},null,512),[[n.vModelText,r.value]])])])]),(0,n.createVNode)((0,n.unref)(l.Ee),{modelValue:(0,n.unref)(a),"onUpdate:modelValue":[s[1]||(s[1]=function(e){return(0,n.isRef)(a)?a.value=e:a=e}),s[2]||(s[2]=function(e){return t.$emit("update:selected-theme",(0,n.unref)(a))})],class:"mb-10 max-w-screen-xl"},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)((0,n.unref)(l.Nt),{class:"sr-only"},{default:(0,n.withCtx)((function(){return[p]})),_:1}),(0,n.createElementVNode)("div",g,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(e.records.themes,(function(e){return(0,n.openBlock)(),(0,n.createBlock)((0,n.unref)(l.$v),{key:e.slug,value:e.slug,as:"template"},{default:(0,n.withCtx)((function(t){var r=t.active,a=t.checked;return[(0,n.createElementVNode)("div",{class:(0,n.normalizeClass)([r?"ring-1 ring-offset-2 ring-indigo-500":"","relative block rounded-lg border border-gray-300 bg-white shadow-sm cursor-pointer hover:border-gray-400 sm:flex sm:justify-between focus:outline-none"])},[(0,n.createElementVNode)("div",h,[(0,n.createElementVNode)("img",{src:e.screenshot_url,class:"rounded-t-lg"},null,8,x),(0,n.createElementVNode)("div",y,[(0,n.createVNode)((0,n.unref)(l.Nt),{as:"p",class:"font-medium text-gray-900"},{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("span",{innerHTML:e.name},null,8,b)]})),_:2},1024),(0,n.createVNode)((0,n.unref)(o.Zm),{as:"span",class:"text-sm text-gray-500"},{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",V,[((0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)([0,1,2,3,4],(function(t){return(0,n.createVNode)((0,n.unref)(d.Z),{key:t,class:(0,n.normalizeClass)([e.rating>t?"text-yellow-400":"text-gray-200","h-5 w-5 flex-shrink-0"]),"aria-hidden":"true"},null,8,["class"])})),64)),(0,n.createElementVNode)("span",v,"("+(0,n.toDisplayString)(e.num_ratings)+")",1)])]})),_:2},1024)])]),(0,n.createElementVNode)("div",{class:(0,n.normalizeClass)([a?"border-indigo-500":"border-transparent","absolute -inset-px rounded-lg border-2 pointer-events-none"]),"aria-hidden":"true"},null,2)],2)]})),_:2},1032,["value"])})),128))])]})),_:1},8,["modelValue"])],64)}}}},3530:(e,t,r)=>{r.r(t),r.d(t,{default:()=>D});var n=r(821),l=r(3758),o=r(7105),a=r(8250),s=r(3671),c=r(21),d=r(3083),i=r(1520),u=r(7925),m=r(7447),f=r(8879),p=r(2577),g=r(9018),h=r(4818),x=r(9038);function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,l,o=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(e){s=!0,l=e}finally{try{a||null==r.return||r.return()}finally{if(s)throw l}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var V=(0,n.createTextVNode)("Install New WordPress Site"),v={class:"max-w-screen-xl"},w={class:"col-span-6 sm:col-span-4"},N=(0,n.createTextVNode)("Deploy"),E={class:"col-span-6 sm:col-span-4"},k={class:"col-span-6 sm:col-span-4"},C={class:"col-span-6 sm:col-span-4 hidden"},S={class:"col-span-6 sm:col-span-4 hidden"},_=(0,n.createTextVNode)(" Selected Stack Type "),B={class:"grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 gap-4"},Z={class:"flex items-center flex-col"},T=["src"],j={class:"block w-full px-4 pt-2 pb-4"},M=["innerHTML"],z=(0,n.createTextVNode)(" 1 CPU / 1 GB RAM / 5 GB SSD "),$=(0,n.createElementVNode)("span",null,"Plugins",-1),L=(0,n.createElementVNode)("span",null,"Themes",-1),U=(0,n.createElementVNode)("span",null,"Advance",-1);const D={props:{plugins:Object,themes:Object,types:Object},setup:function(e){var t=(0,n.ref)({}),r=(0,n.ref)(""),b=(0,n.ref)(""),D=(0,x.cI)({name:null,price:null,properties:{plugins:{},theme:"",commands:{}},type:null});return(0,n.watch)(t.value,(function(){D.properties.plugins=Object.entries(t.value).filter((function(e){var t=y(e,2);t[0];return t[1]})).map((function(e){var t=y(e,2),r=t[0];t[1];return r}))})),(0,n.watch)(r,(function(){D.properties.theme=r.value})),(0,n.watch)(b,(function(){D.properties.commands=b.value})),function(x,y){return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[(0,n.createVNode)((0,n.unref)(l.Z),{title:"New WordPress Site"}),(0,n.createVNode)((0,n.unref)(o.Z),null,{header:(0,n.withCtx)((function(){return[V]})),default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",v,[(0,n.createElementVNode)("form",{class:"space-y-4",onSubmit:y[8]||(y[8]=(0,n.withModifiers)((function(e){return(0,n.unref)(D).post(x.$route("dashboard.sites.stacks.store"))}),["prevent"]))},[(0,n.createElementVNode)("div",w,[(0,n.createVNode)((0,n.unref)(g.Z),{type:"submit"},{default:(0,n.withCtx)((function(){return[N]})),_:1})]),(0,n.createElementVNode)("div",E,[(0,n.createVNode)((0,n.unref)(h.Z),{modelValue:(0,n.unref)(D).name,"onUpdate:modelValue":y[0]||(y[0]=function(e){return(0,n.unref)(D).name=e}),form:(0,n.unref)(D),label:"Name",name:"name"},null,8,["modelValue","form"])]),(0,n.createElementVNode)("div",k,[(0,n.createVNode)((0,n.unref)(h.Z),{modelValue:(0,n.unref)(D).price,"onUpdate:modelValue":y[1]||(y[1]=function(e){return(0,n.unref)(D).price=e}),form:(0,n.unref)(D),label:"Price",name:"price"},null,8,["modelValue","form"])]),(0,n.createElementVNode)("div",C,[(0,n.createVNode)((0,n.unref)(h.Z),{modelValue:(0,n.unref)(D).properties,"onUpdate:modelValue":y[2]||(y[2]=function(e){return(0,n.unref)(D).properties=e}),form:(0,n.unref)(D),label:"Properties",name:"properties"},null,8,["modelValue","form"])]),(0,n.createElementVNode)("div",S,[(0,n.createVNode)((0,n.unref)(h.Z),{modelValue:(0,n.unref)(D).type,"onUpdate:modelValue":y[3]||(y[3]=function(e){return(0,n.unref)(D).type=e}),form:(0,n.unref)(D),label:"Type",name:"type"},null,8,["modelValue","form"])]),(0,n.createVNode)((0,n.unref)(i.Ee),{modelValue:(0,n.unref)(D).type,"onUpdate:modelValue":y[4]||(y[4]=function(e){return(0,n.unref)(D).type=e}),class:"mb-10 max-w-screen-xl"},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)((0,n.unref)(i.Nt),{class:"sr-only"},{default:(0,n.withCtx)((function(){return[_]})),_:1}),(0,n.createElementVNode)("div",B,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(e.types,(function(e){return(0,n.openBlock)(),(0,n.createBlock)((0,n.unref)(i.$v),{key:e.value,value:e.value,as:"template"},{default:(0,n.withCtx)((function(t){var r=t.active,l=t.checked;return[(0,n.createElementVNode)("div",{class:(0,n.normalizeClass)([r?"ring-1 ring-offset-2 ring-indigo-500":"","relative block rounded-lg border border-gray-300 bg-white shadow-sm cursor-pointer hover:border-gray-400 sm:flex sm:justify-between focus:outline-none"])},[(0,n.createElementVNode)("div",Z,[(0,n.createElementVNode)("img",{src:e.icon,class:"rounded-t-lg p-4"},null,8,T),(0,n.createElementVNode)("div",j,[(0,n.createVNode)((0,n.unref)(i.Nt),{as:"p",class:"font-medium text-gray-900"},{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("span",{innerHTML:e.label},null,8,M)]})),_:2},1024),(0,n.createVNode)((0,n.unref)(u.Zm),{as:"span",class:"text-sm text-gray-500"},{default:(0,n.withCtx)((function(){return[z]})),_:1})])]),(0,n.createElementVNode)("div",{class:(0,n.normalizeClass)([l?"border-indigo-500":"border-transparent","absolute -inset-px rounded-lg border-2 pointer-events-none"]),"aria-hidden":"true"},null,2)],2)]})),_:2},1032,["value"])})),128))])]})),_:1},8,["modelValue"]),"wordpress"===(0,n.unref)(D).type?((0,n.openBlock)(),(0,n.createBlock)((0,n.unref)(d.v0),{key:0,as:"div"},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)((0,n.unref)(d.td),{class:"flex flex-col sm:flex-row flex-wrap relative z-0 justify-center space-y-2 sm:space-y-0 space-x-0 sm:space-x-2 mb-4"},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)((0,n.unref)(d.OK),null,{default:(0,n.withCtx)((function(e){var t=e.selected;return[(0,n.createElementVNode)("button",{class:(0,n.normalizeClass)([t?"text-indigo-600 bg-gray-50 border border-indigo-500 hover:bg-gray-100":"text-gray-500 hover:text-gray-700 border border-gray-300 bg-white hover:bg-gray-50","flex items-center justify-center shadow-sm group relative w-full sm:w-32 overflow-hidden p-2 text-sm font-medium text-center focus:z-10 rounded-lg"]),type:"button"},[(0,n.createVNode)((0,n.unref)(m.Z),{class:"w-3 h-3 mr-2"}),$],2)]})),_:1}),(0,n.createVNode)((0,n.unref)(d.OK),null,{default:(0,n.withCtx)((function(e){var t=e.selected;return[(0,n.createElementVNode)("button",{class:(0,n.normalizeClass)([t?"text-indigo-600 bg-gray-50 border border-indigo-500 hover:bg-gray-100":"text-gray-500 hover:text-gray-700 border border-gray-300 bg-white hover:bg-gray-50","flex items-center justify-center shadow-sm group relative w-full sm:w-32 overflow-hidden p-2 text-sm font-medium text-center focus:z-10 rounded-lg"]),type:"button"},[(0,n.createVNode)((0,n.unref)(f.Z),{class:"w-3 h-3 mr-2"}),L],2)]})),_:1}),(0,n.createVNode)((0,n.unref)(d.OK),null,{default:(0,n.withCtx)((function(e){var t=e.selected;return[(0,n.createElementVNode)("button",{class:(0,n.normalizeClass)([t?"text-indigo-600 bg-gray-50 border border-indigo-500 hover:bg-gray-100":"text-gray-500 hover:text-gray-700 border border-gray-300 bg-white hover:bg-gray-50","flex items-center justify-center shadow-sm group relative w-full sm:w-32 overflow-hidden p-2 text-sm font-medium text-center focus:z-10 rounded-lg"]),type:"button"},[(0,n.createVNode)((0,n.unref)(p.Z),{class:"w-3 h-3 mr-2"}),U],2)]})),_:1})]})),_:1}),(0,n.createVNode)((0,n.unref)(d.nP),null,{default:(0,n.withCtx)((function(){return[(0,n.createVNode)((0,n.unref)(d.x4),null,{default:(0,n.withCtx)((function(){return[(0,n.createVNode)((0,n.unref)(a.Z),{"selected-plugins":t.value,"onUpdate:selected-plugins":y[5]||(y[5]=function(e){return t.value=e}),records:e.plugins},null,8,["selected-plugins","records"])]})),_:1}),(0,n.createVNode)((0,n.unref)(d.x4),null,{default:(0,n.withCtx)((function(){return[(0,n.createVNode)((0,n.unref)(s.Z),{"selected-theme":r.value,"onUpdate:selected-theme":y[6]||(y[6]=function(e){return r.value=e}),records:e.themes},null,8,["selected-theme","records"])]})),_:1}),(0,n.createVNode)((0,n.unref)(d.x4),null,{default:(0,n.withCtx)((function(){return[(0,n.createVNode)((0,n.unref)(c.Z),{"entered-commands":b.value,"onUpdate:entered-commands":y[7]||(y[7]=function(e){return b.value=e})},null,8,["entered-commands"])]})),_:1})]})),_:1})]})),_:1})):(0,n.createCommentVNode)("",!0)],32)])]})),_:1})],64)}}}}}]);