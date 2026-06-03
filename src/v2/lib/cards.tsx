import React from 'react';
import { colors, fonts } from '../../tokens';
import { Surface, Pill, Marker, IconBadge } from './primitives';

/**
 * Карточки JVO — автономные (без абсолютных координат). Собраны из примитивов.
 * Размеры — px на канвасе 1920×1080. Ширина по умолчанию подобрана как на слайдах.
 */

const F = fonts;

// ───────────────────────────────────────────────────── StatCard
export interface StatCardProps {
  /** Крупное значение, напр. «+28%», «11,5 трлн ₽» */
  value: string;
  /** Подпись под значением */
  label: string;
  /** Фон карточки (hex/градиент) */
  background?: string;
  valueColor?: string;
  labelColor?: string;
  width?: number;
  height?: number;
}
/** Стат-карточка: крупное число + подпись на цветной плашке (рынок, метрики). */
export const StatCard: React.FC<StatCardProps> = ({ value, label, background = 'linear-gradient(180deg,#D6FE9E,#FFF2CC)', valueColor = colors.brand.eggplant, labelColor = colors.brand.eggplant, width = 460, height = 310 }) => (
  <Surface background={background} radius={36} padding={44} width={width} minHeight={height} style={{ display: 'flex', flexDirection: 'column' }}>
    <div style={{ fontFamily: F.display, fontWeight: 600, fontSize: 56, color: valueColor, lineHeight: 1 }}>{value}</div>
    <div style={{ fontFamily: F.body, fontWeight: 500, fontSize: 26, color: labelColor, lineHeight: 1.3, marginTop: 28 }}>{label}</div>
  </Surface>
);

// ───────────────────────────────────────────────────── StatCallout
export interface StatCalloutProps {
  /** Значение в пилюле, напр. «+18%» */
  value: string;
  /** Фон пилюли */
  valueBg?: string;
  valueColor?: string;
  /** Жирная подпись */
  label: string;
  /** Описание мелким текстом */
  desc: string;
  width?: number;
}
/** Стат-callout: пилюля со значением + жирная подпись + описание («что получают за 90 дней»). */
export const StatCallout: React.FC<StatCalloutProps> = ({ value, valueBg = 'linear-gradient(90deg,#D6FE9E,#FFF2CC)', valueColor = colors.accent.limeDark, label, desc, width = 600 }) => (
  <div style={{ width, overflowWrap: 'break-word', wordBreak: 'break-word' }}>
    <Pill background={valueBg} color={valueColor} fontSize={38} weight={700} font="display">{value}</Pill>
    <div style={{ fontFamily: F.body, fontWeight: 600, fontSize: 26, color: colors.brand.eggplant, marginTop: 22 }}>{label}</div>
    <div style={{ fontFamily: F.body, fontWeight: 500, fontSize: 22, color: colors.brand.eggplant, marginTop: 10, lineHeight: 1.35 }}>{desc}</div>
  </div>
);

// ───────────────────────────────────────────────────── MetricCard
export interface MetricCardProps {
  /** Название метрики, напр. «Выручка» */
  title: string;
  /** Значение «до» */
  before?: string;
  /** Значение «после» */
  after?: string;
  /** Крупная дельта, напр. «+ 60%» */
  delta: string;
  deltaColor?: string;
  /** Горизонтальная компоновка (для широкого бокса) */
  horizontal?: boolean;
  width?: number;
  height?: number;
}
/** Карточка-метрика «до/после» с крупной дельтой (кейсы Студии). Горизонталь — title и дельта не наезжают (flex). */
export const MetricCard: React.FC<MetricCardProps> = ({ title, before, after, delta, deltaColor = colors.text.primaryAlt, horizontal, width = 340, height = 330 }) => {
  const Delta = <div style={{ fontFamily: F.display, fontWeight: 600, fontSize: 34, color: deltaColor, whiteSpace: 'nowrap' }}>{delta}</div>;
  if (horizontal) {
    return (
      <Surface background="#FFFFFF" border="1px solid #ECE3E9" radius={28} padding={32} width={690} minHeight={140} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
        <div style={{ fontFamily: F.body, fontWeight: 600, fontSize: 24, color: colors.text.primaryAlt, flex: 1, minWidth: 0 }}>{title}</div>
        {Delta}
      </Surface>
    );
  }
  return (
    <Surface background="#FFFFFF" border="1px solid #ECE3E9" radius={28} padding={32} width={width} minHeight={height} style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ fontFamily: F.body, fontWeight: 600, fontSize: 24, color: colors.text.primaryAlt }}>{title}</div>
      {before && <div style={{ fontFamily: F.body, fontWeight: 500, fontSize: 20, color: '#666', marginTop: 20 }}>до: <span style={{ color: colors.text.primaryAlt }}>{before}</span></div>}
      {after && <div style={{ fontFamily: F.body, fontWeight: 500, fontSize: 20, color: '#666', marginTop: 8 }}>после: <span style={{ color: colors.text.primaryAlt }}>{after}</span></div>}
      <div style={{ marginTop: 'auto', paddingTop: 24, fontFamily: F.display, fontWeight: 600, fontSize: 34, color: deltaColor }}>{delta}</div>
    </Surface>
  );
};

