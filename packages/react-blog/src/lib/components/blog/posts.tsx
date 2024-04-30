import { BasicHeader, IPageSectionContent } from '@/react-components';
import { IPost } from '../../types';
import { PostsGrid } from './posts-grid';

interface Props {
  header: IPageSectionContent;
  posts: IPost[];
  onClickPost: (post: IPost) => void;

}

export const Posts = ({ header, posts, onClickPost }: Props) => {
  return (
    <>
      <BasicHeader header={header} />
      <PostsGrid posts={posts} onClickPost={onClickPost} />
    </>
  );
};
