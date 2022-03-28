"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[984],{3758:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(821);const l={components:{Head:r(9038).Fb},props:{title:String}};const o=(0,r(3744).Z)(l,[["render",function(e,t,r,l,o,a){var s=(0,n.resolveComponent)("Head");return(0,n.openBlock)(),(0,n.createBlock)(s,{title:r.title?"".concat(r.title," - ").concat(e.$page.props.app.name):e.$page.props.app.name},{default:(0,n.withCtx)((function(){return[(0,n.renderSlot)(e.$slots,"default")]})),_:3},8,["title"])}]])},7105:(e,t,r)=>{r.d(t,{Z:()=>p});var n=r(821),l={class:"border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 max-w-screen-lg"},o={class:"flex-1 min-w-0"},a={class:"text-lg font-medium leading-6 text-gray-900 sm:truncate"},s={class:"mt-4 flex sm:mt-0 sm:ml-4"},c={class:"px-4 mt-6 sm:px-6 lg:px-8 max-w-screen-lg"},d={class:"text-gray-500 text-xs font-medium uppercase tracking-wide"},u={class:"px-4 mt-6 sm:px-6 lg:px-8 max-w-screen-lg"},i={class:"align-middle inline-block min-w-full"};const p={props:{name:String,label:String,modelValue:String,id:{type:String,default:function(e){return e.name}},type:{type:String,default:"text"},placeholder:{type:String,default:""},form:{type:Object,default:function(){return{errors:{}}}},hasError:{type:Boolean,default:null},errorMessage:{type:String,default:""},help:{type:String,default:""}},emits:["update:modelValue"],setup:function(e){return function(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[(0,n.createElementVNode)("div",l,[(0,n.createElementVNode)("div",o,[(0,n.createElementVNode)("h1",a,[(0,n.renderSlot)(e.$slots,"header")])]),(0,n.createElementVNode)("div",s,[(0,n.renderSlot)(e.$slots,"buttons")])]),(0,n.createElementVNode)("div",c,[(0,n.createElementVNode)("h2",d,[(0,n.renderSlot)(e.$slots,"sub-header")]),(0,n.renderSlot)(e.$slots,"sub-header-content")]),(0,n.createElementVNode)("div",u,[(0,n.createElementVNode)("div",i,[(0,n.renderSlot)(e.$slots,"default")])])],64)}}}},984:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});var n=r(821),l=r(3758),o=r(7105),a=r(9680),s={class:"my-y rounded-xl shadow overflow-hidden"};const c={props:{record:Object,output:String},setup:function(e){var t=function(){a.Inertia.reload({preserveState:!0,preserveScroll:!0})};(0,n.onMounted)((function(){t()}));setInterval((function(){t()}),1e4);return function(t,r){var a=(0,n.resolveComponent)("highlightjs");return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[(0,n.createVNode)((0,n.unref)(l.Z),{title:"CLI"}),(0,n.createVNode)((0,n.unref)(o.Z),null,{header:(0,n.withCtx)((function(){return[(0,n.createTextVNode)("Cli - "+(0,n.toDisplayString)(e.record.data.name),1)]})),default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",s,[(0,n.createVNode)(a,{language:"bash",code:e.output},null,8,["code"])])]})),_:1})],64)}}}}}]);