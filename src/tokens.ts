/**
 * Дизайн-токены JVO — единая точка правды для цветов, типографики и геометрии.
 * Источник: analysis/color_roles.json + typography_scale.json + layout_catalog.md
 *
 * Канвас слайда — 1920×1080 (2x от исходных PPTX 960×540).
 */

export const SLIDE_W = 1920;
export const SLIDE_H = 1080;
export const SLIDE_SCALE = 2; // 1 design unit (960×540) = 2 px (1920×1080)

// ──────────────────────────────────────────────────────────────────
// ЦВЕТА
// ──────────────────────────────────────────────────────────────────

export const colors = {
  brand: {
    pink: '#FF8FDA',
    pinkLight: '#FFE4F6',
    pinkPale: '#FFCFEF',
    eggplant: '#410031',
  },
  accent: {
    purple: '#34034C',
    purpleLight: '#EAD7FE',
    purplePale: '#E0B7FE',
    lime: '#D8F995',
    limePale: '#EBF9C1',
    limeDark: '#1F2A09',
    limeText: '#D6FE9E',
  },
  bg: {
    white: '#FFFFFF',
    offwhite: '#FBFBFB',
    softGray: '#F2F3FA',
    dark: '#15181F',
  },
  text: {
    primary: '#410031',
    primaryAlt: '#15181F',
    black: '#000000',
    onDark: '#FFFFFF',
    muted: '#999999',
    mutedDark: '#595959',
    mutedMid: '#666666',
  },
  border: {
    subtle: '#EFEFEF',
    divider: '#F3F3F3',
    rule: '#595959',
  },
  semantic: {
    info: '#4285F4',
    warning: '#FFAB40',
    success: '#9ECF38',
  },
} as const;

// ──────────────────────────────────────────────────────────────────
// ТИПОГРАФИКА (1920×1080 канвас)
// ──────────────────────────────────────────────────────────────────

export const fonts = {
  display: '"Unbounded", system-ui, sans-serif',
  body: '"Manrope", system-ui, sans-serif',
} as const;

export interface TypeStyle {
  fontFamily: string;
  fontSize: number;     // px на 1920 канвасе
  fontWeight: number;
  lineHeight: number;
  color: string;
}

export const type: Record<string, TypeStyle> = {
  display: {
    fontFamily: fonts.display,
    fontSize: 128,
    fontWeight: 600,
    lineHeight: 1.1,
    color: colors.text.primary,
  },
  sectionTitle: {
    fontFamily: fonts.display,
    fontSize: 101,
    fontWeight: 600,
    lineHeight: 1.15,
    color: colors.text.primaryAlt,
  },
  title: {
    fontFamily: fonts.display,
    fontSize: 75,
    fontWeight: 600,
    lineHeight: 1.15,
    color: colors.text.primary,
  },
  h3: {
    fontFamily: fonts.display,
    fontSize: 53,
    fontWeight: 600,
    lineHeight: 1.2,
    color: colors.text.primary,
  },
  h4: {
    fontFamily: fonts.display,
    fontSize: 48,
    fontWeight: 600,
    lineHeight: 1.25,
    color: colors.accent.purple,
  },
  cardTitle: {
    fontFamily: fonts.display,
    fontSize: 43,
    fontWeight: 600,
    lineHeight: 1.25,
    color: colors.text.black,
  },
  body: {
    fontFamily: fonts.body,
    fontSize: 32,
    fontWeight: 500,
    lineHeight: 1.4,
    color: colors.text.primary,
  },
  small: {
    fontFamily: fonts.body,
    fontSize: 27,
    fontWeight: 500,
    lineHeight: 1.4,
    color: colors.text.primary,
  },
  caption: {
    fontFamily: fonts.body,
    fontSize: 24,
    fontWeight: 500,
    lineHeight: 1.4,
    color: colors.text.muted,
  },
  micro: {
    fontFamily: fonts.display,
    fontSize: 21,
    fontWeight: 500,
    lineHeight: 1.3,
    color: colors.text.primary,
  },
} as const;

// ──────────────────────────────────────────────────────────────────
// ГЕОМЕТРИЯ (1920×1080 канвас)
// ──────────────────────────────────────────────────────────────────
// Все значения в px для 1920×1080.
// Базовая 2% = 38px = `gap`.

export const layout = {
  // Внешние отступы слайда — 2% × 2 = 38px
  slidePadX: 38,
  slidePadY: 38,

  // Title bar — слева, ~70% ширины, 28pt = 75px
  titleX: 38,
  titleY: 38,
  titleMaxW: 1344, // ~70%

  // Логотип — правый верх, ~4.3% × 7.7%
  logoSize: 80,        // ~4.3% × 1920 ≈ 82px → 80
  logoOffsetTop: 38,   // 3.5% × 1080 ≈ 38
  logoOffsetRight: 38, // ~3% × 1920 ≈ 38

  // Body — начинается с ~16% от верха
  bodyTop: 280,        // 280px = 26% — отступ от логотипа и заголовка
  bodyPadX: 38,

  // Карточки
  card: {
    padding: 48,
    radius: 24,
    gap: 32,
  },
} as const;

// ──────────────────────────────────────────────────────────────────
// ТЕМЫ — переключаемые наборы цветов
// ──────────────────────────────────────────────────────────────────

export interface SlideTheme {
  bg: string;
  text: string;
  textMuted: string;
  accent: string;
}

export const themes = {
  light: {
    bg: colors.bg.white,
    text: colors.text.primary,
    textMuted: colors.text.muted,
    accent: colors.brand.pink,
  },
  dark: {
    bg: colors.bg.dark,
    text: colors.text.onDark,
    textMuted: colors.text.muted,
    accent: colors.brand.pink,
  },
  eggplant: {
    bg: colors.brand.eggplant,
    text: colors.text.onDark,
    textMuted: colors.brand.pinkPale,
    accent: colors.brand.pink,
  },
  pinkPastel: {
    bg: colors.brand.pinkLight,
    text: colors.brand.eggplant,
    textMuted: colors.text.mutedDark,
    accent: colors.brand.pink,
  },
  lime: {
    bg: colors.accent.lime,
    text: colors.accent.limeDark,
    textMuted: colors.text.mutedDark,
    accent: colors.accent.limeDark,
  },
  limeDark: {
    bg: colors.accent.limeDark,
    text: colors.accent.limeText,
    textMuted: colors.text.muted,
    accent: colors.accent.lime,
  },
  purple: {
    bg: colors.accent.purple,
    text: colors.text.onDark,
    textMuted: colors.accent.purpleLight,
    accent: colors.accent.purpleLight,
  },
} as const satisfies Record<string, SlideTheme>;

export type ThemeName = keyof typeof themes;
