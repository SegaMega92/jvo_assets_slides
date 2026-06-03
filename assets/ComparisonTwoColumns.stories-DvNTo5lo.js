import{j as o}from"./jsx-runtime-DFAAy_2V.js";import{S as C}from"./SlideFrame-V9XlKTp6.js";import{S as T}from"./SlideHeader-DVUJPzr0.js";import{l as t,c as d,b as a}from"./tokens-C4zTMbFB.js";import"./index-Bc2G9s8g.js";const l=({col:e,defaultBg:r})=>o.jsxs("div",{style:{background:e.bg??r,borderRadius:t.card.radius,padding:t.card.padding,color:e.textColor,display:"flex",flexDirection:"column",gap:28,height:"100%",boxSizing:"border-box"},children:[e.heading&&o.jsx("div",{style:{...a.h3,color:e.textColor??a.h3.color},children:e.heading}),e.body&&o.jsx("div",{style:{...a.body,color:e.textColor??a.body.color},children:e.body})]}),b=({title:e,lead:r,left:y,right:f,connector:i,theme:x="light"})=>{const R=e||r?t.bodyTop+(r?80:0):t.slidePadY*2;return o.jsxs(C,{theme:x,children:[o.jsx(T,{title:e,lead:r}),o.jsxs("div",{style:{position:"absolute",left:t.slidePadX,right:t.slidePadX,top:R,bottom:t.slidePadY,display:"grid",gridTemplateColumns:"1fr 1fr",gap:t.card.gap*2},children:[o.jsx(l,{col:y,defaultBg:d.bg.softGray}),o.jsx(l,{col:f,defaultBg:d.brand.pinkLight}),i&&o.jsx("div",{style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",zIndex:5},children:i})]})]})};b.__docgenInfo={description:"",methods:[],displayName:"ComparisonTwoColumns",props:{title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},lead:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},left:{required:!0,tsType:{name:"Column"},description:""},right:{required:!0,tsType:{name:"Column"},description:""},connector:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},theme:{required:!1,tsType:{name:"unknown"},description:"",defaultValue:{value:"'light'",computed:!1}}}};const v={title:"Лейауты/3 · ComparisonTwoColumns",component:b,argTypes:{theme:{control:"select",options:["light","eggplant","pinkPastel"]}}},s={args:{title:"Рынок изменился",lead:"Маркетплейсы больше не прощают недоработки в карточках",left:{heading:"Раньше",body:"Кто больше продаёт, тот первый в выдаче. Высокая комиссия. Дешёвый трафик.",bg:d.bg.softGray},right:{heading:"Сейчас",body:"100+ факторов ранжирования. Выдача персонализирована. Дорогой трафик.",bg:d.brand.pinkLight}}},n={args:{title:"Объединяйте силы с нами!",lead:"Оставляйте команде только эффективные действия",left:{heading:"Что будет делать платформа Дживио",body:"24/7 анализировать показатели · искать утечки · формулировать задачи"},right:{heading:"Что будет на вашей команде",body:"Вовремя выполнять задания · принимать стратегические решения"}}};var c,p,g;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    title: 'Рынок изменился',
    lead: 'Маркетплейсы больше не прощают недоработки в карточках',
    left: {
      heading: 'Раньше',
      body: 'Кто больше продаёт, тот первый в выдаче. Высокая комиссия. Дешёвый трафик.',
      bg: colors.bg.softGray
    },
    right: {
      heading: 'Сейчас',
      body: '100+ факторов ранжирования. Выдача персонализирована. Дорогой трафик.',
      bg: colors.brand.pinkLight
    }
  }
}`,...(g=(p=s.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var m,u,h;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    title: 'Объединяйте силы с нами!',
    lead: 'Оставляйте команде только эффективные действия',
    left: {
      heading: 'Что будет делать платформа Дживио',
      body: '24/7 анализировать показатели · искать утечки · формулировать задачи'
    },
    right: {
      heading: 'Что будет на вашей команде',
      body: 'Вовремя выполнять задания · принимать стратегические решения'
    }
  }
}`,...(h=(u=n.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const P=["РаньшеСейчас","МыИВы"];export{P as __namedExportsOrder,v as default,n as МыИВы,s as РаньшеСейчас};
