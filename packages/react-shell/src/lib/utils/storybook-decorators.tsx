import { Decorator } from '@storybook/react/*';
import { brand, primaryNav } from './storybook-config';
import { ShellProvider } from '../components';
import { BrandProvider } from '../providers';

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
