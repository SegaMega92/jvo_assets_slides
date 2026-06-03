import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Surface, Pill, Tag } from './primitives';
import { StatCard, StatCallout, MetricCard, IconFeatureCard, AgentCard, PainCard, NumberedCard, AwardCard, BonusCard, TariffCard } from './cards';
import { ArrowList, CheckList } from './lists';
import { ComparisonTable, AttributeTable, PriceList } from './tables';
import { Backdrop, Row } from './_preview';

/** QA / стресс-тесты: граничные входы для проверки устойчивости компонентов. */
const meta: Meta = {
  title: 'Слайдкит/QA-стресс',
  parameters: { layout: 'fullscreen', docs: { description: { component: 'Корнер-кейсы: длинный/пустой текст, экстремальные значения, переполнение, много элементов. Каждый блок подписан рамкой-карточкой — если контент выходит за её пределы, состояние сломано.' } } },
};
export default meta;

const LONG = 'Очень длинная подпись без переносов слов котораяпроверяетповедениекомпонентаприпереполнениииотсутствиипробелов и затем продолжается ещё несколькими словами для надёжности';

const Box: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <div style={{ outline: '2px dashed #C9B7C5', outlineOffset: 4, position: 'relative', margin: 28 }}>
    <span style={{ position: 'absolute', top: -34, left: 0, fontFamily: 'Manrope', fontSize: 18, color: '#9A8FA6' }}>{label}</span>
    {children}
  </div>
);

export const Карточки_длинныйТекст: StoryObj = {
  render: () => (
    <div style={{ padding: 100, background: '#F2F3FA', display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'flex-start', fontFamily: 'Manrope' }}>
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
  ),
};

export const Пилюли_ярлыки: StoryObj = {
  render: () => (
    <div style={{ padding: 100, background: '#F2F3FA', display: 'flex', flexWrap: 'wrap', gap: 40, alignItems: 'flex-start', fontFamily: 'Manrope' }}>
      <Box label="Pill / очень длинный текст"><div style={{ width: 500 }}><Pill background="#FF8FDA" color="#410031">Очень длинная надпись в пилюле, которая может не поместиться в одну строку</Pill></div></Box>
      <Box label="Tag / длинный"><Tag tone="critical">Очень длинная критическая метка</Tag></Box>
      <Box label="StatCallout / длинные"><StatCallout width={460} value="−99 999%" label={LONG} desc={LONG} /></Box>
    </div>
  ),
};

export const Таблицы_крайние: StoryObj = {
  render: () => (
    <div style={{ padding: 80, background: '#F2F3FA', display: 'flex', flexDirection: 'column', gap: 60, fontFamily: 'Manrope' }}>
      <Box label="ComparisonTable / 6 колонок + длинные критерии">
        <ComparisonTable width={1700} columns={['Дживио', 'MPStat', 'Eggheads', 'Маяк', 'SellerX', 'Прочие']} highlightCol={0}
          rows={[
            { label: 'Очень длинный критерий который проверяет перенос текста в ячейке параметра и не должен ломать таблицу', cells: [true, false, true, false, true, false] },
            { label: 'Короткий', cells: [true, true, true, true, true, true] },
          ]} />
      </Box>
      <Box label="AttributeTable / длинные значения">
        <AttributeTable width={1340} headers={['Атрибуция', 'Ваша карточка', 'Конкурент 1', 'Конкурент 2']} highlightCol={1}
          rows={[['Очень длинное название атрибуции в строку', '1 000 000', '999 999▼', '1 000 001▲']]} />
      </Box>
      <Box label="PriceList / длинные лейблы">
        <Surface background="#fff" border="1px solid #ECE3E9" radius={24} padding={36} width={700}>
          <PriceList rows={[{ label: 'Очень длинное название услуги которое занимает две строки в прайс-листе', value: '100 000 ₽' }, { label: 'Коротко', value: '1 ₽' }]} />
        </Surface>
      </Box>
    </div>
  ),
};

export const Списки_пустыеИДлинные: StoryObj = {
  render: () => (
    <div style={{ padding: 80, background: '#F2F3FA', display: 'flex', gap: 60, flexWrap: 'wrap', fontFamily: 'Manrope' }}>
      <Box label="ArrowList / длинные пункты"><Surface background="#fff" border="1px solid #ECE3E9" radius={24} padding={36}><ArrowList width={500} items={[LONG, 'Короткий пункт', LONG]} /></Surface></Box>
      <Box label="CheckList / тёмный фон"><Surface background="#410031" radius={24} padding={36}><CheckList textColor="#FFE4F6" width={500} items={[LONG, 'Ок']} /></Surface></Box>
      <Box label="TariffCard / много строк + длинные"><TariffCard width={520} title="«Премиум+»" chips={['10 API', '50 Пользователей', 'Безлимит']} rows={Array.from({ length: 9 }, (_, i) => ({ label: i === 0 ? 'Подписка на 24 месяца' : `Очень длинный пункт тарифа номер ${i}`, value: i === 0 ? '9 999 999 ₽' : 'вкл' }))} total="Итого: 9 999 999 ₽ / 24 мес." perDay="Всего 13 698 ₽ / день" bonus="100% на баланс Агента в виде бонусов навсегда" /></Box>
    </div>
  ),
};
