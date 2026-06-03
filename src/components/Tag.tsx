import React from 'react';
import { type as typeScale, colors } from '../tokens';

/**
 * Tag / Pill — маленькая плашка-ярлык.
 *
 * Встречается почти везде: заголовки-секции («Решаем ключевые проблемы»),
 * результаты кейса («Прирост 26%»), факторы (FactorGrid), бонусы («БОНУС»).
 *
 * Слот: текст внутри. Управляется variant / accent / size / shape.
 */

export type TagAccent = 'pink' | 'lime' | 'purple' | 'eggplant' | 'neutral';
export type TagVariant = 'solid' | 'soft' | 'outline';
export type TagSize = 'sm' | 'md' | 'lg';
export type TagShape = 'pill' | 'rounded';

interface TagProps {
  children: React.ReactNode;
  accent?: TagAccent;
  variant?: TagVariant;
  size?: TagSize;
  shape?: TagShape;
  icon?: React.ReactNode;
}

const ACCENTS: Record<TagAccent, { base: string; on: string; soft: string; softText: string }> = {
  pink:     { base: colors.brand.pink,    on: colors.bg.white,       soft: colors.brand.pinkLight,  softText: colors.brand.eggplant },
  lime:     { base: colors.accent.lime,   on: colors.accent.limeDark, soft: colors.accent.limePale, softText: colors.accent.limeDark },
  purple:   { base: colors.accent.purple, on: colors.bg.white,       soft: colors.accent.purpleLight, softText: colors.accent.purple },
  eggplant: { base: colors.brand.eggplant,on: colors.bg.white,       soft: colors.brand.pinkPale,   softText: colors.brand.eggplant },
  neutral:  { base: colors.text.primaryAlt, on: colors.bg.white,     soft: colors.bg.softGray,      softText: colors.text.primary },
};

const SIZES: Record<TagSize, { pad: string; font: React.CSSProperties }> = {
  sm: { pad: '10px 22px', font: typeScale.caption },
  md: { pad: '16px 32px', font: typeScale.small },
  lg: { pad: '20px 40px', font: typeScale.body },
};

export const Tag: React.FC<TagProps> = ({
  children,
  accent = 'pink',
  variant = 'solid',
  size = 'md',
  shape = 'pill',
  icon,
}) => {
  const a = ACCENTS[accent];
  const s = SIZES[size];

  const palette =
    variant === 'solid'
      ? { background: a.base, color: a.on, border: 'none' }
      : variant === 'soft'
      ? { background: a.soft, color: a.softText, border: 'none' }
      : { background: 'transparent', color: a.base, border: `2px solid ${a.base}` };

  return (
    <span
      style={{
        ...s.font,
        ...palette,
        fontWeight: 600,
        lineHeight: 1,
        padding: s.pad,
        borderRadius: shape === 'pill' ? 999 : 16,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 12,
        whiteSpace: 'nowrap',
      }}
    >
      {icon}
      {children}
    </span>
  );
};
