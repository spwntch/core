import { Meta, StoryObj } from '@storybook/react';
import { Badge, BadgeProps } from './badge';

const meta: Meta<typeof Badge> = {
  title: 'ui/badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional class names to style the component',
    },
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline'],
      description:
        'The variant of the badge. It can be "default", "secondary", "destructive", or "outline".',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Badge>;

/**
 * Default Badge.
 *
 * This story showcases the default usage of the Badge component with different variants.
 * Use this as a starting point for more complex badge styles.
 */
export const Default: Story = {
  render: (args: BadgeProps) => (
    <>
      <Badge {...args} variant="default">
        Default
      </Badge>
      <Badge {...args} variant="secondary">
        Secondary
      </Badge>
      <Badge {...args} variant="destructive">
        Destructive
      </Badge>
      <Badge {...args} variant="outline">
        Outline
      </Badge>
    </>
  ),
};
