import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{c as a,b,f as h}from"./tokens-C4zTMbFB.js";import{S as j}from"./Stage-DSHfUkUu.js";import"./index-Bc2G9s8g.js";const r=({value:o,label:t,display:v,color:i=a.brand.pink,trackColor:x=a.bg.softGray,height:c=40,showValue:d=!0})=>{const n=Math.max(0,Math.min(100,o));return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:14,width:"100%"},children:[(t||d)&&e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline"},children:[t&&e.jsx("div",{style:{...b.body,color:a.text.primary},children:t}),d&&e.jsx("div",{style:{fontFamily:h.display,fontSize:32,fontWeight:600,color:i},children:v??`${n}%`})]}),e.jsx("div",{style:{width:"100%",height:c,background:x,borderRadius:999,overflow:"hidden"},children:e.jsx("div",{style:{width:`${n}%`,height:"100%",background:i,borderRadius:999,minWidth:c}})})]})};r.__docgenInfo={description:"",methods:[],displayName:"ProgressBar",props:{value:{required:!0,tsType:{name:"number"},description:""},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},display:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#FF8FDA'",computed:!1}},trackColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#F2F3FA'",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"40",computed:!1}},showValue:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const B={title:"Компоненты/Графики/ProgressBar",component:r,decorators:[o=>e.jsx(j,{width:1e3,children:o()})]},s={args:{label:"Доля органического трафика",value:72}},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:40},children:[e.jsx(r,{label:"Конверсия в корзину",value:64}),e.jsx(r,{label:"Процент выкупа",value:88,color:a.accent.purple}),e.jsx(r,{label:"Доля SEO-трафика",value:25,color:a.accent.limeDark,display:"25%"}),e.jsx(r,{label:"Заполненность карточек",value:100,color:a.semantic.success})]})};var u,p,m;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Доля органического трафика',
    value: 72
  }
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var f,y,g;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 40
  }}>
      <ProgressBar label="Конверсия в корзину" value={64} />
      <ProgressBar label="Процент выкупа" value={88} color={colors.accent.purple} />
      <ProgressBar label="Доля SEO-трафика" value={25} color={colors.accent.limeDark} display="25%" />
      <ProgressBar label="Заполненность карточек" value={100} color={colors.semantic.success} />
    </div>
}`,...(g=(y=l.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};const F=["Playground","Набор"];export{s as Playground,F as __namedExportsOrder,B as default,l as Набор};
