import{v as m,c as i,a as t,b as o,w as d,u as s,d as n,o as p,e as f}from"./app-af0d2e3f.js";import{A as u}from"./AppHead-a2ee64e0.js";import{_ as c}from"./ButtonForm-8e366279.js";import{_}from"./InputForm-ca919d94.js";import"./_plugin-vue_export-helper-c27b6911.js";const w={class:"min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"},x={class:"max-w-md w-full space-y-8"},h={__name:"ForgotPassword",setup(b){let e=m({email:null});return(r,a)=>(p(),i("section",null,[t(u,{title:"Login"}),o("div",w,[o("div",x,[o("form",{class:"mt-8 space-y-6",onSubmit:a[1]||(a[1]=d(l=>s(e).post(r.$route("password.request")),["prevent"]))},[t(_,{modelValue:s(e).email,"onUpdate:modelValue":a[0]||(a[0]=l=>s(e).email=l),form:s(e),label:"Email address",name:"email",placeholder:"Email address",type:"email"},null,8,["modelValue","form"]),o("div",null,[t(c,{disabled:s(e).processing,form:s(e),type:"submit"},{default:n(()=>[f(" Reset Password ")]),_:1},8,["disabled","form"])])],32)])])]))}};export{h as default};
