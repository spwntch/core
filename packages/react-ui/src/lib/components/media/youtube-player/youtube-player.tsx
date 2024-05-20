import { useMediaQuery } from '@react-hooks-library/core';
import { useState } from 'react';
import YouTube from 'react-youtube';
import { cn } from '../../../utils';
import styles from './youtube-player.module.css';

interface YoutubePlayerProps {
  id: string;
  thumbnailUrl: string;
  className?: string;
}

/**
 * YoutubePlayer component to display a YouTube video or a thumbnail.
 * - Click on the thumbnail to display the YouTube player.
 * - Responsive player size based on screen width.
 */
export const YoutubePlayer = ({
  id,
  thumbnailUrl,
  className,
}: YoutubePlayerProps) => {
  const is2Xl = useMediaQuery('(min-width: 1536px)');
  const isXl = useMediaQuery('(min-width: 1280px)');
  const isLg = useMediaQuery('(min-width: 1024px)');
  const isMd = useMediaQuery('(min-width: 768px)');
  const isSm = useMediaQuery('(min-width: 640px)');

  const [displayPlayer, setDisplayPlayer] = useState(false);

  if (!displayPlayer)
    return (
      <img
        src={thumbnailUrl}
        alt="youtube-vid-placeholder"
        className={cn(styles['youtube-player__thumbnail'], className)}
        onClick={() => {
          if (!displayPlayer) setDisplayPlayer(true);
        }}
      />
    );

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
    <div className={cn(styles['youtube-player__container'], className)}>
      <YouTube videoId={id} className="" opts={playerOptions} />
    </div>
  );
};
