import { forwardRef } from 'react';
import { IAttributableImage } from '../../types';
import { BackgroundImageContainer } from '../containers';
import { Badge } from '../ui';
import { BasicHeader, BasicHeaderProps } from './basic-header';

interface BackgroundImageHeaderProps extends BasicHeaderProps {
  image: IAttributableImage;
}

export const BackgroundImageHeader = forwardRef<
  HTMLDivElement,
  BackgroundImageHeaderProps
>(({ className, image, header, children }, ref) => {
  return (
    <BackgroundImageContainer
      src={image.src}
      className={className}
      showBackgroundPattern
      darkenImage
    >
      <BasicHeader header={header} className="text-left" ref={ref}>
        {children}
      </BasicHeader>
      {header.tags && (
        <div className="mx-auto flex flex-wrap gap-2 mb-6">
          {header.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      )}
    </BackgroundImageContainer>
  );
});
