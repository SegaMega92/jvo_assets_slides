import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { DashboardShowcase } from './DashboardShowcase';
import { colors } from '../tokens';

const meta: Meta<typeof DashboardShowcase> = {
  title: 'Лейауты/4 · DashboardShowcase',
  component: DashboardShowcase,
  argTypes: {
    theme: { control: 'select', options: ['light', 'eggplant', 'pinkPastel'] },
    mediaWidth: { control: { type: 'range', min: 30, max: 80, step: 5 } },
  },
};
export default meta;
type S = StoryObj<typeof DashboardShowcase>;

const placeholderMedia = (
  <div style={{
    width: '100%', height: '100%', display: 'flex',
    alignItems: 'center', justifyContent: 'center',
    color: colors.text.muted, fontFamily: 'Manrope',
    fontSize: 32,
  }}>
    [Скриншот дашборда]
  </div>
);

export const Дашборд: S = {
  args: {
    title: 'Дашборд',
    lead: 'Отслеживайте все метрики здоровья бизнеса в едином аналитическом центре',
    media: placeholderMedia,
    features: [
      { heading: 'Сводка', body: 'Подробные данные обо всех показателях' },
      { heading: 'Финансы', body: 'Оценим маржинальность, упущенные заказы' },
      { heading: 'Задачи', body: 'Готовые задачи для увеличения прибыли' },
      { heading: 'Динамика', body: 'Сравнение с прошлым периодом и трендами' },
    ],
  },
};

export const ТолькоМедиа: S = {
  args: {
    title: 'Студия Дживио',
    lead: 'Интерфейс работы с креативами',
    media: placeholderMedia,
  },
};
