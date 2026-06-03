import React from 'react';
import { SlideFrame } from './SlideFrame';
import { SlideHeader } from './SlideHeader';
import { type, layout, colors, type ThemeName } from '../tokens';

/**
 * Лейаут 3: «Раньше / Сейчас», «Мы / Вы», «До / После».
 *
 * Слоты:
 *   - title (optional)
 *   - lead (optional)
 *   - left (required) — { heading?, items }
 *   - right (required) — { heading?, items }
 *   - connector (optional) — то, что между колонками (стрелка, плюс, и т.д.)
 */

export interface Column {
  heading?: React.ReactNode;
  body?: React.ReactNode;
  bg?: string;
  textColor?: string;
}

interface ComparisonTwoColumnsProps {
  title?: React.ReactNode;
  lead?: React.ReactNode;
  left: Column;
  right: Column;
  connector?: React.ReactNode;
  theme?: ThemeName;
}

const ColumnBlock: React.FC<{ col: Column; defaultBg: string }> = ({ col, defaultBg }) => (
  <div style={{
    background: col.bg ?? defaultBg,
    borderRadius: layout.card.radius,
    padding: layout.card.padding,
    color: col.textColor,
    display: 'flex',
    flexDirection: 'column',
    gap: 28,
    height: '100%',
    boxSizing: 'border-box',
  }}>
    {col.heading && (
      <div style={{ ...type.h3, color: col.textColor ?? type.h3.color }}>
        {col.heading}
      </div>
    )}
    {col.body && (
      <div style={{ ...type.body, color: col.textColor ?? type.body.color }}>
        {col.body}
      </div>
    )}
  </div>
);

export const ComparisonTwoColumns: React.FC<ComparisonTwoColumnsProps> = ({
  title,
  lead,
  left,
  right,
  connector,
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
        gridTemplateColumns: '1fr 1fr',
        gap: layout.card.gap * 2,
      }}>
        <ColumnBlock col={left} defaultBg={colors.bg.softGray} />
        <ColumnBlock col={right} defaultBg={colors.brand.pinkLight} />
        {connector && (
          <div style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 5,
          }}>
            {connector}
          </div>
        )}
      </div>
    </SlideFrame>
  );
};
