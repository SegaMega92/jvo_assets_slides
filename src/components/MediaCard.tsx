import React from 'react';
import { type as typeScale, colors, layout } from '../tokens';

/**
 * MediaCard — карточка «изображение сверху + заголовок + текст».
 *
 * Источник: КП Дживио сл.9 (фичи технологии: картинка + описание),
 * DashboardShowcase. image — src строкой или готовый ReactNode.
 *
 * Слоты: image, heading, body.
 */

interface MediaCardProps {
  image?: React.ReactNode | string;
  heading?: React.ReactNode;
  body?: React.ReactNode;
  imageHeight?: number;
  bg?: string;
  imageBg?: string;
}

export const MediaCard: React.FC<MediaCardProps> = ({
  image,
  heading,
  body,
  imageHeight = 360,
  bg = colors.bg.white,
  imageBg = colors.bg.softGray,
}) => (
  <div
    style={{
      background: bg,
      borderRadius: layout.card.radius,
      overflow: 'hidden',
      border: `2px solid ${colors.border.subtle}`,
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      boxSizing: 'border-box',
    }}
  >
    <div style={{ height: imageHeight, background: imageBg, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      {typeof image === 'string'
        ? <img src={image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        : image}
    </div>
    <div style={{ padding: layout.card.padding, display: 'flex', flexDirection: 'column', gap: 16 }}>
      {heading && <div style={{ ...typeScale.h3, color: colors.text.primary }}>{heading}</div>}
      {body && <div style={{ ...typeScale.body, color: colors.text.primary, opacity: 0.85 }}>{body}</div>}
    </div>
  </div>
);
