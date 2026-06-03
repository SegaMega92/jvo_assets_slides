import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { SlideStage } from '../SlideStage';
import { asset } from '../assets';
import { colors, fonts } from '../../tokens';
import { Title, Body, Pill, Tag, Surface, IconBadge } from '../lib/primitives';
import { AgentCard } from '../lib/cards';
import { CheckList } from '../lib/lists';
import { Wordmark, JBadge, LogoBlock } from '../lib/brand';

/**
 * One Pager ДЖИВИО — презентация из 4 слайдов, собранная из библиотеки «Слайдкит».
 * Источник контента: /Users/sergey/Downloads/One Pager.md
 * Слайды: 1) Титул  2) Проблема → Решение  3) Истории успеха  4) Состав платформы.
 */

const F = fonts;
const EGGPLANT = colors.brand.eggplant; // #410031
const PINK = colors.brand.pink;
const LIME = 'linear-gradient(90deg,#D6FE9E,#FFF2CC)';

/** Логотип клиента-картинка (служится из /assets/clients). */
const clientLogo = (name: string) => asset(`assets/clients/${name}.png`);
const TRUST_LOGOS = [
  'Рив Гош', 'Вкуссвил', 'Эксмо', 'Ортека', 'Grass', 'Mixit',
  'Splat', 'Polaris', 'Likato', 'Luxvisage', 'Leomax', 'Май',
].map(clientLogo);

/** Полноэкранный контейнер слайда (истинные px холста 1920×1080). */
const Frame: React.FC<{ children: React.ReactNode; pad?: number; badge?: 'pink' | 'dark' | 'none' }> = ({
  children, pad = 96, badge = 'pink',
}) => (
  <div style={{ position: 'absolute', inset: 0, padding: pad, boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>
    {badge !== 'none' && (
      <div style={{ position: 'absolute', top: 56, right: 56 }}><JBadge size={84} variant={badge} /></div>
    )}
    {children}
  </div>
);

/** Заголовок секции с короткой подписью-чипом. */
const SectionHead: React.FC<{ tag: string; title: React.ReactNode; color?: string }> = ({ tag, title, color = EGGPLANT }) => (
  <div style={{ marginBottom: 56 }}>
    <Tag tone="pink">{tag}</Tag>
    <div style={{ marginTop: 16 }}><Title level="title" color={color}>{title}</Title></div>
  </div>
);

const meta: Meta = {
  title: 'Презентации/One Pager',
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'One Pager ДЖИВИО — короткая презентация из 4 слайдов (Титул · Проблема и решение · Истории успеха · Состав платформы), собранная из библиотеки «Слайдкит». Источник контента: One Pager.md.' } },
  },
};
export default meta;
type S = StoryObj;

// ─────────────────────────────────────────────────────────── Слайд 1 — Титул
export const Слайд1Титул: S = {
  name: '1 — Титул',
  render: () => (
    <SlideStage background={`radial-gradient(120% 120% at 12% 8%, #5A0044 0%, ${EGGPLANT} 55%, #2C0021 100%)`}>
      <Frame badge="none">
        {/* Шапка: вордмарк + бейдж */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Wordmark theme="light" size={46} />
          <JBadge size={84} variant="pink" />
        </div>

        {/* Центральный блок */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: 1480 }}>
          {/* Близость: надзаголовок-пилюля вплотную к заголовку (24), абзац отделён сильнее (48) */}
          <Pill background={PINK} color={EGGPLANT} fontSize={26} weight={700}>AI-платформа для маркетплейсов</Pill>
          <div style={{ marginTop: 24 }}>
            <div style={{ fontFamily: F.display, fontWeight: 600, fontSize: 92, lineHeight: 1.08, letterSpacing: '-0.01em', color: '#FFFFFF' }}>
              Управление продажами<br />на маркетплейсах <span style={{ color: PINK, whiteSpace: 'nowrap' }}>с&nbsp;AI-агентами</span>
            </div>
          </div>
          <div style={{ marginTop: 48, maxWidth: 1280, fontFamily: F.body, fontWeight: 600, fontSize: 36, lineHeight: 1.4, color: '#FFD9F1' }}>
            ДЖИВИО помогает продавцам увеличивать продажи, сокращать издержки и&nbsp;растить маржинальность.
          </div>
          <div style={{ marginTop: 16, maxWidth: 1260, fontFamily: F.body, fontWeight: 500, fontSize: 27, lineHeight: 1.5, color: '#E7C7DD' }}>
            Платформа ежедневно анализирует данные по всем подключённым товарам, выявляет проблемы и точки роста,
            превращает их в конкретные задачи и автоматически выполняет с помощью AI-агентов.
          </div>
        </div>

        {/* Доверие + лента логотипов. На плотном hero — один ряд (8 шт, лимит ряда), чтобы не переполнять экран. */}
        <LogoBlock theme="dark" title="+250 компаний" caption="топ-уровня нам доверяют" logos={TRUST_LOGOS.slice(0, 8)} asImages width={1728} tileHeight={92} />
      </Frame>
    </SlideStage>
  ),
};

