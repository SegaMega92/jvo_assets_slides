import{j as a}from"./jsx-runtime-DFAAy_2V.js";import{S as T}from"./SlideFrame-V9XlKTp6.js";import{S as v}from"./SlideHeader-DVUJPzr0.js";import{l as e,c as i,b as c}from"./tokens-C4zTMbFB.js";import"./index-Bc2G9s8g.js";const f=({title:n,lead:o,media:x,features:d,theme:R="light",mediaWidth:l=55})=>{const j=n||o?e.bodyTop+(o?80:0):e.slidePadY*2;return a.jsxs(T,{theme:R,children:[a.jsx(v,{title:n,lead:o}),a.jsxs("div",{style:{position:"absolute",left:e.slidePadX,right:e.slidePadX,top:j,bottom:e.slidePadY,display:"flex",gap:e.card.gap*2},children:[d&&d.length>0&&a.jsx("div",{style:{flex:`0 0 ${100-l}%`,display:"grid",gridTemplateColumns:d.length>2?"1fr 1fr":"1fr",gridAutoRows:"minmax(0, 1fr)",gap:e.card.gap},children:d.map((t,w)=>a.jsxs("div",{style:{background:i.bg.softGray,borderRadius:e.card.radius,padding:e.card.padding*.75,display:"flex",flexDirection:"column",gap:16},children:[t.icon,t.heading&&a.jsx("div",{style:c.cardTitle,children:t.heading}),t.body&&a.jsx("div",{style:c.small,children:t.body})]},w))}),a.jsx("div",{style:{flex:d?`0 0 ${l}%`:"1 1 100%",background:i.bg.softGray,borderRadius:e.card.radius,overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center"},children:x})]})]})};f.__docgenInfo={description:"",methods:[],displayName:"DashboardShowcase",props:{title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},lead:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},media:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},features:{required:!1,tsType:{name:"Array",elements:[{name:"Feature"}],raw:"Feature[]"},description:""},theme:{required:!1,tsType:{name:"unknown"},description:"",defaultValue:{value:"'light'",computed:!1}},mediaWidth:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"55",computed:!1}}}};const F={title:"Лейауты/4 · DashboardShowcase",component:f,argTypes:{theme:{control:"select",options:["light","eggplant","pinkPastel"]},mediaWidth:{control:{type:"range",min:30,max:80,step:5}}}},b=a.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",color:i.text.muted,fontFamily:"Manrope",fontSize:32},children:"[Скриншот дашборда]"}),r={args:{title:"Дашборд",lead:"Отслеживайте все метрики здоровья бизнеса в едином аналитическом центре",media:b,features:[{heading:"Сводка",body:"Подробные данные обо всех показателях"},{heading:"Финансы",body:"Оценим маржинальность, упущенные заказы"},{heading:"Задачи",body:"Готовые задачи для увеличения прибыли"},{heading:"Динамика",body:"Сравнение с прошлым периодом и трендами"}]}},s={args:{title:"Студия Дживио",lead:"Интерфейс работы с креативами",media:b}};var p,m,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: 'Дашборд',
    lead: 'Отслеживайте все метрики здоровья бизнеса в едином аналитическом центре',
    media: placeholderMedia,
    features: [{
      heading: 'Сводка',
      body: 'Подробные данные обо всех показателях'
    }, {
      heading: 'Финансы',
      body: 'Оценим маржинальность, упущенные заказы'
    }, {
      heading: 'Задачи',
      body: 'Готовые задачи для увеличения прибыли'
    }, {
      heading: 'Динамика',
      body: 'Сравнение с прошлым периодом и трендами'
    }]
  }
}`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var h,u,y;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    title: 'Студия Дживио',
    lead: 'Интерфейс работы с креативами',
    media: placeholderMedia
  }
}`,...(y=(u=s.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const M=["Дашборд","ТолькоМедиа"];export{M as __namedExportsOrder,F as default,r as Дашборд,s as ТолькоМедиа};
