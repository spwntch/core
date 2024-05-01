import { IMdxDoc } from '@/react-mdx';
import { PostHeader } from './post-header';
import { PostToc } from './post-toc';

interface IPostProps extends IMdxDoc {
  backTo?: { label?: string; href: string };
  onBackTo?: (href: string) => void;
  onToc: (href: string) => void;
}

export const Post = ({
  backTo,
  meta,
  toc,
  content,
  onBackTo,
  onToc,
}: IPostProps) => {
  return (
    <div className="w-full flex flex-col mx-auto ">
      <div>
        <PostHeader backTo={backTo} {...meta} onBackTo={onBackTo} />
      </div>
      <article className="  py-1 md:py-4 px-2 ">
        <div className="border-2 border-green-500 prose max-w-none text-foreground prose-headings:text-foreground prose-strong:text-foreground ">
          {content}
        </div>
        {toc?.length && <PostToc toc={toc} onClickToc={onToc} />}
      </article>
    </div>
  );
};
