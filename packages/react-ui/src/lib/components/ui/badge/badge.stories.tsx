import { Meta, StoryObj } from '@storybook/react';
import { Badge } from './badge';
import { playBasic, playVariants } from './badge.specs';

const componentDescription = `
### Overview
The \`Badge\` component is used to highlight specific information or status in your UI.

### Props
- \`className\`: Additional class names to style the component.
- \`variant\`: The variant of the badge. It can be 'default', 'secondary', 'destructive', or 'outline'.

### Example
\`\`\`
<Badge variant="default">New</Badge>
\`\`\`
`;

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
  args: {
    className: '',
    variant: 'default',
  },
  parameters: {
    docs: {
      description: {
        component: componentDescription,
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Badge>;

/**
 * Basic Badge story
 *
 * Displays a single badge with default variant.
 * Use this story to understand the basic usage of the Badge component.
 */
export const Basic: Story = {
  args: {
    children: 'Badge',
    variant: 'default',
  },
  play: playBasic,
};

/**
 * Badge Variants story
 *
 * Displays badges with different variants to demonstrate the variant variations.
 */
export const Variants: Story = {
  render: (args) => (
    <div className="flex gap-2">
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
    </div>
  ),
  play: playVariants,
};