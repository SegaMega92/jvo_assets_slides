import{j as r}from"./jsx-runtime-DFAAy_2V.js";import{b as o}from"./cards-BfYkgp8C.js";import{B as i,R as u}from"./_preview-DvKkekIt.js";import"./index-Bc2G9s8g.js";import"./tokens-C4zTMbFB.js";import"./primitives-CXzfv1ty.js";const v={title:"Слайдкит/Карточки/StatCard",component:o,decorators:[i()],parameters:{docs:{description:{component:"Стат-карточка: крупное число + подпись на цветной плашке. Рыночные показатели, метрики роста. Встречается на Enterprise s2."}}},argTypes:{value:{control:"text",description:"Крупное значение"},label:{control:"text",description:"Подпись"},background:{control:"text",description:"Фон (hex/градиент)"},valueColor:{control:"color"},labelColor:{control:"color"},width:{control:"number"},height:{control:"number"}}},e={args:{value:"11,5 трлн ₽",label:"объём интернет-торговли РФ в 2025"}},a={render:()=>r.jsxs(u,{children:[r.jsx(o,{value:"+28%",label:"рост рынка год к году"}),r.jsx(o,{value:"+58–63%",label:"рост комиссий селлерам",background:"linear-gradient(180deg,#FFE4F6,#FFDBD2)"}),r.jsx(o,{value:"70 000+",label:"решений в неделю",background:"linear-gradient(135deg,#F6B26B,#C7401E)",valueColor:"#fff",labelColor:"#fff"})]})};var t,l,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    value: '11,5 трлн ₽',
    label: 'объём интернет-торговли РФ в 2025'
  }
}`,...(n=(l=e.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var s,c,d;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <Row>
      <StatCard value="+28%" label="рост рынка год к году" />
      <StatCard value="+58–63%" label="рост комиссий селлерам" background="linear-gradient(180deg,#FFE4F6,#FFDBD2)" />
      <StatCard value="70 000+" label="решений в неделю" background="linear-gradient(135deg,#F6B26B,#C7401E)" valueColor="#fff" labelColor="#fff" />
    </Row>
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const x=["Playground","Тоны"];export{e as Playground,x as __namedExportsOrder,v as default,a as Тоны};
