import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from './ProgressBar';
import { Stage } from './Stage';
import { colors } from '../tokens';

const meta: Meta<typeof ProgressBar> = {
  title: 'Компоненты/Графики/ProgressBar',
  component: ProgressBar,
  decorators: [(Story) => <Stage width={1000}>{Story()}</Stage>],
};
export default meta;
type S = StoryObj<typeof ProgressBar>;

export const Playground: S = {
  args: { label: 'Доля органического трафика', value: 72 },
};

export const Набор: S = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
      <ProgressBar label="Конверсия в корзину" value={64} />
      <ProgressBar label="Процент выкупа" value={88} color={colors.accent.purple} />
      <ProgressBar label="Доля SEO-трафика" value={25} color={colors.accent.limeDark} display="25%" />
      <ProgressBar label="Заполненность карточек" value={100} color={colors.semantic.success} />
    </div>
  ),
};
