import { BackgroundImageContainer } from '@/react-components';
import { Badge, cn } from '@/react-ui';
import { forwardRef } from 'react';
import { IAttributableImage } from '../../../types';
import { BasicHeader, BasicHeaderProps } from '../basic-header/basic-header';
import styles from './background-image-header.module.css';

interface BackgroundImageHeaderProps extends BasicHeaderProps {
  image: IAttributableImage;
  placeRight?: boolean;
}

export const BackgroundImageHeader = forwardRef<
  HTMLDivElement,
  BackgroundImageHeaderProps
>(({ className, image, placeRight, header, children, ...props }, ref) => {
  return (
    <BackgroundImageContainer
      src={image.src}
      className={className}
      showBackgroundPattern
      darkenImage
    >
      <BasicHeader
        header={header}
        className={cn(
          styles.container,
          placeRight ? styles.right : styles.left
        )}
        ref={ref}
        {...props}
      >
        {children}
      </BasicHeader>
      {header.tags && (
        <div className={styles.tags}>
          {header.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      )}
    </BackgroundImageContainer>
  );
});

BackgroundImageHeader.displayName = 'BackgroundImageHeader';
