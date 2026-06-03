import type { Meta, StoryObj } from '@storybook/react';
import { BonusCard } from './cards';
import { Backdrop, Row } from './_preview';

const meta: Meta<typeof BonusCard> = {
  title: 'Слайдкит/Карточки/BonusCard',
  component: BonusCard,
  decorators: [Backdrop({ bg: '#FFC2EC' })],
  parameters: { docs: { description: { component: 'Карточка-бонус: крупное значение + подпись. Слайд «Бонус при оплате сегодня» (Студия s9).' } } },
  argTypes: { value: { control: 'text' }, caption: { control: 'text' }, theme: { control: { type: 'inline-radio', options: ['dark', 'light'] } }, width: { control: 'number' } },
};
export default meta;
type S = StoryObj<typeof BonusCard>;

export const Playground: S = { args: { value: '5 SEO', caption: 'Карточек в подарок', theme: 'dark' } };
export const Пара: S = {
  render: () => (
    <Row align="center">
      <BonusCard width={420} value="5 SEO" caption="Карточек в подарок" />
      <BonusCard width={420} value="1 месяц" caption="Консультаций в подарок" />
    </Row>
  ),
};
