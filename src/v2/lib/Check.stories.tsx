import type { Meta, StoryObj } from '@storybook/react';
import { Check } from './primitives';
import { Backdrop, Row } from './_preview';

const meta: Meta<typeof Check> = {
  title: 'Слайдкит/Примитивы/Check',
  component: Check,
  decorators: [Backdrop()],
  parameters: { docs: { description: { component: 'Маркер-галочка (скруглённый квадрат с ✓) — для чек-листов (CheckList) и ячеек таблицы сравнения (ComparisonTable).' } } },
  argTypes: {
    size: { control: { type: 'range', min: 16, max: 80 }, description: 'Размер, px' },
    background: { control: 'color', description: 'Цвет фона' },
    mark: { control: 'color', description: 'Цвет галочки' },
  },
};
export default meta;
type S = StoryObj<typeof Check>;

export const Playground: S = { args: { size: 40, background: '#1F2A09', mark: '#D8F995' } };
export const Варианты: S = {
  render: () => (
    <Row align="center">
      <Check size={40} background="#1F2A09" mark="#D8F995" />
      <Check size={40} background="#D8F995" mark="#1F2A09" />
      <Check size={40} background="#FF8FDA" mark="#410031" />
    </Row>
  ),
};
