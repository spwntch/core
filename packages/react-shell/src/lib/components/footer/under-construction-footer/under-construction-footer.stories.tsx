import { Meta, StoryObj } from '@storybook/react';
import {
  withBrandProvider,
  withFullWidth,
} from '../../../storybook/storybook-decorators';
import { UnderConstructionFooter } from './under-construction-footer';
import { playBasic, playDarkMode } from './under-construction-footer.specs';

const componentDescription = `
### Overview
The \`UnderConstructionFooter\` component displays the footer section with about, contact, and social links, as well as an "Under Construction" notice.

### Props
- \`className\`: Additional class name(s) for the component.

### Example
\`\`\`
<UnderConstructionFooter />
\`\`\`

### Notes
This component uses the \`About\`, \`Contact\`, \`Social\`, and \`Legal\` components, and retrieves the under construction URLs from the brand context.
`;

const meta: Meta<typeof UnderConstructionFooter> = {
  title: 'shell/footer/under-construction-footer',
  component: UnderConstructionFooter,
  tags: ['autodocs'],
  decorators: [withFullWidth, withBrandProvider],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: componentDescription,
      },
    },
  },
  argTypes: {
    className: {
      description: 'Additional class name(s) for the component',
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof UnderConstructionFooter>;

/**
 * Under Construction Footer example.
 * Demonstrates the UnderConstructionFooter component.
 */
export const Basic: Story = {
  args: {
    className: '',
  },
  play: playBasic,
};

/**
 * Dark Mode Under Construction Footer example.
 * Demonstrates the UnderConstructionFooter component in dark mode.
 */
export const DarkMode: Story = {
  parameters: {
    themes: {
      themeOverride: 'dark',
    },
  },
  args: {
    className: 'bg-gray-900 text-white',
  },
  play: playDarkMode,
};
