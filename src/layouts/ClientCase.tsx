import React from 'react';
import { SlideFrame } from './SlideFrame';
import { type, layout, colors, type ThemeName } from '../tokens';

/**
 * Лейаут 5: Кейс клиента — логотип/название + результат + продукт + метрики.
 *
 * Слоты:
 *   - clientName (required) — название клиента (заменяет title)
 *   - resultTag (optional) — pill с кратким результатом ("Прирост 26%")
 *   - productImage (optional) — фото товара
 *   - metricsTable (optional) — таблица/блок с цифрами
 *   - clientPhoto (optional) — фото клиента
 *   - clientCaption (optional) — подпись под фото
 */

interface ClientCaseProps {
  clientName: React.ReactNode;
  resultTag?: React.ReactNode;
  productImage?: React.ReactNode;
  metricsTable?: React.ReactNode;
  clientPhoto?: React.ReactNode;
  clientCaption?: React.ReactNode;
  theme?: ThemeName;
  cardBg?: string;
}

export const ClientCase: React.FC<ClientCaseProps> = ({
  clientName,
  resultTag,
  productImage,
  metricsTable,
  clientPhoto,
  clientCaption,
  theme = 'pinkPastel',
  cardBg,
}) => (
  <SlideFrame theme={theme}>
    {/* верхняя полоса: имя клиента + tag */}
    <div style={{
      position: 'absolute',
      left: layout.slidePadX,
      top: layout.slidePadY,
      right: layout.slidePadX + layout.logoSize + 32,
      display: 'flex',
      alignItems: 'center',
      gap: 32,
    }}>
      <div style={type.title}>{clientName}</div>
      {resultTag && (
        <div style={{
          ...type.body,
          background: colors.brand.pink,
          color: colors.bg.white,
          padding: '12px 28px',
          borderRadius: 999,
          fontWeight: 600,
        }}>
          {resultTag}
        </div>
      )}
    </div>

    {/* основная карточка */}
    <div style={{
      position: 'absolute',
      left: layout.slidePadX,
      right: layout.slidePadX,
      top: layout.bodyTop - 80,
      bottom: layout.slidePadY,
      background: cardBg ?? colors.brand.pinkLight,
      borderRadius: layout.card.radius * 1.5,
      padding: layout.card.padding,
      display: 'grid',
      gridTemplateColumns: '40% 35% 25%',
      gap: layout.card.gap,
      overflow: 'hidden',
    }}>
      <div style={{
        background: colors.bg.white,
        borderRadius: layout.card.radius,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {productImage}
      </div>
      <div style={{
        background: colors.bg.white,
        borderRadius: layout.card.radius,
        padding: layout.card.padding * 0.75,
      }}>
        {metricsTable}
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: layout.card.gap,
      }}>
        {clientPhoto && (
          <div style={{
            flex: 1,
            background: colors.bg.white,
            borderRadius: layout.card.radius,
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            {clientPhoto}
          </div>
        )}
        {clientCaption && (
          <div style={{ ...type.small, padding: '0 8px' }}>
            {clientCaption}
          </div>
        )}
      </div>
    </div>
  </SlideFrame>
);
