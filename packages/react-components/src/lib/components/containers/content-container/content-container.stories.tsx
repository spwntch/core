import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ContentContainer } from './content-container';
import { Button } from '@/react-ui';
import { withFullPage } from '../../../storybook/storybook-decorators';

/**
 * The `ContentContainer` component displays a section with a heading, sub-heading, body text, and optional bullets and tags.
 *
 * ## How to Use
 *
 * Wrap the `ContentContainer` component around any content that you want to include under the section.
 *
 * ```tsx
 * import { ContentContainer } from './content-container';
 *
 * export default function App() {
 *   const innerContent = {
 *     heading: 'Welcome to Our Site',
 *     subHeading: 'We are glad to have you here',
 *     body: ['Our site offers a variety of features to help you succeed.'],
 *   };
 *
 *   return (
 *     <ContentContainer innerContent={innerContent} hAlign="center" vAlign="middle">
 *       <Button>Get Started</Button>
 *       <Button variant="secondary">Learn More</Button>
 *     </ContentContainer>
 *   );
 * }
 * ```
 */
const meta: Meta<typeof ContentContainer> = {
  title: 'components/containers/content-container',
  component: ContentContainer,
  tags: ['autodocs'],
  decorators: [withFullPage],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    vAlign: {
      description: 'Vertical alignment of the content',
      control: 'select',
      options: ['top', 'middle', 'bottom'],
    },
    hAlign: {
      description: 'Horizontal alignment of the content',
      control: 'select',
      options: ['left', 'center', 'right'],
    },
    className: {
      description: 'Additional class names for the component',
      control: 'text',
    },
    innerContent: {
      description: 'The content of the section',
      control: 'object',
    },
  },
};

export default meta;

type Story = StoryObj<typeof ContentContainer>;

/**
 * Basic ContentContainer example.
 * Demonstrates the ContentContainer component with centered text content.
 */
export const Basic: Story = {
  args: {
    innerContent: {
      heading: 'Welcome to Our Site',
      subHeading: 'We are glad to have you here',
      body: ['Our site offers a variety of features to help you succeed.'],
    },
    hAlign: 'center',
    vAlign: 'middle',
    children: (
      <>
        <Button>Get Started</Button>
        <Button variant="secondary">Learn More</Button>
      </>
    ),
  },
};

/**
 * Top Left Aligned ContentContainer example.
 * Demonstrates the ContentContainer component with top-left aligned text content.
 */
export const TopLeft: Story = {
  args: {
    innerContent: {
      heading: 'Welcome to Our Site',
      subHeading: 'We are glad to have you here',
      body: ['Our site offers a variety of features to help you succeed.'],
    },
    hAlign: 'left',
    vAlign: 'top',
    children: (
      <>
        <Button>Get Started</Button>
        <Button variant="secondary">Learn More</Button>
      </>
    ),
  },
};

/**
 * Top Center Aligned ContentContainer example.
 * Demonstrates the ContentContainer component with top-center aligned text content.
 */
export const TopCenter: Story = {
  args: {
    innerContent: {
      heading: 'Welcome to Our Site',
      subHeading: 'We are glad to have you here',
      body: ['Our site offers a variety of features to help you succeed.'],
    },
    hAlign: 'center',
    vAlign: 'top',
    children: (
      <>
        <Button>Get Started</Button>
        <Button variant="secondary">Learn More</Button>
      </>
    ),
  },
};

/**
 * Top Right Aligned ContentContainer example.
 * Demonstrates the ContentContainer component with top-right aligned text content.
 */
export const TopRight: Story = {
  args: {
    innerContent: {
      heading: 'Welcome to Our Site',
      subHeading: 'We are glad to have you here',
      body: ['Our site offers a variety of features to help you succeed.'],
    },
    hAlign: 'right',
    vAlign: 'top',
    children: (
      <>
        <Button>Get Started</Button>
        <Button variant="secondary">Learn More</Button>
      </>
    ),
  },
};

/**
 * Middle Left Aligned ContentContainer example.
 * Demonstrates the ContentContainer component with middle-left aligned text content.
 */
export const MiddleLeft: Story = {
  args: {
    innerContent: {
      heading: 'Welcome to Our Site',
      subHeading: 'We are glad to have you here',
      body: ['Our site offers a variety of features to help you succeed.'],
    },
    hAlign: 'left',
    vAlign: 'middle',
    children: (
      <>
        <Button>Get Started</Button>
        <Button variant="secondary">Learn More</Button>
      </>
    ),
  },
};

