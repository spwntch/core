import { IMdxDoc } from '@/react-mdx';
import { PostHeader } from './post-header';

interface IPostProps extends IMdxDoc {
  backTo?: { label?: string; href: string };
  onBackTo?: (href: string) => void;
}

export const Post = ({ backTo, meta, toc, content, onBackTo }: IPostProps) => {
  return (
    <div className="flex flex-col mx-2 md:mx-auto max-w-6xl">
      <div>
        <PostHeader backTo={backTo} {...meta} onBackTo={onBackTo} />
      </div>
      <div className="px-2">
        <article className="max-w-none py-8 relative isolate prose text-foreground prose-headings:text-foreground">
          {content}
        </article>
      </div>
    </div>
  );
};
