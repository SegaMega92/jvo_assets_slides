import React from 'react';
import { type as typeScale, colors, fonts } from '../tokens';

/**
 * ContactItem / SocialRow — контактные блоки финального слайда.
 *
 * Источник: «Студия» сл.9 («Сайт: jvo.ru», «hi@jvo.ru», «+7 499 …»,
 * «Социальные сети:» + иконки).
 *
 * ContactItem слоты: icon, label (мелко сверху), value (крупно).
 * SocialRow слот: items[] = { icon, href? }.
 */

interface ContactItemProps {
  icon?: React.ReactNode;
  label?: React.ReactNode;
  value: React.ReactNode;
  color?: string;
  labelColor?: string;
}

export const ContactItem: React.FC<ContactItemProps> = ({
  icon,
  label,
  value,
  color = colors.text.primary,
  labelColor = colors.text.mutedMid,
}) => (
  <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
    {icon && (
      <div style={{
        width: 64, height: 64, borderRadius: 999, background: colors.bg.softGray,
        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 30, flexShrink: 0,
      }}>
        {icon}
      </div>
    )}
    <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {label && <span style={{ ...typeScale.caption, color: labelColor }}>{label}</span>}
      <span style={{ fontFamily: fonts.display, fontSize: 40, fontWeight: 600, color }}>{value}</span>
    </div>
  </div>
);

export interface SocialIcon {
  icon: React.ReactNode;
  href?: string;
}

interface SocialRowProps {
  items: SocialIcon[];
  bg?: string;
  color?: string;
  size?: number;
}

export const SocialRow: React.FC<SocialRowProps> = ({
  items,
  bg = colors.brand.eggplant,
  color = colors.bg.white,
  size = 72,
}) => (
  <div style={{ display: 'flex', gap: 20 }}>
    {items.map((it, i) => (
      <div
        key={i}
        style={{
          width: size, height: size, borderRadius: 999, background: bg, color,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: size * 0.42, flexShrink: 0,
        }}
      >
        {it.icon}
      </div>
    ))}
  </div>
);
