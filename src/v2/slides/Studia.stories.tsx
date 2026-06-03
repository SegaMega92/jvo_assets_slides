import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { SlideStage, Abs, pt, SCALE } from '../SlideStage';
import { img } from '../assets';
import { Card, Text, Pill } from '../components/kit';

const D = 'studia';
const Img: React.FC<{ x: number; y: number; w: number; h: number; file: string; z?: number; rotate?: number }> =
  ({ x, y, w, h, file, z, rotate }) => (
    <Abs x={x} y={y} w={w} h={h} z={z} rotate={rotate}>
      <img src={img(D, file)} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </Abs>
  );

// фирменная розовая рамка-фрейм + бейдж J
const Frame: React.FC<{ dark?: boolean }> = ({ dark }) => (
  <Abs x={3} y={3} w={954} h={534} z={50} style={{ border: `${pt(6)}px solid #FF66CC`, borderRadius: pt(22), pointerEvents: 'none' }} />
);
const JMark: React.FC<{ light?: boolean }> = ({ light }) => (
  <Abs x={905} y={20} w={38} h={38} z={40}>
    {/* на тёмном фоне — чистый белый знак, на светлом — розовая плитка-знак */}
    <img src={light ? '/sign/sign-mark-light.png' : '/sign/sign-pink.png'}
      style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: light ? 0 : 38 * 0.28 * SCALE }} />
  </Abs>
);
const StudiaStage: React.FC<{ background?: string; dark?: boolean; children: React.ReactNode }> = ({ background = '#FFFFFF', dark, children }) => (
  <SlideStage background={background}>
    {children}
    <Frame dark={dark} />
  </SlideStage>
);

const meta: Meta = { title: 'Презентации/Студия КП', parameters: { layout: 'fullscreen' } };
export default meta;
type S = StoryObj;

const TITLE = '#15181F';

// 01 — титул
export const Слайд01: S = {
  render: () => (
    <StudiaStage>
      <Abs x={18.9} y={18.9} w={300} h={28}><div style={{ fontFamily: 'Unbounded', fontWeight: 800, fontSize: pt(20), color: TITLE }}>ДЖИВИО <span style={{ fontWeight: 500, fontSize: pt(13) }}>студия</span></div></Abs>
      <Abs x={18.6} y={87.6} w={535.2}><div style={{ fontFamily: 'Unbounded', fontWeight: 600, fontSize: pt(32), lineHeight: 1.12, letterSpacing: '-0.01em', color: TITLE }}>Экспертная студия по продвижению на маркетплейсах</div></Abs>
      <Text x={18.6} y={232.1} w={535.2} size={13} weight={500} color="#444" lineHeight={1.4}>Сопровождаем и увеличиваем продажи на маркетплейсах с помощью собственных AI инструментов и профессиональной команды сертифицированных специалистов</Text>
      <Img x={615.9} y={38.7} w={275.6} h={462.5} file="img_f1bffea55613.png" />
    </StudiaStage>
  ),
};

// 02 — 6 карточек преимуществ
const SCard: React.FC<{ x: number; y: number; bg: string; title: string; desc: string }> = ({ x, y, bg, title, desc }) => (
  <Card x={x} y={y} w={300.8} h={138.0} radius={0.0518} background={bg} border={bg === '#FFFFFF' ? '1px solid #ECE3E9' : undefined}>
    <div style={{ padding: `${pt(18)}px ${pt(20)}px` }}>
      <div style={{ fontFamily: 'Unbounded', fontWeight: 600, fontSize: pt(16), color: TITLE, lineHeight: 1.15 }}>{title}</div>
      <div style={{ fontFamily: 'Manrope', fontWeight: 500, fontSize: pt(10), color: '#444', lineHeight: 1.35, marginTop: pt(8) }}>{desc}</div>
    </div>
  </Card>
);
export const Слайд02: S = {
  render: () => (
    <StudiaStage>
      <Abs x={18.9} y={18.9} w={668.5}><div style={{ fontFamily: 'Unbounded', fontWeight: 600, fontSize: pt(28), lineHeight: 1.15, color: TITLE }}>Поднимем вам продажи<br />на маркетплейсах</div></Abs>
      <JMark />
      <SCard x={18.9} y={238.4} bg="#FFFFFF" title="Входим в топ-10" desc="Входим в список лучших сертифицированных агентств Wildberries" />
      <SCard x={327.7} y={238.4} bg="#FFFFFF" title="Официальный партнер WB" desc="Прошли официальную аккредитацию маркетплейсом" />
      <SCard x={636.4} y={238.4} bg="#FFF2CC" title="150+ ниш" desc="Успешный опыт ведения 150+ ниш" />
      <SCard x={18.9} y={383.1} bg="#FFFFFF" title="Более 5 млн SKU" desc="Изучено и проанализировано экспертами Дживио Студия" />
      <SCard x={327.7} y={383.1} bg="#EBF9C1" title="100% команды сертифицировано" desc="Каждый сотрудник получил персональную аккредитацию" />
      <SCard x={636.4} y={383.1} bg="#FFFFFF" title="40+ специалистов" desc="С опытом развития продаж во всех категориях" />
    </StudiaStage>
  ),
};