// ───────────────────────────────────────────────────── IconFeatureCard
export interface IconFeatureCardProps {
  /** Символ/эмодзи или URL иконки */
  icon?: string;
  iconSrc?: string;
  title: React.ReactNode;
  desc: string;
  /** Тема карточки */
  theme?: 'light' | 'dark' | 'lime' | 'pink';
  /** Цвет акцента заголовка (переопределяет тему) */
  accent?: string;
  width?: number;
  height?: number;
}
const FEATURE_THEMES = {
  light: { bg: '#FFFFFF', border: '1px solid #ECE3E9', title: colors.brand.eggplant, desc: '#444', badge: colors.brand.pink, glyph: colors.brand.eggplant },
  dark: { bg: colors.brand.eggplant, border: undefined, title: '#FFFFFF', desc: '#F2D9EC', badge: colors.brand.pink, glyph: '#FFFFFF' },
  lime: { bg: 'linear-gradient(180deg,#D6FE9E,#FFF2CC)', border: undefined, title: colors.accent.limeDark, desc: '#2A3312', badge: colors.accent.limeDark, glyph: colors.accent.lime },
  pink: { bg: '#FFE4F6', border: undefined, title: colors.brand.eggplant, desc: colors.brand.eggplant, badge: colors.brand.pink, glyph: colors.brand.eggplant },
} as const;
/** Карточка-фича: иконка + заголовок + описание. Светлая/тёмная/лаймовая/розовая темы (тул-слайды, «единый центр»). */
export const IconFeatureCard: React.FC<IconFeatureCardProps> = ({ icon = '◆', iconSrc, title, desc, theme = 'light', accent, width = 600, height = 560 }) => {
  const t = FEATURE_THEMES[theme];
  return (
    <Surface background={t.bg} border={t.border} radius={28} padding={44} width={width} minHeight={height}>
      <IconBadge src={iconSrc} glyph={iconSrc ? undefined : icon} background={t.badge} glyphColor={t.glyph} shape={iconSrc ? 'none' : 'rounded'} size={104} />
      <div style={{ fontFamily: F.display, fontWeight: 600, fontSize: 40, color: accent ?? t.title, marginTop: 28, lineHeight: 1.15 }}>{title}</div>
      <div style={{ fontFamily: F.body, fontWeight: 500, fontSize: 24, color: t.desc, marginTop: 18, lineHeight: 1.4 }}>{desc}</div>
    </Surface>
  );
};

// ───────────────────────────────────────────────────── AgentCard
export interface AgentCardProps {
  icon?: string;
  iconSrc?: string;
  title: string;
  desc: string;
  width?: number;
}
/** Карточка агента: иконка слева + жирный заголовок + мелкое описание (горизонтальная). */
export const AgentCard: React.FC<AgentCardProps> = ({ icon = '◆', iconSrc, title, desc, width = 700 }) => (
  <Surface background="#FBFBFB" border="1px solid #ECE3E9" radius={28} padding={32} width={width} minHeight={230} style={{ display: 'flex', gap: 28, alignItems: 'flex-start' }}>
    <IconBadge src={iconSrc} glyph={iconSrc ? undefined : icon} shape={iconSrc ? 'none' : 'rounded'} size={100} background={colors.brand.pink} />
    <div style={{ flex: 1 }}>
      <div style={{ fontFamily: F.body, fontWeight: 700, fontSize: 24, color: colors.text.primaryAlt }}>{title}</div>
      <div style={{ fontFamily: F.body, fontWeight: 500, fontSize: 16, color: '#666', marginTop: 10, lineHeight: 1.35 }}>{desc}</div>
    </div>
  </Surface>
);

