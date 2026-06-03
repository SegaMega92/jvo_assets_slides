import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{T as r}from"./primitives-CXzfv1ty.js";import{B as d,R as m}from"./_preview-DvKkekIt.js";import"./index-Bc2G9s8g.js";import"./tokens-C4zTMbFB.js";const f={title:"Слайдкит/Примитивы/Tag",component:r,decorators:[d()],parameters:{docs:{description:{component:"Маленький ярлык-чип для коротких меток: «кейс», «Критично», «3 API», «5 Пользователей». Четыре цветовых тона."}}},argTypes:{tone:{control:{type:"inline-radio",options:["pink","lime","critical","neutral"]},description:"Цветовой тон"},fontSize:{control:{type:"range",min:12,max:36},description:"Размер шрифта, px"}}},n={args:{children:"3 API",tone:"pink",fontSize:20}},o={render:()=>e.jsxs(m,{children:[e.jsx(r,{tone:"pink",children:"5 Пользователей"}),e.jsx(r,{tone:"lime",children:"результат"}),e.jsx(r,{tone:"critical",children:"Критично"}),e.jsx(r,{tone:"neutral",children:"кейс"})]})};var t,a,i;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    children: '3 API',
    tone: 'pink',
    fontSize: 20
  }
}`,...(i=(a=n.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var s,c,p;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <Row>
      <Tag tone="pink">5 Пользователей</Tag>
      <Tag tone="lime">результат</Tag>
      <Tag tone="critical">Критично</Tag>
      <Tag tone="neutral">кейс</Tag>
    </Row>
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const h=["Playground","Тоны"];export{n as Playground,h as __namedExportsOrder,f as default,o as Тоны};
