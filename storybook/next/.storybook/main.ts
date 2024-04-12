import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  staticDirs: [
    { from: '../../../assets/spwn/brand/public', to: '/brand' },
    // { from: '../../../assets/storybook/public', to: '/images' },
  ],
  docs: {
    autodocs: 'tag',
  },
  stories: ['../src/stories/**/!(_)*.@(mdx|stories.@(js|jsx|ts|tsx))'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-themes',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {
      // builder: {
      //   viteConfigPath: 'vite.config.ts',
      // },
    },
  },
};

export default config;
