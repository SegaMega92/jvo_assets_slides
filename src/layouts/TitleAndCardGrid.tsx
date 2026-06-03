import React from 'react';
import { SlideFrame } from './SlideFrame';
import { SlideHeader } from './SlideHeader';
import { type, layout, colors, type ThemeName } from '../tokens';

/**
 * Лейаут 2: Заголовок + сетка карточек (2-4 шт).
 *
 * Слоты:
 *   - title (optional) — заголовок слайда
 *   - lead (optional) — подзаголовок
 *   - cards (required) — массив карточек
 *
 * Каждая карточка: { icon?, heading, body }
 */

export interface Card {
  icon?: React.ReactNode;
  heading?: React.ReactNode;
  body?: React.ReactNode;
  bg?: string;
}

interface TitleAndCardGridProps {
  title?: React.ReactNode;
  lead?: React.ReactNode;
  cards: Card[];
  theme?: ThemeName;
  cardBg?: string;
}

export const TitleAndCardGrid: React.FC<TitleAndCardGridProps> = ({
  title,
  lead,
  cards,
  theme = 'light',
  cardBg = colors.bg.softGray,
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
        gridTemplateColumns: `repeat(${cards.length}, 1fr)`,
        gap: layout.card.gap * 2,
      }}>
        {cards.map((card, i) => (
          <div key={i} style={{
            background: card.bg ?? cardBg,
            borderRadius: layout.card.radius,
            padding: layout.card.padding,
            display: 'flex',
            flexDirection: 'column',
            gap: 32,
          }}>
            {card.icon && <div>{card.icon}</div>}
            {card.heading && (
              <div style={type.h3}>{card.heading}</div>
            )}
            {card.body && (
              <div style={type.body}>{card.body}</div>
            )}
          </div>
        ))}
      </div>
    </SlideFrame>
  );
};