/**
 * Middle Right Aligned ContentContainer example.
 * Demonstrates the ContentContainer component with middle-right aligned text content.
 */
export const MiddleRight: Story = {
  args: {
    innerContent: {
      heading: 'Welcome to Our Site',
      subHeading: 'We are glad to have you here',
      body: ['Our site offers a variety of features to help you succeed.'],
    },
    hAlign: 'right',
    vAlign: 'middle',
    children: (
      <>
        <Button>Get Started</Button>
        <Button variant="secondary">Learn More</Button>
      </>
    ),
  },
};

/**
 * Bottom Left Aligned ContentContainer example.
 * Demonstrates the ContentContainer component with bottom-left aligned text content.
 */
export const BottomLeft: Story = {
  args: {
    innerContent: {
      heading: 'Welcome to Our Site',
      subHeading: 'We are glad to have you here',
      body: ['Our site offers a variety of features to help you succeed.'],
    },
    hAlign: 'left',
    vAlign: 'bottom',
    children: (
      <>
        <Button>Get Started</Button>
        <Button variant="secondary">Learn More</Button>
      </>
    ),
  },
};

/**
 * Bottom Center Aligned ContentContainer example.
 * Demonstrates the ContentContainer component with bottom-center aligned text content.
 */
export const BottomCenter: Story = {
  args: {
    innerContent: {
      heading: 'Welcome to Our Site',
      subHeading: 'We are glad to have you here',
      body: ['Our site offers a variety of features to help you succeed.'],
    },
    hAlign: 'center',
    vAlign: 'bottom',
    children: (
      <>
        <Button>Get Started</Button>
        <Button variant="secondary">Learn More</Button>
      </>
    ),
  },
};

/**
 * Bottom Right Aligned ContentContainer example.
 * Demonstrates the ContentContainer component with bottom-right aligned text content.
 */
export const BottomRight: Story = {
  args: {
    innerContent: {
      heading: 'Welcome to Our Site',
      subHeading: 'We are glad to have you here',
      body: ['Our site offers a variety of features to help you succeed.'],
    },
    hAlign: 'right',
    vAlign: 'bottom',
    children: (
      <>
        <Button>Get Started</Button>
        <Button variant="secondary">Learn More</Button>
      </>
    ),
  },
};

/**
 * Long Content example.
 * Demonstrates the ContentContainer component with long headings, subheadings, and numerous, long body strings.
 */
export const LongContent: Story = {
  args: {
    innerContent: {
      heading:
        'This is a Very Long Heading to Test How the ContentContainer Handles Long Texts in Different Scenarios and Ensure Proper Layout and Display Across Various Screen Sizes and Resolutions',
      subHeading:
        'This is an Even Longer Subheading that Should Stretch the Limits of the ContentContainer Component and Help Us Understand Its Behavior with Such Inputs. It Needs to be Really Long to Simulate Real-World Scenarios Where Subheadings Can Get Quite Lengthy',
      body: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel semper eros, ac lacinia nisi. Nulla facilisi. Suspendisse potenti. Morbi vitae purus justo. Nam id lacinia velit. Donec non elit a risus tempus vestibulum. Nullam non ligula a orci facilisis gravida sit amet a magna. Donec sit amet lectus mi. Integer viverra sapien non est sollicitudin, nec pulvinar sapien facilisis. Proin mollis libero sit amet libero ultrices, non dapibus lorem ultricies.',
        'Aenean ut sem vitae turpis auctor consequat et at quam. Sed quis ullamcorper risus. Quisque id ex non justo venenatis elementum. Integer euismod, sapien non convallis ultricies, purus nulla interdum purus, sit amet scelerisque urna quam eget sapien. Ut euismod, nulla in commodo vehicula, risus mi faucibus ligula, ut interdum est ipsum a ante. Pellentesque tincidunt lacus ut odio posuere, ut euismod turpis pretium. Nam fermentum, dolor eu consequat cursus, sapien leo suscipit odio, non pulvinar nulla erat et justo.',
      ],
    },
    hAlign: 'center',
    vAlign: 'middle',
    children: (
      <>
        <Button>Get Started</Button>
        <Button variant="secondary">Learn More</Button>
      </>
    ),
  },
};
