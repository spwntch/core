import { Button, cn } from '@/react-ui';
import { ArrowBigLeft } from 'lucide-react';
import { IMdxDocMeta } from '../../types';
import styles from './mdx-article-header.module.css';
import { ImageContentBlock } from '@/react-blocks';

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
      <ImageContentBlock
        image={{ src: coverImage!, darken: true }}
        innerContent={{
          title: { content: 'Welcome to Spawntech' },
          subTitle: {
            content: 'Pioneering the Future of Software Development',
          },
          tags: ['DevOps', 'UX/UI', 'Lean Innovation', 'Node.js'],
        }}
        className="text-white"
        hAlign="center"
        height={300}
      />
      Copy
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
