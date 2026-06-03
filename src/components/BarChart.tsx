import React from 'react';
import { type as typeScale, colors, fonts } from '../tokens';

/**
 * BarChart — столбчатая диаграмма (горизонтальная или вертикальная).
 *
 * В исходных PPTX графики рисовались вручную автофигурами — это
 * переиспользуемый JVO-примитив для конструктора (рост рынка, до/после и т.п.).
 *
 * Слоты: data[] = { label, value, color? }.
 */

export interface BarDatum {
  label: React.ReactNode;
  value: number;
  /** подпись значения; по умолчанию = value */
  display?: React.ReactNode;
  color?: string;
}

interface BarChartProps {
  data: BarDatum[];
  orientation?: 'horizontal' | 'vertical';
  /** максимум шкалы; по умолчанию = max(value) */
  max?: number;
  accent?: string;
  trackColor?: string;
  showValue?: boolean;
  height?: number;
}

export const BarChart: React.FC<BarChartProps> = ({
  data,
  orientation = 'horizontal',
  max,
  accent = colors.brand.pink,
  trackColor = colors.bg.softGray,
  showValue = true,
  height = 420,
}) => {
  const peak = max ?? Math.max(...data.map((d) => d.value), 1);

  if (orientation === 'vertical') {
    return (
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 28, height }}>
        {data.map((d, i) => {
          const h = (d.value / peak) * 100;
          return (
            <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, height: '100%' }}>
              <div style={{ flex: 1, width: '100%', display: 'flex', alignItems: 'flex-end' }}>
                <div style={{
                  width: '100%',
                  height: `${h}%`,
                  background: d.color ?? accent,
                  borderRadius: '16px 16px 0 0',
                  position: 'relative',
                  minHeight: 8,
                }}>
                  {showValue && (
                    <div style={{
                      position: 'absolute', top: -56, left: 0, right: 0, textAlign: 'center',
                      fontFamily: fonts.display, fontSize: 40, fontWeight: 600, color: colors.text.primary,
                    }}>
                      {d.display ?? d.value}
                    </div>
                  )}
                </div>
              </div>
              <div style={{ ...typeScale.small, color: colors.text.mutedMid, textAlign: 'center' }}>{d.label}</div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
      {data.map((d, i) => {
        const w = (d.value / peak) * 100;
        return (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
            <div style={{ ...typeScale.body, width: 320, flexShrink: 0, color: colors.text.primary }}>{d.label}</div>
            <div style={{ flex: 1, height: 56, background: trackColor, borderRadius: 999, overflow: 'hidden' }}>
              <div style={{
                width: `${w}%`,
                height: '100%',
                background: d.color ?? accent,
                borderRadius: 999,
                minWidth: 8,
              }} />
            </div>
            {showValue && (
              <div style={{ fontFamily: fonts.display, fontSize: 36, fontWeight: 600, width: 160, textAlign: 'right', color: colors.text.primary }}>
                {d.display ?? d.value}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
