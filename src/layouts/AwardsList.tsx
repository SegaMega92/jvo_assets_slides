import React from 'react';
import { SlideFrame } from './SlideFrame';
import { type, layout, colors, type ThemeName } from '../tokens';

/**
 * Лейаут 9: Список достижений + hero image + бейджи внизу.
 *
 * Слоты:
 *   - awards (required) — массив наград: { title, subtitle, icon? }
 *   - hero (required) — большая картинка/фото справа
 *   - badges (optional) — массив бейджей внизу
 */

export interface Award {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  icon?: React.ReactNode;
}

export interface Badge {
  label?: React.ReactNode;
  icon?: React.ReactNode;
}

interface AwardsListProps {
  awards: Award[];
  hero: React.ReactNode;
  badges?: Badge[];
  theme?: ThemeName;
  cardBg?: string;
}

export const AwardsList: React.FC<AwardsListProps> = ({
  awards,
  hero,
  badges,
  theme = 'pinkPastel',
  cardBg = colors.brand.pinkLight,
}) => (
  <SlideFrame theme={theme}>
    <div style={{
      position: 'absolute',
      inset: layout.slidePadY,
      display: 'grid',
      gridTemplateColumns: '46% 54%',
      gridTemplateRows: badges ? '1fr 220px' : '1fr',
      gridTemplateAreas: badges
        ? `"awards hero" "badges badges"`
        : `"awards hero"`,
      gap: layout.card.gap,
    }}>
      {/* Awards list */}
      <div style={{
        gridArea: 'awards',
        background: cardBg,
        borderRadius: layout.card.radius,
        padding: layout.card.padding,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: layout.card.gap,
      }}>
        {awards.map((a, i) => (
          <div key={i} style={{
            display: 'flex',
            gap: 24,
            alignItems: 'flex-start',
            borderTop: i > 0 ? `2px solid rgba(0,0,0,0.08)` : undefined,
            paddingTop: i > 0 ? 24 : 0,
          }}>
            {a.icon && <div style={{ flexShrink: 0 }}>{a.icon}</div>}
            <div>
              {a.title && (
                <div style={{ ...type.cardTitle, color: colors.brand.eggplant }}>
                  {a.title}
                </div>
              )}
              {a.subtitle && (
                <div style={{ ...type.small, color: colors.text.mutedDark, marginTop: 8 }}>
                  {a.subtitle}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Hero */}
      <div style={{
        gridArea: 'hero',
        background: colors.bg.white,
        borderRadius: layout.card.radius,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {hero}
      </div>

      {/* Badges */}
      {badges && badges.length > 0 && (
        <div style={{
          gridArea: 'badges',
          background: colors.brand.eggplant,
          color: colors.text.onDark,
          borderRadius: layout.card.radius,
          padding: layout.card.padding * 0.75,
          display: 'flex',
          alignItems: 'center',
          gap: layout.card.gap * 2,
          flexWrap: 'wrap',
        }}>
          {badges.map((b, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              {b.icon}
              <span style={{ ...type.small, color: 'inherit' }}>{b.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  </SlideFrame>
);
