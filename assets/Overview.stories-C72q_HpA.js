import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{a as n,B as u,P as m,T as i,M as g,C as p,I as r,S as a}from"./primitives-CXzfv1ty.js";import{b as x,S as b,I as F,M as f,P as j,N as C,T as S}from"./cards-BfYkgp8C.js";import{C as w,A as v}from"./lists-VTmAscUv.js";import{C as y,P as k}from"./tables-Cm8OMbRc.js";import{W as E,J as A}from"./brand-K9Lmtuo-.js";import"./index-Bc2G9s8g.js";import"./tokens-C4zTMbFB.js";import"./assets-CCXmqLVH.js";const J={title:"Слайдкит/Обзор",parameters:{layout:"fullscreen",docs:{description:{component:"Витрина библиотеки: примитивы, карточки, списки, таблицы, бренд-элементы. Все компоненты автономны и собраны из общих токенов (цвета, шрифты Unbounded/Manrope)."}}}},t=({title:c,children:h})=>e.jsxs("div",{style:{marginBottom:64},children:[e.jsx(n,{level:"card",children:c}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:32,alignItems:"flex-start",marginTop:24},children:h})]}),l={render:()=>e.jsxs("div",{style:{padding:80,background:"#F2F3FA",minHeight:"100vh",fontFamily:"Manrope"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:56},children:[e.jsx(E,{size:48}),e.jsx(A,{})]}),e.jsx(n,{level:"section",children:"Слайдкит — библиотека компонентов"}),e.jsx(u,{size:"lead",color:"#666",children:"Автономные блоки, из которых собраны все 55 слайдов трёх презентаций."}),e.jsxs("div",{style:{marginTop:64},children:[e.jsxs(t,{title:"Примитивы",children:[e.jsx(m,{background:"#FF8FDA",color:"#410031",children:"Предложение до 11.12"}),e.jsx(i,{tone:"critical",children:"Критично"}),e.jsx(i,{tone:"lime",children:"результат"}),e.jsx(g,{size:48}),e.jsx(p,{size:48}),e.jsx(r,{glyph:"🔍"}),e.jsx(r,{glyph:"%",shape:"circle"})]}),e.jsxs(t,{title:"Карточки",children:[e.jsx(x,{value:"+28%",label:"рост рынка год к году",width:360,height:240}),e.jsx(b,{value:"+18%",label:"к выручке за 90 дней",desc:"За счёт устранения OOS на топ-SKU",width:420}),e.jsx(F,{width:360,height:340,theme:"dark",icon:"🤖",title:"ИИ",desc:"Каскад нейросетей анализирует 70 000+ решений"}),e.jsx(f,{title:"Выручка",before:"2,8 млн ₽",after:"4,5 млн ₽",delta:"+ 60%",deltaColor:"#3AA655",width:300,height:300}),e.jsx(j,{width:300,title:"Цена",sublabel:"Excel + ручной режим",danger:"Цена выше оптимальной → падают заказы"}),e.jsx(C,{width:300,number:1,title:"Найти товар на МП",desc:"Карточки на 100% соответствуют алгоритмам"})]}),e.jsxs(t,{title:"Списки",children:[e.jsx(a,{background:"#410031",padding:36,radius:24,children:e.jsx(w,{textColor:"#FFE4F6",fontSize:20,width:460,items:["Анализ факторов 24/7","Изучение конкурентов","Конкретные действия по карточкам"]})}),e.jsx(a,{background:"#FFFFFF",border:"1px solid #ECE3E9",padding:36,radius:24,children:e.jsx(v,{fontSize:20,width:460,items:["100+ факторов ранжирования","Персонализированная выдача","Фокус на качестве карточки"]})})]}),e.jsxs(t,{title:"Таблицы",children:[e.jsx(y,{width:1100,columns:["Дживио","MPStat","Маяк"],highlightCol:0,rows:[{label:"Рекомендации по росту выручки",cells:[!0,!1,!1]},{label:"AI-Агент для отзывов",cells:[!0,!1,!1]},{label:"Расчёт поставок",cells:[!0,!0,!0]}]}),e.jsx(a,{background:"#FFFFFF",border:"1px solid #ECE3E9",padding:36,radius:24,children:e.jsx(k,{width:400,rows:[{label:"Ценообразование от AI",value:"1 ₽"},{label:"Ответы на отзыв",value:"2 ₽"},{label:"Инсайты по продукту",value:"100 ₽"}]})})]}),e.jsx(t,{title:"Тарифы",children:e.jsx(S,{width:460,title:"«Стандарт»",chips:["1 API","1 Пользователь"],rows:[{label:"Подписка на 6 месяцев",value:"1 099 900 ₽"},{label:"Внедрение",value:"вкл"},{label:"Тех. поддержка",value:"вкл"}],total:"Итого: 1 099 900 ₽ / 6 мес."})})]})]})};var s,d,o;l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 80,
    background: '#F2F3FA',
    minHeight: '100vh',
    fontFamily: 'Manrope'
  }}>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 56
    }}>
        <Wordmark size={48} />
        <JBadge />
      </div>
      <Title level="section">Слайдкит — библиотека компонентов</Title>
      <Body size="lead" color="#666">Автономные блоки, из которых собраны все 55 слайдов трёх презентаций.</Body>

      <div style={{
      marginTop: 64
    }}>
        <Section title="Примитивы">
          <Pill background="#FF8FDA" color="#410031">Предложение до 11.12</Pill>
          <Tag tone="critical">Критично</Tag>
          <Tag tone="lime">результат</Tag>
          <Marker size={48} /><Check size={48} />
          <IconBadge glyph="🔍" /><IconBadge glyph="%" shape="circle" />
        </Section>
        <Section title="Карточки">
          <StatCard value="+28%" label="рост рынка год к году" width={360} height={240} />
          <StatCallout value="+18%" label="к выручке за 90 дней" desc="За счёт устранения OOS на топ-SKU" width={420} />
          <IconFeatureCard width={360} height={340} theme="dark" icon="🤖" title="ИИ" desc="Каскад нейросетей анализирует 70 000+ решений" />
          <MetricCard title="Выручка" before="2,8 млн ₽" after="4,5 млн ₽" delta="+ 60%" deltaColor="#3AA655" width={300} height={300} />
          <PainCard width={300} title="Цена" sublabel="Excel + ручной режим" danger="Цена выше оптимальной → падают заказы" />
          <NumberedCard width={300} number={1} title="Найти товар на МП" desc="Карточки на 100% соответствуют алгоритмам" />
        </Section>
        <Section title="Списки">
          <Surface background="#410031" padding={36} radius={24}><CheckList textColor="#FFE4F6" fontSize={20} width={460} items={['Анализ факторов 24/7', 'Изучение конкурентов', 'Конкретные действия по карточкам']} /></Surface>
          <Surface background="#FFFFFF" border="1px solid #ECE3E9" padding={36} radius={24}><ArrowList fontSize={20} width={460} items={['100+ факторов ранжирования', 'Персонализированная выдача', 'Фокус на качестве карточки']} /></Surface>
        </Section>
        <Section title="Таблицы">
          <ComparisonTable width={1100} columns={['Дживио', 'MPStat', 'Маяк']} highlightCol={0} rows={[{
          label: 'Рекомендации по росту выручки',
          cells: [true, false, false]
        }, {
          label: 'AI-Агент для отзывов',
          cells: [true, false, false]
        }, {
          label: 'Расчёт поставок',
          cells: [true, true, true]
        }]} />
          <Surface background="#FFFFFF" border="1px solid #ECE3E9" padding={36} radius={24}><PriceList width={400} rows={[{
            label: 'Ценообразование от AI',
            value: '1 ₽'
          }, {
            label: 'Ответы на отзыв',
            value: '2 ₽'
          }, {
            label: 'Инсайты по продукту',
            value: '100 ₽'
          }]} /></Surface>
        </Section>
        <Section title="Тарифы">
          <TariffCard width={460} title="«Стандарт»" chips={['1 API', '1 Пользователь']} rows={[{
          label: 'Подписка на 6 месяцев',
          value: '1 099 900 ₽'
        }, {
          label: 'Внедрение',
          value: 'вкл'
        }, {
          label: 'Тех. поддержка',
          value: 'вкл'
        }]} total="Итого: 1 099 900 ₽ / 6 мес." />
        </Section>
      </div>
    </div>
}`,...(o=(d=l.parameters)==null?void 0:d.docs)==null?void 0:o.source}}};const N=["Витрина"];export{N as __namedExportsOrder,J as default,l as Витрина};
