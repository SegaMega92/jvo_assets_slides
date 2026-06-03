import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{c as r,b as g,f as P}from"./tokens-C4zTMbFB.js";import{S as _}from"./Stage-DSHfUkUu.js";import"./index-Bc2G9s8g.js";const y=({segments:l,size:a=360,thickness:n=56,center:o,legend:m=!0,gap:c=2})=>{const h=l.reduce((t,s)=>t+s.value,0)||1,x=(a-n)/2,f=2*Math.PI*x;let v=0;const I=l.map((t,s)=>{const b=t.value/h,j=Math.max(f*b-c,0),M=`${j} ${f-j}`,N=e.jsx("circle",{cx:a/2,cy:a/2,r:x,fill:"none",stroke:t.color,strokeWidth:n,strokeDasharray:M,strokeDashoffset:-v,strokeLinecap:"butt",transform:`rotate(-90 ${a/2} ${a/2})`},s);return v+=f*b,N});return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:48},children:[e.jsxs("div",{style:{position:"relative",width:a,height:a,flexShrink:0},children:[e.jsx("svg",{width:a,height:a,children:I}),o!=null&&e.jsx("div",{style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center"},children:o})]}),m&&e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:18},children:l.map((t,s)=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsx("span",{style:{width:28,height:28,borderRadius:8,background:t.color,flexShrink:0}}),e.jsx("span",{style:{...g.small,color:r.text.primary},children:t.label}),e.jsxs("span",{style:{...g.small,color:r.text.mutedMid,fontWeight:600},children:[Math.round(t.value/h*100),"%"]})]},s))})]})},p=({value:l,size:a=320,thickness:n=48,color:o=r.brand.pink,trackColor:m=r.bg.softGray,label:c})=>e.jsx(y,{size:a,thickness:n,gap:0,legend:!1,segments:[{value:l,color:o},{value:Math.max(100-l,0),color:m}],center:e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{fontFamily:P.display,fontSize:a*.22,fontWeight:600,lineHeight:1,color:r.text.primary},children:[l,"%"]}),c&&e.jsx("div",{style:{...g.small,color:r.text.mutedMid,marginTop:8},children:c})]})});y.__docgenInfo={description:"",methods:[],displayName:"DonutChart",props:{segments:{required:!0,tsType:{name:"Array",elements:[{name:"DonutSegment"}],raw:"DonutSegment[]"},description:""},size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"360",computed:!1}},thickness:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"56",computed:!1}},center:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},legend:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},gap:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"2",computed:!1}}}};p.__docgenInfo={description:"",methods:[],displayName:"ProgressRing",props:{value:{required:!0,tsType:{name:"number"},description:""},size:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"320",computed:!1}},thickness:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"48",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#FF8FDA'",computed:!1}},trackColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#F2F3FA'",computed:!1}},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const W={title:"Компоненты/Графики/DonutChart",component:y,decorators:[l=>e.jsx(_,{align:"center",children:l()})]},i={args:{segments:[{value:52,color:r.brand.pink,label:"Органика"},{value:28,color:r.accent.purple,label:"Реклама"},{value:20,color:r.accent.lime,label:"Акции"}]}},d={args:{legend:!0,center:void 0,segments:[{value:90,color:r.brand.pink,label:"Покрытие факторов"},{value:10,color:r.bg.softGray,label:"Остаток"}]}},u={render:()=>e.jsxs("div",{style:{display:"flex",gap:64},children:[e.jsx(p,{value:60,label:"рост выручки",color:r.accent.lime}),e.jsx(p,{value:26,label:"прирост"}),e.jsx(p,{value:90,label:"точность",color:r.accent.purple})]})};var k,R,T;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    segments: [{
      value: 52,
      color: colors.brand.pink,
      label: 'Органика'
    }, {
      value: 28,
      color: colors.accent.purple,
      label: 'Реклама'
    }, {
      value: 20,
      color: colors.accent.lime,
      label: 'Акции'
    }]
  }
}`,...(T=(R=i.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var q,D,S;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    legend: true,
    center: undefined,
    segments: [{
      value: 90,
      color: colors.brand.pink,
      label: 'Покрытие факторов'
    }, {
      value: 10,
      color: colors.bg.softGray,
      label: 'Остаток'
    }]
  }
}`,...(S=(D=d.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var F,V,w;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 64
  }}>
      <ProgressRing value={60} label="рост выручки" color={colors.accent.lime} />
      <ProgressRing value={26} label="прирост" />
      <ProgressRing value={90} label="точность" color={colors.accent.purple} />
    </div>
}`,...(w=(V=u.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};const E=["Сегменты","СЦентром","Кольцо"];export{E as __namedExportsOrder,W as default,u as Кольцо,d as СЦентром,i as Сегменты};
