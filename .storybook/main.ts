import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  staticDirs: [
    '../public',
    { from: '../backgrounds', to: '/assets/backgrounds' },
    { from: '../clients', to: '/assets/clients' },
    { from: '../illustration', to: '/assets/illustration' },
    { from: '../logo', to: '/assets/logo' },
    { from: '../procuts', to: '/assets/procuts' },
    { from: '../v2assets', to: '/v2assets' },
  ],
};

export default config;
