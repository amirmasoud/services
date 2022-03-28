"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[762],{3758:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(821);const o={components:{Head:r(9038).Fb},props:{title:String}};const a=(0,r(3744).Z)(o,[["render",function(e,t,r,o,a,l){var s=(0,n.resolveComponent)("Head");return(0,n.openBlock)(),(0,n.createBlock)(s,{title:r.title?"".concat(r.title," - ").concat(e.$page.props.app.name):e.$page.props.app.name},{default:(0,n.withCtx)((function(){return[(0,n.renderSlot)(e.$slots,"default")]})),_:3},8,["title"])}]])},9018:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(821),o=r(4444),a=r(3611);const l={props:{type:{type:String,default:"button"},processing:{type:Boolean,default:!1},href:{type:String,default:null}},setup:function(e){return function(t,r){return(0,n.openBlock)(),(0,n.createBlock)((0,n.resolveDynamicComponent)(e.href?"Link":"button"),{disabled:e.href?null:e.processing,href:e.href?e.href:null,type:e.href?null:e.type,class:"inline-flex items-center py-2 px-3 text-sm font-medium leading-4 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md border border-transparent focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-sm disabled:opacity-50 disabled:cursor-wait focus:outline-none"},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)((0,n.unref)(a.Qm),{id:"button-spinner",show:e.processing,enter:"transition-opacity duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transition-opacity duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)((0,n.unref)(o.Z),{class:"w-4 h-4"})]})),_:1},8,["show"]),(0,n.renderSlot)(t.$slots,"default")]})),_:3},8,["disabled","href","type"])}}}},7105:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(821),o={class:"border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 max-w-screen-lg"},a={class:"flex-1 min-w-0"},l={class:"text-lg font-medium leading-6 text-gray-900 sm:truncate"},s={class:"mt-4 flex sm:mt-0 sm:ml-4"},i={class:"px-4 mt-6 sm:px-6 lg:px-8 max-w-screen-lg"},c={class:"text-gray-500 text-xs font-medium uppercase tracking-wide"},d={class:"px-4 mt-6 sm:px-6 lg:px-8 max-w-screen-lg"},u={class:"align-middle inline-block min-w-full"};const m={props:{name:String,label:String,modelValue:String,id:{type:String,default:function(e){return e.name}},type:{type:String,default:"text"},placeholder:{type:String,default:""},form:{type:Object,default:function(){return{errors:{}}}},hasError:{type:Boolean,default:null},errorMessage:{type:String,default:""},help:{type:String,default:""}},emits:["update:modelValue"],setup:function(e){return function(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[(0,n.createElementVNode)("div",o,[(0,n.createElementVNode)("div",a,[(0,n.createElementVNode)("h1",l,[(0,n.renderSlot)(e.$slots,"header")])]),(0,n.createElementVNode)("div",s,[(0,n.renderSlot)(e.$slots,"buttons")])]),(0,n.createElementVNode)("div",i,[(0,n.createElementVNode)("h2",c,[(0,n.renderSlot)(e.$slots,"sub-header")]),(0,n.renderSlot)(e.$slots,"sub-header-content")]),(0,n.createElementVNode)("div",d,[(0,n.createElementVNode)("div",u,[(0,n.renderSlot)(e.$slots,"default")])])],64)}}}},4818:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(821),o=r(3611),a=["for"],l={class:"mt-1"},s=["id","name","placeholder","type","value"],i=["id"];const c={props:{name:String,label:String,modelValue:String,id:{type:String,default:function(e){return e.name}},type:{type:String,default:"text"},placeholder:{type:String,default:""},form:{type:Object,default:function(){return{errors:{}}}},hasError:{type:Boolean,default:null},errorMessage:{type:String,default:""},help:{type:String,default:""}},emits:["update:modelValue"],setup:function(e){return function(t,r){return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[(0,n.createElementVNode)("label",{for:e.id,class:"block text-sm font-semibold font-medium text-gray-700"},(0,n.toDisplayString)(e.label),9,a),(0,n.createElementVNode)("div",l,[(0,n.createElementVNode)("input",{id:e.id,class:(0,n.normalizeClass)([[e.hasError||e.form.errors[e.name]?"border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500":"focus:ring-indigo-500 focus:border-indigo-500 border-gray-300"],"block w-full sm:text-sm rounded-md shadow-sm"]),name:e.name,placeholder:e.placeholder,type:e.type,value:e.modelValue,onInput:r[0]||(r[0]=function(e){return t.$emit("update:modelValue",e.target.value)})},null,42,s)]),""!==e.help?((0,n.openBlock)(),(0,n.createElementBlock)("p",{key:0,id:"".concat(e.name,"-description"),class:"mt-2 text-sm text-gray-500"},(0,n.toDisplayString)(e.help),9,i)):(0,n.createCommentVNode)("",!0),(0,n.createVNode)((0,n.unref)(o.Qm),{id:"".concat(e.name,"-error"),show:e.hasError||!!e.form.errors[e.name],as:"p",class:"mt-2 text-sm text-red-600",enter:"transition-opacity duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transition-opacity duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)((0,n.toDisplayString)(e.hasError?e.errorMessage:e.form.errors[e.name]),1)]})),_:1},8,["id","show"])],64)}}}},4444:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(821),o={class:"animate-spin -ml-1 mr-3 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},a=[(0,n.createElementVNode)("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),(0,n.createElementVNode)("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)];const l={},s=(0,r(3744).Z)(l,[["render",function(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)("svg",o,a)}]])},9762:(e,t,r)=>{r.r(t),r.d(t,{default:()=>O});var n=r(821),o=r(9038),a=r(4818),l=r(3758),s=r(7105),i=r(3611),c=r(3724),d=r(9018),u=(0,n.createTextVNode)(" Sites"),m={class:"overflow-hidden sm:rounded-md shadow"},p={class:"sm:p-6 py-5 px-4 bg-white"},f={class:"grid grid-cols-6 gap-6"},g={class:"col-span-6 sm:col-span-4"},y={class:"col-span-6 sm:col-span-4"},x={class:"col-span-6 sm:col-span-4"},v=(0,n.createElementVNode)("label",{class:"block text-sm font-medium text-gray-700 mb-2",for:"servers"},"Server",-1),V=(0,n.createTextVNode)(" Server size"),h={class:"space-y-4"},N={class:"flex items-center"},b={class:"text-sm"},w={class:"sm:inline"},k=(0,n.createTextVNode)(" "+(0,n.toDisplayString)(" ")+" "),E=(0,n.createElementVNode)("span",{"aria-hidden":"true",class:"hidden sm:inline sm:mx-1"},"·",-1),S=(0,n.createTextVNode)(" "+(0,n.toDisplayString)(" ")+" "),C={class:"sm:inline"},_={class:"font-medium text-gray-900"},B=(0,n.createElementVNode)("div",{class:"ml-1 text-gray-500 sm:ml-0"},"/mo",-1),D={class:"col-span-6 sm:col-span-4"},T=(0,n.createElementVNode)("label",{class:"block text-sm font-medium text-gray-700 mb-2",for:"stacks"},"Stack",-1),Z=(0,n.createTextVNode)(" Selected Stack Type "),$={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"},j={class:"flex items-center flex-col"},z=["src"],F={class:"block w-full px-4 pt-2 pb-4"},M=["innerHTML"],H={class:"col-span-6 sm:col-span-4"},L=(0,n.createTextVNode)(" Deploy ");const O={props:{servers:Object,stacks:Object,types:Object},setup:function(e){var t=e,r=((0,n.ref)(t.types[0].value),(0,n.ref)(t.servers.data[0].id),(0,o.cI)({name:null,host:null,server_id:null,stack_id:null}));return function(t,o){var O=(0,n.resolveComponent)("TransitionRoot");return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[(0,n.createVNode)((0,n.unref)(l.Z),{title:"New site"}),(0,n.createVNode)((0,n.unref)(s.Z),null,{header:(0,n.withCtx)((function(){return[u]})),default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("form",{class:"max-w-screen-lg",onSubmit:o[4]||(o[4]=(0,n.withModifiers)((function(e){return(0,n.unref)(r).post("/dashboard/sites")}),["prevent"]))},[(0,n.createElementVNode)("div",m,[(0,n.createElementVNode)("div",p,[(0,n.createElementVNode)("div",f,[(0,n.createElementVNode)("div",g,[(0,n.createVNode)((0,n.unref)(a.Z),{modelValue:(0,n.unref)(r).name,"onUpdate:modelValue":o[0]||(o[0]=function(e){return(0,n.unref)(r).name=e}),form:(0,n.unref)(r),label:"Name",name:"name"},null,8,["modelValue","form"])]),(0,n.createElementVNode)("div",y,[(0,n.createVNode)((0,n.unref)(a.Z),{modelValue:(0,n.unref)(r).host,"onUpdate:modelValue":o[1]||(o[1]=function(e){return(0,n.unref)(r).host=e}),form:(0,n.unref)(r),label:"Host",name:"host"},null,8,["modelValue","form"])]),(0,n.createElementVNode)("div",x,[v,(0,n.createVNode)((0,n.unref)(i.Ee),{modelValue:(0,n.unref)(r).server_id,"onUpdate:modelValue":o[2]||(o[2]=function(e){return(0,n.unref)(r).server_id=e})},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)((0,n.unref)(i.Nt),{class:"sr-only"},{default:(0,n.withCtx)((function(){return[V]})),_:1}),(0,n.createElementVNode)("div",h,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(e.servers.data,(function(e){return(0,n.openBlock)(),(0,n.createBlock)((0,n.unref)(i.$v),{key:e.id,value:e.id,as:"div"},{default:(0,n.withCtx)((function(t){var r=t.active,o=t.checked;return[(0,n.createElementVNode)("div",{class:(0,n.normalizeClass)([r?"ring-1 ring-offset-2 ring-indigo-500":"","relative block rounded-lg border border-gray-300 bg-white shadow-sm px-6 py-4 cursor-pointer hover:border-gray-400 sm:flex sm:justify-between focus:outline-none"])},[(0,n.createElementVNode)("div",N,[(0,n.createElementVNode)("div",b,[(0,n.createVNode)((0,n.unref)(i.Nt),{as:"p",class:"font-medium text-gray-900"},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)((0,n.toDisplayString)(e.name),1)]})),_:2},1024),(0,n.createVNode)((0,n.unref)(i.Y),{as:"div",class:"text-gray-500"},{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("p",w,(0,n.toDisplayString)(e.ram)+(0,n.toDisplayString)(e.ram_unit)+" / "+(0,n.toDisplayString)(e.cpu)+" Core ",1),k,E,S,(0,n.createElementVNode)("p",C,(0,n.toDisplayString)(e.disk)+(0,n.toDisplayString)(e.disk_unit)+" "+(0,n.toDisplayString)(e.disk_type),1)]})),_:2},1024)])]),(0,n.createVNode)((0,n.unref)(i.Y),{as:"div",class:"mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right"},{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("div",_,(0,n.toDisplayString)(e.price?e.price:"Free"),1),B]})),_:2},1024),(0,n.createElementVNode)("div",{class:(0,n.normalizeClass)([o?"border-indigo-500":"border-transparent","absolute -inset-px rounded-lg border-2 pointer-events-none"]),"aria-hidden":"true"},null,2)],2)]})),_:2},1032,["value"])})),128))])]})),_:1},8,["modelValue"]),(0,n.createVNode)(O,{id:"server-id-error",if:(0,n.unref)(r).errors.server_id,as:"p",class:"mt-2 block text-sm text-red-600",enter:"transition-opacity duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transition-opacity duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)((0,n.toDisplayString)((0,n.unref)(r).errors.server_id),1)]})),_:1},8,["if"])]),(0,n.createElementVNode)("div",D,[T,(0,n.createVNode)((0,n.unref)(i.Ee),{modelValue:(0,n.unref)(r).stack_id,"onUpdate:modelValue":o[3]||(o[3]=function(e){return(0,n.unref)(r).stack_id=e}),class:"max-w-screen-xl"},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)((0,n.unref)(i.Nt),{class:"sr-only"},{default:(0,n.withCtx)((function(){return[Z]})),_:1}),(0,n.createElementVNode)("div",$,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(e.stacks.data,(function(e){return(0,n.openBlock)(),(0,n.createBlock)((0,n.unref)(i.$v),{key:e.id,value:e.id,as:"div",class:"overflow-hidden break-all"},{default:(0,n.withCtx)((function(t){var r=t.active,o=t.checked;return[(0,n.createElementVNode)("div",{class:(0,n.normalizeClass)([r?"ring-1 ring-offset-2 ring-indigo-500":"","relative block rounded-lg border border-gray-300 bg-white shadow-sm cursor-pointer hover:border-gray-400 sm:flex sm:justify-between focus:outline-none"])},[(0,n.createElementVNode)("div",j,[(0,n.createElementVNode)("img",{src:e.type_icon,class:"rounded-t-lg p-4"},null,8,z),(0,n.createElementVNode)("div",F,[(0,n.createVNode)((0,n.unref)(i.Nt),{as:"p",class:"font-medium text-gray-900"},{default:(0,n.withCtx)((function(){return[(0,n.createElementVNode)("p",{class:"line-clamp-1",innerHTML:e.name},null,8,M)]})),_:2},1024),(0,n.createVNode)((0,n.unref)(i.Zm),{as:"div",class:"text-sm text-gray-500 line-clamp-1"},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)(" $"+(0,n.toDisplayString)(e.price)+" / mo ",1)]})),_:2},1024),(0,n.createVNode)((0,n.unref)(i.Zm),{as:"div",class:"text-sm text-gray-500 line-clamp-1"},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)((0,n.toDisplayString)(e.type_name)+" Stack ",1)]})),_:2},1024)])]),(0,n.createElementVNode)("div",{class:(0,n.normalizeClass)([o?"border-indigo-500":"border-transparent","absolute -inset-px rounded-lg border-2 pointer-events-none"]),"aria-hidden":"true"},null,2)],2)]})),_:2},1032,["value"])})),128))])]})),_:1},8,["modelValue"]),(0,n.createVNode)(O,{id:"stack-id-error",if:(0,n.unref)(r).errors.stack_id,as:"p",class:"mt-2 block text-sm text-red-600",enter:"transition-opacity duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transition-opacity duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:(0,n.withCtx)((function(){return[(0,n.createTextVNode)((0,n.toDisplayString)((0,n.unref)(r).errors.stack_id),1)]})),_:1},8,["if"])]),(0,n.createElementVNode)("div",H,[(0,n.createVNode)((0,n.unref)(d.Z),{color:"green",type:"submit"},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)((0,n.unref)(c.Rdq),{class:"w-4 h-4 mr-2"}),L]})),_:1})])])])])],32)]})),_:1})],64)}}}}}]);