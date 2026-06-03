import type { Meta, StoryObj } from '@storybook/react';
import { GiftCard } from './GiftCard';
import { Tag } from './Tag';
import { Stage } from './Stage';
import { colors } from '../tokens';

const meta: Meta<typeof GiftCard> = {
  title: 'Компоненты/GiftCard',
  component: GiftCard,
  decorators: [(Story) => <Stage width={480}>{Story()}</Stage>],
};
export default meta;
type S = StoryObj<typeof GiftCard>;

export const Playground: S = {
  args: { value: '5 SEO', label: 'Карточек в подарок', icon: '🎁' },
};

export const Спецпредложение: S = {
  decorators: [(Story) => <Stage align="center">{Story()}</Stage>],
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 32 }}>
      <Tag accent="lime" variant="solid" size="lg">Ограниченное предложение</Tag>
      <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
        <GiftCard value="5 SEO" label="Карточек в подарок" />
        <div style={{ fontSize: 40, opacity: 0.5 }}>или</div>
        <GiftCard value="1 месяц" label="Консультаций в подарок" bg={colors.accent.purpleLight} color={colors.accent.purple} accent={colors.accent.purple} icon="💬" />
      </div>
    </div>
  ),
};
