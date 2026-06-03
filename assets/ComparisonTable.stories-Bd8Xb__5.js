import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{c as r,l as w,f as j,b as d}from"./tokens-C4zTMbFB.js";import{S as C}from"./Stage-DSHfUkUu.js";import"./index-Bc2G9s8g.js";const A=(a,t)=>a===!0?e.jsx("span",{style:{color:t,fontSize:36,fontWeight:700},children:"✓"}):a===!1?e.jsx("span",{style:{color:r.text.muted,fontSize:32},children:"—"}):a,g=({columns:a,rows:t,accent:o=r.brand.pink,labelWidth:y=520})=>{const i=`${y}px repeat(${a.length}, minmax(0, 1fr))`;return e.jsxs("div",{style:{background:r.bg.white,borderRadius:w.card.radius,overflow:"hidden",border:`2px solid ${r.border.subtle}`},children:[e.jsxs("div",{style:{display:"grid",gridTemplateColumns:i},children:[e.jsx("div",{}),a.map((n,u)=>e.jsxs("div",{style:{background:n.featured?o:"transparent",color:n.featured?r.bg.white:r.text.primary,padding:"28px 24px",textAlign:"center",overflowWrap:"break-word",wordBreak:"break-word"},children:[e.jsx("div",{style:{fontFamily:j.display,fontSize:36,fontWeight:600,overflowWrap:"break-word",wordBreak:"break-word"},children:n.name}),n.sub&&e.jsx("div",{style:{...d.caption,color:n.featured?"rgba(255,255,255,0.8)":r.text.mutedMid,marginTop:4},children:n.sub})]},u))]}),t.map((n,u)=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:i,borderTop:`1px solid ${r.border.subtle}`},children:[e.jsx("div",{style:{...d.body,padding:"24px 32px",color:r.text.primary,display:"flex",alignItems:"center"},children:n.label}),a.map((h,m)=>e.jsx("div",{style:{padding:"24px",textAlign:"center",...d.body,color:r.text.primary,background:h.featured?`${o}14`:"transparent",display:"flex",alignItems:"center",justifyContent:"center"},children:A(n.values[m],o)},m))]},u))]})};g.__docgenInfo={description:"",methods:[],displayName:"ComparisonTable",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"CompColumn"}],raw:"CompColumn[]"},description:""},rows:{required:!0,tsType:{name:"Array",elements:[{name:"CompRow"}],raw:"CompRow[]"},description:""},accent:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#FF8FDA'",computed:!1}},labelWidth:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"520",computed:!1}}}};const W={title:"Компоненты/Таблицы/ComparisonTable",component:g,decorators:[a=>e.jsx(C,{width:1400,children:a()})]},s={args:{columns:[{name:"Старт"},{name:"Бизнес",sub:"рекомендуем",featured:!0},{name:"Enterprise"}],rows:[{label:"Кабинетов",values:["1","до 5","∞"]},{label:"Аналитика и алерты",values:[!0,!0,!0]},{label:"AI-агенты",values:[!0,!0,!0]},{label:"Персональный менеджер",values:[!1,!0,!0]},{label:"Выделенная команда",values:[!1,!1,!0]},{label:"SLA поддержки",values:["24ч","8ч","1ч"]}]}},l={args:{columns:[{name:"Дживио",featured:!0},{name:"Агентство"},{name:"Самостоятельно"}],rows:[{label:"Аналитика 24/7",values:[!0,!1,!1]},{label:"AI-рекомендации",values:[!0,!1,!1]},{label:"Прозрачная цена",values:[!0,!1,!0]},{label:"Скорость реакции",values:["минуты","дни","часы"]}]}};var p,c,f;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    columns: [{
      name: 'Старт'
    }, {
      name: 'Бизнес',
      sub: 'рекомендуем',
      featured: true
    }, {
      name: 'Enterprise'
    }],
    rows: [{
      label: 'Кабинетов',
      values: ['1', 'до 5', '∞']
    }, {
      label: 'Аналитика и алерты',
      values: [true, true, true]
    }, {
      label: 'AI-агенты',
      values: [true, true, true]
    }, {
      label: 'Персональный менеджер',
      values: [false, true, true]
    }, {
      label: 'Выделенная команда',
      values: [false, false, true]
    }, {
      label: 'SLA поддержки',
      values: ['24ч', '8ч', '1ч']
    }]
  }
}`,...(f=(c=s.parameters)==null?void 0:c.docs)==null?void 0:f.source}}};var b,x,v;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    columns: [{
      name: 'Дживио',
      featured: true
    }, {
      name: 'Агентство'
    }, {
      name: 'Самостоятельно'
    }],
    rows: [{
      label: 'Аналитика 24/7',
      values: [true, false, false]
    }, {
      label: 'AI-рекомендации',
      values: [true, false, false]
    }, {
      label: 'Прозрачная цена',
      values: [true, false, true]
    }, {
      label: 'Скорость реакции',
      values: ['минуты', 'дни', 'часы']
    }]
  }
}`,...(v=(x=l.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};const $=["Тарифы","МыПротивРынка"];export{$ as __namedExportsOrder,W as default,l as МыПротивРынка,s as Тарифы};
