import type { Meta, StoryObj } from '@storybook/react';
import { ComparisonTable } from './ComparisonTable';
import { Stage } from './Stage';

const meta: Meta<typeof ComparisonTable> = {
  title: 'Компоненты/Таблицы/ComparisonTable',
  component: ComparisonTable,
  decorators: [(Story) => <Stage width={1400}>{Story()}</Stage>],
};
export default meta;
type S = StoryObj<typeof ComparisonTable>;

export const Тарифы: S = {
  args: {
    columns: [
      { name: 'Старт' },
      { name: 'Бизнес', sub: 'рекомендуем', featured: true },
      { name: 'Enterprise' },
    ],
    rows: [
      { label: 'Кабинетов', values: ['1', 'до 5', '∞'] },
      { label: 'Аналитика и алерты', values: [true, true, true] },
      { label: 'AI-агенты', values: [true, true, true] },
      { label: 'Персональный менеджер', values: [false, true, true] },
      { label: 'Выделенная команда', values: [false, false, true] },
      { label: 'SLA поддержки', values: ['24ч', '8ч', '1ч'] },
    ],
  },
};

export const МыПротивРынка: S = {
  args: {
    columns: [
      { name: 'Дживио', featured: true },
      { name: 'Агентство' },
      { name: 'Самостоятельно' },
    ],
    rows: [
      { label: 'Аналитика 24/7', values: [true, false, false] },
      { label: 'AI-рекомендации', values: [true, false, false] },
      { label: 'Прозрачная цена', values: [true, false, true] },
      { label: 'Скорость реакции', values: ['минуты', 'дни', 'часы'] },
    ],
  },
};
