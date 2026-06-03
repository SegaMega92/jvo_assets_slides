import React from 'react';
import { colors, fonts } from '../tokens';

/**
 * Harness для превью компонентов в Storybook.
 * Компоненты-слоты не полноэкранные — Stage даёт им фон и паддинг,
 * чтобы изолированно посмотреть слот так, как он выглядит внутри слайда.
 *
 * НЕ слот-компонент — только обёртка для stories.
 */

interface StageProps {
  /** фон сцены: пресет или свой hex */
  bg?: 'light' | 'dark' | 'pink' | 'lime' | string;
  /** ограничить ширину области (px на 1920-канвасе) */
  width?: number;
  /** выровнять контент по центру или растянуть */
  align?: 'start' | 'center';
  children: React.ReactNode;
}

const PRESETS: Record<string, { bg: string; text: string }> = {
  light: { bg: colors.bg.white, text: colors.text.primary },
  dark: { bg: colors.bg.dark, text: colors.text.onDark },
  pink: { bg: colors.brand.pinkLight, text: colors.brand.eggplant },
  lime: { bg: colors.accent.lime, text: colors.accent.limeDark },
};

export const Stage: React.FC<StageProps> = ({
  bg = 'light',
  width,
  align = 'start',
  children,
}) => {
  const preset = PRESETS[bg];
  const background = preset?.bg ?? bg;
  const color = preset?.text ?? colors.text.primary;

  return (
    <div
      style={{
        fontFamily: fonts.body,
        background,
        color,
        minHeight: '100vh',
        boxSizing: 'border-box',
        padding: 64,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: align === 'center' ? 'center' : 'stretch',
      }}
    >
      <div style={{ width: width ?? '100%', maxWidth: 1920 }}>{children}</div>
    </div>
  );
};
