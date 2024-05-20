import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "./card";

const meta: Meta<typeof Card> = {
  title: "UI/Components/Card",
  component: Card,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: "A container for displaying content and actions on a single topic.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

/**
 * Default story for the Card component.
 */
export const Default: Story = {
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>This is the card description</CardDescription>
      </CardHeader>
      <CardContent>
        This is the main content of the card.
      </CardContent>
      <CardFooter>
        Card Footer
      </CardFooter>
    </Card>
  ),
};

/**
 * WithLongContent story for the Card component.
 */
export const WithLongContent: Story = {
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>This is the card description</CardDescription>
      </CardHeader>
      <CardContent>
        This is the main content of the card. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </CardContent>
      <CardFooter>
        Card Footer
      </CardFooter>
    </Card>
  ),
};
