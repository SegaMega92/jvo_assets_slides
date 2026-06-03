import type { Meta, StoryObj } from '@storybook/react';
import { CheckList } from './CheckList';
import { Stage } from './Stage';

const meta: Meta<typeof CheckList> = {
  title: 'Компоненты/CheckList',
  component: CheckList,
  decorators: [(Story) => <Stage width={620}>{Story()}</Stage>],
};
export default meta;
type S = StoryObj<typeof CheckList>;

export const Playground: S = {
  args: {
    heading: 'Что делает платформа',
    items: [
      '24/7 анализирует кабинет',
      'Формирует задачи с приоритетом',
      'Отслеживает изменения карточек',
      'Считает юнит-экономику',
    ],
  },
};

export const ВходитНеВходит: S = {
  decorators: [(Story) => <Stage>{Story()}</Stage>],
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }}>
      <CheckList
        heading="Что делает платформа"
        items={[
          { text: '24/7 анализ кабинета', ok: true },
          { text: 'AI-рекомендации', ok: true },
          { text: 'Алерты с планом действий', ok: true },
        ]}
      />
      <CheckList
        heading="Что остаётся команде"
        items={[
          { text: 'Рутинный сбор отчётов', ok: false },
          { text: 'Ручной мониторинг цен', ok: false },
          { text: 'Только эффективные действия', ok: true },
        ]}
      />
    </div>
  ),
};
