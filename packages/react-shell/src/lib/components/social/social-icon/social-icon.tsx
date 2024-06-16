import React, { forwardRef } from 'react';
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
  className?: string;
}

const platformIcons = {
  linkedin: LinkedIn,
  facebook: Facebook,
  youtube: YouTube,
  instagram: Instagram,
  twitter: Twitter,
};

export const SocialIcon = forwardRef<HTMLAnchorElement, ISocialIconProps>(
  ({ platform, url, className, ...props }, ref) => {
    const IconComponent = platformIcons[platform];

    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.link} ${className}`}
        ref={ref}
        {...props}
      >
        <IconComponent className={styles.icon} />
      </a>
    );
  }
);

SocialIcon.displayName = 'SocialIcon';

export default SocialIcon;
