import type { Meta, StoryObj } from '@storybook/react';
import { Pill } from './primitives';
import { Backdrop, Row } from './_preview';

const meta: Meta<typeof Pill> = {
  title: 'Слайдкит/Примитивы/Pill',
  component: Pill,
  decorators: [Backdrop()],
  parameters: { docs: { description: { component: 'Капсула-таблетка с текстом: статусы, ценники, метки «Специальное предложение», заголовки секций. Полностью скруглённая (border-radius 999).' } } },
  argTypes: {
    background: { control: 'text', description: 'Заливка: hex или градиент' },
    color: { control: 'color', description: 'Цвет текста' },
    fontSize: { control: { type: 'range', min: 12, max: 48 }, description: 'Размер шрифта, px' },
    weight: { control: { type: 'select', options: [400, 500, 600, 700] }, description: 'Насыщенность' },
    font: { control: { type: 'inline-radio', options: ['body', 'display'] }, description: 'Шрифт' },
  },
};
export default meta;
type S = StoryObj<typeof Pill>;

export const Playground: S = { args: { children: 'Специальное предложение до 11.12', background: '#FF8FDA', color: '#410031', fontSize: 24 } };
export const Варианты: S = {
  render: () => (
    <Row>
      <Pill background="linear-gradient(90deg,#D6FE9E,#FFF2CC)" color="#1F2A09">Специальное предложение</Pill>
      <Pill background="#410031" color="#FF8FDA">Пакетные предложения</Pill>
      <Pill background="#FF8FDA" color="#410031">90+ факторов</Pill>
      <Pill background="#FFFFFF" color="#FF6FC9">Что входит:</Pill>
    </Row>
  ),
};
