import{_ as c,M as a,r as l,o as n,c as r,a as i,b as p}from"./index-07e71f3a.js";const d={components:{Multiselect:a},data(){return{actions:["alert","console.log","scrollTop"]}},methods:{dispatchAction(e){switch(e){case"alert":window.alert('You just dispatched "alert" action!');break;case"console.log":console.log('You just dispatched "console.log" action!');break;case"scrollTop":window.scrollTo(0,0);break}}}},u=p("label",{class:"typo__label"},"Open console to see logs.",-1);function _(e,h,m,f,o,t){const s=l("multiselect");return n(),r("div",null,[u,i(s,{placeholder:"Pick action",options:o.actions,searchable:!1,"reset-after":!0,onSelect:t.dispatchAction},null,8,["options","onSelect"])])}const k=c(d,[["render",_]]);export{k as default};
