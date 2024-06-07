import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ContentContainer } from './content-container';
import { Button } from '@/react-ui';
import { withFullPage } from '../../../storybook/storybook-decorators';
import { IContent } from '../../../types';
import { Rocket, Star } from 'lucide-react';

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

const innerContent: IContent = {
  announcement: {
    message: 'Spawntech is transforming software development',
    href: '/news',
  },
  title: 'Spawntech Company Overview',
  subTitle: 'Pioneering a transformative approach to software development',
  body: [
    'Spawntech pioneers transformative software development, blending advanced DevOps, precise UX implementation, and customized development with reusable packages. Our approach integrates the latest technologies to ensure robust and scalable solutions that meet the evolving needs of our clients. By utilizing a comprehensive library of reusable packages, we can accelerate the development process and maintain high standards of quality and performance.',
    'Innovation at unparalleled speed.',
    'Our mission is to deliver bespoke software solutions at unparalleled speed without compromising on quality or user satisfaction. By championing lean innovation and a product-led approach, we transform our clients\' complex challenges into their greatest successes. Our team of experts works closely with clients to understand their unique requirements and deliver tailored solutions that drive business growth and enhance user experience. We pride ourselves on our ability to turn visionary ideas into reality, helping our clients achieve their strategic objectives with precision and agility.',
  ],

  bullets: [
    {
      icon: <Rocket className="h-5 w-5" />,
      title: 'Custom Software Development',
      body: 'Combining lean UX philosophies with agile and innovative methodologies.',
    },
    {
      icon: <Star className="h-5 w-5" />,
      title: 'DevOps and Lean CI/CD',
      body: 'Implementing advanced DevOps practices to streamline development and reduce time-to-market.',
    },
    { body: 'Bullet point 3' },
  ],
  tags: ['DevOps', 'UX/UI', 'Lean Innovation', 'Node.js'],
};

/**
 * Basic ContentContainer example.
 * Demonstrates the ContentContainer component with various content fields and buttons as children.
 */
export const Basic: Story = {
  args: {
    innerContent,
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
    innerContent,
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
    innerContent,
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
    innerContent,
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
    innerContent,
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
    innerContent,
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
    innerContent,
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
    innerContent,
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
    innerContent,
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
      announcement: { message: 'This is a long announcement', href: '/news' },
      title:
        'This is a Very Long Heading to Test How the ContentContainer Handles Long Texts in Different Scenarios and Ensure Proper Layout and Display Across Various Screen Sizes and Resolutions',
      subTitle:
        'This is an Even Longer Subheading that Should Stretch the Limits of the ContentContainer Component and Help Us Understand Its Behavior with Such Inputs. It Needs to be Really Long to Simulate Real-World Scenarios Where Subheadings Can Get Quite Lengthy',
      body: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel semper eros, ac lacinia nisi. Nulla facilisi. Suspendisse potenti. Morbi vitae purus justo. Nam id lacinia velit. Donec non elit a risus tempus vestibulum. Nullam non ligula a orci facilisis gravida sit amet a magna. Donec sit amet lectus mi. Integer viverra sapien non est sollicitudin, nec pulvinar sapien facilisis. Proin mollis libero sit amet libero ultrices, non dapibus lorem ultricies.',
        'Aenean ut sem vitae turpis auctor consequat et at quam. Sed quis ullamcorper risus. Quisque id ex non justo venenatis elementum. Integer euismod, sapien non convallis ultricies, purus nulla interdum purus, sit amet scelerisque urna quam eget sapien. Ut euismod, nulla in commodo vehicula, risus mi faucibus ligula, ut interdum est ipsum a ante. Pellentesque tincidunt lacus ut odio posuere, ut euismod turpis pretium. Nam fermentum, dolor eu consequat cursus, sapien leo suscipit odio, non pulvinar nulla erat et justo.',
      ],
      bullets: [
        {
          emoji: '🔥',
          title: 'Fire Title',
          body: 'This is the body of the fire bullet',
        },
        {
          emoji: '🌟',
          title: 'Star Title',
          body: 'This is the body of the star bullet',
        },
      ],
      tags: ['Tag1', 'Tag2', 'Tag3'],
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
