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
      order: ['Introduction', 'Tech Stack', 'Tailwind', 'components', 'shell'],
    },
  },
  // controls: { exclude: ['children'] },
};

export const decorators: Decorator[] = [withThemeToggle];
