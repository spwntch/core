'use client';
import { ImageContentBlock } from '@/react-blocks';
import { IContent, IImage } from '@/react-components';

const home = () => {
  const image: IImage = { src: 'images/home-hero.webp', darken: true };
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
    <div className=" h-[calc(100vh-85px)]">
      <ImageContentBlock
        hero={true}
        image={image}
        innerContent={content}
        hAlign="right"
        vAlign="top"
      />
    </div>
  );
};

export default home;
