import type { Meta, StoryObj } from '@storybook/react';
import { ComparisonTable } from './tables';
import { Backdrop } from './_preview';

const meta: Meta<typeof ComparisonTable> = {
  title: 'Слайдкит/Таблицы/ComparisonTable',
  component: ComparisonTable,
  decorators: [Backdrop({ pad: 60 })],
  parameters: { docs: { description: { component: 'Таблица сравнения с конкурентами: критерии × продукты, ячейки ✓ / —, подсвеченный столбец «наш продукт». КП s24.' } } },
  argTypes: {
    paramHeader: { control: 'text' }, columns: { control: 'object' }, rows: { control: 'object' },
    highlightCol: { control: { type: 'number' }, description: 'Индекс выделенного столбца' }, width: { control: 'number' },
  },
};
export default meta;
type S = StoryObj<typeof ComparisonTable>;

export const Playground: S = {
  args: {
    paramHeader: 'Параметры', columns: ['Дживио', 'MPStat', 'Eggheads', 'Маяк'], highlightCol: 0,
    rows: [
      { label: 'Нацелен на подбор нового товара и прибыльных ниш', cells: [false, true, true, true] },
      { label: 'Рекомендации по росту выручки на основе 100+ критериев', cells: [true, false, false, false] },
      { label: 'Подсвечивает проблемы в карточке и даёт решения', cells: [true, false, false, false] },
      { label: 'Автоматизирует расчёт поставок', cells: [true, true, true, true] },
      { label: 'AI-Агент: автономная работа с отзывами', cells: [true, false, false, false] },
    ],
  },
};
