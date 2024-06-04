import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from './sheet';
import { Button } from '../button/button';
import { playBasic, playWithHelpContent } from './sheet.specs';

const componentDescription = `
### Overview
The \`Sheet\` component provides a flexible and customizable sheet system.

### Props
- \`SheetTrigger\`: The element that toggles the visibility of the sheet.
- \`SheetContent\`: The container for the sheet content.
- \`SheetHeader\`: A header section for the sheet.
- \`SheetFooter\`: A footer section for the sheet.
- \`SheetTitle\`: A title for the sheet.
- \`SheetDescription\`: A description for the sheet.
- \`SheetOverlay\`: An overlay that appears behind the sheet.
- \`SheetClose\`: A button to close the sheet.
- \`SheetPortal\`: A portal for rendering the sheet in a different part of the DOM.

### Example
\`\`\`
<Sheet>
  <SheetTrigger>
    <Button>Open Sheet</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Sheet Title</SheetTitle>
      <SheetDescription>
        Sheet description goes here.
      </SheetDescription>
    </SheetHeader>
    <div className="p-4">
      <!-- Your content goes here -->
    </div>
    <SheetFooter>
      <Button variant="secondary">Cancel</Button>
      <Button>Save changes</Button>
    </SheetFooter>
  </SheetContent>
</Sheet>
\`\`\`
`;

const meta: Meta<typeof Sheet> = {
  title: 'ui/sheet',
  component: Sheet,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: componentDescription,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Sheet>;

/**
 * Basic Sheet story
 */
export const Basic: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger>
        <Button>Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Sheet Title</SheetTitle>
          <SheetDescription>
            Sheet description goes here.
          </SheetDescription>
        </SheetHeader>
        <div className="p-4">
          Your content goes here
        </div>
        <SheetFooter>
          <Button variant="secondary">Cancel</Button>
          <Button>Save changes</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
  play: playBasic,
};

/**
 * Sheet story with contextual help content
 */
export const withHelpContent: Story = {
  render: (args) => (
    <Sheet>
      <SheetTrigger>
        <Button>Need Help?</Button>
      </SheetTrigger>
      <SheetContent {...args}>
        <SheetHeader>
          <SheetTitle>Help & Support</SheetTitle>
          <SheetDescription>
            Find answers to common questions and get support.
          </SheetDescription>
        </SheetHeader>
        <div className="mt-4 space-y-4">
          <div>
            <h3 className="text-lg font-semibold">How to use this feature?</h3>
            <p className="text-sm text-muted-foreground">
              Detailed instructions on how to use the feature with step-by-step guides.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Where can I find more information?</h3>
            <p className="text-sm text-muted-foreground">
              Links to additional resources and documentation for more in-depth information.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Who can I contact for support?</h3>
            <p className="text-sm text-muted-foreground">
              Contact information for customer support and technical assistance.
            </p>
          </div>
        </div>
        <SheetFooter>
          <Button variant="secondary">Close</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
  play: playWithHelpContent,
};