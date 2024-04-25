'use client';
import { PropsWithChildren } from 'react';
import BackgroundImageContainer from '../containers/background-image-container';
import { BasicPageHeader } from './basic-page-header';
import { IAttributableImage, IPageSectionContent } from '../../types';
import { cn } from '../../utils';

interface IBackgroundImageHeaderProps {
  className?: string;
  reverse?: boolean;
  image: IAttributableImage;
  content: IPageSectionContent;
}

export const StackedImageHeader = ({
  className,
  reverse = false,
  image,
  content,
  children,
}: IBackgroundImageHeaderProps & PropsWithChildren) => {
  return (
    <div className={cn('flex flex-col', reverse && 'flex-col-reverse')}>
      <BackgroundImageContainer
        src={image.src}
        className={className}
      ></BackgroundImageContainer>
      <BasicPageHeader content={content}>
        {/* <p>{image.src}</p> */}
        {children}
      </BasicPageHeader>
      {/* {content.tags && (
        <div className="mx-auto flex flex-wrap gap-2">
          {content.tags.map((tag) => (
            <Badge>{tag}</Badge>
          ))}
        </div>
      )} */}
    </div>
  );
};
