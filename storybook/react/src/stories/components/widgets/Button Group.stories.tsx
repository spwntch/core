import { Button, ButtonGroup } from '@/react-components';
import type { Meta, StoryObj } from '@storybook/react';
import { withFlexRowWrap } from '../../../lib/decorators';
import { BasicDocs } from '../../../lib/docs-templates';

/**
 * Custom ButtonGroup component built on top of the standard ButtonGroup from `shadcn/ui`.
 * Inherits all capabilities from the base ButtonGroup component, with some UX enhancements.
 */
const meta: Meta<typeof ButtonGroup> = {
  component: ButtonGroup,
  tags: ['autodocs'],
  parameters: { docs: { page: BasicDocs } },
  decorators: [withFlexRowWrap],
  args: {
    children: (
      <>
        <Button>Thing One</Button>
        <Button>Tning Two</Button>
      </>
    ),
  },
};
export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Primary: Story = {};
export const Stacked: Story = { args: { stacked: true } };
