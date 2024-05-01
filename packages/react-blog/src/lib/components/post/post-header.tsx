import { BasicHeader } from '@/react-components';
import { IMdxDocMeta } from '@/react-mdx';
import {
  BackgroundImageHeader,
  Button,
  IPageSectionContent,
} from '@/react-components';
import { ArrowBigLeft } from 'lucide-react';

interface IPostHeaderProps extends IMdxDocMeta {
  backTo?: { label?: string; href: string };
  onBackTo?: (href: string) => void;
}

export const PostHeader = ({
  backTo,
  title,
  subtitle,
  tags,
  coverImage,
  onBackTo,
}: IPostHeaderProps) => {
  const header: IPageSectionContent = {
    heading: title,
    subHeading: subtitle,
    tags,
  };
  return (
    <div className=" pb-4">
      {backTo && onBackTo && (
        <Button
          variant="ghost"
          className="flex gap-2 pb-4"
          onClick={() => onBackTo(backTo.href)}
        >
          <ArrowBigLeft className="h-5 w-5" aria-hidden="true" />
          <span>{backTo.label || 'Back'}</span>
        </Button>
      )}
      {coverImage ? (
        <BackgroundImageHeader header={header} image={{ src: coverImage }} />
      ) : (
        <BasicHeader header={header} />
      )}
    </div>
  );
};
