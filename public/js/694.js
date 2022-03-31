"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[694],{3758:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(821);const l={components:{Head:r(9038).Fb},props:{title:String}};const a=(0,r(3744).Z)(l,[["render",function(e,t,r,l,a,o){var s=(0,n.resolveComponent)("Head");return(0,n.openBlock)(),(0,n.createBlock)(s,{title:r.title?"".concat(r.title," - ").concat(e.$page.props.app.name):e.$page.props.app.name},{default:(0,n.withCtx)((function(){return[(0,n.renderSlot)(e.$slots,"default")]})),_:3},8,["title"])}]])},7105:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(821),l={class:"border-b border-gray-200 px-4 py-4 flex items-center justify-between sm:px-6 lg:px-8 max-w-screen-lg"},a={class:"flex-1 min-w-0"},o={class:"text-lg font-medium leading-6 text-gray-900 sm:truncate"},s={class:"flex-shrink-0 sm:mt-0 sm:ml-4"},c={class:"px-4 mt-6 sm:px-6 lg:px-8 max-w-screen-lg"},d={class:"text-gray-500 text-xs font-medium uppercase tracking-wide"},i={class:"px-4 my-6 sm:px-6 lg:px-8 max-w-screen-lg"},u={class:"align-middle"};const m={props:{name:String,label:String,modelValue:String,id:{type:String,default:function(e){return e.name}},type:{type:String,default:"text"},placeholder:{type:String,default:""},form:{type:Object,default:function(){return{errors:{}}}},hasError:{type:Boolean,default:null},errorMessage:{type:String,default:""},help:{type:String,default:""}},emits:["update:modelValue"],setup:function(e){return function(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[(0,n.createElementVNode)("div",l,[(0,n.createElementVNode)("div",a,[(0,n.createElementVNode)("h1",o,[(0,n.renderSlot)(e.$slots,"header")])]),(0,n.createElementVNode)("div",s,[(0,n.renderSlot)(e.$slots,"buttons")])]),(0,n.createElementVNode)("div",c,[(0,n.createElementVNode)("h2",d,[(0,n.renderSlot)(e.$slots,"sub-header")]),(0,n.renderSlot)(e.$slots,"sub-header-content")]),(0,n.createElementVNode)("div",i,[(0,n.createElementVNode)("div",u,[(0,n.renderSlot)(e.$slots,"default")])])],64)}}}},3694:(e,t,r)=>{r.r(t),r.d(t,{default:()=>k});var n=r(821),l=r(3758),a=r(7105),o={class:"flex"},s={class:"relative inline-flex pl-4 text-sm text-gray-900"},c={class:"absolute h-2 w-2 left-0 top-2"};const d={props:{color:{type:String,default:"green",validator:function(e){return["green","red"].includes(e)}}},setup:function(e){return function(t,r){return(0,n.openBlock)(),(0,n.createElementBlock)("div",o,[(0,n.createElementVNode)("span",s,[(0,n.renderSlot)(t.$slots,"default"),(0,n.createElementVNode)("span",c,[(0,n.createElementVNode)("span",{class:(0,n.normalizeClass)("animate-ping absolute inline-flex h-full w-full rounded-full bg-".concat(e.color,"-400 opacity-75"))},null,2),(0,n.createElementVNode)("span",{class:(0,n.normalizeClass)("relative inline-flex rounded-full h-2 w-2 bg-".concat(e.color,"-500"))},null,2)])])])}}};var i=r(9680),u=(0,n.createTextVNode)("Settings"),m={class:"px-0"},p={class:"py-6"},f={class:"lg:hidden"},g=(0,n.createElementVNode)("label",{class:"sr-only",for:"selected-tab"},"Select a tab",-1),x={id:"selected-tab",class:"mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md",name:"selected-tab"},y=["selected"],h={class:"hidden lg:block"},V={class:"border-b border-gray-200"},v={class:"-mb-px flex space-x-8"},N={class:"mt-10 divide-y divide-gray-200"},b=(0,n.createElementVNode)("div",{class:"space-y-1"},[(0,n.createElementVNode)("h3",{class:"text-lg leading-6 font-medium text-gray-900"},"Overall"),(0,n.createElementVNode)("p",{class:"max-w-2xl text-sm text-gray-500"}," The overall status of your system. ")],-1),S={class:"mt-6 rounded-lg bg-white shadow p-4"},E={class:"list-inside space-y-2"};const k={props:{dockerStatus:Boolean,traefikStatus:Boolean},setup:function(e){var t=[{name:"General",href:route("dashboard.settings.general"),current:!1},{name:"Password",href:"#",current:!1},{name:"Notifications",href:"#",current:!1},{name:"System Status",href:route("dashboard.settings.system-status"),current:!0}],r=function(){i.Inertia.reload({preserveState:!0,preserveScroll:!0,only:["dockerStatus","traefikStatus"]})};(0,n.onMounted)((function(){r()}));var o=setInterval((function(){r()}),1e4);return(0,n.onBeforeUnmount)((function(){clearInterval(o)})),function(r,o){var s=(0,n.resolveComponent)("Link");return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[(0,n.createVNode)((0,n.unref)(l.Z),{title:"Settings"}),(0,n.createVNode)((0,n.unref)(a.Z),null,{header:(0,n.withCtx)((function(){return[u]})),default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",m,[(0,n.createElementVNode)("div",p,[(0,n.createElementVNode)("div",f,[g,(0,n.createElementVNode)("select",x,[((0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(t,(function(e){return(0,n.createElementVNode)("option",{key:e.name,selected:e.current},(0,n.toDisplayString)(e.name),9,y)})),64))])]),(0,n.createElementVNode)("div",h,[(0,n.createElementVNode)("div",V,[(0,n.createElementVNode)("nav",v,[((0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(t,(function(e){return(0,n.createVNode)(s,{key:e.name,class:(0,n.normalizeClass)([e.current?"border-purple-500 text-purple-600":"border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700","whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"]),href:e.href},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)((0,n.toDisplayString)(e.name),1)]})),_:2},1032,["class","href"])})),64))])])]),(0,n.createElementVNode)("div",N,[b,(0,n.createElementVNode)("div",S,[(0,n.createElementVNode)("ul",E,[(0,n.createElementVNode)("li",null,[(0,n.createVNode)((0,n.unref)(d),{color:e.dockerStatus?"green":"red"},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)("Docker is "+(0,n.toDisplayString)(e.dockerStatus?"running":"stopped"),1)]})),_:1},8,["color"])]),(0,n.createElementVNode)("li",null,[(0,n.createVNode)((0,n.unref)(d),{color:e.traefikStatus?"green":"red"},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)("Traefik is "+(0,n.toDisplayString)(e.traefikStatus?"running":"stopped"),1)]})),_:1},8,["color"])])])])])])])]})),_:1})],64)}}}}}]);