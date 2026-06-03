import React from 'react';
import { type as typeScale, colors } from '../tokens';

/**
 * Divider — горизонтальный разделитель с опциональной подписью/плашкой.
 *
 * Источник: «Студия» сл.3–4 (линия-разделитель + tag «Что входит:»).
 *
 * Слот: label (по центру или слева, на линии).
 */

interface DividerProps {
  label?: React.ReactNode;
  align?: 'start' | 'center';
  color?: string;
  labelColor?: string;
  thickness?: number;
}

export const Divider: React.FC<DividerProps> = ({
  label,
  align = 'center',
  color = colors.border.divider,
  labelColor = colors.text.mutedMid,
  thickness = 2,
}) => {
  const line = <div style={{ flex: 1, height: thickness, background: color }} />;
  if (!label) return line;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 28, width: '100%' }}>
      {align === 'center' && line}
      <span style={{ ...typeScale.small, color: labelColor, whiteSpace: 'nowrap', fontWeight: 600 }}>{label}</span>
      {line}
    </div>
  );
};
