import { H2, H3 } from '@/react-components';
import { ITocItem } from '../../types';

type Props = {
  toc: ITocItem[];
};

export const PostToc = ({ toc }: Props) => {
  return (
    <>
      <H3 className="mb-4">On this page...</H3>
      {!toc.length ? (
        <p>Hmm... Nothing found.</p>
      ) : (
        <pre>{JSON.stringify(toc, null, 2)}</pre>
      )}
    </>
  );
};
