import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ContentContainer, ContentContainerProps } from './content-container';
import { withFullPage } from '../../../storybook/storybook-decorators';

const componentDescription = `
### Overview
The \`ContentContainer\` component is a versatile container for displaying various types of content such as headings, subheadings, paragraphs, bullets, and children elements. It allows for different alignments to provide a flexible layout for your content.

### Props
- \`innerContent\`: The content object to be displayed.
- \`alignment\`: The alignment of the content (\`left\`, \`center\`, \`right\`).
- \`className\`: Additional class name(s) for the container.
- \`children\`: Additional content to be displayed inside the container.

### Example
\`\`\`
<ContentContainer innerContent={content} alignment="center">
  <button>Click Me</button>
</ContentContainer>
\`\`\`
`;

const meta: Meta<typeof ContentContainer> = {
  title: 'components/containers/content-container',
  component: ContentContainer,
  decorators: [withFullPage],
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: componentDescription,
      },
    },
  },
  argTypes: {
    innerContent: {
      description: 'The content object to be displayed',
      control: 'object',
    },
    alignment: {
      description: 'The alignment of the content',
      control: 'select',
      options: ['left', 'center', 'right'],
    },
    className: {
      description: 'Additional class name(s) for the container',
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
    alignment: 'center',
    innerContent: {
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

/**
 * Left Aligned ContentContainer example.
 * Demonstrates the ContentContainer component with left-aligned text content.
 */
export const LeftAligned: Story = {
  args: {
    alignment: 'left',
    innerContent: {
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

/**
 * Right Aligned ContentContainer example.
 * Demonstrates the ContentContainer component with right-aligned text content.
 */
export const RightAligned: Story = {
  args: {
    alignment: 'right',
    innerContent: {
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

/**
 * ContentContainer with Announcement example.
 * Demonstrates the ContentContainer component with an announcement message.
 */
export const WithAnnouncement: Story = {
  args: {
    alignment: 'center',
    innerContent: {
      announcement: { message: 'This is an announcement', cta: <button>CTA</button> },
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

/**
 * ContentContainer with Bullets example.
 * Demonstrates the ContentContainer component with bullet points.
 */
export const WithBullets: Story = {
  args: {
    alignment: 'center',
    innerContent: {
      heading: 'Welcome to Our Site',
      subHeading: 'We are glad to have you here',
      body: ['Our site offers a variety of features to help you succeed.'],
      bullets: [
        { text: 'Feature 1' },
        { text: 'Feature 2' },
        { text: 'Feature 3' },
      ],
    },
    children: (
      <>
        <button>Get Started</button>
        <button>Learn More</button>
      </>
    ),
  },
};
