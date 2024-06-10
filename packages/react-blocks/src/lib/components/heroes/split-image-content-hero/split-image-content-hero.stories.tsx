import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { SplitImageContentHero } from './split-image-content-hero';
import { withFullPage } from '../../../storybook/storybook-decorators';
import {
  playBasic,
  playHorizontalFlip,
  playVerticalFlip,
  playVerticalSplit,
} from './split-image-content-hero.specs';

const meta: Meta<typeof SplitImageContentHero> = {
  title: 'blocks/heroes/split-image-content-hero',
  component: SplitImageContentHero,
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
    split: {
      description: 'The direction of the split',
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    flip: {
      description: 'Flip the order of the containers',
      control: 'boolean',
    },
    className: {
      description: 'Additional class name(s) for the component',
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof SplitImageContentHero>;

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
 * Basic SplitImageContentHero example.
 * Demonstrates a basic usage of the SplitImageContentHero component with a horizontal split.
 */
export const Basic: Story = {
  args: {
    image,
    innerContent,
    className: 'text-white',
    split: 'horizontal',
  },
  play: playBasic,
};

/**
 * Vertical Split SplitImageContentHero example.
 * Demonstrates the SplitImageContentHero component with a vertical split.
 */
export const VerticalSplit: Story = {
  args: {
    image,
    innerContent,
    className: 'text-white',
    split: 'vertical',
  },
  play: playVerticalSplit,
};

/**
 * Horizontal Flip SplitImageContentHero example.
 * Demonstrates the SplitImageContentHero component with a horizontal split and flipped order.
 */
export const HorizontalFlip: Story = {
  args: {
    image,
    innerContent,
    className: 'text-white',
    split: 'horizontal',
    flip: true,
  },
  play: playHorizontalFlip,
};

/**
 * Vertical Flip SplitImageContentHero example.
 * Demonstrates the SplitImageContentHero component with a vertical split and flipped order.
 */
export const VerticalFlip: Story = {
  args: {
    image,
    innerContent,
    className: 'text-white',
    split: 'vertical',
    flip: true,
  },
  play: playVerticalFlip,
};
