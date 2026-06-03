import type { Meta, StoryObj } from '@storybook/react';
import { DonutChart, ProgressRing } from './DonutChart';
import { Stage } from './Stage';
import { colors } from '../tokens';

const meta: Meta<typeof DonutChart> = {
  title: 'Компоненты/Графики/DonutChart',
  component: DonutChart,
  decorators: [(Story) => <Stage align="center">{Story()}</Stage>],
};
export default meta;
type S = StoryObj<typeof DonutChart>;

export const Сегменты: S = {
  args: {
    segments: [
      { value: 52, color: colors.brand.pink, label: 'Органика' },
      { value: 28, color: colors.accent.purple, label: 'Реклама' },
      { value: 20, color: colors.accent.lime, label: 'Акции' },
    ],
  },
};

export const СЦентром: S = {
  args: {
    legend: true,
    center: undefined,
    segments: [
      { value: 90, color: colors.brand.pink, label: 'Покрытие факторов' },
      { value: 10, color: colors.bg.softGray, label: 'Остаток' },
    ],
  },
};

export const Кольцо: StoryObj<typeof ProgressRing> = {
  render: () => (
    <div style={{ display: 'flex', gap: 64 }}>
      <ProgressRing value={60} label="рост выручки" color={colors.accent.lime} />
      <ProgressRing value={26} label="прирост" />
      <ProgressRing value={90} label="точность" color={colors.accent.purple} />
    </div>
  ),
};
