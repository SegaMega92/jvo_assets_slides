import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{P as l}from"./tables-Cm8OMbRc.js";import{S as c}from"./primitives-CXzfv1ty.js";import{B as i,R as b}from"./_preview-DvKkekIt.js";import"./index-Bc2G9s8g.js";import"./tokens-C4zTMbFB.js";const x={title:"Слайдкит/Таблицы/PriceList",component:l,decorators:[i()],parameters:{docs:{description:{component:"Прайс-лист «услуга … цена» с разделителями. Колонки тарификации Pay-as-you-go (КП s28–31). Есть приглушённый вариант для «дополнительных» позиций."}}},argTypes:{rows:{control:"object"},muted:{control:"boolean"},labelColor:{control:"color"},width:{control:"number"}}},a={args:{rows:[{label:"Ценообразование от Дживио AI",value:"1 ₽"},{label:"Ответы на отзыв с Дживио AI",value:"2 ₽"},{label:"Инсайты по продукту AI",value:"100 ₽"},{label:"Ответы по шаблону",value:"2 ₽"}]}},r={name:"Основной + приглушённый",render:()=>e.jsx(c,{background:"#FFFFFF",border:"1px solid #E7DEF2",radius:24,padding:44,width:1300,children:e.jsxs(b,{gap:60,children:[e.jsx(l,{width:360,labelColor:"#34034C",rows:[{label:"Ценообразование от AI",value:"1 ₽"},{label:"Ответы на отзыв с AI",value:"2 ₽"},{label:"Инсайты по продукту",value:"100 ₽"}]}),e.jsx(l,{width:360,muted:!0,rows:[{label:"+ Кросс-продажи в ответах",value:"3 ₽"},{label:"+ Определение тональности",value:"3 ₽"},{label:"+ Анализ переходов",value:"3 ₽"}]})]})})};var o,s,t;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    rows: [{
      label: 'Ценообразование от Дживио AI',
      value: '1 ₽'
    }, {
      label: 'Ответы на отзыв с Дживио AI',
      value: '2 ₽'
    }, {
      label: 'Инсайты по продукту AI',
      value: '100 ₽'
    }, {
      label: 'Ответы по шаблону',
      value: '2 ₽'
    }]
  }
}`,...(t=(s=a.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};var n,u,d;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'Основной + приглушённый',
  render: () => <Surface background="#FFFFFF" border="1px solid #E7DEF2" radius={24} padding={44} width={1300}>
      <Row gap={60}>
        <PriceList width={360} labelColor="#34034C" rows={[{
        label: 'Ценообразование от AI',
        value: '1 ₽'
      }, {
        label: 'Ответы на отзыв с AI',
        value: '2 ₽'
      }, {
        label: 'Инсайты по продукту',
        value: '100 ₽'
      }]} />
        <PriceList width={360} muted rows={[{
        label: '+ Кросс-продажи в ответах',
        value: '3 ₽'
      }, {
        label: '+ Определение тональности',
        value: '3 ₽'
      }, {
        label: '+ Анализ переходов',
        value: '3 ₽'
      }]} />
      </Row>
    </Surface>
}`,...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const A=["Playground","ОсновнойИДоп"];export{a as Playground,A as __namedExportsOrder,x as default,r as ОсновнойИДоп};
