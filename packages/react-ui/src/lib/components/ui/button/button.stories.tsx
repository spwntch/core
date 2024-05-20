// button.stories.tsx

import { Button } from './button';
import type { Meta, StoryObj } from '@storybook/react';

/**
 * Meta configuration for the Button component stories.
 */
const meta: Meta<typeof Button> = {
  title: 'UI/Components/Button',
  component: Button,
  args: {
    /** The default content of the button. */
    children: 'Click Me',
    /** The default variant of the button. */
    variant: 'default',
    /** The default size of the button. */
    size: 'default',
  },
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: 'A customizable button component for various use cases.',
    docs: {
      description: {
        component:
          'A button component that supports different variants and sizes.',
      },
    },
  },
  argTypes: {
    children: {
      description: 'The content of the button.',
      control: 'text',
    },
    className: {
      description: 'Additional CSS classes for custom styling.',
      control: 'text',
    },
    variant: {
      description: 'The variant of the button.',
      control: 'select',
      options: [
        'default',
        'destructive',
        'outline',
        'secondary',
        'ghost',
        'link',
      ],
      table: {
        type: {
          summary: 'default | destructive | outline | secondary | ghost | link',
        },
        defaultValue: { summary: 'default' },
      },
    },
    size: {
      description: 'The size of the button.',
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
      table: {
        type: { summary: 'default | sm | lg | icon' },
        defaultValue: { summary: 'default' },
      },
    },
    asChild: {
      description: 'If true, renders as a child component.',
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Button>;

/**
 * Basic usage of the Button component.
 */
export const Basic: Story = {
  args: {
    children: 'Click Me',
  },
};

/**
 * Different variants of the Button component.
 */
export const Variants: Story = {
  args: {
    children: 'Click Me',
  },
  render: (args) => (
    <div className="flex gap-4">
      <Button {...args} variant="default" />
      <Button {...args} variant="destructive" />
      <Button {...args} variant="outline" />
      <Button {...args} variant="secondary" />
      <Button {...args} variant="ghost" />
      <Button {...args} variant="link" />
    </div>
  ),
};

/**
 * Different sizes of the Button component.
 */
export const Sizes: Story = {
  args: {
    children: 'Click Me',
  },
  render: (args) => (
    <div className="flex gap-4">
      <Button {...args} size="default" />
      <Button {...args} size="sm" />
      <Button {...args} size="lg" />
      <Button {...args} size="icon" />
    </div>
  ),
};

/**
 * Button component rendered as a child element with a nested <a> tag.
 */
export const AsChild: Story = {
  args: {
    asChild: true,
  },
  render: (args) => (
    <Button {...args}>
      <a href="#">Click Me</a>
    </Button>
  ),
};
