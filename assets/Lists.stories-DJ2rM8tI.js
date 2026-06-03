import{j as r}from"./jsx-runtime-DFAAy_2V.js";import{A as E,C as x,a as i,F as L}from"./lists-VTmAscUv.js";import{S as t}from"./primitives-CXzfv1ty.js";import{R as k,B as R}from"./_preview-DvKkekIt.js";import"./index-Bc2G9s8g.js";import"./tokens-C4zTMbFB.js";const _={title:"Слайдкит/Списки/Списки",component:E,decorators:[R()],parameters:{docs:{description:{component:"Четыре типа списков: со стрелками (ArrowList), с галочками (CheckList), «→ пункт» (FeatureList) и строки сравнения «значение + подпись» (ComparisonRows)."}}},argTypes:{items:{control:"object"},markerBg:{control:"color"},markerArrow:{control:"color"},textColor:{control:"color"},fontSize:{control:{type:"range",min:14,max:40}}}},e={name:"ArrowList",args:{items:["100+ факторов ранжирования","Выдача персонализирована под пользователя и регион","Реклама не гарантирует просмотры, главное — органика"]}},a={name:"CheckList",render:()=>r.jsx(t,{background:"#410031",padding:48,radius:28,width:680,children:r.jsx(x,{textColor:"#FFE4F6",items:["24/7 анализировать факторы выдачи и продаж","Изучать вас и конкурентов","Выдавать конкретные действия по каждой карточке"]})})},o={name:"FeatureList",render:()=>r.jsx(t,{background:"#FFFFFF",border:"1px solid #ECE3E9",padding:44,radius:28,width:620,children:r.jsx(L,{items:["Анализ метрик магазина: просмотры, заказы, CTR, CR, ДРР","Аудит магазина и рекомендации","Коммуникация с маркетплейсом","Анализ конкурентов: цена, контент, продвижение"]})})},s={name:"ComparisonRows",render:()=>r.jsxs(k,{children:[r.jsx(t,{background:"#FFECB7",padding:44,radius:28,children:r.jsx(i,{valueColor:"#E0631F",rows:[{value:"10%",label:"проблем решается вовремя"},{value:"24/7",label:"режим тушения пожаров"},{value:"Excel",label:"решения «на глаз»"}]})}),r.jsx(t,{background:"#410031",padding:44,radius:28,children:r.jsx(i,{valueColor:"#FF8FDA",labelColor:"#F3E0EE",rows:[{value:"100%",label:"матрицы под контролем 24/7"},{value:"До",label:"проблема решается до ущерба"},{value:"Данные",label:"решения по триггерам"}]})})]})};var c,l,n;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'ArrowList',
  args: {
    items: ['100+ факторов ранжирования', 'Выдача персонализирована под пользователя и регион', 'Реклама не гарантирует просмотры, главное — органика']
  }
}`,...(n=(l=e.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var d,u,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'CheckList',
  render: () => <Surface background="#410031" padding={48} radius={28} width={680}>
      <CheckList textColor="#FFE4F6" items={['24/7 анализировать факторы выдачи и продаж', 'Изучать вас и конкурентов', 'Выдавать конкретные действия по каждой карточке']} />
    </Surface>
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,F,C;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'FeatureList',
  render: () => <Surface background="#FFFFFF" border="1px solid #ECE3E9" padding={44} radius={28} width={620}>
      <FeatureList items={['Анализ метрик магазина: просмотры, заказы, CTR, CR, ДРР', 'Аудит магазина и рекомендации', 'Коммуникация с маркетплейсом', 'Анализ конкурентов: цена, контент, продвижение']} />
    </Surface>
}`,...(C=(F=o.parameters)==null?void 0:F.docs)==null?void 0:C.source}}};var w,b,g;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'ComparisonRows',
  render: () => <Row>
      <Surface background="#FFECB7" padding={44} radius={28}><ComparisonRows valueColor="#E0631F" rows={[{
        value: '10%',
        label: 'проблем решается вовремя'
      }, {
        value: '24/7',
        label: 'режим тушения пожаров'
      }, {
        value: 'Excel',
        label: 'решения «на глаз»'
      }]} /></Surface>
      <Surface background="#410031" padding={44} radius={28}><ComparisonRows valueColor="#FF8FDA" labelColor="#F3E0EE" rows={[{
        value: '100%',
        label: 'матрицы под контролем 24/7'
      }, {
        value: 'До',
        label: 'проблема решается до ущерба'
      }, {
        value: 'Данные',
        label: 'решения по триггерам'
      }]} /></Surface>
    </Row>
}`,...(g=(b=s.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const B=["ArrowList_","CheckList_","FeatureList_","ComparisonRows_"];export{e as ArrowList_,a as CheckList_,s as ComparisonRows_,o as FeatureList_,B as __namedExportsOrder,_ as default};
