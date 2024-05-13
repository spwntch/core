import { Button, ButtonGroup } from '@/react-components';
import type { Meta, StoryObj } from '@storybook/react';
import { BasicDocs } from '../../../lib/docs-templates';

/**
 * Custom ButtonGroup component built on top of the standard ButtonGroup from `shadcn/ui`.
 * Inherits all capabilities from the base ButtonGroup component, with the introduction of a `stacked` prop..
 */
const meta: Meta<typeof ButtonGroup> = {
  component: ButtonGroup,
  parameters: { docs: { page: BasicDocs }, layout: 'centered' },
  tags: ['autodocs'],
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

export const standard: Story = {};

export const stacked: Story = { args: { stacked: true } };
