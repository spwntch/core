import { IContent, IImage } from '../../../types';
import BackgroundImageContainer from '../../containers/background-image-container/background-image-container';
import { ContentContainer } from '../../containers/content-container/content-container';

interface ImageContentLayerProps {
  image: IImage;
  innerContent?: IContent;
}

export const ImageContentLayer = ({
  image,
  innerContent,
}: ImageContentLayerProps) => {
  return (
    <div className="h-full w-full">
      <BackgroundImageContainer image={image} />
      {innerContent && <ContentContainer innerContent={innerContent} />}
    </div>
  );
};
