import React from 'react';
import { colors, fonts } from '../../tokens';
import { Surface, Check } from './primitives';

/** Таблицы JVO — автономные. Размеры в px на канвасе 1920×1080. */
const F = fonts;

// ─────────────────────────────────────────── PriceList
export interface PriceRow { label: string; value: string }
export interface PriceListProps {
  rows: PriceRow[];
  /** Приглушить (для «дополнительных» колонок pay-as-you-go) */
  muted?: boolean;
  labelColor?: string;
  width?: number;
}
/** Прайс-лист «услуга … цена». Колонки тарификации Pay-as-you-go (КП s28–31). */
export const PriceList: React.FC<PriceListProps> = ({ rows, muted = false, labelColor = colors.text.primaryAlt, width = 560 }) => (
  <div style={{ width, opacity: muted ? 0.55 : 1 }}>
    {rows.map((r, i) => (
      <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24, padding: '14px 0', borderTop: i ? '1px solid #EFE6EE' : 'none' }}>
        <span style={{ fontFamily: F.body, fontWeight: 500, fontSize: 22, color: labelColor, lineHeight: 1.25 }}>{r.label}</span>
        <span style={{ fontFamily: F.body, fontWeight: 600, fontSize: 22, color: labelColor, whiteSpace: 'nowrap' }}>{r.value}</span>
      </div>
    ))}
  </div>
);

// ─────────────────────────────────────────── ComparisonTable
export interface ComparisonRowData { label: string; cells: boolean[] }
export interface ComparisonTableProps {
  /** Заголовок столбца параметров */
  paramHeader?: string;
  /** Названия столбцов (продукты) */
  columns: string[];
  /** Строки: критерий + значения ✓/— по столбцам */
  rows: ComparisonRowData[];
  /** Индекс выделенного столбца (наш продукт) */
  highlightCol?: number;
  width?: number;
}
/** Таблица сравнения с конкурентами: критерии × продукты, ✓ / —, подсвеченный столбец (КП s24). */
export const ComparisonTable: React.FC<ComparisonTableProps> = ({ paramHeader = 'Параметры', columns, rows, highlightCol = 0, width = 1580 }) => {
  const paramW = 0.42, colW = (1 - paramW) / columns.length;
  return (
    <Surface background="#FFFFFF" border="1px solid #ECE3E9" radius={28} padding={0} width={width} style={{ overflow: 'hidden' }}>
      <div style={{ position: 'relative' }}>
        {/* подсветка столбца */}
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: `calc(${paramW * 100}% + ${highlightCol * colW * 100}%)`, width: `${colW * 100}%`, background: '#F3EAFB' }} />
        <table style={{ position: 'relative', width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed' }}>
          <colgroup><col style={{ width: `${paramW * 100}%` }} />{columns.map((_, i) => <col key={i} style={{ width: `${colW * 100}%` }} />)}</colgroup>
          <thead>
            <tr>
              <th style={{ textAlign: 'left', padding: '24px 28px', fontFamily: F.display, fontWeight: 600, fontSize: 22, color: colors.text.primaryAlt }}>{paramHeader}</th>
              {columns.map((c, i) => (
                <th key={i} style={{ padding: '24px 8px', fontFamily: F.display, fontWeight: 600, fontSize: 22, color: i === highlightCol ? colors.brand.eggplant : '#999' }}>{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, ri) => (
              <tr key={ri} style={{ borderTop: '1px solid #F0E6EE' }}>
                <td style={{ padding: '18px 28px', fontFamily: F.body, fontWeight: 500, fontSize: 17, color: colors.text.primaryAlt, lineHeight: 1.25 }}>{r.label}</td>
                {r.cells.map((v, ci) => (
                  <td key={ci} style={{ textAlign: 'center', padding: '18px 8px' }}>
                    {v
                      ? <span style={{ display: 'inline-flex' }}><Check size={32} background={ci === highlightCol ? colors.accent.limeDark : colors.accent.lime} mark={ci === highlightCol ? colors.accent.lime : colors.accent.limeDark} /></span>
                      : <span style={{ fontFamily: F.body, fontSize: 24, color: '#C9B7C5' }}>—</span>}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Surface>
  );
};

// ─────────────────────────────────────────── AttributeTable
export interface AttributeTableProps {
  /** Заголовки столбцов; первый — название атрибута */
  headers: string[];
  /** Строки значений; в ячейках можно использовать ▲ / ▼ (подсветятся цветом) */
  rows: string[][];
  /** Индекс выделенного столбца (ваша карточка) */
  highlightCol?: number;
  width?: number;
}
const arrowize = (s: string) => {
  const up = s.includes('▲'), dn = s.includes('▼');
  return <>{s.replace(/[▲▼]/g, '')}{up && <span style={{ color: '#3AA655' }}> ▲</span>}{dn && <span style={{ color: '#E0631F' }}> ▼</span>}</>;
};
/** Таблица атрибуции: параметры × (ваша карточка / конкуренты) со стрелками ▲▼ (КП s6, «как работает алгоритм»). */
export const AttributeTable: React.FC<AttributeTableProps> = ({ headers, rows, highlightCol = 1, width = 1340 }) => (
  <Surface background="#FFFFFF" border="1px solid #ECE3E9" radius={28} padding={0} width={width} style={{ overflow: 'hidden' }}>
    <table style={{ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed' }}>
      <thead><tr>
        {headers.map((h, i) => (
          <th key={i} style={{ textAlign: i === 0 ? 'left' : 'center', padding: '24px 24px', fontFamily: F.display, fontWeight: 600, fontSize: 22, color: i === highlightCol ? colors.brand.eggplant : colors.text.primaryAlt, background: i === highlightCol ? '#FBF2FB' : 'transparent' }}>{h}</th>
        ))}
      </tr></thead>
      <tbody>
        {rows.map((r, ri) => (
          <tr key={ri} style={{ borderTop: '1px solid #F0E6EE' }}>
            {r.map((c, ci) => (
              <td key={ci} style={{ textAlign: ci === 0 ? 'left' : 'center', padding: '18px 24px', fontFamily: F.body, fontWeight: ci === highlightCol ? 700 : 500, fontSize: 20, color: ci === highlightCol ? colors.brand.eggplant : colors.text.primaryAlt, background: ci === highlightCol ? '#FBF2FB' : 'transparent' }}>{ci === 0 ? c : arrowize(c)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </Surface>
);
