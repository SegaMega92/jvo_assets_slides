/**
 * Базовый URL сборки. Локально и при деплое в корень = '/'.
 * На GitHub Pages в подпапке репозитория Vite подставит '/jvo_assets_slides/'
 * (через base в .storybook/main.ts). import.meta.env.BASE_URL — стандартный механизм Vite.
 */
export const BASE: string =
  (typeof import.meta !== 'undefined' && (import.meta as any).env && (import.meta as any).env.BASE_URL) || '/';

/** Префиксует путь к статике base-ом сборки, чтобы ассеты работали и на подпути Pages. */
export const asset = (path: string): string => BASE.replace(/\/$/, '') + '/' + String(path).replace(/^\/+/, '');

/** URL извлечённой картинки дека: img(deck, 'img_xxx.png'). */
export const img = (deck: string, file: string) => asset(`v2assets/${deck}/${file}`);

export const DECKS = {
  enterprise: 'enterprise',
  kp: 'kp_djivio',
  studia: 'studia',
} as const;
