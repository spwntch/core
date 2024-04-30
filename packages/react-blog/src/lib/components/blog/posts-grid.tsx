import { IMdxDoc } from '@/react-mdx';
import { usePathname } from 'next/navigation';
import { PostCard } from './post-card';

interface Props {
  posts: IMdxDoc[];
  onClickPost: (slug: string) => void;
}

export const PostsGrid = ({ posts, onClickPost }: Props) => {
  const pathname = usePathname();

  if (!posts?.length) return <div>no posts</div>;
  return (
    <div className="px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8 mt-8">
      {posts.map((post, index) => (
        <PostCard {...post.meta} onClick={onClickPost} />
      ))}
    </div>
  );
};
