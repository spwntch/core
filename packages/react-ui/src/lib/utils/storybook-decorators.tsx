import { Decorator } from '@storybook/react';

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
