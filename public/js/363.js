"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[363],{3758:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(821);const s={components:{Head:a(9038).Fb},props:{title:String}};const l=(0,a(3744).Z)(s,[["render",function(e,t,a,s,l,o){var n=(0,r.resolveComponent)("Head");return(0,r.openBlock)(),(0,r.createBlock)(n,{title:a.title?"".concat(a.title," - ").concat(e.$page.props.app.name):e.$page.props.app.name},{default:(0,r.withCtx)((function(){return[(0,r.renderSlot)(e.$slots,"default")]})),_:3},8,["title"])}]])},9018:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(821),s=a(4444),l=a(3611);const o={props:{type:{type:String,default:"button"},processing:{type:Boolean,default:!1},color:{type:String,default:"indigo"},href:{type:String,default:null}},setup:function(e){return function(t,a){return(0,r.openBlock)(),(0,r.createBlock)((0,r.resolveDynamicComponent)(e.href?"Link":"button"),{type:e.href?null:e.type,disabled:e.href?null:e.processing,href:e.href?e.href:null,class:(0,r.normalizeClass)("inline-flex items-center py-2 px-3 text-sm font-medium leading-4 text-white bg-".concat(e.color,"-600 hover:bg-").concat(e.color,"-700 rounded-md border border-transparent focus:ring-2 focus:ring-").concat(e.color,"-500 focus:ring-offset-2 shadow-sm disabled:opacity-50 disabled:cursor-wait focus:outline-none"))},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)((0,r.unref)(l.Qm),{id:"button-spinner",show:e.processing,enter:"transition-opacity duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transition-opacity duration-300","leave-from":"opacity-100","leave-to":"opacity-0"},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)((0,r.unref)(s.Z),{class:"w-4 h-4"})]})),_:1},8,["show"]),(0,r.renderSlot)(t.$slots,"default")]})),_:3},8,["type","disabled","href","class"])}}}},7105:(e,t,a)=>{a.d(t,{Z:()=>p});var r=a(821),s={class:"border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"},l={class:"flex-1 min-w-0"},o={class:"text-lg font-medium leading-6 text-gray-900 sm:truncate"},n={class:"mt-4 flex sm:mt-0 sm:ml-4"},c={class:"px-4 mt-6 sm:px-6 lg:px-8"},d={class:"text-gray-500 text-xs font-medium uppercase tracking-wide"},m={class:"px-4 mt-6 sm:px-6 lg:px-8 max-w-screen-lg"},i={class:"align-middle inline-block min-w-full"};const p={props:{name:String,label:String,modelValue:String,id:{type:String,default:function(e){return e.name}},type:{type:String,default:"text"},placeholder:{type:String,default:""},form:{type:Object,default:function(){return{errors:{}}}},hasError:{type:Boolean,default:null},errorMessage:{type:String,default:""},help:{type:String,default:""}},emits:["update:modelValue"],setup:function(e){return function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,null,[(0,r.createElementVNode)("div",s,[(0,r.createElementVNode)("div",l,[(0,r.createElementVNode)("h1",o,[(0,r.renderSlot)(e.$slots,"header")])]),(0,r.createElementVNode)("div",n,[(0,r.renderSlot)(e.$slots,"buttons")])]),(0,r.createElementVNode)("div",c,[(0,r.createElementVNode)("h2",d,[(0,r.renderSlot)(e.$slots,"sub-header")]),(0,r.renderSlot)(e.$slots,"sub-header-content")]),(0,r.createElementVNode)("div",m,[(0,r.createElementVNode)("div",i,[(0,r.renderSlot)(e.$slots,"default")])])],64)}}}},4444:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(821),s={class:"animate-spin -ml-1 mr-3 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},l=[(0,r.createElementVNode)("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"},null,-1),(0,r.createElementVNode)("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"},null,-1)];const o={},n=(0,a(3744).Z)(o,[["render",function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("svg",s,l)}]])},2363:(e,t,a)=>{a.r(t),a.d(t,{default:()=>$a});var r=a(821),s=a(3758),l=a(7105),o=a(9018),n=a(3724),c=a(7751),d=a(9680),m={class:"relative bg-gray-100"},i={class:"py-4"},p={class:"mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:px-8"},u={class:"flex items-center space-x-5"},g=(0,r.createElementVNode)("div",{class:"flex-shrink-0"},[(0,r.createElementVNode)("div",{class:"relative"},[(0,r.createElementVNode)("img",{class:"w-16",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/1024px-WordPress_blue_logo.svg.png",alt:""})])],-1),x={class:"text-2xl font-bold text-gray-900"},y={class:"text-sm font-medium text-gray-500"},N={class:"capitalize"},V=(0,r.createTextVNode)(" for "),f={class:"lowercase"},E={class:"mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3"},b=(0,r.createElementVNode)("span",{class:"pl-2"},"Start",-1),v=(0,r.createElementVNode)("span",{class:"pl-2"},"Stop",-1),w=(0,r.createElementVNode)("span",{class:"pl-2"},"Restart",-1),h=(0,r.createElementVNode)("span",{class:"pl-2"},"WP CLI",-1),k=(0,r.createElementVNode)("span",{class:"pl-2"},"Backup",-1),S={class:"mt-8 mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:grid-flow-col-dense lg:grid-cols-3"},D={class:"space-y-6 lg:col-start-1 lg:col-span-2"},C={"aria-labelledby":"wordpress-information"},B={class:"bg-white shadow sm:rounded-lg"},T=(0,r.createElementVNode)("div",{class:"px-4 py-5 sm:px-6"},[(0,r.createElementVNode)("h2",{id:"wordpress-information",class:"text-lg leading-6 font-medium text-gray-900"}," Container Information "),(0,r.createElementVNode)("p",{class:"mt-1 max-w-2xl text-sm text-gray-500"}," This information is provided by the container. ")],-1),P={class:"border-t border-gray-200 px-4 py-5 sm:px-6"},j={class:"grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2"},I={class:"sm:col-span-1"},_=(0,r.createElementVNode)("dt",{class:"text-sm font-medium text-gray-500 truncate"}," Name ",-1),Z={class:"mt-1 text-sm text-gray-900 truncate"},F={class:"sm:col-span-1"},L=(0,r.createElementVNode)("dt",{class:"text-sm font-medium text-gray-500 truncate"}," ID ",-1),$={class:"mt-1 text-sm text-gray-900 truncate"},z={class:"sm:col-span-1"},W=(0,r.createElementVNode)("dt",{class:"text-sm font-medium text-gray-500 truncate"}," Image ",-1),M={class:"mt-1 text-sm text-gray-900 truncate"},H={class:"sm:col-span-1"},O=(0,r.createElementVNode)("dt",{class:"text-sm font-medium text-gray-500 truncate"}," Image ID ",-1),q={class:"mt-1 text-sm text-gray-900 truncate"},G={class:"sm:col-span-1"},J={class:"text-sm font-medium text-gray-500 truncate"},Q=(0,r.createTextVNode)(" Command "),R={class:"mt-1 text-sm text-gray-900 truncate"},U={class:"sm:col-span-1"},X={class:"text-sm font-medium text-gray-500 truncate"},A=(0,r.createTextVNode)(" Created "),K={class:"mt-1 text-sm text-gray-900 truncate"},Y={class:"sm:col-span-1"},ee={class:"text-sm font-medium text-gray-500 truncate"},te=(0,r.createTextVNode)(" Public Port "),ae={class:"mt-1 text-sm text-gray-900 truncate"},re={key:1,class:"text-red-500"},se={class:"sm:col-span-1"},le={class:"text-sm font-medium text-gray-500 truncate"},oe=(0,r.createTextVNode)(" Private Port "),ne={class:"mt-1 text-sm text-gray-900 truncate"},ce={key:1,class:"text-red-500"},de={class:"sm:col-span-1"},me=(0,r.createElementVNode)("dt",{class:"text-sm font-medium text-gray-500 truncate"}," State ",-1),ie={class:"mt-1 text-sm text-gray-900 truncate"},pe={class:"sm:col-span-1"},ue={class:"text-sm font-medium text-gray-500 truncate"},ge=(0,r.createTextVNode)(" Status "),xe={class:"mt-1 text-sm text-gray-900 truncate"},ye={"aria-labelledby":"container-labels"},Ne={class:"bg-white shadow sm:rounded-lg"},Ve=(0,r.createElementVNode)("div",{class:"px-4 py-5 sm:px-6"},[(0,r.createElementVNode)("h2",{id:"container-labels",class:"text-lg leading-6 font-medium text-gray-900"}," Container Information "),(0,r.createElementVNode)("p",{class:"mt-1 max-w-2xl text-sm text-gray-500"}," The labels of the container. ")],-1),fe={key:0,class:"border-t border-gray-200 px-4 py-5 sm:px-6"},Ee={class:"grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2"},be={class:"sm:col-span-1"},ve=(0,r.createElementVNode)("dt",{class:"text-sm font-medium text-gray-500 truncate"}," Compose Project (com.docker.compose.project) ",-1),we={class:"mt-1 text-sm text-gray-900 truncate"},he={class:"sm:col-span-1"},ke=(0,r.createElementVNode)("dt",{class:"text-sm font-medium text-gray-500 truncate"}," Working directory (com.docker.compose.project.working_dir) ",-1),Se={class:"mt-1 text-sm text-gray-900 truncate"},De={class:"sm:col-span-1"},Ce=(0,r.createElementVNode)("dt",{class:"text-sm font-medium text-gray-500 truncate"}," Compose Service (com.docker.compose.service) ",-1),Be={class:"mt-1 text-sm text-gray-900 truncate"},Te={class:"sm:col-span-1"},Pe=(0,r.createElementVNode)("dt",{class:"text-sm font-medium text-gray-500 truncate"}," Traefik (traefik.enable) ",-1),je={class:"mt-1 text-sm text-gray-900 truncate"},Ie={class:"sm:col-span-1"},_e=(0,r.createElementVNode)("dt",{class:"text-sm font-medium text-gray-500 truncate"}," Source ",-1),Ze={class:"mt-1 text-sm text-gray-900 truncate"},Fe={class:"sm:col-span-1"},Le=(0,r.createElementVNode)("dt",{class:"text-sm font-medium text-gray-500 truncate"}," Target ",-1),$e={class:"mt-1 text-sm text-gray-900 truncate"},ze={class:"sm:col-span-1"},We=(0,r.createElementVNode)("dt",{class:"text-sm font-medium text-gray-500 truncate"}," Secure Entry Point ",-1),Me={class:"mt-1 text-sm text-gray-900 truncate"},He={class:"sm:col-span-1"},Oe=(0,r.createElementVNode)("dt",{class:"text-sm font-medium text-gray-500 truncate"}," TLS enabled ",-1),qe={class:"mt-1 text-sm text-gray-900 truncate"},Ge={class:"sm:col-span-1"},Je=(0,r.createElementVNode)("dt",{class:"text-sm font-medium text-gray-500 truncate"}," Rule ",-1),Qe={class:"mt-1 text-sm text-gray-900 truncate"},Re={class:"sm:col-span-1"},Ue={class:"text-sm font-medium text-gray-500 truncate"},Xe=(0,r.createTextVNode)(" Load Balancer Port "),Ae={class:"mt-1 text-sm text-gray-900 truncate"},Ke={"aria-labelledby":"database-timeline",class:"lg:col-start-3 lg:col-span-1"},Ye={class:"bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6"},et=(0,r.createElementVNode)("h2",{id:"database-timeline",class:"text-lg font-medium text-gray-900"}," Timeline ",-1),tt={class:"mt-6 flow-root"},at={role:"list",class:"-mb-8"},rt={class:"relative pb-8"},st={key:0,class:"absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200","aria-hidden":"true"},lt={class:"relative flex space-x-3"},ot={class:"min-w-0 flex-1 pt-1.5 flex justify-between space-x-4"},nt={class:"text-sm text-gray-500"},ct={href:"#",class:"font-medium text-gray-900"},dt={class:"text-right text-sm whitespace-nowrap text-gray-500"},mt=["datetime"],it={class:"relative bg-gray-100"},pt={class:"py-4"},ut={class:"mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:px-8"},gt={class:"flex items-center space-x-5"},xt=(0,r.createElementVNode)("div",{class:"flex-shrink-0"},[(0,r.createElementVNode)("div",{class:"relative"},[(0,r.createElementVNode)("img",{class:"w-16",src:"https://www.mysql.com/common/logos/logo-mysql-170x115.png",alt:""})])],-1),yt={class:"text-2xl font-bold text-gray-900"},Nt={class:"text-sm font-medium text-gray-500"},Vt={class:"capitalize"},ft=(0,r.createTextVNode)(" for "),Et={class:"lowercase"},bt={class:"mt-8 mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:grid-flow-col-dense lg:grid-cols-3"},vt={class:"space-y-6 lg:col-start-1 lg:col-span-2"},wt={"aria-labelledby":"container-information"},ht={class:"bg-white shadow sm:rounded-lg"},kt=(0,r.createElementVNode)("div",{class:"px-4 py-5 sm:px-6"},[(0,r.createElementVNode)("h2",{id:"container-information",class:"text-lg leading-6 font-medium text-gray-900"}," Container Information "),(0,r.createElementVNode)("p",{class:"mt-1 max-w-2xl text-sm text-gray-500"}," This information is provided by the container. ")],-1),St={class:"border-t border-gray-200 px-4 py-5 sm:px-6"},Dt={class:"grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2"},Ct={class:"sm:col-span-1"},Bt=(0,r.createElementVNode)("dt",{class:"text-sm font-medium text-gray-500 truncate"}," Name ",-1),Tt={class:"mt-1 text-sm text-gray-900 truncate"},Pt={class:"sm:col-span-1"},jt=(0,r.createElementVNode)("dt",{class:"text-sm font-medium text-gray-500 truncate"}," ID ",-1),It={class:"mt-1 text-sm text-gray-900 truncate"},_t={class:"sm:col-span-1"},Zt=(0,r.createElementVNode)("dt",{class:"text-sm font-medium text-gray-500 truncate"}," Image ",-1),Ft={class:"mt-1 text-sm text-gray-900 truncate"},Lt={class:"sm:col-span-1"},$t=(0,r.createElementVNode)("dt",{class:"text-sm font-medium text-gray-500 truncate"}," Image ID ",-1),zt={class:"mt-1 text-sm text-gray-900 truncate"},Wt={class:"sm:col-span-1"},Mt={class:"text-sm font-medium text-gray-500 truncate"},Ht=(0,r.createTextVNode)(" Command "),Ot={class:"mt-1 text-sm text-gray-900 truncate"},qt={class:"sm:col-span-1"},Gt={class:"text-sm font-medium text-gray-500 truncate"},Jt=(0,r.createTextVNode)(" Created "),Qt={class:"mt-1 text-sm text-gray-900 truncate"},Rt={class:"sm:col-span-1"},Ut={class:"text-sm font-medium text-gray-500 truncate"},Xt=(0,r.createTextVNode)(" Public Port "),At={class:"mt-1 text-sm text-gray-900 truncate"},Kt={key:1,class:"text-red-500"},Yt={class:"sm:col-span-1"},ea={class:"text-sm font-medium text-gray-500 truncate"},ta=(0,r.createTextVNode)(" Private Port "),aa={class:"mt-1 text-sm text-gray-900 truncate"},ra={key:1,class:"text-red-500"},sa={class:"sm:col-span-1"},la=(0,r.createElementVNode)("dt",{class:"text-sm font-medium text-gray-500 truncate"}," State ",-1),oa={class:"mt-1 text-sm text-gray-900 truncate"},na={class:"sm:col-span-1"},ca={class:"text-sm font-medium text-gray-500 truncate"},da=(0,r.createTextVNode)(" Status "),ma={class:"mt-1 text-sm text-gray-900 truncate"},ia={"aria-labelledby":"container-labels"},pa={class:"bg-white shadow sm:rounded-lg"},ua=(0,r.createElementVNode)("div",{class:"px-4 py-5 sm:px-6"},[(0,r.createElementVNode)("h2",{id:"database-labels",class:"text-lg leading-6 font-medium text-gray-900"}," Container Labels "),(0,r.createElementVNode)("p",{class:"mt-1 max-w-2xl text-sm text-gray-500"}," The labels of the container. ")],-1),ga={key:0,class:"border-t border-gray-200 px-4 py-5 sm:px-6"},xa={class:"grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2"},ya={class:"sm:col-span-1"},Na=(0,r.createElementVNode)("dt",{class:"text-sm font-medium text-gray-500 truncate"}," Compose Project (com.docker.compose.project) ",-1),Va={class:"mt-1 text-sm text-gray-900 truncate"},fa={class:"sm:col-span-1"},Ea=(0,r.createElementVNode)("dt",{class:"text-sm font-medium text-gray-500 truncate"}," Working directory (com.docker.compose.project.working_dir) ",-1),ba={class:"mt-1 text-sm text-gray-900 truncate"},va={class:"sm:col-span-1"},wa=(0,r.createElementVNode)("dt",{class:"text-sm font-medium text-gray-500 truncate"}," Compose Service (com.docker.compose.service) ",-1),ha={class:"mt-1 text-sm text-gray-900 truncate"},ka={"aria-labelledby":"timeline-title",class:"lg:col-start-3 lg:col-span-1"},Sa={class:"bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6"},Da=(0,r.createElementVNode)("h2",{id:"timeline-title",class:"text-lg font-medium text-gray-900"}," Timeline ",-1),Ca={class:"mt-6 flow-root"},Ba={role:"list",class:"-mb-8"},Ta={class:"relative pb-8"},Pa={key:0,class:"absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200","aria-hidden":"true"},ja={class:"relative flex space-x-3"},Ia={class:"min-w-0 flex-1 pt-1.5 flex justify-between space-x-4"},_a={class:"text-sm text-gray-500"},Za={href:"#",class:"font-medium text-gray-900"},Fa={class:"text-right text-sm whitespace-nowrap text-gray-500"},La=["datetime"];const $a={props:{record:Object,wordpress:Object,database:Object,state:String},setup:function(e){var t=e,a={applied:{icon:n.tBG,bgColorClass:"bg-gray-400"},advanced:{icon:n.Z7j,bgColorClass:"bg-blue-500"},completed:{icon:n.nQG,bgColorClass:"bg-green-500"}},$a=[{id:1,type:a.applied,content:"Created",target:"WordPress Container",date:"Sep 20",datetime:"2020-09-20"},{id:2,type:a.advanced,content:"Installed themes and plugins",target:"WP-CLI",date:"Sep 22",datetime:"2020-09-22"},{id:3,type:a.completed,content:"Created and up and running",target:"Docker",date:"Sep 28",datetime:"2020-09-28"}],za=t.state,Wa=(0,r.ref)(!1),Ma=function(){Wa.value=!0,d.Inertia.post("/dashboard/sites/".concat(t.record.data.id,"/start"))},Ha=function(){Wa.value=!0,d.Inertia.post("/dashboard/sites/".concat(t.record.data.id,"/stop"))},Oa=function(){Wa.value=!0,d.Inertia.post("/dashboard/sites/".concat(t.record.data.id,"/restart"))},qa=setInterval((function(){d.Inertia.reload({preserveState:!0,preserveScroll:!0,onSuccess:function(e){Wa.value&&e.props.state!==za&&(Wa.value=!1,za=e.props.state)}})}),1e4);return(0,r.onBeforeUnmount)((function(){clearInterval(qa)})),function(t,a){var d=(0,r.resolveComponent)("Link");return(0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,null,[(0,r.createVNode)((0,r.unref)(s.Z),{title:"Sites"}),(0,r.createVNode)((0,r.unref)(l.Z),null,{header:(0,r.withCtx)((function(){return[(0,r.createTextVNode)("Details - "+(0,r.toDisplayString)(e.record.data.name),1)]})),default:(0,r.withCtx)((function(){return[(0,r.createElementVNode)("div",m,[(0,r.createElementVNode)("main",i,[(0,r.createElementVNode)("div",p,[(0,r.createElementVNode)("div",u,[g,(0,r.createElementVNode)("div",null,[(0,r.createElementVNode)("h1",x,(0,r.toDisplayString)(e.wordpress.name),1),(0,r.createElementVNode)("p",y,[(0,r.createElementVNode)("span",N,(0,r.toDisplayString)(e.wordpress.state),1),V,(0,r.createElementVNode)("span",f,(0,r.toDisplayString)(e.wordpress.status),1),(0,r.createTextVNode)(" from "+(0,r.toDisplayString)(e.wordpress.created),1)])])]),(0,r.createElementVNode)("div",E,["running"!==e.state?((0,r.openBlock)(),(0,r.createBlock)((0,r.unref)(o.Z),{key:0,processing:Wa.value,color:"green",onClick:(0,r.withModifiers)(Ma,["prevent"])},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)((0,r.unref)(c.o1U),{class:"w-4 h-4"}),b]})),_:1},8,["processing","onClick"])):(0,r.createCommentVNode)("",!0),"running"===e.state?((0,r.openBlock)(),(0,r.createBlock)((0,r.unref)(o.Z),{key:1,processing:Wa.value,color:"red",onClick:(0,r.withModifiers)(Ha,["prevent"])},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)((0,r.unref)(c.wNq),{class:"w-4 h-4"}),v]})),_:1},8,["processing","onClick"])):(0,r.createCommentVNode)("",!0),(0,r.createVNode)((0,r.unref)(o.Z),{processing:Wa.value,color:"orange",onClick:(0,r.withModifiers)(Oa,["prevent"])},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)((0,r.unref)(c.DuK),{class:"w-4 h-4"}),w]})),_:1},8,["processing","onClick"]),(0,r.createVNode)(d,{as:"button",href:"/dashboard/sites/".concat(e.record.data.id,"/cli"),type:"button",class:"inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)((0,r.unref)(c.FxN),{class:"w-4 h-4"}),h]})),_:1},8,["href"]),(0,r.createElementVNode)("button",{type:"button",class:"inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500",onClick:a[0]||(a[0]=(0,r.withModifiers)((function(){return t.backup&&t.backup.apply(t,arguments)}),["prevent"]))},[(0,r.createVNode)((0,r.unref)(c.VHe),{class:"w-4 h-4"}),k])])]),(0,r.createElementVNode)("div",S,[(0,r.createElementVNode)("div",D,[(0,r.createElementVNode)("section",C,[(0,r.createElementVNode)("div",B,[T,(0,r.createElementVNode)("div",P,[(0,r.createElementVNode)("dl",j,[(0,r.createElementVNode)("div",I,[_,(0,r.createElementVNode)("dd",Z,(0,r.toDisplayString)(e.wordpress.name),1)]),(0,r.createElementVNode)("div",F,[L,(0,r.createElementVNode)("dd",$,(0,r.toDisplayString)(e.wordpress.id),1)]),(0,r.createElementVNode)("div",z,[W,(0,r.createElementVNode)("dd",M,(0,r.toDisplayString)(e.wordpress.image),1)]),(0,r.createElementVNode)("div",H,[O,(0,r.createElementVNode)("dd",q,(0,r.toDisplayString)(e.wordpress.imageId),1)]),(0,r.createElementVNode)("div",G,[(0,r.createElementVNode)("dt",J,[(0,r.createVNode)((0,r.unref)(n.FxN),{class:"inline-block h-4 w-4 text-gray-400"}),Q]),(0,r.createElementVNode)("dd",R,(0,r.toDisplayString)(e.wordpress.command),1)]),(0,r.createElementVNode)("div",U,[(0,r.createElementVNode)("dt",X,[(0,r.createVNode)((0,r.unref)(n.T39),{class:"inline-block h-4 w-4 text-gray-400"}),A]),(0,r.createElementVNode)("dd",K,(0,r.toDisplayString)(e.wordpress.created),1)]),(0,r.createElementVNode)("div",Y,[(0,r.createElementVNode)("dt",ee,[(0,r.createVNode)((0,r.unref)(n.n9J),{class:"inline-block h-4 w-4 text-gray-400"}),te]),(0,r.createElementVNode)("dd",ae,[e.wordpress.publicPort?((0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,{key:0},[(0,r.createTextVNode)((0,r.toDisplayString)(e.wordpress.publicPort.port)+" ("+(0,r.toDisplayString)(e.wordpress.publicPort.type)+") ",1)],64)):((0,r.openBlock)(),(0,r.createElementBlock)("span",re,"Not exposed"))])]),(0,r.createElementVNode)("div",se,[(0,r.createElementVNode)("dt",le,[(0,r.createVNode)((0,r.unref)(n.Xl7),{class:"inline-block h-4 w-4 text-gray-400"}),oe]),(0,r.createElementVNode)("dd",ne,[e.wordpress.privatePort?((0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,{key:0},[(0,r.createTextVNode)((0,r.toDisplayString)(e.wordpress.privatePort.port)+" ("+(0,r.toDisplayString)(e.wordpress.publicPort.type)+") ",1)],64)):((0,r.openBlock)(),(0,r.createElementBlock)("span",ce,"Not exposed"))])]),(0,r.createElementVNode)("div",de,[me,(0,r.createElementVNode)("dd",ie,[(0,r.createVNode)((0,r.unref)(n.gV),{class:"inline-block h-4 w-4 text-green-400"}),(0,r.createTextVNode)(" "+(0,r.toDisplayString)(e.wordpress.state),1)])]),(0,r.createElementVNode)("div",pe,[(0,r.createElementVNode)("dt",ue,[(0,r.createVNode)((0,r.unref)(n.T39),{class:"inline-block h-4 w-4 text-gray-400"}),ge]),(0,r.createElementVNode)("dd",xe,(0,r.toDisplayString)(e.wordpress.status),1)])])])])]),(0,r.createElementVNode)("section",ye,[(0,r.createElementVNode)("div",Ne,[Ve,e.wordpress.labels?((0,r.openBlock)(),(0,r.createElementBlock)("div",fe,[(0,r.createElementVNode)("dl",Ee,[(0,r.createElementVNode)("div",be,[ve,(0,r.createElementVNode)("dd",we,(0,r.toDisplayString)(e.wordpress.labels["com.docker.compose.project"]),1)]),(0,r.createElementVNode)("div",he,[ke,(0,r.createElementVNode)("dd",Se,(0,r.toDisplayString)(e.wordpress.labels["com.docker.compose.project.working_dir"]),1)]),(0,r.createElementVNode)("div",De,[Ce,(0,r.createElementVNode)("dd",Be,(0,r.toDisplayString)(e.wordpress.labels["com.docker.compose.service"]),1)]),(0,r.createElementVNode)("div",Te,[Pe,(0,r.createElementVNode)("dd",je,(0,r.toDisplayString)("true"===e.wordpress.labels["traefik.enable"]?"Enabled":"Disabled"),1)]),(0,r.createElementVNode)("div",Ie,[_e,(0,r.createElementVNode)("dd",Ze,(0,r.toDisplayString)(e.wordpress.labels["desktop.docker.io/binds/0/Source"]),1)]),(0,r.createElementVNode)("div",Fe,[Le,(0,r.createElementVNode)("dd",$e,(0,r.toDisplayString)(e.wordpress.labels["desktop.docker.io/binds/0/Target"]),1)]),(0,r.createElementVNode)("div",ze,[We,(0,r.createElementVNode)("dd",Me,(0,r.toDisplayString)(e.wordpress.labels["traefik.http.routers."+e.record.data.name+"-secure.entrypoints"]),1)]),(0,r.createElementVNode)("div",He,[Oe,(0,r.createElementVNode)("dd",qe,(0,r.toDisplayString)("true"===e.wordpress.labels["traefik.http.routers."+e.record.data.name+"-secure.tls"]?"Enabled":"Disabled"),1)]),(0,r.createElementVNode)("div",Ge,[Je,(0,r.createElementVNode)("dd",Qe,(0,r.toDisplayString)(e.wordpress.labels["traefik.http.routers."+e.record.data.name+".rule"]),1)]),(0,r.createElementVNode)("div",Re,[(0,r.createElementVNode)("dt",Ue,[(0,r.createVNode)((0,r.unref)(n.T39),{class:"inline-block h-4 w-4 text-gray-400"}),Xe]),(0,r.createElementVNode)("dd",Ae,(0,r.toDisplayString)(e.wordpress.labels["traefik.http.services."+e.record.data.name+".loadbalancer.server.port"]),1)])])])):(0,r.createCommentVNode)("",!0)])])]),(0,r.createElementVNode)("section",Ke,[(0,r.createElementVNode)("div",Ye,[et,(0,r.createElementVNode)("div",tt,[(0,r.createElementVNode)("ul",at,[((0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)($a,(function(e,t){return(0,r.createElementVNode)("li",{key:e.id},[(0,r.createElementVNode)("div",rt,[t!==$a.length-1?((0,r.openBlock)(),(0,r.createElementBlock)("span",st)):(0,r.createCommentVNode)("",!0),(0,r.createElementVNode)("div",lt,[(0,r.createElementVNode)("div",null,[(0,r.createElementVNode)("span",{class:(0,r.normalizeClass)([e.type.bgColorClass,"h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white"])},[((0,r.openBlock)(),(0,r.createBlock)((0,r.resolveDynamicComponent)(e.type.icon),{class:"w-5 h-5 text-white","aria-hidden":"true"}))],2)]),(0,r.createElementVNode)("div",ot,[(0,r.createElementVNode)("div",null,[(0,r.createElementVNode)("p",nt,[(0,r.createTextVNode)((0,r.toDisplayString)(e.content)+" ",1),(0,r.createElementVNode)("a",ct,(0,r.toDisplayString)(e.target),1)])]),(0,r.createElementVNode)("div",dt,[(0,r.createElementVNode)("time",{datetime:e.datetime},(0,r.toDisplayString)(e.date),9,mt)])])])])])})),64))])])])])])])]),(0,r.createElementVNode)("div",it,[(0,r.createElementVNode)("main",pt,[(0,r.createElementVNode)("div",ut,[(0,r.createElementVNode)("div",gt,[xt,(0,r.createElementVNode)("div",null,[(0,r.createElementVNode)("h1",yt,(0,r.toDisplayString)(e.database.name),1),(0,r.createElementVNode)("p",Nt,[(0,r.createElementVNode)("span",Vt,(0,r.toDisplayString)(e.database.state),1),ft,(0,r.createElementVNode)("span",Et,(0,r.toDisplayString)(e.database.status),1),(0,r.createTextVNode)(" from "+(0,r.toDisplayString)(e.database.created),1)])])])]),(0,r.createElementVNode)("div",bt,[(0,r.createElementVNode)("div",vt,[(0,r.createElementVNode)("section",wt,[(0,r.createElementVNode)("div",ht,[kt,(0,r.createElementVNode)("div",St,[(0,r.createElementVNode)("dl",Dt,[(0,r.createElementVNode)("div",Ct,[Bt,(0,r.createElementVNode)("dd",Tt,(0,r.toDisplayString)(e.database.name),1)]),(0,r.createElementVNode)("div",Pt,[jt,(0,r.createElementVNode)("dd",It,(0,r.toDisplayString)(e.database.id),1)]),(0,r.createElementVNode)("div",_t,[Zt,(0,r.createElementVNode)("dd",Ft,(0,r.toDisplayString)(e.database.image),1)]),(0,r.createElementVNode)("div",Lt,[$t,(0,r.createElementVNode)("dd",zt,(0,r.toDisplayString)(e.database.imageId),1)]),(0,r.createElementVNode)("div",Wt,[(0,r.createElementVNode)("dt",Mt,[(0,r.createVNode)((0,r.unref)(n.FxN),{class:"inline-block h-4 w-4 text-gray-400"}),Ht]),(0,r.createElementVNode)("dd",Ot,(0,r.toDisplayString)(e.database.command),1)]),(0,r.createElementVNode)("div",qt,[(0,r.createElementVNode)("dt",Gt,[(0,r.createVNode)((0,r.unref)(n.T39),{class:"inline-block h-4 w-4 text-gray-400"}),Jt]),(0,r.createElementVNode)("dd",Qt,(0,r.toDisplayString)(e.database.created),1)]),(0,r.createElementVNode)("div",Rt,[(0,r.createElementVNode)("dt",Ut,[(0,r.createVNode)((0,r.unref)(n.n9J),{class:"inline-block h-4 w-4 text-gray-400"}),Xt]),(0,r.createElementVNode)("dd",At,[e.database.publicPort?((0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,{key:0},[(0,r.createTextVNode)((0,r.toDisplayString)(e.database.publicPort.port)+" ("+(0,r.toDisplayString)(e.database.publicPort.type)+") ",1)],64)):((0,r.openBlock)(),(0,r.createElementBlock)("span",Kt,"Not exposed"))])]),(0,r.createElementVNode)("div",Yt,[(0,r.createElementVNode)("dt",ea,[(0,r.createVNode)((0,r.unref)(n.Xl7),{class:"inline-block h-4 w-4 text-gray-400"}),ta]),(0,r.createElementVNode)("dd",aa,[e.database.privatePort?((0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,{key:0},[(0,r.createTextVNode)((0,r.toDisplayString)(e.database.privatePort.port)+" ("+(0,r.toDisplayString)(e.database.publicPort.type)+") ",1)],64)):((0,r.openBlock)(),(0,r.createElementBlock)("span",ra,"Not exposed"))])]),(0,r.createElementVNode)("div",sa,[la,(0,r.createElementVNode)("dd",oa,[(0,r.createVNode)((0,r.unref)(n.gV),{class:"inline-block h-4 w-4 text-green-400"}),(0,r.createTextVNode)(" "+(0,r.toDisplayString)(e.database.state),1)])]),(0,r.createElementVNode)("div",na,[(0,r.createElementVNode)("dt",ca,[(0,r.createVNode)((0,r.unref)(n.T39),{class:"inline-block h-4 w-4 text-gray-400"}),da]),(0,r.createElementVNode)("dd",ma,(0,r.toDisplayString)(e.database.status),1)])])])])]),(0,r.createElementVNode)("section",ia,[(0,r.createElementVNode)("div",pa,[ua,e.database.labels?((0,r.openBlock)(),(0,r.createElementBlock)("div",ga,[(0,r.createElementVNode)("dl",xa,[(0,r.createElementVNode)("div",ya,[Na,(0,r.createElementVNode)("dd",Va,(0,r.toDisplayString)(e.database.labels["com.docker.compose.project"]),1)]),(0,r.createElementVNode)("div",fa,[Ea,(0,r.createElementVNode)("dd",ba,(0,r.toDisplayString)(e.database.labels["com.docker.compose.project.working_dir"]),1)]),(0,r.createElementVNode)("div",va,[wa,(0,r.createElementVNode)("dd",ha,(0,r.toDisplayString)(e.database.labels["com.docker.compose.service"]),1)])])])):(0,r.createCommentVNode)("",!0)])])]),(0,r.createElementVNode)("section",ka,[(0,r.createElementVNode)("div",Sa,[Da,(0,r.createElementVNode)("div",Ca,[(0,r.createElementVNode)("ul",Ba,[((0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)($a,(function(e,t){return(0,r.createElementVNode)("li",{key:e.id},[(0,r.createElementVNode)("div",Ta,[t!==$a.length-1?((0,r.openBlock)(),(0,r.createElementBlock)("span",Pa)):(0,r.createCommentVNode)("",!0),(0,r.createElementVNode)("div",ja,[(0,r.createElementVNode)("div",null,[(0,r.createElementVNode)("span",{class:(0,r.normalizeClass)([e.type.bgColorClass,"h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white"])},[((0,r.openBlock)(),(0,r.createBlock)((0,r.resolveDynamicComponent)(e.type.icon),{class:"w-5 h-5 text-white","aria-hidden":"true"}))],2)]),(0,r.createElementVNode)("div",Ia,[(0,r.createElementVNode)("div",null,[(0,r.createElementVNode)("p",_a,[(0,r.createTextVNode)((0,r.toDisplayString)(e.content)+" ",1),(0,r.createElementVNode)("a",Za,(0,r.toDisplayString)(e.target),1)])]),(0,r.createElementVNode)("div",Fa,[(0,r.createElementVNode)("time",{datetime:e.datetime},(0,r.toDisplayString)(e.date),9,La)])])])])])})),64))])])])])])])])]})),_:1})],64)}}}}}]);