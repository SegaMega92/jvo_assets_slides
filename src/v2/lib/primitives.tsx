import React from 'react';
import { colors, fonts } from '../../tokens';

/**
 * Примитивы дизайн-системы JVO — автономные строительные блоки.
 * Без абсолютного позиционирования: компонент рисует только себя,
 * размещение — на стороне слайда/контейнера.
 * Размеры — в px на канвасе 1920×1080 (как в type-шкале токенов).
 */

// ─────────────────────────────────────────────────────────────── Surface
export interface SurfaceProps {
  /** Заливка: hex или CSS-градиент (`linear-gradient(...)`) */
  background?: string;
  /** Радиус скругления, px */
  radius?: number;
  /** Внутренний отступ, px */
  padding?: number;
  /** Рамка, напр. `1px solid #ECE3E9` */
  border?: string;
  /** Тень */
  shadow?: string;
  /** Ширина, px (по умолчанию — по контенту) */
  width?: number;
  /** Высота, px (жёсткая) */
  height?: number;
  /** Мин. высота, px — карточка растёт под контент (предпочтительно фикс. height) */
  minHeight?: number;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
/** Базовая плашка-поверхность: фон/градиент, скругление, рамка, тень. Основа всех карточек. Длинные слова переносятся (break-word). */
export const Surface: React.FC<SurfaceProps> = ({
  background = colors.bg.white, radius = 28, padding = 0, border, shadow, width, height, minHeight, style, children,
}) => (
  <div style={{ background, borderRadius: radius, padding, border, boxShadow: shadow, width, height, minHeight, boxSizing: 'border-box', overflowWrap: 'break-word', wordBreak: 'break-word', ...style }}>
    {children}
  </div>
);

// ─────────────────────────────────────────────────────────────── Pill
export interface PillProps {
  /** Заливка капсулы: hex или градиент */
  background?: string;
  /** Цвет текста */
  color?: string;
  /** Размер шрифта, px */
  fontSize?: number;
  /** Насыщенность текста */
  weight?: number;
  /** Шрифт */
  font?: 'display' | 'body';
  children: React.ReactNode;
}
/** Капсула-таблетка (pill) с текстом — статусы, ценники, метки предложения. */
export const Pill: React.FC<PillProps> = ({
  background = colors.brand.pink, color = colors.brand.eggplant, fontSize = 22, weight = 600, font = 'body', children,
}) => (
  <span style={{
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center',
    background, color, borderRadius: 999, padding: `${fontSize * 0.7}px ${fontSize * 1.4}px`,
    fontFamily: fonts[font], fontWeight: weight, fontSize, lineHeight: 1.15, maxWidth: '100%',
    overflowWrap: 'break-word', wordBreak: 'break-word',
  }}>{children}</span>
);

// ─────────────────────────────────────────────────────────────── Tag
export interface TagProps {
  /** Цветовой вариант */
  tone?: 'pink' | 'lime' | 'critical' | 'neutral';
  fontSize?: number;
  children: React.ReactNode;
}
const TAG_TONES: Record<NonNullable<TagProps['tone']>, { bg: string; fg: string }> = {
  pink: { bg: colors.brand.pink, fg: colors.brand.eggplant },
  lime: { bg: colors.accent.lime, fg: colors.accent.limeDark },
  critical: { bg: '#FF5853', fg: '#FFFFFF' },
  neutral: { bg: '#F2F3FA', fg: colors.text.primaryAlt },
};
/** Маленький ярлык-чип (короткая метка вроде «кейс», «Критично», «3 API»). */
export const Tag: React.FC<TagProps> = ({ tone = 'pink', fontSize = 20, children }) => {
  const t = TAG_TONES[tone];
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', background: t.bg, color: t.fg,
      borderRadius: 999, padding: `${fontSize * 0.4}px ${fontSize * 0.9}px`,
      fontFamily: fonts.body, fontWeight: 700, fontSize, lineHeight: 1.15, maxWidth: '100%',
      overflowWrap: 'break-word', wordBreak: 'break-word',
    }}>{children}</span>
  );
};

