import { H2, H3, P } from '@/react-typography';
import { cn } from '@/react-ui';
import { PropsWithChildren, forwardRef } from 'react';
import { IContent } from '../../../types';
import styles from './content-container.module.css';

export interface ContentContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    PropsWithChildren {
  innerContent: IContent;
  hAlign?: 'left' | 'center' | 'right';
  vAlign?: 'top' | 'middle' | 'bottom';
  className?: string;
}

export const ContentContainer = forwardRef<HTMLDivElement, ContentContainerProps>(
  ({ innerContent, hAlign = 'center', vAlign = 'middle', className, children, ...props }, ref) => {
    const alignmentClass = 
      vAlign === 'top' && hAlign === 'left'
        ? 'top-left'
        : vAlign === 'top' && hAlign === 'center'
        ? 'top-center'
        : vAlign === 'top' && hAlign === 'right'
        ? 'top-right'
        : vAlign === 'middle' && hAlign === 'left'
        ? 'middle-left'
        : vAlign === 'middle' && hAlign === 'center'
        ? 'middle-center'
        : vAlign === 'middle' && hAlign === 'right'
        ? 'middle-right'
        : vAlign === 'bottom' && hAlign === 'left'
        ? 'bottom-left'
        : vAlign === 'bottom' && hAlign === 'center'
        ? 'bottom-center'
        : vAlign === 'bottom' && hAlign === 'right'
        ? 'bottom-right'
        : 'middle-center';

    return (
      <div
        className={cn(
          styles.container,
          styles[`container--${alignmentClass}`],
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
            styles[`childrenContainer--${alignmentClass}`]
          )}
        >
          {children}
        </div>
      </div>
    );
  }
);

ContentContainer.displayName = 'ContentContainer';
