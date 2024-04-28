import {
  BackgroundImageHeader,
  Button,
  IAttributableImage,
  IPageSectionContent,
} from '@/react-components';
import { ArrowBigLeft } from 'lucide-react';

type Props = {
  backTo?: { label?: string; path: string };
  image: IAttributableImage;
  header: IPageSectionContent;
  tags?: string[];
  onBackToList?: () => void;
};

export const PostHeader = ({ backTo, image, header, onBackToList }: Props) => {
  return (
    <div className="pt-4 sm:pt-16 pb-4">
      {backTo && (
        <div onClick={onBackToList} className="flex pb-4">
          <Button variant="ghost" className="flex gap-2 ">
            <ArrowBigLeft className="h-5 w-5" aria-hidden="true" />
            <span>{backTo.label || 'Back'}</span>
          </Button>
        </div>
      )}
      <BackgroundImageHeader header={header} image={image} />
    </div>
  );
};
