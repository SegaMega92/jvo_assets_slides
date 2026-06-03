import React from 'react';
import { Abs, SCALE, pt } from '../SlideStage';
import { img } from '../assets';

/**
 * Кит переиспользуемых элементов слайдов JVO v2.
 * Все координаты — в системе PPTX 960×540, домножаются на SCALE внутри Abs.
 */

// ── Card: скруглённая плашка (заливка или градиент) ────────────────────
interface CardProps {
  x: number; y: number; w: number; h: number;
  /** доля скругления (adj из PPTX): radius = adj * min(w,h) */
  radius?: number;
  /** css background: hex или linear-gradient(...) */
  background?: string;
  border?: string;
  shadow?: string;
  z?: number;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
export const Card: React.FC<CardProps> = ({
  x, y, w, h, radius = 0.06, background = '#FFFFFF', border, shadow, z, style, children,
}) => (
  <Abs x={x} y={y} w={w} h={h} z={z} style={{
    background,
    borderRadius: Math.min(w, h) * radius * SCALE,
    border,
    boxShadow: shadow,
    ...style,
  }}>
    {children}
  </Abs>
);

// ── JBadge: бейдж-логотип «J» в правом верхнем углу контентных слайдов ──
export const JBadge: React.FC<{ deck: string; file?: string; x?: number; y?: number; size?: number }> = ({
  deck, file = 'img_83ddcd244300.png', x = 899.4, y = 18.9, size = 41.7,
}) => (
  <Abs x={x} y={y} w={size} h={size}>
    <img src={img(deck, file)} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
  </Abs>
);

// ── SlideTitle: заголовок слайда (Unbounded SemiBold) ──────────────────
export const SlideTitle: React.FC<{
  x?: number; y?: number; w?: number; size?: number; color?: string; weight?: number;
  lineHeight?: number; children: React.ReactNode;
}> = ({ x = 18.9, y = 18.9, w = 721.6, size = 28, color = '#410031', weight = 600, lineHeight = 1.12, children }) => (
  <Abs x={x} y={y} w={w}>
    <div style={{
      fontFamily: 'Unbounded', fontWeight: weight, fontSize: pt(size),
      lineHeight, letterSpacing: '-0.01em', color,
    }}>{children}</div>
  </Abs>
);

// ── Text: произвольный текстовый блок (Manrope по умолчанию) ───────────
export const Text: React.FC<{
  x: number; y: number; w?: number; size?: number; color?: string; weight?: number;
  font?: 'Manrope' | 'Unbounded'; lineHeight?: number; align?: React.CSSProperties['textAlign'];
  z?: number; style?: React.CSSProperties; children: React.ReactNode;
}> = ({ x, y, w, size = 12, color = '#410031', weight = 500, font = 'Manrope', lineHeight = 1.25, align, z, style, children }) => (
  <Abs x={x} y={y} w={w} z={z}>
    <div style={{
      fontFamily: font, fontWeight: weight, fontSize: pt(size),
      lineHeight, color, textAlign: align, ...style,
    }}>{children}</div>
  </Abs>
);

// ── Marker: круглый маркер-стрелка (группа OVAL + ↑rot90 в PPTX) ────────
export const Marker: React.FC<{
  x: number; y: number; size?: number; bg?: string; arrow?: string; z?: number;
}> = ({ x, y, size = 15.8, bg = '#410031', arrow = '#FF8FDA', z }) => (
  <Abs x={x} y={y} w={size} h={size} z={z} style={{
    background: bg, borderRadius: '50%',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  }}>
    <span style={{
      fontFamily: 'Unbounded', fontWeight: 500, color: arrow,
      fontSize: pt(size * 0.62), lineHeight: 1,
    }}>→</span>
  </Abs>
);

// ── Check: маркер-галочка (скруглённый квадрат с ✓) ────────────────────
export const Check: React.FC<{ x: number; y: number; size?: number; bg?: string; mark?: string; z?: number }> =
  ({ x, y, size = 15.8, bg = '#1F2A09', mark = '#D8F995', z }) => (
    <Abs x={x} y={y} w={size} h={size} z={z} style={{
      background: bg, borderRadius: size * 0.35 * SCALE,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <span style={{ fontFamily: 'Unbounded', fontWeight: 700, color: mark, fontSize: pt(size * 0.5), lineHeight: 1 }}>✓</span>
    </Abs>
  );

// ── GradientPill: горизонтальная плашка-капсула с текстом ──────────────
export const Pill: React.FC<{
  x: number; y: number; w: number; h: number; background?: string; color?: string;
  size?: number; weight?: number; font?: 'Manrope' | 'Unbounded'; z?: number; children: React.ReactNode;
}> = ({ x, y, w, h, background = '#FF8FDA', color = '#410031', size = 10, weight = 500, font = 'Manrope', z, children }) => (
  <Abs x={x} y={y} w={w} h={h} z={z} style={{
    background, borderRadius: 999,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  }}>
    <span style={{ fontFamily: font, fontWeight: weight, fontSize: pt(size), color, lineHeight: 1 }}>{children}</span>
  </Abs>
);
