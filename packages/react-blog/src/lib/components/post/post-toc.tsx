import { H2 } from '@/react-components';
import { ITocItem } from '../../types';

type Props = {
  toc: ITocItem[];
};

export const PostToc = ({ toc }: Props) => {
  return (
    <>
      <H2>On this page...</H2>
      <pre>{JSON.stringify(toc, null, 2)}</pre>
    </>
  );
};