// ─────────────────────────────────────────────────── Слайд 2 — Проблема/Решение
export const Слайд2ПроблемаРешение: S = {
  name: '2 — Проблема и решение',
  render: () => (
    <SlideStage background="#FBFBFB">
      <Frame badge="pink">
        <SectionHead tag="Проблема и решение" title={<>Алгоритмы маркетплейсов — за&nbsp;пределами ручного управления</>} />

        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'stretch' }}>
          {/* Проблема */}
          <Surface background="linear-gradient(160deg,#FFFFFF,#FFF1FA)" border="1px solid #F2DCEC" radius={32} padding={56}
            style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
              <IconBadge glyph="⚠" background="#FF5853" glyphColor="#FFFFFF" size={84} />
              <div style={{ fontFamily: F.display, fontWeight: 600, fontSize: 38, color: EGGPLANT }}>Проблема</div>
            </div>
            <div style={{ marginTop: 32, fontFamily: F.body, fontWeight: 700, fontSize: 30, lineHeight: 1.35, color: EGGPLANT }}>
              Объём действий превышает человеческие возможности.
            </div>
            <div style={{ marginTop: 24, fontFamily: F.body, fontWeight: 500, fontSize: 26, lineHeight: 1.45, color: '#5A3A50' }}>
              Бизнес с&nbsp;500&nbsp;SKU, управляя лишь 20&nbsp;переменными на&nbsp;2&nbsp;площадках, должен принимать
            </div>
            {/* Близость + выравнивание: число и многострочная подпись — по вертикальному центру */}
            <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 16 }}>
              <span style={{ fontFamily: F.display, fontWeight: 600, fontSize: 76, color: '#FF5853', lineHeight: 1, whiteSpace: 'nowrap' }}>70&nbsp;000</span>
              <span style={{ fontFamily: F.body, fontWeight: 600, fontSize: 26, lineHeight: 1.25, color: EGGPLANT }}>решений<br />в неделю</span>
            </div>
            <div style={{ marginTop: 'auto', paddingTop: 32, fontFamily: F.body, fontWeight: 600, fontSize: 26, lineHeight: 1.4, color: EGGPLANT }}>
              Физически невозможно — бизнес делает 5–10% работы и&nbsp;теряет деньги на&nbsp;остальных&nbsp;90%.
            </div>
          </Surface>

          {/* Решение */}
          <Surface background={`linear-gradient(160deg, ${EGGPLANT}, #2C0021)`} radius={32} padding={56}
            style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
              <IconBadge glyph="✦" background={PINK} glyphColor={EGGPLANT} size={84} />
              <div style={{ fontFamily: F.display, fontWeight: 600, fontSize: 38, color: '#FFFFFF' }}>Решение</div>
            </div>
            <div style={{ marginTop: 32, fontFamily: F.body, fontWeight: 700, fontSize: 30, lineHeight: 1.35, color: '#FFFFFF' }}>
              ДЖИВИО объединяет аналитику, задачи и&nbsp;AI-агентов в&nbsp;одну систему управления.
            </div>
            <div style={{ marginTop: 24, fontFamily: F.body, fontWeight: 500, fontSize: 25, lineHeight: 1.45, color: '#F2D9EC' }}>
              Платформа 24/7 анализирует каждый товар и&nbsp;автоматически находит точки потерь и&nbsp;роста:
            </div>
            <div style={{ marginTop: 16 }}>
              <CheckList
                fontSize={24} gap={16} width={760}
                checkBg={PINK} checkMark={EGGPLANT} textColor="#FFE4F6"
                items={[
                  'Снижение продаж и просадку маржи',
                  'Неэффективную рекламу и риск out-of-stock',
                  'Ошибки в ценах и неликвидные остатки',
                ]}
              />
            </div>
            <div style={{ marginTop: 'auto', paddingTop: 32, fontFamily: F.body, fontWeight: 600, fontSize: 25, lineHeight: 1.4, color: '#FFD9F1' }}>
              Отклонения превращаются в&nbsp;готовые задачи с&nbsp;приоритетом и&nbsp;выполняются Агентами.
            </div>
          </Surface>
        </div>
      </Frame>
    </SlideStage>
  ),
};

