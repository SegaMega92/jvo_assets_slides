import React from 'react';
import { type as typeScale, colors, fonts, layout } from '../tokens';

/**
 * BeforeAfterMetric — метрика «до → после» с дельтой.
 *
 * Источник: «Студия» слайды 5–6 (кейсы): блок «Выручка» с «до: 2,8 млн ₽»,
 * «после: 4,5 млн ₽» и крупной дельтой «+ 60%».
 *
 * Слоты: label, before, after, delta. Цвет дельты — авто по знаку (+/-).
 */

interface BeforeAfterMetricProps {
  label: React.ReactNode;
  before?: React.ReactNode;
  after?: React.ReactNode;
  delta: React.ReactNode;
  /** направление «хорошего» изменения: для ДДР рост — плохо */
  positive?: boolean;
  bg?: string;
}

export const BeforeAfterMetric: React.FC<BeforeAfterMetricProps> = ({
  label,
  before,
  after,
  delta,
  positive = true,
  bg = colors.bg.white,
}) => {
  const deltaColor = positive ? colors.semantic.success : colors.brand.pink;
  return (
    <div
      style={{
        background: bg,
        borderRadius: layout.card.radius,
        padding: 36,
        display: 'flex',
        flexDirection: 'column',
        gap: 18,
        boxSizing: 'border-box',
        height: '100%',
      }}
    >
      <div style={{ ...typeScale.cardTitle, fontSize: 32, color: colors.text.primary }}>{label}</div>

      {(before != null || after != null) && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {before != null && (
            <div style={{ ...typeScale.small, color: colors.text.mutedMid }}>
              до: <span style={{ color: colors.text.primary, fontWeight: 600 }}>{before}</span>
            </div>
          )}
          {after != null && (
            <div style={{ ...typeScale.small, color: colors.text.mutedMid }}>
              после: <span style={{ color: colors.text.primary, fontWeight: 600 }}>{after}</span>
            </div>
          )}
        </div>
      )}

      <div
        style={{
          fontFamily: fonts.display,
          fontSize: 56,
          fontWeight: 600,
          lineHeight: 1,
          color: deltaColor,
        }}
      >
        {delta}
      </div>
    </div>
  );
};
