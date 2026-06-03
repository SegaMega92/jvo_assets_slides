import{j as t}from"./jsx-runtime-DFAAy_2V.js";import{c as a,b as d}from"./tokens-C4zTMbFB.js";import{S as f}from"./Stage-DSHfUkUu.js";import"./index-Bc2G9s8g.js";const C=e=>e!==null&&typeof e=="object"&&"text"in e?{text:e.text,ok:e.ok!==!1}:{text:e,ok:!0},i=({heading:e,items:g,okColor:y=a.semantic.success,noColor:n=a.text.muted,headingColor:h=a.text.primary,itemColor:k=a.text.primary})=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e&&t.jsx("div",{style:{...d.h4,color:h},children:e}),t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:20},children:g.map((R,j)=>{const{text:v,ok:r}=C(R);return t.jsxs("div",{style:{display:"flex",gap:18,alignItems:"flex-start"},children:[t.jsx("span",{style:{flexShrink:0,width:40,height:40,borderRadius:999,background:r?y:"transparent",border:r?"none":`2px solid ${n}`,color:r?a.bg.white:n,display:"flex",alignItems:"center",justifyContent:"center",fontSize:24,fontWeight:700,lineHeight:1},children:r?"✓":"✕"}),t.jsx("span",{style:{...d.body,color:k,opacity:r?.9:.6,paddingTop:2},children:v})]},j)})})]});i.__docgenInfo={description:"",methods:[],displayName:"CheckList",props:{heading:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},items:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:"React.ReactNode | { text: React.ReactNode; ok?: boolean }",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"signature",type:"object",raw:"{ text: React.ReactNode; ok?: boolean }",signature:{properties:[{key:"text",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"ok",value:{name:"boolean",required:!1}}]}}]}],raw:"CheckItem[]"},description:""},okColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#9ECF38'",computed:!1}},noColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#999999'",computed:!1}},headingColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#410031'",computed:!1}},itemColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#410031'",computed:!1}}}};const T={title:"Компоненты/CheckList",component:i,decorators:[e=>t.jsx(f,{width:620,children:e()})]},s={args:{heading:"Что делает платформа",items:["24/7 анализирует кабинет","Формирует задачи с приоритетом","Отслеживает изменения карточек","Считает юнит-экономику"]}},o={decorators:[e=>t.jsx(f,{children:e()})],render:()=>t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:64},children:[t.jsx(i,{heading:"Что делает платформа",items:[{text:"24/7 анализ кабинета",ok:!0},{text:"AI-рекомендации",ok:!0},{text:"Алерты с планом действий",ok:!0}]}),t.jsx(i,{heading:"Что остаётся команде",items:[{text:"Рутинный сбор отчётов",ok:!1},{text:"Ручной мониторинг цен",ok:!1},{text:"Только эффективные действия",ok:!0}]})]})};var l,c,p;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    heading: 'Что делает платформа',
    items: ['24/7 анализирует кабинет', 'Формирует задачи с приоритетом', 'Отслеживает изменения карточек', 'Считает юнит-экономику']
  }
}`,...(p=(c=s.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,u,x;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  decorators: [Story => <Stage>{Story()}</Stage>],
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 64
  }}>
      <CheckList heading="Что делает платформа" items={[{
      text: '24/7 анализ кабинета',
      ok: true
    }, {
      text: 'AI-рекомендации',
      ok: true
    }, {
      text: 'Алерты с планом действий',
      ok: true
    }]} />
      <CheckList heading="Что остаётся команде" items={[{
      text: 'Рутинный сбор отчётов',
      ok: false
    }, {
      text: 'Ручной мониторинг цен',
      ok: false
    }, {
      text: 'Только эффективные действия',
      ok: true
    }]} />
    </div>
}`,...(x=(u=o.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const q=["Playground","ВходитНеВходит"];export{s as Playground,q as __namedExportsOrder,T as default,o as ВходитНеВходит};
