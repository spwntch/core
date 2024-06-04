
import { Decorator } from '@storybook/react/*';
import { ShellProvider } from '../providers/shell-provider';
import { brand, primaryNav } from './storybook-config';

export const withShellProvider: Decorator = (Story) => (
  <div className="w-full ">
    <ShellProvider brand={brand} navItems={primaryNav}>
      <Story />
    </ShellProvider>
  </div>
);