// 03 — 4 проблемы
export const Слайд03: S = {
  render: () => (
    <StudiaStage>
      <Abs x={18.9} y={18.9} w={742.6}><div style={{ fontFamily: 'Unbounded', fontWeight: 600, fontSize: pt(28), lineHeight: 1.1, color: TITLE }}>Комплексное ведение кабинета</div></Abs>
      <JMark />
      <Pill x={18.9} y={108.3} w={270.7} h={34} background="#FF8FDA" color="#410031" size={12} weight={600}>Решаем ключевые проблемы</Pill>
      <Text x={18.9} y={166.3} w={557.3} size={12} weight={500} color="#444" lineHeight={1.4}>Полное сопровождение кабинета под ключ. Проведем подробный аудит и возьмем на себя создание, развитие и продвижение карточек, работу с рейтингом, отгрузками, SEO и ценообразованием, чтобы вы могли сосредоточиться на создание продукта.</Text>
      {[
        { x: 18.9, n: '1', t: 'Отсутствие выделенной команды', d: 'Успех в ecom зависит от комплексной работы со всеми аспектами, влияющими на продажи' },
        { x: 251.8, n: '2', t: 'Непонимание алгоритмов и основных метрик', d: 'Наши специалисты имеют успешный опыт в 150+ различных нишах и изучили >5 000 000 SKU' },
        { x: 484.8, n: '3', t: 'Недостаток компетенций', d: 'Вашим продвижением будут комплексно заниматься сертифицированные специалисты в ecom и аналитики' },
        { x: 717.7, n: '4', t: 'Отсутствие или ошибки в ecom-стратегии', d: 'ECOM один из самых конкурентных бизнесов, ошибки в управлении ведут к отсутствию прибыли и потере бизнеса' },
      ].map((c) => (
        <Card key={c.n} x={c.x} y={277.8} w={224.9} h={243.3} radius={0.0518} background="#FFFFFF" border="1px solid #ECE3E9">
          <div style={{ padding: `${pt(18)}px ${pt(18)}px` }}>
            <div style={{ fontFamily: 'Unbounded', fontWeight: 600, fontSize: pt(28), color: '#FF8FDA' }}>{c.n}</div>
            <div style={{ fontFamily: 'Manrope', fontWeight: 600, fontSize: pt(12), color: TITLE, marginTop: pt(8), lineHeight: 1.25 }}>{c.t}</div>
            <div style={{ fontFamily: 'Manrope', fontWeight: 500, fontSize: pt(10), color: '#666', marginTop: pt(8), lineHeight: 1.35 }}>{c.d}</div>
          </div>
        </Card>
      ))}
    </StudiaStage>
  ),
};

