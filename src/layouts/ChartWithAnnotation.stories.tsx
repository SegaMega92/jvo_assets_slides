import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ChartWithAnnotation } from './ChartWithAnnotation';
import { colors, type } from '../tokens';

const meta: Meta<typeof ChartWithAnnotation> = {
  title: 'Лейауты/10 · ChartWithAnnotation',
  component: ChartWithAnnotation,
  argTypes: {
    theme: { control: 'select', options: ['light', 'pinkPastel'] },
  },
};
export default meta;
type S = StoryObj<typeof ChartWithAnnotation>;

export const АлгоритмМП: S = {
  args: {
    title: 'Как работает алгоритм маркетплейса',
    lead: 'Алгоритм сравнивает вашу карточку с конкурентами по каждой метрике',
    chart: (
      <div style={{ ...type.body, color: colors.text.muted }}>
        [Диаграмма / таблица сравнения метрик]
      </div>
    ),
    annotation: '90+ факторов ранжирования',
  },
};
