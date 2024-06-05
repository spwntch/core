import type { Meta, StoryObj } from '@storybook/react';
import { BasicHeader } from './basic-header';

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
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    header: {
      description: 'The content of the header',
      control: 'object',
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
 * Demonstrates the BasicHeader component with text content.
 */
export const Basic: Story = {
  args: {
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
};
