
import { Decorator } from '@storybook/react/*';
import { brand, primaryNav } from './storybook-config';
import { ShellProvider } from '../components';

export const withShellProvider: Decorator = (Story) => (
  <div className="w-full ">
    <ShellProvider brand={brand} navItems={primaryNav}>
      <Story />
    </ShellProvider>
  </div>
);
