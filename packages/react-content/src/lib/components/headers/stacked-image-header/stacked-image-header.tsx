import { forwardRef } from 'react';
import { IAttributableImage } from '../../../types';
import { Badge, cn } from '@/react-ui';
import { BackgroundImageContainer } from '@/react-components';
import { BasicHeader, BasicHeaderProps } from '../basic-header/basic-header';
import styles from './stacked-image-header.module.css';

interface StackedImageHeaderProps extends BasicHeaderProps {
  reverse?: boolean;
  image: IAttributableImage;
}

export const StackedImageHeader = forwardRef<
  HTMLDivElement,
  StackedImageHeaderProps
>(({ className, reverse = false, image, header, children, ...props }, ref) => {
  return (
    <div className={cn(styles.container, reverse && styles.reverse)}>
      <BackgroundImageContainer src={image.src} className={className} />
      <BasicHeader header={header} ref={ref} {...props}>
        {children}
      </BasicHeader>
      {header.tags && (
        <div className={styles.tags}>
          {header.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      )}
    </div>
  );
});

StackedImageHeader.displayName = 'StackedImageHeader';
