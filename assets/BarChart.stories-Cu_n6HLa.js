import{j as a}from"./jsx-runtime-DFAAy_2V.js";import{c as l,f as u,b as m}from"./tokens-C4zTMbFB.js";import{S as q}from"./Stage-DSHfUkUu.js";import"./index-Bc2G9s8g.js";const z=({data:r,orientation:w="horizontal",max:F,accent:d=l.brand.pink,trackColor:S=l.bg.softGray,showValue:c=!0,height:T=420})=>{const p=F??Math.max(...r.map(e=>e.value),1);return w==="vertical"?a.jsx("div",{style:{display:"flex",alignItems:"flex-end",gap:28,height:T},children:r.map((e,o)=>{const s=e.value/p*100;return a.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:16,height:"100%"},children:[a.jsx("div",{style:{flex:1,width:"100%",display:"flex",alignItems:"flex-end"},children:a.jsx("div",{style:{width:"100%",height:`${s}%`,background:e.color??d,borderRadius:"16px 16px 0 0",position:"relative",minHeight:8},children:c&&a.jsx("div",{style:{position:"absolute",top:-56,left:0,right:0,textAlign:"center",fontFamily:u.display,fontSize:40,fontWeight:600,color:l.text.primary},children:e.display??e.value})})}),a.jsx("div",{style:{...m.small,color:l.text.mutedMid,textAlign:"center"},children:e.label})]},o)})}):a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:28},children:r.map((e,o)=>{const s=e.value/p*100;return a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:28},children:[a.jsx("div",{style:{...m.body,width:320,flexShrink:0,color:l.text.primary},children:e.label}),a.jsx("div",{style:{flex:1,height:56,background:S,borderRadius:999,overflow:"hidden"},children:a.jsx("div",{style:{width:`${s}%`,height:"100%",background:e.color??d,borderRadius:999,minWidth:8}})}),c&&a.jsx("div",{style:{fontFamily:u.display,fontSize:36,fontWeight:600,width:160,textAlign:"right",color:l.text.primary},children:e.display??e.value})]},o)})})};z.__docgenInfo={description:"",methods:[],displayName:"BarChart",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"BarDatum"}],raw:"BarDatum[]"},description:""},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"максимум шкалы; по умолчанию = max(value)"},accent:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#FF8FDA'",computed:!1}},trackColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#F2F3FA'",computed:!1}},showValue:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"420",computed:!1}}}};const V={title:"Компоненты/Графики/BarChart",component:z,argTypes:{orientation:{control:"inline-radio",options:["horizontal","vertical"]}},decorators:[r=>a.jsx(q,{width:1200,children:r()})]},n={args:{orientation:"horizontal",data:[{label:"Wildberries",value:40,display:"40 млн"},{label:"Ozon",value:28,display:"28 млн"},{label:"Яндекс Маркет",value:14,display:"14 млн"},{label:"Мегамаркет",value:6,display:"6 млн"}]}},t={args:{orientation:"vertical",data:[{label:"2021",value:2.8,display:"2,8"},{label:"2022",value:3.6,display:"3,6"},{label:"2023",value:4.5,display:"4,5",color:l.brand.pink},{label:"2024",value:5.9,display:"5,9",color:l.brand.pink}]}},i={args:{orientation:"vertical",data:[{label:"до",value:2.8,display:"2,8 млн",color:l.bg.softGray},{label:"после",value:4.5,display:"4,5 млн",color:l.accent.lime}]}};var y,v,h;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    data: [{
      label: 'Wildberries',
      value: 40,
      display: '40 млн'
    }, {
      label: 'Ozon',
      value: 28,
      display: '28 млн'
    }, {
      label: 'Яндекс Маркет',
      value: 14,
      display: '14 млн'
    }, {
      label: 'Мегамаркет',
      value: 6,
      display: '6 млн'
    }]
  }
}`,...(h=(v=n.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var f,b,x;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical',
    data: [{
      label: '2021',
      value: 2.8,
      display: '2,8'
    }, {
      label: '2022',
      value: 3.6,
      display: '3,6'
    }, {
      label: '2023',
      value: 4.5,
      display: '4,5',
      color: colors.brand.pink
    }, {
      label: '2024',
      value: 5.9,
      display: '5,9',
      color: colors.brand.pink
    }]
  }
}`,...(x=(b=t.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var g,j,k;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical',
    data: [{
      label: 'до',
      value: 2.8,
      display: '2,8 млн',
      color: colors.bg.softGray
    }, {
      label: 'после',
      value: 4.5,
      display: '4,5 млн',
      color: colors.accent.lime
    }]
  }
}`,...(k=(j=i.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};const W=["Горизонтальный","Вертикальный","ДоПосле"];export{W as __namedExportsOrder,V as default,t as Вертикальный,n as Горизонтальный,i as ДоПосле};