// ─────────────────────────────────────────────────── Слайд 3 — Истории успеха
interface CaseData { client: string; period?: string; metrics: { value: string; label: string }[]; }
const CASES: CaseData[] = [
  { client: 'Agroimpex', period: '30 дней', metrics: [
    { value: '+34 млн ₽', label: 'выручки' },
    { value: '+5%', label: 'маржинальность' },
  ] },
  { client: 'Polaris', period: '30 дней', metrics: [
    { value: '+3,4 млн ₽', label: 'к заказам группы SKU' },
    { value: '+2,2 млн ₽', label: 'к продажам группы SKU' },
  ] },
  { client: 'Defender', metrics: [
    { value: '82 000+', label: 'отзывов автоматизировано' },
    { value: '1000+', label: 'вопросов в день' },
    { value: '−3 чел.', label: 'SLA команды' },
  ] },
  { client: 'Likato Professional', period: '30 дней', metrics: [
    { value: '+10,3 млн ₽', label: 'по 30 SKU' },
    { value: '+22%', label: 'рост количества заказов' },
  ] },
];

const CaseCard: React.FC<{ data: CaseData }> = ({ data }) => (
  <Surface background="#FFFFFF" border="1px solid #ECE3E9" radius={28} padding={32}
    style={{ display: 'flex', flexDirection: 'column' }}>
    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16 }}>
      <span style={{ fontFamily: F.display, fontWeight: 600, fontSize: 28, color: EGGPLANT, lineHeight: 1.15, wordBreak: 'normal', overflowWrap: 'normal' }}>{data.client}</span>
      {data.period && <div style={{ flex: '0 0 auto' }}><Tag tone="lime" fontSize={17}>{data.period}</Tag></div>}
    </div>
    <div style={{ borderTop: '1px solid #F0E6EE', margin: '24px 0 8px' }} />
    {/* Метрики: число — крупный акцент (правило 14), подпись вплотную под ним (правило близости) */}
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 24 }}>
      {data.metrics.map((m, i) => (
        <div key={i}>
          <div style={{ fontFamily: F.display, fontWeight: 600, fontSize: 44, color: PINK, lineHeight: 1, whiteSpace: 'nowrap' }}>{m.value}</div>
          <div style={{ fontFamily: F.body, fontWeight: 500, fontSize: 21, color: colors.text.primaryAlt, lineHeight: 1.3, marginTop: 8, wordBreak: 'normal', overflowWrap: 'break-word' }}>{m.label}</div>
        </div>
      ))}
    </div>
  </Surface>
);

