import { Meta, StoryObj } from '@storybook/react';
import { Article } from './article';
import { articles } from '../../storybook/storybook-config';

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
  content={<p>This is the content of the post.</p>}
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
      control: 'object', // Use object control for JSX content
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
        <h1>The Real Reason You Need an ICP</h1>
        <p>
          <strong>What is an ICP?</strong>
        </p>
        <p>
          An Ideal Customer Profile (ICP) is a detailed description of the
          perfect customer for your product or service. This profile is based on
          various factors such as demographics, behaviors, and pain points. An
          ICP helps you focus your marketing and sales efforts on the customers
          who are most likely to benefit from and purchase your offerings.
        </p>
        <p>
          <strong>Why Do You Need an ICP?</strong>
        </p>
        <p>
          The importance of having an ICP cannot be overstated. Here are some
          key reasons why an ICP is crucial for your business:
        </p>
        <ul>
          <li>
            <strong>Targeted Marketing Efforts:</strong> An ICP allows you to
            create highly targeted marketing campaigns. By understanding the
            specific needs and characteristics of your ideal customers, you can
            tailor your messages and offers to resonate with them, leading to
            higher conversion rates.
          </li>
          <li>
            <strong>Efficient Sales Processes:</strong> With an ICP, your sales
            team can focus their efforts on the prospects who are most likely to
            convert. This not only increases the efficiency of your sales
            process but also improves the overall customer experience.
          </li>
          <li>
            <strong>Better Product Development:</strong> Understanding your
            ideal customer helps you build better products. You can prioritize
            features and improvements that address the pain points and needs of
            your target audience, leading to higher customer satisfaction and
            loyalty.
          </li>
        </ul>
        <img
          src="/articles/cover-images/the-real-reason-you-need-an-icp.webp"
          alt="Ideal Customer Profile"
        />
        <p>
          <strong>How to Create an ICP</strong>
        </p>
        <p>Creating an ICP involves several steps:</p>
        <ol>
          <li>
            <strong>Analyze Your Current Customers:</strong> Start by analyzing
            your existing customers to identify common characteristics and
            behaviors. Look for patterns in demographics, purchasing behaviors,
            and product usage.
          </li>
          <li>
            <strong>Conduct Market Research:</strong> Market research can
            provide valuable insights into your ideal customers. Use surveys,
            interviews, and industry reports to gather data on potential
            customers who fit your profile.
          </li>
          <li>
            <strong>Define Key Characteristics:</strong> Based on your analysis
            and research, define the key characteristics of your ideal customer.
            These may include demographics (age, gender, location), behaviors
            (buying patterns, product usage), and pain points (challenges,
            needs).
          </li>
          <li>
            <strong>Create a Detailed Profile:</strong> Combine all the
            information you've gathered to create a detailed profile of your
            ideal customer. Include specific details such as age range, job
            title, industry, and key challenges.
          </li>
        </ol>
        <p>
          <strong>Conclusion</strong>
        </p>
        <p>
          Having an ICP is essential for any business looking to optimize its
          marketing, sales, and product development efforts. By focusing on your
          ideal customers, you can create more effective strategies, improve
          customer satisfaction, and ultimately drive growth for your business.
        </p>
      </>
    ),
    onBackTo: (href) => console.log(`Navigating to: ${href}`),
    onToc: (href) => console.log(`Navigating to: ${href}`),
  },
};
