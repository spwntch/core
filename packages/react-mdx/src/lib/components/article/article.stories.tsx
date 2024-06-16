import { Meta, StoryObj } from '@storybook/react';
import { Article } from './article';
import { articles } from '../../storybook/storybook-config';
import { H1, P, Ul, Ol, Li, H2 } from '@spwntch/typography';

const componentDescription = `
### Overview
The \`Article\` component displays an article with its metadata, content, and optionally a table of contents (TOC).

### Props
- \`meta\`: The metadata of the article.
- \`toc\`: The table of contents of the article.
- \`content\`: The content of the article.
- \`backTo\`: An optional object with \`label\` and \`href\` for a back button.
- \`onBackTo\`: An optional function to handle back button clicks.
- \`onToc\`: An optional function to handle TOC clicks.

### Example
\`\`\`
<Article
  meta={articles[0].meta}
  toc={articles[0].toc}
  content={<P>This is the content of the post.</P>}
  onBackTo={(href) => console.log(\`Navigating to: \${href}\`)}
  onToc={(href) => console.log(\`Navigating to: \${href}\`)}
/>
\`\`\`
`;

const meta: Meta<typeof Article> = {
  title: 'mdx/article',
  component: Article,
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
    meta: {
      description: 'The metadata of the article',
      control: 'object',
    },
    toc: {
      description: 'The table of contents of the article',
      control: 'object',
    },
    content: {
      description: 'The content of the article',
      control: 'object',
    },
    backTo: {
      description: 'An optional object with label and href for a back button',
      control: 'object',
    },
    onBackTo: {
      description: 'An optional function to handle back button clicks',
      action: 'clicked',
    },
    onToc: {
      description: 'An optional function to handle TOC clicks',
      action: 'clicked',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Article>;

/**
 * Default Article example.
 * Demonstrates a basic usage of the Article component with the first article.
 */
export const Default: Story = {
  args: {
    meta: articles[0].meta,
    toc: articles[0].toc,
    content: (
      <>
        <H1>{articles[0].meta.title}</H1>
        <H2>What is an ICP?</H2>
        <P>
          An Ideal Customer Profile (ICP) is a detailed description of the
          perfect customer for your product or service. This profile is based on
          various factors such as demographics, behaviors, and pain points. An
          ICP helps you focus your marketing and sales efforts on the customers
          who are most likely to benefit from and purchase your offerings.
        </P>
        <H2>Why Do You Need an ICP?</H2>
        <P>
          The importance of having an ICP cannot be overstated. Here are some
          key reasons why an ICP is crucial for your business:
        </P>
        <Ul>
          <Li>
            Targeted Marketing Efforts: An ICP allows you to create highly
            targeted marketing campaigns. By understanding the specific needs
            and characteristics of your ideal customers, you can tailor your
            messages and offers to resonate with them, leading to higher
            conversion rates.
          </Li>
          <Li>
            Efficient Sales Processes: With an ICP, your sales team can focus
            their efforts on the prospects who are most likely to convert. This
            not only increases the efficiency of your sales process but also
            improves the overall customer experience.
          </Li>
          <Li>
            Better Product Development: Understanding your ideal customer helps
            you build better products. You can prioritize features and
            improvements that address the pain points and needs of your target
            audience, leading to higher customer satisfaction and loyalty.
          </Li>
        </Ul>
        <img
          src="/articles/cover-images/the-real-reason-you-need-an-icp.webp"
          alt="Ideal Customer Profile"
        />
        <H2>How to Create an ICP</H2>
        <P>Creating an ICP involves several steps:</P>
        <Ol>
          <Li>
            Analyze Your Current Customers: Start by analyzing your existing
            customers to identify common characteristics and behaviors. Look for
            patterns in demographics, purchasing behaviors, and product usage.
          </Li>
          <Li>
            Conduct Market Research: Market research can provide valuable
            insights into your ideal customers. Use surveys, interviews, and
            industry reports to gather data on potential customers who fit your
            profile.
          </Li>
          <Li>
            Define Key Characteristics: Based on your analysis and research,
            define the key characteristics of your ideal customer. These may
            include demographics (age, gender, location), behaviors (buying
            patterns, product usage), and pain points (challenges, needs).
          </Li>
          <Li>
            Create a Detailed Profile: Combine all the information you've
            gathered to create a detailed profile of your ideal customer.
            Include specific details such as age range, job title, industry, and
            key challenges.
          </Li>
        </Ol>
        <H2>Conclusion</H2>
        <P>
          Having an ICP is essential for any business looking to optimize its
          marketing, sales, and product development efforts. By focusing on your
          ideal customers, you can create more effective strategies, improve
          customer satisfaction, and ultimately drive growth for your business.
        </P>
      </>
    ),
    onBackTo: (href) => console.log(`Navigating to: ${href}`),
    onToc: (href) => console.log(`Navigating to: ${href}`),
  },
};
