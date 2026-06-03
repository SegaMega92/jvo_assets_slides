import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ClientCase } from './ClientCase';
import { colors, type } from '../tokens';

const meta: Meta<typeof ClientCase> = {
  title: 'Лейауты/5 · ClientCase',
  component: ClientCase,
};
export default meta;
type S = StoryObj<typeof ClientCase>;

const placeholderImage = (
  <div style={{ color: colors.text.muted, fontSize: 28 }}>[Картинка]</div>
);

const Metrics = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 24, height: '100%', justifyContent: 'center' }}>
    {[
      { v: '+26%', l: 'Прирост в первый месяц' },
      { v: '×1.8', l: 'Конверсия в карточке' },
      { v: '12 мес', l: 'Сотрудничества' },
    ].map((m, i) => (
      <div key={i}>
        <div style={{ ...type.h3, color: colors.brand.eggplant }}>{m.v}</div>
        <div style={{ ...type.small, color: colors.text.mutedDark }}>{m.l}</div>
      </div>
    ))}
  </div>
);

export const Laretto: S = {
  args: {
    clientName: 'Laretto',
    resultTag: 'Прирост 26% в первый месяц',
    productImage: placeholderImage,
    metricsTable: <Metrics />,
    clientPhoto: placeholderImage,
    clientCaption: 'Анастасия, директор по маркетингу',
  },
};

export const БезФото: S = {
  args: {
    clientName: 'Cofesso',
    resultTag: '×2.4 выручка за квартал',
    productImage: placeholderImage,
    metricsTable: <Metrics />,
  },
};
