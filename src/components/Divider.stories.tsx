import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';
import { Stage } from './Stage';

const meta: Meta<typeof Divider> = {
  title: 'Компоненты/Divider',
  component: Divider,
  argTypes: { align: { control: 'inline-radio', options: ['start', 'center'] } },
  decorators: [(Story) => <Stage width={1100}>{Story()}</Stage>],
};
export default meta;
type S = StoryObj<typeof Divider>;

export const Набор: S = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 56 }}>
      <Divider />
      <Divider label="Что входит:" align="start" />
      <Divider label="Делегируйте управление" align="center" />
    </div>
  ),
};
