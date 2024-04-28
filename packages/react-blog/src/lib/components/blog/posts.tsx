import { BasicHeader, IPageSectionContent } from '@/react-components';
import { IPost } from '../../types';
import { PostsGrid } from './posts-grid';

interface Props {
  header: IPageSectionContent;
  posts: IPost[];
}

export const Posts = ({ header, posts }: Props) => {
  return (
    <>
      <BasicHeader header={header} />
      <PostsGrid posts={posts} onClickPost={(e) => console.log(e)} />
    </>
  );
};
