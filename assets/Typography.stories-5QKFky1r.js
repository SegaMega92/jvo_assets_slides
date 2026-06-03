import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{a as l,B as i}from"./primitives-CXzfv1ty.js";import{B as p}from"./_preview-DvKkekIt.js";import"./index-Bc2G9s8g.js";import"./tokens-C4zTMbFB.js";const v={title:"Слайдкит/Примитивы/Типографика",component:l,decorators:[p({pad:80})],parameters:{docs:{description:{component:"Заголовки (Title, Unbounded: display/section/title/card) и текст (Body, Manrope: lead/body/small/caption)."}}},argTypes:{level:{control:{type:"inline-radio",options:["display","section","title","card"]},description:"Размер заголовка"},color:{control:"color"},align:{control:{type:"inline-radio",options:["left","center","right"]}}}},o={args:{level:"title",children:"AI-агенты для управления бизнесом"}},t={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24,maxWidth:1200},children:[e.jsx(l,{level:"display",children:"Display 96"}),e.jsx(l,{level:"section",children:"Section 75"}),e.jsx(l,{level:"title",children:"Title 56"}),e.jsx(l,{level:"card",children:"Card title 36"}),e.jsx(i,{size:"lead",children:"Lead 36 — вводный абзац к слайду."}),e.jsx(i,{size:"body",children:"Body 28 — основной текст карточек и описаний."}),e.jsx(i,{size:"small",children:"Small 22 — подписи, мелкие пункты списков."}),e.jsx(i,{size:"caption",color:"#999",children:"Caption 18 — источники, сноски."})]})};var r,s,a;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    level: 'title',
    children: 'AI-агенты для управления бизнесом'
  }
}`,...(a=(s=o.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var d,n,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    maxWidth: 1200
  }}>
      <Title level="display">Display 96</Title>
      <Title level="section">Section 75</Title>
      <Title level="title">Title 56</Title>
      <Title level="card">Card title 36</Title>
      <Body size="lead">Lead 36 — вводный абзац к слайду.</Body>
      <Body size="body">Body 28 — основной текст карточек и описаний.</Body>
      <Body size="small">Small 22 — подписи, мелкие пункты списков.</Body>
      <Body size="caption" color="#999">Caption 18 — источники, сноски.</Body>
    </div>
}`,...(c=(n=t.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const T=["Заголовок","Шкала"];export{T as __namedExportsOrder,v as default,o as Заголовок,t as Шкала};
