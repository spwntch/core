import { Meta, StoryObj } from '@storybook/react';
import { Heart } from 'lucide-react';
import { Button, ButtonProps } from './button';

const meta: Meta<ButtonProps> = {
  title: 'ui/button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'default',
        'destructive',
        'outline',
        'secondary',
        'ghost',
        'link',
      ],
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg', 'icon'],
    },
    asChild: {
      control: { type: 'boolean' },
    },
    className: {
      control: { type: 'text' },
    },
  },
  args: {
    variant: 'default',
    size: 'default',
    asChild: false,
  },
};

export default meta;

export const Default: StoryObj<ButtonProps> = {
  args: {
    children: 'Button',
  },
};

/**
 * Different variants of the button component.
 */
export const Variants: StoryObj<ButtonProps> = {
  render: (args) => (
    <div className="w-fit flex flex-col gap-2">
      <Button {...args} variant="default">
        Default
      </Button>
      <Button {...args} variant="destructive">
        Destructive
      </Button>
      <Button {...args} variant="outline">
        Outline
      </Button>
      <Button {...args} variant="secondary">
        Secondary
      </Button>
      <Button {...args} variant="ghost">
        Ghost
      </Button>
      <Button {...args} variant="link">
        Link
      </Button>
    </div>
  ),
};

/**
 * Different sizes of the button component.
 */
export const Sizes: StoryObj<ButtonProps> = {
  render: (args) => (
    <div className="w-fit flex flex-col gap-2">
      <Button {...args} size="default">
        Default
      </Button>
      <Button {...args} size="sm">
        Small
      </Button>
      <Button {...args} size="lg">
        Large
      </Button>
      <Button {...args} size="icon">
        <Heart className="w-4 h-4" />
      </Button>
    </div>
  ),
};
