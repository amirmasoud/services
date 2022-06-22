"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[980],{3758:(e,t,r)=>{r.d(t,{Z:()=>a});var o=r(821);const n={components:{Head:r(9038).Fb},props:{title:String}};const a=(0,r(3744).Z)(n,[["render",function(e,t,r,n,a,l){var i=(0,o.resolveComponent)("Head");return(0,o.openBlock)(),(0,o.createBlock)(i,{title:r.title?"".concat(r.title," - ").concat(e.$page.props.app.name):e.$page.props.app.name},{default:(0,o.withCtx)((function(){return[(0,o.renderSlot)(e.$slots,"default")]})),_:3},8,["title"])}]])},5527:(e,t,r)=>{r.d(t,{Z:()=>i});var o=r(821),n=r(4444),a=r(2600),l=["type","disabled"];const i={props:{type:{type:String,default:"button"},form:{type:Object,default:function(){return{processing:!1}}}},setup:function(e){return function(t,r){return(0,o.openBlock)(),(0,o.createElementBlock)("button",{type:e.type,disabled:e.form.processing,class:"inline-flex items-center py-2 px-3 text-sm font-medium leading-4 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md border border-transparent focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-sm disabled:opacity-50 disabled:cursor-wait focus:outline-none"},[(0,o.createVNode)((0,o.unref)(a.Q),{id:"button-spinner",show:e.form.processing,enter:"transition-opacity duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transition-opacity duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:(0,o.withCtx)((function(){return[(0,o.createVNode)((0,o.unref)(n.Z),{class:"w-4 h-4"})]})),_:1},8,["show"]),(0,o.renderSlot)(t.$slots,"default")],8,l)}}}},4818:(e,t,r)=>{r.d(t,{Z:()=>d});var o=r(821),n=r(2600),a=["for"],l={class:"mt-1"},i=["id","name","placeholder","type","value"],s=["id"];const d={props:{name:String,label:String,modelValue:String,id:{type:String,default:function(e){return e.name}},type:{type:String,default:"text"},placeholder:{type:String,default:""},form:{type:Object,default:function(){return{errors:{}}}},hasError:{type:Boolean,default:null},errorMessage:{type:String,default:""},help:{type:String,default:""}},emits:["update:modelValue"],setup:function(e){return function(t,r){return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.createElementVNode)("label",{for:e.id,class:"block text-sm font-semibold font-medium text-gray-700"},(0,o.toDisplayString)(e.label),9,a),(0,o.createElementVNode)("div",l,[(0,o.createElementVNode)("input",{id:e.id,class:(0,o.normalizeClass)([[e.hasError||e.form.errors[e.name]?"border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500":"focus:ring-indigo-500 focus:border-indigo-500 border-gray-300"],"block w-full sm:text-sm rounded-md shadow-sm"]),name:e.name,placeholder:e.placeholder,type:e.type,value:e.modelValue,onInput:r[0]||(r[0]=function(e){return t.$emit("update:modelValue",e.target.value)})},null,42,i)]),""!==e.help?((0,o.openBlock)(),(0,o.createElementBlock)("p",{key:0,id:"".concat(e.name,"-description"),class:"mt-2 text-sm text-gray-500"},(0,o.toDisplayString)(e.help),9,s)):(0,o.createCommentVNode)("",!0),(0,o.createVNode)((0,o.unref)(n.Q),{id:"".concat(e.name,"-error"),show:e.hasError||!!e.form.errors[e.name],as:"p",class:"mt-2 text-sm text-red-600",enter:"transition-opacity duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transition-opacity duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:(0,o.withCtx)((function(){return[(0,o.createTextVNode)((0,o.toDisplayString)(e.hasError?e.errorMessage:e.form.errors[e.name]),1)]})),_:1},8,["id","show"])],64)}}}},4444:(e,t,r)=>{r.d(t,{Z:()=>i});var o=r(821),n={class:"animate-spin -ml-1 mr-3 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},a=[(0,o.createElementVNode)("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),(0,o.createElementVNode)("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)];const l={},i=(0,r(3744).Z)(l,[["render",function(e,t){return(0,o.openBlock)(),(0,o.createElementBlock)("svg",n,a)}]])},7980:(e,t,r)=>{r.r(t),r.d(t,{default:()=>h});var o=r(821),n=r(9038),a=r(4818),l=r(5527),i=r(3758),s={class:"flex flex-col justify-center py-12 sm:px-6 lg:px-8 min-h-screen bg-gray-50 dark:bg-slate-900"},d=(0,o.createElementVNode)("div",{class:"sm:mx-auto sm:w-full sm:max-w-md"},[(0,o.createElementVNode)("h2",{class:"mt-6 text-3xl font-extrabold text-center text-gray-900 dark:text-white"}," Sign in to your account ")],-1),c={class:"sm:mx-auto mt-8 sm:w-full sm:max-w-md"},u={class:"py-8 px-4 sm:px-10 bg-white dark:bg-slate-800 sm:rounded-lg shadow"},m=(0,o.createElementVNode)("label",{for:"password",class:"block text-sm font-medium text-gray-700 dark:text-slate-300"}," Password ",-1),p={class:"mt-1"},f={class:"flex justify-between items-center"},g={class:"flex items-center"},y=(0,o.createElementVNode)("label",{for:"remember-me",class:"block ml-2 text-sm text-gray-900 dark:text-slate-300"}," Remember me ",-1),x=(0,o.createElementVNode)("div",{class:"text-sm"},[(0,o.createElementVNode)("a",{href:"#",class:"font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"}," Forgot your password? ")],-1),b=(0,o.createTextVNode)(" Sign in ");const h={props:{github:String,google:String},setup:function(e){var t=(0,n.cI)({email:null,password:null,remember:!1});return function(e,r){return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.createVNode)((0,o.unref)(i.Z),{title:"Login"}),(0,o.createElementVNode)("div",s,[d,(0,o.createElementVNode)("div",c,[(0,o.createElementVNode)("div",u,[(0,o.createElementVNode)("form",{class:"space-y-6",action:"#",onSubmit:r[3]||(r[3]=(0,o.withModifiers)((function(e){return(0,o.unref)(t).post("/login")}),["prevent"]))},[(0,o.createElementVNode)("div",null,[(0,o.createVNode)((0,o.unref)(a.Z),{modelValue:(0,o.unref)(t).email,"onUpdate:modelValue":r[0]||(r[0]=function(e){return(0,o.unref)(t).email=e}),type:"email",form:(0,o.unref)(t),label:"Email",name:"email"},null,8,["modelValue","form"])]),(0,o.createElementVNode)("div",null,[m,(0,o.createElementVNode)("div",p,[(0,o.withDirectives)((0,o.createElementVNode)("input",{id:"password","onUpdate:modelValue":r[1]||(r[1]=function(e){return(0,o.unref)(t).password=e}),name:"password",type:"password",autocomplete:"current-password",required:"",class:"block py-2 px-3 w-full sm:text-sm placeholder-gray-400 rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm appearance-none focus:outline-none"},null,512),[[o.vModelText,(0,o.unref)(t).password]])])]),(0,o.createElementVNode)("div",f,[(0,o.createElementVNode)("div",g,[(0,o.withDirectives)((0,o.createElementVNode)("input",{id:"remember-me","onUpdate:modelValue":r[2]||(r[2]=function(e){return(0,o.unref)(t).remember=e}),name:"remember-me",type:"checkbox",class:"w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500 dark:bg-slate-800 dark-border-gray-900 dark:focus:ring-indigo-900"},null,512),[[o.vModelCheckbox,(0,o.unref)(t).remember]]),y]),x]),(0,o.createElementVNode)("div",null,[(0,o.createVNode)((0,o.unref)(l.Z),{type:"submit",form:(0,o.unref)(t),class:"flex justify-center py-2 px-4 w-full"},{default:(0,o.withCtx)((function(){return[b]})),_:1},8,["form"])])],32)])])])],64)}}}}}]);