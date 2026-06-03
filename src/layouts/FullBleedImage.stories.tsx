import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { FullBleedImage } from './FullBleedImage';
import { colors, type } from '../tokens';

const meta: Meta<typeof FullBleedImage> = {
  title: 'Лейауты/8 · FullBleedImage',
  component: FullBleedImage,
  argTypes: {
    theme: { control: 'select', options: ['light', 'pinkPastel'] },
  },
};
export default meta;
type S = StoryObj<typeof FullBleedImage>;

export const Скриншот: S = {
  args: {
    title: 'С нами ТОП-компании выбиваются в лидеры на Wildberries',
    image: (
      <div style={{ ...type.body, color: colors.text.muted }}>
        [Большой скриншот / интерфейс продукта]
      </div>
    ),
    imageBg: colors.bg.softGray,
  },
};

export const СТегом: S = {
  args: {
    title: 'Аналитика всех маркетплейсов',
    inlineTag: (
      <span style={{
        background: colors.brand.pink,
        padding: '12px 28px',
        borderRadius: 999,
        ...type.body,
        color: colors.bg.white,
        fontWeight: 600,
      }}>
        новое
      </span>
    ),
    image: (
      <div style={{ ...type.body, color: colors.text.muted }}>
        [Скриншот]
      </div>
    ),
    imageBg: colors.brand.pinkLight,
  },
};
