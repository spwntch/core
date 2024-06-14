import { useMediaQuery } from '@react-hooks-library/core';
import React, { useState } from 'react';
import YouTube from 'react-youtube';

export interface IYoutubePlayerProps {
  id: string;
  thumbnailUrl: string;
}

export const YoutubePlayer: React.FC<IYoutubePlayerProps> = ({
  id,
  thumbnailUrl,
}) => {
  const is2Xl = useMediaQuery('(min-width: 1536px)');
  const isXl = useMediaQuery('(min-width: 1280px)');
  const isLg = useMediaQuery('(min-width: 1024px)');
  const isMd = useMediaQuery('(min-width: 768px)');
  const isSm = useMediaQuery('(min-width: 640px)');

  const [displayPlayer, setDisplayPlayer] = useState(false);

  if (!displayPlayer) {
    return (
      <img
        src={thumbnailUrl}
        alt="youtube-vid-placeholder"
        className={`
          mx-auto w-[320px] h-[180px] 
          sm:w-[592px] sm:h-[333px] 
          md:w-[672px] md:h-[378px] 
          lg:w-[464px] lg:h-[261px] 
          xl:w-[592px] xl:h-[333px] 
          2xl:w-[720px] 2xl:h-[405px] 
          lg:mx-0 sm:mb-6 md:mb-12 lg:mb-0 xl:mb-3 2xl:mb-0
        `}
        onClick={() => setDisplayPlayer(true)}
      />
    );
  }

  const playerSize = is2Xl
    ? { width: '720', height: '405' }
    : isXl
    ? { width: '592', height: '333' }
    : isLg
    ? { width: '464', height: '261' }
    : isMd
    ? { width: '672', height: '378' }
    : isSm
    ? { width: '592', height: '333' }
    : { width: '320', height: '180' };

  const playerOptions = { playerVars: { autoplay: 1 }, ...playerSize };

  return (
    <div
      className={`
        h-[180px] sm:h-[357px] md:h-[426px] lg:h-auto xl:h-[345px] 2xl:h-[405px] 
        mx-auto lg:mx-0 xl:mx-1
      `}
    >
      <YouTube videoId={id} opts={playerOptions} />
    </div>
  );
};
