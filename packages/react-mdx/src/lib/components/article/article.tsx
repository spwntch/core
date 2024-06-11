import { IMdxDoc } from '../../types';
import { cn } from '@/react-ui';
import styles from './article.module.css';
// import { MdxArticleHeader } from '../mdx-article-header/mdx-article-header';
// import { MdxArticleToc } from '../mdx-article-toc/mdx-article-toc';

interface IArticleProps extends IMdxDoc {
  backTo?: { label?: string; href: string };
  onBackTo?: (href: string) => void;
  onToc: (href: string) => void;
}

export const Article = ({
  backTo,
  meta,
  toc,
  content,
  onBackTo,
  onToc,
}: IArticleProps) => {
  return (
    <div className={cn(styles.container)}>
      <article className={cn(styles.article)}>
        <div className={cn(styles['prose-content'])}>{content}</div>
        {toc?.length && (
          <div className={cn(styles.toc)}>
            TOC HERE
            {/* <MdxArticleToc toc={toc} onClickToc={onToc} /> */}
          </div>
        )}
      </article>
    </div>
  );
};
