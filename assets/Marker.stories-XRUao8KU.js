import{j as r}from"./jsx-runtime-DFAAy_2V.js";import{M as o}from"./primitives-CXzfv1ty.js";import{B as p,R as F}from"./_preview-DvKkekIt.js";import"./index-Bc2G9s8g.js";import"./tokens-C4zTMbFB.js";const w={title:"Слайдкит/Примитивы/Marker",component:o,decorators:[p()],parameters:{docs:{description:{component:"Круглый маркер со стрелкой — буллет-указатель в списках (ArrowList) и в плашках-выводах. Цвета фона/стрелки настраиваются под тему."}}},argTypes:{size:{control:{type:"range",min:16,max:80},description:"Диаметр, px"},background:{control:"color",description:"Цвет кружка"},arrowColor:{control:"color",description:"Цвет стрелки"},direction:{control:{type:"inline-radio",options:["right","up","down"]},description:"Направление"}}},e={args:{size:40,background:"#410031",arrowColor:"#FF8FDA",direction:"right"}},a={render:()=>r.jsxs(F,{align:"center",children:[r.jsx(o,{size:40,background:"#410031",arrowColor:"#FF8FDA"}),r.jsx(o,{size:40,background:"#1F2A09",arrowColor:"#D6FE9E"}),r.jsx(o,{size:40,background:"#FF8FDA",arrowColor:"#410031"}),r.jsx(o,{size:56,background:"#410031",arrowColor:"#FF8FDA"})]})};var n,s,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    size: 40,
    background: '#410031',
    arrowColor: '#FF8FDA',
    direction: 'right'
  }
}`,...(i=(s=e.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var t,c,d;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => <Row align="center">
      <Marker size={40} background="#410031" arrowColor="#FF8FDA" />
      <Marker size={40} background="#1F2A09" arrowColor="#D6FE9E" />
      <Marker size={40} background="#FF8FDA" arrowColor="#410031" />
      <Marker size={56} background="#410031" arrowColor="#FF8FDA" />
    </Row>
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const b=["Playground","Варианты"];export{e as Playground,b as __namedExportsOrder,w as default,a as Варианты};
