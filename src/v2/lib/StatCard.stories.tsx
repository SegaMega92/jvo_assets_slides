import type { Meta, StoryObj } from '@storybook/react';
import { StatCard } from './cards';
import { Backdrop, Row } from './_preview';

const meta: Meta<typeof StatCard> = {
  title: 'Слайдкит/Карточки/StatCard',
  component: StatCard,
  decorators: [Backdrop()],
  parameters: { docs: { description: { component: 'Стат-карточка: крупное число + подпись на цветной плашке. Рыночные показатели, метрики роста. Встречается на Enterprise s2.' } } },
  argTypes: {
    value: { control: 'text', description: 'Крупное значение' },
    label: { control: 'text', description: 'Подпись' },
    background: { control: 'text', description: 'Фон (hex/градиент)' },
    valueColor: { control: 'color' }, labelColor: { control: 'color' },
    width: { control: 'number' }, height: { control: 'number' },
  },
};
export default meta;
type S = StoryObj<typeof StatCard>;

export const Playground: S = { args: { value: '11,5 трлн ₽', label: 'объём интернет-торговли РФ в 2025' } };
export const Тоны: S = {
  render: () => (
    <Row>
      <StatCard value="+28%" label="рост рынка год к году" />
      <StatCard value="+58–63%" label="рост комиссий селлерам" background="linear-gradient(180deg,#FFE4F6,#FFDBD2)" />
      <StatCard value="70 000+" label="решений в неделю" background="linear-gradient(135deg,#F6B26B,#C7401E)" valueColor="#fff" labelColor="#fff" />
    </Row>
  ),
};
