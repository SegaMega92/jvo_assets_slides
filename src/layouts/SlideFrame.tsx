import React, { useEffect, useState } from 'react';
import { SLIDE_W, SLIDE_H, layout, themes, type ThemeName } from '../tokens';

/**
 * Базовая обёртка слайда 1920×1080.
 * Авто-скейл: JS меряет viewport и применяет transform: scale.
 * (CSS-only нельзя — scale() требует unitless, а calc(100vw/N) даёт length.)
 */

interface SlideFrameProps {
  theme?: ThemeName;
  bg?: string;
  bgImage?: string;
  textColor?: string;
  showLogo?: boolean;
  logoVariant?: 'auto' | 'dark' | 'light';
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const useFitScale = (designW: number, designH: number, padding = 32) => {
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth - padding * 2;
      const h = window.innerHeight - padding * 2;
      setScale(Math.min(w / designW, h / designH, 1.5));
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [designW, designH, padding]);
  return scale;
};

export const SlideFrame: React.FC<SlideFrameProps> = ({
  theme = 'light',
  bg,
  bgImage,
  textColor,
  showLogo = true,
  logoVariant = 'auto',
  children,
  style,
}) => {
  const t = themes[theme];
  const background = bg ?? t.bg;
  const color = textColor ?? t.text;
  const scale = useFitScale(SLIDE_W, SLIDE_H);

  const isLight = (background.startsWith('#F') || background === '#FFFFFF' || theme === 'light' || theme === 'pinkPastel' || theme === 'lime');
  const logoSrc = logoVariant === 'dark' || (logoVariant === 'auto' && isLight)
    ? '/logo/logo-dark.svg'
    : '/logo/logo-light.svg';

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: '#e5e5e5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          width: SLIDE_W,
          height: SLIDE_H,
          position: 'relative',
          overflow: 'hidden',
          background,
          color,
          flexShrink: 0,
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
          boxShadow: '0 8px 40px rgba(0,0,0,0.15)',
          ...(bgImage && {
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }),
          ...style,
        }}
      >
        {children}
        {showLogo && (
          <img
            src={logoSrc}
            alt="JVO"
            style={{
              position: 'absolute',
              top: layout.logoOffsetTop,
              right: layout.logoOffsetRight,
              height: layout.logoSize,
              width: 'auto',
              zIndex: 10,
            }}
          />
        )}
      </div>
    </div>
  );
};
