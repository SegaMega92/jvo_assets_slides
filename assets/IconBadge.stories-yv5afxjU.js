import{j as o}from"./jsx-runtime-DFAAy_2V.js";import{I as n}from"./primitives-CXzfv1ty.js";import{B as l,R as g}from"./_preview-DvKkekIt.js";import"./index-Bc2G9s8g.js";import"./tokens-C4zTMbFB.js";const F={title:"Слайдкит/Примитивы/IconBadge",component:n,decorators:[l()],parameters:{docs:{description:{component:"Иконка в цветной подложке (круг / скруглённый квадрат / без подложки). Используется в шапках секций и карточках-фичах. Принимает картинку (`src`) или символ (`glyph`)."}}},argTypes:{glyph:{control:"text",description:"Символ/эмодзи (если без картинки)"},src:{control:"text",description:"URL картинки-иконки"},size:{control:{type:"range",min:40,max:160},description:"Размер, px"},background:{control:"color",description:"Цвет подложки"},shape:{control:{type:"inline-radio",options:["circle","rounded","none"]},description:"Форма подложки"},glyphColor:{control:"color",description:"Цвет символа"}}},r={args:{glyph:"★",size:88,background:"#FF8FDA",shape:"rounded",glyphColor:"#410031"}},e={render:()=>o.jsxs(g,{align:"center",children:[o.jsx(n,{glyph:"🔍",shape:"circle",background:"#410031"}),o.jsx(n,{glyph:"✓",shape:"rounded",background:"#D6FE9E",glyphColor:"#1F2A09"}),o.jsx(n,{glyph:"%",shape:"circle",background:"#FF8FDA",glyphColor:"#410031"})]})};var c,a,s;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    glyph: '★',
    size: 88,
    background: '#FF8FDA',
    shape: 'rounded',
    glyphColor: '#410031'
  }
}`,...(s=(a=r.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var p,t,d;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Row align="center">
      <IconBadge glyph="🔍" shape="circle" background="#410031" />
      <IconBadge glyph="✓" shape="rounded" background="#D6FE9E" glyphColor="#1F2A09" />
      <IconBadge glyph="%" shape="circle" background="#FF8FDA" glyphColor="#410031" />
    </Row>
}`,...(d=(t=e.parameters)==null?void 0:t.docs)==null?void 0:d.source}}};const x=["Playground","Формы"];export{r as Playground,x as __namedExportsOrder,F as default,e as Формы};
