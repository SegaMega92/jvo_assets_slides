import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{S}from"./SlideFrame-V9XlKTp6.js";import{t as N,b as T,l as i}from"./tokens-C4zTMbFB.js";import"./index-Bc2G9s8g.js";const x=({illustration:r,statement:f,decoration:n,theme:o="light",statementColor:R})=>{const j=N[o];return e.jsx(S,{theme:o,children:e.jsxs("div",{style:{position:"absolute",inset:0,padding:`${i.slidePadY*4}px ${i.slidePadX*3}px`,display:"flex",flexDirection:"column",justifyContent:"center"},children:[r&&e.jsx("div",{style:{marginBottom:48},children:r}),e.jsx("div",{style:{...T.display,color:R??j.text,maxWidth:"70%"},children:f}),n&&e.jsx("div",{style:{marginTop:48},children:n})]})})};x.__docgenInfo={description:"",methods:[],displayName:"BigStatement",props:{illustration:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},statement:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},decoration:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},theme:{required:!1,tsType:{name:"unknown"},description:"",defaultValue:{value:"'light'",computed:!1}},statementColor:{required:!1,tsType:{name:"string"},description:""}}};const E={title:"Лейауты/1 · BigStatement",component:x,argTypes:{theme:{control:"select",options:["light","dark","eggplant","pinkPastel","lime","purple"]}}},t={args:{statement:"Это больше, чем все существующие платформы аналитики",theme:"light"}},a={args:{statement:"Единственная платформа, выдающая продвинутую и предписывающую аналитику",theme:"eggplant"}},s={args:{statement:"200+ метрик в одном дашборде",theme:"lime"}};var m,c,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    statement: 'Это больше, чем все существующие платформы аналитики',
    theme: 'light'
  }
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var l,p,g;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    statement: 'Единственная платформа, выдающая продвинутую и предписывающую аналитику',
    theme: 'eggplant'
  }
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var u,h,y;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    statement: '200+ метрик в одном дашборде',
    theme: 'lime'
  }
}`,...(y=(h=s.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const _=["Дефолт","Eggplant","Лайм"];export{a as Eggplant,_ as __namedExportsOrder,E as default,t as Дефолт,s as Лайм};
