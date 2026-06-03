import type { Meta, StoryObj } from '@storybook/react';
import { Surface, Body } from './primitives';
import { Backdrop, Row } from './_preview';

const meta: Meta<typeof Surface> = {
  title: 'Слайдкит/Примитивы/Surface',
  component: Surface,
  decorators: [Backdrop()],
  parameters: { docs: { description: { component: 'Базовая плашка-поверхность: фон/градиент, скругление, рамка, тень, паддинг. На ней строятся все карточки слайдов (стат-карточки, тарифы, тёмные секции).' } } },
  argTypes: {
    background: { control: 'text', description: 'Заливка: hex или CSS-градиент' },
    radius: { control: { type: 'range', min: 0, max: 80 }, description: 'Радиус скругления, px' },
    padding: { control: { type: 'range', min: 0, max: 80 }, description: 'Внутренний отступ, px' },
    border: { control: 'text', description: 'CSS-рамка' },
    shadow: { control: 'text', description: 'CSS-тень' },
    width: { control: { type: 'number' }, description: 'Ширина, px' },
    height: { control: { type: 'number' }, description: 'Высота, px' },
  },
};
export default meta;
type S = StoryObj<typeof Surface>;

export const Playground: S = {
  args: { background: '#FFFFFF', radius: 28, padding: 48, border: '1px solid #ECE3E9', width: 560, height: 320,
    children: <Body size="lead">Контент плашки</Body> },
};
export const Варианты: S = {
  render: () => (
    <Row>
      <Surface width={300} height={200} padding={36} background="#FFFFFF" border="1px solid #ECE3E9"><Body>Белая + рамка</Body></Surface>
      <Surface width={300} height={200} padding={36} background="linear-gradient(180deg,#D6FE9E,#FFF2CC)"><Body>Лаймовый градиент</Body></Surface>
      <Surface width={300} height={200} padding={36} background="#410031"><Body color="#fff">Тёмная (eggplant)</Body></Surface>
      <Surface width={300} height={200} padding={36} radius={48} background="#FFE4F6"><Body color="#410031">Розовая, r=48</Body></Surface>
    </Row>
  ),
};
