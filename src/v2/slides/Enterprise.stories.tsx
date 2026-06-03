import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { SlideStage, Abs, pt } from '../SlideStage';
import { img } from '../assets';
import { Card, JBadge, SlideTitle, Text, Marker, Pill } from '../components/kit';

const D = 'enterprise';

// частые градиенты деков
const GR = {
  lime: 'linear-gradient(180deg, #D6FE9E 0%, #FFF2CC 100%)',
  pink: 'linear-gradient(180deg, #FFE4F6 0%, #FFDBD2 100%)',
  callout: 'linear-gradient(90deg, #410031 0%, #410031 38%, #FF8FDA 82%, #EAD7FE 100%)',
  paleCard: 'linear-gradient(160deg, #FFFFFF 0%, #FFF4FB 100%)',
};

const meta: Meta = {
  title: 'Презентации/Enterprise',
  parameters: { layout: 'fullscreen' },
};
export default meta;
type S = StoryObj;

// ─────────────────────────────────────────────────────────────────────
// Слайд 01 — Титул (AI-агенты для управления бизнесом)
// ─────────────────────────────────────────────────────────────────────
export const Слайд01: S = {
  render: () => (
    <SlideStage background="radial-gradient(130% 110% at 78% 60%, #FBC9F4 0%, #FBE4F4 38%, #F4EEF3 72%, #E8E5E9 100%)">
      {/* Вордмарк ДЖИВИО */}
      <Abs x={18.9} y={18.9} w={280.4} h={43.4}>
        <img src={img(D, 'img_9eb928b89d34.png')} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </Abs>

      {/* Бейдж J (справа сверху) */}
      <Abs x={899.4} y={18.9} w={41.7} h={41.7}>
        <img src={img(D, 'img_83ddcd244300.png')} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </Abs>

      {/* Заголовок */}
      <Abs x={18.6} y={150} w={700} h={170}>
        <div style={{
          fontFamily: 'Unbounded', fontWeight: 700, fontSize: pt(36),
          lineHeight: 1.05, letterSpacing: '-0.01em', color: '#410031',
        }}>
          AI-агенты для управления бизнесом на маркетплейсах
        </div>
      </Abs>

      {/* Бейджи WB + Ozon рядом с последней строкой заголовка */}
      <Abs x={607.2} y={267.8} w={35} h={35} rotate={-6.2}>
        <img src={img(D, 'img_a1fd6dd979a9.png')} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </Abs>
      <Abs x={639.5} y={267.8} w={35} h={35} rotate={-6.5}>
        <img src={img(D, 'img_75b8dfb7df91.png')} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </Abs>

      {/* Подзаголовок */}
      <Abs x={18.9} y={331.9} w={620} h={60}>
        <div style={{
          fontFamily: 'Manrope', fontWeight: 500, fontSize: pt(16),
          lineHeight: 1.28, color: '#410031',
        }}>
          Находим утечки и точки роста, превращаем их в задачи<br />
          и автоматически выполняем их с помощью AI-агентов
        </div>
      </Abs>
    </SlideStage>
  ),
};

// маленький компонент карточки-статистики (число + подпись)
const StatCard: React.FC<{ x: number; y: number; bg: string; num: string; label: string; numColor?: string; labelColor?: string }> =
  ({ x, y, bg, num, label, numColor = '#410031', labelColor = '#410031' }) => (
    <Card x={x} y={y} w={230.2} h={155.5} radius={0.0807} background={bg}>
      <div style={{ padding: `${pt(20)}px ${pt(18)}px`, height: '100%', display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontFamily: 'Unbounded', fontWeight: 600, fontSize: pt(20), color: numColor, lineHeight: 1 }}>{num}</div>
        <div style={{ fontFamily: 'Manrope', fontWeight: 500, fontSize: pt(10), color: labelColor, lineHeight: 1.25, marginTop: pt(14) }}>{label}</div>
      </div>
    </Card>
  );

