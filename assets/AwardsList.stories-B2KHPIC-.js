import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{S as h}from"./SlideFrame-V9XlKTp6.js";import{l as a,c as t,b as i}from"./tokens-C4zTMbFB.js";import"./index-Bc2G9s8g.js";const p=({awards:g,hero:m,badges:s,theme:u="pinkPastel",cardBg:b=t.brand.pinkLight})=>e.jsx(h,{theme:u,children:e.jsxs("div",{style:{position:"absolute",inset:a.slidePadY,display:"grid",gridTemplateColumns:"46% 54%",gridTemplateRows:s?"1fr 220px":"1fr",gridTemplateAreas:s?'"awards hero" "badges badges"':'"awards hero"',gap:a.card.gap},children:[e.jsx("div",{style:{gridArea:"awards",background:b,borderRadius:a.card.radius,padding:a.card.padding,display:"flex",flexDirection:"column",justifyContent:"space-between",gap:a.card.gap},children:g.map((r,d)=>e.jsxs("div",{style:{display:"flex",gap:24,alignItems:"flex-start",borderTop:d>0?"2px solid rgba(0,0,0,0.08)":void 0,paddingTop:d>0?24:0},children:[r.icon&&e.jsx("div",{style:{flexShrink:0},children:r.icon}),e.jsxs("div",{children:[r.title&&e.jsx("div",{style:{...i.cardTitle,color:t.brand.eggplant},children:r.title}),r.subtitle&&e.jsx("div",{style:{...i.small,color:t.text.mutedDark,marginTop:8},children:r.subtitle})]})]},d))}),e.jsx("div",{style:{gridArea:"hero",background:t.bg.white,borderRadius:a.card.radius,overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center"},children:m}),s&&s.length>0&&e.jsx("div",{style:{gridArea:"badges",background:t.brand.eggplant,color:t.text.onDark,borderRadius:a.card.radius,padding:a.card.padding*.75,display:"flex",alignItems:"center",gap:a.card.gap*2,flexWrap:"wrap"},children:s.map((r,d)=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[r.icon,e.jsx("span",{style:{...i.small,color:"inherit"},children:r.label})]},d))})]})});p.__docgenInfo={description:"",methods:[],displayName:"AwardsList",props:{awards:{required:!0,tsType:{name:"Array",elements:[{name:"Award"}],raw:"Award[]"},description:""},hero:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},badges:{required:!1,tsType:{name:"Array",elements:[{name:"Badge"}],raw:"Badge[]"},description:""},theme:{required:!1,tsType:{name:"unknown"},description:"",defaultValue:{value:"'pinkPastel'",computed:!1}},cardBg:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#FFE4F6'",computed:!1}}}};const T={title:"Лейауты/9 · AwardsList",component:p},x=e.jsx("div",{style:{...i.body,color:t.text.muted},children:"[Фото награды / команда]"}),l={args:{awards:[{title:"Победитель премии «Большой Оборот-2025» ↗",subtitle:"в сфере «Продвижение на маркетплейсах»"},{title:"Победитель STARTECH AWARDS 2025 ↗",subtitle:"в номинации «Лучший AI-сервис»"},{title:"Дживио Агент на первой строчке ↗",subtitle:"в карте российского ИИ от РБК"}],hero:x,badges:[{label:"Аккредитованая IT-компания"},{label:"Резидент Сколково"},{label:"Топ-100 AI-стартапов"}]}};var n,o,c;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    awards: [{
      title: 'Победитель премии «Большой Оборот-2025» ↗',
      subtitle: 'в сфере «Продвижение на маркетплейсах»'
    }, {
      title: 'Победитель STARTECH AWARDS 2025 ↗',
      subtitle: 'в номинации «Лучший AI-сервис»'
    }, {
      title: 'Дживио Агент на первой строчке ↗',
      subtitle: 'в карте российского ИИ от РБК'
    }],
    hero: heroPlaceholder,
    badges: [{
      label: 'Аккредитованая IT-компания'
    }, {
      label: 'Резидент Сколково'
    }, {
      label: 'Топ-100 AI-стартапов'
    }]
  }
}`,...(c=(o=l.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};const j=["Регалии"];export{j as __namedExportsOrder,T as default,l as Регалии};
