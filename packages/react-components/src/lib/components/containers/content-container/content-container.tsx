import { cn } from '@/react-ui';
import { PropsWithChildren, forwardRef } from 'react';
import {
  IContent,
  ParapgraphsWithClassName,
  TextWithClassName,
} from '../../../types';
import { Announcement } from '../../content/announcement/announcement';
import { ContentChildren } from '../../content/content-children/content-children';
import { Header } from '../../content/header/header';
import { List } from '../../content/list/list';
import { Paragraphs } from '../../content/paragraphs/paragraphs';
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
          alignment={hAlign}
        />
        <Paragraphs content={bodyContent} className={bodyClassName} />
        {innerContent.bullets && <List bullets={innerContent.bullets} />}
        <ContentChildren alignmentClass={alignmentClass}>
          {children}
        </ContentChildren>
      </div>
    );
  }
);

ContentContainer.displayName = 'ContentContainer';
