import React from 'react';
import { SlideFrame } from './SlideFrame';
import { type, layout, type ThemeName } from '../tokens';

/**
 * Лейаут 8: Заголовок (центрированный) + большая картинка под ним.
 *
 * Слоты:
 *   - title (required) — центрированный заголовок
 *   - inlineTag (optional) — pill в одной строке с title
 *   - image (required) — почти fullscreen картинка
 */

interface FullBleedImageProps {
  title: React.ReactNode;
  inlineTag?: React.ReactNode;
  image: React.ReactNode;
  theme?: ThemeName;
  imageBg?: string;
}

export const FullBleedImage: React.FC<FullBleedImageProps> = ({
  title,
  inlineTag,
  image,
  theme = 'light',
  imageBg,
}) => (
  <SlideFrame theme={theme}>
    <div style={{
      position: 'absolute',
      left: layout.slidePadX * 4,
      right: layout.slidePadX * 4 + layout.logoSize + 24,
      top: layout.slidePadY,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 24,
      flexWrap: 'wrap',
      textAlign: 'center',
      minHeight: 160,
    }}>
      <div style={type.title}>{title}</div>
      {inlineTag && <div style={{ display: 'inline-block' }}>{inlineTag}</div>}
    </div>
    <div style={{
      position: 'absolute',
      left: layout.slidePadX,
      right: layout.slidePadX,
      top: 280,
      bottom: layout.slidePadY,
      background: imageBg,
      borderRadius: layout.card.radius,
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      {image}
    </div>
  </SlideFrame>
);
