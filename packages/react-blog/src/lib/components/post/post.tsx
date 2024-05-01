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
    <div className="flex flex-col mx-auto border-2 border-red-500">
      <div>
        <PostHeader backTo={backTo} {...meta} onBackTo={onBackTo} />
      </div>
      <article className="border-2 border-blue-500  py-1 md:py-4 px-2 ">
        <div className="border-2 border-green-500 prose text-foreground prose-headings:text-foreground">
          {content}
        </div>
        {/* {toc?.length && <PostToc toc={toc} onClickToc={onToc} />} */}
      </article>
    </div>
  );
};
