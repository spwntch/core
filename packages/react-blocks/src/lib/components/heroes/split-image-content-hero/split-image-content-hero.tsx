import {
  ContentContainer,
  IContent,
  IImage,
  ImageContainer,
  SplitLayout,
  
} from '@/react-components';
import React from 'react';

interface SplitImageContentHeroProps {
  image: IImage;
  innerContent?: IContent;
  split?: 'horizontal' | 'vertical';
  flip?: boolean;
  className?: string;
}

export const SplitImageContentHero: React.FC<SplitImageContentHeroProps> = ({
  image,
  innerContent,
  split = 'horizontal',
  flip,
  className,
}) => {
  const imagePane = <ImageContainer image={image} className={className} />;
  const contentPane = innerContent && (
    <ContentContainer innerContent={innerContent} />
  );

  return (
    <div className="h-screen w-full">
      <SplitLayout
        split={split}
        flip={flip}
        className="h-full"
        containers={[imagePane, contentPane]}
      />
    </div>
  );
};
