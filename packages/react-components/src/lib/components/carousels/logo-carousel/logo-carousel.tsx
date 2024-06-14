import { H2 } from '@spwntch/typography';
import { Carousel, CarouselContent, CarouselItem } from '@spwntch/ui';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';

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
      className="mx-auto"
      opts={carouselOptions}
      plugins={[plugin.current]}
    >
      <H2 className="text-primary text-center">{title}</H2>
      <CarouselContent className="@apply py-8 px-8">
        {logos.map((logo, index) => (
          <CarouselItem key={index} className="flex justify-center basis-1/3">
            <div className="p-4">
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default LogoCarousel;
