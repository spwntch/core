import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { BasicHeader } from './basic-header';
import { withFullPage, withFullWidth } from '../../../storybook/storybook-decorators';
import { playBasic, playLeftAligned, playRightAligned } from './basic-header.specs';

/**
 * The `BasicHeader` component displays a section header with a heading, sub-heading, and body text.
 *
 * ## How to Use
 *
 * Wrap the `BasicHeader` component around any content that you want to include under the header.
 *
 * ```tsx
 * import { BasicHeader } from './basic-header';
 *
 * export default function App() {
 *   const headerContent = {
 *     heading: 'Welcome to Our Site',
 *     subHeading: 'We are glad to have you here',
 *     body: ['Our site offers a variety of features to help you succeed.'],
 *   };
 *
 *   return (
 *     <BasicHeader header={headerContent}>
 *       <button>Get Started</button>
 *       <button>Learn More</button>
 *     </BasicHeader>
 *   );
 * }
 * ```
 */
const meta: Meta<typeof BasicHeader> = {
  title: 'content/headers/basic-header',
  component: BasicHeader,
  tags: ['autodocs'],
  decorators: [withFullWidth],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    header: {
      description: 'The content of the header',
      control: 'object',
    },
    alignment: {
      description: 'Text alignment',
      control: 'select',
      options: ['left', 'center', 'right'],
    },
    className: {
      description: 'Additional class names for the component',
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof BasicHeader>;

/**
 * Basic BasicHeader example.
 * Demonstrates the BasicHeader component with centered text content.
 */
export const Basic: Story = {
  args: {
    alignment: 'center',
    header: {
      heading: 'Welcome to Our Site',
      subHeading: 'We are glad to have you here',
      body: ['Our site offers a variety of features to help you succeed.'],
    },
    children: (
      <>
        <button>Get Started</button>
        <button>Learn More</button>
      </>
    ),
  },
  play: playBasic,
};

/**
 * Left Aligned BasicHeader example.
 * Demonstrates the BasicHeader component with left-aligned text content.
 */
export const LeftAligned: Story = {
  args: {
    alignment: 'left',
    header: {
      heading: 'Welcome to Our Site',
      subHeading: 'We are glad to have you here',
      body: ['Our site offers a variety of features to help you succeed.'],
    },
    children: (
      <>
        <button>Get Started</button>
        <button>Learn More</button>
      </>
    ),
  },
  play: playLeftAligned,
};

/**
 * Right Aligned BasicHeader example.
 * Demonstrates the BasicHeader component with right-aligned text content.
 */
export const RightAligned: Story = {
  args: {
    alignment: 'right',
    header: {
      heading: 'Welcome to Our Site',
      subHeading: 'We are glad to have you here',
      body: ['Our site offers a variety of features to help you succeed.'],
    },
    children: (
      <>
        <button>Get Started</button>
        <button>Learn More</button>
      </>
    ),
  },
  play: playRightAligned,
};
