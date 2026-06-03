import React from 'react';
import { type as typeScale, colors, fonts } from '../tokens';

/**
 * ProgressBar — линейная полоса прогресса / доли.
 *
 * JVO-примитив для конструктора (выполнение, доля рынка, рейтинг).
 *
 * Слоты: label (слева сверху), value (0..100), display (подпись значения).
 */

interface ProgressBarProps {
  value: number; // 0..100
  label?: React.ReactNode;
  display?: React.ReactNode;
  color?: string;
  trackColor?: string;
  height?: number;
  showValue?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  label,
  display,
  color = colors.brand.pink,
  trackColor = colors.bg.softGray,
  height = 40,
  showValue = true,
}) => {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14, width: '100%' }}>
      {(label || showValue) && (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          {label && <div style={{ ...typeScale.body, color: colors.text.primary }}>{label}</div>}
          {showValue && (
            <div style={{ fontFamily: fonts.display, fontSize: 32, fontWeight: 600, color }}>
              {display ?? `${pct}%`}
            </div>
          )}
        </div>
      )}
      <div style={{ width: '100%', height, background: trackColor, borderRadius: 999, overflow: 'hidden' }}>
        <div style={{ width: `${pct}%`, height: '100%', background: color, borderRadius: 999, minWidth: height }} />
      </div>
    </div>
  );
};
