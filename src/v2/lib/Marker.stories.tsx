import type { Meta, StoryObj } from '@storybook/react';
import { Marker } from './primitives';
import { Backdrop, Row } from './_preview';

const meta: Meta<typeof Marker> = {
  title: 'Слайдкит/Примитивы/Marker',
  component: Marker,
  decorators: [Backdrop()],
  parameters: { docs: { description: { component: 'Круглый маркер со стрелкой — буллет-указатель в списках (ArrowList) и в плашках-выводах. Цвета фона/стрелки настраиваются под тему.' } } },
  argTypes: {
    size: { control: { type: 'range', min: 16, max: 80 }, description: 'Диаметр, px' },
    background: { control: 'color', description: 'Цвет кружка' },
    arrowColor: { control: 'color', description: 'Цвет стрелки' },
    direction: { control: { type: 'inline-radio', options: ['right', 'up', 'down'] }, description: 'Направление' },
  },
};
export default meta;
type S = StoryObj<typeof Marker>;

export const Playground: S = { args: { size: 40, background: '#410031', arrowColor: '#FF8FDA', direction: 'right' } };
export const Варианты: S = {
  render: () => (
    <Row align="center">
      <Marker size={40} background="#410031" arrowColor="#FF8FDA" />
      <Marker size={40} background="#1F2A09" arrowColor="#D6FE9E" />
      <Marker size={40} background="#FF8FDA" arrowColor="#410031" />
      <Marker size={56} background="#410031" arrowColor="#FF8FDA" />
    </Row>
  ),
};
