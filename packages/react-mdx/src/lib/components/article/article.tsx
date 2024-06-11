import React from 'react';
import { cn } from '@/react-ui';
import styles from './article.module.css';
import { IMdxDoc } from '../../types';

interface IArticleProps extends IMdxDoc {
  backTo?: { label?: string; href: string };
  onBackTo?: (href: string) => void;
  onToc?: (href: string) => void;
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
        {backTo && onBackTo && (
          <button onClick={() => onBackTo(backTo.href)}>
            {backTo.label || 'Back'}
          </button>
        )}
        <div className={cn(styles['prose-content'])}>{content}</div>
        {toc?.length && (
          <div className={cn(styles.toc)}>
            {/* TOC content */}
          </div>
        )}
      </article>
    </div>
  );
};
