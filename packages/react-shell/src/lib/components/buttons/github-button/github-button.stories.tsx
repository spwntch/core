import { Meta, StoryObj } from '@storybook/react';
import { GithubButton } from './github-button';
import { playAccessibilityTest, playBasic } from './github-button.specs';

const componentDescription = `
### Overview
The \`GithubButton\` component renders a button that links to a specified Github URL.

### Props
- \`url\`: The URL to link to.
- \`className\`: Additional class name(s) for the button.

### Example
\`\`\`
<GithubButton url="https://github.com/spwntch/core" />
\`\`\`

### Notes
This component uses the \`Button\` component from \`@spwntch/ui\` and the \`Github\` icon from \`lucide-react\`.
`;

const meta: Meta<typeof GithubButton> = {
  title: 'shell/buttons/github-button',
  component: GithubButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: componentDescription,
      },
    },
  },
  argTypes: {
    url: {
      description: 'The URL to link to',
      type: 'string',
      defaultValue: 'https://github.com/spwntch/core',
    },
    className: {
      description: 'Additional class name(s) for the button',
      type: 'string',
    },
  },
};

export default meta;

type Story = StoryObj<typeof GithubButton>;

/**
 * Basic GithubButton example.
 * Demonstrates a basic usage of the GithubButton component.
 */
export const Basic: Story = {
  args: {
    url: 'https://github.com/spwntch/core',
    className: '',
  },
  play: playBasic,
};

/**
 * Accessibility Test GithubButton example.
 * Demonstrates the GithubButton component and runs accessibility tests.
 */
export const AccessibilityTest: Story = {
  args: {
    url: 'https://github.com/spwntch/core',
    className: '',
  },
  play: playAccessibilityTest,
};
