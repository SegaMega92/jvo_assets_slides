import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { colors, themes } from '../tokens';

interface SwatchProps {
  hex: string;
  name: string;
  role?: string;
  textColor?: string;
}

const Swatch: React.FC<SwatchProps> = ({ hex, name, role, textColor = '#111' }) => (
  <div style={{
    border: '1px solid #eee',
    borderRadius: 10,
    overflow: 'hidden',
    fontFamily: 'Manrope, system-ui, sans-serif',
  }}>
    <div style={{
      background: hex,
      height: 100,
      display: 'flex',
      alignItems: 'flex-end',
      padding: '12px 16px',
    }}>
      <code style={{
        background: 'rgba(255,255,255,0.85)',
        padding: '4px 8px',
        borderRadius: 4,
        fontSize: 13,
        fontFamily: 'monospace',
        color: '#111',
      }}>{hex}</code>
    </div>
    <div style={{ padding: '12px 16px', background: 'white' }}>
      <div style={{ fontWeight: 600, fontSize: 14, color: textColor }}>{name}</div>
      {role && <div style={{ fontSize: 12, color: '#888', marginTop: 4 }}>{role}</div>}
    </div>
  </div>
);

interface GroupProps {
  title: string;
  description?: string;
  items: { hex: string; name: string; role?: string }[];
}

const Group: React.FC<GroupProps> = ({ title, description, items }) => (
  <section style={{ marginBottom: 48 }}>
    <h2 style={{
      fontSize: 22,
      fontWeight: 700,
      color: '#111',
      marginBottom: 4,
      fontFamily: 'Unbounded, system-ui, sans-serif',
    }}>{title}</h2>
    {description && (
      <p style={{ fontSize: 14, color: '#888', marginBottom: 20, marginTop: 0 }}>{description}</p>
    )}
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
      gap: 16,
    }}>
      {items.map(i => <Swatch key={i.hex + i.name} {...i} />)}
    </div>
  </section>
);

