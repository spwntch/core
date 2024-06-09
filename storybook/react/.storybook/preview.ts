import '@/tailwind/tailwind.css';

import { Decorator, Parameters } from '@storybook/react';
import { withThemeToggle } from '../src/lib/decorators';

export const parameters: Parameters = {
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: '#ffffff' },
      { name: 'dark', value: '#000000' },
    ],
    disable: true,
  },
  controls: { exclude: ['children'] },
  options: {
    storySort: {
      order: [
        'Introduction',
        'Tailwind',
        'Tech Stack',
        'ui',
        'typography',
        ['complete-example', '*'],
        'components',
        ['layouts', 'containers',  'groups', 'grids', 'carousels', 'content', 'media', 'heroes', '*'],
        'shell',
        [
          'theme-provider',
          'shell-provider',
          'brand',
          ['brand-provider', '*'],
          '*',
        ],
        'blog',
      ],
    },
  },
  // controls: { exclude: ['children'] },
};

export const decorators: Decorator[] = [withThemeToggle];
