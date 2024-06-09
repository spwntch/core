import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import LogoCloud, { ILogoCloudProps } from './logo-cloud';
import { playBasic, playWithTitle, playWithoutTitle } from './logo-cloud.specs';

const componentDescription = `
### Overview
The \`LogoCloud\` component displays a cloud of logos with an optional title. Logos are arranged in a responsive grid.

### Props
- \`title\`: Optional title for the logo cloud.
- \`logos\`: Array of logo objects containing src and optional alt text.
- \`className\`: Additional class name(s) for the container.

### Example
\`\`\`
<LogoCloud
  title="Our Partners"
  logos={[
    { src: '/path/to/logo1.png', alt: 'Logo 1' },
    { src: '/path/to/logo2.png', alt: 'Logo 2' },
  ]}
/>
\`\`\`

### Notes
This component is flexible and can be used in various sections of a webpage to display a cloud of logos effectively.
`;

const meta: Meta<typeof LogoCloud> = {
  title: 'components/grids/logo-cloud',
  component: LogoCloud,
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
    title: {
      description: 'Optional title for the logo cloud',
      control: 'text',
    },
    logos: {
      description: 'Array of logo objects containing src and optional alt text',
      control: 'object',
    },
    className: {
      description: 'Allows style variation by injecting additional classes',
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof LogoCloud>;

const logos = [
  { src: '/client-logos/nairobi-colored.svg', alt: 'This is a fake logo.' },
  { src: '/client-logos/hamilton-colored.svg', alt: 'This is a fake logo.' },
  { src: '/client-logos/theo-colored.svg', alt: 'This is a fake logo.' },
  { src: '/client-logos/brooklyn-colored.svg', alt: 'This is a fake logo.' },
  { src: '/client-logos/oslo-colored.svg', alt: 'This is a fake logo.' },
  { src: '/client-logos/phoenix-colored.svg', alt: 'This is a fake logo.' },
  { src: '/client-logos/scale-colored.svg', alt: 'This is a fake logo.' },
  { src: '/client-logos/milano-colored.svg', alt: 'This is a fake logo.' },
];

/**
 * Basic LogoCloud example.
 * Demonstrates a basic usage of the LogoCloud component.
 */
export const Basic: Story = {
  args: {
    title: 'Our Partners',
    logos,
  },
  play: playBasic,
};

/**
 * LogoCloud with a primary background.
 * Demonstrates the LogoCloud component with a primary background.
 */
export const WithPrimaryBackground: Story = {
  args: {
    title: 'Our Partners',
    logos: [
      { src: '/client-logos/nairobi-white.svg', alt: 'This is a fake logo.' },
      { src: '/client-logos/hamilton-white.svg', alt: 'This is a fake logo.' },
      { src: '/client-logos/theo-white.svg', alt: 'This is a fake logo.' },
      { src: '/client-logos/brooklyn-white.svg', alt: 'This is a fake logo.' },
      { src: '/client-logos/oslo-white.svg', alt: 'This is a fake logo.' },
      { src: '/client-logos/phoenix-white.svg', alt: 'This is a fake logo.' },
      { src: '/client-logos/scale-white.svg', alt: 'This is a fake logo.' },
      { src: '/client-logos/milano-white.svg', alt: 'This is a fake logo.' },
    ],
    className: '!bg-primary !text-primary-foreground',
  },
  play: playWithTitle,
};

/**
 * LogoCloud without a title.
 * Demonstrates the LogoCloud component without a title.
 */
export const WithoutTitle: Story = {
  args: {
    logos,
  },
  play: playWithoutTitle,
};
