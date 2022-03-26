"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[976],{3758:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(821);const o={components:{Head:t(9038).Fb},props:{title:String}};const l=(0,t(3744).Z)(o,[["render",function(e,n,t,o,l,a){var u=(0,r.resolveComponent)("Head");return(0,r.openBlock)(),(0,r.createBlock)(u,{title:t.title?"".concat(t.title," - ").concat(e.$page.props.app.name):e.$page.props.app.name},{default:(0,r.withCtx)((function(){return[(0,r.renderSlot)(e.$slots,"default")]})),_:3},8,["title"])}]])},4232:(e,n,t)=>{t.d(n,{Z:()=>f});var r=t(821),o={class:"border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"},l={class:"flex-1 min-w-0"},a={class:"text-lg font-medium leading-6 text-gray-900 sm:truncate"},u={class:"mt-4 flex sm:mt-0 sm:ml-4"},s={class:"px-4 mt-6 sm:px-6 lg:px-8"},d={class:"text-gray-500 text-xs font-medium uppercase tracking-wide"},c={class:"px-4 mt-6 sm:px-6 lg:px-8"},m={class:"align-middle inline-block min-w-full"};const i={},f=(0,t(3744).Z)(i,[["render",function(e,n){return(0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,null,[(0,r.createElementVNode)("div",o,[(0,r.createElementVNode)("div",l,[(0,r.createElementVNode)("h1",a,[(0,r.renderSlot)(e.$slots,"header")])]),(0,r.createElementVNode)("div",u,[(0,r.renderSlot)(e.$slots,"buttons")])]),(0,r.createElementVNode)("div",s,[(0,r.createElementVNode)("h2",d,[(0,r.renderSlot)(e.$slots,"sub-header")]),(0,r.renderSlot)(e.$slots,"sub-header-content")]),(0,r.createElementVNode)("div",c,[(0,r.createElementVNode)("div",m,[(0,r.renderSlot)(e.$slots,"default")])])],64)}]])},5527:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(821),o=t(4444),l=t(3611),a=["type","disabled"];const u={props:{type:{type:String,default:"button"},form:{type:Object,default:function(){return{processing:!1}}}},setup:function(e){return function(n,t){return(0,r.openBlock)(),(0,r.createElementBlock)("button",{type:e.type,disabled:e.form.processing,class:"inline-flex items-center py-2 px-3 text-sm font-medium leading-4 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md border border-transparent focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-sm disabled:opacity-50 disabled:cursor-wait focus:outline-none"},[(0,r.createVNode)((0,r.unref)(l.Qm),{id:"button-spinner",show:e.form.processing,enter:"transition-opacity duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transition-opacity duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)((0,r.unref)(o.Z),{class:"w-4 h-4"})]})),_:1},8,["show"]),(0,r.renderSlot)(n.$slots,"default")],8,a)}}}},4818:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(821),o=t(3611),l=["for"],a={class:"mt-1"},u=["id","name","placeholder","type","value"];const s={props:{name:String,label:String,modelValue:String,id:{type:String,default:function(e){return e.name}},type:{type:String,default:"text"},placeholder:{type:String,default:""},form:{type:Object,default:function(){return{errors:{}}}},hasError:{type:Boolean,default:null},errorMessage:{type:String,default:""}},emits:["update:modelValue"],setup:function(e){return function(n,t){return(0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,null,[(0,r.createElementVNode)("label",{for:e.id,class:"block text-sm font-medium text-gray-700"},(0,r.toDisplayString)(e.label),9,l),(0,r.createElementVNode)("div",a,[(0,r.createElementVNode)("input",{id:e.id,class:(0,r.normalizeClass)([[e.hasError||e.form.errors[e.name]?"border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500":"focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 "],"block w-full sm:text-sm rounded-md shadow-sm"]),name:e.name,placeholder:e.placeholder,type:e.type,value:e.modelValue,onInput:t[0]||(t[0]=function(e){return n.$emit("update:modelValue",e.target.value)})},null,42,u)]),(0,r.createVNode)((0,r.unref)(o.Qm),{id:"".concat(e.name,"-error"),show:e.hasError||!!e.form.errors[e.name],as:"p",class:"mt-2 text-sm text-red-600",enter:"transition-opacity duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transition-opacity duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:(0,r.withCtx)((function(){return[(0,r.createTextVNode)((0,r.toDisplayString)(e.hasError?e.errorMessage:e.form.errors[e.name]),1)]})),_:1},8,["id","show"])],64)}}}},4444:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(821),o={class:"animate-spin -ml-1 mr-3 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},l=[(0,r.createElementVNode)("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),(0,r.createElementVNode)("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)];const a={},u=(0,t(3744).Z)(a,[["render",function(e,n){return(0,r.openBlock)(),(0,r.createElementBlock)("svg",o,l)}]])},6976:(e,n,t)=>{t.r(n),t.d(n,{default:()=>C});var r=t(821),o=t(9038),l=t(4818),a=t(5527),u=t(3758),s=t(4232),d=(0,r.createTextVNode)("Servers"),c={class:"overflow-hidden sm:rounded-md shadow"},m={class:"sm:p-6 py-5 px-4 bg-white"},i={class:"grid grid-cols-6 gap-6"},f={class:"col-span-6 sm:col-span-4"},p={class:"col-span-6 sm:col-span-4"},V={class:"col-span-6 sm:col-span-4"},N={class:"col-span-6 sm:col-span-4"},v={class:"col-span-6 sm:col-span-4"},b={class:"col-span-6 sm:col-span-4"},g={class:"col-span-6 sm:col-span-4"},y={class:"col-span-6 sm:col-span-4"},h={class:"col-span-6 sm:col-span-4"},x={class:"col-span-6 sm:col-span-4"},E={class:"col-span-6 sm:col-span-4"},k={class:"col-span-6 sm:col-span-4"},w={class:"col-span-6 sm:col-span-4"},Z={class:"col-span-6 sm:col-span-4"},S={class:"col-span-6 sm:col-span-4"},_=(0,r.createTextVNode)(" Submit ");const C={setup:function(e){var n=(0,o.cI)({name:null,price:null,ip:null,port:null,ram:null,ram_unit:null,cpu:null,disk:null,disk_type:null,disk_unit:null,os:null,os_version:null,status:null,notes:null});return function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,null,[(0,r.createVNode)((0,r.unref)(u.Z),{title:"Create new server"}),(0,r.createVNode)((0,r.unref)(s.Z),null,{header:(0,r.withCtx)((function(){return[d]})),buttons:(0,r.withCtx)((function(){return[]})),"sub-header":(0,r.withCtx)((function(){return[]})),"sub-header-content":(0,r.withCtx)((function(){return[]})),default:(0,r.withCtx)((function(){return[(0,r.createElementVNode)("form",{onSubmit:t[14]||(t[14]=(0,r.withModifiers)((function(t){return(0,r.unref)(n).post(e.$route("dashboard.sites.servers.store"))}),["prevent"]))},[(0,r.createElementVNode)("div",c,[(0,r.createElementVNode)("div",m,[(0,r.createElementVNode)("div",i,[(0,r.createElementVNode)("div",f,[(0,r.createVNode)((0,r.unref)(l.Z),{modelValue:(0,r.unref)(n).name,"onUpdate:modelValue":t[0]||(t[0]=function(e){return(0,r.unref)(n).name=e}),label:"Name",name:"name",form:(0,r.unref)(n)},null,8,["modelValue","form"])]),(0,r.createElementVNode)("div",p,[(0,r.createVNode)((0,r.unref)(l.Z),{modelValue:(0,r.unref)(n).price,"onUpdate:modelValue":t[1]||(t[1]=function(e){return(0,r.unref)(n).price=e}),label:"Price",name:"price",form:(0,r.unref)(n)},null,8,["modelValue","form"])]),(0,r.createElementVNode)("div",V,[(0,r.createVNode)((0,r.unref)(l.Z),{modelValue:(0,r.unref)(n).ip,"onUpdate:modelValue":t[2]||(t[2]=function(e){return(0,r.unref)(n).ip=e}),label:"IP",name:"ip",form:(0,r.unref)(n)},null,8,["modelValue","form"])]),(0,r.createElementVNode)("div",N,[(0,r.createVNode)((0,r.unref)(l.Z),{modelValue:(0,r.unref)(n).port,"onUpdate:modelValue":t[3]||(t[3]=function(e){return(0,r.unref)(n).port=e}),label:"Port",name:"port",form:(0,r.unref)(n)},null,8,["modelValue","form"])]),(0,r.createElementVNode)("div",v,[(0,r.createVNode)((0,r.unref)(l.Z),{modelValue:(0,r.unref)(n).ram,"onUpdate:modelValue":t[4]||(t[4]=function(e){return(0,r.unref)(n).ram=e}),label:"RAM",name:"ram",form:(0,r.unref)(n)},null,8,["modelValue","form"])]),(0,r.createElementVNode)("div",b,[(0,r.createVNode)((0,r.unref)(l.Z),{modelValue:(0,r.unref)(n).ram_unit,"onUpdate:modelValue":t[5]||(t[5]=function(e){return(0,r.unref)(n).ram_unit=e}),label:"RAM Unit",name:"ram_unit",form:(0,r.unref)(n)},null,8,["modelValue","form"])]),(0,r.createElementVNode)("div",g,[(0,r.createVNode)((0,r.unref)(l.Z),{modelValue:(0,r.unref)(n).cpu,"onUpdate:modelValue":t[6]||(t[6]=function(e){return(0,r.unref)(n).cpu=e}),label:"CPU",name:"cpu",form:(0,r.unref)(n)},null,8,["modelValue","form"])]),(0,r.createElementVNode)("div",y,[(0,r.createVNode)((0,r.unref)(l.Z),{modelValue:(0,r.unref)(n).disk,"onUpdate:modelValue":t[7]||(t[7]=function(e){return(0,r.unref)(n).disk=e}),label:"Disk",name:"disk",form:(0,r.unref)(n)},null,8,["modelValue","form"])]),(0,r.createElementVNode)("div",h,[(0,r.createVNode)((0,r.unref)(l.Z),{modelValue:(0,r.unref)(n).disk_type,"onUpdate:modelValue":t[8]||(t[8]=function(e){return(0,r.unref)(n).disk_type=e}),label:"Disk Type",name:"disk_type",form:(0,r.unref)(n)},null,8,["modelValue","form"])]),(0,r.createElementVNode)("div",x,[(0,r.createVNode)((0,r.unref)(l.Z),{modelValue:(0,r.unref)(n).disk_unit,"onUpdate:modelValue":t[9]||(t[9]=function(e){return(0,r.unref)(n).disk_unit=e}),label:"Disk Unit",name:"disk_unit",form:(0,r.unref)(n)},null,8,["modelValue","form"])]),(0,r.createElementVNode)("div",E,[(0,r.createVNode)((0,r.unref)(l.Z),{modelValue:(0,r.unref)(n).os,"onUpdate:modelValue":t[10]||(t[10]=function(e){return(0,r.unref)(n).os=e}),label:"OS",name:"os",form:(0,r.unref)(n)},null,8,["modelValue","form"])]),(0,r.createElementVNode)("div",k,[(0,r.createVNode)((0,r.unref)(l.Z),{modelValue:(0,r.unref)(n).os_version,"onUpdate:modelValue":t[11]||(t[11]=function(e){return(0,r.unref)(n).os_version=e}),label:"OS Version",name:"os_version",form:(0,r.unref)(n)},null,8,["modelValue","form"])]),(0,r.createElementVNode)("div",w,[(0,r.createVNode)((0,r.unref)(l.Z),{modelValue:(0,r.unref)(n).status,"onUpdate:modelValue":t[12]||(t[12]=function(e){return(0,r.unref)(n).status=e}),label:"Status",name:"status",form:(0,r.unref)(n)},null,8,["modelValue","form"])]),(0,r.createElementVNode)("div",Z,[(0,r.createVNode)((0,r.unref)(l.Z),{modelValue:(0,r.unref)(n).notes,"onUpdate:modelValue":t[13]||(t[13]=function(e){return(0,r.unref)(n).notes=e}),label:"Notes",name:"notes",form:(0,r.unref)(n)},null,8,["modelValue","form"])]),(0,r.createElementVNode)("div",S,[(0,r.createVNode)((0,r.unref)(a.Z),{type:"submit",form:(0,r.unref)(n)},{default:(0,r.withCtx)((function(){return[_]})),_:1},8,["form"])])])])])],32)]})),_:1})],64)}}}}}]);