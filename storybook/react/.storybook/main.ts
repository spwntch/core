import type { StorybookConfig } from '@storybook/react-vite';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  staticDirs: [
    { from: '../../../assets/spwn/brand/public', to: '/brand' },
    { from: '../../../assets/spwn/images/public', to: '/images' },
    { from: '../../../assets/storybook/images/public', to: '/images' },
    {
      from: '../../../assets/spwn/under-construction/public',
      to: '/under-construction',
    },
    { from: '../../../assets/storybook/client-logos', to: '/client-logos' },
    { from: '../../../assets/storybook/articles/public', to: '/articles' },
    {
      from: '../../../assets/interact/client-logos/public',
      to: '/client-logos',
    },
  ],
  docs: {
    autodocs: 'tag',
  },
  stories: [
    '../src/docs/**/!(_)*.mdx',
    '../../../packages/**/src/**/!(_)*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-themes',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  viteFinal: async (config) =>
    mergeConfig(config, {
      plugins: [nxViteTsPaths()],
    }),
};

export default config;
