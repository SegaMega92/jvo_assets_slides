import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Surface, Pill, Tag, Marker, Check, IconBadge, Title, Body } from './primitives';
import { StatCard, StatCallout, IconFeatureCard, AgentCard, PainCard, NumberedCard, MetricCard, TariffCard } from './cards';
import { ArrowList, CheckList } from './lists';
import { ComparisonTable, PriceList } from './tables';
import { Wordmark, JBadge } from './brand';

/**
 * # Слайдкит JVO — библиотека компонентов
 *
 * Автономные (без абсолютных координат) переиспользуемые блоки, из которых
 * собраны все слайды презентаций (Enterprise, КП Дживио, Студия КП).
 *
 * Категории: **Примитивы** · **Карточки** · **Списки** · **Таблицы** · **Бренд**.
 * Каждый компонент — на своей странице с интерактивными контролами и вариантами.
 */
const meta: Meta = {
  title: 'Слайдкит/Обзор',
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Витрина библиотеки: примитивы, карточки, списки, таблицы, бренд-элементы. Все компоненты автономны и собраны из общих токенов (цвета, шрифты Unbounded/Manrope).' } },
  },
};
export default meta;

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div style={{ marginBottom: 64 }}>
    <Title level="card">{title}</Title>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'flex-start', marginTop: 24 }}>{children}</div>
  </div>
);

export const Витрина: StoryObj = {
  render: () => (
    <div style={{ padding: 80, background: '#F2F3FA', minHeight: '100vh', fontFamily: 'Manrope' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 56 }}>
        <Wordmark size={48} />
        <JBadge />
      </div>
      <Title level="section">Слайдкит — библиотека компонентов</Title>
      <Body size="lead" color="#666">Автономные блоки, из которых собраны все 55 слайдов трёх презентаций.</Body>

      <div style={{ marginTop: 64 }}>
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
          <ComparisonTable width={1100} columns={['Дживио', 'MPStat', 'Маяк']} highlightCol={0}
            rows={[{ label: 'Рекомендации по росту выручки', cells: [true, false, false] }, { label: 'AI-Агент для отзывов', cells: [true, false, false] }, { label: 'Расчёт поставок', cells: [true, true, true] }]} />
          <Surface background="#FFFFFF" border="1px solid #ECE3E9" padding={36} radius={24}><PriceList width={400} rows={[{ label: 'Ценообразование от AI', value: '1 ₽' }, { label: 'Ответы на отзыв', value: '2 ₽' }, { label: 'Инсайты по продукту', value: '100 ₽' }]} /></Surface>
        </Section>
        <Section title="Тарифы">
          <TariffCard width={460} title="«Стандарт»" chips={['1 API', '1 Пользователь']}
            rows={[{ label: 'Подписка на 6 месяцев', value: '1 099 900 ₽' }, { label: 'Внедрение', value: 'вкл' }, { label: 'Тех. поддержка', value: 'вкл' }]}
            total="Итого: 1 099 900 ₽ / 6 мес." />
        </Section>
      </div>
    </div>
  ),
};
