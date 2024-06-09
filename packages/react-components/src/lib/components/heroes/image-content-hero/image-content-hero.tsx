import { PropsWithChildren } from 'react';
import { IContent, IImage } from '../../../types';
import BackgroundImageContainer from '../../containers/image-container/image-container';
import { ContentContainer } from '../../containers/content-container/content-container';

interface ImageContentHeroProps extends PropsWithChildren {
  image: IImage;
  innerContent?: IContent;
}

export const ImageContentHero = ({
  image,
  innerContent,
  children,
}: ImageContentHeroProps) => {
  return (
    <div className="h-screen w-full">
      <BackgroundImageContainer image={image}>
        {innerContent && (
          <ContentContainer innerContent={innerContent}>
            {children}
          </ContentContainer>
        )}
      </BackgroundImageContainer>
    </div>
  );
};
