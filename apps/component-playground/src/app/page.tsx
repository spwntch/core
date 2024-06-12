'use client';
import { ImageContentBlock } from '@/react-blocks';
export default function Index() {
  return (
    <ImageContentBlock
      className="text-white"
      hAlign="center"
      image={{
        alt: 'Guy sitting at tech control station',
        darken: true,
        src: '/images/guy-sitting-at-tech-control-station.webp',
      }}
      innerContent={{
        subTitle: {
          content: 'Pioneering the Future of Software Development',
        },
        tags: ['DevOps', 'UX/UI', 'Lean Innovation', 'Node.js'],
        title: {
          content: 'Welcome to Spawntech',
        },
      }}
      vAlign="middle"
    />
  );
}
