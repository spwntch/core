import { Meta, StoryObj } from '@storybook/react';
import { Tags } from './tags';
import { playBasic, playAccessibilityTest } from './tags.specs';

const componentDescription = `
### Overview
The \`Tags\` component displays a list of tags using the Badge component.

### Props
- \`tags\`: An array of tag strings to display.
- \`className\`: Optional additional class names to apply.

### Example
\`\`\`
<Tags tags={['tag1', 'tag2', 'tag3']} />
\`\`\`

### Notes
Use this component to show tags in a line with gaps between them.
`;

const meta: Meta<typeof Tags> = {
  title: 'components/content/tags',
  component: Tags,
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
    tags: {
      description: 'An array of tag strings to display',
      defaultValue: ['tag1', 'tag2', 'tag3'],
    },
    className: {
      description: 'Optional additional class names to apply',
      type: 'string',
      defaultValue: '',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tags>;

export const Basic: Story = {
  args: {
    tags: ['tag1', 'tag2', 'tag3'],
  },
  play: playBasic,
};

/**
 * Accessibility check for the Tags component.
 */
export const Accessible: Story = {
  args: {
    tags: ['accessible tag1', 'accessible tag2'],
  },
  play: playAccessibilityTest,
};
