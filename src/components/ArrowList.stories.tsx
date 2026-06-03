import type { Meta, StoryObj } from '@storybook/react';
import { ArrowList } from './ArrowList';
import { Stage } from './Stage';
import { colors } from '../tokens';

const meta: Meta<typeof ArrowList> = {
  title: 'Компоненты/ArrowList',
  component: ArrowList,
  decorators: [(Story) => <Stage width={560}>{Story()}</Stage>],
};
export default meta;
type S = StoryObj<typeof ArrowList>;

export const Playground: S = {
  args: {
    heading: 'Работа со стоками',
    items: [
      'Контроль остатков: FBO, FBS',
      'Распределение по складам',
      'Прогноз поставок под спрос',
      'Контроль оборачиваемости',
    ],
  },
};

export const Колонки: S = {
  decorators: [(Story) => <Stage>{Story()}</Stage>],
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 48 }}>
      <ArrowList
        heading="Аналитика и консультации"
        items={['Анализ показателей кабинета', 'Регулярные консультации', 'Общение с маркетплейсом']}
      />
      <ArrowList
        heading="Экономика магазина"
        markerColor={colors.accent.purple}
        items={['Контроль корректной работы', 'Покрытие юнит-экономики', 'Оптимизация издержек']}
      />
      <ArrowList
        heading="Работа со стоками"
        markerColor={colors.accent.limeDark}
        items={['Контроль остатков: FBO, FBS', 'Распределение по складам', 'Прогноз поставок']}
      />
    </div>
  ),
};
