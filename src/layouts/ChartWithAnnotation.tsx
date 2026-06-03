import React from 'react';
import { SlideFrame } from './SlideFrame';
import { SlideHeader } from './SlideHeader';
import { type, layout, colors, type ThemeName } from '../tokens';

/**
 * Лейаут 10: Заголовок + центральная диаграмма/таблица + аннотация.
 *
 * Слоты:
 *   - title (optional)
 *   - lead (optional)
 *   - chart (required) — диаграмма/таблица
 *   - annotation (optional) — выноска снизу (например "90+ факторов")
 */

interface ChartWithAnnotationProps {
  title?: React.ReactNode;
  lead?: React.ReactNode;
  chart: React.ReactNode;
  annotation?: React.ReactNode;
  theme?: ThemeName;
}

export const ChartWithAnnotation: React.FC<ChartWithAnnotationProps> = ({
  title,
  lead,
  chart,
  annotation,
  theme = 'light',
}) => {
  const hasHeader = title || lead;
  const bodyTop = hasHeader ? layout.bodyTop + (lead ? 80 : 0) : layout.slidePadY * 2;

  return (
    <SlideFrame theme={theme}>
      <SlideHeader title={title} lead={lead} />
      <div style={{
        position: 'absolute',
        left: layout.slidePadX * 4,
        right: layout.slidePadX * 4,
        top: bodyTop,
        bottom: annotation ? 180 : layout.slidePadY,
        background: colors.bg.softGray,
        borderRadius: layout.card.radius,
        padding: layout.card.padding,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {chart}
      </div>
      {annotation && (
        <div style={{
          position: 'absolute',
          bottom: layout.slidePadY,
          left: '50%',
          transform: 'translateX(-50%)',
          background: colors.brand.eggplant,
          padding: '20px 40px',
          borderRadius: 999,
          ...type.body,
          color: colors.text.onDark,
        }}>
          {annotation}
        </div>
      )}
    </SlideFrame>
  );
};
