import{j as d}from"./jsx-runtime-DFAAy_2V.js";import{S as v}from"./SlideFrame-V9XlKTp6.js";import{S as I}from"./SlideHeader-DVUJPzr0.js";import{l as e,c as P,b as l}from"./tokens-C4zTMbFB.js";import"./index-Bc2G9s8g.js";const x=({title:i,lead:o,cards:t,theme:T="light",cardBg:A=P.bg.softGray})=>{const R=i||o?e.bodyTop+(o?80:0):e.slidePadY*2;return d.jsxs(v,{theme:T,children:[d.jsx(I,{title:i,lead:o}),d.jsx("div",{style:{position:"absolute",left:e.slidePadX,right:e.slidePadX,top:R,bottom:e.slidePadY,display:"grid",gridTemplateColumns:`repeat(${t.length}, 1fr)`,gap:e.card.gap*2},children:t.map((a,j)=>d.jsxs("div",{style:{background:a.bg??A,borderRadius:e.card.radius,padding:e.card.padding,display:"flex",flexDirection:"column",gap:32},children:[a.icon&&d.jsx("div",{children:a.icon}),a.heading&&d.jsx("div",{style:l.h3,children:a.heading}),a.body&&d.jsx("div",{style:l.body,children:a.body})]},j))})]})};x.__docgenInfo={description:"",methods:[],displayName:"TitleAndCardGrid",props:{title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},lead:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},cards:{required:!0,tsType:{name:"Array",elements:[{name:"Card"}],raw:"Card[]"},description:""},theme:{required:!1,tsType:{name:"unknown"},description:"",defaultValue:{value:"'light'",computed:!1}},cardBg:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#F2F3FA'",computed:!1}}}};const w={title:"Лейауты/2 · TitleAndCardGrid",component:x,argTypes:{theme:{control:"select",options:["light","dark","eggplant","pinkPastel"]}}},n={args:{title:"Единый центр управления вашими маркетплейсами",cards:[{heading:"Находит",body:"Система видит утечки выручки и точки роста, которые упускают конкуренты"},{heading:"Превращает в задачи",body:"Каждая утечка и точка роста становится задачей с дедлайном и приоритетом"},{heading:"Выполняет",body:"AI-агенты выполняют задачи через API Wildberries и Ozon автоматически"}]}},r={args:{title:"Дживио — единственная платформа",lead:"выдающая продвинутую и предписывающую аналитику",cards:[{heading:"Стратегия",body:"Реализация на вашей команде. Результат в ваших руках."},{heading:"AI",body:"Технология запатентована нами"},{heading:"Опыт",body:"$1 млн инвестиций мы привлекли на этом"},{heading:"Рост",body:"Растим компании на WB и Ozon, Яндекс маркет и мегамаркет"}]}},s={args:{cards:[{heading:"Шаг 1",body:"Подключаем кабинет"},{heading:"Шаг 2",body:"Запускаем аналитику"},{heading:"Шаг 3",body:"Получаем рост"}]}};var c,p,g;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    title: 'Единый центр управления вашими маркетплейсами',
    cards: [{
      heading: 'Находит',
      body: 'Система видит утечки выручки и точки роста, которые упускают конкуренты'
    }, {
      heading: 'Превращает в задачи',
      body: 'Каждая утечка и точка роста становится задачей с дедлайном и приоритетом'
    }, {
      heading: 'Выполняет',
      body: 'AI-агенты выполняют задачи через API Wildberries и Ozon автоматически'
    }]
  }
}`,...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var m,y,h;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    title: 'Дживио — единственная платформа',
    lead: 'выдающая продвинутую и предписывающую аналитику',
    cards: [{
      heading: 'Стратегия',
      body: 'Реализация на вашей команде. Результат в ваших руках.'
    }, {
      heading: 'AI',
      body: 'Технология запатентована нами'
    }, {
      heading: 'Опыт',
      body: '$1 млн инвестиций мы привлекли на этом'
    }, {
      heading: 'Рост',
      body: 'Растим компании на WB и Ozon, Яндекс маркет и мегамаркет'
    }]
  }
}`,...(h=(y=r.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var b,u,f;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    cards: [{
      heading: 'Шаг 1',
      body: 'Подключаем кабинет'
    }, {
      heading: 'Шаг 2',
      body: 'Запускаем аналитику'
    }, {
      heading: 'Шаг 3',
      body: 'Получаем рост'
    }]
  }
}`,...(f=(u=s.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const z=["ТриКарточки","ЧетыреКарточки","БезЗаголовка"];export{z as __namedExportsOrder,w as default,s as БезЗаголовка,n as ТриКарточки,r as ЧетыреКарточки};
