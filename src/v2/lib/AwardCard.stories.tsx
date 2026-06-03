import type { Meta, StoryObj } from '@storybook/react';
import { AwardCard } from './cards';
import { Backdrop } from './_preview';

const meta: Meta<typeof AwardCard> = {
  title: 'Слайдкит/Карточки/AwardCard',
  component: AwardCard,
  decorators: [Backdrop()],
  parameters: { docs: { description: { component: 'Карточка награды/достижения: иконка + заголовок со стрелкой ↗ + мелкая подпись. Список регалий на КП s2.' } } },
  argTypes: { icon: { control: 'text' }, iconSrc: { control: 'text' }, title: { control: 'text' }, subtitle: { control: 'text' }, width: { control: 'number' } },
};
export default meta;
type S = StoryObj<typeof AwardCard>;

export const Playground: S = { args: { icon: '🏆', title: 'Победитель премии «Большой Оборот-2025»', subtitle: 'в сфере «Продвижение на маркетплейсах»' } };
export const Список: S = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <AwardCard icon="🏆" title="Победитель премии STARTECH AWARDS 2025" subtitle="в номинации «Лучшая технология в e-commerce и платежах»" />
      <AwardCard icon="🤖" title="Дживио Агент на первой строчке" subtitle="в карте российского ИИ от издания «Инк.»" />
    </div>
  ),
};
