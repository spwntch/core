import { ImageContentBlock } from '@spwntch/blocks';
import { Button, cn } from '@spwntch/ui';
import { ArrowBigLeft } from 'lucide-react';
import { IMdxDocMeta } from '../../types';
import styles from './article-header.module.css';

interface IArticleHeaderProps extends IMdxDocMeta {
  backTo?: { label?: string; href: string };
  onBackTo?: (href: string) => void;
  hAlign?: 'left' | 'center' | 'right';
  vAlign?: 'top' | 'middle' | 'bottom';
}

export const ArticleHeader = ({
  backTo,
  title,
  subtitle,
  tags,
  coverImage,
  onBackTo,
  hAlign = 'center',
  vAlign = 'middle',
}: IArticleHeaderProps) => {
  return (
    <div className={cn(styles.container)}>
      {backTo && onBackTo && (
        <Button
          variant="ghost"
          className={cn(styles['back-button'])}
          onClick={() => onBackTo(backTo.href)}
        >
          <ArrowBigLeft className={cn(styles.icon)} aria-hidden="true" />
          <span>{backTo.label || 'Back'}</span>
        </Button>
      )}
      {coverImage && (
        <ImageContentBlock
          image={{ src: coverImage, darken: true }}
          innerContent={{
            title: { content: title },
            subTitle: subtitle && { content: subtitle },
            tags: tags,
          }}
          className="text-white"
          hAlign={hAlign}
          vAlign={vAlign}
          height={300}
        />
      )}
    </div>
  );
};
