import { H3 } from '@/react-typography';
import React, { forwardRef, PropsWithChildren } from 'react';
import { useBrand } from '../../../brand/brand-provider/brand-provider';
import SocialIcon, { SocialPlatform } from './social-icon/social-icon';
import styles from './social.module.css';

export interface ISocialProps
  extends React.HTMLAttributes<HTMLDivElement>,
    PropsWithChildren {
  className?: string;
}

export const Social = forwardRef<HTMLDivElement, ISocialProps>(
  ({ className, ...props }, ref) => {
    const { social } = useBrand();

    return (
      <div className={`${styles.container} ${className}`} ref={ref} {...props}>
        <H3 className={styles.title}>Follow Us</H3>
        <ul className={styles.list}>
          {social &&
            Object.keys(social).map((platform) => (
              <li key={platform}>
                <SocialIcon
                  platform={platform as SocialPlatform}
                  url={social[platform]}
                />
              </li>
            ))}
        </ul>
      </div>
    );
  }
);

Social.displayName = 'Social';

export default Social;
