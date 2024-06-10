import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/react-ui';
import { Small } from '@/react-typography';
import { IMdxDocMeta } from '@/react-mdx';
import { cn } from '@/react-ui';
import styles from './post-card.module.css';

interface IPostCardProps extends IMdxDocMeta {
  onClick: (slug: string) => void;
}

export const PostCard = ({
  slug,
  coverImage,
  date,
  title,
  subtitle,
  tags,
  onClick,
}: IPostCardProps) => {
  return (
    <Card
      className={cn(styles.card)}
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
          <ul className={cn(styles['tags-list'])}>
            {tags.map((category, index) => (
              <li key={index}>
                <Badge>{category}</Badge>
              </li>
            ))}
          </ul>
        )}
        <CardTitle>{title}</CardTitle>
        <Small>{date}</Small>
        <CardDescription className={cn(styles['card-description'])}>{subtitle}</CardDescription>
      </CardHeader>
    </Card>
  );
};
