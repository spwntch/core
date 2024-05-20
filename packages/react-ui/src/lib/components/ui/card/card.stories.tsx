import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "./card";

const meta: Meta<typeof Card> = {
  title: "UI/Components/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

/**
 * Default card example displaying a header, content, and footer.
 */
export const Default: StoryObj<typeof Card> = {
  render: (args) => (
    <Card {...args} className="w-fit">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>Card Content</CardContent>
      <CardFooter>Card Footer</CardFooter>
    </Card>
  ),
};

/**
 * Example of a card with only a header and content.
 * 
 * Use this setup when you need to display a card with a title, description, and content,
 * but no footer section.
 */
export const HeaderContent: StoryObj<typeof Card> = {
  render: (args) => (
    <Card {...args} className="w-fit">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>Card Content</CardContent>
    </Card>
  ),
};

/**
 * Example of a card with only content and footer.
 * 
 * This setup is useful for cards that require content and action buttons or links at the bottom.
 */
export const ContentFooter: StoryObj<typeof Card> = {
  render: (args) => (
    <Card {...args} className="w-fit">
      <CardContent>Card Content</CardContent>
      <CardFooter>Card Footer</CardFooter>
    </Card>
  ),
};
