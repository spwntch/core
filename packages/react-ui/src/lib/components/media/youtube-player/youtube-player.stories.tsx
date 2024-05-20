import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { YoutubePlayer } from './youtube-player';

const meta: Meta<typeof YoutubePlayer> = {
  title: 'UI/Media/Youtube Player',
  component: YoutubePlayer,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional class names to style the component.',
    },
    id: {
      control: 'text',
      description: 'The YouTube video ID to be played.',
    },
    thumbnailUrl: {
      control: 'text',
      description: 'URL of the thumbnail image to be displayed before the video is played.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof YoutubePlayer>;

/**
 * Default YoutubePlayer component showcasing basic usage.
 */
export const Default: Story = {
  args: {
    id: 'dQw4w9WgXcQ',
    thumbnailUrl: 'https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg',
  },
  render: (args) => <YoutubePlayer {...args} />,
};
