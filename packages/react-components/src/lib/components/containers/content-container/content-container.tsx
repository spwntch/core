import { cn } from '@/react-ui';
import { PropsWithChildren, forwardRef } from 'react';
import { IContent } from '../../../types';
import { Announcement } from '../../content/announcement/announcement';
import { ContentChildren } from '../../content/content-children/content-children';
import { Header } from '../../content/header/header';
import { List } from '../../content/list/list';
import { Paragraphs } from '../../content/paragraphs/paragraphs';
import {
  getTitleContentAndClassName,
  getSubTitleContentAndClassName,
  getBodyContentAndClassName,
  getTagsContentAndClassName,
} from './content-container.utils';
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

    const { titleContent, titleClassName } = getTitleContentAndClassName(
      innerContent.title
    );
    const { subTitleContent, subTitleClassName } =
      getSubTitleContentAndClassName(innerContent.subTitle);
    const { bodyContent, bodyClassName } = getBodyContentAndClassName(
      innerContent.body
    );
    const { tagsContent, tagsClassName } = getTagsContentAndClassName(
      innerContent.tags
    );

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
        {bodyContent && (
          <Paragraphs content={bodyContent} className={bodyClassName} />
        )}
        {innerContent.bullets && <List bullets={innerContent.bullets} />}
        <ContentChildren alignmentClass={alignmentClass}>
          {children}
        </ContentChildren>
      </div>
    );
  }
);

ContentContainer.displayName = 'ContentContainer';
