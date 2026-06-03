import React from 'react';
import { colors, fonts } from '../../tokens';
import { asset } from '../assets';

/** Бренд-элементы JVO — автономные. */
const F = fonts;

// ─────────────────────────────────────────── Wordmark
export interface WordmarkProps {
  /** Подпись справа от логотипа, напр. «студия» */
  suffix?: string;
  /** Тёмный текст на светлом / светлый на тёмном */
  theme?: 'dark' | 'light';
  /** Высота, px */
  size?: number;
}
/** Текстовый логотип «ДЖИВИО» (+ опц. суффикс «студия»). */
export const Wordmark: React.FC<WordmarkProps> = ({ suffix, theme = 'dark', size = 40 }) => {
  const c = theme === 'dark' ? colors.text.primaryAlt : '#FFFFFF';
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: size * 0.3, fontFamily: F.display, fontWeight: 800, fontSize: size, color: c, letterSpacing: '-0.02em' }}>
      ДЖИВИО
      {suffix && <span style={{ fontWeight: 500, fontSize: size * 0.42, background: theme === 'dark' ? '#FFF' : 'rgba(255,255,255,0.15)', color: c, padding: `${size * 0.08}px ${size * 0.28}px`, borderRadius: 999 }}>{suffix}</span>}
    </span>
  );
};

// ─────────────────────────────────────────── JBadge (знак ДЖИВИО)
/** Варианты знака: 4 с фоном-плиткой + 2 «чистых» (прозрачный фон) для размещения на любом фоне. */
export type SignVariant = 'pink' | 'eggplant' | 'black' | 'white' | 'mark-light' | 'mark-dark';
const SIGN_SRC: Record<SignVariant, string> = {
  pink: asset('sign/sign-pink.png'),          // розовый фон, тёмный знак
  eggplant: asset('sign/sign-eggplant.png'),  // тёмно-розовый фон, розовый знак
  black: asset('sign/sign-black.png'),        // чёрный фон, белый знак
  white: asset('sign/sign-white.png'),        // белый фон, тёмный знак
  'mark-light': asset('sign/sign-mark-light.png'), // только знак, белый (на тёмном фоне)
  'mark-dark': asset('sign/sign-mark-dark.png'),   // только знак, тёмный (на светлом фоне)
};
export interface JBadgeProps {
  /** Размер, px */
  size?: number;
  /** Вариант знака (фон/цвет). 'dark' — синоним 'black' (обратная совместимость). */
  variant?: SignVariant | 'dark';
  /** Радиус скругления плитки (для вариантов с фоном); по умолчанию size*0.28. */
  radius?: number;
}
/** Знак ДЖИВИО — официальный логотип-знак. Реальные PNG, 6 вариаций. */
export const JBadge: React.FC<JBadgeProps> = ({ size = 84, variant = 'pink', radius }) => {
  const v: SignVariant = variant === 'dark' ? 'black' : variant;
  const isMark = v === 'mark-light' || v === 'mark-dark';
  return (
    <img
      src={SIGN_SRC[v]}
      width={size}
      height={size}
      alt="ДЖИВИО"
      style={{ display: 'block', borderRadius: isMark ? 0 : (radius ?? size * 0.28), objectFit: 'contain' }}
    />
  );
};

// ─────────────────────────────────────────── Frame
export interface FrameProps {
  /** Цвет рамки */
  color?: string;
  /** Толщина, px */
  thickness?: number;
  /** Радиус, px */
  radius?: number;
  /** Фон внутри */
  background?: string;
  width?: number;
  height?: number;
  children?: React.ReactNode;
}
/** Фирменная розовая рамка-фрейм (моушн дека «Студия»). Оборачивает контент слайда. */
export const Frame: React.FC<FrameProps> = ({ color = '#FF66CC', thickness = 6, radius = 22, background = '#FFFFFF', width = 760, height = 428, children }) => (
  <div style={{ position: 'relative', width, height, background, borderRadius: radius, overflow: 'hidden' }}>
    {children}
    <div style={{ position: 'absolute', inset: thickness / 2, border: `${thickness}px solid ${color}`, borderRadius: radius, pointerEvents: 'none' }} />
  </div>
);

