import React from 'react';
import { type as typeScale, colors, fonts, layout } from '../tokens';

/**
 * StatCard — карточка-метрика: крупное число + подпись.
 *
 * Источник: «Студия» слайд 1 (сетка 3×2: «150+ ниш», «40+ специалистов»,
 * «Более 5 млн SKU» …). Кладётся в сетку StatGrid или в любой слот.
 *
 * Слоты: value (крупно), label (короткая подпись), description (optional).
 */

interface StatCardProps {
  value: React.ReactNode;
  label?: React.ReactNode;
  description?: React.ReactNode;
  accent?: string;
  bg?: string;
  align?: 'start' | 'center';
}

export const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  description,
  accent = colors.brand.pink,
  bg = colors.bg.softGray,
  align = 'start',
}) => (
  <div
    style={{
      background: bg,
      borderRadius: layout.card.radius,
      padding: layout.card.padding,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align === 'center' ? 'center' : 'left',
      height: '100%',
      boxSizing: 'border-box',
    }}
  >
    <div
      style={{
        fontFamily: fonts.display,
        fontSize: 72,
        fontWeight: 600,
        lineHeight: 1,
        color: accent,
      }}
    >
      {value}
    </div>
    {label && (
      <div style={{ ...typeScale.cardTitle, fontSize: 34, color: colors.text.primary }}>
        {label}
      </div>
    )}
    {description && (
      <div style={{ ...typeScale.small, color: colors.text.mutedMid, marginTop: 4 }}>
        {description}
      </div>
    )}
  </div>
);
