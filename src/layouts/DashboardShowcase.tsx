import React from 'react';
import { SlideFrame } from './SlideFrame';
import { SlideHeader } from './SlideHeader';
import { type, layout, colors, type ThemeName } from '../tokens';

/**
 * Лейаут 4: Заголовок + большая медиа (скриншот/дашборд) + карточки фич снизу.
 *
 * Слоты:
 *   - title (optional)
 *   - lead (optional)
 *   - media (required) — большая картинка/скриншот
 *   - features (optional) — карточки с фичами
 */

export interface Feature {
  heading?: React.ReactNode;
  body?: React.ReactNode;
  icon?: React.ReactNode;
}

interface DashboardShowcaseProps {
  title?: React.ReactNode;
  lead?: React.ReactNode;
  media: React.ReactNode;
  features?: Feature[];
  theme?: ThemeName;
  mediaWidth?: number;  // % ширины body
}

export const DashboardShowcase: React.FC<DashboardShowcaseProps> = ({
  title,
  lead,
  media,
  features,
  theme = 'light',
  mediaWidth = 55,
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
        gap: layout.card.gap * 2,
      }}>
        {features && features.length > 0 && (
          <div style={{
            flex: `0 0 ${100 - mediaWidth}%`,
            display: 'grid',
            gridTemplateColumns: features.length > 2 ? '1fr 1fr' : '1fr',
            gridAutoRows: 'minmax(0, 1fr)',
            gap: layout.card.gap,
          }}>
            {features.map((f, i) => (
              <div key={i} style={{
                background: colors.bg.softGray,
                borderRadius: layout.card.radius,
                padding: layout.card.padding * 0.75,
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
              }}>
                {f.icon}
                {f.heading && <div style={type.cardTitle}>{f.heading}</div>}
                {f.body && <div style={type.small}>{f.body}</div>}
              </div>
            ))}
          </div>
        )}
        <div style={{
          flex: features ? `0 0 ${mediaWidth}%` : '1 1 100%',
          background: colors.bg.softGray,
          borderRadius: layout.card.radius,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {media}
        </div>
      </div>
    </SlideFrame>
  );
};
