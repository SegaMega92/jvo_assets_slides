import type { Meta, StoryObj } from '@storybook/react';
import { TitleAndCardGrid } from './TitleAndCardGrid';

const meta: Meta<typeof TitleAndCardGrid> = {
  title: 'Лейауты/2 · TitleAndCardGrid',
  component: TitleAndCardGrid,
  argTypes: {
    theme: { control: 'select', options: ['light', 'dark', 'eggplant', 'pinkPastel'] },
  },
};
export default meta;
type S = StoryObj<typeof TitleAndCardGrid>;

export const ТриКарточки: S = {
  args: {
    title: 'Единый центр управления вашими маркетплейсами',
    cards: [
      {
        heading: 'Находит',
        body: 'Система видит утечки выручки и точки роста, которые упускают конкуренты',
      },
      {
        heading: 'Превращает в задачи',
        body: 'Каждая утечка и точка роста становится задачей с дедлайном и приоритетом',
      },
      {
        heading: 'Выполняет',
        body: 'AI-агенты выполняют задачи через API Wildberries и Ozon автоматически',
      },
    ],
  },
};

export const ЧетыреКарточки: S = {
  args: {
    title: 'Дживио — единственная платформа',
    lead: 'выдающая продвинутую и предписывающую аналитику',
    cards: [
      { heading: 'Стратегия', body: 'Реализация на вашей команде. Результат в ваших руках.' },
      { heading: 'AI', body: 'Технология запатентована нами' },
      { heading: 'Опыт', body: '$1 млн инвестиций мы привлекли на этом' },
      { heading: 'Рост', body: 'Растим компании на WB и Ozon, Яндекс маркет и мегамаркет' },
    ],
  },
};

export const БезЗаголовка: S = {
  args: {
    cards: [
      { heading: 'Шаг 1', body: 'Подключаем кабинет' },
      { heading: 'Шаг 2', body: 'Запускаем аналитику' },
      { heading: 'Шаг 3', body: 'Получаем рост' },
    ],
  },
};
