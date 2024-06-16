import React, { forwardRef } from 'react';
import { About } from '../sections/about/about';
import { Contact } from '../sections/contact/contact';
import { Legal } from '../sections/legal/legal';
import { Social } from '../sections/social/social';
import styles from './regular-footer.module.css';

export interface IRegularFooterProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
}

export const RegularFooter = forwardRef<HTMLElement, IRegularFooterProps>(
  ({ className, ...props }, ref) => {
    return (
      <footer className={`${styles.footer} ${className}`} ref={ref} {...props}>
        <div className={styles.inner}>
          <div className={styles['footer-grid']}>
            <About />
            <Contact />
            <Social />
          </div>
          <hr />
          <Legal />
        </div>
      </footer>
    );
  }
);

RegularFooter.displayName = 'RegularFooter';
