import{j as t}from"./jsx-runtime-DFAAy_2V.js";import{S as x}from"./SlideFrame-V9XlKTp6.js";import{l as e,b as s,c as i}from"./tokens-C4zTMbFB.js";import"./index-Bc2G9s8g.js";const m=({title:u,inlineTag:o,image:y,theme:b="light",imageBg:h})=>t.jsxs(x,{theme:b,children:[t.jsxs("div",{style:{position:"absolute",left:e.slidePadX*4,right:e.slidePadX*4+e.logoSize+24,top:e.slidePadY,display:"flex",alignItems:"center",justifyContent:"center",gap:24,flexWrap:"wrap",textAlign:"center",minHeight:160},children:[t.jsx("div",{style:s.title,children:u}),o&&t.jsx("div",{style:{display:"inline-block"},children:o})]}),t.jsx("div",{style:{position:"absolute",left:e.slidePadX,right:e.slidePadX,top:280,bottom:e.slidePadY,background:h,borderRadius:e.card.radius,overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center"},children:y})]});m.__docgenInfo={description:"",methods:[],displayName:"FullBleedImage",props:{title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},inlineTag:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},image:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},theme:{required:!1,tsType:{name:"unknown"},description:"",defaultValue:{value:"'light'",computed:!1}},imageBg:{required:!1,tsType:{name:"string"},description:""}}};const k={title:"Лейауты/8 · FullBleedImage",component:m,argTypes:{theme:{control:"select",options:["light","pinkPastel"]}}},r={args:{title:"С нами ТОП-компании выбиваются в лидеры на Wildberries",image:t.jsx("div",{style:{...s.body,color:i.text.muted},children:"[Большой скриншот / интерфейс продукта]"}),imageBg:i.bg.softGray}},a={args:{title:"Аналитика всех маркетплейсов",inlineTag:t.jsx("span",{style:{background:i.brand.pink,padding:"12px 28px",borderRadius:999,...s.body,color:i.bg.white,fontWeight:600},children:"новое"}),image:t.jsx("div",{style:{...s.body,color:i.text.muted},children:"[Скриншот]"}),imageBg:i.brand.pinkLight}};var n,d,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    title: 'С нами ТОП-компании выбиваются в лидеры на Wildberries',
    image: <div style={{
      ...type.body,
      color: colors.text.muted
    }}>
        [Большой скриншот / интерфейс продукта]
      </div>,
    imageBg: colors.bg.softGray
  }
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var c,p,g;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    title: 'Аналитика всех маркетплейсов',
    inlineTag: <span style={{
      background: colors.brand.pink,
      padding: '12px 28px',
      borderRadius: 999,
      ...type.body,
      color: colors.bg.white,
      fontWeight: 600
    }}>
        новое
      </span>,
    image: <div style={{
      ...type.body,
      color: colors.text.muted
    }}>
        [Скриншот]
      </div>,
    imageBg: colors.brand.pinkLight
  }
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const w=["Скриншот","СТегом"];export{w as __namedExportsOrder,k as default,a as СТегом,r as Скриншот};
