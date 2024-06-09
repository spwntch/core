import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { withFullPage } from '../../../storybook/storybook-decorators';
import { FullscreenImageContentHero } from './fullscreen-image-hero';

const meta: Meta<typeof FullscreenImageContentHero> = {
  title: 'blocks/heroes/fullscreen-image-content-hero',
  component: FullscreenImageContentHero,
  decorators: [withFullPage],
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    image: {
      description: 'The image object passed to the component',
      control: 'object',
    },
    innerContent: {
      description: 'The content object passed to the component',
      control: 'object',
    },
    className: {
      description: 'Additional class name(s) for the component',
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof FullscreenImageContentHero>;

const image = {
  src: '/images/guy-sitting-at-tech-control-station.webp',
  alt: 'Guy sitting at tech control station',
  darken: true,
};

const innerContent = {
  title: { content: 'Welcome to Spawntech' },
  subTitle: { content: 'Pioneering the Future of Software Development' },
  body: [
    'Spawntech is at the forefront of transforming software development, blending advanced DevOps, precise UX implementation, and customized development.',
  ],
  tags: ['DevOps', 'UX/UI', 'Lean Innovation', 'Node.js'],
};

/**
 * Basic FullscreenImageContentHero example.
 * Demonstrates a basic usage of the FullscreenImageContentHero component.
 */
export const Basic: Story = {
  args: {
    image,
    innerContent,
    className: '',
  },
};
