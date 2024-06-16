import { Tags } from '@spwntch/components'; // Import the Tags component
import { Small } from '@spwntch/typography';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  cn,
} from '@spwntch/ui';
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
