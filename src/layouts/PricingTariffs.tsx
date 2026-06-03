import React from 'react';
import { SlideFrame } from './SlideFrame';
import { type, layout, colors, type ThemeName } from '../tokens';

/**
 * Лейаут 6: Тарифные таблицы / прайс-лист.
 *
 * Слоты:
 *   - productName (required) — название продукта
 *   - lead (optional) — подзаголовок про оплату
 *   - tariffs (required) — массив колонок-таблиц
 *   - specialOffer (optional) — подвал с акцией
 *   - socialProof (optional) — «выбирают бренды»
 */

export interface TariffColumn {
  name?: React.ReactNode;
  price?: React.ReactNode;
  features?: React.ReactNode;
  highlighted?: boolean;
}

interface PricingTariffsProps {
  productName: React.ReactNode;
  lead?: React.ReactNode;
  tariffs: TariffColumn[];
  specialOffer?: React.ReactNode;
  socialProof?: React.ReactNode;
  theme?: ThemeName;
}

export const PricingTariffs: React.FC<PricingTariffsProps> = ({
  productName,
  lead,
  tariffs,
  specialOffer,
  socialProof,
  theme = 'light',
}) => (
  <SlideFrame theme={theme}>
    {/* Header */}
    <div style={{
      position: 'absolute',
      left: layout.slidePadX,
      top: layout.slidePadY,
      right: layout.slidePadX + layout.logoSize + 32,
    }}>
      <div style={type.h4}>{productName}</div>
      {lead && (
        <div style={{ ...type.small, marginTop: 12, color: colors.text.muted }}>
          {lead}
        </div>
      )}
    </div>

    {/* Tariff columns */}
    <div style={{
      position: 'absolute',
      left: layout.slidePadX,
      right: layout.slidePadX,
      top: layout.bodyTop - 100,
      bottom: socialProof || specialOffer ? 280 : layout.slidePadY,
      display: 'grid',
      gridTemplateColumns: `repeat(${tariffs.length}, 1fr)`,
      gap: layout.card.gap * 2,
    }}>
      {tariffs.map((t, i) => (
        <div key={i} style={{
          background: t.highlighted ? colors.brand.eggplant : colors.bg.softGray,
          color: t.highlighted ? colors.text.onDark : colors.text.primary,
          borderRadius: layout.card.radius,
          padding: layout.card.padding,
          display: 'flex',
          flexDirection: 'column',
          gap: 24,
        }}>
          {t.name && (
            <div style={{ ...type.h3, color: 'inherit' }}>{t.name}</div>
          )}
          {t.price && (
            <div style={{ ...type.h4, color: 'inherit' }}>{t.price}</div>
          )}
          {t.features && (
            <div style={{ ...type.small, color: 'inherit' }}>{t.features}</div>
          )}
        </div>
      ))}
    </div>

    {/* Footer: special offer + social proof */}
    {(specialOffer || socialProof) && (
      <div style={{
        position: 'absolute',
        left: layout.slidePadX,
        right: layout.slidePadX,
        bottom: layout.slidePadY,
        height: 200,
        display: 'flex',
        gap: layout.card.gap,
      }}>
        {specialOffer && (
          <div style={{
            flex: 1,
            background: colors.accent.lime,
            color: colors.accent.limeDark,
            borderRadius: layout.card.radius,
            padding: layout.card.padding,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 12,
            ...type.body,
          }}>
            {specialOffer}
          </div>
        )}
        {socialProof && (
          <div style={{
            flex: 1,
            background: colors.bg.softGray,
            borderRadius: layout.card.radius,
            padding: layout.card.padding,
            display: 'flex',
            alignItems: 'center',
            ...type.body,
          }}>
            {socialProof}
          </div>
        )}
      </div>
    )}
  </SlideFrame>
);
