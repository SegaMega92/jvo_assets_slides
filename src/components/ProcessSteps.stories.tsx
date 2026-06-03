import type { Meta, StoryObj } from '@storybook/react';
import { ProcessSteps } from './ProcessSteps';
import { Stage } from './Stage';
import { colors } from '../tokens';

const meta: Meta<typeof ProcessSteps> = {
  title: 'Компоненты/ProcessSteps',
  component: ProcessSteps,
  argTypes: { orientation: { control: 'inline-radio', options: ['horizontal', 'vertical'] } },
  decorators: [(Story) => <Stage width={1500}>{Story()}</Stage>],
};
export default meta;
type S = StoryObj<typeof ProcessSteps>;

const steps = [
  { heading: 'Покупатель должен найти товар', body: 'Формируем задачи, чтобы карточки попадали в ТОП выдачи' },
  { heading: 'Товар должен быть в наличии', body: 'Расчёт отгрузок на склады, контроль оборачиваемости' },
  { heading: 'Карточка должна убедить купить', body: 'Проверяем цену, наполненность и соответствие' },
  { heading: 'Вы должны заработать', body: 'Учитываем маржу и все факторы экономики на МП' },
];

export const Горизонтально: S = {
  args: { steps, orientation: 'horizontal' },
};

export const Вертикально: S = {
  args: { steps, orientation: 'vertical', accent: colors.accent.purple },
  decorators: [(Story) => <Stage width={900}>{Story()}</Stage>],
};
