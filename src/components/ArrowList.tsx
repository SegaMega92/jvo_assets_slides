import React from 'react';
import { type as typeScale, colors } from '../tokens';

/**
 * ArrowList — список пунктов с маркером-стрелкой «→».
 *
 * Источник: «Студия» слайды 3–4 (колонки услуг: «Аналитика…», под ней
 * «→ Анализ показателей», «→ Контроль работы» …).
 *
 * Слоты: heading (optional), items[]. Маркер настраивается.
 */

interface ArrowListProps {
  heading?: React.ReactNode;
  items: React.ReactNode[];
  marker?: React.ReactNode;
  markerColor?: string;
  headingColor?: string;
  itemColor?: string;
}

export const ArrowList: React.FC<ArrowListProps> = ({
  heading,
  items,
  marker = '→',
  markerColor = colors.brand.pink,
  headingColor = colors.text.primary,
  itemColor = colors.text.primary,
}) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
    {heading && <div style={{ ...typeScale.h4, color: headingColor }}>{heading}</div>}
    <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
      {items.map((item, i) => (
        <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
          <span style={{ ...typeScale.body, color: markerColor, fontWeight: 700, flexShrink: 0 }}>
            {marker}
          </span>
          <span style={{ ...typeScale.body, color: itemColor, opacity: 0.85 }}>{item}</span>
        </div>
      ))}
    </div>
  </div>
);
