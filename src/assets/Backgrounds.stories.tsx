import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const images = import.meta.glob(
  '../../backgrounds/*.{jpg,jpeg,png,JPG,PNG}',
  { eager: true, query: '?url', import: 'default' }
) as Record<string, string>;

const Gallery = () => (
  <div style={{ padding: '48px', background: '#f0f0f0', minHeight: '100vh', fontFamily: 'sans-serif' }}>
    <h1 style={{ fontSize: '32px', marginBottom: '40px', color: '#1a1a1a', fontWeight: 700 }}>
      Фоны слайдов
    </h1>
    <p style={{ fontSize: '16px', color: '#888', marginTop: '-28px', marginBottom: '40px' }}>
      {Object.keys(images).length} файлов · для использования в лейаутах: <code>/assets/backgrounds/имя_файла</code>
    </p>
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(480px, 1fr))',
      gap: '24px',
    }}>
      {Object.entries(images).map(([path, url]) => (
        <div
          key={path}
          style={{
            background: 'white',
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 2px 10px rgba(0,0,0,0.12)',
          }}
        >
          <img
            src={url}
            alt={path}
            style={{ width: '100%', display: 'block', aspectRatio: '16/9', objectFit: 'cover' }}
          />
          <p style={{
            padding: '10px 14px',
            fontSize: '12px',
            color: '#888',
            fontFamily: 'monospace',
            margin: 0,
            borderTop: '1px solid #f0f0f0',
          }}>
            {path.split('/').pop()}
          </p>
        </div>
      ))}
    </div>
  </div>
);

const meta: Meta = {
  title: 'Ассеты/Фоны',
  component: Gallery,
  parameters: {
    layout: 'fullscreen',
    viewport: { disable: true },
  },
};

export default meta;

export const Все: StoryObj = {};
