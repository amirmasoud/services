"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[466],{3758:(e,t,n)=>{n.d(t,{Z:()=>a});var l=n(821);const r={components:{Head:n(9038).Fb},props:{title:String}};const a=(0,n(3744).Z)(r,[["render",function(e,t,n,r,a,s){var o=(0,l.resolveComponent)("Head");return(0,l.openBlock)(),(0,l.createBlock)(o,{title:n.title?"".concat(n.title," - ").concat(e.$page.props.app.name):e.$page.props.app.name},{default:(0,l.withCtx)((function(){return[(0,l.renderSlot)(e.$slots,"default")]})),_:3},8,["title"])}]])},7105:(e,t,n)=>{n.d(t,{Z:()=>u});var l=n(821),r={class:"border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 max-w-screen-lg"},a={class:"flex-1 min-w-0"},s={class:"text-lg font-medium leading-6 text-gray-900 sm:truncate"},o={class:"mt-4 flex sm:mt-0 sm:ml-4"},d={class:"px-4 mt-6 sm:px-6 lg:px-8 max-w-screen-lg"},c={class:"text-gray-500 text-xs font-medium uppercase tracking-wide"},i={class:"px-4 mt-6 sm:px-6 lg:px-8 max-w-screen-lg"},m={class:"align-middle inline-block min-w-full"};const u={props:{name:String,label:String,modelValue:String,id:{type:String,default:function(e){return e.name}},type:{type:String,default:"text"},placeholder:{type:String,default:""},form:{type:Object,default:function(){return{errors:{}}}},hasError:{type:Boolean,default:null},errorMessage:{type:String,default:""},help:{type:String,default:""}},emits:["update:modelValue"],setup:function(e){return function(e,t){return(0,l.openBlock)(),(0,l.createElementBlock)(l.Fragment,null,[(0,l.createElementVNode)("div",r,[(0,l.createElementVNode)("div",a,[(0,l.createElementVNode)("h1",s,[(0,l.renderSlot)(e.$slots,"header")])]),(0,l.createElementVNode)("div",o,[(0,l.renderSlot)(e.$slots,"buttons")])]),(0,l.createElementVNode)("div",d,[(0,l.createElementVNode)("h2",c,[(0,l.renderSlot)(e.$slots,"sub-header")]),(0,l.renderSlot)(e.$slots,"sub-header-content")]),(0,l.createElementVNode)("div",i,[(0,l.createElementVNode)("div",m,[(0,l.renderSlot)(e.$slots,"default")])])],64)}}}},7022:(e,t,n)=>{n.d(t,{Z:()=>i});var l=n(821),r=(n(3724),(0,l.createElementVNode)("h3",{class:"text-lg leading-6 font-medium text-gray-900"},"Last 30 days",-1)),a={class:"mt-5 grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow divide-y divide-gray-200 md:grid-cols-3 md:divide-y-0 md:divide-x"},s={class:"text-base font-normal text-gray-900"},o={class:"mt-1 flex justify-between items-baseline md:block lg:flex"},d={class:"flex items-baseline text-2xl font-semibold text-indigo-600"},c={class:"ml-2 text-sm font-medium text-gray-500"};const i={props:{stats:Object},setup:function(e){return function(t,n){return(0,l.openBlock)(),(0,l.createElementBlock)("div",null,[r,(0,l.createElementVNode)("dl",a,[((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)(e.stats,(function(e){return(0,l.openBlock)(),(0,l.createElementBlock)("div",{key:e.name,class:"px-4 py-5 sm:p-6"},[(0,l.createElementVNode)("dt",s,(0,l.toDisplayString)(e.name),1),(0,l.createElementVNode)("dd",o,[(0,l.createElementVNode)("div",d,[(0,l.createTextVNode)((0,l.toDisplayString)(e.stat)+" ",1),(0,l.createElementVNode)("span",c," from "+(0,l.toDisplayString)(e.previousStat),1)])])])})),128))])])}}}},5466:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var l=n(821),r=n(3758),a=n(7105),s=n(7022),o=(0,l.createTextVNode)("Home");const d={props:{stats:Object},setup:function(e){return function(t,n){return(0,l.openBlock)(),(0,l.createElementBlock)(l.Fragment,null,[(0,l.createVNode)((0,l.unref)(r.Z),{title:"Home"}),(0,l.createVNode)((0,l.unref)(a.Z),null,{header:(0,l.withCtx)((function(){return[o]})),"sub-header-content":(0,l.withCtx)((function(){return[(0,l.createVNode)((0,l.unref)(s.Z),{stats:e.stats},null,8,["stats"])]})),_:1})],64)}}}}}]);