// ───────────────────────────────────────────────────── PainCard
export interface PainCardProps {
  title: string;
  /** Подпись под заголовком (напр. «Excel + ручной режим») */
  sublabel: string;
  /** Текст-последствие */
  danger: string;
  width?: number;
}
/** Карточка-проблема: заголовок сверху, снизу — подпись, разделитель и текст-последствие (прижаты к низу через flex). */
export const PainCard: React.FC<PainCardProps> = ({ title, sublabel, danger, width = 445 }) => (
  <Surface background="linear-gradient(160deg,#FFFFFF,#FFF4FB)" radius={20} padding={40} width={width} minHeight={445} style={{ display: 'flex', flexDirection: 'column' }}>
    <div style={{ fontFamily: F.display, fontWeight: 600, fontSize: 40, color: colors.brand.eggplant }}>{title}</div>
    <div style={{ marginTop: 'auto' }}>
      <div style={{ fontFamily: F.body, fontWeight: 500, fontSize: 20, color: '#A64D79' }}>{sublabel}</div>
      <div style={{ borderTop: '1px solid rgba(65,0,49,0.18)', margin: '16px 0' }} />
      <div style={{ fontFamily: F.body, fontWeight: 700, fontSize: 20, color: colors.brand.eggplant, lineHeight: 1.35 }}>{danger}</div>
    </div>
  </Surface>
);

// ───────────────────────────────────────────────────── NumberedCard
export interface NumberedCardProps {
  /** Номер шага */
  number: number | string;
  title: string;
  desc: string;
  width?: number;
}
/** Нумерованная карточка-шаг: бейдж-номер + заголовок + разделитель + описание (пути пользователя, проблемы). */
export const NumberedCard: React.FC<NumberedCardProps> = ({ number, title, desc, width = 445 }) => (
  <Surface background="#FFFFFF" border="1px solid #ECE3E9" radius={20} padding={36} width={width} minHeight={500}>
    <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 56, height: 56, borderRadius: 18, background: colors.brand.pink, fontFamily: F.display, fontWeight: 600, fontSize: 32, color: colors.brand.eggplant }}>{number}</span>
    <div style={{ fontFamily: F.body, fontWeight: 700, fontSize: 24, color: colors.brand.eggplant, marginTop: 24, lineHeight: 1.3 }}>{title}</div>
    <div style={{ borderTop: '1px solid rgba(65,0,49,0.15)', margin: '20px 0' }} />
    <div style={{ fontFamily: F.body, fontWeight: 500, fontSize: 20, color: colors.brand.eggplant, lineHeight: 1.35 }}>{desc}</div>
  </Surface>
);

// ───────────────────────────────────────────────────── AwardCard
export interface AwardCardProps {
  icon?: string;
  iconSrc?: string;
  title: React.ReactNode;
  subtitle: string;
  width?: number;
}
/** Карточка награды: иконка + заголовок со стрелкой ↗ + мелкая подпись. */
export const AwardCard: React.FC<AwardCardProps> = ({ icon = '🏆', iconSrc, title, subtitle, width = 820 }) => (
  <Surface background="#FBFBFB" border="1px solid #EFE6EC" radius={24} padding={28} width={width} minHeight={220} style={{ display: 'flex', gap: 28, alignItems: 'flex-start' }}>
    <IconBadge src={iconSrc} glyph={iconSrc ? undefined : icon} shape={iconSrc ? 'none' : 'rounded'} size={120} background="#FFE4F6" />
    <div style={{ flex: 1 }}>
      <div style={{ fontFamily: F.display, fontWeight: 600, fontSize: 26, color: colors.text.primaryAlt, lineHeight: 1.2 }}>{title} <span style={{ color: colors.brand.eggplant }}>↗</span></div>
      <div style={{ fontFamily: F.body, fontWeight: 500, fontSize: 20, color: '#B7B7B7', marginTop: 14, lineHeight: 1.3 }}>{subtitle}</div>
    </div>
  </Surface>
);

