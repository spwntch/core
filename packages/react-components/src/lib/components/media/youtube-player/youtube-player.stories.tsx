import { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { YoutubePlayer } from './youtube-player';
import { playBasic } from './youtube-player.specs';

const componentDescription = `
### Overview
The \`YoutubePlayer\` component renders a YouTube player that displays a thumbnail image initially. When the thumbnail is clicked, the YouTube player is displayed.

### Props
- \`id\`: The ID of the YouTube video to be played.
- \`thumbnailUrl\`: The URL of the thumbnail image to be displayed initially.

### Example
\`\`\`
<YoutubePlayer id="dQw4w9WgXcQ" thumbnailUrl="https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg" />
\`\`\`

### Notes
This component is flexible and can be used to embed YouTube videos with an initial thumbnail display.
`;

const meta: Meta<typeof YoutubePlayer> = {
  title: 'components/media/youtube-player',
  component: YoutubePlayer,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: componentDescription,
      },
    },
  },
  argTypes: {
    id: {
      description: 'The ID of the YouTube video to be played',
      control: 'text',
      defaultValue: 'dQw4w9WgXcQ',
    },
    thumbnailUrl: {
      description: 'The URL of the thumbnail image to be displayed initially',
      control: 'text',
      defaultValue: 'https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg',
    },
  },
};

export default meta;

type Story = StoryObj<typeof YoutubePlayer>;

/**
 * Basic YoutubePlayer example.
 * Demonstrates a basic usage of the YoutubePlayer component.
 */
export const Basic: Story = {
  args: {
    id: 'dQw4w9WgXcQ',
    thumbnailUrl: 'https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg',
  },
  play: playBasic,
};
