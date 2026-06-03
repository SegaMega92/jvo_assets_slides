import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{W as b,F as A,J as d,L as n,a as O}from"./brand-K9Lmtuo-.js";import{a as E}from"./primitives-CXzfv1ty.js";import{R as l,B as T}from"./_preview-DvKkekIt.js";import"./index-Bc2G9s8g.js";import"./tokens-C4zTMbFB.js";import"./assets-CCXmqLVH.js";const D={title:"Слайдкит/Бренд/Бренд",component:b,decorators:[T()],parameters:{docs:{description:{component:"Бренд-элементы JVO: текстовый логотип Wordmark, бейдж JBadge, фирменная рамка Frame (Студия) и сетка логотипов LogoStrip."}}},argTypes:{suffix:{control:"text"},theme:{control:{type:"inline-radio",options:["dark","light"]}},size:{control:{type:"range",min:20,max:80}}}},r={name:"Wordmark",args:{suffix:"студия",theme:"dark",size:44}},o={name:"JBadge (знак)",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:28},children:[e.jsx(l,{align:"center",children:["pink","eggplant","black","white"].map(t=>e.jsxs("div",{style:{textAlign:"center",fontFamily:"Manrope",fontSize:14,color:"#777"},children:[e.jsx(d,{variant:t,size:120}),e.jsx("div",{style:{marginTop:8},children:t})]},t))}),e.jsxs(l,{align:"center",children:[e.jsx("div",{style:{background:"#15181F",borderRadius:16,padding:20},children:e.jsx(d,{variant:"mark-light",size:120})}),e.jsx("div",{style:{background:"#FFFFFF",border:"1px solid #ECE3E9",borderRadius:16,padding:20},children:e.jsx(d,{variant:"mark-dark",size:120})})]})]})},a={name:"Frame (Студия)",render:()=>e.jsx(A,{width:760,height:428,background:"#FFFFFF",children:e.jsx("div",{style:{padding:48},children:e.jsxs(E,{level:"title",children:["Комплексное",e.jsx("br",{}),"ведение кабинета"]})})})},i={name:"LogoStrip",render:()=>e.jsx(O,{columns:5,logos:["SOKOLOV","FEELZ","LARETTO","SPLAT","GSS","LAMODA","OPTIMA","durex","PALMOLIVE","CURTIS"]})},c=["Рив Гош","Вкуссвил","Эксмо","Ортека","Grass","Mixit","Splat","Polaris","Likato","Luxvisage","Leomax","Май","Sokolov","Feelz","Optima","Curtis","Lamoda","Palmolive","Defender","GSS","Morbeng","Cosmo"],s={name:"LogoBlock (≤8 в ряд)",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:64,width:1500},children:[e.jsx(n,{title:"+250 компаний",caption:"топ-уровня нам доверяют",width:1500,logos:c.slice(0,12)}),e.jsx(n,{width:1500,logos:c})]})};var m,p,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Wordmark',
  args: {
    suffix: 'студия',
    theme: 'dark',
    size: 44
  }
}`,...(g=(p=r.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var x,u,F;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'JBadge (знак)',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 28
  }}>
      <Row align="center">
        {(['pink', 'eggplant', 'black', 'white'] as const).map(v => <div key={v} style={{
        textAlign: 'center',
        fontFamily: 'Manrope',
        fontSize: 14,
        color: '#777'
      }}>
            <JBadge variant={v} size={120} /><div style={{
          marginTop: 8
        }}>{v}</div>
          </div>)}
      </Row>
      {/* «чистые» знаки без фона — показаны на контрастных подложках */}
      <Row align="center">
        <div style={{
        background: '#15181F',
        borderRadius: 16,
        padding: 20
      }}><JBadge variant="mark-light" size={120} /></div>
        <div style={{
        background: '#FFFFFF',
        border: '1px solid #ECE3E9',
        borderRadius: 16,
        padding: 20
      }}><JBadge variant="mark-dark" size={120} /></div>
      </Row>
    </div>
}`,...(F=(u=o.parameters)==null?void 0:u.docs)==null?void 0:F.source}}};var k,v,L;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Frame (Студия)',
  render: () => <Frame width={760} height={428} background="#FFFFFF">
      <div style={{
      padding: 48
    }}><Title level="title">Комплексное<br />ведение кабинета</Title></div>
    </Frame>
}`,...(L=(v=a.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};var h,S,f;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'LogoStrip',
  render: () => <LogoStrip columns={5} logos={['SOKOLOV', 'FEELZ', 'LARETTO', 'SPLAT', 'GSS', 'LAMODA', 'OPTIMA', 'durex', 'PALMOLIVE', 'CURTIS']} />
}`,...(f=(S=i.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var y,j,B;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'LogoBlock (≤8 в ряд)',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 64,
    width: 1500
  }}>
      {/* 12 логотипов → сбалансированно 6 + 6 */}
      <LogoBlock title="+250 компаний" caption="топ-уровня нам доверяют" width={1500} logos={MANY.slice(0, 12)} />
      {/* 22 логотипа → 8 + 7 + 7 */}
      <LogoBlock width={1500} logos={MANY} />
    </div>
}`,...(B=(j=s.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};const W=["Wordmark_","JBadge_","Frame_","LogoStrip_","LogoBlock_"];export{a as Frame_,o as JBadge_,s as LogoBlock_,i as LogoStrip_,r as Wordmark_,W as __namedExportsOrder,D as default};
