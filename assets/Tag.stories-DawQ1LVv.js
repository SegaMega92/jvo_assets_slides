import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{T as a}from"./Tag-B8Oi0QVc.js";import{S as f}from"./Stage-DSHfUkUu.js";import"./index-Bc2G9s8g.js";import"./tokens-C4zTMbFB.js";const I={title:"Компоненты/Tag",component:a,argTypes:{accent:{control:"select",options:["pink","lime","purple","eggplant","neutral"]},variant:{control:"inline-radio",options:["solid","soft","outline"]},size:{control:"inline-radio",options:["sm","md","lg"]},shape:{control:"inline-radio",options:["pill","rounded"]},children:{control:"text"}},decorators:[s=>e.jsx(f,{align:"center",children:s()})]},r={args:{children:"Прирост 26%",accent:"pink",variant:"solid",size:"md",shape:"pill"}},n={render:()=>e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:24,alignItems:"center"},children:[e.jsx(a,{accent:"pink",variant:"solid",children:"Прирост 26%"}),e.jsx(a,{accent:"pink",variant:"soft",children:"Решаем ключевые проблемы"}),e.jsx(a,{accent:"purple",variant:"outline",children:"Делегируйте управление"}),e.jsx(a,{accent:"lime",variant:"solid",children:"БОНУС"}),e.jsx(a,{accent:"eggplant",variant:"soft",shape:"rounded",children:"кейс"}),e.jsx(a,{accent:"neutral",variant:"soft",children:"150+ ниш"})]})},i={render:()=>e.jsxs("div",{style:{display:"flex",gap:24,alignItems:"center"},children:[e.jsx(a,{size:"sm",accent:"pink",children:"Small"}),e.jsx(a,{size:"md",accent:"pink",children:"Medium"}),e.jsx(a,{size:"lg",accent:"pink",children:"Large"})]})},t={decorators:[s=>e.jsx(f,{bg:"dark",align:"center",children:s()})],render:()=>e.jsxs("div",{style:{display:"flex",gap:24,alignItems:"center"},children:[e.jsx(a,{accent:"lime",variant:"solid",children:"Специальное предложение"}),e.jsx(a,{accent:"pink",variant:"solid",children:"до 30.02"}),e.jsx(a,{accent:"lime",variant:"outline",children:"ТОП-10"})]})};var c,l,o;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'Прирост 26%',
    accent: 'pink',
    variant: 'solid',
    size: 'md',
    shape: 'pill'
  }
}`,...(o=(l=r.parameters)==null?void 0:l.docs)==null?void 0:o.source}}};var d,p,g;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 24,
    alignItems: 'center'
  }}>
      <Tag accent="pink" variant="solid">Прирост 26%</Tag>
      <Tag accent="pink" variant="soft">Решаем ключевые проблемы</Tag>
      <Tag accent="purple" variant="outline">Делегируйте управление</Tag>
      <Tag accent="lime" variant="solid">БОНУС</Tag>
      <Tag accent="eggplant" variant="soft" shape="rounded">кейс</Tag>
      <Tag accent="neutral" variant="soft">150+ ниш</Tag>
    </div>
}`,...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var m,u,v;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    alignItems: 'center'
  }}>
      <Tag size="sm" accent="pink">Small</Tag>
      <Tag size="md" accent="pink">Medium</Tag>
      <Tag size="lg" accent="pink">Large</Tag>
    </div>
}`,...(v=(u=i.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var x,T,h;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  decorators: [Story => <Stage bg="dark" align="center">{Story()}</Stage>],
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    alignItems: 'center'
  }}>
      <Tag accent="lime" variant="solid">Специальное предложение</Tag>
      <Tag accent="pink" variant="solid">до 30.02</Tag>
      <Tag accent="lime" variant="outline">ТОП-10</Tag>
    </div>
}`,...(h=(T=t.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};const b=["Playground","Варианты","Размеры","НаТёмном"];export{r as Playground,b as __namedExportsOrder,I as default,n as Варианты,t as НаТёмном,i as Размеры};
