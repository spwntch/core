import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ContentContainer } from './content-container';
import {
  withFullPage,
  withFullWidth,
} from '../../../storybook/storybook-decorators';
import { Button } from '@/react-ui';

/**
 * The `ContentContainer` component displays various content elements such as headings, subheadings, body text, bullets, tags, and announcements.
 *
 * ## How to Use
 *
 * Wrap the `ContentContainer` component around any content that you want to display.
 *
 * ```tsx
 * import { ContentContainer } from './content-container';
 *
 * export default function App() {
 *   const content = {
 *     heading: 'Welcome to Our Site',
 *     subHeading: 'We are glad to have you here',
 *     body: ['Our site offers a variety of features to help you succeed.'],
 *     announcement: { message: 'New feature available!', cta: <Button>Learn More</Button> },
 *     bullets: [
 *       { text: 'Feature 1' },
 *       { text: 'Feature 2' },
 *       { text: 'Feature 3' },
 *     ],
 *     tags: ['Tag 1', 'Tag 2'],
 *   };
 *
 *   return (
 *     <ContentContainer innerContent={content}>
 *       <Button >Get Started</Button>
 *       <Button variant="secondary">Learn More</Button>
 *     </ContentContainer>
 *   );
 * }
 * ```
 */
const meta: Meta<typeof ContentContainer> = {
  title: 'components/containers/content-container',
  component: ContentContainer,
  decorators: [withFullPage],
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    innerContent: {
      description: 'The content to be displayed',
      control: 'object',
    },
    vAlign: {
      description: 'Vertical alignment of the content',
      control: 'radio',
      options: ['top', 'middle', 'bottom'],
    },
    hAlign: {
      description: 'Horizontal alignment of the content',
      control: 'radio',
      options: ['left', 'center', 'right'],
    },

    className: {
      description: 'Additional class names for the component',
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof ContentContainer>;

/**
 * Basic ContentContainer example.
 * Demonstrates the ContentContainer component with centered text content.
 */
export const Basic: Story = {
  args: {
    innerContent: {
      heading: 'Welcome to Our Site',
      subHeading: 'We are glad to have you here',
      body: ['Our site offers a variety of features to help you succeed.'],
    },
    children: (
      <>
        <Button>Get Started</Button>
        <Button variant="secondary">Learn More</Button>
      </>
    ),
  },
};

/**
 * Left Aligned ContentContainer example.
 * Demonstrates the ContentContainer component with left-aligned text content.
 */
// export const LeftAligned: Story = {
//   args: {
//     alignment: 'left',
//     innerContent: {
//       heading: 'Welcome to Our Site',
//       subHeading: 'We are glad to have you here',
//       body: ['Our site offers a variety of features to help you succeed.'],
//     },
//     children: (
//       <>
//         <Button variant="outline">Get Started</Button>
//         <Button variant="ghost">Learn More</Button>
//       </>
//     ),
//   },
// };

/**
 * Right Aligned ContentContainer example.
 * Demonstrates the ContentContainer component with right-aligned text content.
 */
// export const RightAligned: Story = {
//   args: {
//     alignment: 'right',
//     innerContent: {
//       heading: 'Welcome to Our Site',
//       subHeading: 'We are glad to have you here',
//       body: ['Our site offers a variety of features to help you succeed.'],
//     },
//     children: (
//       <>
//         <Button variant="destructive">Get Started</Button>
//         <Button variant="link">Learn More</Button>
//       </>
//     ),
//   },
// };
