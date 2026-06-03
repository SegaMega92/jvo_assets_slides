import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const images = import.meta.glob(
  '../../logo/**/*.{jpg,jpeg,png,svg,JPG,PNG,SVG}',
  { eager: true, query: '?url', import: 'default' }
) as Record<string, string>;

const Gallery = () => (
  <div style={{ padding: '48px', background: '#888', minHeight: '100vh', fontFamily: 'sans-serif' }}>
    <h1 style={{ fontSize: '32px', marginBottom: '8px', color: '#fff', fontWeight: 700 }}>
      Логотип JVO
    </h1>
    <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', marginBottom: '40px' }}>
      {Object.keys(images).length} вариантов · фон намеренно серый, чтобы видеть все версии
    </p>
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
      gap: '20px',
    }}>
      {Object.entries(images).map(([path, url]) => {
        const name = path.split('/').pop() ?? '';
        const isLight = name.toLowerCase().includes('белый') || name.toLowerCase().includes('white');
        return (
          <div
            key={path}
            style={{
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0 2px 12px rgba(0,0,0,0.3)',
            }}
          >
            <div style={{
              padding: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '160px',
              background: isLight ? '#222' : '#fff',
            }}>
              <img
                src={url}
                alt={name}
                style={{ maxWidth: '100%', maxHeight: '120px', objectFit: 'contain' }}
              />
            </div>
            <div style={{ padding: '12px 16px', background: 'rgba(0,0,0,0.4)' }}>
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)', margin: 0, fontFamily: 'monospace' }}>
                {name}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

const meta: Meta = {
  title: 'Ассеты/Логотип',
  component: Gallery,
  parameters: {
    layout: 'fullscreen',
    viewport: { disable: true },
  },
};

export default meta;

export const Все: StoryObj = {};