// ─────────────────────────────────────────────────────────────────────
// Слайд 02 — Рынок растёт, зарабатывать сложнее (статы + парадокс)
// ─────────────────────────────────────────────────────────────────────
export const Слайд02: S = {
  render: () => (
    <SlideStage background="#FBFBFB">
      <SlideTitle size={28} w={721.6}>Рынок маркетплейсов растёт. Зарабатывать на нём — становится сложнее</SlideTitle>
      <JBadge deck={D} />

      <StatCard x={18.9} y={169.7} bg={GR.lime} num="11,5 трлн ₽" label="объём интернет-торговли РФ в 2025" />
      <StatCard x={254.8} y={169.7} bg={GR.lime} num="+28%" label="рост рынка год к году" />
      <StatCard x={18.9} y={332.6} bg={GR.pink} num="+58–63%" label="рост комиссий селлерам за 2023–2025" />
      <StatCard x={254.8} y={332.6} bg={GR.pink} num="20% → 22%" label="НДС с 2026 года" />

      {/* Парадокс роста — тёмная карточка (текст вынесен соседями: вложенный Abs удваивал бы смещение) */}
      <Card x={495.0} y={169.7} w={446.1} h={318.4} radius={0.0399} background="#410031" />
      <Text x={520} y={196} w={400} size={12} color="#FFFFFF" weight={500} z={2}>Парадокс роста:</Text>
      <Text x={518} y={278} w={420} size={24} font="Unbounded" weight={600} color="#FF8FDA" lineHeight={1.14} z={2} style={{ letterSpacing: '-0.02em' }}>
        Выручка растёт.<br />Прибыль —уходит.
      </Text>
      <Text x={520} y={392} w={400} size={12} color="#F2D9EC" weight={500} lineHeight={1.4} z={2}>
        За последние 3 года комиссии МП выросли в 2 раза, а ставка УСН+НДС с 2025 — в 2+ раза. Вместо роста маржинальности — сжатие.
      </Text>

      <Text x={18.9} y={508} w={520} size={9} color="#B7B7B7" weight={400}>
        Источники: Data Insight, ФНС, открытые отчёты Wildberries и Ozon, 2025–2026
      </Text>
    </SlideStage>
  ),
};

// ─────────────────────────────────────────────────────────────────────
// Слайд 03 — Вы не видите всей картины (4 квадранта боли)
// ─────────────────────────────────────────────────────────────────────
const PainCard: React.FC<{ x: number; title: string; danger: string }> = ({ x, title, danger }) => (
  <>
    <Card x={x} y={190} w={222.4} h={222.4} radius={0.0413} background={GR.paleCard} />
    <Text x={x + 19.2} y={211.3} w={183.4} size={20} font="Unbounded" weight={600} color="#410031">{title}</Text>
    <Text x={x + 19.2} y={301.5} w={183.4} size={10} color="#A64D79" weight={500}>Excel + ручной режим</Text>
    <Abs x={x + 19.2} y={285.5} w={188.4} style={{ borderTop: '1px solid rgba(65,0,49,0.18)' }} />
    <Text x={x + 19.2} y={335.9} w={183.4} size={10} weight={700} color="#410031" lineHeight={1.35}>{danger}</Text>
  </>
);
export const Слайд03: S = {
  render: () => (
    <SlideStage background="#FBFBFB">
      <SlideTitle size={28} w={721.6}>Вы не видите всей картины — поэтому теряете деньги</SlideTitle>
      <JBadge deck={D} />
      <Text x={18.9} y={124.3} w={721.6} size={12} color="#15181F" weight={500}>
        Каждый процесс управляется отдельно. Менеджеры работают с отдельными причинами. Команда тушит последствия, а не управляет причиной.
      </Text>

      <PainCard x={18.9} title="Цена" danger="Цена выше оптимальной → падают заказы" />
      <PainCard x={252.4} title="Реклама" danger="Бюджет сжигается из-за неэффективного управления" />
      <PainCard x={485.7} title="Поставки" danger="Не успели поставить → потеря позиции" />
      <PainCard x={718.7} title="Контент + отзыв" danger="SEO не успевает обновляться, отзывы без ответа" />

      {/* нижняя плашка-вывод */}
      <Card x={172.3} y={439.6} w={615.4} h={81.5} radius={0.3033} background={GR.callout} />
      <Marker x={198.6} y={464.0} size={33.7} bg="#410031" arrow="#FF8FDA" z={5} />
      <Text x={250} y={462} w={520} size={12} weight={700} color="#FFFFFF" lineHeight={1.35} z={5}>
        Разрыв между планированием и исполнением = потеря маржи, бюджета, спроса и позиций
      </Text>
    </SlideStage>
  ),
};

