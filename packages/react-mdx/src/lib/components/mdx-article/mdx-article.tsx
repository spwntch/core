import { IMdxDoc } from '../../types';
import { cn } from '@/react-ui';
import styles from './mdx-article.module.css';
// import { MdxArticleHeader } from '../mdx-article-header/mdx-article-header';
// import { MdxArticleToc } from '../mdx-article-toc/mdx-article-toc';

interface IPostProps extends IMdxDoc {
  backTo?: { label?: string; href: string };
  onBackTo?: (href: string) => void;
  onToc: (href: string) => void;
}

export const MdxArticle = ({
  backTo,
  meta,
  toc,
  content,
  onBackTo,
  onToc,
}: IPostProps) => {
  return (
    <div className={cn(styles.container)}>
      <div className={cn(styles.header)}>
        HEADER HERE
        {/* <MdxArticleHeader backTo={backTo} {...meta} onBackTo={onBackTo} /> */}
      </div>
      <article className={cn(styles.article)}>
        <div className={cn(styles['prose-content'])}>
          {content}
        </div>
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
