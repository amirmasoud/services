import{v as i,c as l,a as r,d as e,F as p,o as u,e as n,b as s,u as a,w as _}from"./app-af0d2e3f.js";import{A as c}from"./AppHead-a2ee64e0.js";import{_ as f}from"./DashboardMain-021d9217.js";import{_ as h}from"./ButtonForm-8e366279.js";import{_ as b}from"./InputForm-ca919d94.js";import"./_plugin-vue_export-helper-c27b6911.js";const v={class:"overflow-hidden sm:rounded-md shadow"},w={class:"sm:p-6 py-5 px-4 bg-white"},V={class:"grid grid-cols-6 gap-6"},g={class:"col-span-6 sm:col-span-4"},$={class:"col-span-6 sm:col-span-4"},F={__name:"Create",setup(x){let o=i({name:null});return(d,t)=>(u(),l(p,null,[r(c,{title:"Create new user"}),r(f,null,{header:e(()=>[n("Create a new permission")]),buttons:e(()=>[]),"sub-header":e(()=>[]),"sub-header-content":e(()=>[]),default:e(()=>[s("form",{onSubmit:t[1]||(t[1]=_(m=>a(o).post(d.$route("dashboard.users.permissions.store")),["prevent"]))},[s("div",v,[s("div",w,[s("div",V,[s("div",g,[r(b,{modelValue:a(o).name,"onUpdate:modelValue":t[0]||(t[0]=m=>a(o).name=m),form:a(o),label:"Name",name:"name"},null,8,["modelValue","form"])]),s("div",$,[r(h,{form:a(o),type:"submit"},{default:e(()=>[n("Submit")]),_:1},8,["form"])])])])])],32)]),_:1})],64))}};export{F as default};
