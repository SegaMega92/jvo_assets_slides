import React from 'react';
import { fonts } from '../tokens';

/**
 * SlideStage — фиксированный холст слайда 1920×1080 (16:9), масштабируется
 * под размер iframe в Storybook. Дочерние элементы позиционируются абсолютно
 * через <Abs> в координатах исходного PPTX (960×540), которые домножаются на 2.
 *
 * Источник координат — extracted/<deck>/slideNN.json (px при 96dpi на 960×540).
 */

export const STAGE_W = 1920;
export const STAGE_H = 1080;
export const SCALE = 2; // 960×540 → 1920×1080

interface SlideStageProps {
  /** фон слайда: hex или CSS-градиент */
  background?: string;
  children: React.ReactNode;
}

export const SlideStage: React.FC<SlideStageProps> = ({
  background = '#FBFBFB',
  children,
}) => {
  // Масштаб считаем в JS: scale() принимает число, а CSS calc(длина/длина)
  // даёт длину (невалидно), поэтому вписываем холст 1920×1080 через ResizeObserver.
  const [scale, setScale] = React.useState(1);
  React.useLayoutEffect(() => {
    const fit = () => {
      const w = window.innerWidth || STAGE_W;
      const h = window.innerHeight || STAGE_H;
      setScale(Math.min(w / STAGE_W, h / STAGE_H));
    };
    fit();
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#1a1a1a',
        overflow: 'hidden',
      }}
    >
      <div
        data-slide-stage
        style={{
          position: 'relative',
          width: STAGE_W,
          height: STAGE_H,
          flex: '0 0 auto',
          background,
          fontFamily: fonts.body,
          overflow: 'hidden',
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
        }}
      >
        {children}
      </div>
    </div>
  );
};

/** Абсолютно позиционированный блок. Координаты — в системе PPTX 960×540 (px@96). */
interface AbsProps extends React.HTMLAttributes<HTMLDivElement> {
  x: number;
  y: number;
  w?: number;
  h?: number;
  rotate?: number;
  z?: number;
}

export const Abs: React.FC<AbsProps> = ({
  x, y, w, h, rotate, z, style, children, ...rest
}) => (
  <div
    style={{
      position: 'absolute',
      left: x * SCALE,
      top: y * SCALE,
      width: w != null ? w * SCALE : undefined,
      height: h != null ? h * SCALE : undefined,
      zIndex: z,
      transform: rotate ? `rotate(${rotate}deg)` : undefined,
      boxSizing: 'border-box',
      ...style,
    }}
    {...rest}
  >
    {children}
  </div>
);

/** px-хелпер: переводит координату PPTX (960×540) в px холста (1920×1080). */
export const u = (v: number) => v * SCALE;

/** pt→px на холсте 1920: слайд 10in=720pt → 1920px, т.е. 1pt = 2.667px. */
export const pt = (p: number) => (p * STAGE_W) / 720;

/** Базовый путь к извлечённым ассетам деков (смонтирован в Storybook). */
export const ASSET_BASE = '/v2assets';
