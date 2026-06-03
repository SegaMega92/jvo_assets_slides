import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{c as s,b as m}from"./tokens-C4zTMbFB.js";import{S as f}from"./Stage-DSHfUkUu.js";import"./index-Bc2G9s8g.js";const r=({label:t,align:d="center",color:c=s.border.divider,labelColor:p=s.text.mutedMid,thickness:u=2})=>{const i=e.jsx("div",{style:{flex:1,height:u,background:c}});return t?e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:28,width:"100%"},children:[d==="center"&&i,e.jsx("span",{style:{...m.small,color:p,whiteSpace:"nowrap",fontWeight:600},children:t}),i]}):i};r.__docgenInfo={description:"",methods:[],displayName:"Divider",props:{label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},align:{required:!1,tsType:{name:"union",raw:"'start' | 'center'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"}]},description:"",defaultValue:{value:"'center'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#F3F3F3'",computed:!1}},labelColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#666666'",computed:!1}},thickness:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"2",computed:!1}}}};const h={title:"Компоненты/Divider",component:r,argTypes:{align:{control:"inline-radio",options:["start","center"]}},decorators:[t=>e.jsx(f,{width:1100,children:t()})]},a={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:56},children:[e.jsx(r,{}),e.jsx(r,{label:"Что входит:",align:"start"}),e.jsx(r,{label:"Делегируйте управление",align:"center"})]})};var l,n,o;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 56
  }}>
      <Divider />
      <Divider label="Что входит:" align="start" />
      <Divider label="Делегируйте управление" align="center" />
    </div>
}`,...(o=(n=a.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const j=["Набор"];export{j as __namedExportsOrder,h as default,a as Набор};
