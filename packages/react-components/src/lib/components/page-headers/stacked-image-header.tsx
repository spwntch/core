'use client';
import { forwardRef } from 'react';
import { IAttributableImage } from '../../types';
import { cn } from '../../utils';
import BackgroundImageContainer from '../containers/background-image-container';
import { BasicPageHeader, BasicPageHeaderProps } from './basic-page-header';

interface StackedImageHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    BasicPageHeaderProps {
  reverse?: boolean;
  image: IAttributableImage;
}

export const StackedImageHeader = forwardRef<
  HTMLDivElement,
  StackedImageHeaderProps
>(({ className, reverse = false, image, header, children }) => {
  return (
    <div className={cn('flex flex-col', reverse && 'flex-col-reverse')}>
      <BackgroundImageContainer
        src={image.src}
        className={className}
      ></BackgroundImageContainer>
      <BasicPageHeader header={header}>
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
});
