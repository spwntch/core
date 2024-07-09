'use client';
import {
  ContentBlock,
  ImageContentBlock,
  MultiPanelBlock,
} from '@/react-blocks';
import { IContent, IImage, YoutubePlayer } from '@/react-components';
import LogoCarousel from 'packages/react-components/src/lib/components/carousels/logo-carousel/logo-carousel';
import { clientLogos } from '../config';
import { Divide } from 'lucide-react';

const home = () => {
  const image: IImage = {
    src: 'images/coworkers-in-casual-workshop.webp',
    darken: true,
  };
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
  const aboutCotent: IContent = {
    title: {
      content: `Decades of Dedicated Excellence: Your Strategic Partner in CX, UX, and Market Insights`,
      className: '!text-4xl max-w-3xl text-primary',
    },
    body: [
      `For over two decades, Interact RDT has been at the forefront of delivering unparalleled customer experience and user experience solutions. Our clientele includes global leaders who testify to our ability to consistently provide top-notch quality while ensuring significant cost savings. We're more than just a vendor; we're your strategic partner, ensuring that you don't just meet but exceed your business goals.`,
    ],
  };

  return (
    <div className="flex flex-col">
      {/* <div className=" flex-1">
        <ImageContentBlock
          hero={true}
          image={image}
          innerContent={content}
          hAlign="right"
          vAlign="top"
        />
      </div> */}
      <div className="text-primary text-7xl">hello</div>
      {/* <LogoCarousel className="bg-white" logos={clientLogos} /> */}
      {/* <MultiPanelBlock
        containers={[
          <div>two</div>,
          <YoutubePlayer id="1xgP-dR4dzI" thumbnailUrl="" />,
          <ContentBlock innerContent={aboutCotent} hAlign="left" />,
        ]}
        orientation="vertical"
        flip={true}
      ></MultiPanelBlock> */}
    </div>
  );
};

export default home;
