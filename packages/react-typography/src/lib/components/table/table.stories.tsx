import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Table } from './table';
import { Thead } from './thead';
import { Tbody } from './tbody';
import { Tr } from './tr';
import { Th } from './th';
import { Td } from './td';

const meta: Meta<typeof Table> = {
  title: 'typography/table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
  },
  args: {
    className: '',
  },
};

export default meta;

type Story = StoryObj<typeof Table>;

/**
 * Default Table story
 */
export const Default: Story = {
  render: (args) => (
    <div className="my-6 w-full overflow-y-auto">
      <Table {...args}>
        <Thead>
          <Tr>
            <Th align="left">Product</Th>
            <Th align="center">Price</Th>
            <Th align="right">Stock Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td align="left">Laptop</Td>
            <Td align="center">$999</Td>
            <Td align="right">In Stock</Td>
          </Tr>
          <Tr>
            <Td align="left">Smartphone</Td>
            <Td align="center">$699</Td>
            <Td align="right">Out of Stock</Td>
          </Tr>
          <Tr>
            <Td align="left">Tablet</Td>
            <Td align="center">$499</Td>
            <Td align="right">In Stock</Td>
          </Tr>
          <Tr>
            <Td align="left">Smartwatch</Td>
            <Td align="center">$199</Td>
            <Td align="right">Limited Stock</Td>
          </Tr>
          <Tr>
            <Td align="left">Headphones</Td>
            <Td align="center">$149</Td>
            <Td align="right">In Stock</Td>
          </Tr>
        </Tbody>
      </Table>
    </div>
  ),
};
Default.storyName = 'Default';