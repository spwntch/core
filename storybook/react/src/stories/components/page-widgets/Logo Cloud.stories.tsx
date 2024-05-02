import { LogoCloud } from '@/react-components';
import type { Meta, StoryObj } from '@storybook/react';
import { withFullPage } from '../../../lib/decorators';

const meta: Meta<typeof LogoCloud> = {
  component: LogoCloud,
  decorators: [withFullPage],

  args: {
    logos: [
      { src: '/client-logos/woolworths-wide-negative.webp', alt: 'Woolworths' },
      { src: '/client-logos/media-24-wide-negative.webp', alt: 'Media 24' },
      { src: '/client-logos/old-mutual-wide-negative.webp', alt: 'Old Mutual' },
      { src: '/client-logos/vodacom-wide-negative.webp', alt: 'Vodacom' },
    ],
  },
};
export default meta;
type Story = StoryObj<typeof LogoCloud>;

export const logoCloud: Story = {};
