import React from 'react';
import { colors, fonts } from '../../tokens';
import { Marker, Check } from './primitives';

/** Списки JVO — автономные. Размеры в px на канвасе 1920×1080. */
const F = fonts;

// ─────────────────────────────────────────── ArrowList
export interface ArrowListProps {
  /** Пункты списка */
  items: React.ReactNode[];
  markerBg?: string;
  markerArrow?: string;
  textColor?: string;
  fontSize?: number;
  gap?: number;
  width?: number;
}
/** Список с круглыми маркерами-стрелками. Буллеты на тёмных/светлых плашках, «Раньше/Сейчас». */
export const ArrowList: React.FC<ArrowListProps> = ({ items, markerBg = colors.brand.eggplant, markerArrow = colors.brand.pink, textColor = colors.brand.eggplant, fontSize = 22, gap = 24, width = 600 }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap, width, overflowWrap: 'break-word', wordBreak: 'break-word' }}>
    {items.map((it, i) => (
      <div key={i} style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
        <Marker size={fontSize * 1.5} background={markerBg} arrowColor={markerArrow} />
        <span style={{ fontFamily: F.body, fontWeight: 500, fontSize, color: textColor, lineHeight: 1.3, paddingTop: fontSize * 0.12 }}>{it}</span>
      </div>
    ))}
  </div>
);

// ─────────────────────────────────────────── CheckList
export interface CheckListProps {
  items: React.ReactNode[];
  checkBg?: string;
  checkMark?: string;
  textColor?: string;
  fontSize?: number;
  gap?: number;
  width?: number;
}
/** Список с галочками ✓. Чек-листы «что делает платформа / команда». */
export const CheckList: React.FC<CheckListProps> = ({ items, checkBg = colors.accent.limeDark, checkMark = colors.accent.lime, textColor = colors.brand.eggplant, fontSize = 22, gap = 24, width = 600 }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap, width, overflowWrap: 'break-word', wordBreak: 'break-word' }}>
    {items.map((it, i) => (
      <div key={i} style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
        <Check size={fontSize * 1.5} background={checkBg} mark={checkMark} />
        <span style={{ fontFamily: F.body, fontWeight: 500, fontSize, color: textColor, lineHeight: 1.3, paddingTop: fontSize * 0.12 }}>{it}</span>
      </div>
    ))}
  </div>
);

// ─────────────────────────────────────────── FeatureList
export interface FeatureListProps {
  /** Пункты (стрелка « → » подставляется автоматически) */
  items: string[];
  textColor?: string;
  fontSize?: number;
  gap?: number;
  width?: number;
}
/** Список «→ пункт» без кружков — перечни возможностей внутри тёмных тул-карточек и колонок. */
export const FeatureList: React.FC<FeatureListProps> = ({ items, textColor = colors.brand.eggplant, fontSize = 20, gap = 14, width = 560 }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap, width, overflowWrap: 'break-word', wordBreak: 'break-word' }}>
    {items.map((it, i) => (
      <div key={i} style={{ fontFamily: F.body, fontWeight: 500, fontSize, color: textColor, lineHeight: 1.35 }}>→ {it}</div>
    ))}
  </div>
);

// ─────────────────────────────────────────── ComparisonRows
export interface ComparisonRow { value: string; label: string }
export interface ComparisonRowsProps {
  rows: ComparisonRow[];
  valueColor?: string;
  labelColor?: string;
  valueWidth?: number;
  width?: number;
}
/** Строки сравнения «акцентное значение + подпись». Колонки «Ручное управление / С ИИ-агентами» (Enterprise s10). */
export const ComparisonRows: React.FC<ComparisonRowsProps> = ({ rows, valueColor = colors.brand.pink, labelColor = colors.text.primaryAlt, valueWidth = 200, width = 700 }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 28, width, overflowWrap: 'break-word', wordBreak: 'break-word' }}>
    {rows.map((r, i) => (
      <div key={i} style={{ display: 'flex', gap: 24, alignItems: 'baseline' }}>
        <span style={{ width: valueWidth, textAlign: 'right', fontFamily: F.display, fontWeight: 600, fontSize: 28, color: valueColor, flex: '0 0 auto' }}>{r.value}</span>
        <span style={{ fontFamily: F.body, fontWeight: 600, fontSize: 22, color: labelColor }}>{r.label}</span>
      </div>
    ))}
  </div>
);
