import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{l as h,c as t,b as d,f as R}from"./tokens-C4zTMbFB.js";import{S as g}from"./Stage-DSHfUkUu.js";import"./index-Bc2G9s8g.js";const r=({label:a,before:i,after:l,delta:y,positive:b=!0,bg:x=t.bg.white})=>{const v=b?t.semantic.success:t.brand.pink;return e.jsxs("div",{style:{background:x,borderRadius:h.card.radius,padding:36,display:"flex",flexDirection:"column",gap:18,boxSizing:"border-box",height:"100%"},children:[e.jsx("div",{style:{...d.cardTitle,fontSize:32,color:t.text.primary},children:a}),(i!=null||l!=null)&&e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[i!=null&&e.jsxs("div",{style:{...d.small,color:t.text.mutedMid},children:["до: ",e.jsx("span",{style:{color:t.text.primary,fontWeight:600},children:i})]}),l!=null&&e.jsxs("div",{style:{...d.small,color:t.text.mutedMid},children:["после: ",e.jsx("span",{style:{color:t.text.primary,fontWeight:600},children:l})]})]}),e.jsx("div",{style:{fontFamily:R.display,fontSize:56,fontWeight:600,lineHeight:1,color:v},children:y})]})};r.__docgenInfo={description:"",methods:[],displayName:"BeforeAfterMetric",props:{label:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},before:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},after:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},delta:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},positive:{required:!1,tsType:{name:"boolean"},description:"направление «хорошего» изменения: для ДДР рост — плохо",defaultValue:{value:"true",computed:!1}},bg:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#FFFFFF'",computed:!1}}}};const N={title:"Компоненты/BeforeAfterMetric",component:r,decorators:[a=>e.jsx(g,{bg:"pink",width:420,children:a()})]},o={args:{label:"Выручка",before:"2,8 млн ₽",after:"4,5 млн ₽",delta:"+ 60%",positive:!0}},s={decorators:[a=>e.jsx(g,{bg:"pink",children:a()})],render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:24},children:[e.jsx(r,{label:"Выручка",before:"2,8 млн ₽",after:"4,5 млн ₽",delta:"+ 60%",positive:!0}),e.jsx(r,{label:"CTR",before:"0,7%",after:"1,9%",delta:"+ 1,2%",positive:!0}),e.jsx(r,{label:"ДДР",before:"35%",after:"18%",delta:"− 17%",positive:!1}),e.jsx(r,{label:"Средний чек",delta:"+ 22%",positive:!0})]})};var c,n,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Выручка',
    before: '2,8 млн ₽',
    after: '4,5 млн ₽',
    delta: '+ 60%',
    positive: true
  }
}`,...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var f,u,m;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  decorators: [Story => <Stage bg="pink">{Story()}</Stage>],
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 24
  }}>
      <BeforeAfterMetric label="Выручка" before="2,8 млн ₽" after="4,5 млн ₽" delta="+ 60%" positive />
      <BeforeAfterMetric label="CTR" before="0,7%" after="1,9%" delta="+ 1,2%" positive />
      <BeforeAfterMetric label="ДДР" before="35%" after="18%" delta="− 17%" positive={false} />
      <BeforeAfterMetric label="Средний чек" delta="+ 22%" positive />
    </div>
}`,...(m=(u=s.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const A=["Playground","НаборКейса"];export{o as Playground,A as __namedExportsOrder,N as default,s as НаборКейса};
