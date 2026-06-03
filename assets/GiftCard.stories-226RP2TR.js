import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{c as a,f as h,b,l as o}from"./tokens-C4zTMbFB.js";import{T as S}from"./Tag-B8Oi0QVc.js";import{S as y}from"./Stage-DSHfUkUu.js";import"./index-Bc2G9s8g.js";const l=({value:t,label:s,icon:c="🎁",bg:x=a.brand.pinkLight,color:n=a.brand.eggplant,accent:v=a.brand.pink})=>e.jsxs("div",{style:{background:x,color:n,borderRadius:o.card.radius*1.25,padding:o.card.padding*1.1,display:"flex",flexDirection:"column",gap:16,alignItems:"center",textAlign:"center",height:"100%",boxSizing:"border-box"},children:[c&&e.jsx("div",{style:{fontSize:64},children:c}),e.jsx("div",{style:{fontFamily:h.display,fontSize:80,fontWeight:600,lineHeight:1,color:v},children:t}),s&&e.jsx("div",{style:{...b.h4,color:n,fontWeight:600},children:s})]});l.__docgenInfo={description:"",methods:[],displayName:"GiftCard",props:{value:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:"'🎁'",computed:!1}},bg:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#FFE4F6'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#410031'",computed:!1}},accent:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#FF8FDA'",computed:!1}}}};const F={title:"Компоненты/GiftCard",component:l,decorators:[t=>e.jsx(y,{width:480,children:t()})]},r={args:{value:"5 SEO",label:"Карточек в подарок",icon:"🎁"}},i={decorators:[t=>e.jsx(y,{align:"center",children:t()})],render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:32},children:[e.jsx(S,{accent:"lime",variant:"solid",size:"lg",children:"Ограниченное предложение"}),e.jsxs("div",{style:{display:"flex",gap:32,alignItems:"center"},children:[e.jsx(l,{value:"5 SEO",label:"Карточек в подарок"}),e.jsx("div",{style:{fontSize:40,opacity:.5},children:"или"}),e.jsx(l,{value:"1 месяц",label:"Консультаций в подарок",bg:a.accent.purpleLight,color:a.accent.purple,accent:a.accent.purple,icon:"💬"})]})]})};var d,p,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    value: '5 SEO',
    label: 'Карточек в подарок',
    icon: '🎁'
  }
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,m,f;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  decorators: [Story => <Stage align="center">{Story()}</Stage>],
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 32
  }}>
      <Tag accent="lime" variant="solid" size="lg">Ограниченное предложение</Tag>
      <div style={{
      display: 'flex',
      gap: 32,
      alignItems: 'center'
    }}>
        <GiftCard value="5 SEO" label="Карточек в подарок" />
        <div style={{
        fontSize: 40,
        opacity: 0.5
      }}>или</div>
        <GiftCard value="1 месяц" label="Консультаций в подарок" bg={colors.accent.purpleLight} color={colors.accent.purple} accent={colors.accent.purple} icon="💬" />
      </div>
    </div>
}`,...(f=(m=i.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};const N=["Playground","Спецпредложение"];export{r as Playground,N as __namedExportsOrder,F as default,i as Спецпредложение};
