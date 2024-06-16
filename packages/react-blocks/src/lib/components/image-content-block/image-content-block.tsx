import {
  ContentContainer,
  IContent,
  IImage,
  ImageContainer,
} from '@/react-components';
import { cn } from '@spwntch/ui';
import React from 'react';
import styles from './image-content-block.module.css';

interface IImageContentBlockProps {
  image: IImage;
  innerContent?: IContent;
  className?: string;
  hAlign?: 'left' | 'center' | 'right';
  vAlign?: 'top' | 'middle' | 'bottom';
  height?: number;
  hero?: boolean;
}

export const ImageContentBlock: React.FC<IImageContentBlockProps> = ({
  image,
  innerContent,
  hAlign,
  vAlign,
  className,
  height = 540,
  hero = false,
}) => {
  return (
    <div
      className={cn(styles.container, hero && 'h-screen', className)}
      style={!hero ? { height: `${height}px` } : undefined}
    >
      <ImageContainer image={image}>
        {innerContent && (
          <ContentContainer
            innerContent={innerContent}
            hAlign={hAlign}
            vAlign={vAlign}
          />
        )}
      </ImageContainer>
    </div>
  );
};

export default ImageContentBlock;
