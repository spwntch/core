import { cn } from '@/react-ui';
import { IMdxDoc } from '../../types';
import { ArticleHeader } from '../article-header/article-header';
import { ArticleMdx } from '../article-mdx/article-mdx';

interface IArticleProps extends IMdxDoc {
  backTo?: { label?: string; href: string };
  onBackTo?: (href: string) => void;
  onToc?: (href: string) => void;
  hAlign?: 'left' | 'center' | 'right';
  vAlign?: 'top' | 'middle' | 'bottom';
}

export const Article = ({
  backTo,
  meta,
  toc,
  content,
  onBackTo,
  onToc,
  hAlign = 'center',
  vAlign = 'middle',
}: IArticleProps) => {
  return (
    <div className={cn('w-full', 'flex flex-col')}>
      <ArticleHeader
        backTo={backTo}
        onBackTo={onBackTo}
        slug={meta.slug}
        date={meta.date}
        title={meta.title}
        subtitle={meta.subtitle}
        coverImage={meta.coverImage}
        tags={meta.tags}
        hAlign={hAlign}
        vAlign={vAlign}
      />
      <ArticleMdx
        meta={meta}
        toc={toc}
        content={content}
        onBackTo={onBackTo}
        onToc={onToc}
      />
    </div>
  );
};
