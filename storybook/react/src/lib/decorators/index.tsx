import { BrandProvider, ShellProvider } from '@/react-shell';
import { withThemeByClassName } from '@storybook/addon-themes';
import { Decorator } from '@storybook/react';
import { brand, primaryNav } from '../config';

export const withThemeToggle: Decorator = withThemeByClassName({
  themes: {
    light: 'light',
    dark: 'dark',
  },
  defaultTheme: 'light',
});

export const withFullWidth: Decorator = (Story) => (
  <div className="w-screen container">
    <Story />
  </div>
);

export const withFullPage: Decorator = (Story) => (
  <div className="w-full h-screen">
    <Story />
  </div>
);

export const withBrandProvider: Decorator = (Story) => (
  <BrandProvider brand={brand}>
    <Story />
  </BrandProvider>
);

export const withShellProvider: Decorator = (Story) => (
  <div className="w-screen container">
    <ShellProvider brand={brand} navItems={primaryNav}>
      <Story />
    </ShellProvider>
  </div>
);

export const withFlexRowWrap: Decorator = (Story) => (
  <div className="flex flex-wrap gap-8">
    <Story />
  </div>
);
