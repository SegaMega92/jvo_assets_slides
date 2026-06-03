import React from 'react';
import { type as typeScale, colors, fonts, layout } from '../tokens';

/**
 * NumberedCard — карточка с номером: число-бейдж + заголовок + текст.
 *
 * Источник: «Студия» слайд 2 («1 Отсутствие выделенной команды …»,
 * «2 Непонимание алгоритмов …»). Шаги, проблемы, этапы.
 *
 * Слоты: number, heading, body.
 */

interface NumberedCardProps {
  number: React.ReactNode;
  heading?: React.ReactNode;
  body?: React.ReactNode;
  accent?: string;
  bg?: string;
  textColor?: string;
}

export const NumberedCard: React.FC<NumberedCardProps> = ({
  number,
  heading,
  body,
  accent = colors.brand.pink,
  bg = colors.bg.softGray,
  textColor = colors.text.primary,
}) => (
  <div
    style={{
      background: bg,
      borderRadius: layout.card.radius,
      padding: layout.card.padding,
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      height: '100%',
      boxSizing: 'border-box',
      color: textColor,
    }}
  >
    <div
      style={{
        fontFamily: fonts.display,
        fontSize: 88,
        fontWeight: 600,
        lineHeight: 0.9,
        color: accent,
      }}
    >
      {number}
    </div>
    {heading && <div style={{ ...typeScale.h4, color: textColor }}>{heading}</div>}
    {body && <div style={{ ...typeScale.body, color: textColor, opacity: 0.8 }}>{body}</div>}
  </div>
);
