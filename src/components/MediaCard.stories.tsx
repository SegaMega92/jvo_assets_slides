import type { Meta, StoryObj } from '@storybook/react';
import { MediaCard } from './MediaCard';
import { Stage } from './Stage';
import { colors } from '../tokens';

const meta: Meta<typeof MediaCard> = {
  title: 'Компоненты/MediaCard',
  component: MediaCard,
  decorators: [(Story) => <Stage width={560}>{Story()}</Stage>],
};
export default meta;
type S = StoryObj<typeof MediaCard>;

const Placeholder = ({ label }: { label: string }) => (
  <div style={{ fontSize: 64, opacity: 0.4 }}>{label}</div>
);

export const Playground: S = {
  args: {
    image: <Placeholder label="🖼️" />,
    heading: 'Отслеживает изменения',
    body: 'Фиксирует каждое изменение в карточке и реакцию рынка',
  },
};

export const Ряд: S = {
  decorators: [(Story) => <Stage>{Story()}</Stage>],
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, alignItems: 'stretch' }}>
      <MediaCard image={<Placeholder label="📈" />} heading="Отслеживает" body="Каждое изменение в карточке и реакцию рынка" />
      <MediaCard image={<Placeholder label="🔔" />} imageBg={colors.brand.pinkLight} heading="Формирует алерты" body="С конкретным планом действий" />
      <MediaCard image={<Placeholder label="💾" />} imageBg={colors.accent.purpleLight} heading="Сохраняет историю" body="Все изменения во всех сущностях" />
    </div>
  ),
};