// 04 — делегируйте управление (3 карточки)
export const Слайд04: S = {
  render: () => (
    <StudiaStage>
      <Abs x={18.9} y={18.9} w={668.5}><div style={{ fontFamily: 'Unbounded', fontWeight: 600, fontSize: pt(28), lineHeight: 1.1, color: TITLE }}>Комплексное ведение кабинета</div></Abs>
      <JMark />
      <Pill x={18.9} y={146.1} w={203.7} h={28} background="#FF8FDA" color="#410031" size={10} weight={600}>Делегируйте управление:</Pill>
      <Abs x={232} y={160} w={697} z={2} style={{ borderTop: '1px solid #E9DEE6' }} />
      {[
        { x: 18.9, bg: '#FFFFFF', t: 'Аналитика, консультации и общение с маркетплейсом', items: ['Анализ метрик магазина: просмотры, заказы, CTR, CR, ДРР', 'Аудит магазина: рекомендации по логистике, дизайну и другим направлениям', 'Коммуникация с маркетплейсом по модерации, отчетам, логистике, документам', 'Анализ конкурентов: цена, контент, продвижение'] },
        { x: 329.6, bg: '#FFFFFF', t: 'Экономика магазина', items: ['Контроль корректной работы и показателей магазина: рейтинг, отмены, индекс цен', 'АВС-анализ ассортимента по заказам и продажам 1 раз в 2 недели', 'Расчет юнит-экономики', 'Анализ конкурентов: цена, контент, продвижение'] },
        { x: 640.3, bg: '#FFF2CC', t: 'Работа со стоками', items: ['Контроль остатков: FBO, FBS', 'Расчет поставок'] },
      ].map((c, i) => (
        <Card key={i} x={c.x} y={202.7} w={300.8} h={318.4} radius={0.0399} background={c.bg} border={c.bg === '#FFFFFF' ? '1px solid #ECE3E9' : undefined}>
          <div style={{ padding: `${pt(18)}px ${pt(18)}px` }}>
            <div style={{ fontFamily: 'Manrope', fontWeight: 600, fontSize: pt(12), color: TITLE, lineHeight: 1.25 }}>{c.t}</div>
            {c.items.map((it, j) => (
              <div key={j} style={{ fontFamily: 'Manrope', fontWeight: 500, fontSize: pt(10), color: '#444', marginTop: pt(8), lineHeight: 1.3 }}>→ {it}</div>
            ))}
          </div>
        </Card>
      ))}
    </StudiaStage>
  ),
};

// 05 — что входит (2 карточки + таймлайн)
export const Слайд05: S = {
  render: () => (
    <StudiaStage>
      <Abs x={18.9} y={18.9} w={742.6}><div style={{ fontFamily: 'Unbounded', fontWeight: 600, fontSize: pt(30), lineHeight: 1.1, color: TITLE }}>Комплексное<br />ведение кабинета</div></Abs>
      <JMark />
      <Pill x={18.9} y={150} w={150} h={30} background="#FFFFFF" color="#FF6FC9" size={11} weight={600}>Что входит:</Pill>
      <Abs x={175} y={164} w={748} z={2} style={{ borderTop: '1px solid #F0C9E6' }} />
      <Abs x={918} y={160} w={9} h={9} z={3} style={{ background: '#FF6FC9', borderRadius: '50%' }} />
      <Card x={36} y={210} w={400} h={300} radius={0.04} background="#EBF9C1">
        <div style={{ padding: `${pt(24)}px ${pt(26)}px` }}>
          <div style={{ fontFamily: 'Unbounded', fontWeight: 600, fontSize: pt(22), color: TITLE, lineHeight: 1.15 }}>Маркетинг и управление карточками</div>
          <div style={{ fontFamily: 'Manrope', fontWeight: 500, fontSize: pt(11), color: '#2A3312', marginTop: pt(16), lineHeight: 1.4 }}>→ Создание и реализация маркетинг-плана: аудит карточек, запуск, настройка и корректировка рекламы, аналитика. Контроль модерации карточек</div>
          <div style={{ fontFamily: 'Manrope', fontWeight: 500, fontSize: pt(11), color: '#2A3312', marginTop: pt(12), lineHeight: 1.4 }}>→ Регистрация новых карточек при наличии заполненных Excel шаблонов или идентичных товаров. Регистрация товаров в акции</div>
        </div>
      </Card>
      <Card x={486} y={210} w={400} h={300} radius={0.04} background="#FFE4F6">
        <div style={{ padding: `${pt(24)}px ${pt(26)}px` }}>
          <div style={{ fontFamily: 'Unbounded', fontWeight: 600, fontSize: pt(22), color: TITLE, lineHeight: 1.15 }}>Регулярные отчеты</div>
          <div style={{ fontFamily: 'Manrope', fontWeight: 500, fontSize: pt(11), color: '#410031', marginTop: pt(16), lineHeight: 1.4 }}>→ Еженедельные и ежемесячные отчеты по продажам, метрикам ми активностям магазина.</div>
          <div style={{ fontFamily: 'Manrope', fontWeight: 500, fontSize: pt(11), color: '#410031', marginTop: pt(12), lineHeight: 1.4 }}>→ Рекомендации по улучшению показателей.</div>
        </div>
      </Card>
    </StudiaStage>
  ),
};

