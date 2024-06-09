import { PropsWithChildren, forwardRef } from 'react';
import { IPageSectionContent } from '../../../types';
import { cn } from '@/react-ui';
import { H1, H3, P } from '@/react-typography';
import styles from './basic-hero.module.css';

export interface BasicHeroProps
  extends React.HTMLAttributes<HTMLDivElement>,
    PropsWithChildren {
  hero: IPageSectionContent;
  alignment?: 'left' | 'center' | 'right';
  className?: string;
}

export const BasicHero = forwardRef<HTMLDivElement, BasicHeroProps>(
  ({ hero, alignment = 'center', className, children, ...props }, ref) => {
    return (
      <div
        className={cn(
          styles.container,
          alignment === 'left'
            ? styles['container--left']
            : alignment === 'right'
            ? styles['container--right']
            : styles['container--centered'],
          className
        )}
        ref={ref}
        {...props}
      >
        <H1 className={styles.heading}>{hero.heading}</H1>
        <H3 className={styles['sub-heading']}>{hero.subHeading}</H3>
        <div className={styles.body}>
          {hero.body?.map((paragraph, index) => (
            <P key={index}>{paragraph}</P>
          ))}
          <div
            className={cn(
              styles['children-container'],
              alignment === 'left'
                ? styles['children-container--left']
                : alignment === 'right'
                ? styles['children-container--right']
                : styles['children-container--centered']
            )}
          >
            {children}
          </div>
        </div>
      </div>
    );
  }
);

BasicHero.displayName = 'BasicHero';
