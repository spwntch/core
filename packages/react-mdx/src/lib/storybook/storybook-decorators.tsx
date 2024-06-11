import { Decorator } from '@storybook/react/*';
import { ShellProvider } from '../components';
import { BrandProvider } from '../components/brand/brand-provider/brand-provider';
import { NavProvider } from '../components/nav/nav-provider/nav-provider';
import { ThemeProvider } from '../components/theme-provider/theme-provider';
import { brand, primaryNav } from './storybook-config';

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

export const withThemeProvider: Decorator = (Story) => (
  <ThemeProvider
    attribute="class"
    defaultTheme={'system'}
    enableSystem
    disableTransitionOnChange
  >
    <Story />
  </ThemeProvider>
);

export const withShellProvider: Decorator = (Story) => (
  <div className="w-full ">
    <ShellProvider brand={brand} navItems={primaryNav}>
      <Story />
    </ShellProvider>
  </div>
);
export const withBrandProvider: Decorator = (Story) => (
  <div className="w-full ">
    <BrandProvider brand={brand}>
      <Story />
    </BrandProvider>
  </div>
);
export const withNavProvider: Decorator = (Story) => (
  <div className="w-full ">
    <NavProvider navItems={primaryNav}>
      <Story />
    </NavProvider>
  </div>
);