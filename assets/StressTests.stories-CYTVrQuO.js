import{j as e}from"./jsx-runtime-DFAAy_2V.js";import{P as B,T as A,S as o}from"./primitives-CXzfv1ty.js";import{b as c,I as y,A as v,P as S,N as L,a as k,M as E,B as P,S as T,T as N}from"./cards-BfYkgp8C.js";import{A as M,C as O}from"./lists-VTmAscUv.js";import{C as G,A as _,P as I}from"./tables-Cm8OMbRc.js";import"./index-Bc2G9s8g.js";import"./tokens-C4zTMbFB.js";const q={title:"Слайдкит/QA-стресс",parameters:{layout:"fullscreen",docs:{description:{component:"Корнер-кейсы: длинный/пустой текст, экстремальные значения, переполнение, много элементов. Каждый блок подписан рамкой-карточкой — если контент выходит за её пределы, состояние сломано."}}}},l="Очень длинная подпись без переносов слов котораяпроверяетповедениекомпонентаприпереполнениииотсутствиипробелов и затем продолжается ещё несколькими словами для надёжности",a=({label:n,children:r})=>e.jsxs("div",{style:{outline:"2px dashed #C9B7C5",outlineOffset:4,position:"relative",margin:28},children:[e.jsx("span",{style:{position:"absolute",top:-34,left:0,fontFamily:"Manrope",fontSize:18,color:"#9A8FA6"},children:n}),r]}),t={render:()=>e.jsxs("div",{style:{padding:100,background:"#F2F3FA",display:"flex",flexWrap:"wrap",gap:24,alignItems:"flex-start",fontFamily:"Manrope"},children:[e.jsx(a,{label:"StatCard / длинная подпись",children:e.jsx(c,{value:"+58–63%",label:l})}),e.jsx(a,{label:"StatCard / длинное значение",children:e.jsx(c,{value:"1 099 900 000 ₽",label:"оборот"})}),e.jsx(a,{label:"IconFeatureCard / длинный desc",children:e.jsx(y,{width:460,height:420,theme:"dark",icon:"🤖",title:"Очень длинный заголовок карточки в две строки",desc:l})}),e.jsx(a,{label:"AgentCard / длинные",children:e.jsx(v,{width:620,title:"Очень длинное название агента в две строки",desc:l})}),e.jsx(a,{label:"PainCard / длинные",children:e.jsx(S,{width:400,title:"Контент + отзыв (длинный)",sublabel:"Excel + ручной режим, длинная подпись",danger:l})}),e.jsx(a,{label:"NumberedCard / длинные",children:e.jsx(L,{width:400,number:99,title:"Очень длинный заголовок шага в несколько строк подряд",desc:l})}),e.jsx(a,{label:"AwardCard / длинные",children:e.jsx(k,{width:700,title:"Очень длинное название награды которое не помещается",subtitle:l})}),e.jsx(a,{label:"MetricCard / длинный title гориз.",children:e.jsx(E,{horizontal:!0,title:"Очень длинное название метрики в строку",delta:"+ 1000%"})}),e.jsx(a,{label:"BonusCard / длинное значение",children:e.jsx(P,{width:420,value:"−100% навсегда",caption:l})})]})},i={render:()=>e.jsxs("div",{style:{padding:100,background:"#F2F3FA",display:"flex",flexWrap:"wrap",gap:40,alignItems:"flex-start",fontFamily:"Manrope"},children:[e.jsx(a,{label:"Pill / очень длинный текст",children:e.jsx("div",{style:{width:500},children:e.jsx(B,{background:"#FF8FDA",color:"#410031",children:"Очень длинная надпись в пилюле, которая может не поместиться в одну строку"})})}),e.jsx(a,{label:"Tag / длинный",children:e.jsx(A,{tone:"critical",children:"Очень длинная критическая метка"})}),e.jsx(a,{label:"StatCallout / длинные",children:e.jsx(T,{width:460,value:"−99 999%",label:l,desc:l})})]})},d={render:()=>e.jsxs("div",{style:{padding:80,background:"#F2F3FA",display:"flex",flexDirection:"column",gap:60,fontFamily:"Manrope"},children:[e.jsx(a,{label:"ComparisonTable / 6 колонок + длинные критерии",children:e.jsx(G,{width:1700,columns:["Дживио","MPStat","Eggheads","Маяк","SellerX","Прочие"],highlightCol:0,rows:[{label:"Очень длинный критерий который проверяет перенос текста в ячейке параметра и не должен ломать таблицу",cells:[!0,!1,!0,!1,!0,!1]},{label:"Короткий",cells:[!0,!0,!0,!0,!0,!0]}]})}),e.jsx(a,{label:"AttributeTable / длинные значения",children:e.jsx(_,{width:1340,headers:["Атрибуция","Ваша карточка","Конкурент 1","Конкурент 2"],highlightCol:1,rows:[["Очень длинное название атрибуции в строку","1 000 000","999 999▼","1 000 001▲"]]})}),e.jsx(a,{label:"PriceList / длинные лейблы",children:e.jsx(o,{background:"#fff",border:"1px solid #ECE3E9",radius:24,padding:36,width:700,children:e.jsx(I,{rows:[{label:"Очень длинное название услуги которое занимает две строки в прайс-листе",value:"100 000 ₽"},{label:"Коротко",value:"1 ₽"}]})})})]})},s={render:()=>e.jsxs("div",{style:{padding:80,background:"#F2F3FA",display:"flex",gap:60,flexWrap:"wrap",fontFamily:"Manrope"},children:[e.jsx(a,{label:"ArrowList / длинные пункты",children:e.jsx(o,{background:"#fff",border:"1px solid #ECE3E9",radius:24,padding:36,children:e.jsx(M,{width:500,items:[l,"Короткий пункт",l]})})}),e.jsx(a,{label:"CheckList / тёмный фон",children:e.jsx(o,{background:"#410031",radius:24,padding:36,children:e.jsx(O,{textColor:"#FFE4F6",width:500,items:[l,"Ок"]})})}),e.jsx(a,{label:"TariffCard / много строк + длинные",children:e.jsx(N,{width:520,title:"«Премиум+»",chips:["10 API","50 Пользователей","Безлимит"],rows:Array.from({length:9},(n,r)=>({label:r===0?"Подписка на 24 месяца":`Очень длинный пункт тарифа номер ${r}`,value:r===0?"9 999 999 ₽":"вкл"})),total:"Итого: 9 999 999 ₽ / 24 мес.",perDay:"Всего 13 698 ₽ / день",bonus:"100% на баланс Агента в виде бонусов навсегда"})})]})};var x,u,b;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 100,
    background: '#F2F3FA',
    display: 'flex',
    flexWrap: 'wrap',
    gap: 24,
    alignItems: 'flex-start',
    fontFamily: 'Manrope'
  }}>
      <Box label="StatCard / длинная подпись"><StatCard value="+58–63%" label={LONG} /></Box>
      <Box label="StatCard / длинное значение"><StatCard value="1 099 900 000 ₽" label="оборот" /></Box>
      <Box label="IconFeatureCard / длинный desc"><IconFeatureCard width={460} height={420} theme="dark" icon="🤖" title="Очень длинный заголовок карточки в две строки" desc={LONG} /></Box>
      <Box label="AgentCard / длинные"><AgentCard width={620} title="Очень длинное название агента в две строки" desc={LONG} /></Box>
      <Box label="PainCard / длинные"><PainCard width={400} title="Контент + отзыв (длинный)" sublabel="Excel + ручной режим, длинная подпись" danger={LONG} /></Box>
      <Box label="NumberedCard / длинные"><NumberedCard width={400} number={99} title="Очень длинный заголовок шага в несколько строк подряд" desc={LONG} /></Box>
      <Box label="AwardCard / длинные"><AwardCard width={700} title="Очень длинное название награды которое не помещается" subtitle={LONG} /></Box>
      <Box label="MetricCard / длинный title гориз."><MetricCard horizontal title="Очень длинное название метрики в строку" delta="+ 1000%" /></Box>
      <Box label="BonusCard / длинное значение"><BonusCard width={420} value="−100% навсегда" caption={LONG} /></Box>
    </div>
}`,...(b=(u=t.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var p,h,f;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 100,
    background: '#F2F3FA',
    display: 'flex',
    flexWrap: 'wrap',
    gap: 40,
    alignItems: 'flex-start',
    fontFamily: 'Manrope'
  }}>
      <Box label="Pill / очень длинный текст"><div style={{
        width: 500
      }}><Pill background="#FF8FDA" color="#410031">Очень длинная надпись в пилюле, которая может не поместиться в одну строку</Pill></div></Box>
      <Box label="Tag / длинный"><Tag tone="critical">Очень длинная критическая метка</Tag></Box>
      <Box label="StatCallout / длинные"><StatCallout width={460} value="−99 999%" label={LONG} desc={LONG} /></Box>
    </div>
}`,...(f=(h=i.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var g,m,C;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 80,
    background: '#F2F3FA',
    display: 'flex',
    flexDirection: 'column',
    gap: 60,
    fontFamily: 'Manrope'
  }}>
      <Box label="ComparisonTable / 6 колонок + длинные критерии">
        <ComparisonTable width={1700} columns={['Дживио', 'MPStat', 'Eggheads', 'Маяк', 'SellerX', 'Прочие']} highlightCol={0} rows={[{
        label: 'Очень длинный критерий который проверяет перенос текста в ячейке параметра и не должен ломать таблицу',
        cells: [true, false, true, false, true, false]
      }, {
        label: 'Короткий',
        cells: [true, true, true, true, true, true]
      }]} />
      </Box>
      <Box label="AttributeTable / длинные значения">
        <AttributeTable width={1340} headers={['Атрибуция', 'Ваша карточка', 'Конкурент 1', 'Конкурент 2']} highlightCol={1} rows={[['Очень длинное название атрибуции в строку', '1 000 000', '999 999▼', '1 000 001▲']]} />
      </Box>
      <Box label="PriceList / длинные лейблы">
        <Surface background="#fff" border="1px solid #ECE3E9" radius={24} padding={36} width={700}>
          <PriceList rows={[{
          label: 'Очень длинное название услуги которое занимает две строки в прайс-листе',
          value: '100 000 ₽'
        }, {
          label: 'Коротко',
          value: '1 ₽'
        }]} />
        </Surface>
      </Box>
    </div>
}`,...(C=(m=d.parameters)==null?void 0:m.docs)==null?void 0:C.source}}};var w,F,j;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 80,
    background: '#F2F3FA',
    display: 'flex',
    gap: 60,
    flexWrap: 'wrap',
    fontFamily: 'Manrope'
  }}>
      <Box label="ArrowList / длинные пункты"><Surface background="#fff" border="1px solid #ECE3E9" radius={24} padding={36}><ArrowList width={500} items={[LONG, 'Короткий пункт', LONG]} /></Surface></Box>
      <Box label="CheckList / тёмный фон"><Surface background="#410031" radius={24} padding={36}><CheckList textColor="#FFE4F6" width={500} items={[LONG, 'Ок']} /></Surface></Box>
      <Box label="TariffCard / много строк + длинные"><TariffCard width={520} title="«Премиум+»" chips={['10 API', '50 Пользователей', 'Безлимит']} rows={Array.from({
        length: 9
      }, (_, i) => ({
        label: i === 0 ? 'Подписка на 24 месяца' : \`Очень длинный пункт тарифа номер \${i}\`,
        value: i === 0 ? '9 999 999 ₽' : 'вкл'
      }))} total="Итого: 9 999 999 ₽ / 24 мес." perDay="Всего 13 698 ₽ / день" bonus="100% на баланс Агента в виде бонусов навсегда" /></Box>
    </div>
}`,...(j=(F=s.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};const H=["Карточки_длинныйТекст","Пилюли_ярлыки","Таблицы_крайние","Списки_пустыеИДлинные"];export{H as __namedExportsOrder,q as default,t as Карточки_длинныйТекст,i as Пилюли_ярлыки,s as Списки_пустыеИДлинные,d as Таблицы_крайние};
