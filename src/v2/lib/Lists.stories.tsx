import type { Meta, StoryObj } from '@storybook/react';
import { ArrowList, CheckList, FeatureList, ComparisonRows } from './lists';
import { Surface } from './primitives';
import { Backdrop, Row } from './_preview';

/** Списки: ArrowList, CheckList, FeatureList, ComparisonRows. */
const meta: Meta<typeof ArrowList> = {
  title: 'Слайдкит/Списки/Списки',
  component: ArrowList,
  decorators: [Backdrop()],
  parameters: { docs: { description: { component: 'Четыре типа списков: со стрелками (ArrowList), с галочками (CheckList), «→ пункт» (FeatureList) и строки сравнения «значение + подпись» (ComparisonRows).' } } },
  argTypes: {
    items: { control: 'object' }, markerBg: { control: 'color' }, markerArrow: { control: 'color' },
    textColor: { control: 'color' }, fontSize: { control: { type: 'range', min: 14, max: 40 } },
  },
};
export default meta;
type S = StoryObj<typeof ArrowList>;

export const ArrowList_: S = {
  name: 'ArrowList',
  args: { items: ['100+ факторов ранжирования', 'Выдача персонализирована под пользователя и регион', 'Реклама не гарантирует просмотры, главное — органика'] },
};
export const CheckList_: StoryObj = {
  name: 'CheckList',
  render: () => (
    <Surface background="#410031" padding={48} radius={28} width={680}>
      <CheckList textColor="#FFE4F6" items={['24/7 анализировать факторы выдачи и продаж', 'Изучать вас и конкурентов', 'Выдавать конкретные действия по каждой карточке']} />
    </Surface>
  ),
};
export const FeatureList_: StoryObj = {
  name: 'FeatureList',
  render: () => (
    <Surface background="#FFFFFF" border="1px solid #ECE3E9" padding={44} radius={28} width={620}>
      <FeatureList items={['Анализ метрик магазина: просмотры, заказы, CTR, CR, ДРР', 'Аудит магазина и рекомендации', 'Коммуникация с маркетплейсом', 'Анализ конкурентов: цена, контент, продвижение']} />
    </Surface>
  ),
};
export const ComparisonRows_: StoryObj = {
  name: 'ComparisonRows',
  render: () => (
    <Row>
      <Surface background="#FFECB7" padding={44} radius={28}><ComparisonRows valueColor="#E0631F" rows={[{ value: '10%', label: 'проблем решается вовремя' }, { value: '24/7', label: 'режим тушения пожаров' }, { value: 'Excel', label: 'решения «на глаз»' }]} /></Surface>
      <Surface background="#410031" padding={44} radius={28}><ComparisonRows valueColor="#FF8FDA" labelColor="#F3E0EE" rows={[{ value: '100%', label: 'матрицы под контролем 24/7' }, { value: 'До', label: 'проблема решается до ущерба' }, { value: 'Данные', label: 'решения по триггерам' }]} /></Surface>
    </Row>
  ),
};
