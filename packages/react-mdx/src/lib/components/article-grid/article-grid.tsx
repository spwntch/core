import { ArticleCard } from '../article-card/article-card';
import { cn } from '@spwntch/ui';
import styles from './article-grid.module.css';
import { IMdxDoc } from '../../types';

interface Props {
  articles: IMdxDoc[];
  onClickArticle: (slug: string) => void;
}

export const ArticleGrid = ({
  articles: posts,
  onClickArticle,
}: Props) => {
  if (!posts?.length) return <div>no posts</div>;
  return (
    <div className={cn(styles['grid-container'])}>
      {posts.map((post, index) => (
        <ArticleCard
          key={index}
          {...post.meta}
          onClick={onClickArticle}
          className="w-full"
        />
      ))}
    </div>
  );
};
