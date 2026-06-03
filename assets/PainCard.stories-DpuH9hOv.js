import{j as t}from"./jsx-runtime-DFAAy_2V.js";import{P as a}from"./cards-BfYkgp8C.js";import{B as i,R as m}from"./_preview-DvKkekIt.js";import"./index-Bc2G9s8g.js";import"./tokens-C4zTMbFB.js";import"./primitives-CXzfv1ty.js";const w={title:"Слайдкит/Карточки/PainCard",component:a,decorators:[i()],parameters:{docs:{description:{component:"Карточка-проблема: заголовок процесса, подпись текущего состояния, разделитель и текст-последствие. «Квадранты боли» на Enterprise s3."}}},argTypes:{title:{control:"text"},sublabel:{control:"text"},danger:{control:"text"},width:{control:"number"}}},e={args:{title:"Цена",sublabel:"Excel + ручной режим",danger:"Цена выше оптимальной → падают заказы"}},r={render:()=>t.jsxs(m,{children:[t.jsx(a,{width:360,title:"Реклама",sublabel:"Excel + ручной режим",danger:"Бюджет сжигается из-за неэффективного управления"}),t.jsx(a,{width:360,title:"Поставки",sublabel:"Excel + ручной режим",danger:"Не успели поставить → потеря позиции"})]})};var o,s,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    title: 'Цена',
    sublabel: 'Excel + ручной режим',
    danger: 'Цена выше оптимальной → падают заказы'
  }
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var l,d,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <Row>
      <PainCard width={360} title="Реклама" sublabel="Excel + ручной режим" danger="Бюджет сжигается из-за неэффективного управления" />
      <PainCard width={360} title="Поставки" sublabel="Excel + ручной режим" danger="Не успели поставить → потеря позиции" />
    </Row>
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const P=["Playground","Квадранты"];export{e as Playground,P as __namedExportsOrder,w as default,r as Квадранты};
