import React from 'react';
import { type as typeScale, colors, fonts, layout } from '../tokens';

/**
 * TariffCard — тарифная колонка: шапка (план + цена) + строки фич + опц. подвал.
 *
 * Источник: тарифные таблицы (54 шт, ~33%×58%) — КП Дживио, enterprise, Студия.
 * Основной слот лейаута PricingTariffs.
 *
 * Слоты: name, price, period, caption, rows[] = { label, value? }, footer.
 * featured — выделенная (рекомендуемая) колонка.
 *
 * Цена: единица (period, напр. «₽/мес») располагается ПОД числом. Число не рвётся
 * по пробелу — группы цифр склеиваются неразрывным пробелом, поэтому колонки
 * универсальны к любой длине цены («19 900», «1 049 400», «по запросу»).
 */

const NBSP = ' ';

export interface TariffRow {
  label: React.ReactNode;
  value?: React.ReactNode; // ✓ / значение / undefined
}

interface TariffCardProps {
  name: React.ReactNode;
  price?: React.ReactNode;
  period?: React.ReactNode;
  caption?: React.ReactNode;
  rows: TariffRow[];
  footer?: React.ReactNode;
  featured?: boolean;
  accent?: string;
}

export const TariffCard: React.FC<TariffCardProps> = ({
  name,
  price,
  period,
  caption,
  rows,
  footer,
  featured = false,
  accent = colors.brand.pink,
}) => {
  const bg = featured ? accent : colors.bg.white;
  const onBg = featured ? colors.bg.white : colors.text.primary;
  const muted = featured ? 'rgba(255,255,255,0.75)' : colors.text.mutedMid;
  const rule = featured ? 'rgba(255,255,255,0.25)' : colors.border.subtle;

  // Склеиваем группы цифр неразрывным пробелом, чтобы «19 900» не переносилось.
  const priceNode = typeof price === 'string' ? price.replace(/(\d)\s+(\d)/g, (_m, a, b) => a + NBSP + b) : price;

  return (
    <div
      style={{
        background: bg,
        color: onBg,
        border: featured ? 'none' : `2px solid ${colors.border.subtle}`,
        borderRadius: layout.card.radius * 1.25,
        padding: layout.card.padding,
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        height: '100%',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ ...typeScale.h3, color: onBg }}>{name}</div>
        {caption && <div style={{ ...typeScale.small, color: muted }}>{caption}</div>}
      </div>

      {price != null && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <span style={{ fontFamily: fonts.display, fontSize: 64, fontWeight: 600, lineHeight: 1.02, color: onBg }}>
            {priceNode}
          </span>
          {period && (
            <span style={{ ...typeScale.small, color: muted, lineHeight: 1.2, whiteSpace: 'nowrap' }}>{period}</span>
          )}
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {rows.map((r, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 16,
              padding: '18px 0',
              borderTop: i === 0 ? 'none' : `1px solid ${rule}`,
            }}
          >
            <span style={{ ...typeScale.small, color: onBg, opacity: 0.9 }}>{r.label}</span>
            {r.value != null && (
              <span style={{ ...typeScale.small, color: onBg, fontWeight: 600, flexShrink: 0 }}>{r.value}</span>
            )}
          </div>
        ))}
      </div>

      {footer && <div style={{ marginTop: 'auto', paddingTop: 8 }}>{footer}</div>}
    </div>
  );
};
