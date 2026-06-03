import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{M as o}from"./cards-BfYkgp8C.js";import{B as i,R as m}from"./_preview-DvKkekIt.js";import"./index-Bc2G9s8g.js";import"./tokens-C4zTMbFB.js";import"./primitives-CXzfv1ty.js";const g={title:"Слайдкит/Карточки/MetricCard",component:o,decorators:[i()],parameters:{docs:{description:{component:"Карточка-метрика «до/после» с крупной дельтой. Блоки результатов в кейсах Студии (Выручка, ДДР, Средний чек). Есть вертикальный и горизонтальный варианты."}}},argTypes:{title:{control:"text"},before:{control:"text"},after:{control:"text"},delta:{control:"text"},deltaColor:{control:"color"},horizontal:{control:"boolean"}}},r={args:{title:"Выручка",before:"2,8 млн ₽",after:"4,5 млн ₽",delta:"+ 60%"}},t={render:()=>e.jsxs(m,{children:[e.jsx(o,{title:"Выручка",before:"2,8 млн ₽",after:"4,5 млн ₽",delta:"+ 60%",deltaColor:"#3AA655"}),e.jsx(o,{title:"ДДР",before:"35%",after:"18%",delta:"- 17%",deltaColor:"#E0631F"}),e.jsx(o,{title:"Средний чек",delta:"+ 22%",horizontal:!0})]})};var a,l,s;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    title: 'Выручка',
    before: '2,8 млн ₽',
    after: '4,5 млн ₽',
    delta: '+ 60%'
  }
}`,...(s=(l=r.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};var n,d,c;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <Row>
      <MetricCard title="Выручка" before="2,8 млн ₽" after="4,5 млн ₽" delta="+ 60%" deltaColor="#3AA655" />
      <MetricCard title="ДДР" before="35%" after="18%" delta="- 17%" deltaColor="#E0631F" />
      <MetricCard title="Средний чек" delta="+ 22%" horizontal />
    </Row>
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const j=["Playground","Варианты"];export{r as Playground,j as __namedExportsOrder,g as default,t as Варианты};