export const Слайд3ИсторииУспеха: S = {
  name: '3 — Истории успеха',
  render: () => (
    <SlideStage background="#FBFBFB">
      <Frame badge="pink">
        <SectionHead tag="Истории успеха" title={<>Результаты клиентов за&nbsp;первые недели</>} />

        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32, alignItems: 'stretch' }}>
          {CASES.map((c) => <CaseCard key={c.client} data={c} />)}
        </div>

        <div style={{ marginTop: 48 }}>
          <LogoBlock title="+250 компаний" caption="топ-уровня уже доверяют ДЖИВИО" logos={TRUST_LOGOS} asImages width={1728} />
        </div>
      </Frame>
    </SlideStage>
  ),
};

// ─────────────────────────────────────────────── Слайд 4 — Состав платформы
interface AgentData { icon: string; title: string; desc: string; }
const AGENTS: AgentData[] = [
  { icon: '📊', title: 'Мониторинг и аналитика', desc: 'Показывает картину утечек и точек роста, формирует задачи с приоритетом и сценарии решения.' },
  { icon: '🏷️', title: 'Агент ценообразования', desc: 'Управляет ценами с учётом маржи, конкурентов и остатков. Контролирует РРЦ, защищает маржу.' },
  { icon: '📈', title: 'Агент рекламы', desc: 'Управляет ставками, кампаниями и эффективностью рекламы как инструментом роста прибыли.' },
  { icon: '💬', title: 'Агент коммуникаций', desc: 'Автоматизирует ответы на отзывы по базе знаний и tone of voice, отрабатывает негатив.' },
  { icon: '📦', title: 'Агент управления поставками', desc: 'Контролирует остатки, видит риск нехватки и планирует подсортировку по регионам.' },
  { icon: '🔍', title: 'Агент SEO', desc: 'Улучшает SEO-оптимизацию карточек и растит органический трафик без вливаний в рекламу.' },
  { icon: '🤖', title: 'ДЖИВИО Copilot', desc: 'Разрабатывает персональные стратегии продвижения каждого SKU и связки из разных Агентов.' },
];

export const Слайд4СоставПлатформы: S = {
  name: '4 — Состав платформы',
  render: () => (
    <SlideStage background="#FBFBFB">
      <Frame badge="pink">
        <SectionHead tag="Платформа" title={<>Из чего состоит платформа ДЖИВИО</>} />

        {/* 3 колонки: 7 агентов + CTA (на 2 колонки) = 3 ряда — помещается в один экран */}
        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, alignContent: 'start' }}>
          {AGENTS.map((a) => (
            <Surface key={a.title} background="#FFFFFF" border="1px solid #ECE3E9" radius={24} padding={24}
              style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
              <IconBadge glyph={a.icon} background="#FFE4F6" size={68} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: F.display, fontWeight: 600, fontSize: 23, color: EGGPLANT, lineHeight: 1.2 }}>{a.title}</div>
                <div style={{ fontFamily: F.body, fontWeight: 500, fontSize: 19, color: '#5A3A50', marginTop: 8, lineHeight: 1.35 }}>{a.desc}</div>
              </div>
            </Surface>
          ))}

          {/* CTA-карточка — занимает оставшиеся 2 колонки последнего ряда */}
          <Surface background={`linear-gradient(135deg, ${EGGPLANT}, #66004D)`} radius={24} padding={24}
            style={{ gridColumn: 'span 2', display: 'flex', alignItems: 'center', gap: 32 }}>
            <div style={{ flex: 1 }}>
              <Wordmark theme="light" size={38} />
              <div style={{ fontFamily: F.body, fontWeight: 500, fontSize: 21, color: '#FFD9F1', marginTop: 8 }}>
                Один центр управления продажами на маркетплейсах.
              </div>
            </div>
            <a style={{ fontFamily: F.display, fontWeight: 600, fontSize: 30, color: PINK, textDecoration: 'none', whiteSpace: 'nowrap' }} href="https://www.jvo.ru">www.jvo.ru →</a>
          </Surface>
        </div>
      </Frame>
    </SlideStage>
  ),
};
