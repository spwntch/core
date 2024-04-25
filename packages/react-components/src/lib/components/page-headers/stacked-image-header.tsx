import { forwardRef } from 'react';
import { IAttributableImage } from '../../types';
import { cn } from '../../utils';
import BackgroundImageContainer from '../containers/background-image-container';
import { BasicHeader, BasicHeaderProps } from './basic-header';

interface StackedImageHeaderProps extends BasicHeaderProps {
  reverse?: boolean;
  image: IAttributableImage;
}

export const StackedImageHeader = forwardRef<
  HTMLDivElement,
  StackedImageHeaderProps
>(({ className, reverse = false, image, header, children }, ref) => {
  return (
    <div className={cn('flex flex-col', reverse && 'flex-col-reverse')}>
      <BackgroundImageContainer
        src={image.src}
        className={className}
      ></BackgroundImageContainer>
      <BasicHeader header={header} ref={ref}>
        {children}
      </BasicHeader>
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
