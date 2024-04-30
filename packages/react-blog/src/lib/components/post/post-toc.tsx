import { H3 } from '@/react-components';
import { ITocItem } from '../../types';

type Props = {
  toc: ITocItem[];
};

export const PostToc = ({ toc }: Props) => {
  return (
    <div className="w-96">
      <H3 className="mb-4">On this page...</H3>
      <ul>
        {toc.map((heading) => (
          <div>{heading.label}</div>
        ))}
      </ul>
    </div>
  );
};
