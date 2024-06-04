import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from './card';
import { playBasic, playHeaderContent, playContentFooter, playWithImage } from './card.specs';

const componentDescription = `
### Overview
The \`Card\` component is a versatile container for displaying content in a styled container.

### Props
- \`className\`: Additional class names to style the component.

### Example
\`\`\`
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
  <CardFooter>Footer</CardFooter>
</Card>
\`\`\`
`;

const meta: Meta<typeof Card> = {
  title: 'ui/card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    controls: { expanded: true },
    docs: {
      description: {
        component: componentDescription,
      },
    },
  },
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional class names to style the component',
    },
  },
  args: {
    className: '',
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

/**
 * ### Basic Example
 * Displays a card with header, content, and footer.
 */
export const basic: Story = {
  render: (args) => (
    <Card {...args} className="max-w-3xl w-fit">
      <CardHeader>
        <CardTitle>Blog Post Title</CardTitle>
        <CardDescription>Author Name - Date</CardDescription>
      </CardHeader>
      <CardContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.
      </CardContent>
      <CardFooter>Read More</CardFooter>
    </Card>
  ),
  play: playBasic,
};

/**
 * ### Card with Header and Content
 * Displays a card with only header and content sections.
 */
export const headerContent: Story = {
  render: (args) => (
    <Card {...args} className="max-w-3xl w-fit">
      <CardHeader>
        <CardTitle>Blog Post Title</CardTitle>
        <CardDescription>Author Name - Date</CardDescription>
      </CardHeader>
      <CardContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.
      </CardContent>
    </Card>
  ),
  play: playHeaderContent,
};

/**
 * ### Card with Content and Footer
 * Displays a card with only content and footer sections.
 */
export const contentFooter: Story = {
  render: (args) => (
    <Card {...args} className="max-w-3xl w-fit">
      <CardContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.
      </CardContent>
      <CardFooter>Read More</CardFooter>
    </Card>
  ),
  play: playContentFooter,
};

/**
 * ### Card with Image
 * Displays a card with an image in the content area.
 */
export const withImage: Story = {
  render: (args) => (
    <Card {...args} className="max-w-3xl w-fit">
      <CardHeader>
        <CardTitle>Blog Post Title</CardTitle>
        <CardDescription>Author Name - Date</CardDescription>
      </CardHeader>
      <CardContent>
        <img src="/images/landscape-1.webp" alt="Landscape Image 1" className="w-full mb-4 rounded-lg" />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
        pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.
      </CardContent>
      <CardFooter>Read More</CardFooter>
    </Card>
  ),
  play: playWithImage,
};