// ─────────────────────────────────────────── LogoStrip
export interface LogoStripProps {
  /** Логотипы: URL картинок или текстовые подписи-плейсхолдеры */
  logos: string[];
  /** Колонок в ряду */
  columns?: number;
  /** Логотипы — это URL картинок (иначе рисуются текстовые плашки) */
  asImages?: boolean;
  width?: number;
}
/** Лента/сетка логотипов клиентов («+230 компаний», «Выбирают крупнейшие бренды»). */
export const LogoStrip: React.FC<LogoStripProps> = ({ logos, columns = 6, asImages = false, width = 1100 }) => (
  <div style={{ width, display: 'grid', gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: 16 }}>
    {logos.map((l, i) => (
      <div key={i} style={{ height: 96, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF', border: '1px solid #EEE7F0', borderRadius: 16 }}>
        {asImages ? <img src={l} style={{ maxWidth: '70%', maxHeight: '60%', objectFit: 'contain' }} /> : <span style={{ fontFamily: F.display, fontWeight: 700, fontSize: 22, color: '#9A8FA6' }}>{l}</span>}
      </div>
    ))}
  </div>
);

// ─────────────────────────────────────────── LogoBlock
export interface LogoBlockProps {
  /** Логотипы: URL картинок (asImages) или текстовые подписи */
  logos: string[];
  /** URL картинок вместо текстовых плашек */
  asImages?: boolean;
  /** Максимум логотипов в одном ряду; при превышении — перенос на 2+ ряда (ряды балансируются) */
  maxPerRow?: number;
  /** Заголовок-акцент над лентой, напр. «+250 компаний» */
  title?: string;
  /** Подпись рядом с заголовком, напр. «топ-уровня нам доверяют» */
  caption?: string;
  /** Тема (под фон): на тёмном — светлый заголовок */
  theme?: 'light' | 'dark';
  /** Высота плитки, px */
  tileHeight?: number;
  /** Зазор между плитками, px */
  gap?: number;
  width?: number;
}
/**
 * Блок логотипов: опц. заголовок + подпись и лента логотипов-плиток.
 * НЕ БОЛЬШЕ `maxPerRow` (по умолчанию 8) в ряд; если логотипов больше —
 * перенос на 2+ ряда. Ряды БАЛАНСИРУЮТСЯ (12 → 6+6, а не 8+4), последний
 * неполный ряд центрируется.
 */
export const LogoBlock: React.FC<LogoBlockProps> = ({
  logos, asImages = false, maxPerRow = 8, title, caption, theme = 'light', tileHeight = 96, gap = 16, width = 1728,
}) => {
  const n = Math.max(1, logos.length);
  // сколько рядов нужно при лимите maxPerRow, и поровну распределяем по ним
  const rows = Math.ceil(n / maxPerRow);
  const perRow = Math.ceil(n / rows);
  // ширина плитки так, чтобы в ряд помещалось ровно perRow штук с учётом зазоров
  const tileWidth = `calc((100% - ${(perRow - 1) * gap}px) / ${perRow})`;
  const titleColor = theme === 'dark' ? '#FF8FDA' : colors.brand.eggplant;
  const capColor = theme === 'dark' ? '#E7C7DD' : colors.text.mutedDark;
  return (
    <div style={{ width }}>
      {(title || caption) && (
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 22, flexWrap: 'wrap' }}>
          {title && <span style={{ fontFamily: F.display, fontWeight: 600, fontSize: 30, color: titleColor }}>{title}</span>}
          {caption && <span style={{ fontFamily: F.body, fontWeight: 500, fontSize: 24, color: capColor }}>{caption}</span>}
        </div>
      )}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap, justifyContent: 'center' }}>
        {logos.map((l, i) => (
          <div key={i} style={{ width: tileWidth, height: tileHeight, flex: '0 0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#FFFFFF', border: '1px solid #EEE7F0', borderRadius: 16, boxSizing: 'border-box', padding: '4px 8px' }}>
            {asImages
              ? <img src={l} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
              : <span style={{ fontFamily: F.display, fontWeight: 700, fontSize: 36, color: '#9A8FA6', textAlign: 'center' }}>{l}</span>}
          </div>
        ))}
      </div>
    </div>
  );
};
