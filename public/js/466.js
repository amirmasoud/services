"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[466],{3758:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(821);const l={components:{Head:n(9038).Fb},props:{title:String}};const s=(0,n(3744).Z)(l,[["render",function(e,t,n,l,s,a){var o=(0,r.resolveComponent)("Head");return(0,r.openBlock)(),(0,r.createBlock)(o,{title:n.title?"".concat(n.title," - ").concat(e.$page.props.app.name):e.$page.props.app.name},{default:(0,r.withCtx)((function(){return[(0,r.renderSlot)(e.$slots,"default")]})),_:3},8,["title"])}]])},4232:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(821),l={class:"border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"},s={class:"flex-1 min-w-0"},a={class:"text-lg font-medium leading-6 text-gray-900 sm:truncate"},o={class:"mt-4 flex sm:mt-0 sm:ml-4"},c={class:"px-4 mt-6 sm:px-6 lg:px-8"},d={class:"text-gray-500 text-xs font-medium uppercase tracking-wide"},i={class:"px-4 mt-6 sm:px-6 lg:px-8"},m={class:"align-middle inline-block min-w-full"};const u={},p=(0,n(3744).Z)(u,[["render",function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,null,[(0,r.createElementVNode)("div",l,[(0,r.createElementVNode)("div",s,[(0,r.createElementVNode)("h1",a,[(0,r.renderSlot)(e.$slots,"header")])]),(0,r.createElementVNode)("div",o,[(0,r.renderSlot)(e.$slots,"buttons")])]),(0,r.createElementVNode)("div",c,[(0,r.createElementVNode)("h2",d,[(0,r.renderSlot)(e.$slots,"sub-header")]),(0,r.renderSlot)(e.$slots,"sub-header-content")]),(0,r.createElementVNode)("div",i,[(0,r.createElementVNode)("div",m,[(0,r.renderSlot)(e.$slots,"default")])])],64)}]])},7022:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(821),l=n(3724),s=(0,r.createElementVNode)("h3",{class:"text-lg leading-6 font-medium text-gray-900"},"Last 30 days",-1),a={class:"mt-5 grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow divide-y divide-gray-200 md:grid-cols-3 md:divide-y-0 md:divide-x"},o={class:"text-base font-normal text-gray-900"},c={class:"mt-1 flex justify-between items-baseline md:block lg:flex"},d={class:"flex items-baseline text-2xl font-semibold text-indigo-600"},i={class:"ml-2 text-sm font-medium text-gray-500"},m={class:"sr-only"};const u={props:{stats:Object},setup:function(e){return function(t,n){return(0,r.openBlock)(),(0,r.createElementBlock)("div",null,[s,(0,r.createElementVNode)("dl",a,[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(e.stats,(function(e){return(0,r.openBlock)(),(0,r.createElementBlock)("div",{key:e.name,class:"px-4 py-5 sm:p-6"},[(0,r.createElementVNode)("dt",o,(0,r.toDisplayString)(e.name),1),(0,r.createElementVNode)("dd",c,[(0,r.createElementVNode)("div",d,[(0,r.createTextVNode)((0,r.toDisplayString)(e.stat)+" ",1),(0,r.createElementVNode)("span",i," from "+(0,r.toDisplayString)(e.previousStat),1)]),(0,r.createElementVNode)("div",{class:(0,r.normalizeClass)(["increase"===e.changeType?"bg-green-100 text-green-800":"bg-red-100 text-red-800","inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0"])},["increase"===e.changeType?((0,r.openBlock)(),(0,r.createBlock)((0,r.unref)(l.x6n),{key:0,class:"-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500","aria-hidden":"true"})):((0,r.openBlock)(),(0,r.createBlock)((0,r.unref)(l.YMr),{key:1,class:"-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500","aria-hidden":"true"})),(0,r.createElementVNode)("span",m,(0,r.toDisplayString)("increase"===e.changeType?"Increased":"Decreased")+" by ",1),(0,r.createTextVNode)(" "+(0,r.toDisplayString)(e.change),1)],2)])])})),128))])])}}}},5466:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var r=n(821),l=n(3758),s=n(4232),a=n(7022),o=(0,r.createTextVNode)("Home");const c={props:{stats:Object},setup:function(e){return function(t,n){return(0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,null,[(0,r.createVNode)((0,r.unref)(l.Z),{title:"Home"}),(0,r.createVNode)((0,r.unref)(s.Z),null,{header:(0,r.withCtx)((function(){return[o]})),"sub-header-content":(0,r.withCtx)((function(){return[(0,r.createVNode)((0,r.unref)(a.Z),{stats:e.stats},null,8,["stats"])]})),_:1})],64)}}}}}]);