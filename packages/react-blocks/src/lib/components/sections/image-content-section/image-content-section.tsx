import {
  ContentContainer,
  IContent,
  IImage,
  ImageContainer,
} from '@/react-components';
import { cn } from '@/react-ui';
import React from 'react';
import styles from './image-content-section.module.css';

interface IImageContentSectionProps {
  image: IImage;
  innerContent?: IContent;
  className?: string;
  hAlign?: 'left' | 'center' | 'right';
  vAlign?: 'top' | 'middle' | 'bottom';
  height?: number;
  hero?: boolean;
}

export const ImageContentSection: React.FC<IImageContentSectionProps> = ({
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
      className={cn(styles.container, className, { 'h-screen': hero })}
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

export default ImageContentSection;
