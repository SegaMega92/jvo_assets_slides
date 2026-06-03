import React from 'react';
import { SlideFrame } from './SlideFrame';
import { SlideHeader } from './SlideHeader';
import { type, layout, colors, type ThemeName } from '../tokens';

/**
 * Лейаут 7: Сетка факторов / тегов / пилюль.
 *
 * Слоты:
 *   - title (optional)
 *   - lead (optional)
 *   - tags (required) — массив строк / нод; рендерится автопереносом
 */

interface FactorGridProps {
  title?: React.ReactNode;
  lead?: React.ReactNode;
  tags: React.ReactNode[];
  theme?: ThemeName;
  tagBg?: string;
  tagColor?: string;
}

export const FactorGrid: React.FC<FactorGridProps> = ({
  title,
  lead,
  tags,
  theme = 'light',
  tagBg = colors.bg.softGray,
  tagColor = colors.text.primary,
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
        display: 'flex',
        flexWrap: 'wrap',
        gap: 20,
        alignContent: 'flex-start',
      }}>
        {tags.map((tag, i) => (
          <div key={i} style={{
            ...type.small,
            background: tagBg,
            color: tagColor,
            padding: '20px 32px',
            borderRadius: 16,
            display: 'flex',
            alignItems: 'center',
            whiteSpace: 'nowrap',
          }}>
            {tag}
          </div>
        ))}
      </div>
    </SlideFrame>
  );
};