// ─────────────────────────────────────────────────────────────────────
// Слайд 04 — Масштаб решений (формула 500×20×7×2 = 70 000+)
// ─────────────────────────────────────────────────────────────────────
export const Слайд04: S = {
  render: () => (
    <SlideStage background="#FBFBFB">
      <SlideTitle size={28} w={721.6}>Масштаб решений —<br />за пределами человеческих возможностей</SlideTitle>
      <JBadge deck={D} />

      {/* оранжевая карточка-результат */}
      <Card x={692.2} y={194.0} w={194.0} h={103.0} radius={0.1667}
        background="linear-gradient(135deg, #F6B26B 0%, #E8743A 60%, #C7401E 100%)" />

      {/* числа и знаки */}
      <Text x={49.1} y={212.9} w={120} size={20} font="Unbounded" weight={600} color="#410031">500</Text>
      <Text x={49.1} y={252.3} w={120} size={12} color="#410031" weight={500}>SKU</Text>
      <Text x={150.1} y={212.9} w={41.7} size={20} font="Unbounded" weight={600} color="#FF8FDA" align="center">×</Text>
      <Text x={212.6} y={212.9} w={120} size={20} font="Unbounded" weight={600} color="#410031">20</Text>
      <Text x={183.9} y={252.3} w={137.4} size={12} color="#410031" weight={500}>Переменных, цены, ставки, сток</Text>
      <Text x={313.6} y={212.9} w={41.7} size={20} font="Unbounded" weight={600} color="#FF8FDA" align="center">×</Text>
      <Text x={376.1} y={212.9} w={80.1} size={20} font="Unbounded" weight={600} color="#410031">7</Text>
      <Text x={343.9} y={252.3} w={144.5} size={12} color="#410031" weight={500}>Изменений в неделю</Text>
      <Text x={477.1} y={212.9} w={41.7} size={20} font="Unbounded" weight={600} color="#FF8FDA" align="center">×</Text>
      <Text x={539.6} y={212.9} w={80.1} size={20} font="Unbounded" weight={600} color="#410031">2</Text>
      <Text x={507.4} y={252.3} w={144.5} size={12} color="#410031" weight={500}>Площадки Ozon + WB</Text>
      <Text x={640.6} y={212.9} w={41.7} size={20} font="Unbounded" weight={600} color="#410031" align="center">=</Text>
      <Text x={703.1} y={222.9} w={164.1} size={20} font="Unbounded" weight={600} color="#FFFFFF" align="center">70 000+</Text>
      <Text x={703.1} y={258.3} w={164.1} size={12} color="#FFFFFF" weight={500} align="center">Решений в неделю</Text>

      {/* нижняя плашка */}
      <Card x={116.4} y={381.6} w={727.1} h={81.5} radius={0.3033} background={GR.callout} />
      <Marker x={142.8} y={406.0} size={33.7} bg="#410031" arrow="#FF8FDA" z={5} />
      <Text x={196} y={404} w={620} size={12} weight={700} color="#FFFFFF" lineHeight={1.4} z={5}>
        Команде из 5 человек, работающей по 10 часов в день,<br />
        придётся принимать по 23 решения в минуту. Без перерывов. Без ошибок.
      </Text>

      <Text x={89.7} y={506.6} w={781} size={10} color="#B7B7B7" weight={400} align="center">
        Это физически невозможно — поэтому вы делаете 5–10% от нужного объёма работы и теряете деньги на остальных 90%.
      </Text>
    </SlideStage>
  ),
};

// ─────────────────────────────────────────────────────────────────────
// Слайд 05 — Уровни зрелости e-commerce (3 колонки)
// ─────────────────────────────────────────────────────────────────────
const MaturityCol: React.FC<{
  x: number; bg: string; blob: string; blobW: number; blobH: number; blobX: number; blobY: number;
  title: string; subtitle: string; bullets: string[]; markerBg: string; markerArrow: string;
  priceBg: string; priceColor: string; price: string; titleColor?: string;
}> = ({ x, bg, blob, blobW, blobH, blobX, blobY, title, subtitle, bullets, markerBg, markerArrow, priceBg, priceColor, price, titleColor = '#410031' }) => (
  <>
    <Card x={x} y={186.7} w={300.8} h={334.4} radius={0.0399} background={bg} />
    <Abs x={blobX} y={blobY} w={blobW} h={blobH}>
      <img src={img(D, blob)} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
    </Abs>
    <Text x={x + 21.1} y={246.1} w={260} size={20} font="Unbounded" weight={600} color={titleColor}>{title}</Text>
    <Text x={x + 21.1} y={285.8} w={260} size={12} color={titleColor} weight={500}>{subtitle}</Text>
    {bullets.map((b, i) => {
      const by = 330 + i * 32;
      return (
        <React.Fragment key={i}>
          <Marker x={x + 21.1} y={by} size={15.8} bg={markerBg} arrow={markerArrow} />
          <Text x={x + 45} y={by + 1} w={236} size={10} color={titleColor} weight={500}>{b}</Text>
        </React.Fragment>
      );
    })}
    <Pill x={x + 16} y={471.3} w={209.1} h={30} background={priceBg} color={priceColor} size={10} weight={500}>{price}</Pill>
  </>
);
export const Слайд05: S = {
  render: () => (
    <SlideStage background="#FBFBFB">
      <SlideTitle size={28} w={657.1}>На каком уровне зрелости e-commerce находится ваш бизнес?</SlideTitle>
      <JBadge deck={D} />

      <MaturityCol x={18.9} bg={GR.lime} blob="img_cb4c37d93c5c.png" blobW={41.7} blobH={65} blobX={40} blobY={165.1}
        title="Новичок" subtitle="Ручной труд"
        bullets={['Excel и таблицы', '1–2 человека на всё', 'Реакция постфактум', 'Решения «на глаз»']}
        markerBg="#1F2A09" markerArrow="#D8F995" priceBg="#1F2A09" priceColor="#D8F995" price="До 10 млн ₽ / мес" titleColor="#1F2A09" />

      <MaturityCol x={329.6} bg={GR.pink} blob="img_5c693d138f89.png" blobW={69.2} blobH={81.1} blobX={350.8} blobY={153.1}
        title="Претендент" subtitle="Раздутый штат"
        bullets={['Дашборды + менеджеры', 'Команда 5–15 человек', 'Решения по правилам', 'Узкие нишевые инструменты']}
        markerBg="#FF8FDA" markerArrow="#410031" priceBg="#FF8FDA" priceColor="#410031" price="10 – 100 млн ₽ / мес" />

      <MaturityCol x={640.3} bg="linear-gradient(160deg, #EEFF41 0%, #FF8FDA 40%, #FFCFEF 70%, #FFE4F6 100%)"
        blob="img_c3e1dde804d7.png" blobW={85.4} blobH={81.1} blobX={660} blobY={146}
        title="Лидер" subtitle="AI-агенты + стратегия"
        bullets={['Единый контур данных', 'Алгоритмы — в реальном времени', 'Команда — на стратегии', 'Tech-first: машины делают рутину']}
        markerBg="#410031" markerArrow="#FF8FDA" priceBg="linear-gradient(90deg,#BC4EA1,#410031)" priceColor="#FFE4F6" price="от 100 млн ₽ / мес" />

      <Pill x={767.8} y={176.5} w={157.9} h={19.9} background="linear-gradient(90deg,#1F2A09,#274E13,#1F2A09)" color="#D8F995" size={8} weight={600} font="Manrope">Здесь растет прибыль ↑↑</Pill>
    </SlideStage>
  ),
};

