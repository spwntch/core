import { H2 } from '@/react-typography';
import { Carousel, CarouselContent, CarouselItem } from '@/react-ui';
import Autoplay from 'embla-carousel-autoplay';
import { PropsWithChildren, useRef } from 'react';
import styles from './logo-carousel.module.css';
import { cn } from '@/utils';

export interface LogoCarouselProps {
  logos: string[];
  title?: string;
  className?:string
}

const LogoCarousel: React.FC<LogoCarouselProps> = ({ logos, title,className }) => {
  if (!logos?.length) return null;
  const carouselOptions = { loop: true, duration: 6000 };
  const plugin = useRef(Autoplay({ delay: 0, jump: false }));
  return (
    <Carousel
      className={cn(styles['logo-carousel'], className)}
      opts={carouselOptions}
      plugins={[plugin.current]}
    >
      {title && <H2 className={styles['logo-carousel-title']}>{title}</H2>}
      <CarouselContent className={styles['carousel-content']}>
        {logos.map((logo, index) => (
          <CarouselItem key={index} className={styles['carousel-item']}>
            <div className={styles['logo-item-container']}>
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className={styles['logo-item']}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default LogoCarousel;
