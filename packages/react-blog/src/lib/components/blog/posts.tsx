import { IPageSectionContent } from '@/react-components';
import { IPost } from '../../types';

interface Props {
  header: IPageSectionContent;
  posts: IPost[];
  onClickPost: (post: IPost) => void;

}

export const Posts = ({ header, posts, onClickPost }: Props) => {
  return (
    <>
      {/* <BasicHeader header={header} /> */}
      {/* <PostsGrid posts={posts} onClickPost={onClickPost} /> */}
    </>
  );
};