// ─────────────────────────────────────────────────────────────────────
// Слайд 06 — Единый центр управления (3 тёмные колонки)
// ─────────────────────────────────────────────────────────────────────
const CenterCol: React.FC<{ x: number; icon: string; iconW: number; iconH: number; title: React.ReactNode; desc: string }> =
  ({ x, icon, iconW, iconH, title, desc }) => (
    <>
      <Card x={x} y={174.8} w={300.8} h={287.3} radius={0.0758} background="#410031" />
      <Abs x={x + 22.1} y={192.3} w={iconW} h={iconH}>
        <img src={img(D, icon)} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </Abs>
      <Text x={x + 22.1} y={285} w={260} size={20} font="Unbounded" weight={600} color="#FFFFFF">{title}</Text>
      <Text x={x + 22.1} y={330} w={258} size={12} color="#F2D9EC" weight={500} lineHeight={1.4}>{desc}</Text>
    </>
  );
export const Слайд06: S = {
  render: () => (
    <SlideStage background="#FBFBFB">
      <SlideTitle size={28} w={649.7} lineHeight={1.18}>Единый центр управления<br />вашими маркетплейсами</SlideTitle>
      <JBadge deck={D} />
      <CenterCol x={18.9} icon="img_81eebe2132e3.png" iconW={71.4} iconH={66.1} title="Находит"
        desc="Система видит утечки выручки и точки роста в реальном времени по всей вашей матрице" />
      <CenterCol x={329.6} icon="img_1d2c003045cc.png" iconW={89.7} iconH={66.1} title={<>Превращает в задачи</>}
        desc="Каждая утечка и точка роста становится конкретной задачей с приоритетом и метрикой" />
      <CenterCol x={640.3} icon="img_d1afa37e023e.png" iconW={80.2} iconH={66.1} title="Выполняет"
        desc="AI-агенты выполняют задачи через API Wildberries и Ozon — автономно и круглосуточно" />
    </SlideStage>
  ),
};

// ─────────────────────────────────────────────────────────────────────
// Слайд 07 — Единый AI-контур (6 агентов вокруг центра)
// ─────────────────────────────────────────────────────────────────────
const AgentCard: React.FC<{ x: number; y: number; icon: string; title: string; desc: string }> = ({ x, y, icon, title, desc }) => (
  <>
    <Card x={x} y={y} w={349.4} h={114.6} radius={0.123} background="#FBFBFB" />
    <Abs x={x + 15.2} y={y + 17.6} w={51.3} h={51.3}>
      <img src={img(D, icon)} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
    </Abs>
    <Text x={x + 78} y={y + 18} w={258} size={12} weight={700} color="#15181F">{title}</Text>
    <Text x={x + 78} y={y + 42} w={258} size={8} weight={500} color="#666666" lineHeight={1.35}>{desc}</Text>
  </>
);
export const Слайд07: S = {
  render: () => (
    <SlideStage background="#FBFBFB">
      <SlideTitle size={28} w={796.3}>ДЖИВИО объединяет всё управление в единый AI-контур</SlideTitle>
      <JBadge deck={D} />

      <AgentCard x={18.9} y={129.5} icon="img_e84a74a3fe55.png" title="Агент Ценообразования" desc="Рост прибыли и объема заказов, защита от OOS, выполнение плана по марже, разгон неликвида, авто-акции" />
      <AgentCard x={18.9} y={259.7} icon="img_6f46299acab0.png" title="Агент Рекламы" desc="Управление бюджетом с целью по ДРР/ROAS и отсутствие неэффективных трат" />
      <AgentCard x={18.9} y={389.9} icon="img_9df4106148e5.png" title="Агент Коммуникаций" desc="Отзывы 24/7 с Tone-of-Voice, кросс-продажи, закрытие негатива и обработка вопросов" />
      <AgentCard x={591.7} y={129.5} icon="img_20df3be54662.png" title="Управление поставками" desc="Защита от OOS, контроль оборачиваемости, региональная экспансия" />
      <AgentCard x={591.7} y={259.7} icon="img_893d72956d4f.png" title="Модуль SEO" desc="Ежедневный контроль семантики" />
      <AgentCard x={591.7} y={389.9} icon="img_5e981095148f.png" title="Аналитика" desc="Контроль трендов и динамики, мгновенное определение причин падения продаж, контроль воронки" />

      {/* центр: иллюстрация + карточка «Дживио AI» */}
      <Abs x={321.0} y={198.4} w={322.8} h={246.7}>
        <img src={img(D, 'img_5d8dff877d63.png')} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </Abs>
      <Card x={390.7} y={259.7} w={181.1} h={128.3} radius={0.2078} background="linear-gradient(160deg,#FF8FDA,#FFCFEF)" />
      <Text x={390.7} y={290} w={181.1} size={16} font="Unbounded" weight={600} color="#410031" align="center" z={2}>Дживио AI</Text>
      <Text x={410} y={322} w={142} size={8} weight={500} color="#410031" align="center" z={2}>Каскад нейросетей анализирует и решает</Text>
    </SlideStage>
  ),
};

