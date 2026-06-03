import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const images = import.meta.glob(
  '../../clients/*.{jpg,jpeg,png,JPG,PNG}',
  { eager: true, query: '?url', import: 'default' }
) as Record<string, string>;

const Gallery = () => (
  <div style={{ padding: '48px', background: '#f0f0f0', minHeight: '100vh', fontFamily: 'sans-serif' }}>
    <h1 style={{ fontSize: '32px', marginBottom: '8px', color: '#1a1a1a', fontWeight: 700 }}>
      Логотипы клиентов
    </h1>
    <p style={{ fontSize: '16px', color: '#888', marginBottom: '40px' }}>
      {Object.keys(images).length} логотипов · <code>/assets/clients/имя_файла</code>
    </p>
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
      gap: '16px',
    }}>
      {Object.entries(images).map(([path, url]) => {
        const name = path.split('/').pop()?.replace(/\.(png|jpg|jpeg)$/i, '') ?? '';
        return (
          <div
            key={path}
            style={{
              background: 'white',
              borderRadius: '10px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            }}
          >
            <img
              src={url}
              alt={name}
              style={{ maxWidth: '100%', maxHeight: '80px', objectFit: 'contain' }}
            />
            <p style={{ fontSize: '12px', color: '#aaa', margin: 0, fontFamily: 'monospace', textAlign: 'center' }}>
              {name}
            </p>
          </div>
        );
      })}
    </div>
  </div>
);

const meta: Meta = {
  title: 'Ассеты/Клиенты',
  component: Gallery,
  parameters: {
    layout: 'fullscreen',
    viewport: { disable: true },
  },
};

export default meta;

export const Все: StoryObj = {};
