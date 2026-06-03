import type { Meta, StoryObj } from '@storybook/react';
import { FactorGrid } from './FactorGrid';

const meta: Meta<typeof FactorGrid> = {
  title: 'Лейауты/7 · FactorGrid',
  component: FactorGrid,
  argTypes: {
    theme: { control: 'select', options: ['light', 'eggplant', 'pinkPastel'] },
  },
};
export default meta;
type S = StoryObj<typeof FactorGrid>;

export const ФакторыРанжирования: S = {
  args: {
    title: 'Чтобы продавать больше, нужно соответствовать актуальным алгоритмам',
    lead: 'Это лишь часть параметров',
    tags: [
      'Конверсия в корзину',
      'Цена',
      'Кликабельность карточки из каталога',
      'Закрытие возражений в карточке товара',
      'Скорость доставки по региону',
      'Привлекательность контента',
      'Участие в акциях',
      'Отзывы и рейтинг',
      'Процент выкупа',
      'Сезонность спроса',
      'CTR обложки',
      'История продаж',
      'Заполненность атрибутов',
    ],
  },
};
