import { useMediaQuery } from '@react-hooks-library/core';
import React, { useState } from 'react';
import YouTube from 'react-youtube';
import styles from './youtube-player.module.css';

export interface IYoutubePlayerProps {
  /** The ID of the YouTube video to be played */
  id: string;
  /** The URL of the thumbnail image to be displayed initially */
  thumbnailUrl: string;
}

export const YoutubePlayer: React.FC<IYoutubePlayerProps> = ({ id, thumbnailUrl }) => {
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
        className={styles['thumbnail']}
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
    <div className={styles['player-container']}>
      <YouTube videoId={id} opts={playerOptions} />
    </div>
  );
};