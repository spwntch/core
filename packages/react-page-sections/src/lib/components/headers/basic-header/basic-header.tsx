import { H1, H3, P } from '@/react-typography';
import { cn } from '@/react-ui';
import { PropsWithChildren, forwardRef } from 'react';
import { IPageSectionContent } from '../../../types';
import styles from './basic-header.module.css';

export interface BasicHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    PropsWithChildren {
  header: IPageSectionContent;
  alignment?: 'left' | 'center' | 'right';
  className?: string;
}

export const BasicHeader = forwardRef<HTMLDivElement, BasicHeaderProps>(
  ({ header, alignment = 'center', className, children, ...props }, ref) => {
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
        <H1 className={styles.heading}>{header.heading}</H1>
        <H3 className={styles['sub-heading']}>{header.subHeading}</H3>
        <div className={styles.body}>
          {header.body?.map((paragraph, index) => (
            <P key={index}>{paragraph}</P>
          ))}
        </div>
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
    );
  }
);

BasicHeader.displayName = 'BasicHeader';
