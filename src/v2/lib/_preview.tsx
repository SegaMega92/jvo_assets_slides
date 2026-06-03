import React from 'react';
import { fonts } from '../../tokens';

/**
 * Декоратор-подложка для stories библиотеки: нейтральный фон, центрирование,
 * шрифт Manrope. Компоненты библиотеки автономны (без абсолютных координат) —
 * подложка лишь даёт им контекст для превью.
 */
export const Backdrop =
  (opts: { bg?: string; dark?: boolean; pad?: number } = {}) =>
  (Story: React.FC) =>
    (
      <div
        style={{
          minHeight: '100vh',
          boxSizing: 'border-box',
          padding: opts.pad ?? 80,
          background: opts.bg ?? (opts.dark ? '#15181F' : '#F2F3FA'),
          fontFamily: fonts.body,
          display: 'flex',
          flexWrap: 'wrap',
          gap: 40,
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}
      >
        <Story />
      </div>
    );

/** Ряд для показа нескольких вариантов рядом. */
export const Row: React.FC<{ children: React.ReactNode; gap?: number; align?: string }> = ({ children, gap = 40, align = 'flex-start' }) => (
  <div style={{ display: 'flex', gap, alignItems: align as React.CSSProperties['alignItems'], flexWrap: 'wrap' }}>{children}</div>
);
