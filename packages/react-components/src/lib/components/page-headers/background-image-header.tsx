import { forwardRef } from 'react';
// import BackgroundImageContainer from '../containers/background-image-container';
import { IAttributableImage } from '../../types';
import { BackgroundImageContainer } from '../containers';
import { BasicPageHeader, BasicPageHeaderProps } from './basic-page-header';

interface BackgroundImageHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    BasicPageHeaderProps {
  image: IAttributableImage;
}

export const BackgroundImageHeader = forwardRef<
  HTMLDivElement,
  BackgroundImageHeaderProps
>(({ className, image, header, children }) => {
  return (
    <BackgroundImageContainer
      src={image.src}
      className={className}
      showBackgroundPattern
      darkenImage
    >
      <BasicPageHeader header={header} className="text-left">
        {/* <p>{image.src}</p> */}
        {children}
      </BasicPageHeader>
      {/* {content.tags && (
        <div className="mx-auto flex flex-wrap gap-2 mb-6">
          {content.tags.map((tag) => (
            <Badge>{tag}</Badge>
          ))}
        </div>
      )} */}
    </BackgroundImageContainer>
  );
});
