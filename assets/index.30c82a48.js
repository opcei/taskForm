import{r as f,c as y,a as m,m as b,u as g,o as p,b as u,d as e,w as a,v as i,t as c,e as _,f as v,g as N,h as V,p as k,i as C,j as U}from"./vendor.1619adfb.js";const x=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const d of r)if(d.type==="childList")for(const o of d.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function h(r){const d={};return r.integrity&&(d.integrity=r.integrity),r.referrerpolicy&&(d.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?d.credentials="include":r.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function t(r){if(r.ep)return;r.ep=!0;const d=h(r);fetch(r.href,d)}};x();var I=(l,s)=>{const h=l.__vccOpts||l;for(const[t,r]of s)h[t]=r;return h};const D={setup(){const l=f({lastName:"",firstName:"",middleName:"",birthDate:"",phoneNumber:"",gender:"male",groupClient:"",doctor:"",checkbox:!1,addressIndex:"",addressCountry:"",addressOblast:"",addressCity:"",addressStreet:"",addressBuilding:"",documentType:"passport",passportBatch:"",passportNumber:"",passportIssuer:"",passportDate:""}),s=y(()=>({lastName:{required:m,minLength:b(2)},firstName:{required:m,minLength:b(2)},birthDate:{required:m},phoneNumber:{required:m},groupClient:{required:m},addressCity:{required:m,minLength:b(2)},documentType:{required:m},passportDate:{required:m}})),h=g(s,l);return{state:l,v$:h}},methods:{submitForm(){this.v$.$validate(),this.v$.$error?alert("\u0424\u043E\u0440\u043C\u0430 \u0431\u044B\u043B\u0430 \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0430 \u043D\u0435\u0432\u0435\u0440\u043D\u043E."):alert("\u041D\u043E\u0432\u044B\u0439 \u043A\u043B\u0438\u0435\u043D\u0442 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u043E\u0437\u0434\u0430\u043D.")}}},n=l=>(k("data-v-2a15846e"),l=l(),C(),l),q={class:"main-block"},B={class:"form"},L=n(()=>e("h1",{class:"title-form"},"\u0424\u043E\u0440\u043C\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u041A\u043B\u0438\u0435\u043D\u0442\u0430",-1)),S={class:"form-attrebutes"},O=n(()=>e("h1",null,"\u0410\u0442\u0440\u0438\u0431\u0443\u0442\u044B \u0444\u043E\u0440\u043C\u044B",-1)),T={class:"input"},w=n(()=>e("label",{for:"input-last-name",required:""},"\u0424\u0430\u043C\u0438\u043B\u0438\u044F",-1)),M={key:0},A={class:"input"},F=n(()=>e("label",{for:"input-first-name",required:""},"\u0418\u043C\u044F",-1)),P={key:1},E={class:"input"},j=n(()=>e("label",{for:"input-middle-name"},"\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E",-1)),H={class:"input"},K=n(()=>e("label",{for:"input-birth-date",required:""},"\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F",-1)),Z={key:2},z={class:"input"},G=n(()=>e("label",{for:"input-phone-number",required:""},"\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430",-1)),J={key:3},Q={class:"input"},R=n(()=>e("label",{for:"gender"},"\u041F\u043E\u043B",-1)),W=n(()=>e("option",{value:"male"},"\u041C\u0443\u0436\u0441\u043A\u043E\u0439",-1)),X=n(()=>e("option",{value:"female"},"\u0416\u0435\u043D\u0441\u043A\u0438\u0439",-1)),Y=[W,X],$={class:"input"},ee=n(()=>e("label",{for:"group-client",required:""},"\u0413\u0440\u0443\u043F\u043F\u0430 \u043A\u043B\u0438\u0435\u043D\u0442\u0430",-1)),te=n(()=>e("option",{value:"VIP"},"VIP",-1)),se=n(()=>e("option",{value:"problematic"},"\u041F\u0440\u043E\u0431\u043B\u0435\u043C\u043D\u044B\u0439",-1)),oe=n(()=>e("option",{value:"CHI"},"\u041E\u041C\u0421",-1)),ne=[te,se,oe],ae={key:4},re={class:"input"},ie=n(()=>e("label",{for:"doctor"},"\u041B\u0435\u0447\u0430\u0449\u0438\u0439 \u0432\u0440\u0430\u0447",-1)),de=n(()=>e("option",{value:"Ivanov"},"\u0418\u0432\u0430\u043D\u043E\u0432",-1)),le=n(()=>e("option",{value:"Zaharov"},"\u0417\u0430\u0445\u0430\u0440\u043E\u0432",-1)),pe=n(()=>e("option",{value:"Chernosheva"},"\u0427\u0435\u0440\u043D\u044B\u0448\u0435\u0432\u0430",-1)),ue=[de,le,pe],me={class:"input-checkbox"},ce=n(()=>e("label",{for:"checkbox"},"\u041D\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C \u0421\u041C\u0421",-1)),_e={class:"address"},he=n(()=>e("h1",null,"\u0410\u0434\u0440\u0435\u0441",-1)),ve={class:"input"},be=n(()=>e("label",{for:"input-address-index"},"\u0418\u043D\u0434\u0435\u043A\u0441",-1)),fe={class:"input"},ye=n(()=>e("label",{for:"input-address-country"},"\u0421\u0442\u0440\u0430\u043D\u0430",-1)),ge={class:"input"},Ne=n(()=>e("label",{for:"input-address-oblast"},"\u041E\u0431\u043B\u0430\u0441\u0442\u044C",-1)),Ve={class:"input"},ke=n(()=>e("label",{for:"input-address-city",required:""},"\u0413\u043E\u0440\u043E\u0434",-1)),Ce={key:0},Ue={class:"input"},xe=n(()=>e("label",{for:"input-address-ctreet"},"\u0423\u043B\u0438\u0446\u0430",-1)),Ie={class:"input"},De=n(()=>e("label",{for:"input-address-building"},"\u0414\u043E\u043C",-1)),qe={class:"passport"},Be=n(()=>e("h1",null,"\u041F\u0430\u0441\u043F\u043E\u0440\u0442",-1)),Le={class:"input"},Se=n(()=>e("label",{for:"document-type",required:""},"\u0422\u0438\u043F \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430",-1)),Oe=n(()=>e("option",{value:"passport"},"\u041F\u0430\u0441\u043F\u043E\u0440\u0442",-1)),Te=n(()=>e("option",{value:"birth-certificate"},"\u0421\u0432\u0438\u0434\u0435\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u043E \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0438",-1)),we=n(()=>e("option",{value:"driver-license"},"\u0412\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0443\u0434\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u0435\u043D\u0438\u0435",-1)),Me=[Oe,Te,we],Ae={key:0},Fe={class:"input"},Pe=n(()=>e("label",{for:"input-passport-batch"},"\u0421\u0435\u0440\u0438\u044F",-1)),Ee={class:"input"},je=n(()=>e("label",{for:"input-passport-number"},"\u041D\u043E\u043C\u0435\u0440",-1)),He={class:"input"},Ke=n(()=>e("label",{for:"input-passport-issuer"},"\u041A\u0435\u043C \u0432\u044B\u0434\u0430\u043D",-1)),Ze={class:"input"},ze=n(()=>e("label",{for:"input-passport-date",required:""},"\u0414\u0430\u0442\u0430 \u0432\u044B\u0434\u0430\u0447\u0438",-1)),Ge={key:1};function Je(l,s,h,t,r,d){return p(),u("div",q,[e("form",B,[L,e("div",S,[O,e("div",T,[w,a(e("input",{"onUpdate:modelValue":s[0]||(s[0]=o=>t.state.lastName=o),id:"input-last-name",name:"\u0424\u0430\u043C\u0438\u043B\u0438\u044F"},null,512),[[i,t.state.lastName]])]),t.v$.lastName.$error?(p(),u("span",M,c(t.v$.lastName.$errors[0].$message),1)):_("",!0),e("div",A,[F,a(e("input",{"onUpdate:modelValue":s[1]||(s[1]=o=>t.state.firstName=o),id:"input-first-name",name:"\u0418\u043C\u044F"},null,512),[[i,t.state.firstName]])]),t.v$.firstName.$error?(p(),u("span",P,c(t.v$.firstName.$errors[0].$message),1)):_("",!0),e("div",E,[j,a(e("input",{"onUpdate:modelValue":s[2]||(s[2]=o=>t.state.middleName=o),id:"input-middle-name",name:"\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E"},null,512),[[i,t.state.middleName]])]),e("div",H,[K,a(e("input",{"onUpdate:modelValue":s[3]||(s[3]=o=>t.state.birthDate=o),id:"input-birth-date",name:"\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F",placeholder:"\u0414\u0414.\u041C\u041C.\u0413\u0413\u0413\u0413"},null,512),[[i,t.state.birthDate]])]),t.v$.birthDate.$error?(p(),u("span",Z,c(t.v$.birthDate.$errors[0].$message),1)):_("",!0),e("div",z,[G,a(e("input",{"onUpdate:modelValue":s[4]||(s[4]=o=>t.state.phoneNumber=o),id:"input-phone-number",name:"\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430"},null,512),[[i,t.state.phoneNumber]])]),t.v$.phoneNumber.$error?(p(),u("span",J,c(t.v$.phoneNumber.$errors[0].$message),1)):_("",!0),e("div",Q,[R,a(e("select",{"onUpdate:modelValue":s[5]||(s[5]=o=>t.state.gender=o),name:"gender",id:"gender"},Y,512),[[v,t.state.gender]])]),e("div",$,[ee,a(e("select",{"onUpdate:modelValue":s[6]||(s[6]=o=>t.state.groupClient=o),name:"group-client",id:"group-client"},ne,512),[[v,t.state.groupClient]])]),t.v$.groupClient.$error?(p(),u("span",ae,c(t.v$.groupClient.$errors[0].$message),1)):_("",!0),e("div",re,[ie,a(e("select",{"onUpdate:modelValue":s[7]||(s[7]=o=>t.state.doctor=o),name:"doctor",id:"doctor"},ue,512),[[v,t.state.doctor]])]),e("div",me,[ce,a(e("input",{"onUpdate:modelValue":s[8]||(s[8]=o=>t.state.checkbox=o),type:"checkbox"},null,512),[[N,t.state.checkbox]])])]),e("div",_e,[he,e("div",ve,[be,a(e("input",{"onUpdate:modelValue":s[9]||(s[9]=o=>t.state.addressIndex=o),id:"input-address-index",name:"\u0418\u043D\u0434\u0435\u043A\u0441"},null,512),[[i,t.state.addressIndex]])]),e("div",fe,[ye,a(e("input",{"onUpdate:modelValue":s[10]||(s[10]=o=>t.state.addressCountry=o),id:"input-address-country",name:"\u0421\u0442\u0440\u0430\u043D\u0430"},null,512),[[i,t.state.addressCountry]])]),e("div",ge,[Ne,a(e("input",{"onUpdate:modelValue":s[11]||(s[11]=o=>t.state.addressOblast=o),id:"input-address-oblast",name:"\u041E\u0431\u043B\u0430\u0441\u0442\u044C"},null,512),[[i,t.state.addressOblast]])]),e("div",Ve,[ke,a(e("input",{"onUpdate:modelValue":s[12]||(s[12]=o=>t.state.addressCity=o),id:"input-address-city",name:"\u0413\u043E\u0440\u043E\u0434"},null,512),[[i,t.state.addressCity]])]),t.v$.addressCity.$error?(p(),u("span",Ce,c(t.v$.addressCity.$errors[0].$message),1)):_("",!0),e("div",Ue,[xe,a(e("input",{"onUpdate:modelValue":s[13]||(s[13]=o=>t.state.addressStreet=o),id:"input-address-ctreet",name:"\u0423\u043B\u0438\u0446\u0430"},null,512),[[i,t.state.addressStreet]])]),e("div",Ie,[De,a(e("input",{"onUpdate:modelValue":s[14]||(s[14]=o=>t.state.addressBuilding=o),id:"input-address-building",name:"\u0414\u043E\u043C"},null,512),[[i,t.state.addressBuilding]])])]),e("div",qe,[Be,e("div",Le,[Se,a(e("select",{"onUpdate:modelValue":s[15]||(s[15]=o=>t.state.documentType=o),name:"document-type",id:"document-type"},Me,512),[[v,t.state.documentType]])]),t.v$.documentType.$error?(p(),u("span",Ae,c(t.v$.documentType.$errors[0].$message),1)):_("",!0),e("div",Fe,[Pe,a(e("input",{"onUpdate:modelValue":s[16]||(s[16]=o=>t.state.passportBatch=o),id:"input-passport-batch",name:"\u0421\u0435\u0440\u0438\u044F"},null,512),[[i,t.state.passportBatch]])]),e("div",Ee,[je,a(e("input",{"onUpdate:modelValue":s[17]||(s[17]=o=>t.state.passportNumber=o),id:"input-passport-number",name:"\u041D\u043E\u043C\u0435\u0440"},null,512),[[i,t.state.passportNumber]])]),e("div",He,[Ke,a(e("textarea",{"onUpdate:modelValue":s[18]||(s[18]=o=>t.state.passportIssuer=o),id:"input-passport-issuer",name:"\u041A\u0435\u043C \u0432\u044B\u0434\u0430\u043D",rows:"2",cols:"50"},null,512),[[i,t.state.passportIssuer]])]),e("div",Ze,[ze,a(e("input",{"onUpdate:modelValue":s[19]||(s[19]=o=>t.state.passportDate=o),id:"input-passport-date",name:"\u0414\u0430\u0442\u0430 \u0432\u044B\u0434\u0430\u0447\u0438",placeholder:"\u0414\u0414.\u041C\u041C.\u0413\u0413\u0413\u0413"},null,512),[[i,t.state.passportDate]])]),t.v$.passportDate.$error?(p(),u("span",Ge,c(t.v$.passportDate.$errors[0].$message),1)):_("",!0)]),e("button",{class:"submit-form",onClick:s[20]||(s[20]=V((...o)=>d.submitForm&&d.submitForm(...o),["prevent"])),type:"submit"},"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C")])])}var Qe=I(D,[["render",Je],["__scopeId","data-v-2a15846e"]]);const Re=U(Qe);Re.mount("#app");
