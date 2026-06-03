import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{c as r,l as i,f as N,b as l}from"./tokens-C4zTMbFB.js";import{S as f}from"./Stage-DSHfUkUu.js";import"./index-Bc2G9s8g.js";const a=({number:d,heading:c,body:s,accent:h=r.brand.pink,bg:x=r.bg.softGray,textColor:n=r.text.primary})=>e.jsxs("div",{style:{background:x,borderRadius:i.card.radius,padding:i.card.padding,display:"flex",flexDirection:"column",gap:24,height:"100%",boxSizing:"border-box",color:n},children:[e.jsx("div",{style:{fontFamily:N.display,fontSize:88,fontWeight:600,lineHeight:.9,color:h},children:d}),c&&e.jsx("div",{style:{...l.h4,color:n},children:c}),s&&e.jsx("div",{style:{...l.body,color:n,opacity:.8},children:s})]});a.__docgenInfo={description:"",methods:[],displayName:"NumberedCard",props:{number:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},heading:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},body:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},accent:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#FF8FDA'",computed:!1}},bg:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#F2F3FA'",computed:!1}},textColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#410031'",computed:!1}}}};const S={title:"Компоненты/NumberedCard",component:a,decorators:[d=>e.jsx(f,{width:460,children:d()})]},o={args:{number:"1",heading:"Отсутствие выделенной команды",body:"Успех в ecom зависит от слаженной команды профильных специалистов"}},t={decorators:[d=>e.jsx(f,{children:d()})],render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:24},children:[e.jsx(a,{number:"1",heading:"Отсутствие выделенной команды",body:"Успех в ecom зависит от слаженной команды"}),e.jsx(a,{number:"2",heading:"Непонимание алгоритмов",body:"Наши специалисты знают метрики и правила площадок",accent:r.accent.purple}),e.jsx(a,{number:"3",heading:"Недостаток компетенций",body:"Вашим продвижением будут заниматься эксперты",accent:r.accent.limeDark,bg:r.accent.limePale}),e.jsx(a,{number:"4",heading:"Ошибки в ecom-стратегии",body:"ECOM — один из ключевых каналов продаж",accent:r.brand.pink,bg:r.brand.pinkLight})]})};var m,p,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    number: '1',
    heading: 'Отсутствие выделенной команды',
    body: 'Успех в ecom зависит от слаженной команды профильных специалистов'
  }
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var b,g,y;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  decorators: [Story => <Stage>{Story()}</Stage>],
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 24
  }}>
      <NumberedCard number="1" heading="Отсутствие выделенной команды" body="Успех в ecom зависит от слаженной команды" />
      <NumberedCard number="2" heading="Непонимание алгоритмов" body="Наши специалисты знают метрики и правила площадок" accent={colors.accent.purple} />
      <NumberedCard number="3" heading="Недостаток компетенций" body="Вашим продвижением будут заниматься эксперты" accent={colors.accent.limeDark} bg={colors.accent.limePale} />
      <NumberedCard number="4" heading="Ошибки в ecom-стратегии" body="ECOM — один из ключевых каналов продаж" accent={colors.brand.pink} bg={colors.brand.pinkLight} />
    </div>
}`,...(y=(g=t.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const k=["Playground","Ряд"];export{o as Playground,k as __namedExportsOrder,S as default,t as Ряд};
