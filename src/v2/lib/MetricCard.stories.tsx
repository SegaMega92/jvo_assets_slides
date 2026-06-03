import type { Meta, StoryObj } from '@storybook/react';
import { MetricCard } from './cards';
import { Backdrop, Row } from './_preview';

const meta: Meta<typeof MetricCard> = {
  title: 'Слайдкит/Карточки/MetricCard',
  component: MetricCard,
  decorators: [Backdrop()],
  parameters: { docs: { description: { component: 'Карточка-метрика «до/после» с крупной дельтой. Блоки результатов в кейсах Студии (Выручка, ДДР, Средний чек). Есть вертикальный и горизонтальный варианты.' } } },
  argTypes: {
    title: { control: 'text' }, before: { control: 'text' }, after: { control: 'text' },
    delta: { control: 'text' }, deltaColor: { control: 'color' }, horizontal: { control: 'boolean' },
  },
};
export default meta;
type S = StoryObj<typeof MetricCard>;

export const Playground: S = { args: { title: 'Выручка', before: '2,8 млн ₽', after: '4,5 млн ₽', delta: '+ 60%' } };
export const Варианты: S = {
  render: () => (
    <Row>
      <MetricCard title="Выручка" before="2,8 млн ₽" after="4,5 млн ₽" delta="+ 60%" deltaColor="#3AA655" />
      <MetricCard title="ДДР" before="35%" after="18%" delta="- 17%" deltaColor="#E0631F" />
      <MetricCard title="Средний чек" delta="+ 22%" horizontal />
    </Row>
  ),
};
