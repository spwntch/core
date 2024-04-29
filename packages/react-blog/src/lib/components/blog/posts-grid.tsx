import { IPost } from '../../types';
import { PostCard } from './post-card';

interface Props {
  posts: IPost[];
  onClickPost: (post: IPost) => void;
}

export const PostsGrid = ({ posts, onClickPost }: Props) => {

  if (!posts?.length) return <div>no posts</div>;
  return (
    <div className="px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8 mt-8">
      {posts.map((post, index) => (
        <div key={index} onClick={() => onClickPost(post)}>
          <PostCard {...post} />
        </div>
      ))}
    </div>
  );
};
