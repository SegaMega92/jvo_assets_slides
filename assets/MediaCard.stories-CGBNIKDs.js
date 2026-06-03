import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{c as r,l as c,b as n}from"./tokens-C4zTMbFB.js";import{S as b}from"./Stage-DSHfUkUu.js";import"./index-Bc2G9s8g.js";const t=({image:a,heading:o,body:l,imageHeight:x=360,bg:f=r.bg.white,imageBg:j=r.bg.softGray})=>e.jsxs("div",{style:{background:f,borderRadius:c.card.radius,overflow:"hidden",border:`2px solid ${r.border.subtle}`,display:"flex",flexDirection:"column",height:"100%",boxSizing:"border-box"},children:[e.jsx("div",{style:{height:x,background:j,display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"},children:typeof a=="string"?e.jsx("img",{src:a,alt:"",style:{width:"100%",height:"100%",objectFit:"cover"}}):a}),e.jsxs("div",{style:{padding:c.card.padding,display:"flex",flexDirection:"column",gap:16},children:[o&&e.jsx("div",{style:{...n.h3,color:r.text.primary},children:o}),l&&e.jsx("div",{style:{...n.body,color:r.text.primary,opacity:.85},children:l})]})]});t.__docgenInfo={description:"",methods:[],displayName:"MediaCard",props:{image:{required:!1,tsType:{name:"union",raw:"React.ReactNode | string",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"string"}]},description:""},heading:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},body:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},imageHeight:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"360",computed:!1}},bg:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#FFFFFF'",computed:!1}},imageBg:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#F2F3FA'",computed:!1}}}};const w={title:"Компоненты/MediaCard",component:t,decorators:[a=>e.jsx(b,{width:560,children:a()})]},s=({label:a})=>e.jsx("div",{style:{fontSize:64,opacity:.4},children:a}),d={args:{image:e.jsx(s,{label:"🖼️"}),heading:"Отслеживает изменения",body:"Фиксирует каждое изменение в карточке и реакцию рынка"}},i={decorators:[a=>e.jsx(b,{children:a()})],render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:32,alignItems:"stretch"},children:[e.jsx(t,{image:e.jsx(s,{label:"📈"}),heading:"Отслеживает",body:"Каждое изменение в карточке и реакцию рынка"}),e.jsx(t,{image:e.jsx(s,{label:"🔔"}),imageBg:r.brand.pinkLight,heading:"Формирует алерты",body:"С конкретным планом действий"}),e.jsx(t,{image:e.jsx(s,{label:"💾"}),imageBg:r.accent.purpleLight,heading:"Сохраняет историю",body:"Все изменения во всех сущностях"})]})};var g,p,m;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    image: <Placeholder label="🖼️" />,
    heading: 'Отслеживает изменения',
    body: 'Фиксирует каждое изменение в карточке и реакцию рынка'
  }
}`,...(m=(p=d.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,y,h;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  decorators: [Story => <Stage>{Story()}</Stage>],
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 32,
    alignItems: 'stretch'
  }}>
      <MediaCard image={<Placeholder label="📈" />} heading="Отслеживает" body="Каждое изменение в карточке и реакцию рынка" />
      <MediaCard image={<Placeholder label="🔔" />} imageBg={colors.brand.pinkLight} heading="Формирует алерты" body="С конкретным планом действий" />
      <MediaCard image={<Placeholder label="💾" />} imageBg={colors.accent.purpleLight} heading="Сохраняет историю" body="Все изменения во всех сущностях" />
    </div>
}`,...(h=(y=i.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};const C=["Playground","Ряд"];export{d as Playground,C as __namedExportsOrder,w as default,i as Ряд};
