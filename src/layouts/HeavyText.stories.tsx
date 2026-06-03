import type { Meta, StoryObj } from '@storybook/react';
import { HeavyText } from './HeavyText';

const meta: Meta<typeof HeavyText> = {
  title: 'Лейауты/11 · HeavyText',
  component: HeavyText,
  argTypes: {
    theme: { control: 'select', options: ['light', 'pinkPastel'] },
    columns: { control: 'radio', options: [1, 2, 3] },
  },
};
export default meta;
type S = StoryObj<typeof HeavyText>;

export const Манифест: S = {
  args: {
    title: 'Наша методология',
    lead: 'Что лежит в основе работы Дживио',
    columns: 2,
    blocks: [
      {
        heading: 'Принцип 1: данные первичны',
        body: 'Мы не доверяем интуиции. Каждое решение должно быть подтверждено цифрами из реальных продаж и аналитики маркетплейсов.',
      },
      {
        heading: 'Принцип 2: автоматизация рутины',
        body: 'Человек должен принимать стратегические решения. Анализ метрик, рекалькуляция цен, обновление контента — задача алгоритма.',
      },
      {
        heading: 'Принцип 3: прозрачность',
        body: 'Каждая рекомендация системы объяснима. Мы показываем не только что делать, но и почему именно так.',
      },
      {
        heading: 'Принцип 4: непрерывное обучение',
        body: 'Алгоритмы маркетплейсов меняются. Наши модели переобучаются каждые 7 дней на свежих данных.',
      },
    ],
  },
};
