import{v as n,c as i,a as l,b as r,w as p,u as o,d as u,o as f,e as w}from"./app-af0d2e3f.js";import{A as V}from"./AppHead-a2ee64e0.js";import{_ as c}from"./ButtonForm-8e366279.js";import{_ as t}from"./InputForm-ca919d94.js";import"./_plugin-vue_export-helper-c27b6911.js";const y={class:"min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"},_={class:"max-w-md w-full space-y-8"},U={__name:"ResetPassword",props:{token:{type:String,required:!0}},setup(d){let e=n({email:null,password:null,password_confirmation:null,token:d.token});return(m,s)=>(f(),i("section",null,[l(V,{title:"Login"}),r("div",y,[r("div",_,[r("form",{class:"mt-8 space-y-6",onSubmit:s[4]||(s[4]=p(a=>o(e).post(m.$route("password.update")),["prevent"]))},[l(t,{modelValue:o(e).email,"onUpdate:modelValue":s[0]||(s[0]=a=>o(e).email=a),form:o(e),label:"Email address",name:"email",placeholder:"Email address",type:"email"},null,8,["modelValue","form"]),l(t,{modelValue:o(e).password,"onUpdate:modelValue":s[1]||(s[1]=a=>o(e).password=a),form:o(e),label:"Password",name:"password",placeholder:"Password",type:"password"},null,8,["modelValue","form"]),l(t,{modelValue:o(e).password_confirmation,"onUpdate:modelValue":s[2]||(s[2]=a=>o(e).password_confirmation=a),form:o(e),label:"Password confirmation",name:"password_confirmation",placeholder:"Password confirmation",type:"password"},null,8,["modelValue","form"]),l(t,{modelValue:o(e).token,"onUpdate:modelValue":s[3]||(s[3]=a=>o(e).token=a),type:"hidden"},null,8,["modelValue"]),r("div",null,[l(c,{disabled:o(e).processing,form:o(e),type:"submit"},{default:u(()=>[w(" Reset Password ")]),_:1},8,["disabled","form"])])],32)])])]))}};export{U as default};
