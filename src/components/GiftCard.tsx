import React from 'react';
import { type as typeScale, colors, fonts, layout } from '../tokens';

/**
 * GiftCard — карточка бонуса/подарка: крупное значение + подпись + иконка.
 *
 * Источник: «Студия» сл.8 (спецпредложение: «5 SEO Карточек в подарок»,
 * «1 месяц Консультаций в подарок»).
 *
 * Слоты: value (крупно), label, icon (optional).
 */

interface GiftCardProps {
  value: React.ReactNode;
  label?: React.ReactNode;
  icon?: React.ReactNode;
  bg?: string;
  color?: string;
  accent?: string;
}

export const GiftCard: React.FC<GiftCardProps> = ({
  value,
  label,
  icon = '🎁',
  bg = colors.brand.pinkLight,
  color = colors.brand.eggplant,
  accent = colors.brand.pink,
}) => (
  <div
    style={{
      background: bg,
      color,
      borderRadius: layout.card.radius * 1.25,
      padding: layout.card.padding * 1.1,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      alignItems: 'center',
      textAlign: 'center',
      height: '100%',
      boxSizing: 'border-box',
    }}
  >
    {icon && <div style={{ fontSize: 64 }}>{icon}</div>}
    <div style={{ fontFamily: fonts.display, fontSize: 80, fontWeight: 600, lineHeight: 1, color: accent }}>
      {value}
    </div>
    {label && <div style={{ ...typeScale.h4, color, fontWeight: 600 }}>{label}</div>}
  </div>
);
