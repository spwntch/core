import { Meta, StoryObj } from '@storybook/react';
import { withFullWidth } from '../../../utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './accordion';
import {
  playAccessibilityTest,
  playBasic,
  playEmptyAccordion,
  playLargeNumberOfItems,
  playMultipleItems,
} from './accordion.specs';

const componentDescription = `
### Overview
The \`Accordion\` component is the root container for the accordion items.

### Props
- \`type\`: The type of accordion. Use 'single' for single item open or 'multiple' for multiple items open (string).
- \`defaultValue\`: The default value of the accordion (string or string[]).
- \`collapsible\`: Determines if the accordion can collapse all items (boolean).
- \`className\`: Additional class name(s) for the container (string).
- \`children\`: The accordion items to be rendered within the accordion (React.ReactNode).

### Example
\`\`\`
<Accordion type="single" defaultValue="item-1" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Trigger 1</AccordionTrigger>
    <AccordionContent>Content 1</AccordionContent>
  </AccordionItem>
</Accordion>
\`\`\`

### Notes
This component is based on the [ShadCN/UI Accordion component](https://ui.shadcn.com/docs/components/accordion). Refer to their documentation for more details and advanced usage.
`;

const meta: Meta<typeof Accordion> = {
  title: 'ui/accordion',
  component: Accordion,
  decorators: [withFullWidth],
  tags: ['autodocs'],
  argTypes: {
    type: {
      description:
        "The type of accordion. Use 'single' for single item open or 'multiple' for multiple items open.",
      control: { type: 'select' },
      options: ['single', 'multiple'],
      defaultValue: 'single',
    },
    defaultValue: {
      description: 'The default value of the accordion (string or string[]).',
    },
    collapsible: {
      description:
        'Determines if the accordion can collapse all items (boolean).',
    },
    className: {
      description: 'Additional class name(s) for the container (string).',
    },
    children: {
      description:
        'The accordion items to be rendered within the accordion (React.ReactNode).',
    },
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

type Story = StoryObj<typeof Accordion>;

/**
 * ### Basic Example
 * A basic example of the Accordion component with one item.
 */
export const Basic: Story = {
  args: {
    type: 'single',
    defaultValue: 'item-1',
    collapsible: true,
    children: (
      <div className="max-w-3xl mx-auto">
        <AccordionItem value="item-1">
          <AccordionTrigger>Trigger 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Trigger 2</AccordionTrigger>
          <AccordionContent>Content 2</AccordionContent>
        </AccordionItem>
      </div>
    ),
  },
  parameters: {
    layout: 'centered',
  },
  play: playBasic,
};

/**
 * ### Accordion with Multiple Items
 * An example of the Accordion component with multiple items.
 */
export const MultipleItems: Story = {
  args: {
    type: 'multiple',
    defaultValue: ['item-1'],
    // collapsible: true,
    children: (
      <div className="max-w-3xl mx-auto">
        <AccordionItem value="item-1">
          <AccordionTrigger>Trigger 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Trigger 2</AccordionTrigger>
          <AccordionContent>Content 2</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Trigger 3</AccordionTrigger>
          <AccordionContent>Content 3</AccordionContent>
        </AccordionItem>
      </div>
    ),
  },
  parameters: {
    layout: 'centered',
  },
  play: playMultipleItems,
};

/**
 * ### Accessibility Test
 * Ensures the Accordion component is accessible.
 */
export const AccessibilityTest: Story = {
  args: {
    type: 'single',
    defaultValue: 'item-1',
    collapsible: true,
    children: (
      <div className="max-w-3xl mx-auto">
        <AccordionItem value="item-1">
          <AccordionTrigger>Trigger 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Trigger 2</AccordionTrigger>
          <AccordionContent>Content 2</AccordionContent>
        </AccordionItem>
      </div>
    ),
  },
  play: playAccessibilityTest,
};

/**
 * ### Empty Accordion Test
 * Ensures the Accordion component handles an empty state correctly.
 */
export const EmptyAccordion: Story = {
  args: {
    type: 'single',
    defaultValue: '',
    collapsible: true,
    children: <div className="max-w-3xl mx-auto"></div>,
  },
  parameters: {
    layout: 'centered',
  },
  play: playEmptyAccordion,
};

/**
 * ### Large Number of Items Test
 * Ensures the Accordion component handles a large number of items correctly.
 */
export const LargeNumberOfItems: Story = {
  args: {
    type: 'multiple',
    defaultValue: [],
    // collapsible: true,
    children: (
      <div className="max-w-3xl mx-auto">
        {Array.from({ length: 50 }, (_, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger>{`Trigger ${i}`}</AccordionTrigger>
            <AccordionContent>{`Content ${i}`}</AccordionContent>
          </AccordionItem>
        ))}
      </div>
    ),
  },
  parameters: {
    layout: 'centered',
  },
  play: playLargeNumberOfItems,
};
