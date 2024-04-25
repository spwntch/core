import { forwardRef } from 'react';
import { IAttributableImage } from '../../types';
import { BackgroundImageContainer } from '../containers';
import { BasicHero, BasicHeroProps } from './basic-hero';

interface BackgroundImageHeroProps extends BasicHeroProps {
  image: IAttributableImage;
}

export const BackgroundImageHero = forwardRef<
  HTMLDivElement,
  BackgroundImageHeroProps
>(({ className, image, hero, children }, ref) => {
  return (
    <BackgroundImageContainer
      src={image.src}
      className={className}
      showBackgroundPattern
      darkenImage
    >
      <BasicHero hero={hero} className="text-left" ref={ref}>
        {children}
      </BasicHero>
    </BackgroundImageContainer>
  );
});
