import { Meta, StoryObj } from '@storybook/react';
import { Heart } from 'lucide-react';
import { Button } from './button';
import { playBasic, playSizes, playVariants } from './button.specs';

const componentDescription = `
### Overview
The \`Button\` component is used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.

### Props
- \`variant\`: The variant of the button. It can be 'default', 'destructive', 'outline', 'secondary', 'ghost', or 'link'.
- \`size\`: The size of the button. It can be 'default', 'sm', 'lg', or 'icon'.
- \`asChild\`: Render the button as a different component while retaining the button styles.
- \`className\`: Additional class names to style the component.

### Example
\`\`\`
<Button variant="default">Click Me</Button>
\`\`\`
`;

const meta: Meta<typeof Button> = {
  title: 'ui/button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      description: 'The variant of the button. It can be "default", "destructive", "outline", "secondary", "ghost", or "link".',
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg', 'icon'],
      description: 'The size of the button. It can be "default", "sm", "lg", or "icon".',
    },
    asChild: {
      control: { type: 'boolean' },
      description: 'Render the button as a different component while retaining the button styles.',
    },
    className: {
      control: { type: 'text' },
      description: 'Additional class names to style the component.',
    },
  },
  args: {
    variant: 'default',
    size: 'default',
    asChild: false,
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

type Story = StoryObj<typeof Button>;

/**
 * ### Basic Example
 * Displays a basic button to demonstrate its default usage.
 */
export const Basic: Story = {
  args: {
    children: 'Button',
  },
  play: playBasic,
};

/**
 * ### Button Variants
 * Displays buttons with different variants to demonstrate the variant variations.
 */
export const Variants: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-2">
      <Button {...args} variant="default">Default</Button>
      <Button {...args} variant="destructive">Destructive</Button>
      <Button {...args} variant="outline">Outline</Button>
      <Button {...args} variant="secondary">Secondary</Button>
      <Button {...args} variant="ghost">Ghost</Button>
      <Button {...args} variant="link">Link</Button>
    </div>
  ),
  play: playVariants,
};

/**
 * ### Button Sizes
 * Displays buttons with different sizes to demonstrate the size variations.
 */
export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-2">
      <Button {...args} size="default">Default</Button>
      <Button {...args} size="sm">Small</Button>
      <Button {...args} size="lg">Large</Button>
      <Button {...args} size="icon"><Heart className="w-4 h-4" /></Button>
    </div>
  ),
  play: playSizes,
};