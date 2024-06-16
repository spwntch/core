import { H2 } from '@spwntch/typography';
import { Carousel, CarouselContent, CarouselItem } from '@spwntch/ui';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';
import styles from './logo-carousel.module.css';

export interface LogoCarouselProps {
  title: string;
  logos: string[];
}

const LogoCarousel: React.FC<LogoCarouselProps> = ({ title, logos }) => {
  if (!logos?.length) return null;
  const carouselOptions = { loop: true, duration: 4000 };
  const plugin = useRef(Autoplay({ delay: 0, jump: false }));
  return (
    <Carousel
      className={styles['logo-carousel-container']}
      opts={carouselOptions}
      plugins={[plugin.current]}
    >
      <H2 className={styles['logo-carousel-title']}>{title}</H2>
      <CarouselContent className={styles['logo-carousel-content']}>
        {logos.map((logo, index) => (
          <CarouselItem key={index} className={styles['logo-carousel-item']}>
            <div className={styles['logo-container']}>
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className={styles['logo-image']}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default LogoCarousel;