// ─────────────────────────────────────────────────────────────────────
// Слайд 08 — Данные / ИИ / Действия (3 колонки, светлый фон)
// ─────────────────────────────────────────────────────────────────────
const IconCol: React.FC<{ icx: number; icy: number; icon: string; iconW: number; iconH: number; title: string; desc: string }> =
  ({ icx, icy, icon, iconW, iconH, title, desc }) => (
    <>
      <Abs x={icx} y={icy} w={iconW} h={iconH}>
        <img src={img(D, icon)} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </Abs>
      <Text x={icx} y={205} w={285} size={20} font="Unbounded" weight={600} color="#410031">{title}</Text>
      <Text x={icx} y={248} w={270} size={12} weight={500} color="#410031" lineHeight={1.4}>{desc}</Text>
    </>
  );
export const Слайд08: S = {
  render: () => (
    <SlideStage background="#FBFBFB">
      <SlideTitle size={28} w={649.7} lineHeight={1.18}>Единый центр управления<br />вашими маркетплейсами</SlideTitle>
      <JBadge deck={D} />
      <IconCol icx={40} icy={112.5} icon="img_d9fabe6578c8.png" iconW={81.5} iconH={81.5} title="Данные"
        desc="API Wildberries и Ozon + ваши данные: себестоимость, цели по марже, остатки на складах" />
      <IconCol icx={344.1} icy={121} icon="img_2169e0d9b0c4.png" iconW={81.5} iconH={73} title="ИИ"
        desc="Каскад нейросетей анализирует 70 000+ микро-решений в неделю. Каждая утечка → задача с приоритетом и сценарием" />
      <IconCol icx={675.9} icy={124.8} icon="img_dc1cd2880b6f.png" iconW={76.6} iconH={61.5} title="Действия"
        desc="Агенты вносят изменения через официальный API: цена, ставки, ответы, акции, тренды. Без риска блокировок" />

      <Card x={187.0} y={439.6} w={586.1} h={81.5} radius={0.3033} background={GR.callout} />
      <Marker x={213.3} y={464.0} size={33.7} bg="#410031" arrow="#FF8FDA" z={5} />
      <Text x={265} y={470} w={490} size={12} weight={700} color="#410031" lineHeight={1.35} z={5}>
        Цикл замыкается автоматически. Без участия менеджера. Без потери времени.
      </Text>
    </SlideStage>
  ),
};

// ─────────────────────────────────────────────────────────────────────
// Слайд 09 — Агенты работают синхронно (2 панели)
// ─────────────────────────────────────────────────────────────────────
const SyncRow: React.FC<{ cx: number; nx: number; rowIcon: string; iconY: number; nameY: number; actionY: number; name: string; action: string }> =
  ({ cx, nx, rowIcon, iconY, nameY, actionY, name, action }) => (
    <>
      <Abs x={cx} y={iconY} w={32.7} h={32.7}>
        <img src={img(D, rowIcon)} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </Abs>
      <Text x={nx} y={nameY} w={230} size={12} weight={700} color="#15181F">{name}</Text>
      <Text x={nx} y={actionY} w={235} size={8} weight={500} color="#15181F">{action}</Text>
    </>
  );
