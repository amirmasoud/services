"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[141],{3758:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(821);const o={components:{Head:r(9038).Fb},props:{title:String}};const l=(0,r(3744).Z)(o,[["render",function(e,t,r,o,l,a){var s=(0,n.resolveComponent)("Head");return(0,n.openBlock)(),(0,n.createBlock)(s,{title:r.title?"".concat(r.title," - ").concat(e.$page.props.app.name):e.$page.props.app.name},{default:(0,n.withCtx)((function(){return[(0,n.renderSlot)(e.$slots,"default")]})),_:3},8,["title"])}]])},9018:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(821),o=r(4444),l=r(3611);const a={props:{type:{type:String,default:"button"},processing:{type:Boolean,default:!1},href:{type:String,default:null}},setup:function(e){return function(t,r){return(0,n.openBlock)(),(0,n.createBlock)((0,n.resolveDynamicComponent)(e.href?"Link":"button"),{disabled:e.href?null:e.processing,href:e.href?e.href:null,type:e.href?null:e.type,class:"inline-flex items-center py-2 px-3 text-sm font-medium leading-4 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md border border-transparent focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-sm disabled:opacity-50 disabled:cursor-wait focus:outline-none"},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)((0,n.unref)(l.Qm),{id:"button-spinner",show:e.processing,enter:"transition-opacity duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transition-opacity duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)((0,n.unref)(o.Z),{class:"w-4 h-4"})]})),_:1},8,["show"]),(0,n.renderSlot)(t.$slots,"default")]})),_:3},8,["disabled","href","type"])}}}},7105:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(821),o={class:"border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 max-w-screen-lg"},l={class:"flex-1 min-w-0"},a={class:"text-lg font-medium leading-6 text-gray-900 sm:truncate"},s={class:"mt-4 flex sm:mt-0 sm:ml-4"},i={class:"px-4 mt-6 sm:px-6 lg:px-8 max-w-screen-lg"},c={class:"text-gray-500 text-xs font-medium uppercase tracking-wide"},d={class:"px-4 mt-6 sm:px-6 lg:px-8 max-w-screen-lg"},u={class:"align-middle inline-block min-w-full"};const m={props:{name:String,label:String,modelValue:String,id:{type:String,default:function(e){return e.name}},type:{type:String,default:"text"},placeholder:{type:String,default:""},form:{type:Object,default:function(){return{errors:{}}}},hasError:{type:Boolean,default:null},errorMessage:{type:String,default:""},help:{type:String,default:""}},emits:["update:modelValue"],setup:function(e){return function(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[(0,n.createElementVNode)("div",o,[(0,n.createElementVNode)("div",l,[(0,n.createElementVNode)("h1",a,[(0,n.renderSlot)(e.$slots,"header")])]),(0,n.createElementVNode)("div",s,[(0,n.renderSlot)(e.$slots,"buttons")])]),(0,n.createElementVNode)("div",i,[(0,n.createElementVNode)("h2",c,[(0,n.renderSlot)(e.$slots,"sub-header")]),(0,n.renderSlot)(e.$slots,"sub-header-content")]),(0,n.createElementVNode)("div",d,[(0,n.createElementVNode)("div",u,[(0,n.renderSlot)(e.$slots,"default")])])],64)}}}},4444:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(821),o={class:"animate-spin -ml-1 mr-3 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},l=[(0,n.createElementVNode)("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),(0,n.createElementVNode)("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)];const a={},s=(0,r(3744).Z)(a,[["render",function(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)("svg",o,l)}]])},8741:(e,t,r)=>{r.d(t,{Z:()=>re});var n=r(821),o=r(9680),l=r(7751),a={class:"relative z-0 inline-flex rounded-md shadow-sm -space-x-px","aria-label":"Pagination"},s=(0,n.createElementVNode)("span",{class:"sr-only"},"Previous",-1),i=(0,n.createElementVNode)("span",{class:"sr-only"},"Next",-1),c={key:2,class:"relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"};const d={props:{links:Array},setup:function(e){return function(t,r){var o=(0,n.resolveComponent)("Link");return(0,n.openBlock)(),(0,n.createElementBlock)("div",null,[(0,n.createElementVNode)("nav",a,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(e.links,(function(t,r){return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,{key:r},[0===r?((0,n.openBlock)(),(0,n.createBlock)((0,n.resolveDynamicComponent)(t.url?"Link":"button"),{key:0,href:t.url,class:(0,n.normalizeClass)([{"cursor-not-allowed":!t.url},"relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-10"]),disabled:!t.url},{default:(0,n.withCtx)((function(){return[s,(0,n.createVNode)((0,n.unref)(l.wyc),{class:"h-5 w-5"})]})),_:2},1032,["href","class","disabled"])):r===e.links.length-1?((0,n.openBlock)(),(0,n.createBlock)((0,n.resolveDynamicComponent)(t.url?"Link":"button"),{key:1,href:t.url,class:(0,n.normalizeClass)([{"cursor-not-allowed":!t.url},"relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-10"]),disabled:!t.url},{default:(0,n.withCtx)((function(){return[i,(0,n.createVNode)((0,n.unref)(l.XCv),{class:"h-5 w-5"})]})),_:2},1032,["href","class","disabled"])):t.url?((0,n.openBlock)(),(0,n.createBlock)(o,{key:3,href:t.url,class:(0,n.normalizeClass)([[t.active?"z-10 bg-indigo-50 border-indigo-500 text-indigo-600":"bg-white border-gray-300 text-gray-500 hover:bg-gray-50"],"relative inline-flex items-center px-4 py-2 border text-sm font-medium"])},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)((0,n.toDisplayString)(t.label),1)]})),_:2},1032,["href","class"])):((0,n.openBlock)(),(0,n.createElementBlock)("span",c,(0,n.toDisplayString)(t.label),1))],64)})),128))])])}}};var u=r(3279),m=r.n(u),f=r(3724),p={class:"text-center"},g=(0,n.createElementVNode)("svg",{class:"mx-auto h-12 w-12 text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[(0,n.createElementVNode)("path",{"vector-effect":"non-scaling-stroke","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"})],-1),x={class:"mt-2 text-sm font-medium text-gray-900"},h={class:"mt-1 text-sm text-gray-500"},y={class:"mt-6"};const k={props:{title:String,description:String,button:String,link:String},setup:function(e){return function(t,r){var o=(0,n.resolveComponent)("Link");return(0,n.openBlock)(),(0,n.createElementBlock)("div",p,[g,(0,n.createElementVNode)("h3",x,(0,n.toDisplayString)(e.title),1),(0,n.createElementVNode)("p",h,(0,n.toDisplayString)(e.description),1),(0,n.createElementVNode)("div",y,[(0,n.createVNode)(o,{href:e.link,class:"inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)((0,n.unref)(f.pOD),{class:"-ml-1 mr-2 h-5 w-5","aria-hidden":"true"}),(0,n.createTextVNode)(" "+(0,n.toDisplayString)(e.button),1)]})),_:1},8,["href"])])])}}};var b=["for"],v={class:"relative rounded-md shadow-sm"},w=["id","placeholder"];const V={props:{filter:Object},setup:function(e){return function(t,r){return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[(0,n.createElementVNode)("label",{for:e.filter.name,class:"block text-sm font-medium text-gray-700"},(0,n.toDisplayString)(e.filter.label),9,b),(0,n.createElementVNode)("div",v,[(0,n.withDirectives)((0,n.createElementVNode)("input",{id:e.filter.name,"onUpdate:modelValue":r[0]||(r[0]=function(t){return e.filter.value=t}),type:"text",name:"search",class:"focus:ring-indigo-500 focus:border-indigo-500 block w-full px-2 sm:text-sm border-gray-300 rounded-md",placeholder:e.filter.label},null,8,w),[[n.vModelText,e.filter.value]])])],64)}}};var N=r(3611),B={class:"mt-1 relative"},E={class:"flex items-center"},C={class:"ml-3 block truncate"},S={class:"ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"},_={class:"flex items-center"};const D={props:{filter:Object},setup:function(e){return function(t,r){return(0,n.openBlock)(),(0,n.createBlock)((0,n.unref)(N.Ri),{modelValue:e.filter.value,"onUpdate:modelValue":r[0]||(r[0]=function(t){return e.filter.value=t}),as:"div",class:"w-32"},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)((0,n.unref)(N.xX),{class:"block text-sm font-medium text-gray-700"},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)((0,n.toDisplayString)(e.filter.label),1)]})),_:1}),(0,n.createElementVNode)("div",B,[(0,n.createVNode)((0,n.unref)(N.Y4),{class:"relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"},{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("span",E,[(0,n.createElementVNode)("span",C,(0,n.toDisplayString)(e.filter.value),1)]),(0,n.createElementVNode)("span",S,[(0,n.createVNode)((0,n.unref)(f.Ta4),{class:"h-5 w-5 text-gray-400","aria-hidden":"true"})])]})),_:1}),(0,n.createVNode)(n.Transition,{"leave-active-class":"transition ease-in duration-100","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)((0,n.unref)(N.O_),{class:"absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"},{default:(0,n.withCtx)((function(){return[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(e.filter.items,(function(e,t,r){return(0,n.openBlock)(),(0,n.createBlock)((0,n.unref)(N.wt),{key:r,as:"template",value:e},{default:(0,n.withCtx)((function(t){var r=t.active,o=t.selected;return[(0,n.createElementVNode)("li",{class:(0,n.normalizeClass)([r?"text-white bg-indigo-600":"text-gray-900","cursor-default select-none relative py-2 pl-3 pr-9"])},[(0,n.createElementVNode)("div",_,[(0,n.createElementVNode)("span",{class:(0,n.normalizeClass)([o?"font-semibold":"font-normal","ml-3 block truncate"])},(0,n.toDisplayString)(e),3)]),o?((0,n.openBlock)(),(0,n.createElementBlock)("span",{key:0,class:(0,n.normalizeClass)([r?"text-white":"text-indigo-600","absolute inset-y-0 right-0 flex items-center pr-4"])},[(0,n.createVNode)((0,n.unref)(f.nQG),{class:"h-5 w-5","aria-hidden":"true"})],2)):(0,n.createCommentVNode)("",!0)],2)]})),_:2},1032,["value"])})),128))]})),_:1})]})),_:1})])]})),_:1},8,["modelValue"])}}};var O={class:"flex flex-col sm:flex-row justify-between sm:items-end space-y-4 mb-4"},T={key:0,class:"rounded-lg bg-white overflow-hidden shadow"},j={class:"min-w-full divide-y divide-gray-200"},L={class:"bg-gray-50"},$=(0,n.createElementVNode)("th",{class:"relative py-3 px-6",scope:"col"},[(0,n.createElementVNode)("span",{class:"sr-only"},"Actions")],-1),F={class:"bg-white divide-y divide-gray-200"},Z={class:"py-4 px-6 space-x-6 text-sm font-medium text-right whitespace-nowrap"},z=(0,n.createTextVNode)("Details "),P=(0,n.createTextVNode)("Edit "),M=(0,n.createTextVNode)("Delete "),H=(0,n.createTextVNode)("Restore "),I=(0,n.createTextVNode)("Force delete "),U={class:"flex justify-between items-center py-3 px-4 sm:px-6 bg-white border-t border-gray-200"},A={class:"flex sm:hidden flex-1 justify-between"},R=(0,n.createTextVNode)(" Previous "),G=(0,n.createTextVNode)(" Next "),Q={class:"hidden sm:flex sm:flex-1 sm:justify-between sm:items-center"},X={class:"text-sm text-gray-700"},Y=(0,n.createTextVNode)(" Showing "),q={class:"font-medium"},J=(0,n.createTextVNode)(" to "),K={class:"font-medium"},W=(0,n.createTextVNode)(" of "),ee={class:"font-medium"},te=(0,n.createTextVNode)(" results ");const re={props:{records:Object,filters:Object,endpoint:String,fields:Object,actions:Object},setup:function(e){var t=e,r={};return(0,n.onMounted)((function(){for(var e in t.filters)r[t.filters[e].name]=t.filters[e].value})),setInterval((function(){o.Inertia.reload({data:r,only:["records"]})}),1e4),(0,n.watch)(t.filters,m()((function(e){for(var n in t.filters)r[e[n].name]=e[n].value;o.Inertia.get(t.endpoint,r,{preserveState:!0,replace:!0,only:["records"]})}),300)),function(r,o){var l=(0,n.resolveComponent)("Link");return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[(0,n.createElementVNode)("div",O,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)((0,n.unref)(t).filters,(function(e){return(0,n.openBlock)(),(0,n.createElementBlock)("div",null,["input"===e.type?((0,n.openBlock)(),(0,n.createBlock)((0,n.unref)(V),{key:0,filter:e},null,8,["filter"])):"list"===e.type?((0,n.openBlock)(),(0,n.createBlock)((0,n.unref)(D),{key:1,filter:e},null,8,["filter"])):(0,n.createCommentVNode)("",!0)])})),256))]),e.records.data.length?((0,n.openBlock)(),(0,n.createElementBlock)("div",T,[(0,n.createElementVNode)("table",j,[(0,n.createElementVNode)("thead",L,[(0,n.createElementVNode)("tr",null,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(e.fields,(function(e){return(0,n.openBlock)(),(0,n.createElementBlock)("th",{key:e.name,class:"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-500 uppercase",scope:"col"},(0,n.toDisplayString)(e.label),1)})),128)),$])]),(0,n.createElementVNode)("tbody",F,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(e.records.data,(function(t){return(0,n.openBlock)(),(0,n.createElementBlock)("tr",{key:t.id},[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(e.fields,(function(e){return(0,n.openBlock)(),(0,n.createElementBlock)("td",{key:e.name,class:"py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap"},(0,n.toDisplayString)(t[e.name]),1)})),128)),(0,n.createElementVNode)("td",Z,[e.actions.hasOwnProperty("details")?((0,n.openBlock)(),(0,n.createBlock)(l,{key:0,href:r.$route(e.actions.details.link,t),as:"button",class:"text-indigo-600 hover:text-indigo-900",method:"get"},{default:(0,n.withCtx)((function(){return[z]})),_:2},1032,["href"])):(0,n.createCommentVNode)("",!0),e.actions.hasOwnProperty("edit")?((0,n.openBlock)(),(0,n.createBlock)(l,{key:1,href:r.$route(e.actions.edit.link,t),as:"button",class:"text-indigo-600 hover:text-indigo-900",method:"get"},{default:(0,n.withCtx)((function(){return[P]})),_:2},1032,["href"])):(0,n.createCommentVNode)("",!0),t.hasOwnProperty("deleted_at")&&!t.deleted_at&&e.actions.hasOwnProperty("delete")||!t.hasOwnProperty("deleted_at")&&e.actions.hasOwnProperty("delete")?((0,n.openBlock)(),(0,n.createBlock)(l,{key:2,href:r.$route(e.actions.delete.link,t),as:"button",class:"text-indigo-600 hover:text-indigo-900",method:"delete",type:"button"},{default:(0,n.withCtx)((function(){return[M]})),_:2},1032,["href"])):(0,n.createCommentVNode)("",!0),t.hasOwnProperty("deleted_at")&&t.deleted_at&&e.actions.hasOwnProperty("restore")?((0,n.openBlock)(),(0,n.createBlock)(l,{key:3,href:r.$route(e.actions.restore.link,t),as:"button",class:"text-indigo-600 hover:text-indigo-900",method:"post",type:"button"},{default:(0,n.withCtx)((function(){return[H]})),_:2},1032,["href"])):(0,n.createCommentVNode)("",!0),t.hasOwnProperty("deleted_at")&&t.deleted_at&&e.actions.hasOwnProperty("force_delete")?((0,n.openBlock)(),(0,n.createBlock)(l,{key:4,href:r.$route(e.actions.force_delete.link,t),as:"button",class:"text-indigo-600 hover:text-indigo-900",method:"delete",type:"button"},{default:(0,n.withCtx)((function(){return[I]})),_:2},1032,["href"])):(0,n.createCommentVNode)("",!0)])])})),128))])]),(0,n.createElementVNode)("div",U,[(0,n.createElementVNode)("div",A,[((0,n.openBlock)(),(0,n.createBlock)((0,n.resolveDynamicComponent)(e.records.links.prev?"Link":"span"),{href:e.records.links.prev,class:"inline-flex relative items-center py-2 px-4 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 rounded-md border border-gray-300 cursor-pointer"},{default:(0,n.withCtx)((function(){return[R]})),_:1},8,["href"])),((0,n.openBlock)(),(0,n.createBlock)((0,n.resolveDynamicComponent)(e.records.links.next?"Link":"span"),{href:e.records.links.next,class:"inline-flex relative items-center py-2 px-4 ml-3 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 rounded-md border border-gray-300 cursor-pointer"},{default:(0,n.withCtx)((function(){return[G]})),_:1},8,["href"]))]),(0,n.createElementVNode)("div",Q,[(0,n.createElementVNode)("div",null,[(0,n.createElementVNode)("p",X,[Y,(0,n.createElementVNode)("span",q,(0,n.toDisplayString)(e.records.meta.from),1),J,(0,n.createElementVNode)("span",K,(0,n.toDisplayString)(e.records.meta.to),1),W,(0,n.createElementVNode)("span",ee,(0,n.toDisplayString)(e.records.meta.total),1),te])]),(0,n.createVNode)((0,n.unref)(d),{links:e.records.meta.links},null,8,["links"])])])])):((0,n.openBlock)(),(0,n.createBlock)((0,n.unref)(k),{key:1,link:r.$route(e.actions.create.link),button:"New Record",class:"mt-20",description:"Get started by creating a new record",title:"No records"},null,8,["link"]))],64)}}}},7022:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(821),o=r(3724),l=(0,n.createElementVNode)("h3",{class:"text-lg leading-6 font-medium text-gray-900"},"Last 30 days",-1),a={class:"mt-5 grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow divide-y divide-gray-200 md:grid-cols-3 md:divide-y-0 md:divide-x"},s={class:"text-base font-normal text-gray-900"},i={class:"mt-1 flex justify-between items-baseline md:block lg:flex"},c={class:"flex items-baseline text-2xl font-semibold text-indigo-600"},d={class:"ml-2 text-sm font-medium text-gray-500"},u={class:"sr-only"};const m={props:{stats:Object},setup:function(e){return function(t,r){return(0,n.openBlock)(),(0,n.createElementBlock)("div",null,[l,(0,n.createElementVNode)("dl",a,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(e.stats,(function(e){return(0,n.openBlock)(),(0,n.createElementBlock)("div",{key:e.name,class:"px-4 py-5 sm:p-6"},[(0,n.createElementVNode)("dt",s,(0,n.toDisplayString)(e.name),1),(0,n.createElementVNode)("dd",i,[(0,n.createElementVNode)("div",c,[(0,n.createTextVNode)((0,n.toDisplayString)(e.stat)+" ",1),(0,n.createElementVNode)("span",d," from "+(0,n.toDisplayString)(e.previousStat),1)]),(0,n.createElementVNode)("div",{class:(0,n.normalizeClass)(["increase"===e.changeType?"bg-green-100 text-green-800":"bg-red-100 text-red-800","inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0"])},["increase"===e.changeType?((0,n.openBlock)(),(0,n.createBlock)((0,n.unref)(o.x6n),{key:0,class:"-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-green-500","aria-hidden":"true"})):((0,n.openBlock)(),(0,n.createBlock)((0,n.unref)(o.YMr),{key:1,class:"-ml-1 mr-0.5 flex-shrink-0 self-center h-5 w-5 text-red-500","aria-hidden":"true"})),(0,n.createElementVNode)("span",u,(0,n.toDisplayString)("increase"===e.changeType?"Increased":"Decreased")+" by ",1),(0,n.createTextVNode)(" "+(0,n.toDisplayString)(e.change),1)],2)])])})),128))])])}}}},7141:(e,t,r)=>{r.r(t),r.d(t,{default:()=>u});var n=r(821),o=r(8741),l=r(3758),a=r(7105),s=r(7022),i=r(9018),c=(0,n.createTextVNode)("Users"),d=(0,n.createTextVNode)("New user");const u={props:{records:Object,filters:Object,table:Object,stats:Object},setup:function(e){return function(t,r){return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[(0,n.createVNode)((0,n.unref)(l.Z),{title:"Users"}),(0,n.createVNode)((0,n.unref)(a.Z),null,{header:(0,n.withCtx)((function(){return[c]})),buttons:(0,n.withCtx)((function(){return[(0,n.createVNode)((0,n.unref)(i.Z),{href:t.$route(e.table.actions.create.link)},{default:(0,n.withCtx)((function(){return[d]})),_:1},8,["href"])]})),"sub-header":(0,n.withCtx)((function(){return[]})),"sub-header-content":(0,n.withCtx)((function(){return[(0,n.createVNode)((0,n.unref)(s.Z),{stats:e.stats},null,8,["stats"])]})),default:(0,n.withCtx)((function(){return[(0,n.createVNode)((0,n.unref)(o.Z),{records:e.records,filters:e.filters,endpoint:"/dashboard/users",fields:e.table.fields,actions:e.table.actions},null,8,["records","filters","fields","actions"])]})),_:1})],64)}}}}}]);