// ─────────────────────────────────────────────────────────────── Marker
export interface MarkerProps {
  /** Диаметр кружка, px */
  size?: number;
  /** Цвет фона кружка */
  background?: string;
  /** Цвет стрелки */
  arrowColor?: string;
  /** Направление стрелки */
  direction?: 'right' | 'up' | 'down';
}
/** Круглый маркер со стрелкой — буллет-указатель в списках и плашках-выводах. */
export const Marker: React.FC<MarkerProps> = ({ size = 32, background = colors.brand.eggplant, arrowColor = colors.brand.pink, direction = 'right' }) => {
  const ch = direction === 'right' ? '→' : direction === 'up' ? '↑' : '↓';
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      width: size, height: size, borderRadius: '50%', background, flex: '0 0 auto',
      fontFamily: fonts.display, fontWeight: 500, color: arrowColor, fontSize: size * 0.6, lineHeight: 1,
    }}>{ch}</span>
  );
};

// ─────────────────────────────────────────────────────────────── Check
export interface CheckProps {
  /** Размер, px */
  size?: number;
  /** Цвет фона */
  background?: string;
  /** Цвет галочки */
  mark?: string;
}
/** Маркер-галочка (скруглённый квадрат с ✓) — чек-листы, таблицы сравнения. */
export const Check: React.FC<CheckProps> = ({ size = 32, background = colors.accent.limeDark, mark = colors.accent.lime }) => (
  <span style={{
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    width: size, height: size, borderRadius: size * 0.35, background, flex: '0 0 auto',
    fontFamily: fonts.display, fontWeight: 700, color: mark, fontSize: size * 0.5, lineHeight: 1,
  }}>✓</span>
);

// ─────────────────────────────────────────────────────────────── IconBadge
export interface IconBadgeProps {
  /** URL картинки-иконки (если задан — рисуется img) */
  src?: string;
  /** Либо эмодзи/символ вместо картинки */
  glyph?: string;
  /** Размер бокса, px */
  size?: number;
  /** Цвет подложки (для glyph) */
  background?: string;
  /** Форма подложки */
  shape?: 'circle' | 'rounded' | 'none';
  glyphColor?: string;
}
/** Иконка в цветной подложке (круг/скругл. квадрат) — шапки секций, карточки фич. */
export const IconBadge: React.FC<IconBadgeProps> = ({ src, glyph, size = 88, background = colors.brand.pink, shape = 'rounded', glyphColor = colors.brand.eggplant }) => (
  <span style={{
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: size, height: size, flex: '0 0 auto',
    background: shape === 'none' ? 'transparent' : background,
    borderRadius: shape === 'circle' ? '50%' : shape === 'rounded' ? size * 0.28 : 0,
  }}>
    {src
      ? <img src={src} style={{ width: '78%', height: '78%', objectFit: 'contain' }} />
      : <span style={{ fontFamily: fonts.display, fontWeight: 700, fontSize: size * 0.5, color: glyphColor }}>{glyph}</span>}
  </span>
);

// ─────────────────────────────────────────────────────────────── Title / Body
export interface TitleProps {
  /** Размер по шкале */
  level?: 'display' | 'section' | 'title' | 'card';
  color?: string;
  align?: React.CSSProperties['textAlign'];
  children: React.ReactNode;
}
const TITLE_SIZES = { display: 96, section: 75, title: 56, card: 36 };
/** Заголовок (Unbounded). Уровни: display / section / title / card. */
export const Title: React.FC<TitleProps> = ({ level = 'title', color = colors.text.primary, align, children }) => (
  <div style={{ fontFamily: fonts.display, fontWeight: 600, fontSize: TITLE_SIZES[level], lineHeight: 1.12, letterSpacing: '-0.01em', color, textAlign: align }}>{children}</div>
);

export interface BodyProps {
  /** Размер по шкале */
  size?: 'lead' | 'body' | 'small' | 'caption';
  color?: string;
  weight?: number;
  align?: React.CSSProperties['textAlign'];
  children: React.ReactNode;
}
const BODY_SIZES = { lead: 36, body: 28, small: 22, caption: 18 };
/** Текстовый блок (Manrope). Размеры: lead / body / small / caption. */
export const Body: React.FC<BodyProps> = ({ size = 'body', color = colors.text.primaryAlt, weight = 500, align, children }) => (
  <div style={{ fontFamily: fonts.body, fontWeight: weight, fontSize: BODY_SIZES[size], lineHeight: 1.35, color, textAlign: align }}>{children}</div>
);
