import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{c as r,b as h,f as v}from"./tokens-C4zTMbFB.js";import{S as j}from"./Stage-DSHfUkUu.js";import"./index-Bc2G9s8g.js";const n=({icon:t,label:o,value:l,color:a=r.text.primary,labelColor:c=r.text.mutedMid})=>e.jsxs("div",{style:{display:"flex",gap:20,alignItems:"center"},children:[t&&e.jsx("div",{style:{width:64,height:64,borderRadius:999,background:r.bg.softGray,display:"flex",alignItems:"center",justifyContent:"center",fontSize:30,flexShrink:0},children:t}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[o&&e.jsx("span",{style:{...h.caption,color:c},children:o}),e.jsx("span",{style:{fontFamily:v.display,fontSize:40,fontWeight:600,color:a},children:l})]})]}),x=({items:t,bg:o=r.brand.eggplant,color:l=r.bg.white,size:a=72})=>e.jsx("div",{style:{display:"flex",gap:20},children:t.map((c,g)=>e.jsx("div",{style:{width:a,height:a,borderRadius:999,background:o,color:l,display:"flex",alignItems:"center",justifyContent:"center",fontSize:a*.42,flexShrink:0},children:c.icon},g))});n.__docgenInfo={description:"",methods:[],displayName:"ContactItem",props:{icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},value:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#410031'",computed:!1}},labelColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#666666'",computed:!1}}}};x.__docgenInfo={description:"",methods:[],displayName:"SocialRow",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"SocialIcon"}],raw:"SocialIcon[]"},description:""},bg:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#410031'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#FFFFFF'",computed:!1}},size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"72",computed:!1}}}};const T={title:"Компоненты/Контакты",decorators:[t=>e.jsx(j,{width:760,children:t()})]},i={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:40},children:[e.jsx(n,{icon:"🌐",label:"Сайт:",value:"jvo.ru"}),e.jsx(n,{icon:"✉️",label:"По общим вопросам:",value:"hi@jvo.ru"}),e.jsx(n,{icon:"📞",label:"Звоните:",value:"+7 499 322-09-33"})]})},s={render:()=>e.jsx(x,{items:[{icon:"TG"},{icon:"VK"},{icon:"YT"},{icon:"IG"}]})};var d,p,u;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 40
  }}>
      <ContactItem icon="🌐" label="Сайт:" value="jvo.ru" />
      <ContactItem icon="✉️" label="По общим вопросам:" value="hi@jvo.ru" />
      <ContactItem icon="📞" label="Звоните:" value="+7 499 322-09-33" />
    </div>
}`,...(u=(p=i.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,f,y;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <SocialRow items={[{
    icon: 'TG'
  }, {
    icon: 'VK'
  }, {
    icon: 'YT'
  }, {
    icon: 'IG'
  }]} />
}`,...(y=(f=s.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const w=["Контакты","Соцсети"];export{w as __namedExportsOrder,T as default,i as Контакты,s as Соцсети};
