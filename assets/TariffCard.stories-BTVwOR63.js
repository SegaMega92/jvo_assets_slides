import{j as l}from"./jsx-runtime-DFAAy_2V.js";import{T as r}from"./cards-BfYkgp8C.js";import{B as p,R as u}from"./_preview-DvKkekIt.js";import"./index-Bc2G9s8g.js";import"./tokens-C4zTMbFB.js";import"./primitives-CXzfv1ty.js";const f={title:"Слайдкит/Карточки/TariffCard",component:r,decorators:[p()],parameters:{docs:{description:{component:"Карточка тарифа: заголовок, чипы (API/пользователи), список параметров «название → значение», итоговая строка, цена за день и бонус-плашка. Пакеты «Стандарт»/«Премиум» (КП s25–26)."}}},argTypes:{title:{control:"text"},chips:{control:"object"},rows:{control:"object"},total:{control:"text"},perDay:{control:"text"},bonus:{control:"text"},width:{control:"number"}}},e={args:{title:"«Стандарт»",chips:["1 API","1 Пользователь"],rows:[{label:"Подписка на 6 месяцев",value:"1 099 900 ₽"},{label:"SEO PRO, 100 SKU",value:"вкл"},{label:"Внедрение",value:"вкл"},{label:"Тех. поддержка",value:"вкл"}],total:"Итого: 1 099 900 ₽ / 6 мес.",perDay:"Всего 6 110 ₽ / день",bonus:"25% на баланс Агента в виде бонусов"}},a={render:()=>l.jsxs(u,{children:[l.jsx(r,{width:500,title:"«Стандарт»",chips:["1 API","1 Пользователь"],rows:[{label:"Подписка на 6 месяцев",value:"1 099 900 ₽"},{label:"Внедрение",value:"вкл"},{label:"Тех. поддержка",value:"вкл"}],total:"Итого: 1 099 900 ₽ / 6 мес.",perDay:"Всего 6 110 ₽ / день"}),l.jsx(r,{width:500,title:"«Премиум»",chips:["3 API","5 Пользователей"],rows:[{label:"Подписка на 12 месяцев",value:"1 899 900 ₽"},{label:"Персональный менеджер",value:"вкл"},{label:"Ozon",value:"вкл"}],total:"Итого: 1 899 900 ₽ / 12 мес.",perDay:"Всего 5 277 ₽ / день",bonus:"50% на баланс Агента в виде бонусов"})]})};var o,t,s;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    title: '«Стандарт»',
    chips: ['1 API', '1 Пользователь'],
    rows: [{
      label: 'Подписка на 6 месяцев',
      value: '1 099 900 ₽'
    }, {
      label: 'SEO PRO, 100 SKU',
      value: 'вкл'
    }, {
      label: 'Внедрение',
      value: 'вкл'
    }, {
      label: 'Тех. поддержка',
      value: 'вкл'
    }],
    total: 'Итого: 1 099 900 ₽ / 6 мес.',
    perDay: 'Всего 6 110 ₽ / день',
    bonus: '25% на баланс Агента в виде бонусов'
  }
}`,...(s=(t=e.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};var n,c,i;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <Row>
      <TariffCard width={500} title="«Стандарт»" chips={['1 API', '1 Пользователь']} rows={[{
      label: 'Подписка на 6 месяцев',
      value: '1 099 900 ₽'
    }, {
      label: 'Внедрение',
      value: 'вкл'
    }, {
      label: 'Тех. поддержка',
      value: 'вкл'
    }]} total="Итого: 1 099 900 ₽ / 6 мес." perDay="Всего 6 110 ₽ / день" />
      <TariffCard width={500} title="«Премиум»" chips={['3 API', '5 Пользователей']} rows={[{
      label: 'Подписка на 12 месяцев',
      value: '1 899 900 ₽'
    }, {
      label: 'Персональный менеджер',
      value: 'вкл'
    }, {
      label: 'Ozon',
      value: 'вкл'
    }]} total="Итого: 1 899 900 ₽ / 12 мес." perDay="Всего 5 277 ₽ / день" bonus="50% на баланс Агента в виде бонусов" />
    </Row>
}`,...(i=(c=a.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const x=["Playground","Пара"];export{e as Playground,x as __namedExportsOrder,f as default,a as Пара};
