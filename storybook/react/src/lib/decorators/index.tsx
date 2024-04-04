// import { BrandProvider, NavProvider, ShellProvider } from '@/react-shell';
import { withThemeByClassName } from '@storybook/addon-themes';
import { Decorator } from '@storybook/react';
// import { brand, primaryNav } from '../config';

export const withThemeToggle: Decorator = withThemeByClassName({
  themes: {
    light: 'light',
    dark: 'dark',
  },
  defaultTheme: 'light',
});

// export const withBrandProvider: Decorator = (Story) => (
//   <BrandProvider brand={brand}>
//     <Story />
//   </BrandProvider>
// );

// export const withNavProvider: Decorator = (Story) => (
//   <NavProvider navItems={primaryNav}>
//     <Story />
//   </NavProvider>
// );

// export const withShellProvider: Decorator = (Story) => (
//   <ShellProvider brand={brand} navItems={primaryNav}>
//     <Story />
//   </ShellProvider>
// );
