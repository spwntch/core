'use client';
import React, { forwardRef } from 'react';
import { About } from '../sections/about/about';
import { Contact } from '../sections/contact/contact';
import { H3 } from '@/react-typography';
import { Legal } from '../sections/legal/legal';
import { SocialIcon } from '../../social/social-icon/social-icon';
import styles from './under-construction-footer.module.css';

export interface IUnderConstructionFooterProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  poweredBySrcLight: string;
  poweredBySrcDark: string;
}

export const UnderConstructionFooter = forwardRef<HTMLElement, IUnderConstructionFooterProps>(
  ({ className, poweredBySrcLight, poweredBySrcDark, ...props }, ref) => {
    return (
      <footer className={`${styles.footer} ${className}`} ref={ref} {...props}>
        <div className={styles.container}>
          <div className={styles['footer-grid']}>
            <About />
            <Contact />
            <div>
              <H3>Under Construction</H3>
              <div className={styles['under-construction']}>
                <img
                  width={100}
                  height={25}
                  alt="powered by spawntech"
                  src={poweredBySrcLight}
                  className="dark:hidden"
                />
                <img
                  width={100}
                  height={25}
                  alt="powered by spawntech"
                  src={poweredBySrcDark}
                  className="hidden dark:block"
                />
                <SocialIcon
                  platform="linkedin"
                  url="https://www.linkedin.com/company/spawntech-io"
                  className="w-6 h-6"
                />
              </div>
            </div>
          </div>
          <hr />
          <Legal override={{ companyName: 'Spawntech', copyrightYear: '2024' }} />
        </div>
      </footer>
    );
  }
);

UnderConstructionFooter.displayName = 'UnderConstructionFooter';
