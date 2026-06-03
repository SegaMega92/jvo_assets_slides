import React from 'react';
import { type as typeScale, colors, fonts, layout } from '../tokens';

/**
 * ComparisonTable — таблица сравнения: строки-фичи × колонки-варианты.
 *
 * Значения: ✓ / ✗ / текст. Одну колонку можно выделить (featured).
 * Источник: тарифные/сравнительные таблицы КП Дживио.
 *
 * Слоты: columns[] = { name, featured? }, rows[] = { label, values[] }.
 */

export interface CompColumn {
  name: React.ReactNode;
  sub?: React.ReactNode;
  featured?: boolean;
}

export interface CompRow {
  label: React.ReactNode;
  values: React.ReactNode[]; // по одному на колонку; true/false → ✓/✗
}

interface ComparisonTableProps {
  columns: CompColumn[];
  rows: CompRow[];
  accent?: string;
  labelWidth?: number;
}

const renderValue = (v: React.ReactNode, accent: string): React.ReactNode => {
  if (v === true) return <span style={{ color: accent, fontSize: 36, fontWeight: 700 }}>✓</span>;
  if (v === false) return <span style={{ color: colors.text.muted, fontSize: 32 }}>—</span>;
  return v;
};

export const ComparisonTable: React.FC<ComparisonTableProps> = ({
  columns,
  rows,
  accent = colors.brand.pink,
  labelWidth = 520,
}) => {
  // minmax(0,1fr) — чтобы длинное неразрывное слово в заголовке (напр. «Самостоятельно»)
  // не распирало колонку и не обрезалось overflow:hidden, а переносилось.
  const grid = `${labelWidth}px repeat(${columns.length}, minmax(0, 1fr))`;
  return (
    <div style={{ background: colors.bg.white, borderRadius: layout.card.radius, overflow: 'hidden', border: `2px solid ${colors.border.subtle}` }}>
      {/* header */}
      <div style={{ display: 'grid', gridTemplateColumns: grid }}>
        <div />
        {columns.map((col, i) => (
          <div
            key={i}
            style={{
              background: col.featured ? accent : 'transparent',
              color: col.featured ? colors.bg.white : colors.text.primary,
              padding: '28px 24px',
              textAlign: 'center',
              overflowWrap: 'break-word',
              wordBreak: 'break-word',
            }}
          >
            <div style={{ fontFamily: fonts.display, fontSize: 36, fontWeight: 600, overflowWrap: 'break-word', wordBreak: 'break-word' }}>{col.name}</div>
            {col.sub && <div style={{ ...typeScale.caption, color: col.featured ? 'rgba(255,255,255,0.8)' : colors.text.mutedMid, marginTop: 4 }}>{col.sub}</div>}
          </div>
        ))}
      </div>
      {/* rows */}
      {rows.map((row, ri) => (
        <div key={ri} style={{ display: 'grid', gridTemplateColumns: grid, borderTop: `1px solid ${colors.border.subtle}` }}>
          <div style={{ ...typeScale.body, padding: '24px 32px', color: colors.text.primary, display: 'flex', alignItems: 'center' }}>
            {row.label}
          </div>
          {columns.map((col, ci) => (
            <div
              key={ci}
              style={{
                padding: '24px',
                textAlign: 'center',
                ...typeScale.body,
                color: colors.text.primary,
                background: col.featured ? `${accent}14` : 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {renderValue(row.values[ci], accent)}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
