import React from 'react';
import { type as typeScale, colors, layout } from '../tokens';

/**
 * BadgeRow / LogoStrip — ряды плашек-регалий и логотипов клиентов.
 *
 * Источник: AwardsList (нижняя строка badges: Сколково, IT-аккред),
 * клиентские логотипы (39 шт в /assets/clients).
 *
 * BadgeRow слот: badges[] = строка | { icon, text }.
 * LogoStrip слот: logos[] = src | { src, alt }.
 */

export type Badge = React.ReactNode | { icon?: React.ReactNode; text: React.ReactNode };

interface BadgeRowProps {
  badges: Badge[];
  bg?: string;
  color?: string;
}

const normBadge = (b: Badge): { icon?: React.ReactNode; text: React.ReactNode } =>
  b !== null && typeof b === 'object' && 'text' in (b as any)
    ? (b as any)
    : { text: b as React.ReactNode };

export const BadgeRow: React.FC<BadgeRowProps> = ({
  badges,
  bg = colors.bg.softGray,
  color = colors.text.primary,
}) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
    {badges.map((raw, i) => {
      const b = normBadge(raw);
      return (
        <div
          key={i}
          style={{
            ...typeScale.small,
            display: 'flex', alignItems: 'center', gap: 14,
            background: bg, color,
            padding: '18px 28px', borderRadius: 16,
          }}
        >
          {b.icon && <span style={{ fontSize: 28 }}>{b.icon}</span>}
          <span style={{ fontWeight: 600 }}>{b.text}</span>
        </div>
      );
    })}
  </div>
);

export type Logo = string | { src: string; alt?: string };

interface LogoStripProps {
  logos: Logo[];
  /** высота ячейки логотипа */
  height?: number;
  columns?: number;
  card?: boolean;
}

export const LogoStrip: React.FC<LogoStripProps> = ({
  logos,
  height = 140,
  columns,
  card = true,
}) => (
  <div
    style={
      columns
        ? { display: 'grid', gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: 24 }
        : { display: 'flex', flexWrap: 'wrap', gap: 24 }
    }
  >
    {logos.map((raw, i) => {
      const src = typeof raw === 'string' ? raw : raw.src;
      const alt = typeof raw === 'string' ? '' : raw.alt ?? '';
      return (
        <div
          key={i}
          style={{
            height,
            minWidth: columns ? undefined : height * 1.6,
            background: card ? colors.bg.white : 'transparent',
            border: card ? `2px solid ${colors.border.subtle}` : 'none',
            borderRadius: layout.card.radius,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: 24, boxSizing: 'border-box',
          }}
        >
          <img src={src} alt={alt} style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
        </div>
      );
    })}
  </div>
);
