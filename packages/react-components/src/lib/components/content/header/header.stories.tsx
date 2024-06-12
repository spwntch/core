import { Meta, StoryObj } from '@storybook/react';
import { Header } from './header';
import { playBasic, playWithTags } from './header.specs';

const componentDescription = `
### Overview
The \`Header\` component displays a section header with a title, subtitle, and optional tags.

### Props
- \`titleContent\`: The main title text.
- \`titleClassName\`: Additional class name(s) for the title.
- \`subTitleContent\`: The subtitle text.
- \`subTitleClassName\`: Additional class name(s) for the subtitle.
- \`tagsContent\`: An array of tags to display.
- \`tagsClassName\`: Additional class name(s) for the tags container.
- \`alignment\`: The horizontal alignment of the text. Options are 'left', 'center', and 'right'.

### Example
\`\`\`
<Header
  titleContent="Spawntech Company Overview"
  subTitleContent="Pioneering a transformative approach to software development"
  tagsContent={['DevOps', 'UX/UI', 'Lean Innovation', 'Node.js']}
  alignment="center"
/>
\`\`\`

### Notes
Use this component to display the main header for a section of your site.
`;

const meta: Meta<typeof Header> = {
  title: 'components/content/header',
  component: Header,
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
    titleContent: {
      description: 'The main title text',
      control: 'text',
    },
    titleClassName: {
      description: 'Additional class name(s) for the title',
      control: 'text',
    },
    subTitleContent: {
      description: 'The subtitle text',
      control: 'text',
    },
    subTitleClassName: {
      description: 'Additional class name(s) for the subtitle',
      control: 'text',
    },
    tagsContent: {
      description: 'An array of tags to display',
      control: 'object',
    },
    tagsClassName: {
      description: 'Additional class name(s) for the tags container',
      control: 'text',
    },
    alignment: {
      description: 'The horizontal alignment of the text',
      control: 'select',
      options: ['left', 'center', 'right'],
      defaultValue: 'center',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Basic: Story = {
  args: {
    titleContent: 'Spawntech Company Overview',
    subTitleContent: 'Pioneering a transformative approach to software development',
    alignment: 'center',
  },
  play: playBasic,
};

export const WithTags: Story = {
  args: {
    titleContent: 'Spawntech Company Overview',
    subTitleContent: 'Pioneering a transformative approach to software development',
    tagsContent: ['DevOps', 'UX/UI', 'Lean Innovation', 'Node.js'],
    alignment: 'center',
  },
  play: playWithTags,
};

export const LeftAligned: Story = {
  args: {
    titleContent: 'Spawntech Company Overview',
    subTitleContent: 'Pioneering a transformative approach to software development',
    tagsContent: ['DevOps', 'UX/UI', 'Lean Innovation', 'Node.js'],
    alignment: 'left',
  },
  play: playWithTags,
};

export const RightAligned: Story = {
  args: {
    titleContent: 'Spawntech Company Overview',
    subTitleContent: 'Pioneering a transformative approach to software development',
    tagsContent: ['DevOps', 'UX/UI', 'Lean Innovation', 'Node.js'],
    alignment: 'right',
  },
  play: playWithTags,
};
