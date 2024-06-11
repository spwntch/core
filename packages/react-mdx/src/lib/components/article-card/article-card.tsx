import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/react-ui';
import { Small } from '@/react-typography';
import { cn } from '@/react-ui';
import styles from './article-card.module.css';
import { IMdxDocMeta } from '../../types';
import { Tags } from '@/react-components'; // Import the Tags component

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
      className={cn(styles.card, className)} // Use className prop
      onClick={() => onClick(slug)}
    >
      <CardContent className={cn(styles['card-content'])}>
        <img
          className={cn(styles['card-image'])}
          alt="post cover image"
          src={coverImage}
        />
      </CardContent>
      <CardHeader>
        {tags?.length && (
          <Tags tags={tags} className={styles['tags-container']} />
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
