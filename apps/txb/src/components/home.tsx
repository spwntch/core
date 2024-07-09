'use client';
import { ImageContentBlock } from '@/react-blocks';
import { IContent, IImage } from '@/react-components';
import LogoCarousel from 'packages/react-components/src/lib/components/carousels/logo-carousel/logo-carousel';
import { clientLogos } from '../config';

const home = () => {
  const image: IImage = { src: 'images/coworkers-in-casual-workshop.webp', darken: true };
  const content: IContent = {
    title: {
      content: 'Drive business value with exceptional user experiences.',
      className: 'text-white max-w-2xl  !text-5xl md:!text-7xl',
    },
    subTitle: {
      content: `Elevate your business through engaging, user-centric designs. Enhance satisfaction, boost engagement, and ensure compliance with our expert services.`,
      className: ' text-white  max-w-2xl !text-2xl ',
    },
  };

  return (
    <div className="flex flex-col">
      <div className=" flex-1">
        <ImageContentBlock
          hero={true}
          image={image}
          innerContent={content}
          hAlign="right"
          vAlign="top"
        />
      </div>
      <LogoCarousel className='bg-white' logos={clientLogos} />
    </div>
  );
};

export default home;