// ───────────────────────────────────────────────────── BonusCard
export interface BonusCardProps {
  /** Крупное значение бонуса, напр. «5 SEO», «1 месяц», «−15%» */
  value: string;
  caption: string;
  theme?: 'dark' | 'light';
  width?: number;
}
/** Карточка-бонус: крупное значение + подпись (слайд «Бонус при оплате сегодня»). */
export const BonusCard: React.FC<BonusCardProps> = ({ value, caption, theme = 'dark', width = 550 }) => {
  const dark = theme === 'dark';
  return (
    <Surface background={dark ? colors.bg.dark : '#FFFFFF'} border={dark ? undefined : '1px solid #ECE3E9'} radius={34} padding={36} width={width} minHeight={244} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <div style={{ fontFamily: F.display, fontWeight: 600, fontSize: 56, color: dark ? '#FFFFFF' : colors.text.primaryAlt }}>{value}</div>
      <div style={{ fontFamily: F.body, fontWeight: 500, fontSize: 20, color: dark ? '#B7B7B7' : '#666', marginTop: 14 }}>{caption}</div>
    </Surface>
  );
};

// ───────────────────────────────────────────────────── TariffCard
export interface TariffRow { label: string; value: string }
export interface TariffCardProps {
  title: string;
  /** Чипы-теги (API, пользователи) */
  chips?: string[];
  /** Строки тарифа «параметр → значение» */
  rows: TariffRow[];
  /** Итоговая строка */
  total: string;
  /** Подпись (цена за день) */
  perDay?: string;
  /** Бонус-плашка снизу */
  bonus?: string;
  width?: number;
}
/** Карточка тарифа: заголовок, чипы, список параметров, итог, бонус (пакеты «Стандарт»/«Премиум»). */
export const TariffCard: React.FC<TariffCardProps> = ({ title, chips = [], rows, total, perDay, bonus, width = 600 }) => (
  <Surface background="#FFFFFF" border="1px solid #ECE3E9" radius={22} padding={36} width={width}>
    <div style={{ fontFamily: F.display, fontWeight: 600, fontSize: 32, color: '#000' }}>{title}</div>
    {chips.length > 0 && (
      <div style={{ display: 'flex', gap: 12, marginTop: 18 }}>
        {chips.map((c, i) => <span key={i} style={{ background: colors.brand.pink, color: colors.brand.eggplant, borderRadius: 999, padding: '8px 18px', fontFamily: F.body, fontWeight: 700, fontSize: 20 }}>{c}</span>)}
      </div>
    )}
    <div style={{ marginTop: 24 }}>
      {rows.map((r, i) => (
        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '11px 0', borderTop: i ? '1px solid #F0E6EE' : 'none' }}>
          <span style={{ fontFamily: F.body, fontWeight: i === 0 ? 700 : 500, fontSize: 21, color: colors.text.primaryAlt, maxWidth: '62%' }}>{r.label}</span>
          <span style={{ fontFamily: F.body, fontWeight: i === 0 ? 700 : 500, fontSize: 21, color: r.value === 'вкл' ? colors.semantic.success : colors.text.primaryAlt }}>{r.value}</span>
        </div>
      ))}
    </div>
    <div style={{ fontFamily: F.display, fontWeight: 500, fontSize: 22, color: '#000', marginTop: 18 }}>{total}</div>
    {perDay && <div style={{ fontFamily: F.body, fontWeight: 500, fontSize: 18, color: '#999', marginTop: 8 }}>{perDay}</div>}
    {bonus && <div style={{ marginTop: 18, background: 'linear-gradient(90deg,#D6FE9E,#FFF2CC)', color: colors.accent.limeDark, borderRadius: 999, padding: '12px 20px', fontFamily: F.body, fontWeight: 500, fontSize: 18, textAlign: 'center' }}>{bonus}</div>}
  </Surface>
);