// Кейс (06/07)
const MetricBox: React.FC<{ x: number; y: number; w?: number; h?: number; title: string; before?: string; after?: string; big: string; bigColor?: string; horizontal?: boolean }> =
  ({ x, y, w = 171.4, h = 167.6, title, before, after, big, bigColor = TITLE, horizontal }) => (
    <Card x={x} y={y} w={w} h={h} radius={0.082} background="#FFFFFF" border="1px solid #ECE3E9">
      <div style={{ padding: `${pt(16)}px ${pt(18)}px`, height: '100%', position: 'relative' }}>
        <div style={{ fontFamily: 'Manrope', fontWeight: 600, fontSize: pt(12), color: TITLE }}>{title}</div>
        {before && <div style={{ fontFamily: 'Manrope', fontWeight: 500, fontSize: pt(10), color: '#666', marginTop: pt(10) }}>до: <span style={{ color: TITLE }}>{before}</span></div>}
        {after && <div style={{ fontFamily: 'Manrope', fontWeight: 500, fontSize: pt(10), color: '#666', marginTop: pt(4) }}>после: <span style={{ color: TITLE }}>{after}</span></div>}
        <div style={{ position: 'absolute', left: horizontal ? 'auto' : pt(18), right: horizontal ? pt(18) : 'auto', bottom: horizontal ? 'auto' : pt(16), top: horizontal ? pt(16) : 'auto', fontFamily: 'Unbounded', fontWeight: 600, fontSize: pt(16), color: bigColor }}>{big}</div>
      </div>
    </Card>
  );
