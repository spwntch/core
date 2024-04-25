import { PropsWithChildren } from 'react';
import { IAttributableImage, IPageSectionContent } from '../../types';
import { cn } from '../../utils';
import { BackgroundImageContainer } from '../containers';
import { BasicPageHeader } from '../page-headers';

type Props = {
  image: IAttributableImage;
  cardAlignment?: 'center' | 'left' | 'right';
  cardClassName?: string;
  centeredHeadings?: boolean;
  content: IPageSectionContent;
};

export const RegularHero = ({
  image,
  cardAlignment = 'left',
  cardClassName,
  centeredHeadings = true,
  content,
  children,
}: Props & PropsWithChildren) => {
  return (
    <BackgroundImageContainer src={image.src} showBackgroundPattern darkenImage>
      <div
        className={cn(
          'w-full h-full flex items-center',
          cardAlignment === 'center'
            ? 'justify-center'
            : cardAlignment === 'right'
            ? 'justify-end'
            : 'justify-start'
        )}
      >
        <div className="max-w-5xl px-2">
          <BasicPageHeader content={content} className="text-left">
            {/* <p>{image.src}</p> */}
            {children}
          </BasicPageHeader>
        </div>
      </div>
    </BackgroundImageContainer>
  );
};
