import type { Preview } from '@storybook/react';

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    backgrounds: { disable: true },
    viewport: {
      viewports: {
        slide: {
          name: 'Слайд 16:9 (1920×1080)',
          styles: { width: '1920px', height: '1080px' },
          type: 'desktop',
        },
      },
      // без defaultViewport — слайд скейлится в авто-режиме под весь iframe
    },
  },
};

export default preview;
