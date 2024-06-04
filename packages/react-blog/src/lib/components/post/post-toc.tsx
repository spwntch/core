import { H3, Small } from '@/react-typography';
import { ITocItem } from '../../types';

interface IPostTocProps {
  toc: ITocItem[];
  onClickToc: (href: string) => void;
}

export const PostToc = ({ toc, onClickToc }: IPostTocProps) => {
  return (
    <div className="hidden md:block w-96">
      <H3 className="mb-4">On this page...</H3>
      <ul>
        {toc.map((heading, index) => (
          <Small
            key={index}
            className="mb-2 cursor-pointer"
            onClick={() => onClickToc(heading.href)}
          >
            {heading.label}
          </Small>
        ))}
      </ul>
    </div>
  );
};
