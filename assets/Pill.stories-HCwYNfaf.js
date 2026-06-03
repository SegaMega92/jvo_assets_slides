import{j as o}from"./jsx-runtime-DFAAy_2V.js";import{P as r}from"./primitives-CXzfv1ty.js";import{B as d,R as F}from"./_preview-DvKkekIt.js";import"./index-Bc2G9s8g.js";import"./tokens-C4zTMbFB.js";const x={title:"Слайдкит/Примитивы/Pill",component:r,decorators:[d()],parameters:{docs:{description:{component:"Капсула-таблетка с текстом: статусы, ценники, метки «Специальное предложение», заголовки секций. Полностью скруглённая (border-radius 999)."}}},argTypes:{background:{control:"text",description:"Заливка: hex или градиент"},color:{control:"color",description:"Цвет текста"},fontSize:{control:{type:"range",min:12,max:48},description:"Размер шрифта, px"},weight:{control:{type:"select",options:[400,500,600,700]},description:"Насыщенность"},font:{control:{type:"inline-radio",options:["body","display"]},description:"Шрифт"}}},n={args:{children:"Специальное предложение до 11.12",background:"#FF8FDA",color:"#410031",fontSize:24}},e={render:()=>o.jsxs(F,{children:[o.jsx(r,{background:"linear-gradient(90deg,#D6FE9E,#FFF2CC)",color:"#1F2A09",children:"Специальное предложение"}),o.jsx(r,{background:"#410031",color:"#FF8FDA",children:"Пакетные предложения"}),o.jsx(r,{background:"#FF8FDA",color:"#410031",children:"90+ факторов"}),o.jsx(r,{background:"#FFFFFF",color:"#FF6FC9",children:"Что входит:"})]})};var c,i,a;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'Специальное предложение до 11.12',
    background: '#FF8FDA',
    color: '#410031',
    fontSize: 24
  }
}`,...(a=(i=n.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var l,t,s;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <Row>
      <Pill background="linear-gradient(90deg,#D6FE9E,#FFF2CC)" color="#1F2A09">Специальное предложение</Pill>
      <Pill background="#410031" color="#FF8FDA">Пакетные предложения</Pill>
      <Pill background="#FF8FDA" color="#410031">90+ факторов</Pill>
      <Pill background="#FFFFFF" color="#FF6FC9">Что входит:</Pill>
    </Row>
}`,...(s=(t=e.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};const P=["Playground","Варианты"];export{n as Playground,P as __namedExportsOrder,x as default,e as Варианты};
