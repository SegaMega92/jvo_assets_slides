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
  // base для деплоя в подпапку GitHub Pages. Локально SB_BASE не задан → '/'.
  // В CI: SB_BASE=/jvo_assets_slides/ — ассеты резолвятся через import.meta.env.BASE_URL.
  viteFinal: async (cfg) => {
    if (process.env.SB_BASE) cfg.base = process.env.SB_BASE;
    return cfg;
  },
};

export default config;
