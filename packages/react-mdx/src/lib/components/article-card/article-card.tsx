import { Tags } from '@spwntch/components'; // Import the Tags component
import { Small } from '@/react-typography';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  cn,
} from '@/react-ui';
import { IMdxDocMeta } from '../../types';
import styles from './article-card.module.css';

interface IPostCardProps extends IMdxDocMeta {
  onClick: (slug: string) => void;
  className?: string; // Add className prop
}

export const ArticleCard = ({
  slug,
  coverImage,
  date,
  title,
  subtitle,
  tags,
  onClick,
  className, // Destructure className prop
}: IPostCardProps) => {
  return (
    <Card
      className={cn('max-w-2xl mx-auto cursor-pointer', className)} // Use className prop
      onClick={() => onClick(slug)}
    >
      <CardContent className="m-0 p-0">
        <img
          className={cn(styles['card-image'])}
          alt="post cover image"
          src={coverImage}
        />
      </CardContent>
      <CardHeader>
        {tags?.length && (
          <Tags tags={tags} className={styles['tags-list']} />
        )}
        <CardTitle>{title}</CardTitle>
        <Small>{date}</Small>
        <CardDescription className={cn(styles['card-description'])}>
          {subtitle}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};
