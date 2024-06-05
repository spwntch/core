import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { UnderConstruction } from './under-construction';

/**
 * The `UnderConstruction` component provides a styled container with an "Under Construction" message.
 *
 * ## How to Use
 *
 * Wrap the `UnderConstruction` component around any content that you want to indicate is under construction.
 *
 * ```tsx
 * import { UnderConstruction } from './under-construction';
 *
 * export default function App() {
 *   return (
 *     <UnderConstruction>
 *       <p>This section is being worked on.</p>
 *     </UnderConstruction>
 *   );
 * }
 * ```
 */
const meta: Meta<typeof UnderConstruction> = {
  title: 'shell/placeholders/under-construction',
  component: UnderConstruction,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof UnderConstruction>;

/**
 * Basic UnderConstruction example.
 * Demonstrates the UnderConstruction component with text.
 */
export const Basic: Story = {
  args: {
    children: <p>This section is being worked on.</p>,
  },
};

/**
 * UnderConstruction with Image example.
 * Demonstrates the UnderConstruction component with an image.
 */
export const WithImage: Story = {
  args: {
    children: (
      <img
      src="/images/abstract-1.webp"
      alt="Abstract Image 1"
        className="max-w-full h-auto"
      />
    ),
  },
};
