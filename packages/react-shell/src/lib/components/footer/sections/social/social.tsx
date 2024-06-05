import React, { forwardRef, PropsWithChildren } from 'react';
import { Linkedin } from 'lucide-react';
import { useBrand } from '../../../brand/brand-provider/brand-provider';
import { H3 } from '@/react-typography';
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
          {social?.linkedin && (
            <li>
              <a
                href={`${social?.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className={styles.icon} />
              </a>
            </li>
          )}
          {/* Uncomment and update the following lines as needed */}
          {/* {social?.youtube && (
            <li>
              <a href={`${social?.youtube}`} target="_blank" rel="noopener noreferrer">
                <Youtube className={styles.icon} />
              </a>
            </li>
          )}
          {social?.facebook && (
            <li>
              <a href={`${social?.facebook}`} target="_blank" rel="noopener noreferrer">
                <Facebook className={styles.icon} />
              </a>
            </li>
          )} */}
        </ul>
      </div>
    );
  }
);

Social.displayName = 'Social';

export default Social;
