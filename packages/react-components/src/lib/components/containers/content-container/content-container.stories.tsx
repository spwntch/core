import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ContentContainer } from './content-container';
import { Button } from '@/react-ui';
import { withFullPage } from '../../../storybook/storybook-decorators';

/**
 * The `ContentContainer` component displays a section with a heading, sub-heading, body text, and optional bullets and tags.
 *
 * ## How to Use
 *
 * Wrap the `ContentContainer` component around any content that you want to include under the section.
 *
 * ```tsx
 * import { ContentContainer } from './content-container';
 *
 * export default function App() {
 *   const innerContent = {
 *     heading: 'Welcome to Our Site',
 *     subHeading: 'We are glad to have you here',
 *     body: ['Our site offers a variety of features to help you succeed.'],
 *   };
 *
 *   return (
 *     <ContentContainer innerContent={innerContent} hAlign="center" vAlign="middle">
 *       <Button>Get Started</Button>
 *       <Button variant="secondary">Learn More</Button>
 *     </ContentContainer>
 *   );
 * }
 * ```
 */
const meta: Meta<typeof ContentContainer> = {
  title: 'components/containers/content-container',
  component: ContentContainer,
  tags: ['autodocs'],
  decorators: [withFullPage],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    vAlign: {
      description: 'Vertical alignment of the content',
      control: 'select',
      options: ['top', 'middle', 'bottom'],
    },
    hAlign: {
      description: 'Horizontal alignment of the content',
      control: 'select',
      options: ['left', 'center', 'right'],
    },
    className: {
      description: 'Additional class names for the component',
      control: 'text',
    },
    innerContent: {
      description: 'The content of the section',
      control: 'object',
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
    hAlign: 'center',
    vAlign: 'middle',
    children: (
      <>
        <Button>Get Started</Button>
        <Button variant="secondary">Learn More</Button>
      </>
    ),
  },
};

/**
 * Top Left Aligned ContentContainer example.
 * Demonstrates the ContentContainer component with top-left aligned text content.
 */
export const TopLeft: Story = {
  args: {
    innerContent: {
      heading: 'Welcome to Our Site',
      subHeading: 'We are glad to have you here',
      body: ['Our site offers a variety of features to help you succeed.'],
    },
    hAlign: 'left',
    vAlign: 'top',
    children: (
      <>
        <Button>Get Started</Button>
        <Button variant="secondary">Learn More</Button>
      </>
    ),
  },
};

/**
 * Top Center Aligned ContentContainer example.
 * Demonstrates the ContentContainer component with top-center aligned text content.
 */
export const TopCenter: Story = {
  args: {
    innerContent: {
      heading: 'Welcome to Our Site',
      subHeading: 'We are glad to have you here',
      body: ['Our site offers a variety of features to help you succeed.'],
    },
    hAlign: 'center',
    vAlign: 'top',
    children: (
      <>
        <Button>Get Started</Button>
        <Button variant="secondary">Learn More</Button>
      </>
    ),
  },
};

/**
 * Top Right Aligned ContentContainer example.
 * Demonstrates the ContentContainer component with top-right aligned text content.
 */
export const TopRight: Story = {
  args: {
    innerContent: {
      heading: 'Welcome to Our Site',
      subHeading: 'We are glad to have you here',
      body: ['Our site offers a variety of features to help you succeed.'],
    },
    hAlign: 'right',
    vAlign: 'top',
    children: (
      <>
        <Button>Get Started</Button>
        <Button variant="secondary">Learn More</Button>
      </>
    ),
  },
};

/**
 * Middle Left Aligned ContentContainer example.
 * Demonstrates the ContentContainer component with middle-left aligned text content.
 */
export const MiddleLeft: Story = {
  args: {
    innerContent: {
      heading: 'Welcome to Our Site',
      subHeading: 'We are glad to have you here',
      body: ['Our site offers a variety of features to help you succeed.'],
    },
    hAlign: 'left',
    vAlign: 'middle',
    children: (
      <>
        <Button>Get Started</Button>
        <Button variant="secondary">Learn More</Button>
      </>
    ),
  },
};

/**
 * Middle Right Aligned ContentContainer example.
 * Demonstrates the ContentContainer component with middle-right aligned text content.
 */
export const MiddleRight: Story = {
  args: {
    innerContent: {
      heading: 'Welcome to Our Site',
      subHeading: 'We are glad to have you here',
      body: ['Our site offers a variety of features to help you succeed.'],
    },
    hAlign: 'right',
    vAlign: 'middle',
    children: (
      <>
        <Button>Get Started</Button>
        <Button variant="secondary">Learn More</Button>
      </>
    ),
  },
};

/**
 * Bottom Left Aligned ContentContainer example.
 * Demonstrates the ContentContainer component with bottom-left aligned text content.
 */
export const BottomLeft: Story = {
  args: {
    innerContent: {
      heading: 'Welcome to Our Site',
      subHeading: 'We are glad to have you here',
      body: ['Our site offers a variety of features to help you succeed.'],
    },
    hAlign: 'left',
    vAlign: 'bottom',
    children: (
      <>
        <Button>Get Started</Button>
        <Button variant="secondary">Learn More</Button>
      </>
    ),
  },
};

/**
 * Bottom Center Aligned ContentContainer example.
 * Demonstrates the ContentContainer component with bottom-center aligned text content.
 */
export const BottomCenter: Story = {
  args: {
    innerContent: {
      heading: 'Welcome to Our Site',
      subHeading: 'We are glad to have you here',
      body: ['Our site offers a variety of features to help you succeed.'],
    },
    hAlign: 'center',
    vAlign: 'bottom',
    children: (
      <>
        <Button>Get Started</Button>
        <Button variant="secondary">Learn More</Button>
      </>
    ),
  },
};

/**
 * Bottom Right Aligned ContentContainer example.
 * Demonstrates the ContentContainer component with bottom-right aligned text content.
 */
export const BottomRight: Story = {
  args: {
    innerContent: {
      heading: 'Welcome to Our Site',
      subHeading: 'We are glad to have you here',
      body: ['Our site offers a variety of features to help you succeed.'],
    },
    hAlign: 'right',
    vAlign: 'bottom',
    children: (
      <>
        <Button>Get Started</Button>
        <Button variant="secondary">Learn More</Button>
      </>
    ),
  },
};