export const Слайд09: S = {
  render: () => (
    <SlideStage background="#FBFBFB">
      <SlideTitle size={28} w={748.9} lineHeight={1.18}>Один инструмент не решит задачу. Агенты работают синхронно.</SlideTitle>
      <JBadge deck={D} />
      <Text x={18.9} y={165.1} w={527.9} size={12} weight={500} color="#15181F" lineHeight={1.4}>
        Репрайсер сам по себе не остановит OOS. Бидер сам по себе сожжёт бюджет на пустой карточке. Сила — в координации.
      </Text>

      {/* панель 1 — Неликвид */}
      <Card x={18.9} y={230.8} w={414.4} h={290.3} radius={0.0657} background="#FFFFFF" border="1.5px solid #EEDCE8" />
      <Text x={34.9} y={248} w={300} size={16} font="Unbounded" weight={600} color="#15181F">Неликвид</Text>
      <Text x={272.2} y={251.1} w={150} size={8} weight={500} color="#666666" lineHeight={1.3}>Система видит залежавшийся товар</Text>
      <SyncRow cx={32.9} nx={82.4} rowIcon="img_ffca825fb7f8.png" iconY={295.7} nameY={292.1} actionY={320.2} name="Агент рекламы" action="↑ увеличивает бюджет" />
      <SyncRow cx={32.9} nx={82.4} rowIcon="img_ac3cba4e7faf.png" iconY={359.9} nameY={355.9} actionY={383.3} name="Агент ценообразования" action="↓ снижает цену по стратегии «раскачка»" />
      <SyncRow cx={32.9} nx={82.4} rowIcon="img_53d2cd727162.png" iconY={417.3} nameY={419.7} actionY={447.1} name="Агент коммуникации" action="+ кросс-продажи в ответах на отзывы" />
      <Pill x={32.9} y={483.1} w={299.2} h={24.5} background={GR.lime} color="#15181F" size={8} weight={600}>Товар продан. Склад освобождён. Маржа сохранена.</Pill>

      {/* панель 2 — Out-Of-Stock */}
      <Card x={449.3} y={230.8} w={491.8} h={290.3} radius={0.0657} background="#FFFFFF" border="1.5px solid #EEDCE8" />
      <Text x={465.3} y={248} w={310} size={16} font="Unbounded" weight={600} color="#15181F" style={{ whiteSpace: 'nowrap' }}>Риск Out-Of-Stock</Text>
      <Text x={779.9} y={251.1} w={150} size={8} weight={500} color="#666666" lineHeight={1.3}>Система прогнозирует вымывание топа</Text>
      <SyncRow cx={465.3} nx={512.8} rowIcon="img_ffca825fb7f8.png" iconY={295.7} nameY={292.1} actionY={320.2} name="Агент рекламы" action="↑ поднимает цену для замедления продаж" />
      <SyncRow cx={465.3} nx={512.8} rowIcon="img_ac3cba4e7faf.png" iconY={359.9} nameY={355.9} actionY={383.3} name="Агент ценообразования" action="↓ снижает рекламные ставки" />
      <SyncRow cx={465.3} nx={512.8} rowIcon="img_53d2cd727162.png" iconY={417.3} nameY={419.7} actionY={447.1} name="Агент коммуникации" action="+ формирует заявку на поставку" />
      <Pill x={463.3} y={483.1} w={299.2} h={24.5} background={GR.lime} color="#15181F" size={8} weight={600}>Позиция в выдаче удержана. Бюджет не сгорел.</Pill>
    </SlideStage>
  ),
};

// ─────────────────────────────────────────────────────────────────────
// Слайд 10 — Старый подход против нового (две карточки, 5 строк)
// ─────────────────────────────────────────────────────────────────────
const CmpRow: React.FC<{ vx: number; lx: number; y: number; value: string; label: string; valColor: string; labelColor: string }> =
  ({ vx, lx, y, value, label, valColor, labelColor }) => (
    <>
      <Text x={vx} y={y} w={123.6} size={13} font="Unbounded" weight={600} color={valColor} align="right">{value}</Text>
      <Text x={lx} y={y + 3} w={252.2} size={10} weight={600} color={labelColor}>{label}</Text>
    </>
  );
