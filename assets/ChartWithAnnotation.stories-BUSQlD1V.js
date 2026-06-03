import{j as t}from"./jsx-runtime-DFAAy_2V.js";import{S as y}from"./SlideFrame-V9XlKTp6.js";import{S as R}from"./SlideHeader-DVUJPzr0.js";import{l as e,c as o,b as l}from"./tokens-C4zTMbFB.js";import"./index-Bc2G9s8g.js";const p=({title:d,lead:r,chart:m,annotation:s,theme:u="light"})=>{const h=d||r?e.bodyTop+(r?80:0):e.slidePadY*2;return t.jsxs(y,{theme:u,children:[t.jsx(R,{title:d,lead:r}),t.jsx("div",{style:{position:"absolute",left:e.slidePadX*4,right:e.slidePadX*4,top:h,bottom:s?180:e.slidePadY,background:o.bg.softGray,borderRadius:e.card.radius,padding:e.card.padding,display:"flex",alignItems:"center",justifyContent:"center"},children:m}),s&&t.jsx("div",{style:{position:"absolute",bottom:e.slidePadY,left:"50%",transform:"translateX(-50%)",background:o.brand.eggplant,padding:"20px 40px",borderRadius:999,...l.body,color:o.text.onDark},children:s})]})};p.__docgenInfo={description:"",methods:[],displayName:"ChartWithAnnotation",props:{title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},lead:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},chart:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},annotation:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},theme:{required:!1,tsType:{name:"unknown"},description:"",defaultValue:{value:"'light'",computed:!1}}}};const T={title:"Лейауты/10 · ChartWithAnnotation",component:p,argTypes:{theme:{control:"select",options:["light","pinkPastel"]}}},a={args:{title:"Как работает алгоритм маркетплейса",lead:"Алгоритм сравнивает вашу карточку с конкурентами по каждой метрике",chart:t.jsx("div",{style:{...l.body,color:o.text.muted},children:"[Диаграмма / таблица сравнения метрик]"}),annotation:"90+ факторов ранжирования"}};var n,i,c;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    title: 'Как работает алгоритм маркетплейса',
    lead: 'Алгоритм сравнивает вашу карточку с конкурентами по каждой метрике',
    chart: <div style={{
      ...type.body,
      color: colors.text.muted
    }}>
        [Диаграмма / таблица сравнения метрик]
      </div>,
    annotation: '90+ факторов ранжирования'
  }
}`,...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const v=["АлгоритмМП"];export{v as __namedExportsOrder,T as default,a as АлгоритмМП};
