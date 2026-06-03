import{j as r}from"./jsx-runtime-DFAAy_2V.js";import{S as d,B as e}from"./primitives-CXzfv1ty.js";import{B as g,R as h}from"./_preview-DvKkekIt.js";import"./index-Bc2G9s8g.js";import"./tokens-C4zTMbFB.js";const f={title:"Слайдкит/Примитивы/Surface",component:d,decorators:[g()],parameters:{docs:{description:{component:"Базовая плашка-поверхность: фон/градиент, скругление, рамка, тень, паддинг. На ней строятся все карточки слайдов (стат-карточки, тарифы, тёмные секции)."}}},argTypes:{background:{control:"text",description:"Заливка: hex или CSS-градиент"},radius:{control:{type:"range",min:0,max:80},description:"Радиус скругления, px"},padding:{control:{type:"range",min:0,max:80},description:"Внутренний отступ, px"},border:{control:"text",description:"CSS-рамка"},shadow:{control:"text",description:"CSS-тень"},width:{control:{type:"number"},description:"Ширина, px"},height:{control:{type:"number"},description:"Высота, px"}}},o={args:{background:"#FFFFFF",radius:28,padding:48,border:"1px solid #ECE3E9",width:560,height:320,children:r.jsx(e,{size:"lead",children:"Контент плашки"})}},i={render:()=>r.jsxs(h,{children:[r.jsx(d,{width:300,height:200,padding:36,background:"#FFFFFF",border:"1px solid #ECE3E9",children:r.jsx(e,{children:"Белая + рамка"})}),r.jsx(d,{width:300,height:200,padding:36,background:"linear-gradient(180deg,#D6FE9E,#FFF2CC)",children:r.jsx(e,{children:"Лаймовый градиент"})}),r.jsx(d,{width:300,height:200,padding:36,background:"#410031",children:r.jsx(e,{color:"#fff",children:"Тёмная (eggplant)"})}),r.jsx(d,{width:300,height:200,padding:36,radius:48,background:"#FFE4F6",children:r.jsx(e,{color:"#410031",children:"Розовая, r=48"})})]})};var a,n,t;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    background: '#FFFFFF',
    radius: 28,
    padding: 48,
    border: '1px solid #ECE3E9',
    width: 560,
    height: 320,
    children: <Body size="lead">Контент плашки</Body>
  }
}`,...(t=(n=o.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};var c,s,p;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <Row>
      <Surface width={300} height={200} padding={36} background="#FFFFFF" border="1px solid #ECE3E9"><Body>Белая + рамка</Body></Surface>
      <Surface width={300} height={200} padding={36} background="linear-gradient(180deg,#D6FE9E,#FFF2CC)"><Body>Лаймовый градиент</Body></Surface>
      <Surface width={300} height={200} padding={36} background="#410031"><Body color="#fff">Тёмная (eggplant)</Body></Surface>
      <Surface width={300} height={200} padding={36} radius={48} background="#FFE4F6"><Body color="#410031">Розовая, r=48</Body></Surface>
    </Row>
}`,...(p=(s=i.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const E=["Playground","Варианты"];export{o as Playground,E as __namedExportsOrder,f as default,i as Варианты};