const CaseStudia: React.FC<{ title: React.ReactNode; photo: string; whatDone: string[]; result: React.ReactNode; metrics: React.ReactNode }> =
  ({ title, photo, whatDone, result, metrics }) => (
    <StudiaStage>
      <Img x={579.5} y={4.3} w={375.6} h={531.5} file={photo} />
      <Abs x={72.3} y={18.9} w={500}><div style={{ fontFamily: 'Unbounded', fontWeight: 600, fontSize: pt(28), lineHeight: 1.1, color: TITLE }}>{title}</div></Abs>
      {/* вертикальные теги слева */}
      <Abs x={-9.2} y={47.7} w={90.2} h={34} rotate={-90} z={3}><div style={{ background: '#FF8FDA', borderRadius: 999, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Manrope', fontWeight: 600, fontSize: pt(12), color: '#410031' }}>кейс</div></Abs>
      <Abs x={-61.8} y={206.8} w={195.4} h={34} rotate={-90} z={3}><div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Manrope', fontWeight: 500, fontSize: pt(12), color: '#999' }}>что сделано</div></Abs>
      <Abs x={-61.1} y={407.1} w={194.0} h={34} rotate={-90} z={3}><div style={{ background: '#EBF9C1', borderRadius: 999, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Manrope', fontWeight: 500, fontSize: pt(12), color: '#38761D' }}>результат</div></Abs>
      <Text x={56.6} y={126.1} w={507.1} size={10} weight={500} color="#333" lineHeight={1.5}>{whatDone.map((t, i) => <div key={i} style={{ marginBottom: pt(6) }}>{t}</div>)}</Text>
      <Abs x={73.9} y={326} w={480} z={2} style={{ borderTop: '1px solid #E9DEE6' }} />
      <Text x={56.6} y={334.8} w={507.1} size={10} weight={500} color="#333" lineHeight={1.5}>{result}</Text>
      {metrics}
    </StudiaStage>
  );
export const Слайд06: S = {
  render: () => (
    <CaseStudia title="Одежда" photo="img_475a8d6e0d17.jpg"
      whatDone={['Провели аудит карточек: улучшили фото, описание, SEO-ключи.', 'Оптимизировали рекламные кампании и снизили ДРР с 35% до 18%.']}
      result={<><div style={{ marginBottom: pt(6) }}>Выручка выросла <b>с 2,8 млн руб. до 4,5 млн руб. (+60%)</b>.</div><div style={{ marginBottom: pt(6) }}>CTR карточек увеличился <b>с 0,7% до 1,9%</b>.</div><div>Средний чек вырос <b>на 22%</b> за счет грамотного кросспродвижения.</div></>}
      metrics={<>
        <MetricBox x={596.4} y={16.6} title="Выручка" before="2,8 млн ₽" after="4,5 млн ₽" big="+ 60%" />
        <MetricBox x={769.7} y={16.6} title="ДДР" before="35%" after="18%" big="- 17%" />
        <MetricBox x={596.4} y={355.8} w={344.6} h={87.6} title="Средний чек" big="+ 22%" horizontal />
      </>} />
  ),
};
export const Слайд07: S = {
  render: () => (
    <CaseStudia title={<>Косметика и парфюмерия</>} photo="img_f30b7c43734f.jpg"
      whatDone={['Разработали новую ecom-стратегию с акцентом на сезонные акции.', 'Оптимизировали ассортимент и убрали низкомаржинальные товары.', 'Настроили персонализированные рекламные кампании на основе анализа покупательского поведения.', 'Подключили механику скидок и акций, которые повысили конверсию.']}
      result={<><div style={{ marginBottom: pt(6) }}>Выручка выросла <b>с 15 млн руб. до 21,5 млн руб. (+43%)</b>.</div><div style={{ marginBottom: pt(6) }}>ДРР снизился <b>с 28% до 14%</b> за счет эффективного таргетинга.</div><div>Количество заказов увеличилось <b>на 40%</b>, средний чек — <b>на 19%</b>.</div></>}
      metrics={<>
        <MetricBox x={596.4} y={16.6} title="Выручка" before="15 млн ₽" after="21,5 млн ₽" big="+ 43%" />
        <MetricBox x={769.7} y={16.6} title="ДДР" before="28%" after="14%" big="- 14%" />
        <MetricBox x={596.4} y={353.6} w={344.6} h={87.6} title="Количество заказов" big="+ 40%" horizontal />
      </>} />
  ),
};

// 08 — цены (тёмный)
const PriceCard: React.FC<{ x: number; months: string; rows: [string, string][] }> = ({ x, months, rows }) => (
  <Card x={x} y={92} w={300.8} h={418} radius={0.05} background="#FFFFFF">
    <div style={{ padding: `${pt(18)}px ${pt(22)}px` }}>
      <div style={{ fontFamily: 'Unbounded', fontWeight: 600, fontSize: pt(18), color: TITLE, lineHeight: 1.15 }}>Комплексное ведение кабинета {months}</div>
      <div style={{ marginTop: pt(8) }}>
        {rows.map(([k, v], i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: `${pt(5.5)}px 0`, borderTop: i ? '1px solid #EEE' : 'none' }}>
            <span style={{ fontFamily: 'Manrope', fontWeight: 500, fontSize: pt(10), color: TITLE, width: '42%', lineHeight: 1.2 }}>{k} рекламных кампаний</span>
            <span style={{ fontFamily: 'Unbounded', fontWeight: 500, fontSize: pt(15), color: '#FF8FDA' }}>{v}</span>
          </div>
        ))}
      </div>
    </div>
  </Card>
);
export const Слайд08: S = {
  render: () => (
    <StudiaStage background="#15181F" dark>
      <Pill x={150} y={82} w={300} h={36} background="linear-gradient(90deg,#FF8FDA,#FFCFEF)" color="#FFFFFF" size={12} weight={600}>Специальное предложение до 30.02.</Pill>
      <JMark light />
      <PriceCard x={170} months="3 месяца" rows={[['5', '275 700₽'], ['10', '339 600₽'], ['15', '403 800₽'], ['20', '468 000 ₽'], ['25', '475 900₽']]} />
      <PriceCard x={489} months="6 месяцев" rows={[['5', '536 400₽'], ['10', '664 200₽'], ['15', '792 600₽'], ['20', '921 000₽'], ['25', '1 049 400₽']]} />
    </StudiaStage>
  ),
};

// 09 — бонус
export const Слайд09: S = {
  render: () => (
    <StudiaStage background="radial-gradient(120% 130% at 50% 30%, #FFE0F5 0%, #FFC2EC 55%, #FFA6E2 100%)">
      <Pill x={350} y={36.5} w={261.8} h={34} background="#15181F" color="#FFFFFF" size={12} weight={600}>Ограниченное предложение</Pill>
      <Card x={357} y={122} w={246} h={58} radius={0.2} background="#FF8FDA" z={1} />
      <Abs x={145.3} y={120} w={668.5} z={2}><div style={{ fontFamily: 'Unbounded', fontWeight: 700, fontSize: pt(38), color: TITLE, textAlign: 'center', lineHeight: 1.15 }}>БОНУС<br />при оплате сегодня</div></Abs>
      <Card x={165.6} y={255.5} w={275.3} h={122.2} radius={0.14} background="#15181F" />
      <Abs x={165.6} y={288} w={275.3} z={2}><div style={{ textAlign: 'center', fontFamily: 'Unbounded', fontWeight: 600, fontSize: pt(28), color: '#FFFFFF' }}>5 SEO</div></Abs>
      <Text x={165.6} y={334} w={275.3} size={10} weight={500} color="#B7B7B7" align="center">Карточек в подарок</Text>
      <Text x={462} y={307} w={56} size={14} weight={500} color="#15181F" align="center" z={2}>или</Text>
      <Card x={521.0} y={255.5} w={275.4} h={122.2} radius={0.13} background="#15181F" />
      <Abs x={521} y={288} w={275.4} z={2}><div style={{ textAlign: 'center', fontFamily: 'Unbounded', fontWeight: 600, fontSize: pt(28), color: '#FFFFFF' }}>1 месяц</div></Abs>
      <Text x={521} y={334} w={275.4} size={10} weight={500} color="#B7B7B7" align="center">Консультаций в подарок</Text>
      <Abs x={18.9} y={470} w={922.2} z={2}><div style={{ fontFamily: 'Unbounded', fontWeight: 800, fontSize: pt(24), color: TITLE, textAlign: 'center' }}>ДЖИВИО</div></Abs>
    </StudiaStage>
  ),
};

// 10 — финал (контакты)
export const Слайд10: S = {
  render: () => {
    const contacts = [
      { x: 18.9, y: 300, label: 'По общим вопросам:', value: 'hi@jvo.ru' },
      { x: 484, y: 300, label: 'Сайт:', value: 'jvo.ru' },
      { x: 18.9, y: 415, label: 'Звоните:', value: '+7 499 322-09-33' },
      { x: 484, y: 415, label: 'Социальные сети:', value: 'VK · TG · Дзен · YouTube' },
    ];
    return (
      <StudiaStage background="#F2F3FA">
        <Abs x={18.9} y={18.9} w={400} h={28}><div style={{ fontFamily: 'Unbounded', fontWeight: 800, fontSize: pt(22), color: TITLE }}>ДЖИВИО <span style={{ fontWeight: 500, fontSize: pt(13), background: '#FFF', padding: `${pt(2)}px ${pt(8)}px`, borderRadius: 999 }}>студия</span></div></Abs>
        <Abs x={18.9} y={70} w={760}><div style={{ fontFamily: 'Unbounded', fontWeight: 600, fontSize: pt(34), lineHeight: 1.15, color: TITLE }}>Подключайтесь<br />к Дживио и выигрывайте<br />на электронной полке</div></Abs>
        {contacts.map((c, i) => (
          <React.Fragment key={i}>
            <Card x={c.x} y={c.y} w={438} h={98} radius={0.07} background="#FFFFFF" border="1px solid #E6E7EE" />
            <Text x={c.x + 24} y={c.y + 22} w={380} size={10} weight={500} color="#999">{c.label}</Text>
            <Text x={c.x + 24} y={c.y + 48} w={390} size={22} font="Unbounded" weight={500} color="#FF6FC9">{c.value}</Text>
          </React.Fragment>
        ))}
      </StudiaStage>
    );
  },
};
