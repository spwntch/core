import { cn } from '@spwntch/ui';
import { PropsWithChildren, forwardRef } from 'react';
import { IContent } from '../../../types';
import { Announcement } from '../../content/announcement/announcement';
import { ContentChildren } from '../../content/content-children/content-children';
import { Header } from '../../content/header/header';
import { List } from '../../content/list/list';
import { Paragraphs } from '../../content/paragraphs/paragraphs';
import {
  getBodyContentAndClassName,
  getSubTitleContentAndClassName,
  getTagsContentAndClassName,
  getTitleContentAndClassName,
} from './content-container.utils';

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

    const containerClass = cn(
      'w-full h-full flex flex-col px-1.5 py-1 sm:p-1.5 md:p-2 lg:p-3 max-w-7xl mx-auto',
      {
        'justify-start items-start text-left': alignmentClass === 'top-left',
        'justify-start items-center text-center': alignmentClass === 'top-center',
        'justify-start items-end text-right': alignmentClass === 'top-right',
        'justify-center items-start text-left': alignmentClass === 'middle-left',
        'justify-center items-center text-center': alignmentClass === 'middle-center',
        'justify-center items-end text-right': alignmentClass === 'middle-right',
        'justify-end items-start text-left': alignmentClass === 'bottom-left',
        'justify-end items-center text-center': alignmentClass === 'bottom-center',
        'justify-end items-end text-right': alignmentClass === 'bottom-right',
      },
      className
    );

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
      <div className={containerClass} ref={ref} {...props}>
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
        {children && (
          <ContentChildren alignmentClass={alignmentClass}>
            {children}
          </ContentChildren>
        )}
      </div>
    );
  }
);

ContentContainer.displayName = 'ContentContainer';
