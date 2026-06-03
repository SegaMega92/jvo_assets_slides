import type { Meta, StoryObj } from '@storybook/react';
import { BarChart } from './BarChart';
import { Stage } from './Stage';
import { colors } from '../tokens';

const meta: Meta<typeof BarChart> = {
  title: 'Компоненты/Графики/BarChart',
  component: BarChart,
  argTypes: {
    orientation: { control: 'inline-radio', options: ['horizontal', 'vertical'] },
  },
  decorators: [(Story) => <Stage width={1200}>{Story()}</Stage>],
};
export default meta;
type S = StoryObj<typeof BarChart>;

export const Горизонтальный: S = {
  args: {
    orientation: 'horizontal',
    data: [
      { label: 'Wildberries', value: 40, display: '40 млн' },
      { label: 'Ozon', value: 28, display: '28 млн' },
      { label: 'Яндекс Маркет', value: 14, display: '14 млн' },
      { label: 'Мегамаркет', value: 6, display: '6 млн' },
    ],
  },
};

export const Вертикальный: S = {
  args: {
    orientation: 'vertical',
    data: [
      { label: '2021', value: 2.8, display: '2,8' },
      { label: '2022', value: 3.6, display: '3,6' },
      { label: '2023', value: 4.5, display: '4,5', color: colors.brand.pink },
      { label: '2024', value: 5.9, display: '5,9', color: colors.brand.pink },
    ],
  },
};

export const ДоПосле: S = {
  args: {
    orientation: 'vertical',
    data: [
      { label: 'до', value: 2.8, display: '2,8 млн', color: colors.bg.softGray },
      { label: 'после', value: 4.5, display: '4,5 млн', color: colors.accent.lime },
    ],
  },
};
