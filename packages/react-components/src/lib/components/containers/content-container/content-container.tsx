import { H2, H3, P } from '@/react-typography';
import { cn } from '@/react-ui';
import { PropsWithChildren, forwardRef } from 'react';
import { IContent } from '../../../types';
import styles from './content-container.module.css';

export interface ContentContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    PropsWithChildren {
  innerContent: IContent;
  alignment?: 'left' | 'center' | 'right';
  className?: string;
}

export const ContentContainer = forwardRef<HTMLDivElement, ContentContainerProps>(
  ({ innerContent, alignment = 'center', className, children, ...props }, ref) => {
    return (
      <div
        className={cn(
          styles.container,
          alignment === 'left'
            ? styles['container--left']
            : alignment === 'right'
            ? styles['container--right']
            : styles['container--center'],
          className
        )}
        ref={ref}
        {...props}
      >
        {innerContent.announcement && (
          <div className={styles.announcement}>
            <P>{innerContent.announcement.message}</P>
            <div>{innerContent.announcement.cta}</div>
          </div>
        )}
        {innerContent.heading && <H2 className={styles.heading}>{innerContent.heading}</H2>}
        {innerContent.subHeading && <H3 className={styles.subHeading}>{innerContent.subHeading}</H3>}
        <div className={styles.body}>
          {innerContent.body?.map((paragraph, index) => (
            <P key={index}>{paragraph}</P>
          ))}
        </div>
        {innerContent.bullets && (
          <ul className={styles.bullets}>
            {innerContent.bullets.map((bullet, index) => (
              <li key={index} className={styles.bulletItem}>
                {bullet.icon && <span className={styles.bulletIcon}>{bullet.icon}</span>}
                <P>{bullet.text}</P>
              </li>
            ))}
          </ul>
        )}
        <div
          className={cn(
            styles.childrenContainer,
            alignment === 'left'
              ? styles['childrenContainer--left']
              : alignment === 'right'
              ? styles['childrenContainer--right']
              : styles['childrenContainer--center']
          )}
        >
          {children}
        </div>
      </div>
    );
  }
);

ContentContainer.displayName = 'ContentContainer';
