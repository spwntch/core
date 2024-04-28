import Link from 'next/link';
import { IPost } from '../../types';
import { PostCard } from './post-card';
import { usePathname } from 'next/navigation';

interface Props {
  posts: IPost[];
}

export const PostsGrid = ({ posts }: Props) => {
  const pathname = usePathname();

  if (!posts?.length) return <div>no posts</div>;
  return (
    <div className="px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8 mt-8">
      {posts.map((post, index) => (
        <Link key={index} href={`${pathname}/${post.meta.slug}`}>
          <PostCard {...post} />
        </Link>
      ))}
    </div>
  );
};
