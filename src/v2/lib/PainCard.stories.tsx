import type { Meta, StoryObj } from '@storybook/react';
import { PainCard } from './cards';
import { Backdrop, Row } from './_preview';

const meta: Meta<typeof PainCard> = {
  title: 'Слайдкит/Карточки/PainCard',
  component: PainCard,
  decorators: [Backdrop()],
  parameters: { docs: { description: { component: 'Карточка-проблема: заголовок процесса, подпись текущего состояния, разделитель и текст-последствие. «Квадранты боли» на Enterprise s3.' } } },
  argTypes: { title: { control: 'text' }, sublabel: { control: 'text' }, danger: { control: 'text' }, width: { control: 'number' } },
};
export default meta;
type S = StoryObj<typeof PainCard>;

export const Playground: S = { args: { title: 'Цена', sublabel: 'Excel + ручной режим', danger: 'Цена выше оптимальной → падают заказы' } };
export const Квадранты: S = {
  render: () => (
    <Row>
      <PainCard width={360} title="Реклама" sublabel="Excel + ручной режим" danger="Бюджет сжигается из-за неэффективного управления" />
      <PainCard width={360} title="Поставки" sublabel="Excel + ручной режим" danger="Не успели поставить → потеря позиции" />
    </Row>
  ),
};
