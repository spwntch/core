import { PropsWithChildren } from 'react';
// import BackgroundImageContainer from '../containers/background-image-container';
import { IAttributableImage, IPageSectionContent } from '../../types';
import { BackgroundImageContainer } from '../containers';
import { BasicPageHeader } from './basic-page-header';

interface IBackgroundImageHeaderProps {
  className?: string;
  image: IAttributableImage;
  header: IPageSectionContent;
}

export const BackgroundImageHeader = ({
  className,
  image,
  header,
  children,
}: IBackgroundImageHeaderProps & PropsWithChildren) => {
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
};
