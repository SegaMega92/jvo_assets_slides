import{j as r}from"./jsx-runtime-DFAAy_2V.js";import{S as x}from"./SlideFrame-V9XlKTp6.js";import{l as e,b as t,c as i}from"./tokens-C4zTMbFB.js";import"./index-Bc2G9s8g.js";const f=({productName:l,lead:s,tariffs:p,specialOffer:d,socialProof:n,theme:h="light"})=>r.jsxs(x,{theme:h,children:[r.jsxs("div",{style:{position:"absolute",left:e.slidePadX,top:e.slidePadY,right:e.slidePadX+e.logoSize+32},children:[r.jsx("div",{style:t.h4,children:l}),s&&r.jsx("div",{style:{...t.small,marginTop:12,color:i.text.muted},children:s})]}),r.jsx("div",{style:{position:"absolute",left:e.slidePadX,right:e.slidePadX,top:e.bodyTop-100,bottom:n||d?280:e.slidePadY,display:"grid",gridTemplateColumns:`repeat(${p.length}, 1fr)`,gap:e.card.gap*2},children:p.map((a,y)=>r.jsxs("div",{style:{background:a.highlighted?i.brand.eggplant:i.bg.softGray,color:a.highlighted?i.text.onDark:i.text.primary,borderRadius:e.card.radius,padding:e.card.padding,display:"flex",flexDirection:"column",gap:24},children:[a.name&&r.jsx("div",{style:{...t.h3,color:"inherit"},children:a.name}),a.price&&r.jsx("div",{style:{...t.h4,color:"inherit"},children:a.price}),a.features&&r.jsx("div",{style:{...t.small,color:"inherit"},children:a.features})]},y))}),(d||n)&&r.jsxs("div",{style:{position:"absolute",left:e.slidePadX,right:e.slidePadX,bottom:e.slidePadY,height:200,display:"flex",gap:e.card.gap},children:[d&&r.jsx("div",{style:{flex:1,background:i.accent.lime,color:i.accent.limeDark,borderRadius:e.card.radius,padding:e.card.padding,display:"flex",flexDirection:"column",justifyContent:"center",gap:12,...t.body},children:d}),n&&r.jsx("div",{style:{flex:1,background:i.bg.softGray,borderRadius:e.card.radius,padding:e.card.padding,display:"flex",alignItems:"center",...t.body},children:n})]})]});f.__docgenInfo={description:"",methods:[],displayName:"PricingTariffs",props:{productName:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},lead:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},tariffs:{required:!0,tsType:{name:"Array",elements:[{name:"TariffColumn"}],raw:"TariffColumn[]"},description:""},specialOffer:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},socialProof:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},theme:{required:!1,tsType:{name:"unknown"},description:"",defaultValue:{value:"'light'",computed:!1}}}};const T={title:"Лейауты/6 · PricingTariffs",component:f},c=({items:l})=>r.jsx("ul",{style:{paddingLeft:24,margin:0,color:"inherit"},children:l.map(s=>r.jsx("li",{style:{marginBottom:12},children:s},s))}),o={args:{productName:"Дживио Агент",lead:"Оплата за действие (Pay as you go)",tariffs:[{name:"Старт",price:"15 ₽ / действие",features:r.jsx(c,{items:["До 1000 действий","Базовая аналитика","Email-поддержка"]})},{name:"Бизнес",price:"10 ₽ / действие",features:r.jsx(c,{items:["От 1000 действий","Продвинутая аналитика","Чат-поддержка 24/7"]}),highlighted:!0},{name:"Enterprise",price:"Договор",features:r.jsx(c,{items:["Без лимитов","Личный менеджер","SLA + интеграции"]})}],specialOffer:"Спецпредложение до 27.02: вся сумма на баланс Агента в виде бонусов",socialProof:"Выбирают крупнейшие бренды Wildberries и Ozon"}};var m,u,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    productName: 'Дживио Агент',
    lead: 'Оплата за действие (Pay as you go)',
    tariffs: [{
      name: 'Старт',
      price: '15 ₽ / действие',
      features: <Features items={['До 1000 действий', 'Базовая аналитика', 'Email-поддержка']} />
    }, {
      name: 'Бизнес',
      price: '10 ₽ / действие',
      features: <Features items={['От 1000 действий', 'Продвинутая аналитика', 'Чат-поддержка 24/7']} />,
      highlighted: true
    }, {
      name: 'Enterprise',
      price: 'Договор',
      features: <Features items={['Без лимитов', 'Личный менеджер', 'SLA + интеграции']} />
    }],
    specialOffer: 'Спецпредложение до 27.02: вся сумма на баланс Агента в виде бонусов',
    socialProof: 'Выбирают крупнейшие бренды Wildberries и Ozon'
  }
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const v=["ТриТарифа"];export{v as __namedExportsOrder,T as default,o as ТриТарифа};
