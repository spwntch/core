import { BrandProvider } from '@/react-shell';
import { withThemeByClassName } from '@storybook/addon-themes';
import { Decorator } from '@storybook/react';
import { brand } from '../config';

export const withThemeToggle: Decorator = withThemeByClassName({
  themes: {
    light: 'light',
    dark: 'dark',
  },
  defaultTheme: 'light',
});
export const withBrandProvider: Decorator = (Story) => (
  <BrandProvider brand={brand}>
    <Story />
  </BrandProvider>
);