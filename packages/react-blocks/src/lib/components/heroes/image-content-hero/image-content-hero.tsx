import React from 'react';
import { IImage, IContent } from '@/react-components';
import { ImageContainer } from '@/react-components';
import { ContentContainer } from '@/react-components';
import styles from './image-content-hero.module.css';

interface FullscreenImageContentHeroProps {
  image: IImage;
  innerContent?: IContent;
  className?: string;
  vAlign?: 'top' | 'middle' | 'bottom';
  hAlign?: 'left' | 'center' | 'right';
}

export const ImageContentHero: React.FC<FullscreenImageContentHeroProps> = ({
  image,
  innerContent,
  vAlign,
  hAlign,
  className,
  }) => {
    return (
    <div className={styles.container}>
      <ImageContainer image={image} className={className}>
        {innerContent && (
          <ContentContainer
            innerContent={innerContent}
            vAlign={vAlign}
            hAlign={hAlign}
          />
        )}
      </ImageContainer>
    </div>
  );
};
