import React from 'react';
import { SlideFrame } from './SlideFrame';
import { SlideHeader } from './SlideHeader';
import { type, layout, colors, type ThemeName } from '../tokens';

/**
 * Лейаут 11: Текстовый слайд с несколькими блоками.
 *
 * Слоты:
 *   - title (optional)
 *   - lead (optional)
 *   - blocks (required) — массив блоков текста (рендерим колонками)
 */

export interface TextBlock {
  heading?: React.ReactNode;
  body: React.ReactNode;
}

interface HeavyTextProps {
  title?: React.ReactNode;
  lead?: React.ReactNode;
  blocks: TextBlock[];
  columns?: 1 | 2 | 3;
  theme?: ThemeName;
}

export const HeavyText: React.FC<HeavyTextProps> = ({
  title,
  lead,
  blocks,
  columns = 2,
  theme = 'light',
}) => {
  const hasHeader = title || lead;
  const bodyTop = hasHeader ? layout.bodyTop + (lead ? 80 : 0) : layout.slidePadY * 2;

  return (
    <SlideFrame theme={theme}>
      <SlideHeader title={title} lead={lead} />
      <div style={{
        position: 'absolute',
        left: layout.slidePadX,
        right: layout.slidePadX,
        top: bodyTop,
        bottom: layout.slidePadY,
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: layout.card.gap * 2,
        alignContent: 'start',
      }}>
        {blocks.map((b, i) => (
          <div key={i} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}>
            {b.heading && (
              <div style={{ ...type.cardTitle, color: colors.brand.eggplant }}>
                {b.heading}
              </div>
            )}
            <div style={type.body}>{b.body}</div>
          </div>
        ))}
      </div>
    </SlideFrame>
  );
};
