'use client';
import { ImageContentBlock } from '@/react-blocks';

export const HomePage = () => {
  return (
    <ImageContentBlock
      className="text-white"
      hero={true}
      image={{
        src: '/images/guy-sitting-at-tech-control-station.webp',
        alt: 'Guy sitting at tech control station',
        darken: true,
      }}
      innerContent={{
        title: {
          content: 'Welcome to Spawntech',
        },
        subTitle: {
          content: 'Pioneering the Future of Software Development',
        },
      }}
    />
  );
};
