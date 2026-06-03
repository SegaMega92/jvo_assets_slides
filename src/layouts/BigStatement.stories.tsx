import type { Meta, StoryObj } from '@storybook/react';
import { BigStatement } from './BigStatement';

const meta: Meta<typeof BigStatement> = {
  title: 'Лейауты/1 · BigStatement',
  component: BigStatement,
  argTypes: {
    theme: { control: 'select', options: ['light', 'dark', 'eggplant', 'pinkPastel', 'lime', 'purple'] },
  },
};
export default meta;
type S = StoryObj<typeof BigStatement>;

export const Дефолт: S = {
  args: {
    statement: 'Это больше, чем все существующие платформы аналитики',
    theme: 'light',
  },
};

export const Eggplant: S = {
  args: {
    statement: 'Единственная платформа, выдающая продвинутую и предписывающую аналитику',
    theme: 'eggplant',
  },
};

export const Лайм: S = {
  args: {
    statement: '200+ метрик в одном дашборде',
    theme: 'lime',
  },
};
