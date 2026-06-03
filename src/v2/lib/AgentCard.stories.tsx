import type { Meta, StoryObj } from '@storybook/react';
import { AgentCard } from './cards';
import { Backdrop, Row } from './_preview';

const meta: Meta<typeof AgentCard> = {
  title: 'Слайдкит/Карточки/AgentCard',
  component: AgentCard,
  decorators: [Backdrop()],
  parameters: { docs: { description: { component: 'Горизонтальная карточка агента/модуля: иконка слева + жирный заголовок + мелкое описание. Сетка агентов на Enterprise s7.' } } },
  argTypes: { icon: { control: 'text' }, iconSrc: { control: 'text' }, title: { control: 'text' }, desc: { control: 'text' }, width: { control: 'number' } },
};
export default meta;
type S = StoryObj<typeof AgentCard>;

export const Playground: S = { args: { icon: '💰', title: 'Агент Ценообразования', desc: 'Рост прибыли и объёма заказов, защита от OOS, выполнение плана по марже, разгон неликвида' } };
export const Список: S = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <AgentCard icon="💰" title="Агент Ценообразования" desc="Рост прибыли, защита от OOS, выполнение плана по марже" />
      <AgentCard icon="📣" title="Агент Рекламы" desc="Управление бюджетом по ДРР/ROAS, без неэффективных трат" />
      <AgentCard icon="💬" title="Агент Коммуникаций" desc="Отзывы 24/7 с Tone-of-Voice, кросс-продажи, закрытие негатива" />
    </div>
  ),
};
