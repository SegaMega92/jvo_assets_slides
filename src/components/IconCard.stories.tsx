import type { Meta, StoryObj } from '@storybook/react';
import { IconCard } from './IconCard';
import { Stage } from './Stage';
import { colors } from '../tokens';

const meta: Meta<typeof IconCard> = {
  title: 'Компоненты/IconCard',
  component: IconCard,
  decorators: [(Story) => <Stage width={560}>{Story()}</Stage>],
};
export default meta;
type S = StoryObj<typeof IconCard>;

export const Playground: S = {
  args: {
    icon: '🔍',
    heading: 'Находит',
    body: 'Система видит утечки выручки и точки роста, которые упускают конкуренты',
  },
};

export const Ряд: S = {
  decorators: [(Story) => <Stage>{Story()}</Stage>],
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
      <IconCard icon="🔍" heading="Находит" body="Видит утечки выручки и точки роста" />
      <IconCard icon="🗂️" heading="Превращает в задачи" body="Каждая утечка становится задачей с дедлайном" bg={colors.brand.pinkLight} />
      <IconCard icon="⚙️" heading="Выполняет" body="AI-агенты работают через API WB и Ozon" bg={colors.accent.purpleLight} />
    </div>
  ),
};
