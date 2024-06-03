import { Decorator } from '@storybook/react/*';
import { ShellProvider } from '../../providers';
import { brand } from '../config/brand';
import { primaryNav } from '../config/nav';

export const withShellProvider: Decorator = (Story) => (
  <div className="w-full ">
    <ShellProvider brand={brand} navItems={primaryNav}>
      <Story />
    </ShellProvider>
  </div>
);
