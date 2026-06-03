import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './primitives';
import { Backdrop, Row } from './_preview';

const meta: Meta<typeof Tag> = {
  title: 'Слайдкит/Примитивы/Tag',
  component: Tag,
  decorators: [Backdrop()],
  parameters: { docs: { description: { component: 'Маленький ярлык-чип для коротких меток: «кейс», «Критично», «3 API», «5 Пользователей». Четыре цветовых тона.' } } },
  argTypes: {
    tone: { control: { type: 'inline-radio', options: ['pink', 'lime', 'critical', 'neutral'] }, description: 'Цветовой тон' },
    fontSize: { control: { type: 'range', min: 12, max: 36 }, description: 'Размер шрифта, px' },
  },
};
export default meta;
type S = StoryObj<typeof Tag>;

export const Playground: S = { args: { children: '3 API', tone: 'pink', fontSize: 20 } };
export const Тоны: S = {
  render: () => (
    <Row>
      <Tag tone="pink">5 Пользователей</Tag>
      <Tag tone="lime">результат</Tag>
      <Tag tone="critical">Критично</Tag>
      <Tag tone="neutral">кейс</Tag>
    </Row>
  ),
};
