import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { type } from '../tokens';

interface SpecimenProps {
  name: string;
  style: typeof type[keyof typeof type];
  sample: string;
  meta: string;
}

const Specimen: React.FC<SpecimenProps> = ({ name, style, sample, meta }) => (
  <div style={{
    background: 'white',
    padding: '28px 32px',
    borderRadius: 10,
    border: '1px solid #eee',
    marginBottom: 16,
  }}>
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: 16,
      paddingBottom: 12,
      borderBottom: '1px dashed #eee',
    }}>
      <div style={{ fontFamily: 'Manrope, system-ui, sans-serif' }}>
        <span style={{ fontWeight: 700, fontSize: 15, color: '#111' }}>{name}</span>
        <span style={{ marginLeft: 12, fontSize: 12, color: '#888', fontFamily: 'monospace' }}>
          {meta}
        </span>
      </div>
    </div>
    {/* Реальный размер уменьшен в 2x — Storybook канвас рассчитан на 1920×1080,
        а гайдлайны показываются в нормальном масштабе */}
    <div style={{
      ...style,
      fontSize: style.fontSize / 2,
      lineHeight: style.lineHeight,
    }}>
      {sample}
    </div>
  </div>
);

const AllTypography = () => (
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
    }}>Типографика JVO</h1>
    <p style={{ fontSize: 14, color: '#666', marginBottom: 12 }}>
      Размеры показаны в <strong>2× уменьшении</strong> — это половина от целевого 1920×1080.
      В реальных лейаутах используется полный размер из <code>tokens.ts → type</code>.
    </p>
    <p style={{ fontSize: 14, color: '#666', marginBottom: 40 }}>
      Шрифты: <strong>Unbounded</strong> (display) + <strong>Manrope</strong> (body).
      Из PPTX извлечены 10 канонических ролей.
    </p>

    <Specimen
      name="display"
      meta="128px · Unbounded SemiBold · 4 слайда"
      style={type.display}
      sample="Это больше, чем все существующие платформы аналитики"
    />
    <Specimen
      name="sectionTitle"
      meta="101px · Unbounded SemiBold"
      style={type.sectionTitle}
      sample="Раздел / Section"
    />
    <Specimen
      name="title"
      meta="75px · Unbounded SemiBold · 58 слайдов (★ workhorse)"
      style={type.title}
      sample="Единый центр управления вашими маркетплейсами"
    />
    <Specimen
      name="h3"
      meta="53px · Unbounded SemiBold · 7 слайдов"
      style={type.h3}
      sample="Заголовок карточки"
    />
    <Specimen
      name="h4"
      meta="48px · Unbounded SemiBold · 8 слайдов"
      style={type.h4}
      sample="Минор-заголовок / Тариф"
    />
    <Specimen
      name="cardTitle"
      meta="43px · Unbounded SemiBold · 12 слайдов"
      style={type.cardTitle}
      sample="Заголовок блока в body"
    />
    <Specimen
      name="body"
      meta="32px · Manrope Medium · 71 слайд (★ workhorse)"
      style={type.body}
      sample="Маркетплейсы больше не прощают недоработки в карточках. Алгоритм сравнивает вашу карточку с конкурентами по каждой метрике."
    />
    <Specimen
      name="small"
      meta="27px · Manrope Medium · 51 слайд"
      style={type.small}
      sample="Подпись карточки или tag label. Используется для коротких пояснений."
    />
    <Specimen
      name="caption"
      meta="24px · Manrope Medium · 15 слайдов"
      style={type.caption}
      sample="Caption / метаданные / footnotes"
    />
    <Specimen
      name="micro"
      meta="21px · Unbounded Medium · 10 слайдов"
      style={type.micro}
      sample="МИКРО-ПОДПИСЬ · БЕЙДЖ"
    />
  </div>
);

const meta: Meta = {
  title: 'Гайдлайны/Типографика',
  component: AllTypography,
  parameters: { layout: 'fullscreen', viewport: { disable: true } },
};

export default meta;
export const Все: StoryObj = {};
