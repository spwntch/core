import { IAttributableImage, IPageSectionContent } from '@/react-components';
import { PropsWithChildren } from 'react';
import { PostHeader } from './post-header';
import { IMdxDoc } from '../../types';
import { PostToc } from './post-toc';
import { PostContent } from './post-content';

interface IPostProps {
  backTo?: { label?: string; path: string };
  image: IAttributableImage;
  header: IPageSectionContent;
  post: IMdxDoc | undefined;
  onBackToList?: () => void;
}

export const Post = ({
  backTo,
  image,
  header,
  post,
  onBackToList,
}: IPostProps & PropsWithChildren) => {
  // const { toc, content, meta } = post;

  return (
    <div className="flex flex-col mx-2 md:mx-auto max-w-6xl">
      <div>
        <PostHeader
          backTo={backTo}
          image={image}
          header={header}
          onBackToList={onBackToList}
        />
      </div>
      <div className="flex">
        <div className="px-2 flex-1">
          <PostContent>{post?.content}</PostContent>
        </div>
        <div className="w-96 p-2">{<PostToc toc={post?.toc || []} />}</div>
      </div>
    </div>
  );
};
