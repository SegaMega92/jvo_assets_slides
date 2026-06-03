import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { PricingTariffs } from './PricingTariffs';
import { colors, type } from '../tokens';

const meta: Meta<typeof PricingTariffs> = {
  title: 'Лейауты/6 · PricingTariffs',
  component: PricingTariffs,
};
export default meta;
type S = StoryObj<typeof PricingTariffs>;

const Features = ({ items }: { items: string[] }) => (
  <ul style={{ paddingLeft: 24, margin: 0, color: 'inherit' }}>
    {items.map(i => <li key={i} style={{ marginBottom: 12 }}>{i}</li>)}
  </ul>
);

export const ТриТарифа: S = {
  args: {
    productName: 'Дживио Агент',
    lead: 'Оплата за действие (Pay as you go)',
    tariffs: [
      {
        name: 'Старт',
        price: '15 ₽ / действие',
        features: <Features items={['До 1000 действий', 'Базовая аналитика', 'Email-поддержка']} />,
      },
      {
        name: 'Бизнес',
        price: '10 ₽ / действие',
        features: <Features items={['От 1000 действий', 'Продвинутая аналитика', 'Чат-поддержка 24/7']} />,
        highlighted: true,
      },
      {
        name: 'Enterprise',
        price: 'Договор',
        features: <Features items={['Без лимитов', 'Личный менеджер', 'SLA + интеграции']} />,
      },
    ],
    specialOffer: 'Спецпредложение до 27.02: вся сумма на баланс Агента в виде бонусов',
    socialProof: 'Выбирают крупнейшие бренды Wildberries и Ozon',
  },
};
