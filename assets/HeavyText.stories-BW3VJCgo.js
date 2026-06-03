import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{S as h}from"./SlideFrame-V9XlKTp6.js";import{S as f}from"./SlideHeader-DVUJPzr0.js";import{l as a,c as b,b as r}from"./tokens-C4zTMbFB.js";import"./index-Bc2G9s8g.js";const c=({title:s,lead:o,blocks:p,columns:m=2,theme:u="light"})=>{const y=s||o?a.bodyTop+(o?80:0):a.slidePadY*2;return e.jsxs(h,{theme:u,children:[e.jsx(f,{title:s,lead:o}),e.jsx("div",{style:{position:"absolute",left:a.slidePadX,right:a.slidePadX,top:y,bottom:a.slidePadY,display:"grid",gridTemplateColumns:`repeat(${m}, 1fr)`,gap:a.card.gap*2,alignContent:"start"},children:p.map((n,g)=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[n.heading&&e.jsx("div",{style:{...r.cardTitle,color:b.brand.eggplant},children:n.heading}),e.jsx("div",{style:r.body,children:n.body})]},g))})]})};c.__docgenInfo={description:"",methods:[],displayName:"HeavyText",props:{title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},lead:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},blocks:{required:!0,tsType:{name:"Array",elements:[{name:"TextBlock"}],raw:"TextBlock[]"},description:""},columns:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"}]},description:"",defaultValue:{value:"2",computed:!1}},theme:{required:!1,tsType:{name:"unknown"},description:"",defaultValue:{value:"'light'",computed:!1}}}};const H={title:"Лейауты/11 · HeavyText",component:c,argTypes:{theme:{control:"select",options:["light","pinkPastel"]},columns:{control:"radio",options:[1,2,3]}}},t={args:{title:"Наша методология",lead:"Что лежит в основе работы Дживио",columns:2,blocks:[{heading:"Принцип 1: данные первичны",body:"Мы не доверяем интуиции. Каждое решение должно быть подтверждено цифрами из реальных продаж и аналитики маркетплейсов."},{heading:"Принцип 2: автоматизация рутины",body:"Человек должен принимать стратегические решения. Анализ метрик, рекалькуляция цен, обновление контента — задача алгоритма."},{heading:"Принцип 3: прозрачность",body:"Каждая рекомендация системы объяснима. Мы показываем не только что делать, но и почему именно так."},{heading:"Принцип 4: непрерывное обучение",body:"Алгоритмы маркетплейсов меняются. Наши модели переобучаются каждые 7 дней на свежих данных."}]}};var d,l,i;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: 'Наша методология',
    lead: 'Что лежит в основе работы Дживио',
    columns: 2,
    blocks: [{
      heading: 'Принцип 1: данные первичны',
      body: 'Мы не доверяем интуиции. Каждое решение должно быть подтверждено цифрами из реальных продаж и аналитики маркетплейсов.'
    }, {
      heading: 'Принцип 2: автоматизация рутины',
      body: 'Человек должен принимать стратегические решения. Анализ метрик, рекалькуляция цен, обновление контента — задача алгоритма.'
    }, {
      heading: 'Принцип 3: прозрачность',
      body: 'Каждая рекомендация системы объяснима. Мы показываем не только что делать, но и почему именно так.'
    }, {
      heading: 'Принцип 4: непрерывное обучение',
      body: 'Алгоритмы маркетплейсов меняются. Наши модели переобучаются каждые 7 дней на свежих данных.'
    }]
  }
}`,...(i=(l=t.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const q=["Манифест"];export{q as __namedExportsOrder,H as default,t as Манифест};
