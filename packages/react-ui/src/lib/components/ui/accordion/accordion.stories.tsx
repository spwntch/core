import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from './accordion';

const meta: Meta<typeof Accordion> = {
  title: 'ui/accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional class names to style the component',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Accordion>;

/**
 * Default Accordion with multiple items.
 *
 * This story showcases the default usage of the Accordion component,
 * with multiple AccordionItem components, each containing an AccordionTrigger
 * and AccordionContent. Use this as a starting point for more complex
 * accordion structures.
 */
export const Default: Story = {
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Item 1</AccordionTrigger>
        <AccordionContent>Content for item 1</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Item 2</AccordionTrigger>
        <AccordionContent>Content for item 2</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
