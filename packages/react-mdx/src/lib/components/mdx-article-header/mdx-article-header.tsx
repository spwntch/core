import { Button, cn } from '@/react-ui';
import { ArrowBigLeft } from 'lucide-react';
import { IMdxDocMeta } from '../../types';
import styles from './mdx-article-header.module.css';

interface IMdxArticleHeaderProps extends IMdxDocMeta {
  backTo?: { label?: string; href: string };
  onBackTo?: (href: string) => void;
}

export const MdxArticleHeader = ({
  backTo,
  title,
  subtitle,
  tags,
  coverImage,
  onBackTo,
}: IMdxArticleHeaderProps) => {
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
      {/* 
        Uncomment and update the following code when BasicHeader and BackgroundImageHeader are available.
        {coverImage ? (
          <BackgroundImageHeader header={{ heading: title, subHeading: subtitle, tags }} image={{ src: coverImage }} />
        ) : (
          <BasicHeader header={{ heading: title, subHeading: subtitle, tags }} />
        )} 
      */}
    </div>
  );
};
