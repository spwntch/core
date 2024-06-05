import React from 'react';
import { Linkedin, Facebook, Youtube, Instagram, Twitter } from 'lucide-react';
import styles from './social-icon.module.css';

export type SocialPlatform =
  | 'linkedin'
  | 'facebook'
  | 'youtube'
  | 'instagram'
  | 'twitter';

interface ISocialIconProps {
  platform: SocialPlatform;
  url: string;
}

const platformIcons = {
  linkedin: Linkedin,
  facebook: Facebook,
  youtube: Youtube,
  instagram: Instagram,
  twitter: Twitter,
};

export const SocialIcon: React.FC<ISocialIconProps> = ({ platform, url }) => {
  const IconComponent = platformIcons[platform];

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.link}
    >
      <IconComponent className={styles.icon} />
    </a>
  );
};

export default SocialIcon;
