import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import SocialIcon from './social-icon';
import { withFullWidth } from '../../../storybook/storybook-decorators';
import { playBasic, playDarkMode } from './social-icon.specs';

const componentDescription = `
### Overview
The \`SocialIcon\` component displays various social media icons with links.

### Props
- \`platform\`: The social media platform (linkedin, facebook, youtube, instagram, twitter).
- \`url\`: The URL to link to.
- \`className\`: Additional class name(s) for the component.

### Example
\`\`\`
<SocialIcon platform="linkedin" url="https://www.linkedin.com" />
\`\`\`

### Notes
This component uses custom SVG icons for different social media platforms.
`;

const meta: Meta<typeof SocialIcon> = {
  title: 'shell/social-icons/social-icon',
  component: SocialIcon,
  tags: ['autodocs'],
  decorators: [withFullWidth],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: componentDescription,
      },
    },
  },
  argTypes: {
    platform: {
      description: 'The social media platform',
      control: 'select',
      options: ['linkedin', 'facebook', 'youtube', 'instagram', 'twitter'],
    },
    url: {
      description: 'The URL to link to',
      control: 'text',
    },
    className: {
      description: 'Additional class name(s) for the component',
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof SocialIcon>;

/**
 * Icons Palette example.
 * Demonstrates all SocialIcon components in a flex layout.
 */
export const Icons: Story = {
  render: () => (
    <div className="flex gap-4 justify-center items-center">
      <SocialIcon platform="linkedin" url="https://www.linkedin.com" />
      <SocialIcon platform="facebook" url="https://www.facebook.com" />
      <SocialIcon platform="youtube" url="https://www.youtube.com" />
      <SocialIcon platform="instagram" url="https://www.instagram.com" />
      <SocialIcon platform="twitter" url="https://www.twitter.com" />
    </div>
  ),
  play: playBasic,
};

/**
 * Dark Mode Icons Palette example.
 * Demonstrates all SocialIcon components in a flex layout with dark mode.
 */
export const DarkModeIcons: Story = {
  parameters: {
    themes: {
      themeOverride: 'dark',
    },
  },
  render: () => (
    <div className="flex gap-4 justify-center items-center p-4">
      <SocialIcon
        platform="linkedin"
        url="https://www.linkedin.com"
        className="text-white"
      />
      <SocialIcon
        platform="facebook"
        url="https://www.facebook.com"
        className="text-white"
      />
      <SocialIcon
        platform="youtube"
        url="https://www.youtube.com"
        className="text-white"
      />
      <SocialIcon
        platform="instagram"
        url="https://www.instagram.com"
        className="text-white"
      />
      <SocialIcon
        platform="twitter"
        url="https://www.twitter.com"
        className="text-white"
      />
    </div>
  ),
  play: playDarkMode,
};
