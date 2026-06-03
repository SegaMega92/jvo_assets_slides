import type { Meta, StoryObj } from '@storybook/react';
import { TariffCard } from './TariffCard';
import { Tag } from './Tag';
import { Stage } from './Stage';
import { colors } from '../tokens';

const meta: Meta<typeof TariffCard> = {
  title: 'Компоненты/Таблицы/TariffCard',
  component: TariffCard,
  decorators: [(Story) => <Stage width={520}>{Story()}</Stage>],
};
export default meta;
type S = StoryObj<typeof TariffCard>;

export const Playground: S = {
  args: {
    name: 'Старт',
    price: '19 900',
    period: '₽ / мес',
    caption: 'Для одного кабинета',
    rows: [
      { label: 'Кабинетов', value: '1' },
      { label: 'Аналитика и алерты', value: '✓' },
      { label: 'AI-агенты', value: '✓' },
      { label: 'Персональный менеджер', value: '—' },
    ],
  },
};

export const ТриТарифа: S = {
  decorators: [(Story) => <Stage>{Story()}</Stage>],
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, alignItems: 'stretch' }}>
      <TariffCard
        name="Старт"
        price="19 900"
        period="₽ / мес"
        caption="Для одного кабинета"
        rows={[
          { label: 'Кабинетов', value: '1' },
          { label: 'Аналитика и алерты', value: '✓' },
          { label: 'AI-агенты', value: '✓' },
          { label: 'Менеджер', value: '—' },
        ]}
      />
      <TariffCard
        featured
        name="Бизнес"
        price="49 900"
        period="₽ / мес"
        caption="Для растущего бренда"
        rows={[
          { label: 'Кабинетов', value: 'до 5' },
          { label: 'Аналитика и алерты', value: '✓' },
          { label: 'AI-агенты', value: '✓' },
          { label: 'Менеджер', value: '✓' },
        ]}
        footer={<Tag accent="lime" variant="solid" size="sm">Выбор большинства</Tag>}
      />
      <TariffCard
        name="Enterprise"
        price="по запросу"
        caption="Для крупных продавцов"
        accent={colors.accent.purple}
        rows={[
          { label: 'Кабинетов', value: '∞' },
          { label: 'Аналитика и алерты', value: '✓' },
          { label: 'AI-агенты', value: '✓' },
          { label: 'Выделенная команда', value: '✓' },
        ]}
      />
    </div>
  ),
};
