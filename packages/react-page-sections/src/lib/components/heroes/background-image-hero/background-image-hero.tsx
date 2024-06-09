import { BackgroundImageContainer } from '@/react-components';
import { forwardRef } from 'react';
import { IAttributableImage } from '../../../types';
import { BasicHero, BasicHeroProps } from '../basic-hero/basic-hero';
import { cn } from '@/react-ui';
import styles from './background-image-hero.module.css';

interface BackgroundImageHeroProps extends BasicHeroProps {
  image: IAttributableImage;
}

export const BackgroundImageHero = forwardRef<
  HTMLDivElement,
  BackgroundImageHeroProps
>(({ className, image, hero, children, ...props }, ref) => {
  return (
    <BackgroundImageContainer
      src={image.src}
      className={styles.container}
      showBackgroundPattern
      darkenImage
    >
      <BasicHero hero={hero} className={className} ref={ref} {...props}>
        {children}
      </BasicHero>
    </BackgroundImageContainer>
  );
});

BackgroundImageHero.displayName = 'BackgroundImageHero';
