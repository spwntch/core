import React from 'react';
import styles from './social-icon.module.css';
import { LinkedIn } from './linkedin';
import { Facebook } from './facebook';
import { YouTube } from './youtube';
import { Instagram } from './instagram';
import { Twitter } from './twitter';

export type SocialPlatform = 'linkedin' | 'facebook' | 'youtube' | 'instagram' | 'twitter';

interface ISocialIconProps {
  platform: SocialPlatform;
  url: string;
}

const platformIcons = {
  linkedin: LinkedIn,
  facebook: Facebook,
  youtube: YouTube,
  instagram: Instagram,
  twitter: Twitter,
};

export const SocialIcon: React.FC<ISocialIconProps> = ({ platform, url }) => {
  const IconComponent = platformIcons[platform];

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className={styles.link}>
      <IconComponent className={styles.icon} />
    </a>
  );
};

export default SocialIcon;
