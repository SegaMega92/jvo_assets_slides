import{j as o}from"./jsx-runtime-DFAAy_2V.js";import{S as a}from"./cards-BfYkgp8C.js";import{B as u,R as i}from"./_preview-DvKkekIt.js";import"./index-Bc2G9s8g.js";import"./tokens-C4zTMbFB.js";import"./primitives-CXzfv1ty.js";const S={title:"Слайдкит/Карточки/StatCallout",component:a,decorators:[u()],parameters:{docs:{description:{component:"Стат-callout: пилюля со значением + жирная подпись + описание. Блок результатов («что получают клиенты за 90 дней», Enterprise s11)."}}},argTypes:{value:{control:"text"},valueBg:{control:"text",description:"Фон пилюли"},valueColor:{control:"color"},label:{control:"text"},desc:{control:"text"},width:{control:"number"}}},e={args:{value:"+18%",label:"к выручке за 90 дней",desc:"За счёт устранения OOS на топ-SKU и разгона неликвида"}},r={render:()=>o.jsxs(i,{children:[o.jsx(a,{width:500,value:"−32%",label:"ДРР в среднем",desc:"Агент рекламы прекращает жечь бюджет на неэффективных кампаниях"}),o.jsx(a,{width:500,value:"<1 мин",valueBg:"linear-gradient(90deg,#FF8FDA,#FFCFEF)",valueColor:"#410031",label:"скорость реакции",desc:"От обнаружения проблемы до корректирующего действия"})]})};var t,l,s;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    value: '+18%',
    label: 'к выручке за 90 дней',
    desc: 'За счёт устранения OOS на топ-SKU и разгона неликвида'
  }
}`,...(s=(l=e.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};var n,c,d;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <Row>
      <StatCallout width={500} value="−32%" label="ДРР в среднем" desc="Агент рекламы прекращает жечь бюджет на неэффективных кампаниях" />
      <StatCallout width={500} value="<1 мин" valueBg="linear-gradient(90deg,#FF8FDA,#FFCFEF)" valueColor="#410031" label="скорость реакции" desc="От обнаружения проблемы до корректирующего действия" />
    </Row>
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const C=["Playground","Варианты"];export{e as Playground,C as __namedExportsOrder,S as default,r as Варианты};
