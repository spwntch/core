import React, { forwardRef, PropsWithChildren } from 'react';
import { H3, Small } from '@/react-typography';
import { useBrand } from '../../../brand/brand-provider/brand-provider';
import styles from './about.module.css';

export interface IAboutProps
  extends React.HTMLAttributes<HTMLDivElement>,
    PropsWithChildren {
  className?: string;
}

export const About = forwardRef<HTMLDivElement, IAboutProps>(
  ({ className, ...props }, ref) => {
    const { about } = useBrand();

    return (
      <div className={`${styles.container} ${className}`} ref={ref} {...props}>
        <H3 className={styles.title}>{about?.title || 'About Us'}</H3>
        <div>
          {about?.body?.map((paragraph, index) => (
            <Small key={index} className={styles.paragraph}>
              {paragraph}
            </Small>
          ))}
        </div>
      </div>
    );
  }
);

About.displayName = 'About';

export default About;
