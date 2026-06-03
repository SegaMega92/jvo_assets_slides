import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{l as v,c as a,b as s,f as q}from"./tokens-C4zTMbFB.js";import{T as D}from"./Tag-B8Oi0QVc.js";import{S as w}from"./Stage-DSHfUkUu.js";import"./index-Bc2G9s8g.js";const _=" ",o=({name:l,price:i,period:u,caption:m,rows:j,footer:f,featured:r=!1,accent:N=a.brand.pink})=>{const S=r?N:a.bg.white,t=r?a.bg.white:a.text.primary,b=r?"rgba(255,255,255,0.75)":a.text.mutedMid,I=r?"rgba(255,255,255,0.25)":a.border.subtle,A=typeof i=="string"?i.replace(/(\d)\s+(\d)/g,(n,c,C)=>c+_+C):i;return e.jsxs("div",{style:{background:S,color:t,border:r?"none":`2px solid ${a.border.subtle}`,borderRadius:v.card.radius*1.25,padding:v.card.padding,display:"flex",flexDirection:"column",gap:24,height:"100%",boxSizing:"border-box"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("div",{style:{...s.h3,color:t},children:l}),m&&e.jsx("div",{style:{...s.small,color:b},children:m})]}),i!=null&&e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[e.jsx("span",{style:{fontFamily:q.display,fontSize:64,fontWeight:600,lineHeight:1.02,color:t},children:A}),u&&e.jsx("span",{style:{...s.small,color:b,lineHeight:1.2,whiteSpace:"nowrap"},children:u})]}),e.jsx("div",{style:{display:"flex",flexDirection:"column"},children:j.map((n,c)=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:16,padding:"18px 0",borderTop:c===0?"none":`1px solid ${I}`},children:[e.jsx("span",{style:{...s.small,color:t,opacity:.9},children:n.label}),n.value!=null&&e.jsx("span",{style:{...s.small,color:t,fontWeight:600,flexShrink:0},children:n.value})]},c))}),f&&e.jsx("div",{style:{marginTop:"auto",paddingTop:8},children:f})]})};o.__docgenInfo={description:"",methods:[],displayName:"TariffCard",props:{name:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},price:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},period:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},caption:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},rows:{required:!0,tsType:{name:"Array",elements:[{name:"TariffRow"}],raw:"TariffRow[]"},description:""},footer:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},featured:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},accent:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#FF8FDA'",computed:!1}}}};const B={title:"Компоненты/Таблицы/TariffCard",component:o,decorators:[l=>e.jsx(w,{width:520,children:l()})]},d={args:{name:"Старт",price:"19 900",period:"₽ / мес",caption:"Для одного кабинета",rows:[{label:"Кабинетов",value:"1"},{label:"Аналитика и алерты",value:"✓"},{label:"AI-агенты",value:"✓"},{label:"Персональный менеджер",value:"—"}]}},p={decorators:[l=>e.jsx(w,{children:l()})],render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:32,alignItems:"stretch"},children:[e.jsx(o,{name:"Старт",price:"19 900",period:"₽ / мес",caption:"Для одного кабинета",rows:[{label:"Кабинетов",value:"1"},{label:"Аналитика и алерты",value:"✓"},{label:"AI-агенты",value:"✓"},{label:"Менеджер",value:"—"}]}),e.jsx(o,{featured:!0,name:"Бизнес",price:"49 900",period:"₽ / мес",caption:"Для растущего бренда",rows:[{label:"Кабинетов",value:"до 5"},{label:"Аналитика и алерты",value:"✓"},{label:"AI-агенты",value:"✓"},{label:"Менеджер",value:"✓"}],footer:e.jsx(D,{accent:"lime",variant:"solid",size:"sm",children:"Выбор большинства"})}),e.jsx(o,{name:"Enterprise",price:"по запросу",caption:"Для крупных продавцов",accent:a.accent.purple,rows:[{label:"Кабинетов",value:"∞"},{label:"Аналитика и алерты",value:"✓"},{label:"AI-агенты",value:"✓"},{label:"Выделенная команда",value:"✓"}]})]})};var g,y,x;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    name: 'Старт',
    price: '19 900',
    period: '₽ / мес',
    caption: 'Для одного кабинета',
    rows: [{
      label: 'Кабинетов',
      value: '1'
    }, {
      label: 'Аналитика и алерты',
      value: '✓'
    }, {
      label: 'AI-агенты',
      value: '✓'
    }, {
      label: 'Персональный менеджер',
      value: '—'
    }]
  }
}`,...(x=(y=d.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var h,T,R;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:`{
  decorators: [Story => <Stage>{Story()}</Stage>],
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 32,
    alignItems: 'stretch'
  }}>
      <TariffCard name="Старт" price="19 900" period="₽ / мес" caption="Для одного кабинета" rows={[{
      label: 'Кабинетов',
      value: '1'
    }, {
      label: 'Аналитика и алерты',
      value: '✓'
    }, {
      label: 'AI-агенты',
      value: '✓'
    }, {
      label: 'Менеджер',
      value: '—'
    }]} />
      <TariffCard featured name="Бизнес" price="49 900" period="₽ / мес" caption="Для растущего бренда" rows={[{
      label: 'Кабинетов',
      value: 'до 5'
    }, {
      label: 'Аналитика и алерты',
      value: '✓'
    }, {
      label: 'AI-агенты',
      value: '✓'
    }, {
      label: 'Менеджер',
      value: '✓'
    }]} footer={<Tag accent="lime" variant="solid" size="sm">Выбор большинства</Tag>} />
      <TariffCard name="Enterprise" price="по запросу" caption="Для крупных продавцов" accent={colors.accent.purple} rows={[{
      label: 'Кабинетов',
      value: '∞'
    }, {
      label: 'Аналитика и алерты',
      value: '✓'
    }, {
      label: 'AI-агенты',
      value: '✓'
    }, {
      label: 'Выделенная команда',
      value: '✓'
    }]} />
    </div>
}`,...(R=(T=p.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};const H=["Playground","ТриТарифа"];export{d as Playground,H as __namedExportsOrder,B as default,p as ТриТарифа};
