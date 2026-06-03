import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { AwardsList } from './AwardsList';
import { colors, type } from '../tokens';

const meta: Meta<typeof AwardsList> = {
  title: 'Лейауты/9 · AwardsList',
  component: AwardsList,
};
export default meta;
type S = StoryObj<typeof AwardsList>;

const heroPlaceholder = (
  <div style={{ ...type.body, color: colors.text.muted }}>
    [Фото награды / команда]
  </div>
);

export const Регалии: S = {
  args: {
    awards: [
      {
        title: 'Победитель премии «Большой Оборот-2025» ↗',
        subtitle: 'в сфере «Продвижение на маркетплейсах»',
      },
      {
        title: 'Победитель STARTECH AWARDS 2025 ↗',
        subtitle: 'в номинации «Лучший AI-сервис»',
      },
      {
        title: 'Дживио Агент на первой строчке ↗',
        subtitle: 'в карте российского ИИ от РБК',
      },
    ],
    hero: heroPlaceholder,
    badges: [
      { label: 'Аккредитованая IT-компания' },
      { label: 'Резидент Сколково' },
      { label: 'Топ-100 AI-стартапов' },
    ],
  },
};
