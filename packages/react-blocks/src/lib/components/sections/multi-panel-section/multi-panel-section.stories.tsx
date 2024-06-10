import { ContentContainer, ImageContainer, List } from '@/react-components';
import { H3, P } from '@/react-typography';
import { Button, Card } from '@/react-ui';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { withFullPage, withFullWidth } from '../../../storybook/storybook-decorators';
import { MultiPanelSection } from './multi-panel-section';
import { playBasic } from './multi-panel-section.specs';

const componentDescription = `
### Overview
The \`MultiPanelSection\` component uses the \`MultiPanelLayout\` component to create a section with a main panel and up to three sub-panels. This layout can be configured to be horizontal or vertical and can be flipped.

### Props
- \`containers\`: An array of up to four elements to be placed in the section.
- \`flip\`: A boolean to flip the layout.
- \`mainPaneCoverage\`: Percentage coverage of the main panel (default is 50%).
- \`orientation\`: Orientation of the layout, either \`horizontal\` or \`vertical\`.
- \`height\`: Height of the section in pixels (default is 540 pixels).

### Example
\`\`\`
<MultiPanelSection containers={[<div>Main Panel</div>, <div>Sub Panel 1</div>, <div>Sub Panel 2</div>]} flip={true} orientation="vertical" height={600} />
\`\`\`

### Notes
This component is flexible and adapts to different screen sizes.
`;

const meta: Meta<typeof MultiPanelSection> = {
  title: 'blocks/sections/multi-panel-section',
  component: MultiPanelSection,
  decorators: [withFullWidth],
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
    className: {
      description: 'Additional class name(s) for the container',
      control: 'text',
    },
    containers: {
      description:
        'An array of up to four elements to be placed in the sections',
      control: 'object',
    },
    flip: {
      description: 'A boolean to flip the layout',
      control: 'boolean',
    },
    mainPaneCoverage: {
      description: 'Percentage coverage of the main panel (default is 50%)',
      control: 'number',
    },
    orientation: {
      description: 'Orientation of the layout',
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    height: {
      description: 'Height of the section in pixels',
      control: 'number',
    },
  },
};

export default meta;

type Story = StoryObj<typeof MultiPanelSection>;

const innerContent = {
  title: { content: 'Discover Remote Furniture' },
  subTitle: { content: 'Crafted for Remote Landscapes' },
  tags: ['Remote', 'Furniture', 'Craftsmanship', 'Landscapes'],
};

const mainPanel = (
  <ImageContainer
    image={{
      src: '/images/furniture-4.webp',
      alt: 'Abstract Image 1',
      darken: true,
    }}
    className="h-full w-full relative text-white"
  >
    <ContentContainer
      innerContent={innerContent}
      hAlign="center"
      vAlign="bottom"
    />
  </ImageContainer>
);

const subPanel1 = (
  <ImageContainer
    image={{ src: '/images/landscape-4.webp', alt: 'Landscape Image 4' }}
    className="m-8"
  >
    <div className="relative p-6 w-96 mx-auto ">
      <Card className="p-4">
        <H3>Our Mission</H3>
        <P className="m-0 p-0">
          To bring the beauty and tranquility of remote landscapes into your
          home with our bespoke furniture collections.
        </P>
        <Button className="mt-3">Learn More</Button>
      </Card>
    </div>
  </ImageContainer>
);

const subPanel2 = (
  <ImageContainer
    image={{ src: '/images/landscape-1.webp', alt: 'Landscape Image 1' }}
    className="m-8"
  >
    <div className="relative p-6 w-96 mx-auto">
      <Card className="p-4">
        <H3 className="mb-4">Why Choose Us?</H3>
        <List
          bullets={[
            { body: 'Expert Craftsmanship' },
            { body: 'Sustainable Materials' },
            { body: 'Custom Designs' },
            { body: 'Exceptional Comfort' },
          ]}
          className="m-0 p-0"
        />
      </Card>
    </div>
  </ImageContainer>
);

const subPanel3 = (
  <ImageContainer
    image={{ src: '/images/landscape-2.webp', alt: 'Landscape Image 2' }}
    className="m-8"
  >
    <div className="relative p-6 w-96 mx-auto">
      <Card className="p-4">
        <H3>Contact Us</H3>
        <P className="m-0 p-0">
          Interested in our collections? Reach out to us for more information
          and custom orders.
        </P>
        <Button className="mt-3">Get in Touch</Button>
      </Card>
    </div>
  </ImageContainer>
);

const defaultArgs = {
  containers: [mainPanel, subPanel1, subPanel2] as [
    React.ReactNode,
    React.ReactNode,
    React.ReactNode
  ],
  // containers: [mainPanel, subPanel1, subPanel2, subPanel3] as [
  //   React.ReactNode,
  //   React.ReactNode,
  //   React.ReactNode,
  //   React.ReactNode
  // ],
  mainPaneCoverage: 50,
  orientation: 'horizontal' as 'horizontal' | 'vertical',
  height: 540, // Default height
};

/**
 * Basic MultiPanelSection example.
 * Demonstrates a basic usage of the MultiPanelSection component.
 */
export const Basic: Story = {
  args: defaultArgs,
  play: playBasic,
};

/**
 * Vertical MultiPanelSection example.
 * Demonstrates the MultiPanelSection component with a vertical orientation.
 */
export const Vertical: Story = {
  args: {
    ...defaultArgs,
    orientation: 'vertical',
    containers: [...defaultArgs.containers, subPanel3]
  },
  play: playBasic,
};

/**
 * Flipped MultiPanelSection example.
 * Demonstrates the MultiPanelSection component with a flipped layout.
 */
export const Flipped: Story = {
  args: {
    ...defaultArgs,
    flip: true,
  },
  play: playBasic,
};

/**
 * Wide Main Panel MultiPanelSection example.
 * Demonstrates the MultiPanelSection component with a wider main panel.
 */
export const WideMain: Story = {
  args: {
    ...defaultArgs,
    mainPaneCoverage: 70,
  },
  play: playBasic,
};

/**
 * Narrow Main Panel MultiPanelSection example.
 * Demonstrates the MultiPanelSection component with a narrower main panel.
 */
export const NarrowMain: Story = {
  args: {
    ...defaultArgs,
    mainPaneCoverage: 30,
  },
  play: playBasic,
};


/**
 * One Sub Panel MultiPanelSection example.
 * Demonstrates the MultiPanelSection component with one sub-panel.
 */
export const OneSubPanel: Story = {
  args: {
    ...defaultArgs,
    containers: [mainPanel, subPanel1] as [React.ReactNode, React.ReactNode],
  },
  play: playBasic,
};

/**
 * Custom Height MultiPanelSection example.
 * Demonstrates the MultiPanelSection component with a custom height.
 */
export const CustomHeight: Story = {
  args: {
    ...defaultArgs,
    height: 600, // Example custom height
  },
  play: playBasic,
};
