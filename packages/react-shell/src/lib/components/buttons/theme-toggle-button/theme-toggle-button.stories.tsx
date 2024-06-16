import { Meta, StoryObj } from '@storybook/react';
import { withThemeProvider } from '../../../storybook/storybook-decorators';
import { ThemeToggleButton } from './theme-toggle-button';
import { playAccessibilityTest, playBasic } from './theme-toggle-button.specs';

const componentDescription = `
### Overview
The \`ThemeToggleButton\` component allows users to toggle between light, dark, and system themes.

### Props
- \`className\`: Additional class name(s) for the button.

### Example
\`\`\`
<ThemeToggleButton />
\`\`\`

### Notes
This component uses the \`Button\`, \`DropdownMenu\`, \`DropdownMenuContent\`, \`DropdownMenuItem\`, and \`DropdownMenuTrigger\` components from \`@spwntch/ui\`.
`;

const meta: Meta<typeof ThemeToggleButton> = {
  title: 'shell/buttons/theme-toggle-button',
  component: ThemeToggleButton,
  tags: ['autodocs'],
  decorators: [withThemeProvider],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: componentDescription,
      },
    },
  },
  argTypes: {
    className: {
      description: 'Additional class name(s) for the button',
      type: 'string',
    },
  },
};

export default meta;

type Story = StoryObj<typeof ThemeToggleButton>;

/**
 * Basic ThemeToggleButton example.
 * Demonstrates a basic usage of the ThemeToggleButton component.
 */
export const Basic: Story = {
  args: {
    className: '',
  },
  play: playBasic,
};

/**
 * Accessibility Test ThemeToggleButton example.
 * Demonstrates the ThemeToggleButton component and runs accessibility tests.
 */
export const AccessibilityTest: Story = {
  args: {
    className: '',
  },
  play: playAccessibilityTest,
};
