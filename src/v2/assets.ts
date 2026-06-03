import { ASSET_BASE } from './SlideStage';

/** URL извлечённой картинки дека: img(deck, 'img_xxx.png'). */
export const img = (deck: string, file: string) => `${ASSET_BASE}/${deck}/${file}`;

export const DECKS = {
  enterprise: 'enterprise',
  kp: 'kp_djivio',
  studia: 'studia',
} as const;
