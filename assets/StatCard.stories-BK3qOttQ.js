import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{l as n,c as a,f as S,b as d}from"./tokens-C4zTMbFB.js";import{S as v}from"./Stage-DSHfUkUu.js";import"./index-Bc2G9s8g.js";const t=({value:r,label:s,description:i,accent:y=a.brand.pink,bg:x=a.bg.softGray,align:o="start"})=>e.jsxs("div",{style:{background:x,borderRadius:n.card.radius,padding:n.card.padding,display:"flex",flexDirection:"column",gap:12,alignItems:o==="center"?"center":"flex-start",textAlign:o==="center"?"center":"left",height:"100%",boxSizing:"border-box"},children:[e.jsx("div",{style:{fontFamily:S.display,fontSize:72,fontWeight:600,lineHeight:1,color:y},children:r}),s&&e.jsx("div",{style:{...d.cardTitle,fontSize:34,color:a.text.primary},children:s}),i&&e.jsx("div",{style:{...d.small,color:a.text.mutedMid,marginTop:4},children:i})]});t.__docgenInfo={description:"",methods:[],displayName:"StatCard",props:{value:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},accent:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#FF8FDA'",computed:!1}},bg:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#F2F3FA'",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'start' | 'center'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"}]},description:"",defaultValue:{value:"'start'",computed:!1}}}};const T={title:"Компоненты/StatCard",component:t,decorators:[r=>e.jsx(v,{width:520,children:r()})]},l={args:{value:"150+",label:"ниш",description:"Успешный опыт ведения 150+ ниш на маркетплейсах"}},c={decorators:[r=>e.jsx(v,{children:r()})],render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:32},children:[e.jsx(t,{value:"150+",label:"ниш",description:"Успешный опыт ведения 150+ ниш"}),e.jsx(t,{value:"40+",label:"специалистов",description:"С опытом развития продаж во всех категориях",accent:a.accent.purple}),e.jsx(t,{value:"5 млн",label:"SKU",description:"Изучено и проанализировано экспертами",accent:a.accent.limeDark,bg:a.accent.limePale}),e.jsx(t,{value:"100%",label:"команды",description:"Каждый сотрудник сертифицирован"}),e.jsx(t,{value:"ТОП-10",label:"рейтинг",description:"В списке лучших сертифицированных агентств",accent:a.accent.purple}),e.jsx(t,{value:"WB",label:"партнёр",description:"Официальная аккредитация",accent:a.accent.limeDark,bg:a.accent.limePale})]})};var p,u,m;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    value: '150+',
    label: 'ниш',
    description: 'Успешный опыт ведения 150+ ниш на маркетплейсах'
  }
}`,...(m=(u=l.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,f,b;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  decorators: [Story => <Stage>{Story()}</Stage>],
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 32
  }}>
      <StatCard value="150+" label="ниш" description="Успешный опыт ведения 150+ ниш" />
      <StatCard value="40+" label="специалистов" description="С опытом развития продаж во всех категориях" accent={colors.accent.purple} />
      <StatCard value="5 млн" label="SKU" description="Изучено и проанализировано экспертами" accent={colors.accent.limeDark} bg={colors.accent.limePale} />
      <StatCard value="100%" label="команды" description="Каждый сотрудник сертифицирован" />
      <StatCard value="ТОП-10" label="рейтинг" description="В списке лучших сертифицированных агентств" accent={colors.accent.purple} />
      <StatCard value="WB" label="партнёр" description="Официальная аккредитация" accent={colors.accent.limeDark} bg={colors.accent.limePale} />
    </div>
}`,...(b=(f=c.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const F=["Playground","Сетка"];export{l as Playground,F as __namedExportsOrder,T as default,c as Сетка};
