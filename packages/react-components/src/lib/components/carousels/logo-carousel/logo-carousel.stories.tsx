import { expect } from '@storybook/jest';
import { Meta, StoryObj } from '@storybook/react';
import { toHaveNoViolations } from 'jest-axe';
import LogoCarousel from './logo-carousel';
import { playBasic } from './logo-carousel.specs';

expect.extend(toHaveNoViolations);

const componentDescription = `
### Overview
The \`LogoCarousel\` component displays a carousel of logos with an optional title.

### Props
- \`title\`: The title of the carousel.
- \`logos\`: An array of logo image URLs.

### Example
\`\`\`
<LogoCarousel title="Our Partners" logos={["/logo1.png", "/logo2.png"]} />
\`\`\`

### Notes
This component can be used to showcase partners, sponsors, or any other set of logos.
`;

const meta: Meta<typeof LogoCarousel> = {
  title: 'components/carousels/logo-carousel',
  component: LogoCarousel,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'The title of the carousel',
    },
    logos: {
      description: 'An array of logo image URLs',
    },
  },
  args: {
    title: 'Our Partners',
    logos: ['/logo1.png', '/logo2.png', '/logo3.png'],
  },
  parameters: {
    docs: {
      description: {
        component: componentDescription,
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof LogoCarousel>;

export const Basic: Story = {
  args: {
    title: 'Our Partners',
    logos: [
      '/client-logos/brooklyn-colored.svg',
      '/client-logos/hamilton-colored.svg',
      '/client-logos/milano-colored.svg',
      '/client-logos/nairobi-colored.svg',
      '/client-logos/oslo-colored.svg',
      '/client-logos/phoenix-colored.svg',
      '/client-logos/san-francisco-colored.svg',
      '/client-logos/scale-colored.svg',
      '/client-logos/theo-colored.svg',
    ],
  },
  play: playBasic,
};