const AllColors = () => (
  <div style={{
    padding: 48,
    background: '#FAFAFA',
    minHeight: '100vh',
    fontFamily: 'Manrope, system-ui, sans-serif',
  }}>
    <h1 style={{
      fontSize: 36,
      fontWeight: 700,
      color: '#111',
      marginBottom: 8,
      fontFamily: 'Unbounded, system-ui, sans-serif',
    }}>Палитра JVO</h1>
    <p style={{ fontSize: 14, color: '#666', marginBottom: 40 }}>
      Извлечено из 86 слайдов 3 файлов PPTX. Hex-значения и spread% — из <code>analysis/color_roles.json</code>
    </p>

    <Group
      title="Бренд"
      description="Основные цвета JVO. Pink + Eggplant — обязательная пара."
      items={[
        { hex: colors.brand.pink, name: 'JVO Pink', role: 'spread 36% · акценты, иконки, выделения' },
        { hex: colors.brand.eggplant, name: 'JVO Eggplant', role: 'spread 59% · основной текст, тёмные плашки' },
        { hex: colors.brand.pinkLight, name: 'Pink Light', role: 'spread 16% · фон карточек кейсов' },
        { hex: colors.brand.pinkPale, name: 'Pink Pale', role: 'spread 5% · обводки, пастель' },
      ]}
    />

    <Group
      title="Акценты"
      description="Цвета для разделов, тёмных слайдов и позитивных индикаторов."
      items={[
        { hex: colors.accent.purple, name: 'Deep Purple', role: 'spread 19% · section dividers' },
        { hex: colors.accent.purpleLight, name: 'Purple Light', role: 'spread 14% · пастельные плашки' },
        { hex: colors.accent.purplePale, name: 'Purple Pale', role: 'spread 9% · акцентный текст' },
        { hex: colors.accent.lime, name: 'Fresh Lime', role: 'spread 17% · positive callouts' },
        { hex: colors.accent.limePale, name: 'Lime Pale', role: 'spread 5% · пастельные фоны' },
        { hex: colors.accent.limeDark, name: 'Lime Dark', role: 'spread 22% · тёмные lime блоки' },
        { hex: colors.accent.limeText, name: 'Lime Text', role: 'spread 7% · текст на lime dark' },
      ]}
    />

    <Group
      title="Фоны"
      items={[
        { hex: colors.bg.white, name: 'White', role: 'spread 70% · основной фон' },
        { hex: colors.bg.offwhite, name: 'Off White', role: 'spread 10% · вторичные блоки' },
        { hex: colors.bg.softGray, name: 'Soft Gray', role: 'spread 12% · нейтральные плашки' },
        { hex: colors.bg.dark, name: 'Dark', role: 'spread 23% · тёмные слайды' },
      ]}
    />

    <Group
      title="Текст"
      items={[
        { hex: colors.text.primary, name: 'Primary', role: 'spread 59% · заголовки/body' },
        { hex: colors.text.primaryAlt, name: 'Primary Alt', role: 'spread 23% · альт. тёмный' },
        { hex: colors.text.black, name: 'Black', role: 'spread 35% · таблицы/диаграммы' },
        { hex: colors.text.onDark, name: 'On Dark', role: 'текст на тёмном фоне' },
        { hex: colors.text.muted, name: 'Muted', role: 'spread 20% · captions' },
        { hex: colors.text.mutedDark, name: 'Muted Dark', role: 'spread 16% · линии/captions' },
        { hex: colors.text.mutedMid, name: 'Muted Mid', role: 'spread 6% · supporting' },
      ]}
    />

    <Group
      title="Границы"
      items={[
        { hex: colors.border.subtle, name: 'Subtle', role: 'spread 15% · разделители таблиц' },
        { hex: colors.border.divider, name: 'Divider', role: 'spread 5% · лёгкие разделители' },
        { hex: colors.border.rule, name: 'Rule', role: 'spread 16% · линии-разделители' },
      ]}
    />

    <Group
      title="Семантические"
      items={[
        { hex: colors.semantic.info, name: 'Info', role: 'spread 28% · ссылки' },
        { hex: colors.semantic.warning, name: 'Warning', role: 'предупреждения' },
        { hex: colors.semantic.success, name: 'Success', role: 'позитивные индикаторы' },
      ]}
    />

    <h2 style={{
      fontSize: 22, fontWeight: 700, marginTop: 60, marginBottom: 24,
      fontFamily: 'Unbounded, system-ui, sans-serif', color: '#111',
    }}>Темы слайдов</h2>
    <p style={{ fontSize: 14, color: '#666', marginBottom: 20, marginTop: -20 }}>
      Готовые комбинации цветов. Используются для быстрой смены настроения слайда.
    </p>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
      {Object.entries(themes).map(([name, theme]) => (
        <div key={name} style={{
          background: theme.bg,
          padding: 32,
          borderRadius: 14,
          border: '1px solid rgba(0,0,0,0.06)',
          minHeight: 180,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
          <div>
            <div style={{
              color: theme.text,
              fontSize: 20,
              fontWeight: 700,
              fontFamily: 'Unbounded, system-ui, sans-serif',
            }}>
              {name}
            </div>
            <div style={{
              color: theme.textMuted,
              fontSize: 13,
              marginTop: 8,
              fontFamily: 'Manrope, system-ui, sans-serif',
            }}>
              Текст muted для подписи
            </div>
          </div>
          <div style={{
            background: theme.accent,
            color: theme.bg,
            display: 'inline-block',
            padding: '6px 14px',
            borderRadius: 999,
            fontSize: 12,
            fontWeight: 600,
            alignSelf: 'flex-start',
          }}>
            Accent
          </div>
        </div>
      ))}
    </div>
  </div>
);

const meta: Meta = {
  title: 'Гайдлайны/Цвета',
  component: AllColors,
  parameters: { layout: 'fullscreen', viewport: { disable: true } },
};

export default meta;
export const Все: StoryObj = {};
