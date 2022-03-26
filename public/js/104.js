"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[104],{3758:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(821);const o={components:{Head:r(9038).Fb},props:{title:String}};const a=(0,r(3744).Z)(o,[["render",function(e,t,r,o,a,l){var s=(0,n.resolveComponent)("Head");return(0,n.openBlock)(),(0,n.createBlock)(s,{title:r.title?"".concat(r.title," - ").concat(e.$page.props.app.name):e.$page.props.app.name},{default:(0,n.withCtx)((function(){return[(0,n.renderSlot)(e.$slots,"default")]})),_:3},8,["title"])}]])},4232:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(821),o={class:"border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"},a={class:"flex-1 min-w-0"},l={class:"text-lg font-medium leading-6 text-gray-900 sm:truncate"},s={class:"mt-4 flex sm:mt-0 sm:ml-4"},d={class:"px-4 mt-6 sm:px-6 lg:px-8"},c={class:"text-gray-500 text-xs font-medium uppercase tracking-wide"},i={class:"px-4 mt-6 sm:px-6 lg:px-8"},u={class:"align-middle inline-block min-w-full"};const m={},p=(0,r(3744).Z)(m,[["render",function(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[(0,n.createElementVNode)("div",o,[(0,n.createElementVNode)("div",a,[(0,n.createElementVNode)("h1",l,[(0,n.renderSlot)(e.$slots,"header")])]),(0,n.createElementVNode)("div",s,[(0,n.renderSlot)(e.$slots,"buttons")])]),(0,n.createElementVNode)("div",d,[(0,n.createElementVNode)("h2",c,[(0,n.renderSlot)(e.$slots,"sub-header")]),(0,n.renderSlot)(e.$slots,"sub-header-content")]),(0,n.createElementVNode)("div",i,[(0,n.createElementVNode)("div",u,[(0,n.renderSlot)(e.$slots,"default")])])],64)}]])},5527:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(821),o=r(4444),a=r(3611),l=["type","disabled"];const s={props:{type:{type:String,default:"button"},form:{type:Object,default:function(){return{processing:!1}}}},setup:function(e){return function(t,r){return(0,n.openBlock)(),(0,n.createElementBlock)("button",{type:e.type,disabled:e.form.processing,class:"inline-flex items-center py-2 px-3 text-sm font-medium leading-4 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md border border-transparent focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-sm disabled:opacity-50 disabled:cursor-wait focus:outline-none"},[(0,n.createVNode)((0,n.unref)(a.Qm),{id:"button-spinner",show:e.form.processing,enter:"transition-opacity duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transition-opacity duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)((0,n.unref)(o.Z),{class:"w-4 h-4"})]})),_:1},8,["show"]),(0,n.renderSlot)(t.$slots,"default")],8,l)}}}},4818:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(821),o=r(3611),a=["for"],l={class:"mt-1"},s=["id","name","placeholder","type","value"];const d={props:{name:String,label:String,modelValue:String,id:{type:String,default:function(e){return e.name}},type:{type:String,default:"text"},placeholder:{type:String,default:""},form:{type:Object,default:function(){return{errors:{}}}},hasError:{type:Boolean,default:null},errorMessage:{type:String,default:""}},emits:["update:modelValue"],setup:function(e){return function(t,r){return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[(0,n.createElementVNode)("label",{for:e.id,class:"block text-sm font-medium text-gray-700"},(0,n.toDisplayString)(e.label),9,a),(0,n.createElementVNode)("div",l,[(0,n.createElementVNode)("input",{id:e.id,class:(0,n.normalizeClass)([[e.hasError||e.form.errors[e.name]?"border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500":"focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 "],"block w-full sm:text-sm rounded-md shadow-sm"]),name:e.name,placeholder:e.placeholder,type:e.type,value:e.modelValue,onInput:r[0]||(r[0]=function(e){return t.$emit("update:modelValue",e.target.value)})},null,42,s)]),(0,n.createVNode)((0,n.unref)(o.Qm),{id:"".concat(e.name,"-error"),show:e.hasError||!!e.form.errors[e.name],as:"p",class:"mt-2 text-sm text-red-600",enter:"transition-opacity duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transition-opacity duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)((0,n.toDisplayString)(e.hasError?e.errorMessage:e.form.errors[e.name]),1)]})),_:1},8,["id","show"])],64)}}}},4444:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(821),o={class:"animate-spin -ml-1 mr-3 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},a=[(0,n.createElementVNode)("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),(0,n.createElementVNode)("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)];const l={},s=(0,r(3744).Z)(l,[["render",function(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)("svg",o,a)}]])},2104:(e,t,r)=>{r.r(t),r.d(t,{default:()=>y});var n=r(821),o=r(9038),a=r(4818),l=r(5527),s=r(3758),d=r(4232),c={class:"overflow-hidden sm:rounded-md shadow"},i={class:"sm:p-6 py-5 px-4 bg-white"},u={class:"grid grid-cols-6 gap-6"},m={class:"col-span-6 sm:col-span-4"},p={class:"col-span-6 sm:col-span-4"},f={class:"col-span-6 sm:col-span-4"},g={class:"col-span-6 sm:col-span-4"},h=(0,n.createTextVNode)(" Submit ");const y={props:{resource:Object},setup:function(e){var t=e,r=(0,o.cI)("EditUser: ".concat(t.resource.id),t.resource.data);return function(t,o){return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[(0,n.createVNode)((0,n.unref)(s.Z),{title:"Edit ".concat((0,n.unref)(r).name," user")},null,8,["title"]),(0,n.createVNode)((0,n.unref)(d.Z),null,{header:(0,n.withCtx)((function(){return[(0,n.createTextVNode)("Edit user "+(0,n.toDisplayString)(e.resource.data.name),1)]})),buttons:(0,n.withCtx)((function(){return[]})),"sub-header":(0,n.withCtx)((function(){return[]})),"sub-header-content":(0,n.withCtx)((function(){return[]})),default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("form",{onSubmit:o[3]||(o[3]=(0,n.withModifiers)((function(t){return(0,n.unref)(r).put("/dashboard/users/".concat(e.resource.data.id))}),["prevent"]))},[(0,n.createElementVNode)("div",c,[(0,n.createElementVNode)("div",i,[(0,n.createElementVNode)("div",u,[(0,n.createElementVNode)("div",m,[(0,n.createVNode)((0,n.unref)(a.Z),{modelValue:(0,n.unref)(r).name,"onUpdate:modelValue":o[0]||(o[0]=function(e){return(0,n.unref)(r).name=e}),label:"Name",name:"name",form:(0,n.unref)(r)},null,8,["modelValue","form"])]),(0,n.createElementVNode)("div",p,[(0,n.createVNode)((0,n.unref)(a.Z),{modelValue:(0,n.unref)(r).email,"onUpdate:modelValue":o[1]||(o[1]=function(e){return(0,n.unref)(r).email=e}),label:"Email",name:"email",type:"email",form:(0,n.unref)(r)},null,8,["modelValue","form"])]),(0,n.createElementVNode)("div",f,[(0,n.createVNode)((0,n.unref)(a.Z),{modelValue:(0,n.unref)(r).password,"onUpdate:modelValue":o[2]||(o[2]=function(e){return(0,n.unref)(r).password=e}),label:"Password",name:"password",type:"password",form:(0,n.unref)(r)},null,8,["modelValue","form"])]),(0,n.createElementVNode)("div",g,[(0,n.createVNode)((0,n.unref)(l.Z),{type:"submit",form:(0,n.unref)(r)},{default:(0,n.withCtx)((function(){return[h]})),_:1},8,["form"])])])])])],32)]})),_:1})],64)}}}}}]);