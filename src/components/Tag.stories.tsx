import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';
import { Stage } from './Stage';

const meta: Meta<typeof Tag> = {
  title: 'Компоненты/Tag',
  component: Tag,
  argTypes: {
    accent: { control: 'select', options: ['pink', 'lime', 'purple', 'eggplant', 'neutral'] },
    variant: { control: 'inline-radio', options: ['solid', 'soft', 'outline'] },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
    shape: { control: 'inline-radio', options: ['pill', 'rounded'] },
    children: { control: 'text' },
  },
  decorators: [(Story) => <Stage align="center">{Story()}</Stage>],
};
export default meta;
type S = StoryObj<typeof Tag>;

export const Playground: S = {
  args: { children: 'Прирост 26%', accent: 'pink', variant: 'solid', size: 'md', shape: 'pill' },
};

export const Варианты: S = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, alignItems: 'center' }}>
      <Tag accent="pink" variant="solid">Прирост 26%</Tag>
      <Tag accent="pink" variant="soft">Решаем ключевые проблемы</Tag>
      <Tag accent="purple" variant="outline">Делегируйте управление</Tag>
      <Tag accent="lime" variant="solid">БОНУС</Tag>
      <Tag accent="eggplant" variant="soft" shape="rounded">кейс</Tag>
      <Tag accent="neutral" variant="soft">150+ ниш</Tag>
    </div>
  ),
};

export const Размеры: S = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      <Tag size="sm" accent="pink">Small</Tag>
      <Tag size="md" accent="pink">Medium</Tag>
      <Tag size="lg" accent="pink">Large</Tag>
    </div>
  ),
};

export const НаТёмном: S = {
  decorators: [(Story) => <Stage bg="dark" align="center">{Story()}</Stage>],
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      <Tag accent="lime" variant="solid">Специальное предложение</Tag>
      <Tag accent="pink" variant="solid">до 30.02</Tag>
      <Tag accent="lime" variant="outline">ТОП-10</Tag>
    </div>
  ),
};