export const Слайд10: S = {
  render: () => (
    <SlideStage background="#FBFBFB">
      <Text x={18.9} y={85.4} w={922.2} size={28} font="Unbounded" weight={600} color="#410031" align="center">Старый подход против нового</Text>
      <JBadge deck={D} x={459.1} />
      <Text x={18.9} y={142.1} w={922.2} size={12} weight={500} color="#15181F" align="center">Что меняется в работе вашей команды и в результатах бизнеса</Text>

      <Card x={61.5} y={202.7} w={413.5} h={300.7} radius={0.0948} background="#FFECB7" />
      <Card x={485.0} y={202.7} w={413.5} h={300.7} radius={0.0865} background="#410031" />

      <Pill x={163.7} y={188.3} w={209.1} h={33.7} background="linear-gradient(90deg,#F6B26B,#EEFF41 70%,#2A1E01)" color="#410031" size={12} weight={500}>Ручное управление</Pill>
      <Pill x={599.2} y={188.3} w={185.0} h={33.7} background="linear-gradient(90deg,#FF8FDA,#FFCFEF)" color="#410031" size={12} weight={600}>С ИИ-агентами</Pill>
      <Abs x={745.7} y={187.3} w={38.5} h={31.8} z={3}>
        <img src={img(D, 'img_6c98a310fd74.png')} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </Abs>

      {/* левая колонка (ручное) */}
      <CmpRow vx={78.4} lx={207.0} y={248.7} value="10%" label="проблем решается вовремя" valColor="#E0631F" labelColor="#3A2E12" />
      <CmpRow vx={78.4} lx={207.0} y={298.8} value="24/7" label="режим тушения пожаров" valColor="#E0631F" labelColor="#3A2E12" />
      <CmpRow vx={78.4} lx={207.0} y={348.9} value="+ФОТ" label="путь к росту — только найм" valColor="#E0631F" labelColor="#3A2E12" />
      <CmpRow vx={78.4} lx={207.0} y={400.8} value="Excel" label="решения «на глаз», без данных" valColor="#E0631F" labelColor="#3A2E12" />
      <CmpRow vx={78.4} lx={207.0} y={449.1} value="Реактив" label="узнаём о проблемах постфактум" valColor="#E0631F" labelColor="#3A2E12" />
      {/* правая колонка (ИИ) */}
      <CmpRow vx={506.2} lx={634.8} y={248.7} value="100%" label="Матрицы под контролем 24/7" valColor="#FF8FDA" labelColor="#F3E0EE" />
      <CmpRow vx={506.2} lx={634.8} y={298.8} value="До" label="проблема решается до ущерба" valColor="#FF8FDA" labelColor="#F3E0EE" />
      <CmpRow vx={506.2} lx={634.8} y={348.9} value="Без +ФОТ" label="рост — без расширения штата" valColor="#FF8FDA" labelColor="#F3E0EE" />
      <CmpRow vx={506.2} lx={634.8} y={400.8} value="Данные" label="решения по триггерам и метрикам" valColor="#FF8FDA" labelColor="#F3E0EE" />
      <CmpRow vx={506.2} lx={634.8} y={449.1} value="Проактив" label="система решает проблему заранее" valColor="#FF8FDA" labelColor="#F3E0EE" />
    </SlideStage>
  ),
};

// ─────────────────────────────────────────────────────────────────────
// Слайд 11 — Что получают клиенты за 90 дней (3 стата + кейс)
// ─────────────────────────────────────────────────────────────────────
const StatCol: React.FC<{ x: number; pillW: number; pillBg: string; pillColor: string; value: string; label: string; desc: string }> =
  ({ x, pillW, pillBg, pillColor, value, label, desc }) => (
    <>
      <Pill x={x + 13.8} y={207.4} w={pillW} h={36.6} background={pillBg} color={pillColor} size={20} weight={700} font="Unbounded">{value}</Pill>
      <Text x={x + 14} y={252} w={278} size={12} weight={600} color="#410031">{label}</Text>
      <Text x={x + 14} y={278} w={278} size={10} weight={500} color="#410031" lineHeight={1.35}>{desc}</Text>
    </>
  );
export const Слайд11: S = {
  render: () => (
    <SlideStage background="#FBFBFB">
      <SlideTitle size={28} w={579.8} lineHeight={1.18}>Что получают<br />клиенты за 90 дней</SlideTitle>
      <JBadge deck={D} />
      <Text x={18.9} y={120.3} w={721.6} size={12} weight={500} color="#999999" lineHeight={1.35}>
        Усреднённые показатели по проектам внедрения. Фактический результат зависит от исходного состояния кабинета и категории.
      </Text>

      <StatCol x={18.9} pillW={115.2} pillBg={GR.lime} pillColor="#1F2A09" value="+18%" label="к выручке за 90 дней" desc="За счёт устранения OOS на топ-SKU и разгона неликвида" />
      <StatCol x={329.1} pillW={121.6} pillBg={GR.lime} pillColor="#1F2A09" value="−32%" label="ДРР в среднем" desc="Агент рекламы прекращает жечь бюджет на неэффективных кампаниях" />
      <StatCol x={639.2} pillW={135.7} pillBg="linear-gradient(90deg,#FF8FDA,#FFCFEF)" pillColor="#410031" value="<1 мин" label="скорость реакции" desc="От обнаружения проблемы до корректирующего действия" />

      {/* кейс-полоса */}
      <Card x={18.9} y={378.2} w={922.2} h={136.6} radius={0.1253} background="linear-gradient(120deg,#FEF2FF,#FFE4F6 45%,#FFF0E8 75%,#FFE4F6)" />
      <Abs x={43.2} y={405.0} w={110.8} h={82.9}>
        <img src={img(D, 'img_64da55a5f8e0.png')} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </Abs>
      <Text x={172} y={408} w={745} size={10} weight={500} color="#410031" lineHeight={1.4} z={2}>
        <b style={{ fontWeight: 700 }}>Типовой кейс внедрения</b>&nbsp; •&nbsp; Бренд в категории «Дом и быт». Оборот 70 млн ₽/мес на WB+OZON. 850 SKU. Команда — 4 человека.
      </Text>
      <Text x={172} y={452} w={745} size={12} weight={700} color="#410031" lineHeight={1.4} z={2}>
        За 90 дней внедрения: рост выручки +22%, сокращение ДРР с 17% до 11%, OOS снизился с 144 до 5 SKU. Команда не выросла.
      </Text>
    </SlideStage>
  ),
};

