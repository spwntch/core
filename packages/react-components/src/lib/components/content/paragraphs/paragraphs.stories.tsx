import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Paragraphs } from './paragraphs';
import { playBasic } from './paragraphs.specs';
import { type ParagraphAlignment } from './paragraphs';

const componentDescription = `
### Overview
The \`Paragraphs\` component displays a list of paragraphs.

### Props
- \`content\`: An array of strings representing the paragraphs.
- \`className\`: Additional class name(s) for the container.
- \`alignment\`: The horizontal alignment of the text. Options are 'left', 'center', 'right', and 'justified'.

### Example
\`\`\`
<Paragraphs
  content={[
    'This is the first paragraph.',
    'This is the second paragraph.',
    'This is the third paragraph.',
  ]}
  alignment="left"
/>
\`\`\`

### Notes
Use this component to display multiple paragraphs of text within a section.
`;

const meta: Meta<typeof Paragraphs> = {
  title: 'components/content/paragraphs',
  component: Paragraphs,
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
    content: {
      description: 'An array of strings representing the paragraphs',
      control: 'object',
    },
    className: {
      description: 'Additional class name(s) for the container',
      control: 'text',
    },
    alignment: {
      description: 'The horizontal alignment of the text',
      control: 'select',
      options: ['left', 'center', 'right', 'justified'],
      defaultValue: 'left',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Paragraphs>;

const paragraphContent = [
  'Spawntech pioneers transformative software development, blending advanced DevOps, precise UX implementation, and customized development with reusable packages. Our approach integrates the latest technologies to ensure robust and scalable solutions that meet the evolving needs of our clients. By utilizing a comprehensive library of reusable packages, we can accelerate the development process and maintain high standards of quality and performance.',
  'Innovation at unparalleled speed.',
  'Our mission is to deliver bespoke software solutions at unparalleled speed without compromising on quality or user satisfaction. By championing lean innovation and a product-led approach, we transform our clients\' complex challenges into their greatest successes. Our team of experts works closely with clients to understand their unique requirements and deliver tailored solutions that drive business growth and enhance user experience. We pride ourselves on our ability to turn visionary ideas into reality, helping our clients achieve their strategic objectives with precision and agility.'
];

export const Basic: Story = {
  args: {
    content: paragraphContent,
    className: 'max-w-4xl',
    alignment: 'left' as ParagraphAlignment,
  },
  render: (args) => (
    <div className="max-w-4xl">
      <Paragraphs {...args} />
    </div>
  ),
  play: playBasic,
};

export const CenterAligned: Story = {
  args: {
    content: paragraphContent,
    className: 'max-w-4xl',
    alignment: 'center' as ParagraphAlignment,
  },
  render: (args) => (
    <div className="max-w-4xl">
      <Paragraphs {...args} />
    </div>
  ),
  play: playBasic,
};

export const RightAligned: Story = {
  args: {
    content: paragraphContent,
    className: 'max-w-4xl',
    alignment: 'right' as ParagraphAlignment,
  },
  render: (args) => (
    <div className="max-w-4xl">
      <Paragraphs {...args} />
    </div>
  ),
  play: playBasic,
};

export const Justified: Story = {
  args: {
    content: paragraphContent,
    className: 'max-w-4xl',
    alignment: 'justified' as ParagraphAlignment,
  },
  render: (args) => (
    <div className="max-w-4xl">
      <Paragraphs {...args} />
    </div>
  ),
  play: playBasic,
};
