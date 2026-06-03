import type { Meta, StoryObj } from '@storybook/react';
import { AttributeTable } from './tables';
import { Backdrop } from './_preview';

const meta: Meta<typeof AttributeTable> = {
  title: 'Слайдкит/Таблицы/AttributeTable',
  component: AttributeTable,
  decorators: [Backdrop({ pad: 60 })],
  parameters: { docs: { description: { component: 'Таблица атрибуции: параметры × (ваша карточка / конкуренты). В ячейках символы ▲/▼ подсвечиваются зелёным/оранжевым. Подсвечен столбец «ваша карточка». КП s6.' } } },
  argTypes: {
    headers: { control: 'object' }, rows: { control: 'object' },
    highlightCol: { control: { type: 'number' } }, width: { control: 'number' },
  },
};
export default meta;
type S = StoryObj<typeof AttributeTable>;

export const Playground: S = {
  args: {
    headers: ['Атрибуция', 'Ваша карточка', 'Конкурент 1', 'Конкурент 2'], highlightCol: 1,
    rows: [
      ['Скорость доставки', '5', '4▼', '7▲'],
      ['Процент покрытия', '10', '11▲', '8▼'],
      ['Количество отзывов', '954', '678▼', '1001▲'],
      ['CR в корзину', '15%', '10%▼', '17%▲'],
      ['Наличие товара', '7/10', '3/7▼', '10/10▲'],
      ['Детальный рейтинг', '4,6', '4,7▲', '4,5▼'],
    ],
  },
};
