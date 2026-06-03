import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const images = import.meta.glob(
  '../../illustration/**/*.{jpg,jpeg,png,JPG,PNG}',
  { eager: true, query: '?url', import: 'default' }
) as Record<string, string>;

const Gallery = () => (
  <div style={{ padding: '48px', background: '#f0f0f0', minHeight: '100vh', fontFamily: 'sans-serif' }}>
    <h1 style={{ fontSize: '32px', marginBottom: '8px', color: '#1a1a1a', fontWeight: 700 }}>
      Иллюстрации
    </h1>
    <p style={{ fontSize: '16px', color: '#888', marginBottom: '40px' }}>
      {Object.keys(images).length} файлов · <code>/assets/illustration/имя_файла</code>
    </p>
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
      gap: '20px',
    }}>
      {Object.entries(images).map(([path, url]) => {
        const name = path.split('/').pop() ?? '';
        const folder = path.split('/').slice(-2, -1)[0] ?? '';
        const showFolder = folder !== 'illustration' && !folder.startsWith('../../');
        return (
          <div
            key={path}
            style={{
              background: 'white',
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            }}
          >
            <div style={{
              padding: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '200px',
              background: '#fafafa',
            }}>
              <img
                src={url}
                alt={name}
                style={{ maxWidth: '100%', maxHeight: '200px', objectFit: 'contain' }}
              />
            </div>
            <div style={{ padding: '12px 16px', borderTop: '1px solid #f0f0f0' }}>
              {showFolder && (
                <p style={{ fontSize: '11px', color: '#bbb', margin: '0 0 2px', fontFamily: 'monospace' }}>
                  {folder}/
                </p>
              )}
              <p style={{ fontSize: '12px', color: '#888', margin: 0, fontFamily: 'monospace' }}>
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
  title: 'Ассеты/Иллюстрации',
  component: Gallery,
  parameters: {
    layout: 'fullscreen',
    viewport: { disable: true },
  },
};

export default meta;

export const Все: StoryObj = {};
