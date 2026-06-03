import React from 'react';
import { type as typeScale, colors, layout } from '../tokens';

/**
 * IconCard — карточка «иконка + заголовок + текст».
 *
 * Базовый строительный блок сеток (TitleAndCardGrid, DashboardShowcase).
 * Раньше рендерился инлайн внутри лейаута — вынесён в переиспользуемый слот.
 *
 * Слоты: icon (optional), heading, body.
 */

interface IconCardProps {
  icon?: React.ReactNode;
  heading?: React.ReactNode;
  body?: React.ReactNode;
  bg?: string;
  headingColor?: string;
  bodyColor?: string;
}

export const IconCard: React.FC<IconCardProps> = ({
  icon,
  heading,
  body,
  bg = colors.bg.softGray,
  headingColor = colors.text.black,
  bodyColor = colors.text.primary,
}) => (
  <div
    style={{
      background: bg,
      borderRadius: layout.card.radius,
      padding: layout.card.padding,
      display: 'flex',
      flexDirection: 'column',
      gap: 28,
      height: '100%',
      boxSizing: 'border-box',
    }}
  >
    {icon && (
      <div
        style={{
          width: 80,
          height: 80,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 48,
        }}
      >
        {icon}
      </div>
    )}
    {heading && <div style={{ ...typeScale.h3, color: headingColor }}>{heading}</div>}
    {body && <div style={{ ...typeScale.body, color: bodyColor, opacity: 0.85 }}>{body}</div>}
  </div>
);
