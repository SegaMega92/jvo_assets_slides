import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{l as n,c as a,b as c}from"./tokens-C4zTMbFB.js";import{S as h}from"./Stage-DSHfUkUu.js";import"./index-Bc2G9s8g.js";const o=({icon:r,heading:s,body:i,bg:b=a.bg.softGray,headingColor:f=a.text.black,bodyColor:x=a.text.primary})=>e.jsxs("div",{style:{background:b,borderRadius:n.card.radius,padding:n.card.padding,display:"flex",flexDirection:"column",gap:28,height:"100%",boxSizing:"border-box"},children:[r&&e.jsx("div",{style:{width:80,height:80,display:"flex",alignItems:"center",justifyContent:"center",fontSize:48},children:r}),s&&e.jsx("div",{style:{...c.h3,color:f},children:s}),i&&e.jsx("div",{style:{...c.body,color:x,opacity:.85},children:i})]});o.__docgenInfo={description:"",methods:[],displayName:"IconCard",props:{icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},heading:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},body:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},bg:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#F2F3FA'",computed:!1}},headingColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#000000'",computed:!1}},bodyColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#410031'",computed:!1}}}};const v={title:"Компоненты/IconCard",component:o,decorators:[r=>e.jsx(h,{width:560,children:r()})]},d={args:{icon:"🔍",heading:"Находит",body:"Система видит утечки выручки и точки роста, которые упускают конкуренты"}},t={decorators:[r=>e.jsx(h,{children:r()})],render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:32},children:[e.jsx(o,{icon:"🔍",heading:"Находит",body:"Видит утечки выручки и точки роста"}),e.jsx(o,{icon:"🗂️",heading:"Превращает в задачи",body:"Каждая утечка становится задачей с дедлайном",bg:a.brand.pinkLight}),e.jsx(o,{icon:"⚙️",heading:"Выполняет",body:"AI-агенты работают через API WB и Ozon",bg:a.accent.purpleLight})]})};var l,p,g;d.parameters={...d.parameters,docs:{...(l=d.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    icon: '🔍',
    heading: 'Находит',
    body: 'Система видит утечки выручки и точки роста, которые упускают конкуренты'
  }
}`,...(g=(p=d.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var u,m,y;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  decorators: [Story => <Stage>{Story()}</Stage>],
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 32
  }}>
      <IconCard icon="🔍" heading="Находит" body="Видит утечки выручки и точки роста" />
      <IconCard icon="🗂️" heading="Превращает в задачи" body="Каждая утечка становится задачей с дедлайном" bg={colors.brand.pinkLight} />
      <IconCard icon="⚙️" heading="Выполняет" body="AI-агенты работают через API WB и Ozon" bg={colors.accent.purpleLight} />
    </div>
}`,...(y=(m=t.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};const S=["Playground","Ряд"];export{d as Playground,S as __namedExportsOrder,v as default,t as Ряд};
