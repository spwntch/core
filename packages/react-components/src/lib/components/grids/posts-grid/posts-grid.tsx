import { IMdxDoc } from '@/react-mdx';
import { PostCard } from '../../cards/post-card/post-card';
import { cn } from '@/react-ui';
import styles from './posts-grid.module.css';

interface Props {
  posts: IMdxDoc[];
  onClickPost: (slug: string) => void;
}

export const PostsGrid = ({ posts, onClickPost }: Props) => {
  if (!posts?.length) return <div>no posts</div>;
  return (
    <div className={cn(styles['grid-container'])}>
      {posts.map((post, index) => (
        <PostCard key={index} {...post.meta} onClick={onClickPost} className="w-full" />
      ))}
    </div>
  );
};