// ─────────────────────────────────────────────────────────────────────
// Слайд 12 — +230 компаний (логотипная сетка)
// ─────────────────────────────────────────────────────────────────────
export const Слайд12: S = {
  render: () => (
    <SlideStage background="linear-gradient(180deg,#FFFFFF 0%,#FFF0F8 100%)">
      <Text x={18.9} y={30} w={922.2} size={28} font="Unbounded" weight={600} color="#410031" align="center" lineHeight={1.18}>
        <span style={{ color: '#FF6FC9' }}>+230</span> компаний<br />в различных категориях
      </Text>
      <Abs x={185.2} y={120.7} w={589.6} h={396.6}>
        <img src={img(D, 'img_22675a9b1c00.png')} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </Abs>
    </SlideStage>
  ),
};

// ─────────────────────────────────────────────────────────────────────
// Слайд 13 — Новая реальность + CTA-аудит
// ─────────────────────────────────────────────────────────────────────
export const Слайд13: S = {
  render: () => (
    <SlideStage background="#FBFBFB">
      {/* розовая подсветка за 3-й строкой заголовка */}
      <Card x={10.4} y={99.4} w={469.7} h={41.7} radius={0.3268} background="linear-gradient(90deg,#FF8FDA,#FFCFEF)" />
      <Abs x={18.9} y={18.9} w={922.2} z={2}>
        <div style={{ fontFamily: 'Unbounded', fontWeight: 600, fontSize: pt(28), lineHeight: 1.5, letterSpacing: '-0.01em', color: '#410031' }}>
          Новая реальность:<br />алгоритмы делают рутину,<br />люди — стратегию
        </div>
      </Abs>
      <JBadge deck={D} />

      {/* буллеты-капсулы */}
      <Card x={18.9} y={185.1} w={612.7} h={36.2} radius={0.5} background={GR.callout && 'linear-gradient(90deg,#FEF2FF,#FFE4F6 60%,#FFF0E8)'} />
      <Marker x={27.9} y={195.2} size={15.8} bg="#1F2A09" arrow="#D6FE9E" z={2} />
      <Text x={52} y={196.5} w={575} size={12} weight={600} color="#410031" z={2}>Сотни тысяч микро-решений принимает машина в реальном времени</Text>

      <Card x={18.9} y={231.5} w={573.9} h={36.2} radius={0.5} background="linear-gradient(90deg,#FEF2FF,#FFE4F6 60%,#FFF0E8)" />
      <Marker x={27.9} y={241.7} size={15.8} bg="#1F2A09" arrow="#D6FE9E" z={2} />
      <Text x={52} y={242.9} w={535} size={12} weight={600} color="#410031" z={2}>Команда полностью освобождается от Excel и тушения пожаров</Text>

      <Card x={18.9} y={277.9} w={718.9} h={36.2} radius={0.5} background="linear-gradient(90deg,#FEF2FF,#FFE4F6 60%,#FFF0E8)" />
      <Marker x={27.9} y={288.1} size={15.8} bg="#1F2A09" arrow="#D6FE9E" z={2} />
      <Text x={52} y={289.3} w={680} size={12} weight={600} color="#410031" z={2}>Эксперт Дживио находит точки роста — агенты превращают их в выручку и прибыль</Text>

      {/* CTA-карточка */}
      <Card x={115.7} y={358.1} w={728.6} h={158.2} radius={0.1667} background="linear-gradient(120deg,#FBFBFB 0%,#FBFBFB 40%,#FFE4F6 100%)" />
      <Abs x={655.6} y={385.2} w={110.8} h={82.9}>
        <img src={img(D, 'img_64da55a5f8e0.png')} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
      </Abs>
      <Text x={132.0} y={372} w={469.7} size={16} font="Unbounded" weight={700} color="#410031" lineHeight={1.25} z={2}>Запишитесь на бесплатный аудит кабинета</Text>
      <Text x={137.5} y={449.9} w={395.4} size={12} weight={600} color="#410031" lineHeight={1.4} z={2}>Покажем точки утечки выручки и сценарии роста на реальных данных вашего кабинета</Text>
      <Card x={617.2} y={455.8} w={187.6} h={34.0} radius={0.2929} background="#410031" z={2} />
      <Text x={617.2} y={464.5} w={187.6} size={12} weight={600} color="#FFFFFF" align="center" z={3}>Запросить аудит</Text>
    </SlideStage>
  ),
};
