import { H2, H3, P } from '@/react-typography';
import { cn } from '@/react-ui';
import { PropsWithChildren, forwardRef } from 'react';
import {
  IContent,
  TextWithClassName,
  ParapgraphsWithClassName,
} from '../../../types';
import { Announcement } from '../../content/announcement/announcement';
import { List } from '../../content/list/list';
import { Header } from '../../content/header/header';
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
          <Announcement
            message={innerContent.announcement.message}
            href={innerContent.announcement.href}
            className={innerContent.announcement.className}
          />
        )}
        <Header
          titleContent={titleContent}
          titleClassName={titleClassName}
          subTitleContent={subTitleContent}
          subTitleClassName={subTitleClassName}
          tagsContent={tagsContent}
          tagsClassName={tagsClassName}
        />
        <div className={cn(styles.body, bodyClassName)}>
          {bodyContent?.map((paragraph, index) => (
            <P key={index}>{paragraph}</P>
          ))}
        </div>
        {innerContent.bullets && (
          <List bullets={innerContent.bullets} />
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
