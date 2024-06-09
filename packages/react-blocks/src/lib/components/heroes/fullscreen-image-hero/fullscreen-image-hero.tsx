import React from 'react';
import { IImage, IContent } from '@/react-components';
import { ImageContainer } from '@/react-components';
import { ContentContainer } from '@/react-components';

interface FullscreenImageContentHeroProps {
  image: IImage;
  innerContent?: IContent;
  className?: string;
}

export const FullscreenImageContentHero: React.FC<FullscreenImageContentHeroProps> = ({
  image,
  innerContent,
  className,
}) => {
  return (
    <div className="h-screen w-full">
      <ImageContainer image={image} className={className}>
        {innerContent && <ContentContainer innerContent={innerContent} />}
      </ImageContainer>
    </div>
  );
};
