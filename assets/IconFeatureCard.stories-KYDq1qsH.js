import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{I as o}from"./cards-BfYkgp8C.js";import{B as m,R as l}from"./_preview-DvKkekIt.js";import"./index-Bc2G9s8g.js";import"./tokens-C4zTMbFB.js";import"./primitives-CXzfv1ty.js";const w={title:"Слайдкит/Карточки/IconFeatureCard",component:o,decorators:[m()],parameters:{docs:{description:{component:"Карточка-фича: иконка в бейдже + заголовок + описание. Светлая/тёмная/лаймовая/розовая темы. Тул-слайды (Дашборд, SEO PRO…), «Единый центр управления»."}}},argTypes:{icon:{control:"text",description:"Символ/эмодзи"},iconSrc:{control:"text",description:"URL картинки (приоритет над icon)"},title:{control:"text"},desc:{control:"text"},theme:{control:{type:"inline-radio",options:["light","dark","lime","pink"]},description:"Тема"},accent:{control:"color",description:"Цвет заголовка (override)"}}},t={args:{icon:"🔍",title:"Находит",desc:"Система видит утечки выручки и точки роста в реальном времени по всей вашей матрице",theme:"dark"}},r={render:()=>e.jsxs(l,{children:[e.jsx(o,{width:420,height:420,theme:"light",icon:"📊",title:"Данные",desc:"API Wildberries и Ozon + ваши данные о марже и остатках"}),e.jsx(o,{width:420,height:420,theme:"dark",icon:"🤖",title:"ИИ",desc:"Каскад нейросетей анализирует 70 000+ микро-решений в неделю"}),e.jsx(o,{width:420,height:420,theme:"lime",icon:"⚡",title:"Действия",desc:"Агенты вносят изменения через официальный API",accent:"#1F2A09"})]})};var i,c,n;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    icon: '🔍',
    title: 'Находит',
    desc: 'Система видит утечки выручки и точки роста в реальном времени по всей вашей матрице',
    theme: 'dark'
  }
}`,...(n=(c=t.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};var s,a,d;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <Row>
      <IconFeatureCard width={420} height={420} theme="light" icon="📊" title="Данные" desc="API Wildberries и Ozon + ваши данные о марже и остатках" />
      <IconFeatureCard width={420} height={420} theme="dark" icon="🤖" title="ИИ" desc="Каскад нейросетей анализирует 70 000+ микро-решений в неделю" />
      <IconFeatureCard width={420} height={420} theme="lime" icon="⚡" title="Действия" desc="Агенты вносят изменения через официальный API" accent="#1F2A09" />
    </Row>
}`,...(d=(a=r.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};const k=["Playground","Темы"];export{t as Playground,k as __namedExportsOrder,w as default,r as Темы};
