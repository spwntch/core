import { withThemeByClassName } from '@storybook/addon-themes';
import { Decorator } from '@storybook/react';

export const withThemeToggle: Decorator = withThemeByClassName({
  themes: {
    light: 'light',
    dark: 'dark',
  },
  defaultTheme: 'light',
});
