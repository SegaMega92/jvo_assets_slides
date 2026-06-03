import{j as r}from"./jsx-runtime-DFAAy_2V.js";import{C as a}from"./primitives-CXzfv1ty.js";import{B as d,R as p}from"./_preview-DvKkekIt.js";import"./index-Bc2G9s8g.js";import"./tokens-C4zTMbFB.js";const b={title:"Слайдкит/Примитивы/Check",component:a,decorators:[d()],parameters:{docs:{description:{component:"Маркер-галочка (скруглённый квадрат с ✓) — для чек-листов (CheckList) и ячеек таблицы сравнения (ComparisonTable)."}}},argTypes:{size:{control:{type:"range",min:16,max:80},description:"Размер, px"},background:{control:"color",description:"Цвет фона"},mark:{control:"color",description:"Цвет галочки"}}},o={args:{size:40,background:"#1F2A09",mark:"#D8F995"}},e={render:()=>r.jsxs(p,{align:"center",children:[r.jsx(a,{size:40,background:"#1F2A09",mark:"#D8F995"}),r.jsx(a,{size:40,background:"#D8F995",mark:"#1F2A09"}),r.jsx(a,{size:40,background:"#FF8FDA",mark:"#410031"})]})};var s,n,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    size: 40,
    background: '#1F2A09',
    mark: '#D8F995'
  }
}`,...(c=(n=o.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var t,i,m;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => <Row align="center">
      <Check size={40} background="#1F2A09" mark="#D8F995" />
      <Check size={40} background="#D8F995" mark="#1F2A09" />
      <Check size={40} background="#FF8FDA" mark="#410031" />
    </Row>
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const x=["Playground","Варианты"];export{o as Playground,x as __namedExportsOrder,b as default,e as Варианты};
