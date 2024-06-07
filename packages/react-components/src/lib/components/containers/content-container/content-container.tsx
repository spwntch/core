import { H2, H3, P } from '@/react-typography';
import { Badge, cn } from '@/react-ui';
import { PropsWithChildren, forwardRef } from 'react';
import {
  IContent,
  TextWithClassName,
  ParapgraphsWithClassName,
} from '../../../types';
import styles from './content-container.module.css';

export interface ContentContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    PropsWithChildren {
  innerContent: IContent;
  hAlign?: 'left' | 'center' | 'right';
  vAlign?: 'top' | 'middle' | 'bottom';
  className?: string;
}

export const ContentContainer = forwardRef<
  HTMLDivElement,
  ContentContainerProps
>(
  (
    {
      innerContent,
      hAlign = 'center',
      vAlign = 'middle',
      className,
      children,
      ...props
    },
    ref
  ) => {
    const alignmentClass = `${vAlign}-${hAlign}`;

    const titleContent =
      (innerContent.title as TextWithClassName)?.content ||
      (innerContent.title as string);
    const titleClassName =
      (innerContent.title as TextWithClassName)?.className || '';

    const subTitleContent =
      (innerContent.subTitle as TextWithClassName)?.content ||
      (innerContent.subTitle as string);
    const subTitleClassName =
      (innerContent.subTitle as TextWithClassName)?.className || '';

    const bodyContent =
      (innerContent.body as ParapgraphsWithClassName)?.content ||
      (innerContent.body as string[]);
    const bodyClassName =
      (innerContent.body as ParapgraphsWithClassName)?.className || '';

    const tagsContent =
      (innerContent.tags as ParapgraphsWithClassName)?.content ||
      (innerContent.tags as string[]);
    const tagsClassName =
      (innerContent.tags as ParapgraphsWithClassName)?.className || '';

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
          <div className={cn(styles['announcement-container'])}>
            {innerContent.announcement.message}.
            <a
              href={innerContent.announcement.href}
              className={styles['announcement-link']}
            >
              <span className={styles['absolute-inset']} aria-hidden="true" />
              Read more <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        )}
        {titleContent && (
          <H2 className={cn(styles.heading, titleClassName)}>{titleContent}</H2>
        )}
        {subTitleContent && (
          <H3 className={cn(styles.subHeading, subTitleClassName)}>
            {subTitleContent}
          </H3>
        )}
        <div className={cn(styles.body, bodyClassName)}>
          {bodyContent?.map((paragraph, index) => (
            <P key={index}>{paragraph}</P>
          ))}
        </div>
        {innerContent.bullets && (
          <ul className={styles.bullets}>
            {innerContent.bullets.map((bullet, index) => (
              <li
                key={index}
                className={cn(styles.bulletItem, bullet.className)}
              >
                {bullet.icon && (
                  <span className={styles.bulletIcon}>{bullet.icon}</span>
                )}
                <P>{bullet.text}</P>
              </li>
            ))}
          </ul>
        )}
        {tagsContent && (
          <div className={cn(styles.tags, tagsClassName)}>
            {tagsContent?.map((tag, index) => (
              <Badge key={index}>{tag}</Badge>
            ))}
          </div>
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
