import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { FullscreenImageContentHero } from './fullscreen-image-content-hero';
import { withFullPage } from '../../../storybook/storybook-decorators';

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
    className: 'text-white',
    vAlign: 'bottom',
  },
};

/**
 * Top Left Aligned FullscreenImageContentHero example.
 * Demonstrates the FullscreenImageContentHero component with top-left aligned text content.
 */
export const TopLeft: Story = {
  args: {
    image,
    innerContent,
    className: 'text-white',
    vAlign: 'top',
    hAlign: 'left',
  },
};

/**
 * Top Center Aligned FullscreenImageContentHero example.
 * Demonstrates the FullscreenImageContentHero component with top-center aligned text content.
 */
export const TopCenter: Story = {
  args: {
    image,
    innerContent,
    className: 'text-white',
    vAlign: 'top',
    hAlign: 'center',
  },
};

/**
 * Top Right Aligned FullscreenImageContentHero example.
 * Demonstrates the FullscreenImageContentHero component with top-right aligned text content.
 */
export const TopRight: Story = {
  args: {
    image,
    innerContent,
    className: 'text-white',
    vAlign: 'top',
    hAlign: 'right',
  },
};

/**
 * Middle Left Aligned FullscreenImageContentHero example.
 * Demonstrates the FullscreenImageContentHero component with middle-left aligned text content.
 */
export const MiddleLeft: Story = {
  args: {
    image,
    innerContent,
    className: 'text-white',
    vAlign: 'middle',
    hAlign: 'left',
  },
};

/**
 * Middle Center Aligned FullscreenImageContentHero example.
 * Demonstrates the FullscreenImageContentHero component with middle-center aligned text content.
 */
export const MiddleCenter: Story = {
  args: {
    image,
    innerContent,
    className: 'text-white',
    vAlign: 'middle',
    hAlign: 'center',
  },
};

/**
 * Middle Right Aligned FullscreenImageContentHero example.
 * Demonstrates the FullscreenImageContentHero component with middle-right aligned text content.
 */
export const MiddleRight: Story = {
  args: {
    image,
    innerContent,
    className: 'text-white',
    vAlign: 'middle',
    hAlign: 'right',
  },
};

/**
 * Bottom Left Aligned FullscreenImageContentHero example.
 * Demonstrates the FullscreenImageContentHero component with bottom-left aligned text content.
 */
export const BottomLeft: Story = {
  args: {
    image,
    innerContent,
    className: 'text-white',
    vAlign: 'bottom',
    hAlign: 'left',
  },
};

/**
 * Bottom Center Aligned FullscreenImageContentHero example.
 * Demonstrates the FullscreenImageContentHero component with bottom-center aligned text content.
 */
export const BottomCenter: Story = {
  args: {
    image,
    innerContent,
    className: 'text-white',
    vAlign: 'bottom',
    hAlign: 'center',
  },
};

/**
 * Bottom Right Aligned FullscreenImageContentHero example.
 * Demonstrates the FullscreenImageContentHero component with bottom-right aligned text content.
 */
export const BottomRight: Story = {
  args: {
    image,
    innerContent,
    className: 'text-white',
    vAlign: 'bottom',
    hAlign: 'right',
  },
};
