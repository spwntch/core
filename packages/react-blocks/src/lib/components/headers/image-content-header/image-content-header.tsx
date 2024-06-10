import {
  ContentContainer,
  IContent,
  IImage,
  ImageContainer,
} from '@/react-components';
import { cn } from '@/react-ui';
import React from 'react';
import styles from './image-content-header.module.css';

interface ImageContentHeaderProps {
  image: IImage;
  innerContent?: IContent;
  className?: string;
  hAlign?: 'left' | 'center' | 'right';
  height?: number;
}

export const ImageContentHeader: React.FC<ImageContentHeaderProps> = ({
  image,
  innerContent,
  hAlign,
  className,
  height = 240,
}) => {
  return (
    <div
      className={cn(styles.container, className)}
      style={{ height: `${height}px` }}
    >
      <ImageContainer image={image}>
        {innerContent && (
          <ContentContainer
            innerContent={innerContent}
            hAlign={hAlign}
            vAlign="middle"
          />
        )}
      </ImageContainer>
    </div>
  );
};

export default ImageContentHeader;
