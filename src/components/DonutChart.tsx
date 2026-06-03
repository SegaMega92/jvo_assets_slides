import React from 'react';
import { type as typeScale, colors, fonts } from '../tokens';

/**
 * DonutChart — кольцевая диаграмма из сегментов + опциональный центр и легенда.
 *
 * JVO-примитив для конструктора (структура трафика, доли категорий).
 *
 * Слоты: segments[] = { value, color, label? }, center (ReactNode в центре).
 */

export interface DonutSegment {
  value: number;
  color: string;
  label?: React.ReactNode;
}

interface DonutChartProps {
  segments: DonutSegment[];
  size?: number;
  thickness?: number;
  center?: React.ReactNode;
  legend?: boolean;
  gap?: number; // зазор между сегментами, в градусах
}

export const DonutChart: React.FC<DonutChartProps> = ({
  segments,
  size = 360,
  thickness = 56,
  center,
  legend = true,
  gap = 2,
}) => {
  const total = segments.reduce((s, x) => s + x.value, 0) || 1;
  const r = (size - thickness) / 2;
  const c = 2 * Math.PI * r;
  let offset = 0;

  const arcs = segments.map((seg, i) => {
    const frac = seg.value / total;
    const len = Math.max(c * frac - gap, 0);
    const dash = `${len} ${c - len}`;
    const arc = (
      <circle
        key={i}
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={seg.color}
        strokeWidth={thickness}
        strokeDasharray={dash}
        strokeDashoffset={-offset}
        strokeLinecap="butt"
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
    );
    offset += c * frac;
    return arc;
  });

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 48 }}>
      <div style={{ position: 'relative', width: size, height: size, flexShrink: 0 }}>
        <svg width={size} height={size}>{arcs}</svg>
        {center != null && (
          <div style={{
            position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', textAlign: 'center',
          }}>
            {center}
          </div>
        )}
      </div>
      {legend && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          {segments.map((seg, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <span style={{ width: 28, height: 28, borderRadius: 8, background: seg.color, flexShrink: 0 }} />
              <span style={{ ...typeScale.small, color: colors.text.primary }}>{seg.label}</span>
              <span style={{ ...typeScale.small, color: colors.text.mutedMid, fontWeight: 600 }}>
                {Math.round((seg.value / total) * 100)}%
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

/**
 * ProgressRing — частный случай DonutChart: одно значение в % + крупное число в центре.
 */
interface ProgressRingProps {
  value: number; // 0..100
  size?: number;
  thickness?: number;
  color?: string;
  trackColor?: string;
  label?: React.ReactNode;
}

export const ProgressRing: React.FC<ProgressRingProps> = ({
  value,
  size = 320,
  thickness = 48,
  color = colors.brand.pink,
  trackColor = colors.bg.softGray,
  label,
}) => (
  <DonutChart
    size={size}
    thickness={thickness}
    gap={0}
    legend={false}
    segments={[
      { value, color },
      { value: Math.max(100 - value, 0), color: trackColor },
    ]}
    center={
      <>
        <div style={{ fontFamily: fonts.display, fontSize: size * 0.22, fontWeight: 600, lineHeight: 1, color: colors.text.primary }}>
          {value}%
        </div>
        {label && <div style={{ ...typeScale.small, color: colors.text.mutedMid, marginTop: 8 }}>{label}</div>}
      </>
    }
  />
);
