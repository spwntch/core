import { P } from '@spwntch/typography';
import { forwardRef } from 'react';
import {
  IBrandLegal,
  useBrand,
} from '../../../brand/brand-provider/brand-provider';
import styles from './legal.module.css';

type ILegalProps = {
  override?: IBrandLegal;
  className?: string;
};

export const Legal = forwardRef<HTMLDivElement, ILegalProps>(
  ({ override, className, ...props }, ref) => {
    const { legal } = useBrand();

    const data = override || legal;

    return (
      <div className={`${styles.container} ${className}`} ref={ref} {...props}>
        <P>
          © {data?.copyrightYear} {data?.companyName}. All Rights Reserved.
        </P>
        <div className={styles.links}>
          <a href="/privacy" target="_blank" className={styles.link}>
            Privacy Policy
          </a>
        </div>
      </div>
    );
  }
);

Legal.displayName = 'Legal';

export default Legal;
